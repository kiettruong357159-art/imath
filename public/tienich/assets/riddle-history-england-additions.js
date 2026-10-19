(function () {
  'use strict';

  const bank = window.IMathHistoryRiddleBank;
  if (!bank || !Array.isArray(bank.questions) || bank.questions.length !== 1300) throw new Error('Cần nạp đủ ngân hàng 1.300 câu trước phần lịch sử nước Anh.');

  const sources = {
    anglo: ['Bảo tàng Anh · Người Anglo-Saxon', 'https://www.britishmuseum.org/sites/default/files/2019-10/Visit_Anglo_Saxons.pdf'],
    origins: ['Quốc hội Anh · Nguồn gốc Anglo-Saxon', 'https://www.parliament.uk/about/living-heritage/evolutionofparliament/originsofparliament/birthofparliament/overview/origins/'],
    monarchs: ['Hoàng gia Anh · Các quốc vương Anh 400–1603', 'https://www.royal.uk/english-monarchs-ad-400-1603'],
    domesday: ['Cục Lưu trữ Quốc gia Anh · Domesday Book', 'https://www.nationalarchives.gov.uk/education/resources/domesday-book/'],
    magna: ['Cục Lưu trữ Quốc gia Anh · Magna Carta', 'https://www.nationalarchives.gov.uk/education/resources/magna-carta/'],
    parliament: ['Quốc hội Anh · Sự phát triển của Nghị viện', 'https://www.parliament.uk/about/living-heritage/evolutionofparliament/'],
    tudor: ['Hoàng gia Anh · Nhà Tudor', 'https://www.royal.uk/tudors'],
    reformation: ['Quốc hội Anh · Nghị viện Cải cách', 'https://www.parliament.uk/about/living-heritage/evolutionofparliament/originsofparliament/birthofparliament/overview/reformation/'],
    stuart: ['Hoàng gia Anh · Nhà Stuart', 'https://www.royal.uk/stuarts'],
    civilWar: ['Quốc hội Anh · Nội chiến', 'https://www.parliament.uk/about/living-heritage/evolutionofparliament/parliamentaryauthority/civilwar/'],
    glorious: ['Cục Lưu trữ Quốc gia Anh · Cách mạng Vinh quang', 'https://www.nationalarchives.gov.uk/education/resources/glorious-revolution/'],
    union: ['Quốc hội Anh · Đạo luật Liên hiệp 1707', 'https://www.parliament.uk/about/living-heritage/evolutionofparliament/legislativescrutiny/act-of-union-1707/']
  };

  const facts = [];
  function fact(period, level, topic, prompt, answer, wrong1, wrong2, wrong3, hint, explanation, sourceKey) {
    facts.push({ period, level, topic, prompt, answer, wrongs: [wrong1, wrong2, wrong3], hint, explanation, sourceKey });
  }

  fact('Britannia thuộc La Mã','nhe-nhang','Cuộc chinh phục La Mã','Hoàng đế La Mã nào bắt đầu cuộc chinh phục quy mô lớn nước Anh năm 43?','Claudius','Augustus','Nero','Constantine','Cuộc viễn chinh diễn ra gần một thế kỷ sau Julius Caesar.','Hoàng đế Claudius phát động cuộc chinh phục Britannia năm 43.','monarchs');
  fact('Britannia thuộc La Mã','nhe-nhang','Tường Hadrian','Công trình phòng thủ La Mã nào chạy ngang miền bắc nước Anh?','Tường Hadrian','Vạn Lý Trường Thành','Tường Antonine tại London','Maginot Line','Công trình mang tên một hoàng đế La Mã.','Tường Hadrian được xây từ khoảng năm 122 để kiểm soát biên giới phía bắc Britannia.','monarchs');
  fact('Britannia thuộc La Mã','thu-thach','Nữ hoàng Boudica','Nữ thủ lĩnh nào lãnh đạo cuộc nổi dậy chống La Mã năm 60–61?','Boudica','Æthelflæd','Matilda','Elizabeth I','Bà là nữ vương của người Iceni.','Boudica lãnh đạo liên minh các bộ tộc nổi dậy và tấn công nhiều đô thị La Mã.','monarchs');
  fact('Anh thời hậu La Mã','thu-thach','La Mã rút quân','Quyền cai trị của La Mã tại Britannia chấm dứt vào khoảng thời gian nào?','Đầu thế kỷ V','Đầu thế kỷ I','Cuối thế kỷ VIII','Thế kỷ XI','Mốc thường được nhắc là khoảng năm 410.','Khi chính quyền La Mã rút đi đầu thế kỷ V, Britannia bước vào thời kỳ biến đổi chính trị sâu sắc.','anglo');
  fact('Anh thời Anglo-Saxon','nhe-nhang','Các dân tộc Anglo-Saxon','Tên gọi Anglo-Saxon chủ yếu gắn với những nhóm dân nào tới định cư ở Anh?','Angles, Saxons và Jutes','Romans, Greeks và Egyptians','Franks, Goths và Huns','Danes, Swedes và Finns','Hai nhóm đầu tạo nên chính tên gọi Anglo-Saxon.','Angles, Saxons và Jutes là các nhóm Germanic có vai trò lớn trong quá trình hình thành nước Anh đầu trung đại.','anglo');
  fact('Anh thời Anglo-Saxon','nhe-nhang','Tiếng Anh cổ','Ngôn ngữ chính của người Anglo-Saxon được gọi là gì?','Tiếng Anh cổ','Tiếng Latin cổ điển','Tiếng Pháp Norman','Tiếng Gaelic','Ngôn ngữ này là tổ tiên trực tiếp của tiếng Anh.','Tiếng Anh cổ được sử dụng rộng rãi trước khi chịu ảnh hưởng mạnh của tiếng Pháp Norman sau năm 1066.','anglo');
  fact('Anh thời Anglo-Saxon','thu-thach','Sutton Hoo','Di chỉ Sutton Hoo nổi tiếng với loại hình phát hiện nào?','Mộ thuyền hoàng gia','Đấu trường La Mã','Lâu đài đá Norman','Hầm mỏ than','Con tàu được chôn cùng nhiều báu vật thế kỷ VII.','Mộ thuyền Sutton Hoo cho thấy sự giàu có, mạng lưới giao lưu và nghệ thuật của giới tinh hoa Anglo-Saxon.','anglo');
  fact('Anh thời Anglo-Saxon','thu-thach','Witan','Witan trong xã hội Anglo-Saxon có chức năng chính nào?','Hội đồng cố vấn cho nhà vua','Đội cận vệ Viking','Tòa án của giáo hoàng','Hiệp hội thương nhân','Tên đầy đủ Witana Gemot nghĩa là cuộc họp của người thông thái.','Witan tập hợp các quý tộc và giáo sĩ hàng đầu để cố vấn cho vua, là một tiền thân xa của truyền thống nghị viện.','origins');
  fact('Anh thời Anglo-Saxon','nhe-nhang','Alfred Đại đế','Vị vua Wessex nào nổi tiếng chống lại các cuộc xâm nhập của Viking?','Alfred Đại đế','Harold II','William I','Henry II','Ông trị vì cuối thế kỷ IX.','Alfred Đại đế bảo vệ Wessex, cải tổ phòng thủ và thúc đẩy giáo dục.','monarchs');
  fact('Anh thời Anglo-Saxon','thu-thach','Danelaw','“Danelaw” chỉ khu vực nào?','Vùng nước Anh chịu luật lệ và ảnh hưởng của người Đan Mạch','Thuộc địa Anh ở Bắc Mỹ','Vùng do La Mã cai trị tại Wales','Lãnh địa của Giáo hoàng','Tên gọi ghép Dane và law.','Danelaw là vùng rộng lớn ở miền bắc và đông nước Anh chịu sự kiểm soát, định cư và luật tục Scandinavia.','anglo');

  fact('Hình thành vương quốc Anh','thu-thach','Athelstan','Vị vua nào thường được xem là người đầu tiên cai trị một nước Anh thống nhất?','Athelstan','Alfred Đại đế','Edward the Confessor','Cnut','Ông chiến thắng tại Brunanburh năm 937.','Athelstan mở rộng quyền lực và thường được coi là vị vua đầu tiên của toàn nước Anh.','monarchs');
  fact('Cuộc chinh phục Norman','nhe-nhang','Trận Hastings','Trận Hastings diễn ra vào năm nào?','1066','1215','1348','1485','Mốc này mở đầu thời Norman tại Anh.','Trận Hastings năm 1066 kết thúc với chiến thắng của William xứ Normandy.','monarchs');
  fact('Cuộc chinh phục Norman','nhe-nhang','William Kẻ Chinh phục','Ai đánh bại vua Harold II tại trận Hastings?','William xứ Normandy','Richard Sư tử tâm','Henry Tudor','Oliver Cromwell','Ông sau đó trở thành William I của Anh.','William xứ Normandy chiến thắng tại Hastings và đăng quang vua Anh.','monarchs');
  fact('Cuộc chinh phục Norman','thu-thach','Thảm Bayeux','Thảm Bayeux mô tả sự kiện lịch sử nào?','Cuộc chinh phục nước Anh của người Norman','Ký Magna Carta','Chiến tranh Hoa Hồng','Cách mạng Vinh quang','Tác phẩm dài kể bằng hình ảnh về năm 1066.','Thảm Bayeux mô tả các sự kiện dẫn tới và bao gồm trận Hastings.','monarchs');
  fact('Anh thời Norman','thu-thach','Domesday Book','Domesday Book năm 1086 được lập nhằm mục đích chính nào?','Khảo sát đất đai, tài sản và nghĩa vụ','Ghi chép kịch của Shakespeare','Dịch Kinh Thánh','Lập bản đồ thuộc địa Mỹ','William I cần biết nguồn lực trong vương quốc.','Domesday Book là cuộc điều tra lớn về đất, người sở hữu và giá trị tài sản để phục vụ quản trị, thuế khóa.','domesday');
  fact('Anh thời Norman','nhe-nhang','Lâu đài Norman','Loại công trình nào được người Norman xây nhiều để kiểm soát nước Anh?','Lâu đài','Kim tự tháp','Đền hang','Kênh đào xuyên biển','Motte-and-bailey là một kiểu phổ biến.','Người Norman xây mạng lưới lâu đài để đóng quân và khẳng định quyền lực.','monarchs');
  fact('Anh thời Norman','thu-thach','Ảnh hưởng ngôn ngữ Norman','Sau năm 1066, ngôn ngữ nào ảnh hưởng mạnh tới từ vựng tiếng Anh?','Tiếng Pháp Norman','Tiếng Trung cổ','Tiếng Arab','Tiếng Sanskrit','Ngôn ngữ của tầng lớp cai trị mới.','Tiếng Pháp Norman được dùng trong triều đình và giới quý tộc, để lại nhiều từ trong tiếng Anh.','anglo');
  fact('Nhà Plantagenet','thu-thach','Henry II và thông luật','Vua Henry II có đóng góp nổi bật nào đối với pháp luật Anh?','Phát triển hệ thống common law','Ban hành Bill of Rights 1689','Lập Giáo hội Anh','Bãi bỏ Nghị viện','Các thẩm phán hoàng gia áp dụng án lệ rộng hơn.','Những cải cách tư pháp thời Henry II góp phần hình thành hệ thống thông luật của Anh.','monarchs');
  fact('Nhà Plantagenet','nhe-nhang','Thomas Becket','Thomas Becket bị sát hại năm 1170 tại nhà thờ nào?','Canterbury Cathedral','Westminster Abbey','St Paul’s Cathedral','York Minster','Ông là Tổng giám mục Canterbury.','Thomas Becket bị giết tại Canterbury Cathedral sau xung đột với Henry II.','monarchs');
  fact('Anh trung đại','nhe-nhang','Magna Carta','Magna Carta được đóng ấn vào năm nào?','1215','1066','1265','1689','Văn kiện gắn với vua John và Runnymede.','Vua John đóng ấn Magna Carta tại Runnymede năm 1215.','magna');

  fact('Anh trung đại','thu-thach','Ý nghĩa Magna Carta','Nguyên tắc lâu dài thường gắn với Magna Carta là gì?','Nhà vua cũng chịu sự ràng buộc của pháp luật','Nhà vua có quyền lực tuyệt đối','Nghị viện bị bãi bỏ','Mọi loại thuế được xóa bỏ','Không ai hoàn toàn đứng trên pháp luật.','Magna Carta trở thành biểu tượng của việc quyền lực nhà vua phải chịu giới hạn pháp lý.','magna');
  fact('Nguồn gốc Nghị viện Anh','thu-thach','Simon de Montfort','Nghị viện năm 1265 của Simon de Montfort đáng chú ý vì có đại diện của những nhóm nào?','Hiệp sĩ các hạt và dân thị trấn','Chỉ thành viên hoàng tộc','Chỉ giáo sĩ nước ngoài','Chỉ tướng Norman','Những đại diện này về sau gắn với Hạ viện.','Cuộc họp năm 1265 mời hiệp sĩ và burgesses tham gia, đánh dấu bước quan trọng trong đại diện chính trị.','parliament');
  fact('Nguồn gốc Nghị viện Anh','thu-thach','Model Parliament','“Model Parliament” năm 1295 được triệu tập dưới thời vua nào?','Edward I','John','Henry VII','James I','Nhà vua này còn được gọi là Edward Longshanks.','Nghị viện Mẫu năm 1295 dưới Edward I tập hợp quý tộc, giáo sĩ, hiệp sĩ và đại diện thị trấn.','parliament');
  fact('Anh trung đại','nhe-nhang','Chiến tranh Trăm Năm','Chiến tranh Trăm Năm diễn ra chủ yếu giữa Anh và nước nào?','Pháp','Tây Ban Nha','Hà Lan','Đan Mạch','Hai vương triều tranh chấp ngôi vua Pháp.','Chiến tranh Trăm Năm là chuỗi xung đột Anh–Pháp từ 1337 đến 1453.','monarchs');
  fact('Anh trung đại','nhe-nhang','Cái Chết Đen','Đại dịch Cái Chết Đen tới Anh vào khoảng năm nào?','1348','1215','1415','1485','Mốc này nằm giữa thế kỷ XIV.','Dịch hạch lan tới Anh năm 1348 và gây tổn thất dân số rất lớn.','monarchs');
  fact('Anh trung đại','thu-thach','Khởi nghĩa Nông dân','Cuộc Khởi nghĩa Nông dân năm 1381 gắn với thủ lĩnh nào?','Wat Tyler','William Wallace','Thomas Becket','Guy Fawkes','Ông dẫn đoàn người tiến vào London.','Wat Tyler là thủ lĩnh nổi bật của cuộc nổi dậy chống thuế thân và bất bình đẳng năm 1381.','parliament');
  fact('Văn học Anh trung đại','nhe-nhang','The Canterbury Tales','Ai là tác giả The Canterbury Tales?','Geoffrey Chaucer','William Shakespeare','John Milton','Daniel Defoe','Các câu chuyện được kể bởi những người hành hương.','Geoffrey Chaucer viết The Canterbury Tales bằng tiếng Anh trung đại.','monarchs');
  fact('Anh cuối trung đại','nhe-nhang','Chiến tranh Hoa Hồng','Chiến tranh Hoa Hồng là cuộc tranh chấp giữa hai nhà nào?','Lancaster và York','Tudor và Stuart','Wessex và Mercia','Normandy và Anjou','Biểu tượng truyền thống là hoa hồng đỏ và trắng.','Hai nhánh Lancaster và York của hoàng tộc Plantagenet tranh giành ngai vàng.','monarchs');
  fact('Anh cuối trung đại','thu-thach','Trận Bosworth','Trận Bosworth năm 1485 đưa ai lên ngôi?','Henry Tudor','Richard II','Edward I','James VI','Chiến thắng mở đầu triều Tudor.','Henry Tudor đánh bại Richard III và lên ngôi Henry VII.','monarchs');
  fact('Chiến tranh Trăm Năm','thu-thach','Trận Agincourt','Vua Anh nào giành chiến thắng nổi tiếng tại Agincourt năm 1415?','Henry V','Henry II','Edward VI','Richard III','Shakespeare viết một vở kịch mang tên vị vua này.','Henry V chỉ huy quân Anh chiến thắng Pháp tại Agincourt.','monarchs');
  fact('Văn hóa Anh cuối trung đại','kho','William Caxton','William Caxton nổi tiếng với việc gì tại Anh?','Đưa máy in kiểu chữ rời vào sử dụng','Xây Tường Hadrian','Soạn Magna Carta','Sáng lập Đông Ấn Công ty','Hoạt động của ông bắt đầu tại Westminster năm 1476.','Caxton thiết lập xưởng in tại Westminster và thúc đẩy việc phổ biến sách in tiếng Anh.','monarchs');

  fact('Nhà Tudor','nhe-nhang','Henry VII','Ai là vị vua đầu tiên của nhà Tudor?','Henry VII','Henry VIII','Edward IV','James I','Ông thắng trận Bosworth năm 1485.','Henry VII lập nên nhà Tudor sau khi đánh bại Richard III.','tudor');
  fact('Nhà Tudor','nhe-nhang','Henry VIII','Vua nào nổi tiếng với việc tách Giáo hội Anh khỏi quyền Giáo hoàng?','Henry VIII','Henry VII','Edward I','Charles II','Nhà vua muốn giải quyết cuộc hôn nhân với Catherine of Aragon.','Henry VIII sử dụng Nghị viện để chuyển quyền tối cao tôn giáo từ Giáo hoàng sang Hoàng gia Anh.','reformation');
  fact('Cải cách tôn giáo Anh','thu-thach','Act of Supremacy','Act of Supremacy năm 1534 tuyên bố ai là người đứng đầu tối cao của Giáo hội Anh?','Nhà vua Anh','Giáo hoàng','Tổng giám mục Canterbury độc lập','Nghị viện Scotland','Đạo luật củng cố cuộc đoạn tuyệt với Rome.','Đạo luật Tối thượng năm 1534 công nhận Henry VIII là người đứng đầu tối cao của Giáo hội Anh.','reformation');
  fact('Cải cách tôn giáo Anh','thu-thach','Giải thể tu viện','Việc giải thể các tu viện dưới Henry VIII dẫn tới điều gì?','Tài sản tu viện chuyển phần lớn về Hoàng gia','Các tu viện nắm thêm quyền lực','Giáo hoàng cai trị trực tiếp Anh','Nghị viện chấm dứt','Nhiều đất đai và của cải được tịch thu.','Từ thập niên 1530, các tu viện bị đóng cửa và tài sản được chuyển cho Hoàng gia rồi bán hoặc cấp lại.','reformation');
  fact('Nhà Tudor','nhe-nhang','Edward VI','Ai kế vị Henry VIII năm 1547?','Edward VI','Mary II','James I','Charles I','Ông là con trai của Henry VIII và Jane Seymour.','Edward VI lên ngôi khi còn nhỏ và thời ông Cải cách Tin Lành được đẩy mạnh.','tudor');
  fact('Nhà Tudor','nhe-nhang','Mary I','Nữ hoàng nào cố gắng khôi phục Công giáo La Mã tại Anh?','Mary I','Elizabeth I','Anne','Victoria','Bà là con của Henry VIII và Catherine of Aragon.','Mary I đưa Anh trở lại quan hệ với Rome trong thời gian trị vì 1553–1558.','tudor');
  fact('Nhà Tudor','nhe-nhang','Elizabeth I','Elizabeth I lên ngôi vào năm nào?','1558','1485','1534','1603','Bà kế vị Mary I.','Elizabeth I trị vì từ năm 1558 đến năm 1603.','tudor');
  fact('Nhà Tudor','nhe-nhang','Hạm đội Armada','Hạm đội Armada của Tây Ban Nha thất bại khi tiến đánh Anh vào năm nào?','1588','1558','1603','1642','Mốc này thuộc cuối triều Elizabeth I.','Hạm đội Tây Ban Nha thất bại năm 1588 do giao chiến, chiến thuật và thời tiết bất lợi.','tudor');
  fact('Văn hóa thời Elizabeth','nhe-nhang','William Shakespeare','Nhà soạn kịch nào viết Hamlet, Macbeth và Romeo and Juliet?','William Shakespeare','Geoffrey Chaucer','Christopher Wren','Samuel Pepys','Ông gắn với nhà hát Globe.','William Shakespeare là nhà viết kịch nổi bật của thời Elizabeth và đầu Stuart.','tudor');
  fact('Nhà Tudor','thu-thach','East India Company','East India Company của Anh được ban đặc quyền vào năm nào?','1600','1588','1603','1707','Mốc này là năm cuối cùng của thế kỷ XVI theo cách đếm lịch sử.','Elizabeth I ban đặc quyền cho East India Company năm 1600.','tudor');

  fact('Nhà Stuart','nhe-nhang','Liên minh vương miện','Sự kiện nào xảy ra khi James VI của Scotland trở thành James I của Anh năm 1603?','Liên minh vương miện Anh và Scotland','Thành lập Vương quốc Liên hiệp bằng một nghị viện','Bãi bỏ chế độ quân chủ','Cách mạng Vinh quang','Hai vương quốc có chung một quân vương nhưng vẫn là hai nhà nước riêng.','Năm 1603, James kế vị Elizabeth I, hợp nhất hai vương miện dưới một người cai trị.','stuart');
  fact('Nhà Stuart','nhe-nhang','Gunpowder Plot','Âm mưu Thuốc súng năm 1605 nhằm tấn công nơi nào?','Tòa nhà Nghị viện','Tháp London duy nhất','Canterbury Cathedral','Lâu đài Windsor','Thuốc nổ được giấu dưới khu vực họp của giới lập pháp.','Nhóm chủ mưu định cho nổ Nghị viện khi nhà vua và các thành viên có mặt.','stuart');
  fact('Nhà Stuart','thu-thach','Petition of Right','Petition of Right năm 1628 phản đối hành vi nào của Charles I?','Đánh thuế không có sự đồng ý của Nghị viện và giam giữ tùy tiện','Cho phụ nữ bầu cử','Bãi bỏ chế độ nô lệ','Thành lập Giáo hội Anh','Văn kiện bảo vệ quyền của thần dân trước quyền lực tùy tiện.','Petition of Right khẳng định giới hạn của nhà vua trong thu thuế, bắt giam và sử dụng quân đội.','parliament');
  fact('Nội chiến Anh','nhe-nhang','Hai phe Nội chiến','Nội chiến Anh chủ yếu diễn ra giữa lực lượng của nhà vua và lực lượng nào?','Nghị viện','Giáo hoàng','Viking','Đế quốc La Mã','Hai phe thường được gọi Cavaliers và Roundheads.','Nội chiến từ năm 1642 đối đầu phe Bảo hoàng với phe Nghị viện.','civilWar');
  fact('Nội chiến Anh','thu-thach','Charles I','Vua Charles I bị xử tử vào năm nào?','1649','1642','1660','1688','Sự kiện diễn ra sau khi phe Nghị viện chiến thắng.','Charles I bị xét xử và hành quyết năm 1649, một biến cố hiếm có trong lịch sử quân chủ Anh.','civilWar');
  fact('Thời Commonwealth','nhe-nhang','Oliver Cromwell','Ai giữ chức Lord Protector trong thời kỳ Commonwealth?','Oliver Cromwell','Charles II','William III','James II','Ông từng chỉ huy New Model Army.','Oliver Cromwell trở thành Lord Protector của Anh, Scotland và Ireland năm 1653.','stuart');
  fact('Phục hồi quân chủ','nhe-nhang','Restoration','Chế độ quân chủ Anh được phục hồi năm 1660 với vị vua nào?','Charles II','Charles I','James I','William I','Ông là con của vị vua bị xử tử năm 1649.','Charles II trở lại ngai vàng năm 1660, mở đầu thời Restoration.','stuart');
  fact('Cách mạng Vinh quang','thu-thach','Cách mạng năm 1688','Cách mạng Vinh quang đã đưa hai người nào lên cùng ngai vàng?','William III và Mary II','Charles I và Henrietta Maria','Henry VIII và Anne Boleyn','James I và Anne','Mary là con của James II, William là chồng bà.','Sau khi James II rời khỏi nước Anh, Nghị viện trao vương miện cho William và Mary.','glorious');
  fact('Hình thành vương quốc Anh','thu-thach','Act of Union 1707','Đạo luật Liên hiệp năm 1707 hợp nhất Anh và Scotland thành quốc gia nào?','Vương quốc Đại Anh','Hợp chúng quốc Hoa Kỳ','Đế quốc La Mã Thần thánh','Cộng hòa Ireland','Tên tiếng Anh là Kingdom of Great Britain.','Đạo luật Liên hiệp tạo một Nghị viện chung và Vương quốc Đại Anh từ năm 1707.','union');

  const normalize = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  if (facts.length !== 50) throw new Error('Phần nước Anh phải có đúng 50 dữ kiện. Hiện có ' + facts.length + '.');
  const questions = [];
  facts.forEach(function (item, index) {
    const number = String(index + 1).padStart(3, '0');
    const source = sources[item.sourceKey];
    [item.prompt, 'Từ gợi ý “' + item.hint + '”, đáp án nào đúng với chủ đề ' + item.topic + '?'].forEach(function (prompt, variant) {
      questions.push({ id: 'history-world-eng-' + number + '-' + (variant + 1), region: 'the-gioi', period: item.period, level: item.level, prompt, options: [item.answer].concat(item.wrongs), answers: [item.answer], hint: item.hint, explanation: item.explanation, sourceLabel: source[0], sourceUrl: source[1], factId: 'england-history-' + number });
    });
  });

  const ids = new Set(bank.questions.map(question => question.id));
  const prompts = new Set(bank.questions.map(question => normalize(question.prompt)));
  questions.forEach(function (question, index) {
    const label = 'Câu nước Anh #' + (index + 1);
    if (!question.id || ids.has(question.id)) throw new Error(label + ': ID thiếu hoặc trùng.');
    if (!question.prompt || prompts.has(normalize(question.prompt))) throw new Error(label + ': câu hỏi thiếu hoặc trùng.');
    if (question.region !== 'the-gioi' || !bank.levelLabels[question.level]) throw new Error(label + ': phân loại không hợp lệ.');
    if (!Array.isArray(question.options) || question.options.length !== 4 || new Set(question.options.map(normalize)).size !== 4) throw new Error(label + ': cần bốn lựa chọn khác nhau.');
    if (!question.options.includes(question.answers[0]) || !question.hint || !question.explanation || !/^https:\/\//.test(question.sourceUrl)) throw new Error(label + ': dữ liệu học tập không hợp lệ.');
    ids.add(question.id); prompts.add(normalize(question.prompt));
  });
  if (questions.length !== 100) throw new Error('Phần lịch sử nước Anh phải có đúng 100 câu.');
  const merged = bank.questions.concat(questions).map(question => Object.freeze(Object.assign({}, question)));
  window.IMathHistoryRiddleBank = Object.freeze({ version: '1.5.0', questions: Object.freeze(merged), regionLabels: bank.regionLabels, levelLabels: bank.levelLabels });
}());
