/**
 * Generates blog cover art: public/blog/covers/<slug>.svg (shown on the site)
 * and <slug>.png (1200x630, used for Open Graph, Twitter, and JSON-LD).
 *
 * Run: node scripts/blog-covers.mjs
 * Colors are literal hex values because the rasterizer cannot read CSS variables.
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const W = 1200;
const H = 630;
const C = {
  bg: "#131417",
  panel: "#1b1c20",
  line: "#3a3c42",
  muted: "#a4a9b1",
  strong: "#f5f6f7",
  red: "#ff4433",
  blue: "#4c8dff",
};
const MONO = "Menlo, 'SF Mono', Consolas, 'DejaVu Sans Mono', monospace";

const text = (x, y, s, { size = 14, fill = C.muted, anchor = "start", weight = 500, spacing = 2 } = {}) =>
  `<text x="${x}" y="${y}" font-family="${MONO}" font-size="${size}" font-weight="${weight}" letter-spacing="${spacing}" fill="${fill}" text-anchor="${anchor}">${String(s).replace(/&/g, "&amp;")}</text>`;

function frame({ label, glowR = [900, 120], glowB = [200, 560] }, body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
<defs>
  <pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.2" fill="#ffffff" fill-opacity="0.07"/></pattern>
  <radialGradient id="gr"><stop offset="0" stop-color="${C.red}" stop-opacity="0.28"/><stop offset="1" stop-color="${C.red}" stop-opacity="0"/></radialGradient>
  <radialGradient id="gb"><stop offset="0" stop-color="${C.blue}" stop-opacity="0.22"/><stop offset="1" stop-color="${C.blue}" stop-opacity="0"/></radialGradient>
</defs>
<rect width="${W}" height="${H}" fill="${C.bg}"/>
<rect width="${W}" height="${H}" fill="url(#dots)"/>
<circle cx="${glowR[0]}" cy="${glowR[1]}" r="420" fill="url(#gr)"/>
<circle cx="${glowB[0]}" cy="${glowB[1]}" r="420" fill="url(#gb)"/>
<g fill="none" stroke-linecap="round" stroke-linejoin="round">
${body}
</g>
<rect x="60" y="58" width="36" height="3" rx="1.5" fill="${C.red}"/>
${text(110, 65, label, { size: 15, fill: C.red, weight: 700, spacing: 3 })}
${text(1140, 590, "NIKARED.COM", { size: 13, anchor: "end", spacing: 3, fill: "#6b7078" })}
</svg>`;
}

/* ---------- small shared pieces ---------- */
function chip(x, y, s, stroke) {
  const pins = [];
  for (let i = 1; i <= 3; i++) {
    const o = (s / 4) * i;
    pins.push(`M${x + o} ${y - 10}V${y}`, `M${x + o} ${y + s}V${y + s + 10}`, `M${x - 10} ${y + o}H${x}`, `M${x + s} ${y + o}H${x + s + 10}`);
  }
  return `<rect x="${x}" y="${y}" width="${s}" height="${s}" rx="6" stroke="${stroke}" stroke-width="2.5"/>
<rect x="${x + s * 0.3}" y="${y + s * 0.3}" width="${s * 0.4}" height="${s * 0.4}" rx="3" fill="${stroke}" fill-opacity="0.25" stroke="${stroke}" stroke-width="1.5"/>
<path d="${pins.join("")}" stroke="${stroke}" stroke-width="2"/>`;
}

function cloud(cx, cy, s, stroke, dash = "") {
  const k = s / 100;
  return `<path transform="translate(${cx - 70 * k} ${cy - 45 * k}) scale(${k})" d="M35 90 H115 A28 28 0 0 0 112 34 A40 40 0 0 0 36 30 A30 30 0 0 0 35 90 Z" stroke="${stroke}" stroke-width="${2.5 / k}" ${dash ? `stroke-dasharray="${dash}"` : ""}/>`;
}

