var labels = [];
var datapoints;
var myChart;

function showGraph() {
    console.log("Hi")
    // document.getElementById("crates").innerHTML = "USD" + "/" + "INR";

    let chartStatus = Chart.getChart("myChart");
    if (chartStatus != undefined) {
        chartStatus.destroy();
    }
    const chartData = "../static/Javascript/output_file.csv";
    // const chartData = "output1.csv";
    dates = [];
    usd = [];

    // Reading csv file using d3 library
    d3.csv(chartData).then(function (datapoints) {
        for (i = 0; i < datapoints.length; i++) {
            dates.push(datapoints[i]["Date"]);
            usd.push(datapoints[i]["Price"]);
        }
        // console.log(dates);
        // console.log(usd);
        labels = dates;

        // To specify the data to be displayed in chart
        const data = {
            labels: dates,
            datasets: [
                {
                    label: "Currency Comparision",
                    data: usd,
                    borderColor: "#007bff",
                    borderWidth: 1,
                    pointRadius: 5,
                    pointBackgroundColor: "#0000FF",
                    fill: false,
                    tension: 0.1,
                },
            ],
        };

        // Specify the type of chart and scales
        const config = {
            type: "line",
            data,
            options: {
                scales: {
                    y: {
                        // offset: true,
                        // display: true,
                        beginAtZero: false,
                    },
                },
            },
        };

        // Create the chart
        myChart = new Chart(document.getElementById("myChart"), config);
    });
    console.log(dates);
    console.log(usd);
}

function updateChart(range) {
    if (range == 3600) {
        range = labels.length;
    }
    console.log(myChart.config.data.datasets[0].data);
    const rangeValue = labels.slice(labels.length - range, labels.length);
    myChart.config.data.labels = rangeValue;
    const ansValue = usd.slice(labels.length - range, labels.length);
    myChart.config.data.datasets[0].data = ansValue;
    // const temp = findMinMax(ansValue, rangeValue);
    // const backValue = temp[0];
    // myChart.config.data.datasets[0].pointBackgroundColor = backValue;
    // const pointValue = temp[1];
    // myChart.config.data.datasets[0].pointRadius = pointValue;
    myChart.update(myChart.config.data.datasets.data);
}

function filterUsingDate() {
    var startdate = document.getElementById("startdate").value;
    var enddate = document.getElementById("enddate").value;
  
    startdate = startdate.split("-").reverse().join("-");
    enddate = enddate.split("-").reverse().join("-");
    const startIndex = labels.indexOf(startdate);
    const endIndex = labels.indexOf(enddate);
    const rangeValue = labels.slice(startIndex, endIndex);
    myChart.config.data.labels = rangeValue;
    const ansValue = usd.slice(startIndex, endIndex);
    myChart.config.data.datasets[0].data = ansValue;
    // const temp = findMinMax(ansValue, rangeValue);
    // const backValue = temp[0];
    // myChart.config.data.datasets[0].pointBackgroundColor = backValue;
    // const pointValue = temp[1];
    // myChart.config.data.datasets[0].pointRadius = pointValue;
    myChart.update(myChart.config.data.datasets.data);
}


  
