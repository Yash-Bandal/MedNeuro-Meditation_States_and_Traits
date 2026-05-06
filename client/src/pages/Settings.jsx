import React, { useCallback, useEffect, useState } from "react";
import {
  Database,
  RefreshCw,
  Brain,
  Settings,
  Settings2,
  Download,
  Cpu,
  Activity,
  ShieldCheck,
} from "lucide-react";


import {
  API_BASE_URL,
  getHealth,
  getModelInfo,
} from "../api/eegApi";

import SI from "../assets/SettingG.gif";

const SettingsPage = () => {
  const [apiStatus, setApiStatus] = useState("Checking...");
  const [modelVersion, setModelVersion] = useState("Loading...");
  const [featureCount, setFeatureCount] = useState("N/A");

  const [backendSpin, setBackendSpin] = useState(false);
  const [modelSpin, setModelSpin] = useState(false);

  // ======================================================
  // BACKEND STATUS
  // ======================================================

  const handleBackendCheck = useCallback(async () => {
    setBackendSpin(true);
    setApiStatus("Checking...");

    try {
      const health = await getHealth();

      setApiStatus(
        health.status === "ok"
          ? "Connected"
          : "Unavailable"
      );
    } catch (error) {
      setApiStatus("Unavailable");
    }

    setTimeout(() => {
      setBackendSpin(false);
    }, 700);
  }, []);

  // ======================================================
  // MODEL REFRESH
  // ======================================================

  const handleModelRefresh = useCallback(async () => {
    setModelSpin(true);

    try {
      const modelInfo = await getModelInfo();

      setModelVersion(
        modelInfo.model_type || "RandomForest Pipeline"
      );

      setFeatureCount(
        String(modelInfo.feature_count ?? "N/A")
      );
    } catch (error) {
      setModelVersion("Unavailable");
    }

    setTimeout(() => {
      setModelSpin(false);
    }, 700);
  }, []);

  // ======================================================
  // INIT
  // ======================================================

  useEffect(() => {
    const init = async () => {
      await handleBackendCheck();
      await handleModelRefresh();
    };

    init();
  }, [handleBackendCheck, handleModelRefresh]);

  // ======================================================
  // DOWNLOAD
  // ======================================================

  const handleDownload = () => {
    const link = document.createElement("a");

    // Replace with your actual path later
    link.href = "/modelinput.zip";

    link.download = "modelinput.zip";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#f6f8fb] px-6 py-8">
      <div className="mx-auto">

        {/* ====================================================== */}
        {/* HEADER */}
        {/* ====================================================== */}

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-2xl bg-neutral-100 flex items-center justify-center border border-indigo-100">
              {/* <Settings2 className="w-7 h-7 text-neutral-800 " /> */}
              <img className="w-12 pointer-events-none select-none rounded-2xl" src = {SI} />
            </div>

            <div>
              <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
                System Settings
              </h1>

              <p className="text-gray-500 mt-1 text-sm">
                EEG backend configuration, model status and dataset utilities
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">

            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-transparent text-black hover:bg-slate-100 transition-all shadow-sm border border-black border-dashed"
            >
              <Download size={18} />
              Download Test Data
            </button>
          </div>
        </div>

        {/* ====================================================== */}
        {/* TOP STATUS GRID */}
        {/* ====================================================== */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">

          {/* ====================================================== */}
          {/* BACKEND */}
          {/* ====================================================== */}

          <div className="bg-white rounded-3xl border border-gray-200 p-6 relative overflow-hidden">

            <div className="absolute top-0 right-0 w-28 h-28 bg-green-50 rounded-full blur-3xl opacity-60" />

            <div className="relative z-10">

              <div className="flex items-center justify-between mb-6">

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center border border-green-100">
                    <Database className="text-green-600" size={22} />
                  </div>

                  <div>
                    <h2 className="font-semibold text-gray-900">
                      Backend API
                    </h2>

                    <p className="text-xs text-gray-500">
                      Render Flask Service
                    </p>
                  </div>
                </div>

                <RefreshCw
                  onClick={handleBackendCheck}
                  size={18}
                  className={`cursor-pointer text-gray-500 transition-transform duration-700 ${backendSpin ? "rotate-180" : ""
                    }`}
                />
              </div>

              <div className="space-y-4">

                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4">
                  <p className="text-xs text-gray-500 mb-1">
                    API Endpoint
                  </p>

                  <p className="text-sm text-gray-800 break-all font-medium">
                    {API_BASE_URL}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    Connection Status
                  </span>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${apiStatus === "Connected"
                        ? "bg-green-100 text-green-700"
                        : apiStatus === "Checking..."
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                  >
                    {apiStatus}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ====================================================== */}
          {/* MODEL */}
          {/* ====================================================== */}

          <div className="bg-white rounded-3xl border border-gray-200 p-6 relative overflow-hidden">

            <div className="absolute top-0 right-0 w-28 h-28 bg-purple-50 rounded-full blur-3xl opacity-60" />

            <div className="relative z-10">

              <div className="flex items-center justify-between mb-6">

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center border border-purple-100">
                    <Brain className="text-purple-600" size={22} />
                  </div>

                  <div>
                    <h2 className="font-semibold text-gray-900">
                      EEG Model
                    </h2>

                    <p className="text-xs text-gray-500">
                      Regional Classifier
                    </p>
                  </div>
                </div>

                <RefreshCw
                  onClick={handleModelRefresh}
                  size={18}
                  className={`cursor-pointer text-gray-500 transition-transform duration-700 ${modelSpin ? "rotate-180" : ""
                    }`}
                />
              </div>

              <div className="space-y-4">

                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4">
                  <p className="text-xs text-gray-500 mb-1">
                    Active Pipeline
                  </p>

                  <p className="text-sm font-semibold text-gray-800">
                    {modelVersion}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    Feature Count
                  </span>

                  <span className="text-sm font-semibold text-gray-900">
                    {featureCount}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ====================================================== */}
          {/* SYSTEM */}
          {/* ====================================================== */}

          <div className="bg-white rounded-3xl border border-gray-200 p-6 relative overflow-hidden">

            <div className="absolute top-0 right-0 w-28 h-28 bg-indigo-50 rounded-full blur-3xl opacity-60" />

            <div className="relative z-10">

              <div className="flex items-center gap-3 mb-6">

                <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center border border-indigo-100">
                  <Cpu className="text-indigo-600" size={22} />
                </div>

                <div>
                  <h2 className="font-semibold text-gray-900">
                    Runtime Analytics
                  </h2>

                  <p className="text-xs text-gray-500">
                    EEG Processing System
                  </p>
                </div>
              </div>

              <div className="space-y-4">

                <div className="flex items-center justify-between bg-gray-50 border border-gray-100 rounded-2xl px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Activity size={16} className="text-emerald-500" />
                    <span className="text-sm text-gray-600">
                      Signal State
                    </span>
                  </div>

                  <span className="text-sm font-semibold text-emerald-600">
                    Stable
                  </span>
                </div>

                <div className="flex items-center justify-between bg-gray-50 border border-gray-100 rounded-2xl px-4 py-3">
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={16} className="text-indigo-500" />
                    <span className="text-sm text-gray-600">
                      Model Integrity
                    </span>
                  </div>

                  <span className="text-sm font-semibold text-indigo-600">
                    Verified
                  </span>
                </div>

                <div className="bg-gradient-to-r from-indigo-50 to-violet-50 rounded-2xl p-4 border border-indigo-100">
                  <p className="text-xs text-gray-500 mb-1">
                    Current Framework
                  </p>

                  <p className="text-sm font-semibold text-gray-800">
                    EEG Regional Classification Pipeline
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ====================================================== */}
        {/* FOOTER */}
        {/* ====================================================== */}

        <div className="bg-white border border-gray-200 rounded-3xl px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">

          <div>
            <h3 className="text-sm font-semibold text-gray-900">
              MedNeuro EEG Analysis System
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              Bridging Consciousness and the Subconscious through EEG-based regional analysis
            </p>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-50 border border-gray-100">
            <span className="text-xs uppercase tracking-wide text-gray-400">
              Developed By
            </span>

            <span className="text-sm font-semibold text-gray-800">
              YB Studios
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;