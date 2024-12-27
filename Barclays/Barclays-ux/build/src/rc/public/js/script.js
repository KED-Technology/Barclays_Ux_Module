function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/* co2 emmision */
var emissionChart; // Global variable to hold the current chart instance

// Function to create a pie chart
// function pieChart() {
//     // Only dispose the existing chart if it exists
//     if (emissionChart) {
//         if (emissionChart instanceof ApexCharts) {
//             console.log("Pie chart destroyed");
//             emissionChart.destroy(); // Dispose the existing chart
//         } else if (emissionChart instanceof AmCharts.AmChart) {
//             console.log("Pie chart destroyed");
//             emissionChart.clear(); // Clear the existing AmCharts instance
//         } else if (emissionChart instanceof am4charts.XYChart) {
//             console.log("Pie chart destroyed");
//             emissionChart.dispose(); // Dispose the existing am4charts instance
//         }
//         clearDateInputs();
//     }

//     // Pie chart options
//     var options = {
//         series: [80, 60, 50],
//         chart: {
//             height: '100%',
//             type: 'radialBar',
//         },
//         plotOptions: {
//             radialBar: {
//                 offsetY: 30,
//                 offsetX: -10,
//                 startAngle: -180,
//                 endAngle: 90,
//                 track: {
//                     background: '#f5f5f5',
//                     strokeWidth: '100%',
//                     margin: 4
//                 },
//                 hollow: {
//                     margin: 0,
//                     size: '50%',
//                     background: 'transparent',
//                 },
//                 dataLabels: {
//                     name: { show: false },
//                     value: { show: false }
//                 }
//             }
//         },
//         colors: ["#FFB22C", "#A4CE95", "#FFD93D"],
//         fill: { opacity: [0.85, 0.85, 0.85] },
//         labels: ['Scope 1', 'Scope 2', 'Scope 3'],
//         legend: {
//             show: true,
//             floating: true,
//             fontSize: '16px',
//             position: 'right',
//             offsetX: 10,
//             offsetY: -20,
//             labels: { useSeriesColors: true },
//             markers: { size: 0 },
//             formatter: function(seriesName, opts) {
//                 return seriesName + ": " + opts.w.globals.series[opts.seriesIndex] + "%";
//             },
//             itemMargin: { vertical: -2 },
//         },
//         responsive: [{
//             breakpoint: 480,
//             options: { legend: { show: true } }
//         }]
//     };

//     // Create the new pie chart
//     emissionChart = new ApexCharts(document.querySelector("#chartdiv"), options);
//     emissionChart.render();
// }
// pieChart();

function pieChart() {
  // Only dispose the existing chart if it exists
  if (emissionChart) {
    if (emissionChart instanceof ApexCharts) {
      console.log("ApexCharts Pie chart destroyed");
      emissionChart.destroy(); // Dispose the existing ApexCharts instance
    } else if (emissionChart instanceof AmCharts.AmChart) {
      console.log("AmCharts Pie chart destroyed");
      emissionChart.clear(); // Clear the existing AmCharts instance
    } else if (emissionChart instanceof am4charts.XYChart) {
      console.log("am4charts Pie chart destroyed");
      emissionChart.dispose(); // Dispose the existing am4charts instance
    }
    clearDateInputs();
  }

  // Append a style block to customize the text appearance in the chart
  var style = document.createElement('style');
  style.innerHTML = "\n        #chartdiv .apexcharts-text {\n            fill: #000000; /* Change this to your desired color */\n            font-weight: bold; /* Ensure bold text */\n        }\n    ";
  document.head.appendChild(style);

  // Calculate total value from the series
  var seriesValues = [80, 60, 50]; // Example scope values
  var totalValue = seriesValues.reduce(function (a, b) {
    return a + b;
  }, 0); // Calculate total value

  // Radial bar chart options
  var options = {
    series: seriesValues,
    // Use the calculated series values
    chart: {
      height: '100%',
      type: 'radialBar' // Set chart type to radialBar
    },
    plotOptions: {
      radialBar: {
        offsetY: 30,
        offsetX: -10,
        startAngle: -180,
        // Define starting angle
        endAngle: 90,
        // Define ending angle
        track: {
          background: '#f5f5f5',
          // Track background color
          strokeWidth: '100%',
          margin: 4 // Margin between tracks
        },
        hollow: {
          margin: 0,
          size: '50%',
          // Hollow size
          background: 'transparent'
        },
        dataLabels: {
          show: true,
          name: {
            show: true,
            fontSize: '30px',
            fontWeight: 'bold',
            color: '#000000',
            formatter: function formatter() {
              return 'Total'; // Static 'Total' label in the center
            }
          },
          value: {
            show: true,
            fontSize: '30px',
            fontWeight: 'bold',
            color: '#000000',
            formatter: function formatter() {
              return totalValue; // Display static total value in the center
            }
          },
          total: {
            show: true,
            label: 'Total',
            fontSize: '30px',
            fontWeight: 'bold',
            color: '#000000',
            formatter: function formatter() {
              return totalValue; // Static total value
            }
          }
        }
      }
    },
    colors: ["#FFB22C", "#A4CE95", "#FFD93D"],
    // Segment colors
    fill: {
      opacity: [0.85, 0.85, 0.85]
    },
    // Set opacity for each segment
    labels: ['Scope 1', 'Scope 2', 'Scope 3'],
    // Labels for each segment
    legend: {
      show: true,
      floating: true,
      fontSize: '16px',
      position: 'right',
      // Position legend on the right
      offsetX: 10,
      offsetY: -20,
      labels: {
        useSeriesColors: true
      },
      // Use colors from the series
      markers: {
        size: 0
      },
      // No markers in the legend
      // formatter: function(seriesName, opts) {
      //     return seriesName + ": " + opts.w.globals.series[opts.seriesIndex] + "%"; // Custom legend formatting
      // },
      itemMargin: {
        vertical: -2
      } // Margin between legend items
    },
    tooltip: {
      enabled: true,
      shared: false,
      // Disable shared tooltip
      style: {
        fontSize: '16px' // Optional: set font size for the tooltip text
      },
      custom: function custom(_ref) {
        var series = _ref.series,
          seriesIndex = _ref.seriesIndex,
          w = _ref.w;
        var name = w.globals.labels[seriesIndex]; // Get the label
        var value = series[seriesIndex]; // Get the value

        // Define background colors for each series
        var backgroundColors = ['#FFB22C',
        // Color for Series 1
        '#A4CE95',
        // Color for Series 2
        '#FFD93D' // Color for Series 3 (if applicable)
        ];

        // Get the background color based on the series index
        var backgroundColor = backgroundColors[seriesIndex] || '#F7F7F7'; // Default color if index is out of bounds

        return "<div style=\"color: #00000; background: ".concat(backgroundColor, "; padding: 8px; border-radius: 4px; box-shadow: 0 2px 10px rgba(0,0,0,0.2);\">\n                            <strong style=\"color: #000000;\">").concat(name, "</strong>: <span style=\"color: #000000;\">").concat(value, "%</span>\n                        </div>"); // Show name and value in tooltip
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          show: true
        }
      } // Show legend on small screens
    }]
  };

  // Create and render the new radial bar chart
  emissionChart = new ApexCharts(document.querySelector("#chartdiv"), options);
  emissionChart.render();
}

// Ensure the pieChart function is called to render the chart
pieChart();

// function pieChart() {
//     // Dispose of the existing chart if it exists
//     if (emissionChart) {
//         if (emissionChart instanceof ApexCharts) {
//             console.log("Pie chart destroyed");
//             emissionChart.destroy(); // Dispose of the existing chart
//         }
//         clearDateInputs();
//     }

//     const style = document.createElement('style');
//     style.innerHTML = `
//         #chartdiv .apexcharts-text {
//             fill: #000000; /* Change this to your desired color */
//             font-weight: bold; /* Corrected property name */
//         }
//     `;
//     document.head.appendChild(style);

//     // Data and total calculation
//     const seriesValues = [80, 60, 50]; // Example scope values
//     const totalValue = seriesValues.reduce((a, b) => a + b, 0); // Calculate total value

//     // Pie chart options
//     var options = {
//         series: seriesValues, // Use the calculated series values
//         chart: {
//             height: '100%',
//             type: 'donut', // Set chart type to donut
//             animations: {
//                 enabled: false, // Disable animations (includes hover)
//             }
//         },
//         plotOptions: {
//             pie: {
//                 donut: {
//                     labels: {
//                         show: true,
//                         name: {
//                             show: false,
//                             fontSize: '30px',
//                             fontWeight: 'bold',
//                             color: '#000000',
//                         },
//                         value: {
//                             show: true,
//                             fontSize: '30px',
//                             fontWeight: 'bold',
//                             color: '#000000',
//                             formatter: function () {
//                                 return totalValue; // Display static total value
//                             }
//                         },
//                         total: {
//                             show: true,
//                             label: '',
//                             fontSize: '30px',
//                             fontWeight: 'bold',
//                             color: '#000000',
//                             formatter: function () {
//                                 return totalValue; // Static total, no hover effect
//                             }
//                         }
//                     }
//                 },
//                 expandOnClick: false, // Disable the expand-on-click effect
//             }
//         },
//         colors: ["#FFB22C", "#A4CE95", "#FFD93D"],
//         labels: ['Scope 1', 'Scope 2', 'Scope 3'], // Labels for the segments
//         legend: {
//             show: true,
//             floating: true,
//             fontSize: '16px',
//             position: 'right',
//             offsetX: 10,
//             offsetY: -20,
//             labels: { useSeriesColors: true },
//             markers: { size: 0 },
//             formatter: function(seriesName, opts) {
//                 return seriesName + ": " + opts.w.globals.series[opts.seriesIndex] + "%";
//             },
//             itemMargin: { vertical: -2 },
//         },
//         tooltip: {
//             enabled: true,
//             shared: false, // Disable shared tooltip
//             custom: function({ series, seriesIndex, w }) {
//                 const name = w.globals.labels[seriesIndex]; // Get the label
//                 const value = series[seriesIndex]; // Get the value
//                 return `<div>${name}: ${value}%</div>`; // Show name and value on hover
//             },
//         },
//         responsive: [{
//             breakpoint: 480,
//             options: { legend: { show: true } }
//         }]
//     };

//     // Create the new pie chart
//     emissionChart = new ApexCharts(document.querySelector("#chartdiv"), options);
//     emissionChart.render();
// }

// Ensure to call the pieChart function to render the chart
// pieChart();
function showAlert(message) {
  document.getElementById("modalMessage1").style.color = "green";
  document.getElementById("modalMessage").innerText = message;
  document.getElementById("modalMessage").style.color = "red";
  var modal = new bootstrap.Modal(document.getElementById('staticBackdrop'));
  modal.show();
}

