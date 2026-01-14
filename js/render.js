fetchPatients().then(data => {
  const j = data.find(p => p.name === "Jessica Taylor");

  // LEFT + RIGHT PROFILE
  document.getElementById("patient-photo").src = j.profile_picture;
  document.getElementById("profile-picture").src = j.profile_picture;
  document.getElementById("full-name").textContent = j.name;
  document.getElementById("dob").textContent = j.date_of_birth;
  document.getElementById("gender").textContent = j.gender;
  document.getElementById("phone").textContent = j.phone_number;
  document.getElementById("insurance").textContent = j.insurance_type;

  // LATEST DIAGNOSIS (most recent)
  const latest = j.diagnosis_history[0];

  document.getElementById("sys-val").textContent =
    latest.blood_pressure.systolic.value;
  document.getElementById("sys-level").textContent =
    latest.blood_pressure.systolic.levels;

  document.getElementById("dia-val").textContent =
    latest.blood_pressure.diastolic.value;
  document.getElementById("dia-level").textContent =
    latest.blood_pressure.diastolic.levels;

  document.getElementById("resp-val").textContent =
    `${latest.respiratory_rate.value} bpm`;
  document.getElementById("temp-val").textContent =
    `${latest.temperature.value} °F`;
  document.getElementById("heart-val").textContent =
    `${latest.heart_rate.value} bpm`;

  // DIAGNOSTIC LIST
  const tbody = document.getElementById("diagnostics");
  tbody.innerHTML = "";

  j.diagnostic_list.forEach(d => {
    const statusClass = d.status.toLowerCase().split(" ")[0];

    tbody.innerHTML += `
      <tr>
        <td>${d.name}</td>
        <td>${d.description}</td>
        <td class="status ${statusClass}">${d.status}</td>
      </tr>
    `;
  });

  // LAB RESULTS
  const labs = document.getElementById("labs");
  labs.innerHTML = "";

  j.lab_results.forEach(l => {
    labs.innerHTML += `
      <div class="lab-item">
        <span>${l}</span>
        <i class="fa-solid fa-download"></i>
      </div>
    `;
  });

  // CHART DATA (chronological)
  window.historyData = [...j.diagnosis_history].reverse();
  renderChart();
});
