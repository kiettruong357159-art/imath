/**
 * api-security.js — Transport fetch chung lấy nonce gắn phiên trước yêu cầu API JSON.
 * Nạp trước các module học sinh/phụ huynh/quản trị/giáo viên; không lưu token vào localStorage.
 * Nonce chỉ ở RAM; header sau mỗi phản hồi cập nhật theo cookie mới khi chuyển con/đăng xuất.
 * API: get_csrf_token; quy tắc S1/S2/S10 trong khối sửa bảo mật 08/10/2026.
 */
(() => {
  "use strict";
  const transport = window.fetch.bind(window);
  const tokens = new Map();
  const pending = new Map();
  const stamps = new Map();
  let epoch = 0;
  let sequence = 0;
  let nonceQueue = Promise.resolve();
  const NONCE_FETCH_ROUNDS = 2; // Một lần lấy mới nếu promise cũ mất hiệu lực khi vai/cookie vừa đổi.
  /** Đổi cookie thì bỏ cache của vai khác, tránh dùng nonce của con/phiên quản trị trước. */
  function remember(response, key, requestEpoch, requestSequence) {
    const refreshed = response.headers.get("X-CSRF-Refresh") === "1";
    if (refreshed) { epoch++; tokens.clear(); stamps.clear(); }
    else if (requestEpoch !== epoch || requestSequence < (stamps.get(key) || 0)) return;
    // Phản hồi đọc đến muộn không được ghi đè nonce của phiên/con vừa chuyển.
    const token = response.headers.get("X-CSRF-Token");
    if (token) { tokens.set(key, token); stamps.set(key, requestSequence); }
  }
  /** Chỉ bọc cửa API cùng origin, không gửi nonce tới tài nguyên/website ngoài. */
  window.imathApiFetch = async (input, options = {}) => {
    const url = new URL(typeof input === "string" ? input : input.url, document.baseURI);
    if (url.origin !== location.origin || !/(?:api|arena-api)\.php$/.test(url.pathname))
      return transport(input, options);
    const headers = new Headers(options.headers || {});
    if (url.searchParams.get("action")?.startsWith("admin_") && !headers.has("X-Parent-Token")) {
      try {
        const body = JSON.parse(options.body || "{}");
        if (typeof body.token === "string" && body.token) headers.set("X-Parent-Token", body.token);
      } catch { /* Gateway vẫn kiểm JSON; không thay phản hồi lỗi của request gốc. */ }
    }
    const csrfUrl = new URL(url);
    csrfUrl.search = "?action=get_csrf_token";
    const csrfHeaders = new Headers();
    if (headers.has("X-Parent-Token")) csrfHeaders.set("X-Parent-Token", headers.get("X-Parent-Token"));
    const key = headers.get("X-Parent-Token") || "cookie";
    const studentList = url.searchParams.get("action") === "gv_student_list";
    if (studentList && !headers.has("X-Imath-CSRF-Read")) headers.set("X-Imath-CSRF-Read", String(++sequence));
    // Phụ huynh/admin có thể đổi cookie từ tab Google khác; luôn lấy nonce hiện tại trước các cửa đặc quyền.
    // Các RPC lớp học thường giữ phiên ổn định và dùng nonce phản hồi để không tăng độ trễ khi vẽ lại DOM.
    // Bài cô giao được tải nền ngay sau đổi con/đăng nhập từ tab khác. Cookie đã đổi nhưng
    // cache của trang này chưa nhận X-CSRF-Refresh: luôn xin nonce hiện tại cho lần đọc danh sách.
    if (/^(?:parent_|gv_parent_|admin_|gv_admin_|gv_private_admin_|gv_student_list$)/.test(url.searchParams.get("action") || "")) tokens.delete(key);
    for (let round = 0; !tokens.has(key) && round < NONCE_FETCH_ROUNDS; round++) {
      if (!pending.has(key)) {
        const request = nonceQueue.then(async () => {
          const requestEpoch = epoch;
          const requestSequence = ++sequence;
          const nonce = await transport(csrfUrl, { credentials: "same-origin", headers: csrfHeaders });
          if (!nonce.ok) throw new Error("Không thể xác thực yêu cầu. Vui lòng tải lại trang.");
          remember(nonce, key, requestEpoch, requestSequence);
        });
        nonceQueue = request.catch(() => undefined);
        pending.set(key, request.finally(() => pending.delete(key)));
      }
      await pending.get(key);
    }
    if (!tokens.has(key)) throw new Error("Không thể xác thực yêu cầu. Vui lòng tải lại trang.");
    headers.set("X-CSRF-Token", tokens.get(key) || "");
    const requestEpoch = epoch;
    const requestSequence = ++sequence;
    const response = await transport(input, { ...options, headers });
    remember(response, key, requestEpoch, requestSequence);
    // Tab khác còn có thể đổi cookie GIỮA GET nonce và POST. Chỉ danh sách bài giao được
    // xin nonce/gọi lại một lần khi gateway từ chối trước dispatch; không replay mutation.
    if (studentList && typeof input === "string" && response.status === 403 && !headers.has("X-Imath-CSRF-Retry")) {
      const failure = await response.clone().json().catch(() => null);
      if (failure?.error_code === "CSRF_INVALID") {
        tokens.delete(key);
        headers.set("X-Imath-CSRF-Retry", "1");
        return window.imathApiFetch(input, { ...options, headers });
      }
    }
    return response;
  };
})();
