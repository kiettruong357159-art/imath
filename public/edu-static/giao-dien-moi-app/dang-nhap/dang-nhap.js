/**
 * dang-nhap.js — Màn đăng nhập học sinh, đăng ký và lối vào Google dành cho phụ huynh.
 * Dùng: i18n.js và dang-nhap.css; Google chỉ hiện khi get_google_login_status xác nhận đã cấu hình.
 * API gọi: register_user, get_google_login_status. OAuth thật bắt đầu tại google-login.php.
 */
(() => {
  'use strict';
  const base = 'giao-dien-moi-app/dang-nhap/img/';
  const icon = (name, extra = '') => `<img class="dn-icon ${extra}" src="${base}icon_${name}.webp" alt="">`;
  const helpUrl = 'https://imath.vn/huong-dan-su-dung-he-thong-hoc-toan-imath-tu-a-z/';
  // Hình chữ G dùng đúng bốn mảng màu của Google; SVG nội tuyến giúp logo không phụ thuộc tài nguyên ngoài.
  const googleLogo = `<svg class="dn-google-logo" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path fill="#4285F4" d="M21.35 11.1h-9.18v3.71h5.28c-.23 1.19-.91 2.2-1.94 2.88v2.39h3.14c1.84-1.69 2.9-4.19 2.9-7.16 0-.61-.06-1.22-.2-1.82z"/>
    <path fill="#34A853" d="M12.17 21c2.63 0 4.84-.87 6.45-2.35l-3.14-2.39c-.87.58-1.98.92-3.31.92-2.54 0-4.69-1.72-5.46-4.03H3.47v2.47A9.74 9.74 0 0 0 12.17 21z"/>
    <path fill="#FBBC05" d="M6.71 13.15a5.85 5.85 0 0 1 0-3.72V6.96H3.47a9.73 9.73 0 0 0 0 8.66l3.24-2.47z"/>
    <path fill="#EA4335" d="M12.17 5.4c1.43 0 2.71.49 3.72 1.45l2.79-2.79A9.35 9.35 0 0 0 12.17 1a9.74 9.74 0 0 0-8.7 5.96l3.24 2.47c.77-2.31 2.92-4.03 5.46-4.03z"/>
  </svg>`;

  window.renderDangNhapScreen = function renderDangNhapScreen() {
    const screen = document.getElementById('login-screen');
    if (!screen || screen.dataset.redesigned) return;
    screen.dataset.redesigned = 'true';
    const header = document.querySelector('.topbar');
    document.body.classList.remove('dn-login-page');
    if (header && !header.querySelector('.dn-support')) {
      const nav = document.createElement('nav');
      nav.className = 'dn-support';
      nav.setAttribute('aria-label', 'Trợ giúp');
      nav.innerHTML = `<a href="${helpUrl}" target="_blank" rel="noopener">${icon('help')}<span>Cần hỗ trợ?</span></a><i></i><a href="https://imath.vn/eeat/gioi-thieu-imath.html" target="_blank" rel="noopener">Về iMath.vn</a>`;
      header.append(nav);
    }
    const clearLoginScope = () => {
      document.body.classList.remove('dn-login-page');
      header?.classList.remove('dn-login-header');
    };
    const updateLoginScope = () => {
      if (!screen.isConnected || screen.hidden) clearLoginScope();
      else header?.classList.add('dn-login-header');
    };
    window.cleanupDangNhapScreen = clearLoginScope;
    const loginScopeObserver = new MutationObserver(updateLoginScope);
    loginScopeObserver.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['hidden'] });
    updateLoginScope();
    screen.innerHTML = `
      <img class="dn-decoration dn-decoration-left" src="${base}minh-hoa-trai.webp" alt="Cú iMath bên chồng sách Toán, Tư duy và Khám phá">
      <img class="dn-decoration dn-decoration-right" src="${base}minh-hoa-phai.webp" alt="Bảng phép tính, bóng đèn, trường học, sách và bút chì">
      <section class="dn-card" aria-labelledby="dn-title">
        <div class="dn-card-scroll">
          <a class="imath-brand dn-card-brand" href="#path" aria-label="iMath.vn"><span class="imath-brand-mark"><img src="giao-dien-moi-app/imath-owl-3d-2026.webp" alt=""></span><span class="imath-brand-copy"><span class="imath-brand-name">iMath<span>.vn</span></span><span class="imath-brand-tagline">Học toán thông minh · Bứt phá tư duy</span></span></a>
          <div class="dn-login-view">
            <button class="dn-return-learning" type="button">← Quay lại trang học</button>
            <h1 id="dn-title">Chào mừng em <span>trở lại!</span></h1>
            <p class="dn-subtitle">Đăng nhập để tiếp tục hành trình học toán thật vui và hiệu quả cùng iMath.vn nhé!</p>
            <div class="dn-parent-copy" data-google-parent-copy hidden><strong>Phụ huynh</strong><p>Một chạm là con vào học, không cần nhớ mật khẩu</p></div>
            <div class="dn-entry-actions">
              <section class="dn-parent-login" id="google-parent-login" hidden aria-label="Đăng nhập phụ huynh">
                <a class="dn-google-button" href="google-login.php">${googleLogo}<span>Đăng nhập với Google</span></a>
              </section>
              <button class="dn-register-open" type="button">${icon('register')}Đăng ký</button>
            </div>
            <div class="dn-or-divider" aria-hidden="true"><span>hoặc đăng nhập bằng tên đăng nhập</span></div>
            <form id="login-form" novalidate>
              <label for="username">Tên đăng nhập</label>
              <div class="dn-input-wrap">${icon('user')}<input id="username" name="username" autocomplete="username" required placeholder="Nhập tên đăng nhập"></div>
              <label for="password">Mật khẩu</label>
              <div class="dn-input-wrap">${icon('lock')}<input id="password" name="password" type="password" autocomplete="current-password" required placeholder="Nhập mật khẩu"><button class="dn-eye" type="button" aria-label="Hiện mật khẩu" aria-pressed="false">${icon('eye')}</button></div>
              <div class="dn-options"><label class="dn-remember"><input type="checkbox" id="remember-login" checked><span class="dn-check">✓</span>Ghi nhớ đăng nhập</label><button class="dn-text-button dn-forgot" type="button">Quên mật khẩu?</button></div>
              <p id="login-error" class="dn-error" role="alert" aria-live="polite"></p>
              <button class="dn-submit" type="submit">Đăng nhập <span>→</span></button>
            </form>
          </div>
          <div class="dn-register-view" hidden>
            <h1>Cùng bắt đầu <span>nhé!</span></h1>
            <p class="dn-subtitle">Tạo tài khoản để khám phá hành trình học toán cùng iMath.vn.</p>
            <form id="registration-form" novalidate>
              <label for="register-username">Tên đăng nhập <small>* tối đa 15 ký tự</small></label>
              <div class="dn-input-wrap">${icon('user')}<input id="register-username" maxlength="15" autocomplete="username" required placeholder="Ví dụ: namkhanh"></div>
              <label for="register-password">Mật khẩu <small>* tối đa 15 ký tự</small></label>
              <div class="dn-input-wrap">${icon('lock')}<input id="register-password" type="password" maxlength="15" autocomplete="new-password" required placeholder="Tạo mật khẩu"></div>
              <label for="register-grade">Lớp cần học</label><select id="register-grade" required><option value="">Chọn lớp</option>${Array.from({length:12},(_,index)=>index+1).map(n=>`<option value="${n}">Lớp ${n}</option>`).join('')}</select>
              <details class="dn-extra"><summary>Thông tin thêm (không bắt buộc)</summary><label for="register-phone">Số điện thoại</label><input id="register-phone" maxlength="30" autocomplete="tel"><label for="register-email">Email</label><input id="register-email" type="email" maxlength="255" autocomplete="email"><label for="register-birth-date">Ngày sinh</label><input id="register-birth-date" type="date"><label for="register-hometown">Quê quán</label><input id="register-hometown" maxlength="255"></details>
              <p class="dn-error" id="register-error" role="alert" aria-live="polite"></p><button class="dn-submit" type="submit">Đăng ký <span>→</span></button><button class="dn-register-back" type="button">← Quay lại đăng nhập</button>
            </form>
          </div>
        </div>
      </section>
      <div class="dn-forgot-pop" role="dialog" aria-modal="true" aria-label="Lấy lại mật khẩu" hidden><button class="dn-pop-close" type="button" aria-label="Đóng">×</button><strong>Nhờ ba mẹ đăng nhập bằng Google để đặt lại mật khẩu cho em.</strong><a href="${helpUrl}" target="_blank" rel="noopener">Mở trang hỗ trợ iMath.vn ↗</a></div>`;

    const loginView = screen.querySelector('.dn-login-view');
    const registerView = screen.querySelector('.dn-register-view');
    screen.querySelector('.dn-return-learning').addEventListener('click', () => {
      document.dispatchEvent(new CustomEvent('imath:guest-return'));
    });
    screen.querySelector('.dn-eye').addEventListener('click', (event) => {
      const button = event.currentTarget, field = screen.querySelector('#password');
      const showing = field.type === 'password'; field.type = showing ? 'text' : 'password';
      button.innerHTML = icon(showing ? 'eye_off' : 'eye'); button.setAttribute('aria-label', showing ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'); button.setAttribute('aria-pressed', String(showing));
    });
    screen.querySelector('.dn-register-open').addEventListener('click', () => { loginView.hidden = true; registerView.hidden = false; screen.querySelector('#register-username').focus(); });
    screen.querySelector('.dn-register-back').addEventListener('click', () => { registerView.hidden = true; loginView.hidden = false; screen.querySelector('#username').focus(); });
    const pop = screen.querySelector('.dn-forgot-pop');
    screen.querySelector('.dn-forgot').addEventListener('click', () => { pop.hidden = false; });
    screen.querySelector('.dn-pop-close').addEventListener('click', () => { pop.hidden = true; });
    screen.querySelector('#registration-form').addEventListener('submit', async (event) => {
      event.preventDefault();
      const form = event.currentTarget, button = form.querySelector('.dn-submit'), error = screen.querySelector('#register-error');
      error.textContent = '';
      const username = screen.querySelector('#register-username').value.trim();
      const password = screen.querySelector('#register-password').value.trim();
      const requested_grade = Number(screen.querySelector('#register-grade').value);
      if (!username || !password || !requested_grade) { error.textContent = 'Em hãy điền tên đăng nhập, mật khẩu và lớp cần học nhé.'; return; }
      button.disabled = true; button.textContent = 'Đang tạo tài khoản…';
      try {
        const response = await imathApiFetch('api.php?action=register_user', { method: 'POST', headers: { 'Content-Type': 'application/json' }, credentials: 'same-origin', body: JSON.stringify({ username, password, requested_grade, phone: screen.querySelector('#register-phone').value.trim(), email: screen.querySelector('#register-email').value.trim(), birth_date: screen.querySelector('#register-birth-date').value, hometown: screen.querySelector('#register-hometown').value.trim() }) });
        const result = await response.json();
        if (!result?.success) throw new Error(result?.error || 'Chưa thể tạo tài khoản. Em hãy thử lại nhé.');
        screen.querySelector('#username').value = username; screen.querySelector('#password').value = password;
        screen.querySelector('#login-error').textContent = 'Tài khoản đã được tạo. Em đăng nhập để bắt đầu học nhé!';
        registerView.hidden = true; loginView.hidden = false;
      } catch (failure) { error.textContent = failure.message || 'Chưa thể tạo tài khoản. Em hãy thử lại nhé.'; }
      finally { button.disabled = false; button.innerHTML = 'Đăng ký <span>→</span>'; }
    });
    // Nút được giấu mặc định để localhost thiếu secret vẫn hoạt động bình thường.
    imathApiFetch('api.php?action=get_google_login_status', {
      method: 'POST', credentials: 'same-origin', headers: { 'Content-Type': 'application/json' }, body: '{}'
    }).then((response) => response.json()).then((result) => {
      window.IMATH_GOOGLE_CONFIGURED = !!(result?.success && result.configured);
      if (window.IMATH_GOOGLE_CONFIGURED) {
        screen.querySelector('#google-parent-login').hidden = false;
        screen.querySelector('[data-google-parent-copy]').hidden = false;
      }
    }).catch(() => {});
    const googleError = new URLSearchParams(location.search).get('google_error');
    if (googleError) {
      const messages = {
        google_auth_cancelled: 'Đăng nhập Google đã được hủy. Phụ huynh có thể thử lại.',
        google_state_invalid: 'Phiên đăng nhập đã hết hạn. Phụ huynh vui lòng thử lại.',
        google_email_unverified: 'Google chưa xác minh địa chỉ email này.',
        google_login_failed: 'Chưa thể đăng nhập Google lúc này. Phụ huynh vui lòng thử lại.'
      };
      screen.querySelector('#login-error').textContent = messages[googleError] || messages.google_login_failed;
    }
  };
})();
