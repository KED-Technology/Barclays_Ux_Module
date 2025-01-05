jQuery(function () {

    let url = "https://localhost";//192.168.1.103
   let currentDate = new Date();
let previousDate = new Date(currentDate);
previousDate.setDate(previousDate.getDate() - 1);

// Format the date to 'YYYY-MM-DD'
const formattedDate = previousDate.toISOString().split('T')[0];

// Use the formatted date
console.log(`formatted day: ${formattedDate}`);

// async function fetchCO2Emission() {
//     const today = new Date();
//     const previousDate = new Date(today.setDate(today.getDate() - 1)); // Get previous date
//     const startDate = formatDate(previousDate);  // Format the previous date to match the required format
//     const endDate = startDate;  // End date is same as start date for single day data

//     const url = `https://192.168.1.103/obix/histories/Barclays_Sup/Co2$20Emission$20in$20Ton_Daily/~historyQuery?start=${startDate}T00:00:00.000+05:30&end=${endDate}T23:59:59.000+05:30`;

//     try {
//         const response = await fetch(url);
//         const text = await response.text();
//         const parser = new DOMParser();
//         const xmlDoc = parser.parseFromString(text, "text/xml");
//         const objs = xmlDoc.getElementsByTagName("obj");

//         if (objs.length > 0) {
//             const valueText = objs[0].getElementsByTagName("real")[0].getAttribute("val");
//             if (valueText) {
//                 const value = parseFloat(valueText).toFixed(2);
//                 document.getElementById("co2-emission-value").textContent = value;
//             }
//         } else {
//             console.log("No data available for previous date.");
//         }
//     } catch (error) {
//         console.error("Error fetching CO2 emission data:", error);
//     }
// }

// // Helper function to format the date to the required format
// function formatDate(date) {
//     const year = date.getFullYear();
//     const month = String(date.getMonth() + 1).padStart(2, '0');
//     const day = String(date.getDate()).padStart(2, '0');
//     return `${year}-${month}-${day}`;
// }

// // Call the function to fetch CO2 emission data
// fetchCO2Emission();

// Define the URL to fetch data from
const urlTotalCo = 'https://192.168.1.103/obix/config/Drivers/Barclays/Co2$20Emission$20in$20Ton/Total_Scope/';

// // Function to fetch the data and update the CO2 emission value
// function fetchCo2Emission() {
//     fetch(urlTotalCo)
//         .then(response => response.text())
//         .then(data => {
//             // Create a new DOMParser to parse the XML response
//             const parser = new DOMParser();
//             const xmlDoc = parser.parseFromString(data, 'application/xml');

//             // Find the real element for "out" and extract the display value
//             const outRealElement = xmlDoc.querySelector('real[name="out"]');
//             if (outRealElement) {
//                 // Extract the numeric value from the display attribute
//                 const displayValue = outRealElement.getAttribute('display');
//                 const [value, unit] = displayValue.split(" ");

//                 // Update the DOM with the extracted value
//                 document.getElementById("co2-emission-value").innerText = `${value} ${unit}`;
//             }
//         })
//         .catch(error => {
//             console.error('Error fetching CO2 emission data:', error);
//             // Optionally, you can update the DOM with an error message if fetch fails
//           // document.getElementById('co2-emission-value').textContent = 'No Data Available';
//           checkDataAvailability([], "co2-emission-container");
//         });
// }
function fetchCo2Emission() {
    fetch(urlTotalCo)
        .then(response => response.text())
        .then(data => {
            // Create a new DOMParser to parse the XML response
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, 'application/xml');

            // Find the real element for "out" and extract the display value
            const outRealElement = xmlDoc.querySelector('real[name="out"]');
            if (outRealElement) {
                // Extract the numeric value from the display attribute
                const displayValue = outRealElement.getAttribute('display');
                const [value, unit] = displayValue.split(" ");

                // Check if data is available using checkDataAvailability
                const dataAvailable = !checkDataAvailability([parseFloat(value)], "co2-emission-value");

                // If data is available, update the DOM with the value, otherwise show a message
                if (dataAvailable) {
                    document.getElementById("co2-emission-value").innerText = `${value} ${unit}`;
                }
            } else {
                // If no "out" element was found, show the no data message
                checkDataAvailability([], "co2-emission-value");
            }
        })
        .catch(error => {
            console.error('Error fetching CO2 emission data:', error);
            // Optionally, you can update the DOM with an error message if fetch fails
            checkDataAvailability([], "co2-emission-value");
        });
}

// Call the function to fetch and display the data on page load
setInterval(fetchCo2Emission, 1000);

// Initial fetch when the page loads
fetchCo2Emission();


// async function fetchWaterData() {
//     const today = new Date();
//     const previousDate = new Date(today.setDate(today.getDate() - 1)); // Get previous date
//     const startDate = formatDate(previousDate);  // Format the previous date to match the required format
//     const endDate = startDate;  // End date is same as start date for single day data

//     // Water URLs and corresponding element IDs
//     const waterUrls = [
//         {
//             type: "Domestic", // For identifying the water type
//             url: `https://192.168.1.103/obix/histories/Barclays_Sup/Water$20Consumption_Domestic_Daily/~historyQuery?start=${startDate}T00:00:00.000+05:30&end=${endDate}T23:59:59.000+05:30`,
//             elementId: "water-domestic-value"
//         },
//         {
//             type: "Flushing", // For identifying the water type
//             url: `https://192.168.1.103/obix/histories/Barclays_Sup/Water$20Consumption_Flushing_Daily/~historyQuery?start=${startDate}T00:00:00.000+05:30&end=${endDate}T23:59:59.000+05:30`,
//             elementId: "water-flushing-value"
//         }
//     ];

//     try {
//         // Loop through each water type and fetch the corresponding data
//         for (const water of waterUrls) {
//             const response = await fetch(water.url);
//             const data = await response.text();

//             const xmlDoc = new DOMParser().parseFromString(data, "text/xml");
//             const objs = xmlDoc.getElementsByTagName("obj");
//             const value = extractValueFromXml(objs);

//             // Update the corresponding HTML element with the value
//             document.getElementById(water.elementId).textContent = value;
//         }
//     } catch (error) {
//         console.error("Error fetching water data:", error);
//     }
// }

// // Helper function to extract the value from the XML
// function extractValueFromXml(objs) {
//     if (objs.length > 0) {
//         const valueText = objs[0].getElementsByTagName("real")[0].getAttribute("val");
//         return valueText ? parseFloat(valueText).toFixed(2) : "0";
//     }
//     return "0";
// }

// // Helper function to format the date to the required format
// function formatDate(date) {
//     const year = date.getFullYear();
//     const month = String(date.getMonth() + 1).padStart(2, '0');
//     const day = String(date.getDate()).padStart(2, '0');
//     return `${year}-${month}-${day}`;
// }

// // Call the function to fetch water data
// fetchWaterData();

// Generic function to fetch and update water consumption values (both Domestic and Flushing)
// Generic function to fetch and update water consumption values (both Domestic and Flushing)
function fetchWaterConsumption(type) {
  // URL mapping for Domestic and Flushing water usage
  const urls = {
    domestic: "https://192.168.1.103/obix/config/Drivers/Barclays/Water$20Consumption/water_usage_for_$28DOMESTIC$29/",
    flushing: "https://192.168.1.103/obix/config/Drivers/Barclays/Water$20Consumption/Water_usage_for_$28FLUSHING$29/"
  };

  // Select the appropriate URL based on the 'type' parameter
  const url = urls[type];

  // Fetch the data from the selected URL
  fetch(url)
    .then(response => response.text()) // Parse the response as text
    .then(data => {
      // Create a DOM parser to parse the XML response
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(data, "application/xml");

      // Extract the value and unit from the 'real' element with name="out"
      const realElement = xmlDoc.querySelector('real[name="out"]');
      if (realElement) {
        const displayValue = realElement.getAttribute("display"); // Example: "3884 {ok} @ 10"
        const unit = realElement.getAttribute("unit"); // Example: "obix:units/null"

        // Split the display value to get the numeric value
        const value = displayValue.split(" ")[0]; // Example: "3884"

        // Check if unit is 'null' or missing and set a default unit if needed
        const formattedUnit = unit && unit !== 'obix:units/null' ? unit.replace("obix:units/", "") : "liters"; // If 'null', use an empty string

        // Update the HTML element with the value and unit based on the type (domestic or flushing)
        document.getElementById(`water-${type}-value`).innerText = `${value} ${formattedUnit}`;
      }
    })
    .catch(error => {
      console.error("Error fetching the data:", error);
    });
}

// Fetch the water consumption for both Domestic and Flushing every 10 seconds (10000 milliseconds)
setInterval(() => {
  fetchWaterConsumption('domestic');  // Fetch for Domestic Water
  fetchWaterConsumption('flushing');  // Fetch for Flushing Water
}, 10000);

// Initial fetch when the page loads
fetchWaterConsumption('domestic');
fetchWaterConsumption('flushing');

// Generic function to fetch and update power consumption values (Total Power Consumption)
function fetchPowerConsumption() {
  // URL for Total Power Consumption (KWh)
  const url = "https://192.168.1.103/obix/config/Drivers/Barclays/Total$20Power$20Consumption$20in$20Kwh/TotalPowerConsumptionKwh/";

  // Fetch the data from the URL
  fetch(url)
    .then(response => response.text()) // Parse the response as text
    .then(data => {
      // Create a DOM parser to parse the XML response
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(data, "application/xml");

      // Extract the value and unit from the 'real' element with name="out"
      const realElement = xmlDoc.querySelector('real[name="out"]');
      if (realElement) {
        const displayValue = realElement.getAttribute("display"); // Example: "5963.1 {ok} @ 10"
        const unit = realElement.getAttribute("unit"); // Example: "obix:units/null"

        // Split the display value to get the numeric value
        const value = displayValue.split(" ")[0]; // Example: "5963.1"

        // Check if unit is 'null' or missing and set "kWh" as the default unit if needed
        const formattedUnit = unit && unit !== 'obix:units/null' ? unit.replace("obix:units/", "") : "KWh"; // Use "kWh" if unit is null

        // Update the HTML element with the value and unit
        document.getElementById("power-value").innerText = `${value} ${formattedUnit}`;
      }
    })
    .catch(error => {
      console.error("Error fetching the data:", error);
    });
}

// Fetch the power consumption data every 10 seconds (10000 milliseconds)
setInterval(fetchPowerConsumption, 10000);

// Initial fetch when the page loads
fetchPowerConsumption();


    //console.log("Previous day: " + previousDate);

    let intervalId; // Variable to store the interval ID

    //  intervalId=setInterval(pieChart, 5000);

    let emissionChart;
    async function disposeChartCo(newChartFunction) {
        // Destroy the existing chart if it exists
        if (emissionChart) {
            if (emissionChart instanceof ApexCharts) {
                emissionChart.destroy(); // Dispose the existing ApexCharts instance
                console.log("destroyed");
            } else {
                emissionChart.dispose(); // Dispose the existing am4charts instance
                console.log("disposed");
            }
        }
        newChartFunction();
    }

    async function pieChart() {

        // Append a style block to customize the text appearance in the chart
        const style = document.createElement('style');
        style.innerHTML = `
            #chartdiv .apexcharts-text {
                fill: #000000; /* Change this to your desired color */
                font-weight: bold; /* Ensure bold text */
            }
        `;
        style.id = 'chartdiv-styles';
        document.head.appendChild(style);
        // // Initialize scopeValues as an empty array
        let scopeValues = [];
        const scopes = ['Scope1', 'Scope2', 'Scope3'];

        // Fetch data for each scope
        for (let scope of scopes) {
            const responses = await fetch(`${url}/obix/histories/Barclays_Sup/Co2$20Emission$20in$20Ton_${scope}_Daily/~historyQuery?start=${formattedDate}T23:58:00.000+05:30&limit=1`); ///~historyQuery?start=${previousDate}T23:59:59.000+05:30&limit=1
            console.log("response for scope " + scope, responses);
            const text = await responses.text();
            //console.log("text " + text);
            // Parse the XML data
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(text, "text/xml");

            // Get all <obj> elements
            const objs = xmlDoc.getElementsByTagName("list");
            //console.log("length " + objs.length);
            // Process each <obj> element
            for (let i = 0; i < objs.length; i++) {
            const obj = objs[i];
            const real = obj.getElementsByTagName("real")[0]; // Get the <real> tag

    if (real) {
        const valueText = real.getAttribute("val"); // Get the value as a string
        //console.log("value text (raw):", valueText);

        if (valueText) {
            const value = parseFloat(valueText); // Parse to a number
            if (!isNaN(value)) { // Ensure it's a valid number
                // Format value with two decimal places
                // const formattedValue = value.toFixed(2); // Use .toFixed(3) to ensure 3 decimal places
                // console.log("formatted value:", formattedValue);

                // Add the formatted value to the scopeValues array
                scopeValues.push(parseFloat(value));
            } else {
                console.warn("Invalid numeric value:", valueText);
            }
        }
    }
}


        }
        const flattenedData = scopeValues.flat();
    if (checkDataAvailability(flattenedData, 'chartdiv')) {
        return; // Exit if no data is available
    }
        // scopeValues = scopeValues.map(value => Math.min(value, 100));
        console.log("Scope Values: ", scopeValues);
        // Calculate the total value
        const totalValue = scopeValues.reduce((sum, value) => sum + value, 0); // Sum the values for each scope
      // console.log("total value " + totalValue);
        let percentages = scopeValues.map(value => (value / totalValue) * 100);
        //console.log("percentages " + percentages);

        // Radial bar chart options
        var options = {
            series: percentages, // Use the calculated series values
            chart: {
                height: '100%',
                type: 'radialBar', // Set chart type to radialBar
            },
            plotOptions: {
                radialBar: {
                    offsetY: 10,
                    offsetX: -10,
                    startAngle: -180, // Define starting angle
                    endAngle: 90, // Define ending angle
                    track: {
                        background: '#f5f5f5', // Track background color
                        strokeWidth: '100%',
                        margin: 4, // Margin between tracks
                    },
                    hollow: {
                        margin: 0,
                        size: '50%', // Hollow size
                        background: 'transparent',
                    },
                    dataLabels: {
                        show: true,
                        name: {
                            show: true,
                            fontSize: '30px',
                            fontWeight: 'bold',
                            color: '#000000',
                            formatter: function () {
                                return 'Total'; // Static 'Total' label in the center
                            }
                        },
                        value: {
                            show: true,
                            fontSize: '30px',
                            fontWeight: 'bold',
                            color: '#000000',
                            formatter: function () {
                                return totalValue.toFixed(2); // Display static total value in the center
                            }
                        },
                        total: {
                            show: true,
                            label: 'Total',
                            fontSize: '30px',
                            fontWeight: 'bold',
                            color: '#000000',
                            formatter: function () {
                                return totalValue.toFixed(2); // Static total value
                            }
                        }
                    }
                }
            },
            colors: ["#ff7d03", "#A4CE95", "#FFD93D"], // Segment colors
            fill: { opacity: [0.85, 0.85, 0.85] }, // Set opacity for each segment
            labels: ["Scope 1", "Scope 2", "Scope 3"], // Labels for each segment
            legend: {
                show: true,
                floating: true,
                fontSize: '16px',
                position: 'right', // Position legend on the right
                offsetX: 10,
                offsetY: -20,
                labels: { useSeriesColors: true }, // Use colors from the series
                markers: { size: 0 }, // No markers in the legend
                // formatter: function(seriesName, opts) {
                //     return seriesName + ": " + opts.w.globals.series[opts.seriesIndex] + "%"; // Custom legend formatting
                // },
                itemMargin: { vertical: 1 }, // Margin between legend items
            },
            tooltip: {
                enabled: true,
                shared: false, // Disable shared tooltip
                style: {
                    fontSize: '16px', // Optional: set font size for the tooltip text
                },
                custom: function ({ series, seriesIndex, w }) {
                    const name = w.globals.labels[seriesIndex]; // Get the label
                    let value = series[seriesIndex]; // Get the value
                    value = value.toFixed(2);

                    // Define background colors for each series
                    const backgroundColors = [
                        '#FFB22C', // Color for Series 1
                        '#A4CE95', // Color for Series 2
                        '#FFD93D'  // Color for Series 3 (if applicable)
                    ];

                    // Get the background color based on the series index
                    const backgroundColor = backgroundColors[seriesIndex] || '#F7F7F7'; // Default color if index is out of bounds

                    return `<div style="color: #00000; background: ${backgroundColor}; padding: 8px; border-radius: 4px; box-shadow: 0 2px 10px rgba(0,0,0,0.2);">
                        <strong style="color: #000000;">${name}</strong>: <span style="color: #000000;">${value}</span>
                    </div>`; // Show name and value in tooltip
                },
            },
            responsive: [{
                breakpoint: 480,
                options: { legend: { show: true } } // Show legend on small screens
            }]
        };

        // Create and render the new radial bar chart
        emissionChart = new ApexCharts(document.querySelector("#chartdiv"), options);
        emissionChart.render();

    }
// async function pieChart() {
//     // Append a style block to customize the text appearance in the chart
//     const style = document.createElement('style');
//     style.innerHTML = `
//         #chartdiv .apexcharts-text {
//             fill: #000000; /* Change this to your desired color */
//             font-weight: bold; /* Ensure bold text */
//         }
//     `;
//     style.id = 'chartdiv-styles';
//     document.head.appendChild(style);

//     // Initialize scopeValues as an empty array
//     let scopeValues = [];
//     const scopes = ['Scope1', 'Scope2', 'Scope3'];

//     // Fetch data for each scope
//     for (let scope of scopes) {
//         const responses = await fetch(`${url}/obix/histories/Barclays_Sup/Co2$20Emission$20in$20Ton_${scope}_Daily/~historyQuery?start=${formattedDate}T23:58:00.000+05:30&limit=1`);
//         console.log("response for scope " + scope, responses);
//         const text = await responses.text();

//         // Parse the XML data
//         const parser = new DOMParser();
//         const xmlDoc = parser.parseFromString(text, "text/xml");

//         // Get all <obj> elements
//         const objs = xmlDoc.getElementsByTagName("list");

//         // Process each <obj> element
//         for (let i = 0; i < objs.length; i++) {
//             const obj = objs[i];
//             const real = obj.getElementsByTagName("real")[0]; // Get the <real> tag

//             if (real) {
//                 const valueText = real.getAttribute("val"); // Get the value as a string
//                 if (valueText) {
//                     const value = parseFloat(valueText); // Parse to a number
//                     if (!isNaN(value)) { // Ensure it's a valid number
//                         scopeValues.push(parseFloat(value));
//                     } else {
//                         console.warn("Invalid numeric value:", valueText);
//                     }
//                 }
//             }
//         }
//     }

//     // Check if data is available
//     // if (scopeValues.length === 0 || scopeValues.every(value => value === 0)) {
//     //     // Show a message when no data is available or all values are 0
//     //     document.querySelector("#chartdiv").innerHTML = "<p style='text-align: center; display: flex; justify-content: center; align-items: center; height: 100%;'>No data available</p>";
//     //     return; // Exit the function early if no data is available
//     // }

//     console.log("Scope Values: ", scopeValues);
//     // Calculate the total value
//     const totalValue = scopeValues.reduce((sum, value) => sum + value, 0); // Sum the values for each scope

//     let percentages = scopeValues.map(value => (value / totalValue) * 100);

//     // Radial bar chart options
//     var options = {
//         series: percentages, // Use the calculated series values
//         chart: {
//             height: '100%',
//             type: 'radialBar', // Set chart type to radialBar
//         },
//         plotOptions: {
//             radialBar: {
//                 offsetY: 10,
//                 offsetX: -10,
//                 startAngle: -180, // Define starting angle
//                 endAngle: 90, // Define ending angle
//                 track: {
//                     background: '#f5f5f5', // Track background color
//                     strokeWidth: '100%',
//                     margin: 4, // Margin between tracks
//                 },
//                 hollow: {
//                     margin: 0,
//                     size: '50%', // Hollow size
//                     background: 'transparent',
//                 },
//                 dataLabels: {
//                     show: true,
//                     name: {
//                         show: true,
//                         fontSize: '30px',
//                         fontWeight: 'bold',
//                         color: '#000000',
//                         formatter: function () {
//                             return 'Total'; // Static 'Total' label in the center
//                         }
//                     },
//                     value: {
//                         show: true,
//                         fontSize: '30px',
//                         fontWeight: 'bold',
//                         color: '#000000',
//                         formatter: function () {
//                             return totalValue.toFixed(2); // Display static total value in the center
//                         }
//                     },
//                     total: {
//                         show: true,
//                         label: 'Total',
//                         fontSize: '30px',
//                         fontWeight: 'bold',
//                         color: '#000000',
//                         formatter: function () {
//                             return totalValue.toFixed(2); // Static total value
//                         }
//                     }
//                 }
//             }
//         },
//         colors: ["#ff7d03", "#A4CE95", "#FFD93D"], // Segment colors
//         fill: { opacity: [0.85, 0.85, 0.85] }, // Set opacity for each segment
//         labels: ["Scope 1", "Scope 2", "Scope 3"], // Labels for each segment
//         legend: {
//             show: true,
//             floating: true,
//             fontSize: '16px',
//             position: 'right', // Position legend on the right
//             offsetX: 10,
//             offsetY: -20,
//             labels: { useSeriesColors: true }, // Use colors from the series
//             markers: { size: 0 }, // No markers in the legend
//             itemMargin: { vertical: 1 }, // Margin between legend items
//         },
//         tooltip: {
//             enabled: true,
//             shared: false, // Disable shared tooltip
//             style: {
//                 fontSize: '16px', // Optional: set font size for the tooltip text
//             },
//             custom: function ({ series, seriesIndex, w }) {
//                 const name = w.globals.labels[seriesIndex]; // Get the label
//                 let value = series[seriesIndex]; // Get the value
//                 value = value.toFixed(2);

//                 const backgroundColors = [
//                     '#FFB22C', // Color for Series 1
//                     '#A4CE95', // Color for Series 2
//                     '#FFD93D'  // Color for Series 3
//                 ];

//                 const backgroundColor = backgroundColors[seriesIndex] || '#F7F7F7'; // Default color if index is out of bounds

//                 return `<div style="color: #00000; background: ${backgroundColor}; padding: 8px; border-radius: 4px; box-shadow: 0 2px 10px rgba(0,0,0,0.2);">
//                     <strong style="color: #000000;">${name}</strong>: <span style="color: #000000;">${value}</span>
//                 </div>`; // Show name and value in tooltip
//             },
//         },
//         responsive: [{
//             breakpoint: 480,
//             options: { legend: { show: true } } // Show legend on small screens
//         }]
//     };

//     // Create and render the new radial bar chart
//     const emissionChart = new ApexCharts(document.querySelector("#chartdiv"), options);
//     emissionChart.render();
// }


    disposeChartCo(pieChart);

    async function lineChartMonthlyCo25() {
        am4core.ready(async function () {

            const today = new Date();
            const currentMonth = today.getMonth();
            const startDate = new Date(today.getFullYear(), currentMonth - 1, 1);
            const endDate = new Date(today.getFullYear(), currentMonth, 0);

            const startISO = `${startDate.getFullYear()}-${String(startDate.getMonth() + 1).padStart(2, '0')}-${String(startDate.getDate()).padStart(2, '0')}`;
            const endISO = `${endDate.getFullYear()}-${String(endDate.getMonth() + 1).padStart(2, '0')}-${String(endDate.getDate()).padStart(2, '0')}`;

            const waters = ['Scope1', 'Scope2', 'Scope3'];
            let waterValues = [];

            // Fetch data asynchronously for each scope
            for (let scope of waters) {
                const urlToFetch = `${url}/obix/histories/Barclays_Sup/Co2$20Emission$20in$20Ton_${scope}/~historyQuery?start=${startISO}T23:58:00.000+05:30&end=${endISO}T23:58:00.000+05:30`;
                console.log(urlToFetch);
                try {
                    const response = await fetch(urlToFetch);
                    console.log(response);
                    if (!response.ok) {
                        console.error(`Error fetching data for ${scope}: ${response.status} - ${response.statusText}`);
                        continue;
                    }

                    const text = await response.text();
                    const parser = new DOMParser();
                    const xmlDoc = parser.parseFromString(text, "text/xml");
                    const objs = xmlDoc.getElementsByTagName("obj");

                    for (let i = 0; i < objs.length; i++) {
                        const obj = objs[i];
                        const abstime = obj.getElementsByTagName("abstime")[0];
                        const real = obj.getElementsByTagName("real")[0];

                        if (abstime && real) {
                            const dateText = abstime.getAttribute("val");
                            const valueText = real.getAttribute("val");

                            if (valueText && dateText) {
                                const value = parseFloat(valueText).toFixed(2);
                                const date = new Date(dateText);
                                const formattedDate = date.toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric"
                                });
                                const dateStr = date.toDateString();  // Use toDateString to compare without time

                                const existingEntry = waterValues.find(entry => entry.date.toDateString() === dateStr);

                                if (existingEntry) {
                                    existingEntry[scope] = parseFloat(value);
                                } else {
                                    waterValues.push({
                                        date: date,
                                        [scope]: parseFloat(value)
                                    });
                                }
                            }
                        }
                    }
                } catch (error) {
                    console.error(`Error fetching data for ${scope}: ${error.message}`);
                }
            }
            const flattenedData = waterValues.flat();
    if (checkDataAvailability(flattenedData, 'chartdiv')) {
        return; // Exit if no data is available
    }
            // Themes begin
            am4core.useTheme(am4themes_animated);
            // Themes end

            // Create chart instance
            emissionChart = am4core.create("chartdiv", am4charts.XYChart);
            emissionChart.paddingRight = 20;

            // Add data
            emissionChart.data = waterValues;
            waterValues.forEach(item => {
                item.date = new Date(item.date).getTime();  // Convert to timestamp
                console.log("item date (timestamp): " + item.date);

                // Convert timestamp back to a readable date
                const formattedDate = new Date(item.date).toLocaleDateString("en-US", {
                    // year: "numeric",
                    month: "short",
                    day: "numeric"
                });
                item.date = formattedDate;
                console.log("Formatted item date: " + formattedDate);
            });


            // Create axes
            var categoryAxis = emissionChart.xAxes.push(new am4charts.CategoryAxis());
            categoryAxis.dataFields.category = "date"; // Use 'date' instead of 'year'
            categoryAxis.renderer.minGridDistance = 80;
            // categoryAxis.renderer.grid.template.location = 2;
            // categoryAxis.startLocation = 1;
            // categoryAxis.endLocation = 1.5;
            categoryAxis.renderer.labels.template.horizontalCenter = "middle"; // Center labels
            categoryAxis.renderer.labels.template.verticalCenter = "middle"; // Center labels

            var valueAxis = emissionChart.yAxes.push(new am4charts.ValueAxis());
            valueAxis.baseValue = 0;

            // Function to create series
            function createSeries(valueField, name, color) {
                var series = emissionChart.series.push(new am4charts.LineSeries());
                series.dataFields.valueY = valueField;
                series.dataFields.categoryX = "date"; // Use 'date' instead of 'year'
                series.name = name;
                series.strokeWidth = 2;
                series.tensionX = 0.77;
                series.stroke = color;

                // Bullet to display tooltips
                var bullet = series.bullets.push(new am4charts.Bullet());
                bullet.tooltipText = "{valueY}";

                bullet.adapter.add("fill", function (fill, target) {
                    // If the value is negative, color the bullet red, else use the series color
                    if (target.dataItem.valueY < 0) {
                        return am4core.color("#FF0000"); // Red for negative values
                    }
                    return series.stroke; // Use the series stroke color (the color passed to createSeries)
                });

                return series;
            }

            emissionChart.legend = new am4charts.Legend();
            emissionChart.legend.position = "top";
            emissionChart.legend.paddingBottom = 10;
            emissionChart.legend.labels.template.maxWidth = 95;
            // Create three series with different data fields and colors
            createSeries("scope1date", "Scope 1", am4core.color("#ff7d03"));
            createSeries("scope2date", "Scope 2", am4core.color("#A4CE95"));
            createSeries("scope3date", "Scope 3", am4core.color("#FFD93D"));

            // Add scrollbar
            // var scrollbarX = new am4charts.XYChartScrollbar();
            // scrollbarX.series.push(chart.series.values[0]);  // Add the first series to the scrollbar
            // chart.scrollbarX = scrollbarX;
            // scrollbarX.height = 30;
            emissionChart.scrollbarX = new am4core.Scrollbar();
            emissionChart.scrollbarX.marginBottom = 20;

            emissionChart.cursor = new am4charts.XYCursor();
            emissionChart.logo.disabled = true;

        });
    }
    // async function dateRangeCo2() {
    //     am4core.ready(async function () {

    //         var startDateValue = $("#startDate").val();
    //         var endDateValue = $("#endDate").val();
    //         const waters = ['Scope1', 'Scope2', 'Scope3'];
    //         let waterValues = [];

    //         // Fetch data asynchronously for each scope
    //         for (let scope of waters) {
    //             const urlToFetch = `${url}/obix/histories/Barclays_Sup/Co2$20Emission$20in$20Ton_${scope}/~historyQuery?start=${startDateValue}T13:15:00.059+05:30&end=${endDateValue}T13:15:00.059+05:30`;
    //             console.log(urlToFetch);
    //             try {
    //                 const response = await fetch(urlToFetch);
    //                 console.log(response);
    //                 if (!response.ok) {
    //                     console.error(`Error fetching data for ${scope}: ${response.status} - ${response.statusText}`);
    //                     continue;
    //                 }

    //                 const text = await response.text();
    //                 const parser = new DOMParser();
    //                 const xmlDoc = parser.parseFromString(text, "text/xml");
    //                 const objs = xmlDoc.getElementsByTagName("obj");

    //                 for (let i = 0; i < objs.length; i++) {
    //                     const obj = objs[i];
    //                     const abstime = obj.getElementsByTagName("abstime")[0];
    //                     const real = obj.getElementsByTagName("real")[0];

    //                     if (abstime && real) {
    //                         const dateText = abstime.getAttribute("val");
    //                         const valueText = real.getAttribute("val");

    //                         if (valueText && dateText) {
    //                             const value = parseFloat(valueText).toFixed(4);
    //                             const date = new Date(dateText);
    //                             const formattedDate = date.toLocaleDateString("en-US", {
    //                                 month: "short",
    //                                 day: "numeric"
    //                             });
    //                             const dateStr = date.toDateString();  // Use toDateString to compare without time

    //                             const existingEntry = waterValues.find(entry => entry.date.toDateString() === dateStr);

    //                             if (existingEntry) {
    //                                 existingEntry[scope] = parseFloat(value);
    //                             } else {
    //                                 waterValues.push({
    //                                     date: date,
    //                                     [scope]: parseFloat(value)
    //                                 });
    //                             }
    //                         }
    //                     }
    //                 }
    //             } catch (error) {
    //                 console.error(`Error fetching data for ${scope}: ${error.message}`);
    //             }
    //         }
    //         console.log("monthly co2 " + waterValues);
    //         // Themes begin
    //         am4core.useTheme(am4themes_animated);
    //         // Themes end

    //         // Create chart instance
    //         var emissionChart = am4core.create("chartdiv", am4charts.XYChart);
    //         emissionChart.paddingRight = 20;

    //         // Add data
    //         emissionChart.data = waterValues;
    //         waterValues.forEach(item => {
    //         item.date = new Date(item.date).getTime();  // Convert to timestamp
    //     });
    //         // waterValues.forEach(item => {
    //         //     item.date = new Date(item.date).getTime();  // Convert to timestamp
    //         //     console.log("item date (timestamp): " + item.date);

    //         //     // Convert timestamp back to a readable date
    //         //     const formattedDate = new Date(item.date).toLocaleDateString("en-US", {
    //         //         // year: "numeric",
    //         //         month: "short",
    //         //         day: "numeric"
    //         //     });
    //         //     item.date = formattedDate;
    //         //     console.log("Formatted item date: " + formattedDate);
    //         // });


    //         // Create axes
    //         var categoryAxis = emissionChart.xAxes.push(new am4charts.CategoryAxis());
    //         categoryAxis.dataFields.category = "date"; // Use 'date' instead of 'year'
    //         categoryAxis.renderer.minGridDistance = 80;
    //         // categoryAxis.renderer.grid.template.location = 2;
    //         // categoryAxis.startLocation = 1;
    //         // categoryAxis.endLocation = 1.5;
    //         categoryAxis.renderer.labels.template.horizontalCenter = "middle"; // Center labels
    //         categoryAxis.renderer.labels.template.verticalCenter = "middle"; // Center labels

    //         var valueAxis = emissionChart.yAxes.push(new am4charts.ValueAxis());
    //         valueAxis.baseValue = 0;

    //         // Function to create series
    //         function createSeries(valueField, name, color) {
    //             var series = emissionChart.series.push(new am4charts.LineSeries());
    //             series.dataFields.valueY = valueField;
    //             series.dataFields.categoryX = "date"; // Use 'date' instead of 'year'
    //             series.name = name;
    //             series.strokeWidth = 2;
    //             series.tensionX = 0.77;
    //             series.stroke = color;

    //             // Bullet to display tooltips
    //             var bullet = series.bullets.push(new am4charts.Bullet());
    //             bullet.tooltipText = "{valueY}";

    //             bullet.adapter.add("fill", function (fill, target) {
    //                 // If the value is negative, color the bullet red, else use the series color
    //                 if (target.dataItem.valueY < 0) {
    //                     return am4core.color("#FF0000"); // Red for negative values
    //                 }
    //                 return series.stroke; // Use the series stroke color (the color passed to createSeries)
    //             });

    //             return series;
    //         }
    //         emissionChart.legend = new am4charts.Legend();
    //         emissionChart.legend.position = "top";
    //         emissionChart.legend.paddingBottom = 10;
    //         emissionChart.legend.labels.template.maxWidth = 95;
    //         // Create three series with different data fields and colors
    //         createSeries("scope1date", "Scope 1", am4core.color("#FFB22C"));
    //         createSeries("scope2date", "Scope 2", am4core.color("#A4CE95"));
    //         createSeries("scope3date", "Scope 3", am4core.color("#FFD93D"));

    //         // Add scrollbar
    //         // var scrollbarX = new am4charts.XYChartScrollbar();
    //         // scrollbarX.series.push(chart.series.values[0]);  // Add the first series to the scrollbar
    //         // chart.scrollbarX = scrollbarX;
    //         // scrollbarX.height = 30;
    //         emissionChart.scrollbarX = new am4core.Scrollbar();
    //         emissionChart.scrollbarX.marginBottom = 20;

    //         emissionChart.cursor = new am4charts.XYCursor();
    //         emissionChart.logo.disabled = true;

    //     });
    // }
