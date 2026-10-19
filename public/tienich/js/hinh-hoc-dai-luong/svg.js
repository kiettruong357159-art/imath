/**
 * Thư viện mô hình trực quan SVG (SVG Visual Generators)
 * Tiện ích: Hình học & Đại lượng trực quan - iMath
 */

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
}

function svgClock(hour, minute = 0, size = 220) {
    const r = 88;
    const cx = 110;
    const cy = 110;
    const hourAngle = ((hour % 12) + minute / 60) * 30;
    const minuteAngle = minute * 6;

    let numbers = '';
    for (let i = 1; i <= 12; i += 1) {
      const rad = (i * 30 * Math.PI) / 180;
      const nx = cx + (r - 20) * Math.sin(rad);
      const ny = cy - (r - 20) * Math.cos(rad) + 5;
      numbers += `<text x="${nx.toFixed(1)}" y="${ny.toFixed(1)}" text-anchor="middle" font-size="14" font-weight="bold" fill="#073b75">${i}</text>`;
    }

    let ticks = '';
    for (let m = 0; m < 60; m += 1) {
      const rad = (m * 6 * Math.PI) / 180;
      const is5 = m % 5 === 0;
      const inner = is5 ? r - 10 : r - 5;
      const x1 = cx + inner * Math.sin(rad);
      const y1 = cy - inner * Math.cos(rad);
      const x2 = cx + r * Math.sin(rad);
      const y2 = cy - r * Math.cos(rad);
      ticks += `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="${is5 ? '#073b75' : '#94a3b8'}" stroke-width="${is5 ? 2.5 : 1.2}"/>`;
    }

    const hRad = (hourAngle * Math.PI) / 180;
    const hx = cx + 48 * Math.sin(hRad);
    const hy = cy - 48 * Math.cos(hRad);

    const mRad = (minuteAngle * Math.PI) / 180;
    const mx = cx + 72 * Math.sin(mRad);
    const my = cy - 72 * Math.cos(mRad);

    const timeStr = `${hour} giờ` + (minute > 0 ? ` ${minute} phút` : ' đúng');

    return `<svg width="100%" height="220" viewBox="0 0 220 220" aria-label="Đồng hồ kim chỉ ${timeStr}" role="img">
      <circle cx="${cx}" cy="${cy}" r="${r + 10}" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="#ffffff" stroke="#073b75" stroke-width="3"/>
      ${ticks}
      ${numbers}
      <line x1="${cx}" y1="${cy}" x2="${hx.toFixed(1)}" y2="${hy.toFixed(1)}" stroke="#073b75" stroke-width="5" stroke-linecap="round"/>
      <line x1="${cx}" y1="${cy}" x2="${mx.toFixed(1)}" y2="${my.toFixed(1)}" stroke="#0284c7" stroke-width="3.2" stroke-linecap="round"/>
      <circle cx="${cx}" cy="${cy}" r="6" fill="#f59e0b"/>
      <circle cx="${cx}" cy="${cy}" r="2.5" fill="#ffffff"/>
    </svg>`;
  }

  function svgRuler(lengthCm = 10, objectCm = 6, offsetCm = 0, objectName = 'Bút chì') {
    const totalW = 420;
    const rulerY = 75;
    const startX = 40;
    const availW = totalW - startX - 45;
    const scale = availW / Math.max(1, lengthCm);

    let marks = '';
    for (let i = 0; i <= lengthCm; i += 1) {
      const x = startX + i * scale;
      marks += `<line x1="${x.toFixed(1)}" y1="${rulerY}" x2="${x.toFixed(1)}" y2="${rulerY + 20}" stroke="#073b75" stroke-width="2.5"/>`;
      marks += `<text x="${x.toFixed(1)}" y="${rulerY + 36}" text-anchor="middle" font-size="14" font-weight="bold" fill="#073b75">${i}</text>`;
      if (i < lengthCm) {
        marks += `<line x1="${(x + scale / 2).toFixed(1)}" y1="${rulerY}" x2="${(x + scale / 2).toFixed(1)}" y2="${rulerY + 13}" stroke="#475569" stroke-width="1.8"/>`;
        for (let mm = 1; mm < 10; mm += 1) {
          if (mm !== 5) {
            const mmX = x + (scale * mm) / 10;
            marks += `<line x1="${mmX.toFixed(1)}" y1="${rulerY}" x2="${mmX.toFixed(1)}" y2="${rulerY + 8}" stroke="#94a3b8" stroke-width="1.2"/>`;
          }
        }
      }
    }

    const objX1 = startX + offsetCm * scale;
    const objX2 = startX + (offsetCm + objectCm) * scale;
    const objW = objectCm * scale;
    const objY = 22;

    let objGraphic = '';
    if (objectName.includes('Bút') || objectName.includes('sáp')) {
      objGraphic = `
        <rect x="${objX1}" y="${objY}" width="${Math.max(10, objW - 20)}" height="20" rx="3" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2"/>
        <polygon points="${objX2 - 20},${objY} ${objX2},${objY + 10} ${objX2 - 20},${objY + 20}" fill="#fde68a" stroke="#d97706" stroke-width="1.8"/>
        <polygon points="${objX2 - 7},${objY + 6.5} ${objX2},${objY + 10} ${objX2 - 7},${objY + 13.5}" fill="#0f172a"/>
        <line x1="${objX1}" y1="${objY + 10}" x2="${objX2 - 20}" y2="${objY + 10}" stroke="#93c5fd" stroke-width="2"/>
        <text x="${objX1 + (objW - 20) / 2}" y="${objY + 15}" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffffff">${escapeHtml(objectName)}</text>
      `;
    } else {
      let fillColor = '#10b981';
      let strokeColor = '#047857';
      const lower = objectName.toLowerCase();
      if (lower.includes('đỏ')) {
        fillColor = '#ef4444';
        strokeColor = '#b91c1c';
      } else if (lower.includes('vàng')) {
        fillColor = '#f59e0b';
        strokeColor = '#d97706';
      } else if (lower.includes('xanh')) {
        fillColor = '#3b82f6';
        strokeColor = '#1d4ed8';
      } else if (lower.includes('tím')) {
        fillColor = '#8b5cf6';
        strokeColor = '#6d28d9';
      }
      objGraphic = `
        <rect x="${objX1}" y="${objY}" width="${objW}" height="22" rx="4" fill="${fillColor}" stroke="${strokeColor}" stroke-width="2"/>
        <text x="${objX1 + objW / 2}" y="${objY + 16}" text-anchor="middle" font-size="13" font-weight="bold" fill="#ffffff">${escapeHtml(objectName)}</text>
      `;
    }

    return `<svg width="100%" height="135" viewBox="0 0 ${totalW} 135" aria-label="Thước kẻ đo ${objectName}" role="img">
      <rect x="20" y="${rulerY}" width="${totalW - 35}" height="52" rx="6" fill="#fef9c3" stroke="#ca8a04" stroke-width="2.5"/>
      <text x="${totalW - 22}" y="${rulerY + 34}" font-size="14" font-weight="bold" fill="#854d0e">cm</text>
      ${marks}
      ${objGraphic}
      <line x1="${objX1}" y1="12" x2="${objX1}" y2="${rulerY}" stroke="#e11d48" stroke-width="2" stroke-dasharray="4 3"/>
      <circle cx="${objX1}" cy="${rulerY}" r="3" fill="#e11d48"/>
      <line x1="${objX2}" y1="12" x2="${objX2}" y2="${rulerY}" stroke="#e11d48" stroke-width="2" stroke-dasharray="4 3"/>
      <circle cx="${objX2}" cy="${rulerY}" r="3" fill="#e11d48"/>
    </svg>`;
  }

  function svgBalance(leftWeight, rightWeight, leftItem = 'Vật A', rightItem = 'Quả cân', scale = 'kg') {
    const tilt = leftWeight === rightWeight ? 0 : (leftWeight > rightWeight ? -7 : 7);
    const leftY = 115 - tilt * 2.5;
    const rightY = 115 + tilt * 2.5;

    return `<svg width="100%" height="175" viewBox="0 0 380 175" aria-label="Cân đĩa thăng bằng" role="img">
      <rect width="380" height="175" fill="#f8fafc" rx="8"/>
      <rect x="130" y="145" width="120" height="20" rx="4" fill="#334155" stroke="#1e293b" stroke-width="2"/>
      <polygon points="190,55 178,145 202,145" fill="#64748b" stroke="#334155" stroke-width="2"/>
      <g transform="rotate(${tilt}, 190, 55)">
        <line x1="60" y1="55" x2="320" y2="55" stroke="#073b75" stroke-width="5" stroke-linecap="round"/>
        <circle cx="190" cy="55" r="7" fill="#f59e0b" stroke="#b45309" stroke-width="2"/>
        <line x1="60" y1="55" x2="60" y2="85" stroke="#475569" stroke-width="2"/>
        <line x1="320" y1="55" x2="320" y2="85" stroke="#475569" stroke-width="2"/>
      </g>
      <ellipse cx="60" cy="${leftY}" rx="45" ry="10" fill="#e2e8f0" stroke="#475569" stroke-width="2"/>
      <rect x="35" y="${leftY - 40}" width="50" height="40" rx="6" fill="#38bdf8" stroke="#0284c7" stroke-width="2.5"/>
      <text x="60" y="${leftY - 15}" text-anchor="middle" font-size="13" font-weight="bold" fill="#0c4a6e">${escapeHtml(leftItem)}</text>
      <ellipse cx="320" cy="${rightY}" rx="45" ry="10" fill="#e2e8f0" stroke="#475569" stroke-width="2"/>
      <rect x="295" y="${rightY - 40}" width="50" height="40" rx="5" fill="#f59e0b" stroke="#b45309" stroke-width="2.5"/>
      <text x="320" y="${rightY - 15}" text-anchor="middle" font-size="14" font-weight="bold" fill="#ffffff">${rightWeight} ${scale}</text>
      <line x1="190" y1="55" x2="${(190 - tilt * 2).toFixed(1)}" y2="28" stroke="#dc2626" stroke-width="2.5"/>
      <circle cx="190" cy="28" r="3" fill="#dc2626"/>
      <text x="190" y="20" text-anchor="middle" font-size="13" font-weight="bold" fill="#073b75">${leftWeight === rightWeight ? 'Cân thăng bằng (=)' : 'Chênh lệch'}</text>
    </svg>`;
  }

  function svgBeaker(maxMl = 1000, currentMl = 500, itemLabel = 'Nước', showValue = false) {
    const h = 140;
    const beakerW = 95;
    const startX = 85;
    const fillH = Math.min(h, (currentMl / maxMl) * h);
    const startY = 175 - fillH;

    let marks = '';
    const step = maxMl >= 1000 ? 200 : (maxMl >= 500 ? 100 : 50);
    for (let m = step; m <= maxMl; m += step) {
      const my = 175 - (m / maxMl) * h;
      marks += `<line x1="${startX}" y1="${my}" x2="${startX + 16}" stroke="#073b75" stroke-width="2"/>`;
      marks += `<text x="${startX - 6}" y="${my + 5}" text-anchor="end" font-size="12" font-weight="bold" fill="#073b75">${m}</text>`;
    }

    const pointerX = startX + beakerW + 8;
    return `<svg width="100%" height="200" viewBox="0 0 280 200" aria-label="Bình chia độ ${currentMl} ml" role="img">
      <rect width="280" height="200" fill="#f8fafc" rx="8"/>
      <rect x="${startX}" y="35" width="${beakerW}" height="${h}" rx="4" fill="#ffffff" stroke="#073b75" stroke-width="3"/>
      <rect x="${startX + 2}" y="${startY}" width="${beakerW - 4}" height="${fillH}" fill="#38bdf8" opacity="0.85"/>
      <ellipse cx="${startX + beakerW / 2}" cy="${startY}" rx="${beakerW / 2 - 2}" ry="4" fill="#0284c7" opacity="0.7"/>
      <path d="M ${startX - 10},35 L ${startX},35 L ${startX},40 L ${startX - 10},35 Z" fill="#073b75"/>
      ${marks}
      <line x1="${pointerX}" y1="${startY}" x2="${pointerX + 22}" y2="${startY}" stroke="#ea580c" stroke-width="2.5"/>
      <polygon points="${pointerX},${startY} ${pointerX + 8},${startY - 4} ${pointerX + 8},${startY + 4}" fill="#ea580c"/>
      ${showValue ? `<text x="${pointerX + 26}" y="${startY + 5}" font-size="13" font-weight="bold" fill="#c2410c">${currentMl} ml</text>` : ''}
      <text x="${startX + beakerW / 2}" y="193" text-anchor="middle" font-size="13" font-weight="bold" fill="#073b75">Ca đong (ml)</text>
    </svg>`;
  }

  function svgThermometer(currentDeg = 37, minDeg = 0, maxDeg = 50, label = 'Nhiệt kế', showValue = false) {
    const range = maxDeg - minDeg;
    const h = 125;
    const fillH = Math.max(8, Math.min(h, ((currentDeg - minDeg) / range) * h));
    const startY = 150 - fillH;

    let marks = '';
    for (let d = minDeg; d <= maxDeg; d += 10) {
      const dy = 150 - ((d - minDeg) / range) * h;
      marks += `<line x1="110" y1="${dy}" x2="120" y2="${dy}" stroke="#073b75" stroke-width="2"/>`;
      marks += `<text x="102" y="${dy + 5}" text-anchor="end" font-size="13" font-weight="bold" fill="#073b75">${d}°</text>`;
      if (d < maxDeg) {
        const midY = dy - (h / (range / 10)) / 2;
        marks += `<line x1="114" y1="${midY}" x2="120" y2="${midY}" stroke="#64748b" stroke-width="1.5"/>`;
      }
    }

    return `<svg width="100%" height="210" viewBox="0 0 240 210" aria-label="Nhiệt kế đo ${currentDeg} độ C" role="img">
      <rect width="240" height="210" fill="#f8fafc" rx="8"/>
      <rect x="65" y="10" width="110" height="190" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="2"/>
      <rect x="120" y="25" width="16" height="${h}" rx="8" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.8"/>
      <circle cx="128" cy="162" r="18" fill="#ef4444" stroke="#dc2626" stroke-width="2"/>
      <rect x="124" y="${startY}" width="8" height="${fillH + 12}" fill="#ef4444"/>
      ${marks}
      <line x1="142" y1="${startY}" x2="162" y2="${startY}" stroke="#dc2626" stroke-width="2"/>
      <polygon points="142,${startY} 148,${startY - 3.5} 148,${startY + 3.5}" fill="#dc2626"/>
      ${showValue ? `<text x="166" y="${startY + 4}" font-size="13" font-weight="bold" fill="#b91c1c">${currentDeg}°C</text>` : ''}
      <text x="120" y="198" text-anchor="middle" font-size="13" font-weight="bold" fill="#073b75">Độ C (°C)</text>
    </svg>`;
  }

  function svgAngle(degrees = 60, arg2 = '', arg3 = 'O', arg4 = 'x', ray2 = 'y') {
    let label = '';
    let vertex = 'O';
    let ray1 = 'x';

    if (arg3 === 'right' || arg3 === 'acute' || arg3 === 'obtuse') {
      label = arg2 || '';
      vertex = 'O';
      ray1 = 'x';
      ray2 = 'y';
    } else if (arg2 && arg3 && arg4 && arg2.length <= 3 && arg3.length <= 3 && arg4.length <= 3) {
      ray1 = arg2;
      vertex = arg3;
      ray2 = arg4;
      label = '';
    } else {
      label = (arg2 && arg2 !== 'Góc nhọn' && arg2 !== 'Góc vuông' && arg2 !== 'Góc tù' && arg2 !== 'Góc bẹt') ? arg2 : '';
      vertex = arg3 || 'O';
      ray1 = arg4 || 'x';
      ray2 = ray2 || 'y';
    }

    const rad = (degrees * Math.PI) / 180;
    const cx = degrees === 180 ? 170 : (degrees > 90 ? 140 : 100);
    const cy = 130;
    const len = 80;
    const x2 = cx + len * Math.cos(rad);
    const y2 = cy - len * Math.sin(rad);

    let arc = '';
    if (degrees === 90) {
      arc = `<polyline points="${cx},${cy - 20} ${cx + 20},${cy - 20} ${cx + 20},${cy}" fill="none" stroke="#dc2626" stroke-width="2.2"/>
             <circle cx="${cx + 10}" cy="${cy - 10}" r="2" fill="#dc2626"/>`;
    } else {
      const arcRad = 30;
      const ax = cx + arcRad * Math.cos(rad);
      const ay = cy - arcRad * Math.sin(rad);
      const largeArc = degrees > 180 ? 1 : 0;
      arc = `<path d="M ${cx + arcRad} ${cy} A ${arcRad} ${arcRad} 0 ${largeArc} 0 ${ax.toFixed(1)} ${ay.toFixed(1)}" fill="none" stroke="#0284c7" stroke-width="2.5"/>`;
    }

    const r2LabelX = (x2 + 18 * Math.cos(rad)).toFixed(1);
    const r2LabelY = (y2 - 18 * Math.sin(rad) + (degrees === 90 ? -6 : 4)).toFixed(1);

    return `<svg width="100%" height="185" viewBox="0 0 350 185" aria-label="Góc ${degrees} độ" role="img">
      <rect width="350" height="185" fill="#f8fafc" rx="8"/>
      <defs>
        <marker id="arrow-navy" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#073b75"/>
        </marker>
      </defs>
      <line x1="${cx}" y1="${cy}" x2="${cx + len + 18}" y2="${cy}" stroke="#073b75" stroke-width="3" marker-end="url(#arrow-navy)"/>
      <line x1="${cx}" y1="${cy}" x2="${(x2 + 16 * Math.cos(rad)).toFixed(1)}" y2="${(y2 - 16 * Math.sin(rad)).toFixed(1)}" stroke="#073b75" stroke-width="3" marker-end="url(#arrow-navy)"/>
      <circle cx="${cx}" cy="${cy}" r="4.5" fill="#073b75"/>
      ${arc}
      <text x="${cx - 15}" y="${cy + 20}" font-size="15" font-weight="bold" fill="#073b75">${vertex}</text>
      <text x="${cx + len + 25}" y="${cy + 5}" font-size="15" font-weight="bold" fill="#073b75">${ray1}</text>
      <text x="${r2LabelX}" y="${r2LabelY}" font-size="15" font-weight="bold" fill="#073b75">${ray2}</text>
      <text x="${degrees === 90 ? cx + 32 : (degrees > 90 ? cx + 25 : cx + 45)}" y="${degrees === 90 ? cy - 28 : cy - 35}" font-size="14" font-weight="bold" fill="#0284c7">${degrees}°</text>
      ${label ? `<text x="175" y="172" text-anchor="middle" font-size="13" font-weight="bold" fill="#475569">${escapeHtml(label)}</text>` : ''}
    </svg>`;
  }

  function svgProtractor(angle = 70, showAngleText = false) {
    const cx = 190;
    const cy = 150;
    const r = 125;
    const rad = (angle * Math.PI) / 180;
    const x2 = cx + (r + 15) * Math.cos(rad);
    const y2 = cy - (r + 15) * Math.sin(rad);

    let marks = '';
    for (let a = 0; a <= 180; a += 10) {
      const ar = (a * Math.PI) / 180;
      const is30 = a % 30 === 0;
      const inner = is30 ? r - 18 : (a % 10 === 0 ? r - 12 : r - 7);
      const x1 = cx + inner * Math.cos(ar);
      const y1 = cy - inner * Math.sin(ar);
      const px = cx + r * Math.cos(ar);
      const py = cy - r * Math.sin(ar);
      marks += `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${px.toFixed(1)}" y2="${py.toFixed(1)}" stroke="#073b75" stroke-width="${is30 ? 2 : 1}"/>`;
      if (a % 20 === 0) {
        const tx = cx + (r - 28) * Math.cos(ar);
        const ty = cy - (r - 28) * Math.sin(ar) + 4;
        marks += `<text x="${tx.toFixed(1)}" y="${ty.toFixed(1)}" text-anchor="middle" font-size="11" font-weight="bold" fill="#073b75">${a}</text>`;
      }
    }

    return `<svg width="100%" height="195" viewBox="0 0 380 195" aria-label="Thước đo độ ${angle} độ" role="img">
      <rect width="380" height="195" fill="#f8fafc" rx="8"/>
      <path d="M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy} Z" fill="#eff6ff" stroke="#0284c7" stroke-width="2.5"/>
      <path d="M ${cx - 45} ${cy} A 45 45 0 0 1 ${cx + 45} ${cy} Z" fill="#ffffff" stroke="#0284c7" stroke-width="1.8"/>
      <circle cx="${cx}" cy="${cy}" r="4" fill="#073b75"/>
      ${marks}
      <line x1="${cx}" y1="${cy}" x2="${cx + r + 20}" y2="${cy}" stroke="#073b75" stroke-width="3"/>
      <line x1="${cx}" y1="${cy}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="#dc2626" stroke-width="3"/>
      <path d="M ${cx + 35} ${cy} A 35 35 0 0 0 ${(cx + 35 * Math.cos(rad)).toFixed(1)} ${(cy - 35 * Math.sin(rad)).toFixed(1)}" fill="none" stroke="#dc2626" stroke-width="2.5"/>
      ${showAngleText ? `<text x="${(cx + 55 * Math.cos(rad / 2)).toFixed(1)}" y="${(cy - 55 * Math.sin(rad / 2)).toFixed(1)}" text-anchor="middle" font-size="15" font-weight="bold" fill="#dc2626">${angle}°</text>` : ''}
      <text x="190" y="182" text-anchor="middle" font-size="14" font-weight="bold" fill="#073b75">${showAngleText ? `Thước đo góc: ${angle}°` : 'Thước đo góc'}</text>
    </svg>`;
  }

  function svg2DShape(type, w = 120, h = 80, arg4 = '', arg5 = '') {
    const totalW = 380;
    const totalH = 190;
    let content = '';
    let label = (typeof arg4 === 'string' && isNaN(Number(arg4)) && arg4 !== 'm' && arg4 !== 'cm' && arg4 !== 'dm') ? arg4 : '';

    if (type === 'circle') {
      content = `
        <circle cx="190" cy="90" r="65" fill="#eff6ff" stroke="#0284c7" stroke-width="3"/>
        <circle cx="190" cy="90" r="4" fill="#073b75"/>
        <text x="178" y="85" font-size="15" font-weight="bold" fill="#073b75">O</text>
        <line x1="190" y1="90" x2="255" y2="90" stroke="#073b75" stroke-width="2.5"/>
        <circle cx="255" cy="90" r="3" fill="#073b75"/>
        <text x="262" y="95" font-size="15" font-weight="bold" fill="#073b75">A</text>
        <text x="220" y="82" text-anchor="middle" font-size="14" font-weight="bold" fill="#073b75">bán kính r</text>
      `;
    } else if (type === 'square') {
      content = `
        <rect x="135" y="30" width="110" height="110" rx="3" fill="#eff6ff" stroke="#073b75" stroke-width="3"/>
        <text x="120" y="25" font-size="15" font-weight="bold" fill="#073b75">A</text>
        <text x="250" y="25" font-size="15" font-weight="bold" fill="#073b75">B</text>
        <text x="250" y="155" font-size="15" font-weight="bold" fill="#073b75">C</text>
        <text x="120" y="155" font-size="15" font-weight="bold" fill="#073b75">D</text>
        <polyline points="135,42 147,42 147,30" fill="none" stroke="#073b75" stroke-width="1.5"/>
        <text x="190" y="22" text-anchor="middle" font-size="14" font-weight="bold" fill="#0284c7">Cạnh a = ${w} cm</text>
      `;
    } else if (type === 'rectangle') {
      content = `
        <rect x="85" y="40" width="180" height="95" rx="3" fill="#f0fdf4" stroke="#073b75" stroke-width="3"/>
        <text x="70" y="35" font-size="15" font-weight="bold" fill="#073b75">A</text>
        <text x="270" y="35" font-size="15" font-weight="bold" fill="#073b75">B</text>
        <text x="270" y="150" font-size="15" font-weight="bold" fill="#073b75">C</text>
        <text x="70" y="150" font-size="15" font-weight="bold" fill="#073b75">D</text>
        <polyline points="85,52 97,52 97,40" fill="none" stroke="#073b75" stroke-width="1.5"/>
        <text x="175" y="30" text-anchor="middle" font-size="14" font-weight="bold" fill="#0284c7">Dài a = ${w} cm</text>
        <text x="272" y="92" font-size="13" font-weight="bold" fill="#0284c7">Rộng ${h} cm</text>
      `;
    } else if (type === 'triangle') {
      content = `
        <polygon points="190,25 70,145 310,145" fill="#fef3c7" stroke="#073b75" stroke-width="3"/>
        <text x="190" y="18" text-anchor="middle" font-size="16" font-weight="bold" fill="#073b75">A</text>
        <text x="55" y="155" font-size="16" font-weight="bold" fill="#073b75">B</text>
        <text x="320" y="155" font-size="16" font-weight="bold" fill="#073b75">C</text>
        <line x1="190" y1="25" x2="190" y2="145" stroke="#dc2626" stroke-width="2" stroke-dasharray="4 3"/>
        <polyline points="190,133 202,133 202,145" fill="none" stroke="#dc2626" stroke-width="1.5"/>
        <text x="190" y="162" text-anchor="middle" font-size="14" font-weight="bold" fill="#dc2626">H</text>
        <text x="175" y="90" text-anchor="end" font-size="14" font-weight="bold" fill="#dc2626">h = ${h} cm</text>
        <text x="190" y="180" text-anchor="middle" font-size="14" font-weight="bold" fill="#0284c7">Đáy a = ${w} cm</text>
      `;
    } else if (type === 'parallelogram') {
      content = `
        <polygon points="120,40 280,40 230,140 70,140" fill="#fdf4ff" stroke="#073b75" stroke-width="3"/>
        <text x="105" y="35" font-size="15" font-weight="bold" fill="#073b75">A</text>
        <text x="285" y="35" font-size="15" font-weight="bold" fill="#073b75">B</text>
        <text x="235" y="155" font-size="15" font-weight="bold" fill="#073b75">C</text>
        <text x="55" y="155" font-size="15" font-weight="bold" fill="#073b75">D</text>
        <line x1="120" y1="40" x2="120" y2="140" stroke="#ea580c" stroke-width="2" stroke-dasharray="4 3"/>
        <polyline points="120,128 132,128 132,140" fill="none" stroke="#ea580c" stroke-width="1.5"/>
        <text x="120" y="155" text-anchor="middle" font-size="13" font-weight="bold" fill="#ea580c">H</text>
        <text x="110" y="95" text-anchor="end" font-size="13" font-weight="bold" fill="#ea580c">h = ${h} cm</text>
        <text x="160" y="162" text-anchor="middle" font-size="14" font-weight="bold" fill="#0284c7">Đáy a = ${w} cm</text>
      `;
    } else if (type === 'rhombus') {
      content = `
        <polygon points="190,25 310,95 190,165 70,95" fill="#fdf2f8" stroke="#073b75" stroke-width="3"/>
        <text x="190" y="16" text-anchor="middle" font-size="15" font-weight="bold" fill="#073b75">A</text>
        <text x="320" y="100" font-size="15" font-weight="bold" fill="#073b75">B</text>
        <text x="190" y="182" text-anchor="middle" font-size="15" font-weight="bold" fill="#073b75">C</text>
        <text x="55" y="100" font-size="15" font-weight="bold" fill="#073b75">D</text>
        <line x1="70" y1="95" x2="310" y2="95" stroke="#0284c7" stroke-width="2" stroke-dasharray="4 3"/>
        <line x1="190" y1="25" x2="190" y2="165" stroke="#0284c7" stroke-width="2" stroke-dasharray="4 3"/>
        <polyline points="190,83 202,83 202,95" fill="none" stroke="#0284c7" stroke-width="1.5"/>
        <text x="190" y="112" font-size="14" font-weight="bold" fill="#073b75">O</text>
        <text x="250" y="90" font-size="13" font-weight="bold" fill="#0284c7">d₁ = ${w} cm</text>
        <text x="200" y="60" font-size="13" font-weight="bold" fill="#0284c7">d₂ = ${h} cm</text>
      `;
    } else if (type === 'trapezoid') {
      const bottomBase = w;
      const topBase = h;
      const height = (typeof arg4 === 'number') ? arg4 : (typeof arg4 === 'string' && !isNaN(Number(arg4)) && arg4 !== '' ? Number(arg4) : 6);
      const unit = (typeof arg5 === 'string' && (arg5 === 'm' || arg5 === 'cm' || arg5 === 'dm' || arg5 === 'mm')) ? arg5 : (typeof arg4 === 'string' && (arg4 === 'm' || arg4 === 'cm' || arg4 === 'dm') ? arg4 : 'cm');
      label = (typeof arg5 === 'string' && arg5 !== 'm' && arg5 !== 'cm' && arg5 !== 'dm') ? arg5 : (typeof arg4 === 'string' && isNaN(Number(arg4)) && arg4 !== 'm' && arg4 !== 'cm' ? arg4 : '');
      content = `
        <polygon points="125,42 235,42 295,140 65,140" fill="#eff6ff" stroke="#073b75" stroke-width="3"/>
        <text x="110" y="38" font-size="15" font-weight="bold" fill="#073b75">A</text>
        <text x="240" y="38" font-size="15" font-weight="bold" fill="#073b75">B</text>
        <text x="300" y="152" font-size="15" font-weight="bold" fill="#073b75">C</text>
        <text x="50" y="152" font-size="15" font-weight="bold" fill="#073b75">D</text>
        <line x1="125" y1="42" x2="125" y2="140" stroke="#dc2626" stroke-width="2" stroke-dasharray="4 3"/>
        <polyline points="125,128 137,128 137,140" fill="none" stroke="#dc2626" stroke-width="1.5"/>
        <text x="125" y="155" text-anchor="middle" font-size="13" font-weight="bold" fill="#dc2626">H</text>
        <text x="115" y="95" text-anchor="end" font-size="13" font-weight="bold" fill="#dc2626">h = ${height} ${unit}</text>
        <text x="180" y="34" text-anchor="middle" font-size="13" font-weight="bold" fill="#073b75">Đáy bé a = ${topBase} ${unit}</text>
        <text x="180" y="162" text-anchor="middle" font-size="13" font-weight="bold" fill="#073b75">Đáy lớn b = ${bottomBase} ${unit}</text>
      `;
    }

    return `<svg width="100%" height="190" viewBox="0 0 ${totalW} ${totalH}" aria-label="${escapeHtml(label || type)}" role="img">
      <rect width="${totalW}" height="${totalH}" fill="#f8fafc" rx="8"/>
      ${content}
      ${label ? `<text x="190" y="182" text-anchor="middle" font-size="13" font-weight="bold" fill="#475569">${escapeHtml(label)}</text>` : ''}
    </svg>`;
  }

  function svgGridArea(rows = 3, cols = 4, filledCells = 0, cellSize = 28, label = '') {
    const startX = 100;
    const startY = 30;
    const gridW = cols * cellSize;
    const gridH = rows * cellSize;
    const totalW = Math.max(390, gridW + 130);
    const totalH = Math.max(180, gridH + 75);

    let cells = '';
    let count = 0;
    for (let r = 0; r < rows; r += 1) {
      for (let c = 0; c < cols; c += 1) {
        count += 1;
        const x = startX + c * cellSize;
        const y = startY + r * cellSize;
        const isFilled = count <= filledCells;
        cells += `<rect x="${x}" y="${y}" width="${cellSize}" height="${cellSize}" fill="${isFilled ? '#93c5fd' : '#ffffff'}" stroke="#073b75" stroke-width="1.8"/>`;
      }
    }

    return `<svg width="100%" height="${totalH}" viewBox="0 0 ${totalW} ${totalH}" aria-label="Lưới ô vuông diện tích" role="img">
      <rect width="${totalW}" height="${totalH}" fill="#f8fafc" rx="8"/>
      ${cells}
      <text x="${startX + gridW / 2}" y="20" text-anchor="middle" font-size="14" font-weight="bold" fill="#073b75">${cols} ô (${cols} cm)</text>
      <text x="${startX - 10}" y="${startY + gridH / 2 + 5}" text-anchor="end" font-size="14" font-weight="bold" fill="#073b75">${rows} ô (${rows} cm)</text>
      <text x="${totalW / 2}" y="${gridH + 58}" text-anchor="middle" font-size="13" font-weight="bold" fill="#0284c7">${escapeHtml(label || 'Lưới ô vuông (1 ô = 1 cm²)')}</text>
    </svg>`;
  }

  function svgSolidBox3D(type, a = 4, b = 3, c = 2, label = '') {
    const totalW = 380;
    const totalH = 200;
    let customLabel = label;
    if (typeof b === 'string' && (type === 'cube' || type === 'sphere' || type === 'cylinder')) {
      customLabel = b;
    }

    if (type === 'cube') {
      const footer = customLabel !== '' ? customLabel : `Cạnh a = ${a} cm`;
      return `<svg width="100%" height="200" viewBox="0 0 ${totalW} ${totalH}" aria-label="Khối lập phương cạnh ${a} cm" role="img">
        <rect width="${totalW}" height="${totalH}" fill="#f8fafc" rx="8"/>
        <polygon points="130,55 195,25 265,55 200,85" fill="#bae6fd" stroke="#073b75" stroke-width="2.5"/>
        <polygon points="130,55 200,85 200,150 130,120" fill="#38bdf8" stroke="#073b75" stroke-width="2.5"/>
        <polygon points="200,85 265,55 265,120 200,150" fill="#0284c7" stroke="#073b75" stroke-width="2.5"/>
        <line x1="130" y1="120" x2="195" y2="90" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="4 3"/>
        <line x1="195" y1="25" x2="195" y2="90" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="4 3"/>
        <line x1="195" y1="90" x2="265" y2="120" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="4 3"/>
        <line x1="285" y1="55" x2="285" y2="120" stroke="#073b75" stroke-width="1.8"/>
        <line x1="280" y1="55" x2="290" y2="55" stroke="#073b75" stroke-width="1.8"/>
        <line x1="280" y1="120" x2="290" y2="120" stroke="#073b75" stroke-width="1.8"/>
        <text x="296" y="92" font-size="15" font-weight="bold" fill="#073b75">a = ${a} cm</text>
        ${footer !== false && footer !== 'none' ? `<text x="190" y="182" text-anchor="middle" font-size="14" font-weight="bold" fill="#073b75">${escapeHtml(footer)}</text>` : ''}
      </svg>`;
    }

    if (type === 'cylinder') {
      const footer = customLabel !== '' ? customLabel : `Bán kính r = ${a} cm, chiều cao h = ${c} cm`;
      return `<svg width="100%" height="200" viewBox="0 0 ${totalW} ${totalH}" aria-label="Khối trụ" role="img">
        <rect width="${totalW}" height="${totalH}" fill="#f8fafc" rx="8"/>
        <path d="M 130,50 L 130,135 A 55,18 0 0 0 240,135 L 240,50 Z" fill="#93c5fd" stroke="#073b75" stroke-width="2.5"/>
        <ellipse cx="185" cy="50" rx="55" ry="18" fill="#bfdbfe" stroke="#073b75" stroke-width="2.5"/>
        <path d="M 130,135 A 55,18 0 0 1 240,135" fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="4 3"/>
        <line x1="185" y1="50" x2="240" y2="50" stroke="#073b75" stroke-width="2"/>
        <circle cx="185" cy="50" r="3" fill="#073b75"/>
        <text x="210" y="42" font-size="14" font-weight="bold" fill="#073b75">r = ${a} cm</text>
        <line x1="260" y1="50" x2="260" y2="135" stroke="#dc2626" stroke-width="1.8"/>
        <line x1="255" y1="50" x2="265" y2="50" stroke="#dc2626" stroke-width="1.8"/>
        <line x1="255" y1="135" x2="265" y2="135" stroke="#dc2626" stroke-width="1.8"/>
        <text x="272" y="97" font-size="14" font-weight="bold" fill="#dc2626">h = ${c} cm</text>
        ${footer !== false && footer !== 'none' ? `<text x="190" y="182" text-anchor="middle" font-size="14" font-weight="bold" fill="#073b75">${escapeHtml(footer)}</text>` : ''}
      </svg>`;
    }

    if (type === 'sphere') {
      const cx = 190, cy = 85, r = 55;
      const footer = customLabel !== '' ? customLabel : `Bán kính r = ${a} cm`;
      return `<svg width="100%" height="200" viewBox="0 0 ${totalW} ${totalH}" aria-label="Khối cầu" role="img">
        <rect width="${totalW}" height="${totalH}" fill="#f8fafc" rx="8"/>
        <defs>
          <radialGradient id="sphereGrad" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stop-color="#bae6fd"/>
            <stop offset="60%" stop-color="#0284c7"/>
            <stop offset="100%" stop-color="#0369a1"/>
          </radialGradient>
        </defs>
        <circle cx="${cx}" cy="${cy}" r="${r}" fill="url(#sphereGrad)" stroke="#073b75" stroke-width="2.5"/>
        <ellipse cx="${cx}" cy="${cy}" rx="${r}" ry="16" fill="none" stroke="#e0f2fe" stroke-width="1.8" stroke-dasharray="4 3"/>
        <line x1="${cx}" y1="${cy}" x2="${cx + r}" y2="${cy}" stroke="#ffffff" stroke-width="2.5"/>
        <circle cx="${cx}" cy="${cy}" r="3.5" fill="#ffffff"/>
        <circle cx="${cx + r}" cy="${cy}" r="3" fill="#ffffff"/>
        <text x="${cx + r / 2}" y="${cy - 8}" text-anchor="middle" font-size="14" font-weight="bold" fill="#ffffff">r = ${a} cm</text>
        ${footer !== false && footer !== 'none' ? `<text x="190" y="182" text-anchor="middle" font-size="14" font-weight="bold" fill="#073b75">${escapeHtml(footer)}</text>` : ''}
      </svg>`;
    }

    const footer = customLabel !== '' ? customLabel : `Kích thước: dài ${a} cm, rộng ${b} cm, cao ${c} cm`;
    return `<svg width="100%" height="200" viewBox="0 0 ${totalW} ${totalH}" aria-label="Hình hộp chữ nhật" role="img">
      <rect width="${totalW}" height="${totalH}" fill="#f8fafc" rx="8"/>
      <polygon points="105,55 175,20 295,20 225,55" fill="#bae6fd" stroke="#073b75" stroke-width="2.5"/>
      <polygon points="105,55 225,55 225,135 105,135" fill="#38bdf8" stroke="#073b75" stroke-width="2.5"/>
      <polygon points="225,55 295,20 295,100 225,135" fill="#0284c7" stroke="#073b75" stroke-width="2.5"/>
      <line x1="105" y1="135" x2="175" y2="100" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="4 3"/>
      <line x1="175" y1="20" x2="175" y2="100" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="4 3"/>
      <line x1="175" y1="100" x2="295" y2="100" stroke="#94a3b8" stroke-width="1.8" stroke-dasharray="4 3"/>
      <line x1="105" y1="150" x2="225" y2="150" stroke="#073b75" stroke-width="1.8"/>
      <line x1="105" y1="145" x2="105" y2="155" stroke="#073b75" stroke-width="1.8"/>
      <line x1="225" y1="145" x2="225" y2="155" stroke="#073b75" stroke-width="1.8"/>
      <text x="165" y="166" text-anchor="middle" font-size="14" font-weight="bold" fill="#073b75">a = ${a} cm</text>
      <line x1="87" y1="55" x2="87" y2="135" stroke="#dc2626" stroke-width="1.8"/>
      <line x1="82" y1="55" x2="92" y2="55" stroke="#dc2626" stroke-width="1.8"/>
      <line x1="82" y1="135" x2="92" y2="135" stroke="#dc2626" stroke-width="1.8"/>
      <text x="79" y="100" text-anchor="end" font-size="14" font-weight="bold" fill="#dc2626">c = ${c} cm</text>
      <text x="270" y="58" font-size="14" font-weight="bold" fill="#0284c7">b = ${b} cm</text>
      ${footer !== false && footer !== 'none' ? `<text x="190" y="188" text-anchor="middle" font-size="13" font-weight="bold" fill="#475569">${escapeHtml(footer)}</text>` : ''}
    </svg>`;
  }

  function svgFractionBar(total = 5, shaded = 3, width = 380, height = 75, label = '') {
    const startX = 30;
    const startY = 25;
    const barW = 320;
    const barH = 45;
    const partW = barW / total;

    let parts = '';
    for (let i = 0; i < total; i += 1) {
      const x = startX + i * partW;
      const fill = i < shaded ? '#38bdf8' : '#ffffff';
      parts += `<rect x="${x}" y="${startY}" width="${partW}" height="${barH}" fill="${fill}" stroke="#073b75" stroke-width="2.5"/>`;
    }

    const subText = label || `Băng giấy chia làm ${total} phần bằng nhau`;

    return `<svg width="100%" height="110" viewBox="0 0 380 110" aria-label="Băng giấy phân số ${shaded}/${total}" role="img">
      <rect width="380" height="110" fill="#f8fafc" rx="8"/>
      ${parts}
      <text x="190" y="${startY + barH + 28}" text-anchor="middle" font-size="13" font-weight="bold" fill="#073b75">${escapeHtml(subText)}</text>
    </svg>`;
  }

  function svgFractionPie(total = 4, shaded = 1, size = 220, label = '') {
    const cx = 110;
    const cy = 100;
    const r = 75;
    let paths = '';

    for (let i = 0; i < total; i += 1) {
      const a1 = (i * 2 * Math.PI) / total - Math.PI / 2;
      const a2 = ((i + 1) * 2 * Math.PI) / total - Math.PI / 2;
      const x1 = cx + r * Math.cos(a1);
      const y1 = cy + r * Math.sin(a1);
      const x2 = cx + r * Math.cos(a2);
      const y2 = cy + r * Math.sin(a2);
      const largeArc = (a2 - a1) > Math.PI ? 1 : 0;
      const fill = i < shaded ? '#38bdf8' : '#ffffff';
      paths += `<path d="M ${cx} ${cy} L ${x1.toFixed(2)} ${y1.toFixed(2)} A ${r} ${r} 0 ${largeArc} 1 ${x2.toFixed(2)} ${y2.toFixed(2)} Z" fill="${fill}" stroke="#073b75" stroke-width="2.5"/>`;
    }

    return `<svg width="100%" height="220" viewBox="0 0 220 220" aria-label="Hình tròn phân số ${shaded}/${total}" role="img">
      <rect width="220" height="220" fill="#f8fafc" rx="8"/>
      <circle cx="${cx}" cy="${cy}" r="${r + 5}" fill="#e0f2fe" opacity="0.4"/>
      ${paths}
      <circle cx="${cx}" cy="${cy}" r="4" fill="#073b75"/>
      ${label ? `<text x="${cx}" y="200" text-anchor="middle" font-size="15" font-weight="bold" fill="#073b75">${escapeHtml(label)}</text>` : ''}
    </svg>`;
  }

  function svgPercentGrid(percent = 30, showPercent = false, label = '') {
    const cellSize = 18;
    const startX = 40;
    const startY = 25;
    let cells = '';
    let count = 0;

    for (let r = 0; r < 10; r += 1) {
      for (let c = 0; c < 10; c += 1) {
        count += 1;
        const x = startX + c * cellSize;
        const y = startY + r * cellSize;
        const isFilled = count <= percent;
        cells += `<rect x="${x}" y="${y}" width="${cellSize}" height="${cellSize}" fill="${isFilled ? '#ec4899' : '#ffffff'}" stroke="#9d174d" stroke-width="1"/>`;
      }
    }

    const footerText = label || (showPercent ? `${percent}% ( ${percent}/100 số ô )` : 'Lưới 100 ô vuông');

    return `<svg width="100%" height="255" viewBox="0 0 260 255" aria-label="Lưới 100 ô biểu diễn ${percent}%" role="img">
      <rect width="260" height="255" fill="#f8fafc" rx="8"/>
      ${cells}
      <text x="130" y="16" text-anchor="middle" font-size="12" font-weight="bold" fill="#64748b">10 hàng × 10 cột = 100 ô</text>
      <text x="130" y="${startY + 10 * cellSize + 28}" text-anchor="middle" font-size="14" font-weight="bold" fill="#9d174d">${escapeHtml(footerText)}</text>
    </svg>`;
  }

  function svgSpeedMotion(s = 120, v = 40, t = 3) {
    return `<svg width="100%" height="150" viewBox="0 0 420 150" aria-label="Sơ đồ chuyển động quãng đường ${s} km" role="img">
      <rect width="420" height="150" fill="#f8fafc" rx="8"/>
      <defs>
        <marker id="arrow-blue" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#0284c7"/>
        </marker>
      </defs>
      <line x1="45" y1="85" x2="375" y2="85" stroke="#073b75" stroke-width="4" stroke-linecap="round"/>
      <circle cx="45" cy="85" r="7" fill="#16a34a" stroke="#15803d" stroke-width="2"/>
      <text x="45" y="112" text-anchor="middle" font-size="16" font-weight="bold" fill="#15803d">A</text>
      <circle cx="375" cy="85" r="7" fill="#dc2626" stroke="#b91c1c" stroke-width="2"/>
      <text x="375" y="112" text-anchor="middle" font-size="16" font-weight="bold" fill="#b91c1c">B</text>
      <g transform="translate(170, 45)">
        <rect x="0" y="12" width="60" height="22" rx="4" fill="#3b82f6" stroke="#1d4ed8" stroke-width="1.8"/>
        <polygon points="12,12 22,0 42,0 52,12" fill="#93c5fd" stroke="#1d4ed8" stroke-width="1.5"/>
        <circle cx="15" cy="34" r="7" fill="#1e293b"/>
        <circle cx="15" cy="34" r="3" fill="#cbd5e1"/>
        <circle cx="45" cy="34" r="7" fill="#1e293b"/>
        <circle cx="45" cy="34" r="3" fill="#cbd5e1"/>
        <line x1="68" y1="20" x2="95" y2="20" stroke="#0284c7" stroke-width="2.5" marker-end="url(#arrow-blue)"/>
      </g>
      <text x="210" y="32" text-anchor="middle" font-size="15" font-weight="bold" fill="#0284c7">v = ${v} km/h</text>
      <text x="210" y="136" text-anchor="middle" font-size="14" font-weight="bold" fill="#073b75">Quãng đường s = ${s} km  ·  Thời gian t = ${t} giờ</text>
    </svg>`;
  }


  // ==========================================
  // QUESTION GENERATOR ENGINE & TOPIC BANK
  // ==========================================

  function normalizeSvg(s) {
    if (!s || typeof s !== 'string') return s;
    let str = s.trim();
    if (!str.startsWith('<svg')) return str;

    if (!str.includes('viewBox')) {
      const wMatch = str.match(/width=["']?(\d+)["']?/);
      const hMatch = str.match(/height=["']?(\d+)["']?/);
      if (wMatch && hMatch) {
        const w = wMatch[1];
        const h = hMatch[1];
        str = str.replace(/<svg([^>]*)>/, function(m, attrs) {
          let a = attrs.replace(/\s+width=["'][^"']*["']/g, '').replace(/\s+height=["'][^"']*["']/g, '');
          return '<svg' + a + ' viewBox="0 0 ' + w + ' ' + h + '" width="100%">';
        });
      }
    } else {
      str = str.replace(/<svg([^>]*)>/, function(m, attrs) {
        let a = attrs.replace(/\s+height=["'][^"']*["']/g, '');
        if (!a.includes('width="100%"')) {
          a = a.replace(/\s+width=["'][^"']*["']/g, '') + ' width="100%"';
        }
        return '<svg' + a + '>';
      });
    }

    str = str.replace(/<text([^>]*)>/g, function(m, attrs) {
      let updated = attrs;
      if (!updated.includes('font-family')) {
        updated += ' font-family="system-ui, -apple-system, sans-serif"';
      }
      if (!updated.includes('font-weight')) {
        updated += ' font-weight="bold"';
      }
      return '<text' + updated + '>';
    });

    return str;
  }

  function makeQ(title, prompt, svg, optA, optB, optC, optD, answer, solution) {
    const origOpts = [optA, optB, optC, optD];
    const origIdx = (answer === 'A' ? 0 : answer === 'B' ? 1 : answer === 'C' ? 2 : (answer === 'D' ? 3 : 0));
    const correctText = origOpts[origIdx];
    const distractors = origOpts.filter((_, idx) => idx !== origIdx);
    return {
      title,
      prompt,
      svg: normalizeSvg(svg),
      type: 'choice',
      correctText,
      distractors,
      solution
    };
  }

  const svgs = {
    svgClock,
    svgRuler,
    svgBalance,
    svgBeaker,
    svgThermometer,
    svgAngle,
    svgProtractor,
    svg2DShape,
    svgGridArea,
    svgSolidBox3D,
    svgFractionBar,
    svgFractionPie,
    svgPercentGrid,
    svgSpeedMotion
  };

  // Question generators shared by all grades. Runtime distribution: 3 Khá, 7 Giỏi, 5 Thi HSG.

export {
  escapeHtml,
  svgClock,
  svgRuler,
  svgBalance,
  svgBeaker,
  svgThermometer,
  svgAngle,
  svgProtractor,
  svg2DShape,
  svgGridArea,
  svgSolidBox3D,
  svgFractionBar,
  svgFractionPie,
  svgPercentGrid,
  svgSpeedMotion,
  normalizeSvg,
  makeQ,
  svgs
};

export default svgs;
