(function () {
  'use strict';

  /* 150 câu: 30 loài vật, mỗi loài có 5 dữ kiện khác nhau. */
  const animals = [
    ['con chó', ['là vật nuôi quen thuộc, thường được gọi là người bạn trung thành của con người', 'có khứu giác rất nhạy, có thể nhận biết nhiều mùi', 'thường sủa để báo hiệu khi nghe tiếng động lạ', 'có bốn chân, phủ lông và nuôi con bằng sữa', 'thường được nuôi để trông nhà']],
    ['con mèo', ['có ria mép nhạy cảm giúp cảm nhận không gian hẹp', 'thường bắt chuột ở nhà và kho lương thực', 'có móng vuốt có thể thu vào khi không dùng', 'hay dùng lưỡi liếm lông để tự vệ sinh', 'phát ra tiếng kêu meo meo']],
    ['con trâu', ['là vật nuôi gắn bó với ruộng đồng Việt Nam', 'có thể được dùng để kéo cày trên ruộng', 'thường ăn cỏ và nhai lại thức ăn', 'có thân to, da sẫm màu và thường có sừng cong', 'thích ngâm mình trong bùn hoặc nước khi trời nóng']],
    ['con bò', ['là loài thú nuôi có thể cho sữa', 'có bốn chân, móng guốc và là động vật nhai lại', 'thường ăn cỏ, rơm và thức ăn thực vật', 'có thể sống theo đàn ở đồng cỏ', 'có tiếng kêu thường được gọi là tiếng bò rống']],
    ['con gà', ['có mào đỏ trên đầu và thường gáy vào buổi sáng', 'là loài chim nuôi nhưng bay không xa', 'có thể đẻ trứng dùng làm thực phẩm', 'dùng mỏ để mổ thóc và thức ăn trên mặt đất', 'có hai chân, có cánh và phủ lông vũ']],
    ['con vịt', ['có bàn chân có màng giúp bơi tốt', 'thường sống gần ao, hồ hoặc ruộng nước', 'có mỏ bè rộng để tìm thức ăn trong nước', 'phát ra tiếng kêu quạc quạc', 'có lớp lông thấm ít nước để bơi']],
    ['con dê', ['có thể leo lên những sườn dốc khá giỏi', 'thường ăn lá cây, cỏ và các chồi non', 'nhiều con có sừng nhỏ và râu dưới cằm', 'là loài vật nuôi cho sữa hoặc thịt', 'có tiếng kêu be be']],
    ['con lợn', ['có mõm khỏe dùng để tìm thức ăn', 'là vật nuôi thường sống trong chuồng', 'thường ăn thức ăn đa dạng do con người chuẩn bị', 'có thân tròn, chân ngắn và đuôi nhỏ', 'con non thường được gọi là lợn con']],
    ['con thỏ', ['có đôi tai dài giúp nghe tiếng động rất rõ', 'thường ăn cỏ, lá và củ quả', 'có thể nhảy nhanh nhờ hai chân sau khỏe', 'thường có bộ lông mềm', 'hay được nhắc đến trong truyện ngụ ngôn thi chạy với rùa']],
    ['con ngựa', ['có thể chạy nhanh trên bốn chân khỏe', 'được con người dùng để cưỡi hoặc kéo xe ở nhiều nơi', 'thường ăn cỏ và cỏ khô', 'có bờm dài ở cổ', 'có móng guốc ở chân']],
    ['con voi', ['là động vật trên cạn có kích thước rất lớn', 'có vòi dài dùng để lấy thức ăn và uống nước', 'có đôi tai lớn giúp tỏa nhiệt cơ thể', 'sống theo đàn và chăm sóc con non', 'ở Việt Nam có voi sinh sống tự nhiên tại một số vùng rừng']],
    ['con hổ', ['là động vật ăn thịt có bộ lông vằn đặc trưng', 'có móng vuốt sắc và răng nanh khỏe', 'thường sống đơn độc trong rừng', 'cần được bảo vệ vì số lượng ngoài tự nhiên giảm', 'có thể rình bắt con mồi rất im lặng']],
    ['con khỉ', ['có thể dùng tay để cầm nắm thức ăn', 'thường sống theo bầy đàn trên cây hoặc trong rừng', 'có khả năng leo trèo nhanh', 'thường ăn quả, lá, hạt và một số côn trùng', 'có khuôn mặt biểu cảm gần gũi với con người']],
    ['con cá chép', ['sống trong nước ngọt như ao, hồ và sông', 'thở bằng mang chứ không thở bằng phổi', 'di chuyển bằng vây và đuôi', 'có vảy phủ bên ngoài cơ thể', 'trong văn hóa dân gian thường gắn với chuyện vượt Vũ Môn']],
    ['con cá heo', ['là động vật có vú nhưng sống dưới nước', 'thở bằng phổi và phải ngoi lên mặt nước', 'thường sống thành đàn ở biển hoặc sông', 'dùng âm thanh để giao tiếp và định hướng', 'con non bú sữa mẹ']],
    ['con rùa', ['có mai cứng bảo vệ phần thân', 'di chuyển chậm trên cạn nhưng nhiều loài bơi tốt', 'có thể rụt đầu và chân vào mai để tự vệ', 'có một số loài sống ở nước ngọt, một số loài sống ở biển', 'được nhắc đến trong truyện ngụ ngôn thi chạy với thỏ']],
    ['con ếch', ['có thể sống cả trên cạn lẫn dưới nước', 'có da trần ẩm, không phủ lông hay vảy', 'bắt đầu vòng đời từ trứng và nòng nọc', 'có chân sau dài giúp nhảy xa', 'thường kêu nhiều vào mùa mưa']],
    ['con bướm', ['có đôi cánh phủ các vảy màu rất nhỏ', 'bắt đầu vòng đời từ trứng, sâu non rồi nhộng', 'thường hút mật hoa bằng vòi dài', 'giúp một số loài cây thụ phấn khi bay từ hoa này sang hoa khác', 'là một loài côn trùng có sáu chân']],
    ['con ong', ['sống theo đàn trong tổ có cấu trúc chặt chẽ', 'bay đến hoa để lấy mật và phấn hoa', 'có vai trò quan trọng trong việc thụ phấn cho cây', 'một số loài có thể đốt để tự vệ', 'làm ra mật ong từ nguồn mật hoa']],
    ['con kiến', ['là côn trùng nhỏ thường sống thành đàn đông', 'có sáu chân và cơ thể chia thành ba phần chính', 'có thể mang vật nặng hơn cơ thể nhiều lần', 'làm tổ trong đất, gỗ hoặc các khe hở', 'giao tiếp bằng râu và các tín hiệu mùi']],
    ['con chim sẻ', ['là loài chim nhỏ thường gặp gần nhà và đồng ruộng', 'có mỏ ngắn phù hợp ăn hạt và côn trùng nhỏ', 'xây tổ để đẻ trứng và nuôi con', 'có hai cánh và bộ lông vũ', 'có thể bay, đậu trên cành hoặc mái nhà']],
    ['con cú', ['thường hoạt động mạnh vào ban đêm', 'có đôi mắt lớn giúp quan sát trong ánh sáng yếu', 'có thể xoay đầu rất linh hoạt', 'thường ăn chuột và một số động vật nhỏ', 'bay khá êm nhờ cấu tạo lông cánh đặc biệt']],
    ['con dơi', ['là động vật có vú có thể bay', 'nhiều loài hoạt động vào ban đêm', 'có cánh là lớp da căng giữa các ngón chân trước', 'một số loài định hướng bằng âm thanh dội lại', 'khi nghỉ thường treo mình ngược bằng chân']],
    ['con chim cánh cụt', ['là loài chim không bay được nhưng bơi rất giỏi', 'có cánh biến đổi thành vây để bơi', 'sống ở những vùng biển lạnh hoặc mát', 'có lớp mỡ và lông giúp giữ ấm cơ thể', 'đẻ trứng và chăm sóc con non']],
    ['con kangaroo', ['có chân sau khỏe để nhảy xa', 'con cái có túi trước bụng để mang con non', 'sống tự nhiên chủ yếu ở châu Úc', 'thường ăn cỏ, lá và thực vật', 'dùng chiếc đuôi khỏe để giữ thăng bằng khi nhảy']],
    ['con hươu', ['có nhiều loài con đực mang gạc trên đầu', 'thường sống ở rừng thưa hoặc đồng cỏ', 'thường ăn cỏ, lá non và chồi cây', 'có thể chạy nhanh để tránh kẻ săn mồi', 'là động vật ăn cỏ có bốn chân']],
    ['con cá mập', ['là loài cá sống chủ yếu ở biển', 'có nhiều hàng răng sắc để bắt mồi', 'thở bằng mang và bơi bằng vây', 'có bộ xương chủ yếu làm bằng sụn', 'một số loài cần bơi liên tục để nước đi qua mang']],
    ['con cá sấu', ['là bò sát sống gần sông, hồ hoặc vùng đầm lầy', 'có hàm răng khỏe để bắt mồi', 'có da dày, phủ vảy cứng', 'có thể nằm phơi nắng để điều chỉnh nhiệt độ cơ thể', 'bơi bằng cách quẫy đuôi mạnh trong nước']],
    ['con hải cẩu', ['là động vật có vú sống ở biển', 'có vây giúp bơi và di chuyển trên bờ', 'thở bằng phổi nên phải ngoi lên mặt nước', 'có lớp mỡ dày giúp giữ ấm ở vùng nước lạnh', 'thường nghỉ trên bãi đá, bãi cát hoặc băng ven biển']],
    ['con sao la', ['là loài thú hiếm được phát hiện ở dãy Trường Sơn', 'có hai sừng thẳng, song song', 'sống trong rừng ẩm ở Việt Nam và Lào', 'cần được bảo vệ nghiêm ngặt vì rất hiếm gặp', 'còn được gọi bằng tên gợi nhớ đến hình ảnh sừng giống hai chiếc cọc']]
  ];

  const questions = [];
  const names = animals.map((item) => item[0]);
  animals.forEach(([name, facts], animalIndex) => {
    facts.forEach((fact, factIndex) => {
      const optionIndexes = [animalIndex, (animalIndex + 7) % names.length, (animalIndex + 13) % names.length, (animalIndex + 21) % names.length];
      const options = optionIndexes.map((index) => names[index]);
      const rotated = options.slice(factIndex % options.length).concat(options.slice(0, factIndex % options.length));
      questions.push({
        id: 'tn-animal-' + String(questions.length + 1).padStart(3, '0'),
        topic: 'tu-nhien',
        subtopic: 'dac-diem-con-vat',
        entityKey: 'animal-' + animalIndex,
        concept: 'animal-' + animalIndex + '-fact-' + factIndex,
        factKey: 'animal.' + animalIndex + '.' + factIndex,
        level: factIndex < 2 ? 'nhe-nhang' : (factIndex < 4 ? 'thu-thach' : 'kho'),
        type: 'choice',
        prompt: 'Con vật nào có đặc điểm sau: ' + fact + '?',
        answers: [name],
        options: rotated,
        hint: 'Đọc kỹ dấu hiệu nổi bật trong câu hỏi và liên hệ với loài vật quen thuộc.',
        explanation: 'Đáp án là ' + name + '. ' + fact.charAt(0).toUpperCase() + fact.slice(1) + '.'
      });
    });
  });

  if (questions.length !== 150 || new Set(questions.map((item) => item.factKey)).size !== 150) {
    throw new Error('Mảng đặc điểm con vật phải có đúng 150 kiến thức không trùng.');
  }
  window.IMathNatureAnimalQuestions = Object.freeze(questions.map((item) => Object.freeze(item)));
}());
