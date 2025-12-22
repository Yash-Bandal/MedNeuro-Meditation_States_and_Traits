// import React, { useMemo } from "react";
// import {
//     LineChart,
//     Line,
//     XAxis,
//     YAxis,
//     ResponsiveContainer,
//     Tooltip,
// } from "recharts";
// import { interpolateBasis } from "d3-interpolate";

// /* ---------------------------- Wave Data Generator ---------------------------- */
// const generateIrregularWaveData = (
//     totalSeconds,
//     density,
//     amplitudeScale,
//     irregularity = 0.3
// ) => {
//     const data = [];
//     let currentTime = 0;
//     let currentValue = 0;

//     while (currentTime <= totalSeconds + 1) {
//         data.push({ time: currentTime, wave: currentValue + (Math.random() - 0.5) * 0.1 });
//         const nextValue = (Math.random() - 0.5) * amplitudeScale;
//         const timeStep =
//             (1 / density) * (1 + (Math.random() - 0.5) * irregularity * 2);

//         currentTime += timeStep;
//         currentValue = nextValue;
//     }

//     const interpolatedData = [];
//     const numSmoothPoints = totalSeconds * 60; // reduced from 120 → faster
//     const waves = data.map((d) => d.wave);
//     const interpolator = interpolateBasis(waves);

//     for (let i = 0; i <= numSmoothPoints; i++) {
//         const t = i / numSmoothPoints;
//         const actualTime = t * totalSeconds;
//         if (actualTime > totalSeconds) break;

//         interpolatedData.push({
//             time: parseFloat(actualTime.toFixed(2)),
//             wave: interpolator(t) * amplitudeScale,
//         });
//     }

//     return interpolatedData;
// };

// /* ----------------------------- Wave Configs ----------------------------- */
// const waveConfigs = [
//     { name: "Gamma (γ)", range: "30–100+ Hz", color: "#8B5CF6", density: 80, amplitude: 0.8 },
//     { name: "Beta (β)", range: "13–30 Hz", color: "#3B82F6", density: 45, amplitude: 1.3 },
//     { name: "Alpha (α)", range: "8–13 Hz", color: "#10B981", density: 28, amplitude: 1.8 },
//     { name: "Theta (θ)", range: "4–8 Hz", color: "#F59E0B", density: 17, amplitude: 2.5 },
//     { name: "Delta (δ)", range: "0.5–4 Hz", color: "#EF4444", density: 6, amplitude: 3.5 },
// ];

// /* ----------------------------- Tooltip ----------------------------- */
// const CustomTooltip = ({ active, payload, label, waveName }) => {
//     if (active && payload && payload.length) {
//         return (
//             <div className="p-2 bg-white/90 border border-gray-300 rounded-md shadow text-xs text-gray-800">
//                 <p className="font-semibold text-gray-900">{waveName}</p>
//                 <p>Time: {label}s</p>
//                 <p>Value: {payload[0].value.toFixed(2)}</p>
//             </div>
//         );
//     }
//     return null;
// };

// /* ----------------------------- Single Chart ----------------------------- */
// const SingleWaveChart = ({ name, range, data, strokeColor, isLast }) => (
//     <div className={`w-full ${!isLast ? "mb-5" : ""}`}>
//         <div className="flex justify-between items-center px-4 mb-1">
//             <h3 className="text-sm md:text-base font-semibold text-gray-800">{name}</h3>
//             <span className="text-xs font-medium text-gray-600">{range}</span>
//         </div>

//         <div className="h-24 w-full relative">
//             <ResponsiveContainer width="100%" height="100%">
//                 <LineChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
//                     <YAxis hide domain={[-3, 3]} />
//                     {isLast && (
//                         <XAxis
//                             dataKey="time"
//                             type="number"
//                             domain={[0, 4]}
//                             ticks={[0, 1, 2, 3, 4]}
//                             tick={{ fill: "#475569", fontSize: 11 }}
//                             axisLine={{ stroke: "#94a3b8" }}
//                             label={{ value: "Time (Secs.)", position: "bottom", fontSize: 12 }}
//                         />
//                     )}
//                     <Tooltip content={<CustomTooltip waveName={name.split(" ")[0]} />} />
//                     <Line
//                         type="monotone"
//                         dataKey="wave"
//                         stroke={strokeColor}
//                         strokeWidth={2}
//                         dot={false}
//                         isAnimationActive={false}
//                         connectNulls
//                     />
//                 </LineChart>
//             </ResponsiveContainer>