// Function to create a line chart for date range
function lineChart2() {
  var startDateValue = document.getElementById("startDate").value;
  var endDateValue = document.getElementById("endDate").value;
  if (startDateValue && endDateValue) {
    var _generateChartData = function _generateChartData(startDate, endDate) {
      var chartData = [];
      var visits = 1200;
      var hits = 1220;
      var views = 1240;
      var currentDate = new Date(startDate);
      while (currentDate <= endDate) {
        visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
        hits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
        views += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
        chartData.push({
          date: new Date(currentDate),
          scope1: visits,
          scope2: hits,
          scope3: views
        });
        currentDate.setDate(currentDate.getDate() + 1);
      }
      return chartData;
    };
    var zoomChart = function zoomChart() {
      emissionChart.zoomToIndexes(emissionChart.dataProvider.length - 70, emissionChart.dataProvider.length - 1);
    };
    var startDate = new Date(startDateValue);
    var endDate = new Date(endDateValue);
    if (startDate >= endDate) {
      showAlert('Start Date And End Date Can Not Be Same');
      return;
    }

    // Calculate the difference in time
    var timeDiff = endDate - startDate;

    // Calculate the difference in days
    var dayDiff = timeDiff / (1000 * 3600 * 24);

    // Validate the number of selected days
    if (dayDiff > 31) {
      showAlert('You cannot select more than 31 days.');
      return;
    }
    var chartData = _generateChartData(startDate, endDate);
    if (chartData.length === 0) {
      alert('No data to display for the selected range');
      return;
    }
    if (emissionChart) {
      if (emissionChart instanceof ApexCharts) {
        console.log("Pie chart destroyed");
        emissionChart.destroy(); // Dispose the existing chart
      } else if (emissionChart instanceof AmCharts.AmChart) {
        console.log("Pie chart destroyed");
        emissionChart.clear(); // Clear the existing AmCharts instance
      } else if (emissionChart instanceof am4charts.XYChart) {
        console.log("Pie chart destroyed");
        emissionChart.dispose(); // Dispose the existing am4charts instance
      }
    }
    emissionChart = AmCharts.makeChart("chartdiv", {
      "type": "serial",
      "theme": "white",
      "color": "#000",
      "legend": {
        "useGraphSettings": true,
        "color": "#000",
        "position": "top",
        "align": "left",
        "marginBottom": 10,
        "valueText": ""
      },
      "dataProvider": chartData,
      "synchronizeGrid": true,
      "valueAxes": [{
        "id": "v1",
        "axisColor": "#000",
        "axisThickness": 0.5,
        "axisAlpha": 1,
        "position": "left"
      }],
      "graphs": [{
        "valueAxis": "v1",
        "lineColor": "#FFB22C",
        "bulletBorderThickness": 1,
        "hideBulletsCount": 30,
        "title": "Scope 1",
        "valueField": "scope1",
        "fillAlphas": 0,
        "type": "smoothedLine",
        "balloonText": "<span style='font-size:13px;'>[[value]]</span>",
        // Custom font size
        "balloon": {
          "adjustBorderColor": false,
          "color": "#000",
          // Text color
          "fillColor": "#FFB22C",
          // Background color (same as line color)
          "borderColor": "#FFB22C"
        }
      }, {
        "valueAxis": "v1",
        "lineColor": "#A4CE95",
        "bulletBorderThickness": 1,
        "hideBulletsCount": 30,
        "title": "Scope 2",
        "valueField": "scope2",
        "fillAlphas": 0,
        "type": "smoothedLine",
        "balloonText": "<span style='font-size:13px;'>[[value]]</span>",
        // Custom font size
        "balloon": {
          "adjustBorderColor": false,
          "color": "#000",
          // Text color
          "fillColor": "#A4CE95",
          // Background color (same as line color)
          "borderColor": "#A4CE95"
        }
      }, {
        "valueAxis": "v1",
        "lineColor": "#FFD93D",
        "bulletBorderThickness": 1,
        "hideBulletsCount": 30,
        "title": "Scope 3",
        "valueField": "scope3",
        "fillAlphas": 0,
        "type": "smoothedLine",
        "balloonText": "<span style='font-size:13px;'>[[value]]</span>",
        // Custom font size
        "balloon": {
          "adjustBorderColor": false,
          "color": "#000",
          // Text color
          "fillColor": "#FFB22C",
          // Background color (same as line color)
          "borderColor": "#FFB22C"
        }
      }],
      "chartScrollbar": {
        "offset": 20
      },
      "chartCursor": {
        "cursorPosition": "mouse"
      },
      "categoryField": "date",
      "categoryAxis": {
        "parseDates": true,
        "axisColor": "#000",
        "minorGridEnabled": true
      },
      "export": {
        "enabled": true // Disable export menu
      }
    });
    emissionChart.addListener("dataUpdated", zoomChart);
    zoomChart();
  }
}
function lineChartMonthlyCo25() {
  // Get the current date
  var today = new Date();
  var currentMonth = today.getMonth();

  // Set startDate and endDate to the previous month
  var startDate = new Date(today.getFullYear(), currentMonth - 1, 1); // First day of the previous month
  var endDate = new Date(today.getFullYear(), currentMonth, 0); // Last day of the previous month

  // Generate chart data for the previous month
  var chartData = generateChartData(startDate, endDate);
  function generateChartData(startDate, endDate) {
    var chartData = [];
    var visits = 1200;
    var hits = 1220;
    var views = 1240;
    var currentDate = new Date(startDate);
    while (currentDate <= endDate) {
      visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
      hits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
      views += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
      chartData.push({
        date: new Date(currentDate),
        scope1: visits,
        scope2: hits,
        scope3: views
      });
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return chartData;
  }

  // Alert if no data exists
  if (chartData.length === 0) {
    alert('No data to display for the selected range');
    return;
  }

  // Destroy existing chart if it exists
  if (emissionChart) {
    if (emissionChart instanceof ApexCharts) {
      console.log("Pie chart destroyed");
      emissionChart.destroy(); // Dispose the existing chart
    } else if (emissionChart instanceof AmCharts.AmChart) {
      console.log("Pie chart destroyed");
      emissionChart.clear(); // Clear the existing AmCharts instance
    } else if (emissionChart instanceof am4charts.XYChart) {
      console.log("Pie chart destroyed");
      emissionChart.dispose(); // Dispose the existing am4charts instance
    }
  }

  // Create the line chart with the generated data for the previous month
  emissionChart = AmCharts.makeChart("chartdiv", {
    "type": "serial",
    "theme": "white",
    "color": "#000",
    "legend": {
      "useGraphSettings": true,
      "color": "#000",
      "position": "top",
      "align": "left",
      "marginBottom": 10,
      "valueText": ""
    },
    "dataProvider": chartData,
    "synchronizeGrid": true,
    "valueAxes": [{
      "id": "v1",
      "axisColor": "#000",
      "axisThickness": 0.5,
      "axisAlpha": 1,
      "position": "left"
    }],
    "graphs": [{
      "valueAxis": "v1",
      "lineColor": "#FFB22C",
      "bulletBorderThickness": 1,
      "hideBulletsCount": 30,
      "title": "Scope 1",
      "valueField": "scope1",
      "fillAlphas": 0,
      "type": "smoothedLine",
      "balloonText": "<span style='font-size:13px;'>[[value]]</span>",
      // Custom font size
      "balloon": {
        "adjustBorderColor": false,
        "color": "#000",
        // Text color
        "fillColor": "#FFB22C",
        // Background color (same as line color)
        "borderColor": "#FFB22C"
      }
    }, {
      "valueAxis": "v1",
      "lineColor": "#A4CE95",
      "bulletBorderThickness": 1,
      "hideBulletsCount": 30,
      "title": "Scope 2",
      "valueField": "scope2",
      "fillAlphas": 0,
      "type": "smoothedLine",
      "balloonText": "<span style='font-size:13px;'>[[value]]</span>",
      // Custom font size
      "balloon": {
        "adjustBorderColor": false,
        "color": "#000",
        // Text color
        "fillColor": "#A4CE95",
        // Background color (same as line color)
        "borderColor": "#A4CE95"
      }
    }, {
      "valueAxis": "v1",
      "lineColor": "#FFD93D",
      "bulletBorderThickness": 1,
      "hideBulletsCount": 30,
      "title": "Scope 3",
      "valueField": "scope3",
      "fillAlphas": 0,
      "type": "smoothedLine",
      "balloonText": "<span style='font-size:13px;'>[[value]]</span>",
      // Custom font size
      "balloon": {
        "adjustBorderColor": false,
        "color": "#000",
        // Text color
        "fillColor": "#FFB22C",
        // Background color (same as line color)
        "borderColor": "#FFB22C"
      }
    }],
    "chartScrollbar": {
      "offset": 20
    },
    "chartCursor": {
      "cursorPosition": "mouse"
    },
    "categoryField": "date",
    "categoryAxis": {
      "parseDates": true,
      "axisColor": "#000",
      "minorGridEnabled": true
    },
    "export": {
      "enabled": true // Disable export menu
    }
  });
  emissionChart.addListener("dataUpdated", zoomChart);
  zoomChart();
  function zoomChart() {
    emissionChart.zoomToIndexes(emissionChart.dataProvider.length - 70, emissionChart.dataProvider.length - 1);
  }
}

// Function to show the clustered bar chart
function showClusteredBarChart() {
  // Dispose of existing chart
  if (emissionChart) {
    console.log("Bar chart destroyed");
    if (emissionChart instanceof ApexCharts) {
      emissionChart.destroy();
    } else if (emissionChart instanceof AmCharts.AmChart) {
      emissionChart.clear(); // Clear AmCharts instance
    } else if (emissionChart instanceof am4charts.XYChart) {
      emissionChart.dispose(); // Dispose am4charts instance
    }
  }

  // Themes begin

  am4core.useTheme(am4themes_animated);
  emissionChart = am4core.create('chartdiv', am4charts.XYChart);
  emissionChart.padding(0, 0, 0, 0);
  emissionChart.colors.step = 2;
  emissionChart.legend = new am4charts.Legend();
  emissionChart.legend.position = 'top';
  emissionChart.legend.paddingBottom = 20;
  emissionChart.legend.labels.template.maxWidth = 95;
  emissionChart.legend.labels.template.fill = am4core.color('#000000');
  var xAxis = emissionChart.xAxes.push(new am4charts.CategoryAxis());
  xAxis.dataFields.category = 'category';
  xAxis.renderer.cellStartLocation = 0.2;
  xAxis.renderer.cellEndLocation = 0.8;
  xAxis.renderer.grid.template.location = 0;
  xAxis.renderer.labels.template.fill = am4core.color('#000000');
  xAxis.renderer.minGridDistance = 20;
  xAxis.renderer.labels.template.rotation = 270;
  xAxis.renderer.labels.template.horizontalCenter = "right";
  xAxis.renderer.labels.template.verticalCenter = "middle";
  var yAxis = emissionChart.yAxes.push(new am4charts.ValueAxis());
  yAxis.min = 0;
  yAxis.renderer.labels.template.fill = am4core.color('#000000');
  function createSeries(value, name, color) {
    var series = emissionChart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = value;
    series.dataFields.categoryX = "category";
    series.name = name;
    series.columns.template.fill = am4core.color(color);
    series.columns.template.stroke = am4core.color(color);
    series.tooltipText = '{name}: {valueY}';
    series.tooltip.background.fill = am4core.color('#000000');
    series.tooltip.label.fill = am4core.color('#ffffff');
    series.tooltip.pointerOrientation = 'vertical';
    series.tooltip.getFillFromObject = false;
    series.tooltip.getStrokeFromObject = false;
    var bullet = series.bullets.push(new am4charts.LabelBullet());
    bullet.interactionsEnabled = false;
    bullet.dy = 30;
    bullet.label.fill = am4core.color('#000000');
    return series;
  }
  emissionChart.data = [{
    category: 'Jan',
    first: 40,
    second: 55,
    third: 60
  }, {
    category: 'Feb',
    first: 30,
    second: 78,
    third: 69
  }, {
    category: 'Mar',
    first: 27,
    second: 40,
    third: 45
  }, {
    category: 'Apr',
    first: 50,
    second: 33,
    third: 22
  }, {
    category: 'May',
    first: 50,
    second: 33,
    third: 22
  }, {
    category: 'Jun',
    first: 50,
    second: 33,
    third: 22
  }, {
    category: 'Jul',
    first: 50,
    second: 33,
    third: 22
  }, {
    category: 'Aug',
    first: 50,
    second: 33,
    third: 22
  }, {
    category: 'Sep',
    first: 50,
    second: 33,
    third: 22
  }, {
    category: 'Oct',
    first: 50,
    second: 33,
    third: 22
  }, {
    category: 'Nov',
    first: 50,
    second: 33,
    third: 22
  }, {
    category: 'Dec',
    first: 50,
    second: 33,
    third: 22
  }];
  createSeries('first', 'Scope 1', '#FFB22C'); //["#FFB22C", "#A4CE95", "#FFD93D"],
  createSeries('second', 'Scope 2', '#A4CE95');
  createSeries('third', 'Scope 3', '#FFD93D');
  function arrangeColumns() {
    var series = emissionChart.series.getIndex(0);
    var w = 1 - xAxis.renderer.cellStartLocation - (1 - xAxis.renderer.cellEndLocation);
    if (series.dataItems.length > 1) {
      var x0 = xAxis.getX(series.dataItems.getIndex(0), "categoryX");
      var x1 = xAxis.getX(series.dataItems.getIndex(1), "categoryX");
      var delta = (x1 - x0) / emissionChart.series.length * w;
      if (am4core.isNumber(delta)) {
        var middle = emissionChart.series.length / 2;
        var newIndex = 0;
        emissionChart.series.each(function (series) {
          if (!series.isHidden && !series.isHiding) {
            series.dummyData = newIndex;
            newIndex++;
          } else {
            series.dummyData = emissionChart.series.indexOf(series);
          }
        });
        var visibleCount = newIndex;
        var newMiddle = visibleCount / 2;
        emissionChart.series.each(function (series) {
          var trueIndex = emissionChart.series.indexOf(series);
          var newIndex = series.dummyData;
          var dx = (newIndex - trueIndex + middle - newMiddle) * delta;
          series.animate({
            property: "dx",
            to: dx
          }, series.interpolationDuration, series.interpolationEasing);
          series.bulletsContainer.animate({
            property: "dx",
            to: dx
          }, series.interpolationDuration, series.interpolationEasing);
        });
      }
    }
  }
  var cursor = new am4charts.XYCursor();
  emissionChart.cursor = cursor;
  emissionChart.logo.disabled = true;
}

// Function to clear date inputs
function clearDateInputs() {
  document.getElementById('startDate').value = ''; // Clear start date
  document.getElementById('endDate').value = ''; // Clear end date
}
document.getElementById("sav_monthly_btn").addEventListener("click", function () {
  clearDateInputs();

  // Call the function to show the chart
  lineChartMonthlyCo25();
});
document.getElementById("sav_daily_btn").addEventListener("click", function () {
  clearDateInputs();
  pieChart();
});
document.getElementById("sav_yearly_btn").addEventListener("click", function () {
  clearDateInputs();
  showClusteredBarChart();
});
var buttons = document.querySelectorAll(".abc");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    pieChart();
  });
}
/* co2 emmision end */
/* water used end */
function pieChart1() {
  return _pieChart.apply(this, arguments);
}
function _pieChart() {
  _pieChart = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          am4core.ready(function () {
            // Themes begin
            am4core.useTheme(am4themes_animated);
            if (chart) {
              chart.destroy();
            }

            // Create chart instance
            var chart = am4core.create("chartdiv1", am4charts.PieChart);

            // Add data
            chart.data = [{
              "country": "Domestic",
              "litres": 800
            }, {
              "country": "Flushing",
              "litres": 600
            }];

            // Add and configure Series
            var pieSeries = chart.series.push(new am4charts.PieSeries());
            pieSeries.dataFields.value = "litres";
            pieSeries.dataFields.category = "country";

            // Set pie chart colors
            pieSeries.slices.template.stroke = am4core.color("transparent");
            pieSeries.slices.template.strokeOpacity = 0;

            // Example of setting colors for each slice
            pieSeries.colors.list = [am4core.color("#39A7FF"),
            // Lithuania
            am4core.color("#C65BCF")];
            pieSeries.ticks.template.disabled = true;
            pieSeries.alignLabels = false;
            pieSeries.labels.template.text = "{value.percent.formatNumber('#.0')}%";
            pieSeries.labels.template.radius = am4core.percent(-40);
            pieSeries.labels.template.fill = am4core.color("#000000");

            // This creates initial animation
            pieSeries.hiddenState.properties.opacity = 1;
            pieSeries.hiddenState.properties.endAngle = -90;
            pieSeries.hiddenState.properties.startAngle = -90;
            chart.hiddenState.properties.radius = am4core.percent(-40);
            pieSeries.legendSettings.valueText = "{ }";

            // Add legend at the top
            chart.legend = new am4charts.Legend();
            chart.legend.position = "top";
            chart.legend.labels.template.maxWidth = 100;
            chart.legend.labels.template.text = "{country}: {litres} L"; // Updated to show litres value
            chart.legend.labels.template.interactionsEnabled = false;
            // Change legend text color
            chart.legend.labels.template.fill = am4core.color("#000000"); // Set legend text color
            // Set legend layout to horizontal
            chart.legend.layout = "horizontal"; // Change layout to horizontal
            chart.legend.itemContainers.template.paddingBottom = 10;
            // Center the legend horizontally
            chart.legend.itemContainers.template.align = "center";
            chart.legend.itemContainers.template.valign = "middle";
            chart.legend.contentAlign = "center"; // Align the entire legend in the middle

            chart.logo.disabled = true;
            clearDateInputsWater();
          }); // end am4core.ready()
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _pieChart.apply(this, arguments);
}
pieChart1();
function lineChart1() {
  return _lineChart.apply(this, arguments);
} // function showClusteredBarChart1() {
//     am4core.ready(function () {
//         // Themes begin
//         am4core.useTheme(am4themes_animated);
//         // Themes end
//         var chart = am4core.create('chartdiv1', am4charts.XYChart);
//         chart.padding(0, 0, 0, 0);
//         chart.colors.step = 2;
//         chart.legend = new am4charts.Legend();
//         chart.legend.position = 'top';
//         chart.legend.paddingBottom = 20;
//         chart.legend.labels.template.maxWidth = 95;
//         chart.legend.labels.template.fill = am4core.color('#000000');
//         var xAxis = chart.xAxes.push(new am4charts.CategoryAxis());
//         xAxis.dataFields.category = 'category';
//         xAxis.renderer.cellStartLocation = 0.2;
//         xAxis.renderer.cellEndLocation = 0.8;
//         xAxis.renderer.grid.template.location = 0;
//         xAxis.renderer.labels.template.fill = am4core.color('#000000');
//         xAxis.renderer.minGridDistance = 20;
//         xAxis.renderer.labels.template.rotation = 270; // Rotate labels
//         xAxis.renderer.labels.template.horizontalCenter = "right"; // Align to right
//         xAxis.renderer.labels.template.verticalCenter = "middle"; // Center vertically
//         var yAxis = chart.yAxes.push(new am4charts.ValueAxis());
//         yAxis.min = 0;
//         yAxis.renderer.labels.template.fill = am4core.color('#000000');
//         function createSeries(value, name, color) {
//             var series = chart.series.push(new am4charts.ColumnSeries());
//             series.dataFields.valueY = value;
//             series.dataFields.categoryX = "category";
//             series.name = name;
//             series.columns.template.fill = am4core.color(color);  // Fill color
//             series.columns.template.stroke = am4core.color(color); // Stroke color
//             series.tooltipText = '{name}: {valueY}';
//             series.tooltip.background.fill = am4core.color('#000000'); // Tooltip background color
//             series.tooltip.label.fill = am4core.color('#ffffff'); // Tooltip text color
//             series.tooltip.pointerOrientation = 'vertical'; // Tooltip orientation
//             series.tooltip.getFillFromObject = false; // Ensure tooltip color is set explicitly
//             series.tooltip.getStrokeFromObject = false; // Ensure tooltip border color is set explicitly
//             var bullet = series.bullets.push(new am4charts.LabelBullet());
//             bullet.interactionsEnabled = false;
//             bullet.dy = 30;
//             bullet.label.fill = am4core.color('#000000');
//             return series;
//         }
//         chart.data = [
//             { category: 'January', first: 40, second: 55 },
//             { category: 'February', first: 30, second: 78},
//             { category: 'March', first: 27, second: 40},
//             { category: 'April', first: 50, second: 33},
//             { category: 'May', first: 50, second: 33},
//             { category: 'June', first: 50, second: 33},
//             { category: 'July', first: 50, second: 33},
//             { category: 'August', first: 50, second: 33},
//             { category: 'September', first: 50, second: 33},
//             { category: 'October', first: 50, second: 33},
//             { category: 'November', first: 50, second: 33},
//             { category: 'December', first: 50, second: 33}
//         ];
//         createSeries('first', 'The First', '#2A52BE');
//     createSeries('second', 'The Second', '#00B7EB');
//         function arrangeColumns() {
//             var series = chart.series.getIndex(0);
//             var w = 1 - xAxis.renderer.cellStartLocation - (1 - xAxis.renderer.cellEndLocation);
//             if (series.dataItems.length > 1) {
//                 var x0 = xAxis.getX(series.dataItems.getIndex(0), "categoryX");
//                 var x1 = xAxis.getX(series.dataItems.getIndex(1), "categoryX");
//                 var delta = ((x1 - x0) / chart.series.length) * w;
//                 if (am4core.isNumber(delta)) {
//                     var middle = chart.series.length / 2;
//                     var newIndex = 0;
//                     chart.series.each(function (series) {
//                         if (!series.isHidden && !series.isHiding) {
//                             series.dummyData = newIndex;
//                             newIndex++;
//                         } else {
//                             series.dummyData = chart.series.indexOf(series);
//                         }
//                     });
//                     var visibleCount = newIndex;
//                     var newMiddle = visibleCount / 2;
//                     chart.series.each(function (series) {
//                         var trueIndex = chart.series.indexOf(series);
//                         var newIndex = series.dummyData;
//                         var dx = (newIndex - trueIndex + middle - newMiddle) * delta;
//                         series.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
//                         series.bulletsContainer.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
//                     });
//                 }
//             }
//         }
//         var cursor = new am4charts.XYCursor();
//         chart.cursor = cursor;
//         chart.logo.disabled = true;
//     }); // end am4core.ready()
// }
// function showClusteredBarChart1() {
//     am4core.ready(function () {
//         // Themes begin
//         am4core.useTheme(am4themes_animated);
//         // Themes end
//         var chart = am4core.create('chartdiv1', am4charts.XYChart);
//         chart.padding(0, 0, 0, 0);
//         chart.colors.step = 2;
//         chart.legend = new am4charts.Legend();
//         chart.legend.position = 'top';
//         chart.legend.paddingBottom = 20;
//         chart.legend.labels.template.maxWidth = 95;
//         chart.legend.labels.template.fill = am4core.color('#000000');
//         var xAxis = chart.xAxes.push(new am4charts.CategoryAxis());
//         xAxis.dataFields.category = 'category';
//         xAxis.renderer.cellStartLocation = 0.2;
//         xAxis.renderer.cellEndLocation = 0.8;
//         xAxis.renderer.grid.template.location = 0;
//         xAxis.renderer.labels.template.fill = am4core.color('#000000');
//         xAxis.renderer.minGridDistance = 20;
//         xAxis.renderer.labels.template.rotation = 270; // Rotate labels
//         xAxis.renderer.labels.template.horizontalCenter = "right"; // Align to right
//         xAxis.renderer.labels.template.verticalCenter = "middle"; // Center vertically
//         var yAxis = chart.yAxes.push(new am4charts.ValueAxis());
//         yAxis.min = 0;
//         yAxis.renderer.labels.template.fill = am4core.color('#000000');
//         // Create stacked series
//         function createSeries(value, name, color) {
//             var series = chart.series.push(new am4charts.ColumnSeries());
//             series.dataFields.valueY = value;
//             series.dataFields.categoryX = "category";
//             series.name = name;
//             series.columns.template.fill = am4core.color(color);  // Fill color
//             series.columns.template.stroke = am4core.color(color); // Stroke color
//             series.tooltipText = '{name}: {valueY}';
//             series.tooltip.background.fill = am4core.color('#000000'); // Tooltip background color
//             series.tooltip.label.fill = am4core.color('#ffffff'); // Tooltip text color
//             series.tooltip.pointerOrientation = 'vertical'; // Tooltip orientation
//             series.tooltip.getFillFromObject = false; // Ensure tooltip color is set explicitly
//             series.tooltip.getStrokeFromObject = false; // Ensure tooltip border color is set explicitly
//             var bullet = series.bullets.push(new am4charts.LabelBullet());
//             bullet.interactionsEnabled = false;
//             bullet.dy = 30;
//             bullet.label.fill = am4core.color('#000000');
//             series.stacked = true;  // Enable stacking
//             return series;
//         }
//         // Sample data
//         chart.data = [
//             { category: 'Jan', first: 40, second: 55 },
//             { category: 'Feb', first: 30, second: 78},
//             { category: 'Mar', first: 27, second: 40},
//             { category: 'Apr', first: 50, second: 33},
//             { category: 'May', first: 50, second: 33},
//             { category: 'Jun', first: 50, second: 33},
//             { category: 'Jul', first: 50, second: 33},
//             { category: 'Aug', first: 50, second: 33},
//             { category: 'Sept', first: 50, second: 33},
//             { category: 'Oct', first: 50, second: 33},
//             { category: 'Nov', first: 50, second: 33},
//             { category: 'Dec', first: 50, second: 33}
//         ];
//         createSeries('first', 'The First', '#2A52BE');
//         createSeries('second', 'The Second', '#00B7EB');
//         var cursor = new am4charts.XYCursor();
//         chart.cursor = cursor;
//         chart.logo.disabled = true;
//     }); // end am4core.ready()
// }
function _lineChart() {
  _lineChart = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var startDateValue, endDateValue, _generateChartData4, zoomChart, startDate, endDate, chartData, chart;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          startDateValue = document.getElementById("startDateWater").value;
          endDateValue = document.getElementById("endDateWater").value;
          if (!(startDateValue && endDateValue)) {
            _context2.next = 18;
            break;
          }
          // Generate data for Chart 2
          _generateChartData4 = function _generateChartData4() {
            var chartData = [];
            var visits = 10; // Different initial value for the second chart
            var currentDate = new Date(startDate);
            while (currentDate <= endDate) {
              visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
              chartData.push({
                date: new Date(currentDate),
                domesticwater: visits,
                flushingwater: visits + Math.round(Math.random() * 30)
              });
              currentDate.setDate(currentDate.getDate() + 1);
            }
            return chartData;
          };
          zoomChart = function zoomChart() {
            chart.zoomToIndexes(chart.dataProvider.length - 70, chart.dataProvider.length - 1);
          };
          startDate = new Date(startDateValue);
          endDate = new Date(endDateValue); // Ensure the start date is not later than the end date
          if (!(startDate > endDate)) {
            _context2.next = 10;
            break;
          }
          alert('Start Date cannot be after End Date');
          return _context2.abrupt("return");
        case 10:
          chartData = _generateChartData4(startDate, endDate);
          if (!(chartData.length === 0)) {
            _context2.next = 14;
            break;
          }
          alert('No data to display for the selected range');
          return _context2.abrupt("return");
        case 14:
          if (chart) {
            console.log('Disposing of previous chart instance...');
            chart.dispose();
          }
          chart = AmCharts.makeChart('chartdiv1', {
            "type": "serial",
            "theme": "white",
            "color": "#000",
            "legend": {
              "useGraphSettings": true,
              "color": "#000",
              "position": "top",
              // Legend at top
              "align": "center",
              // Center the legend
              "marginBottom": 0,
              // Space below legend
              "valueText": ""
            },
            "dataProvider": chartData,
            "synchronizeGrid": true,
            "valueAxes": [{
              "id": "v1",
              "axisColor": "#000",
              "axisThickness": 1,
              "axisAlpha": 1,
              "position": "left"
            }],
            "graphs": [{
              "valueAxis": "v1",
              "lineColor": "#39A7FF",
              "bulletBorderThickness": 1,
              "hideBulletsCount": 30,
              "title": "domestic water",
              "valueField": "domesticwater",
              "fillAlphas": 0,
              "type": "smoothedLine"
            }, {
              "valueAxis": "v1",
              "lineColor": "#C65BCF",
              "bulletBorderThickness": 1,
              "hideBulletsCount": 30,
              "title": "flushing water",
              "valueField": "flushingwater",
              "fillAlphas": 0,
              "type": "smoothedLine"
            }],
            "chartScrollbar": {
              "selectedGraphLineColor": "#888",
              "position": "bottom",
              // Set scrollbar position to bottom
              "offset": 20 // Ensure some offset from the chart
            },
            "chartCursor": {
              "cursorPosition": "mouse"
            },
            "categoryField": "date",
            "categoryAxis": {
              "parseDates": true,
              "axisColor": "#000",
              "minorGridEnabled": true
            },
            "export": {
              "enabled": true,
              "position": "bottom-right"
            },
            "zoomControl": {
              "zoomControlEnabled": false
            }
          });
          chart.addListener("dataUpdated", zoomChart);
          zoomChart();
        case 18:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _lineChart.apply(this, arguments);
}
function showClusteredBarChart1() {
  am4core.ready(function () {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    var chart = am4core.create('chartdiv1', am4charts.XYChart);
    chart.padding(0, 0, 0, 0);
    chart.colors.step = 2;
    chart.legend = new am4charts.Legend();
    chart.legend.position = 'top';
    chart.legend.paddingBottom = 20;
    chart.legend.labels.template.maxWidth = 95;
    chart.legend.labels.template.fill = am4core.color('#000000');
    var xAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    xAxis.dataFields.category = 'category';
    xAxis.renderer.cellStartLocation = 0.2;
    xAxis.renderer.cellEndLocation = 0.8;
    xAxis.renderer.grid.template.location = 0;
    xAxis.renderer.labels.template.fill = am4core.color('#000000');
    xAxis.renderer.minGridDistance = 20;
    xAxis.renderer.labels.template.rotation = 270; // Rotate labels
    xAxis.renderer.labels.template.horizontalCenter = "right"; // Align to right
    xAxis.renderer.labels.template.verticalCenter = "middle"; // Center vertically

    var yAxis = chart.yAxes.push(new am4charts.ValueAxis());
    yAxis.min = 0;
    yAxis.renderer.labels.template.fill = am4core.color('#000000');

    // Create stacked series
    function createSeries(value, name, color) {
      var series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = value;
      series.dataFields.categoryX = "category";
      series.name = name;
      series.columns.template.fill = am4core.color(color); // Fill color
      series.columns.template.stroke = am4core.color(color); // Stroke color

      // Customize tooltip
      series.tooltipText = '{name}: {valueY}';
      series.tooltip.background.fill = am4core.color(color); // Set tooltip background color to match series color
      series.tooltip.label.fill = am4core.color('#ffffff'); // Tooltip text color
      series.tooltip.pointerOrientation = 'vertical'; // Tooltip orientation
      series.tooltip.getFillFromObject = false; // Ensure tooltip color is set explicitly
      series.tooltip.getStrokeFromObject = false; // Ensure tooltip border color is set explicitly

      // Add bullets for labels inside the bar
      var bullet = series.bullets.push(new am4charts.LabelBullet());
      bullet.interactionsEnabled = false;
      bullet.dy = 30;
      bullet.label.fill = am4core.color('#000000');
      series.stacked = true; // Enable stacking

      return series;
    }

    // Sample data
    chart.data = [{
      category: 'Jan',
      first: 40,
      second: 50
    }, {
      category: 'Feb',
      first: 30,
      second: 40
    }, {
      category: 'Mar',
      first: 27,
      second: 40
    }, {
      category: 'Apr',
      first: 50,
      second: 33
    }, {
      category: 'May',
      first: 50,
      second: 33
    }, {
      category: 'Jun',
      first: 50,
      second: 33
    }, {
      category: 'Jul',
      first: 50,
      second: 33
    }, {
      category: 'Aug',
      first: 50,
      second: 33
    }, {
      category: 'Sept',
      first: 50,
      second: 33
    }, {
      category: 'Oct',
      first: 50,
      second: 33
    }, {
      category: 'Nov',
      first: 50,
      second: 33
    }, {
      category: 'Dec',
      first: 50,
      second: 33
    }];
    createSeries('first', 'The First', '#2A52BE');
    createSeries('second', 'The Second', '#00B7EB');

    // Add total value at the top of each bar
    chart.events.on("datavalidated", function () {
      chart.series.each(function (series) {
        series.columns.each(function (column) {
          var total = 0;

          // Loop through all stacked series to calculate the total
          chart.series.each(function (stackedSeries) {
            total += stackedSeries.dataItems.getIndex(column.dataItem.index).valueY;
          });

          // Add a label at the top of the stack
          var label = column.createChild(am4core.Label);
          label.text = total.toString();
          label.fill = am4core.color('#000000'); // Label color
          label.fontSize = 12;
          label.dy = -20; // Position above the bar
          label.align = "center";
        });
      });
    });
    var cursor = new am4charts.XYCursor();
    chart.cursor = cursor;
    chart.logo.disabled = true;
  }); // end am4core.ready()
}
function clearDateInputsWater() {
  document.getElementById('startDateWater').value = ''; // Clear start date
  document.getElementById('endDateWater').value = ''; // Clear end date
}
document.getElementById("sav_monthly_water").addEventListener("click", function () {
  clearDateInputsWater();
  showClusteredBarChart1();
});
var buttons1 = document.querySelectorAll(".xyz");
for (var _i = 0; _i < buttons1.length; _i++) {
  buttons1[_i].addEventListener("click", function () {
    pieChart1();
  });
}
/* water used end */

