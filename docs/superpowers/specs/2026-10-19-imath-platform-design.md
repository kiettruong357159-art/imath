# Đặc Tả Kiến Trúc & Kỹ Thuật — Hệ Sinh Thái Toán Học iMath.vn (Fullstack Modern Clone)

- **Ngày tạo**: 2026-10-19
- **Chuẩn kiến trúc**: Tuân thủ 100% [`PROJECT_RULES_TEMPLATE.md`](../../../PROJECT_RULES_TEMPLATE.md) (Next.js 15 App Router + React 19 + TypeScript Strict + Prisma ORM + Zod + Vanilla CSS Design Tokens + Boutique Luxury UI Stack: Sonner, Radix Alert Dialog, React Day Picker + WebCrypto HMAC-SHA256 Edge Middleware).
- **Công cụ phân tích tích hợp**: [`morluto/rea`](../../../rea) đã được clone tại `./rea` để hỗ trợ bóc tách DOM, JS bundles và network captures.

---

## I. Phân Rã Tổng Thể Hệ Sinh Thái (4 Phân Hệ Lớn)

Để đảm bảo không bỏ sót bất kỳ trang hay tính năng nào của `imath.vn` và `edu.imath.vn`, toàn bộ dự án được phân rã thành **4 Phân hệ độc lập nối tiếp nhau**:

1. **Phân hệ 1 (Sub-project 1 — Đặc tả chi tiết trong tài liệu này)**:
   - Khởi tạo Core Architecture theo `PROJECT_RULES_TEMPLATE.md` (Next.js 15, React 19, Prisma SQLite local dễ dàng chuyển sang PostgreSQL/Neon, WebCrypto Edge Auth, Boutique UI Components: `SafeImage`, `ConfirmDialog`, `DateTimePicker`, `CustomSelect`, `Pagination`, `ToastContext`).
   - Xây dựng **Automated Crawler & Importer** kéo toàn bộ **617 URLs** từ WordPress REST API (`posts`, `imath_document`, `categories`, `imath_document_grade`, `imath_document_topic`), toàn bộ CSS/Assets gốc, và **24 trang tiện ích tương tác (`/tienich/*`)** về local + Database.
   - Tái tạo **100% giao diện & chức năng `imath.vn`** (Trang chủ `im26-*`, Học theo lớp 1–12, Góc phụ huynh, Tài liệu toán có lọc & phân trang Server-side, Chi tiết bài viết/tài liệu có bình luận & đánh giá sao `useOptimistic`, Tìm kiếm tức thì 400ms debounce, và toàn bộ 24 trang tiện ích toán học tương tác chạy mượt 100%).
   - Xây dựng **Admin Portal (`/admin`)** theo chuẩn Golden Reference SPA nhiều Tab (`?tab=...`, Lazy-Mount + Keep-Alive) để quản trị Bài viết, Tài liệu, Chuyên mục, Tiện ích và Người dùng.

2. **Phân hệ 2 (Sub-project 2 — Lộ trình tiếp theo)**:
   - Tái tạo toàn bộ cổng học tập **`edu.imath.vn`** (`/edu`): Đăng nhập/Đăng ký học sinh, phụ huynh, giáo viên; Lộ trình học theo tuần từ Lớp 1 đến Lớp 12 (`lo-trinh.js`); Bộ máy luyện tập toán tương tác hỗ trợ công thức KaTeX, hình học SVG và giọng đọc (`speech.js`); Báo cáo huy hiệu, lịch sử làm bài và quản lý lớp học cho giáo viên.

3. **Phân hệ 3 (Sub-project 3 — Lộ trình tiếp theo)**:
   - Tái tạo **Đấu Trường Toán Học `edu.imath.vn/dau-truong/`** (`/dau-truong` - iMath Super Arena): Giao diện 3 cột đối xứng, Ticker hoạt động thời gian thực, Sảnh thi đấu 1v1 / Giải đấu theo khối lớp, Bảng xếp hạng Leaderboard và hiệu ứng chúc mừng Confetti.

4. **Phân hệ 4 (Sub-project 4 — Lộ trình tiếp theo)**:
   - Hoàn thiện **Hệ thống Quản trị Giáo dục & Kiểm thử tự động toàn diện**: Quản trị ngân hàng câu hỏi, đề thi, thống kê điểm số (`groupBy` / `aggregate`), kiểm thử Vitest + Pre-push Hook 4 cổng kiểm soát chất lượng theo `PROJECT_RULES_TEMPLATE.md`.

---

## II. Thiết Kế Chi Tiết Phân Hệ 1: Core Architecture + Storefront `imath.vn` + 24 Tiện Ích + Crawler + Admin CMS

### 1. Mô Hình Cơ Sở Dữ Liệu (`prisma/schema.prisma`)

Sử dụng Prisma ORM với `sqlite` (`file:./dev.db`) ở môi trường phát triển local và sẵn sàng chuyển sang PostgreSQL (`Neon Serverless`) chỉ bằng việc đổi `provider = "postgresql"`:

- **`Role` & `User`**:
  - Phân quyền RBAC (`ADMIN`, `TEACHER`, `PARENT`, `STUDENT`), mật khẩu băm SHA-256 + Salt, trạng thái `isActive` (xóa mềm, `onDelete: Restrict` cho các liên kết quan trọng).
- **`Category`**:
  - Lưu trữ toàn bộ danh mục bài viết (`phuong-phap-hoc-toan`, `toan-tieu-hoc-chuong-trinh-lop-1-den-lop-5`, `toan-lop-1`..`toan-lop-6`, `toan-trung-hoc-co-so`, `toan-thpt`, `ky-nang-vs-tam-ly`), hỗ trợ phân cấp `parentId`, `slug` unique, chỉ mục `@@index([slug, isActive])`.
- **`Post` (Bài viết & Bài học)**:
  - Lưu trữ toàn bộ ~323 bài viết từ `post-sitemap1.xml` & `post-sitemap2.xml`.
  - Các trường: `id`, `wpId` (unique), `slug` (unique), `title`, `excerpt`, `content` (HTML gốc đã chuẩn hóa đường dẫn ảnh/link nội bộ), `featuredImage`, `gradeSlug` (`lop-1`..`lop-12`), `categoryId`, `viewCount`, `ratingAvg`, `ratingCount`, `status` (`PUBLISHED` | `DRAFT` | `ARCHIVED`), `publishedAt`, `createdAt`, `updatedAt`.
- **`MathDocument` (Tài liệu & Phiếu bài tập)**:
  - Lưu trữ toàn bộ ~245 tài liệu từ `imath_document-sitemap1.xml` & `imath_document-sitemap2.xml`.
  - Các trường: `id`, `wpId` (unique), `slug` (unique), `title`, `excerpt`, `content`, `featuredImage`, `downloadUrl`, `gradeSlug` (`toan-lop-1`..`toan-lop-6`), `topicSlug` (`thi-hsg`, `toan-loi-van`, `cong-tru-nhan-chia`, `so-sanh`, `thi-trong-ki`, `hinh-hoc`, `so-thap-phan`), `viewCount`, `downloadCount`, `status`, `publishedAt`.
- **`InteractiveTool` (24 Công cụ & Tiện ích Toán học `/tienich/*`)**:
  - Lưu trữ metadata và đường dẫn cho toàn bộ 24 công cụ luyện toán tương tác:
    - `01-may-sinh-de.html`, `02-cong-tru.html`, `03-tinh-nham.html`, `04-bang-cuu-chuong.html`, `05-tia-so.html`, `06-bang-hoc-thong-minh.html`, `07-xem-gio.html`
    - `08-toan-lop-1.html`, `09-toan-lop-2.html`, `10-toan-lop-3.html`, `11-toan-lop-4.html`, `12-toan-lop-5.html`, `13-luyen-thi-hoc-sinh-gioi.html`
    - `toan-loi-van.html`, `hinh-hoc-dai-luong-truc-quan.html`, `cau-do-vui-lam-bai.html`, `cau-do-lich-su`
    - `cap2/toan-cap-2-truc-quan.html` (Lớp 6, 7, 8, 9, Ôn thi vào 10 CLC)
- **`HubPage` (Các trang trụ cột Landing/Hub)**:
  - Lưu trữ HTML & cấu trúc các trang Hub đặc biệt của `imath.vn`: Trang chủ (`/`), Học theo lớp (`/hoc-theo-lop`, `/hoc-theo-lop/lop-1`..`lop-5`), Góc phụ huynh (`/goc-phu-huynh`), Tiện ích (`/tien-ich`), Câu đố vui (`/cau-do-vui`), Luyện thi vào lớp 6 trường trọng điểm (`/luyen-thi-vao-lop-6-truong-trong-diem`).
- **`PostRating` & `Comment`**:
  - Cho phép phụ huynh/học sinh đánh giá sao (tương đương `kk-star-ratings` của trang gốc) và gửi bình luận trên từng bài viết/tài liệu, xử lý cập nhật trung bình cộng qua `prisma.$transaction`.

---

### 2. Kiến Trúc Crawler & Đồng Bộ Toàn Bộ Dữ Liệu (`scripts/crawl-imath.ts`)

Để đảm bảo **"clone lại giống y trang, tất cả các trang luôn"** mà vẫn vận hành trên kiến trúc hiện đại:

1. **Tải toàn bộ CSS & JS gốc của `imath.vn`**:
   - Tải và lưu toàn bộ hệ thống stylesheet chuẩn của `imath.vn` (`im26-*` classes: `style.css`, `header-polish.css`, `home.css`, `home-unified.css`, `home-learning.css`, `home-schools.css`) vào `public/imath-assets/css/` để giao diện hiển thị giống 100% đến từng pixel, màu sắc, font chữ (`Baloo 2`, `Nunito`) và hiệu ứng.
2. **Tải trọn bộ 24 trang Tiện ích (`/tienich/*`) kèm toàn bộ JS/CSS/Data phụ thuộc**:
   - Quét toàn bộ các file HTML trong `/tienich/` và `/tienich/cap2/`, tự động phát hiện mọi thẻ `<script src="...">`, `<link href="...">`, và các file ngân hàng câu hỏi (`assets/grade-question-bank.js`, `assets/grade-practice.js`, v.v.) để tải về `public/tienich/` giữ nguyên cấu trúc thư mục.
   - Nhờ đó, toàn bộ 24 ứng dụng luyện toán tương tác hoạt động độc lập 100% offline/local mà không phụ thuộc máy chủ cũ.
3. **Đồng bộ toàn bộ Bài viết, Tài liệu, Chuyên mục qua WP REST API & Sitemaps**:
   - Gọi phân trang `/wp-json/wp/v2/categories?per_page=100`, `/wp-json/wp/v2/imath_document_grade`, `/wp-json/wp/v2/imath_document_topic`.
   - Gọi phân trang `/wp-json/wp/v2/posts?per_page=100&page=1..4` (323 bài viết) và `/wp-json/wp/v2/imath_document?per_page=100&page=1..3` (245 tài liệu).
   - Quét các trang Hub tĩnh (`/`, `/hoc-theo-lop/`, `/hoc-theo-lop/lop-1/`..`lop-5/`, `/goc-phu-huynh/`, `/tien-ich/`, `/cau-do-vui/`, `/luyen-thi-vao-lop-6-truong-trong-diem/`) để lưu đầy đủ nội dung `<main>` và nạp vào SQLite DB qua Prisma batch upsert.
   - Tự động viết lại (rewrite) các đường dẫn nội bộ `https://imath.vn/...` trong nội dung bài viết thành đường dẫn tương đối `/...` để toàn bộ link chuyển trang hoạt động ngay trên hệ thống mới.

---

### 3. Kiến Trúc Route & Giao Diện Next.js 15 App Router

Mỗi route đều có file `loading.tsx` (Tailored Route-level Skeleton, `CLS = 0`) theo đúng Nguyên tắc 2 của `PROJECT_RULES_TEMPLATE.md`:

- **`/` (`src/app/page.tsx` + `src/app/loading.tsx`)**:
  - Trang chủ iMath với đầy đủ các khối của `imath.vn`: Hero "Học Toán Online Miễn Phí Lớp 1 Đến 12", Chọn lớp học (Lớp 1–12), Hệ thống Tiện ích luyện toán trực quan, Đấu trường toán học, Tài liệu & Phiếu bài tập mới nhất (lấy động từ Prisma DB), Góc phụ huynh & Bài viết phương pháp học toán mới nhất.
- **`/hoc-theo-lop` & `/hoc-theo-lop/[grade]`**:
  - Trang lộ trình học theo từng lớp (Lớp 1 đến Lớp 12), tích hợp cả nội dung chương trình chuẩn lẫn danh sách bài viết/tài liệu/tiện ích thuộc lớp đó từ DB.
