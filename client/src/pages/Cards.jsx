import React from "react";
import { Users, Brain, Network, Activity } from "lucide-react";

const ParticipantsAndElectrodes = () => {
  const groups = [
    { name: "HTR (Himalayan Tradition)", code: "htr", participants: 24, meanAge: 22.3, gender: "Female", notes: "Experienced meditators", color: "indigo" },
    { name: "CTR (Control)", code: "ctr", participants: 31, meanAge: 21.8, gender: "Female", notes: "No prior meditation experience", color: "rose" }, //rose
    { name: "TM (Transcendental Meditation)", code: "tm", participants: 4, meanAge: 23.5, gender: "Female", notes: "TM certified practitioners", color: "green" }, //green
    { name: "VIP (Vipassana)", code: "vip", participants: 19, meanAge: 22.7, gender: "Female", notes: "Regular Vipassana meditators", color: "amber" },
    { name: "SNY (Shoonya)", code: "sny", participants: 20, meanAge: 23.1, gender: "Female", notes: "Practicing for 6+ months", color: "sky" },
  ];

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
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
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
        </div>

        {/* Participant Group Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {groups.map((g) => (
            <div
              key={g.code}
              className={`bg-${g.color}-50 dark:bg-${g.color}-900/20 border border-${g.color}-100 dark:border-${g.color}-800 rounded-2xl p-6 hover:scale-[1.02] transition-all shadow-md`}
            >
              <div className="flex items-center gap-3 mb-3">
                <Brain className={`text-${g.color}-600 dark:text-${g.color}-400`} size={26} />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{g.name}</h3>
              </div>
              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <p><span className="font-medium">Participants:</span> {g.participants}</p>
                <p><span className="font-medium">Mean Age:</span> {g.meanAge}</p>
                <p><span className="font-medium">Gender:</span> {g.gender}</p>
                <p><span className="font-medium">Notes:</span> {g.notes}</p>
              </div>
              <div
                // className={`mt-5 py-2 px-3 bg-${g.color}-100 dark:bg-${g.color}-800/30 rounded-lg text-center text-${g.color}-700 dark:text-${g.color}-300 font-semibold text-sm`}
                className={`mt-5 py-2 px-3 bg-${g.color}-100/10 dark:bg-${g.color}-800/30 rounded-lg text-center text-${g.color}-700 dark:text-${g.color}-300 font-semibold text-sm`}
              >
                Code: {g.code.toUpperCase()}
              </div>
            </div>
          ))}
        </div>

        {/* EEG Electrode Visualization */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-gray-200 dark:border-gray-800 p-8">
          <div className="flex items-center gap-3 mb-6">
            <Network className="text-indigo-600 dark:text-indigo-400" size={28} />
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              EEG Electrode Placement (10–20 Layout)
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
            {/* Electrode info list */}
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
            <div className="relative w-[240px]  h-[240px] bg-gradient-to-b from-indigo-50 to-indigo-100 dark:from-indigo-950 dark:to-indigo-900 rounded-full border-4 border-indigo-300 dark:border-indigo-700 shadow-inner animate-slowPulse">
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
                    className={`w-3 h-3 bg-indigo-500 dark:bg-indigo-300 rounded-full shadow-md animate-electrodePulse`}
                    style={{
                      animationDelay: `${(i % 5) * 0.5}s`, // stagger animation for natural look
                    }}
                  ></div>
                  <span className="text-[10px] text-gray-700 dark:text-gray-200 mt-1">{e.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-2xl p-6 text-center shadow-sm">
          <Activity className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mx-auto mb-3" />
          <p className="text-gray-700 dark:text-gray-300 text-sm max-w-3xl mx-auto">
            The animated EEG layout illustrates scalp electrode positions recorded using the <b>Biosemi 64-channel ActiveTwo system</b>.
            The pulsing nodes simulate ongoing cortical activity measured across different meditation traditions.
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
      `}</style>
    </div>
  );
};

export default ParticipantsAndElectrodes;
