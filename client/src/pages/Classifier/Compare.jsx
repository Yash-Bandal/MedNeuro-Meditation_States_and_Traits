import React, { useEffect, useState, useMemo } from "react";
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";

import {
    Brain,
    Waves,
    Activity,
    Sparkles,
    BarChart3,
} from "lucide-react";

import EEGB from "../../assets/EEGB.PNG";

import LoadingSpinner from "../../components/UI/LoadingSpinner";

const EEGBandComparison = () => {
      const [loading, setLoading] = useState(true);

        useEffect(() => {
          const timer = setTimeout(() => setLoading(false), 500);
          return () => clearTimeout(timer);
        }, []);


    // =========================================================
    // RAW EEG DATA
    // =========================================================

    const rawData = useMemo(
        () => ({
            HTR: {
                breath: {
                    theta: 0.103,
                    alpha: 0.167,
                    beta: 0.121,
                    gamma: 0.027,
                },
                think: {
                    theta: 0.088,
                    alpha: 0.151,
                    beta: 0.112,
                    gamma: 0.030,
                },
            },

            CTR: {
                breath: {
                    theta: 0.136,
                    alpha: 0.213,
                    beta: 0.143,
                    gamma: 0.034,
                },
                think: {
                    theta: 0.120,
                    alpha: 0.244,
                    beta: 0.146,
                    gamma: 0.033,
                },
            },

            TM: {
                breath: {
                    theta: 0.117,
                    alpha: 0.213,
                    beta: 0.133,
                    gamma: 0.048,
                },
                think: {
                    theta: 0.103,
                    alpha: 0.236,
                    beta: 0.115,
                    gamma: 0.034,
                },
            },

            VIP: {
                breath: {
                    theta: 0.106,
                    alpha: 0.224,
                    beta: 0.142,
                    gamma: 0.064,
                },
                think: {
                    theta: 0.080,
                    alpha: 0.202,
                    beta: 0.107,
                    gamma: 0.038,
                },
            },

            SNY: {
                breath: {
                    theta: 0.111,
                    alpha: 0.146,
                    beta: 0.136,
                    gamma: 0.070,
                },
                think: {
                    theta: 0.112,
                    alpha: 0.206,
                    beta: 0.127,
                    gamma: 0.056,
                },
            },
        }),
        []
    );

    // =========================================================
    // TRANSFORM FOR CHARTS
    // =========================================================

    const thetaData = useMemo(
        () =>
            Object.entries(rawData).map(([group, values]) => ({
                group,
                Breath: values.breath.theta,
                Think: values.think.theta,
            })),
        [rawData]
    );

    const alphaData = useMemo(
        () =>
            Object.entries(rawData).map(([group, values]) => ({
                group,
                Breath: values.breath.alpha,
                Think: values.think.alpha,
            })),
        [rawData]
    );

    const betaData = useMemo(
        () =>
            Object.entries(rawData).map(([group, values]) => ({
                group,
                Breath: values.breath.beta,
                Think: values.think.beta,
            })),
        [rawData]
    );

    const gammaData = useMemo(
        () =>
            Object.entries(rawData).map(([group, values]) => ({
                group,
                Breath: values.breath.gamma,
                Think: values.think.gamma,
            })),
        [rawData]
    );

    if (loading) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <LoadingSpinner size={120} color="border-indigo-600" />
            </div>
        );
    }


    // =========================================================
    // CHART COMPONENT
    // =========================================================

    const ChartCard = ({
        title,
        subtitle,
        icon: Icon,
        data,
        breathColor,
        thinkColor,
    }) => (
        <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">

            <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-xl bg-gray-100">
                    <Icon className="w-5 h-5 text-gray-700" />
                </div>

                <div>
                    <h3 className=" text-lg font-semibold text-gray-900">
                        {title}
                    </h3>

                    <p className="text-sm text-gray-500">
                        {subtitle}
                    </p>
                </div>
            </div>

            <div className="h-[320px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>

                        <CartesianGrid
                            strokeDasharray="3 3"
                            strokeOpacity={0.12}
                        />

                        <XAxis
                            dataKey="group"
                            tick={{ fill: "#64748B", fontSize: 12 }}
                            axisLine={false}
                            tickLine={false}
                        />

                        <YAxis
                            tick={{ fill: "#64748B", fontSize: 11 }}
                            axisLine={false}
                            tickLine={false}
                        />

                        <Tooltip
                            contentStyle={{
                                borderRadius: "14px",
                                border: "1px solid #E2E8F0",
                                backgroundColor: "#fff",
                                fontSize: "12px",
                            }}
                        />

                        <Legend />

                        {/* Breath */}
                        <Bar
                            dataKey="Breath"
                            fill={breathColor}
                            radius={[6, 6, 0, 0]}
                        />

                        {/* Think */}
                        <Bar
                            dataKey="Think"
                            fill={thinkColor}
                            radius={[6, 6, 0, 0]}
                        />

                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );

    return (
        <section className="space-y-10 ">

            {/* ========================================================= */}
            {/* HEADER */}
            {/* ========================================================= */}

            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">

                <div className="flex items-center gap-4 mb-4">

                    {/* <div className="p-3 rounded-2xl bg-indigo-100">
                        <Brain className="w-7 h-7 text-indigo-600" />
                    </div> */}
                       {/* <img className="hidden sm:block h-8 sm:h-14" src={EEGB} alt="EEG" /> */}

                    <div>

                        <h1 className="flex items-center space-x-3  mb-6 text-base sm:text-3xl font-bold text-gray-900">

                            <img className=" h-6 sm:h-8" src={EEGB} alt="EEG" />
                            {/* <img className="hidden max-sm:block h-6 sm:h-14" src={EEGB} alt="EEG" /> */}
                             <p>
                            EEG Spectral State Comparison

                            </p>
                        </h1>

                        <p className="text-sm sm:text-base text-gray-500 mt-1">
                            Comparative EEG band modulation between Meditative Breathing and Cognitive Thinking tasks
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-8">
                {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8"> */}

                    <div className="hidden sm:block bg-indigo-50 border border-indigo-100 rounded-2xl p-5">
                        <p className="text-sm text-indigo-700 font-semibold mb-2">
                            State-Based EEG Dynamics
                        </p>

                        <p className="text-sm text-gray-700 leading-relaxed">
                            The comparison highlights how meditation groups exhibit distinct neural modulation patterns across internally focused states.
                        </p>
                    </div>

                    <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
                        <p className=" text-xs sm:text-sm text-amber-700 font-semibold mb-2">
                            Gamma Dominance
                        </p>

                        <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                            Shoonya practitioners consistently showed elevated gamma activity, indicating stronger integrative awareness dynamics.
                        </p>
                    </div>

                    <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5">
                        <p className="text-xs sm:text-sm text-emerald-700 font-semibold mb-2">
                            Alpha Stabilization
                        </p>

                        <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                            Vipassana and TM groups demonstrated sustained alpha activity associated with calm attentional regulation.
                        </p>
                    </div>

                </div>
            </div>

            {/* ========================================================= */}
            {/* CHART GRID */}
            {/* ========================================================= */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* THETA */}
                <ChartCard
                    title="Theta Band Activity"
                    subtitle="4–8 Hz | Internal attention and meditative absorption"
                    icon={Waves}
                    data={thetaData}
                    breathColor="#00d2ff"
                    thinkColor="#a6efff"
                />

                {/* ALPHA */}
                <ChartCard
                    title="Alpha Band Activity"
                    subtitle="8–13 Hz | Relaxation and calm awareness"
                    icon={Activity}
                    data={alphaData}
                    breathColor="#d87dff"
                    thinkColor="#f2d4ff"
                />

                {/* BETA */}
                <ChartCard
                    title="Beta Band Activity"
                    subtitle="13–30 Hz | Cognitive engagement and processing"
                    icon={BarChart3}
                    data={betaData}
                    breathColor="#7affe4"
                    thinkColor="#e3fcf7"
                />

                {/* GAMMA */}
                <ChartCard
                    title="Gamma Band Activity"
                    subtitle="30–45 Hz | Neural integration and awareness"
                    icon={Sparkles}
                    data={gammaData}
                    breathColor="#ff9698"
                    thinkColor="#f8bdbe"
                />

            </div>

            {/* ========================================================= */}
            {/* FINAL INSIGHTS */}
            {/* ========================================================= */}

            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm ">

                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                    Key EEG Observations
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div className="border border-gray-200 rounded-2xl p-5">
                        <h3 className="text-indigo-700 font-semibold mb-3">
                            Breath vs Think Transition
                        </h3>

                        <p className="text-sm text-gray-700 leading-relaxed">
                            Meditative breathing generally preserved stable alpha and gamma dynamics, while thinking tasks introduced broader variability across groups.
                        </p>
                    </div>

                    <div className="border border-gray-200 rounded-2xl p-5">
                        <h3 className="text-amber-700 font-semibold mb-3">
                            Long-Term Meditation Signatures
                        </h3>

                        <p className="text-sm text-gray-700 leading-relaxed">
                            Shoonya and Vipassana groups maintained elevated higher-frequency activity patterns associated with sustained awareness and attentional integration.
                        </p>
                    </div>

                    <div className="border border-gray-200 rounded-2xl p-5">
                        <h3 className="text-emerald-700 font-semibold mb-3">
                            Regional EEG Differentiation
                        </h3>

                        <p className="text-sm text-gray-700 leading-relaxed">
                            Distinct EEG spectral distributions enabled strong regional classification performance across meditation states and awareness conditions.
                        </p>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default EEGBandComparison;