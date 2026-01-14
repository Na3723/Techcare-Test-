fetchPatients().then(data => {
  const j = data.find(p => p.name === "Jessica Taylor");

  /* ================= DOCTOR PROFILE ================= */

  const doctor = {
    name: "Dr. Jose Simmons",
    role: "General Practitioner",
    photo: "https://fedskillstest.ct.digital/doctor.png"
  };

  document.getElementById("doctor-photo").src = doctor.photo;
  document.getElementById("doctor-name").textContent = doctor.name;
  document.getElementById("doctor-role").textContent = doctor.role;

  /* ================= PATIENT PROFILE ================= */

  document.getElementById("patient-photo").src = j.profile_picture;
  document.getElementById("profile-picture").src = j.profile_picture;
  document.getElementById("full-name").textContent = j.name;
  document.getElementById("dob").textContent = j.date_of_birth;
  document.getElementById("gender").textContent = j.gender;
  document.getElementById("phone").textContent = j.phone_number;
  document.getElementById("insurance").textContent = j.insurance_type;

  /* ================= LATEST DIAGNOSIS ================= */

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

  /* ================= DIAGNOSTIC LIST ================= */

  const diagnosticsEl = document.getElementById("diagnostics");
  diagnosticsEl.innerHTML = "";

  const extendedDiagnostics = [
    ...j.diagnostic_list,
    {
      name: "Allergic Rhinitis",
      description: "Seasonal allergies causing nasal congestion",
      status: "Active"
    }
  ];

  extendedDiagnostics.forEach(d => {
    const statusClass = d.status.toLowerCase().split(" ")[0];

    const row = document.createElement("div");
    row.className = "diagnostic-row";

    row.innerHTML = `
      <span>${d.name}</span>
      <span>${d.description}</span>
      <span class="status ${statusClass}">${d.status}</span>
    `;

    diagnosticsEl.appendChild(row);
  });

  /* ================= LAB RESULTS ================= */

  const labs = document.getElementById("labs");
  labs.innerHTML = "";

  const extendedLabs = [
    ...j.lab_results,
    "Urine Test"
  ];

  extendedLabs.forEach(l => {
    labs.innerHTML += `
      <div class="lab-item">
        <span>${l}</span>
        <i class="fa-solid fa-download"></i>
      </div>
    `;
  });

  /* ================= CHART DATA ================= */

  window.historyData = [...j.diagnosis_history].reverse();
  renderChart();
});
