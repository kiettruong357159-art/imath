(function () {
  'use strict';

  /*
   * 500 câu mở rộng cho chủ đề Tiếng Việt & văn học dân gian.
   * Mỗi nhóm có 50 dữ kiện, mỗi dữ kiện sinh hai cách hỏi khác nhau.
   */
  const questions = [];
  let nextId = 1;
  const makeId = () => 'tv-extra-' + String(nextId++).padStart(3, '0');
  const levelFor = (index) => index < 20 ? 'nhe-nhang' : index < 40 ? 'thu-thach' : 'kho';
  const rows = (source) => source.trim().split('\n').map((line) => line.split('|').map((part) => part.trim()));
  const unique = (items) => Array.from(new Set(items));
  const rotated = (items, index, count) => {
    const picked = [];
    for (let step = 1; picked.length < count && step <= items.length * 2; step += 1) {
      const value = items[(index + step * 7) % items.length];
      if (value && !picked.includes(value)) picked.push(value);
    }
    return picked;
  };
  const choice = (level, prompt, answer, options, hint, explanation) => {
    const cleanOptions = unique([answer].concat(options)).slice(0, 4);
    questions.push({ id: makeId(), topic: 'tieng-viet', level, type: 'choice', prompt, answers: [answer], options: cleanOptions, hint, explanation });
  };
  const fill = (level, prompt, answer, hint, explanation) => {
    questions.push({ id: makeId(), topic: 'tieng-viet', level, type: 'fill', prompt, answers: [answer], hint, explanation });
  };

  // 100 câu về từ đồng nghĩa và trái nghĩa.
  const lexical = rows(`
chăm chỉ|siêng năng|lười biếng
dũng cảm|can đảm|nhút nhát
thật thà|trung thực|gian dối
đoàn kết|gắn bó|chia rẽ
vui vẻ|hớn hở|buồn bã
nhanh|mau|chậm
rộng|thênh thang|chật hẹp
cao|cao vút|thấp
yên tĩnh|im ắng|ồn ào
hiền lành|hiền hậu|dữ dằn
khiêm tốn|nhún nhường|kiêu căng
cẩn thận|thận trọng|cẩu thả
tiết kiệm|dành dụm|hoang phí
thông minh|sáng dạ|chậm hiểu
sạch sẽ|tinh tươm|bẩn thỉu
gọn gàng|ngăn nắp|bừa bộn
ấm áp|ấm cúng|lạnh lẽo
đông đúc|tấp nập|vắng vẻ
mạnh mẽ|khỏe khoắn|yếu ớt
chăm chú|tập trung|lơ đãng
lạc quan|yêu đời|bi quan
hòa thuận|êm ấm|bất hòa
nhanh nhẹn|hoạt bát|chậm chạp
rực rỡ|lộng lẫy|ảm đạm
bao la|mênh mông|chật chội
giản dị|mộc mạc|cầu kì
kiên trì|bền bỉ|nản chí
tôn trọng|kính trọng|coi thường
yêu thương|thương mến|ghét bỏ
bảo vệ|giữ gìn|phá hoại
giúp đỡ|hỗ trợ|cản trở
xây dựng|kiến tạo|phá hủy
bắt đầu|khởi đầu|kết thúc
thắng lợi|chiến thắng|thất bại
đầy đủ|trọn vẹn|thiếu thốn
chính xác|đúng đắn|sai lệch
mềm mại|mềm dẻo|cứng cáp
trong suốt|trong veo|đục ngầu
thơm ngát|thơm lừng|hôi hám
ngọt ngào|ngọt dịu|đắng chát
vững chắc|kiên cố|lỏng lẻo
an toàn|yên ổn|nguy hiểm
quen thuộc|thân quen|xa lạ
rộng lượng|hào phóng|ích kỉ
lễ phép|lễ độ|vô lễ
công bằng|công tâm|thiên vị
bình tĩnh|điềm tĩnh|hoảng hốt
tự tin|tin vào bản thân|rụt rè
hợp tác|phối hợp|chống đối
chân thành|thành thật|giả dối`);
  const synonyms = lexical.map((item) => item[1]);
  const antonyms = lexical.map((item) => item[2]);
  lexical.forEach(([word, synonym, antonym], index) => {
    const level = levelFor(index);
    choice(level, 'Trong vốn từ tiếng Việt, từ nào gần nghĩa nhất với “' + word + '”?', synonym, [antonym].concat(rotated(synonyms, index, 2)), 'Hãy tìm từ có ý nghĩa gần giống từ đã cho.', '“' + synonym + '” là từ gần nghĩa với “' + word + '”.');
    choice(level, 'Từ nào trái nghĩa rõ nhất với “' + word + '”?', antonym, [synonym].concat(rotated(antonyms, index, 2)), 'Hãy tìm từ thể hiện ý nghĩa đối lập.', '“' + antonym + '” thể hiện ý nghĩa đối lập với “' + word + '”.');
  });

  // 100 câu chính tả: nhận diện cách viết và vận dụng theo nghĩa.
  const spelling = rows(`
sạch sẽ|xạch sẽ|không bẩn và được giữ gìn gọn gàng
sắp xếp|xắp xếp|đặt mọi thứ theo một thứ tự hợp lí
xuất sắc|suất sắc|đạt kết quả nổi bật, rất tốt
chăm sóc|chăm xóc|quan tâm và giúp một người hoặc vật khỏe mạnh
sản xuất|xản xuất|làm ra sản phẩm để sử dụng
chia sẻ|chia xẻ|cùng người khác san sẻ niềm vui hoặc khó khăn
sửa chữa|sữa chữa|làm cho đồ vật hỏng dùng tốt trở lại
suy nghĩ|xuy nghĩ|dùng trí óc để xem xét một vấn đề
xinh xắn|sinh sắn|có vẻ ngoài nhỏ nhắn và đáng yêu
sum suê|xum xuê|cây cối có nhiều cành lá xanh tốt
rực rỡ|rực rở|có màu sắc hoặc ánh sáng nổi bật
sẵn sàng|sẳn sàng|đã chuẩn bị để có thể bắt đầu ngay
giản dị|giản gị|đơn giản, không cầu kì
dũng cảm|dũng cãm|không sợ nguy hiểm khi làm điều đúng
kiên nhẫn|kiên nhẩn|bình tĩnh chờ đợi và bền bỉ thực hiện
nghỉ ngơi|nghĩ ngơi|tạm dừng công việc để hồi phục sức lực
ngẫm nghĩ|ngẩm nghĩ|suy xét chậm rãi và kĩ càng
nghề nghiệp|ngề nghiệp|công việc chuyên môn của một người
nghiêng ngả|nghiên ngả|chao qua chao lại, không đứng thẳng
ghế gỗ|gế gỗ|đồ dùng để ngồi được làm bằng gỗ
ghi nhớ|gi nhớ|giữ một điều trong trí nhớ
con nghé|con ngé|trâu còn nhỏ
nghe ngóng|nge ngóng|chú ý tìm hiểu tin tức xung quanh
khúc khuỷu|khúc khủy|có nhiều đoạn cong gấp, khó đi
ngoằn ngoèo|ngoằn nghèo|uốn lượn qua nhiều hướng
loằng ngoằng|loằn ngoằn|dài, rối và uốn qua uốn lại
khuya khoắt|khuya khắt|rất khuya, vào lúc đêm đã muộn
khỏe khoắn|khỏe khoắng|trông khỏe mạnh và nhanh nhẹn
khoảnh khắc|khoảng khắc|một khoảng thời gian rất ngắn
chênh vênh|chên vênh|ở vị trí cao và không vững
bâng khuâng|bâng khuân|có cảm xúc nhẹ nhàng, khó gọi thành tên
lâng lâng|lân lân|cảm giác nhẹ nhõm hoặc vui sướng khó tả
ngăn nắp|ngăng nắp|được sắp đặt gọn và có thứ tự
thẳng thắn|thẳng thắng|nói rõ ràng, chân thật, không quanh co
lấp lánh|lắp lánh|phát ra những điểm sáng nhỏ liên tiếp
long lanh|lông lanh|có ánh sáng trong và đẹp
trong trẻo|chong trẻo|rất trong, nghe hoặc nhìn đều dễ chịu
chải chuốt|trải chuốt|sửa soạn vẻ ngoài cẩn thận, gọn đẹp
che chở|tre trở|bảo vệ để người khác tránh nguy hiểm
trân trọng|chân trọng|quý mến và coi trọng
trải nghiệm|trãi nghiệm|tự mình tham gia để có hiểu biết thực tế
bền bỉ|bền bĩ|kiên trì trong một thời gian dài
vất vả|vất vã|phải bỏ nhiều công sức và chịu khó khăn
mãnh liệt|mảnh liệt|rất mạnh mẽ về mức độ hoặc cảm xúc
mải miết|mãi miết|chăm chú làm liên tục, hầu như không ngừng
giành chiến thắng|dành chiến thắng|cố gắng để đạt phần thắng về mình
dành dụm|giành dụm|để riêng từng chút nhằm sử dụng sau này
để dành|để giành|giữ lại một phần để dùng vào lúc khác
tranh giành|tranh dành|cố lấy một thứ về phía mình
hướng dẫn|hướng dẩn|chỉ cho người khác cách thực hiện`);
  spelling.forEach(([correct, wrong, meaning], index) => {
    const level = levelFor(index);
    choice(level, 'Trong hai cách viết “' + correct + '” và “' + wrong + '”, cách nào đúng chính tả?', correct, [wrong], 'Đọc chậm từng tiếng và chú ý âm đầu, vần hoặc dấu thanh.', 'Cách viết đúng là “' + correct + '”.');
    choice(level, 'Từ ngữ nào viết đúng để chỉ “' + meaning + '”?', correct, [wrong], 'Đối chiếu nghĩa đã cho với cách viết đúng của từ.', '“' + correct + '” vừa đúng chính tả vừa phù hợp với nghĩa đã nêu.');
  });

  // 100 câu thành ngữ, tục ngữ, ca dao: hoàn thành câu và hiểu thông điệp.
  const proverbs = rows(`
Lửa thử vàng, gian nan thử|sức|Khó khăn giúp bộc lộ ý chí và năng lực của con người.
Chân cứng đá|mềm|Lòng quyết tâm giúp con người vượt qua trở ngại.
Nước chảy đá|mòn|Kiên trì lâu dài có thể tạo nên thay đổi lớn.
Có công mài sắt, có ngày nên|kim|Bền bỉ rèn luyện thì cuối cùng sẽ thành công.
Kiến tha lâu đầy|tổ|Góp nhặt từng chút một rồi cũng tạo nên kết quả lớn.
Ăn quả nhớ kẻ trồng|cây|Khi hưởng thành quả phải biết ơn người tạo ra nó.
Uống nước nhớ|nguồn|Mỗi người cần biết ơn cội nguồn và người đã giúp mình.
Một con sâu làm rầu nồi|canh|Một cá nhân xấu có thể ảnh hưởng đến cả tập thể.
Thuốc đắng dã tật, sự thật mất|lòng|Điều đúng đôi khi khó nghe nhưng có ích.
Cái khó ló cái|khôn|Hoàn cảnh khó khăn có thể thúc đẩy con người nghĩ ra cách giải quyết.
Đi hỏi già, về nhà hỏi|trẻ|Cần biết lắng nghe kinh nghiệm và cả lời nói chân thật.
Một giọt máu đào hơn ao nước|lã|Tình cảm ruột thịt rất đáng quý.
Giấy rách phải giữ lấy|lề|Dù khó khăn vẫn cần giữ phẩm chất và nền nếp tốt.
Đói cho sạch, rách cho|thơm|Dù thiếu thốn vẫn phải sống trong sạch, ngay thẳng.
Ở bầu thì tròn, ở ống thì|dài|Môi trường sống có ảnh hưởng đến con người.
Gần mực thì đen, gần đèn thì|sáng|Gần người tốt sẽ học điều tốt, gần điều xấu dễ bị ảnh hưởng xấu.
Đi một ngày đàng, học một sàng|khôn|Đi nhiều và trải nghiệm giúp mở rộng hiểu biết.
Học ăn, học nói, học gói, học|mở|Con người cần học cả kiến thức lẫn cách ứng xử.
Học thầy không tày học|bạn|Ngoài thầy cô, bạn bè cũng có thể giúp ta học hỏi.
Không thầy đố mày làm|nên|Câu nói đề cao vai trò hướng dẫn của người thầy.
Lời chào cao hơn mâm|cỗ|Sự lễ phép và lời chào hỏi rất đáng quý.
Lời nói chẳng mất tiền mua, lựa lời mà nói cho vừa lòng|nhau|Nên lựa lời lịch sự để tôn trọng người nghe.
Một điều nhịn, chín điều|lành|Biết nhường nhịn giúp tránh nhiều mâu thuẫn.
Bán anh em xa, mua láng giềng|gần|Cần xây dựng tình cảm tốt với những người sống gần mình.
Chị ngã em|nâng|Anh chị em cần yêu thương và giúp đỡ nhau.
Lá lành đùm lá|rách|Người có điều kiện nên giúp người đang khó khăn.
Thương người như thể thương|thân|Hãy biết yêu thương người khác như chính mình.
Một cây làm chẳng nên non, ba cây chụm lại nên hòn núi|cao|Đoàn kết tạo nên sức mạnh.
Bầu ơi thương lấy bí cùng, tuy rằng khác giống nhưng chung một|giàn|Những người cùng cộng đồng nên yêu thương nhau.
Nhiễu điều phủ lấy giá gương, người trong một nước phải thương nhau|cùng|Đồng bào cần đoàn kết và đùm bọc nhau.
Tấc đất tấc|vàng|Đất đai quý giá và cần được sử dụng tốt.
Nhất nước, nhì phân, tam cần, tứ|giống|Nghề trồng lúa cần nước, phân bón, công chăm sóc và giống tốt.
Chuồn chuồn bay thấp thì mưa, bay cao thì nắng, bay vừa thì|râm|Dân gian quan sát chuồn chuồn để dự đoán thời tiết.
Ráng mỡ gà, có nhà thì|giữ|Khi trời có ráng màu đặc biệt cần đề phòng thời tiết xấu.
Mau sao thì nắng, vắng sao thì|mưa|Dân gian quan sát bầu trời đêm để đoán thời tiết.
Đêm tháng năm chưa nằm đã sáng, ngày tháng mười chưa cười đã|tối|Độ dài ngày và đêm thay đổi theo mùa.
Cơn đằng đông vừa trông vừa chạy, cơn đằng nam vừa làm vừa|chơi|Mây giông từ các hướng khác nhau gợi mức độ khẩn trương khác nhau.
Trăng quầng thì hạn, trăng tán thì|mưa|Dân gian dựa vào quầng sáng quanh trăng để đoán thời tiết.
Quạ tắm thì ráo, sáo tắm thì|mưa|Hoạt động của một số loài chim được dùng làm dấu hiệu thời tiết.
Tháng bảy kiến bò, chỉ lo lại|lụt|Kiến di chuyển nhiều có thể báo hiệu mưa lớn hoặc ngập lụt.
Ăn trông nồi, ngồi trông|hướng|Khi ăn ở và giao tiếp cần biết ý tứ.
Liệu cơm gắp|mắm|Nên làm việc và chi tiêu phù hợp điều kiện của mình.
Tích tiểu thành|đại|Nhiều điều nhỏ góp lại có thể thành kết quả lớn.
Góp gió thành|bão|Sức nhỏ hợp lại sẽ tạo nên sức mạnh lớn.
Tre già măng|mọc|Thế hệ sau tiếp nối thế hệ trước.
Có vay có|trả|Mượn của người khác thì phải có trách nhiệm hoàn lại.
Gieo gió gặt|bão|Làm điều xấu sẽ phải nhận hậu quả xấu.
Đầu xuôi đuôi|lọt|Khởi đầu thuận lợi thường giúp công việc tiến triển tốt.
Thất bại là mẹ thành|công|Biết rút kinh nghiệm từ thất bại sẽ giúp tiến tới thành công.
Thua keo này, bày keo|khác|Chưa thành công thì nên kiên trì thử cách khác.`);
  const proverbMeanings = proverbs.map((item) => item[2]);
  proverbs.forEach(([start, answer, meaning], index) => {
    const level = levelFor(index);
    fill(level, 'Hoàn thành câu dân gian sau: ' + start + ' ...', answer, 'Nhớ lại vế cuối quen thuộc của câu.', start + ' ' + answer + '. ' + meaning);
    choice(level, 'Thông điệp nào phù hợp nhất với câu “' + start + ' ' + answer + '”?', meaning, rotated(proverbMeanings, index, 3), 'Không chỉ nhớ câu chữ, hãy nghĩ xem câu dân gian muốn khuyên điều gì.', meaning);
  });

  // 100 câu về truyện dân gian và truyện ngụ ngôn quen thuộc.
  const folklore = rows(`
Thánh Gióng|Cậu bé vươn vai thành tráng sĩ, cưỡi ngựa sắt đánh giặc.|Lòng yêu nước và ý chí bảo vệ quê hương rất đáng quý.
Thánh Gióng|Khi roi sắt gãy, người anh hùng nhổ tre bên đường làm vũ khí.|Con người có thể ứng biến và kiên cường trong lúc khó khăn.
Sơn Tinh, Thủy Tinh|Vua Hùng yêu cầu voi chín ngà, gà chín cựa, ngựa chín hồng mao.|Muốn đạt mục tiêu phải chuẩn bị nhanh chóng và đầy đủ.
Sơn Tinh, Thủy Tinh|Hằng năm, Thủy Tinh lại dâng nước đánh Sơn Tinh.|Nhân dân luôn bền bỉ đối mặt với thiên tai lũ lụt.
Bánh chưng, bánh giầy|Lang Liêu dùng gạo nếp làm lễ vật dâng vua cha.|Cần trân trọng nghề nông và sản vật do lao động làm ra.
Bánh chưng, bánh giầy|Bánh giầy hình tròn tượng trưng trời, bánh chưng hình vuông tượng trưng đất.|Món ăn truyền thống chứa đựng cách người xưa hình dung về trời đất.
Sự tích Hồ Gươm|Rùa Vàng nổi lên nhận lại thanh gươm sau khi đất nước yên bình.|Sức mạnh được dùng để bảo vệ đất nước, không phải vì lợi ích riêng.
Sự tích Hồ Gươm|Lê Lợi nhận được gươm báu để lãnh đạo nghĩa quân đánh giặc.|Tinh thần đoàn kết giúp nhân dân bảo vệ độc lập.
Cây khế|Chim lớn ăn khế rồi hứa trả vàng cho người em.|Người hiền lành, biết đủ thường nhận được điều tốt đẹp.
Cây khế|Người anh mang túi quá lớn vì muốn lấy thật nhiều vàng.|Tham lam quá mức có thể dẫn đến hậu quả xấu.
Tấm Cám|Bụt nhiều lần hiện lên giúp cô gái hiền lành vượt khó khăn.|Niềm tin và lòng tốt giúp con người có thêm sức mạnh.
Tấm Cám|Nhà vua mở hội thử chiếc giày đánh rơi để tìm người vừa chân.|Chi tiết chiếc giày giúp người tốt được nhận ra.
Thạch Sanh|Chàng trai nghèo dũng cảm chiến đấu với chằn tinh.|Lòng dũng cảm được thể hiện qua hành động bảo vệ mọi người.
Thạch Sanh|Tiếng đàn của chàng giúp giải oan và khiến quân giặc lui binh.|Điều thiện và chính nghĩa có sức cảm hóa mạnh mẽ.
Cây tre trăm đốt|Câu “Khắc nhập, khắc xuất” giúp anh nông dân ghép và tháo các đốt tre.|Trí thông minh có thể giúp người thật thà chống lại sự lừa dối.
Sọ Dừa|Chàng có hình dáng khác thường nhưng chăm chỉ, thông minh và thổi sáo hay.|Không nên đánh giá con người chỉ qua vẻ ngoài.
Em bé thông minh|Cậu bé hỏi lại quan quân vì sao trâu đực của làng không thể đẻ con.|Có thể dùng câu hỏi hợp lí để chỉ ra một yêu cầu vô lí.
Em bé thông minh|Cậu bé dùng con kiến kéo sợi chỉ xuyên qua đường xoắn của vỏ ốc.|Quan sát đặc điểm sự vật giúp tìm ra cách giải sáng tạo.
Cóc kiện Trời|Cóc dẫn các con vật lên thiên đình vì trần gian hạn hán.|Đoàn kết và dũng cảm giúp tập thể đòi hỏi điều chính đáng.
Cóc kiện Trời|Sau cuộc đối đầu, Trời hứa nghe tiếng cóc để làm mưa.|Người nhỏ bé vẫn có tiếng nói khi kiên trì vì cộng đồng.
Sự tích dưa hấu|Mai An Tiêm gây dựng cuộc sống mới từ những hạt giống chim mang đến.|Tự lực và lao động giúp con người vượt qua nghịch cảnh.
Sự tích trầu cau|Tình cảm của hai anh em và người vợ hóa thành đá, cây cau và dây trầu.|Tình nghĩa gia đình cần được gìn giữ bằng sự thấu hiểu.
Con Rồng cháu Tiên|Âu Cơ sinh ra một bọc trăm trứng nở thành một trăm người con.|Truyện giải thích nguồn gốc chung và tình đồng bào của người Việt.
Con Rồng cháu Tiên|Năm mươi người con theo cha xuống biển, năm mươi người theo mẹ lên núi.|Dù sống ở nhiều miền, mọi người vẫn cùng chung cội nguồn.
Chử Đồng Tử|Chàng nghèo chỉ có một chiếc khố và dành nó để mai táng cha.|Tình hiếu thảo được đặt cao hơn tài sản vật chất.
Chử Đồng Tử|Chử Đồng Tử và công chúa Tiên Dung gặp nhau bên bãi sông.|Con người cần biết vượt qua định kiến để trân trọng tình cảm chân thành.
Sự tích cây vú sữa|Cậu bé bỏ nhà đi, khi trở về chỉ còn cây lạ cho dòng nhựa ngọt như sữa mẹ.|Cần yêu thương cha mẹ khi còn có thể ở bên nhau.
Cậu bé Tích Chu|Tích Chu vượt đường xa lấy nước suối Tiên để cứu bà.|Biết nhận lỗi và hành động sửa sai là điều đáng quý.
Nàng tiên Ốc|Bà lão giữ con ốc đẹp, rồi một cô gái bước ra giúp bà việc nhà.|Lòng nhân hậu có thể mang đến sự gắn bó và niềm vui.
Ba lưỡi rìu|Người tiều phu chỉ nhận chiếc rìu sắt thật sự thuộc về mình.|Trung thực quý hơn vàng bạc không thuộc về mình.
Trí khôn của ta đây|Người nông dân dùng mưu trói hổ vào cây rồi cho hổ thấy “trí khôn”.|Bình tĩnh và thông minh giúp con người đối phó nguy hiểm.
Thầy bói xem voi|Mỗi thầy chỉ sờ một bộ phận của con voi rồi cho rằng mình biết toàn bộ.|Không nên kết luận toàn bộ sự việc khi chỉ biết một phần.
Đeo nhạc cho mèo|Họ nhà chuột nghĩ ra kế đeo chuông cho mèo nhưng không ai dám thực hiện.|Một kế hoạch chỉ có giá trị khi có thể thực hiện được.
Chân, Tay, Tai, Mắt, Miệng|Các bộ phận ngừng làm việc vì tưởng Miệng chỉ hưởng thụ.|Mỗi thành viên đều có vai trò và cần hợp tác với nhau.
Truyện bó đũa|Người cha bẻ từng chiếc đũa dễ dàng nhưng không bẻ được cả bó.|Đoàn kết giúp tập thể trở nên vững mạnh.
Hai con dê qua cầu|Hai con dê không chịu nhường nhau trên chiếc cầu hẹp nên cùng rơi xuống nước.|Cố chấp và tranh giành có thể khiến cả hai cùng thiệt.
Rùa và Thỏ|Thỏ chạy nhanh nhưng chủ quan ngủ quên, còn rùa chậm rãi đi tới đích.|Kiên trì và không chủ quan quan trọng hơn lợi thế ban đầu.
Cáo và Quạ|Cáo dùng lời nịnh để quạ há miệng, làm rơi miếng mồi.|Cần tỉnh táo trước lời nịnh nọt có mục đích.
Ếch ngồi đáy giếng|Con ếch nhìn bầu trời qua miệng giếng và tưởng trời chỉ bé bằng chiếc vung.|Hiểu biết hạn hẹp dễ khiến con người kiêu ngạo.
Đẽo cày giữa đường|Người thợ nghe mọi lời góp ý rồi sửa chiếc cày mãi đến mức không dùng được.|Cần biết suy xét, không nên làm theo mọi ý kiến một cách máy móc.
Treo biển|Chủ cửa hàng bỏ dần từng chữ trên biển vì nghe lời người qua đường.|Góp ý chỉ hữu ích khi người nghe biết chọn lọc hợp lí.
Lợn cưới, áo mới|Hai người gặp nhau chỉ chăm chăm khoe đồ mới của mình.|Thói khoe khoang dễ tạo nên lời nói và hành động buồn cười.
Tam đại con gà|Người thầy không biết chữ nhưng cố giấu dốt và giải thích quanh co.|Không biết thì nên học hỏi, không nên giấu dốt.
Cậu bé chăn cừu|Cậu bé nhiều lần kêu có sói để trêu mọi người rồi không ai tin khi sói đến thật.|Nói dối nhiều lần sẽ làm mất lòng tin.
Kiến và Ve sầu|Kiến chăm chỉ tích trữ thức ăn còn ve sầu chỉ ca hát trong mùa hè.|Cần chăm chỉ và chuẩn bị cho những lúc khó khăn.
Quạ và Công|Quạ muốn có bộ lông đẹp nên dùng lông của loài chim khác gắn lên mình.|Không nên chạy theo vẻ ngoài bằng cách giả tạo.
Sự tích hoa mào gà|Cô gà tốt bụng tặng chiếc mào đỏ đẹp cho cây nhỏ đang buồn.|Biết sẻ chia có thể đem lại niềm vui cho người khác.
Sự tích chú Cuội cung trăng|Cuội níu rễ cây đa bay lên trời rồi ở lại trên cung trăng.|Hình ảnh chú Cuội giải thích theo trí tưởng tượng dân gian về bóng trên mặt trăng.
Sự tích cây nêu ngày Tết|Con người dựng cây nêu làm dấu để xua điều xấu và bảo vệ nơi ở.|Phong tục ngày Tết gửi gắm mong ước bình an.
Sự tích con muỗi|Người chồng dùng máu mình cứu vợ nhưng người vợ không giữ trọn lời thề.|Truyện dân gian nhắc con người trân trọng ân nghĩa và lời hứa.`);
  const storyTitles = folklore.map((item) => item[0]);
  const storyLessons = folklore.map((item) => item[2]);
  folklore.forEach(([title, clue, lesson], index) => {
    const level = levelFor(index);
    choice(level, 'Chi tiết “' + clue + '” gợi đến truyện nào?', title, rotated(storyTitles, index, 3), 'Nhớ lại nhân vật và sự việc nổi bật trong các truyện đã đọc.', 'Chi tiết này thuộc truyện “' + title + '”.');
    choice(level, 'Bài học nào phù hợp nhất với chi tiết “' + clue + '” trong truyện “' + title + '”?', lesson, rotated(storyLessons, index, 3), 'Liên hệ hành động của nhân vật với điều nên làm hoặc nên tránh.', lesson);
  });

  // 100 câu nhận biết danh từ, động từ, tính từ và đại từ trong ngữ cảnh.
  const grammar = rows(`
Lan đọc sách trong thư viện.|Lan|Danh từ|“Lan” là tên riêng dùng để gọi một người.
Chú mèo nằm bên cửa sổ.|mèo|Danh từ|“Mèo” gọi tên một con vật.
Em bé cười rất tươi.|cười|Động từ|“Cười” chỉ hoạt động của con người.
Bầu trời hôm nay xanh biếc.|xanh biếc|Tính từ|“Xanh biếc” nêu đặc điểm màu sắc của bầu trời.
Chúng em cùng trồng cây.|Chúng em|Đại từ|“Chúng em” dùng để xưng gọi thay cho một nhóm người.
Mẹ nấu một nồi canh ngon.|nấu|Động từ|“Nấu” chỉ hoạt động làm chín thức ăn.
Con đường làng rất yên tĩnh.|yên tĩnh|Tính từ|“Yên tĩnh” nêu đặc điểm ít tiếng động.
Đàn chim bay về phương nam.|chim|Danh từ|“Chim” gọi tên một loài vật.
Tôi sẽ giúp bạn hoàn thành công việc.|Tôi|Đại từ|“Tôi” dùng để người nói tự xưng.
Những bông hoa tỏa hương thơm ngát.|thơm ngát|Tính từ|“Thơm ngát” nêu đặc điểm về mùi hương.
Bố sửa chiếc xe đạp cũ.|sửa|Động từ|“Sửa” chỉ hoạt động làm cho đồ vật dùng tốt trở lại.
Hà Nội là thủ đô của Việt Nam.|Hà Nội|Danh từ|“Hà Nội” là tên riêng của một địa danh.
Bạn ấy luôn giữ lời hứa.|Bạn ấy|Đại từ|“Bạn ấy” dùng để chỉ người được nhắc tới.
Dòng sông uốn lượn qua cánh đồng.|uốn lượn|Động từ|“Uốn lượn” chỉ trạng thái chuyển động theo đường cong.
Chiếc chăn này rất mềm mại.|mềm mại|Tính từ|“Mềm mại” nêu đặc điểm khi chạm vào chiếc chăn.
Các bác nông dân đang gặt lúa.|nông dân|Danh từ|“Nông dân” gọi tên người làm nghề nông.
Em viết từng dòng chữ ngay ngắn.|viết|Động từ|“Viết” chỉ hoạt động tạo ra chữ.
Ngôi nhà nhỏ đứng bên sườn đồi.|nhỏ|Tính từ|“Nhỏ” nêu đặc điểm về kích thước.
Họ cùng nhau bảo vệ khu rừng.|Họ|Đại từ|“Họ” thay cho tên của nhiều người.
Tiếng trống trường vang lên rộn rã.|tiếng trống|Danh từ|“Tiếng trống” gọi tên một âm thanh.
Người thợ xây đang trộn vữa.|trộn|Động từ|“Trộn” chỉ hoạt động làm các vật hòa lẫn vào nhau.
Mặt hồ phẳng lặng như tấm gương.|phẳng lặng|Tính từ|“Phẳng lặng” nêu đặc điểm yên, không gợn sóng.
Mai và tôi cùng trực nhật.|tôi|Đại từ|“Tôi” là từ người nói dùng để tự xưng.
Đội cứu hộ nhanh chóng tới hiện trường.|đội cứu hộ|Danh từ|“Đội cứu hộ” gọi tên một nhóm người làm nhiệm vụ cứu giúp.
Gió thổi mạnh làm cành cây lay động.|thổi|Động từ|“Thổi” chỉ hoạt động chuyển động của gió.
Quả cam có vị ngọt dịu.|ngọt dịu|Tính từ|“Ngọt dịu” nêu đặc điểm về vị.
Ai đã đặt quyển sách lên bàn?|Ai|Đại từ|“Ai” là đại từ dùng để hỏi về người.
Những đám mây trắng trôi chậm.|mây|Danh từ|“Mây” gọi tên sự vật xuất hiện trên bầu trời.
Các bạn chăm chú lắng nghe cô giáo.|lắng nghe|Động từ|“Lắng nghe” chỉ hoạt động chú ý nghe.
Chiếc cầu mới rất vững chắc.|vững chắc|Tính từ|“Vững chắc” nêu đặc điểm bền và khó lay chuyển.
Chúng tôi tham quan bảo tàng vào sáng nay.|Chúng tôi|Đại từ|“Chúng tôi” dùng để người nói chỉ nhóm có mình.
Người bác sĩ khám bệnh cho em nhỏ.|bác sĩ|Danh từ|“Bác sĩ” gọi tên một nghề nghiệp.
Bầy ong chăm chỉ hút mật.|hút|Động từ|“Hút” chỉ hoạt động lấy mật của ong.
Vườn rau sau mưa xanh mướt.|xanh mướt|Tính từ|“Xanh mướt” nêu màu sắc tươi tốt của cây cối.
Cậu có muốn chơi cùng chúng mình không?|Cậu|Đại từ|“Cậu” là đại từ dùng để gọi người đang trò chuyện.
Chiếc đồng hồ báo thức reo vang.|đồng hồ|Danh từ|“Đồng hồ” gọi tên một đồ vật dùng để xem giờ.
Các em xếp ghế ngay ngắn.|xếp|Động từ|“Xếp” chỉ hoạt động đặt đồ vật theo thứ tự.
Buổi sớm trên núi se lạnh.|se lạnh|Tính từ|“Se lạnh” nêu đặc điểm thời tiết hơi lạnh.
Nó đang tìm đường về tổ.|Nó|Đại từ|“Nó” thay cho tên một con vật hoặc sự vật đã nhắc tới.
Ngọn hải đăng soi sáng mặt biển.|hải đăng|Danh từ|“Hải đăng” gọi tên công trình phát sáng chỉ đường cho tàu thuyền.
Đoàn tàu từ từ rời ga.|rời|Động từ|“Rời” chỉ hoạt động đi khỏi một nơi.
Giọng kể của bà thật ấm áp.|ấm áp|Tính từ|“Ấm áp” nêu cảm giác dễ chịu do giọng kể mang lại.
Mình sẽ giữ bí mật cho bạn.|Mình|Đại từ|“Mình” là đại từ người nói dùng để tự xưng.
Các chiến sĩ canh giữ biên cương.|chiến sĩ|Danh từ|“Chiến sĩ” gọi tên người làm nhiệm vụ bảo vệ Tổ quốc.
Nước suối chảy róc rách qua khe đá.|chảy|Động từ|“Chảy” chỉ hoạt động di chuyển của chất lỏng.
Bức tranh có màu sắc hài hòa.|hài hòa|Tính từ|“Hài hòa” nêu đặc điểm cân đối, dễ chịu.
Đó là món quà của cả lớp.|Đó|Đại từ|“Đó” là đại từ dùng để chỉ sự vật ở vị trí được xác định.
Người nghệ nhân nặn một con tò he.|nghệ nhân|Danh từ|“Nghệ nhân” gọi tên người có kĩ năng cao trong nghề thủ công hoặc nghệ thuật.
Bé nâng niu chú chim bị thương.|nâng niu|Động từ|“Nâng niu” chỉ hoạt động giữ gìn bằng sự yêu quý.
Ánh trăng đêm rằm sáng vằng vặc.|sáng vằng vặc|Tính từ|“Sáng vằng vặc” nêu đặc điểm ánh sáng rất rõ và trong.`);
  const grammarExplanations = grammar.map((item) => item[3]);
  grammar.forEach(([sentence, target, kind, explanation], index) => {
    const level = levelFor(index);
    choice(level, 'Trong câu “' + sentence + '”, từ ngữ “' + target + '” thuộc nhóm nào?', kind, ['Danh từ', 'Động từ', 'Tính từ', 'Đại từ'], 'Xem từ ngữ đó dùng để gọi tên, chỉ hoạt động, nêu đặc điểm hay dùng để xưng gọi.', explanation);
    choice(level, 'Vì sao “' + target + '” được xác định là ' + kind.toLocaleLowerCase('vi-VN') + ' trong câu “' + sentence + '”?', explanation, rotated(grammarExplanations, index, 3), 'Đặt từ ngữ vào đúng ngữ cảnh của câu rồi xét chức năng của nó.', explanation);
  });

  if (questions.length !== 500) throw new Error('Kho Tiếng Việt mở rộng phải có đúng 500 câu, hiện có ' + questions.length + '.');
  const ids = new Set();
  const prompts = new Set();
  questions.forEach((item) => {
    if (ids.has(item.id) || prompts.has(item.prompt)) throw new Error('Kho Tiếng Việt mở rộng có câu trùng: ' + item.id);
    if (!item.answers.length || !item.hint || !item.explanation) throw new Error('Câu mở rộng thiếu dữ liệu: ' + item.id);
    if (item.type === 'choice' && (!item.options.includes(item.answers[0]) || new Set(item.options).size !== item.options.length)) throw new Error('Phương án câu mở rộng chưa hợp lệ: ' + item.id);
    ids.add(item.id);
    prompts.add(item.prompt);
  });

  window.IMathVietnameseExpansion500Questions = Object.freeze(questions.map((item) => Object.freeze(item)));
}());
