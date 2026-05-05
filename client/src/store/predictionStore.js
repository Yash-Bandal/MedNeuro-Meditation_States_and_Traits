import { create } from "zustand";

export const usePredictionStore = create((set) => ({
  prediction: null,
  fileName: "",
  setPredictionData: ({ prediction, fileName }) =>
    set({
      prediction: prediction || null,
      fileName: fileName || "",
    }),
  clearPredictionData: () =>
    set({
      prediction: null,
      fileName: "",
    }),
}));

