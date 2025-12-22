
// export default Exercises;
import React from "react";
import { Brain, Activity, BarChart3, LineChart, Lightbulb, Waves, Zap } from "lucide-react";

const EEGKeyInsights = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 py-16 px-6">
            <div className="max-w-6xl mx-auto space-y-12">
                {/* === HEADER === */}
                <div className="text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full shadow-sm">
                        <Brain className="text-indigo-600 dark:text-indigo-400" size={20} />
                        <span className="font-semibold text-indigo-700 dark:text-indigo-300 text-sm">
                            EEG and Meditation Research
                        </span>
                    </div>

                    <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 font-montserrat">
                        Key Insights and Interpretations
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Summary of EEG-based classification and neural signatures across meditation groups.
                    </p>
                </div>

                {/* === INSIGHT CARDS GRID === */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Accuracy */}
                    <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800 rounded-2xl p-6 hover:scale-[1.02] transition-all shadow-sm">
                        <div className="flex items-center gap-3 mb-2">
                            <BarChart3 className="text-indigo-600 dark:text-indigo-400" />
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                                ML Accuracy Overview
                            </h3>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            The model achieved an overall <b>65.7%</b> classification accuracy across meditation groups.
                            Himalayan (HTR) and Vipassana (VIP) showed the highest group-level prediction confidence.
                        </p>
                    </div>

                    {/* Alpha Insights */}
                    <div className="bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 rounded-2xl p-6 hover:scale-[1.02] transition-all shadow-sm">
                        <div className="flex items-center gap-3 mb-2">
                            <Waves className="text-green-600 dark:text-green-400" />
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                                Alpha Band (8–13 Hz)
                            </h3>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Alpha power was <b>significantly higher</b> in TM and HTR groups, reflecting enhanced
                            calmness and internalized attention during meditative states.
                        </p>
                    </div>

                    {/* Gamma Insights */}
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800 rounded-2xl p-6 hover:scale-[1.02] transition-all shadow-sm">
                        <div className="flex items-center gap-3 mb-2">
                            <Zap className="text-amber-600 dark:text-amber-400" />
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                                Gamma Band (30–45 Hz)
                            </h3>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Vipassana (VIP) and Shoonya (SNY) practitioners displayed balanced gamma activity,
                            often linked with heightened attention and moment-to-moment awareness.
                        </p>
                    </div>

                    {/* Theta Insights */}
                    <div className="bg-sky-50 dark:bg-sky-900/20 border border-sky-100 dark:border-sky-800 rounded-2xl p-6 hover:scale-[1.02] transition-all shadow-sm">
                        <div className="flex items-center gap-3 mb-2">
                            <Activity className="text-sky-600 dark:text-sky-400" />
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                                Theta Band (4–8 Hz)
                            </h3>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Theta oscillations were enhanced during focused meditation, suggesting deeper relaxation
                            and meditative absorption, especially in TM and VIP participants.
                        </p>
                    </div>

                    {/* Beta Insights */}
                    <div className="bg-rose-50 dark:bg-rose-900/20 border border-rose-100 dark:border-rose-800 rounded-2xl p-6 hover:scale-[1.02] transition-all shadow-sm">
                        <div className="flex items-center gap-3 mb-2">
                            <LineChart className="text-rose-600 dark:text-rose-400" />
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                                Beta Band (13–30 Hz)
                            </h3>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Beta activity was slightly higher in control participants, consistent with cognitive
                            engagement and active thought rather than meditative detachment.
                        </p>
                    </div>

                    {/* ML Model Insight */}
                    <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800 rounded-2xl p-6 hover:scale-[1.02] transition-all shadow-sm">
                        <div className="flex items-center gap-3 mb-2">
                            <Lightbulb className="text-purple-600 dark:text-purple-400" />
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                                Model Learning Behavior
                            </h3>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            Random Forest and Gradient Boosting consistently outperformed linear SVM models,
                            indicating non-linear relationships in EEG band features across meditative states.
                        </p>
                    </div>
                </div>

                {/* === RESEARCH SUMMARY === */}
                <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-gray-200 dark:border-gray-800 p-8">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
                        <BarChart3 className="text-indigo-500" />
                        Summary of Observations
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                        The analysis revealed that distinct meditation practices exhibit characteristic EEG signatures.
                        Himalayan and Transcendental techniques enhanced <b>alpha and theta power</b> patterns — markers
                        of calm alertness and meditative depth. Vipassana and Shoonya showed elevated <b>gamma activity</b>,
                        linked with present-moment awareness.
                        <br /><br />
                        ML classification achieved an average accuracy of <b>65.7%</b> with Random Forest and Gradient
                        Boosting models performing best. The results suggest that EEG features can meaningfully distinguish
                        between meditative and non-meditative cognitive states, demonstrating potential for
                        <b> neurofeedback and cognitive state recognition applications.</b>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default EEGKeyInsights;
