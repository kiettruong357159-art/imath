/**
 * File khởi động nhỏ (Bootstrap) cho tiện ích Hình học & Đại lượng trực quan (iMath)
 * Chịu trách nhiệm nạp core.js, khởi tạo tiện ích và bắt lỗi mạng thân thiện.
 */
(function () {
  'use strict';

  function showBootstrapError(msg) {
    const main = document.getElementById('main-content');
    if (main) {
      const banner = document.createElement('div');
      banner.className = 'empty-state';
      banner.style.margin = '2rem auto';
      banner.style.maxWidth = '600px';
      banner.style.padding = '2rem';
      banner.style.background = '#fef2f2';
      banner.style.border = '1.5px solid #f87171';
      banner.style.borderRadius = '12px';
      banner.style.textAlign = 'center';
      banner.innerHTML = `<h3 style="color:#b91c1c;margin-bottom:0.75rem">⚠️ Không thể khởi động tiện ích</h3><p style="color:#475569;margin-bottom:1.5rem">${msg}</p><button class="button button-primary" onclick="location.reload()">Tải lại trang</button>`;
      main.prepend(banner);
    }
  }

  async function bootstrap() {
    try {
      const core = await import('./hinh-hoc-dai-luong/core.js?v=2.2.0');
      const initApp = core.default || core.initVisualGeometryApp;
      if (typeof initApp === 'function') {
        await initApp();
      } else {
        throw new Error('Không tìm thấy hàm khởi tạo tiện ích trong core.js.');
      }
    } catch (error) {
      console.error('Lỗi khi khởi động tiện ích Hình học & Đại lượng:', error);
      showBootstrapError('Đã xảy ra sự cố khi tải mã nguồn của tiện ích. Vui lòng kiểm tra kết nối mạng và bấm "Tải lại trang".');
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootstrap);
  } else {
    bootstrap();
  }
})();
