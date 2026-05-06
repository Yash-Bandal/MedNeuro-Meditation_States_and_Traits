import React from "react";
import { useEffect, useMemo, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";
import { Brain, BarChart3, Activity , Waves, Sparkles } from "lucide-react";


import LoadingSpinner from "../components/LoadingSpinner";

import EEGB from "../assets/EEGB.png";

const EEGGroupComparison = () => {


  
  // === UPDATED DEMO DATA ===
  const groupPerformance = useMemo(
    () => [
      { group: "HTR (Himalayan)", accuracy: 74.3, alpha: 15.2, gamma: 6.8 },
      { group: "CTR (Control)", accuracy: 61.4, alpha: 10.5, gamma: 4.1 },
      { group: "TM (Transcendental)", accuracy: 69.8, alpha: 16.1, gamma: 7.2 },
      { group: "VIP (Vipassana)", accuracy: 71.6, alpha: 13.5, gamma: 5.9 },
      { group: "SNY (Shoonya)", accuracy: 67.9, alpha: 12.2, gamma: 6.1 },
    ],
    []
  );

  // Additional demo data for cognitive performance radar chart
  const cognitiveData = useMemo(
    () => [
      { metric: "Focus", HTR: 82, CTR: 65, TM: 79, VIP: 80, SNY: 77 },
      { metric: "Calmness", HTR: 88, CTR: 70, TM: 83, VIP: 85, SNY: 84 },
      { metric: "Attention", HTR: 80, CTR: 66, TM: 78, VIP: 79, SNY: 76 },
    ],
    []
  );


    const [loading, setLoading] = useState(true);
  
    // simulate 1-second loader
    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 500);
      return () => clearTimeout(timer);
    }, []);
  


  // ===== LOADER UI =====
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center ">
        <LoadingSpinner size={120} color="border-indigo-600" />
      </div>
    );
  }

  return (
    // <section className=" p-8">
  <section className="bg-white dark:from-gray-950 dark:to-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 p-8"> 
      {/* Header */}
      <div className="flex items-center justify-between mb-8 ml-2">
        <div className="flex items-center gap-3">
          {/* <Brain className="w-8 h-8 text-indigo-600 dark:text-indigo-400" /> */}

          <img className="h-8" src={EEGB} alt="Brain ico" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Meditation Group EEG Comparison
          </h2>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 italic">
          Demo data — Accuracy & EEG Power Comparison
        </p>
      </div>

      {/* ======= BAR CHART ======= */}
      <div className="h-96 mb-12">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={groupPerformance}>
            <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.3} />
            <XAxis dataKey="group" tick={{ fill: "#999", fontSize: 12 }} interval={0} />
            <YAxis domain={[0, 100]} />
            <Tooltip
              cursor={{ fill: "rgba(99,102,241,0.05)" }}
              contentStyle={{
                backgroundColor: "rgba(255,255,255,0.9)",
                borderRadius: "10px",
                border: "1px solid #ddd",
              }}
            />
            <Legend />
            <Bar
              dataKey="accuracy"
              fill="#93C5FD"
              radius={[8, 8, 0, 0]}
              name="Accuracy (%)"
            />

            <Bar
              dataKey="alpha"
              fill="#C4B5FD"
              radius={[8, 8, 0, 0]}
              name="Alpha Power (µV²)"
            />

            <Bar
              dataKey="gamma"
              fill="#86EFAC"
              radius={[8, 8, 0, 0]}
              name="Gamma Power (µV²)"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* ======= RADAR CHART ======= */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm mb-10">
        <div className="flex items-center gap-3 mb-4">
          <Activity className="text-sky-500" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            Cognitive State Indices
          </h3>
        </div>

        <ResponsiveContainer width="100%" height={400}>
          <RadarChart outerRadius={130} data={cognitiveData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="metric" stroke="#94A3B8" />
            <PolarRadiusAxis angle={30} domain={[0, 100]} />

            <Radar
              name="HTR"
              dataKey="HTR"
              stroke="#60A5FA"
              fill="#60A5FA"
              fillOpacity={0.35}
            />

            <Radar
              name="CTR"
              dataKey="CTR"
              stroke="#CBD5E1"
              fill="#CBD5E1"
              fillOpacity={0.25}
            />

            <Radar
              name="TM"
              dataKey="TM"
              stroke="#A78BFA"
              fill="#A78BFA"
              fillOpacity={0.3}
            />

            <Radar
              name="VIP"
              dataKey="VIP"
              stroke="#67E8F9"
              fill="#67E8F9"
              fillOpacity={0.3}
            />

            <Radar
              name="SNY"
              dataKey="SNY"
              stroke="#86EFAC"
              fill="#86EFAC"
              fillOpacity={0.3}
            />

            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* ======= SUMMARY INSIGHTS ======= */}


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <div className="bg-sky-50 dark:bg-sky-900/20 border border-sky-100 dark:border-sky-800 p-5 rounded-2xl hover:scale-[1.02] transition-all shadow-sm">

          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-xl bg-sky-100 dark:bg-sky-800/40">
              <Brain className="w-5 h-5 text-sky-600 dark:text-sky-300" />
            </div>

            <p className="text-sky-700 dark:text-sky-300 font-semibold">
              Highest Accuracy
            </p>
          </div>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Himalayan Tradition (HTR) reached <b>74.3%</b> classification accuracy.
          </p>
        </div>

        <div className="bg-violet-50 dark:bg-violet-900/20 border border-violet-100 dark:border-violet-800 p-5 rounded-2xl hover:scale-[1.02] transition-all shadow-sm">

          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-xl bg-violet-100 dark:bg-violet-800/40">
              <Waves className="w-5 h-5 text-violet-600 dark:text-violet-300" />
            </div>

            <p className="text-violet-700 dark:text-violet-300 font-semibold">
              Strongest Alpha Activity
            </p>
          </div>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Transcendental Meditation (TM) showed the highest alpha amplitude
            (<b>16.1 µV²</b>), indicating relaxed alertness.
          </p>
        </div>

        <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800 p-5 rounded-2xl hover:scale-[1.02] transition-all shadow-sm">

          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-800/40">
              <Sparkles className="w-5 h-5 text-emerald-600 dark:text-emerald-300" />
            </div>

            <p className="text-emerald-700 dark:text-emerald-300 font-semibold">
              Balanced Gamma Focus
            </p>
          </div>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Vipassana (VIP) and Shoonya (SNY) displayed balanced gamma oscillations
            (~6 µV²), linked to focused awareness and clarity.
          </p>
        </div>

      </div>
    </section>
  );
};

export default React.memo(EEGGroupComparison);
