/**
 * cham-ngon-hoc-tap.js — Một lời nhắc về học tập, rèn luyện và cách làm người cho mỗi phiên đăng nhập.
 * Dùng: core.js (escapeHtml, icon, state); phien-hoc-sinh.js mở/đóng phiên; on-cau-sai.js hiển thị.
 * Danh sách do user cung cấp ngày 11/10/2026; câu trùng "Măng không uốn…" chỉ giữ một lần.
 * Chỉ nhớ lựa chọn trong tab bằng sessionStorage; không gọi API, không ghi DB hay thay đổi số câu cần ôn.
 */
"use strict";

window.IMATH_STUDY_PROVERBS = (() => {
  const STORAGE_KEY = "imath_study_proverb_v1";
  const PROVERBS = Object.freeze([
    "Học là học để làm người. Biết điều hơn thiệt biết lời thị phi.",
    "Học là học biết giữ giàng. Biết điều nhân nghĩa biết đàng hiếu trung",
    "Làm người mà được khôn ngoan\nCũng nhờ học tập, mọi đường mọi hay\nNghề gì đã có trong tay,\nCố công rèn luyện, có ngày thành công!",
    "Học là học để mà hành\nVừa hành vừa học mới thành người khôn",
    "Ngọc kia chẳng giũa chẳng mài\nCũng thành vô dụng cũng hoài ngọc đi.",
    "Cá không ăn muối cá ươn,\nCon cãi cha mẹ trăm đường con hư.",
    "Giàu người ta chẳng có tham\nKhó thì ta liệu ta làm ta ăn.",
    "Măng không uốn, uốn tre sao được",
    "Bé chẳng vin, cả gãy cành",
    "Cao nhân tất hữu cao nhân trị",
    "Chẳng học lấy đâu biết chữ",
    "Chưa đỗ ông nghè đã đe hàng tổng",
    "Có học mới biết, có đi mới đến",
    "Con học, thóc vay",
    "Dốt đặc còn hơn chữ lỏng",
    "Dốt đến đâu học lâu cũng biết",
    "Đi một ngày đàng, học một sàng khôn",
    "Ếch ngồi đáy giếng",
    "Học ăn, học nói, học gói, học mở",
    "Khi măng không uốn thì tre trổ vồng",
    "Không thầy đố mày làm nên",
    "Muốn biết phải hỏi, muốn giỏi phải học",
    "Muốn lành nghề chớ nề học hỏi",
    "Người roi, voi búa",
    "Non chẳng uốn, già nổ đốt",
    "Thiên ngoại hữu thiên, nhân ngoại hữu nhân",
    "Tiên học lễ, hậu học văn",
    "Văn có bài, vũ có trận",
    "Văn hay chẳng lọ dài dòng",
    "Yêu cho vọt, ghét cho chơi",
    "Yêu cho roi cho vọt, ghét cho ngọt cho bùi",
    "Luyện mãi thành tài, miệt mài tất giỏi.",
    "Hay học thì sang, hay làm thì có.",
    "Ngồi dưng ăn hoang, mỏ vàng cũng cạn.",
    "Có chí làm quan, có gan làm giàu.",
    "Người có chí thì nên, nhà có nền thì vững.",
    "Có thân phải khổ, có khổ mới nên thân.",
    "Học khôn đến chết, học nết đến già",
    "Người không học như ngọc không mài",
    "Một kho vàng không bằng một nang chữ",
    "Ăn vóc học hay.",
    "Có cày có thóc, có học có chữ.",
    "Dao có mài mới sắc, người có học mới nên.",
    "Cần cù bù thông minh.",
    "Học đâu hiểu đấy.",
    "Học đi đôi với hành",
    "Học một biết mười.",
    "Học hay, cày biết",
    "Học thầy học bạn, vô vạn phong lưu",
    "Học hành vất vả kết quả ngọt bùi",
  ]);
  let current = null;

  /** Giữ câu đã chọn khi F5/chuyển trang; tài khoản khác không dùng lựa chọn của em trước. */
  function begin(username) {
    if (!username) return;
    if (current?.username === username) return;
    let stored;
    try { stored = JSON.parse(sessionStorage.getItem(STORAGE_KEY)); } catch (_) {}
    const valid = stored?.username === username && Number.isInteger(stored.index)
      && stored.index >= 0 && stored.index < PROVERBS.length;
    current = valid ? stored : { username, index: Math.floor(Math.random() * PROVERBS.length) };
    // Trình duyệt chặn lưu trữ vẫn giữ câu trong RAM; không làm hỏng luồng đăng nhập.
    try { sessionStorage.setItem(STORAGE_KEY, JSON.stringify(current)); } catch (_) {}
  }

  /** Rời phiên học sinh thì bỏ lựa chọn để lần đăng nhập tiếp theo chọn ngẫu nhiên lại. */
  function reset() {
    current = null;
    try { sessionStorage.removeItem(STORAGE_KEY); } catch (_) {}
  }

  /** Nội dung nguyên văn tiếng Việt, có xuống dòng thơ và không bị bộ dịch nhãn sửa chữ. */
  function html() {
    if (state.isGuest || !state.user?.username) return "";
    begin(state.user.username);
    const title = state.lang === "en" ? "Learning and character"
      : state.lang === "bi" ? "Lời nhắc học tập · Learning and character" : "Lời nhắc học tập";
    return `<aside class="study-proverb" aria-label="${escapeHtml(title)}">
      <span class="study-proverb-icon" aria-hidden="true">${icon("book")}</span>
      <div class="study-proverb-body"><strong class="study-proverb-title source-content">${escapeHtml(title)}</strong>
        <blockquote class="study-proverb-text source-content" lang="vi">${escapeHtml(PROVERBS[current.index])}</blockquote></div>
    </aside>`;
  }

  return Object.freeze({ begin, reset, html });
})();
