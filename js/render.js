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

  sys-val.textContent = latest.blood_pressure.systolic.value;
  sys-level.textContent = latest.blood_pressure.systolic.levels;
  dia-val.textContent = latest.blood_pressure.diastolic.value;
  dia-level.textContent = latest.blood_pressure.diastolic.levels;

  resp-val.textContent = `${latest.respiratory_rate.value} bpm`;
  temp-val.textContent = `${latest.temperature.value} °F`;
  heart-val.textContent = `${latest.heart_rate.value} bpm`;

  const tbody = document.getElementById("diagnostics");
  j.diagnostic_list.forEach(d => {
    tbody.innerHTML += `
      <tr>
        <td>${d.name}</td>
        <td>${d.description}</td>
        <td class="status ${d.status.toLowerCase().split(" ")[0]}">${d.status}</td>
      </tr>`;
  });

  j.lab_results.forEach(l => {
    labs.innerHTML += `
      <div class="lab-item">
        <span>${l}</span>
        <i class="fa-solid fa-download"></i>
      </div>`;
  });

  window.historyData = [...j.diagnosis_history].reverse();
  renderChart();
});
