/**
 * chuyen-muc.js — Danh mục, tên song ngữ và liên kết học thêm theo chuyên mục lớp 1–5.
 * Dùng: luyen-them.js, loi-giai.js và báo cáo năng lực.
 * Quy tắc nghiệp vụ: mã chuyên mục là nguồn nối câu hỏi với tuần học và tài nguyên bổ trợ.
 */
window.IMATH_GRADE1_CATALOG = Object.freeze({
  topics: [
    {
      id: 'numbers', name: 'Số và phép tính', icon: 'calculator', tone: 'tone-blue',
      description: 'Đếm, đọc, viết, so sánh số và thực hiện phép cộng, trừ.',
      items: [
        { name: 'Các số từ 0 đến 10', week: 1, icon: 'calculator' },
        { name: 'Cộng, trừ trong phạm vi 10', week: 9, icon: 'plus' },
        { name: 'Các số từ 0 đến 100', week: 19, icon: 'level_bars' },
        { name: 'Cộng, trừ trong phạm vi 100', week: 25, icon: 'practice_pencil' }
      ]
    },
    {
      id: 'geometry', name: 'Hình học và đo lường', icon: 'ruler', tone: 'tone-orange',
      description: 'Hình phẳng, khối hình, độ dài, giờ và lịch.',
      items: [
        { name: 'Hình phẳng, khối hình', week: 7, icon: 'cube' },
        { name: 'Đo độ dài', week: 22, icon: 'ruler' },
        { name: 'Xem giờ, xem lịch', week: 30, icon: 'clock' }
      ]
    },
    {
      id: 'word', name: 'Giải toán có lời văn', icon: 'document', tone: 'tone-green',
      description: 'Đọc đề và giải bài toán bằng phép cộng hoặc phép trừ.',
      items: [{ name: 'Giải toán có lời văn', week: 10, icon: 'document' }]
    },
    {
      id: 'review', name: 'Ôn tập tổng hợp', icon: 'check_document', tone: 'tone-violet',
      description: 'Ôn lại các nội dung đã học trong học kỳ.',
      items: [{ name: 'Ôn tập tổng hợp', week: 18, icon: 'check_document' }]
    }
  ],
  // Lớp 1 không tổ chức đề giữa kỳ theo blueprint-de-ky-lop1.md.
  exams: [
    { id: 'end1', name: 'Cuối kỳ 1', week: 18, icon: 'spark_rays', tone: 'tone-blue', plannedTests: 2 },
    { id: 'end2', name: 'Cuối năm', week: 35, icon: 'fire', tone: 'tone-yellow', plannedTests: 2 }
  ]
});

