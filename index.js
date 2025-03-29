const ctx = document.getElementById('analyticsChart').getContext('2d');

    const dataOptions = {
        daily: {
            labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            datasets: [
                {
                    label: "Label1",
                    data: [3000, 12000, 8000, 15000, 6000, 9000, 20000],
                    borderColor: "rgba(71, 69, 164, 1)",
                    backgroundColor: "rgba(71, 69, 164, 0.1)",
                    color: "rgba(153, 153, 153, 1)",
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4,
                    pointStyle: false,

                },
                {
                    label: "Label2",
                    data: [9000, 5000, 13000, 8000, 1800, 8000, 12000],
                    borderColor: "rgba(248, 205, 112, 1)",
                    backgroundColor: "rgba(248, 205, 112, 0.1)",
                    color: "rgba(153, 153, 153, 1)",
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4,
                    pointStyle: false,

                }
            ]
        },
        weekly: {
            labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
            datasets: [
                {
                    label: "Label1",
                    data: [4500, 3000, 20000, 10000],
                    borderColor: "rgba(71, 69, 164, 1)",
                    backgroundColor: "rgba(0, 0, 255, 0.1)",
                    borderWidth: 2,
                    fill: true,                    pointStyle: false,
                    tension: 0.4
                },
                {
                    label: "Label2",
                    data: [20000, 15000, 25000, 10000],
                    borderColor: "rgba(248, 205, 112, 1)",
                    backgroundColor: "rgba(255, 165, 0, 0.1)",
                    borderWidth: 2,
                    fill: true,
                    pointStyle: false,
                    tension: 0.4
                }
            ]
        },
        monthly: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [
                {
                    label: "Label1",
                    data: [12000, 4000, 16000, 8000, 15000, 7000],
                    borderColor: "rgba(71, 69, 164, 1)",
                    backgroundColor: "rgba(0, 0, 255, 0.1)",
                    borderWidth: 2,
                    fill: true,                    pointStyle: false,
                    tension: 0.4,
                    
                },
                {
                    label: "Label2",
                    data: [10000, 1000, 3000, 25000, 15000, 24000],
                    borderColor: "rgba(248, 205, 112, 1)",
                    backgroundColor: "rgba(255, 165, 0, 0.1)",
                    borderWidth: 2,
                    fill: true,                    pointStyle: false,
                    tension: 0.4
                }
            ]
        }
    };

    let chart = new Chart(ctx, {
        type: "line",
        data: dataOptions["daily"],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                      stepSize: 5000,
                      callback: value => `${value / 1000} K`
                  }
                }
            },
            animation: {
                duration: 500,
                easing: "easeInOutQuart"
            },
            plugins: {
              legend: {
                position: "top",
                display: false,
              }
          },
        }
    });

    document.getElementById("timeframe").addEventListener("change", function () {
        const selectedOption = this.value;
        chart.data = dataOptions[selectedOption];
        chart.update();
    });