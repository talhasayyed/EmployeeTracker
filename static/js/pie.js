function loadPie1(chartData) {
    const chartDom = document.getElementById('piechart1');
    const myChart = echarts.init(chartDom);

    const option = {
        backgroundColor: '#ffffff',
        tooltip: { trigger: 'item' },
        series: [
            {
                name: 'Fruits',
                type: 'pie',
                radius: '65%',
                label: {
                    color: '#000',
                    formatter: '{b}: {d}%',
                    fontSize: 14
                },
                labelLine: {
                    show: true,
                    lineStyle: { color: '#555' },
                    length: 20,
                    length2: 15
                },
                itemStyle: {
                    borderColor: '#ffffff',
                    borderWidth: 2
                },
                data: chartData.map((d, i) => ({
                    name: d.name,
                    value: d.value,
                    itemStyle: {
                        color: [
                            'rgba(135, 206, 250, 0.6)',
                            'rgba(144, 238, 144, 0.6)',
                            'rgba(255, 182, 193, 0.6)',
                            'rgba(255, 255, 224, 0.6)',
                            'rgba(198, 135, 250, 0.6)',
                            'rgba(221, 160, 221, 0.6)'
                        ][i % 6]
                    }
                }))
            }
        ]
    };

    myChart.setOption(option);
}


function loadPie2(chartData) {
    const chartDom = document.getElementById("piechart2");
    const myChart = echarts.init(chartDom);

    const option = {
        tooltip: { trigger: "item" },
        series: [
            {
                type: "pie",
                radius: "50%",
                center: ["50%", "50%"],
                emphasis: { focus: "self" },
                label: {
                    formatter: "{b}: {c} ({d}%)",
                    color: "#000"
                },
                labelLine: {
                    show: true,
                    lineStyle: { color: "#666" }
                },
                data: chartData.map((d, i) => ({
                    name: d.name,
                    value: d.value,
                    itemStyle: {
                        color: [
                            'rgba(135, 206, 250, 0.6)',
                            'rgba(144, 238, 144, 0.6)',
                            'rgba(255, 182, 193, 0.6)',
                            'rgba(255, 255, 224, 0.6)',
                            'rgba(198, 135, 250, 0.6)',
                            'rgba(221, 160, 221, 0.6)'
                        ][i % 6]
                    }
                }))
            }
        ]
    };

    myChart.setOption(option);
}


async function loadPieData() {
    const response = await fetch("/pie_data");
    const chartData = await response.json();

    loadPie1(chartData);
    loadPie2(chartData);
}

loadPieData();