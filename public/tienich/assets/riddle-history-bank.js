(function () {
  'use strict';

  const regionLabels = {
    'viet-nam': 'Lịch sử Việt Nam',
    'the-gioi': 'Lịch sử thế giới'
  };

  const levelLabels = {
    'nhe-nhang': 'Nhẹ nhàng',
    'thu-thach': 'Thử thách',
    'kho': 'Khó'
  };

  const questions = [
    {
      id: 'history-vn-001', region: 'viet-nam', period: 'Thời dựng nước', level: 'nhe-nhang',
      prompt: 'Theo truyền thuyết, mẹ Âu Cơ sinh ra một bọc có bao nhiêu trứng?',
      options: ['50', '100', '99', '101'], answers: ['100'],
      hint: 'Đây là con số thường được nhắc trong câu chuyện Con Rồng Cháu Tiên.',
      explanation: 'Theo truyền thuyết Con Rồng Cháu Tiên, mẹ Âu Cơ sinh một bọc một trăm trứng, nở thành một trăm người con.',
      sourceLabel: 'Bảo tàng Lịch sử Quốc gia', sourceUrl: 'https://baotanglichsu.vn/'
    },
    {
      id: 'history-vn-002', region: 'viet-nam', period: 'Thời dựng nước', level: 'nhe-nhang',
      prompt: 'Các Vua Hùng gắn với quốc gia cổ nào trong lịch sử Việt Nam?',
      options: ['Văn Lang', 'Âu Lạc', 'Đại Cồ Việt', 'Đại Việt'], answers: ['Văn Lang'],
      hint: 'Tên quốc gia này xuất hiện sớm hơn Âu Lạc.',
      explanation: 'Theo sử liệu và truyền thống lịch sử, các Vua Hùng gắn với nhà nước Văn Lang.',
      sourceLabel: 'Cổng thông tin tỉnh Phú Thọ', sourceUrl: 'https://phutho.gov.vn/'
    },
    {
      id: 'history-vn-003', region: 'viet-nam', period: 'Thời dựng nước', level: 'thu-thach',
      prompt: 'Kinh đô của nước Văn Lang thường được nhắc đến với tên gọi nào?',
      options: ['Phong Châu', 'Cổ Loa', 'Hoa Lư', 'Thăng Long'], answers: ['Phong Châu'],
      hint: 'Địa danh này thuộc vùng đất tổ Phú Thọ ngày nay.',
      explanation: 'Phong Châu được xem là trung tâm của nhà nước Văn Lang thời các Vua Hùng.',
      sourceLabel: 'Cổng thông tin tỉnh Phú Thọ', sourceUrl: 'https://phutho.gov.vn/'
    },
    {
      id: 'history-vn-004', region: 'viet-nam', period: 'Âu Lạc', level: 'nhe-nhang',
      prompt: 'Ai là người lập nên nước Âu Lạc?',
      options: ['An Dương Vương', 'Ngô Quyền', 'Đinh Bộ Lĩnh', 'Lý Công Uẩn'], answers: ['An Dương Vương'],
      hint: 'Nhân vật này gắn với thành Cổ Loa.',
      explanation: 'Thục Phán lên ngôi, xưng là An Dương Vương và lập nên nước Âu Lạc.',
      sourceLabel: 'Khu di tích Cổ Loa', sourceUrl: 'https://thanhcoloa.vn/'
    },
    {
      id: 'history-vn-005', region: 'viet-nam', period: 'Âu Lạc', level: 'thu-thach',
      prompt: 'Tòa thành nhiều vòng xoáy gắn với An Dương Vương có tên là gì?',
      options: ['Cổ Loa', 'Hoa Lư', 'Lam Kinh', 'Thành Nhà Hồ'], answers: ['Cổ Loa'],
      hint: 'Tên thành có chữ “Loa”, gợi hình dáng xoắn như vỏ ốc.',
      explanation: 'Cổ Loa là kinh đô của nước Âu Lạc và nổi bật với hệ thống thành nhiều vòng.',
      sourceLabel: 'Khu di tích Cổ Loa', sourceUrl: 'https://thanhcoloa.vn/'
    },
    {
      id: 'history-vn-006', region: 'viet-nam', period: 'Bắc thuộc', level: 'nhe-nhang',
      prompt: 'Cuộc khởi nghĩa năm 40 chống ách đô hộ phương Bắc do ai lãnh đạo?',
      options: ['Hai Bà Trưng', 'Bà Triệu', 'Lê Lợi', 'Quang Trung'], answers: ['Hai Bà Trưng'],
      hint: 'Hai nữ anh hùng là chị em Trưng Trắc và Trưng Nhị.',
      explanation: 'Năm 40, Trưng Trắc và Trưng Nhị phất cờ khởi nghĩa, giành lại quyền tự chủ trong một thời gian.',
      sourceLabel: 'Bảo tàng Lịch sử Quốc gia', sourceUrl: 'https://baotanglichsu.vn/'
    },
    {
      id: 'history-vn-007', region: 'viet-nam', period: 'Bắc thuộc', level: 'thu-thach',
      prompt: 'Nữ anh hùng nào lãnh đạo cuộc khởi nghĩa chống quân Ngô vào năm 248?',
      options: ['Bà Triệu', 'Trưng Trắc', 'Ỷ Lan', 'Bùi Thị Xuân'], answers: ['Bà Triệu'],
      hint: 'Bà còn được gọi là Triệu Thị Trinh.',
      explanation: 'Năm 248, Bà Triệu, tên là Triệu Thị Trinh, lãnh đạo cuộc khởi nghĩa chống quân Ngô.',
      sourceLabel: 'Bảo tàng Lịch sử Quốc gia', sourceUrl: 'https://baotanglichsu.vn/'
    },
    {
      id: 'history-vn-008', region: 'viet-nam', period: 'Thế kỷ X', level: 'nhe-nhang',
      prompt: 'Ai chỉ huy chiến thắng Bạch Đằng năm 938?',
      options: ['Ngô Quyền', 'Đinh Bộ Lĩnh', 'Lê Hoàn', 'Trần Hưng Đạo'], answers: ['Ngô Quyền'],
      hint: 'Ông cho đóng cọc gỗ xuống lòng sông để đánh quân Nam Hán.',
      explanation: 'Ngô Quyền chỉ huy trận Bạch Đằng năm 938, chấm dứt thời kỳ Bắc thuộc kéo dài.',
      sourceLabel: 'Bảo tàng Lịch sử Quốc gia', sourceUrl: 'https://baotanglichsu.vn/'
    },
    {
      id: 'history-vn-009', region: 'viet-nam', period: 'Nhà Đinh', level: 'thu-thach',
      prompt: 'Kinh đô của nước Đại Cồ Việt thời Đinh được đặt ở đâu?',
      options: ['Hoa Lư', 'Thăng Long', 'Phú Xuân', 'Cổ Loa'], answers: ['Hoa Lư'],
      hint: 'Kinh đô này thuộc tỉnh Ninh Bình ngày nay.',
      explanation: 'Sau khi thống nhất đất nước, Đinh Bộ Lĩnh đóng đô tại Hoa Lư, Ninh Bình.',
      sourceLabel: 'Quần thể danh thắng Tràng An', sourceUrl: 'https://whc.unesco.org/en/list/1438/'
    },
    {
      id: 'history-vn-010', region: 'viet-nam', period: 'Nhà Đinh', level: 'kho',
      prompt: 'Sau khi dẹp loạn 12 sứ quân, Đinh Bộ Lĩnh đặt quốc hiệu là gì?',
      options: ['Đại Cồ Việt', 'Đại Việt', 'Đại Nam', 'Văn Lang'], answers: ['Đại Cồ Việt'],
      hint: 'Quốc hiệu này có ba tiếng và bắt đầu bằng chữ “Đại”.',
      explanation: 'Năm 968, Đinh Bộ Lĩnh lên ngôi Hoàng đế và đặt quốc hiệu là Đại Cồ Việt.',
      sourceLabel: 'Bảo tàng Lịch sử Quốc gia', sourceUrl: 'https://baotanglichsu.vn/'
    },
    {
      id: 'history-vn-011', region: 'viet-nam', period: 'Nhà Lý', level: 'nhe-nhang',
      prompt: 'Năm 1010, vị vua nào quyết định dời đô ra Đại La?',
      options: ['Lý Công Uẩn', 'Lý Thánh Tông', 'Lê Đại Hành', 'Trần Thái Tông'], answers: ['Lý Công Uẩn'],
      hint: 'Ông là vị vua đầu tiên của nhà Lý.',
      explanation: 'Năm 1010, vua Lý Công Uẩn ban Chiếu dời đô, chuyển kinh đô từ Hoa Lư ra Đại La.',
      sourceLabel: 'Hoàng thành Thăng Long', sourceUrl: 'https://hoangthanhthanglong.vn/'
    },
    {
      id: 'history-vn-012', region: 'viet-nam', period: 'Nhà Lý', level: 'nhe-nhang',
      prompt: 'Sau khi dời đô năm 1010, Đại La được đổi tên thành gì?',
      options: ['Thăng Long', 'Đông Đô', 'Đông Quan', 'Phú Xuân'], answers: ['Thăng Long'],
      hint: 'Tên này có nghĩa là “rồng bay lên”.',
      explanation: 'Lý Công Uẩn đổi tên Đại La thành Thăng Long, mở đầu một giai đoạn phát triển lâu dài của kinh đô.',
      sourceLabel: 'Hoàng thành Thăng Long', sourceUrl: 'https://hoangthanhthanglong.vn/'
    },
    {
      id: 'history-vn-013', region: 'viet-nam', period: 'Nhà Lý', level: 'thu-thach',
      prompt: 'Văn Miếu ở Thăng Long được xây dựng năm 1070 dưới triều vua nào?',
      options: ['Lý Thánh Tông', 'Lý Nhân Tông', 'Lý Thái Tổ', 'Trần Nhân Tông'], answers: ['Lý Thánh Tông'],
      hint: 'Tên hiệu của vị vua này có chữ “Thánh”.',
      explanation: 'Văn Miếu được xây dựng năm 1070 dưới thời vua Lý Thánh Tông; Quốc Tử Giám được lập sau đó vào năm 1076.',
      sourceLabel: 'Văn Miếu – Quốc Tử Giám', sourceUrl: 'https://vanmieu.gov.vn/'
    },
    {
      id: 'history-vn-014', region: 'viet-nam', period: 'Nhà Trần', level: 'kho',
      prompt: 'Trong thế kỷ XIII, quân dân nhà Trần đã mấy lần đánh bại quân Mông – Nguyên?',
      options: ['Ba lần', 'Hai lần', 'Bốn lần', 'Năm lần'], answers: ['Ba lần'],
      hint: 'Các cuộc kháng chiến diễn ra vào các năm 1258, 1285 và 1287–1288.',
      explanation: 'Nhà Trần ba lần kháng chiến thắng lợi chống quân Mông – Nguyên trong thế kỷ XIII.',
      sourceLabel: 'Bảo tàng Lịch sử Quốc gia', sourceUrl: 'https://baotanglichsu.vn/'
    },
    {
      id: 'history-vn-015', region: 'viet-nam', period: 'Nhà Trần', level: 'nhe-nhang',
      prompt: 'Vị tướng nào gắn với chiến thắng Bạch Đằng năm 1288?',
      options: ['Trần Hưng Đạo', 'Lý Thường Kiệt', 'Ngô Quyền', 'Lê Lợi'], answers: ['Trần Hưng Đạo'],
      hint: 'Ông còn được gọi là Hưng Đạo Đại Vương.',
      explanation: 'Trần Hưng Đạo chỉ huy quân dân nhà Trần đánh bại quân Nguyên trên sông Bạch Đằng năm 1288.',
      sourceLabel: 'Bảo tàng Lịch sử Quốc gia', sourceUrl: 'https://baotanglichsu.vn/'
    },
    {
      id: 'history-vn-016', region: 'viet-nam', period: 'Nhà Trần', level: 'kho',
      prompt: 'Hội nghị Diên Hồng thời Trần được tổ chức chủ yếu để bàn việc gì?',
      options: ['Đánh hay hòa với quân Nguyên', 'Dời kinh đô', 'Chọn người nối ngôi', 'Mở khoa thi đầu tiên'], answers: ['Đánh hay hòa với quân Nguyên'],
      hint: 'Câu trả lời nổi tiếng của các bô lão là “Đánh!”.',
      explanation: 'Hội nghị Diên Hồng thể hiện quyết tâm đoàn kết chống quân Nguyên khi triều đình hỏi ý kiến các bô lão về việc đánh hay hòa.',
      sourceLabel: 'Bảo tàng Lịch sử Quốc gia', sourceUrl: 'https://baotanglichsu.vn/'
    },
    {
      id: 'history-vn-017', region: 'viet-nam', period: 'Khởi nghĩa Lam Sơn', level: 'nhe-nhang',
      prompt: 'Ai là người lãnh đạo cuộc khởi nghĩa Lam Sơn?',
      options: ['Lê Lợi', 'Nguyễn Huệ', 'Lý Bí', 'Mai Thúc Loan'], answers: ['Lê Lợi'],
      hint: 'Sau thắng lợi, ông lên ngôi và mở đầu triều Hậu Lê.',
      explanation: 'Lê Lợi lãnh đạo khởi nghĩa Lam Sơn từ năm 1418, giành thắng lợi và lập nên triều Hậu Lê.',
      sourceLabel: 'Khu di tích Lam Kinh', sourceUrl: 'https://thanhhoa.gov.vn/'
    },
    {
      id: 'history-vn-018', region: 'viet-nam', period: 'Khởi nghĩa Lam Sơn', level: 'thu-thach',
      prompt: 'Ai là tác giả của “Bình Ngô đại cáo”?',
      options: ['Nguyễn Trãi', 'Lê Lợi', 'Ngô Sĩ Liên', 'Lý Thường Kiệt'], answers: ['Nguyễn Trãi'],
      hint: 'Ông là danh nhân văn hóa thế giới, quê gốc ở Chí Linh.',
      explanation: 'Nguyễn Trãi thay Lê Lợi viết Bình Ngô đại cáo, tuyên bố thắng lợi của cuộc khởi nghĩa Lam Sơn.',
      sourceLabel: 'Bảo tàng Lịch sử Quốc gia', sourceUrl: 'https://baotanglichsu.vn/'
    },
    {
      id: 'history-vn-019', region: 'viet-nam', period: 'Tây Sơn', level: 'nhe-nhang',
      prompt: 'Ai chỉ huy quân Tây Sơn đại phá quân Thanh vào mùa xuân năm 1789?',
      options: ['Quang Trung', 'Gia Long', 'Lê Chiêu Thống', 'Nguyễn Trãi'], answers: ['Quang Trung'],
      hint: 'Ông lên ngôi Hoàng đế trước khi tiến quân ra Bắc.',
      explanation: 'Hoàng đế Quang Trung chỉ huy cuộc hành quân thần tốc và giành thắng lợi Ngọc Hồi – Đống Đa vào xuân Kỷ Dậu 1789.',
      sourceLabel: 'Bảo tàng Lịch sử Quốc gia', sourceUrl: 'https://baotanglichsu.vn/'
    },
    {
      id: 'history-vn-020', region: 'viet-nam', period: 'Nhà Nguyễn', level: 'nhe-nhang',
      prompt: 'Kinh đô của triều Nguyễn được đặt tại thành phố nào ngày nay?',
      options: ['Huế', 'Hà Nội', 'Hội An', 'Đà Nẵng'], answers: ['Huế'],
      hint: 'Thành phố này nằm bên sông Hương.',
      explanation: 'Từ năm 1802, Huế là kinh đô của Việt Nam dưới triều Nguyễn.',
      sourceLabel: 'UNESCO – Quần thể di tích Cố đô Huế', sourceUrl: 'https://whc.unesco.org/en/list/678/'
    },
    {
      id: 'history-vn-021', region: 'viet-nam', period: 'Lịch sử hiện đại', level: 'nhe-nhang',
      prompt: 'Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập ngày 2 tháng 9 năm 1945 tại đâu?',
      options: ['Quảng trường Ba Đình', 'Quảng trường Đông Kinh Nghĩa Thục', 'Sân vận động Hàng Đẫy', 'Hoàng thành Huế'], answers: ['Quảng trường Ba Đình'],
      hint: 'Quảng trường này nằm ở Hà Nội, gần Lăng Chủ tịch Hồ Chí Minh.',
      explanation: 'Ngày 2 tháng 9 năm 1945, tại Quảng trường Ba Đình, Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập.',
      sourceLabel: 'Bảo tàng Hồ Chí Minh', sourceUrl: 'https://baotanghochiminh.vn/'
    },
    {
      id: 'history-vn-022', region: 'viet-nam', period: 'Lịch sử hiện đại', level: 'thu-thach',
      prompt: 'Chiến thắng Điện Biên Phủ kết thúc vào năm nào?',
      options: ['1954', '1945', '1968', '1975'], answers: ['1954'],
      hint: 'Năm này cũng gắn với Hiệp định Genève về Đông Dương.',
      explanation: 'Chiến dịch Điện Biên Phủ kết thúc thắng lợi ngày 7 tháng 5 năm 1954.',
      sourceLabel: 'Bảo tàng Chiến thắng Điện Biên Phủ', sourceUrl: 'https://dienbien.gov.vn/'
    },
    {
      id: 'history-vn-023', region: 'viet-nam', period: 'Lịch sử hiện đại', level: 'thu-thach',
      prompt: 'Ngày 30 tháng 4 năm 1975 là dấu mốc kết thúc chiến tranh, mở ra thời kỳ nào của dân tộc Việt Nam?',
      options: ['Đất nước thống nhất', 'Đất nước chia cắt hai miền', 'Bắt đầu thời kỳ Bắc thuộc', 'Chuyển kinh đô về Thăng Long'], answers: ['Đất nước thống nhất'],
      hint: 'Đáp án nói về một đất nước liền một dải, cùng xây dựng sau chiến tranh.',
      explanation: 'Ngày 30 tháng 4 năm 1975 là mốc lịch sử quan trọng, mở ra thời kỳ đất nước thống nhất.',
      sourceLabel: 'Bảo tàng Lịch sử Quốc gia', sourceUrl: 'https://baotanglichsu.vn/'
    },
    {
      id: 'history-vn-024', region: 'viet-nam', period: 'Di sản lịch sử', level: 'thu-thach',
      prompt: 'Đô thị cổ Hội An từng nổi tiếng nhất với vai trò nào?',
      options: ['Thương cảng quốc tế', 'Kinh đô đầu tiên', 'Căn cứ thủy quân', 'Trung tâm khai mỏ'], answers: ['Thương cảng quốc tế'],
      hint: 'Nơi đây từng đón nhiều thương nhân từ Nhật Bản, Trung Quốc và châu Âu.',
      explanation: 'Từ thế kỷ XV đến XIX, Hội An là một thương cảng quốc tế sầm uất ở Đông Nam Á.',
      sourceLabel: 'UNESCO – Phố cổ Hội An', sourceUrl: 'https://whc.unesco.org/en/list/948/'
    },

    {
      id: 'history-world-001', region: 'the-gioi', period: 'Ai Cập cổ đại', level: 'nhe-nhang',
      prompt: 'Những kim tự tháp nổi tiếng ở Giza thuộc nền văn minh cổ đại nào?',
      options: ['Ai Cập', 'Hy Lạp', 'La Mã', 'Maya'], answers: ['Ai Cập'],
      hint: 'Nền văn minh này phát triển bên sông Nile.',
      explanation: 'Các kim tự tháp Giza được xây dựng ở Ai Cập cổ đại làm lăng mộ hoàng gia.',
      sourceLabel: 'UNESCO – Memphis và các kim tự tháp', sourceUrl: 'https://whc.unesco.org/en/list/86/'
    },
    {
      id: 'history-world-002', region: 'the-gioi', period: 'Ai Cập cổ đại', level: 'thu-thach',
      prompt: 'Dòng sông nào có vai trò đặc biệt quan trọng đối với sự hình thành nền văn minh Ai Cập cổ đại?',
      options: ['Sông Nile', 'Sông Amazon', 'Sông Danube', 'Sông Mississippi'], answers: ['Sông Nile'],
      hint: 'Đây là một trong những con sông dài nhất thế giới.',
      explanation: 'Nước và phù sa của sông Nile giúp cư dân Ai Cập cổ đại canh tác, giao thông và xây dựng xã hội.',
      sourceLabel: 'Encyclopaedia Britannica – Nile River', sourceUrl: 'https://www.britannica.com/place/Nile-River'
    },
    {
      id: 'history-world-003', region: 'the-gioi', period: 'Lưỡng Hà cổ đại', level: 'kho',
      prompt: 'Chữ hình nêm được sử dụng sớm ở khu vực văn minh cổ đại nào?',
      options: ['Lưỡng Hà', 'Ai Cập', 'La Mã', 'Ấn Độ'], answers: ['Lưỡng Hà'],
      hint: 'Khu vực này nằm giữa hai sông Tigris và Euphrates.',
      explanation: 'Chữ hình nêm được người Sumer phát triển tại vùng Lưỡng Hà và ghi trên các bảng đất sét.',
      sourceLabel: 'Encyclopaedia Britannica – Cuneiform', sourceUrl: 'https://www.britannica.com/topic/cuneiform'
    },
    {
      id: 'history-world-004', region: 'the-gioi', period: 'Hy Lạp cổ đại', level: 'nhe-nhang',
      prompt: 'Thế vận hội Olympic cổ đại bắt nguồn từ quốc gia nào?',
      options: ['Hy Lạp', 'Ý', 'Ai Cập', 'Pháp'], answers: ['Hy Lạp'],
      hint: 'Tên gọi Olympic bắt nguồn từ Olympia.',
      explanation: 'Các kỳ Olympic cổ đại được tổ chức tại Olympia thuộc Hy Lạp.',
      sourceLabel: 'Olympics – Ancient Olympic Games', sourceUrl: 'https://olympics.com/ioc/ancient-olympic-games'
    },
    {
      id: 'history-world-005', region: 'the-gioi', period: 'Hy Lạp cổ đại', level: 'thu-thach',
      prompt: 'Thành bang nào của Hy Lạp cổ đại thường được nhắc đến như nơi phát triển nền dân chủ trực tiếp?',
      options: ['Athens', 'Sparta', 'Corinth', 'Troy'], answers: ['Athens'],
      hint: 'Đây cũng là thủ đô của Hy Lạp ngày nay.',
      explanation: 'Athens cổ đại phát triển hình thức dân chủ trực tiếp, dù quyền tham gia khi đó chỉ dành cho một bộ phận công dân.',
      sourceLabel: 'Encyclopaedia Britannica – Democracy', sourceUrl: 'https://www.britannica.com/topic/democracy'
    },
    {
      id: 'history-world-006', region: 'the-gioi', period: 'La Mã cổ đại', level: 'nhe-nhang',
      prompt: 'Đấu trường Colosseum nổi tiếng nằm ở thành phố nào?',
      options: ['Rome', 'Athens', 'Paris', 'Cairo'], answers: ['Rome'],
      hint: 'Thành phố này ngày nay là thủ đô của nước Ý.',
      explanation: 'Colosseum là đấu trường lớn được xây dựng dưới thời Đế quốc La Mã tại thành phố Rome.',
      sourceLabel: 'UNESCO – Trung tâm lịch sử Rome', sourceUrl: 'https://whc.unesco.org/en/list/91/'
    },
    {
      id: 'history-world-007', region: 'the-gioi', period: 'Trung Hoa cổ đại', level: 'kho',
      prompt: 'Phần lớn những đoạn Vạn Lý Trường Thành còn thấy rõ ngày nay được xây dựng dưới triều đại nào?',
      options: ['Nhà Minh', 'Nhà Hán', 'Nhà Đường', 'Nhà Tống'], answers: ['Nhà Minh'],
      hint: 'Triều đại này tồn tại ở Trung Quốc từ thế kỷ XIV đến thế kỷ XVII.',
      explanation: 'Nhiều triều đại đã xây tường phòng thủ, nhưng phần lớn những đoạn còn thấy rõ ngày nay được xây dựng hoặc gia cố dưới thời nhà Minh.',
      sourceLabel: 'UNESCO – Vạn Lý Trường Thành', sourceUrl: 'https://whc.unesco.org/en/list/438/'
    },
    {
      id: 'history-world-008', region: 'the-gioi', period: 'Trung Hoa cổ đại', level: 'kho',
      prompt: 'Nhân vật nào thường được ghi nhận đã cải tiến phương pháp làm giấy vào thời Đông Hán?',
      options: ['Thái Luân', 'Khổng Tử', 'Tần Thủy Hoàng', 'Trịnh Hòa'], answers: ['Thái Luân'],
      hint: 'Tên ông trong tiếng Anh thường được viết là Cai Lun.',
      explanation: 'Thái Luân thường được ghi nhận đã cải tiến và chuẩn hóa phương pháp làm giấy vào khoảng năm 105.',
      sourceLabel: 'Encyclopaedia Britannica – Cai Lun', sourceUrl: 'https://www.britannica.com/biography/Cai-Lun'
    },
    {
      id: 'history-world-009', region: 'the-gioi', period: 'Phục hưng', level: 'thu-thach',
      prompt: 'Phong trào Phục hưng bắt đầu phát triển mạnh trước tiên tại khu vực nào của châu Âu?',
      options: ['Các thành bang Ý', 'Bán đảo Scandinavia', 'Quần đảo Anh', 'Đông Âu'], answers: ['Các thành bang Ý'],
      hint: 'Florence là một trung tâm tiêu biểu của phong trào này.',
      explanation: 'Phong trào Phục hưng khởi đầu và phát triển mạnh tại các thành bang Ý trước khi lan rộng ở châu Âu.',
      sourceLabel: 'Encyclopaedia Britannica – Renaissance', sourceUrl: 'https://www.britannica.com/event/Renaissance'
    },
    {
      id: 'history-world-010', region: 'the-gioi', period: 'Thời đại khám phá', level: 'thu-thach',
      prompt: 'Năm 1492, đoàn thám hiểm của Christopher Columbus đi qua Đại Tây Dương và đến khu vực nào?',
      options: ['Vùng Caribe', 'Ấn Độ', 'Australia', 'Nam Cực'], answers: ['Vùng Caribe'],
      hint: 'Ông tưởng rằng mình đã đến gần châu Á.',
      explanation: 'Năm 1492, đoàn thám hiểm của Columbus đến các đảo ở vùng Caribe; không nên gọi đây là lúc con người “phát hiện” châu Mỹ vì người bản địa đã sống ở đó từ lâu.',
      sourceLabel: 'Encyclopaedia Britannica – Christopher Columbus', sourceUrl: 'https://www.britannica.com/biography/Christopher-Columbus'
    },
    {
      id: 'history-world-011', region: 'the-gioi', period: 'Thời đại khám phá', level: 'kho',
      prompt: 'Đoàn thám hiểm đầu tiên hoàn thành chuyến đi vòng quanh Trái Đất do ai hoàn tất sau khi Magellan qua đời?',
      options: ['Juan Sebastián Elcano', 'Christopher Columbus', 'James Cook', 'Vasco da Gama'], answers: ['Juan Sebastián Elcano'],
      hint: 'Ông là thủy thủ người Tây Ban Nha và chỉ huy con tàu Victoria trở về.',
      explanation: 'Magellan khởi xướng chuyến đi, nhưng sau khi ông qua đời ở Philippines, Juan Sebastián Elcano chỉ huy số thủy thủ còn lại về Tây Ban Nha năm 1522.',
      sourceLabel: 'Encyclopaedia Britannica – Ferdinand Magellan', sourceUrl: 'https://www.britannica.com/biography/Ferdinand-Magellan'
    },
    {
      id: 'history-world-012', region: 'the-gioi', period: 'Kỹ thuật in', level: 'thu-thach',
      prompt: 'Johannes Gutenberg nổi tiếng với cải tiến nào ở châu Âu vào thế kỷ XV?',
      options: ['Máy in dùng chữ rời', 'Động cơ hơi nước', 'Kính thiên văn', 'La bàn từ'], answers: ['Máy in dùng chữ rời'],
      hint: 'Cải tiến này giúp sách được nhân bản nhanh và rộng hơn.',
      explanation: 'Gutenberg phát triển hệ thống in cơ khí dùng chữ rời tại châu Âu, góp phần phổ biến sách và tri thức.',
      sourceLabel: 'Encyclopaedia Britannica – Johannes Gutenberg', sourceUrl: 'https://www.britannica.com/biography/Johannes-Gutenberg'
    },
    {
      id: 'history-world-013', region: 'the-gioi', period: 'Cách mạng công nghiệp', level: 'nhe-nhang',
      prompt: 'Cuộc Cách mạng công nghiệp lần thứ nhất bắt đầu ở quốc gia nào?',
      options: ['Anh', 'Pháp', 'Hoa Kỳ', 'Đức'], answers: ['Anh'],
      hint: 'Quốc gia này còn được gọi là Britain hoặc Vương quốc Anh.',
      explanation: 'Cách mạng công nghiệp bắt đầu ở Anh vào thế kỷ XVIII rồi lan sang các quốc gia khác.',
      sourceLabel: 'Encyclopaedia Britannica – Industrial Revolution', sourceUrl: 'https://www.britannica.com/event/Industrial-Revolution'
    },
    {
      id: 'history-world-014', region: 'the-gioi', period: 'Cách mạng công nghiệp', level: 'thu-thach',
      prompt: 'James Watt được biết đến nhiều nhất nhờ cải tiến loại máy nào?',
      options: ['Máy hơi nước', 'Máy bay', 'Điện thoại', 'Máy tính'], answers: ['Máy hơi nước'],
      hint: 'Loại máy này là nguồn động lực quan trọng trong Cách mạng công nghiệp.',
      explanation: 'James Watt có những cải tiến lớn giúp máy hơi nước hoạt động hiệu quả hơn và được ứng dụng rộng rãi.',
      sourceLabel: 'Encyclopaedia Britannica – James Watt', sourceUrl: 'https://www.britannica.com/biography/James-Watt'
    },
    {
      id: 'history-world-015', region: 'the-gioi', period: 'Lịch sử hàng không', level: 'thu-thach',
      prompt: 'Anh em Wright thực hiện chuyến bay có động cơ, có điều khiển thành công vào năm nào?',
      options: ['1903', '1893', '1913', '1923'], answers: ['1903'],
      hint: 'Sự kiện diễn ra tại Kitty Hawk, Hoa Kỳ, vào đầu thế kỷ XX.',
      explanation: 'Ngày 17 tháng 12 năm 1903, Orville và Wilbur Wright thực hiện các chuyến bay có động cơ và có điều khiển tại Kitty Hawk.',
      sourceLabel: 'Smithsonian – Wright Brothers', sourceUrl: 'https://airandspace.si.edu/explore/stories/wright-brothers'
    },
    {
      id: 'history-world-016', region: 'the-gioi', period: 'Chinh phục không gian', level: 'kho',
      prompt: 'Ai là người đầu tiên bước lên Mặt Trăng trong sứ mệnh Apollo 11?',
      options: ['Neil Armstrong', 'Yuri Gagarin', 'Buzz Aldrin', 'John Glenn'], answers: ['Neil Armstrong'],
      hint: 'Ông bước xuống bề mặt Mặt Trăng trước Buzz Aldrin.',
      explanation: 'Ngày 20 tháng 7 năm 1969, Neil Armstrong trở thành người đầu tiên bước lên Mặt Trăng trong sứ mệnh Apollo 11.',
      sourceLabel: 'NASA – Apollo 11', sourceUrl: 'https://www.nasa.gov/mission/apollo-11/'
    }
  ];

  if (Array.isArray(window.IMathHistoryRiddleExtra)) {
    Array.prototype.push.apply(questions, window.IMathHistoryRiddleExtra);
  }

  function normalized(value) {
    return String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/\s+/g, ' ').trim();
  }

  function assertBank() {
    const ids = new Set();
    const prompts = new Set();
    const counts = { 'viet-nam': 0, 'the-gioi': 0, 'nhe-nhang': 0, 'thu-thach': 0, 'kho': 0 };

    if (questions.length !== 250) throw new Error('Ngân hàng lịch sử phải có đúng 250 câu.');

    questions.forEach(function (question, index) {
      const label = 'Câu lịch sử #' + (index + 1);
      if (!question.id || ids.has(question.id)) throw new Error(label + ': ID thiếu hoặc bị trùng.');
      ids.add(question.id);

      const promptKey = normalized(question.prompt);
      if (!promptKey || prompts.has(promptKey)) throw new Error(label + ': câu hỏi thiếu hoặc bị trùng.');
      prompts.add(promptKey);

      if (!regionLabels[question.region] || !levelLabels[question.level]) throw new Error(label + ': phân loại không hợp lệ.');
      counts[question.region] += 1;
      counts[question.level] += 1;

      if (!Array.isArray(question.options) || question.options.length !== 4 || new Set(question.options.map(normalized)).size !== 4) {
        throw new Error(label + ': phải có đúng 4 lựa chọn khác nhau.');
      }
      if (!Array.isArray(question.answers) || question.answers.length !== 1 || !question.options.includes(question.answers[0])) {
        throw new Error(label + ': đáp án phải thuộc danh sách lựa chọn.');
      }
      ['period', 'hint', 'explanation', 'sourceLabel', 'sourceUrl'].forEach(function (field) {
        if (!question[field]) throw new Error(label + ': thiếu trường ' + field + '.');
      });
      if (!/^https:\/\//.test(question.sourceUrl)) throw new Error(label + ': nguồn phải dùng HTTPS.');
    });

    if (counts['viet-nam'] !== 180 || counts['the-gioi'] !== 70) throw new Error('Phân bố khu vực phải là 180 Việt Nam và 70 thế giới.');
  }

  assertBank();

  window.IMathHistoryRiddleBank = Object.freeze({
    version: '1.0.0',
    questions: Object.freeze(questions.map(function (question) { return Object.freeze(question); })),
    regionLabels: Object.freeze(regionLabels),
    levelLabels: Object.freeze(levelLabels)
  });
}());