/* power consumption start */
var chart;
function lineChart3() {
  // Dispose of existing chart if it exists
  if (chart) {
    if (chart instanceof ApexCharts) {
      console.log("Chart destroyed");
      chart.destroy(); // Dispose the existing chart
    } else if (chart instanceof AmCharts.AmChart) {
      console.log("Chart destroyed");
      chart.clear(); // Clear the existing AmCharts instance
    } else if (chart instanceof am4charts.XYChart) {
      console.log("Chart destroyed");
      chart.dispose(); // Dispose the existing am4charts instance
    }
  }
  am4core.ready(function () {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    chart = am4core.create("chartdiv2", am4charts.XYChart);

    // Add data
    chart.data = [{
      "month": 'Jan',
      "value": 90
    }, {
      "month": 'Feb',
      "value": 102
    }, {
      "month": 'Mar',
      "value": 65
    }, {
      "month": 'Apr',
      "value": 62
    }, {
      "month": 'May',
      "value": 55
    }, {
      "month": 'Jun',
      "value": 45
    }, {
      "month": 'Jul',
      "value": 65
    }, {
      "month": 'Aug',
      "value": 60
    }, {
      "month": 'Sep',
      "value": 70
    }, {
      "month": 'Oct',
      "value": 80
    }, {
      "month": 'Nov',
      "value": 75
    }, {
      "month": 'Dec',
      "value": 80
    }];

    // Create axes
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "month";
    categoryAxis.renderer.labels.template.fill = am4core.color("#000000"); // Set x-axis labels color
    categoryAxis.title.fill = am4core.color("#000000"); // Set x-axis title color
    categoryAxis.renderer.labels.template.rotation = 270; // Set rotation
    categoryAxis.renderer.labels.template.horizontalCenter = "right"; // Align to the right
    categoryAxis.renderer.labels.template.verticalCenter = "middle"; // Center vertically
    categoryAxis.renderer.minGridDistance = 1; // Ensure all categories are displayed

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.labels.template.fill = am4core.color("#000000"); // Set y-axis labels color
    valueAxis.title.fill = am4core.color("#000000"); // Set y-axis title color

    // Create series
    var lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.dataFields.valueY = "value";
    lineSeries.dataFields.categoryX = "month";
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

    // Configure cursor
    var cursor = new am4charts.XYCursor();
    lineSeries.tooltipText = "{categoryX}: [bold]{valueY}[/]";
    lineSeries.tooltip.getFillFromObject = false; // Disable tooltip fill from series
    lineSeries.tooltip.background.fill = am4core.color("#14C38E"); // Set tooltip background color
    lineSeries.tooltip.label.fill = am4core.color("#ffffff"); // Set tooltip label color
    lineSeries.tooltip.pointerOrientation = "horizontal"; // Set tooltip orientation

    chart.cursor = cursor; // Assign cursor to chart
    chart.logo.disabled = true;
  }); // end am4core.ready()
}
function lineChart4() {
  // Dispose of existing chart if it exists
  if (chart) {
    if (chart instanceof ApexCharts) {
      console.log("Chart destroyed");
      chart.destroy(); // Dispose the existing chart
    } else if (chart instanceof AmCharts.AmChart) {
      console.log("Chart destroyed");
      chart.clear(); // Clear the existing AmCharts instance
    } else if (chart instanceof am4charts.XYChart) {
      console.log("Chart destroyed");
      chart.dispose(); // Dispose the existing am4charts instance
    }
  }
  am4core.ready(function () {
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    chart = am4core.create("chartdiv2", am4charts.XYChart);

    // Add data for 24 hours with a 2-hour interval
    chart.data = [{
      "hour": "00:00",
      "value": 10
    }, {
      "hour": "02:00",
      "value": 20
    }, {
      "hour": "04:00",
      "value": 15
    }, {
      "hour": "06:00",
      "value": 20
    }, {
      "hour": "08:00",
      "value": 30
    }, {
      "hour": "10:00",
      "value": 25
    }, {
      "hour": "12:00",
      "value": 35
    }, {
      "hour": "14:00",
      "value": 50
    }, {
      "hour": "16:00",
      "value": 40
    }, {
      "hour": "18:00",
      "value": 35
    }, {
      "hour": "20:00",
      "value": 45
    }, {
      "hour": "22:00",
      "value": 50
    }];

    // Create axes
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "hour";
    categoryAxis.renderer.labels.template.fill = am4core.color("#000000"); // Set x-axis labels color
    categoryAxis.title.fill = am4core.color("#000000"); // Set x-axis title color
    categoryAxis.renderer.labels.template.rotation = 270; // Set rotation
    categoryAxis.renderer.labels.template.horizontalCenter = "right"; // Align to the right
    categoryAxis.renderer.labels.template.verticalCenter = "middle"; // Center vertically
    categoryAxis.renderer.minGridDistance = 1; // Ensure all categories are displayed

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.labels.template.fill = am4core.color("#000000"); // Set y-axis labels color
    valueAxis.title.fill = am4core.color("#000000"); // Set y-axis title color

    // Create series
    var lineSeries = chart.series.push(new am4charts.LineSeries());
    lineSeries.dataFields.valueY = "value";
    lineSeries.dataFields.categoryX = "hour";
    lineSeries.strokeWidth = 2;
    lineSeries.stroke = am4core.color("#FF6600");

    // Configure cursor
    var cursor = new am4charts.XYCursor();
    lineSeries.tooltipText = "{categoryX}: [bold]{valueY}[/]"; // Tooltip format
    lineSeries.tooltip.getFillFromObject = false; // Disable tooltip fill from series
    lineSeries.tooltip.background.fill = am4core.color("#FF6600"); // Set tooltip background color
    lineSeries.tooltip.label.fill = am4core.color("#ffffff"); // Set tooltip label color
    lineSeries.tooltip.pointerOrientation = "horizontal"; // Set tooltip orientation

    chart.cursor = cursor; // Assign cursor to chart
    chart.logo.disabled = true; // Disable the logo
  }); // end am4core.ready()
}

