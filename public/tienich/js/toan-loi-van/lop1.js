(() => {
  'use strict';
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
    { item: 'nước mắm', unit: 'lít' }, { item: 'sữa tươi', unit: 'hộp' }
  ];
  window.LOP1_POOLS = {
  kha: [
    () => {
      const name = pick(NAMES), a = random(3, 7), b = random(4, 8), total = a + b - 1;
      return {
        tier: 'kha', tierLabel: '🟡 Mức KHÁ', archetype: 'Vị trí hàng dọc (Đếm lặp)', domain: '🚶 Hàng lối',
        text: `Trong một hàng dọc, bạn <b>${name}</b> đứng <b>thứ ${a}</b> từ trên xuống và đứng <b>thứ ${b}</b> từ dưới lên. Hỏi hàng dọc đó có tất cả bao nhiêu bạn?`,
        unit: 'bạn', answer: total, answerText: `${total} bạn`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#0876c0">Vị trí: ${a} + ${b} - 1 = ${total} bạn</text></svg>`,
        hint1: `${name} được đếm 2 lần (1 lần từ trên xuống và 1 lần từ dưới lên).`,
        hint2: `Tổng số bạn = (Vị trí từ trên) + (Vị trí từ dưới) - 1.`,
        hint3: `Tính: ${a} + ${b} - 1 = ${total} bạn.`,
        sol1: `<div class="sol-body">Vì ${name} được đếm 2 lần nên hàng có: ${a} + ${b} − 1 = ${total} (bạn).<div class="sol-final-text">Đáp số: ${total} bạn</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> $${a} + ${b} - 1 = ${total}$ bạn.</div>`
      };
    },
    () => {
      const name = pick(NAMES), front = random(4, 9), behind = random(5, 11), total = front + behind + 1;
      return {
        tier: 'kha', tierLabel: '🟡 Mức KHÁ', archetype: 'Người đứng trước và đứng sau', domain: '🚶 Hàng lối',
        text: `Trong một hàng dọc, phía trước bạn <b>${name}</b> có <b>${front} bạn</b> và phía sau bạn ${name} có <b>${behind} bạn</b>. Hỏi hàng dọc có tất cả bao nhiêu bạn?`,
        unit: 'bạn', answer: total, answerText: `${total} bạn`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#0876c0">Trước: ${front} + Sau: ${behind} + ${name} = ${total} bạn</text></svg>`,
        hint1: `Hàng gồm các bạn phía trước, các bạn phía sau và chính bạn ${name}.`,
        hint2: `Tổng số bạn = (Số bạn trước) + (Số bạn sau) + 1.`,
        hint3: `Tính: ${front} + ${behind} + 1 = ${total} bạn.`,
        sol1: `<div class="sol-body">Hàng dọc có tất cả số bạn là: ${front} + ${behind} + 1 = ${total} (bạn).<div class="sol-final-text">Đáp số: ${total} bạn</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> $${front} + ${behind} + 1 = ${total}$ bạn.</div>`
      };
    },
    () => {
      const n1 = pick(NAMES), n2 = pick(NAMES.filter(x => x !== n1)), a = random(14, 25), b = random(3, 7), total = a + (a - b);
      return {
        tier: 'kha', tierLabel: '🟡 Mức KHÁ', archetype: 'So sánh ít hơn 2 bước tính', domain: '🌸 Hoa quả',
        text: `Bạn <b>${n1}</b> hái được <b>${a} bông hoa</b>. Bạn <b>${n2}</b> hái được ít hơn ${n1} <b>${b} bông hoa</b>. Hỏi cả hai bạn hái được tất cả bao nhiêu bông hoa?`,
        unit: 'bông hoa', answer: total, answerText: `${total} bông hoa`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#0876c0">${n1}: ${a} | ${n2}: ${a - b} → Tổng: ${total} bông</text></svg>`,
        hint1: `Bước 1: Tìm số hoa của ${n2} = ${a} - ${b}.`,
        hint2: `Bước 2: Tìm tổng số hoa của cả hai bạn.`,
        hint3: `Tính: ${a} + (${a} - ${b}) = ${total} bông.`,
        sol1: `<div class="sol-body">${n2} hái được: ${a} − ${b} = ${a - b} (bông).<br>Cả hai bạn hái được: ${a} + ${a - b} = ${total} (bông).<div class="sol-final-text">Đáp số: ${total} bông hoa</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> $${a} + (${a} - ${b}) = ${total}$ bông.</div>`
      };
    },
    () => {
      const start = random(10, 25), end = start + random(12, 30), count = end - start + 1;
      return {
        tier: 'kha', tierLabel: '🟡 Mức KHÁ', archetype: 'Đếm số lượng trong dãy liên tiếp', domain: '🔢 Dãy số',
        text: `Hỏi từ số <b>${start}</b> đến số <b>${end}</b> có tất cả bao nhiêu số tự nhiên liên tiếp?`,
        unit: 'số', answer: count, answerText: `${count} số`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#0876c0">Số số hạng = (${end} - ${start}) + 1 = ${count}</text></svg>`,
        hint1: `Số lượng số = (Số cuối - Số đầu) + 1.`,
        hint2: `Tính: (${end} - ${start}) + 1.`,
        hint3: `Kết quả = ${count} số.`,
        sol1: `<div class="sol-body">Số lượng các số tự nhiên từ ${start} đến ${end} là: (${end} − ${start}) + 1 = ${count} (số).<div class="sol-final-text">Đáp số: ${count} số</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> $${end} - ${start} + 1 = ${count}$ số.</div>`
      };
    }
  ],
  gioi: [
    () => {
      const n = pick(NAMES), init = random(35, 55), sold = random(10, 18), bought = random(8, 15), rem = init - sold + bought;
      return {
        tier: 'gioi', tierLabel: '🟠 Mức GIỎI', archetype: 'Thêm bớt liên hoàn thực tế', domain: '🐔 Nông trại',
        text: `Bác <b>${n}</b> có <b>${init} con gà</b>. Bác bán đi <b>${sold} con</b> rồi mua thêm <b>${bought} con gà nữa</b>. Hỏi hiện tại bác ${n} có tất cả bao nhiêu con gà?`,
        unit: 'con gà', answer: rem, answerText: `${rem} con gà`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#0876c0">Có: ${init} - ${sold} + ${bought} = ${rem} con</text></svg>`,
        hint1: `Bước 1: Tìm số gà còn lại sau khi bán = ${init} - ${sold}.`,
        hint2: `Bước 2: Cộng thêm số gà mới mua về.`,
        hint3: `Tính: ${init} - ${sold} + ${bought} = ${rem} con.`,
        sol1: `<div class="sol-body">Sau khi bán bác còn: ${init} − ${sold} = ${init - sold} (con).<br>Hiện tại bác có: ${init - sold} + ${bought} = ${rem} (con).<div class="sol-final-text">Đáp số: ${rem} con gà</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> $${init} - ${sold} + ${bought} = ${rem}$ con.</div>`
      };
    },
    () => {
      const n1 = pick(NAMES), n2 = pick(NAMES.filter(x => x !== n1));
      const diff = random(2, 5) * 2;
      const b2 = random(10, 20), b1 = b2 + diff, transfer = diff / 2;
      return {
        tier: 'gioi', tierLabel: '🟠 Mức GIỎI', archetype: 'Chuyển kẹo để hai bạn bằng nhau', domain: '🍬 Kẹo bánh',
        text: `Bạn <b>${n1}</b> có <b>${b1} cái kẹo</b>, bạn <b>${n2}</b> có <b>${b2} cái kẹo</b>. Hỏi ${n1} phải cho ${n2} bao nhiêu cái kẹo để số kẹo của hai bạn bằng nhau?`,
        unit: 'cái kẹo', answer: transfer, answerText: `${transfer} cái kẹo`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#ff7010">Độ lệch = ${diff} → Cho 1 nửa độ lệch = ${transfer} cái</text></svg>`,
        hint1: `Bước 1: Tìm xem ${n1} nhiều hơn ${n2} bao nhiêu cái kẹo = ${b1} - ${b2} = ${diff} cái.`,
        hint2: `Bước 2: Để 2 bạn bằng nhau, ${n1} chỉ cần cho ${n2} một nửa số kẹo chênh lệch (${diff} = ${transfer} + ${transfer}).`,
        hint3: `Kết quả = ${transfer} cái kẹo.`,
        sol1: `<div class="sol-body">${n1} nhiều hơn ${n2}: ${b1} − ${b2} = ${diff} (cái kẹo).<br>Vì ${diff} = ${transfer} + ${transfer} nên ${n1} cần cho ${n2} là: ${transfer} (cái kẹo).<div class="sol-final-text">Đáp số: ${transfer} cái kẹo</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> ({b1} - ${b2}) / 2 = ${transfer}$ cái kẹo.</div>`
      };
    },
    () => {
      const cuts = random(4, 9), pieces = cuts + 1;
      return {
        tier: 'gioi', tierLabel: '🟠 Mức GIỎI', archetype: 'Toán nhát cắt đoạn dây', domain: '✂️ Cắt dây',
        text: `Một sợi dây dài được cắt thành các đoạn nhỏ. Người ta đã dùng kéo <b>cắt đúng ${cuts} nhát</b>. Hỏi sợi dây đó được chia thành bao nhiêu đoạn nhỏ?`,
        unit: 'đoạn', answer: pieces, answerText: `${pieces} đoạn`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#0876c0">${cuts} nhát cắt → Số đoạn = ${cuts} + 1 = ${pieces} đoạn</text></svg>`,
        hint1: `1 nhát cắt chia dây làm 2 đoạn, 2 nhát cắt chia làm 3 đoạn...`,
        hint2: `Số đoạn nhận được luôn nhiều hơn số nhát cắt là 1.`,
        hint3: `Tính: ${cuts} + 1 = ${pieces} đoạn.`,
        sol1: `<div class="sol-body">Số đoạn dây nhận được là: ${cuts} + 1 = ${pieces} (đoạn).<div class="sol-final-text">Đáp số: ${pieces} đoạn</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> $${cuts} + 1 = ${pieces}$ đoạn.</div>`
      };
    },
    () => {
      const mother = random(28, 36), child = random(4, 8), gap = mother - child, future = random(3, 7);
      return {
        tier: 'gioi', tierLabel: '🟠 Mức GIỎI', archetype: 'Hiệu số tuổi bất biến theo thời gian', domain: '⏳ Tuổi tác',
        text: `Hiện nay mẹ <b>${mother} tuổi</b> và con <b>${child} tuổi</b>. Hỏi sau <b>${future} năm nữa</b>, mẹ nhiều hơn con bao nhiêu tuổi?`,
        unit: 'tuổi', answer: gap, answerText: `${gap} tuổi`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#7e42eb">Hiệu số tuổi không đổi = ${mother} - ${child} = ${gap} tuổi</text></svg>`,
        hint1: `Mỗi năm mỗi người đều tăng thêm 1 tuổi nên hiệu số tuổi giữa hai người luôn không đổi.`,
        hint2: `Hiệu số tuổi hiện nay = ${mother} - ${child}.`,
        hint3: `Tính: ${mother} - ${child} = ${gap} tuổi.`,
        sol1: `<div class="sol-body">Hiệu số tuổi của hai mẹ con luôn không đổi theo thời gian.<br>Sau ${future} năm nữa, mẹ vẫn hơn con: ${mother} − ${child} = ${gap} (tuổi).<div class="sol-final-text">Đáp số: ${gap} tuổi</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> Hiệu số tuổi luôn không đổi = {gap}$ tuổi.</div>`
      };
    },
    () => {
      const n = pick(NAMES), orig = random(15, 35), added = random(12, 25), result = orig + added;
      return {
        tier: 'gioi', tierLabel: '🟠 Mức GIỎI', archetype: 'Tìm số hạng chưa biết (Tính ngược)', domain: '🔢 Tìm số',
        text: `Bạn <b>${n}</b> nghĩ ra một số. Lấy số đó <b>cộng với ${added}</b> thì được kết quả là <b>${result}</b>. Hỏi số bạn ${n} đã nghĩ là số nào?`,
        unit: '', answer: orig, answerText: `Số đó là ${orig}`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#0876c0">[ ? ] + ${added} = ${result} → [ ? ] = ${result} - ${added} = ${orig}</text></svg>`,
        hint1: `Muốn tìm số hạng chưa biết, ta lấy tổng trừ đi số hạng đã biết.`,
        hint2: `Số cần tìm = ${result} - ${added}.`,
        hint3: `Tính: ${result} - ${added} = ${orig}.`,
        sol1: `<div class="sol-body">Số bạn ${n} đã nghĩ là: ${result} − ${added} = ${orig}.<div class="sol-final-text">Đáp số: ${orig}</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> $${result} - ${added} = ${orig}$.</div>`
      };
    },
    () => {
      const tens = random(4, 8), ones = random(2, 7), num = tens * 10 + ones;
      return {
        tier: 'gioi', tierLabel: '🟠 Mức GIỎI', archetype: 'Tách gộp cấu tạo số có 2 chữ số', domain: '🔢 Cấu tạo số',
        text: `Số có 2 chữ số gồm <b>${tens} chục</b> và <b>${ones} đơn vị</b> là số nào?`,
        unit: '', answer: num, answerText: `Số ${num}`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#0876c0">${tens} chục + ${ones} đơn vị = ${num}</text></svg>`,
        hint1: `${tens} chục là ${tens * 10}.`,
        hint2: `Số đó = ${tens * 10} + ${ones}.`,
        hint3: `Kết quả = ${num}.`,
        sol1: `<div class="sol-body">${tens} chục và ${ones} đơn vị viết là ${num}.<div class="sol-final-text">Đáp số: ${num}</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> $${tens}0 + ${ones} = ${num}$.</div>`
      };
    },
    () => {
      const a = random(15, 35), b = random(12, 25), total = a + b;
      return {
        tier: 'gioi', tierLabel: '🟠 Mức GIỎI', archetype: 'Độ dài đoạn thẳng gộp', domain: '📏 Hình học',
        text: `Đoạn thẳng AB dài <b>${a} cm</b>, đoạn thẳng BC dài <b>${b} cm</b>. Biết điểm B nằm giữa A và C, hỏi đoạn thẳng AC dài bao nhiêu xăng-ti-mét?`,
        unit: 'cm', answer: total, answerText: `${total} cm`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#278505">AC = AB + BC = ${a} + ${b} = ${total} cm</text></svg>`,
        hint1: `Độ dài đoạn thẳng AC = Độ dài AB + Độ dài BC.`,
        hint2: `Tính: ${a} + ${b}.`,
        hint3: `Kết quả = ${total} cm.`,
        sol1: `<div class="sol-body">Độ dài đoạn thẳng AC là: ${a} + ${b} = ${total} (cm).<div class="sol-final-text">Đáp số: ${total} cm</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> $${a} + ${b} = ${total}$ cm.</div>`
      };
    },
    () => {
      const n1 = pick(NAMES), n2 = pick(NAMES.filter(x => x !== n1)), a = random(15, 25), b = random(4, 9), total = a + (a + b);
      return {
        tier: 'gioi', tierLabel: '🟠 Mức GIỎI', archetype: 'So sánh nhiều hơn 2 bước tính', domain: '🎈 Đồ chơi',
        text: `Bạn <b>${n1}</b> có <b>${a} quả bóng</b>. Bạn <b>${n2}</b> có nhiều hơn ${n1} <b>${b} quả bóng</b>. Hỏi cả hai bạn có tất cả bao nhiêu quả bóng?`,
        unit: 'quả bóng', answer: total, answerText: `${total} quả bóng`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#0876c0">${n1}: ${a} | ${n2}: ${a + b} → Tổng: ${total} quả</text></svg>`,
        hint1: `Bước 1: Tìm số bóng của ${n2} = ${a} + ${b}.`,
        hint2: `Bước 2: Tìm tổng số bóng của cả hai bạn.`,
        hint3: `Tính: ${a} + (${a} + ${b}) = ${total} quả.`,
        sol1: `<div class="sol-body">${n2} có số quả bóng là: ${a} + ${b} = ${a + b} (quả).<br>Cả hai bạn có tất cả là: ${a} + ${a + b} = ${total} (quả).<div class="sol-final-text">Đáp số: ${total} quả bóng</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> $${a} + (${a} + ${b}) = ${total}$ quả.</div>`
      };
    }
  ],
  hsg: [
    () => {
      const floors = random(4, 6), stairsPerFloor = random(15, 20);
      let totalStairs = 0;
      for (let i = 1; i < floors; i++) totalStairs += stairsPerFloor;
      return {
        tier: 'hsg', tierLabel: '🔴 THI HSG', archetype: 'Bậc thang tầng nhà (Cộng lặp)', domain: '🏢 Bậc thang',
        text: `Bác bảo vệ đi bộ từ <b>tầng 1 lên tầng ${floors}</b> của tòa nhà. Giữa hai tầng liền nhau có <b>${stairsPerFloor} bậc thang</b>. Hỏi bác phải bước qua tất cả bao nhiêu bậc thang?`,
        unit: 'bậc', answer: totalStairs, answerText: `${totalStairs} bậc thang`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#7e42eb">Tầng 1 lên ${floors} có ${floors - 1} khoảng tầng → ${totalStairs} bậc</text></svg>`,
        hint1: `Từ tầng 1 lên tầng ${floors} có ${floors - 1} khoảng tầng.`,
        hint2: `Tính tổng số bậc của ${floors - 1} khoảng tầng.`,
        hint3: `Tính: ${totalStairs} bậc.`,
        sol1: `<div class="sol-body">Từ tầng 1 lên tầng ${floors} có: ${floors} − 1 = ${floors - 1} (khoảng tầng).<br>Bác bảo vệ phải bước qua tất cả: ${totalStairs} (bậc thang).<div class="sol-final-text">Đáp số: ${totalStairs} bậc thang</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> ({floors} - 1) \× ${stairsPerFloor} = ${totalStairs}$ bậc.</div>`
      };
    },
    () => {
      const tens = random(5, 8), ones = random(4, 9), num = tens * 10 + ones, sum = tens + ones;
      return {
        tier: 'hsg', tierLabel: '🔴 THI HSG', archetype: 'Mã số trên toa tàu', domain: '🚂 Cấu tạo số',
        text: `Một toa tàu mang số <b>${num}</b>. Để mở cửa toa, bé phải nhập tổng của chữ số hàng chục và chữ số hàng đơn vị. Bé cần nhập số nào?`,
        unit: '', answer: sum, answerText: `${sum}`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#7e42eb">Số: ${num} → Tổng các chữ số = ${tens} + ${ones} = ${sum}</text></svg>`,
        hint1: `Số có 2 chữ số đó là ${num}.`,
        hint2: `Tổng các chữ số = ${tens} + ${ones}.`,
        hint3: `Tính: ${tens} + ${ones} = ${sum}.`,
        sol1: `<div class="sol-body">Số tự nhiên đó là: ${num}.<br>Tổng các chữ số là: ${tens} + ${ones} = ${sum}.<div class="sol-final-text">Đáp số: ${sum}</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> $${tens} + ${ones} = ${sum}$.</div>`
      };
    },
    () => {
      const tens = random(4, 7), ones = random(2, 5), sumDigits = tens + ones, num = tens * 10 + ones;
      return {
        tier: 'hsg', tierLabel: '🔴 THI HSG', archetype: 'Giải mã số khóa hai chữ số', domain: '🔐 Cấu tạo số',
        text: `Mã khóa có 2 chữ số. Chữ số hàng chục là <b>${tens}</b>, tổng hai chữ số bằng <b>${sumDigits}</b>. Hỏi mã khóa là số nào?`,
        unit: '', answer: num, answerText: `Số ${num}`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#7e42eb">Đơn vị = ${sumDigits} - ${tens} = ${ones} → Số: ${num}</text></svg>`,
        hint1: `Chữ số hàng đơn vị = Tổng hai chữ số - Chữ số hàng chục.`,
        hint2: `Chữ số hàng đơn vị = ${sumDigits} - ${tens} = ${ones}.`,
        hint3: `Số cần tìm là ${num}.`,
        sol1: `<div class="sol-body">Chữ số hàng đơn vị là: ${sumDigits} − ${tens} = ${ones}.<br>Số có 2 chữ số cần tìm là: ${num}.<div class="sol-final-text">Đáp số: ${num}</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> Hàng đơn vị = {ones} \→ ${num}$.</div>`
      };
    },
    () => {
      const wApple = random(10, 20), wOrange = wApple + wApple, wGrape = wOrange + wOrange;
      return {
        tier: 'hsg', tierLabel: '🔴 THI HSG', archetype: 'Cân thăng bằng hoa quả cộng dồn', domain: '⚖️ Cân nặng',
        text: `1 quả cam nặng bằng <b>2 quả táo</b>. 1 quả bưởi nặng bằng <b>2 quả cam</b>. Biết 1 quả táo nặng <b>${wApple} g</b>. Hỏi quả bưởi nặng bao nhiêu gam?`,
        unit: 'g', answer: wGrape, answerText: `${wGrape} g`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#278505">Bưởi = Cam + Cam = (${wApple}+${wApple}) + (${wApple}+${wApple}) = ${wGrape}g</text></svg>`,
        hint1: `1 quả cam nặng: ${wApple} + ${wApple} = ${wOrange} g.`,
        hint2: `1 quả bưởi nặng: ${wOrange} + ${wOrange} = ${wGrape} g.`,
        hint3: `Tính: ${wGrape} g.`,
        sol1: `<div class="sol-body">1 quả cam nặng là: ${wApple} + ${wApple} = ${wOrange} (g).<br>Quả bưởi nặng là: ${wOrange} + ${wOrange} = ${wGrape} (g).<div class="sol-final-text">Đáp số: ${wGrape} g</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> $${wApple} \× 4 = ${wGrape}$ g.</div>`
      };
    },
    () => {
      const start = random(2, 6), d = random(2, 4);
      const s1 = start, s2 = s1 + d, s3 = s2 + d, s4 = s3 + d, s5 = s4 + d;
      return {
        tier: 'hsg', tierLabel: '🔴 THI HSG', archetype: 'Thỏ nhảy đều trên tia số', domain: '🐇 Quy luật',
        text: `Một chú thỏ lần lượt đáp xuống các ô số <b>${s1}, ${s2}, ${s3}, ${s4}</b>. Mỗi lần thỏ nhảy xa bằng nhau. Hỏi lần tiếp theo thỏ đáp xuống ô số nào?`,
        unit: '', answer: s5, answerText: `${s5}`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#7e42eb">Quy luật: cộng thêm ${d} → ${s4} + ${d} = ${s5}</text></svg>`,
        hint1: `Tìm khoảng cách giữa các số liên tiếp: ${s2} - ${s1} = ${d}.`,
        hint2: `Số tiếp theo = Số liền trước + ${d}.`,
        hint3: `Tính: ${s4} + ${d} = ${s5}.`,
        sol1: `<div class="sol-body">Dãy số tăng dần đều ${d} đơn vị.<br>Số tiếp theo là: ${s4} + ${d} = ${s5}.<div class="sol-final-text">Đáp số: ${s5}</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> $${s4} + ${d} = ${s5}$.</div>`
      };
    },
    () => {
      return {
        tier: 'hsg', tierLabel: '🔴 THI HSG', archetype: 'Logic suy luận loại trừ màu sắc', domain: '💡 Tư duy logic',
        text: 'Ba bạn An, Bình, Cúc mặc 3 chiếc áo màu: <b>1 (Đỏ)</b>, <b>2 (Xanh)</b>, <b>3 (Vàng)</b>. Biết bạn Bình mặc áo số 3 (Vàng) và bạn An không mặc áo số 1 (Đỏ). Hỏi bạn An mặc chiếc áo màu số mấy?',
        unit: '', answer: 2, answerText: 'Số 2 (Màu Xanh)',
        diagramSvg: '<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#7e42eb">Bình: 3 (Vàng) | An ≠ 1 (Đỏ) → An = 2 (Xanh)</text></svg>',
        hint1: 'Có 3 màu áo: 1 (Đỏ), 2 (Xanh), 3 (Vàng).',
        hint2: 'Bình đã mặc màu 3 (Vàng), còn lại màu 1 (Đỏ) và màu 2 (Xanh).',
        hint3: 'Vì An không mặc màu 1 (Đỏ) nên An phải mặc màu 2 (Xanh).',
        sol1: '<div class="sol-body">Bình mặc áo màu số 3 (Vàng) nên còn lại 2 màu là số 1 (Đỏ) và số 2 (Xanh).<br>Vì An không mặc áo số 1 (Đỏ) nên An mặc áo màu số 2 (Xanh).<div class="sol-final-text">Đáp số: Số 2 (Áo màu Xanh)</div></div>',
        sol2: '<div class="sol-body"><b>Mẹo:</b> Loại trừ màu 3 và 1 → Chọn màu 2 (Xanh).</div>'
      };
    },
    () => ({
      tier: 'hsg', tierLabel: '🔴 THI HSG', archetype: 'Sắp xếp thứ tự bằng suy luận', domain: '🚶 Hàng lối',
      text: 'Bốn bạn Dũng, An, Bình, Cúc đứng thành một hàng. Dũng đứng đầu hàng, Cúc đứng cuối hàng và An đứng trước Bình. Hỏi Bình đứng thứ mấy từ đầu hàng?',
      unit: '', answer: 3, answerText: 'Thứ 3',
      diagramSvg: '<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#278505">Dũng → An → Bình → Cúc</text></svg>',
      hint1: 'Dũng đã ở vị trí 1, Cúc đã ở vị trí 4.',
      hint2: 'Hai vị trí còn lại là 2 và 3 dành cho An và Bình.',
      hint3: 'An đứng trước Bình nên An ở vị trí 2, Bình ở vị trí 3.',
      sol1: '<div class="sol-body">Dũng đứng thứ 1, Cúc đứng thứ 4. Vì An đứng trước Bình nên An đứng thứ 2 và Bình đứng thứ 3.<div class="sol-final-text">Đáp số: Bình đứng thứ 3</div></div>',
      sol2: '<div class="sol-body"><b>Loại trừ:</b> Bình không thể đứng thứ 2 vì An phải đứng trước Bình.</div>'
    }),
    () => {
      const chickens = random(3, 6), rabbits = random(2, 4);
      const heads = chickens + rabbits, legs = chickens * 2 + rabbits * 4;
      return {
        tier: 'hsg', tierLabel: '🔴 THI HSG', archetype: 'Gà và thỏ bằng suy luận thêm chân', domain: '🐇 Nông trại',
        text: `Trong sân có <b>${heads} con</b> gồm gà và thỏ, đếm được <b>${legs} cái chân</b>. Hỏi có bao nhiêu con thỏ?`,
        unit: 'con thỏ', answer: rabbits, answerText: `${rabbits} con thỏ`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#7e42eb">Giả sử đều là gà: ${heads * 2} chân → Thừa ${rabbits * 2} chân</text></svg>`,
        hint1: `Nếu cả ${heads} con đều là gà thì có ${heads * 2} chân.`,
        hint2: `Thực tế nhiều hơn: ${legs} - ${heads * 2} = ${rabbits * 2} chân.`,
        hint3: `Đổi một con gà thành một con thỏ thì thêm 2 chân. Đếm thêm từng cặp chân để tìm số thỏ.`,
        sol1: `<div class="sol-body">Nếu đều là gà thì có ${heads * 2} chân.<br>Cần thêm ${legs} − ${heads * 2} = ${rabbits * 2} chân.<br>Mỗi lần thay một con gà bằng một con thỏ thêm 2 chân. Đếm ${Array.from({length:rabbits},(_,i)=>(i+1)*2).join(', ')}: cần ${rabbits} con thỏ.<div class="sol-final-text">Đáp số: ${rabbits} con thỏ</div></div>`,
        sol2: `<div class="sol-body"><b>Kiểm tra:</b> ${chickens} con gà có ${chickens * 2} chân và ${rabbits} con thỏ có ${rabbits * 4} chân, tổng ${legs} chân.</div>`
      };
    }
  ]
};;
})();
