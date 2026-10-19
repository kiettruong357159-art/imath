/**
 * solution-view.js — Bản A: một bộ dựng lời giải và trợ giúp sau nộp cho mọi kho.
 * Chỉ định dạng payload đã được máy chủ cho phép; không tải/chấm/đổi nội dung.
 * Bài thường truyền khung Cú hiện có để giữ gợi ý, song sinh và nhật ký trợ giúp.
 */
(function (host) {
  "use strict";
  const mathSyntax = host.IMATH_MATH || (typeof module !== "undefined" ? require("../../js/math-render.js") : null);
  const text = value => Array.isArray(value) ? value.map(text).join("\n")
    : typeof value === "string" || typeof value === "number" ? String(value) : "";
  const safe = value => text(value).replace(/[&<>"']/g, char =>
    ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" })[char]);
  const words = {
    vi: { summary:"Tóm tắt", answer:"Đáp số", check:"Kiểm ngược", steps:"Các bước giải", step:"Bước",
      remember:"Em cần nhớ", wrong:"Vì sao sai", help:"Em vẫn chưa hiểu", owl:"Cú iMath", done:"Đã hiểu",
      ask:"Em chưa hiểu chỗ nào? Cú iMath chỉ cho em nhé!", de:"Em không hiểu đề hỏi gì",
      bat_dau:"Em không biết bắt đầu từ đâu", buoc:"Em không hiểu bước số…", vi_sao_sai:"Em không hiểu vì sao sai",
      pick:"Bấm vào bước em chưa hiểu ở trên.", unavailable:"Câu này chưa có phần trợ giúp này.",
      nhan_dien:"Nhận diện", huong_giai:"Hướng giải", trinh_bay:"Trình bày bài giải", goi_y:"Gợi ý",
      so_sanh_huong:"So sánh cách giải", cach_khac:"Cách khác", mo_rong:"Mở rộng", more:"Xem thêm lời giải" },
    en: { summary:"Summary", answer:"Answer", check:"Check", steps:"Solution steps", step:"Step",
      remember:"Remember", wrong:"Why it was wrong", help:"I still don't understand", owl:"iMath Owl", done:"I understand",
      ask:"Which part is confusing? iMath Owl will help you!", de:"I don't understand the question",
      bat_dau:"I don't know where to start", buoc:"I don't understand step…", vi_sao_sai:"I don't understand why it was wrong",
      pick:"Select the step you don't understand above.", unavailable:"This question has no help for this part yet.",
      nhan_dien:"Recognise", huong_giai:"Approach", trinh_bay:"Model working", goi_y:"Hint",
      so_sanh_huong:"Compare approaches", cach_khac:"Another approach", mo_rong:"Explore more", more:"More solution details" },
  };
  const labels = lang => words[lang === "vi" ? "vi" : "en"];
  /** Rubric có thể đã ghi Bước n; mỗi phần tử chỉ sinh một số và một ô tự chấm. */
  function numberedSteps(steps, lang) {
    return steps.map((value, index) => `${labels(lang).step} ${index + 1}: ${text(value).replace(/^(?:Bước|Step)\s+\d+\s*[:.]\s*/iu, "")}`).join("\n");
  }
  /** Không có nhãn vẫn giữ nguyên cả đoạn, kể cả phần trước Bước 1. */
  function parse(value) {
    const source = text(value).trim(), markers = [...source.matchAll(/(?:Bước|Step)\s+(\d+)\s*[:.]|(?:^|\n)[ \t]*(Tóm tắt|Summary|Đáp số|Answer|Final answer|Kiểm ngược|Kiểm tra|Thử lại|Check(?:\s*back)?|Verification|Verify|Try again)\s*:\s*/giu)];
    const out = { source, intro:"", steps:[], summary:[], answer:[], check:[] };
    if (!markers.length) { out.intro = source; return out; }
    out.intro = source.slice(0, markers[0].index).trim();
    for (let i = 0; i < markers.length; i++) {
      const marker = markers[i], body = source.slice(marker.index + marker[0].length, markers[i+1]?.index ?? source.length).trim();
      const label = marker[2] ? ["",marker[2]] : body.match(/^(Tóm tắt|Summary|Đáp số|Answer|Final answer|Kiểm ngược|Kiểm tra|Thử lại|Check(?:\s*back)?|Verification|Verify|Try again)\s*:\s*/iu);
      const kind = !label ? "steps" : /^(Tóm tắt|Summary)$/iu.test(label[1]) ? "summary"
        : /^(Đáp số|Answer|Final answer)$/iu.test(label[1]) ? "answer" : "check";
      out[kind].push({ sourceNumber:marker[1] ? Number(marker[1]) : null, text:label ? body.slice(label[0].length) : body,
        label:label?.[1] || "", original:body });
    }
    return out;
  }
  /** Không chèn thẻ vào giữa một biểu thức LaTeX; giữ nguyên dấu và chữ của nguồn. */
  function rich(value) {
    const number = "(?:\\d+(?:[.,]\\d+)?(?:[ \\u00a0]\\d{3})*|[a-zA-Z](?:_\\{?\\w+\\}?)?)";
    const expr = `${number}(?:\\s*[+−×÷:*/^\\-]\\s*${number})*`;
    const equality = new RegExp(`(?<![\\p{L}\\p{N}_])${expr}(?:\\s*=\\s*${expr})+`, "gu");
    return mathSyntax.split(text(value)).map(part => {
      const chunk = part.text;
      if (part.math) {
        return chunk.includes("=") ? `<strong class="sv-calculation">${safe(part.normalized)}</strong>` : safe(part.normalized);
      }
      let html = "", end = 0;
      for (const match of chunk.matchAll(equality)) {
        html += safe(chunk.slice(end,match.index)) + `<strong class="sv-calculation">${safe(match[0])}</strong>`;
        end = match.index + match[0].length;
      }
      return html + safe(chunk.slice(end));
    }).join("").replace(/\n/g,"<br>");
  }
  function bilingual(vi, en, lang) {
    if (lang !== "bi") return rich(lang === "en" ? en || vi : vi || en);
    if (!en || en === vi) return rich(vi || en);
    const toggle = host.IMATH_I18N?.style?.() === "2";
    return `<div class="bilingual-en">${rich(en)}</div>${vi ? `${toggle ? '<button type="button" class="bilingual-vi-toggle" data-bilingual-toggle="1">VI</button>' : ""}<div class="bilingual-vi" ${toggle ? "hidden" : ""}>${rich(vi)}</div>` : ""}`;
  }
  const field = (solution, key, lang) => text(solution[`${key}_${lang}`] ?? solution[key]);
  function wrongReason(mistakes, answer, optionText) {
    if (!mistakes || typeof mistakes !== "object") return "";
    const key=Array.isArray(answer) ? JSON.stringify(answer) : String(answer ?? "");
    const normalize=value=>String(value ?? "").normalize("NFKC").replace(/\s/g,"").replace(/,/g,".");
    const lookup = Object.prototype.hasOwnProperty.call(mistakes,key) ? key : Object.keys(mistakes).find(candidate =>
      normalize(candidate) === normalize(optionText ?? (Array.isArray(answer) && answer.length===1 ? answer[0] : key)));
    const value=lookup===undefined ? "" : mistakes[lookup];
    return typeof value === "string" ? value : "";
  }
  const fieldHtml = (solution, key, lang) => bilingual(field(solution,key,"vi"),field(solution,key,"en"),lang);
  /** Figures from submitted entrance solutions only. Render each SVG in an
   * isolated image document so marker IDs never collide between steps. */
  function diagrams(value) {
    if (typeof DOMParser === "undefined") return "";
    const values=typeof value==="string" ? [value] : Array.isArray(value) ? value : [];
    const allowed=new Set(["svg","g","defs","marker","path","line","polyline","polygon","rect","circle","ellipse","text","tspan","title","desc","clippath","mask","lineargradient","radialgradient","stop","use"]);
    let html="";
    for (const source of values) {
      if(typeof source!=="string" || /<!DOCTYPE|<!ENTITY|<\?/iu.test(source))continue;
      const doc=new DOMParser().parseFromString(`<solution-figures>${source}</solution-figures>`,"application/xml");
      if(doc.querySelector("parsererror"))continue;
      for(const svg of doc.documentElement.childNodes){
        if(svg.nodeType!==1)continue;
        if(svg.localName!=="svg" || svg.namespaceURI!=="http://www.w3.org/2000/svg" || svg.getAttribute("role")!=="img" || !svg.getAttribute("aria-label")?.trim())continue;
        const valid=[svg,...svg.querySelectorAll("*")].every(node=>allowed.has(node.localName.toLowerCase()) && node.namespaceURI===svg.namespaceURI && [...node.attributes].every(attr=>{
          const name=attr.name.toLowerCase(),v=attr.value.trim();
          if(name.startsWith("on") || ((name==="href" || name.endsWith(":href")) && v && !v.startsWith("#")) || (name==="style" && /url\s*\(/iu.test(v)))return false;
          if(!name.startsWith("xmlns") && /javascript:|data:|https?:|\/\//iu.test(v))return false;
          return !v.includes("\\") && !v.includes("/*") && [...v.matchAll(/url\s*\(([^)]*)\)/giu)].every(m=>/^#[A-Za-z_][A-Za-z0-9_.:-]*$/u.test(m[1].trim().replace(/^["']|["']$/gu,"")));
        }));
        if(valid)html+=`<figure class="sv-diagram"><img src="data:image/svg+xml;charset=utf-8,${encodeURIComponent(new XMLSerializer().serializeToString(svg))}" alt="${safe(svg.getAttribute("aria-label"))}"></figure>`;
      }
    }
    return html;
  }
  function model(options) {
    const solution = options.solution || {}, lang = options.lang || "vi";
    const vi = parse(options.explanationVi ?? (lang === "vi" || lang === "bi" ? options.explanation : "") ?? "");
    const en = parse(options.explanationEn ?? (lang === "en" || lang === "bi" ? options.explanation : "") ?? "");
    const primary = lang === "en" ? (en.source ? en : vi) : (vi.source ? vi : en);
    return {solution,lang,vi,en,primary};
  }
  /** Giữ bước EN/VI độc lập nếu hai bản không cùng cấu trúc; không ghép nhầm ý theo vị trí. */
  function matching(primary, other) {
    return primary.steps.length === other.steps.length && primary.steps.every((step,i) => step.sourceNumber === other.steps[i].sourceNumber)
      && ["summary","answer","check"].every(key => primary[key].length === other[key].length);
  }
  function timeline(m, options = {}) {
    const {vi,en,primary,lang,solution} = m, names = labels(lang);
    if (lang === "bi" && vi.source && en.source && !matching(vi,en)) {
      const toggle=host.IMATH_I18N?.style?.() === "2";
      return `<div class="bilingual-en">${timeline({...m,lang:"en",primary:en},options)}</div>${toggle ? '<button type="button" class="bilingual-vi-toggle" data-bilingual-toggle="1">VI</button>' : ""}<div class="bilingual-vi" ${toggle ? "hidden" : ""}>${timeline({...m,lang:"vi",primary:vi},options)}</div>`;
    }
    const rowText = (key,i) => bilingual(vi[key][i]?.text,en[key][i]?.text,lang);
    const summary = primary.summary.length ? primary.summary.map((row,i) =>
      `<div class="sv-summary"><strong>📋 ${safe(row.label || names.summary)}</strong><div>${rowText("summary",i)}${options.stepDiagrams?.[row.sourceNumber-1] || ""}${options.stepControls?.[row.sourceNumber-1] || ""}</div></div>`).join("")
      : fieldHtml(solution,"tom_tat",lang) ? `<div class="sv-summary"><strong>📋 ${names.summary}</strong><div>${fieldHtml(solution,"tom_tat",lang)}</div></div>` : "";
    const intro = bilingual(vi.intro,en.intro,lang);
    const steps = primary.steps.map((row,i) => {
      const selected = options.help?.open && options.help.reason === "buoc" && Number(options.help.stepNo) === row.sourceNumber
        && (!options.help.stepLang || options.help.stepLang === lang);
      const action = options.externalHelp ? `data-action="help-step" data-step-no="${row.sourceNumber}" data-step-language="${safe(lang)}"` : 'data-sv-action="step"';
      const picking = options.externalHelp && options.help?.open && options.help.reason === "buoc";
      const inline = `<div class="sv-step-help" ${selected ? "" : "hidden"}><strong class="sv-help-heading"><img src="giao-dien-moi-app/imath-owl-3d-2026.webp" alt="">${names.owl} · ${names.step} ${i+1}</strong><div>${rowText("steps",i)}</div>${fieldHtml(solution,"ghi_nho",lang) ? `<div class="sv-step-memory">📘 <b>${names.remember}:</b> ${fieldHtml(solution,"ghi_nho",lang)}</div>` : ""}</div>`;
      return `<div class="explanation-step sv-step ${selected ? "sv-selected" : ""}" data-sv-source-step="${row.sourceNumber}" style="--step-index:0"><span class="step-number">${i+1}</span><div class="explanation-step-body"><button type="button" class="sv-step-text" ${action} ${picking ? "" : "disabled"} aria-label="${names.step} ${i+1}" aria-pressed="${!!selected}">${rowText("steps",i)}</button>${options.stepDiagrams?.[row.sourceNumber-1] || ""}${options.stepControls?.[row.sourceNumber-1] || ""}${inline}</div></div>`;
    }).join("");
    const answer = primary.answer.length ? primary.answer.map((row,i) => `<div class="sv-answer"><span aria-hidden="true">✓</span><strong>${safe(row.label || names.answer)}</strong><div>${rowText("answer",i)}${options.stepDiagrams?.[row.sourceNumber-1] || ""}${options.stepControls?.[row.sourceNumber-1] || ""}</div></div>`).join("")
      : options.answer ? `<div class="sv-answer"><span aria-hidden="true">✓</span><strong>${names.answer}</strong><div>${rich(options.answer)}</div></div>` : "";
    return `${summary}${intro ? `<div class="explanation-plain">${intro}</div>` : ""}<div class="sv-timeline ${options.help?.open && options.help.reason === "buoc" ? "sv-picking" : ""}">${steps}</div>${answer}`;
  }
  function checks(m, options = {}) {
    const {vi,en,primary,lang,solution} = m, names=labels(lang);
    // Giữ ô tự đối chiếu của bước kiểm cũ; thu_lai riêng không được bị bước đó che mất.
    const unseen = (parsed, value) => parsed.check.some(row=>row.text.trim()===value.trim()) ? "" : value;
    const extra = (parsed, language) => unseen(parsed.source ? parsed : primary,field(solution,"thu_lai",language));
    if (lang === "bi" && vi.source && en.source && !matching(vi,en)) {
      const content=bilingual([vi.check.map(row=>`${row.label}: ${row.text}`).join("\n"),extra(vi,"vi")].filter(Boolean).join("\n"),[en.check.map(row=>`${row.label}: ${row.text}`).join("\n"),extra(en,"en")].filter(Boolean).join("\n"),lang);
      return content ? `<div class="sv-check"><span>✓</span><div><strong>${names.check}:</strong> ${content}</div></div>` : "";
    }
    const rows=primary.check.map((row,i)=>`<div class="sv-check"><span>✓</span><div><strong>${safe(row.label || names.check)}:</strong> ${bilingual(vi.check[i]?.text,en.check[i]?.text,lang)}${options.stepDiagrams?.[row.sourceNumber-1] || ""}${options.stepControls?.[row.sourceNumber-1] || ""}</div></div>`).join("");
    const selected=field(solution,"thu_lai",lang==="en" ? "en" : "vi") || field(solution,"thu_lai",lang==="en" ? "vi" : "en");
    const additional=lang==="bi" ? bilingual(extra(vi,"vi"),extra(en,"en"),lang) : rich(unseen(primary,selected));
    return rows + (additional ? `<div class="sv-check"><span>✓</span><div><strong>${names.check}:</strong> ${additional}</div></div>` : "");
  }
  const choiceIcons = { de:"🔎", bat_dau:"🧭", buoc:"✏️", vi_sao_sai:"❓" };
  function choices(lang, available, reason = "", external = false) {
    const names=labels(lang);
    return `<div class="owl-help-choices">${Object.keys(choiceIcons).map(key=>`<button type="button" class="outline ${reason===key ? "active" : ""}" ${external ? `data-action="help-reason" data-help-reason="${key}"` : `data-sv-action="reason" data-sv-reason="${key}"`} aria-pressed="${reason===key}" ${available[key] ? "" : "disabled"}><span class="sv-choice-icon" aria-hidden="true">${choiceIcons[key]}</span><span>${names[key]}</span></button>`).join("")}</div>`;
  }
  function localHelp(m, wrong) {
    const {solution,lang,primary}=m,names=labels(lang);
    const summary=fieldHtml(solution,"tom_tat",lang) || primary.summary.map(r=>rich(r.text)).join("<br>");
    const recognise=fieldHtml(solution,"nhan_dien",lang), remember=fieldHtml(solution,"ghi_nho",lang);
    const hints=Array.isArray(solution.goi_y) ? solution.goi_y.map(value=>rich(value)).join("<br>") : fieldHtml(solution,"huong_giai",lang);
    const start=hints || (primary.steps[0] ? rich(primary.steps[0].text) : "");
    const available={de:!!(summary||recognise),bat_dau:!!start,buoc:!!primary.steps.length,vi_sao_sai:!!wrong};
    const detail=(reason,html)=>`<div class="owl-help-detail" data-sv-detail="${reason}" hidden>${html || names.unavailable}</div>`;
    return `<button type="button" class="outline still-not-understood sv-help-trigger" data-sv-action="open" aria-expanded="false"><img src="giao-dien-moi-app/imath-owl-3d-2026.webp" alt="">${names.help}<span aria-hidden="true">⌄</span></button><section class="owl-help" aria-label="${names.owl}" hidden><div class="owl-help-head"><img src="giao-dien-moi-app/imath-owl-3d-2026.webp" alt="${names.owl}"><div><strong>${names.owl}</strong><p>${names.ask}</p></div><button type="button" class="outline sv-done" data-sv-action="close">✓ ${names.done}</button></div>${choices(lang,available)}${detail("de",`${summary}${recognise ? `<p><b>${names.nhan_dien}:</b> ${recognise}</p>` : ""}`)}${detail("bat_dau",`${start}${remember ? `<p><b>📘 ${names.remember}:</b> ${remember}</p>` : ""}`)}${detail("buoc",names.pick)}${detail("vi_sao_sai",wrong)}</section>`;
  }
  function render(options = {}) {
    const m=model(options), names=labels(m.lang), solution=m.solution;
    const wrong=bilingual(options.wrongVi ?? options.wrong,options.wrongEn ?? options.wrong,m.lang);
    const remember=fieldHtml(solution,"ghi_nho",m.lang);
    const help=options.externalHelp ? `<button type="button" class="outline still-not-understood sv-help-trigger" data-action="not-understood" data-question="${safe(options.questionId)}" aria-expanded="${!!options.help?.open}"><img src="giao-dien-moi-app/imath-owl-3d-2026.webp" alt="">${names.help}<span aria-hidden="true">⌄</span></button>${options.helpHtml || ""}` : options.helpEnabled===false ? "" : localHelp(m,wrong);
    const extras=["nhan_dien","huong_giai","trinh_bay","so_sanh_huong","cach_khac","mo_rong"].filter(key=>fieldHtml(solution,key,m.lang)).map(key=>`<section><h3>${names[key]}</h3><div>${fieldHtml(solution,key,m.lang)}</div></section>`).join("");
    return `<section class="solution-part sv-root math-content source-content" data-no-ui-translate ${options.externalHelp ? "" : "data-sv-local"}><div class="speech-heading"><h2>✏️ ${names.steps}</h2>${options.speechHtml || ""}</div>${timeline(m,options)}${help}${checks(m,options)}${remember || wrong ? `<div class="sv-info-grid">${remember ? `<section class="sv-info"><span aria-hidden="true">📘</span><div><h3>${names.remember}</h3><div>${remember}</div></div></section>` : ""}${wrong ? `<section class="sv-info sv-wrong"><span aria-hidden="true">💡</span><div><h3>${names.wrong}</h3><div>${wrong}</div></div></section>` : ""}</div>` : ""}${options.diagramHtml || ""}${extras ? `<details class="solution-extra sv-extra"><summary>${names.more}</summary>${extras}</details>` : ""}</section>`;
  }
  /** Cú cho màn kết quả/ý thi vào: trạng thái chỉ ở DOM, không sửa payload/chấm điểm. */
  function onClick(event) {
    const button=event.target.closest?.("[data-sv-action]"),root=button?.closest("[data-sv-local]");
    if (!root) return;
    const panel=root.querySelector(".owl-help"),trigger=root.querySelector(".sv-help-trigger");
    const action=button.dataset.svAction;
    if(action==="open" || action==="close") {
      panel.hidden=action==="close" || !panel.hidden;trigger.setAttribute("aria-expanded",String(!panel.hidden));
      if(panel.hidden) {root.querySelectorAll(".sv-timeline").forEach(n=>n.classList.remove("sv-picking"));root.querySelectorAll(".sv-step-text").forEach(n=>n.disabled=true);root.querySelectorAll(".sv-selected").forEach(n=>n.classList.remove("sv-selected"));root.querySelectorAll(".sv-step-help").forEach(n=>n.hidden=true);root.querySelectorAll("[aria-pressed=true]").forEach(n=>n.setAttribute("aria-pressed","false"));root.querySelectorAll(".owl-help-detail").forEach(n=>n.hidden=true);root.querySelectorAll(".owl-help-choices .active").forEach(n=>n.classList.remove("active"));}
      else panel.scrollIntoView({block:"nearest"});
    } else if(action==="reason") {
      const reason=button.dataset.svReason;
      root.querySelectorAll(".sv-timeline").forEach(n=>n.classList.toggle("sv-picking",reason==="buoc"));
      root.querySelectorAll(".sv-step-text").forEach(n=>n.disabled=reason!=="buoc");
      root.querySelectorAll(".owl-help-choices button").forEach(n=>{const active=n===button;n.classList.toggle("active",active);n.setAttribute("aria-pressed",String(active));});
      root.querySelectorAll(".owl-help-detail").forEach(n=>n.hidden=n.dataset.svDetail!==reason);
      root.querySelectorAll(".sv-step-help").forEach(n=>n.hidden=true);root.querySelectorAll(".sv-selected").forEach(n=>n.classList.remove("sv-selected"));
      root.querySelectorAll(".sv-step-text").forEach(n=>n.setAttribute("aria-pressed","false"));
    } else if(action==="step" && root.querySelector(".sv-timeline.sv-picking")) {
      root.querySelectorAll(".sv-step-help").forEach(n=>n.hidden=true);root.querySelectorAll(".sv-selected").forEach(n=>n.classList.remove("sv-selected"));
      root.querySelectorAll(".sv-step-text").forEach(n=>n.setAttribute("aria-pressed","false"));
      const step=button.closest(".sv-step");step.classList.add("sv-selected");button.setAttribute("aria-pressed","true");step.querySelector(".sv-step-help").hidden=false;step.scrollIntoView({block:"nearest"});
    }
  }
  host.IMATH_SOLUTION_VIEW={parse,rich,render,model,timeline,checks,choices,labels,wrongReason,numberedSteps,diagrams};
  if(typeof document!=="undefined")document.addEventListener("click",onClick);
  if(typeof module!=="undefined")module.exports=host.IMATH_SOLUTION_VIEW;
})(typeof window!=="undefined" ? window : globalThis);
