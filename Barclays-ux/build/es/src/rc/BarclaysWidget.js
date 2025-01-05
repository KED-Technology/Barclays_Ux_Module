define(['jquery',
// Require jQuery
'apexcharts',
// Require ApexCharts
'baja!' // Optionally include BajaScript if needed
], function ($, ApexCharts, baja) {
  return function () {
    let url = "https://localhost";
    let currentDate = new Date();
    console.log("Current day: " + currentDate);
    currentDate.setDate(currentDate.getDate() - 1); // Subtract one day
    let previousDate = currentDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD

    console.log("Previous day: " + previousDate);
    let emissionChart;
    async function disposeChartCo(newChartFunction) {
      if (emissionChart) {
        if (emissionChart instanceof ApexCharts) {
          emissionChart.destroy();
        } else {
          emissionChart.dispose();
        }
      }
      newChartFunction();
    }
    async function pieChart() {
      const style = document.createElement('style');
      style.innerHTML = `
                #chartdiv .apexcharts-text {
                    fill: #000000;
                    font-weight: bold;
                }
            `;
      style.id = 'chartdiv-styles';
      document.head.appendChild(style);
      let scopeValues = [];
      const scopes = ['scope1date', 'scope2date', 'scope3date'];
      for (let scope of scopes) {
        const responses = await fetch(`${url}/obix/histories/SqlServerDatabase/${scope}/~historyQuery?start=${previousDate}T23:59:59.000+05:30&limit=1`);
        console.log("response for scope " + scope, responses);
        const text = await responses.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(text, "text/xml");
        const objs = xmlDoc.getElementsByTagName("list");
        for (let i = 0; i < objs.length; i++) {
          const obj = objs[i];
          const real = obj.getElementsByTagName("real")[0];
          if (real) {
            const valueText = real.getAttribute("val");
            if (valueText) {
              const value = parseFloat(valueText).toFixed(2);
              scopeValues.push(parseFloat(value));
            }
          }
        }
      }
      const totalValue = scopeValues.reduce((sum, value) => sum + value, 0);
      let percentages = scopeValues.map(value => value / totalValue * 100);
      var options = {
        series: percentages,
        chart: {
          height: '100%',
          type: 'radialBar'
        },
        plotOptions: {
          radialBar: {
            offsetY: 10,
            offsetX: -10,
            startAngle: -180,
            endAngle: 90,
            track: {
              background: '#f5f5f5',
              strokeWidth: '100%',
              margin: 4
            },
            hollow: {
              margin: 0,
              size: '50%',
              background: 'transparent'
            },
            dataLabels: {
              show: true,
              name: {
                show: true,
                fontSize: '30px',
                fontWeight: 'bold',
                color: '#000000',
                formatter: () => 'Total'
              },
              value: {
                show: true,
                fontSize: '30px',
                fontWeight: 'bold',
                color: '#000000',
                formatter: () => totalValue.toFixed(2)
              },
              total: {
                show: true,
                label: 'Total',
                fontSize: '30px',
                fontWeight: 'bold',
                color: '#000000',
                formatter: () => totalValue.toFixed(2)
              }
            }
          }
        },
        colors: ["#FFB22C", "#A4CE95", "#FFD93D"],
        fill: {
          opacity: [0.85, 0.85, 0.85]
        },
        labels: ["Scope 1", "Scope 2", "Scope 3"],
        legend: {
          show: true,
          floating: true,
          fontSize: '16px',
          position: 'right',
          offsetX: 10,
          offsetY: -20,
          labels: {
            useSeriesColors: true
          },
          markers: {
            size: 0
          },
          itemMargin: {
            vertical: 1
          }
        },
        tooltip: {
          enabled: true,
          custom: function ({
            series,
            seriesIndex,
            w
          }) {
            const name = w.globals.labels[seriesIndex];
            let value = series[seriesIndex];
            value = value.toFixed(2);
            const backgroundColors = ['#FFB22C', '#A4CE95', '#FFD93D'];
            const backgroundColor = backgroundColors[seriesIndex] || '#F7F7F7';
            return `<div style="color: #00000; background: ${backgroundColor}; padding: 8px; border-radius: 4px; box-shadow: 0 2px 10px rgba(0,0,0,0.2);">
                            <strong style="color: #000000;">${name}</strong>: <span style="color: #000000;">${value}</span>
                        </div>`;
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            legend: {
              show: true
            }
          }
        }]
      };
      emissionChart = new ApexCharts(document.querySelector("#chartdiv"), options);
      emissionChart.render();
    }
    disposeChartCo(pieChart);
  };
});
