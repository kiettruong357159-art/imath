/**
 * giao-vien-thoi-gian.js — Giờ phút/ngày theo Việt Nam ở cả ba vai của khu lớp học.
 * Nạp trước core giáo viên, adapter học sinh và thẻ phụ huynh; không gọi API.
 * Không hiện giây vì hạn bài cần dễ đọc, theo giao việc tiện ích đợt 2 ngày 07/10.
 */
"use strict";
function imathTeacherDate(value) {
  if (!value) return "—";
  const raw = String(value).replace(" ", "T");
  const date = new Date(/[zZ]|[+-]\d\d:\d\d$/.test(raw) ? raw : raw + "+07:00");
  if (Number.isNaN(date.getTime())) return "—";
  const parts = Object.fromEntries(new Intl.DateTimeFormat("vi-VN", {
    timeZone: "Asia/Ho_Chi_Minh", hourCycle: "h23", hour: "2-digit", minute: "2-digit",
    day: "2-digit", month: "2-digit", year: "numeric",
  }).formatToParts(date).map((part) => [part.type, part.value]));
  return `${parts.hour}:${parts.minute} · ${parts.day}/${parts.month}/${parts.year}`;
}