// Initial call to lineChart3
lineChart4();
function barChart() {
  var startDateValue = document.getElementById("startDatePower").value;
  var endDateValue = document.getElementById("endDatePower").value;
  if (startDateValue && endDateValue) {
    var _generateChartData2 = function _generateChartData2(startDate, endDate) {
      var chartData = [];
      var visits = 1200;
      var hits = 1220;
      var views = 1240;
      var currentDate = new Date(startDate);
      while (currentDate <= endDate) {
        visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
        chartData.push({
          date: new Date(currentDate),
          power: visits
        });
        currentDate.setDate(currentDate.getDate() + 1);
      }
      return chartData;
    };
    var zoomChart = function zoomChart() {
      chart.zoomToIndexes(chart.dataProvider.length - 70, chart.dataProvider.length - 1);
    };
    var startDate = new Date(startDateValue);
    var endDate = new Date(endDateValue);
    if (startDate > endDate) {
      alert('Start Date cannot be after End Date');
      return;
    }
    var chartData = _generateChartData2(startDate, endDate);
    if (chartData.length === 0) {
      alert('No data to display for the selected range');
      return;
    }
    if (chart) {
      if (chart instanceof ApexCharts) {
        console.log("Chart destroyed");
        chart.destroy(); // Dispose the existing chart
      } else if (chart instanceof AmCharts.AmChart) {
        console.log("Chart destroyed");
        chart.clear(); // Clear the existing AmCharts instance
      } else if (chart instanceof am4charts.XYChart) {
        console.log("Chart destroyed");
        chart.dispose(); // Dispose the existing am4charts instance
      }
    }
    chart = AmCharts.makeChart('chartdiv2', {
      "type": "serial",
      // Changed from "serial" to "xy"
      "theme": "black",
      "color": "#000",
      "legend": {
        "useGraphSettings": true,
        "color": "#000",
        "position": "top",
        "align": "center",
        "marginBottom": 10,
        "valueText": ""
      },
      "dataProvider": chartData,
      "synchronizeGrid": true,
      "valueAxes": [{
        "id": "v1",
        "axisColor": "#000",
        "axisThickness": 1,
        "axisAlpha": 1,
        "position": "left"
      }],
      "graphs": [{
        "valueAxis": "v1",
        "lineColor": "#3AA6B9",
        "bulletBorderThickness": 1,
        "hideBulletsCount": 30,
        "title": "Power Consumption",
        "valueField": "power",
        "type": "column",
        // Changed from "smoothedLine" to "column"
        "fillAlphas": 1 // Set fillAlphas to 1 for bar chart visibility
      }],
      "chartScrollbar": {
        "offset": 20
      },
      "chartCursor": {
        "cursorPosition": "mouse"
      },
      "categoryField": "date",
      "categoryAxis": {
        "parseDates": true,
        "axisColor": "#000",
        "minorGridEnabled": true
      },
      "export": {
        "enabled": false,
        "position": "bottom-right"
      }
    });
    chart.addListener("dataUpdated", zoomChart);
    zoomChart();
  }
}
// function barChart() {
//     var startDateValue = document.getElementById("startDatePower").value;
//     var endDateValue = document.getElementById("endDatePower").value;

//     if (startDateValue && endDateValue) {
//         var startDate = new Date(startDateValue);
//         var endDate = new Date(endDateValue);

//         if (startDate > endDate) {
//             alert('Start Date cannot be after End Date');
//             return;
//         }

//         var chartData = generateChartData(startDate, endDate);

//         function generateChartData(startDate, endDate) {
//             var chartData = [];
//             var visits = 1200;
//             var hits = 1220;
//             var views = 1240;

//             var currentDate = new Date(startDate);
//             while (currentDate <= endDate) {
//                 visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
//                 hits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
//                 views += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);

//                 chartData.push({
//                     date: currentDate.toLocaleDateString(), // Convert to a string format for the chart
//                     scope1: visits,
//                     scope2: hits,
//                     scope3: views
//                 });

//                 currentDate.setDate(currentDate.getDate() + 1);
//             }
//             return chartData;
//         }

//         if (chartData.length === 0) {
//             alert('No data to display for the selected range');
//             return;
//         }

//         // Dispose of existing chart if it exists
//         if (chart) {
//             chart.dispose(); // Dispose the existing amCharts instance
//             console.log("Bar chart destroyed");
//         }

//         // Create the bar chart
//         chart = am4core.create("chartdiv2", am4charts.XYChart);
//         chart.data = chartData;

