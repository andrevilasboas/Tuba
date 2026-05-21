import U1 from '../data/U1.js';
import U2 from '../data/U2.js';
import U3 from '../data/U3.js';
import U4 from '../data/U4.js';
import U5 from '../data/U5.js';
import M20 from '../data/M20.js';
import M21 from '../data/M21.js';
import M22 from '../data/M22.js';
import M23 from '../data/M23.js';
import M24 from '../data/M24.js';
import M27 from '../data/M27.js';
import M28 from '../data/M28.js';
import M29 from '../data/M29.js';
import M30 from '../data/M30.js';
import M31 from '../data/M31.js';
import M32 from '../data/M32.js';
import M33 from '../data/M33.js';
import M38 from '../data/M38.js';
import M39 from '../data/M39.js';
import M40 from '../data/M40.js';
import M41 from '../data/M41.js';
import M42 from '../data/M42.js';
import M43 from '../data/M43.js';
import M44 from '../data/M44.js';
import M45 from '../data/M45.js';
import M46 from '../data/M46.js';
import M47 from '../data/M47.js';
import M48 from '../data/M48.js';
import M50 from '../data/M50.js';
import M51 from '../data/M51.js';
import M52 from '../data/M52.js';
import M53 from '../data/M53.js';
import M54 from '../data/M54.js';
import M55 from '../data/M55.js';
import M56 from '../data/M56.js';
import M65 from '../data/M65.js';
import M66 from '../data/M66.js';
import M67 from '../data/M67.js';
import M68 from '../data/M68.js';
import M69 from '../data/M69.js';
import M70 from '../data/M70.js';
import M71 from '../data/M71.js';
import M72 from '../data/M72.js';
import M73 from '../data/M73.js';
import M74 from '../data/M74.js';
import M75 from '../data/M75.js';
import M76 from '../data/M76.js';
import M77 from '../data/M77.js';
import M78 from '../data/M78.js';
import M87 from '../data/M87.js';
import M88 from '../data/M88.js';
import M89 from '../data/M89.js';
import M91 from '../data/M91.js';
import M92 from '../data/M92.js';
import M93 from '../data/M93.js';
import M94 from '../data/M94.js';

const DATA_URBANOS   = { U1, U2, U3, U4, U5 };
const DATA_MUNICIPAIS = { M20, M21, M22, M23, M24, M27, M28, M29, M30, M31, M32, M33, M38, M39, M40, M41, M42, M43, M44, M45, M46, M47, M48, M50, M51, M52, M53, M54, M55, M56, M65, M66, M67, M68, M69, M70, M71, M72, M73, M74, M75, M76, M77, M78, M87, M88, M89, M91, M92, M93, M94 };
const DATA = { ...DATA_URBANOS, ...DATA_MUNICIPAIS };

// ── State ─────────────────────────────────────────────────────────────────────
let selectedLine = null;
let selectedDir  = 0;
let selectedStop = null;
let dayType      = 'weekday'; // 'weekday' | 'weekend'

// ── Responsive helper ─────────────────────────────────────────────────────────
const isDesktop = () => window.innerWidth >= 768;

// ── Time utilities ────────────────────────────────────────────────────────────
function nowMinutes() {
  const d = new Date();
  return d.getHours() * 60 + d.getMinutes();
}
function parseTime(t) {
  const [h, m] = t.split(':').map(Number);
  return h * 60 + m;
}
function minsToStr(mins) {
  return String(Math.floor(mins / 60)).padStart(2, '0') + ':' + String(mins % 60).padStart(2, '0');
}
function formatCountdown(mins) {
  if (mins <= 0) return 'agora';
  if (mins === 1) return '1 min';
  if (mins < 60) return `${mins} min`;
  const h = Math.floor(mins / 60), m = mins % 60;
  return m === 0 ? `${h}h` : `${h}h${m}m`;
}
function getNextTime(times) {
  const now = nowMinutes();
  return times?.find(t => parseTime(t) >= now) ?? null;
}

// ── Day filter ────────────────────────────────────────────────────────────────
function hasWeekendService(dir) {
  return !!(dir.weekendCount || dir.hasSaturday);
}

function applyDayFilter(times, dir) {
  if (!times) return null;
  if (dayType === 'weekday') return times;
  // Weekend mode
  if (dir?.weekendCount) {
    const sliced = times.slice(0, dir.weekendCount);
    return sliced.length > 0 ? sliced : null;
  }
  if (dir?.hasSaturday) return times; // show all times (includes Saturday trips)
  return null;
}

