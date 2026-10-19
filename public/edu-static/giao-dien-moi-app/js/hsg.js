/**
 * hsg.js — Danh mục HSG và nhóm bộ luyện đọc từ catalog máy chủ, không giữ mã chuyên đề riêng.
 * Dùng component/CSS danh mục TIMO; mỗi test một dòng trong tab chuyên đề hoặc thi thử.
 * Không chia mức/bậc; renderer/action làm bài và thứ tự trong file giữ nguyên.
 */
"use strict";
const hsgExam = exam => /^hsg_(?:[1-9]|1[0-2])$/.test(exam || "");
const hsgGrade = exam => Number(exam.split("_")[1]);
const hsgView = { exam: null, tab: "subjects" };
const hsgDifficultyNames = new Map([
  ["độ khó đề trường", "School-level difficulty"], ["độ khó đề tỉnh", "Provincial-level difficulty"],
  ["độ khó đề quốc gia", "National-level difficulty"], ["độ khó olympic", "Olympiad-level difficulty"],
  ["độ khó olympiad", "Olympiad-level difficulty"], ["dễ", "Easy"], ["vừa", "Medium"], ["khó", "Hard"],
]);

/** Thẻ trong Luyện thi Toán, dùng số test công khai đã tải khi vào Luyện thêm. */
function hsgEntryCardHtml(compact = false) {
  const exam = `hsg_${state.grade}`, summary = entranceFixedEntries.get(exam);
  if (!summary || !(summary.subject_count + summary.exam_count)) return "";
  const text = (vi, en) => state.lang === "en" ? en : vi;
  const name = text("Học sinh giỏi", "Olympiad");
  const counts = `${summary.subject_count} ${text("chuyên đề", "topics")} · ${summary.exam_count} ${text("đề thi thử", "mock exams")}`;
  if (compact) return `<article class="catalog-card exam-card tone-violet" role="button" tabindex="0" data-no-ui-translate
    data-ef-open="${exam}" aria-label="${escapeHtml(name + " · " + counts)}">
    <span class="catalog-icon">${icon("graduation_cap")}</span><h3>${name}</h3>
    <p>${text(`Bồi dưỡng học sinh giỏi Toán lớp ${state.grade}`, `Grade ${state.grade} maths Olympiad preparation`)}</p>
    <p>${counts}</p><span class="catalog-pill">${text("Vào luyện", "Start practising")} ${icon("arrow_right")}</span></article>`;
  const subjects = (summary.subjects || []).map(subject => {
    const title = String(text(subject.vi,subject.en) || "")
      .replace(/\s*[–—-]\s*(?:Bài mẫu|Luyện tăng dần|Thử thách|Worked examples|Practice|Challenge).*$/iu, "");
    return state.lang === "en" ? window.IMATH_I18N.t(title,"en") : title;
  });
  const highlights = summary[state.lang === "en" ? "highlights_en" : "highlights_vi"] || [];
  const chips = highlights.length ? highlights : subjects;
  return `<article class="catalog-card math-competition-entry" role="button" tabindex="0" data-no-ui-translate
    data-ef-open="${exam}" aria-label="${escapeHtml(name + " · " + counts)}">
    <div class="math-competition-heading"><span class="catalog-icon">${icon("graduation_cap")}</span><h3>${name}</h3></div>
    <p class="math-competition-copy">${text(`Bồi dưỡng học sinh giỏi Toán lớp ${state.grade}`, `Grade ${state.grade} maths Olympiad preparation`)}</p>
    <div class="math-competition-chips">${chips.map(label=>`<span>${escapeHtml(label)}</span>`).join("")}</div>
    <div class="math-competition-footer"><span>${counts}</span><span class="catalog-pill">${text("Vào luyện", "Start practising")} ${icon("arrow_right")}</span></div></article>`;
}

/** Gộp hai loại đề công khai, vẫn phân biệt cửa start/get bằng family. */
async function entranceCombinedCatalog(exam, preview, includeHistory = true) {
  const [fixed, sets, practice] = await Promise.all([
    api("entrance_fixed_catalog", { exam_code: exam, preview }),
    api("entrance_set_catalog", { exam_code: exam, preview }),
    hsgExam(exam) || !includeHistory || state.isGuest ? Promise.resolve(null) : api("entrance_practice_history", {exam_code:exam}),
  ]);
  return { ...fixed, papers: [...fixed.papers, ...sets.papers], practice };
}

/** Đề thật giữ tên nguồn; đề tự soạn vẫn dùng tên chuyên đề/đề số. */
function hsgPaperName(object) {
  const id = object.test_id || object.id;
  const paper = entranceFixed.catalog?.papers.find(row => row.id === id) || object;
  const name = entranceFixed.lang === "en" ? paper.name_en || paper.name_vi || paper.name : paper.name_vi || paper.name;
  if (paper.de_that === true) return String(name || object.name || "");
  if (paper.family === "entrance_set" || object.run_kind === "set") {
    return String(name || paper.subject_title || "").replace(/\s*[–—-]\s*(?:Bài mẫu|Luyện tăng dần|Thử thách|Worked examples|Practice|Challenge).*$/iu, "");
  }
  const number = String(paper.name || object.name || "").match(/(?:Đề|Paper|Exam)\s*(\d+)/iu)?.[1];
  return efText("Đề thi thử", "Mock exam") + (number ? ` ${Number(number)}` : "");
}

