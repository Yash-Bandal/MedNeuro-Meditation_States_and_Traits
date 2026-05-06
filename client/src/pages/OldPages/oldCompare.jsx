import React, { useEffect, useMemo, useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";

import {
  Brain,
  Activity,
  Waves,
  Sparkles,
  BarChart3,
} from "lucide-react";

import LoadingSpinner from "../components/UI/LoadingSpinner";
import EEGB from "../assets/EEGB.PNG";

const EEGGroupComparison = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  // ======================================================
  // TASK 1 : MEDITATIVE BREATHING
  // ======================================================

  const breathData = useMemo(
    () => [
      {
        group: "HTR",
        theta: 0.103,
        alpha: 0.167,
        beta: 0.121,
        gamma: 0.027,
      },
      {
        group: "CTR",
        theta: 0.136,
        alpha: 0.213,
        beta: 0.143,
        gamma: 0.034,
      },
      {
        group: "TM",
        theta: 0.117,
        alpha: 0.213,
        beta: 0.133,
        gamma: 0.048,
      },
      {
        group: "VIP",
        theta: 0.106,
        alpha: 0.224,
        beta: 0.142,
        gamma: 0.064,
      },
      {
        group: "SNY",
        theta: 0.111,
        alpha: 0.146,
        beta: 0.136,
        gamma: 0.070,
      },
    ],
    []
  );

  // ======================================================
  // TASK 2 : THINK TASK
  // ======================================================

  const thinkData = useMemo(
    () => [
      {
        group: "HTR",
        theta: 0.088,
        alpha: 0.151,
        beta: 0.112,
        gamma: 0.030,
      },
      {
        group: "CTR",
        theta: 0.120,
        alpha: 0.244,
        beta: 0.146,
        gamma: 0.033,
      },
      {
        group: "TM",
        theta: 0.103,
        alpha: 0.236,
        beta: 0.115,
        gamma: 0.034,
      },
      {
        group: "VIP",
        theta: 0.080,
        alpha: 0.202,
        beta: 0.107,
        gamma: 0.038,
      },
      {
        group: "SNY",
        theta: 0.112,
        alpha: 0.206,
        beta: 0.127,
        gamma: 0.056,
      },
    ],
    []
  );

  // ======================================================
  // RADAR INSIGHT DATA
  // ======================================================

  const cognitiveData = useMemo(
    () => [
      {
        metric: "Attention",
        HTR: 62,
        CTR: 70,
        TM: 76,
        VIP: 84,
        SNY: 88,
      },
      {
        metric: "Awareness",
        HTR: 66,
        CTR: 71,
        TM: 79,
        VIP: 86,
        SNY: 92,
      },
      {
        metric: "Relaxation",
        HTR: 72,
        CTR: 75,
        TM: 85,
        VIP: 88,
        SNY: 80,
      },
      {
        metric: "Gamma Integration",
        HTR: 52,
        CTR: 58,
        TM: 70,
        VIP: 82,
        SNY: 95,
      },
    ],
    []
  );

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <LoadingSpinner size={120} color="border-indigo-600" />
      </div>
    );
  }

  const renderBandChart = (data) => (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.15} />

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
            backgroundColor: "#fff",
            borderRadius: "12px",
            border: "1px solid #E2E8F0",
            fontSize: "12px",
          }}
        />

        <Legend />

        <Bar
          dataKey="theta"
          fill="#93C5FD"
          radius={[6, 6, 0, 0]}
          name="Theta"
        />

        <Bar
          dataKey="alpha"
          fill="#A78BFA"
          radius={[6, 6, 0, 0]}
          name="Alpha"
        />

        <Bar
          dataKey="beta"
          fill="#34D399"
          radius={[6, 6, 0, 0]}
          name="Beta"
        />

        <Bar
          dataKey="gamma"
          fill="#F59E0B"
          radius={[6, 6, 0, 0]}
          name="Gamma"
        />
      </BarChart>
    </ResponsiveContainer>
  );

  return (
    <section className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">

      {/* ================= HEADER ================= */}
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-3">
          <img className="h-8" src={EEGB} alt="EEG" />

          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              EEG Spectral Group Analysis
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Relative EEG band power comparison across meditation groups
            </p>
          </div>
        </div>
      </div>

      {/* ====================================================== */}
      {/* BREATH TASK */}
      {/* ====================================================== */}

      <div className="mb-14">

        <div className="flex items-center gap-3 mb-5">
          <Waves className="text-indigo-600" size={22} />

          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Meditative Breath Task
            </h3>

            <p className="text-sm text-gray-500">
              Relative spectral power across meditation groups during breath awareness
            </p>
          </div>
        </div>

        <div className="h-[420px] rounded-2xl border border-gray-200 bg-white p-5">
          {renderBandChart(breathData)}
        </div>
      </div>

      {/* ====================================================== */}
      {/* THINK TASK */}
      {/* ====================================================== */}

      <div className="mb-14">

        <div className="flex items-center gap-3 mb-5">
          <Brain className="text-emerald-600" size={22} />

          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Cognitive Think Task
            </h3>

            <p className="text-sm text-gray-500">
              Relative EEG dynamics during internally focused thinking activity
            </p>
          </div>
        </div>

        <div className="h-[420px] rounded-2xl border border-gray-200 bg-white p-5">
          {renderBandChart(thinkData)}
        </div>
      </div>

      {/* ====================================================== */}
      {/* RADAR ANALYSIS */}
      {/* ====================================================== */}

      <div className="rounded-2xl border border-gray-200 bg-white p-6 mb-12">

        <div className="flex items-center gap-3 mb-5">
          <Activity className="text-sky-500" />

          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Cognitive State Indices
            </h3>

            <p className="text-sm text-gray-500">
              Comparative neural engagement metrics across meditation groups
            </p>
          </div>
        </div>

        <ResponsiveContainer width="100%" height={420}>
          <RadarChart outerRadius={140} data={cognitiveData}>

            <PolarGrid />

            <PolarAngleAxis
              dataKey="metric"
              stroke="#64748B"
            />

            <PolarRadiusAxis
              angle={30}
              domain={[0, 100]}
            />

            <Radar
              name="HTR"
              dataKey="HTR"
              stroke="#60A5FA"
              fill="#60A5FA"
              fillOpacity={0.25}
            />

            <Radar
              name="CTR"
              dataKey="CTR"
              stroke="#CBD5E1"
              fill="#CBD5E1"
              fillOpacity={0.20}
            />

            <Radar
              name="TM"
              dataKey="TM"
              stroke="#A78BFA"
              fill="#A78BFA"
              fillOpacity={0.25}
            />

            <Radar
              name="VIP"
              dataKey="VIP"
              stroke="#34D399"
              fill="#34D399"
              fillOpacity={0.25}
            />

            <Radar
              name="SNY"
              dataKey="SNY"
              stroke="#F59E0B"
              fill="#F59E0B"
              fillOpacity={0.25}
            />

            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* ====================================================== */}
      {/* KEY INSIGHTS */}
      {/* ====================================================== */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Insight 1 */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-xl bg-amber-100">
              <Sparkles className="w-5 h-5 text-amber-600" />
            </div>

            <h4 className="font-semibold text-amber-700">
              Gamma Dominance
            </h4>
          </div>

          <p className="text-sm text-gray-700 leading-relaxed">
            Shoonya (SNY) consistently exhibited the highest gamma activity,
            suggesting strong integrative awareness and long-term cortical adaptation.
          </p>
        </div>

        {/* Insight 2 */}
        <div className="bg-violet-50 border border-violet-200 rounded-2xl p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-xl bg-violet-100">
              <Waves className="w-5 h-5 text-violet-600" />
            </div>

            <h4 className="font-semibold text-violet-700">
              Alpha Relaxation Patterns
            </h4>
          </div>

          <p className="text-sm text-gray-700 leading-relaxed">
            Vipassana (VIP) and TM groups demonstrated elevated alpha power,
            reflecting relaxed attention and internalized awareness states.
          </p>
        </div>

        {/* Insight 3 */}
        <div className="bg-sky-50 border border-sky-200 rounded-2xl p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-xl bg-sky-100">
              <BarChart3 className="w-5 h-5 text-sky-600" />
            </div>

            <h4 className="font-semibold text-sky-700">
              Regional Classification
            </h4>
          </div>

          <p className="text-sm text-gray-700 leading-relaxed">
            EEG spectral features enabled strong regional classification,
            supporting structured neural differentiation across awareness states.
          </p>
        </div>

      </div>
    </section>
  );
};

export default React.memo(EEGGroupComparison);