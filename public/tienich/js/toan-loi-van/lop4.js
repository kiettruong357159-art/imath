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
  window.LOP4_POOLS = {
  kha: [
    () => {
      const p1 = random(2, 4), p2 = p1 + random(1, 3), unitVal = random(8, 20);
      const sum = (p1 + p2) * unitVal, binh = p2 * unitVal;
      return {
        tier: 'kha', tierLabel: '🟡 Mức KHÁ', archetype: 'Tìm hai số khi biết Tổng và Tỉ số', domain: '🍬 Chia kẹo',
        text: `Hai bạn An và Bình có tất cả <b>${sum} cái kẹo</b>. Biết số kẹo của An bằng <b>${p1}/${p2} số kẹo của Bình</b>. Hỏi bạn Bình có bao nhiêu cái kẹo?`,
        unit: 'cái kẹo', answer: binh, answerText: `${binh} cái kẹo`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#0876c0">Tổng ${p1+p2} phần = ${sum} → Bình = ${p2} × ${unitVal} = ${binh}</text></svg>`,
        hint1: `Tổng số phần bằng nhau = ${p1} + ${p2} = ${p1 + p2} phần.`,
        hint2: `Giá trị 1 phần = ${sum} : ${p1 + p2} = ${unitVal} cái.`,
        hint3: `Số kẹo của Bình = ${unitVal} × ${p2} = ${binh} cái.`,
        sol1: `<div class="sol-body">Tổng số phần bằng nhau là: ${p1} + ${p2} = ${p1 + p2} (phần).<br>Số kẹo của bạn Bình là: ${sum} : ${p1 + p2} × ${p2} = ${binh} (cái kẹo).<div class="sol-final-text">Đáp số: ${binh} cái kẹo</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> Bình = {sum} / (${p1}+${p2}) \× ${p2} = ${binh}$ cái.</div>`
      };
    },
    () => {
      const p1 = random(1, 3), p2 = p1 + random(2, 4), unitVal = random(6, 16);
      const diff = (p2 - p1) * unitVal, b = p2 * unitVal;
      return {
        tier: 'kha', tierLabel: '🟡 Mức KHÁ', archetype: 'Tìm hai số khi biết Hiệu và Tỉ số', domain: '📚 Giá sách',
        text: `Ngăn trên nhiều hơn ngăn dưới <b>${diff} quyển sách</b> và gấp <b>${p2}/${p1} lần</b> ngăn dưới. Hỏi ngăn trên có bao nhiêu quyển sách?`,
        unit: 'quyển sách', answer: b, answerText: `${b} quyển sách`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#278505">Hiệu ${p2-p1} phần = ${diff} → Ngăn trên = ${b} quyển</text></svg>`,
        hint1: `Hiệu số phần bằng nhau = ${p2} - ${p1} = ${p2 - p1} phần.`,
        hint2: `Giá trị 1 phần = ${diff} : ${p2 - p1} = ${unitVal} quyển.`,
        hint3: `Ngăn trên = ${unitVal} × ${p2} = ${b} quyển.`,
        sol1: `<div class="sol-body">Hiệu số phần bằng nhau là: ${p2} − ${p1} = ${p2 - p1} (phần).<br>Số sách ngăn trên là: ${diff} : ${p2 - p1} × ${p2} = ${b} (quyển sách).<div class="sol-final-text">Đáp số: ${b} quyển sách</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> Ngăn trên = {diff} / (${p2}-${p1}) \× ${p2} = ${b}$ quyển.</div>`
      };
    },
    () => {
      const diff = random(6, 20) * 2, b = random(25, 60), a = b + diff, sum = a + b;
      return {
        tier: 'kha', tierLabel: '🟡 Mức KHÁ', archetype: 'Tìm hai số khi biết Tổng và Hiệu', domain: '🔢 Tổng - Hiệu',
        text: `Hai số có tổng bằng <b>${sum}</b> và hiệu bằng <b>${diff}</b>. Tìm số lớn.`,
        unit: '', answer: a, answerText: `${a}`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#0876c0">Số lớn = (${sum} + ${diff}) : 2 = ${a}</text></svg>`,
        hint1: `Công thức: Số lớn = (Tổng + Hiệu) : 2.`,
        hint2: `Tính: (${sum} + ${diff}) : 2.`,
        hint3: `Kết quả = ${a}.`,
        sol1: `<div class="sol-body">Số lớn là: (${sum} + ${diff}) : 2 = ${a}.<div class="sol-final-text">Đáp số: ${a}</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> ({sum} + ${diff}) / 2 = ${a}$.</div>`
      };
    },
    () => {
      const total = random(12, 36) * 5, num = 3, den = 5, ans = (total * num) / den;
      return {
        tier: 'kha', tierLabel: '🟡 Mức KHÁ', archetype: 'Tìm phân số của một số', domain: '🌾 Nông sản',
        text: `Một kho có <b>${total} tạ thóc</b>. Người ta đã xuất đi <b>3/5 số thóc</b> đó. Hỏi kho đã xuất đi bao nhiêu tạ thóc?`,
        unit: 'tạ', answer: ans, answerText: `${ans} tạ`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#278505">Xuất: ${total} × 3/5 = ${ans} tạ</text></svg>`,
        hint1: `Muốn tìm phân số của một số, ta lấy số đó nhân với phân số.`,
        hint2: `Số thóc đã xuất = ${total} × 3 : 5.`,
        hint3: `Tính: ${ans} tạ.`,
        sol1: `<div class="sol-body">Số thóc đã xuất đi là: ${total} × 3 : 5 = ${ans} (tạ).<div class="sol-final-text">Đáp số: ${ans} tạ</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> $${total} \× 3 / 5 = ${ans}$ tạ.</div>`
      };
    }
  ],
  gioi: [
    () => {
      const k = random(3, 8), diff = (k + 1) * 2;
      const smaller = random(20, 35) * 2;
      const sum = smaller + (smaller + diff); // Both operands, not only the sum, must be even.
      const num2 = (sum + diff) / 2;
      return {
        tier: 'gioi', tierLabel: '🟠 Mức GIỎI', archetype: 'Hai số chẵn có k số chẵn ở giữa (Sửa Bug Chẵn)', domain: '🔢 Dãy số chẵn',
        text: `Tìm số lớn trong hai số chẵn có tổng bằng <b>${sum}</b>, biết rằng giữa chúng có đúng <b>${k} số chẵn khác</b>.`,
        unit: '', answer: num2, answerText: `${num2}`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#ff7010">Hiệu = (${k}+1)×2 = ${diff} → Số lớn = (${sum}+${diff})/2 = ${num2}</text></svg>`,
        hint1: `Giữa hai số chẵn có ${k} số chẵn nên hiệu của chúng là: (${k} + 1) × 2 = ${diff}.`,
        hint2: `Số lớn = (Tổng + Hiệu) : 2 = (${sum} + ${diff}) : 2.`,
        hint3: `Tính: ${num2}.`,
        sol1: `<div class="sol-body">Hiệu hai số chẵn là: (${k} + 1) × 2 = ${diff}.<br>Số lớn là: (${sum} + ${diff}) : 2 = ${num2}.<div class="sol-final-text">Đáp số: ${num2}</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> ({sum} + (${k}+1)\× 2) / 2 = ${num2}$.</div>`
      };
    },
    () => {
      const a = random(15, 30) * 2, b = random(15, 30) * 2, kMore = random(2, 6) * 2;
      const c = (a + b + kMore) / 2 + kMore;
      return {
        tier: 'gioi', tierLabel: '🟠 Mức GIỎI', archetype: 'Trung bình cộng: Số thứ 3 hơn TBC của 3 số', domain: '🔢 TBC nâng cao',
        text: `Số thứ nhất là <b>${a}</b>, số thứ hai là <b>${b}</b>. Số thứ ba <b>nhiều hơn trung bình cộng của cả ba số là ${kMore} đơn vị</b>. Tìm số thứ ba.`,
        unit: '', answer: c, answerText: `${c}`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#ff7010">TBC = (${a}+${b}+${kMore})/2 = ${(a+b+kMore)/2} → Số 3 = ${c}</text></svg>`,
        hint1: `Trung bình cộng của 3 số = (${a} + ${b} + ${kMore}) : 2 = ${(a + b + kMore) / 2}.`,
        hint2: `Số thứ ba = Trung bình cộng + ${kMore}.`,
        hint3: `Tính: ${c}.`,
        sol1: `<div class="sol-body">Trung bình cộng của 3 số là: (${a} + ${b} + ${kMore}) : 2 = ${(a + b + kMore) / 2}.<br>Số thứ ba là: ${(a + b + kMore) / 2} + ${kMore} = ${c}.<div class="sol-final-text">Đáp số: ${c}</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> C = ({a} + ${b} + ${kMore}) / 2 + ${kMore} = ${c}$.</div>`
      };
    },
    () => {
      const chickens = random(15, 30), dogs = random(10, 25), heads = chickens + dogs, legs = chickens * 2 + dogs * 4;
      return {
        tier: 'gioi', tierLabel: '🟠 Mức GIỎI', archetype: 'Giả thiết tạm Gà và Chó kinh điển', domain: '🐶 Nông trại',
        text: `Vừa gà vừa chó có tất cả <b>${heads} con</b>, đếm được <b>${legs} cái chân</b>. Hỏi có bao nhiêu con chó?`,
        unit: 'con chó', answer: dogs, answerText: `${dogs} con chó`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#7e42eb">Giả sử ${heads} gà: ${heads*2} chân → Thiếu: ${legs - heads*2} → Chó = ${dogs}</text></svg>`,
        hint1: `Giả sử cả ${heads} con đều là gà thì có: ${heads} × 2 = ${heads * 2} chân.`,
        hint2: `Số chân thiếu: ${legs} - ${heads * 2} chân. Mỗi con chó hơn gà 2 chân.`,
        hint3: `Số chó = (${legs} - ${heads * 2}) : 2 = ${dogs} con.`,
        sol1: `<div class="sol-body">Nếu cả ${heads} con là gà thì có: ${heads} × 2 = ${heads * 2} (chân).<br>Số chân thiếu là: ${legs} − ${heads * 2} = ${legs - heads * 2} (chân).<br>Số con chó là: (${legs} − ${heads * 2}) : 2 = ${dogs} (con).<div class="sol-final-text">Đáp số: ${dogs} con chó</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> ({legs} - 2 \× ${heads}) / 2 = ${dogs}$ con.</div>`
      };
    },
    () => {
      const ratioW = 3, ratioL = 5, unitVal = random(4, 10) * 2;
      const w = ratioW * unitVal, l = ratioL * unitVal, P = (w + l) * 2, S = w * l;
      return {
        tier: 'gioi', tierLabel: '🟠 Mức GIỎI', archetype: 'Chu vi và diện tích hình chữ nhật theo tỉ số', domain: '📐 Hình học',
        text: `Một thửa ruộng hình chữ nhật có chu vi là <b>${P} m</b>. Biết chiều rộng bằng <b>3/5 chiều dài</b>. Tính diện tích thửa ruộng đó.`,
        unit: 'm²', answer: S, answerText: `${S} m²`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#278505">Nửa chu vi = ${P/2}m → Rộng = ${w}m, Dài = ${l}m → S = ${S} m²</text></svg>`,
        hint1: `Nửa chu vi = ${P} : 2 = ${P / 2} m.`,
        hint2: `Tổng số phần bằng nhau = 3 + 5 = 8 phần → Rộng = ${w} m, Dài = ${l} m.`,
        hint3: `Diện tích = ${l} × ${w} = ${S} m².`,
        sol1: `<div class="sol-body">Nửa chu vi thửa ruộng là: ${P} : 2 = ${P / 2} (m).<br>Chiều rộng: ${P / 2} : (3 + 5) × 3 = ${w} (m).<br>Chiều dài: ${P / 2} − ${w} = ${l} (m).<br>Diện tích: ${l} × ${w} = ${S} (m²).<div class="sol-final-text">Đáp số: ${S} m²</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> S = ({P}/16 \× 3) \× (${P}/16 \× 5) = ${S}$ m².</div>`
      };
    },
    () => {
      const d = random(4, 8), intervals = random(15, 30), L = d * intervals, treesBothSides = (intervals + 1) * 2;
      return {
        tier: 'gioi', tierLabel: '🟠 Mức GIỎI', archetype: 'Trồng cây 2 bên đường cả 2 đầu', domain: '🌳 Cây xanh',
        text: `Một đoạn đường dài <b>${L} m</b>. Người ta trồng cây ở <b>cả hai bên đường</b> và ở cả hai đầu đường, khoảng cách giữa hai cây liền nhau là <b>${d} m</b>. Hỏi trồng được tất cả bao nhiêu cây?`,
        unit: 'cây', answer: treesBothSides, answerText: `${treesBothSides} cây`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#0876c0">1 bên: ${intervals} + 1 = ${intervals + 1} cây → 2 bên = ${treesBothSides} cây</text></svg>`,
        hint1: `Số cây trồng ở 1 bên đường = (${L} : ${d}) + 1 = ${intervals + 1} cây.`,
        hint2: `Số cây trồng ở cả 2 bên đường = Số cây 1 bên × 2.`,
        hint3: `Tính: ${treesBothSides} cây.`,
        sol1: `<div class="sol-body">Số cây trồng ở một bên đường là: ${L} : ${d} + 1 = ${intervals + 1} (cây).<br>Số cây trồng ở cả hai bên đường là: ${intervals + 1} × 2 = ${treesBothSides} (cây).<div class="sol-final-text">Đáp số: ${treesBothSides} cây</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> (({L} / ${d}) + 1) \× 2 = ${treesBothSides}$ cây.</div>`
      };
    },
    () => {
      const orig = random(20, 80), newNum = 200 + orig, times = 5;
      return {
        tier: 'gioi', tierLabel: '🟠 Mức GIỎI', archetype: 'Viết thêm chữ số vào bên trái', domain: '🔢 Cấu tạo số',
        text: `Tìm số có 2 chữ số biết rằng khi viết thêm chữ số <b>2 vào bên trái</b> số đó ta được số mới gấp <b>5 lần</b> số đã cho.`,
        unit: '', answer: 50, answerText: '50',
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#7e42eb">2ab = 200 + ab = 5 × ab → 4 × ab = 200 → ab = 50</text></svg>`,
        hint1: `Khi viết thêm chữ số 2 vào bên trái số có 2 chữ số thì số đó tăng thêm 200 đơn vị.`,
        hint2: `Hiệu số phần: 5 - 1 = 4 phần $\→$ Số ban đầu = 200 : 4.`,
        hint3: `Kết quả = 50.`,
        sol1: `<div class="sol-body">Số mới hơn số cũ 200 đơn vị.<br>Số ban đầu là: 200 : (5 − 1) = 50.<div class="sol-final-text">Đáp số: 50</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> 200 / (5 - 1) = 50.</div>`
      };
    },
    () => {
      const a = random(10, 20), b = random(15, 25), c = random(12, 22), sum = a + b + c;
      const tbc = sum / 3;
      return {
        tier: 'gioi', tierLabel: '🟠 Mức GIỎI', archetype: 'Trung bình cộng của 3 số cơ bản', domain: '🔢 Số học',
        text: `Tìm trung bình cộng của ba số: <b>${a * 3}</b>, <b>${b * 3}</b> và <b>${c * 3}</b>.`,
        unit: '', answer: (a + b + c), answerText: `${a + b + c}`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#0876c0">TBC = (${a*3} + ${b*3} + ${c*3}) : 3 = ${a + b + c}</text></svg>`,
        hint1: `Trung bình cộng = Tổng 3 số : 3.`,
        hint2: `Tính: (${a * 3} + ${b * 3} + ${c * 3}) : 3.`,
        hint3: `Kết quả = ${a + b + c}.`,
        sol1: `<div class="sol-body">Tổng của ba số là: ${a * 3} + ${b * 3} + ${c * 3} = ${(a + b + c) * 3}.<br>Trung bình cộng là: ${(a + b + c) * 3} : 3 = ${a + b + c}.<div class="sol-final-text">Đáp số: ${a + b + c}</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> TBC = {a + b + c}$.</div>`
      };
    },
    () => {
      const side = random(12, 30), P = side * 4, S = side * side;
      return {
        tier: 'gioi', tierLabel: '🟠 Mức GIỎI', archetype: 'Mảnh đất hình vuông chu vi và diện tích', domain: '📐 Hình học',
        text: `Một khu đất hình vuông có chu vi <b>${P} m</b>. Tính diện tích khu đất đó.`,
        unit: 'm²', answer: S, answerText: `${S} m²`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#278505">Cạnh = ${P} : 4 = ${side}m → S = ${S} m²</text></svg>`,
        hint1: `Cạnh hình vuông = ${P} : 4 = ${side} m.`,
        hint2: `Diện tích = ${side} × ${side} = ${S} m².`,
        hint3: `Tính: ${S} m².`,
        sol1: `<div class="sol-body">Cạnh khu đất là: ${P} : 4 = ${side} (m).<br>Diện tích khu đất là: ${side} × ${side} = ${S} (m²).<div class="sol-final-text">Đáp số: ${S} m²</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> S = ({P}/4)^2 = ${S}$ m².</div>`
      };
    }
  ],
  hsg: [
    () => {
      const an = random(2, 8) * 8, binh = an * 3 / 2, cuc = binh * 5 / 4, totalMarbles = an + binh + cuc;
      return {
        tier: 'hsg', tierLabel: '🔴 THI HSG', archetype: 'Tỉ số liên hoàn 3 đối tượng (An - Bình - Cúc)', domain: '🍬 Tỉ lệ kép',
        text: `Ba bạn An, Bình, Cúc có tất cả <b>${totalMarbles} viên bi</b>. Biết số bi của An bằng <b>2/3 số bi của Bình</b>, số bi của Bình bằng <b>4/5 số bi của Cúc</b>. Hỏi An có bao nhiêu viên bi?`,
        unit: 'viên bi', answer: an, answerText: `${an} viên bi`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#7e42eb">An:Bình:Cúc = 8:12:15 → An = ${an} viên</text></svg>`,
        hint1: `Quy đồng tỉ số: An/Bình = 2/3 = 8/12, Bình/Cúc = 4/5 = 12/15.`,
        hint2: `Tổng số phần: 8 + 12 + 15 = 35 phần.`,
        hint3: `An có: ${totalMarbles} : 35 × 8 = ${an} viên bi.`,
        sol1: `<div class="sol-body">Ta có: An/Bình = 8/12 và Bình/Cúc = 12/15.<br>Tổng số phần bằng nhau: 8 + 12 + 15 = 35 (phần).<br>An có số bi là: ${totalMarbles} : 35 × 8 = ${an} (viên bi).<div class="sol-final-text">Đáp số: ${an} viên bi</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> An = {totalMarbles} \× 8 / 35 = ${an}$ viên.</div>`
      };
    },
    () => {
      const tickets5 = random(20, 35), tickets10 = random(15, 30), totalTickets = tickets5 + tickets10;
      const totalMoney = tickets5 * 5000 + tickets10 * 10000;
      return {
        tier: 'hsg', tierLabel: '🔴 THI HSG', archetype: 'Giả thiết tạm: Bán vé xem phim 2 loại giá', domain: '🎟️ Vé xem phim',
        text: `Một rạp chiếu phim bán được tất cả <b>${totalTickets} vé</b> gồm loại vé 5 000 đồng và loại vé 10 000 đồng, thu được <b>${formatNum(totalMoney)} đồng</b>. Hỏi đã bán được bao nhiêu vé loại 10 000 đồng?`,
        unit: 'vé', answer: tickets10, answerText: `${tickets10} vé`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#7e42eb">Giả sử toàn vé 5k: ${totalTickets}×5k = ${totalTickets*5000}đ → Vé 10k = ${tickets10}</text></svg>`,
        hint1: `Giả sử toàn bộ ${totalTickets} vé đều là loại 5 000 đồng thì thu được: ${totalTickets} × 5 000 = ${totalTickets * 5000} đồng.`,
        hint2: `Số tiền chênh lệch = ${totalMoney} - ${totalTickets * 5000}. Mỗi vé 10 000 hơn vé 5 000 là 5 000 đồng.`,
        hint3: `Số vé 10 000 đồng = (${totalMoney} - ${totalTickets * 5000}) : 5 000 = ${tickets10} vé.`,
        sol1: `<div class="sol-body">Giả sử tất cả đều là vé 5 000 đồng thì thu được: ${totalTickets} × 5 000 = ${totalTickets * 5000} (đồng).<br>Số tiền thiếu là: ${totalMoney} − ${totalTickets * 5000} = ${totalMoney - totalTickets * 5000} (đồng).<br>Số vé loại 10 000 đồng là: ${totalMoney - totalTickets * 5000} : 5 000 = ${tickets10} (vé).<div class="sol-final-text">Đáp số: ${tickets10} vé</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> ({totalMoney} - ${totalTickets}\× 5000) / 5000 = ${tickets10}$ vé.</div>`
      };
    },
    () => {
      const pages = random(120, 250);
      const digits = 9 + 90 * 2 + (pages - 99) * 3;
      return {
        tier: 'hsg', tierLabel: '🔴 THI HSG', archetype: 'Đánh số trang sách cần N chữ số, hỏi số trang', domain: '📚 Trang sách',
        text: `Để đánh số trang của một cuốn sách cần dùng tất cả <b>${digits} chữ số</b>. Hỏi cuốn sách đó dày bao nhiêu trang?`,
        unit: 'trang', answer: pages, answerText: `${pages} trang`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#7e42eb">1-9: 9cs, 10-99: 180cs → Còn lại: ${digits - 189}cs : 3 = ${pages - 99} trang → Tổng: ${pages}</text></svg>`,
        hint1: `Từ trang 1 đến 99 dùng hết: 9 + 90 × 2 = 189 chữ số.`,
        hint2: `Số chữ số dùng cho các trang có 3 chữ số = ${digits} - 189 = ${digits - 189} chữ số.`,
        hint3: `Số trang có 3 chữ số = (${digits} - 189) : 3 = ${pages - 99} trang → Cuốn sách dày = 99 + ${pages - 99} = ${pages} trang.`,
        sol1: `<div class="sol-body">Từ trang 1 đến 99 dùng hết: 9 + 180 = 189 (chữ số).<br>Số chữ số cho các trang có 3 chữ số là: ${digits} − 189 = ${digits - 189} (chữ số).<br>Số trang có 3 chữ số là: ${digits - 189} : 3 = ${pages - 99} (trang).<br>Cuốn sách dày: 99 + ${pages - 99} = ${pages} (trang).<div class="sol-final-text">Đáp số: ${pages} trang</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> 99 + ({digits} - 189) / 3 = ${pages}$ trang.</div>`
      };
    },
    () => {
      const brotherNow = 24, sisterNow = 16, diff = brotherNow - sisterNow;
      return {
        tier: 'hsg', tierLabel: '🔴 THI HSG', archetype: 'Tuổi tác nâng cao (Khi tuổi anh bằng tuổi em hiện nay)', domain: '⏳ Tuổi tác',
        text: `Hiện nay anh <b>24 tuổi</b>. Biết trước đây khi tuổi anh bằng tuổi em hiện nay thì anh gấp <b>2 lần tuổi em</b>. Tính tuổi em hiện nay.`,
        unit: 'tuổi', answer: 16, answerText: '16 tuổi',
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#7e42eb">Sơ đồ đoạn thẳng: Tuổi em trước đây = 1p, Anh trước đây = Em nay = 2p, Anh nay = 3p = 24 → Em nay = 16</text></svg>`,
        hint1: `Coi tuổi em trước đây là 1 phần thì tuổi anh trước đây là 2 phần.`,
        hint2: `Hiệu số tuổi không đổi là 1 phần $\→$ Tuổi em hiện nay = 2 phần, tuổi anh hiện nay = 3 phần.`,
        hint3: `Tuổi em hiện nay = (24 : 3) × 2 = 16 tuổi.`,
        sol1: `<div class="sol-body">Coi tuổi em trước đây là 1 phần thì tuổi anh trước đây là 2 phần.<br>Hiệu số tuổi là: 2 − 1 = 1 (phần).<br>Tuổi em hiện nay bằng tuổi anh trước đây (2 phần). Tuổi anh hiện nay là: 2 + 1 = 3 (phần).<br>Tuổi em hiện nay là: 24 : 3 × 2 = 16 (tuổi).<div class="sol-final-text">Đáp số: 16 tuổi</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> 24 / 3 \× 2 = 16 tuổi.</div>`
      };
    },
    () => {
      const diff = random(10, 25) * 2;
      return {
        tier: 'hsg', tierLabel: '🔴 THI HSG', archetype: 'Hiệu tỉ ẩn (Cùng thêm hoặc bớt lượng k)', domain: '🔢 Hiệu - Tỉ',
        text: `Cho hai số có hiệu bằng <b>${diff}</b>. Nếu cùng bớt ở cả hai số đi 10 đơn vị thì tỉ số của hai số lúc sau là <b>1/3</b>. Tìm số bé ban đầu.`,
        unit: '', answer: (diff / 2) + 10, answerText: `${(diff / 2) + 10}`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#7e42eb">Hiệu không đổi = ${diff} → Số bé lúc sau = ${diff}/2 → Số bé đầu = ${diff/2 + 10}</text></svg>`,
        hint1: `Khi cùng bớt ở cả hai số thì hiệu luôn không đổi = ${diff}.`,
        hint2: `Số bé lúc sau = ${diff} : (3 - 1) = ${diff / 2}.`,
        hint3: `Số bé ban đầu = ${diff / 2} + 10.`,
        sol1: `<div class="sol-body">Hiệu hai số không đổi là ${diff}.<br>Số bé lúc sau là: ${diff} : (3 − 1) = ${diff / 2}.<br>Số bé ban đầu là: ${diff / 2} + 10 = ${(diff / 2) + 10}.<div class="sol-final-text">Đáp số: ${(diff / 2) + 10}</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> ({diff} / 2) + 10 = ${(diff / 2) + 10}$.</div>`
      };
    },
    () => {
      return {
        tier: 'hsg', tierLabel: '🔴 THI HSG', archetype: 'Tuổi tác qua 2 mốc thời gian', domain: '⏳ Tuổi tác',
        text: 'Hiện nay tuổi bố <b>gấp 4 lần tuổi con</b>. Biết <b>5 năm trước</b>, tuổi bố <b>gấp 7 lần tuổi con</b>. Tính tuổi bố hiện nay.',
        unit: 'tuổi', answer: 40, answerText: '40 tuổi',
        diagramSvg: '<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#7e42eb">Hiệu tuổi = 3 lần con nay = 6 lần con trước → Con nay = 10 → Bố = 40 tuổi</text></svg>',
        hint1: 'Hiệu số tuổi luôn không đổi. Hiện nay hiệu = 3 lần tuổi con. 5 năm trước hiệu = 6 lần tuổi con khi đó.',
        hint2: 'Suy ra tuổi con hiện nay gấp đôi tuổi con 5 năm trước → Tuổi con hiện nay = 10 tuổi.',
        hint3: 'Tuổi bố hiện nay = 10 × 4 = 40 tuổi.',
        sol1: '<div class="sol-body">Hiệu số tuổi không đổi. Hiện nay hiệu bằng 3 lần tuổi con hiện nay.<br>5 năm trước hiệu bằng 6 lần tuổi con khi đó.<br>Do đó tuổi con hiện nay gấp 2 lần tuổi con 5 năm trước.<br>Tuổi con hiện nay là: 5 × 2 = 10 (tuổi).<br>Tuổi bố hiện nay là: 10 × 4 = 40 (tuổi).<div class="sol-final-text">Đáp số: 40 tuổi</div></div>',
        sol2: '<div class="sol-body"><b>Mẹo:</b> Bố = (5 × 6) / (6 - 3) × 4 = 40 tuổi.</div>'
      };
    },
    () => {
      const a = random(15, 25), b = random(18, 28), cBase = random(20, 30), m = random(2, 6) * 3;
      const c = cBase + ((3 - ((a + b + cBase) % 3)) % 3);
      const tbc = (a + b + c + m) / 3, d = tbc + m;
      return {
        tier: 'hsg', tierLabel: '🔴 THI HSG', archetype: 'Trung bình cộng vượt mức nhóm 4 bạn', domain: '🍬 Chia kẹo',
        text: `An có <b>${a} viên bi</b>, Bình có <b>${b} viên bi</b>, Cúc có <b>${c} viên bi</b>. Dũng có số bi <b>nhiều hơn trung bình cộng của cả 4 bạn là ${m} viên</b>. Hỏi Dũng có bao nhiêu viên bi?`,
        unit: 'viên bi', answer: d, answerText: `${d} viên bi`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#ff7010">TBC = (${a}+${b}+${c}+${m})/3 = ${tbc} → Dũng = ${tbc} + ${m} = ${d}</text></svg>`,
        hint1: `Trung bình cộng của cả 4 bạn = (${a} + ${b} + ${c} + ${m}) : 3 = ${tbc} viên.`,
        hint2: `Số bi của Dũng = Trung bình cộng + ${m} = ${tbc} + ${m}.`,
        hint3: `Tính: ${d} viên bi.`,
        sol1: `<div class="sol-body">Trung bình cộng số bi của cả 4 bạn là: (${a} + ${b} + ${c} + ${m}) : 3 = ${tbc} (viên).<br>Số bi của bạn Dũng là: ${tbc} + ${m} = ${d} (viên bi).<div class="sol-final-text">Đáp số: ${d} viên bi</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> Dũng = (${a}+${b}+${c}+${m})/3 + ${m} = ${d} viên.</div>`
      };
    },
    () => {
      const transfer = random(5, 10), b2 = random(15, 30), a2 = b2 * 2;
      const a1 = a2 + transfer, b1 = b2 - transfer;
      return {
        tier: 'hsg', tierLabel: '🔴 THI HSG', archetype: 'Chuyển đổi số lượng làm thay đổi tỉ số', domain: '🍬 Chuyển bi',
        text: `An và Bình có một số viên bi. Nếu An cho Bình <b>${transfer} viên bi</b> thì số bi của An sẽ <b>gấp 2 lần số bi của Bình</b>. Biết lúc đầu An có <b>${a1} viên bi</b>. Hỏi lúc đầu Bình có bao nhiêu viên bi?`,
        unit: 'viên bi', answer: b1, answerText: `${b1} viên bi`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#0876c0">An sau = ${a2} → Bình sau = ${b2} → Bình đầu = ${b1} viên</text></svg>`,
        hint1: `Sau khi cho, An còn: ${a1} - ${transfer} = ${a2} viên bi.`,
        hint2: `Khi đó số bi của Bình = ${a2} : 2 = ${b2} viên bi.`,
        hint3: `Lúc đầu Bình có: ${b2} - ${transfer} = ${b1} viên bi.`,
        sol1: `<div class="sol-body">Sau khi cho Bình ${transfer} viên, An còn: ${a1} − ${transfer} = ${a2} (viên).<br>Số bi của Bình lúc sau là: ${a2} : 2 = ${b2} (viên).<br>Lúc đầu Bình có: ${b2} − ${transfer} = ${b1} (viên bi).<div class="sol-final-text">Đáp số: ${b1} viên bi</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> Bình = (${a1} - ${transfer}) / 2 - ${transfer} = ${b1} viên.</div>`
      };
    },
    () => {
      const n = pick([9, 19, 49, 99]), ans = n / (n + 1);
      return {
        tier: 'hsg', tierLabel: '🔴 THI HSG', archetype: 'Tổng quãng đường phân số theo quy luật', domain: '🤖 Chuyển động',
        text: `Một rô-bốt đi lần lượt các chặng dài <b>1/(1×2) m, 1/(2×3) m, 1/(3×4) m, ...</b>, chặng cuối dài <b>1/(${n}×${n+1}) m</b>. Hỏi rô-bốt đã đi tất cả bao nhiêu mét? Viết đáp án dưới dạng phân số tối giản.`,
        unit: '', answer: ans, answerText: `${n}/${n+1} (tức ${ans.toFixed(3)})`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#7e42eb">A = 1 - 1/${n+1} = ${n}/${n+1}</text></svg>`,
        hint1: 'Ta có: 1/(1×2) = 1 - 1/2, 1/(2×3) = 1/2 - 1/3, ..., 1/(n×(n+1)) = 1/n - 1/(n+1).',
        hint2: `A = 1 - 1/2 + 1/2 - 1/3 + ... + 1/${n} - 1/${n+1} = 1 - 1/${n+1}.`,
        hint3: `Tính: ${n}/${n+1}.`,
        sol1: `<div class="sol-body">Ta có: A = (1 − 1/2) + (1/2 − 1/3) + ... + (1/${n} − 1/${n+1}) = 1 − 1/${n+1} = ${n}/${n+1}.<div class="sol-final-text">Đáp số: ${n}/${n+1}</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> A = 1 - 1/(${n}+1) = ${n}/${n+1}.</div>`
      };
    }
  ]
};;
})();
