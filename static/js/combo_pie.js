async function loadComboPie() {
  // fetch dataset from Flask backend
  const response = await fetch("/line_pie_data");
  const dataset = await response.json();

  const chartDom = document.getElementById("combochart");
  const myChart = echarts.init(chartDom);

  const option = {
    legend: {},
    tooltip: {
      trigger: "axis",
      showContent: false
    },
    dataset: { source: dataset },
    xAxis: { type: "category" },
    yAxis: { gridIndex: 0 },
    grid: { top: "55%" },
    series: [
      { type: "line", smooth: true, seriesLayoutBy: "row", emphasis: { focus: "series" } },
      { type: "line", smooth: true, seriesLayoutBy: "row", emphasis: { focus: "series" } },
      { type: "line", smooth: true, seriesLayoutBy: "row", emphasis: { focus: "series" } },
      { type: "line", smooth: true, seriesLayoutBy: "row", emphasis: { focus: "series" } },
      {
        type: "pie",
        id: "pie",
        radius: "30%",
        center: ["50%", "25%"],
        emphasis: { focus: "self" },
        label: {
          formatter: "{b}: {@2012} ({d}%)"
        },
        encode: {
          itemName: "product",
          value: "2012",
          tooltip: "2012"
        }
      }
    ]
  };

  myChart.on("updateAxisPointer", function (event) {
    const xAxisInfo = event.axesInfo[0];
    if (xAxisInfo) {
      const dimension = xAxisInfo.value + 1;
      myChart.setOption({
        series: {
          id: "pie",
          label: {
            formatter: "{b}: {@[" + dimension + "]} ({d}%)"
          },
          encode: {
            value: dimension,
            tooltip: dimension
          }
        }
      });
    }
  });

  myChart.setOption(option);
}

loadComboPie();