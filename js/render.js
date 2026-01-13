fetchPatients().then(data => {
  const j = data.find(p => p.name === "Jessica Taylor");

  document.getElementById("patient-photo").src = j.profile_picture;
  document.getElementById("profile-picture").src = j.profile_picture;

  document.getElementById("full-name").textContent = j.name;
  document.getElementById("dob").textContent = j.date_of_birth;
  document.getElementById("gender").textContent = j.gender;
  document.getElementById("phone").textContent = j.phone_number;
  document.getElementById("insurance").textContent = j.insurance_type;

  const latest = j.diagnosis_history[0];

  document.getElementById("sys-val").textContent =
    latest.blood_pressure.systolic.value;

  document.getElementById("dia-val").textContent =
    latest.blood_pressure.diastolic.value;

  document.getElementById("resp-val").textContent =
    `${latest.respiratory_rate.value} bpm`;

  document.getElementById("temp-val").textContent =
    `${latest.temperature.value} °F`;

  document.getElementById("heart-val").textContent =
    `${latest.heart_rate.value} bpm`;

  const table = document.getElementById("diagnostics");
  table.innerHTML = `
    <tr>
      <th>Problem</th>
      <th>Description</th>
      <th>Status</th>
    </tr>
  `;

  j.diagnostic_list.forEach(d => {
    table.innerHTML += `
      <tr>
        <td>${d.name}</td>
        <td>${d.description}</td>
        <td>${d.status}</td>
      </tr>
    `;
  });

  const labs = document.getElementById("labs");
  j.lab_results.forEach(l => {
    labs.innerHTML += `<li>${l}</li>`;
  });

  window.historyData = [...j.diagnosis_history].reverse();
  renderChart();
});


