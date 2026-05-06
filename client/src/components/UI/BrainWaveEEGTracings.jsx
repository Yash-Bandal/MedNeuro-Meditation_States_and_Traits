// src/components/BrainWaveEEGTracings.jsx
import React, {
  useEffect,
  useRef,
  useCallback,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";
import { RefreshCw } from "lucide-react";

/* ─── Band configs ──────────────────────────────────────────────────── */
const BANDS = [
  { name: "Gamma", greek: "γ", range: "30–100+ Hz", color: "#8B5CF6", fMin: 30, fMax: 80, amp: 0.4, noise: 0.5, harmonics: 8 },
  { name: "Beta", greek: "β", range: "13–30 Hz", color: "#3B82F6", fMin: 14, fMax: 28, amp: 0.7, noise: 0.25, harmonics: 6 },
  { name: "Alpha", greek: "α", range: "8–13 Hz", color: "#10B981", fMin: 8, fMax: 12, amp: 1.0, noise: 0.1, harmonics: 4 },
  { name: "Theta", greek: "θ", range: "4–7 Hz", color: "#F59E0B", fMin: 4, fMax: 7, amp: 1.0, noise: 0.12, harmonics: 3 },
  { name: "Delta", greek: "δ", range: "0.5–4 Hz", color: "#EF4444", fMin: 0.5, fMax: 3, amp: 1.0, noise: 0.08, harmonics: 2 },
];

const DURATION = 4;    // seconds
const SAMPLE_RATE = 300;  // samples/s
const N = DURATION * SAMPLE_RATE;

/* ─── Signal generator (additive sine synthesis) ────────────────────── */
function generateEEG({ fMin, fMax, amp, noise, harmonics }) {
  const freqs = [];
  const phases = [];
  const amps = [];

  for (let h = 0; h < harmonics; h++) {
    freqs.push(fMin + Math.random() * (fMax - fMin));
    phases.push(Math.random() * 2 * Math.PI);
    amps.push(0.4 + Math.random() * 0.6);
  }

  const data = new Float32Array(N + 1);
  for (let i = 0; i <= N; i++) {
    const t = i / SAMPLE_RATE;
    let v = 0;
    for (let h = 0; h < harmonics; h++) {
      v += amps[h] * Math.sin(2 * Math.PI * freqs[h] * t + phases[h]);
    }
    v /= harmonics;
    v += (Math.random() - 0.5) * noise * 2;
    data[i] = v * amp;
  }
  return data;
}

/* ─── Canvas helpers ────────────────────────────────────────────────── */
function setupCanvas(canvas) {
  const dpr = window.devicePixelRatio || 1;
  const w = canvas.offsetWidth;
  const h = canvas.offsetHeight;
  canvas.width = w * dpr;
  canvas.height = h * dpr;
  const ctx = canvas.getContext("2d");
  ctx.scale(dpr, dpr);
  return { ctx, w, h };
}

function drawBaseline(ctx, w, h) {
  const mid = h / 2;
  ctx.strokeStyle = "rgba(148,163,184,0.2)";
  ctx.lineWidth = 0.5;
  ctx.setLineDash([3, 3]);
  ctx.beginPath();
  ctx.moveTo(0, mid);
  ctx.lineTo(w, mid);
  ctx.stroke();
  ctx.setLineDash([]);
}

// Instant full draw (used on resize)
function drawWave(canvas, data, color) {
  if (!canvas || !data) return;
  const { ctx, w, h } = setupCanvas(canvas);
  const mid = h / 2;
  const scale = mid * 0.85;

  ctx.clearRect(0, 0, w, h);
  drawBaseline(ctx, w, h);

  ctx.strokeStyle = color;
  ctx.lineWidth = 1.6;
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.beginPath();
  for (let i = 0; i <= N; i++) {
    const x = (i / N) * w;
    const y = mid - data[i] * scale;
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  }
  ctx.stroke();
}

// Animated left-to-right sweep draw
function animateWave(canvas, data, color, durationMs = 900) {
  if (!canvas || !data) return () => { };
  const { ctx, w, h } = setupCanvas(canvas);
  const mid = h / 2;
  const scale = mid * 0.85;

  let startTime = null;
  let rafId = null;

  function frame(ts) {
    if (!startTime) startTime = ts;
    const progress = Math.min((ts - startTime) / durationMs, 1);
    const drawUpTo = Math.floor(progress * N);

    ctx.clearRect(0, 0, w, h);
    drawBaseline(ctx, w, h);

    ctx.strokeStyle = color;
    ctx.lineWidth = 1.6;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.beginPath();
    for (let i = 0; i <= drawUpTo; i++) {
      const x = (i / N) * w;
      const y = mid - data[i] * scale;
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.stroke();

    if (progress < 1) rafId = requestAnimationFrame(frame);
  }

  rafId = requestAnimationFrame(frame);
  return () => cancelAnimationFrame(rafId);
}

/* ─── Single wave row ───────────────────────────────────────────────── */
const WaveRow = forwardRef(({ band, isLast }, ref) => {
  const canvasRef = useRef(null);
  const dataRef = useRef(null);
  const cancelRef = useRef(null);

  const refresh = useCallback(() => {
    if (cancelRef.current) cancelRef.current();
    dataRef.current = generateEEG(band);
    cancelRef.current = animateWave(canvasRef.current, dataRef.current, band.color, 1500);
  }, [band]);

  // Expose refresh() to parent
  useImperativeHandle(ref, () => ({ refresh }), [refresh]);

  // Initial draw
  useEffect(() => {
    dataRef.current = generateEEG(band);
    cancelRef.current = animateWave(canvasRef.current, dataRef.current, band.color, 1500);
    return () => { if (cancelRef.current) cancelRef.current(); };
  }, [band]);

  // Instant redraw on resize
  useEffect(() => {
    const ro = new ResizeObserver(() => {
      if (dataRef.current) drawWave(canvasRef.current, dataRef.current, band.color);
    });
    if (canvasRef.current) ro.observe(canvasRef.current);
    return () => ro.disconnect();
  }, [band.color]);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between px-1 mb-0.5">
        <div className="flex items-center gap-2">
          <span
            className="inline-block w-2 h-2 rounded-full flex-shrink-0"
            style={{ background: band.color }}
          />
          <span
            style={{ fontFamily: "'DM Mono', monospace" }}
            className="text-xs font-medium text-gray-800 "
          >
            {band.greek} {band.name}
          </span>
        </div>
        <span
          style={{ fontFamily: "'DM Mono', monospace" }}
          className="text-[10px] text-gray-400 "
        >
          {band.range}
        </span>
      </div>

      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "72px", display: "block" }}
      />

      {!isLast && (
        <div className="w-full h-px bg-gray-100 mt-1 mb-1" />
      )}
    </div>
  );
});

