import { useState } from "react";
import { Upload, FileJson, Brain, Waves, Sparkles, XCircle } from "lucide-react";
import { predictEEG } from "../api/eegApi";
import LoadingSpinner from "../components/LoadingSpinner";
import { usePredictionStore } from "../store/predictionStore";

const requiredKeys = ["theta_rel", "alpha_rel", "beta_rel", "gamma_rel", "channel"];

const InsightCard = ({ title, value, icon: Icon }) => (
  <div className="rounded-xl border border-gray-200 bg-white p-4">
    <div className="flex items-center gap-2 mb-2">
      <Icon size={16} className="text-gray-600" />
      <p className="text-xs uppercase tracking-wide text-gray-500">{title}</p>
    </div>
    <p className="text-sm text-gray-800 leading-relaxed">{value}</p>
  </div>
);

const UploadEEGData = () => {
  const { prediction, fileName, setPredictionData, clearPredictionData } = usePredictionStore();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const validatePayload = (data) => {
    if (!data || typeof data !== "object" || Array.isArray(data)) {
      throw new Error("JSON must contain a single object.");
    }

    const missing = requiredKeys.filter((key) => !(key in data));
    if (missing.length > 0) {
      throw new Error(`Missing keys: ${missing.join(", ")}`);
    }

    for (const key of ["theta_rel", "alpha_rel", "beta_rel", "gamma_rel"]) {
      if (Number.isNaN(Number(data[key]))) {
        throw new Error(`Field '${key}' must be numeric.`);
      }
    }

    if (!String(data.channel || "").trim()) {
      throw new Error("Field 'channel' must be a non-empty string.");
    }
  };

  const onFileChange = async (event) => {
    const file = event.target.files?.[0];
    setError("");

    if (!file) return;
    if (!file.name.toLowerCase().endsWith(".json")) {
      setError("Please upload a .json file.");
      return;
    }

    setLoading(true);
    try {
      const text = await file.text();
      const payload = JSON.parse(text);
      validatePayload(payload);

      const response = await predictEEG(payload);
      const result = response?.prediction;

      if (!result?.region) {
        throw new Error("Invalid response from backend.");
      }

      setPredictionData({ prediction: result, fileName: file.name });
    } catch (err) {
      setError(err.message || "Failed to process file.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* ================= LEFT: UPLOAD SECTION ================= */}
        <section className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <Brain className="w-6 h-6 text-gray-700" />
            <h1 className="text-xl font-semibold text-gray-900">EEG Data Input</h1>
          </div>

          <label className="block border-2 border-dashed border-gray-300 rounded-xl p-10 text-center cursor-pointer hover:border-gray-400 transition-colors">
            <input type="file" accept=".json,application/json" className="hidden" onChange={onFileChange} />
            <Upload className="w-10 h-10 mx-auto text-gray-600 mb-3" />
            <p className="text-gray-800 font-medium">Upload EEG JSON file</p>
            <p className="text-xs text-gray-500 mt-2">
              Required: theta_rel, alpha_rel, beta_rel, gamma_rel, channel
            </p>
          </label>

          {fileName && (
            <div className="mt-4 text-sm text-gray-700 flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg border border-gray-200">
              <FileJson size={16} /> {fileName}
            </div>
          )}

          {loading && (
            <div className="mt-6">
              <LoadingSpinner />
            </div>
          )}

          {error && (
            <p className="mt-5 text-red-600 font-medium">{error}</p>
          )}

          {/* Placeholder EEG Image */}
          <div className="mt-6 rounded-xl border border-gray-200 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1581093458791-9d09c5f8c1d6"
              alt="EEG placeholder"
              className="w-full h-48 object-cover"
            />
          </div>
        </section>

        {/* ================= RIGHT: RESULTS SECTION ================= */}
        <section className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 flex flex-col">

          <div className="flex items-center gap-3 mb-6">
            <Waves className="w-6 h-6 text-gray-700" />
            <h2 className="text-xl font-semibold text-gray-900">Prediction Insights</h2>
          </div>

          {/* EMPTY STATE */}
          {!prediction && !loading && (
            <div className="flex flex-col items-center justify-center flex-1 text-center text-gray-400">
              <Brain size={40} className="mb-3 opacity-50" />
              <p className="text-sm">Upload EEG data to view insights</p>
            </div>
          )}

          {/* RESULTS */}
          {prediction && !loading && (
            <>
              {/* Region Output */}
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-500">Predicted Region</p>
                  <p className="text-2xl font-semibold text-gray-900 mt-1">
                    {prediction.region}
                  </p>
                </div>
                <button
                  onClick={clearPredictionData}
                  className="text-sm text-gray-500 hover:text-red-600"
                >
                  <XCircle size={16} />
                </button>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200 my-5"></div>

              {/* Insight Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InsightCard title="Brainwaves" value={prediction.brainwaves?.join(", ") || "N/A"} icon={Waves} />
                <InsightCard title="Cognitive State" value={prediction.state || "N/A"} icon={Sparkles} />
                <InsightCard title="Technical Description" value={prediction.description || "N/A"} icon={Brain} />
                <InsightCard title="Interpretation" value={prediction.insight || "N/A"} icon={FileJson} />
              </div>
            </>
          )}
        </section>

      </div>
    </div>
  );
};

export default UploadEEGData;