const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const flights = require("./data/flights.json");
const aircraft = require("./data/aircraft.json");

const { fuelSim } = require("./simulation/fuelSim");
const { passengerSim } = require("./simulation/passengerSim");
const { weatherSim } = require("./simulation/weatherSim");

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

/* APIs */
app.get("/api/flights", (req, res) => res.json(flights));

app.post("/api/flights", (req, res) => {
  const { from, to, distance, aircraft: model } = req.body;
  const plane = aircraft.find(a => a.model === model);

  const flight = {
    id: "FL" + Math.floor(Math.random() * 10000),
    from, to, distance,
    aircraft: model,
    fuel: 100,
    passengers: 0,
    maxPassengers: plane.capacity,
    weather: "Clear",
    status: "On Time",
    delay: 0
  };

  flights.push(flight);
  res.json(flight);
});

app.delete("/api/flights/:id", (req, res) => {
  const i = flights.findIndex(f => f.id === req.params.id);
  if (i !== -1) flights.splice(i, 1);
  res.json({ success: true });
});

/* Simulation loop */
setInterval(() => {
  flights.forEach(f => {
    fuelSim(f);
    passengerSim(f);
    weatherSim(f);
  });
  io.emit("update", flights);
}, 2000);

io.on("connection", () => console.log("Client connected"));

server.listen(3000, () =>
  console.log("Server running on http://localhost:3000")
);
