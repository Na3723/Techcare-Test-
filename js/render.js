fetchPatients().then(data => {
  const j = data.find(p => p.name === "Jessica Taylor");

  document.getElementById("profile-picture").src = j.profile_picture;
  document.getElementById("full-name").textContent = j.name;
  document.getElementById("dob").textContent = "DOB: " + j.date_of_birth;
  document.getElementById("gender").textContent = "Gender: " + j.gender;
  document.getElementById("phone").textContent = "Phone: " + j.phone_number;
  document.getElementById("insurance").textContent = "Insurance: " + j.insurance_type;

  const latest = j.diagnosis_history[0];

  document.getElementById("resp").textContent =
    "Respiratory: " + latest.respiratory_rate.value + " bpm";

  document.getElementById("temp").textContent =
    "Temperature: " + latest.temperature.value + " °F";

  document.getElementById("heart").textContent =
    "Heart Rate: " + latest.heart_rate.value + " bpm";

  const table = document.getElementById("diagnostics");
  j.diagnostic_list.forEach(d => {
    table.innerHTML += `
      <tr>
        <td>${d.name}</td>
        <td>${d.description}</td>
        <td>${d.status}</td>
      </tr>`;
  });

  const labs = document.getElementById("labs");
  j.lab_results.forEach(l => {
    labs.innerHTML += `<li>${l}</li>`;
  });

  window.historyData = j.diagnosis_history.reverse();
});
