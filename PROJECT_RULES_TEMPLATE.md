# 🌟 BỘ QUY CHUẨN KỸ THUẬT & KIẾN TRÚC CỐT LÕI TOÀN DIỆN (UNIFIED CORE ARCHITECTURE BLUEPRINT)

> **Mục đích**: Tài liệu này đúc kết và hợp nhất **100% tinh hoa kiến trúc, quy chuẩn mã nguồn, mẫu thiết kế (Design Patterns) và bài học thực chiến (Post-Mortem Lessons)** từ 2 hệ thống Production:
> 1. **GlowSeoul K-Beauty** (*Hệ thống E-Commerce, Flash Sale tải cao, Catalog đa bộ lọc & Admin SPA nhiều Tab*).
> 2. **Song Ngọc Homestay PMS** (*Hệ thống Đặt phòng thời gian thực, Quản trị Buồng phòng PMS State Machine, Hóa đơn & Boutique Luxury UI Stack*).
>
> **Hệ sinh thái chuẩn hóa**: **Next.js 15 Fullstack (App Router) + React 19 + TypeScript Strict + Neon Serverless PostgreSQL + Prisma ORM + Zod + Vanilla CSS Design Tokens + Boutique UI (Sonner, Radix UI, React Day Picker)**.  
> **Cách sử dụng**: Sao chép file này vào thư mục gốc của bất kỳ dự án mới nào (đặt tên `PROJECT_RULES_TEMPLATE.md`, `AGENTS.md` hoặc `CLAUDE.md`) để làm **CORE ARCHITECTURE** ngay từ ngày đầu khởi tạo.

---

## 🧠 PHẦN I: 28 NGUYÊN TẮC VÀNG & KINH NGHIỆM THỰC CHIẾN CỐT LÕI (CORE ENGINEERING MINDSET)

Đây là những kỷ luật kỹ thuật bất biến được đúc kết từ quá trình tối ưu hiệu năng, xử lý lỗi biên dịch Vercel, chống race condition và chuẩn hóa UI/UX qua hàng trăm bài kiểm thử tự động:

### 1. Tư duy Dữ liệu lớn (10.000+ Records Mindset)
* **Bắt buộc tự vấn trước khi viết query**: *"Nếu bảng này tăng lên 10.000 - 100.000 bản ghi, câu lệnh này có làm tràn RAM Serverless Function hay làm đơ trình duyệt của người dùng không?"*.
* **Tuyệt đối cấm**:
  - Không truy vấn dữ liệu thả phanh (`findMany()` không có `take` và `skip`, hoặc vượt quá `MAX_LIST_LIMIT = 500`).
  - Không kéo toàn bộ dữ liệu bảng về RAM Node.js hoặc mảng JavaScript ở Client để lọc (`filter`), đếm (`length`), hoặc tính tổng (`reduce`).
* **Bắt buộc tính toán trực tiếp tại CSDL (Database Aggregations)**:
  - Dùng `prisma.model.count({ where })` để lấy tổng số bản ghi.
  - Dùng `prisma.model.aggregate({ _sum: { ... }, _count: true, where })` để tính tổng tiền, doanh thu.
  - Dùng `prisma.model.groupBy({ by: ['...'], _sum: { ... }, _count: true, orderBy: { ... }, take: 5 })` hoặc `$queryRaw` có `GROUP BY` khi làm báo cáo Top/Thống kê/Biểu đồ doanh thu.
* **Bắt buộc Phân trang & Lọc từ Server**:
  - Mọi danh sách hiển thị đều phải có phân trang từ Server (Server-side Pagination qua URL search params: `?page=1&limit=15`).
  - Mọi trường chọn danh mục có khả năng từ 50 bản ghi trở lên **bắt buộc dùng dropdown có ô tìm kiếm (`CustomSelect` hoặc Ajax Dynamic Search)**. Cấm render hàng trăm thẻ `<option>` thô vào DOM.

### 2. Tư duy Trải nghiệm tức thì 0ms & Non-Blocking UI (4 UI States)
* **Chống Double Submit / Spam Click**:
  - Nút hành động (Thanh toán, Đặt hàng, Đặt phòng, Lưu, Xóa, Duyệt...) **bắt buộc phải vô hiệu hóa (`disabled`) và hiển thị biểu tượng xoay (`Loader2`) ngay lập tức** trong lúc thao tác đang diễn ra (`loading`, `isPending` hoặc `isSubmitting`).
  - Thêm chốt chặn logic ở đầu hàm handler: `if (loading || isSubmitting) return;` để ngăn người dùng bấm đúp làm cạn kiệt connection pool hoặc tạo bản ghi trùng lặp.
* **Phân biệt rạch ròi 4 trạng thái giao diện (4 UI States)**:
  1. `initial loading`: Tải trang lần đầu (**Bắt buộc dùng Skeleton Shimmer tùy biến theo từng trang - Tailored Route-level Skeleton**).
     - **Nguyên tắc "Mỗi trang một Skeleton riêng biệt"**: Mỗi route (`/`, `/products`, `/products/[id]`, `/rooms`, `/rooms/[slug]`, `/booking`, `/checkout`, `/account`, `/admin`, `/orders/[id]`) bắt buộc có file `loading.tsx` với wireframe khớp 100% bố cục thực tế của trang đó.
     - **Triệt tiêu hoàn toàn Cumulative Layout Shift (`CLS = 0`)**: Không để giao diện bị giật, nhảy khung hình khi dữ liệu nạp xong.
     - **Cấm dùng text loader thô hoặc ký tự tĩnh trong Skeleton**: Tuyệt đối không dùng chữ *"Đang tải..."*, *"Vui lòng chờ..."*, spinner đơn độc giữa trang trống, hay để sót các thẻ `<span>/</span>` phân cách breadcrumb trong `loading.tsx`.
  2. `refreshing`: Làm mới dữ liệu nền qua Server Actions / Router Refresh (không khóa màn hình hay chặn thao tác của user).
  3. `mutation pending`: Đang xử lý sau click (chỉ xoay loading tại chính nút bấm đó).
  4. `empty`: Không có dữ liệu (bắt buộc render Empty State component có icon, thông điệp rõ ràng và nút kêu gọi hành động/xóa bộ lọc).
* **Phản hồi tức thì (Optimistic UI với React 19)**:
  - Với các tương tác toggle (Yêu thích/Wishlist, Đổi trạng thái nhanh, Check hoàn thành): Áp dụng `useOptimistic` để cập nhật giao diện trong 0ms, đồng bộ ngầm xuống DB và tự động rollback nếu lỗi.
* **Non-Blocking UI với `useTransition`**:
  - Bọc các thao tác chuyển tab, lọc danh mục hoặc gọi action vào `startTransition` để không khóa luồng vẽ chính (main thread).

### 3. Kỷ luật Toàn vẹn Dữ liệu, Concurrency & Chống Race Condition (`prisma.$transaction`)
* **Bắt buộc dùng Database Transactions (`prisma.$transaction`)**:
  - Khi một luồng nghiệp vụ thay đổi từ 2 bảng trở lên (ví dụ: Tạo đơn hàng + Trừ tồn kho + Tăng `soldQuantity` Flash Sale; hoặc Tạo Hóa đơn Checkout + Đổi trạng thái Booking sang `CHECKED_OUT` + Đổi trạng thái Phòng sang `DIRTY`), **bắt buộc bọc trong `prisma.$transaction`**.
* **Kiểm tra Khả dụng / Tồn kho BÊN TRONG Transaction (Anti-Double Booking / Anti-Overselling)**:
  - Không chỉ kiểm tra phòng trống/tồn kho trước khi vào transaction. Bắt buộc kiểm tra lại khả dụng **ngay bên trong callback `prisma.$transaction(async (tx) => { ... })`**. Nếu hết phòng/hết hàng ở mili-giây cuối do 2 khách bấm cùng lúc, ném lỗi tường minh (`throw new Error('SLOT_FULL')` hoặc `'OUT_OF_STOCK'`) để rollback tức thì.
* **Luôn lấy Đơn giá từ CSDL (Zero Client Price Trust)**:
  - Khi tạo đơn hàng hoặc đặt phòng, tuyệt đối không tin tưởng `price` hay `totalAmount` từ client gửi lên. Bắt buộc truy vấn đơn giá thực tế từ bảng `Product`/`RoomType`/`FlashSaleItem` trong DB để tính lại tổng tiền tại Server.

### 4. Triệt tiêu N+1 Query bằng Batch Lookup (`in` + `Map`) & Batch `groupBy` (O(1) Queries)
* **Cấm tuyệt đối đặt câu lệnh query Prisma bên trong vòng lặp `for` / `forEach` / `map` (`Promise.all(items.map(...))`)**:
  - **Trường hợp 1 (Kiểm tra/Đọc danh sách theo ID)**: Gom danh sách ID duy nhất (`Array.from(new Set(ids))`), gọi đúng 1 câu `findMany({ where: { id: { in: ids } } })`, sau đó đưa vào `new Map(items.map(i => [i.id, i]))` để tra cứu với độ phức tạp $O(1)$.
  - **Trường hợp 2 (Tính số lượng khả dụng/tồn kho cho N danh mục/hạng phòng)**: Thay vì bắn `2 * N` câu query cho `N` hạng phòng, sử dụng `getBatchAvailability()` chạy đúng **2 câu query `groupBy` song song** (`room.groupBy` + `booking.groupBy`) và ghép kết quả qua `Map`. Dù có 10 hay 100 hạng phòng cũng chỉ tốn đúng 2 câu query xuống CSDL.

### 5. Bảo vệ Tuyến Kép (Dual-Layer Protection), WebCrypto HMAC tại Edge & Defense-in-Depth RBAC
* **Lớp 1 — Xác minh Chữ ký Mật mã HMAC-SHA256 tại Edge Middleware (`< 2ms`, Zero FOUC)**:
  - Sử dụng API chuẩn W3C **WebCrypto (`crypto.subtle.importKey` & `crypto.subtle.verify`)** ngay trong `src/middleware.ts` để xác minh chữ ký `session_token` và thời hạn `exp` tại Edge Network trước khi request chạm vào Serverless Function.
  - Nếu chưa đăng nhập, token bị giả mạo hoặc không đúng vai trò, trả về `NextResponse.redirect` (HTTP 307) kèm `?redirect=<pathname>` ngay lập tức. Người dùng không bao giờ nhìn thấy giao diện `/admin` bị nháy (Zero Flash of Unauthenticated Content - FOUC).
* **Lớp 2 — Client/Server Guard & Skeleton Cover**:
  - Trong khi client đang tải phiên (`authLoading`) hoặc khi chuyển hướng bằng `router.replace()`, bắt buộc hiển thị `<AdminDashboardSkeleton />`, tuyệt đối không render dữ liệu nhạy cảm.
* **Lớp 3 — Phòng thủ đa tầng tại từng API / Server Action (`withAuth` Wrapper)**:
  - Không coi Edge Middleware là lớp bảo mật duy nhất. Mọi API Route và Server Action bắt buộc xác thực lại qua `withAuth(handler, 'resource:action')` hoặc `getCurrentUserFromCookie()`, hỗ trợ quyền Wildcard (`*`, `orders:*`, `bookings:view`).
* **Đồng bộ phân quyền lên UI**:
  - Ẩn hoặc `disabled` các nút hành động nhạy cảm (Thêm, Sửa, Xóa, Cấu hình) nếu user không có quyền tương ứng.

### 6. Kỷ luật Xác thực Session Cookie Kép (Dual-Source Cookie Reader cho Next.js 15)
* Helper `getCurrentUserFromCookie(reqOrCookieHeader)` bắt buộc hỗ trợ **cả 2 nguồn đọc cookie**:
  1. Từ `Request` / `NextRequest` (`req.cookies` hoặc `req.headers.get('cookie')`) khi gọi trong API Route Handlers và Vitest integration tests.
  2. Từ `await cookies()` của `next/headers` (bọc trong `try/catch` vì Next.js 15 `cookies()` là **async** và sẽ ném lỗi nếu gọi ngoài request scope) khi gọi trong Server Components hoặc Server Actions.
* Phía Client phải chờ `if (authLoading) return;` trước khi kết luận người dùng chưa đăng nhập; khi API trả về `401`, hiển thị thông báo rõ *"Phiên đăng nhập đã hết hạn"*.

### 7. Kỷ luật Thẩm mỹ, Design Tokens & Hệ thống Fallback Ảnh Đàn Hồi 2 Tầng
* **100% Design Tokens tại `globals.css`**:
  - Tuyệt đối không bịa mã màu HEX rải rác trong từng file. Mọi màu sắc, bo góc, bóng đổ, font chữ phải tham chiếu biến CSS (`var(--color-primary)`, `var(--color-surface)`, `var(--radius-md)`, `var(--shadow-md)`).
* **Chống vỡ ảnh toàn hệ thống 2 tầng (`SafeImage.tsx` + `image-fallback.ts`)**:
  - Cấm dùng thẻ `<img>` hoặc `<Image>` trần mà không có cơ chế bắt lỗi `onError`.
  - Mọi hình ảnh hiển thị bắt buộc đi qua `<SafeImage />` với cơ chế fallback 2 nấc:
    1. Khi URL ảnh chính từ DB bị lỗi/404 -> tự động chuyển sang ảnh mặc định (`DEFAULT_IMAGE`).
    2. Khi mất kết nối mạng hoặc ảnh mặc định từ xa lỗi -> tự động chuyển về vector nội bộ `/images/placeholder-default.svg` luôn sẵn sàng ngoại tuyến.
  - Hàm đọc mảng ảnh JSON từ DB (`getProductImageArray` / `safeParseJsonArray`) phải tự lọc bỏ các chuỗi rác `'null'`, `'undefined'`, `'[]'` và hỗ trợ parse an toàn không bao giờ gây sập trang.

