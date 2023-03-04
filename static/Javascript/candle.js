const getData = async () => {
    const res = await fetch('../static/Javascript/output_file.csv');
    let resp = await res.text();
    resp=resp.split('\n');
    resp.shift();
    const cdata = resp.map((row) => {
      const [time1,close, open, high, low] = row.split(',');
      let time2=time1.split("-").reverse().join("-");
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
    const domElement = document.getElementById('candleChart');
    console.log(domElement)
    const chart =  LightweightCharts.createChart(domElement, chartProperties);
    const candleseries = chart.addCandlestickSeries();
    const klinedata = await getData();
    // console.log(klinedata);
    // let obj1 = klinedata.findIndex(o => o.time === "2020-01-06")
    // console.log(obj1);
    // let obj2 = klinedata.findIndex(o => o.time === "2021-01-01")
    // console.log(obj2);
    // finaldata=[];
    // for(let i=obj1;i<=obj2;i++){
    //     finaldata.push(klinedata[i])
    // }
    console.log(chart);
    console.log(klinedata);
    candleseries.setData(klinedata);
}

// candleChart()
window.addEventListener('load',candleChart);