//             {!isLast && (
//                 <div className="absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
//             )}
//         </div>
//     </div>
// );

// /* ----------------------------- Main Component ----------------------------- */
// const BrainWaveEEGTracings = () => {
//     // ✅ Generate once (memoized)
//     const waveDataList = useMemo(() => {
//         return waveConfigs.map(config => ({
//             ...config,
//             data: generateIrregularWaveData(4, config.density, config.amplitude, 0.5),
//         }));
//     }, []); // empty deps → only run once on mount

//     return (
//         <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 w-full max-w-5xl mx-auto">
//             <h2 className="text-center text-xl md:text-2xl font-bold mb-6 text-gray-900">
//                 Brain Waves: EEG Tracings
//             </h2>

//             <div className="space-y-5">
//                 {waveDataList.map((config, index) => (
//                     <SingleWaveChart
//                         key={config.name}
//                         name={config.name}
//                         range={config.range}
//                         data={config.data}
//                         strokeColor={config.color}
//                         isLast={index === waveDataList.length - 1}
//                     />
//                 ))}
//             </div>

//             <div className="mt-8 text-center text-sm font-medium text-gray-700">
//                 Figure 3. Different Brain Rhythms (Interactive Simulation)
//             </div>
//         </div>
//     );
// };

// export default BrainWaveEEGTracings;









import React, { useMemo, useEffect, useState } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Tooltip,
} from "recharts";
import { interpolateBasis } from "d3-interpolate";

/* ---------------------------- Wave Data Generator ---------------------------- */
const generateIrregularWaveData = (
    totalSeconds,
    density,
    amplitudeScale,
    irregularity = 0.3
) => {
    const data = [];
    let currentTime = 0;
    let currentValue = 0;

    while (currentTime <= totalSeconds + 1) {
        data.push({ time: currentTime, wave: currentValue + (Math.random() - 0.5) * 0.1 });
        const nextValue = (Math.random() - 0.5) * amplitudeScale;
        const timeStep =
            (1 / density) * (1 + (Math.random() - 0.5) * irregularity * 2);

        currentTime += timeStep;
        currentValue = nextValue;
    }

    const interpolatedData = [];
    const numSmoothPoints = totalSeconds * 60; // lighter density
    const waves = data.map((d) => d.wave);
    const interpolator = interpolateBasis(waves);

    for (let i = 0; i <= numSmoothPoints; i++) {
        const t = i / numSmoothPoints;
        const actualTime = t * totalSeconds;
        if (actualTime > totalSeconds) break;

        interpolatedData.push({
            time: parseFloat(actualTime.toFixed(2)),
            wave: interpolator(t) * amplitudeScale,
        });
    }

    return interpolatedData;
};

/* ----------------------------- Wave Configs ----------------------------- */
const waveConfigs = [
    { name: "Gamma (γ)", range: "30–100+ Hz", color: "#8B5CF6", density: 80, amplitude: 0.8 },
    { name: "Beta (β)", range: "13–30 Hz", color: "#3B82F6", density: 45, amplitude: 1.3 },
    { name: "Alpha (α)", range: "8–13 Hz", color: "#10B981", density: 28, amplitude: 1.8 },
    { name: "Theta (θ)", range: "4–8 Hz", color: "#F59E0B", density: 17, amplitude: 2.5 },
    { name: "Delta (δ)", range: "0.5–4 Hz", color: "#EF4444", density: 6, amplitude: 3.5 },
];

