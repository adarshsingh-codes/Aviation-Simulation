const BASE_URL = "http://localhost:3000";

export async function getFlights() {
  const res = await fetch(`${BASE_URL}/api/flights`);
  return res.json();
}