WaveRow.displayName = "WaveRow";

/* ─── Main component ────────────────────────────────────────────────── */
const BrainWaveEEGTracings = () => {
  const [spinning, setSpinning] = useState(false);
  // Stable refs created once — one per band
  const rowRefs = useRef(BANDS.map(() => React.createRef()));

  const refreshAll = useCallback(() => {
    rowRefs.current.forEach((r) => r.current?.refresh());
  }, []);

  // Auto-refresh every 5s
//   useEffect(() => {
//     const id = setInterval(refreshAll, 10000);
//     return () => clearInterval(id);
//   }, [refreshAll]);

  const handleRefresh = useCallback(() => {
    setSpinning(true);
    refreshAll();
    setTimeout(() => setSpinning(false), 600);
  }, [refreshAll]);

  return (
    <div className="w-full bg-white  rounded-2xl border border-gray-100 p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <p
            style={{ fontFamily: "'DM Mono', monospace" }}
            className="text-[10px] uppercase tracking-widest text-gray-400  mb-0.5"
          >
            Live simulation 
            {/* Live simulation · auto-refresh 5s */}
          </p>
          <h2 className="text-sm font-medium text-gray-900 ">
            Brain Waves — EEG Tracings
          </h2>
        </div>

        <button
          onClick={handleRefresh}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          <RefreshCw
            size={12}
            className={`text-gray-500 dark:text-gray-400 transition-transform duration-500 ${spinning ? "rotate-180" : ""
              }`}
          />
          <span
            style={{ fontFamily: "'DM Mono', monospace" }}
            className="text-[11px] text-gray-500 dark:text-gray-400"
          >
            Refresh
          </span>
        </button>
      </div>

      {/* Wave rows */}
      <div className="flex flex-col">
        {BANDS.map((band, i) => (
          <WaveRow
            key={band.name}
            ref={rowRefs.current[i]}
            band={band}
            isLast={i === BANDS.length - 1}
          />
        ))}
      </div>

      {/* Time axis */}
      <div
        style={{ fontFamily: "'DM Mono', monospace" }}
        className="flex justify-between px-1 mt-2"
      >
        {[0, 1, 2, 3, 4].map((t) => (
          <span key={t} className="text-[10px] text-gray-400 dark:text-gray-500">
            {t}s
          </span>
        ))}
      </div>
      <p
        style={{ fontFamily: "'DM Mono', monospace" }}
        className="text-center text-[10px] text-gray-400 dark:text-gray-500 mt-0.5"
      >
        Time (seconds)
      </p>
    </div>
  );
};

export default React.memo(BrainWaveEEGTracings);