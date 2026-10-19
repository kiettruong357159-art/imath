(function () {
  'use strict';

  // 150 câu về bảo vệ môi trường: 30 hành động/khái niệm, mỗi mục có 5 dữ kiện riêng.
  const topics = [
    ['giảm dùng đồ nhựa một lần', ['giúp hạn chế số lượng rác khó phân hủy', 'có thể thực hiện bằng cách mang bình nước cá nhân', 'giảm nhu cầu dùng ống hút và túi ni-lông dùng một lần', 'không có nghĩa là bỏ mọi đồ nhựa đang dùng tốt', 'cần ưu tiên những vật bền có thể dùng nhiều lần']],
    ['phân loại rác', ['là cách tách rác theo từng nhóm trước khi xử lí', 'giúp một số vật liệu có thể được tái chế dễ hơn', 'thường cần bỏ rác hữu cơ riêng với giấy, nhựa hoặc kim loại', 'giúp nơi thu gom xử lí rác đúng cách', 'cần làm theo hướng dẫn phân loại rác của từng địa phương']],
    ['rác hữu cơ', ['gồm nhiều loại thức ăn thừa, lá cây hoặc vỏ rau quả', 'có thể phân hủy tự nhiên trong điều kiện phù hợp', 'có thể dùng làm phân ủ nếu được xử lí đúng cách', 'không nên lẫn nhiều nhựa hoặc pin vào nhóm rác này', 'cần được chứa trong thùng phù hợp để hạn chế mùi']],
    ['tái sử dụng', ['là dùng lại một vật còn tốt thay vì vứt ngay', 'có thể áp dụng với hộp đựng, chai lọ hoặc túi vải sạch', 'giúp giảm lượng rác phát sinh', 'khác với tái chế vì vật không nhất thiết phải qua nhà máy xử lí', 'cần bảo đảm vật dùng lại vẫn an toàn và sạch sẽ']],
    ['tái chế', ['là biến vật liệu đã qua sử dụng thành sản phẩm hoặc nguyên liệu mới', 'có thể áp dụng với giấy, kim loại, nhựa hoặc thủy tinh tùy nơi', 'giúp tiết kiệm một phần tài nguyên thiên nhiên', 'cần phân loại và làm sạch nhiều vật liệu trước khi đưa đi xử lí', 'không phải mọi loại rác đều tái chế được ở cùng một nơi']],
    ['tiết kiệm nước', ['là sử dụng nước vừa đủ cho nhu cầu cần thiết', 'có thể bắt đầu bằng việc khóa vòi khi đánh răng', 'giúp giảm lãng phí nguồn nước sạch', 'cần sửa vòi nước bị rò rỉ nếu phát hiện', 'không có nghĩa là không giữ vệ sinh cá nhân']],
    ['tiết kiệm điện', ['là tránh sử dụng thiết bị điện khi không cần thiết', 'có thể thực hiện bằng cách tắt đèn khi ra khỏi phòng', 'giúp giảm lượng năng lượng phải sản xuất', 'cần rút hoặc tắt thiết bị theo hướng dẫn an toàn', 'nên tận dụng ánh sáng tự nhiên vào ban ngày khi phù hợp']],
    ['trồng cây xanh', ['giúp tạo bóng mát và làm không gian dễ chịu hơn', 'cần chọn cây phù hợp với nơi trồng', 'cây non cần được tưới và chăm sóc sau khi trồng', 'không nên bẻ cành hoặc giẫm lên cây mới trồng', 'có thể góp phần giữ đất và tạo nơi sống cho nhiều sinh vật']],
    ['bảo vệ rừng', ['giúp giữ nơi sống của nhiều loài động vật và thực vật', 'góp phần bảo vệ nguồn nước và đất', 'cần phòng tránh cháy rừng vào mùa khô', 'không nên chặt phá hoặc đốt rừng tùy tiện', 'có ý nghĩa quan trọng trong việc duy trì đa dạng sinh học']],
    ['bảo vệ động vật hoang dã', ['là không săn bắt, mua bán hoặc nuôi nhốt trái phép các loài tự nhiên', 'giúp các loài có cơ hội sống và sinh sản trong sinh cảnh của chúng', 'không nên mua sản phẩm làm từ bộ phận động vật quý hiếm', 'có thể báo cho người lớn hoặc cơ quan phù hợp khi thấy hành vi buôn bán đáng ngờ', 'giúp duy trì cân bằng trong tự nhiên']],
    ['không xả rác bừa bãi', ['giúp đường phố, trường học và công viên sạch hơn', 'hạn chế rác bị cuốn xuống cống gây tắc nghẽn', 'cần bỏ rác vào đúng thùng hoặc mang về khi chưa có thùng', 'không nên ném rác từ cửa sổ hoặc trên xe', 'là thói quen nhỏ có ích cho cộng đồng']],
    ['làm sạch cống rãnh', ['giúp nước mưa thoát nhanh hơn khi có mưa lớn', 'cần thực hiện an toàn với dụng cụ và người lớn hỗ trợ', 'hạn chế rác làm tắc dòng chảy', 'không nên tự ý xuống cống sâu hoặc nơi nước bẩn', 'góp phần giảm nguy cơ ngập ở khu dân cư']],
    ['dùng túi vải', ['có thể dùng nhiều lần khi đi mua sắm', 'giúp giảm số lượng túi ni-lông dùng một lần', 'cần giặt sạch khi bị bẩn', 'có thể gấp gọn và mang theo trong ba lô', 'bền hơn nhiều loại túi mỏng dùng một lần']],
    ['ủ phân compost', ['là biến một số rác hữu cơ thành phân cho cây', 'có thể dùng lá khô, vỏ rau quả và phần thực vật phù hợp', 'cần giữ nơi ủ thông thoáng và làm theo hướng dẫn', 'không nên cho pin, nhựa hoặc chất độc hại vào nơi ủ', 'giúp giảm lượng rác phải đem đi xử lí']],
    ['tái chế giấy', ['giúp tận dụng lại sợi giấy từ giấy đã dùng', 'cần bỏ riêng giấy khô và sạch khi có thể', 'không nên trộn giấy bẩn dầu mỡ với giấy tái chế thông thường', 'có thể giảm nhu cầu dùng nguyên liệu gỗ mới', 'vẫn cần dùng giấy tiết kiệm dù giấy có thể tái chế']],
    ['thu gom pin đã dùng', ['giúp ngăn một số chất trong pin đi vào đất và nước', 'không nên vứt pin cũ lẫn với rác sinh hoạt thông thường', 'cần bỏ pin vào điểm thu gom phù hợp nếu có', 'không nên tháo hoặc đốt pin đã dùng', 'là việc đặc biệt quan trọng với pin nhỏ từ đồ chơi và điều khiển']],
    ['xử lí rác điện tử', ['áp dụng cho thiết bị điện tử hỏng như điện thoại hoặc máy tính cũ', 'cần được đưa đến nơi thu gom chuyên biệt khi có thể', 'không nên đập phá hoặc đốt thiết bị điện tử', 'có thể chứa vật liệu cần xử lí an toàn', 'một số bộ phận còn có thể được thu hồi để tái chế']],
    ['đi xe buýt', ['là một hình thức đi chung phương tiện công cộng', 'có thể giảm số lượng xe cá nhân trên đường', 'cần xếp hàng và giữ trật tự khi lên xuống xe', 'giúp giảm một phần khí thải nếu nhiều người cùng sử dụng', 'cần chọn đúng tuyến và điểm dừng an toàn']],
    ['đi bộ hoặc đi xe đạp', ['phù hợp với quãng đường ngắn khi điều kiện an toàn', 'không tạo khí thải trực tiếp từ nhiên liệu', 'cần tuân thủ luật giao thông', 'đi xe đạp cần đội mũ bảo hiểm phù hợp', 'giúp cơ thể vận động đều đặn']],
    ['giữ không khí sạch', ['cần hạn chế đốt rác, lá cây hoặc đồ nhựa', 'có thể thực hiện bằng cách trồng và chăm sóc cây xanh', 'giúp mọi người hít thở dễ chịu hơn', 'cần tránh để xe nổ máy quá lâu khi không cần thiết', 'liên quan đến việc giảm khói bụi và khí độc']],
    ['tiết kiệm nhiên liệu', ['giúp giảm lượng xăng hoặc dầu cần sử dụng', 'có thể thực hiện bằng cách đi chung xe hoặc chọn phương tiện phù hợp', 'giúp giảm một phần khí thải ra không khí', 'cần tắt động cơ khi dừng lâu theo điều kiện an toàn', 'không có nghĩa là lái xe quá chậm gây cản trở giao thông']],
    ['bảo vệ nguồn nước', ['là không đổ dầu, hóa chất hoặc rác xuống ao hồ và sông suối', 'giúp con người và sinh vật có nước sạch để sử dụng', 'cần tiết kiệm nước sạch trong sinh hoạt', 'có liên quan đến việc giữ vệ sinh cống rãnh và khu vực ven sông', 'giúp hạn chế ô nhiễm nước ngầm và nước mặt']],
    ['không đốt rác', ['giúp hạn chế khói độc và mùi khó chịu', 'tránh nguy cơ cháy lan khi thời tiết khô', 'đặc biệt không nên đốt nhựa hoặc rác điện tử', 'cần đưa rác đến nơi thu gom hoặc xử lí đúng cách', 'giúp bảo vệ chất lượng không khí quanh nơi ở']],
    ['giảm rác ở biển', ['là không bỏ rác xuống bãi biển hoặc sông dẫn ra biển', 'giúp hạn chế động vật biển ăn nhầm hoặc mắc vào rác', 'cần mang rác về hoặc bỏ đúng thùng sau khi vui chơi', 'giúp bãi biển sạch và an toàn hơn', 'có thể bắt đầu bằng việc giảm dùng đồ nhựa một lần']],
    ['bảo vệ đất', ['là hạn chế để rác và hóa chất gây hại ngấm vào đất', 'giúp cây trồng phát triển trong môi trường tốt hơn', 'cần không xả pin hoặc dầu nhớt xuống đất', 'có thể dùng phân hữu cơ đã ủ đúng cách để cải tạo đất', 'giúp giữ hệ sinh vật nhỏ trong đất hoạt động bình thường']],
    ['mua sắm có trách nhiệm', ['là chọn đồ dùng thật sự cần thiết và bền', 'giúp hạn chế mua rồi bỏ quá nhanh', 'có thể ưu tiên sản phẩm ít bao bì không cần thiết', 'nên sửa hoặc dùng tiếp đồ còn tốt khi có thể', 'giúp giảm lượng tài nguyên dùng để sản xuất hàng mới']],
    ['dùng hộp cơm cá nhân', ['giúp hạn chế hộp xốp hoặc đồ đựng dùng một lần', 'cần rửa sạch sau mỗi lần dùng', 'có thể mang theo khi đi học hoặc dã ngoại', 'nên chọn loại có nắp kín để tránh đổ thức ăn', 'là một cách giảm rác bao bì trong sinh hoạt']],
    ['hạn chế bỏ thừa thức ăn', ['giúp tránh lãng phí công sức sản xuất và vận chuyển thực phẩm', 'nên lấy phần ăn vừa đủ', 'có thể bảo quản thức ăn còn dùng được theo hướng dẫn an toàn', 'không nên vứt thực phẩm còn tốt chỉ vì lấy quá nhiều', 'liên quan đến thói quen trân trọng thực phẩm']],
    ['giảm tiếng ồn', ['là tránh mở loa quá to hoặc gây âm thanh lớn không cần thiết', 'giúp mọi người học tập, nghỉ ngơi và làm việc tốt hơn', 'cần chú ý thời gian yên tĩnh ở khu dân cư', 'không nên bấm còi xe tùy tiện', 'là một phần của việc giữ môi trường sống dễ chịu']],
    ['dọn vệ sinh cộng đồng', ['là cùng nhau làm sạch khu vực chung như sân trường hoặc công viên', 'cần đeo găng tay hoặc dùng dụng cụ phù hợp khi nhặt rác', 'có thể kết hợp với phân loại rác', 'không nên nhặt vật sắc nhọn bằng tay không', 'giúp mọi người hình thành ý thức giữ gìn nơi công cộng']]
  ];

  const questions = [];
  const names = topics.map((item) => item[0]);
  topics.forEach(([name, facts], topicIndex) => {
    facts.forEach((fact, factIndex) => {
      const optionIndexes = [topicIndex, (topicIndex + 4) % names.length, (topicIndex + 12) % names.length, (topicIndex + 20) % names.length];
      const options = optionIndexes.map((index) => names[index]);
      const rotated = options.slice(factIndex % options.length).concat(options.slice(0, factIndex % options.length));
      questions.push({
        id: 'tn-environment-' + String(questions.length + 1).padStart(3, '0'),
        topic: 'tu-nhien',
        subtopic: 'bao-ve-moi-truong',
        entityKey: 'environment-topic-' + topicIndex,
        concept: 'environment-topic-' + topicIndex + '-fact-' + factIndex,
        factKey: 'nature.environment.' + topicIndex + '.' + factIndex,
        level: factIndex < 2 ? 'nhe-nhang' : (factIndex < 4 ? 'thu-thach' : 'kho'),
        type: 'choice',
        prompt: 'Hành động hoặc khái niệm nào phù hợp với mô tả sau: ' + fact + '?',
        answers: [name],
        options: rotated,
        hint: 'Hãy chọn việc làm vừa có ích cho môi trường vừa bảo đảm an toàn trong đời sống.',
        explanation: 'Đáp án là ' + name + '. ' + fact.charAt(0).toUpperCase() + fact.slice(1) + '.'
      });
    });
  });

  if (questions.length !== 150 || new Set(questions.map((item) => item.factKey)).size !== 150) {
    throw new Error('Mảng bảo vệ môi trường phải có đúng 150 kiến thức không trùng.');
  }
  window.IMathNatureEnvironmentQuestions = Object.freeze(questions.map((item) => Object.freeze(item)));
}());
