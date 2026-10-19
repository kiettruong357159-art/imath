'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

type StudentTuple = [string, string, number, number, number, string, string, string];

const STUDENTS: StudentTuple[] = [
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
];

interface ChallengeItem {
  grade: string;
  question: string;
  options: string[];
  correct: number;
}

const CHALLENGES: ChallengeItem[] = [
  {
    grade: 'Lớp 2',
    question: 'Lan có 48 nhãn vở, mẹ mua thêm 27 nhãn vở. Hỏi Lan có tất cả bao nhiêu nhãn vở?',
    options: ['65 nhãn vở', '75 nhãn vở', '85 nhãn vở', '25 nhãn vở'],
    correct: 1,
  },
  {
    grade: 'Lớp 3',
    question: 'Một cửa hàng có 125 quả táo, buổi sáng bán 48 quả, buổi chiều bán 37 quả. Cửa hàng còn bao nhiêu quả?',
    options: ['40 quả', '30 quả', '50 quả', '60 quả'],
    correct: 0,
  },
  {
    grade: 'Lớp 3',
    question: 'Chu vi hình vuông có cạnh dài 6 cm là bao nhiêu?',
    options: ['12 cm', '18 cm', '24 cm', '36 cm'],
    correct: 2,
  },
  {
    grade: 'Lớp 4',
    question: 'Một hình chữ nhật dài 12 cm, rộng 5 cm. Diện tích hình chữ nhật là bao nhiêu?',
    options: ['17 cm²', '34 cm²', '60 cm²', '120 cm²'],
    correct: 2,
  },
  {
    grade: 'Lớp 5',
    question: 'Một xe đi trong 2,5 giờ với vận tốc 48 km/giờ. Quãng đường xe đi được là bao nhiêu?',
    options: ['96 km', '100 km', '120 km', '150 km'],
    correct: 2,
  },
];

function oneOf<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

function setText(root: Element, selector: string, value: string | number) {
  const el = root.querySelector(selector);
  if (el) el.textContent = String(value);
}

