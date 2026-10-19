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
  window.LOP5_POOLS = {
  kha: [
    () => {
      const v1 = random(3, 5) * 10, v2 = v1 + random(1, 2) * 10, t = random(2, 4), S = (v1 + v2) * t;
      return {
        tier: 'kha', tierLabel: '🟡 Mức KHÁ', archetype: 'Chuyển động ngược chiều gặp nhau', domain: '🚗 Vận tốc',
        text: `Hai ô tô xuất phát cùng lúc từ A và B cách nhau <b>${S} km</b> và đi ngược chiều nhau. Xe 1 đi với vận tốc <b>${v1} km/h</b>, xe 2 đi với vận tốc <b>${v2} km/h</b>. Hỏi sau mấy giờ hai xe gặp nhau?`,
        unit: 'giờ', answer: t, answerText: `${t} giờ`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#0876c0">S = ${S} km | Vận tốc tổng = ${v1 + v2} km/h → t = ${t} giờ</text></svg>`,
        hint1: `Tổng vận tốc = ${v1} + ${v2} = ${v1 + v2} km/h.`,
        hint2: `Thời gian gặp nhau = Quãng đường : (Tổng vận tốc).`,
        hint3: `Tính: ${S} : ${v1 + v2} = ${t} giờ.`,
        sol1: `<div class="sol-body">Sau mỗi giờ hai xe đi được: ${v1} + ${v2} = ${v1 + v2} (km).<br>Thời gian gặp nhau: ${S} : ${v1 + v2} = ${t} (giờ).<div class="sol-final-text">Đáp số: ${t} giờ</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> t = {S} / (${v1} + ${v2}) = ${t}$ giờ.</div>`
      };
    },
    () => {
      const rate = pick([40, 50, 60, 75]);
      const validTotals = rate === 75 ? [32, 36, 40]
        : rate === 50 ? [30, 32, 34, 36, 38, 40]
        : [30, 35, 40];
      const totalSt = pick(validTotals), female = (totalSt * rate) / 100;
      return {
        tier: 'kha', tierLabel: '🟡 Mức KHÁ', archetype: 'Tỉ số phần trăm của hai số', domain: '🏫 Lớp học',
        text: `Một lớp học có <b>${totalSt} học sinh</b>, trong đó có <b>${female} bạn nữ</b>. Tính tỉ số phần trăm của số bạn nữ so với cả lớp.`,
        unit: '%', answer: rate, answerText: `${rate}%`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#278505">Tỉ số % = (${female} : ${totalSt}) × 100% = ${rate}%</text></svg>`,
        hint1: `Tỉ số % = (Số nữ : Tổng số) × 100%.`,
        hint2: `Tính: (${female} : ${totalSt}) × 100%.`,
        hint3: `Kết quả = ${rate}%.`,
        sol1: `<div class="sol-body">Tỉ số phần trăm là: (${female} : ${totalSt}) × 100% = ${rate}%.<div class="sol-final-text">Đáp số: ${rate}%</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> ({female} / ${totalSt}) × 100 = ${rate}$%.</div>`
      };
    },
    () => {
      const v1 = random(12, 18), v2 = v1 + random(20, 30), t = random(2, 4), S = (v2 - v1) * t;
      return {
        tier: 'kha', tierLabel: '🟡 Mức KHÁ', archetype: 'Chuyển động cùng chiều đuổi nhau', domain: '🚗 Vận tốc',
        text: `Một người đi xe đạp với vận tốc <b>${v1} km/h</b>. Cùng lúc đó tại điểm cách người đi xe đạp <b>${S} km</b>, một ô tô đi cùng chiều đuổi theo với vận tốc <b>${v2} km/h</b>. Hỏi sau mấy giờ ô tô đuổi kịp xe đạp?`,
        unit: 'giờ', answer: t, answerText: `${t} giờ`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#ff7010">Hiệu vận tốc = ${v2 - v1} km/h → t = ${S}/${v2 - v1} = ${t} giờ</text></svg>`,
        hint1: `Hiệu vận tốc 2 xe = ${v2} - ${v1} = ${v2 - v1} km/h.`,
        hint2: `Thời gian đuổi kịp = Khoảng cách : (Hiệu vận tốc).`,
        hint3: `Tính: ${S} : ${v2 - v1} = ${t} giờ.`,
        sol1: `<div class="sol-body">Sau mỗi giờ ô tô rút ngắn: ${v2} − ${v1} = ${v2 - v1} (km).<br>Thời gian ô tô đuổi kịp: ${S} : ${v2 - v1} = ${t} (giờ).<div class="sol-final-text">Đáp số: ${t} giờ</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> t = {S} / (${v2} - ${v1}) = ${t}$ giờ.</div>`
      };
    },
    () => {
      const capital = random(10, 50) * 1000000, rate = pick([0.5, 0.6, 0.8]), interest = (capital * rate) / 100;
      return {
        tier: 'kha', tierLabel: '🟡 Mức KHÁ', archetype: 'Tính giá trị phần trăm (Lãi suất tiết kiệm)', domain: '💰 Tiền gửi',
        text: `Bác gửi tiết kiệm <b>${formatNum(capital)} đồng</b> với lãi suất <b>${rate}% một tháng</b>. Hỏi sau một tháng bác nhận được bao nhiêu tiền lãi?`,
        unit: 'đồng', answer: interest, answerText: `${formatNum(interest)} đồng`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#0876c0">Lãi = ${formatNum(capital)} × ${rate}% = ${formatNum(interest)} đồng</text></svg>`,
        hint1: `Tiền lãi = Tiền gửi × Lãi suất.`,
        hint2: `Tính: ${capital} × ${rate} : 100.`,
        hint3: `Kết quả = ${formatNum(interest)} đồng.`,
        sol1: `<div class="sol-body">Tiền lãi sau một tháng là: ${capital} × ${rate} : 100 = ${formatNum(interest)} (đồng).<div class="sol-final-text">Đáp số: ${formatNum(interest)} đồng</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> $${capital} × ${rate} / 100 = ${formatNum(interest)}$ đồng.</div>`
      };
    }
  ],
  gioi: [
    () => {
      const tCatch = pick([2, 3, 4]), leadHours = pick([1, 2]);
      const speedGap = random(5, 10) * 2;
      const v1 = speedGap * tCatch / leadHours, v2 = v1 + speedGap;
      const leadDist = v1 * leadHours;
      return {
        tier: 'gioi', tierLabel: '🟠 Mức GIỎI', archetype: 'Chuyển động đuổi nhau lệch thời gian', domain: '🚗 Vận tốc',
        text: `Xe máy đi từ A với vận tốc <b>${v1} km/h</b>. Sau <b>${leadHours} giờ</b>, một ô tô từ A đuổi theo với vận tốc <b>${v2} km/h</b>. Hỏi sau bao lâu ô tô đuổi kịp xe máy?`,
        unit: 'giờ', answer: tCatch, answerText: `${tCatch} giờ`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#ff7010">Đi trước: ${leadDist} km | Hiệu v = ${v2 - v1} km/h → t = ${tCatch} giờ</text></svg>`,
        hint1: `Quãng đường xe máy đi trước = ${v1} × ${leadHours} = ${leadDist} km.`,
        hint2: `Hiệu vận tốc = ${v2} - ${v1} = ${v2 - v1} km/h.`,
        hint3: `Thời gian đuổi kịp = ${leadDist} : ${v2 - v1} = ${tCatch} giờ.`,
        sol1: `<div class="sol-body">Xe máy đi trước: ${v1} × ${leadHours} = ${leadDist} (km).<br>Hiệu vận tốc: ${v2} − ${v1} = ${v2 - v1} (km/h).<br>Thời gian đuổi kịp: ${leadDist} : ${v2 - v1} = ${tCatch} (giờ).<div class="sol-final-text">Đáp số: ${tCatch} giờ</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> t = ({v1} × ${leadHours}) / (${v2} - ${v1}) = ${tCatch}$ giờ.</div>`
      };
    },
    () => {
      const t1 = 4, t2 = 6, tTotal = 2.4;
      return {
        tier: 'gioi', tierLabel: '🟠 Mức GIỎI', archetype: 'Công việc chung (Hai vòi nước)', domain: '🚰 Bể nước',
        text: `Vòi 1 chảy một mình mất <b>${t1} giờ</b> đầy bể, vòi 2 chảy một mình mất <b>${t2} giờ</b> đầy bể. Hỏi cả hai vòi cùng chảy sau bao lâu đầy bể?`,
        unit: 'giờ', answer: tTotal, answerText: '2.4 giờ (tức 2 giờ 24 phút)',
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#7e42eb">1 giờ cả 2 vòi: 1/4 + 1/6 = 5/12 bể → Đầy sau: 12/5 = 2.4 giờ</text></svg>`,
        hint1: `1 giờ vòi 1 chảy 1/${t1} bể, vòi 2 chảy 1/${t2} bể.`,
        hint2: `1 giờ cả 2 vòi chảy: 1/${t1} + 1/${t2} = 5/12 bể.`,
        hint3: `Thời gian đầy bể = 1 : (5/12) = 2.4 giờ.`,
        sol1: `<div class="sol-body">Trong 1 giờ cả hai vòi chảy: 1/${t1} + 1/${t2} = 5/12 (bể).<br>Thời gian đầy bể: 1 : (5/12) = 2.4 (giờ).<div class="sol-final-text">Đáp số: 2.4 giờ</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> ({t1} × ${t2}) / (${t1} + ${t2}) = 2.4$ giờ.</div>`
      };
    },
    () => {
      const sellPrice = random(15, 30) * 100000, profitRate = 20, capital = (sellPrice * (100 - profitRate)) / 100;
      return {
        tier: 'gioi', tierLabel: '🟠 Mức GIỎI', archetype: 'Tỉ số % kinh doanh: Lãi theo giá bán', domain: '💰 Kinh doanh',
        text: `Một cửa hàng bán chiếc xe đạp giá <b>${formatNum(sellPrice)} đồng</b> và lãi <b>${profitRate}% theo giá bán</b>. Hỏi giá vốn chiếc xe đạp là bao nhiêu?`,
        unit: 'đồng', answer: capital, answerText: `${formatNum(capital)} đồng`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#278505">Giá vốn = Giá bán × (100% - 20%) = ${formatNum(capital)} đồng</text></svg>`,
        hint1: `Giá vốn chiếm: 100% - ${profitRate}% = 80% giá bán.`,
        hint2: `Giá vốn = ${sellPrice} × 80 : 100.`,
        hint3: `Tính: ${formatNum(capital)} đồng.`,
        sol1: `<div class="sol-body">Giá vốn chiếm: 100% − ${profitRate}% = 80% (giá bán).<br>Giá vốn là: ${sellPrice} × 80 : 100 = ${formatNum(capital)} (đồng).<div class="sol-final-text">Đáp số: ${formatNum(capital)} đồng</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> $${sellPrice} × (1 - 0.2) = ${formatNum(capital)}$ đồng.</div>`
      };
    },
    () => {
      const capital = random(20, 80) * 10000, profitRate = pick([15, 20, 25, 30]), sellPrice = Math.round(capital * (1 + profitRate / 100));
      return {
        tier: 'gioi', tierLabel: '🟠 Mức GIỎI', archetype: 'Tỉ số % kinh doanh: Lãi theo giá vốn', domain: '💰 Kinh doanh',
        text: `Một người mua chiếc quạt giá <b>${formatNum(capital)} đồng</b>. Người đó muốn bán lãi <b>${profitRate}% so với giá vốn</b> thì phải bán chiếc quạt với giá bao nhiêu?`,
        unit: 'đồng', answer: sellPrice, answerText: `${formatNum(sellPrice)} đồng`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#0876c0">Giá bán = ${formatNum(capital)} × ${100 + profitRate}% = ${formatNum(sellPrice)} đồng</text></svg>`,
        hint1: `Coi giá vốn là 100% thì giá bán phải bằng: 100% + ${profitRate}% = ${100 + profitRate}% giá vốn.`,
        hint2: `Giá bán = ${capital} × ${100 + profitRate} : 100.`,
        hint3: `Tính: ${formatNum(sellPrice)} đồng.`,
        sol1: `<div class="sol-body">Giá bán chiếm: 100% + ${profitRate}% = ${100 + profitRate}% (giá vốn).<br>Giá bán là: ${capital} × ${100 + profitRate} : 100 = ${formatNum(sellPrice)} (đồng).<div class="sol-final-text">Đáp số: ${formatNum(sellPrice)} đồng</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> $${capital} × ${1 + profitRate / 100} = ${formatNum(sellPrice)}$ đồng.</div>`
      };
    },
    () => {
      const sABC = random(6, 18) * 30, sABD = sABC / 3;
      return {
        tier: 'gioi', tierLabel: '🟠 Mức GIỎI', archetype: 'Tỉ số diện tích tam giác chung chiều cao', domain: '📐 Hình học',
        text: `Cho tam giác ABC có diện tích là <b>${sABC} cm²</b>. Trên cạnh BC lấy điểm D sao cho <b>BD = 1/3 BC</b>. Tính diện tích tam giác ABD.`,
        unit: 'cm²', answer: sABD, answerText: `${sABD} cm²`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#7e42eb">S_ABD = 1/3 S_ABC = ${sABC} : 3 = ${sABD} cm²</text></svg>`,
        hint1: `Tam giác ABD và tam giác ABC có chung chiều cao hạ từ đỉnh A xuống đáy BC.`,
        hint2: `Vì đáy BD = 1/3 BC nên Diện tích tam giác ABD = 1/3 Diện tích tam giác ABC.`,
        hint3: `Tính: ${sABC} : 3 = ${sABD} cm².`,
        sol1: `<div class="sol-body">Tam giác ABD và ABC có chung chiều cao hạ từ A, đáy BD = 1/3 BC nên:<br>S(ABD) = 1/3 × S(ABC) = ${sABC} : 3 = ${sABD} (cm²).<div class="sol-final-text">Đáp số: ${sABD} cm²</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> S_{\ABD} = {sABC} / 3 = ${sABD}$ cm².</div>`
      };
    },
    () => {
      const v1 = random(3, 5) * 10, v2 = random(4, 6) * 10, S = (v1 + v2) * 2, distMeetA = v1 * 2;
      return {
        tier: 'gioi', tierLabel: '🟠 Mức GIỎI', archetype: 'Chuyển động ngược chiều: Điểm gặp cách A', domain: '🚗 Vận tốc',
        text: `Hai xe cùng xuất phát từ A và B cách nhau <b>${S} km</b> đi ngược chiều nhau với vận tốc <b>${v1} km/h</b> và <b>${v2} km/h</b>. Hỏi chỗ hai xe gặp nhau cách A bao nhiêu ki-lô-mét?`,
        unit: 'km', answer: distMeetA, answerText: `${distMeetA} km`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#ff7010">Gặp nhau sau 2h → Cách A: ${v1} × 2 = ${distMeetA} km</text></svg>`,
        hint1: `Thời gian 2 xe gặp nhau = ${S} : (${v1} + ${v2}) = 2 giờ.`,
        hint2: `Khoảng cách từ điểm gặp đến A = Vận tốc xe 1 × Thời gian đi = ${v1} × 2.`,
        hint3: `Tính: ${distMeetA} km.`,
        sol1: `<div class="sol-body">Thời gian hai xe gặp nhau: ${S} : (${v1} + ${v2}) = 2 (giờ).<br>Chỗ gặp nhau cách A là: ${v1} × 2 = ${distMeetA} (km).<div class="sol-final-text">Đáp số: ${distMeetA} km</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> $${v1} × 2 = ${distMeetA}$ km.</div>`
      };
    },
    () => {
      const tIn = 3, tOut = 5, tFill = 7.5;
      return {
        tier: 'gioi', tierLabel: '🟠 Mức GIỎI', archetype: 'Vòi chảy vào và vòi tháo ra', domain: '🚰 Bể nước',
        text: `Vòi 1 chảy vào bể mất <b>${tIn} giờ</b> đầy, vòi 2 tháo nước ra mất <b>${tOut} giờ</b> cạn bể. Nếu mở cả 2 vòi cùng lúc thì sau bao lâu đầy bể?`,
        unit: 'giờ', answer: tFill, answerText: '7.5 giờ (tức 7 giờ 30 phút)',
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#0876c0">1 giờ nước vào: 1/3 - 1/5 = 2/15 bể → Đầy sau: 15/2 = 7.5 giờ</text></svg>`,
        hint1: `1 giờ vòi 1 chảy vào 1/3 bể, vòi 2 tháo ra 1/5 bể.`,
        hint2: `1 giờ lượng nước tăng thêm: 1/3 - 1/5 = 2/15 bể.`,
        hint3: `Thời gian đầy bể = 1 : (2/15) = 7.5 giờ.`,
        sol1: `<div class="sol-body">Trong 1 giờ lượng nước vào bể là: 1/3 − 1/5 = 2/15 (bể).<br>Thời gian để đầy bể là: 1 : (2/15) = 7.5 (giờ).<div class="sol-final-text">Đáp số: 7.5 giờ</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> (3 × 5) / (5 - 3) = 7.5 giờ.</div>`
      };
    },
    () => {
      const a = random(15, 25), b = random(10, 20), hRise = random(2, 5), stoneVol = a * b * hRise;
      return {
        tier: 'gioi', tierLabel: '🟠 Mức GIỎI', archetype: 'Thể tích hình hộp: Mực nước dâng lên', domain: '🧊 Thể tích',
        text: `Một bể nước hình hộp chữ nhật có đáy dài <b>${a} cm</b>, rộng <b>${b} cm</b>. Khi thả một hòn đá vào bể, mực nước trong bể dâng cao thêm <b>${hRise} cm</b>. Tính thể tích hòn đá.`,
        unit: 'cm³', answer: stoneVol, answerText: `${stoneVol} cm³`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#278505">V_đá = ${a} × ${b} × ${hRise} = ${stoneVol} cm³</text></svg>`,
        hint1: `Thể tích hòn đá bằng thể tích của khối nước dâng lên.`,
        hint2: `Thể tích nước dâng = Dài × Rộng × Chiều cao dâng thêm = ${a} × ${b} × ${hRise}.`,
        hint3: `Tính: ${stoneVol} cm³.`,
        sol1: `<div class="sol-body">Thể tích hòn đá bằng thể tích nước dâng lên:<br>V = ${a} × ${b} × ${hRise} = ${stoneVol} (cm³).<div class="sol-final-text">Đáp số: ${stoneVol} cm³</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> $${a} × ${b} × ${hRise} = ${stoneVol}$ cm³.</div>`
      };
    }
  ],
  hsg: [
    () => {
      const v = random(12, 18), tPole = random(10, 15), tBridge = random(20, 30);
      const bridge = v * tBridge, tTotal = tPole + tBridge, trainLen = v * tPole;
      return {
        tier: 'hsg', tierLabel: '🔴 THI HSG', archetype: 'Đoàn tàu vượt chướng ngại vật (Cột điện & Cầu)', domain: '🚂 Chuyển động',
        text: `Một đoàn tàu hỏa chạy qua một cột điện mất <b>${tPole} giây</b>, và vượt qua cây cầu dài <b>${bridge} m</b> mất <b>${tTotal} giây</b>. Tính chiều dài đoàn tàu.`,
        unit: 'm', answer: trainLen, answerText: `${trainLen} m`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#7e42eb">Tàu qua ${bridge}m cầu trong ${tBridge}s → v = ${v}m/s → L = ${trainLen}m</text></svg>`,
        hint1: `Thời gian đi riêng chiều dài cây cầu = ${tTotal} - ${tPole} = ${tBridge} giây.`,
        hint2: `Vận tốc đoàn tàu = ${bridge} : ${tBridge} = ${v} m/s.`,
        hint3: `Chiều dài đoàn tàu = ${v} × ${tPole} = ${trainLen} m.`,
        sol1: `<div class="sol-body">Thời gian tàu đi riêng chiều dài cây cầu là: ${tTotal} − ${tPole} = ${tBridge} (giây).<br>Vận tốc đoàn tàu: ${bridge} : ${tBridge} = ${v} (m/giây).<br>Chiều dài đoàn tàu: ${v} × ${tPole} = ${trainLen} (m).<div class="sol-final-text">Đáp số: ${trainLen} m</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> L_{\tàu} = ({bridge} / ${tBridge}) × ${tPole} = ${trainLen}$ m.</div>`
      };
    },
    () => {
      const vStream = random(2, 4), tDown = 2, tUp = 3;
      const distAB = (2 * vStream * tDown * tUp) / (tUp - tDown);
      return {
        tier: 'hsg', tierLabel: '🔴 THI HSG', archetype: 'Ca-nô xuôi dòng và ngược dòng', domain: '🚤 Dòng nước',
        text: `Một ca-nô đi xuôi dòng từ A đến B mất <b>${tDown} giờ</b>, đi ngược dòng từ B về A mất <b>${tUp} giờ</b>. Biết vận tốc dòng nước là <b>${vStream} km/h</b>. Tính khoảng cách AB.`,
        unit: 'km', answer: distAB, answerText: `${distAB} km`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#7e42eb">V_xuôi - V_ngược = 2 × ${vStream} = ${2 * vStream} km/h → AB = ${distAB} km</text></svg>`,
        hint1: `Hiệu vận tốc xuôi và ngược = 2 × Vận tốc nước = ${2 * vStream} km/h.`,
        hint2: `Tỉ số thời gian là 2/3 nên tỉ số vận tốc xuôi/ngược là 3/2.`,
        hint3: `Vận tốc xuôi dòng = ${2 * vStream * 3} km/h → AB = ${distAB} km.`,
        sol1: `<div class="sol-body">Hiệu vận tốc xuôi và ngược dòng là: 2 × ${vStream} = ${2 * vStream} (km/h).<br>Tỉ số thời gian xuôi/ngược là 2/3 nên tỉ số vận tốc xuôi/ngược là 3/2.<br>Vận tốc xuôi dòng là: ${2 * vStream} : (3 − 2) × 3 = ${2 * vStream * 3} (km/h).<br>Quãng đường AB là: ${2 * vStream * 3} × ${tDown} = ${distAB} (km).<div class="sol-final-text">Đáp số: ${distAB} km</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> AB = (2 × {vStream} × 2 × 3) / (3 - 2) = ${distAB}$ km.</div>`
      };
    },
    () => {
      return {
        tier: 'hsg', tierLabel: '🔴 THI HSG', archetype: 'Tỉ số % giảm giá kép (Sale 2 lần liên tiếp)', domain: '💰 Kinh doanh',
        text: `Nhân dịp lễ, cửa hàng hạ giá <b>10% giá niêm yết</b>. Vẫn không bán được, cửa hàng hạ tiếp <b>10% theo giá đã hạ</b> và bán được hàng. Sau khi bán vẫn lãi <b>8% giá vốn</b>. Hỏi giá niêm yết ban đầu bằng bao nhiêu phần trăm giá vốn?`,
        unit: '%', answer: 400 / 3, tolerance: 0.05, answerText: '133.3% (hoặc 400/3 %)',
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#7e42eb">Giá bán = 90% × 90% = 81% Niêm yết = 108% Vốn → Niêm yết = 108/81 = 133.3% Vốn</text></svg>`,
        hint1: `Giá bán thực tế = 90% × 90% = 81% giá niêm yết.`,
        hint2: `Vì lãi 8% giá vốn nên giá bán = 108% giá vốn.`,
        hint3: `Giá niêm yết so với giá vốn = (108 : 81) × 100% = 133.33%.`,
        sol1: `<div class="sol-body">Giá bán thực tế so với giá niêm yết là: 90% × 90% = 81% (giá niêm yết).<br>Vì lãi 8% so với vốn nên giá bán bằng 108% giá vốn.<br>Giá niêm yết so với giá vốn là: (108 : 81) × 100% ≈ 133.3%.<div class="sol-final-text">Đáp số: 133.3% (hay 400/3 %)</div></div>`,
        sol2: `<div class="sol-body"><b>Kiểm tra:</b> 133.333333% × 90% × 90% ≈ 108% giá vốn.</div>`
      };
    },
    () => {
      const sABC = random(2, 8) * 90, sABD = sABC / 3, ans = (sABD * 2) / 3;
      return {
        tier: 'hsg', tierLabel: '🔴 THI HSG', archetype: 'Tỉ số diện tích tam giác cắt ghép (S_ABE / S_ABC)', domain: '📐 Hình học',
        text: `Cho tam giác ABC có diện tích <b>${sABC} cm²</b>. Trên cạnh BC lấy điểm D sao cho <b>BD = 1/3 BC</b>. Trên đoạn AD lấy điểm E sao cho <b>AE = 2/3 AD</b>. Tính diện tích tam giác ABE.`,
        unit: 'cm²', answer: ans, answerText: `${ans} cm²`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#7e42eb">S_ABD = 1/3 S_ABC = ${sABD} cm² → S_ABE = 2/3 S_ABD = ${ans} cm²</text></svg>`,
        hint1: `S(ABD) = 1/3 × S(ABC) = ${sABC} : 3 = ${sABD} cm² (chung chiều cao hạ từ A).`,
        hint2: `S(ABE) = 2/3 × S(ABD) = ${sABD} × 2/3 = ${ans} cm² (chung chiều cao hạ từ B).`,
        hint3: `Tính: ${ans} cm².`,
        sol1: `<div class="sol-body">Ta có: S(ABD) = 1/3 × S(ABC) = ${sABC} : 3 = ${sABD} (cm²).<br>Lại có: S(ABE) = 2/3 × S(ABD) = ${sABD} × 2 : 3 = ${ans} (cm²).<div class="sol-final-text">Đáp số: ${ans} cm²</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> S_{\ABE} = {sABC} × (1/3) × (2/3) = ${ans}$ cm².</div>`
      };
    },
    () => {
      const vTrain = 54, vWalk = 5.4, relV = 16.5, tPass = random(10, 16), trainLen = relV * tPass;
      return {
        tier: 'hsg', tierLabel: '🔴 THI HSG', archetype: 'Đoàn tàu vượt người đi bộ ngược chiều', domain: '🚂 Chuyển động',
        text: `Một đoàn tàu chạy với vận tốc <b>54 km/h</b> vượt qua một người đi bộ đi ngược chiều với vận tốc <b>5.4 km/h</b> mất <b>${tPass} giây</b>. Tính chiều dài của đoàn tàu.`,
        unit: 'm', answer: trainLen, answerText: `${trainLen} m`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#7e42eb">V_tương đối = 54 + 5.4 = 59.4 km/h = 16.5 m/s → L_tàu = 16.5 × ${tPass} = ${trainLen}m</text></svg>`,
        hint1: `Vận tốc tương đối = 54 + 5.4 = 59.4 km/h = 16.5 m/s.`,
        hint2: `Chiều dài đoàn tàu = 16.5 × ${tPass}.`,
        hint3: `Tính: ${trainLen} m.`,
        sol1: `<div class="sol-body">Vận tốc của đoàn tàu so với người đi bộ là: 54 + 5.4 = 59.4 (km/h) = 16.5 (m/giây).<br>Chiều dài đoàn tàu là: 16.5 × ${tPass} = ${trainLen} (m).<div class="sol-final-text">Đáp số: ${trainLen} m</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> L_{\tàu} = 16.5 × {tPass} = ${trainLen}$ m.</div>`
      };
    },
    () => {
      const rabbitLead = random(3, 6) * 10;
      const dogSteps = rabbitLead * 2;
      return {
        tier: 'hsg', tierLabel: '🔴 THI HSG', archetype: 'Chó đuổi thỏ (Tỉ số bước nhảy)', domain: '🐕 Bước nhảy',
        text: `Thỏ ở cách chó <b>${rabbitLead} bước nhảy của thỏ</b>. Mỗi khi thỏ nhảy 3 bước thì chó nhảy 2 bước. Một bước của chó bằng 2 bước của thỏ. Hỏi chó phải nhảy bao nhiêu bước mới đuổi kịp thỏ?`,
        unit: 'bước', answer: dogSteps, answerText: `${dogSteps} bước chó`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#7e42eb">1 lượt: Chó đi 4 bước thỏ, thỏ đi 3 bước thỏ → Rút ngắn 1 bước thỏ → Chó nhảy ${dogSteps} bước</text></svg>`,
        hint1: `Khi chó nhảy 2 bước thì đi được quãng đường bằng: 2 × 2 = 4 bước thỏ.`,
        hint2: `Sau mỗi lượt (chó nhảy 2 bước, thỏ nhảy 3 bước), khoảng cách rút ngắn: 4 - 3 = 1 bước thỏ.`,
        hint3: `Số lượt nhảy cần thiết = ${rabbitLead} : 1 = ${rabbitLead} lượt → Số bước chó nhảy = ${rabbitLead} × 2 = ${dogSteps} bước.`,
        sol1: `<div class="sol-body">Quãng đường chó đi trong 2 bước bằng: 2 × 2 = 4 (bước thỏ).<br>Mỗi lượt chó rút ngắn được: 4 − 3 = 1 (bước thỏ).<br>Để đuổi kịp, chó cần nhảy số lượt là: ${rabbitLead} : 1 = ${rabbitLead} (lượt).<br>Chó phải nhảy tất cả: ${rabbitLead} × 2 = ${dogSteps} (bước).<div class="sol-final-text">Đáp số: ${dogSteps} bước</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> Số bước chó = {rabbitLead} × 2 = ${dogSteps}$ bước.</div>`
      };
    },
    () => {
      return {
        tier: 'hsg', tierLabel: '🔴 THI HSG', archetype: 'Công việc chung của 3 người', domain: '👷 Lao động',
        text: `Ba người cùng làm một công việc. Người thứ nhất làm một mình mất <b>6 giờ</b>, người thứ hai mất <b>10 giờ</b>, người thứ ba mất <b>15 giờ</b>. Hỏi cả ba người cùng làm thì sau bao lâu sẽ hoàn thành công việc?`,
        unit: 'giờ', answer: 3, answerText: '3 giờ',
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#7e42eb">1 giờ 3 người: 1/6 + 1/10 + 1/15 = 1/3 công việc → Hoàn thành trong 3 giờ</text></svg>`,
        hint1: `1 giờ: Người 1 làm 1/6, người 2 làm 1/10, người 3 làm 1/15 công việc.`,
        hint2: `1 giờ cả 3 người làm: 1/6 + 1/10 + 1/15 = 10/30 = 1/3 công việc.`,
        hint3: `Thời gian hoàn thành = 1 : (1/3) = 3 giờ.`,
        sol1: `<div class="sol-body">Trong 1 giờ cả 3 người cùng làm được: 1/6 + 1/10 + 1/15 = 10/30 = 1/3 (công việc).<br>Thời gian để cả ba người hoàn thành công việc là: 1 : (1/3) = 3 (giờ).<div class="sol-final-text">Đáp số: 3 giờ</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> 1 / (1/6 + 1/10 + 1/15) = 3 giờ.</div>`
      };
    },
    () => {
      const unit = random(40, 80), sum = unit * 9, ansA = unit * 2;
      return {
        tier: 'hsg', tierLabel: '🔴 THI HSG', archetype: 'Tỉ số kép 3 đại lượng nối tiếp', domain: '🌾 Kho thóc',
        text: `Ba kho thóc có tất cả <b>${sum} tạ thóc</b>. Biết số thóc kho A bằng <b>2/3 số thóc kho B</b>, số thóc kho B bằng <b>3/4 số thóc kho C</b>. Tính số thóc ở kho A.`,
        unit: 'tạ', answer: ansA, answerText: `${ansA} tạ`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#7e42eb">Kho A : Kho B : Kho C = 2 : 3 : 4 (Tổng 9 phần = ${sum} tạ) → Kho A = ${ansA} tạ</text></svg>`,
        hint1: `Kho A = 2 phần, Kho B = 3 phần, Kho C = 4 phần.`,
        hint2: `Tổng số phần bằng nhau: 2 + 3 + 4 = 9 phần.`,
        hint3: `Số thóc kho A = ${sum} : 9 × 2 = ${ansA} tạ.`,
        sol1: `<div class="sol-body">Tỉ số giữa 3 kho là A : B : C = 2 : 3 : 4.<br>Tổng số phần bằng nhau là: 2 + 3 + 4 = 9 (phần).<br>Số thóc kho A là: ${sum} : 9 × 2 = ${ansA} (tạ).<div class="sol-final-text">Đáp số: ${ansA} tạ</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> Kho A = {sum} × (2 / 9) = ${ansA}$ tạ.</div>`
      };
    },
    () => {
      const lap = pick([300, 400, 500, 600]), vDiff = pick([2, 4, 5]), tMeet = lap / vDiff;
      const v2 = pick([3, 4, 5]), v1 = v2 + vDiff;
      return {
        tier: 'hsg', tierLabel: '🔴 THI HSG', archetype: 'Chuyển động vòng tròn cùng chiều gặp nhau', domain: '🏃 Điền kinh',
        text: `Hai vận động viên chạy cùng chiều quanh một đường đua khép kín dài <b>${lap} m</b> cùng xuất phát từ một điểm. Vận động viên 1 chạy với vận tốc <b>${v1} m/s</b>, vận động viên 2 chạy với vận tốc <b>${v2} m/s</b>. Hỏi sau bao nhiêu giây thì người thứ nhất vượt người thứ hai lần đầu tiên?`,
        unit: 'giây', answer: tMeet, answerText: `${tMeet} giây`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#7e42eb">Hiệu v = ${vDiff} m/s → Vượt 1 vòng (${lap}m) sau: ${lap} / ${vDiff} = ${tMeet} giây</text></svg>`,
        hint1: `Để vượt người thứ hai lần đầu, người thứ nhất phải chạy hơn đúng 1 vòng sân (${lap} m).`,
        hint2: `Hiệu vận tốc giữa 2 người = ${v1} - ${v2} = ${vDiff} m/s.`,
        hint3: `Thời gian gặp lại = ${lap} : ${vDiff} = ${tMeet} giây.`,
        sol1: `<div class="sol-body">Để vượt lần đầu tiên, người thứ nhất cần chạy nhiều hơn người thứ hai đúng 1 vòng sân (${lap} m).<br>Hiệu vận tốc hai người là: ${v1} − ${v2} = ${vDiff} (m/giây).<br>Thời gian để người thứ nhất vượt là: ${lap} : ${vDiff} = ${tMeet} (giây).<div class="sol-final-text">Đáp số: ${tMeet} giây</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> t = {lap} / (${v1} - ${v2}) = ${tMeet}$ giây.</div>`
      };
    },
    () => {
      const m1 = pick([100, 200, 300, 400]), c1 = 5, c2 = 2;
      const mSalt = (m1 * c1) / 100, mNew = (mSalt * 100) / c2, extraWater = mNew - m1;
      return {
        tier: 'hsg', tierLabel: '🔴 THI HSG', archetype: 'Toán nồng độ dung dịch & pha chế nước muối', domain: '🧪 Pha chế',
        text: `Có <b>${m1} g dung dịch nước muối</b> nồng độ <b>${c1}%</b>. Hỏi phải đổ thêm vào bao nhiêu gam nước lọc để thu được dung dịch nước muối mới có nồng độ <b>${c2}%</b>?`,
        unit: 'g', answer: extraWater, answerText: `${extraWater} g nước lọc`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#7e42eb">Muối = ${mSalt}g → Dung dịch mới = ${mSalt}/0.02 = ${mNew}g → Thêm ${extraWater}g nước</text></svg>`,
        hint1: `Khối lượng muối nguyên chất trong dung dịch = ${m1} × ${c1}% = ${mSalt} g (không đổi).`,
        hint2: `Lấy lượng muối chia cho nồng độ mới: ${mSalt} : ${c2}% = ${mNew} g.`,
        hint3: `Lượng nước lọc cần thêm = ${mNew} - ${m1} = ${extraWater} g.`,
        sol1: `<div class="sol-body">Khối lượng muối nguyên chất là: ${m1} × ${c1}% = ${mSalt} (g).<br>Khối lượng dung dịch mới là: ${mSalt} : ${c2}% = ${mNew} (g).<br>Lượng nước lọc cần đổ thêm là: ${mNew} − ${m1} = ${extraWater} (g).<div class="sol-final-text">Đáp số: ${extraWater} g</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> Thêm = (${m1} × 5 / 2) - ${m1} = ${extraWater} g.</div>`
      };
    },
    () => {
      return {
        tier: 'hsg', tierLabel: '🔴 THI HSG', archetype: 'Toán đồng hồ: Hai kim trùng nhau', domain: '⏰ Đồng hồ',
        text: 'Bây giờ là đúng <b>6 giờ đúng</b> (hai kim đồng hồ thẳng hàng nhau). Hỏi sau ít nhất bao nhiêu phút nữa thì kim phút lại đuổi kịp và <b>trùng khít lên kim giờ</b>?',
        unit: 'phút', answer: 360 / 11, tolerance: 0.05, answerText: '32.7 phút (tức 360/11 phút ≈ 32 phút 43 giây)',
        diagramSvg: '<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#7e42eb">Khoảng cách = 30 phút | Hiệu v = 11/12 vạch/phút → t = 30 / (11/12) = 32.7 phút</text></svg>',
        hint1: 'Lúc 6 giờ, khoảng cách giữa 2 kim là 30 khoảng phút.',
        hint2: 'Mỗi phút kim phút đi 1 khoảng, kim giờ đi 1/12 khoảng → Hiệu vận tốc = 11/12 khoảng/phút.',
        hint3: 'Thời gian đuổi kịp = 30 : (11/12) = 360/11 ≈ 32.7 phút.',
        sol1: '<div class="sol-body">Lúc 6 giờ, khoảng cách giữa 2 kim là 30 khoảng phút.<br>Hiệu vận tốc hai kim là: 1 − 1/12 = 11/12 (khoảng/phút).<br>Thời gian để kim phút đuổi kịp kim giờ là: 30 : (11/12) = 360/11 ≈ 32.7 (phút).<div class="sol-final-text">Đáp số: 32.7 phút (hay 360/11 phút)</div></div>',
        sol2: '<div class="sol-body"><b>Mẹo:</b> t = 30 / (11/12) = 360/11 ≈ 32.7 phút.</div>'
      };
    },
    () => {
      const a = 1, b = 2, sAOB = random(4, 10) * 4, sAOD = sAOB * 2;
      return {
        tier: 'hsg', tierLabel: '🔴 THI HSG', archetype: 'Hình thang & Diện tích tam giác cánh bướm', domain: '📐 Hình học',
        text: `Cho hình thang ABCD có hai đáy AB và CD (đáy CD gấp 2 lần đáy AB). Hai đường chéo AC và BD cắt nhau tại O. Biết diện tích tam giác AOB là <b>${sAOB} cm²</b>. Tính diện tích tam giác AOD.`,
        unit: 'cm²', answer: sAOD, answerText: `${sAOD} cm²`,
        diagramSvg: `<svg width="440" height="40" viewBox="0 0 440 40"><text x="20" y="25" font-size="12" font-weight="bold" fill="#7e42eb">S_AOD = S_BOC = 2 × S_AOB = 2 × ${sAOB} = ${sAOD} cm²</text></svg>`,
        hint1: 'Vì AB = 1/2 CD nên tỉ số hai đường chéo OA / OC = OB / OD = 1/2.',
        hint2: 'Tam giác AOD và tam giác AOB có chung chiều cao hạ từ A, đáy OD = 2 OB.',
        hint3: `Diện tích tam giác AOD = 2 × S(AOB) = 2 × ${sAOB} = ${sAOD} cm².`,
        sol1: `<div class="sol-body">Vì AB = 1/2 CD nên tỉ số OB/OD = 1/2 (hay OD = 2 OB).<br>Tam giác AOD và AOB có chung đường cao hạ từ A xuống BD nên: S(AOD) = 2 × S(AOB) = 2 × ${sAOB} = ${sAOD} (cm²).<div class="sol-final-text">Đáp số: ${sAOD} cm²</div></div>`,
        sol2: `<div class="sol-body"><b>Mẹo:</b> S(AOD) = 2 × ${sAOB} = ${sAOD} cm².</div>`
      };
    }
  ]
};;
})();