//         // Create axes
//         var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
//         dateAxis.renderer.minGridDistance = 50;

//         var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
//         chart.scrollbarX = new am4core.Scrollbar();

//         // Create series for Scope 1
//         var series1 = chart.series.push(new am4charts.ColumnSeries());
//         series1.dataFields.valueY = "scope1";
//         series1.dataFields.dateX = "date";
//         series1.name = "Scope 1";
//         series1.tooltipText = "{name}: [bold]{valueY}[/]";
//         series1.columns.template.strokeWidth = 0; // No border
//         series1.columns.template.fill="#FD7792";
//         // Create a linear gradient for the columns
//         // var gradient = new am4core.LinearGradient();
//         // gradient.addColor("#F35588", 0); // Start color
//         // gradient.addColor("#EB6383", 1); // End color
//         // series1.columns.template.fill = gradient; // Set gradient fill
//         // Add cursor
//         chart.cursor = new am4charts.XYCursor();
//         // columnSeries.tooltipText = "{categoryX}: [bold]{valueY}[/]";
//         // columnSeries.tooltip.getFillFromObject = false; // Disable tooltip fill from series
//         // columnSeries.tooltip.background.fill = am4core.color("#14C38E"); // Set tooltip background color
//         // columnSeries.tooltip.label.fill = am4core.color("#ffffff"); // Set tooltip label color
//         // columnSeries.tooltip.pointerOrientation = "horizontal"; // Set tooltip orientation

//         chart.cursor = cursor; // Assign cursor to chart
//     }
// }
function clearDateInputsPower() {
  document.getElementById("startDatePower").value = '';
  document.getElementById("endDatePower").value = '';
}
document.getElementById("sav_monthly_power").addEventListener("click", function () {
  clearDateInputsPower();
  lineChart3();
});
var buttons2 = document.querySelectorAll(".power");
for (var _i2 = 0; _i2 < buttons2.length; _i2++) {
  buttons2[_i2].addEventListener("click", function () {
    lineChart4();
  });
}
/* power consumption end */

/* occupancy Efficiency start */
var currentChart1 = null;
function donutChart() {
  am4core.ready(function () {
    // Themes begin
    am4core.useTheme(am4themes_dark);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart
    currentChart1 = am4core.create("chartdiv3", am4charts.GaugeChart);
    currentChart1.innerRadius = am4core.percent(100); // Remove inner circle entirely

    /**
     * Normal axis
     */
    var axis = currentChart1.xAxes.push(new am4charts.ValueAxis());
    axis.min = 0;
    axis.max = 100;
    axis.strictMinMax = true;
    axis.renderer.radius = am4core.percent(80);
    axis.renderer.inside = false;
    axis.renderer.line.strokeOpacity = 1;
    axis.renderer.ticks.template.disabled = false;
    axis.renderer.ticks.template.strokeOpacity = 1;
    axis.renderer.ticks.template.length = 20;
    axis.renderer.grid.template.disabled = true;
    axis.renderer.labels.template.radius = 35;

    // Set label color to black
    axis.renderer.labels.template.fill = am4core.color("#000000"); // Black color for labels

    /**
     * Axis for ranges
     */
    var colorSet = new am4core.ColorSet();
    var axis2 = currentChart1.xAxes.push(new am4charts.ValueAxis());
    axis2.min = 0;
    axis2.max = 100;
    axis2.strictMinMax = true;
    axis2.renderer.labels.template.disabled = true;
    axis2.renderer.ticks.template.disabled = true;
    axis2.renderer.grid.template.disabled = true;
    var range0 = axis2.axisRanges.create();
    range0.value = 0;
    range0.endValue = 144.3;
    var range1 = axis2.axisRanges.create();
    range1.value = 2.3;
    range1.endValue = 30;

    /**
     * Label
     */
    var label2 = currentChart1.radarContainer.createChild(am4core.Label);
    label2.isMeasured = false;
    label2.fontSize = 32;
    label2.x = am4core.percent(50);
    label2.y = am4core.percent(100);
    label2.horizontalCenter = "middle";
    label2.verticalCenter = "top";
    label2.text = "76 %";
    label2.fill = am4core.color("#000000"); // Black color for the label

    /**
     * Hand
     */
    var hand2 = currentChart1.hands.push(new am4charts.ClockHand());
    hand2.axis = axis2;
    hand2.innerRadius = am4core.percent(20);
    hand2.startWidth = 5;
    hand2.pin.disabled = true;
    hand2.value = 76;

    // Set the hand color to black
    hand2.fill = am4core.color("#000000"); // Black color for the clock hand
    hand2.stroke = am4core.color("#000000"); // Also set the stroke to black

    var gradient = new am4core.LinearGradient();
    gradient.stops.push({
      color: am4core.color("red")
    });
    gradient.stops.push({
      color: am4core.color("yellow")
    });
    gradient.stops.push({
      color: am4core.color("green")
    });
    axis.renderer.line.stroke = gradient;
    axis.renderer.line.strokeWidth = 25;
    axis.renderer.line.strokeOpacity = 1;
    currentChart1.logo.disabled = true;

    // Log the initialized chart to debug
    console.log('Gauge chart created:', currentChart1);
    clearDateInputsOccupancy();
  });
}
donutChart();
// Function to create and render an occupancy line chart
function occupacyLine() {
  var startDateValue = document.getElementById('startDateOccupancy').value;
  var endDateValue = document.getElementById('endDateOccupancy').value;
  if (startDateValue && endDateValue) {
    var _generateChartData3 = function _generateChartData3(startDate, endDate) {
      var chartData = [];
      var visits = 1200; // Initial value for occupancy efficiency

      var currentDate = new Date(startDate);
      while (currentDate <= endDate) {
        visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
        chartData.push({
          date: new Date(currentDate),
          occupancyefficiency: visits
        });
        currentDate.setDate(currentDate.getDate() + 1);
      }
      return chartData;
    };
    var zoomChart = function zoomChart() {
      currentChart1.zoomToIndexes(currentChart1.dataProvider.length - 70, currentChart1.dataProvider.length - 1);
    };
    var startDate = new Date(startDateValue);
    var endDate = new Date(endDateValue);
    if (startDate > endDate) {
      alert('Start Date cannot be after End Date');
      return;
    }
    var chartData = _generateChartData3(startDate, endDate);
    if (chartData.length === 0) {
      alert('No data to display for the selected range');
      return;
    }
    if (currentChart1) {
      if (currentChart1 instanceof ApexCharts) {
        console.log("Pie chart destroyed");
        currentChart1.destroy(); // Dispose the existing chart
      } else if (currentChart1 instanceof AmCharts.AmChart) {
        console.log("Pie chart destroyed");
        currentChart1.clear(); // Clear the existing AmCharts instance
      } else if (currentChart1 instanceof am4charts.XYChart) {
        console.log("Pie chart destroyed");
        currentChart1.dispose(); // Dispose the existing am4charts instance
      }
    }
    currentChart1 = AmCharts.makeChart('chartdiv3', {
      "type": "serial",
      "theme": "white",
      "color": "#000",
      "legend": {
        "useGraphSettings": true,
        "color": "#000",
        "position": "top",
        "align": "center",
        "marginBottom": 10,
        "valueText": ""
      },
      "dataProvider": chartData,
      "synchronizeGrid": true,
      "valueAxes": [{
        "id": "v1",
        "axisColor": "#000",
        "axisThickness": 1,
        "axisAlpha": 1,
        "position": "left"
      }],
      "graphs": [{
        "valueAxis": "v1",
        "lineColor": "red",
        "bulletBorderThickness": 1,
        "hideBulletsCount": 30,
        "title": "Occupancy Efficiency",
        "valueField": "occupancyefficiency",
        "fillAlphas": 0,
        "type": "smoothedLine"
      }],
      "chartScrollbar": {
        "selectedGraphLineColor": "#888",
        "position": "bottom",
        "offset": 20
      },
      "chartCursor": {
        "cursorPosition": "mouse"
      },
      "categoryField": "date",
      "categoryAxis": {
        "parseDates": true,
        "axisColor": "#000",
        "minorGridEnabled": true
      },
      "export": {
        "enabled": true,
        "position": "bottom-right"
      },
      "zoomControl": {
        "zoomControlEnabled": false
      }
    });
    currentChart1.addListener("dataUpdated", zoomChart);
    zoomChart();
  } else {
    alert('Please select both Start Date and End Date');
  }
}

// Function to create and render an occupancy bar chart
// function occupacyBar() {
//     if (currentChart1) {
//         if (currentChart1 instanceof ApexCharts) {
//             console.log("Pie chart destroyed");
//             currentChart1.destroy(); // Dispose the existing chart
//         } else if (currentChart1 instanceof AmCharts.AmChart) {
//             console.log("Pie chart destroyed");
//             currentChart1.clear(); // Clear the existing AmCharts instance
//         } else if (currentChart1 instanceof am4charts.XYChart) {
//             console.log("Pie chart destroyed");
//             currentChart1.dispose(); // Dispose the existing am4charts instance
//         }
//     }
//     var options = {
//         series: [{
//             data: [10,20,30,40,47,45,40,35,30,25,20,10],
//         }],
//         chart: {
//             type: 'bar',
//             height: 300,
//             toolbar: {
//                 show: false,
//             },
//         },
//         plotOptions: {
//             bar: {
//                 horizontal: true,
//                 columnWidth: '55%',
//                 endingShape: 'rounded',
//             }
//         },
//         colors:["#E11D74"],
//         dataLabels: {
//             enabled: false,
//         },
//         stroke: {
//             show: true,
//             width: 0,
//             colors: ['transparent'],
//         },
//         xaxis: {
//             categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//             labels: {
//                 style: {
//                     colors: '#000000',
//                 },
//             },
//         },
//         yaxis: {
//             labels: {
//                 style: {
//                     colors: '#000000',
//                 },
//             },
//         },
//         grid: {
//             show: false,  // Disable background grid lines
//         },
//         tooltip: {
//             y: {
//                 formatter: function(val) {
//                     return val;
//                 },
//             },
//         },

