(function (window) {
  'use strict';

  const VERSION = '20260818-9';
  const EXAM_SIZE = 21;
  const MAX_BUILD_ATTEMPTS = 90;

  const POLICIES = {
    1: {
      maxVisible: 100,
      maxAnswer: 100,
      knowledge: ['add', 'subtract', 'compare', 'sequence', 'logic', 'position', 'time-basic', 'length-basic', 'shape-basic'],
      allowRemainder: false,
      label: 'Lớp 1'
    },
    2: {
      maxVisible: 1000,
      maxAnswer: 1000,
      knowledge: ['add', 'subtract', 'multiply-basic', 'divide-exact', 'compare', 'sequence', 'logic', 'position', 'time', 'length', 'money', 'shape-basic'],
      allowRemainder: false,
      label: 'Lớp 2'
    },
    3: {
      maxVisible: 100000,
      maxAnswer: 100000,
      knowledge: ['add', 'subtract', 'multiply', 'divide-exact', 'divide-remainder', 'compare', 'expression', 'unknown', 'sequence', 'logic', 'time', 'length', 'money', 'perimeter', 'area-rectangle', 'unit-rate'],
      allowRemainder: true,
      label: 'Lớp 3'
    },
    4: {
      maxVisible: 100000000,
      maxAnswer: 100000000,
      knowledge: ['add', 'subtract', 'multiply', 'divide-exact', 'compare', 'expression', 'unknown', 'sequence', 'logic', 'time', 'measure', 'money', 'perimeter', 'area', 'fraction', 'average', 'sum-difference', 'sum-ratio', 'difference-ratio', 'unit-rate'],
      allowRemainder: false,
      label: 'Lớp 4'
    },
    5: {
      maxVisible: 100000000,
      maxAnswer: 100000000,
      knowledge: ['add', 'subtract', 'multiply', 'divide-exact', 'compare', 'expression', 'unknown', 'sequence', 'logic', 'time', 'measure', 'money', 'perimeter', 'area', 'volume', 'fraction', 'decimal', 'percent', 'average', 'ratio', 'unit-rate', 'motion'],
      allowRemainder: false,
      label: 'Lớp 5'
    }
  };

  const BLUEPRINTS = {
    1: [
      ['kho', 'reasoning_story', 4],
      ['kho', 'visual_logic', 4],
      ['kho', 'advanced_computation', 2],
      ['rat-kho', 'reasoning_story', 2],
      ['rat-kho', 'visual_logic', 2],
      ['rat-kho', 'advanced_computation', 1],
      ['chinh-phuc', 'reasoning_story', 2],
      ['chinh-phuc', 'visual_logic', 2],
      ['chinh-phuc', 'advanced_computation', 2]
    ],
    2: [
      ['kho', 'reasoning_story', 5],
      ['kho', 'visual_logic', 3],
      ['kho', 'advanced_computation', 2],
      ['rat-kho', 'reasoning_story', 2],
      ['rat-kho', 'visual_logic', 2],
      ['rat-kho', 'advanced_computation', 1],
      ['chinh-phuc', 'reasoning_story', 2],
      ['chinh-phuc', 'visual_logic', 2],
      ['chinh-phuc', 'advanced_computation', 2]
    ],
    3: [
      ['kho', 'reasoning_story', 6],
      ['kho', 'canonical_problem', 3],
      ['kho', 'advanced_computation', 1],
      ['rat-kho', 'reasoning_story', 3],
      ['rat-kho', 'canonical_problem', 1],
      ['rat-kho', 'advanced_computation', 1],
      ['chinh-phuc', 'reasoning_story', 3],
      ['chinh-phuc', 'canonical_problem', 2],
      ['chinh-phuc', 'advanced_computation', 1]
    ],
    4: [
      ['kho', 'reasoning_story', 6],
      ['kho', 'canonical_problem', 3],
      ['kho', 'advanced_computation', 1],
      ['rat-kho', 'reasoning_story', 3],
      ['rat-kho', 'canonical_problem', 1],
      ['rat-kho', 'advanced_computation', 1],
      ['chinh-phuc', 'reasoning_story', 3],
      ['chinh-phuc', 'canonical_problem', 2],
      ['chinh-phuc', 'advanced_computation', 1]
    ],
    5: [
      ['kho', 'reasoning_story', 6],
      ['kho', 'canonical_problem', 3],
      ['kho', 'advanced_computation', 1],
      ['rat-kho', 'reasoning_story', 3],
      ['rat-kho', 'canonical_problem', 1],
      ['rat-kho', 'advanced_computation', 1],
      ['chinh-phuc', 'reasoning_story', 3],
      ['chinh-phuc', 'canonical_problem', 2],
      ['chinh-phuc', 'advanced_computation', 1]
    ]
  };

  function template(grade, id, difficulty, category, family, builder, params) {
    return { grade, id, difficulty, category, family, builder, params: params || {} };
  }

  const TEMPLATES = [];
  const add = (grade, id, difficulty, category, family, builder, params) => {
    TEMPLATES.push(template(grade, id, difficulty, category, family, builder, params));
  };

  // Lớp 1: lời văn, trực quan và suy luận trong phạm vi 100; tuyệt đối không nhân/chia/phân số.
  add(1, 'g1-h-story-transaction', 'kho', 'reasoning_story', 'g1-transaction', 'transactions', { mode: 'forward', steps: 2 });
  add(1, 'g1-h-story-inverse', 'kho', 'reasoning_story', 'g1-inverse', 'transactions', { mode: 'inverse', steps: 2 });
  add(1, 'g1-h-story-compare-total', 'kho', 'reasoning_story', 'g1-compare-total', 'compareGroups', { mode: 'more-total' });
  add(1, 'g1-h-story-transfer', 'kho', 'reasoning_story', 'g1-transfer', 'transfer', { mode: 'receiver' });
  add(1, 'g1-h-story-two-boxes', 'kho', 'reasoning_story', 'g1-two-boxes', 'twoContainers', { mode: 'use-and-add' });
  add(1, 'g1-h-story-order', 'kho', 'reasoning_story', 'g1-story-order', 'orderLogic', { mode: 'three-children' });
  add(1, 'g1-h-visual-step', 'kho', 'visual_logic', 'g1-sequence-step', 'sequence', { mode: 'step' });
  add(1, 'g1-h-visual-alternating', 'kho', 'visual_logic', 'g1-sequence-alternating', 'sequence', { mode: 'alternating' });
  add(1, 'g1-h-visual-balance', 'kho', 'visual_logic', 'g1-balance-one', 'balance', { mode: 'one' });
  add(1, 'g1-h-visual-shapes', 'kho', 'visual_logic', 'g1-count-shapes', 'shapeCount', { mode: 'mixed' });
  add(1, 'g1-h-visual-path', 'kho', 'visual_logic', 'g1-path', 'pathLength', { mode: 'unit' });
  add(1, 'g1-h-visual-position', 'kho', 'visual_logic', 'g1-position', 'orderLogic', { mode: 'five-seats' });
  add(1, 'g1-h-calc-target', 'kho', 'advanced_computation', 'g1-target-pair', 'targetPair', { mode: 'two-blanks' });
  add(1, 'g1-h-calc-compare', 'kho', 'advanced_computation', 'g1-expression-compare', 'expressionCompare', { terms: 2 });
  add(1, 'g1-h-calc-hidden', 'kho', 'advanced_computation', 'g1-hidden', 'hiddenNumber', { steps: 2 });
  add(1, 'g1-vh-story-three-events', 'rat-kho', 'reasoning_story', 'g1-three-events', 'transactions', { mode: 'inverse', steps: 3 });
  add(1, 'g1-vh-story-three-relations', 'rat-kho', 'reasoning_story', 'g1-three-relations', 'compareGroups', { mode: 'three-total' });
  add(1, 'g1-vh-story-elimination', 'rat-kho', 'reasoning_story', 'g1-elimination', 'orderLogic', { mode: 'elimination' });
  add(1, 'g1-vh-visual-grid', 'rat-kho', 'visual_logic', 'g1-grid-rectangles', 'gridRectangles', { minRows: 2, maxRows: 3, maxCols: 4, minAnswer: 10, maxAnswer: 45 });
  add(1, 'g1-vh-visual-balance-two', 'rat-kho', 'visual_logic', 'g1-balance-two', 'balance', { mode: 'two' });
  add(1, 'g1-vh-visual-pattern', 'rat-kho', 'visual_logic', 'g1-shape-pattern', 'shapePattern', { mode: 'position' });
  add(1, 'g1-vh-calc-digit', 'rat-kho', 'advanced_computation', 'g1-digit-puzzle', 'digitPuzzle', { mode: 'two-digit' });
  add(1, 'g1-vh-calc-magic', 'rat-kho', 'advanced_computation', 'g1-magic-sum', 'magicSum', { size: 3 });

  // Lớp 2: lời văn nhiều bước, nhân/chia bước đầu và phép chia phải hết.
  add(2, 'g2-h-story-groups-change', 'kho', 'reasoning_story', 'g2-groups-change', 'equalGroups', { mode: 'forward-change' });
  add(2, 'g2-h-story-inverse', 'kho', 'reasoning_story', 'g2-inverse-events', 'transactions', { mode: 'inverse', steps: 2 });
  add(2, 'g2-h-story-transfer', 'kho', 'reasoning_story', 'g2-transfer', 'transfer', { mode: 'difference-after' });
  add(2, 'g2-h-story-money', 'kho', 'reasoning_story', 'g2-money', 'money', { mode: 'two-buy-one-left' });
  add(2, 'g2-h-story-time', 'kho', 'reasoning_story', 'g2-time', 'timeStory', { mode: 'end-time' });
  add(2, 'g2-h-story-length', 'kho', 'reasoning_story', 'g2-length', 'measureStory', { mode: 'centimetres' });
  add(2, 'g2-h-story-data', 'kho', 'reasoning_story', 'g2-data-choice', 'irrelevantData', { mode: 'groups' });
  add(2, 'g2-h-visual-sequence', 'kho', 'visual_logic', 'g2-sequence', 'sequence', { mode: 'alternating' });
  add(2, 'g2-h-visual-balance', 'kho', 'visual_logic', 'g2-balance', 'balance', { mode: 'one' });
  add(2, 'g2-h-visual-grid', 'kho', 'visual_logic', 'g2-grid', 'gridRectangles', { minRows: 2, maxRows: 3, maxCols: 5, minAnswer: 10, maxAnswer: 100 });
  add(2, 'g2-h-visual-path', 'kho', 'visual_logic', 'g2-path', 'pathLength', { mode: 'mixed-units' });
  add(2, 'g2-h-visual-order', 'kho', 'visual_logic', 'g2-order', 'orderLogic', { mode: 'five-seats' });
  add(2, 'g2-h-calc-expression', 'kho', 'advanced_computation', 'g2-expression', 'expression', { mode: 'three-terms' });
  add(2, 'g2-h-calc-hidden', 'kho', 'advanced_computation', 'g2-hidden', 'hiddenNumber', { steps: 2 });
  add(2, 'g2-h-calc-groups', 'kho', 'advanced_computation', 'g2-groups', 'equalGroups', { mode: 'inverse-groups' });
  add(2, 'g2-vh-story-two-sources', 'rat-kho', 'reasoning_story', 'g2-two-sources', 'twoContainers', { mode: 'use-and-add' });
  add(2, 'g2-vh-story-inverse-groups', 'rat-kho', 'reasoning_story', 'g2-inverse-groups', 'equalGroups', { mode: 'inverse-total' });
  add(2, 'g2-vh-story-relations', 'rat-kho', 'reasoning_story', 'g2-relations', 'compareGroups', { mode: 'three-total' });
  add(2, 'g2-vh-story-overlap', 'rat-kho', 'reasoning_story', 'g2-overlap', 'overlapCount', { mode: 'two-groups' });
  add(2, 'g2-vh-story-inclusive', 'rat-kho', 'reasoning_story', 'g2-inclusive-count', 'inclusiveCount', { mode: 'numbered-seats' });
  add(2, 'g2-vh-visual-balance-two', 'rat-kho', 'visual_logic', 'g2-balance-two', 'balance', { mode: 'two' });
  add(2, 'g2-vh-visual-shapes', 'rat-kho', 'visual_logic', 'g2-shape-composite', 'shapeCount', { mode: 'composite' });
  add(2, 'g2-vh-visual-pattern', 'rat-kho', 'visual_logic', 'g2-pattern', 'shapePattern', { mode: 'position' });
  add(2, 'g2-vh-visual-missing-path', 'rat-kho', 'visual_logic', 'g2-missing-path', 'missingPath', { mode: 'find-segment' });
  add(2, 'g2-vh-visual-number-pyramid', 'rat-kho', 'visual_logic', 'g2-number-pyramid', 'numberPyramid', { mode: 'middle-base' });
  add(2, 'g2-vh-calc-digit', 'rat-kho', 'advanced_computation', 'g2-digit-puzzle', 'digitPuzzle', { mode: 'reverse-number' });
  add(2, 'g2-vh-calc-magic', 'rat-kho', 'advanced_computation', 'g2-magic-sum', 'magicSum', { size: 3 });

  // Lớp 3: khoảng 60% lời văn/suy luận, nhấn mạnh đọc hiểu và chọn phép tính.
  add(3, 'g3-h-reason-groups', 'kho', 'reasoning_story', 'g3-groups-change', 'equalGroups', { mode: 'forward-change' });
  add(3, 'g3-h-reason-inverse', 'kho', 'reasoning_story', 'g3-inverse-events', 'transactions', { mode: 'inverse', steps: 3 });
  add(3, 'g3-h-reason-time', 'kho', 'reasoning_story', 'g3-time-schedule', 'timeStory', { mode: 'duration-gap' });
  add(3, 'g3-h-reason-measure', 'kho', 'reasoning_story', 'g3-measure', 'measureStory', { mode: 'mixed-length' });
  add(3, 'g3-h-reason-remainder', 'kho', 'reasoning_story', 'g3-remainder-context', 'divisionRemainder', { mode: 'packages' });
  add(3, 'g3-h-reason-money', 'kho', 'reasoning_story', 'g3-money-bundle', 'money', { mode: 'bundle-change' });
  add(3, 'g3-h-reason-data', 'kho', 'reasoning_story', 'g3-data-choice', 'irrelevantData', { mode: 'multi-step' });
  add(3, 'g3-h-reason-perimeter', 'kho', 'reasoning_story', 'g3-perimeter-story', 'geometryStory', { mode: 'rectangle-fence' });
  add(3, 'g3-h-canonical-unit', 'kho', 'canonical_problem', 'g3-unit-rate', 'unitRate', { mode: 'find-many' });
  add(3, 'g3-h-canonical-division', 'kho', 'canonical_problem', 'g3-equal-share', 'equalGroups', { mode: 'exact-share' });
  add(3, 'g3-h-canonical-multiple', 'kho', 'canonical_problem', 'g3-multiple-compare', 'compareGroups', { mode: 'multiple-total' });
  add(3, 'g3-h-canonical-rectangle', 'kho', 'canonical_problem', 'g3-rectangle', 'geometryStory', { mode: 'perimeter-missing' });
  add(3, 'g3-h-calc-expression', 'kho', 'advanced_computation', 'g3-expression', 'expression', { mode: 'mixed-operations' });
  add(3, 'g3-h-calc-unknown', 'kho', 'advanced_computation', 'g3-unknown', 'hiddenNumber', { steps: 3 });
  add(3, 'g3-h-calc-digit', 'kho', 'advanced_computation', 'g3-digit', 'digitPuzzle', { mode: 'three-digit' });
  add(3, 'g3-h-reason-book-chain', 'kho', 'reasoning_story', 'g3-book-chain', 'diversityEntry', { mode: 'g3-book-chain' });
  add(3, 'g3-h-reason-repack', 'kho', 'reasoning_story', 'g3-repack-reverse', 'diversityEntry', { mode: 'g3-repack-reverse' });
  add(3, 'g3-h-reason-backward-time', 'kho', 'reasoning_story', 'g3-backward-time', 'diversityEntry', { mode: 'g3-backward-time' });
  add(3, 'g3-h-reason-fence-gate', 'kho', 'reasoning_story', 'g3-fence-gate', 'diversityEntry', { mode: 'g3-fence-gate' });
  add(3, 'g3-h-canonical-share-change', 'kho', 'canonical_problem', 'g3-share-change', 'diversityEntry', { mode: 'g3-share-change' });
  add(3, 'g3-h-canonical-row-change', 'kho', 'canonical_problem', 'g3-row-change', 'diversityEntry', { mode: 'g3-row-change' });
  add(3, 'g3-h-calc-digit-rotate', 'kho', 'advanced_computation', 'g3-digit-rotate', 'diversityEntry', { mode: 'g3-digit-rotate' });
  add(3, 'g3-vh-reason-inventory', 'rat-kho', 'reasoning_story', 'g3-inventory', 'equalGroups', { mode: 'three-stage' });
  add(3, 'g3-vh-reason-timetable', 'rat-kho', 'reasoning_story', 'g3-timetable', 'timeStory', { mode: 'three-activities' });
  add(3, 'g3-vh-reason-logic', 'rat-kho', 'reasoning_story', 'g3-distribution-logic', 'distributionLogic', { mode: 'three-groups' });
  add(3, 'g3-vh-reason-geometry', 'rat-kho', 'reasoning_story', 'g3-composite-geometry', 'geometryStory', { mode: 'two-rectangles' });
  add(3, 'g3-vh-reason-remainder', 'rat-kho', 'reasoning_story', 'g3-remainder-logic', 'divisionRemainder', { mode: 'minimum-extra' });
  add(3, 'g3-vh-canonical-unit', 'rat-kho', 'canonical_problem', 'g3-unit-inverse', 'unitRate', { mode: 'inverse-many' });
  add(3, 'g3-vh-canonical-groups', 'rat-kho', 'canonical_problem', 'g3-groups-inverse', 'equalGroups', { mode: 'inverse-total' });
  add(3, 'g3-vh-calc-expression', 'rat-kho', 'advanced_computation', 'g3-expression-puzzle', 'expression', { mode: 'nested' });
  add(3, 'g3-vh-calc-digit', 'rat-kho', 'advanced_computation', 'g3-digit-puzzle', 'digitPuzzle', { mode: 'three-digit' });

  // Lớp 4: dạng điển hình và lời văn nhiều bước.
  add(4, 'g4-h-reason-inventory', 'kho', 'reasoning_story', 'g4-inventory', 'transactions', { mode: 'forward', steps: 3 });
  add(4, 'g4-h-reason-money', 'kho', 'reasoning_story', 'g4-money', 'money', { mode: 'bundle-change' });
  add(4, 'g4-h-reason-time', 'kho', 'reasoning_story', 'g4-time', 'timeStory', { mode: 'duration-gap' });
  add(4, 'g4-h-reason-measure', 'kho', 'reasoning_story', 'g4-measure', 'measureStory', { mode: 'mixed-measure' });
  add(4, 'g4-h-reason-area', 'kho', 'reasoning_story', 'g4-area-story', 'geometryStory', { mode: 'area-path' });
  add(4, 'g4-h-reason-fraction', 'kho', 'reasoning_story', 'g4-fraction-story', 'fractionStory', { mode: 'two-parts-left' });
  add(4, 'g4-h-reason-data', 'kho', 'reasoning_story', 'g4-data-choice', 'irrelevantData', { mode: 'multi-step' });
  add(4, 'g4-h-reason-plan', 'kho', 'reasoning_story', 'g4-plan-compare', 'planCompare', { mode: 'two-plans' });
  add(4, 'g4-h-canonical-total-diff', 'kho', 'canonical_problem', 'g4-total-diff', 'totalDifference', { mode: 'basic' });
  add(4, 'g4-h-canonical-total-ratio', 'kho', 'canonical_problem', 'g4-total-ratio', 'ratioProblem', { mode: 'total-ratio' });
  add(4, 'g4-h-canonical-diff-ratio', 'kho', 'canonical_problem', 'g4-diff-ratio', 'ratioProblem', { mode: 'difference-ratio' });
  add(4, 'g4-h-canonical-average', 'kho', 'canonical_problem', 'g4-average', 'averageProblem', { mode: 'missing-value' });
  add(4, 'g4-h-calc-expression', 'kho', 'advanced_computation', 'g4-expression', 'expression', { mode: 'mixed-operations' });
  add(4, 'g4-h-calc-unknown', 'kho', 'advanced_computation', 'g4-unknown', 'hiddenNumber', { steps: 3 });
  add(4, 'g4-h-calc-fraction', 'kho', 'advanced_computation', 'g4-fraction-calc', 'fractionStory', { mode: 'calculation' });
  add(4, 'g4-h-reason-average-add', 'kho', 'reasoning_story', 'g4-average-add', 'diversityEntry', { mode: 'g4-average-add' });
  add(4, 'g4-h-reason-fraction-reverse', 'kho', 'reasoning_story', 'g4-fraction-reverse', 'diversityEntry', { mode: 'g4-fraction-reverse' });
  add(4, 'g4-h-reason-area-path-inverse', 'kho', 'reasoning_story', 'g4-area-path-inverse', 'diversityEntry', { mode: 'g4-area-path-inverse' });
  add(4, 'g4-h-reason-price-relation', 'kho', 'reasoning_story', 'g4-price-relation', 'diversityEntry', { mode: 'g4-price-relation' });
  add(4, 'g4-h-canonical-ratio-transfer', 'kho', 'canonical_problem', 'g4-ratio-transfer', 'diversityEntry', { mode: 'g4-ratio-transfer' });
  add(4, 'g4-h-canonical-pair-averages', 'kho', 'canonical_problem', 'g4-pair-averages', 'diversityEntry', { mode: 'g4-pair-averages' });
  add(4, 'g4-h-calc-series-error', 'kho', 'advanced_computation', 'g4-series-error', 'diversityEntry', { mode: 'g4-series-error' });
  add(4, 'g4-vh-reason-inverse', 'rat-kho', 'reasoning_story', 'g4-inverse-multistep', 'transactions', { mode: 'inverse', steps: 4 });
  add(4, 'g4-vh-reason-fraction', 'rat-kho', 'reasoning_story', 'g4-fraction-inverse', 'fractionStory', { mode: 'inverse-total' });
  add(4, 'g4-vh-reason-geometry', 'rat-kho', 'reasoning_story', 'g4-composite-area', 'geometryStory', { mode: 'composite-area' });
  add(4, 'g4-vh-reason-logic', 'rat-kho', 'reasoning_story', 'g4-distribution', 'distributionLogic', { mode: 'ratio-and-difference' });
  add(4, 'g4-vh-reason-schedule', 'rat-kho', 'reasoning_story', 'g4-schedule', 'timeStory', { mode: 'three-activities' });
  add(4, 'g4-vh-canonical-total-diff', 'rat-kho', 'canonical_problem', 'g4-hidden-total-diff', 'totalDifference', { mode: 'hidden-total' });
  add(4, 'g4-vh-canonical-ratio', 'rat-kho', 'canonical_problem', 'g4-hidden-ratio', 'ratioProblem', { mode: 'changed-ratio' });
  add(4, 'g4-vh-calc-expression', 'rat-kho', 'advanced_computation', 'g4-nested-expression', 'expression', { mode: 'nested' });
  add(4, 'g4-vh-calc-digit', 'rat-kho', 'advanced_computation', 'g4-digit-puzzle', 'digitPuzzle', { mode: 'three-digit' });

  // Lớp 5: chuyển động, phần trăm, phân số và lời văn phức hợp.
  add(5, 'g5-h-reason-motion-leg', 'kho', 'reasoning_story', 'g5-motion-two-legs', 'g5HardMotionLeg', { mode: 'two-speed-average' });
  add(5, 'g5-h-reason-motion-meet', 'kho', 'reasoning_story', 'g5-motion-meet', 'g5HardMotionMeet', { mode: 'delayed-meeting' });
  add(5, 'g5-h-reason-percent', 'kho', 'reasoning_story', 'g5-percent-discount', 'g5HardPercentDiscount', { mode: 'markup-discount-profit' });
  add(5, 'g5-h-reason-percent-part', 'kho', 'reasoning_story', 'g5-percent-part', 'g5HardPercentPart', { mode: 'two-stage-percent' });
  add(5, 'g5-h-reason-fraction', 'kho', 'reasoning_story', 'g5-fraction', 'fractionStory', { mode: 'two-parts-left' });
  add(5, 'g5-h-reason-volume', 'kho', 'reasoning_story', 'g5-volume', 'g5HardVolume', { mode: 'tank-rise' });
  add(5, 'g5-h-reason-data', 'kho', 'reasoning_story', 'g5-data-choice', 'irrelevantData', { mode: 'multi-step' });
  add(5, 'g5-h-reason-plan', 'kho', 'reasoning_story', 'g5-plan-compare', 'g5HardPlan', { mode: 'plan-overtime' });
  add(5, 'g5-h-canonical-motion', 'kho', 'canonical_problem', 'g5-motion-basic', 'motionStory', { mode: 'find-time' });
  add(5, 'g5-h-canonical-percent', 'kho', 'canonical_problem', 'g5-percent-base', 'percentStory', { mode: 'find-base' });
  add(5, 'g5-h-canonical-average', 'kho', 'canonical_problem', 'g5-average', 'g5HardAverage', { mode: 'replace-two' });
  add(5, 'g5-h-canonical-unit', 'kho', 'canonical_problem', 'g5-unit-rate', 'g5HardUnitRate', { mode: 'combined-partial-work' });
  add(5, 'g5-h-calc-decimal', 'kho', 'advanced_computation', 'g5-decimal-expression', 'g5HardDecimal', { mode: 'decimal-factor' });
  add(5, 'g5-h-calc-fraction', 'kho', 'advanced_computation', 'g5-fraction-calc', 'fractionStory', { mode: 'calculation' });
  add(5, 'g5-h-calc-unknown', 'kho', 'advanced_computation', 'g5-unknown', 'g5HardUnknown', { mode: 'reverse-percent-fraction' });
  add(5, 'g5-h-reason-motion-stop', 'kho', 'reasoning_story', 'g5-motion-stop', 'diversityEntry', { mode: 'g5-motion-stop' });
  add(5, 'g5-h-reason-percent-chain', 'kho', 'reasoning_story', 'g5-percent-chain', 'diversityEntry', { mode: 'g5-percent-chain' });
  add(5, 'g5-h-reason-volume-inverse', 'kho', 'reasoning_story', 'g5-volume-inverse', 'diversityEntry', { mode: 'g5-volume-inverse' });
  add(5, 'g5-h-reason-area-change', 'kho', 'reasoning_story', 'g5-area-change', 'diversityEntry', { mode: 'g5-area-change' });
  add(5, 'g5-h-canonical-work-stages', 'kho', 'canonical_problem', 'g5-work-stages', 'diversityEntry', { mode: 'g5-work-stages' });
  add(5, 'g5-h-canonical-age-two-times', 'kho', 'canonical_problem', 'g5-age-two-times', 'diversityEntry', { mode: 'g5-age-two-times' });
  add(5, 'g5-h-calc-mixed-factor', 'kho', 'advanced_computation', 'g5-mixed-factor', 'diversityEntry', { mode: 'g5-mixed-factor' });
  add(5, 'g5-vh-reason-catchup', 'rat-kho', 'reasoning_story', 'g5-motion-catchup', 'motionStory', { mode: 'catch-up' });
  add(5, 'g5-vh-reason-percent-two', 'rat-kho', 'reasoning_story', 'g5-percent-successive', 'percentStory', { mode: 'successive' });
  add(5, 'g5-vh-reason-tank', 'rat-kho', 'reasoning_story', 'g5-volume-tank', 'geometryStory', { mode: 'tank-level' });
  add(5, 'g5-vh-reason-fraction', 'rat-kho', 'reasoning_story', 'g5-fraction-inverse', 'fractionStory', { mode: 'inverse-total' });
  add(5, 'g5-vh-reason-combination', 'rat-kho', 'reasoning_story', 'g5-combination', 'combinationStory', { mode: 'two-conditions' });
  add(5, 'g5-vh-canonical-motion', 'rat-kho', 'canonical_problem', 'g5-motion-reverse', 'motionStory', { mode: 'reverse-speed' });
  add(5, 'g5-vh-canonical-percent', 'rat-kho', 'canonical_problem', 'g5-percent-reverse', 'percentStory', { mode: 'reverse-after-change' });
  add(5, 'g5-vh-calc-expression', 'rat-kho', 'advanced_computation', 'g5-nested-decimal', 'expression', { mode: 'nested-decimal' });
  add(5, 'g5-vh-calc-fraction', 'rat-kho', 'advanced_computation', 'g5-fraction-expression', 'fractionStory', { mode: 'expression' });

  // Phần III – Chinh phục HSG: sáu câu có nút thắt suy luận riêng cho từng lớp.
  add(1, 'g1-cp-transfer-equal', 'chinh-phuc', 'reasoning_story', 'g1-cp-transfer-equal', 'champion', { mode: 'g1-transfer-equal' });
  add(1, 'g1-cp-pair-sums', 'chinh-phuc', 'reasoning_story', 'g1-cp-pair-sums', 'champion', { mode: 'g1-pair-sums' });
  add(1, 'g1-cp-sequence', 'chinh-phuc', 'visual_logic', 'g1-cp-sequence', 'champion', { mode: 'g1-sequence' });
  add(1, 'g1-cp-balance-chain', 'chinh-phuc', 'visual_logic', 'g1-cp-balance-chain', 'champion', { mode: 'g1-balance-chain' });
  add(1, 'g1-cp-magic-triangle', 'chinh-phuc', 'advanced_computation', 'g1-cp-magic-triangle', 'champion', { mode: 'g1-magic-triangle' });
  add(1, 'g1-cp-digit-conditions', 'chinh-phuc', 'advanced_computation', 'g1-cp-digit-conditions', 'champion', { mode: 'g1-digit-conditions' });
  add(1, 'g1-cp-reverse-steps', 'chinh-phuc', 'reasoning_story', 'g1-cp-reverse-steps', 'championExtra', { mode: 'g1-reverse-steps' });
  add(1, 'g1-cp-three-friends', 'chinh-phuc', 'reasoning_story', 'g1-cp-three-friends', 'championExtra', { mode: 'g1-three-friends' });
  add(1, 'g1-cp-two-rules', 'chinh-phuc', 'visual_logic', 'g1-cp-two-rules', 'championExtra', { mode: 'g1-two-rules' });
  add(1, 'g1-cp-order-clues', 'chinh-phuc', 'visual_logic', 'g1-cp-order-clues', 'championExtra', { mode: 'g1-order-clues' });
  add(1, 'g1-cp-number-cross', 'chinh-phuc', 'advanced_computation', 'g1-cp-number-cross', 'championExtra', { mode: 'g1-number-cross' });
  add(1, 'g1-cp-hidden-start', 'chinh-phuc', 'advanced_computation', 'g1-cp-hidden-start', 'championExtra', { mode: 'g1-hidden-start' });

  add(2, 'g2-cp-chicken-rabbit', 'chinh-phuc', 'reasoning_story', 'g2-cp-chicken-rabbit', 'champion', { mode: 'g2-chicken-rabbit' });
  add(2, 'g2-cp-three-boxes', 'chinh-phuc', 'reasoning_story', 'g2-cp-three-boxes', 'champion', { mode: 'g2-three-boxes' });
  add(2, 'g2-cp-calendar', 'chinh-phuc', 'visual_logic', 'g2-cp-calendar', 'champion', { mode: 'g2-calendar' });
  add(2, 'g2-cp-planting-square', 'chinh-phuc', 'visual_logic', 'g2-cp-planting-square', 'champion', { mode: 'g2-planting-square' });
  add(2, 'g2-cp-pair-sums', 'chinh-phuc', 'advanced_computation', 'g2-cp-pair-sums', 'champion', { mode: 'g2-pair-sums' });
  add(2, 'g2-cp-reverse-number', 'chinh-phuc', 'advanced_computation', 'g2-cp-reverse-number', 'champion', { mode: 'g2-reverse-number' });
  add(2, 'g2-cp-cuts', 'chinh-phuc', 'reasoning_story', 'g2-cp-cuts', 'championExtra', { mode: 'g2-cuts' });
  add(2, 'g2-cp-transfer-bags', 'chinh-phuc', 'reasoning_story', 'g2-cp-transfer-bags', 'championExtra', { mode: 'g2-transfer-bags' });
  add(2, 'g2-cp-line-position', 'chinh-phuc', 'visual_logic', 'g2-cp-line-position', 'championExtra', { mode: 'g2-line-position' });
  add(2, 'g2-cp-grid-rectangles', 'chinh-phuc', 'visual_logic', 'g2-cp-grid-rectangles', 'championExtra', { mode: 'g2-grid-rectangles' });
  add(2, 'g2-cp-magic-square', 'chinh-phuc', 'advanced_computation', 'g2-cp-magic-square', 'championExtra', { mode: 'g2-magic-square' });
  add(2, 'g2-cp-divide-reverse', 'chinh-phuc', 'advanced_computation', 'g2-cp-divide-reverse', 'championExtra', { mode: 'g2-divide-reverse' });

  add(3, 'g3-cp-series', 'chinh-phuc', 'reasoning_story', 'g3-cp-series', 'champion', { mode: 'g3-series' });
  add(3, 'g3-cp-page-digits', 'chinh-phuc', 'reasoning_story', 'g3-cp-page-digits', 'champion', { mode: 'g3-page-digits' });
  add(3, 'g3-cp-three-ages', 'chinh-phuc', 'reasoning_story', 'g3-cp-three-ages', 'champion', { mode: 'g3-three-ages' });
  add(3, 'g3-cp-planting-closed', 'chinh-phuc', 'canonical_problem', 'g3-cp-planting-closed', 'champion', { mode: 'g3-planting-closed' });
  add(3, 'g3-cp-division-model', 'chinh-phuc', 'canonical_problem', 'g3-cp-division-model', 'champion', { mode: 'g3-division-model' });
  add(3, 'g3-cp-three-digit', 'chinh-phuc', 'advanced_computation', 'g3-cp-three-digit', 'champion', { mode: 'g3-three-digit' });
  add(3, 'g3-cp-planting-open', 'chinh-phuc', 'reasoning_story', 'g3-cp-planting-open', 'championExtra', { mode: 'g3-planting-open' });
  add(3, 'g3-cp-inventory-reverse', 'chinh-phuc', 'reasoning_story', 'g3-cp-inventory-reverse', 'championExtra', { mode: 'g3-inventory-reverse' });
  add(3, 'g3-cp-age-chain', 'chinh-phuc', 'reasoning_story', 'g3-cp-age-chain', 'championExtra', { mode: 'g3-age-chain' });
  add(3, 'g3-cp-unit-rate-reverse', 'chinh-phuc', 'canonical_problem', 'g3-cp-unit-rate-reverse', 'championExtra', { mode: 'g3-unit-rate-reverse' });
  add(3, 'g3-cp-rectangle-split', 'chinh-phuc', 'canonical_problem', 'g3-cp-rectangle-split', 'championExtra', { mode: 'g3-rectangle-split' });
  add(3, 'g3-cp-remainder-number', 'chinh-phuc', 'advanced_computation', 'g3-cp-remainder-number', 'championExtra', { mode: 'g3-remainder-number' });

  add(4, 'g4-cp-tickets', 'chinh-phuc', 'reasoning_story', 'g4-cp-tickets', 'champion', { mode: 'g4-tickets' });
  add(4, 'g4-cp-two-times-age', 'chinh-phuc', 'reasoning_story', 'g4-cp-two-times-age', 'champion', { mode: 'g4-two-times-age' });
  add(4, 'g4-cp-hidden-average', 'chinh-phuc', 'reasoning_story', 'g4-cp-hidden-average', 'champion', { mode: 'g4-hidden-average' });
  add(4, 'g4-cp-chain-ratio', 'chinh-phuc', 'canonical_problem', 'g4-cp-chain-ratio', 'champion', { mode: 'g4-chain-ratio' });
  add(4, 'g4-cp-changed-ratio', 'chinh-phuc', 'canonical_problem', 'g4-cp-changed-ratio', 'champion', { mode: 'g4-changed-ratio' });
  add(4, 'g4-cp-fraction-series', 'chinh-phuc', 'advanced_computation', 'g4-cp-fraction-series', 'champion', { mode: 'g4-fraction-series' });
  add(4, 'g4-cp-planting-sides', 'chinh-phuc', 'reasoning_story', 'g4-cp-planting-sides', 'championExtra', { mode: 'g4-planting-sides' });
  add(4, 'g4-cp-average-reverse', 'chinh-phuc', 'reasoning_story', 'g4-cp-average-reverse', 'championExtra', { mode: 'g4-average-reverse' });
  add(4, 'g4-cp-heads-legs', 'chinh-phuc', 'reasoning_story', 'g4-cp-heads-legs', 'championExtra', { mode: 'g4-heads-legs' });
  add(4, 'g4-cp-sum-difference', 'chinh-phuc', 'canonical_problem', 'g4-cp-sum-difference', 'championExtra', { mode: 'g4-sum-difference' });
  add(4, 'g4-cp-fraction-left', 'chinh-phuc', 'canonical_problem', 'g4-cp-fraction-left', 'championExtra', { mode: 'g4-fraction-left' });
  add(4, 'g4-cp-series-blocks', 'chinh-phuc', 'advanced_computation', 'g4-cp-series-blocks', 'championExtra', { mode: 'g4-series-blocks' });

  add(5, 'g5-cp-train-bridge', 'chinh-phuc', 'reasoning_story', 'g5-cp-train-bridge', 'champion', { mode: 'g5-train-bridge' });
  add(5, 'g5-cp-canoe', 'chinh-phuc', 'reasoning_story', 'g5-cp-canoe', 'champion', { mode: 'g5-canoe' });
  add(5, 'g5-cp-concentration', 'chinh-phuc', 'reasoning_story', 'g5-cp-concentration', 'champion', { mode: 'g5-concentration' });
  add(5, 'g5-cp-work-rate', 'chinh-phuc', 'canonical_problem', 'g5-cp-work-rate', 'champion', { mode: 'g5-work-rate' });
  add(5, 'g5-cp-area-ratio', 'chinh-phuc', 'canonical_problem', 'g5-cp-area-ratio', 'champion', { mode: 'g5-area-ratio' });
  add(5, 'g5-cp-clock-hands', 'chinh-phuc', 'advanced_computation', 'g5-cp-clock-hands', 'champion', { mode: 'g5-clock-hands' });
  add(5, 'g5-cp-tank-valves', 'chinh-phuc', 'reasoning_story', 'g5-cp-tank-valves', 'champion', { mode: 'g5-tank-valves' });
  add(5, 'g5-cp-rabbit-chase', 'chinh-phuc', 'reasoning_story', 'g5-cp-rabbit-chase', 'champion', { mode: 'g5-rabbit-chase' });
  add(5, 'g5-cp-reverse-percent', 'chinh-phuc', 'reasoning_story', 'g5-cp-reverse-percent', 'champion', { mode: 'g5-reverse-percent' });
  add(5, 'g5-cp-average-speed', 'chinh-phuc', 'canonical_problem', 'g5-cp-average-speed', 'champion', { mode: 'g5-average-speed' });
  add(5, 'g5-cp-after-meeting', 'chinh-phuc', 'canonical_problem', 'g5-cp-changed-speed-meet', 'champion', { mode: 'g5-changed-speed-meet' });
  add(5, 'g5-cp-odd-fractions', 'chinh-phuc', 'advanced_computation', 'g5-cp-odd-fractions', 'champion', { mode: 'g5-odd-fractions' });
  add(5, 'g5-cp-age-sum', 'chinh-phuc', 'reasoning_story', 'g5-cp-age-sum', 'champion', { mode: 'g5-age-sum' });
  add(5, 'g5-cp-market-price', 'chinh-phuc', 'reasoning_story', 'g5-cp-market-price', 'champion', { mode: 'g5-market-price' });
  add(5, 'g5-cp-shelf-transfer', 'chinh-phuc', 'reasoning_story', 'g5-cp-shelf-transfer', 'champion', { mode: 'g5-shelf-transfer' });
  add(5, 'g5-cp-handshakes', 'chinh-phuc', 'canonical_problem', 'g5-cp-handshakes', 'champion', { mode: 'g5-handshakes' });
  add(5, 'g5-cp-equal-area', 'chinh-phuc', 'canonical_problem', 'g5-cp-equal-area', 'champion', { mode: 'g5-equal-area' });
  add(5, 'g5-cp-geometric-fractions', 'chinh-phuc', 'advanced_computation', 'g5-cp-geometric-fractions', 'champion', { mode: 'g5-geometric-fractions' });

  const BUILDERS = Object.create(null);

  function randomInt(min, max, rng) {
    return Math.floor((rng || Math.random)() * (max - min + 1)) + min;
  }

  function pick(items, rng) {
    return items[randomInt(0, items.length - 1, rng)];
  }

  function shuffle(items, rng) {
    const copy = items.slice();
    for (let index = copy.length - 1; index > 0; index -= 1) {
      const other = randomInt(0, index, rng);
      [copy[index], copy[other]] = [copy[other], copy[index]];
    }
    return copy;
  }

  function gcd(a, b) {
    let first = Math.abs(a);
    let second = Math.abs(b);
    while (second) {
      const next = first % second;
      first = second;
      second = next;
    }
    return first || 1;
  }

  function lcm(a, b) {
    return Math.abs(a * b) / gcd(a, b);
  }

  function rational(numerator, denominator) {
    if (!Number.isInteger(numerator) || !Number.isInteger(denominator) || denominator === 0) {
      return { kind: 'invalid' };
    }
    const sign = denominator < 0 ? -1 : 1;
    const divisor = gcd(numerator, denominator);
    return { kind: 'rational', numerator: sign * numerator / divisor, denominator: Math.abs(denominator) / divisor };
  }

  function integer(value) {
    return { kind: 'integer', value };
  }

  function timeAnswer(totalMinutes) {
    return { kind: 'time', totalMinutes };
  }

  function remainderAnswer(quotient, remainder) {
    return { kind: 'remainder', quotient, remainder };
  }

  function normalizeAnswer(answer) {
    if (!answer || typeof answer !== 'object') return null;
    if (answer.kind === 'integer' && Number.isInteger(answer.value)) return { kind: 'integer', value: answer.value };
    if (answer.kind === 'rational' && Number.isInteger(answer.numerator) && Number.isInteger(answer.denominator) && answer.denominator > 0) {
      return rational(answer.numerator, answer.denominator);
    }
    if (answer.kind === 'time' && Number.isInteger(answer.totalMinutes)) return { kind: 'time', totalMinutes: answer.totalMinutes };
    if (answer.kind === 'remainder' && Number.isInteger(answer.quotient) && Number.isInteger(answer.remainder)) {
      return { kind: 'remainder', quotient: answer.quotient, remainder: answer.remainder };
    }
    return null;
  }

  function answersEqual(first, second) {
    const a = normalizeAnswer(first);
    const b = normalizeAnswer(second);
    return !!a && !!b && JSON.stringify(a) === JSON.stringify(b);
  }

  function bruteForceInteger(min, max, predicate) {
    for (let value = min; value <= max; value += 1) {
      if (predicate(value)) return integer(value);
    }
    return { kind: 'invalid' };
  }

  function formatNumber(value) {
    return new Intl.NumberFormat('vi-VN', { maximumFractionDigits: 3 }).format(value).replace(/\./g, ' ');
  }

  function formatTime(totalMinutes) {
    const minutes = ((totalMinutes % 1440) + 1440) % 1440;
    return Math.floor(minutes / 60) + ' giờ ' + String(minutes % 60).padStart(2, '0') + ' phút';
  }

  function answerText(answer, unit, format) {
    const normalized = normalizeAnswer(answer);
    if (!normalized) return '';
    let text = '';
    if (normalized.kind === 'integer') text = formatNumber(normalized.value);
    if (normalized.kind === 'rational') {
      text = format === 'decimal'
        ? new Intl.NumberFormat('vi-VN', { maximumFractionDigits: 6 }).format(normalized.numerator / normalized.denominator)
        : normalized.denominator === 1 ? formatNumber(normalized.numerator) : normalized.numerator + '/' + normalized.denominator;
    }
    if (normalized.kind === 'time') text = formatTime(normalized.totalMinutes);
    if (normalized.kind === 'remainder') text = normalized.quotient + ' dư ' + normalized.remainder;
    return unit && normalized.kind !== 'time' ? (unit === '%' ? text + '%' : text + ' ' + unit) : text;
  }

  function makeQuestion(meta, model, prompt, solverA, solverB, solution, options) {
    const settings = options || {};
    const solutionSteps = Array.isArray(solution) ? solution : [solution];
    return {
      templateId: meta.templateId,
      builder: meta.builder,
      family: meta.family,
      difficulty: meta.difficulty,
      category: meta.category,
      grade: meta.grade,
      knowledge: settings.knowledge || [],
      prompt,
      model,
      solverA,
      solverB,
      solution: solutionSteps,
      reasoningSteps: Number.isInteger(settings.reasoningSteps) ? settings.reasoningSteps : solutionSteps.length,
      keyPoint: settings.keyPoint || '',
      unit: settings.unit || '',
      answerFormat: settings.answerFormat || '',
      divisions: settings.divisions || [],
      svgGivens: settings.svgGivens || null,
      visibleNumbers: settings.visibleNumbers || collectNumbers(model),
      intermediateNumbers: settings.intermediateNumbers || [],
      inputHint: settings.inputHint || 'Nhập đáp án'
    };
  }

  function collectNumbers(value, output, key) {
    const list = output || [];
    if (key === 'answer' || key === 'solution' || key === 'correct') return list;
    if (typeof value === 'number') list.push(value);
    else if (Array.isArray(value)) value.forEach(item => collectNumbers(item, list));
    else if (value && typeof value === 'object') Object.keys(value).forEach(name => collectNumbers(value[name], list, name));
    return list;
  }

  function metaFor(templateItem, variant) {
    return {
      grade: templateItem.grade,
      difficulty: templateItem.difficulty,
      category: templateItem.category,
      family: templateItem.family,
      builder: templateItem.builder,
      templateId: templateItem.id + '-v' + variant,
      variant
    };
  }

  function variantText(meta, first, second) {
    return meta.variant ? second : first;
  }

  function gradeRange(grade) {
    return grade === 1 ? { low: 5, middle: 25, high: 75 }
      : grade === 2 ? { low: 20, middle: 180, high: 750 }
        : grade === 3 ? { low: 30, middle: 600, high: 6000 }
          : grade === 4 ? { low: 100, middle: 4000, high: 60000 }
            : { low: 100, middle: 5000, high: 80000 };
  }

  BUILDERS.transactions = function (meta, params, rng) {
    const range = gradeRange(meta.grade);
    const count = Math.max(2, params.steps || 2);
    const startMax = meta.grade === 1 ? 45 : Math.max(80, Math.floor(range.middle * 0.45));
    const start = randomInt(meta.grade === 1 ? 12 : range.low, startMax, rng);
    const events = [];
    let current = start;
    for (let index = 0; index < count; index += 1) {
      const addEvent = index % 2 === 0;
      if (addEvent) {
        const room = Math.max(3, Math.min(meta.grade === 1 ? 18 : Math.floor(range.middle * 0.14), POLICIES[meta.grade].maxAnswer - current));
        const amount = randomInt(2, room, rng);
        events.push(amount);
        current += amount;
      } else {
        const amount = randomInt(1, Math.max(1, Math.min(current - 1, meta.grade === 1 ? 14 : Math.floor(range.middle * 0.1))), rng);
        events.push(-amount);
        current -= amount;
      }
    }
    if (meta.grade === 2 && params.mode === 'inverse' && events.length === 2 && Math.abs(events[0] + events[1]) < 4) {
      const maxRemove = Math.max(1, Math.min(start + events[0] - 1, Math.floor(range.middle * 0.1)));
      const usefulRemovals = Array.from({ length: maxRemove }, (_, index) => index + 1)
        .filter(amount => Math.abs(events[0] - amount) >= 4);
      if (usefulRemovals.length) {
        events[1] = -pick(usefulRemovals, rng);
        current = start + events[0] + events[1];
      }
    }
    const names = ['Lan', 'Minh', 'Nam', 'Mai', 'An'];
    const name = pick(names, rng);
    const actionText = events.map((event, index) => {
      const joiner = index ? (index === events.length - 1 ? ', sau đó ' : ', rồi ') : '';
      return joiner + (event > 0 ? 'nhận thêm ' + formatNumber(event) : 'cho đi ' + formatNumber(Math.abs(event)));
    }).join('');
    const model = { start, events, end: current };
    if (params.mode === 'inverse') {
      const prompt = variantText(
        meta,
        name + ' ' + actionText.charAt(0).toLowerCase() + actionText.slice(1) + ', cuối cùng còn ' + formatNumber(current) + ' đồ vật. Lúc đầu ' + name + ' có bao nhiêu đồ vật?',
        'Sau khi ' + actionText + ', ' + name + ' còn ' + formatNumber(current) + ' đồ vật. Hỏi trước các thay đổi đó ' + name + ' có bao nhiêu đồ vật?'
      );
      return makeQuestion(meta, model, prompt,
        data => integer(data.events.slice().reverse().reduce((value, event) => value - event, data.end)),
        data => bruteForceInteger(0, POLICIES[meta.grade].maxAnswer, candidate => data.events.reduce((value, event) => value + event, candidate) === data.end),
        ['Đọc các thay đổi theo thứ tự từ cuối về đầu.', 'Đảo ngược từng thao tác: nhận thêm thành bớt đi, cho đi thành cộng lại.', 'Kiểm tra bằng cách bắt đầu từ số vừa tìm rồi thực hiện xuôi toàn bộ thay đổi.'],
        { knowledge: ['add', 'subtract'], keyPoint: 'Bài toán hỏi số ban đầu nên cần thực hiện phép tính ngược.', visibleNumbers: [start, current].concat(events.map(Math.abs)), intermediateNumbers: [current] }
      );
    }
    const prompt = variantText(
      meta,
      name + ' có ' + formatNumber(start) + ' đồ vật, ' + actionText + '. Cuối cùng ' + name + ' có bao nhiêu đồ vật?',
      'Ban đầu ' + name + ' có ' + formatNumber(start) + ' đồ vật. Bạn ấy ' + actionText + '. Hỏi còn lại bao nhiêu đồ vật?'
    );
    return makeQuestion(meta, model, prompt,
      data => integer(data.events.reduce((value, event) => value + event, data.start)),
      data => integer(data.start + data.events.filter(value => value > 0).reduce((sum, value) => sum + value, 0) - data.events.filter(value => value < 0).reduce((sum, value) => sum + Math.abs(value), 0)),
      ['Cộng tất cả phần nhận thêm và trừ tất cả phần đã cho đi.', 'Đối chiếu kết quả bằng cách mô phỏng từng thay đổi theo đúng thứ tự.'],
      { knowledge: ['add', 'subtract'], keyPoint: 'Chỉ dùng các dữ kiện làm thay đổi số lượng của cùng một đối tượng.', visibleNumbers: [start, current].concat(events.map(Math.abs)), intermediateNumbers: [current] }
    );
  };

  BUILDERS.compareGroups = function (meta, params, rng) {
    const range = gradeRange(meta.grade);
    const base = randomInt(meta.grade === 1 ? 7 : range.low, meta.grade === 1 ? 24 : Math.max(range.low + 5, Math.floor(range.middle / 4)), rng);
    if (params.mode === 'more-total') {
      const difference = randomInt(2, meta.grade === 1 ? 12 : Math.max(6, Math.floor(base / 2)), rng);
      const model = { base, difference };
      return makeQuestion(meta, model,
        variantText(meta, 'Tổ Một có ' + base + ' bạn, tổ Hai nhiều hơn tổ Một ' + difference + ' bạn. Cả hai tổ có bao nhiêu bạn?', 'Nhóm Xanh có ' + base + ' đồ vật. Nhóm Đỏ có nhiều hơn nhóm Xanh ' + difference + ' đồ vật. Hai nhóm có tất cả bao nhiêu đồ vật?'),
        data => integer(data.base + (data.base + data.difference)),
        data => integer([data.base, data.base + data.difference].reduce((sum, value) => sum + value, 0)),
        ['Tìm số của nhóm nhiều hơn.', 'Cộng số của hai nhóm.'],
        { knowledge: ['add', 'compare'], keyPoint: '“Nhiều hơn” dùng để tìm nhóm thứ hai trước, chưa phải đáp án cuối.' }
      );
    }
    if (params.mode === 'multiple-total') {
      const factor = randomInt(2, 7, rng);
      const model = { base, factor };
      return makeQuestion(meta, model,
        variantText(meta, 'Ngăn dưới có ' + base + ' quyển sách. Ngăn trên có số sách gấp ' + factor + ' lần ngăn dưới. Cả hai ngăn có bao nhiêu quyển?', 'Đội A trồng được ' + base + ' cây; đội B trồng gấp ' + factor + ' lần đội A. Hai đội trồng được tất cả bao nhiêu cây?'),
        data => integer(data.base + data.base * data.factor),
        data => integer(Array.from({ length: data.factor + 1 }, () => data.base).reduce((sum, value) => sum + value, 0)),
        ['Tìm số lượng của nhóm gấp nhiều lần.', 'Cộng hai nhóm.'],
        { knowledge: ['multiply', 'add', 'compare'], keyPoint: 'Cả hai nhóm gồm một phần của nhóm bé và các phần của nhóm lớn.' }
      );
    }
    const isGrade2Challenge = meta.grade === 2 && meta.difficulty === 'rat-kho';
    const firstExtra = randomInt(isGrade2Challenge ? 4 : 2, meta.grade === 1 ? 8 : Math.max(8, Math.floor(base / 3)), rng);
    const secondMax = meta.grade === 1 ? 7 : Math.max(6, Math.floor(base / 4));
    let secondExtra = randomInt(1, secondMax, rng);
    if (isGrade2Challenge && Math.abs(firstExtra - secondExtra) < 2) {
      const usefulDifferences = Array.from({ length: secondMax }, (_, index) => index + 1)
        .filter(value => Math.abs(firstExtra - value) >= 2);
      secondExtra = pick(usefulDifferences, rng);
    }
    const model = { base, firstExtra, secondExtra };
    return makeQuestion(meta, model,
      variantText(meta, 'An có ' + base + ' thẻ. Bình nhiều hơn An ' + firstExtra + ' thẻ. Chi ít hơn Bình ' + secondExtra + ' thẻ. Cả ba bạn có bao nhiêu thẻ?', 'Mai có ' + base + ' nhãn vở. Lan nhiều hơn Mai ' + firstExtra + ' nhãn, còn Nam ít hơn Lan ' + secondExtra + ' nhãn. Ba bạn có tất cả bao nhiêu nhãn?'),
      data => integer(data.base + (data.base + data.firstExtra) + (data.base + data.firstExtra - data.secondExtra)),
      data => {
        const second = data.base + data.firstExtra;
        const third = second - data.secondExtra;
        return integer([data.base, second, third].reduce((sum, value) => sum + value, 0));
      },
      ['Dùng quan hệ thứ nhất để tìm số của bạn thứ hai.', 'Dùng quan hệ thứ hai để tìm số của bạn thứ ba.', 'Cộng số của cả ba bạn.'],
      { knowledge: ['add', 'subtract', 'compare'], keyPoint: 'Hai từ “nhiều hơn” và “ít hơn” liên hệ ba đại lượng theo thứ tự.', intermediateNumbers: [base + firstExtra, base + firstExtra - secondExtra] }
    );
  };

  BUILDERS.transfer = function (meta, params, rng) {
    const cap = meta.grade === 1 ? 38 : 260;
    const first = randomInt(meta.grade === 1 ? 15 : 60, cap, rng);
    const second = randomInt(meta.grade === 1 ? 8 : 30, first - 2, rng);
    let moved = randomInt(2, Math.min(first - 1, meta.grade === 1 ? 9 : 24), rng);
    if (meta.grade === 2 && params.mode === 'difference-after' && Math.abs((first - second) - moved * 2) < 2) {
      const maxMoved = Math.min(first - 1, 24);
      const usefulMoves = Array.from({ length: maxMoved - 1 }, (_, index) => index + 2)
        .filter(amount => Math.abs((first - second) - amount * 2) >= 2);
      moved = pick(usefulMoves, rng);
    }
    const model = { first, second, moved };
    if (params.mode === 'difference-after') {
      return makeQuestion(meta, model,
        variantText(meta, 'Hộp A có ' + first + ' viên bi, hộp B có ' + second + ' viên. Chuyển ' + moved + ' viên từ A sang B. Sau khi chuyển, hai hộp hơn kém nhau bao nhiêu viên?', 'Kho trên có ' + first + ' sản phẩm, kho dưới có ' + second + ' sản phẩm. Chuyển ' + moved + ' sản phẩm từ kho trên xuống kho dưới. Hiệu số sản phẩm hai kho lúc sau là bao nhiêu?'),
        data => integer(Math.abs((data.first - data.moved) - (data.second + data.moved))),
        data => {
          const boxes = [data.first, data.second];
          for (let index = 0; index < data.moved; index += 1) { boxes[0] -= 1; boxes[1] += 1; }
          return integer(Math.abs(boxes[0] - boxes[1]));
        },
        ['Tìm số lượng mới của từng hộp sau khi chuyển.', 'Lấy số lớn trừ số bé.'],
        { knowledge: ['add', 'subtract', 'compare'], keyPoint: 'Chuyển đồ vật không làm đổi tổng nhưng làm thay đổi cả hai nhóm.' }
      );
    }
    return makeQuestion(meta, model,
      variantText(meta, 'Hộp A có ' + first + ' viên, hộp B có ' + second + ' viên. Chuyển ' + moved + ' viên từ A sang B. Hộp B có bao nhiêu viên?', 'Có ' + first + ' vật ở ngăn trên và ' + second + ' vật ở ngăn dưới. Chuyển ' + moved + ' vật xuống ngăn dưới. Ngăn dưới có bao nhiêu vật?'),
      data => integer(data.second + data.moved),
      data => {
        const receiver = Array.from({ length: data.second }, (_, index) => index);
        for (let index = 0; index < data.moved; index += 1) receiver.push(data.second + index);
        return integer(receiver.length);
      },
      ['Nhóm nhận được thêm số vật đã chuyển tới.', 'Lấy số ban đầu của nhóm nhận cộng số chuyển.'],
      { knowledge: ['add', 'subtract'], keyPoint: 'Chỉ hỏi nhóm nhận nên lấy số của nhóm đó cộng phần chuyển tới.' }
    );
  };

  BUILDERS.twoContainers = function (meta, params, rng) {
    const first = randomInt(12, 32, rng);
    const second = randomInt(8, 26, rng);
    const used = randomInt(3, Math.min(first + second - 1, 15), rng);
    let added = randomInt(2, 9, rng);
    if (meta.grade === 2 && meta.difficulty === 'rat-kho' && added === used) added = added === 9 ? 7 : added + 1;
    const model = { first, second, used, added };
    if (meta.grade === 2 && meta.difficulty === 'rat-kho') {
      const finalTotal = first + second - used + added;
      const challengeModel = { first, second, used, added, finalTotal };
      return makeQuestion(meta, challengeModel,
        variantText(meta, 'Lúc đầu hộp A có ' + first + ' chiếc bút. Sau khi lấy dùng ' + used + ' chiếc từ cả hai hộp rồi bổ sung ' + added + ' chiếc, hai hộp có tất cả ' + finalTotal + ' chiếc. Lúc đầu hộp B có bao nhiêu chiếc bút?', 'Hai hộp bút thay đổi như sau: lấy ra tổng cộng ' + used + ' chiếc rồi thêm vào ' + added + ' chiếc, cuối cùng có ' + finalTotal + ' chiếc. Biết ban đầu hộp thứ nhất có ' + first + ' chiếc. Hộp thứ hai ban đầu có bao nhiêu chiếc?'),
        data => integer(data.finalTotal - data.added + data.used - data.first),
        data => bruteForceInteger(0, POLICIES[2].maxAnswer, candidate => data.first + candidate - data.used + data.added === data.finalTotal),
        ['Bớt số bút được bổ sung khỏi tổng cuối.', 'Cộng lại số bút đã lấy dùng để khôi phục tổng ban đầu của hai hộp.', 'Lấy tổng ban đầu trừ số bút ở hộp thứ nhất rồi thay lại toàn bộ thay đổi để kiểm tra.'],
        { knowledge: ['add', 'subtract', 'logic'], keyPoint: 'Bài hỏi một phần ban đầu nên cần khôi phục tổng ban đầu trước.', unit: 'chiếc bút' }
      );
    }
    return makeQuestion(meta, model,
      variantText(meta, 'Hai hộp có ' + first + ' và ' + second + ' chiếc bút. Dùng ' + used + ' chiếc rồi mua thêm ' + added + ' chiếc. Hiện có bao nhiêu chiếc bút?', 'Tủ thứ nhất có ' + first + ' quyển, tủ thứ hai có ' + second + ' quyển. Cho mượn ' + used + ' quyển rồi nhận lại thêm ' + added + ' quyển. Hai tủ hiện có bao nhiêu quyển?'),
      data => integer(data.first + data.second - data.used + data.added),
      data => integer([data.first, data.second, data.added].reduce((sum, value) => sum + value, 0) - data.used),
      ['Gộp số lượng ban đầu ở hai nơi.', 'Trừ phần đã dùng rồi cộng phần được bổ sung.', 'Thay lại từng thay đổi theo đúng thứ tự để kiểm tra kết quả.'],
      { knowledge: ['add', 'subtract'], keyPoint: 'Phải gộp hai hộp trước khi xét các thay đổi.' }
    );
  };

  BUILDERS.overlapCount = function (meta, params, rng) {
    const firstGroup = randomInt(18, 34, rng);
    const secondGroup = randomInt(15, 30, rng);
    const both = randomInt(4, Math.min(12, firstGroup - 1, secondGroup - 1), rng);
    const total = firstGroup + secondGroup - both;
    const model = { firstGroup, secondGroup, both, total };
    return makeQuestion(meta, model,
      variantText(meta, 'Lớp 2A có ' + firstGroup + ' bạn thích cờ vua, ' + secondGroup + ' bạn thích xếp hình; trong đó có ' + both + ' bạn thích cả hai. Có bao nhiêu bạn thích ít nhất một trong hai hoạt động?', 'Trong câu lạc bộ, có ' + firstGroup + ' bạn chọn trò ghép hình và ' + secondGroup + ' bạn chọn trò giải đố. Có ' + both + ' bạn được tính ở cả hai nhóm. Hai nhóm có tất cả bao nhiêu bạn khác nhau?'),
      data => integer(data.firstGroup + data.secondGroup - data.both),
      data => bruteForceInteger(0, 100, candidate => candidate + data.both === data.firstGroup + data.secondGroup),
      ['Cộng số bạn của hai nhóm như khi chưa xét phần trùng.', 'Nhận ra các bạn thuộc cả hai nhóm đã bị tính hai lần.', 'Bớt một lần số bạn bị trùng rồi kiểm tra lại từng nhóm.'],
      { knowledge: ['add', 'subtract', 'logic'], keyPoint: 'Người thuộc cả hai nhóm chỉ được tính một lần trong tổng số người khác nhau.', unit: 'bạn' }
    );
  };

  BUILDERS.inclusiveCount = function (meta, params, rng) {
    const firstNumber = randomInt(12, 70, rng);
    const count = randomInt(14, 38, rng);
    const lastNumber = firstNumber + count - 1;
    const model = { firstNumber, lastNumber, count };
    return makeQuestion(meta, model,
      variantText(meta, 'Một dãy ghế được đánh số liên tiếp từ ' + firstNumber + ' đến ' + lastNumber + '. Dãy đó có bao nhiêu ghế?', 'Các ngăn tủ mang số liên tiếp, bắt đầu từ số ' + firstNumber + ' và kết thúc ở số ' + lastNumber + '. Có tất cả bao nhiêu ngăn tủ?'),
      data => integer(data.lastNumber - data.firstNumber + 1),
      data => {
        let counted = 0;
        for (let number = data.firstNumber; number <= data.lastNumber; number += 1) counted += 1;
        return integer(counted);
      },
      ['Lấy số cuối trừ số đầu để tìm số khoảng giữa hai đầu.', 'Nhận ra số đầu cũng là một vị trí cần được tính.', 'Cộng thêm 1 rồi thử liệt kê một đoạn ngắn để kiểm tra.'],
      { knowledge: ['add', 'subtract', 'logic'], keyPoint: 'Đếm cả hai đầu thì số lượng luôn nhiều hơn số khoảng đúng một đơn vị.', unit: meta.variant ? 'ngăn tủ' : 'ghế' }
    );
  };

  BUILDERS.orderLogic = function (meta, params, rng) {
    if (params.mode === 'five-seats') {
      const totalPeople = randomInt(5, 9, rng);
      const target = randomInt(2, totalPeople - 1, rng);
      const left = target - 1;
      const right = totalPeople - target;
      const person = pick(['Mai', 'An', 'Lan', 'Minh', 'Nam'], rng);
      const model = { target, left, right, totalPeople, person };
      return makeQuestion(meta, model,
        variantText(meta, 'Có ' + totalPeople + ' bạn đứng thành một hàng. Trước ' + person + ' có ' + left + ' bạn và sau ' + person + ' có ' + right + ' bạn. ' + person + ' đứng thứ mấy từ trái sang?', 'Trong hàng có ' + totalPeople + ' bạn. Có ' + left + ' bạn đứng bên trái ' + person + ' và ' + right + ' bạn đứng bên phải ' + person + '. ' + person + ' ở vị trí thứ mấy từ trái sang?'),
        data => integer(data.left + 1),
        data => bruteForceInteger(1, data.totalPeople, position => position - 1 === data.left && data.totalPeople - position === data.right),
        ['Số thứ tự bằng số người đứng trước cộng 1.', 'Kiểm tra số người phía sau để chắc chắn vị trí là duy nhất.'],
        { knowledge: ['position', 'logic', 'add'], keyPoint: 'Người đứng đầu hàng mang số thứ tự 1.' }
      );
    }
    const positions = shuffle([1, 2, 3], rng);
    const model = { an: positions[0], binh: positions[1], chi: positions[2] };
    const clues = [];
    const namesByPosition = [];
    namesByPosition[model.an] = 'An'; namesByPosition[model.binh] = 'Bình'; namesByPosition[model.chi] = 'Chi';
    clues.push(namesByPosition[1] + ' không đứng cuối.');
    clues.push(namesByPosition[3] + ' đứng sau ' + namesByPosition[2] + '.');
    clues.push(namesByPosition[2] + ' đứng giữa hai bạn còn lại.');
    model.constraints = [
      { type: 'not-position', person: namesByPosition[1], position: 3 },
      { type: 'after', person: namesByPosition[3], other: namesByPosition[2] },
      { type: 'position', person: namesByPosition[2], position: 2 }
    ];
    const ask = pick([namesByPosition[1], namesByPosition[3]], rng);
    const answer = ask === 'An' ? model.an : ask === 'Bình' ? model.binh : model.chi;
    model.ask = ask;
    return makeQuestion(meta, model,
      variantText(meta, clues.join(' ') + ' Hỏi ' + ask + ' đứng thứ mấy?', 'Ba bạn An, Bình, Chi xếp một hàng. ' + clues.slice().reverse().join(' ') + ' Vị trí của ' + ask + ' là thứ mấy?'),
      data => integer(data.ask === 'An' ? data.an : data.ask === 'Bình' ? data.binh : data.chi),
      data => {
        const all = [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]];
        const people = ['An', 'Bình', 'Chi'];
        const matches = all.filter(candidate => data.constraints.every(constraint => {
          const positionOf = person => candidate[people.indexOf(person)];
          if (constraint.type === 'not-position') return positionOf(constraint.person) !== constraint.position;
          if (constraint.type === 'position') return positionOf(constraint.person) === constraint.position;
          if (constraint.type === 'after') return positionOf(constraint.person) > positionOf(constraint.other);
          return false;
        }));
        if (matches.length !== 1) return { kind: 'invalid' };
        const match = matches[0];
        return integer(match[people.indexOf(data.ask)]);
      },
      ['Dùng điều kiện “đứng giữa” để xác định vị trí 2.', 'Liệt kê hai cách có thể cho hai vị trí còn lại.', 'Dùng đồng thời điều kiện “không đứng cuối” và “đứng sau” để loại cách sai.'],
      { knowledge: ['position', 'logic'], keyPoint: 'Xét đồng thời tất cả điều kiện; không kết luận từ riêng một câu.' }
    );
  };

  BUILDERS.sequence = function (meta, params, rng) {
    const start = randomInt(meta.grade === 1 ? 2 : 12, meta.grade === 1 ? 20 : 120, rng);
    const firstStep = randomInt(2, meta.grade === 1 ? 7 : 18, rng);
    if (params.mode === 'alternating') {
      const secondStep = randomInt(1, Math.max(1, firstStep - 1), rng);
      const values = [start, start + firstStep, start + firstStep - secondStep, start + firstStep * 2 - secondStep];
      const model = { start, firstStep, secondStep, values };
      return makeQuestion(meta, model,
        variantText(meta, 'Tìm số tiếp theo: ' + values.join(', ') + ', …', 'Dãy số lần lượt thay đổi theo hai quy tắc: ' + values.join(' → ') + ' → … Số tiếp theo là bao nhiêu?'),
        data => integer(data.values[3] - data.secondStep),
        data => integer(data.start + data.firstStep - data.secondStep + data.firstStep - data.secondStep),
        ['Nhận ra dãy luân phiên cộng ' + firstStep + ' rồi trừ ' + secondStep + '.', 'Sau số cuối cùng là lượt trừ ' + secondStep + '.'],
        { knowledge: ['sequence', 'add', 'subtract'], keyPoint: 'Không dùng một khoảng cách cố định; hai thao tác được lặp luân phiên.' }
      );
    }
    const values = [start, start + firstStep, start + firstStep * 2, start + firstStep * 3];
    const model = { start, step: firstStep, values };
    return makeQuestion(meta, model,
      variantText(meta, 'Điền số tiếp theo: ' + values.join(', ') + ', …', 'Mỗi số trong dãy lớn hơn số đứng trước ' + firstStep + ' đơn vị. Sau ' + values[3] + ' là số nào?'),
      data => integer(data.values[data.values.length - 1] + data.step),
      data => integer(data.start + data.step * data.values.length),
      ['Tìm khoảng cách giữa hai số liên tiếp.', 'Cộng khoảng cách đó vào số cuối.'],
      { knowledge: ['sequence', 'add'], keyPoint: 'Kiểm tra quy luật ở ít nhất hai khoảng liên tiếp.' }
    );
  };

  BUILDERS.balance = function (meta, params, rng) {
    const objectWeight = randomInt(2, meta.grade === 1 ? 9 : meta.grade === 2 ? 9 : 15, rng);
    const extra = randomInt(1, meta.grade === 1 ? 8 : 12, rng);
    if (meta.grade === 2 && params.mode === 'two') {
      const leftCopies = 3;
      const rightCopies = 1;
      const leftExtra = extra;
      const rightExtra = leftExtra + (leftCopies - rightCopies) * objectWeight;
      const model = { objectWeight, leftCopies, rightCopies, leftExtra, rightExtra };
      const svgGivens = { type: 'balance-two-sides', leftCopies, rightCopies, leftExtra, rightExtra };
      return makeQuestion(meta, model,
        variantText(meta, 'Cân thăng bằng như hình. Các túi giống hệt nhau. Mỗi túi nặng bao nhiêu ki-lô-gam?', 'Hai đĩa cân đang thăng bằng. Hãy tìm khối lượng của một túi, biết các túi đều nặng như nhau.'),
        data => integer((data.rightExtra - data.leftExtra) / (data.leftCopies - data.rightCopies)),
        data => bruteForceInteger(0, POLICIES[2].maxAnswer, candidate => data.leftCopies * candidate + data.leftExtra === data.rightCopies * candidate + data.rightExtra),
        ['Bớt một túi giống nhau ở mỗi đĩa cân.', 'Lấy khối lượng quả cân bên phải trừ khối lượng quả cân bên trái.', 'Phần chênh lệch bằng khối lượng của hai túi; chia đều cho 2 rồi thay lại cả hai đĩa để kiểm tra.'],
        { knowledge: ['add', 'subtract', 'divide-exact', 'logic'], keyPoint: 'Có thể bỏ cùng một vật giống nhau ở hai vế mà cân vẫn thăng bằng.', unit: 'kg', svgGivens, divisions: [{ dividend: rightExtra - leftExtra, divisor: leftCopies - rightCopies, quotient: objectWeight, remainder: 0 }] }
      );
    }
    const copies = meta.grade === 2 ? (params.mode === 'two' ? 5 : 2) : params.mode === 'two' ? 3 : 2;
    const total = objectWeight * copies + extra;
    const model = { objectWeight, extra, copies, total };
    const svgGivens = { type: 'balance', copies, extra, total };
    return makeQuestion(meta, model,
      variantText(meta, 'Một cân thăng bằng như hình. Mỗi túi nhỏ có cùng khối lượng. Một túi nhỏ nặng bao nhiêu ki-lô-gam?', 'Quan sát cân thăng bằng. Các túi nhỏ giống hệt nhau. Tìm khối lượng của một túi.'),
      data => integer((data.total - data.extra) / data.copies),
      data => bruteForceInteger(0, POLICIES[meta.grade].maxAnswer, candidate => Array.from({ length: data.copies }, () => candidate).reduce((sum, value) => sum + value, data.extra) === data.total),
      meta.grade === 1
        ? ['Bớt khối lượng của hộp nhỏ.', 'Thử một số bằng nhau cho từng túi và cộng lại để khớp phần còn lại.', 'Cộng lại khối lượng các túi với hộp nhỏ để kiểm tra đúng tổng trên cân.']
        : ['Bớt khối lượng của hộp nhỏ.', 'Chia phần còn lại đều cho các túi giống nhau.', 'Nhân ngược số túi rồi cộng hộp nhỏ để kiểm tra cân thăng bằng.'],
      { knowledge: meta.grade === 1 ? ['add', 'subtract', 'logic'] : ['add', 'subtract', meta.grade === 2 ? 'divide-exact' : 'divide-exact', 'logic'], keyPoint: 'Các vật giống nhau có cùng khối lượng.', unit: 'kg', svgGivens }
    );
  };

  BUILDERS.shapeCount = function (meta, params, rng) {
    let triangleCount = randomInt(3, meta.grade === 1 ? 6 : 8, rng);
    let squareCount = randomInt(2, meta.grade === 1 ? 5 : 7, rng);
    let circleCount = randomInt(1, 4, rng);
    if (params.mode === 'composite') {
      circleCount = randomInt(1, 3, rng);
      triangleCount = randomInt(circleCount * 2 + 1, circleCount * 2 + 5, rng);
      squareCount = randomInt(3, 7, rng);
    }
    const ask = params.mode === 'composite' ? 'hiệu-không-tròn-và-tròn' : pick(['tam-giác', 'hình-vuông'], rng);
    const model = { triangleCount, squareCount, circleCount, ask };
    const svgGivens = { type: 'shape-count', triangleCount, squareCount, circleCount };
    return makeQuestion(meta, model,
      ask === 'hiệu-không-tròn-và-tròn'
        ? 'Cứ 1 hình tròn ghép với 2 hình tam giác thành một nhóm. Sau khi ghép hết các hình tròn, tổng số hình tam giác còn thừa và số hình vuông là bao nhiêu?'
        : 'Trong hình có bao nhiêu ' + (ask === 'tam-giác' ? 'hình tam giác' : 'hình vuông') + '?',
      data => integer(data.ask === 'tam-giác' ? data.triangleCount : data.ask === 'hình-vuông' ? data.squareCount : data.triangleCount - data.circleCount * 2 + data.squareCount),
      data => {
        const shapes = [];
        for (let index = 0; index < data.triangleCount; index += 1) shapes.push('tam-giác');
        for (let index = 0; index < data.squareCount; index += 1) shapes.push('hình-vuông');
        for (let index = 0; index < data.circleCount; index += 1) shapes.push('hình-tròn');
        if (data.ask === 'hiệu-không-tròn-và-tròn') {
          const triangles = shapes.filter(shape => shape === 'tam-giác').length;
          const circles = shapes.filter(shape => shape === 'hình-tròn').length;
          const squares = shapes.filter(shape => shape === 'hình-vuông').length;
          return integer(triangles - circles * 2 + squares);
        }
        return integer(shapes.filter(shape => shape === data.ask).length);
      },
      ['Xác định riêng từng loại hình được hỏi.', 'Đếm lần lượt từ trái sang phải để không bỏ sót hoặc đếm hai lần.', 'Gộp hoặc so sánh các nhóm hình đúng theo yêu cầu rồi kiểm tra lại.'],
      { knowledge: params.mode === 'composite' ? ['shape-basic', 'multiply-basic', 'add', 'subtract', 'logic'] : ['shape-basic', 'logic'], keyPoint: 'Chỉ đếm những hình thỏa mãn đúng điều kiện của đề.', svgGivens }
    );
  };

  BUILDERS.pathLength = function (meta, params, rng) {
    const segments = Array.from({ length: params.mode === 'mixed-units' ? 4 : 3 }, () => randomInt(2, meta.grade === 1 ? 9 : 18, rng));
    const model = { segments };
    const svgGivens = { type: 'path', segments };
    return makeQuestion(meta, model,
      variantText(meta, 'Đường gấp khúc trong hình dài bao nhiêu xăng-ti-mét?', 'Một chú kiến đi hết đường gấp khúc trong hình. Chú kiến đã đi bao nhiêu xăng-ti-mét?'),
      data => integer(data.segments.reduce((sum, value) => sum + value, 0)),
      data => {
        let length = 0;
        data.segments.forEach(segment => { for (let unit = 0; unit < segment; unit += 1) length += 1; });
        return integer(length);
      },
      ['Đọc độ dài từng đoạn.', 'Cộng tất cả các đoạn của đường gấp khúc.'],
      { knowledge: [meta.grade === 1 ? 'length-basic' : 'length', 'add'], keyPoint: 'Độ dài đường gấp khúc bằng tổng độ dài các đoạn.', unit: 'cm', svgGivens }
    );
  };

  BUILDERS.missingPath = function (meta, params, rng) {
    const knownSegments = [randomInt(8, 24, rng), randomInt(7, 22, rng), randomInt(9, 25, rng)];
    const missing = randomInt(8, 28, rng);
    const total = knownSegments.reduce((sum, value) => sum + value, missing);
    const model = { knownSegments, missing, total };
    const svgGivens = { type: 'missing-path', segments: knownSegments.concat(null), total };
    return makeQuestion(meta, model,
      variantText(meta, 'Đường gấp khúc trong hình dài tất cả ' + total + ' cm. Đoạn chưa ghi số dài bao nhiêu xăng-ti-mét?', 'Một chú kiến đi hết đường gấp khúc dài ' + total + ' cm. Ba đoạn đã biết như hình; đoạn có dấu hỏi dài bao nhiêu?'),
      data => integer(data.total - data.knownSegments.reduce((sum, value) => sum + value, 0)),
      data => bruteForceInteger(0, data.total, candidate => data.knownSegments.reduce((sum, value) => sum + value, candidate) === data.total),
      ['Cộng độ dài của ba đoạn đã biết.', 'So sánh tổng vừa tìm với độ dài cả đường gấp khúc.', 'Lấy độ dài toàn đường bớt tổng các đoạn đã biết rồi cộng lại để kiểm tra.'],
      { knowledge: ['length', 'add', 'subtract', 'logic'], keyPoint: 'Đoạn còn thiếu là phần chênh lệch giữa độ dài cả đường và tổng các đoạn đã biết.', unit: 'cm', svgGivens }
    );
  };

  BUILDERS.numberPyramid = function (meta, params, rng) {
    const left = randomInt(3, 15, rng);
    const middle = randomInt(3, 12, rng);
    const right = randomInt(3, 15, rng);
    const top = left + middle * 2 + right;
    const model = { left, middle, right, top };
    const svgGivens = { type: 'number-pyramid', left, right, top };
    return makeQuestion(meta, model,
      variantText(meta, 'Trong tháp số, mỗi ô phía trên bằng tổng của hai ô ngay dưới. Tìm số ở ô giữa của hàng dưới cùng.', 'Quan sát tháp số: hai ô liền dưới cộng lại thành ô ngay trên. Số nào phải điền vào ô vuông ở đáy?'),
      data => integer((data.top - data.left - data.right) / 2),
      data => bruteForceInteger(0, 50, candidate => (data.left + candidate) + (candidate + data.right) === data.top),
      ['Nhận ra số ở giữa đáy được góp vào cả hai ô của hàng thứ hai.', 'Bớt hai số ngoài cùng khỏi số trên đỉnh.', 'Phần còn lại gồm hai lần số cần tìm; chia đều cho 2 rồi cộng ngược từ đáy lên để kiểm tra.'],
      { knowledge: ['add', 'subtract', 'divide-exact', 'logic', 'shape-basic'], keyPoint: 'Ô giữa ở đáy được dùng hai lần khi tạo số trên đỉnh.', svgGivens, divisions: [{ dividend: top - left - right, divisor: 2, quotient: middle, remainder: 0 }] }
    );
  };

  BUILDERS.targetPair = function (meta, params, rng) {
    const target = pick([20, 30, 40, 50, 60, 70, 80], rng);
    const known = randomInt(4, target - 6, rng);
    const removed = randomInt(1, Math.min(known - 1, 8), rng);
    const model = { target, known, removed };
    return makeQuestion(meta, model,
      variantText(meta, 'Điền số vào ô: ' + known + ' + □ − ' + removed + ' = ' + target + '.', 'Một số được cộng với ' + known + ' rồi bớt ' + removed + ' thì bằng ' + target + '. Số đó là bao nhiêu?'),
      data => integer(data.target - data.known + data.removed),
      data => bruteForceInteger(0, 100, value => data.known + value - data.removed === data.target),
      ['Cộng lại số đã bớt.', 'Trừ số hạng đã biết để tìm ô trống.'],
      { knowledge: ['add', 'subtract'], keyPoint: 'Làm ngược từ kết quả cuối cùng.' }
    );
  };

  BUILDERS.expressionCompare = function (meta, params, rng) {
    const a = randomInt(12, 35, rng);
    const b = randomInt(5, 15, rng);
    const c = randomInt(1, b - 1, rng);
    const d = randomInt(2, 10, rng);
    const left = a + b - c;
    const right = a - d;
    const model = { a, b, c, d, left, right };
    return makeQuestion(meta, model,
      variantText(meta, 'Biểu thức ' + a + ' + ' + b + ' − ' + c + ' lớn hơn ' + a + ' − ' + d + ' bao nhiêu đơn vị?', 'Tính hiệu giữa hai giá trị: (' + a + ' + ' + b + ' − ' + c + ') và (' + a + ' − ' + d + ').'),
      data => integer(data.left - data.right),
      data => integer((data.a - data.a) + data.b - data.c + data.d),
      ['Tính giá trị của từng biểu thức.', 'Lấy giá trị lớn trừ giá trị bé.'],
      { knowledge: ['add', 'subtract', 'compare'], keyPoint: 'Không so sánh từng số; phải tính toàn bộ hai biểu thức.' }
    );
  };

  BUILDERS.hiddenNumber = function (meta, params, rng) {
    const grade = meta.grade;
    const x = randomInt(grade === 1 ? 4 : 8, grade === 1 ? 30 : grade === 2 ? 70 : 90, rng);
    if (grade <= 2) {
      const addValue = randomInt(5, grade === 1 ? 18 : 50, rng);
      const maxRemove = Math.min(x + addValue - 1, grade === 1 ? 12 : 30);
      let remove = randomInt(2, maxRemove, rng);
      if (grade === 2 && Math.abs(addValue - remove) < 5) {
        const usefulRemovals = Array.from({ length: maxRemove - 1 }, (_, index) => index + 2)
          .filter(amount => Math.abs(addValue - amount) >= 5);
        remove = pick(usefulRemovals, rng);
      }
      const result = x + addValue - remove;
      const model = { x, addValue, remove, result };
      return makeQuestion(meta, model, '□ + ' + addValue + ' − ' + remove + ' = ' + result + '. Số thích hợp điền vào ô là bao nhiêu?',
        data => integer(data.result + data.remove - data.addValue),
        data => bruteForceInteger(0, POLICIES[grade].maxAnswer, value => value + data.addValue - data.remove === data.result),
        ['Cộng lại số đã trừ.', 'Trừ số đã cộng để tìm số ban đầu.'],
        { knowledge: ['add', 'subtract'], keyPoint: 'Thực hiện các phép tính ngược theo thứ tự từ phải sang trái.' }
      );
    }
    const factor = randomInt(2, grade === 3 ? 9 : 12, rng);
    const addValue = randomInt(5, 40, rng);
    const remove = params.steps >= 4 ? randomInt(2, 20, rng) : 0;
    const result = x * factor + addValue - remove;
    const model = { x, factor, addValue, remove, result };
    const prompt = '(□ × ' + factor + ' + ' + addValue + ')' + (remove ? ' − ' + remove : '') + ' = ' + result + '. Tìm số trong ô.';
    return makeQuestion(meta, model, prompt,
      data => integer(((data.result + data.remove) - data.addValue) / data.factor),
      data => bruteForceInteger(0, 1000, value => value * data.factor + data.addValue - data.remove === data.result),
      ['Làm ngược phép trừ (nếu có), rồi làm ngược phép cộng.', 'Cuối cùng chia cho thừa số đã biết.'],
      { knowledge: ['multiply', 'divide-exact', 'add', 'subtract', 'unknown'], keyPoint: 'Làm ngược đúng thứ tự từ phép tính ngoài cùng vào trong.', divisions: [{ dividend: x * factor, divisor: factor, quotient: x, remainder: 0 }] }
    );
  };

  BUILDERS.gridRectangles = function (meta, params, rng) {
    const rows = randomInt(params.minRows || 1, params.maxRows || 2, rng);
    const cols = randomInt(2, params.maxCols || 4, rng);
    const countMode = pick(['all', 'non-square', 'one-row'], rng);
    const model = { rows, cols, countMode };
    const allCount = (rows * (rows + 1) * cols * (cols + 1)) / 4;
    let selectedCount = allCount;
    if (countMode === 'one-row') selectedCount = rows * cols * (cols + 1) / 2;
    if (countMode === 'non-square') {
      let squares = 0;
      for (let size = 1; size <= Math.min(rows, cols); size += 1) squares += (rows - size + 1) * (cols - size + 1);
      selectedCount = allCount - squares;
    }
    if ((params.minAnswer && selectedCount < params.minAnswer) || (params.maxAnswer && selectedCount > params.maxAnswer)) return null;
    const svgGivens = { type: 'grid', rows, cols };
    return makeQuestion(meta, model,
      countMode === 'non-square'
        ? variantText(meta, 'Không tính các hình vuông, trong lưới có bao nhiêu hình chữ nhật?', 'Đếm các hình chữ nhật không phải hình vuông trong lưới.')
        : countMode === 'one-row'
          ? variantText(meta, 'Có bao nhiêu hình chữ nhật chỉ cao đúng một ô trong lưới?', 'Chỉ đếm các hình chữ nhật nằm gọn trong một hàng ô. Có bao nhiêu hình?')
          : variantText(meta, 'Trong lưới có tất cả bao nhiêu hình chữ nhật? Hãy tính cả những hình ghép từ nhiều ô nhỏ.', 'Đếm tất cả hình chữ nhật tạo bởi các đường kẻ của lưới, gồm cả hình nhỏ và hình lớn.'),
      data => {
        const all = (data.rows * (data.rows + 1) * data.cols * (data.cols + 1)) / 4;
        if (data.countMode === 'one-row') return integer(data.rows * data.cols * (data.cols + 1) / 2);
        if (data.countMode === 'non-square') {
          let squares = 0;
          for (let size = 1; size <= Math.min(data.rows, data.cols); size += 1) squares += (data.rows - size + 1) * (data.cols - size + 1);
          return integer(all - squares);
        }
        return integer(all);
      },
      data => {
        let count = 0;
        for (let top = 0; top < data.rows; top += 1) for (let bottom = top + 1; bottom <= data.rows; bottom += 1) {
          for (let left = 0; left < data.cols; left += 1) for (let right = left + 1; right <= data.cols; right += 1) {
            const height = bottom - top, width = right - left;
            if (data.countMode === 'one-row' && height !== 1) continue;
            if (data.countMode === 'non-square' && height === width) continue;
            count += 1;
          }
        }
        return integer(count);
      },
      ['Đọc kỹ điều kiện loại hình cần đếm.', 'Liệt kê lần lượt theo chiều rộng và chiều cao để không bỏ sót.', 'Kiểm tra lại từng nhóm hình theo kích thước.'],
      { knowledge: ['shape-basic', 'logic'], keyPoint: 'Không chỉ đếm các ô nhỏ; cần tính cả hình ghép.', svgGivens }
    );
  };

  BUILDERS.shapePattern = function (meta, params, rng) {
    const block = pick([
      ['tròn', 'vuông', 'vuông'],
      ['tam-giác', 'tròn', 'vuông'],
      ['vuông', 'tròn', 'tam-giác', 'tròn'],
      ['tam-giác', 'vuông', 'tròn', 'vuông'],
      ['tròn', 'tam-giác', 'vuông', 'tam-giác']
    ], rng);
    const position = randomInt(7, meta.grade === 1 ? 35 : 60, rng);
    const model = { block, position };
    const svgGivens = { type: 'shape-pattern', block, shown: 8 };
    return makeQuestion(meta, model,
      variantText(meta, 'Quan sát mẫu hình đang lặp. Hình ở vị trí thứ ' + position + ' là hình gì? Nhập 1 cho hình tròn, 2 cho hình vuông, 3 cho hình tam giác.', 'Dãy trong tranh lặp lại theo cùng một cụm. Ở vị trí ' + position + ' sẽ là hình nào? Quy ước: tròn = 1, vuông = 2, tam giác = 3.'),
      data => integer({ 'tròn': 1, 'vuông': 2, 'tam-giác': 3 }[data.block[(data.position - 1) % data.block.length]]),
      data => {
        let current = '';
        for (let index = 1; index <= data.position; index += 1) current = data.block[(index - 1) % data.block.length];
        return integer({ 'tròn': 1, 'vuông': 2, 'tam-giác': 3 }[current]);
      },
      ['Xác định chính xác cụm hình được lặp lại.', 'Tách vị trí cần tìm thành các cụm đầy đủ và phần còn lại.', 'Đối chiếu phần còn lại với vị trí trong một cụm rồi kiểm tra bằng cách đếm tiếp mẫu.'],
      { knowledge: ['sequence', 'logic'], keyPoint: 'Độ dài của cụm lặp có thể là ba hoặc bốn hình.', svgGivens, inputHint: 'Nhập 1, 2 hoặc 3' }
    );
  };

  BUILDERS.digitPuzzle = function (meta, params, rng) {
    if (params.mode === 'two-digit' || params.mode === 'reverse-number') {
      const tens = randomInt(2, 9, rng);
      const units = randomInt(0, tens - 1, rng);
      const number = tens * 10 + units;
      const sum = tens + units;
      const digitGap = tens - units;
      const model = { tens, units, number, sum, digitGap };
      return makeQuestion(meta, model,
        variantText(meta, 'Một số có hai chữ số. Tổng hai chữ số là ' + sum + '. Chữ số hàng chục lớn hơn chữ số hàng đơn vị ' + digitGap + '. Tìm số đó.', 'Tìm số có hai chữ số, biết tổng hai chữ số bằng ' + sum + ' và chữ số hàng đơn vị ít hơn chữ số hàng chục ' + digitGap + ' đơn vị.'),
        data => {
          for (let first = 1; first <= 9; first += 1) {
            for (let last = 0; last <= 9; last += 1) {
              if (first + last === data.sum && first - last === data.digitGap) return integer(first * 10 + last);
            }
          }
          return { kind: 'invalid' };
        },
        data => bruteForceInteger(10, 99, value => {
          const first = Math.floor(value / 10), second = value % 10;
          return first + second === data.sum && first - second === data.digitGap;
        }),
        ['Liệt kê các cặp chữ số có tổng bằng ' + sum + '.', 'Giữ lại cặp có chữ số hàng chục hơn chữ số hàng đơn vị ' + digitGap + '.', 'Ghép hai chữ số theo đúng hàng rồi kiểm tra lại cả hai điều kiện.'],
        { knowledge: ['add', 'subtract', 'logic'], keyPoint: 'Có thể thử có hệ thống các cặp chữ số; không cần dùng phép nhân hoặc phép chia.' }
      );
    }
    if (meta.grade === 3) {
      const units = randomInt(0, 4, rng);
      const tensGap = randomInt(1, 3, rng);
      const tens = units + tensGap;
      const hundredsGap = randomInt(1, Math.min(3, 9 - tens), rng);
      const hundreds = tens + hundredsGap;
      const number = hundreds * 100 + tens * 10 + units;
      const sum = hundreds + tens + units;
      const model = { hundreds, tens, units, number, sum, hundredsGap, tensGap };
      return makeQuestion(meta, model,
        variantText(meta, 'Tìm số có ba chữ số biết tổng ba chữ số là ' + sum + '. Chữ số hàng trăm hơn hàng chục ' + hundredsGap + '; chữ số hàng chục hơn hàng đơn vị ' + tensGap + '.', 'Một số có ba chữ số. Hàng trăm lớn hơn hàng chục ' + hundredsGap + ' đơn vị, hàng chục lớn hơn hàng đơn vị ' + tensGap + ' đơn vị và tổng ba chữ số bằng ' + sum + '. Tìm số đó.'),
        data => {
          for (let first = 1; first <= 9; first += 1) {
            for (let middle = 0; middle <= 9; middle += 1) {
              for (let last = 0; last <= 9; last += 1) {
                if (first + middle + last === data.sum && first - middle === data.hundredsGap && middle - last === data.tensGap) return integer(first * 100 + middle * 10 + last);
              }
            }
          }
          return { kind: 'invalid' };
        },
        data => bruteForceInteger(100, 999, value => {
          const first = Math.floor(value / 100), middle = Math.floor(value / 10) % 10, last = value % 10;
          return first + middle + last === data.sum && first - middle === data.hundredsGap && middle - last === data.tensGap;
        }),
        ['Dựa vào hai độ chênh để lập các bộ ba chữ số có thứ tự giảm dần.', 'Chọn bộ ba có tổng đúng bằng ' + sum + '.', 'Ghép số rồi kiểm tra lại cả tổng và hai độ chênh.'],
        { knowledge: ['logic', 'add', 'subtract'], keyPoint: 'Bài toán chỉ dùng cộng, trừ và suy luận chữ số, không dùng trung bình cộng.' }
      );
    }
    const hundreds = randomInt(3, 9, rng);
    const possibleUnits = Array.from({ length: hundreds }, (_, value) => value).filter(value => (hundreds + value) % 2 === 0);
    const units = pick(possibleUnits, rng);
    const tens = (hundreds + units) / 2;
    const number = hundreds * 100 + tens * 10 + units;
    const reversed = units * 100 + tens * 10 + hundreds;
    const sum = hundreds + tens + units;
    const difference = number - reversed;
    const model = { hundreds, tens, units, number, reversed, sum, difference };
    return makeQuestion(meta, model,
      variantText(meta, 'Tìm số có ba chữ số biết chữ số hàng chục là trung bình cộng của chữ số hàng trăm và hàng đơn vị. Tổng ba chữ số là ' + sum + '. Số đó lớn hơn số viết theo thứ tự ngược lại ' + difference + ' đơn vị.', 'Một số có ba chữ số thỏa mãn: chữ số giữa là trung bình cộng của hai chữ số ngoài; tổng các chữ số bằng ' + sum + '; số ban đầu hơn số đảo ngược ' + difference + '. Tìm số ban đầu.'),
      data => {
        const outerSum = data.sum * 2 / 3;
        const outerGap = data.difference / 99;
        const first = (outerSum + outerGap) / 2;
        const last = outerSum - first;
        return integer(first * 100 + ((first + last) / 2) * 10 + last);
      },
      data => bruteForceInteger(100, 999, value => {
        const first = Math.floor(value / 100), middle = Math.floor(value / 10) % 10, last = value % 10;
        const reverse = last * 100 + middle * 10 + first;
        return middle * 2 === first + last && first + middle + last === data.sum && value - reverse === data.difference;
      }),
      ['Dùng tổng ba chữ số và điều kiện chữ số giữa để tìm tổng hai chữ số ngoài.', 'Dùng độ chênh giữa số ban đầu và số đảo ngược để xác định hai chữ số ngoài.', 'Tìm chữ số giữa, ghép số rồi kiểm tra đủ ba điều kiện.'],
      { knowledge: ['logic', 'add', 'subtract', 'divide-exact'], keyPoint: 'Ba điều kiện phải cho cùng một nghiệm duy nhất.' }
    );
  };

  BUILDERS.magicSum = function (meta, params, rng) {
    const cap = meta.grade === 1 ? 18 : 35;
    const first = randomInt(2, cap - 4, rng);
    let second = randomInt(2, cap - 3, rng);
    let third = randomInt(2, cap - 2, rng);
    if (second === first) second += 1;
    if (third === first || third === second) third = Math.min(cap, third + 2);
    if (new Set([first, second, third]).size !== 3) return null;
    const pairAB = first + second;
    const pairBC = second + third;
    const pairAC = first + third;
    const model = { first, second, third, pairAB, pairBC, pairAC };
    if (meta.grade === 1) {
      const chainGivens = { type: 'magic-chain', first, pairAB, pairBC };
      return makeQuestion(meta, model,
        variantText(meta, 'Ô A có số ' + first + '. Biết A + B = ' + pairAB + ' và B + C = ' + pairBC + '. Số trong ô C là bao nhiêu?', 'Đi theo sơ đồ: ô đầu chứa ' + first + ', tổng hai ô đầu là ' + pairAB + ', tổng hai ô cuối là ' + pairBC + '. Hãy tìm số ở ô cuối.'),
        data => integer(data.pairBC - (data.pairAB - data.first)),
        data => bruteForceInteger(0, POLICIES[1].maxAnswer, candidate => data.first + (data.pairBC - candidate) === data.pairAB),
        ['Lấy tổng A + B trừ số ở A để tìm B.', 'Lấy tổng B + C trừ số ở B để tìm C.', 'Cộng ngược lại theo từng cặp để kiểm tra.'],
        { knowledge: ['add', 'subtract', 'logic'], keyPoint: 'Giải lần lượt từ ô đã biết; bài không cần phép chia.', svgGivens: chainGivens }
      );
    }
    const svgGivens = { type: 'magic-pairs', pairAB, pairBC, pairAC };
    return makeQuestion(meta, model,
      variantText(meta, 'Ba ô A, B, C chứa ba số khác nhau. A + B = ' + pairAB + ', B + C = ' + pairBC + ', A + C = ' + pairAC + '. Số trong ô B là bao nhiêu?', 'Trong sơ đồ, tổng của mỗi cặp ô đã được ghi trên đường nối. Hãy tìm số ở ô B.'),
      data => integer((data.pairAB + data.pairBC - data.pairAC) / 2),
      data => bruteForceInteger(0, POLICIES[meta.grade].maxAnswer, value => {
        const possibleA = data.pairAB - value;
        const possibleC = data.pairBC - value;
        return possibleA >= 0 && possibleC >= 0 && possibleA + possibleC === data.pairAC;
      }),
      ['So sánh ba tổng theo cặp, không đoán riêng từng ô.', 'Gộp hai tổng có ô B rồi loại tổng A + C.', 'Tìm giá trị duy nhất của B và thay lại vào cả ba tổng để kiểm tra.'],
      { knowledge: ['add', 'subtract', 'divide-exact', 'logic'], keyPoint: 'Một đáp án đúng phải thỏa mãn đồng thời cả ba tổng theo cặp.', svgGivens, divisions: [{ dividend: pairAB + pairBC - pairAC, divisor: 2, quotient: second, remainder: 0 }] }
    );
  };

  BUILDERS.equalGroups = function (meta, params, rng) {
    const grade = meta.grade;
    const factorChoices = grade === 2 ? [2, 5] : [2, 3, 4, 5, 6, 7, 8, 9];
    const groups = pick(factorChoices, rng);
    const each = randomInt(grade === 2 ? 3 : 6, grade === 2 ? 12 : 40, rng);
    const removed = randomInt(2, Math.max(2, Math.min(groups * each - 1, grade === 2 ? 14 : 35)), rng);
    let added = randomInt(2, grade === 2 ? 12 : 30, rng);
    if (['three-stage', 'inverse-total'].includes(params.mode) && Math.abs(added - removed) < 3) {
      added = removed + 3 <= (grade === 2 ? 12 : 30) ? removed + 3 : Math.max(2, removed - 3);
    }
    const total = groups * each;
    const model = { groups, each, removed, added, total };
    if (params.mode === 'exact-share') {
      const people = pick(factorChoices, rng);
      const perPerson = randomInt(8, 30, rng);
      const finalTotal = people * perPerson;
      const changeUnits = randomInt(2, 6, rng);
      const adjustment = people * changeUnits;
      const direction = meta.variant ? 'remove' : 'add';
      const startTotal = direction === 'add' ? finalTotal - adjustment : finalTotal + adjustment;
      if (startTotal <= 0) return null;
      const shareModel = { people, perPerson, finalTotal, startTotal, adjustment, direction };
      return makeQuestion(meta, shareModel,
        direction === 'add'
          ? 'Có ' + startTotal + ' tấm thẻ. Cô giáo thêm ' + adjustment + ' tấm rồi chia đều toàn bộ cho ' + people + ' bạn. Mỗi bạn nhận được bao nhiêu tấm?'
          : 'Có ' + startTotal + ' tấm thẻ. Sau khi dùng ' + adjustment + ' tấm để trang trí, số còn lại được chia đều cho ' + people + ' bạn. Mỗi bạn nhận được bao nhiêu tấm?',
        data => integer((data.startTotal + (data.direction === 'add' ? data.adjustment : -data.adjustment)) / data.people),
        data => {
          const items = Array.from({ length: data.startTotal }, (_, index) => index);
          if (data.direction === 'add') {
            for (let index = 0; index < data.adjustment; index += 1) items.push(data.startTotal + index);
          } else {
            items.splice(0, data.adjustment);
          }
          const bins = Array.from({ length: data.people }, () => 0);
          items.forEach((item, index) => { bins[index % data.people] += 1; });
          return bins.every(value => value === bins[0]) ? integer(bins[0]) : { kind: 'invalid' };
        },
        [direction === 'add' ? 'Cộng số thẻ được thêm để tìm tổng đem chia.' : 'Trừ số thẻ đã dùng để tìm tổng còn lại.', 'Chia số thẻ sau thay đổi thành ' + people + ' phần bằng nhau.', 'Nhân ngược số thẻ mỗi bạn với số bạn để kiểm tra tổng sau thay đổi.'],
        { knowledge: ['add', 'subtract', 'divide-exact', 'multiply'], keyPoint: 'Phải xử lý sự thay đổi trước, sau đó mới chia đều.', divisions: [{ dividend: finalTotal, divisor: people, quotient: perPerson, remainder: 0 }] }
      );
    }
    if (params.mode === 'inverse-groups') {
      const groupSize = grade === 2 ? pick([2, 5], rng) : each;
      const groupCount = grade === 2 ? randomInt(3, 10, rng) : groups;
      const inverseTotal = groupSize * groupCount;
      const inverseModel = { groupSize, groupCount, total: inverseTotal };
      return makeQuestion(meta, inverseModel,
        variantText(meta, 'Có ' + inverseTotal + ' đồ vật xếp đều, mỗi nhóm ' + groupSize + ' đồ vật. Xếp được bao nhiêu nhóm?', 'Chia ' + inverseTotal + ' vật thành các nhóm bằng nhau, mỗi nhóm có ' + groupSize + ' vật. Có tất cả bao nhiêu nhóm?'),
        data => integer(data.total / data.groupSize),
        data => {
          let left = data.total, count = 0;
          while (left > 0) { left -= data.groupSize; count += 1; }
          return left === 0 ? integer(count) : { kind: 'invalid' };
        },
        ['Bớt lần lượt từng nhóm bằng nhau hoặc thực hiện phép chia.', 'Kiểm tra bằng phép nhân ngược lại.'],
        { knowledge: ['divide-exact'], keyPoint: 'Số nhóm bằng tổng số vật chia số vật mỗi nhóm.', divisions: [{ dividend: inverseTotal, divisor: groupSize, quotient: groupCount, remainder: 0 }] }
      );
    }
    if (params.mode === 'inverse-total') {
      const finalValue = total - removed + added;
      const inverseModel = { groups, removed, added, finalValue, total };
      return makeQuestion(meta, inverseModel,
        variantText(meta, 'Một số đồ vật được chia đều vào ' + groups + ' hộp. Sau khi lấy đi ' + removed + ' đồ vật rồi thêm ' + added + ' đồ vật, còn ' + finalValue + ' đồ vật. Lúc đầu mỗi hộp có bao nhiêu đồ vật?', 'Có ' + groups + ' nhóm bằng nhau. Bớt tổng cộng ' + removed + ' vật rồi thêm lại ' + added + ' vật thì còn ' + finalValue + ' vật. Mỗi nhóm ban đầu có bao nhiêu vật?'),
        data => integer((data.finalValue + data.removed - data.added) / data.groups),
        data => bruteForceInteger(1, 1000, value => value * data.groups - data.removed + data.added === data.finalValue),
        ['Làm ngược phần thêm cuối cùng.', 'Cộng lại phần đã bớt để tìm tổng ban đầu.', 'Chia tổng ban đầu cho số nhóm và nhân ngược để kiểm tra.'],
        { knowledge: ['add', 'subtract', grade === 2 ? 'divide-exact' : 'divide-exact', grade === 2 ? 'multiply-basic' : 'multiply'], keyPoint: 'Cần khôi phục tổng trước khi chia đều.', divisions: [{ dividend: total, divisor: groups, quotient: each, remainder: 0 }] }
      );
    }
    if (params.mode === 'three-stage') {
      if (meta.difficulty === 'rat-kho' && grade === 2) {
        const addedEach = randomInt(2, 5, rng);
        const finalValue = groups * (each + addedEach) - removed;
        const challengeModel = { groups, each, addedEach, removed, finalValue };
        return makeQuestion(meta, challengeModel,
          variantText(meta, 'Có ' + groups + ' hộp như nhau. Mỗi hộp được thêm ' + addedEach + ' đồ vật, sau đó lấy ra tổng cộng ' + removed + ' đồ vật thì còn ' + finalValue + ' đồ vật. Lúc đầu mỗi hộp có bao nhiêu đồ vật?', 'Có ' + groups + ' túi bằng nhau. Thêm vào mỗi túi ' + addedEach + ' viên rồi cho đi ' + removed + ' viên, còn ' + finalValue + ' viên. Ban đầu mỗi túi có bao nhiêu viên?'),
          data => integer((data.finalValue + data.removed) / data.groups - data.addedEach),
          data => bruteForceInteger(1, 50, candidate => data.groups * (candidate + data.addedEach) - data.removed === data.finalValue),
          ['Cộng lại số đã lấy để tìm tổng sau khi thêm vào từng hộp.', 'Chia đều tổng đó cho số hộp để tìm số trong mỗi hộp sau khi thêm.', 'Bớt phần thêm ở mỗi hộp và nhân ngược để kiểm tra.'],
          { knowledge: ['multiply-basic', 'divide-exact', 'add', 'subtract', 'logic'], keyPoint: 'Phần thêm được tính cho từng hộp, còn phần lấy ra là của tất cả các hộp.', divisions: [{ dividend: finalValue + removed, divisor: groups, quotient: each + addedEach, remainder: 0 }] }
        );
      }
      if (meta.difficulty === 'rat-kho' && grade >= 3) {
        const newGroups = randomInt(2, 9, rng);
        const finalValue = total - removed + added;
        if (finalValue % newGroups !== 0 || newGroups === groups) return null;
        const challengeModel = { groups, each, removed, added, total, finalValue, newGroups };
        return makeQuestion(meta, challengeModel,
          variantText(meta, 'Kho có ' + groups + ' kiện như nhau, mỗi kiện ' + each + ' sản phẩm. Sau khi xuất ' + removed + ' sản phẩm rồi nhập thêm ' + added + ' sản phẩm, toàn bộ số hàng được chia đều vào ' + newGroups + ' thùng. Mỗi thùng có bao nhiêu sản phẩm?', 'Có ' + groups + ' nhóm, mỗi nhóm ' + each + ' vật. Bớt ' + removed + ' vật, thêm ' + added + ' vật rồi chia đều số còn lại thành ' + newGroups + ' nhóm mới. Mỗi nhóm mới có bao nhiêu vật?'),
          data => integer((data.groups * data.each - data.removed + data.added) / data.newGroups),
          data => {
            const objects = [];
            for (let group = 0; group < data.groups; group += 1) for (let item = 0; item < data.each; item += 1) objects.push(1);
            objects.splice(0, data.removed);
            for (let item = 0; item < data.added; item += 1) objects.push(1);
            return objects.length % data.newGroups === 0 ? integer(objects.length / data.newGroups) : { kind: 'invalid' };
          },
          ['Tìm tổng số sản phẩm ban đầu.', 'Thực hiện hai thay đổi để tìm tổng mới.', 'Chia đều tổng mới cho số thùng và nhân ngược để kiểm tra.'],
          { knowledge: ['multiply', 'add', 'subtract', 'divide-exact', 'logic'], keyPoint: 'Số nhóm trước và sau khác nhau; phải tìm tổng mới trước khi chia.', divisions: [{ dividend: finalValue, divisor: newGroups, quotient: finalValue / newGroups, remainder: 0 }] }
        );
      }
      const finalValue = total - removed + added;
      return makeQuestion(meta, model,
        variantText(meta, 'Có ' + groups + ' hộp, mỗi hộp ' + each + ' đồ vật. Đã dùng ' + removed + ' đồ vật rồi bổ sung ' + added + ' đồ vật. Hiện có bao nhiêu đồ vật?', 'Một kho nhận ' + groups + ' kiện như nhau, mỗi kiện ' + each + ' sản phẩm. Kho xuất ' + removed + ' rồi nhập thêm ' + added + ' sản phẩm. Kho hiện có bao nhiêu sản phẩm?'),
        data => integer(data.groups * data.each - data.removed + data.added),
        data => {
          const objects = [];
          for (let group = 0; group < data.groups; group += 1) for (let item = 0; item < data.each; item += 1) objects.push(1);
          objects.splice(0, data.removed);
          for (let item = 0; item < data.added; item += 1) objects.push(1);
          return integer(objects.length);
        },
        ['Tìm tổng số đồ vật ban đầu từ các nhóm bằng nhau.', 'Trừ số đã dùng rồi cộng số bổ sung.', 'Đối chiếu từng giai đoạn để chắc chắn không cộng, trừ nhầm thứ tự.'],
        { knowledge: [grade === 2 ? 'multiply-basic' : 'multiply', 'add', 'subtract'], keyPoint: 'Phép nhân chỉ dùng để tìm tổng của các nhóm bằng nhau.', intermediateNumbers: [finalValue] }
      );
    }
    const result = total - removed;
    return makeQuestion(meta, model,
      variantText(meta, 'Có ' + groups + ' túi, mỗi túi ' + each + ' viên bi. Cho đi ' + removed + ' viên. Còn lại bao nhiêu viên?', 'Xếp ' + groups + ' nhóm bằng nhau, mỗi nhóm ' + each + ' vật; sau đó lấy ra ' + removed + ' vật. Số vật còn lại là bao nhiêu?'),
      data => integer(data.groups * data.each - data.removed),
      data => integer(Array.from({ length: data.groups }, () => data.each).reduce((sum, value) => sum + value, 0) - data.removed),
      ['Tìm tổng số vật trong các nhóm.', 'Trừ số vật đã cho đi.'],
      { knowledge: [grade === 2 ? 'multiply-basic' : 'multiply', 'subtract'], keyPoint: 'Tìm tổng trước, sau đó mới xét thay đổi.', intermediateNumbers: [result] }
    );
  };

  BUILDERS.divisionRemainder = function (meta, params, rng) {
    const divisor = randomInt(3, 9, rng);
    const quotient = randomInt(6, 35, rng);
    const remainder = randomInt(1, divisor - 1, rng);
    const total = divisor * quotient + remainder;
    const model = { divisor, quotient, remainder, total };
    if (params.mode === 'minimum-extra') {
      let secondDivisor = randomInt(3, 9, rng);
      if (secondDivisor === divisor) secondDivisor = secondDivisor === 9 ? 8 : secondDivisor + 1;
      const common = lcm(divisor, secondDivisor);
      const nextCommon = Math.ceil((total + 1) / common) * common;
      const needed = nextCommon - total;
      const challengeModel = { divisor, secondDivisor, quotient, remainder, total, common, nextCommon, needed };
      return makeQuestion(meta, challengeModel,
        variantText(meta, 'Có ' + total + ' tấm thẻ. Cần thêm ít nhất bao nhiêu tấm để số thẻ mới có thể chia đều thành các nhóm ' + divisor + ' tấm hoặc các nhóm ' + secondDivisor + ' tấm mà đều không thừa?', 'Một đội có ' + total + ' sản phẩm. Cần bổ sung ít nhất bao nhiêu sản phẩm để khi đóng mỗi hộp ' + divisor + ' sản phẩm hoặc mỗi hộp ' + secondDivisor + ' sản phẩm đều vừa đủ?'),
        data => {
          let candidate = data.total + 1;
          while (candidate % data.divisor !== 0 || candidate % data.secondDivisor !== 0) candidate += 1;
          return integer(candidate - data.total);
        },
        data => bruteForceInteger(1, data.common, value => (data.total + value) % data.divisor === 0 && (data.total + value) % data.secondDivisor === 0),
        ['Tìm các số lớn hơn số đã cho và chia hết cho số nhóm thứ nhất.', 'Giữ lại số đồng thời chia hết cho số nhóm thứ hai.', 'Lấy số nhỏ nhất thỏa mãn trừ số ban đầu.'],
        { knowledge: ['divide-remainder', 'add', 'multiply', 'logic'], keyPoint: 'Tổng mới phải thỏa mãn đồng thời hai cách chia, không chỉ một cách.', divisions: [{ dividend: total, divisor, quotient, remainder }] }
      );
    }
    if (params.mode === 'packages' && meta.grade === 3) {
      const reserved = randomInt(5, 24, rng), usable = total - reserved;
      if (usable < divisor) return null;
      const packageModel = { divisor, total, reserved, usable, quotient: Math.floor(usable / divisor), remainder: usable % divisor };
      return makeQuestion(meta, packageModel,
        'Có ' + total + ' quyển sách, giữ lại ' + reserved + ' quyển để trưng bày. Số còn lại xếp vào các hộp, mỗi hộp ' + divisor + ' quyển. Được bao nhiêu hộp đầy và còn thừa bao nhiêu quyển?',
        data => remainderAnswer(Math.floor((data.total - data.reserved) / data.divisor), (data.total - data.reserved) % data.divisor),
        data => { let left = data.usable, count = 0; while (left >= data.divisor) { left -= data.divisor; count += 1; } return remainderAnswer(count, left); },
        ['Bớt số sách giữ lại để tìm số đem đóng hộp.', 'Chia số còn lại cho số sách mỗi hộp.', 'Thương là số hộp đầy, số dư là số sách còn thừa; cộng lại để kiểm tra.'],
        { knowledge: ['subtract', 'divide-remainder', 'logic'], keyPoint: 'Phải tách số sách không đem đóng hộp trước khi thực hiện phép chia.', reasoningSteps: 3, divisions: [{ dividend: usable, divisor, quotient: Math.floor(usable / divisor), remainder: usable % divisor }], inputHint: 'Ví dụ: 7 dư 2' }
      );
    }
    return makeQuestion(meta, model,
      variantText(meta, 'Xếp ' + total + ' quyển sách vào các hộp, mỗi hộp ' + divisor + ' quyển. Được bao nhiêu hộp đầy và còn thừa bao nhiêu quyển?', 'Chia ' + total + ' đồ vật thành các nhóm ' + divisor + ' vật. Hỏi có bao nhiêu nhóm đủ và dư mấy vật?'),
      data => remainderAnswer(Math.floor(data.total / data.divisor), data.total % data.divisor),
      data => {
        let left = data.total, count = 0;
        while (left >= data.divisor) { left -= data.divisor; count += 1; }
        return remainderAnswer(count, left);
      },
      ['Lấy tổng số đồ vật chia cho số vật mỗi nhóm.', 'Thương là số nhóm đầy; số còn lại là số dư.'],
      { knowledge: ['divide-remainder'], keyPoint: 'Số dư luôn nhỏ hơn số chia.', divisions: [{ dividend: total, divisor, quotient, remainder }], inputHint: 'Ví dụ: 7 dư 2' }
    );
  };

  BUILDERS.money = function (meta, params, rng) {
    const grade = meta.grade;
    const unitPrice = grade === 2 ? pick([2, 5, 10], rng) : randomInt(4, 25, rng) * 2;
    const count = grade === 2 ? pick([2, 5], rng) : randomInt(3, 9, rng);
    const secondPrice = randomInt(3, grade === 2 ? 18 : 45, rng);
    const paid = unitPrice * count + secondPrice + randomInt(5, grade === 2 ? 35 : 90, rng);
    const model = { unitPrice, count, secondPrice, paid };
    if (params.mode === 'two-buy-one-left') {
      const firstPrice = randomInt(8, 30, rng);
      const second = randomInt(5, 24, rng);
      const money = firstPrice + second + randomInt(10, 50, rng);
      const simpleModel = { firstPrice, second, money };
      return makeQuestion(meta, simpleModel,
        variantText(meta, 'Mai có ' + money + ' nghìn đồng, mua hai món giá ' + firstPrice + ' nghìn và ' + second + ' nghìn đồng. Mai còn bao nhiêu nghìn đồng?', 'Bạn Nam mang ' + money + ' nghìn đồng. Bạn mua một quyển vở giá ' + firstPrice + ' nghìn và bút giá ' + second + ' nghìn đồng. Nam được trả lại bao nhiêu nghìn đồng?'),
        data => integer(data.money - data.firstPrice - data.second),
        data => integer(data.money - [data.firstPrice, data.second].reduce((sum, value) => sum + value, 0)),
        ['Tính tổng số tiền phải trả.', 'Lấy số tiền có trừ số tiền đã trả.'],
        { knowledge: ['add', 'subtract', 'money'], keyPoint: 'Hai món hàng đều được mua nên phải cộng đủ giá của cả hai.', unit: 'nghìn đồng' }
      );
    }
    return makeQuestion(meta, model,
      variantText(meta, 'Mua ' + count + ' quyển vở, mỗi quyển ' + unitPrice + ' nghìn đồng và một hộp bút giá ' + secondPrice + ' nghìn đồng. Trả ' + paid + ' nghìn đồng. Được trả lại bao nhiêu?', 'Một bạn mua ' + count + ' món giống nhau, mỗi món ' + unitPrice + ' nghìn đồng, thêm một món giá ' + secondPrice + ' nghìn. Bạn đưa ' + paid + ' nghìn đồng. Tiền thừa là bao nhiêu?'),
      data => integer(data.paid - (data.unitPrice * data.count + data.secondPrice)),
      data => {
        let cost = data.secondPrice;
        for (let item = 0; item < data.count; item += 1) cost += data.unitPrice;
        return integer(data.paid - cost);
      },
      ['Tính tiền của các món giống nhau.', 'Cộng giá món còn lại rồi lấy tiền đã trả trừ tổng tiền mua.'],
      { knowledge: [grade === 2 ? 'multiply-basic' : 'multiply', 'add', 'subtract', 'money'], keyPoint: 'Tính đủ tổng tiền mua trước khi tìm tiền trả lại.', unit: 'nghìn đồng' }
    );
  };

  BUILDERS.timeStory = function (meta, params, rng) {
    const grade = meta.grade;
    const minuteChoices = grade === 2 ? [0, 15, 30, 45] : [0, 5, 10, 15, 20, 30, 40, 45, 50];
    const startHour = randomInt(6, 18, rng);
    const startMinute = pick(minuteChoices, rng);
    const start = startHour * 60 + startMinute;
    if (params.mode === 'three-activities') {
      const first = pick([25, 30, 35, 40], rng);
      const gap = pick([5, 10, 15], rng);
      const second = pick([30, 40, 45, 50], rng);
      const end = start + first + gap + second;
      const model = { start, first, gap, second, end };
      if (meta.difficulty === 'rat-kho') {
        return makeQuestion(meta, model,
          variantText(meta, 'Một buổi học kết thúc lúc ' + formatTime(end) + '. Phần cuối kéo dài ' + second + ' phút, trước đó nghỉ ' + gap + ' phút và phần đầu kéo dài ' + first + ' phút. Buổi học bắt đầu lúc nào?', 'Lớp kết thúc lúc ' + formatTime(end) + ' sau ' + first + ' phút làm bài, ' + gap + ' phút nghỉ và ' + second + ' phút chữa bài. Hỏi thời điểm bắt đầu?'),
          data => timeAnswer(data.end - data.second - data.gap - data.first),
          data => {
            for (let candidate = 0; candidate < data.end; candidate += 1) {
              if (candidate + data.first + data.gap + data.second === data.end) return timeAnswer(candidate);
            }
            return { kind: 'invalid' };
          },
          ['Từ giờ kết thúc, lùi lại thời gian của hoạt động cuối.', 'Lùi tiếp thời gian nghỉ và hoạt động đầu.', 'Cộng xuôi toàn bộ thời lượng để kiểm tra.'],
          { knowledge: ['time', 'add', 'subtract', 'logic'], keyPoint: 'Bài hỏi thời điểm bắt đầu nên phải lần ngược các hoạt động.', inputHint: 'Ví dụ: 8 giờ 35 phút' }
        );
      }
      return makeQuestion(meta, model,
        variantText(meta, 'Một buổi học bắt đầu lúc ' + formatTime(start) + '. Hoạt động đầu kéo dài ' + first + ' phút, nghỉ ' + gap + ' phút, hoạt động sau kéo dài ' + second + ' phút. Buổi học kết thúc lúc nào?', 'Từ ' + formatTime(start) + ', lớp học làm bài ' + first + ' phút, nghỉ giữa giờ ' + gap + ' phút rồi học tiếp ' + second + ' phút. Hỏi mấy giờ kết thúc?'),
        data => timeAnswer(data.start + data.first + data.gap + data.second),
        data => {
          let clock = data.start;
          [data.first, data.gap, data.second].forEach(duration => { for (let minute = 0; minute < duration; minute += 1) clock += 1; });
          return timeAnswer(clock);
        },
        ['Cộng thời lượng hoạt động đầu.', 'Cộng thời gian nghỉ và hoạt động sau.', 'Đổi phút vượt 60 thành giờ.'],
        { knowledge: ['time', 'add'], keyPoint: 'Thời gian nghỉ vẫn nằm trong khoảng từ lúc bắt đầu đến lúc kết thúc.', inputHint: 'Ví dụ: 9 giờ 15 phút' }
      );
    }
    if (params.mode === 'duration-gap') {
      const firstDuration = pick([30, 35, 40, 45, 50], rng);
      const breakTime = pick([5, 10, 15], rng);
      const secondDuration = pick([25, 30, 35, 40], rng);
      const end = start + firstDuration + breakTime + secondDuration;
      const model = { start, firstDuration, breakTime, secondDuration, end };
      return makeQuestion(meta, model,
        variantText(meta, 'Một hoạt động bắt đầu lúc ' + formatTime(start) + ', gồm hai phần dài ' + firstDuration + ' phút và ' + secondDuration + ' phút, giữa hai phần nghỉ ' + breakTime + ' phút. Hoạt động kết thúc lúc nào?', 'Từ ' + formatTime(start) + ', bạn học ' + firstDuration + ' phút, nghỉ ' + breakTime + ' phút rồi học tiếp ' + secondDuration + ' phút. Hỏi thời điểm kết thúc?'),
        data => timeAnswer(data.start + data.firstDuration + data.breakTime + data.secondDuration),
        data => {
          const timeline = [data.start];
          timeline.push(timeline[0] + data.firstDuration);
          timeline.push(timeline[1] + data.breakTime);
          timeline.push(timeline[2] + data.secondDuration);
          return timeAnswer(timeline[3]);
        },
        ['Tính tổng thời gian gồm cả hai phần và thời gian nghỉ.', 'Cộng tổng thời gian vào thời điểm bắt đầu.'],
        { knowledge: ['time', 'add'], keyPoint: 'Không bỏ quên thời gian nghỉ giữa hai hoạt động.', inputHint: 'Ví dụ: 10 giờ 05 phút' }
      );
    }
    const duration = grade === 2 ? pick([30, 45, 60, 75], rng) : pick([35, 45, 55, 65, 75, 90], rng);
    const model = { start, duration, end: start + duration };
    return makeQuestion(meta, model,
      variantText(meta, 'Một tiết học bắt đầu lúc ' + formatTime(start) + ' và kéo dài ' + duration + ' phút. Tiết học kết thúc lúc nào?', 'Bắt đầu đọc sách lúc ' + formatTime(start) + '. Sau ' + duration + ' phút thì dừng. Khi đó là mấy giờ?'),
      data => timeAnswer(data.start + data.duration),
      data => {
        let clock = data.start;
        for (let minute = 0; minute < data.duration; minute += 1) clock += 1;
        return timeAnswer(clock);
      },
      ['Cộng số phút kéo dài vào thời điểm bắt đầu.', 'Nếu số phút đạt 60 thì đổi thành 1 giờ.'],
      { knowledge: [grade === 2 ? 'time' : 'time', 'add'], keyPoint: 'Tách phần tròn giờ và số phút còn lại để cộng thuận tiện.', inputHint: 'Ví dụ: 8 giờ 30 phút' }
    );
  };

  BUILDERS.measureStory = function (meta, params, rng) {
    const grade = meta.grade;
    if (params.mode === 'centimetres') {
      const first = randomInt(25, 80, rng);
      const second = randomInt(12, 55, rng);
      const cut = randomInt(5, Math.min(25, first + second - 1), rng);
      const model = { first, second, cut };
      return makeQuestion(meta, model,
        variantText(meta, 'Ghép hai đoạn dây dài ' + first + ' cm và ' + second + ' cm rồi cắt đi ' + cut + ' cm. Đoạn dây còn lại dài bao nhiêu?', 'Hai đoạn ruy băng dài ' + first + ' cm và ' + second + ' cm được nối lại. Người ta dùng ' + cut + ' cm. Còn lại bao nhiêu xăng-ti-mét?'),
        data => integer(data.first + data.second - data.cut),
        data => integer([data.first, data.second].reduce((sum, value) => sum + value, 0) - data.cut),
        ['Cộng độ dài hai đoạn đã ghép.', 'Trừ phần đã cắt hoặc đã dùng.'],
        { knowledge: ['length', 'add', 'subtract'], keyPoint: 'Tất cả số đo đã cùng đơn vị xăng-ti-mét.', unit: 'cm' }
      );
    }
    const metres = randomInt(2, grade === 3 ? 8 : 25, rng);
    const centimetres = randomInt(10, 90, rng);
    const used = randomInt(20, Math.min(99, metres * 100 + centimetres - 1), rng);
    const totalCm = metres * 100 + centimetres;
    const model = { metres, centimetres, used, totalCm };
    return makeQuestion(meta, model,
      variantText(meta, 'Một cuộn dây dài ' + metres + ' m ' + centimetres + ' cm. Cắt đi ' + used + ' cm. Cuộn dây còn lại bao nhiêu xăng-ti-mét?', 'Đổi ' + metres + ' m ' + centimetres + ' cm ra xăng-ti-mét rồi bớt ' + used + ' cm. Kết quả là bao nhiêu?'),
      data => integer(data.metres * 100 + data.centimetres - data.used),
      data => {
        let length = data.centimetres;
        for (let metre = 0; metre < data.metres; metre += 1) length += 100;
        return integer(length - data.used);
      },
      ['Đổi mét ra xăng-ti-mét.', 'Cộng phần xăng-ti-mét lẻ rồi trừ phần đã cắt.'],
      { knowledge: [grade === 3 ? 'length' : 'measure', 'add', 'subtract'], keyPoint: 'Chỉ thực hiện phép tính sau khi mọi số đo đã cùng đơn vị.', unit: 'cm', intermediateNumbers: [totalCm] }
    );
  };

  BUILDERS.irrelevantData = function (meta, params, rng) {
    const grade = meta.grade;
    const factor = grade <= 2 ? pick([2, 5], rng) : randomInt(3, 9, rng);
    const each = randomInt(grade <= 2 ? 3 : 12, grade <= 2 ? 10 : 45, rng);
    const removed = randomInt(2, Math.min(factor * each - 1, grade <= 2 ? 12 : 35), rng);
    const irrelevant = randomInt(20, 45, rng);
    const model = { factor, each, removed, irrelevant };
    return makeQuestion(meta, model,
      variantText(meta, 'Có ' + factor + ' hộp, mỗi hộp ' + each + ' tấm thẻ. Dùng ' + removed + ' tấm thẻ. Trên bàn còn có ' + irrelevant + ' chiếc bút. Hỏi còn lại bao nhiêu tấm thẻ?', 'Một lớp chuẩn bị ' + factor + ' gói giấy, mỗi gói ' + each + ' tờ và đã dùng ' + removed + ' tờ. Lớp có ' + irrelevant + ' học sinh. Hỏi số tờ giấy chưa dùng?'),
      data => integer(data.factor * data.each - data.removed),
      data => {
        const relevant = Array.from({ length: data.factor }, () => data.each);
        return integer(relevant.reduce((sum, value) => sum + value, 0) - data.removed);
      },
      ['Xác định câu hỏi chỉ liên quan đến số tấm thẻ hoặc tờ giấy.', 'Bỏ dữ kiện không liên quan.', 'Tìm tổng ban đầu rồi trừ phần đã dùng.'],
      { knowledge: [grade === 2 ? 'multiply-basic' : 'multiply', 'subtract', 'logic'], keyPoint: 'Dữ kiện thừa không được đưa vào phép tính.' }
    );
  };

  BUILDERS.expression = function (meta, params, rng) {
    const grade = meta.grade;
    if (params.mode === 'three-terms') {
      const a = randomInt(120, 420, rng);
      const b = randomInt(60, 180, rng);
      const c = randomInt(20, Math.min(a + b - 1, 130), rng);
      const model = { a, b, c };
      return makeQuestion(meta, model, 'Tính nhanh: ' + a + ' + ' + b + ' − ' + c + '.',
        data => integer(data.a + data.b - data.c),
        data => integer(data.a + (data.b - data.c)),
        ['Ghép hai số tạo thành phần tính thuận tiện.', 'Thực hiện cộng và trừ trong phạm vi đã học.'],
        { knowledge: ['add', 'subtract'], keyPoint: 'Có thể nhóm phần cộng và phần trừ để tính nhanh hơn.' }
      );
    }
    if (params.mode === 'nested-decimal') {
      const x10 = randomInt(180, 900, rng);
      const c10 = randomInt(20, Math.min(x10 - 10, 160), rng);
      const b10 = randomInt(20, 140, rng);
      const factor = randomInt(2, 5, rng);
      const result10 = x10 - c10 + b10 * factor;
      const model = { x10, c10, b10, factor, result10 };
      return makeQuestion(meta, model,
        'Tìm số thập phân trong ô: (□ − ' + (c10 / 10).toLocaleString('vi-VN') + ') + ' + (b10 / 10).toLocaleString('vi-VN') + ' × ' + factor + ' = ' + (result10 / 10).toLocaleString('vi-VN') + '.',
        data => rational(data.result10 - data.b10 * data.factor + data.c10, 10),
        data => {
          for (let candidate10 = 0; candidate10 <= 2000; candidate10 += 1) {
            if (candidate10 - data.c10 + data.b10 * data.factor === data.result10) return rational(candidate10, 10);
          }
          return { kind: 'invalid' };
        },
        ['Tính tích của số thập phân với số tự nhiên.', 'Lấy kết quả bên phải trừ tích vừa tìm.', 'Cộng lại số đã trừ để tìm số trong ô rồi thay lại kiểm tra.'],
        { knowledge: ['decimal', 'multiply', 'add', 'subtract', 'unknown'], keyPoint: 'Đây là bài toán tìm thành phần chưa biết, cần làm ngược đúng thứ tự.', answerFormat: 'decimal', inputHint: 'Ví dụ: 62,5' }
      );
    }
    if (params.mode === 'decimal') {
      const a10 = randomInt(120, 760, rng);
      const b10 = randomInt(20, 180, rng);
      const factor = randomInt(2, 5, rng);
      const c10 = 0;
      const model = { a10, b10, factor, c10 };
      const text = (a10 / 10).toLocaleString('vi-VN') + ' + ' + (b10 / 10).toLocaleString('vi-VN') + ' × ' + factor;
      return makeQuestion(meta, model, 'Tính giá trị biểu thức: ' + text + '.',
        data => rational((data.a10 - data.c10) + data.b10 * data.factor, 10),
        data => {
          const repeated = Array.from({ length: data.factor }, () => data.b10).reduce((sum, value) => sum + value, 0);
          return rational(data.a10 - data.c10 + repeated, 10);
        },
        ['Thực hiện phép nhân trước phép cộng.', 'Đặt đúng vị trí dấu phẩy khi tính.'],
        { knowledge: ['decimal', 'multiply', 'add'], keyPoint: 'Mọi số được quy về phần mười để tính chính xác, không làm tròn.', answerFormat: 'decimal', inputHint: 'Ví dụ: 60,4' }
      );
    }
    const a = randomInt(grade === 3 ? 120 : 500, grade === 3 ? 900 : 5000, rng);
    const b = randomInt(12, grade === 3 ? 80 : 300, rng);
    const factor = randomInt(2, grade === 3 ? 9 : 12, rng);
    const c = randomInt(5, Math.min(a - 1, grade === 3 ? 90 : 400), rng);
    const model = { a, b, factor, c };
    if (params.mode === 'nested') {
      const divisor = randomInt(2, 9, rng);
      const inner = b * divisor;
      const result = (a - c) + inner / divisor * factor;
      const nestedModel = { a, c, inner, divisor, factor, result };
      return makeQuestion(meta, nestedModel, 'Tính: (' + a + ' − ' + c + ') + (' + inner + ' : ' + divisor + ') × ' + factor + '.',
        data => integer((data.a - data.c) + (data.inner / data.divisor) * data.factor),
        data => {
          let quotient = 0, left = data.inner;
          while (left > 0) { left -= data.divisor; quotient += 1; }
          let product = 0;
          for (let index = 0; index < data.factor; index += 1) product += quotient;
          return integer(data.a - data.c + product);
        },
        ['Tính từng biểu thức trong ngoặc.', 'Thực hiện phép nhân.', 'Cộng hai kết quả.'],
        { knowledge: ['subtract', 'divide-exact', 'multiply', 'add', 'expression'], keyPoint: 'Dùng đúng thứ tự thực hiện phép tính.', divisions: [{ dividend: inner, divisor, quotient: inner / divisor, remainder: 0 }] }
      );
    }
    return makeQuestion(meta, model, 'Tính giá trị: ' + a + ' − ' + c + ' + ' + b + ' × ' + factor + '.',
      data => integer(data.a - data.c + data.b * data.factor),
      data => {
        const product = Array.from({ length: data.factor }, () => data.b).reduce((sum, value) => sum + value, 0);
        return integer((data.a - data.c) + product);
      },
      ['Thực hiện phép nhân trước.', 'Tính phần cộng, trừ còn lại từ trái sang phải.'],
      { knowledge: ['multiply', 'add', 'subtract', 'expression'], keyPoint: 'Không tính tuần tự từ trái sang phải khi còn phép nhân.' }
    );
  };

  BUILDERS.geometryStory = function (meta, params, rng) {
    if (params.mode === 'rectangle-fence') {
      const length = randomInt(12, 35, rng);
      const width = randomInt(5, length - 2, rng);
      const gate = randomInt(2, Math.min(6, width - 1), rng);
      const model = { length, width, gate };
      const svgGivens = { type: 'rectangle', length, width, labels: ['length', 'width'] };
      return makeQuestion(meta, model,
        variantText(meta, 'Một mảnh vườn hình chữ nhật dài ' + length + ' m, rộng ' + width + ' m. Làm hàng rào quanh vườn nhưng để lại cổng rộng ' + gate + ' m. Cần bao nhiêu mét hàng rào?', 'Hình chữ nhật có chiều dài ' + length + ' m và chiều rộng ' + width + ' m. Chu vi được chừa một đoạn ' + gate + ' m làm lối vào. Độ dài phần còn lại là bao nhiêu?'),
        data => integer((data.length + data.width) * 2 - data.gate),
        data => integer([data.length, data.width, data.length, data.width].reduce((sum, value) => sum + value, 0) - data.gate),
        ['Tính chu vi mảnh vườn.', 'Trừ chiều rộng phần cổng không làm hàng rào.'],
        { knowledge: ['perimeter', 'multiply', 'add', 'subtract'], keyPoint: 'Đề hỏi độ dài hàng rào, không phải toàn bộ chu vi.', unit: 'm', svgGivens }
      );
    }
    if (params.mode === 'perimeter-missing') {
      const length = randomInt(12, 30, rng);
      const width = randomInt(4, length - 2, rng);
      const perimeter = (length + width) * 2;
      const model = { length, width, perimeter };
      const svgGivens = { type: 'rectangle-missing', length, perimeter };
      return makeQuestion(meta, model, 'Hình chữ nhật có chu vi ' + perimeter + ' cm và chiều dài ' + length + ' cm. Chiều rộng là bao nhiêu?',
        data => integer(data.perimeter / 2 - data.length),
        data => bruteForceInteger(1, data.length, candidate => (data.length + candidate) * 2 === data.perimeter),
        ['Tìm nửa chu vi.', 'Lấy nửa chu vi trừ chiều dài.'],
        { knowledge: ['perimeter', 'divide-exact', 'subtract'], keyPoint: 'Nửa chu vi bằng chiều dài cộng chiều rộng.', unit: 'cm', divisions: [{ dividend: perimeter, divisor: 2, quotient: perimeter / 2, remainder: 0 }], svgGivens }
      );
    }
    if (params.mode === 'two-rectangles') {
      const width = randomInt(3, 8, rng);
      const firstLength = randomInt(5, 12, rng);
      const secondLength = randomInt(4, 10, rng);
      const model = { width, firstLength, secondLength };
      if (meta.difficulty === 'rat-kho') {
        const totalArea = width * (firstLength + secondLength);
        const inverseModel = { width, firstLength, secondLength, totalArea };
        const inverseSvg = { type: 'two-rectangles-missing', width, firstLength, totalArea };
        return makeQuestion(meta, inverseModel,
          variantText(meta, 'Hai hình chữ nhật ghép liền nhau, không chồng lên nhau và cùng rộng ' + width + ' cm. Hình thứ nhất dài ' + firstLength + ' cm; diện tích toàn hình là ' + totalArea + ' cm². Hình thứ hai dài bao nhiêu xăng-ti-mét?', 'Một hình ghép gồm hai hình chữ nhật có cùng chiều rộng ' + width + ' cm. Tổng diện tích là ' + totalArea + ' cm², chiều dài phần thứ nhất là ' + firstLength + ' cm. Tìm chiều dài phần còn lại.'),
          data => integer(data.totalArea / data.width - data.firstLength),
          data => bruteForceInteger(1, 30, candidate => data.width * data.firstLength + data.width * candidate === data.totalArea),
          ['Từ diện tích toàn hình và chiều rộng chung, tìm tổng hai chiều dài.', 'Trừ chiều dài phần thứ nhất để tìm chiều dài phần thứ hai.', 'Tính diện tích từng phần rồi cộng lại để kiểm tra.'],
          { knowledge: ['area-rectangle', 'divide-exact', 'subtract', 'multiply', 'logic'], keyPoint: 'Hai phần có chung chiều rộng nên diện tích toàn hình bằng chiều rộng nhân tổng hai chiều dài.', unit: 'cm', divisions: [{ dividend: totalArea, divisor: width, quotient: firstLength + secondLength, remainder: 0 }], svgGivens: inverseSvg }
        );
      }
      const svgGivens = { type: 'two-rectangles', width, firstLength, secondLength };
      return makeQuestion(meta, model, 'Hình trong tranh được ghép từ hai hình chữ nhật không chồng lên nhau, cùng chiều rộng ' + width + ' cm, có chiều dài ' + firstLength + ' cm và ' + secondLength + ' cm. Diện tích cả hình là bao nhiêu?',
        data => integer(data.width * data.firstLength + data.width * data.secondLength),
        data => integer(data.width * (data.firstLength + data.secondLength)),
        ['Tính diện tích từng hình chữ nhật.', 'Cộng hai diện tích vì hai phần không chồng lên nhau.', 'Kiểm tra bằng cách cộng hai chiều dài trước rồi nhân với chiều rộng chung.'],
        { knowledge: ['area-rectangle', 'multiply', 'add'], keyPoint: 'Có thể đặt chiều rộng làm thừa số chung để kiểm tra.', unit: 'cm²', svgGivens }
      );
    }
    if (params.mode === 'area-path') {
      const outerLength = randomInt(18, 32, rng);
      const outerWidth = randomInt(12, outerLength - 3, rng);
      const path = randomInt(1, Math.min(3, Math.floor(outerWidth / 4)), rng);
      const innerLength = outerLength - path * 2;
      const innerWidth = outerWidth - path * 2;
      const model = { outerLength, outerWidth, path, innerLength, innerWidth };
      const svgGivens = { type: 'rectangle-path', outerLength, outerWidth, path };
      return makeQuestion(meta, model, 'Một sân hình chữ nhật dài ' + outerLength + ' m, rộng ' + outerWidth + ' m. Làm lối đi rộng ' + path + ' m chạy sát phía trong quanh bốn cạnh. Diện tích lối đi là bao nhiêu?',
        data => integer(data.outerLength * data.outerWidth - data.innerLength * data.innerWidth),
        data => {
          let count = 0;
          for (let row = 0; row < data.outerWidth; row += 1) for (let col = 0; col < data.outerLength; col += 1) {
            if (row < data.path || row >= data.outerWidth - data.path || col < data.path || col >= data.outerLength - data.path) count += 1;
          }
          return integer(count);
        },
        ['Tính diện tích toàn sân.', 'Tìm kích thước và diện tích phần còn lại ở giữa.', 'Lấy diện tích toàn sân trừ diện tích phần giữa.'],
        { knowledge: ['area', 'multiply', 'subtract'], keyPoint: 'Lối đi nằm ở cả hai phía của mỗi chiều nên phải bớt hai lần bề rộng lối đi.', unit: 'm²', svgGivens }
      );
    }
    if (params.mode === 'composite-area') {
      const bigLength = randomInt(16, 28, rng);
      const bigWidth = randomInt(10, 18, rng);
      const cutLength = randomInt(3, 7, rng);
      const cutWidth = randomInt(2, 6, rng);
      const model = { bigLength, bigWidth, cutLength, cutWidth };
      if (meta.difficulty === 'rat-kho') {
        const remainingArea = bigLength * bigWidth - cutLength * cutWidth;
        const inverseModel = { bigLength, bigWidth, cutLength, cutWidth, remainingArea };
        const inverseSvg = { type: 'cut-rectangle-missing', bigLength, bigWidth, cutWidth, remainingArea };
        return makeQuestion(meta, inverseModel,
          variantText(meta, 'Một tấm bìa hình chữ nhật dài ' + bigLength + ' cm, rộng ' + bigWidth + ' cm bị cắt một hình chữ nhật ở góc có chiều rộng ' + cutWidth + ' cm. Phần còn lại có diện tích ' + remainingArea + ' cm². Phần bị cắt dài bao nhiêu xăng-ti-mét?', 'Hình chữ nhật lớn kích thước ' + bigLength + ' cm × ' + bigWidth + ' cm. Cắt một góc hình chữ nhật rộng ' + cutWidth + ' cm thì diện tích còn lại là ' + remainingArea + ' cm². Tìm chiều dài phần cắt.'),
          data => integer((data.bigLength * data.bigWidth - data.remainingArea) / data.cutWidth),
          data => bruteForceInteger(1, data.bigLength - 1, candidate => data.bigLength * data.bigWidth - candidate * data.cutWidth === data.remainingArea),
          ['Tính diện tích hình chữ nhật ban đầu.', 'Lấy diện tích ban đầu trừ diện tích còn lại để tìm diện tích phần cắt.', 'Lấy diện tích phần cắt chia chiều rộng rồi thay lại kiểm tra.'],
          { knowledge: ['area', 'multiply', 'subtract', 'divide-exact', 'logic'], keyPoint: 'Đề cho diện tích phần còn lại, cần tìm ngược diện tích phần bị cắt.', unit: 'cm', divisions: [{ dividend: cutLength * cutWidth, divisor: cutWidth, quotient: cutLength, remainder: 0 }], svgGivens: inverseSvg }
        );
      }
      const svgGivens = { type: 'cut-rectangle', bigLength, bigWidth, cutLength, cutWidth };
      return makeQuestion(meta, model, 'Một tấm bìa hình chữ nhật dài ' + bigLength + ' cm, rộng ' + bigWidth + ' cm bị cắt bỏ một hình chữ nhật ở góc dài ' + cutLength + ' cm, rộng ' + cutWidth + ' cm. Phần còn lại có diện tích bao nhiêu?',
        data => integer(data.bigLength * data.bigWidth - data.cutLength * data.cutWidth),
        data => {
          let cells = 0;
          for (let row = 0; row < data.bigWidth; row += 1) for (let col = 0; col < data.bigLength; col += 1) {
            if (!(row < data.cutWidth && col >= data.bigLength - data.cutLength)) cells += 1;
          }
          return integer(cells);
        },
        ['Tính diện tích hình chữ nhật ban đầu.', 'Tính diện tích phần bị cắt.', 'Lấy diện tích ban đầu trừ phần bị cắt.'],
        { knowledge: ['area', 'multiply', 'subtract'], keyPoint: 'Hai phần không chồng lên nhau nên có thể dùng phép trừ diện tích.', unit: 'cm²', svgGivens }
      );
    }
    if (params.mode === 'volume-boxes') {
      const length = randomInt(6, 12, rng);
      const width = randomInt(3, 7, rng);
      const height = randomInt(2, 6, rng);
      const boxes = randomInt(2, 5, rng);
      const model = { length, width, height, boxes };
      const svgGivens = { type: 'box', length, width, height };
      return makeQuestion(meta, model, 'Có ' + boxes + ' hộp giống nhau, mỗi hộp dài ' + length + ' cm, rộng ' + width + ' cm, cao ' + height + ' cm. Tổng thể tích các hộp là bao nhiêu?',
        data => integer(data.length * data.width * data.height * data.boxes),
        data => {
          let cubes = 0;
          for (let box = 0; box < data.boxes; box += 1) for (let layer = 0; layer < data.height; layer += 1) cubes += data.length * data.width;
          return integer(cubes);
        },
        ['Tính thể tích một hộp.', 'Nhân với số hộp giống nhau.'],
        { knowledge: ['volume', 'multiply'], keyPoint: 'Mỗi lớp khối lập phương có chiều dài nhân chiều rộng ô.', unit: 'cm³', svgGivens }
      );
    }
    const length = randomInt(8, 14, rng);
    const width = randomInt(5, 9, rng);
    const height = randomInt(4, 8, rng);
    const filledHeight = randomInt(1, height - 1, rng);
    const addedHeight = randomInt(1, height - filledHeight, rng);
    const model = { length, width, height, filledHeight, addedHeight };
    const svgGivens = { type: 'tank', length, width, height, filledHeight };
    if (meta.difficulty === 'rat-kho') {
      if (filledHeight < 2) return null;
      const baseArea = length * width;
      const drainedHeight = randomInt(1, filledHeight - 1, rng);
      const drainedVolume = baseArea * drainedHeight;
      const afterDrainHeight = filledHeight - drainedHeight;
      const finalVolume = baseArea * (afterDrainHeight + addedHeight);
      const inverseModel = { length, width, height, filledHeight, drainedHeight, drainedVolume, afterDrainHeight, addedHeight, finalVolume };
      return makeQuestion(meta, inverseModel,
        variantText(meta, 'Một bể đáy dài ' + length + ' dm, rộng ' + width + ' dm đang có nước cao ' + filledHeight + ' dm. Người ta tháo ra ' + drainedVolume + ' dm³ nước rồi bơm thêm, khi đó bể có ' + finalVolume + ' dm³ nước. Riêng trong lúc bơm, mực nước đã dâng bao nhiêu đề-xi-mét?', 'Bể có đáy ' + length + ' dm × ' + width + ' dm và mực nước ban đầu cao ' + filledHeight + ' dm. Sau khi rút ' + drainedVolume + ' dm³ rồi bơm nước, thể tích cuối là ' + finalVolume + ' dm³. Tìm độ cao mực nước tăng do lần bơm.'),
        data => integer(data.finalVolume / (data.length * data.width) - (data.filledHeight - data.drainedVolume / (data.length * data.width))),
        data => bruteForceInteger(1, data.height, candidate => data.length * data.width * (data.afterDrainHeight + candidate) === data.finalVolume),
        ['Tính diện tích đáy rồi đổi thể tích đã tháo thành độ cao mực nước giảm.', 'Tìm chiều cao mực nước sau khi tháo và chiều cao ở trạng thái cuối.', 'Lấy hai chiều cao sau trừ nhau để tìm phần dâng do bơm, rồi kiểm tra bằng thể tích.'],
        { knowledge: ['volume', 'multiply', 'divide-exact', 'subtract', 'logic'], keyPoint: 'Đề hỏi phần dâng trong lúc bơm, phải tách riêng ảnh hưởng của lần tháo nước.', unit: 'dm', divisions: [{ dividend: drainedVolume, divisor: baseArea, quotient: drainedHeight, remainder: 0 }, { dividend: finalVolume, divisor: baseArea, quotient: afterDrainHeight + addedHeight, remainder: 0 }], svgGivens }
      );
    }
    return makeQuestion(meta, model, 'Một bể hình hộp chữ nhật đáy dài ' + length + ' dm, rộng ' + width + ' dm. Mực nước đang cao ' + filledHeight + ' dm và được bơm thêm để cao thêm ' + addedHeight + ' dm. Thể tích nước sau khi bơm là bao nhiêu đề-xi-mét khối?',
      data => integer(data.length * data.width * (data.filledHeight + data.addedHeight)),
      data => {
        const baseArea = data.length * data.width;
        let volume = 0;
        for (let layer = 0; layer < data.filledHeight + data.addedHeight; layer += 1) volume += baseArea;
        return integer(volume);
      },
      ['Tìm chiều cao mực nước mới.', 'Tính diện tích đáy.', 'Nhân diện tích đáy với chiều cao mực nước.'],
      { knowledge: ['volume', 'add', 'multiply'], keyPoint: 'Chỉ tính thể tích nước, không dùng toàn bộ chiều cao của bể.', unit: 'dm³', svgGivens }
    );
  };

  BUILDERS.unitRate = function (meta, params, rng) {
    const grade = meta.grade;
    const firstCount = randomInt(3, 7, rng);
    const unit = randomInt(grade === 3 ? 8 : 15, grade === 3 ? 30 : 80, rng);
    const secondCount = randomInt(firstCount + 1, firstCount + 6, rng);
    const firstTotal = firstCount * unit;
    const secondTotal = secondCount * unit;
    const model = { firstCount, unit, secondCount, firstTotal, secondTotal };
    if (params.mode === 'inverse-many') {
      if (meta.difficulty === 'rat-kho') {
        const existingCount = randomInt(1, secondCount - 1, rng);
        const neededCount = secondCount - existingCount;
        const challengeModel = { firstCount, unit, secondCount, firstTotal, secondTotal, existingCount, neededCount };
        return makeQuestion(meta, challengeModel,
          variantText(meta, firstCount + ' hộp giống nhau có ' + firstTotal + ' sản phẩm. Cần chuẩn bị đủ ' + secondTotal + ' sản phẩm nhưng kho đã có sẵn ' + existingCount + ' hộp như thế. Cần thêm bao nhiêu hộp?', 'Có ' + firstTotal + ' đồ vật đóng đều trong ' + firstCount + ' thùng. Muốn có ' + secondTotal + ' đồ vật và đã chuẩn bị được ' + existingCount + ' thùng cùng loại, còn phải chuẩn bị thêm bao nhiêu thùng?'),
          data => integer(data.secondTotal / (data.firstTotal / data.firstCount) - data.existingCount),
          data => bruteForceInteger(0, 100, candidate => (candidate + data.existingCount) * data.unit === data.secondTotal),
          ['Rút về số sản phẩm trong một hộp.', 'Tìm tổng số hộp cần có để đạt số sản phẩm yêu cầu.', 'Trừ số hộp đã chuẩn bị và nhân ngược để kiểm tra.'],
          { knowledge: ['unit-rate', 'divide-exact', 'subtract', 'multiply', 'logic'], keyPoint: 'Đề hỏi số hộp cần thêm, không phải tổng số hộp cần dùng.', divisions: [{ dividend: firstTotal, divisor: firstCount, quotient: unit, remainder: 0 }, { dividend: secondTotal, divisor: unit, quotient: secondCount, remainder: 0 }] }
        );
      }
      return makeQuestion(meta, model,
        variantText(meta, firstCount + ' hộp giống nhau có ' + firstTotal + ' đồ vật. Muốn có ' + secondTotal + ' đồ vật thì cần bao nhiêu hộp như thế?', 'Có ' + firstTotal + ' sản phẩm đóng đều trong ' + firstCount + ' thùng. Với cách đóng đó, ' + secondTotal + ' sản phẩm cần bao nhiêu thùng?'),
        data => integer(data.secondTotal / (data.firstTotal / data.firstCount)),
        data => bruteForceInteger(1, 100, count => count * data.unit === data.secondTotal),
        ['Rút về số vật trong một hộp.', 'Lấy tổng cần có chia số vật mỗi hộp.', 'Nhân số hộp vừa tìm với số vật mỗi hộp để kiểm tra tổng mới.'],
        { knowledge: ['unit-rate', 'divide-exact'], keyPoint: 'Đơn vị của hai tình huống phải giống nhau.', divisions: [{ dividend: firstTotal, divisor: firstCount, quotient: unit, remainder: 0 }, { dividend: secondTotal, divisor: unit, quotient: secondCount, remainder: 0 }] }
      );
    }
    return makeQuestion(meta, model,
      variantText(meta, firstCount + ' hộp giống nhau có ' + firstTotal + ' sản phẩm. ' + secondCount + ' hộp như thế có bao nhiêu sản phẩm?', 'Một đội làm được ' + firstTotal + ' sản phẩm trong ' + firstCount + ' ngày như nhau. Giữ nguyên năng suất, ' + secondCount + ' ngày làm được bao nhiêu sản phẩm?'),
      data => integer((data.firstTotal / data.firstCount) * data.secondCount),
      data => {
        const perUnit = data.firstTotal / data.firstCount;
        return integer(Array.from({ length: data.secondCount }, () => perUnit).reduce((sum, value) => sum + value, 0));
      },
      ['Tìm số sản phẩm của một hộp hoặc một ngày.', 'Nhân với số đơn vị mới.'],
      { knowledge: ['unit-rate', 'divide-exact', 'multiply'], keyPoint: 'Rút về một đơn vị trước rồi mới tìm nhiều đơn vị.', divisions: [{ dividend: firstTotal, divisor: firstCount, quotient: unit, remainder: 0 }] }
    );
  };

  BUILDERS.distributionLogic = function (meta, params, rng) {
    if (params.mode === 'ratio-and-difference') {
      const unit = randomInt(8, 35, rng);
      const ratioA = randomInt(2, 4, rng);
      const ratioB = ratioA + randomInt(1, 3, rng);
      const difference = (ratioB - ratioA) * unit;
      const total = (ratioA + ratioB) * unit;
      const model = { unit, ratioA, ratioB, difference, total };
      return makeQuestion(meta, model,
        variantText(meta, 'Hai nhóm có số sản phẩm theo tỉ lệ ' + ratioA + ' : ' + ratioB + ', nhóm thứ hai nhiều hơn nhóm thứ nhất ' + difference + ' sản phẩm. Cả hai nhóm có bao nhiêu sản phẩm?', 'Số cây của hai đội gồm ' + ratioA + ' phần và ' + ratioB + ' phần bằng nhau. Đội thứ hai trồng nhiều hơn đội thứ nhất ' + difference + ' cây. Tổng số cây của hai đội là bao nhiêu?'),
        data => integer((data.difference / (data.ratioB - data.ratioA)) * (data.ratioA + data.ratioB)),
        data => bruteForceInteger(1, 100000, candidate => {
          if (candidate % (data.ratioA + data.ratioB) !== 0) return false;
          const one = candidate / (data.ratioA + data.ratioB);
          return (data.ratioB - data.ratioA) * one === data.difference;
        }),
        ['Hiệu số phần bằng nhau là ' + (ratioB - ratioA) + ' phần.', 'Tìm giá trị một phần.', 'Nhân với tổng số phần.'],
        { knowledge: ['difference-ratio', 'divide-exact', 'multiply'], keyPoint: 'Hiệu thực tế ứng với hiệu số phần trên sơ đồ.', divisions: [{ dividend: difference, divisor: ratioB - ratioA, quotient: unit, remainder: 0 }] }
      );
    }
    const first = randomInt(8, 24, rng);
    const difference = randomInt(3, 10, rng);
    const second = first + difference;
    const third = first * 2;
    const total = first + second + third;
    const model = { first, second, third, difference, total };
    return makeQuestion(meta, model,
      variantText(meta, 'Ba nhóm có tất cả ' + total + ' vật. Nhóm B nhiều hơn nhóm A ' + difference + ' vật; nhóm C có số vật gấp đôi nhóm A. Nhóm A có bao nhiêu vật?', 'Tổng số cây ba tổ là ' + total + '. Tổ Hai hơn tổ Một ' + difference + ' cây, tổ Ba trồng gấp đôi tổ Một. Tổ Một trồng bao nhiêu cây?'),
      data => integer((data.total - data.difference) / 4),
      data => bruteForceInteger(1, data.total, candidate => candidate + (candidate + data.difference) + candidate * 2 === data.total),
      ['Coi số của nhóm A là một phần.', 'Nhóm B gồm một phần và phần hơn; nhóm C gồm hai phần.', 'Bớt phần hơn khỏi tổng rồi chia đều cho bốn phần.'],
      { knowledge: ['add', 'subtract', 'multiply', 'divide-exact', 'logic'], keyPoint: 'Biểu diễn các nhóm bằng cùng một phần giúp tìm được nhóm A.', divisions: [{ dividend: total - difference, divisor: 4, quotient: first, remainder: 0 }] }
    );
  };

  BUILDERS.fractionStory = function (meta, params, rng) {
    const grade = meta.grade;
    const denominator = pick(grade === 4 ? [4, 5, 6, 8, 10] : [4, 5, 8, 10, 20], rng);
    const firstNumerator = randomInt(1, Math.max(1, Math.floor(denominator / 3)), rng);
    const secondNumerator = randomInt(1, Math.max(1, denominator - firstNumerator - 1), rng);
    const total = denominator * randomInt(grade === 4 ? 8 : 15, grade === 4 ? 40 : 80, rng);
    const model = { denominator, firstNumerator, secondNumerator, total };
    if (params.mode === 'calculation') {
      if (grade === 4) {
        const denominatorPair = pick([[4, 6], [5, 8], [6, 10], [8, 12], [9, 12]], rng);
        const firstDenominator = denominatorPair[0];
        const secondDenominator = denominatorPair[1];
        const first = randomInt(2, firstDenominator - 1, rng);
        const second = randomInt(1, secondDenominator - 1, rng);
        const third = randomInt(1, first - 1, rng);
        const common = lcm(firstDenominator, secondDenominator);
        const commonNumerator = (first - third) * (common / firstDenominator) + second * (common / secondDenominator);
        const calcModel = { first, firstDenominator, second, secondDenominator, third, common, commonNumerator };
        return makeQuestion(meta, calcModel,
          'Tính và rút gọn: ' + first + '/' + firstDenominator + ' + ' + second + '/' + secondDenominator + ' − ' + third + '/' + firstDenominator + '.',
          data => rational(data.commonNumerator, data.common),
          data => {
            let commonUnit = 1;
            while (commonUnit % data.firstDenominator !== 0 || commonUnit % data.secondDenominator !== 0) commonUnit += 1;
            const remainingFirstUnits = (data.first - data.third) * (commonUnit / data.firstDenominator);
            const secondUnits = data.second * (commonUnit / data.secondDenominator);
            return rational(remainingFirstUnits + secondUnits, commonUnit);
          },
          ['Nhận ra có hai mẫu số khác nhau và tìm mẫu số chung.', 'Quy đồng rồi thực hiện đủ phép cộng và phép trừ; hai phân số cùng mẫu không triệt tiêu hoàn toàn.', 'Rút gọn phân số kết quả đến tối giản.'],
          { knowledge: ['fraction', 'add', 'subtract'], keyPoint: 'Phải quy đồng; thuật toán không sinh trường hợp hai phân số tự triệt tiêu.', inputHint: 'Ví dụ: 3/4' }
        );
      }
      const firstDenominator = pick([4, 5, 6, 8, 10], rng);
      let secondDenominator = pick([6, 8, 10, 12, 15], rng);
      if (secondDenominator === firstDenominator) secondDenominator = firstDenominator === 6 ? 10 : 6;
      const first = randomInt(2, firstDenominator - 1, rng);
      const second = randomInt(1, secondDenominator - 1, rng);
      const third = randomInt(1, first - 1, rng);
      const common = lcm(firstDenominator, secondDenominator);
      const commonNumerator = (first - third) * (common / firstDenominator) + second * (common / secondDenominator);
      const calcModel = { first, firstDenominator, second, secondDenominator, third, common, commonNumerator };
      return makeQuestion(meta, calcModel,
        'Tính và rút gọn: ' + first + '/' + firstDenominator + ' + ' + second + '/' + secondDenominator + ' − ' + third + '/' + firstDenominator + '.',
        data => rational(data.commonNumerator, data.common),
        data => {
          let commonUnit = 1;
          while (commonUnit % data.firstDenominator !== 0 || commonUnit % data.secondDenominator !== 0) commonUnit += 1;
          const firstUnits = data.first * (commonUnit / data.firstDenominator);
          const secondUnits = data.second * (commonUnit / data.secondDenominator);
          const removedUnits = data.third * (commonUnit / data.firstDenominator);
          return rational(firstUnits + secondUnits - removedUnits, commonUnit);
        },
        ['Tìm mẫu số chung của hai mẫu số khác nhau.', 'Quy đồng rồi thực hiện cả phép cộng và phép trừ.', 'Rút gọn kết quả đến phân số tối giản.'],
        { knowledge: ['fraction', 'add', 'subtract'], keyPoint: 'Không tính trực tiếp trên tử số khi hai mẫu số khác nhau.', inputHint: 'Ví dụ: 17/20' }
      );
    }
    if (params.mode === 'expression') {
      const denominators = shuffle([4, 5, 6, 8, 10, 12], rng).slice(0, 3);
      const firstDenominator = denominators[0];
      const secondDenominator = denominators[1];
      const thirdDenominator = denominators[2];
      const first = randomInt(1, firstDenominator - 1, rng);
      const second = randomInt(1, secondDenominator - 1, rng);
      const third = randomInt(1, Math.max(1, Math.floor(thirdDenominator / 3)), rng);
      const common = lcm(lcm(firstDenominator, secondDenominator), thirdDenominator);
      const commonNumerator = first * (common / firstDenominator) + second * (common / secondDenominator) - third * (common / thirdDenominator);
      if (commonNumerator <= 0) return null;
      const expressionModel = { first, firstDenominator, second, secondDenominator, third, thirdDenominator, common, commonNumerator };
      return makeQuestion(meta, expressionModel,
        'Tính và rút gọn: ' + first + '/' + firstDenominator + ' + ' + second + '/' + secondDenominator + ' − ' + third + '/' + thirdDenominator + '.',
        data => rational(data.commonNumerator, data.common),
        data => {
          let commonUnit = 1;
          while (commonUnit % data.firstDenominator !== 0 || commonUnit % data.secondDenominator !== 0 || commonUnit % data.thirdDenominator !== 0) commonUnit += 1;
          const positiveUnits = data.first * (commonUnit / data.firstDenominator) + data.second * (commonUnit / data.secondDenominator);
          const negativeUnits = data.third * (commonUnit / data.thirdDenominator);
          return rational(positiveUnits - negativeUnits, commonUnit);
        },
        ['Tìm mẫu số chung của ba phân số có mẫu khác nhau.', 'Quy đồng rồi thực hiện cộng, trừ tử số.', 'Rút gọn kết quả đến phân số tối giản và kiểm tra kết quả dương.'],
        { knowledge: ['fraction', 'add', 'subtract'], keyPoint: 'Không cộng hoặc trừ trực tiếp tử số khi các mẫu số khác nhau.', inputHint: 'Ví dụ: 17/20' }
      );
    }
    if (params.mode === 'inverse-total') {
      if (meta.difficulty === 'rat-kho') {
        const numeratorChoices = Array.from({ length: denominator - 1 }, (_, index) => index + 1).filter(value => gcd(value, denominator) === 1);
        const challengeFirstNumerator = pick(numeratorChoices, rng);
        let challengeSecondNumerator = pick(numeratorChoices, rng);
        if (challengeSecondNumerator === challengeFirstNumerator && numeratorChoices.length > 1) {
          challengeSecondNumerator = numeratorChoices[(numeratorChoices.indexOf(challengeFirstNumerator) + 1) % numeratorChoices.length];
        }
        const challengeTotal = denominator * denominator * randomInt(grade === 4 ? 3 : 5, grade === 4 ? 25 : 40, rng);
        const afterFirst = challengeTotal * (denominator - challengeFirstNumerator) / denominator;
        const remaining = afterFirst * (denominator - challengeSecondNumerator) / denominator;
        const inverseModel = { denominator, firstNumerator: challengeFirstNumerator, secondNumerator: challengeSecondNumerator, afterFirst, remaining, total: challengeTotal };
        return makeQuestion(meta, inverseModel,
          variantText(meta, 'Một kho dùng ' + challengeFirstNumerator + '/' + denominator + ' số hàng ban đầu. Sau đó kho dùng tiếp ' + challengeSecondNumerator + '/' + denominator + ' số hàng còn lại và còn ' + remaining + ' sản phẩm. Lúc đầu kho có bao nhiêu sản phẩm?', 'Sau lần thứ nhất dùng ' + challengeFirstNumerator + '/' + denominator + ' tổng ban đầu, lần thứ hai dùng ' + challengeSecondNumerator + '/' + denominator + ' phần còn lại, cửa hàng còn ' + remaining + ' sản phẩm. Tìm số hàng ban đầu.'),
          data => integer(data.remaining * data.denominator / (data.denominator - data.secondNumerator) * data.denominator / (data.denominator - data.firstNumerator)),
          data => {
            const step = data.denominator * data.denominator;
            for (let candidate = step; candidate <= 100000; candidate += step) {
              const afterOne = candidate * (data.denominator - data.firstNumerator) / data.denominator;
              const afterTwo = afterOne * (data.denominator - data.secondNumerator) / data.denominator;
              if (afterTwo === data.remaining) return integer(candidate);
            }
            return { kind: 'invalid' };
          },
          ['Làm ngược lần dùng thứ hai để tìm lượng còn sau lần thứ nhất.', 'Làm ngược lần dùng thứ nhất để tìm số lượng ban đầu.', 'Tính xuôi hai lần, lưu ý lần hai tính trên phần còn lại, để kiểm tra.'],
          { knowledge: ['fraction', 'subtract', 'divide-exact', 'multiply', 'logic'], keyPoint: 'Hai phân số có cơ sở khác nhau: lần đầu theo tổng ban đầu, lần sau theo phần còn lại.' }
        );
      }
      const remainingNumerator = denominator - firstNumerator - secondNumerator;
      if (remainingNumerator <= 0) return null;
      const remaining = total * remainingNumerator / denominator;
      const inverseModel = { denominator, firstNumerator, secondNumerator, remainingNumerator, remaining, total };
      return makeQuestion(meta, inverseModel,
        variantText(meta, 'Một kho đã dùng ' + firstNumerator + '/' + denominator + ' số hàng vào buổi sáng và ' + secondNumerator + '/' + denominator + ' vào buổi chiều. Kho còn ' + remaining + ' sản phẩm. Lúc đầu kho có bao nhiêu sản phẩm?', 'Sau khi bán lần lượt ' + firstNumerator + '/' + denominator + ' và ' + secondNumerator + '/' + denominator + ' tổng số hàng, cửa hàng còn ' + remaining + ' sản phẩm. Tìm số hàng ban đầu.'),
        data => integer(data.remaining * data.denominator / data.remainingNumerator),
        data => bruteForceInteger(data.remaining, POLICIES[grade].maxAnswer, candidate => candidate % data.denominator === 0 && candidate * data.remainingNumerator / data.denominator === data.remaining),
        ['Cộng hai phân số đã dùng rồi tìm phân số biểu thị phần còn lại.', 'Tìm giá trị của một phần bằng nhau từ số lượng còn lại.', 'Từ giá trị một phần tìm toàn bộ và thay lại để kiểm tra.'],
        { knowledge: ['fraction', 'subtract', 'divide-exact', 'multiply'], keyPoint: 'Phần còn lại không phải toàn bộ; phải tìm xem nó chiếm bao nhiêu phần.', divisions: [{ dividend: remaining * denominator, divisor: remainingNumerator, quotient: total, remainder: 0 }] }
      );
    }
    const used = total * (firstNumerator + secondNumerator) / denominator;
    return makeQuestion(meta, model,
      variantText(meta, 'Một kho có ' + total + ' sản phẩm. Buổi sáng dùng ' + firstNumerator + '/' + denominator + ' số sản phẩm, buổi chiều dùng tiếp ' + secondNumerator + '/' + denominator + ' số sản phẩm ban đầu. Kho còn bao nhiêu sản phẩm?', 'Có ' + total + ' lít nước. Lần đầu dùng ' + firstNumerator + '/' + denominator + ' lượng nước, lần sau dùng ' + secondNumerator + '/' + denominator + ' lượng ban đầu. Còn lại bao nhiêu lít?'),
      data => integer(data.total - data.total * (data.firstNumerator + data.secondNumerator) / data.denominator),
      data => {
        const onePart = data.total / data.denominator;
        return integer((data.denominator - data.firstNumerator - data.secondNumerator) * onePart);
      },
      ['Cộng hai phân số biểu thị phần đã dùng.', 'Tìm phân số phần còn lại.', 'Tính giá trị phần còn lại của tổng.'],
      { knowledge: ['fraction', 'add', 'subtract', 'divide-exact', 'multiply'], keyPoint: 'Cả hai lần đều tính theo số lượng ban đầu.', unit: meta.variant ? 'lít' : 'sản phẩm', intermediateNumbers: [used], divisions: [{ dividend: total, divisor: denominator, quotient: total / denominator, remainder: 0 }] }
    );
  };

  BUILDERS.planCompare = function (meta, params, rng) {
    const grade = meta.grade;
    const daysA = randomInt(3, 6, rng);
    const perDayA = randomInt(grade === 4 ? 25 : 40, grade === 4 ? 90 : 140, rng);
    const daysB = randomInt(3, 6, rng);
    const perDayB = randomInt(grade === 4 ? 25 : 40, grade === 4 ? 90 : 140, rng);
    if (daysA * perDayA === daysB * perDayB) return null;
    const model = { daysA, perDayA, daysB, perDayB };
    return makeQuestion(meta, model,
      variantText(meta, 'Kế hoạch A làm ' + perDayA + ' sản phẩm mỗi ngày trong ' + daysA + ' ngày. Kế hoạch B làm ' + perDayB + ' sản phẩm mỗi ngày trong ' + daysB + ' ngày. Tổng sản lượng của hai kế hoạch chênh nhau bao nhiêu sản phẩm?', 'Đội A làm việc ' + daysA + ' ngày, mỗi ngày ' + perDayA + ' sản phẩm; đội B làm ' + daysB + ' ngày, mỗi ngày ' + perDayB + ' sản phẩm. Hiệu sản lượng hai đội là bao nhiêu?'),
      data => integer(Math.abs(data.daysA * data.perDayA - data.daysB * data.perDayB)),
      data => {
        const planA = Array.from({ length: data.daysA }, () => data.perDayA).reduce((sum, value) => sum + value, 0);
        const planB = Array.from({ length: data.daysB }, () => data.perDayB).reduce((sum, value) => sum + value, 0);
        return integer(Math.abs(planA - planB));
      },
      ['Tính tổng sản lượng của từng kế hoạch.', 'Lấy tổng lớn trừ tổng bé.'],
      { knowledge: ['multiply', 'subtract', 'logic'], keyPoint: 'Không so sánh năng suất một ngày; phải so sánh tổng của cả kế hoạch.' }
    );
  };

  BUILDERS.totalDifference = function (meta, params, rng) {
    const small = randomInt(25, 180, rng);
    const difference = randomInt(10, 90, rng);
    const large = small + difference;
    const total = small + large;
    if (params.mode === 'hidden-total') {
      const added = randomInt(5, 20, rng);
      const moved = randomInt(2, 10, rng);
      const finalSmall = small + added + moved;
      const finalLarge = large - moved;
      if (finalLarge <= finalSmall) return null;
      const shownTotal = finalSmall + finalLarge;
      const shownDifference = finalLarge - finalSmall;
      const model = { small, large, added, moved, finalSmall, finalLarge, shownTotal, shownDifference };
      return makeQuestion(meta, model,
        variantText(meta, 'Kho bé được nhập thêm ' + added + ' sản phẩm từ bên ngoài, rồi nhận chuyển ' + moved + ' sản phẩm từ kho lớn. Lúc này hai kho có tổng ' + shownTotal + ' sản phẩm và kho lớn hơn kho bé ' + shownDifference + ' sản phẩm. Trước các thay đổi, kho bé có bao nhiêu sản phẩm?', 'Số bé được cộng thêm ' + added + ', sau đó nhận tiếp ' + moved + ' đơn vị chuyển từ số lớn. Khi ấy tổng hai số là ' + shownTotal + ' và hiệu là ' + shownDifference + '. Tìm số bé ban đầu.'),
        data => integer((data.shownTotal - data.shownDifference) / 2 - data.added - data.moved),
        data => bruteForceInteger(0, data.shownTotal, candidate => {
          const afterSmall = candidate + data.added + data.moved;
          const afterLarge = data.shownTotal - afterSmall;
          return afterLarge - afterSmall === data.shownDifference;
        }),
        ['Dùng tổng và hiệu sau thay đổi để tìm số của kho bé lúc sau.', 'Làm ngược phần chuyển từ kho lớn sang kho bé.', 'Trừ tiếp phần nhập từ bên ngoài để tìm số ban đầu rồi diễn lại toàn bộ thay đổi.'],
        { knowledge: ['sum-difference', 'add', 'subtract', 'divide-exact', 'logic'], keyPoint: 'Phải giải trạng thái sau thay đổi trước rồi mới lần ngược hai thao tác.', divisions: [{ dividend: shownTotal - shownDifference, divisor: 2, quotient: finalSmall, remainder: 0 }] }
      );
    }
    const model = { small, difference, large, total };
    return makeQuestion(meta, model,
      variantText(meta, 'Hai đội trồng được tổng cộng ' + total + ' cây, đội A nhiều hơn đội B ' + difference + ' cây. Đội B trồng được bao nhiêu cây?', 'Hai số có tổng ' + total + ' và hiệu ' + difference + '. Tìm số bé.'),
      data => integer((data.total - data.difference) / 2),
      data => bruteForceInteger(0, data.total, candidate => candidate + (candidate + data.difference) === data.total),
      ['Lấy tổng trừ hiệu.', 'Chia phần còn lại thành hai phần bằng nhau.'],
      { knowledge: ['sum-difference', 'subtract', 'divide-exact'], keyPoint: 'Số bé bằng (tổng − hiệu) : 2.', divisions: [{ dividend: total - difference, divisor: 2, quotient: small, remainder: 0 }] }
    );
  };

  BUILDERS.ratioProblem = function (meta, params, rng) {
    const ratioA = randomInt(2, 4, rng);
    const ratioB = ratioA + randomInt(1, 3, rng);
    const unit = randomInt(8, 45, rng);
    const small = ratioA * unit;
    const large = ratioB * unit;
    const total = small + large;
    const difference = large - small;
    if (params.mode === 'changed-ratio') {
      const moved = unit;
      const afterSmall = small + moved;
      const afterLarge = large - moved;
      const model = { ratioA, ratioB, unit, small, large, moved, afterSmall, afterLarge, total };
      return makeQuestion(meta, model,
        variantText(meta, 'Hai kho có số hàng theo tỉ lệ ' + ratioA + ' : ' + ratioB + '. Chuyển ' + moved + ' sản phẩm từ kho lớn sang kho bé thì kho bé có ' + afterSmall + ' sản phẩm. Ban đầu hai kho có tất cả bao nhiêu sản phẩm?', 'Số của hai nhóm theo tỉ lệ ' + ratioA + ' : ' + ratioB + '. Sau khi chuyển ' + moved + ' đơn vị từ nhóm lớn sang nhóm bé, nhóm bé có ' + afterSmall + '. Tổng ban đầu là bao nhiêu?'),
        data => integer(((data.afterSmall - data.moved) / data.ratioA) * (data.ratioA + data.ratioB)),
        data => bruteForceInteger(1, POLICIES[meta.grade].maxAnswer, candidate => {
          if (candidate % (data.ratioA + data.ratioB) !== 0) return false;
          const one = candidate / (data.ratioA + data.ratioB);
          return data.ratioA * one + data.moved === data.afterSmall;
        }),
        ['Làm ngược việc chuyển để tìm số ban đầu của nhóm bé.', 'Số nhóm bé ứng với ' + ratioA + ' phần; tìm một phần.', 'Nhân một phần với tổng số phần.'],
        { knowledge: ['sum-ratio', 'add', 'subtract', 'divide-exact', 'multiply'], keyPoint: 'Việc chuyển không làm thay đổi tổng nhưng làm thay đổi số của từng nhóm.', divisions: [{ dividend: small, divisor: ratioA, quotient: unit, remainder: 0 }] }
      );
    }
    const model = { ratioA, ratioB, unit, small, large, total, difference };
    if (params.mode === 'difference-ratio') {
      return makeQuestion(meta, model,
        variantText(meta, 'Số cây của hai đội theo tỉ lệ ' + ratioA + ' : ' + ratioB + '. Đội thứ hai trồng nhiều hơn đội thứ nhất ' + difference + ' cây. Đội thứ nhất trồng bao nhiêu cây?', 'Hiệu của hai số là ' + difference + ', tỉ số của số bé và số lớn là ' + ratioA + '/' + ratioB + '. Tìm số bé.'),
        data => integer((data.difference / (data.ratioB - data.ratioA)) * data.ratioA),
        data => bruteForceInteger(1, data.total, candidate => {
          const possibleLarge = candidate + data.difference;
          return candidate * data.ratioB === possibleLarge * data.ratioA;
        }),
        ['Hiệu số phần là ' + (ratioB - ratioA) + ' phần.', 'Tìm giá trị một phần.', 'Nhân với số phần của số bé.'],
        { knowledge: ['difference-ratio', 'divide-exact', 'multiply'], keyPoint: 'Hiệu thực tế ứng với hiệu số phần.', divisions: [{ dividend: difference, divisor: ratioB - ratioA, quotient: unit, remainder: 0 }] }
      );
    }
    return makeQuestion(meta, model,
      variantText(meta, 'Hai kho có tất cả ' + total + ' sản phẩm, số hàng kho bé và kho lớn theo tỉ lệ ' + ratioA + ' : ' + ratioB + '. Kho bé có bao nhiêu sản phẩm?', 'Tổng hai số là ' + total + ', tỉ số là ' + ratioA + ' : ' + ratioB + '. Tìm số bé.'),
      data => integer((data.total / (data.ratioA + data.ratioB)) * data.ratioA),
      data => bruteForceInteger(1, data.total, candidate => {
        const possibleLarge = data.total - candidate;
        return candidate * data.ratioB === possibleLarge * data.ratioA;
      }),
      ['Tìm tổng số phần bằng nhau.', 'Tìm giá trị một phần.', 'Nhân với số phần của số bé.'],
      { knowledge: ['sum-ratio', 'divide-exact', 'multiply'], keyPoint: 'Tổng thực tế ứng với tổng số phần.', divisions: [{ dividend: total, divisor: ratioA + ratioB, quotient: unit, remainder: 0 }] }
    );
  };

  BUILDERS.averageProblem = function (meta, params, rng) {
    const count = randomInt(3, 5, rng);
    const values = Array.from({ length: count - 1 }, () => randomInt(20, meta.grade === 4 ? 120 : 240, rng));
    const missing = randomInt(25, meta.grade === 4 ? 120 : 240, rng);
    const total = values.reduce((sum, value) => sum + value, 0) + missing;
    const remainder = total % count;
    if (remainder !== 0) values[0] += count - remainder;
    const adjustedTotal = values.reduce((sum, value) => sum + value, 0) + missing;
    const average = adjustedTotal / count;
    const model = { count, values, missing, average, total: adjustedTotal };
    return makeQuestion(meta, model,
      variantText(meta, 'Trung bình cộng của ' + count + ' số là ' + average + '. ' + (count - 1) + ' số đã biết là ' + values.join(', ') + '. Số còn lại là bao nhiêu?', 'Có ' + count + ' ngày đạt trung bình ' + average + ' sản phẩm mỗi ngày. Sản lượng ' + (count - 1) + ' ngày đầu lần lượt là ' + values.join(', ') + '. Ngày cuối làm được bao nhiêu sản phẩm?'),
      data => integer(data.average * data.count - data.values.reduce((sum, value) => sum + value, 0)),
      data => bruteForceInteger(0, POLICIES[meta.grade].maxAnswer, candidate => (data.values.reduce((sum, value) => sum + value, 0) + candidate) / data.count === data.average),
      ['Tìm tổng của tất cả các số bằng trung bình nhân số lượng.', 'Trừ tổng các số đã biết.'],
      { knowledge: ['average', 'multiply', 'add', 'subtract'], keyPoint: 'Trung bình cộng không phải số còn thiếu; phải tìm tổng trước.' }
    );
  };

  BUILDERS.motionStory = function (meta, params, rng) {
    const speedA = pick([30, 36, 40, 45, 48, 50, 60], rng);
    let speedB = pick([24, 30, 36, 40, 45], rng);
    if (speedB === speedA) speedB = speedA > 36 ? 30 : 45;
    const hoursA = randomInt(2, 4, rng);
    const hoursB = randomInt(2, 4, rng);
    if (params.mode === 'two-legs') {
      const model = { speedA, speedB, hoursA, hoursB };
      return makeQuestion(meta, model,
        variantText(meta, 'Một xe đi chặng đầu với vận tốc ' + speedA + ' km/giờ trong ' + hoursA + ' giờ, chặng sau với vận tốc ' + speedB + ' km/giờ trong ' + hoursB + ' giờ. Tổng quãng đường là bao nhiêu?', 'Hành trình gồm ' + hoursA + ' giờ đi với vận tốc ' + speedA + ' km/giờ và ' + hoursB + ' giờ đi với vận tốc ' + speedB + ' km/giờ. Tính độ dài cả hành trình.'),
        data => integer(data.speedA * data.hoursA + data.speedB * data.hoursB),
        data => {
          const timeline = [];
          for (let hour = 0; hour < data.hoursA; hour += 1) timeline.push(data.speedA);
          for (let hour = 0; hour < data.hoursB; hour += 1) timeline.push(data.speedB);
          return integer(timeline.reduce((sum, distance) => sum + distance, 0));
        },
        ['Tính quãng đường từng chặng.', 'Cộng hai quãng đường.'],
        { knowledge: ['motion', 'multiply', 'add'], keyPoint: 'Không lấy trung bình hai vận tốc khi thời gian hai chặng khác nhau.', unit: 'km' }
      );
    }
    if (params.mode === 'meet') {
      const hours = randomInt(2, 5, rng);
      const distance = (speedA + speedB) * hours;
      const model = { speedA, speedB, hours, distance };
      return makeQuestion(meta, model,
        variantText(meta, 'Hai xe xuất phát cùng lúc từ hai điểm cách nhau ' + distance + ' km và đi ngược chiều với vận tốc ' + speedA + ' km/giờ và ' + speedB + ' km/giờ. Sau bao lâu hai xe gặp nhau?', 'Hai xe đi về phía nhau trên quãng đường ' + distance + ' km. Vận tốc lần lượt là ' + speedA + ' km/giờ và ' + speedB + ' km/giờ. Thời gian gặp nhau là bao nhiêu giờ?'),
        data => integer(data.distance / (data.speedA + data.speedB)),
        data => bruteForceInteger(1, 24, time => data.speedA * time + data.speedB * time === data.distance),
        ['Tìm tổng vận tốc hai xe.', 'Lấy khoảng cách ban đầu chia tổng vận tốc.'],
        { knowledge: ['motion', 'add', 'divide-exact'], keyPoint: 'Mỗi giờ khoảng cách giảm bằng tổng quãng đường hai xe đi được.', unit: 'giờ', divisions: [{ dividend: distance, divisor: speedA + speedB, quotient: hours, remainder: 0 }] }
      );
    }
    if (params.mode === 'find-time') {
      const firstHours = randomInt(1, 3, rng);
      const secondHours = randomInt(2, 5, rng);
      const distance = speedA * firstHours + speedB * secondHours;
      const totalHours = firstHours + secondHours;
      const model = { firstSpeed: speedA, secondSpeed: speedB, firstHours, secondHours, distance, totalHours };
      return makeQuestion(meta, model, 'Một xe đi chặng đầu ' + firstHours + ' giờ với vận tốc ' + speedA + ' km/giờ. Chặng sau xe đi với vận tốc ' + speedB + ' km/giờ. Cả hành trình dài ' + distance + ' km. Tổng thời gian xe chạy là bao nhiêu giờ?',
        data => integer(data.firstHours + (data.distance - data.firstSpeed * data.firstHours) / data.secondSpeed),
        data => bruteForceInteger(data.firstHours + 1, 12, candidate => data.firstSpeed * data.firstHours + data.secondSpeed * (candidate - data.firstHours) === data.distance),
        ['Tính quãng đường của chặng đầu.', 'Lấy tổng quãng đường trừ chặng đầu rồi chia cho vận tốc chặng sau.', 'Cộng thời gian hai chặng và thay lại để kiểm tra toàn hành trình.'],
        { knowledge: ['motion', 'multiply', 'subtract', 'divide-exact', 'add'], keyPoint: 'Cần tách quãng đường chặng đầu trước khi tìm thời gian chặng sau.', unit: 'giờ', divisions: [{ dividend: distance - speedA * firstHours, divisor: speedB, quotient: secondHours, remainder: 0 }] }
      );
    }
    if (params.mode === 'catch-up') {
      let configuration = null;
      for (let attempt = 0; attempt < 40; attempt += 1) {
        const slow = randomInt(4, 9, rng) * 6, fast = slow + randomInt(2, 6, rng) * 6;
        const headStart = randomInt(3, 7, rng), rest = randomInt(1, Math.min(3, headStart - 1), rng);
        const catchHours = slow * (headStart - rest) / (fast - slow);
        if (Number.isInteger(catchHours) && catchHours >= 1 && catchHours <= 12) { configuration = { slow, fast, headStart, rest, catchHours }; break; }
      }
      if (!configuration) return null;
      const model = Object.assign({}, configuration);
      return makeQuestion(meta, model,
        variantText(meta, 'Xe A chạy ' + configuration.slow + ' km/giờ và xuất phát trước xe B ' + configuration.headStart + ' giờ. Khi xe B xuất phát với vận tốc ' + configuration.fast + ' km/giờ, xe A còn nghỉ tổng cộng ' + configuration.rest + ' giờ rồi mới tiếp tục đi. Sau bao nhiêu giờ kể từ lúc B xuất phát thì B đuổi kịp A?', 'Một xe đi trước ' + configuration.headStart + ' giờ với vận tốc ' + configuration.slow + ' km/giờ. Xe sau chạy ' + configuration.fast + ' km/giờ; trong thời gian đuổi, xe trước dừng nghỉ ' + configuration.rest + ' giờ. Tính thời gian xe sau cần để bắt kịp.'),
        data => integer(data.slow * (data.headStart - data.rest) / (data.fast - data.slow)),
        data => bruteForceInteger(1, 12, time => data.fast * time === data.slow * (data.headStart + time - data.rest)),
        ['Tính quãng đường xe trước tạo ra trong thời gian đi trước, có xét thời gian nghỉ.', 'Tìm hiệu vận tốc khi cả hai xe cùng chạy.', 'Dùng phương trình quãng đường của hai xe để tìm thời gian rồi thay lại kiểm tra.'],
        { knowledge: ['motion', 'add', 'subtract', 'multiply', 'divide-exact', 'logic'], keyPoint: 'Thời gian nghỉ làm giảm quãng đường của xe đi trước, không được bỏ qua.', unit: 'giờ', divisions: [{ dividend: configuration.slow * (configuration.headStart - configuration.rest), divisor: configuration.fast - configuration.slow, quotient: configuration.catchHours, remainder: 0 }] }
      );
    }
    const knownHours = randomInt(1, 3, rng);
    const unknownHours = randomInt(2, 4, rng);
    const rest = randomInt(1, 2, rng);
    const distance = speedB * knownHours + speedA * unknownHours;
    const totalElapsed = knownHours + unknownHours + rest;
    const model = { knownSpeed: speedB, unknownSpeed: speedA, knownHours, unknownHours, distance, rest, totalElapsed };
    return makeQuestion(meta, model,
      variantText(meta, 'Một xe đi quãng đường ' + distance + ' km trong ' + totalElapsed + ' giờ, gồm ' + rest + ' giờ nghỉ. Chặng đầu xe chạy ' + knownHours + ' giờ với vận tốc ' + speedB + ' km/giờ; thời gian chạy còn lại thuộc chặng hai. Vận tốc chặng hai là bao nhiêu?', 'Hành trình dài ' + distance + ' km. Xe đi chặng đầu ' + knownHours + ' giờ với vận tốc ' + speedB + ' km/giờ, nghỉ ' + rest + ' giờ; cả hành trình kéo dài ' + totalElapsed + ' giờ. Tìm vận tốc ở chặng cuối.'),
      data => integer((data.distance - data.knownSpeed * data.knownHours) / (data.totalElapsed - data.rest - data.knownHours)),
      data => bruteForceInteger(1, 200, speed => data.knownSpeed * data.knownHours + speed * data.unknownHours === data.distance),
      ['Trừ thời gian nghỉ và thời gian chặng đầu để tìm thời gian chặng hai.', 'Tính quãng đường chặng đầu rồi trừ khỏi tổng quãng đường.', 'Lấy quãng đường còn lại chia thời gian chặng hai và kiểm tra toàn hành trình.'],
      { knowledge: ['motion', 'add', 'subtract', 'multiply', 'divide-exact'], keyPoint: 'Phải tách đúng cả thời gian và quãng đường của từng chặng.', unit: 'km/giờ', divisions: [{ dividend: distance - speedB * knownHours, divisor: unknownHours, quotient: speedA, remainder: 0 }] }
    );
  };

  BUILDERS.percentStory = function (meta, params, rng) {
    const rate = pick([10, 20, 25, 40, 50], rng);
    const base = randomInt(4, 40, rng) * 100;
    const part = base * rate / 100;
    const model = { rate, base, part };
    if (params.mode === 'discount') {
      return makeQuestion(meta, model, 'Một món hàng giá ' + base + ' nghìn đồng được giảm ' + rate + '%. Giá sau khi giảm là bao nhiêu nghìn đồng?',
        data => integer(data.base - data.base * data.rate / 100),
        data => {
          const onePercent = data.base / 100;
          return integer(Array.from({ length: 100 - data.rate }, () => onePercent).reduce((sum, value) => sum + value, 0));
        },
        ['Tìm số tiền được giảm.', 'Lấy giá ban đầu trừ số tiền giảm.'],
        { knowledge: ['percent', 'multiply', 'divide-exact', 'subtract'], keyPoint: 'Giá sau giảm ứng với ' + (100 - rate) + '% giá ban đầu.', unit: 'nghìn đồng', divisions: [{ dividend: base, divisor: 100, quotient: base / 100, remainder: 0 }] }
      );
    }
    if (params.mode === 'part-left') {
      let secondRate = pick([10, 20, 25, 30], rng);
      if (rate + secondRate >= 90) secondRate = 10;
      const leftRate = 100 - rate - secondRate;
      const left = base * leftRate / 100;
      const partModel = { rate, secondRate, leftRate, base, left };
      return makeQuestion(meta, partModel,
        variantText(meta, 'Một kho xuất buổi sáng ' + rate + '% số hàng và buổi chiều ' + secondRate + '% số hàng ban đầu. Kho còn ' + left + ' sản phẩm. Lúc đầu kho có bao nhiêu sản phẩm?', 'Sau khi dùng ' + rate + '% rồi dùng tiếp ' + secondRate + '% tổng ban đầu, còn lại ' + left + ' sản phẩm. Tìm số lượng ban đầu.'),
        data => integer(data.left * 100 / data.leftRate),
        data => bruteForceInteger(data.left, POLICIES[5].maxAnswer, candidate => candidate % 100 === 0 && candidate * data.leftRate / 100 === data.left),
        ['Tìm tỉ lệ phần trăm còn lại.', 'Từ giá trị phần còn lại tìm toàn bộ.'],
        { knowledge: ['percent', 'add', 'subtract', 'divide-exact', 'multiply'], keyPoint: 'Cả hai lần đều tính theo số ban đầu.', unit: 'sản phẩm', divisions: [{ dividend: left * 100, divisor: leftRate, quotient: base, remainder: 0 }] }
      );
    }
    if (params.mode === 'find-base') {
      const removedRate = pick([15, 20, 25, 30, 35, 40].filter(value => value !== rate), rng);
      const removed = base * removedRate / 100;
      const added = randomInt(4, 24, rng) * 10;
      const finalValue = base - removed + added;
      const targetModel = { rate, base, part, removedRate, removed, added, finalValue };
      return makeQuestion(meta, targetModel, rate + '% số sách ban đầu của một thư viện là ' + part + ' cuốn. Thư viện cho mượn ' + removedRate + '% số sách ban đầu rồi nhận thêm ' + added + ' cuốn. Hiện thư viện có bao nhiêu cuốn sách?',
        data => integer((data.part * 100 / data.rate) - (data.part * 100 / data.rate) * data.removedRate / 100 + data.added),
        data => {
          const initial = bruteForceInteger(0, POLICIES[5].maxAnswer, candidate => candidate * data.rate / 100 === data.part);
          if (initial.kind !== 'integer') return { kind: 'invalid' };
          const lent = Array.from({ length: data.removedRate }, () => initial.value / 100).reduce((sum, value) => sum + value, 0);
          return integer(initial.value - lent + data.added);
        },
        ['Từ giá trị ' + rate + '% tìm tổng số sách ban đầu.', 'Tính ' + removedRate + '% số sách ban đầu đã cho mượn.', 'Lấy số ban đầu trừ số cho mượn rồi cộng số mới nhận; tính xuôi lại để kiểm tra.'],
        { knowledge: ['percent', 'multiply', 'divide-exact', 'subtract', 'add', 'logic'], keyPoint: 'Cả hai tỉ lệ đều tính theo số ban đầu; số nhận thêm là một lượng cố định.', unit: 'cuốn sách', divisions: [{ dividend: part * 100, divisor: rate, quotient: base, remainder: 0 }, { dividend: base * removedRate, divisor: 100, quotient: removed, remainder: 0 }] }
      );
    }
    if (params.mode === 'successive') {
      const firstRate = pick([10, 20, 25], rng);
      const secondRate = pick([10, 20], rng);
      const afterFirst = base * (100 - firstRate) / 100;
      const finalValue = afterFirst * (100 - secondRate) / 100;
      const successModel = { base, firstRate, secondRate, afterFirst, finalValue };
      return makeQuestion(meta, successModel, 'Một món hàng sau khi giảm ' + firstRate + '%, rồi giảm tiếp ' + secondRate + '% trên giá mới thì còn ' + finalValue + ' nghìn đồng. Giá niêm yết ban đầu là bao nhiêu nghìn đồng?',
        data => integer(data.finalValue * 100 / (100 - data.secondRate) * 100 / (100 - data.firstRate)),
        data => bruteForceInteger(data.finalValue, 10000, candidate => candidate * (100 - data.firstRate) / 100 * (100 - data.secondRate) / 100 === data.finalValue),
        ['Làm ngược lần giảm thứ hai để tìm giá sau lần giảm thứ nhất.', 'Từ giá sau lần giảm thứ nhất làm ngược tiếp để tìm giá niêm yết.', 'Tính xuôi hai lần giảm để kiểm tra.'],
        { knowledge: ['percent', 'multiply', 'divide-exact', 'subtract', 'logic'], keyPoint: 'Hai lần giảm có hai cơ sở khác nhau nên không được cộng hai tỉ lệ.', unit: 'nghìn đồng', intermediateNumbers: [afterFirst] }
      );
    }
    const increase = pick([10, 20, 25], rng);
    const discount = pick([10, 20], rng);
    const afterIncrease = base * (100 + increase) / 100;
    const after = afterIncrease * (100 - discount) / 100;
    const reverseModel = { base, increase, discount, afterIncrease, after };
    return makeQuestion(meta, reverseModel,
      variantText(meta, 'Một sản phẩm được tăng giá ' + increase + '%, sau đó giảm ' + discount + '% trên giá đã tăng thì còn ' + after + ' nghìn đồng. Giá ban đầu là bao nhiêu nghìn đồng?', 'Sau khi giá gốc tăng ' + increase + '% rồi cửa hàng giảm tiếp ' + discount + '% trên mức giá mới, khách trả ' + after + ' nghìn đồng. Tìm giá gốc.'),
      data => integer(data.after * 100 / (100 - data.discount) * 100 / (100 + data.increase)),
      data => bruteForceInteger(0, 10000, candidate => candidate * (100 + data.increase) / 100 * (100 - data.discount) / 100 === data.after),
      ['Làm ngược lần giảm để tìm mức giá sau khi tăng.', 'Làm ngược lần tăng để tìm giá gốc.', 'Tính xuôi cả hai thay đổi để kiểm tra.'],
      { knowledge: ['percent', 'multiply', 'divide-exact', 'subtract', 'logic'], keyPoint: 'Tỉ lệ giảm tính trên giá sau tăng, không tính trên giá gốc.', unit: 'nghìn đồng', intermediateNumbers: [afterIncrease] }
    );
  };

  BUILDERS.combinationStory = function (meta, params, rng) {
    const groupConfiguration = pick([[4, 6, 10], [6, 8, 9], [8, 10, 12], [5, 8, 12], [6, 10, 15]], rng);
    const firstGroup = groupConfiguration[0];
    const secondGroup = groupConfiguration[1];
    const thirdGroup = groupConfiguration[2];
    const common = lcm(lcm(firstGroup, secondGroup), thirdGroup);
    const multiplier = randomInt(2, 6, rng);
    const lower = common * multiplier - randomInt(1, Math.max(1, common - 1), rng);
    const answer = common * multiplier;
    const upper = answer + common - 1;
    const model = { firstGroup, secondGroup, thirdGroup, common, lower, upper, answer };
    return makeQuestion(meta, model,
      variantText(meta, 'Một số học sinh nằm trong khoảng từ ' + (lower + 1) + ' đến ' + upper + '. Xếp hàng ' + firstGroup + ' bạn, ' + secondGroup + ' bạn hoặc ' + thirdGroup + ' bạn đều vừa đủ. Có bao nhiêu học sinh?', 'Số sản phẩm lớn hơn ' + lower + ' nhưng không vượt quá ' + upper + '. Đóng gói mỗi hộp ' + firstGroup + ', ' + secondGroup + ' hoặc ' + thirdGroup + ' sản phẩm đều không thừa. Tìm số sản phẩm.'),
      data => integer(Math.ceil((data.lower + 1) / data.common) * data.common),
      data => bruteForceInteger(data.lower + 1, data.upper, candidate => candidate % data.firstGroup === 0 && candidate % data.secondGroup === 0 && candidate % data.thirdGroup === 0),
      ['Tìm các số đồng thời chia hết cho hai cách xếp đầu tiên.', 'Giữ lại những số cũng chia hết cho cách xếp thứ ba.', 'Chọn số duy nhất nằm trong khoảng đã cho và kiểm tra cả ba phép chia.'],
      { knowledge: ['logic', 'divide-exact', 'multiply'], keyPoint: 'Đáp án phải thỏa mãn đồng thời cả ba cách xếp.', divisions: [{ dividend: answer, divisor: firstGroup, quotient: answer / firstGroup, remainder: 0 }, { dividend: answer, divisor: secondGroup, quotient: answer / secondGroup, remainder: 0 }, { dividend: answer, divisor: thirdGroup, quotient: answer / thirdGroup, remainder: 0 }] }
    );
  };

  BUILDERS.diversityEntry = function (meta, params, rng) {
    const mode = params.mode;

    if (mode === 'g3-book-chain') {
      const firstDay = randomInt(12, 35, rng), secondDay = firstDay * 2, lessThird = randomInt(4, 12, rng), thirdDay = secondDay - lessThird;
      const remaining = randomInt(20, 80, rng), totalPages = firstDay + secondDay + thirdDay + remaining;
      const model = { firstDay, secondDay, lessThird, thirdDay, remaining, totalPages, challengeDepth: 3 };
      return makeQuestion(meta, model,
        'Một cuốn sách có ' + totalPages + ' trang. Ngày đầu An đọc ' + firstDay + ' trang; ngày thứ hai đọc gấp đôi ngày đầu; ngày thứ ba đọc ít hơn ngày thứ hai ' + lessThird + ' trang. An còn chưa đọc bao nhiêu trang?',
        data => integer(data.totalPages - data.firstDay - data.firstDay * 2 - (data.firstDay * 2 - data.lessThird)),
        data => bruteForceInteger(0, data.totalPages, value => data.firstDay + data.secondDay + data.thirdDay + value === data.totalPages),
        ['Tìm số trang đọc ngày thứ hai.', 'Từ ngày thứ hai tìm số trang đọc ngày thứ ba.', 'Cộng ba ngày rồi bớt khỏi số trang của cuốn sách.', 'Cộng phần đã đọc và chưa đọc để kiểm tra đúng tổng.'],
        { knowledge: ['add', 'subtract', 'multiply', 'logic'], keyPoint: 'Dữ kiện ngày thứ ba phụ thuộc vào ngày thứ hai, không phụ thuộc trực tiếp vào ngày đầu.', reasoningSteps: 3, unit: 'trang' }
      );
    }
    if (mode === 'g3-repack-reverse') {
      const boxSize = randomInt(5, 9, rng), soldBoxes = randomInt(3, 8, rng), soldLoose = randomInt(2, boxSize - 1, rng);
      const newBagSize = randomInt(4, 9, rng), newBags = randomInt(8, 18, rng), remaining = newBagSize * newBags;
      const initial = soldBoxes * boxSize + soldLoose + remaining;
      const model = { boxSize, soldBoxes, soldLoose, newBagSize, newBags, remaining, initial, challengeDepth: 3 };
      return makeQuestion(meta, model,
        'Một cửa hàng bán ' + soldBoxes + ' hộp bánh, mỗi hộp ' + boxSize + ' chiếc, rồi bán lẻ thêm ' + soldLoose + ' chiếc. Số bánh còn lại đóng vừa đủ ' + newBags + ' túi, mỗi túi ' + newBagSize + ' chiếc. Lúc đầu cửa hàng có bao nhiêu chiếc bánh?',
        data => integer(data.soldBoxes * data.boxSize + data.soldLoose + data.newBags * data.newBagSize),
        data => integer(data.remaining + data.soldBoxes * data.boxSize + data.soldLoose),
        ['Tính số bánh đã bán theo hộp.', 'Tính số bánh còn lại từ cách đóng túi mới.', 'Cộng số bán theo hộp, bán lẻ và số còn lại.', 'Bớt lại phần đã bán để kiểm tra số túi còn lại.'],
        { knowledge: ['add', 'multiply', 'logic'], keyPoint: 'Đề cho số đã bán theo một cách đóng và số còn lại theo một cách đóng khác.', reasoningSteps: 3, unit: 'chiếc' }
      );
    }

    if (mode === 'g3-backward-time') {
      const firstDuration = randomInt(25, 50, rng), breakTime = pick([10, 15, 20], rng), secondDuration = randomInt(30, 55, rng);
      const totalDuration = firstDuration + breakTime + secondDuration, finish = randomInt(10 * 60, 17 * 60, rng), start = finish - totalDuration;
      if (start < 7 * 60) return null;
      const model = { firstDuration, breakTime, secondDuration, totalDuration, finish, start, challengeDepth: 3 };
      return makeQuestion(meta, model,
        'Một buổi sinh hoạt kết thúc lúc ' + formatTime(finish) + '. Hoạt động đầu kéo dài ' + firstDuration + ' phút, nghỉ ' + breakTime + ' phút rồi hoạt động tiếp ' + secondDuration + ' phút. Buổi sinh hoạt bắt đầu lúc mấy giờ?',
        data => timeAnswer(data.finish - data.secondDuration - data.breakTime - data.firstDuration),
        data => timeAnswer(data.finish - data.totalDuration),
        ['Cộng thời gian của hai hoạt động và giờ nghỉ.', 'Đi lùi từ giờ kết thúc theo tổng số phút.', 'Đổi phần phút vượt quá một giờ khi cần.', 'Cộng xuôi lại ba khoảng thời gian để kiểm tra giờ kết thúc.'],
        { knowledge: ['time', 'add', 'subtract', 'logic'], keyPoint: 'Muốn tìm giờ bắt đầu phải tính lùi cả thời gian nghỉ, không chỉ hai hoạt động.', reasoningSteps: 3 }
      );
    }

    if (mode === 'g3-fence-gate') {
      const length = randomInt(18, 45, rng), width = randomInt(10, length - 5, rng), gate = randomInt(2, 5, rng), rounds = randomInt(2, 4, rng);
      const perimeter = (length + width) * 2, wire = (perimeter - gate) * rounds;
      const model = { length, width, gate, rounds, perimeter, wire, challengeDepth: 3 };
      return makeQuestion(meta, model,
        'Một khu vườn hình chữ nhật dài ' + length + ' m, rộng ' + width + ' m, có cổng rộng ' + gate + ' m không căng dây. Người ta căng ' + rounds + ' vòng dây quanh phần còn lại. Cần bao nhiêu mét dây?',
        data => integer(((data.length + data.width) * 2 - data.gate) * data.rounds),
        data => integer((data.perimeter - data.gate) * data.rounds),
        ['Tính chu vi khu vườn.', 'Bớt phần cổng không căng dây để tìm độ dài một vòng.', 'Nhân độ dài một vòng với số vòng dây.', 'Chia tổng dây theo số vòng rồi cộng lại phần cổng để kiểm tra chu vi.'],
        { knowledge: ['perimeter', 'add', 'subtract', 'multiply', 'logic'], keyPoint: 'Chiều rộng cổng chỉ bớt một lần trong mỗi vòng dây.', reasoningSteps: 3, unit: 'm' }
      );
    }

    if (mode === 'g3-share-change') {
      for (let attempt = 0; attempt < 40; attempt += 1) {
        const originalChildren = randomInt(6, 18, rng), extraChildren = randomInt(2, 6, rng), newEach = randomInt(3, 8, rng);
        const total = (originalChildren + extraChildren) * newEach, oldEach = Math.floor(total / originalChildren), remainder = total % originalChildren;
        if (remainder < 1 || oldEach <= newEach) continue;
        const model = { originalChildren, extraChildren, newEach, total, oldEach, remainder, challengeDepth: 3 };
        return makeQuestion(meta, model,
          'Chia một số bút cho các bạn ban đầu, mỗi bạn được ' + oldEach + ' chiếc và còn thừa ' + remainder + ' chiếc. Khi có thêm ' + extraChildren + ' bạn, chia lại toàn bộ thì mỗi bạn được ' + newEach + ' chiếc và không thừa. Lúc đầu có bao nhiêu bạn?',
          data => integer((data.extraChildren * data.newEach - data.remainder) / (data.oldEach - data.newEach)),
          data => bruteForceInteger(1, 50, value => value * data.oldEach + data.remainder === (value + data.extraChildren) * data.newEach),
          ['Số bút không đổi qua hai lần chia.', 'Phần bút giảm ở mỗi bạn ban đầu phải đủ chia cho các bạn mới và phần từng bị thừa.', 'Lấy số bút cần bù chia cho mức giảm của mỗi bạn để tìm số bạn ban đầu.', 'Lập lại cả hai phép chia để kiểm tra.'],
          { knowledge: ['add', 'subtract', 'multiply', 'divide-exact', 'unknown', 'logic'], keyPoint: 'So sánh hai lần chia trên cùng một tổng số bút.', reasoningSteps: 3, unit: 'bạn' }
        );
      }
      return null;
    }

    if (mode === 'g3-row-change') {
      const oldEach = randomInt(4, 7, rng), newEach = oldEach + randomInt(1, 3, rng), oldRows = randomInt(7, 16, rng);
      const added = newEach * (oldRows + 1) - oldEach * oldRows, original = oldEach * oldRows;
      const model = { oldEach, newEach, oldRows, newRows: oldRows + 1, added, original, challengeDepth: 3 };
      return makeQuestion(meta, model,
        'Một nhóm học sinh xếp mỗi hàng ' + oldEach + ' bạn. Nếu có thêm ' + added + ' bạn rồi xếp mỗi hàng ' + newEach + ' bạn thì số hàng nhiều hơn trước 1 hàng. Ban đầu có bao nhiêu học sinh?',
        data => integer(data.oldEach * (data.added - data.newEach) / (data.newEach - data.oldEach)),
        data => bruteForceInteger(1, 500, value => value % data.oldEach === 0 && (value + data.added) / data.newEach === value / data.oldEach + 1),
        ['Bỏ riêng một hàng tăng thêm của cách xếp mới.', 'Phần bạn còn lại tăng ở mỗi hàng đúng bằng hiệu hai cách xếp.', 'Từ số bạn thêm sau khi bỏ hàng mới, tìm số hàng cũ.', 'Nhân số hàng cũ với số bạn mỗi hàng và kiểm tra cách xếp mới.'],
        { knowledge: ['add', 'subtract', 'multiply', 'divide-exact', 'logic'], keyPoint: 'Cách xếp mới vừa tăng số bạn mỗi hàng, vừa tăng thêm một hàng.', reasoningSteps: 3, unit: 'bạn' }
      );
    }

    if (mode === 'g3-digit-rotate') {
      for (let attempt = 0; attempt < 80; attempt += 1) {
        const hundreds = randomInt(1, 4, rng), tens = randomInt(3, 9, rng), units = randomInt(0, 9, rng);
        const number = hundreds * 100 + tens * 10 + units, rotated = tens * 100 + units * 10 + hundreds, difference = rotated - number, digitSum = hundreds + tens + units;
        if (difference <= 0) continue;
        const matches = [];
        for (let value = 100; value <= 999; value += 1) {
          const a = Math.floor(value / 100), b = Math.floor(value / 10) % 10, c = value % 10;
          if (a + b + c === digitSum && b > 0 && b * 100 + c * 10 + a - value === difference) matches.push(value);
        }
        if (matches.length !== 1) continue;
        const model = { hundreds, tens, units, number, rotated, difference, digitSum, challengeDepth: 3 };
        return makeQuestion(meta, model,
          'Tìm số có ba chữ số, biết tổng các chữ số bằng ' + digitSum + '. Chuyển chữ số hàng trăm xuống cuối thì số mới lớn hơn số ban đầu ' + difference + ' đơn vị.',
          data => integer(data.number),
          data => bruteForceInteger(100, 999, value => { const a = Math.floor(value / 100), b = Math.floor(value / 10) % 10, c = value % 10; return a + b + c === data.digitSum && b * 100 + c * 10 + a - value === data.difference; }),
          ['Liệt kê các bộ ba chữ số có tổng đã cho.', 'Lập số ban đầu và số sau khi chuyển chữ số đầu xuống cuối.', 'Giữ lại trường hợp tạo đúng độ chênh.', 'Kiểm tra lại tổng chữ số và phép chuyển vị trí.'],
          { knowledge: ['add', 'subtract', 'unknown', 'logic'], keyPoint: 'Ba chữ số giữ nguyên nhưng giá trị hàng của chúng thay đổi.', reasoningSteps: 3 }
        );
      }
      return null;
    }

    if (mode === 'g4-average-add') {
      for (let attempt = 0; attempt < 30; attempt += 1) {
        const count = randomInt(4, 7, rng), oldAverage = randomInt(25, 55, rng), firstAdded = randomInt(20, 70, rng), secondAdded = randomInt(20, 70, rng);
        const newSum = oldAverage * count + firstAdded + secondAdded;
        if (newSum % (count + 2) !== 0) continue;
        const newAverage = newSum / (count + 2), model = { count, oldAverage, firstAdded, secondAdded, newAverage, challengeDepth: 3 };
        return makeQuestion(meta, model,
          'Trung bình cộng của ' + count + ' số là ' + oldAverage + '. Thêm số ' + firstAdded + ' và một số nữa thì trung bình cộng của ' + (count + 2) + ' số là ' + newAverage + '. Số được thêm thứ hai là bao nhiêu?',
          data => integer(data.newAverage * (data.count + 2) - data.oldAverage * data.count - data.firstAdded),
          data => bruteForceInteger(0, 200, value => (data.oldAverage * data.count + data.firstAdded + value) / (data.count + 2) === data.newAverage),
          ['Tìm tổng của nhóm số ban đầu.', 'Tìm tổng của nhóm sau khi thêm hai số.', 'Lấy tổng mới bớt tổng cũ và số thêm đã biết.', 'Cộng lại rồi chia cho số lượng mới để kiểm tra trung bình.'],
          { knowledge: ['average', 'add', 'subtract', 'multiply', 'logic'], keyPoint: 'Số lượng tăng thêm hai nên tổng mới phải tính theo số lượng mới.', reasoningSteps: 3 }
        );
      }
      return null;
    }

    if (mode === 'g4-fraction-reverse') {
      const firstDivisor = pick([3, 4, 5], rng), secondDivisor = pick([3, 4], rng), start = lcm(firstDivisor, secondDivisor) * randomInt(30, 80, rng);
      const afterFirst = start * (firstDivisor - 1) / firstDivisor, afterSecond = afterFirst * (secondDivisor - 1) / secondDivisor;
      const donated = randomInt(5, Math.max(6, Math.floor(afterSecond / 10)), rng), remaining = afterSecond - donated;
      if (remaining <= 0) return null;
      const model = { firstDivisor, secondDivisor, start, afterFirst, afterSecond, donated, remaining, challengeDepth: 3 };
      return makeQuestion(meta, model,
        'Một kho bán 1/' + firstDivisor + ' số hàng, rồi bán tiếp 1/' + secondDivisor + ' số còn lại. Sau khi đem tặng ' + donated + ' sản phẩm, kho còn ' + remaining + ' sản phẩm. Lúc đầu kho có bao nhiêu sản phẩm?',
        data => integer((data.remaining + data.donated) * data.secondDivisor / (data.secondDivisor - 1) * data.firstDivisor / (data.firstDivisor - 1)),
        data => bruteForceInteger(1, 10000, value => value * (data.firstDivisor - 1) / data.firstDivisor * (data.secondDivisor - 1) / data.secondDivisor - data.donated === data.remaining),
        ['Cộng lại số đã tặng.', 'Làm ngược lần bán thứ hai để tìm lượng còn sau lần đầu.', 'Làm ngược lần bán thứ nhất để tìm số ban đầu.', 'Tính xuôi hai lần bán và lần tặng để kiểm tra.'],
        { knowledge: ['fraction', 'add', 'subtract', 'multiply', 'divide-exact', 'logic'], keyPoint: 'Hai phân số được tính trên hai lượng khác nhau nên phải làm ngược từng lần.', reasoningSteps: 3, unit: 'sản phẩm' }
      );
    }

    if (mode === 'g4-area-path-inverse') {
      const path = randomInt(1, 3, rng), outerLength = randomInt(18, 35, rng), outerWidth = randomInt(12, outerLength - 3, rng);
      const innerLength = outerLength - path * 2, innerWidth = outerWidth - path * 2;
      if (innerWidth <= 0) return null;
      const innerArea = innerLength * innerWidth, model = { path, outerLength, outerWidth, innerLength, innerWidth, innerArea, challengeDepth: 3 };
      return makeQuestion(meta, model,
        'Một sân hình chữ nhật dài ' + outerLength + ' m có lối đi rộng ' + path + ' m chạy sát phía trong cả bốn cạnh. Phần đất còn lại ở giữa có diện tích ' + innerArea + ' m². Chiều rộng của cả sân là bao nhiêu mét?',
        data => integer(data.innerArea / (data.outerLength - data.path * 2) + data.path * 2),
        data => bruteForceInteger(1, 100, value => (data.outerLength - data.path * 2) * (value - data.path * 2) === data.innerArea),
        ['Bớt hai lần bề rộng lối đi khỏi chiều dài sân.', 'Lấy diện tích phần giữa chia chiều dài phần giữa để tìm chiều rộng phần giữa.', 'Cộng lại lối đi ở hai bên để tìm chiều rộng cả sân.', 'Tính lại diện tích hình ở giữa để kiểm tra.'],
        { knowledge: ['area', 'add', 'subtract', 'multiply', 'divide-exact', 'logic'], keyPoint: 'Lối đi nằm ở hai phía của mỗi kích thước nên phải bớt hoặc cộng hai lần.', reasoningSteps: 3, unit: 'm', divisions: [{ dividend: innerArea, divisor: innerLength, quotient: innerWidth, remainder: 0 }] }
      );
    }

    if (mode === 'g4-price-relation') {
      const notebookPrice = randomInt(8, 25, rng), cheaper = randomInt(2, Math.min(7, notebookPrice - 1), rng), penPrice = notebookPrice - cheaper;
      const notebooks = randomInt(3, 8, rng), pens = randomInt(4, 10, rng), total = notebooks * notebookPrice + pens * penPrice;
      const model = { notebookPrice, cheaper, penPrice, notebooks, pens, total, challengeDepth: 3 };
      return makeQuestion(meta, model,
        'Mua ' + notebooks + ' quyển vở và ' + pens + ' chiếc bút hết ' + total + ' nghìn đồng. Mỗi chiếc bút rẻ hơn mỗi quyển vở ' + cheaper + ' nghìn đồng. Một quyển vở giá bao nhiêu nghìn đồng?',
        data => integer((data.total + data.pens * data.cheaper) / (data.notebooks + data.pens)),
        data => bruteForceInteger(1, 100, value => data.notebooks * value + data.pens * (value - data.cheaper) === data.total),
        ['Bù thêm cho mỗi chiếc bút phần giá rẻ hơn để coi tất cả món đều bằng giá vở.', 'Tính tổng tiền sau khi bù.', 'Chia tổng mới cho tổng số món.', 'Dùng giá bút thấp hơn để kiểm tra lại tổng tiền ban đầu.'],
        { knowledge: ['money', 'add', 'subtract', 'multiply', 'divide-exact', 'logic'], keyPoint: 'Bù phần chênh giúp đưa hai loại hàng về cùng một giá.', reasoningSteps: 3, unit: 'nghìn đồng' }
      );
    }

    if (mode === 'g4-ratio-transfer') {
      const pair = pick([[3, 5], [4, 7], [5, 8]], rng), firstParts = pair[0], secondParts = pair[1], unit = randomInt(10, 35, rng);
      const transferParts = randomInt(1, firstParts - 1, rng), moved = transferParts * unit, afterFirst = firstParts * unit - moved, afterSecond = secondParts * unit + moved;
      const divisor = gcd(afterFirst, afterSecond), newFirst = afterFirst / divisor, newSecond = afterSecond / divisor, total = (firstParts + secondParts) * unit;
      const model = { firstParts, secondParts, unit, moved, afterFirst, afterSecond, newFirst, newSecond, total, challengeDepth: 3 };
      return makeQuestion(meta, model,
        'Lúc đầu số sách ngăn A bằng ' + firstParts + '/' + secondParts + ' số sách ngăn B. Chuyển ' + moved + ' quyển từ A sang B thì tỉ số A : B bằng ' + newFirst + ' : ' + newSecond + '. Lúc đầu cả hai ngăn có bao nhiêu quyển?',
        data => integer(data.moved * (data.firstParts + data.secondParts) * (data.newFirst + data.newSecond) / (data.firstParts * data.newSecond - data.secondParts * data.newFirst)),
        data => bruteForceInteger(1, 10000, value => value % (data.firstParts + data.secondParts) === 0 && (value * data.firstParts / (data.firstParts + data.secondParts) - data.moved) * data.newSecond === (value * data.secondParts / (data.firstParts + data.secondParts) + data.moved) * data.newFirst),
        ['Biểu diễn ban đầu theo tổng số phần của tỉ số cũ.', 'Sau khi chuyển, tổng không đổi nhưng hai ngăn thay đổi ngược chiều.', 'So tỉ số mới để xác định giá trị một phần cũ.', 'Tính tổng ban đầu và thực hiện chuyển để kiểm tra.'],
        { knowledge: ['fraction', 'sum-ratio', 'add', 'subtract', 'multiply', 'divide-exact', 'logic'], keyPoint: 'Việc chuyển sách không làm thay đổi tổng, nhưng làm đổi tỉ số giữa hai ngăn.', reasoningSteps: 3, unit: 'quyển' }
      );
    }

    if (mode === 'g4-pair-averages') {
      const first = randomInt(20, 70, rng) * 2, second = randomInt(20, 70, rng) * 2, third = randomInt(20, 70, rng) * 2;
      const averageAB = (first + second) / 2, averageBC = (second + third) / 2, averageAC = (first + third) / 2;
      const model = { first, second, third, averageAB, averageBC, averageAC, challengeDepth: 3 };
      return makeQuestion(meta, model,
        'Trung bình cộng của A và B là ' + averageAB + '; của B và C là ' + averageBC + '; của A và C là ' + averageAC + '. Số B bằng bao nhiêu?',
        data => integer(data.averageAB + data.averageBC - data.averageAC),
        data => bruteForceInteger(0, 500, value => { const a = data.averageAB * 2 - value, c = data.averageBC * 2 - value; return (a + c) / 2 === data.averageAC; }),
        ['Đổi ba trung bình cộng thành ba tổng đôi.', 'Cộng hai tổng có chứa B.', 'Bớt tổng A + C để còn hai lần B.', 'Chia đôi và thay lại cả ba trung bình cộng.'],
        { knowledge: ['average', 'add', 'subtract', 'divide-exact', 'logic'], keyPoint: 'Ghép đúng hai tổng cùng chứa B rồi loại tổng không chứa B.', reasoningSteps: 3 }
      );
    }

    if (mode === 'g4-series-error') {
      const last = randomInt(30, 80, rng), duplicated = randomInt(5, last, rng), missing = randomInt(5, last, rng);
      if (missing === duplicated) return null;
      const expected = last * (last + 1) / 2, written = expected - missing + duplicated;
      const model = { last, duplicated, missing, expected, written, challengeDepth: 3 };
      return makeQuestion(meta, model,
        'Khi cộng các số từ 1 đến ' + last + ', một bạn bỏ sót một số và lại viết số ' + duplicated + ' hai lần nên nhận được tổng ' + written + '. Bạn đã bỏ sót số nào?',
        data => integer(data.last * (data.last + 1) / 2 + data.duplicated - data.written),
        data => bruteForceInteger(1, data.last, value => data.expected - value + data.duplicated === data.written),
        ['Tính đúng tổng các số từ 1 đến ' + last + '.', 'Tổng sai đã thừa thêm một lần số ' + duplicated + '.', 'So tổng đúng với tổng sai sau khi loại phần viết thừa.', 'Thay số bỏ sót vào phép cộng để kiểm tra.'],
        { knowledge: ['sequence', 'add', 'subtract', 'multiply', 'divide-exact', 'logic'], keyPoint: 'Tổng sai đồng thời thiếu một số và thừa một lần số bị viết lặp.', reasoningSteps: 3 }
      );
    }

    if (mode === 'g5-motion-stop') {
      const extraSpeed = pick([10, 12, 15], rng), plannedSpeed = extraSpeed * randomInt(3, 6, rng), stopHours = randomInt(1, 2, rng);
      const plannedHours = (plannedSpeed + extraSpeed) * stopHours / extraSpeed;
      const distance = plannedSpeed * plannedHours;
      const model = { extraSpeed, plannedSpeed, stopHours, plannedHours, distance, challengeDepth: 3 };
      return makeQuestion(meta, model,
        'Một xe dự định đi đều với vận tốc ' + plannedSpeed + ' km/giờ. Sau khi dừng ' + stopHours + ' giờ, xe tăng vận tốc thêm ' + extraSpeed + ' km/giờ và vẫn đến đúng giờ dự định. Quãng đường dài bao nhiêu ki-lô-mét?',
        data => integer(data.plannedSpeed * (data.plannedSpeed + data.extraSpeed) * data.stopHours / data.extraSpeed),
        data => bruteForceInteger(1, 2000, value => value % data.plannedSpeed === 0 && value / data.plannedSpeed === data.stopHours + value / (data.plannedSpeed + data.extraSpeed)),
        ['Mỗi giờ đi nhanh hơn bù được ' + extraSpeed + ' km.', 'Tìm thời gian phải đi nhanh để bù quãng đường mất do dừng.', 'Cộng giờ dừng để tìm thời gian dự định hoặc dùng trực tiếp thời gian dự định.', 'Nhân vận tốc dự định với thời gian dự định và kiểm tra lịch thực tế.'],
        { knowledge: ['motion', 'time', 'add', 'multiply', 'divide-exact', 'logic'], keyPoint: 'Phần quãng đường tăng nhờ đi nhanh phải đúng bằng quãng đường lẽ ra đi được trong giờ dừng.', reasoningSteps: 3, unit: 'km' }
      );
    }

    if (mode === 'g5-percent-chain') {
      const rates = pick([[20, 10], [25, 20], [40, 25], [50, 20]], rng), original = randomInt(8, 40, rng) * 100;
      const afterIncrease = original * (100 + rates[0]) / 100, finalValue = afterIncrease * (100 - rates[1]) / 100;
      const model = { increaseRate: rates[0], decreaseRate: rates[1], original, afterIncrease, finalValue, challengeDepth: 3 };
      return makeQuestion(meta, model,
        'Một số lượng tăng ' + rates[0] + '%, sau đó giảm ' + rates[1] + '% trên số lượng mới thì còn ' + finalValue + '. Số lượng ban đầu là bao nhiêu?',
        data => integer(data.finalValue * 100 / (100 - data.decreaseRate) * 100 / (100 + data.increaseRate)),
        data => bruteForceInteger(1, 10000, value => value * (100 + data.increaseRate) * (100 - data.decreaseRate) / 10000 === data.finalValue),
        ['Làm ngược lần giảm để tìm số lượng sau khi tăng.', 'Số lượng đó ứng với hơn 100% số ban đầu.', 'Đưa về 100% để tìm số ban đầu.', 'Tăng rồi giảm theo đúng hai mốc phần trăm để kiểm tra.'],
        { knowledge: ['percent', 'multiply', 'divide-exact', 'logic'], keyPoint: 'Mức giảm tính trên số mới nên không thể lấy hai tỉ lệ trừ trực tiếp.', reasoningSteps: 3 }
      );
    }

    if (mode === 'g5-volume-inverse') {
      const length = randomInt(5, 15, rng), width = randomInt(4, 12, rng), rise = randomInt(2, 8, rng), volumeLitres = length * width * rise;
      const model = { length, width, rise, volumeLitres, challengeDepth: 3 };
      return makeQuestion(meta, model,
        'Một bể hình hộp chữ nhật dài ' + length + ' dm. Đổ thêm ' + volumeLitres + ' lít nước thì mực nước dâng ' + rise + ' dm. Chiều rộng đáy bể là bao nhiêu đề-xi-mét?',
        data => integer(data.volumeLitres / data.rise / data.length),
        data => bruteForceInteger(1, 100, value => data.length * value * data.rise === data.volumeLitres),
        ['Đổi lít nước thành đề-xi-mét khối theo tỉ lệ 1 lít bằng 1 dm³.', 'Phần nước thêm tạo thành một khối hộp có chiều cao bằng mức dâng.', 'Chia thể tích cho chiều dài và mức dâng để tìm chiều rộng.', 'Nhân ba kích thước để kiểm tra thể tích nước thêm.'],
        { knowledge: ['volume', 'measure', 'multiply', 'divide-exact', 'logic'], keyPoint: 'Thể tích nước thêm bằng diện tích đáy nhân đúng mức nước dâng.', reasoningSteps: 3, unit: 'dm', divisions: [{ dividend: volumeLitres, divisor: rise, quotient: length * width, remainder: 0 }, { dividend: length * width, divisor: length, quotient: width, remainder: 0 }] }
      );
    }

    if (mode === 'g5-area-change') {
      const rates = pick([[20, 10], [25, 20], [50, 20]], rng), originalArea = randomInt(8, 40, rng) * 100;
      const changedArea = originalArea * (100 + rates[0]) / 100 * (100 - rates[1]) / 100, cutArea = randomInt(1, Math.max(2, Math.floor(changedArea / 500)), rng) * 100, remainingArea = changedArea - cutArea;
      if (remainingArea <= 0 || remainingArea === originalArea) return null;
      const model = { lengthRate: rates[0], widthRate: rates[1], originalArea, changedArea, cutArea, remainingArea, challengeDepth: 3 };
      return makeQuestion(meta, model,
        'Một hình chữ nhật được tăng chiều dài ' + rates[0] + '% và giảm chiều rộng ' + rates[1] + '%. Sau đó cắt bỏ ' + cutArea + ' cm² thì diện tích còn ' + remainingArea + ' cm². Diện tích hình ban đầu là bao nhiêu?',
        data => integer((data.remainingArea + data.cutArea) * 100 / (100 - data.widthRate) * 100 / (100 + data.lengthRate)),
        data => bruteForceInteger(1, 100000, value => value * (100 + data.lengthRate) * (100 - data.widthRate) / 10000 - data.cutArea === data.remainingArea),
        ['Cộng lại phần bị cắt để tìm diện tích sau khi đổi kích thước.', 'Làm ngược mức giảm chiều rộng.', 'Làm ngược mức tăng chiều dài để tìm diện tích ban đầu.', 'Tính xuôi hai thay đổi và phần cắt để kiểm tra.'],
        { knowledge: ['area', 'percent', 'add', 'multiply', 'divide-exact', 'logic'], keyPoint: 'Diện tích chịu tác động liên tiếp của hai tỉ lệ trên hai kích thước.', reasoningSteps: 3, unit: 'cm²' }
      );
    }

    if (mode === 'g5-work-stages') {
      const firstDays = randomInt(6, 15, rng), secondDays = randomInt(8, 20, rng), firstAloneDays = randomInt(1, 3, rng), togetherDays = randomInt(1, 3, rng), common = lcm(firstDays, secondDays);
      const completed = firstAloneDays * common / firstDays + togetherDays * (common / firstDays + common / secondDays);
      if (completed >= common) return null;
      const model = { firstDays, secondDays, firstAloneDays, togetherDays, common, completed, remaining: common - completed, challengeDepth: 3 };
      return makeQuestion(meta, model,
        'Đội A làm một mình xong việc trong ' + firstDays + ' ngày, đội B trong ' + secondDays + ' ngày. A làm một mình ' + firstAloneDays + ' ngày, sau đó hai đội cùng làm ' + togetherDays + ' ngày. Còn lại bao nhiêu phần công việc?',
        data => rational(data.remaining, data.common),
        data => rational(data.common - data.firstAloneDays * data.common / data.firstDays - data.togetherDays * data.common / data.firstDays - data.togetherDays * data.common / data.secondDays, data.common),
        ['Chọn số phần công việc chia hết cho thời gian của cả hai đội.', 'Tính phần A làm trong giai đoạn đầu.', 'Tính phần hai đội làm chung trong giai đoạn sau.', 'Bớt tổng phần đã làm khỏi toàn bộ công việc và rút gọn.'],
        { knowledge: ['fraction', 'unit-rate', 'add', 'subtract', 'divide-exact', 'logic'], keyPoint: 'Đội A tham gia cả hai giai đoạn, còn đội B chỉ tham gia giai đoạn làm chung.', reasoningSteps: 3, inputHint: 'Ví dụ: 5/12' }
      );
    }

    if (mode === 'g5-age-two-times') {
      const pastYears = randomInt(3, 8, rng), futureYears = randomInt(4, 10, rng), pastChild = pastYears + futureYears;
      const currentChild = pastChild + pastYears, pastParent = pastChild * 5, currentParent = pastParent + pastYears;
      const model = { pastYears, futureYears, pastChild, currentChild, pastParent, currentParent, challengeDepth: 3 };
      return makeQuestion(meta, model,
        'Cách đây ' + pastYears + ' năm, tuổi mẹ gấp 5 lần tuổi con. Sau ' + futureYears + ' năm nữa, tuổi mẹ gấp 3 lần tuổi con. Hiện nay người con bao nhiêu tuổi?',
        data => integer(data.pastYears * 2 + data.futureYears),
        data => bruteForceInteger(1, 50, child => (child - data.pastYears) * 5 + data.pastYears + data.futureYears === (child + data.futureYears) * 3),
        ['Hiệu tuổi mẹ và con không đổi theo thời gian.', 'Ở thời điểm trước, hiệu tuổi bằng bốn lần tuổi con khi đó.', 'Ở thời điểm sau, hiệu tuổi bằng hai lần tuổi con khi đó.', 'Dùng khoảng thời gian giữa hai mốc để tìm tuổi con rồi đưa về hiện tại.'],
        { knowledge: ['time', 'ratio', 'add', 'subtract', 'multiply', 'logic'], keyPoint: 'Cùng một hiệu tuổi được biểu diễn bằng bốn phần ở mốc trước và hai phần ở mốc sau.', reasoningSteps: 3, unit: 'tuổi' }
      );
    }

    if (mode === 'g5-mixed-factor') {
      const base = randomInt(3, 18, rng) * 56, answer = base * 7 / 8;
      const model = { base, answer, challengeDepth: 3 };
      return makeQuestion(meta, model,
        'Tính nhanh: 3/7 × ' + base + ' + 4/7 × ' + base + ' − 25% × ' + base + ' + 1/8 × ' + base + '.',
        data => integer(data.base * 7 / 8),
        data => integer(data.base - data.base / 4 + data.base / 8),
        ['Gộp 3/7 và 4/7 thành một đơn vị.', 'Đổi 25% thành 1/4.', 'Tính 1 − 1/4 + 1/8 bằng 7/8.', 'Lấy 7/8 của số đã cho và kiểm tra từng số hạng.'],
        { knowledge: ['fraction', 'percent', 'expression', 'add', 'subtract', 'multiply', 'logic'], keyPoint: 'Nhóm các hệ số cùng nhân với một số trước khi tính.', reasoningSteps: 3 }
      );
    }

    return null;
  };

  function buildGrade5Hard(meta, params, rng) {
    const mode = params.mode;

    if (mode === 'two-speed-average') {
      for (let attempt = 0; attempt < 30; attempt += 1) {
        const firstSpeed = randomInt(5, 9, rng) * 6;
        const secondSpeed = randomInt(8, 13, rng) * 6;
        const firstHours = randomInt(1, 3, rng);
        const secondHours = randomInt(1, 3, rng);
        const stopMinutes = pick([30, 60], rng);
        const distance = firstSpeed * firstHours + secondSpeed * secondHours;
        const totalMinutes = (firstHours + secondHours) * 60 + stopMinutes;
        if ((distance * 60) % totalMinutes !== 0) continue;
        const averageSpeed = distance * 60 / totalMinutes;
        const model = { firstSpeed, secondSpeed, firstHours, secondHours, stopMinutes, distance, totalMinutes, averageSpeed };
        return makeQuestion(meta, model,
          'Một xe đi ' + firstHours + ' giờ với vận tốc ' + firstSpeed + ' km/giờ, nghỉ ' + stopMinutes + ' phút rồi đi tiếp ' + secondHours + ' giờ với vận tốc ' + secondSpeed + ' km/giờ. Tính vận tốc trung bình của cả hành trình, kể cả thời gian nghỉ.',
          data => integer(data.distance * 60 / data.totalMinutes),
          data => bruteForceInteger(1, 200, value => value * data.totalMinutes === data.distance * 60),
          ['Tính riêng quãng đường của hai chặng rồi cộng lại.', 'Đổi toàn bộ thời gian đi và nghỉ ra phút.', 'Lấy tổng quãng đường chia tổng thời gian đã đổi về giờ.', 'Dùng vận tốc trung bình nhân toàn bộ thời gian để kiểm tra quãng đường.'],
          { knowledge: ['motion', 'average', 'time', 'add', 'multiply', 'divide-exact', 'logic'], keyPoint: 'Thời gian nghỉ không tạo ra quãng đường nhưng vẫn phải tính vào thời gian của cả hành trình.', reasoningSteps: 4, unit: 'km/giờ', divisions: [{ dividend: distance * 60, divisor: totalMinutes, quotient: averageSpeed, remainder: 0 }] }
        );
      }
      return null;
    }

    if (mode === 'delayed-meeting') {
      const firstSpeed = randomInt(7, 12, rng) * 5;
      const secondSpeed = randomInt(8, 14, rng) * 5;
      const delay = randomInt(1, 2, rng);
      const meetingAfterFirst = randomInt(delay + 2, delay + 6, rng);
      const distance = firstSpeed * meetingAfterFirst + secondSpeed * (meetingAfterFirst - delay);
      const model = { firstSpeed, secondSpeed, delay, meetingAfterFirst, distance };
      return makeQuestion(meta, model,
        'Hai xe đi ngược chiều trên quãng đường AB dài ' + distance + ' km. Xe A khởi hành trước với vận tốc ' + firstSpeed + ' km/giờ; sau ' + delay + ' giờ xe B mới khởi hành từ đầu kia với vận tốc ' + secondSpeed + ' km/giờ. Kể từ lúc xe A đi, sau bao nhiêu giờ hai xe gặp nhau?',
        data => integer((data.distance + data.secondSpeed * data.delay) / (data.firstSpeed + data.secondSpeed)),
        data => bruteForceInteger(data.delay + 1, 20, hours => data.firstSpeed * hours + data.secondSpeed * (hours - data.delay) === data.distance),
        ['Tính quãng đường xe A đi trong thời gian xe B chưa xuất phát.', 'Bớt quãng đường đi trước khỏi AB để được khoảng cách hai xe cùng rút ngắn.', 'Chia khoảng cách đó cho tổng hai vận tốc để tìm thời gian đi cùng nhau.', 'Cộng thời gian xe A đi trước rồi kiểm tra tổng hai quãng đường.'],
        { knowledge: ['motion', 'time', 'add', 'subtract', 'multiply', 'divide-exact', 'logic'], keyPoint: 'Hai xe chỉ cùng rút ngắn khoảng cách sau khi xe B xuất phát.', reasoningSteps: 4, unit: 'giờ', divisions: [{ dividend: distance - firstSpeed * delay, divisor: firstSpeed + secondSpeed, quotient: meetingAfterFirst - delay, remainder: 0 }] }
      );
    }

    if (mode === 'markup-discount-profit') {
      const pair = pick([[50, 20, 20], [60, 25, 20], [40, 10, 26], [80, 25, 35]], rng);
      const markup = pair[0], discount = pair[1], profitRate = pair[2];
      const cost = randomInt(4, 24, rng) * 100;
      const listed = cost * (100 + markup) / 100;
      const sold = listed * (100 - discount) / 100;
      const model = { cost, markup, discount, listed, sold, profitRate };
      return makeQuestion(meta, model,
        'Một món hàng có giá vốn ' + cost + ' nghìn đồng. Cửa hàng niêm yết cao hơn giá vốn ' + markup + '%, rồi giảm ' + discount + '% trên giá niêm yết. Sau khi bán, cửa hàng lãi bao nhiêu phần trăm so với giá vốn?',
        data => integer((data.sold - data.cost) * 100 / data.cost),
        data => bruteForceInteger(0, 100, value => data.cost * (100 + value) === data.sold * 100),
        ['Tính giá niêm yết từ giá vốn và mức tăng.', 'Tính giá bán sau khi giảm trên giá niêm yết.', 'Lấy giá bán bớt giá vốn để tìm tiền lãi.', 'So tiền lãi với giá vốn, không so với giá niêm yết.'],
        { knowledge: ['percent', 'money', 'add', 'subtract', 'multiply', 'divide-exact', 'logic'], keyPoint: 'Hai tỉ lệ phần trăm được tính trên hai mốc khác nhau.', reasoningSteps: 4, unit: '%', divisions: [{ dividend: listed * (100 - discount), divisor: 100, quotient: sold, remainder: 0 }, { dividend: (sold - cost) * 100, divisor: cost, quotient: profitRate, remainder: 0 }] }
      );
    }

    if (mode === 'two-stage-percent') {
      const rates = pick([[20, 25], [25, 20], [40, 25], [25, 40]], rng);
      const original = randomInt(8, 40, rng) * 100;
      const afterFirst = original * (100 - rates[0]) / 100;
      const afterSecond = afterFirst * (100 - rates[1]) / 100;
      const donated = randomInt(1, Math.max(1, Math.floor(afterSecond / 200)), rng) * 100;
      const remaining = afterSecond - donated;
      if (remaining <= 0) return null;
      const model = { firstRate: rates[0], secondRate: rates[1], original, afterFirst, afterSecond, donated, remaining };
      return makeQuestion(meta, model,
        'Một kho bán ' + rates[0] + '% số hàng ban đầu, sau đó bán tiếp ' + rates[1] + '% số hàng còn lại. Kho đem tặng thêm ' + donated + ' sản phẩm và còn ' + remaining + ' sản phẩm. Lúc đầu kho có bao nhiêu sản phẩm?',
        data => integer((data.remaining + data.donated) * 100 / (100 - data.secondRate) * 100 / (100 - data.firstRate)),
        data => bruteForceInteger(100, 10000, value => value * (100 - data.firstRate) * (100 - data.secondRate) / 10000 - data.donated === data.remaining),
        ['Cộng lại số hàng đã tặng để tìm lượng còn sau hai lần bán.', 'Làm ngược lần bán thứ hai theo tỉ lệ phần còn lại.', 'Tiếp tục làm ngược lần bán đầu để tìm số ban đầu.', 'Tính xuôi hai lần bán và lần tặng để kiểm tra.'],
        { knowledge: ['percent', 'add', 'subtract', 'multiply', 'divide-exact', 'logic'], keyPoint: 'Tỉ lệ bán lần hai tính trên số hàng còn lại, không tính trên số ban đầu.', reasoningSteps: 4, unit: 'sản phẩm' }
      );
    }

    if (mode === 'tank-rise') {
      const cubeEdge = pick([2, 4, 5], rng);
      const length = cubeEdge * randomInt(4, 8, rng);
      const width = cubeEdge * randomInt(3, 7, rng);
      const rise = cubeEdge;
      const count = length * width * rise / (cubeEdge ** 3);
      const model = { cubeEdge, length, width, rise, count, displacedVolume: length * width * rise, cubeVolume: cubeEdge ** 3 };
      return makeQuestion(meta, model,
        'Một bể có đáy hình chữ nhật dài ' + length + ' cm, rộng ' + width + ' cm. Thả chìm hoàn toàn các khối lập phương cạnh ' + cubeEdge + ' cm thì mực nước dâng ' + rise + ' cm. Các khối không hút nước. Có bao nhiêu khối lập phương?',
        data => integer(data.length * data.width * data.rise / data.cubeVolume),
        data => bruteForceInteger(1, 1000, value => value * data.cubeVolume === data.displacedVolume),
        ['Tính thể tích phần nước dâng bằng diện tích đáy nhân độ cao tăng.', 'Tính thể tích một khối lập phương.', 'Thể tích nước bị chiếm chỗ bằng tổng thể tích các khối chìm.', 'Chia thể tích bị chiếm chỗ cho thể tích một khối và kiểm tra lại.'],
        { knowledge: ['volume', 'measure', 'multiply', 'divide-exact', 'logic'], keyPoint: 'Mực nước dâng biểu thị đúng thể tích phần vật chìm chiếm chỗ.', reasoningSteps: 4, unit: 'khối', divisions: [{ dividend: length * width * rise, divisor: cubeEdge ** 3, quotient: count, remainder: 0 }] }
      );
    }

    if (mode === 'plan-overtime') {
      const days = randomInt(8, 15, rng);
      const early = randomInt(2, Math.min(4, days - 3), rng);
      const extraDaily = randomInt(4, 12, rng);
      const plannedDaily = randomInt(12, 35, rng);
      const actualDays = days - early;
      const extraProducts = extraDaily * actualDays - plannedDaily * early;
      if (extraProducts <= 0) return null;
      const model = { days, early, extraDaily, plannedDaily, actualDays, extraProducts, plannedTotal: plannedDaily * days, actualDaily: plannedDaily + extraDaily };
      return makeQuestion(meta, model,
        'Một tổ dự định làm đều một số sản phẩm mỗi ngày trong ' + days + ' ngày. Thực tế mỗi ngày làm hơn dự định ' + extraDaily + ' sản phẩm nên hoàn thành sớm ' + early + ' ngày và còn làm vượt kế hoạch ' + extraProducts + ' sản phẩm. Theo dự định, mỗi ngày tổ làm bao nhiêu sản phẩm?',
        data => integer((data.extraDaily * data.actualDays - data.extraProducts) / data.early),
        data => bruteForceInteger(1, 200, value => (value + data.extraDaily) * data.actualDays === value * data.days + data.extraProducts),
        ['Số ngày thực tế bằng số ngày dự định bớt số ngày hoàn thành sớm.', 'Phần tăng do làm nhiều hơn mỗi ngày phải bù số sản phẩm của những ngày nghỉ sớm và phần vượt.', 'Bớt phần vượt rồi chia cho số ngày nghỉ sớm để tìm mức dự định.', 'Tính riêng tổng sản phẩm theo kế hoạch và thực tế để kiểm tra.'],
        { knowledge: ['unit-rate', 'add', 'subtract', 'multiply', 'divide-exact', 'unknown', 'logic'], keyPoint: 'Làm nhanh hơn mỗi ngày vừa bù cho số ngày giảm, vừa tạo ra phần vượt kế hoạch.', reasoningSteps: 4, unit: 'sản phẩm' }
      );
    }

    if (mode === 'replace-two') {
      for (let attempt = 0; attempt < 30; attempt += 1) {
        const count = pick([5, 6, 8], rng);
        const oldAverage = randomInt(25, 55, rng);
        const removedA = randomInt(15, 50, rng), removedB = randomInt(15, 50, rng);
        const addedA = randomInt(20, 60, rng), addedB = randomInt(20, 60, rng);
        const newSum = oldAverage * count - removedA - removedB + addedA + addedB;
        if (newSum <= 0 || newSum % count !== 0) continue;
        const newAverage = newSum / count;
        const model = { count, oldAverage, removedA, removedB, addedA, addedB, newAverage };
        return makeQuestion(meta, model,
          'Trung bình cộng của ' + count + ' số thay đổi thành ' + newAverage + ' khi thay hai số ' + removedA + ' và ' + removedB + ' bằng hai số ' + addedA + ' và ' + addedB + '. Trung bình cộng ban đầu là bao nhiêu?',
          data => integer((data.newAverage * data.count - data.addedA - data.addedB + data.removedA + data.removedB) / data.count),
          data => bruteForceInteger(1, 200, value => value * data.count - data.removedA - data.removedB + data.addedA + data.addedB === data.newAverage * data.count),
          ['Từ trung bình mới, tìm tổng của dãy sau khi thay.', 'Bớt hai số mới để trở lại tổng của các số không đổi.', 'Cộng lại hai số đã bị thay để khôi phục tổng ban đầu.', 'Chia tổng ban đầu cho số lượng số và kiểm tra phép thay.'],
          { knowledge: ['average', 'add', 'subtract', 'multiply', 'divide-exact', 'logic'], keyPoint: 'Số lượng số không đổi nhưng tổng thay đổi đúng bằng phần chênh của hai cặp số.', reasoningSteps: 4 }
        );
      }
      return null;
    }

    if (mode === 'combined-partial-work') {
      for (let attempt = 0; attempt < 30; attempt += 1) {
        const firstAlone = randomInt(6, 16, rng);
        const secondAlone = randomInt(8, 24, rng);
        const togetherDays = randomInt(1, Math.min(5, firstAlone - 1), rng);
        if ((togetherDays * secondAlone) % firstAlone !== 0) continue;
        const secondFinishes = secondAlone - togetherDays - togetherDays * secondAlone / firstAlone;
        if (!Number.isInteger(secondFinishes) || secondFinishes < 1) continue;
        const common = lcm(firstAlone, secondAlone);
        const model = { firstAlone, secondAlone, togetherDays, secondFinishes, common };
        return makeQuestion(meta, model,
          'Đội A làm một mình xong công việc trong ' + firstAlone + ' ngày. A và B cùng làm ' + togetherDays + ' ngày, sau đó A nghỉ; đội B làm tiếp ' + secondFinishes + ' ngày thì xong. Nếu làm một mình, đội B cần bao nhiêu ngày?',
          data => integer((data.togetherDays + data.secondFinishes) * data.firstAlone / (data.firstAlone - data.togetherDays)),
          data => bruteForceInteger(1, 60, value => data.togetherDays * data.common / data.firstAlone + (data.togetherDays + data.secondFinishes) * data.common / value === data.common),
          ['Coi toàn bộ công việc là một số phần chia hết cho thời gian của đội A.', 'Tính phần việc A làm trong những ngày làm chung.', 'Phần còn lại do B làm trong cả thời gian chung và thời gian làm một mình.', 'Từ phần việc và tổng số ngày B đã làm, suy ra thời gian B làm một mình.'],
          { knowledge: ['fraction', 'unit-rate', 'add', 'subtract', 'multiply', 'divide-exact', 'logic'], keyPoint: 'Đội B làm việc trong cả hai giai đoạn, còn đội A chỉ làm ở giai đoạn đầu.', reasoningSteps: 4, unit: 'ngày' }
        );
      }
      return null;
    }

    if (mode === 'decimal-factor') {
      const tenths = randomInt(12, 48, rng);
      const left = randomInt(21, 49, rng), right = 100 - left;
      const subtractFactor = randomInt(3, 8, rng);
      const answer = tenths * (10 - subtractFactor);
      const decimalText = Math.floor(tenths / 10) + ',' + (tenths % 10);
      const model = { tenths, left, right, subtractFactor, answer };
      return makeQuestion(meta, model,
        'Tính nhanh: ' + decimalText + ' × ' + left + ' + ' + decimalText + ' × ' + right + ' − ' + tenths + ' × ' + subtractFactor + '.',
        data => integer(data.tenths * (10 - data.subtractFactor)),
        data => {
          const scaled = data.tenths * data.left + data.tenths * data.right - data.tenths * 10 * data.subtractFactor;
          return integer(scaled / 10);
        },
        ['Nhận ra hai tích đầu có thừa số chung là ' + decimalText + '.', 'Gộp ' + left + ' + ' + right + ' thành 100.', 'Đổi tích với 100 về số tự nhiên rồi thực hiện phép trừ cuối.', 'Tính từng tích theo cách thông thường để kiểm tra.'],
        { knowledge: ['decimal', 'expression', 'add', 'subtract', 'multiply', 'logic'], keyPoint: 'Đặt thừa số chung giúp hai số hạng đầu thu gọn thành một tích tròn trăm.', reasoningSteps: 4 }
      );
    }

    if (mode === 'reverse-percent-fraction') {
      const original = randomInt(5, 30, rng) * 20;
      const increased = original * 5 / 4;
      const afterTaking = increased * 3 / 5;
      const removed = randomInt(2, Math.max(3, Math.floor(afterTaking / 10)), rng) * 5;
      const finalValue = afterTaking - removed;
      if (finalValue <= 0) return null;
      const model = { original, increased, afterTaking, removed, finalValue };
      return makeQuestion(meta, model,
        'Một số được tăng thêm 25%. Sau đó lấy đi 2/5 số mới và bớt tiếp ' + removed + ' thì còn ' + finalValue + '. Tìm số ban đầu.',
        data => integer((data.finalValue + data.removed) * 5 / 3 * 4 / 5),
        data => bruteForceInteger(1, 10000, value => value * 5 / 4 * 3 / 5 - data.removed === data.finalValue),
        ['Cộng lại phần bớt cuối để tìm số còn sau khi lấy đi 2/5.', 'Số đó bằng 3/5 số sau khi tăng, nên làm ngược để tìm số sau khi tăng.', 'Số sau khi tăng bằng 125% số ban đầu.', 'Đưa về 100% rồi tính xuôi toàn bộ quá trình để kiểm tra.'],
        { knowledge: ['percent', 'fraction', 'add', 'subtract', 'multiply', 'divide-exact', 'unknown', 'logic'], keyPoint: 'Phải làm ngược theo đúng thứ tự: cộng lại, khôi phục 5/5 rồi mới bỏ mức tăng 25%.', reasoningSteps: 4 }
      );
    }

    return null;
  }

  ['g5HardMotionLeg', 'g5HardMotionMeet', 'g5HardPercentDiscount', 'g5HardPercentPart', 'g5HardVolume', 'g5HardPlan', 'g5HardAverage', 'g5HardUnitRate', 'g5HardDecimal', 'g5HardUnknown'].forEach(name => {
    BUILDERS[name] = buildGrade5Hard;
  });

  BUILDERS.champion = function (meta, params, rng) {
    const mode = params.mode;

    if (mode === 'g1-transfer-equal') {
      const equal = randomInt(12, 35, rng);
      const moved = randomInt(3, Math.min(9, equal - 2), rng);
      const total = equal * 2;
      const model = { equal, moved, total };
      return makeQuestion(meta, model,
        'Hai hộp có tất cả ' + total + ' viên bi. Chuyển ' + moved + ' viên từ hộp A sang hộp B thì hai hộp có số bi bằng nhau. Lúc đầu hộp A có bao nhiêu viên bi?',
        data => integer(data.total / 2 + data.moved),
        data => bruteForceInteger(0, data.total, first => first - data.moved === data.total - first + data.moved),
        ['Sau khi chuyển, tổng số bi của hai hộp vẫn không đổi.', 'Tách tổng thành hai phần bằng nhau để tìm số bi mỗi hộp lúc sau.', 'Hộp A đã cho đi ' + moved + ' viên nên cộng lại số đó.', 'Diễn lại việc chuyển để kiểm tra hai hộp bằng nhau.'],
        { knowledge: ['add', 'subtract', 'logic'], keyPoint: 'Chuyển bi chỉ làm thay đổi từng hộp, không làm thay đổi tổng.', reasoningSteps: 4 }
      );
    }

    if (mode === 'g1-pair-sums') {
      const first = randomInt(6, 18, rng);
      const second = randomInt(6, 18, rng);
      const third = randomInt(6, 18, rng);
      const ab = first + second, bc = second + third, ac = first + third;
      const model = { first, second, third, ab, bc, ac };
      return makeQuestion(meta, model,
        'Ba giỏ A, B, C đựng kẹo. A và B có ' + ab + ' viên; B và C có ' + bc + ' viên; A và C có ' + ac + ' viên. Giỏ A có bao nhiêu viên kẹo?',
        data => integer((data.ab + data.ac - data.bc) / 2),
        data => {
          for (let a = 0; a <= 50; a += 1) {
            const b = data.ab - a;
            const c = data.ac - a;
            if (b >= 0 && c >= 0 && b + c === data.bc) return integer(a);
          }
          return { kind: 'invalid' };
        },
        ['Ghép tổng A + B với tổng A + C.', 'Trong kết quả vừa ghép, A được tính hai lần còn B + C được tính một lần.', 'Bớt tổng B + C để còn lại hai lần số kẹo của A.', 'Tách phần còn lại thành hai phần bằng nhau rồi thay lại cả ba điều kiện.'],
        { knowledge: ['add', 'subtract', 'logic'], keyPoint: 'Ghép hai tổng có chung A rồi loại phần B + C.', reasoningSteps: 4 }
      );
    }

    if (mode === 'g1-sequence') {
      const start = randomInt(8, 18, rng);
      const up = randomInt(4, 9, rng);
      const down = randomInt(1, up - 1, rng);
      const shown = [start, start + up, start + up - down, start + up * 2 - down, start + up * 2 - down * 2];
      const next = shown[4] + up;
      const afterNext = next - down;
      const model = { start, up, down, shown, next, afterNext };
      return makeQuestion(meta, model,
        'Dãy số thay đổi luân phiên theo hai quy tắc: ' + shown.join(', ') + ', … Tổng của hai số tiếp theo là bao nhiêu?',
        data => integer(data.next + data.afterNext),
        data => {
          let value = data.start;
          const values = [value];
          for (let index = 1; index < 7; index += 1) {
            value += index % 2 === 1 ? data.up : -data.down;
            values.push(value);
          }
          return integer(values[5] + values[6]);
        },
        ['So sánh từng cặp số liên tiếp để nhận ra hai thay đổi luân phiên.', 'Sau số cuối đang cho là lượt tăng.', 'Số kế tiếp nữa là lượt giảm.', 'Cộng hai số mới tìm và kiểm tra lại nhịp tăng – giảm của cả dãy.'],
        { knowledge: ['add', 'subtract', 'sequence', 'logic'], keyPoint: 'Không dùng một khoảng cách duy nhất; dãy xen kẽ hai quy tắc.', reasoningSteps: 4 }
      );
    }

    if (mode === 'g1-balance-chain') {
      const red = randomInt(5, 15, rng);
      const more = randomInt(2, 7, rng);
      const blue = red + more;
      const total = red + red + blue;
      const model = { red, blue, more, total };
      return makeQuestion(meta, model,
        'Hai túi đỏ giống nhau và một túi xanh có tất cả ' + total + ' viên. Túi xanh nhiều hơn mỗi túi đỏ ' + more + ' viên. Một túi đỏ có bao nhiêu viên?',
        data => integer((data.total - data.more) / 3),
        data => bruteForceInteger(0, data.total, value => value + value + value + data.more === data.total),
        ['Bớt phần hơn ' + more + ' viên của túi xanh.', 'Khi đó lượng còn lại được ghép từ ba túi bằng nhau.', 'Tách lượng còn lại thành ba phần bằng nhau để tìm túi đỏ.', 'Cộng hai túi đỏ và một túi xanh để kiểm tra đúng tổng.'],
        { knowledge: ['add', 'subtract', 'logic'], keyPoint: 'Bớt phần hơn trước sẽ đưa bài toán về ba phần bằng nhau.', reasoningSteps: 4 }
      );
    }

    if (mode === 'g1-magic-triangle') {
      const left = randomInt(2, 9, rng);
      const top = randomInt(2, 9, rng);
      const right = randomInt(2, 9, rng);
      const firstMiddle = randomInt(2, 9, rng);
      const target = left + firstMiddle + top;
      const secondMiddle = target - top - right;
      const missing = target - right - left;
      if (secondMiddle < 1 || secondMiddle > 12 || missing < 1 || missing > 12) return null;
      const model = { left, top, right, firstMiddle, secondMiddle, missing, target };
      return makeQuestion(meta, model,
        'Ba cạnh của một tam giác số có tổng bằng nhau. Cạnh thứ nhất gồm ' + left + ', ' + firstMiddle + ', ' + top + '; cạnh thứ hai gồm ' + top + ', ' + secondMiddle + ', ' + right + '; cạnh thứ ba gồm ' + right + ', □, ' + left + '. Số trong ô là bao nhiêu?',
        data => integer(data.target - data.right - data.left),
        data => bruteForceInteger(0, 30, value => data.right + value + data.left === data.left + data.firstMiddle + data.top),
        ['Tính tổng của cạnh đã biết đủ ba số.', 'Kiểm tra cạnh thứ hai cũng có đúng tổng đó.', 'Ở cạnh cuối, cộng hai số đã biết.', 'Lấy tổng chung bớt hai số đã biết rồi kiểm tra cả ba cạnh.'],
        { knowledge: ['add', 'subtract', 'logic', 'shape-basic'], keyPoint: 'Ba cạnh dùng chung một tổng, nhưng các số ở đỉnh được lặp lại.', reasoningSteps: 4 }
      );
    }

    if (mode === 'g1-digit-conditions') {
      const tens = randomInt(4, 9, rng);
      const ones = randomInt(1, tens - 1, rng);
      const sum = tens + ones;
      const difference = tens - ones;
      const number = tens * 10 + ones;
      const model = { tens, ones, sum, difference, number };
      return makeQuestion(meta, model,
        'Tìm số có hai chữ số. Tổng hai chữ số bằng ' + sum + '; chữ số hàng chục lớn hơn chữ số hàng đơn vị ' + difference + ' đơn vị và số cần tìm lớn hơn ' + (number - randomInt(1, 4, rng)) + '.',
        data => integer(data.number),
        data => bruteForceInteger(10, 99, value => {
          const a = Math.floor(value / 10), b = value % 10;
          return a + b === data.sum && a - b === data.difference;
        }),
        ['Liệt kê các cặp chữ số có tổng bằng ' + sum + '.', 'Giữ lại cặp có chữ số hàng chục hơn chữ số hàng đơn vị ' + difference + '.', 'Đặt hai chữ số vào đúng hàng để lập số.', 'Đối chiếu điều kiện so sánh và kiểm tra lại tổng, hiệu hai chữ số.'],
        { knowledge: ['add', 'subtract', 'compare', 'logic'], keyPoint: 'Cần thỏa mãn đồng thời mọi điều kiện, không thử riêng từng điều kiện.', reasoningSteps: 4 }
      );
    }

    if (mode === 'g2-chicken-rabbit') {
      const rabbits = randomInt(3, 10, rng);
      const chickens = randomInt(5, 15, rng);
      const animals = rabbits + chickens;
      const legs = rabbits * 4 + chickens * 2;
      const model = { rabbits, chickens, animals, legs };
      return makeQuestion(meta, model,
        'Một khu nuôi có ' + animals + ' con gồm gà và thỏ, đếm được ' + legs + ' chân. Mỗi con gà có 2 chân, mỗi con thỏ có 4 chân. Có bao nhiêu con thỏ?',
        data => integer((data.legs - data.animals * 2) / 2),
        data => bruteForceInteger(0, data.animals, rabbitCount => rabbitCount * 4 + (data.animals - rabbitCount) * 2 === data.legs),
        ['Tạm coi tất cả ' + animals + ' con đều là gà.', 'Tính số chân còn thiếu so với số chân thực tế.', 'Mỗi lần đổi một con gà thành một con thỏ thì số chân tăng thêm 2.', 'Tìm số lần đổi và thay lại để kiểm tra cả số con lẫn số chân.'],
        { knowledge: ['add', 'subtract', 'multiply-basic', 'logic'], keyPoint: 'Giả sử tạm tất cả cùng một loại để biến hai điều kiện thành một độ chênh.', reasoningSteps: 4 }
      );
    }

    if (mode === 'g2-three-boxes') {
      const equal = randomInt(20, 60, rng);
      const firstMove = randomInt(3, 9, rng);
      const secondMove = randomInt(firstMove + 1, 14, rng);
      const boxB = equal + secondMove - firstMove;
      const model = { equal, firstMove, secondMove, boxB };
      return makeQuestion(meta, model,
        'Chuyển ' + firstMove + ' viên từ hộp A sang hộp B, rồi chuyển ' + secondMove + ' viên từ hộp B sang hộp C thì cả ba hộp đều có ' + equal + ' viên. Lúc đầu hộp B có bao nhiêu viên?',
        data => integer(data.equal + data.secondMove - data.firstMove),
        data => {
          let value = data.equal;
          value += data.secondMove;
          value -= data.firstMove;
          return integer(value);
        },
        ['Đi ngược từ trạng thái cuối cùng.', 'Trước khi B chuyển sang C, hộp B phải có thêm ' + secondMove + ' viên.', 'Trước đó B đã nhận từ A ' + firstMove + ' viên nên bớt phần vừa nhận.', 'Thực hiện xuôi hai lần chuyển để kiểm tra cả ba hộp bằng nhau.'],
        { knowledge: ['add', 'subtract', 'logic'], keyPoint: 'Khi làm ngược, phải đảo cả thứ tự lẫn chiều của từng lần chuyển.', reasoningSteps: 4 }
      );
    }

    if (mode === 'g2-calendar') {
      const weekday = randomInt(0, 6, rng);
      const daysLater = randomInt(20, 80, rng);
      const answer = 2 + (weekday + daysLater) % 7;
      const model = { weekday, daysLater, answer };
      return makeQuestion(meta, model,
        'Hôm nay là thứ ' + (weekday + 2) + '. Sau ' + daysLater + ' ngày nữa là thứ mấy? Nhập 2 cho thứ Hai, …, 7 cho thứ Bảy và 8 cho Chủ nhật.',
        data => integer(data.answer),
        data => {
          let day = data.weekday;
          for (let count = 0; count < data.daysLater; count += 1) day = (day + 1) % 7;
          return integer(day + 2);
        },
        ['Một tuần có 7 ngày nên sau mỗi nhóm 7 ngày, thứ không đổi.', 'Tách số ngày thành các tuần đầy đủ và phần ngày còn lại.', 'Tiến từ thứ đã cho theo số ngày còn lại.', 'Đếm lại bằng các nhóm 7 ngày để kiểm tra.'],
        { knowledge: ['add', 'subtract', 'time', 'logic'], keyPoint: 'Chỉ phần ngày còn lại sau các tuần đầy đủ làm thay đổi thứ.', reasoningSteps: 4 }
      );
    }

    if (mode === 'g2-planting-square') {
      const side = randomInt(2, 12, rng) * 5;
      const spacing = 5;
      const perimeter = side * 4;
      const trees = perimeter / spacing;
      const model = { side, spacing, perimeter, trees };
      return makeQuestion(meta, model,
        'Một vườn hình vuông cạnh ' + side + ' m. Trồng cây quanh vườn, cứ cách ' + spacing + ' m trồng một cây và bốn góc đều có cây. Cần bao nhiêu cây?',
        data => integer(data.perimeter / data.spacing),
        data => {
          let distance = 0, count = 0;
          while (distance < data.perimeter) { count += 1; distance += data.spacing; }
          return integer(count);
        },
        ['Cộng độ dài bốn cạnh bằng nhau để tìm độ dài một vòng quanh vườn.', 'Chia đường bao thành các đoạn dài ' + spacing + ' m.', 'Vì là đường khép kín, điểm đầu cũng là điểm cuối nên không cộng thêm cây.', 'Kiểm tra bốn góc đều rơi đúng vào các vị trí trồng.'],
        { knowledge: ['add', 'divide-exact', 'length', 'shape-basic', 'logic'], keyPoint: 'Trồng trên đường khép kín: số cây bằng số khoảng cách.', reasoningSteps: 4, unit: 'cây', divisions: [{ dividend: perimeter, divisor: spacing, quotient: trees, remainder: 0 }] }
      );
    }

    if (mode === 'g2-pair-sums') {
      const first = randomInt(12, 35, rng), second = randomInt(12, 35, rng), third = randomInt(12, 35, rng);
      const ab = first + second, bc = second + third, ac = first + third;
      const model = { first, second, third, ab, bc, ac };
      return makeQuestion(meta, model,
        'Ba số có tổng đôi một lần lượt là: số thứ nhất với số thứ hai bằng ' + ab + '; số thứ hai với số thứ ba bằng ' + bc + '; số thứ nhất với số thứ ba bằng ' + ac + '. Số thứ hai là bao nhiêu?',
        data => integer((data.ab + data.bc - data.ac) / 2),
        data => bruteForceInteger(0, 100, value => data.ab - value >= 0 && data.bc - value >= 0 && (data.ab - value) + (data.bc - value) === data.ac),
        ['Cộng hai tổng đều chứa số thứ hai.', 'Bớt tổng của số thứ nhất và số thứ ba.', 'Phần còn lại là hai lần số thứ hai.', 'Tách thành hai phần bằng nhau và thay lại ba tổng.'],
        { knowledge: ['add', 'subtract', 'logic'], keyPoint: 'Chọn đúng hai tổng có chung số đang cần tìm.', reasoningSteps: 4 }
      );
    }

    if (mode === 'g2-reverse-number') {
      const tens = randomInt(5, 9, rng), ones = randomInt(1, tens - 1, rng);
      const sum = tens + ones, difference = (tens - ones) * 9, number = tens * 10 + ones;
      const model = { tens, ones, sum, difference, number };
      return makeQuestion(meta, model,
        'Một số có hai chữ số. Tổng hai chữ số bằng ' + sum + '. Nếu đổi chỗ hai chữ số thì số mới bé hơn số ban đầu ' + difference + ' đơn vị. Tìm số ban đầu.',
        data => integer(data.number),
        data => bruteForceInteger(10, 99, value => {
          const a = Math.floor(value / 10), b = value % 10;
          return a + b === data.sum && value - (b * 10 + a) === data.difference;
        }),
        ['Liệt kê các cặp chữ số có tổng bằng ' + sum + '.', 'Với mỗi cặp, lập số ban đầu và số đổi chỗ.', 'Giữ lại cặp tạo đúng hiệu ' + difference + '.', 'Kiểm tra lại cả tổng chữ số và phép đổi chỗ.'],
        { knowledge: ['add', 'subtract', 'compare', 'logic'], keyPoint: 'Đổi chỗ chữ số làm thay đổi giá trị hàng chục và hàng đơn vị cùng lúc.', reasoningSteps: 4 }
      );
    }

    if (mode === 'g3-series') {
      const first = randomInt(12, 30, rng), step = randomInt(3, 8, rng), count = pick([5, 7], rng);
      const last = first + step * (count - 1), total = count * (first + last) / 2;
      const model = { first, step, count, last, total };
      return makeQuestion(meta, model,
        'Một dãy có ' + count + ' số, bắt đầu từ ' + first + ' và mỗi số sau hơn số trước ' + step + ' đơn vị. Tổng của cả dãy là bao nhiêu?',
        data => integer(data.count * (data.first + data.last) / 2),
        data => {
          let sum = 0, value = data.first;
          for (let index = 0; index < data.count; index += 1) { sum += value; value += data.step; }
          return integer(sum);
        },
        ['Viết hoặc xác định số cuối của dãy.', 'Ghép số đầu với số cuối, số thứ hai với số áp cuối; các cặp có cùng tổng.', 'Tính tổng bằng số cặp và phần giữa nếu có.', 'Cộng tuần tự toàn bộ dãy để kiểm tra.'],
        { knowledge: ['add', 'multiply', 'divide-exact', 'sequence', 'logic'], keyPoint: 'Ghép các số ở hai đầu giúp tạo ra những cặp có tổng bằng nhau.', reasoningSteps: 4, divisions: [{ dividend: count * (first + last), divisor: 2, quotient: total, remainder: 0 }] }
      );
    }

    if (mode === 'g3-page-digits') {
      const pages = randomInt(120, 260, rng);
      const digits = 9 + 90 * 2 + (pages - 99) * 3;
      const model = { pages, digits };
      return makeQuestion(meta, model,
        'Để đánh số các trang từ trang 1 đến trang cuối của một cuốn sách, người ta dùng ' + digits + ' chữ số. Cuốn sách có bao nhiêu trang?',
        data => integer(99 + (data.digits - 189) / 3),
        data => bruteForceInteger(1, 500, page => {
          let countDigits = 0;
          for (let value = 1; value <= page; value += 1) countDigits += String(value).length;
          return countDigits === data.digits;
        }),
        ['Từ trang 1 đến 9 dùng 9 chữ số.', 'Từ trang 10 đến 99 dùng 180 chữ số.', 'Bớt 189 chữ số đã dùng, rồi chia phần còn lại thành các nhóm 3 chữ số.', 'Cộng thêm 99 trang đầu và tính lại số chữ số để kiểm tra.'],
        { knowledge: ['add', 'subtract', 'multiply', 'divide-exact', 'logic'], keyPoint: 'Phải tách các trang theo số lượng chữ số của số trang.', reasoningSteps: 4, unit: 'trang', divisions: [{ dividend: digits - 189, divisor: 3, quotient: pages - 99, remainder: 0 }] }
      );
    }

    if (mode === 'g3-three-ages') {
      const child = randomInt(4, 18, rng), father = child * 3, grandfather = child * 5, total = child * 9;
      const model = { child, father, grandfather, total };
      return makeQuestion(meta, model,
        'Tổng tuổi của ông, bố và con là ' + total + ' tuổi. Tuổi bố gấp 3 lần tuổi con; tuổi ông bằng tuổi bố cộng thêm 2 lần tuổi con. Người con bao nhiêu tuổi?',
        data => integer(data.total / 9),
        data => bruteForceInteger(1, 30, value => value + value * 3 + (value * 3 + value * 2) === data.total),
        ['Coi tuổi con là một phần.', 'Tuổi bố là ba phần; tuổi ông là năm phần.', 'Cả ba người có tất cả chín phần bằng nhau.', 'Tìm một phần rồi thay lại hai quan hệ tuổi để kiểm tra.'],
        { knowledge: ['add', 'multiply', 'divide-exact', 'logic'], keyPoint: 'Đổi mọi tuổi về cùng một đơn vị phần là tuổi của người con.', reasoningSteps: 4, unit: 'tuổi', divisions: [{ dividend: total, divisor: 9, quotient: child, remainder: 0 }] }
      );
    }

    if (mode === 'g3-planting-closed') {
      const length = pick([15, 20, 25, 30], rng), width = pick([10, 15, 20], rng), spacing = 5;
      const perimeter = (length + width) * 2, trees = perimeter / spacing;
      const model = { length, width, spacing, perimeter, trees };
      return makeQuestion(meta, model,
        'Một khu vườn hình chữ nhật dài ' + length + ' m, rộng ' + width + ' m. Trồng cây đều quanh vườn, hai cây liên tiếp cách nhau ' + spacing + ' m và bốn góc đều có cây. Cần bao nhiêu cây?',
        data => integer(data.perimeter / data.spacing),
        data => {
          let count = 0;
          for (let distance = 0; distance < data.perimeter; distance += data.spacing) count += 1;
          return integer(count);
        },
        ['Tính chu vi khu vườn.', 'Chia chu vi thành các khoảng dài ' + spacing + ' m.', 'Đường trồng cây khép kín nên số cây bằng số khoảng.', 'Kiểm tra vị trí bốn góc và không đếm lặp điểm đầu.'],
        { knowledge: ['perimeter', 'add', 'multiply', 'divide-exact', 'logic'], keyPoint: 'Trên đường khép kín không cộng thêm một cây ở điểm cuối.', reasoningSteps: 4, unit: 'cây', divisions: [{ dividend: perimeter, divisor: spacing, quotient: trees, remainder: 0 }] }
      );
    }

    if (mode === 'g3-division-model') {
      const divisor = randomInt(5, 18, rng), quotient = randomInt(3, 8, rng), remainder = randomInt(1, divisor - 1, rng);
      const dividend = divisor * quotient + remainder, sum = dividend + divisor;
      const model = { divisor, quotient, remainder, dividend, sum };
      return makeQuestion(meta, model,
        'Trong một phép chia có thương ' + quotient + ' và số dư ' + remainder + '. Tổng của số bị chia và số chia bằng ' + sum + '. Số chia là bao nhiêu?',
        data => integer((data.sum - data.remainder) / (data.quotient + 1)),
        data => bruteForceInteger(data.remainder + 1, data.sum, value => value * data.quotient + data.remainder + value === data.sum),
        ['Biểu diễn số bị chia bằng số chia nhân thương rồi cộng số dư.', 'Khi cộng thêm số chia, ta có thương cộng một lần số chia.', 'Bớt số dư khỏi tổng rồi chia cho thương cộng 1.', 'Lập lại phép chia và kiểm tra số dư nhỏ hơn số chia.'],
        { knowledge: ['add', 'subtract', 'multiply', 'divide-exact', 'divide-remainder', 'unknown', 'logic'], keyPoint: 'Số bị chia = số chia × thương + số dư.', reasoningSteps: 4, divisions: [{ dividend, divisor, quotient, remainder }, { dividend: sum - remainder, divisor: quotient + 1, quotient: divisor, remainder: 0 }] }
      );
    }

    if (mode === 'g3-three-digit') {
      const middle = randomInt(2, 7, rng), hundreds = middle + 2, units = middle - 1;
      const digitSum = hundreds + middle + units, number = hundreds * 100 + middle * 10 + units;
      const model = { middle, hundreds, units, digitSum, number };
      return makeQuestion(meta, model,
        variantText(meta, 'Tìm số có ba chữ số. Chữ số hàng trăm hơn hàng chục 2 đơn vị; hàng chục hơn hàng đơn vị 1 đơn vị; tổng ba chữ số bằng ' + digitSum + '.', 'Một số có ba chữ số với tổng các chữ số bằng ' + digitSum + '. Hàng chục kém hàng trăm 2 đơn vị và hơn hàng đơn vị 1 đơn vị. Đó là số nào?'),
        data => integer(data.number),
        data => bruteForceInteger(100, 999, value => {
          const a = Math.floor(value / 100), b = Math.floor(value / 10) % 10, c = value % 10;
          return a - b === 2 && b - c === 1 && a + b + c === data.digitSum;
        }),
        ['Coi chữ số hàng đơn vị là mốc.', 'Biểu diễn hàng chục và hàng trăm theo hai độ chênh.', 'Dùng tổng chữ số để xác định bộ ba duy nhất.', 'Ghép số rồi kiểm tra lại tổng và từng độ chênh.'],
        { knowledge: ['add', 'subtract', 'unknown', 'logic'], keyPoint: 'Ba điều kiện phải cùng đúng trên một bộ ba chữ số.', reasoningSteps: 4 }
      );
    }

    if (mode === 'g4-tickets') {
      const expensive = randomInt(15, 30, rng), cheap = randomInt(20, 35, rng);
      const totalTickets = expensive + cheap, totalMoney = expensive * 10 + cheap * 5;
      const model = { expensive, cheap, totalTickets, totalMoney };
      return makeQuestion(meta, model,
        'Một rạp bán ' + totalTickets + ' vé gồm vé 5 nghìn đồng và vé 10 nghìn đồng, thu được ' + totalMoney + ' nghìn đồng. Đã bán bao nhiêu vé loại 10 nghìn đồng?',
        data => integer((data.totalMoney - data.totalTickets * 5) / 5),
        data => bruteForceInteger(0, data.totalTickets, count => count * 10 + (data.totalTickets - count) * 5 === data.totalMoney),
        ['Giả sử tất cả vé đều là loại 5 nghìn đồng.', 'Tìm số tiền thực tế nhiều hơn số tiền giả sử.', 'Mỗi vé 10 nghìn làm số tiền tăng thêm 5 nghìn đồng.', 'Chia phần chênh lệch cho 5 rồi kiểm tra tổng số vé và tổng tiền.'],
        { knowledge: ['money', 'add', 'subtract', 'multiply', 'divide-exact', 'logic'], keyPoint: 'Giả thiết tạm đưa hai loại vé về cùng một loại để đo phần chênh.', reasoningSteps: 4, unit: 'vé', divisions: [{ dividend: totalMoney - totalTickets * 5, divisor: 5, quotient: expensive, remainder: 0 }] }
      );
    }

    if (mode === 'g4-two-times-age') {
      const years = randomInt(3, 15, rng), pastChild = years, currentChild = years * 2, difference = years * 6;
      const model = { years, pastChild, currentChild, difference };
      return makeQuestion(meta, model,
        'Bố hơn con ' + difference + ' tuổi. Cách đây ' + years + ' năm, tuổi bố gấp 7 lần tuổi con. Hiện nay người con bao nhiêu tuổi?',
        data => integer(data.difference / 6 + data.years),
        data => bruteForceInteger(data.years + 1, 40, child => (child - data.years) * 7 === child + data.difference - data.years),
        ['Hiệu tuổi của hai người không thay đổi theo thời gian.', 'Cách đây ' + years + ' năm, hiệu tuổi ứng với sáu lần tuổi con khi đó.', 'Tìm tuổi con ở thời điểm trước.', 'Cộng số năm đã qua và kiểm tra lại tỉ số tuổi cũ.'],
        { knowledge: ['time', 'add', 'subtract', 'divide-exact', 'difference-ratio', 'logic'], keyPoint: 'Hiệu tuổi là đại lượng bất biến qua mọi thời điểm.', reasoningSteps: 4, unit: 'tuổi', divisions: [{ dividend: difference, divisor: 6, quotient: pastChild, remainder: 0 }] }
      );
    }

    if (mode === 'g4-hidden-average') {
      const fourth = randomInt(28, 52, rng), more = randomInt(3, 8, rng), knownSum = fourth * 3 - more * 4;
      const first = randomInt(10, Math.floor(knownSum / 3), rng), second = randomInt(10, Math.floor((knownSum - first) / 2), rng), third = knownSum - first - second;
      if (third < 5) return null;
      const model = { first, second, third, fourth, more, knownSum };
      return makeQuestion(meta, model,
        'Ba bạn có lần lượt ' + first + ', ' + second + ' và ' + third + ' viên bi. Bạn thứ tư có số bi nhiều hơn trung bình cộng của cả bốn bạn ' + more + ' viên. Bạn thứ tư có bao nhiêu viên bi?',
        data => integer((data.knownSum + data.more * 4) / 3),
        data => bruteForceInteger(0, 100, value => value * 4 === data.knownSum + value + data.more * 4),
        ['Gọi trung bình cộng của bốn bạn là một mức chung.', 'Bạn thứ tư hơn mức chung ' + more + ' viên.', 'Khi tách bạn thứ tư khỏi tổng, ba bạn đầu thiếu đúng ba mức chung nhưng có thêm phần hơn.', 'Tính số bi bạn thứ tư rồi thay vào phép tính trung bình để kiểm tra.'],
        { knowledge: ['average', 'add', 'multiply', 'divide-exact', 'unknown', 'logic'], keyPoint: 'Số của bạn thứ tư xuất hiện cả trong tổng lẫn trong trung bình cộng.', reasoningSteps: 4, unit: 'viên bi', divisions: [{ dividend: knownSum + more * 4, divisor: 3, quotient: fourth, remainder: 0 }] }
      );
    }

    if (mode === 'g4-chain-ratio') {
      const unit = randomInt(12, 40, rng), first = unit * 2, second = unit * 3, third = unit * 5, total = unit * 10;
      const model = { unit, first, second, third, total };
      return makeQuestion(meta, model,
        'Ba kho có tất cả ' + total + ' tạ hàng. Kho A bằng 2/3 kho B; kho B bằng 3/5 kho C. Kho B có bao nhiêu tạ hàng?',
        data => integer(data.total / 10 * 3),
        data => bruteForceInteger(1, data.total, value => {
          const a = value * 2 / 3, c = value * 5 / 3;
          return Number.isInteger(a) && Number.isInteger(c) && a + value + c === data.total;
        }),
        ['Quy về tỉ số chung A : B : C = 2 : 3 : 5.', 'Tổng ba kho ứng với 10 phần bằng nhau.', 'Tìm giá trị một phần rồi lấy ba phần của kho B.', 'Kiểm tra lại cả hai tỉ số liên tiếp.'],
        { knowledge: ['fraction', 'sum-ratio', 'multiply', 'divide-exact', 'logic'], keyPoint: 'Phải nối hai tỉ số qua đại lượng chung là kho B.', reasoningSteps: 4, unit: 'tạ', divisions: [{ dividend: total, divisor: 10, quotient: unit, remainder: 0 }] }
      );
    }

    if (mode === 'g4-changed-ratio') {
      const unit = randomInt(8, 24, rng), first = unit * 2, second = unit * 5, added = unit * 2, total = unit * 7;
      const model = { unit, first, second, added, total };
      return makeQuestion(meta, model,
        'Lúc đầu số sách ngăn A bằng 2/5 số sách ngăn B. Thêm ' + added + ' quyển vào ngăn A thì số sách A bằng 4/5 số sách B. Lúc đầu cả hai ngăn có bao nhiêu quyển?',
        data => integer(data.added / 2 * 7),
        data => {
          for (let value = 1; value <= 1000; value += 1) {
            if (value * 2 === data.added && value * 2 + value * 5 === data.total) return integer(data.total);
          }
          return { kind: 'invalid' };
        },
        ['Biểu diễn ban đầu A là hai phần, B là năm phần.', 'Sau khi thêm, A tăng từ hai phần lên bốn phần trong khi B không đổi.', 'Phần thêm ứng với hai phần nên tìm được một phần.', 'Tính tổng bảy phần ban đầu và kiểm tra tỉ số sau thay đổi.'],
        { knowledge: ['fraction', 'sum-ratio', 'add', 'multiply', 'divide-exact', 'logic'], keyPoint: 'Đại lượng B không đổi là mốc nối hai tỉ số trước và sau.', reasoningSteps: 4, unit: 'quyển', divisions: [{ dividend: added, divisor: 2, quotient: unit, remainder: 0 }] }
      );
    }

    if (mode === 'g4-fraction-series') {
      const n = randomInt(6, 40, rng);
      const model = { n };
      return makeQuestion(meta, model,
        'Tính và rút gọn: 1/(1×2) + 1/(2×3) + 1/(3×4) + … + 1/(' + n + '×' + (n + 1) + ').',
        data => rational(data.n, data.n + 1),
        data => {
          let numerator = 0, denominator = 1;
          for (let value = 1; value <= data.n; value += 1) {
            const termDenominator = value * (value + 1);
            const next = rational(numerator * termDenominator + denominator, denominator * termDenominator);
            numerator = next.numerator; denominator = next.denominator;
          }
          return rational(numerator, denominator);
        },
        ['Tách mỗi số hạng 1/(k×(k+1)) thành 1/k − 1/(k+1).', 'Viết vài số hạng đầu để thấy các phân số ở giữa triệt tiêu từng đôi.', 'Chỉ còn 1 − 1/' + (n + 1) + '.', 'Thực hiện phép trừ và rút gọn; có thể cộng trực tiếp vài trường hợp đầu để kiểm tra quy luật.'],
        { knowledge: ['fraction', 'expression', 'sequence', 'logic'], keyPoint: 'Biến đổi mỗi số hạng làm xuất hiện chuỗi triệt tiêu liên tiếp.', reasoningSteps: 4, inputHint: 'Ví dụ: 3/4' }
      );
    }

    if (mode === 'g5-train-bridge') {
      const speed = randomInt(12, 18, rng), poleTime = randomInt(10, 15, rng), bridgeTime = randomInt(20, 30, rng);
      const bridge = speed * bridgeTime, totalTime = poleTime + bridgeTime, trainLength = speed * poleTime;
      const model = { speed, poleTime, bridgeTime, bridge, totalTime, trainLength };
      return makeQuestion(meta, model,
        'Một đoàn tàu đi qua một cột điện mất ' + poleTime + ' giây. Tàu đi hết một cây cầu dài ' + bridge + ' m trong ' + totalTime + ' giây. Tính chiều dài đoàn tàu.',
        data => integer(data.bridge / (data.totalTime - data.poleTime) * data.poleTime),
        data => bruteForceInteger(1, 1000, length => length * data.totalTime === (length + data.bridge) * data.poleTime),
        ['Qua cột điện, tàu đi quãng đường đúng bằng chiều dài của tàu.', 'Phần thời gian chênh lệch là thời gian tàu đi riêng chiều dài cây cầu.', 'Từ chiều dài cầu và thời gian chênh lệch, tìm vận tốc tàu.', 'Nhân vận tốc với thời gian qua cột điện và thay lại thời gian qua cầu.'],
        { knowledge: ['motion', 'add', 'subtract', 'multiply', 'divide-exact', 'logic'], keyPoint: 'Hai lần đo cùng chứa chiều dài tàu; lấy chênh lệch sẽ tách được chiều dài cầu.', reasoningSteps: 4, unit: 'm', divisions: [{ dividend: bridge, divisor: bridgeTime, quotient: speed, remainder: 0 }] }
      );
    }

    if (mode === 'g5-canoe') {
      const stream = randomInt(2, 6, rng);
      const timePair = pick([[2, 3], [3, 4], [3, 5], [4, 6]], rng);
      const downTime = timePair[0], upTime = timePair[1];
      const distance = 2 * stream * downTime * upTime / (upTime - downTime);
      const model = { stream, downTime, upTime, distance };
      return makeQuestion(meta, model,
        'Một ca-nô đi xuôi dòng từ A đến B mất ' + downTime + ' giờ, đi ngược dòng từ B về A mất ' + upTime + ' giờ. Vận tốc dòng nước là ' + stream + ' km/giờ. Tính quãng đường AB.',
        data => integer(2 * data.stream * data.downTime * data.upTime / (data.upTime - data.downTime)),
        data => bruteForceInteger(1, 500, value => value % data.downTime === 0 && value % data.upTime === 0 && value / data.downTime - value / data.upTime === data.stream * 2),
        ['Hiệu vận tốc xuôi dòng và ngược dòng bằng hai lần vận tốc dòng nước.', 'Cùng một quãng đường nên vận tốc tỉ lệ nghịch với thời gian.', 'Từ hiệu và tỉ số hai vận tốc, tìm vận tốc xuôi dòng.', 'Nhân vận tốc xuôi dòng với thời gian xuôi rồi kiểm tra lượt ngược dòng.'],
        { knowledge: ['motion', 'ratio', 'add', 'subtract', 'multiply', 'divide-exact', 'logic'], keyPoint: 'Kết nối hiệu vận tốc do dòng nước với tỉ số vận tốc do thời gian tạo ra.', reasoningSteps: 4, unit: 'km', divisions: [{ dividend: distance, divisor: downTime, quotient: distance / downTime, remainder: 0 }, { dividend: distance, divisor: upTime, quotient: distance / upTime, remainder: 0 }] }
      );
    }

    if (mode === 'g5-concentration') {
      const mass = randomInt(1, 12, rng) * 100, firstPercent = 5, finalPercent = 2;
      const salt = mass * firstPercent / 100, finalMass = salt * 100 / finalPercent, addedWater = finalMass - mass;
      const model = { mass, firstPercent, finalPercent, salt, finalMass, addedWater };
      return makeQuestion(meta, model,
        'Có ' + mass + ' g dung dịch nước muối nồng độ 5%. Cần thêm bao nhiêu gam nước để được dung dịch mới có nồng độ 2%?',
        data => integer(data.salt * 100 / data.finalPercent - data.mass),
        data => bruteForceInteger(0, 2000, water => data.salt * 100 === (data.mass + water) * data.finalPercent),
        ['Tính lượng muối nguyên chất có trong dung dịch ban đầu.', 'Khi thêm nước, lượng muối không thay đổi.', 'Từ lượng muối và nồng độ 2%, tìm khối lượng dung dịch mới.', 'Lấy khối lượng mới trừ khối lượng cũ và kiểm tra lại nồng độ.'],
        { knowledge: ['percent', 'measure', 'add', 'subtract', 'multiply', 'divide-exact', 'logic'], keyPoint: 'Lượng muối là đại lượng bất biến; chỉ tổng khối lượng dung dịch thay đổi.', reasoningSteps: 4, unit: 'g', divisions: [{ dividend: mass * firstPercent, divisor: 100, quotient: salt, remainder: 0 }, { dividend: salt * 100, divisor: finalPercent, quotient: finalMass, remainder: 0 }] }
      );
    }

    if (mode === 'g5-work-rate') {
      const baseTimes = pick([[6, 10, 15], [4, 6, 12], [6, 8, 24], [8, 12, 24]], rng);
      const timeScale = randomInt(1, 3, rng);
      const times = baseTimes.map(value => value * timeScale);
      const common = lcm(lcm(times[0], times[1]), times[2]);
      const hourly = common / times[0] + common / times[1] + common / times[2];
      const answer = common / hourly;
      const model = { times, common, hourly, answer };
      return makeQuestion(meta, model,
        'Ba người làm riêng một công việc lần lượt hết ' + times[0] + ' giờ, ' + times[1] + ' giờ và ' + times[2] + ' giờ. Nếu cùng làm từ đầu thì sau bao nhiêu giờ hoàn thành?',
        data => integer(data.common / data.hourly),
        data => bruteForceInteger(1, 24, hours => hours * data.hourly === data.common),
        ['Coi toàn bộ công việc gồm ' + common + ' phần bằng nhau.', 'Tính số phần mỗi người làm được trong một giờ.', 'Cộng năng suất một giờ của cả ba người.', 'Lấy toàn bộ công việc chia năng suất chung và kiểm tra phần việc sau số giờ tìm được.'],
        { knowledge: ['fraction', 'unit-rate', 'add', 'divide-exact', 'logic'], keyPoint: 'Cộng năng suất làm việc, không cộng thời gian hoàn thành.', reasoningSteps: 4, unit: 'giờ', divisions: [{ dividend: common, divisor: times[0], quotient: common / times[0], remainder: 0 }, { dividend: common, divisor: times[1], quotient: common / times[1], remainder: 0 }, { dividend: common, divisor: times[2], quotient: common / times[2], remainder: 0 }, { dividend: common, divisor: hourly, quotient: answer, remainder: 0 }] }
      );
    }

    if (mode === 'g5-area-ratio') {
      const unit = randomInt(12, 50, rng), totalArea = unit * 9, firstArea = unit * 3, answer = unit * 2;
      const model = { unit, totalArea, firstArea, answer };
      return makeQuestion(meta, model,
        'Tam giác ABC có diện tích ' + totalArea + ' cm². Trên BC lấy D sao cho BD bằng 1/3 BC. Trên AD lấy E sao cho AE bằng 2/3 AD. Diện tích tam giác ABE bằng bao nhiêu?',
        data => integer(data.totalArea / 3 * 2 / 3),
        data => {
          const areaABD = data.totalArea / 3;
          return integer(areaABD * 2 / 3);
        },
        ['Tam giác ABD và ABC chung chiều cao từ A nên diện tích tỉ lệ với đáy BD và BC.', 'Suy ra diện tích ABD bằng 1/3 diện tích ABC.', 'Tam giác ABE và ABD chung chiều cao từ B nên diện tích tỉ lệ với AE và AD.', 'Lấy 2/3 diện tích ABD rồi kiểm tra chuỗi hai tỉ số diện tích.'],
        { knowledge: ['area', 'fraction', 'ratio', 'multiply', 'divide-exact', 'logic'], keyPoint: 'Dùng hai lần quan hệ diện tích của các tam giác chung chiều cao.', reasoningSteps: 4, unit: 'cm²', divisions: [{ dividend: totalArea, divisor: 3, quotient: firstArea, remainder: 0 }, { dividend: firstArea * 2, divisor: 3, quotient: answer, remainder: 0 }] }
      );
    }

    if (mode === 'g5-clock-hands') {
      const hour = randomInt(1, 10, rng);
      const model = { hour, gap: hour * 5, minuteSpeed: 1, hourSpeedNumerator: 1, hourSpeedDenominator: 12 };
      return makeQuestion(meta, model,
        'Lúc ' + hour + ' giờ đúng, sau ít nhất bao nhiêu phút thì kim phút đuổi kịp và trùng với kim giờ? Viết đáp án dưới dạng phân số phút.',
        data => rational(data.gap * data.hourSpeedDenominator, data.hourSpeedDenominator - data.hourSpeedNumerator),
        data => rational(data.hour * 60, 11),
        ['Lúc ' + hour + ' giờ, hai kim cách nhau ' + (hour * 5) + ' khoảng phút trên mặt đồng hồ.', 'Mỗi phút kim phút đi 1 khoảng, kim giờ đi 1/12 khoảng.', 'Hiệu vận tốc của hai kim là 11/12 khoảng mỗi phút.', 'Lấy khoảng cách ban đầu chia hiệu vận tốc và kiểm tra vị trí của hai kim.'],
        { knowledge: ['time', 'fraction', 'ratio', 'logic'], keyPoint: 'Kim giờ vẫn chuyển động trong lúc kim phút đuổi theo.', reasoningSteps: 4, unit: 'phút', inputHint: 'Ví dụ: 360/11' }
      );
    }

    if (mode === 'g5-tank-valves') {
      let times = null;
      const candidates = [4, 5, 6, 8, 10, 12, 15, 18, 20, 24, 30];
      for (let attempt = 0; attempt < 50; attempt += 1) {
        const proposal = [pick(candidates, rng), pick(candidates, rng), pick(candidates, rng)];
        const proposalCommon = lcm(lcm(proposal[0], proposal[1]), proposal[2]);
        const proposalNet = proposalCommon / proposal[0] + proposalCommon / proposal[1] - proposalCommon / proposal[2];
        if (proposalNet > 0 && proposalCommon % proposalNet === 0 && proposalCommon / proposalNet <= 24) { times = proposal; break; }
      }
      if (!times) return null;
      const common = lcm(lcm(times[0], times[1]), times[2]);
      const inletA = common / times[0], inletB = common / times[1], outlet = common / times[2];
      const net = inletA + inletB - outlet, answer = common / net;
      const model = { times, common, inletA, inletB, outlet, net, answer };
      return makeQuestion(meta, model,
        'Một bể đang rỗng. Vòi A chảy một mình đầy bể trong ' + times[0] + ' giờ, vòi B trong ' + times[1] + ' giờ; vòi thoát C tháo một bể đầy trong ' + times[2] + ' giờ. Mở cả ba vòi cùng lúc thì sau bao nhiêu giờ bể đầy?',
        data => integer(data.common / data.net),
        data => bruteForceInteger(1, 24, hours => hours * (data.inletA + data.inletB - data.outlet) === data.common),
        ['Coi dung tích bể gồm ' + common + ' phần bằng nhau.', 'Tìm lượng nước hai vòi A, B đưa vào trong một giờ.', 'Bớt lượng nước vòi C tháo ra để được lượng nước thực tăng mỗi giờ.', 'Lấy dung tích bể chia cho lượng tăng mỗi giờ và kiểm tra lại sau số giờ tìm được.'],
        { knowledge: ['fraction', 'unit-rate', 'add', 'subtract', 'divide-exact', 'logic'], keyPoint: 'Vòi thoát phải được trừ khỏi tổng năng suất của hai vòi vào.', reasoningSteps: 4, unit: 'giờ', divisions: [{ dividend: common, divisor: times[0], quotient: inletA, remainder: 0 }, { dividend: common, divisor: times[1], quotient: inletB, remainder: 0 }, { dividend: common, divisor: times[2], quotient: outlet, remainder: 0 }, { dividend: common, divisor: net, quotient: answer, remainder: 0 }] }
      );
    }

    if (mode === 'g5-rabbit-chase') {
      const rabbitSpeed = randomInt(8, 14, rng) * 10;
      const difference = randomInt(3, 7, rng) * 10;
      const dogSpeed = rabbitSpeed + difference;
      const headStart = randomInt(2, 6, rng);
      const lead = rabbitSpeed * headStart;
      if (lead % difference !== 0) return null;
      const answer = lead / difference;
      const model = { rabbitSpeed, dogSpeed, headStart, lead, difference, answer };
      return makeQuestion(meta, model,
        'Một con thỏ chạy với vận tốc ' + rabbitSpeed + ' m/phút. Sau ' + headStart + ' phút, một con chó bắt đầu đuổi theo cùng đường với vận tốc ' + dogSpeed + ' m/phút. Kể từ lúc chó bắt đầu chạy, sau bao nhiêu phút chó đuổi kịp thỏ?',
        data => integer(data.rabbitSpeed * data.headStart / (data.dogSpeed - data.rabbitSpeed)),
        data => bruteForceInteger(1, 60, minutes => data.dogSpeed * minutes === data.rabbitSpeed * (minutes + data.headStart)),
        ['Tính quãng đường thỏ đã chạy trước khi chó xuất phát.', 'Mỗi phút, chó rút ngắn khoảng cách bằng hiệu hai vận tốc.', 'Lấy khoảng cách chạy trước chia cho phần rút ngắn mỗi phút.', 'So sánh quãng đường chó chạy với tổng quãng đường thỏ chạy để kiểm tra.'],
        { knowledge: ['motion', 'unit-rate', 'multiply', 'subtract', 'divide-exact', 'logic'], keyPoint: 'Thời gian cần tìm bắt đầu khi chó xuất phát, còn thỏ đã có một quãng đường chạy trước.', reasoningSteps: 4, unit: 'phút', divisions: [{ dividend: lead, divisor: difference, quotient: answer, remainder: 0 }] }
      );
    }

    if (mode === 'g5-reverse-percent') {
      const rate = pick([20, 25, 50], rng);
      const original = randomInt(4, 20, rng) * 100;
      const received = original * (100 + rate) / 100;
      const given = randomInt(1, Math.max(1, Math.floor(received / 200))) * 100;
      const remaining = received - given;
      const model = { rate, original, received, given, remaining };
      return makeQuestion(meta, model,
        'Một thư viện nhận thêm số sách bằng ' + rate + '% số sách ban đầu, sau đó chuyển đi ' + given + ' cuốn và còn ' + remaining + ' cuốn. Ban đầu thư viện có bao nhiêu cuốn sách?',
        data => integer((data.remaining + data.given) * 100 / (100 + data.rate)),
        data => bruteForceInteger(1, 10000, value => value * (100 + data.rate) === (data.remaining + data.given) * 100),
        ['Cộng lại số sách đã chuyển đi để tìm số sách ngay sau khi nhận thêm.', 'Số sách sau khi nhận ứng với ' + (100 + rate) + '% số ban đầu.', 'Đưa số sách sau khi nhận về 1% rồi tìm 100%.', 'Lấy số ban đầu cộng phần nhận thêm, sau đó bớt số chuyển đi để kiểm tra.'],
        { knowledge: ['percent', 'add', 'subtract', 'multiply', 'divide-exact', 'logic'], keyPoint: 'Phần trăm nhận thêm được tính theo số sách ban đầu, không theo số sách còn lại.', reasoningSteps: 4, unit: 'cuốn', divisions: [{ dividend: received * 100, divisor: 100 + rate, quotient: original, remainder: 0 }] }
      );
    }

    if (mode === 'g5-average-speed') {
      let outward = 0, returnSpeed = 0, answer = 0;
      for (let attempt = 0; attempt < 50; attempt += 1) {
        outward = randomInt(5, 14, rng) * 6;
        returnSpeed = randomInt(6, 16, rng) * 6;
        if (outward === returnSpeed) continue;
        const candidate = 2 * outward * returnSpeed / (outward + returnSpeed);
        if (Number.isInteger(candidate)) { answer = candidate; break; }
      }
      if (!answer) return null;
      const distance = lcm(outward, returnSpeed) * randomInt(1, 3, rng);
      const totalDistance = distance * 2;
      const totalTime = distance / outward + distance / returnSpeed;
      const model = { outward, returnSpeed, distance, totalDistance, totalTime, answer };
      return makeQuestion(meta, model,
        'Một xe đi từ A đến B với vận tốc ' + outward + ' km/giờ rồi trở về đúng quãng đường đó với vận tốc ' + returnSpeed + ' km/giờ. Vận tốc trung bình của cả hành trình là bao nhiêu km/giờ?',
        data => integer(data.totalDistance / data.totalTime),
        data => integer(2 * data.outward * data.returnSpeed / (data.outward + data.returnSpeed)),
        ['Chọn một quãng đường AB thuận tiện chia hết cho cả hai vận tốc.', 'Tính thời gian lượt đi và lượt về; hai thời gian thường không bằng nhau.', 'Cộng hai quãng đường và hai thời gian.', 'Lấy tổng quãng đường chia tổng thời gian, không lấy trung bình cộng hai vận tốc.'],
        { knowledge: ['motion', 'average', 'multiply', 'add', 'divide-exact', 'logic'], keyPoint: 'Vận tốc trung bình phải tính từ tổng quãng đường và tổng thời gian.', reasoningSteps: 4, unit: 'km/giờ', divisions: [{ dividend: distance, divisor: outward, quotient: distance / outward, remainder: 0 }, { dividend: distance, divisor: returnSpeed, quotient: distance / returnSpeed, remainder: 0 }, { dividend: totalDistance, divisor: totalTime, quotient: answer, remainder: 0 }] }
      );
    }

    if (mode === 'g5-changed-speed-meet') {
      const ratio = pick([[3, 2], [4, 3], [5, 3], [5, 4]], rng), unit = randomInt(6, 16, rng);
      const speedA = ratio[0] * unit, speedB = ratio[1] * unit, difference = speedA - speedB;
      const reduceA = randomInt(1, difference - 1, rng), increaseB = difference - reduceA, meetingHours = randomInt(2, 6, rng);
      const distance = (speedA + speedB) * meetingHours;
      const model = { ratioA: ratio[0], ratioB: ratio[1], unit, speedA, speedB, difference, reduceA, increaseB, meetingHours, distance, challengeDepth: 4 };
      return makeQuestion(meta, model,
        'Hai xe xuất phát cùng lúc từ A và B, đi ngược chiều và gặp nhau sau ' + meetingHours + ' giờ. Trước khi gặp, quãng đường xe A đi bằng ' + ratio[0] + '/' + ratio[1] + ' quãng đường xe B đi. Nếu giảm vận tốc xe A ' + reduceA + ' km/giờ và tăng vận tốc xe B ' + increaseB + ' km/giờ thì hai vận tốc bằng nhau. Tính quãng đường AB.',
        data => integer((data.reduceA + data.increaseB) / (data.ratioA - data.ratioB) * (data.ratioA + data.ratioB) * data.meetingHours),
        data => bruteForceInteger(1, 5000, value => value % data.meetingHours === 0 && value / data.meetingHours === data.speedA + data.speedB),
        ['Vì hai xe đi cùng thời gian trước khi gặp, tỉ số quãng đường cũng là tỉ số vận tốc.', 'Hiệu hai vận tốc bằng tổng phần giảm của A và phần tăng của B.', 'Dùng hiệu số phần để tìm một phần vận tốc rồi tìm tổng hai vận tốc.', 'Nhân tổng vận tốc với thời gian gặp nhau và kiểm tra hai quãng đường.'],
        { knowledge: ['motion', 'ratio', 'add', 'subtract', 'multiply', 'divide-exact', 'logic'], keyPoint: 'Điều kiện thay đổi vận tốc cho biết hiệu vận tốc; tỉ số quãng đường cho biết tỉ số vận tốc.', reasoningSteps: 4, unit: 'km', divisions: [{ dividend: reduceA + increaseB, divisor: ratio[0] - ratio[1], quotient: unit, remainder: 0 }] }
      );
    }

    if (mode === 'g5-odd-fractions') {
      const count = randomInt(5, 20, rng);
      const lastOdd = count * 2 + 1;
      const model = { count, lastOdd };
      return makeQuestion(meta, model,
        'Tính và rút gọn: 1/(1×3) + 1/(3×5) + 1/(5×7) + … + 1/(' + (lastOdd - 2) + '×' + lastOdd + ').',
        data => rational(data.count, data.lastOdd),
        data => {
          let numerator = 0, denominator = 1;
          for (let index = 1; index <= data.count; index += 1) {
            const left = index * 2 - 1, right = index * 2 + 1;
            const next = rational(numerator * left * right + denominator, denominator * left * right);
            numerator = next.numerator; denominator = next.denominator;
          }
          return rational(numerator, denominator);
        },
        ['Nhận ra 1/((2k−1)(2k+1)) bằng một nửa của hiệu 1/(2k−1) và 1/(2k+1).', 'Viết vài số hạng đầu theo dạng hiệu để thấy các phân số ở giữa triệt tiêu.', 'Phần còn lại bằng một nửa của 1 − 1/' + lastOdd + '.', 'Thực hiện phép trừ, rút gọn và cộng trực tiếp vài số hạng đầu để kiểm tra.'],
        { knowledge: ['fraction', 'expression', 'sequence', 'logic'], keyPoint: 'Tách mỗi số hạng thành hiệu để tạo chuỗi triệt tiêu cách một số lẻ.', reasoningSteps: 4, inputHint: 'Ví dụ: 5/11' }
      );
    }

    if (mode === 'g5-age-sum') {
      const years = randomInt(4, 10, rng);
      const futureChild = randomInt(years + 7, years + 16, rng);
      const ratio = pick([3, 4], rng);
      const child = futureChild - years;
      const parent = futureChild * ratio - years;
      const total = child + parent;
      const model = { years, futureChild, ratio, child, parent, total };
      return makeQuestion(meta, model,
        'Hiện nay tổng số tuổi của hai mẹ con là ' + total + ' tuổi. Sau ' + years + ' năm nữa, tuổi mẹ gấp ' + ratio + ' lần tuổi con. Hiện nay người con bao nhiêu tuổi?',
        data => integer((data.total + data.years * 2) / (data.ratio + 1) - data.years),
        data => bruteForceInteger(1, 40, value => data.total - value + data.years === (value + data.years) * data.ratio),
        ['Sau ' + years + ' năm, tổng tuổi hai mẹ con tăng thêm ' + (years * 2) + ' tuổi.', 'Ở thời điểm đó, tổng tuổi được chia thành ' + (ratio + 1) + ' phần bằng nhau.', 'Tìm tuổi con sau ' + years + ' năm rồi bớt số năm đã qua.', 'Dùng tuổi mẹ hiện nay và tuổi con tìm được để kiểm tra tỉ số trong tương lai.'],
        { knowledge: ['time', 'ratio', 'add', 'subtract', 'divide-exact', 'logic'], keyPoint: 'Khi thời gian trôi qua, tuổi của cả hai người cùng tăng nên tổng tuổi tăng gấp đôi số năm.', reasoningSteps: 4, unit: 'tuổi', divisions: [{ dividend: total + years * 2, divisor: ratio + 1, quotient: futureChild, remainder: 0 }] }
      );
    }

    if (mode === 'g5-market-price') {
      const cost = randomInt(4, 20, rng) * 500;
      const markup = 50, discount = 20;
      const listed = cost * 3 / 2;
      const sold = listed * 4 / 5;
      const model = { cost, markup, discount, listed, sold };
      return makeQuestion(meta, model,
        'Một cửa hàng niêm yết giá cao hơn giá vốn 50%, sau đó giảm 20% trên giá niêm yết và bán với giá ' + sold + ' nghìn đồng. Giá vốn của món hàng là bao nhiêu nghìn đồng?',
        data => integer(data.sold * 100 / (100 - data.discount) * 100 / (100 + data.markup)),
        data => bruteForceInteger(1, 20000, value => value * 150 * 80 === data.sold * 10000),
        ['Khôi phục giá niêm yết từ giá đã giảm 20%.', 'Giá niêm yết ứng với 150% giá vốn.', 'Đưa giá niêm yết về 100% để tìm giá vốn.', 'Tăng giá vốn 50% rồi giảm giá mới 20% để kiểm tra đúng giá bán.'],
        { knowledge: ['percent', 'money', 'multiply', 'divide-exact', 'logic'], keyPoint: 'Hai tỉ lệ phần trăm có hai mốc khác nhau: giá vốn và giá niêm yết.', reasoningSteps: 4, unit: 'nghìn đồng', divisions: [{ dividend: sold * 100, divisor: 80, quotient: listed, remainder: 0 }, { dividend: listed * 100, divisor: 150, quotient: cost, remainder: 0 }] }
      );
    }

    if (mode === 'g5-shelf-transfer') {
      const unit = randomInt(6, 24, rng);
      const shelfA = unit * 3, shelfB = unit * 7, moved = unit;
      const total = shelfA + shelfB;
      const model = { unit, shelfA, shelfB, moved, total };
      return makeQuestion(meta, model,
        'Lúc đầu số sách ngăn A bằng 3/7 số sách ngăn B. Chuyển ' + moved + ' quyển từ B sang A thì số sách A bằng 2/3 số sách B. Lúc đầu cả hai ngăn có bao nhiêu quyển sách?',
        data => integer(data.moved * 10),
        data => {
          for (let a = 1; a <= 2000; a += 1) {
            if ((a * 7) % 3 !== 0) continue;
            const b = a * 7 / 3;
            if ((a + data.moved) * 3 === (b - data.moved) * 2) return integer(a + b);
          }
          return { kind: 'invalid' };
        },
        ['Biểu diễn ban đầu A gồm 3 phần và B gồm 7 phần bằng nhau.', 'Sau khi chuyển, A có 4 phần còn B có 6 phần, đúng tỉ số 2/3.', 'Số sách chuyển ứng với đúng một phần nên xác định được giá trị một phần.', 'Tính tổng 10 phần ban đầu và kiểm tra lại cả hai tỉ số.'],
        { knowledge: ['fraction', 'ratio', 'multiply', 'logic'], keyPoint: 'Cùng chọn một đơn vị phần để mô tả được cả trạng thái trước và sau khi chuyển.', reasoningSteps: 4, unit: 'quyển' }
      );
    }

    if (mode === 'g5-handshakes') {
      const people = randomInt(10, 25, rng);
      const handshakes = people * (people - 1) / 2;
      const model = { people, handshakes };
      return makeQuestion(meta, model,
        'Trong một buổi gặp mặt, mỗi người bắt tay mỗi người khác đúng một lần. Có tất cả ' + handshakes + ' cái bắt tay. Buổi gặp mặt có bao nhiêu người?',
        data => integer(data.people),
        data => bruteForceInteger(2, 100, value => value * (value - 1) / 2 === data.handshakes),
        ['Nếu có n người thì mỗi người có thể bắt tay với n − 1 người còn lại.', 'Tích n × (n − 1) đếm mỗi cái bắt tay hai lần.', 'Tìm hai số tự nhiên liên tiếp có tích bằng hai lần ' + handshakes + '.', 'Chọn số lớn hơn làm số người và kiểm tra lại số cặp không lặp.'],
        { knowledge: ['multiply', 'divide-exact', 'unknown', 'logic'], keyPoint: 'Mỗi cặp người chỉ tạo một cái bắt tay, nên phép đếm theo từng người bị lặp hai lần.', reasoningSteps: 4, unit: 'người', divisions: [{ dividend: people * (people - 1), divisor: 2, quotient: handshakes, remainder: 0 }] }
      );
    }

    if (mode === 'g5-equal-area') {
      const addedLength = pick([4, 5, 6], rng);
      const factor = randomInt(4, 10, rng);
      const reducedWidth = randomInt(2, 7, rng);
      const length = addedLength * (factor - 1);
      const width = reducedWidth * factor;
      const area = length * width;
      const model = { addedLength, factor, reducedWidth, length, width, area };
      return makeQuestion(meta, model,
        'Một hình chữ nhật dài ' + length + ' cm. Nếu tăng chiều dài thêm ' + addedLength + ' cm và giảm chiều rộng ' + reducedWidth + ' cm thì diện tích không đổi. Chiều rộng ban đầu là bao nhiêu xăng-ti-mét?',
        data => integer(data.reducedWidth * (data.length + data.addedLength) / data.addedLength),
        data => bruteForceInteger(data.reducedWidth + 1, 500, value => data.length * value === (data.length + data.addedLength) * (value - data.reducedWidth)),
        ['Phần diện tích tăng do kéo dài bằng phần diện tích mất do giảm chiều rộng.', 'Lập hai diện tích trước và sau bằng nhau rồi bỏ phần chung.', 'Từ độ tăng chiều dài và độ giảm chiều rộng, tìm chiều rộng ban đầu.', 'Tính trực tiếp hai diện tích để kiểm tra chúng bằng nhau.'],
        { knowledge: ['area', 'multiply', 'divide-exact', 'unknown', 'logic'], keyPoint: 'Hai kích thước cùng thay đổi nhưng diện tích giữ nguyên, nên có thể cân bằng phần tăng và phần giảm.', reasoningSteps: 4, unit: 'cm', divisions: [{ dividend: reducedWidth * (length + addedLength), divisor: addedLength, quotient: width, remainder: 0 }] }
      );
    }

    if (mode === 'g5-geometric-fractions') {
      const count = randomInt(5, 18, rng);
      const denominator = 2 ** count;
      const model = { count, denominator };
      return makeQuestion(meta, model,
        'Tính và rút gọn tổng gồm ' + count + ' số hạng: 1/2 + 1/4 + 1/8 + … + 1/' + denominator + '.',
        data => rational(data.denominator - 1, data.denominator),
        data => {
          let numerator = 0;
          for (let power = 1; power <= data.count; power += 1) numerator += data.denominator / (2 ** power);
          return rational(numerator, data.denominator);
        },
        ['Gọi tổng cần tìm là S rồi nhân cả tổng với 2.', 'Khi lấy 2S − S, các số hạng ở giữa triệt tiêu từng đôi.', 'Phần còn lại là 1 − 1/' + denominator + '.', 'Thực hiện phép trừ, rút gọn và cộng trực tiếp các tử số cùng mẫu để kiểm tra.'],
        { knowledge: ['fraction', 'expression', 'sequence', 'logic'], keyPoint: 'Nhân tổng với 2 làm dãy dịch một vị trí và tạo phép triệt tiêu.', reasoningSteps: 4, inputHint: 'Ví dụ: 31/32' }
      );
    }

    return null;
  };

  BUILDERS.championExtra = function (meta, params, rng) {
    const mode = params.mode;

    if (mode === 'g1-reverse-steps') {
      const start = randomInt(8, 35, rng), added = randomInt(4, 10, rng), removed = randomInt(2, added - 1, rng), finalAdded = randomInt(2, 8, rng), end = start + added - removed + finalAdded;
      const model = { start, added, removed, finalAdded, end };
      return makeQuestion(meta, model, 'Trong hộp có một số thẻ. Thêm ' + added + ' thẻ, lấy ra ' + removed + ' thẻ rồi thêm tiếp ' + finalAdded + ' thẻ thì có ' + end + ' thẻ. Lúc đầu có bao nhiêu thẻ?', data => integer(data.end - data.finalAdded + data.removed - data.added), data => bruteForceInteger(0, 100, value => value + data.added - data.removed + data.finalAdded === data.end), ['Đi ngược từ số thẻ cuối cùng.', 'Bớt lần thêm cuối.', 'Cộng lại số đã lấy ra rồi bớt lần thêm đầu.', 'Tính xuôi ba thay đổi để kiểm tra.'], { knowledge: ['add', 'subtract', 'logic'], keyPoint: 'Làm ngược phải đảo thứ tự và đảo từng phép thay đổi.', reasoningSteps: 4 });
    }
    if (mode === 'g1-three-friends') {
      const first = randomInt(5, 16, rng), moreB = randomInt(2, 6, rng), moreC = randomInt(2, 6, rng), second = first + moreB, third = second + moreC, total = first + second + third;
      const model = { first, second, third, moreB, moreC, total };
      return makeQuestion(meta, model, 'Ba bạn có tất cả ' + total + ' nhãn vở. Bình nhiều hơn An ' + moreB + ' nhãn, Chi nhiều hơn Bình ' + moreC + ' nhãn. Bình có bao nhiêu nhãn vở?', data => integer((data.total + data.moreB - data.moreC) / 3), data => bruteForceInteger(0, data.total, value => value - data.moreB + value + value + data.moreC === data.total), ['Coi số nhãn của Bình là mức giữa.', 'An ít hơn mức giữa, Chi nhiều hơn mức giữa.', 'Bù hai phần chênh vào tổng để tạo ba phần bằng nhau.', 'Tìm mức giữa rồi cộng ba bạn để kiểm tra.'], { knowledge: ['add', 'subtract', 'logic'], keyPoint: 'Chọn Bình làm mốc giúp hai quan hệ cùng quy về một số.', reasoningSteps: 4 });
    }
    if (mode === 'g1-two-rules') {
      const start = randomInt(2, 12, rng), firstStep = randomInt(2, 5, rng), secondStep = randomInt(6, 9, rng), values = [start, start + firstStep, start + firstStep + secondStep, start + firstStep * 2 + secondStep, start + firstStep * 2 + secondStep * 2];
      const model = { start, firstStep, secondStep, values, answer: values[4] + firstStep };
      return makeQuestion(meta, model, 'Dãy số đi luân phiên bước ngắn rồi bước dài: ' + values.join(', ') + ', … Số tiếp theo là bao nhiêu?', data => integer(data.answer), data => { let value = data.start; for (let i = 1; i <= 5; i += 1) value += i % 2 ? data.firstStep : data.secondStep; return integer(value); }, ['Tìm độ tăng giữa từng cặp số.', 'Nhận ra hai bước tăng luân phiên.', 'Số cuối vừa đi bước dài nên lượt tiếp theo là bước ngắn.', 'Cộng bước ngắn và kiểm tra lại cả dãy.'], { knowledge: ['add', 'sequence', 'logic'], keyPoint: 'Dãy dùng hai khoảng cách xen kẽ chứ không dùng một khoảng cách.', reasoningSteps: 4 });
    }
    if (mode === 'g1-order-clues') {
      const model = { answer: 3 };
      return makeQuestion(meta, model, variantText(meta, 'Bốn bạn An, Bình, Chi, Dũng ngồi một hàng. Chi ngồi ngoài cùng bên phải; Bình ngồi ngay bên trái An; An không ngồi cạnh Chi. Dũng ngồi thứ mấy từ trái sang?', 'Bốn bạn Mai, Lan, Hà, Vy xếp một hàng. Vy đứng ngoài cùng bên phải; Lan đứng ngay bên trái Mai; Mai không đứng cạnh Vy. Hà đứng thứ mấy từ trái sang?'), data => integer(data.answer), data => integer(3), ['Đặt bạn ngoài cùng bên phải vào vị trí thứ tư.', 'Xét cặp hai bạn đứng liền nhau theo đúng thứ tự.', 'Loại vị trí làm một bạn đứng cạnh người ngoài cùng.', 'Vị trí còn lại thuộc về bạn được hỏi; kiểm tra đủ bốn chỗ.'], { knowledge: ['position', 'logic'], keyPoint: 'Phải ghép đồng thời điều kiện đứng liền nhau và điều kiện không đứng cạnh.', reasoningSteps: 4 });
    }
    if (mode === 'g1-number-cross') {
      const target = randomInt(18, 35, rng), left = randomInt(3, 9, rng), right = randomInt(3, 9, rng), missing = target - left - right;
      if (missing < 1 || missing > 20) return null;
      const model = { target, left, right, missing };
      return makeQuestion(meta, model, 'Mỗi hàng của một bảng số đều có tổng ' + target + '. Một hàng có các số ' + left + ', □, ' + right + '. Số trong ô là bao nhiêu?', data => integer(data.target - data.left - data.right), data => bruteForceInteger(0, 40, value => data.left + value + data.right === data.target), ['Xác định tổng chung của mỗi hàng.', 'Cộng hai số đã biết trong hàng còn thiếu.', 'Lấy tổng chung bớt phần đã biết.', 'Cộng lại đủ ba số để kiểm tra.'], { knowledge: ['add', 'subtract', 'logic'], keyPoint: 'Ô trống phải làm cho hàng giữ đúng tổng chung.', reasoningSteps: 4 });
    }
    if (mode === 'g1-hidden-start') {
      const first = randomInt(10, 30, rng), second = randomInt(5, 20, rng), sum = first + second, difference = Math.abs(first - second), answer = Math.max(first, second);
      const model = { sum, difference, answer };
      return makeQuestion(meta, model, 'Hai số có tổng là ' + sum + ' và số lớn hơn số bé ' + difference + '. Số lớn là bao nhiêu?', data => integer((data.sum + data.difference) / 2), data => bruteForceInteger(0, data.sum, value => value + (value - data.difference) === data.sum), ['Bớt phần hơn của số lớn.', 'Phần còn lại gồm hai số bằng nhau.', 'Tìm số bé rồi cộng lại phần hơn.', 'Kiểm tra cả tổng và độ chênh.'], { knowledge: ['add', 'subtract', 'compare', 'logic'], keyPoint: 'Bớt phần hơn sẽ đưa hai số về bằng nhau.', reasoningSteps: 4 });
    }

    if (mode === 'g2-cuts') {
      const sticks = pick([2, 5], rng);
      const piecesEach = randomInt(6, 10, rng);
      const boxes = pick([2, 5], rng);
      const totalPieces = sticks * piecesEach;
      const removable = Array.from({ length: Math.min(10, totalPieces - 1) - 1 }, (_, index) => index + 2)
        .filter(removed => (totalPieces - removed) % boxes === 0 && totalPieces - removed > 0);
      if (!removable.length) return null;
      const removed = pick(removable, rng);
      const eachBox = (totalPieces - removed) / boxes;
      const model = { sticks, piecesEach, boxes, totalPieces, removed, eachBox, challengeDepth: 3 };
      return makeQuestion(meta, model,
        'Có ' + sticks + ' que dài, mỗi que được cắt thành ' + piecesEach + ' đoạn rời nhau. Dùng riêng ' + removed + ' đoạn, số còn lại chia đều vào ' + boxes + ' hộp. Mỗi hộp có bao nhiêu đoạn?',
        data => integer((data.sticks * data.piecesEach - data.removed) / data.boxes),
        data => {
          const pieces = [];
          for (let stick = 0; stick < data.sticks; stick += 1) for (let piece = 0; piece < data.piecesEach; piece += 1) pieces.push(1);
          pieces.splice(0, data.removed);
          return pieces.length % data.boxes === 0 ? integer(pieces.length / data.boxes) : { kind: 'invalid' };
        },
        ['Tìm tổng số đoạn tạo ra từ tất cả các que.', 'Bớt số đoạn đã dùng riêng.', 'Chia đều số đoạn còn lại vào ' + boxes + ' hộp.', 'Nhân ngược số đoạn mỗi hộp rồi cộng phần dùng riêng để kiểm tra tổng ban đầu.'],
        { knowledge: ['multiply-basic', 'subtract', 'divide-exact', 'logic'], keyPoint: 'Đề cho số đoạn của mỗi que, không phải số nhát cắt; phải tìm tổng đoạn trước khi chia.', reasoningSteps: 4, unit: 'đoạn', divisions: [{ dividend: totalPieces - removed, divisor: boxes, quotient: eachBox, remainder: 0 }] }
      );
    }
    if (mode === 'g2-transfer-bags') {
      const equal = randomInt(20, 60, rng), moved = randomInt(4, 12, rng), first = equal + moved, second = equal - moved, total = equal * 2;
      const model = { equal, moved, first, second, total };
      return makeQuestion(meta, model, 'Hai túi có tất cả ' + total + ' viên bi. Chuyển ' + moved + ' viên từ túi nhiều sang túi ít thì hai túi bằng nhau. Túi ít lúc đầu có bao nhiêu viên?', data => integer(data.total / 2 - data.moved), data => bruteForceInteger(0, data.total, value => value + data.moved === data.total - value - data.moved), ['Tổng số bi không đổi sau khi chuyển.', 'Chia tổng thành hai phần bằng nhau ở trạng thái cuối.', 'Túi ít đã nhận thêm nên bớt số chuyển.', 'Thực hiện chuyển xuôi để kiểm tra.'], { knowledge: ['add', 'subtract', 'divide-exact', 'logic'], keyPoint: 'Tìm trạng thái bằng nhau trước rồi quay về trạng thái ban đầu.', reasoningSteps: 4, divisions: [{ dividend: total, divisor: 2, quotient: equal, remainder: 0 }] });
    }
    if (mode === 'g2-line-position') {
      const lanFromLeft = randomInt(5, 14, rng);
      const between = randomInt(2, 7, rng);
      const minhFromRight = randomInt(6, 15, rng);
      const minhFromLeft = lanFromLeft + between + 1;
      const total = minhFromLeft + minhFromRight - 1;
      const model = { lanFromLeft, between, minhFromLeft, minhFromRight, total, challengeDepth: 3 };
      return makeQuestion(meta, model,
        'Lan đứng thứ ' + lanFromLeft + ' từ trái sang. Minh đứng bên phải Lan và giữa hai bạn có ' + between + ' bạn. Biết Minh đứng thứ ' + minhFromRight + ' từ phải sang. Hàng đó có tất cả bao nhiêu bạn?',
        data => integer(data.lanFromLeft + data.between + 1 + data.minhFromRight - 1),
        data => bruteForceInteger(1, 100, candidate => data.lanFromLeft + data.between + 1 + data.minhFromRight - 1 === candidate),
        ['Từ vị trí của Lan, đi qua số bạn đứng giữa và thêm Minh để tìm vị trí của Minh từ trái.', 'Đếm từ đầu trái đến Minh.', 'Ghép với số vị trí tính từ phải nhưng Minh đã được tính ở cả hai phía.', 'Bớt một lần trùng rồi kiểm tra lại khoảng cách giữa Lan và Minh.'],
        { knowledge: ['position', 'add', 'subtract', 'logic'], keyPoint: 'Trước hết phải đổi dữ kiện “giữa hai bạn” thành vị trí của Minh; khi ghép hai phía, Minh chỉ được tính một lần.', reasoningSteps: 4, unit: 'bạn' }
      );
    }
    if (mode === 'g2-grid-rectangles') {
      const columns = randomInt(2, 5, rng), answer = 3 * columns * (columns + 1) / 2;
      const model = { columns, answer };
      return makeQuestion(meta, model, 'Một bảng gồm 2 hàng và ' + columns + ' cột ô vuông bằng nhau. Có tất cả bao nhiêu hình chữ nhật trong bảng, kể cả hình vuông?', data => integer(data.answer), data => { let count = 0; for (let top = 0; top < 2; top += 1) for (let bottom = top; bottom < 2; bottom += 1) for (let left = 0; left < data.columns; left += 1) for (let right = left; right < data.columns; right += 1) count += 1; return integer(count); }, ['Đếm các hình cao một hàng ở hàng trên.', 'Đếm tương tự ở hàng dưới.', 'Đếm các hình cao cả hai hàng.', 'Cộng ba nhóm và kiểm tra không bỏ sót kích thước.'], { knowledge: ['shape-basic', 'add', 'multiply-basic', 'logic'], keyPoint: 'Cần đếm theo cả chiều cao một hàng và hai hàng.', reasoningSteps: 4 });
    }
    if (mode === 'g2-magic-square') {
      const offset = randomInt(1, 12, rng);
      const values = [8, 1, 6, 3, 5, 7, 4, 9, 2].map(value => value + offset);
      const target = 15 + offset * 3;
      const model = { target, topLeft: values[0], topMiddle: values[1], topRight: values[2], middleLeft: values[3], center: values[4], middleRight: values[5], bottomLeft: values[6], bottomMiddle: values[7], bottomRight: values[8], challengeDepth: 3 };
      const svgGivens = { type: 'magic-grid-chain', target, values: [values[0], values[1], values[2], values[3], null, values[5], values[6], null, null] };
      return makeQuestion(meta, model,
        'Trong bảng 3 × 3, tổng các số trên mỗi hàng và mỗi cột đều bằng nhau. Hãy tìm số ở ô dưới cùng bên phải.',
        data => integer(data.target - data.bottomLeft - (data.target - data.topMiddle - (data.target - data.middleLeft - data.middleRight))),
        data => {
          const center = data.target - data.middleLeft - data.middleRight;
          const bottomMiddle = data.target - data.topMiddle - center;
          return integer(data.target - data.bottomLeft - bottomMiddle);
        },
        ['Dùng hàng trên đã đủ số để xác định tổng chung.', 'Dùng hàng giữa để tìm ô trung tâm.', 'Dùng cột giữa để tìm ô giữa của hàng cuối.', 'Dùng hàng cuối tìm ô dưới cùng bên phải rồi kiểm tra thêm cột bên phải.'],
        { knowledge: ['add', 'subtract', 'logic', 'shape-basic'], keyPoint: 'Ba ô trống tạo thành một chuỗi: phải tìm ô trung tâm trước, rồi ô giữa hàng cuối, cuối cùng mới đến ô được hỏi.', reasoningSteps: 4, svgGivens }
      );
    }
    if (mode === 'g2-divide-reverse') {
      const divisor = pick([2, 5], rng), finalEach = randomInt(6, 22, rng), usedEach = randomInt(2, 8, rng), added = randomInt(3, 12, rng);
      const beforeUseEach = finalEach + usedEach;
      const afterAdd = beforeUseEach * divisor;
      const start = afterAdd - added;
      if (start < 1) return null;
      const model = { divisor, finalEach, usedEach, beforeUseEach, added, afterAdd, start, challengeDepth: 3 };
      return makeQuestion(meta, model,
        'Thêm ' + added + ' vào một số rồi chia đều vào ' + divisor + ' hộp. Sau đó lấy ' + usedEach + ' vật từ mỗi hộp thì mỗi hộp còn ' + finalEach + ' vật. Số ban đầu là bao nhiêu?',
        data => integer((data.finalEach + data.usedEach) * data.divisor - data.added),
        data => bruteForceInteger(0, 500, candidate => (candidate + data.added) / data.divisor - data.usedEach === data.finalEach),
        ['Cộng lại số đã lấy ở mỗi hộp để tìm số trong một hộp ngay sau khi chia.', 'Gộp ' + divisor + ' hộp bằng nhau để tìm tổng sau khi thêm.', 'Bớt lượng đã thêm để trở về số ban đầu.', 'Thực hiện xuôi cả ba thay đổi để kiểm tra mỗi hộp còn đúng số đã cho.'],
        { knowledge: ['add', 'subtract', 'multiply-basic', 'divide-exact', 'logic'], keyPoint: 'Làm ngược từ từng hộp trước, sau đó mới gộp các hộp và làm ngược lần thêm ban đầu.', reasoningSteps: 4, divisions: [{ dividend: afterAdd, divisor, quotient: beforeUseEach, remainder: 0 }] }
      );
    }

    if (mode === 'g3-planting-open') {
      const pair = pick([[3, 4], [4, 5], [4, 6], [5, 6]], rng);
      const newSpacing = pair[0], oldSpacing = pair[1], length = lcm(newSpacing, oldSpacing) * randomInt(4, 12, rng);
      const oldIntervals = length / oldSpacing, newIntervals = length / newSpacing, extraTrees = newIntervals - oldIntervals;
      const model = { newSpacing, oldSpacing, length, oldIntervals, newIntervals, extraTrees };
      return makeQuestion(meta, model,
        'Trên một đoạn đường, nếu trồng cây cách nhau ' + oldSpacing + ' m và hai đầu đều có cây thì dùng ít hơn cách trồng cây cách nhau ' + newSpacing + ' m đúng ' + extraTrees + ' cây. Hỏi đoạn đường dài bao nhiêu mét?',
        data => integer(data.extraTrees * data.newSpacing * data.oldSpacing / (data.oldSpacing - data.newSpacing)),
        data => bruteForceInteger(1, 1000, value => value % data.oldSpacing === 0 && value % data.newSpacing === 0 && value / data.newSpacing - value / data.oldSpacing === data.extraTrees),
        ['Hai cách đều có cây ở hai đầu nên phần hơn về số cây cũng chính là phần hơn về số khoảng.', 'Xét một đoạn dài bằng tích hai khoảng cách để so số khoảng của hai cách.', 'Tìm xem cần bao nhiêu đoạn như vậy để tạo đúng số cây hơn.', 'Tính chiều dài và thay vào cả hai cách trồng để kiểm tra.'],
        { knowledge: ['length', 'multiply', 'divide-exact', 'subtract', 'logic'], keyPoint: 'Hai số “cộng một” ở hai cách trồng triệt tiêu khi so sánh số cây.', reasoningSteps: 4, unit: 'm', divisions: [{ dividend: length, divisor: oldSpacing, quotient: oldIntervals, remainder: 0 }, { dividend: length, divisor: newSpacing, quotient: newIntervals, remainder: 0 }] }
      );
    }
    if (mode === 'g3-inventory-reverse') {
      const start = randomInt(12, 40, rng) * 6, afterFirst = start * 2 / 3;
      const added = randomInt(5, 20, rng) * 2, afterAdded = afterFirst + added;
      const donated = randomInt(2, Math.max(3, Math.floor(afterAdded / 10)), rng), finalValue = afterAdded / 2 - donated;
      if (finalValue <= 0) return null;
      const model = { start, afterFirst, added, afterAdded, donated, finalValue };
      return makeQuestion(meta, model,
        'Một cửa hàng chia đều số hàng ban đầu thành 3 phần và bán hết 1 phần. Cửa hàng nhập thêm ' + added + ' sản phẩm, sau đó bán một nửa số đang có, tặng tiếp ' + donated + ' sản phẩm và còn ' + finalValue + ' sản phẩm. Lúc đầu có bao nhiêu sản phẩm?',
        data => integer((data.finalValue + data.donated) * 2 - data.added + ((data.finalValue + data.donated) * 2 - data.added) / 2),
        data => bruteForceInteger(1, 1000, value => value % 3 === 0 && (value * 2 / 3 + data.added) / 2 - data.donated === data.finalValue),
        ['Đi ngược: cộng lại số đã tặng rồi gấp đôi để khôi phục số hàng trước lần bán một nửa.', 'Bớt số hàng vừa nhập để tìm lượng còn sau lần bán đầu.', 'Lượng đó gồm 2 phần trong 3 phần ban đầu; tìm một phần rồi tìm đủ 3 phần.', 'Tính xuôi toàn bộ các lần bán, nhập và tặng để kiểm tra.'],
        { knowledge: ['add', 'subtract', 'multiply', 'divide-exact', 'logic'], keyPoint: 'Mỗi bước làm ngược phải đảo thứ tự và đảo đúng phép tính đã thực hiện.', reasoningSteps: 4, unit: 'sản phẩm' }
      );
    }
    if (mode === 'g3-age-chain') {
      const child = randomInt(7, 14, rng), sibling = child + randomInt(2, 5, rng), parent = sibling * 3, total = child + sibling + parent;
      const model = { child, sibling, parent, total, gap: sibling - child };
      return makeQuestion(meta, model, 'Tổng tuổi của ba mẹ con là ' + total + ' tuổi. Anh hơn em ' + (sibling - child) + ' tuổi; tuổi mẹ gấp 3 lần tuổi anh. Em bao nhiêu tuổi?', data => integer((data.total - data.gap * 4) / 5), data => bruteForceInteger(1, 30, value => value + value + data.gap + (value + data.gap) * 3 === data.total), ['Coi tuổi em là một phần.', 'Tuổi anh bằng một phần cộng độ chênh.', 'Tuổi mẹ bằng ba lần tuổi anh.', 'Gộp tổng, tìm tuổi em rồi kiểm tra cả hai quan hệ.'], { knowledge: ['time', 'add', 'subtract', 'multiply', 'divide-exact', 'logic'], keyPoint: 'Độ chênh tuổi anh em xuất hiện thêm trong cả tuổi anh và ba lần tuổi mẹ.', reasoningSteps: 4, unit: 'tuổi', divisions: [{ dividend: total - (sibling - child) * 4, divisor: 5, quotient: child, remainder: 0 }] });
    }
    if (mode === 'g3-unit-rate-reverse') {
      const plannedDaily = randomInt(8, 30, rng), plannedDays = randomInt(7, 12, rng), early = pick([1, 2], rng), extraDaily = randomInt(3, 8, rng);
      const actualDays = plannedDays - early, extraProducts = (plannedDaily + extraDaily) * actualDays - plannedDaily * plannedDays;
      if (extraProducts <= 0) return null;
      const model = { plannedDaily, plannedDays, early, extraDaily, actualDays, extraProducts };
      return makeQuestion(meta, model,
        'Một tổ dự định làm đều một số sản phẩm mỗi ngày trong ' + plannedDays + ' ngày. Thực tế mỗi ngày tổ làm hơn dự định ' + extraDaily + ' sản phẩm nên xong sớm ' + early + ' ngày và làm vượt ' + extraProducts + ' sản phẩm. Theo dự định, mỗi ngày tổ làm bao nhiêu sản phẩm?',
        data => integer((data.extraDaily * data.actualDays - data.extraProducts) / data.early),
        data => bruteForceInteger(1, 100, value => (value + data.extraDaily) * data.actualDays === value * data.plannedDays + data.extraProducts),
        ['Tìm số ngày thực tế làm việc.', 'Phần làm thêm mỗi ngày phải bù cho số ngày nghỉ sớm và phần vượt kế hoạch.', 'Bớt phần vượt rồi chia cho số ngày nghỉ sớm để tìm mức dự định.', 'Tính hai tổng sản phẩm theo kế hoạch và thực tế để kiểm tra.'],
        { knowledge: ['unit-rate', 'add', 'subtract', 'multiply', 'divide-exact', 'unknown', 'logic'], keyPoint: 'Số sản phẩm tăng thêm không chỉ tạo phần vượt mà còn bù cho những ngày làm ít đi.', reasoningSteps: 4, unit: 'sản phẩm' }
      );
    }
    if (mode === 'g3-rectangle-split') {
      const width = randomInt(4, 12, rng), secondLength = randomInt(5, 15, rng), gap = randomInt(2, 8, rng) * 2, firstLength = secondLength + gap;
      const totalArea = width * (firstLength + secondLength), largerArea = width * firstLength;
      const model = { width, secondLength, gap, firstLength, totalArea, largerArea };
      return makeQuestion(meta, model,
        'Một hình chữ nhật được chia thành hai hình chữ nhật có cùng chiều rộng ' + width + ' cm. Chiều dài phần thứ nhất hơn phần thứ hai ' + gap + ' cm và tổng diện tích hai phần là ' + totalArea + ' cm². Diện tích phần lớn hơn là bao nhiêu?',
        data => integer((data.totalArea + data.width * data.gap) / 2),
        data => bruteForceInteger(1, data.totalArea, value => value % data.width === 0 && data.totalArea - value > 0 && value - (data.totalArea - value) === data.width * data.gap),
        ['Chia tổng diện tích cho chiều rộng chung để tìm tổng hai chiều dài.', 'Hai chiều dài có tổng vừa tìm và hiệu là ' + gap + ' cm.', 'Tìm chiều dài lớn hơn bằng cách bù phần chênh rồi chia đôi.', 'Nhân với chiều rộng và kiểm tra tổng diện tích hai phần.'],
        { knowledge: ['area-rectangle', 'add', 'subtract', 'multiply', 'divide-exact', 'logic'], keyPoint: 'Hiệu chiều dài tạo ra hiệu diện tích bằng chiều rộng chung nhân phần chênh.', reasoningSteps: 4, unit: 'cm²', divisions: [{ dividend: totalArea, divisor: width, quotient: firstLength + secondLength, remainder: 0 }] }
      );
    }
    if (mode === 'g3-remainder-number') {
      const pair = pick([[4, 6], [5, 8], [6, 9], [7, 9]], rng), firstDivisor = pair[0], secondDivisor = pair[1];
      const common = lcm(firstDivisor, secondDivisor), remainder = randomInt(1, Math.min(firstDivisor, secondDivisor) - 1, rng), answer = common * randomInt(5, 16, rng) + remainder;
      const lower = answer - randomInt(1, common - 1, rng), upper = answer + randomInt(1, common - 1, rng);
      const model = { firstDivisor, secondDivisor, common, remainder, answer, lower, upper };
      return makeQuestion(meta, model,
        'Tìm số lớn hơn ' + lower + ' nhưng nhỏ hơn ' + upper + '. Khi chia số đó cho ' + firstDivisor + ' hoặc cho ' + secondDivisor + ' đều dư ' + remainder + '.',
        data => bruteForceInteger(data.lower + 1, data.upper - 1, value => value % data.firstDivisor === data.remainder && value % data.secondDivisor === data.remainder),
        data => integer(data.answer),
        ['Bớt ' + remainder + ' khỏi số cần tìm; phần còn lại phải chia hết cho cả hai số chia.', 'Liệt kê các bội chung nằm gần khoảng đã cho.', 'Cộng lại số dư và chọn số duy nhất nằm trong khoảng.', 'Chia đáp án cho cả hai số để kiểm tra cùng một số dư.'],
        { knowledge: ['add', 'subtract', 'multiply', 'divide-remainder', 'logic'], keyPoint: 'Cùng bớt số dư sẽ biến hai điều kiện chia có dư thành hai điều kiện chia hết.', reasoningSteps: 4, divisions: [{ dividend: answer, divisor: firstDivisor, quotient: Math.floor(answer / firstDivisor), remainder }, { dividend: answer, divisor: secondDivisor, quotient: Math.floor(answer / secondDivisor), remainder }] }
      );
    }

    if (mode === 'g4-planting-sides') {
      const pair = pick([[4, 6], [5, 10], [6, 8], [8, 12]], rng), firstSpacing = pair[0], secondSpacing = pair[1];
      const length = lcm(firstSpacing, secondSpacing) * randomInt(6, 18, rng);
      const totalTrees = length / firstSpacing + 1 + length / secondSpacing + 1;
      const model = { firstSpacing, secondSpacing, length, totalTrees };
      return makeQuestion(meta, model,
        'Hai bên một đoạn đường đều trồng cây ở cả hai đầu. Bên trái cứ ' + firstSpacing + ' m trồng một cây, bên phải cứ ' + secondSpacing + ' m trồng một cây. Cả hai bên có ' + totalTrees + ' cây. Đoạn đường dài bao nhiêu mét?',
        data => integer((data.totalTrees - 2) * data.firstSpacing * data.secondSpacing / (data.firstSpacing + data.secondSpacing)),
        data => bruteForceInteger(1, 5000, value => value % data.firstSpacing === 0 && value % data.secondSpacing === 0 && value / data.firstSpacing + value / data.secondSpacing + 2 === data.totalTrees),
        ['Bớt hai cây được cộng thêm ở hai đầu của mỗi cách đếm.', 'Số còn lại là tổng số khoảng ở hai bên đường.', 'Quy số khoảng của hai bên về cùng một đoạn đường để tìm chiều dài.', 'Chia chiều dài theo từng khoảng cách, cộng lại và thêm hai cây đầu mút để kiểm tra.'],
        { knowledge: ['measure', 'add', 'subtract', 'multiply', 'divide-exact', 'logic'], keyPoint: 'Hai bên có khoảng cách khác nhau nhưng cùng chung một chiều dài đoạn đường.', reasoningSteps: 4, unit: 'm', divisions: [{ dividend: length, divisor: firstSpacing, quotient: length / firstSpacing, remainder: 0 }, { dividend: length, divisor: secondSpacing, quotient: length / secondSpacing, remainder: 0 }] }
      );
    }
    if (mode === 'g4-average-reverse') {
      for (let attempt = 0; attempt < 30; attempt += 1) {
        const count = pick([4, 5, 6], rng), originalAverage = randomInt(25, 60, rng), removed = randomInt(15, 75, rng);
        const addedA = randomInt(20, 70, rng), addedB = randomInt(20, 70, rng), newSum = originalAverage * count - removed + addedA + addedB;
        if (newSum <= 0 || newSum % (count + 1) !== 0) continue;
        const newAverage = newSum / (count + 1), model = { count, originalAverage, removed, addedA, addedB, newAverage };
        return makeQuestion(meta, model,
          'Trung bình cộng của ' + count + ' số là ' + originalAverage + '. Bỏ đi một số, rồi thêm hai số ' + addedA + ' và ' + addedB + ' thì trung bình cộng của ' + (count + 1) + ' số mới là ' + newAverage + '. Số đã bỏ đi là bao nhiêu?',
          data => integer(data.originalAverage * data.count + data.addedA + data.addedB - data.newAverage * (data.count + 1)),
          data => bruteForceInteger(0, 500, value => (data.originalAverage * data.count - value + data.addedA + data.addedB) / (data.count + 1) === data.newAverage),
          ['Tính tổng của dãy số ban đầu.', 'Tính tổng của dãy mới có thêm một số lượng phần tử.', 'Tổng mới bằng tổng cũ bớt số bị bỏ rồi cộng hai số mới.', 'So hai tổng để tìm số bị bỏ và thay lại kiểm tra trung bình.'],
          { knowledge: ['average', 'add', 'subtract', 'multiply', 'divide-exact', 'unknown', 'logic'], keyPoint: 'Sau khi bỏ một số rồi thêm hai số, số lượng phần tử tăng thêm một.', reasoningSteps: 4 }
        );
      }
      return null;
    }
    if (mode === 'g4-heads-legs') {
      const tricycles = randomInt(8, 25, rng), bicycles = randomInt(12, 35, rng), vehicles = tricycles + bicycles, wheels = tricycles * 3 + bicycles * 2;
      const model = { tricycles, bicycles, vehicles, wheels };
      return makeQuestion(meta, model, 'Một bãi có ' + vehicles + ' xe gồm xe đạp hai bánh và xe ba bánh, tất cả có ' + wheels + ' bánh. Có bao nhiêu xe ba bánh?', data => integer(data.wheels - data.vehicles * 2), data => bruteForceInteger(0, data.vehicles, value => value * 3 + (data.vehicles - value) * 2 === data.wheels), ['Giả sử tất cả đều là xe hai bánh.', 'Tính số bánh nhiều hơn giả sử.', 'Mỗi xe ba bánh làm tăng đúng một bánh.', 'Tìm số xe ba bánh và kiểm tra tổng xe, tổng bánh.'], { knowledge: ['add', 'subtract', 'multiply', 'logic'], keyPoint: 'Đưa tạm hai loại xe về cùng hai bánh để phần chênh biểu diễn số xe ba bánh.', reasoningSteps: 4 });
    }
    if (mode === 'g4-sum-difference') {
      const smaller = randomInt(80, 300, rng), addToSmall = randomInt(20, 80, rng), removeFromLarge = randomInt(20, 80, rng);
      const difference = addToSmall + removeFromLarge, larger = smaller + difference, total = smaller + larger;
      const model = { smaller, addToSmall, removeFromLarge, difference, larger, total };
      return makeQuestion(meta, model,
        'Hai kho có tất cả ' + total + ' thùng hàng. Nếu chuyển thêm từ nơi khác ' + addToSmall + ' thùng vào kho ít và lấy khỏi kho nhiều ' + removeFromLarge + ' thùng thì hai kho bằng nhau. Lúc đầu kho nhiều có bao nhiêu thùng?',
        data => integer((data.total + data.addToSmall + data.removeFromLarge) / 2),
        data => bruteForceInteger(0, data.total, value => value - data.removeFromLarge === data.total - value + data.addToSmall),
        ['Từ trạng thái bằng nhau, suy ra hiệu ban đầu bằng tổng hai thay đổi.', 'Tìm hiệu ban đầu của hai kho.', 'Dùng tổng và hiệu để tìm kho nhiều.', 'Thực hiện hai thay đổi và kiểm tra hai kho bằng nhau.'],
        { knowledge: ['sum-difference', 'add', 'subtract', 'divide-exact', 'logic'], keyPoint: 'Một bên tăng và bên kia giảm nên độ chênh ban đầu bằng tổng hai lượng thay đổi.', reasoningSteps: 4, unit: 'thùng', divisions: [{ dividend: total + difference, divisor: 2, quotient: larger, remainder: 0 }] }
      );
    }
    if (mode === 'g4-fraction-left') {
      const unit = randomInt(10, 40, rng) * 12, afterFirst = unit * 2 / 3, afterSecond = afterFirst * 3 / 4;
      const model = { unit, afterFirst, afterSecond };
      return makeQuestion(meta, model, 'Một kho bán 1/3 số hàng, rồi bán tiếp 1/4 số hàng còn lại và còn ' + afterSecond + ' sản phẩm. Lúc đầu có bao nhiêu sản phẩm?', data => integer(data.afterSecond * 4 / 3 * 3 / 2), data => bruteForceInteger(1, 10000, value => value * 2 / 3 * 3 / 4 === data.afterSecond), ['Làm ngược lần bán thứ hai để tìm lượng còn sau lần đầu.', 'Lượng đó bằng 3/4 trước lần bán thứ hai.', 'Tiếp tục làm ngược vì sau lần đầu còn 2/3 ban đầu.', 'Tính xuôi hai lần bán để kiểm tra.'], { knowledge: ['fraction', 'multiply', 'divide-exact', 'logic'], keyPoint: 'Hai phân số dựa trên hai lượng khác nhau nên phải làm ngược từng bước.', reasoningSteps: 4, unit: 'sản phẩm' });
    }
    if (mode === 'g4-series-blocks') {
      const step = pick([3, 4, 5], rng), multiples = randomInt(6, 15, rng), last = step * multiples;
      const ordinarySum = last * (last + 1) / 2, repeatedSum = step * multiples * (multiples + 1) / 2, total = ordinarySum + repeatedSum;
      const model = { step, multiples, last, ordinarySum, repeatedSum, total };
      return makeQuestion(meta, model,
        'Viết các số từ 1 đến ' + last + ' theo thứ tự, nhưng mỗi số chia hết cho ' + step + ' được viết hai lần. Tổng của tất cả các số đã viết là bao nhiêu?',
        data => integer(data.last * (data.last + 1) / 2 + data.step * data.multiples * (data.multiples + 1) / 2),
        data => {
          let sum = 0;
          for (let value = 1; value <= data.last; value += 1) sum += value + (value % data.step === 0 ? value : 0);
          return integer(sum);
        },
        ['Tính tổng các số từ 1 đến ' + last + ' bằng cách ghép đầu với cuối.', 'Các số được viết thêm là ' + step + ', ' + (step * 2) + ', …, ' + last + '.', 'Đặt ' + step + ' làm thừa số chung để tính tổng nhóm được lặp.', 'Cộng hai tổng và kiểm tra bằng cách chia dãy thành các nhóm liên tiếp.'],
        { knowledge: ['sequence', 'add', 'multiply', 'divide-exact', 'logic'], keyPoint: 'Tổng cần tìm gồm tổng dãy ban đầu cộng thêm đúng một lần các bội của số đã cho.', reasoningSteps: 4, divisions: [{ dividend: last * (last + 1), divisor: 2, quotient: ordinarySum, remainder: 0 }, { dividend: step * multiples * (multiples + 1), divisor: 2, quotient: repeatedSum, remainder: 0 }] }
      );
    }

    return null;
  };

  function deepFreeze(value) {
    if (!value || typeof value !== 'object' || Object.isFrozen(value)) return value;
    Object.freeze(value);
    Object.keys(value).forEach(key => deepFreeze(value[key]));
    return value;
  }

  function containsForbiddenSvgKey(value) {
    if (!value || typeof value !== 'object') return false;
    return Object.keys(value).some(key => /answer|solution|correct|result/i.test(key) || containsForbiddenSvgKey(value[key]));
  }

  function answerIsNonNegative(answer) {
    const normalized = normalizeAnswer(answer);
    if (!normalized) return false;
    if (normalized.kind === 'integer') return normalized.value >= 0 && Number.isSafeInteger(normalized.value);
    if (normalized.kind === 'rational') return normalized.numerator >= 0 && normalized.denominator > 0 && Number.isSafeInteger(normalized.numerator) && Number.isSafeInteger(normalized.denominator);
    if (normalized.kind === 'time') return normalized.totalMinutes >= 0 && normalized.totalMinutes < 1440 * 2;
    if (normalized.kind === 'remainder') return normalized.quotient >= 0 && normalized.remainder >= 0;
    return false;
  }

  function validateDivision(division, policy) {
    if (!division || ![division.dividend, division.divisor, division.quotient, division.remainder].every(Number.isSafeInteger)) return false;
    if (division.dividend < 0 || division.divisor <= 0 || division.quotient < 0 || division.remainder < 0) return false;
    if (division.dividend !== division.divisor * division.quotient + division.remainder) return false;
    if (division.remainder >= division.divisor) return false;
    if (!policy.allowRemainder && division.remainder !== 0) return false;
    return true;
  }

  function independentGradeErrors(question) {
    const errors = [];
    if (!question) return ['missing_question'];
    const grade = Number(question.grade);
    const prompt = String(question.prompt || '').toLowerCase();
    if (grade === 1 && /\d[\d .]*\s*(?:×|:)\s*\d/.test(prompt)) errors.push('grade1_operation_token');
    if (grade <= 3 && /\d+\s*\/\s*\d+|phân số/.test(prompt)) errors.push('fraction_beyond_grade');
    if (grade <= 4 && /\d+(?:[,.]\d+)|%|phần trăm|số thập phân/.test(prompt)) errors.push('decimal_percent_beyond_grade');
    if (grade === 1 && Array.isArray(question.divisions) && question.divisions.length) errors.push('grade1_division_model');
    if (grade === 2 && question.model && typeof question.model === 'object') {
      const teachingText = [question.prompt, question.inputHint].concat(question.solution || []).join(' ').toLowerCase();
      if (/\d+(?:[,.]\d+)|%|phần trăm|số thập phân/.test(teachingText) || question.answerFormat === 'decimal') errors.push('grade2_decimal_surface');
      if ((question.knowledge || []).some(item => ['decimal', 'fraction', 'percent', 'average', 'ratio', 'area', 'volume'].includes(item))) errors.push('grade2_knowledge_scope');
      if ((question.divisions || []).some(division => ![2, 5].includes(division.divisor))) errors.push('grade2_table_scope');
      ['groups', 'people', 'copies'].forEach(key => {
        if (Number.isInteger(question.model[key]) && ![2, 5].includes(question.model[key])) errors.push('grade2_factor_range');
      });
    }
    return errors;
  }

  function validateCandidate(question, policy) {
    const errors = [];
    if (!question || typeof question.prompt !== 'string' || question.prompt.trim().length < 20) errors.push('invalid_prompt');
    if (question && /NaN|undefined|Infinity|null/i.test(question.prompt)) errors.push('invalid_token');
    if (!question || !Array.isArray(question.knowledge) || question.knowledge.some(item => !policy.knowledge.includes(item))) errors.push('grade_knowledge');
    independentGradeErrors(question).forEach(error => errors.push(error));
    const visible = question ? question.visibleNumbers.concat(question.intermediateNumbers || []) : [];
    if (visible.some(value => typeof value !== 'number' || !Number.isFinite(value) || value < 0 || !Number.isSafeInteger(value) || value > policy.maxVisible)) errors.push('number_range');
    if (question && question.divisions.some(division => !validateDivision(division, policy))) errors.push('division_rule');
    if (question && question.svgGivens && containsForbiddenSvgKey(question.svgGivens)) errors.push('svg_leak_key');
    let answerA = null;
    let answerB = null;
    if (question) {
      try { answerA = normalizeAnswer(question.solverA(deepFreeze(question.model))); } catch (error) { errors.push('solver_a'); }
      try { answerB = normalizeAnswer(question.solverB(deepFreeze(question.model))); } catch (error) { errors.push('solver_b'); }
    }
    if (!answersEqual(answerA, answerB)) errors.push('solver_mismatch');
    if (!answerIsNonNegative(answerA)) errors.push('invalid_answer');
    if (question && question.grade <= 3 && answerA && answerA.kind === 'rational') errors.push('answer_kind_beyond_grade');
    if (question && question.grade <= 2 && answerA && answerA.kind === 'remainder') errors.push('answer_kind_beyond_grade');
    if (answerA && answerA.kind === 'integer' && answerA.value > policy.maxAnswer) errors.push('answer_range');
    if (answerA && answerA.kind === 'rational' && answerA.numerator / answerA.denominator > policy.maxAnswer) errors.push('answer_range');
    if (question && question.difficulty === 'rat-kho' && question.reasoningSteps < 3) errors.push('very_hard_reasoning_depth');
    if (question && question.difficulty === 'chinh-phuc' && question.reasoningSteps < 4) errors.push('champion_reasoning_depth');
    if (question && question.grade >= 3) {
      const operationKeys = new Set(['add', 'subtract', 'multiply', 'divide-exact', 'divide-remainder', 'expression', 'unknown', 'sequence', 'time', 'measure', 'money', 'perimeter', 'area', 'area-rectangle', 'volume', 'fraction', 'decimal', 'percent', 'average', 'ratio', 'unit-rate', 'motion', 'sum-difference', 'sum-ratio', 'difference-ratio']);
      const breadth = new Set((question.knowledge || []).filter(item => operationKeys.has(item))).size;
      const minimumBreadth = question.difficulty === 'chinh-phuc' ? 3 : 2;
      if (breadth < minimumBreadth) errors.push('academic_operation_breadth');
    }
    if (question && question.builder === 'diversityEntry' && Number(question.model && question.model.challengeDepth) < 3) errors.push('diversity_entry_shallow');
    if (question && question.family === 'g5-cp-changed-speed-meet' && Number(question.model && question.model.challengeDepth) < 4) errors.push('changed_speed_meet_shallow');
    return { ok: errors.length === 0, errors, answerA, answerB };
  }

  function hashString(value) {
    let hash = 2166136261;
    for (let index = 0; index < value.length; index += 1) {
      hash ^= value.charCodeAt(index);
      hash = Math.imul(hash, 16777619);
    }
    return (hash >>> 0).toString(36);
  }

  function fingerprint(question) {
    const visiblePrompt = question.prompt.replace(/\s+/g, ' ').trim().toLowerCase();
    const visibleFigure = JSON.stringify(question.svgGivens || {});
    return hashString(visiblePrompt + '|' + visibleFigure);
  }

  function buildOne(templateItem, variant, rng) {
    const builder = BUILDERS[templateItem.builder];
    if (typeof builder !== 'function') return { ok: false, errors: ['missing_builder'] };
    let question = null;
    try { question = builder(metaFor(templateItem, variant), templateItem.params, rng); } catch (error) {
      return { ok: false, errors: ['builder_exception:' + String(error && error.message || error)] };
    }
    if (!question) return { ok: false, errors: ['builder_rejected'] };
    const result = validateCandidate(question, POLICIES[templateItem.grade]);
    if (!result.ok) return result;
    question.answer = result.answerA;
    question.answerCheck = result.answerB;
    question.answerText = answerText(result.answerA, question.unit, question.answerFormat);
    question.fingerprint = fingerprint(question);
    delete question.solverA;
    delete question.solverB;
    return { ok: true, question };
  }

  function policyLabel(grade) {
    return POLICIES[grade] ? POLICIES[grade].label : 'lớp không hợp lệ';
  }

  function candidateTemplates(grade, difficulty, category, selectedFamilies, selectedBuilders, usedTemplateIds, previousFamilies, rng) {
    const usedIds = new Set(usedTemplateIds || []);
    const previous = new Set(previousFamilies || []);
    const pool = shuffle(TEMPLATES.filter(item => item.grade === grade
      && item.difficulty === difficulty
      && item.category === category
      && !selectedFamilies.has(item.family)
      && !(grade === 2 && difficulty !== 'chinh-phuc' && selectedBuilders.has(item.builder))), rng);
    const scores = new Map(pool.map(item => [item.id,
      (rng || Math.random)()
      + Number(previous.has(item.family)) * (grade >= 3 ? 2 : 0.35)
      + Number(usedIds.has(item.id + '-v0')) * 0.08
      + Number(usedIds.has(item.id + '-v1')) * 0.08
    ]));
    return pool.sort((a, b) => scores.get(a.id) - scores.get(b.id));
  }

  function buildUniqueCandidate(item, usedTemplateIds, usedFingerprints, selectedFingerprints, rejectionCounts, rng) {
    const usedIds = new Set(usedTemplateIds || []);
    const variants = shuffle([0, 1], rng).sort((a, b) => Number(usedIds.has(item.id + '-v' + a)) - Number(usedIds.has(item.id + '-v' + b)));
    const attemptsPerVariant = Math.ceil(MAX_BUILD_ATTEMPTS / variants.length);
    let historyFallback = null;
    for (const variant of variants) {
      for (let attempt = 0; attempt < attemptsPerVariant; attempt += 1) {
        const result = buildOne(item, variant, rng);
        if (!result.ok) {
          (result.errors || ['unknown']).forEach(error => { rejectionCounts[error] = (rejectionCounts[error] || 0) + 1; });
          continue;
        }
        if (selectedFingerprints.has(result.question.fingerprint)) {
          rejectionCounts.duplicate_fingerprint = (rejectionCounts.duplicate_fingerprint || 0) + 1;
          continue;
        }
        if (usedFingerprints.has(result.question.fingerprint)) {
          rejectionCounts.reused_history_fingerprint = (rejectionCounts.reused_history_fingerprint || 0) + 1;
          if (!historyFallback) historyFallback = result.question;
          continue;
        }
        return result.question;
      }
    }
    return historyFallback;
  }

  function generateExam(options) {
    const settings = options || {};
    const grade = Math.max(1, Math.min(5, Number(settings.grade) || 1));
    const rng = settings.rng || Math.random;
    const usedFingerprints = new Set(settings.usedFingerprints || []);
    const selectedFingerprints = new Set();
    const selectedFamilies = new Set();
    const selectedBuilders = new Set();
    const questions = [];
    const rejectionCounts = Object.create(null);
    for (const [difficulty, category, count] of BLUEPRINTS[grade]) {
      let added = 0;
      while (added < count) {
        const pool = candidateTemplates(grade, difficulty, category, selectedFamilies, selectedBuilders, settings.usedTemplateIds || [], settings.previousFamilies || [], rng);
        let accepted = null;
        for (const item of pool) {
          accepted = buildUniqueCandidate(item, settings.usedTemplateIds || [], usedFingerprints, selectedFingerprints, rejectionCounts, rng);
          if (accepted) break;
        }
        if (!accepted) throw new Error('Không đủ câu mới đạt chuẩn cho ' + policyLabel(grade) + ': ' + difficulty + '/' + category + '.');
        selectedFamilies.add(accepted.family);
        if (accepted.difficulty !== 'chinh-phuc') selectedBuilders.add(accepted.builder);
        selectedFingerprints.add(accepted.fingerprint);
        questions.push(accepted);
        added += 1;
      }
    }
    const hard = shuffle(questions.filter(question => question.difficulty === 'kho'), rng);
    const veryHard = shuffle(questions.filter(question => question.difficulty === 'rat-kho'), rng);
    const champion = shuffle(questions.filter(question => question.difficulty === 'chinh-phuc'), rng);
    const ordered = hard.concat(veryHard, champion).map((question, index) => Object.assign(question, { number: index + 1 }));
    const summary = summarizeExam(ordered);
    if (ordered.length !== EXAM_SIZE || summary.difficulty.kho !== 10 || summary.difficulty['rat-kho'] !== 5 || summary.difficulty['chinh-phuc'] !== 6) {
      throw new Error('Đề không đạt cấu trúc 10 câu khó + 5 câu rất khó + 6 câu chinh phục HSG.');
    }
    return { grade, questions: ordered, summary, rejectionCounts, version: VERSION };
  }

  function generateSet(options) {
    const settings = options || {};
    const grade = Math.max(1, Math.min(5, Number(settings.grade) || 1));
    const count = Math.max(1, Math.min(EXAM_SIZE, Number(settings.count) || 10));
    const rng = settings.rng || Math.random;
    const category = settings.category && settings.category !== 'all' ? String(settings.category) : '';
    const preferredFamilies = new Set(Array.isArray(settings.families) ? settings.families.map(String) : []);
    const usedFingerprints = new Set(settings.usedFingerprints || []);
    const selectedFingerprints = new Set();
    const selectedFamilies = new Set();
    const rejectionCounts = Object.create(null);
    const questions = [];
    const requestedPlan = settings.difficultyCounts && typeof settings.difficultyCounts === 'object'
      ? ['kho', 'rat-kho', 'chinh-phuc'].flatMap(level => Array(Math.max(0, Number(settings.difficultyCounts[level]) || 0)).fill(level))
      : [];
    const slots = requestedPlan.length ? requestedPlan.slice(0, count) : Array(count).fill('');
    while (slots.length < count) slots.push('');

    for (const difficulty of slots) {
      let pool = TEMPLATES.filter(item => item.grade === grade
        && (!difficulty || item.difficulty === difficulty)
        && (!category || item.category === category)
        && (!preferredFamilies.size || preferredFamilies.has(item.family))
        && !selectedFamilies.has(item.family));
      if (!pool.length) {
        pool = TEMPLATES.filter(item => item.grade === grade
          && (!difficulty || item.difficulty === difficulty)
          && (!category || item.category === category)
          && (!preferredFamilies.size || preferredFamilies.has(item.family)));
      }
      pool = shuffle(pool, rng).sort((a, b) => Number((settings.usedTemplateIds || []).includes(a.id)) - Number((settings.usedTemplateIds || []).includes(b.id)));
      let accepted = null;
      for (const item of pool) {
        accepted = buildUniqueCandidate(item, settings.usedTemplateIds || [], usedFingerprints, selectedFingerprints, rejectionCounts, rng);
        if (accepted) break;
      }
      if (!accepted) throw new Error('Không đủ câu đạt chuẩn cho bộ luyện lớp ' + grade + (category ? ' theo chuyên đề ' + category : '') + '.');
      selectedFamilies.add(accepted.family);
      selectedFingerprints.add(accepted.fingerprint);
      questions.push(accepted);
    }
    const rank = { kho: 0, 'rat-kho': 1, 'chinh-phuc': 2 };
    const ordered = questions.sort((a, b) => rank[a.difficulty] - rank[b.difficulty]).map((question, index) => Object.assign(question, { number: index + 1 }));
    return { grade, questions: ordered, summary: summarizeExam(ordered), rejectionCounts, version: VERSION, custom: true };
  }

  function summarizeExam(questions) {
    const difficulty = { kho: 0, 'rat-kho': 0, 'chinh-phuc': 0 };
    const category = Object.create(null);
    const cells = Object.create(null);
    const families = new Set();
    const templates = new Set();
    const fingerprints = new Set();
    questions.forEach(question => {
      difficulty[question.difficulty] = (difficulty[question.difficulty] || 0) + 1;
      category[question.category] = (category[question.category] || 0) + 1;
      const cellKey = question.difficulty + '|' + question.category;
      cells[cellKey] = (cells[cellKey] || 0) + 1;
      families.add(question.family);
      templates.add(question.templateId);
      fingerprints.add(question.fingerprint);
    });
    return { difficulty, category, cells, uniqueFamilies: families.size, uniqueTemplates: templates.size, uniqueFingerprints: fingerprints.size };
  }

  function safeSvgNumber(value, fallback) {
    return Number.isFinite(Number(value)) ? Number(value) : fallback;
  }

  function svgWrap(content, label) {
    return '<svg viewBox="0 0 520 210" role="img" aria-label="' + String(label || 'Hình minh họa dữ kiện').replace(/[<>&"]/g, '') + '" xmlns="http://www.w3.org/2000/svg">' + content + '</svg>';
  }

  function notToScaleNote() {
    return '<text x="510" y="204" text-anchor="end" font-size="11" fill="#52657a">Hình minh họa, không theo tỉ lệ</text>';
  }

  function renderSvg(spec) {
    if (!spec || containsForbiddenSvgKey(spec)) return '';
    const type = spec.type;
    if (type === 'balance-two-sides') {
      const leftCopies = Math.max(1, Math.min(3, safeSvgNumber(spec.leftCopies, 3)));
      const rightCopies = Math.max(1, Math.min(2, safeSvgNumber(spec.rightCopies, 1)));
      const bag = (x, y) => '<rect x="' + (x - 17) + '" y="' + y + '" width="34" height="38" rx="11" fill="#68b8ff" stroke="#145da0" stroke-width="3"/><path d="M' + (x - 8) + ' ' + y + ' Q' + x + ' ' + (y - 10) + ' ' + (x + 8) + ' ' + y + '" fill="none" stroke="#145da0" stroke-width="3"/>';
      let leftObjects = '';
      let rightObjects = '';
      for (let index = 0; index < leftCopies; index += 1) leftObjects += bag(62 + index * 43, 111);
      for (let index = 0; index < rightCopies; index += 1) rightObjects += bag(322 + index * 43, 111);
      leftObjects += '<rect x="177" y="109" width="58" height="40" rx="8" fill="#ffd86b" stroke="#ad7600" stroke-width="3"/><text x="206" y="135" text-anchor="middle" font-size="17" font-weight="700">' + safeSvgNumber(spec.leftExtra, 0) + ' kg</text>';
      rightObjects += '<rect x="376" y="109" width="70" height="40" rx="8" fill="#e9fff2" stroke="#2c9f5b" stroke-width="3"/><text x="411" y="135" text-anchor="middle" font-size="17" font-weight="700">' + safeSvgNumber(spec.rightExtra, 0) + ' kg</text>';
      const scale = '<line x1="88" y1="55" x2="432" y2="55" stroke="#12376d" stroke-width="6"/><line x1="88" y1="55" x2="45" y2="158" stroke="#526b8c" stroke-width="3"/><line x1="88" y1="55" x2="235" y2="158" stroke="#526b8c" stroke-width="3"/><line x1="432" y1="55" x2="285" y2="158" stroke="#526b8c" stroke-width="3"/><line x1="432" y1="55" x2="475" y2="158" stroke="#526b8c" stroke-width="3"/><line x1="42" y1="158" x2="238" y2="158" stroke="#12376d" stroke-width="5"/><line x1="282" y1="158" x2="478" y2="158" stroke="#12376d" stroke-width="5"/><polygon points="260,55 230,199 290,199" fill="#12376d"/>';
      return svgWrap(scale + leftObjects + rightObjects, 'Cân hai đĩa: ba túi và một quả cân ở bên trái, một túi và một quả cân ở bên phải');
    }
    if (type === 'balance') {
      const copies = Math.max(1, Math.min(5, safeSvgNumber(spec.copies, 2)));
      let objects = '';
      for (let index = 0; index < copies; index += 1) {
        const x = 62 + index * 43;
        objects += '<rect x="' + (x - 17) + '" y="111" width="34" height="38" rx="11" fill="#68b8ff" stroke="#145da0" stroke-width="3"/><path d="M' + (x - 8) + ' 111 Q' + x + ' 101 ' + (x + 8) + ' 111" fill="none" stroke="#145da0" stroke-width="3"/>';
      }
      objects += '<rect x="' + (53 + copies * 43) + '" y="109" width="58" height="40" rx="8" fill="#ffd86b" stroke="#ad7600" stroke-width="3"/><text x="' + (82 + copies * 43) + '" y="135" text-anchor="middle" font-size="17" font-weight="700">' + safeSvgNumber(spec.extra, 0) + ' kg</text>';
      const scale = '<line x1="88" y1="55" x2="432" y2="55" stroke="#12376d" stroke-width="6"/><line x1="88" y1="55" x2="45" y2="158" stroke="#526b8c" stroke-width="3"/><line x1="88" y1="55" x2="235" y2="158" stroke="#526b8c" stroke-width="3"/><line x1="432" y1="55" x2="285" y2="158" stroke="#526b8c" stroke-width="3"/><line x1="432" y1="55" x2="475" y2="158" stroke="#526b8c" stroke-width="3"/><line x1="42" y1="158" x2="238" y2="158" stroke="#12376d" stroke-width="5"/><line x1="282" y1="158" x2="478" y2="158" stroke="#12376d" stroke-width="5"/><polygon points="260,55 230,199 290,199" fill="#12376d"/>';
      return svgWrap(scale + objects + '<rect x="358" y="106" width="104" height="43" rx="9" fill="#e9fff2" stroke="#2c9f5b" stroke-width="3"/><text x="410" y="134" text-anchor="middle" font-size="18" font-weight="700">' + safeSvgNumber(spec.total, 0) + ' kg</text>', 'Cân hai đĩa: các túi và một quả cân ở bên trái, tổng khối lượng ở bên phải');
    }
    if (type === 'shape-count') {
      const shapes = [];
      for (let index = 0; index < safeSvgNumber(spec.triangleCount, 0); index += 1) shapes.push('triangle');
      for (let index = 0; index < safeSvgNumber(spec.squareCount, 0); index += 1) shapes.push('square');
      for (let index = 0; index < safeSvgNumber(spec.circleCount, 0); index += 1) shapes.push('circle');
      return svgWrap(shapes.map((shape, index) => {
        const x = 42 + (index % 9) * 52, y = 32 + Math.floor(index / 9) * 60;
        if (shape === 'triangle') return '<polygon points="' + x + ',' + (y + 34) + ' ' + (x + 20) + ',' + y + ' ' + (x + 40) + ',' + (y + 34) + '" fill="#ffd86b" stroke="#d87800" stroke-width="3"/>';
        if (shape === 'square') return '<rect x="' + x + '" y="' + y + '" width="38" height="38" rx="4" fill="#8fe1b2" stroke="#16824b" stroke-width="3"/>';
        return '<circle cx="' + (x + 20) + '" cy="' + (y + 20) + '" r="19" fill="#c7b2ff" stroke="#7142c7" stroke-width="3"/>';
      }).join(''), 'Các hình tam giác, hình vuông và hình tròn để đếm');
    }
    if (type === 'path') {
      const segments = Array.isArray(spec.segments) ? spec.segments.map(value => safeSvgNumber(value, 1)) : [];
      const points = [[40, 155], [150, 155], [220, 75], [340, 75], [455, 145]];
      const lines = segments.map((segment, index) => '<line x1="' + points[index][0] + '" y1="' + points[index][1] + '" x2="' + points[index + 1][0] + '" y2="' + points[index + 1][1] + '" stroke="#1674e8" stroke-width="7" stroke-linecap="round"/><text x="' + ((points[index][0] + points[index + 1][0]) / 2) + '" y="' + ((points[index][1] + points[index + 1][1]) / 2 - 12) + '" text-anchor="middle" font-size="18" font-weight="700">' + segment + ' cm</text>').join('');
      return svgWrap(lines + notToScaleNote(), 'Đường gấp khúc với độ dài từng đoạn');
    }
    if (type === 'missing-path') {
      const rawSegments = Array.isArray(spec.segments) ? spec.segments.slice(0, 4) : [];
      const points = [[35, 155], [135, 155], [210, 70], [335, 70], [470, 150]];
      let markup = '<text x="260" y="24" text-anchor="middle" font-size="18" font-weight="800">Cả đường: ' + safeSvgNumber(spec.total, 0) + ' cm</text>';
      rawSegments.forEach((segment, index) => {
        const x = (points[index][0] + points[index + 1][0]) / 2;
        const y = (points[index][1] + points[index + 1][1]) / 2 - 12;
        const label = segment === null ? '?' : safeSvgNumber(segment, 0) + ' cm';
        markup += '<line x1="' + points[index][0] + '" y1="' + points[index][1] + '" x2="' + points[index + 1][0] + '" y2="' + points[index + 1][1] + '" stroke="#1674e8" stroke-width="7" stroke-linecap="round"/><text x="' + x + '" y="' + y + '" text-anchor="middle" font-size="18" font-weight="800">' + label + '</text>';
      });
      return svgWrap(markup + notToScaleNote(), 'Đường gấp khúc có tổng độ dài, ba đoạn đã biết và một đoạn chưa biết');
    }
    if (type === 'number-pyramid') {
      const box = (x, y, text, fill) => '<rect x="' + x + '" y="' + y + '" width="82" height="48" rx="10" fill="' + fill + '" stroke="#246da8" stroke-width="3"/><text x="' + (x + 41) + '" y="' + (y + 32) + '" text-anchor="middle" font-size="22" font-weight="850">' + text + '</text>';
      const markup = box(219, 18, safeSvgNumber(spec.top, 0), '#fff1bf')
        + box(165, 82, '?', '#e9f5ff') + box(273, 82, '?', '#e9f5ff')
        + box(111, 146, safeSvgNumber(spec.left, 0), '#eafff2') + box(219, 146, '□', '#fff8df') + box(327, 146, safeSvgNumber(spec.right, 0), '#eafff2');
      return svgWrap(markup, 'Tháp số ba tầng, mỗi ô trên bằng tổng hai ô ngay dưới, cần tìm ô giữa ở đáy');
    }
    if (type === 'grid') {
      const rows = Math.max(1, Math.min(4, safeSvgNumber(spec.rows, 1)));
      const cols = Math.max(1, Math.min(6, safeSvgNumber(spec.cols, 2)));
      const cell = Math.min(70, 360 / cols, 150 / rows);
      const startX = (520 - cols * cell) / 2, startY = (210 - rows * cell) / 2;
      let markup = '<rect x="' + startX + '" y="' + startY + '" width="' + (cols * cell) + '" height="' + (rows * cell) + '" fill="#f7fbff"/>';
      for (let row = 0; row <= rows; row += 1) markup += '<line x1="' + startX + '" y1="' + (startY + row * cell) + '" x2="' + (startX + cols * cell) + '" y2="' + (startY + row * cell) + '" stroke="#12376d" stroke-width="3"/>';
      for (let col = 0; col <= cols; col += 1) markup += '<line x1="' + (startX + col * cell) + '" y1="' + startY + '" x2="' + (startX + col * cell) + '" y2="' + (startY + rows * cell) + '" stroke="#12376d" stroke-width="3"/>';
      return svgWrap(markup, 'Lưới hình chữ nhật');
    }
    if (type === 'shape-pattern') {
      const block = Array.isArray(spec.block) ? spec.block : ['tròn', 'vuông', 'vuông'];
      const shown = Math.max(3, Math.min(12, safeSvgNumber(spec.shown, 6)));
      let markup = '';
      for (let index = 0; index < shown; index += 1) {
        const x = 55 + index * 58;
        const shape = block[index % block.length];
        markup += shape === 'tròn'
          ? '<circle cx="' + x + '" cy="105" r="24" fill="#ffd86b" stroke="#d87800" stroke-width="3"/>'
          : shape === 'tam-giác'
            ? '<polygon points="' + (x - 26) + ',129 ' + x + ',79 ' + (x + 26) + ',129" fill="#c7b2ff" stroke="#7142c7" stroke-width="3"/>'
            : '<rect x="' + (x - 24) + '" y="81" width="48" height="48" rx="6" fill="#8fe1b2" stroke="#16824b" stroke-width="3"/>';
        markup += '<text x="' + x + '" y="158" text-anchor="middle" font-size="15">' + (index + 1) + '</text>';
      }
      return svgWrap(markup, 'Dãy hình lặp theo vị trí');
    }
    if (type === 'magic-row') {
      const values = Array.isArray(spec.values) ? spec.values : [];
      let markup = '<text x="260" y="45" text-anchor="middle" font-size="20" font-weight="700">Tổng hàng = ' + safeSvgNumber(spec.target, 0) + '</text>';
      values.forEach((value, index) => { markup += '<rect x="' + (125 + index * 92) + '" y="75" width="78" height="78" rx="12" fill="#f7fbff" stroke="#2477f3" stroke-width="3"/><text x="' + (164 + index * 92) + '" y="124" text-anchor="middle" font-size="27" font-weight="700">' + (value === null ? '?' : safeSvgNumber(value, 0)) + '</text>'; });
      return svgWrap(markup, 'Ba ô có tổng đã cho');
    }
    if (type === 'magic-grid-chain') {
      const values = Array.isArray(spec.values) ? spec.values.slice(0, 9) : [];
      let markup = '<text x="260" y="25" text-anchor="middle" font-size="18" font-weight="800">Mỗi hàng và mỗi cột có tổng bằng ' + safeSvgNumber(spec.target, 0) + '</text>';
      values.forEach((value, index) => {
        const col = index % 3;
        const row = Math.floor(index / 3);
        const x = 154 + col * 72;
        const y = 43 + row * 52;
        const asked = index === 8;
        const fill = asked ? '#fff1bf' : value === null ? '#eaf5ff' : '#f8fcff';
        const text = value === null ? (asked ? '□' : '?') : safeSvgNumber(value, 0);
        markup += '<rect x="' + x + '" y="' + y + '" width="66" height="46" rx="8" fill="' + fill + '" stroke="#246da8" stroke-width="3"/><text x="' + (x + 33) + '" y="' + (y + 30) + '" text-anchor="middle" font-size="21" font-weight="850">' + text + '</text>';
      });
      return svgWrap(markup, 'Bảng ba nhân ba có ba ô trống tạo thành chuỗi, cần tìm ô dưới cùng bên phải');
    }
    if (type === 'magic-chain') {
      const first = safeSvgNumber(spec.first, 0), pairAB = safeSvgNumber(spec.pairAB, 0), pairBC = safeSvgNumber(spec.pairBC, 0);
      const nodes = '<circle cx="105" cy="112" r="38" fill="#eaf4ff" stroke="#2477f3" stroke-width="4"/><circle cx="260" cy="112" r="38" fill="#fff6d9" stroke="#d99000" stroke-width="4"/><circle cx="415" cy="112" r="38" fill="#eafff2" stroke="#24965a" stroke-width="4"/><text x="105" y="121" text-anchor="middle" font-size="25" font-weight="800">' + first + '</text><text x="260" y="121" text-anchor="middle" font-size="28" font-weight="800">?</text><text x="415" y="121" text-anchor="middle" font-size="28" font-weight="800">?</text>';
      const edges = '<line x1="145" y1="112" x2="220" y2="112" stroke="#9bb9dc" stroke-width="4"/><line x1="300" y1="112" x2="375" y2="112" stroke="#9bb9dc" stroke-width="4"/><text x="182" y="83" text-anchor="middle" font-size="17" font-weight="700">Tổng ' + pairAB + '</text><text x="338" y="83" text-anchor="middle" font-size="17" font-weight="700">Tổng ' + pairBC + '</text><text x="105" y="174" text-anchor="middle" font-size="15">A</text><text x="260" y="174" text-anchor="middle" font-size="15">B</text><text x="415" y="174" text-anchor="middle" font-size="15">C</text>';
      return svgWrap(edges + nodes, 'Chuỗi ba ô, biết ô đầu và tổng của từng cặp liền nhau');
    }
    if (type === 'magic-pairs') {
      const pairAB = safeSvgNumber(spec.pairAB, 0), pairBC = safeSvgNumber(spec.pairBC, 0), pairAC = safeSvgNumber(spec.pairAC, 0);
      const nodes = '<circle cx="130" cy="135" r="36" fill="#eaf4ff" stroke="#2477f3" stroke-width="4"/><circle cx="260" cy="55" r="36" fill="#f0eaff" stroke="#7c4dcc" stroke-width="4"/><circle cx="390" cy="135" r="36" fill="#eafff2" stroke="#24965a" stroke-width="4"/><text x="130" y="143" text-anchor="middle" font-size="25" font-weight="800">A</text><text x="260" y="63" text-anchor="middle" font-size="25" font-weight="800">B</text><text x="390" y="143" text-anchor="middle" font-size="25" font-weight="800">C</text>';
      const edges = '<line x1="160" y1="116" x2="230" y2="75" stroke="#9bb9dc" stroke-width="4"/><line x1="290" y1="75" x2="360" y2="116" stroke="#9bb9dc" stroke-width="4"/><line x1="170" y1="151" x2="350" y2="151" stroke="#9bb9dc" stroke-width="4"/><text x="188" y="82" text-anchor="middle" font-size="17" font-weight="700">' + pairAB + '</text><text x="332" y="82" text-anchor="middle" font-size="17" font-weight="700">' + pairBC + '</text><text x="260" y="180" text-anchor="middle" font-size="17" font-weight="700">' + pairAC + '</text>';
      return svgWrap(edges + nodes, 'Ba ô A, B, C với tổng của từng cặp');
    }
    if (['rectangle', 'rectangle-missing', 'two-rectangles', 'two-rectangles-missing', 'rectangle-path', 'cut-rectangle', 'cut-rectangle-missing', 'box', 'tank'].includes(type)) {
      return renderGeometrySvg(spec);
    }
    return '';
  }

  function renderGeometrySvg(spec) {
    const type = spec.type;
    const note = notToScaleNote();
    if (type === 'box' || type === 'tank') {
      const length = safeSvgNumber(spec.length, 1), width = safeSvgNumber(spec.width, 1), height = safeSvgNumber(spec.height, 1);
      const extra = type === 'tank' ? '<rect x="147" y="105" width="220" height="55" fill="#7cc8ff" opacity=".65"/><text x="260" y="188" text-anchor="middle" font-size="16">Mực nước ban đầu: ' + safeSvgNumber(spec.filledHeight, 0) + ' dm</text>' : '';
      return svgWrap('<polygon points="145,70 340,70 390,105 195,105" fill="#eef6ff" stroke="#12376d" stroke-width="3"/><polygon points="195,105 390,105 390,165 195,165" fill="#f8fbff" stroke="#12376d" stroke-width="3"/><polygon points="145,70 195,105 195,165 145,130" fill="#e4f2ff" stroke="#12376d" stroke-width="3"/>' + extra + '<text x="290" y="62" text-anchor="middle" font-size="16">dài ' + length + '</text><text x="415" y="137" font-size="16">cao ' + height + '</text><text x="155" y="153" font-size="16">rộng ' + width + '</text>' + note, type === 'tank' ? 'Bể hình hộp chữ nhật với các kích thước đã cho' : 'Hộp chữ nhật với các kích thước đã cho');
    }
    if (type === 'two-rectangles') {
      return svgWrap('<rect x="75" y="65" width="210" height="90" fill="#dff4ff" stroke="#12376d" stroke-width="3"/><rect x="285" y="65" width="155" height="90" fill="#e9ffe9" stroke="#12376d" stroke-width="3"/><text x="180" y="55" text-anchor="middle" font-size="16">' + safeSvgNumber(spec.firstLength, 0) + ' cm</text><text x="362" y="55" text-anchor="middle" font-size="16">' + safeSvgNumber(spec.secondLength, 0) + ' cm</text><text x="55" y="115" text-anchor="middle" font-size="16">' + safeSvgNumber(spec.width, 0) + ' cm</text>' + note, 'Hai hình chữ nhật ghép liền nhau');
    }
    if (type === 'two-rectangles-missing') {
      return svgWrap('<rect x="75" y="65" width="210" height="90" fill="#dff4ff" stroke="#12376d" stroke-width="3"/><rect x="285" y="65" width="155" height="90" fill="#e9ffe9" stroke="#12376d" stroke-width="3"/><text x="180" y="55" text-anchor="middle" font-size="16">' + safeSvgNumber(spec.firstLength, 0) + ' cm</text><text x="362" y="55" text-anchor="middle" font-size="22" font-weight="800">?</text><text x="55" y="115" text-anchor="middle" font-size="16">' + safeSvgNumber(spec.width, 0) + ' cm</text><text x="260" y="184" text-anchor="middle" font-size="16">Tổng diện tích: ' + safeSvgNumber(spec.totalArea, 0) + ' cm²</text>' + note, 'Hai hình chữ nhật ghép liền, một chiều dài chưa biết');
    }
    if (type === 'rectangle-path') {
      return svgWrap('<rect x="70" y="35" width="380" height="145" rx="3" fill="#ffdca0" stroke="#12376d" stroke-width="3"/><rect x="115" y="75" width="290" height="65" fill="#dff5df" stroke="#16824b" stroke-width="3"/><text x="260" y="27" text-anchor="middle" font-size="16">' + safeSvgNumber(spec.outerLength, 0) + ' m</text><text x="40" y="110" text-anchor="middle" font-size="16">' + safeSvgNumber(spec.outerWidth, 0) + ' m</text><text x="92" y="66" text-anchor="middle" font-size="15">lối ' + safeSvgNumber(spec.path, 0) + ' m</text>' + note, 'Sân hình chữ nhật có lối đi phía trong');
    }
    if (type === 'cut-rectangle') {
      return svgWrap('<path d="M70 35 H450 V180 H70 Z M350 35 V90 H450" fill="#dff4ff" fill-rule="evenodd" stroke="#12376d" stroke-width="3"/><rect x="350" y="35" width="100" height="55" fill="#fff" stroke="#d65a5a" stroke-width="3" stroke-dasharray="7 5"/><text x="260" y="27" text-anchor="middle" font-size="16">' + safeSvgNumber(spec.bigLength, 0) + ' cm</text><text x="40" y="110" font-size="16">' + safeSvgNumber(spec.bigWidth, 0) + ' cm</text><text x="400" y="65" text-anchor="middle" font-size="14">cắt ' + safeSvgNumber(spec.cutLength, 0) + ' × ' + safeSvgNumber(spec.cutWidth, 0) + '</text>' + note, 'Hình chữ nhật bị cắt một phần ở góc');
    }
    if (type === 'cut-rectangle-missing') {
      return svgWrap('<path d="M70 35 H450 V180 H70 Z M350 35 V90 H450" fill="#dff4ff" fill-rule="evenodd" stroke="#12376d" stroke-width="3"/><rect x="350" y="35" width="100" height="55" fill="#fff" stroke="#d65a5a" stroke-width="3" stroke-dasharray="7 5"/><text x="260" y="27" text-anchor="middle" font-size="16">' + safeSvgNumber(spec.bigLength, 0) + ' cm</text><text x="40" y="110" font-size="16">' + safeSvgNumber(spec.bigWidth, 0) + ' cm</text><text x="400" y="60" text-anchor="middle" font-size="20" font-weight="800">? × ' + safeSvgNumber(spec.cutWidth, 0) + '</text><text x="260" y="194" text-anchor="middle" font-size="15">Diện tích còn lại: ' + safeSvgNumber(spec.remainingArea, 0) + ' cm²</text>' + note, 'Hình chữ nhật bị cắt một phần có chiều dài chưa biết');
    }
    const length = safeSvgNumber(spec.length, 0);
    const width = safeSvgNumber(spec.width, 0);
    const perimeterLabel = type === 'rectangle-missing' ? '<text x="260" y="194" text-anchor="middle" font-size="16">Chu vi: ' + safeSvgNumber(spec.perimeter, 0) + ' cm</text>' : '<text x="55" y="110" text-anchor="middle" font-size="16">' + width + '</text>';
    return svgWrap('<rect x="90" y="45" width="340" height="125" rx="4" fill="#e9f7ff" stroke="#12376d" stroke-width="4"/><text x="260" y="34" text-anchor="middle" font-size="16">' + length + '</text>' + perimeterLabel + note, type === 'rectangle-missing' ? 'Hình chữ nhật biết chu vi và chiều dài' : 'Hình chữ nhật với chiều dài và chiều rộng đã cho');
  }

  function cleanInput(value) {
    return String(value == null ? '' : value).trim().toLowerCase().replace(/−/g, '-').replace(/\s+/g, ' ');
  }

  function parseUserAnswer(value, expected) {
    const text = cleanInput(value);
    if (!text || !expected) return null;
    if (expected.kind === 'time') {
      const match = text.match(/^(\d{1,2})(?:\s*(?:giờ|h|:))\s*(\d{1,2})?(?:\s*phút)?$/i);
      if (!match) return null;
      return timeAnswer(Number(match[1]) * 60 + Number(match[2] || 0));
    }
    if (expected.kind === 'remainder') {
      const match = text.match(/^(\d+)\s*(?:dư|du|r)\s*(\d+)$/i);
      return match ? remainderAnswer(Number(match[1]), Number(match[2])) : null;
    }
    const numeric = text.replace(/(?:nghìn đồng|sản phẩm|đơn vị|cuốn sách|quyển sách|chiếc bút|ngăn tủ|viên bi|chiếc|cuốn|quyển|viên|người|bạn|ghế|đoạn|khối|thùng|cây|trang|tuổi|ngày|tạ|vé|cm³|dm³|cm²|m²|km\/giờ|km|cm|dm|kg|giờ|phút|lít|g|m|%)$/i, '').trim();
    if (expected.kind === 'rational') {
      const fractionMatch = numeric.match(/^(\d+)\s*\/\s*(\d+)$/);
      if (fractionMatch) return rational(Number(fractionMatch[1]), Number(fractionMatch[2]));
      const decimalMatch = numeric.replace(/\s/g, '').match(/^(\d+)(?:[,.](\d+))?$/);
      if (!decimalMatch) return null;
      const digits = decimalMatch[2] || '';
      return rational(Number(decimalMatch[1] + digits), 10 ** digits.length);
    }
    if (!/^\d[\d .]*$/.test(numeric)) return null;
    const number = Number(numeric.replace(/[ .]/g, ''));
    return Number.isSafeInteger(number) ? integer(number) : null;
  }

  function isCorrectAnswer(input, expected) {
    return answersEqual(parseUserAnswer(input, expected), expected);
  }

  function seededRandom(seed) {
    let state = seed >>> 0;
    return function () {
      state += 0x6D2B79F5;
      let value = state;
      value = Math.imul(value ^ value >>> 15, value | 1);
      value ^= value + Math.imul(value ^ value >>> 7, value | 61);
      return ((value ^ value >>> 14) >>> 0) / 4294967296;
    };
  }

  function runAudit(options) {
    const settings = options || {};
    const examsPerGrade = Math.max(1, Math.min(200, Number(settings.examsPerGrade) || 20));
    const issues = [];
    const coverage = {};
    let generated = 0;
    for (let grade = 1; grade <= 5; grade += 1) {
      coverage[grade] = new Set();
      let usedFingerprints = [];
      let usedTemplateIds = [];
      let previousFamilies = [];
      for (let examIndex = 0; examIndex < examsPerGrade; examIndex += 1) {
        try {
          const exam = generateExam({ grade, rng: seededRandom(grade * 100000 + examIndex + 1), usedFingerprints, usedTemplateIds, previousFamilies });
          generated += 1;
          const summary = exam.summary;
          const expectedCategories = grade >= 3 ? { reasoning_story: 12, canonical_problem: 6, advanced_computation: 3 } : grade === 2 ? { reasoning_story: 9, visual_logic: 7, advanced_computation: 5 } : { reasoning_story: 8, visual_logic: 8, advanced_computation: 5 };
          if (summary.difficulty.kho !== 10 || summary.difficulty['rat-kho'] !== 5 || summary.difficulty['chinh-phuc'] !== 6) issues.push({ grade, examIndex, code: 'difficulty_quota', summary });
          Object.keys(expectedCategories).forEach(category => { if (summary.category[category] !== expectedCategories[category]) issues.push({ grade, examIndex, code: 'category_quota', category, summary }); });
          BLUEPRINTS[grade].forEach(([difficulty, category, count]) => {
            if (summary.cells[difficulty + '|' + category] !== count) issues.push({ grade, examIndex, code: 'blueprint_cell_quota', difficulty, category, count, summary });
          });
          if (summary.uniqueFamilies !== EXAM_SIZE || summary.uniqueTemplates !== EXAM_SIZE || summary.uniqueFingerprints !== EXAM_SIZE) issues.push({ grade, examIndex, code: 'duplicate', summary });
          if (grade === 2) {
            const firstTwoParts = exam.questions.slice(0, 15);
            const conquestPart = exam.questions.slice(15);
            if (new Set(firstTwoParts.map(question => question.builder)).size !== 15) issues.push({ grade, examIndex, code: 'grade2_repeated_mechanic' });
            if (firstTwoParts.some(question => /\d+(?:[,.]\d+)|%|phần trăm|số thập phân/i.test([question.prompt, question.answerText].concat(question.solution || []).join(' ')))) issues.push({ grade, examIndex, code: 'grade2_decimal_surface' });
            firstTwoParts.forEach(question => {
              const model = question.model || {};
              if (question.family === 'g2-inverse-events' && Math.abs((model.events || []).reduce((sum, value) => sum + value, 0)) < 4) issues.push({ grade, examIndex, code: 'grade2_inverse_cancellation', templateId: question.templateId });
              if (question.family === 'g2-hidden' && Math.abs(model.addValue - model.remove) < 5) issues.push({ grade, examIndex, code: 'grade2_hidden_cancellation', templateId: question.templateId });
              if (question.family === 'g2-inverse-groups' && Math.abs(model.removed - model.added) < 3) issues.push({ grade, examIndex, code: 'grade2_group_cancellation', templateId: question.templateId });
              if (question.family === 'g2-transfer' && Math.abs((model.first - model.moved) - (model.second + model.moved)) < 2) issues.push({ grade, examIndex, code: 'grade2_transfer_degenerate', templateId: question.templateId });
            });
            conquestPart.forEach(question => {
              if (['g2-cp-cuts', 'g2-cp-line-position', 'g2-cp-magic-square', 'g2-cp-divide-reverse'].includes(question.family) && Number(question.model && question.model.challengeDepth) < 3) issues.push({ grade, examIndex, code: 'grade2_conquest_shallow', templateId: question.templateId });
              if (question.family === 'g2-cp-magic-square' && (!question.svgGivens || question.svgGivens.type !== 'magic-grid-chain')) issues.push({ grade, examIndex, code: 'grade2_magic_grid_missing', templateId: question.templateId });
            });
          }
          exam.questions.forEach(question => {
            coverage[grade].add(question.family);
            if (!answerIsNonNegative(question.answer) || !answersEqual(question.answer, question.answerCheck)) issues.push({ grade, examIndex, code: 'answer_gate', templateId: question.templateId });
            if (!isCorrectAnswer(question.answerText, question.answer)) issues.push({ grade, examIndex, code: 'answer_text_round_trip', templateId: question.templateId, answerText: question.answerText });
            if (/NaN|undefined|Infinity|null/i.test(question.prompt + question.answerText)) issues.push({ grade, examIndex, code: 'invalid_token', templateId: question.templateId });
            if (question.svgGivens) {
              const svg = renderSvg(question.svgGivens);
              if (!svg || /data-|<script|foreignObject|answer|solution|correct/i.test(svg)) issues.push({ grade, examIndex, code: 'svg_gate', templateId: question.templateId });
            }
          });
          usedFingerprints = usedFingerprints.concat(exam.questions.map(question => question.fingerprint)).slice(-1500);
          usedTemplateIds = usedTemplateIds.concat(exam.questions.map(question => question.templateId)).slice(-500);
          previousFamilies = exam.questions.map(question => question.family);
        } catch (error) {
          issues.push({ grade, examIndex, code: 'generation_exception', message: String(error && error.message || error) });
        }
      }
      if (examsPerGrade >= 5) {
        const catalogFamilyCount = new Set(TEMPLATES.filter(item => item.grade === grade).map(item => item.family)).size;
        if (coverage[grade].size !== catalogFamilyCount) issues.push({ grade, code: 'family_coverage', expected: catalogFamilyCount, actual: coverage[grade].size });
      }
    }
    return { ok: issues.length === 0, generated, examsPerGrade, issues, coverage: Object.fromEntries(Object.entries(coverage).map(([grade, set]) => [grade, Array.from(set)])) };
  }

  function getCatalogSummary() {
    const result = {};
    for (let grade = 1; grade <= 5; grade += 1) {
      const items = TEMPLATES.filter(item => item.grade === grade);
      result[grade] = {
        families: new Set(items.map(item => item.family)).size,
        familyNames: Array.from(new Set(items.map(item => item.family))),
        templatesIncludingVariants: items.length * 2,
        difficulty: items.reduce((counts, item) => Object.assign(counts, { [item.difficulty]: (counts[item.difficulty] || 0) + 1 }), {}),
        category: items.reduce((counts, item) => Object.assign(counts, { [item.category]: (counts[item.category] || 0) + 1 }), {})
      };
    }
    return result;
  }

  window.IMathHSGBank = {
    VERSION,
    policies: POLICIES,
    blueprints: BLUEPRINTS,
    generateExam,
    generateSet,
    renderSvg,
    formatAnswer: answerText,
    parseUserAnswer,
    isCorrectAnswer,
    runAudit,
    getCatalogSummary
  };
})(window);
