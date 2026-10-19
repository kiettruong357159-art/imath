(function () {
  'use strict';

  // 150 câu về động vật Việt Nam: 30 loài/chủ thể, mỗi chủ thể có 5 dữ kiện riêng.
  const animals = [
    ['sao la', ['là loài thú hiếm được phát hiện ở dãy Trường Sơn', 'có hai sừng thẳng gần như song song', 'sống trong những cánh rừng ẩm ở Việt Nam và Lào', 'cần được bảo vệ nghiêm ngặt vì rất hiếm gặp ngoài tự nhiên', 'có tên gọi gợi đến cặp sừng giống hai chiếc cọc']],
    ['voọc chà vá chân nâu', ['là loài linh trưởng có bộ lông nhiều màu nổi bật', 'có phần chân màu nâu đỏ đặc trưng', 'sống trên tán rừng ở miền Trung Việt Nam', 'ăn chủ yếu lá non, chồi cây và một số loại quả', 'cần rừng tự nhiên để kiếm ăn và di chuyển trên cây']],
    ['voọc Cát Bà', ['là loài linh trưởng đặc hữu gắn với quần đảo Cát Bà', 'sống trên các đảo đá vôi có rừng', 'có nguy cơ tuyệt chủng rất cao nên được bảo vệ đặc biệt', 'di chuyển trên vách đá và tán cây để tìm thức ăn', 'ăn lá, chồi non và quả trong rừng']],
    ['vượn cao vít', ['là loài vượn cực hiếm ở vùng núi phía Bắc Việt Nam', 'có cánh tay dài để chuyền nhanh qua các cành cây', 'thường cất tiếng hót vang vào buổi sáng', 'sống theo nhóm nhỏ trong rừng', 'cần được giữ gìn sinh cảnh rừng để tồn tại']],
    ['gà lôi lam mào trắng', ['là loài chim quý hiếm của rừng miền Trung Việt Nam', 'con trống có mào trắng nổi bật trên đầu', 'thường kiếm ăn trên nền rừng thay vì bay cao', 'phụ thuộc vào rừng ẩm thường xanh để sinh sống', 'cần được bảo vệ vì số lượng ngoài tự nhiên rất ít']],
    ['sếu đầu đỏ', ['là loài chim cao lớn có vùng da đỏ trên đầu', 'thường kiếm ăn ở vùng đất ngập nước và đồng cỏ ngập theo mùa', 'có thể tìm thấy ở một số vùng Đồng bằng sông Cửu Long vào mùa phù hợp', 'di chuyển bằng những bước chân dài trong vùng nước nông', 'cần đồng cỏ và nguồn nước sạch để kiếm ăn']],
    ['chim hồng hoàng', ['có chiếc mỏ lớn và phần sừng nổi bật trên mỏ', 'ăn nhiều loại quả rừng', 'giúp phát tán hạt cây khi bay từ nơi này sang nơi khác', 'làm tổ trong các hốc cây lớn', 'cần những khu rừng có cây cổ thụ để sinh sống']],
    ['hươu sao', ['có bộ lông với những đốm trắng như ngôi sao', 'con đực có gạc mọc trên đầu', 'gạc của con đực có thể thay đổi theo chu kỳ phát triển', 'thường sống ở rừng thưa hoặc đồng cỏ', 'cần được bảo vệ khỏi săn bắt trái phép']],
    ['sơn dương', ['là loài thú móng guốc sống ở vùng núi đá', 'có thể leo trèo nhanh trên sườn núi dốc', 'ăn lá cây, cỏ và chồi non', 'có sừng cong về phía sau', 'thường chọn các vách đá hiểm trở để tránh nguy hiểm']],
    ['bò tót', ['là một trong những loài bò rừng có kích thước lớn', 'sống ở rừng và các bãi cỏ gần rừng', 'có thể sống theo đàn nhỏ', 'có phần chân dưới màu sáng dễ nhận ra ở nhiều cá thể', 'cần không gian rừng rộng để kiếm ăn và di chuyển']],
    ['voi châu Á', ['là loài voi đang được bảo vệ ở Việt Nam', 'dùng vòi để lấy thức ăn, uống nước và giao tiếp', 'sống theo đàn có sự chăm sóc con non', 'cần những hành lang rừng để di chuyển giữa nơi kiếm ăn và nguồn nước', 'có thể làm phát tán hạt cây qua thức ăn chúng ăn']],
    ['gấu ngựa', ['có mảng lông trắng hình lưỡi liềm ở ngực', 'là động vật ăn tạp, có thể ăn quả, côn trùng và mật ong', 'sống trong rừng có nhiều cây và nơi trú ẩn', 'có móng khỏe để leo trèo và tìm thức ăn', 'cần được bảo vệ khỏi việc nuôi nhốt và săn bắt trái phép']],
    ['tê tê Java', ['có cơ thể phủ các vảy cứng', 'có thể cuộn tròn khi cảm thấy bị đe dọa', 'dùng lưỡi dài để ăn kiến và mối', 'sống ở rừng hoặc vùng cây bụi', 'là loài cần được bảo vệ vì bị buôn bán trái phép']],
    ['cầy hương', ['là động vật có vú thường hoạt động về đêm', 'có tuyến mùi đặc trưng', 'ăn quả, côn trùng và một số động vật nhỏ', 'thường sống ở rừng hoặc vùng cây bụi', 'cần được quan sát từ xa thay vì bắt làm vật nuôi']],
    ['rái cá vuốt bé', ['là loài rái cá có móng vuốt nhỏ', 'sống gần sông, suối, đầm lầy hoặc rừng ngập mặn', 'thường sống theo nhóm', 'ăn cua, ốc và các động vật nhỏ dưới nước', 'bị ảnh hưởng khi nguồn nước bị ô nhiễm']],
    ['rùa biển', ['là loài bò sát sống phần lớn thời gian ở biển', 'con cái lên bãi cát để đẻ trứng', 'rùa con mới nở thường bò theo hướng ra biển', 'có thể nhầm túi ni-lông với thức ăn trong nước', 'cần bãi biển sạch và yên tĩnh để sinh sản']],
    ['cá sấu Xiêm', ['là loài cá sấu nước ngọt rất hiếm ở Việt Nam', 'sống ở sông, hồ hoặc vùng đầm lầy', 'có da phủ vảy cứng và hàm răng khỏe', 'có thể nằm phơi nắng để làm ấm cơ thể', 'cần được bảo vệ trong các vùng sinh cảnh an toàn']],
    ['cá tra', ['là loài cá nước ngọt gắn với vùng sông lớn ở Nam Bộ', 'thở bằng mang và bơi bằng vây', 'có râu nhỏ gần miệng', 'là một mặt hàng thủy sản quan trọng của vùng Đồng bằng sông Cửu Long', 'cần nguồn nước phù hợp để phát triển']],
    ['cá lóc', ['là loài cá nước ngọt thường gặp ở ao, hồ và ruộng', 'có thân dài và đầu khá to', 'có thể sống ở nơi nước ít ô-xy hơn nhiều loài cá khác', 'ăn các động vật nhỏ sống trong nước', 'có thể bảo vệ đàn cá con ở gần tổ']],
    ['cua đồng', ['thường sống ở ruộng, ao và mương nước ngọt', 'có hai càng dùng để gắp thức ăn và tự vệ', 'di chuyển ngang rất nhanh', 'thở bằng mang', 'cần môi trường nước và bùn không bị ô nhiễm nặng']],
    ['tôm càng xanh', ['là loài tôm nước ngọt có cặp càng dài', 'có thể thay vỏ khi lớn lên', 'sống ở sông, ao hoặc vùng nước lợ nhẹ', 'được nuôi ở nhiều nơi để làm thực phẩm', 'cần nước sạch để phát triển tốt']],
    ['chim bói cá', ['có chiếc mỏ nhọn giúp bắt cá', 'thường đậu gần ao, hồ hoặc sông suối để quan sát', 'có thể lao nhanh xuống nước bắt mồi', 'nhiều loài có bộ lông màu xanh hoặc cam nổi bật', 'cần nguồn nước có cá và môi trường ít bị ô nhiễm']],
    ['chim én', ['là loài chim bay nhanh với đuôi thường chẻ đôi', 'nhiều loài làm tổ bằng bùn dưới mái hiên hoặc vách đá', 'bắt côn trùng khi đang bay', 'có thể di chuyển theo mùa đến nơi có khí hậu phù hợp', 'thường xuất hiện ở vùng đồng ruộng hoặc khu dân cư']],
    ['cò trắng', ['là loài chim có chân dài để lội trong nước nông', 'thường tìm thức ăn ở ruộng, đầm và vùng đất ngập nước', 'có cổ dài giúp mổ bắt cá, ếch hoặc côn trùng', 'có thể làm tổ thành đàn trên cây gần vùng nước', 'cần nơi kiếm ăn có nguồn nước sạch']],
    ['chim cu gáy', ['có tiếng kêu gù gù quen thuộc', 'ăn chủ yếu các loại hạt', 'thường làm tổ đơn giản trên cành cây', 'có thể gặp ở nông thôn, vườn cây và bìa rừng', 'có bộ lông nâu xám giúp dễ ẩn mình']],
    ['bướm phượng', ['là loài bướm lớn, nhiều loài có phần đuôi cánh kéo dài', 'hút mật hoa bằng vòi dài', 'sâu non của một số loài ăn lá cây họ cam quýt', 'trải qua các giai đoạn trứng, sâu non, nhộng rồi thành bướm', 'có thể giúp thụ phấn khi bay giữa các bông hoa']],
    ['ong mật', ['sống thành đàn trong tổ ong', 'ong thợ bay đến hoa lấy mật và phấn hoa', 'giúp nhiều loài cây thụ phấn', 'làm mật từ nguồn mật hoa', 'cần được quan sát cẩn thận, không nên chọc phá tổ ong']],
    ['thạch sùng', ['thường sống trên tường hoặc trần nhà', 'có đệm bám ở ngón chân giúp bám mặt phẳng', 'ăn nhiều loại côn trùng nhỏ trong nhà', 'hoạt động nhiều vào buổi tối', 'có thể tự rụng đuôi để thoát nguy hiểm rồi mọc lại dần']],
    ['kỳ đà', ['là loài thằn lằn có kích thước khá lớn', 'có da phủ vảy', 'ăn động vật nhỏ, trứng và một số xác động vật', 'thường sống gần vùng nước hoặc rừng cây', 'cần được bảo vệ, không nên săn bắt tùy tiện']],
    ['ếch cây', ['thường sống ở nơi có cây cối ẩm ướt', 'có đệm bám ở đầu ngón giúp leo trên lá và cành', 'ăn côn trùng nhỏ', 'đẻ trứng ở môi trường nước', 'có thể kêu vào mùa mưa để thu hút bạn tình']]
  ];

  const questions = [];
  const names = animals.map((item) => item[0]);
  animals.forEach(([name, facts], animalIndex) => {
    facts.forEach((fact, factIndex) => {
      const optionIndexes = [animalIndex, (animalIndex + 6) % names.length, (animalIndex + 15) % names.length, (animalIndex + 23) % names.length];
      const options = optionIndexes.map((index) => names[index]);
      const rotated = options.slice(factIndex % options.length).concat(options.slice(0, factIndex % options.length));
      questions.push({
        id: 'tn-vietnam-animal-' + String(questions.length + 1).padStart(3, '0'),
        topic: 'tu-nhien',
        subtopic: 'dong-vat-viet-nam',
        entityKey: 'vietnam-animal-' + animalIndex,
        concept: 'vietnam-animal-' + animalIndex + '-fact-' + factIndex,
        factKey: 'nature.vietnam-animal.' + animalIndex + '.' + factIndex,
        level: factIndex < 2 ? 'nhe-nhang' : (factIndex < 4 ? 'thu-thach' : 'kho'),
        type: 'choice',
        prompt: 'Động vật nào ở Việt Nam có đặc điểm sau: ' + fact + '?',
        answers: [name],
        options: rotated,
        hint: 'Hãy nhận ra dấu hiệu riêng về hình dáng, nơi sống, thức ăn hoặc việc bảo vệ loài vật.',
        explanation: 'Đáp án là ' + name + '. ' + fact.charAt(0).toUpperCase() + fact.slice(1) + '.'
      });
    });
  });

  if (questions.length !== 150 || new Set(questions.map((item) => item.factKey)).size !== 150) {
    throw new Error('Mảng động vật Việt Nam phải có đúng 150 kiến thức không trùng.');
  }
  window.IMathNatureVietnamAnimalQuestions = Object.freeze(questions.map((item) => Object.freeze(item)));
}());
