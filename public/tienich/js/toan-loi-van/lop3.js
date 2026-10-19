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
  window.LOP3_POOLS = {
  kha: [
    () => {
      const packs = random(3, 6), priceEach = random(4, 9) * 1000, totalPrice = packs * priceEach;
      const buyMore = packs + random(2, 5), ans = buyMore * priceEach;
      return {
        tier: 'kha', tierLabel: '🟡 Mức KHÁ', archetype: 'Bài toán rút về đơn vị (Dạng thuận)', domain: '💰 Mua sắm',
        text: `Mua <b>${packs} quyển vở</b> hết <b>${formatNum(totalPrice)} đồng</b>. Hỏi mua <b>${buyMore} quyển vở</b> như thế hết bao nhiêu tiền?`,
        unit: 'đồng', answer: ans, answerText: `${formatNum(ans)} đồng`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#0876c0">1 quyển = ${formatNum(priceEach)}đ → ${buyMore} quyển = ${formatNum(ans)}đ</text></svg>`,
        hint1: `Giá tiền 1 quyển vở = ${totalPrice} : ${packs} = ${priceEach} đồng.`,
        hint2: `Số tiền mua ${buyMore} quyển = ${priceEach} × ${buyMore}.`,
        hint3: `Tính: ${formatNum(ans)} đồng.`,
        sol1: `<div class="sol-body">Giá tiền 1 quyển vở là: ${totalPrice} : ${packs} = ${priceEach} (đồng).<br>Mua ${buyMore} quyển vở hết: ${priceEach} × ${buyMore} = ${ans} (đồng).<div class="sol-final-text">Đáp số: ${formatNum(ans)} đồng</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> ({totalPrice} / ${packs}) \× ${buyMore} = ${ans}$ đồng.</div>`
      };
    },
    () => {
      const perBox = pick([4, 6, 8]), boxes = random(5, 9), totalItems = perBox * boxes;
      const newPerBox = pick([2, 3, 4].filter(x => totalItems % x === 0));
      const ansBoxes = totalItems / newPerBox;
      return {
        tier: 'kha', tierLabel: '🟡 Mức KHÁ', archetype: 'Bài toán rút về đơn vị (Chia đều vào hộp mới)', domain: '📦 Đóng gói',
        text: `Có <b>${totalItems} chiếc cốc</b> xếp đều vào <b>${boxes} hộp</b>. Nếu mỗi hộp mới chỉ xếp <b>${newPerBox} chiếc cốc</b> thì cần tất cả bao nhiêu hộp?`,
        unit: 'hộp', answer: ansBoxes, answerText: `${ansBoxes} hộp`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#0876c0">${totalItems} cốc : ${newPerBox} cốc/hộp = ${ansBoxes} hộp</text></svg>`,
        hint1: `Số hộp cần dùng = Tổng số cốc : Số cốc mỗi hộp mới.`,
        hint2: `Tính: ${totalItems} : ${newPerBox}.`,
        hint3: `Kết quả = ${ansBoxes} hộp.`,
        sol1: `<div class="sol-body">Số hộp mới cần dùng là: ${totalItems} : ${newPerBox} = ${ansBoxes} (hộp).<div class="sol-final-text">Đáp số: ${ansBoxes} hộp</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> $${totalItems} / ${newPerBox} = ${ansBoxes}$ hộp.</div>`
      };
    },
    () => {
      const w = random(6, 14), k = random(2, 4), l = w * k, S = w * l;
      return {
        tier: 'kha', tierLabel: '🟡 Mức KHÁ', archetype: 'Chu vi và diện tích hình chữ nhật gấp bội', domain: '📐 Hình học',
        text: `Một mảnh vườn hình chữ nhật có chiều rộng <b>${w} m</b>, chiều dài <b>gấp ${k} lần</b> chiều rộng. Tính diện tích mảnh vườn đó.`,
        unit: 'm²', answer: S, answerText: `${S} m²`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#278505">Rộng: ${w}m, Dài = ${l}m → S = ${S} m²</text></svg>`,
        hint1: `Chiều dài mảnh vườn = ${w} × ${k} = ${l} m.`,
        hint2: `Diện tích = Chiều dài × Chiều rộng = ${l} × ${w}.`,
        hint3: `Tính: ${l} × ${w} = ${S} m².`,
        sol1: `<div class="sol-body">Chiều dài mảnh vườn là: ${w} × ${k} = ${l} (m).<br>Diện tích mảnh vườn là: ${l} × ${w} = ${S} (m²).<div class="sol-final-text">Đáp số: ${S} m²</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> S = {w} \× (${w} \× ${k}) = ${S}$ m².</div>`
      };
    },
    () => {
      const edge = random(8, 25), P = edge * 4, S = edge * edge;
      return {
        tier: 'kha', tierLabel: '🟡 Mức KHÁ', archetype: 'Chu vi và diện tích hình vuông', domain: '📐 Hình học',
        text: `Một sân chơi hình vuông có chu vi là <b>${P} m</b>. Tính diện tích của sân chơi đó.`,
        unit: 'm²', answer: S, answerText: `${S} m²`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#278505">Cạnh = ${P} : 4 = ${edge}m → S = ${edge} × ${edge} = ${S} m²</text></svg>`,
        hint1: `Cạnh hình vuông = Chu vi : 4 = ${P} : 4 = ${edge} m.`,
        hint2: `Diện tích hình vuông = Cạnh × Cạnh = ${edge} × ${edge}.`,
        hint3: `Tính: ${edge} × ${edge} = ${S} m².`,
        sol1: `<div class="sol-body">Độ dài cạnh sân chơi là: ${P} : 4 = ${edge} (m).<br>Diện tích sân chơi là: ${edge} × ${edge} = ${S} (m²).<div class="sol-final-text">Đáp số: ${S} m²</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> S = ({P} / 4)^2 = ${S}$ m².</div>`
      };
    }
  ],
  gioi: [
    () => {
      const k = pick([3, 4]), years = random(2, 5), child = random(5, 8);
      const childWhenK = child + years;
      const gap = childWhenK * (k - 1);
      const mother = child + gap;
      return {
        tier: 'gioi', tierLabel: '🟠 Mức GIỎI', archetype: 'Tuổi mẹ gấp k lần tuổi con', domain: '⏳ Tuổi tác',
        text: `Hiện nay mẹ <b>${mother} tuổi</b> và con <b>${child} tuổi</b>. Hỏi sau bao nhiêu năm nữa thì tuổi mẹ <b>gấp ${k} lần</b> tuổi con?`,
        unit: 'năm', answer: years, answerText: `${years} năm nữa`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#ff7010">Hiệu tuổi = ${gap} → Con khi đó: ${childWhenK} tuổi → Sau: ${years} năm</text></svg>`,
        hint1: `Hiệu số tuổi không đổi: ${mother} - ${child} = ${gap} tuổi.`,
        hint2: `Khi mẹ gấp ${k} lần con, tuổi con khi đó = ${gap} : (${k} - 1) = ${childWhenK} tuổi.`,
        hint3: `Số năm sau = ${childWhenK} - ${child} = ${years} năm.`,
        sol1: `<div class="sol-body">Hiệu số tuổi không đổi là: ${mother} − ${child} = ${gap} (tuổi).<br>Khi mẹ gấp ${k} lần con, tuổi con là: ${gap} : (${k} − 1) = ${childWhenK} (tuổi).<br>Số năm sau là: ${childWhenK} − ${child} = ${years} (năm).<div class="sol-final-text">Đáp số: ${years} năm</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> ({gap} / (${k} - 1)) - ${child} = ${years}$ năm.</div>`
      };
    },
    () => {
      const div = random(6, 9), rem = div - 1, quot = random(15, 35), dividend = quot * div + rem;
      return {
        tier: 'gioi', tierLabel: '🟠 Mức GIỎI', archetype: 'Phép chia có số dư lớn nhất', domain: '🔢 Phép chia',
        text: `Trong một phép chia có số chia là <b>${div}</b>, thương là <b>${quot}</b> và số dư là <b>số dư lớn nhất có thể</b>. Tìm số bị chia.`,
        unit: '', answer: dividend, answerText: `${dividend}`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#0876c0">Số chia = ${div} → Dư max = ${rem} → Số bị chia = ${dividend}</text></svg>`,
        hint1: `Số dư lớn nhất trong phép chia cho ${div} là: ${div} - 1 = ${rem}.`,
        hint2: `Số bị chia = Thương × Số chia + Số dư.`,
        hint3: `Tính: ${quot} × ${div} + ${rem} = ${dividend}.`,
        sol1: `<div class="sol-body">Số dư lớn nhất có thể là: ${div} − 1 = ${rem}.<br>Số bị chia là: ${quot} × ${div} + ${rem} = ${dividend}.<div class="sol-final-text">Đáp số: ${dividend}</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> $${quot} \× ${div} + (${div} - 1) = ${dividend}$.</div>`
      };
    },
    () => {
      const w = random(8, 15), extraL = random(3, 6), extraS = w * extraL;
      const origL = w + random(4, 10), origS = w * origL;
      return {
        tier: 'gioi', tierLabel: '🟠 Mức GIỎI', archetype: 'Mảnh đất mở rộng chiều dài diện tích tăng thêm', domain: '📐 Hình học',
        text: `Một mảnh đất hình chữ nhật có chiều dài hơn chiều rộng <b>${origL - w} m</b>. Nếu kéo dài chiều dài thêm <b>${extraL} m</b> thì diện tích mảnh đất tăng thêm <b>${extraS} m²</b>. Tính diện tích ban đầu của mảnh đất.`,
        unit: 'm²', answer: origS, answerText: `${origS} m²`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#278505">Rộng = ${extraS} : ${extraL} = ${w}m → Dài = ${origL}m → S = ${origS} m²</text></svg>`,
        hint1: `Chiều rộng mảnh đất = Diện tích tăng thêm : Chiều dài tăng thêm = ${extraS} : ${extraL} = ${w} m.`,
        hint2: `Chiều dài ban đầu = ${w} + ${origL - w} = ${origL} m.`,
        hint3: `Diện tích ban đầu = ${origL} × ${w} = ${origS} m².`,
        sol1: `<div class="sol-body">Chiều rộng mảnh đất là: ${extraS} : ${extraL} = ${w} (m).<br>Chiều dài ban đầu là: ${w} + ${origL - w} = ${origL} (m).<br>Diện tích ban đầu là: ${origL} × ${w} = ${origS} (m²).<div class="sol-final-text">Đáp số: ${origS} m²</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> S = ({extraS}/${extraL}) \× (${extraS}/${extraL} + ${origL - w}) = ${origS}$ m².</div>`
      };
    },
    () => {
      const orig = random(12, 35), k = random(3, 6), m = random(10, 30), res = (orig * k) - m;
      return {
        tier: 'gioi', tierLabel: '🟠 Mức GIỎI', archetype: 'Gấp lên nhiều lần rồi bớt đi (Tính ngược)', domain: '🔢 Tìm số',
        text: `Tìm một số biết rằng lấy số đó <b>gấp lên ${k} lần</b> rồi <b>bớt đi ${m}</b> thì được kết quả là <b>${res}</b>.`,
        unit: '', answer: orig, answerText: `Số đó là ${orig}`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#7e42eb">[ ? ] × ${k} − ${m} = ${res} → [ ? ] = (${res} + ${m}) : ${k} = ${orig}</text></svg>`,
        hint1: `Số đó nhân với ${k} có giá trị là: ${res} + ${m} = ${res + m}.`,
        hint2: `Số cần tìm = ${res + m} : ${k}.`,
        hint3: `Tính: ${orig}.`,
        sol1: `<div class="sol-body">Số đó nhân với ${k} là: ${res} + ${m} = ${res + m}.<br>Số cần tìm là: ${res + m} : ${k} = ${orig}.<div class="sol-final-text">Đáp số: ${orig}</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> ({res} + ${m}) / ${k} = ${orig}$.</div>`
      };
    },
    () => {
      const pages = random(35, 85), digits = 9 + (pages - 9) * 2;
      return {
        tier: 'gioi', tierLabel: '🟠 Mức GIỎI', archetype: 'Đếm chữ số dùng để đánh số trang sách', domain: '📚 Trang sách',
        text: `Để đánh số trang của một cuốn sách dày <b>${pages} trang</b> (từ trang 1 đến trang ${pages}), người ta phải dùng tất cả bao nhiêu chữ số?`,
        unit: 'chữ số', answer: digits, answerText: `${digits} chữ số`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#0876c0">1-9: 9 chữ số | 10-${pages}: ${pages - 9} × 2 → Tổng: ${digits} chữ số</text></svg>`,
        hint1: `Từ trang 1 đến 9 có 9 trang có 1 chữ số = 9 chữ số.`,
        hint2: `Từ trang 10 đến ${pages} có: ${pages} - 9 = ${pages - 9} trang có 2 chữ số.`,
        hint3: `Tổng chữ số = 9 + (${pages - 9}) × 2 = ${digits} chữ số.`,
        sol1: `<div class="sol-body">Từ trang 1 đến trang 9 cần: 9 × 1 = 9 (chữ số).<br>Từ trang 10 đến trang ${pages} có ${pages - 9} trang, cần: (${pages} − 9) × 2 = ${(pages - 9) * 2} (chữ số).<br>Tổng cộng cần: 9 + ${(pages - 9) * 2} = ${digits} (chữ số).<div class="sol-final-text">Đáp số: ${digits} chữ số</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> 9 + ({pages} - 9) \× 2 = ${digits}$ chữ số.</div>`
      };
    },
    () => {
      const P = random(6, 12) * 10, d = pick([2, 5]), trees = P / d;
      return {
        tier: 'gioi', tierLabel: '🟠 Mức GIỎI', archetype: 'Trồng cây xung quanh hồ tròn / vườn khép kín', domain: '🌳 Trồng cây',
        text: `Người ta trồng cây xung quanh một bờ ao hình tròn có chu vi <b>${P} m</b>. Khoảng cách giữa hai cây liền nhau là <b>${d} m</b>. Hỏi trồng được tất cả bao nhiêu cây?`,
        unit: 'cây', answer: trees, answerText: `${trees} cây`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#0876c0">Đường khép kín: Số cây = Chu vi : Khoảng cách = ${P} : ${d} = ${trees} cây</text></svg>`,
        hint1: `Trên đường khép kín (vòng tròn), số cây bằng đúng số khoảng cách.`,
        hint2: `Số cây = Chu vi : Khoảng cách giữa 2 cây = ${P} : ${d}.`,
        hint3: `Tính: ${trees} cây.`,
        sol1: `<div class="sol-body">Vì trồng theo đường khép kín nên số cây bằng số khoảng cách.<br>Số cây trồng được là: ${P} : ${d} = ${trees} (cây).<div class="sol-final-text">Đáp số: ${trees} cây</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> $${P} / ${d} = ${trees}$ cây.</div>`
      };
    },
    () => {
      const oil = random(12, 24) * 2, tare = random(2, 5);
      const halfWeight = (oil / 2) + tare, fullWeight = oil + tare;
      return {
        tier: 'gioi', tierLabel: '🟠 Mức GIỎI', archetype: 'Khối lượng vỏ thùng và lượng dầu', domain: '🛢️ Đại lượng',
        text: `Một thùng chứa đầy dầu nặng <b>${fullWeight} kg</b>. Sau khi lấy ra một nửa số dầu thì thùng dầu còn nặng <b>${halfWeight} kg</b>. Hỏi riêng vỏ thùng nặng bao nhiêu ki-lô-gam?`,
        unit: 'kg', answer: tare, answerText: `${tare} kg`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#ff7010">Nửa số dầu = ${fullWeight} - ${halfWeight} = ${oil / 2}kg → Vỏ = ${fullWeight} - ${oil} = ${tare}kg</text></svg>`,
        hint1: `Một nửa số dầu nặng = ${fullWeight} - ${halfWeight} = ${oil / 2} kg.`,
        hint2: `Cả số dầu nặng = ${oil / 2} × 2 = ${oil} kg.`,
        hint3: `Vỏ thùng = ${fullWeight} - ${oil} = ${tare} kg.`,
        sol1: `<div class="sol-body">Một nửa số dầu nặng: ${fullWeight} − ${halfWeight} = ${oil / 2} (kg).<br>Toàn bộ số dầu trong thùng nặng: ${oil / 2} × 2 = ${oil} (kg).<br>Riêng vỏ thùng nặng: ${fullWeight} − ${oil} = ${tare} (kg).<div class="sol-final-text">Đáp số: ${tare} kg</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> Vỏ = {fullWeight} - 2 \× (${fullWeight} - ${halfWeight}) = ${tare}$ kg.</div>`
      };
    },
    () => {
      const c = random(1, 2), b = c * 2, a = b * 2, num = a * 100 + b * 10 + c;
      return {
        tier: 'gioi', tierLabel: '🟠 Mức GIỎI', archetype: 'Tìm số có 3 chữ số biết mối quan hệ các hàng', domain: '🔢 Cấu tạo số',
        text: `Tìm một số có 3 chữ số biết chữ số hàng đơn vị là <b>${c}</b>, chữ số hàng chục <b>gấp 2 lần</b> hàng đơn vị, và chữ số hàng trăm <b>gấp 2 lần</b> hàng chục.`,
        unit: '', answer: num, answerText: `Số ${num}`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#7e42eb">Đơn vị = ${c}, Chục = ${b}, Trăm = ${a} → Số: ${num}</text></svg>`,
        hint1: `Chữ số hàng chục = ${c} × 2 = ${b}.`,
        hint2: `Chữ số hàng trăm = ${b} × 2 = ${a}.`,
        hint3: `Số cần tìm là ${num}.`,
        sol1: `<div class="sol-body">Chữ số hàng chục là: ${c} × 2 = ${b}.<br>Chữ số hàng trăm là: ${b} × 2 = ${a}.<br>Số cần tìm là: ${num}.<div class="sol-final-text">Đáp số: ${num}</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> Số cần tìm = {num}$.</div>`
      };
    }
  ],
  hsg: [
    () => {
      const firstSat = 2;
      const sats = [firstSat, firstSat + 7, firstSat + 14, firstSat + 21, firstSat + 28];
      const ans = sats[2];
      return {
        tier: 'hsg', tierLabel: '🔴 THI HSG', archetype: 'Lịch tháng có 3 ngày thứ Bảy là ngày chẵn', domain: '📅 Lịch học',
        text: `Một tháng nào đó có <b>3 ngày thứ Bảy là ngày chẵn</b>. Hỏi ngày thứ Bảy thứ 3 của tháng đó là ngày mùng mấy?`,
        unit: '', answer: ans, answerText: `Ngày ${ans}`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#7e42eb">Các thứ 7: ${sats.join(', ')} → Thứ 7 thứ 3 là ngày ${ans}</text></svg>`,
        hint1: `Có 3 ngày thứ Bảy chẵn thì tháng đó có 5 ngày thứ Bảy (Chẵn - Lẻ - Chẵn - Lẻ - Chẵn).`,
        hint2: `Thứ Bảy đầu tiên bắt buộc là ngày mùng ${firstSat}.`,
        hint3: `Thứ Bảy thứ 3 là ngày mùng ${ans}.`,
        sol1: `<div class="sol-body">Vì có 3 ngày thứ 7 chẵn nên thứ 7 đầu tiên là ngày mùng ${firstSat}.<br>Các ngày thứ 7 là: ${sats.join(', ')}.<br>Ngày thứ Bảy thứ 3 là ngày mùng ${ans}.<div class="sol-final-text">Đáp số: Ngày ${ans}</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> $${firstSat} + 14 = ${ans}$.</div>`
      };
    },
    () => {
      const n = random(6, 10), d = random(2, 4), a1 = random(4, 10);
      const an = a1 + (n - 1) * d, sum = (a1 + an) * n / 2;
      return {
        tier: 'hsg', tierLabel: '🔴 THI HSG', archetype: 'Tổng số nhãn dán tăng đều mỗi ngày', domain: '⭐ Quy luật',
        text: `Ngày đầu Lan dán <b>${a1} ngôi sao</b> vào sổ. Mỗi ngày sau Lan dán nhiều hơn ngày trước <b>${d} ngôi sao</b>. Sau <b>${n} ngày</b>, ngày cuối Lan dán ${an} ngôi sao. Hỏi Lan đã dán tất cả bao nhiêu ngôi sao?`,
        unit: '', answer: sum, answerText: `${sum}`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#7e42eb">Tổng = (${a1} + ${an}) × ${n} : 2 = ${sum}</text></svg>`,
        hint1: `Công thức: Tổng = (Số đầu + Số cuối) × Số số hạng : 2.`,
        hint2: `Tính: (${a1} + ${an}) × ${n} : 2.`,
        hint3: `Kết quả = ${sum}.`,
        sol1: `<div class="sol-body">Tổng của dãy số là: (${a1} + ${an}) × ${n} : 2 = ${sum}.<div class="sol-final-text">Đáp số: ${sum}</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> ({a1} + ${an}) \× ${n} / 2 = ${sum}$.</div>`
      };
    },
    () => {
      const w = random(6, 12), l = w * 2, totalPerimeter = w * 8;
      return {
        tier: 'hsg', tierLabel: '🔴 THI HSG', archetype: 'Cắt hình và so sánh chu vi', domain: '📐 Hình học',
        text: `Một tấm bìa hình chữ nhật dài <b>${l} cm</b>, rộng <b>${w} cm</b>. Người ta cắt theo đường ở chính giữa chiều dài để được <b>2 hình vuông bằng nhau</b>. Tính tổng chu vi của hai hình vuông.`,
        unit: 'cm', answer: totalPerimeter, answerText: `${totalPerimeter} cm`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#278505">Mỗi hình vuông cạnh ${w} cm → Tổng chu vi = 2 × 4 × ${w} = ${totalPerimeter} cm</text></svg>`,
        hint1: `Vì ${l} = 2 × ${w}, cắt đôi chiều dài sẽ được hai hình vuông cạnh ${w} cm.`,
        hint2: `Chu vi một hình vuông là: ${w} × 4 = ${w * 4} cm.`,
        hint3: `Tổng chu vi hai hình vuông là: ${w * 4} × 2 = ${totalPerimeter} cm.`,
        sol1: `<div class="sol-body">Mỗi hình vuông có cạnh ${w} cm.<br>Chu vi một hình vuông: ${w} × 4 = ${w * 4} (cm).<br>Tổng chu vi hai hình vuông: ${w * 4} × 2 = ${totalPerimeter} (cm).<div class="sol-final-text">Đáp số: ${totalPerimeter} cm</div></div>`,
        sol2: `<div class="sol-body"><b>Cách gộp:</b> 2 × 4 × ${w} = ${totalPerimeter} cm.</div>`
      };
    },
    () => {
      const equalAfter = random(25, 50), moved = random(6, 14);
      const firstBefore = equalAfter + moved, secondBefore = equalAfter - moved;
      return {
        tier: 'hsg', tierLabel: '🔴 THI HSG', archetype: 'Chuyển số lượng để hai bên bằng nhau', domain: '📦 Đại lượng',
        text: `Kho thứ nhất có <b>${firstBefore} thùng hàng</b>, kho thứ hai có <b>${secondBefore} thùng hàng</b>. Người ta chuyển một số thùng từ kho thứ nhất sang kho thứ hai thì hai kho bằng nhau. Hỏi đã chuyển bao nhiêu thùng hàng?`,
        unit: 'thùng', answer: moved, answerText: `${moved} thùng`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#7e42eb">Chênh lệch ${moved * 2} thùng → Mỗi bên thay đổi ${moved} thùng</text></svg>`,
        hint1: `Hai kho chênh nhau: ${firstBefore} - ${secondBefore} = ${moved * 2} thùng.`,
        hint2: `Khi chuyển 1 thùng, kho thứ nhất giảm 1 và kho thứ hai tăng 1 nên chênh lệch giảm 2 thùng.`,
        hint3: `Số thùng cần chuyển là: ${moved * 2} : 2 = ${moved} thùng.`,
        sol1: `<div class="sol-body">Hiệu số thùng của hai kho: ${firstBefore} − ${secondBefore} = ${moved * 2} (thùng).<br>Số thùng cần chuyển: ${moved * 2} : 2 = ${moved} (thùng).<div class="sol-final-text">Đáp số: ${moved} thùng</div></div>`,
        sol2: `<div class="sol-body"><b>Suy luận:</b> Sau khi chuyển, mỗi kho có ${equalAfter} thùng nên kho thứ nhất đã chuyển ${firstBefore} − ${equalAfter} = ${moved} thùng.</div>`
      };
    },
    () => {
      const afterAn = random(15, 30), moved = random(4, 9), total = afterAn * 3;
      const anBefore = afterAn + moved, binhBefore = total - anBefore;
      return {
        tier: 'hsg', tierLabel: '🔴 THI HSG', archetype: 'Chuyển bi làm xuất hiện tỉ số', domain: '🍬 Đại lượng',
        text: `An và Bình có tất cả <b>${total} viên bi</b>. Sau khi An cho Bình <b>${moved} viên</b> thì số bi của Bình gấp <b>2 lần</b> số bi của An. Hỏi lúc đầu An có bao nhiêu viên bi?`,
        unit: 'viên bi', answer: anBefore, answerText: `${anBefore} viên bi`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#7e42eb">Sau khi chuyển: An 1 phần, Bình 2 phần → An trước = ${afterAn} + ${moved}</text></svg>`,
        hint1: `Sau khi chuyển, tổng số bi vẫn là ${total} viên và được chia thành 1 + 2 = 3 phần.`,
        hint2: `Số bi của An sau khi cho là: ${total} : 3 = ${afterAn} viên.`,
        hint3: `Lúc đầu An có: ${afterAn} + ${moved} = ${anBefore} viên bi.`,
        sol1: `<div class="sol-body">Sau khi chuyển, tổng số phần bằng nhau: 1 + 2 = 3 (phần).<br>An còn: ${total} : 3 = ${afterAn} (viên).<br>Lúc đầu An có: ${afterAn} + ${moved} = ${anBefore} (viên bi).<div class="sol-final-text">Đáp số: ${anBefore} viên bi</div></div>`,
        sol2: `<div class="sol-body"><b>Kiểm tra:</b> An còn ${anBefore} − ${moved} = ${afterAn}; Bình có ${binhBefore} + ${moved} = ${afterAn * 2}, đúng gấp đôi.</div>`
      };
    },
    () => {
      const child = random(6, 10), gap1 = random(26, 30), gap2 = random(26, 30);
      const father = child + gap1, grandfather = father + gap2, sum = child + father + grandfather;
      return {
        tier: 'hsg', tierLabel: '🔴 THI HSG', archetype: 'Tuổi tác 3 thế hệ (Ông, Bố, Con)', domain: '⏳ Tuổi tác',
        text: `Tổng số tuổi của ba người (Ông, Bố và Con) là <b>${sum} tuổi</b>. Bố hơn con <b>${gap1} tuổi</b>, Ông hơn bố <b>${gap2} tuổi</b>. Tính số tuổi của con hiện nay.`,
        unit: 'tuổi', answer: child, answerText: `${child} tuổi`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#7e42eb">3 lần tuổi con = ${sum} - ${gap1} - ${gap1+gap2} = ${child*3} → Con = ${child} tuổi</text></svg>`,
        hint1: `Bố hơn con ${gap1} tuổi, Ông hơn con ${gap1 + gap2} tuổi.`,
        hint2: `Ba lần tuổi con = ${sum} - ${gap1} - ${gap1 + gap2} = ${child * 3} tuổi.`,
        hint3: `Tuổi con = ${child * 3} : 3 = ${child} tuổi.`,
        sol1: `<div class="sol-body">Bố hơn con ${gap1} tuổi, Ông hơn con: ${gap1} + ${gap2} = ${gap1 + gap2} (tuổi).<br>Ba lần tuổi con là: ${sum} − ${gap1} − ${gap1 + gap2} = ${child * 3} (tuổi).<br>Tuổi con hiện nay là: ${child * 3} : 3 = ${child} (tuổi).<div class="sol-final-text">Đáp số: ${child} tuổi</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> Con = (${sum} - 2 × ${gap1} - ${gap2}) / 3 = ${child} tuổi.</div>`
      };
    },
    () => {
      const q = random(4, 7), B = random(5, 12), r = random(1, Math.min(5, B - 1)), A = B * q + r;
      const total = A + B + q + r;
      return {
        tier: 'hsg', tierLabel: '🔴 THI HSG', archetype: 'Tìm số bị chia và số chia khi biết thương & dư', domain: '🔢 Phép chia',
        text: `Một phép chia có thương là <b>${q}</b> và số dư là <b>${r}</b>. Tổng của số bị chia, số chia, thương và số dư là <b>${total}</b>. Tìm số bị chia.`,
        unit: '', answer: A, answerText: `${A}`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#0876c0">SBC + SC = ${total - q - r} | SC = (${total - q - 2*r}) : ${q+1} = ${B} → SBC = ${A}</text></svg>`,
        hint1: `Tổng của số bị chia và số chia = ${total} - ${q} - ${r} = ${A + B}.`,
        hint2: `Số bị chia = Số chia × ${q} + ${r} → Số chia = (${A + B} - ${r}) : (${q} + 1) = ${B}.`,
        hint3: `Số bị chia = ${B} × ${q} + ${r} = ${A}.`,
        sol1: `<div class="sol-body">Tổng của số bị chia và số chia là: ${total} − ${q} − ${r} = ${A + B}.<br>Số chia là: (${A + B} − ${r}) : (${q} + 1) = ${B}.<br>Số bị chia là: ${B} × ${q} + ${r} = ${A}.<div class="sol-final-text">Đáp số: ${A}</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> SBC = ${B} × ${q} + ${r} = ${A}.</div>`
      };
    },
    () => {
      const side = random(3, 6), kL = random(3, 5), kW = random(2, 4);
      const L = side * kL, W = side * kW, totalSquares = kL * kW;
      return {
        tier: 'hsg', tierLabel: '🔴 THI HSG', archetype: 'Cắt tấm bìa hình chữ nhật thành hình vuông', domain: '📐 Hình học',
        text: `Một tấm bìa hình chữ nhật dài <b>${L} cm</b> và rộng <b>${W} cm</b>. Người ta cắt tấm bìa đó thành các hình vuông nhỏ bằng nhau có cạnh <b>${side} cm</b>. Hỏi cắt được tất cả bao nhiêu hình vuông nhỏ?`,
        unit: 'hình vuông', answer: totalSquares, answerText: `${totalSquares} hình vuông`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#278505">Số hình = (${L} : ${side}) × (${W} : ${side}) = ${kL} × ${kW} = ${totalSquares}</text></svg>`,
        hint1: `Theo chiều dài cắt được: ${L} : ${side} = ${kL} hình vuông.`,
        hint2: `Theo chiều rộng cắt được: ${W} : ${side} = ${kW} hình vuông.`,
        hint3: `Tổng số hình vuông = ${kL} × ${kW} = ${totalSquares} hình.`,
        sol1: `<div class="sol-body">Theo chiều dài cắt được: ${L} : ${side} = ${kL} (hình).<br>Theo chiều rộng cắt được: ${W} : ${side} = ${kW} (hình).<br>Tổng số hình vuông cắt được là: ${kL} × ${kW} = ${totalSquares} (hình vuông).<div class="sol-final-text">Đáp số: ${totalSquares} hình vuông</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> (${L} × ${W}) / (${side} × ${side}) = ${totalSquares} hình.</div>`
      };
    }
  ]
};;
})();