async function dateRangeCo2() {
    am4core.ready(async function () {
        var startDateValue = $("#startDate").val();
        var endDateValue = $("#endDate").val();
         // Validate the date range
    const isValid = await validateDateRange(startDateValue, endDateValue);
    if (!isValid) {
        // If the date range is invalid, stop execution
        return;
    }
        const waters = ['Scope1', 'Scope2', 'Scope3'];
        let waterValues = [];

        // Fetch data asynchronously for each scope
        for (let scope of waters) {
            const urlToFetch = `${url}/obix/histories/Barclays_Sup/Co2$20Emission$20in$20Ton_${scope}_Daily/~historyQuery?start=${startDateValue}T23:58:00.000+05:30&end=${endDateValue}T23:58:00.000+05:30`;
            console.log(urlToFetch);

            try {
                const response = await fetch(urlToFetch);
                if (!response.ok) {
                    console.error(`Error fetching data for ${scope}: ${response.status} - ${response.statusText}`);
                    continue;
                }

                const text = await response.text();
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(text, "text/xml");
                const objs = xmlDoc.getElementsByTagName("obj");

                for (let i = 0; i < objs.length; i++) {
                    const obj = objs[i];
                    const abstime = obj.getElementsByTagName("abstime")[0];
                    const real = obj.getElementsByTagName("real")[0];

                    if (abstime && real) {
                        const dateText = abstime.getAttribute("val");
                        const valueText = real.getAttribute("val");

                        if (valueText && dateText) {
                            const value = parseFloat(valueText).toFixed(4);
                            const date = new Date(dateText);
                            const formattedDate = date.toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric"
                            });
                            const dateStr = date.toDateString();  // Use toDateString to compare without time

                            const existingEntry = waterValues.find(entry => entry.date.toDateString() === dateStr);

                            if (existingEntry) {
                                existingEntry[scope] = parseFloat(value);
                            } else {
                                waterValues.push({
                                    date: date,
                                    [scope]: parseFloat(value)
                                });
                            }
                        }
                    }
                }
            } catch (error) {
                console.error(`Error fetching data for ${scope}: ${error.message}`);
            }
        }

        console.log("monthly co2 " + JSON.stringify(waterValues, null, 2));

        const flattenedData = waterValues.flat();
    if (checkDataAvailability(flattenedData, 'chartdiv')) {
        return; // Exit if no data is available
    }
        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end

        // Create chart instance
        var emissionChart = am4core.create("chartdiv", am4charts.XYChart);
        emissionChart.paddingRight = 20;

        // Add data
        emissionChart.data = waterValues;
        waterValues.forEach(item => {
                item.date = new Date(item.date).getTime();  // Convert to timestamp
                console.log("item date (timestamp): " + item.date);

                // Convert timestamp back to a readable date
                const formattedDate = new Date(item.date).toLocaleDateString("en-US", {
                    // year: "numeric",
                    month: "short",
                    day: "numeric"
                });
                item.date = formattedDate;
                console.log("Formatted item date: " + formattedDate);
            });

        // Create axes
        var categoryAxis = emissionChart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "date";
        categoryAxis.renderer.minGridDistance = 80;
        categoryAxis.renderer.labels.template.horizontalCenter = "middle";
        categoryAxis.renderer.labels.template.verticalCenter = "middle";

        var valueAxis = emissionChart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.baseValue = 0;

        // Function to create series
        function createSeries(valueField, name, color) {
            var series = emissionChart.series.push(new am4charts.LineSeries());
            series.dataFields.valueY = valueField;
            series.dataFields.categoryX = "date";
            series.name = name;
            series.strokeWidth = 2;
            series.tensionX = 0.77;
            series.stroke = color;

            var bullet = series.bullets.push(new am4charts.Bullet());
            bullet.tooltipText = "{valueY}";

            bullet.adapter.add("fill", function (fill, target) {
                if (target.dataItem.valueY < 0) {
                    return am4core.color("#FF0000"); // Red for negative values
                }
                return series.stroke;
            });

            return series;
        }

        emissionChart.legend = new am4charts.Legend();
        emissionChart.legend.position = "top";
        emissionChart.legend.paddingBottom = 10;
        emissionChart.legend.labels.template.maxWidth = 95;

        // Create three series with different data fields and colors
        createSeries("Scope1", "Scope 1", am4core.color("#ff7d03"));
        createSeries("Scope2", "Scope 2", am4core.color("#A4CE95"));
        createSeries("Scope3", "Scope 3", am4core.color("#FFD93D"));

        emissionChart.scrollbarX = new am4core.Scrollbar();
        emissionChart.scrollbarX.marginBottom = 20;

        emissionChart.cursor = new am4charts.XYCursor();
        emissionChart.logo.disabled = true;

    });
}


    async function createBarChart1() {
        const scopeData = [[], [], []]; // Scope 1, Scope 2, Scope 3
        const last12MonthsData = getLast12Months1();
        console.log("bar " + last12MonthsData);

        for (const month of last12MonthsData) {
            const scopeUrls = [
                `${url}/obix/histories/SqlServerDatabase/YearlyScope1/~historyQuery?start=${month.startDate}T23:59:59.000+05:30&limit=1`,
                `${url}/obix/histories/SqlServerDatabase/YearlyScope2/~historyQuery?start=${month.startDate}T23:59:59.000+05:30&limit=1`,
                `${url}/obix/histories/SqlServerDatabase/YearlyScope3/~historyQuery?start=${month.startDate}T23:59:59.000+05:30&limit=1`
            ];

            for (let i = 0; i < scopeUrls.length; i++) {
                try {
                    const response = await fetch(scopeUrls[i]);
                    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

                    const text = await response.text();
                    const parser = new DOMParser();
                    const xml = parser.parseFromString(text, "application/xml");

                    const records = xml.getElementsByTagName("list");
                    for (let record of records) {
                        // Fetch `abstime` and `real` values
                        const abstime = record.getElementsByTagName("abstime")[0]?.getAttribute("val");
                        const realValue = record.getElementsByTagName("real")[0]?.getAttribute("val");

                        // Match the `abstime` with the corresponding `month.startDate`
                        if (abstime && realValue) {
                            const abstimeDate = new Date(abstime);
                            const formattedAbstime = `${abstimeDate.getFullYear()}-${String(abstimeDate.getMonth() + 1).padStart(2, '0')}-${String(abstimeDate.getDate()).padStart(2, '0')}`;

                            if (formattedAbstime === month.startDate) {
                                scopeData[i].push(parseFloat(realValue).toFixed(2));
                            }
                        }
                    }
                } catch (error) {
                    console.error(`Error fetching data for scope ${i + 1}:`, error);
                    scopeData[i].push(null); // Push null to maintain alignment
                }
            }
        }
        const flattenedData = scopeData.flat();
    if (checkDataAvailability(flattenedData, 'chartdiv')) {
        return; // Exit if no data is available
    }
        try {
            const existingStyle = document.getElementById('chartdiv-styles');
            if (existingStyle) {
                existingStyle.remove();
            }
            const chartOptions = {
                series: [
                    { name: 'Scope 1', data: scopeData[0] },
                    { name: 'Scope 2', data: scopeData[1] },
                    { name: 'Scope 3', data: scopeData[2] }
                ],
                chart: { type: 'bar', height: "100%", stacked: false, toolbar: { show: false } },
                plotOptions: { bar: { horizontal: false, columnWidth: '80%', endingShape: 'rounded' } },
                colors: ["#ff7d03", "#A4CE95", "#FFD93D"],
                dataLabels: { enabled: false },
                xaxis: { categories: getLast12Months() },
                grid: { show: true },
                tooltip: {
                    y: { formatter: (val) => `${val} metric tons` }
                },
                legend: { position: 'top', horizontalAlign: 'center', labels: { colors: ['#000000'] } },
                stroke: { show: true, width: 2, colors: ['transparent'] },
                fill: { opacity: 1 }
            };

            emissionChart = new ApexCharts(document.querySelector("#chartdiv"), chartOptions);
            emissionChart.render();
        } catch (error) {
            console.error("Error processing the data and rendering the chart:", error);
        }
    }




    // function clearUpdateInterval() {
    //     if (intervalId) {
    //         clearInterval(intervalId);
    //         intervalId = null; // Reset intervalId to prevent multiple intervals
    //     }
    // }

    // Function to start a new interval for updating data
    // function startUpdateInterval(chartUpdateFunction) {
    //   // clearUpdateInterval(); // Clear any existing interval before starting a new one
    //     //intervalId = setInterval(chartUpdateFunction, 5000); // Set interval to update data every 5 seconds

    // }

    // Event listeners to update data based on date range or chart type selection
    $("#startDate, #endDate").on("change", async function () {
        // clearDateInputsWater();
        await disposeChartCo(dateRangeCo2); // Load initial data for the selected date range
        // startUpdateInterval(lineChart2); // Set interval to keep updating line chart data
    });

    $("#sav_monthly_btn").on("click", async function () {
        clearDateInputs();
        await disposeChartCo(lineChartMonthlyCo25); // Load initial data for the monthly chart
        //startUpdateInterval(lineChartMonthlyCo25); // Start interval for monthly updates
    });

    $("#sav_daily_btn").on("click", async function () {
        clearDateInputs();
        await disposeChartCo(pieChart); // Load initial data for the daily pie chart
        //startUpdateInterval(pieChart); // Start interval for daily pie chart updates
    });

    $("#sav_yearly_btn").on("click", async function () {
        clearDateInputs();
        await disposeChartCo(createBarChart1); // Load initial data for the yearly bar chart
        //startUpdateInterval(createBarChart1); // Start interval for yearly chart updates
    });
    /* co2 emmision end */

    /* water consumption start */

    let waterChart = null; // Declare chart globally to keep track of it

    async function disposeChartWater(newChartFunction) {
        // Destroy the existing chart if it exists
        if (waterChart) {
            if (waterChart instanceof ApexCharts) {
                waterChart.destroy(); // Dispose the existing ApexCharts instance
            } else if (waterChart instanceof am4charts.Chart) {
                waterChart.dispose(); // Dispose the existing am4charts instance
            }
            clearDateInputs();
        }
        newChartFunction();
    }
    // async function pieChart1() {
    //     let scopeValues = [];
    //     const scopes = ['domestic', 'flushing'];

    //     // Fetch data for each scope
    //     for (let scope of scopes) {
    //         const responses = await fetch(`${url}/obix/histories/SqlServerDatabase/${scope}/~historyQuery?start=${previousDate}T23:59:59.000+05:30&limit=1`);
    //         console.log("response for scope " + scope, responses);
    //         const text = await responses.text();

    //         // Parse the XML data
    //         const parser = new DOMParser();
    //         const xmlDoc = parser.parseFromString(text, "text/xml");

    //         // Get all <obj> elements
    //         const objs = xmlDoc.getElementsByTagName("list");
    //         console.log("length " + objs.length);
    //         // Process each <obj> element
    //         for (let i = 0; i < objs.length; i++) {
    //             const obj = objs[i];
    //             const real = obj.getElementsByTagName("real")[0]; // Get the <real> tag

    //             if (real) {
    //                 const valueText = real.getAttribute("val"); // Get the value of the <real> tag
    //                 console.log("value text " + valueText);

    //                 if (valueText) {
    //                     scopeValues.push({
    //                         category: scope,
    //                         [scope]: parseFloat(valueText).toFixed(2)
    //                     });
    //                 }
    //             }
    //         }
    //     }

    //     // Initialize amCharts when the data is ready
    //     am4core.ready(function () {

    //         // Themes begin
    //         am4core.useTheme(am4themes_animated);

    //         // Create chart instance if not already created
    //         waterChart = am4core.create("chartdiv1", am4charts.PieChart);

    //         // Add data to chart dynamically from fetched data
    //         waterChart.data = scopeValues;
    //         console.log("scopevalues" + scopeValues);
    //         // Add and configure Series
    //         var pieSeries = waterChart.series.push(new am4charts.PieSeries());
    //         pieSeries.dataFields.value = "value";
    //         pieSeries.dataFields.category = "category";

    //         // Set pie chart colors
    //         pieSeries.slices.template.stroke = am4core.color("transparent");
    //         pieSeries.slices.template.strokeOpacity = 0;

    //         // Example of setting colors for each slice (can be dynamically set based on data if needed)
    //         pieSeries.colors.list = [
    //             am4core.color("#C65BCF"), // Domestic Use
    //             am4core.color("#39A7FF")  // Flushing Use
    //         ];

    //         pieSeries.ticks.template.disabled = true;
    //         pieSeries.alignLabels = false;
            // pieSeries.labels.template.text = "{value.percent.formatNumber('#.0')}%";
            // pieSeries.labels.template.radius = am4core.percent(-40);
            // pieSeries.labels.template.fill = am4core.color("#000000");

    //         // Initial animation
    //         pieSeries.hiddenState.properties.opacity = 1;
    //         pieSeries.hiddenState.properties.endAngle = -90;
    //         pieSeries.hiddenState.properties.startAngle = -90;

    //         waterChart.hiddenState.properties.radius = am4core.percent(-40);
    //         pieSeries.legendSettings.valueText = "{ }"; // Remove value text

    //         // Add legend at the top
    //         waterChart.legend = new am4charts.Legend();
    //         waterChart.legend.position = "top";
    //         waterChart.legend.layout = "horizontal";
    //         waterChart.legend.contentAlign = "center"; // Center the legend horizontally
    //         waterChart.legend.labels.template.interactionsEnabled = false;

    //         // Configure legend labels and reduce spacing
    //         waterChart.legend.labels.template.text = "{category}: {value} L"; // Updated label format
    //         waterChart.legend.labels.template.fill = am4core.color("#000000");
    //         waterChart.legend.labels.template.maxWidth = 100; // Reduce max width for labels
    //         waterChart.legend.labels.template.padding(0, 0, 0, 0); // Adjust label padding (top, right, bottom, left)

    //         // // Configure legend item containers to minimize spacing
    //         waterChart.legend.itemContainers.template.padding(0, 0, 0, 0); // Adjust item container padding
    //         waterChart.legend.itemContainers.template.margin(0, 5, 0, 5); //Adjust item container margin
    //         // //chart.legend.itemContainers.template.minWidth = undefined; // Remove minWidth to make it flexible
    //         waterChart.legend.itemContainers.template.maxWidth = 180; // Limit max width for each item

    //         waterChart.logo.disabled = true;

    //     });
    // }
    async function pieChart1() {
        let scopeValues = [];
        const scopes = ['Domestic', 'Flushing'];

        // Fetch data for each scope
        for (let scope of scopes) {
            try {
                const response = await fetch(`${url}/obix/histories/Barclays_Sup/Water$20Consumption_${scope}_Daily/~historyQuery?start=${formattedDate}T23:58:00.000+05:30&limit=1`);
                console.log("response for water " + scope, response);
                if (!response.ok) {
                    console.error(`Failed to fetch data for ${scope}: ${response.statusText}`);
                    continue;
                }
                const text = await response.text();

                // Parse the XML data
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(text, "text/xml");

                // Get the first <real> tag
                const real = xmlDoc.querySelector("real");
                if (real) {
                    const valueText = real.getAttribute("val");
                    if (valueText) {
                        scopeValues.push({
                            category: scope,
                            value: parseFloat(valueText).toFixed(2) // Unified key 'value' for the chart
                        });
                    }
                }
            } catch (error) {
                console.error(`Error fetching data for ${scope}:`, error);
            }
        }
        const flattenedData = scopeValues.flat();
    if (checkDataAvailability(flattenedData, 'chartdiv1')) {
        return; // Exit if no data is available
    }
             am4core.ready(function () {

            // Themes begin
            am4core.useTheme(am4themes_animated);

            // Create chart instance if not already created
            waterChart = am4core.create("chartdiv1", am4charts.PieChart);

            // Add data to chart dynamically from fetched data
            waterChart.data = scopeValues;
            // waterChart.data = [
            //     {
            //         "category": "Domestic Use",
            //         "value": 60
            //     },
            //     {
            //         "category": "Flushing Use",
            //         "value": 40
            //     }
            // ];
            // Add and configure Series
            var pieSeries = waterChart.series.push(new am4charts.PieSeries());
            pieSeries.dataFields.value = "value";
            pieSeries.dataFields.category = "category";

            // Set pie chart colors
            pieSeries.slices.template.stroke = am4core.color("transparent");
            pieSeries.slices.template.strokeOpacity = 0;

            // Example of setting colors for each slice (can be dynamically set based on data if needed)
            pieSeries.colors.list = [
                am4core.color("#C65BCF"), // Domestic Use
                am4core.color("#39A7FF")  // Flushing Use
            ];

            pieSeries.ticks.template.disabled = true;
            pieSeries.alignLabels = false;
            pieSeries.labels.template.text = "{value.percent.formatNumber('#.0')}%";
            pieSeries.labels.template.radius = am4core.percent(-40);
            pieSeries.labels.template.fill = am4core.color("#000000");

            // Initial animation
            pieSeries.hiddenState.properties.opacity = 1;
            pieSeries.hiddenState.properties.endAngle = 90;
            pieSeries.hiddenState.properties.startAngle = -90;
            waterChart.hiddenState.properties.radius = am4core.percent(-40);
            pieSeries.legendSettings.valueText = "{ }"; // Remove value text

            // Add legend at the top
            waterChart.legend = new am4charts.Legend();
            waterChart.legend.position = "top";
            waterChart.legend.layout = "horizontal";
            waterChart.legend.contentAlign = "center"; // Center the legend horizontally
            waterChart.legend.labels.template.interactionsEnabled = false;

            // Configure legend labels and reduce spacing
            waterChart.legend.labels.template.text = "{category}: {value} L"; // Updated label format
            waterChart.legend.labels.template.fill = am4core.color("#000000");
            waterChart.legend.labels.template.maxWidth = 100; // Reduce max width for labels
            waterChart.legend.labels.template.padding(0, 0, 0, 0); // Adjust label padding (top, right, bottom, left)

            // // Configure legend item containers to minimize spacing
            waterChart.legend.itemContainers.template.padding(0, 0, 0, 0); // Adjust item container padding
            waterChart.legend.itemContainers.template.margin(0, 5, 0, 5); //Adjust item container margin
            // //chart.legend.itemContainers.template.minWidth = undefined; // Remove minWidth to make it flexible
            waterChart.legend.itemContainers.template.maxWidth = 180; // Limit max width for each item

            waterChart.logo.disabled = true;

        });
    }


