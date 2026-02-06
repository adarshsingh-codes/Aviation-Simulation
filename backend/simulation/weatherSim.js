function weatherSim(flight) {
  const w = ["Clear", "Rain", "Storm"];
  const weather = w[Math.floor(Math.random() * w.length)];
  flight.weather = weather;

  if (weather === "Storm") {
    flight.status = "Delayed";
    flight.delay += 5;
  }
}
module.exports = { weatherSim };
