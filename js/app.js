import U1 from '../data/U1.js';
import U2 from '../data/U2.js';
import U3 from '../data/U3.js';
import U4 from '../data/U4.js';
import U5 from '../data/U5.js';

const DATA = { U1, U2, U3, U4, U5 };

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
function applyDayFilter(times, dir) {
  if (!times) return null;
  if (dayType === 'weekday') return times;
  const count = dir?.weekendCount || 0;
  if (count === 0) return null;
  const sliced = times.slice(0, count);
  return sliced.length > 0 ? sliced : null;
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

// ── Render: line grid ─────────────────────────────────────────────────────────
function renderLineGrid() {
  document.getElementById('line-grid').innerHTML = Object.entries(DATA).map(([id, d]) =>
    `<div class="line-card${selectedLine === id ? ' active' : ''}" onclick="selectLine('${id}')">
      <div class="line-num">${id}</div>
      <div class="line-desc">${d.name}</div>
    </div>`
  ).join('');
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
  if (!selectedLine) { el.innerHTML = ''; return; }
  el.innerHTML = DATA[selectedLine].directions.map((d, i) => {
    const wkBadge = d.weekendCount
      ? `<span class="dir-wk-badge">${d.weekendDays || 'fim de semana'}</span>`
      : '';
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

  if (dayType === 'weekend' && !dir.weekendCount) {
    el.innerHTML = `<div class="no-service-notice">
      <div class="ns-icon">🚫</div>
      <div class="ns-text">Sem serviço ao fim de semana</div>
      <div class="ns-sub">Esta direção não tem passagens${dir.weekendDays ? '' : ' neste período'}</div>
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

  document.getElementById('results-panel-title').textContent = stop.name;

  if (dayType === 'weekend' && !dir.weekendCount) {
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
