(function () {
  'use strict';

  // 150 câu về cấu tạo và bộ phận của cây: 30 khái niệm, mỗi khái niệm có 5 dữ kiện.
  const parts = [
    ['rễ', ['thường nằm trong đất để giữ cây đứng vững', 'hút nước và muối khoáng cho cây', 'có thể mọc sâu hoặc lan rộng tùy loài cây', 'giúp cây bám vào đất khi có gió', 'một số loài có phần này phình to để dự trữ thức ăn']],
    ['rễ cọc', ['có một rễ chính to mọc sâu xuống đất', 'thường có nhiều rễ con mọc ra từ rễ chính', 'giúp một số cây bám đất rất chắc', 'có thể gặp ở nhiều cây thân gỗ', 'khác với rễ chùm vì có trục rễ chính rõ ràng']],
    ['rễ chùm', ['gồm nhiều rễ nhỏ mọc gần bằng nhau từ gốc thân', 'thường gặp ở cây lúa và nhiều loài cỏ', 'lan rộng gần mặt đất để hút nước', 'không có một rễ chính to nổi bật', 'giúp cây bám đất ở ruộng hoặc bãi cỏ']],
    ['lông hút', ['là những phần rất nhỏ mọc trên rễ non', 'giúp tăng diện tích hút nước của rễ', 'thường không nhìn rõ nếu chỉ quan sát từ xa', 'có vai trò hút nước và muối khoáng từ đất', 'dễ bị tổn thương khi đất quá khô hoặc bị nén chặt']],
    ['thân cây', ['nâng đỡ lá, hoa và quả', 'vận chuyển nước từ rễ lên các bộ phận phía trên', 'có thể là thân gỗ hoặc thân thảo', 'giúp cây vươn về phía có ánh sáng', 'một số loài dùng phần này để dự trữ thức ăn']],
    ['thân gỗ', ['cứng và thường có lớp vỏ bên ngoài', 'có thể sống nhiều năm', 'thường gặp ở cây xoài, cây phượng hoặc cây bàng', 'có thể tạo thành thân chính và nhiều cành lớn', 'phát triển dày lên theo thời gian ở nhiều loài cây']],
    ['thân thảo', ['mềm hơn thân gỗ và thường có màu xanh', 'thường gặp ở rau, cỏ và nhiều cây hoa', 'nhiều loài chỉ sống một hoặc vài mùa', 'dễ gãy hơn thân gỗ khi bị tác động mạnh', 'có thể mọc nhanh khi được đủ nước và ánh sáng']],
    ['vỏ cây', ['là lớp ngoài cùng bảo vệ thân gỗ', 'giúp hạn chế tổn thương do thời tiết hoặc côn trùng', 'có thể dày và sần ở cây lớn', 'không nên bóc tùy tiện vì có thể làm cây bị hại', 'ở một số loài có màu hoặc hoa văn riêng dễ nhận biết']],
    ['cành cây', ['mọc ra từ thân chính', 'mang lá, hoa và quả', 'giúp tán cây lan rộng để nhận ánh sáng', 'có thể được cắt tỉa để cây phát triển cân đối', 'thường phân nhánh thành các cành nhỏ hơn']],
    ['lá cây', ['là bộ phận thường có màu xanh', 'giúp cây tạo chất dinh dưỡng nhờ ánh sáng', 'có nhiều hình dạng và kích thước khác nhau', 'có thể thoát hơi nước ra môi trường', 'thường mọc trên cành hoặc thân']],
    ['phiến lá', ['là phần dẹt và rộng nhất của lá', 'thường có màu xanh để nhận ánh sáng', 'có thể có mép nguyên, răng cưa hoặc lượn sóng', 'là nơi diễn ra nhiều hoạt động tạo chất dinh dưỡng', 'được các gân lá nâng đỡ và dẫn truyền chất']],
    ['cuống lá', ['nối phiến lá với thân hoặc cành', 'giúp lá hướng về phía nhận được ánh sáng', 'có thể dài hoặc ngắn tùy loài cây', 'chứa các mạch dẫn liên hệ với thân', 'ở một số lá, phần này rất ngắn hoặc hầu như không thấy rõ']],
    ['gân lá', ['là các đường nổi trên phiến lá', 'giúp vận chuyển nước và chất dinh dưỡng trong lá', 'có thể xếp song song hoặc tạo mạng lưới', 'giúp phiến lá không bị quá mềm yếu', 'thường nhìn rõ hơn ở mặt dưới của nhiều lá']],
    ['khí khổng', ['là những lỗ rất nhỏ trên bề mặt lá', 'giúp cây trao đổi khí với môi trường', 'có liên quan đến việc thoát hơi nước', 'không thể nhìn rõ bằng mắt thường nếu không có dụng cụ phóng đại', 'thường tập trung nhiều ở mặt dưới của lá ở nhiều loài']],
    ['nụ hoa', ['là hoa chưa nở', 'thường được bao bọc bởi đài hoa', 'có thể phát triển thành hoa khi đủ điều kiện', 'thường nằm ở đầu cành hoặc nách lá', 'có hình dáng nhỏ và khép kín hơn hoa nở']],
    ['cánh hoa', ['thường có màu sắc nổi bật', 'giúp thu hút côn trùng hoặc động vật thụ phấn', 'xếp quanh các bộ phận sinh sản của hoa', 'có thể mỏng và mềm', 'số lượng khác nhau tùy loài hoa']],
    ['đài hoa', ['nằm ở phía ngoài và gần gốc hoa', 'thường có màu xanh', 'bảo vệ nụ hoa trước khi nở', 'có thể còn lại ở đáy quả sau khi hoa tàn', 'gồm các lá đài nhỏ xếp quanh nụ']],
    ['nhị hoa', ['là bộ phận sinh sản đực của hoa', 'thường có bao phấn ở đầu', 'tạo ra hạt phấn', 'có thể có một hoặc nhiều chiếc trong một bông hoa', 'thường nằm bên trong vòng cánh hoa']],
    ['nhụy hoa', ['là bộ phận sinh sản cái của hoa', 'gồm đầu nhụy, vòi nhụy và bầu nhụy', 'nhận hạt phấn trong quá trình thụ phấn', 'bầu nhụy có thể phát triển thành quả sau thụ tinh', 'thường nằm ở vị trí trung tâm của hoa']],
    ['quả', ['hình thành từ hoa sau khi thụ tinh ở nhiều loài cây', 'thường chứa hạt bên trong', 'có thể mọng nước hoặc khô cứng', 'giúp bảo vệ và phát tán hạt', 'có nhiều màu sắc khi chín để thu hút động vật ở một số loài']],
    ['vỏ quả', ['là lớp bao bên ngoài của quả', 'có thể mỏng như vỏ cà chua hoặc dày như vỏ bưởi', 'giúp bảo vệ phần thịt và hạt bên trong', 'có thể đổi màu khi quả chín', 'ở một số quả có gai hoặc lớp sáp để tự bảo vệ']],
    ['hạt', ['có thể phát triển thành cây mới khi đủ điều kiện', 'thường nằm trong quả ở cây có hoa', 'cần nước, không khí và nhiệt độ phù hợp để nảy mầm', 'có thể được gió, nước, động vật hoặc con người phát tán', 'mang mầm sống của cây non']],
    ['vỏ hạt', ['là lớp ngoài bảo vệ hạt', 'giúp hạt hạn chế mất nước', 'có thể cứng hoặc mỏng tùy loại hạt', 'thường cần hút nước trước khi hạt nảy mầm', 'có thể mang màu sắc hoặc hoa văn riêng']],
    ['phôi cây', ['là phần non nằm bên trong hạt', 'có thể phát triển thành cây con khi hạt nảy mầm', 'gồm mầm rễ và mầm chồi ở giai đoạn đầu', 'được bảo vệ bởi vỏ hạt và nguồn dinh dưỡng dự trữ', 'là bộ phận quan trọng nhất để tạo cây mới từ hạt']],
    ['lá mầm', ['là những lá đầu tiên của cây con', 'nằm trong hạt trước khi nảy mầm', 'có thể chứa hoặc nhận chất dinh dưỡng dự trữ', 'số lượng có thể giúp phân biệt một số nhóm cây', 'thường khác hình dạng với lá thật mọc sau đó']],
    ['chồi cây', ['là phần non có thể phát triển thành cành hoặc lá mới', 'thường xuất hiện ở đầu cành hoặc nách lá', 'có thể bật ra mạnh vào mùa cây sinh trưởng', 'được bảo vệ bởi các lá non hoặc vảy chồi ở một số loài', 'giúp cây tiếp tục lớn lên và phân nhánh']],
    ['tua cuốn', ['là bộ phận mảnh giúp cây leo bám', 'có thể quấn quanh giàn, cọc hoặc cây khác', 'thường gặp ở cây bầu, bí, mướp hoặc đậu', 'giúp thân cây vươn lên nơi có ánh sáng', 'có thể co xoắn khi chạm vào vật bám']],
    ['gai cây', ['là bộ phận nhọn giúp một số cây tự bảo vệ', 'có thể làm động vật khó ăn lá hoặc thân cây', 'thường gặp ở hoa hồng, xương rồng và một số cây khác', 'cần cẩn thận khi chạm vào để tránh bị xước', 'có thể mọc trên thân hoặc cành']],
    ['củ', ['là phần phình to dùng để dự trữ thức ăn ở một số cây', 'nhiều loại nằm dưới đất', 'có thể được con người dùng làm thực phẩm', 'có thể mọc từ rễ hoặc thân tùy loài cây', 'giúp cây sống qua giai đoạn thời tiết không thuận lợi']],
    ['thân bò', ['là dạng thân mọc lan sát hoặc gần sát mặt đất', 'có thể mọc rễ mới ở các đốt', 'thường gặp ở dưa hấu, bí và một số cây cỏ', 'giúp cây lan rộng ra xung quanh', 'cần khoảng đất trống để phát triển thuận lợi']]
  ];

  const questions = [];
  const names = parts.map((item) => item[0]);
  parts.forEach(([name, facts], partIndex) => {
    facts.forEach((fact, factIndex) => {
      const optionIndexes = [partIndex, (partIndex + 5) % names.length, (partIndex + 13) % names.length, (partIndex + 21) % names.length];
      const options = optionIndexes.map((index) => names[index]);
      const rotated = options.slice(factIndex % options.length).concat(options.slice(0, factIndex % options.length));
      questions.push({
        id: 'tn-plant-part-' + String(questions.length + 1).padStart(3, '0'),
        topic: 'tu-nhien',
        subtopic: 'bo-phan-cua-cay',
        entityKey: 'plant-part-' + partIndex,
        concept: 'plant-part-' + partIndex + '-fact-' + factIndex,
        factKey: 'nature.plant-part.' + partIndex + '.' + factIndex,
        level: factIndex < 2 ? 'nhe-nhang' : (factIndex < 4 ? 'thu-thach' : 'kho'),
        type: 'choice',
        prompt: 'Bộ phận hoặc cấu tạo nào của cây có đặc điểm sau: ' + fact + '?',
        answers: [name],
        options: rotated,
        hint: 'Hãy nghĩ xem mô tả nói về vị trí, hình dáng hay nhiệm vụ nào của cây.',
        explanation: 'Đáp án là ' + name + '. ' + fact.charAt(0).toUpperCase() + fact.slice(1) + '.'
      });
    });
  });

  if (questions.length !== 150 || new Set(questions.map((item) => item.factKey)).size !== 150) {
    throw new Error('Mảng bộ phận của cây phải có đúng 150 kiến thức không trùng.');
  }
  window.IMathNaturePlantPartsQuestions = Object.freeze(questions.map((item) => Object.freeze(item)));
}());