disposeChartWater(pieChart1);

    async function lineChartMonthlyWater() {
        am4core.ready(async function () {

            const today = new Date();
            const currentMonth = today.getMonth();
            const startDate = new Date(today.getFullYear(), currentMonth - 1, 1);
            const endDate = new Date(today.getFullYear(), currentMonth, 0);

            const startISO = `${startDate.getFullYear()}-${String(startDate.getMonth() + 1).padStart(2, '0')}-${String(startDate.getDate()).padStart(2, '0')}`;
            const endISO = `${endDate.getFullYear()}-${String(endDate.getMonth() + 1).padStart(2, '0')}-${String(endDate.getDate()).padStart(2, '0')}`;

            const waters = ['Domestic', 'Flushing'];
            let waterValues = [];

            // Fetch data asynchronously for each scope
            for (let scope of waters) {
                const urlToFetch = `${url}/obix/histories/Barclays_Sup/Water$20Consumption_${scope}_Daily/~historyQuery?start=${startISO}T23:59:59.000+05:30&end=${endISO}T23:59:59.000+05:30`;
                console.log(urlToFetch);
                try {
                    const response = await fetch(urlToFetch);
                    console.log(response);
                    if (!response.ok) {
                        console.error(`Error fetching data for ${scope}: ${response.status} - ${response.statusText}`);
                        continue;
                    }

                    const text = await response.text();
                    const parser = new DOMParser();
                    const xmlDoc = parser.parseFromString(text, "text/xml");
                    const objs = xmlDoc.getElementsByTagName("obj");

                    for (let i = 0; i < objs.length; i++) {
                        const obj = objs[i];
                        const abstime = obj.getElementsByTagName("abstime")[0];
                        const real = obj.getElementsByTagName("real")[0];

                        if (abstime && real) {
                            const dateText = abstime.getAttribute("val");
                            const valueText = real.getAttribute("val");

                            if (valueText && dateText) {
                                const value = parseFloat(valueText).toFixed(2);
                                const date = new Date(dateText);
                                const formattedDate = date.toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric"
                                });
                                const dateStr = date.toDateString();  // Use toDateString to compare without time

                                const existingEntry = waterValues.find(entry => entry.date.toDateString() === dateStr);

                                if (existingEntry) {
                                    existingEntry[scope] = parseFloat(value);
                                } else {
                                    waterValues.push({
                                        date: date,
                                        [scope]: parseFloat(value).toFixed(2)
                                    });
                                }
                            }
                        }
                    }
                } catch (error) {
                    console.error(`Error fetching data for ${scope}: ${error.message}`);
                }
            }
            const flattenedData = waterValues.flat();
    if (checkDataAvailability(flattenedData, 'chartdiv')) {
        return; // Exit if no data is available
    }
            // Themes begin
            am4core.useTheme(am4themes_animated);
            // Themes end

            // Create chart instance
            waterChart = am4core.create("chartdiv1", am4charts.XYChart);
            waterChart.paddingRight = 20;

            // Add data
            waterChart.data = waterValues;
            waterValues.forEach(item => {
                item.date = new Date(item.date).getTime();  // Convert to timestamp
                console.log("item date (timestamp): " + item.date);

                // Convert timestamp back to a readable date
                const formattedDate = new Date(item.date).toLocaleDateString("en-US", {
                    // year: "numeric",
                    month: "short",
                    day: "numeric"
                });
                item.date = formattedDate;
                console.log("Formatted item date: " + formattedDate);
            });


            // Create axes
            var categoryAxis = waterChart.xAxes.push(new am4charts.CategoryAxis());
            categoryAxis.dataFields.category = "date"; // Use 'date' instead of 'year'
            categoryAxis.renderer.minGridDistance = 80;
            // categoryAxis.renderer.grid.template.location = 2;
            // categoryAxis.startLocation = 1;
            // categoryAxis.endLocation = 1.5;
            categoryAxis.renderer.labels.template.horizontalCenter = "middle"; // Center labels
            categoryAxis.renderer.labels.template.verticalCenter = "middle"; // Center labels

            var valueAxis = waterChart.yAxes.push(new am4charts.ValueAxis());
            valueAxis.baseValue = 0;

            // Function to create series
            function createSeries(valueField, name, color) {
                var series = waterChart.series.push(new am4charts.LineSeries());
                series.dataFields.valueY = valueField;
                series.dataFields.categoryX = "date"; // Use 'date' instead of 'year'
                series.name = name;
                series.strokeWidth = 2;
                series.tensionX = 0.77;
                series.stroke = color;

                // Bullet to display tooltips
                var bullet = series.bullets.push(new am4charts.Bullet());
                bullet.tooltipText = "{name}: {valueY}";

                bullet.adapter.add("fill", function (fill, target) {
                    // If the value is negative, color the bullet red, else use the series color
                    if (target.dataItem.valueY < 0) {
                        return am4core.color("#FF0000"); // Red for negative values
                    }
                    return series.stroke; // Use the series stroke color (the color passed to createSeries)
                });

                return series;
            }

            waterChart.legend = new am4charts.Legend();
            waterChart.legend.position = "top";
            waterChart.legend.paddingBottom = 10;
            waterChart.legend.labels.template.maxWidth = 95;
            // Create three series with different data fields and colors
            createSeries("domestic", "Domestic", am4core.color("#C65BCF"));
            createSeries("flushing", "Flushing", am4core.color("#39A7FF"));

            // Add scrollbar
            // var scrollbarX = new am4charts.XYChartScrollbar();
            // scrollbarX.series.push(chart.series.values[0]);  // Add the first series to the scrollbar
            // chart.scrollbarX = scrollbarX;
            // scrollbarX.height = 30;
            waterChart.scrollbarX = new am4core.Scrollbar();
            waterChart.scrollbarX.marginBottom = 20;

            waterChart.cursor = new am4charts.XYCursor();
            waterChart.logo.disabled = true;

        });
    }
    // async function lineChartMonthlyWater() {
    //     try {
    //         const today = new Date();
    //         const currentMonth = today.getMonth();
    //         const startDate = new Date(today.getFullYear(), currentMonth - 1, 1);
    //         const endDate = new Date(today.getFullYear(), currentMonth, 0);

    //         const startISO = `${startDate.getFullYear()}-${String(startDate.getMonth() + 1).padStart(2, '0')}-${String(startDate.getDate()).padStart(2, '0')}`;
    //         const endISO = `${endDate.getFullYear()}-${String(endDate.getMonth() + 1).padStart(2, '0')}-${String(endDate.getDate()).padStart(2, '0')}`;

    //         const waters = ['domestic', 'flushing'];
    //         let waterValues = [];

    //         // Fetch data for each scope
    //         for (let water of waters) {
    //             const response = await fetch(url + `/obix/histories/SqlServerDatabase/${water}/~historyQuery?start=${startISO}&end=${endISO}`);
    //             const text = await response.text();

    //             const parser = new DOMParser();
    //             const xmlDoc = parser.parseFromString(text, "text/xml");
    //             const objs = xmlDoc.getElementsByTagName("obj");

    //             // Process each <obj> element
    //             for (let i = 0; i < objs.length; i++) {
    //                 const obj = objs[i];
    //                 const abstime = obj.getElementsByTagName("abstime")[0];
    //                 const real = obj.getElementsByTagName("real")[0];

    //                 if (abstime && real) {
    //                     const dateText = abstime.getAttribute("val");
    //                     const valueText = real.getAttribute("val");

    //                     if (valueText && dateText) {
    //                         const value = parseFloat(valueText).toFixed(2);
    //                         const date = new Date(dateText);
    //                         const dateStr = date.toDateString();

    //                         // Add the data for each scope
    //                         const existingEntry = waterValues.find(entry => entry.date.toDateString() === dateStr);

    //                         if (existingEntry) {
    //                             existingEntry[water] = parseFloat(value);
    //                         } else {
    //                             waterValues.push({
    //                                 date: date,
    //                                 [water]: parseFloat(value)
    //                             });
    //                         }
    //                     }
    //                 }
    //             }
    //         }

    //         console.log(waterValues); // Debug the data

    //         if (waterValues.length === 0) {
    //             console.error("No valid data found.");
    //             return;
    //         }

    //         // Create the chart with AmCharts 5
    //         am5.ready(function() {
    //             const root = am5.Root.new("chartdiv1");
    //             root.setThemes([am5themes_Animated.new(root)]);

    //             const chart = root.container.children.push(
    //                 am5xy.XYChart.new(root, {
    //                     panX: true,
    //                     panY: true,
    //                     wheelX: "pan",
    //                     wheelY: "zoom"
    //                 })
    //             );

    //             const xAxis = chart.xAxes.push(
    //                 am5xy.DateAxis.new(root, {
    //                     maxDeviation: 0,
    //                     baseInterval: { timeUnit: "day", count: 1 },
    //                     renderer: am5xy.AxisRendererX.new(root, { minGridDistance: 30 })
    //                 })
    //             );

    //             const yAxis = chart.yAxes.push(
    //                 am5xy.ValueAxis.new(root, {
    //                     renderer: am5xy.AxisRendererY.new(root, {})
    //                 })
    //             );

    //             const domesticSeries = chart.series.push(
    //                 am5xy.LineSeries.new(root, {
    //                     name: "Domestic Water",
    //                     xAxis: xAxis,
    //                     yAxis: yAxis,
    //                     valueYField: "domestic",
    //                     valueXField: "date",
    //                     tooltip: am5.Tooltip.new(root, {
    //                         labelText: "{valueY}"
    //                     })
    //                 })
    //             );

    //             const flushingSeries = chart.series.push(
    //                 am5xy.LineSeries.new(root, {
    //                     name: "Flushing Water",
    //                     xAxis: xAxis,
    //                     yAxis: yAxis,
    //                     valueYField: "flushing",
    //                     valueXField: "date",
    //                     tooltip: am5.Tooltip.new(root, {
    //                         labelText: "{valueY}"
    //                     })
    //                 })
    //             );

    //             chart.data.setAll(waterValues); // Set the data

    //             chart.children.push(am5.Legend.new(root, { x: am5.percent(50), centerX: am5.percent(50) }));

    //             chart.events.on("datavalidated", function() {
    //                 chart.zoomToIndexes(Math.max(chart.data.length - 70, 0), chart.data.length - 1);
    //             });
    //         });
    //     } catch (error) {
    //         console.error("Error fetching or processing the data:", error);
    //     }
    // }
    async function daterangeWater() {
      am4core.ready(async function () {

            var startDateValue = $("#startDateWater").val();
            var endDateValue = $("#endDateWater").val();
            console.log("Start Date Value: ", startDateValue);
            console.log("End Date Value: ", endDateValue);
             const isValid = await validateDateRange(startDateValue, endDateValue);
            if (!isValid) {
                // If the date range is invalid, stop execution
                return;
            }
            const waters = ['Domestic', 'Flushing'];
            let waterValues = [];
            // const url = "https://localhost";

            // Fetch data asynchronously for each scope
            for (let scope of waters) {
                const urlToFetch = `${url}/obix/histories/Barclays_Sup/Water$20Consumption_${scope}_Daily/~historyQuery?start=${startDateValue}T23:58:00.000+05:30&end=${endDateValue}T23:58:00.000+05:30`;
                console.log(urlToFetch);
                try {
                    const response = await fetch(urlToFetch);
                    console.log(response);
                    if (!response.ok) {
                        console.error(`Error fetching data for ${scope}: ${response.status} - ${response.statusText}`);
                        continue;
                    }

                const text = await response.text();

                // Parse the XML data
                    const parser = new DOMParser();
                    const xmlDoc = parser.parseFromString(text, "text/xml");
                    const objs = xmlDoc.getElementsByTagName("obj");

                    for (let i = 0; i < objs.length; i++) {
                        const obj = objs[i];
                        const abstime = obj.getElementsByTagName("abstime")[0];
                        const real = obj.getElementsByTagName("real")[0];

                        if (abstime && real) {
                            const dateText = abstime.getAttribute("val");
                            const valueText = real.getAttribute("val");

                            if (valueText && dateText) {
                                const value = parseFloat(valueText).toFixed(2);
                                const date = new Date(dateText);
                                const formattedDate = date.toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric"
                                });
                                const dateStr = date.toDateString();  // Use toDateString to compare without time

                                const existingEntry = waterValues.find(entry => entry.date.toDateString() === dateStr);

                                if (existingEntry) {
                                    existingEntry[scope] = parseFloat(value);
                                } else {
                                    waterValues.push({
                                        date: date,
                                        [scope]: parseFloat(value)
                                    });
                                }
                            }
                        }
                    }
                } catch (error) {
                    console.error(`Error fetching data for ${scope}: ${error.message}`);
                }
            }
            const flattenedData = waterValues.flat();
    if (checkDataAvailability(flattenedData, 'chartdiv')) {
        return; // Exit if no data is available
    }
            // Themes begin
            am4core.useTheme(am4themes_animated);
            // Themes end

            // Create chart instance
            var emissionChart = am4core.create("chartdiv1", am4charts.XYChart);
            emissionChart.paddingRight = 20;

            // Add data
            emissionChart.data = waterValues;
            waterValues.forEach(item => {
                item.date = new Date(item.date).getTime();  // Convert to timestamp
                console.log("item date (timestamp): " + item.date);

                // Convert timestamp back to a readable date
                const formattedDate = new Date(item.date).toLocaleDateString("en-US", {
                    // year: "numeric",
                    month: "short",
                    day: "numeric"
                });
                item.date = formattedDate;
                console.log("Formatted item date: " + formattedDate);
            });


            // Create axes
            var categoryAxis = emissionChart.xAxes.push(new am4charts.CategoryAxis());
            categoryAxis.dataFields.category = "date"; // Use 'date' instead of 'year'
            categoryAxis.renderer.minGridDistance = 80;
            // categoryAxis.renderer.grid.template.location = 2;
            // categoryAxis.startLocation = 1;
            // categoryAxis.endLocation = 1.5;
            categoryAxis.renderer.labels.template.horizontalCenter = "middle"; // Center labels
            categoryAxis.renderer.labels.template.verticalCenter = "middle"; // Center labels

            var valueAxis = emissionChart.yAxes.push(new am4charts.ValueAxis());
            valueAxis.baseValue = 0;

            // Function to create series
            function createSeries(valueField, name, color) {
                var series = emissionChart.series.push(new am4charts.LineSeries());
                series.dataFields.valueY = valueField;
                series.dataFields.categoryX = "date"; // Use 'date' instead of 'year'
                series.name = name;
                series.strokeWidth = 2;
                series.tensionX = 0.77;
                series.stroke = color;

                // Bullet to display tooltips
                var bullet = series.bullets.push(new am4charts.Bullet());
                bullet.tooltipText = "{name}: {valueY} ";

                bullet.adapter.add("fill", function (fill, target) {
                    // If the value is negative, color the bullet red, else use the series color
                    if (target.dataItem.valueY < 0) {
                        return am4core.color("#FF0000"); // Red for negative values
                    }
                    return series.stroke; // Use the series stroke color (the color passed to createSeries)
                });

                return series;
            }
            emissionChart.legend = new am4charts.Legend();
            emissionChart.legend.position = "top";
            emissionChart.legend.paddingBottom = 10;
            emissionChart.legend.labels.template.maxWidth = 95;
            // Create three series with different data fields and colors
            createSeries("Domestic", "Domestic", am4core.color("#C65BCF"));
            createSeries("Flushing", "Flushing", am4core.color("#39A7FF"));

            // Add scrollbar
            // var scrollbarX = new am4charts.XYChartScrollbar();
            // scrollbarX.series.push(chart.series.values[0]);  // Add the first series to the scrollbar
            // chart.scrollbarX = scrollbarX;
            // scrollbarX.height = 30;
            emissionChart.scrollbarX = new am4core.Scrollbar();
            emissionChart.scrollbarX.marginBottom = 20;

            emissionChart.cursor = new am4charts.XYCursor();
            emissionChart.logo.disabled = true;

        });
    //   am4core.ready(async function () {

    //                 const startDateValue = $("#startDateWater").val();
    //     const endDateValue = $("#endDateWater").val();
    //         const isValid = await validateDateRange(startDateValue, endDateValue);
    // if (!isValid) {
    //     // If the date range is invalid, stop execution
    //     return;
    // }
    //         const waters = ['Domestic', 'Flushing'];
    //         let waterValues = [];
    //         // const url = "https://localhost";

    //         // Fetch data asynchronously for each scope
    //         for (let scope of waters) {
    //             const urlToFetch = `${url}/obix/histories/Barclays_Sup/Water$20Consumption_${scope}_Daily/~historyQuery?start=${startDateValue}T23:58:00.000+05:30&end=${endDateValue}T23:58:00.000+05:30`;
    //             console.log(urlToFetch);
    //             try {
    //                 const response = await fetch(urlToFetch);
    //                 console.log(response);
    //                 if (!response.ok) {
    //                     console.error(`Error fetching data for ${scope}: ${response.status} - ${response.statusText}`);
    //                     continue;
    //                 }

    //             const text = await response.text();

    //             // Parse the XML data
    //                 const parser = new DOMParser();
    //                 const xmlDoc = parser.parseFromString(text, "text/xml");
    //                 const objs = xmlDoc.getElementsByTagName("obj");

    //                 for (let i = 0; i < objs.length; i++) {
    //                     const obj = objs[i];
    //                     const abstime = obj.getElementsByTagName("abstime")[0];
    //                     const real = obj.getElementsByTagName("real")[0];

    //                     if (abstime && real) {
    //                         const dateText = abstime.getAttribute("val");
    //                         const valueText = real.getAttribute("val");

    //                         if (valueText && dateText) {
    //                             const value = parseFloat(valueText).toFixed(2);
    //                             const date = new Date(dateText);
    //                             const formattedDate = date.toLocaleDateString("en-US", {
    //                                 month: "short",
    //                                 day: "numeric"
    //                             });
    //                             const dateStr = date.toDateString();  // Use toDateString to compare without time

    //                             const existingEntry = waterValues.find(entry => entry.date.toDateString() === dateStr);

    //                             if (existingEntry) {
    //                                 existingEntry[scope] = parseFloat(value);
    //                             } else {
    //                                 waterValues.push({
    //                                     date: date,
    //                                     [scope]: parseFloat(value)
    //                                 });
    //                             }
    //                         }
    //                     }
    //                 }
    //             } catch (error) {
    //                 console.error(`Error fetching data for ${scope}: ${error.message}`);
    //             }
    //         }

    //         // Themes begin
    //         am4core.useTheme(am4themes_animated);
    //         // Themes end

    //         // Create chart instance
    //         epiChart = am4core.create("chartdiv5", am4charts.XYChart);
    //         epiChart.paddingRight = 20;

    //         // Add data
    //         epiChart.data = waterValues;
    //         waterValues.forEach(item => {
    //             item.date = new Date(item.date).getTime();  // Convert to timestamp
    //             console.log("item date (timestamp): " + item.date);

    //             // Convert timestamp back to a readable date
    //             const formattedDate = new Date(item.date).toLocaleDateString("en-US", {
    //                 // year: "numeric",
    //                 month: "short",
    //                 day: "numeric"
    //             });
    //             item.date = formattedDate;
    //             console.log("Formatted item date: " + formattedDate);
    //         });


    //         // Create axes
    //         var categoryAxis = epiChart.xAxes.push(new am4charts.CategoryAxis());
    //         categoryAxis.dataFields.category = "date"; // Use 'date' instead of 'year'
    //         categoryAxis.renderer.minGridDistance = 80;
    //         // categoryAxis.renderer.grid.template.location = 2;
    //         // categoryAxis.startLocation = 1;
    //         // categoryAxis.endLocation = 1.5;
    //         categoryAxis.renderer.labels.template.horizontalCenter = "middle"; // Center labels
    //         categoryAxis.renderer.labels.template.verticalCenter = "middle"; // Center labels

    //         var valueAxis = epiChart.yAxes.push(new am4charts.ValueAxis());
    //         valueAxis.baseValue = 0;

    //         // Function to create series
    //         function createSeries(valueField, name, color) {
    //             var series = epiChart.series.push(new am4charts.LineSeries());
    //             series.dataFields.valueY = valueField;
    //             series.dataFields.categoryX = "date"; // Use 'date' instead of 'year'
    //             series.name = name;
    //             series.strokeWidth = 2;
    //             series.tensionX = 0.77;
    //             series.stroke = color;

    //             // Bullet to display tooltips
    //             var bullet = series.bullets.push(new am4charts.Bullet());
    //             bullet.tooltipText = "{valueY}";

    //             bullet.adapter.add("fill", function (fill, target) {
    //                 // If the value is negative, color the bullet red, else use the series color
    //                 if (target.dataItem.valueY < 0) {
    //                     return am4core.color("#FF0000"); // Red for negative values
    //                 }
    //                 return series.stroke; // Use the series stroke color (the color passed to createSeries)
    //             });

    //             return series;
    //         }
    //         epiChart.legend = new am4charts.Legend();
    //         epiChart.legend.position = "top";
    //         epiChart.legend.paddingBottom = 10;
    //         epiChart.legend.labels.template.maxWidth = 95;
    //         // Create three series with different data fields and colors
    //         createSeries("Domestic", "Domestic", am4core.color("#FFB200"));
    //         createSeries("Flushing", "Flushing", am4core.color("#667BC6"));

    //         // Add scrollbar
    //         // var scrollbarX = new am4charts.XYChartScrollbar();
    //         // scrollbarX.series.push(chart.series.values[0]);  // Add the first series to the scrollbar
    //         // chart.scrollbarX = scrollbarX;
    //         // scrollbarX.height = 30;
    //         epiChart.scrollbarX = new am4core.Scrollbar();
    //         epiChart.scrollbarX.marginBottom = 20;

    //         epiChart.cursor = new am4charts.XYCursor();
    //         epiChart.logo.disabled = true;

    //     });
//         am4core.ready(async function () {

//             var startDateValue = $("#startDateWater").val();
//             var endDateValue = $("#endDateWater").val();
//             const isValid = await validateDateRange(startDateValue, endDateValue);
//             if (!isValid) {
//                 // If the date range is invalid, stop execution
//                 return;
//             }
//             const waters = ['Domestic', 'Flushing'];
//             let waterValues = [];
//             // Fetch data asynchronously for each scope
//             for (let scope of waters) {
//                 const urlToFetch = `${url}/obix/histories/Barclays_Sup/Water$20Consumption_${scope}_Daily/~historyQuery?start=${startDateValue}&end=${endDateValue}`;//T23:58:00.000+05:30
//                 console.log(urlToFetch);
//                 try {
//         const response = await fetch(urlToFetch);
//         console.log(response);

//         const text = await response.text();
//         const parser = new DOMParser();
//         const xmlDoc = parser.parseFromString(text, "text/xml");
//         const objs = xmlDoc.getElementsByTagName("obj");

//         for (let i = 0; i < objs.length; i++) {
//             const obj = objs[i];
//             const abstime = obj.getElementsByTagName("abstime")[0];
//             const real = obj.getElementsByTagName("real")[0];

//             if (abstime && real) {
//                 const dateText = abstime.getAttribute("val");
//                 const valueText = real.getAttribute("val");

//                 if (valueText && dateText) {
//                     const value = parseFloat(valueText).toFixed(2);
//                     const rawDate = new Date(dateText);

//                     // Normalize date to remove milliseconds and ignore seconds
//                     const normalizedDate = normalizeDate(rawDate);
//                     const formattedDate = normalizedDate.toLocaleDateString("en-US", {
//                         month: "short",
//                         day: "numeric"
//                     });
//                     const dateStr = normalizedDate.toDateString();  // Use toDateString to compare without time

//                     const existingEntry = waterValues.find(entry => entry.date.toDateString() === dateStr);

//                     if (existingEntry) {
//                         // Update the existing entry's value
//                         existingEntry.value = parseFloat(value);
//                     } else {
//                         // Add a new entry with date and value
//                         waterValues.push({
//                             date: normalizedDate,
//                             value: parseFloat(value)
//                         });
//                     }
//                 }
//             }
//         }
//     } catch (error) {
//         console.error(`Error fetching data: ${error}`);
//     }
//             }
// console.log("Domestic Data:", waterValues.map(item => item.Domestic));
// console.log("Flushing Data:", waterValues.map(item => item.Flushing));
// console.log("Final waterValues array:");
// console.log(waterValues);

//             // Themes begin
//             am4core.useTheme(am4themes_animated);
//             // Themes end

//             // Create chart instance
//             var emissionChart = am4core.create("chartdiv1", am4charts.XYChart);
//             emissionChart.paddingRight = 20;

//             // Add data
//             emissionChart.data = waterValues;
//             waterValues.forEach(item => {
//                 item.date = new Date(item.date).getTime();  // Convert to timestamp
//                 console.log("item date (timestamp): " + item.date);

//                 // Convert timestamp back to a readable date
//                 const formattedDate = new Date(item.date).toLocaleDateString("en-US", {
//                     // year: "numeric",
//                     month: "short",
//                     day: "numeric"
//                 });
//                 item.date = formattedDate;
//                 console.log("Formatted item date: " + formattedDate);
//             });


//             // Create axes
//             var categoryAxis = emissionChart.xAxes.push(new am4charts.CategoryAxis());
//             categoryAxis.dataFields.category = "date"; // Use 'date' instead of 'year'
//             categoryAxis.renderer.minGridDistance = 80;
//             // categoryAxis.renderer.grid.template.location = 2;
//             // categoryAxis.startLocation = 1;
//             // categoryAxis.endLocation = 1.5;
//             categoryAxis.renderer.labels.template.horizontalCenter = "middle"; // Center labels
//             categoryAxis.renderer.labels.template.verticalCenter = "middle"; // Center labels

//             var valueAxis = emissionChart.yAxes.push(new am4charts.ValueAxis());
//             valueAxis.baseValue = 0;

//             // Function to create series
//             function createSeries(valueField, name, color) {
//                 var series = emissionChart.series.push(new am4charts.LineSeries());
//                 series.dataFields.valueY = valueField;
//                 series.dataFields.categoryX = "date"; // Use 'date' instead of 'year'
//                 series.name = name;
//                 series.strokeWidth = 2;
//                 series.tensionX = 0.77;
//                 series.stroke = color;

//                 // Bullet to display tooltips
//                 var bullet = series.bullets.push(new am4charts.Bullet());
//                 bullet.tooltipText = "{name}: {valueY} ";

//                 bullet.adapter.add("fill", function (fill, target) {
//                     // If the value is negative, color the bullet red, else use the series color
//                     if (target.dataItem.valueY < 0) {
//                         return am4core.color("#FF0000"); // Red for negative values
//                     }
//                     return series.stroke; // Use the series stroke color (the color passed to createSeries)
//                 });

//                 return series;
//             }
//             emissionChart.legend = new am4charts.Legend();
//             emissionChart.legend.position = "top";
//             emissionChart.legend.paddingBottom = 10;
//             emissionChart.legend.labels.template.maxWidth = 95;
//             // Create three series with different data fields and colors
//             createSeries("Domestic", "Domestic", am4core.color("#C65BCF"));
//             createSeries("Flushing", "Flushing", am4core.color("#39A7FF"));

//             // Add scrollbar
//             // var scrollbarX = new am4charts.XYChartScrollbar();
//             // scrollbarX.series.push(chart.series.values[0]);  // Add the first series to the scrollbar
//             // chart.scrollbarX = scrollbarX;
//             // scrollbarX.height = 30;
//             emissionChart.scrollbarX = new am4core.Scrollbar();
//             emissionChart.scrollbarX.marginBottom = 20;

//             emissionChart.cursor = new am4charts.XYCursor();
//             emissionChart.logo.disabled = true;

//         });
    }
//     async function daterangeWater() {
//     am4core.ready(async function () {
        // const startDateValue = $("#startDateWater").val();
        // const endDateValue = $("#endDateWater").val();
//         const isValid = await validateDateRange(startDateValue, endDateValue);

//         if (!isValid) {
//             // If the date range is invalid, stop execution
//             return;
//         }

//         const waters = ['Domestic', 'Flushing'];
//         let waterValues = [];

//         for (let scope of waters) {
//             const urlToFetch = `${url}/obix/histories/Barclays_Sup/Water$20Consumption_${scope}_Daily/~historyQuery?start=${startDateValue}T23:58:00.000+05:30&end=${endDateValue}T23:58:00.000+05:30`;
//             console.log(urlToFetch);

//             try {
//                 const response = await fetch(urlToFetch);
//                 console.log(response);

//                 if (!response.ok) {
//                     console.error(`Error fetching data for ${scope}: ${response.status} - ${response.statusText}`);
//                     continue;
//                 }

//                 const text = await response.text();
//                 const parser = new DOMParser();
//                 const xmlDoc = parser.parseFromString(text, "text/xml");
//                 const objs = xmlDoc.getElementsByTagName("obj");

//                 for (let i = 0; i < objs.length; i++) {
//                     const obj = objs[i];
//                     const abstime = obj.getElementsByTagName("abstime")[0];
//                     const real = obj.getElementsByTagName("real")[0];

//                     if (abstime && real) {
//                         const dateText = abstime.getAttribute("val");
//                         const valueText = real.getAttribute("val");

//                         if (valueText && dateText) {
//                             const rawDate = new Date(dateText);
//                             const adjustedDate = new Date(rawDate.getTime() + (5 * 60 + 30) * 60000); // Adjust to +05:30

//                             const formattedDate = adjustedDate.toLocaleDateString("en-US", {
//                                 month: "short",
//                                 day: "numeric"
//                             });
//                             const dateStr = adjustedDate;

//                             const existingEntry = waterValues.find(entry => entry.date.toDateString() === dateStr);

//                             if (existingEntry) {
//                                 existingEntry[scope] = parseFloat(valueText);
//                             } else {
//                                 waterValues.push({
//                                     date: adjustedDate,
//                                     [scope]: parseFloat(valueText)
//                                 });
//                             }
//                         }
//                     }
//                 }
//             } catch (error) {
//                 console.error(`Error fetching data for ${scope}: ${error.message}`);
//             }
//         }

//         // Themes begin
//         am4core.useTheme(am4themes_animated);
//         // Themes end

//         // Create chart instance
//         var emissionChart = am4core.create("chartdiv1", am4charts.XYChart);
//         emissionChart.paddingRight = 20;

//         // Add data
//         waterValues.forEach(item => {
//             item.date = item.date.toLocaleDateString("en-US", {
//                 month: "short",
//                 day: "numeric"
//             });
//         });

//         emissionChart.data = waterValues;

//         // Create axes
//         var categoryAxis = emissionChart.xAxes.push(new am4charts.CategoryAxis());
//         categoryAxis.dataFields.category = "date";
//         categoryAxis.renderer.minGridDistance = 80;
//         categoryAxis.renderer.labels.template.horizontalCenter = "middle";
//         categoryAxis.renderer.labels.template.verticalCenter = "middle";

//         var valueAxis = emissionChart.yAxes.push(new am4charts.ValueAxis());
//         valueAxis.baseValue = 0;

//         // Function to create series
//         function createSeries(valueField, name, color) {
//             var series = emissionChart.series.push(new am4charts.LineSeries());
//             series.dataFields.valueY = valueField;
//             series.dataFields.categoryX = "date";
//             series.name = name;
//             series.strokeWidth = 2;
//             series.tensionX = 0.77;
//             series.stroke = color;

//             var bullet = series.bullets.push(new am4charts.Bullet());
//             bullet.tooltipText = "{name}: {valueY} ";

//             bullet.adapter.add("fill", function (fill, target) {
//                 if (target.dataItem.valueY < 0) {
//                     return am4core.color("#FF0000");
//                 }
//                 return series.stroke;
//             });

//             return series;
//         }

//         emissionChart.legend = new am4charts.Legend();
//         emissionChart.legend.position = "top";
//         emissionChart.legend.paddingBottom = 10;
//         emissionChart.legend.labels.template.maxWidth = 95;

//         createSeries("Domestic", "Domestic", am4core.color("#C65BCF"));
//         createSeries("Flushing", "Flushing", am4core.color("#39A7FF"));

//         // Add scrollbar
//         emissionChart.scrollbarX = new am4core.Scrollbar();
//         emissionChart.scrollbarX.marginBottom = 20;