function lock(cx, cy, s, color) {
  return `<rect x="${cx - s / 2}" y="${cy - s * 0.1}" width="${s}" height="${s * 0.8}" rx="${s * 0.12}" stroke="${color}" stroke-width="2.5" fill="${color}" fill-opacity="0.12"/>
<path d="M${cx - s * 0.3} ${cy - s * 0.1}V${cy - s * 0.35}A${s * 0.3} ${s * 0.3} 0 0 1 ${cx + s * 0.3} ${cy - s * 0.35}V${cy - s * 0.1}" stroke="${color}" stroke-width="2.5"/>
<circle cx="${cx}" cy="${cy + s * 0.25}" r="${s * 0.08}" fill="${color}"/>`;
}

/* ---------- covers ---------- */
const covers = {};

covers["edge-ai-vs-cloud-ai-for-quality-control"] = () => {
  const parts = [190, 320, 450, 580, 710]
    .map((x, i) => {
      const bad = i === 3;
      return `<rect x="${x}" y="372" width="56" height="48" rx="6" stroke="${bad ? C.red : C.muted}" stroke-width="2.5" fill="${bad ? C.red : C.muted}" fill-opacity="${bad ? 0.14 : 0.06}"/>${
        bad ? `<path d="M${x + 14} 380l10 12-6 8 12 14" stroke="${C.red}" stroke-width="2"/>` : ""
      }`;
    })
    .join("");
  return frame(
    { label: "EDGE AI", glowR: [620, 260], glowB: [1050, 120] },
    `<!-- conveyor -->
<path d="M140 420H880M140 462H880" stroke="${C.line}" stroke-width="3"/>
<circle cx="140" cy="441" r="21" stroke="${C.line}" stroke-width="3"/><circle cx="880" cy="441" r="21" stroke="${C.line}" stroke-width="3"/>
${[240, 340, 440, 540, 640, 740].map((x) => `<circle cx="${x}" cy="441" r="6" stroke="${C.line}" stroke-width="2"/>`).join("")}
${parts}
<!-- reject gate -->
<path d="M880 420L940 380" stroke="${C.red}" stroke-width="4"/>
${text(950, 375, "REJECT", { size: 13, fill: C.red })}
<!-- camera and view cone -->
<path d="M592 250L556 368H682L648 250Z" fill="${C.blue}" fill-opacity="0.08" stroke="${C.blue}" stroke-width="1.5" stroke-dasharray="5 7"/>
<rect x="584" y="196" width="72" height="44" rx="8" stroke="${C.strong}" stroke-width="2.5"/>
<rect x="600" y="240" width="40" height="12" rx="3" stroke="${C.strong}" stroke-width="2.5"/>
<!-- edge box -->
${chip(430, 176, 64, C.red)}
<path d="M584 218H508" stroke="${C.red}" stroke-width="3"/>
${text(546, 206, "12 MS", { size: 13, fill: C.red, anchor: "middle" })}
${text(462, 290, "EDGE", { size: 13, anchor: "middle" })}
<!-- cloud -->
${cloud(1000, 190, 110, C.muted)}
<path d="M656 210C760 140 860 140 940 180" stroke="${C.muted}" stroke-width="2" stroke-dasharray="3 9"/>
${text(800, 132, "120 MS ±40", { size: 13, anchor: "middle" })}
${text(1000, 270, "CLOUD", { size: 13, anchor: "middle" })}`,
  );
};

