(function () {
  'use strict';

  // 150 câu về hoa, quả và cây trồng: 30 cây, mỗi cây có 5 dữ kiện riêng.
  const plants = [
    ['cây lúa', ['được trồng nhiều ở ruộng có nước', 'cho hạt gạo dùng nấu cơm', 'khi còn non thường được gọi là mạ', 'có bông lúa mang nhiều hạt', 'cần thu hoạch khi hạt đã chín vàng']],
    ['cây ngô', ['có bắp được bao bởi nhiều lớp bẹ lá', 'hạt thường xếp thành hàng trên lõi bắp', 'được trồng trên đất tơi xốp và có nắng', 'phần tua ở đầu bắp là bộ phận dễ nhận ra', 'có thể dùng làm thực phẩm cho người và thức ăn chăn nuôi']],
    ['cây khoai lang', ['có củ phát triển trong đất', 'thường được nhân giống bằng dây hoặc hom', 'có thể cho củ ruột vàng, trắng hoặc tím', 'lá non có thể dùng làm rau ở một số nơi', 'cần được đào củ khi củ đã lớn']],
    ['cây khoai tây', ['có củ mọc dưới đất', 'có thể nảy mầm từ mắt trên củ', 'được dùng để chế biến nhiều món ăn', 'không nên ăn củ đã xanh vì có thể không tốt cho sức khỏe', 'phát triển tốt ở thời tiết mát hơn nhiều cây nhiệt đới']],
    ['cây sắn', ['có củ dài phát triển dưới đất', 'thường được trồng bằng đoạn thân', 'củ có thể dùng làm lương thực sau khi chế biến đúng cách', 'lá có nhiều thùy xòe như bàn tay', 'được trồng ở nhiều vùng đất đồi']],
    ['cây lạc', ['cho quả nằm dưới đất', 'hoa sau khi thụ phấn có phần cuống đâm xuống đất để tạo quả', 'hạt thường nằm trong vỏ cứng có nhiều gân', 'có thể ép lấy dầu từ hạt', 'có hoa nhỏ màu vàng trước khi tạo quả']],
    ['cây đậu xanh', ['có hạt nhỏ màu xanh', 'được dùng để nấu chè, làm nhân bánh hoặc nấu xôi', 'quả là những vỏ đậu dài có nhiều hạt bên trong', 'có nốt sần ở rễ giúp liên quan đến việc cố định đạm trong đất', 'có thể nảy mầm thành giá đỗ']],
    ['cây đậu nành', ['cho hạt thường có màu vàng nhạt', 'được dùng để làm sữa đậu nành và đậu phụ', 'quả là vỏ đậu có lông mịn', 'mỗi quả thường chứa vài hạt nhỏ', 'giúp bổ sung chất đạm từ thực vật trong bữa ăn']],
    ['cây chuối', ['có thân giả tạo bởi nhiều bẹ lá xếp chặt', 'cho buồng quả gồm nhiều nải', 'lá to thường được dùng để gói một số món ăn', 'sau khi cho quả, cây mẹ thường được thay bởi chồi non', 'quả chín thường có vị ngọt và ruột mềm']],
    ['cây cam', ['cho quả có múi và nhiều nước', 'vỏ quả có tinh dầu thơm', 'thường được trồng ở nơi có nhiều ánh sáng', 'hoa thường có màu trắng và hương thơm nhẹ', 'quả giàu vitamin C']],
    ['cây xoài', ['cho quả có hạt lớn ở giữa', 'quả non thường có vị chua hơn quả chín', 'có tán cây rộng khi trưởng thành', 'hoa mọc thành chùm nhỏ', 'quả chín thường có mùi thơm đặc trưng']],
    ['cây bưởi', ['cho quả lớn có nhiều múi', 'vỏ quả khá dày', 'thường được thu hoạch khi quả già', 'hoa có màu trắng và mùi thơm', 'múi quả được bọc bởi lớp màng mỏng']],
    ['cây dừa', ['cho quả có lớp xơ dày bên ngoài', 'nước dừa nằm bên trong quả non', 'thường mọc tốt ở vùng nhiệt đới', 'lá dài xòe thành tàu lớn', 'thân cây cao và ít phân cành']],
    ['cây thanh long', ['có thân mọng nước và nhiều cạnh', 'thường cần trụ để thân leo bám', 'cho quả có vỏ màu đỏ hoặc vàng tùy giống', 'hoa thường nở vào ban đêm', 'ruột quả có nhiều hạt nhỏ màu đen']],
    ['cây vải', ['cho quả nhỏ có vỏ sần màu đỏ khi chín', 'phần thịt quả trắng trong và ngọt', 'quả mọc thành chùm', 'hạt có màu nâu đen', 'thường chín vào mùa hè ở miền Bắc']],
    ['cây nhãn', ['cho quả tròn có vỏ nâu nhạt', 'phần thịt quả trong, ngọt và có hạt đen', 'quả thường mọc thành chùm', 'hoa mọc thành chùm nhỏ trên cành', 'có nhiều giống được trồng ở vùng đồng bằng']],
    ['cây mía', ['có thân dài chia thành nhiều đốt', 'thân chứa nhiều nước ngọt', 'được dùng để ép lấy nước hoặc làm đường', 'lá mọc dài và hẹp', 'thường được thu hoạch bằng cách chặt sát gốc']],
    ['cây chè', ['lá non được dùng để pha nước uống', 'thường được trồng thành đồi ở vùng có khí hậu mát', 'cần hái búp non để chế biến trà', 'có thể được cắt tỉa thấp để dễ thu hái', 'lá sau khi chế biến có mùi thơm đặc trưng']],
    ['cây cà phê', ['quả thường chín đỏ trên cành trước khi được hái', 'hạt nằm bên trong quả được dùng để rang và pha đồ uống', 'thường được trồng ở vùng đất cao và có khí hậu phù hợp', 'hoa có màu trắng, nở thành chùm', 'cần được thu hái quả chín để có chất lượng tốt']],
    ['cây ca cao', ['cho quả mọc trực tiếp trên thân hoặc cành lớn', 'hạt được dùng để làm bột và sô-cô-la', 'quả có vỏ dày', 'hoa nhỏ có thể mọc trên thân cây', 'cần được lên men hạt trước nhiều bước chế biến']],
    ['rau muống', ['có thân rỗng và mọc bò hoặc vươn dài', 'thường được trồng ở đất ẩm hoặc ruộng nước', 'lá thường có dạng mũi tên dài', 'ngọn non được dùng làm rau', 'có thể ra hoa màu tím nhạt hoặc trắng tùy giống']],
    ['rau cải', ['có lá xanh dùng làm rau ăn', 'nhiều giống có vị hơi cay hoặc hăng', 'thường được gieo bằng hạt', 'phát triển nhanh trong thời tiết mát', 'cần rửa sạch trước khi chế biến']],
    ['cây cà chua', ['cho quả khi chín thường có màu đỏ', 'quả có nhiều hạt nhỏ và mọng nước', 'thường cần cọc hoặc giàn để đỡ thân', 'hoa vàng có năm cánh nhọn xếp hình ngôi sao', 'được dùng làm rau và gia vị trong nhiều món ăn']],
    ['cây dưa hấu', ['cho quả lớn có vỏ xanh và ruột đỏ hoặc vàng', 'thân bò lan trên mặt đất', 'quả chứa nhiều nước', 'thường được trồng ở nơi có nhiều nắng', 'hạt có thể có màu đen, nâu hoặc trắng tùy giống']],
    ['cây bí đỏ', ['cho quả có vỏ cứng màu vàng cam hoặc xanh', 'thân thường bò dài trên mặt đất', 'hoa to màu vàng', 'hạt có thể rang ăn sau khi làm sạch', 'quả được dùng nấu canh hoặc làm bánh']],
    ['hoa sen', ['mọc ở ao hồ và có cuống dài vươn lên mặt nước', 'lá to có thể nổi hoặc vươn khỏi mặt nước', 'hoa thường có màu hồng hoặc trắng', 'hạt nằm trong gương sen', 'bùn là nơi rễ bám nhưng hoa vẫn nở đẹp trên mặt nước']],
    ['hoa hồng', ['thường có thân mang gai', 'có nhiều màu như đỏ, hồng, trắng hoặc vàng', 'nhiều giống có hương thơm', 'được trồng làm cảnh', 'cánh hoa xếp nhiều lớp quanh nhị']],
    ['hoa hướng dương', ['có bông hoa lớn thường quay về phía có ánh sáng khi còn non', 'có phần giữa mang nhiều hạt', 'cánh hoa thường có màu vàng', 'được trồng làm cảnh và lấy hạt', 'thân cây có thể cao hơn nhiều loài hoa khác']],
    ['hoa cúc', ['có nhiều cánh nhỏ xếp quanh nhụy', 'có nhiều màu như vàng, trắng hoặc tím', 'thường được trồng làm cảnh', 'nhiều giống nở rộ vào mùa thu hoặc dịp Tết', 'có thể được dùng để cắm hoa']],
    ['hoa phượng', ['có hoa màu đỏ cam rực rỡ', 'thường nở nhiều vào mùa hè', 'cây có tán rộng che bóng sân trường', 'lá nhỏ xếp thành nhiều cặp như lá kép', 'quả là vỏ dài, cứng và có nhiều hạt']]
  ];

  const questions = [];
  const names = plants.map((item) => item[0]);
  plants.forEach(([name, facts], plantIndex) => {
    facts.forEach((fact, factIndex) => {
      const optionIndexes = [plantIndex, (plantIndex + 4) % names.length, (plantIndex + 12) % names.length, (plantIndex + 21) % names.length];
      const options = optionIndexes.map((index) => names[index]);
      const rotated = options.slice(factIndex % options.length).concat(options.slice(0, factIndex % options.length));
      questions.push({
        id: 'tn-crop-' + String(questions.length + 1).padStart(3, '0'),
        topic: 'tu-nhien',
        subtopic: 'hoa-qua-va-cay-trong',
        entityKey: 'crop-' + plantIndex,
        concept: 'crop-' + plantIndex + '-fact-' + factIndex,
        factKey: 'nature.crop.' + plantIndex + '.' + factIndex,
        level: factIndex < 2 ? 'nhe-nhang' : (factIndex < 4 ? 'thu-thach' : 'kho'),
        type: 'choice',
        prompt: 'Cây hoặc hoa nào có đặc điểm sau: ' + fact + '?',
        answers: [name],
        options: rotated,
        hint: 'Hãy liên hệ với hình dáng, nơi trồng, bộ phận thu hoạch hoặc công dụng quen thuộc của cây.',
        explanation: 'Đáp án là ' + name + '. ' + fact.charAt(0).toUpperCase() + fact.slice(1) + '.'
      });
    });
  });

  if (questions.length !== 150 || new Set(questions.map((item) => item.factKey)).size !== 150) {
    throw new Error('Mảng hoa, quả và cây trồng phải có đúng 150 kiến thức không trùng.');
  }
  window.IMathNaturePlantsCropsQuestions = Object.freeze(questions.map((item) => Object.freeze(item)));
}());
