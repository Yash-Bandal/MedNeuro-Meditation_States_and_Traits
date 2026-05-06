import Plot from "react-plotly.js";

const ViolinH1 = ({ ctr = [], sny = [] }) => {
    const data = [
        {
            type: "violin",
            y: ctr,
            name: "CTR",
            box: { visible: true },
            meanline: { visible: false },
            points: "all",
            jitter: 0.12,
            pointpos: 0,
            marker: {
                size: 5,
                color: "rgba(0,0,0,0.6)",
            },
            line: { color: "#bfdbfe", width: 1 },
            fillcolor: "rgba(219,234,254,0.8)", // light blue
        },
        {
            type: "violin",
            y: sny,
            name: "SNY",
            box: { visible: true },
            meanline: { visible: false },
            points: "all",
            jitter: 0.12,
            pointpos: 0,
            marker: {
                size: 5,
                color: "rgba(0,0,0,0.6)",
            },
            line: { color: "#bbf7d0", width: 1 },
            fillcolor: "rgba(220,252,231,0.85)", // light green
        },
    ];

    const layout = {
        title: {
            text: "Trait Gamma Power",
            font: { size: 13 },
            x: 0.5,
        },
        margin: { l: 50, r: 20, t: 40, b: 30 },

        yaxis: {
            title: {
                text: "Gamma Relative Power",
                font: { size: 10 },
            },
            tickfont: { size: 10 },
            showgrid: false,
            zeroline: false,
        },

        xaxis: {
            tickfont: { size: 10 },
            showgrid: false,
        },

        showlegend: false,

        plot_bgcolor: "#ffffff",
        paper_bgcolor: "#ffffff",
    };

    return (
        <Plot
            data={data}
            layout={layout}
            config={{ displayModeBar: false, responsive: true }}
            style={{ width: "100%", height: "300px" }}
        />
    );
};

export default ViolinH1;