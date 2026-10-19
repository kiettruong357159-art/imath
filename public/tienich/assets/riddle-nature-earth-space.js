(function () {
  'use strict';

  // 150 câu về Trái Đất và không gian: 30 khái niệm, mỗi khái niệm có 5 dữ kiện riêng.
  const topics = [
    ['Trái Đất', ['là hành tinh con người đang sinh sống', 'có nước lỏng và bầu không khí phù hợp cho sự sống', 'quay quanh Mặt Trời', 'có một vệ tinh tự nhiên quen thuộc là Mặt Trăng', 'có dạng gần hình cầu và hơi dẹt ở hai cực']],
    ['quả địa cầu', ['là mô hình thu nhỏ của Trái Đất', 'giúp quan sát vị trí các châu lục và đại dương', 'có thể xoay quanh trục', 'khác với bản đồ phẳng vì thể hiện bề mặt cong', 'thường có các đường kinh tuyến và vĩ tuyến']],
    ['đường xích đạo', ['là đường tròn tưởng tượng chạy quanh phần giữa Trái Đất', 'chia Trái Đất thành bán cầu Bắc và bán cầu Nam', 'có vĩ độ bằng 0 độ', 'khu vực gần đường này thường nhận nhiều ánh sáng Mặt Trời', 'không phải là một đường được vẽ thật trên mặt đất']],
    ['Bắc Cực', ['là khu vực gần cực Bắc của Trái Đất', 'có khí hậu rất lạnh', 'có nhiều băng biển vào phần lớn thời gian trong năm', 'không có chim cánh cụt sống tự nhiên ở vùng này', 'là nơi Mặt Trời có thể không lặn trong một thời gian vào mùa hè']],
    ['Nam Cực', ['là lục địa nằm quanh cực Nam Trái Đất', 'được phủ phần lớn bởi băng dày', 'là nơi sinh sống tự nhiên của nhiều loài chim cánh cụt', 'có khí hậu rất lạnh và khô', 'không thuộc riêng một quốc gia nào theo các thỏa thuận quốc tế']],
    ['trục Trái Đất', ['là đường tưởng tượng nối hai cực và đi qua tâm Trái Đất', 'Trái Đất quay quanh đường tưởng tượng này', 'bị nghiêng so với mặt phẳng quỹ đạo', 'sự nghiêng này góp phần tạo nên các mùa', 'không phải là một cây trục thật có thể nhìn thấy']],
    ['sự tự quay của Trái Đất', ['là chuyển động Trái Đất quay quanh trục của chính nó', 'mất xấp xỉ 24 giờ cho một vòng quay', 'góp phần tạo ra ngày và đêm', 'làm Mặt Trời có vẻ như mọc ở phía đông và lặn ở phía tây', 'xảy ra liên tục dù con người không cảm nhận trực tiếp']],
    ['sự chuyển động quanh Mặt Trời', ['là chuyển động Trái Đất đi theo quỹ đạo quanh Mặt Trời', 'mất khoảng một năm cho một vòng', 'kết hợp với độ nghiêng trục tạo nên các mùa', 'quỹ đạo của Trái Đất có dạng gần hình elip', 'không phải là nguyên nhân trực tiếp tạo ra ngày và đêm']],
    ['năm', ['là khoảng thời gian Trái Đất đi gần một vòng quanh Mặt Trời', 'gồm nhiều ngày', 'có 12 tháng trong lịch dương phổ biến', 'một số năm có thêm một ngày vào tháng 2 để điều chỉnh lịch', 'dài hơn rất nhiều so với một tháng']],
    ['Mặt Trăng', ['là vệ tinh tự nhiên của Trái Đất', 'không tự phát ra ánh sáng như Mặt Trời mà phản chiếu ánh sáng', 'có lực hấp dẫn góp phần tạo thủy triều', 'có nhiều hố va chạm trên bề mặt', 'thay đổi hình dạng nhìn thấy theo các pha trong tháng']],
    ['pha Mặt Trăng', ['là sự thay đổi phần sáng nhìn thấy của Mặt Trăng từ Trái Đất', 'xảy ra do vị trí tương đối giữa Mặt Trời, Trái Đất và Mặt Trăng', 'không phải do Mặt Trăng tự thay đổi hình dạng', 'có các dạng như trăng non, trăng khuyết và trăng tròn', 'lặp lại theo chu kì khoảng một tháng']],
    ['nhật thực', ['xảy ra khi Mặt Trăng nằm giữa Trái Đất và Mặt Trời', 'có thể làm một phần Mặt Trời bị che khuất khi quan sát từ một số nơi', 'không được nhìn trực tiếp bằng mắt thường khi không có kính chuyên dụng', 'không xảy ra vào mọi tháng vì quỹ đạo Mặt Trăng có độ nghiêng', 'là hiện tượng liên quan đến ba thiên thể thẳng hàng gần nhau']],
    ['nguyệt thực', ['xảy ra khi Trái Đất nằm giữa Mặt Trời và Mặt Trăng', 'Mặt Trăng đi vào vùng bóng của Trái Đất', 'có thể quan sát an toàn bằng mắt thường khi điều kiện thuận lợi', 'không phải là Mặt Trăng biến mất hoàn toàn mọi lúc', 'có thể làm Mặt Trăng trông đỏ sẫm trong một số lần xảy ra']],
    ['Mặt Trời', ['là ngôi sao gần Trái Đất nhất', 'cung cấp ánh sáng và nhiệt cho Trái Đất', 'là trung tâm của Hệ Mặt Trời', 'không nên nhìn trực tiếp khi không có dụng cụ bảo vệ chuyên dụng', 'có kích thước lớn hơn Trái Đất rất nhiều']],
    ['hành tinh', ['là thiên thể chuyển động quanh một ngôi sao', 'không tự phát sáng như ngôi sao', 'có thể có bề mặt rắn hoặc chủ yếu là khí', 'có nhiều kích thước và điều kiện khác nhau', 'Trái Đất là một ví dụ của nhóm này']],
    ['Sao Thủy', ['là hành tinh gần Mặt Trời nhất', 'có một năm ngắn hơn năm trên Trái Đất', 'có bề mặt nhiều hố va chạm', 'không có khí quyển dày như Trái Đất', 'là một trong các hành tinh đá của Hệ Mặt Trời']],
    ['Sao Kim', ['là hành tinh thứ hai tính từ Mặt Trời', 'có khí quyển rất dày', 'là hành tinh nóng nhất trong Hệ Mặt Trời', 'thường được gọi là Sao Hôm hoặc Sao Mai khi nhìn từ Trái Đất', 'có kích thước gần với Trái Đất hơn nhiều hành tinh khác']],
    ['Sao Hỏa', ['thường được gọi là hành tinh đỏ', 'có nhiều oxit sắt tạo màu đỏ trên bề mặt', 'có núi lửa và thung lũng rất lớn', 'có hai vệ tinh nhỏ là Phobos và Deimos', 'là mục tiêu nghiên cứu của nhiều tàu thăm dò không gian']],
    ['Sao Mộc', ['là hành tinh lớn nhất Hệ Mặt Trời', 'chủ yếu cấu tạo từ khí', 'có một cơn bão lớn được gọi là Vết Đỏ Lớn', 'có nhiều vệ tinh tự nhiên', 'có lực hấp dẫn rất mạnh do kích thước lớn']],
    ['Sao Thổ', ['nổi tiếng với hệ vành đai dễ quan sát', 'là một hành tinh khí khổng lồ', 'có mật độ trung bình thấp hơn nước', 'có vệ tinh lớn tên là Titan với khí quyển dày', 'vành đai của nó được tạo bởi rất nhiều hạt băng và đá nhỏ']],
    ['Sao Thiên Vương', ['là hành tinh nằm xa Mặt Trời hơn Sao Thổ', 'có trục quay nghiêng rất mạnh', 'có màu xanh lục nhạt do khí mê-tan trong khí quyển', 'là một hành tinh khí băng', 'có vành đai và nhiều vệ tinh']],
    ['Sao Hải Vương', ['là hành tinh xa Mặt Trời nhất trong tám hành tinh chính', 'có màu xanh lam do khí mê-tan', 'có những cơn gió rất mạnh trong khí quyển', 'là hành tinh khí băng', 'có vệ tinh lớn tên là Triton']],
    ['tiểu hành tinh', ['là những thiên thể nhỏ quay quanh Mặt Trời', 'nhiều thiên thể thuộc nhóm này nằm giữa quỹ đạo Sao Hỏa và Sao Mộc', 'có kích thước nhỏ hơn hành tinh', 'có thể có hình dạng không tròn', 'khác với sao băng là vật thể này đang chuyển động trong không gian']],
    ['sao chổi', ['là thiên thể có thể tạo đuôi khi đến gần Mặt Trời', 'có lõi gồm băng, bụi và đá', 'đuôi của nó thường hướng ra xa Mặt Trời', 'có quỹ đạo rất dài đối với nhiều sao chổi', 'không phải là một ngôi sao dù có tên gọi như vậy']],
    ['sao băng', ['là vệt sáng thấy trên trời khi mảnh vật chất đi vào khí quyển Trái Đất', 'phần lớn mảnh nhỏ bị cháy sáng trước khi chạm đất', 'không phải là ngôi sao rơi xuống', 'có thể nhìn thấy rõ hơn vào đêm trời quang', 'một số trận sao băng có nhiều vệt xuất hiện trong thời gian ngắn']],
    ['thiên hà', ['là hệ rất lớn gồm sao, khí, bụi và nhiều thiên thể khác', 'được giữ lại với nhau bởi lực hấp dẫn', 'có nhiều hình dạng như xoắn ốc hoặc elip', 'Hệ Mặt Trời nằm trong một hệ thuộc nhóm này', 'lớn hơn rất nhiều so với Hệ Mặt Trời']],
    ['Ngân Hà', ['là thiên hà chứa Hệ Mặt Trời', 'có dạng xoắn ốc có thanh', 'có rất nhiều ngôi sao', 'có thể thấy như một dải sáng mờ trên bầu trời tối ở nơi ít ánh đèn', 'không phải là tên của một hành tinh']],
    ['chòm sao', ['là nhóm sao tạo thành hình tưởng tượng khi nhìn từ Trái Đất', 'được con người đặt tên để dễ nhận biết trên bầu trời', 'các ngôi sao trong một chòm có thể cách nhau rất xa trong không gian', 'có thể dùng để định hướng theo truyền thống ở một số nơi', 'hình dạng nhìn thấy phụ thuộc vào góc quan sát từ Trái Đất']],
    ['kính thiên văn', ['là dụng cụ giúp quan sát các vật thể rất xa trên bầu trời', 'có thể dùng thấu kính hoặc gương để thu ánh sáng', 'không nên tự ý nhìn Mặt Trời qua dụng cụ này khi không có bộ lọc chuyên dụng', 'giúp các nhà khoa học nghiên cứu hành tinh và sao', 'cần đặt vững và hướng đúng khi quan sát']],
    ['phi hành gia', ['là người được đào tạo để làm việc trong môi trường không gian', 'cần mặc trang phục chuyên dụng khi ra ngoài tàu vũ trụ', 'phải tập luyện để thích nghi với tình trạng gần như không trọng lượng', 'làm việc theo quy trình chặt chẽ để bảo đảm an toàn', 'có thể thực hiện thí nghiệm ngoài không gian']]
  ];

  const questions = [];
  const names = topics.map((item) => item[0]);
  topics.forEach(([name, facts], topicIndex) => {
    facts.forEach((fact, factIndex) => {
      const optionIndexes = [topicIndex, (topicIndex + 5) % names.length, (topicIndex + 14) % names.length, (topicIndex + 22) % names.length];
      const options = optionIndexes.map((index) => names[index]);
      const rotated = options.slice(factIndex % options.length).concat(options.slice(0, factIndex % options.length));
      questions.push({
        id: 'tn-earth-space-' + String(questions.length + 1).padStart(3, '0'),
        topic: 'tu-nhien',
        subtopic: 'trai-dat-va-khong-gian',
        entityKey: 'earth-space-' + topicIndex,
        concept: 'earth-space-' + topicIndex + '-fact-' + factIndex,
        factKey: 'nature.earth-space.' + topicIndex + '.' + factIndex,
        level: factIndex < 2 ? 'nhe-nhang' : (factIndex < 4 ? 'thu-thach' : 'kho'),
        type: 'choice',
        prompt: 'Khái niệm hoặc thiên thể nào phù hợp với mô tả sau: ' + fact + '?',
        answers: [name],
        options: rotated,
        hint: 'Hãy nhận ra mô tả nói về Trái Đất, chuyển động, hiện tượng quan sát được hay một thiên thể trong không gian.',
        explanation: 'Đáp án là ' + name + '. ' + fact.charAt(0).toUpperCase() + fact.slice(1) + '.'
      });
    });
  });

  if (questions.length !== 150 || new Set(questions.map((item) => item.factKey)).size !== 150) {
    throw new Error('Mảng Trái Đất và không gian phải có đúng 150 kiến thức không trùng.');
  }
  window.IMathNatureEarthSpaceQuestions = Object.freeze(questions.map((item) => Object.freeze(item)));
}());
