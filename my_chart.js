
  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['20', '25', '30', '35', '40', '60','65'],
      datasets: [{
        label: 'Earning',
        data: [90,  100, 125, 190, 220, 250, 300,],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });