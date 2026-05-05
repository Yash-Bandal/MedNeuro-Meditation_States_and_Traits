import Plot from "react-plotly.js";

/* ================= FULL DATA ================= */
const dataRaw = [
    // CTR
    1.485758e-16, 9.834561e-17, 1.784531e-16, 2.355328e-16,
    2.999773e-16, 1.153850e-16, 1.766779e-16, 2.319539e-16,
    3.334939e-16, 1.903539e-16, 2.375586e-16, 1.744594e-16,
    3.362993e-16, 2.802487e-16, 1.409592e-16,

    // HTR
    1.295853e-16, 2.129238e-16, 1.886237e-16, 1.990661e-16,
    8.406617e-17, 8.895315e-17, 1.405461e-16, 2.025629e-16,
    7.281960e-17, 2.248579e-16, 1.385353e-16, 8.835100e-17,
    2.622283e-16, 1.700273e-16,

    // SNY
    2.887063e-16, 4.551583e-16, 2.260676e-16, 9.116709e-17,
    4.443130e-16, 2.305470e-16, 1.543848e-16, 2.377177e-16,
    2.397738e-16, 2.622170e-16, 2.603327e-16, 2.182230e-16,
    1.283234e-16, 4.947982e-16, 2.757870e-16,

    // VIP
    1.672171e-16, 5.452192e-16, 2.464713e-16, 3.475953e-16,
    1.523618e-16, 1.848943e-16, 1.392708e-16, 1.282711e-16,
    1.182094e-16, 1.531903e-16, 3.584617e-16, 1.296365e-16,
    9.005377e-17, 2.816292e-16, 3.379987e-16
];

/* ================= GROUP SPLIT ================= */
const groups = ["CTR", "HTR", "SNY", "VIP"];

const splitData = {
    CTR: dataRaw.slice(0, 15),
    HTR: dataRaw.slice(15, 29),
    SNY: dataRaw.slice(29, 44),
    VIP: dataRaw.slice(44),
};

/* ================= COLORS ================= */
const colors = {
    CTR: "#b05aee",
    HTR: "#00d2ff",
    SNY: "#006cfa",
    VIP: "#00e060",
};

/* ================= COMPONENT ================= */
const BoxH3 = () => {
    const plotData = groups.map((g) => ({
        type: "box",
        y: splitData[g],
        name: g,

        width: 0.5,   // 👈 THIS FIXES THIN BOXES

        boxpoints: "all",
        jitter: 0.28,
        pointpos: 0,

        marker: {
            size: 5,
            color: "rgba(0,0,0,0.75)",
        },

        line: {
            color: colors[g],
            width: 1.2,
        },

        fillcolor: colors[g] + "33",

        quartilemethod: "inclusive",
    }));
    return (
        <Plot
            data={plotData}
            layout={{
                title: {
                    text: "Parietal–Occipital EEG Power",
                    font: { size: 12 },
                },

                xaxis: {
                    title: "Groups",
                    showgrid: false,
                },

                yaxis: {
                    title: "Mean Parietal–Occipital EEG Power",
                    showgrid: false,
                },

                boxmode: "group",

                margin: { l: 60, r: 20, t: 40, b: 40 },
                plot_bgcolor: "#ffffff",
                paper_bgcolor: "#ffffff",

                showlegend: false,
            }}
            config={{ displayModeBar: false }}
            style={{ width: "100%", height: "260px" }}
        />
    );
};

export default BoxH3;