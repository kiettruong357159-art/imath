(function () {
  'use strict';

  // 150 câu về thời tiết và khí hậu: 30 khái niệm/hiện tượng, mỗi mục có 5 dữ kiện.
  const topics = [
    ['thời tiết', ['là trạng thái nắng, mưa, gió hay nóng lạnh tại một nơi trong thời gian ngắn', 'có thể thay đổi trong cùng một ngày', 'giúp mọi người chọn trang phục và kế hoạch phù hợp', 'được quan sát qua mây, gió, nhiệt độ và lượng mưa', 'khác với khí hậu vì không nói đến khoảng thời gian rất dài']],
    ['khí hậu', ['là đặc điểm thời tiết của một nơi trong thời gian dài', 'chịu ảnh hưởng bởi vị trí địa lí và nhiều yếu tố tự nhiên', 'có thể khác nhau giữa vùng núi, đồng bằng và ven biển', 'giúp nhận biết nơi nào thường nóng, lạnh, ẩm hoặc khô', 'không thể kết luận chỉ từ thời tiết của một ngày']],
    ['nhiệt độ', ['cho biết mức độ nóng hoặc lạnh của không khí', 'thường được đo bằng đơn vị độ C', 'có thể tăng khi có nắng mạnh', 'có thể giảm vào ban đêm hoặc khi có không khí lạnh', 'giúp chọn quần áo phù hợp khi ra ngoài']],
    ['nhiệt kế', ['là dụng cụ dùng để đo nhiệt độ', 'có thể dùng để đo nhiệt độ không khí hoặc cơ thể', 'cần đặt đúng vị trí để kết quả chính xác hơn', 'không nên để trẻ nhỏ ngậm hoặc làm vỡ một số loại dụng cụ này', 'hiển thị kết quả theo các vạch hoặc màn hình số']],
    ['lượng mưa', ['cho biết lượng nước mưa rơi xuống trong một khoảng thời gian', 'thường được tính bằng mi-li-mét', 'có thể tăng cao trong cơn mưa lớn kéo dài', 'giúp dự báo nguy cơ ngập ở nơi thoát nước kém', 'được đo bằng dụng cụ hứng và đo nước mưa']],
    ['ẩm kế', ['là dụng cụ dùng để đo độ ẩm của không khí', 'giúp biết không khí khô hay ẩm', 'có thể được dùng trong trạm dự báo thời tiết', 'độ ẩm cao thường làm mồ hôi khó bay hơi hơn', 'khác với nhiệt kế vì không đo độ nóng lạnh']],
    ['chong chóng gió', ['có thể quay khi có gió thổi', 'giúp trẻ quan sát gió bằng cách trực quan', 'quay nhanh hơn khi gió mạnh hơn', 'không tự tạo ra gió mà chỉ phản ứng với gió', 'cần được đặt ở nơi thoáng để dễ quay']],
    ['cột chỉ hướng gió', ['giúp nhận biết gió đang thổi từ hướng nào', 'có phần có thể xoay theo chiều gió', 'thường được đặt ở nơi cao và thoáng', 'có thể dùng cùng với các dụng cụ quan sát thời tiết khác', 'khác với dụng cụ đo tốc độ gió']],
    ['dự báo thời tiết', ['cho biết khả năng nắng, mưa, nhiệt độ hoặc gió trong thời gian sắp tới', 'được lập từ số liệu quan sát và mô hình dự báo', 'giúp người dân chủ động khi đi xa hoặc làm việc ngoài trời', 'có thể thay đổi khi điều kiện khí quyển biến động', 'không phải là lời khẳng định chắc chắn tuyệt đối cho mọi nơi']],
    ['mây', ['hình thành từ các giọt nước nhỏ hoặc tinh thể băng trong không khí', 'có thể báo hiệu sự thay đổi của thời tiết', 'có nhiều dạng và màu sắc khác nhau', 'thường nhìn thấy rõ khi hơi nước ngưng tụ trên cao', 'có thể mang mưa nếu chứa đủ nhiều giọt nước']],
    ['mưa phùn', ['là dạng mưa rất nhỏ và rơi nhẹ', 'thường kéo dài khiến không khí ẩm ướt', 'có thể xuất hiện khi trời nhiều mây thấp', 'làm đường và sân dễ trơn dù lượng nước không lớn', 'khác với mưa rào vì hạt mưa nhỏ và không rơi ào ạt']],
    ['mưa rào', ['thường bắt đầu và kết thúc khá nhanh', 'có thể rơi mạnh trong thời gian ngắn', 'hay xuất hiện vào buổi chiều ở vùng nhiệt đới', 'có thể đi kèm gió mạnh hoặc sấm chớp', 'làm nước trên mặt đường tăng nhanh trong một khoảng ngắn']],
    ['mưa đá', ['là hiện tượng các cục băng nhỏ rơi từ mây xuống', 'có thể làm hỏng mái nhà, cây trồng hoặc phương tiện', 'không nên chạy ra ngoài nhặt khi hiện tượng này đang xảy ra', 'thường cần tìm nơi trú an toàn có mái che chắc chắn', 'khác với tuyết vì rơi thành những cục băng cứng']],
    ['sương mù', ['là những giọt nước rất nhỏ lơ lửng gần mặt đất', 'làm giảm tầm nhìn khi đi đường', 'thường xuất hiện vào sáng sớm hoặc nơi có độ ẩm cao', 'người lái xe cần đi chậm và bật đèn phù hợp khi gặp hiện tượng này', 'không phải là khói dù đôi khi trông giống khói trắng']],
    ['sương đọng', ['là các giọt nước nhỏ bám trên lá hoặc cỏ vào sáng sớm', 'hình thành khi hơi nước gặp bề mặt lạnh và ngưng tụ', 'thường thấy rõ hơn sau đêm quang mây', 'có thể làm cỏ hoặc sân ướt dù không có mưa', 'sẽ dần bay hơi khi mặt trời lên cao']],
    ['sương muối', ['có thể xuất hiện khi nhiệt độ gần mặt đất xuống rất thấp', 'tạo lớp tinh thể băng mỏng trên cây cỏ hoặc vật thể', 'có thể làm hại cây trồng non', 'không giống muối ăn dù có tên gọi như vậy', 'thường gặp ở vùng núi cao hoặc khi có rét mạnh']],
    ['gió nhẹ', ['làm lá cây rung rinh nhưng không làm cành lớn lay mạnh', 'có thể tạo cảm giác mát hơn vào ngày nóng', 'phù hợp cho nhiều hoạt động ngoài trời nếu không có mưa', 'không đủ mạnh để gây hư hại thông thường', 'có thể làm chong chóng quay chậm']],
    ['gió mạnh', ['có thể làm cành cây lay nhiều hoặc gãy nếu quá mạnh', 'cần đóng cửa sổ và cất đồ vật dễ bay', 'có thể làm sóng biển lớn hơn', 'người đi xe cần chú ý giữ thăng bằng', 'không nên đứng gần biển quảng cáo hoặc cây có cành khô']],
    ['bão', ['là hệ thống thời tiết có gió rất mạnh và thường kèm mưa lớn', 'có thể gây ngập, gãy cây và mất điện', 'cần theo dõi thông báo chính thức khi có cảnh báo', 'người dân cần chằng chống nhà cửa và hạn chế ra ngoài khi bão đổ bộ', 'khác với một cơn mưa rào thông thường vì phạm vi và sức gió lớn hơn']],
    ['áp thấp nhiệt đới', ['là vùng thời tiết có áp suất không khí thấp hình thành trên biển ấm', 'có thể gây mưa to và gió mạnh', 'có khả năng mạnh lên thành bão trong điều kiện thuận lợi', 'cần được theo dõi qua bản tin dự báo thời tiết', 'không phải mọi vùng áp thấp đều đổ bộ vào đất liền']],
    ['mùa mưa', ['là thời kì trong năm có mưa xuất hiện nhiều hơn', 'cây cối thường phát triển nhanh khi đủ nước', 'cần chú ý thoát nước để hạn chế ngập úng', 'thường khác nhau về thời gian giữa các vùng ở Việt Nam', 'là thời điểm cần chuẩn bị áo mưa khi ra ngoài']],
    ['mùa khô', ['là thời kì có lượng mưa ít hơn', 'có thể làm ao hồ và đất bị thiếu nước', 'cần tiết kiệm nước trong sinh hoạt', 'cây trồng có thể cần tưới bổ sung', 'nguy cơ cháy rừng có thể tăng khi thời tiết quá khô nóng']],
    ['nắng nóng', ['là thời tiết có nhiệt độ cao trong ngày', 'cần uống đủ nước khi hoạt động ngoài trời', 'nên tránh ở ngoài trời quá lâu vào thời điểm nắng gắt', 'có thể làm mặt đường và mái tôn rất nóng', 'cần đội mũ và che chắn để bảo vệ da']],
    ['rét đậm', ['là thời kì nhiệt độ giảm thấp kéo dài ở một số vùng', 'cần mặc ấm và giữ cơ thể khô ráo', 'vật nuôi cần được che chắn tránh gió lạnh', 'có thể ảnh hưởng đến cây trồng nếu nhiệt độ xuống quá thấp', 'thường được thông báo trong các bản tin thời tiết mùa đông']],
    ['rét hại', ['là mức rét rất mạnh có thể gây hại cho cây trồng và vật nuôi', 'cần tăng cường che chắn chuồng trại khi xuất hiện', 'học sinh cần giữ ấm khi đi học', 'có thể xuất hiện ở vùng núi và đồng bằng phía Bắc trong mùa đông', 'nguy hiểm hơn mức lạnh thông thường vì có thể gây thiệt hại rộng']],
    ['chỉ số UV', ['cho biết mức độ tia tử ngoại từ Mặt Trời có thể tác động đến da', 'có thể tăng cao vào ngày trời trong và nắng gắt', 'nên che chắn khi chỉ số này cao', 'không thể đánh giá chỉ bằng cảm giác nóng hay lạnh', 'giúp mọi người chọn thời gian ra ngoài hợp lí hơn']],
    ['hạn hán', ['xảy ra khi thiếu mưa trong thời gian dài', 'có thể làm đất nứt nẻ và nguồn nước giảm', 'gây khó khăn cho cây trồng và sinh hoạt', 'cần sử dụng nước tiết kiệm khi tình trạng này xảy ra', 'khác với một vài ngày nắng vì kéo dài lâu hơn nhiều']],
    ['ngập lụt', ['xảy ra khi nước phủ lên vùng đất vốn không ngập thường xuyên', 'có thể do mưa lớn, nước sông dâng hoặc thoát nước kém', 'không nên lội hoặc chơi ở nơi nước ngập sâu', 'cần tránh các khu vực có dòng nước chảy xiết', 'có thể làm nước bẩn lẫn rác và vi khuẩn']],
    ['biến đổi khí hậu', ['là sự thay đổi dài hạn của các đặc điểm khí hậu trên Trái Đất', 'có thể làm thời tiết cực đoan xảy ra thường xuyên hơn ở nhiều nơi', 'liên quan đến việc Trái Đất ấm lên do nhiều nguyên nhân', 'mỗi người có thể góp phần giảm tác động bằng cách tiết kiệm năng lượng và bảo vệ cây xanh', 'không nên nhầm với thay đổi thời tiết trong một ngày']],
    ['áo mưa', ['được mặc để hạn chế quần áo bị ướt khi trời mưa', 'cần chọn kích cỡ vừa người để di chuyển an toàn', 'không nên che kín tầm nhìn khi đi xe', 'cần phơi khô sau khi dùng để tránh mùi ẩm', 'là vật dụng nên chuẩn bị khi dự báo có mưa']]
  ];

  const questions = [];
  const names = topics.map((item) => item[0]);
  topics.forEach(([name, facts], topicIndex) => {
    facts.forEach((fact, factIndex) => {
      const optionIndexes = [topicIndex, (topicIndex + 5) % names.length, (topicIndex + 13) % names.length, (topicIndex + 21) % names.length];
      const options = optionIndexes.map((index) => names[index]);
      const rotated = options.slice(factIndex % options.length).concat(options.slice(0, factIndex % options.length));
      questions.push({
        id: 'tn-weather-' + String(questions.length + 1).padStart(3, '0'),
        topic: 'tu-nhien',
        subtopic: 'thoi-tiet-khi-hau',
        entityKey: 'weather-topic-' + topicIndex,
        concept: 'weather-topic-' + topicIndex + '-fact-' + factIndex,
        factKey: 'nature.weather.' + topicIndex + '.' + factIndex,
        level: factIndex < 2 ? 'nhe-nhang' : (factIndex < 4 ? 'thu-thach' : 'kho'),
        type: 'choice',
        prompt: 'Khái niệm hoặc hiện tượng thời tiết nào phù hợp với mô tả sau: ' + fact + '?',
        answers: [name],
        options: rotated,
        hint: 'Hãy chú ý xem câu nói về đo đạc, hiện tượng tự nhiên, mùa trong năm hay cách giữ an toàn.',
        explanation: 'Đáp án là ' + name + '. ' + fact.charAt(0).toUpperCase() + fact.slice(1) + '.'
      });
    });
  });

  if (questions.length !== 150 || new Set(questions.map((item) => item.factKey)).size !== 150) {
    throw new Error('Mảng thời tiết và khí hậu phải có đúng 150 kiến thức không trùng.');
  }
  window.IMathNatureWeatherClimateQuestions = Object.freeze(questions.map((item) => Object.freeze(item)));
}());
