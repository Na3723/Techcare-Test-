function renderChart() {
  const ctx = document.getElementById("bpChart");
  const sliced = historyData.slice(-6);

  new Chart(ctx, {
    type: "line",
    data: {
      labels: sliced.map(h => `${h.month} ${h.year}`),
      datasets: [
        {
          data: sliced.map(h => h.blood_pressure.systolic.value),
          borderColor: "#FF6B8A",
          tension: 0.4,
          pointRadius: 5
        },
        {
          data: sliced.map(h => h.blood_pressure.diastolic.value),
          borderColor: "#7B6CF6",
          tension: 0.4,
          pointRadius: 5
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        y: { grid: { color: "#eee" } },
        x: { grid: { display: false } }
      }
    }
  });
}
