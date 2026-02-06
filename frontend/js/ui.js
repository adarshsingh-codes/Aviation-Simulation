function renderFlights(flights) {
  const ul = document.getElementById("flights");
  ul.innerHTML = "";

  flights.forEach(f => {
    const li = document.createElement("li");
    li.innerText =
      `${f.id} | ${f.from} → ${f.to} | Fuel ${f.fuel}% | Pax ${f.passengers}/${f.maxPassengers} | ${f.weather} | ${f.status}`;
    ul.appendChild(li);
  });
}
