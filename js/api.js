const API_URL = "https://fedskillstest.coalitiontechnologies.workers.dev";

async function fetchPatients() {
  const username = "coalition";
  const password = "skills-test";

  const auth = btoa(`${username}:${password}`);

  const res = await fetch(API_URL, {
    headers: {
      Authorization: `Basic ${auth}`
    }
  });

  if (!res.ok) {
    throw new Error("Failed to fetch patient data");
  }

  return res.json();
}
