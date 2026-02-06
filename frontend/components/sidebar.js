export function Sidebar() {
  return `
    <aside class="sidebar">
      <h3>Simulation</h3>
      <ul>
        <li data-tab="flights">✈ Flights</li>
        <li data-tab="fuel">⛽ Fuel</li>
        <li data-tab="weather">🌦 Weather</li>
        <li data-tab="passengers">👥 Passengers</li>
      </ul>
    </aside>
  `;
}