window.IMATH_GRADE2_CATALOG = Object.freeze({
  topics: [
    {
      id: 'numbers', name: 'Số và phép tính', icon: 'calculator', tone: 'tone-blue',
      description: 'Số đến 1 000, cộng trừ có nhớ, phép nhân và phép chia.',
      items: [
        { name: 'Số đến 100', week: 4, icon: 'calculator' },
        { name: 'Cộng, trừ trong phạm vi 20', week: 8, icon: 'plus' },
        { name: 'Cộng, trừ có nhớ trong phạm vi 100', week: 14, icon: 'practice_pencil' },
        { name: 'Phép nhân, phép chia', week: 23, icon: 'fx' },
        { name: 'Các số trong phạm vi 1 000', week: 27, icon: 'level_bars' },
        { name: 'Cộng, trừ trong phạm vi 1 000', week: 32, icon: 'check_document' }
      ]
    },
    {
      id: 'geometry', name: 'Hình học và đo lường', icon: 'ruler', tone: 'tone-orange',
      description: 'Hình phẳng, hình khối; ki-lô-gam, lít, độ dài, tiền và lịch.',
      items: [
        { name: 'Ki-lô-gam, lít', week: 10, icon: 'cube' },
        { name: 'Hình phẳng', week: 16, icon: 'ruler' },
        { name: 'Ngày, giờ, xem lịch', week: 18, icon: 'calendar' },
        { name: 'Hình khối', week: 24, icon: 'cube' },
        { name: 'Độ dài, tiền Việt Nam', week: 29, icon: 'ruler' }
      ]
    },
    {
      id: 'statistics', name: 'Thống kê và xác suất', icon: 'statistics', tone: 'tone-violet',
      description: 'Thống kê số liệu và nhận biết khả năng xảy ra.',
      items: [{ name: 'Thống kê, khả năng xảy ra', week: 33, icon: 'bar_chart' }]
    },
    {
      id: 'word', name: 'Giải toán có lời văn', icon: 'document', tone: 'tone-green',
      description: 'Đọc đề, tìm dữ kiện và giải toán có lời văn.',
      items: [{ name: 'Giải toán có lời văn', week: 8, icon: 'document' }]
    }
  ],
  exams: [
    { id: 'mid1', name: 'Giữa kỳ 1', week: 9, icon: 'star', tone: 'tone-pink', plannedTests: 2 },
    { id: 'end1', name: 'Cuối kỳ 1', week: 17, icon: 'spark_rays', tone: 'tone-blue', plannedTests: 2 },
    { id: 'mid2', name: 'Giữa kỳ 2', week: 27, icon: 'smiley', tone: 'tone-green', plannedTests: 2 },
    { id: 'end2', name: 'Cuối kỳ 2', week: 33, icon: 'fire', tone: 'tone-yellow', plannedTests: 2 }
  ]
});

