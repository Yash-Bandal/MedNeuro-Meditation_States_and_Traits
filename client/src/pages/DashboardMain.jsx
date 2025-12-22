// src/pages/DashboardHome.jsx
import React from "react";
import {
    Brain,
    Activity,
    BarChart3,
    Microscope,
    ArrowRight,
    Waves,
    LineChart,
    Database,
    Layers,
    BookOpen
} from "lucide-react";
import { Link } from "react-router-dom";
import EEGDynamicSection from "./wavecard";
import LoadingSpinner from "../components/LoadingSpinner";




const SummaryCard = ({ title, value, icon: Icon, color }) => (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 transform hover:scale-105 transition-all duration-300 animate-fade-in">
        <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{title}</h3>
            <Icon size={26} className={`${color}`} />
        </div>
        <div className="text-3xl font-bold text-gray-900 dark:text-gray-100">{value}</div>
    </div>
);

const DashboardHome = () => {
    const summaryData = [
        { title: "Subjects Analyzed", value: "64", icon: Brain, color: "text-blue-500" },
        { title: "EEG Channels", value: "64 + 8", icon: Waves, color: "text-indigo-500" },
        { title: "Avg Classification Accuracy", value: "91.2%", icon: LineChart, color: "text-green-500" },
    ];

    const modules = [
        {
            title: "EEG Group Analysis",
            desc: "Visualize bandpower differences and frequency trends across meditation traditions and control groups.",
            icon: BarChart3,
            link: "/analytics",
        },
        {
            title: "ML Model Performance",
            desc: "Compare Random Forest, Gradient Boost, and SVM metrics — accuracy, F1, ROC, and confusion matrices.",
            icon: Activity,
            link: "/compare",
        },
        {
            title: "Meditation Insights",
            desc: "Explore neural traits of Vipassana, Himalayan, and Isha traditions from scientific EEG findings.",
            icon: BookOpen,
            link: "/cards",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-all duration-500">
            {/* === Hero Section === */}
            {/* <section className="relative bg-gradient-to-r from-indigo-100 to-blue-50 dark:from-indigo-900 dark:to-slate-900 py-20 px-6 text-center rounded-b-3xl shadow-xl overflow-hidden"> */}
            {/* <section className="relative bg-gradient-to-br from-indigo-50 via-white to-blue-50 dark:from-slate-900 dark:via-indigo-950 dark:to-slate-900 py-24 px-6 text-center overflow-hidden"> */}
            <section className="relative bg-gradient-to-br from-indigo-50 via-white to-blue-50 dark:from-slate-900 dark:via-indigo-950 dark:to-slate-900 py-24 px-6 text-center overflow-hidden">
                {/* Decorative gradient orbits */}
                {/* <div className="absolute inset-0">
                    <div className="absolute top-20 left-1/4 w-72 h-72 bg-indigo-300/20 dark:bg-indigo-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl"></div>
                </div> */}

                {/* Main content */}
                <div className="relative z-10">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold font-montserrat tracking-tight mb-6  bg-clip-text bg-gradient-to-r text-black dark:text-white  dark:via-blue-400 dark:to-teal-300">
                        MedNeuro
                    </h1>

                    <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
                        Bridging <span className="font-semibold text-indigo-600 dark:text-indigo-300">Consciousness </span>
                        and the <span className="font-semibold text-indigo-600 dark:text-indigo-300">Subconscious</span> —
                        Exploring EEG across states of awareness 
                    </p>

                    <Link
                        to="/analytics"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105"
                    >
                        <Microscope size={22} />
                        Explore EEG Analytics
                        <ArrowRight size={20} />
                    </Link>

                    <div className="mt-8 text-sm text-gray-600 dark:text-gray-400">
                        <span className="tracking-wide">YB-Productions</span>
                    </div>
                </div>
            </section>

            {/* === EEG Simulation Section === */}
            <section className="max-w-7xl    mx-auto px-6 py-20">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-10 flex items-center gap-3 justify-center">
                    <Waves size={28} className="text-indigo-500" />
                    EEG Wave Dynamics
                </h2>

                <div className="flex justify-center">
                    <div className="w-full  md:w-[85%] lg:w-[70%] max-w-4xl scale-100 sm:scale-95 md:scale-100 transition-transform duration-300 ">
                        <EEGDynamicSection />
                    </div>
                </div>

                <div className="text-center text-gray-500 dark:text-gray-400 mt-6 text-sm">
                    Simulated EEG signal patterns for Gamma → Delta frequency bands
                </div>
            </section>
            





            {/* === Summary Section === */}
            {/* <section className="max-w-7xl mx-auto px-6 py-16">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 flex items-center gap-3">
                    <BarChart3 size={28} className="text-indigo-500" />
                    Project Overview
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {summaryData.map((data, i) => (
                        <SummaryCard key={i} {...data} />
                    ))}
                </div>
            </section> */}

            {/* Module old */}
            {/* <section className="max-w-7xl mx-auto px-6 py-16">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 flex items-center gap-3">
                    <Activity size={28} className="text-pink-500" />
                    Dashboard Modules
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "EEG Group Analysis",
                            desc: "Compare alpha, beta, and gamma power across Vipassana, Himalayan, Isha, and Control groups.",
                            link: "/group-analysis",
                        },
                        {
                            title: "ML Model Performance",
                            desc: "View model metrics, confusion matrices, and feature importance from EEG-based classifiers.",
                            link: "/ml-results",
                        },
                        {
                            title: "Meditation Insights",
                            desc: "Explore scientific findings on how meditation affects brainwave activity and cognition.",
                            link: "/insights",
                        },
                    ].map((module, idx) => (
                        <div
                            key={idx}
                            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 transform hover:scale-105 transition-all duration-300"
                        >
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                                {module.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-5">{module.desc}</p>
                            <Link
                                to={module.link}
                                className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
                            >
                                Open Module
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    ))}
                </div>
            </section> */}

            {/* === Research Modules === */}
            <section className="max-w-6xl mx-auto px-6 py-20">
                {/* <h2 className="text-4xl font-bold mb-10 text-center text-indigo-300">
                    Core Dashboard Modules
                </h2> */}
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 flex items-center gap-3">
                    <Activity size={28} className="text-pink-500" />
                    Dashboard Modules
                </h2>

                <div className="grid md:grid-cols-3 gap-10">
                    {modules.map((m, i) => (
                        <div
                            key={i}
                            className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700  dark:text-white transform transition-all duration-300 hover:shadow-xl"
                        >
                            <div className="absolute -top-6 left-6 bg-transparent p-3 rounded-xl border ">
                                <m.icon size={28} className="text-indigo-400" />
                            </div>
                            <h3 className="text-2xl font-semibold mt-4 mb-3 text-black dark:text-white ">{m.title}</h3>
                            <p className="text-black mb-6 leading-relaxed dark:text-gray-200">{m.desc}</p>
                            <Link
                                to={m.link}
                                className="inline-flex items-center gap-2 text-indigo-600  hover:text-indigo-500 font-medium"
                            >
                                Open Module
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* === Footer CTA === */}
            <footer className="bg-white dark:bg-gray-900 py-12 text-center rounded-t-3xl shadow-inner">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4 flex items-center justify-center gap-3">
                    <Brain size={26} className="text-indigo-500" />
                    Ready to Visualize Neural Patterns?
                </h2>
                <Link
                    to="/compare"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105"
                >
                    <Activity size={22} />
                    Launch Visual Dashboard
                    <ArrowRight size={20} />
                </Link>
            </footer>
        </div>
    );
};

export default DashboardHome;
