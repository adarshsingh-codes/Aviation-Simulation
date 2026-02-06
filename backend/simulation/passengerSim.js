function passengerSim(flight) {
  if (flight.passengers < flight.maxPassengers) {
    flight.passengers += 3;
  }
}
module.exports = { passengerSim };