/* ----------------------------- Tooltip ----------------------------- */
const CustomTooltip = ({ active, payload, label, waveName }) => {
    if (active && payload && payload.length) {
        return (
            <div className="p-2 bg-white/90 border border-gray-300 rounded-md shadow text-xs text-gray-800 ">
                {/* <p className="font-semibold text-gray-900 dark:text-white">{waveName}</p> */}
                <p className="font-semibold text-white dark:text-white">{waveName}</p>
                <p>Time: {label}s</p>
                <p>Value: {payload[0].value.toFixed(2)}</p>
            </div>
        );
    }
    return null;
};

/* ----------------------------- Single Chart ----------------------------- */
const SingleWaveChart = React.memo(({ name, range, data, strokeColor, isLast }) => (
    <div className={`w-full ${!isLast ? "mb-5" : ""}  dark:bg-blue-950`}>
    {/*  <div className={`w-full ${!isLast ? "mb-5" : ""}  dark:bg-[]`}> */}

        <div className="flex justify-between items-center px-4 mb-1">
            <h3 className="text-sm md:text-base font-semibold text-gray-800 dark:text-gray-200">{name}</h3>
            <span className="text-xs font-medium text-gray-600">{range}</span>
        </div>

        <div className="h-24 w-full relative ">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                    <YAxis hide domain={[-3, 3]} />
                    {isLast && (
                        <XAxis
                            dataKey="time"
                            type="number"
                            domain={[0, 4]}
                            ticks={[0, 1, 2, 3, 4]}
                            tick={{ fill: "#475569", fontSize: 11 }}
                            axisLine={{ stroke: "#94a3b8" }}
                            label={{ value: "Time (Secs.)", position: "bottom", fontSize: 12 }}
                        />
                    )}
                    <Tooltip content={<CustomTooltip waveName={name.split(" ")[0]} />} />
                    <Line
                        type="monotone"
                        dataKey="wave"
                        stroke={strokeColor}
                        strokeWidth={2}
                        dot={false}
                        connectNulls
                        isAnimationActive={true}
                        animationBegin={0}
                        animationDuration={1500}
                        animationEasing="ease-in-out"
                    />
                </LineChart>
            </ResponsiveContainer>

            {/* {!isLast && (
                <div className="absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
            )} */}
        </div>
    </div>
));

/* ----------------------------- Main Component ----------------------------- */
const BrainWaveEEGTracings = () => {
    const [waveDataList, setWaveDataList] = useState([]);

    // Memoized generator
    const generateAllWaves = useMemo(
        () => () =>
            waveConfigs.map((config) => ({
                ...config,
                data: generateIrregularWaveData(4, config.density, config.amplitude, 0.5),
            })),
        []
    );

    // Initialize waves on mount
    useEffect(() => {
        setWaveDataList(generateAllWaves());
    }, [generateAllWaves]);

    // Auto refresh every 5s
    useEffect(() => {
        const interval = setInterval(() => {
            setWaveDataList(generateAllWaves());
        }, 5000);
        return () => clearInterval(interval);
    }, [generateAllWaves]);

    return (
        <div className="bg-white dark:bg-indigo-950  rounded-2xl shadow-xl border border-gray-200 dark:border-gray-950 p-6 w-full max-w-5xl mx-auto">
            <div className="flex justify-between items-center mb-6 dark:text-white">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                    Brain Waves: EEG Tracings
                </h2>

                <button
                    onClick={() => setWaveDataList(generateAllWaves())}
                    className="px-3 py-1.5 text-sm font-semibold bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition-colors"
                >
                    Refresh Waves
                </button>
            </div>

            <div className="space-y-5 dark:text-white">
                {waveDataList.map((config, index) => (
                    <SingleWaveChart
                        key={config.name}
                        name={config.name}
                        range={config.range}
                        data={config.data}
                        strokeColor={config.color}
                        isLast={index === waveDataList.length - 1}
                    />
                ))}
            </div>

            <div className="mt-8 text-center text-sm font-medium text-gray-700">
                Figure 3. Different Brain Rhythms (Auto-Updating Simulation)
            </div>
        </div>
    );
};

export default BrainWaveEEGTracings;
