(function () {
  'use strict';

  // 150 câu quan sát đồ vật trong gia đình: 30 đồ vật, mỗi đồ vật có 5 dữ kiện riêng.
  const objects = [
    ['bàn ăn', ['là nơi gia đình thường ngồi dùng bữa', 'cần được lau sạch trước và sau khi ăn', 'thường có mặt phẳng đủ rộng để đặt bát đĩa', 'không nên leo trèo lên vì có thể gây nguy hiểm', 'có thể làm bằng gỗ, kim loại hoặc vật liệu bền khác']],
    ['ghế', ['dùng để ngồi', 'cần đặt vững trên mặt sàn', 'không nên nghiêng chỉ bằng hai chân ghế', 'có thể có tựa lưng để đỡ cơ thể', 'thường được đặt cạnh bàn học hoặc bàn ăn']],
    ['giường', ['là nơi để nằm nghỉ hoặc ngủ', 'cần được giữ sạch và gọn gàng', 'thường đi cùng đệm, gối và chăn', 'không nên nhảy mạnh lên vì có thể làm hỏng hoặc ngã', 'có thể có khung làm bằng gỗ hoặc kim loại']],
    ['gối', ['dùng để kê đầu khi ngủ hoặc nằm nghỉ', 'cần có vỏ sạch và được giặt định kì', 'không nên dùng gối quá cao khi ngủ lâu', 'thường đặt ở đầu giường', 'có thể được nhồi bông hoặc sợi mềm']],
    ['chăn', ['dùng để giữ ấm khi ngủ', 'cần phơi hoặc giặt khi bị ẩm bẩn', 'có thể dày hơn vào mùa lạnh', 'không nên trùm kín mặt khi ngủ', 'thường được gấp gọn vào ban ngày']],
    ['tủ lạnh', ['dùng để bảo quản thực phẩm ở nhiệt độ thấp', 'cần đóng cửa kín để tiết kiệm điện', 'không nên để thức ăn sống lẫn với thức ăn chín không che đậy', 'cần được vệ sinh định kì', 'không phải mọi thực phẩm đều cần để trong thiết bị này']],
    ['nồi cơm điện', ['dùng điện để nấu và giữ ấm cơm', 'cần đặt lòng nồi khô trước khi nấu', 'không nên chạm vào phần nóng khi đang hoạt động', 'cần rút điện theo hướng dẫn sau khi dùng', 'có công tắc hoặc nút chuyển chế độ nấu và giữ ấm']],
    ['bếp gas', ['dùng nhiên liệu khí để tạo lửa nấu ăn', 'cần được người lớn kiểm tra trước khi sử dụng', 'phải tắt núm bếp sau khi nấu xong', 'không nên nghịch bật lửa gần thiết bị này', 'cần báo người lớn ngay khi ngửi thấy mùi gas lạ']],
    ['bếp điện', ['dùng điện để tạo nhiệt nấu ăn', 'mặt bếp có thể còn nóng sau khi đã tắt', 'cần dùng dụng cụ phù hợp với loại bếp', 'không nên để nước đổ vào phần điện', 'cần rút hoặc tắt nguồn theo hướng dẫn sau khi dùng']],
    ['ấm đun nước', ['dùng để đun nóng nước', 'cần để xa mép bàn khi đang nóng', 'không nên tự ý cắm điện nếu chưa được hướng dẫn', 'có thể tự ngắt ở một số loại khi nước sôi', 'cần cầm phần tay cầm để tránh bị bỏng']],
    ['quạt điện', ['dùng để tạo gió làm mát', 'cần đặt ở nơi vững và khô ráo', 'không nên đưa tay hoặc đồ vật vào lồng quạt', 'cần tắt khi di chuyển hoặc vệ sinh', 'có thể có nhiều mức tốc độ gió']],
    ['điều hòa', ['dùng để điều chỉnh nhiệt độ không khí trong phòng', 'cần đóng cửa phòng tương đối kín để dùng hiệu quả', 'không nên để nhiệt độ quá thấp trong thời gian dài', 'cần vệ sinh bộ lọc định kì bởi người phù hợp', 'dùng điện nên cần tắt khi không cần thiết']],
    ['máy giặt', ['dùng để giặt quần áo', 'cần phân loại một số loại đồ trước khi giặt', 'không nên cho tay vào lồng máy khi máy đang quay', 'cần dùng lượng nước giặt vừa đủ', 'có thể có chế độ giặt, xả và vắt khác nhau']],
    ['bàn chải đánh răng', ['dùng để làm sạch răng', 'cần dùng riêng cho mỗi người', 'nên được rửa sạch sau khi dùng', 'cần thay khi lông chải bị tòe nhiều', 'không nên dùng để cọ rửa đồ vật khác']],
    ['khăn tắm', ['dùng để lau khô cơ thể sau khi tắm', 'cần phơi khô sau khi dùng', 'nên dùng riêng cho mỗi người', 'cần giặt định kì để giữ vệ sinh', 'không nên để ẩm lâu trong góc kín']],
    ['xà phòng', ['dùng cùng nước để làm sạch tay hoặc cơ thể', 'có thể tạo bọt khi chà xát', 'cần để xa mắt và miệng', 'không nên dùng làm thức ăn', 'cần rửa lại bằng nước sạch sau khi dùng']],
    ['thùng rác', ['dùng để chứa rác trước khi thu gom', 'cần có nắp hoặc được đậy kín khi phù hợp', 'giúp giữ nhà cửa sạch hơn', 'có thể dùng nhiều thùng để phân loại rác', 'cần được đổ rác và vệ sinh thường xuyên']],
    ['chổi', ['dùng để quét bụi và rác trên sàn', 'cần cầm cán chắc khi sử dụng', 'không nên dùng để đùa nghịch đánh nhau', 'cần dựng hoặc treo gọn sau khi dùng', 'có thể có lông chổi làm từ sợi nhựa hoặc vật liệu tự nhiên']],
    ['cây lau nhà', ['dùng để lau sàn sạch hơn sau khi quét', 'cần vắt bớt nước để sàn không quá trơn', 'nên đặt biển hoặc nhắc mọi người cẩn thận khi sàn ướt', 'cần giặt sạch đầu lau sau khi dùng', 'không nên để trẻ chạy nhanh trên sàn vừa lau']],
    ['đèn bàn', ['dùng để chiếu sáng khu vực đọc hoặc học', 'cần đặt sao cho ánh sáng không chiếu thẳng vào mắt', 'nên tắt khi không dùng để tiết kiệm điện', 'cần để xa nước và vật dễ cháy', 'có thể điều chỉnh hướng chiếu ở nhiều loại']],
    ['ổ cắm điện', ['là nơi kết nối phích cắm với nguồn điện', 'không được cho ngón tay hoặc vật kim loại vào', 'cần để xa nước', 'trẻ nhỏ chỉ nên dùng khi có người lớn hướng dẫn', 'có thể dùng nắp che an toàn để bảo vệ trẻ nhỏ']],
    ['công tắc điện', ['dùng để bật hoặc tắt thiết bị điện hoặc đèn', 'cần thao tác khi tay khô', 'không nên nghịch liên tục', 'giúp tiết kiệm điện khi tắt đèn không dùng', 'cần báo người lớn nếu công tắc bị nóng hoặc hỏng']],
    ['tủ quần áo', ['dùng để cất giữ quần áo gọn gàng', 'cần sắp xếp đồ khô và sạch trước khi cất', 'không nên leo vào trong tủ', 'cần đóng cửa tủ cẩn thận sau khi lấy đồ', 'có thể có ngăn treo và ngăn gấp quần áo']],
    ['kệ sách', ['dùng để xếp sách và vở', 'cần đặt sách nặng ở vị trí vững để tránh đổ', 'giúp tìm sách dễ hơn khi sắp theo nhóm', 'không nên kéo cả kệ khi lấy một cuốn sách', 'cần lau bụi định kì để sách sạch hơn']],
    ['đồng hồ treo tường', ['dùng để xem giờ', 'thường được đặt ở vị trí dễ quan sát', 'có kim giờ và kim phút ở nhiều loại', 'cần thay pin khi đồng hồ chạy bằng pin hết điện', 'giúp gia đình theo dõi thời gian sinh hoạt']],
    ['bình nước cá nhân', ['dùng để mang nước uống khi đi học hoặc đi xa', 'cần được rửa sạch hằng ngày', 'nên có nắp kín để tránh đổ nước', 'giúp giảm dùng chai nhựa một lần', 'không nên dùng chung miệng bình với người khác']],
    ['hộp cơm', ['dùng để đựng thức ăn mang theo', 'cần rửa sạch sau khi ăn', 'nên có nắp kín để tránh đổ', 'không nên để thức ăn dễ hỏng quá lâu ở nhiệt độ thường', 'có thể chia ngăn để đựng các món khác nhau']],
    ['khóa cửa', ['dùng để giữ cửa đóng an toàn', 'cần cất chìa khóa ở nơi phù hợp', 'không nên tự ý khóa người khác trong phòng', 'cần báo người lớn nếu khóa bị kẹt', 'giúp bảo vệ không gian riêng tư của gia đình']],
    ['chuông cửa', ['dùng để báo có người đứng bên ngoài cửa', 'cần quan sát hoặc hỏi người lớn trước khi mở cửa cho người lạ', 'không nên bấm liên tục để trêu chọc', 'có thể hoạt động bằng điện hoặc pin', 'giúp gia đình biết có khách đến']],
    ['bình chữa cháy', ['dùng để hỗ trợ dập một số đám cháy nhỏ khi dùng đúng cách', 'cần đặt ở nơi dễ thấy và dễ lấy', 'trẻ em không nên tự ý sử dụng khi chưa được hướng dẫn', 'cần báo người lớn và gọi hỗ trợ khi có cháy', 'không thay thế việc thoát ra nơi an toàn khi đám cháy lớn']]
  ];

  const questions = [];
  const names = objects.map((item) => item[0]);
  objects.forEach(([name, facts], objectIndex) => {
    facts.forEach((fact, factIndex) => {
      const optionIndexes = [objectIndex, (objectIndex + 5) % names.length, (objectIndex + 13) % names.length, (objectIndex + 22) % names.length];
      const options = optionIndexes.map((index) => names[index]);
      const rotated = options.slice(factIndex % options.length).concat(options.slice(0, factIndex % options.length));
      questions.push({
        id: 'life-home-' + String(questions.length + 1).padStart(3, '0'),
        topic: 'doi-song',
        subtopic: 'do-vat-trong-gia-dinh',
        entityKey: 'home-object-' + objectIndex,
        concept: 'home-object-' + objectIndex + '-fact-' + factIndex,
        factKey: 'life.home.' + objectIndex + '.' + factIndex,
        level: factIndex < 2 ? 'nhe-nhang' : (factIndex < 4 ? 'thu-thach' : 'kho'),
        type: 'choice',
        prompt: 'Đồ vật nào trong gia đình phù hợp với mô tả sau: ' + fact + '?',
        answers: [name],
        options: rotated,
        hint: 'Hãy nghĩ về công dụng, vị trí sử dụng và quy tắc an toàn của đồ vật trong nhà.',
        explanation: 'Đáp án là ' + name + '. ' + fact.charAt(0).toUpperCase() + fact.slice(1) + '.'
      });
    });
  });

  if (questions.length !== 150 || new Set(questions.map((item) => item.factKey)).size !== 150) {
    throw new Error('Mảng đồ vật trong gia đình phải có đúng 150 kiến thức không trùng.');
  }
  window.IMathLifeHomeObjectQuestions = Object.freeze(questions.map((item) => Object.freeze(item)));
}());