covers["modernizing-legacy-scada-without-downtime"] = () => {
  const names = ["REPORTS", "TRENDS", "ALARMS", "OVERVIEW", "CONTROL", "SETPOINTS"];
  const tiles = names
    .map((n, i) => {
      const x = 128 + i * 160;
      const state = i < 3 ? "done" : i === 3 ? "active" : "legacy";
      const stroke = state === "done" ? C.blue : state === "active" ? C.red : "#5a5d64";
      const fillOp = state === "done" ? 0.14 : state === "active" ? 0.1 : 0;
      const up = state !== "legacy" ? `<path d="M${x + 65} 300V214" stroke="${stroke}" stroke-width="2"/><circle cx="${x + 65}" cy="206" r="7" fill="${stroke}"/>` : "";
      const mark = state === "done" ? `<path d="M${x + 100} 322l6 6 12-12" stroke="${C.blue}" stroke-width="2.5"/>` : "";
      return `${up}<rect x="${x}" y="300" width="130" height="86" rx="12" stroke="${stroke}" stroke-width="2.5" fill="${stroke}" fill-opacity="${fillOp}" ${state === "legacy" ? 'stroke-dasharray="6 7"' : ""}/>
${mark}${text(x + 65, 360, n, { size: 13, anchor: "middle", fill: state === "legacy" ? "#6b7078" : C.strong, spacing: 1.5 })}
<path d="M${x + 65} 386V460" stroke="${C.line}" stroke-width="2"/>`;
    })
    .join("");
  const racks = [0, 1, 2, 3, 4, 5]
    .map((i) => {
      const x = 148 + i * 160;
      return `<rect x="${x}" y="460" width="90" height="66" rx="6" stroke="${C.line}" stroke-width="2.5"/>${[0, 1, 2, 3]
        .map((k) => `<path d="M${x + 16 + k * 19} 472V514" stroke="${C.line}" stroke-width="5"/>`)
        .join("")}`;
    })
    .join("");
  return frame(
    { label: "INDUSTRIAL SOFTWARE", glowR: [380, 330], glowB: [980, 160] },
    `<path d="M128 206H1072" stroke="${C.blue}" stroke-width="3"/>
${text(128, 180, "UNIFIED NAMESPACE", { size: 13, fill: C.blue })}
${text(1072, 180, "MQTT", { size: 13, fill: C.blue, anchor: "end" })}
${tiles}
${racks}
${text(1072, 556, "PLC / RTU", { size: 13, anchor: "end" })}`,
  );
};

covers["predictive-maintenance-where-to-start"] = () => {
  const pts = (from, to) => {
    const p = [];
    for (let x = from; x <= to; x += 3) {
      const t = Math.max(0, (x - 800) / 300);
      const amp = 24 + 95 * t * t + 10 * t;
      const y = 340 + amp * (0.7 * Math.sin(x * 0.11) + 0.3 * Math.sin(x * 0.37 + 1));
      p.push(`${x},${y.toFixed(1)}`);
    }
    return p.join(" ");
  };
  return frame(
    { label: "EDGE AI", glowR: [1000, 340], glowB: [180, 340] },
    `<!-- motor -->
<rect x="96" y="276" width="140" height="128" rx="18" stroke="${C.strong}" stroke-width="2.5"/>
${[0, 1, 2, 3, 4].map((i) => `<path d="M${114 + i * 26} 292V388" stroke="${C.line}" stroke-width="3"/>`).join("")}
<path d="M236 340H282" stroke="${C.strong}" stroke-width="8"/>
<rect x="148" y="250" width="34" height="26" rx="4" fill="${C.red}" fill-opacity="0.2" stroke="${C.red}" stroke-width="2.5"/>
<path d="M150 236Q165 222 180 236M140 224Q165 200 190 224" stroke="${C.red}" stroke-width="2"/>
${text(166, 446, "MOTOR 07", { size: 13, anchor: "middle" })}
<!-- baseline band -->
<rect x="310" y="300" width="830" height="80" fill="${C.blue}" fill-opacity="0.08"/>
<path d="M310 300H1140M310 380H1140" stroke="${C.blue}" stroke-width="1.5" stroke-dasharray="6 8"/>
${text(310, 286, "LEARNED BASELINE", { size: 13, fill: C.blue })}
<polyline points="${pts(310, 860)}" stroke="${C.muted}" stroke-width="2.5"/>
<polyline points="${pts(860, 1140)}" stroke="${C.red}" stroke-width="2.5"/>
<!-- alert -->
<circle cx="1003" cy="235" r="10" fill="${C.red}"/>
<circle cx="1003" cy="235" r="24" stroke="${C.red}" stroke-width="2" stroke-opacity="0.5"/>
<circle cx="1003" cy="235" r="40" stroke="${C.red}" stroke-width="1.5" stroke-opacity="0.25"/>
${text(1003, 170, "ANOMALY", { size: 14, fill: C.red, anchor: "middle", weight: 700 })}
${text(310, 520, "RMS · KURTOSIS · FFT PEAKS", { size: 13 })}`,
  );
};

