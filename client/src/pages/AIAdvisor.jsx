// // src/pages/AIAdvisor.jsx
// import React, { useMemo, useState } from "react";
// import { useForm } from "react-hook-form";
// import { CreditCard, Clock, Zap, ArrowRight, RefreshCw } from "lucide-react";

// /**
//  * Simple EMI calculator
//  * P = principal, r = monthly rate (decimal), n = months
//  */
// function calcEMI(P, annualPct, n) {
//   if (!P || !annualPct || !n) return 0;
//   const r = annualPct / 100 / 12;
//   const pow = Math.pow(1 + r, n);
//   const emi = (P * r * pow) / (pow - 1);
//   return Number.isFinite(emi) ? emi : 0;
// }

// const SAMPLE_BANKS = [
//   { id: "hdfc", name: "HDFC Bank", annual_rate_pct: 11.5 },
//   { id: "sbi", name: "SBI", annual_rate_pct: 10.9 },
//   { id: "axis", name: "Axis Bank", annual_rate_pct: 12.2 },
//   { id: "icici", name: "ICICI Bank", annual_rate_pct: 10.0 },
// ];

// export default function AIAdvisor() {
//   const { register, handleSubmit, watch, reset, formState } = useForm({
//     defaultValues: {
//       bank: SAMPLE_BANKS[0].id,
//       creditScore: 700,
//       tenureMonths: 12,
//       amount: 10000,
//     },
//   });

//   const [aiText, setAiText] = useState("");
//   const [loadingAI, setLoadingAI] = useState(false);

//   const values = watch();
//   const selectedBank = useMemo(
//     () => SAMPLE_BANKS.find((b) => b.id === values.bank) || SAMPLE_BANKS[0],
//     [values.bank]
//   );

//   const emi = useMemo(() => {
//     return calcEMI(Number(values.amount), Number(selectedBank.annual_rate_pct), Number(values.tenureMonths));
//   }, [values.amount, selectedBank, values.tenureMonths]);

//   const totalPayable = useMemo(() => {
//     return emi * Number(values.tenureMonths || 0);
//   }, [emi, values.tenureMonths]);

//   const totalInterest = useMemo(() => {
//     return Math.max(0, totalPayable - Number(values.amount || 0));
//   }, [totalPayable, values.amount]);

//   function onSubmit(data) {
//     // For now everything is computed on change; this just prevents default
//     console.log("Form submitted", data);
//   }

//   // Mock AI call (replace this with real API call)
//   async function generateAIRecommendation() {
//     setAiText("");
//     setLoadingAI(true);
//     try {
//       // simple simulated delay
//       await new Promise((res) => setTimeout(res, 800));

//       // a deterministic, explainable mock recommendation using rule-based logic
//       const summary = `Bank: ${selectedBank.name} (${selectedBank.annual_rate_pct}% p.a.)\n` +
//         `Amount: ₹${Number(values.amount).toLocaleString()} • Tenure: ${values.tenureMonths} months\n\n` +
//         `Estimated EMI: ₹${emi.toFixed(2)} per month\nTotal payable: ₹${totalPayable.toFixed(2)}\nTotal interest: ₹${totalInterest.toFixed(2)}\n\n` +
//         `Recommendation: Choose ${selectedBank.name} for this demo because it offers a competitive APR (${selectedBank.annual_rate_pct}%) for the selected tenure. Confirm eligibility (credit score ${values.creditScore}) before applying.`;

//       setAiText(summary);
//     } catch (err) {
//       setAiText("Failed to generate recommendation. Try again.");
//     } finally {
//       setLoadingAI(false);
//     }
//   }

//   return (
//     <main className="p-6 lg:p-10">
//       {/* Page title */}
//       <div className="mb-8">
//         <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100">AI Advisor</h1>
//         <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
//           Enter purchase details — see EMI estimates and get an actionable recommendation.
//         </p>
//       </div>

//       <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Section 1: Personal Details (Choose Bank) */}
//         <section className="col-span-1 lg:col-span-1 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Personal Details</h2>
//             <CreditCard size={20} className="text-indigo-500" />
//           </div>

//           <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Choose Bank</label>
//           <select
//             {...register("bank", { required: true })}
//             className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 mb-4"
//           >
//             {SAMPLE_BANKS.map((b) => (
//               <option key={b.id} value={b.id}>
//                 {b.name} — {b.annual_rate_pct}% p.a.
//               </option>
//             ))}
//           </select>