// ── Interpolation for stops without published times ───────────────────────────
function getApproxTimes(stops, idx, dir) {
  let prevIdx = -1, nextIdx = -1;
  for (let i = idx - 1; i >= 0; i--)         { if (stops[i].times) { prevIdx = i; break; } }
  for (let i = idx + 1; i < stops.length; i++) { if (stops[i].times) { nextIdx = i; break; } }

  if (prevIdx === -1 && nextIdx === -1) return null;

  const prevTimes = prevIdx >= 0 ? applyDayFilter(stops[prevIdx].times, dir) : null;
  const nextTimes = nextIdx >= 0 ? applyDayFilter(stops[nextIdx].times, dir) : null;

  if (!prevTimes && !nextTimes) return null;
  if (!prevTimes) return { times: nextTimes, approx: true };
  if (!nextTimes) return { times: prevTimes, approx: true };

  const frac = (idx - prevIdx) / (nextIdx - prevIdx);
  const len  = Math.min(prevTimes.length, nextTimes.length);
  const result = [];
  for (let i = 0; i < len; i++) {
    result.push(minsToStr(Math.round(parseTime(prevTimes[i]) + frac * (parseTime(nextTimes[i]) - parseTime(prevTimes[i])))));
  }
  return { times: result, approx: true };
}

function getEffectiveTimes(stops, idx, dir) {
  if (stops[idx].times) {
    const filtered = applyDayFilter(stops[idx].times, dir);
    return filtered ? { times: filtered, approx: false } : null;
  }
  return getApproxTimes(stops, idx, dir);
}

// ── Clock ─────────────────────────────────────────────────────────────────────
function updateClock() {
  const d = new Date();
  document.getElementById('clock').textContent =
    String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0');
  if (selectedLine) renderStopList();
  if (selectedStop !== null) renderResults();
}

// ── Panel visibility ──────────────────────────────────────────────────────────
function showPanel(id) {
  if (isDesktop()) return;
  ['panel-lines', 'panel-stops', 'panel-results'].forEach(p => {
    document.getElementById(p).classList.toggle('hidden', p !== id);
  });
}

function goLines() {
  selectedLine = null; selectedStop = null; selectedDir = 0;
  renderLineGrid();
  renderDirToggle();
  clearStops();
  clearResults();
  showPanel('panel-lines');
}

function goStops() {
  selectedStop = null;
  clearResults();
  renderDirToggle();
  renderStopList();
  showPanel('panel-stops');
}

function goResults(stopIdx) {
  selectedStop = stopIdx;
  renderResults();
  showPanel('panel-results');
}

// ── Render: line grid with two sections ───────────────────────────────────────
function lineCardHTML(id, d) {
  const active = selectedLine === id ? ' active' : '';
  return `<div class="line-card${active}" onclick="selectLine('${id}')">
    <div class="line-num">${id}</div>
    <div class="line-desc">${d.name}</div>
  </div>`;
}

function renderLineGrid() {
  document.getElementById('line-grid').innerHTML =
    `<div class="line-section-label">Urbanos</div>` +
    Object.entries(DATA_URBANOS).map(([id, d]) => lineCardHTML(id, d)).join('') +
    `<div class="line-section-label">Municipais</div>` +
    Object.entries(DATA_MUNICIPAIS).map(([id, d]) => lineCardHTML(id, d)).join('');
}

function selectLine(id) {
  selectedLine = id;
  selectedDir  = 0;
  selectedStop = null;
  renderLineGrid();
  goStops();
}

// ── Render: direction toggle ──────────────────────────────────────────────────
function renderDirToggle() {
  const el = document.getElementById('dir-toggle');
  if (!selectedLine) { el.className = ''; el.innerHTML = ''; return; }
  el.className = 'dir-toggle';
  el.innerHTML = DATA[selectedLine].directions.map((d, i) => {
    let wkBadge = '';
    if (d.weekendCount) {
      wkBadge = `<span class="dir-wk-badge">${d.weekendDays || 'fim de semana'}</span>`;
    } else if (d.hasSaturday) {
      wkBadge = `<span class="dir-wk-badge">sábados</span>`;
    }
    return `<button class="dir-btn${i === selectedDir ? ' active' : ''}" onclick="selectDir(${i})">${d.label}${wkBadge}</button>`;
  }).join('');
}

function selectDir(i) {
  selectedDir  = i;
  selectedStop = null;
  renderDirToggle();
  renderStopList();
  clearResults();
}

// ── Render: stop list ─────────────────────────────────────────────────────────
function renderStopList() {
  if (!selectedLine) return;
  const dir   = DATA[selectedLine].directions[selectedDir];
  const stops = dir.stops;
  const el    = document.getElementById('stop-list');

  if (dayType === 'weekend' && !hasWeekendService(dir)) {
    el.innerHTML = `<div class="no-service-notice">
      <div class="ns-icon">🚫</div>
      <div class="ns-text">Sem serviço ao fim de semana</div>
      <div class="ns-sub">Esta direção não tem passagens neste período</div>
    </div>`;
    return;
  }

  const now = nowMinutes();
  el.innerHTML = stops.map((s, i) => {
    const eff  = getEffectiveTimes(stops, i, dir);
    const next = eff ? getNextTime(eff.times) : null;
    let badge = 'sem mais', cls = 'muted', extra = '';

    if (next) {
      const diff = parseTime(next) - now;
      badge = diff <= 0 ? 'agora' : formatCountdown(diff);
      cls   = diff <= 2 ? 'red' : diff <= 10 ? 'yellow' : 'green';
      if (eff.approx) extra = `<span class="approx-badge">~aprox.</span>`;
    }

    const activeClass  = selectedStop === i ? ' active' : '';
    const noTimesClass = !s.times ? ' no-times' : '';
    return `<div class="stop-item${noTimesClass}${activeClass}" onclick="selectStop(${i})">
      <div class="stop-name">${s.name}${extra}</div>
      <span class="stop-next ${cls}">${badge}</span>
    </div>`;
  }).join('');
}

