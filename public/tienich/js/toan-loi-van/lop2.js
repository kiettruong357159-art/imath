(() => {
  'use strict';
  const repeatedSum=(value,count)=>Array(count).fill(value).join(' + ');
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const pick = arr => arr[Math.floor(Math.random() * arr.length)];
  const formatNum = n => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  const NAMES = ['An', 'Bình', 'Hà', 'Lan', 'Nam', 'Minh', 'Hải', 'Mai', 'Tùng', 'Đức', 'Linh', 'Phong'];
  const CROPS = [
    { item: 'thóc', unit: 'tạ' }, { item: 'ngô', unit: 'yến' },
    { item: 'khoai tây', unit: 'kg' }, { item: 'cà rốt', unit: 'kg' }
  ];
  const LIQUIDS = [
    { item: 'dầu ăn', unit: 'lít' }, { item: 'mật ong', unit: 'lít' },
    { item: 'nước mắm', unit: 'lít' }, { item: 'sữa tươi', unit: 'lít' }
  ];
  window.LOP2_POOLS = {
  kha: [
    () => {
      const pack = random(4, 9), items = pick([2, 5]), total = pack * items;
      return {
        tier: 'kha', tierLabel: '🟡 Mức KHÁ', archetype: 'Ý nghĩa phép nhân (Bảng 2, 5)', domain: '📦 Đóng gói',
        text: `Có <b>${pack} gói kẹo</b>, mỗi gói chứa <b>${items} cái kẹo</b>. Hỏi có tất cả bao nhiêu cái kẹo?`,
        unit: 'cái kẹo', answer: total, answerText: `${total} cái kẹo`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#278505">${items} × ${pack} = ${total} cái</text></svg>`,
        hint1: `Tổng số kẹo = Số kẹo mỗi gói × Số gói.`,
        hint2: `Tính: ${items} × ${pack}.`,
        hint3: `Kết quả = ${total} cái kẹo.`,
        sol1: `<div class="sol-body">Có tất cả số cái kẹo là: ${items} × ${pack} = ${total} (cái kẹo).<div class="sol-final-text">Đáp số: ${total} cái kẹo</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> $${items} \× ${pack} = ${total}$ cái.</div>`
      };
    },
    () => {
      const perGroup = pick([2, 5]), groups = random(4, 9), total = perGroup * groups;
      return {
        tier: 'kha', tierLabel: '🟡 Mức KHÁ', archetype: 'Ý nghĩa phép chia (Bảng 2, 5)', domain: '🎒 Chia nhóm',
        text: `Cô giáo có <b>${total} quyển vở</b> chia đều cho các bạn, mỗi bạn được <b>${perGroup} quyển</b>. Hỏi có bao nhiêu bạn được nhận vở?`,
        unit: 'bạn', answer: groups, answerText: `${groups} bạn`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#0876c0">${total} : ${perGroup} = ${groups} bạn</text></svg>`,
        hint1: `Số bạn được nhận vở = Tổng số vở : Số vở mỗi bạn.`,
        hint2: `Tính: ${total} : ${perGroup}.`,
        hint3: `Kết quả = ${groups} bạn.`,
        sol1: `<div class="sol-body">Số bạn được nhận vở là: ${total} : ${perGroup} = ${groups} (bạn).<div class="sol-final-text">Đáp số: ${groups} bạn</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> $${total} / ${perGroup} = ${groups}$ bạn.</div>`
      };
    },
    () => {
      const orig = random(120, 450), sub = random(50, 110), diff = orig - sub;
      return {
        tier: 'kha', tierLabel: '🟡 Mức KHÁ', archetype: 'Tìm thành phần chưa biết trong phạm vi 1000', domain: '🔢 Tìm số',
        text: `Tìm một số biết rằng lấy số đó <b>trừ đi ${sub}</b> thì được kết quả là <b>${diff}</b>.`,
        unit: '', answer: orig, answerText: `Số đó là ${orig}`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#0876c0">[ ? ] - ${sub} = ${diff} → [ ? ] = ${diff} + ${sub} = ${orig}</text></svg>`,
        hint1: `Muốn tìm số bị trừ, ta lấy hiệu cộng với số trừ.`,
        hint2: `Tính: ${diff} + ${sub}.`,
        hint3: `Kết quả = ${orig}.`,
        sol1: `<div class="sol-body">Số cần tìm là: ${diff} + ${sub} = ${orig}.<div class="sol-final-text">Đáp số: ${orig}</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> $${diff} + ${sub} = ${orig}$.</div>`
      };
    },
    () => {
      const dm = random(3, 8), extraCm = random(12, 35), totalCm = dm * 10 + extraCm;
      return {
        tier: 'kha', tierLabel: '🟡 Mức KHÁ', archetype: 'Đổi đơn vị đo độ dài dm và cm', domain: '📏 Độ dài',
        text: `Một sợi dây dài <b>${dm} dm</b> và <b>${extraCm} cm</b>. Hỏi sợi dây đó dài tất cả bao nhiêu xăng-ti-mét?`,
        unit: 'cm', answer: totalCm, answerText: `${totalCm} cm`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#278505">${dm} dm = ${dm * 10} cm → Tổng = ${dm * 10} + ${extraCm} = ${totalCm} cm</text></svg>`,
        hint1: `Đổi: 1 dm = 10 cm → ${dm} dm = ${dm * 10} cm.`,
        hint2: `Tổng chiều dài = ${dm * 10} cm + ${extraCm} cm.`,
        hint3: `Tính: ${totalCm} cm.`,
        sol1: `<div class="sol-body">Đổi ${dm} dm = ${dm * 10} cm.<br>Chiều dài sợi dây là: ${dm * 10} + ${extraCm} = ${totalCm} (cm).<div class="sol-final-text">Đáp số: ${totalCm} cm</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> $${dm} \× 10 + ${extraCm} = ${totalCm}$ cm.</div>`
      };
    }
  ],
  gioi: [
    () => {
      const liquid = pick(LIQUIDS);
      const diff = random(3, 8) * 2;
      const b2 = random(25, 55), b1 = b2 + diff, transfer = diff / 2;
      return {
        tier: 'gioi', tierLabel: '🟠 Mức GIỎI', archetype: 'Rót dầu giữa 2 thùng để bằng nhau', domain: `🛢️ ${liquid.item}`,
        text: `Thùng 1 có <b>${b1} ${liquid.unit} ${liquid.item}</b>, thùng 2 có <b>${b2} ${liquid.unit}</b>. Hỏi phải rót sang thùng 2 bao nhiêu ${liquid.unit} để 2 thùng bằng nhau?`,
        unit: liquid.unit, answer: transfer, answerText: `${transfer} ${liquid.unit}`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#0876c0">Lệch = ${diff} → Rót: ${diff} : 2 = ${transfer} ${liquid.unit}</text></svg>`,
        hint1: `Thùng 1 hơn thùng 2: ${b1} - ${b2} = ${diff} ${liquid.unit}.`,
        hint2: `Rót 1 nửa số dầu chênh lệch: ${diff} : 2.`,
        hint3: `Tính: ${diff} : 2 = ${transfer} ${liquid.unit}.`,
        sol1: `<div class="sol-body">Thùng 1 hơn thùng 2: ${b1} − ${b2} = ${diff} (${liquid.unit}).<br>Số ${liquid.unit} cần rót là: ${diff} : 2 = ${transfer} (${liquid.unit}).<div class="sol-final-text">Đáp số: ${transfer} ${liquid.unit}</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> ({b1} - ${b2}) / 2 = ${transfer} {liquid.unit}.</div>`
      };
    },
    () => {
      const brother = random(10, 14), sister = brother - random(2, 4) * 2, gap = brother - sister;
      const targetSum = random(12, 18) * 2 + gap, brotherT = (targetSum + gap) / 2;
      return {
        tier: 'gioi', tierLabel: '🟠 Mức GIỎI', archetype: 'Tuổi tác 2 anh em khi tổng đạt mốc mới', domain: '⏳ Tuổi tác',
        text: `Hiện nay anh <b>${brother} tuổi</b> và em <b>${sister} tuổi</b>. Hỏi khi tổng tuổi hai anh em bằng <b>${targetSum} tuổi</b> thì anh bao nhiêu tuổi?`,
        unit: 'tuổi', answer: brotherT, answerText: `${brotherT} tuổi`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="12" y="25" font-size="12">Mỗi năm, tổng tuổi hai anh em tăng thêm 2.</text></svg>`,
        hint1: `Hiệu số tuổi luôn không đổi: ${brother} - ${sister} = ${gap} tuổi.`,
        hint2: `Từ ${brother+sister}, đếm thêm 2 mỗi lần cho đến ${targetSum}; đếm số lần thêm.`,
        hint3: `Có ${brotherT-brother} lần thêm, tức là sau ${brotherT-brother} năm.`,
        sol1: `<div class="sol-body">Hiện nay tổng tuổi là ${brother} + ${sister} = ${brother+sister}.<br>Mỗi năm tổng tuổi tăng thêm 2. Các tổng tiếp theo là ${Array.from({length:brotherT-brother},(_,i)=>brother+sister+2*(i+1)).join(", ")}.<br>Cần ${brotherT-brother} năm; khi đó anh ${brother} + ${brotherT-brother} = ${brotherT} tuổi.<div class="sol-final-text">Đáp số: ${brotherT} tuổi</div></div>`,
        sol2: `<div class="sol-body">Khi đó em ${brotherT-gap} tuổi. Kiểm tra: ${brotherT} + ${brotherT-gap} = ${targetSum}.</div>`
      };
    },
    () => {
      const chickens = random(2, 4), rabbits = random(2, 5), heads = chickens + rabbits, legs = chickens * 2 + rabbits * 4;
      return {
        tier: 'gioi', tierLabel: '🟠 Mức GIỎI', archetype: 'Đếm chân gà và thỏ (Giả thiết tạm bảng 2)', domain: '🐔 Nông trại',
        text: `Trong sân có tất cả <b>${heads} con</b> gồm gà và thỏ. Đếm được <b>${legs} cái chân</b>. Hỏi có bao nhiêu con thỏ?`,
        unit: 'con thỏ', answer: rabbits, answerText: `${rabbits} con thỏ`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#ff7010">${heads} con, ${legs} chân → ${rabbits} thỏ</text></svg>`,
        hint1: `Nếu cả ${heads} con là gà thì có: 2 × ${heads} = ${heads * 2} chân.`,
        hint2: `Số chân thiếu = ${legs} - ${heads * 2}. Mỗi con thỏ hơn gà 2 chân.`,
        hint3: `Số thỏ = (${legs} - ${heads * 2}) : 2 = ${rabbits} con.`,
        sol1: `<div class="sol-body">Nếu tất cả là gà thì có số chân là: 2 × ${heads} = ${heads * 2} (chân).<br>Số chân thiếu là: ${legs} − ${heads * 2} = ${legs - heads * 2} (chân).<br>Số con thỏ là: ${legs - heads * 2} : 2 = ${rabbits} (con).<div class="sol-final-text">Đáp số: ${rabbits} con thỏ</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> ({legs} - 2 \× ${heads}) / 2 = ${rabbits}$ con.</div>`
      };
    },
    () => {
      const d = pick([2, 5]), intervals = random(6, 10), L = d * intervals, trees = intervals + 1;
      return {
        tier: 'gioi', tierLabel: '🟠 Mức GIỎI', archetype: 'Trồng cây 2 đầu đường (Bảng 2, 5)', domain: '🌳 Cây xanh',
        text: `Một đoạn đường dài <b>${L} m</b>, người ta trồng cây cả 2 đầu đường, khoảng cách giữa 2 cây là <b>${d} m</b>. Hỏi trồng được tất cả bao nhiêu cây?`,
        unit: 'cây', answer: trees, answerText: `${trees} cây`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#0876c0">${L} : ${d} = ${intervals} khoảng → ${intervals} + 1 = ${trees} cây</text></svg>`,
        hint1: `Số khoảng cách = ${L} : ${d} = ${intervals} khoảng cách.`,
        hint2: `Trồng cả 2 đầu đường nên: Số cây = Số khoảng cách + 1.`,
        hint3: `Tính: ${intervals} + 1 = ${trees} cây.`,
        sol1: `<div class="sol-body">Số khoảng cách là: ${L} : ${d} = ${intervals} (khoảng cách).<br>Số cây trồng được là: ${intervals} + 1 = ${trees} (cây).<div class="sol-final-text">Đáp số: ${trees} cây</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> $${L} / ${d} + 1 = ${trees}$ cây.</div>`
      };
    },
    () => {
      const orig = random(4, 9), k = pick([2, 5]), m = random(10, 30), res = orig * k + m;
      return {
        tier: 'gioi', tierLabel: '🟠 Mức GIỎI', archetype: 'Nhân với 2 hoặc 5 rồi cộng thêm', domain: '🔢 Tìm số',
        text: `Tìm một số biết rằng lấy số đó <b>nhân với ${k}</b> rồi <b>cộng với ${m}</b> thì được kết quả là <b>${res}</b>.`,
        unit: '', answer: orig, answerText: `Số đó là ${orig}`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#7e42eb">[ ? ] × ${k} + ${m} = ${res} → [ ? ] = (${res} - ${m}) : ${k} = ${orig}</text></svg>`,
        hint1: `Số đó nhân với ${k} có giá trị là: ${res} - ${m} = ${res - m}.`,
        hint2: `Số cần tìm = ${res - m} : ${k}.`,
        hint3: `Tính: ${orig}.`,
        sol1: `<div class="sol-body">Số đó nhân với ${k} là: ${res} − ${m} = ${res - m}.<br>Số cần tìm là: ${res - m} : ${k} = ${orig}.<div class="sol-final-text">Đáp số: ${orig}</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> ({res} - ${m}) / ${k} = ${orig}$.</div>`
      };
    },
    () => {
      const pieces = random(5, 10), timePerCut = pick([2, 5]), totalTime = (pieces - 1) * timePerCut;
      return {
        tier: 'gioi', tierLabel: '🟠 Mức GIỎI', archetype: 'Cắt thanh gỗ thành nhiều đoạn', domain: '🪵 Cắt gỗ',
        text: `Bác thợ mộc cưa một cây gỗ dài thành <b>${pieces} đoạn ngắn</b>. Mỗi lần cưa mất đúng <b>${timePerCut} phút</b>. Hỏi bác cưa xong cây gỗ mất bao nhiêu phút?`,
        unit: 'phút', answer: totalTime, answerText: `${totalTime} phút`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#0876c0">${pieces} đoạn → ${pieces - 1} lần cưa × ${timePerCut}p = ${totalTime} phút</text></svg>`,
        hint1: `Cưa thành ${pieces} đoạn thì chỉ cần cưa: ${pieces} - 1 = ${pieces - 1} lần.`,
        hint2: `Tổng thời gian = Số lần cưa × Thời gian mỗi lần.`,
        hint3: `Tính: ${pieces - 1} × ${timePerCut} = ${totalTime} phút.`,
        sol1: `<div class="sol-body">Số lần cưa là: ${pieces} − 1 = ${pieces - 1} (lần).<br>Thời gian cưa xong cây gỗ là: ${pieces - 1} × ${timePerCut} = ${totalTime} (phút).<div class="sol-final-text">Đáp số: ${totalTime} phút</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> ({pieces} - 1) \× ${timePerCut} = ${totalTime}$ phút.</div>`
      };
    },
    () => {
      const segments = random(4, 8), lenEach = pick([2, 5]) * 10, totalLen = segments * lenEach;
      return {
        tier: 'gioi', tierLabel: '🟠 Mức GIỎI', archetype: 'Độ dài đường gấp khúc gồm các đoạn bằng nhau', domain: '📏 Hình học',
        text: `Một đường gấp khúc gồm <b>${segments} đoạn thẳng bằng nhau</b>, mỗi đoạn dài <b>${lenEach} cm</b>. Tính độ dài đường gấp khúc đó.`,
        unit: 'cm', answer: totalLen, answerText: `${totalLen} cm`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="12" y="25" font-size="12">Cộng độ dài của từng đoạn thẳng.</text></svg>`,
        hint1: `Đường gấp khúc có ${segments} đoạn, mỗi đoạn dài ${lenEach} cm.`,
        hint2: `Cộng ${segments} số đều bằng ${lenEach}.`,
        hint3: `Kết quả = ${totalLen} cm.`,
        sol1: `<div class="sol-body">Độ dài đường gấp khúc là: ${repeatedSum(lenEach,segments)} = ${totalLen} (cm).<div class="sol-final-text">Đáp số: ${totalLen} cm</div></div>`,
        sol2: `<div class="sol-body">Đếm lần lượt từng đoạn và cộng thêm ${lenEach} cm sau mỗi đoạn.</div>`
      };
    },
    () => {
      const ones = random(2, 4), tens = ones * 2, num = tens * 10 + ones;
      return {
        tier: 'gioi', tierLabel: '🟠 Mức GIỎI', archetype: 'Số có chữ số hàng chục gấp 2 lần hàng đơn vị', domain: '🔢 Cấu tạo số',
        text: `Tìm một số có 2 chữ số biết chữ số hàng đơn vị là <b>${ones}</b> và chữ số hàng chục <b>gấp 2 lần</b> chữ số hàng đơn vị.`,
        unit: '', answer: num, answerText: `Số ${num}`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#ff7010">Hàng chục = ${ones} × 2 = ${tens} → Số: ${num}</text></svg>`,
        hint1: `Chữ số hàng chục = ${ones} × 2 = ${tens}.`,
        hint2: `Số cần tìm ghép hàng chục và đơn vị lại.`,
        hint3: `Số cần tìm là ${num}.`,
        sol1: `<div class="sol-body">Chữ số hàng chục là: ${ones} × 2 = ${tens}.<br>Số cần tìm là: ${num}.<div class="sol-final-text">Đáp số: ${num}</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> Hàng chục = {tens} \→ ${num}$.</div>`
      };
    }
  ],
  hsg: [
    () => {
      const ageAn = random(7, 12), ageB = random(7, 12), ageC = random(7, 12);
      const a = ageAn + ageB, b = ageB + ageC, c = ageAn + ageC, sumAll = ageAn + ageB + ageC;
      return {
        tier: 'hsg', tierLabel: '🔴 THI HSG', archetype: 'Tổng ba số đôi một (Cân thăng bằng Lớp 2)', domain: '⚖️ Cân thăng bằng',
        text: `Tổng số tuổi của An và Bình là <b>${a} tuổi</b>, Bình và Cúc là <b>${b} tuổi</b>, An và Cúc là <b>${c} tuổi</b>. Tính tổng số tuổi của cả ba bạn.`,
        unit: 'tuổi', answer: sumAll, answerText: `${sumAll} tuổi`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="12" y="25" font-size="12">An + Bình = ${a}; Bình + Cúc = ${b}; An + Cúc = ${c}</text></svg>`,
        hint1: `Thử tuổi của An; dùng phép trừ để tìm tuổi Bình và Cúc.`,
        hint2: `Đối chiếu tổng tuổi Bình và Cúc với ${b}; chỉ giữ trường hợp khớp cả ba tổng.`,
        hint3: `Tính: ${sumAll} tuổi.`,
        sol1: `<div class="sol-body">Thử các số tuổi của An từ 0 đến ${Math.min(a,c)}. Mỗi lần lấy ${a} trừ tuổi An để tìm Bình, lấy ${c} trừ tuổi An để tìm Cúc.<br>Trường hợp khớp là An ${ageAn}, Bình ${ageB}, Cúc ${ageC}.<br>Kiểm tra: ${ageAn} + ${ageB} = ${a}; ${ageB} + ${ageC} = ${b}; ${ageAn} + ${ageC} = ${c}.<br>Tổng là ${ageAn} + ${ageB} + ${ageC} = ${sumAll}.<div class="sol-final-text">Đáp số: ${sumAll} tuổi</div></div>`,
        sol2: `<div class="sol-body">Mỗi tuổi đã tìm phải thỏa cả ba tổng đã cho, không chỉ một tổng.</div>`
      };
    },
    () => {
      const equalAfter = random(25, 45), transfer = random(4, 10);
      const first = equalAfter + transfer, second = equalAfter - transfer, sum = first + second;
      return {
        tier: 'hsg', tierLabel: '🔴 THI HSG', archetype: 'Chuyển gạo để hai bao bằng nhau', domain: '📦 Đại lượng',
        text: `Hai bao có tất cả <b>${sum} kg gạo</b>. Bao thứ nhất có <b>${first} kg</b>. Hỏi phải chuyển bao nhiêu ki-lô-gam từ bao thứ nhất sang bao thứ hai để hai bao có số gạo bằng nhau?`,
        unit: 'kg', answer: transfer, answerText: `${transfer} kg`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="12" y="25" font-size="12">Mỗi lần chuyển 1 kg, chênh lệch giảm 2 kg.</text></svg>`,
        hint1: `Bao thứ hai có: ${sum} - ${first} = ${second} kg.`,
        hint2: `Chênh lệch hai bao là ${first} − ${second} = ${first-second} kg.`,
        hint3: `Mỗi lần chuyển 1 kg làm chênh lệch giảm 2 kg: ${first-second} : 2 = ${transfer}.`,
        sol1: `<div class="sol-body">Bao thứ hai có ${sum} − ${first} = ${second} (kg).<br>Hai bao chênh nhau ${first} − ${second} = ${first-second} (kg).<br>Mỗi lần chuyển 1 kg, bao nhiều giảm 1 kg, bao ít tăng 1 kg; chênh lệch giảm 2 kg. Cần chuyển ${first-second} : 2 = ${transfer} (kg).<div class="sol-final-text">Đáp số: ${transfer} kg</div></div>`,
        sol2: `<div class="sol-body"><b>Cách dùng hiệu:</b> Hai bao chênh ${first - second} kg nên cần chuyển một nửa: ${first - second} : 2 = ${transfer} kg.</div>`
      };
    },
    () => {
      const ones = random(2, 5), tens = ones + 2, dividend = tens * 10 + ones;
      const digitSum = tens + ones, reversed = ones * 10 + tens;
      return {
        tier: 'hsg', tierLabel: '🔴 THI HSG', archetype: 'Số có hai chữ số và số đảo ngược', domain: '🔐 Cấu tạo số',
        text: `Một mã khóa có 2 chữ số, tổng hai chữ số bằng <b>${digitSum}</b>. Khi đổi chỗ hai chữ số, số mới bé hơn số ban đầu <b>${dividend - reversed}</b> đơn vị. Biết chữ số hàng chục lớn hơn hàng đơn vị. Tìm mã khóa.`,
        unit: '', answer: dividend, answerText: `Số đó là ${dividend}`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#0876c0">Hai chữ số hơn kém nhau 2 và có tổng ${digitSum}</text></svg>`,
        hint1: `Đổi chỗ hai chữ số làm số giảm ${dividend - reversed}, suy ra chữ số hàng chục hơn hàng đơn vị 2 đơn vị.`,
        hint2: `Hai số có tổng ${digitSum} và hiệu 2 nên hàng đơn vị là ${ones}, hàng chục là ${tens}.`,
        hint3: `Mã khóa là ${dividend}.`,
        sol1: `<div class="sol-body">Chữ số hàng chục hơn hàng đơn vị 2 đơn vị.<br>Hai chữ số có tổng ${digitSum} nên hàng đơn vị là ${ones}, hàng chục là ${tens}.<br>Mã khóa là ${dividend}.<div class="sol-final-text">Đáp số: ${dividend}</div></div>`,
        sol2: `<div class="sol-body"><b>Kiểm tra:</b> ${dividend} − ${reversed} = ${dividend - reversed} và ${tens} + ${ones} = ${digitSum}.</div>`
      };
    },
    () => {
      const d = random(1, 3), lastMonday = d + 28, ans = d;
      return {
        tier: 'hsg', tierLabel: '🔴 THI HSG', archetype: 'Suy luận ngày đầu từ lịch tháng', domain: '📅 Lịch học',
        text: `Một tháng có <b>5 ngày thứ Hai</b>. Ngày thứ Hai cuối cùng là ngày <b>${lastMonday}</b>. Hỏi ngày thứ Hai đầu tiên của tháng đó là ngày nào?`,
        unit: '', answer: ans, answerText: `Ngày ${ans}`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#7e42eb">5 thứ Hai tạo 4 khoảng tuần: ${lastMonday} − 28 = ${ans}</text></svg>`,
        hint1: `Từ thứ Hai đầu tiên đến thứ Hai cuối cùng có 4 khoảng, mỗi khoảng 7 ngày.`,
        hint2: `Bốn khoảng tuần có: 7 + 7 + 7 + 7 = 28 ngày.`,
        hint3: `Ngày thứ Hai đầu tiên là: ${lastMonday} - 28 = ${ans}.`,
        sol1: `<div class="sol-body">Năm ngày thứ Hai tạo thành 4 khoảng tuần, dài 28 ngày.<br>Ngày thứ Hai đầu tiên: ${lastMonday} − 28 = ${ans}.<div class="sol-final-text">Đáp số: Ngày ${ans}</div></div>`,
        sol2: `<div class="sol-body"><b>Kiểm tra:</b> Các ngày thứ Hai là ${ans}, ${ans + 7}, ${ans + 14}, ${ans + 21}, ${lastMonday}.</div>`
      };
    },
    () => {
      const rows = random(4, 7), total = rows * (rows + 1) / 2;
      return {
        tier: 'hsg', tierLabel: '🔴 THI HSG', archetype: 'Xếp đội hình theo quy luật', domain: '🚶 Hàng lối',
        text: `Các bạn xếp thành <b>${rows} hàng</b>. Hàng đầu có 1 bạn, hàng thứ hai có 2 bạn, mỗi hàng sau nhiều hơn hàng trước 1 bạn. Hỏi đội hình có tất cả bao nhiêu bạn?`,
        unit: 'bạn', answer: total, answerText: `${total} bạn`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#ff7010">1 + 2 + ... + ${rows} = ${total} bạn</text></svg>`,
        hint1: `Số bạn ở các hàng lần lượt là: 1, 2, 3, ..., ${rows}.`,
        hint2: `Ghép số đầu với số cuối: 1 + ${rows} = ${rows + 1}.`,
        hint3: `Cộng các hàng được: ${total} bạn.`,
        sol1: `<div class="sol-body">Tổng số bạn là: 1 + 2 + 3 + ... + ${rows} = ${total} (bạn).<div class="sol-final-text">Đáp số: ${total} bạn</div></div>`,
        sol2: `<div class="sol-body">Cộng số bạn của từng hàng: ${Array.from({length:rows},(_,i)=>i+1).join(" + ")} = ${total}.</div>`
      };
    },
    () => {
      const coins5 = random(3, 5), coins2 = random(3, 5);
      const totalCoins = coins5 + coins2, totalValue = coins5 * 5 + coins2 * 2;
      return {
        tier: 'hsg', tierLabel: '🔴 THI HSG', archetype: 'Hai loại tiền xu', domain: '💰 Tiền tệ',
        text: `Một hộp có <b>${totalCoins} đồng xu</b>, gồm loại 2 nghìn đồng và 5 nghìn đồng. Tổng giá trị là <b>${totalValue} nghìn đồng</b>. Hỏi có bao nhiêu đồng xu loại 5 nghìn đồng?`,
        unit: 'đồng xu', answer: coins5, answerText: `${coins5} đồng xu`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#0876c0">Giả sử toàn xu 2 nghìn → Phần chênh lệch cho biết số xu 5 nghìn</text></svg>`,
        hint1: `Nếu tất cả ${totalCoins} đồng xu đều là loại 2 nghìn thì có ${totalCoins * 2} nghìn đồng.`,
        hint2: `Số tiền còn thiếu là ${totalValue} - ${totalCoins * 2} = ${coins5 * 3} nghìn đồng.`,
        hint3: `Mỗi lần đổi xu 2 nghìn thành xu 5 nghìn tăng 3 nghìn. Đếm thêm 3 đến ${coins5*3}.`,
        sol1: `<div class="sol-body">Nếu tất cả là xu 2 nghìn thì có ${totalCoins} × 2 = ${totalCoins*2} (nghìn đồng).<br>Còn thiếu ${totalValue} − ${totalCoins*2} = ${coins5*3} (nghìn đồng).<br>Mỗi lần đổi một xu tăng 3 nghìn. Ta có ${repeatedSum(3,coins5)} = ${coins5*3}, gồm ${coins5} lần tăng.<div class="sol-final-text">Đáp số: ${coins5} đồng xu</div></div>`,
        sol2: `<div class="sol-body"><b>Cách kiểm tra:</b> ${coins5} × 5 + ${coins2} × 2 = ${totalValue} nghìn đồng.</div>`
      };
    },
    () => {
      const n = random(4, 8), totalTrees = 4 * (n - 1);
      return {
        tier: 'hsg', tierLabel: '🔴 THI HSG', archetype: 'Trồng cây xung quanh vườn hình vuông có góc', domain: '🌳 Trồng cây',
        text: `Người ta trồng cây xung quanh một mảnh vườn hình vuông, mỗi cạnh trồng đúng <b>${n} cây</b> (ở mỗi góc vườn đều có 1 cây). Hỏi đã trồng tất cả bao nhiêu cây?`,
        unit: 'cây', answer: totalTrees, answerText: `${totalTrees} cây`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="12" y="25" font-size="12">Cộng số cây trên từng cạnh rồi bớt 4 cây bị đếm lặp.</text></svg>`,
        hint1: 'Vì 4 cây ở 4 góc được tính 2 lần (cho 2 cạnh giáp nhau).',
        hint2: `Cộng ${n} bốn lần, sau đó bớt 4 cây ở bốn góc bị đếm lặp.`,
        hint3: `Tính: ${totalTrees} cây.`,
        sol1: `<div class="sol-body">Cộng số cây trên bốn cạnh được ${n} + ${n} + ${n} + ${n} = ${n*4}.<br>Bốn cây ở góc đều bị đếm hai lần. Bớt phần đếm lặp: ${n*4} − 4 = ${totalTrees}.<div class="sol-final-text">Đáp số: ${totalTrees} cây</div></div>`,
        sol2: `<div class="sol-body">Khi đi quanh vườn, trên mỗi cạnh chỉ đếm một đầu góc. Tổng: ${repeatedSum(n-1,4)} = ${totalTrees}.</div>`
      };
    },
    () => {
      const a = random(3, 7), b = random(10, 25), target = a * 5 + b;
      return {
        tier: 'hsg', tierLabel: '🔴 THI HSG', archetype: 'Tính ngược số quà ban đầu', domain: '🎁 Chia quà',
        text: `Cô giáo chuẩn bị một số túi quà, mỗi túi có <b>5 món</b>, rồi đặt thêm <b>${b} món quà rời</b>. Tất cả có <b>${target} món</b>. Hỏi cô đã chuẩn bị bao nhiêu túi quà?`,
        unit: '', answer: a, answerText: `Số ${a}`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#7e42eb">[ ? ] × 5 = ${target} - ${b} = ${a * 5} → [ ? ] = ${a}</text></svg>`,
        hint1: `[ ? ] × 5 = ${target} - ${b} = ${a * 5}.`,
        hint2: `[ ? ] = ${a * 5} : 5 = ${a}.`,
        hint3: `Số cần tìm là ${a}.`,
        sol1: `<div class="sol-body">Ta có: [ ? ] × 5 = ${target} − ${b} = ${a * 5}.<br>Số cần điền là: ${a * 5} : 5 = ${a}.<div class="sol-final-text">Đáp số: ${a}</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> (${target} - ${b}) / 5 = ${a}.</div>`
      };
    }
  ]
};;
})();