//           <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Credit Score</label>
//           <input
//             type="number"
//             {...register("creditScore", { required: true, min: 300, max: 900 })}
//             className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100"
//           />
//           <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Used to check eligibility for card offers (demo).</p>
//         </section>

//         {/* Section 2: Time and Amount */}
//         <section className="col-span-1 lg:col-span-1 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Time & Amount</h2>
//             <Clock size={20} className="text-green-500" />
//           </div>

//           <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Tenure (months)</label>
//           <input
//             type="number"
//             {...register("tenureMonths", { required: true, min: 1, max: 120 })}
//             className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 mb-4"
//             min={1}
//             max={120}
//           />

//           <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Item Amount (₹)</label>
//           <input
//             type="number"
//             {...register("amount", { required: true, min: 1 })}
//             className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 mb-2"
//             min={1}
//           />
//           <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Enter the purchase price you want to finance.</p>

//           <div className="mt-6 flex gap-3">
//             <button
//               type="button"
//               onClick={() => {
//                 reset({
//                   bank: SAMPLE_BANKS[0].id,
//                   creditScore: 700,
//                   tenureMonths: 12,
//                   amount: 10000,
//                 });
//                 setAiText("");
//               }}
//               className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent text-sm hover:bg-gray-50 dark:hover:bg-gray-900 transition"
//             >
//               <RefreshCw size={16} /> Reset
//             </button>

//             <button
//               type="submit"
//               className="ml-auto inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
//             >
//               <Zap size={16} /> Compute
//             </button>
//           </div>
//         </section>

//         {/* Section 3: Recommendation / Result Panel */}
//         <section className="col-span-1 lg:col-span-1 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Recommendation</h2>
//             <BarIcon />
//           </div>

//           <div className="space-y-3">
//             <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
//               <div className="flex items-baseline justify-between">
//                 <div>
//                   <div className="text-xs text-gray-500 dark:text-gray-400">Estimated EMI</div>
//                   <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">₹{emi ? emi.toFixed(2) : "0.00"}</div>
//                 </div>
//                 <div className="text-right">
//                   <div className="text-xs text-gray-500 dark:text-gray-400">Total Payable</div>
//                   <div className="text-lg font-semibold text-gray-800 dark:text-gray-100">₹{totalPayable ? totalPayable.toFixed(2) : "0.00"}</div>
//                 </div>
//               </div>

//               <div className="mt-3 text-sm text-gray-600 dark:text-gray-300">
//                 Total interest: <span className="font-medium">₹{totalInterest ? totalInterest.toFixed(2) : "0.00"}</span>
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">AI Recommendation</label>
//               <textarea
//                 readOnly
//                 value={aiText}
//                 rows={8}
//                 className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 resize-none"
//                 placeholder="Click 'Get AI Recommendation' to generate a summary..."
//               />
//             </div>

//             <div className="flex gap-3">
//               <button
//                 type="button"
//                 onClick={generateAIRecommendation}
//                 disabled={loadingAI}
//                 className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition disabled:opacity-60"
//               >
//                 {loadingAI ? "Generating..." : <>Get AI Recommendation <ArrowRight size={14} /></>}
//               </button>

//               <button
//                 type="button"
//                 onClick={() => {
//                   // For now, copy recommendation to clipboard
//                   if (!aiText) return;
//                   navigator.clipboard?.writeText(aiText);
//                 }}
//                 className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-transparent hover:bg-gray-50 dark:hover:bg-gray-900 transition"
//               >
//                 Copy
//               </button>
//             </div>
//           </div>
//         </section>
//       </form>
//     </main>
//   );
// }

// /* Small local icon component so we don't add more imports */
// function BarIcon() {
//   return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-indigo-500"><rect x="3" y="10" width="4" height="11" rx="1" fill="currentColor" /><rect x="10" y="6" width="4" height="15" rx="1" fill="currentColor" /><rect x="17" y="2" width="4" height="19" rx="1" fill="currentColor" /></svg>;
// }


import React from 'react'

const AIAdvisor = () => {
  return (
    <div className='text-4xl'>
      Under progress
    </div>
  )
}

export default AIAdvisor

