/** Icon chuyên đề HSG: ưu tiên metadata, rồi từ khoá tên; dùng duy nhất bộ SVG chung. */
"use strict";
const hsgIconKeywords = Object.freeze([
  [/dau tam thuc|sign.*quadratic/, "hsg_signs"],
  [/he phuong trinh|system.*equation/, "hsg_system"],
  [/bat dang thuc|cuc tri|inequalit|extrem/, "hsg_inequality"],
  [/\bcan\b|radical|square root/, "hsg_radical"],
  [/toa do|oxy|coordinate/, "hsg_axes"],
  [/to hop|dem|xac suat|combinator|counting|probabil/, "hsg_combinatorics"],
  [/vect[oơ]|vector/, "hsg_vector"],
  [/tam giac|hinh hoc|triangle|geometry/, "hsg_triangle"],
  [/ham so bac hai|tam thuc|parabol|quadratic/, "hsg_parabola"],
  [/ham so|function/, "fx"],
  [/so hoc|chia het|arithmetic|number theory/, "number_bond"],
]);
function hsgSubjectIcon(paper) {
  const configured = paper.icon || paper.metadata_json?.icon;
  const explicit = typeof configured === "string"
    ? configured.match(/^(?:giao-dien-moi\/icon\/svg\/)?([a-z0-9_-]+)(?:\.svg)?$/i)?.[1] : null;
  if (explicit) return explicit;
  const name = [paper.name_vi, paper.name, paper.name_en, paper.subject_title].filter(Boolean).join(" ")
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/gi, "d").toLowerCase();
  return hsgIconKeywords.find(([pattern]) => pattern.test(name))?.[1] || "book";
}
