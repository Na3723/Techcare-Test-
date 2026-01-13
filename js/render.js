fetchPatients().then(data => {
  const jessica = data.find(p => p.name === "Jessica Taylor");

  document.getElementById("patient-photo").src = jessica.profile_picture;
  document.getElementById("profile-picture").src = jessica.profile_picture;

  document.getElementById("full-name").textContent = jessica.name;
  document.getElementById("dob").textContent = jessica.date_of_birth;
  document.getElementById("gender").textContent = jessica.gender;
  document.getElementById("phone").textContent = jessica.phone_number;
  document.getElementById("insurance").textContent = jessica.insurance_type;

  const latest = jessica.diagnosis_history[0];

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

  const tbody = document.querySelector("#diagnostics tbody");
  tbody.innerHTML = "";

  jessica.diagnostic_list.forEach(d => {
    tbody.innerHTML += `
      <tr>
        <td>${d.name}</td>
        <td>${d.description}</td>
        <td>${d.status}</td>
      </tr>
    `;
  });

  const labs = document.getElementById("labs");
  labs.innerHTML = "";
  jessica.lab_results.forEach(l => {
    labs.innerHTML += `<li>${l}</li>`;
  });

  renderChart([...jessica.diagnosis_history].reverse());
});
