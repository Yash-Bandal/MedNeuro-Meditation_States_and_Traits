import { useState } from "react";
import { BarChart3, Activity, Sigma } from "lucide-react";
import ViolinH1 from "../components/ViolinH!";
import H2Scatter from "../components/H2Scatter";
import BoxH3 from "../components/BoxH3";

import Doc from "../assets/DocC.gif";
import Analysis from "../assets/AnalysisC.gif";

const StatCard = ({ title, stat, sub }) => (
    <div className="rounded-xl border shadow-sm   bg-white p-6">

        <p className="text-sm text-gray-500 uppercase tracking-wide">{title}</p>
        <p className="text-2xl font-semibold text-gray-900 mt-1">{stat}</p>
        {sub && <p className="text-xs text-gray-500 mt-1">{sub}</p>}
    </div>
);

const tabs = [
    { id: "H1", label: "H1" },
    { id: "H2", label: "H2" },
    { id: "H3", label: "H3" },
];

const Stat = () => {
    const [activeTab, setActiveTab] = useState("H1");

    const renderContent = () => {
        switch (activeTab) {
            case "H1":
                return (
                    <>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                            <BarChart3 size={18} className="text-indigo-600" />
                            Trait Level Group Difference
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <StatCard title="Mann-Whitney U" stat="77.0" />
                            <StatCard title="p-value" stat="0.023" sub="Significant" />
                            <StatCard title="Effect Size" stat="0.54" sub="Large" />
                        </div>

                        <div className="mt-6 flex flex-col md:flex-row gap-10 items-stretch md:min-h-[380px] lg:min-h-[320px]">

                            {/* LEFT: CONTENT (60%) */}
                            <div className="md:w-[60%] flex flex-col justify-evenly gap-5">
                                <h1 className="text-3xl ">
                                    Who Differs?
                                </h1>

                                <p className="text-lg text-gray-800 font-medium">
                                    Shoonya meditators exhibit significantly higher gamma power compared to controls.
                                </p>

                                <p className="text-lg text-gray-600 leading-relaxed text-justify">
                                    Statistical testing (Mann–Whitney U = 77.0, p = 0.023) confirms a strong group-level
                                    difference, indicating that long-term meditation practice is associated with
                                    sustained increases in high-frequency neural activity.
                                </p>

                                <div className="text-md text-indigo-500 font-medium">
                                    <span className="font-bold text-black">
                                        Insight:
                                    </span>
                                    &nbsp;
                                    
                                    Reflects stable trait-level neural adaptation linked to attention and cognitive integration.
                                </div>

                            </div>

                            {/* RIGHT: FIGURE (40%) */}
                            <div className="md:w-[40%] h-full flex flex-col justify-center">

                                <div className="w-full h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-4 flex flex-col justify-between">

                                    {/* TITLE */}
                                    <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 text-center">
                                        Gamma Power Distribution (Shoonya vs Control)
                                    </h3>

                                    {/* CHART AREA */}
                                    <div className="flex-1 flex items-center justify-center">
                                        <div className="w-full h-full">
                                            <ViolinH1
                                                ctr={[0.03, 0.035, 0.04, 0.025, 0.045]}
                                                sny={[0.02, 0.05, 0.08, 0.12, 0.15, 0.04]}
                                            />
                                        </div>
                                    </div>

                                    {/* FOOTNOTE (optional but looks very premium) */}
                                    <p className="text-[10px] text-gray-400 text-center mt-2">
                                        Mann–Whitney U test · p = 0.023
                                    </p>

                                </div>

                            </div>

                        </div>
                    </>
                );

            case "H2":
                return (
                    <>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                            <Activity size={18} className="text-green-600" />
                            Dose–Response Relationship
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <StatCard title="Spearman" stat="0.270" />
                            <StatCard title="p-value" stat="0.042" sub="Significant" />
                        </div>

                        <div className="mt-6 flex flex-col md:flex-row gap-10 items-stretch md:min-h-[380px] lg:min-h-[320px]">

                            {/* LEFT: CONTENT (60%) */}
                            <div className="md:w-[60%] flex flex-col justify-evenly gap-5">
                                <h1 className="text-3xl ">
                                    Why it Differs?
                                </h1>

                                <p className="text-lg text-gray-800 font-medium">
                                    Gamma power increases progressively with years of meditation experience.
                                </p>

                                <p className="text-lg text-gray-600 leading-relaxed text-justify">
                                    A positive Spearman correlation (ρ = 0.27, p = 0.042) shows that gamma modulation
                                    is not a temporary state effect, but develops gradually with continued practice,
                                    reflecting cumulative neural adaptation.
                                </p>

                                <div className="text-md text-indigo-500 font-medium">
                                    <span className="font-bold text-black">
                                        Insight:
                                    </span>
                                    &nbsp;
                                    
                                     Supports a dose–response model where prolonged meditation strengthens cortical synchronization.
                                </div>

                            </div>

                            {/* RIGHT: FIGURE (40%) */}
                            <div className="md:w-[40%] h-full flex flex-col justify-center">

                                <div className="w-full h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-4 flex flex-col justify-between">

                                    {/* TITLE */}
                                    <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 text-center">
                                        Scatter Plot (Gamma vs Experience)
                                    </h3>

                                    {/* CHART AREA */}
                                    <div className="flex-1 flex items-center justify-center">
                                        <div className="w-full h-full">
                                            <H2Scatter />
                                        </div>
                                    </div>

                                    {/* FOOTNOTE (optional but looks very premium) */}
                                    <p className="text-[10px] text-gray-400 text-center mt-2">
                                        Mann–Whitney U test · p = 0.023
                                    </p>

                                </div>

                            </div>

                        </div>
                    </>
                );

            case "H3":
                return (
                    <>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                            <Sigma size={18} className="text-purple-600" />
                            Region-Specific Modulation
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <StatCard title="Kruskal-Wallis H" stat="8.752" />
                            <StatCard title="p-value" stat="0.0328" sub="Significant" />
                            <StatCard title="Effect Size" stat="0.105" sub="Medium–Large" />
                        </div>

                        <div className="mt-6 flex flex-col md:flex-row gap-10 items-stretch md:min-h-[380px] lg:min-h-[320px]">

                            {/* LEFT: CONTENT (60%) */}
                            <div className="md:w-[60%] flex flex-col justify-evenly gap-5">
                                <h1 className="text-3xl ">
                                    Where it Differs?
                                </h1>

                                <p className="text-lg text-gray-800 font-medium">
                                    Parietal–occipital EEG activity varies significantly across meditation groups.
                                </p>

                                <p className="text-lg text-gray-600 leading-relaxed text-justify">
                                    Kruskal–Wallis analysis (H = 8.752, p = 0.0328) reveals distinct regional modulation,
                                    with Shoonya showing highest activation and Himalayan Yoga the lowest, while other
                                    groups exhibit intermediate patterns.
                                </p>

                                <div className="text-md text-indigo-500 font-medium">
                                   <span className="font-bold text-black">
                                    Insight:  
                                    </span> 
                                   &nbsp;
                                     Indicates that meditation techniques engage specific cortical regions differently.
                                </div>

                            </div>

                            {/* RIGHT: FIGURE (40%) */}
                            <div className="md:w-[40%] h-full flex flex-col justify-center">

                                <div className="w-full h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-4 flex flex-col justify-between">

                                    {/* TITLE */}
                                    <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 text-center">
                                        Scatter Plot (Gamma vs Experience)
                                    </h3>

                                    {/* CHART AREA */}
                                    <div className="flex-1 flex items-center justify-center">
                                        <div className="w-full h-full">
                                            <BoxH3 />
                                        </div>
                                    </div>

                                    {/* FOOTNOTE (optional but looks very premium) */}
                                    <p className="text-[10px] text-gray-400 text-center mt-2">
                                        Mann–Whitney U test · p = 0.023
                                    </p>

                                </div>

                            </div>

                        </div>
                    </>
                );

            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 p-6 md:p-8">
            <div className=" mx-auto space-y-2 ">

                {/* Title */}
                <div className="flex justify-between items-center ">
 
                        {/* Left */}
                    <div className="flex">
                        <div>
                            <img className="h-16 select-none pointer-events-none" src={Doc} />
                            <p className="text-[3px] text-gray-200 text-center">
                                Icon by <a href="https://iconscout.com" target="_blank" rel="noreferrer" className="underline">Posse Studio</a> on <a href="https://iconscout.com" target="_blank" rel="noreferrer" className="underline">IconScout</a>
                            </p>
                        </div>

                        <div className="flex-col">
                            <h1 className="text-2xl font-semibold text-gray-900 ">
                                <p>
                                    Statistical Analysis
                                </p>
                            </h1>
                            <p className="text-sm text-gray-500 mt-1">
                                EEG-based hypothesis evaluation
                            </p>


                        </div>

                    </div>

                    {/* right image */}
                    <img className="h-28 select-none pointer-events-none " src={Analysis} />
                </div>




                {/* Tabs */}
                <div className="flex gap-2 border-b border-gray-200">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-4 py-2 text-sm font-medium rounded-t-lg transition
                ${activeTab === tab.id
                                    ? "bg-white border border-b-0 border-gray-200 text-gray-900"
                                    : "text-gray-500 hover:text-gray-800"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="rounded-2xl border border-gray-200 bg-white p-6">
                    {renderContent()}
                </div>

                {/* Add this at the very end of your main div, after the content area */}
                {/* <footer className="mt-8 text-center text-[5px] text-gray-400">
                    <p>
                        Icon by <a href="https://iconscout.com" target="_blank" rel="noreferrer" className="underline">Posse Studio</a> on <a href="https://iconscout.com" target="_blank" rel="noreferrer" className="underline">IconScout</a>
                    </p>
                </footer> */}


            </div>
        </div>
    );
};

export default Stat;