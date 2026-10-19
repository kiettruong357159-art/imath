// Ma trận động: 5 trắc nghiệm, 3 bài đáp số có trình bày, 2 chứng minh.
// Các vị trí mở giúp toàn bộ 220 câu có cơ hội xuất hiện.
export function clcPool(bank) {
  return Object.values(bank).flatMap(group => Object.values(group).flat())
    .filter(q => q.lop === 9 && ['nangCao', 'hsg'].includes(q.tang));
}

export function assembleCLC(bank, previous = [], random = Math.random) {
  const pool = clcPool(bank), used = new Set(), recent = new Set(previous);
  const pick = predicate => {
    const eligible = pool.filter(q => !used.has(q.id) && predicate(q));
    const fresh = eligible.filter(q => !recent.has(q.id));
    const choices = fresh.length ? fresh : eligible;
    if (!choices.length) throw new Error('Ngân hàng chưa đủ câu phù hợp với ma trận CLC.');
    const q = choices[Math.floor(random() * choices.length)];
    used.add(q.id);
    return q;
  };
  const mc = ['rutGonCan', 'phuongTrinh', 'hamSo', 'hinhTron'].map(area =>
    pick(q => q.dang === 'chon' && q.manThi === area));
  mc.push(pick(q => q.dang === 'chon'));
  const written = [pick(q => q.dang === 'dien' && q.manThi === 'baiToanThucTe')];
  written.push(pick(q => q.dang === 'dien'), pick(q => q.dang === 'dien'));
  const proofs = [pick(q => q.dang === 'chungMinh' && q.manThi === 'hinhTron')];
  const hasVDC = [...mc, ...written, ...proofs].some(q => q.mucDo === 'VDC');
  proofs.push(pick(q => q.dang === 'chungMinh' && (hasVDC || q.mucDo === 'VDC')));
  const shuffle = items => {
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
    return items;
  };
  return [...shuffle(mc), ...shuffle(written), ...shuffle(proofs)].map((q, i) => ({
    ...q, number: i + 1, tier: q.tang, sourceDang: q.dang,
    dang: i < 5 ? 'chon' : 'chungMinh',
    tierLabel: i < 5 ? 'Trắc nghiệm · 0,5 điểm' : 'Tự luận · 1,5 điểm · Trình bày lời giải',
    levelName: q.tang === 'hsg' ? 'HSG' : 'Nâng cao',
    userAnswer: null, status: 'unanswered', isCorrect: null,
    solutionVisible: false, selfAssessment: null
  }));
}