//         emissionChart.cursor = new am4charts.XYCursor();
//         emissionChart.logo.disabled = true;
//     });
// }


    async function showClusteredBarChart1() {
        const domesticWater = [];
        const flushingWater = [];
        const last12Months = getLast12Months1();
        console.log(last12Months);
        const previousMonths = getLast12Months();
        console.log(previousMonths);
for (const month of last12Months) {
    const scopeUrls = [
        `${url}/obix/histories/SqlServerDatabase/domesticYearly/~historyQuery?start=${month.startDate}T23:59:59.000+05:30&limit=1`,
        `${url}/obix/histories/SqlServerDatabase/flushingYearly/~historyQuery?start=${month.startDate}T23:59:59.000+05:30&limit=1`
    ];

    for (let i = 0; i < scopeUrls.length; i++) {
        try {
            const response = await fetch(scopeUrls[i]);
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

            const text = await response.text();
            const parser = new DOMParser();
            const xml = parser.parseFromString(text, "application/xml");

            const records = xml.getElementsByTagName("list");
            for (let record of records) {
                // Fetch `abstime` and `real` values
                const abstime = record.getElementsByTagName("abstime")[0]?.getAttribute("val");
                const realValue = record.getElementsByTagName("real")[0]?.getAttribute("val");

                // Match the `abstime` with the corresponding `month.startDate`
                if (abstime && realValue) {
                    const abstimeDate = new Date(abstime);
                    const formattedAbstime = `${abstimeDate.getFullYear()}-${String(abstimeDate.getMonth() + 1).padStart(2, '0')}-${String(abstimeDate.getDate()).padStart(2, '0')}`;

                    if (formattedAbstime === month.startDate) {
                        if (i === 0) {
                            domesticWater.push(parseFloat(realValue).toFixed(1));
                        } else if (i === 1) {
                            flushingWater.push(parseFloat(realValue).toFixed(1));
                        }
                    }
                }
            }
        } catch (error) {
            console.error(`Error fetching data for scope ${i + 1}:`, error);
            if (i === 0) {
                domesticWater.push(null); // Push null to maintain alignment
            } else if (i === 1) {
                flushingWater.push(null); // Push null to maintain alignment
            }
        }
    }
}
const waterValues = [domesticWater, flushingWater];
    const flattenedData = waterValues.flat();
    if (checkDataAvailability(flattenedData, 'chartdiv1')) {
        return; // Exit if no data is available
    }
am4core.ready(function () {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create the chart
    let waterChart = am4core.create('chartdiv1', am4charts.XYChart);

    waterChart.padding(0, 0, 0, 0);
    waterChart.colors.step = 2;

    // Legend configuration
    waterChart.legend = new am4charts.Legend();
    waterChart.legend.position = 'top';
    waterChart.legend.paddingBottom = 20;
    waterChart.legend.labels.template.maxWidth = 95;
    waterChart.legend.labels.template.fill = am4core.color('#000000');

    // X-axis configuration
    var xAxis = waterChart.xAxes.push(new am4charts.CategoryAxis());
    xAxis.dataFields.category = 'category';
    xAxis.renderer.cellStartLocation = 0.2;
    xAxis.renderer.cellEndLocation = 0.8;
    xAxis.renderer.grid.template.location = 0;
    xAxis.renderer.labels.template.fill = am4core.color('#000000');
    xAxis.renderer.minGridDistance = 20;
    xAxis.renderer.labels.template.rotation = 315;
    xAxis.renderer.labels.template.horizontalCenter = "right"; // Align to right
    xAxis.renderer.labels.template.verticalCenter = "middle"; // Center vertically
    xAxis.renderer.labels.template.dy = -15;
    xAxis.renderer.labels.template.fontSize = 10;
    xAxis.renderer.labels.template.dx = 5;

    // Y-axis configuration
    const maxDomesticWater = Math.max(...domesticWater);
const maxFlushingWater = Math.max(...flushingWater);
    const maxValue = Math.max(maxDomesticWater, maxFlushingWater);
    const yAxisMaxValue = Math.ceil(maxValue * 2);
    var yAxis = waterChart.yAxes.push(new am4charts.ValueAxis());
    yAxis.min = 0;
    yAxis.max = yAxisMaxValue;
    yAxis.renderer.labels.template.fill = am4core.color('#000000');
    // Create series function
    function createSeries(value, name, color) {
        var series = waterChart.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueY = value;
        series.dataFields.categoryX = "category";
        series.name = name;

        series.columns.template.fill = am4core.color(color);  // Fill color
        series.columns.template.stroke = am4core.color(color); // Stroke color

        // Customize tooltip
        series.tooltipText = '{name}: {valueY}';
        series.tooltip.background.fill = am4core.color(color); // Set tooltip background color to match series color
        series.tooltip.label.fill = am4core.color('#ffffff'); // Tooltip text color
        series.tooltip.pointerOrientation = 'vertical'; // Tooltip orientation
        series.tooltip.getFillFromObject = false; // Ensure tooltip color is set explicitly
        series.tooltip.getStrokeFromObject = false; // Ensure tooltip border color is set explicitly

        series.stacked = true;  // Enable stacking

        return series;
    }

    // Generate the chart data using domesticWater and flushingWater for the last 12 months
    waterChart.data = previousMonths.map((month, index) => ({
        category: month,
        domesticYearly: domesticWater[index] || 0, // Fallback to 0 if no data
        flushingYearly: flushingWater[index] || 0  // Fallback to 0 if no data
    }));

    // Create series for Scope 1 and Scope 2 data
    createSeries('domesticYearly', 'Domestic', '#C65BCF'); // Scope 1 data
    createSeries('flushingYearly', 'Flushing', '#39A7FF'); // Scope 2 data

    // Add total value at the top of each bar for the last series only
    waterChart.events.on("datavalidated", function () {
        const lastSeries = waterChart.series.getIndex(waterChart.series.length - 1); // Get the last series in the stack
        lastSeries.columns.each(function (column) {
            let total = 0;

            // Loop through all stacked series to calculate the total
            waterChart.series.each(function (stackedSeries) {
                total += stackedSeries.dataItems.getIndex(column.dataItem.index)?.valueY || 0; // Safeguard null values
            });

            // Add a label at the top of the stack (for the last series only)
            const label = column.createChild(am4core.Label);
            label.text = total.toFixed(1); // Format the total to 2 decimal places
            label.fill = am4core.color('#000000'); // Label color
            label.fontSize = 12;
            label.dy = -20; // Position above the bar
            label.align = "center";
        });
    });

    // Configure cursor
    var cursor = new am4charts.XYCursor();
    waterChart.cursor = cursor;
    waterChart.logo.disabled = true;
});
 // end am4core.ready()
    }





    $("#startDateWater, #endDateWater").on("change", async function () {
        // clearDateInputs();
        await disposeChartWater(daterangeWater);
    });

    $("#sav_monthly_water").on("click", async function () {
        clearDateInputsWater();
        await disposeChartWater(lineChartMonthlyWater);
    });

    $("#sav_daily_water").on("click", async function () {
        clearDateInputsWater();
        await disposeChartWater(pieChart1);
    });

    $("#sav_yearly_water").on("click", async function () {
        clearDateInputsWater();
        await disposeChartWater(showClusteredBarChart1);
    });
    /* water consumption end */

    /* power consumption start */
    let powerChart;
    async function disposeChartPower(newChartFunction) {
        // Destroy the existing chart if it exists
            if (powerChart) {
                if (powerChart instanceof ApexCharts) {
                    powerChart.destroy(); // Dispose the existing chart
                } else {
                    powerChart.dispose(); // Dispose the existing am4charts instance
                }
            }
        await newChartFunction();
    }

    // async function lineChart4() {
    //     let currentDate = new Date();
    //     currentDate.setDate(currentDate.getDate());

    //     // Format the date (optional)
    //     let previousDate = currentDate.toISOString().split('T')[0];
    //     //console.log("previos day " + previousDate);
    //     const response = await fetch(`${url}/obix/histories/SqlServerDatabase/powerDaily/~historyQuery?start=${previousDate}T00:00:00.000+05:30&end=${previousDate}T22:00:00.000+05:30`);
    //     //console.log(response);
    //     const text = await response.text();

    //     // Parse the XML data
    //     const parser = new DOMParser();
    //     const xmlDoc = parser.parseFromString(text, "text/xml");

    //     // Get all <obj> elements that contain timestamp and value
    //     const objElements = xmlDoc.getElementsByTagName("obj");

    //     // Initialize arrays to store time and value
    //     let times = [];
    //     let values = [];

    //     // Iterate through the <obj> elements to extract the time and value
    //     for (let i = 1; i < objElements.length; i++) {
    //         const obj = objElements[i];

    //         const timestampElement = obj.getElementsByTagName("abstime")[0];
    //         const valueElement = obj.getElementsByTagName("real")[0];

    //         // Check if both timestamp and value exist and are not null
    //         if (timestampElement && valueElement) {
    //             const timestamp = timestampElement.getAttribute("val");
    //             const value = valueElement.getAttribute("val");

    //             if (timestamp && value) {
    //                 // Extract only the time (HH:mm) from the timestamp
    //                 const time = timestamp.split("T")[1]?.split(":").slice(0, 2).join(":");

    //                 // Ensure time is valid and add to arrays
    //                 if (time) {
    //                     times.push(time);
    //                     values.push(parseFloat(value));
    //                 }
    //             }
    //         }
    //     }

    //     am4core.ready(function () {
    //         // Themes begin
    //         am4core.useTheme(am4themes_animated);
    //         // Themes end

    //         // Create chart instance
    //         powerChart = am4core.create("chartdiv2", am4charts.XYChart);

    //         // Prepare data array based on extracted times and values
    //         // powerChart.data = times.map((time, index) => ({
    //         //     "time": time, // Time in HH:mm format
    //         //     "value": values[index] // Corresponding value
    //         // }));
    //         powerChart.data = [
    //             { "time": "00:00", "value": 50 },
    //             { "time": "02:00", "value": 55 },
    //             { "time": "04:00", "value": 60 },
    //             { "time": "06:00", "value": 70 },
    //             { "time": "08:00", "value": 65 },
    //             { "time": "10:00", "value": 75 },
    //             { "time": "12:00", "value": 80 },
    //             { "time": "14:00", "value": 85 },
    //             { "time": "16:00", "value": 90 },
    //             { "time": "18:00", "value": 95 },
    //             { "time": "20:00", "value": 100 },
    //             { "time": "22:00", "value": 110 }
    //           ];


    //         // Create axes
    //         var categoryAxis = powerChart.xAxes.push(new am4charts.CategoryAxis());
    //         categoryAxis.dataFields.category = "time";
    //         categoryAxis.renderer.labels.template.fill = am4core.color("#000000"); // Set x-axis labels color
    //         categoryAxis.title.fill = am4core.color("#000000"); // Set x-axis title color
    //         categoryAxis.renderer.labels.template.rotation = 315; // Set rotation
    //         categoryAxis.renderer.labels.template.horizontalCenter = "right"; // Align to the right
    //         categoryAxis.renderer.labels.template.verticalCenter = "middle"; // Center vertically
    //         categoryAxis.renderer.minGridDistance = 1; // Ensure all categories are displayed
    //          categoryAxis.renderer.labels.template.dy = -15;
    //          categoryAxis.renderer.labels.template.fontSize = 10;
    //        categoryAxis.renderer.labels.template.dx = 10;

    //         var valueAxis = powerChart.yAxes.push(new am4charts.ValueAxis());
    //         valueAxis.renderer.labels.template.fill = am4core.color("#000000"); // Set y-axis labels color
    //         valueAxis.title.fill = am4core.color("#000000"); // Set y-axis title color

    //         // Create series
    //         var lineSeries = powerChart.series.push(new am4charts.LineSeries());
    //         lineSeries.dataFields.valueY = "value";
    //         lineSeries.dataFields.categoryX = "time";
    //         lineSeries.strokeWidth = 2;
    //         lineSeries.stroke = am4core.color("#FC4100");

    //         // Add circle bullet
    //         // var bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
    //         // bullet.circle.radius = 3; // Size of the bullet point
    //         // bullet.circle.strokeWidth = 0.5;
    //         // bullet.circle.fill = am4core.color("#fc030b"); // Bullet fill color
    //         // bullet.circle.stroke = am4core.color("#FC4100"); // Bullet stroke color

    //         // // Set the bullet's color to match the line's color
    //         // bullet.adapter.add("fill", function (fill, target) {
    //         //     return target.stroke;
    //         // });

    //         // Configure cursor
    //         var cursor = new am4charts.XYCursor();
    //         lineSeries.tooltipText = "Power: [bold]{valueY}[/]";
    //         lineSeries.tooltip.getFillFromObject = false; // Disable tooltip fill from series
    //         lineSeries.tooltip.background.fill = am4core.color("#FC4100"); // Set tooltip background color
    //         lineSeries.tooltip.label.fill = am4core.color("#ffffff"); // Set tooltip label color
    //         lineSeries.tooltip.pointerOrientation = "horizontal"; // Set tooltip orientation

    //         // Enable zooming and panning
    //         powerChart.scrollbarX = new am4core.Scrollbar();
    //         powerChart.scrollbarX.disabled = true; // Disable scrollbar (we don't need it)
    //         powerChart.zoomOutButton.disabled = false; // Allow the user to zoom out using a button

    //         // Enable zooming on both axes
    //         powerChart.xAxes.getIndex(0).renderer.minGridDistance = 50; // Optional: increase this to reduce the zoom level
    //         powerChart.cursor = new am4charts.XYCursor();
    //         powerChart.cursor.behavior = "zoomXY"; // Enable zoom on both axes

    //         powerChart.cursor = cursor; // Assign cursor to chart
    //         powerChart.logo.disabled = true;
    //     });
    // }
    async function lineChart4() {
        // let currentDates = new Date();
        // currentDates.setDate(currentDate.getDate());
        // console.log("current dates  " + currentDates);
        // // Format the date (optional)
        // let previousDates = currentDate.toISOString().split('T')[0];
        // console.log("previosis day " + previousDate);
        const response = await fetch(`${url}/obix/histories/Barclays_Sup/TotalPowerConsumption_User/~historyQuery?start=${formattedDate}T00:00:00.000+05:30&end=${formattedDate}T23:59:59.000+05:30`);
        console.log(response);
        const text = await response.text();

        // Parse the XML data
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(text, "text/xml");

        // // Get all <obj> elements that contain timestamp and value
        const objElements = xmlDoc.getElementsByTagName("obj");

        // Initialize arrays to store time and value
        let times = [];
        let values = [];

        // Iterate through the <obj> elements to extract the time and value
        for (let i = 1; i < objElements.length; i++) {
            const obj = objElements[i];

            const timestampElement = obj.getElementsByTagName("abstime")[0];
            const valueElement = obj.getElementsByTagName("real")[0];

            // Check if both timestamp and value exist and are not null
            if (timestampElement && valueElement) {
                const timestamp = timestampElement.getAttribute("val");
                const value = valueElement.getAttribute("val");

                if (timestamp && value) {
                    // Extract only the time (HH:mm) from the timestamp
                    const time = timestamp.split("T")[1]?.split(":").slice(0, 2).join(":");

                    // Ensure time is valid and add to arrays
                    if (time) {
                        times.push(time);
                        values.push(parseFloat(value));
                    }
                }
            }
        }
        const powerValues = [times, values];
    const flattenedData = powerValues.flat();
    if (checkDataAvailability(flattenedData, 'chartdiv2')) {
        return; // Exit if no data is available
    }
        // times = [
        //     "00:00", "02:00", "04:00", "06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00"
        // ];
        // values = [
        //     50, 55, 60, 70, 65, 75, 80, 85, 90, 95, 100, 110
        // ];
        am4core.ready(function () {
            // Themes begin
            am4core.useTheme(am4themes_animated);
            // Themes end

            // Create chart instance
            powerChart = am4core.create("chartdiv2", am4charts.XYChart);

            // Prepare data array based on extracted times and values
            powerChart.data = times.map((time, index) => ({
                "time": time, // Time in HH:mm format
                "value": values[index] // Corresponding value
            }));

            // Create axes
            var categoryAxis = powerChart.xAxes.push(new am4charts.CategoryAxis());
            categoryAxis.dataFields.category = "time";
            categoryAxis.renderer.labels.template.fill = am4core.color("#000000"); // Set x-axis labels color
            categoryAxis.title.fill = am4core.color("#000000"); // Set x-axis title color
            categoryAxis.renderer.labels.template.rotation = 315; // Set rotation
            categoryAxis.renderer.labels.template.horizontalCenter = "right"; // Align to the right
            categoryAxis.renderer.labels.template.verticalCenter = "middle"; // Center vertically
            categoryAxis.renderer.minGridDistance = 1; // Ensure all categories are displayed
             categoryAxis.renderer.labels.template.dy = -15;
             categoryAxis.renderer.labels.template.fontSize = 10;
           categoryAxis.renderer.labels.template.dx = 10;

            var valueAxis = powerChart.yAxes.push(new am4charts.ValueAxis());
            valueAxis.renderer.labels.template.fill = am4core.color("#000000"); // Set y-axis labels color
            valueAxis.title.fill = am4core.color("#000000"); // Set y-axis title color

            // Create series
            var lineSeries = powerChart.series.push(new am4charts.LineSeries());
            lineSeries.dataFields.valueY = "value";
            lineSeries.dataFields.categoryX = "time";
            lineSeries.strokeWidth = 2;
            lineSeries.stroke = am4core.color("#FC4100");

            // Add circle bullet
            // var bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
            // bullet.circle.radius = 3; // Size of the bullet point
            // bullet.circle.strokeWidth = 0.5;
            // bullet.circle.fill = am4core.color("#fc030b"); // Bullet fill color
            // bullet.circle.stroke = am4core.color("#FC4100"); // Bullet stroke color

            // // Set the bullet's color to match the line's color
            // bullet.adapter.add("fill", function (fill, target) {
            //     return target.stroke;
            // });

            // Configure cursor
            var cursor = new am4charts.XYCursor();
            lineSeries.tooltipText = "Power: [bold]{valueY}[/]";
            lineSeries.tooltip.getFillFromObject = false; // Disable tooltip fill from series
            lineSeries.tooltip.background.fill = am4core.color("#FC4100"); // Set tooltip background color
            lineSeries.tooltip.label.fill = am4core.color("#ffffff"); // Set tooltip label color
            lineSeries.tooltip.pointerOrientation = "horizontal"; // Set tooltip orientation

            // Enable zooming and panning
            powerChart.scrollbarX = new am4core.Scrollbar();
            powerChart.scrollbarX.disabled = true; // Disable scrollbar (we don't need it)
            powerChart.zoomOutButton.disabled = false; // Allow the user to zoom out using a button

            // Enable zooming on both axes
            powerChart.xAxes.getIndex(0).renderer.minGridDistance = 50; // Optional: increase this to reduce the zoom level
            powerChart.cursor = new am4charts.XYCursor();
            powerChart.cursor.behavior = "zoomXY"; // Enable zoom on both axes

            powerChart.cursor = cursor; // Assign cursor to chart
            powerChart.logo.disabled = true;
        });
    }
    disposeChartPower(lineChart4);

    async function barChart() {
        am4core.ready(async function () {

            var startDateValue = $("#startDatePower").val();
            var endDateValue = $("#endDatePower").val();
             const isValid = await validateDateRange(startDateValue, endDateValue);
    if (!isValid) {
        // If the date range is invalid, stop execution
        return;
    }
            let waterValues = [];
            // const url = "https://localhost";

            // Fetch data asynchronously for each scope

                const urlToFetch = `${url}/obix/histories/Barclays_Sup/Total$20Power$20Consumption$20in$20Kwh_Daily/~historyQuery?start=${startDateValue}T23:59:59.000+05:30&end=${endDateValue}T23:59:59.000+05:30`;
               console.log(urlToFetch);
                try {
                    const response = await fetch(urlToFetch);
                    console.log(response);

                const text = await response.text();

                // Parse the XML data
                    const parser = new DOMParser();
                    const xmlDoc = parser.parseFromString(text, "text/xml");
                    const objs = xmlDoc.getElementsByTagName("obj");

                    for (let i = 0; i < objs.length; i++) {
                        const obj = objs[i];
                        const abstime = obj.getElementsByTagName("abstime")[0];
                        const real = obj.getElementsByTagName("real")[0];

                        if (abstime && real) {
                            const dateText = abstime.getAttribute("val");
                            const valueText = real.getAttribute("val");

                            if (valueText && dateText) {
                                const value = parseFloat(valueText).toFixed(2);
                                const date = new Date(dateText);
                                const formattedDate = date.toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric"
                                });
                                const dateStr = date.toDateString();  // Use toDateString to compare without time

                                const existingEntry = waterValues.find(entry => entry.date.toDateString() === dateStr);

                                if (existingEntry) {
                                    // Update the existing entry's value
                                    existingEntry.value = parseFloat(value);
                                } else {
                                    // Add a new entry with date and value
                                    waterValues.push({
                                        date: date,
                                        value: parseFloat(value)
                                    });
                                }
                            }
                        }
                    }
                } catch (error) {
                    console.error(`Error fetching data for `);
                }
            const flattenedData = waterValues.flat();
    if (checkDataAvailability(flattenedData, 'chartdiv2')) {
        return; // Exit if no data is available
    }

            // Themes begin
            am4core.useTheme(am4themes_animated);
            // Themes end

            // Create chart instance
            powerChart = am4core.create("chartdiv2", am4charts.XYChart);
            powerChart.paddingRight = 20;

            // Add data
            powerChart.data = waterValues;
            console.log(powerChart.data);
            waterValues.forEach(item => {
                item.date = new Date(item.date).getTime();  // Convert to timestamp
                console.log("item date (timestamp): " + item.date);

                // Convert timestamp back to a readable date
                const formattedDate = new Date(item.date).toLocaleDateString("en-US", {
                    // year: "numeric",
                    month: "short",
                    day: "numeric"
                });
                item.date = formattedDate;
                console.log("Formatted item date: " + formattedDate);
            });


            // Create axes
            var categoryAxis = powerChart.xAxes.push(new am4charts.CategoryAxis());
            categoryAxis.dataFields.category = "date"; // Use 'date' instead of 'year'
            categoryAxis.renderer.minGridDistance = 80;
            // categoryAxis.renderer.grid.template.location = 2;
            // categoryAxis.startLocation = 1;
            // categoryAxis.endLocation = 1.5;
            categoryAxis.renderer.labels.template.horizontalCenter = "middle"; // Center labels
            categoryAxis.renderer.labels.template.verticalCenter = "middle"; // Center labels

            var valueAxis = powerChart.yAxes.push(new am4charts.ValueAxis());
            valueAxis.baseValue = 0;

            // Function to create series
            function createSeries(valueField, name, color) {
                var series = powerChart.series.push(new am4charts.ColumnSeries());
                series.dataFields.valueY = valueField;
                series.dataFields.categoryX = "date"; // Use 'date' instead of 'year'
                series.name = name;
                //series.strokeWidth = 2;
                series.tensionX = 0.77;
                //series.stroke = color;

                // Bullet to display tooltips
                var bullet = series.bullets.push(new am4charts.Bullet());
                bullet.tooltipText = "{valueY}";

                bullet.adapter.add("fill", function (fill, target) {
                    // If the value is negative, color the bullet red, else use the series color
                    if (target.dataItem.valueY < 0) {
                        return am4core.color("#FF0000"); // Red for negative values
                    }
                    return series.stroke; // Use the series stroke color (the color passed to createSeries)
                });

                return series;
            }
            powerChart.legend = new am4charts.Legend();
            powerChart.legend.position = "top";
            powerChart.legend.paddingBottom = 10;
            powerChart.legend.labels.template.maxWidth = 95;
            // Create three series with different data fields and colors
            createSeries("value", "Power", am4core.color("#3AA6B9"));

            // Add scrollbar
            // var scrollbarX = new am4charts.XYChartScrollbar();
            // scrollbarX.series.push(chart.series.values[0]);  // Add the first series to the scrollbar
            // chart.scrollbarX = scrollbarX;
            // scrollbarX.height = 30;
            powerChart.scrollbarX = new am4core.Scrollbar();
            powerChart.scrollbarX.marginBottom = 20;

            powerChart.cursor = new am4charts.XYCursor();
            powerChart.logo.disabled = true;

        });
    }

    async function lineChartMonthlyPower() {
        am4core.ready(async function () {
            // Get the current date
        const today = new Date();
        const currentMonth = today.getMonth();

        // Set startDate and endDate to the previous month
        const startDate = new Date(today.getFullYear(), currentMonth - 1, 1);
        const endDate = new Date(today.getFullYear(), currentMonth, 0);

        const startISO = `${startDate.getFullYear()}-${String(startDate.getMonth() + 1).padStart(2, '0')}-${String(startDate.getDate()).padStart(2, '0')}`;
        const endISO = `${endDate.getFullYear()}-${String(endDate.getMonth() + 1).padStart(2, '0')}-${String(endDate.getDate()).padStart(2, '0')}`;
            let waterValues = [];
            // const url = "https://localhost";

            // Fetch data asynchronously for each scope

                const urlToFetch = `${url}/obix/histories/Barclays_Sup/Total$20Power$20Consumption$20in$20Kwh_Yearly/~historyQuery?start=${startISO}T23:59:59.000+05:30&end=${endISO}T23:59:59.000+05:30`;
                console.log(urlToFetch);
                try {
                    const response = await fetch(urlToFetch);
                    console.log(response);

                const text = await response.text();

                // Parse the XML data
                    const parser = new DOMParser();
                    const xmlDoc = parser.parseFromString(text, "text/xml");
                    const objs = xmlDoc.getElementsByTagName("obj");

                    for (let i = 0; i < objs.length; i++) {
                        const obj = objs[i];
                        const abstime = obj.getElementsByTagName("abstime")[0];
                        const real = obj.getElementsByTagName("real")[0];

                        if (abstime && real) {
                            const dateText = abstime.getAttribute("val");
                            const valueText = real.getAttribute("val");

                            if (valueText && dateText) {
                                const value = parseFloat(valueText).toFixed(2);
                                const date = new Date(dateText);
                                const formattedDate = date.toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric"
                                });
                                const dateStr = date.toDateString();  // Use toDateString to compare without time

                                const existingEntry = waterValues.find(entry => entry.date.toDateString() === dateStr);

                                if (existingEntry) {
                                    // Update the existing entry's value
                                    existingEntry.value = parseFloat(value);
                                } else {
                                    // Add a new entry with date and value
                                    waterValues.push({
                                        date: date,
                                        value: parseFloat(value)
                                    });
                                }
                            }
                        }
                    }
                } catch (error) {
                    console.error(`Error fetching data for `);
                }

const flattenedData = waterValues.flat();
    if (checkDataAvailability(flattenedData, 'chartdiv')) {
        return; // Exit if no data is available
    }
            // Themes begin
            am4core.useTheme(am4themes_animated);
            // Themes end

            // Create chart instance
            powerChart = am4core.create("chartdiv2", am4charts.XYChart);
            powerChart.paddingRight = 20;

            // Add data
            powerChart.data = waterValues;
            console.log(powerChart.data);
            waterValues.forEach(item => {
                item.date = new Date(item.date).getTime();  // Convert to timestamp
                console.log("item date (timestamp): " + item.date);

                // Convert timestamp back to a readable date
                const formattedDate = new Date(item.date).toLocaleDateString("en-US", {
                    // year: "numeric",
                    month: "short",
                    day: "numeric"
                });
                item.date = formattedDate;
                console.log("Formatted item date: " + formattedDate);
            });


            // Create axes
            var categoryAxis = powerChart.xAxes.push(new am4charts.CategoryAxis());
            categoryAxis.dataFields.category = "date"; // Use 'date' instead of 'year'
            categoryAxis.renderer.minGridDistance = 80;
            // categoryAxis.renderer.grid.template.location = 2;
            // categoryAxis.startLocation = 1;
            // categoryAxis.endLocation = 1.5;
            categoryAxis.renderer.labels.template.horizontalCenter = "middle"; // Center labels
            categoryAxis.renderer.labels.template.verticalCenter = "middle"; // Center labels

            var valueAxis = powerChart.yAxes.push(new am4charts.ValueAxis());
            valueAxis.baseValue = 0;

            // Function to create series
            function createSeries(valueField, name, color) {
                var series = powerChart.series.push(new am4charts.LineSeries());
                series.dataFields.valueY = valueField;
                series.dataFields.categoryX = "date"; // Use 'date' instead of 'year'
                series.name = name;
                series.strokeWidth = 2;
                series.tensionX = 0.77;
                series.stroke = color;

                // Bullet to display tooltips
                var bullet = series.bullets.push(new am4charts.Bullet());
                bullet.tooltipText = "{valueY}";

                bullet.adapter.add("fill", function (fill, target) {
                    // If the value is negative, color the bullet red, else use the series color
                    if (target.dataItem.valueY < 0) {
                        return am4core.color("#FF0000"); // Red for negative values
                    }
                    return series.stroke; // Use the series stroke color (the color passed to createSeries)
                });

                return series;
            }
            powerChart.legend = new am4charts.Legend();
            powerChart.legend.position = "top";
            powerChart.legend.paddingBottom = 10;
            powerChart.legend.labels.template.maxWidth = 95;
            // Create three series with different data fields and colors
            createSeries("value", "Power", am4core.color("#3AA6B9"));

            // Add scrollbar
            // var scrollbarX = new am4charts.XYChartScrollbar();
            // scrollbarX.series.push(chart.series.values[0]);  // Add the first series to the scrollbar
            // chart.scrollbarX = scrollbarX;
            // scrollbarX.height = 30;
            powerChart.scrollbarX = new am4core.Scrollbar();
            powerChart.scrollbarX.marginBottom = 20;

            powerChart.cursor = new am4charts.XYCursor();
            powerChart.logo.disabled = true;

        });

    }

    async function lineChart3() {

        am4core.ready(async function () {
            // Themes begin
            am4core.useTheme(am4themes_animated);
            // Themes end

            // Create chart instance
            var powerChart = am4core.create("chartdiv2", am4charts.XYChart);
            powerChart.logo.disabled = true;

            // Fetch month names for last 12 months using the getLast12Months() function
            const last12Months = getLast12Months1(); // Assuming this returns an array with month data for the URLs
            console.log("Last 12 Months (from getLast12Months1):", last12Months);

            // Define the URLs for each month
            const urls = last12Months.map(month => {
                return `${url}/obix/histories/Barclays_Sup/Total$20Power$20Consumption$20in$20Kwh_Yearly/~historyQuery?start=${month.startDate}T23:59:59.000+05:30&limit=1`;
            });
             console.log("URLs to fetch data from:", urls);  // Log the generated URLs

            // Create an array to hold the chart data
            const chartData = [];

            // Loop through the URLs asynchronously using a for loop
            for (const [index, scopeUrl] of urls.entries()) {
                    // Fetch data using async/await
                    const response = await fetch(scopeUrl);
                    const text = await response.text(); // Get the response as text
                    const parser = new DOMParser();
                    const xml = parser.parseFromString(text, "application/xml");

                    // Debugging: Log the entire XML structure to check if it's as expected
                    console.log("Parsed XML Document:", xml);

                    // Extract all 'obj' elements from the XML
                    const records = xml.getElementsByTagName("obj");
                    console.log("XML Records:", records);  // Log the records to check if they're found

                    // Process each record and adjust the month
                    for (let i = 0; i < records.length; i++) {
                        const timestamp = records[i].getElementsByTagName("abstime")[0]?.getAttribute("val");
                        const value = records[i].getElementsByTagName("real")[0]?.getAttribute("val");

                        // Log to check the extracted timestamp and value
                        console.log("Timestamp:", timestamp, "Value:", value);

                        const date = new Date(timestamp);  // '2024-10-01T00:00:00.000+05:30'
                        let month = date.setMonth(date.getMonth() - 1);
                        console.log("month number get " + month);
                        console.log("Month no " + month);
                        const months = date.toLocaleString('default', { month: 'short' });
                        console.log("string no " + months);
                        const year = date.getFullYear();

                        let formattedMonth = `${months} ${year}`;
                        console.log("Formatted Month and Year:", formattedMonth);

                        // If there is no timestamp or value, skip to next record
                        if (!timestamp || !value) continue;

                        // Log the corresponding month name from getLast12Months()
                        //console.log("Month name from monthNames:", monthNames[month]);

                        // Push data to chartData
                        chartData.push({
                            month: formattedMonth,  // Use the correct month name from monthNames array
                            value: parseFloat(value).toFixed(2)   // Convert value to a float for proper numeric handling
                        });
                    }

                    // Debugging: Log chart data after processing
                    console.log("Chart Data:", chartData);
            }
            const flattenedData = chartData.flat();
    if (checkDataAvailability(flattenedData, 'chartdiv2')) {
        return; // Exit if no data is available
    }
            // Update chart data
            powerChart.data = chartData.reverse();
            // Create category axis (X-axis) for months
            var categoryAxis = powerChart.xAxes.push(new am4charts.CategoryAxis());
            categoryAxis.dataFields.category = "month"; // Bind X-axis to month
            categoryAxis.renderer.labels.template.fill = am4core.color("#000000"); // Set x-axis labels color
            categoryAxis.title.fill = am4core.color("#000000"); // Set x-axis title color
            categoryAxis.renderer.labels.template.rotation = 315; // Set rotation for better display
            categoryAxis.renderer.labels.template.horizontalCenter = "right"; // Align to the right
            categoryAxis.renderer.labels.template.verticalCenter = "middle"; // Center vertically
            categoryAxis.renderer.minGridDistance = 1; // Ensure all categories are displayed
            categoryAxis.renderer.labels.template.dy = -15;
            categoryAxis.renderer.labels.template.fontSize = 10;
            categoryAxis.renderer.labels.template.dx = 10;

            // Create value axis (Y-axis) for data values
            var valueAxis = powerChart.yAxes.push(new am4charts.ValueAxis());
            valueAxis.renderer.labels.template.fill = am4core.color("#000000"); // Set y-axis labels color
            valueAxis.title.fill = am4core.color("#000000"); // Set y-axis title color

            // Create series (line) to represent the data
            var lineSeries = powerChart.series.push(new am4charts.LineSeries());
            lineSeries.dataFields.valueY = "value"; // Bind Y-axis to data values
            lineSeries.dataFields.categoryX = "month"; // Bind X-axis to months
            lineSeries.strokeWidth = 2;
            lineSeries.stroke = am4core.color("#14C38E");

            // Add circle bullet
            var bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
            bullet.circle.radius = 3; // Size of the bullet point
            bullet.circle.strokeWidth = 0.5;
            bullet.circle.fill = am4core.color("#fc030b"); // Bullet fill color
            bullet.circle.stroke = am4core.color("#14C38E"); // Bullet stroke color

            // Set the bullet's color to match the line's color
            bullet.adapter.add("fill", function (fill, target) {
                return target.stroke;
            });

            // Configure cursor for interaction
            var cursor = new am4charts.XYCursor();
            lineSeries.tooltipText = "{categoryX}: [bold]{valueY}[/]"; // Tooltip text
            lineSeries.tooltip.getFillFromObject = false; // Disable tooltip fill from series
            lineSeries.tooltip.background.fill = am4core.color("#14C38E"); // Set tooltip background color
            lineSeries.tooltip.label.fill = am4core.color("#ffffff"); // Set tooltip label color
            lineSeries.tooltip.pointerOrientation = "horizontal"; // Set tooltip orientation

            powerChart.cursor = cursor;
        });



    }

    $("#startDatePower, #endDatePower").on("change", async function () {
        await disposeChartPower(barChart);
    });

    $("#sav_monthly_power").on("click", async function () {
        clearDateInputsPower();
        await disposeChartPower(lineChartMonthlyPower);
    });

    $("#sav_daily_power").on("click", async function () {
        clearDateInputsPower();
        await disposeChartPower(lineChart4);
    });

    $("#sav_yearly_power").on("click", async function () {
        clearDateInputsWater();
        await disposeChartPower(lineChart3);
    });

    /* power consumption end */

    /* occupancy efficiency start */
    var occupancyChart = null;
    async  function removeChart(newChartFunction) {
        if (occupancyChart) {
            if (occupancyChart instanceof ApexCharts) {
                occupancyChart.destroy(); // Dispose the existing chart
            } else {
                console.log("Pie chart destroyed");
                occupancyChart.dispose(); // Dispose the existing am4charts instance
            }
        }
        // Call the new chart function
       await newChartFunction();
    }

    // Function to create and render a donut chart
    async function donutChart() {
        // Fetch XML data from the server
        // const response = await fetch("https://localhost/obix/config/Barclays/Occpancy/Occupancy$20Sensor/");
        // const text = await response.text();

        // // Parse the XML data
        // const parser = new DOMParser();
        // const xmlDoc = parser.parseFromString(text, "text/xml");

        // // Get all <ref> elements (which include scope1, scope2, etc.)
        // const outElement = xmlDoc.querySelector('real[name="out"]');
        // const outValue = parseFloat(outElement.getAttribute('val'));
        //console.log("out Values" + outValue);
        const outValue =80;
        var options = {
            series: [outValue],
            chart: {
                height: "100%",
                width: "100%",
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        margin: 15,
                        size: '85%',
                    },
                    dataLabels: {
                        name: {
                            show: true,
                            color: '#000',
                        },
                        value: {
                            show: true,
                            color: '#000',
                            offsetY: 50,
                            fontSize: '50px',
                        },
                    },
                    track: {
                        background: '#494949',
                        strokeWidth: '10%',
                        margin: 0,
                        dropShadow: {
                            enabled: true,
                            top: -3,
                            left: 0,
                            blur: 4,
                            opacity: 0.35,
                        },
                    },
                    offsetY: 0,
                },
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    type: 'vertical',
                    gradientToColors: ['#e33b29', '#ff00e0', '#0000ff'],
                    stops: [0, 2, 70, 100],
                    colorStops: [
                        {
                            offset: 0,
                            color: '#e33b29',
                            opacity: 1 // Blue at the start
                        },
                        {
                            offset: 2,
                            color: '#e33b29',
                            opacity: 1 // Blue in the middle
                        },
                        {
                            offset: 70,
                            color: '#ff00e0',
                            opacity: 1 // Pink at the end
                        },
                        {
                            offset: 100,
                            color: '#0000ff',
                            opacity: 1 // Pink at the end
                        }
                    ]
                },
            },
            stroke: {
                lineCap: 'round',
            },
            labels: ["Occupancy Efficiency"],
        };

        occupancyChart = new ApexCharts(document.querySelector("#chartdiv3"), options);
        occupancyChart.render();
        //clearDateInputsOccupancy();

    }






    removeChart(donutChart);
    // async function occupacyBarChart1() {

    //     const scopes = ['Floor1', 'Floor2'];
    //     let upsData = [];

    //     // Loop through each scope to fetch and process data
    //     for (let scope of scopes) {
    //         try {
    //             const response = await fetch(`https://localhost/obix/config/Barclays/Occpancy/${scope}/occupancy`);
    //             const text = await response.text();

    //             // Parse the XML response
    //             const parser = new DOMParser();
    //             const xmlDoc = parser.parseFromString(text, "application/xml");

    //             // Extract values for ups, hvac, and rtltg
    //             const ups = parseFloat(xmlDoc.querySelector('ref[name="occupancy"]').getAttribute('display').split(' ')[0]);
    //             upsData.push(ups);
    //         } catch (error) {
    //             console.error(`Error fetching data for ${scope}:`, error);
    //         }
    //     }
    //     var options = {
    //         series: [{
    //             name: 'Occupancy Efficiency',
    //             data: upsData // Data for HVAC (Floor 1, Floor 2)
    //         },
    //         {

    //         }],
    //         chart: {
    //             height: "100%",
    //             type: 'bar',
    //             toolbar: {
    //                 show: false // Disable the toolbar
    //             },
    //             offsetY: 30
    //         },
    //         plotOptions: {
    //             bar: {
    //                 borderRadius: 10,
    //                 dataLabels: {
    //                     position: 'top', // Show data labels on top
    //                 },
    //                 columnWidth: '40%', // Set column width for a simple bar chart
    //                 endingShape: 'rounded' // Rounded edges for a smooth look
    //             }
    //         },
    //         dataLabels: {
    //             enabled: true,
    //             formatter: function (val) {
    //                 return val; // Show percentage symbol next to data
    //             },
    //             offsetY: -30,
    //             style: {
    //                 fontSize: '12px',
    //                 colors: ["#E11D74"]
    //             }
    //         },
    //         xaxis: {
    //             categories: ["Floor 1", "Floor 2"], // X-axis now has Floor 1 and Floor 2
    //             position: 'bottom',
    //             axisBorder: {
    //                 show: false // Hide bottom axis border
    //             },
    //             axisTicks: {
    //                 show: false // Hide ticks for a cleaner look
    //             },
    //             crosshairs: {
    //                 fill: {
    //                     type: 'gradient',
    //                     gradient: {
    //                         colorFrom: '#E11D74',
    //                         colorTo: '#E11D74',
    //                         stops: [0, 100],
    //                         opacityFrom: 0.4,
    //                         opacityTo: 0.5,
    //                     }
    //                 }
    //             },
    //             tooltip: {
    //                 enabled: true, // Show tooltips on x-axis hover
    //             }
    //         },
    //         yaxis: {
    //             axisBorder: {
    //                 show: false // Hide y-axis border
    //             },
    //             axisTicks: {
    //                 show: false, // Hide ticks on y-axis
    //             },
    //             labels: {
    //                 show: false, // Hide y-axis labels for a cleaner look
    //             }
    //         },
    //         legend: {
    //             show: true,
    //             position: 'top', // Place the legend on top
    //             horizontalAlign: 'center', // Center align the legend
    //             offsetY: 20
    //         },
    //         colors: ['#E11D74'], // Custom color for HVAC
    //         grid: {
    //             padding: {
    //                 left: 10,
    //                 right: 10
    //             }
    //         },
    //     };
    //     // Select the div where the chart should render
    //     occupancyChart = new ApexCharts(document.querySelector("#chartdiv9"), options);
    //     await occupancyChart.render();
    // }



    // $('#floor_sav_btn').on("click", async function () {
    //     $(".sav_g_chart").hide();
    //     $(".sav_b_chart").show();
    //     $("#build_sav_btn").show();
    //     $(".occupacyBtn").hide();
    //     //$(this).hide();
    //     occupacyBarChart1();
    // });
    // $('#build_sav_btn').on("click", async function () {
    //     $(".sav_g_chart").show();
    //     $(".sav_b_chart").hide();
    //     $('#floor_sav_btn').show();
    //     $(".occupacyBtn").show();
    //     //$(this).hide();
    // });
    async function occupacyLine() {
        am4core.ready(async function () {

            var startDateValue = $("#startDateOccupancy").val();
            var endDateValue = $("#endDateOccupancy").val();
             const isValid = await validateDateRange(startDateValue, endDateValue);
    if (!isValid) {
        // If the date range is invalid, stop execution
        return;
    }
            let waterValues = [];
            // const url = "https://localhost";

            // Fetch data asynchronously for each scope

                const urlToFetch = `${url}/obix/histories/SqlServerDatabase/domestic/~historyQuery?start=${startDateValue}T23:59:59.000+05:30&end=${endDateValue}T23:59:59.000+05:30`;
                console.log(urlToFetch);
                try {
                    const response = await fetch(urlToFetch);
                    console.log(response);

                const text = await response.text();

                // Parse the XML data
                    const parser = new DOMParser();
                    const xmlDoc = parser.parseFromString(text, "text/xml");
                    const objs = xmlDoc.getElementsByTagName("obj");

                    for (let i = 0; i < objs.length; i++) {
                        const obj = objs[i];
                        const abstime = obj.getElementsByTagName("abstime")[0];
                        const real = obj.getElementsByTagName("real")[0];

                        if (abstime && real) {
                            const dateText = abstime.getAttribute("val");
                            const valueText = real.getAttribute("val");

                            if (valueText && dateText) {
                                const value = parseFloat(valueText).toFixed(2);
                                const date = new Date(dateText);
                                const formattedDate = date.toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric"
                                });
                                const dateStr = date.toDateString();  // Use toDateString to compare without time

                                const existingEntry = waterValues.find(entry => entry.date.toDateString() === dateStr);

                                if (existingEntry) {
                                    // Update the existing entry's value
                                    existingEntry.value = parseFloat(value);
                                } else {
                                    // Add a new entry with date and value
                                    waterValues.push({
                                        date: date,
                                        value: parseFloat(value)
                                    });
                                }
                            }
                        }
                    }
                } catch (error) {
                    console.error(`Error fetching data for `);
                }

const flattenedData = waterValues.flat();
    if (checkDataAvailability(flattenedData, 'chartdiv')) {
        return; // Exit if no data is available
    }
            // Themes begin
            am4core.useTheme(am4themes_animated);
            // Themes end

            // Create chart instance
            occupancyChart = am4core.create("chartdiv3", am4charts.XYChart);
            occupancyChart.paddingRight = 20;

            // Add data
            occupancyChart.data = waterValues;
            console.log(occupancyChart.data);
            waterValues.forEach(item => {
                item.date = new Date(item.date).getTime();  // Convert to timestamp
                console.log("item date (timestamp): " + item.date);

                // Convert timestamp back to a readable date
                const formattedDate = new Date(item.date).toLocaleDateString("en-US", {
                    // year: "numeric",
                    month: "short",
                    day: "numeric"
                });
                item.date = formattedDate;
                console.log("Formatted item date: " + formattedDate);
            });


            // Create axes
            var categoryAxis = occupancyChart.xAxes.push(new am4charts.CategoryAxis());
            categoryAxis.dataFields.category = "date"; // Use 'date' instead of 'year'
            categoryAxis.renderer.minGridDistance = 80;
            // categoryAxis.renderer.grid.template.location = 2;
            // categoryAxis.startLocation = 1;
            // categoryAxis.endLocation = 1.5;
            categoryAxis.renderer.labels.template.horizontalCenter = "middle"; // Center labels
            categoryAxis.renderer.labels.template.verticalCenter = "middle"; // Center labels

            var valueAxis = occupancyChart.yAxes.push(new am4charts.ValueAxis());
            valueAxis.baseValue = 0;

            // Function to create series
            function createSeries(valueField, name, color) {
                var series = occupancyChart.series.push(new am4charts.LineSeries());
                series.dataFields.valueY = valueField;
                series.dataFields.categoryX = "date"; // Use 'date' instead of 'year'
                series.name = name;
                //series.strokeWidth = 2;
                series.tensionX = 0.77;
                series.stroke = color;

                // Bullet to display tooltips
                var bullet = series.bullets.push(new am4charts.Bullet());
                bullet.tooltipText = "{valueY}";

                bullet.adapter.add("fill", function (fill, target) {
                    // If the value is negative, color the bullet red, else use the series color
                    if (target.dataItem.valueY < 0) {
                        return am4core.color("#e11d74"); // Red for negative values
                    }
                    return series.stroke; // Use the series stroke color (the color passed to createSeries)
                });

                return series;
            }
            occupancyChart.legend = new am4charts.Legend();
            occupancyChart.legend.position = "top";
            occupancyChart.legend.paddingBottom = 10;
            occupancyChart.legend.labels.template.maxWidth = 95;
            // Create three series with different data fields and colors
            createSeries("value", "Occupancy Efficiency", "#e11d74");

            // Add scrollbar
            // var scrollbarX = new am4charts.XYChartScrollbar();
            // scrollbarX.series.push(chart.series.values[0]);  // Add the first series to the scrollbar
            // chart.scrollbarX = scrollbarX;
            // scrollbarX.height = 30;
            occupancyChart.scrollbarX = new am4core.Scrollbar();
            occupancyChart.scrollbarX.marginBottom = 20;

            occupancyChart.cursor = new am4charts.XYCursor();
            occupancyChart.logo.disabled = true;

        });
    }

    async function occupacyBar() {
        try {
            // Get the last 12 months
            const months = getLast12Months(); // Array of month names for the x-axis (e.g., ["Jan 2023", "Feb 2023", ...])
            const last12Months = getLast12Months1(); // Array of objects with `startDate` for the URLs

            console.log("Last 12 Months (from getLast12Months1):", last12Months);

            const chartData = [];

            // Loop through each month to fetch data
            for (const month of last12Months) {
                const url = `https://localhost/obix/histories/SqlServerDatabase/domesticYearly/~historyQuery?start=${month.startDate}T23:59:59.000+05:30&limit=1`;

                try {
                    const response = await fetch(url);
                    if (!response.ok) {
                        console.error(`Error fetching data for ${month.startDate}: HTTP ${response.status}`);
                        chartData.push(0); // Add 0 for missing data
                        continue;
                    }

                    const text = await response.text();
                    const parser = new DOMParser();
                    const xml = parser.parseFromString(text, "application/xml");

                    // Parse the data
                    const list = xml.getElementsByTagName("list")[0];
                    const abstime = list?.getElementsByTagName("abstime")[0]?.getAttribute("val");
                    const realValue = list?.getElementsByTagName("real")[0]?.getAttribute("val");

                    if (abstime && realValue) {
                        const abstimeDate = new Date(abstime);
                        const formattedAbstime = `${abstimeDate.getFullYear()}-${String(abstimeDate.getMonth() + 1).padStart(2, '0')}-${String(abstimeDate.getDate()).padStart(2, '0')}`;

                        if (formattedAbstime === month.startDate) {
                            chartData.push(parseFloat(realValue).toFixed(2));
                        } else {
                            chartData.push(0); // Add 0 if no matching date
                        }
                    } else {
                        chartData.push(0); // Add 0 for missing values
                    }
                } catch (error) {
                    console.error(`Error processing data for ${month.startDate}:`, error);
                    chartData.push(0); // Add 0 in case of errors
                }
            }

            const flattenedData = chartData.flat();
    if (checkDataAvailability(flattenedData, 'chartdiv')) {
        return; // Exit if no data is available
    }
            // Configure the bar chart options
            const options = {
                series: [
                    {
                        name: 'Occupancy Efficiency',
                        data: chartData, // Data for the chart
                    }
                ],
                chart: {
                    type: 'bar',
                    height: '100%',
                    toolbar: {
                        show: false,
                    },
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '55%',
                        endingShape: 'rounded',
                    }
                },
                colors: ["#E11D74"],
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    show: true,
                    width: 0,
                    colors: ['transparent'],
                },
                xaxis: {
                    categories: months, // Use month names as x-axis categories
                },
                grid: {
                    show: true, // Disable grid lines
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return `${val}`; // Customize tooltip value
                        },
                    },
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'center',
                    labels: {
                        colors: ['#000000'], // Customize legend label color
                    }
                }
            };

            console.log("Creating bar chart...");
            const occupancyChart = new ApexCharts(document.querySelector("#chartdiv3"), options);
            occupancyChart.render();
        } catch (error) {
            console.error("Error creating bar chart:", error);
        }
    }

    async function lineChartMonthlyOccupancy() {
        am4core.ready(async function () {
        const today = new Date();
        const currentMonth = today.getMonth();

        // Set startDate and endDate to the previous month
        const startDate = new Date(today.getFullYear(), currentMonth - 1, 1);
        const endDate = new Date(today.getFullYear(), currentMonth, 0);

        const startISO = `${startDate.getFullYear()}-${String(startDate.getMonth() + 1).padStart(2, '0')}-${String(startDate.getDate()).padStart(2, '0')}`;
        const endISO = `${endDate.getFullYear()}-${String(endDate.getMonth() + 1).padStart(2, '0')}-${String(endDate.getDate()).padStart(2, '0')}`;
            let waterValues = [];
            // const url = "https://localhost";

            // Fetch data asynchronously for each scope

                const urlToFetch = `${url}/obix/histories/SqlServerDatabase/domestic/~historyQuery?start=${startISO}T23:59:59.000+05:30&end=${endISO}T23:59:59.000+05:30`;
                console.log(urlToFetch);
                try {
                    const response = await fetch(urlToFetch);
                    console.log(response);

                const text = await response.text();

                // Parse the XML data
                    const parser = new DOMParser();
                    const xmlDoc = parser.parseFromString(text, "text/xml");
                    const objs = xmlDoc.getElementsByTagName("obj");

                    for (let i = 0; i < objs.length; i++) {
                        const obj = objs[i];
                        const abstime = obj.getElementsByTagName("abstime")[0];
                        const real = obj.getElementsByTagName("real")[0];

                        if (abstime && real) {
                            const dateText = abstime.getAttribute("val");
                            const valueText = real.getAttribute("val");

                            if (valueText && dateText) {
                                const value = parseFloat(valueText).toFixed(2);
                                const date = new Date(dateText);
                                const formattedDate = date.toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric"
                                });
                                const dateStr = date.toDateString();  // Use toDateString to compare without time

                                const existingEntry = waterValues.find(entry => entry.date.toDateString() === dateStr);

                                if (existingEntry) {
                                    // Update the existing entry's value
                                    existingEntry.value = parseFloat(value);
                                } else {
                                    // Add a new entry with date and value
                                    waterValues.push({
                                        date: date,
                                        value: parseFloat(value)
                                    });
                                }
                            }
                        }
                    }
                } catch (error) {
                    console.error(`Error fetching data for `);
                }

                const flattenedData = waterValues.flat();
    if (checkDataAvailability(flattenedData, 'chartdiv')) {
        return; // Exit if no data is available
    }
            // Themes begin
            am4core.useTheme(am4themes_animated);
            // Themes end

            // Create chart instance
            powerChart = am4core.create("chartdiv3", am4charts.XYChart);
            powerChart.paddingRight = 20;

            // Add data
            powerChart.data = waterValues;
            console.log(powerChart.data);
            waterValues.forEach(item => {
                item.date = new Date(item.date).getTime();  // Convert to timestamp
                console.log("item date (timestamp): " + item.date);

                // Convert timestamp back to a readable date
                const formattedDate = new Date(item.date).toLocaleDateString("en-US", {
                    // year: "numeric",
                    month: "short",
                    day: "numeric"
                });
                item.date = formattedDate;
                console.log("Formatted item date: " + formattedDate);
            });


            // Create axes
            var categoryAxis = powerChart.xAxes.push(new am4charts.CategoryAxis());
            categoryAxis.dataFields.category = "date"; // Use 'date' instead of 'year'
            categoryAxis.renderer.minGridDistance = 80;
            // categoryAxis.renderer.grid.template.location = 2;
            // categoryAxis.startLocation = 1;
            // categoryAxis.endLocation = 1.5;
            categoryAxis.renderer.labels.template.horizontalCenter = "middle"; // Center labels
            categoryAxis.renderer.labels.template.verticalCenter = "middle"; // Center labels

            var valueAxis = powerChart.yAxes.push(new am4charts.ValueAxis());
            valueAxis.baseValue = 0;

            // Function to create series
            function createSeries(valueField, name, color) {
                var series = powerChart.series.push(new am4charts.LineSeries());
                series.dataFields.valueY = valueField;
                series.dataFields.categoryX = "date"; // Use 'date' instead of 'year'
                series.name = name;
                series.strokeWidth = 2;
                series.tensionX = 0.77;
                series.stroke = color;

                // Bullet to display tooltips
                var bullet = series.bullets.push(new am4charts.Bullet());
                bullet.tooltipText = "{valueY}";

                bullet.adapter.add("fill", function (fill, target) {
                    // If the value is negative, color the bullet red, else use the series color
                    if (target.dataItem.valueY < 0) {
                        return am4core.color("#e11d74"); // Red for negative values
                    }
                    return series.stroke; // Use the series stroke color (the color passed to createSeries)
                });

                return series;
            }
            powerChart.legend = new am4charts.Legend();
            powerChart.legend.position = "top";
            powerChart.legend.paddingBottom = 10;
            powerChart.legend.labels.template.maxWidth = 95;
            // Create three series with different data fields and colors
            createSeries("value", "Occupancy Efficiency", am4core.color("#e11d74"));

            // Add scrollbar
            // var scrollbarX = new am4charts.XYChartScrollbar();
            // scrollbarX.series.push(chart.series.values[0]);  // Add the first series to the scrollbar
            // chart.scrollbarX = scrollbarX;
            // scrollbarX.height = 30;
            powerChart.scrollbarX = new am4core.Scrollbar();
            powerChart.scrollbarX.marginBottom = 20;

            powerChart.cursor = new am4charts.XYCursor();
            powerChart.logo.disabled = true;

        });

    }
    $("#startDateOccupancy, #endDateOccupancy").on("change", async function () {
        await removeChart(occupacyLine);
    });
    $("#sav_daily_occupancy").on("click", async function () {
        clearDateInputsOccupancy();
        await removeChart(donutChart);
    });
    $("#sav_monthly_occupancy").on("click", async function () {
        clearDateInputsOccupancy();
        await removeChart(lineChartMonthlyOccupancy);
    });
    $("#sav_yearly_occupancy").on("click", async function () {
        clearDateInputsOccupancy();
        await removeChart(occupacyBar);
    });
    /* occupancy efficiency end */

    /* Indoor Air Quality start */