### 8. Bộ Ba Thư Viện UI Cao Cấp (Boutique Luxury UI Stack — Cấm Native Browser Primitives)
* **Tuyệt đối cấm dùng `alert()`, `window.confirm()`, `<input type="date">` và `<input type="datetime-local">` mặc định của trình duyệt**:
  1. **Thông báo xếp tầng (`sonner`)**: Bọc qua `ToastProvider` (`src/context/ToastContext.tsx`) hỗ trợ cả `useToast()` lẫn `toast.success()` / `toast.error()`, hiệu ứng kính mờ, xếp chồng (stacking) và vuốt để đóng.
  2. **Hộp thoại xác nhận chuẩn WAI-ARIA (`@radix-ui/react-alert-dialog` - `ConfirmDialog.tsx`)**: Bắt buộc dùng cho mọi thao tác Xóa / Hủy / Đổi trạng thái quan trọng. Tự động bẫy tiêu điểm (focus trap) vào nút **"Hủy bỏ"** khi mở để tránh bấm nhầm phím `Enter` xóa mất dữ liệu; khóa nút và xoay `Loader2` khi đang `loading`.
  3. **Bộ chọn Ngày & Giờ bản địa hóa Tiếng Việt (`react-day-picker` v10 + `date-fns` locale `vi` - `DateTimePicker.tsx`)**: Hỗ trợ cả `mode="date"` (chọn ngày tự đóng) và `mode="datetime"` (lịch bên trái + cột khung giờ preset 14:00 / 12:00 bên phải), render qua React Portal chống cắt cụt.

### 9. Kỷ luật UI Overlay (Dropdown / Popover / Calendar trong Bảng & Modal)
* **Cấm dùng `position: absolute` cho menu thả xuống bên trong bảng hoặc modal** vì sẽ bị `overflow: hidden` hoặc `overflow-x: auto` cắt mất.
* **Chuẩn bắt buộc**: Render menu của `CustomSelect` và `DateTimePicker` qua **React Portal (`createPortal(..., document.body)`)** với `position: fixed` và `z-index: 10000` (cao hơn mọi modal/overlay ở mức `9999`).
  - Tính tọa độ bằng `getBoundingClientRect()`, tự động lật lên trên (`openUp`) khi khoảng trống phía dưới màn hình nhỏ hơn chiều cao menu, và kẹp `left` không tràn khỏi mép màn hình.
  - Lắng nghe sự kiện `scroll` (pha capture `true`, bỏ qua scroll bên trong chính menu) và `resize` để cập nhật vị trí thời gian thực.
  - Logic "Click ra ngoài để đóng" bắt buộc kiểm tra đồng thời **cả `triggerRef` lẫn `menuPortalRef`**.

### 10. Kỷ luật Chống Tràn Viền CSS Grid Responsive (`minmax(0, 1fr)` vs `1fr`) & Custom Scrollbar
* **Quy tắc CSS Grid bất biến**:
  - Trong CSS Grid, `1fr` có kích thước tối thiểu mặc định là `auto` (`min-content`). Khi đặt các nút chọn ngày giờ hoặc dropdown có chuỗi tiếng Việt dài (*"Thứ Năm, 15/10/2026 lúc 14:00"*) vào lưới 2 cột `repeat(2, 1fr)`, phần tử con sẽ đẩy phình cột và tràn ra ngoài card trên màn hình nhỏ.
  - **Bắt buộc dùng `repeat(2, minmax(0, 1fr))`** cho container lưới, kết hợp `min-width: 0; width: 100%; overflow: hidden;` trên phần tử con và `text-overflow: ellipsis; white-space: nowrap;` trên nhãn chữ.
* **Chuẩn hóa Thanh Cuộn Toàn Hệ Thống (System-Wide Custom Scrollbar)**:
  - Thiết lập thanh cuộn mảnh `6px`, bo tròn pill (`border-radius: 9999px`) và **triệt tiêu hoàn toàn 2 nút mũi tên mặc định thô kệch của Windows** bằng `::-webkit-scrollbar-button { display: none !important; width: 0 !important; height: 0 !important; }`.
  - Khu vực Sidebar tối màu (`.admin-sidebar`) có bộ token thanh cuộn kính mờ riêng (`rgba(255, 255, 255, 0.18)`) tiệp với màu nền.

### 11. Kỷ luật Xử lý Ngày Giờ & Múi Giờ Việt Nam (`+07:00 Asia/Ho_Chi_Minh` & Calendar Days)
* **Cấm parse chuỗi ngày thiếu offset múi giờ**:
  - Chuỗi `2026-10-15` nếu parse mặc định theo UTC (`Z`) sẽ bị lệch 7 tiếng hoặc lùi về ngày `2026-10-14T17:00` khi đổi múi giờ.
  - Mọi hàm nhận input ngày/giờ từ người dùng Việt Nam bắt buộc chuẩn hóa gắn hậu tố `+07:00` (`normalizeIso(str, defaultTime)`).
  - Trong các câu truy vấn SQL thống kê theo ngày trên PostgreSQL, bắt buộc dùng `AT TIME ZONE 'Asia/Ho_Chi_Minh'`.
* **Tính số đêm / số ngày theo Ngày Lịch Địa Phương (Calendar Days)**:
  - Không chia trực tiếp hiệu số mili-giây rồi `Math.round()` (vì nhận phòng 14:00 hôm trước và trả phòng 12:00 hôm sau chỉ cách nhau 22 giờ).
  - Bắt buộc đưa cả 2 mốc về `new Date(d.getFullYear(), d.getMonth(), d.getDate())` (00:00:00 giờ địa phương) trước khi chia cho `86_400_000`.

### 12. Kỷ luật Máy Trạng Thái Nghiệp Vụ (Strict State Machines) & Ràng Buộc Xóa An Toàn
* **Kiểm soát chặt chẽ luồng chuyển trạng thái (State Transition Guards)**:
  - Không cho phép cập nhật trạng thái tùy tiện. Mọi thực thể có vòng đời (Đơn hàng `Order`, Đặt phòng `Booking`, Phòng `Room`) phải khai báo bảng chuyển đổi hợp lệ (`VALID_TRANSITIONS`). Ví dụ: Phòng đang có khách (`OCCUPIED`) khi trả phòng bắt buộc chuyển sang `DIRTY` -> `CLEANING` -> `AVAILABLE`, cấm nhảy thẳng từ `OCCUPIED` sang `AVAILABLE`.
* **Bảo vệ Toàn vẹn Tham chiếu & Xóa Mềm (`isActive`)**:
  - Sử dụng `onDelete: Restrict` cho các bảng danh mục gốc đang gắn với giao dịch tài chính (`RoomType`, `Service`, `Role`) và `onDelete: SetNull` cho các liên kết lịch sử (`Order.user`, `Review.user`).
  - Trước khi xóa cứng (`DELETE`), API bắt buộc kiểm tra số lượng bản ghi con đang tham chiếu (ví dụ: không xóa Tầng đang có Phòng, không xóa Hạng phòng đã có Booking). Nếu đã phát sinh dữ liệu lịch sử, hướng dẫn người dùng chuyển sang trạng thái **Ngưng hoạt động (`isActive: false`)**.
* **Cơ chế Fallback Dữ liệu Mặc định Khi Chưa Migrate (`Graceful Schema Fallback`)**:
  - Khi bổ sung bảng danh mục mới vào hệ thống đang chạy, API và Custom Hook phải có `try/catch` trả về danh sách mặc định (`isFallback: true`) nếu bảng mới đang trống hoặc chưa kịp chạy migration, đảm bảo hệ thống không bao giờ bị downtime 500.

### 13. Kỷ luật Kiến trúc Admin Portal (Chuẩn Golden Reference & Hỗ trợ Đa Mô Hình)
* **Golden Reference Layout**:
  - Mọi trang quản trị danh sách (Sản phẩm, Đơn hàng, Đặt phòng, Hóa đơn, Dịch vụ, Nhân viên) bắt buộc tuân thủ cùng một cấu trúc chuẩn thông qua các class dùng chung: `.admin-action-header` (tiêu đề + nút thêm mới/làm mới) -> `.admin-filter-card` (ô tìm kiếm debounce + bộ lọc `CustomSelect`) -> `.admin-table-card` (bảng cuộn ngang `.table-responsive` + cột thao tác `.admin-table-actions`) -> `.admin-table-footer` (hiển thị tổng số mục + `<Pagination />`).
  - Không lặp lại thông tin: mỗi hành động/thông tin chỉ xuất hiện ở **một vị trí chuẩn duy nhất** (ví dụ: không lặp lại tiêu đề `h1` hay khối thông tin user/nút đăng xuất ở cả Sidebar lẫn Header).
* **Nếu Admin thiết kế dạng SPA Nhiều Tab trên 1 Route (`/admin`)**:
  - **Đồng bộ `?tab=<id>` lên URL (`window.history.replaceState`) + `localStorage`**: F5 không bao giờ bị mất tab đang mở.
  - **Lazy-Mount + Keep-Alive**: Chỉ mount tab khi người dùng mở lần đầu (`visitedTabs[tab]`), sau đó ẩn/hiện bằng `display: block / none` để chuyển tab 0ms và giữ nguyên vị trí cuộn, bộ lọc, form đang nhập.
  - **Parent tải 1 lần – Child tái sử dụng (`undefined` vs `[]`)**: State dữ liệu ban đầu ở Parent phải khởi tạo là `undefined` (chưa tải), tuyệt đối không khởi tạo là `[]` hay kiểm tra `initialData.length > 0` vì bảng rỗng hợp lệ (`[]`) sẽ khiến Child gọi API lại liên tục mỗi lần bấm chuyển tab.

### 14. Kỷ luật Storefront Hiệu Năng Cao (RSC Projection, `React.cache`, Live Search & Edge CDN)
* **Selective Column Projection**: Server Component danh sách chỉ `select` đúng các cột cần hiển thị trên thẻ Card (`productCardSelect`), không kéo các cột văn bản dài (`description`, `ingredients`, `policies`) khi chỉ render danh sách.
* **Chống Waterfall & Deduplication**: Gom các truy vấn độc lập trên cùng 1 trang vào `Promise.all(...)`. Bọc hàm lấy chi tiết bằng `React.cache()` (`src/lib/cached-queries.ts`) để `generateMetadata()` và `Page()` dùng chung kết quả trong 1 lượt render mà chỉ query DB 1 lần.
* **True Live Search**: Debounce **400ms**, hủy timer cũ trong cleanup, bỏ qua không bắn request lúc mới mount (`if (query === initialValue) return;`), và cập nhật URL bằng `router.replace(..., { scroll: false })` để không làm rác lịch sử nút Back của trình duyệt.
* **Edge CDN Caching & Đồng bộ Thời gian Thực (`serverTime`)**:
  - Đặt `Cache-Control: public, s-maxage=..., stale-while-revalidate=...` tùy theo độ tươi của dữ liệu. Với các API có đếm ngược như Flash Sale, trả kèm trường `serverTime: new Date().toISOString()` trong JSON để đồng hồ đếm ngược ở Client tự bù trừ độ lệch giờ của máy người dùng.

### 15. Kỷ luật Code Hygiene, Chống Lách Luật Underscore (`_`) & Lỗi Build Production Vercel
* **Zero Dead Code**:
  - Bắt buộc bật `"noUnusedLocals": true` và `"noUnusedParameters": true` trong `tsconfig.json` ngay từ ngày đầu khởi tạo dự án.
  - **CẤM TUYỆT ĐỐI dùng tiền tố gạch dưới `_` (`_req`, `_event`, `(_, i)`) để lách trình biên dịch**: Nếu biến/tham số không dùng, phải xóa bỏ; nếu là tham số nghiệp vụ (như bộ lọc số sao, phân trang), phải nối vào câu query xử lý thật.
  - Cấm để lại `debugger;`, `console.log()` (chỉ cho phép `console.error` / `console.warn` trong khối `catch`) và hàm rỗng `() => {}` không có chú thích.
* **Phòng tránh lỗi TypeScript chỉ nổ khi Build Production trên Vercel**:
  - Mảng rỗng dùng để `.push()` dữ liệu bắt buộc khai báo kiểu tường minh: `const items: OrderItemInput[] = []` (không viết `const items = []` vì trình biên dịch lúc `next build` sẽ suy diễn thành `never[]` hoặc `any[]` và báo lỗi).
  - Luôn chuẩn hóa các trường tùy chọn trước khi đưa vào Prisma (`image: item.image || ''`).
  - **Lưu ý đặc biệt trên Windows**: Trước khi chạy `npm run build`, `npx prisma db push` hoặc `git push` (kích hoạt pre-push hook), phải **tắt tiến trình `npm run dev` đang chạy** để tránh lỗi khóa file `EPERM: operation not permitted, rename ...query_engine-windows.dll.node`.

### 16. Pipeline Kiểm Soát Chất Lượng 3 Lớp & Kiểm Thử Bất Biến (`deleteMany`)
* **3 Lớp Bảo Vệ Tự Động**:
  1. **Lớp 1 (Local Git Pre-Push Hook - `scripts/setup-hooks.ts`)**: Tự động cài đặt qua `postinstall`. Chặn đứng lệnh `git push` nếu 1 trong 4 cổng thất bại: `check:rules` -> `check:types` -> `npm test` -> `npm run build`. Tuyệt đối không dùng `--no-verify`.
  2. **Lớp 2 (GitHub Actions CI - `.github/workflows/ci.yml`)**: Chạy lại đúng 4 Gateway trên môi trường Ubuntu sạch cho mọi nhánh `main` / `develop`.
  3. **Lớp 3 (Vercel Production Deployment)**: Chỉ merge vào `main` sau khi cả Lớp 1 và Lớp 2 đều xanh 100%.
* **Dọn dẹp dữ liệu Test an toàn khi chạy song song (`deleteMany`)**:
  - Khi các file test Vitest chạy song song trên cùng DB, bước cleanup (`beforeEach`/`afterEach`/`afterAll`) **bắt buộc dùng `prisma.model.deleteMany({ where: ... })`** thay vì `.delete({ where: { id } })` để đảm bảo tính idempotent, không bao giờ bị lỗi flaky *"Record to delete does not exist"*.

---

