(function () {
  'use strict';

  // 150 câu về vật liệu, âm thanh và năng lượng: 30 khái niệm, mỗi mục có 5 dữ kiện.
  const topics = [
    ['gỗ', ['là vật liệu lấy từ thân hoặc cành của cây', 'có thể dùng làm bàn ghế, cửa hoặc đồ thủ công', 'cần được bảo quản khô để hạn chế ẩm mốc', 'có thể nổi trên nước với nhiều loại gỗ', 'có thể cháy nên cần để xa nguồn lửa']],
    ['kim loại', ['thường có bề mặt sáng bóng khi được làm sạch', 'nhiều loại có thể dẫn điện và dẫn nhiệt', 'có thể dùng làm nồi, xe đạp hoặc dụng cụ', 'một số loại bị gỉ khi gặp nước và không khí lâu ngày', 'có thể được tái chế nhiều lần']],
    ['nhựa', ['là vật liệu được dùng làm nhiều đồ dùng hằng ngày', 'nhiều loại nhẹ và khó vỡ', 'một số loại cần rất lâu để phân hủy trong tự nhiên', 'có thể được tạo thành chai, hộp hoặc đồ chơi', 'cần được phân loại để tái chế khi có thể']],
    ['thủy tinh', ['là vật liệu thường trong suốt', 'có thể dùng làm cốc, chai hoặc cửa sổ', 'có thể vỡ thành mảnh sắc khi rơi mạnh', 'cần được nhặt bằng dụng cụ phù hợp nếu bị vỡ', 'có thể tái chế ở nơi thu gom thích hợp']],
    ['gốm sứ', ['được tạo từ đất sét rồi nung ở nhiệt độ cao', 'có thể dùng làm bát, đĩa hoặc bình hoa', 'thường cứng nhưng có thể vỡ khi rơi', 'nhiều sản phẩm có lớp men bóng bên ngoài', 'không nên dùng đồ đã nứt vỡ để đựng thức ăn nóng']],
    ['cao su', ['có tính đàn hồi ở nhiều sản phẩm', 'được dùng làm lốp xe, dây chun hoặc găng tay', 'có thể co giãn rồi trở về gần hình dạng ban đầu', 'nhiều loại không dẫn điện tốt', 'cần tránh đốt vì có thể tạo khói gây hại']],
    ['vải', ['được dùng để may quần áo và nhiều đồ dùng mềm', 'có thể làm từ sợi tự nhiên hoặc sợi nhân tạo', 'cần giặt sạch khi bị bẩn', 'có nhiều độ dày và khả năng thấm nước khác nhau', 'dễ cháy hơn kim loại hoặc thủy tinh ở nhiều loại']],
    ['giấy', ['được dùng để viết, vẽ và in sách', 'có thể gấp, cắt hoặc xé dễ hơn nhiều vật liệu cứng', 'cần giữ khô để không bị nhòe hoặc rách', 'có thể tái chế nếu sạch và khô', 'được làm từ sợi có nguồn gốc thực vật ở nhiều loại']],
    ['bìa carton', ['là loại giấy dày thường dùng làm hộp', 'có thể có lớp sóng bên trong để tăng độ cứng', 'thường dùng để đóng gói đồ vật', 'cần tránh để bị ướt vì dễ mềm', 'có thể đưa vào nhóm tái chế khi sạch']],
    ['đá', ['là vật liệu tự nhiên thường cứng', 'có thể dùng trong xây dựng hoặc trang trí', 'có nhiều màu sắc và vân khác nhau', 'khó bị xé hoặc uốn cong bằng tay', 'có thể bị mài mòn rất chậm bởi gió và nước']],
    ['cát', ['gồm nhiều hạt khoáng rất nhỏ', 'có thể tìm thấy ở bãi biển, lòng sông hoặc vùng đất khô', 'được dùng trong xây dựng khi trộn đúng cách', 'có thể chảy qua tay vì gồm các hạt rời', 'cần không lấy cát bừa bãi làm ảnh hưởng môi trường']],
    ['đất sét', ['có thể nặn tạo hình khi ẩm', 'có thể trở nên cứng sau khi được nung', 'được dùng làm gốm và đồ thủ công', 'có thể giữ nước nhiều hơn cát', 'cần phơi hoặc nung đúng cách để sản phẩm bền hơn']],
    ['âm thanh', ['được tạo ra khi vật rung động', 'có thể truyền qua không khí, nước và một số vật rắn', 'được tai nghe nhận biết', 'có thể to hoặc nhỏ tùy mức rung động và khoảng cách', 'không truyền được trong chân không']],
    ['rung động', ['là chuyển động qua lại rất nhanh của một vật', 'có thể tạo ra âm thanh', 'có thể cảm nhận khi chạm nhẹ vào dây đàn đang phát tiếng', 'có thể nhìn thấy ở một số vật rung mạnh', 'giảm dần thì âm thanh cũng thường nhỏ đi']],
    ['nguồn âm', ['là vật đang rung để tạo ra âm thanh', 'có thể là dây đàn, mặt trống hoặc loa', 'không phải lúc nào cũng nhìn thấy rung động bằng mắt thường', 'cần rung động thì mới tạo âm thanh', 'có thể tạo tiếng to hoặc nhỏ tùy cách rung']],
    ['nhạc cụ dây', ['tạo âm thanh khi dây được gảy hoặc kéo', 'có thể thay đổi độ cao âm khi thay đổi độ căng hoặc độ dài dây', 'ví dụ quen thuộc là đàn guitar', 'cần có phần thân để cộng hưởng âm ở nhiều loại', 'có thể phát tiếng khi dây rung']],
    ['loa', ['là thiết bị biến tín hiệu điện thành âm thanh', 'có màng loa rung để phát ra tiếng', 'cần dùng âm lượng vừa phải để bảo vệ tai', 'không nên để nước vào thiết bị này', 'có thể dùng trong máy tính, điện thoại hoặc tivi']],
    ['pin', ['là nguồn cung cấp điện cho nhiều thiết bị nhỏ', 'cần lắp đúng cực dương và cực âm theo hướng dẫn', 'không nên ném vào lửa hoặc tháo phá', 'cần thu gom riêng khi đã dùng xong', 'có thể dùng cho điều khiển, đồ chơi hoặc đồng hồ']],
    ['mạch điện', ['là đường đi khép kín để dòng điện hoạt động', 'có thể gồm nguồn điện, dây dẫn và thiết bị dùng điện', 'nếu bị hở ở một chỗ thì thiết bị có thể không hoạt động', 'cần được lắp đúng và an toàn', 'không nên tự ý sửa khi chưa có người lớn hướng dẫn']],
    ['điện năng', ['là dạng năng lượng giúp nhiều thiết bị hoạt động', 'có thể biến thành ánh sáng, nhiệt hoặc chuyển động', 'cần được sử dụng tiết kiệm', 'có thể nguy hiểm khi gặp nước hoặc dây điện hở', 'được cung cấp từ pin, ổ cắm hoặc một số nguồn khác']],
    ['nhiệt năng', ['là năng lượng liên quan đến độ nóng của vật', 'có thể truyền từ vật nóng sang vật lạnh hơn', 'có thể dùng để nấu chín thức ăn', 'cần cẩn thận để tránh bỏng khi tiếp xúc nguồn nhiệt', 'có thể đến từ Mặt Trời, lửa hoặc thiết bị điện']],
    ['năng lượng Mặt Trời', ['đến từ ánh sáng và nhiệt của Mặt Trời', 'có thể được tấm pin mặt trời chuyển thành điện', 'có thể được khai thác tại nơi có nắng mà không cần đốt nhiên liệu', 'giúp cây xanh tạo chất dinh dưỡng', 'không cần đốt nhiên liệu để có ánh sáng ban ngày']],
    ['năng lượng gió', ['đến từ sự chuyển động của không khí', 'có thể làm quay tua-bin để tạo điện', 'là nguồn năng lượng tái tạo', 'có thể làm thuyền buồm di chuyển', 'phụ thuộc vào mức độ gió tại nơi khai thác']],
    ['nam châm', ['có thể hút một số vật bằng sắt hoặc thép', 'có hai cực từ', 'không hút mọi loại kim loại', 'có thể dùng trong nhiều đồ vật như la bàn hoặc loa', 'có thể đẩy hoặc hút khi đặt gần nam châm khác đúng chiều']],
    ['vật bị nam châm hút', ['thường chứa sắt hoặc thép', 'có thể là đinh sắt hoặc kẹp giấy thép', 'không nhất thiết có màu bạc', 'có thể bị hút mà không cần chạm trước', 'khác với gỗ hoặc nhựa vì các vật đó thường không bị hút']],
    ['vật cách điện', ['là vật liệu không cho dòng điện đi qua dễ dàng', 'cao su khô và nhựa là ví dụ quen thuộc', 'có thể được dùng làm vỏ bọc dây điện', 'giúp tăng an toàn khi sử dụng thiết bị điện', 'không có nghĩa là an toàn tuyệt đối trong mọi tình huống']],
    ['vật dẫn điện', ['là vật liệu cho dòng điện đi qua tương đối dễ', 'nhiều kim loại thuộc nhóm này', 'đồng thường được dùng làm lõi dây điện', 'cần được bọc cách điện khi dùng trong gia đình', 'không nên chạm vào dây dẫn điện hở']],
    ['ma sát', ['là lực xuất hiện khi hai bề mặt cọ xát nhau', 'giúp chân không bị trượt quá dễ khi đi bộ', 'có thể làm vật nóng lên khi cọ xát mạnh', 'có thể làm mòn lốp xe hoặc đế giày theo thời gian', 'có thể giảm bằng cách bôi trơn trong một số máy móc']],
    ['lực đẩy', ['là lực làm vật di chuyển xa hơn khỏi điểm tác dụng', 'có thể dùng tay đẩy cửa mở ra', 'có thể làm quả bóng lăn đi', 'cần điều chỉnh lực vừa đủ để an toàn', 'có hướng ngược với lực kéo trong nhiều tình huống']],
    ['lực kéo', ['là lực làm vật di chuyển về phía người hoặc vật tác dụng', 'có thể dùng tay kéo ngăn kéo mở ra', 'có thể làm xe đồ chơi tiến về phía trước khi kéo dây', 'cần cẩn thận khi kéo vật nặng', 'có thể hoạt động cùng với ma sát trong nhiều chuyển động']]
  ];

  const questions = [];
  const names = topics.map((item) => item[0]);
  topics.forEach(([name, facts], topicIndex) => {
    facts.forEach((fact, factIndex) => {
      const optionIndexes = [topicIndex, (topicIndex + 5) % names.length, (topicIndex + 13) % names.length, (topicIndex + 22) % names.length];
      const options = optionIndexes.map((index) => names[index]);
      const rotated = options.slice(factIndex % options.length).concat(options.slice(0, factIndex % options.length));
      questions.push({
        id: 'tn-material-energy-' + String(questions.length + 1).padStart(3, '0'),
        topic: 'tu-nhien',
        subtopic: 'vat-lieu-am-thanh-nang-luong',
        entityKey: 'material-energy-' + topicIndex,
        concept: 'material-energy-' + topicIndex + '-fact-' + factIndex,
        factKey: 'nature.material-energy.' + topicIndex + '.' + factIndex,
        level: factIndex < 2 ? 'nhe-nhang' : (factIndex < 4 ? 'thu-thach' : 'kho'),
        type: 'choice',
        prompt: 'Vật liệu, dạng năng lượng hoặc khái niệm nào phù hợp với mô tả sau: ' + fact + '?',
        answers: [name],
        options: rotated,
        hint: 'Hãy nhận ra câu hỏi đang nói về vật liệu, âm thanh, điện, nhiệt hay lực tác dụng.',
        explanation: 'Đáp án là ' + name + '. ' + fact.charAt(0).toUpperCase() + fact.slice(1) + '.'
      });
    });
  });

  if (questions.length !== 150 || new Set(questions.map((item) => item.factKey)).size !== 150) {
    throw new Error('Mảng vật liệu, âm thanh và năng lượng phải có đúng 150 kiến thức không trùng.');
  }
  window.IMathNatureMaterialsEnergyQuestions = Object.freeze(questions.map((item) => Object.freeze(item)));
}());
