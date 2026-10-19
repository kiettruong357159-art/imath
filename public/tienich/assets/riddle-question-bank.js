(function () {
  'use strict';

  const topicLabels = {
    toan: 'Toán tư duy',
    logic: 'Suy luận logic',
    'tieng-viet': 'Tiếng Việt & văn học dân gian',
    'tu-nhien': 'Khám phá tự nhiên',
    'doi-song': 'Quan sát đời sống'
  };

  const levelLabels = {
    'nhe-nhang': 'Nhẹ nhàng',
    'thu-thach': 'Thử thách',
    kho: 'Khó'
  };

  const bank = [];
  const choice = (id, topic, level, prompt, answer, options, hint, explanation) => {
    bank.push({ id, topic, level, type: 'choice', prompt, answers: [answer], options, hint, explanation });
  };
  const visualChoice = (id, topic, level, prompt, answer, options, hint, explanation, visual) => {
    bank.push({ id, topic, level, type: 'choice', prompt, answers: [answer], options, hint, explanation, visual });
  };
  const fill = (id, topic, level, prompt, answers, hint, explanation) => {
    bank.push({ id, topic, level, type: 'fill', prompt, answers: Array.isArray(answers) ? answers : [answers], hint, explanation });
  };

  // 40 câu Toán tư duy: số học, thời gian, đo lường và hình học cơ bản.
  choice('toan-001', 'toan', 'nhe-nhang', 'Bốn giỏ có số cam bằng nhau, mỗi giỏ 6 quả. Có tất cả bao nhiêu quả cam?', '24', ['18', '22', '24', '26'], 'Hãy cộng 6 bốn lần.', '4 × 6 = 24 quả cam.');
  choice('toan-002', 'toan', 'nhe-nhang', 'Minh có 15 chiếc bút chì, tặng bạn 4 chiếc. Minh còn lại bao nhiêu chiếc?', '11', ['9', '10', '11', '19'], 'Lấy số bút ban đầu trừ số đã tặng.', '15 − 4 = 11 chiếc bút chì.');
  choice('toan-003', 'toan', 'nhe-nhang', 'Một bộ phim bắt đầu lúc 9 giờ và kéo dài 2 giờ 30 phút. Phim kết thúc lúc nào?', '11 giờ 30 phút', ['10 giờ 30 phút', '11 giờ', '11 giờ 30 phút', '12 giờ 30 phút'], 'Cộng 2 giờ trước, rồi cộng thêm 30 phút.', '9 giờ + 2 giờ 30 phút = 11 giờ 30 phút.');
  choice('toan-004', 'toan', 'nhe-nhang', 'Có 3 hàng ghế, mỗi hàng 7 bạn. Có tất cả bao nhiêu bạn?', '21', ['10', '18', '21', '24'], 'Đây là phép nhân 3 với 7.', '3 × 7 = 21 bạn.');
  choice('toan-005', 'toan', 'nhe-nhang', '45 chiếc kẹo được chia đều cho 5 bạn. Mỗi bạn được bao nhiêu chiếc?', '9', ['8', '9', '10', '40'], 'Tìm số mà nhân với 5 được 45.', '45 : 5 = 9 chiếc kẹo.');
  choice('toan-006', 'toan', 'nhe-nhang', 'Một quyển vở giá 7 nghìn đồng. Mua 4 quyển vở hết bao nhiêu nghìn đồng?', '28', ['11', '21', '28', '35'], 'Mỗi quyển có cùng giá.', '7 × 4 = 28 nghìn đồng.');
  choice('toan-007', 'toan', 'nhe-nhang', 'Số nào có 4 chục và 3 đơn vị?', '43', ['34', '40', '43', '47'], '4 chục là 40, thêm 3 đơn vị.', '40 + 3 = 43.');
  choice('toan-008', 'toan', 'thu-thach', 'Một hình vuông có cạnh dài 5 cm. Chu vi của hình vuông là bao nhiêu?', '20 cm', ['10 cm', '15 cm', '20 cm', '25 cm'], 'Chu vi hình vuông bằng độ dài một cạnh nhân 4.', '5 × 4 = 20 cm.');
  choice('toan-009', 'toan', 'nhe-nhang', '3 kg gạo và 3 000 g gạo, số nào nặng hơn?', 'Bằng nhau', ['3 kg gạo', '3 000 g gạo', 'Bằng nhau', 'Không so sánh được'], '1 kg bằng 1 000 g.', '3 kg = 3 000 g nên hai túi nặng bằng nhau.');
  choice('toan-010', 'toan', 'nhe-nhang', 'Một nửa của 18 là bao nhiêu?', '9', ['6', '8', '9', '12'], 'Chia 18 thành hai phần bằng nhau.', '18 : 2 = 9.');
  choice('toan-011', 'toan', 'thu-thach', 'Điền số tiếp theo: 2, 5, 8, 11, ...', '14', ['12', '13', '14', '15'], 'Mỗi số sau hơn số đứng trước cùng một lượng.', 'Mỗi lần thêm 3, nên 11 + 3 = 14.');
  choice('toan-012', 'toan', 'nhe-nhang', '3 giờ bằng bao nhiêu phút?', '180 phút', ['60 phút', '120 phút', '180 phút', '300 phút'], 'Một giờ có 60 phút.', '3 × 60 = 180 phút.');
  choice('toan-013', 'toan', 'thu-thach', 'Hôm nay là thứ Hai. Sau 5 ngày nữa là thứ mấy?', 'Thứ Bảy', ['Thứ Năm', 'Thứ Sáu', 'Thứ Bảy', 'Chủ nhật'], 'Đếm lần lượt: Ba, Tư, Năm, Sáu, Bảy.', 'Sau thứ Hai 5 ngày là thứ Bảy.');
  choice('toan-014', 'toan', 'nhe-nhang', '72 chiếc bánh được xếp đều vào 8 hộp. Mỗi hộp có bao nhiêu chiếc?', '9', ['8', '9', '10', '64'], 'Chia đều 72 cho 8.', '72 : 8 = 9 chiếc bánh.');
  choice('toan-015', 'toan', 'thu-thach', 'Có 4 hộp bút, mỗi hộp 8 chiếc. Dùng hết 5 chiếc. Còn lại bao nhiêu chiếc bút?', '27', ['24', '27', '32', '37'], 'Tính số bút trong 4 hộp trước, rồi trừ đi 5.', '4 × 8 = 32; 32 − 5 = 27.');
  choice('toan-016', 'toan', 'thu-thach', 'Quãng đường dài 60 km. Đi với vận tốc 30 km/giờ thì mất bao lâu?', '2 giờ', ['1 giờ', '2 giờ', '3 giờ', '30 giờ'], 'Thời gian bằng quãng đường chia vận tốc.', '60 : 30 = 2 giờ.');
  choice('toan-017', 'toan', 'thu-thach', '20% của 50 là bao nhiêu?', '10', ['5', '10', '20', '25'], '10% của 50 là 5; hãy lấy gấp đôi.', '20% = 2 × 10%, nên 20% của 50 là 10.');
  choice('toan-018', 'toan', 'thu-thach', 'Một hình chữ nhật dài 8 cm, rộng 3 cm. Diện tích là bao nhiêu?', '24 cm²', ['11 cm²', '16 cm²', '22 cm²', '24 cm²'], 'Diện tích hình chữ nhật bằng dài nhân rộng.', '8 × 3 = 24 cm².');
  choice('toan-019', 'toan', 'thu-thach', '2,5 lít nước cộng 1,5 lít nước bằng bao nhiêu lít?', '4 lít', ['3 lít', '3,5 lít', '4 lít', '4,5 lít'], 'Cộng phần nguyên và phần thập phân.', '2,5 + 1,5 = 4 lít.');
  choice('toan-020', 'toan', 'thu-thach', 'Một phần tư của 20 cái bánh là bao nhiêu cái?', '5', ['4', '5', '10', '15'], 'Chia 20 thành 4 phần bằng nhau.', '20 : 4 = 5 cái bánh.');
  fill('toan-021', 'toan', 'nhe-nhang', 'Tìm số còn thiếu: ... + 7 = 20.', '13', 'Lấy 20 trừ đi 7.', 'Số cần tìm là 20 − 7 = 13.');
  choice('toan-022', 'toan', 'thu-thach', 'Một chiếc cặp giá 50 nghìn đồng, giảm giá 10%. Số tiền được giảm là bao nhiêu nghìn đồng?', '5', ['4', '5', '10', '45'], '10% nghĩa là một phần mười.', '50 : 10 = 5 nghìn đồng.');
  choice('toan-023', 'toan', 'thu-thach', 'Hình chữ nhật dài 6 cm, rộng 4 cm. Chu vi của hình là bao nhiêu?', '20 cm', ['10 cm', '20 cm', '24 cm', '28 cm'], 'Chu vi bằng (dài + rộng) nhân 2.', '(6 + 4) × 2 = 20 cm.');
  choice('toan-024', 'toan', 'thu-thach', 'Trung bình cộng của 8, 10 và 12 là bao nhiêu?', '10', ['8', '9', '10', '12'], 'Cộng ba số rồi chia đều cho 3.', '(8 + 10 + 12) : 3 = 10.');
  choice('toan-025', 'toan', 'nhe-nhang', '1 m 25 cm bằng bao nhiêu xăng-ti-mét?', '125 cm', ['25 cm', '100 cm', '125 cm', '1 025 cm'], '1 m bằng 100 cm.', '100 cm + 25 cm = 125 cm.');
  choice('toan-026', 'toan', 'thu-thach', '1 000 trừ 375 bằng bao nhiêu?', '625', ['525', '615', '625', '675'], 'Có thể lấy 1 000 trừ 300, rồi trừ tiếp 75.', '1 000 − 375 = 625.');
  choice('toan-027', 'toan', 'thu-thach', 'Ba phần năm của 20 là bao nhiêu?', '12', ['8', '10', '12', '15'], 'Tìm một phần năm trước, rồi nhân 3.', '20 : 5 = 4; 4 × 3 = 12.');
  choice('toan-028', 'toan', 'thu-thach', 'Bây giờ là 2 giờ 40 phút. Sau 35 phút nữa là mấy giờ?', '3 giờ 15 phút', ['2 giờ 75 phút', '3 giờ 5 phút', '3 giờ 15 phút', '3 giờ 25 phút'], '20 phút nữa là 3 giờ, còn lại bao nhiêu phút?', '2 giờ 40 phút + 20 phút = 3 giờ; thêm 15 phút là 3 giờ 15 phút.');
  choice('toan-029', 'toan', 'kho', 'Số có hai chữ số nào có tổng các chữ số bằng 9 và khi đổi chỗ hai chữ số thì tăng thêm 27?', '36', ['27', '36', '45', '63'], 'Hiệu khi đổi chỗ là 27; thử các cặp có tổng bằng 9.', '36 đổi thành 63; 63 − 36 = 27 và 3 + 6 = 9.');
  fill('toan-030', 'toan', 'nhe-nhang', 'Một số nhân với 3 được 27. Số đó là bao nhiêu?', '9', 'Tìm số mà 3 nhân với nó bằng 27.', '27 : 3 = 9.');
  choice('toan-031', 'toan', 'nhe-nhang', 'Một món đồ giá 80 nghìn đồng, giảm một nửa. Giá sau giảm là bao nhiêu nghìn đồng?', '40', ['20', '30', '40', '60'], 'Một nửa nghĩa là chia cho 2.', '80 : 2 = 40 nghìn đồng.');
  choice('toan-032', 'toan', 'thu-thach', '7 ngày có bao nhiêu giờ?', '168 giờ', ['24 giờ', '84 giờ', '168 giờ', '336 giờ'], 'Mỗi ngày có 24 giờ.', '7 × 24 = 168 giờ.');
  choice('toan-033', 'toan', 'thu-thach', 'Một khối lập phương cạnh 3 cm. Thể tích của khối là bao nhiêu?', '27 cm³', ['9 cm³', '18 cm³', '27 cm³', '36 cm³'], 'Thể tích khối lập phương bằng cạnh nhân cạnh nhân cạnh.', '3 × 3 × 3 = 27 cm³.');
  choice('toan-034', 'toan', 'thu-thach', 'Hình tam giác có đáy 8 cm, chiều cao 5 cm. Diện tích là bao nhiêu?', '20 cm²', ['13 cm²', '20 cm²', '40 cm²', '80 cm²'], 'Diện tích tam giác bằng đáy nhân chiều cao rồi chia 2.', '8 × 5 : 2 = 20 cm².');
  choice('toan-035', 'toan', 'thu-thach', 'Một phần ba của 27 là bao nhiêu?', '9', ['3', '6', '9', '18'], 'Chia 27 thành 3 phần bằng nhau.', '27 : 3 = 9.');
  choice('toan-036', 'toan', 'thu-thach', 'Một bảng có 6 hàng và 4 cột ô vuông. Có tất cả bao nhiêu ô vuông nhỏ?', '24', ['10', '20', '24', '28'], 'Nhân số hàng với số cột.', '6 × 4 = 24 ô vuông nhỏ.');
  choice('toan-037', 'toan', 'thu-thach', 'Lan đã làm được ba phần tư của 120 bài. Lan đã làm được bao nhiêu bài?', '90', ['30', '60', '90', '100'], 'Một phần tư của 120 là 30.', '120 : 4 = 30; 30 × 3 = 90 bài.');
  choice('toan-038', 'toan', 'nhe-nhang', 'Nam 7 tuổi. Ba năm nữa Nam bao nhiêu tuổi?', '10 tuổi', ['8 tuổi', '9 tuổi', '10 tuổi', '21 tuổi'], 'Tuổi tăng thêm đúng số năm trôi qua.', '7 + 3 = 10 tuổi.');
  choice('toan-039', 'toan', 'kho', 'Một xe đi 180 km trong 3 giờ. Trung bình mỗi giờ xe đi được bao nhiêu km?', '60 km', ['30 km', '60 km', '90 km', '540 km'], 'Chia quãng đường cho thời gian.', '180 : 3 = 60 km/giờ.');
  choice('toan-040', 'toan', 'kho', 'Có 5 hộp, mỗi hộp nhiều hơn hộp trước 2 viên bi. Hộp đầu có 3 viên. Hộp thứ năm có bao nhiêu viên?', '11', ['9', '10', '11', '13'], 'Dãy là 3, 5, 7, 9, ...', 'Mỗi hộp thêm 2 viên: hộp thứ năm có 11 viên.');

  // 40 câu suy luận logic, đáp án đơn nghĩa và phù hợp để trao đổi cùng phụ huynh.
  choice('logic-001', 'logic', 'nhe-nhang', 'Một gia đình có 2 con trai. Mỗi bạn trai có cùng một chị gái. Gia đình có mấy người con?', '3 người con', ['2 người con', '3 người con', '4 người con', 'Không biết'], 'Hai bạn trai có thể cùng chung một chị gái.', 'Gia đình có 2 con trai và 1 chị gái, tổng cộng 3 người con.');
  choice('logic-002', 'logic', 'nhe-nhang', '1 kg sắt và 1 kg bông, vật nào nặng hơn?', 'Bằng nhau', ['1 kg sắt', '1 kg bông', 'Bằng nhau', 'Không so sánh được'], 'Cả hai đều có cùng khối lượng là 1 kg.', '1 kg luôn bằng 1 kg, dù vật liệu khác nhau.');
  choice('logic-003', 'logic', 'nhe-nhang', 'Tháng nào trong năm cũng có ít nhất 28 ngày?', 'Cả 12 tháng', ['Chỉ tháng Hai', 'Tháng Một và tháng Hai', 'Cả 12 tháng', 'Không có tháng nào'], 'Hãy để ý cụm từ “ít nhất”.', 'Mọi tháng đều có từ 28 ngày trở lên.');
  choice('logic-004', 'logic', 'nhe-nhang', 'Ông, bố và con cùng đi câu. Mỗi người câu được một con cá, tổng cộng có 3 con cá. Có mấy người đi câu?', '3 người', ['2 người', '3 người', '4 người', '6 người'], 'Một người có thể vừa là bố, vừa là con.', 'Có 3 người: ông, bố và con.');
  choice('logic-005', 'logic', 'thu-thach', 'Có 5 bạn bắt tay nhau, mỗi cặp bạn chỉ bắt tay một lần. Có tất cả bao nhiêu cái bắt tay?', '10', ['5', '8', '10', '20'], 'Bạn đầu bắt tay 4 bạn, bạn tiếp theo chỉ cần bắt tay những bạn chưa bắt tay.', '4 + 3 + 2 + 1 = 10 cái bắt tay.');
  choice('logic-006', 'logic', 'nhe-nhang', 'Một đàn có 17 con cừu. Tất cả trừ 9 con chạy ra ngoài. Còn lại mấy con?', '9 con', ['0 con', '8 con', '9 con', '17 con'], '“Tất cả trừ 9” nghĩa là giữ lại 9 con.', 'Có 9 con cừu còn lại.');
  choice('logic-007', 'logic', 'nhe-nhang', 'Trên bàn có 3 quả táo. Con lấy đi 2 quả. Con đang có mấy quả táo?', '2 quả', ['1 quả', '2 quả', '3 quả', '5 quả'], 'Câu hỏi hỏi số táo con đã lấy.', 'Con đã lấy 2 quả, nên con đang có 2 quả.');
  choice('logic-008', 'logic', 'thu-thach', '3 con gà đẻ 3 quả trứng trong 3 ngày. Nếu mọi con gà đẻ đều như nhau, 9 con gà đẻ bao nhiêu quả trứng trong 3 ngày?', '9 quả', ['3 quả', '6 quả', '9 quả', '27 quả'], 'Số gà tăng gấp 3, thời gian không đổi.', 'Số trứng tăng gấp 3: 3 × 3 = 9 quả.');
  choice('logic-009', 'logic', 'nhe-nhang', 'Con đang lái một xe buýt. Ở trạm đầu có 4 người lên xe, trạm sau 2 người xuống. Ai đang lái xe?', 'Con', ['Bác tài xế', '4 hành khách', 'Con', 'Không biết'], 'Câu đầu tiên nói ai là người lái xe.', 'Đề bài nói “Con đang lái”, nên người lái là con.');
  choice('logic-010', 'logic', 'thu-thach', 'Có 2 người cha và 2 người con cùng ăn 3 cái bánh, mỗi người ăn đúng 1 cái. Điều này có thể xảy ra như thế nào?', 'Có 3 người: ông, bố và con', ['Có 2 người', 'Có 3 người: ông, bố và con', 'Có 4 người', 'Có 6 người'], 'Người bố cũng là một người con của ông.', 'Ba người là ông, bố và con; có 2 người cha và 2 người con.');
  choice('logic-011', 'logic', 'thu-thach', 'Hôm nay là thứ Ba. Sau 10 ngày nữa là thứ mấy?', 'Thứ Sáu', ['Thứ Năm', 'Thứ Sáu', 'Thứ Bảy', 'Chủ nhật'], '10 ngày = 7 ngày + 3 ngày.', 'Sau một tuần vẫn là thứ Ba, thêm 3 ngày là thứ Sáu.');
  choice('logic-012', 'logic', 'nhe-nhang', 'Một chiếc đồng hồ đúng giờ nhưng đã dừng hẳn. Trong 24 giờ, nó chỉ đúng mấy lần?', '2 lần', ['0 lần', '1 lần', '2 lần', '24 lần'], 'Mặt đồng hồ 12 giờ lặp lại hai lần trong một ngày.', 'Kim đứng yên vẫn trùng giờ thật hai lần mỗi ngày.');
  choice('logic-013', 'logic', 'thu-thach', 'An đứng thứ 7 từ đầu hàng và thứ 6 từ cuối hàng. Hàng có tất cả bao nhiêu bạn?', '12 bạn', ['11 bạn', '12 bạn', '13 bạn', '42 bạn'], 'Cộng hai vị trí rồi bớt đi An vì đã tính hai lần.', '7 + 6 − 1 = 12 bạn.');
  choice('logic-014', 'logic', 'nhe-nhang', 'Một số khi cộng với chính nó được 14. Số đó là bao nhiêu?', '7', ['5', '6', '7', '14'], 'Chia 14 thành hai phần bằng nhau.', '14 : 2 = 7.');
  choice('logic-015', 'logic', 'thu-thach', 'Trong dãy 1, 4, 9, 16, ... số tiếp theo là số nào?', '25', ['20', '24', '25', '36'], 'Các số lần lượt là 1², 2², 3², 4².', 'Số tiếp theo là 5² = 25.');
  choice('logic-016', 'logic', 'nhe-nhang', 'Có một cái hộp đựng 6 bút đỏ và 6 bút xanh. Không nhìn vào hộp, con cần lấy ít nhất mấy bút để chắc chắn có 2 bút cùng màu?', '3 bút', ['2 bút', '3 bút', '6 bút', '12 bút'], 'Hai bút đầu có thể khác màu; xét chiếc thứ ba.', 'Với 2 màu, lấy 3 bút chắc chắn có hai bút cùng màu.');
  choice('logic-017', 'logic', 'thu-thach', 'Ba bạn Mai, Nam, Linh xếp hàng. Linh đứng trước Mai, Mai đứng trước Nam. Ai đứng giữa?', 'Mai', ['Linh', 'Mai', 'Nam', 'Không xác định'], 'Vẽ thứ tự từ trước ra sau theo hai dữ kiện của đề.', 'Thứ tự là Linh, Mai, Nam nên Mai đứng giữa.');
  choice('logic-018', 'logic', 'nhe-nhang', 'Một con gà trống đẻ một quả trứng trên mái nhà. Trứng sẽ lăn về bên nào?', 'Gà trống không đẻ trứng', ['Bên trái', 'Bên phải', 'Gà trống không đẻ trứng', 'Ở giữa mái nhà'], 'Để ý con vật nào mới có thể đẻ trứng.', 'Gà trống không đẻ trứng.');
  choice('logic-019', 'logic', 'thu-thach', 'Hai bạn bắt đầu đi từ cùng một điểm, một bạn đi 4 bước về phía Đông rồi 3 bước về phía Bắc. Bạn kia đi 3 bước về phía Bắc rồi 4 bước về phía Đông. Hai bạn có gặp nhau ở cùng điểm cuối không?', 'Có', ['Có', 'Không', 'Chỉ khi bước thật dài', 'Không thể biết'], 'Thứ tự đi ngang và đi dọc không thay đổi điểm cuối.', 'Cả hai đều kết thúc ở điểm cách gốc 4 bước Đông và 3 bước Bắc.');
  choice('logic-020', 'logic', 'nhe-nhang', 'Một chiếc áo có 5 cúc. Nếu cài 2 cúc thì còn mấy cúc chưa cài?', '3 cúc', ['2 cúc', '3 cúc', '5 cúc', '7 cúc'], 'Lấy tổng số cúc trừ số đã cài.', '5 − 2 = 3 cúc chưa cài.');
  choice('logic-021', 'logic', 'thu-thach', 'Một số có thể chia đều cho 2 và 3. Số nào dưới đây chắc chắn thỏa mãn?', '18', ['8', '14', '15', '18'], 'Số đó phải chia hết cho cả 2 lẫn 3.', '18 chia hết cho 2 và cho 3.');
  choice('logic-022', 'logic', 'nhe-nhang', 'Một người có 4 chị em gái. Mỗi chị em gái có một người anh trai chung. Gia đình có mấy người con?', '5 người con', ['4 người con', '5 người con', '8 người con', '9 người con'], 'Bốn chị em gái chung một anh trai.', 'Có 4 con gái và 1 con trai, tổng 5 người con.');
  choice('logic-023', 'logic', 'thu-thach', 'Một cái bánh được cắt thành 8 phần bằng nhau. Ăn 3 phần. Còn lại mấy phần?', '5 phần', ['3 phần', '5 phần', '8 phần', '11 phần'], 'Tổng số phần không đổi, chỉ bớt phần đã ăn.', '8 − 3 = 5 phần bánh.');
  choice('logic-024', 'logic', 'thu-thach', 'Trong một túi có 4 viên bi vàng và 4 viên bi tím. Lấy ngẫu nhiên ít nhất bao nhiêu viên để chắc chắn có 3 viên cùng màu?', '5 viên', ['3 viên', '4 viên', '5 viên', '8 viên'], 'Trường hợp chưa chắc chắn nhất là lấy xen kẽ hai màu.', 'Có thể lấy 2 vàng và 2 tím; viên thứ 5 chắc chắn tạo thành 3 viên cùng màu.');
  choice('logic-025', 'logic', 'nhe-nhang', 'Số nào lớn hơn: 99 hay 100?', '100', ['99', '100', 'Bằng nhau', 'Không so sánh được'], 'So sánh số chữ số trước.', '100 có ba chữ số, lớn hơn 99 có hai chữ số.');
  choice('logic-026', 'logic', 'thu-thach', 'Lan có nhiều hơn Mai 6 nhãn vở. Mai có 8 nhãn vở. Lan có bao nhiêu nhãn vở?', '14', ['2', '8', '12', '14'], '“Nhiều hơn 6” là phép cộng.', '8 + 6 = 14 nhãn vở.');
  choice('logic-027', 'logic', 'thu-thach', 'Có 12 chiếc ghế xếp thành 3 hàng bằng nhau. Mỗi hàng có bao nhiêu ghế?', '4', ['3', '4', '6', '9'], 'Chia đều 12 cho 3 hàng.', '12 : 3 = 4 ghế.');
  choice('logic-028', 'logic', 'kho', 'Một dãy số bắt đầu bằng 3. Mỗi số sau gấp đôi số trước: 3, 6, 12, 24, ... Số thứ sáu là bao nhiêu?', '96', ['48', '72', '96', '192'], 'Sau 24 còn nhân 2 hai lần.', 'Số thứ năm là 48, số thứ sáu là 96.');
  choice('logic-029', 'logic', 'nhe-nhang', 'Nếu tất cả các con mèo đều là động vật, và Miu là một con mèo, Miu là gì?', 'Một động vật', ['Một con chó', 'Một động vật', 'Một cái cây', 'Không thể biết'], 'Áp dụng điều đã cho cho Miu.', 'Miu là mèo nên Miu là động vật.');
  choice('logic-030', 'logic', 'thu-thach', 'Ba cuốn sách A, B, C xếp trên kệ. A không đứng cạnh C. B phải đứng ở giữa. Thứ tự đúng là gì?', 'A, B, C hoặc C, B, A', ['A, C, B', 'B, A, C', 'A, B, C hoặc C, B, A', 'Chỉ có A, B, C'], 'B ở giữa nên hai đầu là A và C.', 'B ở giữa, A và C nằm ở hai đầu theo một trong hai thứ tự.');
  choice('logic-031', 'logic', 'nhe-nhang', 'Một tuần có 7 ngày. Hai tuần có bao nhiêu ngày?', '14 ngày', ['7 ngày', '9 ngày', '12 ngày', '14 ngày'], 'Gấp đôi số ngày của một tuần.', '7 × 2 = 14 ngày.');
  choice('logic-032', 'logic', 'thu-thach', 'Tìm số lẻ duy nhất trong các số 12, 18, 25, 30.', '25', ['12', '18', '25', '30'], 'Số chẵn chia hết cho 2.', '25 không chia hết cho 2 nên là số lẻ.');
  choice('logic-033', 'logic', 'nhe-nhang', 'Một chiếc hộp trống, sau khi đặt vào 1 quả bóng thì trong hộp có mấy quả bóng?', '1 quả bóng', ['0 quả bóng', '1 quả bóng', '2 quả bóng', 'Không có hộp'], 'Hộp bắt đầu trống.', 'Đặt vào một quả nên có một quả bóng.');
  choice('logic-034', 'logic', 'thu-thach', 'Sáu bạn ngồi quanh một bàn tròn. Mỗi bạn bắt tay với đúng hai bạn ngồi cạnh mình. Có tất cả bao nhiêu cái bắt tay?', '6', ['3', '6', '8', '12'], 'Mỗi cái bắt tay được hai bạn cùng tính.', '6 bạn, mỗi bạn có 2 cái bắt tay: 6 × 2 : 2 = 6.');
  choice('logic-035', 'logic', 'thu-thach', 'Một chiếc cân có hai đĩa. Đặt 2 quả cam mỗi quả 100 g lên một bên. Bên kia cần bao nhiêu g để cân bằng?', '200 g', ['100 g', '150 g', '200 g', '400 g'], 'Cộng khối lượng hai quả cam.', '100 g + 100 g = 200 g.');
  choice('logic-036', 'logic', 'kho', 'Nếu viết các số từ 1 đến 10, có bao nhiêu lần xuất hiện chữ số 1?', '2 lần', ['1 lần', '2 lần', '10 lần', '11 lần'], 'Chữ số 1 có ở số 1 và số 10.', 'Số 1 có một chữ số 1; số 10 có thêm một chữ số 1.');
  choice('logic-037', 'logic', 'nhe-nhang', 'Có 3 chiếc hộp: hộp đỏ, xanh, vàng. Hộp vàng ở đầu hàng, hộp đỏ ở cuối hàng. Hộp nào ở giữa?', 'Hộp xanh', ['Hộp đỏ', 'Hộp xanh', 'Hộp vàng', 'Không xác định'], 'Chỉ còn một vị trí trống giữa hộp vàng và hộp đỏ.', 'Hộp vàng ở đầu, hộp đỏ ở cuối nên hộp xanh ở giữa.');
  choice('logic-038', 'logic', 'thu-thach', 'Một chiếc đồng hồ chỉ 6 giờ. Kim phút đang chỉ số nào?', 'Số 12', ['Số 3', 'Số 6', 'Số 9', 'Số 12'], 'Đúng giờ thì kim phút ở vị trí 0 phút.', '0 phút tương ứng kim phút chỉ số 12.');
  choice('logic-039', 'logic', 'kho', 'Một số có 3 chữ số. Hàng trăm là 4, hàng đơn vị là 3; hàng chục gấp đôi hàng đơn vị. Số đó là bao nhiêu?', '463', ['436', '463', '493', '643'], 'Hàng đơn vị là 3 nên hàng chục là 6.', 'Số gồm 4 trăm, 6 chục, 3 đơn vị là 463.');
  choice('logic-040', 'logic', 'nhe-nhang', 'Điều gì xảy ra với bóng của con khi con đứng gần nguồn sáng hơn?', 'Bóng thường lớn hơn', ['Bóng biến mất luôn', 'Bóng thường lớn hơn', 'Bóng luôn xanh', 'Không thay đổi'], 'Hãy nghĩ đến bóng đèn và bàn tay.', 'Vật ở gần nguồn sáng hơn thường tạo bóng lớn hơn trên màn.');

  // 40 câu Tiếng Việt và tục ngữ, ưu tiên cách viết và cách dùng phổ biến.
  fill('tv-001', 'tieng-viet', 'nhe-nhang', 'Điền từ còn thiếu: Có công mài sắt, có ngày nên ...', 'kim', 'Đó là vật nhỏ, nhọn, dùng để khâu vá.', 'Câu tục ngữ nhắc nhở sự kiên trì: Có công mài sắt, có ngày nên kim.');
  fill('tv-002', 'tieng-viet', 'nhe-nhang', 'Điền vế còn thiếu: Ăn quả nhớ kẻ trồng ...', 'cây', 'Người trồng cây đã tạo ra quả.', 'Cần biết ơn người tạo ra thành quả cho mình.');
  fill('tv-003', 'tieng-viet', 'nhe-nhang', 'Từ nào chỉ giọng nói nghe êm, nhẹ nhàng và dễ chịu?', 'dịu dàng', 'Từ này thường dùng để tả cách nói nhỏ nhẹ, thân thiện.', '“Dịu dàng” chỉ giọng nói hoặc cách cư xử nhẹ nhàng, dễ chịu.');
  fill('tv-004', 'tieng-viet', 'nhe-nhang', 'Từ nào chỉ sự chăm chỉ, không ngại khó?', 'siêng năng', 'Từ này thường dùng để khen một bạn chịu khó học và làm việc.', '“Siêng năng” chỉ sự chăm chỉ, không ngại khó.');
  fill('tv-005', 'tieng-viet', 'nhe-nhang', 'Từ nào chỉ người biết quan tâm và sẵn sàng giúp đỡ người khác?', 'tốt bụng', 'Đây là một phẩm chất đáng quý trong cách đối xử với mọi người.', 'Người biết quan tâm, giúp đỡ người khác được gọi là tốt bụng.');
  fill('tv-006', 'tieng-viet', 'thu-thach', 'Điền vế còn thiếu: Đi một ngày đàng, học một ... khôn.', 'sàng', 'Đây là dụng cụ sàng gạo.', 'Đi một ngày đàng, học một sàng khôn.');
  fill('tv-007', 'tieng-viet', 'nhe-nhang', 'Điền từ còn thiếu: Uống nước nhớ ...', 'nguồn', 'Nước bắt đầu chảy từ nơi này.', 'Câu tục ngữ dạy lòng biết ơn: Uống nước nhớ nguồn.');
  fill('tv-008', 'tieng-viet', 'nhe-nhang', 'Điền vế còn thiếu: Lá lành đùm lá ...', 'rách', 'Chiếc lá bị hỏng có thể bị rách.', 'Người có điều kiện hơn cần biết giúp đỡ người khó khăn.');
  fill('tv-009', 'tieng-viet', 'thu-thach', 'Điền vế còn thiếu: Thương người như thể thương ...', 'thân', 'Nghĩ đến chính bản thân mình.', 'Câu tục ngữ nhắc ta yêu thương người khác.');
  fill('tv-010', 'tieng-viet', 'thu-thach', 'Điền từ còn thiếu: Tiên học lễ, hậu học ...', 'văn', 'Đây là từ thường đi cùng chữ “học”.', 'Cần học lễ nghĩa trước rồi học kiến thức.');
  fill('tv-011', 'tieng-viet', 'thu-thach', 'Điền vế còn thiếu: Tốt gỗ hơn tốt nước ...', 'sơn', 'Sơn là lớp phủ bên ngoài đồ vật.', 'Phẩm chất bên trong quan trọng hơn vẻ ngoài.');
  fill('tv-012', 'tieng-viet', 'thu-thach', 'Điền vế còn thiếu: Đói cho sạch, rách cho ...', 'thơm', 'Từ này thường đối với “sạch”.', 'Dù khó khăn vẫn cần giữ phẩm chất tốt đẹp.');
  fill('tv-013', 'tieng-viet', 'nhe-nhang', 'Điền vế còn thiếu: Chị ngã em ...', 'nâng', 'Khi ai đó ngã, ta nên giúp họ đứng dậy.', 'Anh chị em cần yêu thương, đùm bọc nhau.');
  fill('tv-014', 'tieng-viet', 'thu-thach', 'Điền từ còn thiếu: Học ăn, học nói, học gói, học ...', 'mở', 'Đây là từ đối với “gói”.', 'Con người cần học cách cư xử trong mọi việc.');
  fill('tv-015', 'tieng-viet', 'nhe-nhang', 'Điền từ còn thiếu: Có làm thì mới có ...', 'ăn', 'Làm việc để tạo ra của cải, lương thực.', 'Câu nói đề cao sự chăm chỉ lao động.');
  fill('tv-016', 'tieng-viet', 'nhe-nhang', 'Điền vế còn thiếu: Có thờ có thiêng, có kiêng có ...', 'lành', 'Từ này có nghĩa là bình an, tốt đẹp.', 'Câu nói nhắc về sự tôn trọng phong tục.');
  fill('tv-017', 'tieng-viet', 'thu-thach', 'Điền từ còn thiếu: Có tật thì giật ...', 'mình', 'Khi giật mình, cả cơ thể phản ứng.', 'Người có lỗi thường lo lắng khi nghe nhắc tới chuyện đó.');
  fill('tv-018', 'tieng-viet', 'nhe-nhang', 'Từ nào chỉ việc nói nhỏ để không làm phiền người khác?', 'thì thầm', 'Khi thì thầm, người nghe phải ở rất gần mới nghe rõ.', '“Thì thầm” là cách nói nhỏ, nhẹ để không làm phiền người khác.');
  fill('tv-019', 'tieng-viet', 'thu-thach', 'Từ nào gần nghĩa với “gắn bó” khi nói về tình bạn?', 'đoàn kết', 'Từ này chỉ sự cùng chung sức, cùng hướng về một mục tiêu tốt.', 'Trong tình bạn, gắn bó thể hiện sự đoàn kết và biết hỗ trợ nhau.');
  fill('tv-020', 'tieng-viet', 'thu-thach', 'Điền từ còn thiếu: Nói lời phải giữ lấy ...', 'lời', 'Từ này lặp lại ở đầu câu.', 'Đã hứa thì cần cố gắng thực hiện.');
  fill('tv-021', 'tieng-viet', 'nhe-nhang', 'Điền từ còn thiếu: Tre già măng ...', 'mọc', 'Măng mới sẽ phát triển thành tre.', 'Thế hệ sau tiếp nối thế hệ trước.');
  fill('tv-022', 'tieng-viet', 'thu-thach', 'Điền vế còn thiếu: Đoàn kết, đoàn kết, đại ...', 'đoàn kết', 'Hai tiếng đầu được lặp lại và thêm một từ “đại”.', 'Lời dạy nhấn mạnh sức mạnh của sự đoàn kết.');
  fill('tv-023', 'tieng-viet', 'nhe-nhang', 'Điền từ còn thiếu: Kính trên nhường ...', 'dưới', 'Từ này đối với “trên”.', 'Câu nói dạy cách cư xử lễ phép trong gia đình.');
  fill('tv-024', 'tieng-viet', 'thu-thach', 'Từ nào trái nghĩa với “thành công”?', 'thất bại', 'Đó là kết quả khi việc làm chưa đạt điều mong muốn.', '“Thất bại” là từ trái nghĩa với “thành công”.');
  fill('tv-025', 'tieng-viet', 'nhe-nhang', 'Điền từ còn thiếu: Bầu ơi thương lấy bí ...', 'cùng', 'Bầu và bí thường mọc gần nhau.', 'Câu ca dao khuyên mọi người yêu thương, đùm bọc nhau.');
  fill('tv-026', 'tieng-viet', 'thu-thach', 'Điền vế còn thiếu: Nhiễu điều phủ lấy giá gương, người trong một nước phải thương nhau ...', 'cùng', 'Từ cuối câu cũng có nghĩa là “với nhau”.', 'Câu ca dao nói về tình đoàn kết của người cùng một nước.');
  fill('tv-027', 'tieng-viet', 'nhe-nhang', 'Điền từ còn thiếu: Lời nói chẳng mất tiền mua, lựa lời mà nói cho vừa ...', 'lòng', 'Lời nói khéo léo khiến người nghe vui.', 'Cần chọn lời nói lịch sự, phù hợp.');
  fill('tv-028', 'tieng-viet', 'thu-thach', 'Điền từ còn thiếu: Có mới nới ...', 'cũ', 'Từ này đối với “mới”.', 'Câu nói phê phán việc có cái mới rồi coi nhẹ cái cũ.');
  fill('tv-029', 'tieng-viet', 'nhe-nhang', 'Điền từ còn thiếu: Góp gió thành ...', 'bão', 'Nhiều cơn gió mạnh có thể tạo ra hiện tượng này.', 'Nhiều việc nhỏ góp lại sẽ thành việc lớn.');
  fill('tv-030', 'tieng-viet', 'thu-thach', 'Điền vế còn thiếu: Kiến tha lâu cũng đầy ...', 'tổ', 'Kiến mang thức ăn về nơi ở của mình.', 'Kiên trì góp nhặt từng chút sẽ được nhiều.');
  fill('tv-031', 'tieng-viet', 'nhe-nhang', 'Điền từ còn thiếu: Gieo gió gặt ...', 'bão', 'Gió mạnh lên sẽ thành bão.', 'Làm điều xấu có thể nhận hậu quả xấu hơn.');
  fill('tv-032', 'tieng-viet', 'thu-thach', 'Trong câu “Đôi mắt là cửa sổ tâm hồn”, từ nào chỉ bộ phận cơ thể?', 'đôi mắt', 'Đó là bộ phận dùng để nhìn.', 'Trong câu này, “đôi mắt” là bộ phận cơ thể; câu nói dùng hình ảnh để diễn tả cảm xúc, suy nghĩ.');
  fill('tv-033', 'tieng-viet', 'nhe-nhang', 'Điền từ còn thiếu: Đi hỏi già, về nhà hỏi ...', 'trẻ', 'Từ này đối với “già”.', 'Câu nói khuyên biết tham khảo kinh nghiệm và sức trẻ.');
  fill('tv-034', 'tieng-viet', 'thu-thach', 'Khi bạn đang trình bày ý kiến, em nên làm gì để thể hiện sự tôn trọng?', 'lắng nghe', 'Hãy chú ý nghe bạn nói và không ngắt lời tùy tiện.', 'Lắng nghe là cách thể hiện sự tôn trọng và giúp ta hiểu ý kiến của bạn.');
  fill('tv-035', 'tieng-viet', 'nhe-nhang', 'Điền từ còn thiếu: Người đẹp vì lụa, lúa tốt vì ...', 'phân', 'Cây lúa cần chất dinh dưỡng từ đất.', 'Câu nói gợi về sự chăm sóc để có kết quả tốt.');
  fill('tv-036', 'tieng-viet', 'thu-thach', 'Điền vế còn thiếu: Muốn biết phải hỏi, muốn giỏi phải ...', 'học', 'Muốn giỏi thì cần siêng năng làm việc này.', 'Muốn hiểu biết cần biết hỏi và học tập.');
  fill('tv-037', 'tieng-viet', 'nhe-nhang', 'Điền từ còn thiếu: Tay làm hàm ...', 'nhai', 'Hàm dùng để nhai thức ăn.', 'Siêng năng lao động thì có cái ăn.');
  fill('tv-038', 'tieng-viet', 'thu-thach', 'Từ nào trái nghĩa với “thẳng thắn” trong cách nói chuyện?', 'quanh co', 'Đó là cách nói không trực tiếp, có thể làm người nghe khó hiểu.', '“Quanh co” là cách nói không rõ ràng, trái với thẳng thắn.');
  fill('tv-039', 'tieng-viet', 'nhe-nhang', 'Điền từ còn thiếu: Yêu trẻ, trẻ đến nhà; kính già, già để ...', 'tuổi', 'Từ này thường đi cùng “già”.', 'Cần tôn trọng cả trẻ nhỏ và người lớn tuổi.');
  fill('tv-040', 'tieng-viet', 'thu-thach', 'Điền vế còn thiếu: Học một biết ...', 'mười', 'Đây là số lớn hơn một rất nhiều trong câu nói.', 'Học sâu và biết vận dụng để hiểu rộng hơn.');

  // 40 câu khám phá tự nhiên. Chỉ dùng kiến thức phổ thông, tránh câu mơ hồ.
  choice('tn-001', 'tu-nhien', 'nhe-nhang', 'Bộ phận nào của cây hút nước và chất dinh dưỡng từ đất?', 'Rễ', ['Lá', 'Hoa', 'Rễ', 'Quả'], 'Bộ phận này thường nằm dưới đất.', 'Rễ hút nước và chất dinh dưỡng từ đất.');
  choice('tn-002', 'tu-nhien', 'nhe-nhang', 'Con vật nào sinh ra từ trứng?', 'Con gà', ['Con chó', 'Con mèo', 'Con gà', 'Con thỏ'], 'Hãy nghĩ đến loài chim nuôi ở sân nhà.', 'Gà đẻ trứng; chó, mèo và thỏ sinh con.');
  choice('tn-003', 'tu-nhien', 'nhe-nhang', 'Ban ngày, nguồn sáng tự nhiên lớn nhất của Trái Đất là gì?', 'Mặt Trời', ['Mặt Trăng', 'Ngọn nến', 'Mặt Trời', 'Đèn pin'], 'Nguồn sáng này ở trên bầu trời ban ngày.', 'Mặt Trời là nguồn sáng và nhiệt chủ yếu của Trái Đất.');
  choice('tn-004', 'tu-nhien', 'thu-thach', 'Nước để trong ngăn đá tủ lạnh sẽ chuyển thành gì?', 'Nước đá', ['Hơi nước', 'Nước đá', 'Mây', 'Cát'], 'Khi lạnh dưới 0°C, nước đông lại.', 'Nước đông thành nước đá.');
  choice('tn-005', 'tu-nhien', 'nhe-nhang', 'Cầu vồng thường xuất hiện khi nào?', 'Sau mưa có nắng', ['Trời tối hoàn toàn', 'Sau mưa có nắng', 'Khi có gió mạnh', 'Mọi buổi tối'], 'Cần có giọt nước và ánh sáng Mặt Trời.', 'Ánh sáng đi qua giọt nước tạo ra cầu vồng.');
  choice('tn-006', 'tu-nhien', 'nhe-nhang', 'Con vật nào có thể sống cả dưới nước lẫn trên cạn?', 'Ếch', ['Cá vàng', 'Ếch', 'Chim sẻ', 'Mèo'], 'Con vật này kêu “ộp ộp”.', 'Ếch sống được ở nước và trên cạn.');
  choice('tn-007', 'tu-nhien', 'thu-thach', 'Lá cây thường có màu xanh nhờ chất gì?', 'Diệp lục', ['Muối', 'Diệp lục', 'Cát', 'Khói'], 'Đây là chất giúp cây quang hợp.', 'Diệp lục làm lá có màu xanh và giúp cây tạo chất dinh dưỡng.');
  choice('tn-008', 'tu-nhien', 'nhe-nhang', 'Cơ quan nào giúp con nghe âm thanh?', 'Tai', ['Mắt', 'Tai', 'Mũi', 'Da'], 'Đây là bộ phận ở hai bên đầu.', 'Tai tiếp nhận âm thanh.');
  choice('tn-009', 'tu-nhien', 'nhe-nhang', 'Bộ phận nào của cơ thể dùng để ngửi mùi?', 'Mũi', ['Mắt', 'Tai', 'Mũi', 'Tay'], 'Bộ phận này nằm giữa hai mắt.', 'Mũi giúp nhận biết mùi.');
  choice('tn-010', 'tu-nhien', 'thu-thach', 'Thực vật cần gì để lớn lên khỏe mạnh?', 'Nước, ánh sáng và không khí', ['Chỉ đất', 'Chỉ nước', 'Nước, ánh sáng và không khí', 'Chỉ phân bón'], 'Cây cần nhiều điều kiện chứ không chỉ một thứ.', 'Cây cần nước, ánh sáng, không khí và chất dinh dưỡng.');
  choice('tn-011', 'tu-nhien', 'nhe-nhang', 'Loài nào sau đây là côn trùng?', 'Con bướm', ['Con nhện', 'Con bướm', 'Con ốc', 'Con cá'], 'Côn trùng thường có 6 chân.', 'Bướm là côn trùng; nhện có 8 chân.');
  choice('tn-012', 'tu-nhien', 'thu-thach', 'Vì sao cần rửa tay trước khi ăn?', 'Để loại bớt vi khuẩn và bụi bẩn', ['Để tay thơm hơn', 'Để loại bớt vi khuẩn và bụi bẩn', 'Để ăn nhanh hơn', 'Để tay đổi màu'], 'Tay chạm vào nhiều đồ vật trong ngày.', 'Rửa tay sạch giúp giảm nguy cơ đưa vi khuẩn vào cơ thể.');
  choice('tn-013', 'tu-nhien', 'nhe-nhang', 'Trái Đất quay quanh nguồn sáng nào?', 'Mặt Trời', ['Mặt Trăng', 'Mặt Trời', 'Sao Bắc Đẩu', 'Đám mây'], 'Nguồn sáng lớn nhất ban ngày.', 'Trái Đất quay quanh Mặt Trời.');
  choice('tn-014', 'tu-nhien', 'thu-thach', 'Âm thanh truyền được qua môi trường nào?', 'Chất rắn, chất lỏng và chất khí', ['Chỉ không khí', 'Chỉ nước', 'Chất rắn, chất lỏng và chất khí', 'Chỉ chân không'], 'Con có thể nghe tiếng gõ qua bàn và tiếng gọi trong không khí.', 'Âm thanh truyền qua rắn, lỏng, khí nhưng không truyền trong chân không.');
  choice('tn-015', 'tu-nhien', 'nhe-nhang', 'Con vật nào ăn cỏ?', 'Con bò', ['Con hổ', 'Con bò', 'Con mèo', 'Con cá mập'], 'Loài vật này thường sống ở đồng cỏ hoặc trang trại.', 'Bò là động vật ăn cỏ.');
  choice('tn-016', 'tu-nhien', 'thu-thach', 'Khi trời rất nóng, cơ thể thường tiết ra gì để làm mát?', 'Mồ hôi', ['Nước mắt', 'Mồ hôi', 'Máu', 'Sương'], 'Da có thể ướt khi con vận động mạnh.', 'Mồ hôi bay hơi giúp cơ thể hạ nhiệt.');
  choice('tn-017', 'tu-nhien', 'nhe-nhang', 'Đâu là chất lỏng ở nhiệt độ thường?', 'Nước', ['Đá', 'Nước', 'Hơi nước', 'Gỗ'], 'Chất này có thể chảy và chứa trong cốc.', 'Nước là chất lỏng ở nhiệt độ thường.');
  choice('tn-018', 'tu-nhien', 'thu-thach', 'Nếu đặt một chiếc thìa kim loại và một chiếc thìa gỗ trong cốc nước nóng, chiếc nào thường nóng lên nhanh hơn ở phần cán?', 'Thìa kim loại', ['Thìa gỗ', 'Thìa kim loại', 'Hai chiếc như nhau', 'Không chiếc nào'], 'Kim loại dẫn nhiệt tốt hơn gỗ.', 'Kim loại truyền nhiệt nhanh hơn gỗ.');
  choice('tn-019', 'tu-nhien', 'nhe-nhang', 'Vật nào có thể hút các mảnh giấy nhỏ sau khi chà vào tóc?', 'Thước nhựa', ['Thước nhựa', 'Cốc nước', 'Khăn vải ướt', 'Viên đá'], 'Đây là hiện tượng tĩnh điện.', 'Thước nhựa sau khi chà có thể tích điện và hút giấy nhỏ.');
  choice('tn-020', 'tu-nhien', 'thu-thach', 'Đâu là việc giúp tiết kiệm nước?', 'Tắt vòi khi đang đánh răng', ['Mở vòi liên tục', 'Tắm thật lâu', 'Tắt vòi khi đang đánh răng', 'Dùng nước sạch để quét sân'], 'Nước không nên chảy khi chưa cần dùng.', 'Tắt vòi khi không dùng giúp tránh lãng phí nước.');
  choice('tn-021', 'tu-nhien', 'nhe-nhang', 'Con vật nào có vú và nuôi con bằng sữa?', 'Con mèo', ['Con cá', 'Con mèo', 'Con gà', 'Con rùa'], 'Đây là thú nuôi quen thuộc trong nhà.', 'Mèo là động vật có vú.');
  choice('tn-022', 'tu-nhien', 'thu-thach', 'Vì sao bóng của vật thay đổi độ dài trong ngày?', 'Vị trí Mặt Trời thay đổi trên bầu trời', ['Vật tự lớn lên', 'Vị trí Mặt Trời thay đổi trên bầu trời', 'Gió làm bóng dài', 'Bóng có chân'], 'Buổi sáng và buổi trưa Mặt Trời ở vị trí khác nhau.', 'Góc chiếu sáng thay đổi làm độ dài của bóng thay đổi.');
  choice('tn-023', 'tu-nhien', 'nhe-nhang', 'Con vật nào thở bằng mang?', 'Con cá', ['Con mèo', 'Con cá', 'Con chim', 'Con chó'], 'Con vật này sống chủ yếu trong nước.', 'Cá thở bằng mang.');
  choice('tn-024', 'tu-nhien', 'thu-thach', 'Khi nước sôi và biến thành hơi, đó là sự chuyển thể nào?', 'Bay hơi', ['Đông đặc', 'Ngưng tụ', 'Bay hơi', 'Nóng chảy'], 'Nước lỏng chuyển thành dạng khí.', 'Nước sôi biến thành hơi nước, đó là bay hơi.');
  choice('tn-025', 'tu-nhien', 'nhe-nhang', 'Bầu trời ban ngày thường có màu gì khi trời quang?', 'Màu xanh', ['Màu xanh', 'Màu tím', 'Màu đen', 'Màu cam'], 'Hãy quan sát bầu trời vào ngày không mưa.', 'Bầu trời quang đãng thường hiện màu xanh.');
  choice('tn-026', 'tu-nhien', 'thu-thach', 'Hành tinh nào là nơi con người đang sinh sống?', 'Trái Đất', ['Sao Hỏa', 'Sao Kim', 'Trái Đất', 'Mặt Trăng'], 'Đây là hành tinh thứ ba tính từ Mặt Trời.', 'Con người đang sống trên Trái Đất.');
  choice('tn-027', 'tu-nhien', 'nhe-nhang', 'Mắt cần ánh sáng để làm gì?', 'Nhìn thấy sự vật', ['Nghe âm thanh', 'Ngửi mùi', 'Nhìn thấy sự vật', 'Nếm thức ăn'], 'Cơ quan này giúp con quan sát.', 'Ánh sáng đi vào mắt giúp ta nhìn thấy.');
  choice('tn-028', 'tu-nhien', 'thu-thach', 'Loài nào sau đây là động vật không xương sống?', 'Con giun đất', ['Con mèo', 'Con chim', 'Con giun đất', 'Con cá'], 'Con vật này mềm và sống trong đất ẩm.', 'Giun đất không có cột sống.');
  choice('tn-029', 'tu-nhien', 'nhe-nhang', 'Sau cơn mưa, vì sao đường thường trơn?', 'Có nước trên mặt đường', ['Đường đổi màu', 'Có nước trên mặt đường', 'Xe chạy chậm hơn', 'Mây che đường'], 'Nước làm giảm độ bám của giày hoặc bánh xe.', 'Mặt đường ướt khiến dễ trượt ngã.');
  choice('tn-030', 'tu-nhien', 'thu-thach', 'Cây xanh giúp không khí trong lành hơn vì cây hấp thụ khí nào để quang hợp?', 'Khí cacbonic', ['Khí ôxy', 'Khí cacbonic', 'Khí nitơ', 'Hơi nước'], 'Đây là khí con người thở ra.', 'Cây dùng khí cacbonic và ánh sáng để quang hợp.');
  choice('tn-031', 'tu-nhien', 'nhe-nhang', 'Đâu là việc nên làm khi trời có sấm sét?', 'Ở trong nhà, tránh nơi trống trải', ['Đứng dưới cây cao', 'Cầm ô kim loại ngoài trời', 'Ở trong nhà, tránh nơi trống trải', 'Bơi ở hồ'], 'Cần tránh các nơi dễ bị sét đánh.', 'Ở trong nhà an toàn hơn khi có sấm sét.');
  choice('tn-032', 'tu-nhien', 'thu-thach', 'Khi để một cốc nước lạnh ngoài trời nóng, giọt nước bám bên ngoài cốc đến từ đâu?', 'Hơi nước trong không khí ngưng tụ', ['Nước xuyên qua thành cốc', 'Hơi nước trong không khí ngưng tụ', 'Cốc tự tạo nước', 'Nước từ đáy bàn'], 'Không khí có hơi nước; gặp lạnh nó biến thành giọt.', 'Hơi nước trong không khí gặp thành cốc lạnh sẽ ngưng tụ.');
  choice('tn-033', 'tu-nhien', 'nhe-nhang', 'Loài nào thụ phấn cho nhiều loài hoa?', 'Con ong', ['Con cá', 'Con ong', 'Con rùa', 'Con mèo'], 'Con vật này hay bay từ hoa này sang hoa khác.', 'Ong mang phấn hoa và giúp nhiều cây sinh sản.');
  choice('tn-034', 'tu-nhien', 'thu-thach', 'Vì sao cần đội mũ bảo hiểm khi đi xe máy?', 'Giúp bảo vệ đầu khi va chạm', ['Giúp xe chạy nhanh', 'Giúp bảo vệ đầu khi va chạm', 'Làm tóc dài hơn', 'Thay cho áo mưa'], 'Bộ phận cần bảo vệ là đầu.', 'Mũ bảo hiểm giảm nguy cơ chấn thương đầu khi xảy ra va chạm.');
  choice('tn-035', 'tu-nhien', 'nhe-nhang', 'Mùa nào thường có thời tiết nóng nhất ở Việt Nam?', 'Mùa hè', ['Mùa xuân', 'Mùa hè', 'Mùa thu', 'Mùa đông'], 'Đây là mùa học sinh thường nghỉ hè.', 'Mùa hè thường nóng nhất.');
  choice('tn-036', 'tu-nhien', 'thu-thach', 'Để một hạt đậu nảy mầm, hạt cần điều gì quan trọng?', 'Nước và nhiệt độ phù hợp', ['Chỉ ánh đèn màu', 'Nước và nhiệt độ phù hợp', 'Chỉ đất khô', 'Chỉ đá'], 'Hạt cần hút nước để bắt đầu nảy mầm.', 'Nước và điều kiện nhiệt độ phù hợp giúp hạt nảy mầm.');
  choice('tn-037', 'tu-nhien', 'nhe-nhang', 'Đâu là nguồn năng lượng tái tạo?', 'Ánh sáng Mặt Trời', ['Than đá', 'Dầu mỏ', 'Ánh sáng Mặt Trời', 'Xăng'], 'Nguồn này có sẵn mỗi ngày trên bầu trời.', 'Năng lượng Mặt Trời có thể được khai thác liên tục.');
  choice('tn-038', 'tu-nhien', 'thu-thach', 'Nếu đèn pin không sáng dù đã bật công tắc, việc nào nên kiểm tra trước?', 'Pin có lắp đúng và còn điện không', ['Đập mạnh đèn pin', 'Đổ nước vào đèn', 'Pin có lắp đúng và còn điện không', 'Nhìn lên Mặt Trời'], 'Đèn pin cần nguồn điện từ pin.', 'Cần kiểm tra pin trước vì đây là nguyên nhân thường gặp.');
  choice('tn-039', 'tu-nhien', 'nhe-nhang', 'Loài vật nào có thể biến đổi từ nòng nọc thành con trưởng thành?', 'Ếch', ['Mèo', 'Ếch', 'Gà', 'Chó'], 'Nòng nọc sống dưới nước và có đuôi.', 'Nòng nọc lớn lên sẽ biến thành ếch.');
  choice('tn-040', 'tu-nhien', 'thu-thach', 'Vì sao không nên nhìn thẳng vào Mặt Trời?', 'Ánh sáng quá mạnh có thể làm hại mắt', ['Vì Mặt Trời quá xa', 'Ánh sáng quá mạnh có thể làm hại mắt', 'Vì không thấy mây', 'Vì làm đồng hồ chạy chậm'], 'Mắt rất nhạy cảm với ánh sáng mạnh.', 'Nhìn thẳng Mặt Trời có thể gây tổn thương cho mắt.');

  // 40 câu quan sát đời sống: kỹ năng an toàn, thời gian và ứng xử.
  choice('ds-001', 'doi-song', 'nhe-nhang', 'Đèn tín hiệu giao thông màu đỏ có nghĩa là gì?', 'Dừng lại', ['Đi nhanh', 'Dừng lại', 'Rẽ phải ngay', 'Bấm còi'], 'Màu đỏ báo hiệu cần dừng.', 'Đèn đỏ yêu cầu người tham gia giao thông dừng lại.');
  choice('ds-002', 'doi-song', 'nhe-nhang', 'Khi muốn qua đường, con nên làm gì trước?', 'Quan sát kỹ hai bên đường', ['Chạy thật nhanh', 'Quan sát kỹ hai bên đường', 'Nhắm mắt đi', 'Chơi đùa dưới lòng đường'], 'An toàn cần được đặt trước tốc độ.', 'Cần quan sát và chỉ qua đường ở nơi an toàn.');
  choice('ds-003', 'doi-song', 'nhe-nhang', 'Vật nào dùng để đo nhiệt độ cơ thể khi bị sốt?', 'Nhiệt kế', ['Thước kẻ', 'Cân', 'Nhiệt kế', 'Đồng hồ'], 'Tên dụng cụ có chữ “nhiệt”.', 'Nhiệt kế dùng để đo nhiệt độ.');
  choice('ds-004', 'doi-song', 'thu-thach', 'Mẹ đưa 50 nghìn đồng để mua đồ giá 32 nghìn đồng. Con phải trả lại bao nhiêu nghìn đồng?', '18 nghìn đồng', ['12 nghìn đồng', '18 nghìn đồng', '22 nghìn đồng', '82 nghìn đồng'], 'Lấy tiền đưa trừ giá món đồ.', '50 − 32 = 18 nghìn đồng.');
  choice('ds-005', 'doi-song', 'nhe-nhang', 'Nếu muốn mượn đồ của bạn, con nên nói gì?', 'Xin phép bạn trước', ['Tự lấy ngay', 'Xin phép bạn trước', 'Giấu đồ đi', 'Bỏ đi không nói'], 'Đồ vật có chủ cần được tôn trọng.', 'Cần xin phép trước khi dùng đồ của người khác.');
  choice('ds-006', 'doi-song', 'nhe-nhang', 'Dụng cụ nào phù hợp để xem giờ?', 'Đồng hồ', ['Kính lúp', 'Đồng hồ', 'Ống nghe', 'Cái cân'], 'Dụng cụ này có kim hoặc màn hình số.', 'Đồng hồ dùng để xem giờ.');
  choice('ds-007', 'doi-song', 'thu-thach', 'Một chai nước có 1 lít. Rót đều vào 4 cốc. Mỗi cốc có bao nhiêu ml?', '250 ml', ['100 ml', '200 ml', '250 ml', '400 ml'], '1 lít bằng 1 000 ml.', '1 000 : 4 = 250 ml.');
  choice('ds-008', 'doi-song', 'nhe-nhang', 'Khi dùng kéo, con nên đưa phần nào cho bạn?', 'Cán kéo', ['Mũi kéo hướng vào bạn', 'Lưỡi kéo mở rộng', 'Cán kéo', 'Ném kéo cho bạn'], 'Đưa phần không sắc nhọn để an toàn.', 'Nên đưa cán kéo, mũi kéo quay vào phía mình.');
  choice('ds-009', 'doi-song', 'nhe-nhang', 'Rác giấy sạch nên bỏ vào đâu nếu trường có thùng phân loại?', 'Thùng tái chế', ['Thùng rác hữu cơ', 'Thùng tái chế', 'Cống nước', 'Sân trường'], 'Giấy có thể được dùng lại để làm sản phẩm mới.', 'Giấy sạch thường được đưa vào nhóm tái chế.');
  choice('ds-010', 'doi-song', 'thu-thach', 'Một buổi học bắt đầu lúc 7 giờ 30 phút và kết thúc lúc 9 giờ. Buổi học kéo dài bao lâu?', '1 giờ 30 phút', ['30 phút', '1 giờ', '1 giờ 30 phút', '2 giờ'], 'Từ 7 giờ 30 đến 8 giờ là 30 phút, rồi thêm một giờ.', 'Thời gian học là 1 giờ 30 phút.');
  choice('ds-011', 'doi-song', 'nhe-nhang', 'Khi đi xe đạp buổi tối, điều gì giúp người khác dễ nhìn thấy con hơn?', 'Bật đèn và dùng đồ phản quang', ['Mặc đồ thật tối', 'Bật đèn và dùng đồ phản quang', 'Không cần quan sát', 'Đi vào giữa đường'], 'Ánh sáng và vật phản quang giúp dễ được nhận ra.', 'Đèn và đồ phản quang tăng khả năng nhận biết vào ban đêm.');
  choice('ds-012', 'doi-song', 'nhe-nhang', 'Một hộp sữa ghi hạn dùng là hôm nay. Cách xử lý an toàn là gì?', 'Kiểm tra kỹ và dùng trước khi hết hạn nếu còn bảo quản tốt', ['Để nhiều tuần nữa', 'Kiểm tra kỹ và dùng trước khi hết hạn nếu còn bảo quản tốt', 'Uống dù có mùi lạ', 'Vứt ra đường'], 'Hạn dùng cho biết thời điểm cần chú ý về an toàn thực phẩm.', 'Nên kiểm tra hạn dùng và tình trạng sản phẩm trước khi dùng.');
  choice('ds-013', 'doi-song', 'thu-thach', 'Một xe buýt có 36 chỗ ngồi. Đã có 28 người ngồi. Còn bao nhiêu chỗ trống?', '8 chỗ', ['6 chỗ', '8 chỗ', '18 chỗ', '64 chỗ'], 'Lấy tổng số chỗ trừ số người đang ngồi.', '36 − 28 = 8 chỗ trống.');
  choice('ds-014', 'doi-song', 'nhe-nhang', 'Khi nhận được một tin nhắn từ người lạ yêu cầu gửi ảnh riêng tư, con nên làm gì?', 'Không gửi và nói với bố mẹ hoặc người lớn tin cậy', ['Gửi ngay', 'Không gửi và nói với bố mẹ hoặc người lớn tin cậy', 'Xóa hết mọi liên lạc', 'Chia sẻ cho nhiều người'], 'Thông tin riêng tư cần được bảo vệ.', 'Không gửi ảnh riêng tư; hãy nhờ người lớn tin cậy hỗ trợ.');
  choice('ds-015', 'doi-song', 'nhe-nhang', 'Để bàn học gọn gàng, việc nào nên làm sau khi học xong?', 'Cất sách vở đúng chỗ', ['Ném đồ xuống sàn', 'Cất sách vở đúng chỗ', 'Để kéo mở trên bàn', 'Làm đổ nước lên vở'], 'Mỗi đồ dùng nên có một chỗ cất.', 'Cất đồ đúng chỗ giúp dễ tìm và an toàn.');
  choice('ds-016', 'doi-song', 'thu-thach', 'Một công thức cần 500 g bột. Nhà có 1 kg bột. Làm xong còn bao nhiêu g bột?', '500 g', ['0 g', '250 g', '500 g', '1 500 g'], '1 kg bằng 1 000 g.', '1 000 − 500 = 500 g bột.');
  choice('ds-017', 'doi-song', 'nhe-nhang', 'Khi thấy bạn bị ngã trong sân trường, con nên làm gì?', 'Hỏi thăm và gọi người lớn hỗ trợ nếu cần', ['Cười trêu bạn', 'Bỏ đi', 'Hỏi thăm và gọi người lớn hỗ trợ nếu cần', 'Xô bạn đứng dậy'], 'Cần quan tâm đến an toàn của bạn.', 'Hãy hỗ trợ bạn và báo người lớn nếu bạn bị đau.');
  choice('ds-018', 'doi-song', 'nhe-nhang', 'Dụng cụ nào dùng để đo độ dài của quyển vở?', 'Thước kẻ', ['Nhiệt kế', 'Thước kẻ', 'Đồng hồ', 'Cốc đong'], 'Dụng cụ này có vạch cm.', 'Thước kẻ dùng để đo độ dài.');
  choice('ds-019', 'doi-song', 'thu-thach', 'Một gia đình dùng 3 chai nước, mỗi chai 1,5 lít. Gia đình đã dùng bao nhiêu lít nước?', '4,5 lít', ['3 lít', '4 lít', '4,5 lít', '5 lít'], 'Nhân 1,5 với 3.', '1,5 × 3 = 4,5 lít.');
  choice('ds-020', 'doi-song', 'nhe-nhang', 'Khi nghe chuông báo cháy ở trường, con nên làm gì?', 'Đi theo hướng dẫn của thầy cô, không chen lấn', ['Trốn trong lớp', 'Chạy ngược chiều mọi người', 'Đi theo hướng dẫn của thầy cô, không chen lấn', 'Quay lại lấy đồ chơi'], 'An toàn là ưu tiên; hãy giữ bình tĩnh.', 'Cần sơ tán theo hướng dẫn của thầy cô.');
  choice('ds-021', 'doi-song', 'nhe-nhang', 'Loại rác nào dễ phân hủy từ thức ăn thừa?', 'Rác hữu cơ', ['Rác hữu cơ', 'Pin cũ', 'Chai nhựa', 'Mảnh kính'], 'Vỏ rau, cơm thừa thuộc nhóm này.', 'Thức ăn thừa là rác hữu cơ.');
  choice('ds-022', 'doi-song', 'thu-thach', 'Một chiếc bánh được cắt thành 12 phần. Lớp ăn hết 7 phần. Còn lại bao nhiêu phần?', '5 phần', ['4 phần', '5 phần', '7 phần', '19 phần'], 'Lấy số phần ban đầu trừ số phần đã ăn.', '12 − 7 = 5 phần.');
  choice('ds-023', 'doi-song', 'nhe-nhang', 'Khi đi dưới trời nắng, con nên làm gì để bảo vệ da và mắt?', 'Đội mũ và tránh nắng gắt', ['Nhìn thẳng Mặt Trời', 'Đội mũ và tránh nắng gắt', 'Uống nước biển', 'Chạy ra giữa trưa lâu'], 'Mũ giúp che đầu và mặt.', 'Đội mũ và hạn chế ở nắng gắt giúp bảo vệ cơ thể.');
  choice('ds-024', 'doi-song', 'thu-thach', 'Một lớp có 32 học sinh. Chia đều thành 4 tổ. Mỗi tổ có bao nhiêu học sinh?', '8 học sinh', ['4 học sinh', '6 học sinh', '8 học sinh', '28 học sinh'], 'Chia 32 cho 4 tổ.', '32 : 4 = 8 học sinh.');
  choice('ds-025', 'doi-song', 'nhe-nhang', 'Khi đánh răng, con nên dùng lượng kem đánh răng thế nào?', 'Một lượng vừa đủ theo hướng dẫn', ['Càng nhiều càng tốt', 'Một lượng vừa đủ theo hướng dẫn', 'Không cần kem', 'Dùng kem rửa tay'], 'Dùng quá nhiều không làm răng sạch hơn.', 'Chỉ cần lượng kem vừa đủ và chải răng đúng cách.');
  choice('ds-026', 'doi-song', 'thu-thach', 'Một cuốn truyện có 84 trang. Con đọc 28 trang mỗi ngày. Sau mấy ngày con đọc xong?', '3 ngày', ['2 ngày', '3 ngày', '4 ngày', '56 ngày'], 'Chia tổng số trang cho số trang đọc mỗi ngày.', '84 : 28 = 3 ngày.');
  choice('ds-027', 'doi-song', 'nhe-nhang', 'Khi muốn phát biểu trong lớp, con nên làm gì?', 'Giơ tay xin phép', ['Nói thật to ngay', 'Giơ tay xin phép', 'Chạy lên bảng', 'Ngắt lời bạn'], 'Cần chờ đến lượt nói.', 'Giơ tay giúp lớp học trật tự và tôn trọng mọi người.');
  choice('ds-028', 'doi-song', 'thu-thach', 'Một cửa hàng bán 5 quyển vở hết 30 nghìn đồng. Nếu giá như nhau, một quyển giá bao nhiêu nghìn đồng?', '6 nghìn đồng', ['5 nghìn đồng', '6 nghìn đồng', '10 nghìn đồng', '25 nghìn đồng'], 'Chia 30 cho 5.', '30 : 5 = 6 nghìn đồng.');
  choice('ds-029', 'doi-song', 'nhe-nhang', 'Khi nghe điện thoại của người lớn, con nên làm gì?', 'Lịch sự nói lời chào và nhờ người lớn nghe máy', ['Tự đưa thông tin riêng tư', 'Lịch sự nói lời chào và nhờ người lớn nghe máy', 'Nói to địa chỉ nhà', 'Bấm mọi nút'], 'Thông tin gia đình cần được bảo vệ.', 'Nên lịch sự và để người lớn xử lý cuộc gọi.');
  choice('ds-030', 'doi-song', 'thu-thach', 'Một đồng hồ chỉ 7 giờ 45 phút. Kim phút gần số nào nhất?', 'Số 9', ['Số 3', 'Số 6', 'Số 9', 'Số 12'], '45 phút tương ứng ba phần tư vòng đồng hồ.', 'Kim phút ở số 9 khi là 45 phút.');
  choice('ds-031', 'doi-song', 'nhe-nhang', 'Loại phương tiện nào không thải khói khi con tự đạp?', 'Xe đạp', ['Xe máy', 'Ô tô', 'Xe đạp', 'Xe tải'], 'Phương tiện này dùng sức chân.', 'Xe đạp không dùng xăng khi di chuyển.');
  choice('ds-032', 'doi-song', 'thu-thach', 'Một chuyến xe xuất phát lúc 8 giờ 20 phút, đi trong 1 giờ 40 phút. Xe đến nơi lúc nào?', '10 giờ', ['9 giờ 40 phút', '10 giờ', '10 giờ 20 phút', '11 giờ'], 'Cộng 1 giờ để được 9 giờ 20 phút, rồi cộng 40 phút.', '8 giờ 20 phút + 1 giờ 40 phút = 10 giờ.');
  choice('ds-033', 'doi-song', 'nhe-nhang', 'Nếu làm đổ nước gần ổ điện, con nên làm gì?', 'Tránh chạm vào và báo ngay người lớn', ['Tự dùng tay lau khi đang cắm điện', 'Tránh chạm vào và báo ngay người lớn', 'Đổ thêm nước', 'Cắm thêm thiết bị'], 'Nước và điện có thể nguy hiểm khi gặp nhau.', 'Cần tránh chạm vào và nhờ người lớn xử lý an toàn.');
  choice('ds-034', 'doi-song', 'thu-thach', 'Một tờ giấy A4 được gấp đôi một lần. Số phần bằng nhau trên tờ giấy là bao nhiêu?', '2 phần', ['1 phần', '2 phần', '3 phần', '4 phần'], 'Gấp đôi tạo hai nửa bằng nhau.', 'Một lần gấp đôi chia tờ giấy thành 2 phần bằng nhau.');
  choice('ds-035', 'doi-song', 'nhe-nhang', 'Khi không hiểu bài, con nên làm gì?', 'Hỏi thầy cô hoặc bạn bè', ['Im lặng mãi', 'Hỏi thầy cô hoặc bạn bè', 'Chép bừa', 'Bỏ học'], 'Biết hỏi là một cách học tốt.', 'Hãy hỏi để được giải thích và hiểu bài hơn.');
  choice('ds-036', 'doi-song', 'thu-thach', 'Một bình có 2 lít nước. Rót ra 750 ml. Bình còn lại bao nhiêu ml?', '1 250 ml', ['750 ml', '1 000 ml', '1 250 ml', '1 750 ml'], 'Đổi 2 lít thành ml trước.', '2 lít = 2 000 ml; 2 000 − 750 = 1 250 ml.');
  choice('ds-037', 'doi-song', 'nhe-nhang', 'Hành động nào thể hiện tiết kiệm điện?', 'Tắt đèn khi ra khỏi phòng', ['Bật đèn cả ngày', 'Tắt đèn khi ra khỏi phòng', 'Mở tủ lạnh thật lâu', 'Bật nhiều quạt khi không cần'], 'Không dùng thì nên tắt.', 'Tắt đèn khi ra khỏi phòng giúp tiết kiệm điện.');
  choice('ds-038', 'doi-song', 'thu-thach', 'Một cửa hàng có 100 quả bóng. Buổi sáng bán 38 quả, buổi chiều bán 27 quả. Còn lại bao nhiêu quả?', '35 quả', ['25 quả', '35 quả', '62 quả', '65 quả'], 'Tính tổng số đã bán rồi lấy 100 trừ đi.', '38 + 27 = 65; 100 − 65 = 35 quả.');
  choice('ds-039', 'doi-song', 'nhe-nhang', 'Khi có người lạ rủ đi đâu mà không có bố mẹ đồng ý, con nên làm gì?', 'Từ chối và báo người lớn tin cậy', ['Đi theo ngay', 'Từ chối và báo người lớn tin cậy', 'Cho người lạ biết thông tin nhà', 'Giữ bí mật với bố mẹ'], 'An toàn của con quan trọng nhất.', 'Cần từ chối và tìm sự giúp đỡ của người lớn tin cậy.');
  choice('ds-040', 'doi-song', 'thu-thach', 'Một đội trồng 24 cây trong 3 ngày như nhau. Trung bình mỗi ngày trồng bao nhiêu cây?', '8 cây', ['6 cây', '8 cây', '12 cây', '21 cây'], 'Chia 24 cho 3 ngày.', '24 : 3 = 8 cây mỗi ngày.');

  // 40 câu đố quan sát và ngôn ngữ nhẹ nhàng, không dùng nội dung gây sợ hãi.
  choice('life-001', 'logic', 'nhe-nhang', 'Cái gì càng gọt càng ngắn?', 'Bút chì', ['Cái bàn', 'Bút chì', 'Quyển vở', 'Cái cốc'], 'Vật này thường được gọt bằng đồ gọt bút chì.', 'Mỗi lần gọt, bút chì ngắn hơn.');
  choice('life-002', 'logic', 'nhe-nhang', 'Cái gì có nhiều trang mà không phải là quyển sách?', 'Cuốn lịch', ['Cái bàn', 'Cuốn lịch', 'Cái kéo', 'Quả bóng'], 'Mỗi ngày hoặc mỗi tháng có thể là một trang.', 'Cuốn lịch có nhiều trang để xem ngày tháng.');
  choice('life-003', 'logic', 'nhe-nhang', 'Cái gì có kim nhưng không dùng để khâu?', 'Đồng hồ', ['Áo', 'Đồng hồ', 'Cái lược', 'Quyển vở'], 'Kim của vật này quay để chỉ giờ.', 'Đồng hồ kim dùng kim giờ và kim phút.');
  choice('life-004', 'logic', 'nhe-nhang', 'Cái gì có răng nhưng không cắn được?', 'Cái lược', ['Con mèo', 'Cái lược', 'Cái bát', 'Quả cam'], 'Các “răng” của vật này dùng để chải tóc.', 'Cái lược có răng lược nhưng không cắn được.');
  choice('life-005', 'logic', 'nhe-nhang', 'Cái gì có cổ nhưng không có đầu?', 'Cái chai', ['Con gà', 'Cái chai', 'Cái bàn', 'Đôi giày'], 'Đây là đồ vật có phần cổ để mở nắp.', 'Cái chai có cổ chai nhưng không có đầu.');
  choice('life-006', 'logic', 'nhe-nhang', 'Cái gì có chân nhưng không biết đi?', 'Cái bàn', ['Con chó', 'Cái bàn', 'Con chim', 'Chiếc xe đạp'], 'Đồ vật này có nhiều chân để đứng vững.', 'Cái bàn có chân bàn nhưng không tự đi được.');
  choice('life-007', 'logic', 'nhe-nhang', 'Cái gì có mắt nhưng không nhìn được?', 'Củ khoai tây', ['Con mèo', 'Củ khoai tây', 'Cái gương', 'Đèn pin'], '“Mắt” ở đây là những chỗ lõm nhỏ trên một loại củ.', 'Củ khoai tây có các “mắt” nhưng không nhìn được.');
  choice('life-008', 'logic', 'nhe-nhang', 'Cái gì có cánh mà không bay?', 'Cánh cửa', ['Con chim', 'Cánh cửa', 'Con bướm', 'Máy bay'], '“Cánh” là một phần của đồ vật trong nhà.', 'Cánh cửa mở ra đóng vào nhưng không bay.');
  choice('life-009', 'logic', 'nhe-nhang', 'Cái gì có đầu mà không có tóc?', 'Cây đinh', ['Con người', 'Cây đinh', 'Cái khăn', 'Quả dừa'], 'Đồ vật này dùng để đóng gỗ.', 'Cây đinh có đầu đinh nhưng không có tóc.');
  choice('life-010', 'logic', 'nhe-nhang', 'Cái gì có lưỡi mà không nói được?', 'Chiếc giày', ['Con mèo', 'Chiếc giày', 'Cái bút', 'Cái nón'], '“Lưỡi” là phần nằm dưới dây buộc ở nhiều đôi giày.', 'Giày có lưỡi gà nhưng không nói được.');
  choice('life-011', 'logic', 'nhe-nhang', 'Cái gì càng lấy đi thì càng to?', 'Cái hố', ['Quả bóng', 'Cái hố', 'Cốc nước', 'Quyển sách'], 'Khi đào đất ra, khoảng trống tăng lên.', 'Càng lấy đất đi, cái hố càng lớn.');
  choice('life-012', 'logic', 'nhe-nhang', 'Cái gì luôn đi lên nhưng không bao giờ đi xuống?', 'Tuổi của con', ['Chiếc thang máy', 'Tuổi của con', 'Quả bóng', 'Cái lá'], 'Mỗi năm con thêm một tuổi.', 'Tuổi tăng theo thời gian.');
  choice('life-013', 'logic', 'nhe-nhang', 'Cái gì có thành phố, sông, núi nhưng không có người, nước hay cây?', 'Bản đồ', ['Khu vườn', 'Bản đồ', 'Công viên', 'Bức tường'], 'Đây là hình vẽ thu nhỏ một khu vực.', 'Bản đồ thể hiện ký hiệu thành phố, sông, núi.');
  choice('life-014', 'logic', 'nhe-nhang', 'Cái gì có thể giữ được mà không cần cầm bằng tay?', 'Lời hứa', ['Quả bóng', 'Lời hứa', 'Cốc nước', 'Cái bàn'], 'Đây là điều con nói sẽ thực hiện.', 'Ta “giữ lời hứa” bằng hành động.');
  choice('life-015', 'logic', 'nhe-nhang', 'Cái gì cần được mở ra trước khi con có thể dùng bút chì mới?', 'Hộp bút', ['Cái bàn', 'Hộp bút', 'Cửa sổ', 'Quyển sách'], 'Bút chì mới thường được cất trong vật này.', 'Cần mở hộp bút để lấy bút chì.');
  choice('life-016', 'logic', 'thu-thach', 'Cái gì đi khắp thế giới nhưng luôn ở một góc?', 'Con tem', ['Chiếc máy bay', 'Con tem', 'Quả bóng', 'Cái ghế'], 'Vật này được dán ở một góc phong bì.', 'Con tem theo thư đi nhiều nơi nhưng vẫn ở góc phong bì.');
  choice('life-017', 'logic', 'nhe-nhang', 'Khi trời mưa mà không có ô, con có thể đứng dưới đâu để tránh ướt?', 'Mái hiên', ['Giữa đường', 'Mái hiên', 'Dưới vũng nước', 'Ngoài sân'], 'Đây là phần nhô ra che trước cửa nhà.', 'Mái hiên che mưa cho người đứng bên dưới.');
  choice('life-018', 'logic', 'nhe-nhang', 'Cái gì càng lau càng ướt?', 'Khăn lau', ['Cái bàn', 'Khăn lau', 'Quyển sách', 'Bút chì'], 'Khăn hút nước khi lau.', 'Khăn lau càng dùng để lau nước thì càng ướt.');
  choice('life-019', 'logic', 'nhe-nhang', 'Cái gì có thể mở nhưng không phải cửa?', 'Quyển sách', ['Cửa sổ', 'Quyển sách', 'Khóa kéo', 'Cái bàn'], 'Ta thường nói “mở sách ra”.', 'Quyển sách có thể được mở để đọc.');
  choice('life-020', 'logic', 'nhe-nhang', 'Cái gì có thể chạy nhưng không có chân?', 'Nước', ['Con mèo', 'Nước', 'Cái ghế', 'Cái nón'], 'Ta có thể nói “nước chảy”.', 'Nước chảy như đang “chạy” nhưng không có chân.');
  choice('life-021', 'logic', 'nhe-nhang', 'Cái gì có thể bay nhưng không có cánh?', 'Thời gian', ['Con cá', 'Thời gian', 'Cái bàn', 'Hòn đá'], 'Đây là cách nói về việc ngày tháng trôi nhanh.', 'Ta hay nói “thời gian bay nhanh”.');
  choice('life-022', 'logic', 'nhe-nhang', 'Cái gì có thể vỡ mà không cần làm rơi?', 'Lời hứa', ['Quả trứng', 'Lời hứa', 'Cái cốc', 'Viên đá'], 'Không giữ điều đã hứa thì điều này bị “vỡ”.', 'Ta có thể phá vỡ lời hứa mà không làm rơi vật gì.');
  choice('life-023', 'logic', 'nhe-nhang', 'Cái gì luôn ở phía trước con nhưng con không thể nhìn thấy trực tiếp?', 'Tương lai', ['Cái mũi', 'Tương lai', 'Cái bàn', 'Quyển vở'], 'Đây là thời gian chưa đến.', 'Tương lai ở phía trước nhưng chưa xảy ra.');
  choice('life-024', 'logic', 'nhe-nhang', 'Cái gì có thể đầy nhưng không phải cái cốc?', 'Lịch học', ['Quả bóng', 'Lịch học', 'Cái kéo', 'Cây bút'], 'Một ngày có nhiều hoạt động thì ta nói điều này “đầy”.', 'Lịch học có thể đầy các hoạt động.');
  choice('life-025', 'logic', 'nhe-nhang', 'Cái gì càng chia sẻ thì càng có nhiều?', 'Niềm vui', ['Bánh kẹo', 'Niềm vui', 'Nước trong cốc', 'Tiền lẻ'], 'Cảm xúc tốt lan tỏa khi mọi người cùng vui.', 'Chia sẻ niềm vui thường làm mọi người vui hơn.');
  choice('life-026', 'logic', 'thu-thach', 'Có một tờ giấy, con gấp đôi hai lần. Tờ giấy có bao nhiêu lớp chồng lên nhau ở phần giữa?', '4 lớp', ['2 lớp', '3 lớp', '4 lớp', '8 lớp'], 'Mỗi lần gấp đôi làm số lớp tăng gấp hai.', 'Lần đầu: 2 lớp; lần thứ hai: 4 lớp.');
  choice('life-027', 'logic', 'nhe-nhang', 'Cái gì có thể làm căn phòng sáng lên dù rất nhỏ?', 'Công tắc đèn', ['Cái gối', 'Công tắc đèn', 'Quyển vở', 'Cái lược'], 'Chạm vào vật này thì đèn có thể bật.', 'Công tắc điều khiển đèn chiếu sáng căn phòng.');
  choice('life-028', 'logic', 'nhe-nhang', 'Cái gì không có miệng nhưng có thể trả lời con khi con hỏi?', 'Cuốn từ điển', ['Cái ghế', 'Cuốn từ điển', 'Cái cốc', 'Cái kéo'], 'Tra cứu từ trong sách này sẽ biết nghĩa.', 'Từ điển “trả lời” bằng thông tin về từ ngữ.');
  choice('life-029', 'logic', 'nhe-nhang', 'Cái gì có thể đi vòng quanh nhà nhưng không bước một bước nào?', 'Hàng rào', ['Con mèo', 'Hàng rào', 'Chiếc giày', 'Quả bóng'], 'Vật này bao quanh khu đất hoặc ngôi nhà.', 'Hàng rào bao quanh nhà nhưng không tự bước đi.');
  choice('life-030', 'logic', 'nhe-nhang', 'Cái gì có thể nhìn thấy trong gương nhưng không ở sau lưng gương?', 'Hình ảnh phản chiếu của con', ['Một căn phòng khác', 'Hình ảnh phản chiếu của con', 'Con mèo thật', 'Một cái cây thật'], 'Gương phản chiếu hình ảnh trước nó.', 'Hình trong gương là ảnh phản chiếu, không phải người ở phía sau.');
  choice('life-031', 'logic', 'nhe-nhang', 'Cái gì có thể lên xuống nhưng luôn ở đúng một chỗ?', 'Cầu thang', ['Quả bóng', 'Cầu thang', 'Con chim', 'Xe đạp'], 'Ta đi lên hoặc xuống bằng vật này.', 'Cầu thang không di chuyển, người đi lên xuống trên đó.');
  choice('life-032', 'logic', 'thu-thach', 'Một tờ lịch có ghi thứ Hai là ngày 1. Ngày 8 sẽ là thứ mấy?', 'Thứ Hai', ['Thứ Bảy', 'Chủ nhật', 'Thứ Hai', 'Thứ Ba'], 'Sau 7 ngày sẽ lặp lại thứ trong tuần.', 'Ngày 8 cách ngày 1 đúng 7 ngày nên cũng là thứ Hai.');
  choice('life-033', 'logic', 'nhe-nhang', 'Cái gì có thể “nói” mà không có miệng khi chuông reo?', 'Điện thoại', ['Cái ghế', 'Điện thoại', 'Cái bút', 'Quả cam'], 'Vật này phát ra âm thanh và giúp liên lạc.', 'Điện thoại có thể reo và phát lời nói.');
  choice('life-034', 'logic', 'nhe-nhang', 'Cái gì càng dùng để ghi nhớ thì càng có nhiều trang ghi chép?', 'Quyển sổ', ['Cái bàn', 'Quyển sổ', 'Cái nón', 'Cái thìa'], 'Ta ghi điều cần nhớ vào vật này.', 'Quyển sổ dùng để ghi chép.');
  choice('life-035', 'logic', 'nhe-nhang', 'Cái gì không phải là thức ăn nhưng có thể “nuốt” được trong câu nói “nuốt lời”?', 'Lời hứa', ['Bánh mì', 'Lời hứa', 'Nước', 'Kẹo'], 'Đây là nghĩa bóng, không phải nuốt bằng miệng.', '“Nuốt lời” nghĩa là không giữ lời đã nói.');
  choice('life-036', 'logic', 'thu-thach', 'Một bạn đi lên 4 bậc cầu thang rồi xuống 2 bậc. So với chỗ bắt đầu, bạn đang cao hơn mấy bậc?', '2 bậc', ['0 bậc', '1 bậc', '2 bậc', '6 bậc'], 'Lấy số bậc đi lên trừ số bậc đi xuống.', '4 − 2 = 2 bậc.');
  choice('life-037', 'logic', 'nhe-nhang', 'Cái gì có thể được “mở rộng” bằng cách học thêm mỗi ngày?', 'Kiến thức', ['Cái cốc', 'Kiến thức', 'Cái giày', 'Cánh cửa'], 'Học giúp con hiểu thêm nhiều điều.', 'Kiến thức tăng lên khi ta học hỏi.');
  choice('life-038', 'logic', 'nhe-nhang', 'Cái gì có thể được “gieo” nhưng không phải hạt cây?', 'Ý tưởng', ['Đá', 'Ý tưởng', 'Cái ghế', 'Quyển sách'], 'Ta có thể khởi đầu một điều mới bằng thứ này.', 'Ta nói “gieo ý tưởng” theo nghĩa tạo cảm hứng ban đầu.');
  choice('life-039', 'logic', 'nhe-nhang', 'Một ngày có 24 giờ. Nửa ngày có bao nhiêu giờ?', '12 giờ', ['6 giờ', '10 giờ', '12 giờ', '24 giờ'], 'Chia 24 thành hai phần bằng nhau.', '24 : 2 = 12 giờ.');
  choice('life-040', 'logic', 'thu-thach', 'Trên một con đường có 5 cột đèn, khoảng cách giữa hai cột liền nhau là 10 m. Khoảng cách từ cột đầu đến cột cuối là bao nhiêu?', '40 m', ['30 m', '40 m', '50 m', '60 m'], '5 cột tạo ra mấy khoảng cách giữa các cột?', 'Có 4 khoảng: 4 × 10 = 40 m.');

  // Phân mức “Khó” được biên tập riêng; mỗi chủ đề phát hành có ít nhất 15 câu khó.
  const hardIds = new Set([
    'toan-008', 'toan-011', 'toan-013', 'toan-015', 'toan-016', 'toan-017', 'toan-018', 'toan-019', 'toan-022', 'toan-023', 'toan-024', 'toan-027', 'toan-028', 'toan-029', 'toan-039', 'toan-040',
    'logic-005', 'logic-008', 'logic-010', 'logic-011', 'logic-013', 'logic-015', 'logic-016', 'logic-017', 'logic-019', 'logic-021', 'logic-023', 'logic-024', 'logic-026', 'logic-028', 'logic-030', 'logic-034', 'logic-036', 'logic-039',
    'tv-004', 'tv-006', 'tv-010', 'tv-011', 'tv-012', 'tv-014', 'tv-019', 'tv-022', 'tv-024', 'tv-026', 'tv-028', 'tv-030', 'tv-032', 'tv-034', 'tv-036', 'tv-038', 'tv-040',
    'tn-007', 'tn-010', 'tn-014', 'tn-016', 'tn-018', 'tn-020', 'tn-022', 'tn-024', 'tn-028', 'tn-030', 'tn-032', 'tn-034', 'tn-036', 'tn-038', 'tn-040',
    'ds-004', 'ds-007', 'ds-010', 'ds-013', 'ds-016', 'ds-019', 'ds-022', 'ds-024', 'ds-028', 'ds-030', 'ds-032', 'ds-034', 'ds-036', 'ds-038', 'ds-040'
  ]);
  bank.forEach((item) => { if (hardIds.has(item.id)) item.level = 'kho'; });

  // Mức “Thử thách” có tối thiểu 15 câu ở từng chủ đề để luôn tạo được lượt 15 câu đúng bộ lọc.
  const challengeIds = new Set([
    'toan-003', 'toan-006', 'toan-009', 'toan-012', 'toan-014', 'toan-025', 'toan-008',
    'logic-007', 'logic-009', 'logic-014', 'logic-018', 'logic-020', 'logic-025', 'logic-027', 'logic-029', 'logic-031', 'logic-005', 'logic-008', 'logic-010',
    'tv-001', 'tv-002', 'tv-003', 'tv-005', 'tv-007', 'tv-008', 'tv-009', 'tv-013', 'tv-015', 'tv-016', 'tv-017', 'tv-018', 'tv-004', 'tv-006',
    'tn-001', 'tn-002', 'tn-003', 'tn-005', 'tn-006', 'tn-008', 'tn-009', 'tn-011', 'tn-013', 'tn-015', 'tn-017', 'tn-019',
    'ds-001', 'ds-002', 'ds-003', 'ds-005', 'ds-006', 'ds-008', 'ds-009', 'ds-011', 'ds-012', 'ds-014', 'ds-015', 'ds-017', 'ds-018', 'ds-020'
  ]);
  bank.forEach((item) => { if (challengeIds.has(item.id)) item.level = 'thu-thach'; });

  // 20 câu có hình SVG được vẽ tại chỗ. Hình chỉ minh hoạ dữ kiện, không chứa đáp án chữ.
  visualChoice('visual-001', 'toan', 'nhe-nhang', 'Đếm các ngôi sao trong hình. Có bao nhiêu ngôi sao?', '6', ['5', '6', '7', '8'], 'Đếm lần lượt từ trái sang phải.', 'Có 6 ngôi sao.', { type: 'count-shapes', shape: 'star', count: 6, color: '#f5b700', description: 'Sáu ngôi sao màu vàng.' });
  visualChoice('visual-002', 'toan', 'nhe-nhang', 'Đếm các hình tròn trong hình. Có bao nhiêu hình tròn?', '8', ['6', '7', '8', '9'], 'Đếm theo từng hàng để không bị sót.', 'Có 8 hình tròn.', { type: 'count-shapes', shape: 'circle', count: 8, color: '#2f80ed', description: 'Tám hình tròn màu xanh.' });
  visualChoice('visual-003', 'toan', 'thu-thach', 'Trong hình có bao nhiêu hình tam giác?', '9', ['7', '8', '9', '10'], 'Chia hình thành ba hàng rồi đếm từng hàng.', 'Có 9 hình tam giác.', { type: 'count-shapes', shape: 'triangle', count: 9, color: '#ef7d32', description: 'Chín hình tam giác màu cam.' });
  visualChoice('visual-004', 'toan', 'thu-thach', 'Quan sát tia số. Chấm tròn đang ở số nào?', '45', ['35', '40', '45', '50'], 'Mỗi vạch nhỏ hơn vạch trước 5 đơn vị.', 'Chấm tròn nằm ở vạch 45.', { type: 'number-line', start: 30, end: 55, step: 5, value: 45, description: 'Tia số từ 30 đến 55, chấm tròn tại 45.' });
  visualChoice('visual-005', 'toan', 'kho', 'Tia số từ 90 đến 130 có một chấm tròn. Chấm tròn đó là số nào?', '120', ['100', '110', '120', '130'], 'Các vạch cách nhau 10 đơn vị.', 'Chấm tròn nằm ở vạch 120.', { type: 'number-line', start: 90, end: 130, step: 10, value: 120, description: 'Tia số từ 90 đến 130, chấm tròn tại 120.' });
  visualChoice('visual-006', 'toan', 'thu-thach', 'Đồng hồ trong hình có kim phút ở số 12 và kim giờ ở số 3. Đồng hồ chỉ mấy giờ?', '3 giờ', ['2 giờ', '3 giờ', '4 giờ', '6 giờ'], 'Kim dài chỉ phút; kim ngắn chỉ giờ.', 'Kim phút chỉ số 12 và kim giờ chỉ số 3, nên là 3 giờ.', { type: 'clock', hour: 3, minute: 0, description: 'Đồng hồ kim chỉ 3 giờ đúng.' });
  visualChoice('visual-007', 'toan', 'thu-thach', 'Đồng hồ trong hình có kim phút ở số 6. Đồng hồ chỉ mấy giờ?', '7 giờ 30 phút', ['7 giờ', '7 giờ 15 phút', '7 giờ 30 phút', '8 giờ 30 phút'], 'Kim phút ở số 6 là 30 phút.', 'Kim phút ở số 6 và kim giờ nằm giữa 7 với 8, nên là 7 giờ 30 phút.', { type: 'clock', hour: 7, minute: 30, description: 'Đồng hồ kim chỉ 7 giờ 30 phút.' });
  visualChoice('visual-008', 'logic', 'nhe-nhang', 'Dãy hình tròn đỏ, hình vuông vàng, ... cần thêm hình nào?', 'Tam giác xanh', ['Hình tròn đỏ', 'Hình vuông vàng', 'Tam giác xanh', 'Ngôi sao tím'], 'Dãy lặp lại theo thứ tự tròn, vuông, tam giác.', 'Sau hình tròn đỏ và hình vuông vàng sẽ đến tam giác xanh.', { type: 'sequence', shapes: ['circle', 'square'], next: 'triangle', description: 'Dãy gồm hình tròn đỏ, hình vuông vàng và một vị trí cần tìm.' });
  visualChoice('visual-009', 'logic', 'thu-thach', 'Dãy lặp lại tròn đỏ, tam giác cam, ... thì hình tiếp theo là gì?', 'Hình vuông xanh', ['Hình tròn đỏ', 'Hình vuông xanh', 'Tam giác cam', 'Ngôi sao tím'], 'Màu và hình lặp lại theo nhóm ba: tròn, tam giác, vuông.', 'Dãy lặp lại tròn đỏ, tam giác cam, vuông xanh; vị trí tiếp theo là vuông xanh.', { type: 'sequence', shapes: ['circle', 'triangle', 'circle', 'triangle'], next: 'square', description: 'Dãy xen kẽ hình tròn đỏ và tam giác cam, vị trí tiếp theo cần tìm.' });
  visualChoice('visual-010', 'logic', 'thu-thach', 'Có bao nhiêu hình vuông trong hình?', '7', ['5', '6', '7', '8'], 'Đếm từng hàng từ trên xuống dưới.', 'Có 7 hình vuông.', { type: 'count-shapes', shape: 'square', count: 7, color: '#35a85a', description: 'Bảy hình vuông màu xanh lá.' });
  visualChoice('visual-011', 'logic', 'kho', 'Quan sát dãy hình. Mảnh ghép còn thiếu là gì?', 'Hình tròn đỏ', ['Hình tròn đỏ', 'Hình vuông vàng', 'Tam giác xanh', 'Ngôi sao tím'], 'Dãy lặp lại theo nhóm: tròn, tam giác, vuông.', 'Sau tam giác xanh và hình vuông vàng, dãy quay lại hình tròn đỏ.', { type: 'sequence', shapes: ['triangle', 'square'], next: 'circle', description: 'Dãy gồm tam giác xanh, hình vuông vàng và một vị trí cần tìm.' });
  visualChoice('visual-012', 'tieng-viet', 'nhe-nhang', 'Quan sát ba biểu tượng theo thứ tự. Biểu tượng nào là biểu tượng thứ ba?', 'Ngôi sao vàng', ['Hình tròn đỏ', 'Hình vuông xanh', 'Ngôi sao vàng', 'Tam giác cam'], 'Đọc theo thứ tự từ trái sang phải.', 'Biểu tượng thứ ba là ngôi sao vàng.', { type: 'sequence', shapes: ['circle', 'square', 'star'], next: null, description: 'Ba biểu tượng theo thứ tự: hình tròn đỏ, hình vuông xanh, ngôi sao vàng.' });
  visualChoice('visual-013', 'tieng-viet', 'thu-thach', 'Quan sát các hình. Hình nào ở giữa hai ngôi sao?', 'Hình tròn xanh', ['Hình tròn xanh', 'Hình vuông vàng', 'Tam giác cam', 'Không có hình nào'], 'Nhìn vị trí liền kề bên trái và bên phải.', 'Hình tròn xanh nằm giữa hai ngôi sao.', { type: 'sequence', shapes: ['star', 'circle', 'star'], next: null, description: 'Ba biểu tượng theo thứ tự: ngôi sao vàng, hình tròn xanh, ngôi sao vàng.' });
  visualChoice('visual-014', 'tu-nhien', 'nhe-nhang', 'Quan sát hình. Có bao nhiêu giọt nước?', '5', ['4', '5', '6', '7'], 'Đếm từng giọt từ trái sang phải.', 'Có 5 giọt nước.', { type: 'count-shapes', shape: 'drop', count: 5, color: '#39a8f4', description: 'Năm giọt nước màu xanh.' });
  visualChoice('visual-015', 'tu-nhien', 'thu-thach', 'Quan sát hình. Có bao nhiêu chiếc lá?', '8', ['6', '7', '8', '9'], 'Chia thành hai hàng rồi đếm.', 'Có 8 chiếc lá.', { type: 'count-shapes', shape: 'leaf', count: 8, color: '#36a85c', description: 'Tám chiếc lá màu xanh.' });
  visualChoice('visual-016', 'tu-nhien', 'kho', 'Quan sát hình. Có bao nhiêu tia nắng quanh mặt trời?', '10', ['8', '9', '10', '12'], 'Đếm các tia ngắn xung quanh hình tròn ở giữa.', 'Có 10 tia nắng.', { type: 'sun-rays', count: 10, description: 'Mặt trời với mười tia nắng.' });
  visualChoice('visual-017', 'doi-song', 'nhe-nhang', 'Kim phút ở số 12, kim giờ ở số 8. Đồng hồ chỉ mấy giờ?', '8 giờ', ['7 giờ', '8 giờ', '9 giờ', '10 giờ'], 'Kim phút ở số 12 là giờ đúng.', 'Kim phút chỉ số 12 và kim giờ chỉ số 8, nên là 8 giờ.', { type: 'clock', hour: 8, minute: 0, description: 'Đồng hồ kim chỉ 8 giờ đúng.' });
  visualChoice('visual-018', 'doi-song', 'thu-thach', 'Đồng hồ có kim phút ở số 3 và kim giờ vừa qua số 4. Đồng hồ chỉ mấy giờ?', '4 giờ 15 phút', ['4 giờ', '4 giờ 15 phút', '4 giờ 30 phút', '5 giờ 15 phút'], 'Kim phút ở số 3 là 15 phút.', 'Kim phút ở số 3 và kim giờ vừa qua số 4, nên là 4 giờ 15 phút.', { type: 'clock', hour: 4, minute: 15, description: 'Đồng hồ kim chỉ 4 giờ 15 phút.' });
  visualChoice('visual-019', 'doi-song', 'thu-thach', 'Trên tia số từ 10 đến 30, chấm tròn được đánh dấu ở số nào?', '25', ['15', '20', '25', '30'], 'Các vạch cách nhau 5 đơn vị.', 'Chấm tròn nằm tại 25.', { type: 'number-line', start: 10, end: 30, step: 5, value: 25, description: 'Tia số từ 10 đến 30, chấm tròn tại 25.' });
  visualChoice('visual-020', 'doi-song', 'kho', 'Quan sát hình. Có bao nhiêu biển báo hình tam giác?', '6', ['4', '5', '6', '7'], 'Đếm từng biển báo theo hàng.', 'Có 6 biển báo hình tam giác.', { type: 'count-shapes', shape: 'triangle', count: 6, color: '#ee7e37', description: 'Sáu biển báo hình tam giác màu cam.' });

  // Đã rà soát 240 câu chữ và bổ sung 20 câu minh hoạ SVG: 260 câu được phát hành.
  // Ghép thêm kho câu đố đã chọn lọc thủ công từ tài liệu Word.
  const curatedWordQuestions = Array.isArray(window.IMathWordCuratedQuestions)
    ? window.IMathWordCuratedQuestions
    : [];
  curatedWordQuestions.forEach((item) => bank.push(item));

  const languageLogicExpansionQuestions = Array.isArray(window.IMathLanguageLogicExpansionQuestions)
    ? window.IMathLanguageLogicExpansionQuestions
    : [];
  languageLogicExpansionQuestions.forEach((item) => bank.push(item));

  const vietnameseFolkloreQuestions = Array.isArray(window.IMathVietnameseFolkloreQuestions)
    ? window.IMathVietnameseFolkloreQuestions
    : [];
  vietnameseFolkloreQuestions.forEach((item) => bank.push(item));

  const vietnameseFolkloreVolumeTwoQuestions = Array.isArray(window.IMathVietnameseFolkloreVolumeTwoQuestions)
    ? window.IMathVietnameseFolkloreVolumeTwoQuestions
    : [];
  vietnameseFolkloreVolumeTwoQuestions.forEach((item) => bank.push(item));

  const vietnameseExpansion500Questions = Array.isArray(window.IMathVietnameseExpansion500Questions)
    ? window.IMathVietnameseExpansion500Questions
    : [];
  vietnameseExpansion500Questions.forEach((item) => bank.push(item));

  // Mỗi gói mở rộng tự khai báo factKey cho một kiến thức cụ thể. Khóa này
  // giúp chặn cùng một ý nghĩa bị đưa vào ngân hàng hai lần với câu chữ khác.
  const natureAnimalQuestions = Array.isArray(window.IMathNatureAnimalQuestions)
    ? window.IMathNatureAnimalQuestions
    : [];
  natureAnimalQuestions.forEach((item) => bank.push(item));

  const natureHabitatQuestions = Array.isArray(window.IMathNatureHabitatQuestions)
    ? window.IMathNatureHabitatQuestions
    : [];
  natureHabitatQuestions.forEach((item) => bank.push(item));

  const natureFoodBehaviorQuestions = Array.isArray(window.IMathNatureFoodBehaviorQuestions)
    ? window.IMathNatureFoodBehaviorQuestions
    : [];
  natureFoodBehaviorQuestions.forEach((item) => bank.push(item));

  const natureVietnamAnimalQuestions = Array.isArray(window.IMathNatureVietnamAnimalQuestions)
    ? window.IMathNatureVietnamAnimalQuestions
    : [];
  natureVietnamAnimalQuestions.forEach((item) => bank.push(item));

  const naturePlantsCropsQuestions = Array.isArray(window.IMathNaturePlantsCropsQuestions)
    ? window.IMathNaturePlantsCropsQuestions
    : [];
  naturePlantsCropsQuestions.forEach((item) => bank.push(item));

  const naturePlantPartsQuestions = Array.isArray(window.IMathNaturePlantPartsQuestions)
    ? window.IMathNaturePlantPartsQuestions
    : [];
  naturePlantPartsQuestions.forEach((item) => bank.push(item));

  const natureWeatherClimateQuestions = Array.isArray(window.IMathNatureWeatherClimateQuestions)
    ? window.IMathNatureWeatherClimateQuestions
    : [];
  natureWeatherClimateQuestions.forEach((item) => bank.push(item));

  const natureEnvironmentQuestions = Array.isArray(window.IMathNatureEnvironmentQuestions)
    ? window.IMathNatureEnvironmentQuestions
    : [];
  natureEnvironmentQuestions.forEach((item) => bank.push(item));

  const natureEarthSpaceQuestions = Array.isArray(window.IMathNatureEarthSpaceQuestions)
    ? window.IMathNatureEarthSpaceQuestions
    : [];
  natureEarthSpaceQuestions.forEach((item) => bank.push(item));

  const lifeHomeObjectQuestions = Array.isArray(window.IMathLifeHomeObjectQuestions)
    ? window.IMathLifeHomeObjectQuestions
    : [];
  lifeHomeObjectQuestions.forEach((item) => bank.push(item));

  const natureMaterialsEnergyQuestions = Array.isArray(window.IMathNatureMaterialsEnergyQuestions)
    ? window.IMathNatureMaterialsEnergyQuestions
    : [];
  natureMaterialsEnergyQuestions.forEach((item) => bank.push(item));

  const activeBank = bank;
  const ids = new Set();
  const prompts = new Set();
  const factKeys = new Set();
  activeBank.forEach((item) => {
    if (ids.has(item.id) || prompts.has(item.prompt)) throw new Error('Ngân hàng câu đố có mục trùng lặp.');
    if (!topicLabels[item.topic] || !levelLabels[item.level] || !item.answers.length || !item.hint || !item.explanation) throw new Error('Câu đố thiếu dữ liệu bắt buộc: ' + item.id);
    if (item.type === 'choice' && (!Array.isArray(item.options) || item.options.indexOf(item.answers[0]) === -1)) throw new Error('Phương án chưa hợp lệ: ' + item.id);
    if (item.factKey) {
      if (typeof item.factKey !== 'string' || !item.factKey.trim() || factKeys.has(item.factKey)) throw new Error('Kiến thức bị trùng hoặc thiếu factKey: ' + item.id);
      factKeys.add(item.factKey);
    }
    ids.add(item.id);
    prompts.add(item.prompt);
  });
  if (activeBank.length !== 3080) throw new Error('Ngân hàng câu đố phải có đúng 3080 câu, hiện có ' + activeBank.length + '.');

  window.IMathRiddleBank = Object.freeze({
    questions: Object.freeze(activeBank.map((item) => Object.freeze(item))),
    topicLabels: Object.freeze(topicLabels),
    levelLabels: Object.freeze(levelLabels)
  });
}());