## 🚀 PHẦN II: HẠ TẦNG CLOUD SERVERLESS, EDGE & CẤU HÌNH NEXT.JS 15

### 1. Sơ Đồ Kiến Trúc Tổng Thể (Vercel Edge + Serverless + Neon + Upstash + Blob)

```text
+-------------------------------------------------------------------------------------------------+
|                                  NGƯỜI DÙNG TOÀN CẦU (BROWSER / MOBILE)                         |
+-----------------------------------------------+-------------------------------------------------+
                                                |
                                                | HTTPS / HTTP2
                                                v
+-------------------------------------------------------------------------------------------------+
|                                     VERCEL EDGE NETWORK (CDN)                                   |
|  - Security Headers (nosniff, SAMEORIGIN, strict-origin-when-cross-origin)                      |
|  - Tự động tối ưu định dạng ảnh WebP/AVIF qua Next.js Image Optimization                         |
|  - Cache tĩnh các trang ISR, CSS, JS bundles tại 300+ PoPs trên toàn cầu                         |
|  - Edge Middleware (< 2ms): Verify HMAC-SHA256 qua WebCrypto (crypto.subtle) + Device Detection  |
|  - Edge Caching qua Cache-Control: s-maxage=30..60, stale-while-revalidate=60..300               |
+-----------------------------------------------+-------------------------------------------------+
                                                |
                                                v
+-------------------------------------------------------------------------------------------------+
|                                 VERCEL SERVERLESS FUNCTIONS (NODE.JS)                           |
|                                                                                                 |
|  [ FRONTEND LAYER ]                                                                             |
|  - Next.js 15 App Router + React 19 (Server Components RSC & Client Components)                 |
|  - Vanilla CSS Design Tokens + Boutique Luxury UI (Sonner, Radix Alert, React Day Picker)       |
|                                                                                                 |
|  [ DATA & QUERY DEDUPLICATION ]                                                                 |
|  - React.cache() + Promise.all() gom nhóm truy vấn song song, chống Waterfall & N+1             |
|                                                                                                 |
|  [ BACKEND LAYER (MUTATIONS & APIS) ]                                                           |
|  - Route Handlers (/api/**) & Server Actions bọc withAuth() RBAC + Zod Validation               |
|  - Atomic Transactions (prisma.$transaction) kiểm tra khả dụng/tồn kho nội bộ chống Race        |
+--------------------+--------------------------+-------------------------+-----------------------+
                     |                          |                         |
                     | Neon Pooler (Port 6543)  | REST (HTTP API)         | Pre-signed / Blob API
                     v                          v                         v
+--------------------+----+  +------------------+----+  +-----------------+-----------------------+
|  NEON SERVERLESS DB     |  |   UPSTASH REDIS /     |  |       OBJECT STORAGE (MEDIA)            |
|  - PgBouncer Pooler     |  |   QSTASH / PUSHER     |  |  - Vercel Blob / Cloudflare R2 / Local  |
|  - Port 6543 (App pool) |  |  - Cache Serverless   |  |  - Kiểm tra MIME whitelist & Size <=5MB |
|  - Port 5432 (Migrate)  |  |  - Hàng đợi Async Job |  |  - Đặt tên file ngẫu nhiên crypto hex   |
|  - Branching per PR     |  |  - Realtime Pub/Sub   |  |  - Fallback SafeImage 2 tầng chống vỡ   |
+-------------------------+  +-----------------------+  +-----------------------------------------+
```

### 2. Cấu hình Biến Môi Trường `.env.example` Chuẩn
```env
# 1. Chuỗi kết nối qua PgBouncer Pooler - Port 6543 (Dùng cho Ứng dụng chạy trên Vercel/Node)
DATABASE_URL="postgresql://user:password@ep-cool-branch-pooler.us-east-2.aws.neon.tech/dbname?sslmode=require&pgbouncer=true&connect_timeout=15"

# 2. Chuỗi kết nối trực tiếp - Port 5432 (Dành riêng cho Prisma CLI / Migration / Seed)
DIRECT_URL="postgresql://user:password@ep-cool-branch.us-east-2.aws.neon.tech/dbname?sslmode=require"

# 3. Khóa bí mật ký HMAC-SHA256 Session Token (Tối thiểu 32 ký tự ngẫu nhiên: openssl rand -base64 32)
SESSION_SECRET="replace-with-32-byte-cryptographic-secret-key-2026"

# 4. Cấu hình Thanh toán VietQR Napas247 (Tùy chọn)
NEXT_PUBLIC_BANK_ID="MB"
NEXT_PUBLIC_BANK_ACCOUNT_NO="0123456789"
NEXT_PUBLIC_BANK_ACCOUNT_NAME="CONG TY TNHH CORE SYSTEM"

# 5. Lưu trữ Media & Serverless Mở rộng (Tùy chọn khi dùng Cloud Blob / Redis / Realtime)
BLOB_READ_WRITE_TOKEN=""
UPSTASH_REDIS_REST_URL=""
UPSTASH_REDIS_REST_TOKEN=""
```

### 3. Cấu hình `next.config.ts` Chuẩn Bảo Mật, Tối Ưu Bundle & Cache Tĩnh
```typescript
// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 7, // 7 ngày
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'plus.unsplash.com' },
      { protocol: 'https', hostname: 'img.vietqr.io' },
    ],
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'date-fns'],
  },
  async headers() {
    return [
      {
        source: '/_next/static/:all*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
};

export default nextConfig;
```

### 4. Cấu hình `tsconfig.json` Bắt Buộc Kiểm Soát Zero Dead Code
```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

---

## 🗄️ PHẦN III: QUY CHUẨN CƠ SỞ DỮ LIỆU, PRISMA ORM, CONCURRENCY & STATE MACHINES

### 1. Khởi tạo Prisma Singleton Chống Tràn Connection Pool (`src/lib/db.ts`)
```typescript
// src/lib/db.ts
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
  });

export const db = prisma;

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}
```

### 2. Quy chuẩn `prisma/schema.prisma` (Direct URL, Composite Indexes & Referential Integrity)
```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider  = "postgresql"
  url       = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}

