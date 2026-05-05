import Plot from "react-plotly.js";

/* ================= FULL DATA ================= */
const scatterData = [
    // HTR
    { x: 3, y: 0.019183 }, { x: 31, y: 0.037172 },
    { x: 3, y: 0.004449 }, { x: 50, y: 0.072729 },
    { x: 28, y: 0.007144 }, { x: 8, y: 0.017366 },
    { x: 15, y: 0.029137 }, { x: 16, y: 0.024341 },
    { x: 40, y: 0.043149 }, { x: 40, y: 0.033363 },
    { x: 15, y: 0.052803 }, { x: 46, y: 0.072334 },
    { x: 27, y: 0.070032 }, { x: 34, y: 0.043851 },
    { x: 18, y: 0.072826 }, { x: 7, y: 0.046294 },
    { x: 7, y: 0.216496 }, { x: 9, y: 0.043646 },

    // TM
    { x: 20, y: 0.014792 }, { x: 33, y: 0.068467 },
    { x: 35, y: 0.032980 },

    // VIP
    { x: 6.5, y: 0.041060 }, { x: 10, y: 0.021175 },
    { x: 30, y: 0.048854 }, { x: 36, y: 0.115261 },
    { x: 5, y: 0.015375 }, { x: 18, y: 0.046340 },
    { x: 5, y: 0.023232 }, { x: 25, y: 0.039935 },
    { x: 10, y: 0.073849 }, { x: 44, y: 0.017425 },
    { x: 12, y: 0.014366 }, { x: 10, y: 0.012774 },
    { x: 10, y: 0.053412 }, { x: 6, y: 0.023120 },
    { x: 5, y: 0.014047 }, { x: 9, y: 0.015799 },
    { x: 12, y: 0.039904 }, { x: 9, y: 0.049148 },

    // SNY
    { x: 7, y: 0.107965 }, { x: 25, y: 0.094913 },
    { x: 6, y: 0.051517 }, { x: 7, y: 0.041601 },
    { x: 6, y: 0.063058 }, { x: 5, y: 0.040310 },
    { x: 15, y: 0.045279 }, { x: 5, y: 0.017207 },
    { x: 4, y: 0.150377 }, { x: 2.5, y: 0.020695 },
    { x: 5, y: 0.041055 }, { x: 8, y: 0.070750 },
    { x: 5.5, y: 0.029657 }, { x: 18, y: 0.016774 },
    { x: 4, y: 0.015034 }, { x: 7, y: 0.021361 },
    { x: 8, y: 0.058572 }, { x: 5, y: 0.015485 },
];

/* ================= REGRESSION ================= */
const getRegression = (data) => {
    const x = data.map((d) => d.x);
    const y = data.map((d) => d.y);

    const n = x.length;
    const sumX = x.reduce((a, b) => a + b, 0);
    const sumY = y.reduce((a, b) => a + b, 0);
    const sumXY = x.reduce((acc, val, i) => acc + val * y[i], 0);
    const sumXX = x.reduce((acc, val) => acc + val * val, 0);

    const slope =
        (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
    const intercept = (sumY - slope * sumX) / n;

    const xRange = [...x].sort((a, b) => a - b);
    const yPred = xRange.map((val) => slope * val + intercept);

    return { x: xRange, y: yPred };
};

/* ================= COMPONENT ================= */
const GammaScatter = () => {
    const regression = getRegression(scatterData);

    return (
        <Plot
            data={[
                {
                    x: scatterData.map((d) => d.x),
                    y: scatterData.map((d) => d.y),
                    mode: "markers",
                    type: "scatter",
                    name: "Subjects",
                    marker: {
                        size: 8,
                        color: "#006cfa",
                        opacity: 0.75,
                        line: { color: "white", width: 1 },
                    },
                },
                {
                    x: regression.x,
                    y: regression.y,
                    mode: "lines",
                    type: "scatter",
                    name: "Regression",
                    line: { color: "#00e060", width: 2 },
                },
            ]}

            layout={{
                title: {
                    text: "Gamma vs Years of Practice",
                    font: { size: 12 },
                },
                xaxis: {
                    title: "Years of Meditation Practice",
                    showgrid: false,
                },
                yaxis: {
                    title: "Gamma Relative Power",
                    showgrid: false,
                },
                // legend: {
                //     orientation: "h",
                //     y: -0.25,
                //     x: 0.5,
                //     xanchor: "center"
                // },
                margin: { l: 50, r: 20, t: 40, b: 40 },
                plot_bgcolor: "#ffffff",
                paper_bgcolor: "#ffffff",
            }}

      

            config={{ displayModeBar: false }}
            style={{ width: "100%", height: "300px" }}
        />
    );
};

export default GammaScatter;