const imathCatalogExams = window.IMATH_GRADE2_CATALOG.exams;
const imathTopicGroup = (id, name, icon, tone, description, items) => ({ id, name, icon, tone, description, items });
window.IMATH_GRADE_CATALOGS = Object.freeze({
  1: window.IMATH_GRADE1_CATALOG,
  2: window.IMATH_GRADE2_CATALOG,
  3: {
    topics: [
      imathTopicGroup('numbers', 'Số và phép tính', 'calculator', 'tone-blue', 'Bảng nhân chia, số đến 100 000, nhân chia trong phạm vi 100 000.', [
        { name: 'Ôn tập đầu năm: số và phép tính đến 1 000, hình, đo lường', code: 'g3cm_on_tap_so_va_phep_tinh_trong_pham_vi_1_000', week: 5, icon: 'calculator' },
        { name: 'Bảng nhân, bảng chia', week: 8, icon: 'fx' },
        { name: 'Nhân, chia trong phạm vi 100', week: 14, icon: 'practice_pencil' },
        { name: 'Nhân, chia trong phạm vi 1 000', week: 18, icon: 'level_bars' },
        { name: 'Các số đến 10 000', week: 22, icon: 'calculator' },
        { name: 'Cộng, trừ, nhân, chia trong phạm vi 10 000', week: 27, icon: 'fx' },
        { name: 'Các số đến 100 000', week: 29, icon: 'level_bars' },
        { name: 'Cộng, trừ trong phạm vi 100 000', week: 30, icon: 'plus' },
        { name: 'Nhân, chia trong phạm vi 100 000', week: 33, icon: 'fx' }
      ]),
      imathTopicGroup('geometry', 'Hình học và đo lường', 'ruler', 'tone-orange', 'Hình phẳng, hình khối, chu vi, diện tích và các đơn vị đo.', [
        { name: 'Hình phẳng, hình khối', week: 11, icon: 'cube' },
        { name: 'Đơn vị đo độ dài, khối lượng, dung tích, nhiệt độ', week: 16, icon: 'ruler' },
        { name: 'Chu vi, diện tích', week: 24, icon: 'ruler' },
        { name: 'Xem đồng hồ, tháng – năm, tiền Việt Nam', week: 32, icon: 'clock' }
      ]),
      imathTopicGroup('statistics', 'Thống kê và xác suất', 'statistics', 'tone-violet', 'Thống kê số liệu và nhận xét khả năng xảy ra.', [
        { name: 'Thống kê, xác suất', week: 34, icon: 'bar_chart' }
      ]),
      imathTopicGroup('word', 'Giải toán có lời văn', 'document', 'tone-green', 'Dùng phép tính đã học để giải toán có lời văn.', [
        { name: 'Giải toán có lời văn', week: 5, icon: 'document' }
      ])
    ], exams: imathCatalogExams
  },
  4: {
    topics: [
      imathTopicGroup('numbers', 'Số và phép tính', 'calculator', 'tone-blue', 'Số có nhiều chữ số, bốn phép tính và phân số.', [
        { name: 'Ôn tập đầu năm: số đến 100 000, biểu thức chữ, hình, đo lường', code: 'g4cm_on_tap_so_den_100_000_bieu_thuc_chu', week: 4, icon: 'calculator' },
        { name: 'Số có nhiều chữ số', week: 9, icon: 'level_bars' },
        { name: 'Phép cộng, phép trừ', week: 14, icon: 'plus' },
        { name: 'Phép nhân, phép chia', week: 24, icon: 'fx' },
        // Tuần học đầu tiên dùng riêng cho dòng kiến thức; week vẫn giữ lịch mở thẻ luyện tập hiện hành.
        { name: 'Phân số', week: 30, taughtWeek: 25, icon: 'calculator' },
        { name: 'Cộng, trừ phân số', week: 32, icon: 'plus' },
        { name: 'Nhân, chia phân số', week: 34, icon: 'fx' }
      ]),
      imathTopicGroup('geometry', 'Hình học và đo lường', 'ruler', 'tone-orange', 'Đo góc, đổi đơn vị, nhận biết đường vuông góc và song song.', [
        { name: 'Góc, đo góc', week: 5, icon: 'ruler' },
        { name: 'Đơn vị đo đại lượng', week: 12, icon: 'cube' },
        { name: 'Đường thẳng vuông góc, song song', week: 17, icon: 'ruler' }
      ]),
      imathTopicGroup('statistics', 'Thống kê và xác suất', 'statistics', 'tone-violet', 'Thống kê số liệu và nhận xét khả năng xảy ra.', [
        { name: 'Thống kê, xác suất', week: 26, icon: 'bar_chart' }
      ]),
      imathTopicGroup('word', 'Giải toán có lời văn', 'document', 'tone-green', 'Lập phép tính để giải toán có lời văn.', [
        { name: 'Giải toán có lời văn', week: 4, icon: 'document' }
      ])
    ], exams: imathCatalogExams
  },
  5: {
    topics: [
      imathTopicGroup('numbers', 'Số và phép tính', 'calculator', 'tone-blue', 'Phân số, hỗn số, số thập phân và các bài toán tỉ số.', [
        { name: 'Ôn tập đầu năm: số tự nhiên, phân số, hỗn số, hình, đo lường', code: 'g5cm_on_tap_phan_so_hon_so', week: 5, icon: 'calculator' },
        { name: 'Số thập phân', week: 8, icon: 'level_bars' },
        { name: 'Các phép tính với số thập phân', week: 13, icon: 'fx' },
        { name: 'Tỉ số và các bài toán liên quan', week: 23, icon: 'practice_pencil' }
      ]),
      imathTopicGroup('geometry', 'Hình học và đo lường', 'ruler', 'tone-orange', 'Diện tích, thể tích, số đo thời gian và chuyển động đều.', [
        { name: 'Đơn vị đo diện tích', week: 9, icon: 'ruler' },
        { name: 'Hình phẳng: chu vi, diện tích', week: 17, icon: 'ruler' },
        { name: 'Thể tích, đơn vị đo thể tích', week: 24, icon: 'cube' },
        { name: 'Diện tích, thể tích hình khối', week: 27, icon: 'cube' },
        { name: 'Số đo thời gian', week: 28, icon: 'clock' },
        { name: 'Chuyển động đều', week: 30, icon: 'paper_plane' }
      ]),
      imathTopicGroup('statistics', 'Thống kê và xác suất', 'statistics', 'tone-violet', 'Thống kê số liệu và nhận xét khả năng xảy ra.', [
        { name: 'Thống kê, xác suất', week: 32, icon: 'bar_chart' }
      ]),
      imathTopicGroup('word', 'Giải toán có lời văn', 'document', 'tone-green', 'Kết hợp dữ kiện và phép tính để giải toán có lời văn.', [
        { name: 'Giải toán có lời văn', week: 5, icon: 'document' }
      ])
    ], exams: imathCatalogExams
  }
});