covers["scoping-a-digital-twin"] = () => {
  const s = 34;
  const cx = 560;
  const cy = 150;
  const cos = Math.cos(Math.PI / 6);
  const iso = (x, y, z = 0) => [cx + (x - y) * cos * s, cy + (x + y) * 0.5 * s - z * s];
  const P = (...a) => a.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  const grid = [];
  const GX = 12;
  const GY = 9;
  for (let i = 0; i <= GX; i++) grid.push(`M${P(iso(i, 0))}L${P(iso(i, GY))}`);
  for (let j = 0; j <= GY; j++) grid.push(`M${P(iso(0, j))}L${P(iso(GX, j))}`);
  const box = (x, y, w, d, h, stroke, op) => {
    const top = [iso(x, y, h), iso(x + w, y, h), iso(x + w, y + d, h), iso(x, y + d, h)];
    const left = [iso(x, y + d, 0), iso(x + w, y + d, 0), iso(x + w, y + d, h), iso(x, y + d, h)];
    const right = [iso(x + w, y, 0), iso(x + w, y + d, 0), iso(x + w, y + d, h), iso(x + w, y, h)];
    return `<polygon points="${P(...left)}" fill="${stroke}" fill-opacity="${op * 0.6}" stroke="${stroke}" stroke-width="2"/>
<polygon points="${P(...right)}" fill="${stroke}" fill-opacity="${op * 0.35}" stroke="${stroke}" stroke-width="2"/>
<polygon points="${P(...top)}" fill="${stroke}" fill-opacity="${op}" stroke="${stroke}" stroke-width="2"/>`;
  };
  const g = "#6b7078";
  const hot = iso(9, 6.5, 2);
  return frame(
    { label: "XR & SPATIAL", glowR: [900, 380], glowB: [360, 200] },
    `<path d="${grid.join("")}" stroke="#ffffff" stroke-opacity="0.08" stroke-width="1"/>
${box(1, 1, 2, 2, 2.4, g, 0.12)}
${box(5, 1, 2, 2, 1.6, g, 0.12)}
${box(1, 5, 6, 1, 0.5, C.blue, 0.18)}
${box(9, 1, 2, 3, 3, g, 0.12)}
${box(3, 7.2, 1.6, 1.2, 1.2, g, 0.12)}
${box(8, 5.5, 2, 2, 2, C.red, 0.22)}
<path d="M${hot[0].toFixed(1)} ${hot[1].toFixed(1)}V150H${(hot[0] + 70).toFixed(1)}" stroke="${C.red}" stroke-width="2"/>
<circle cx="${hot[0].toFixed(1)}" cy="${hot[1].toFixed(1)}" r="6" fill="${C.red}"/>
<rect x="${(hot[0] + 70).toFixed(1)}" y="108" width="210" height="84" rx="10" fill="${C.panel}" stroke="${C.red}" stroke-width="2"/>
${text(hot[0] + 88, 140, "PUMP 03", { size: 14, fill: C.strong, weight: 700 })}
${text(hot[0] + 88, 170, "4.2 MM/S  LIVE", { size: 13, fill: C.red })}`,
  );
};

