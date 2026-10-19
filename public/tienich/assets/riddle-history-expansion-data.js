(function () {
  'use strict';

  /*
   * Ngân hàng mở rộng được dùng cho trang lịch sử công khai sau khi đã qua
   * bốn trang duyệt nội bộ. Dữ liệu vẫn giữ factId để không lặp cùng dữ kiện
   * trong một lượt câu đố.
   */
  const sources = {
    nguyen: {
      label: 'Bảo tàng Lịch sử Quốc gia · Quan chế và tư liệu triều Nguyễn',
      url: 'https://baotanglichsu.vn/vi/Articles/2001/65386/nhung-djiem-djac-biet-cua-quan-che-trieu-nguyen.html'
    },
    tran: {
      label: 'Bảo tàng Lịch sử Quốc gia · Nhà Trần và kháng chiến Nguyên – Mông',
      url: 'https://baotanglichsu.vn/vi/Articles/2001/66703/giai-ma-bi-quyet-djai-thang-nguyen-mong-cua-nha-tran.html'
    },
    le: {
      label: 'Bảo tàng Lịch sử Quốc gia · Di tích Lam Kinh và nhà Hậu Lê',
      url: 'https://baotanglichsu.vn/vi/Articles/2001/64986/di-tich-lich-su-lam-kinh-thanh-hoa.html'
    },
    modern: {
      label: 'Cơ sở dữ liệu quốc gia về văn bản pháp luật · Hiến pháp 1980',
      url: 'https://vbpl.vn/TW/Pages/vbpq-toanvan.aspx?ItemID=2553'
    }
  };

  const collections = {
    nguyen: {
      title: 'Chúa Nguyễn, Tây Sơn và buổi đầu nhà Nguyễn',
      subtitle: 'Từ Nguyễn Hoàng vào Thuận Hóa năm 1558 đến quốc hiệu Việt Nam năm 1804',
      expected: 250,
      variants: 5,
      source: sources.nguyen,
      facts: [
        { id:'ng-001', year:'1558', actor:'Nguyễn Hoàng', event:'Nguyễn Hoàng vào trấn thủ Thuận Hóa', place:'Thuận Hóa', context:'Nhận trách nhiệm ở dải đất phía Nam đầy thử thách, Nguyễn Hoàng mở đầu chặng đường của các chúa Nguyễn.', significance:'mở đầu thời kỳ các chúa Nguyễn gây dựng cơ nghiệp ở Đàng Trong' },
        { id:'ng-002', year:'1570', actor:'Nguyễn Hoàng', event:'Nguyễn Hoàng kiêm trấn thủ Quảng Nam', place:'Quảng Nam', context:'Từ Thuận Hóa, quyền quản lý của Nguyễn Hoàng được mở rộng tới vùng đất giàu tiềm năng ở phía Nam.', significance:'tạo điều kiện để Thuận Hóa – Quảng Nam trở thành một không gian phát triển liên kết' },
        { id:'ng-003', year:'1600', actor:'Nguyễn Hoàng', event:'Nguyễn Hoàng chuyển dinh từ Trà Bát sang Dinh Cát', place:'Dinh Cát, Quảng Trị', context:'Sau khi trở về Thuận Hóa, Nguyễn Hoàng chuyển thủ phủ sang phía đông dinh Ái Tử, một địa điểm được gọi là Dinh Cát.', significance:'tiếp tục củng cố trung tâm cai quản của chúa Nguyễn tại Thuận Hóa' },
        { id:'ng-004', year:'1613', actor:'Nguyễn Phúc Nguyên', event:'Nguyễn Phúc Nguyên kế nghiệp Nguyễn Hoàng', place:'Đàng Trong', context:'Sau khi Nguyễn Hoàng qua đời, quyền điều hành Đàng Trong được chuyển cho người con là Nguyễn Phúc Nguyên.', significance:'duy trì sự kế tục của dòng chúa Nguyễn ở Đàng Trong' },
        { id:'ng-005', year:'1615', actor:'Chúa Nguyễn và thương nhân ngoại quốc', event:'Hội An phát triển thành thương cảng quốc tế', place:'Hội An', context:'Những thuyền buôn từ nhiều nơi cập bến, mang theo tơ lụa, gốm sứ, bạc và những cuộc gặp gỡ văn hóa.', significance:'cho thấy Đàng Trong tham gia mạnh mẽ vào mạng lưới thương mại khu vực' },
        { id:'ng-006', year:'1627', actor:'Trịnh Tráng', event:'Cuộc chiến Trịnh – Nguyễn lần thứ nhất bùng nổ', place:'vùng ranh giới Đàng Ngoài – Đàng Trong', context:'Xung đột kéo dài giữa hai chính quyền đã đưa đất nước vào một thời kỳ chia cắt nhiều biến động.', significance:'mở đầu chuỗi chiến sự Trịnh – Nguyễn kéo dài nhiều thập niên' },
        { id:'ng-007', year:'1630', actor:'Đào Duy Từ', event:'Đào Duy Từ vào phục vụ chúa Nguyễn', place:'Đàng Trong', context:'Một người có tài về quân sự và tổ chức tìm được nơi thi thố ở vùng đất phía Nam.', significance:'bổ sung một mưu sĩ quan trọng cho chính quyền chúa Nguyễn' },
        { id:'ng-008', year:'1631–1634', actor:'Đào Duy Từ', event:'Hệ thống lũy phòng thủ ở Quảng Bình được củng cố', place:'Quảng Bình', context:'Những tuyến lũy đất dài được dựng lên để giữ cửa ngõ phía Bắc của Đàng Trong.', significance:'tạo thế phòng thủ quan trọng trước các đợt tiến công từ phía Bắc' },
        { id:'ng-009', year:'1634', actor:'Nguyễn Phúc Lan', event:'Nguyễn Phúc Lan nối ngôi chúa Nguyễn', place:'Đàng Trong', context:'Giữa bối cảnh chiến sự chưa lắng, việc kế vị cần bảo đảm sự ổn định của bộ máy.', significance:'duy trì quyền điều hành liên tục của chúa Nguyễn' },
        { id:'ng-010', year:'1648', actor:'Nguyễn Phúc Tần', event:'Nguyễn Phúc Tần lên làm chúa', place:'Đàng Trong', context:'Người dân Đàng Trong gọi vị chúa mới bằng tên thân thuộc là Chúa Hiền.', significance:'mở đầu giai đoạn cầm quyền gắn với việc củng cố phòng thủ và quản lý vùng đất phía Nam' },
        { id:'ng-011', year:'1653', actor:'Nguyễn Phúc Tần', event:'Vùng Khánh Hòa được đặt dưới sự quản lý của chúa Nguyễn', place:'Khánh Hòa', context:'Không gian quản lý của Đàng Trong tiếp tục dịch dần xuống phía Nam dọc theo duyên hải.', significance:'mở rộng phạm vi quản lý của chúa Nguyễn ở Nam Trung Bộ' },
        { id:'ng-012', year:'1672', actor:'Chính quyền Trịnh và Nguyễn', event:'Chiến sự Trịnh – Nguyễn tạm ngừng', place:'sông Gianh và vùng lân cận', context:'Sau nhiều đợt giao tranh, hai bên dừng chiến, để lại một ranh giới chính trị tồn tại lâu dài.', significance:'khép lại giai đoạn chiến tranh trực tiếp và kéo dài tình trạng chia cắt Đàng Ngoài – Đàng Trong' },
        { id:'ng-013', year:'1679', actor:'Nhóm người Hoa do Dương Ngạn Địch và Trần Thượng Xuyên dẫn đầu', event:'Người Hoa đến khai phá ở Nam Bộ', place:'Đồng Nai và Mỹ Tho', context:'Những cộng đồng mới mang theo kinh nghiệm buôn bán, khai khẩn và góp phần làm vùng đất phương Nam thêm sôi động.', significance:'góp phần vào quá trình khai phá và phát triển kinh tế – xã hội Nam Bộ' },
        { id:'ng-014', year:'1693', actor:'Chính quyền chúa Nguyễn', event:'Thuận Thành được đặt lại thành một đơn vị hành chính thuộc Đàng Trong', place:'vùng Panduranga cũ', context:'Sau biến động ở cực Nam Trung Bộ, chúa Nguyễn tổ chức lại việc quản lý địa phương.', significance:'thể hiện sự thay đổi trong cách quản lý vùng đất Nam Trung Bộ' },
        { id:'ng-015', year:'1698', actor:'Nguyễn Hữu Cảnh', event:'Nguyễn Hữu Cảnh kinh lược, lập phủ Gia Định', place:'Gia Định', context:'Từ một vùng đất đang được khai phá, Gia Định được tổ chức thành đơn vị hành chính rõ ràng hơn.', significance:'đặt cột mốc quan trọng trong quá trình hình thành hệ thống quản lý ở Nam Bộ' },
        { id:'ng-016', year:'1708', actor:'Mạc Cửu', event:'Mạc Cửu dâng đất Hà Tiên cho chúa Nguyễn', place:'Hà Tiên', context:'Bên bờ biển Tây Nam, Hà Tiên trở thành điểm nối giữa thương mại, phòng thủ và giao lưu khu vực.', significance:'tăng cường sự gắn kết của Hà Tiên với Đàng Trong' },
        { id:'ng-017', year:'1732', actor:'Nguyễn Phúc Chú', event:'Dinh Long Hồ được thành lập', place:'Long Hồ', context:'Vùng sông nước phía Tây Nam được tổ chức thêm một đơn vị quản lý mới.', significance:'củng cố việc quản lý và khai phá khu vực đồng bằng sông Cửu Long' },
        { id:'ng-018', year:'1738', actor:'Nguyễn Phúc Khoát', event:'Nguyễn Phúc Khoát lên làm chúa', place:'Đàng Trong', context:'Vị chúa mới bước vào thời kỳ Đàng Trong có nhiều thay đổi về nghi lễ, tổ chức và đời sống cung đình.', significance:'mở đầu giai đoạn thường gắn với danh xưng Võ Vương' },
        { id:'ng-019', year:'1744', actor:'Nguyễn Phúc Khoát', event:'Nguyễn Phúc Khoát xưng vương', place:'Phú Xuân', context:'Tại Phú Xuân, nghi lễ và cơ cấu triều chính được tổ chức với quy mô trang trọng hơn trước.', significance:'đánh dấu bước phát triển về vị thế và tổ chức của chính quyền chúa Nguyễn' },
        { id:'ng-020', year:'1757', actor:'Chính quyền chúa Nguyễn', event:'Vùng Rạch Giá – Cà Mau được đưa vào phạm vi quản lý', place:'Tây Nam Bộ', context:'Những bờ biển, kênh rạch và vùng rừng ngập nước ở cực Nam dần gắn vào mạng lưới quản lý của Đàng Trong.', significance:'hoàn thiện thêm không gian quản lý ở vùng Tây Nam Bộ' },
        { id:'ng-021', year:'1765', actor:'Nguyễn Phúc Thuần', event:'Nguyễn Phúc Thuần lên làm chúa', place:'Phú Xuân', context:'Triều chính bước vào giai đoạn nhiều khó khăn khi mâu thuẫn xã hội và nội bộ ngày càng tăng.', significance:'mở đầu thời kỳ cuối của chính quyền chúa Nguyễn trước biến động Tây Sơn' },
        { id:'ng-022', year:'1771', actor:'Anh em Tây Sơn', event:'Khởi nghĩa Tây Sơn bùng nổ', place:'Tây Sơn, Bình Định', context:'Từ vùng đất Tây Sơn, một phong trào lớn dấy lên và nhanh chóng làm thay đổi cục diện đất nước.', significance:'mở ra thời kỳ biến động mạnh, tác động tới cả Đàng Trong và Đàng Ngoài' },
        { id:'ng-023', year:'1773', actor:'Quân Tây Sơn', event:'Quy Nhơn được quân Tây Sơn chiếm giữ', place:'Quy Nhơn', context:'Thành Quy Nhơn trở thành một địa điểm then chốt trong những năm đầu của phong trào Tây Sơn.', significance:'tạo bàn đạp quan trọng cho sự phát triển của phong trào Tây Sơn' },
        { id:'ng-024', year:'1774', actor:'Quân Trịnh', event:'Quân Trịnh tiến vào chiếm Phú Xuân', place:'Phú Xuân', context:'Kinh đô của chúa Nguyễn rơi vào tay lực lượng từ phía Bắc trong cơn xoáy biến động.', significance:'làm suy yếu mạnh chính quyền chúa Nguyễn ở trung tâm Phú Xuân' },
        { id:'ng-025', year:'1777', actor:'Quân Tây Sơn', event:'Chính quyền chúa Nguyễn ở Gia Định sụp đổ', place:'Gia Định', context:'Một giai đoạn cầm quyền kéo dài hơn hai thế kỷ của các chúa Nguyễn khép lại trong cảnh biến động.', significance:'đánh dấu sự kết thúc chính quyền chúa Nguyễn, chỉ còn Nguyễn Phúc Ánh tiếp tục gây dựng lực lượng' },
        { id:'ng-026', year:'1780', actor:'Nguyễn Phúc Ánh', event:'Nguyễn Phúc Ánh xưng Nguyễn vương', place:'Gia Định', context:'Trong lúc gây dựng lại lực lượng, Nguyễn Phúc Ánh tạo dấu mốc chính trị mới ở vùng Gia Định.', significance:'thể hiện nỗ lực khôi phục ảnh hưởng của dòng họ Nguyễn sau biến động 1777' },
        { id:'ng-027', year:'1782', actor:'Quân Tây Sơn', event:'Gia Định lại rơi vào biến động quân sự', place:'Gia Định', context:'Những cuộc giằng co lặp lại khiến vùng đất phương Nam nhiều lần đổi chủ.', significance:'cho thấy cục diện quân sự chưa ổn định giữa Tây Sơn và lực lượng Nguyễn Phúc Ánh' },
        { id:'ng-028', year:'1783', actor:'Nguyễn Phúc Ánh', event:'Nguyễn Phúc Ánh rút ra Phú Quốc', place:'Phú Quốc', context:'Trên đảo ngoài khơi, ông và lực lượng thân cận tạm tránh đợt truy kích của đối phương.', significance:'phản ánh giai đoạn rất khó khăn nhưng chưa chấm dứt của lực lượng Nguyễn Phúc Ánh' },
        { id:'ng-029', year:'1784', actor:'Nguyễn Phúc Ánh', event:'Nguyễn Phúc Ánh tìm sự trợ giúp từ Xiêm', place:'Xiêm', context:'Trong thế yếu, ông tìm kiếm sự hỗ trợ từ bên ngoài để trở lại Gia Định.', significance:'tạo bối cảnh dẫn tới cuộc giao chiến lớn trên vùng sông Tiền năm sau' },
        { id:'ng-030', year:'1785', actor:'Nguyễn Huệ', event:'Trận Rạch Gầm – Xoài Mút diễn ra', place:'Tiền Giang', context:'Trên khúc sông nước hiểm trở, Nguyễn Huệ tổ chức thế trận đánh tan lực lượng Xiêm tiến vào.', significance:'là một chiến thắng quân sự nổi bật của phong trào Tây Sơn ở Nam Bộ' },
        { id:'ng-031', year:'1787', actor:'Nguyễn Phúc Ánh và giám mục Bá Đa Lộc', event:'Hiệp ước Versailles được ký kết', place:'Versailles, Pháp', context:'Một văn kiện ngoại giao được ký trong bối cảnh Nguyễn Phúc Ánh đang tìm nguồn hỗ trợ từ bên ngoài.', significance:'cho thấy nỗ lực ngoại giao của Nguyễn Phúc Ánh, dù hiệp ước không được thực hiện đầy đủ' },
        { id:'ng-032', year:'1788', actor:'Nguyễn Phúc Ánh', event:'Lực lượng Nguyễn Phúc Ánh củng cố lại Gia Định', place:'Gia Định', context:'Sau nhiều lần thất thế, bộ máy và quân đội ở phía Nam được tổ chức lại từng bước.', significance:'tạo nền tảng cho các chiến dịch quân sự kéo dài trong thập niên 1790' },
        { id:'ng-033', year:'1790', actor:'Nguyễn Phúc Ánh', event:'Thành Gia Định được xây dựng theo kiểu thành lũy mới', place:'Gia Định', context:'Một công trình phòng thủ quy mô được dựng lên, phản ánh nhu cầu bảo vệ trung tâm quyền lực ở phía Nam.', significance:'củng cố vị thế quân sự – hành chính của Gia Định' },
        { id:'ng-034', year:'1792', actor:'Quang Trung', event:'Quang Trung qua đời', place:'Phú Xuân', context:'Sự ra đi của vị lãnh đạo Tây Sơn tạo ra một bước ngoặt quan trọng trong tương quan lực lượng.', significance:'làm cục diện giữa Tây Sơn và Nguyễn Phúc Ánh thay đổi nhanh hơn' },
        { id:'ng-035', year:'1793', actor:'Nguyễn Phúc Ánh', event:'Nguyễn Phúc Ánh chiếm được Diên Khánh', place:'Diên Khánh', context:'Từ Nam Bộ, lực lượng Nguyễn Phúc Ánh tiến dần lên dải đất Nam Trung Bộ.', significance:'mở rộng bàn đạp quân sự của Nguyễn Phúc Ánh ở phía Bắc Gia Định' },
        { id:'ng-036', year:'1794', actor:'Võ Tánh', event:'Võ Tánh giữ vững thành Diên Khánh', place:'Diên Khánh', context:'Trong một cuộc vây hãm căng thẳng, viên tướng giữ thành để bảo vệ tuyến tiến quân chiến lược.', significance:'cho thấy vai trò của các tướng lĩnh trong việc duy trì thế đứng của lực lượng Nguyễn Phúc Ánh' },
        { id:'ng-037', year:'1799', actor:'Nguyễn Phúc Ánh', event:'Quy Nhơn được chiếm và đổi tên thành Bình Định', place:'Quy Nhơn', context:'Một thành trì quan trọng đổi tên trong bối cảnh chiến sự giữa hai bên vẫn gay gắt.', significance:'tạo thêm lợi thế chiến lược cho lực lượng Nguyễn Phúc Ánh ở Trung Bộ' },
        { id:'ng-038', year:'1800', actor:'Quân Tây Sơn và lực lượng Nguyễn Phúc Ánh', event:'Cuộc vây hãm thành Bình Định kéo dài', place:'Bình Định', context:'Hai bên giằng co quanh một vị trí then chốt, nơi mỗi ngày cầm cự đều có ý nghĩa với cục diện chiến tranh.', significance:'thu hút lực lượng lớn của cả hai phía trong giai đoạn cuối của cuộc tranh chấp' },
        { id:'ng-039', year:'1801', actor:'Nguyễn Phúc Ánh', event:'Nguyễn Phúc Ánh chiếm lại Phú Xuân', place:'Phú Xuân', context:'Kinh đô cũ của chúa Nguyễn trở lại trong tay lực lượng họ Nguyễn sau nhiều năm biến động.', significance:'mở đường cho cuộc tiến quân quyết định ra Bắc' },
        { id:'ng-040', year:'1801', actor:'Võ Tánh và Ngô Tùng Châu', event:'Võ Tánh và Ngô Tùng Châu tuẫn tiết ở thành Bình Định', place:'Bình Định', context:'Trong thế thành không thể giữ lâu hơn, hai tướng chọn ở lại để tạo thời gian cho đại quân rút lui.', significance:'được nhắc đến như một hành động giữ trọn khí tiết trong bối cảnh chiến tranh' },
        { id:'ng-041', year:'1802', actor:'Lê Văn Duyệt', event:'Lê Văn Duyệt dẫn quân tiến vào Thăng Long', place:'Thăng Long', context:'Đoàn quân từ phương Nam tiến ra, đánh dấu bước chuyển quyết định của cục diện cuối thời Tây Sơn.', significance:'góp phần đưa toàn bộ đất nước về dưới quyền kiểm soát của Nguyễn Phúc Ánh' },
        { id:'ng-042', year:'1802', actor:'Nguyễn Văn Trương', event:'Nguyễn Văn Trương chỉ huy lực lượng thủy quân trong chiến dịch ra Bắc', place:'vùng biển và cửa sông Bắc Bộ', context:'Bên cạnh đường bộ, thủy quân giữ vai trò quan trọng trong việc bảo đảm thế tiến công.', significance:'thể hiện vai trò của hải quân trong chiến dịch thống nhất năm 1802' },
        { id:'ng-043', year:'1802', actor:'Nguyễn Văn Thành', event:'Nguyễn Văn Thành được giao trông coi Bắc Thành', place:'Bắc Thành', context:'Sau khi cục diện thay đổi, việc ổn định và quản lý vùng đất phía Bắc trở thành nhiệm vụ cấp thiết.', significance:'góp phần thiết lập bộ máy quản lý ở miền Bắc đầu triều Gia Long' },
        { id:'ng-044', year:'1802', actor:'Nguyễn Phúc Ánh', event:'Nguyễn Phúc Ánh lên ngôi, lấy niên hiệu Gia Long', place:'Phú Xuân', context:'Sau nhiều năm chinh chiến, Nguyễn Phúc Ánh lên ngôi và mở đầu triều đại Nguyễn.', significance:'đánh dấu sự ra đời của nhà Nguyễn với niên hiệu Gia Long' },
        { id:'ng-045', year:'1803', actor:'Triều Gia Long', event:'Triều Gia Long tổ chức lại việc quản lý đất nước sau thống nhất', place:'Phú Xuân và các trấn thành', context:'Sau biến động kéo dài, việc sắp xếp bộ máy và ổn định đời sống là công việc cấp thiết của triều đại mới.', significance:'tạo nền cho việc quản trị một quốc gia thống nhất' },
        { id:'ng-046', year:'1804', actor:'Triều Gia Long', event:'Triều Gia Long ban quốc hiệu Việt Nam', place:'Phú Xuân', context:'Tại kinh đô, triều đình chọn và công bố quốc hiệu Việt Nam cho quốc gia.', significance:'là mốc cần phân biệt với việc Gia Long lên ngôi năm 1802' },
        { id:'ng-047', year:'1804', actor:'Gia Long', event:'Lễ ban quốc hiệu Việt Nam được tổ chức', place:'Phú Xuân', context:'Tại kinh đô, quốc hiệu Việt Nam được công bố trong nghi lễ chính thức của triều đình.', significance:'khẳng định danh xưng Việt Nam trong đời sống chính trị của triều Nguyễn' },
        { id:'ng-048', year:'1805', actor:'Triều Gia Long', event:'Kinh thành Phú Xuân được tiếp tục xây dựng và chỉnh đốn', place:'Phú Xuân', context:'Một kinh đô thống nhất cần có thành quách, cơ quan và không gian nghi lễ phù hợp với triều đại mới.', significance:'củng cố vai trò của Phú Xuân – Huế là trung tâm của nhà Nguyễn' },
        { id:'ng-049', year:'1806', actor:'Gia Long', event:'Gia Long làm lễ đăng quang Hoàng đế', place:'điện Thái Hòa, Phú Xuân', context:'Nghi lễ tại kinh đô biểu thị sự hoàn tất về mặt nghi thức của một triều đại mới.', significance:'khẳng định vị thế hoàng đế của Gia Long trong hệ thống quân chủ' },
        { id:'ng-050', year:'1558–1804', actor:'Các chúa Nguyễn, Tây Sơn và Gia Long', event:'Một thời kỳ chuyển động từ khai phá, chia cắt đến thống nhất', place:'Đàng Trong và toàn cõi Việt Nam', context:'Gần hai thế kỷ rưỡi, lịch sử chứng kiến mở đất, thương cảng, chiến tranh và tái lập một triều đại thống nhất.', significance:'giúp nhìn giai đoạn như một dòng chảy lịch sử nhiều lớp, không chỉ là các mốc chiến trận' }
      ]
    },
    tran: {
      title: 'Nhà Trần và Trần Hưng Đạo',
      subtitle: 'Triều Trần, tinh thần Đông A và ba lần kháng chiến chống Nguyên – Mông',
      expected: 100,
      variants: 4,
      source: sources.tran,
      facts: [
        { id:'tr-001', year:'1225', actor:'Trần Cảnh', event:'Trần Cảnh lên ngôi, mở đầu nhà Trần', place:'Thăng Long', context:'Từ cuộc chuyển giao ngôi vua, một triều đại mới bắt đầu trên đất Đại Việt.', significance:'đánh dấu sự mở đầu của nhà Trần' },
        { id:'tr-002', year:'1226', actor:'Trần Thái Tông', event:'Trần Thái Tông chính thức điều hành triều Trần', place:'Thăng Long', context:'Vị vua trẻ trở thành gương mặt trung tâm trong những năm đầu xây dựng triều đại.', significance:'đặt nền cho việc củng cố chính quyền nhà Trần' },
        { id:'tr-003', year:'1258', actor:'Quân dân nhà Trần', event:'Cuộc kháng chiến chống quân Mông Cổ lần thứ nhất', place:'Đông Bộ Đầu', context:'Sau khi tạm rời kinh thành để bảo toàn lực lượng, quân Trần phản công khi thời cơ đến.', significance:'mở đầu truyền thống ứng phó linh hoạt của nhà Trần trước ngoại xâm' },
        { id:'tr-004', year:'1258', actor:'Trần Thái Tông', event:'Quân Trần phản công và giành lại Thăng Long', place:'Thăng Long', context:'Kinh thành được trở về trong niềm tin rằng sức dân và cách đánh phù hợp có thể vượt qua khó khăn.', significance:'khẳng định hiệu quả của chiến lược chủ động bảo toàn lực lượng' },
        { id:'tr-005', year:'1278', actor:'Trần Nhân Tông', event:'Trần Nhân Tông lên ngôi', place:'Thăng Long', context:'Một vị vua trẻ bước lên ngai vàng khi thử thách từ phương Bắc đang ngày một rõ nét.', significance:'mở đầu triều vua gắn với hai cuộc kháng chiến lớn chống Nguyên' },
        { id:'tr-006', year:'1282', actor:'Trần Nhân Tông và các vương hầu', event:'Hội nghị Bình Than được tổ chức', place:'Bình Than', context:'Trên bến sông, triều đình bàn kế sách giữ nước trước nguy cơ chiến tranh.', significance:'thể hiện sự chuẩn bị của nhà Trần trước cuộc xâm lược lớn' },
        { id:'tr-007', year:'1284', actor:'Trần Hưng Đạo', event:'Trần Quốc Tuấn được giao quyền thống lĩnh quân đội', place:'Đại Việt', context:'Trong lúc khói lửa sắp đến, triều đình trao trách nhiệm lớn cho vị tướng tài ba.', significance:'đặt Trần Hưng Đạo ở vị trí chỉ huy chủ chốt trong kháng chiến' },
        { id:'tr-008', year:'1284', actor:'Các bô lão Đại Việt', event:'Hội nghị Diên Hồng được triệu tập', place:'Thăng Long', context:'Tiếng hô quyết tâm của các bô lão trở thành biểu tượng của ý chí đồng lòng giữ nước.', significance:'thể hiện tinh thần đoàn kết của triều đình và nhân dân' },
        { id:'tr-009', year:'1284', actor:'Trần Hưng Đạo', event:'Hịch tướng sĩ được truyền đọc', place:'doanh trại quân Trần', context:'Lời văn tha thiết nhắc người cầm quân về danh dự, trách nhiệm và vận mệnh đất nước.', significance:'cổ vũ tinh thần chiến đấu và ý thức trách nhiệm của tướng sĩ' },
        { id:'tr-010', year:'1285', actor:'Quân dân nhà Trần', event:'Cuộc kháng chiến chống Nguyên lần thứ hai', place:'Đại Việt', context:'Một cuộc tiến công lớn từ phương Bắc đặt đất nước trước thử thách khốc liệt.', significance:'là giai đoạn nổi bật của nghệ thuật quân sự và sức mạnh toàn dân nhà Trần' },
        { id:'tr-011', year:'1285', actor:'Trần Nhật Duật', event:'Chiến thắng Hàm Tử', place:'Hàm Tử', context:'Trên bến sông, quân Trần phối hợp phản công, mở đầu cho chuỗi thắng lợi quan trọng.', significance:'góp phần xoay chuyển cục diện kháng chiến năm 1285' },
        { id:'tr-012', year:'1285', actor:'Trần Quang Khải', event:'Chiến thắng Chương Dương', place:'Chương Dương', context:'Những trận đánh trên sông và bến bãi đưa khí thế phản công lan rộng.', significance:'góp phần giải phóng kinh thành Thăng Long' },
        { id:'tr-013', year:'1285', actor:'Trần Hưng Đạo', event:'Chiến thắng Tây Kết', place:'Tây Kết', context:'Quân Trần đánh vào lực lượng chủ lực của đối phương trong giai đoạn phản công.', significance:'làm suy giảm nghiêm trọng thế tiến công của quân Nguyên' },
        { id:'tr-014', year:'1285', actor:'Trần Bình Trọng', event:'Trần Bình Trọng hi sinh trong kháng chiến', place:'mặt trận chống Nguyên', context:'Lời nói nổi tiếng về việc thà làm quỷ nước Nam còn hơn làm vương đất Bắc được lưu truyền như khí tiết.', significance:'trở thành biểu tượng của lòng trung nghĩa và ý chí giữ nước' },
        { id:'tr-015', year:'1285', actor:'Trần Quốc Toản', event:'Trần Quốc Toản tham gia kháng chiến khi còn trẻ', place:'Đại Việt', context:'Hình ảnh chàng thiếu niên bóp nát quả cam vì không được dự bàn việc nước đi vào ký ức nhiều thế hệ.', significance:'gợi nhắc tinh thần yêu nước của tuổi trẻ' },
        { id:'tr-016', year:'1287', actor:'Quân Nguyên', event:'Cuộc xâm lược Đại Việt lần thứ ba bắt đầu', place:'biên giới phía Bắc', context:'Đối phương trở lại với lực lượng lớn và cả đoàn thuyền lương, quyết tâm tạo sức ép lâu dài.', significance:'mở đầu thử thách cuối cùng và lớn nhất của nhà Trần trước quân Nguyên' },
        { id:'tr-017', year:'1287', actor:'Trần Khánh Dư', event:'Trận Vân Đồn đánh vào đoàn thuyền lương', place:'Vân Đồn', context:'Không chỉ đánh quân, quân Trần còn chọn đánh vào nguồn tiếp tế trên biển.', significance:'làm đối phương thiếu lương thực và rơi vào thế bị động' },
        { id:'tr-018', year:'1288', actor:'Trần Hưng Đạo', event:'Chiến thắng Bạch Đằng', place:'sông Bạch Đằng', context:'Những bãi cọc, con nước và cách nhử địch tạo nên một trận quyết chiến nổi tiếng.', significance:'kết thúc thắng lợi cuộc kháng chiến chống Nguyên lần thứ ba' },
        { id:'tr-019', year:'1288', actor:'Ô Mã Nhi', event:'Ô Mã Nhi bị bắt sau trận Bạch Đằng', place:'sông Bạch Đằng', context:'Viên tướng chỉ huy thủy quân của đối phương không thoát được khỏi thế trận trên sông.', significance:'cho thấy thắng lợi quyết định của quân Trần trên mặt trận thủy chiến' },
        { id:'tr-020', year:'1288', actor:'Trần Nhân Tông', event:'Lễ báo tiệp sau chiến thắng Bạch Đằng', place:'Chiêu lăng', context:'Sau ngày khải hoàn, nhà vua cùng quần thần về báo tin thắng trận với tổ tiên.', significance:'thể hiện đạo lý nhớ nguồn và ý thức gắn chiến thắng với sức mạnh của cả quốc gia' },
        { id:'tr-021', year:'thế kỷ XIII', actor:'Nhà Trần', event:'Chiến lược vườn không nhà trống được vận dụng', place:'nhiều vùng của Đại Việt', context:'Khi đối phương mạnh, người dân và quân đội chủ động rút lui, không để lương thực rơi vào tay địch.', significance:'làm giảm nguồn tiếp tế và kéo giãn sức mạnh của đối phương' },
        { id:'tr-022', year:'thế kỷ XIII', actor:'Trần Hưng Đạo', event:'Vạn Kiếp trở thành căn cứ quân sự quan trọng', place:'Vạn Kiếp', context:'Nơi giao nhau của nhiều đường thủy, đường bộ là điểm tựa để điều quân và tính kế.', significance:'cho thấy cách lựa chọn địa bàn có ý nghĩa chiến lược trong kháng chiến' },
        { id:'tr-023', year:'1293', actor:'Trần Nhân Tông', event:'Trần Nhân Tông nhường ngôi cho Trần Anh Tông', place:'Thăng Long', context:'Sau những năm giữ nước, nhà vua chuyển giao ngai vàng và dần hướng tới đời sống tu hành.', significance:'mở đầu vai trò mới của Trần Nhân Tông trong đời sống văn hóa – Phật giáo' },
        { id:'tr-024', year:'1300', actor:'Trần Hưng Đạo', event:'Trần Hưng Đạo qua đời', place:'Vạn Kiếp', context:'Vị Quốc công Tiết chế khép lại cuộc đời, để lại nhiều bài học về lòng dân và nghệ thuật giữ nước.', significance:'khép lại cuộc đời của một danh tướng tiêu biểu trong lịch sử Việt Nam' },
        { id:'tr-025', year:'1308', actor:'Trần Nhân Tông', event:'Trần Nhân Tông qua đời', place:'Yên Tử', context:'Từ một vị vua lãnh đạo kháng chiến, ông trở thành người gắn với Thiền phái Trúc Lâm.', significance:'gợi nhắc sự kết hợp giữa trách nhiệm với đất nước và đời sống văn hóa tinh thần thời Trần' }
      ]
    },
    le: {
      title: 'Nhà Lê: từ Lam Sơn đến Hồng Đức',
      subtitle: 'Những dấu mốc tiêu biểu của nhà Lê sơ và thời Lê Trung Hưng',
      expected: 100,
      variants: 4,
      source: sources.le,
      facts: [
        { id:'le-001', year:'1418', actor:'Lê Lợi', event:'Khởi nghĩa Lam Sơn bùng nổ', place:'Lam Sơn, Thanh Hóa', context:'Từ vùng núi rừng Lam Sơn, một cuộc khởi nghĩa bền bỉ bắt đầu trong điều kiện rất gian khó.', significance:'mở đầu phong trào dẫn tới sự ra đời của nhà Lê sơ' },
        { id:'le-002', year:'1418', actor:'Lê Lợi', event:'Lê Lợi xưng Bình Định vương', place:'Lam Sơn', context:'Danh xưng ấy gắn với khát vọng dẹp loạn, lập lại cuộc sống yên ổn cho đất nước.', significance:'xác lập vai trò lãnh đạo của Lê Lợi trong phong trào Lam Sơn' },
        { id:'le-003', year:'1424', actor:'Lê Lợi và Nguyễn Chích', event:'Nghĩa quân chuyển hướng vào Nghệ An', place:'Nghệ An', context:'Một thay đổi chiến lược đưa nghĩa quân đến vùng đất giàu nhân lực, lương thực và sự ủng hộ.', significance:'giúp nghĩa quân Lam Sơn tạo thế phát triển mới' },
        { id:'le-004', year:'1425', actor:'Nghĩa quân Lam Sơn', event:'Tân Bình và Thuận Hóa được giải phóng', place:'Tân Bình và Thuận Hóa', context:'Từ Nghệ An, phong trào lan rộng về phía Nam, tạo một vùng hậu phương rộng lớn.', significance:'mở rộng địa bàn và tăng nguồn lực cho nghĩa quân' },
        { id:'le-005', year:'1426', actor:'Nghĩa quân Lam Sơn', event:'Chiến thắng Tốt Động – Chúc Động', place:'Tốt Động – Chúc Động', context:'Một trận đánh lớn làm thay đổi thế chủ động, khiến đối phương ở Đông Quan lâm vào khó khăn.', significance:'tạo bước ngoặt cho cuộc khởi nghĩa Lam Sơn ở Bắc Bộ' },
        { id:'le-006', year:'1427', actor:'Nghĩa quân Lam Sơn', event:'Chiến thắng Chi Lăng – Xương Giang', place:'Lạng Sơn và Bắc Giang', context:'Các cửa ải và thành lũy trở thành nơi chặn bước viện binh, khép lại hy vọng xoay chuyển của đối phương.', significance:'góp phần quyết định đưa khởi nghĩa Lam Sơn đến thắng lợi' },
        { id:'le-007', year:'1427', actor:'Lê Lợi', event:'Hội thề Đông Quan được tổ chức', place:'Đông Quan', context:'Sau chiến thắng, một cuộc hòa giải có điều kiện cho phép đối phương rút quân về nước.', significance:'thể hiện chủ trương kết thúc chiến tranh để sớm lập lại hòa bình' },
        { id:'le-008', year:'1428', actor:'Lê Lợi', event:'Lê Lợi lên ngôi Lê Thái Tổ', place:'Đông Kinh', context:'Ngày khởi đầu triều đại mới đến sau một chặng đường kháng chiến nhiều mất mát.', significance:'đánh dấu sự thành lập nhà Lê sơ' },
        { id:'le-009', year:'1428', actor:'Nguyễn Trãi', event:'Bình Ngô đại cáo được công bố', place:'Đông Kinh', context:'Bản cáo lớn vang lên như lời tuyên bố về nền độc lập và ý chí của quốc gia.', significance:'là áng văn chính luận kiệt xuất và tuyên ngôn độc lập của thời Lê sơ' },
        { id:'le-010', year:'1433', actor:'Lê Thái Tổ', event:'Lê Thái Tổ qua đời', place:'Lam Kinh', context:'Linh cữu nhà vua được đưa về vùng đất phát tích Lam Sơn.', significance:'gắn Lam Kinh với vai trò khu lăng mộ và ký ức của nhà Lê sơ' },
        { id:'le-011', year:'thế kỷ XV', actor:'Nhà Lê sơ', event:'Lam Kinh được xem là kinh đô thứ hai', place:'Lam Kinh, Thanh Hóa', context:'Bên cạnh Đông Kinh, quê hương Lam Sơn giữ một vị trí đặc biệt trong nghi lễ và ký ức triều đại.', significance:'thể hiện sự trân trọng cội nguồn của nhà Lê' },
        { id:'le-012', year:'1460', actor:'Lê Thánh Tông', event:'Lê Thánh Tông lên ngôi', place:'Thăng Long', context:'Triều đại bước vào giai đoạn phát triển mạnh về quản trị, giáo dục, luật pháp và văn hóa.', significance:'mở đầu thời kỳ thịnh trị thường được gọi là thời Hồng Đức' },
        { id:'le-013', year:'1471', actor:'Lê Thánh Tông', event:'Chiến dịch về phía Nam diễn ra', place:'vùng đất Champa', context:'Một cuộc chinh phạt lớn làm thay đổi tương quan chính trị ở miền Trung.', significance:'tác động sâu rộng đến lịch sử khu vực Trung Bộ' },
        { id:'le-014', year:'1479', actor:'Ngô Sĩ Liên', event:'Đại Việt sử ký toàn thư được hoàn thành', place:'Thăng Long', context:'Những trang sử được biên soạn, nối lại câu chuyện dựng nước và giữ nước của nhiều thời đại.', significance:'là bộ sử lớn có giá trị của lịch sử Việt Nam' },
        { id:'le-015', year:'1483', actor:'Triều Lê Thánh Tông', event:'Quốc triều hình luật được ban hành và hoàn thiện', place:'Đại Việt', context:'Luật pháp được hệ thống hóa để điều chỉnh nhiều mặt của đời sống xã hội.', significance:'thường được gọi là Luật Hồng Đức, phản ánh bước phát triển pháp luật thời Lê sơ' },
        { id:'le-016', year:'1484', actor:'Lê Thánh Tông', event:'Bia tiến sĩ ở Văn Miếu được dựng', place:'Văn Miếu – Quốc Tử Giám', context:'Tên tuổi những người đỗ cao được khắc trên đá để nhắc về giá trị của học vấn.', significance:'tôn vinh hiền tài và truyền thống khoa bảng' },
        { id:'le-017', year:'1484', actor:'Thân Nhân Trung', event:'Câu “Hiền tài là nguyên khí của quốc gia” được khắc trên bia tiến sĩ', place:'Văn Miếu – Quốc Tử Giám', context:'Một câu nói ngắn nhưng nhấn mạnh vai trò của người có học và có tài với đất nước.', significance:'trở thành tư tưởng nổi tiếng về trọng dụng nhân tài' },
        { id:'le-018', year:'1495', actor:'Lê Thánh Tông và Tao Đàn', event:'Tao Đàn nhị thập bát tú phát triển', place:'Thăng Long', context:'Nhà vua cùng các văn thần tạo nên một không gian thơ ca sôi nổi trong cung đình.', significance:'cho thấy đời sống văn học phát triển dưới thời Hồng Đức' },
        { id:'le-019', year:'1527', actor:'Mạc Đăng Dung', event:'Nhà Mạc thay nhà Lê sơ', place:'Thăng Long', context:'Sau nhiều biến động nội bộ, quyền lực ở kinh thành chuyển sang một triều đại khác.', significance:'khép lại giai đoạn nhà Lê sơ' },
        { id:'le-020', year:'1533', actor:'Lê Trang Tông', event:'Nhà Lê được phục hồi ở Thanh Hóa', place:'Thanh Hóa', context:'Từ vùng đất từng là căn cứ Lam Sơn, một nhánh nhà Lê được dựng lại.', significance:'mở đầu thời Lê Trung Hưng' },
        { id:'le-021', year:'1592', actor:'Quân Lê – Trịnh', event:'Thăng Long được thu hồi từ nhà Mạc', place:'Thăng Long', context:'Kinh thành trở lại dưới danh nghĩa nhà Lê, dù thực quyền ngày càng nằm trong tay các chúa Trịnh.', significance:'củng cố vị thế của nhà Lê Trung Hưng ở Bắc Bộ' },
        { id:'le-022', year:'thế kỷ XVII', actor:'Vua Lê và chúa Trịnh', event:'Mô hình “vua Lê – chúa Trịnh” hình thành', place:'Đàng Ngoài', context:'Nhà vua giữ ngôi vị biểu tượng, còn quyền điều hành thực tế tập trung nhiều ở phủ chúa.', significance:'phản ánh đặc điểm chính trị riêng của Đàng Ngoài thời Lê Trung Hưng' },
        { id:'le-023', year:'1786', actor:'Quân Tây Sơn', event:'Quân Tây Sơn tiến ra Thăng Long', place:'Thăng Long', context:'Cục diện chính trị Bắc Hà thay đổi rất nhanh khi lực lượng Tây Sơn xuất hiện.', significance:'làm lung lay trật tự vua Lê – chúa Trịnh đã tồn tại lâu năm' },
        { id:'le-024', year:'1788', actor:'Lê Chiêu Thống', event:'Lê Chiêu Thống rời Thăng Long sang cầu viện nhà Thanh', place:'biên giới phía Bắc', context:'Trong cơn biến động, vị vua cuối thời Lê tìm kiếm sự hỗ trợ từ bên ngoài.', significance:'trở thành một mắt xích dẫn tới cuộc xung đột đầu năm 1789' },
        { id:'le-025', year:'1789', actor:'Nhà Lê Trung Hưng', event:'Nhà Lê Trung Hưng chấm dứt', place:'Thăng Long', context:'Sau nhiều thế kỷ tồn tại với những thăng trầm, một triều đại đi đến hồi kết.', significance:'khép lại một giai đoạn dài trong lịch sử quân chủ Việt Nam' }
      ]
    },
    modern: {
      title: 'Việt Nam 1954–1975',
      subtitle: 'Từ Hiệp định Giơ-ne-vơ đến ngày đất nước thống nhất',
      expected: 100,
      variants: 4,
      source: sources.modern,
      facts: [
        { id:'m-001', year:'1954', actor:'Các bên tham dự Hội nghị Giơ-ne-vơ', event:'Hiệp định Giơ-ne-vơ về Đông Dương được ký kết', place:'Giơ-ne-vơ, Thụy Sĩ', context:'Sau chín năm kháng chiến chống Pháp, các bên ngồi vào bàn đàm phán để lập lại hòa bình ở Đông Dương.', significance:'ghi nhận các nguyên tắc về độc lập, chủ quyền, thống nhất và toàn vẹn lãnh thổ của Việt Nam' },
        { id:'m-002', year:'1954', actor:'Hiệp định Giơ-ne-vơ', event:'Vĩ tuyến 17 được xác định là giới tuyến quân sự tạm thời', place:'khu vực sông Bến Hải', context:'Một đường phân định tạm thời được đặt ra cho việc tập kết, chuyển quân sau chiến tranh.', significance:'cần hiểu đây không phải là biên giới quốc gia vĩnh viễn' },
        { id:'m-003', year:'1954–1955', actor:'Người dân hai miền', event:'Tập kết và chuyển quân sau Hiệp định Giơ-ne-vơ', place:'hai miền Việt Nam', context:'Nhiều gia đình trải qua những chuyến đi xa, mang theo hy vọng ngày đoàn tụ.', significance:'phản ánh hoàn cảnh chia cắt tạm thời của đất nước sau hiệp định' },
        { id:'m-004', year:'1959', actor:'Đoàn 559', event:'Đoàn 559 được thành lập để mở tuyến chi viện', place:'dãy Trường Sơn', context:'Con đường xuyên núi rừng dần thành mạch nối hậu phương với chiến trường.', significance:'đặt nền cho hệ thống vận tải chiến lược Trường Sơn – đường Hồ Chí Minh' },
        { id:'m-005', year:'1960', actor:'Mặt trận Dân tộc Giải phóng miền Nam Việt Nam', event:'Mặt trận được thành lập', place:'miền Nam Việt Nam', context:'Một tổ chức chính trị ra đời trong bối cảnh tình hình miền Nam có nhiều biến động.', significance:'trở thành một lực lượng quan trọng trong đời sống chính trị và chiến tranh ở miền Nam' },
        { id:'m-006', year:'1961–1965', actor:'Hoa Kỳ và chính quyền miền Nam', event:'Chiến lược “chiến tranh đặc biệt” được triển khai', place:'miền Nam Việt Nam', context:'Chiến tranh dựa nhiều vào cố vấn, trang bị và lực lượng bản địa trong bối cảnh can dự của Hoa Kỳ tăng lên.', significance:'đánh dấu một giai đoạn leo thang can dự của Hoa Kỳ' },
        { id:'m-007', year:'1964', actor:'Hoa Kỳ', event:'Sự kiện Vịnh Bắc Bộ làm chiến tranh leo thang', place:'Vịnh Bắc Bộ', context:'Một sự kiện trên biển được dùng làm căn cứ để Hoa Kỳ mở rộng hoạt động quân sự ở Việt Nam.', significance:'dẫn tới sự gia tăng mạnh mẽ can dự quân sự của Hoa Kỳ' },
        { id:'m-008', year:'1965', actor:'Thủy quân lục chiến Hoa Kỳ', event:'Lính thủy đánh bộ Hoa Kỳ đổ bộ vào Đà Nẵng', place:'Đà Nẵng', context:'Sự xuất hiện của lực lượng chiến đấu trực tiếp đánh dấu một bước leo thang mới của chiến tranh.', significance:'mở đầu giai đoạn Hoa Kỳ đưa quân chiến đấu trực tiếp vào miền Nam' },
        { id:'m-009', year:'1965–1968', actor:'Hoa Kỳ', event:'Chiến lược “chiến tranh cục bộ” được tiến hành', place:'miền Nam Việt Nam', context:'Quân đội Hoa Kỳ tham chiến trực tiếp với quy mô ngày càng lớn.', significance:'thể hiện mức độ can dự quân sự cao của Hoa Kỳ trong chiến tranh' },
        { id:'m-010', year:'1968', actor:'Các lực lượng tham chiến ở miền Nam', event:'Cuộc Tổng tiến công và nổi dậy Tết Mậu Thân diễn ra', place:'nhiều đô thị và địa phương miền Nam', context:'Trong những ngày đầu năm mới, chiến sự bùng lên tại nhiều địa điểm, gây chấn động dư luận.', significance:'tác động mạnh đến cách nhìn của công chúng Hoa Kỳ và quốc tế về cuộc chiến' },
        { id:'m-011', year:'1968', actor:'Các bên liên quan', event:'Đàm phán Pa-ri về Việt Nam bắt đầu', place:'Pa-ri, Pháp', context:'Song song với chiến trường, một mặt trận ngoại giao dài ngày được mở ra.', significance:'mở đầu tiến trình đàm phán dẫn tới Hiệp định Pa-ri năm 1973' },
        { id:'m-012', year:'1969', actor:'Hồ Chí Minh', event:'Chủ tịch Hồ Chí Minh qua đời', place:'Hà Nội', context:'Tin buồn đến trong lúc cuộc chiến vẫn đang diễn ra khốc liệt.', significance:'là một mất mát lớn trong đời sống chính trị và tinh thần của Việt Nam' },
        { id:'m-013', year:'1969', actor:'Chính phủ Cách mạng lâm thời Cộng hòa miền Nam Việt Nam', event:'Chính phủ Cách mạng lâm thời được thành lập', place:'miền Nam Việt Nam', context:'Một thiết chế chính trị mới xuất hiện trong bối cảnh đàm phán và chiến sự song song.', significance:'trở thành một bên tham gia trong tiến trình ngoại giao về Việt Nam' },
        { id:'m-014', year:'1969–1973', actor:'Hoa Kỳ', event:'Chính sách “Việt Nam hóa chiến tranh” được thực hiện', place:'miền Nam Việt Nam', context:'Hoa Kỳ từng bước rút quân, đồng thời chuyển thêm trách nhiệm chiến đấu cho quân đội Việt Nam Cộng hòa.', significance:'làm thay đổi cách Hoa Kỳ tham dự cuộc chiến' },
        { id:'m-015', year:'1972', actor:'Các lực lượng ở chiến trường miền Nam', event:'Cuộc tiến công chiến lược năm 1972 diễn ra', place:'Quảng Trị và nhiều chiến trường', context:'Chiến sự quy mô lớn bùng lên, kéo theo những thay đổi đáng kể về quân sự và ngoại giao.', significance:'tạo sức ép mới đối với tiến trình đàm phán Pa-ri' },
        { id:'m-016', year:'12/1972', actor:'Không quân Hoa Kỳ và lực lượng phòng không miền Bắc', event:'Trận đánh 12 ngày đêm trên bầu trời Hà Nội – Hải Phòng', place:'Hà Nội và Hải Phòng', context:'Bầu trời đêm rực sáng bởi bom đạn và mạng lưới phòng không; người dân trải qua những ngày rất khắc nghiệt.', significance:'là một mốc quân sự – chính trị quan trọng ngay trước khi Hiệp định Pa-ri được ký' },
        { id:'m-017', year:'27/1/1973', actor:'Các bên tham gia đàm phán', event:'Hiệp định Pa-ri về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam được ký', place:'Pa-ri, Pháp', context:'Sau nhiều năm thương lượng, văn kiện được ký với kỳ vọng giảm chiến sự và tạo cơ hội cho hòa bình.', significance:'là mốc ngoại giao quan trọng của giai đoạn 1954–1975' },
        { id:'m-018', year:'1973', actor:'Quân đội Hoa Kỳ', event:'Quân đội Hoa Kỳ rút khỏi Việt Nam', place:'miền Nam Việt Nam', context:'Sự rút quân diễn ra theo những thỏa thuận được ký tại Pa-ri.', significance:'làm tương quan lực lượng trên chiến trường thay đổi rõ rệt' },
        { id:'m-019', year:'1974', actor:'Các lực lượng tại chiến trường miền Nam', event:'Chiến sự Phước Long diễn ra', place:'Phước Long', context:'Một tỉnh ở miền Đông Nam Bộ trở thành nơi cho thấy cục diện quân sự đang chuyển động.', significance:'là một dấu hiệu quan trọng trước chiến dịch mùa Xuân 1975' },
        { id:'m-020', year:'3/1975', actor:'Quân Giải phóng', event:'Chiến dịch Tây Nguyên mở đầu bằng trận Buôn Ma Thuột', place:'Buôn Ma Thuột', context:'Một đòn đánh vào đô thị then chốt tạo ra hiệu ứng dây chuyền trên chiến trường.', significance:'mở đầu cuộc Tổng tiến công mùa Xuân 1975' },
        { id:'m-021', year:'3/1975', actor:'Các lực lượng tại miền Trung', event:'Huế và Đà Nẵng lần lượt được tiếp quản', place:'Huế và Đà Nẵng', context:'Cục diện ở miền Trung thay đổi nhanh trong những ngày cuối tháng ba.', significance:'tạo đà chiến lược để tiến về phía Nam' },
        { id:'m-022', year:'26/4/1975', actor:'Các cánh quân tiến về Sài Gòn', event:'Chiến dịch Hồ Chí Minh bắt đầu', place:'Sài Gòn – Gia Định', context:'Năm cánh quân cùng hướng về đô thị lớn nhất miền Nam trong thời khắc quyết định.', significance:'là chiến dịch cuối cùng dẫn tới ngày thống nhất đất nước' },
        { id:'m-023', year:'30/4/1975', actor:'Nhân dân Việt Nam', event:'Đất nước thống nhất', place:'Sài Gòn – Gia Định và cả nước', context:'Trưa 30 tháng 4, chiến tranh kết thúc; một giai đoạn lịch sử dài với nhiều mất mát khép lại.', significance:'là mốc thống nhất đất nước, non sông thu về một mối' },
        { id:'m-024', year:'1954–1975', actor:'Người dân Việt Nam', event:'Đời sống trong thời kỳ chia cắt và chiến tranh', place:'cả hai miền đất nước', context:'Bên cạnh những sự kiện lớn là những gia đình xa cách, những lớp học, nhà máy, cánh đồng và ước mong hòa bình.', significance:'nhắc người học nhìn lịch sử từ trải nghiệm con người, không chỉ từ các chiến dịch' },
        { id:'m-025', year:'1954–1975', actor:'Khát vọng hòa bình và thống nhất', event:'Ý chí thống nhất đất nước xuyên suốt giai đoạn', place:'Việt Nam', context:'Dù ở nhiều hoàn cảnh khác nhau, mong muốn về một đất nước hòa bình và liền một dải luôn hiện diện.', significance:'là sợi chỉ đỏ để tiếp cận giai đoạn lịch sử nhạy cảm này bằng ngôn ngữ tôn trọng và nhân văn' }
      ]
    }
  };

  function clone(value) { return JSON.parse(JSON.stringify(value)); }
  function choices(facts, field, correct, offset) {
    const values = facts.map(function (item) { return item[field]; }).filter(function (item) { return item !== correct; });
    const result = [correct];
    for (let index = 0; result.length < 4 && index < values.length; index += 1) {
      const candidate = values[(offset + index) % values.length];
      if (!result.includes(candidate)) result.push(candidate);
    }
    return result.sort(function (left, right) {
      const leftCode = String(left).split('').reduce(function (sum, char) { return sum + char.charCodeAt(0); }, offset);
      const rightCode = String(right).split('').reduce(function (sum, char) { return sum + char.charCodeAt(0); }, offset);
      return leftCode - rightCode;
    });
  }

  function concealAnswer(text, answer, replacement) {
    const escaped = String(answer).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return String(text).replace(new RegExp(escaped, 'gi'), replacement).replace(/\s+/g, ' ').trim();
  }

  function makeQuestion(collection, fact, variant, factIndex) {
    const facts = collection.facts;
    const offset = factIndex * 11 + variant * 17;
    const level = ['nhe-nhang', 'thu-thach', 'kho'][variant % 3];
    const base = {
      id: collection.key + '-' + fact.id + '-' + (variant + 1),
      region: 'viet-nam',
      period: fact.year,
      topic: collection.title,
      level: level,
      sourceLabel: collection.source.label,
      sourceUrl: collection.source.url,
      factId: fact.id
    };
    if (variant === 0) return Object.assign(base, {
      prompt: 'Dòng thời gian nhắc đến năm ' + fact.year + '. Sự kiện nào được gợi ra qua lát cắt này: “' + fact.context + '”?',
      answers: [fact.event], options: choices(facts, 'event', fact.event, offset),
      hint: 'Hãy tìm điểm nổi bật nhất trong đoạn kể: nhân vật, nơi chốn hoặc biến chuyển chính.',
      explanation: fact.event + '. Sự kiện này ' + fact.significance + '.'
    });
    if (variant === 1) return Object.assign(base, {
      prompt: 'Ở dấu mốc ' + fact.year + ', nhân vật hoặc lực lượng nào được gợi ra qua lát cắt: “' + concealAnswer(fact.context, fact.actor, 'chủ thể này') + '”?',
      answers: [fact.actor], options: choices(facts, 'actor', fact.actor, offset),
      hint: 'Đọc tên sự kiện, rồi nối với người hoặc lực lượng đã tạo nên dấu mốc đó.',
      explanation: fact.actor + ' là chủ thể gắn trực tiếp với dấu mốc này. Điều cần nhớ là ' + fact.significance + '.'
    });
    if (variant === 2) return Object.assign(base, {
      prompt: 'Ở dấu mốc ' + fact.year + ', lát cắt “' + concealAnswer(fact.context, fact.place, 'địa điểm này') + '” gắn với địa danh nào?',
      answers: [fact.place], options: choices(facts, 'place', fact.place, offset),
      hint: 'Hãy hình dung nơi câu chuyện diễn ra: một kinh đô, bến sông, vùng đất hay địa bàn rộng hơn.',
      explanation: 'Địa danh đúng là ' + fact.place + '. Việc nhớ không gian giúp hiểu vì sao ' + fact.significance + '.'
    });
    if (variant === 3) return Object.assign(base, {
      prompt: 'Mốc thời gian phù hợp nhất cho sự kiện “' + concealAnswer(fact.event, fact.year, 'dấu mốc này') + '” là khi nào?',
      answers: [fact.year], options: choices(facts, 'year', fact.year, offset),
      hint: 'Đừng chỉ nhớ một con số; hãy đặt sự kiện trước và sau những biến chuyển lớn cùng thời.',
      explanation: 'Sự kiện diễn ra vào ' + fact.year + '. Đây là mốc giúp ta thấy rõ rằng nó ' + fact.significance + '.'
    });
    return Object.assign(base, {
      prompt: 'Nhìn rộng hơn một mốc năm, ý nghĩa gần đúng nhất của sự kiện “' + fact.event + '” là gì?',
      answers: [fact.significance], options: choices(facts, 'significance', fact.significance, offset),
      hint: 'Đừng chọn câu chỉ nhắc lại sự kiện; hãy chọn câu nói được tác động của nó với dòng lịch sử.',
      explanation: 'Điểm cần nhớ: ' + fact.event + ' ' + fact.significance + '.'
    });
  }

  Object.keys(collections).forEach(function (key) {
    const collection = collections[key];
    collection.key = key;
    collection.questions = [];
    collection.facts.forEach(function (fact, factIndex) {
      for (let variant = 0; variant < collection.variants; variant += 1) collection.questions.push(makeQuestion(collection, fact, variant, factIndex));
    });
    if (collection.questions.length !== collection.expected) throw new Error(key + ' phải có đúng ' + collection.expected + ' câu.');
    collection.questions = Object.freeze(collection.questions.map(function (question) { return Object.freeze(question); }));
    Object.freeze(collection.facts);
    Object.freeze(collection);
  });

  window.IMathHistoryExpansion = Object.freeze({ version: '1.1.0', collections: Object.freeze(clone(collections)) });
}());
