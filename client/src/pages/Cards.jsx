import React, { useState } from "react";
import { Users, Brain, Network, Activity, X } from "lucide-react";

import BV from "../assets/EEGT.mp4";
// import BV from "../assets/Epilepsy.mp4";


const ParticipantsAndElectrodes = () => {
  const [selectedTechnique, setSelectedTechnique] = useState(null);


  const groups = [
    {
      name: "HTR (Himalayan Tradition)",
      code: "htr",
      participants: 24,
      meanAge: 22.3,
      gender: "Female",
      notes: "Experienced meditators",
      color: "indigo",
      details:
        "Himalayan practitioners are associated with strong regulation of attention and calm alertness, often showing sustained alpha-theta patterns in long sessions.",
    },
    {
      name: "CTR (Control)",
      code: "ctr",
      participants: 31,
      meanAge: 21.8,
      gender: "Female",
      notes: "No prior meditation experience",
      color: "rose",
      details:
        "Control participants provide baseline EEG signatures for comparison, helping isolate meditation-specific neural effects from general resting-state activity.",
    },
    {
      name: "TM (Transcendental Meditation)",
      code: "tm",
      participants: 4,
      meanAge: 23.5,
      gender: "Female",
      notes: "TM certified practitioners",
      color: "green",
      details:
        "TM profiles often reflect relaxed but stable internal attention, with clear alpha dominance and consistent transitions into deeper meditative states.",
    },
    {
      name: "VIP (Vipassana)",
      code: "vip",
      participants: 19,
      meanAge: 22.7,
      gender: "Female",
      notes: "Regular Vipassana meditators",
      color: "amber",
      details:
        "Vipassana emphasizes open monitoring and sensory clarity, typically linked with balanced alpha-gamma modulation during sustained awareness practice.",
    },
    {
      name: "SNY (Shoonya)",
      code: "sny",
      participants: 20,
      meanAge: 23.1,
      gender: "Female",
      notes: "Practicing for 6+ months",
      color: "sky",
      details:
        "Shoonya practitioners frequently demonstrate heightened internal stillness and strong gamma-related coherence during advanced introspective phases.",
    },
  ];

  const cardStyles = {
    indigo: {
      wrapper: "bg-indigo-50 dark:bg-indigo-900/20 border-indigo-100 dark:border-indigo-800",
      icon: "text-indigo-600 dark:text-indigo-400",
      badge: "bg-indigo-100/60 dark:bg-indigo-800/30 text-indigo-700 dark:text-indigo-300",
    },
    rose: {
      wrapper: "bg-rose-50 dark:bg-rose-900/20 border-rose-100 dark:border-rose-800",
      icon: "text-rose-600 dark:text-rose-400",
      badge: "bg-rose-100/60 dark:bg-rose-800/30 text-rose-700 dark:text-rose-300",
    },
    green: {
      wrapper: "bg-green-50 dark:bg-green-900/20 border-green-100 dark:border-green-800",
      icon: "text-green-600 dark:text-green-400",
      badge: "bg-green-100/60 dark:bg-green-800/30 text-green-700 dark:text-green-300",
    },
    amber: {
      wrapper: "bg-amber-50 dark:bg-amber-900/20 border-amber-100 dark:border-amber-800",
      icon: "text-amber-600 dark:text-amber-400",
      badge: "bg-amber-100/60 dark:bg-amber-800/30 text-amber-700 dark:text-amber-300",
    },
    sky: {
      wrapper: "bg-sky-50 dark:bg-sky-900/20 border-sky-100 dark:border-sky-800",
      icon: "text-sky-600 dark:text-sky-400",
      badge: "bg-sky-100/60 dark:bg-sky-800/30 text-sky-700 dark:text-sky-300",
    },
  };

  const electrodeInfo = {
    total: 64,
    system: "Biosemi ActiveTwo",
    samplingRate: "512 Hz",
    reference: "Common Average Reference (CAR)",
    keySites: ["Fp1", "Fp2", "Fz", "Cz", "Pz", "Oz", "T3", "T4", "P3", "P4"],
  };

  // Coordinates for a simplified 10–20 layout
  const electrodes = [
    { label: "Fp1", x: 50, y: 10 },
    { label: "Fp2", x: 150, y: 10 },
    { label: "F7", x: 20, y: 50 },
    { label: "F3", x: 70, y: 50 },
    { label: "Fz", x: 100, y: 45 },
    { label: "F4", x: 130, y: 50 },
    { label: "F8", x: 180, y: 50 },
    { label: "C3", x: 70, y: 100 },
    { label: "Cz", x: 100, y: 100 },
    { label: "C4", x: 130, y: 100 },
    { label: "P3", x: 70, y: 150 },
    { label: "Pz", x: 100, y: 155 },
    { label: "P4", x: 130, y: 150 },
    { label: "O1", x: 70, y: 190 },
    { label: "Oz", x: 100, y: 195 },
    { label: "O2", x: 130, y: 190 },
  ];

  return (
    // <div className="min-h-screen py-8 px-6">
    <div className="min-h-screen bg-white dark:from-gray-950 dark:to-gray-900 py-8 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        {/* <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full shadow-sm">
            <Users className="text-indigo-600 dark:text-indigo-400" size={20} />
            <span className="font-semibold text-indigo-700 dark:text-indigo-300 text-sm">
              EEG Meditation Study Overview
            </span>
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 font-montserrat">
            Participants & Electrode Configuration
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Overview of participant demographics and EEG electrode placements used for meditation and control recordings.
          </p>
        </div> */}

        {/* EEG Electrode Visualization */}
        <div className=" bg-white rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 p-8">
          <div className="flex items-center gap-3 mb-6">
            <Network className="text-indigo-600 dark:text-indigo-400" size={28} />
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              EEG Electrode Placement (10–20 Layout)
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
            {/* Electrode info list */}
            <div className="w-full max-w-[220px] rounded-lg overflow-visible ">
              <video
                src={BV}
                autoPlay
                loop
                muted
                playsInline
                className="w-full  object-cover"
              />
            </div>

            <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <p><span className="font-medium">EEG System:</span> {electrodeInfo.system}</p>
              <p><span className="font-medium">Total Electrodes:</span> {electrodeInfo.total}</p>
              <p><span className="font-medium">Sampling Rate:</span> {electrodeInfo.samplingRate}</p>
              <p><span className="font-medium">Reference:</span> {electrodeInfo.reference}</p>
              <p className="font-medium mt-3">Key Sites:</p>
              <div className="flex flex-wrap gap-2">
                {electrodeInfo.keySites.map((s) => (
                  <span key={s} className="px-3 py-1 bg-indigo-100 dark:bg-indigo-800/30 rounded-full text-indigo-700 dark:text-indigo-300 text-xs font-semibold">{s}</span>
                ))}
              </div>
            </div>

            {/* EEG head top-view */}

            {/* Black and white */}
            <div className="relative w-[240px] h-[240px] bg-white dark:from-gray-900 dark:to-gray-800 rounded-full border-4 border-gray-300 dark:border-gray-700 shadow-inner animate-slowPulse">
              {electrodes.map((e, i) => (
                <div
                  key={e.label}
                  className="absolute flex flex-col items-center text-center ml-4 mt-5"
                  style={{
                    left: `${e.x}px`,
                    top: `${e.y}px`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div
                    className="w-3 h-3 bg-gray-800 dark:bg-gray-300 rounded-full shadow-md animate-electrodePulse"
                    style={{
                      animationDelay: `${(i % 5) * 0.5}s`,
                    }}
                  ></div>

                  <span className="text-[10px] text-gray-700 dark:text-gray-300 mt-1">
                    {e.label}
                  </span>
                </div>
              ))}
            </div>


 {/* Pink shade */}
            {/* <div className="relative w-[240px]  h-[240px] bg-gradient-to-b from-pink-50 to-pink-100 dark:from-pink-950 dark:to-indigo-900 rounded-full border-4 border-pink-300 dark:border-indigo-700 shadow-inner animate-slowPulse">
              {electrodes.map((e, i) => (
                <div
                  key={e.label}
                  className="absolute flex flex-col items-center text-center ml-4 mt-5"
                  style={{
                    left: `${e.x}px`,
                    top: `${e.y}px`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div
                    className={`w-3 h-3 bg-pink-500 dark:bg-indigo-300 rounded-full shadow-md animate-electrodePulse`}
                    style={{
                      animationDelay: `${(i % 5) * 0.5}s`, // stagger animation for natural look
                    }}
                  ></div>
                  <span className="text-[10px] text-gray-700 dark:text-gray-200 mt-1">{e.label}</span>
                </div>
              ))}
            </div> */}
          </div>

          
        </div>



        {/* Participant Group Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {groups.map((g) => (
            (() => {
              const styles = cardStyles[g.color];
              return (
            <div
              key={g.code}
              role="button"
              tabIndex={0}
              onClick={() => setSelectedTechnique(g)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedTechnique(g);
                }
              }}
              className={`rounded-2xl p-6 border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer ${styles.wrapper}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <Brain className={styles.icon} size={26} />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{g.name}</h3>
              </div>
              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <p><span className="font-medium">Participants:</span> {g.participants}</p>
                <p><span className="font-medium">Mean Age:</span> {g.meanAge}</p>
                <p><span className="font-medium">Gender:</span> {g.gender}</p>
                <p><span className="font-medium">Notes:</span> {g.notes}</p>
              </div>
              <div
                className={`mt-5 py-2 px-3 rounded-lg text-center font-semibold text-sm ${styles.badge}`}
              >
                Code: {g.code.toUpperCase()}
              </div>
              <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">Click for detailed technique view</p>
            </div>
              );
            })()
          ))}
        </div>


        {/* Summary */}
        <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-4 text-center">
          <Activity className="w-5 h-5 text-gray-400 mx-auto mb-2" />

          <p className="text-gray-500 dark:text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed">
            The animated EEG layout illustrates scalp electrode positions recorded using the{" "}
            <span className="text-gray-700 dark:text-gray-200 font-medium">
              Biosemi 64-channel ActiveTwo system
            </span>.
            The pulsing nodes simulate ongoing cortical activity across meditation states.
          </p>
        </div>



      </div>

      

      {/* Custom animation styles */}
      <style>{`
        @keyframes electrodePulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.5); opacity: 0.4; }
        }
        .animate-electrodePulse {
          animation: electrodePulse 3s ease-in-out infinite;
        }

        @keyframes slowPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        .animate-slowPulse {
          animation: slowPulse 8s ease-in-out infinite;
        }

        @keyframes fadeInOverlay {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-overlayIn {
          animation: fadeInOverlay 180ms ease-out;
        }

        @keyframes popInModal {
          from { opacity: 0; transform: translateY(8px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-modalIn {
          animation: popInModal 220ms ease-out;
        }
      `}</style>

      {selectedTechnique && (
        <div
          className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 animate-overlayIn"
          onClick={() => setSelectedTechnique(null)}
        >
          <div
            className="w-full max-w-2xl bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-2xl p-6 animate-modalIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{selectedTechnique.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Technique Code: {selectedTechnique.code.toUpperCase()}
                </p>
              </div>
              <button
                onClick={() => setSelectedTechnique(null)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Close modal"
              >
                <X size={18} className="text-gray-600 dark:text-gray-300" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 text-sm">
              <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-3">
                <p className="text-gray-500 dark:text-gray-400">Participants</p>
                <p className="font-semibold text-gray-900 dark:text-gray-100">{selectedTechnique.participants}</p>
              </div>
              <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-3">
                <p className="text-gray-500 dark:text-gray-400">Mean Age</p>
                <p className="font-semibold text-gray-900 dark:text-gray-100">{selectedTechnique.meanAge}</p>
              </div>
              <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-3">
                <p className="text-gray-500 dark:text-gray-400">Gender</p>
                <p className="font-semibold text-gray-900 dark:text-gray-100">{selectedTechnique.gender}</p>
              </div>
              <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-3">
                <p className="text-gray-500 dark:text-gray-400">Group Note</p>
                <p className="font-semibold text-gray-900 dark:text-gray-100">{selectedTechnique.notes}</p>
              </div>
            </div>

            <div className="rounded-lg bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800 p-4">
              <p className="text-sm font-medium text-indigo-700 dark:text-indigo-300 mb-1">Technique Detail</p>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{selectedTechnique.details}</p>
            </div>

            <div className="mt-4 flex justify-end">
              <button
                onClick={() =>
                  window.open(
                    `https://www.youtube.com/results?search_query=${encodeURIComponent(
                      selectedTechnique.name + " meditation technique"
                    )}`,
                    "_blank"
                  )
                }
                className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm font-medium transition-colors"
              >
                Search on YouTube
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ParticipantsAndElectrodes;
