'use client';

import React, { useState, useEffect, useRef, useTransition } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [riddleOpen, setRiddleOpen] = useState(false);
  const [toolOpen, setToolOpen] = useState(false);
  const [activeToolGroup, setActiveToolGroup] = useState<number>(0);
  const [toolMenuLeft, setToolMenuLeft] = useState<string | undefined>(undefined);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [isPending, startTransition] = useTransition();

  const gradeDetailsRef = useRef<HTMLDetailsElement>(null);
  const toolDropdownRef = useRef<HTMLDivElement>(null);
  const searchWrapRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setRiddleOpen(false);
    setToolOpen(false);
    setSearchOpen(false);
    if (gradeDetailsRef.current) {
      gradeDetailsRef.current.open = false;
    }
  }, [pathname]);

  // 400ms debounced live search
  useEffect(() => {
    const trimmed = query.trim();
    if (!trimmed) return;
    const timer = setTimeout(() => {
      startTransition(() => {
        router.replace(`/?s=${encodeURIComponent(trimmed)}`, { scroll: false });
      });
    }, 400);
    return () => clearTimeout(timer);
  }, [query, router]);

  // Position the 2-column tool mega-menu on desktop just like theme.js
  const positionToolMenu = () => {
    if (typeof window === 'undefined') return;
    const isDesktop = window.matchMedia('(min-width: 901px)').matches;
    if (!isDesktop || !toolDropdownRef.current) {
      setToolMenuLeft(undefined);
      return;
    }
    const anchor = toolDropdownRef.current.getBoundingClientRect();
    const left = Math.max(16, Math.min(anchor.left - 214, document.documentElement.clientWidth - 536));
    setToolMenuLeft(`${left - anchor.left}px`);
  };

  useEffect(() => {
    positionToolMenu();
    window.addEventListener('resize', positionToolMenu);
    return () => window.removeEventListener('resize', positionToolMenu);
  }, []);

  // Close search and dropdowns on Escape or outside click
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
        setRiddleOpen(false);
        setToolOpen(false);
        setSearchOpen(false);
        if (gradeDetailsRef.current) {
          gradeDetailsRef.current.open = false;
        }
      }
    };
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (searchWrapRef.current && !searchWrapRef.current.contains(target)) {
        setSearchOpen(false);
      }
      if (gradeDetailsRef.current && !gradeDetailsRef.current.contains(target)) {
        gradeDetailsRef.current.open = false;
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleSearchToggle = () => {
    const next = !searchOpen;
    setSearchOpen(next);
    if (next) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 0);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;
    setSearchOpen(false);
    startTransition(() => {
      router.push(`/?s=${encodeURIComponent(trimmed)}`);
    });
  };

  const handleGroupSummaryClick = (e: React.MouseEvent, index: number) => {
    if (typeof window !== 'undefined' && window.matchMedia('(min-width: 901px)').matches) {
      e.preventDefault();
      setActiveToolGroup(index);
    } else {
      e.preventDefault();
      setActiveToolGroup(activeToolGroup === index ? -1 : index);
    }
  };

  const handleGroupHover = (index: number) => {
    if (typeof window !== 'undefined' && window.matchMedia('(min-width: 901px)').matches) {
      setActiveToolGroup(index);
    }
  };

  return (
    <header className="im26-header" id="site-header">
      <div className="im26-container im26-header__inner">
        <Link className="im26-brand" href="/" aria-label="Trang chủ iMath.vn">
          <span className="im26-brand__mark" aria-hidden="true">
            <img
              src="/imath-assets/images/imath-owl-3d-2026.webp"
              alt="Học toán thông minh · Bứt phá tư duy"
              width={48}
              height={48}
            />
          </span>
          <span className="im26-brand__copy">
            <span className="im26-brand__name">
              iMath<span>.vn</span>
            </span>
            <span className="im26-brand__tagline">Học toán thông minh · Bứt phá tư duy</span>
          </span>
        </Link>

        <button
          className="im26-menu-toggle"
          type="button"
          aria-label={mobileOpen ? 'Đóng menu điều hướng' : 'Mở menu điều hướng'}
          aria-expanded={mobileOpen}
          aria-controls="im26-primary-nav"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? '×' : '☰'}
        </button>

        <nav
          className={`im26-nav${mobileOpen ? ' is-open' : ''}`}
          id="im26-primary-nav"
          aria-label="Điều hướng chính"
        >
          <Link href="/" aria-current={pathname === '/' ? 'page' : undefined}>
            <span className="im26-nav__icon" aria-hidden="true">
              🏠
            </span>
            <span>Trang chủ</span>
          </Link>

          <details ref={gradeDetailsRef} className="im26-nav__dropdown">
            <summary>
              <span className="im26-nav__icon" aria-hidden="true">
                🎒
              </span>
              <span>Học theo lớp</span>
              <span className="im26-nav__caret" aria-hidden="true">
                ▾
              </span>
            </summary>
            <div className="im26-nav__submenu" aria-label="Chọn khối lớp">
              <Link href="/hoc-theo-lop/lop-1">
                <span aria-hidden="true">🎒</span>Toán lớp 1
              </Link>
              <Link href="/hoc-theo-lop/lop-2">
                <span aria-hidden="true">🚲</span>Toán lớp 2
              </Link>
              <Link href="/hoc-theo-lop/lop-3">
                <span aria-hidden="true">🚀</span>Toán lớp 3
              </Link>
              <Link href="/hoc-theo-lop/lop-4">
                <span aria-hidden="true">🏆</span>Toán lớp 4
              </Link>
              <Link href="/hoc-theo-lop/lop-5">
                <span aria-hidden="true">🎯</span>Toán lớp 5
              </Link>
              <Link href="/hoc-theo-lop">
                <span aria-hidden="true">📚</span>Xem tất cả khối lớp
              </Link>
            </div>
          </details>

          <Link
            href="/goc-phu-huynh"
            aria-current={pathname.startsWith('/goc-phu-huynh') ? 'page' : undefined}
          >
            <span className="im26-nav__icon" aria-hidden="true">
              👪
            </span>
            <span>Góc phụ huynh</span>
          </Link>

          <Link
            href="/dau-truong"
            aria-current={pathname.startsWith('/dau-truong') ? 'page' : undefined}
          >
            <span className="im26-nav__icon" aria-hidden="true">
              🏆
            </span>
            <span>Đấu trường</span>
          </Link>

          <div className={`im26-nav__dropdown im26-nav__dropdown--link${riddleOpen ? ' is-open' : ''}`}>
            <Link
              className="im26-nav__dropdown-link"
              href="/cau-do-vui"
              aria-haspopup="true"
              aria-current={pathname.startsWith('/cau-do-vui') ? 'page' : undefined}
            >
              <span className="im26-nav__icon" aria-hidden="true">
                🧩
              </span>
              <span>Câu đố vui</span>
            </Link>
            <button
              className="im26-nav__submenu-toggle"
              type="button"
              aria-expanded={riddleOpen}
              aria-controls="im26-riddle-submenu"
              aria-label={riddleOpen ? 'Đóng danh sách chủ đề câu đố' : 'Mở danh sách chủ đề câu đố'}
              onClick={() => setRiddleOpen(!riddleOpen)}
            >
              <span className="im26-nav__caret" aria-hidden="true">
                ▾
              </span>
            </button>
            <div className="im26-nav__submenu" id="im26-riddle-submenu" aria-label="Chọn chủ đề câu đố">
              <a href="/tienich/cau-do-vui-lam-bai.html?chu-de=all">
                <span aria-hidden="true">🎲</span>Câu đố vui tổng hợp
              </a>
              <a href="/tienich/cau-do-vui-lam-bai.html?chu-de=logic">
                <span aria-hidden="true">🧠</span>Câu đố suy luận logic
              </a>
              <a href="/tienich/cau-do-vui-lam-bai.html?chu-de=tieng-viet">
                <span aria-hidden="true">💬</span>Tiếng Việt và tục ngữ
              </a>
              <a href="/tienich/cau-do-vui-lam-bai.html?chu-de=tu-nhien">
                <span aria-hidden="true">🌿</span>Khoa học và tự nhiên
              </a>
              <a href="/tienich/cau-do-lich-su">
                <span aria-hidden="true">⌛</span>Câu đố lịch sử
              </a>
              <Link href="/cau-do-vui">
                <span aria-hidden="true">🗂️</span>Xem toàn bộ kho câu đố
              </Link>
            </div>
          </div>

          <Link
            href="/tai-lieu"
            aria-current={pathname.startsWith('/tai-lieu') ? 'page' : undefined}
          >
            <span className="im26-nav__icon" aria-hidden="true">
              📚
            </span>
            <span>Tài liệu</span>
          </Link>

          <div
            ref={toolDropdownRef}
            className={`im26-nav__dropdown im26-nav__dropdown--link${toolOpen ? ' is-open' : ''}`}
            onMouseEnter={positionToolMenu}
            onFocus={positionToolMenu}
          >
            <Link
              className="im26-nav__dropdown-link"
              href="/tien-ich"
              aria-haspopup="true"
              aria-current={pathname.startsWith('/tien-ich') ? 'page' : undefined}
            >
              <span className="im26-nav__icon" aria-hidden="true">
                🧮
              </span>
              <span>Tiện ích</span>
            </Link>
            <button
              className="im26-nav__submenu-toggle"
              type="button"
              aria-expanded={toolOpen}
              aria-controls="im26-tool-submenu"
              aria-label={toolOpen ? 'Đóng menu tiện ích' : 'Mở menu tiện ích'}
              onClick={() => setToolOpen(!toolOpen)}
            >
              <span className="im26-nav__caret" aria-hidden="true">
                ▾
              </span>
            </button>
            <div
              className="im26-nav__submenu im26-tool-submenu"
              id="im26-tool-submenu"
              aria-label="Chọn nhóm tiện ích"
              style={toolMenuLeft ? { left: toolMenuLeft } : undefined}
            >
              <details
                className="im26-tool-submenu__group"
                open={activeToolGroup === 0}
              >
                <summary
                  className="im26-tool-submenu__trigger"
                  onMouseEnter={() => handleGroupHover(0)}
                  onFocus={() => handleGroupHover(0)}
                  onClick={(e) => handleGroupSummaryClick(e, 0)}
                >
                  <span aria-hidden="true">🧮</span>
                  <strong>Tiện ích cơ bản</strong>
                  <i aria-hidden="true">›</i>
                </summary>
                <div
                  className="im26-tool-submenu__flyout im26-tool-submenu__grid--basic"
                  aria-label="Tiện ích Toán cơ bản theo lớp"
                >
                  <a href="/tienich/08-toan-lop-1.html">
                    <span aria-hidden="true">🎒</span>Toán lớp 1
                  </a>
                  <a href="/tienich/09-toan-lop-2.html?chu-de=mixed&muc-do=kha">
                    <span aria-hidden="true">🚲</span>Toán lớp 2
                  </a>
                  <a href="/tienich/10-toan-lop-3.html?chu-de=mixed&muc-do=kha">
                    <span aria-hidden="true">🚀</span>Toán lớp 3
                  </a>
                  <a href="/tienich/11-toan-lop-4.html?chu-de=mixed&muc-do=kha">
                    <span aria-hidden="true">🏆</span>Toán lớp 4
                  </a>
                  <a href="/tienich/12-toan-lop-5.html?chu-de=mixed&muc-do=kha">
                    <span aria-hidden="true">🎯</span>Toán lớp 5
                  </a>
                </div>
              </details>

              <details
                className="im26-tool-submenu__group im26-tool-submenu__group--advanced"
                open={activeToolGroup === 1}
              >
                <summary
                  className="im26-tool-submenu__trigger"
                  onMouseEnter={() => handleGroupHover(1)}
                  onFocus={() => handleGroupHover(1)}
                  onClick={(e) => handleGroupSummaryClick(e, 1)}
                >
                  <span aria-hidden="true">🏅</span>
                  <strong>Tiện ích nâng cao</strong>
                  <i aria-hidden="true">›</i>
                </summary>
                <div className="im26-tool-submenu__flyout" aria-label="Tiện ích Toán nâng cao">
                  <a href="/tienich/13-luyen-thi-hoc-sinh-gioi.html?lop=3">
                    <span aria-hidden="true">🏅</span>Luyện thi học sinh giỏi
                  </a>
                  <a href="/tienich/hinh-hoc-dai-luong-truc-quan.html">
                    <span aria-hidden="true">📐</span>Hình học &amp; Đại lượng
                  </a>
                  <Link href="/luyen-thi-vao-lop-6-truong-trong-diem">
                    <span aria-hidden="true">🏫</span>Luyện thi vào lớp 6 trọng điểm
                  </Link>
                </div>
              </details>

              <details
                className="im26-tool-submenu__group"
                open={activeToolGroup === 2}
              >
                <summary
                  className="im26-tool-submenu__trigger"
                  onMouseEnter={() => handleGroupHover(2)}
                  onFocus={() => handleGroupHover(2)}
                  onClick={(e) => handleGroupSummaryClick(e, 2)}
                >
                  <span aria-hidden="true">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                      focusable="false"
                      style={{ display: 'block', flexShrink: 0 }}
                    >
                      <rect x="1" y="1" width="22" height="22" rx="7" fill="#DBEAFE" />
                      <path
                        d="M5 17 11 5l8 12H5Z"
                        fill="#60A5FA"
                        stroke="#2563EB"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                      <path d="m10 17 5-8" stroke="white" strokeWidth="1.5" />
                      <circle cx="11" cy="5" r="2" fill="#FBBF24" />
                      <circle cx="19" cy="17" r="2" fill="#2563EB" />
                    </svg>
                  </span>
                  <strong>Tiện ích toán cấp 2</strong>
                  <i aria-hidden="true">›</i>
                </summary>
                <div className="im26-tool-submenu__flyout" aria-label="Tiện ích toán cấp 2">
                  <a href="/tienich/cap2/toan-cap-2-truc-quan.html?lop=6">
                    <span aria-hidden="true">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                        focusable="false"
                        style={{ display: 'block', flexShrink: 0 }}
                      >
                        <rect x="1" y="1" width="22" height="22" rx="7" fill="#D1FAE5" />
                        <path
                          d="M5 5h3M16 19h3"
                          stroke="#059669"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          opacity=".45"
                        />
                        <text
                          x="12"
                          y="17"
                          textAnchor="middle"
                          fontFamily="Arial,sans-serif"
                          fontSize="15"
                          fontWeight="700"
                          fill="#059669"
                        >
                          6
                        </text>
                      </svg>
                    </span>
                    Toán lớp 6
                  </a>
                  <a href="/tienich/cap2/toan-cap-2-truc-quan.html?lop=7">
                    <span aria-hidden="true">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                        focusable="false"
                        style={{ display: 'block', flexShrink: 0 }}
                      >
                        <rect x="1" y="1" width="22" height="22" rx="7" fill="#DBEAFE" />
                        <path
                          d="M5 5h3M16 19h3"
                          stroke="#2563EB"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          opacity=".45"
                        />
                        <text
                          x="12"
                          y="17"
                          textAnchor="middle"
                          fontFamily="Arial,sans-serif"
                          fontSize="15"
                          fontWeight="700"
                          fill="#2563EB"
                        >
                          7
                        </text>
                      </svg>
                    </span>
                    Toán lớp 7
                  </a>
                  <a href="/tienich/cap2/toan-cap-2-truc-quan.html?lop=8">
                    <span aria-hidden="true">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                        focusable="false"
                        style={{ display: 'block', flexShrink: 0 }}
                      >
                        <rect x="1" y="1" width="22" height="22" rx="7" fill="#FEF3C7" />
                        <path
                          d="M5 5h3M16 19h3"
                          stroke="#D97706"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          opacity=".45"
                        />
                        <text
                          x="12"
                          y="17"
                          textAnchor="middle"
                          fontFamily="Arial,sans-serif"
                          fontSize="15"
                          fontWeight="700"
                          fill="#D97706"
                        >
                          8
                        </text>
                      </svg>
                    </span>
                    Toán lớp 8
                  </a>
                  <a href="/tienich/cap2/toan-cap-2-truc-quan.html?lop=9">
                    <span aria-hidden="true">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                        focusable="false"
                        style={{ display: 'block', flexShrink: 0 }}
                      >
                        <rect x="1" y="1" width="22" height="22" rx="7" fill="#EDE9FE" />
                        <path
                          d="M5 5h3M16 19h3"
                          stroke="#7C3AED"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          opacity=".45"
                        />
                        <text
                          x="12"
                          y="17"
                          textAnchor="middle"
                          fontFamily="Arial,sans-serif"
                          fontSize="15"
                          fontWeight="700"
                          fill="#7C3AED"
                        >
                          9
                        </text>
                      </svg>
                    </span>
                    Toán lớp 9
                  </a>
                  <a
                    href="/tienich/cap2/toan-cap-2-truc-quan.html?che-do=clc"
                    style={{ borderTop: '1px solid #e3edf7', marginTop: 6, paddingTop: 12 }}
                  >
                    <span aria-hidden="true">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                        focusable="false"
                        style={{ display: 'block', flexShrink: 0 }}
                      >
                        <rect x="1" y="1" width="22" height="22" rx="7" fill="#FEF3C7" />
                        <path
                          d="M8 6h8v5a4 4 0 0 1-8 0V6Z"
                          fill="#FBBF24"
                          stroke="#D97706"
                          strokeWidth="1.4"
                        />
                        <path
                          d="M8 7H5v3a3 3 0 0 0 3 3m8-6h3v3a3 3 0 0 1-3 3m-4 2v3m-3 1h6"
                          stroke="#D97706"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="m12 7 .7 1.4 1.5.2-1.1 1.1.3 1.5-1.4-.7-1.4.7.3-1.5L9.8 8.6l1.5-.2L12 7Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    Ôn thi vào lớp 10 CLC
                  </a>
                </div>
              </details>

              <Link className="im26-tool-submenu__all" href="/tien-ich">
                <span aria-hidden="true">🧰</span>
                <strong>Xem toàn bộ tiện ích</strong>
                <i aria-hidden="true">→</i>
              </Link>
            </div>
          </div>
        </nav>

        <div
          ref={searchWrapRef}
          className={`im26-header-search${searchOpen ? ' is-open' : ''}`}
          data-header-search
        >
          <button
            className="im26-header-search__toggle"
            type="button"
            aria-expanded={searchOpen}
            aria-controls="im26-header-search-panel"
            aria-label="Tìm kiếm bài viết"
            onClick={handleSearchToggle}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <circle cx="11" cy="11" r="6.5" />
              <path d="m16 16 4 4" />
            </svg>
          </button>

          <div
            className="im26-header-search__panel"
            id="im26-header-search-panel"
            hidden={!searchOpen}
          >
            <form
              role="search"
              method="get"
              className="im26-search-form"
              action="/"
              onSubmit={handleSearchSubmit}
            >
              <label className="screen-reader-text" htmlFor="im26-search-field-1">
                Tìm kiếm bài viết
              </label>
              <input
                ref={searchInputRef}
                id="im26-search-field-1"
                className="im26-search-form__field"
                type="search"
                name="s"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Nhập nội dung cần tìm…"
                autoComplete="off"
              />
              <input type="hidden" name="post_type" value="post" />
              <button className="im26-search-form__submit" type="submit">
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <circle cx="11" cy="11" r="6.5" />
                  <path d="m16 16 4 4" />
                </svg>
                <span>{isPending ? 'Đang tìm…' : 'Tìm bài viết'}</span>
              </button>
            </form>
          </div>
        </div>

        <Link className="im26-header__action" href="/edu">
          Vào học
        </Link>
      </div>
    </header>
  );
}
