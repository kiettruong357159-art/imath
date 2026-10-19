(function (window) {
  'use strict';

  const FAMILY_COUNT = 8;

  function create(options) {
    const grade = options.grade;
    const topic = options.topic;
    const level = options.level;
    const family = options.family % FAMILY_COUNT;
    const copy = options.copy || 0;
    const u = options.utils;
    const advanced = level === 'nang-cao';
    const phrase = (first, second) => copy ? second : first;
    const kha = (concepts, hidden) => ({ steps: 2, concepts: concepts || 1, hidden: hidden || 0 });
    const high = (concepts, hidden, cases) => ({ steps: 3, concepts: concepts || 2, hidden: hidden || 0, cases: cases || 0 });
    const finish = (question, skillFamily, solution, normalMetrics, advancedMetrics) => {
      question.templateId = [grade, topic, level, family, copy].join('-');
      question.skillFamily = skillFamily;
      question.templateFamily = [grade, topic, family].join('-');
      return u.withDifficulty(question, level, advanced ? advancedMetrics : normalMetrics, solution);
    };

    if (topic === 'arithmetic') return arithmetic();
    if (topic === 'mental') return mental();
    if (topic === 'numberline') return numberline();
    if (topic === 'time') return time();
    if (topic === 'geometry') return geometry();
    if (topic === 'measure') return measure();
    if (topic === 'multiply') return multiply();
    if (topic === 'unknown') return unknown();
    if (topic === 'fractions') return fractions();
    if (topic === 'decimals') return decimals();
    if (topic === 'percent') return percent();
    if (topic === 'motion') return motion();
    return word();

    function arithmetic() {
      const ceiling = grade === 1 ? 70 : grade === 2 ? 700 : 7000;
      const a = u.random(Math.ceil(ceiling * .2), Math.ceil(ceiling * .55));
      const b = u.random(Math.ceil(ceiling * .08), Math.ceil(ceiling * .25));
      const c = u.random(Math.ceil(ceiling * .04), Math.min(a + b - 1, Math.ceil(ceiling * .18)));
      const d = u.random(2, Math.max(3, Math.ceil(ceiling * .08)));
      if (family === 0) {
        const answer = advanced ? a + b - c + d : a + b - c;
        const text = advanced
          ? phrase('Tính giá trị: ' + u.formatNumber(a) + ' + ' + u.formatNumber(b) + ' − ' + u.formatNumber(c) + ' + ' + u.formatNumber(d) + '.', 'Thực hiện phép tính ' + u.formatNumber(a) + ' + ' + u.formatNumber(b) + ' − ' + u.formatNumber(c) + ' + ' + u.formatNumber(d) + '.')
          : phrase(u.formatNumber(a) + ' + ' + u.formatNumber(b) + ' − ' + u.formatNumber(c) + ' = ?', 'Tính nhanh: ' + u.formatNumber(a) + ' cộng ' + u.formatNumber(b) + ' rồi bớt ' + u.formatNumber(c) + '.');
        return finish(u.numberQuestion(text, answer), 'tính xuôi nhiều phép tính', advanced ? 'Tính lần lượt ba phép tính từ trái sang phải.' : 'Cộng hai số đầu rồi trừ số cuối.', kha(2), high(2));
      }
      if (family === 1) {
        const result = advanced ? a + b - c + d : a + b - c;
        return finish(u.numberQuestion(phrase('Một số được cộng ' + u.formatNumber(b) + ', bớt ' + u.formatNumber(c) + (advanced ? ' rồi cộng ' + u.formatNumber(d) : '') + ' thì được ' + u.formatNumber(result) + '. Tìm số ban đầu.', 'Sau các thao tác: thêm ' + u.formatNumber(b) + ', lấy đi ' + u.formatNumber(c) + (advanced ? ', thêm tiếp ' + u.formatNumber(d) : '') + ', kết quả là ' + u.formatNumber(result) + '. Số lúc đầu là bao nhiêu?'), a), 'tìm số ban đầu', 'Thực hiện các phép tính ngược theo thứ tự từ cuối về đầu.', kha(2, 1), high(2, 1));
      }
      if (family === 2) {
        const result = a + b - c;
        return finish(u.numberQuestion(phrase(u.formatNumber(a) + ' + x − ' + u.formatNumber(c) + ' = ' + u.formatNumber(result) + '. Tìm x.', 'Thêm vào ' + u.formatNumber(a) + ' một số, sau đó bớt ' + u.formatNumber(c) + ' được ' + u.formatNumber(result) + '. Số đã thêm là bao nhiêu?'), b), 'tìm số được thêm', 'Cộng lại số đã bớt rồi trừ số ban đầu.', kha(2, 1), high(2, 1));
      }
      if (family === 3) {
        const result = a + b - c;
        const extra = advanced ? d : 0;
        return finish(u.numberQuestion(phrase(u.formatNumber(a) + ' + ' + u.formatNumber(b) + ' − x' + (extra ? ' + ' + u.formatNumber(extra) : '') + ' = ' + u.formatNumber(result + extra) + '. Tìm x.', 'Tổng của ' + u.formatNumber(a) + ' và ' + u.formatNumber(b) + ' bị bớt đi một số' + (extra ? ', rồi thêm ' + u.formatNumber(extra) : '') + ', còn ' + u.formatNumber(result + extra) + '. Số bị bớt là bao nhiêu?'), c), 'tìm số bị trừ đi', 'Tính tổng ban đầu rồi so sánh với kết quả để tìm phần đã bớt.', kha(2, 1), high(2, 1));
      }
      if (family === 4) {
        const left = a + b;
        const right = a + c + (advanced ? d : 0);
        return finish(u.choiceQuestion(phrase('Điền dấu thích hợp: ' + u.formatNumber(a) + ' + ' + u.formatNumber(b) + ' … ' + u.formatNumber(a + c) + (advanced ? ' + ' + u.formatNumber(d) : '') + '.', 'So sánh hai biểu thức ' + u.formatNumber(a) + ' + ' + u.formatNumber(b) + ' và ' + u.formatNumber(a + c) + (advanced ? ' + ' + u.formatNumber(d) : '') + '.'), left > right ? '>' : left < right ? '<' : '=', ['>', '<', '=']), 'so sánh hai biểu thức', 'Tính giá trị từng vế rồi so sánh.', kha(2), high(2));
      }
      if (family === 5) {
        const first = a + b, moved = Math.min(c, first - 1);
        const second = d + moved;
        return finish(u.numberQuestion(phrase('Hộp A có ' + u.formatNumber(first) + ' viên, hộp B có ' + u.formatNumber(d) + ' viên. Chuyển ' + u.formatNumber(moved) + ' viên từ A sang B. Hộp B có bao nhiêu viên?', 'Có ' + u.formatNumber(first) + ' vật ở ngăn trên và ' + u.formatNumber(d) + ' vật ở ngăn dưới. Chuyển ' + u.formatNumber(moved) + ' vật xuống ngăn dưới. Ngăn dưới có bao nhiêu vật?'), second), 'chuyển số lượng giữa hai nhóm', 'Lấy số ở nhóm nhận cộng với số được chuyển tới.', kha(2), high(2));
      }
      if (family === 6) {
        if (grade >= 4) {
          const factor = u.random(3, 12);
          return finish(u.numberQuestion(phrase(u.formatNumber(a) + ' + ' + u.formatNumber(b) + ' × ' + factor + ' = ?', 'Tính đúng thứ tự: ' + u.formatNumber(a) + ' cộng tích của ' + u.formatNumber(b) + ' và ' + factor + '.'), a + b * factor), 'thứ tự thực hiện phép tính', 'Thực hiện phép nhân trước rồi cộng.', kha(2), high(3));
        }
        const wrong = a + b - c + u.pick([-2, -1, 1, 2]);
        return finish(u.numberQuestion(phrase('Bạn An tính ' + u.formatNumber(a) + ' + ' + u.formatNumber(b) + ' − ' + u.formatNumber(c) + ' = ' + u.formatNumber(wrong) + '. Kết quả đúng là bao nhiêu?', 'Sửa kết quả sai: ' + u.formatNumber(a) + ' + ' + u.formatNumber(b) + ' − ' + u.formatNumber(c) + ' không bằng ' + u.formatNumber(wrong) + '. Kết quả đúng là?'), a + b - c), 'phát hiện và sửa sai', 'Tự tính lại biểu thức theo đúng thứ tự.', kha(2), high(2));
      }
      const groupA = u.random(5, Math.ceil(ceiling * .18));
      const groupB = u.random(5, Math.ceil(ceiling * .18));
      const removed = u.random(2, Math.min(groupA + groupB - 1, Math.ceil(ceiling * .1)));
      const added = advanced ? u.random(2, Math.ceil(ceiling * .08)) : 0;
      return finish(u.numberQuestion(phrase('Gộp ' + u.formatNumber(groupA) + ' đồ vật với ' + u.formatNumber(groupB) + ' đồ vật, lấy ra ' + u.formatNumber(removed) + (added ? ' rồi thêm ' + u.formatNumber(added) : '') + '. Còn bao nhiêu?', 'Một kho nhận hai lô gồm ' + u.formatNumber(groupA) + ' và ' + u.formatNumber(groupB) + ' sản phẩm. Kho xuất ' + u.formatNumber(removed) + (added ? ' rồi nhập bù ' + u.formatNumber(added) : '') + ' sản phẩm. Kho còn bao nhiêu?'), groupA + groupB - removed + added), 'gộp rồi thay đổi số lượng', advanced ? 'Cộng hai nhóm, trừ số lấy ra rồi cộng số nhập thêm.' : 'Cộng hai nhóm rồi trừ số lấy ra.', kha(2), high(3));
    }

    function mental() {
      const base = grade === 1 ? u.random(5, 35) : u.random(20, 90);
      const step = grade === 1 ? u.random(2, 8) : u.pick([2, 5, 10]);
      if (family === 0) {
        const other = base + u.random(-4, 8);
        return finish(u.choiceQuestion(phrase('Điền dấu: ' + base + ' + ' + step + ' … ' + other + '.', 'Sau khi tính nhẩm, hãy so sánh ' + base + ' + ' + step + ' với ' + other + '.'), base + step > other ? '>' : base + step < other ? '<' : '=', ['>', '<', '=']), 'so sánh sau tính nhẩm', 'Tính vế có phép cộng rồi so sánh.', kha(2), high(2));
      }
      if (family === 1) {
        const down = advanced ? u.random(1, step - 1 || 1) : 0;
        const values = advanced ? [base, base + step, base + step - down, base + step * 2 - down] : [base, base + step, base + step * 2, base + step * 3];
        const answer = advanced ? base + step * 2 - down * 2 : base + step * 4;
        return finish(u.numberQuestion(phrase('Viết số tiếp theo: ' + values.join(', ') + ', …', 'Dãy số ' + values.join(' → ') + ' → … còn thiếu số nào?'), answer), 'nhận biết quy luật dãy số', advanced ? 'Dãy lần lượt cộng ' + step + ' rồi trừ ' + down + '.' : 'Mỗi số tăng thêm ' + step + '.', kha(2), high(2));
      }
      if (family === 2) {
        const target = grade === 1 ? u.pick([20, 30, 40, 50]) : u.pick([50, 100, 200]);
        const known = u.random(5, target - 5);
        return finish(u.numberQuestion(phrase(known + ' cần thêm bao nhiêu để được ' + target + '?', 'Tìm số bù vào chỗ trống: ' + known + ' + □ = ' + target + '.'), target - known), 'bù đến số tròn', 'Lấy số tròn đích trừ số đã biết.', kha(2), high(2));
      }
      if (family === 3) {
        const x = u.random(3, grade === 1 ? 15 : 30);
        const delta = advanced ? u.random(1, 4) : 0;
        return finish(u.numberQuestion(phrase('Tính nhẩm: ' + x + ' + ' + (x + delta) + '.', 'Tổng của ' + x + ' và số lớn hơn nó ' + delta + ' đơn vị là bao nhiêu?'), x * 2 + delta), 'gấp đôi và gần gấp đôi', 'Gấp đôi ' + x + (delta ? ' rồi cộng thêm ' + delta + '.' : '.'), kha(2), high(2));
      }
      if (family === 4 && grade === 2) {
        const factor = u.pick([2, 5]), count = u.random(3, 10), extra = advanced ? u.random(1, 9) : 0;
        return finish(u.numberQuestion(phrase('Có ' + count + ' nhóm, mỗi nhóm ' + factor + ' vật' + (extra ? ', thêm ' + extra + ' vật lẻ' : '') + '. Có tất cả bao nhiêu?', factor + ' được lấy ' + count + ' lần' + (extra ? ' rồi cộng ' + extra : '') + ' bằng bao nhiêu?'), factor * count + extra), 'nhân nhẩm theo nhóm', advanced ? 'Nhân số nhóm với số vật mỗi nhóm rồi cộng phần lẻ.' : 'Lấy số vật mỗi nhóm nhân số nhóm.', kha(2), high(2));
      }
      if (family === 4) {
        const tens = u.random(1, 8) * 10, units = u.random(1, 9);
        return finish(u.numberQuestion(phrase('Số gồm ' + tens / 10 + ' chục và ' + units + ' đơn vị là số nào?', 'Ghép ' + tens + ' và ' + units + ' để được số có hai chữ số.'), tens + units), 'cấu tạo số', 'Lấy số chục cộng số đơn vị.', kha(2), high(2));
      }
      if (family === 5) {
        const result = base + step;
        return finish(u.choiceQuestion(phrase('Chọn dấu phép tính đúng: ' + base + ' … ' + step + ' = ' + result + '.', 'Dấu nào thay vào ô trống để ' + base + ' □ ' + step + ' = ' + result + '?'), '+', ['+', '−', '×', ':']), 'chọn phép tính phù hợp', 'Đối chiếu kết quả với từng phép tính có thể.', kha(2), high(2));
      }
      if (family === 6) {
        const low = base, highValue = base + step * 2;
        return finish(u.numberQuestion(phrase('Số nằm chính giữa ' + low + ' và ' + highValue + ' là số nào?', 'Tìm số cách đều ' + low + ' và ' + highValue + '.'), base + step), 'tìm số ở giữa', 'Tìm khoảng cách rồi lấy một nửa khoảng cách cộng vào số bé.', kha(2), high(2));
      }
      const add = u.random(2, 9), subtract = u.random(1, add);
      return finish(u.numberQuestion(phrase('Bắt đầu từ ' + base + ', nhẩm thêm ' + add + ' rồi bớt ' + subtract + '. Được bao nhiêu?', 'Tính bằng cách thuận tiện: ' + base + ' + ' + add + ' − ' + subtract + '.'), base + add - subtract), 'tính nhẩm hai bước', 'Cộng trước rồi trừ sau; có thể gộp phần tăng ròng.', kha(2), high(2));
    }

    function numberline() {
      const start = u.random(0, 35), step = u.pick([1, 2, 5]), position = u.random(1, 4);
      if (family === 0) return finish(u.numberQuestion(phrase('Tia số: ' + start + ' — ' + (start + step) + ' — □ — ' + (start + step * 3) + '. Điền số còn thiếu.', 'Số nào nằm ở vạch giữa ' + (start + step) + ' và ' + (start + step * 3) + '?'), start + step * 2), 'điền vạch còn thiếu', 'Mỗi vạch tăng thêm ' + step + '.', kha(2), high(2));
      if (family === 1) return finish(u.numberQuestion(phrase('Từ ' + start + ' đi sang phải ' + position + ' bước, mỗi bước ' + step + ' đơn vị. Đến số nào?', 'Trên tia số, bắt đầu ở ' + start + ' và tiến ' + position + ' khoảng bằng nhau, mỗi khoảng ' + step + '. Điểm cuối là?'), start + position * step), 'di chuyển sang phải', 'Nhân số bước với độ dài mỗi bước rồi cộng số đầu.', kha(2), high(2));
      if (family === 2) {
        const end = start + step * (position + 2);
        return finish(u.numberQuestion(phrase('Đứng ở ' + end + ', lùi sang trái ' + position + ' bước, mỗi bước ' + step + '. Đến số nào?', 'Từ vạch ' + end + ' quay lại ' + position + ' khoảng, mỗi khoảng ' + step + ' đơn vị. Số nhận được là?'), end - position * step), 'di chuyển sang trái', 'Tính tổng độ dài lùi rồi trừ khỏi số ban đầu.', kha(2), high(2));
      }
      if (family === 3) {
        const end = start + step * position;
        return finish(u.numberQuestion(phrase('Khoảng cách từ ' + start + ' đến ' + end + ' trên tia số là bao nhiêu đơn vị?', 'Hai điểm đặt tại ' + start + ' và ' + end + '. Chúng cách nhau bao nhiêu đơn vị?'), end - start), 'khoảng cách hai điểm', 'Lấy số lớn trừ số bé.', kha(2), high(2));
      }
      if (family === 4) {
        const end = start + step * position;
        return finish(u.numberQuestion(phrase('Từ ' + start + ' đến ' + end + ' có bao nhiêu bước, biết mỗi bước dài ' + step + ' đơn vị?', 'Đi ' + step + ' đơn vị mỗi lần để từ ' + start + ' tới ' + end + '. Cần bao nhiêu lần đi?'), position), 'tìm số bước nhảy', 'Lấy khoảng cách chia độ dài mỗi bước.', kha(2), high(2));
      }
      if (family === 5) {
        const right = start + step * 4;
        return finish(u.numberQuestion(phrase('Hai đầu đoạn tia số là ' + start + ' và ' + right + ', có 4 khoảng bằng nhau. Vạch thứ ' + position + ' sau ' + start + ' mang số nào?', 'Chia khoảng từ ' + start + ' đến ' + right + ' thành 4 phần bằng nhau. Đi ' + position + ' phần từ trái sang phải được số nào?'), start + step * position), 'chia đều khoảng số', 'Tìm độ dài một khoảng rồi nhân số khoảng cần đi.', kha(2), high(2));
      }
      if (family === 6) {
        const firstMove = u.random(2, 4), secondMove = u.random(1, firstMove);
        return finish(u.numberQuestion(phrase('Từ ' + start + ' đi phải ' + firstMove + ' bước rồi trái ' + secondMove + ' bước, mỗi bước ' + step + '. Dừng ở số nào?', 'Một chú thỏ ở vạch ' + start + ', nhảy tới ' + firstMove + ' lần rồi lùi ' + secondMove + ' lần; mỗi lần ' + step + ' đơn vị. Chú thỏ ở đâu?'), start + (firstMove - secondMove) * step), 'di chuyển hai chiều', 'Tìm số bước tiến ròng rồi nhân độ dài bước và cộng điểm đầu.', kha(2), high(2));
      }
      const middle = start + step * 2;
      return finish(u.choiceQuestion(phrase('Số nào ở bên phải ' + middle + ' nhưng bên trái ' + (middle + step * 2) + '?', 'Chọn số nằm giữa ' + middle + ' và ' + (middle + step * 2) + ' trên tia số.'), String(middle + step), [middle - step, middle + step, middle + step * 2, middle + step * 3]), 'xác định vị trí tương đối', 'Số cần tìm lớn hơn mốc trái và nhỏ hơn mốc phải.', kha(2), high(2));
    }

    function time() {
      const minuteChoices = grade === 1 ? [0, 30] : grade === 2 ? [0, 15, 30, 45] : [0, 5, 10, 15, 20, 30, 40, 45, 50];
      const startHour = u.random(6, 16), startMinute = u.pick(minuteChoices);
      const startTotal = startHour * 60 + startMinute;
      const duration = advanced ? u.pick([75, 90, 105, 120]) : grade === 1 ? u.pick([30, 60]) : u.pick([30, 45, 60]);
      const endTotal = startTotal + duration;
      const endHour = Math.floor(endTotal / 60), endMinute = endTotal % 60;
      if (family === 0) {
        const q = u.timeQuestion(phrase('Đồng hồ đang chỉ mấy giờ?', 'Hãy đọc thời gian trên mặt đồng hồ.'), startHour, startMinute, u.clockSVG(startHour, startMinute));
        return finish(q, 'đọc giờ từ đồng hồ kim', 'Đọc kim giờ trước rồi đọc kim phút.', kha(1), high(2));
      }
      if (family === 1) {
        const q = u.timeQuestion(phrase('Đồng hồ chỉ thời điểm bắt đầu. Sau ' + duration + ' phút là mấy giờ?', 'Từ thời gian trên đồng hồ, cộng thêm ' + duration + ' phút. Kết quả là?'), endHour, endMinute, u.clockSVG(startHour, startMinute));
        return finish(q, 'tìm thời điểm kết thúc', 'Cộng khoảng thời gian vào thời điểm bắt đầu.', kha(2), high(2));
      }
      if (family === 2) {
        const safeStart = startTotal + duration;
        const q = u.timeQuestion(phrase('Bây giờ là ' + Math.floor(safeStart / 60) + ':' + String(safeStart % 60).padStart(2, '0') + '. Trước đó ' + duration + ' phút là mấy giờ?', 'Một hoạt động kết thúc lúc ' + Math.floor(safeStart / 60) + ':' + String(safeStart % 60).padStart(2, '0') + ' và kéo dài ' + duration + ' phút. Hoạt động bắt đầu lúc nào?'), startHour, startMinute);
        return finish(q, 'tìm thời điểm bắt đầu', 'Lấy thời điểm kết thúc trừ thời lượng.', kha(2, 1), high(2, 1));
      }
      if (family === 3) return finish(u.numberQuestion(phrase('Từ ' + startHour + ':' + String(startMinute).padStart(2, '0') + ' đến ' + endHour + ':' + String(endMinute).padStart(2, '0') + ' là bao nhiêu phút?', 'Một tiết sinh hoạt bắt đầu lúc ' + startHour + ':' + String(startMinute).padStart(2, '0') + ' và kết thúc lúc ' + endHour + ':' + String(endMinute).padStart(2, '0') + '. Tiết đó kéo dài bao nhiêu phút?'), duration), 'tính khoảng thời gian', 'Đổi hai thời điểm về phút rồi lấy thời điểm sau trừ thời điểm trước.', kha(2), high(2));
      if (family === 4) {
        const first = grade === 1 ? 30 : u.pick([25, 30, 40]), rest = advanced ? u.pick([10, 15, 20]) : u.pick([5, 10]), second = grade === 1 ? 30 : u.pick([25, 30, 40]);
        return finish(u.numberQuestion(phrase('Học ' + first + ' phút, nghỉ ' + rest + ' phút rồi luyện ' + second + ' phút. Tổng thời gian là bao nhiêu phút?', 'Một buổi gồm ba phần dài ' + first + ', ' + rest + ' và ' + second + ' phút. Buổi đó kéo dài bao lâu?'), first + rest + second), 'cộng nhiều khoảng thời gian', 'Cộng thời lượng của từng phần.', kha(2), high(2));
      }
      if (family === 5) {
        const first = u.pick([30, 45, 60, 75]), second = u.pick([30, 45, 60, 90]);
        return finish(u.choiceQuestion(phrase('Hoạt động A kéo dài ' + first + ' phút, hoạt động B kéo dài ' + second + ' phút. Hoạt động nào lâu hơn?', 'So sánh hai khoảng thời gian ' + first + ' phút và ' + second + ' phút.'), first > second ? 'A lâu hơn' : first < second ? 'B lâu hơn' : 'Bằng nhau', ['A lâu hơn', 'B lâu hơn', 'Bằng nhau']), 'so sánh thời lượng', 'Đưa hai thời lượng về cùng đơn vị phút rồi so sánh.', kha(2), high(2));
      }
      if (family === 6) {
        const hours = u.random(1, grade === 1 ? 2 : 5), minutes = u.pick(grade === 1 ? [0, 30] : [10, 15, 20, 30, 45]);
        return finish(u.numberQuestion(phrase(hours + ' giờ ' + minutes + ' phút bằng bao nhiêu phút?', 'Đổi ' + hours + ' giờ ' + minutes + ' phút hoàn toàn sang phút.'), hours * 60 + minutes), 'đổi đơn vị thời gian', 'Đổi giờ ra phút rồi cộng phần phút lẻ.', kha(2), high(2));
      }
      const part1 = u.pick([20, 30, 40]), part2 = u.pick([15, 25, 35]), total = part1 + part2;
      const q = u.timeQuestion(phrase('Bắt đầu lúc ' + startHour + ':' + String(startMinute).padStart(2, '0') + ', làm hai việc lần lượt ' + part1 + ' phút và ' + part2 + ' phút. Hoàn thành lúc nào?', 'Từ ' + startHour + ':' + String(startMinute).padStart(2, '0') + ', hoàn thành chặng đầu sau ' + part1 + ' phút và chặng sau thêm ' + part2 + ' phút. Thời điểm cuối là?'), Math.floor((startTotal + total) / 60), (startTotal + total) % 60);
      return finish(q, 'lịch trình hai chặng', 'Cộng hai thời lượng rồi cộng vào thời điểm bắt đầu.', kha(2), high(3));
    }

    function geometry() {
      if (grade === 1) return geometryGrade1();
      if (grade === 2) return geometryGrade2();
      if (grade === 3) return geometryGrade3();
      if (grade === 4) return geometryGrade4();
      return geometryGrade5();
    }

    function geometryGrade1() {
      let counts = { triangle: u.random(2, 5), square: u.random(2, 5), circle: u.random(1, 4) };
      if (family === 6) {
        const dominant = u.pick(['triangle', 'square', 'circle']);
        counts = { triangle: 2, square: 3, circle: 1 };
        counts[dominant] = 5;
        if (dominant === 'square') counts.triangle = 2;
      }
      const visual = u.shapeCountSVG(counts);
      let question, skill, solution;
      if (family === 0) { question = level === 'nang-cao' ? u.numberQuestion(phrase('Nếu vẽ thêm 2 hình tam giác, trong khung sẽ có bao nhiêu hình tam giác?', 'Số hình ba cạnh sẽ là bao nhiêu sau khi thêm 2 hình?'), counts.triangle + 2) : u.numberQuestion(phrase('Đếm số hình tam giác trong hình.', 'Có bao nhiêu hình ba cạnh trong khung?'), counts.triangle); skill = level === 'nang-cao' ? 'đếm rồi thêm hình' : 'đếm hình theo đặc điểm'; solution = level === 'nang-cao' ? 'Đếm số tam giác hiện có rồi cộng thêm 2.' : 'Nhận ra hình tam giác rồi đếm lần lượt.'; }
      else if (family === 1) { const removed = Math.min(1, counts.circle); question = level === 'nang-cao' ? u.numberQuestion(phrase('Nếu che đi ' + removed + ' hình tròn, còn nhìn thấy bao nhiêu hình tròn?', 'Bớt ' + removed + ' hình không có cạnh khỏi khung. Còn lại bao nhiêu hình?'), counts.circle - removed) : u.numberQuestion(phrase('Trong hình có bao nhiêu hình tròn?', 'Đếm các hình không có cạnh trong khung.'), counts.circle); skill = level === 'nang-cao' ? 'đếm rồi bớt hình' : 'nhận dạng hình tròn'; solution = level === 'nang-cao' ? 'Đếm số hình tròn rồi trừ số bị che.' : 'Nhận ra hình tròn rồi đếm.'; }
      else if (family === 2) { question = u.numberQuestion(phrase('Không tính hình tròn, có tất cả bao nhiêu hình?', 'Chỉ đếm hình tam giác và hình vuông. Có bao nhiêu hình?'), counts.triangle + counts.square); skill = 'loại trừ một loại hình'; solution = 'Cộng số tam giác và số hình vuông.'; }
      else if (family === 3) { question = u.numberQuestion(phrase('Số hình vuông hơn hoặc kém số hình tam giác bao nhiêu hình?', 'Tìm chênh lệch giữa số hình vuông và số hình tam giác.'), Math.abs(counts.square - counts.triangle)); skill = 'so sánh số lượng hình'; solution = 'Lấy số lớn trừ số bé.'; }
      else if (family === 4) { question = u.numberQuestion(phrase('Trong khung có tất cả bao nhiêu hình?', 'Gộp cả ba loại hình rồi cho biết tổng số.'), counts.triangle + counts.square + counts.circle); skill = 'tính tổng số hình'; solution = 'Cộng số lượng của ba loại hình.'; }
      else if (family === 5) { question = u.numberQuestion(phrase('Nếu lấy đi ' + Math.min(2, counts.square) + ' hình vuông thì còn bao nhiêu hình trong khung?', 'Bỏ bớt ' + Math.min(2, counts.square) + ' hình vuông. Tổng số hình còn lại là?'), counts.triangle + counts.square + counts.circle - Math.min(2, counts.square)); skill = 'đếm rồi bớt hình'; solution = 'Tính tổng số hình rồi trừ số hình bị lấy đi.'; }
      else if (family === 6) { const max = Math.max(counts.triangle, counts.square, counts.circle); const answer = counts.triangle === max ? 'Hình tam giác' : counts.square === max ? 'Hình vuông' : 'Hình tròn'; question = u.choiceQuestion(phrase('Loại hình nào xuất hiện nhiều nhất?', 'Quan sát và chọn loại hình có số lượng lớn nhất.'), answer, ['Hình tam giác', 'Hình vuông', 'Hình tròn']); skill = 'so sánh ba nhóm hình'; solution = 'Đếm từng loại rồi chọn nhóm có số lớn nhất.'; }
      else { question = u.numberQuestion(phrase('Các hình tam giác có tổng cộng bao nhiêu cạnh?', 'Có ' + counts.triangle + ' hình tam giác. Tổng số cạnh của chúng là bao nhiêu?'), counts.triangle * 3); skill = 'liên hệ hình và số cạnh'; solution = 'Mỗi tam giác có 3 cạnh; cộng 3 nhiều lần.'; }
      question.visual = visual;
      return finish(question, skill, solution, kha(1), high(2, family >= 5 ? 1 : 0));
    }

    function geometryGrade2() {
      const lengths = [u.random(3, 12), u.random(3, 12), u.random(3, 12), u.random(3, 12)];
      const total = lengths.reduce((sum, value) => sum + value, 0);
      let question, visual, skill, solution;
      if (family === 0) { visual = u.polylineSVG(lengths); question = u.numberQuestion(phrase('Tính độ dài đường gấp khúc trong hình.', 'Cộng các đoạn để tìm tổng chiều dài đường gấp khúc.'), total); skill = 'tổng độ dài các đoạn'; solution = 'Cộng độ dài bốn đoạn.'; }
      else if (family === 1) { const hidden = u.random(0, 3); visual = u.polylineSVG(lengths, hidden); question = u.numberQuestion(phrase('Đường gấp khúc dài ' + total + ' cm. Đoạn có dấu hỏi dài bao nhiêu?', 'Biết tổng chiều dài là ' + total + ' cm, hãy tìm đoạn bị che.'), lengths[hidden]); skill = 'tìm đoạn chưa biết'; solution = 'Cộng ba đoạn đã biết rồi lấy tổng trừ kết quả.'; }
      else if (family === 2) { visual = u.polylineSVG(lengths); question = u.numberQuestion(phrase('Ba đoạn đầu của đường gấp khúc dài bao nhiêu xăng-ti-mét?', 'Chưa tính đoạn cuối, phần đường đã đi dài bao nhiêu?'), lengths[0] + lengths[1] + lengths[2]); skill = 'tính một phần đường gấp khúc'; solution = 'Cộng ba đoạn đầu.'; }
      else if (family === 3) { visual = u.polylineSVG(lengths); question = u.numberQuestion(phrase('Đoạn cuối dài hơn hoặc ngắn hơn đoạn đầu bao nhiêu xăng-ti-mét?', 'Tìm chênh lệch độ dài giữa đoạn thứ nhất và đoạn thứ tư.'), Math.abs(lengths[3] - lengths[0])); skill = 'so sánh hai đoạn'; solution = 'Lấy độ dài lớn trừ độ dài bé.'; }
      else if (family === 4) { visual = u.polylineSVG(lengths); question = u.numberQuestion(phrase('Nếu kéo dài đoạn cuối thêm 5 cm, đường gấp khúc mới dài bao nhiêu?', 'Nối thêm 5 cm vào điểm cuối. Tổng chiều dài lúc này là?'), total + 5); skill = 'thay đổi chiều dài đường'; solution = 'Tính tổng ban đầu rồi cộng phần nối thêm.'; }
      else if (family === 5) { visual = u.polylineSVG(lengths); question = u.numberQuestion(phrase('Đường gấp khúc có bao nhiêu đoạn thẳng?', 'Đếm số đoạn nối giữa các chấm màu cam.'), lengths.length); skill = 'nhận biết số đoạn'; solution = 'Đếm từng đoạn giữa hai điểm liên tiếp.'; }
      else if (family === 6) { const cut = Math.min(2, lengths[1] - 1); visual = u.polylineSVG(lengths); question = u.numberQuestion(phrase('Rút ngắn đoạn thứ hai ' + cut + ' cm. Đường gấp khúc còn dài bao nhiêu?', 'Đoạn thứ hai bị cắt bớt ' + cut + ' cm; tổng chiều dài mới là?'), total - cut); skill = 'điều chỉnh một đoạn'; solution = 'Tính tổng rồi trừ phần bị rút ngắn.'; }
      else { const hidden = u.random(0, 3); const target = total + 10; visual = u.polylineSVG(lengths, hidden); question = u.numberQuestion(phrase('Muốn đường gấp khúc dài ' + target + ' cm, đoạn có dấu hỏi phải dài thêm bao nhiêu so với hiện tại?', 'Tổng hiện tại là ' + total + ' cm. Để đạt ' + target + ' cm cần nối thêm bao nhiêu?'), target - total); skill = 'tìm phần cần nối thêm'; solution = 'Lấy chiều dài mục tiêu trừ chiều dài hiện tại.'; }
      question.visual = visual;
      return finish(question, skill, solution, kha(1), high(2, family === 1 || family === 7 ? 1 : 0));
    }

    function geometryGrade3() {
      const length = u.random(7, 20), width = u.random(3, length - 1), perimeter = (length + width) * 2, area = length * width;
      let question, skill, solution;
      if (family === 0) { question = u.numberQuestion(phrase('Tính chu vi hình chữ nhật trong hình.', 'Một vòng quanh hình chữ nhật dài bao nhiêu xăng-ti-mét?'), perimeter); question.visual = u.rectangleSVG(length, width); skill = 'chu vi hình chữ nhật'; solution = 'Cộng chiều dài và chiều rộng rồi nhân 2.'; }
      else if (family === 1) { question = u.numberQuestion(phrase('Tính diện tích hình chữ nhật rồi cộng thêm ' + width + ' cm².', 'Diện tích hình chữ nhật trong hình lớn hơn bao nhiêu sau khi thêm ' + width + ' cm²?'), area + width); question.visual = u.rectangleSVG(length, width); skill = 'diện tích và phép cộng'; solution = 'Nhân chiều dài với chiều rộng rồi cộng phần thêm.'; }
      else if (family === 2) { question = u.numberQuestion(phrase('Hình chữ nhật có chu vi ' + perimeter + ' cm. Tìm chiều rộng có dấu hỏi.', 'Biết nửa chu vi và chiều dài, hãy tìm cạnh chưa biết.'), width); question.visual = u.rectangleSVG(length, width, true); skill = 'tìm cạnh từ chu vi'; solution = 'Lấy nửa chu vi trừ chiều dài.'; }
      else if (family === 3) { question = u.numberQuestion(phrase('Hình chữ nhật có diện tích ' + area + ' cm² và rộng ' + width + ' cm. Chiều dài là bao nhiêu?', 'Lấy diện tích ' + area + ' cm² chia chiều rộng ' + width + ' cm để tìm chiều dài.'), length); question.visual = u.rectangleSVG(length, width, false, true); skill = 'tìm cạnh từ diện tích'; solution = 'Lấy diện tích chia chiều rộng.'; }
      else if (family === 4) { const side = u.random(4, 15); question = u.numberQuestion(phrase('Hình vuông có cạnh ' + side + ' cm. Chu vi là bao nhiêu?', 'Đi một vòng quanh hình vuông cạnh ' + side + ' cm dài bao nhiêu?'), side * 4); question.visual = u.rectangleSVG(side, side); skill = 'chu vi hình vuông'; solution = 'Lấy độ dài cạnh nhân 4.'; }
      else if (family === 5) { const side = u.random(4, 15); question = u.numberQuestion(phrase('Hình vuông cạnh ' + side + ' cm được ghép từ các ô vuông 1 cm². Có bao nhiêu ô?', 'Tính diện tích hình vuông có cạnh ' + side + ' cm.'), side * side); question.visual = u.rectangleSVG(side, side); skill = 'diện tích hình vuông'; solution = 'Lấy cạnh nhân cạnh.'; }
      else if (family === 6) { const gate = u.random(1, Math.min(5, width)); question = u.numberQuestion(phrase('Rào quanh hình chữ nhật nhưng chừa cổng rộng ' + gate + ' cm. Cần bao nhiêu xăng-ti-mét hàng rào?', 'Chu vi hình là ' + perimeter + ' cm, không rào đoạn cổng ' + gate + ' cm. Độ dài hàng rào là?'), perimeter - gate); question.visual = u.rectangleSVG(length, width); skill = 'chu vi có phần để trống'; solution = 'Tính chu vi rồi trừ chiều rộng cổng.'; }
      else { const rows = u.random(2, 6), columns = u.random(3, 8); question = u.numberQuestion(phrase('Một hình chữ nhật ghép thành ' + rows + ' hàng, mỗi hàng ' + columns + ' ô vuông. Có tất cả bao nhiêu ô?', 'Tấm bìa có ' + rows + ' hàng và ' + columns + ' cột ô vuông. Số ô là?'), rows * columns); question.visual = u.rectangleSVG(columns, rows); skill = 'đếm ô theo hàng cột'; solution = 'Nhân số hàng với số cột.'; }
      return finish(question, skill, solution, kha(1), high(2, family === 2 || family === 3 ? 1 : 0));
    }

    function geometryGrade4() {
      const angle = u.pick([35, 50, 70, 90, 110, 125, 140]);
      if (family === 0) { const answer = angle < 90 ? 'Góc nhọn' : angle === 90 ? 'Góc vuông' : 'Góc tù'; const q = u.choiceQuestion(phrase('Góc trong hình thuộc loại nào?', 'Dựa vào số đo, hãy gọi đúng tên loại góc.'), answer, ['Góc nhọn', 'Góc vuông', 'Góc tù', 'Góc bẹt']); q.visual = u.angleSVG(angle); return finish(q, 'phân loại góc', 'So sánh số đo với 90°.', kha(1), high(2)); }
      if (family === 1) { const acuteAngle = u.pick([25, 35, 40, 50, 65, 70]); const q = u.numberQuestion(phrase('Góc bao nhiêu độ cần thêm vào góc ' + acuteAngle + '° để được góc vuông?', 'Tìm phần còn thiếu để ' + acuteAngle + '° tạo thành 90°.'), 90 - acuteAngle); q.visual = u.angleSVG(acuteAngle); return finish(q, 'góc phụ nhau', 'Lấy 90° trừ số đo góc đã biết.', kha(2), high(2)); }
      if (family === 2) { const q = u.numberQuestion(phrase('Góc kề bù với góc ' + angle + '° có số đo bao nhiêu?', 'Hai góc tạo thành góc bẹt 180°. Góc còn lại là?'), 180 - angle); q.visual = u.angleSVG(angle); return finish(q, 'góc bù nhau', 'Lấy 180° trừ số đo góc đã biết.', kha(2), high(2)); }
      const outerWidth = u.random(10, 20), outerHeight = u.random(8, 15), cutWidth = u.random(3, outerWidth - 4), cutHeight = u.random(2, outerHeight - 3);
      const missingHeight = outerHeight - cutHeight, outerArea = outerWidth * outerHeight, cutArea = cutWidth * missingHeight, coloredArea = outerArea - cutArea;
      if (family === 3) { const q = u.numberQuestion(phrase('Tính diện tích phần tô màu của hình chữ L.', 'Hình chữ nhật lớn bị cắt một góc. Phần còn lại có diện tích bao nhiêu?'), coloredArea); q.visual = u.lShapeSVG(outerWidth, outerHeight, cutWidth, cutHeight); return finish(q, 'diện tích hình ghép', 'Tính diện tích hình bao ngoài rồi trừ phần bị cắt.', kha(1), high(2, 1)); }
      if (family === 4) { const q = u.numberQuestion(phrase('Diện tích hình chữ nhật bao ngoài lớn hơn phần tô màu bao nhiêu xăng-ti-mét vuông?', 'Phần nét đứt bị bỏ có diện tích bao nhiêu?'), cutArea); q.visual = u.lShapeSVG(outerWidth, outerHeight, cutWidth, cutHeight); return finish(q, 'tìm diện tích phần khuyết', 'Nhân chiều rộng phần khuyết với chiều cao tương ứng.', kha(2), high(2)); }
      if (family === 5) { const q = u.numberQuestion(phrase('Biết diện tích hình bao ngoài là ' + outerArea + ' cm² và phần khuyết là ' + cutArea + ' cm². Diện tích còn lại là?', 'Lấy ' + outerArea + ' cm² bỏ đi ' + cutArea + ' cm². Phần tô màu rộng bao nhiêu?'), coloredArea); q.visual = u.lShapeSVG(outerWidth, outerHeight, cutWidth, cutHeight); return finish(q, 'diện tích còn lại', 'Lấy diện tích lớn trừ diện tích bị khuyết.', kha(2), high(2)); }
      if (family === 6) { const side = u.random(5, 20), perimeter = side * 4; const q = u.numberQuestion(phrase('Hình vuông có chu vi ' + perimeter + ' cm. Diện tích là bao nhiêu?', 'Từ chu vi ' + perimeter + ' cm, hãy tìm diện tích hình vuông.'), side * side); q.visual = u.rectangleSVG(side, side, true, true); return finish(q, 'diện tích từ chu vi', 'Chia chu vi cho 4 để tìm cạnh rồi lấy cạnh nhân cạnh.', kha(2, 1), high(2, 1)); }
      const length = u.random(8, 20), width = u.random(4, length - 1), perimeter = (length + width) * 2;
      const q = u.numberQuestion(phrase('Hình chữ nhật có chu vi ' + perimeter + ' cm và chiều dài ' + length + ' cm. Diện tích bằng bao nhiêu?', 'Từ chu vi và chiều dài, tìm chiều rộng rồi tính diện tích.'), length * width); q.visual = u.rectangleSVG(length, width, true); return finish(q, 'diện tích từ chu vi hình chữ nhật', 'Tìm nửa chu vi, trừ chiều dài để có chiều rộng, rồi nhân hai cạnh.', kha(2, 1), high(3, 1));
    }

    function geometryGrade5() {
      const base = u.random(4, 16) * 2, height = u.random(3, 15), area = base * height / 2;
      if (family === 0) { const q = u.numberQuestion(phrase('Tính diện tích hình tam giác trong hình.', 'Hình tam giác có đáy và chiều cao như hình. Diện tích là?'), area); q.visual = u.triangleSVG(base, height); return finish(q, 'diện tích tam giác', 'Lấy đáy nhân chiều cao rồi chia 2.', kha(1), high(2)); }
      if (family === 1) { const q = u.numberQuestion(phrase('Tam giác có diện tích ' + area + ' cm² và đáy ' + base + ' cm. Chiều cao là bao nhiêu?', 'Từ diện tích và đáy, tìm chiều cao tam giác.'), height); q.visual = u.triangleSVG(base, '?'); return finish(q, 'tìm chiều cao tam giác', 'Lấy diện tích nhân 2 rồi chia cho đáy.', kha(2, 1), high(2, 1)); }
      if (family === 2) { const q = u.numberQuestion(phrase('Tam giác có diện tích ' + area + ' cm² và cao ' + height + ' cm. Độ dài đáy là bao nhiêu?', 'Tìm cạnh đáy khi biết diện tích và chiều cao.'), base); q.visual = u.triangleSVG('?', height); return finish(q, 'tìm đáy tam giác', 'Lấy diện tích nhân 2 rồi chia cho chiều cao.', kha(2, 1), high(2, 1)); }
      const length = u.random(5, 14), width = u.random(3, 10), boxHeight = u.random(2, 8), volume = length * width * boxHeight;
      if (family === 3) { const q = u.numberQuestion(phrase('Tính thể tích hình hộp chữ nhật trong hình.', 'Ba kích thước của hộp được ghi trên hình. Hộp có thể tích bao nhiêu?'), volume); q.visual = u.boxSVG(length, width, boxHeight); return finish(q, 'thể tích hình hộp', 'Nhân chiều dài, chiều rộng và chiều cao.', kha(2), high(2)); }
      if (family === 4) { const q = u.numberQuestion(phrase('Hộp có thể tích ' + volume + ' cm³, dài ' + length + ' cm và rộng ' + width + ' cm. Chiều cao là?', 'Từ thể tích và diện tích đáy, tìm chiều cao hộp.'), boxHeight); q.visual = u.boxSVG(length, width, '?'); return finish(q, 'tìm chiều cao hình hộp', 'Tính diện tích đáy rồi lấy thể tích chia diện tích đáy.', kha(2, 1), high(2, 1)); }
      if (family === 5) { const outerW = u.random(12, 22), outerH = u.random(9, 17), cutW = u.random(3, outerW - 5), cutH = u.random(3, outerH - 4); const result = outerW * outerH - cutW * (outerH - cutH); const q = u.numberQuestion(phrase('Tính diện tích hình ghép sau khi bỏ phần nét đứt.', 'Phần chữ L còn lại có diện tích bao nhiêu?'), result); q.visual = u.lShapeSVG(outerW, outerH, cutW, cutH); return finish(q, 'diện tích hình ghép', 'Tính diện tích hình bao ngoài rồi trừ phần khuyết.', kha(2), high(2, 1)); }
      if (family === 6) { const surface = 2 * (length * width + length * boxHeight + width * boxHeight); const q = u.numberQuestion(phrase('Tính diện tích toàn phần của hình hộp chữ nhật.', 'Tổng diện tích sáu mặt của chiếc hộp là bao nhiêu xăng-ti-mét vuông?'), surface); q.visual = u.boxSVG(length, width, boxHeight); return finish(q, 'diện tích toàn phần hình hộp', 'Tính diện tích ba cặp mặt đối diện rồi cộng lại.', kha(2), high(3)); }
      const waterHeight = u.random(1, boxHeight), waterVolume = length * width * waterHeight;
      const q = u.numberQuestion(phrase('Bể đáy ' + length + ' cm × ' + width + ' cm có nước cao ' + waterHeight + ' cm. Thể tích nước là bao nhiêu?', 'Mực nước trong bể hình hộp cao ' + waterHeight + ' cm. Có bao nhiêu xăng-ti-mét khối nước?'), waterVolume); q.visual = u.boxSVG(length, width, waterHeight); return finish(q, 'thể tích chất lỏng trong bể', 'Nhân diện tích đáy với chiều cao mực nước.', kha(2), high(3));
    }

    function measure() {
      if (grade === 2) {
        const metres = u.random(2, 18), centimetres = u.random(10, 90), totalCm = metres * 100 + centimetres;
        if (family === 0) return finish(u.numberQuestion(phrase(metres + ' m ' + centimetres + ' cm bằng bao nhiêu xăng-ti-mét?', 'Đổi toàn bộ ' + metres + ' m ' + centimetres + ' cm sang cm.'), totalCm), 'đổi mét và xăng-ti-mét', 'Đổi mét ra xăng-ti-mét rồi cộng phần lẻ.', kha(2), high(2));
        if (family === 1) { const cut = u.random(20, 90); return finish(u.numberQuestion(phrase('Sợi dây dài ' + metres + ' m ' + centimetres + ' cm, cắt đi ' + cut + ' cm. Còn bao nhiêu cm?', 'Sau khi bớt ' + cut + ' cm khỏi ' + metres + ' m ' + centimetres + ' cm, chiều dài còn lại là?'), totalCm - cut), 'đổi đơn vị rồi trừ', 'Đổi về cm rồi trừ đoạn đã cắt.', kha(2), high(2)); }
        if (family === 2) { const add = u.random(15, 80); return finish(u.numberQuestion(phrase('Đoạn dây ' + totalCm + ' cm nối thêm ' + add + ' cm. Dài tất cả bao nhiêu cm?', 'Cộng hai đoạn dài ' + totalCm + ' cm và ' + add + ' cm.'), totalCm + add), 'cộng độ dài', 'Cộng hai độ dài cùng đơn vị.', kha(2), high(2)); }
        if (family === 3) { const other = totalCm + u.random(-50, 70); return finish(u.choiceQuestion(phrase('So sánh ' + metres + ' m ' + centimetres + ' cm và ' + other + ' cm.', 'Điền dấu đúng sau khi đổi đơn vị: ' + metres + ' m ' + centimetres + ' cm … ' + other + ' cm.'), totalCm > other ? '>' : totalCm < other ? '<' : '=', ['>', '<', '=']), 'so sánh độ dài khác cách viết', 'Đổi về cùng đơn vị cm rồi so sánh.', kha(2), high(2)); }
        if (family === 4) { const pieces = u.pick([2, 5, 10]), length = pieces * u.random(10, 40); return finish(u.numberQuestion(phrase('Dây dài ' + length + ' cm được cắt thành ' + pieces + ' đoạn bằng nhau. Mỗi đoạn dài bao nhiêu?', 'Chia đều ' + length + ' cm thành ' + pieces + ' phần. Độ dài một phần là?'), length / pieces), 'chia đều độ dài', 'Lấy tổng độ dài chia số đoạn.', kha(2), high(2)); }
        if (family === 5) { const missing = u.random(20, 90), final = totalCm + missing; return finish(u.numberQuestion(phrase('Cần nối thêm bao nhiêu cm vào đoạn ' + totalCm + ' cm để được ' + final + ' cm?', 'Đoạn hiện tại ' + totalCm + ' cm, mục tiêu ' + final + ' cm. Phần thiếu là?'), missing), 'tìm độ dài còn thiếu', 'Lấy độ dài mục tiêu trừ độ dài hiện có.', kha(2, 1), high(2, 1)); }
        if (family === 6) { const count = u.random(3, 8), each = u.random(5, 20); return finish(u.numberQuestion(phrase('Ghép ' + count + ' que, mỗi que dài ' + each + ' cm. Tổng chiều dài là?', 'Có ' + count + ' đoạn bằng nhau dài ' + each + ' cm. Cả đường dài bao nhiêu?'), count * each), 'độ dài các đoạn bằng nhau', 'Nhân số đoạn với độ dài mỗi đoạn.', kha(2), high(2)); }
        const travelled = u.random(20, totalCm - 1); return finish(u.numberQuestion(phrase('Đường dài ' + totalCm + ' cm, đã đi ' + travelled + ' cm. Còn bao nhiêu cm?', 'Lấy tổng quãng đường ' + totalCm + ' cm bớt phần đã đi ' + travelled + ' cm.'), totalCm - travelled), 'phần độ dài còn lại', 'Lấy tổng trừ phần đã dùng.', kha(2), high(2));
      }
      const factor = grade === 4 ? 1000 : 60;
      const major = u.random(2, 12), minor = u.random(10, factor - 10), total = major * factor + minor;
      const unitBig = grade === 4 ? 'km' : 'giờ', unitSmall = grade === 4 ? 'm' : 'phút';
      if (family === 0) return finish(u.numberQuestion(phrase(major + ' ' + unitBig + ' ' + minor + ' ' + unitSmall + ' bằng bao nhiêu ' + unitSmall + '?', 'Đổi hỗn số đo ' + major + ' ' + unitBig + ' ' + minor + ' ' + unitSmall + ' sang ' + unitSmall + '.'), total), 'đổi đơn vị hỗn hợp', 'Đổi đơn vị lớn rồi cộng phần đơn vị nhỏ.', kha(2), high(2));
      if (family === 1) { const used = u.random(10, minor + 50); return finish(u.numberQuestion(phrase(major + ' ' + unitBig + ' ' + minor + ' ' + unitSmall + ' bớt ' + used + ' ' + unitSmall + ' còn bao nhiêu ' + unitSmall + '?', 'Đổi về ' + unitSmall + ' rồi trừ ' + used + ' ' + unitSmall + '.'), total - used), 'đổi đơn vị rồi trừ', 'Đổi tất cả về đơn vị nhỏ rồi trừ.', kha(2), high(2)); }
      if (family === 2) { const add = u.random(10, factor - 1); return finish(u.numberQuestion(phrase('Cộng thêm ' + add + ' ' + unitSmall + ' vào ' + major + ' ' + unitBig + ' ' + minor + ' ' + unitSmall + '. Tổng bằng bao nhiêu ' + unitSmall + '?', 'Đại lượng ban đầu tăng thêm ' + add + ' ' + unitSmall + '. Giá trị mới là?'), total + add), 'đổi đơn vị rồi cộng', 'Đổi về đơn vị nhỏ rồi cộng.', kha(2), high(2)); }
      if (family === 3) { const other = total + u.random(-100, 150); return finish(u.choiceQuestion(phrase('So sánh ' + major + ' ' + unitBig + ' ' + minor + ' ' + unitSmall + ' với ' + other + ' ' + unitSmall + '.', 'Điền dấu sau khi đổi về cùng đơn vị.'), total > other ? '>' : total < other ? '<' : '=', ['>', '<', '=']), 'so sánh đại lượng', 'Đổi về cùng đơn vị rồi so sánh.', kha(2), high(2)); }
      if (family === 4) { const parts = u.pick([2, 4, 5]), divisible = parts * u.random(20, 200); return finish(u.numberQuestion(phrase('Chia đều ' + divisible + ' ' + unitSmall + ' thành ' + parts + ' phần. Mỗi phần bằng bao nhiêu ' + unitSmall + '?', 'Một đại lượng ' + divisible + ' ' + unitSmall + ' được chia thành ' + parts + ' phần bằng nhau.'), divisible / parts), 'chia đều đại lượng', 'Lấy tổng chia số phần.', kha(2), high(2)); }
      if (family === 5) { const target = total + u.random(20, 200); return finish(u.numberQuestion(phrase('Cần thêm bao nhiêu ' + unitSmall + ' để từ ' + total + ' ' + unitSmall + ' đạt ' + target + ' ' + unitSmall + '?', 'Tìm phần còn thiếu giữa ' + total + ' và ' + target + ' ' + unitSmall + '.'), target - total), 'tìm đại lượng thiếu', 'Lấy mục tiêu trừ giá trị hiện có.', kha(2, 1), high(2, 1)); }
      if (family === 6) { const rate = u.random(2, 8); return finish(u.numberQuestion(phrase('Có ' + rate + ' phần bằng nhau, mỗi phần ' + major + ' ' + unitSmall + '. Tổng là bao nhiêu ' + unitSmall + '?', 'Lặp lại độ dài ' + major + ' ' + unitSmall + ' tất cả ' + rate + ' lần.'), rate * major), 'gấp một đại lượng', 'Nhân số phần với giá trị mỗi phần.', kha(2), high(2)); }
      return finish(u.numberQuestion(phrase('Giá trị ' + total + ' ' + unitSmall + ' gồm ' + Math.floor(total / factor) + ' ' + unitBig + ' và bao nhiêu ' + unitSmall + ' lẻ?', 'Sau khi đổi ' + total + ' ' + unitSmall + ' sang ' + unitBig + ' và ' + unitSmall + ', phần lẻ là?'), total % factor), 'tách đơn vị hỗn hợp', 'Chia cho hệ số đổi đơn vị và lấy số dư.', kha(2), high(2));
    }

    function multiply() {
      const a = u.random(4, 12), b = u.random(3, 10), c = u.random(2, 24);
      if (family === 0) return finish(u.numberQuestion(phrase(a + ' × ' + b + ' + ' + c + ' = ?', 'Tính tích ' + a + ' × ' + b + ' rồi cộng ' + c + '.'), a * b + c), 'nhân rồi cộng', 'Thực hiện phép nhân trước rồi cộng.', kha(2), high(2));
      if (family === 1) return finish(u.numberQuestion(phrase(a + ' × ' + b + ' − ' + c + ' = ?', 'Lấy tích của ' + a + ' và ' + b + ' bớt ' + c + '.'), a * b - c), 'nhân rồi trừ', 'Nhân trước rồi trừ.', kha(2), high(2));
      if (family === 2) { const result = a * b; return finish(u.numberQuestion(phrase('x × ' + b + ' = ' + result + '. Tìm x.', 'Một số nhân ' + b + ' được ' + result + '. Số đó là?'), a), 'tìm thừa số', 'Lấy tích chia thừa số đã biết.', kha(2, 1), high(2, 1)); }
      if (family === 3) { const total = a * b; return finish(u.numberQuestion(phrase('Chia ' + total + ' đồ vật đều vào ' + a + ' nhóm. Mỗi nhóm có bao nhiêu?', total + ' đồ vật xếp thành ' + a + ' hàng bằng nhau. Mỗi hàng có?'), b), 'chia đều theo nhóm', 'Lấy tổng chia số nhóm.', kha(2), high(2)); }
      if (family === 4) { const extra = advanced ? u.random(1, b - 1) : 0; return finish(u.numberQuestion(phrase('Có ' + a + ' hộp, mỗi hộp ' + b + ' sản phẩm' + (extra ? ', thêm ' + extra + ' sản phẩm lẻ' : '') + '. Có tất cả bao nhiêu?', 'Gộp ' + a + ' nhóm ' + b + ' phần tử' + (extra ? ' và ' + extra + ' phần tử rời' : '') + '.'), a * b + extra), 'nhóm bằng nhau và phần lẻ', advanced ? 'Nhân số nhóm với số mỗi nhóm rồi cộng phần lẻ.' : 'Nhân số nhóm với số mỗi nhóm.', kha(2), high(2));
      }
      if (family === 5) { const groups = a + 2; return finish(u.numberQuestion(phrase('Có ' + groups + ' nhóm, chuyển bớt 2 nhóm, mỗi nhóm ' + b + ' vật. Còn bao nhiêu vật?', 'Ban đầu có ' + groups + ' nhóm bằng nhau; bỏ 2 nhóm. Mỗi nhóm có ' + b + ' phần tử.'), (groups - 2) * b), 'bớt nhóm bằng nhau', 'Tìm số nhóm còn lại rồi nhân số vật mỗi nhóm.', kha(2), high(2)); }
      if (family === 6) { const divisor = u.pick([2, 3, 4, 5]), product = a * b, extra = (divisor - product % divisor) % divisor + divisor; return finish(u.numberQuestion(phrase('(' + a + ' × ' + b + ' + ' + extra + ') : ' + divisor + ' = ?', 'Tính biểu thức có ngoặc rồi chia: (' + a + ' × ' + b + ' + ' + extra + ') : ' + divisor + '.'), (product + extra) / divisor), 'biểu thức nhân cộng chia', 'Tính trong ngoặc theo thứ tự nhân rồi cộng, sau đó chia.', kha(2), high(3)); }
      return finish(u.choiceQuestion(phrase('Biểu thức nào có giá trị bằng ' + (a * b) + '?', 'Chọn phép tính biểu diễn ' + a + ' nhóm, mỗi nhóm ' + b + ' phần tử.'), a + ' × ' + b, [a + ' × ' + b, a + ' + ' + b, (a * b) + ' : ' + a, a + ' − ' + b]), 'chọn biểu thức nhân', 'Nhóm bằng nhau được biểu diễn bằng phép nhân.', kha(2), high(2));
    }

    function unknown() {
      const x = u.random(5, 60), a = u.random(2, 9), b = u.random(3, 30);
      if (family === 0) return finish(u.numberQuestion('x × ' + a + ' + ' + b + ' = ' + (x * a + b) + '. Tìm x.', x), 'ẩn trong phép nhân rồi cộng', 'Trừ số hạng đã cộng rồi chia cho thừa số.', kha(2, 1), high(2, 1));
      if (family === 1) return finish(u.numberQuestion('x × ' + a + ' − ' + b + ' = ' + (x * a - b) + '. Tìm x.', x), 'ẩn trong phép nhân rồi trừ', 'Cộng lại số đã trừ rồi chia cho thừa số.', kha(2, 1), high(2, 1));
      if (family === 2) return finish(u.numberQuestion('(' + x + ' + x) + ' + b + ' = ' + (x * 2 + b) + '. Tìm x.', x), 'ẩn xuất hiện hai lần', 'Trừ số hạng đã biết rồi chia phần còn lại thành hai phần bằng nhau.', kha(2, 1), high(2, 1));
      if (family === 3) return finish(u.numberQuestion((x * a + b) + ' − x = ' + (x * (a - 1) + b) + '. Tìm x.', x), 'ẩn ở hai vế biến đổi', 'Thu gọn số lần của x rồi tách phần đã biết.', kha(2, 1), high(3, 1));
      if (family === 4) { const total = x * a; return finish(u.numberQuestion('Một số chia đều thành ' + a + ' phần, mỗi phần ' + x + '. Số ban đầu là bao nhiêu?', total), 'tìm số bị chia', 'Nhân số phần với giá trị mỗi phần.', kha(2), high(2)); }
      if (family === 5) { const total = x * a; return finish(u.numberQuestion(total + ' : x = ' + a + '. Tìm x.', x), 'tìm số chia', 'Lấy số bị chia chia thương.', kha(2, 1), high(2, 1)); }
      if (family === 6) { const result = x * a + b - a; return finish(u.numberQuestion('x × ' + a + ' + ' + b + ' − ' + a + ' = ' + result + '. Tìm x.', x), 'ẩn trong biểu thức ba bước', 'Làm ngược phép trừ, phép cộng rồi phép nhân.', kha(2, 1), high(3, 1)); }
      const result = (x + b) * a;
      return finish(u.numberQuestion('(x + ' + b + ') × ' + a + ' = ' + result + '. Tìm x.', x), 'ẩn trong ngoặc', 'Chia hai vế cho thừa số rồi trừ số trong ngoặc.', kha(2, 1), high(3, 1));
    }

    function fractions() {
      const d = u.random(5, 12), a = u.random(1, d - 2), b = u.random(1, d - a), c = u.random(1, Math.max(1, a + b - 1));
      if (family === 0) return finish(u.fractionQuestion(phrase(a + '/' + d + ' + ' + b + '/' + d + ' = ?', 'Cộng hai phân số cùng mẫu ' + a + '/' + d + ' và ' + b + '/' + d + '.'), a + b, d), 'cộng phân số cùng mẫu', 'Cộng tử số, giữ mẫu rồi rút gọn.', kha(1), high(2));
      if (family === 1) { const top = a + b; return finish(u.fractionQuestion(phrase(top + '/' + d + ' − ' + a + '/' + d + ' = ?', 'Lấy ' + a + '/' + d + ' khỏi ' + top + '/' + d + '.'), b, d), 'trừ phân số cùng mẫu', 'Trừ tử số, giữ mẫu rồi rút gọn.', kha(1), high(2)); }
      if (family === 2) { const result = a + b; return finish(u.numberQuestion('x/' + d + ' + ' + a + '/' + d + ' = ' + result + '/' + d + '. Tìm tử số x.', b), 'tìm tử số chưa biết', 'Trừ các tử số vì mẫu số giống nhau.', kha(2, 1), high(2, 1)); }
      if (family === 3) { const total = d * u.random(4, 15); return finish(u.numberQuestion(phrase(a + '/' + d + ' của ' + total + ' bằng bao nhiêu?', 'Một nhóm có ' + total + ' bạn, ' + a + '/' + d + ' số bạn tham gia hoạt động. Có bao nhiêu bạn?'), total * a / d), 'tìm phân số của một số', 'Chia tổng cho mẫu rồi nhân tử.', kha(2), high(2)); }
      if (family === 4) return finish(u.fractionQuestion(phrase('Đã dùng ' + a + '/' + d + ' tấm bìa. Phần chưa dùng là bao nhiêu?', 'Một đơn vị bớt đi ' + a + '/' + d + ' còn lại bao nhiêu?'), d - a, d), 'phân số phần còn lại', 'Lấy d/d trừ phân số đã dùng.', kha(2), high(2));
      if (family === 5) { const other = u.random(1, d - 1); return finish(u.choiceQuestion(phrase('So sánh ' + a + '/' + d + ' và ' + other + '/' + d + '.', 'Điền dấu giữa hai phân số cùng mẫu.'), a > other ? '>' : a < other ? '<' : '=', ['>', '<', '=']), 'so sánh phân số', 'Cùng mẫu nên so sánh tử số.', kha(2), high(2)); }
      if (family === 6) {
        const d2 = grade === 5 ? d * 2 : d, b2 = grade === 5 ? b : b;
        return finish(u.fractionQuestion(phrase(a + '/' + d + ' + ' + b2 + '/' + d2 + ' = ?', 'Quy đồng rồi cộng ' + a + '/' + d + ' với ' + b2 + '/' + d2 + '.'), a * (d2 / d) + b2, d2), 'cộng phân số khác mẫu hoặc tương đương', 'Quy đồng mẫu số, cộng tử rồi rút gọn.', kha(2), high(3));
      }
      const total = d * u.random(5, 15);
      return finish(u.numberQuestion(phrase('Một lớp có ' + total + ' học sinh. Hai nhóm không trùng nhau chiếm ' + a + '/' + d + ' và ' + b + '/' + d + ' số học sinh. Cả hai nhóm có bao nhiêu bạn?', 'Tổng tỉ lệ của hai nhóm là ' + a + '/' + d + ' + ' + b + '/' + d + '. Với ' + total + ' học sinh, hai nhóm có bao nhiêu bạn?'), total * (a + b) / d), 'bài toán hai phân số của tổng', 'Cộng hai phân số rồi tìm phân số đó của tổng.', kha(2), high(3));
    }

    function decimals() {
      const a = u.random(300, 900) / 10, b = u.random(20, 250) / 10, c = u.random(10, 150) / 10;
      const clean = value => Number(value.toFixed(1));
      if (family === 0) return finish(u.numberQuestion(u.formatNumber(a) + ' + ' + u.formatNumber(b) + ' − ' + u.formatNumber(c) + ' = ?', clean(a + b - c)), 'cộng trừ số thập phân', 'Đặt thẳng hàng dấu phẩy rồi tính từ trái sang phải.', kha(2), high(2));
      if (family === 1) { const result = clean(a + b - c); return finish(u.numberQuestion('x + ' + u.formatNumber(b) + ' − ' + u.formatNumber(c) + ' = ' + u.formatNumber(result) + '. Tìm x.', a), 'tìm số thập phân ban đầu', 'Cộng lại số đã trừ rồi trừ số đã cộng.', kha(2, 1), high(2, 1)); }
      if (family === 2) { const factor = u.pick([10, 100]); return finish(u.numberQuestion(u.formatNumber(a) + ' × ' + factor + ' = ?', clean(a * factor)), 'nhân số thập phân với 10 hoặc 100', 'Dịch dấu phẩy sang phải theo số chữ số 0.', kha(2), high(2)); }
      if (family === 3) { const factor = u.pick([10, 100]); return finish(u.numberQuestion(u.formatNumber(a) + ' : ' + factor + ' = ?', clean(a / factor)), 'chia số thập phân cho 10 hoặc 100', 'Dịch dấu phẩy sang trái theo số chữ số 0.', kha(2), high(2)); }
      if (family === 4) return finish(u.choiceQuestion('So sánh ' + u.formatNumber(a) + ' + ' + u.formatNumber(b) + ' với ' + u.formatNumber(a + c) + '.', clean(a + b) > clean(a + c) ? '>' : clean(a + b) < clean(a + c) ? '<' : '=', ['>', '<', '=']), 'so sánh biểu thức thập phân', 'Tính hai vế rồi so sánh.', kha(2), high(2));
      if (family === 5) { const kg = clean(a / 10), used = clean(b / 10); return finish(u.numberQuestion('Có ' + u.formatNumber(kg) + ' kg, dùng ' + u.formatNumber(used) + ' kg rồi mua thêm ' + u.formatNumber(c / 10) + ' kg. Hiện có bao nhiêu kg?', clean(kg - used + c / 10)), 'bài toán thập phân nhiều bước', 'Trừ phần đã dùng rồi cộng phần mua thêm.', kha(2), high(3)); }
      if (family === 6) { const total = clean(a + b); return finish(u.numberQuestion('Hai đoạn dài ' + u.formatNumber(a) + ' m và ' + u.formatNumber(b) + ' m. Cắt đi ' + u.formatNumber(c) + ' m. Còn lại bao nhiêu mét?', clean(total - c)), 'độ dài thập phân', 'Cộng hai đoạn rồi trừ phần đã cắt.', kha(2), high(2)); }
      const result = clean(a - b);
      return finish(u.numberQuestion('Một số lớn hơn ' + u.formatNumber(b) + ' đúng ' + u.formatNumber(result) + '. Số đó là?', a), 'tìm số lớn từ hiệu', 'Cộng số bé với phần hơn.', kha(2, 1), high(2, 1));
    }

    function percent() {
      const rate = u.pick([10, 20, 25, 30, 40, 50]), base = u.random(5, 40) * 20, part = base * rate / 100;
      if (family === 0) return finish(u.numberQuestion('Tìm ' + rate + '% của ' + base + '.', part), 'tìm giá trị phần trăm', 'Lấy số đã cho nhân tỉ lệ phần trăm rồi chia 100.', kha(2), high(2));
      if (family === 1) return finish(u.numberQuestion(rate + '% của một số bằng ' + part + '. Số đó là?', base), 'tìm số ban đầu', 'Lấy giá trị phần trăm chia tỉ lệ rồi nhân 100.', kha(2, 1), high(2, 1));
      if (family === 2) return finish(u.numberQuestion(part + ' chiếm bao nhiêu phần trăm của ' + base + '?', rate), 'tìm tỉ số phần trăm', 'Lấy phần chia toàn bộ rồi nhân 100.', kha(2), high(2));
      if (family === 3) return finish(u.numberQuestion('Món hàng giá ' + base + ' nghìn đồng, giảm ' + rate + '%. Giá sau giảm là bao nhiêu nghìn đồng?', base - part), 'tính giá sau giảm', 'Tìm số tiền giảm rồi lấy giá ban đầu trừ đi.', kha(2), high(2));
      if (family === 4) return finish(u.numberQuestion('Món hàng giảm ' + rate + '% còn ' + (base - part) + ' nghìn đồng. Giá ban đầu là bao nhiêu?', base), 'tìm giá trước giảm', 'Giá còn lại bằng ' + (100 - rate) + '% giá ban đầu; tính ngược.', kha(2, 1), high(2, 1));
      if (family === 5) { const increase = u.pick([10, 20, 25]); return finish(u.numberQuestion('Một sản phẩm giá ' + base + ' nghìn đồng, tăng ' + increase + '%. Giá mới là bao nhiêu?', base * (100 + increase) / 100), 'tính giá sau tăng', 'Tìm phần tăng rồi cộng vào giá ban đầu.', kha(2), high(2)); }
      if (family === 6) { const total = u.random(4, 12) * 50, absentRate = u.pick([10, 20]); return finish(u.numberQuestion('Trường có ' + total + ' học sinh, ' + absentRate + '% nghỉ học. Có bao nhiêu học sinh đi học?', total * (100 - absentRate) / 100), 'phần trăm phần còn lại', 'Tìm tỉ lệ đi học rồi tính theo tổng.', kha(2), high(2)); }
      const firstRate = u.pick([10, 20]), secondRate = u.pick([10, 20]), afterFirst = base * (100 - firstRate) / 100;
      return finish(u.numberQuestion('Giá ' + base + ' nghìn đồng giảm ' + firstRate + '%, sau đó giảm tiếp ' + secondRate + '% trên giá mới. Giá cuối là bao nhiêu?', afterFirst * (100 - secondRate) / 100), 'giảm phần trăm liên tiếp', 'Tính giá sau lần giảm thứ nhất rồi tiếp tục tính lần hai.', kha(2), high(3));
    }

    function motion() {
      const speed1 = u.pick([30, 36, 40, 45, 50, 60]), speed2 = u.pick([24, 30, 36, 40, 45]), hours = u.random(2, 5), distance = speed1 * hours;
      if (family === 0) return finish(u.numberQuestion(phrase('Đi với vận tốc ' + speed1 + ' km/giờ trong ' + hours + ' giờ được bao nhiêu ki-lô-mét?', 'Một xe giữ vận tốc ' + speed1 + ' km/giờ suốt ' + hours + ' giờ. Quãng đường xe đi được là bao nhiêu?'), distance), 'tìm quãng đường', 'Lấy vận tốc nhân thời gian.', kha(2), high(2));
      if (family === 1) return finish(u.numberQuestion(phrase('Đi ' + distance + ' km trong ' + hours + ' giờ. Vận tốc là bao nhiêu km/giờ?', 'Một xe hoàn thành quãng đường ' + distance + ' km hết ' + hours + ' giờ. Tính vận tốc trung bình của xe.'), speed1), 'tìm vận tốc', 'Lấy quãng đường chia thời gian.', kha(2), high(2));
      if (family === 2) return finish(u.numberQuestion(phrase('Đi ' + distance + ' km với vận tốc ' + speed1 + ' km/giờ. Mất bao nhiêu giờ?', 'Một xe phải đi ' + distance + ' km và chạy đều ' + speed1 + ' km/giờ. Xe cần bao nhiêu giờ?'), hours), 'tìm thời gian', 'Lấy quãng đường chia vận tốc.', kha(2), high(2));
      if (family === 3) return finish(u.numberQuestion(phrase('Hai xe đi ngược chiều với vận tốc ' + speed1 + ' và ' + speed2 + ' km/giờ. Sau ' + hours + ' giờ, khoảng cách tăng thêm bao nhiêu km?', 'Hai xe xuất phát cùng chỗ rồi đi về hai phía, vận tốc lần lượt ' + speed1 + ' và ' + speed2 + ' km/giờ. Sau ' + hours + ' giờ chúng cách nhau bao nhiêu?'), (speed1 + speed2) * hours), 'hai chuyển động ngược chiều', 'Cộng hai vận tốc rồi nhân thời gian.', kha(2), high(3));
      if (family === 4) return finish(u.numberQuestion(phrase('Hai xe cùng chiều với vận tốc ' + speed1 + ' và ' + speed2 + ' km/giờ. Sau ' + hours + ' giờ, khoảng cách thay đổi bao nhiêu km?', 'Hai xe chạy cùng hướng với vận tốc ' + speed1 + ' và ' + speed2 + ' km/giờ. Trong ' + hours + ' giờ, xe nhanh hơn tạo thêm khoảng cách bao nhiêu?'), Math.abs(speed1 - speed2) * hours), 'hai chuyển động cùng chiều', 'Lấy hiệu hai vận tốc rồi nhân thời gian.', kha(2), high(3));
      if (family === 5) { const rest = u.pick([1, 2]); return finish(u.numberQuestion(phrase('Xe đi ' + hours + ' giờ với vận tốc ' + speed1 + ' km/giờ, nghỉ ' + rest + ' giờ rồi đi thêm 1 giờ với vận tốc ' + speed2 + ' km/giờ. Tổng quãng đường là?', 'Chặng đầu xe chạy ' + speed1 + ' km/giờ trong ' + hours + ' giờ; sau khi nghỉ ' + rest + ' giờ, xe chạy tiếp 1 giờ với vận tốc ' + speed2 + ' km/giờ. Xe đã đi tổng cộng bao xa?'), speed1 * hours + speed2), 'chuyển động có nghỉ', 'Tính quãng đường hai chặng; thời gian nghỉ không tạo quãng đường.', kha(2), high(3)); }
      if (family === 6) { const downstream = speed1 + speed2; return finish(u.numberQuestion(phrase('Ca nô chạy xuôi dòng với vận tốc riêng ' + speed1 + ' km/giờ, dòng nước ' + speed2 + ' km/giờ trong 2 giờ. Quãng đường xuôi dòng là?', 'Vận tốc ca nô khi nước đứng yên là ' + speed1 + ' km/giờ, dòng nước chảy ' + speed2 + ' km/giờ. Đi xuôi dòng 2 giờ được bao nhiêu ki-lô-mét?'), downstream * 2), 'chuyển động dòng nước', 'Cộng vận tốc riêng và vận tốc dòng nước rồi nhân thời gian.', kha(2), high(3)); }
      const half1 = hours, half2 = hours + 1;
      return finish(u.numberQuestion(phrase('Một xe đi ' + half1 + ' giờ với vận tốc ' + speed1 + ' km/giờ và ' + half2 + ' giờ với vận tốc ' + speed2 + ' km/giờ. Tổng quãng đường là?', 'Chặng thứ nhất kéo dài ' + half1 + ' giờ với vận tốc ' + speed1 + ' km/giờ; chặng thứ hai kéo dài ' + half2 + ' giờ với vận tốc ' + speed2 + ' km/giờ. Cả hành trình dài bao nhiêu?'), half1 * speed1 + half2 * speed2), 'chuyển động hai chặng', 'Tính quãng đường từng chặng rồi cộng.', kha(2), high(3));
    }

    function word() {
      const scale = grade === 1 ? 1 : grade === 2 ? 3 : grade === 3 ? 8 : 20;
      const start = u.random(12 * scale, 30 * scale), add = u.random(4 * scale, 12 * scale), remove = u.random(2 * scale, Math.min(start + add - 1, 9 * scale));
      const name = u.pick(['Lan', 'Nam', 'Mai', 'Minh', 'An']);
      if (family === 0) return finish(u.numberQuestion(name + ' có ' + start + ' đồ vật, nhận thêm ' + add + ' rồi cho đi ' + remove + '. ' + name + ' còn bao nhiêu?', start + add - remove), 'thêm rồi bớt', 'Cộng phần nhận thêm rồi trừ phần cho đi.', kha(2), high(2));
      if (family === 1) { const left = start + add - remove; return finish(u.numberQuestion(name + ' nhận thêm ' + add + ' rồi cho đi ' + remove + ', cuối cùng còn ' + left + ' đồ vật. Lúc đầu ' + name + ' có bao nhiêu?', start), 'tìm số ban đầu', 'Làm ngược: cộng phần cho đi rồi trừ phần nhận thêm.', kha(2, 1), high(2, 1)); }
      if (family === 2) { const left = start + add - remove; return finish(u.numberQuestion(name + ' có ' + start + ' đồ vật, nhận thêm một số rồi cho đi ' + remove + ', còn ' + left + '. ' + name + ' đã nhận thêm bao nhiêu?', add), 'tìm số được thêm', 'Cộng phần đã cho vào số còn lại rồi trừ số ban đầu.', kha(2, 1), high(2, 1)); }
      if (family === 3) { const left = start + add - remove; return finish(u.numberQuestion(name + ' có ' + start + ' đồ vật, nhận thêm ' + add + ', sau đó cho đi một số và còn ' + left + '. ' + name + ' đã cho đi bao nhiêu?', remove), 'tìm số đã bớt', 'Tính số có trước khi cho rồi trừ số còn lại.', kha(2, 1), high(2, 1)); }
      if (family === 4) { const small = u.random(5 * scale, 15 * scale), difference = u.random(2 * scale, 8 * scale); return finish(u.numberQuestion('Nhóm A có ' + small + ' bạn, nhóm B nhiều hơn ' + difference + ' bạn. Cả hai nhóm có bao nhiêu bạn?', small + small + difference), 'so sánh hơn rồi tìm tổng', 'Tìm số của nhóm B rồi cộng hai nhóm.', kha(2), high(2)); }
      if (family === 5 && grade === 1) { const first = u.random(8, 25), second = u.random(5, 20), used = u.random(2, first + second - 1); return finish(u.numberQuestion('Có hai hộp gồm ' + first + ' và ' + second + ' vật. Dùng ' + used + ' vật. Còn lại bao nhiêu?', first + second - used), 'gộp hai nhóm rồi bớt', 'Cộng số vật ở hai hộp rồi trừ số đã dùng.', kha(2), high(3)); }
      if (family === 5) { const each = u.random(3, 9), groups = u.random(3, 8), used = u.random(2, each * groups - 1); return finish(u.numberQuestion('Có ' + groups + ' hộp, mỗi hộp ' + each + ' vật. Dùng ' + used + ' vật. Còn lại bao nhiêu?', groups * each - used), 'nhóm bằng nhau rồi bớt', 'Nhân để tìm tổng rồi trừ số đã dùng.', kha(2), high(3)); }
      if (family === 6 && grade < 4) {
        const lan = u.random(6 * scale, 14 * scale), fewer = u.random(2 * scale, 5 * scale), mai = lan - fewer;
        if (level === 'nang-cao') {
          const given = u.random(1, Math.max(1, Math.min(5 * scale, lan + mai - 1)));
          return finish(u.numberQuestion('Lan có ' + lan + ' nhãn vở, Mai ít hơn Lan ' + fewer + ' nhãn vở. Hai bạn cho em ' + given + ' nhãn vở. Cả hai bạn còn bao nhiêu nhãn vở?', lan + mai - given), 'so sánh, gộp rồi bớt', 'Tìm số nhãn vở của Mai, cộng số của hai bạn rồi trừ số đã cho.', kha(2), high(3, 1));
        }
        return finish(u.numberQuestion('Lan có ' + lan + ' nhãn vở, Mai ít hơn Lan ' + fewer + ' nhãn vở. Cả hai bạn có bao nhiêu nhãn vở?', lan + mai), 'so sánh rồi tìm tổng', 'Tìm số nhãn vở của Mai rồi cộng số của hai bạn.', kha(2), high(2));
      }
      if (family === 6) { const small = u.random(5 * scale, 15 * scale), difference = u.random(2 * scale, 8 * scale), total = small * 2 + difference; return finish(u.numberQuestion('Hai số có tổng ' + total + ' và hiệu ' + difference + '. Số bé là bao nhiêu?', small), 'bài toán tổng hiệu', 'Lấy tổng trừ hiệu rồi chia 2.', kha(2, 1), high(3, 1)); }
      const total = start + add, irrelevant = u.random(2, 20);
      return finish(u.numberQuestion('Một giá có ' + start + ' quyển sách, xếp thêm ' + add + ' quyển. Giá bên cạnh có ' + irrelevant + ' hộp bút. Hỏi giá sách có tất cả bao nhiêu quyển?', total), 'chọn dữ kiện cần thiết', 'Chỉ dùng hai dữ kiện về số sách; bỏ dữ kiện về hộp bút.', kha(2), high(2, 1));
    }
  }

  window.IMathDiverseBank = { create: create, familyCount: FAMILY_COUNT };
})(window);