/** Chỉ đọc phần trong ngoặc của tên đề; không suy độ khó từ mã mức. */
function hsgPaperDifficulty(paper) {
  const bracket = name => {
    const parts = [...String(name || "").matchAll(/[（(]([^()（）]+)[)）]/gu)].map(match => match[1].trim());
    return parts.find(part => /độ\s+khó|difficulty/i.test(part)) || parts.at(-1) || "";
  };
  const source = bracket(paper.name_vi || paper.name);
  if (entranceFixed.lang === "en") {
    const translated = bracket(paper.name_en) || source;
    return hsgDifficultyNames.get(translated.toLocaleLowerCase("vi"))
      || (translated ? translated[0].toUpperCase() + translated.slice(1) : "");
  }
  return source ? source[0].toUpperCase() + source.slice(1) : "";
}

/** Component TIMO dựng dòng; HSG chỉ cung cấp dữ liệu và action đúng family. */
function hsgCatalogRow(paper) {
  const practice = paper.family === "entrance_set";
  const recent = entranceFixedRecentFor(paper.id), active = recent?.status === "active";
  const difficulty = practice ? "" : hsgPaperDifficulty(paper);
  return timoCatalogRow({
    iconName: practice ? hsgSubjectIcon(paper) : "trophy", name: efName(paper),
    details: `${paper.problem_count} ${efText("bài", "problems")}${practice ? "" : ` · ${paper.duration_minutes} ${efText("phút", "minutes")}`}${difficulty ? ` · ${difficulty}` : ""}`,
    source: paper.de_that === true && paper.source_label ? efText("Nguồn: ", "Source: ") + paper.source_label : "",
    action: `data-ef-action="${active ? "resume" : "start"}" data-ef-test="${escapeHtml(paper.id)}"
      data-ef-mode="${practice ? "practice" : "exam"}" ${active ? `data-ef-attempt="${escapeHtml(recent.id)}"` : ""}`,
    label: efText("Làm bài", "Start"),
    status: efText(active ? "Đang làm dở" : recent ? "Đã làm" : "Chưa làm", active ? "In progress" : recent ? "Completed" : "Not started"),
  });
}

/** HSG mở thẳng chuyên đề; không lấy tên hoặc đối tượng của mức lên giao diện. */
function hsgCatalogHtml() {
  if (hsgView.exam !== entranceFixed.exam) { hsgView.exam = entranceFixed.exam; hsgView.tab = "subjects"; }
  const practice = hsgView.tab === "subjects";
  const papers = entranceFixed.catalog.papers.filter(p => (p.family === "entrance_set") === practice);
  const title = efText("Học sinh giỏi lớp ", "Grade ") + hsgGrade(entranceFixed.exam) + efText("", " Olympiad");
  const body = `<div class="timo-panel-head"><h2>${efText(practice ? "Chọn chuyên đề em muốn luyện" : "Chọn đề để thử sức",
    practice ? "Choose a topic" : "Choose a mock test")}</h2><span>${papers.length} ${efText(practice ? "chuyên đề" : "đề thi thử", practice ? "topics" : "mock exams")}</span></div>
    <div class="timo-exam-list">${papers.length ? papers.map(hsgCatalogRow).join("") : `<p class="timo-note">${efText("Đang chuẩn bị nội dung.", "Content is being prepared.")}</p>`}</div>
    <p class="timo-note">${efText(practice ? "Làm lần lượt các bài trong chuyên đề, xem gợi ý và lời giải khi cần." : "Đề có bấm giờ. Chuẩn bị giấy nháp trước khi làm bài.",
      practice ? "Work through each topic in order, with hints and solutions when needed." : "Timed exam. Have paper ready before you start.")}</p>`;
  return timoCatalogFrame({ id: "hsg", title,
    subtitle: efText("Luyện theo chuyên đề · Thử sức với đề thi thử", "Practice by topic · Try a mock exam"),
    grade: `${efText("Lớp", "Grade")} ${hsgGrade(entranceFixed.exam)}`,
    backLabel: efText("Luyện thêm", "Practice"), backAction: 'data-ef-action="exit"', selected: hsgView.tab,
    tabs: [["subjects", "pattern", "Luyện theo chuyên đề", "Practice by topic"], ["exams", "check_document", "Đề thi thử", "Mock exams"]]
      .map(([id, iconName, vi, en]) => ({ id, iconName, label: efText(vi, en), action: `data-ef-action="hsg-tab" data-ef-tab="${id}"` })), body,
  });
}