function clearStops() {
  document.getElementById('stop-list').innerHTML = '';
}

function selectStop(i) {
  selectedStop = i;
  renderStopList();
  goResults(i);
}

// ── Render: results panel ─────────────────────────────────────────────────────
function renderResults() {
  if (selectedStop === null || !selectedLine) return;
  const dir   = DATA[selectedLine].directions[selectedDir];
  const stops = dir.stops;
  const stop  = stops[selectedStop];
  const eff   = getEffectiveTimes(stops, selectedStop, dir);
  const now   = nowMinutes();
  const panel = document.getElementById('results-body');
  const isMunicipal = selectedLine.startsWith('M');

  document.getElementById('results-panel-title').textContent = stop.name;

  if (dayType === 'weekend' && !hasWeekendService(dir)) {
    panel.innerHTML = `<div class="no-service-notice">
      <div class="ns-icon">🚫</div>
      <div class="ns-text">Sem serviço ao fim de semana</div>
      <div class="ns-sub">Esta direção não tem passagens neste período</div>
    </div>`;
    return;
  }

  if (!eff) {
    panel.innerHTML = `<p class="no-more">Sem dados de horário para esta paragem.</p>`;
    return;
  }

  const { times, approx } = eff;
  const upcoming = times.filter(t => parseTime(t) >= now);
  const past     = times.filter(t => parseTime(t) < now);
  let html = '';

  if (dayType === 'weekend' && dir.weekendDays) {
    html += `<div class="weekend-notice">
      Horário de <strong>${dir.weekendDays}</strong>
    </div>`;
  }

  if (dayType === 'weekend' && dir.hasSaturday) {
    html += `<div class="weekend-notice">Horário de <strong>sábados</strong></div>`;
  }

  if (isMunicipal) {
    html += `<div class="school-notice">
      Inclui serviços de <strong>período escolar</strong> e <strong>fora do período escolar</strong>. Verifique se o autocarro circula no seu período.
    </div>`;
  }

  if (approx) {
    html += `<div class="approx-notice">
      ⚠️ Sem horário publicado. Tempos <strong>estimados</strong> com base nas paragens vizinhas — chegue alguns minutos mais cedo.
    </div>`;
  }

  if (upcoming.length === 0) {
    html += `<p class="no-more">Sem mais autocarros hoje.</p>`;
  } else {
    const next = upcoming[0];
    const diff = parseTime(next) - now;
    html += `<div class="next-bus-hero">
      <div>
        <div class="next-bus-label">Próximo autocarro</div>
        <div class="next-bus-time">${next}</div>
      </div>
      <div style="text-align:right">
        <div class="next-bus-countdown">${diff <= 0 ? 'Agora' : formatCountdown(diff)}</div>
        <div class="next-bus-label">espera</div>
      </div>
    </div>`;

    if (upcoming.length > 1) {
      html += `<div class="section-title">Seguintes</div>
        <div class="time-list">
          ${upcoming.slice(1).map(t => `<span class="time-chip upcoming">${t}</span>`).join('')}
        </div>`;
    }
  }

  if (past.length > 0) {
    html += `<div class="section-title">Já passaram</div>
      <div class="time-list">
        ${past.map(t => `<span class="time-chip past">${t}</span>`).join('')}
      </div>`;
  }

  html += `<p class="disclaimer">Horários estimados — chegue 10 min antes. Sujeito a alterações por obras ou outros fatores. Atualizado em 12-09-2025.</p>`;
  panel.innerHTML = html;
}

function clearResults() {
  document.getElementById('results-body').innerHTML = '';
  document.getElementById('results-panel-title').textContent = 'Horários';
}

// ── Day type toggle ───────────────────────────────────────────────────────────
function selectDayType(type) {
  dayType = type;
  document.getElementById('btn-weekday').classList.toggle('active', type === 'weekday');
  document.getElementById('btn-weekend').classList.toggle('active', type === 'weekend');
  selectedStop = null;
  if (selectedLine) {
    renderDirToggle();
    renderStopList();
  }
  clearResults();
}

// ── Handle resize (mobile ↔ desktop) ─────────────────────────────────────────
function onResize() {
  if (isDesktop()) {
    ['panel-lines', 'panel-stops', 'panel-results'].forEach(p =>
      document.getElementById(p).classList.remove('hidden')
    );
  } else {
    if (selectedStop !== null) showPanel('panel-results');
    else if (selectedLine) showPanel('panel-stops');
    else showPanel('panel-lines');
  }
}

// ── Init ──────────────────────────────────────────────────────────────────────
window.selectLine    = selectLine;
window.selectDir     = selectDir;
window.selectStop    = selectStop;
window.selectDayType = selectDayType;
window.goLines       = goLines;
window.goStops       = goStops;

renderLineGrid();
updateClock();
setInterval(updateClock, 15000);
window.addEventListener('resize', onResize);