// Tên chuyên mục tiếng Anh dùng chung cho Luyện thêm, kết quả và báo cáo.
const imathTopicEnglishNames = Object.freeze({
  'Số và phép tính': 'Numbers and operations',
  'Hình học và đo lường': 'Geometry and measurement',
  'Thống kê và xác suất': 'Statistics and probability',
  'Giải toán có lời văn': 'Word problems',
  'Các số từ 0 đến 10': 'Numbers from 0 to 10',
  'Cộng, trừ trong phạm vi 10': 'Addition and subtraction within 10',
  'Các số từ 0 đến 100': 'Numbers from 0 to 100',
  'Cộng, trừ trong phạm vi 100': 'Addition and subtraction within 100',
  'Hình phẳng, khối hình': 'Plane and solid shapes',
  'Đo độ dài': 'Measuring length',
  'Xem giờ, xem lịch': 'Time and calendars',
  'Ôn tập tổng hợp': 'General review',
  'Số đến 100': 'Numbers to 100',
  'Cộng, trừ trong phạm vi 20': 'Addition and subtraction within 20',
  'Cộng, trừ có nhớ trong phạm vi 100': 'Addition and subtraction with regrouping within 100',
  'Phép nhân, phép chia': 'Multiplication and division',
  'Các số trong phạm vi 1 000': 'Numbers to 1 000',
  'Cộng, trừ trong phạm vi 1 000': 'Addition and subtraction within 1 000',
  'Ki-lô-gam, lít': 'Kilograms and litres',
  'Hình phẳng': 'Plane shapes',
  'Ngày, giờ, xem lịch': 'Days, time and calendars',
  'Hình khối': 'Solid shapes',
  'Độ dài, tiền Việt Nam': 'Length and Vietnamese money',
  'Thống kê, khả năng xảy ra': 'Statistics and likelihood',
  'Ôn tập đầu năm: số và phép tính đến 1 000, hình, đo lường': 'Start-of-year review: numbers and operations to 1 000, shapes and measurement',
  'Bảng nhân, bảng chia': 'Multiplication and division tables',
  'Nhân, chia trong phạm vi 100': 'Multiplication and division within 100',
  'Nhân, chia trong phạm vi 1 000': 'Multiplication and division within 1 000',
  'Các số đến 10 000': 'Numbers to 10 000',
  'Cộng, trừ, nhân, chia trong phạm vi 10 000': 'Addition, subtraction, multiplication and division within 10 000',
  'Các số đến 100 000': 'Numbers to 100 000',
  'Cộng, trừ trong phạm vi 100 000': 'Addition and subtraction within 100 000',
  'Nhân, chia trong phạm vi 100 000': 'Multiplication and division within 100 000',
  'Hình phẳng, hình khối': 'Plane and solid shapes',
  'Đơn vị đo độ dài, khối lượng, dung tích, nhiệt độ': 'Units of length, mass, capacity and temperature',
  'Chu vi, diện tích': 'Perimeter and area',
  'Xem đồng hồ, tháng – năm, tiền Việt Nam': 'Telling the time, months and years, and Vietnamese money',
  'Thống kê, xác suất': 'Statistics and probability',
  'Ôn tập đầu năm: số đến 100 000, biểu thức chữ, hình, đo lường': 'Start-of-year review: numbers to 100 000, expressions with letters, shapes and measurement',
  'Số có nhiều chữ số': 'Multi-digit numbers',
  'Phép cộng, phép trừ': 'Addition and subtraction',
  'Phân số': 'Fractions',
  'Cộng, trừ phân số': 'Adding and subtracting fractions',
  'Nhân, chia phân số': 'Multiplying and dividing fractions',
  'Góc, đo góc': 'Angles and measuring angles',
  'Đơn vị đo đại lượng': 'Units of measurement',
  'Đường thẳng vuông góc, song song': 'Perpendicular and parallel lines',
  'Ôn tập đầu năm: số tự nhiên, phân số, hỗn số, hình, đo lường': 'Start-of-year review: natural numbers, fractions, mixed numbers, shapes and measurement',
  'Số thập phân': 'Decimals',
  'Các phép tính với số thập phân': 'Operations with decimals',
  'Tỉ số và các bài toán liên quan': 'Ratios and related problems',
  'Đơn vị đo diện tích': 'Units of area',
  'Hình phẳng: chu vi, diện tích': 'Plane shapes: perimeter and area',
  'Thể tích, đơn vị đo thể tích': 'Volume and units of volume',
  'Diện tích, thể tích hình khối': 'Surface area and volume of solids',
  'Số đo thời gian': 'Units of time',
  'Chuyển động đều': 'Speed, distance and time'
});