covers["quantizing-models-for-industrial-edge-hardware"] = () => {
  const n = 8;
  const cell = 32;
  const val = (i, j) => 0.5 + 0.5 * Math.sin(i * 0.9 + 0.3) * Math.cos(j * 0.7 - 0.4) * 0.9 + 0.05 * Math.sin(i * j);
  const grid = (x0, y0, color, quant) => {
    const out = [];
    for (let i = 0; i < n; i++)
      for (let j = 0; j < n; j++) {
        let v = Math.min(1, Math.max(0, val(i, j)));
        if (quant) v = Math.round(v * 3) / 3;
        out.push(`<rect x="${x0 + j * cell}" y="${y0 + i * cell}" width="${cell - 3}" height="${cell - 3}" rx="3" fill="${color}" fill-opacity="${(0.08 + v * 0.8).toFixed(2)}"/>`);
      }
    return out.join("");
  };
  const L = [150, 186];
  const R = [790, 186];
  const pins = [];
  for (let k = 0; k < 7; k++) {
    const o = 40 + k * 40;
    pins.push(`M${R[0] - 24 + o} ${R[1] - 24}v-18`, `M${R[0] - 24 + o} ${R[1] + 280}v18`, `M${R[0] - 24} ${R[1] - 24 + o}h-18`, `M${R[0] + 280} ${R[1] - 24 + o}h18`);
  }
  return frame(
    { label: "EDGE AI", glowR: [920, 330], glowB: [270, 330] },
    `${grid(L[0], L[1], C.blue, false)}
<rect x="${L[0] - 14}" y="${L[1] - 14}" width="${n * cell + 25}" height="${n * cell + 25}" rx="12" stroke="${C.line}" stroke-width="2"/>
${text(L[0], 490, "FP32", { size: 16, fill: C.blue, weight: 700 })}
${text(L[0] + n * cell + 11, 490, "4 BYTES / WEIGHT", { size: 12, anchor: "end" })}
<rect x="${R[0] - 24}" y="${R[1] - 24}" width="${n * cell + 45}" height="${n * cell + 45}" rx="14" stroke="${C.red}" stroke-width="2.5"/>
<path d="${pins.join("")}" stroke="${C.red}" stroke-width="2"/>
${grid(R[0], R[1], C.red, true)}
${text(R[0] - 24, 520, "INT8", { size: 16, fill: C.red, weight: 700 })}
${text(R[0] + n * cell + 21, 520, "1 BYTE / WEIGHT", { size: 12, anchor: "end" })}
<path d="M450 314H730M710 300l20 14-20 14" stroke="${C.strong}" stroke-width="2.5"/>
${text(590, 296, "CALIBRATE", { size: 13, anchor: "middle", fill: C.strong })}
${text(590, 350, "QUANTIZE", { size: 13, anchor: "middle" })}`,
  );
};

covers["ar-work-instructions-for-maintenance"] = () => {
  const bolts = [
    [210, 230],
    [420, 230],
    [210, 440],
    [420, 440],
  ];
  return frame(
    { label: "XR & SPATIAL", glowR: [860, 300], glowB: [260, 420] },
    `<!-- machine panel -->
<rect x="140" y="160" width="560" height="350" rx="18" stroke="${C.line}" stroke-width="3" fill="${C.panel}" fill-opacity="0.6"/>
<rect x="250" y="270" width="140" height="130" rx="10" stroke="${C.line}" stroke-width="2.5"/>
${bolts.map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="16" stroke="${i === 1 ? C.red : C.muted}" stroke-width="2.5"/><path d="M${x - 7} ${y}h14M${x} ${y - 7}v14" stroke="${i === 1 ? C.red : C.muted}" stroke-width="2"/>`).join("")}
<circle cx="560" cy="300" r="56" stroke="${C.muted}" stroke-width="2.5"/>
<path d="M560 244v112M504 300h112" stroke="${C.muted}" stroke-width="2"/>
<path d="M140 470H40" stroke="${C.line}" stroke-width="10"/>
<!-- tablet -->
<rect x="610" y="150" width="500" height="370" rx="30" fill="${C.bg}" fill-opacity="0.92" stroke="${C.strong}" stroke-width="3"/>
<rect x="632" y="172" width="456" height="326" rx="14" stroke="${C.line}" stroke-width="1.5"/>
<path d="M436 230C520 150 600 150 690 238" stroke="${C.red}" stroke-width="2" stroke-dasharray="4 7"/>
<!-- zoomed bolt on screen -->
<circle cx="790" cy="300" r="44" stroke="${C.red}" stroke-width="3" fill="${C.red}" fill-opacity="0.1"/>
<path d="M774 300h32M790 284v32" stroke="${C.red}" stroke-width="3"/>
<path d="M722 268A74 74 0 0 1 846 236" stroke="${C.red}" stroke-width="3"/>
<path d="M832 222l16 14-20 8" stroke="${C.red}" stroke-width="3"/>
${text(902, 268, "TORQUE", { size: 12 })}
${text(902, 296, "24 NM", { size: 22, fill: C.strong, weight: 700 })}
${text(902, 322, "CROSS PATTERN", { size: 12 })}
<rect x="656" y="404" width="408" height="70" rx="12" fill="${C.panel}" stroke="${C.line}" stroke-width="1.5"/>
${text(678, 446, "STEP 3 OF 7", { size: 14, fill: C.strong, weight: 700 })}
<rect x="868" y="434" width="174" height="8" rx="4" fill="${C.line}"/>
<rect x="868" y="434" width="75" height="8" rx="4" fill="${C.red}"/>`,
  );
};

covers["on-device-llm-in-a-private-finance-app"] = () =>
  frame(
    { label: "PRODUCT ENGINEERING", glowR: [600, 330], glowB: [1020, 200] },
    `<!-- cloud, blocked -->
