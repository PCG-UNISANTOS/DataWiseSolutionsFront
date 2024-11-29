window.PlotlyConfig = { MathJaxConfig: "local" };
window.PLOTLYENV = window.PLOTLYENV || {};

document.addEventListener("DOMContentLoaded", function () {
  const graficoDiv = document.getElementById("grafico-educacao");

  function getTitleFontSize() {
    return window.innerWidth <= 768 ? 10 : 24;
  }

  function fetchData() {
    return fetch("https://nodeendpoint.onrender.com/investimento") // Substitua pela URL do endpoint
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao buscar os dados do endpoint");
        }
        return response.json();
      })
      .then((data) => {
        // Processar os dados para separá-los em Ensino Superior e Educação Básica
        const ensinoSuperior = data.filter((item) =>
          item.subcategoria.includes("Ensino superior"),
        );
        const educacaoBasica = data.filter((item) =>
          item.subcategoria.includes("Educacao basica"),
        );

        const xEnsinoSuperior = ensinoSuperior.map((item) => item.periodo);
        const yEnsinoSuperior = ensinoSuperior.map((item) => item.valor);

        const xEducacaoBasica = educacaoBasica.map((item) => item.periodo);
        const yEducacaoBasica = educacaoBasica.map((item) => item.valor);

        return {
          ensinoSuperior: { x: xEnsinoSuperior, y: yEnsinoSuperior },
          educacaoBasica: { x: xEducacaoBasica, y: yEducacaoBasica },
        };
      });
  }

  function renderPlot(data) {
    if (graficoDiv) {
      Plotly.newPlot(
        graficoDiv,
        [
          {
            marker: { color: "blue" },
            name: "Ensino Superior (% do PIB)",
            x: data.ensinoSuperior.x,
            y: [
              6.71, 1.41, 1.2, 2.31, 6.42, 1.99, 1.53, 1.69, 2.91, 3.64, 1.92,
              2.07, 7.04, 2.37, 0.94, 1.11, 7.63, 2.44, 1.11, 1.77,
            ],
            type: "bar",
          },
          {
            marker: { color: "red" },
            name: "Educação Básica (% do PIB)",
            x: data.educacaoBasica.x,
            y: [
              0.4, 0.25, 0.78, 1.31, 0.4, 0.36, 0.37, 1.01, 0.29, 0.18, 0.78,
              0.71, 1.34, 0.46, 0.32, 0.71, 0.4, 0.4, 0.82, 2.48,
            ],
            type: "bar",
          },
        ],
        {
          title: {
            text: "Investimento em Educação como Percentual do PIB por Período",
            font: {
              size: getTitleFontSize(),
              family: "Arial, sans-serif",
            },
            xanchor: "center",
            yanchor: "top",
            x: 0.5,
          },
          xaxis: { title: { text: "Período" } },
          yaxis: { title: { text: "Percentual do PIB (%)" } },
          legend: { title: { text: "Categorias" } },
          barmode: "group",
          responsive: true,
          margin: { t: 80 },
        },
      );
    }
  }

  fetchData()
    .then((data) => {
      renderPlot(data);
      window.addEventListener("resize", () => renderPlot(data));
    })
    .catch((error) => console.error("Erro ao renderizar o gráfico:", error));
});
