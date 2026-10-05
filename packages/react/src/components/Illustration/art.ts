/*
 * Empty state illustrations, drawn on a 160 by 120 grid.
 * Colours are slots, written as @ plus a letter, and become CSS variables:
 *   @B backdrop  @S surface  @O outline  @D detail  @H shade  @A accent  @K accent strong
 * The same source builds the Figma components, so keep shapes to plain SVG.
 */

const backdrop = '<circle cx="80" cy="60" r="50" fill="@B"/>';
const dot = (x: number, y: number, r: number, c: 'A' | 'K' | 'D' | 'H') => `<circle cx="${x}" cy="${y}" r="${r}" fill="@${c}"/>`;
const sparkle = (x: number, y: number, s: number, c: 'A' | 'K') =>
  `<path d="M${x} ${y - s}Q${x} ${y} ${x + s} ${y}Q${x} ${y} ${x} ${y + s}Q${x} ${y} ${x - s} ${y}Q${x} ${y} ${x} ${y - s}Z" fill="@${c}"/>`;
const bar = (x: number, y: number, w: number, h: number, c: 'D' | 'H' | 'A' | 'K') =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${Math.min(h, w) / 2}" fill="@${c}"/>`;

const star = (cx: number, cy: number, r: number, c: 'A' | 'K' | 'D' | 'H') => {
  const pts = Array.from({ length: 10 }, (_, i) => {
    const a = (Math.PI / 5) * i - Math.PI / 2;
    const rr = i % 2 ? r * 0.45 : r;
    return `${(cx + rr * Math.cos(a)).toFixed(2)} ${(cy + rr * Math.sin(a)).toFixed(2)}`;
  });
  return `<path d="M${pts.join('L')}Z" fill="@${c}" stroke="@${c}" stroke-width="1.5" stroke-linejoin="round"/>`;
};

function gear(cx: number, cy: number, r: number, teeth: number, body: string, hole: string, ring = '') {
  const t = r * 0.42;
  let s = '';
  for (let i = 0; i < teeth; i++) {
    const a = (360 / teeth) * i;
    s += `<rect x="${cx - t / 2}" y="${cy - r - t * 0.55}" width="${t}" height="${t * 1.2}" rx="${t * 0.25}" fill="${body}"${ring} transform="rotate(${a} ${cx} ${cy})"/>`;
  }
  return `${s}<circle cx="${cx}" cy="${cy}" r="${r}" fill="${body}"${ring}/><circle cx="${cx}" cy="${cy}" r="${r * 0.38}" fill="${hole}"/>`;
}

