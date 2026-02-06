export function renderFuelChart(ctx, data) {
  new Chart(ctx, {
    type: "line",
    data: {
      labels: data.map(d => d.time),
      datasets: [{
        label: "Fuel Usage",
        data: data.map(d => d.fuel),
        borderColor: "#0b3c5d"
      }]
    }
  });
}