var aqiCharts;  // Single chart instance

// Function to replace the chart
async function replaceIndoorChart(newChartFunction) {
    // Destroy the existing chart if it exists
    if (aqiCharts) {
      if(aqiCharts instanceof ApexCharts){
        aqiCharts.destroy();
      }
      else {
        aqiCharts.dispose();
      }
    } else {
        console.log("No chart to destroy");
    }

    // Wait for the new chart to be created
    await newChartFunction();
}

// URL for fetching data
const iiaqurl = `${url}/obix/config/Drivers/Barclays/IAQ/IAQ/`;

// Function to create the pie chart
async function createPieChart() {
    const response = await fetch(iiaqurl);
    const text = await response.text();

    // Parse the XML data
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(text, "text/xml");

    // Get the <real> element value
    const outElement = xmlDoc.querySelector('real[name="out"]');
    const outValue = parseFloat(outElement.getAttribute('val')).toFixed(2);
    const maxAQI = 500;
    const normalizedValue = Math.min(outValue / maxAQI * 100, 100).toFixed(2);
    const formattedValue = parseFloat(normalizedValue);
    //console.log("normalizedValue" + normalizedValue);
     // const chartColor = outValue > 100 ? "#FF6600" : "#5CB338";
    // Pie chart options
    // const options = {
    //     series: [normalizedValue],
    //     chart: {
    //         height: "100%",
    //         type: 'radialBar',
    //         // events: {
    //         //     rendered: function (chartContext, config) {
    //         //         // Locate the text element after render
    //         //         const totalValue = outValue;
    //         //         const totalTextElement = document.querySelector("#chartdiv4 .apexcharts-text.apexcharts-datalabel-label");

    //         //         // Apply color based on condition
    //         //         if (totalTextElement) {
    //         //             totalTextElement.style.fill = totalValue > 50 ? 'green' : 'red';
    //         //         }
    //         //     }
    //         // },
    //         offsetY: -20
    //     },
    //     plotOptions: {
    //         radialBar: {
    //             offsetY: 20,
    //             startAngle: 0,
    //             endAngle: 360,
    //             hollow: {
    //                 margin: 5,
    //                 size: '65%',
    //                 background: 'transparent',
    //             },
    //             dataLabels: {
    //                 name: { show: true },
    //                 value: { show: true },
    //                 total: {
    //                     show: true,
    //                     label: 'AQI',
    //                     fontSize: '30px',
    //                     fontWeight: 'bold',
    //                     color: chartColor,
    //                     formatter: function (w) {
    //                         const totalValue = outValue;
    //                         // Add "Good" or "Bad" to label with a unique identifier
    //                         return totalValue + (totalValue > 50 ? " Good" : " Bad");
    //                     }
    //                 }
    //             },
    //             track: {
    //                 background: '#494949' //'#2F5AD0'
    //             }
    //         }
    //     },
    //     colors: [chartColor],
    //     labels: ['AQI'],
    //     legend: {
    //         show: true,
    //         floating: true,
    //         fontSize: '16px',
    //         position: 'top',
    //         horizontalAlign: 'center',
    //         offsetY: 10,
    //         labels: { color: '#000000' },
    //         markers: { size: 0 },
    //         formatter: function (seriesName, opts) {
    //             return seriesName;
    //         },
    //         itemMargin: { vertical: 3 }
    //     },
    //     responsive: [{
    //         breakpoint: 480,
    //         options: {
    //             legend: { show: false }
    //         }
    //     }]
    // };

    // // Create a new chart instance with the updated options
    // aqiCharts = new ApexCharts(document.querySelector("#chartdiv4"), options);
    // aqiCharts.render();
    if (checkDataAvailability([outValue], 'chartdiv4')) {
        return; // Exit if no data is available
    }
     var options = {
            series: [formattedValue],
            chart: {
                height: "100%",
                type: 'radialBar',
                events: {
                    rendered: function (chartContext, config) {
                        // Locate the text element after render
                        const totalValue = config.globals.seriesTotals.reduce((a, b) => a + b, 0);
                        const totalTextElement = document.querySelector("#chartdiv4 .apexcharts-text.apexcharts-datalabel-label");

                        // Apply color based on condition
                        if (totalTextElement) {
                            totalTextElement.style.fill = totalValue > 50 ? 'green' : 'red';
                        }
                    }
                },
                offsetY: -20
            },
            plotOptions: {
                radialBar: {
                    offsetY: 20,
                    startAngle: 0,
                    endAngle: 360,
                    hollow: {
                        margin: 5,
                        size: '65%',
                        background: 'transparent',
                    },
                    dataLabels: {
                        name: { show: true },
                        value: { show: true },
                        total: {
                            show: true,
                            label: 'AQI',
                            fontSize: '30px',
                            fontWeight: 'bold',
                            color: '#000000',
                            formatter: function (w) {
                                const totalValue = w.globals.seriesTotals.reduce((a, b) => a + b, 0);
                                // Add "Good" or "Bad" to label with a unique identifier
                                return totalValue + (totalValue > 50 ? " Good" : " Bad");
                            }
                        }
                    },
                    track: {
                        background: '#2F5AD0'
                    }
                }
            },
            colors: ["#FF6600"],
            labels: ['AQI'],
            legend: {
                show: true,
                floating: true,
                fontSize: '16px',
                position: 'top',
                horizontalAlign: 'center',
                offsetY: 20,
                labels: { useSeriesColors: true },
                markers: { size: 0 },
                formatter: function (seriesName, opts) {
                    return seriesName;
                },
                itemMargin: { vertical: 3 }
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    legend: { show: false }
                }
            }]
        };

        // Create and render the chart
        aqiCharts = new ApexCharts(document.querySelector("#chartdiv4"), options);
        aqiCharts.render();
}





// Update the chart every second
var chartInterval; // Interval ID

// Start the interval to periodically update the chart
function startInterval() {
    stopInterval();
    chartInterval = setInterval(() => replaceIndoorChart(createPieChart), 60000);
    console.log("Chart update interval started");
}

// Stop the interval
function stopInterval() {
    if (chartInterval) {
        clearInterval(chartInterval);
        chartInterval = null;
        console.log("Chart update interval stopped");
    }
}
(async function initialize() {
    await createPieChart();
    await epiDonutChart();// Create the chart initially
    startInterval();
    startIntervalEpi()// Start the interval to update the chart
})();


    var aqiCharts1;
    var aqiCharts2;
    async function aqiDonut1() {
        // if (aqiCharts1 instanceof ApexCharts) {
        //     console.log("Destroying existing aqiCharts1");
        //     aqiCharts1.destroy(); // Dispose the existing chart if it exists
        // }
        // if (aqiCharts2 instanceof ApexCharts) {
        //     console.log("Destroying existing aqiCharts2");
        //     aqiCharts2.destroy(); // Dispose the existing chart if it exists
        // }
        if (aqiCharts1 && aqiCharts2) {
            if (aqiCharts1 instanceof ApexCharts && aqiCharts2 instanceof ApexCharts) {
                aqiCharts1.destroy();
                aqiCharts2.destroy();
            } else {
                aqiCharts.dispose(); // Dispose the existing am4charts instance
            }
        }
        // https://localhost/obix/config/Drivers/Barclays/IAQ/Floor_32/Floor_32_Avg/
        // https://localhost/obix/config/Drivers/Barclays/IAQ/Floor_33/Floor_33_Avg/
        const scopes = ['Floor_32/Floor_32_Avg', 'Floor_33/Floor_33_Avg'];
        let upsData = [];

        // Loop through each scope to fetch and process data
        for (let scope of scopes) {
            try {
                const response = await fetch(` ${url}/obix/config/Drivers/Barclays/IAQ/${scope}`);
                console.log("aqi response " + response);
                const text = await response.text();

                // Parse the XML response
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(text, "application/xml");

                // Extract values for ups, hvac, and rtltg
                const ups = parseFloat(xmlDoc.querySelector('real[name="out"]').getAttribute('display').split(' ')[0]);
                upsData.push(ups);
            } catch (error) {
                console.error(`Error fetching data for ${scope}:`, error);
            }
        }
        let containerIds = ['completionRateChart', 'bounceRateChart'];
        const flattenedData = upsData.flat();

    // Use the checkDataAvailability function to check if the data is available for each containerId
    for (let i = 0; i < containerIds.length; i++) {
        const containerId = containerIds[i];
        if (checkDataAvailability(upsData, containerId)) {
            return; // Exit if no data is available for the current container
        }
    }
        var options = {
            series: [upsData[0]],
            chart: {
                height: 225, // Adjusted height
                type: 'radialBar',
                offsetY: 40
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        margin: 5,
                        size: '70%',
                    },
                    dataLabels: {
                        name: {
                            show: false,
                            color: '#000',
                        },
                        value: {
                            show: true,
                            color: '#000',
                            offsetY: 10,
                            fontSize: '20px',
                            formatter: function (val) {
                                return parseInt(val); // Remove the % symbol by returning only the value
                            }
                        },
                    },
                    track: {
                        background: '#494949',
                        strokeWidth: '100%',
                        margin: 0
                    },
                    offsetY: 30,
                },
            },
            fill: {
                type: 'solid', // Changed to solid
                colors: ['#FCE22A'], // Solid red color
            },
            colors: ["#FCE22A"],
            labels: ['Floor 32'],
            legend: {
                show: true,
                floating: true,
                fontSize: '16px',
                position: 'top',
                horizontalAlign: 'center',
                offsetY: 10,
                labels: { useSeriesColors: true },
                markers: { size: 0 },
                formatter: function (seriesName, opts) {
                    return seriesName;
                },
                itemMargin: { vertical: 3 }
            },
        };
        aqiCharts1 = new ApexCharts(document.querySelector("#completionRateChart"), options);
        await aqiCharts1.render();

        var options1 = {
            series: [upsData[1]],
            chart: {
                height: 225, // Adjusted height
                type: 'radialBar',
                offsetY: 40
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        margin: 5,
                        size: '70%',
                    },
                    dataLabels: {
                        name: {
                            show: false,
                            color: '#000',
                        },
                        value: {
                            show: true,
                            color: '#000',
                            offsetY: 10,
                            fontSize: '20px',
                            formatter: function (val) {
                                return parseInt(val); // Remove the % symbol by returning only the value
                            }
                        },
                    },
                    track: {
                        background: '#494949',
                        strokeWidth: '100%',
                        margin: 0
                    },
                    offsetY: 30,
                },
            },
            fill: {
                type: 'solid', // Changed to solid
                colors: ['#77E4C8'], // Solid red color
            },
            colors: ["#77E4C8"],
            labels: ['Floor 33'],
            legend: {
                show: true,
                floating: true,
                fontSize: '16px',
                position: 'top',
                horizontalAlign: 'center',
                offsetY: 10,
                labels: { useSeriesColors: true },
                markers: { size: 0 },
                formatter: function (seriesName, opts) {
                    return seriesName;
                },
                itemMargin: { vertical: 3 }
            },
        };
        aqiCharts2 = new ApexCharts(document.querySelector("#bounceRateChart"), options1);
        await aqiCharts2.render();
    }

