const socket = io("http://localhost:3000");

socket.on("flight-update", data => {
  console.log("Flight update:", data);
});