- **`/tai-lieu`, `/tai-lieu/[slug]`, `/tai-lieu-lop/[grade]`, `/chu-de-tai-lieu/[topic]`**:
  - Kho tài liệu & phiếu bài tập toán có lời giải.
  - Hỗ trợ tìm kiếm Debounce 400ms, lọc theo Lớp (`CustomSelect` Portal), lọc theo Chủ đề (`CustomSelect` Portal), và Phân trang Server-side (`?page=1&limit=12`).
- **`/tien-ich` & `/cau-do-vui` & `/luyen-thi-vao-lop-6-truong-trong-diem`**:
  - Trang tổng hợp toàn bộ 24 công cụ tương tác, phân nhóm Cơ bản (Lớp 1–5), Nâng cao (HSG, Hình học trực quan, Vào lớp 6), Toán Cấp 2 (Lớp 6–9, Ôn thi vào 10 CLC) và Câu đố tư duy.
- **`/tienich/[[...slug]]`**:
  - Phục vụ trực tiếp hoặc bọc khung toàn bộ 24 tiện ích tương tác (`/tienich/01-may-sinh-de.html` đến `/tienich/cap2/toan-cap-2-truc-quan.html`) đảm bảo mọi query string (`?lop=6`, `?chu-de=mixed&muc-do=kha`) hoạt động giống hệt trang gốc.
- **`/goc-phu-huynh`**:
  - Cẩm nang đồng hành cùng con học toán từ Tiểu học lên THPT.
- **`/[...slug]` (Dynamic Catch-All Route cho Bài viết & Chuyên mục WordPress)**:
  - Khớp chính xác 100% cấu trúc permalink gốc của `imath.vn`:
    - Nếu `slug` khớp với `Category` (ví dụ: `/phuong-phap-hoc-toan`, `/toan-tieu-hoc-chuong-trinh-lop-1-den-lop-5/toan-lop-1`, `/toan-trung-hoc-co-so/toan-lop-6`, `/toan-thpt`): Hiển thị trang Chuyên mục với bộ lọc tìm kiếm và phân trang Server-side.
    - Nếu `slug` khớp với `Post` (ví dụ: `/on-tap-toan-lop-6-hoc-ky-1-con-da-vung-chua`): Hiển thị trang Chi tiết bài viết chuẩn `im26-*`, mục lục tự động, đánh giá 5 sao tức thì (`useOptimistic` + `prisma.$transaction`), bài viết liên quan cùng chuyên mục.
- **`/admin` & `/login` (Hệ thống Quản trị CMS chuẩn Golden Reference)**:
  - Bảo vệ bởi WebCrypto HMAC-SHA256 Edge Middleware (`src/middleware.ts`) + `withAuth` API Guard.
  - Thiết kế SPA nhiều Tab (`?tab=dashboard | posts | documents | tools | categories | comments`) với Lazy-Mount + Keep-Alive, `ConfirmDialog` Radix UI khi xóa/đổi trạng thái, `DateTimePicker` tiếng Việt, `CustomSelect` Portal và `Sonner` Toast.

---

### 4. Kiểm Tra Tự Rà Soát Spec (Spec Self-Review)

1. **Placeholder scan**: Không có "TBD" hay "TODO". Mọi bảng dữ liệu, route và luồng crawler đã được định nghĩa rõ ràng.
2. **Internal consistency**: Cấu trúc URL của WordPress gốc (`/[slug]`, `/[category]/[sub-category]`, `/tai-lieu/[slug]`, `/tienich/...`) hoàn toàn tương thích với hệ thống routing của Next.js 15 App Router.
3. **Scope check**: Phân hệ 1 tập trung trọn vẹn vào toàn bộ `imath.vn` (617 URLs + 24 tiện ích + Admin CMS) và thiết lập nền móng vững chắc cho Phân hệ 2 & 3 (`edu.imath.vn` & `dau-truong`).
4. **Rule Compliance**: Đảm bảo 100% các nguyên tắc trong `PROJECT_RULES_TEMPLATE.md` (Server-side Pagination `take`/`skip`, Database Aggregations, 4 UI States + Skeleton `loading.tsx`, `prisma.$transaction`, Batch Lookup chống N+1, WebCrypto Edge Auth, `SafeImage` 2 tầng fallback, Boutique UI Stack).