// $('#aqiFloor1').on("click", async function () {
//     console.log("aqiFloor1 clicked");

//     // Show .aqiSeparate and hide .aqiAvg
//     $(".aqiSeparate").show();
//     console.log($(".aqiSeparate").html());
//     $(".aqiAvg").hide();
//     $("#aqiFloor2").show();
//     $(".aqiBtn").hide();

//     // Log visibility statuses immediately after changes
//     console.log("Is .aqiSeparate visible?", $(".aqiSeparate").is(":visible"));
//     console.log("Is .aqiAvg visible?", $(".aqiAvg").is(":visible"));
//     console.log("Is #aqiFloor2 visible?", $("#aqiFloor2").is(":visible"));

//     // Hide the clicked button
//     $(this).hide();

//     // Render the chart
//     await aqiDonut1();  // Assuming this function will render the charts you need in .aqiSeparate
// });

// $('#aqiFloor2').on("click", async function () {
//     console.log("aqiFloor2 clicked");

//     // Hide .aqiSeparate and show .aqiAvg
//     $(".aqiSeparate").empty();
//     $(".aqiSeparate").hide();
//     console.log($(".aqiSeparate").html());// Explicitly hide .aqiSeparate
//     console.log("Is .aqiSeparate visible after hide?", $(".aqiSeparate").is(":visible"));


//     $(".aqiAvg").show();
//     console.log($(".aqiAvg").html());
//     $("#aqiFloor1").show();
//     $(".aqiBtn").show();

//     // Log visibility statuses after the changes
//     console.log("Is .aqiSeparate visible?", $(".aqiSeparate").is(":visible"));
//     console.log("Is .aqiAvg visible?", $(".aqiAvg").is(":visible"));
//     console.log("Is #aqiFloor1 visible?", $("#aqiFloor1").is(":visible"));

//     // Hide the clicked button
//     $(this).hide();
//     $(".aqiSeparate").hide();  // Assuming this function renders a different chart for .aqiAvg
//     $(".chart-area").hide(); // Hide the second chart container

// });
$('#aqiFloor1').on("click", async function () {
    console.log("aqiFloor1 clicked");
    $(".aqiSeparate").show();
    $(".aqiAvg").hide();
    $("#aqiFloor2").show();
    $(".aqiBtn").hide();
    //$(this).hide();
    //stopInterval();
    //chartInterval = setInterval(() => aqiDonut1, 1000);
    await aqiDonut1();
    setInterval(aqiDonut1, 5000);
    // await aqiDonut2();
});
$('#aqiFloor2').on("click", async function () {
    console.log("aqiFloor2 clicked");
    $(".aqiSeparate").hide();
    $(".aqiAvg").show();
    $("#aqiFloor1").show();
    $(".aqiBtn").show();
    //$(this).hide();
});


    async function createBarChart() {
        // am4core.ready(async function () {

        //     const startDateValue = document.getElementById("startDateIAQ").value;
        //     const endDateValue = document.getElementById("endDateIAQ").value;
        //     let waterValues = [];
        //     // const url = "https://localhost";

        //     // Fetch data asynchronously for each scope

        //         const urlToFetch = `${url}/obix/histories/SqlServerDatabase/domestic/~historyQuery?start=${startDateValue}T23:59:59.000+05:30&end=${endDateValue}T23:59:59.000+05:30`;
        //         console.log(urlToFetch);
        //         try {
        //             const response = await fetch(urlToFetch);
        //             console.log(response);

        //         const text = await response.text();

        //         // Parse the XML data
        //             const parser = new DOMParser();
        //             const xmlDoc = parser.parseFromString(text, "text/xml");
        //             const objs = xmlDoc.getElementsByTagName("obj");

        //             for (let i = 0; i < objs.length; i++) {
        //                 const obj = objs[i];
        //                 const abstime = obj.getElementsByTagName("abstime")[0];
        //                 const real = obj.getElementsByTagName("real")[0];

        //                 if (abstime && real) {
        //                     const dateText = abstime.getAttribute("val");
        //                     const valueText = real.getAttribute("val");

        //                     if (valueText && dateText) {
        //                         const value = parseFloat(valueText).toFixed(2);
        //                         const date = new Date(dateText);
        //                         const formattedDate = date.toLocaleDateString("en-US", {
        //                             month: "short",
        //                             day: "numeric"
        //                         });
        //                         const dateStr = date.toDateString();  // Use toDateString to compare without time

        //                         const existingEntry = waterValues.find(entry => entry.date.toDateString() === dateStr);

        //                         if (existingEntry) {
        //                             // Update the existing entry's value
        //                             existingEntry.value = parseFloat(value);
        //                         } else {
        //                             // Add a new entry with date and value
        //                             waterValues.push({
        //                                 date: date,
        //                                 value: parseFloat(value)
        //                             });
        //                         }
        //                     }
        //                 }
        //             }
        //         } catch (error) {
        //             console.error(`Error fetching data for `);
        //         }


        //     // Themes begin
        //     am4core.useTheme(am4themes_animated);
        //     // Themes end

        //     // Create chart instance
        //     aqiCharts = am4core.create("chartdiv4", am4charts.XYChart);
        //     aqiCharts.paddingRight = 20;

        //     // Add data
        //     aqiCharts.data = waterValues;
        //     console.log(aqiCharts.data);
        //     waterValues.forEach(item => {
        //         item.date = new Date(item.date).getTime();  // Convert to timestamp
        //         console.log("item date (timestamp): " + item.date);

        //         // Convert timestamp back to a readable date
        //         const formattedDate = new Date(item.date).toLocaleDateString("en-US", {
        //             // year: "numeric",
        //             month: "short",
        //             day: "numeric"
        //         });
        //         item.date = formattedDate;
        //         console.log("Formatted item date: " + formattedDate);
        //     });


        //     // Create axes
        //     var categoryAxis = aqiCharts.xAxes.push(new am4charts.CategoryAxis());
        //     categoryAxis.dataFields.category = "date"; // Use 'date' instead of 'year'
        //     categoryAxis.renderer.minGridDistance = 80;
        //     // categoryAxis.renderer.grid.template.location = 2;
        //     // categoryAxis.startLocation = 1;
        //     // categoryAxis.endLocation = 1.5;
        //     categoryAxis.renderer.labels.template.horizontalCenter = "middle"; // Center labels
        //     categoryAxis.renderer.labels.template.verticalCenter = "middle"; // Center labels

        //     var valueAxis = aqiCharts.yAxes.push(new am4charts.ValueAxis());
        //     valueAxis.baseValue = 0;

        //     // Function to create series
        //     function createSeries(valueField, name, color) {
        //         var series = aqiCharts.series.push(new am4charts.ColumnSeries());
        //         series.dataFields.valueY = valueField;
        //         series.dataFields.categoryX = "date"; // Use 'date' instead of 'year'
        //         series.name = name;
        //         series.strokeWidth = 2;
        //         series.tensionX = 0.77;
        //         series.stroke = color;

        //         // Bullet to display tooltips
        //         var bullet = series.bullets.push(new am4charts.Bullet());
        //         bullet.tooltipText = "{valueY}";

        //         bullet.adapter.add("fill", function (_fill, target) {
        //             // If the value is negative, color the bullet red, else use the series color
        //             if (target.dataItem.valueY < 0) {
        //                 return am4core.color("#FF6600"); // Red for negative values
        //             }
        //             return series.stroke; // Use the series stroke color (the color passed to createSeries)
        //         });

        //         return series;
        //     }
        //     aqiCharts.legend = new am4charts.Legend();
        //     aqiCharts.legend.position = "top";
        //     aqiCharts.legend.paddingBottom = 10;
        //     aqiCharts.legend.labels.template.maxWidth = 95;
        //     // Create three series with different data fields and colors
        //     createSeries("value", "Power", "#FF6600");

        //     // Add scrollbar
        //     // var scrollbarX = new am4charts.XYChartScrollbar();
        //     // scrollbarX.series.push(chart.series.values[0]);  // Add the first series to the scrollbar
        //     // chart.scrollbarX = scrollbarX;
        //     // scrollbarX.height = 30;
        //     aqiCharts.scrollbarX = new am4core.Scrollbar();
        //     aqiCharts.scrollbarX.marginBottom = 20;

        //     aqiCharts.cursor = new am4charts.XYCursor();
        //     aqiCharts.logo.disabled = true;

        // });

    //     am4core.ready(async function () {
    //         const startDateValue = document.getElementById("startDateIAQ").value;
    //         const endDateValue = document.getElementById("endDateIAQ").value;
    //         const isValid = await validateDateRange(startDateValue, endDateValue);
    // if (!isValid) {
    //     // If the date range is invalid, stop execution
    //     return;
    // }
    //         let waterValues = [];

    //         // Fetch data asynchronously
    //         const urlToFetch = `${url}/obix/histories/Barclays_Sup/IAQ$2fA_IAQ_Daily/~historyQuery?start=${startDateValue}T23:59:59.000+05:30&end=${endDateValue}T23:59:59.000+05:30`;
    //         console.log(urlToFetch);
    //         try {
    //             const response = await fetch(urlToFetch);
    //             console.log(response);

    //             const text = await response.text();
    //             const parser = new DOMParser();
    //             const xmlDoc = parser.parseFromString(text, "text/xml");
    //             const objs = xmlDoc.getElementsByTagName("obj");

    //             for (let i = 0; i < objs.length; i++) {
    //                 const obj = objs[i];
    //                 const abstime = obj.getElementsByTagName("abstime")[0];
    //                 const real = obj.getElementsByTagName("real")[0];

    //                 if (abstime && real) {
    //                     const dateText = abstime.getAttribute("val");
    //                     const valueText = real.getAttribute("val");

    //                     if (valueText && dateText) {
    //                         const value = parseFloat(valueText).toFixed(2);
    //                         const date = new Date(dateText);
    //                         const formattedDate = date.toLocaleDateString("en-US", {
    //                             month: "short",
    //                             day: "numeric"
    //                         });
    //                         const dateStr = date.toDateString();  // Use toDateString to compare without time

    //                         const existingEntry = waterValues.find(entry => entry.date.toDateString() === dateStr);

    //                         if (existingEntry) {
    //                             // Update the existing entry's value
    //                             existingEntry.value = parseFloat(value);
    //                         } else {
    //                             // Add a new entry with date and value
    //                             waterValues.push({
    //                                 date: date,
    //                                 value: parseFloat(value)
    //                             });
    //                         }
    //                     }
    //                 }
    //             }
    //         } catch (error) {
    //             console.error(`Error fetching data: ${error}`);
    //         }

    //         // Create chart instance
    //         am4core.useTheme(am4themes_animated);
    //         aqiCharts = am4core.create("chartdiv4", am4charts.XYChart);
    //         aqiCharts.logo.disabled = true;
    //         // Add scrollbar
    //         aqiCharts.scrollbarX = new am4core.Scrollbar();
    //         aqiCharts.scrollbarX.marginBottom = 20;

    //         aqiCharts.cursor = new am4charts.XYCursor();
    //         aqiCharts.paddingRight = 20;

    //         // Add data to chart
    //         aqiCharts.data = waterValues;
    //         waterValues.forEach(item => {
    //             item.date = new Date(item.date).getTime();  // Convert to timestamp

    //             const formattedDate = new Date(item.date).toLocaleDateString("en-US", {
    //                 month: "short",
    //                 day: "numeric"
    //             });
    //             item.date = formattedDate;
    //         });

    //         // Create axes
    //         var categoryAxis = aqiCharts.xAxes.push(new am4charts.CategoryAxis());
    //         categoryAxis.dataFields.category = "date"; // Use 'date' instead of 'year'
    //         categoryAxis.renderer.minGridDistance = 80;
    //         categoryAxis.renderer.labels.template.horizontalCenter = "middle"; // Center labels
    //         categoryAxis.renderer.labels.template.verticalCenter = "middle"; // Center labels

    //         var valueAxis = aqiCharts.yAxes.push(new am4charts.ValueAxis());
    //         valueAxis.baseValue = 0;

    //         // Function to create series with the color #FF6600
    //         function createSeries(valueField, name, color) {
    //             var series = aqiCharts.series.push(new am4charts.ColumnSeries());
    //             series.dataFields.valueY = valueField;
    //             series.dataFields.categoryX = "date"; // Use 'date' instead of 'year'
    //             series.name = name;
    //             series.strokeWidth = 2;
    //             series.tensionX = 0.77;
    //             series.columns.template.fill = am4core.color(color); // Apply color to the column fill
    //             series.columns.template.stroke = am4core.color(color);
    //             series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";

    //             // Bullet to display tooltips
    //             var bullet = series.bullets.push(new am4charts.Bullet());

    //             bullet.adapter.add("fill", function (fill, target) {
    //                 // If the value is negative, color the bullet with #FF6600, else use the series color
    //                 if (target.dataItem.valueY < 0) {
    //                     return am4core.color("#FF6600"); // Color the bullet with #FF6600
    //                 }
    //                 return series.stroke; // Use the series stroke color (the color passed to createSeries)
    //             });

    //             return series;
    //         }

    //         // Add legend and series
    //         aqiCharts.legend = new am4charts.Legend();
    //         aqiCharts.legend.position = "top";
    //         aqiCharts.legend.paddingBottom = 10;
    //         aqiCharts.legend.labels.template.maxWidth = 95;
    //         createSeries("value", "AQI", "#FF6600");  // Apply color to series



    //     });

    // am4core.ready(async function () {
    //         const startDateValue = document.getElementById("startDateIAQ").value;
    //         const endDateValue = document.getElementById("endDateIAQ").value;
    //         const isValid = await validateDateRange(startDateValue, endDateValue);
    // if (!isValid) {
    //     // If the date range is invalid, stop execution
    //     return;
    // }
    //         let waterValues = [];

    //         // Fetch data asynchronously
    //         const urlToFetch = `${url}/obix/histories/Barclays_Sup/IAQ$2fA_IAQ_Daily/~historyQuery?start=${startDateValue}T23:59:59.000+05:30&end=${endDateValue}T23:59:59.000+05:30`;
    //         console.log(urlToFetch);
    //         try {
    //             const response = await fetch(urlToFetch);
    //             console.log(response);

    //             const text = await response.text();
    //             const parser = new DOMParser();
    //             const xmlDoc = parser.parseFromString(text, "text/xml");
    //             const objs = xmlDoc.getElementsByTagName("obj");

    //             for (let i = 0; i < objs.length; i++) {
    //                 const obj = objs[i];
    //                 const abstime = obj.getElementsByTagName("abstime")[0];
    //                 const real = obj.getElementsByTagName("real")[0];

    //                 if (abstime && real) {
    //                     const dateText = abstime.getAttribute("val");
    //                     const valueText = real.getAttribute("val");

    //                     if (valueText && dateText) {
    //                         const value = parseFloat(valueText).toFixed(2);
    //                         const date = new Date(dateText);
    //                         const formattedDate = date.toLocaleDateString("en-US", {
    //                             month: "short",
    //                             day: "numeric"
    //                         });
    //                         const dateStr = date.toDateString();  // Use toDateString to compare without time

    //                         const existingEntry = waterValues.find(entry => entry.date.toDateString() === dateStr);

    //                         if (existingEntry) {
    //                             // Update the existing entry's value
    //                             existingEntry.value = parseFloat(value);
    //                         } else {
    //                             // Add a new entry with date and value
    //                             waterValues.push({
    //                                 date: date,
    //                                 value: parseFloat(value)
    //                             });
    //                         }
    //                     }
    //                 }
    //             }
    //         } catch (error) {
    //             console.error(`Error fetching data: ${error}`);
    //         }

    //         // Create chart instance
    //         am4core.useTheme(am4themes_animated);
    //         aqiCharts = am4core.create("chartdiv4", am4charts.XYChart);
    //         aqiCharts.logo.disabled = true;
    //         // Add scrollbar
    //         aqiCharts.scrollbarX = new am4core.Scrollbar();
    //         aqiCharts.scrollbarX.marginBottom = 20;

    //         aqiCharts.cursor = new am4charts.XYCursor();
    //         aqiCharts.paddingRight = 20;

    //         // Add data to chart
    //         aqiCharts.data = waterValues;
    //         waterValues.forEach(item => {
    //             item.date = new Date(item.date).getTime();  // Convert to timestamp

    //             const formattedDate = new Date(item.date).toLocaleDateString("en-US", {
    //                 month: "short",
    //                 day: "numeric"
    //             });
    //             item.date = formattedDate;
    //         });

    //         // Create axes
    //         var categoryAxis = aqiCharts.xAxes.push(new am4charts.CategoryAxis());
    //         categoryAxis.dataFields.category = "date"; // Use 'date' instead of 'year'
    //         categoryAxis.renderer.minGridDistance = 80;
    //         categoryAxis.renderer.labels.template.horizontalCenter = "middle"; // Center labels
    //         categoryAxis.renderer.labels.template.verticalCenter = "middle"; // Center labels

    //         var valueAxis = aqiCharts.yAxes.push(new am4charts.ValueAxis());
    //         valueAxis.baseValue = 0;

    //         // Function to create series with the color #FF6600
    //         function createSeries(valueField, name, color) {
    //             var series = aqiCharts.series.push(new am4charts.ColumnSeries());
    //             series.dataFields.valueY = valueField;
    //             series.dataFields.categoryX = "date"; // Use 'date' instead of 'year'
    //             series.name = name;
    //             series.strokeWidth = 2;
    //             series.tensionX = 0.77;
    //             series.columns.template.fill = am4core.color(color); // Apply color to the column fill
    //             series.columns.template.stroke = am4core.color(color);
    //             series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";

    //             // Bullet to display tooltips
    //             var bullet = series.bullets.push(new am4charts.Bullet());

    //             bullet.adapter.add("fill", function (fill, target) {
    //                 // If the value is negative, color the bullet with #FF6600, else use the series color
    //                 if (target.dataItem.valueY < 0) {
    //                     return am4core.color("#FF6600"); // Color the bullet with #FF6600
    //                 }
    //                 return series.stroke; // Use the series stroke color (the color passed to createSeries)
    //             });

    //             return series;
    //         }

    //         // Add legend and series
    //         aqiCharts.legend = new am4charts.Legend();
    //         aqiCharts.legend.position = "top";
    //         aqiCharts.legend.paddingBottom = 10;
    //         aqiCharts.legend.labels.template.maxWidth = 95;
    //         createSeries("value", "AQI", "#FF6600");  // Apply color to series



    //     });
    am4core.ready(async function () {
            const startDateValue = document.getElementById("startDateIAQ").value;
            const endDateValue = document.getElementById("endDateIAQ").value;
            let waterValues = [];

            // Fetch data asynchronously
            const urlToFetch = `${url}/obix/histories/Barclays_Sup/IAQ_Daily/~historyQuery?start=${startDateValue}T23:58:00.000+05:30&end=${endDateValue}T23:58:00.000+05:30`;
            console.log(urlToFetch);
            try {
                const response = await fetch(urlToFetch);
                console.log(response);

                const text = await response.text();
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(text, "text/xml");
                const objs = xmlDoc.getElementsByTagName("obj");

                for (let i = 0; i < objs.length; i++) {
                    const obj = objs[i];
                    const abstime = obj.getElementsByTagName("abstime")[0];
                    const real = obj.getElementsByTagName("real")[0];

                    if (abstime && real) {
                        const dateText = abstime.getAttribute("val");
                        const valueText = real.getAttribute("val");

                        if (valueText && dateText) {
                            const value = parseFloat(valueText).toFixed(2);
                            const date = new Date(dateText);
                            const formattedDate = date.toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric"
                            });
                            const dateStr = date.toDateString();  // Use toDateString to compare without time

                            const existingEntry = waterValues.find(entry => entry.date.toDateString() === dateStr);

                            if (existingEntry) {
                                // Update the existing entry's value
                                existingEntry.value = parseFloat(value);
                            } else {
                                // Add a new entry with date and value
                                waterValues.push({
                                    date: date,
                                    value: parseFloat(value)
                                });
                            }
                        }
                    }
                }
            } catch (error) {
                console.error(`Error fetching data: ${error}`);
            }
        console.log(waterValues);
          const flattenedData = waterValues.flat();
    if (checkDataAvailability(flattenedData, 'chartdiv4')) {
        return; // Exit if no data is available
    }
            // Create chart instance
            am4core.useTheme(am4themes_animated);
            aqiCharts = am4core.create("chartdiv4", am4charts.XYChart);
            aqiCharts.logo.disabled = true;
            // Add scrollbar
            aqiCharts.scrollbarX = new am4core.Scrollbar();
            aqiCharts.scrollbarX.marginBottom = 20;

            aqiCharts.cursor = new am4charts.XYCursor();
            aqiCharts.paddingRight = 20;

            // Add data to chart
            aqiCharts.data = waterValues;
            waterValues.forEach(item => {
                item.date = new Date(item.date).getTime();  // Convert to timestamp

                const formattedDate = new Date(item.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric"
                });
                item.date = formattedDate;
            });

            // Create axes
            var categoryAxis = aqiCharts.xAxes.push(new am4charts.CategoryAxis());
            categoryAxis.dataFields.category = "date"; // Use 'date' instead of 'year'
            categoryAxis.renderer.minGridDistance = 80;
            categoryAxis.renderer.labels.template.horizontalCenter = "middle"; // Center labels
            categoryAxis.renderer.labels.template.verticalCenter = "middle"; // Center labels

            var valueAxis = aqiCharts.yAxes.push(new am4charts.ValueAxis());
            valueAxis.baseValue = 0;

            // Function to create series with the color #FF6600
            function createSeries(valueField, name, color) {
                var series = aqiCharts.series.push(new am4charts.ColumnSeries());
                series.dataFields.valueY = valueField;
                series.dataFields.categoryX = "date"; // Use 'date' instead of 'year'
                series.name = name;
                series.strokeWidth = 2;
                series.tensionX = 0.77;
                series.columns.template.fill = am4core.color(color); // Apply color to the column fill
                series.columns.template.stroke = am4core.color(color);
                series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";

                // Bullet to display tooltips
                var bullet = series.bullets.push(new am4charts.Bullet());

                bullet.adapter.add("fill", function (fill, target) {
                    // If the value is negative, color the bullet with #FF6600, else use the series color
                    if (target.dataItem.valueY < 0) {
                        return am4core.color("#FF6600"); // Color the bullet with #FF6600
                    }
                    return series.stroke; // Use the series stroke color (the color passed to createSeries)
                });

                return series;
            }

            // Add legend and series
            aqiCharts.legend = new am4charts.Legend();
            aqiCharts.legend.position = "top";
            aqiCharts.legend.paddingBottom = 10;
            aqiCharts.legend.labels.template.maxWidth = 95;
            createSeries("value", "AQI", "#FF6600");  // Apply color to series

        });

        }

    async function aqiBarChart() {
        try {

            // Get the last 12 months
            const months = getLast12Months(); // Array of month names for the x-axis (e.g., ["Jan 2023", "Feb 2023", ...])
            const last12Months = getLast12Months1(); // Array of objects with `startDate` for the URLs

            console.log("Last 12 Months (from getLast12Months1):", last12Months);

            const chartData = [];

            // Loop through each month to fetch data
            for (const month of last12Months) {
                const urlAqiYear = `${url}/obix/histories/Barclays_Sup/IAQ_Yearly/~historyQuery?start=${month.startDate}T23:58:00.000+05:30&limit=1`;

                try {
                    const response = await fetch(urlAqiYear);
                    if (!response.ok) {
                        console.error(`Error fetching data for ${month.startDate}: HTTP ${response.status}`);
                        chartData.push(0); // Add 0 for missing data
                        continue;
                    }

                    const text = await response.text();
                    const parser = new DOMParser();
                    const xml = parser.parseFromString(text, "application/xml");

                    // Parse the data
                    const list = xml.getElementsByTagName("list")[0];
                    const abstime = list?.getElementsByTagName("abstime")[0]?.getAttribute("val");
                    const realValue = list?.getElementsByTagName("real")[0]?.getAttribute("val");

                    if (abstime && realValue) {
                        const abstimeDate = new Date(abstime);
                        const formattedAbstime = `${abstimeDate.getFullYear()}-${String(abstimeDate.getMonth() + 1).padStart(2, '0')}-${String(abstimeDate.getDate()).padStart(2, '0')}`;

                        if (formattedAbstime === month.startDate) {
                            chartData.push(parseFloat(realValue).toFixed(2));
                        } else {
                            chartData.push(0); // Add 0 if no matching date
                        }
                    } else {
                        chartData.push(0); // Add 0 for missing values
                    }
                } catch (error) {
                    console.error(`Error processing data for ${month.startDate}:`, error);
                    chartData.push(0); // Add 0 in case of errors
                }
            }
            const flattenedData = chartData.flat();
    if (checkDataAvailability(flattenedData, 'chartdiv4')) {
        return; // Exit if no data is available
    }
            const existingStyle = document.getElementById('chartdiv4-styles');
            if (existingStyle) {
                existingStyle.remove();
            }
            // Configure the bar chart options
            const options = {
                series: [
                    {
                        name: 'Occupancy Efficiency',
                        data: chartData, // Data for the chart
                    }
                ],
                chart: {
                    type: 'bar',
                    height: '100%',
                    toolbar: {
                        show: false,
                    },
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '55%',
                        endingShape: 'rounded',
                    }
                },
                colors: ["#FF6600"],
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    show: true,
                    width: 0,
                    colors: ['transparent'],
                },
                xaxis: {
                    categories: months, // Use month names as x-axis categories
                },
                grid: {
                    show: true, // Disable grid lines
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return `${val}`; // Customize tooltip value
                        },
                    },
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'center',
                    labels: {
                        colors: ['#000000'], // Customize legend label color
                    }
                }
            };

            console.log("Creating bar chart...");
            aqiCharts = new ApexCharts(document.querySelector("#chartdiv4"), options);
            aqiCharts.render();
        } catch (error) {
            console.error("Error creating bar chart:", error);
        }
    }
    async function lineChartMonthlyAqi() {
        am4core.ready(async function () {
        const today = new Date();
        const currentMonth = today.getMonth();

        // Set startDate and endDate to the previous month
        const startDate = new Date(today.getFullYear(), currentMonth - 1, 1);
        const endDate = new Date(today.getFullYear(), currentMonth, 0);

        const startISO = `${startDate.getFullYear()}-${String(startDate.getMonth() + 1).padStart(2, '0')}-${String(startDate.getDate()).padStart(2, '0')}`;
        const endISO = `${endDate.getFullYear()}-${String(endDate.getMonth() + 1).padStart(2, '0')}-${String(endDate.getDate()).padStart(2, '0')}`;
            let waterValues = [];
            // const url = "https://localhost";

            // Fetch data asynchronously for each scope

                const urlToFetch = `${url}/obix/histories/Barclays_Sup/IAQ_Daily/~historyQuery?start=${startISO}T23:59:59.000+05:30&end=${endISO}T23:59:59.000+05:30`;
                console.log(urlToFetch);
                try {
                    const response = await fetch(urlToFetch);
                    console.log(response);

                const text = await response.text();

                // Parse the XML data
                    const parser = new DOMParser();
                    const xmlDoc = parser.parseFromString(text, "text/xml");
                    const objs = xmlDoc.getElementsByTagName("obj");

                    for (let i = 0; i < objs.length; i++) {
                        const obj = objs[i];
                        const abstime = obj.getElementsByTagName("abstime")[0];
                        const real = obj.getElementsByTagName("real")[0];

                        if (abstime && real) {
                            const dateText = abstime.getAttribute("val");
                            const valueText = real.getAttribute("val");

                            if (valueText && dateText) {
                                const value = parseFloat(valueText).toFixed(2);
                                const date = new Date(dateText);
                                const formattedDate = date.toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric"
                                });
                                const dateStr = date.toDateString();  // Use toDateString to compare without time

                                const existingEntry = waterValues.find(entry => entry.date.toDateString() === dateStr);

                                if (existingEntry) {
                                    // Update the existing entry's value
                                    existingEntry.value = parseFloat(value);
                                } else {
                                    // Add a new entry with date and value
                                    waterValues.push({
                                        date: date,
                                        value: parseFloat(value)
                                    });
                                }
                            }
                        }
                    }
                } catch (error) {
                    console.error(`Error fetching data for `);
                }

const flattenedData = waterValues.flat();
    if (checkDataAvailability(flattenedData, 'chartdiv4')) {
        return; // Exit if no data is available
    }
            // Themes begin
            am4core.useTheme(am4themes_animated);
            // Themes end

            // Create chart instance
            aqiCharts = am4core.create("chartdiv4", am4charts.XYChart);
            aqiCharts.paddingRight = 20;

            // Add data
            aqiCharts.data = waterValues;
            console.log(aqiCharts.data);
            waterValues.forEach(item => {
                item.date = new Date(item.date).getTime();  // Convert to timestamp
                console.log("item date (timestamp): " + item.date);

                // Convert timestamp back to a readable date
                const formattedDate = new Date(item.date).toLocaleDateString("en-US", {
                    // year: "numeric",
                    month: "short",
                    day: "numeric"
                });
                item.date = formattedDate;
                console.log("Formatted item date: " + formattedDate);
            });


            // Create axes
            var categoryAxis = aqiCharts.xAxes.push(new am4charts.CategoryAxis());
            categoryAxis.dataFields.category = "date"; // Use 'date' instead of 'year'
            categoryAxis.renderer.minGridDistance = 80;
            // categoryAxis.renderer.grid.template.location = 2;
            // categoryAxis.startLocation = 1;
            // categoryAxis.endLocation = 1.5;
            categoryAxis.renderer.labels.template.horizontalCenter = "middle"; // Center labels
            categoryAxis.renderer.labels.template.verticalCenter = "middle"; // Center labels

            var valueAxis = aqiCharts.yAxes.push(new am4charts.ValueAxis());
            valueAxis.baseValue = 0;

            // Function to create series
            function createSeries(valueField, name, color) {
                var series = aqiCharts.series.push(new am4charts.LineSeries());
                series.dataFields.valueY = valueField;
                series.dataFields.categoryX = "date"; // Use 'date' instead of 'year'
                series.name = name;
                series.strokeWidth = 2;
                series.tensionX = 0.77;
                series.stroke = color;

                // Bullet to display tooltips
                var bullet = series.bullets.push(new am4charts.Bullet());
                bullet.tooltipText = "{categoryX}:{valueY}";

                bullet.adapter.add("fill", function (fill, target) {
                    // If the value is negative, color the bullet red, else use the series color
                    if (target.dataItem.valueY < 0) {
                        return am4core.color("#FF6600"); // Red for negative values
                    }
                    return series.stroke; // Use the series stroke color (the color passed to createSeries)
                });

                return series;
            }
            aqiCharts.legend = new am4charts.Legend();
            aqiCharts.legend.position = "top";
            aqiCharts.legend.paddingBottom = 10;
            aqiCharts.legend.labels.template.maxWidth = 95;
            // Create three series with different data fields and colors
            createSeries("value", "AQI", am4core.color("#FF6600"));

            // Add scrollbar
            // var scrollbarX = new am4charts.XYChartScrollbar();
            // scrollbarX.series.push(chart.series.values[0]);  // Add the first series to the scrollbar
            // chart.scrollbarX = scrollbarX;
            // scrollbarX.height = 30;
            aqiCharts.scrollbarX = new am4core.Scrollbar();
            aqiCharts.scrollbarX.marginBottom = 20;

            aqiCharts.cursor = new am4charts.XYCursor();
            aqiCharts.logo.disabled = true;

        });
    }
  // $("#startDateIAQ, #endDateIAQ").on("change", async function () {
  //       // await createBarChart();
  //       st
  //       await replaceIndoorChart(createBarChart);
  //   });
  //   $("#sav_daily_iaq").on("click", async function () {
  //       clearDateInputsAqi();
  //       await replaceIndoorChart(createPieChart);
  //   });
  //   $("#sav_monthly_iaq").on("click", async function () {
  //       clearDateInputsAqi();
  //       await replaceIndoorChart(lineChartMonthlyAqi);
  //   });
  //   $("#sav_yearly_iaq").on("click", async function () {
  //       clearDateInputsAqi();
  //       // await aqiBarChart();
  //       await replaceIndoorChart(aqiBarChart);
  //   });
