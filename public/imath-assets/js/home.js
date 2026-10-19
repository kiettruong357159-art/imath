(function (){
'use strict';
const students=[
['Nguyễn Minh Khang', 'Lớp 2', 1280, 12, 76, '38/50', 'Đang học rất đều', 'K'],
['Trần Bảo An', 'Lớp 3', 1640, 15, 82, '41/50', 'Tiến bộ vượt bậc', 'A'],
['Lê Gia Hân', 'Lớp 4', 2180, 21, 91, '46/50', 'Sẵn sàng chinh phục', 'H'],
['Phạm Đức Minh', 'Lớp 5', 1950, 18, 86, '43/50', 'Duy trì nhịp học tốt', 'M'],
['Đỗ Khánh Linh', 'Lớp 2', 980, 9, 65, '32/50', 'Cố gắng mỗi ngày', 'L'],
['Vũ Hoàng Nam', 'Lớp 3', 1420, 14, 79, '39/50', 'Tư duy rất nhanh', 'N'],
['Ngô Thu Trang', 'Lớp 4', 1760, 16, 84, '42/50', 'Đang bứt phá', 'T'],
['Bùi Quang Huy', 'Lớp 5', 2390, 23, 93, '47/50', 'Xuất sắc tuần này', 'H'],
['Hoàng Mai Anh', 'Lớp 2', 1170, 11, 72, '36/50', 'Đang học đều đặn', 'A'],
['Dương Anh Thư', 'Lớp 3', 1540, 13, 80, '40/50', 'Hoàn thành đúng kế hoạch', 'T'],
['Đinh Nhật Minh', 'Lớp 4', 1870, 17, 87, '44/50', 'Rất tự tin', 'M'],
['Phan Hà My', 'Lớp 5', 2070, 20, 89, '45/50', 'Chăm chỉ mỗi ngày', 'M'],
['Lý Tuấn Kiệt', 'Lớp 2', 890, 8, 61, '30/50', 'Đã sẵn sàng học tiếp', 'K'],
['Nguyễn Phương Nhi', 'Lớp 3', 1490, 13, 77, '38/50', 'Đang tiến bộ tốt', 'N'],
['Trương Khôi Nguyên', 'Lớp 4', 1830, 18, 85, '42/50', 'Nắm bài rất nhanh', 'N'],
['Tạ Bích Ngọc', 'Lớp 5', 2260, 22, 92, '46/50', 'Kiên trì đáng khen', 'N'],
['Đào Gia Bảo', 'Lớp 2', 1050, 10, 69, '34/50', 'Đang làm quen thật tốt', 'B'],
['Mai Khánh Vy', 'Lớp 3', 1360, 12, 74, '37/50', 'Càng học càng thích', 'V'],
['Cao Đức Anh', 'Lớp 4', 1920, 19, 88, '44/50', 'Tốc độ rất ấn tượng', 'A'],
['Ninh Thu Hà', 'Lớp 5', 2140, 21, 90, '45/50', 'Học tập chủ động', 'H'],
['Lâm Hải Đăng', 'Lớp 2', 1140, 11, 70, '35/50', 'Mỗi ngày một tiến bộ', 'Đ'],
['Kiều Anh Minh', 'Lớp 3', 1610, 15, 81, '40/50', 'Rất chăm làm bài', 'M'],
['Phùng Bảo Trâm', 'Lớp 4', 1710, 16, 83, '41/50', 'Đang tăng tốc', 'T'],
['Trần Đức Duy', 'Lớp 5', 2310, 22, 94, '47/50', 'Thành tích nổi bật', 'D'],
['Nguyễn Yến Nhi', 'Lớp 3', 1460, 14, 78, '39/50', 'Giữ vững phong độ', 'N']
];
const challenges=[
{ grade: 'Lớp 2', question: 'Lan có 48 nhãn vở, mẹ mua thêm 27 nhãn vở. Hỏi Lan có tất cả bao nhiêu nhãn vở?', options: ['65 nhãn vở', '75 nhãn vở', '85 nhãn vở', '25 nhãn vở'], correct: 1 },
{ grade: 'Lớp 2', question: 'Số nào lớn hơn 36 nhưng bé hơn 38?', options: ['35', '36', '37', '38'], correct: 2 },
{ grade: 'Lớp 2', question: 'Một tuần có 7 ngày. Hai tuần có bao nhiêu ngày?', options: ['9 ngày', '12 ngày', '14 ngày', '21 ngày'], correct: 2 },
{ grade: 'Lớp 2', question: 'Kết quả của phép tính 63 − 28 là bao nhiêu?', options: ['35', '45', '25', '31'], correct: 0 },
{ grade: 'Lớp 2', question: 'Đồng hồ chỉ 8 giờ 30 phút còn được gọi là mấy giờ?', options: ['8 giờ rưỡi', '9 giờ rưỡi', '7 giờ rưỡi', '8 giờ kém 30'], correct: 0 },
{ grade: 'Lớp 3', question: 'Một cửa hàng có 125 quả táo, buổi sáng bán 48 quả, buổi chiều bán 37 quả. Cửa hàng còn bao nhiêu quả?', options: ['40 quả', '30 quả', '50 quả', '60 quả'], correct: 0 },
{ grade: 'Lớp 3', question: 'Tích của 7 và 8 là bao nhiêu?', options: ['54', '56', '64', '48'], correct: 1 },
{ grade: 'Lớp 3', question: 'Điền số thích hợp: 9 × …=63.', options: ['6', '8', '7', '9'], correct: 2 },
{ grade: 'Lớp 3', question: 'Chu vi hình vuông có cạnh dài 6 cm là bao nhiêu?', options: ['12 cm', '18 cm', '24 cm', '36 cm'], correct: 2 },
{ grade: 'Lớp 3', question: 'Một quyển truyện có 96 trang. An đã đọc 38 trang. An còn phải đọc bao nhiêu trang?', options: ['48 trang', '58 trang', '68 trang', '66 trang'], correct: 1 },
{ grade: 'Lớp 3', question: 'Số lớn nhất có ba chữ số khác nhau là số nào?', options: ['987', '999', '998', '789'], correct: 0 },
{ grade: 'Lớp 3', question: '3 giờ 45 phút còn gọi là gì?', options: ['3 giờ rưỡi', '4 giờ kém 15 phút', '4 giờ rưỡi', '3 giờ kém 15 phút'], correct: 1 },
{ grade: 'Lớp 4', question: 'Kết quả của 3 456 + 2 789 là bao nhiêu?', options: ['6 145', '6 245', '5 245', '6 235'], correct: 1 },
{ grade: 'Lớp 4', question: 'Phân số nào bằng với 1/2?', options: ['2/3', '3/4', '4/8', '5/8'], correct: 2 },
{ grade: 'Lớp 4', question: 'Một hình chữ nhật dài 12 cm, rộng 5 cm. Diện tích hình chữ nhật là bao nhiêu?', options: ['17 cm²', '34 cm²', '60 cm²', '120 cm²'], correct: 2 },
{ grade: 'Lớp 4', question: 'Số 2 405 018 có chữ số 5 thuộc hàng nào?', options: ['Hàng nghìn', 'Hàng chục nghìn', 'Hàng trăm nghìn', 'Hàng đơn vị'], correct: 0 },
{ grade: 'Lớp 4', question: 'Trung bình cộng của 12, 18 và 24 là bao nhiêu?', options: ['16', '18', '20', '54'], correct: 1 },
{ grade: 'Lớp 4', question: '2 tấn 5 kg bằng bao nhiêu ki-lô-gam?', options: ['205 kg', '2 005 kg', '2 500 kg', '25 kg'], correct: 1 },
{ grade: 'Lớp 5', question: '25% của 200 là bao nhiêu?', options: ['25', '40', '50', '75'], correct: 2 },
{ grade: 'Lớp 5', question: 'Kết quả của 4,5 × 2 là bao nhiêu?', options: ['6,5', '9', '8,5', '90'], correct: 1 },
{ grade: 'Lớp 5', question: 'Một lớp có 40 học sinh, trong đó có 18 học sinh nữ. Tỉ số phần trăm học sinh nữ là bao nhiêu?', options: ['40%', '45%', '50%', '55%'], correct: 1 },
{ grade: 'Lớp 5', question: 'Một xe đi trong 2,5 giờ với vận tốc 48 km/giờ. Quãng đường xe đi được là bao nhiêu?', options: ['96 km', '100 km', '120 km', '150 km'], correct: 2 },
{ grade: 'Lớp 5', question: 'Thể tích hình lập phương có cạnh 4 cm là bao nhiêu?', options: ['16 cm³', '32 cm³', '48 cm³', '64 cm³'], correct: 3 },
{ grade: 'Lớp 5', question: 'Phân số 18/24 rút gọn được thành phân số nào?', options: ['2/3', '3/4', '4/5', '6/8'], correct: 1 },
{ grade: 'Lớp 5', question: '0,75 viết dưới dạng phân số tối giản là gì?', options: ['1/4', '2/3', '3/4', '4/3'], correct: 2 }
];
const oneOf=(items)=> items[Math.floor(Math.random() * items.length)];
function initHeroImage(){
const heroImage=document.querySelector('[data-random-hero]');
if(!heroImage){
return;
}
const sources=(heroImage.dataset.heroSources||'').split('|').filter(Boolean);
if(!sources.length){
return;
}
let previous='';
try {
previous=window.sessionStorage.getItem('im26HomeHero')||'';
} catch (error){
previous='';
}
const choices=sources.filter((source)=> source!==previous);
const next=oneOf(choices.length ? choices:sources);
heroImage.src=next;
try {
window.sessionStorage.setItem('im26HomeHero', next);
} catch (error){
}}
function setText(root, selector, value){
const element=root.querySelector(selector);
if(element){
element.textContent=String(value);
}}
function initProgress(){
const root=document.querySelector('[data-home-progress]');
if(!root){
return;
}
const student=oneOf(students);
const weeklyBars=Array.from({ length: 7 }, ()=> 35 + Math.floor(Math.random() * 61));
const skillNames=['🔢 Số học', '➕ Phép tính', '📐 Hình học', '📝 Giải toán có lời văn'];
const skills=skillNames.map((name, index)=> ({
name,
value: Math.max(48, Math.min(97, student[4] - 12 + index * 5 + Math.floor(Math.random() * 10)))
}));
const avatar=root.querySelector('[data-student-avatar]');
const avatarPositions=[
'0% 0%', '33.333% 0%', '66.667% 0%', '100% 0%',
'0% 100%', '33.333% 100%', '66.667% 100%', '100% 100%'
];
if(avatar){
avatar.style.backgroundPosition=oneOf(avatarPositions);
}
setText(root, '[data-student-name]', student[0]);
setText(root, '[data-student-grade]', student[1]);
setText(root, '[data-student-points]', student[2].toLocaleString('vi-VN'));
setText(root, '[data-student-badges]', student[3]);
setText(root, '[data-student-percent]', `${student[4]}%`);
setText(root, '[data-student-completion]', `Hoàn thành ${student[5]} bài học`);
setText(root, '[data-student-status]', student[6]);
const donut=root.querySelector('[data-student-donut]');
if(donut){
donut.style.setProperty('--percent', student[4]);
}
const bars=root.querySelector('[data-student-bars]');
if(bars){
weeklyBars.forEach((value)=> {
const bar=document.createElement('span');
bar.className='im26-home__bar';
bar.style.height=`${value}%`;
bars.appendChild(bar);
});
}
const skillsBox=root.querySelector('[data-student-skills]');
if(skillsBox){
skills.forEach((skill)=> {
const item=document.createElement('div');
const line=document.createElement('div');
const label=document.createElement('span');
const value=document.createElement('b');
const meter=document.createElement('div');
const fill=document.createElement('span');
item.className='im26-home__skill';
line.className='im26-home__skill-line';
meter.className='im26-home__skill-meter';
label.textContent=skill.name;
value.textContent=`${skill.value}%`;
fill.style.width=`${skill.value}%`;
line.append(label, value);
meter.appendChild(fill);
item.append(line, meter);
skillsBox.appendChild(item);
});
}}
function initChallenge(){
const root=document.querySelector('[data-home-challenge]');
if(!root){
return;
}
const challenge=oneOf(challenges);
const grade=root.querySelector('[data-challenge-grade]');
const question=root.querySelector('[data-challenge-question]');
const answers=root.querySelector('[data-challenge-answers]');
const feedback=root.querySelector('[data-challenge-feedback]');
const check=root.querySelector('[data-challenge-check]');
let selected=null;
let submitted=false;
grade.textContent=challenge.grade;
question.textContent=challenge.question;
challenge.options.forEach((option, index)=> {
const button=document.createElement('button');
const badge=document.createElement('span');
button.className='im26-home__answer';
button.type='button';
button.dataset.index=String(index);
badge.textContent=String.fromCharCode(65 + index);
button.append(badge, document.createTextNode(option));
button.addEventListener('click', function (){
if(submitted){
return;
}
selected=index;
answers.querySelectorAll('.im26-home__answer').forEach((item)=> {
item.classList.toggle('is-selected', item===button);
});
feedback.textContent='Con đã chọn đáp án, bấm “Kiểm tra đáp án” nhé.';
});
answers.appendChild(button);
});
check.addEventListener('click', function (){
if(selected===null){
feedback.textContent='Con hãy chọn một đáp án trước nhé.';
return;
}
submitted=true;
answers.querySelectorAll('.im26-home__answer').forEach((button, index)=> {
button.disabled=true;
if(index===challenge.correct){
button.classList.add('is-right');
}
if(index===selected&&index!==challenge.correct){
button.classList.add('is-wrong');
}});
feedback.textContent=selected===challenge.correct
? '🌟 Chính xác! Con làm rất tốt.'
: `Chưa đúng rồi. Đáp án đúng là ${challenge.options[challenge.correct]}.`;
});
}
function initCardImages(){
document.querySelectorAll('.im26-home__material-cover img, .im26-home__parent-photo img').forEach((image)=> {
const showIfLoaded=()=> image.classList.toggle('is-loaded', image.naturalWidth > 0);
image.addEventListener('load', showIfLoaded);
image.addEventListener('error', ()=> image.classList.remove('is-loaded'));
if(image.complete){
showIfLoaded();
}});
}
initCardImages();
initHeroImage();
initProgress();
initChallenge();
}());
