// src/components/BrainWaveEEGTracings.jsx
import React, { useMemo, useEffect, useState, useCallback } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { interpolateBasis } from "d3-interpolate";
import { RefreshCw } from "lucide-react";

/* ─── Wave data generator ───────────────────────────────────────────── */
const generateWaveData = (totalSeconds, density, amplitudeScale, irregularity = 0.5) => {
  const raw = [];
  let t = 0;
  let v = 0;
  while (t <= totalSeconds + 1) {
    raw.push({ time: t, wave: v + (Math.random() - 0.5) * 0.1 });
    v = (Math.random() - 0.5) * amplitudeScale;
    t += (1 / density) * (1 + (Math.random() - 0.5) * irregularity * 2);
  }
  const pts = totalSeconds * 60;
  const interp = interpolateBasis(raw.map((d) => d.wave));
  return Array.from({ length: pts + 1 }, (_, i) => {
    const frac = i / pts;
    const time = frac * totalSeconds;
    if (time > totalSeconds) return null;
    return { time: parseFloat(time.toFixed(2)), wave: interp(frac) * amplitudeScale };
  }).filter(Boolean);
};

/* ─── Band configs ──────────────────────────────────────────────────── */
const BANDS = [
  { name: "Gamma",  greek: "γ", range: "30–100+ Hz", color: "#8B5CF6", density: 80, amplitude: 0.8 },
  { name: "Beta",   greek: "β", range: "13–30 Hz",   color: "#3B82F6", density: 45, amplitude: 1.3 },
  { name: "Alpha",  greek: "α", range: "8–13 Hz",    color: "#10B981", density: 28, amplitude: 1.8 },
  { name: "Theta",  greek: "θ", range: "4–8 Hz",     color: "#F59E0B", density: 17, amplitude: 2.5 },
  { name: "Delta",  greek: "δ", range: "0.5–4 Hz",   color: "#EF4444", density: 6,  amplitude: 3.5 },
];

/* ─── Custom tooltip ────────────────────────────────────────────────── */
const CustomTooltip = ({ active, payload, label, color, bandName }) => {
  if (!active || !payload?.length) return null;
  return (
    <div
      style={{ borderLeft: `3px solid ${color}` }}
      className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 shadow-lg text-xs"
    >
      <p className="font-medium text-gray-900 dark:text-gray-100 mb-1">{bandName}</p>
      <p className="text-gray-500 dark:text-gray-400">t = {label}s</p>
      <p className="text-gray-700 dark:text-gray-300">
        μV: <span className="font-medium">{Number(payload[0].value).toFixed(3)}</span>
      </p>
    </div>
  );
};

/* ─── Single wave row ───────────────────────────────────────────────── */
const WaveRow = React.memo(({ name, greek, range, data, color, isLast }) => (
  <div className="w-full">
    {/* Label row */}
    <div className="flex items-center justify-between px-1 mb-0.5">
      <div className="flex items-center gap-2">
        <span
          className="inline-block w-2 h-2 rounded-full flex-shrink-0"
          style={{ background: color }}
        />
        <span
          style={{ fontFamily: "'DM Mono', monospace" }}
          className="text-xs font-medium text-gray-800 dark:text-gray-200"
        >
          {greek} {name}
        </span>
      </div>
      <span
        style={{ fontFamily: "'DM Mono', monospace" }}
        className="text-[10px] text-gray-400 dark:text-gray-500"
      >
        {range}
      </span>
    </div>

    {/* Chart */}
    <div className="w-full h-[72px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 4, right: 8, left: 0, bottom: isLast ? 16 : 4 }}>
          <YAxis hide domain={[-4, 4]} />
          {isLast ? (
            <XAxis
              dataKey="time"
              type="number"
              domain={[0, 4]}
              ticks={[0, 1, 2, 3, 4]}
              tick={{ fill: "#94a3b8", fontSize: 10, fontFamily: "'DM Mono', monospace" }}
              axisLine={{ stroke: "#e2e8f0" }}
              tickLine={false}
              label={{
                value: "Time (seconds)",
                position: "insideBottom",
                offset: -2,
                fontSize: 10,
                fill: "#94a3b8",
                fontFamily: "'DM Mono', monospace",
              }}
            />
          ) : (
            <XAxis dataKey="time" hide />
          )}
          <Tooltip
            content={<CustomTooltip color={color} bandName={`${greek} ${name}`} />}
            cursor={{ stroke: color, strokeWidth: 1, strokeDasharray: "3 3" }}
          />
          <Line
            type="monotone"
            dataKey="wave"
            stroke={color}
            strokeWidth={1.8}
            dot={false}
            connectNulls
            isAnimationActive
            animationBegin={0}
            animationDuration={1200}
            animationEasing="ease-in-out"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>

    {/* Divider */}
    {!isLast && (
      <div className="w-full h-px bg-gray-100 dark:bg-gray-800 mt-1" />
    )}
  </div>
));

/* ─── Main component ────────────────────────────────────────────────── */
const BrainWaveEEGTracings = () => {
  const [waves, setWaves] = useState([]);
  const [spinning, setSpinning] = useState(false);

  const generate = useMemo(
    () => () =>
      BANDS.map((b) => ({
        ...b,
        data: generateWaveData(4, b.density, b.amplitude),
      })),
    []
  );

  useEffect(() => { setWaves(generate()); }, [generate]);

  useEffect(() => {
    const id = setInterval(() => setWaves(generate()), 5000);
    return () => clearInterval(id);
  }, [generate]);

  const handleRefresh = useCallback(() => {
    setSpinning(true);
    setWaves(generate());
    setTimeout(() => setSpinning(false), 600);
  }, [generate]);

  const waveRows = useMemo(
    () =>
      waves.map((w, i) => (
        <WaveRow key={w.name} {...w} isLast={i === waves.length - 1} />
      )),
    [waves]
  );

  return (
    <div className="w-full bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <p
            style={{ fontFamily: "'DM Mono', monospace" }}
            className="text-[10px] uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-0.5"
          >
            Live simulation · auto-refresh 4s
          </p>
          <h2 className="text-sm font-medium text-gray-900 dark:text-gray-100">
            Brain Waves — EEG Tracings
          </h2>
        </div>

        <button
          onClick={handleRefresh}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          <RefreshCw
            size={12}
            className={`text-gray-500 dark:text-gray-400 transition-transform duration-500 ${
              spinning ? "rotate-180" : ""
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

      {/* Waves */}
      <div className="flex flex-col gap-1">
        {waveRows}
      </div>

      {/* Caption */}
      {/* <p
        style={{ fontFamily: "'DM Mono', monospace" }}
        className="mt-4 text-center text-[10px] text-gray-400 dark:text-gray-600"
      >
        Figure 3. Different Brain Rhythms (auto-updating simulation)
      </p> */}
    </div>
  );
};

export default React.memo(BrainWaveEEGTracings);