//     };
//         console.log("Creating bar chart...");
//         currentChart1 = new ApexCharts(document.querySelector("#chartdiv3"), options);
//         currentChart1.render();
// }
function occupacyBar() {
  // Destroy the existing chart if it exists
  if (currentChart1) {
    if (currentChart1 instanceof ApexCharts) {
      console.log("Bar chart destroyed");
      currentChart1.destroy(); // Dispose the existing chart
    } else if (currentChart1 instanceof AmCharts.AmChart) {
      console.log("Bar chart destroyed");
      currentChart1.clear(); // Clear the existing AmCharts instance
    } else if (currentChart1 instanceof am4charts.XYChart) {
      console.log("Bar chart destroyed");
      currentChart1.dispose(); // Dispose the existing am4charts instance
    }
  }

  // Define the data for the two floors
  var options = {
    series: [{
      name: 'Floor 1',
      // Series name for Floor 1
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 61, 50, 55]
    }, {
      name: 'Floor 2',
      // Series name for Floor 2
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 40, 45, 50] // Sample data for Floor 2
    }],
    chart: {
      type: 'bar',
      // Keep bar type for a vertical column chart
      height: '100%',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        // Set to false for vertical bars
        columnWidth: '55%',
        endingShape: 'rounded'
      }
    },
    colors: ["#E11D74", "#4A90E2"],
    // Two different colors for each floor
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 0,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      labels: {
        style: {
          colors: '#000000'
        }
      }
    },
    grid: {
      show: false // Disable background grid lines
    },
    tooltip: {
      y: {
        formatter: function formatter(val) {
          return val; // Customize tooltip value
        }
      }
    },
    legend: {
      position: 'top',
      // Position of the legend
      horizontalAlign: 'center',
      // Center align the legend
      labels: {
        colors: ['#000000'] // Legend label color
      }
    }
  };
  console.log("Creating bar chart...");
  currentChart1 = new ApexCharts(document.querySelector("#chartdiv3"), options);
  currentChart1.render();
}
function clearDateInputsOccupancy() {
  document.getElementById("startDateOccupancy").value = '';
  document.getElementById("endDateOccupancy").value = '';
}
document.getElementById("sav_monthly_occupancy").addEventListener("click", function () {
  clearDateInputsOccupancy();
  occupacyBar();
});
var buttons3 = document.querySelectorAll(".occupancy");
for (var _i3 = 0; _i3 < buttons3.length; _i3++) {
  buttons3[_i3].addEventListener("click", function () {
    donutChart();
  });
}
/* occupancy Efficiency end */

/* indoor air quality */

var chart6; // Single chart instance

function replaceIndoorChart(newChartFunction) {
  // Destroy the existing chart if it exists
  if (chart6) {
    if (chart6 instanceof ApexCharts) {
      console.log("Pie chart destroyed");
      chart6.destroy(); // Dispose the existing chart
    } else if (chart6 instanceof AmCharts.AmChart) {
      console.log("Pie chart destroyed");
      chart6.clear(); // Clear the existing AmCharts instance
    } else if (chart6 instanceof am4charts.XYChart) {
      console.log("Pie chart destroyed");
      chart6.dispose(); // Dispose the existing am4charts instance
    }
  }
  newChartFunction();
}
function createPieChart() {
  var style = document.createElement('style');
  style.innerHTML = "\n        #chartdiv4 .apexcharts-text {\n            fill: #000000; /* Change this to your desired color */\n             /* Corrected property name font-size: 20px; */\n        font-weight: bold; /* Corrected property name */\n        }\n    ";
  document.head.appendChild(style);
  // Pie chart options
  var options = {
    series: [76],
    chart: {
      height: 290,
      type: 'radialBar'
    },
    plotOptions: {
      radialBar: {
        offsetY: 30,
        startAngle: 0,
        endAngle: 360,
        hollow: {
          margin: 5,
          size: '65%',
          background: 'transparent'
        },
        dataLabels: {
          name: {
            show: true
          },
          value: {
            show: true
          },
          total: {
            show: true,
            label: 'AQI',
            fontSize: '30px',
            fontWeight: 'bold',
            color: '#000000',
            formatter: function formatter(w) {
              var totalValue = w.globals.seriesTotals.reduce(function (a, b) {
                return a + b;
              }, 0);
              return totalValue + " Good";
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
      offsetY: 1,
      labels: {
        useSeriesColors: true
      },
      markers: {
        size: 0
      },
      formatter: function formatter(seriesName, opts) {
        return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
      },
      itemMargin: {
        vertical: 3
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          show: false
        }
      }
    }]
  };

  // Create a new pie chart
  chart6 = new ApexCharts(document.querySelector("#chartdiv4"), options);
  chart6.render();
  clearDateInputsAir();
}
createPieChart();
function createBarChart() {
  // Generate data for the bar chart
  var startDateValue = document.getElementById("startDateIAQ").value;
  var endDateValue = document.getElementById("endDateIAQ").value;
  if (startDateValue && endDateValue) {
    var startDate = new Date(startDateValue);
    var endDate = new Date(endDateValue);

    // Ensure the start date is not later than the end date
    if (startDate > endDate) {
      alert('Start Date cannot be after End Date');
      return;
    }
    var chartData = generateChartData(startDate, endDate);
    if (chartData.length === 0) {
      alert('No data to display for the selected range');
      return;
    }
    replaceIndoorChart(function () {
      // Create the bar chart
      chart6 = AmCharts.makeChart('chartdiv4', {
        "type": "serial",
        "theme": "white",
        "color": "#000",
        "legend": {
          "useGraphSettings": true,
          "color": "#000",
          "position": "top",
          "align": "center",
          "marginBottom": 10,
          "valueText": ""
        },
        "dataProvider": chartData,
        "synchronizeGrid": true,
        "valueAxes": [{
          "id": "v1",
          "axisColor": "#000",
          "axisThickness": 1,
          "axisAlpha": 1,
          "position": "left"
        }],
        "graphs": [{
          "valueAxis": "v1",
          "lineColor": "#FF6600",
          "fillColors": "#FF6600",
          "title": "Indoor Air Quality",
          "valueField": "domesticwater",
          "type": "column",
          "fillAlphas": 1,
          "balloonText": "[[value]] Indoor Air Quality"
        }],
        "chartScrollbar": {
          "selectedGraphLineColor": "#888",
          "position": "bottom",
          "offset": 20
        },
        "chartCursor": {
          "cursorPosition": "mouse"
        },
        "categoryField": "date",
        "categoryAxis": {
          "parseDates": true,
          "axisColor": "#000",
          "minorGridEnabled": true
        },
        "export": {
          "enabled": true,
          "position": "bottom-right"
        },
        "zoomControl": {
          "zoomControlEnabled": false
        }
      });
      chart6.addListener("dataUpdated", zoomChart);
      zoomChart();
      function zoomChart() {
        chart6.zoomToIndexes(chart6.dataProvider.length - 70, chart6.dataProvider.length - 1);
      }
    });
  }
}

// Function to generate chart data for the bar chart
function generateChartData(startDate, endDate) {
  var chartData = [];
  var visits = 10;
  var currentDate = new Date(startDate);
  while (currentDate <= endDate) {
    visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
    chartData.push({
      date: new Date(currentDate),
      domesticwater: visits,
      flushingwater: visits + Math.round(Math.random() * 30)
    });
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return chartData;
}
function aqiBarChart() {
  var options = {
    series: [{
      data: [35, 44, 55, 57, 56, 61, 58, 63, 60, 66, 60, 55, 50]
    }],
    chart: {
      type: 'bar',
      height: 280,
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      labels: {
        style: {
          colors: '#000000'
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: '#000000'
        }
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function formatter(val) {
          return val;
        }
      }
    }
  };

  // Using replaceChart to render the bar chart
  replaceIndoorChart(function () {
    chart6 = new ApexCharts(document.querySelector("#chartdiv4"), options);
    chart6.render();
    clearDateInputsAir();
  });
}
function clearDateInputsAir() {
  document.getElementById('startDateIAQ').value = ''; // Clear start date
  document.getElementById('endDateIAQ').value = ''; // Clear end date
}
/* indoor air quality */

/* epi index start */
var currentChart;

// Function to replace the current chart with a new one
function deleteChart(newChartFunction) {
  // Only destroy the current chart if it exists
  if (currentChart) {
    if (currentChart instanceof ApexCharts) {
      console.log("Pie chart destroyed");
      currentChart.destroy(); // Dispose the existing chart
    } else if (currentChart instanceof AmCharts.AmChart) {
      console.log("Pie chart destroyed");
      currentChart.clear(); // Clear the existing AmCharts instance
    } else if (currentChart instanceof am4charts.XYChart) {
      console.log("Pie chart destroyed");
      currentChart.dispose(); // Dispose the existing am4charts instance
    }
  }

  // Call the new chart function to render a new chart
  newChartFunction();
}

// Function to create the EPI Chart
// function epiChart() {
//     const style = document.createElement('style');
//     style.innerHTML = `
//         #chartdiv5 .apexcharts-text {
//             fill: #000000; /* Change this to your desired color */
//             font-weight: bold;
//         }
//     `;
//     document.head.appendChild(style);
//     var options = {
//         series: [33, 33, 34],
//         chart: {
//             type: 'donut',
//             height: 290,
//             animations: {
//                 enabled: false // Disable all animations, including rotation
//             }
//         },
//         labels: ['HVAC', 'UPS', 'RP & LTG'], // Customize labels
//         tooltip: {
//             y: {
//                 formatter: function (val) {
//                     return val + " units"; // Customize the tooltip text
//                 }
//             }
//         },
//         colors: ['#FFB200', '#667BC6', '#D1E9F6'], 
//         legend: {
//             show: true,
//             position: 'top', // Position the legend at the top
//             horizontalAlign: 'center', // Center the legend
//             labels: {
//                 colors: Array(5).fill('#000000'), // Set all legend label colors to white
//             },
//             offsetY: 0
//         },
//         plotOptions: {
//             pie: {
//                 donut: {
//                     size: '50%', // Set the size of the inner donut
//                     labels: {
//                         show: true, 
//                         total: {
//                             show: true, // Show the total label
//                             label: 'EPI', // Custom label text for total
//                             fontSize: '30px',
//                             fontWeight: 'bold',
//                             color: '#000000', // Total text color
//                             formatter: function (w) {
//                                 const totalValue = w.globals.seriesTotals.reduce((a, b) => a + b, 0);
//                                 return totalValue; // Return plain text // Change color of the total value
//                             }
//                         }
//                     },
//                     offsetY: 0
//                 }
//             }
//         },
//         responsive: [{
//             breakpoint: 480,
//             options: {
//                 chart: {
//                     width: 200
//                 },
//                 legend: {
//                     position: 'top'
//                 }
//             }
//         }],
//         dataLabels:{
//             enabled:false
//         },
//         stroke: {
//             show: false // Disable stroke (border) around the donut segments
//         }
//     };

//     // Create a new chart instance
//     currentChart = new ApexCharts(document.querySelector("#chartdiv5"), options);
//     currentChart.render();
//     clearDateInputsEPI();
// }

function epiChart() {
  var style = document.createElement('style');
  style.innerHTML = "\n        #chartdiv5 .apexcharts-text {\n            fill: #000000; /* Change this to your desired color */\n            font-weight: bold;\n        }\n    ";
  document.head.appendChild(style);
  var seriesData = [33, 33, 34]; // Your data
  var totalValue = seriesData.reduce(function (a, b) {
    return a + b;
  }, 0); // Calculate the total value

  var options = {
    series: seriesData,
    chart: {
      type: 'donut',
      height: 290,
      animations: {
        enabled: false // Disable all animations, including rotation
      }
    },
    labels: ['HVAC', 'UPS', 'RP & LTG'],
    // Customize labels
    tooltip: {
      y: {
        formatter: function formatter(val) {
          return val + " units"; // Customize the tooltip text
        }
      }
    },
    colors: ['#FFB200', '#667BC6', '#D1E9F6'],
    legend: {
      show: true,
      position: 'top',
      // Position the legend at the top
      horizontalAlign: 'center',
      // Center the legend
      labels: {
        colors: Array(5).fill('#000000') // Set all legend label colors to black
      },
      offsetY: 0
    },
    plotOptions: {
      pie: {
        donut: {
          size: '50%',
          // Set the size of the inner donut
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: '30px',
              fontWeight: 'bold',
              color: '#000000',
              formatter: function formatter() {
                return 'EPI'; // Static 'EPI' label for each slice
              }
            },
            value: {
              show: true,
              fontSize: '30px',
              fontWeight: 'bold',
              color: '#000000',
              formatter: function formatter() {
                return totalValue; // Static total value displayed for each slice
              }
            },
            total: {
              show: true,
              // Show the total label
              label: 'EPI',
              // Static 'EPI' label in the center
              fontSize: '30px',
              fontWeight: 'bold',
              color: '#000000',
              // Total text color
              formatter: function formatter() {
                return totalValue; // Return the calculated total value
              }
            }
          },
          offsetY: 0
        }
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'top'
        }
      }
    }],
    stroke: {
      show: false // Disable stroke (border) around the donut segments
    }
  };

  // Create a new chart instance
  currentChart = new ApexCharts(document.querySelector("#chartdiv5"), options);
  currentChart.render();
  clearDateInputsEPI();
}
deleteChart(epiChart);

