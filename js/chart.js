let bpChart;

function renderChart(history) {
  const ctx = document.getElementById("bpChart").getContext("2d");

  if (bpChart) bpChart.destroy();

  bpChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: history.map(h => `${h.month} ${h.year}`),
      datasets: [
        {
          label: "Systolic",
          data: history.map(h => h.blood_pressure.systolic.value),
          borderColor: "#ff6b8a",
          backgroundColor: "rgba(255,107,138,0.2)",
          tension: 0.4,
          fill: true,
          pointRadius: 4
        },
        {
          label: "Diastolic",
          data: history.map(h => h.blood_pressure.diastolic.value),
          borderColor: "#7b6cf6",
          backgroundColor: "rgba(123,108,246,0.2)",
          tension: 0.4,
          fill: true,
          pointRadius: 4
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "right",
          labels: { usePointStyle: true }
        }
      },
      scales: {
        y: {
          beginAtZero: false,
          grid: { color: "#e5e7eb" }
        },
        x: {
          grid: { display: false }
        }
      }
    }
  });
