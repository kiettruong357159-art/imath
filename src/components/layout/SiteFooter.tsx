'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export function SiteFooter() {
  const [showBackTop, setShowBackTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowBackTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <footer className="im26-footer" id="contact">
        <div className="im26-container im26-footer__cta">
          <div className="im26-footer__cta-copy">
            <span>HÀNH TRÌNH TOÁN HỌC</span>
            <strong>Cùng con học vui, hiểu sâu và tiến bộ mỗi ngày</strong>
          </div>
          <div className="im26-footer__cta-actions">
            <Link className="im26-footer__cta-primary" href="/edu">
              Bắt đầu học <span aria-hidden="true">→</span>
            </Link>
            <Link className="im26-footer__cta-secondary" href="/tai-lieu">
              Xem kho tài liệu
            </Link>
          </div>
        </div>

        <div className="im26-container im26-footer__grid">
          <div className="im26-footer__brand">
            <div className="im26-footer__brand-lockup">
              <img
                src="/imath-assets/images/imath-owl-3d-2026.webp"
                width={58}
                height={58}
                loading="lazy"
                alt="iMath.vn"
              />
              <div>
                <h2>
                  iMath<span>.vn</span>
                </h2>
                <small>Học toán thông minh · Bứt phá tư duy</small>
              </div>
            </div>
            <p>
              Học Toán trực quan, luyện tư duy logic và tự tin tiến bộ mỗi ngày dành cho học sinh lớp 1 đến lớp 12.
            </p>
            <span className="im26-footer__trust">
              <i aria-hidden="true">✓</i> Nội dung an toàn, thân thiện với trẻ em
            </span>
          </div>

          <div>
            <h3>
              <span aria-hidden="true">⌂</span> Khám phá
            </h3>
            <Link href="/">Trang chủ</Link>
            <Link href="/tai-lieu">Kho tài liệu</Link>
            <Link href="/dau-truong">Đấu trường</Link>
          </div>

          <div>
            <h3>
              <span aria-hidden="true">✦</span> Học cùng iMath
            </h3>
            <a href="/tienich/02-cong-tru.html">Luyện cộng trừ</a>
            <a href="/tienich/07-xem-gio.html">Luyện xem đồng hồ</a>
            <Link href="/goc-phu-huynh">Góc phụ huynh</Link>
          </div>

          <div>
            <h3>
              <span aria-hidden="true">i</span> Về iMath
            </h3>
            <Link href="/gioi-thieu-ve-imath">Giới thiệu về iMath</Link>
            <Link href="/lien-he-imath">Liên hệ với iMath</Link>
            <Link href="/admin">Quản trị hệ thống (CMS)</Link>
            <a href="mailto:info@imath.vn">info@imath.vn</a>
            <p>Hà Nội, Việt Nam</p>
          </div>
        </div>

        <div className="im26-container im26-footer__bottom">
          <span>© 2026 iMath.vn · Học toán thông minh, bứt phá tư duy</span>
          <nav className="im26-footer__legal" aria-label="Chính sách của iMath">
            <Link href="/chinh-sach-bao-mat">Chính sách bảo mật</Link>
            <span aria-hidden="true">•</span>
            <Link href="/dieu-khoan-su-dung-imath">Điều khoản sử dụng</Link>
          </nav>
        </div>
      </footer>

      <button
        type="button"
        className={`im26-back-top${showBackTop ? ' is-visible' : ''}`}
        aria-label="Lên đầu trang"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </button>
    </>
  );
}