// Function to generate data for the line chart
function generateChartData(startDate, endDate) {
  var chartData = [];
  var visits = 10; // Different initial value for the second chart
  var currentDate = new Date(startDate);
  while (currentDate <= endDate) {
    visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
    chartData.push({
      date: new Date(currentDate),
      domesticwater: visits,
      flushingwater: visits + Math.round(Math.random() * 30)
    });
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return chartData;
}

// Function to create the line chart based on date range
function epiLine() {
  var startDateValue = document.getElementById("startDateEPI").value;
  var endDateValue = document.getElementById("endDateEPI").value;
  if (startDateValue && endDateValue) {
    var startDate = new Date(startDateValue);
    var endDate = new Date(endDateValue);

    // Ensure the start date is not later than the end date
    if (startDate > endDate) {
      alert('Start Date cannot be after End Date');
      return;
    }
    var chartData = generateChartData(startDate, endDate);
    if (chartData.length === 0) {
      alert('No data to display for the selected range');
      return;
    }

    // Replace the current chart with a new line chart
    deleteChart(function () {
      var chart = AmCharts.makeChart('chartdiv5', {
        "type": "serial",
        "theme": "bwhite",
        "color": "#000",
        "legend": {
          "useGraphSettings": true,
          "color": "#000",
          "position": "top",
          // Legend at top
          "align": "center",
          // Center the legend
          "marginBottom": 10,
          // Space below legend
          "valueText": ""
        },
        "dataProvider": chartData,
        "synchronizeGrid": true,
        "valueAxes": [{
          "id": "v1",
          "axisColor": "#000",
          "axisThickness": 1,
          "axisAlpha": 1,
          "position": "left"
        }],
        "graphs": [{
          "valueAxis": "v1",
          "lineColor": "#FF0000",
          "bulletBorderThickness": 1,
          "hideBulletsCount": 30,
          "title": "Domestic Water",
          "valueField": "domesticwater",
          "fillAlphas": 0,
          "type": "smoothedLine"
        }, {
          "valueAxis": "v1",
          "lineColor": "#399918",
          "bulletBorderThickness": 1,
          "hideBulletsCount": 30,
          "title": "Flushing Water",
          "valueField": "flushingwater",
          "fillAlphas": 0,
          "type": "smoothedLine"
        }],
        "chartScrollbar": {
          "selectedGraphLineColor": "#888",
          "position": "bottom",
          // Set scrollbar position to bottom
          "offset": 20 // Ensure some offset from the chart
        },
        "chartCursor": {
          "cursorPosition": "mouse"
        },
        "categoryField": "date",
        "categoryAxis": {
          "parseDates": true,
          "axisColor": "#000",
          "minorGridEnabled": true
        },
        "export": {
          "enabled": true,
          "position": "bottom-right"
        },
        "zoomControl": {
          "zoomControlEnabled": false
        }
      });
      chart.addListener("dataUpdated", zoomChart);
      zoomChart();
      function zoomChart() {
        chart.zoomToIndexes(chart.dataProvider.length - 70, chart.dataProvider.length - 1);
      }
    });
  }
}

// Function to create the bar chart
function epiBarChart() {
  am4core.ready(function () {
    // Replace the current chart with a new bar chart
    deleteChart(function () {
      // Themes begin
      am4core.useTheme(am4themes_animated);
      // Themes end

      var chart = am4core.create('chartdiv5', am4charts.XYChart);
      chart.padding(0, 0, 0, 0);
      chart.colors.step = 2;
      chart.legend = new am4charts.Legend();
      chart.legend.position = 'top';
      chart.legend.paddingBottom = 20;
      chart.legend.labels.template.maxWidth = 95;
      chart.legend.labels.template.fill = am4core.color('#000000');
      var xAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      xAxis.dataFields.category = 'category';
      xAxis.renderer.cellStartLocation = 0.2;
      xAxis.renderer.cellEndLocation = 0.8;
      xAxis.renderer.grid.template.location = 0;
      xAxis.renderer.labels.template.fill = am4core.color('#000000');
      xAxis.renderer.minGridDistance = 20;
      xAxis.renderer.labels.template.rotation = 270; // Rotate labels
      xAxis.renderer.labels.template.horizontalCenter = "right"; // Align to right
      xAxis.renderer.labels.template.verticalCenter = "middle"; // Center vertically

      var yAxis = chart.yAxes.push(new am4charts.ValueAxis());
      yAxis.min = 0;
      yAxis.renderer.labels.template.fill = am4core.color('#000000');
      function createSeries(value, name, color) {
        var series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueY = value;
        series.dataFields.categoryX = "category";
        series.name = name;
        series.columns.template.fill = am4core.color(color); // Fill color
        series.columns.template.stroke = am4core.color(color); // Stroke color
        series.tooltipText = '{name}: {valueY}';
        series.tooltip.background.fill = am4core.color('#ffffff'); // Tooltip background color
        series.tooltip.label.fill = am4core.color('#000000'); // Tooltip text color
        series.tooltip.pointerOrientation = 'vertical'; // Tooltip orientation
        series.tooltip.getFillFromObject = false; // Ensure tooltip color is set explicitly
        series.tooltip.getStrokeFromObject = false; // Ensure tooltip border color is set explicitly

        var bullet = series.bullets.push(new am4charts.LabelBullet());
        bullet.interactionsEnabled = false;
        bullet.dy = 30;
        bullet.label.fill = am4core.color('#000000');
        return series;
      }
      chart.data = [{
        category: 'Jan',
        first: 40,
        second: 55,
        third: 60
      }, {
        category: 'Feb',
        first: 30,
        second: 78,
        third: 69
      }, {
        category: 'Mar',
        first: 27,
        second: 40,
        third: 45
      }, {
        category: 'Apr',
        first: 50,
        second: 33,
        third: 22
      }, {
        category: 'May',
        first: 50,
        second: 33,
        third: 22
      }, {
        category: 'Jun',
        first: 50,
        second: 33,
        third: 22
      }, {
        category: 'Jul',
        first: 50,
        second: 33,
        third: 22
      }, {
        category: 'Aug',
        first: 50,
        second: 33,
        third: 22
      }, {
        category: 'Sep',
        first: 50,
        second: 33,
        third: 22
      }, {
        category: 'Oct',
        first: 50,
        second: 33,
        third: 22
      }, {
        category: 'Nov',
        first: 50,
        second: 33,
        third: 22
      }, {
        category: 'Dec',
        first: 50,
        second: 33,
        third: 22
      }];
      createSeries('first', 'HVAC', '#FFB200'); //'#8458B3', '#D33682', '#FFA600'
      createSeries('second', 'UPS', '#667BC6');
      createSeries('third', 'RT & LTG', '#D1E9F6');
      clearDateInputsEPI();
      chart.logo.disabled = true;
    });
  });
}
function clearDateInputsEPI() {
  document.getElementById('startDateEPI').value = ''; // Clear start date
  document.getElementById('endDateEPI').value = ''; // Clear end date
}
function getLast12Months() {
  var months = [];
  var currentDate = new Date();
  // Generate the last 12 months, including the current month
  for (var _i4 = 0; _i4 < 12; _i4++) {
    var monthIndex = currentDate.getMonth() - _i4; // Get month index
    var monthDate = new Date(currentDate.setMonth(monthIndex)); // Create date
    months.unshift(monthDate.toLocaleString('default', {
      month: 'long'
    })); // Add month name
  }
  return months; // Return last 12 months
}
function getRandomData() {
  return Array.from({
    length: 12
  }, function () {
    return Math.floor(Math.random() * 100);
  }); // Random data for demonstration
}
function getLast12MonthsExcludingCurrent() {
  var months = [];
  var currentDate = new Date();
  // Generate the last 12 months excluding the current month
  for (var _i5 = 1; _i5 <= 12; _i5++) {
    var monthIndex = currentDate.getMonth() - _i5; // Get month index (current month excluded)
    var monthDate = new Date(currentDate.setMonth(monthIndex)); // Create date
    months.unshift(monthDate.toLocaleString('default', {
      month: 'long'
    })); // Add month name
  }
  return months; // Return last 12 months excluding the current month
}
function getRandomData() {
  return Array.from({
    length: 12
  }, function () {
    return Math.floor(Math.random() * 100);
  }); // Random data for demonstration
}
function getLast12Months() {
  var months = [];
  var currentDate = new Date();
  currentDate.setMonth(currentDate.getMonth()); // Start from the previous month (September 2024)

  // Generate the last 12 months
  for (var _i6 = 0; _i6 < 12; _i6++) {
    var monthDate = new Date(currentDate.setMonth(currentDate.getMonth() - 1)); // Increment month
    months.push(monthDate.toLocaleString('default', {
      month: 'long',
      year: 'numeric'
    })); // Add month and year
  }
  return months; // Return the last 12 months
}
function getRandomData() {
  return Array.from({
    length: 12
  }, function () {
    return Math.floor(Math.random() * 100);
  }); // Random data for demonstration
}
function createBarChart() {
  var options = {
    series: [{
      name: 'Occupancy',
      data: getRandomData() // Replace with your actual data
    }],
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      }
    },
    colors: ["#E11D74"],
    dataLabels: {
      enabled: true
    },
    xaxis: {
      categories: getLast12Months() // Last 12 months from October 2023 to September 2024 as categories
    },
    yaxis: {
      title: {
        text: 'Occupancy (%)'
      }
    },
    grid: {
      show: true
    },
    tooltip: {
      y: {
        formatter: function formatter(val) {
          return val + " %"; // Customize tooltip text
        }
      }
    },
    legend: {
      position: 'top',
      horizontalAlign: 'center',
      labels: {
        colors: ['#000000']
      }
    }
  };
  var chart = new ApexCharts(document.querySelector("#chartdiv6"), options);
  chart.render();
}

// Create the bar chart on page load
createBarChart();
