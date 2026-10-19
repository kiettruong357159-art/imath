(function () {
  'use strict';

  // 150 câu về môi trường sống: 30 loài, mỗi loài có 5 dữ kiện địa điểm/sinh cảnh khác nhau.
  // factKey và entityKey được bộ kiểm tra trung tâm dùng để chặn lặp kiến thức và lặp chủ thể trong một lượt.
  const habitats = [
    ['con chó', ['thường sống cùng người trong nhà, sân hoặc khu vườn', 'có thể ở trong chuồng nhỏ đặt gần nhà', 'phù hợp với nơi khô ráo, có chỗ nghỉ và nước uống', 'thường theo chủ ra sân hoặc đi dạo quanh khu dân cư', 'là vật nuôi quen thuộc ở nhiều gia đình']],
    ['con mèo', ['thường sống trong nhà hoặc quanh khu dân cư', 'hay tìm chỗ ấm, khô và kín để nằm nghỉ', 'có thể leo lên bệ cửa sổ, mái hiên hoặc cành cây thấp', 'thường trú ở nơi có người chăm sóc và có thức ăn', 'hay ẩn trong góc yên tĩnh khi cần nghỉ ngơi']],
    ['con trâu', ['gắn với đồng ruộng, bãi cỏ và vùng nông thôn', 'thường được đưa ra ruộng hoặc bãi chăn thả', 'thích có ao, vũng nước hoặc bùn để ngâm mình khi nóng', 'có thể ở trong chuồng trại gần cánh đồng', 'phù hợp với nơi có nhiều cỏ và nguồn nước']],
    ['con bò', ['thường sống ở trang trại, đồng cỏ hoặc chuồng nuôi', 'cần bãi cỏ rộng để kiếm ăn và vận động', 'có thể được chăn thả trên những vùng đất trống', 'thường ở chuồng trại khô ráo khi trời mưa hoặc ban đêm', 'phù hợp với nơi có cỏ, nước và bóng mát']],
    ['con gà', ['thường được nuôi ở sân vườn hoặc chuồng gà', 'thích bới đất khô quanh nhà để tìm thức ăn', 'cần chỗ cao, kín gió để đậu nghỉ ban đêm', 'hay kiếm ăn ở vườn, bãi đất hoặc nông trại', 'phù hợp với khu nuôi có chuồng che mưa nắng']],
    ['con vịt', ['thường sống gần ao, hồ, mương hoặc ruộng nước', 'có thể bơi và kiếm ăn trên mặt nước', 'hay được nuôi ở vùng có sân và ao gần nhau', 'phù hợp với ruộng lúa có nước và bờ đất thoải', 'cần nơi có nước để bơi rửa và tìm thức ăn']],
    ['con thỏ', ['thường sống ở đồng cỏ, bụi rậm hoặc hang đào trong đất', 'thích nơi yên tĩnh có cỏ non và chỗ ẩn nấp', 'có thể làm hang ở sườn đất khô ráo', 'khi nuôi cần chuồng thoáng, khô và có lớp lót sạch', 'hay ẩn dưới bụi cây để tránh nguy hiểm']],
    ['con sóc', ['sống chủ yếu trên cây ở rừng hoặc công viên', 'thường làm tổ trong hốc cây hoặc tán cây rậm', 'di chuyển nhanh giữa các cành cây cao', 'phù hợp với nơi có nhiều cây cho quả và hạt', 'ít khi sống ở nơi trống trải không có cây']],
    ['con dơi', ['có thể trú trong hang động, hốc cây hoặc mái nhà tối', 'thường chọn nơi kín, tối và ít bị quấy rầy để nghỉ', 'hay treo mình ở trần hang hoặc gầm mái', 'nhiều loài bay ra khỏi chỗ trú khi trời tối', 'phù hợp với nơi có khe hẹp để ẩn nấp ban ngày']],
    ['con cú', ['thường sống trong rừng, vườn cây hoặc nơi có cây lớn', 'có thể làm tổ trong hốc cây hay những nơi cao kín đáo', 'nhiều loài hoạt động quanh khu vực yên tĩnh vào ban đêm', 'thích nơi có cành cây để đậu quan sát con mồi', 'có thể ở gần cánh đồng nếu còn cây lớn làm chỗ trú']],
    ['con chim cánh cụt', ['sống ở các vùng biển lạnh, đặc biệt gần Nam Cực', 'làm tổ trên bờ biển, bãi đá hoặc lớp băng ven biển', 'bơi kiếm ăn trong nước biển lạnh', 'tụ tập thành đàn lớn ở những bờ biển lạnh giá', 'không sống tự nhiên ở rừng nhiệt đới nóng ẩm']],
    ['con hổ', ['thường sống trong rừng rậm, rừng thưa hoặc vùng cây bụi', 'cần khu rừng rộng để săn mồi và ẩn nấp', 'hay chọn nơi có nguồn nước như suối hoặc hồ nhỏ', 'ít xuất hiện ở khu dân cư đông người', 'cần sinh cảnh yên tĩnh với thảm thực vật che phủ']],
    ['con voi', ['sống ở rừng nhiệt đới, rừng thưa và đồng cỏ rộng', 'cần vùng có cây cối, nước uống và không gian di chuyển', 'đàn voi thường tìm đến sông suối để uống và tắm', 'có thể đi giữa rừng và bãi cỏ để kiếm ăn', 'khó sống lâu ở khu vực quá chật hẹp']],
    ['con khỉ', ['thường sống trong rừng có nhiều cây cao', 'di chuyển chủ yếu trên tán cây và các cành cây', 'hay tụ tập thành đàn ở vùng rừng có quả', 'cần cây lớn để làm nơi nghỉ và quan sát', 'ít phù hợp với nơi trống trải không có chỗ leo trèo']],
    ['con ếch', ['sống gần ao, hồ, mương nước hoặc ruộng lúa', 'cần cả nước và đất ẩm trong vòng đời của mình', 'hay xuất hiện ở bờ cỏ ẩm sau cơn mưa', 'đẻ trứng ở môi trường nước', 'thường ẩn trong bùn, cỏ rậm hoặc khe đất ẩm vào ban ngày']],
    ['con rùa nước ngọt', ['sống ở ao, hồ, sông chậm hoặc đầm nước ngọt', 'có thể lên bờ để phơi nắng nhưng vẫn cần nước để sống', 'hay ẩn dưới bèo, cỏ nước hoặc bùn đáy', 'phù hợp với nơi nước không chảy quá xiết', 'thường tìm bãi cát hoặc bờ đất để đẻ trứng']],
    ['con rắn', ['có thể sống trong rừng, đồng cỏ, bụi rậm hoặc khe đá', 'nhiều loài ẩn trong lá khô, hốc cây hay hang đất', 'thường chọn nơi có con mồi và chỗ che phủ', 'có loài sống gần ao hồ để tìm thức ăn', 'hay tránh nơi trống hoàn toàn vì khó ẩn nấp']],
    ['con cá sấu', ['sống gần sông, hồ, đầm lầy hoặc vùng cửa sông', 'thường nằm ở bờ cát hay bãi bùn cạnh nước', 'cần vùng nước đủ rộng để bơi và săn mồi', 'hay ẩn dưới mặt nước ở nơi có lau sậy', 'phù hợp với vùng khí hậu ấm']],
    ['con hải cẩu', ['sống ở biển và thường lên bờ ven biển để nghỉ', 'có thể nằm trên bãi đá, bãi cát hoặc tảng băng', 'kiếm ăn trong nước biển nhưng không sống hoàn toàn dưới nước', 'nhiều loài sống ở vùng biển lạnh hoặc mát', 'cần bờ biển yên tĩnh để nghỉ và nuôi con']],
    ['con cá voi', ['sống ở đại dương rộng lớn', 'di chuyển qua các vùng biển xa để tìm thức ăn hoặc sinh sản', 'không thể sống trong ao hồ nước ngọt nhỏ', 'nhiều loài bơi ở vùng biển sâu', 'một số loài di cư giữa vùng biển lạnh và vùng biển ấm']],
    ['con cá heo', ['sống ở biển, ven bờ hoặc một số sông lớn', 'thường bơi theo đàn ở vùng nước rộng', 'có thể xuất hiện gần bờ khi tìm thức ăn', 'cần môi trường nước sạch và đủ sâu để di chuyển', 'không sống trên cạn như động vật có chân']],
    ['con ong', ['làm tổ trong tổ ong, hốc cây hoặc thùng nuôi ong', 'thường bay quanh nơi có nhiều hoa', 'cần khu vực có cây và hoa để lấy mật', 'đàn ong sống tập trung trong một tổ', 'hay làm tổ ở nơi kín, tránh mưa gió mạnh']],
    ['con bướm', ['thường xuất hiện ở vườn hoa, bãi cỏ và nơi có cây cối', 'cần cây chủ để sâu non ăn lá', 'hay bay ở nơi có nắng nhẹ và hoa nở', 'ít hoạt động khi trời mưa to hoặc gió mạnh', 'có thể đậu dưới mặt lá hay cành cây để nghỉ']],
    ['con kiến', ['làm tổ trong đất, dưới đá, trong gỗ hoặc các kẽ tường', 'sống thành đàn đông trong một tổ', 'thường đi thành hàng từ tổ đến nơi có thức ăn', 'có thể làm tổ ở sân vườn hoặc gốc cây', 'cần các khe hẹp, khô ráo để bảo vệ tổ']],
    ['con giun đất', ['sống trong lớp đất ẩm của vườn và ruộng', 'thường ẩn sâu hơn khi nắng gắt hoặc đất khô', 'hay xuất hiện trên mặt đất sau mưa', 'cần môi trường đất tơi xốp và có chất mùn', 'không phù hợp với nền xi măng khô nóng']],
    ['con ốc sên', ['thường sống ở nơi ẩm như vườn cây và bụi cỏ', 'hay ẩn dưới lá, đá hoặc gỗ mục khi trời nắng', 'hoạt động nhiều hơn sau mưa hoặc về đêm', 'cần bề mặt ẩm để di chuyển dễ dàng', 'ít xuất hiện ở nơi khô cằn, nắng gắt']],
    ['con cua', ['có thể sống ở biển, vùng cửa sông hoặc rừng ngập mặn', 'nhiều loài đào hang ở bãi bùn hay bờ cát', 'thường ẩn trong hang khi thủy triều thay đổi', 'cần nơi có nước và bờ để trú ẩn', 'một số loài sống gần ruộng hoặc mương nước lợ']],
    ['con sao biển', ['sống ở đáy biển, đặc biệt vùng nước nông', 'thường bám trên đá, cát hoặc rạn san hô', 'không sống trong ao hồ nước ngọt', 'cần môi trường nước mặn để cơ thể hoạt động', 'có thể tìm thấy ở bãi triều khi nước rút']],
    ['san hô', ['phát triển ở biển nông, nước ấm và trong', 'thường tạo thành rạn ở vùng biển nhiệt đới', 'cần ánh sáng để các sinh vật cộng sinh hỗ trợ phát triển', 'khó phát triển tốt ở nơi nước quá đục', 'là nơi trú ẩn của nhiều loài cá nhỏ']],
    ['con rái cá', ['sống gần sông, hồ, đầm hoặc vùng nước ven biển', 'cần bờ cây cỏ rậm để làm nơi nghỉ và ẩn nấp', 'bơi và tìm thức ăn trong nước', 'hay chọn khu vực có nước sạch và nhiều cá', 'có thể làm hang ở bờ đất gần mặt nước']]
  ];

  const questions = [];
  const names = habitats.map((item) => item[0]);
  habitats.forEach(([name, facts], animalIndex) => {
    facts.forEach((fact, factIndex) => {
      const optionIndexes = [animalIndex, (animalIndex + 5) % names.length, (animalIndex + 14) % names.length, (animalIndex + 23) % names.length];
      const options = optionIndexes.map((index) => names[index]);
      const rotated = options.slice(factIndex % options.length).concat(options.slice(0, factIndex % options.length));
      questions.push({
        id: 'tn-habitat-' + String(questions.length + 1).padStart(3, '0'),
        topic: 'tu-nhien',
        subtopic: 'moi-truong-song',
        entityKey: 'habitat-animal-' + animalIndex,
        concept: 'habitat-animal-' + animalIndex + '-fact-' + factIndex,
        factKey: 'nature.habitat.' + animalIndex + '.' + factIndex,
        level: factIndex < 2 ? 'nhe-nhang' : (factIndex < 4 ? 'thu-thach' : 'kho'),
        type: 'choice',
        prompt: 'Loài nào có môi trường sống phù hợp với mô tả sau: ' + fact + '?',
        answers: [name],
        options: rotated,
        hint: 'Hãy chú ý nơi ở, nguồn nước, cây cối và cách loài vật thích nghi với môi trường.',
        explanation: 'Đáp án là ' + name + '. ' + fact.charAt(0).toUpperCase() + fact.slice(1) + '.'
      });
    });
  });

  if (questions.length !== 150 || new Set(questions.map((item) => item.factKey)).size !== 150) {
    throw new Error('Mảng môi trường sống phải có đúng 150 kiến thức không trùng.');
  }
  window.IMathNatureHabitatQuestions = Object.freeze(questions.map((item) => Object.freeze(item)));
}());