for (const catalog of Object.values(window.IMATH_GRADE_CATALOGS)) {
  for (const group of catalog.topics) {
    group.name_en = imathTopicEnglishNames[group.name] || group.name;
    for (const item of group.items) item.name_en = imathTopicEnglishNames[item.name] || item.name;
  }
}

// Mã chuyên mục dùng để ghép topic_code từ câu hỏi với tên hiển thị.
const imathTopicSlug = (value) => String(value).normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'd').toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');
for (const [grade, catalog] of Object.entries(window.IMATH_GRADE_CATALOGS)) {
  for (const group of catalog.topics) for (const item of group.items) item.code ||= `g${grade}cm_${imathTopicSlug(item.name)}`;
}

// Link lý thuyết chính thức từ docs/link-ly-thuyet-chuyen-muc.csv.
const imathTheoryUrls = Object.freeze({
  'g1cm_cac_so_tu_0_den_10': 'https://imath.vn/tong-ket-cac-so-0-den-10-lop-1-con-da-vung-chua/',
  'g1cm_cac_so_tu_0_den_100': 'https://imath.vn/so-co-hai-chu-so-lop-1-cau-tao-doc-va-viet-dung/',
  'g1cm_cong_tru_trong_pham_vi_10': 'https://imath.vn/bang-cong-va-bang-tru-trong-pham-vi-10-lop-1/',
  'g1cm_cong_tru_trong_pham_vi_100': 'https://imath.vn/on-tap-cong-tru-trong-pham-vi-100-lop-1-luyen-tap-chung/',
  'g1cm_do_do_dai': 'https://imath.vn/don-vi-do-do-dai-lop-1-xang-ti-met-va-cach-do/',
  'g1cm_giai_toan_co_loi_van': 'https://imath.vn/giai-toan-mot-buoc-lop-1-van-dung-bang-cong-bang-tru/',
  'g1cm_hinh_phang_khoi_hinh': 'https://imath.vn/nhan-biet-hinh-vuong-tron-tam-giac-chu-nhat-lop-1/',
  'g1cm_xem_gio_xem_lich': 'https://imath.vn/xem-gio-dung-va-cac-ngay-trong-tuan-lop-1/',
  'g1cm_on_tap_tong_hop': 'https://imath.vn/tong-on-cuoi-nam-toan-lop-1-con-da-san-sang-len-lop-2/',
  'g2cm_so_den_100': 'https://imath.vn/on-so-den-100-va-tia-so-lop-2/',
  'g2cm_cong_tru_trong_pham_vi_20': 'https://imath.vn/cong-qua-10-trong-pham-vi-20-lop-2-cach-lam-tron-chuc/',
  'g2cm_cong_tru_co_nho_trong_pham_vi_100': 'https://imath.vn/cong-co-nho-hai-chu-so-voi-hai-chu-so-lop-2/',
  'g2cm_phep_nhan_phep_chia': 'https://imath.vn/phep-nhan-lop-2-thua-so-tich-la-gi/',
  'g2cm_cac_so_trong_pham_vi_1_000': 'https://imath.vn/don-vi-chuc-tram-nghin-lop-2-cau-tao-so-den-1000/',
  'g2cm_cong_tru_trong_pham_vi_1_000': 'https://imath.vn/cong-co-nho-trong-pham-vi-1000-lop-2-cach-dat-tinh-dung/',
  'g2cm_ki_lo_gam_lit': 'https://imath.vn/ki-lo-gam-va-lit-lop-2-nhan-biet-don-vi-do/',
  'g2cm_hinh_phang': 'https://imath.vn/duong-gap-khuc-hinh-tu-giac-lop-2-ve-doan-thang/',
  'g2cm_ngay_gio_xem_lich': 'https://imath.vn/xem-dong-ho-lop-2-xem-lich-gio-phut-ngay-thang/',
  'g2cm_hinh_khoi': 'https://imath.vn/khoi-tru-khoi-cau-lop-2-luyen-tap-nhan-chia/',
  'g2cm_do_dai_tien_viet_nam': 'https://imath.vn/dm-m-km-lop-2-va-tien-viet-nam-luyen-tap-so-1000/',
  'g2cm_thong_ke_kha_nang_xay_ra': 'https://imath.vn/bieu-do-tranh-lop-2-kiem-dem-va-kha-nang-xay-ra/',
  'g2cm_giai_toan_co_loi_van': 'https://imath.vn/bang-tru-qua-10-lop-2-bai-toan-nhieu-hon-it-hon/',
  'g3cm_on_tap_so_va_phep_tinh_trong_pham_vi_1_000': 'https://imath.vn/on-tap-so-den-1000-lop-3-cau-tao-va-so-sanh/',
  'g3cm_bang_nhan_bang_chia': 'https://imath.vn/bang-nhan-3-lop-3-bang-chia-3-on-bang-2-va-5/',
  'g3cm_nhan_chia_trong_pham_vi_100': 'https://imath.vn/phep-chia-co-du-lop-3-chia-het-va-gap-len-nhieu-lan/',
  'g3cm_nhan_chia_trong_pham_vi_1_000': 'https://imath.vn/nhan-so-co-hai-chu-so-lop-3-ba-chu-so-voi-mot-chu-so/',
  'g3cm_cac_so_den_10_000': 'https://imath.vn/so-co-4-chu-so-lop-3-cach-doc-viet-va-so-10-000/',
  'g3cm_cong_tru_nhan_chia_trong_pham_vi_10_000': 'https://imath.vn/cong-trong-pham-vi-10-000-lop-3-va-cach-dat-tinh/',
  'g3cm_cac_so_den_100_000': 'https://imath.vn/so-co-5-chu-so-lop-3-va-cach-doc-theo-nhom-nghin/',
  'g3cm_cong_tru_trong_pham_vi_100_000': 'https://imath.vn/cong-trong-pham-vi-100-000-lop-3-va-cach-uoc-luong/',
  'g3cm_nhan_chia_trong_pham_vi_100_000': 'https://imath.vn/tien-viet-nam-lop-3-va-nhan-chia-trong-pham-vi-100-000/',
  'g3cm_hinh_phang_hinh_khoi': 'https://imath.vn/goc-vuong-lop-3-va-hinh-tam-giac-tu-giac-chu-nhat/',
  'g3cm_don_vi_do_do_dai_khoi_luong_dung_tich_nhiet_do': 'https://imath.vn/mi-li-met-lop-3-gam-mi-li-lit-va-nhiet-do/',
  'g3cm_chu_vi_dien_tich': 'https://imath.vn/dien-tich-hinh-chu-nhat-lop-3-hinh-vuong-va-chu-vi/',
  'g3cm_xem_dong_ho_thang_nam_tien_viet_nam': 'https://imath.vn/xem-dong-ho-lop-3-thang-nam-va-cach-doc-lich/',
  'g3cm_thong_ke_xac_suat': 'https://imath.vn/thu-thap-so-lieu-lop-3-va-kha-nang-xay-ra-cua-su-kien/',
  'g3cm_giai_toan_co_loi_van': 'https://imath.vn/bai-toan-co-loi-van-lop-3-cach-tom-tat-va-giai-2-buoc/',
  'g4cm_on_tap_so_den_100_000_bieu_thuc_chu': 'https://imath.vn/on-tap-dau-nam-toan-lop-4-va-thu-tu-can-on-truoc/',
  'g4cm_so_co_nhieu_chu_so': 'https://imath.vn/hang-va-lop-trong-toan-lop-4-doc-so-den-lop-trieu/',
  'g4cm_phep_cong_phep_tru': 'https://imath.vn/cong-so-tu-nhien-lon-lop-4-va-ba-cach-kiem-tra-ket-qua/',
  'g4cm_phep_nhan_phep_chia': 'https://imath.vn/nhan-voi-so-co-hai-chu-so-lop-4-va-vi-sao-phai-lui-cot/',
  'g4cm_phan_so': 'https://imath.vn/tu-so-va-mau-so-lop-4-hai-so-noi-hai-chuyen-khac-nhau/',
  'g4cm_cong_tru_phan_so': 'https://imath.vn/cong-phan-so-lop-4-ket-qua-phai-lon-hon-ca-hai/',
  'g4cm_nhan_chia_phan_so': 'https://imath.vn/nhan-chia-phan-so-lop-4-khi-nhan-lai-lam-so-be-di/',
  'g4cm_goc_do_goc': 'https://imath.vn/do-goc-lop-4-bang-thuoc-do-do-va-cach-doc-dung/',
  'g4cm_don_vi_do_dai_luong': 'https://imath.vn/yen-ta-tan-lop-4-va-cach-doi-don-vi-khoi-luong/',
  'g4cm_duong_thang_vuong_goc_song_song': 'https://imath.vn/hai-duong-thang-vuong-goc-lop-4-va-cach-ve-bang-e-ke/',
  'g4cm_thong_ke_xac_suat': 'https://imath.vn/thong-ke-su-kien-lop-4-va-chon-bang-hay-bieu-do/',
  'g4cm_giai_toan_co_loi_van': 'https://imath.vn/bai-toan-ba-buoc-lop-4-va-cach-lap-ke-hoach-giai/',
  'g5cm_on_tap_phan_so_hon_so': 'https://imath.vn/on-tap-phan-so-lop-5-va-cau-hoi-phan-cua-cai-gi/',
  'g5cm_so_thap_phan': 'https://imath.vn/so-thap-phan-lop-5-la-hon-so-viet-theo-cach-khac/',
  'g5cm_cac_phep_tinh_voi_so_thap_phan': 'https://imath.vn/cong-tru-so-thap-phan-lop-5-vi-sao-dat-thang-dau-phay/',
  'g5cm_ti_so_va_cac_bai_toan_lien_quan': 'https://imath.vn/ti-so-lop-5-va-cau-hoi-so-voi-cai-gi/',
  'g5cm_don_vi_do_dien_tich': 'https://imath.vn/ki-lo-met-vuong-lop-5-vi-sao-bang-mot-trieu-met-vuong/',
  'g5cm_hinh_phang_chu_vi_dien_tich': 'https://imath.vn/dien-tich-hinh-tam-giac-lop-5-day-la-canh-minh-chon/',
  'g5cm_the_tich_don_vi_do_the_tich': 'https://imath.vn/the-tich-lop-5-van-la-dem-o-nhung-o-da-khac/',
  'g5cm_dien_tich_the_tich_hinh_khoi': 'https://imath.vn/the-tich-hinh-hop-chu-nhat-lop-5-dat-kieu-nao-cung-the/',
  'g5cm_so_do_thoi_gian': 'https://imath.vn/so-do-thoi-gian-lop-5-du-60-moi-duoc-nho/',
  'g5cm_chuyen_dong_deu': 'https://imath.vn/van-toc-lop-5-ten-don-vi-chinh-la-cong-thuc/',
  'g5cm_thong_ke_xac_suat': 'https://imath.vn/bieu-do-quat-tron-lop-5-hinh-khong-co-gi-de-dem/',
  'g5cm_giai_toan_co_loi_van': 'https://imath.vn/tong-va-ti-lop-5-di-tim-mot-phan-bang-bao-nhieu/',
});
for (const catalog of Object.values(window.IMATH_GRADE_CATALOGS)) {
  for (const group of catalog.topics) {
    for (const item of group.items) item.theory_url = imathTheoryUrls[item.code] || '';
  }
}