model Role {
  id          String   @id @default(cuid())
  code        String   @unique // ADMIN, MANAGER, STAFF, CUSTOMER
  name        String
  permissions String   @default("[]") // Chuỗi JSON: ["*"] hoặc ["orders:*", "products:view"]
  users       User[]
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

model User {
  id        String   @id @default(cuid())
  name      String
  email     String   @unique
  phone     String?
  password  String   // Định dạng: salt:pbkdf2_sha512_hash
  roleId    String
  role      Role     @relation(fields: [roleId], references: [id], onDelete: Restrict)
  isActive  Boolean  @default(true) // Soft-deactivation thay vì xóa cứng khi đã có giao dịch
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@index([roleId])
  @@index([isActive, createdAt])
}
```

### 3. Mẫu Atomic Transaction Chống Race Condition & Double-Booking / Overselling
```typescript
// Kiểm tra khả dụng / tồn kho BÊN TRONG prisma.$transaction để khóa race condition
const result = await prisma.$transaction(async (tx) => {
  // Bước 1: Kiểm tra lại khả dụng ngay trong transaction
  const availability = await getRoomTypeAvailability(tx as unknown as PrismaClient, roomTypeId, checkIn, checkOut);
  if (!availability.isAvailable) {
    throw new Error('SLOT_FULL');
  }

  // Bước 2: Upsert thông tin khách hàng
  let guest = await tx.guest.findFirst({ where: { phone: guestPhone } });
  if (!guest) {
    guest = await tx.guest.create({
      data: { fullName: guestName, phone: guestPhone, email: guestEmail || null },
    });
  }

  // Bước 3: Tạo bản ghi Booking với đơn giá chuẩn tính từ Server
  const booking = await tx.booking.create({
    data: {
      bookingCode: generateBookingCode(),
      guestId: guest.id,
      roomTypeId,
      checkIn,
      checkOut,
      totalRoomAmount: serverCalculatedTotal,
      depositAmount: serverCalculatedDeposit,
      status: 'PENDING',
      paymentStatus: 'UNPAID',
    },
  });

  return { booking, guest };
});
```

### 4. Mẫu O(1) Batch `groupBy` Triệt Tiêu N+1 Query Khi Kiểm Tra Danh Sách
```typescript
// Thay vì chạy 2 * N câu query trong vòng lặp, chỉ chạy đúng 2 câu groupBy song song:
export async function getBatchAvailability(
  db: PrismaClient,
  roomTypeIds: string[],
  checkIn: Date,
  checkOut: Date
) {
  if (roomTypeIds.length === 0) return new Map();

  const [roomGroups, bookingGroups] = await Promise.all([
    db.room.groupBy({
      by: ['roomTypeId'],
      where: {
        roomTypeId: { in: roomTypeIds },
        status: { not: 'MAINTENANCE' },
      },
      _count: true,
    }),
    db.booking.groupBy({
      by: ['roomTypeId'],
      where: {
        roomTypeId: { in: roomTypeIds },
        status: { in: ['CONFIRMED', 'CHECKED_IN'] },
        checkIn: { lt: checkOut },
        checkOut: { gt: checkIn },
      },
      _count: true,
    }),
  ]);

  const totalById = new Map(roomGroups.map((g) => [g.roomTypeId, g._count]));
  const bookedById = new Map(bookingGroups.map((g) => [g.roomTypeId, g._count]));

  const result = new Map();
  for (const id of roomTypeIds) {
    const totalRooms = totalById.get(id) ?? 0;
    const bookedCount = bookedById.get(id) ?? 0;
    const availableCount = Math.max(0, totalRooms - bookedCount);
    result.set(id, {
      roomTypeId: id,
      totalRooms,
      bookedCount,
      availableCount,
      isAvailable: availableCount > 0,
    });
  }
  return result;
}
```

### 5. Mẫu Máy Trạng Thái Nghiệp Vụ (Strict State Machine Guard)
```typescript
// Khai báo tường minh các bước chuyển trạng thái hợp lệ, chặn mọi thao tác nhảy cóc sai nghiệp vụ
export const VALID_ROOM_STATUS_TRANSITIONS: Record<string, string[]> = {
  AVAILABLE: ['OCCUPIED', 'MAINTENANCE'],
  OCCUPIED: ['DIRTY'], // Khi khách trả phòng bắt buộc qua DIRTY để dọn buồng, cấm nhảy thẳng về AVAILABLE
  DIRTY: ['CLEANING', 'MAINTENANCE'],
  CLEANING: ['AVAILABLE', 'DIRTY', 'MAINTENANCE'],
  MAINTENANCE: ['DIRTY', 'AVAILABLE'],
};

export function canTransitionStatus(currentStatus: string, nextStatus: string): boolean {
  const allowed = VALID_ROOM_STATUS_TRANSITIONS[currentStatus] || [];
  return allowed.includes(nextStatus);
}
```

---

## ⚡ PHẦN IV: QUY ƯỚC NEXT.JS 15 (APP ROUTER), REACT 19 & EDGE MIDDLEWARE

### 1. Edge Middleware Xác Minh Chữ Ký HMAC-SHA256 Bằng WebCrypto (`src/middleware.ts`)
Chạy tại Edge Network trong `< 2ms`, không cần thư viện `crypto` của Node.js, chặn đứng cả token giả mạo lẫn hiện tượng nháy giao diện quản trị (Zero FOUC):

```typescript
// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const SESSION_COOKIE_NAME = 'session_token';
const SESSION_SECRET = process.env.SESSION_SECRET || 'default-core-secret-key-min-32-chars-2026';

function base64UrlToUint8Array(base64Url: string): Uint8Array {
  const padding = '='.repeat((4 - (base64Url.length % 4)) % 4);
  const base64 = (base64Url + padding).replace(/-/g, '+').replace(/_/g, '/');
  const rawData = atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

async function verifySignatureHmac(payloadB64: string, signatureB64: string): Promise<boolean> {
  try {
    const encoder = new TextEncoder();
    const key = await crypto.subtle.importKey(
      'raw',
      encoder.encode(SESSION_SECRET),
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['verify']
    );
    const sigBytes = base64UrlToUint8Array(signatureB64);
    return await crypto.subtle.verify('HMAC', key, sigBytes.buffer as ArrayBuffer, encoder.encode(payloadB64));
  } catch {
    return false;
  }
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get(SESSION_COOKIE_NAME)?.value;

  const isLoginPage = pathname === '/login' || pathname === '/admin/login';

  let validPayload: { userId?: string; role?: string; exp?: number; expiresAt?: number } | null = null;

  if (token && token.includes('.')) {
    const [payloadB64, signatureB64] = token.split('.');
    const isValidSig = await verifySignatureHmac(payloadB64, signatureB64);
    if (isValidSig) {
      try {
        const decodedJson = new TextDecoder().decode(base64UrlToUint8Array(payloadB64));
        const parsed = JSON.parse(decodedJson);
        const expiry = parsed.exp || parsed.expiresAt;
        if (!expiry || Date.now() < expiry) {
          validPayload = parsed;
        }
      } catch {
        validPayload = null;
      }
    }
  }

  // Nếu đã đăng nhập hợp lệ với quyền quản trị mà vào lại trang login -> chuyển thẳng vào /admin
  if (isLoginPage) {
    if (validPayload && validPayload.role && validPayload.role !== 'CUSTOMER') {
      return NextResponse.redirect(new URL('/admin', request.url));
    }
    return NextResponse.next();
  }

  // Bảo vệ toàn bộ nhánh /admin
  if (pathname.startsWith('/admin')) {
    if (!validPayload || validPayload.role === 'CUSTOMER') {
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  // Bảo vệ toàn bộ nhánh /account cho khách hàng đã đăng nhập
  if (pathname.startsWith('/account')) {
    if (!validPayload) {
      const loginUrl = new URL('/login', request.url);
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/account/:path*', '/login', '/admin/login'],
};
```

### 2. Chống Trùng Lặp Truy Vấn Giữa `generateMetadata` & `Page` (`src/lib/cached-queries.ts`)
```typescript
// src/lib/cached-queries.ts
import { cache } from 'react';
import { prisma } from './db';

export const getCachedItemBySlug = cache(async (slug: string) => {
  return prisma.roomType.findUnique({
    where: { slug },
  });
});
```

### 3. Component Hình Ảnh Đàn Hồi 2 Tầng Chống Vỡ Ảnh (`src/components/ui/SafeImage.tsx`)
```tsx
// src/components/ui/SafeImage.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';

export const DEFAULT_FALLBACK_IMAGE = '/images/placeholder-default.svg';

export function isValidImageSrc(src: unknown): src is string {
  if (typeof src !== 'string') return false;
  const trimmed = src.trim();
  if (
    !trimmed ||
    trimmed === 'null' ||
    trimmed === 'undefined' ||
    trimmed === '[]' ||
    trimmed === '{}'
  ) {
    return false;
  }
  return trimmed.startsWith('/') || trimmed.startsWith('http://') || trimmed.startsWith('https://') || trimmed.startsWith('data:image/');
}

export interface SafeImageProps extends Omit<ImageProps, 'src'> {
  src?: string | null;
  fallbackSrc?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  fallbackSrc = DEFAULT_FALLBACK_IMAGE,
  onError,
  ...props
}) => {
  const initialSrc = isValidImageSrc(src) ? src.trim() : fallbackSrc;
  const [imgSrc, setImgSrc] = useState<string>(initialSrc);
  const [hasFailedPrimary, setHasFailedPrimary] = useState(false);

  useEffect(() => {
    const nextSrc = isValidImageSrc(src) ? src.trim() : fallbackSrc;
    setImgSrc(nextSrc);
    setHasFailedPrimary(false);
  }, [src, fallbackSrc]);

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    // Tầng 1: Chuyển sang fallbackSrc cấu hình
    if (!hasFailedPrimary && imgSrc !== fallbackSrc) {
      setHasFailedPrimary(true);
      setImgSrc(fallbackSrc);
    } else if (imgSrc !== DEFAULT_FALLBACK_IMAGE) {
      // Tầng 2 (Offline Vector): Chuyển về SVG nội bộ luôn tồn tại trong public/
      setImgSrc(DEFAULT_FALLBACK_IMAGE);
    }
    if (onError) onError(e);
  };

  const isExternal = imgSrc.startsWith('http://') || imgSrc.startsWith('https://');

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt || 'Hình ảnh'}
      unoptimized={props.unoptimized ?? isExternal}
      onError={handleError}
    />
  );
};

export default SafeImage;
```

---

## 📦 PHẦN V: ENVELOPES CHUẨN HÓA & BỘ TIỆN ÍCH DRY CỐT LÕI (`src/lib/*`)

### 1. Chuẩn Hóa API Response Envelopes (`src/lib/types/api.ts`)
```typescript
// src/lib/types/api.ts
export interface ActionResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  fieldErrors?: Record<string, string[]>;
}

export interface PaginationMeta {
  currentPage: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export interface PaginatedResponse<T> {
  items: T[];
  meta: PaginationMeta;
}

export function successResponse<T>(data: T, message?: string): ActionResponse<T> {
  return { success: true, data, ...(message ? { message } : {}) };
}

export function errorResponse(error: string, fieldErrors?: Record<string, string[]>): ActionResponse<never> {
  return { success: false, error, ...(fieldErrors ? { fieldErrors } : {}) };
}

export function buildPaginationMeta(totalItems: number, currentPage: number, perPage: number): PaginationMeta {
  const totalPages = Math.max(1, Math.ceil(totalItems / perPage));
  return {
    currentPage,
    perPage,
    totalItems,
    totalPages,
    hasNextPage: currentPage < totalPages,
    hasPrevPage: currentPage > 1,
  };
}
```

### 2. Xác Thực Cryptographic PBKDF2, HMAC Token & Dual-Source Cookie (`src/lib/auth.ts`)
Không phụ thuộc thư viện bên thứ ba, hỗ trợ `timingSafeEqual` chống Timing Attack, đọc cookie từ cả `Request` lẫn `next/headers` async, và hỗ trợ phân quyền Wildcard RBAC:

```typescript
// src/lib/auth.ts
import crypto from 'node:crypto';
import type { NextRequest } from 'next/server';

export const SESSION_COOKIE_NAME = 'session_token';
const SESSION_SECRET = process.env.SESSION_SECRET || 'default-core-secret-key-min-32-chars-2026';
const PBKDF2_ITERATIONS = 60000;

export interface SessionPayload {
  userId: string;
  email: string;
  name: string;
  role: string;
  permissions: string[];
  exp: number;
}

export function hashPassword(password: string): string {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.pbkdf2Sync(password, salt, PBKDF2_ITERATIONS, 64, 'sha512').toString('hex');
  return `${salt}:${hash}`;
}

export function verifyPassword(password: string, storedHash: string): boolean {
  if (!storedHash || !storedHash.includes(':')) return false;
  const [salt, originalHash] = storedHash.split(':');
  if (!salt || !originalHash) return false;

  const hashBuffer = Buffer.from(originalHash, 'hex');
  const candidateBuffer = crypto.pbkdf2Sync(password, salt, PBKDF2_ITERATIONS, 64, 'sha512');
  if (
    hashBuffer.length === candidateBuffer.length &&
    crypto.timingSafeEqual(hashBuffer, candidateBuffer)
  ) {
    return true;
  }

  // Tương thích ngược với các bản ghi seed dùng 1000 vòng lặp
  const legacyBuffer = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512');
  return (
    hashBuffer.length === legacyBuffer.length &&
    crypto.timingSafeEqual(hashBuffer, legacyBuffer)
  );
}

export function createSessionToken(
  payload: Omit<SessionPayload, 'exp'>,
  ttlMs: number = 7 * 24 * 60 * 60 * 1000
): string {
  const fullPayload: SessionPayload = {
    ...payload,
    exp: Date.now() + ttlMs,
  };
  const encodedData = Buffer.from(JSON.stringify(fullPayload), 'utf8').toString('base64url');
  const signature = crypto
    .createHmac('sha256', SESSION_SECRET)
    .update(encodedData)
    .digest('base64url');
  return `${encodedData}.${signature}`;
}

export function verifySessionToken(token: string): SessionPayload | null {
  try {
    if (!token || !token.includes('.')) return null;
    const [encodedData, signature] = token.split('.');
    if (!encodedData || !signature) return null;

    const expectedSig = crypto
      .createHmac('sha256', SESSION_SECRET)
      .update(encodedData)
      .digest('base64url');

    const sigBuf = Buffer.from(signature);
    const expectedBuf = Buffer.from(expectedSig);
    if (sigBuf.length !== expectedBuf.length || !crypto.timingSafeEqual(sigBuf, expectedBuf)) {
      return null;
    }

    const payload = JSON.parse(Buffer.from(encodedData, 'base64url').toString('utf8')) as SessionPayload;
    if (Date.now() > payload.exp) return null;
    return payload;
  } catch {
    return null;
  }
}

export function hasPermission(userPermissions: string[], requiredPermission: string): boolean {
  if (!Array.isArray(userPermissions)) return false;
  if (userPermissions.includes('*')) return true;
  if (userPermissions.includes(requiredPermission)) return true;

  const [domain] = requiredPermission.split(':');
  if (domain && userPermissions.includes(`${domain}:*`)) return true;

  return false;
}

export function requirePermission(
  session: SessionPayload | null,
  requiredPermission: string
): { authorized: boolean; error?: string } {
  if (!session) {
    return { authorized: false, error: 'Phiên đăng nhập đã hết hạn hoặc chưa xác thực' };
  }
  if (!hasPermission(session.permissions, requiredPermission)) {
    return { authorized: false, error: 'Bạn không có quyền thực hiện thao tác này' };
  }
  return { authorized: true };
}

export async function getCurrentUserFromCookie(
  reqOrCookieHeader?: NextRequest | Request | string | null
): Promise<SessionPayload | null> {
  let token: string | undefined;

  if (typeof reqOrCookieHeader === 'string') {
    const pairs = reqOrCookieHeader.split(';').map((c) => {
      const [k, ...v] = c.trim().split('=');
      return [k, v.join('=')];
    });
    const cookieMap = Object.fromEntries(pairs);
    token = cookieMap[SESSION_COOKIE_NAME];
  } else if (reqOrCookieHeader && typeof reqOrCookieHeader === 'object') {
    if ('cookies' in reqOrCookieHeader && typeof reqOrCookieHeader.cookies?.get === 'function') {
      token = reqOrCookieHeader.cookies.get(SESSION_COOKIE_NAME)?.value;
    }
    if (!token && 'headers' in reqOrCookieHeader && typeof reqOrCookieHeader.headers?.get === 'function') {
      const rawCookie = reqOrCookieHeader.headers.get('cookie');
      if (rawCookie) {
        const pairs = rawCookie.split(';').map((c) => {
          const [k, ...v] = c.trim().split('=');
          return [k, v.join('=')];
        });
        token = Object.fromEntries(pairs)[SESSION_COOKIE_NAME];
      }
    }
  }

  if (!token) {
    try {
      const { cookies } = await import('next/headers');
      const cookieStore = await cookies();
      token = cookieStore.get(SESSION_COOKIE_NAME)?.value;
    } catch {
      token = undefined;
    }
  }

  if (!token) return null;
  return verifySessionToken(token);
}
```

### 3. Higher-Order Function Bọc Bảo Vệ Route Handler (`src/lib/with-auth.ts`)
```typescript
// src/lib/with-auth.ts
import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUserFromCookie, requirePermission, SessionPayload } from './auth';

type AuthenticatedHandler = (
  request: NextRequest,
  user: SessionPayload,
  context?: { params: Promise<Record<string, string>> }
) => Promise<NextResponse>;

export function withAuth(handler: AuthenticatedHandler, requiredPermission: string) {
  return async (request: NextRequest, context?: { params: Promise<Record<string, string>> }) => {
    const user = await getCurrentUserFromCookie(request);
    const check = requirePermission(user, requiredPermission);
    if (!check.authorized) {
      const status = !user ? 401 : 403;
      return NextResponse.json({ success: false, error: check.error }, { status });
    }
    return handler(request, user as SessionPayload, context);
  };
}
```

### 4. Tiện Ích Chuẩn Hóa Chuỗi Slug Tiếng Việt & Safe JSON Parser (`src/lib/slug.ts` & `src/lib/json.ts`)
```typescript
// src/lib/slug.ts
export function toSlug(text: string): string {
  return text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'd')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
}

export function toUpperSnake(text: string): string {
  return text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toUpperCase()
    .trim()
    .replace(/\s+/g, '_')
    .replace(/[^\w_]+/g, '')
    .replace(/__+/g, '_');
}
```

```typescript
// src/lib/json.ts
export function safeParseJson<T>(value: string | null | undefined, fallback: T): T {
  if (!value || typeof value !== 'string') return fallback;
  try {
    const parsed = JSON.parse(value);
    return parsed ?? fallback;
  } catch {
    return fallback;
  }
}

export function safeParseJsonArray<T = string>(value: unknown, fallback: T[] = []): T[] {
  if (Array.isArray(value)) return value as T[];
  if (!value || typeof value !== 'string') return fallback;
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : fallback;
  } catch {
    return fallback;
  }
}
```

### 5. Tiện Ích Chuẩn Hóa Múi Giờ Việt Nam (`+07:00`) & Tính Khoảng Cách Ngày Lịch (`src/lib/utils.ts`)
```typescript
// src/lib/utils.ts
export function normalizeVietnamIso(dateStr: string, defaultTime = '14:00:00'): string {
  const trimmed = dateStr.trim();
  if (!trimmed.includes('T')) return `${trimmed}T${defaultTime}+07:00`;
  if (trimmed.length === 16) return `${trimmed}:00+07:00`;
  if (trimmed.length === 19 && !trimmed.endsWith('Z') && !trimmed.includes('+')) {
    return `${trimmed}+07:00`;
  }
  return trimmed;
}

export function calculateCalendarDays(startInput: Date | string, endInput: Date | string): number {
  const dStart = typeof startInput === 'string' ? new Date(startInput) : startInput;
  const dEnd = typeof endInput === 'string' ? new Date(endInput) : endInput;
  if (isNaN(dStart.getTime()) || isNaN(dEnd.getTime())) return 1;

  const startMidnight = new Date(dStart.getFullYear(), dStart.getMonth(), dStart.getDate());
  const endMidnight = new Date(dEnd.getFullYear(), dEnd.getMonth(), dEnd.getDate());
  const diffMs = endMidnight.getTime() - startMidnight.getTime();
  const days = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
  return Math.max(1, days);
}

export function formatVND(amount: number): string {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    maximumFractionDigits: 0,
  }).format(amount);
}
```

---

## 📁 PHẦN VI: KIẾN TRÚC THƯ MỤC CHUẨN DỰ ÁN (CORE DIRECTORY BLUEPRINT)

```text
├── .github/
│   └── workflows/
│       └── ci.yml                 # Lớp 2: GitHub Actions CI chạy 4 Gateway tự động
├── prisma/
│   ├── schema.prisma              # Database Schema (Models, Relations, Composite Indexes, directUrl)
│   └── seed.ts                    # Master Data Seeder (Roles, Admin, Taxonomies, Sample Data)
├── public/
│   └── images/
│       └── placeholder-default.svg# Vector fallback ngoại tuyến chống vỡ ảnh toàn hệ thống
├── scripts/
│   ├── setup-hooks.ts             # Lớp 1: Tự động gắn .git/hooks/pre-push khi postinstall
│   └── verify-code-rules.ts       # Static Architecture Linter kiểm tra 8 quy chuẩn kỹ thuật
├── src/
│   ├── middleware.ts              # Edge Middleware (< 2ms WebCrypto HMAC-SHA256, Zero FOUC)
│   ├── app/                       # Next.js 15 App Router
│   │   ├── (auth)/                # Route group xác thực (/login, /register)
│   │   ├── (public)/              # Route group Storefront công khai (/, /products, /rooms, /checkout)
│   │   │   └── **/loading.tsx     # Skeleton Shimmer riêng biệt khớp 100% layout từng route (CLS = 0)
│   │   ├── admin/                 # Cổng quản trị (Hỗ trợ cả Multi-Route PMS & Multi-Tab SPA)
│   │   │   ├── loading.tsx        # AdminDashboardSkeleton chống FOUC
│   │   │   └── page.tsx           # Dashboard KPI (SQL Aggregations) & Quản trị danh mục
│   │   ├── api/                   # Route Handlers (/api/auth/*, /api/admin/*, Webhooks, Edge CDN APIs)
│   │   ├── layout.tsx             # Root Layout (Gắn Fonts, ToastProvider, AuthProvider)
│   │   ├── loading.tsx            # Home Wireframe Skeleton
│   │   ├── error.tsx              # Error Boundary toàn cục có nút thử lại an toàn
│   │   ├── not-found.tsx          # Trang 404 tùy biến theo thương hiệu
│   │   └── globals.css            # Trung tâm CSS Tokens, Custom Scrollbar, Admin UI Classes, Animations
│   ├── components/
│   │   ├── ui/                    # Bộ UI Atoms chuẩn hóa:
│   │   │   ├── SafeImage.tsx      # Ảnh đàn hồi 2 tầng fallback
│   │   │   ├── CustomSelect.tsx   # Dropdown tìm kiếm render qua Portal (position: fixed, zIndex: 10000)
│   │   │   ├── ConfirmDialog.tsx  # Radix Alert Dialog bẫy tiêu điểm vào nút Hủy bỏ
│   │   │   ├── DateTimePicker.tsx # React Day Picker v10 + date-fns tiếng Việt (mode date & datetime)
│   │   │   ├── Pagination.tsx     # Phân trang chuẩn (Trang X/Y, Tổng Z mục)
│   │   │   └── skeletons/         # SkeletonBox, CardSkeleton, AdminTableSkeleton, AdminDashboardSkeleton
│   │   ├── layout/                # PublicHeader, PublicFooter, AdminHeader, AdminSidebar
│   │   └── admin/                 # Các Manager & Modal theo chuẩn Golden Reference
│   ├── context/                   # AuthContext, ToastContext (Sonner adapter), AdminUIContext, CartContext
│   ├── hooks/                     # Custom Hooks (có Graceful Schema Fallback khi bảng mới chưa migrate)
│   └── lib/                       # Core Domain & Infrastructure Utilities
│       ├── db.ts                  # Prisma Client Singleton
│       ├── auth.ts                # PBKDF2 + HMAC-SHA256 + Dual-source cookie + Wildcard RBAC
│       ├── with-auth.ts           # Higher-Order Function bảo vệ API Route
│       ├── cached-queries.ts      # React.cache() deduplication giữa generateMetadata & Page
│       ├── slug.ts                # Khử dấu tiếng Việt chuẩn NFD (toSlug, toUpperSnake)
│       ├── json.ts                # Parse JSON an toàn (safeParseJson, safeParseJsonArray)
│       ├── vietqr.ts              # Generator URL mã QR Napas247 động
│       ├── constants.ts           # Enums, trạng thái, MAX_LIST_LIMIT = 500
│       ├── utils.ts               # formatVND, normalizeVietnamIso (+07:00), calculateCalendarDays
│       ├── validation/schemas.ts  # Zod Validation Schemas tập trung
│       └── types/api.ts           # ActionResponse<T> & PaginatedResponse<T>
└── tests/                         # Bộ kiểm thử tự động Vitest (*.test.ts)
```

---

## 🎨 PHẦN VII: DESIGN SYSTEM, RESPONSIVE CSS GRID, CUSTOM SCROLLBAR & BỘ BA UI CAO CẤP

### 1. Bộ CSS Tokens, Thanh Cuộn 6px & Khung Chuẩn Admin (`src/app/globals.css`)
```css
/* src/app/globals.css */
:root {
  /* 1. Brand Colors (Thay đổi theo nhận diện từng dự án) */
  --color-primary: #0f5b66;
  --color-primary-hover: #0a434b;
  --color-primary-light: #eaf4f6;
  --color-accent: #c49a45;
  --color-accent-hover: #b08736;
  --color-accent-light: #fbf5e8;

  /* 2. Surfaces & Borders */
  --color-bg: #faf8f5;
  --color-surface: #ffffff;
  --color-surface-hover: #f5f2ed;
  --color-border: #ede7df;

  /* 3. Typography */
  --color-text: #1f2937;
  --color-text-muted: #6b7280;
  --color-text-light: #9ca3af;
  --color-text-inverse: #ffffff;

  /* 4. Semantic Feedback */
  --color-success: #10b981;
  --color-warning: #f59e0b;
  --color-error: #ef4444;

  /* 5. Elevations & Radii */
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-full: 9999px;
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.05);

  /* 6. Transitions & Scrollbar Tokens */
  --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-normal: 250ms cubic-bezier(0.16, 1, 0.3, 1);
  --scrollbar-width: 6px;
  --scrollbar-thumb: rgba(15, 91, 102, 0.28);
  --scrollbar-thumb-hover: rgba(15, 91, 102, 0.52);
}

/* Thanh cuộn tinh tế toàn hệ thống & xóa bỏ mũi tên mặc định của Windows */
* {
  scrollbar-width: thin;
  scrollbar-color: var(--scrollbar-thumb) transparent;
}
::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background-color: var(--scrollbar-thumb);
  border-radius: var(--radius-full);
}
::-webkit-scrollbar-thumb:hover {
  background-color: var(--scrollbar-thumb-hover);
}
::-webkit-scrollbar-button {
  display: none !important;
  width: 0 !important;
  height: 0 !important;
}