$("#startDateIAQ, #endDateIAQ").on("change", async function () {
        // await createBarChart();
        stopInterval();
        await replaceIndoorChart(createBarChart);
    });
    $("#sav_daily_iaq").on("click", async function () {
        clearDateInputsAqi();
        chartInterval = setInterval(() => replaceIndoorChart(createPieChart), 60000);
    });
    $("#sav_monthly_iaq").on("click", async function () {
        clearDateInputsAqi();
        stopInterval();
        await replaceIndoorChart(lineChartMonthlyAqi);
    });
    $("#sav_yearly_iaq").on("click", async function () {
        clearDateInputsAqi();
        // await aqiBarChart();
        stopInterval();
        await replaceIndoorChart(aqiBarChart);
    });
    /* Indoor Air Quality end */

    /* EPI Index start */
    //var epiChart; // Global reference to the current chart

    // Function to replace the current chart with a new one
    async function replaceEpiChart(newChartFunction) {
        // Check if there is an existing chart
        if (epiChart) {
            // Check if epiChart is an instance of ApexCharts
            if (epiChart instanceof ApexCharts) {
                console.log("ApexCharts instance destroyed");
                epiChart.destroy(); // Destroy the existing ApexCharts instance
            }
            else {
                console.log("am4charts.XYChart instance destroyed");
                epiChart.dispose(); // Dispose the existing am4charts.XYChart instance
            }
        }

        // Create the new chart by calling the passed chart function
        await newChartFunction();
    }

    let epiChart; // Declare the variable globally

    // async function epiDonutChart() {
    //     try {
    //         const response = await fetch(`${url}/obix/config/Drivers/Barclays/EPI/`);
    //         const text = await response.text();

    //         // Parse the XML response
    //         const parser = new DOMParser();
    //         const xmlDoc = parser.parseFromString(text, "application/xml");

    //         // Extract values for ups, hvac, and rt&ltg
    //         const ups = parseFloat(xmlDoc.querySelector('ref[name="EPI_HVAC"]').getAttribute('display').split(' ')[0]);
    //         const hvac = parseFloat(xmlDoc.querySelector('ref[name="EPI_UPS"]').getAttribute('display').split(' ')[0]);
    //         const rtltg = parseFloat(xmlDoc.querySelector('ref[name="EPI_RP_LTG"]').getAttribute('display').split(' ')[0]);
    //         const ups1 = parseFloat(xmlDoc.querySelector('ref[name="HVAC"]').getAttribute('display').split(' ')[0]);
    //         const hvac1 = parseFloat(xmlDoc.querySelector('ref[name="UPS"]').getAttribute('display').split(' ')[0]);
    //         const rtltg1 = parseFloat(xmlDoc.querySelector('ref[name="RP_LTG"]').getAttribute('display').split(' ')[0]);

    //         const seriesData = [hvac, ups, rtltg];
    //         const seriesData1 = [hvac1, ups1, rtltg1];
    //         const totalValue = seriesData1.reduce((a, b) => a + b, 0); // Calculate the total value

    //         // Define chart styles
    //         const style = document.createElement('style');
    //         style.innerHTML = `
    //         #chartdiv5 .apexcharts-text {
    //             fill: #000000;
    //             font-weight: bold;
    //         }
    //     `;
    //     style.id = 'chartdiv5-styles';
    //     document.head.appendChild(style);

    //         // Chart configuration
            // const options = {
            //     series: seriesData,
            //     chart: {
            //         type: 'donut',
            //         height: "100%",
            //         animations: {
            //             enabled: false // Disable all animations, including rotation
            //         },
            //         offsetY: -20
            //     },
            //     labels: ['HVAC', 'UPS', 'RP & LTG'],
            //     tooltip: {
            //     y: {
            //         formatter: function (_, { seriesIndex }) {
            //             return seriesData1[seriesIndex]; // Show raw values on hover
            //         }
            //         }
            //     },
            //     colors: ['#FFB200', '#667BC6', '#D1E9F6'],
            //     legend: {
            //         show: true,
            //         position: 'top',
            //         horizontalAlign: 'center',
            //         labels: {
            //             colors: ['#000000', '#000000', '#000000'], // Legend label colors
            //         },
            //         offsetY: 10
            //     },
            //     plotOptions: {
            //         pie: {
            //             donut: {
            //                 size: '50%',
            //                 labels: {
            //                     show: true,
            //                     name: {
            //                         show: true,
            //                         fontSize: '30px',
            //                         fontWeight: 'bold',
            //                         color: '#000000',
            //                         formatter: function () {
            //                             return 'EPI';
            //                         }
            //                     },
            //                     value: {
            //                         show: true,
            //                         fontSize: '30px',
            //                         fontWeight: 'bold',
            //                         color: '#000000',
            //                         formatter: function () {
            //                             return totalValue;
            //                         }
            //                     },
            //                     total: {
            //                         show: true,
            //                         label: 'EPI',
            //                         fontSize: '30px',
            //                         fontWeight: 'bold',
            //                         color: '#000000',
            //                         formatter: function () {
            //                             return totalValue;
            //                         }
            //                     }
            //                 }
            //             }
            //         }
            //     },
            //     responsive: [{
            //         breakpoint: 480,
            //         options: {
            //             chart: {
            //                 width: 200
            //             },
            //             legend: {
            //                 position: 'top'
            //             }
            //         }
            //     }],
            //     stroke: {
            //         show: false
            //     }
            // };

            // // Initialize the chart and store the instance in epiChart
            // epiChart = new ApexCharts(document.querySelector("#chartdiv5"), options);
            // epiChart.render();
    //     } catch (error) {
    //         console.error("Error fetching data:", error);
    //     }
    // }

// async function epiDonutChart() {
//     try {
//         const waters = ['HVAC', 'UPS', 'RP_LTG'];
//         let waterValues = [];

//         // Fetch data asynchronously for each scope
//         const fetchDataPromises = waters.map(async (scope) => {
//             const urlToFetch = `${url}/obix/config/Drivers/Barclays/EPI/${scope}/`;
//             console.log(`Fetching data from: ${urlToFetch}`);
//             try {
//                 const response = await fetch(urlToFetch);
//                 if (!response.ok) {
//                     console.error(`Error fetching data for ${scope}`);
//                     return;
//                 }

//                 const text = await response.text();
//                 console.log(`Fetched text for ${scope}: ${text.slice(0, 100)}...`);

//                 // Parse the XML data
//                 const parser = new DOMParser();
//                 const xmlDoc = parser.parseFromString(text, "text/xml");

//                 let scopeElement = null;

//                 // Extract values based on scope
//                 if (scope === 'HVAC') {
//                     scopeElement = xmlDoc.querySelector('ref[name="HVAC_OP_PANEL"]');
//                 } else if (scope === 'UPS') {
//                     scopeElement = xmlDoc.querySelector('ref[name="UPS_OP_PANEL"]');
//                 } else if (scope === 'RP_LTG') {
//                     scopeElement = xmlDoc.querySelector('ref[name="RP_OP_PANEL"]');
//                 }

//                 if (scopeElement) {
//                     const value = parseFloat(scopeElement.getAttribute('display').split(' ')[0]);
//                     console.log(`EPI values for ${scope}: ${value}`);
//                     waterValues.push(value); // Add value
//                 }

//             } catch (fetchError) {
//                 console.error(`Error fetching data for ${scope}:`, fetchError);
//             }
//         });

//         // Wait for all data to be fetched
//         await Promise.all(fetchDataPromises);

//         // Check if we have valid data for all 3 scopes
//         if (waterValues.length !== 3) {
//             console.error("Error: Missing data for some components");
//             return;
//         }

//         console.log("Final Water Values: ", waterValues);

//         // Fetch the total value (outValue)
//         const response = await fetch(`${url}/obix/config/Drivers/Barclays/EPI/TotalEPI/`);
//         const text = await response.text();
//         const parser = new DOMParser();
//         const xmlDoc = parser.parseFromString(text, "text/xml");
//         const outElement = xmlDoc.querySelector('real[name="out"]');
//         const outValue = parseFloat(outElement.getAttribute('val')).toFixed(2);

//         // Normalize waterValues as percentages of outValue
// //         const normalizedValues = waterValues.map(value => {
// //     const normalizedValue = ((value / outValue) * 100).toFixed(2); // Calculate and format to 2 decimal places
// //     return parseFloat(normalizedValue); // Convert the string back to a number
// // });

// // console.log("Normalized Values:", normalizedValues);


// //         // Define chart styles and render
// //         const style = document.createElement('style');
// //         style.innerHTML = `
// //             #chartdiv5 .apexcharts-text {
// //                 fill: #000000;
// //                 font-weight: bold;
// //             }
// //         `;
// //         style.id = 'chartdiv5-styles';
// //         document.head.appendChild(style);

// //         // Chart configuration
// //         const options = {
// //             series: normalizedValues, // Use normalized values as percentages
// //             chart: {
// //                 type: 'donut',
// //                 height: "100%",
// //                 animations: {
// //                     enabled: false // Disable all animations, including rotation
// //                 },
// //                 offsetY: -20
// //             },
// //             labels: ['HVAC', 'UPS', 'RP & LTG'],
// //             tooltip: {
// //                 y: {
// //                     formatter: function (value) {
// //                         return value.toFixed(2) + '%'; // Format the tooltip values as percentages
// //                     }
// //                 }
// //             },
// //             colors: ['#FFB200', '#667BC6', '#D1E9F6'],
// //             legend: {
// //                 show: true,
// //                 position: 'top',
// //                 horizontalAlign: 'center',
// //                 labels: {
// //                     colors: ['#000000', '#000000', '#000000'], // Legend label colors
// //                 },
// //                 offsetY: 10
// //             },
// //             plotOptions: {
// //                 pie: {
// //                     donut: {
// //                         size: '50%',
// //                         labels: {
// //                             show: true,
// //                             name: {
// //                                 show: true,
// //                                 fontSize: '30px',
// //                                 fontWeight: 'bold',
// //                                 color: '#000000',
// //                                 formatter: function () {
// //                                     return 'EPI';
// //                                 }
// //                             },
// //                             value: {
// //                                 show: true,
// //                                 fontSize: '30px',
// //                                 fontWeight: 'bold',
// //                                 color: '#000000',
// //                                 // formatter: function () {
// //                                 //     return normalizedValues.reduce((a, b) => parseFloat(a) + parseFloat(b), 0).toFixed(2) + '%';
// //                                 // }
// //                             },
// //                             total: {
// //                                 show: true,
// //                                 label: 'EPI',
// //                                 fontSize: '30px',
// //                                 fontWeight: 'bold',
// //                                 color: '#000000',
// //                                 formatter: function () {
// //                                     return waterValues.reduce((a, b) => parseFloat(a) + parseFloat(b), 0).toFixed(2);
// //                                 }
// //                             }
// //                         }
// //                     }
// //                 }
// //             },
// //             responsive: [{
// //                 breakpoint: 480,
// //                 options: {
// //                     chart: {
// //                         width: 200
// //                     },
// //                     legend: {
// //                         position: 'top'
// //                     }
// //                 }
// //             }],
// //             stroke: {
// //                 show: false
// //             }
// //         };

// //         // Initialize and render the chart
// //         const epiChart = new ApexCharts(document.querySelector("#chartdiv5"), options);
// //         epiChart.render();
//         // Normalized values as percentages

// // Normalized values calculation
// const normalizedValues = waterValues.map(value => {
//     const normalizedValue = ((value / outValue) * 100).toFixed(2); // Calculate and format to 2 decimal places
//     return parseFloat(normalizedValue); // Convert the string back to a number
// });

// console.log("Normalized Values:", normalizedValues);

// // Define chart styles and render
// const style = document.createElement('style');
// style.innerHTML = `
//     #chartdiv5 .apexcharts-text {
//         fill: #000000;
//         font-weight: bold;
//     }
// `;
// style.id = 'chartdiv5-styles';
// document.head.appendChild(style);

// // Chart configuration
// const options = {
//     series: normalizedValues, // Use normalized values as percentages
//     chart: {
//         type: 'donut',
//         height: "100%",
//         animations: {
//             enabled: false // Disable all animations, including rotation
//         },
//         offsetY: -20
//     },
//     labels: ['HVAC', 'UPS', 'RP & LTG'],
//     tooltip: {
//         y: {
//             formatter: function (value) {
//                 return value + '%'; // Show exact percentages from series without recalculation
//             }
//         }
//     },
//     colors: ['#FFB200', '#667BC6', '#D1E9F6'],
//     legend: {
//         show: true,
//         position: 'top',
//         horizontalAlign: 'center',
//         labels: {
//             colors: ['#000000', '#000000', '#000000'], // Legend label colors
//         },
//         offsetY: 10,
//         formatter: function (seriesName, opts) {
//             // Use the exact percentage values from series in the legend
//             return seriesName + ': ' + normalizedValues[opts.seriesIndex];
//         }
//     },
//     plotOptions: {
//         pie: {
//             donut: {
//                 size: '50%',
//                 labels: {
//                     show: true,
//                     name: {
//                         show: true,
//                         fontSize: '30px',
//                         fontWeight: 'bold',
//                         color: '#000000',
//                         formatter: function () {
//                             return 'EPI';
//                         }
//                     },
//                     value: {
//                         show: true,
//                         fontSize: '30px',
//                         fontWeight: 'bold',
//                         color: '#000000',
//                         formatter: function (opts) {
//                             return normalizedValues[opts.seriesIndex];
//                         }
//                     },
//                     total: {
//                         show: true,
//                         label: 'EPI',
//                         fontSize: '30px',
//                         fontWeight: 'bold',
//                         color: '#000000',
//                         formatter: function () {
//                             return waterValues.reduce((a, b) => parseFloat(a) + parseFloat(b), 0).toFixed(2);
//                         }
//                     }
//                 }
//             }
//         }
//     },
//     responsive: [{
//         breakpoint: 480,
//         options: {
//             chart: {
//                 width: 200
//             },
//             legend: {
//                 position: 'top'
//             }
//         }
//     }],
//     stroke: {
//         show: false
//     }
// };

// // Render chart
// const chart = new ApexCharts(document.querySelector("#chartdiv5"), options);
// chart.render();



//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// }
var chartIntervalEpi;
function startIntervalEpi() {
    stopIntervalEpi();
    chartIntervalEpi = setInterval(() => replaceIndoorChart(epiDonutChart), 60000);
    console.log("Chart update interval started");
}

// Stop the interval
function stopIntervalEpi() {
    if (chartIntervalEpi) {
        clearInterval(chartIntervalEpi);
        chartIntervalEpi = null;
        console.log("Chart update interval stopped");
    }
}

async function epiDonutChart() {
//     try {
//         // const waters = ['HVAC', 'UPS', 'RP_LTG'];
//         // let waterValues = [];

//         // // Fetch data asynchronously for each scope
//         // const fetchDataPromises = waters.map(async (scope) => {
//         //     const urlToFetch = `${url}/obix/config/Drivers/Barclays/EPI/${scope}/`;
//         //     console.log(`Fetching data from: ${urlToFetch}`);
//         //     try {
//         //         const response = await fetch(urlToFetch);
//         //         if (!response.ok) {
//         //             console.error(`Error fetching data for ${scope}`);
//         //             return;
//         //         }

//         //         const text = await response.text();
//         //         console.log(`Fetched text for ${scope}: ${text.slice(0, 100)}...`);

//         //         // Parse the XML data
//         //         const parser = new DOMParser();
//         //         const xmlDoc = parser.parseFromString(text, "text/xml");

//         //         let scopeElement = null;

//         //         // Extract values based on scope
//         //         if (scope === 'HVAC') {
//         //             scopeElement = xmlDoc.querySelector('ref[name="HVAC_OP_PANEL"]');
//         //         } else if (scope === 'UPS') {
//         //             scopeElement = xmlDoc.querySelector('ref[name="UPS_OP_PANEL"]');
//         //         } else if (scope === 'RP_LTG') {
//         //             scopeElement = xmlDoc.querySelector('ref[name="RP_OP_PANEL"]');
//         //         }

//         //         if (scopeElement) {
//         //             const value = parseFloat(scopeElement.getAttribute('display').split(' ')[0]);
//         //             console.log(`EPI values for ${scope}: ${value}`);
//         //             waterValues.push(value); // Add value
//         //         }

//         //     } catch (fetchError) {
//         //         console.error(`Error fetching data for ${scope}:`, fetchError);
//         //     }
//         // });

//         // // Wait for all data to be fetched
//         // await Promise.all(fetchDataPromises);

//         // // Check if we have valid data for all 3 scopes
//         // if (waterValues.length !== 3) {
//         //     console.error("Error: Missing data for some components");
//         //     return;
//         // }

//         // console.log("Final Water Values: ", waterValues);

//         // Fetch total value
//         // const totalResponse = await fetch(`${url}/obix/config/Drivers/Barclays/EPI/TotalEPI/`);
//         // const totalText = await totalResponse.text();
//         // const totalXml = new DOMParser().parseFromString(totalText, "text/xml");
//         // const totalElement = totalXml.querySelector('real[name="out"]');
//         // const outValue = parseFloat(totalElement.getAttribute('val')).toFixed(2);
//         // console.log("out " + outValue);

//         // if (!outValue || outValue == 0) {
//         //     console.error("Error: Invalid or zero total value");
//         //     return;
//         // }

//         // const customTotal = parseFloat(outValue); // Custom total from your external source

//         // // Calculate percentages directly relative to the custom total
//         // const customPercentages = waterValues.map(value =>
//         //     parseFloat(((value / customTotal) * 100).toFixed(2))
//         // );

//         // Extract calculated percentages
//         // const [percentage1, percentage2, percentage3] = customPercentages;

//         // console.log(`Custom Percentages: ${percentage1}%, ${percentage2}%, ${percentage3}%`);



// // Example chart configuration
// const options = {
//     series: waterValues,  // Use raw values for series
//     chart: {
//         type: 'donut',
//         height: "100%"
//     },
//     plotOptions: {
//         radialBar: {
//             offsetY: 20,
//             startAngle: 0,
//             endAngle: 360,
//             hollow: {
//                 margin: 5,
//                 size: '65%',
//                 background: 'transparent',
//             },
//             dataLabels: {
//                 name: { show: true },
//                 value: {
//                     show: true,
//                     formatter: function (value) {
//                         // Calculate percentage based on custom total for each slice
//                         const percentage = ((value / customTotal) * 100).toFixed(2);
//                         return percentage + "%";  // Display percentage on slices
//                     }
//                 },
//                 total: {
//                     show: true,
//                     label: 'Total',
//                     fontSize: '30px',
//                     fontWeight: 'bold',
//                     color: '#000000',
//                     formatter: function () {
//                         return customTotal;  // Show custom total at the center
//                     }
//                 }
//             }
//         }
//     },
//     colors: ["#FF6600", "#28A745", "#007BFF"],  // Colors for slices
//     labels: ['HVAC', 'UPS', 'RP_LTG'],  // Labels for each slice
//     legend: {
//         show: true,
//         floating: true,
//         fontSize: '16px',
//         position: 'top',
//         horizontalAlign: 'center',
//         offsetY: 10,
//         labels: { useSeriesColors: true },
//         markers: { size: 0 },
//         formatter: function (seriesName, opts) {
//             return seriesName;
//         },
//         itemMargin: { vertical: 3 }
//     },
//     responsive: [{
//         breakpoint: 480,
//         options: {
//             legend: { show: false }
//         }
//     }]
// };

// // Re-create the chart with raw values and custom total
// const chart = new ApexCharts(document.querySelector("#chartdiv5"), options);
// chart.render();








//     } catch (error) {
//         console.error("Error in epiDonutChart:", error);
//     }
// const waterValues = [10, 20, 30];
//         const customTotal = 80;  // Custom total value

  const waters = ['HVAC', 'UPS', 'RP_LTG'];
        let waterValues = [];

        // Fetch data asynchronously for each scope
        const fetchDataPromises = waters.map(async (scope) => {
            const urlToFetch = `${url}/obix/config/Drivers/Barclays/EPI/${scope}/`;
            console.log(`Fetching data from: ${urlToFetch}`);
            try {
                const response = await fetch(urlToFetch);
                if (!response.ok) {
                    console.error(`Error fetching data for ${scope}`);
                    return;
                }

                const text = await response.text();
                console.log(`Fetched text for ${scope}: ${text.slice(0, 100)}...`);

                // Parse the XML data
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(text, "text/xml");

                let scopeElement = null;

                // Extract values based on scope
                if (scope === 'HVAC') {
                    scopeElement = xmlDoc.querySelector('ref[name="HVAC_OP_PANEL"]');
                } else if (scope === 'UPS') {
                    scopeElement = xmlDoc.querySelector('ref[name="UPS_OP_PANEL"]');
                } else if (scope === 'RP_LTG') {
                    scopeElement = xmlDoc.querySelector('ref[name="RP_OP_PANEL"]');
                }

                if (scopeElement) {
                    const value = parseFloat(scopeElement.getAttribute('display').split(' ')[0]);
                    console.log(`EPI values for ${scope}: ${value}`);
                    waterValues.push(value); // Add value
                }

            } catch (fetchError) {
                console.error(`Error fetching data for ${scope}:`, fetchError);
            }
        });

        // Wait for all data to be fetched
        await Promise.all(fetchDataPromises);

        // Check if we have valid data for all 3 scopes
        if (waterValues.length !== 3) {
            console.error("Error: Missing data for some components");
            return;
        }

        console.log("Final Water Values: ", waterValues);
        const flattenedData = waterValues.flat();
    if (checkDataAvailability(flattenedData, 'chartdiv5')) {
        return; // Exit if no data is available
    }

       // Fetch total value
        const totalResponse = await fetch(`${url}/obix/config/Drivers/Barclays/EPI/TotalEPI/`);
        const totalText = await totalResponse.text();
        const totalXml = new DOMParser().parseFromString(totalText, "text/xml");
        const totalElement = totalXml.querySelector('real[name="out"]');
        const outValue = parseFloat(totalElement.getAttribute('val')).toFixed(2);
        console.log("out " + outValue);

        if (!outValue || outValue == 0) {
            console.error("Error: Invalid or zero total value");
            return;
        }

          const customTotal = parseFloat(outValue); // Custom total from your external source

        // Calculate percentages based on customTotal
        const percentages = waterValues.map(value => {
            const percentage = ((value / customTotal) * 100).toFixed(2);  // Calculate percentage
            console.log(`For value ${value}, the percentage is: ${percentage}%`);
            return parseFloat(percentage);  // Store as float
        });

        console.log("Calculated Percentages:", percentages);  // Output the calculated percentages

        // AMCharts setup
        am4core.useTheme(am4themes_animated);

        epiChart = am4core.create("chartdiv5", am4charts.PieChart);

        // Add data with percentages calculated
        epiChart.data = [
            { category: 'HVAC', value: percentages[0] },
            { category: 'UPS', value: percentages[1] },
            { category: 'RP_LTG', value: percentages[2] }
        ];
        epiChart.innerRadius = am4core.percent(45);
        epiChart.width = am4core.percent(100);
        epiChart.radius = am4core.percent(89);
//         pieSeries.slices.template.radius = am4core.percent(150); // Extend beyond the default size
// pieSeries.slices.template.innerRadius = epiChart.innerRadius;

    // Add pie series
    var pieSeries = epiChart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "value";
    pieSeries.dataFields.category = "category";

    // Add custom colors
    pieSeries.colors.list = [
        am4core.color("#FFB200"),
        am4core.color("#667BC6"),
        am4core.color("#D1E9F6")
    ];

            // Set pie chart colors
            pieSeries.slices.template.stroke = am4core.color("transparent");
            pieSeries.slices.template.strokeOpacity = 0;
            pieSeries.dy = -10;

            pieSeries.ticks.template.disabled = true;
            pieSeries.alignLabels = false;
            // pieSeries.labels.template.text = "{value.percent.formatNumber('#.0')}%";
            pieSeries.labels.template.text = "{value}%";
            pieSeries.labels.template.radius = am4core.percent(-25);
            pieSeries.labels.template.fill = am4core.color("#000000");
           epiChart.height = am4core.percent(100);

   epiChart.legend = new am4charts.Legend();
            epiChart.legend.position = "top";
            epiChart.legend.layout = "horizontal";
            epiChart.legend.contentAlign = "center"; // Center the legend horizontally
            epiChart.legend.verticalAlign = "middle"; // Vertical centering
            epiChart.legend.align = "center";
            epiChart.legend.labels.template.interactionsEnabled = false;
            epiChart.legend.valueLabels.template.text = "";
            epiChart.legend.labels.template.text = "{category}"; // Updated label format
            epiChart.legend.labels.template.fill = am4core.color("#000000");
            epiChart.legend.marginTop = 0;
            epiChart.legend.useDefaultMarker = true;
var marker = epiChart.legend.markers.template.children.getIndex(0);
marker.cornerRadius(12, 12, 12, 12);
marker.strokeWidth = 2;
marker.strokeOpacity = 1;
marker.stroke = am4core.color("#ccc");

            epiChart.logo.disabled = true;


    // Add a label in the center of the donut chart
   // Create the main label for "EPI" in bold
var labelEpi = epiChart.seriesContainer.createChild(am4core.Label);
labelEpi.text = "EPI";
labelEpi.horizontalCenter = "middle";
labelEpi.verticalCenter = "middle";
labelEpi.fontSize = 30;
labelEpi.fontWeight = "bold";
labelEpi.fill = am4core.color("#000000");
labelEpi.dy = -30;
// Create the second label for the custom total in normal weight
var labelTotal = epiChart.seriesContainer.createChild(am4core.Label);
labelTotal.text = customTotal;
labelTotal.horizontalCenter = "middle";
labelTotal.verticalCenter = "middle";
labelTotal.fontSize = 30;
labelTotal.fontWeight = "normal";
labelTotal.fill = am4core.color("#000000");

// Position the total label slightly below "EPI"
labelTotal.dy = -2;  // Adjust vertical position of the total text


    // Responsive behavior
    epiChart.responsive.enabled = true;
    epiChart.responsive.rules.push({
        relevant: function (target) {
            return target.pixelWidth <= 480;
        },
        state: function (target, stateId) {
            if (target instanceof am4charts.Legend) {
                target.position = "top";
            }
            return null;
        }
    });

    // Disable chart animation
    epiChart.hiddenState.properties.opacity = 1;
    epiChart.hiddenState.properties.visible = false;
}

// (async function initialize() {
//     await epiDonutChart(); // Create the chart initially
//     startIntervalEpi();        // Start the interval to update the chart
// })();
// async function epiDonutChart() {
//     try {
//         const response = await fetch(`${url}/obix/config/Drivers/Barclays/EPI/`);
//         const text = await response.text();

//         // Parse the XML response
//         const parser = new DOMParser();
//         const xmlDoc = parser.parseFromString(text, "application/xml");

//         // Extract values for ups, hvac, and rtltg
//         const ups = parseFloat(xmlDoc.querySelector('ref[name="EPI_HVAC"]').getAttribute('display').split(' ')[0]);
//         const hvac = parseFloat(xmlDoc.querySelector('ref[name="EPI_UPS"]').getAttribute('display').split(' ')[0]);
//         const rtltg = parseFloat(xmlDoc.querySelector('ref[name="EPI_RP_LTG"]').getAttribute('display').split(' ')[0]);
//         const ups1 = parseFloat(xmlDoc.querySelector('ref[name="HVAC"]').getAttribute('display').split(' ')[0]);
//         const hvac1 = parseFloat(xmlDoc.querySelector('ref[name="UPS"]').getAttribute('display').split(' ')[0]);
//         const rtltg1 = parseFloat(xmlDoc.querySelector('ref[name="RP_LTG"]').getAttribute('display').split(' ')[0]);

//         const seriesData = [hvac, ups, rtltg]; // Already in percentages
//         const seriesData1 = [hvac1, ups1, rtltg1]; // Raw values

