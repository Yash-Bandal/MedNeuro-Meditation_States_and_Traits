import React from "react";
import {
    Brain,
    Activity,
    BarChart3,
    Zap,
    Waves,
    TrendingUp,
    Target,
    Lightbulb
} from "lucide-react";

const Card = ({ icon: Icon, title, children, color }) => (
    <div className={`rounded-2xl border ${color.border} ${color.bg} p-5`}>
        <div className="flex items-center gap-3 mb-2">
            <Icon className={color.icon} size={20} />
            <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-100">
                {title}
            </h3>
        </div>
        <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
            {children}
        </p>
    </div>
);

const EEGKeyInsights = () => {
    return (
        <div className="min-h-screen py-12 px-6 ">
        {/* <div className="min-h-screen py-12 px-6 bg-white shadow-sm rounded-2xl border"> */}
            <div className="max-w-7xl mx-auto space-y-10">

                {/* ================= HEADER ================= */}
                {/* <div>
                    <h1 className="text-2xl font-semibold text-gray-900">
                        Key Insights & Findings
                    </h1>
                    <p className="text-sm text-gray-500 mt-1">
                        EEG-based behavioural and machine learning insights across meditation practices
                    </p>
                </div> */}

                {/* ================= SECTION 1: STATISTICAL ================= */}
                <section className="space-y-5">
                    <div className="flex items-center gap-3">
                        <BarChart3 className="text-indigo-600" />
                        <h2 className="text-lg font-semibold text-gray-900">
                            Behavioural Insights (Statistical Analysis)
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

                        <Card
                            icon={Zap}
                            title="Gamma Dominance (H1)"
                            color={{
                                bg: "bg-amber-50",
                                border: "border-amber-200",
                                icon: "text-amber-600",
                            }}
                        >
                            Shoonya (SNY) shows significantly higher gamma power vs control
                            (p = 0.023, large effect). Indicates long-term neural adaptation.
                        </Card>

                        <Card
                            icon={TrendingUp}
                            title="Experience Effect (H2)"
                            color={{
                                bg: "bg-green-50",
                                border: "border-green-200",
                                icon: "text-green-600",
                            }}
                        >
                            Gamma increases with years of meditation (Spearman = 0.27).
                            Suggests slow, experience-driven neuroplasticity.
                        </Card>

                        <Card
                            icon={Activity}
                            title="Region Modulation (H3)"
                            color={{
                                bg: "bg-blue-50",
                                border: "border-blue-200",
                                icon: "text-blue-600",
                            }}
                        >
                            Parietal–occipital regions differ across groups (p = 0.0328).
                            SNY highest, HTR lowest → strong regional specialization.
                        </Card>

                        {/* <Card
                            icon={Waves}
                            title="Alpha vs Gamma Patterns"
                            color={{
                                bg: "bg-purple-50",
                                border: "border-purple-200",
                                icon: "text-purple-600",
                            }}
                        >
                            Vipassana → highest alpha (relaxed awareness).
                            Shoonya → highest gamma (integrative consciousness).
                        </Card>

                        <Card
                            icon={Brain}
                            title="Trait-Level Changes"
                            color={{
                                bg: "bg-indigo-50",
                                border: "border-indigo-200",
                                icon: "text-indigo-600",
                            }}
                        >
                            EEG changes are not temporary — persistent trait-level
                            adaptations linked to long-term meditation.
                        </Card> */}

                    </div>
                </section>

                {/* ================= SECTION 2: ML CLASSIFIER ================= */}
                <section className="space-y-5">
                    <div className="flex items-center gap-3">
                        <Brain className="text-emerald-600" />
                        <h2 className="text-lg font-semibold text-gray-900">
                            Regional Classifier Insights (Machine Learning)
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

                        <Card
                            icon={Target}
                            title="Model Accuracy"
                            color={{
                                bg: "bg-emerald-50",
                                border: "border-emerald-200",
                                icon: "text-emerald-600",
                            }}
                        >
                            Random Forest achieved 92.9% accuracy with low variance (±0.015),
                            showing strong generalization.
                        </Card>

                        <Card
                            icon={BarChart3}
                            title="Region Classification"
                            color={{
                                bg: "bg-slate-100",
                                border: "border-slate-200",
                                icon: "text-slate-700",
                            }}
                        >
                            Best performance in occipital & parietal regions with minimal
                            misclassification across distant regions.
                        </Card>

                        <Card
                            icon={Activity}
                            title="Feature Learning"
                            color={{
                                bg: "bg-orange-50",
                                border: "border-orange-200",
                                icon: "text-orange-600",
                            }}
                        >
                            Model successfully learns spectral + spatial patterns, confirming
                            EEG features encode region-specific information.
                        </Card>

                        <Card
                            icon={Waves}
                            title="Key Features"
                            color={{
                                bg: "bg-sky-50",
                                border: "border-sky-200",
                                icon: "text-sky-600",
                            }}
                        >
                            Relative band powers (theta, alpha, beta, gamma) + channel identity
                            are sufficient for cortical classification.
                        </Card>

                        <Card
                            icon={Brain}
                            title="Neurophysiological Validity"
                            color={{
                                bg: "bg-pink-50",
                                border: "border-pink-200",
                                icon: "text-pink-600",
                            }}
                        >
                            High accuracy confirms EEG spectral patterns reliably represent
                            underlying brain region activity.
                        </Card>

                    </div>
                </section>

                {/* ================= FINAL TAKEAWAY ================= */}
                <div className="rounded-2xl border border-gray-200 bg-white p-6">
                    <h3 className="text-md font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <Lightbulb className="text-indigo-600" size={18} />
                        Final Insight
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Meditation induces both <b>long-term neural adaptations</b> (gamma dominance,
                        experience dependence) and <b>region-specific brain activity patterns</b>.
                        Machine learning confirms these EEG signatures are structured, stable,
                        and reliably classifiable — bridging subjective awareness with measurable
                        neural dynamics.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default EEGKeyInsights;