/* Chống tràn viền CSS Grid 2 cột cho Input / DateTimePicker / CustomSelect */
.responsive-input-pair {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}
@media (min-width: 640px) {
  .responsive-input-pair {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

/* Shimmer Skeleton Animation (CLS = 0) */
@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
.skeleton-box, .skeleton-shimmer {
  position: relative;
  overflow: hidden;
  background-color: var(--color-surface-hover);
  border-radius: var(--radius-md);
}
.skeleton-shimmer::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 100%);
  animation: shimmer 1.6s infinite ease-in-out;
}

/* Chuẩn hóa Golden Reference cho mọi trang Admin Table */
.admin-action-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
}
.admin-filter-card {
  padding: 1rem 1.25rem;
  border-radius: var(--radius-lg);
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-sm);
  margin-bottom: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.875rem;
}
.admin-table-card {
  border-radius: var(--radius-lg);
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  margin-bottom: 1.5rem;
}
.table-responsive {
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
.admin-table {
  width: 100%;
  min-width: 820px;
  border-collapse: collapse;
  text-align: left;
  font-size: 0.875rem;
}
.admin-table-footer {
  padding: 0.875rem 1.25rem;
  border-top: 1px solid var(--color-border);
  background-color: var(--color-surface);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.75rem;
}

/* Radix ConfirmDialog Glassmorphism */
.radix-alert-overlay {
  background-color: rgba(10, 48, 54, 0.48);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  position: fixed;
  inset: 0;
  z-index: 10000;
}
.radix-alert-content {
  background-color: var(--color-surface);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 92vw;
  max-width: 480px;
  padding: 1.5rem;
  z-index: 10001;
  border: 1px solid var(--color-border);
}
```

### 2. Cấu trúc Adapter `ToastContext.tsx` với `sonner`
```tsx
// src/context/ToastContext.tsx
'use client';

import React, { createContext, useContext, useCallback } from 'react';
import { Toaster, toast } from 'sonner';

export { toast };

export type ToastType = 'success' | 'error' | 'info' | 'warning';

interface ToastContextValue {
  showToast: (message: string, type?: ToastType) => void;
  success: (message: string) => void;
  error: (message: string) => void;
  info: (message: string) => void;
  warning: (message: string) => void;
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const showToast = useCallback((message: string, type: ToastType = 'info') => {
    if (type === 'success') toast.success(message);
    else if (type === 'error') toast.error(message);
    else if (type === 'warning') toast.warning(message);
    else toast.info(message);
  }, []);

  return (
    <ToastContext.Provider
      value={{
        showToast,
        success: (msg) => toast.success(msg),
        error: (msg) => toast.error(msg),
        info: (msg) => toast.info(msg),
        warning: (msg) => toast.warning(msg),
      }}
    >
      {children}
      <Toaster position="top-right" richColors closeButton expand duration={3500} theme="light" />
    </ToastContext.Provider>
  );
};

export function useToast(): ToastContextValue {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    return {
      showToast: (m) => toast(m),
      success: (m) => toast.success(m),
      error: (m) => toast.error(m),
      info: (m) => toast.info(m),
      warning: (m) => toast.warning(m),
    };
  }
  return ctx;
}
```

### 3. Hộp Thoại Xác Nhận An Toàn `ConfirmDialog.tsx` (`@radix-ui/react-alert-dialog`)
- **Nguyên tắc**: Mọi thao tác xóa/hủy bắt buộc mở `<ConfirmDialog />` thay vì `window.confirm()`.
- Nút `AlertDialog.Cancel` tự động nhận focus khi mở hộp thoại, ngăn người dùng bấm nhầm `Enter` gây xóa dữ liệu.
- Khi `loading={true}`, khóa đóng modal và hiển thị `<Loader2 className="animate-spin" />`.

---

## 🏛️ PHẦN VIII: KIẾN TRÚC ADMIN PORTAL (ĐA TRANG PMS & ĐA TAB SPA)

Tùy theo đặc thù dự án, hệ thống hỗ trợ 2 kiến trúc Admin chuẩn hóa:

### Mô Hình A: Admin Đa Trang Theo Route (`/admin/orders`, `/admin/rooms`, `/admin/invoices`)
* Phù hợp với hệ thống nghiệp vụ sâu (như PMS Khách sạn, ERP, Quản lý Kho bãi).
* Mỗi phân hệ là một route độc lập nằm dưới `src/app/admin/layout.tsx`, chia sẻ `AdminSidebar`, `AdminHeader` và `AdminUIContext` (quản lý đóng/mở Drawer menu trên Mobile `< 1024px`).

### Mô Hình B: Admin SPA Nhiều Tab Trên 1 Route (`/admin?tab=orders`)
* Phù hợp với hệ thống E-Commerce / Quản trị tập trung cần chuyển tab tức thì `0ms`:
  1. **Đồng bộ Tab lên URL & LocalStorage**:
     ```typescript
     const VALID_TABS = ['overview', 'products', 'orders', 'flash-sales', 'coupons', 'users'] as const;
     type AdminTab = (typeof VALID_TABS)[number];

     const handleSelectTab = (tab: AdminTab) => {
       setActiveTab(tab);
       setVisitedTabs((prev) => ({ ...prev, [tab]: true }));
       const url = new URL(window.location.href);
       url.searchParams.set('tab', tab);
       window.history.replaceState({}, '', url.toString());
       localStorage.setItem('admin_active_tab', tab);
     };
     ```
  2. **Lazy-Mount + Keep-Alive (`0ms` Switch)**:
     ```tsx
     {visitedTabs.orders && (
       <div style={{ display: activeTab === 'orders' ? 'block' : 'none' }}>
         <OrderManager initialOrders={ordersCache} onRefreshCounts={fetchMasterData} />
       </div>
     )}
     ```
  3. **Phân biệt `undefined` (Chưa tải) vs `[]` (Bảng rỗng hợp lệ)**:
     - State cache ở Parent khởi tạo là `useState<Order[] | undefined>(undefined)`.
     - Child kiểm tra `if (initialOrders !== undefined) return;` để không gọi API trùng lặp khi bảng có 0 bản ghi (`[]`).

---

## 💳 PHẦN IX: CÁC MẪU NGHIỆP VỤ THƯƠNG MẠI, ĐẶT LỊCH & UPLOAD AN TOÀN

### 1. Sinh Mã Thanh Toán VietQR Napas247 Động (`src/lib/vietqr.ts`)
```typescript
// src/lib/vietqr.ts
export interface VietQROptions {
  bankId?: string;
  accountNo?: string;
  accountName?: string;
  amount: number;
  description: string;
  template?: 'compact2' | 'compact' | 'qr_only' | 'print';
}

export function generateVietQRUrl(options: VietQROptions): string {
  const bankId = options.bankId || process.env.NEXT_PUBLIC_BANK_ID || 'MB';
  const accountNo = options.accountNo || process.env.NEXT_PUBLIC_BANK_ACCOUNT_NO || '0123456789';
  const accountName = encodeURIComponent(
    options.accountName || process.env.NEXT_PUBLIC_BANK_ACCOUNT_NAME || 'CONG TY TNHH CORE'
  );
  const amount = Math.max(0, Math.round(options.amount));
  const addInfo = encodeURIComponent(options.description.trim());
  const template = options.template || 'compact2';

  return `https://img.vietqr.io/image/${bankId}-${accountNo}-${template}.png?amount=${amount}&addInfo=${addInfo}&accountName=${accountName}`;
}
```

### 2. API Upload Tệp An Toàn (`src/app/api/admin/upload/route.ts`)
Kiểm tra chặt chẽ MIME type whitelist, giới hạn dung lượng `5MB`, và sinh tên file ngẫu nhiên bằng `crypto.randomBytes`:

```typescript
// src/app/api/admin/upload/route.ts
import { NextRequest, NextResponse } from 'next/server';
import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import path from 'node:path';
import { withAuth } from '@/lib/with-auth';

