window.PlotlyConfig = { MathJaxConfig: 'local' };
window.PLOTLYENV = window.PLOTLYENV || {};

document.addEventListener("DOMContentLoaded", function () {
    const graficoDiv = document.getElementById("grafico-educacao");

    function getTitleFontSize() {
        return window.innerWidth <= 768 ? 10 : 24;
    }

    function renderPlot() {
        if (graficoDiv) {
            Plotly.newPlot(graficoDiv, 
                [
                    {
                        marker: { color: "blue" },
                        name: "Ensino Superior (% do PIB)",
                        x: ["2019Q1", "2019Q2", "2019Q3", "2019Q4", "2020Q1", "2020Q2", "2020Q3", "2020Q4", "2021Q1", "2021Q2", "2021Q3", "2021Q4", "2022Q1", "2022Q2", "2022Q3", "2022Q4", "2023Q1", "2023Q2", "2023Q3", "2023Q4"],
                        y: [6.71, 1.41, 1.20, 2.31, 6.42, 1.99, 1.53, 1.69, 2.91, 3.64, 1.92, 2.07, 7.04, 2.37, 0.94, 1.11, 7.63, 2.44, 1.11, 1.77],
                        type: "bar"
                    },
                    {
                        marker: { color: "red" },
                        name: "Educação Básica (% do PIB)",
                        x: ["2019Q1", "2019Q2", "2019Q3", "2019Q4", "2020Q1", "2020Q2", "2020Q3", "2020Q4", "2021Q1", "2021Q2", "2021Q3", "2021Q4", "2022Q1", "2022Q2", "2022Q3", "2022Q4", "2023Q1", "2023Q2", "2023Q3", "2023Q4"],
                        y: [0.40, 0.25, 0.78, 1.31, 0.40, 0.36, 0.37, 1.01, 0.29, 0.18, 0.78, 0.71, 1.34, 0.46, 0.32, 0.71, 0.40, 0.40, 0.82, 2.48],
                        type: "bar"
                    }
                ],
                {
                    title: { 
                        text: "Investimento em Educação como Percentual do PIB por Período",
                        font: {
                            size: getTitleFontSize(), 
                            family: "Arial, sans-serif"
                        },
                        xanchor: "center",
                        yanchor: "top",
                        x: 0.5 
                    },
                    xaxis: { title: { text: "Período" } },
                    yaxis: { title: { text: "Percentual do PIB (%)" } },
                    legend: { title: { text: "Categorias" } },
                    barmode: "group",
                    responsive: true,
                    margin: { t: 80 }
                }
            );
        }
    }


    renderPlot();
    window.addEventListener("resize", renderPlot);
});
