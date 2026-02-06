const socket = io("http://localhost:3000");
socket.on("update", flights => renderFlights(flights));