const ALLOWED_MIME_TYPES: Record<string, string> = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
  'image/gif': 'gif',
};
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export const POST = withAuth(async (request: NextRequest) => {
  const formData = await request.formData();
  const file = formData.get('file') as File | null;

  if (!file) {
    return NextResponse.json({ success: false, error: 'Không tìm thấy tệp tải lên' }, { status: 400 });
  }
  const ext = ALLOWED_MIME_TYPES[file.type];
  if (!ext) {
    return NextResponse.json(
      { success: false, error: 'Định dạng ảnh không hợp lệ (Chỉ hỗ trợ JPG, PNG, WEBP, GIF)' },
      { status: 400 }
    );
  }
  if (file.size > MAX_FILE_SIZE) {
    return NextResponse.json({ success: false, error: 'Dung lượng ảnh tối đa là 5MB' }, { status: 400 });
  }

  const fileName = `upload-${Date.now()}-${crypto.randomBytes(4).toString('hex')}.${ext}`;
  const uploadDir = path.join(process.cwd(), 'public', 'uploads');
  await fs.mkdir(uploadDir, { recursive: true });

  const buffer = Buffer.from(await file.arrayBuffer());
  await fs.writeFile(path.join(uploadDir, fileName), buffer);

  return NextResponse.json({
    success: true,
    data: { url: `/uploads/${fileName}`, fileName, size: file.size },
  });
}, 'media:upload');
```

---

## 🛡️ PHẦN X: PIPELINE CHẤT LƯỢNG 3 LỚP, STATIC LINTER 8 QUY TẮC & KIỂM THỬ VITEST

### 1. Cấu hình `package.json` Scripts Chuẩn
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "prisma generate && next build",
    "start": "next start",
    "test": "vitest run",
    "test:watch": "vitest",
    "check:types": "tsc --noEmit",
    "check:rules": "tsx scripts/verify-code-rules.ts",
    "verify": "npm run check:rules && npm run check:types && npm test",
    "pre-push": "npm run verify && npm run build",
    "prepare:hooks": "tsx scripts/setup-hooks.ts",
    "postinstall": "prisma generate && tsx scripts/setup-hooks.ts"
  }
}
```

### 2. Static Architecture Linter 8 Quy Chuẩn (`scripts/verify-code-rules.ts`)
Tự động quét toàn bộ dự án để chặn đứng lỗi vỡ ảnh, thiếu Middleware chống FOUC, thiếu Skeleton `loading.tsx`, biến thừa, `debugger;`, `console.log()`, hàm rỗng và hành vi dùng tiền tố `_` để lách luật:

```typescript
// scripts/verify-code-rules.ts
import fs from 'node:fs';
import path from 'node:path';

export interface RuleViolation {
  file: string;
  line: number;
  rule: string;
  message: string;
}

const ROOT_DIR = process.cwd();
const SRC_DIR = path.join(ROOT_DIR, 'src');
const ALLOWED_PRISMA_UNDERSCORES = new Set(['_sum', '_count', '_avg', '_min', '_max']);

export function collectFiles(dir: string, extensions = ['.ts', '.tsx']): string[] {
  if (!fs.existsSync(dir)) return [];
  const results: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...collectFiles(fullPath, extensions));
    } else if (extensions.some((ext) => entry.name.endsWith(ext))) {
      results.push(fullPath);
    }
  }
  return results;
}

export function verifyProjectRules(): RuleViolation[] {
  const violations: RuleViolation[] = [];
  const files = collectFiles(SRC_DIR, ['.ts', '.tsx']);

  // Rule 1: Kiểm tra tsconfig.json bật noUnusedLocals & noUnusedParameters
  const tsconfigPath = path.join(ROOT_DIR, 'tsconfig.json');
  if (fs.existsSync(tsconfigPath)) {
    const tsconfig = JSON.parse(fs.readFileSync(tsconfigPath, 'utf8'));
    const opts = tsconfig.compilerOptions || {};
    if (!opts.noUnusedLocals || !opts.noUnusedParameters) {
      violations.push({
        file: 'tsconfig.json',
        line: 1,
        rule: 'Rule 1: Zero Dead Code Config',
        message: 'Bắt buộc bật noUnusedLocals: true và noUnusedParameters: true trong tsconfig.json',
      });
    }
  }

  // Rule 2: Kiểm tra sự tồn tại của Edge Middleware
  const middlewarePath = path.join(SRC_DIR, 'middleware.ts');
  if (!fs.existsSync(middlewarePath)) {
    violations.push({
      file: 'src/middleware.ts',
      line: 1,
      rule: 'Rule 2: Edge Middleware Anti-FOUC',
      message: 'Thiếu file src/middleware.ts bảo vệ tuyến /admin và /account tại Edge',
    });
  }

  // Quét từng file trong src/
  for (const filePath of files) {
    const relFile = path.relative(ROOT_DIR, filePath);
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split(/\r?\n/);

    // Rule 3: Cấm text loading thô trong các file loading.tsx
    if (filePath.endsWith('loading.tsx')) {
      if (content.includes('Đang tải...') || content.includes('Vui lòng chờ...')) {
        violations.push({
          file: relFile,
          line: 1,
          rule: 'Rule 3: Tailored Skeleton (No Raw Text Loader)',
          message: 'Cấm dùng chữ "Đang tải..." trong loading.tsx. Bắt buộc dùng Shimmer Skeleton.',
        });
      }
    }

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmed = line.trim();
      if (trimmed.startsWith('//') || trimmed.startsWith('/*') || trimmed.startsWith('*')) continue;

      // Rule 4: Cấm debugger;
      if (/^\s*debugger\s*;?/.test(line)) {
        violations.push({
          file: relFile,
          line: i + 1,
          rule: 'Rule 4: Zero Debugger',
          message: 'Cấm để lại câu lệnh debugger; trong mã nguồn.',
        });
      }

      // Rule 5: Cấm console.log() trong src/
      if (/\bconsole\.log\s*\(/.test(line)) {
        violations.push({
          file: relFile,
          line: i + 1,
          rule: 'Rule 5: Zero Console.log',
          message: 'Cấm dùng console.log() trong src/. Chỉ dùng console.error hoặc console.warn khi bắt lỗi.',
        });
      }

      // Rule 6: Cấm tiền tố "_" lấp liếm biến/tham số không dùng
      if (/\(\s*_[A-Za-z0-9]*\s*[,)]|,\s*_[A-Za-z0-9]*\s*[,)]/.test(line)) {
        violations.push({
          file: relFile,
          line: i + 1,
          rule: 'Rule 6: Anti-Underscore Cheat',
          message: 'Cấm đặt tên tham số bắt đầu bằng "_" để lách noUnusedParameters.',
        });
      }
      const underscoreTokens = line.match(/\b_([a-zA-Z0-9]+)\b/g);
      if (underscoreTokens) {
        for (const token of underscoreTokens) {
          if (!ALLOWED_PRISMA_UNDERSCORES.has(token)) {
            const insideQuotes = /['"`][^'"`]*?_[a-zA-Z0-9]+[^'"`]*?['"`]/.test(line);
            if (!insideQuotes) {
              violations.push({
                file: relFile,
                line: i + 1,
                rule: 'Rule 6: Anti-Underscore Identifier',
                message: `Phát hiện định danh "${token}" dùng tiền tố "_". Hãy xóa bỏ hoặc sử dụng vào logic thật.`,
              });
            }
          }
        }
      }

      // Rule 7: Cấm hàm rỗng () => {} không có chú thích
      if (/\(\s*\)\s*=>\s*\{\s*\}/.test(line)) {
        violations.push({
          file: relFile,
          line: i + 1,
          rule: 'Rule 7: No Unexplained Empty Functions',
          message: 'Cấm khai báo hàm rỗng () => {} không có nội dung hoặc chú thích.',
        });
      }

      // Rule 8: Cấm thẻ <img trần không có onError (ngoại trừ SafeImage.tsx)
      if (!filePath.endsWith('SafeImage.tsx') && line.includes('<img')) {
        const chunk = lines.slice(i, Math.min(lines.length, i + 12)).join(' ');
        if (!chunk.includes('onError')) {
          violations.push({
            file: relFile,
            line: i + 1,
            rule: 'Rule 8: System-Wide Image Resiliency',
            message: 'Thẻ <img> thiếu xử lý onError fallback. Hãy dùng <SafeImage />.',
          });
        }
      }
    }
  }

  return violations;
}

if (process.argv[1] && path.basename(process.argv[1]) === 'verify-code-rules.ts') {
  const violations = verifyProjectRules();
  if (violations.length > 0) {
    console.error(`\n❌ PHÁT HIỆN ${violations.length} VI PHẠM QUY CHUẨN KIẾN TRÚC:\n`);
    for (const v of violations) {
      console.error(`  - ${v.file}:${v.line} [${v.rule}] -> ${v.message}`);
    }
    process.exit(1);
  }
  console.warn('✅ 100% Quy chuẩn kiến trúc (Code Rules) đều đạt chuẩn!');
}
```

### 3. Script Tự Động Cài Đặt Git Pre-Push Hook (`scripts/setup-hooks.ts`)
```typescript
// scripts/setup-hooks.ts
import fs from 'node:fs';
import path from 'node:path';

const gitDir = path.join(process.cwd(), '.git');
if (fs.existsSync(gitDir)) {
  const hooksDir = path.join(gitDir, 'hooks');
  fs.mkdirSync(hooksDir, { recursive: true });
  const prePushPath = path.join(hooksDir, 'pre-push');
  const script = `#!/bin/sh
echo "🛡️  [PRE-PUSH GATEWAY] Đang kiểm tra 4 lớp chất lượng (rules -> types -> test -> build)..."
npm run pre-push
if [ $? -ne 0 ]; then
  echo "❌ [PRE-PUSH THẤT BẠI] Vui lòng sửa lỗi trước khi push!"
  exit 1
fi
echo "✅ [PRE-PUSH THÀNH CÔNG] Mã nguồn đạt chuẩn 100%!"
exit 0
`;
  fs.writeFileSync(prePushPath, script, { mode: 0o755, encoding: 'utf8' });
  try {
    fs.chmodSync(prePushPath, 0o755);
  } catch {
    // Bỏ qua trên Windows
  }
}
```

### 4. GitHub Actions CI Workflow 4 Gateways (`.github/workflows/ci.yml`)
```yaml
name: Core Quality Gateways CI

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  verify-and-build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node.js 20
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Generate Prisma Client
        run: npx prisma generate

      - name: '[Gateway 1/4] Verify Architecture & Code Rules'
        run: npm run check:rules

      - name: '[Gateway 2/4] TypeScript Strict Type Check'
        run: npm run check:types

      - name: '[Gateway 3/4] Automated Vitest Test Suite'
        run: npm test

      - name: '[Gateway 4/4] Next.js Production Build'
        run: npm run build
```

---

## ✅ PHẦN XI: CHECKLIST 30 BƯỚC KHI KHỞI TẠO DỰ ÁN MỚI TỪ CORE NÀY

Khi bắt đầu bất kỳ dự án mới nào từ file Core Blueprint này, hãy đánh dấu lần lượt 30 bước kiểm tra sau:

### A. Hạ tầng, CSDL & Cấu hình Cốt lõi
- [ ] **1.** Khởi tạo Next.js 15 (App Router) + React 19 + TypeScript Strict + Vitest.
- [ ] **2.** Bật `"noUnusedLocals": true` và `"noUnusedParameters": true` trong `tsconfig.json` ngay từ commit đầu tiên.
- [ ] **3.** Cấu hình `prisma/schema.prisma` với `url = env("DATABASE_URL")` (PgBouncer Port 6543) và `directUrl = env("DIRECT_URL")` (Port 5432).
- [ ] **4.** Tạo Prisma Client Singleton tại `src/lib/db.ts`.
- [ ] **5.** Đánh đầy đủ Single Index và **Composite Index** (`@@index([status, createdAt])`, `@@index([paymentStatus, createdAt])`, index lọc khoảng thời gian) cho mọi bảng giao dịch.
- [ ] **6.** Thiết lập chính sách khóa ngoại an toàn (`onDelete: Restrict` cho danh mục tài chính, `SetNull` cho lịch sử, cờ `isActive` cho xóa mềm).
- [ ] **7.** Cấu hình Security Headers (`nosniff`, `SAMEORIGIN`, `strict-origin-when-cross-origin`), `optimizePackageImports: ['lucide-react', 'date-fns']` và cache tĩnh trong `next.config.ts`.

### B. Bảo mật, Xác thực & Tiện ích DRY (`src/lib/*`)
- [ ] **8.** Tạo `src/lib/types/api.ts` chứa `ActionResponse<T>`, `PaginatedResponse<T>`, `successResponse`, `errorResponse`, `buildPaginationMeta`.
- [ ] **9.** Tạo `src/lib/auth.ts` (PBKDF2 60.000 vòng + `timingSafeEqual`, HMAC-SHA256 token, Wildcard RBAC `hasPermission`, và `getCurrentUserFromCookie` đọc từ cả `Request` lẫn `await cookies()` của `next/headers`).
- [ ] **10.** Tạo `src/lib/with-auth.ts` bọc bảo vệ Route Handlers.
- [ ] **11.** Tạo `src/middleware.ts` xác minh chữ ký HMAC-SHA256 bằng **WebCrypto (`crypto.subtle.verify`)** tại Edge (`< 2ms`), chặn FOUC cho `/admin` và `/account`.
- [ ] **12.** Tạo bộ tiện ích DRY: `src/lib/slug.ts` (`toSlug` NFD tiếng Việt), `src/lib/json.ts` (`safeParseJson`, `safeParseJsonArray`), `src/lib/utils.ts` (`normalizeVietnamIso` `+07:00`, `calculateCalendarDays`, `formatVND`).
- [ ] **13.** Tập trung toàn bộ schema kiểm tra dữ liệu đầu vào tại `src/lib/validation/schemas.ts` bằng **Zod**.

### C. Giao diện, Thẩm mỹ & Bộ Ba Thư Viện UI Cao Cấp
- [ ] **14.** Thiết lập toàn bộ Design Tokens (`--color-primary`, `--color-surface`, `--radius-*`, `--shadow-*`) tại `src/app/globals.css`. Tuyệt đối không bịa màu HEX lẻ tẻ.
- [ ] **15.** Thiết lập Custom Scrollbar mảnh `6px` toàn hệ thống (`::-webkit-scrollbar-button { display: none !important }`) và Dark Scrollbar riêng cho `.admin-sidebar`.
- [ ] **16.** Sử dụng `grid-template-columns: repeat(2, minmax(0, 1fr))` + `min-width: 0; overflow: hidden; text-overflow: ellipsis;` để chống tràn viền CSS Grid trên Mobile/Tablet.
- [ ] **17.** Tích hợp `<SafeImage />` (`src/components/ui/SafeImage.tsx`) + vector nội bộ `/public/images/placeholder-default.svg` (fallback 2 tầng, cấm tuyệt đối vỡ ảnh).
- [ ] **18.** Tích hợp **Sonner** qua `src/context/ToastContext.tsx` (thay thế hoàn toàn `alert()`).
- [ ] **19.** Tích hợp **Radix Alert Dialog** qua `src/components/ui/ConfirmDialog.tsx` tự bẫy focus vào nút "Hủy bỏ" (thay thế hoàn toàn `window.confirm()`).
- [ ] **20.** Tích hợp **React Day Picker v10 + `date-fns` (`vi`)** qua `src/components/ui/DateTimePicker.tsx` render Portal (thay thế hoàn toàn `<input type="date" | "datetime-local">`).
- [ ] **21.** Xây dựng `src/components/ui/CustomSelect.tsx` có ô tìm kiếm, render qua `createPortal(..., document.body)` với `position: fixed; z-index: 10000`, tự lật lên (`openUp`) và đóng khi click ngoài cả trigger lẫn portal.
- [ ] **22.** Tạo **Skeleton Shimmer riêng biệt (`loading.tsx`) cho từng route** khớp 100% bố cục trang đó (`CLS = 0`), cấm dùng text *"Đang tải..."* hay ký tự phân cách tĩnh.

### D. Hiệu năng, Concurrency & Admin Portal
- [ ] **23.** Mọi thống kê Dashboard bắt buộc dùng `prisma.model.count()`, `aggregate({ _sum })`, `groupBy()` kết hợp `Promise.all()`. Cấm kéo bảng về RAM để `.reduce()`/`.filter()` và cấm bịa số liệu giả.
- [ ] **24.** Triệt tiêu N+1 Query bằng Batch `in` + `Map` hoặc Batch `groupBy` (`getBatchAvailability` chỉ tốn 2 câu query cố định $O(1)$).
- [ ] **25.** Bọc mọi luồng ghi nhiều bảng trong `prisma.$transaction`, kiểm tra lại tồn kho/khả dụng **ngay bên trong transaction** (`SLOT_FULL`), và luôn lấy đơn giá từ DB.
- [ ] **26.** Áp dụng chốt chặn Anti-Double Submit (`disabled={loading}` + spinner) cho 100% nút Submit/Mutation.
- [ ] **27.** Chuẩn hóa mọi màn hình quản trị theo **Golden Reference** (`.admin-action-header`, `.admin-filter-card`, `.admin-table-card`, `.admin-table-footer`). Nếu dùng Admin SPA nhiều tab: đồng bộ `?tab=` lên URL + `localStorage`, Lazy-Mount + Keep-Alive, và khởi tạo cache ở Parent là `undefined` (phân biệt với mảng rỗng `[]`).

### E. Pipeline 3 Lớp & Nghiệm Thu
- [ ] **28.** Khai báo kiểu tường minh cho mọi mảng rỗng trước khi `.push()` để tránh lỗi suy diễn `never[]` khi build trên Vercel.
- [ ] **29.** Thiết lập `scripts/verify-code-rules.ts`, `scripts/setup-hooks.ts` và `.github/workflows/ci.yml` ngay từ ngày đầu.
- [ ] **30.** Viết test suite Vitest song hành (dọn dữ liệu test bằng `deleteMany` để chống flaky), tắt `npm run dev` trước khi build trên Windows, và đảm bảo `npm run pre-push` xanh 100% trước khi đẩy code.

---

## 🚀 PHẦN XII: 12 TỐI ƯU HÓA ENTERPRISE NÂNG CAO (6 BACKEND + 6 FRONTEND)

Phần này bổ sung 12 cơ chế phòng vệ, tối ưu hiệu năng và trải nghiệm người dùng cấp độ Enterprise cho cả Backend lẫn Frontend.

### A. 6 Mảnh Ghép Tối Ưu Hóa BACKEND (BE)

#### 1. Sliding Window Rate Limiter Chống Brute-Force & Spam API (`src/lib/rate-limit.ts`)
* **Mục tiêu**: Bảo vệ `/api/auth/login`, `/api/orders`, `/api/booking/create` khỏi tấn công dò mật khẩu và spam tạo đơn hàng/booking ảo.
* **Cơ chế**: Sử dụng thuật toán Sliding Window / Token Bucket có khả năng tự dọn dẹp bộ nhớ (TTL cleanup), trả về `429 Too Many Requests` kèm các chuẩn HTTP headers `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `Retry-After`:

```typescript
// src/lib/rate-limit.ts
export interface RateLimitConfig {
  windowMs: number;
  maxRequests: number;
}

export interface RateLimitResult {
  allowed: boolean;
  limit: number;
  remaining: number;
  resetAt: number;
  retryAfterSeconds: number;
}

interface BucketEntry {
  timestamps: number[];
  expiresAt: number;
}

const store = new Map<string, BucketEntry>();
const MAX_STORE_SIZE = 5000;

function cleanupExpired(now: number) {
  if (store.size < MAX_STORE_SIZE) return;
  for (const [key, entry] of store.entries()) {
    if (entry.expiresAt <= now) {
      store.delete(key);
    }
  }
}

export function checkRateLimit(
  identifier: string,
  config: RateLimitConfig = { windowMs: 60_000, maxRequests: 20 }
): RateLimitResult {
  const now = Date.now();
  cleanupExpired(now);

  const windowStart = now - config.windowMs;
  const existing = store.get(identifier);
  const validTimestamps = existing
    ? existing.timestamps.filter((ts) => ts > windowStart)
    : [];

  if (validTimestamps.length >= config.maxRequests) {
    const oldestInWindow = validTimestamps[0] || now;
    const resetAt = oldestInWindow + config.windowMs;
    const retryAfterSeconds = Math.max(1, Math.ceil((resetAt - now) / 1000));
    store.set(identifier, {
      timestamps: validTimestamps,
      expiresAt: resetAt,
    });
    return {
      allowed: false,
      limit: config.maxRequests,
      remaining: 0,
      resetAt,
      retryAfterSeconds,
    };
  }

  validTimestamps.push(now);
  const resetAt = now + config.windowMs;
  store.set(identifier, {
    timestamps: validTimestamps,
    expiresAt: resetAt,
  });

  return {
    allowed: true,
    limit: config.maxRequests,
    remaining: Math.max(0, config.maxRequests - validTimestamps.length),
    resetAt,
    retryAfterSeconds: 0,
  };
}

export function getClientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    const firstIp = forwarded.split(',')[0]?.trim();
    if (firstIp) return firstIp;
  }
  return request.headers.get('x-real-ip') || '127.0.0.1';
}