const ART = {
  /* ---------- First use ---------- */

  'no-projects': `${backdrop}
<path d="M40 40a6 6 0 0 1 6-6h20l8 8h40a6 6 0 0 1 6 6v46a6 6 0 0 1-6 6H46a6 6 0 0 1-6-6Z" fill="@H"/>
<rect x="52" y="44" width="56" height="34" rx="4" fill="@S" stroke="@O" stroke-width="1.5"/>
${bar(60, 52, 24, 5, 'H')}${bar(60, 62, 38, 4, 'D')}
<rect x="38" y="60" width="84" height="42" rx="6" fill="@S" stroke="@O" stroke-width="1.5"/>
${bar(50, 88, 20, 5, 'D')}
<circle cx="120" cy="96" r="15" fill="@A" stroke="@S" stroke-width="3"/>
<rect x="118.25" y="89" width="3.5" height="14" rx="1.75" fill="@K"/><rect x="113" y="94.25" width="14" height="3.5" rx="1.75" fill="@K"/>
${dot(30, 40, 3, 'A')}${dot(134, 38, 3.5, 'A')}${dot(28, 84, 2, 'D')}`,

  'no-files': `${backdrop}
<rect x="44" y="30" width="52" height="66" rx="6" fill="@S" stroke="@O" stroke-width="1.5" transform="rotate(-9 70 63)"/>
<path d="M66 28h32l14 14v52a6 6 0 0 1-6 6H66a6 6 0 0 1-6-6V34a6 6 0 0 1 6-6Z" fill="@S" stroke="@O" stroke-width="1.5"/>
<path d="M98 28v9a5 5 0 0 0 5 5h9Z" fill="@A" stroke="@O" stroke-width="1.5" stroke-linejoin="round"/>
${bar(70, 44, 18, 5, 'H')}${bar(70, 56, 32, 5, 'D')}${bar(70, 66, 28, 5, 'D')}${bar(70, 76, 32, 5, 'D')}${bar(70, 86, 20, 5, 'D')}
${sparkle(126, 32, 6, 'A')}${dot(32, 36, 3, 'A')}${dot(130, 88, 2, 'D')}`,

  'no-messages': `${backdrop}
<path d="M46 32h48a10 10 0 0 1 10 10v24a10 10 0 0 1-10 10H60l-12 10V76h-2a10 10 0 0 1-10-10V42a10 10 0 0 1 10-10Z" fill="@S" stroke="@O" stroke-width="1.5" stroke-linejoin="round"/>
${bar(48, 45, 30, 5, 'H')}${bar(48, 56, 44, 5, 'D')}
<path d="M93 64h24a9 9 0 0 1 9 9v12a9 9 0 0 1-9 9h-2v8l-10-8H93a9 9 0 0 1-9-9V73a9 9 0 0 1 9-9Z" fill="@A" stroke="@S" stroke-width="3" stroke-linejoin="round"/>
${dot(96, 79, 2.5, 'K')}${dot(105, 79, 2.5, 'K')}${dot(114, 79, 2.5, 'K')}
${dot(30, 36, 3, 'A')}${dot(134, 40, 2.5, 'D')}${dot(28, 90, 2, 'D')}`,

  'no-team': `${backdrop}
<circle cx="50" cy="54" r="10" fill="@D"/><path d="M34 92a16 15 0 0 1 32 0Z" fill="@D"/>
<circle cx="110" cy="54" r="10" fill="@D"/><path d="M94 92a16 15 0 0 1 32 0Z" fill="@D"/>
<path d="M57 98a23 21 0 0 1 46 0v1a3 3 0 0 1-3 3H60a3 3 0 0 1-3-3Z" fill="@S" stroke="@O" stroke-width="1.5"/>
<circle cx="80" cy="56" r="14" fill="@S" stroke="@O" stroke-width="1.5"/>
<circle cx="116" cy="30" r="11" fill="@A" stroke="@S" stroke-width="3"/>
<rect x="114.5" y="24" width="3" height="12" rx="1.5" fill="@K"/><rect x="110" y="28.5" width="12" height="3" rx="1.5" fill="@K"/>
${dot(32, 32, 3, 'A')}${dot(136, 70, 2, 'D')}${dot(26, 74, 2, 'D')}`,

  'no-contacts': `${backdrop}
<rect x="46" y="28" width="78" height="52" rx="8" fill="@S" stroke="@O" stroke-width="1.5" transform="rotate(7 85 54)"/>
<rect x="34" y="42" width="84" height="56" rx="8" fill="@S" stroke="@O" stroke-width="1.5"/>
<circle cx="57" cy="64" r="12" fill="@A"/>
<circle cx="57" cy="61" r="4.5" fill="@K"/><path d="M49 72.5a8 7 0 0 1 16 0Z" fill="@K"/>
${bar(76, 56, 30, 5, 'H')}${bar(76, 66, 34, 5, 'D')}${bar(76, 76, 22, 5, 'D')}${bar(46, 86, 60, 4, 'D')}
${dot(28, 36, 3, 'A')}${sparkle(134, 92, 5, 'A')}${dot(136, 34, 2, 'D')}`,

  'no-events': `${backdrop}
<rect x="40" y="32" width="80" height="68" rx="8" fill="@S" stroke="@O" stroke-width="1.5"/>
<path d="M40.75 40a7.25 7.25 0 0 1 7.25-7.25h64a7.25 7.25 0 0 1 7.25 7.25v8H40.75Z" fill="@D"/>
<rect x="56" y="25" width="5" height="14" rx="2.5" fill="@H"/><rect x="99" y="25" width="5" height="14" rx="2.5" fill="@H"/>
${[56, 69, 82].map((y) => [49, 62, 75, 88, 101].map((x) => (x === 75 && y === 69 ? '' : `<rect x="${x}" y="${y}" width="10" height="8" rx="2" fill="@D"/>`)).join('')).join('')}
<rect x="73" y="67" width="14" height="12" rx="3" fill="@A"/><circle cx="80" cy="73" r="2" fill="@K"/>
${dot(30, 40, 3, 'A')}${sparkle(132, 30, 5, 'A')}${dot(134, 90, 2, 'D')}`,

  'no-data': `${backdrop}
<rect x="36" y="28" width="88" height="70" rx="8" fill="@S" stroke="@O" stroke-width="1.5"/>
${bar(46, 38, 26, 5, 'H')}
${[[50, 18], [63, 30], [76, 24], [89, 38], [102, 14]]
  .map(([x, h]) => `<rect x="${x}" y="${86 - h!}" width="9" height="${h}" rx="2" fill="none" stroke="@H" stroke-width="1.5" stroke-dasharray="3 3"/>`)
  .join('')}
<rect x="76" y="76" width="9" height="10" rx="2" fill="@A"/>
<rect x="46" y="86.25" width="68" height="1.5" rx="0.75" fill="@D"/>
${dot(30, 34, 3, 'A')}${sparkle(134, 84, 5, 'A')}${dot(136, 32, 2, 'D')}`,

  'no-payments': `${backdrop}
<rect x="34" y="38" width="78" height="52" rx="8" fill="@S" stroke="@O" stroke-width="1.5"/>
<rect x="34.75" y="50" width="76.5" height="9" fill="@D"/>
<rect x="44" y="68" width="15" height="11" rx="2.5" fill="@A"/>
${bar(66, 70, 28, 4, 'D')}${bar(66, 78, 18, 4, 'D')}
<circle cx="122" cy="68" r="12" fill="@H" stroke="@S" stroke-width="3"/>
<circle cx="114" cy="84" r="16" fill="@A" stroke="@S" stroke-width="3"/>
<circle cx="114" cy="84" r="9.5" fill="none" stroke="@K" stroke-width="2"/>
${dot(30, 32, 3, 'A')}${dot(130, 34, 2.5, 'D')}${dot(26, 96, 2, 'D')}`,

  'no-integrations': `${backdrop}
<circle cx="76" cy="62" r="7" fill="@S" stroke="@O" stroke-width="1.5"/>
<rect x="34" y="44" width="38" height="36" rx="6" fill="@S" stroke="@O" stroke-width="1.5"/>
<rect x="90" y="44" width="38" height="36" rx="6" fill="@A"/>
<circle cx="90" cy="62" r="7.5" fill="@B"/>
${bar(42, 54, 20, 4, 'D')}${bar(42, 62, 14, 4, 'D')}${bar(102, 66, 18, 4, 'K')}
${dot(36, 34, 3, 'A')}${sparkle(122, 32, 5, 'A')}${dot(130, 94, 2, 'D')}${dot(32, 92, 2, 'D')}`,

  'no-history': `${backdrop}
<path d="M54 42a32 32 0 1 1-6 28" fill="none" stroke="@H" stroke-width="4" stroke-linecap="round"/>
<path d="M46 34l2 12 11-5Z" fill="@H" stroke="@H" stroke-width="2" stroke-linejoin="round"/>
<circle cx="80" cy="62" r="25" fill="@S" stroke="@O" stroke-width="1.5"/>
<rect x="78.5" y="45" width="3" height="18.5" rx="1.5" fill="@H"/>
<rect x="78.5" y="60.5" width="14" height="3" rx="1.5" fill="@H"/>
<circle cx="80" cy="62" r="5" fill="@A"/><circle cx="80" cy="62" r="2" fill="@K"/>
${dot(126, 36, 3, 'A')}${sparkle(124, 90, 5, 'A')}${dot(32, 92, 2, 'D')}`,

  /* ---------- Money ---------- */

  'no-transactions': `${backdrop}
<path d="M50 26h60v70l-6 4-6-4-6 4-6-4-6 4-6-4-6 4-6-4-6 4-6-4V26Z" fill="@S" stroke="@O" stroke-width="1.5" stroke-linejoin="round"/>
${bar(58, 36, 24, 5, 'H')}
${[50, 60, 70].map((y) => bar(58, y, 30, 4, 'D') + bar(94, y, 8, 4, 'D')).join('')}
${bar(58, 80, 44, 1.5, 'D')}${bar(58, 86, 20, 5, 'H')}${bar(90, 86, 12, 5, 'A')}
${sparkle(126, 36, 6, 'A')}${dot(34, 40, 3, 'A')}${dot(130, 84, 2, 'D')}`,

  'no-savings': `${backdrop}
<rect x="52" y="44" width="56" height="58" rx="14" fill="@S" stroke="@O" stroke-width="1.5"/>
<rect x="56" y="36" width="48" height="12" rx="4" fill="@H"/>
<rect x="72" y="40.5" width="16" height="3" rx="1.5" fill="@D"/>
<rect x="64" y="64" width="32" height="18" rx="5" fill="@D"/>
<circle cx="80" cy="22" r="9" fill="@A" stroke="@S" stroke-width="3"/>
<circle cx="80" cy="22" r="4.5" fill="none" stroke="@K" stroke-width="1.5"/>
${dot(36, 44, 3, 'A')}${sparkle(124, 50, 5, 'A')}${dot(126, 90, 2, 'D')}`,

  'no-cards': `${backdrop}
<rect x="48" y="30" width="58" height="34" rx="5" fill="@A"/>${bar(56, 38, 22, 4, 'K')}
<rect x="36" y="46" width="88" height="52" rx="10" fill="@S" stroke="@O" stroke-width="1.5"/>
<path d="M124 62h-22a8 8 0 0 0 0 16h22" fill="@D" stroke="@O" stroke-width="1.5"/>
<circle cx="104" cy="70" r="3" fill="@H"/>
${bar(46, 84, 30, 5, 'D')}
${dot(30, 36, 3, 'A')}${sparkle(132, 34, 5, 'A')}${dot(28, 86, 2, 'D')}`,

  'no-invoices': `${backdrop}
<rect x="46" y="24" width="58" height="76" rx="6" fill="@S" stroke="@O" stroke-width="1.5"/>
${bar(54, 34, 22, 5, 'H')}${bar(84, 34, 12, 5, 'D')}
${bar(54, 48, 42, 4, 'D')}${bar(54, 57, 34, 4, 'D')}${bar(54, 66, 38, 4, 'D')}${bar(54, 82, 18, 5, 'H')}
<circle cx="104" cy="84" r="16" fill="@A" stroke="@S" stroke-width="3"/>
<circle cx="104" cy="84" r="9.5" fill="none" stroke="@K" stroke-width="1.5" stroke-dasharray="3 2.5"/>
${dot(34, 36, 3, 'A')}${dot(130, 40, 2.5, 'D')}${sparkle(30, 84, 5, 'A')}`,

  /* ---------- Health ---------- */

  'no-appointments': `${backdrop}
<circle cx="76" cy="64" r="32" fill="@S" stroke="@O" stroke-width="1.5"/>
${[0, 90, 180, 270].map((a) => `<rect x="74.5" y="36" width="3" height="7" rx="1.5" fill="@D" transform="rotate(${a} 76 64)"/>`).join('')}
<rect x="74.5" y="44" width="3" height="21.5" rx="1.5" fill="@H"/>
<rect x="74.5" y="62.5" width="17" height="3" rx="1.5" fill="@H"/>
<circle cx="76" cy="64" r="3.5" fill="@H"/>
<circle cx="108" cy="36" r="12" fill="@A" stroke="@S" stroke-width="3"/>
<rect x="106.5" y="29.5" width="3" height="13" rx="1.5" fill="@K"/><rect x="101.5" y="34.5" width="13" height="3" rx="1.5" fill="@K"/>
${dot(34, 40, 3, 'A')}${dot(132, 82, 2, 'D')}${sparkle(126, 96, 5, 'A')}`,

  'no-prescriptions': `${backdrop}
<rect x="54" y="40" width="48" height="60" rx="8" fill="@S" stroke="@O" stroke-width="1.5"/>
<rect x="58" y="28" width="40" height="14" rx="3" fill="@H"/>
<rect x="54.75" y="56" width="46.5" height="26" fill="@A"/>
${bar(62, 62, 26, 4, 'K')}${bar(62, 71, 16, 4, 'K')}
<g transform="rotate(-35 120 86)"><rect x="106" y="80" width="28" height="12" rx="6" fill="@S" stroke="@O" stroke-width="1.5"/><path d="M120 80.75h8a5.25 5.25 0 0 1 0 10.5h-8Z" fill="@A"/></g>
${dot(34, 38, 3, 'A')}${sparkle(124, 40, 5, 'A')}${dot(30, 88, 2, 'D')}`,

  'no-health-records': `${backdrop}
<rect x="46" y="30" width="68" height="72" rx="8" fill="@S" stroke="@O" stroke-width="1.5"/>
<rect x="64" y="24" width="32" height="12" rx="4" fill="@H"/>
<rect x="54" y="46" width="52" height="30" rx="6" fill="@A"/>
<path d="M58 62h11l4-9 6 17 4-8h19" fill="none" stroke="@K" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
${bar(54, 84, 40, 4, 'D')}${bar(54, 92, 26, 4, 'D')}
${dot(32, 40, 3, 'A')}${sparkle(130, 36, 5, 'A')}${dot(132, 92, 2, 'D')}`,

  /* ---------- Learning ---------- */

  'no-courses': `${backdrop}
<path d="M80 56c-12-7-26-8-38-5v40c12-3 26-2 38 5Z" fill="@S" stroke="@O" stroke-width="1.5" stroke-linejoin="round"/>
<path d="M80 56c12-7 26-8 38-5v40c-12-3-26-2-38 5Z" fill="@S" stroke="@O" stroke-width="1.5" stroke-linejoin="round"/>
${bar(50, 62, 22, 3.5, 'D')}${bar(50, 70, 22, 3.5, 'D')}${bar(50, 78, 16, 3.5, 'D')}
${bar(88, 62, 22, 3.5, 'D')}${bar(88, 70, 22, 3.5, 'D')}${bar(88, 78, 16, 3.5, 'D')}
<path d="M66 37v8c8 5 20 5 28 0v-8l-14 6Z" fill="@A" stroke="@S" stroke-width="1.5" stroke-linejoin="round"/>
<path d="M80 18l28 11-28 11-28-11Z" fill="@A" stroke="@S" stroke-width="1.5" stroke-linejoin="round"/>
<path d="M106 30v12" fill="none" stroke="@K" stroke-width="2" stroke-linecap="round"/><circle cx="106" cy="44" r="2.5" fill="@K"/>
${dot(34, 44, 3, 'A')}${dot(130, 50, 2.5, 'D')}${sparkle(32, 92, 5, 'A')}`,

  'no-assignments': `${backdrop}
<rect x="46" y="30" width="68" height="72" rx="8" fill="@S" stroke="@O" stroke-width="1.5"/>
<rect x="64" y="24" width="32" height="12" rx="4" fill="@H"/>
<rect x="55" y="46" width="10" height="10" rx="2.5" fill="@A"/>
<path d="M57.5 51l2 2 3.5-4" fill="none" stroke="@K" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
${bar(71, 48.5, 32, 5, 'H')}
${[64, 82].map((y) => `<rect x="55" y="${y}" width="10" height="10" rx="2.5" fill="@S" stroke="@H" stroke-width="1.5"/>${bar(71, y + 2.5, 28, 5, 'D')}`).join('')}
${dot(32, 40, 3, 'A')}${sparkle(130, 38, 5, 'A')}${dot(132, 90, 2, 'D')}`,

  'no-certificates': `${backdrop}
<rect x="34" y="30" width="84" height="60" rx="6" fill="@S" stroke="@O" stroke-width="1.5"/>
<rect x="40" y="36" width="72" height="48" rx="3" fill="none" stroke="@D" stroke-width="1.5"/>
${bar(56, 46, 40, 5, 'H')}${bar(50, 57, 52, 4, 'D')}${bar(58, 65, 36, 4, 'D')}
<path d="M104 88l-4 17 6-3 3 6 3-17Z" fill="@A"/><path d="M116 88l4 17-6-3-3 6-3-17Z" fill="@A"/>
<circle cx="110" cy="84" r="12" fill="@A" stroke="@S" stroke-width="3"/>
<circle cx="110" cy="84" r="5.5" fill="@K"/>
${dot(28, 38, 3, 'A')}${sparkle(132, 30, 5, 'A')}${dot(30, 96, 2, 'D')}`,

  /* ---------- Play ---------- */

  'no-games': `${backdrop}
<path d="M54 46h52a18 18 0 0 1 17.6 21.8l-3.4 15.4a9.5 9.5 0 0 1-16.5 4.2L97 80H63l-6.7 7.4a9.5 9.5 0 0 1-16.5-4.2l-3.4-15.4A18 18 0 0 1 54 46Z" fill="@S" stroke="@O" stroke-width="1.5" stroke-linejoin="round"/>
<rect x="49" y="60" width="16" height="5" rx="2" fill="@H"/><rect x="54.5" y="54.5" width="5" height="16" rx="2" fill="@H"/>
<circle cx="104" cy="56" r="4" fill="@A"/><circle cx="112" cy="63" r="4" fill="@K"/><circle cx="104" cy="70" r="4" fill="@D"/><circle cx="96" cy="63" r="4" fill="@D"/>
${bar(74, 54, 12, 4, 'D')}
${dot(32, 36, 3, 'A')}${sparkle(124, 30, 6, 'A')}${dot(130, 96, 2, 'D')}`,

  'no-achievements': `${backdrop}
<path d="M60 36h-8a10 10 0 0 0 9 14" fill="none" stroke="@H" stroke-width="4" stroke-linecap="round"/>
<path d="M100 36h8a10 10 0 0 1-9 14" fill="none" stroke="@H" stroke-width="4" stroke-linecap="round"/>
<path d="M58 28h44v22a22 22 0 0 1-44 0Z" fill="@A"/>
${sparkle(80, 47, 7, 'K')}
<rect x="76" y="70" width="8" height="14" rx="2" fill="@H"/>
<rect x="62" y="82" width="36" height="14" rx="4" fill="@S" stroke="@O" stroke-width="1.5"/>
${bar(72, 87, 16, 4, 'D')}
${dot(34, 42, 3, 'A')}${sparkle(126, 30, 5, 'A')}${dot(130, 86, 2.5, 'D')}${dot(30, 86, 2, 'D')}`,

  /* ---------- Saved and media ---------- */

  'no-favorites': `${backdrop}
<rect x="40" y="30" width="80" height="64" rx="8" fill="@S" stroke="@O" stroke-width="1.5"/>
<path d="M80 82C66 73 58 65 58 56a11 11 0 0 1 22-4a11 11 0 0 1 22 4c0 9-8 17-22 26Z" fill="@A"/>
<path d="M68 52a5 5 0 0 1 6-3" fill="none" stroke="@S" stroke-width="2.5" stroke-linecap="round"/>
${dot(30, 40, 3, 'A')}${sparkle(130, 36, 6, 'A')}${sparkle(124, 98, 4, 'K')}${dot(30, 88, 2, 'D')}`,

  'no-bookmarks': `${backdrop}
<path d="M89 30h26a3 3 0 0 1 3 3v58l-16-10-16 10V33a3 3 0 0 1 3-3Z" fill="@D"/>
<path d="M50 24h32a3 3 0 0 1 3 3v72l-19-13-19 13V27a3 3 0 0 1 3-3Z" fill="@S" stroke="@O" stroke-width="1.5" stroke-linejoin="round"/>
<circle cx="66" cy="50" r="10" fill="@A"/>${sparkle(66, 50, 5, 'K')}
${bar(57, 68, 18, 4, 'D')}
${dot(34, 42, 3, 'A')}${dot(132, 96, 2, 'D')}${sparkle(130, 30, 5, 'A')}`,

  'no-photos': `${backdrop}
<rect x="44" y="28" width="80" height="60" rx="6" fill="@S" stroke="@O" stroke-width="1.5" transform="rotate(8 84 58)"/>
<rect x="34" y="36" width="84" height="62" rx="6" fill="@S" stroke="@O" stroke-width="1.5"/>
<rect x="41" y="43" width="70" height="48" rx="3" fill="@D"/>
<path d="M41 86l20-20 12 12 10-9 28 21a3 3 0 0 1-3 1H44a3 3 0 0 1-3-3Z" fill="@H"/>
<circle cx="96" cy="56" r="6" fill="@A"/>
${dot(30, 32, 3, 'A')}${sparkle(134, 96, 5, 'A')}${dot(136, 40, 2, 'D')}`,

  /* ---------- Shopping and places ---------- */

  'no-orders': `${backdrop}
<path d="M48 50l32 12v38l-32-12Z" fill="@S" stroke="@O" stroke-width="1.5" stroke-linejoin="round"/>
<path d="M80 62l32-12v38l-32 12Z" fill="@D" stroke="@O" stroke-width="1.5" stroke-linejoin="round"/>
<path d="M48 50l32-12 32 12-32 12Z" fill="@S" stroke="@O" stroke-width="1.5" stroke-linejoin="round"/>
<path d="M62 44.75l32-12 6 2.25-32 12Z" fill="@A"/>
<path d="M54 72l14 5.25v9l-14-5.25Z" fill="@A"/>
${dot(32, 40, 3, 'A')}${sparkle(128, 34, 6, 'A')}${dot(130, 92, 2, 'D')}`,

  'no-location': `${backdrop}
<path d="M36 44l28-8 32 8 28-8v56l-28 8-32-8-28 8Z" fill="@S" stroke="@O" stroke-width="1.5" stroke-linejoin="round"/>
<path d="M64 36v56M96 44v56" fill="none" stroke="@O" stroke-width="1.5"/>
<path d="M46 84c10-12 22-14 30-8s18 4 26-10" fill="none" stroke="@H" stroke-width="2" stroke-linecap="round" stroke-dasharray="3 4"/>
<path d="M102 24a13 13 0 0 1 13 13c0 10-13 24-13 24s-13-14-13-24a13 13 0 0 1 13-13Z" fill="@A" stroke="@S" stroke-width="2.5"/>
<circle cx="102" cy="37" r="4.5" fill="@K"/>
${dot(30, 36, 3, 'A')}${dot(134, 96, 2, 'D')}${sparkle(30, 98, 4, 'A')}`,

  'no-reviews': `${backdrop}
<rect x="34" y="36" width="92" height="56" rx="8" fill="@S" stroke="@O" stroke-width="1.5"/>
<circle cx="50" cy="52" r="7" fill="@D"/>${bar(62, 47, 34, 5, 'H')}${bar(62, 56, 22, 4, 'D')}
${[0, 1, 2, 3, 4].map((i) => star(50 + i * 15, 76, 6, i === 0 ? 'A' : 'D')).join('')}
${dot(28, 34, 3, 'A')}${sparkle(132, 30, 5, 'A')}${dot(134, 96, 2, 'D')}`,

  /* ---------- Search and filter ---------- */

  'no-results': `${backdrop}
<rect x="40" y="24" width="62" height="76" rx="8" fill="@S" stroke="@O" stroke-width="1.5"/>
${bar(50, 36, 28, 6, 'H')}${bar(50, 49, 42, 5, 'D')}${bar(50, 60, 34, 5, 'D')}${bar(50, 71, 38, 5, 'D')}
<line x1="117" y1="83" x2="129" y2="95" stroke="@H" stroke-width="9" stroke-linecap="round"/>
<circle cx="104" cy="70" r="17" fill="@S" stroke="@H" stroke-width="6"/>
<circle cx="104" cy="70" r="11" fill="@A"/>
<rect x="98" y="68.5" width="12" height="3" rx="1.5" fill="@K"/>
${dot(30, 34, 3.5, 'A')}${dot(132, 30, 2.5, 'D')}${dot(26, 88, 2, 'D')}`,

  'no-filter-matches': `${backdrop}
<path d="M44 32h66a4 4 0 0 1 3 6.6L90 64v22a3 3 0 0 1-1.7 2.7l-11 5.5A2 2 0 0 1 74.4 92.4V64L41 38.6A4 4 0 0 1 44 32Z" fill="@S" stroke="@O" stroke-width="1.5" stroke-linejoin="round"/>
${bar(52, 40, 50, 5, 'D')}
<rect x="100" y="70" width="34" height="13" rx="6.5" fill="@A"/><circle cx="108" cy="76.5" r="2.5" fill="@K"/>${bar(114, 74.5, 14, 4, 'K')}
<rect x="104" y="88" width="26" height="13" rx="6.5" fill="@D"/>
<rect x="22" y="62" width="28" height="13" rx="6.5" fill="@D"/>
${dot(30, 34, 3, 'A')}${dot(132, 34, 2.5, 'D')}${sparkle(36, 92, 5, 'A')}`,

  'nothing-selected': `${backdrop}
<rect x="38" y="30" width="70" height="52" rx="8" fill="@S" stroke="@H" stroke-width="1.5" stroke-dasharray="4 4"/>
${bar(48, 42, 26, 5, 'D')}${bar(48, 52, 40, 5, 'D')}${bar(48, 62, 32, 5, 'D')}
${[[38, 30], [108, 30], [38, 82], [108, 82]].map(([x, y]) => `<rect x="${x! - 3.5}" y="${y! - 3.5}" width="7" height="7" rx="2" fill="@S" stroke="@K" stroke-width="1.5"/>`).join('')}
<path d="M98 70v30l8-7.5 5.5 12 6-2.8-5.5-11.7H123Z" fill="@A" stroke="@K" stroke-width="1.5" stroke-linejoin="round"/>
${dot(30, 96, 3, 'A')}${dot(132, 36, 2.5, 'D')}${sparkle(130, 70, 5, 'A')}`,

  /* ---------- Cleared ---------- */

  'all-caught-up': `${backdrop}
<path d="M44 66l10-14h52l10 14" fill="none" stroke="@O" stroke-width="1.5" stroke-linejoin="round"/>
<rect x="40" y="66" width="80" height="34" rx="8" fill="@S" stroke="@O" stroke-width="1.5"/>
<path d="M40 74h22a4 4 0 0 1 4 4a14 7 0 0 0 28 0a4 4 0 0 1 4-4h22" fill="none" stroke="@O" stroke-width="1.5"/>
${bar(68, 86, 24, 5, 'D')}
<circle cx="80" cy="36" r="18" fill="@A" stroke="@S" stroke-width="3"/>
<path d="M72 36.5l5.5 5.5 10.5-11.5" fill="none" stroke="@K" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
${dot(50, 28, 3, 'A')}<rect x="106" y="22" width="7" height="7" rx="1.5" fill="@A" transform="rotate(20 109.5 25.5)"/>
${dot(116, 46, 2.5, 'D')}<rect x="40" y="44" width="6" height="6" rx="1.5" fill="@D" transform="rotate(-15 43 47)"/>${dot(132, 80, 2, 'D')}`,

  'no-notifications': `${backdrop}
<path d="M80 28a4 4 0 0 1 4 4v2.4A22 22 0 0 1 102 56v14l8 11a2 2 0 0 1-1.6 3.2H51.6A2 2 0 0 1 50 81l8-11V56a22 22 0 0 1 18-21.6V32a4 4 0 0 1 4-4Z" fill="@S" stroke="@O" stroke-width="1.5" stroke-linejoin="round"/>
<path d="M71 88a9 9 0 0 0 18 0Z" fill="@H"/>
${bar(66, 56, 28, 5, 'D')}
<circle cx="108" cy="36" r="11" fill="@A" stroke="@S" stroke-width="3"/>
<path d="M103.5 32h8l-8 8h8" fill="none" stroke="@K" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
${dot(36, 40, 3, 'A')}${dot(30, 86, 2, 'D')}${sparkle(130, 82, 5, 'A')}`,

  'empty-cart': `${backdrop}
<path d="M30 36h10a3 3 0 0 1 2.9 2.2L52 76h52" fill="none" stroke="@H" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M44 44h74a2 2 0 0 1 1.9 2.6l-7.4 22.8A4 4 0 0 1 108.7 72H53.5Z" fill="@S" stroke="@O" stroke-width="1.5" stroke-linejoin="round"/>
${[62, 76, 90, 104].map((x) => `<rect x="${x}" y="50" width="2.5" height="16" rx="1.25" fill="@D"/>`).join('')}
<circle cx="60" cy="88" r="7" fill="@A"/><circle cx="60" cy="88" r="2.5" fill="@K"/>
<circle cx="98" cy="88" r="7" fill="@A"/><circle cx="98" cy="88" r="2.5" fill="@K"/>
${sparkle(84, 28, 6, 'A')}${dot(132, 40, 2.5, 'D')}${dot(130, 92, 2, 'D')}`,

  'empty-trash': `${backdrop}
<rect x="70" y="30" width="20" height="10" rx="4" fill="none" stroke="@H" stroke-width="3"/>
<path d="M53 48h54l-5.2 47.4a6 6 0 0 1-6 5.6H64.2a6 6 0 0 1-6-5.6Z" fill="@S" stroke="@O" stroke-width="1.5" stroke-linejoin="round"/>
<rect x="46" y="38" width="68" height="9" rx="4.5" fill="@H"/>
${[66, 78, 90].map((x) => `<rect x="${x}" y="58" width="4" height="32" rx="2" fill="@D"/>`).join('')}
${sparkle(124, 36, 7, 'A')}${sparkle(132, 54, 4, 'K')}${sparkle(34, 76, 5, 'A')}${dot(32, 40, 2.5, 'D')}`,

  /* ---------- Problems ---------- */

  'error': `${backdrop}
<rect x="30" y="28" width="100" height="72" rx="8" fill="@S" stroke="@O" stroke-width="1.5"/>
<line x1="30.75" y1="42" x2="129.25" y2="42" stroke="@O" stroke-width="1.5"/>
${dot(40, 35, 2.5, 'D')}${dot(48, 35, 2.5, 'D')}${dot(56, 35, 2.5, 'D')}
<path d="M80 52l18 31H62Z" fill="@A" stroke="@A" stroke-width="7" stroke-linejoin="round"/>
<rect x="78.5" y="61" width="3" height="12" rx="1.5" fill="@K"/><circle cx="80" cy="78" r="2" fill="@K"/>
${dot(24, 36, 3, 'A')}${dot(138, 90, 2, 'D')}${sparkle(136, 30, 5, 'A')}`,

  'offline': `${backdrop}
<path d="M56 88a17 17 0 0 1-2.4-33.8A24 24 0 0 1 99 49a18 18 0 0 1 5 39Z" fill="@S" stroke="@O" stroke-width="1.5" stroke-linejoin="round"/>
${bar(62, 70, 24, 5, 'D')}${bar(62, 60, 14, 5, 'H')}
<line x1="52" y1="34" x2="110" y2="96" stroke="@S" stroke-width="10" stroke-linecap="round"/>
<line x1="52" y1="34" x2="110" y2="96" stroke="@K" stroke-width="4" stroke-linecap="round"/>
${dot(34, 40, 3, 'A')}${dot(130, 36, 2.5, 'D')}${dot(28, 92, 2, 'D')}`,

  'no-access': `${backdrop}
<path d="M64 56V46a16 16 0 0 1 32 0v10" fill="none" stroke="@H" stroke-width="7" stroke-linecap="round"/>
<rect x="50" y="52" width="60" height="46" rx="10" fill="@S" stroke="@O" stroke-width="1.5"/>
<circle cx="80" cy="74" r="12" fill="@A"/>
<circle cx="80" cy="71" r="4" fill="@K"/><rect x="78" y="72" width="4" height="9" rx="2" fill="@K"/>
${dot(34, 40, 3, 'A')}${sparkle(130, 40, 5, 'A')}${dot(132, 90, 2, 'D')}`,

  'not-found': `${backdrop}
<ellipse cx="80" cy="100" rx="24" ry="4" fill="@D"/>
<rect x="77" y="34" width="6" height="66" rx="3" fill="@H"/>
<path d="M58 38h46l9 9-9 9H58a3 3 0 0 1-3-3V41a3 3 0 0 1 3-3Z" fill="@S" stroke="@O" stroke-width="1.5" stroke-linejoin="round"/>
${bar(64, 44.5, 30, 5, 'D')}
<path d="M102 62H56l-9 9 9 9h46a3 3 0 0 0 3-3V65a3 3 0 0 0-3-3Z" fill="@A" stroke="@S" stroke-width="2" stroke-linejoin="round"/>
${bar(62, 68.5, 32, 5, 'K')}
${dot(32, 40, 3, 'A')}${dot(132, 32, 2.5, 'D')}${sparkle(130, 86, 5, 'A')}`,

  'maintenance': `${backdrop}
${gear(68, 66, 22, 8, '@S', '@D', ' stroke="@O" stroke-width="1.5"')}
${gear(106, 42, 12, 6, '@A', '@K')}
${dot(32, 36, 3, 'A')}${dot(132, 88, 2.5, 'D')}${sparkle(124, 72, 5, 'A')}`,
} as const;