//         // Define chart styles
//         const style = document.createElement('style');
//         style.innerHTML = `
//             #chartdiv5 .apexcharts-text {
//                 fill: #000000;
//                 font-weight: bold;
//             }
//         `;
//         style.id = 'chartdiv5-styles';
//         document.head.appendChild(style);

//         // Chart configuration
//         const options = {
//             series: seriesData,
//             chart: {
//                 type: 'donut',
//                 height: "100%",
//                 animations: {
//                     enabled: false // Disable all animations, including rotation
//                 },
//                 offsetY: -20
//             },
//             labels: ['HVAC', 'UPS', 'RP & LTG'],
            // tooltip: {
            //     y: {
            //         formatter: function (_, { seriesIndex }) {
            //             return seriesData1[seriesIndex]; // Show raw values on hover
            //         }
            //     }
            // },
//             colors: ['#FFB200', '#667BC6', '#D1E9F6'],
//             legend: {
//                 show: true,
//                 position: 'top',
//                 horizontalAlign: 'center',
//                 labels: {
//                     colors: ['#000000', '#000000', '#000000'], // Legend label colors
//                 },
//                 offsetY: 10
//             },
//             plotOptions: {
//                 pie: {
//                     donut: {
//                         size: '50%',
//                         labels: {
//                             show: true,
//                             name: {
//                                 show: true,
//                                 fontSize: '30px',
//                                 fontWeight: 'bold',
//                                 color: '#000000',
//                                 formatter: function () {
//                                     return 'EPI';
//                                 }
//                             },
//                             value: {
//                                 show: true,
//                                 fontSize: '30px',
//                                 fontWeight: 'bold',
//                                 color: '#000000',
//                                 formatter: function () {
//                                     return ''; // You can leave this blank if not needed
//                                 }
//                             },
//                             total: {
//                                 show: true,
//                                 label: 'EPI',
//                                 fontSize: '30px',
//                                 fontWeight: 'bold',
//                                 color: '#000000',
//                                 formatter: function () {
//                                     return ''; // You can leave this blank if not needed
//                                 }
//                             }
//                         }
//                     }
//                 }
//             },
//             responsive: [{
//                 breakpoint: 480,
//                 options: {
//                     chart: {
//                         width: 200
//                     },
//                     legend: {
//                         position: 'top'
//                     }
//                 }
//             }],
//             stroke: {
//                 show: false
//             }
//         };

//         // Initialize the chart and store the instance in epiChart
//         epiChart = new ApexCharts(document.querySelector("#chartdiv5"), options);
//         epiChart.render();
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// }

    //replaceEpiChart(epiDonutChart);

    async function epiLine() {
        am4core.ready(async function () {

            var startDateValue = document.getElementById("startDateEPI").value;
            var endDateValue = document.getElementById("endDateEPI").value;
             const isValid = await validateDateRange(startDateValue, endDateValue);
    if (!isValid) {
        // If the date range is invalid, stop execution
        return;
    }
            const waters = ['HVAC', 'UPS', 'RP_LTG'];
            let waterValues = [];
            // const url = "https://localhost";

            // Fetch data asynchronously for each scope
            for (let scope of waters) {
                const urlToFetch = `${url}/obix/histories/Barclays_Sup/EPI_${scope}_Daily/~historyQuery?start=${startDateValue}T23:58:00.000+05:30&end=${endDateValue}T23:58:00.000+05:30`;
                console.log(urlToFetch);
                try {
                    const response = await fetch(urlToFetch);
                    console.log(response);
                    if (!response.ok) {
                        console.error(`Error fetching data for ${scope}: ${response.status} - ${response.statusText}`);
                        continue;
                    }

                const text = await response.text();

                // Parse the XML data
                    const parser = new DOMParser();
                    const xmlDoc = parser.parseFromString(text, "text/xml");
                    const objs = xmlDoc.getElementsByTagName("obj");

                    for (let i = 0; i < objs.length; i++) {
                        const obj = objs[i];
                        const abstime = obj.getElementsByTagName("abstime")[0];
                        const real = obj.getElementsByTagName("real")[0];

                        if (abstime && real) {
                            const dateText = abstime.getAttribute("val");
                            const valueText = real.getAttribute("val");

                            if (valueText && dateText) {
                                const value = parseFloat(valueText).toFixed(2);
                                const date = new Date(dateText);
                                const formattedDate = date.toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric"
                                });
                                const dateStr = date.toDateString();  // Use toDateString to compare without time

                                const existingEntry = waterValues.find(entry => entry.date.toDateString() === dateStr);

                                if (existingEntry) {
                                    existingEntry[scope] = parseFloat(value);
                                } else {
                                    waterValues.push({
                                        date: date,
                                        [scope]: parseFloat(value)
                                    });
                                }
                            }
                        }
                    }
                } catch (error) {
                    console.error(`Error fetching data for ${scope}: ${error.message}`);
                }
            }
            const flattenedData = waterValues.flat();
    if (checkDataAvailability(flattenedData, 'chartdiv5')) {
        return; // Exit if no data is available
    }
            // Themes begin
            am4core.useTheme(am4themes_animated);
            // Themes end

            // Create chart instance
            epiChart = am4core.create("chartdiv5", am4charts.XYChart);
            epiChart.paddingRight = 20;

            // Add data
            epiChart.data = waterValues;
            waterValues.forEach(item => {
                item.date = new Date(item.date).getTime();  // Convert to timestamp
                console.log("item date (timestamp): " + item.date);

                // Convert timestamp back to a readable date
                const formattedDate = new Date(item.date).toLocaleDateString("en-US", {
                    // year: "numeric",
                    month: "short",
                    day: "numeric"
                });
                item.date = formattedDate;
                console.log("Formatted item date: " + formattedDate);
            });


            // Create axes
            var categoryAxis = epiChart.xAxes.push(new am4charts.CategoryAxis());
            categoryAxis.dataFields.category = "date"; // Use 'date' instead of 'year'
            categoryAxis.renderer.minGridDistance = 80;
            // categoryAxis.renderer.grid.template.location = 2;
            // categoryAxis.startLocation = 1;
            // categoryAxis.endLocation = 1.5;
            categoryAxis.renderer.labels.template.horizontalCenter = "middle"; // Center labels
            categoryAxis.renderer.labels.template.verticalCenter = "middle"; // Center labels

            var valueAxis = epiChart.yAxes.push(new am4charts.ValueAxis());
            valueAxis.baseValue = 0;

            // Function to create series
            function createSeries(valueField, name, color) {
                var series = epiChart.series.push(new am4charts.LineSeries());
                series.dataFields.valueY = valueField;
                series.dataFields.categoryX = "date"; // Use 'date' instead of 'year'
                series.name = name;
                series.strokeWidth = 2;
                series.tensionX = 0.77;
                series.stroke = color;

                // Bullet to display tooltips
                var bullet = series.bullets.push(new am4charts.Bullet());
                bullet.tooltipText = "{valueY}";

                bullet.adapter.add("fill", function (fill, target) {
                    // If the value is negative, color the bullet red, else use the series color
                    if (target.dataItem.valueY < 0) {
                        return am4core.color("#FF0000"); // Red for negative values
                    }
                    return series.stroke; // Use the series stroke color (the color passed to createSeries)
                });

                return series;
            }
            epiChart.legend = new am4charts.Legend();
            epiChart.legend.position = "top";
            epiChart.legend.paddingBottom = 10;
            epiChart.legend.labels.template.maxWidth = 95;
            // Create three series with different data fields and colors
            createSeries("HVAC", "HVAC", am4core.color("#FFB200"));
            createSeries("UPS", "UPS", am4core.color("#667BC6"));
            createSeries("RP_LTG", "RT & LTG", am4core.color("#D1E9F6"));

            // Add scrollbar
            // var scrollbarX = new am4charts.XYChartScrollbar();
            // scrollbarX.series.push(chart.series.values[0]);  // Add the first series to the scrollbar
            // chart.scrollbarX = scrollbarX;
            // scrollbarX.height = 30;
            epiChart.scrollbarX = new am4core.Scrollbar();
            epiChart.scrollbarX.marginBottom = 20;

            epiChart.cursor = new am4charts.XYCursor();
            epiChart.logo.disabled = true;

        });
    }

    async function epiBarChart() {
        const scopeData = [[], [], []]; // Scope 1, Scope 2, Scope 3
        const last12MonthsData = getLast12Months1();
        console.log("bar " + last12MonthsData);

        for (const month of last12MonthsData) {
            const scopeUrls = [
                `${url}/obix/histories/Barclays_Sup/EPI_HVAC_Yearly/~historyQuery?start=${month.startDate}T23:59:59.000+05:30&limit=1`,
                `${url}/obix/histories/Barclays_Sup/EPI_UPS_Yearly/~historyQuery?start=${month.startDate}T23:59:59.000+05:30&limit=1`,
                `${url}/obix/histories/Barclays_Sup/EPI_RP_LTG_Yearly/~historyQuery?start=${month.startDate}T23:59:59.000+05:30&limit=1`
            ];

            for (let i = 0; i < scopeUrls.length; i++) {
                try {
                    const response = await fetch(scopeUrls[i]);
                    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

                    const text = await response.text();
                    const parser = new DOMParser();
                    const xml = parser.parseFromString(text, "application/xml");

                    const records = xml.getElementsByTagName("list");
                    for (let record of records) {
                        // Fetch `abstime` and `real` values
                        const abstime = record.getElementsByTagName("abstime")[0]?.getAttribute("val");
                        const realValue = record.getElementsByTagName("real")[0]?.getAttribute("val");

                        // Match the `abstime` with the corresponding `month.startDate`
                        if (abstime && realValue) {
                            const abstimeDate = new Date(abstime);
                            const formattedAbstime = `${abstimeDate.getFullYear()}-${String(abstimeDate.getMonth() + 1).padStart(2, '0')}-${String(abstimeDate.getDate()).padStart(2, '0')}`;

                            if (formattedAbstime === month.startDate) {
                                scopeData[i].push(parseFloat(realValue).toFixed(2));
                            }
                        }
                    }
                } catch (error) {
                    console.error(`Error fetching data for scope ${i + 1}:`, error);
                    scopeData[i].push(null); // Push null to maintain alignment
                }
            }
        }
        const flattenedData = scopeData.flat();
    if (checkDataAvailability(flattenedData, 'chartdiv5')) {
        return; // Exit if no data is available
    }
        const existingStyle = document.getElementById('chartdiv5-styles');
            if (existingStyle) {
                existingStyle.remove();
            }
        // Prepare options for the new ApexCharts bar chart
        const options = {
            series: [
                { name: 'HVAC', data: scopeData[0] },
                { name: 'UPS', data: scopeData[1] },
                { name: 'RT & LTG', data: scopeData[2] }
            ],
            chart: {
                type: 'bar',
                height: '100%',
                stacked: false,
                toolbar: {
                    show: false // Hide the toolbar with export options
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false, // Vertical bars
                    columnWidth: '80%', // Increase the width of the bars
                    endingShape: 'rounded',
                    groupedPadding: 0
                }
            },
            colors: ["#FFB200", "#667BC6", "#D1E9F6"], // Colors for HVAC, UPS, RT & LTG
            dataLabels: {
                enabled: false, // Disable the values on top of the bars
            },
            xaxis: {
                categories: getLast12Months()
            },
            // yaxis: {
            //     title: {
            //         text: 'Emissions (in metric tons)', // Y-axis title for emissions
            //     }
            // },
            grid: {
                show: true,
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return val; // Customize tooltip text
                    }
                }
            },
            legend: {
                position: 'top',
                horizontalAlign: 'center',
                labels: {
                    colors: ['#000000'],
                }
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent'] // Show the borders between columns
            },
            fill: {
                opacity: 1 // Ensure the bars are fully filled
            },
        };

        // Create and render the new ApexCharts instance
        epiChart = new ApexCharts(document.querySelector("#chartdiv5"), options);
        await epiChart.render(); // Wait for the chart to render

    }

    async function lineChartMonthlyEpi() {
        am4core.ready(async function () {

            const today = new Date();
            const currentMonth = today.getMonth();
            const startDate = new Date(today.getFullYear(), currentMonth - 1, 1);
            const endDate = new Date(today.getFullYear(), currentMonth, 0);

            const startISO = `${startDate.getFullYear()}-${String(startDate.getMonth() + 1).padStart(2, '0')}-${String(startDate.getDate()).padStart(2, '0')}`;
            const endISO = `${endDate.getFullYear()}-${String(endDate.getMonth() + 1).padStart(2, '0')}-${String(endDate.getDate()).padStart(2, '0')}`;

            const waters = ['HVAC', 'UPS', 'RP_LTG'];
            let waterValues = [];

            // Fetch data asynchronously for each scope
            for (let scope of waters) {
                const urlToFetch = `${url}/obix/histories/Barclays_Sup/EPI_${scope}_Daily/~historyQuery?start=${startISO}T23:59:59.000+05:30&end=${endISO}T23:59:59.000+05:30`;
                console.log(urlToFetch);
                try {
                    const response = await fetch(urlToFetch);
                    console.log(response);
                    if (!response.ok) {
                        console.error(`Error fetching data for ${scope}: ${response.status} - ${response.statusText}`);
                        continue;
                    }

                    const text = await response.text();
                    const parser = new DOMParser();
                    const xmlDoc = parser.parseFromString(text, "text/xml");
                    const objs = xmlDoc.getElementsByTagName("obj");

                    for (let i = 0; i < objs.length; i++) {
                        const obj = objs[i];
                        const abstime = obj.getElementsByTagName("abstime")[0];
                        const real = obj.getElementsByTagName("real")[0];

                        if (abstime && real) {
                            const dateText = abstime.getAttribute("val");
                            const valueText = real.getAttribute("val");

                            if (valueText && dateText) {
                                const value = parseFloat(valueText).toFixed(2);
                                const date = new Date(dateText);
                                const formattedDate = date.toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric"
                                });
                                const dateStr = date.toDateString();  // Use toDateString to compare without time

                                const existingEntry = waterValues.find(entry => entry.date.toDateString() === dateStr);

                                if (existingEntry) {
                                    existingEntry[scope] = parseFloat(value);
                                } else {
                                    waterValues.push({
                                        date: date,
                                        [scope]: parseFloat(value)
                                    });
                                }
                            }
                        }
                    }
                } catch (error) {
                    console.error(`Error fetching data for ${scope}: ${error.message}`);
                }
            }
            const flattenedData = waterValues.flat();
    if (checkDataAvailability(flattenedData, 'chartdiv5')) {
        return; // Exit if no data is available
    }
            // Themes begin
            am4core.useTheme(am4themes_animated);
            // Themes end

            // Create chart instance
            epiChart = am4core.create("chartdiv5", am4charts.XYChart);
            epiChart.paddingRight = 20;

            // Add data
            epiChart.data = waterValues;
            waterValues.forEach(item => {
                item.date = new Date(item.date).getTime();  // Convert to timestamp
                console.log("item date (timestamp): " + item.date);

                // Convert timestamp back to a readable date
                const formattedDate = new Date(item.date).toLocaleDateString("en-US", {
                    // year: "numeric",
                    month: "short",
                    day: "numeric"
                });
                item.date = formattedDate;
                console.log("Formatted item date: " + formattedDate);
            });


            // Create axes
            var categoryAxis = epiChart.xAxes.push(new am4charts.CategoryAxis());
            categoryAxis.dataFields.category = "date"; // Use 'date' instead of 'year'
            categoryAxis.renderer.minGridDistance = 80;
            // categoryAxis.renderer.grid.template.location = 2;
            // categoryAxis.startLocation = 1;
            // categoryAxis.endLocation = 1.5;
            categoryAxis.renderer.labels.template.horizontalCenter = "middle"; // Center labels
            categoryAxis.renderer.labels.template.verticalCenter = "middle"; // Center labels

            var valueAxis = epiChart.yAxes.push(new am4charts.ValueAxis());
            valueAxis.baseValue = 0;

            // Function to create series
            function createSeries(valueField, name, color) {
                var series = epiChart.series.push(new am4charts.LineSeries());
                series.dataFields.valueY = valueField;
                series.dataFields.categoryX = "date"; // Use 'date' instead of 'year'
                series.name = name;
                series.strokeWidth = 2;
                series.tensionX = 0.77;
                series.stroke = color;

                // Bullet to display tooltips
                var bullet = series.bullets.push(new am4charts.Bullet());
                bullet.tooltipText = "{valueY}";

                bullet.adapter.add("fill", function (fill, target) {
                    // If the value is negative, color the bullet red, else use the series color
                    if (target.dataItem.valueY < 0) {
                        return am4core.color("#FF0000"); // Red for negative values
                    }
                    return series.stroke; // Use the series stroke color (the color passed to createSeries)
                });

                return series;
            }

            epiChart.legend = new am4charts.Legend();
            epiChart.legend.position = "top";
            epiChart.legend.paddingBottom = 10;
            epiChart.legend.labels.template.maxWidth = 95;
            // Create three series with different data fields and colors
            createSeries("scope1date", "HVAC", am4core.color("#FFB200"));
            createSeries("scope2date", "UPS", am4core.color("#667BC6"));
            createSeries("scope3date", "RT & LTG", am4core.color("#D1E9F6"));

            // Add scrollbar
            // var scrollbarX = new am4charts.XYChartScrollbar();
            // scrollbarX.series.push(chart.series.values[0]);  // Add the first series to the scrollbar
            // chart.scrollbarX = scrollbarX;
            // scrollbarX.height = 30;
            epiChart.scrollbarX = new am4core.Scrollbar();
            epiChart.scrollbarX.marginBottom = 20;

            epiChart.cursor = new am4charts.XYCursor();
            epiChart.logo.disabled = true;

        });
    }

    $("#startDateEPI, #endDateEPI").on("change", async function () {
      stopIntervalEpi()
        await replaceEpiChart(epiLine);
    });
    $("#sav_daily_epi").on("click", async function () {
        clearDateInputsEpi();
        //startInterval("epiDonutChart", 1000);
        chartIntervalEpi = setInterval(() => replaceIndoorChart(epiDonutChart), 60000);
    });
    $("#sav_monthly_epi").on("click", async function () {
        clearDateInputsEpi();
        stopIntervalEpi()
        await replaceEpiChart(lineChartMonthlyEpi);
    });
    $("#sav_yearly_epi").on("click", async function () {
        await replaceEpiChart(epiBarChart);
        stopIntervalEpi()
        clearDateInputsEpi();
    });

    var epiChart1;
    async function epiColumnChart() {
        const scopes = ['Floor1', 'Floor2'];
        let hvacData = [];
        let upsData = [];
        let rtltgData = [];

        // Loop through each scope to fetch and process data
        for (let scope of scopes) {
            try {
                const response = await fetch(`${url}/obix/config/Barclays/EPI/${scope}`);
                const text = await response.text();

                // Parse the XML response
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(text, "application/xml");

                // Extract values for ups, hvac, and rtltg
                const ups = parseFloat(xmlDoc.querySelector('ref[name="ups"]').getAttribute('display').split(' ')[0]);
                const hvac = parseFloat(xmlDoc.querySelector('ref[name="hvac"]').getAttribute('display').split(' ')[0]);
                const rtltg = parseFloat(xmlDoc.querySelector('ref[name="rt$26ltg"]').getAttribute('display').split(' ')[0]);

                // Store the data for each scope
                hvacData.push(hvac);
                upsData.push(ups);
                rtltgData.push(rtltg);
            } catch (error) {
                console.error(`Error fetching data for ${scope}:`, error);
            }
        }

        if (epiChart1 instanceof ApexCharts) {
            console.log("Pie chart destroyed");
            epiChart1.destroy(); // Dispose the existing chart
        }
        var options = {
            series: [{
                name: 'HVAC',
                data: hvacData // Data for HVAC (Floor 1, Floor 2)
            }, {
                name: 'UPS',
                data: upsData // Data for UPS (Floor 1, Floor 2)
            }, {
                name: 'RT & LTG',
                data: rtltgData // Data for RT & LTG (Floor 1, Floor 2)
            }],
            chart: {
                height: 280,
                type: 'bar',
                toolbar: {
                    show: false // Disable the toolbar
                },
                offsetY: 30
            },
            plotOptions: {
                bar: {
                    borderRadius: 10,
                    dataLabels: {
                        position: 'top', // Show data labels on top
                    },
                    columnWidth: '45%', // Set column width for comparison
                    endingShape: 'rounded' // Rounded edges for a smooth look
                }
            },
            dataLabels: {
                enabled: true,
                formatter: function (val) {
                    return val + "%"; // Show percentage symbol next to data
                },
                offsetY: -30,
                style: {
                    fontSize: '12px',
                    colors: ["#304758"]
                }
            },
            xaxis: {
                categories: ["Floor 1", "Floor 2"], // X-axis now has Floor 1 and Floor 2
                position: 'bottom',
                axisBorder: {
                    show: false // Hide bottom axis border
                },
                axisTicks: {
                    show: false // Hide ticks for a cleaner look
                },
                crosshairs: {
                    fill: {
                        type: 'gradient',
                        gradient: {
                            colorFrom: '#D8E3F0',
                            colorTo: '#BED1E6',
                            stops: [0, 100],
                            opacityFrom: 0.4,
                            opacityTo: 0.5,
                        }
                    }
                },
                tooltip: {
                    enabled: true, // Show tooltips on x-axis hover
                }
            },
            yaxis: {
                axisBorder: {
                    show: false // Hide y-axis border
                },
                axisTicks: {
                    show: false, // Hide ticks on y-axis
                },
                labels: {
                    show: false, // Hide y-axis labels for a cleaner look
                    formatter: function (val) {
                        return val; // Append percentage symbol to y-axis values
                    }
                }
            },
            legend: {
                position: 'top', // Place the legend on top
                horizontalAlign: 'center', // Center align the legend
                offsetY: 20
            },
            colors: ['#FFB200', '#667BC6', '#D1E9F6'], // Custom colors for HVAC, UPS, RT & LTG
            grid: {
                padding: {
                    left: 10,
                    right: 10
                }
            },
        };

        // Select the div where the chart should render
        epiChart1 = new ApexCharts(document.querySelector("#epiBarChart"), options);
        await epiChart1.render();
    }

    $('#epiFloor1').on("click", async function (event) {
        event.stopPropagation();
        console.log("epiFloor1 clicked");
        $(".epiBar").show();
        $(".epiDonut").hide();
        $("#epiFloor2").show();
        $(".epiBtn").hide();
       // $(this).hide();
        await epiColumnChart();
        setInterval(epiColumnChart, 3000);
    });
    $('#epiFloor2').on("click", async function (event) {
        event.stopPropagation();
        console.log("epiFloor2 clicked");
        $(".epiBar").hide();
        $(".epiDonut").show();
        $("#epiFloor1").show();
        $(".epiBtn").show();
       // $(this).hide();
    });


    /* EPI Index end */
    function getLast12Months() {
        const months = [];
        const currentDate = new Date();
        // Generate the last 12 months
        for (let i = 1; i <= 12; i++) {
            const monthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
        // Format as "Nov 2023"
        const formattedMonth = monthDate.toLocaleString('default', { month: 'short', year: 'numeric' });
        months.push(formattedMonth);
        }
        return months.reverse(); // Return the last 12 months
    }
    // function getLast12Months1() {
    //     const months = [];
    //     const now = new Date();

    //     for (let i = 11; i >= 0; i--) {
    //         const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth() - i, 1);

    //         const monthName = firstDayOfMonth.toLocaleString('default', {
    //             month: 'short'
    //         }); // Get abbreviated month name (e.g., Jan, Feb)

    //         const year = firstDayOfMonth.getFullYear();

    //         months.push({
    //             startDate: `${firstDayOfMonth.getFullYear()}-${String(firstDayOfMonth.getMonth() + 1).padStart(2, '0')}-${String(firstDayOfMonth.getDate()).padStart(2, '0')}`,
    //             monthName: `${monthName} ${year}` // Add formatted month name
    //         });
    //     }
    //     //console.log("months " + months);
    //     return months;
    // }


    function getLast12Months1() {
        const months = [];
        const now = new Date();

        for (let i = 0; i <12; i++) {
            // Calculate the first day of the month for the current iteration
            const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth() - i, 1);

            // Push the formatted first day of the month (YYYY-MM-DD)
            months.push({
                startDate: `${firstDayOfMonth.getFullYear()}-${String(firstDayOfMonth.getMonth() + 1).padStart(2, '0')}-${String(firstDayOfMonth.getDate()).padStart(2, '0')}`
            });
        }

        return months;
    }
    // Example function to generate random data for each scope
    function getRandomData() {
        return Array.from({ length: 12 }, () => Math.floor(Math.random() * 100) + 20); // Random data for 12 months
    }
    async function showAlert(message1, message2) {
        // Set the first message for modalMessage1 in red
        document.getElementById("modalMessage").style.color = "red";
        document.getElementById("modalMessage").innerText = message1; // Set the message for modalMessage1

        // Set the second message for modalMessage in green
        document.getElementById("modalMessage1").style.color = "green";
        document.getElementById("modalMessage1").innerText = message2; // Set the message for modalMessage

        // Show the modal
        var modal = new bootstrap.Modal(document.getElementById('staticBackdrop'));
        modal.show();
        // clearDateInputs();
        // clearDateInputsWater();

    }

    async function validateDateRange(startDate, endDate) {
        var today = new Date(); // Current date
        var limitDate = new Date('2024-08-31'); // Limit date (hardcoded)
        startDate = new Date(startDate);
    endDate = new Date(endDate);
        //resetCharts();

        // Check if the start date is after today's date
        if (startDate > today) {
            console.log(startDate);
            showAlert('Start date cannot be in the future.', 'Please select a valid start date.');
            return false;
        }

        // Check if the end date is after today's date
        if (endDate > today) {
            console.log(endDate);
            showAlert('End date cannot be in the future.', 'Please select a valid end date.');
            return false;
        }

        // Check if the start date is before the limit date
        if (startDate < limitDate) {
            showAlert('Data for selected start date is not available.', 'Please select a date on or after August 31, 2024.');
            return false;
        }

        // Check if the end date is before the limit date
        if (endDate < limitDate) {
            showAlert('Data for selected end date is not available.', 'Please select a date on or after August 31, 2024.');
            return false;
        }

        if (startDate >= endDate) {
            showAlert('Start Date And End Date Can Not Be Same', 'Please select a valid date range.');
            return false;
        }

        // Calculate the difference in time
        var timeDiff = endDate - startDate;

        // Calculate the difference in days
        var dayDiff = timeDiff / (1000 * 3600 * 24);

        // Validate the number of selected days
        if (dayDiff > 31) {
            showAlert('You cannot select more than 31 days.', 'Please select a valid date range.');
            return false;
        }

        return true; // All validations passed
    }
//     async function validateDateRange(startDate, endDate) {
//     var today = new Date(); // Current date

//     // Convert startDate and endDate to Date objects if they are not already
//     startDate = new Date(startDate);
//     endDate = new Date(endDate);

//     // Normalize time components (set to 00:00:00) to ensure only the date is compared
//     startDate.setHours(0, 0, 0, 0);
//     endDate.setHours(0, 0, 0, 0);
//     today.setHours(0, 0, 0, 0);

//     // Check if the start date is after today's date
//     if (startDate > today) {
//         showAlert('Start date cannot be in the future.', 'Please select a valid start date.');
//         return false;
//     }

//     // Check if the end date is after today's date
//     if (endDate > today) {
//         showAlert('End date cannot be in the future.', 'Please select a valid end date.');
//         return false;
//     }

//     // Check if the start date and end date are the same
//     if (startDate.getTime() === endDate.getTime()) {
//         showAlert('Start Date And End Date Cannot Be The Same', 'Please select a valid date range.');
//         return false;
//     }

//     // Calculate the difference in time
//     var timeDiff = endDate - startDate;

//     // Calculate the difference in days
//     var dayDiff = timeDiff / (1000 * 3600 * 24);

//     // Validate the number of selected days
//     if (dayDiff > 31) {
//         showAlert('You cannot select more than 31 days.', 'Please select a valid date range.');
//         return false;
//     }

//     return true; // All validations passed
// }

function normalizeDate(date) {
    const normalizedDate = new Date(date);
    normalizedDate.setMilliseconds(0);  // Remove milliseconds
    normalizedDate.setSeconds(0);      // Ignore seconds as well
    return normalizedDate;
}

// Reusable function to check data availability and display message
function checkDataAvailability(scopeValues, elementId) {
    if (scopeValues.length === 0 || scopeValues.every(value => value === 0 || value === null)) {
        // Show a message when no data is available or all values are 0
        document.querySelector(`#${elementId}`).innerHTML = "<p style='text-align: center; display: flex; justify-content: center; align-items: center; height: 100%;'>No data available</p>";
        return true; // Return true to indicate no data
    }
    return false; // Return false if data is available
}

 // Check and update #otherElementId

// const chartIntervalCo = {}; // Store intervals by function name

// // Function to start an interval for a specific function
// function startIntervalCo(functionName, intervalTime) {
//     // Clear any existing interval for the function
//     stopInterval(functionName);

//     // Start a new interval and save its ID
//     chartIntervalCo[functionName] = setInterval(() => {
//         if (typeof window[functionName] === "function") {
//             window[functionName]();
//         } else {
//             console.error(`Function ${functionName} does not exist.`);
//         }
//     }, intervalTime);

//     console.log(`Interval started for function: ${functionName}`);
// }

// Function to stop an interval for a specific function
// function stopIntervalCo(functionName) {
//     if (chartIntervalCo[functionName]) {
//         clearInterval(chartIntervalCo[functionName]);
//         delete chartIntervals[functionName];
//         console.log(`Interval stopped for function: ${functionName}`);
//     } else {
//         console.warn(`No active interval for function: ${functionName}`);
//     }
// }


    async function clearDateInputs() {
        $('#startDate').val(''); // Clear start date
        $('#endDate').val('');   // Clear end date
    }
    async function clearDateInputsWater() {
        $('#startDateWater').val(''); // Clear start date
        $('#endDateWater').val('');   // Clear end date
    }
    async function clearDateInputsPower() {
        $("#startDatePower").val('');
        $("#endDatePower").val('');
    }
    async function clearDateInputsOccupancy() {
        $("#startDateOccupancy").val('');
        $("#endDateOccupancy").val('');
    }
    async function clearDateInputsAqi() {
        $("#startDateIAQ").val('');
        $("#endDateIAQ").val('');
    }
    async function clearDateInputsEpi() {
        $("#startDateEPI").val('');
        $("#endDateEPI").val('');
    }
});
