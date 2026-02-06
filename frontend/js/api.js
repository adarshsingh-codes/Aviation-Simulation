const API = "http://localhost:3000/api";

function addFlight() {
  fetch(`${API}/flights`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      from: from.value,
      to: to.value,
      distance: Number(distance.value),
      aircraft: aircraft.value
    })
  });
}

function removeFlight() {
  fetch(`${API}/flights/${fid.value}`, { method: "DELETE" });
}
