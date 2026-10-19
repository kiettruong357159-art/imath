(function (root, factory) {
  const config = factory();
  if (typeof module === 'object' && module.exports) module.exports = config;
  else root.IMathGrade6Config = config;
})(typeof window !== 'undefined' ? window : globalThis, function () {
  'use strict';

  const slots = [
    {position:1, internalDifficulty:'kha', displayLabel:'Khá'},
    {position:2, internalDifficulty:'kha', displayLabel:'Khá'},
    {position:3, internalDifficulty:'gioi-nhe', displayLabel:'Giỏi'},
    {position:4, internalDifficulty:'gioi-nhe', displayLabel:'Giỏi'},
    {position:5, internalDifficulty:'gioi-nhe', displayLabel:'Giỏi'},
    {position:6, internalDifficulty:'gioi-vua', displayLabel:'Giỏi'},
    {position:7, internalDifficulty:'gioi-vua', displayLabel:'Giỏi'},
    {position:8, internalDifficulty:'gioi-cao', displayLabel:'Giỏi'},
    {position:9, internalDifficulty:'gioi-cao', displayLabel:'Giỏi'},
    {position:10, internalDifficulty:'chinh-phuc-dau', displayLabel:'Chinh phục'},
    {position:11, internalDifficulty:'chinh-phuc-dau', displayLabel:'Chinh phục'},
    {position:12, internalDifficulty:'phan-loai-gioi', displayLabel:'Chinh phục'},
    {position:13, internalDifficulty:'phan-loai-gioi', displayLabel:'Chinh phục'},
    {position:14, internalDifficulty:'tranh-thu-hang', displayLabel:'Chinh phục'},
    {position:15, internalDifficulty:'tranh-thu-hang', displayLabel:'Chinh phục'}
  ];

  const constraints = {
    exactQuestionCount: 15,
    eligibleStatuses: ['approved'],
    maxSameMainTopic: 2,
    minVisualQuestions: 2,
    requiredMainTopics: ['numbers','ratio','geometry','motion','work','logic','percent','measure'],
    forbidSameTemplateFamily: true,
    requireConsecutiveQuestionGroups: true,
    recentQuestionLimit: 15,
    preserveNextExamFeasibility: true,
    topicTargetsPerExam: {numbers:2,ratio:2,geometry:2,motion:2,work:2,logic:2,percent:2,measure:1},
    minimumReasoningDepthByPosition: {
      10: 3, 11: 3, 12: 3, 13: 3, 14: 3, 15: 3
    }
  };

  const schoolProfiles = {
    caugiay:{code:'CG',name:'THCS Cầu Giấy',short:'Cầu Giấy',place:'Hà Nội',time:45,focus:['logic','numbers','geometry'],benchmarkStatus:'needs-review',description:'Bộ câu hỏi cân bằng giữa số học, toán lời văn, hình học và suy luận.'},
    ams:{code:'AMS',name:'THPT chuyên Hà Nội – Amsterdam',short:'Ams',place:'Hà Nội',time:45,focus:['logic','numbers','work'],benchmarkStatus:'needs-review',description:'Tăng cường suy luận nhiều bước, tính nhanh và các bài toán thử thách.'},
    ntt:{code:'NTT',name:'THCS & THPT Nguyễn Tất Thành',short:'Nguyễn Tất Thành',place:'Hà Nội',time:45,focus:['ratio','motion','percent'],benchmarkStatus:'needs-review',description:'Chú trọng đọc hiểu dữ kiện, tỉ số, chuyển động và vận dụng thực tế.'},
    ltv:{code:'LTV',name:'THCS & THPT Lương Thế Vinh',short:'Lương Thế Vinh',place:'Hà Nội',time:45,focus:['numbers','percent','geometry'],benchmarkStatus:'needs-review',description:'Ôn chắc kỹ năng tính toán, phân số, phần trăm và hình học.'},
    nksp:{code:'NKSP',name:'THCS Năng khiếu ĐHSP',short:'Năng khiếu ĐHSP',place:'Hà Nội',time:50,focus:['logic','motion','work'],benchmarkStatus:'needs-review',description:'Tập trung toán tư duy, chuyển động và bài toán nhiều quan hệ.'},
    lhp:{code:'LHP',name:'THPT chuyên Lê Hồng Phong',short:'Lê Hồng Phong',place:'Nam Định',time:45,focus:['geometry','ratio','numbers'],benchmarkStatus:'needs-review',description:'Rèn nền tảng nâng cao, hình học, tỉ số và kỹ năng trình bày.'},
    tmn:{code:'TMN',name:'THCS Trần Mai Ninh',short:'Trần Mai Ninh',place:'Thanh Hóa',time:45,focus:['numbers','logic','geometry'],benchmarkStatus:'needs-review',description:'Rèn số học nâng cao, suy luận logic và hình học theo định hướng học sinh giỏi.'},
    dtm:{code:'ĐTM',name:'THCS Đặng Thai Mai',short:'Đặng Thai Mai',place:'Nghệ An',time:45,focus:['numbers','logic','ratio'],benchmarkStatus:'needs-review',description:'Luyện khả năng vận dụng số học, tỉ số và giải quyết bài toán nhiều bước.'},
    ntphue:{code:'NTP',name:'THCS Nguyễn Tri Phương',short:'Nguyễn Tri Phương',place:'Huế',time:60,focus:['numbers','geometry','ratio'],benchmarkStatus:'needs-review',description:'Ôn chắc số học, hình học và tỉ số theo định hướng tuyển sinh lớp 6 tại Huế.'},
    tdn:{code:'TĐN',name:'THCS và THPT Trần Đại Nghĩa',short:'Trần Đại Nghĩa',place:'TP. Hồ Chí Minh',time:60,focus:['logic','numbers','geometry'],benchmarkStatus:'needs-review',description:'Luyện đánh giá năng lực với câu hỏi tư duy, đọc hiểu dữ kiện và vận dụng tổng hợp.'},
    tqt1:{code:'TQT1',name:'THCS Trần Quốc Toản 1',short:'Trần Quốc Toản 1',place:'TP. Hồ Chí Minh',time:45,focus:['logic','numbers','percent'],benchmarkStatus:'needs-review',description:'Rèn bài khảo sát đầu vào với số học, logic và các tình huống thực tế.'},
    nht:{code:'NHT',name:'THCS Nguyễn Hữu Thọ',short:'Nguyễn Hữu Thọ',place:'TP. Hồ Chí Minh',time:45,focus:['ratio','geometry','motion'],benchmarkStatus:'needs-review',description:'Ôn năng lực toán lớp 5, tỉ số, hình học và bài toán chuyển động.'}
  };

  return {
    schemaVersion: '1.0.0',
    matrixId: 'lop-6-15-cau-v1',
    matrixLabel: 'Ma trận 15 câu đấu trường nâng cao',
    slots,
    constraints,
    schoolProfiles,
    schoolRegions: [
      {id:'north',label:'Miền Bắc',keys:['caugiay','ams','ntt','ltv','nksp','lhp']},
      {id:'central',label:'Miền Trung',keys:['tmn','dtm','ntphue']},
      {id:'hcm',label:'Miền Nam',keys:['tdn','tqt1','nht']}
    ],
    bankTargetsByDifficulty: {
      kha:36,
      'gioi-nhe':28,
      'gioi-vua':35,
      'gioi-cao':21,
      'chinh-phuc-dau':25,
      'phan-loai-gioi':22,
      'tranh-thu-hang':16
    },
    difficultyLabels: {
      kha:'Khá',
      'gioi-nhe':'Giỏi nhẹ',
      'gioi-vua':'Giỏi vừa',
      'gioi-cao':'Giỏi cao',
      'chinh-phuc-dau':'Chinh phục đầu',
      'phan-loai-gioi':'Phân loại học sinh giỏi',
      'tranh-thu-hang':'Tranh thứ hạng cao'
    },
    topicLabels: {logic:'Logic',numbers:'Số học',geometry:'Hình học',work:'Công việc',ratio:'Tỉ số',motion:'Chuyển động',percent:'Phần trăm',measure:'Đại lượng'},
    note: 'Ma trận nội bộ. Hồ sơ từng trường đang ở trạng thái needs-review và chưa được coi là cấu trúc tuyển sinh chính thức.'
  };
});