${cloud(220, 230, 120, "#6b7078", "6 8")}
<path d="M300 280C360 300 410 300 470 290" stroke="#6b7078" stroke-width="2" stroke-dasharray="3 9"/>
<circle cx="380" cy="298" r="20" fill="${C.bg}" stroke="${C.red}" stroke-width="2.5"/>
<path d="M372 290l16 16M388 290l-16 16" stroke="${C.red}" stroke-width="2.5"/>
${text(220, 340, "NO SERVER", { size: 13, anchor: "middle" })}
${text(220, 362, "NO ACCOUNT", { size: 13, anchor: "middle" })}
<!-- phone -->
<rect x="480" y="96" width="250" height="470" rx="38" fill="${C.panel}" fill-opacity="0.7" stroke="${C.strong}" stroke-width="3"/>
<rect x="570" y="112" width="70" height="12" rx="6" fill="${C.line}"/>
<rect x="560" y="156" width="146" height="54" rx="16" fill="${C.line}"/>
<rect x="576" y="174" width="96" height="7" rx="3.5" fill="${C.muted}" fill-opacity="0.6"/>
<rect x="576" y="190" width="60" height="7" rx="3.5" fill="${C.muted}" fill-opacity="0.6"/>
<rect x="504" y="228" width="186" height="96" rx="16" stroke="${C.red}" stroke-width="2" fill="${C.red}" fill-opacity="0.08"/>
<rect x="522" y="250" width="130" height="7" rx="3.5" fill="${C.strong}" fill-opacity="0.7"/>
<rect x="522" y="268" width="150" height="7" rx="3.5" fill="${C.strong}" fill-opacity="0.7"/>
<rect x="522" y="286" width="90" height="7" rx="3.5" fill="${C.strong}" fill-opacity="0.7"/>
<rect x="618" y="300" width="56" height="14" rx="7" fill="${C.blue}" fill-opacity="0.25"/>
<path d="M626 307l4 4 8-8" stroke="${C.blue}" stroke-width="2"/>
<rect x="580" y="342" width="126" height="40" rx="14" fill="${C.line}"/>
<rect x="596" y="358" width="70" height="7" rx="3.5" fill="${C.muted}" fill-opacity="0.6"/>
${lock(605, 470, 52, C.red)}
<!-- right: model and key -->
${chip(830, 170, 70, C.blue)}
${text(865, 290, "ON-DEVICE", { size: 13, anchor: "middle", fill: C.blue })}
${text(865, 310, "MODEL", { size: 13, anchor: "middle", fill: C.blue })}
<path d="M730 205H808" stroke="${C.blue}" stroke-width="2"/>
<circle cx="865" cy="420" r="26" stroke="${C.strong}" stroke-width="2.5"/>
<path d="M891 420H980M950 420v22M970 420v16" stroke="${C.strong}" stroke-width="2.5"/>
${text(865, 486, "256-BIT KEY", { size: 13, anchor: "start", fill: C.strong })}
${text(865, 508, "SEALED IN HARDWARE", { size: 13, anchor: "start" })}
<path d="M730 440H830" stroke="${C.strong}" stroke-width="2" stroke-dasharray="4 6"/>`,
  );

covers["payments-that-reconcile"] = () => {
  const src = [
    ["UPI", 200, C.blue],
    ["CARD", 315, C.blue],
    ["CASH", 430, C.muted],
  ];
  const rows = [0, 1, 2, 3, 4]
    .map((i) => {
      const y = 214 + i * 48;
      return `<rect x="770" y="${y}" width="${110 - (i % 3) * 18}" height="8" rx="4" fill="${C.muted}" fill-opacity="0.5"/>