export type IllustrationName = keyof typeof ART;

/** Illustrations grouped by the kind of product space they suit, in display order. */
export const illustrationGroups: Record<string, IllustrationName[]> = {
  'First use': ['no-projects', 'no-files', 'no-messages', 'no-team', 'no-contacts', 'no-events', 'no-data', 'no-integrations', 'no-history'],
  Money: ['no-payments', 'no-transactions', 'no-savings', 'no-cards', 'no-invoices'],
  Health: ['no-appointments', 'no-prescriptions', 'no-health-records'],
  Learning: ['no-courses', 'no-assignments', 'no-certificates'],
  Play: ['no-games', 'no-achievements'],
  'Saved and media': ['no-favorites', 'no-bookmarks', 'no-photos'],
  'Shopping and places': ['empty-cart', 'no-orders', 'no-location', 'no-reviews'],
  'Search and filter': ['no-results', 'no-filter-matches', 'nothing-selected'],
  Cleared: ['all-caught-up', 'no-notifications', 'empty-trash'],
  Problems: ['error', 'offline', 'no-access', 'not-found', 'maintenance'],
};

/** Every illustration name, in display order. */
export const illustrationNames = Object.values(illustrationGroups).flat();

const SLOTS: Record<string, string> = {
  B: 'backdrop',
  S: 'surface',
  O: 'outline',
  D: 'detail',
  H: 'shade',
  A: 'accent',
  K: 'accent-strong',
};

/** Slot letters to CSS variable names, like A to --halo-illustration-accent. */
export const illustrationSlots = SLOTS;

/** The inner SVG for an illustration, with colours as CSS variables. */
export function illustrationMarkup(name: IllustrationName) {
  return ART[name].replace(/@([BSODHAK])/g, (_, s: string) => `var(--halo-illustration-${SLOTS[s]})`);
}

/** The inner SVG with slot letters left in place, for tools that swap in their own colours. */
export const rawIllustration = (name: IllustrationName) => ART[name];