export function resetRateLimitStore(): void {
  store.clear();
}
```

#### 2. Idempotency Key Chống Tạo Đơn / Thanh Toán Trùng Lặp Do Rớt Mạng (`src/lib/idempotency.ts`)
* **Mục tiêu**: Khi người dùng trên mạng 4G chập chờn bấm "Đặt hàng / Đặt phòng", nếu request đầu đã xử lý nhưng mạng đứt trước khi nhận phản hồi và trình duyệt gửi lại cùng `Idempotency-Key`, hệ thống trả về ngay kết quả cũ mà không tạo bản ghi thứ 2:

```typescript
// src/lib/idempotency.ts
export interface IdempotencyRecord<T = unknown> {
  key: string;
  status: 'PROCESSING' | 'COMPLETED';
  statusCode?: number;
  responseBody?: T;
  createdAt: number;
  expiresAt: number;
}

const idempotencyCache = new Map<string, IdempotencyRecord>();
const DEFAULT_TTL_MS = 5 * 60 * 1000; // 5 phút

export function checkIdempotency<T = unknown>(key: string | null | undefined): IdempotencyRecord<T> | null {
  if (!key || !key.trim()) return null;
  const normalizedKey = key.trim();
  const now = Date.now();
  const record = idempotencyCache.get(normalizedKey);
  if (!record) return null;
  if (record.expiresAt <= now) {
    idempotencyCache.delete(normalizedKey);
    return null;
  }
  return record as IdempotencyRecord<T>;
}

export function markIdempotencyProcessing(key: string, ttlMs = DEFAULT_TTL_MS): boolean {
  const normalizedKey = key.trim();
  const existing = checkIdempotency(normalizedKey);
  if (existing) return false;

  const now = Date.now();
  idempotencyCache.set(normalizedKey, {
    key: normalizedKey,
    status: 'PROCESSING',
    createdAt: now,
    expiresAt: now + ttlMs,
  });
  return true;
}

export function saveIdempotencyResult<T = unknown>(
  key: string,
  statusCode: number,
  responseBody: T,
  ttlMs = DEFAULT_TTL_MS
): void {
  const normalizedKey = key.trim();
  const now = Date.now();
  idempotencyCache.set(normalizedKey, {
    key: normalizedKey,
    status: 'COMPLETED',
    statusCode,
    responseBody,
    createdAt: now,
    expiresAt: now + ttlMs,
  });
}

export function clearIdempotencyCache(): void {
  idempotencyCache.clear();
}
```

#### 3. Audit Log Toàn Hệ Thống — Truy Vết Mọi Thao Tác Quản Trị (`src/lib/audit-log.ts`)
* **Mục tiêu**: Ghi nhận đầy đủ **Ai (`actorId`, `actorEmail`)** đã thực hiện **Hành động gì (`CREATE`, `UPDATE`, `DELETE`, `STATUS_CHANGE`)** trên **Bản ghi nào (`entityType`, `entityId`)** kèm **Giá trị trước (`oldValue`) và Giá trị sau (`newValue`)** đã tự động che mật khẩu/token nhạy cảm (`redactSensitiveFields`):

```typescript
// src/lib/audit-log.ts
export interface AuditLogEntry {
  id: string;
  actorId: string;
  actorEmail?: string;
  actorRole?: string;
  action: 'CREATE' | 'UPDATE' | 'DELETE' | 'STATUS_CHANGE' | 'LOGIN' | 'EXPORT';
  entityType: string;
  entityId: string;
  oldValue?: Record<string, unknown> | null;
  newValue?: Record<string, unknown> | null;
  ipAddress?: string;
  createdAt: string;
}

const SENSITIVE_KEYS = new Set(['password', 'token', 'session_token', 'secret', 'creditCard']);
const recentAuditLogs: AuditLogEntry[] = [];
const MAX_AUDIT_BUFFER = 500;

export function redactSensitiveFields(obj: Record<string, unknown> | null | undefined): Record<string, unknown> | null {
  if (!obj || typeof obj !== 'object') return null;
  const sanitized: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(obj)) {
    if (SENSITIVE_KEYS.has(k.toLowerCase()) || k.toLowerCase().includes('password')) {
      sanitized[k] = '[REDACTED]';
    } else {
      sanitized[k] = v;
    }
  }
  return sanitized;
}