<rect x="${990 - (i % 2) * 20}" y="${y}" width="${50 + (i % 2) * 20}" height="8" rx="4" fill="${C.strong}" fill-opacity="0.7"/>
<path d="M1058 ${y - 2}l6 6 10-11" stroke="${C.blue}" stroke-width="2.5"/>
<path d="M770 ${y + 26}H1080" stroke="${C.line}" stroke-width="1"/>`;
    })
    .join("");
  return frame(
    { label: "PRODUCT ENGINEERING", glowR: [920, 300], glowB: [220, 320] },
    `${src
      .map(
        ([n, y, c]) => `<rect x="110" y="${y - 28}" width="150" height="56" rx="28" stroke="${c}" stroke-width="2.5" fill="${c}" fill-opacity="0.08"/>
${text(185, y + 5, n, { size: 15, anchor: "middle", fill: C.strong, weight: 700 })}
<path d="M260 ${y}C380 ${y} 420 315 516 315" stroke="${c}" stroke-width="2.5"/>`,
      )
      .join("")}
<!-- duplicate webhook -->
<path d="M260 330C360 350 420 345 470 336" stroke="${C.red}" stroke-width="2" stroke-dasharray="4 7"/>
<circle cx="470" cy="336" r="13" fill="${C.bg}" stroke="${C.red}" stroke-width="2"/>
<path d="M464 330l12 12M476 330l-12 12" stroke="${C.red}" stroke-width="2"/>
${text(320, 372, "DUPLICATE", { size: 12, fill: C.red, anchor: "middle" })}
<!-- idempotency gate -->
<rect x="520" y="275" width="80" height="80" rx="14" transform="rotate(45 560 315)" stroke="${C.strong}" stroke-width="2.5" fill="${C.panel}"/>
<path d="M545 308h30M545 322h30" stroke="${C.strong}" stroke-width="3"/>
${text(560, 410, "IDEMPOTENT", { size: 13, anchor: "middle", fill: C.strong })}
${text(560, 430, "BY PAYMENT ID", { size: 12, anchor: "middle" })}
<path d="M618 315H730" stroke="${C.strong}" stroke-width="2.5"/>
<path d="M716 305l14 10-14 10" stroke="${C.strong}" stroke-width="2.5"/>
<!-- ledger -->
<rect x="740" y="150" width="370" height="370" rx="18" fill="${C.panel}" fill-opacity="0.85" stroke="${C.strong}" stroke-width="2.5"/>
${text(770, 190, "DAILY CASH REPORT", { size: 13, fill: C.strong, weight: 700 })}
${rows}
<rect x="760" y="456" width="330" height="46" rx="10" fill="${C.red}" fill-opacity="0.12" stroke="${C.red}" stroke-width="2"/>
${text(778, 485, "BALANCED", { size: 14, fill: C.red, weight: 700 })}
<rect x="990" y="476" width="80" height="9" rx="4.5" fill="${C.red}"/>`,
  );
};

const outDir = path.join(process.cwd(), "public", "blog", "covers");
await mkdir(outDir, { recursive: true });
for (const [slug, make] of Object.entries(covers)) {
  const svg = make();
  await writeFile(path.join(outDir, `${slug}.svg`), svg);
  await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(path.join(outDir, `${slug}.png`));
  console.log("wrote", slug);
}
