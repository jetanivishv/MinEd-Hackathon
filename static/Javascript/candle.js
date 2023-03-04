const getData = async () => {
  const res = await fetch("../static/Javascript/output_file.csv");
  let resp = await res.text();
  resp = resp.split("\n");
  resp.shift();
  const cdata = resp.map((row) => {
    const [time1, close, open, high, low] = row.split(",");
    let time2 = time1.split("-").reverse().join("-");
    return {
      time: time2,
      open: open * 1,
      high: high * 1,
      low: low * 1,
      close: close * 1,
    };
  });
  return cdata;
};

const candleChart = async () => {
  const chartProperties = {
    width: 1500,
    height: 600,

    timeScale: {
      timeVisible: true,
      secondsVisible: true,
    },
  };
  const domElement = document.getElementById("candleChart");
  const chart = LightweightCharts.createChart(domElement, chartProperties);
  const candleseries = chart.addCandlestickSeries();
  const klinedata = await getData();

  candleseries.setData(klinedata);
};

window.addEventListener("load", candleChart);
