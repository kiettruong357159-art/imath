'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import {
  LayoutDashboard,
  FileText,
  BookOpen,
  FolderTree,
  Wrench,
  MessageSquare,
  LogOut,
  Trash2,
  RefreshCw,
  Loader2,
  ExternalLink,
} from 'lucide-react';
import { CustomSelect } from '@/components/ui/CustomSelect';
import { ConfirmDialog } from '@/components/ui/ConfirmDialog';
import { Pagination } from '@/components/ui/Pagination';
import { EmptyState } from '@/components/ui/EmptyState';
import { useToast } from '@/context/ToastContext';
import { formatVnDate } from '@/lib/date-utils';

type TabId = 'dashboard' | 'posts' | 'documents' | 'categories' | 'tools' | 'comments';

interface AdminStats {
  totalPosts: number;
  totalDocs: number;
  totalTools: number;
  totalCategories: number;
}

interface PostRow {
  id: string;
  slug: string;
  title: string;
  status: string;
  publishedAt: string;
  category?: { name: string } | null;
}

interface DocRow {
  id: string;
  slug: string;
  title: string;
  gradeName: string;
  topicName: string;
  publishedAt: string;
}

interface CategoryRow {
  id: string;
  slug: string;
  fullPath: string;
  name: string;
  isActive: boolean;
  _count: { posts: number };
}

interface ToolRow {
  id: string;
  slug: string;
  title: string;
  groupCode: string;
  gradeSlug: string;
  toolUrl: string;
  iconText: string;
  isActive: boolean;
}

interface CommentRow {
  id: string;
  authorName: string;
  authorEmail: string;
  content: string;
  isApproved: boolean;
  createdAt: string;
  post?: { title: string; slug: string } | null;
}

const VALID_TABS: TabId[] = ['dashboard', 'posts', 'documents', 'categories', 'tools', 'comments'];

export default function AdminPortalPage() {
  const router = useRouter();
  const toast = useToast();

  const [activeTab, setActiveTab] = useState<TabId>('dashboard');
  const [visitedTabs, setVisitedTabs] = useState<Record<TabId, boolean>>({
    dashboard: true,
    posts: false,
    documents: false,
    categories: false,
    tools: false,
    comments: false,
  });

  // Parent loads initial state as undefined (never [] to avoid infinite refetch on empty tables)
  const [stats, setStats] = useState<AdminStats | undefined>(undefined);
  const [postsData, setPostsData] = useState<{ items: PostRow[]; total: number; totalPages: number } | undefined>(undefined);
  const [docsData, setDocsData] = useState<{ items: DocRow[]; total: number; totalPages: number } | undefined>(undefined);
  const [categoriesData, setCategoriesData] = useState<CategoryRow[] | undefined>(undefined);
  const [toolsData, setToolsData] = useState<ToolRow[] | undefined>(undefined);
  const [commentsData, setCommentsData] = useState<CommentRow[] | undefined>(undefined);

  const [postSearch, setPostSearch] = useState('');
  const [debouncedPostSearch, setDebouncedPostSearch] = useState('');
  const [postStatus, setPostStatus] = useState('');
  const [postPage, setPostPage] = useState(1);

  const [docSearch, setDocSearch] = useState('');
  const [debouncedDocSearch, setDebouncedDocSearch] = useState('');
  const [docGrade, setDocGrade] = useState('');
  const [docPage, setDocPage] = useState(1);

  const [deleteTarget, setDeleteTarget] = useState<{ type: 'post' | 'category'; id: string; title: string } | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  // 400ms debounce for postSearch and docSearch
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedPostSearch(postSearch);
      setPostPage(1);
    }, 400);
    return () => clearTimeout(timer);
  }, [postSearch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedDocSearch(docSearch);
      setDocPage(1);
    }, 400);
    return () => clearTimeout(timer);
  }, [docSearch]);

  // Sync ?tab= with URL and localStorage
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlTab = params.get('tab') as TabId | null;
    const savedTab = (localStorage.getItem('imath_admin_tab') as TabId | null) || 'dashboard';
    const initialTab = urlTab && VALID_TABS.includes(urlTab) ? urlTab : VALID_TABS.includes(savedTab) ? savedTab : 'dashboard';
    setActiveTab(initialTab);
    setVisitedTabs((prev) => ({ ...prev, [initialTab]: true }));
  }, []);

  const switchTab = (tab: TabId) => {
    setActiveTab(tab);
    setVisitedTabs((prev) => ({ ...prev, [tab]: true }));
    localStorage.setItem('imath_admin_tab', tab);
    const url = new URL(window.location.href);
    url.searchParams.set('tab', tab);
    window.history.replaceState({}, '', url.toString());
  };

  const fetchStats = useCallback(async () => {
    const res = await fetch('/api/admin/stats');
    if (res.status === 401) {
      toast.error('Phiên đăng nhập đã hết hạn.');
      router.replace('/login');
      return;
    }
    if (res.ok) {
      const data = (await res.json()) as AdminStats;
      setStats(data);
    }
  }, [router, toast]);

  const fetchPosts = useCallback(async (page: number, q: string, status: string) => {
    const sp = new URLSearchParams({ page: String(page), limit: '12' });
    if (q.trim()) sp.set('q', q.trim());
    if (status) sp.set('status', status);
    const res = await fetch(`/api/posts?${sp.toString()}`);
    if (res.ok) {
      const data = (await res.json()) as { items: PostRow[]; total: number; totalPages: number };
      setPostsData(data);
    }
  }, []);

  const fetchDocs = useCallback(async (page: number, q: string, grade: string) => {
    const sp = new URLSearchParams({ page: String(page), limit: '12' });
    if (q.trim()) sp.set('q', q.trim());
    if (grade) sp.set('grade', grade);
    const res = await fetch(`/api/documents?${sp.toString()}`);
    if (res.ok) {
      const data = (await res.json()) as { items: DocRow[]; total: number; totalPages: number };
      setDocsData(data);
    }
  }, []);

  const fetchCategories = useCallback(async () => {
    const res = await fetch('/api/categories');
    if (res.ok) {
      const data = (await res.json()) as { items: CategoryRow[] };
      setCategoriesData(data.items);
    }
  }, []);

  const fetchTools = useCallback(async () => {
    const res = await fetch('/api/tools');
    if (res.ok) {
      const data = (await res.json()) as { items: ToolRow[] };
      setToolsData(data.items);
    }
  }, []);

  const fetchComments = useCallback(async () => {
    const res = await fetch('/api/comments');
    if (res.ok) {
      const data = (await res.json()) as { items: CommentRow[] };
      setCommentsData(data.items);
    }
  }, []);

  useEffect(() => {
    if (visitedTabs.dashboard && stats === undefined) {
      void fetchStats();
    }
  }, [visitedTabs.dashboard, stats, fetchStats]);

  useEffect(() => {
    if (visitedTabs.posts) {
      void fetchPosts(postPage, debouncedPostSearch, postStatus);
    }
  }, [visitedTabs.posts, postPage, debouncedPostSearch, postStatus, fetchPosts]);

  useEffect(() => {
    if (visitedTabs.documents) {
      void fetchDocs(docPage, debouncedDocSearch, docGrade);
    }
  }, [visitedTabs.documents, docPage, debouncedDocSearch, docGrade, fetchDocs]);

  useEffect(() => {
    if (visitedTabs.categories && categoriesData === undefined) {
      void fetchCategories();
    }
  }, [visitedTabs.categories, categoriesData, fetchCategories]);

  useEffect(() => {
    if (visitedTabs.tools && toolsData === undefined) {
      void fetchTools();
    }
  }, [visitedTabs.tools, toolsData, fetchTools]);

  useEffect(() => {
    if (visitedTabs.comments && commentsData === undefined) {
      void fetchComments();
    }
  }, [visitedTabs.comments, commentsData, fetchComments]);

  const handleConfirmDelete = async () => {
    if (!deleteTarget || deleting) return;
    setDeleting(true);
    try {
      if (deleteTarget.type === 'post') {
        const res = await fetch(`/api/posts/${deleteTarget.id}`, { method: 'DELETE' });
        if (res.ok) {
          toast.success('Đã xóa bài viết thành công.');
          await Promise.all([fetchPosts(postPage, debouncedPostSearch, postStatus), fetchStats()]);
        } else {
          toast.error('Không thể xóa bài viết.');
        }
      } else {
        const res = await fetch(`/api/categories?id=${encodeURIComponent(deleteTarget.id)}`, { method: 'DELETE' });
        const data = (await res.json()) as { message?: string };
        if (res.ok) {
          toast.success('Đã xóa chuyên mục.');
          await Promise.all([fetchCategories(), fetchStats()]);
        } else {
          toast.error(data.message || 'Không thể xóa chuyên mục.');
        }
      }
    } finally {
      setDeleting(false);
      setDeleteTarget(null);
    }
  };

  const handleLogout = async () => {
    if (loggingOut) return;
    setLoggingOut(true);
    await fetch('/api/auth/logout', { method: 'POST' });
    router.replace('/login');
  };

  const navBtnStyle = (tab: TabId): React.CSSProperties => ({
    display: 'flex',
    alignItems: 'center',
    gap: '0.65rem',
    padding: '0.7rem 0.9rem',
    borderRadius: 'var(--radius-sm)',
    border: 'none',
    background: activeTab === tab ? 'var(--color-primary)' : 'transparent',
    color: '#fff',
    fontWeight: 800,
    cursor: 'pointer',
    textAlign: 'left',
  });

  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <div style={{ fontWeight: 900, fontSize: '1.25rem', padding: '0 0.5rem 1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          iMath<span style={{ color: '#38bdf8' }}>CMS</span>
        </div>

        <button type="button" onClick={() => switchTab('dashboard')} style={navBtnStyle('dashboard')}>
          <LayoutDashboard size={18} />
          <span>Tổng quan hệ thống</span>
        </button>

        <button type="button" onClick={() => switchTab('posts')} style={navBtnStyle('posts')}>
          <FileText size={18} />
          <span>Bài viết ({stats ? stats.totalPosts : 322})</span>
        </button>

        <button type="button" onClick={() => switchTab('documents')} style={navBtnStyle('documents')}>
          <BookOpen size={18} />
          <span>Tài liệu & Đề thi ({stats ? stats.totalDocs : 244})</span>
        </button>

        <button type="button" onClick={() => switchTab('categories')} style={navBtnStyle('categories')}>
          <FolderTree size={18} />
          <span>Chuyên mục ({stats ? stats.totalCategories : 11})</span>
        </button>

        <button type="button" onClick={() => switchTab('tools')} style={navBtnStyle('tools')}>
          <Wrench size={18} />
          <span>Tiện ích Toán ({stats ? stats.totalTools : 25})</span>
        </button>

        <button type="button" onClick={() => switchTab('comments')} style={navBtnStyle('comments')}>
          <MessageSquare size={18} />
          <span>Bình luận & Hỏi đáp</span>
        </button>

        <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <button
            type="button"
            disabled={loggingOut}
            onClick={handleLogout}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              padding: '0.7rem 0.9rem',
              borderRadius: 'var(--radius-sm)',
              border: 'none',
              background: 'rgba(239, 68, 68, 0.18)',
              color: '#fca5a5',
              fontWeight: 800,
              cursor: loggingOut ? 'not-allowed' : 'pointer',
            }}
          >
            {loggingOut ? <Loader2 size={18} className="animate-spin" /> : <LogOut size={18} />}
            <span>Đăng xuất</span>
          </button>
        </div>
      </aside>

      <main className="admin-main">
        {/* TAB 1: DASHBOARD (Lazy-Mount + Keep-Alive) */}
        {visitedTabs.dashboard && (
          <div style={{ display: activeTab === 'dashboard' ? 'block' : 'none' }}>
            <div className="admin-action-header">
              <h1 style={{ margin: 0, fontSize: '1.65rem', fontWeight: 900 }}>Tổng Quan Dữ Liệu iMath.vn</h1>
              <button
                type="button"
                onClick={() => void fetchStats()}
                style={{
                  padding: '0.55rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-border-strong)',
                  background: 'var(--color-surface)',
                  fontWeight: 800,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  cursor: 'pointer',
                }}
              >
                <RefreshCw size={15} />
                <span>Làm mới</span>
              </button>
            </div>

            <div className="grid-4col-safe">
              <div style={{ background: 'var(--color-surface)', padding: '1.35rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', fontWeight: 800 }}>TỔNG BÀI VIẾT</div>
                <div style={{ fontSize: '2.1rem', fontWeight: 900, color: 'var(--color-primary)', marginTop: '0.3rem' }}>
                  {stats ? stats.totalPosts : '...'}
                </div>
              </div>
              <div style={{ background: 'var(--color-surface)', padding: '1.35rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', fontWeight: 800 }}>PHIẾU BÀI TẬP & ĐỀ THI</div>
                <div style={{ fontSize: '2.1rem', fontWeight: 900, color: 'var(--color-secondary-dark)', marginTop: '0.3rem' }}>
                  {stats ? stats.totalDocs : '...'}
                </div>
              </div>
              <div style={{ background: 'var(--color-surface)', padding: '1.35rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', fontWeight: 800 }}>TIỆN ÍCH TƯƠNG TÁC</div>
                <div style={{ fontSize: '2.1rem', fontWeight: 900, color: 'var(--color-accent-purple)', marginTop: '0.3rem' }}>
                  {stats ? stats.totalTools : '...'}
                </div>
              </div>
              <div style={{ background: 'var(--color-surface)', padding: '1.35rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)' }}>
                <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', fontWeight: 800 }}>CHUYÊN MỤC</div>
                <div style={{ fontSize: '2.1rem', fontWeight: 900, color: 'var(--color-accent-amber)', marginTop: '0.3rem' }}>
                  {stats ? stats.totalCategories : '...'}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: POSTS (Golden Reference Layout) */}
        {visitedTabs.posts && (
          <div style={{ display: activeTab === 'posts' ? 'block' : 'none' }}>
            <div className="admin-action-header">
              <h1 style={{ margin: 0, fontSize: '1.65rem', fontWeight: 900 }}>Quản Lý Bài Viết & Chuyên Đề</h1>
              <button
                type="button"
                onClick={() => void fetchPosts(postPage, debouncedPostSearch, postStatus)}
                style={{
                  padding: '0.55rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-border-strong)',
                  background: 'var(--color-surface)',
                  fontWeight: 800,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  cursor: 'pointer',
                }}
              >
                <RefreshCw size={15} />
                <span>Làm mới</span>
              </button>
            </div>

            <div className="admin-filter-card">
              <input
                type="search"
                value={postSearch}
                onChange={(e) => setPostSearch(e.target.value)}
                placeholder="Tìm theo tiêu đề bài viết..."
                style={{
                  padding: '0.6rem 0.9rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-border-strong)',
                  fontFamily: 'var(--font-main)',
                }}
              />
              <CustomSelect
                value={postStatus}
                onChange={(val) => {
                  setPostStatus(val);
                  setPostPage(1);
                }}
                options={[
                  { value: '', label: 'Tất cả trạng thái' },
                  { value: 'PUBLISHED', label: 'Đang xuất bản (PUBLISHED)' },
                  { value: 'DRAFT', label: 'Bản nháp (DRAFT)' },
                  { value: 'ARCHIVED', label: 'Lưu trữ (ARCHIVED)' },
                ]}
              />
              <div />
            </div>

            <div className="admin-table-card">
              <div className="table-responsive">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Tiêu đề bài viết</th>
                      <th>Chuyên mục</th>
                      <th>Trạng thái</th>
                      <th>Ngày đăng</th>
                      <th style={{ textAlign: 'right' }}>Thao tác</th>
                    </tr>
                  </thead>
                  <tbody>
                    {postsData && postsData.items.length === 0 ? (
                      <tr>
                        <td colSpan={5}>
                          <EmptyState title="Không có bài viết" description="Không tìm thấy bài viết nào khớp với bộ lọc." />
                        </td>
                      </tr>
                    ) : (
                      postsData?.items.map((post) => (
                        <tr key={post.id}>
                          <td style={{ fontWeight: 800, maxWidth: 420 }}>{post.title}</td>
                          <td>{post.category?.name || '—'}</td>
                          <td>
                            <span
                              style={{
                                padding: '0.2rem 0.6rem',
                                borderRadius: 'var(--radius-pill)',
                                background: 'var(--color-success-light)',
                                color: '#065f46',
                                fontSize: '0.75rem',
                                fontWeight: 800,
                              }}
                            >
                              {post.status}
                            </span>
                          </td>
                          <td>{formatVnDate(post.publishedAt)}</td>
                          <td>
                            <div className="admin-table-actions">
                              <a
                                href={`/${post.slug}`}
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                  padding: '0.4rem 0.65rem',
                                  borderRadius: 'var(--radius-sm)',
                                  border: '1px solid var(--color-border)',
                                  color: 'var(--color-primary)',
                                  textDecoration: 'none',
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                }}
                              >
                                <ExternalLink size={15} />
                              </a>
                              <button
                                type="button"
                                onClick={() => setDeleteTarget({ type: 'post', id: post.id, title: post.title })}
                                style={{
                                  padding: '0.4rem 0.65rem',
                                  borderRadius: 'var(--radius-sm)',
                                  border: '1px solid #fecaca',
                                  background: 'var(--color-danger-light)',
                                  color: 'var(--color-danger)',
                                  cursor: 'pointer',
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                }}
                              >
                                <Trash2 size={15} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
              <div className="admin-table-footer">
                <span style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--color-text-secondary)' }}>
                  Tổng số: {postsData?.total ?? 0} bài viết
                </span>
                <Pagination
                  currentPage={postPage}
                  totalPages={postsData?.totalPages ?? 1}
                  onPageChange={(p) => setPostPage(p)}
                />
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: DOCUMENTS */}
        {visitedTabs.documents && (
          <div style={{ display: activeTab === 'documents' ? 'block' : 'none' }}>
            <div className="admin-action-header">
              <h1 style={{ margin: 0, fontSize: '1.65rem', fontWeight: 900 }}>Quản Lý Phiếu Bài Tập & Đề Thi</h1>
            </div>

            <div className="admin-filter-card">
              <input
                type="search"
                value={docSearch}
                onChange={(e) => setDocSearch(e.target.value)}
                placeholder="Tìm kiếm tài liệu..."
                style={{
                  padding: '0.6rem 0.9rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-border-strong)',
                  fontFamily: 'var(--font-main)',
                }}
              />
              <CustomSelect
                value={docGrade}
                onChange={(val) => {
                  setDocGrade(val);
                  setDocPage(1);
                }}
                options={[
                  { value: '', label: 'Tất cả khối lớp' },
                  { value: 'toan-lop-1', label: 'Toán Lớp 1' },
                  { value: 'toan-lop-2', label: 'Toán Lớp 2' },
                  { value: 'toan-lop-3', label: 'Toán Lớp 3' },
                  { value: 'toan-lop-4', label: 'Toán Lớp 4' },
                  { value: 'toan-lop-5', label: 'Toán Lớp 5' },
                  { value: 'toan-lop-6', label: 'Toán Lớp 6' },
                ]}
              />
              <div />
            </div>

            <div className="admin-table-card">
              <div className="table-responsive">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Tên bộ tài liệu</th>
                      <th>Khối lớp</th>
                      <th>Chủ đề</th>
                      <th>Ngày đăng</th>
                      <th style={{ textAlign: 'right' }}>Xem</th>
                    </tr>
                  </thead>
                  <tbody>
                    {docsData && docsData.items.length === 0 ? (
                      <tr>
                        <td colSpan={5}>
                          <EmptyState title="Không có tài liệu" description="Không tìm thấy phiếu bài tập nào khớp với bộ lọc." />
                        </td>
                      </tr>
                    ) : (
                      docsData?.items.map((doc) => (
                        <tr key={doc.id}>
                          <td style={{ fontWeight: 800 }}>{doc.title}</td>
                          <td>{doc.gradeName || '—'}</td>
                          <td>{doc.topicName || '—'}</td>
                          <td>{formatVnDate(doc.publishedAt)}</td>
                          <td>
                            <div className="admin-table-actions">
                              <a
                                href={`/tai-lieu/${doc.slug}`}
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                  padding: '0.4rem 0.65rem',
                                  borderRadius: 'var(--radius-sm)',
                                  border: '1px solid var(--color-border)',
                                  color: 'var(--color-primary)',
                                  textDecoration: 'none',
                                }}
                              >
                                <ExternalLink size={15} />
                              </a>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
              <div className="admin-table-footer">
                <span style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--color-text-secondary)' }}>
                  Tổng số: {docsData?.total ?? 0} tài liệu
                </span>
                <Pagination
                  currentPage={docPage}
                  totalPages={docsData?.totalPages ?? 1}
                  onPageChange={(p) => setDocPage(p)}
                />
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: CATEGORIES */}
        {visitedTabs.categories && (
          <div style={{ display: activeTab === 'categories' ? 'block' : 'none' }}>
            <div className="admin-action-header">
              <h1 style={{ margin: 0, fontSize: '1.65rem', fontWeight: 900 }}>Quản Lý Chuyên Mục</h1>
            </div>

            <div className="admin-table-card">
              <div className="table-responsive">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Tên chuyên mục</th>
                      <th>Đường dẫn (Permalink)</th>
                      <th>Số bài viết</th>
                      <th style={{ textAlign: 'right' }}>Thao tác</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categoriesData?.map((cat) => (
                      <tr key={cat.id}>
                        <td style={{ fontWeight: 800 }}>{cat.name}</td>
                        <td>/{cat.fullPath}</td>
                        <td>{cat._count.posts} bài</td>
                        <td>
                          <div className="admin-table-actions">
                            <button
                              type="button"
                              onClick={() => setDeleteTarget({ type: 'category', id: cat.id, title: cat.name })}
                              style={{
                                padding: '0.4rem 0.65rem',
                                borderRadius: 'var(--radius-sm)',
                                border: '1px solid #fecaca',
                                background: 'var(--color-danger-light)',
                                color: 'var(--color-danger)',
                                cursor: 'pointer',
                              }}
                            >
                              <Trash2 size={15} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: INTERACTIVE TOOLS */}
        {visitedTabs.tools && (
          <div style={{ display: activeTab === 'tools' ? 'block' : 'none' }}>
            <div className="admin-action-header">
              <h1 style={{ margin: 0, fontSize: '1.65rem', fontWeight: 900 }}>Quản Lý Tiện Ích Toán Học Tương Tác</h1>
              <button
                type="button"
                onClick={() => void fetchTools()}
                style={{
                  padding: '0.55rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-border-strong)',
                  background: 'var(--color-surface)',
                  fontWeight: 800,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  cursor: 'pointer',
                }}
              >
                <RefreshCw size={15} />
                <span>Làm mới</span>
              </button>
            </div>

            <div className="admin-table-card">
              <div className="table-responsive">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Biểu tượng</th>
                      <th>Tên tiện ích</th>
                      <th>Nhóm</th>
                      <th>Khối lớp</th>
                      <th>Đường dẫn</th>
                      <th style={{ textAlign: 'right' }}>Mở</th>
                    </tr>
                  </thead>
                  <tbody>
                    {toolsData && toolsData.length === 0 ? (
                      <tr>
                        <td colSpan={6}>
                          <EmptyState title="Chưa có tiện ích" description="Danh sách tiện ích trống." />
                        </td>
                      </tr>
                    ) : (
                      toolsData?.map((tool) => (
                        <tr key={tool.id}>
                          <td style={{ fontSize: '1.35rem' }}>{tool.iconText}</td>
                          <td style={{ fontWeight: 800 }}>{tool.title}</td>
                          <td>{tool.groupCode}</td>
                          <td>{tool.gradeSlug}</td>
                          <td style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)' }}>{tool.toolUrl}</td>
                          <td>
                            <div className="admin-table-actions">
                              <a
                                href={tool.toolUrl}
                                target="_blank"
                                rel="noreferrer"
                                style={{
                                  padding: '0.4rem 0.65rem',
                                  borderRadius: 'var(--radius-sm)',
                                  border: '1px solid var(--color-border)',
                                  color: 'var(--color-primary)',
                                  textDecoration: 'none',
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                }}
                              >
                                <ExternalLink size={15} />
                              </a>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: COMMENTS */}
        {visitedTabs.comments && (
          <div style={{ display: activeTab === 'comments' ? 'block' : 'none' }}>
            <div className="admin-action-header">
              <h1 style={{ margin: 0, fontSize: '1.65rem', fontWeight: 900 }}>Quản Lý Bình Luận & Hỏi Đáp</h1>
              <button
                type="button"
                onClick={() => void fetchComments()}
                style={{
                  padding: '0.55rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-border-strong)',
                  background: 'var(--color-surface)',
                  fontWeight: 800,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  cursor: 'pointer',
                }}
              >
                <RefreshCw size={15} />
                <span>Làm mới</span>
              </button>
            </div>

            <div className="admin-table-card">
              <div className="table-responsive">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Người gửi</th>
                      <th>Nội dung</th>
                      <th>Bài viết</th>
                      <th>Ngày gửi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {commentsData && commentsData.length === 0 ? (
                      <tr>
                        <td colSpan={4}>
                          <EmptyState
                            title="Chưa có bình luận mới"
                            description="Tất cả bình luận của học sinh và phụ huynh sẽ hiển thị tại đây."
                          />
                        </td>
                      </tr>
                    ) : (
                      commentsData?.map((comment) => (
                        <tr key={comment.id}>
                          <td style={{ fontWeight: 800 }}>{comment.authorName}</td>
                          <td>{comment.content}</td>
                          <td>{comment.post?.title || '—'}</td>
                          <td>{formatVnDate(comment.createdAt)}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        <ConfirmDialog
          open={Boolean(deleteTarget)}
          onOpenChange={(o) => {
            if (!o) setDeleteTarget(null);
          }}
          title="Xác nhận xóa dữ liệu"
          description={`Bạn có chắc chắn muốn xóa "${deleteTarget?.title || ''}"? Hệ thống sẽ kiểm tra ràng buộc toàn vẹn trước khi xóa.`}
          confirmLabel="Xác nhận xóa"
          loading={deleting}
          onConfirm={handleConfirmDelete}
        />
      </main>
    </div>
  );
}
