const form = document.getElementById("sunrise-form");
const results = document.getElementById("results");

// Function to fetch sunrise for a given lat/lng
async function getSunrise(lat, lng) {
  const response = await fetch(
    `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&formatted=0`
  );
  if (!response.ok) throw new Error("Failed to fetch sunrise data");
  const data = await response.json();
  return new Date(data.results.sunrise); // returns Date object in UTC
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Get values
  const lat1 = document.getElementById("lat1").value;
  const lng1 = document.getElementById("lng1").value;
  const lat2 = document.getElementById("lat2").value;
  const lng2 = document.getElementById("lng2").value;

  try {
    // Run both API calls in parallel
    const [sunrise1, sunrise2] = await Promise.all([
      getSunrise(lat1, lng1),
      getSunrise(lat2, lng2)
    ]);

    results.innerHTML = `
      <p>🌍 City 1 Sunrise: <b>${sunrise1.toLocaleTimeString()}</b></p>
      <p>🌎 City 2 Sunrise: <b>${sunrise2.toLocaleTimeString()}</b></p>
    `;
  } catch (error) {
    console.error(error);
    results.textContent = "Error fetching sunrise times.";
  }
});
