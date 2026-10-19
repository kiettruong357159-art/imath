/** Mức thi vào dùng component/CSS TIMO: dạng từ registry, đề từ catalog công khai. */
"use strict";
const entranceLevelView = { key: null, tab: "types", groups: null, loading: null };
const entranceTypeIcons = Object.freeze({
  motion:"clock", measure:"ruler", ratio:"number_bond", percent:"entrance_percent", work:"bar_join",
  logic:"pattern", geometry:"hsg_triangle", numbers:"calculator", place_value:"tens_bundle",
  decimal_remainders:"plus_minus", decimal_patterns:"fx", last_digit_cycles:"refresh", cryptarithms:"edit",
  position_groups:"level_bars", logic_sets:"entrance_sets", strategy_tournaments:"trophy",
  circles_shading:"entrance_circle", trapezoids_solids:"cube", data_charts:"bar_chart", experimental_probability:"hsg_combinatorics",
  thong_ke:"statistics", xac_suat:"hsg_combinatorics", can_thuc:"hsg_radical", phuong_trinh:"fx",
  bat_phuong_trinh:"hsg_signs", giai_he:"hsg_system", lap_phuong_trinh:"edit", lap_he:"bar_join",
  bac_hai_viete:"number_bond", ham_so_bac_nhat:"hsg_vector", ham_so_y_ax2:"hsg_parabola",
  he_thuc_luong:"ruler", luong_giac:"hsg_triangle", hinh_khoi:"cube", hinh_phang:"entrance_circle",
  tinh_chat_bdt:"balance", bat_dang_thuc:"hsg_inequality", toi_uu:"target", so_hoc:"calculator", to_hop:"pattern",
  thong_ke_xac_suat:"bar_chart", phuong_trinh_he_viete:"hsg_system", phuong_trinh_he_ham_so:"fx", hinh_khoi_hinh_phang:"cube",
});

function entranceLevelCatalogHtml(level) {
  const key = `${state.isGuest ? "guest" : state.user?.username}:${entranceFixed.exam}:${level.level_code}`;
  if (entranceLevelView.key !== key) {
    entranceLevelView.key = key; entranceLevelView.tab = "types"; entranceLevelView.groups = null;
  }
  if (!entranceLevelView.groups && entranceLevelView.loading !== key) {
    entranceLevelView.loading = key;
    api("entrance_practice_catalog", { exam_code: entranceFixed.exam, level_code: level.level_code }).then(result => {
      if (entranceLevelView.key !== key) return;
      entranceLevelView.groups = result.types;
      if (state.page === "entrance-fixed" && entranceFixed.level === level.level_code) entranceFixedRenderCatalog();
    }).catch(error => { if (entranceLevelView.key === key) { entranceLevelView.groups = [];
      if (state.page === "entrance-fixed") { entranceFixedRenderCatalog(); entranceFixedNotice(error.message); } } })
      .finally(() => { if (entranceLevelView.loading === key) entranceLevelView.loading = null; });
  }
  const types = entranceLevelView.tab === "types";
  const papers = entranceFixed.catalog.papers.filter(p => p.level_code === level.level_code && p.family !== "entrance_set");
  const groups = entranceLevelView.groups;
  const rows = types ? (groups || []).map(group => timoCatalogRow({
    iconName: entranceTypeIcons[group.code] || "book", name: efText(group.name_vi, group.name_en),
    details: `${group.question_count} ${efText("câu", "questions")}`,
    action: `data-et-type="${escapeHtml(group.code)}"`, label: efText("Làm bài", "Start"),
    status: efText("Chưa làm", "Not started"),
  })).join("") : papers.map(paper => {
    const recent = entranceFixedRecentFor(paper.id), active = recent?.status === "active";
    return timoCatalogRow({ iconName: "trophy", name: efName(paper),
      details: `${paper.problem_count} ${efText("bài", "problems")} · ${paper.duration_minutes} ${efText("phút", "minutes")}`,
      action: `data-ef-action="${active ? "resume" : "start"}" data-ef-mode="exam" data-ef-test="${escapeHtml(paper.id)}"
        ${active ? `data-ef-attempt="${escapeHtml(recent.id)}"` : ""}`,
      label: efText(active ? "Tiếp tục" : "Làm bài", active ? "Resume" : "Start"),
      status: efText(active ? "Đang làm dở" : recent ? "Đã làm" : "Chưa làm", active ? "In progress" : recent ? "Completed" : "Not started"),
    });
  }).join("");
  const body = `<div class="timo-panel-head"><h2>${efText(types ? "Chọn dạng em muốn luyện" : "Chọn đề để thử sức",
    types ? "Choose a topic" : "Choose a mock test")}</h2><span>${types ? groups?.length ?? "" : papers.length} ${efText(types ? "dạng" : "đề thi thử", types ? "topics" : "mock exams")}</span></div>
    <div class="timo-exam-list">${rows || `<p class="timo-note">${efText(types && groups === null ? "Đang tải dạng luyện…" : "Nội dung đang được chuẩn bị.", types && groups === null ? "Loading topics…" : "Content is being prepared.")}</p>`}</div>
    <p class="timo-note">${efText(types ? "Mỗi lượt tối đa 15 câu cũ, tiếp theo là bộ luyện cùng dạng và đúng mức. Không khóa theo tuần." : "Đề có bấm giờ. Chuẩn bị giấy nháp trước khi làm bài.",
      types ? "Up to 15 single questions per run, followed by multi-part sets at this level. No week locks." : "Timed exam. Have paper ready before you start.")}</p>`;
  return timoCatalogFrame({ id: "entrance-level", title: efName(level),
    subtitle: efText(level.audience_vi, level.audience_en), grade: efText("Vào lớp ", "Grade ") + (entranceFixed.exam === "vao_6" ? 6 : 10),
    backLabel: efText("Chọn mức khác", "Choose another level"), backAction: 'data-ef-action="levels"',
    selected: entranceLevelView.tab,
    tabs: [["types", "pattern", "Luyện theo dạng", "Practice by topic"], ["exams", "check_document", "Đề thi thử", "Mock exams"]]
      .map(([id, iconName, vi, en]) => ({ id, iconName, label: efText(vi,en), action: `data-el-tab="${id}"` })), body,
  });
}
document.addEventListener("click", event => {
  const tab = event.target.closest("[data-el-tab]");
  if (!tab || !["types", "exams"].includes(tab.dataset.elTab)) return;
  entranceLevelView.tab = tab.dataset.elTab; entranceFixedRenderCatalog();
});
