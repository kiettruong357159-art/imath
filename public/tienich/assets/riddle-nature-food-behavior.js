(function () {
  'use strict';

  // 150 câu về thức ăn và tập tính: 30 loài khác với hai gói trước,
  // mỗi loài đóng góp 5 kiến thức riêng để tránh lặp ý.
  const animals = [
    ['gấu trúc lớn', ['thức ăn chính là thân và lá tre', 'dùng hàm khỏe để nghiền những thân tre cứng', 'dành nhiều thời gian trong ngày để ăn tre', 'thường sống khá đơn độc ngoài mùa sinh sản', 'gấu con mới sinh rất nhỏ so với gấu mẹ']],
    ['gấu koala', ['ăn chủ yếu lá bạch đàn', 'ngủ nhiều giờ trong ngày để tiết kiệm năng lượng', 'lấy phần lớn lượng nước cần thiết từ lá cây', 'dùng móng khỏe để bám và leo cây', 'thường di chuyển chậm giữa các cành cây']],
    ['hươu cao cổ', ['ăn lá ở những cành cây cao mà nhiều loài khác khó với tới', 'dùng lưỡi dài để kéo lá khỏi cành có gai', 'khi uống nước thường phải dang rộng hai chân trước', 'nhai lại thức ăn sau khi đã nuốt', 'thường quan sát xung quanh từ vị trí cao của mình']],
    ['ngựa vằn', ['ăn chủ yếu cỏ và các phần non của cây', 'thường sống thành đàn để dễ quan sát nguy hiểm', 'có thể chạy nhanh để tránh kẻ săn mồi', 'dùng tiếng kêu và cử động tai để liên lạc trong đàn', 'sọc trên cơ thể giúp từng con nhận ra đồng loại']],
    ['chuột túi', ['ăn cỏ, lá và một số loại quả', 'di chuyển chủ yếu bằng các cú nhảy dài', 'mang con non trong túi ở bụng', 'dùng chiếc đuôi dài để giữ thăng bằng khi nhảy', 'thường hoạt động nhiều vào lúc trời mát']],
    ['lạc đà', ['ăn cỏ khô, lá cây và cây bụi ở vùng khô hạn', 'có thể đi lâu mà không cần uống nước thường xuyên', 'tích mỡ trong bướu để dùng làm nguồn năng lượng', 'có bàn chân rộng giúp không bị lún sâu trên cát', 'có thể khép bớt lỗ mũi khi gặp gió cát']],
    ['hà mã', ['chủ yếu ăn cỏ vào ban đêm', 'ngâm mình trong nước vào ban ngày để tránh nóng', 'có thể nín thở dưới nước trong vài phút', 'thường đi theo lối mòn từ sông ra bãi cỏ', 'hà mã mẹ bảo vệ con non rất kỹ']],
    ['tê giác', ['ăn cỏ, lá cây và cành non', 'thường tắm bùn để làm mát và bảo vệ da', 'dùng khứu giác và thính giác tốt để nhận biết xung quanh', 'có thể dùng sừng để tự vệ khi bị đe dọa', 'thường đánh dấu lãnh thổ bằng mùi riêng']],
    ['sư tử', ['ăn thịt các động vật khác', 'sống theo bầy gọi là đàn sư tử', 'nhiều con cái trong đàn cùng phối hợp săn mồi', 'dùng tiếng gầm để liên lạc và cảnh báo', 'dành nhiều giờ trong ngày để nghỉ ngơi']],
    ['báo gêpa', ['săn các loài thú nhỏ bằng những cú chạy rất nhanh', 'chỉ chạy nước rút trong quãng đường ngắn', 'thường săn vào ban ngày để dễ quan sát con mồi', 'dùng chiếc đuôi dài để giữ thăng bằng khi đổi hướng', 'sau khi chạy nhanh cần nghỉ để cơ thể hạ nhiệt']],
    ['sói', ['sống và săn mồi theo bầy có tổ chức', 'dùng tiếng hú để liên lạc ở khoảng cách xa', 'phối hợp với các con khác khi đuổi theo con mồi', 'sói bố mẹ cùng chăm sóc con non trong hang', 'đánh dấu khu vực sống bằng mùi riêng']],
    ['cáo', ['ăn cả động vật nhỏ, côn trùng lẫn quả chín', 'thường tự săn mồi một mình', 'có thính giác nhạy để nghe tiếng động nhỏ dưới cỏ', 'dùng đuôi rậm để giữ ấm khi trời lạnh', 'đào hang làm nơi nghỉ và nuôi con']],
    ['gấu nâu', ['ăn quả, hạt, côn trùng, cá và nhiều loại thức ăn khác', 'có khứu giác rất nhạy để tìm thức ăn', 'một số quần thể ngủ dài vào mùa đông', 'có thể bắt cá ở nơi cá bơi ngược dòng', 'gấu mẹ dạy con cách kiếm ăn và tránh nguy hiểm']],
    ['hươu', ['ăn cỏ, lá, chồi non và quả rụng', 'thường cảnh giác bằng cách lắng nghe và ngửi mùi xung quanh', 'có thể chạy nhanh và nhảy qua chướng ngại vật', 'hươu đực ở nhiều loài có gạc và gạc có thể rụng rồi mọc lại', 'thường sống thành nhóm để tăng khả năng phát hiện nguy hiểm']],
    ['lợn rừng', ['dùng mõm đào đất để tìm rễ, củ và côn trùng', 'ăn được cả quả rụng, hạt và động vật nhỏ', 'thường hoạt động khi trời mát hoặc ban đêm', 'thích tắm bùn để làm mát và xua côn trùng', 'con mẹ dẫn đàn con đi kiếm ăn theo nhóm']],
    ['đười ươi', ['ăn nhiều loại quả, lá non và đôi khi côn trùng', 'dùng cành cây để làm tổ nghỉ trên cao', 'có cánh tay dài giúp đu giữa các cành cây', 'đười ươi mẹ chăm con trong thời gian dài', 'một số quần thể biết dùng que để lấy thức ăn']],
    ['con lười', ['ăn chủ yếu lá cây ít năng lượng', 'di chuyển rất chậm để tiết kiệm năng lượng', 'thường ngủ và nghỉ trên cành cây', 'có móng dài để treo ngược người trên cây', 'chỉ thỉnh thoảng mới xuống mặt đất']],
    ['hải ly', ['ăn vỏ cây, cành non và cây thủy sinh', 'dùng răng cửa khỏe để gặm thân cây', 'có thể đắp đập để làm thay đổi dòng nước', 'dùng đuôi đập xuống nước để báo động', 'xây nơi ở bằng cành cây và bùn']],
    ['nhím', ['ăn rễ, củ, quả và một số cây mềm', 'xù lông gai để tự vệ khi gặp nguy hiểm', 'thường hoạt động vào ban đêm', 'không bắn lông gai về phía kẻ thù như nhiều người lầm tưởng', 'dùng răng khỏe để gặm thức ăn cứng']],
    ['nhím gai', ['ăn côn trùng, giun và các con vật nhỏ', 'cuộn tròn cơ thể thành quả bóng khi sợ hãi', 'có nhiều gai nhọn trên lưng để tự vệ', 'thường ra ngoài kiếm ăn vào ban đêm', 'dùng khứu giác để tìm thức ăn trong lá khô']],
    ['tắc kè hoa', ['bắt côn trùng bằng chiếc lưỡi dài và dính', 'có hai mắt có thể quan sát theo các hướng khác nhau', 'thay đổi màu cơ thể để giao tiếp hoặc điều chỉnh nhiệt độ', 'thường di chuyển chậm trên cành cây', 'dùng đuôi để bám chắc khi leo trèo']],
    ['thằn lằn', ['ăn nhiều loại côn trùng nhỏ', 'có thể tự rụng đuôi khi bị kẻ thù tóm', 'đuôi mới có thể mọc lại nhưng không giống hoàn toàn đuôi cũ', 'nhiều loài hoạt động vào ban đêm để săn côn trùng', 'có thể bám trên tường nhờ các đệm nhỏ ở bàn chân']],
    ['chim công', ['ăn hạt, quả, côn trùng và một số động vật nhỏ', 'chim công trống xòe bộ lông đuôi để thu hút chim mái', 'thường ngủ trên cành cây cao để tránh kẻ thù', 'có tiếng kêu to để báo hiệu cho đồng loại', 'kiếm ăn bằng cách đi trên mặt đất và mổ thức ăn']],
    ['vẹt', ['ăn quả, hạt và các loại hạt cứng', 'dùng mỏ cong khỏe để bóc vỏ hạt', 'có thể bắt chước một số âm thanh nghe được', 'dùng các ngón chân linh hoạt để cầm thức ăn', 'nhiều loài sống và bay theo đàn']],
    ['đà điểu', ['ăn hạt, cỏ, lá và một số côn trùng', 'không bay được nhưng chạy rất nhanh trên mặt đất', 'dùng đôi chân khỏe để tự vệ khi cần thiết', 'đẻ trứng rất lớn so với nhiều loài chim khác', 'thường quan sát nguy hiểm từ xa nhờ cổ dài']],
    ['hồng hạc', ['lọc tảo và động vật rất nhỏ trong nước để ăn', 'màu hồng của lông có liên quan đến thức ăn chứa sắc tố', 'thường đứng bằng một chân khi nghỉ', 'sống thành đàn lớn ở vùng nước nông', 'làm tổ bằng bùn thành gò nhỏ']],
    ['bồ nông', ['ăn cá là thức ăn chủ yếu', 'có túi da lớn dưới mỏ để xúc và giữ cá', 'một số loài phối hợp với nhau để dồn cá', 'có thể bay xa để tìm nơi kiếm ăn', 'thường làm tổ thành nhóm gần mặt nước']],
    ['bạch tuộc', ['ăn cua, tôm, sò và các động vật nhỏ dưới biển', 'có tám tay với các giác hút để bám và bắt mồi', 'phun mực để che mắt kẻ thù khi chạy trốn', 'có thể đổi màu da để ẩn mình trong môi trường', 'không có xương nên có thể luồn qua khe hẹp']],
    ['cá mập', ['ăn cá, mực và nhiều động vật biển tùy loài', 'có bộ xương làm bằng sụn thay vì xương cứng', 'răng có thể được thay mới nhiều lần trong đời', 'nhận biết rung động trong nước để tìm mồi', 'một số loài phải bơi liên tục để nước đi qua mang']],
    ['rùa biển', ['ăn cỏ biển, sứa hoặc sinh vật nhỏ tùy loài', 'dùng các vây lớn để bơi xa ngoài đại dương', 'rùa cái lên bãi cát để đẻ trứng', 'rùa con mới nở thường bò nhanh ra biển', 'có thể di cư rất xa giữa vùng kiếm ăn và nơi đẻ trứng']]
  ];

  const questions = [];
  const names = animals.map((item) => item[0]);
  animals.forEach(([name, facts], animalIndex) => {
    facts.forEach((fact, factIndex) => {
      const optionIndexes = [animalIndex, (animalIndex + 4) % names.length, (animalIndex + 12) % names.length, (animalIndex + 20) % names.length];
      const options = optionIndexes.map((index) => names[index]);
      const rotated = options.slice(factIndex % options.length).concat(options.slice(0, factIndex % options.length));
      questions.push({
        id: 'tn-behavior-' + String(questions.length + 1).padStart(3, '0'),
        topic: 'tu-nhien',
        subtopic: 'thuc-an-va-tap-tinh',
        entityKey: 'behavior-animal-' + animalIndex,
        concept: 'behavior-animal-' + animalIndex + '-fact-' + factIndex,
        factKey: 'nature.behavior.' + animalIndex + '.' + factIndex,
        level: factIndex < 2 ? 'nhe-nhang' : (factIndex < 4 ? 'thu-thach' : 'kho'),
        type: 'choice',
        prompt: 'Loài nào có thức ăn hoặc tập tính sau: ' + fact + '?',
        answers: [name],
        options: rotated,
        hint: 'Hãy chú ý chi tiết về thức ăn hoặc cách loài vật kiếm ăn, tự vệ và chăm con.',
        explanation: 'Đáp án là ' + name + '. ' + fact.charAt(0).toUpperCase() + fact.slice(1) + '.'
      });
    });
  });

  if (questions.length !== 150 || new Set(questions.map((item) => item.factKey)).size !== 150) {
    throw new Error('Mảng thức ăn và tập tính phải có đúng 150 kiến thức không trùng.');
  }
  window.IMathNatureFoodBehaviorQuestions = Object.freeze(questions.map((item) => Object.freeze(item)));
}());
