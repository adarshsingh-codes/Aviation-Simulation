function fuelSim(flight) {
  if (flight.fuel > 0) flight.fuel -= 1;
  if (flight.fuel < 20) flight.status = "Low Fuel";
}
module.exports = { fuelSim };
