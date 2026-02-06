export function FlightCard(flight) {
  return `
    <div class="flight-card">
      <h4>${flight.flightNo}</h4>
      <p><strong>From:</strong> ${flight.from}</p>
      <p><strong>To:</strong> ${flight.to}</p>
      <p><strong>Status:</strong> ${flight.status}</p>
    </div>
  `;
}