// Địa chỉ chính thức dùng chung cho menu và các chuyên mục có gợi ý Finger Math.
window.IMATH_FINGER_MATH_URL = 'https://imath.vn/tienich/finger-math/';

// Một nguồn duy nhất cho các chuyên mục lớp 1–2 được gợi ý Finger Math.
// Mã lớp 1 được khai báo sẵn để tự hoạt động khi danh mục lớp 1 được bổ sung sau này.
window.IMATH_FINGER_MATH_TOPIC_URLS = Object.freeze({
  'g1cm_cong_tru_trong_pham_vi_20': window.IMATH_FINGER_MATH_URL,
  'g1cm_cong_tru_co_nho_trong_pham_vi_100': window.IMATH_FINGER_MATH_URL,
  'g2cm_cong_tru_trong_pham_vi_20': window.IMATH_FINGER_MATH_URL,
  'g2cm_cong_tru_co_nho_trong_pham_vi_100': window.IMATH_FINGER_MATH_URL,
});

// Ánh xạ dự phòng cho các đề kỳ cũ chưa có mã chuyên mục trong dữ liệu trả về.
window.IMATH_EXAM_TOPIC_CODES = Object.freeze({
  g2ky_gk1_de1: Object.freeze([
    'g2cm_so_den_100', 'g2cm_so_den_100',
    'g2cm_cong_tru_trong_pham_vi_20', 'g2cm_cong_tru_trong_pham_vi_20', 'g2cm_cong_tru_trong_pham_vi_20',
    'g2cm_ki_lo_gam_lit', 'g2cm_ki_lo_gam_lit',
    'g2cm_giai_toan_co_loi_van', 'g2cm_giai_toan_co_loi_van', 'g2cm_giai_toan_co_loi_van'
  ]),
  g2ky_gk1_de2: Object.freeze([
    'g2cm_so_den_100', 'g2cm_so_den_100',
    'g2cm_cong_tru_trong_pham_vi_20', 'g2cm_cong_tru_trong_pham_vi_20', 'g2cm_cong_tru_trong_pham_vi_20',
    'g2cm_ki_lo_gam_lit', 'g2cm_ki_lo_gam_lit',
    'g2cm_giai_toan_co_loi_van', 'g2cm_giai_toan_co_loi_van', 'g2cm_giai_toan_co_loi_van'
  ])
});
