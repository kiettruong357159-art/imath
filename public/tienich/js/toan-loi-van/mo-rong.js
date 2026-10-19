(() => {
  'use strict';

  const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const pick = values => values[Math.floor(Math.random() * values.length)];
  const format = value => Number.isInteger(value)
    ? String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    : String(Math.round(value * 1000) / 1000).replace('.', ',');
  const labels = { kha: '🟡 Mức KHÁ', gioi: '🟠 Mức GIỎI', hsg: '🔴 THI HSG' };
  const gcd = (a, b) => b ? gcd(b, a % b) : Math.abs(a);
  const lcm = (a, b) => Math.abs(a * b) / gcd(a, b);
  const fractionText = (numerator, denominator) => {
    const divisor = gcd(numerator, denominator);
    const top = numerator / divisor;
    const bottom = denominator / divisor;
    return bottom === 1 ? String(top) : `${top}/${bottom}`;
  };

  function question(tier, archetype, domain, data) {
    const answer = Number(data.answer);
    if (!Number.isFinite(answer) || answer < 0) throw new Error('Đáp án không hợp lệ: ' + archetype);
    const unit = data.unit || '';
    const answerText = data.answerText || (format(answer) + (unit ? ' ' + unit : ''));
    const steps = Array.isArray(data.steps) ? data.steps : [];
    const summary = data.summary || steps[0] || 'Lập quan hệ rồi tính từng bước.';
    return {
      tier,
      tierLabel: labels[tier],
      archetype,
      domain,
      text: data.text,
      unit,
      answer,
      answerText,
      tolerance: data.tolerance,
      answerFormat: data.answerFormat || '',
      diagramSvg: '<svg width="440" height="46" viewBox="0 0 440 46" role="img" aria-label="Sơ đồ gợi ý"><rect x="1" y="1" width="438" height="44" rx="9" fill="#f5fbff" stroke="#b9d9ec"/><text x="18" y="28" font-size="12" font-weight="700" fill="#175786">' + summary + '</text></svg>',
      hint1: steps[0] || summary,
      hint2: steps[1] || 'Tìm đại lượng trung gian trước.',
      hint3: steps[2] || ('Đáp số là ' + answerText + '.'),
      sol1: '<div class="sol-body">' + steps.map(step => step + '.').join('<br>') + '<div class="sol-final-text">Đáp số: ' + answerText + '</div></div>',
      sol2: '<div class="sol-body"><b>Cách kiểm tra:</b> ' + (data.check || 'Thay đáp số vào các dữ kiện của đề để đối chiếu.') + '</div>'
    };
  }

  function factory(tier, archetype, domain, build) {
    return () => question(tier, archetype, domain, build());
  }

  function extend(grade, tier, records) {
    const pool = window['LOP' + grade + '_POOLS'];
    if (!pool || !Array.isArray(pool[tier])) throw new Error('Thiếu ngân hàng lớp ' + grade + '/' + tier);
    records.forEach(record => pool[tier].push(factory(tier, record[0], record[1], record[2])));
  }

  // LỚP 1: thêm 4 Khá, 6 Giỏi, 4 HSG.
  extend(1, 'kha', [
    ['Tìm số hạng còn thiếu từ tổng', '🍎 Hoa quả', () => {
      const first = random(8, 18), missing = random(5, 16), total = first + missing;
      return { text: `Trong giỏ có <b>${total} quả</b> gồm cam và táo. Có <b>${first} quả cam</b>. Hỏi có bao nhiêu quả táo?`, unit: 'quả táo', answer: missing, summary: `${total} quả = ${first} quả cam + ?`, steps: [`Lấy tổng số quả trừ số quả cam`, `${total} − ${first} = ${missing}`, `Vậy có ${missing} quả táo`], check: `${first} + ${missing} = ${total}.` };
    }],
    ['Bớt hai lần liên tiếp', '📚 Sách vở', () => {
      const remain = random(6, 15), first = random(4, 9), second = random(3, 8), total = remain + first + second;
      return { text: `Kệ có <b>${total} quyển truyện</b>. Buổi sáng lấy xuống <b>${first} quyển</b>, buổi chiều lấy tiếp <b>${second} quyển</b>. Trên kệ còn bao nhiêu quyển?`, unit: 'quyển', answer: remain, summary: `${total} → bớt ${first} → bớt ${second}`, steps: [`Sau buổi sáng còn ${total} − ${first} = ${total - first} quyển`, `Sau buổi chiều còn ${total - first} − ${second} = ${remain} quyển`, `Kết luận kệ còn ${remain} quyển`], check: `${remain} + ${first} + ${second} = ${total}.` };
    }],
    ['Tìm hiệu rồi tìm tổng hai nhóm', '🌼 Vườn hoa', () => {
      const first = random(12, 25), less = random(3, 8), second = first - less, total = first + second;
      return { text: `Luống thứ nhất có <b>${first} bông hoa</b>. Luống thứ hai ít hơn luống thứ nhất <b>${less} bông</b>. Cả hai luống có bao nhiêu bông hoa?`, unit: 'bông hoa', answer: total, summary: `Luống 2 ít hơn luống 1 là ${less}`, steps: [`Luống thứ hai có ${first} − ${less} = ${second} bông`, `Cả hai luống có ${first} + ${second} = ${total} bông`, `Ghi đáp số ${total} bông hoa`], check: `${total} − ${first} = ${second}.` };
    }],
    ['Gộp ba nhóm bằng phép cộng', '🎈 Đồ chơi', () => {
      const a = random(3, 8), b = random(3, 8), c = random(3, 8), total = a + b + c;
      return { text: `Có <b>${a} quả bóng đỏ</b>, <b>${b} quả bóng xanh</b> và <b>${c} quả bóng vàng</b>. Có tất cả bao nhiêu quả bóng?`, unit: 'quả bóng', answer: total, summary: `${a} + ${b} + ${c}`, steps: [`Gộp bóng đỏ và bóng xanh: ${a} + ${b} = ${a + b}`, `Gộp thêm ${c} bóng vàng: ${a + b} + ${c} = ${total}`, `Có tất cả ${total} quả bóng`], check: `Đếm lại đủ ba nhóm màu.` };
    }]
  ]);

  extend(1, 'gioi', [
    ['Tính ngược hai lần thêm bớt', '🔢 Tìm số', () => {
      const start = random(10, 30), add = random(5, 10), remove = random(3, 8), end = start + add - remove;
      return { text: `Một số được cộng thêm <b>${add}</b>, rồi bớt đi <b>${remove}</b> thì được <b>${end}</b>. Số ban đầu là bao nhiêu?`, unit: '', answer: start, summary: `? + ${add} − ${remove} = ${end}`, steps: [`Làm ngược phép bớt: ${end} + ${remove} = ${end + remove}`, `Làm ngược phép cộng: ${end + remove} − ${add} = ${start}`, `Số ban đầu là ${start}`], check: `${start} + ${add} − ${remove} = ${end}.` };
    }],
    ['Chuyển đồ vật rồi tìm số ban đầu', '🧸 Đồ chơi', () => {
      const moved = random(3, 7), finalA = random(12, 22), initialA = finalA + moved, initialB = finalA - moved;
      return { text: `Hộp A và hộp B sau khi chuyển <b>${moved} món đồ</b> từ A sang B thì mỗi hộp đều có <b>${finalA} món</b>. Lúc đầu hộp A có bao nhiêu món?`, unit: 'món', answer: initialA, summary: `A cho đi ${moved} món rồi còn ${finalA}`, steps: [`Muốn tìm số cũ của A phải cộng lại số đã cho`, `${finalA} + ${moved} = ${initialA}`, `Lúc đầu hộp A có ${initialA} món`], check: `Hộp B lúc đầu có ${initialB}; chuyển xong hai hộp đều có ${finalA}.` };
    }],
    ['Ba bạn hơn kém liên tiếp', '🍬 Kẹo bánh', () => {
      const an = random(8, 15), moreB = random(2, 5), moreC = random(2, 5), binh = an + moreB, cuc = binh + moreC, total = an + binh + cuc;
      return { text: `An có <b>${an} viên kẹo</b>. Bình nhiều hơn An <b>${moreB} viên</b>; Cúc nhiều hơn Bình <b>${moreC} viên</b>. Cả ba bạn có bao nhiêu viên kẹo?`, unit: 'viên kẹo', answer: total, summary: `An → Bình → Cúc`, steps: [`Bình có ${an} + ${moreB} = ${binh} viên`, `Cúc có ${binh} + ${moreC} = ${cuc} viên`, `Cả ba có ${an} + ${binh} + ${cuc} = ${total} viên`], check: `Các độ chênh lần lượt là ${moreB} và ${moreC}.` };
    }],
    ['Đếm hình vuông trong lưới 2 nhân 2', '📐 Hình học', () => ({ text: 'Một hình vuông lớn được chia thành <b>4 hình vuông nhỏ bằng nhau</b> theo lưới 2 hàng, 2 cột. Tính cả hình lớn, có tất cả bao nhiêu hình vuông?', unit: 'hình vuông', answer: 5, summary: '4 hình nhỏ + 1 hình lớn', steps: ['Đếm được 4 hình vuông nhỏ', 'Toàn bộ khung là 1 hình vuông lớn', 'Tất cả có 4 + 1 = 5 hình vuông'], check: 'Liệt kê từng hình theo kích thước.' })],
    ['Dãy số xen kẽ hai quy luật', '🔢 Dãy số', () => {
      const a = random(2, 6), plus = random(2, 5), sequence = [a, a + plus, a + plus - 1, a + plus * 2 - 1, a + plus * 2 - 2], answer = a + plus * 3 - 2;
      return { text: `Điền số tiếp theo: <b>${sequence.join(', ')}, ...</b>`, unit: '', answer, summary: `Cộng ${plus}, rồi bớt 1`, steps: [`Các bước lần lượt là cộng ${plus}, bớt 1`, `Sau ${sequence[4]} đến lượt cộng ${plus}`, `${sequence[4]} + ${plus} = ${answer}`], check: `Đọc lại quy luật xen kẽ từ đầu.` };
    }],
    ['Cân hai loại quả qua vật trung gian', '⚖️ Cân thăng bằng', () => {
      const apple = random(2, 5), orange = apple + random(1, 4), count = random(2, 4), total = count * orange;
      return { text: `Một quả táo nặng <b>${apple} đơn vị</b>. Một quả cam nặng hơn một quả táo <b>${orange - apple} đơn vị</b>. <b>${count} quả cam</b> nặng bao nhiêu đơn vị?`, unit: 'đơn vị', answer: total, summary: `Táo ${apple}; cam hơn ${orange - apple}`, steps: [`Một quả cam nặng ${apple} + ${orange - apple} = ${orange} đơn vị`, `Cộng ${orange} lặp lại ${count} lần`, `${count} quả cam nặng ${total} đơn vị`], check: `Tách ${total} thành ${count} nhóm, mỗi nhóm ${orange}.` };
    }]
  ]);

  extend(1, 'hsg', [
    ['Tìm ba số từ tổng từng cặp', '💡 Tư duy logic', () => {
      const a = random(3, 8), b = random(4, 9), c = random(5, 10), ab = a + b, ac = a + c, bc = b + c;
      return { text: `Ba ô A, B, C có: A + B = <b>${ab}</b>, A + C = <b>${ac}</b>, B + C = <b>${bc}</b>. Số trong ô A là bao nhiêu?`, unit: '', answer: a, summary: `Hai tổng có A rồi so với tổng B + C`, steps: [`Cộng hai tổng có A: ${ab} + ${ac} = ${ab + ac}`, `B + C bằng ${bc}, nên hai lần A bằng ${ab + ac} − ${bc} = ${2 * a}`, `A bằng ${a}`], check: `${a} + ${b} = ${ab} và ${a} + ${c} = ${ac}.` };
    }],
    ['Ô số chữ thập cùng tổng', '🔐 Mã số', () => {
      const center = random(3, 8), left = random(1, 6), right = random(1, 6), line = left + center + right, top = random(1, 6), bottom = line - center - top;
      if (bottom < 1) return { text: 'Một ô chữ thập có hàng ngang gồm 2, 5, 4. Hàng dọc cũng có tổng bằng hàng ngang; ô giữa là 5 và ô trên là 3. Ô dưới là số nào?', unit: '', answer: 3, summary: 'Hai hàng có cùng tổng', steps: ['Hàng ngang có tổng 2 + 5 + 4 = 11', 'Ô trên và ô giữa có tổng 3 + 5 = 8', 'Ô dưới là 11 − 8 = 3'], check: '3 + 5 + 3 = 11.' };
      return { text: `Ô chữ thập có hàng ngang là <b>${left}, ${center}, ${right}</b>. Hàng dọc có cùng tổng, ô trên là <b>${top}</b> và ô giữa là <b>${center}</b>. Ô dưới là số nào?`, unit: '', answer: bottom, summary: 'Tổng hàng ngang = tổng hàng dọc', steps: [`Hàng ngang có tổng ${left} + ${center} + ${right} = ${line}`, `Ô trên và giữa có tổng ${top} + ${center} = ${top + center}`, `Ô dưới là ${line} − ${top + center} = ${bottom}`], check: `${top} + ${center} + ${bottom} = ${line}.` };
    }],
    ['Sắp thứ tự từ ba manh mối', '🚶 Hàng lối', () => ({ text: 'Bốn bạn An, Bình, Cúc, Dũng xếp hàng. Bình đứng ngay sau An. Cúc đứng trước An. Dũng đứng sau Bình. Hỏi An đứng thứ mấy?', unit: '', answer: 2, summary: 'Cúc → An → Bình → Dũng', steps: ['Bình ngay sau An nên An–Bình đứng liền nhau', 'Cúc phải đứng trước An và Dũng đứng sau Bình', 'Thứ tự là Cúc, An, Bình, Dũng; An đứng thứ 2'], check: 'Tất cả ba manh mối đều đúng.' })],
    ['Chọn đường ngắn nhất trên lưới', '💡 Tư duy logic', () => {
      const right = random(2, 4), up = random(1, 3), stepsCount = right + up;
      return { text: `Rô-bốt cần đi từ A đến B trên lưới, phải đi sang phải <b>${right} ô</b> và đi lên <b>${up} ô</b>. Nếu không đi lùi, ít nhất rô-bốt phải đi bao nhiêu bước?`, unit: 'bước', answer: stepsCount, summary: `${right} bước ngang + ${up} bước dọc`, steps: [`Mỗi ô sang phải cần một bước nên có ${right} bước`, `Mỗi ô đi lên cần một bước nên có ${up} bước`, `Ít nhất cần ${right} + ${up} = ${stepsCount} bước`], check: 'Mọi đường không đi lùi đều phải đủ số bước ngang và dọc.' };
    }]
  ]);

  // LỚP 2: thêm 4 Khá, 6 Giỏi, 4 HSG.
  extend(2, 'kha', [
    ['Cộng các nhóm bằng nhau theo bảng 2', '🎒 Chia nhóm', () => {
      const groups = random(3, 8), each = 2, total = groups * each;
      return { text: `Có <b>${groups} túi</b>, mỗi túi có <b>${each} quyển vở</b>. Có tất cả bao nhiêu quyển vở?`, unit: 'quyển vở', answer: total, summary: `${groups} nhóm, mỗi nhóm 2`, steps: [`Viết phép cộng số 2 lặp lại ${groups} lần`, `${Array(groups).fill(2).join(' + ')} = ${total}`, `Có tất cả ${total} quyển vở`], check: `Đếm ${groups} nhóm, mỗi nhóm đúng 2 quyển.` };
    }],
    ['Chia đều theo bảng 5', '🎁 Chia quà', () => {
      const children = 5, each = random(2, 8), total = children * each;
      return { text: `Chia đều <b>${total} chiếc bánh</b> cho <b>${children} bạn</b>. Mỗi bạn nhận được bao nhiêu chiếc bánh?`, unit: 'chiếc bánh', answer: each, summary: `${total} chia đều cho 5`, steps: [`Lập phép chia ${total} : ${children}`, `${total} : ${children} = ${each}`, `Mỗi bạn nhận ${each} chiếc bánh`], check: `${each} × ${children} = ${total}.` };
    }],
    ['Mua hai món rồi tính tiền còn lại', '💰 Tiền tệ', () => {
      const first = pick([10, 20, 30]), second = pick([10, 20]), remain = pick([10, 20]), paid = first + second + remain;
      return { text: `Mai có <b>${paid} nghìn đồng</b>, mua bút hết <b>${first} nghìn đồng</b> và vở hết <b>${second} nghìn đồng</b>. Mai còn bao nhiêu nghìn đồng?`, unit: 'nghìn đồng', answer: remain, summary: `${paid} − ${first} − ${second}`, steps: [`Mua bút xong còn ${paid} − ${first} = ${paid - first}`, `Mua vở xong còn ${paid - first} − ${second} = ${remain}`, `Mai còn ${remain} nghìn đồng`], check: `${remain} + ${first} + ${second} = ${paid}.` };
    }],
    ['Tính thời gian trong cùng một giờ', '⏰ Thời gian', () => {
      const start = pick([5, 10, 15, 20, 25]), duration = pick([10, 15, 20, 25]), end = start + duration;
      return { text: `Một hoạt động bắt đầu lúc <b>8 giờ ${start} phút</b> và kết thúc lúc <b>8 giờ ${end} phút</b>. Hoạt động kéo dài bao nhiêu phút?`, unit: 'phút', answer: duration, summary: `Cùng trong 8 giờ: lấy phút sau trừ phút trước`, steps: [`Hai thời điểm cùng trong 8 giờ`, `Thời gian là ${end} − ${start} = ${duration} phút`, `Hoạt động kéo dài ${duration} phút`], check: `${start} + ${duration} = ${end}.` };
    }]
  ]);

  extend(2, 'gioi', [
    ['Tìm số nhóm ban đầu sau khi bớt', '📦 Đóng gói', () => {
      const groups = random(4, 9), each = pick([2, 5]), removedGroups = random(1, 2), remain = (groups - removedGroups) * each;
      return { text: `Một số món đồ được xếp đều, mỗi hộp <b>${each} món</b>. Lấy đi <b>${removedGroups} hộp</b> thì còn <b>${remain} món</b>. Lúc đầu có bao nhiêu món?`, unit: 'món', answer: groups * each, summary: `Tìm số hộp còn rồi cộng hộp đã lấy`, steps: [`Số hộp còn là ${remain} : ${each} = ${groups - removedGroups}`, `Lúc đầu có ${groups - removedGroups} + ${removedGroups} = ${groups} hộp`, `Số món lúc đầu là ${groups} × ${each} = ${groups * each}`], check: `Lấy ${removedGroups * each} món thì còn ${remain}.` };
    }],
    ['Đếm phần giao của hai nhóm', '💡 Tư duy logic', () => {
      const red = random(12, 20), round = random(10, 18), both = random(3, 8), total = red + round - both;
      return { text: `Có <b>${red} thẻ màu đỏ</b>, <b>${round} thẻ hình tròn</b>; trong đó <b>${both} thẻ</b> vừa đỏ vừa tròn. Có bao nhiêu thẻ đỏ hoặc tròn?`, unit: 'thẻ', answer: total, summary: 'Phần vừa đỏ vừa tròn bị đếm hai lần', steps: [`Cộng hai nhóm: ${red} + ${round} = ${red + round}`, `Bớt ${both} thẻ bị đếm hai lần`, `Có ${red + round} − ${both} = ${total} thẻ`], check: 'Tách thành chỉ đỏ, chỉ tròn và vừa đỏ vừa tròn.' };
    }],
    ['Đếm số vị trí kể cả hai đầu', '🚶 Hàng lối', () => {
      const first = random(12, 25), last = first + random(10, 25), count = last - first + 1;
      return { text: `Các ghế được đánh số liên tiếp từ <b>${first}</b> đến <b>${last}</b>. Có tất cả bao nhiêu ghế?`, unit: 'ghế', answer: count, summary: 'Số cuối − số đầu + 1', steps: [`Hiệu hai số là ${last} − ${first} = ${last - first}`, `Phải cộng thêm ghế mang số đầu tiên`, `Có ${last - first} + 1 = ${count} ghế`], check: 'Thử với hai số liên tiếp sẽ có 2 ghế.' };
    }],
    ['Cân hai bước tìm túi chưa biết', '⚖️ Cân thăng bằng', () => {
      const bag = pick([5, 10, 15, 20]), weight = pick([10, 20]), bags = pick([2, 5]), total = bags * bag + weight;
      return { text: `Một bên cân có <b>${bags} túi giống nhau</b> và quả cân <b>${weight} g</b>. Bên kia có <b>${total} g</b>. Mỗi túi nặng bao nhiêu gam?`, unit: 'g', answer: bag, summary: `${bags} túi + ${weight} g = ${total} g`, steps: [`Khối lượng ${bags} túi là ${total} − ${weight} = ${bags * bag} g`, `Mỗi túi nặng ${bags * bag} : ${bags} = ${bag} g`, `Kết luận mỗi túi nặng ${bag} g`], check: `${bags} × ${bag} + ${weight} = ${total}.` };
    }],
    ['Dãy xen kẽ cộng 2 và cộng 5', '⭐ Quy luật', () => {
      const start = random(5, 15), values = [start, start + 2, start + 7, start + 9, start + 14], answer = start + 16;
      return { text: `Tìm số tiếp theo của dãy: <b>${values.join(', ')}, ...</b>`, unit: '', answer, summary: 'Cộng 2, cộng 5 rồi lặp lại', steps: ['Các khoảng tăng lần lượt là 2, 5, 2, 5', 'Bước tiếp theo phải cộng 2', `${values[4]} + 2 = ${answer}`], check: 'So lại từng khoảng cách liên tiếp.' };
    }],
    ['Tìm đoạn còn thiếu trên đường gấp khúc', '📏 Độ dài', () => {
      const a = random(12, 30), b = random(10, 25), c = random(8, 20), total = a + b + c;
      return { text: `Đường gấp khúc dài <b>${total} cm</b>, gồm ba đoạn. Hai đoạn đầu dài <b>${a} cm</b> và <b>${b} cm</b>. Đoạn cuối dài bao nhiêu xăng-ti-mét?`, unit: 'cm', answer: c, summary: `${a} + ${b} + ? = ${total}`, steps: [`Hai đoạn đầu dài ${a} + ${b} = ${a + b} cm`, `Đoạn cuối dài ${total} − ${a + b} = ${c} cm`, `Ghi đáp số ${c} cm`], check: `${a} + ${b} + ${c} = ${total}.` };
    }]
  ]);

  extend(2, 'hsg', [
    ['Ba hộp hơn kém theo hai quan hệ', '📦 Đại lượng', () => {
      const a = random(15, 30), gapB = random(3, 8), gapC = random(3, 8), b = a + gapB, c = b - gapC, total = a + b + c;
      return { text: `Hộp A có <b>${a} viên bi</b>. Hộp B nhiều hơn A <b>${gapB} viên</b>; hộp C ít hơn B <b>${gapC} viên</b>. Cả ba hộp có bao nhiêu viên bi?`, unit: 'viên bi', answer: total, summary: 'Tìm B, tìm C rồi cộng ba hộp', steps: [`Hộp B có ${a} + ${gapB} = ${b} viên`, `Hộp C có ${b} − ${gapC} = ${c} viên`, `Ba hộp có ${a} + ${b} + ${c} = ${total} viên`], check: `B − A = ${gapB}; B − C = ${gapC}.` };
    }],
    ['Số đoạn sau nhiều lần cắt', '✂️ Cắt dây', () => {
      const cuts = random(3, 9), pieces = cuts + 1;
      return { text: `Một sợi dây thẳng được cắt tại <b>${cuts} điểm khác nhau</b>. Sợi dây được chia thành bao nhiêu đoạn?`, unit: 'đoạn', answer: pieces, summary: 'Số đoạn = số điểm cắt + 1', steps: ['Khi chưa cắt đã có 1 đoạn', `Mỗi điểm cắt làm tăng thêm 1 đoạn`, `Có ${cuts} + 1 = ${pieces} đoạn`], check: 'Với 1 điểm cắt sẽ được 2 đoạn.' };
    }],
    ['Ô vuông tổng bằng nhau tìm số thiếu', '🔐 Mã số', () => {
      const a = random(4, 9), b = random(3, 8), c = random(2, 7), target = a + b + c, d = random(2, 7), e = random(2, 7), missing = target - d - e;
      if (missing < 1) return { text: 'Hai hàng ô vuông có tổng bằng nhau. Hàng trên là 6, 5, 4; hàng dưới là 3, 5 và ?. Số cần điền là bao nhiêu?', unit: '', answer: 7, summary: 'Hai hàng cùng tổng 15', steps: ['Hàng trên có tổng 6 + 5 + 4 = 15', 'Hai ô đã biết ở hàng dưới có tổng 3 + 5 = 8', 'Ô thiếu là 15 − 8 = 7'], check: '3 + 5 + 7 = 15.' };
      return { text: `Hai hàng ô vuông có tổng bằng nhau. Hàng trên là <b>${a}, ${b}, ${c}</b>; hàng dưới là <b>${d}, ${e}, ?</b>. Số cần điền là bao nhiêu?`, unit: '', answer: missing, summary: 'Tính tổng hàng trên rồi bù hàng dưới', steps: [`Hàng trên có tổng ${a} + ${b} + ${c} = ${target}`, `Hai ô hàng dưới có tổng ${d} + ${e} = ${d + e}`, `Ô thiếu là ${target} − ${d + e} = ${missing}`], check: `${d} + ${e} + ${missing} = ${target}.` };
    }],
    ['Tính ngược phép chia bảng 2 hoặc 5', '🎁 Chia quà', () => {
      const divisor = pick([2, 5]), quotient = random(4, 12), added = random(3, Math.min(9, divisor * quotient - 1)), start = divisor * quotient - added;
      return { text: `Một số được cộng thêm <b>${added}</b>, sau đó chia đều cho <b>${divisor}</b> thì được <b>${quotient}</b>. Số ban đầu là bao nhiêu?`, unit: '', answer: start, summary: `(? + ${added}) : ${divisor} = ${quotient}`, steps: [`Trước khi chia có ${quotient} × ${divisor} = ${quotient * divisor}`, `Số ban đầu là ${quotient * divisor} − ${added} = ${start}`, `Kết luận số cần tìm là ${start}`], check: `(${start} + ${added}) : ${divisor} = ${quotient}.` };
    }]
  ]);

  // LỚP 3: thêm 4 Khá, 6 Giỏi, 6 HSG.
  extend(3, 'kha', [
    ['Tính tiền nhiều gói cùng giá', '💰 Mua sắm', () => {
      const packs = random(3, 8), each = random(4, 9) * 1000, total = packs * each;
      return { text: `Một gói bút giá <b>${format(each)} đồng</b>. Mua <b>${packs} gói</b> như vậy phải trả bao nhiêu tiền?`, unit: 'đồng', answer: total, summary: `${packs} gói cùng giá ${format(each)} đồng`, steps: [`Lấy giá một gói nhân số gói`, `${format(each)} × ${packs} = ${format(total)} đồng`, `Phải trả ${format(total)} đồng`], check: `Chia ${format(total)} cho ${packs} được ${format(each)}.` };
    }],
    ['Lịch hoạt động qua hai khoảng thời gian', '⏰ Thời gian', () => {
      const first = random(20, 40), rest = random(5, 15), second = random(15, 35), total = first + rest + second;
      return { text: `Một buổi sinh hoạt gồm <b>${first} phút học</b>, nghỉ <b>${rest} phút</b>, rồi hoạt động nhóm <b>${second} phút</b>. Cả buổi kéo dài bao nhiêu phút?`, unit: 'phút', answer: total, summary: 'Cộng cả thời gian học, nghỉ và hoạt động', steps: [`Học và nghỉ hết ${first} + ${rest} = ${first + rest} phút`, `Cộng thời gian hoạt động: ${first + rest} + ${second} = ${total} phút`, `Cả buổi kéo dài ${total} phút`], check: 'Không bỏ quên thời gian nghỉ.' };
    }],
    ['Đổi mét và xăng-ti-mét rồi cộng', '📏 Đại lượng', () => {
      const metres = random(2, 8), cm = random(10, 90), extra = random(20, 80), total = metres * 100 + cm + extra;
      return { text: `Một cuộn dây dài <b>${metres} m ${cm} cm</b>, nối thêm đoạn dài <b>${extra} cm</b>. Cuộn dây mới dài bao nhiêu xăng-ti-mét?`, unit: 'cm', answer: total, summary: `1 m = 100 cm`, steps: [`Đổi ${metres} m ${cm} cm = ${metres * 100 + cm} cm`, `Nối thêm: ${metres * 100 + cm} + ${extra} = ${total} cm`, `Cuộn dây mới dài ${total} cm`], check: `Tách ${total} cm thành phần cũ và ${extra} cm.` };
    }],
    ['Chia có dư trong tình huống xếp hàng', '🎒 Chia nhóm', () => {
      const divisor = random(3, 9), quotient = random(4, 10), remainder = random(1, divisor - 1), total = divisor * quotient + remainder;
      return { text: `Có <b>${total} học sinh</b> xếp thành các hàng, mỗi hàng <b>${divisor} bạn</b>. Xếp được bao nhiêu hàng đủ và còn thừa bao nhiêu bạn? <i>Hãy nhập số hàng đủ.</i>`, unit: 'hàng', answer: quotient, summary: `${total} : ${divisor} có dư`, steps: [`Tìm bội của ${divisor} gần ${total} nhất là ${divisor * quotient}`, `${total} : ${divisor} = ${quotient} dư ${remainder}`, `Xếp được ${quotient} hàng đủ`], check: `${quotient} × ${divisor} + ${remainder} = ${total}.` };
    }]
  ]);

  extend(3, 'gioi', [
    ['Đổi số hàng làm thay đổi số người mỗi hàng', '🚶 Hàng lối', () => {
      const rowsA = random(4, 7), eachA = random(5, 9), total = rowsA * eachA, rowsB = pick([2, 3, 4]);
      if (total % rowsB !== 0 || rowsB === rowsA) return { text: 'Có 36 học sinh xếp đều thành 6 hàng. Nếu xếp đều thành 4 hàng thì mỗi hàng có bao nhiêu học sinh?', unit: 'học sinh', answer: 9, summary: 'Tổng số học sinh không đổi', steps: ['Tổng số đã cho là 36', 'Xếp thành 4 hàng nên tính 36 : 4', 'Mỗi hàng có 9 học sinh'], check: '4 × 9 = 36.' };
      const eachB = total / rowsB;
      return { text: `Có <b>${total} học sinh</b> xếp đều thành <b>${rowsA} hàng</b>. Nếu xếp đều thành <b>${rowsB} hàng</b> thì mỗi hàng có bao nhiêu học sinh?`, unit: 'học sinh', answer: eachB, summary: 'Tổng số học sinh không đổi', steps: [`Tổng số vẫn là ${total} học sinh`, `Mỗi hàng mới có ${total} : ${rowsB} = ${eachB} học sinh`, `Kết luận mỗi hàng có ${eachB} học sinh`], check: `${rowsB} × ${eachB} = ${total}.` };
    }],
    ['Chu vi hàng rào có chừa cổng', '📐 Hình học', () => {
      const length = random(12, 30), width = random(8, 18), gate = random(2, 5), fence = 2 * (length + width) - gate;
      return { text: `Mảnh vườn hình chữ nhật dài <b>${length} m</b>, rộng <b>${width} m</b>. Người ta rào quanh vườn nhưng chừa cổng rộng <b>${gate} m</b>. Cần bao nhiêu mét hàng rào?`, unit: 'm', answer: fence, summary: 'Chu vi trừ phần cổng', steps: [`Chu vi vườn là (${length} + ${width}) × 2 = ${2 * (length + width)} m`, `Chừa cổng nên cần ${2 * (length + width)} − ${gate} = ${fence} m`, `Cần ${fence} m hàng rào`], check: `${fence} + ${gate} bằng chu vi vườn.` };
    }],
    ['Chia đều rồi tìm tổng ban đầu', '🎁 Chia quà', () => {
      const children = random(4, 9), each = random(3, 8), extra = random(5, 15), total = children * each + extra;
      return { text: `Sau khi để riêng <b>${extra} món quà</b>, số còn lại chia đều cho <b>${children} bạn</b>, mỗi bạn được <b>${each} món</b>. Lúc đầu có bao nhiêu món quà?`, unit: 'món quà', answer: total, summary: 'Tìm phần đã chia rồi cộng phần để riêng', steps: [`Số quà đã chia là ${children} × ${each} = ${children * each}`, `Lúc đầu có ${children * each} + ${extra} = ${total} món`, `Kết luận có ${total} món quà`], check: `Bớt ${extra} rồi chia ${children} được ${each}.` };
    }],
    ['Đảo chữ số hàng trăm và hàng đơn vị', '🔢 Cấu tạo số', () => {
      const hundreds = random(2, 8), tens = random(0, 9), units = random(1, 9), original = hundreds * 100 + tens * 10 + units, reversed = units * 100 + tens * 10 + hundreds, difference = Math.abs(reversed - original);
      if (hundreds === units) return { text: 'Số 327 đổi chỗ chữ số hàng trăm và hàng đơn vị được số mới. Hai số chênh nhau bao nhiêu?', unit: 'đơn vị', answer: 396, summary: '327 → 723', steps: ['Số mới là 723', 'Lấy 723 − 327', 'Hai số chênh nhau 396'], check: '327 + 396 = 723.' };
      return { text: `Cho số <b>${original}</b>. Đổi chỗ chữ số hàng trăm và hàng đơn vị được số mới. Hai số chênh nhau bao nhiêu?`, unit: 'đơn vị', answer: difference, summary: `${original} → ${reversed}`, steps: [`Số mới là ${reversed}`, `Lấy số lớn trừ số nhỏ: ${Math.max(original, reversed)} − ${Math.min(original, reversed)} = ${difference}`, `Hai số chênh nhau ${difference}`], check: `${Math.min(original, reversed)} + ${difference} = ${Math.max(original, reversed)}.` };
    }],
    ['Kho hàng nhập rồi xuất hai lần', '📦 Kho hàng', () => {
      const start = random(120, 300), added = random(40, 90), firstOut = random(30, 70), secondOut = random(20, 60), remain = start + added - firstOut - secondOut;
      return { text: `Kho có <b>${start} thùng</b>, nhập thêm <b>${added} thùng</b>, rồi xuất lần lượt <b>${firstOut} thùng</b> và <b>${secondOut} thùng</b>. Kho còn bao nhiêu thùng?`, unit: 'thùng', answer: remain, summary: `Có → nhập → xuất → xuất`, steps: [`Sau khi nhập có ${start} + ${added} = ${start + added} thùng`, `Sau lần xuất đầu còn ${start + added} − ${firstOut} = ${start + added - firstOut} thùng`, `Sau lần hai còn ${start + added - firstOut} − ${secondOut} = ${remain} thùng`], check: `${remain} + ${firstOut} + ${secondOut} − ${added} = ${start}.` };
    }],
    ['Tìm chiều rộng từ diện tích hình chữ nhật', '📐 Hình học', () => {
      const length = random(8, 20), width = random(4, 12), area = length * width;
      return { text: `Hình chữ nhật có diện tích <b>${area} cm²</b> và chiều dài <b>${length} cm</b>. Chiều rộng là bao nhiêu xăng-ti-mét?`, unit: 'cm', answer: width, summary: 'Chiều rộng = diện tích : chiều dài', steps: [`Lấy diện tích chia chiều dài`, `${area} : ${length} = ${width} cm`, `Chiều rộng là ${width} cm`], check: `${length} × ${width} = ${area} cm².` };
    }]
  ]);

  extend(3, 'hsg', [
    ['Đếm chữ số khi đánh số trang dưới 100', '📚 Trang sách', () => {
      const pages = random(20, 89), digits = 9 + (pages - 9) * 2;
      return { text: `Đánh số trang một quyển sách từ trang 1 đến trang <b>${pages}</b>. Cần viết tất cả bao nhiêu chữ số?`, unit: 'chữ số', answer: digits, summary: 'Trang 1–9 dùng 1 chữ số; từ 10 dùng 2', steps: ['Chín trang đầu dùng 9 chữ số', `Từ trang 10 đến ${pages} có ${pages - 9} trang, dùng ${2 * (pages - 9)} chữ số`, `Tất cả dùng 9 + ${2 * (pages - 9)} = ${digits} chữ số`], check: 'Tách riêng nhóm trang một chữ số và hai chữ số.' };
    }],
    ['Tìm số cùng dư trong một khoảng', '🔢 Phép chia', () => {
      const d1 = pick([3, 4, 5]), d2 = pick([6, 8, 10]), remainder = random(1, Math.min(d1, d2) - 1), common = lcm(d1, d2), base = common * random(2, 4), answer = base + remainder, low = answer - random(1, common - 1), high = answer + random(1, common - 1);
      return { text: `Tìm số lớn hơn <b>${low}</b> và nhỏ hơn <b>${high}</b>, khi chia cho <b>${d1}</b> hoặc <b>${d2}</b> đều dư <b>${remainder}</b>.`, unit: '', answer, summary: `Bớt ${remainder} thì chia hết cho ${d1} và ${d2}`, steps: [`Số cần tìm bớt ${remainder} phải chia hết cho cả ${d1} và ${d2}`, `Trong khoảng đã cho, bội chung phù hợp là ${base}`, `Số cần tìm là ${base} + ${remainder} = ${answer}`], check: `${answer} chia cho hai số đều dư ${remainder}.` };
    }],
    ['Ba thế hệ với hai quan hệ tuổi', '⏳ Tuổi tác', () => {
      const child = random(7, 12), father = child * 3, grandfather = father + random(20, 30), total = child + father + grandfather;
      return { text: `Tuổi bố gấp <b>3 lần</b> tuổi con; ông hơn bố <b>${grandfather - father} tuổi</b>. Tổng tuổi ba người là <b>${total}</b>. Con bao nhiêu tuổi?`, unit: 'tuổi', answer: child, summary: 'Con 1 phần, bố 3 phần, ông = bố + phần hơn', steps: [`Bớt phần ông hơn bố: ${total} − ${grandfather - father} = ${total - (grandfather - father)}`, `Phần còn lại gồm 1 + 3 + 3 = 7 phần bằng nhau`, `Tuổi con là ${total - (grandfather - father)} : 7 = ${child}`], check: `${child} + ${father} + ${grandfather} = ${total}.` };
    }],
    ['Năng suất mỗi ngày khi hoàn thành sớm', '📦 Đóng gói', () => {
      const plannedDays = random(6, 10), early = pick([1, 2]), actualDays = plannedDays - early, actualDaily = random(8, 15), total = actualDays * actualDaily;
      if (total % plannedDays !== 0) return { text: 'Một tổ làm 72 sản phẩm. Dự định làm trong 9 ngày nhưng hoàn thành sớm 1 ngày và làm đều mỗi ngày. Thực tế mỗi ngày làm bao nhiêu sản phẩm?', unit: 'sản phẩm', answer: 9, summary: 'Thời gian thực tế = dự định − ngày sớm', steps: ['Thực tế làm 9 − 1 = 8 ngày', 'Mỗi ngày làm 72 : 8', 'Mỗi ngày làm 9 sản phẩm'], check: '8 × 9 = 72.' };
      const plannedDaily = total / plannedDays;
      return { text: `Một tổ làm <b>${total} sản phẩm</b>. Dự định làm trong <b>${plannedDays} ngày</b> nhưng hoàn thành sớm <b>${early} ngày</b> và thực tế vẫn làm đều mỗi ngày. Thực tế mỗi ngày làm bao nhiêu sản phẩm?`, unit: 'sản phẩm', answer: actualDaily, summary: 'Tính số ngày thực tế trước', steps: [`Số ngày thực tế là ${plannedDays} − ${early} = ${actualDays}`, `Mỗi ngày làm ${total} : ${actualDays} = ${actualDaily} sản phẩm`, `Thực tế mỗi ngày làm ${actualDaily} sản phẩm`], check: `Theo dự định mỗi ngày ${plannedDaily}; thực tế ${actualDays} × ${actualDaily} = ${total}.` };
    }],
    ['Hình ghép hai chữ nhật chung chiều rộng', '📐 Hình học', () => {
      const width = random(4, 9), lengthA = random(7, 14), lengthB = random(5, 12), totalArea = width * (lengthA + lengthB), larger = width * Math.max(lengthA, lengthB);
      return { text: `Hai hình chữ nhật có cùng chiều rộng <b>${width} cm</b>, chiều dài lần lượt <b>${lengthA} cm</b> và <b>${lengthB} cm</b>. Diện tích hình lớn hơn là bao nhiêu?`, unit: 'cm²', answer: larger, summary: 'So chiều dài vì chiều rộng bằng nhau', steps: [`Chiều dài lớn hơn là ${Math.max(lengthA, lengthB)} cm`, `Diện tích hình lớn là ${Math.max(lengthA, lengthB)} × ${width} = ${larger} cm²`, `Kết luận diện tích lớn hơn là ${larger} cm²`], check: `Tổng diện tích hai hình là ${totalArea} cm².` };
    }],
    ['Chia đồ vật theo hai điều kiện liên tiếp', '💡 Tư duy logic', () => {
      const groups = random(4, 8), each = random(3, 7), left = random(1, 5), total = groups * each + left;
      return { text: `Có <b>${total} viên bi</b>. Chia đều cho <b>${groups} bạn</b> thì mỗi bạn nhận số bi như nhau và còn <b>${left} viên</b>. Mỗi bạn nhận bao nhiêu viên?`, unit: 'viên bi', answer: each, summary: 'Bớt phần còn rồi mới chia đều', steps: [`Số bi đã chia là ${total} − ${left} = ${groups * each}`, `Mỗi bạn nhận ${groups * each} : ${groups} = ${each} viên`, `Kết luận mỗi bạn nhận ${each} viên`], check: `${groups} × ${each} + ${left} = ${total}.` };
    }]
  ]);

  // LỚP 4: thêm 4 Khá, 6 Giỏi, 5 HSG.
  extend(4, 'kha', [
    ['Tìm số còn thiếu từ trung bình cộng', '🔢 Trung bình cộng', () => {
      const a = random(20, 60), b = random(20, 60), c = random(20, 60), average = Math.floor((a + b + c) / 3), adjustedC = average * 3 - a - b;
      if (adjustedC < 5) return { text: 'Trung bình cộng của ba số là 36. Hai số đầu là 28 và 35. Số thứ ba là bao nhiêu?', unit: '', answer: 45, summary: 'Tổng ba số = trung bình × 3', steps: ['Tổng ba số là 36 × 3 = 108', 'Hai số đầu có tổng 28 + 35 = 63', 'Số thứ ba là 108 − 63 = 45'], check: '(28 + 35 + 45) : 3 = 36.' };
      return { text: `Trung bình cộng của ba số là <b>${average}</b>. Hai số đầu là <b>${a}</b> và <b>${b}</b>. Số thứ ba là bao nhiêu?`, unit: '', answer: adjustedC, summary: 'Tổng ba số = trung bình × 3', steps: [`Tổng ba số là ${average} × 3 = ${average * 3}`, `Hai số đầu có tổng ${a} + ${b} = ${a + b}`, `Số thứ ba là ${average * 3} − ${a + b} = ${adjustedC}`], check: `(${a} + ${b} + ${adjustedC}) : 3 = ${average}.` };
    }],
    ['Bán một phần rồi tìm số còn lại', '📦 Kho hàng', () => {
      const total = random(8, 30) * 6, denominator = pick([3, 6]), numerator = 1, sold = total / denominator, remain = total - sold;
      return { text: `Kho có <b>${total} kg</b> gạo, đã bán <b>${numerator}/${denominator}</b> số gạo. Kho còn lại bao nhiêu ki-lô-gam?`, unit: 'kg', answer: remain, summary: `Tìm 1/${denominator} của ${total}`, steps: [`Số gạo đã bán là ${total} : ${denominator} = ${sold} kg`, `Số còn lại là ${total} − ${sold} = ${remain} kg`, `Kho còn ${remain} kg`], check: `${sold} + ${remain} = ${total}.` };
    }],
    ['Diện tích lối đi trong hình chữ nhật', '📐 Hình học', () => {
      const outerL = random(16, 30), outerW = random(10, 18), innerL = outerL - 2, innerW = outerW - 2, area = outerL * outerW - innerL * innerW;
      return { text: `Sân hình chữ nhật dài <b>${outerL} m</b>, rộng <b>${outerW} m</b>. Làm lối đi rộng <b>1 m</b> quanh mép phía trong. Diện tích lối đi là bao nhiêu mét vuông?`, unit: 'm²', answer: area, summary: 'Diện tích sân trừ phần còn lại ở giữa', steps: [`Diện tích sân là ${outerL} × ${outerW} = ${outerL * outerW} m²`, `Phần giữa dài ${innerL} m, rộng ${innerW} m, diện tích ${innerL * innerW} m²`, `Lối đi có diện tích ${outerL * outerW} − ${innerL * innerW} = ${area} m²`], check: 'Lối đi rộng 1 m làm mỗi kích thước phần giữa giảm 2 m.' };
    }],
    ['Quan hệ giá hai loại hàng', '💰 Mua sắm', () => {
      const cheap = random(3, 8) * 1000, times = random(2, 4), expensive = cheap * times, count = random(2, 5), total = expensive * count;
      return { text: `Một quyển sách giá gấp <b>${times} lần</b> một quyển vở giá <b>${format(cheap)} đồng</b>. Mua <b>${count} quyển sách</b> hết bao nhiêu tiền?`, unit: 'đồng', answer: total, summary: 'Tìm giá một sách rồi nhân số sách', steps: [`Một quyển sách giá ${format(cheap)} × ${times} = ${format(expensive)} đồng`, `${count} quyển sách giá ${format(expensive)} × ${count} = ${format(total)} đồng`, `Phải trả ${format(total)} đồng`], check: `Chia tổng tiền cho ${count} được giá một quyển sách.` };
    }]
  ]);

  extend(4, 'gioi', [
    ['Tổng hiệu ẩn qua hai thay đổi', '🔢 Tổng - Hiệu', () => {
      const smaller = random(30, 80), addSmall = random(5, 15), removeLarge = random(5, 15), larger = smaller + addSmall + removeLarge, total = smaller + larger;
      return { text: `Hai kho có tất cả <b>${total} thùng</b>. Thêm <b>${addSmall} thùng</b> vào kho ít và bớt <b>${removeLarge} thùng</b> ở kho nhiều thì hai kho bằng nhau. Kho nhiều lúc đầu có bao nhiêu thùng?`, unit: 'thùng', answer: larger, summary: `Hiệu ban đầu = ${addSmall} + ${removeLarge}`, steps: [`Hiệu ban đầu là ${addSmall} + ${removeLarge} = ${larger - smaller}`, `Kho nhiều là (${total} + ${larger - smaller}) : 2`, `Kho nhiều có ${larger} thùng`], check: `${larger} − ${removeLarge} = ${smaller} + ${addSmall}.` };
    }],
    ['Chuyển một lượng làm hai bên đổi tỉ số', '🍬 Chuyển bi', () => {
      const unit = random(5, 12), first = 3 * unit, second = unit, moved = unit / 2;
      if (!Number.isInteger(moved)) return { text: 'Hai hộp có số bi theo tỉ số 3 : 1. Chuyển 6 viên từ hộp nhiều sang hộp ít thì hai hộp bằng nhau. Hộp nhiều lúc đầu có bao nhiêu viên?', unit: 'viên bi', answer: 18, summary: 'Chuyển 6 làm hiệu giảm 12', steps: ['Hiệu ban đầu bằng 6 + 6 = 12 viên', 'Hiệu ứng với 3 − 1 = 2 phần', 'Một phần là 6; hộp nhiều có 18 viên'], check: '18 − 6 = 6 + 6 = 12.' };
      return { text: `Hai hộp có số bi theo tỉ số <b>3 : 1</b>. Chuyển <b>${moved} viên</b> từ hộp nhiều sang hộp ít thì hai hộp bằng nhau. Hộp nhiều lúc đầu có bao nhiêu viên?`, unit: 'viên bi', answer: first, summary: 'Lượng chuyển bằng nửa hiệu ban đầu', steps: [`Hiệu ban đầu là ${moved} + ${moved} = ${2 * moved}`, `Hai phần chênh nhau bằng ${2 * moved}, nên một phần là ${unit}`, `Hộp nhiều có 3 × ${unit} = ${first} viên`], check: `${first} − ${moved} = ${second} + ${moved}.` };
    }],
    ['Trung bình của từng cặp số', '🔢 Trung bình cộng', () => {
      const a = random(20, 50), b = random(20, 50), c = random(20, 50), ab = (a + b) / 2, bc = (b + c) / 2, ac = (a + c) / 2;
      if (![ab, bc, ac].every(Number.isInteger)) return { text: 'Trung bình của A và B là 30; của B và C là 36; của A và C là 34. Tổng ba số A, B, C là bao nhiêu?', unit: '', answer: 100, summary: 'Cộng ba tổng cặp sẽ được hai lần tổng ba số', steps: ['A + B = 60; B + C = 72; A + C = 68', 'Cộng lại được 200, bằng hai lần A + B + C', 'Tổng ba số là 200 : 2 = 100'], check: 'Mỗi số xuất hiện đúng hai lần trong ba tổng cặp.' };
      const total = a + b + c;
      return { text: `Trung bình của A và B là <b>${ab}</b>; của B và C là <b>${bc}</b>; của A và C là <b>${ac}</b>. Tổng A + B + C bằng bao nhiêu?`, unit: '', answer: total, summary: 'Đổi trung bình từng cặp thành tổng từng cặp', steps: [`Ba tổng cặp là ${2 * ab}, ${2 * bc}, ${2 * ac}`, `Cộng ba tổng cặp được ${2 * total}, bằng hai lần tổng ba số`, `Tổng ba số là ${2 * total} : 2 = ${total}`], check: 'Mỗi số được tính hai lần.' };
    }],
    ['Tìm số ban đầu từ phân số còn lại', '📦 Kho hàng', () => {
      const total = random(8, 20) * 12, remain = total / 2;
      return { text: `Một cửa hàng bán <b>1/3</b> số hàng, sau đó bán tiếp <b>1/4</b> số còn lại và cuối cùng còn <b>${remain} sản phẩm</b>. Lúc đầu có bao nhiêu sản phẩm?`, unit: 'sản phẩm', answer: total, summary: 'Làm ngược từ phần còn cuối cùng', steps: [`Sau lần hai còn 3/4 nên trước lần hai có ${remain} : 3 × 4 = ${total * 2 / 3}`, `Sau lần một còn 2/3 nên ban đầu có ${total * 2 / 3} : 2 × 3 = ${total}`, `Lúc đầu có ${total} sản phẩm`], check: `${total} × 2/3 × 3/4 = ${remain}.` };
    }],
    ['Sửa một số sai làm đổi trung bình', '🔢 Trung bình cộng', () => {
      const count = random(4, 8), oldAverage = random(25, 50), wrong = random(15, 35), correct = wrong + count * random(2, 5), newAverage = oldAverage + (correct - wrong) / count;
      return { text: `Trung bình cộng của <b>${count} số</b> được tính là <b>${oldAverage}</b>. Sau đó phát hiện một số ghi nhầm là <b>${wrong}</b>, đúng ra là <b>${correct}</b>. Trung bình đúng là bao nhiêu?`, unit: '', answer: newAverage, summary: 'Sửa tổng rồi chia lại', steps: [`Tổng sai là ${oldAverage} × ${count} = ${oldAverage * count}`, `Tổng đúng là ${oldAverage * count} − ${wrong} + ${correct} = ${newAverage * count}`, `Trung bình đúng là ${newAverage * count} : ${count} = ${newAverage}`], check: `Trung bình tăng ${(correct - wrong) / count} đơn vị.` };
    }],
    ['Chia phần thưởng theo tỉ lệ ba nhóm', '🎁 Chia quà', () => {
      const unit = random(4, 12), ratios = [2, 3, 4], total = unit * 9, largest = unit * 4;
      return { text: `Chia <b>${total} phần thưởng</b> cho ba lớp theo tỉ lệ <b>2 : 3 : 4</b>. Lớp nhận nhiều nhất được bao nhiêu phần thưởng?`, unit: 'phần thưởng', answer: largest, summary: 'Tổng số phần = 2 + 3 + 4', steps: [`Tổng số phần là 2 + 3 + 4 = 9`, `Mỗi phần là ${total} : 9 = ${unit}`, `Lớp nhiều nhất nhận 4 × ${unit} = ${largest} phần thưởng`], check: `Ba lớp nhận ${2 * unit}, ${3 * unit}, ${4 * unit}; tổng ${total}.` };
    }]
  ]);

  extend(4, 'hsg', [
    ['Hai loại xe biết tổng bánh', '🚲 Giả thiết tạm', () => {
      const tricycles = random(6, 15), bicycles = random(8, 20), vehicles = tricycles + bicycles, wheels = tricycles * 3 + bicycles * 2;
      return { text: `Có <b>${vehicles} xe</b> gồm xe đạp 2 bánh và xe ba bánh, tất cả có <b>${wheels} bánh</b>. Có bao nhiêu xe ba bánh?`, unit: 'xe ba bánh', answer: tricycles, summary: 'Giả sử tất cả đều là xe 2 bánh', steps: [`Nếu đều là xe đạp thì có ${vehicles} × 2 = ${vehicles * 2} bánh`, `Số bánh thừa là ${wheels} − ${vehicles * 2} = ${tricycles}`, `Mỗi xe ba bánh thừa 1 bánh nên có ${tricycles} xe`], check: `${tricycles} × 3 + ${bicycles} × 2 = ${wheels}.` };
    }],
    ['Thêm bớt làm thay đổi tỉ số', '🔢 Tỉ số', () => {
      const unit = random(5, 12), first = unit * 2, second = unit * 3, added = unit;
      return { text: `Hai kho có số hàng theo tỉ số <b>2 : 3</b>. Nếu thêm vào kho ít <b>${added} thùng</b> thì hai kho bằng nhau. Kho nhiều lúc đầu có bao nhiêu thùng?`, unit: 'thùng', answer: second, summary: 'Phần chênh lệch bằng lượng thêm', steps: [`Hiệu số phần là 3 − 2 = 1 phần`, `Một phần ứng với ${added} thùng`, `Kho nhiều có 3 × ${unit} = ${second} thùng`], check: `${first} + ${added} = ${second}.` };
    }],
    ['Tổng phân số theo quy luật bù trừ', '🔢 Phân số', () => {
      const n = pick([4, 5, 6]), answer = n / (n + 1);
      return { text: `Tính tổng <b>1/2 + 1/6 + 1/12 + ... + 1/${n * (n + 1)}</b>, trong đó các mẫu lần lượt là 1×2, 2×3, ..., ${n}×${n + 1}. Viết đáp án dưới dạng phân số tối giản.`, unit: '', answer, answerText: `${n}/${n + 1}`, answerFormat: 'fraction', tolerance: 1e-9, summary: '1/(k(k+1)) = 1/k − 1/(k+1)', steps: ['Tách mỗi phân số thành hiệu hai phân số liên tiếp', `Các số ở giữa triệt tiêu, còn 1 − 1/${n + 1}`, `Tổng bằng ${n}/${n + 1}`], check: `${n}/${n + 1} là phân số tối giản.` };
    }],
    ['Tìm số bị bỏ khỏi nhóm trung bình', '🔢 Trung bình cộng', () => {
      const count = random(4, 7), average = random(25, 50), remainingAverage = random(20, 45), removed = average * count - remainingAverage * (count - 1);
      if (removed < 0) return { text: 'Trung bình cộng của 5 số là 32. Bỏ một số thì trung bình của 4 số còn lại là 29. Số bị bỏ là bao nhiêu?', unit: '', answer: 44, summary: 'So tổng trước và sau khi bỏ', steps: ['Tổng 5 số là 32 × 5 = 160', 'Tổng 4 số còn là 29 × 4 = 116', 'Số bị bỏ là 160 − 116 = 44'], check: '116 + 44 = 160.' };
      return { text: `Trung bình cộng của <b>${count} số</b> là <b>${average}</b>. Bỏ một số thì trung bình của <b>${count - 1} số</b> còn lại là <b>${remainingAverage}</b>. Số bị bỏ là bao nhiêu?`, unit: '', answer: removed, summary: 'So tổng trước và sau khi bỏ', steps: [`Tổng ban đầu là ${average} × ${count} = ${average * count}`, `Tổng còn lại là ${remainingAverage} × ${count - 1} = ${remainingAverage * (count - 1)}`, `Số bị bỏ là ${average * count} − ${remainingAverage * (count - 1)} = ${removed}`], check: `Tổng còn lại cộng số bỏ bằng tổng cũ.` };
    }],
    ['Tuổi qua hai mốc gấp nhau', '⏳ Tuổi tác', () => {
      const child = random(8, 13), parent = child * 4, years = Math.floor((parent - 2 * child) / 1);
      return { text: `Hiện nay tuổi mẹ gấp <b>4 lần</b> tuổi con. Sau <b>${years} năm</b>, tuổi mẹ gấp <b>2 lần</b> tuổi con. Hiện nay con bao nhiêu tuổi?`, unit: 'tuổi', answer: child, summary: 'Hiệu tuổi không đổi', steps: [`Hiện nay hiệu tuổi ứng với 4 − 1 = 3 phần`, `Sau ${years} năm, hiệu tuổi ứng với 2 − 1 = 1 phần tuổi con lúc đó`, `Thử tuổi con ${child}: mẹ ${parent}; sau ${years} năm là ${child + years} và ${parent + years}, đúng tỉ số 1 : 2`], check: `${parent + years} = 2 × ${child + years}.` };
    }]
  ]);

  // LỚP 5: thêm 4 Khá, 6 Giỏi, 4 HSG.
  extend(5, 'kha', [
    ['Tìm số ban đầu khi biết giá trị phần trăm', '🔢 Phần trăm', () => {
      const percent = pick([10, 20, 25, 40, 50]), base = random(4, 20) * 100, part = base * percent / 100;
      return { text: `<b>${format(part)}</b> bằng <b>${percent}%</b> của một số. Số đó là bao nhiêu?`, unit: '', answer: base, summary: 'Tìm 1% rồi tìm 100%', steps: [`Một phần trăm của số đó là ${format(part)} : ${percent} = ${format(part / percent)}`, `Số cần tìm là ${format(part / percent)} × 100 = ${format(base)}`, `Kết luận số ban đầu là ${format(base)}`], check: `${format(base)} × ${percent}% = ${format(part)}.` };
    }],
    ['Vận tốc trung bình của hai chặng', '🚗 Chuyển động', () => {
      const timeA = random(1, 3), speedA = random(30, 50), timeB = random(1, 3), speedB = random(40, 60), distance = speedA * timeA + speedB * timeB, totalTime = timeA + timeB, average = distance / totalTime;
      if (!Number.isInteger(average)) return { text: 'Một xe đi 2 giờ với vận tốc 40 km/giờ, rồi đi 3 giờ với vận tốc 50 km/giờ. Vận tốc trung bình cả hành trình là bao nhiêu?', unit: 'km/giờ', answer: 46, summary: 'Vận tốc trung bình = tổng quãng đường : tổng thời gian', steps: ['Chặng đầu đi 40 × 2 = 80 km', 'Chặng sau đi 50 × 3 = 150 km; tổng 230 km trong 5 giờ', 'Vận tốc trung bình là 230 : 5 = 46 km/giờ'], check: '46 × 5 = 230 km.' };
      return { text: `Một xe đi <b>${timeA} giờ</b> với vận tốc <b>${speedA} km/giờ</b>, rồi đi <b>${timeB} giờ</b> với vận tốc <b>${speedB} km/giờ</b>. Vận tốc trung bình cả hành trình là bao nhiêu?`, unit: 'km/giờ', answer: average, summary: 'Tổng quãng đường chia tổng thời gian', steps: [`Hai chặng dài ${speedA * timeA} km và ${speedB * timeB} km`, `Tổng quãng đường ${distance} km, tổng thời gian ${totalTime} giờ`, `Vận tốc trung bình là ${distance} : ${totalTime} = ${average} km/giờ`], check: `${average} × ${totalTime} = ${distance}.` };
    }],
    ['Tìm chiều cao hình hộp từ thể tích', '🧊 Thể tích', () => {
      const length = random(5, 12), width = random(3, 8), height = random(4, 10), volume = length * width * height;
      return { text: `Hình hộp chữ nhật có thể tích <b>${volume} dm³</b>, chiều dài <b>${length} dm</b>, chiều rộng <b>${width} dm</b>. Chiều cao là bao nhiêu đề-xi-mét?`, unit: 'dm', answer: height, summary: 'Chiều cao = thể tích : diện tích đáy', steps: [`Diện tích đáy là ${length} × ${width} = ${length * width} dm²`, `Chiều cao là ${volume} : ${length * width} = ${height} dm`, `Kết luận chiều cao ${height} dm`], check: `${length} × ${width} × ${height} = ${volume} dm³.` };
    }],
    ['Phân số còn lại sau hai lần sử dụng', '📦 Kho hàng', () => {
      const total = random(5, 15) * 20, afterFirst = total * 3 / 4, afterSecond = afterFirst * 4 / 5;
      return { text: `Một kho dùng <b>1/4</b> số hàng, sau đó dùng tiếp <b>1/5 số còn lại</b>. Kho còn <b>${afterSecond} sản phẩm</b>. Lúc đầu kho có bao nhiêu sản phẩm?`, unit: 'sản phẩm', answer: total, summary: 'Làm ngược từng lần theo lượng còn lại', steps: [`Trước lần dùng thứ hai có ${afterSecond} : 4 × 5 = ${afterFirst} sản phẩm`, `Sau lần đầu còn 3/4, nên ban đầu có ${afterFirst} : 3 × 4 = ${total}`, `Lúc đầu có ${total} sản phẩm`], check: `${total} × 3/4 × 4/5 = ${afterSecond}.` };
    }]
  ]);

  extend(5, 'gioi', [
    ['Tìm giá gốc sau tăng rồi giảm phần trăm', '💰 Kinh doanh', () => {
      const original = random(5, 20) * 100000, increased = original * 1.2, final = increased * .9;
      return { text: `Một mặt hàng tăng giá <b>20%</b>, sau đó giảm <b>10%</b> trên giá mới và còn <b>${format(final)} đồng</b>. Giá ban đầu là bao nhiêu?`, unit: 'đồng', answer: original, summary: 'Làm ngược lần giảm rồi lần tăng', steps: [`Trước khi giảm, giá là ${format(final)} : 90 × 100 = ${format(increased)} đồng`, `Giá sau tăng bằng 120% giá gốc`, `Giá gốc là ${format(increased)} : 120 × 100 = ${format(original)} đồng`], check: `${format(original)} × 120% × 90% = ${format(final)}.` };
    }],
    ['Vận tốc trung bình có thời gian nghỉ', '🚗 Chuyển động', () => {
      const movingHours = random(3, 5), restHours = 1, average = random(30, 50), distance = average * (movingHours + restHours), movingSpeed = distance / movingHours;
      if (!Number.isInteger(movingSpeed)) return { text: 'Một xe chạy 4 giờ với vận tốc 60 km/giờ rồi nghỉ 1 giờ. Tính vận tốc trung bình tính cả thời gian nghỉ.', unit: 'km/giờ', answer: 48, summary: 'Thời gian nghỉ tính vào tổng thời gian', steps: ['Quãng đường là 60 × 4 = 240 km', 'Tổng thời gian là 4 + 1 = 5 giờ', 'Vận tốc trung bình là 240 : 5 = 48 km/giờ'], check: '48 × 5 = 240.' };
      return { text: `Một xe chạy <b>${movingHours} giờ</b> với vận tốc <b>${movingSpeed} km/giờ</b>, rồi nghỉ <b>${restHours} giờ</b>. Vận tốc trung bình tính cả thời gian nghỉ là bao nhiêu?`, unit: 'km/giờ', answer: average, summary: 'Nghỉ không tạo quãng đường nhưng vẫn tính thời gian', steps: [`Quãng đường đi được là ${movingSpeed} × ${movingHours} = ${distance} km`, `Tổng thời gian là ${movingHours} + ${restHours} = ${movingHours + restHours} giờ`, `Vận tốc trung bình là ${distance} : ${movingHours + restHours} = ${average} km/giờ`], check: `${average} × ${movingHours + restHours} = ${distance}.` };
    }],
    ['Công việc làm theo hai giai đoạn', '👷 Công việc', () => {
      const total = random(6, 15) * 24, firstDays = random(2, 4), firstDaily = total / 12, done = firstDays * firstDaily, secondDays = random(3, 6), secondDaily = (total - done) / secondDays;
      if (!Number.isInteger(secondDaily)) return { text: 'Một tổ phải làm 240 sản phẩm. Trong 4 ngày đầu, mỗi ngày làm 30 sản phẩm. Số còn lại làm đều trong 5 ngày. Mỗi ngày sau làm bao nhiêu sản phẩm?', unit: 'sản phẩm', answer: 24, summary: 'Bớt phần giai đoạn đầu rồi chia giai đoạn sau', steps: ['Bốn ngày đầu làm 30 × 4 = 120 sản phẩm', 'Còn 240 − 120 = 120 sản phẩm', 'Mỗi ngày sau làm 120 : 5 = 24 sản phẩm'], check: '120 + 5 × 24 = 240.' };
      return { text: `Một tổ phải làm <b>${total} sản phẩm</b>. Trong <b>${firstDays} ngày đầu</b>, mỗi ngày làm <b>${firstDaily} sản phẩm</b>. Số còn lại làm đều trong <b>${secondDays} ngày</b>. Mỗi ngày sau làm bao nhiêu sản phẩm?`, unit: 'sản phẩm', answer: secondDaily, summary: 'Bớt sản lượng giai đoạn đầu rồi chia', steps: [`Giai đoạn đầu làm ${firstDays} × ${firstDaily} = ${done} sản phẩm`, `Còn ${total} − ${done} = ${total - done} sản phẩm`, `Mỗi ngày sau làm ${total - done} : ${secondDays} = ${secondDaily} sản phẩm`], check: `${done} + ${secondDays} × ${secondDaily} = ${total}.` };
    }],
    ['Diện tích thay đổi khi đổi hai kích thước', '📐 Hình học', () => {
      const length = random(12, 25), width = random(8, 16), addL = random(2, 5), removeW = random(1, 3), oldArea = length * width, newArea = (length + addL) * (width - removeW), change = newArea - oldArea;
      return { text: `Hình chữ nhật dài <b>${length} m</b>, rộng <b>${width} m</b>. Tăng chiều dài <b>${addL} m</b> và giảm chiều rộng <b>${removeW} m</b>. Diện tích mới là bao nhiêu mét vuông?`, unit: 'm²', answer: newArea, summary: 'Tính lại cả hai kích thước mới', steps: [`Chiều dài mới ${length + addL} m, chiều rộng mới ${width - removeW} m`, `Diện tích mới là ${length + addL} × ${width - removeW} = ${newArea} m²`, `Diện tích ${change >= 0 ? 'tăng' : 'giảm'} ${Math.abs(change)} m² so với trước`], check: `Diện tích cũ là ${oldArea} m².` };
    }],
    ['Tìm số ban đầu từ hai phân số đã dùng', '🔢 Phân số', () => {
      const total = random(5, 15) * 30, first = total * 2 / 5, remain1 = total - first, second = remain1 / 3, final = remain1 - second;
      return { text: `Một đội dùng <b>2/5</b> số vật liệu, rồi dùng tiếp <b>1/3 số còn lại</b> và cuối cùng còn <b>${final} kg</b>. Ban đầu có bao nhiêu ki-lô-gam?`, unit: 'kg', answer: total, summary: 'Làm ngược vì hai phân số dựa trên hai lượng khác nhau', steps: [`Sau lần đầu, trước lần hai có ${final} : 2 × 3 = ${remain1} kg`, `Lượng đó bằng 3/5 ban đầu`, `Ban đầu có ${remain1} : 3 × 5 = ${total} kg`], check: `${total} × 3/5 × 2/3 = ${final}.` };
    }],
    ['Hai loại sản phẩm biết tổng số và tổng tiền', '💰 Mua sắm', () => {
      const expensiveCount = random(3, 8), cheapCount = random(5, 12), totalCount = expensiveCount + cheapCount, cheapPrice = random(2, 5) * 10000, expensivePrice = cheapPrice + random(1, 4) * 10000, totalMoney = cheapCount * cheapPrice + expensiveCount * expensivePrice;
      return { text: `Mua <b>${totalCount} món</b> gồm loại A giá <b>${format(cheapPrice)} đồng</b> và loại B giá <b>${format(expensivePrice)} đồng</b>, hết <b>${format(totalMoney)} đồng</b>. Có bao nhiêu món loại B?`, unit: 'món loại B', answer: expensiveCount, summary: 'Giả sử tất cả đều mua loại rẻ', steps: [`Nếu đều là loại A thì hết ${totalCount} × ${format(cheapPrice)} = ${format(totalCount * cheapPrice)} đồng`, `Số tiền nhiều hơn là ${format(totalMoney - totalCount * cheapPrice)} đồng`, `Mỗi món B hơn ${format(expensivePrice - cheapPrice)} đồng nên có ${expensiveCount} món B`], check: `${cheapCount} món A và ${expensiveCount} món B có tổng tiền đúng đề.` };
    }]
  ]);

  extend(5, 'hsg', [
    ['Thay đổi vận tốc làm đổi thời điểm gặp', '🚗 Chuyển động', () => {
      const distance = random(4, 10) * 60, speedA = random(30, 45), speedB = random(35, 50), faster = 10, oldTime = distance / (speedA + speedB), newTime = distance / (speedA + faster + speedB);
      if (!Number.isInteger(oldTime * 60) || !Number.isInteger(newTime * 60)) return { text: 'Hai xe cách nhau 360 km, đi ngược chiều với vận tốc 40 km/giờ và 50 km/giờ. Nếu xe thứ nhất tăng thêm 20 km/giờ thì hai xe gặp nhau sau bao nhiêu giờ? Viết đáp án dưới dạng phân số tối giản nếu kết quả không phải số nguyên.', unit: 'giờ', answer: 36 / 11, answerText: '36/11 giờ', answerFormat: 'fraction', tolerance: 1e-9, summary: 'Vận tốc gặp nhau bằng tổng hai vận tốc mới', steps: ['Vận tốc xe thứ nhất mới là 40 + 20 = 60 km/giờ', 'Tổng vận tốc là 60 + 50 = 110 km/giờ', 'Thời gian gặp là 360 : 110 = 36/11 giờ'], check: '110 × 36/11 = 360.' };
      const totalSpeed = speedA + faster + speedB;
      const exactTime = fractionText(distance, totalSpeed);
      return { text: `Hai xe cách nhau <b>${distance} km</b>, đi ngược chiều với vận tốc <b>${speedA} km/giờ</b> và <b>${speedB} km/giờ</b>. Nếu xe thứ nhất tăng thêm <b>${faster} km/giờ</b>, hai xe gặp nhau sau bao nhiêu giờ? Viết đáp án dưới dạng phân số tối giản nếu kết quả không phải số nguyên.`, unit: 'giờ', answer: newTime, answerText: `${exactTime} giờ`, answerFormat: Number.isInteger(newTime) ? '' : 'fraction', tolerance: 1e-9, summary: 'Dùng tổng hai vận tốc mới', steps: [`Vận tốc xe thứ nhất mới là ${speedA + faster} km/giờ`, `Tổng vận tốc là ${totalSpeed} km/giờ`, `Thời gian gặp là ${distance} : ${totalSpeed} = ${exactTime} giờ`], check: `${totalSpeed} × ${exactTime} = ${distance}.` };
    }],
    ['Giá niêm yết qua giảm giá và thuế', '💰 Kinh doanh', () => {
      const listed = random(5, 20) * 100000, afterDiscount = listed * .8, paid = afterDiscount * 1.1;
      return { text: `Một sản phẩm giảm <b>20%</b> giá niêm yết, sau đó cộng <b>10% thuế</b> trên giá đã giảm. Khách trả <b>${format(paid)} đồng</b>. Giá niêm yết là bao nhiêu?`, unit: 'đồng', answer: listed, summary: 'Làm ngược thuế trước, giảm giá sau', steps: [`Giá sau giảm trước thuế là ${format(paid)} : 110 × 100 = ${format(afterDiscount)} đồng`, `Giá sau giảm bằng 80% giá niêm yết`, `Giá niêm yết là ${format(afterDiscount)} : 80 × 100 = ${format(listed)} đồng`], check: `${format(listed)} × 80% × 110% = ${format(paid)}.` };
    }],
    ['Chuyển sách làm hai ngăn theo tỉ số mới', '📚 Giá sách', () => {
      const unit = random(6, 14), first = unit * 5, second = unit * 3, moved = unit, newFirst = first - moved, newSecond = second + moved;
      return { text: `Hai ngăn sách có số sách theo tỉ số <b>5 : 3</b>. Chuyển <b>${moved} quyển</b> từ ngăn nhiều sang ngăn ít thì hai ngăn bằng nhau. Ngăn nhiều lúc đầu có bao nhiêu quyển?`, unit: 'quyển', answer: first, summary: 'Lượng chuyển bằng nửa hiệu ban đầu', steps: [`Hiệu ban đầu là ${moved} + ${moved} = ${2 * moved} quyển`, `Hiệu tỉ số là 5 − 3 = 2 phần nên một phần là ${unit}`, `Ngăn nhiều có 5 × ${unit} = ${first} quyển`], check: `${first} − ${moved} = ${second} + ${moved} = ${newFirst}.` };
    }],
    ['Tổng dãy phân số hình học hữu hạn', '🔢 Phân số', () => {
      const terms = pick([4, 5, 6]), denominator = 2 ** terms, answer = 1 - 1 / denominator;
      const displayed = Array.from({ length: terms }, (_, index) => '1/' + (2 ** (index + 1))).join(' + ');
      return { text: `Tính tổng <b>${displayed}</b>. Viết đáp án dưới dạng phân số tối giản.`, unit: '', answer, answerText: `${denominator - 1}/${denominator}`, answerFormat: 'fraction', tolerance: 1e-9, summary: 'Mỗi số hạng sau bằng một nửa số trước', steps: [`Gọi tổng là S = ${displayed}`, `Nhân S với 2 rồi trừ S, các số hạng ở giữa triệt tiêu`, `S = 1 − 1/${denominator} = ${denominator - 1}/${denominator}`], check: `${denominator - 1}/${denominator} là phân số tối giản.` };
    }]
  ]);

  // Bổ sung để mỗi mức Khá có đủ 10 cấu trúc riêng cho chế độ luyện thích ứng.
  extend(1, 'kha', [
    ['Thêm rồi bớt trong cùng tình huống', '🧸 Đồ chơi', () => {
      const start = random(14, 28), added = random(3, 8), removed = random(2, added + 2), answer = start + added - removed;
      return { text: `Hộp có <b>${start} món đồ chơi</b>. Mẹ cho thêm <b>${added} món</b>, sau đó bé cất sang hộp khác <b>${removed} món</b>. Hộp còn bao nhiêu món đồ chơi?`, unit: 'món đồ chơi', answer, summary: 'Thêm trước, bớt sau', steps: [`Sau khi được cho thêm có ${start} + ${added} = ${start + added} món`, `Cất sang hộp khác ${removed} món`, `Còn ${start + added} − ${removed} = ${answer} món`], check: `${answer} + ${removed} − ${added} = ${start}.` };
    }],
    ['So sánh tổng của hai giỏ', '🍎 Hoa quả', () => {
      const b1 = random(3, 7), b2 = random(2, 6), a1 = b1 + random(1, 4), a2 = b2 + random(1, 4), totalA = a1 + a2, totalB = b1 + b2, answer = totalA - totalB;
      return { text: `Giỏ A có <b>${a1} quả táo</b> và <b>${a2} quả cam</b>. Giỏ B có <b>${b1} quả táo</b> và <b>${b2} quả cam</b>. Giỏ A nhiều hơn giỏ B bao nhiêu quả?`, unit: 'quả', answer, summary: 'Tính tổng từng giỏ rồi so sánh', steps: [`Giỏ A có ${a1} + ${a2} = ${totalA} quả`, `Giỏ B có ${b1} + ${b2} = ${totalB} quả`, `Giỏ A nhiều hơn ${totalA} − ${totalB} = ${answer} quả`], check: `${totalB} + ${answer} = ${totalA}.` };
    }]
  ]);

  extend(2, 'kha', [
    ['Gấp lên rồi bớt đi', '📚 Sách vở', () => {
      const groups = random(3, 5), each = pick([2, 5]), given = random(1, Math.max(1, groups * each - 3)), total = groups * each, answer = total - given;
      return { text: `Có <b>${groups} chồng vở</b>, mỗi chồng <b>${each} quyển</b>. Cho bạn <b>${given} quyển</b>. Còn lại bao nhiêu quyển vở?`, unit: 'quyển vở', answer, summary: 'Tìm tổng rồi bớt phần đã cho', steps: [`Có tất cả ${groups} × ${each} = ${total} quyển`, `Đã cho bạn ${given} quyển`, `Còn ${total} − ${given} = ${answer} quyển`], check: `${answer} + ${given} = ${total}.` };
    }],
    ['Tính với số chục và số đơn vị', '🔢 Số học', () => {
      const tens = random(2, 6), ones = random(1, 8), added = random(11, 25), start = tens * 10 + ones, answer = start + added;
      return { text: `Thư viện lớp có <b>${tens} chục và ${ones} quyển sách</b>, nhận thêm <b>${added} quyển</b>. Thư viện lớp có tất cả bao nhiêu quyển sách?`, unit: 'quyển sách', answer, summary: 'Đổi số chục thành số rồi cộng', steps: [`${tens} chục và ${ones} đơn vị là ${start}`, `Nhận thêm ${added} quyển`, `Có tất cả ${start} + ${added} = ${answer} quyển`], check: `${answer} − ${added} = ${start}.` };
    }]
  ]);

  extend(3, 'kha', [
    ['Mua nhiều món rồi tính tiền thừa', '💰 Mua sắm', () => {
      const price = random(2, 8) * 1000, count = random(2, 5), cost = price * count, paid = cost + random(1, 5) * 1000, answer = paid - cost;
      return { text: `Một món đồ giá <b>${format(price)} đồng</b>. Mua <b>${count} món</b> và đưa <b>${format(paid)} đồng</b>. Người bán phải trả lại bao nhiêu tiền?`, unit: 'đồng', answer, summary: 'Tính tiền mua rồi lấy tiền đưa trừ đi', steps: [`Tiền mua là ${format(price)} × ${count} = ${format(cost)} đồng`, `Tiền đã đưa là ${format(paid)} đồng`, `Tiền trả lại là ${format(paid)} − ${format(cost)} = ${format(answer)} đồng`], check: `${format(cost)} + ${format(answer)} = ${format(paid)}.` };
    }],
    ['Chu vi khi chiều dài hơn chiều rộng', '📐 Hình học', () => {
      const width = random(4, 10), difference = random(2, 6), length = width + difference, answer = (length + width) * 2;
      return { text: `Hình chữ nhật có chiều rộng <b>${width} cm</b>, chiều dài hơn chiều rộng <b>${difference} cm</b>. Chu vi hình chữ nhật là bao nhiêu xăng-ti-mét?`, unit: 'cm', answer, summary: 'Tìm chiều dài rồi tính chu vi', steps: [`Chiều dài là ${width} + ${difference} = ${length} cm`, `Nửa chu vi là ${length} + ${width} = ${length + width} cm`, `Chu vi là ${length + width} × 2 = ${answer} cm`], check: `(${length} + ${width}) × 2 = ${answer}.` };
    }]
  ]);

  extend(4, 'kha', [
    ['Tìm phần còn lại của một lớp học', '🔢 Phân số', () => {
      const denominator = pick([4, 5, 8]), numerator = random(1, denominator - 1), unit = random(4, 8), total = denominator * unit, selected = numerator * unit, answer = total - selected;
      return { text: `Lớp có <b>${total} học sinh</b>, trong đó <b>${numerator}/${denominator}</b> số học sinh tham gia đội văn nghệ. Có bao nhiêu học sinh không tham gia đội văn nghệ?`, unit: 'học sinh', answer, summary: 'Tìm số tham gia rồi lấy tổng trừ đi', steps: [`Số học sinh văn nghệ là ${total} : ${denominator} × ${numerator} = ${selected}`, `Số không tham gia là ${total} − ${selected}`, `Có ${answer} học sinh không tham gia`], check: `${selected} + ${answer} = ${total}.` };
    }],
    ['Đổi tấn ra ki-lô-gam rồi tính', '⚖️ Khối lượng', () => {
      const tons = random(1, 4), extra = random(1, 8) * 50, unloaded = random(2, 9) * 100, total = tons * 1000 + extra, answer = total - unloaded;
      return { text: `Xe chở <b>${tons} tấn ${extra} kg</b> hàng, đã dỡ xuống <b>${unloaded} kg</b>. Trên xe còn bao nhiêu ki-lô-gam hàng?`, unit: 'kg', answer, summary: 'Đổi tất cả về ki-lô-gam trước', steps: [`${tons} tấn ${extra} kg = ${total} kg`, `Đã dỡ ${unloaded} kg`, `Còn ${total} − ${unloaded} = ${answer} kg`], check: `${answer} + ${unloaded} = ${total}.` };
    }]
  ]);

  extend(5, 'kha', [
    ['Tìm số còn lại sau khi biết phần trăm', '🔢 Phần trăm', () => {
      const percent = pick([20, 25, 40]), unit = random(5, 10), total = percent === 25 ? unit * 4 : unit * 5, selected = total * percent / 100, answer = total - selected;
      return { text: `Một lớp có <b>${total} học sinh</b>, <b>${percent}%</b> số học sinh tham gia câu lạc bộ Toán. Có bao nhiêu học sinh không tham gia câu lạc bộ?`, unit: 'học sinh', answer, summary: 'Tìm số tham gia rồi tính phần còn lại', steps: [`Số tham gia là ${total} × ${percent} : 100 = ${selected}`, `Số không tham gia là ${total} − ${selected}`, `Có ${answer} học sinh không tham gia`], check: `${selected} + ${answer} = ${total}.` };
    }],
    ['Thể tích bể và phần nước đang có', '🧊 Thể tích', () => {
      const length = random(4, 8), width = random(3, 6), height = random(2, 5), numerator = pick([1, 2, 3]), denominator = 4, volume = length * width * height, adjustedVolume = volume % 4 === 0 ? volume : volume * 4, adjustedLength = volume % 4 === 0 ? length : length * 4, answer = adjustedVolume * numerator / denominator;
      return { text: `Bể hình hộp chữ nhật dài <b>${adjustedLength} dm</b>, rộng <b>${width} dm</b>, cao <b>${height} dm</b>. Bể đang chứa <b>${numerator}/${denominator}</b> thể tích. Trong bể có bao nhiêu lít nước? Biết 1 dm³ = 1 lít.`, unit: 'lít', answer, summary: 'Tính thể tích bể rồi lấy phân số lượng nước', steps: [`Thể tích bể là ${adjustedLength} × ${width} × ${height} = ${adjustedVolume} dm³`, `Lượng nước là ${adjustedVolume} : ${denominator} × ${numerator} = ${answer} dm³`, `Đổi ra được ${answer} lít nước`], check: `${answer} lít bằng ${numerator}/${denominator} của ${adjustedVolume} lít.` };
    }]
  ]);
  // Added only where rotation checks found thin lower-tier coverage.
  extend(4, 'kha', [
    ['Đóng đủ hộp và để lại phần dư', '📦 Chia có dư', () => {
      const each=random(12,25), boxes=random(8,24), left=random(1,each-1), total=boxes*each+left;
      return {text:`Có <b>${total} chiếc bút</b>. Mỗi hộp phải có đủ <b>${each} chiếc</b>. Đóng được nhiều nhất bao nhiêu hộp đầy?`,unit:'hộp',answer:boxes,
        steps:[`Chia ${total} cho ${each} được ${boxes}, dư ${left}`,`Phần dư chưa đủ đóng thêm một hộp`, `Đóng được ${boxes} hộp đầy`],
        check:`${boxes} × ${each} + ${left} = ${total}. Phần dư bé hơn số bút trong một hộp.`};
    }],
    ['Thời gian hoạt động qua giờ tiếp theo', '🕒 Thời gian', () => {
      const hour=random(7,15), start=random(35,55), end=random(5,25), answer=60-start+end;
      return {text:`Buổi đọc sách bắt đầu lúc <b>${hour} giờ ${start} phút</b>, kết thúc lúc <b>${hour+1} giờ ${end} phút</b> cùng ngày. Buổi đọc sách kéo dài bao nhiêu phút?`,unit:'phút',answer,
        steps:[`Từ lúc bắt đầu đến giờ tiếp theo có ${60-start} phút`,`Thêm ${end} phút nữa được ${answer} phút`],check:`${start} + ${answer} = ${60+end}.`};
    }]
  ]);
  extend(4, 'gioi', [
    ['So sánh diện tích khi cùng thêm chiều dài', '📐 Diện tích', () => {
      const a=random(12,25), b=random(6,11), c=random(3,9), answer=c*(a-b);
      return {text:`Hai tấm bìa hình chữ nhật có chiều rộng lần lượt là <b>${a} cm</b> và <b>${b} cm</b>. Cùng tăng chiều dài mỗi tấm thêm <b>${c} cm</b>, giữ nguyên chiều rộng. Diện tích tăng thêm của tấm thứ nhất hơn tấm thứ hai bao nhiêu xăng-ti-mét vuông?`,unit:'cm²',answer,
        steps:[`Tấm thứ nhất tăng ${a} × ${c} = ${a*c} cm²`,`Tấm thứ hai tăng ${b} × ${c} = ${b*c} cm²`,`Phần tăng chênh nhau ${a*c} − ${b*c} = ${answer} cm²`],check:`${b*c} + ${answer} = ${a*c}.`};
    }]
  ]);
  extend(5, 'kha', [
    ['Bổ sung lượng còn thiếu bằng số thập phân', '🧴 Số thập phân', () => {
      const total=random(40,99), used=random(5,total-1), answer=(total-used)/10;
      return {text:`Một bình chứa được <b>${format(total/10)} lít</b>. Bình đang có <b>${format(used/10)} lít</b> nước. Cần thêm bao nhiêu lít nước để đầy bình?`,unit:'lít',answer,
        steps:[`Lượng nước cần thêm là ${format(total/10)} − ${format(used/10)} = ${format(answer)} lít`],check:`${format(used/10)} + ${format(answer)} = ${format(total/10)}.`};
    }],
    ['Làm tròn số đo đến đơn vị gần nhất', '📏 Ước lượng', () => {
      const tenths=random(101,999), value=tenths/10, answer=Math.round(value);
      return {text:`Một sợi dây dài <b>${format(value)} m</b>. Làm tròn số đo này đến hàng đơn vị thì được bao nhiêu mét?`,unit:'m',answer,
        steps:[`Chữ số hàng phần mười là ${tenths%10}`,tenths%10>=5?'Vì chữ số này từ 5 trở lên, tăng hàng đơn vị thêm 1':'Vì chữ số này bé hơn 5, giữ nguyên hàng đơn vị',`Số đo làm tròn là ${answer} m`],check:`Số đo ban đầu nằm từ ${format(answer-0.5)} m đến dưới ${format(answer+0.5)} m.`};
    }]
  ]);
})();