export function ImathPageEnhancer() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Sync body classes for 100% CSS compatibility with imath-2026 theme
    const classes = ['wp-embed-responsive', 'wp-theme-imath-2026'];
    if (pathname.startsWith('/goc-phu-huynh')) {
      classes.push('home', 'blog', 'im26-parent-page');
    } else if (pathname.startsWith('/tai-lieu')) {
      classes.push('archive', 'post-type-archive', 'post-type-archive-imath_document');
    } else {
      classes.push('home', 'blog');
    }
    document.body.className = classes.join(' ');

    // 2. Card images (.is-loaded class required for opacity transition on homepage)
    document
      .querySelectorAll<HTMLImageElement>('.im26-home__material-cover img, .im26-home__parent-photo img')
      .forEach((img) => {
        const showIfLoaded = () => img.classList.toggle('is-loaded', img.naturalWidth > 0);
        img.addEventListener('load', showIfLoaded);
        img.addEventListener('error', () => img.classList.remove('is-loaded'));
        if (img.complete) showIfLoaded();
      });

    // 3. Category magazine image fallback
    document.querySelectorAll<HTMLImageElement>('.im26-mag-media img').forEach((img) => {
      const recover = () => {
        const orig = img.getAttribute('data-im26-original');
        const failed = img.currentSrc || img.src;
        img.removeAttribute('data-im26-original');
        if (orig && orig !== failed) {
          img.removeAttribute('srcset');
          img.removeAttribute('sizes');
          img.src = orig;
        } else {
          img.hidden = true;
        }
      };
      img.addEventListener('error', recover);
      if (img.complete && img.naturalWidth === 0) recover();
    });

    // 4. Homepage student progress widget ([data-home-progress])
    const progressRoot = document.querySelector<HTMLElement>('[data-home-progress]');
    if (progressRoot && progressRoot.dataset.im26Enhanced !== '1') {
      progressRoot.dataset.im26Enhanced = '1';
      const student = oneOf(STUDENTS);
      const weeklyBars = Array.from({ length: 7 }, () => 35 + Math.floor(Math.random() * 61));
      const skillNames = ['🔢 Số học', '➕ Phép tính', '📐 Hình học', '📝 Giải toán có lời văn'];
      const skills = skillNames.map((name, idx) => ({
        name,
        value: Math.max(48, Math.min(97, student[4] - 12 + idx * 5 + Math.floor(Math.random() * 10))),
      }));

      setText(progressRoot, '[data-student-name]', student[0]);
      setText(progressRoot, '[data-student-grade]', student[1]);
      setText(progressRoot, '[data-student-points]', student[2].toLocaleString('vi-VN'));
      setText(progressRoot, '[data-student-badges]', student[3]);
      setText(progressRoot, '[data-student-percent]', `${student[4]}%`);
      setText(progressRoot, '[data-student-completion]', `Hoàn thành ${student[5]} bài học`);
      setText(progressRoot, '[data-student-status]', student[6]);

      const donut = progressRoot.querySelector<HTMLElement>('[data-student-donut]');
      if (donut) {
        donut.style.setProperty('--percent', String(student[4]));
      }
      const bars = progressRoot.querySelector<HTMLElement>('[data-student-bars]');
      if (bars) {
        bars.innerHTML = '';
        weeklyBars.forEach((val) => {
          const bar = document.createElement('span');
          bar.className = 'im26-home__bar';
          bar.style.height = `${val}%`;
          bars.appendChild(bar);
        });
      }
      const skillsBox = progressRoot.querySelector<HTMLElement>('[data-student-skills]');
      if (skillsBox) {
        skillsBox.innerHTML = '';
        skills.forEach((skill) => {
          const item = document.createElement('div');
          const line = document.createElement('div');
          const label = document.createElement('span');
          const value = document.createElement('b');
          const meter = document.createElement('div');
          const fill = document.createElement('span');
          item.className = 'im26-home__skill';
          line.className = 'im26-home__skill-line';
          meter.className = 'im26-home__skill-meter';
          label.textContent = skill.name;
          value.textContent = `${skill.value}%`;
          fill.style.width = `${skill.value}%`;
          line.append(label, value);
          meter.appendChild(fill);
          item.append(line, meter);
          skillsBox.appendChild(item);
        });
      }
    }

    // 5. Homepage interactive daily math challenge ([data-home-challenge])
    const challengeRoot = document.querySelector<HTMLElement>('[data-home-challenge]');
    if (challengeRoot && challengeRoot.dataset.im26Enhanced !== '1') {
      challengeRoot.dataset.im26Enhanced = '1';
      const challenge = oneOf(CHALLENGES);
      const grade = challengeRoot.querySelector('[data-challenge-grade]');
      const question = challengeRoot.querySelector('[data-challenge-question]');
      const answers = challengeRoot.querySelector('[data-challenge-answers]');
      const feedback = challengeRoot.querySelector('[data-challenge-feedback]');
      const check = challengeRoot.querySelector('[data-challenge-check]');

      if (grade && question && answers && feedback && check) {
        let selected: number | null = null;
        let submitted = false;
        grade.textContent = challenge.grade;
        question.textContent = challenge.question;
        answers.innerHTML = '';

        challenge.options.forEach((option, index) => {
          const button = document.createElement('button');
          const badge = document.createElement('span');
          button.className = 'im26-home__answer';
          button.type = 'button';
          button.dataset.index = String(index);
          badge.textContent = String.fromCharCode(65 + index);
          button.append(badge, document.createTextNode(option));
          button.addEventListener('click', () => {
            if (submitted) return;
            selected = index;
            answers.querySelectorAll('.im26-home__answer').forEach((item) => {
              item.classList.toggle('is-selected', item === button);
            });
            feedback.textContent = 'Con đã chọn đáp án, bấm “Kiểm tra đáp án” nhé.';
          });
          answers.appendChild(button);
        });

        check.addEventListener('click', () => {
          if (selected === null) {
            feedback.textContent = 'Con hãy chọn một đáp án trước nhé.';
            return;
          }
          submitted = true;
          answers.querySelectorAll<HTMLButtonElement>('.im26-home__answer').forEach((btn, idx) => {
            btn.disabled = true;
            if (idx === challenge.correct) btn.classList.add('is-right');
            if (idx === selected && idx !== challenge.correct) btn.classList.add('is-wrong');
          });
          feedback.textContent =
            selected === challenge.correct
              ? '🌟 Chính xác! Con làm rất tốt.'
              : `Chưa đúng rồi. Đáp án đúng là ${challenge.options[challenge.correct]}.`;
        });
      }
    }

    // 6. Post TOC toggle ([data-post-toc])
    const postToc = document.querySelector<HTMLElement>('[data-post-toc]');
    if (postToc && postToc.dataset.im26Enhanced !== '1') {
      postToc.dataset.im26Enhanced = '1';
      const tocButton = postToc.querySelector<HTMLButtonElement>('[data-post-toc-toggle]');
      const tocList = postToc.querySelector<HTMLElement>('[data-post-toc-list]');
      if (tocButton && tocList) {
        tocButton.addEventListener('click', () => {
          const willHide = !tocList.hidden;
          tocList.hidden = willHide;
          tocButton.textContent = willHide ? '[ hiện ]' : '[ ẩn ]';
        });
      }
    }
  }, [pathname]);

  return null;
}
