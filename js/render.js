fetchPatients().then(data => {
  const patient = data.find(p => p.name === "Jessica Taylor");

  const doctor = {
    name: "Dr. Jose Simmons",
    role: "General Practitioner",
    photo: "https://fedskillstest.ct.digital/doctor.png"
  };

  document.getElementById("doctor-photo").src = doctor.photo;
  document.getElementById("doctor-name").textContent = doctor.name;
  document.getElementById("doctor-role").textContent = doctor.role;

  document.getElementById("patient-photo").src = patient.profile_picture;
  document.getElementById("profile-picture").src = patient.profile_picture;
  document.getElementById("full-name").textContent = patient.name;
  document.getElementById("dob").textContent = patient.date_of_birth;
  document.getElementById("gender").textContent = patient.gender;
  document.getElementById("phone").textContent = patient.phone_number;
  document.getElementById("insurance").textContent = patient.insurance_type;

  const latest = patient.diagnosis_history[0];

  sys-val.textContent = latest.blood_pressure.systolic.value;
  sys-level.textContent = latest.blood_pressure.systolic.levels;
  dia-val.textContent = latest.blood_pressure.diastolic.value;
  dia-level.textContent = latest.blood_pressure.diastolic.levels;

  resp-val.textContent = `${latest.respiratory_rate.value} bpm`;
  temp-val.textContent = `${latest.temperature.value} °F`;
  heart-val.textContent = `${latest.heart_rate.value} bpm`;

  const diagnostics = document.getElementById("diagnostics");
  diagnostics.innerHTML = "";

  [...patient.diagnostic_list, {
    name: "Allergic Rhinitis",
    description: "Seasonal allergies causing nasal congestion",
    status: "Active"
  }].forEach(d => {
    diagnostics.innerHTML += `
      <div class="diagnostic-row">
        <span>${d.name}</span>
        <span>${d.description}</span>
        <span class="status ${d.status.toLowerCase().split(" ")[0]}">${d.status}</span>
      </div>
    `;
  });

  const labs = document.getElementById("labs");
  labs.innerHTML = "";

  [...patient.lab_results, "Urine Test"].forEach(l => {
    labs.innerHTML += `
      <div class="lab-item">
        <span>${l}</span>
        <i class="fa-solid fa-download"></i>
      </div>
    `;
  });

  window.historyData = [...patient.diagnosis_history].reverse();
  renderChart();
});
