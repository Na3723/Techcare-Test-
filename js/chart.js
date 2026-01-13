function renderChart() {
  const ctx = document.getElementById("bpChart").getContext("2d");

  const labels = historyData.map(h => `${h.month} ${h.year}`);
  const systolic = historyData.map(h => h.blood_pressure.systolic.value);
  const diastolic = historyData.map(h => h.blood_pressure.diastolic.value);

  new Chart(ctx, {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          label: "Systolic",
          data: systolic,
          borderColor: "#ff6b9a",
          backgroundColor: "rgba(255,107,154,0.25)",
          tension: 0.4,
          pointRadius: 4,
          fill: true,
        },
        {
          label: "Diastolic",
          data: diastolic,
          borderColor: "#6c5ce7",
          backgroundColor: "rgba(108,92,231,0.25)",
          tension: 0.4,
          pointRadius: 4,
          fill: true,
        },
      ],
    },
    options: {
      responsive: false,   // 🔒 THIS FIXES THE DISAPPEARING
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "right",
          labels: {
            usePointStyle: true,
            padding: 20,
          },
        },
      },
      scales: {
        y: {
          grid: { color: "#eee" },
        },
      },
    },
  });
}