export function recordAuditLog(
  input: Omit<AuditLogEntry, 'id' | 'createdAt'>
): AuditLogEntry {
  const entry: AuditLogEntry = {
    ...input,
    id: `audit_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    oldValue: redactSensitiveFields(input.oldValue),
    newValue: redactSensitiveFields(input.newValue),
    createdAt: new Date().toISOString(),
  };

  recentAuditLogs.unshift(entry);
  if (recentAuditLogs.length > MAX_AUDIT_BUFFER) {
    recentAuditLogs.pop();
  }
  return entry;
}

export function getRecentAuditLogs(limit = 50, entityType?: string): AuditLogEntry[] {
  const filtered = entityType
    ? recentAuditLogs.filter((item) => item.entityType === entityType)
    : recentAuditLogs;
  return filtered.slice(0, Math.min(limit, MAX_AUDIT_BUFFER));
}

export function clearAuditLogs(): void {
  recentAuditLogs.length = 0;
}
```

#### 4. Optimistic Concurrency Control Chống Ghi Đè (*Lost Update*) (`src/lib/concurrency.ts`)
* **Mục tiêu**: Ngăn chặn tình trạng 2 nhân viên Admin cùng mở 1 Sản phẩm / Hạng phòng và người bấm Lưu sau vô tình ghi đè mất dữ liệu của người bấm Lưu trước.
* **Cơ chế**: Kiểm tra mốc `expectedUpdatedAt` (hoặc `expectedVersion`) client gửi lên so với bản ghi hiện tại trong DB trước khi cho phép `update`:

```typescript
// src/lib/concurrency.ts
export interface ConcurrencyCheckResult {
  isConflict: boolean;
  message?: string;
}

export function checkOptimisticConcurrency(
  currentUpdatedAt: Date | string | number | null | undefined,
  expectedUpdatedAt: Date | string | number | null | undefined
): ConcurrencyCheckResult {
  if (!expectedUpdatedAt || !currentUpdatedAt) {
    return { isConflict: false };
  }

  const currentMs = new Date(currentUpdatedAt).getTime();
  const expectedMs = new Date(expectedUpdatedAt).getTime();

  if (isNaN(currentMs) || isNaN(expectedMs)) {
    return { isConflict: false };
  }

  if (currentMs !== expectedMs) {
    return {
      isConflict: true,
      message: 'Dữ liệu vừa được cập nhật bởi một quản trị viên khác. Vui lòng tải lại trang trước khi lưu.',
    };
  }

  return { isConflict: false };
}
```

#### 5. Cursor-Based Pagination & Streaming CSV Export (`src/lib/csv-stream.ts`)
* **Mục tiêu**: Hỗ trợ xuất báo cáo hàng chục nghìn dòng ra file CSV chuẩn UTF-8 BOM (mở trực tiếp bằng Microsoft Excel không bị lỗi font tiếng Việt) và chống lỗ hổng **CSV Formula Injection** (`=`, `+`, `-`, `@`):

```typescript
// src/lib/csv-stream.ts
const FORMULA_PREFIXES = ['=', '+', '-', '@', '\t', '\r'];

export function escapeCsvCell(value: unknown): string {
  if (value === null || value === undefined) return '';
  let str = String(value);

  // Chống CSV Injection (Formula Injection trong Excel)
  if (str.length > 0 && FORMULA_PREFIXES.includes(str[0])) {
    str = `'${str}`;
  }

  if (str.includes('"') || str.includes(',') || str.includes('\n') || str.includes('\r')) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

export function generateCsvWithBom<T extends Record<string, unknown>>(
  rows: T[],
  columns: { key: keyof T; header: string }[]
): string {
  const UTF8_BOM = '\uFEFF';
  const headerLine = columns.map((col) => escapeCsvCell(col.header)).join(',');
  const dataLines = rows.map((row) =>
    columns.map((col) => escapeCsvCell(row[col.key])).join(',')
  );
  return UTF8_BOM + [headerLine, ...dataLines].join('\r\n');
}
```

#### 6. Health Check Endpoint & Request Correlation ID (`src/app/api/health/route.ts`)
* **Mục tiêu**: Cung cấp endpoint `/api/health` để hệ thống giám sát (UptimeRobot / Vercel Monitoring) kiểm tra sống còn của CSDL (`SELECT 1`), thời gian phản hồi (`latencyMs`) và đính kèm `x-request-id`:

```typescript
// src/app/api/health/route.ts
import { NextResponse } from 'next/server';
import crypto from 'node:crypto';
import { prisma } from '@/lib/db';

export async function GET() {
  const requestId = `req_${crypto.randomBytes(6).toString('hex')}`;
  const startTime = Date.now();

  try {
    await prisma.$queryRaw`SELECT 1`;
    const latencyMs = Date.now() - startTime;

    return NextResponse.json(
      {
        success: true,
        data: {
          status: 'healthy',
          database: 'connected',
          latencyMs,
          timestamp: new Date().toISOString(),
          requestId,
        },
      },
      {
        status: 200,
        headers: {
          'x-request-id': requestId,
          'Cache-Control': 'no-store, max-age=0',
        },
      }
    );
  } catch {
    const latencyMs = Date.now() - startTime;
    return NextResponse.json(
      {
        success: false,
        error: 'Database connection check failed',
        data: {
          status: 'degraded',
          database: 'disconnected',
          latencyMs,
          timestamp: new Date().toISOString(),
          requestId,
        },
      },
      {
        status: 503,
        headers: {
          'x-request-id': requestId,
          'Cache-Control': 'no-store, max-age=0',
        },
      }
    );
  }
}
```

---

### B. 6 Mảnh Ghép Tối Ưu Hóa FRONTEND (FE)

#### 1. `useAbortableFetch` & Đồng Bộ Đa Tab Trình Duyệt Qua `BroadcastChannel` (`src/hooks/useBroadcastSync.ts`)
* **Mục tiêu**:
  - Tự động hủy (`controller.abort()`) các request `fetch` cũ khi người dùng gõ tìm kiếm mới hoặc chuyển trang, triệt tiêu hoàn toàn lỗi Race Condition.
  - Khi người dùng bấm **Đăng xuất**, **Thêm giỏ hàng**, hoặc **Cập nhật dữ liệu** ở Tab 1, toàn bộ các Tab khác đang mở cùng domain tự động đồng bộ tức thì trong `0ms`:

```typescript
// src/hooks/useBroadcastSync.ts
'use client';

import { useEffect, useCallback, useRef } from 'react';

export interface SyncMessage<T = unknown> {
  type: string;
  payload?: T;
  timestamp: number;
}

export function useBroadcastSync<T = unknown>(
  channelName: string,
  onMessage: (msg: SyncMessage<T>) => void
) {
  const channelRef = useRef<BroadcastChannel | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof BroadcastChannel === 'undefined') {
      return;
    }

    const channel = new BroadcastChannel(channelName);
    channelRef.current = channel;

    const handler = (event: MessageEvent<SyncMessage<T>>) => {
      if (event.data && typeof event.data.type === 'string') {
        onMessage(event.data);
      }
    };

    channel.addEventListener('message', handler);
    return () => {
      channel.removeEventListener('message', handler);
      channel.close();
      channelRef.current = null;
    };
  }, [channelName, onMessage]);

  const broadcast = useCallback((type: string, payload?: T) => {
    if (!channelRef.current) return;
    try {
      channelRef.current.postMessage({
        type,
        payload,
        timestamp: Date.now(),
      });
    } catch {
      // Ignore closed channel errors
    }
  }, []);

  return { broadcast };
}
```

#### 2. Chốt Chặn Rời Form Khi Chưa Lưu (`src/hooks/useUnsavedChanges.ts`)
* **Mục tiêu**: Bảo vệ người dùng khỏi việc vô tình đóng tab/F5 hoặc bấm nhầm ra ngoài Modal khi đang nhập dở biểu mẫu dài:

```typescript
// src/hooks/useUnsavedChanges.ts
'use client';

import { useEffect, useCallback } from 'react';

export function useUnsavedChanges(isDirty: boolean) {
  useEffect(() => {
    if (!isDirty || typeof window === 'undefined') return;

    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = 'Bạn có thay đổi chưa lưu. Bạn có chắc chắn muốn rời trang?';
      return event.returnValue;
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [isDirty]);

  const confirmDiscard = useCallback(
    (onProceed: () => void, onPromptConfirm?: () => void) => {
      if (!isDirty) {
        onProceed();
        return;
      }
      if (onPromptConfirm) {
        onPromptConfirm();
      } else {
        onProceed();
      }
    },
    [isDirty]
  );

  return { confirmDiscard };
}
```

#### 3. Đồng Bộ Toàn Bộ Bộ Lọc & Phân Trang Lên URL (`src/hooks/useUrlFilterState.ts`)
* **Mục tiêu**: Đồng bộ `search`, `status`, `category`, `page` lên URL query string bằng `window.history.replaceState` để F5 hoặc chia sẻ link cho đồng nghiệp không bao giờ mất trạng thái lọc:

```typescript
// src/hooks/useUrlFilterState.ts
'use client';

import { useCallback } from 'react';

export function updateUrlSearchParams(params: Record<string, string | number | undefined | null>): string {
  if (typeof window === 'undefined') return '';
  const url = new URL(window.location.href);

  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || value === null || value === '' || value === 'ALL') {
      url.searchParams.delete(key);
    } else {
      url.searchParams.set(key, String(value));
    }
  }

  const nextUrl = `${url.pathname}${url.search}`;
  window.history.replaceState({}, '', nextUrl);
  return nextUrl;
}

export function useUrlFilterState() {
  const syncFiltersToUrl = useCallback((params: Record<string, string | number | undefined | null>) => {
    return updateUrlSearchParams(params);
  }, []);

  return { syncFiltersToUrl };
}
```

#### 4. Nén & Chuyển Ảnh Sang WebP Tại Trình Duyệt Trước Khi Upload (`src/lib/image-compression.ts`)
* **Mục tiêu**: Tự động thu nhỏ kích thước ảnh quá khổ (ví dụ `4000x3000px` từ điện thoại) về tối đa `1600px` và nén sang `image/webp` chất lượng `0.82` ngay trên trình duyệt bằng `<canvas>`, giảm 85% - 95% dung lượng trước khi gửi lên API `/api/admin/upload`:

```typescript
// src/lib/image-compression.ts
export interface ImageCompressionOptions {
  maxWidth?: number;
  maxHeight?: number;
  quality?: number;
  outputMimeType?: 'image/webp' | 'image/jpeg';
}

export function calculateAspectDimensions(
  width: number,
  height: number,
  maxWidth = 1600,
  maxHeight = 1600
): { width: number; height: number } {
  if (width <= maxWidth && height <= maxHeight) {
    return { width, height };
  }
  const ratio = Math.min(maxWidth / width, maxHeight / height);
  return {
    width: Math.max(1, Math.round(width * ratio)),
    height: Math.max(1, Math.round(height * ratio)),
  };
}

export async function compressImageClient(
  file: File,
  options: ImageCompressionOptions = {}
): Promise<File> {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return file;
  }
  // Không nén lại ảnh GIF động hoặc SVG hoặc file đã nhỏ hơn 150KB
  if (file.type === 'image/gif' || file.type === 'image/svg+xml' || file.size <= 150 * 1024) {
    return file;
  }

  const maxWidth = options.maxWidth ?? 1600;
  const maxHeight = options.maxHeight ?? 1600;
  const quality = options.quality ?? 0.82;
  const outputMimeType = options.outputMimeType ?? 'image/webp';

  return new Promise((resolve) => {
    const img = new window.Image();
    const objectUrl = URL.createObjectURL(file);

    img.onload = () => {
      URL.revokeObjectURL(objectUrl);
      const target = calculateAspectDimensions(img.width, img.height, maxWidth, maxHeight);
      const canvas = document.createElement('canvas');
      canvas.width = target.width;
      canvas.height = target.height;

      const ctx = canvas.getContext('2d');
      if (!ctx) {
        resolve(file);
        return;
      }

      ctx.drawImage(img, 0, 0, target.width, target.height);
      canvas.toBlob(
        (blob) => {
          if (!blob || blob.size >= file.size) {
            resolve(file);
            return;
          }
          const baseName = file.name.replace(/\.[^/.]+$/, '');
          const ext = outputMimeType === 'image/webp' ? 'webp' : 'jpg';
          const compressedFile = new File([blob], `${baseName}.${ext}`, {
            type: outputMimeType,
            lastModified: Date.now(),
          });
          resolve(compressedFile);
        },
        outputMimeType,
        quality
      );
    };

    img.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      resolve(file);
    };

    img.src = objectUrl;
  });
}
```

#### 5. Command Palette Tìm Kiếm Nhanh Toàn Hệ Thống (`Ctrl + K` / `Cmd + K`) (`src/components/admin/CommandPalette.tsx`)
* **Mục tiêu**: Cho phép quản trị viên bấm `Ctrl + K` (hoặc `Cmd + K` trên macOS) ở bất kỳ đâu trong cổng Admin để mở bảng điều khiển tìm kiếm tức thì và nhảy tới các phân hệ quản trị chỉ bằng bàn phím (`ArrowUp`, `ArrowDown`, `Enter`, `Escape`).

#### 6. Chuẩn Hóa SEO Kỹ Thuật Tự Động (`src/app/sitemap.ts`, `src/app/robots.ts` & `src/components/seo/JsonLd.tsx`)
* **Mục tiêu**: Tự động sinh Sitemap XML động từ CSDL, cấu hình `robots.ts` chặn crawler vào `/admin` và `/api`, đồng thời nhúng dữ liệu có cấu trúc `JSON-LD` (`application/ld+json`) chuẩn Schema.org:

```tsx
// src/components/seo/JsonLd.tsx
import React from 'react';

export interface JsonLdProps {
  data: Record<string, unknown>;
}

export const JsonLd: React.FC<JsonLdProps> = ({ data }) => {
  const safeJson = JSON.stringify(data).replace(/</g, '\\u003c');
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJson }}
    />
  );
};

export default JsonLd;
```

---

### C. Bổ Sung Checklist Bước 31 -> 42 Khi Khởi Tạo Dự Án Mới

- [ ] **31.** Tích hợp `src/lib/rate-limit.ts` (Sliding Window Rate Limiter) vào `/api/auth/login` và các API tạo đơn/booking công khai (`429 Too Many Requests` + `Retry-After`).
- [ ] **32.** Tích hợp `src/lib/idempotency.ts` (`Idempotency-Key` header) vào luồng tạo đơn hàng / đặt phòng / thanh toán để chống tạo đơn trùng khi rớt mạng hoặc retry.
- [ ] **33.** Tích hợp `src/lib/audit-log.ts` (`recordAuditLog` kèm `redactSensitiveFields`) cho mọi thao tác Thêm / Sửa / Xóa / Đổi trạng thái của Admin.
- [ ] **34.** Tích hợp `src/lib/concurrency.ts` (`checkOptimisticConcurrency` kiểm tra `updatedAt`/`version`) để chặn lỗi 2 Admin ghi đè dữ liệu của nhau (`409 Conflict`).
- [ ] **35.** Tích hợp `src/lib/csv-stream.ts` (`generateCsvWithBom` có UTF-8 BOM và chống CSV Formula Injection) cho các tính năng xuất báo cáo Excel/CSV.
- [ ] **36.** Tạo endpoint `/api/health` (`src/app/api/health/route.ts`) kiểm tra kết nối DB (`SELECT 1`), đo `latencyMs` và trả kèm `x-request-id`.
- [ ] **37.** Sử dụng `AbortController` cho các truy vấn tìm kiếm/lọc phía Client và đồng bộ trạng thái Đăng xuất / Giỏ hàng đa tab qua `BroadcastChannel` (`src/hooks/useBroadcastSync.ts`).
- [ ] **38.** Bọc các Modal nhập liệu lớn bằng `useUnsavedChanges(isDirty)` (`src/hooks/useUnsavedChanges.ts`) để cảnh báo khi người dùng vô tình đóng form chưa lưu.
- [ ] **39.** Đồng bộ toàn bộ bộ lọc bảng (`q`, `status`, `category`, `page`) lên URL query string qua `useUrlFilterState` (`src/hooks/useUrlFilterState.ts`).
- [ ] **40.** Nén và chuyển đổi ảnh sang `image/webp` ngay tại trình duyệt bằng `compressImageClient` (`src/lib/image-compression.ts`) trước khi tải lên server.
- [ ] **41.** Tích hợp phím tắt `Ctrl + K` / `Cmd + K` (`CommandPalette.tsx`) trên Header Admin để điều hướng và tra cứu nhanh toàn hệ thống.
- [ ] **42.** Thiết lập đầy đủ `src/app/sitemap.ts`, `src/app/robots.ts` (chặn `/admin`, `/api`) và nhúng `<JsonLd />` Schema.org cho các trang Storefront công khai.
