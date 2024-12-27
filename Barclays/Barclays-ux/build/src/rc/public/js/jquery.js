function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
jQuery(function () {
  var url = "https://localhost";
  var currentDate = new Date();
  console.log("Current day: " + currentDate);
  currentDate.setDate(currentDate.getDate() - 1); // Subtract one day
  var previousDate = currentDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD

  console.log("Previous day: " + previousDate);
  var intervalId; // Variable to store the interval ID

  //  intervalId=setInterval(pieChart, 5000);

  var emissionChart;
  function disposeChartCo(_x) {
    return _disposeChartCo.apply(this, arguments);
  }
  function _disposeChartCo() {
    _disposeChartCo = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee32(newChartFunction) {
      return _regeneratorRuntime().wrap(function _callee32$(_context32) {
        while (1) switch (_context32.prev = _context32.next) {
          case 0:
            // Destroy the existing chart if it exists
            if (emissionChart) {
              if (emissionChart instanceof ApexCharts) {
                emissionChart.destroy(); // Dispose the existing ApexCharts instance
              } else {
                emissionChart.dispose(); // Dispose the existing am4charts instance
              }
            }
            newChartFunction();
          case 2:
          case "end":
            return _context32.stop();
        }
      }, _callee32);
    }));
    return _disposeChartCo.apply(this, arguments);
  }
  function pieChart() {
    return _pieChart.apply(this, arguments);
  }
  function _pieChart() {
    _pieChart = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee33() {
      var style, scopeValues, scopes, _i, _scopes, scope, responses, text, parser, xmlDoc, objs, i, obj, real, valueText, value, totalValue, percentages, options;
      return _regeneratorRuntime().wrap(function _callee33$(_context33) {
        while (1) switch (_context33.prev = _context33.next) {
          case 0:
            // Append a style block to customize the text appearance in the chart
            style = document.createElement('style');
            style.innerHTML = "\n            #chartdiv .apexcharts-text {\n                fill: #000000; /* Change this to your desired color */\n                font-weight: bold; /* Ensure bold text */\n            }\n        ";
            style.id = 'chartdiv-styles';
            document.head.appendChild(style);
            // Initialize scopeValues as an empty array
            scopeValues = [];
            scopes = ['scope1date', 'scope2date', 'scope3date']; // Fetch data for each scope
            _i = 0, _scopes = scopes;
          case 7:
            if (!(_i < _scopes.length)) {
              _context33.next = 24;
              break;
            }
            scope = _scopes[_i];
            _context33.next = 11;
            return fetch("".concat(url, "/obix/histories/SqlServerDatabase/").concat(scope, "/~historyQuery?start=").concat(previousDate, "T23:59:59.000+05:30&limit=1"));
          case 11:
            responses = _context33.sent;
            console.log("response for scope " + scope, responses);
            _context33.next = 15;
            return responses.text();
          case 15:
            text = _context33.sent;
            // Parse the XML data
            parser = new DOMParser();
            xmlDoc = parser.parseFromString(text, "text/xml"); // Get all <obj> elements
            objs = xmlDoc.getElementsByTagName("list");
            console.log("length " + objs.length);
            // Process each <obj> element
            for (i = 0; i < objs.length; i++) {
              obj = objs[i];
              real = obj.getElementsByTagName("real")[0]; // Get the <real> tag
              if (real) {
                valueText = real.getAttribute("val"); // Get the value of the <real> tag
                console.log("value text " + valueText);
                if (valueText) {
                  value = parseFloat(valueText).toFixed(2); // Format to 2 decimal places
                  // Add the value for the scope
                  scopeValues.push(parseFloat(value)); // Directly push the value without object key
                }
              }
            }
          case 21:
            _i++;
            _context33.next = 7;
            break;
          case 24:
            //let scopeValues = [55.44,90,110];
            // scopeValues = scopeValues.map(value => Math.min(value, 100));
            // Calculate the total value
            totalValue = scopeValues.reduce(function (sum, value) {
              return sum + value;
            }, 0); // Sum the values for each scope
            percentages = scopeValues.map(function (value) {
              return value / totalValue * 100;
            }); // Radial bar chart options
            options = {
              series: percentages,
              // Use the calculated series values
              chart: {
                height: '100%',
                type: 'radialBar' // Set chart type to radialBar
              },
              plotOptions: {
                radialBar: {
                  offsetY: 10,
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
                        return totalValue.toFixed(2); // Display static total value in the center
                      }
                    },
                    total: {
                      show: true,
                      label: 'Total',
                      fontSize: '30px',
                      fontWeight: 'bold',
                      color: '#000000',
                      formatter: function formatter() {
                        return totalValue.toFixed(2); // Static total value
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
              labels: ["Scope 1", "Scope 2", "Scope 3"],
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
                  vertical: 1
                } // Margin between legend items
              },
              tooltip: {
                enabled: true,
                shared: false,
                // Disable shared tooltip
                style: {
                  fontSize: '16px' // Optional: set font size for the tooltip text
                },
                custom: function custom(_ref31) {
                  var series = _ref31.series,
                    seriesIndex = _ref31.seriesIndex,
                    w = _ref31.w;
                  var name = w.globals.labels[seriesIndex]; // Get the label
                  var value = series[seriesIndex]; // Get the value
                  value = value.toFixed(2);

                  // Define background colors for each series
                  var backgroundColors = ['#FFB22C',
                  // Color for Series 1
                  '#A4CE95',
                  // Color for Series 2
                  '#FFD93D' // Color for Series 3 (if applicable)
                  ];

                  // Get the background color based on the series index
                  var backgroundColor = backgroundColors[seriesIndex] || '#F7F7F7'; // Default color if index is out of bounds

                  return "<div style=\"color: #00000; background: ".concat(backgroundColor, "; padding: 8px; border-radius: 4px; box-shadow: 0 2px 10px rgba(0,0,0,0.2);\">\n                        <strong style=\"color: #000000;\">").concat(name, "</strong>: <span style=\"color: #000000;\">").concat(value, "</span>\n                    </div>"); // Show name and value in tooltip
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
            }; // Create and render the new radial bar chart
            emissionChart = new ApexCharts(document.querySelector("#chartdiv"), options);
            emissionChart.render();
          case 29:
          case "end":
            return _context33.stop();
        }
      }, _callee33);
    }));
    return _pieChart.apply(this, arguments);
  }
  disposeChartCo(pieChart);
  function lineChartMonthlyCo25() {
    return _lineChartMonthlyCo.apply(this, arguments);
  }
  function _lineChartMonthlyCo() {
    _lineChartMonthlyCo = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee35() {
      return _regeneratorRuntime().wrap(function _callee35$(_context36) {
        while (1) switch (_context36.prev = _context36.next) {
          case 0:
            am4core.ready(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee34() {
              var today, currentMonth, startDate, endDate, startISO, endISO, waters, waterValues, _i2, _waters, scope, urlToFetch, response, text, parser, xmlDoc, objs, _loop, i, categoryAxis, valueAxis, createSeries;
              return _regeneratorRuntime().wrap(function _callee34$(_context35) {
                while (1) switch (_context35.prev = _context35.next) {
                  case 0:
                    createSeries = function _createSeries(valueField, name, color) {
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
                    };
                    today = new Date();
                    currentMonth = today.getMonth();
                    startDate = new Date(today.getFullYear(), currentMonth - 1, 1);
                    endDate = new Date(today.getFullYear(), currentMonth, 0);
                    startISO = "".concat(startDate.getFullYear(), "-").concat(String(startDate.getMonth() + 1).padStart(2, '0'), "-").concat(String(startDate.getDate()).padStart(2, '0'));
                    endISO = "".concat(endDate.getFullYear(), "-").concat(String(endDate.getMonth() + 1).padStart(2, '0'), "-").concat(String(endDate.getDate()).padStart(2, '0'));
                    waters = ['scope1date', 'scope2date', 'scope3date'];
                    waterValues = []; // Fetch data asynchronously for each scope
                    _i2 = 0, _waters = waters;
                  case 10:
                    if (!(_i2 < _waters.length)) {
                      _context35.next = 43;
                      break;
                    }
                    scope = _waters[_i2];
                    urlToFetch = "".concat(url, "/obix/histories/SqlServerDatabase/").concat(scope, "/~historyQuery?start=").concat(startISO, "T23:59:59.000+05:30&end=").concat(endISO, "T23:59:59.000+05:30");
                    console.log(urlToFetch);
                    _context35.prev = 14;
                    _context35.next = 17;
                    return fetch(urlToFetch);
                  case 17:
                    response = _context35.sent;
                    console.log(response);
                    if (response.ok) {
                      _context35.next = 22;
                      break;
                    }
                    console.error("Error fetching data for ".concat(scope, ": ").concat(response.status, " - ").concat(response.statusText));
                    return _context35.abrupt("continue", 40);
                  case 22:
                    _context35.next = 24;
                    return response.text();
                  case 24:
                    text = _context35.sent;
                    parser = new DOMParser();
                    xmlDoc = parser.parseFromString(text, "text/xml");
                    objs = xmlDoc.getElementsByTagName("obj");
                    _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
                      var obj, abstime, real, dateText, valueText, value, date, formattedDate, dateStr, existingEntry;
                      return _regeneratorRuntime().wrap(function _loop$(_context34) {
                        while (1) switch (_context34.prev = _context34.next) {
                          case 0:
                            obj = objs[i];
                            abstime = obj.getElementsByTagName("abstime")[0];
                            real = obj.getElementsByTagName("real")[0];
                            if (abstime && real) {
                              dateText = abstime.getAttribute("val");
                              valueText = real.getAttribute("val");
                              if (valueText && dateText) {
                                value = parseFloat(valueText).toFixed(2);
                                date = new Date(dateText);
                                formattedDate = date.toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric"
                                });
                                dateStr = date.toDateString(); // Use toDateString to compare without time
                                existingEntry = waterValues.find(function (entry) {
                                  return entry.date.toDateString() === dateStr;
                                });
                                if (existingEntry) {
                                  existingEntry[scope] = parseFloat(value);
                                } else {
                                  waterValues.push(_defineProperty({
                                    date: date
                                  }, scope, parseFloat(value)));
                                }
                              }
                            }
                          case 4:
                          case "end":
                            return _context34.stop();
                        }
                      }, _loop);
                    });
                    i = 0;
                  case 30:
                    if (!(i < objs.length)) {
                      _context35.next = 35;
                      break;
                    }
                    return _context35.delegateYield(_loop(), "t0", 32);
                  case 32:
                    i++;
                    _context35.next = 30;
                    break;
                  case 35:
                    _context35.next = 40;
                    break;
                  case 37:
                    _context35.prev = 37;
                    _context35.t1 = _context35["catch"](14);
                    console.error("Error fetching data for ".concat(scope, ": ").concat(_context35.t1.message));
                  case 40:
                    _i2++;
                    _context35.next = 10;
                    break;
                  case 43:
                    // Themes begin
                    am4core.useTheme(am4themes_animated);
                    // Themes end

                    // Create chart instance
                    emissionChart = am4core.create("chartdiv", am4charts.XYChart);
                    emissionChart.paddingRight = 20;

                    // Add data
                    emissionChart.data = waterValues;
                    waterValues.forEach(function (item) {
                      item.date = new Date(item.date).getTime(); // Convert to timestamp
                      console.log("item date (timestamp): " + item.date);

                      // Convert timestamp back to a readable date
                      var formattedDate = new Date(item.date).toLocaleDateString("en-US", {
                        // year: "numeric",
                        month: "short",
                        day: "numeric"
                      });
                      item.date = formattedDate;
                      console.log("Formatted item date: " + formattedDate);
                    });

                    // Create axes
                    categoryAxis = emissionChart.xAxes.push(new am4charts.CategoryAxis());
                    categoryAxis.dataFields.category = "date"; // Use 'date' instead of 'year'
                    categoryAxis.renderer.minGridDistance = 80;
                    // categoryAxis.renderer.grid.template.location = 2;
                    // categoryAxis.startLocation = 1;
                    // categoryAxis.endLocation = 1.5;
                    categoryAxis.renderer.labels.template.horizontalCenter = "middle"; // Center labels
                    categoryAxis.renderer.labels.template.verticalCenter = "middle"; // Center labels
                    valueAxis = emissionChart.yAxes.push(new am4charts.ValueAxis());
                    valueAxis.baseValue = 0;

                    // Function to create series

                    emissionChart.legend = new am4charts.Legend();
                    emissionChart.legend.position = "top";
                    emissionChart.legend.paddingBottom = 10;
                    emissionChart.legend.labels.template.maxWidth = 95;
                    // Create three series with different data fields and colors
                    createSeries("scope1date", "Scope 1", am4core.color("#FFB22C"));
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
                  case 66:
                  case "end":
                    return _context35.stop();
                }
              }, _callee34, null, [[14, 37]]);
            })));
          case 1:
          case "end":
            return _context36.stop();
        }
      }, _callee35);
    }));
    return _lineChartMonthlyCo.apply(this, arguments);
  }
  function dateRangeCo2() {
    return _dateRangeCo.apply(this, arguments);
  }
  function _dateRangeCo() {
    _dateRangeCo = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee37() {
      return _regeneratorRuntime().wrap(function _callee37$(_context39) {
        while (1) switch (_context39.prev = _context39.next) {
          case 0:
            am4core.ready(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee36() {
              var startDateValue, endDateValue, waters, waterValues, _i3, _waters2, scope, urlToFetch, response, text, parser, xmlDoc, objs, _loop2, i, emissionChart, categoryAxis, valueAxis, createSeries;
              return _regeneratorRuntime().wrap(function _callee36$(_context38) {
                while (1) switch (_context38.prev = _context38.next) {
                  case 0:
                    createSeries = function _createSeries2(valueField, name, color) {
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
                    };
                    startDateValue = $("#startDate").val();
                    endDateValue = $("#endDate").val();
                    waters = ['scope1date', 'scope2date', 'scope3date'];
                    waterValues = []; // Fetch data asynchronously for each scope
                    _i3 = 0, _waters2 = waters;
                  case 6:
                    if (!(_i3 < _waters2.length)) {
                      _context38.next = 39;
                      break;
                    }
                    scope = _waters2[_i3];
                    urlToFetch = "".concat(url, "/obix/histories/SqlServerDatabase/").concat(scope, "/~historyQuery?start=").concat(startDateValue, "T23:59:59.000+05:30&end=").concat(endDateValue, "T23:59:59.000+05:30");
                    console.log(urlToFetch);
                    _context38.prev = 10;
                    _context38.next = 13;
                    return fetch(urlToFetch);
                  case 13:
                    response = _context38.sent;
                    console.log(response);
                    if (response.ok) {
                      _context38.next = 18;
                      break;
                    }
                    console.error("Error fetching data for ".concat(scope, ": ").concat(response.status, " - ").concat(response.statusText));
                    return _context38.abrupt("continue", 36);
                  case 18:
                    _context38.next = 20;
                    return response.text();
                  case 20:
                    text = _context38.sent;
                    parser = new DOMParser();
                    xmlDoc = parser.parseFromString(text, "text/xml");
                    objs = xmlDoc.getElementsByTagName("obj");
                    _loop2 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop2() {
                      var obj, abstime, real, dateText, valueText, value, date, formattedDate, dateStr, existingEntry;
                      return _regeneratorRuntime().wrap(function _loop2$(_context37) {
                        while (1) switch (_context37.prev = _context37.next) {
                          case 0:
                            obj = objs[i];
                            abstime = obj.getElementsByTagName("abstime")[0];
                            real = obj.getElementsByTagName("real")[0];
                            if (abstime && real) {
                              dateText = abstime.getAttribute("val");
                              valueText = real.getAttribute("val");
                              if (valueText && dateText) {
                                value = parseFloat(valueText).toFixed(2);
                                date = new Date(dateText);
                                formattedDate = date.toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric"
                                });
                                dateStr = date.toDateString(); // Use toDateString to compare without time
                                existingEntry = waterValues.find(function (entry) {
                                  return entry.date.toDateString() === dateStr;
                                });
                                if (existingEntry) {
                                  existingEntry[scope] = parseFloat(value);
                                } else {
                                  waterValues.push(_defineProperty({
                                    date: date
                                  }, scope, parseFloat(value)));
                                }
                              }
                            }
                          case 4:
                          case "end":
                            return _context37.stop();
                        }
                      }, _loop2);
                    });
                    i = 0;
                  case 26:
                    if (!(i < objs.length)) {
                      _context38.next = 31;
                      break;
                    }
                    return _context38.delegateYield(_loop2(), "t0", 28);
                  case 28:
                    i++;
                    _context38.next = 26;
                    break;
                  case 31:
                    _context38.next = 36;
                    break;
                  case 33:
                    _context38.prev = 33;
                    _context38.t1 = _context38["catch"](10);
                    console.error("Error fetching data for ".concat(scope, ": ").concat(_context38.t1.message));
                  case 36:
                    _i3++;
                    _context38.next = 6;
                    break;
                  case 39:
                    // Themes begin
                    am4core.useTheme(am4themes_animated);
                    // Themes end

                    // Create chart instance
                    emissionChart = am4core.create("chartdiv", am4charts.XYChart);
                    emissionChart.paddingRight = 20;

                    // Add data
                    emissionChart.data = waterValues;
                    waterValues.forEach(function (item) {
                      item.date = new Date(item.date).getTime(); // Convert to timestamp
                      console.log("item date (timestamp): " + item.date);

                      // Convert timestamp back to a readable date
                      var formattedDate = new Date(item.date).toLocaleDateString("en-US", {
                        // year: "numeric",
                        month: "short",
                        day: "numeric"
                      });
                      item.date = formattedDate;
                      console.log("Formatted item date: " + formattedDate);
                    });

                    // Create axes
                    categoryAxis = emissionChart.xAxes.push(new am4charts.CategoryAxis());
                    categoryAxis.dataFields.category = "date"; // Use 'date' instead of 'year'
                    categoryAxis.renderer.minGridDistance = 80;
                    // categoryAxis.renderer.grid.template.location = 2;
                    // categoryAxis.startLocation = 1;
                    // categoryAxis.endLocation = 1.5;
                    categoryAxis.renderer.labels.template.horizontalCenter = "middle"; // Center labels
                    categoryAxis.renderer.labels.template.verticalCenter = "middle"; // Center labels
                    valueAxis = emissionChart.yAxes.push(new am4charts.ValueAxis());
                    valueAxis.baseValue = 0;

                    // Function to create series

                    emissionChart.legend = new am4charts.Legend();
                    emissionChart.legend.position = "top";
                    emissionChart.legend.paddingBottom = 10;
                    emissionChart.legend.labels.template.maxWidth = 95;
                    // Create three series with different data fields and colors
                    createSeries("scope1date", "Scope 1", am4core.color("#FFB22C"));
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
                  case 62:
                  case "end":
                    return _context38.stop();
                }
              }, _callee36, null, [[10, 33]]);
            })));
          case 1:
          case "end":
            return _context39.stop();
        }
      }, _callee37);
    }));
    return _dateRangeCo.apply(this, arguments);
  }
  function createBarChart1() {
    return _createBarChart.apply(this, arguments);
  } // function clearUpdateInterval() {
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
  function _createBarChart() {
    _createBarChart = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee38() {
      var scopeData, last12MonthsData, _iterator, _step, month, scopeUrls, i, response, text, parser, xml, records, _iterator2, _step2, _record$getElementsBy, _record$getElementsBy2, record, abstime, realValue, abstimeDate, formattedAbstime, existingStyle, chartOptions;
      return _regeneratorRuntime().wrap(function _callee38$(_context40) {
        while (1) switch (_context40.prev = _context40.next) {
          case 0:
            scopeData = [[], [], []]; // Scope 1, Scope 2, Scope 3
            last12MonthsData = getLast12Months1();
            console.log("bar " + last12MonthsData);
            _iterator = _createForOfIteratorHelper(last12MonthsData);
            _context40.prev = 4;
            _iterator.s();
          case 6:
            if ((_step = _iterator.n()).done) {
              _context40.next = 36;
              break;
            }
            month = _step.value;
            scopeUrls = ["".concat(url, "/obix/histories/SqlServerDatabase/YearlyScope1/~historyQuery?start=").concat(month.startDate, "T23:59:59.000+05:30&limit=1"), "".concat(url, "/obix/histories/SqlServerDatabase/YearlyScope2/~historyQuery?start=").concat(month.startDate, "T23:59:59.000+05:30&limit=1"), "".concat(url, "/obix/histories/SqlServerDatabase/YearlyScope3/~historyQuery?start=").concat(month.startDate, "T23:59:59.000+05:30&limit=1")];
            i = 0;
          case 10:
            if (!(i < scopeUrls.length)) {
              _context40.next = 34;
              break;
            }
            _context40.prev = 11;
            _context40.next = 14;
            return fetch(scopeUrls[i]);
          case 14:
            response = _context40.sent;
            if (response.ok) {
              _context40.next = 17;
              break;
            }
            throw new Error("HTTP error! Status: ".concat(response.status));
          case 17:
            _context40.next = 19;
            return response.text();
          case 19:
            text = _context40.sent;
            parser = new DOMParser();
            xml = parser.parseFromString(text, "application/xml");
            records = xml.getElementsByTagName("list");
            _iterator2 = _createForOfIteratorHelper(records);
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                record = _step2.value;
                // Fetch `abstime` and `real` values
                abstime = (_record$getElementsBy = record.getElementsByTagName("abstime")[0]) === null || _record$getElementsBy === void 0 ? void 0 : _record$getElementsBy.getAttribute("val");
                realValue = (_record$getElementsBy2 = record.getElementsByTagName("real")[0]) === null || _record$getElementsBy2 === void 0 ? void 0 : _record$getElementsBy2.getAttribute("val"); // Match the `abstime` with the corresponding `month.startDate`
                if (abstime && realValue) {
                  abstimeDate = new Date(abstime);
                  formattedAbstime = "".concat(abstimeDate.getFullYear(), "-").concat(String(abstimeDate.getMonth() + 1).padStart(2, '0'), "-").concat(String(abstimeDate.getDate()).padStart(2, '0'));
                  if (formattedAbstime === month.startDate) {
                    scopeData[i].push(parseFloat(realValue).toFixed(2));
                  }
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
            _context40.next = 31;
            break;
          case 27:
            _context40.prev = 27;
            _context40.t0 = _context40["catch"](11);
            console.error("Error fetching data for scope ".concat(i + 1, ":"), _context40.t0);
            scopeData[i].push(null); // Push null to maintain alignment
          case 31:
            i++;
            _context40.next = 10;
            break;
          case 34:
            _context40.next = 6;
            break;
          case 36:
            _context40.next = 41;
            break;
          case 38:
            _context40.prev = 38;
            _context40.t1 = _context40["catch"](4);
            _iterator.e(_context40.t1);
          case 41:
            _context40.prev = 41;
            _iterator.f();
            return _context40.finish(41);
          case 44:
            try {
              existingStyle = document.getElementById('chartdiv-styles');
              if (existingStyle) {
                existingStyle.remove();
              }
              chartOptions = {
                series: [{
                  name: 'Scope 1',
                  data: scopeData[0]
                }, {
                  name: 'Scope 2',
                  data: scopeData[1]
                }, {
                  name: 'Scope 3',
                  data: scopeData[2]
                }],
                chart: {
                  type: 'bar',
                  height: "100%",
                  stacked: false,
                  toolbar: {
                    show: false
                  }
                },
                plotOptions: {
                  bar: {
                    horizontal: false,
                    columnWidth: '80%',
                    endingShape: 'rounded'
                  }
                },
                colors: ["#FFB22C", "#A4CE95", "#FFD93D"],
                dataLabels: {
                  enabled: false
                },
                xaxis: {
                  categories: getLast12Months()
                },
                grid: {
                  show: true
                },
                tooltip: {
                  y: {
                    formatter: function formatter(val) {
                      return "".concat(val, " metric tons");
                    }
                  }
                },
                legend: {
                  position: 'top',
                  horizontalAlign: 'center',
                  labels: {
                    colors: ['#000000']
                  }
                },
                stroke: {
                  show: true,
                  width: 2,
                  colors: ['transparent']
                },
                fill: {
                  opacity: 1
                }
              };
              emissionChart = new ApexCharts(document.querySelector("#chartdiv"), chartOptions);
              emissionChart.render();
            } catch (error) {
              console.error("Error processing the data and rendering the chart:", error);
            }
          case 45:
          case "end":
            return _context40.stop();
        }
      }, _callee38, null, [[4, 38, 41, 44], [11, 27]]);
    }));
    return _createBarChart.apply(this, arguments);
  }
  $("#startDate, #endDate").on("change", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return disposeChartCo(dateRangeCo2);
        case 2:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));
  $("#sav_monthly_btn").on("click", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          clearDateInputs();
          _context2.next = 3;
          return disposeChartCo(lineChartMonthlyCo25);
        case 3:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  })));
  $("#sav_daily_btn").on("click", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          clearDateInputs();
          _context3.next = 3;
          return disposeChartCo(pieChart);
        case 3:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  })));
  $("#sav_yearly_btn").on("click", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          clearDateInputs();
          _context4.next = 3;
          return disposeChartCo(createBarChart1);
        case 3:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  })));
  /* co2 emmision end */

  /* water consumption start */

  var waterChart = null; // Declare chart globally to keep track of it
  function disposeChartWater(_x2) {
    return _disposeChartWater.apply(this, arguments);
  } // async function pieChart1() {
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
  function _disposeChartWater() {
    _disposeChartWater = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee39(newChartFunction) {
      return _regeneratorRuntime().wrap(function _callee39$(_context41) {
        while (1) switch (_context41.prev = _context41.next) {
          case 0:
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
          case 2:
          case "end":
            return _context41.stop();
        }
      }, _callee39);
    }));
    return _disposeChartWater.apply(this, arguments);
  }
  function pieChart1() {
    return _pieChart2.apply(this, arguments);
  }
  function _pieChart2() {
    _pieChart2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee40() {
      var scopeValues, scopes, _i4, _scopes2, scope, response, text, parser, xmlDoc, real, valueText;
      return _regeneratorRuntime().wrap(function _callee40$(_context42) {
        while (1) switch (_context42.prev = _context42.next) {
          case 0:
            scopeValues = [];
            scopes = ['domestic', 'flushing']; // Fetch data for each scope
            _i4 = 0, _scopes2 = scopes;
          case 3:
            if (!(_i4 < _scopes2.length)) {
              _context42.next = 27;
              break;
            }
            scope = _scopes2[_i4];
            _context42.prev = 5;
            _context42.next = 8;
            return fetch("".concat(url, "/obix/histories/SqlServerDatabase/").concat(scope, "/~historyQuery?start=").concat(previousDate, "T23:59:59.000+05:30&limit=1"));
          case 8:
            response = _context42.sent;
            if (response.ok) {
              _context42.next = 12;
              break;
            }
            console.error("Failed to fetch data for ".concat(scope, ": ").concat(response.statusText));
            return _context42.abrupt("continue", 24);
          case 12:
            _context42.next = 14;
            return response.text();
          case 14:
            text = _context42.sent;
            // Parse the XML data
            parser = new DOMParser();
            xmlDoc = parser.parseFromString(text, "text/xml"); // Get the first <real> tag
            real = xmlDoc.querySelector("real");
            if (real) {
              valueText = real.getAttribute("val");
              if (valueText) {
                scopeValues.push({
                  category: scope,
                  value: parseFloat(valueText).toFixed(2) // Unified key 'value' for the chart
                });
              }
            }
            _context42.next = 24;
            break;
          case 21:
            _context42.prev = 21;
            _context42.t0 = _context42["catch"](5);
            console.error("Error fetching data for ".concat(scope, ":"), _context42.t0);
          case 24:
            _i4++;
            _context42.next = 3;
            break;
          case 27:
            am4core.ready(function () {
              // Themes begin
              am4core.useTheme(am4themes_animated);

              // Create chart instance if not already created
              waterChart = am4core.create("chartdiv1", am4charts.PieChart);

              // Add data to chart dynamically from fetched data
              waterChart.data = scopeValues;

              // Add and configure Series
              var pieSeries = waterChart.series.push(new am4charts.PieSeries());
              pieSeries.dataFields.value = "value";
              pieSeries.dataFields.category = "category";

              // Set pie chart colors
              pieSeries.slices.template.stroke = am4core.color("transparent");
              pieSeries.slices.template.strokeOpacity = 0;

              // Example of setting colors for each slice (can be dynamically set based on data if needed)
              pieSeries.colors.list = [am4core.color("#C65BCF"),
              // Domestic Use
              am4core.color("#39A7FF") // Flushing Use
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
          case 28:
          case "end":
            return _context42.stop();
        }
      }, _callee40, null, [[5, 21]]);
    }));
    return _pieChart2.apply(this, arguments);
  }
  disposeChartWater(pieChart1);
  function lineChartMonthlyWater() {
    return _lineChartMonthlyWater.apply(this, arguments);
  } // async function lineChartMonthlyWater() {
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
  function _lineChartMonthlyWater() {
    _lineChartMonthlyWater = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee42() {
      return _regeneratorRuntime().wrap(function _callee42$(_context45) {
        while (1) switch (_context45.prev = _context45.next) {
          case 0:
            am4core.ready(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee41() {
              var today, currentMonth, startDate, endDate, startISO, endISO, waters, waterValues, _i5, _waters3, scope, urlToFetch, response, text, parser, xmlDoc, objs, _loop3, i, categoryAxis, valueAxis, createSeries;
              return _regeneratorRuntime().wrap(function _callee41$(_context44) {
                while (1) switch (_context44.prev = _context44.next) {
                  case 0:
                    createSeries = function _createSeries3(valueField, name, color) {
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
                    };
                    today = new Date();
                    currentMonth = today.getMonth();
                    startDate = new Date(today.getFullYear(), currentMonth - 1, 1);
                    endDate = new Date(today.getFullYear(), currentMonth, 0);
                    startISO = "".concat(startDate.getFullYear(), "-").concat(String(startDate.getMonth() + 1).padStart(2, '0'), "-").concat(String(startDate.getDate()).padStart(2, '0'));
                    endISO = "".concat(endDate.getFullYear(), "-").concat(String(endDate.getMonth() + 1).padStart(2, '0'), "-").concat(String(endDate.getDate()).padStart(2, '0'));
                    waters = ['domestic', 'flushing'];
                    waterValues = []; // Fetch data asynchronously for each scope
                    _i5 = 0, _waters3 = waters;
                  case 10:
                    if (!(_i5 < _waters3.length)) {
                      _context44.next = 43;
                      break;
                    }
                    scope = _waters3[_i5];
                    urlToFetch = "".concat(url, "/obix/histories/SqlServerDatabase/").concat(scope, "/~historyQuery?start=").concat(startISO, "T23:59:59.000+05:30&end=").concat(endISO, "T23:59:59.000+05:30");
                    console.log(urlToFetch);
                    _context44.prev = 14;
                    _context44.next = 17;
                    return fetch(urlToFetch);
                  case 17:
                    response = _context44.sent;
                    console.log(response);
                    if (response.ok) {
                      _context44.next = 22;
                      break;
                    }
                    console.error("Error fetching data for ".concat(scope, ": ").concat(response.status, " - ").concat(response.statusText));
                    return _context44.abrupt("continue", 40);
                  case 22:
                    _context44.next = 24;
                    return response.text();
                  case 24:
                    text = _context44.sent;
                    parser = new DOMParser();
                    xmlDoc = parser.parseFromString(text, "text/xml");
                    objs = xmlDoc.getElementsByTagName("obj");
                    _loop3 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop3() {
                      var obj, abstime, real, dateText, valueText, value, date, formattedDate, dateStr, existingEntry;
                      return _regeneratorRuntime().wrap(function _loop3$(_context43) {
                        while (1) switch (_context43.prev = _context43.next) {
                          case 0:
                            obj = objs[i];
                            abstime = obj.getElementsByTagName("abstime")[0];
                            real = obj.getElementsByTagName("real")[0];
                            if (abstime && real) {
                              dateText = abstime.getAttribute("val");
                              valueText = real.getAttribute("val");
                              if (valueText && dateText) {
                                value = parseFloat(valueText).toFixed(2);
                                date = new Date(dateText);
                                formattedDate = date.toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric"
                                });
                                dateStr = date.toDateString(); // Use toDateString to compare without time
                                existingEntry = waterValues.find(function (entry) {
                                  return entry.date.toDateString() === dateStr;
                                });
                                if (existingEntry) {
                                  existingEntry[scope] = parseFloat(value);
                                } else {
                                  waterValues.push(_defineProperty({
                                    date: date
                                  }, scope, parseFloat(value)));
                                }
                              }
                            }
                          case 4:
                          case "end":
                            return _context43.stop();
                        }
                      }, _loop3);
                    });
                    i = 0;
                  case 30:
                    if (!(i < objs.length)) {
                      _context44.next = 35;
                      break;
                    }
                    return _context44.delegateYield(_loop3(), "t0", 32);
                  case 32:
                    i++;
                    _context44.next = 30;
                    break;
                  case 35:
                    _context44.next = 40;
                    break;
                  case 37:
                    _context44.prev = 37;
                    _context44.t1 = _context44["catch"](14);
                    console.error("Error fetching data for ".concat(scope, ": ").concat(_context44.t1.message));
                  case 40:
                    _i5++;
                    _context44.next = 10;
                    break;
                  case 43:
                    // Themes begin
                    am4core.useTheme(am4themes_animated);
                    // Themes end

                    // Create chart instance
                    waterChart = am4core.create("chartdiv1", am4charts.XYChart);
                    waterChart.paddingRight = 20;

                    // Add data
                    waterChart.data = waterValues;
                    waterValues.forEach(function (item) {
                      item.date = new Date(item.date).getTime(); // Convert to timestamp
                      console.log("item date (timestamp): " + item.date);

                      // Convert timestamp back to a readable date
                      var formattedDate = new Date(item.date).toLocaleDateString("en-US", {
                        // year: "numeric",
                        month: "short",
                        day: "numeric"
                      });
                      item.date = formattedDate;
                      console.log("Formatted item date: " + formattedDate);
                    });

                    // Create axes
                    categoryAxis = waterChart.xAxes.push(new am4charts.CategoryAxis());
                    categoryAxis.dataFields.category = "date"; // Use 'date' instead of 'year'
                    categoryAxis.renderer.minGridDistance = 80;
                    // categoryAxis.renderer.grid.template.location = 2;
                    // categoryAxis.startLocation = 1;
                    // categoryAxis.endLocation = 1.5;
                    categoryAxis.renderer.labels.template.horizontalCenter = "middle"; // Center labels
                    categoryAxis.renderer.labels.template.verticalCenter = "middle"; // Center labels
                    valueAxis = waterChart.yAxes.push(new am4charts.ValueAxis());
                    valueAxis.baseValue = 0;

                    // Function to create series

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
                  case 65:
                  case "end":
                    return _context44.stop();
                }
              }, _callee41, null, [[14, 37]]);
            })));
          case 1:
          case "end":
            return _context45.stop();
        }
      }, _callee42);
    }));
    return _lineChartMonthlyWater.apply(this, arguments);
  }
  function daterangeWater() {
    return _daterangeWater.apply(this, arguments);
  }
  function _daterangeWater() {
    _daterangeWater = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee44() {
      return _regeneratorRuntime().wrap(function _callee44$(_context48) {
        while (1) switch (_context48.prev = _context48.next) {
          case 0:
            am4core.ready(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee43() {
              var startDateValue, endDateValue, waters, waterValues, _i6, _waters4, scope, urlToFetch, response, text, parser, xmlDoc, objs, _loop4, i, emissionChart, categoryAxis, valueAxis, createSeries;
              return _regeneratorRuntime().wrap(function _callee43$(_context47) {
                while (1) switch (_context47.prev = _context47.next) {
                  case 0:
                    createSeries = function _createSeries4(valueField, name, color) {
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
                    };
                    startDateValue = $("#startDateWater").val();
                    endDateValue = $("#endDateWater").val();
                    waters = ['domestic', 'flushing'];
                    waterValues = []; // const url = "https://localhost";
                    // Fetch data asynchronously for each scope
                    _i6 = 0, _waters4 = waters;
                  case 6:
                    if (!(_i6 < _waters4.length)) {
                      _context47.next = 39;
                      break;
                    }
                    scope = _waters4[_i6];
                    urlToFetch = "".concat(url, "/obix/histories/SqlServerDatabase/").concat(scope, "/~historyQuery?start=").concat(startDateValue, "T23:59:59.000+05:30&end=").concat(endDateValue, "T23:59:59.000+05:30");
                    console.log(urlToFetch);
                    _context47.prev = 10;
                    _context47.next = 13;
                    return fetch(urlToFetch);
                  case 13:
                    response = _context47.sent;
                    console.log(response);
                    if (response.ok) {
                      _context47.next = 18;
                      break;
                    }
                    console.error("Error fetching data for ".concat(scope, ": ").concat(response.status, " - ").concat(response.statusText));
                    return _context47.abrupt("continue", 36);
                  case 18:
                    _context47.next = 20;
                    return response.text();
                  case 20:
                    text = _context47.sent;
                    // Parse the XML data
                    parser = new DOMParser();
                    xmlDoc = parser.parseFromString(text, "text/xml");
                    objs = xmlDoc.getElementsByTagName("obj");
                    _loop4 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop4() {
                      var obj, abstime, real, dateText, valueText, value, date, formattedDate, dateStr, existingEntry;
                      return _regeneratorRuntime().wrap(function _loop4$(_context46) {
                        while (1) switch (_context46.prev = _context46.next) {
                          case 0:
                            obj = objs[i];
                            abstime = obj.getElementsByTagName("abstime")[0];
                            real = obj.getElementsByTagName("real")[0];
                            if (abstime && real) {
                              dateText = abstime.getAttribute("val");
                              valueText = real.getAttribute("val");
                              if (valueText && dateText) {
                                value = parseFloat(valueText).toFixed(2);
                                date = new Date(dateText);
                                formattedDate = date.toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric"
                                });
                                dateStr = date.toDateString(); // Use toDateString to compare without time
                                existingEntry = waterValues.find(function (entry) {
                                  return entry.date.toDateString() === dateStr;
                                });
                                if (existingEntry) {
                                  existingEntry[scope] = parseFloat(value);
                                } else {
                                  waterValues.push(_defineProperty({
                                    date: date
                                  }, scope, parseFloat(value)));
                                }
                              }
                            }
                          case 4:
                          case "end":
                            return _context46.stop();
                        }
                      }, _loop4);
                    });
                    i = 0;
                  case 26:
                    if (!(i < objs.length)) {
                      _context47.next = 31;
                      break;
                    }
                    return _context47.delegateYield(_loop4(), "t0", 28);
                  case 28:
                    i++;
                    _context47.next = 26;
                    break;
                  case 31:
                    _context47.next = 36;
                    break;
                  case 33:
                    _context47.prev = 33;
                    _context47.t1 = _context47["catch"](10);
                    console.error("Error fetching data for ".concat(scope, ": ").concat(_context47.t1.message));
                  case 36:
                    _i6++;
                    _context47.next = 6;
                    break;
                  case 39:
                    // Themes begin
                    am4core.useTheme(am4themes_animated);
                    // Themes end

                    // Create chart instance
                    emissionChart = am4core.create("chartdiv1", am4charts.XYChart);
                    emissionChart.paddingRight = 20;

                    // Add data
                    emissionChart.data = waterValues;
                    waterValues.forEach(function (item) {
                      item.date = new Date(item.date).getTime(); // Convert to timestamp
                      console.log("item date (timestamp): " + item.date);

                      // Convert timestamp back to a readable date
                      var formattedDate = new Date(item.date).toLocaleDateString("en-US", {
                        // year: "numeric",
                        month: "short",
                        day: "numeric"
                      });
                      item.date = formattedDate;
                      console.log("Formatted item date: " + formattedDate);
                    });

                    // Create axes
                    categoryAxis = emissionChart.xAxes.push(new am4charts.CategoryAxis());
                    categoryAxis.dataFields.category = "date"; // Use 'date' instead of 'year'
                    categoryAxis.renderer.minGridDistance = 80;
                    // categoryAxis.renderer.grid.template.location = 2;
                    // categoryAxis.startLocation = 1;
                    // categoryAxis.endLocation = 1.5;
                    categoryAxis.renderer.labels.template.horizontalCenter = "middle"; // Center labels
                    categoryAxis.renderer.labels.template.verticalCenter = "middle"; // Center labels
                    valueAxis = emissionChart.yAxes.push(new am4charts.ValueAxis());
                    valueAxis.baseValue = 0;

                    // Function to create series

                    emissionChart.legend = new am4charts.Legend();
                    emissionChart.legend.position = "top";
                    emissionChart.legend.paddingBottom = 10;
                    emissionChart.legend.labels.template.maxWidth = 95;
                    // Create three series with different data fields and colors
                    createSeries("domestic", "Domestic", am4core.color("#C65BCF"));
                    createSeries("flushing", "Flushing", am4core.color("#39A7FF"));

                    // Add scrollbar
                    // var scrollbarX = new am4charts.XYChartScrollbar();
                    // scrollbarX.series.push(chart.series.values[0]);  // Add the first series to the scrollbar
                    // chart.scrollbarX = scrollbarX;
                    // scrollbarX.height = 30;
                    emissionChart.scrollbarX = new am4core.Scrollbar();
                    emissionChart.scrollbarX.marginBottom = 20;
                    emissionChart.cursor = new am4charts.XYCursor();
                    emissionChart.logo.disabled = true;
                  case 61:
                  case "end":
                    return _context47.stop();
                }
              }, _callee43, null, [[10, 33]]);
            })));
          case 1:
          case "end":
            return _context48.stop();
        }
      }, _callee44);
    }));
    return _daterangeWater.apply(this, arguments);
  }
  function showClusteredBarChart1() {
    return _showClusteredBarChart.apply(this, arguments);
  }
  function _showClusteredBarChart() {
    _showClusteredBarChart = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee45() {
      var domesticWater, flushingWater, last12Months, previousMonths, _iterator3, _step3, month, scopeUrls, i, response, text, parser, xml, records, _iterator4, _step4, _record$getElementsBy3, _record$getElementsBy4, record, abstime, realValue, abstimeDate, formattedAbstime;
      return _regeneratorRuntime().wrap(function _callee45$(_context49) {
        while (1) switch (_context49.prev = _context49.next) {
          case 0:
            domesticWater = [];
            flushingWater = [];
            last12Months = getLast12Months1();
            console.log(last12Months);
            previousMonths = getLast12Months();
            console.log(previousMonths);
            _iterator3 = _createForOfIteratorHelper(last12Months);
            _context49.prev = 7;
            _iterator3.s();
          case 9:
            if ((_step3 = _iterator3.n()).done) {
              _context49.next = 39;
              break;
            }
            month = _step3.value;
            scopeUrls = ["".concat(url, "/obix/histories/SqlServerDatabase/domesticYearly/~historyQuery?start=").concat(month.startDate, "T23:59:59.000+05:30&limit=1"), "".concat(url, "/obix/histories/SqlServerDatabase/flushingYearly/~historyQuery?start=").concat(month.startDate, "T23:59:59.000+05:30&limit=1")];
            i = 0;
          case 13:
            if (!(i < scopeUrls.length)) {
              _context49.next = 37;
              break;
            }
            _context49.prev = 14;
            _context49.next = 17;
            return fetch(scopeUrls[i]);
          case 17:
            response = _context49.sent;
            if (response.ok) {
              _context49.next = 20;
              break;
            }
            throw new Error("HTTP error! Status: ".concat(response.status));
          case 20:
            _context49.next = 22;
            return response.text();
          case 22:
            text = _context49.sent;
            parser = new DOMParser();
            xml = parser.parseFromString(text, "application/xml");
            records = xml.getElementsByTagName("list");
            _iterator4 = _createForOfIteratorHelper(records);
            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                record = _step4.value;
                // Fetch `abstime` and `real` values
                abstime = (_record$getElementsBy3 = record.getElementsByTagName("abstime")[0]) === null || _record$getElementsBy3 === void 0 ? void 0 : _record$getElementsBy3.getAttribute("val");
                realValue = (_record$getElementsBy4 = record.getElementsByTagName("real")[0]) === null || _record$getElementsBy4 === void 0 ? void 0 : _record$getElementsBy4.getAttribute("val"); // Match the `abstime` with the corresponding `month.startDate`
                if (abstime && realValue) {
                  abstimeDate = new Date(abstime);
                  formattedAbstime = "".concat(abstimeDate.getFullYear(), "-").concat(String(abstimeDate.getMonth() + 1).padStart(2, '0'), "-").concat(String(abstimeDate.getDate()).padStart(2, '0'));
                  if (formattedAbstime === month.startDate) {
                    if (i === 0) {
                      domesticWater.push(parseFloat(realValue).toFixed(1));
                    } else if (i === 1) {
                      flushingWater.push(parseFloat(realValue).toFixed(1));
                    }
                  }
                }
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
            _context49.next = 34;
            break;
          case 30:
            _context49.prev = 30;
            _context49.t0 = _context49["catch"](14);
            console.error("Error fetching data for scope ".concat(i + 1, ":"), _context49.t0);
            if (i === 0) {
              domesticWater.push(null); // Push null to maintain alignment
            } else if (i === 1) {
              flushingWater.push(null); // Push null to maintain alignment
            }
          case 34:
            i++;
            _context49.next = 13;
            break;
          case 37:
            _context49.next = 9;
            break;
          case 39:
            _context49.next = 44;
            break;
          case 41:
            _context49.prev = 41;
            _context49.t1 = _context49["catch"](7);
            _iterator3.e(_context49.t1);
          case 44:
            _context49.prev = 44;
            _iterator3.f();
            return _context49.finish(44);
          case 47:
            am4core.ready(function () {
              // Themes begin
              am4core.useTheme(am4themes_animated);
              // Themes end

              // Create the chart
              var waterChart = am4core.create('chartdiv1', am4charts.XYChart);
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
              var maxDomesticWater = Math.max.apply(Math, domesticWater);
              var maxFlushingWater = Math.max.apply(Math, flushingWater);
              var maxValue = Math.max(maxDomesticWater, maxFlushingWater);
              var yAxisMaxValue = Math.ceil(maxValue * 2);
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
                series.columns.template.fill = am4core.color(color); // Fill color
                series.columns.template.stroke = am4core.color(color); // Stroke color

                // Customize tooltip
                series.tooltipText = '{name}: {valueY}';
                series.tooltip.background.fill = am4core.color(color); // Set tooltip background color to match series color
                series.tooltip.label.fill = am4core.color('#ffffff'); // Tooltip text color
                series.tooltip.pointerOrientation = 'vertical'; // Tooltip orientation
                series.tooltip.getFillFromObject = false; // Ensure tooltip color is set explicitly
                series.tooltip.getStrokeFromObject = false; // Ensure tooltip border color is set explicitly

                series.stacked = true; // Enable stacking

                return series;
              }

              // Generate the chart data using domesticWater and flushingWater for the last 12 months
              waterChart.data = previousMonths.map(function (month, index) {
                return {
                  category: month,
                  domesticYearly: domesticWater[index] || 0,
                  // Fallback to 0 if no data
                  flushingYearly: flushingWater[index] || 0 // Fallback to 0 if no data
                };
              });

              // Create series for Scope 1 and Scope 2 data
              createSeries('domesticYearly', 'Domestic', '#C65BCF'); // Scope 1 data
              createSeries('flushingYearly', 'Flushing', '#39A7FF'); // Scope 2 data

              // Add total value at the top of each bar for the last series only
              waterChart.events.on("datavalidated", function () {
                var lastSeries = waterChart.series.getIndex(waterChart.series.length - 1); // Get the last series in the stack
                lastSeries.columns.each(function (column) {
                  var total = 0;

                  // Loop through all stacked series to calculate the total
                  waterChart.series.each(function (stackedSeries) {
                    var _stackedSeries$dataIt;
                    total += ((_stackedSeries$dataIt = stackedSeries.dataItems.getIndex(column.dataItem.index)) === null || _stackedSeries$dataIt === void 0 ? void 0 : _stackedSeries$dataIt.valueY) || 0; // Safeguard null values
                  });

                  // Add a label at the top of the stack (for the last series only)
                  var label = column.createChild(am4core.Label);
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
          case 48:
          case "end":
            return _context49.stop();
        }
      }, _callee45, null, [[7, 41, 44, 47], [14, 30]]);
    }));
    return _showClusteredBarChart.apply(this, arguments);
  }
  $("#startDateWater, #endDateWater").on("change", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return disposeChartWater(daterangeWater);
        case 2:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  })));
  $("#sav_monthly_water").on("click", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          clearDateInputsWater();
          _context6.next = 3;
          return disposeChartWater(lineChartMonthlyWater);
        case 3:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  })));
  $("#sav_daily_water").on("click", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          clearDateInputsWater();
          _context7.next = 3;
          return disposeChartWater(pieChart1);
        case 3:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  })));
  $("#sav_yearly_water").on("click", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          clearDateInputsWater();
          _context8.next = 3;
          return disposeChartWater(showClusteredBarChart1);
        case 3:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  })));
  /* water consumption end */

  /* power consumption start */
  var powerChart;
  function disposeChartPower(_x3) {
    return _disposeChartPower.apply(this, arguments);
  }
  function _disposeChartPower() {
    _disposeChartPower = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee46(newChartFunction) {
      return _regeneratorRuntime().wrap(function _callee46$(_context50) {
        while (1) switch (_context50.prev = _context50.next) {
          case 0:
            // Destroy the existing chart if it exists
            if (powerChart) {
              if (powerChart instanceof ApexCharts) {
                powerChart.destroy(); // Dispose the existing chart
              } else {
                powerChart.dispose(); // Dispose the existing am4charts instance
              }
            }
            _context50.next = 3;
            return newChartFunction();
          case 3:
          case "end":
            return _context50.stop();
        }
      }, _callee46);
    }));
    return _disposeChartPower.apply(this, arguments);
  }
  function lineChart4() {
    return _lineChart.apply(this, arguments);
  }
  function _lineChart() {
    _lineChart = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee47() {
      var currentDate, previousDate, response, text, parser, xmlDoc, objElements, times, values, i, obj, timestampElement, valueElement, timestamp, value, _timestamp$split$, time;
      return _regeneratorRuntime().wrap(function _callee47$(_context51) {
        while (1) switch (_context51.prev = _context51.next) {
          case 0:
            currentDate = new Date();
            currentDate.setDate(currentDate.getDate());

            // Format the date (optional)
            previousDate = currentDate.toISOString().split('T')[0]; //console.log("previos day " + previousDate);
            _context51.next = 5;
            return fetch("".concat(url, "/obix/histories/SqlServerDatabase/powerDaily/~historyQuery?start=").concat(previousDate, "T00:00:00.000+05:30&end=").concat(previousDate, "T22:00:00.000+05:30"));
          case 5:
            response = _context51.sent;
            _context51.next = 8;
            return response.text();
          case 8:
            text = _context51.sent;
            // Parse the XML data
            parser = new DOMParser();
            xmlDoc = parser.parseFromString(text, "text/xml"); // Get all <obj> elements that contain timestamp and value
            objElements = xmlDoc.getElementsByTagName("obj"); // Initialize arrays to store time and value
            times = [];
            values = []; // Iterate through the <obj> elements to extract the time and value
            for (i = 1; i < objElements.length; i++) {
              obj = objElements[i];
              timestampElement = obj.getElementsByTagName("abstime")[0];
              valueElement = obj.getElementsByTagName("real")[0]; // Check if both timestamp and value exist and are not null
              if (timestampElement && valueElement) {
                timestamp = timestampElement.getAttribute("val");
                value = valueElement.getAttribute("val");
                if (timestamp && value) {
                  // Extract only the time (HH:mm) from the timestamp
                  time = (_timestamp$split$ = timestamp.split("T")[1]) === null || _timestamp$split$ === void 0 ? void 0 : _timestamp$split$.split(":").slice(0, 2).join(":"); // Ensure time is valid and add to arrays
                  if (time) {
                    times.push(time);
                    values.push(parseFloat(value));
                  }
                }
              }
            }
            am4core.ready(function () {
              // Themes begin
              am4core.useTheme(am4themes_animated);
              // Themes end

              // Create chart instance
              powerChart = am4core.create("chartdiv2", am4charts.XYChart);

              // Prepare data array based on extracted times and values
              powerChart.data = times.map(function (time, index) {
                return {
                  "time": time,
                  // Time in HH:mm format
                  "value": values[index] // Corresponding value
                };
              });

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
            }); // end am4core.ready()
          case 16:
          case "end":
            return _context51.stop();
        }
      }, _callee47);
    }));
    return _lineChart.apply(this, arguments);
  }
  disposeChartPower(lineChart4);
  function barChart() {
    return _barChart.apply(this, arguments);
  }
  function _barChart() {
    _barChart = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee49() {
      return _regeneratorRuntime().wrap(function _callee49$(_context54) {
        while (1) switch (_context54.prev = _context54.next) {
          case 0:
            am4core.ready(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee48() {
              var startDateValue, endDateValue, waterValues, urlToFetch, response, text, parser, xmlDoc, objs, _loop5, i, categoryAxis, valueAxis, createSeries;
              return _regeneratorRuntime().wrap(function _callee48$(_context53) {
                while (1) switch (_context53.prev = _context53.next) {
                  case 0:
                    createSeries = function _createSeries5(valueField, name, color) {
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
                    };
                    startDateValue = $("#startDatePower").val();
                    endDateValue = $("#endDatePower").val();
                    waterValues = []; // const url = "https://localhost";
                    // Fetch data asynchronously for each scope
                    urlToFetch = "".concat(url, "/obix/histories/SqlServerDatabase/domestic/~historyQuery?start=").concat(startDateValue, "T23:59:59.000+05:30&end=").concat(endDateValue, "T23:59:59.000+05:30");
                    console.log(urlToFetch);
                    _context53.prev = 6;
                    _context53.next = 9;
                    return fetch(urlToFetch);
                  case 9:
                    response = _context53.sent;
                    console.log(response);
                    _context53.next = 13;
                    return response.text();
                  case 13:
                    text = _context53.sent;
                    // Parse the XML data
                    parser = new DOMParser();
                    xmlDoc = parser.parseFromString(text, "text/xml");
                    objs = xmlDoc.getElementsByTagName("obj");
                    _loop5 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop5() {
                      var obj, abstime, real, dateText, valueText, value, date, formattedDate, dateStr, existingEntry;
                      return _regeneratorRuntime().wrap(function _loop5$(_context52) {
                        while (1) switch (_context52.prev = _context52.next) {
                          case 0:
                            obj = objs[i];
                            abstime = obj.getElementsByTagName("abstime")[0];
                            real = obj.getElementsByTagName("real")[0];
                            if (abstime && real) {
                              dateText = abstime.getAttribute("val");
                              valueText = real.getAttribute("val");
                              if (valueText && dateText) {
                                value = parseFloat(valueText).toFixed(2);
                                date = new Date(dateText);
                                formattedDate = date.toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric"
                                });
                                dateStr = date.toDateString(); // Use toDateString to compare without time
                                existingEntry = waterValues.find(function (entry) {
                                  return entry.date.toDateString() === dateStr;
                                });
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
                          case 4:
                          case "end":
                            return _context52.stop();
                        }
                      }, _loop5);
                    });
                    i = 0;
                  case 19:
                    if (!(i < objs.length)) {
                      _context53.next = 24;
                      break;
                    }
                    return _context53.delegateYield(_loop5(), "t0", 21);
                  case 21:
                    i++;
                    _context53.next = 19;
                    break;
                  case 24:
                    _context53.next = 29;
                    break;
                  case 26:
                    _context53.prev = 26;
                    _context53.t1 = _context53["catch"](6);
                    console.error("Error fetching data for ");
                  case 29:
                    // Themes begin
                    am4core.useTheme(am4themes_animated);
                    // Themes end

                    // Create chart instance
                    powerChart = am4core.create("chartdiv2", am4charts.XYChart);
                    powerChart.paddingRight = 20;

                    // Add data
                    powerChart.data = waterValues;
                    console.log(powerChart.data);
                    waterValues.forEach(function (item) {
                      item.date = new Date(item.date).getTime(); // Convert to timestamp
                      console.log("item date (timestamp): " + item.date);

                      // Convert timestamp back to a readable date
                      var formattedDate = new Date(item.date).toLocaleDateString("en-US", {
                        // year: "numeric",
                        month: "short",
                        day: "numeric"
                      });
                      item.date = formattedDate;
                      console.log("Formatted item date: " + formattedDate);
                    });

                    // Create axes
                    categoryAxis = powerChart.xAxes.push(new am4charts.CategoryAxis());
                    categoryAxis.dataFields.category = "date"; // Use 'date' instead of 'year'
                    categoryAxis.renderer.minGridDistance = 80;
                    // categoryAxis.renderer.grid.template.location = 2;
                    // categoryAxis.startLocation = 1;
                    // categoryAxis.endLocation = 1.5;
                    categoryAxis.renderer.labels.template.horizontalCenter = "middle"; // Center labels
                    categoryAxis.renderer.labels.template.verticalCenter = "middle"; // Center labels
                    valueAxis = powerChart.yAxes.push(new am4charts.ValueAxis());
                    valueAxis.baseValue = 0;

                    // Function to create series

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
                  case 51:
                  case "end":
                    return _context53.stop();
                }
              }, _callee48, null, [[6, 26]]);
            })));
          case 1:
          case "end":
            return _context54.stop();
        }
      }, _callee49);
    }));
    return _barChart.apply(this, arguments);
  }
  function lineChartMonthlyPower() {
    return _lineChartMonthlyPower.apply(this, arguments);
  }
  function _lineChartMonthlyPower() {
    _lineChartMonthlyPower = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee51() {
      return _regeneratorRuntime().wrap(function _callee51$(_context57) {
        while (1) switch (_context57.prev = _context57.next) {
          case 0:
            am4core.ready(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee50() {
              var today, currentMonth, startDate, endDate, startISO, endISO, waterValues, urlToFetch, response, text, parser, xmlDoc, objs, _loop6, i, categoryAxis, valueAxis, createSeries;
              return _regeneratorRuntime().wrap(function _callee50$(_context56) {
                while (1) switch (_context56.prev = _context56.next) {
                  case 0:
                    createSeries = function _createSeries6(valueField, name, color) {
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
                    };
                    // Get the current date
                    today = new Date();
                    currentMonth = today.getMonth(); // Set startDate and endDate to the previous month
                    startDate = new Date(today.getFullYear(), currentMonth - 1, 1);
                    endDate = new Date(today.getFullYear(), currentMonth, 0);
                    startISO = "".concat(startDate.getFullYear(), "-").concat(String(startDate.getMonth() + 1).padStart(2, '0'), "-").concat(String(startDate.getDate()).padStart(2, '0'));
                    endISO = "".concat(endDate.getFullYear(), "-").concat(String(endDate.getMonth() + 1).padStart(2, '0'), "-").concat(String(endDate.getDate()).padStart(2, '0'));
                    waterValues = []; // const url = "https://localhost";
                    // Fetch data asynchronously for each scope
                    urlToFetch = "".concat(url, "/obix/histories/SqlServerDatabase/domestic/~historyQuery?start=").concat(startISO, "T23:59:59.000+05:30&end=").concat(endISO, "T23:59:59.000+05:30");
                    console.log(urlToFetch);
                    _context56.prev = 10;
                    _context56.next = 13;
                    return fetch(urlToFetch);
                  case 13:
                    response = _context56.sent;
                    console.log(response);
                    _context56.next = 17;
                    return response.text();
                  case 17:
                    text = _context56.sent;
                    // Parse the XML data
                    parser = new DOMParser();
                    xmlDoc = parser.parseFromString(text, "text/xml");
                    objs = xmlDoc.getElementsByTagName("obj");
                    _loop6 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop6() {
                      var obj, abstime, real, dateText, valueText, value, date, formattedDate, dateStr, existingEntry;
                      return _regeneratorRuntime().wrap(function _loop6$(_context55) {
                        while (1) switch (_context55.prev = _context55.next) {
                          case 0:
                            obj = objs[i];
                            abstime = obj.getElementsByTagName("abstime")[0];
                            real = obj.getElementsByTagName("real")[0];
                            if (abstime && real) {
                              dateText = abstime.getAttribute("val");
                              valueText = real.getAttribute("val");
                              if (valueText && dateText) {
                                value = parseFloat(valueText).toFixed(2);
                                date = new Date(dateText);
                                formattedDate = date.toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric"
                                });
                                dateStr = date.toDateString(); // Use toDateString to compare without time
                                existingEntry = waterValues.find(function (entry) {
                                  return entry.date.toDateString() === dateStr;
                                });
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
                          case 4:
                          case "end":
                            return _context55.stop();
                        }
                      }, _loop6);
                    });
                    i = 0;
                  case 23:
                    if (!(i < objs.length)) {
                      _context56.next = 28;
                      break;
                    }
                    return _context56.delegateYield(_loop6(), "t0", 25);
                  case 25:
                    i++;
                    _context56.next = 23;
                    break;
                  case 28:
                    _context56.next = 33;
                    break;
                  case 30:
                    _context56.prev = 30;
                    _context56.t1 = _context56["catch"](10);
                    console.error("Error fetching data for ");
                  case 33:
                    // Themes begin
                    am4core.useTheme(am4themes_animated);
                    // Themes end

                    // Create chart instance
                    powerChart = am4core.create("chartdiv2", am4charts.XYChart);
                    powerChart.paddingRight = 20;

                    // Add data
                    powerChart.data = waterValues;
                    console.log(powerChart.data);
                    waterValues.forEach(function (item) {
                      item.date = new Date(item.date).getTime(); // Convert to timestamp
                      console.log("item date (timestamp): " + item.date);

                      // Convert timestamp back to a readable date
                      var formattedDate = new Date(item.date).toLocaleDateString("en-US", {
                        // year: "numeric",
                        month: "short",
                        day: "numeric"
                      });
                      item.date = formattedDate;
                      console.log("Formatted item date: " + formattedDate);
                    });

                    // Create axes
                    categoryAxis = powerChart.xAxes.push(new am4charts.CategoryAxis());
                    categoryAxis.dataFields.category = "date"; // Use 'date' instead of 'year'
                    categoryAxis.renderer.minGridDistance = 80;
                    // categoryAxis.renderer.grid.template.location = 2;
                    // categoryAxis.startLocation = 1;
                    // categoryAxis.endLocation = 1.5;
                    categoryAxis.renderer.labels.template.horizontalCenter = "middle"; // Center labels
                    categoryAxis.renderer.labels.template.verticalCenter = "middle"; // Center labels
                    valueAxis = powerChart.yAxes.push(new am4charts.ValueAxis());
                    valueAxis.baseValue = 0;

                    // Function to create series

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
                  case 55:
                  case "end":
                    return _context56.stop();
                }
              }, _callee50, null, [[10, 30]]);
            })));
          case 1:
          case "end":
            return _context57.stop();
        }
      }, _callee51);
    }));
    return _lineChartMonthlyPower.apply(this, arguments);
  }
  function lineChart3() {
    return _lineChart2.apply(this, arguments);
  }
  function _lineChart2() {
    _lineChart2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee53() {
      return _regeneratorRuntime().wrap(function _callee53$(_context59) {
        while (1) switch (_context59.prev = _context59.next) {
          case 0:
            am4core.ready(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee52() {
              var powerChart, last12Months, urls, chartData, _iterator5, _step5, _step5$value, index, scopeUrl, response, text, parser, xml, records, i, _records$i$getElement, _records$i$getElement2, timestamp, value, date, month, months, year, formattedMonth, categoryAxis, valueAxis, lineSeries, bullet, cursor;
              return _regeneratorRuntime().wrap(function _callee52$(_context58) {
                while (1) switch (_context58.prev = _context58.next) {
                  case 0:
                    // Themes begin
                    am4core.useTheme(am4themes_animated);
                    // Themes end

                    // Create chart instance
                    powerChart = am4core.create("chartdiv2", am4charts.XYChart);
                    powerChart.logo.disabled = true;

                    // Fetch month names for last 12 months using the getLast12Months() function
                    last12Months = getLast12Months1(); // Assuming this returns an array with month data for the URLs
                    console.log("Last 12 Months (from getLast12Months1):", last12Months);

                    // Define the URLs for each month
                    urls = last12Months.map(function (month) {
                      return "https://localhost/obix/histories/SqlServerDatabase/domesticYearly/~historyQuery?start=".concat(month.startDate, "T23:59:59.000+05:30&limit=1");
                    }); // console.log("URLs to fetch data from:", urls);  // Log the generated URLs
                    // Create an array to hold the chart data
                    chartData = []; // Loop through the URLs asynchronously using a for loop
                    _iterator5 = _createForOfIteratorHelper(urls.entries());
                    _context58.prev = 8;
                    _iterator5.s();
                  case 10:
                    if ((_step5 = _iterator5.n()).done) {
                      _context58.next = 46;
                      break;
                    }
                    _step5$value = _slicedToArray(_step5.value, 2), index = _step5$value[0], scopeUrl = _step5$value[1];
                    _context58.next = 14;
                    return fetch(scopeUrl);
                  case 14:
                    response = _context58.sent;
                    _context58.next = 17;
                    return response.text();
                  case 17:
                    text = _context58.sent;
                    // Get the response as text
                    parser = new DOMParser();
                    xml = parser.parseFromString(text, "application/xml"); // Debugging: Log the entire XML structure to check if it's as expected
                    console.log("Parsed XML Document:", xml);

                    // Extract all 'obj' elements from the XML
                    records = xml.getElementsByTagName("obj");
                    console.log("XML Records:", records); // Log the records to check if they're found

                    // Process each record and adjust the month
                    i = 0;
                  case 24:
                    if (!(i < records.length)) {
                      _context58.next = 43;
                      break;
                    }
                    timestamp = (_records$i$getElement = records[i].getElementsByTagName("abstime")[0]) === null || _records$i$getElement === void 0 ? void 0 : _records$i$getElement.getAttribute("val");
                    value = (_records$i$getElement2 = records[i].getElementsByTagName("real")[0]) === null || _records$i$getElement2 === void 0 ? void 0 : _records$i$getElement2.getAttribute("val"); // Log to check the extracted timestamp and value
                    console.log("Timestamp:", timestamp, "Value:", value);
                    date = new Date(timestamp); // '2024-10-01T00:00:00.000+05:30'
                    month = date.setMonth(date.getMonth() - 1);
                    console.log("month number get " + month);
                    console.log("Month no " + month);
                    months = date.toLocaleString('default', {
                      month: 'short'
                    });
                    console.log("string no " + months);
                    year = date.getFullYear();
                    formattedMonth = "".concat(months, " ").concat(year);
                    console.log("Formatted Month and Year:", formattedMonth);

                    // If there is no timestamp or value, skip to next record
                    if (!(!timestamp || !value)) {
                      _context58.next = 39;
                      break;
                    }
                    return _context58.abrupt("continue", 40);
                  case 39:
                    // Log the corresponding month name from getLast12Months()
                    //console.log("Month name from monthNames:", monthNames[month]);

                    // Push data to chartData
                    chartData.push({
                      month: formattedMonth,
                      // Use the correct month name from monthNames array
                      value: parseFloat(value).toFixed(2) // Convert value to a float for proper numeric handling
                    });
                  case 40:
                    i++;
                    _context58.next = 24;
                    break;
                  case 43:
                    // Debugging: Log chart data after processing
                    console.log("Chart Data:", chartData);
                  case 44:
                    _context58.next = 10;
                    break;
                  case 46:
                    _context58.next = 51;
                    break;
                  case 48:
                    _context58.prev = 48;
                    _context58.t0 = _context58["catch"](8);
                    _iterator5.e(_context58.t0);
                  case 51:
                    _context58.prev = 51;
                    _iterator5.f();
                    return _context58.finish(51);
                  case 54:
                    // Update chart data
                    powerChart.data = chartData.reverse();
                    // Create category axis (X-axis) for months
                    categoryAxis = powerChart.xAxes.push(new am4charts.CategoryAxis());
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
                    valueAxis = powerChart.yAxes.push(new am4charts.ValueAxis());
                    valueAxis.renderer.labels.template.fill = am4core.color("#000000"); // Set y-axis labels color
                    valueAxis.title.fill = am4core.color("#000000"); // Set y-axis title color

                    // Create series (line) to represent the data
                    lineSeries = powerChart.series.push(new am4charts.LineSeries());
                    lineSeries.dataFields.valueY = "value"; // Bind Y-axis to data values
                    lineSeries.dataFields.categoryX = "month"; // Bind X-axis to months
                    lineSeries.strokeWidth = 2;
                    lineSeries.stroke = am4core.color("#14C38E");

                    // Add circle bullet
                    bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
                    bullet.circle.radius = 3; // Size of the bullet point
                    bullet.circle.strokeWidth = 0.5;
                    bullet.circle.fill = am4core.color("#fc030b"); // Bullet fill color
                    bullet.circle.stroke = am4core.color("#14C38E"); // Bullet stroke color

                    // Set the bullet's color to match the line's color
                    bullet.adapter.add("fill", function (fill, target) {
                      return target.stroke;
                    });

                    // Configure cursor for interaction
                    cursor = new am4charts.XYCursor();
                    lineSeries.tooltipText = "{categoryX}: [bold]{valueY}[/]"; // Tooltip text
                    lineSeries.tooltip.getFillFromObject = false; // Disable tooltip fill from series
                    lineSeries.tooltip.background.fill = am4core.color("#14C38E"); // Set tooltip background color
                    lineSeries.tooltip.label.fill = am4core.color("#ffffff"); // Set tooltip label color
                    lineSeries.tooltip.pointerOrientation = "horizontal"; // Set tooltip orientation

                    powerChart.cursor = cursor;
                  case 87:
                  case "end":
                    return _context58.stop();
                }
              }, _callee52, null, [[8, 48, 51, 54]]);
            })));
          case 1:
          case "end":
            return _context59.stop();
        }
      }, _callee53);
    }));
    return _lineChart2.apply(this, arguments);
  }
  $("#startDatePower, #endDatePower").on("change", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return disposeChartPower(barChart);
        case 2:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  })));
  $("#sav_monthly_power").on("click", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          clearDateInputsPower();
          _context10.next = 3;
          return disposeChartPower(lineChartMonthlyPower);
        case 3:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  })));
  $("#sav_daily_power").on("click", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          clearDateInputsPower();
          _context11.next = 3;
          return disposeChartPower(lineChart4);
        case 3:
        case "end":
          return _context11.stop();
      }
    }, _callee11);
  })));
  $("#sav_yearly_power").on("click", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          clearDateInputsWater();
          _context12.next = 3;
          return disposeChartPower(lineChart3);
        case 3:
        case "end":
          return _context12.stop();
      }
    }, _callee12);
  })));

  /* power consumption end */

  /* occupancy efficiency start */
  var occupancyChart = null;
  function removeChart(_x4) {
    return _removeChart.apply(this, arguments);
  } // Function to create and render a donut chart
  function _removeChart() {
    _removeChart = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee54(newChartFunction) {
      return _regeneratorRuntime().wrap(function _callee54$(_context60) {
        while (1) switch (_context60.prev = _context60.next) {
          case 0:
            if (occupancyChart) {
              if (occupancyChart instanceof ApexCharts) {
                occupancyChart.destroy(); // Dispose the existing chart
              } else {
                console.log("Pie chart destroyed");
                occupancyChart.dispose(); // Dispose the existing am4charts instance
              }
            }
            // Call the new chart function
            _context60.next = 3;
            return newChartFunction();
          case 3:
          case "end":
            return _context60.stop();
        }
      }, _callee54);
    }));
    return _removeChart.apply(this, arguments);
  }
  function donutChart() {
    return _donutChart.apply(this, arguments);
  }
  function _donutChart() {
    _donutChart = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee55() {
      var response, text, parser, xmlDoc, outElement, outValue, options;
      return _regeneratorRuntime().wrap(function _callee55$(_context61) {
        while (1) switch (_context61.prev = _context61.next) {
          case 0:
            _context61.next = 2;
            return fetch("https://localhost/obix/config/Barclays/Occpancy/Occupancy$20Sensor/");
          case 2:
            response = _context61.sent;
            _context61.next = 5;
            return response.text();
          case 5:
            text = _context61.sent;
            // Parse the XML data
            parser = new DOMParser();
            xmlDoc = parser.parseFromString(text, "text/xml"); // Get all <ref> elements (which include scope1, scope2, etc.)
            outElement = xmlDoc.querySelector('real[name="out"]');
            outValue = parseFloat(outElement.getAttribute('val')); //console.log("out Values" + outValue);
            options = {
              series: [outValue],
              chart: {
                height: "100%",
                width: "100%",
                type: 'radialBar'
              },
              plotOptions: {
                radialBar: {
                  hollow: {
                    margin: 15,
                    size: '85%'
                  },
                  dataLabels: {
                    name: {
                      show: true,
                      color: '#000'
                    },
                    value: {
                      show: true,
                      color: '#000',
                      offsetY: 50,
                      fontSize: '50px'
                    }
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
                      opacity: 0.35
                    }
                  },
                  offsetY: 0
                }
              },
              fill: {
                type: 'gradient',
                gradient: {
                  shade: 'dark',
                  type: 'vertical',
                  gradientToColors: ['#e33b29', '#ff00e0', '#0000ff'],
                  stops: [0, 2, 70, 100],
                  colorStops: [{
                    offset: 0,
                    color: '#e33b29',
                    opacity: 1 // Blue at the start
                  }, {
                    offset: 2,
                    color: '#e33b29',
                    opacity: 1 // Blue in the middle
                  }, {
                    offset: 70,
                    color: '#ff00e0',
                    opacity: 1 // Pink at the end
                  }, {
                    offset: 100,
                    color: '#0000ff',
                    opacity: 1 // Pink at the end
                  }]
                }
              },
              stroke: {
                lineCap: 'round'
              },
              labels: ["Occupancy Efficiency"]
            };
            occupancyChart = new ApexCharts(document.querySelector("#chartdiv3"), options);
            occupancyChart.render();
            //clearDateInputsOccupancy();
          case 13:
          case "end":
            return _context61.stop();
        }
      }, _callee55);
    }));
    return _donutChart.apply(this, arguments);
  }
  removeChart(donutChart);
  function occupacyBarChart1() {
    return _occupacyBarChart.apply(this, arguments);
  }
  function _occupacyBarChart() {
    _occupacyBarChart = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee56() {
      var scopes, upsData, _i7, _scopes3, scope, response, text, parser, xmlDoc, ups, options;
      return _regeneratorRuntime().wrap(function _callee56$(_context62) {
        while (1) switch (_context62.prev = _context62.next) {
          case 0:
            scopes = ['Floor1', 'Floor2'];
            upsData = []; // Loop through each scope to fetch and process data
            _i7 = 0, _scopes3 = scopes;
          case 3:
            if (!(_i7 < _scopes3.length)) {
              _context62.next = 24;
              break;
            }
            scope = _scopes3[_i7];
            _context62.prev = 5;
            _context62.next = 8;
            return fetch("https://localhost/obix/config/Barclays/Occpancy/".concat(scope, "/occupancy"));
          case 8:
            response = _context62.sent;
            _context62.next = 11;
            return response.text();
          case 11:
            text = _context62.sent;
            // Parse the XML response
            parser = new DOMParser();
            xmlDoc = parser.parseFromString(text, "application/xml"); // Extract values for ups, hvac, and rtltg
            ups = parseFloat(xmlDoc.querySelector('ref[name="occupancy"]').getAttribute('display').split(' ')[0]);
            upsData.push(ups);
            _context62.next = 21;
            break;
          case 18:
            _context62.prev = 18;
            _context62.t0 = _context62["catch"](5);
            console.error("Error fetching data for ".concat(scope, ":"), _context62.t0);
          case 21:
            _i7++;
            _context62.next = 3;
            break;
          case 24:
            options = {
              series: [{
                name: 'Occupancy Efficiency',
                data: upsData // Data for HVAC (Floor 1, Floor 2)
              }, {}],
              chart: {
                height: "100%",
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
                    position: 'top' // Show data labels on top
                  },
                  columnWidth: '40%',
                  // Set column width for a simple bar chart
                  endingShape: 'rounded' // Rounded edges for a smooth look
                }
              },
              dataLabels: {
                enabled: true,
                formatter: function formatter(val) {
                  return val; // Show percentage symbol next to data
                },
                offsetY: -30,
                style: {
                  fontSize: '12px',
                  colors: ["#E11D74"]
                }
              },
              xaxis: {
                categories: ["Floor 1", "Floor 2"],
                // X-axis now has Floor 1 and Floor 2
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
                      colorFrom: '#E11D74',
                      colorTo: '#E11D74',
                      stops: [0, 100],
                      opacityFrom: 0.4,
                      opacityTo: 0.5
                    }
                  }
                },
                tooltip: {
                  enabled: true // Show tooltips on x-axis hover
                }
              },
              yaxis: {
                axisBorder: {
                  show: false // Hide y-axis border
                },
                axisTicks: {
                  show: false // Hide ticks on y-axis
                },
                labels: {
                  show: false // Hide y-axis labels for a cleaner look
                }
              },
              legend: {
                show: true,
                position: 'top',
                // Place the legend on top
                horizontalAlign: 'center',
                // Center align the legend
                offsetY: 20
              },
              colors: ['#E11D74'],
              // Custom color for HVAC
              grid: {
                padding: {
                  left: 10,
                  right: 10
                }
              }
            }; // Select the div where the chart should render
            occupancyChart = new ApexCharts(document.querySelector("#chartdiv9"), options);
            _context62.next = 28;
            return occupancyChart.render();
          case 28:
          case "end":
            return _context62.stop();
        }
      }, _callee56, null, [[5, 18]]);
    }));
    return _occupacyBarChart.apply(this, arguments);
  }
  $('#floor_sav_btn').on("click", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          $(".sav_g_chart").hide();
          $(".sav_b_chart").show();
          $("#build_sav_btn").show();
          $(".occupacyBtn").hide();
          $(this).hide();
          occupacyBarChart1();
        case 6:
        case "end":
          return _context13.stop();
      }
    }, _callee13, this);
  })));
  $('#build_sav_btn').on("click", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          $(".sav_g_chart").show();
          $(".sav_b_chart").hide();
          $('#floor_sav_btn').show();
          $(".occupacyBtn").show();
          $(this).hide();
        case 5:
        case "end":
          return _context14.stop();
      }
    }, _callee14, this);
  })));
  function occupacyLine() {
    return _occupacyLine.apply(this, arguments);
  }
  function _occupacyLine() {
    _occupacyLine = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee58() {
      return _regeneratorRuntime().wrap(function _callee58$(_context65) {
        while (1) switch (_context65.prev = _context65.next) {
          case 0:
            am4core.ready(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee57() {
              var startDateValue, endDateValue, waterValues, urlToFetch, response, text, parser, xmlDoc, objs, _loop7, i, categoryAxis, valueAxis, createSeries;
              return _regeneratorRuntime().wrap(function _callee57$(_context64) {
                while (1) switch (_context64.prev = _context64.next) {
                  case 0:
                    createSeries = function _createSeries7(valueField, name, color) {
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
                    };
                    startDateValue = $("#startDateOccupancy").val();
                    endDateValue = $("#endDateOccupancy").val();
                    waterValues = []; // const url = "https://localhost";
                    // Fetch data asynchronously for each scope
                    urlToFetch = "".concat(url, "/obix/histories/SqlServerDatabase/domestic/~historyQuery?start=").concat(startDateValue, "T23:59:59.000+05:30&end=").concat(endDateValue, "T23:59:59.000+05:30");
                    console.log(urlToFetch);
                    _context64.prev = 6;
                    _context64.next = 9;
                    return fetch(urlToFetch);
                  case 9:
                    response = _context64.sent;
                    console.log(response);
                    _context64.next = 13;
                    return response.text();
                  case 13:
                    text = _context64.sent;
                    // Parse the XML data
                    parser = new DOMParser();
                    xmlDoc = parser.parseFromString(text, "text/xml");
                    objs = xmlDoc.getElementsByTagName("obj");
                    _loop7 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop7() {
                      var obj, abstime, real, dateText, valueText, value, date, formattedDate, dateStr, existingEntry;
                      return _regeneratorRuntime().wrap(function _loop7$(_context63) {
                        while (1) switch (_context63.prev = _context63.next) {
                          case 0:
                            obj = objs[i];
                            abstime = obj.getElementsByTagName("abstime")[0];
                            real = obj.getElementsByTagName("real")[0];
                            if (abstime && real) {
                              dateText = abstime.getAttribute("val");
                              valueText = real.getAttribute("val");
                              if (valueText && dateText) {
                                value = parseFloat(valueText).toFixed(2);
                                date = new Date(dateText);
                                formattedDate = date.toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric"
                                });
                                dateStr = date.toDateString(); // Use toDateString to compare without time
                                existingEntry = waterValues.find(function (entry) {
                                  return entry.date.toDateString() === dateStr;
                                });
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
                          case 4:
                          case "end":
                            return _context63.stop();
                        }
                      }, _loop7);
                    });
                    i = 0;
                  case 19:
                    if (!(i < objs.length)) {
                      _context64.next = 24;
                      break;
                    }
                    return _context64.delegateYield(_loop7(), "t0", 21);
                  case 21:
                    i++;
                    _context64.next = 19;
                    break;
                  case 24:
                    _context64.next = 29;
                    break;
                  case 26:
                    _context64.prev = 26;
                    _context64.t1 = _context64["catch"](6);
                    console.error("Error fetching data for ");
                  case 29:
                    // Themes begin
                    am4core.useTheme(am4themes_animated);
                    // Themes end

                    // Create chart instance
                    occupancyChart = am4core.create("chartdiv3", am4charts.XYChart);
                    occupancyChart.paddingRight = 20;

                    // Add data
                    occupancyChart.data = waterValues;
                    console.log(occupancyChart.data);
                    waterValues.forEach(function (item) {
                      item.date = new Date(item.date).getTime(); // Convert to timestamp
                      console.log("item date (timestamp): " + item.date);

                      // Convert timestamp back to a readable date
                      var formattedDate = new Date(item.date).toLocaleDateString("en-US", {
                        // year: "numeric",
                        month: "short",
                        day: "numeric"
                      });
                      item.date = formattedDate;
                      console.log("Formatted item date: " + formattedDate);
                    });

                    // Create axes
                    categoryAxis = occupancyChart.xAxes.push(new am4charts.CategoryAxis());
                    categoryAxis.dataFields.category = "date"; // Use 'date' instead of 'year'
                    categoryAxis.renderer.minGridDistance = 80;
                    // categoryAxis.renderer.grid.template.location = 2;
                    // categoryAxis.startLocation = 1;
                    // categoryAxis.endLocation = 1.5;
                    categoryAxis.renderer.labels.template.horizontalCenter = "middle"; // Center labels
                    categoryAxis.renderer.labels.template.verticalCenter = "middle"; // Center labels
                    valueAxis = occupancyChart.yAxes.push(new am4charts.ValueAxis());
                    valueAxis.baseValue = 0;

                    // Function to create series

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
                  case 51:
                  case "end":
                    return _context64.stop();
                }
              }, _callee57, null, [[6, 26]]);
            })));
          case 1:
          case "end":
            return _context65.stop();
        }
      }, _callee58);
    }));
    return _occupacyLine.apply(this, arguments);
  }
  function occupacyBar() {
    return _occupacyBar.apply(this, arguments);
  }
  function _occupacyBar() {
    _occupacyBar = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee59() {
      var months, last12Months, chartData, _iterator6, _step6, month, _url, _list$getElementsByTa, _list$getElementsByTa2, response, text, parser, xml, list, abstime, realValue, abstimeDate, formattedAbstime, options, _occupancyChart;
      return _regeneratorRuntime().wrap(function _callee59$(_context66) {
        while (1) switch (_context66.prev = _context66.next) {
          case 0:
            _context66.prev = 0;
            // Get the last 12 months
            months = getLast12Months(); // Array of month names for the x-axis (e.g., ["Jan 2023", "Feb 2023", ...])
            last12Months = getLast12Months1(); // Array of objects with `startDate` for the URLs
            console.log("Last 12 Months (from getLast12Months1):", last12Months);
            chartData = []; // Loop through each month to fetch data
            _iterator6 = _createForOfIteratorHelper(last12Months);
            _context66.prev = 6;
            _iterator6.s();
          case 8:
            if ((_step6 = _iterator6.n()).done) {
              _context66.next = 36;
              break;
            }
            month = _step6.value;
            _url = "https://localhost/obix/histories/SqlServerDatabase/domesticYearly/~historyQuery?start=".concat(month.startDate, "T23:59:59.000+05:30&limit=1");
            _context66.prev = 11;
            _context66.next = 14;
            return fetch(_url);
          case 14:
            response = _context66.sent;
            if (response.ok) {
              _context66.next = 19;
              break;
            }
            console.error("Error fetching data for ".concat(month.startDate, ": HTTP ").concat(response.status));
            chartData.push(0); // Add 0 for missing data
            return _context66.abrupt("continue", 34);
          case 19:
            _context66.next = 21;
            return response.text();
          case 21:
            text = _context66.sent;
            parser = new DOMParser();
            xml = parser.parseFromString(text, "application/xml"); // Parse the data
            list = xml.getElementsByTagName("list")[0];
            abstime = list === null || list === void 0 || (_list$getElementsByTa = list.getElementsByTagName("abstime")[0]) === null || _list$getElementsByTa === void 0 ? void 0 : _list$getElementsByTa.getAttribute("val");
            realValue = list === null || list === void 0 || (_list$getElementsByTa2 = list.getElementsByTagName("real")[0]) === null || _list$getElementsByTa2 === void 0 ? void 0 : _list$getElementsByTa2.getAttribute("val");
            if (abstime && realValue) {
              abstimeDate = new Date(abstime);
              formattedAbstime = "".concat(abstimeDate.getFullYear(), "-").concat(String(abstimeDate.getMonth() + 1).padStart(2, '0'), "-").concat(String(abstimeDate.getDate()).padStart(2, '0'));
              if (formattedAbstime === month.startDate) {
                chartData.push(parseFloat(realValue).toFixed(2));
              } else {
                chartData.push(0); // Add 0 if no matching date
              }
            } else {
              chartData.push(0); // Add 0 for missing values
            }
            _context66.next = 34;
            break;
          case 30:
            _context66.prev = 30;
            _context66.t0 = _context66["catch"](11);
            console.error("Error processing data for ".concat(month.startDate, ":"), _context66.t0);
            chartData.push(0); // Add 0 in case of errors
          case 34:
            _context66.next = 8;
            break;
          case 36:
            _context66.next = 41;
            break;
          case 38:
            _context66.prev = 38;
            _context66.t1 = _context66["catch"](6);
            _iterator6.e(_context66.t1);
          case 41:
            _context66.prev = 41;
            _iterator6.f();
            return _context66.finish(41);
          case 44:
            // Configure the bar chart options
            options = {
              series: [{
                name: 'Occupancy Efficiency',
                data: chartData // Data for the chart
              }],
              chart: {
                type: 'bar',
                height: '100%',
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
              colors: ["#E11D74"],
              dataLabels: {
                enabled: false
              },
              stroke: {
                show: true,
                width: 0,
                colors: ['transparent']
              },
              xaxis: {
                categories: months // Use month names as x-axis categories
              },
              grid: {
                show: true // Disable grid lines
              },
              tooltip: {
                y: {
                  formatter: function formatter(val) {
                    return "".concat(val); // Customize tooltip value
                  }
                }
              },
              legend: {
                position: 'top',
                horizontalAlign: 'center',
                labels: {
                  colors: ['#000000'] // Customize legend label color
                }
              }
            };
            console.log("Creating bar chart...");
            _occupancyChart = new ApexCharts(document.querySelector("#chartdiv3"), options);
            _occupancyChart.render();
            _context66.next = 53;
            break;
          case 50:
            _context66.prev = 50;
            _context66.t2 = _context66["catch"](0);
            console.error("Error creating bar chart:", _context66.t2);
          case 53:
          case "end":
            return _context66.stop();
        }
      }, _callee59, null, [[0, 50], [6, 38, 41, 44], [11, 30]]);
    }));
    return _occupacyBar.apply(this, arguments);
  }
  function lineChartMonthlyOccupancy() {
    return _lineChartMonthlyOccupancy.apply(this, arguments);
  }
  function _lineChartMonthlyOccupancy() {
    _lineChartMonthlyOccupancy = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee61() {
      return _regeneratorRuntime().wrap(function _callee61$(_context69) {
        while (1) switch (_context69.prev = _context69.next) {
          case 0:
            am4core.ready(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee60() {
              var today, currentMonth, startDate, endDate, startISO, endISO, waterValues, urlToFetch, response, text, parser, xmlDoc, objs, _loop8, i, categoryAxis, valueAxis, createSeries;
              return _regeneratorRuntime().wrap(function _callee60$(_context68) {
                while (1) switch (_context68.prev = _context68.next) {
                  case 0:
                    createSeries = function _createSeries8(valueField, name, color) {
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
                    };
                    today = new Date();
                    currentMonth = today.getMonth(); // Set startDate and endDate to the previous month
                    startDate = new Date(today.getFullYear(), currentMonth - 1, 1);
                    endDate = new Date(today.getFullYear(), currentMonth, 0);
                    startISO = "".concat(startDate.getFullYear(), "-").concat(String(startDate.getMonth() + 1).padStart(2, '0'), "-").concat(String(startDate.getDate()).padStart(2, '0'));
                    endISO = "".concat(endDate.getFullYear(), "-").concat(String(endDate.getMonth() + 1).padStart(2, '0'), "-").concat(String(endDate.getDate()).padStart(2, '0'));
                    waterValues = []; // const url = "https://localhost";
                    // Fetch data asynchronously for each scope
                    urlToFetch = "".concat(url, "/obix/histories/SqlServerDatabase/domestic/~historyQuery?start=").concat(startISO, "T23:59:59.000+05:30&end=").concat(endISO, "T23:59:59.000+05:30");
                    console.log(urlToFetch);
                    _context68.prev = 10;
                    _context68.next = 13;
                    return fetch(urlToFetch);
                  case 13:
                    response = _context68.sent;
                    console.log(response);
                    _context68.next = 17;
                    return response.text();
                  case 17:
                    text = _context68.sent;
                    // Parse the XML data
                    parser = new DOMParser();
                    xmlDoc = parser.parseFromString(text, "text/xml");
                    objs = xmlDoc.getElementsByTagName("obj");
                    _loop8 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop8() {
                      var obj, abstime, real, dateText, valueText, value, date, formattedDate, dateStr, existingEntry;
                      return _regeneratorRuntime().wrap(function _loop8$(_context67) {
                        while (1) switch (_context67.prev = _context67.next) {
                          case 0:
                            obj = objs[i];
                            abstime = obj.getElementsByTagName("abstime")[0];
                            real = obj.getElementsByTagName("real")[0];
                            if (abstime && real) {
                              dateText = abstime.getAttribute("val");
                              valueText = real.getAttribute("val");
                              if (valueText && dateText) {
                                value = parseFloat(valueText).toFixed(2);
                                date = new Date(dateText);
                                formattedDate = date.toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric"
                                });
                                dateStr = date.toDateString(); // Use toDateString to compare without time
                                existingEntry = waterValues.find(function (entry) {
                                  return entry.date.toDateString() === dateStr;
                                });
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
                          case 4:
                          case "end":
                            return _context67.stop();
                        }
                      }, _loop8);
                    });
                    i = 0;
                  case 23:
                    if (!(i < objs.length)) {
                      _context68.next = 28;
                      break;
                    }
                    return _context68.delegateYield(_loop8(), "t0", 25);
                  case 25:
                    i++;
                    _context68.next = 23;
                    break;
                  case 28:
                    _context68.next = 33;
                    break;
                  case 30:
                    _context68.prev = 30;
                    _context68.t1 = _context68["catch"](10);
                    console.error("Error fetching data for ");
                  case 33:
                    // Themes begin
                    am4core.useTheme(am4themes_animated);
                    // Themes end

                    // Create chart instance
                    powerChart = am4core.create("chartdiv3", am4charts.XYChart);
                    powerChart.paddingRight = 20;

                    // Add data
                    powerChart.data = waterValues;
                    console.log(powerChart.data);
                    waterValues.forEach(function (item) {
                      item.date = new Date(item.date).getTime(); // Convert to timestamp
                      console.log("item date (timestamp): " + item.date);

                      // Convert timestamp back to a readable date
                      var formattedDate = new Date(item.date).toLocaleDateString("en-US", {
                        // year: "numeric",
                        month: "short",
                        day: "numeric"
                      });
                      item.date = formattedDate;
                      console.log("Formatted item date: " + formattedDate);
                    });

                    // Create axes
                    categoryAxis = powerChart.xAxes.push(new am4charts.CategoryAxis());
                    categoryAxis.dataFields.category = "date"; // Use 'date' instead of 'year'
                    categoryAxis.renderer.minGridDistance = 80;
                    // categoryAxis.renderer.grid.template.location = 2;
                    // categoryAxis.startLocation = 1;
                    // categoryAxis.endLocation = 1.5;
                    categoryAxis.renderer.labels.template.horizontalCenter = "middle"; // Center labels
                    categoryAxis.renderer.labels.template.verticalCenter = "middle"; // Center labels
                    valueAxis = powerChart.yAxes.push(new am4charts.ValueAxis());
                    valueAxis.baseValue = 0;

                    // Function to create series

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
                  case 55:
                  case "end":
                    return _context68.stop();
                }
              }, _callee60, null, [[10, 30]]);
            })));
          case 1:
          case "end":
            return _context69.stop();
        }
      }, _callee61);
    }));
    return _lineChartMonthlyOccupancy.apply(this, arguments);
  }
  $("#startDateOccupancy, #endDateOccupancy").on("change", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          _context15.next = 2;
          return removeChart(occupacyLine);
        case 2:
        case "end":
          return _context15.stop();
      }
    }, _callee15);
  })));
  $("#sav_daily_occupancy").on("click", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          clearDateInputsOccupancy();
          _context16.next = 3;
          return removeChart(donutChart);
        case 3:
        case "end":
          return _context16.stop();
      }
    }, _callee16);
  })));
  $("#sav_monthly_occupancy").on("click", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          clearDateInputsOccupancy();
          _context17.next = 3;
          return removeChart(lineChartMonthlyOccupancy);
        case 3:
        case "end":
          return _context17.stop();
      }
    }, _callee17);
  })));
  $("#sav_yearly_occupancy").on("click", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee18() {
    return _regeneratorRuntime().wrap(function _callee18$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          clearDateInputsOccupancy();
          _context18.next = 3;
          return removeChart(occupacyBar);
        case 3:
        case "end":
          return _context18.stop();
      }
    }, _callee18);
  })));
  /* occupancy efficiency end */

  /* Indoor Air Quality start */
  var aqiCharts; // Single chart instance

  // Function to replace the chart
  function replaceIndoorChart(_x5) {
    return _replaceIndoorChart.apply(this, arguments);
  } // URL for fetching data
  function _replaceIndoorChart() {
    _replaceIndoorChart = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee62(newChartFunction) {
      return _regeneratorRuntime().wrap(function _callee62$(_context70) {
        while (1) switch (_context70.prev = _context70.next) {
          case 0:
            // Destroy the existing chart if it exists
            if (aqiCharts) {
              if (aqiCharts instanceof ApexCharts) {
                aqiCharts.destroy();
              } else {
                aqiCharts.dispose();
              }
            } else {
              console.log("No chart to destroy");
            }

            // Wait for the new chart to be created
            _context70.next = 3;
            return newChartFunction();
          case 3:
          case "end":
            return _context70.stop();
        }
      }, _callee62);
    }));
    return _replaceIndoorChart.apply(this, arguments);
  }
  var iiaqurl = "https://localhost/obix/config/Drivers/Barclays/IAQ/IAQ/";

  // Function to create the pie chart
  function createPieChart() {
    return _createPieChart.apply(this, arguments);
  } // Update the chart every second
  function _createPieChart() {
    _createPieChart = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee63() {
      var response, text, parser, xmlDoc, outElement, outValue, options;
      return _regeneratorRuntime().wrap(function _callee63$(_context71) {
        while (1) switch (_context71.prev = _context71.next) {
          case 0:
            _context71.next = 2;
            return fetch(iiaqurl);
          case 2:
            response = _context71.sent;
            _context71.next = 5;
            return response.text();
          case 5:
            text = _context71.sent;
            // Parse the XML data
            parser = new DOMParser();
            xmlDoc = parser.parseFromString(text, "text/xml"); // Get the <real> element value
            outElement = xmlDoc.querySelector('real[name="out"]');
            outValue = parseFloat(outElement.getAttribute('val')); // Pie chart options
            options = {
              series: [outValue],
              chart: {
                height: "100%",
                type: 'radialBar',
                events: {
                  rendered: function rendered(chartContext, config) {
                    // Locate the text element after render
                    var totalValue = config.globals.seriesTotals.reduce(function (a, b) {
                      return a + b;
                    }, 0);
                    var totalTextElement = document.querySelector("#chartdiv4 .apexcharts-text.apexcharts-datalabel-label");

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
                offsetY: 10,
                labels: {
                  useSeriesColors: true
                },
                markers: {
                  size: 0
                },
                formatter: function formatter(seriesName, opts) {
                  return seriesName;
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
            }; // Create a new chart instance with the updated options
            aqiCharts = new ApexCharts(document.querySelector("#chartdiv4"), options);
            aqiCharts.render();
          case 13:
          case "end":
            return _context71.stop();
        }
      }, _callee63);
    }));
    return _createPieChart.apply(this, arguments);
  }
  var chartInterval; // Interval ID

  // Start the interval to periodically update the chart
  function startInterval() {
    stopInterval();
    chartInterval = setInterval(function () {
      return replaceIndoorChart(createPieChart);
    }, 1000);
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
  (function () {
    var _initialize = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee19() {
      return _regeneratorRuntime().wrap(function _callee19$(_context19) {
        while (1) switch (_context19.prev = _context19.next) {
          case 0:
            _context19.next = 2;
            return createPieChart();
          case 2:
            // Create the chart initially
            startInterval(); // Start the interval to update the chart
          case 3:
          case "end":
            return _context19.stop();
        }
      }, _callee19);
    }));
    function initialize() {
      return _initialize.apply(this, arguments);
    }
    return initialize;
  })()();
  var aqiCharts1;
  var aqiCharts2;
  function aqiDonut1() {
    return _aqiDonut.apply(this, arguments);
  } // $('#aqiFloor1').on("click", async function () {
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
  function _aqiDonut() {
    _aqiDonut = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee64() {
      var scopes, upsData, _i8, _scopes4, scope, response, text, parser, xmlDoc, ups, outValue, options, options1;
      return _regeneratorRuntime().wrap(function _callee64$(_context72) {
        while (1) switch (_context72.prev = _context72.next) {
          case 0:
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
            scopes = ['Floor_32/Floor_32_Avg', 'Floor_33/Floor_33_Avg'];
            upsData = []; // Loop through each scope to fetch and process data
            _i8 = 0, _scopes4 = scopes;
          case 4:
            if (!(_i8 < _scopes4.length)) {
              _context72.next = 28;
              break;
            }
            scope = _scopes4[_i8];
            _context72.prev = 6;
            console.log("https://localhost/obix/config/Drivers/Barclays/IAQ/".concat(scope));
            _context72.next = 10;
            return fetch("https://localhost/obix/config/Drivers/Barclays/IAQ/".concat(scope));
          case 10:
            response = _context72.sent;
            console.log("aqi response " + response);
            _context72.next = 14;
            return response.text();
          case 14:
            text = _context72.sent;
            // Parse the XML response
            parser = new DOMParser();
            xmlDoc = parser.parseFromString(text, "application/xml"); // Extract values for ups, hvac, and rtltg
            ups = xmlDoc.querySelector('real[name="out"]');
            outValue = parseFloat(ups.getAttribute('display').split(' ')[0]);
            upsData.push(outValue);
            _context72.next = 25;
            break;
          case 22:
            _context72.prev = 22;
            _context72.t0 = _context72["catch"](6);
            console.error("Error fetching data for ".concat(scope, ":"), _context72.t0);
          case 25:
            _i8++;
            _context72.next = 4;
            break;
          case 28:
            options = {
              series: [upsData[0]],
              chart: {
                height: 225,
                // Adjusted height
                type: 'radialBar',
                offsetY: 40
              },
              plotOptions: {
                radialBar: {
                  hollow: {
                    margin: 5,
                    size: '70%'
                  },
                  dataLabels: {
                    name: {
                      show: false,
                      color: '#000'
                    },
                    value: {
                      show: true,
                      color: '#000',
                      offsetY: 10,
                      fontSize: '20px',
                      formatter: function formatter(val) {
                        return parseInt(val); // Remove the % symbol by returning only the value
                      }
                    }
                  },
                  track: {
                    background: '#494949',
                    strokeWidth: '100%',
                    margin: 0
                  },
                  offsetY: 30
                }
              },
              fill: {
                type: 'solid',
                // Changed to solid
                colors: ['#FCE22A'] // Solid red color
              },
              colors: ["#FCE22A"],
              labels: ['Floor 1'],
              legend: {
                show: true,
                floating: true,
                fontSize: '16px',
                position: 'top',
                horizontalAlign: 'center',
                offsetY: 10,
                labels: {
                  useSeriesColors: true
                },
                markers: {
                  size: 0
                },
                formatter: function formatter(seriesName, opts) {
                  return seriesName;
                },
                itemMargin: {
                  vertical: 3
                }
              }
            };
            aqiCharts1 = new ApexCharts(document.querySelector("#completionRateChart"), options);
            _context72.next = 32;
            return aqiCharts1.render();
          case 32:
            options1 = {
              series: [upsData[1]],
              chart: {
                height: 225,
                // Adjusted height
                type: 'radialBar',
                offsetY: 40
              },
              plotOptions: {
                radialBar: {
                  hollow: {
                    margin: 5,
                    size: '70%'
                  },
                  dataLabels: {
                    name: {
                      show: false,
                      color: '#000'
                    },
                    value: {
                      show: true,
                      color: '#000',
                      offsetY: 10,
                      fontSize: '20px',
                      formatter: function formatter(val) {
                        return parseInt(val); // Remove the % symbol by returning only the value
                      }
                    }
                  },
                  track: {
                    background: '#494949',
                    strokeWidth: '100%',
                    margin: 0
                  },
                  offsetY: 30
                }
              },
              fill: {
                type: 'solid',
                // Changed to solid
                colors: ['#77E4C8'] // Solid red color
              },
              colors: ["#77E4C8"],
              labels: ['Floor 1'],
              legend: {
                show: true,
                floating: true,
                fontSize: '16px',
                position: 'top',
                horizontalAlign: 'center',
                offsetY: 10,
                labels: {
                  useSeriesColors: true
                },
                markers: {
                  size: 0
                },
                formatter: function formatter(seriesName, opts) {
                  return seriesName;
                },
                itemMargin: {
                  vertical: 3
                }
              }
            };
            aqiCharts2 = new ApexCharts(document.querySelector("#bounceRateChart"), options1);
            _context72.next = 36;
            return aqiCharts2.render();
          case 36:
          case "end":
            return _context72.stop();
        }
      }, _callee64, null, [[6, 22]]);
    }));
    return _aqiDonut.apply(this, arguments);
  }
  $('#aqiFloor1').on("click", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee20() {
    return _regeneratorRuntime().wrap(function _callee20$(_context20) {
      while (1) switch (_context20.prev = _context20.next) {
        case 0:
          console.log("aqiFloor1 clicked");
          $(".aqiSeparate").show();
          $(".aqiAvg").hide();
          $("#aqiFloor2").show();
          $(".aqiBtn").hide();
          $(this).hide();
          //stopInterval();
          //chartInterval = setInterval(() => aqiDonut1, 1000);
          _context20.next = 8;
          return aqiDonut1();
        case 8:
        case "end":
          return _context20.stop();
      }
    }, _callee20, this);
  })));
  $('#aqiFloor2').on("click", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee21() {
    return _regeneratorRuntime().wrap(function _callee21$(_context21) {
      while (1) switch (_context21.prev = _context21.next) {
        case 0:
          console.log("aqiFloor2 clicked");
          $(".aqiSeparate").hide();
          $(".aqiAvg").show();
          $("#aqiFloor1").show();
          $(".aqiBtn").show();
          $(this).hide();
        case 6:
        case "end":
          return _context21.stop();
      }
    }, _callee21, this);
  })));
  function createBarChart() {
    return _createBarChart2.apply(this, arguments);
  }
  function _createBarChart2() {
    _createBarChart2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee66() {
      return _regeneratorRuntime().wrap(function _callee66$(_context75) {
        while (1) switch (_context75.prev = _context75.next) {
          case 0:
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

            am4core.ready(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee65() {
              var startDateValue, endDateValue, waterValues, urlToFetch, response, text, parser, xmlDoc, objs, _loop9, i, categoryAxis, valueAxis, createSeries;
              return _regeneratorRuntime().wrap(function _callee65$(_context74) {
                while (1) switch (_context74.prev = _context74.next) {
                  case 0:
                    createSeries = function _createSeries9(valueField, name, color) {
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
                    };
                    startDateValue = document.getElementById("startDateIAQ").value;
                    endDateValue = document.getElementById("endDateIAQ").value;
                    waterValues = []; // Fetch data asynchronously
                    urlToFetch = "".concat(url, "/obix/histories/Barclays_Sup/IAQ$2fA_IAQ_Daily/~historyQuery?start=").concat(startDateValue, "T14:33:26.164+05:30&end=").concat(endDateValue, "T14:33:26.164+05:30");
                    console.log(urlToFetch);
                    _context74.prev = 6;
                    _context74.next = 9;
                    return fetch(urlToFetch);
                  case 9:
                    response = _context74.sent;
                    console.log(response);
                    _context74.next = 13;
                    return response.text();
                  case 13:
                    text = _context74.sent;
                    parser = new DOMParser();
                    xmlDoc = parser.parseFromString(text, "text/xml");
                    objs = xmlDoc.getElementsByTagName("obj");
                    _loop9 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop9() {
                      var obj, abstime, real, dateText, valueText, value, date, formattedDate, dateStr, existingEntry;
                      return _regeneratorRuntime().wrap(function _loop9$(_context73) {
                        while (1) switch (_context73.prev = _context73.next) {
                          case 0:
                            obj = objs[i];
                            abstime = obj.getElementsByTagName("abstime")[0];
                            real = obj.getElementsByTagName("real")[0];
                            if (abstime && real) {
                              dateText = abstime.getAttribute("val");
                              valueText = real.getAttribute("val");
                              if (valueText && dateText) {
                                value = parseFloat(valueText).toFixed(2);
                                date = new Date(dateText);
                                formattedDate = date.toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric"
                                });
                                dateStr = date.toDateString(); // Use toDateString to compare without time
                                existingEntry = waterValues.find(function (entry) {
                                  return entry.date.toDateString() === dateStr;
                                });
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
                          case 4:
                          case "end":
                            return _context73.stop();
                        }
                      }, _loop9);
                    });
                    i = 0;
                  case 19:
                    if (!(i < objs.length)) {
                      _context74.next = 24;
                      break;
                    }
                    return _context74.delegateYield(_loop9(), "t0", 21);
                  case 21:
                    i++;
                    _context74.next = 19;
                    break;
                  case 24:
                    _context74.next = 29;
                    break;
                  case 26:
                    _context74.prev = 26;
                    _context74.t1 = _context74["catch"](6);
                    console.error("Error fetching data: ".concat(_context74.t1));
                  case 29:
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
                    waterValues.forEach(function (item) {
                      item.date = new Date(item.date).getTime(); // Convert to timestamp

                      var formattedDate = new Date(item.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric"
                      });
                      item.date = formattedDate;
                    });

                    // Create axes
                    categoryAxis = aqiCharts.xAxes.push(new am4charts.CategoryAxis());
                    categoryAxis.dataFields.category = "date"; // Use 'date' instead of 'year'
                    categoryAxis.renderer.minGridDistance = 80;
                    categoryAxis.renderer.labels.template.horizontalCenter = "middle"; // Center labels
                    categoryAxis.renderer.labels.template.verticalCenter = "middle"; // Center labels
                    valueAxis = aqiCharts.yAxes.push(new am4charts.ValueAxis());
                    valueAxis.baseValue = 0;

                    // Function to create series with the color #FF6600

                    // Add legend and series
                    aqiCharts.legend = new am4charts.Legend();
                    aqiCharts.legend.position = "top";
                    aqiCharts.legend.paddingBottom = 10;
                    aqiCharts.legend.labels.template.maxWidth = 95;
                    createSeries("value", "AQI", "#FF6600"); // Apply color to series
                  case 50:
                  case "end":
                    return _context74.stop();
                }
              }, _callee65, null, [[6, 26]]);
            })));
          case 1:
          case "end":
            return _context75.stop();
        }
      }, _callee66);
    }));
    return _createBarChart2.apply(this, arguments);
  }
  function aqiBarChart() {
    return _aqiBarChart.apply(this, arguments);
  }
  function _aqiBarChart() {
    _aqiBarChart = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee67() {
      var months, last12Months, chartData, _iterator7, _step7, month, _url2, _list$getElementsByTa3, _list$getElementsByTa4, response, text, parser, xml, list, abstime, realValue, abstimeDate, formattedAbstime, existingStyle, options;
      return _regeneratorRuntime().wrap(function _callee67$(_context76) {
        while (1) switch (_context76.prev = _context76.next) {
          case 0:
            _context76.prev = 0;
            // Get the last 12 months
            months = getLast12Months(); // Array of month names for the x-axis (e.g., ["Jan 2023", "Feb 2023", ...])
            last12Months = getLast12Months1(); // Array of objects with `startDate` for the URLs
            console.log("Last 12 Months (from getLast12Months1):", last12Months);
            chartData = []; // Loop through each month to fetch data
            _iterator7 = _createForOfIteratorHelper(last12Months);
            _context76.prev = 6;
            _iterator7.s();
          case 8:
            if ((_step7 = _iterator7.n()).done) {
              _context76.next = 36;
              break;
            }
            month = _step7.value;
            _url2 = "https://localhost/obix/histories/SqlServerDatabase/domesticYearly/~historyQuery?start=".concat(month.startDate, "T23:59:59.000+05:30&limit=1");
            _context76.prev = 11;
            _context76.next = 14;
            return fetch(_url2);
          case 14:
            response = _context76.sent;
            if (response.ok) {
              _context76.next = 19;
              break;
            }
            console.error("Error fetching data for ".concat(month.startDate, ": HTTP ").concat(response.status));
            chartData.push(0); // Add 0 for missing data
            return _context76.abrupt("continue", 34);
          case 19:
            _context76.next = 21;
            return response.text();
          case 21:
            text = _context76.sent;
            parser = new DOMParser();
            xml = parser.parseFromString(text, "application/xml"); // Parse the data
            list = xml.getElementsByTagName("list")[0];
            abstime = list === null || list === void 0 || (_list$getElementsByTa3 = list.getElementsByTagName("abstime")[0]) === null || _list$getElementsByTa3 === void 0 ? void 0 : _list$getElementsByTa3.getAttribute("val");
            realValue = list === null || list === void 0 || (_list$getElementsByTa4 = list.getElementsByTagName("real")[0]) === null || _list$getElementsByTa4 === void 0 ? void 0 : _list$getElementsByTa4.getAttribute("val");
            if (abstime && realValue) {
              abstimeDate = new Date(abstime);
              formattedAbstime = "".concat(abstimeDate.getFullYear(), "-").concat(String(abstimeDate.getMonth() + 1).padStart(2, '0'), "-").concat(String(abstimeDate.getDate()).padStart(2, '0'));
              if (formattedAbstime === month.startDate) {
                chartData.push(parseFloat(realValue).toFixed(2));
              } else {
                chartData.push(0); // Add 0 if no matching date
              }
            } else {
              chartData.push(0); // Add 0 for missing values
            }
            _context76.next = 34;
            break;
          case 30:
            _context76.prev = 30;
            _context76.t0 = _context76["catch"](11);
            console.error("Error processing data for ".concat(month.startDate, ":"), _context76.t0);
            chartData.push(0); // Add 0 in case of errors
          case 34:
            _context76.next = 8;
            break;
          case 36:
            _context76.next = 41;
            break;
          case 38:
            _context76.prev = 38;
            _context76.t1 = _context76["catch"](6);
            _iterator7.e(_context76.t1);
          case 41:
            _context76.prev = 41;
            _iterator7.f();
            return _context76.finish(41);
          case 44:
            existingStyle = document.getElementById('chartdiv4-styles');
            if (existingStyle) {
              existingStyle.remove();
            }
            // Configure the bar chart options
            options = {
              series: [{
                name: 'Occupancy Efficiency',
                data: chartData // Data for the chart
              }],
              chart: {
                type: 'bar',
                height: '100%',
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
              colors: ["#FF6600"],
              dataLabels: {
                enabled: false
              },
              stroke: {
                show: true,
                width: 0,
                colors: ['transparent']
              },
              xaxis: {
                categories: months // Use month names as x-axis categories
              },
              grid: {
                show: true // Disable grid lines
              },
              tooltip: {
                y: {
                  formatter: function formatter(val) {
                    return "".concat(val); // Customize tooltip value
                  }
                }
              },
              legend: {
                position: 'top',
                horizontalAlign: 'center',
                labels: {
                  colors: ['#000000'] // Customize legend label color
                }
              }
            };
            console.log("Creating bar chart...");
            aqiCharts = new ApexCharts(document.querySelector("#chartdiv4"), options);
            aqiCharts.render();
            _context76.next = 55;
            break;
          case 52:
            _context76.prev = 52;
            _context76.t2 = _context76["catch"](0);
            console.error("Error creating bar chart:", _context76.t2);
          case 55:
          case "end":
            return _context76.stop();
        }
      }, _callee67, null, [[0, 52], [6, 38, 41, 44], [11, 30]]);
    }));
    return _aqiBarChart.apply(this, arguments);
  }
  function lineChartMonthlyAqi() {
    return _lineChartMonthlyAqi.apply(this, arguments);
  } // $("#startDateIAQ, #endDateIAQ").on("change", async function () {
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
  function _lineChartMonthlyAqi() {
    _lineChartMonthlyAqi = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee69() {
      return _regeneratorRuntime().wrap(function _callee69$(_context79) {
        while (1) switch (_context79.prev = _context79.next) {
          case 0:
            am4core.ready(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee68() {
              var today, currentMonth, startDate, endDate, startISO, endISO, waterValues, urlToFetch, response, text, parser, xmlDoc, objs, _loop10, i, categoryAxis, valueAxis, createSeries;
              return _regeneratorRuntime().wrap(function _callee68$(_context78) {
                while (1) switch (_context78.prev = _context78.next) {
                  case 0:
                    createSeries = function _createSeries10(valueField, name, color) {
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
                    };
                    today = new Date();
                    currentMonth = today.getMonth(); // Set startDate and endDate to the previous month
                    startDate = new Date(today.getFullYear(), currentMonth - 1, 1);
                    endDate = new Date(today.getFullYear(), currentMonth, 0);
                    startISO = "".concat(startDate.getFullYear(), "-").concat(String(startDate.getMonth() + 1).padStart(2, '0'), "-").concat(String(startDate.getDate()).padStart(2, '0'));
                    endISO = "".concat(endDate.getFullYear(), "-").concat(String(endDate.getMonth() + 1).padStart(2, '0'), "-").concat(String(endDate.getDate()).padStart(2, '0'));
                    waterValues = []; // const url = "https://localhost";
                    // Fetch data asynchronously for each scope
                    urlToFetch = "".concat(url, "/obix/histories/SqlServerDatabase/domestic/~historyQuery?start=").concat(startISO, "T23:59:59.000+05:30&end=").concat(endISO, "T23:59:59.000+05:30");
                    console.log(urlToFetch);
                    _context78.prev = 10;
                    _context78.next = 13;
                    return fetch(urlToFetch);
                  case 13:
                    response = _context78.sent;
                    console.log(response);
                    _context78.next = 17;
                    return response.text();
                  case 17:
                    text = _context78.sent;
                    // Parse the XML data
                    parser = new DOMParser();
                    xmlDoc = parser.parseFromString(text, "text/xml");
                    objs = xmlDoc.getElementsByTagName("obj");
                    _loop10 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop10() {
                      var obj, abstime, real, dateText, valueText, value, date, formattedDate, dateStr, existingEntry;
                      return _regeneratorRuntime().wrap(function _loop10$(_context77) {
                        while (1) switch (_context77.prev = _context77.next) {
                          case 0:
                            obj = objs[i];
                            abstime = obj.getElementsByTagName("abstime")[0];
                            real = obj.getElementsByTagName("real")[0];
                            if (abstime && real) {
                              dateText = abstime.getAttribute("val");
                              valueText = real.getAttribute("val");
                              if (valueText && dateText) {
                                value = parseFloat(valueText).toFixed(2);
                                date = new Date(dateText);
                                formattedDate = date.toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric"
                                });
                                dateStr = date.toDateString(); // Use toDateString to compare without time
                                existingEntry = waterValues.find(function (entry) {
                                  return entry.date.toDateString() === dateStr;
                                });
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
                          case 4:
                          case "end":
                            return _context77.stop();
                        }
                      }, _loop10);
                    });
                    i = 0;
                  case 23:
                    if (!(i < objs.length)) {
                      _context78.next = 28;
                      break;
                    }
                    return _context78.delegateYield(_loop10(), "t0", 25);
                  case 25:
                    i++;
                    _context78.next = 23;
                    break;
                  case 28:
                    _context78.next = 33;
                    break;
                  case 30:
                    _context78.prev = 30;
                    _context78.t1 = _context78["catch"](10);
                    console.error("Error fetching data for ");
                  case 33:
                    // Themes begin
                    am4core.useTheme(am4themes_animated);
                    // Themes end

                    // Create chart instance
                    aqiCharts = am4core.create("chartdiv4", am4charts.XYChart);
                    aqiCharts.paddingRight = 20;

                    // Add data
                    aqiCharts.data = waterValues;
                    console.log(aqiCharts.data);
                    waterValues.forEach(function (item) {
                      item.date = new Date(item.date).getTime(); // Convert to timestamp
                      console.log("item date (timestamp): " + item.date);

                      // Convert timestamp back to a readable date
                      var formattedDate = new Date(item.date).toLocaleDateString("en-US", {
                        // year: "numeric",
                        month: "short",
                        day: "numeric"
                      });
                      item.date = formattedDate;
                      console.log("Formatted item date: " + formattedDate);
                    });

                    // Create axes
                    categoryAxis = aqiCharts.xAxes.push(new am4charts.CategoryAxis());
                    categoryAxis.dataFields.category = "date"; // Use 'date' instead of 'year'
                    categoryAxis.renderer.minGridDistance = 80;
                    // categoryAxis.renderer.grid.template.location = 2;
                    // categoryAxis.startLocation = 1;
                    // categoryAxis.endLocation = 1.5;
                    categoryAxis.renderer.labels.template.horizontalCenter = "middle"; // Center labels
                    categoryAxis.renderer.labels.template.verticalCenter = "middle"; // Center labels
                    valueAxis = aqiCharts.yAxes.push(new am4charts.ValueAxis());
                    valueAxis.baseValue = 0;

                    // Function to create series

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
                  case 55:
                  case "end":
                    return _context78.stop();
                }
              }, _callee68, null, [[10, 30]]);
            })));
          case 1:
          case "end":
            return _context79.stop();
        }
      }, _callee69);
    }));
    return _lineChartMonthlyAqi.apply(this, arguments);
  }
  $("#startDateIAQ, #endDateIAQ").on("change", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee22() {
    return _regeneratorRuntime().wrap(function _callee22$(_context22) {
      while (1) switch (_context22.prev = _context22.next) {
        case 0:
          // await createBarChart();
          stopInterval();
          _context22.next = 3;
          return replaceIndoorChart(createBarChart);
        case 3:
        case "end":
          return _context22.stop();
      }
    }, _callee22);
  })));
  $("#sav_daily_iaq").on("click", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee23() {
    return _regeneratorRuntime().wrap(function _callee23$(_context23) {
      while (1) switch (_context23.prev = _context23.next) {
        case 0:
          clearDateInputsAqi();
          chartInterval = setInterval(function () {
            return replaceIndoorChart(createPieChart);
          }, 1000);
        case 2:
        case "end":
          return _context23.stop();
      }
    }, _callee23);
  })));
  $("#sav_monthly_iaq").on("click", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee24() {
    return _regeneratorRuntime().wrap(function _callee24$(_context24) {
      while (1) switch (_context24.prev = _context24.next) {
        case 0:
          clearDateInputsAqi();
          stopInterval();
          _context24.next = 4;
          return replaceIndoorChart(lineChartMonthlyAqi);
        case 4:
        case "end":
          return _context24.stop();
      }
    }, _callee24);
  })));
  $("#sav_yearly_iaq").on("click", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee25() {
    return _regeneratorRuntime().wrap(function _callee25$(_context25) {
      while (1) switch (_context25.prev = _context25.next) {
        case 0:
          clearDateInputsAqi();
          // await aqiBarChart();
          stopInterval();
          _context25.next = 4;
          return replaceIndoorChart(aqiBarChart);
        case 4:
        case "end":
          return _context25.stop();
      }
    }, _callee25);
  })));
  /* Indoor Air Quality end */

  /* EPI Index start */
  //var epiChart; // Global reference to the current chart

  // Function to replace the current chart with a new one
  function replaceEpiChart(_x6) {
    return _replaceEpiChart.apply(this, arguments);
  }
  function _replaceEpiChart() {
    _replaceEpiChart = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee70(newChartFunction) {
      return _regeneratorRuntime().wrap(function _callee70$(_context80) {
        while (1) switch (_context80.prev = _context80.next) {
          case 0:
            // Check if there is an existing chart
            if (epiChart) {
              // Check if epiChart is an instance of ApexCharts
              if (epiChart instanceof ApexCharts) {
                console.log("ApexCharts instance destroyed");
                epiChart.destroy(); // Destroy the existing ApexCharts instance
              } else {
                console.log("am4charts.XYChart instance destroyed");
                epiChart.dispose(); // Dispose the existing am4charts.XYChart instance
              }
            }

            // Create the new chart by calling the passed chart function
            _context80.next = 3;
            return newChartFunction();
          case 3:
          case "end":
            return _context80.stop();
        }
      }, _callee70);
    }));
    return _replaceEpiChart.apply(this, arguments);
  }
  var epiChart; // Declare the variable globally
  function epiDonutChart() {
    return _epiDonutChart.apply(this, arguments);
  }
  function _epiDonutChart() {
    _epiDonutChart = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee71() {
      var response, text, parser, xmlDoc, ups, hvac, rtltg, seriesData, totalValue, style, options;
      return _regeneratorRuntime().wrap(function _callee71$(_context81) {
        while (1) switch (_context81.prev = _context81.next) {
          case 0:
            _context81.prev = 0;
            _context81.next = 3;
            return fetch("https://localhost/obix/config/Barclays/EPI/");
          case 3:
            response = _context81.sent;
            _context81.next = 6;
            return response.text();
          case 6:
            text = _context81.sent;
            // Parse the XML response
            parser = new DOMParser();
            xmlDoc = parser.parseFromString(text, "application/xml"); // Extract values for ups, hvac, and rt&ltg
            ups = parseFloat(xmlDoc.querySelector('ref[name="ups"]').getAttribute('display').split(' ')[0]);
            hvac = parseFloat(xmlDoc.querySelector('ref[name="hvac"]').getAttribute('display').split(' ')[0]);
            rtltg = parseFloat(xmlDoc.querySelector('ref[name="rt$26ltg"]').getAttribute('display').split(' ')[0]);
            seriesData = [hvac, ups, rtltg];
            totalValue = seriesData.reduce(function (a, b) {
              return a + b;
            }, 0); // Calculate the total value
            // Define chart styles
            style = document.createElement('style');
            style.innerHTML = "\n            #chartdiv5 .apexcharts-text {\n                fill: #000000;\n                font-weight: bold;\n            }\n        ";
            style.id = 'chartdiv5-styles';
            document.head.appendChild(style);

            // Chart configuration
            options = {
              series: seriesData,
              chart: {
                type: 'donut',
                height: "100%",
                animations: {
                  enabled: false // Disable all animations, including rotation
                },
                offsetY: -20
              },
              labels: ['HVAC', 'UPS', 'RP & LTG'],
              tooltip: {
                y: {
                  formatter: function formatter(val) {
                    return val; // Customize the tooltip text
                  }
                }
              },
              colors: ['#FFB200', '#667BC6', '#D1E9F6'],
              legend: {
                show: true,
                position: 'top',
                horizontalAlign: 'center',
                labels: {
                  colors: ['#000000', '#000000', '#000000'] // Legend label colors
                },
                offsetY: 10
              },
              plotOptions: {
                pie: {
                  donut: {
                    size: '50%',
                    labels: {
                      show: true,
                      name: {
                        show: true,
                        fontSize: '30px',
                        fontWeight: 'bold',
                        color: '#000000',
                        formatter: function formatter() {
                          return 'EPI';
                        }
                      },
                      value: {
                        show: true,
                        fontSize: '30px',
                        fontWeight: 'bold',
                        color: '#000000',
                        formatter: function formatter() {
                          return totalValue;
                        }
                      },
                      total: {
                        show: true,
                        label: 'EPI',
                        fontSize: '30px',
                        fontWeight: 'bold',
                        color: '#000000',
                        formatter: function formatter() {
                          return totalValue;
                        }
                      }
                    }
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
                show: false
              }
            }; // Initialize the chart and store the instance in epiChart
            epiChart = new ApexCharts(document.querySelector("#chartdiv5"), options);
            epiChart.render();
            _context81.next = 26;
            break;
          case 23:
            _context81.prev = 23;
            _context81.t0 = _context81["catch"](0);
            console.error("Error fetching data:", _context81.t0);
          case 26:
          case "end":
            return _context81.stop();
        }
      }, _callee71, null, [[0, 23]]);
    }));
    return _epiDonutChart.apply(this, arguments);
  }
  replaceEpiChart(epiDonutChart);
  function epiLine() {
    return _epiLine.apply(this, arguments);
  }
  function _epiLine() {
    _epiLine = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee73() {
      return _regeneratorRuntime().wrap(function _callee73$(_context84) {
        while (1) switch (_context84.prev = _context84.next) {
          case 0:
            am4core.ready(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee72() {
              var startDateValue, endDateValue, waters, waterValues, _i9, _waters5, scope, urlToFetch, response, text, parser, xmlDoc, objs, _loop11, i, categoryAxis, valueAxis, createSeries;
              return _regeneratorRuntime().wrap(function _callee72$(_context83) {
                while (1) switch (_context83.prev = _context83.next) {
                  case 0:
                    createSeries = function _createSeries11(valueField, name, color) {
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
                    };
                    startDateValue = document.getElementById("startDateEPI").value;
                    endDateValue = document.getElementById("endDateEPI").value;
                    waters = ['scope1date', 'scope2date', 'scope3date'];
                    waterValues = []; // const url = "https://localhost";
                    // Fetch data asynchronously for each scope
                    _i9 = 0, _waters5 = waters;
                  case 6:
                    if (!(_i9 < _waters5.length)) {
                      _context83.next = 39;
                      break;
                    }
                    scope = _waters5[_i9];
                    urlToFetch = "".concat(url, "/obix/histories/SqlServerDatabase/").concat(scope, "/~historyQuery?start=").concat(startDateValue, "T23:59:59.000+05:30&end=").concat(endDateValue, "T23:59:59.000+05:30");
                    console.log(urlToFetch);
                    _context83.prev = 10;
                    _context83.next = 13;
                    return fetch(urlToFetch);
                  case 13:
                    response = _context83.sent;
                    console.log(response);
                    if (response.ok) {
                      _context83.next = 18;
                      break;
                    }
                    console.error("Error fetching data for ".concat(scope, ": ").concat(response.status, " - ").concat(response.statusText));
                    return _context83.abrupt("continue", 36);
                  case 18:
                    _context83.next = 20;
                    return response.text();
                  case 20:
                    text = _context83.sent;
                    // Parse the XML data
                    parser = new DOMParser();
                    xmlDoc = parser.parseFromString(text, "text/xml");
                    objs = xmlDoc.getElementsByTagName("obj");
                    _loop11 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop11() {
                      var obj, abstime, real, dateText, valueText, value, date, formattedDate, dateStr, existingEntry;
                      return _regeneratorRuntime().wrap(function _loop11$(_context82) {
                        while (1) switch (_context82.prev = _context82.next) {
                          case 0:
                            obj = objs[i];
                            abstime = obj.getElementsByTagName("abstime")[0];
                            real = obj.getElementsByTagName("real")[0];
                            if (abstime && real) {
                              dateText = abstime.getAttribute("val");
                              valueText = real.getAttribute("val");
                              if (valueText && dateText) {
                                value = parseFloat(valueText).toFixed(2);
                                date = new Date(dateText);
                                formattedDate = date.toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric"
                                });
                                dateStr = date.toDateString(); // Use toDateString to compare without time
                                existingEntry = waterValues.find(function (entry) {
                                  return entry.date.toDateString() === dateStr;
                                });
                                if (existingEntry) {
                                  existingEntry[scope] = parseFloat(value);
                                } else {
                                  waterValues.push(_defineProperty({
                                    date: date
                                  }, scope, parseFloat(value)));
                                }
                              }
                            }
                          case 4:
                          case "end":
                            return _context82.stop();
                        }
                      }, _loop11);
                    });
                    i = 0;
                  case 26:
                    if (!(i < objs.length)) {
                      _context83.next = 31;
                      break;
                    }
                    return _context83.delegateYield(_loop11(), "t0", 28);
                  case 28:
                    i++;
                    _context83.next = 26;
                    break;
                  case 31:
                    _context83.next = 36;
                    break;
                  case 33:
                    _context83.prev = 33;
                    _context83.t1 = _context83["catch"](10);
                    console.error("Error fetching data for ".concat(scope, ": ").concat(_context83.t1.message));
                  case 36:
                    _i9++;
                    _context83.next = 6;
                    break;
                  case 39:
                    // Themes begin
                    am4core.useTheme(am4themes_animated);
                    // Themes end

                    // Create chart instance
                    epiChart = am4core.create("chartdiv5", am4charts.XYChart);
                    epiChart.paddingRight = 20;

                    // Add data
                    epiChart.data = waterValues;
                    waterValues.forEach(function (item) {
                      item.date = new Date(item.date).getTime(); // Convert to timestamp
                      console.log("item date (timestamp): " + item.date);

                      // Convert timestamp back to a readable date
                      var formattedDate = new Date(item.date).toLocaleDateString("en-US", {
                        // year: "numeric",
                        month: "short",
                        day: "numeric"
                      });
                      item.date = formattedDate;
                      console.log("Formatted item date: " + formattedDate);
                    });

                    // Create axes
                    categoryAxis = epiChart.xAxes.push(new am4charts.CategoryAxis());
                    categoryAxis.dataFields.category = "date"; // Use 'date' instead of 'year'
                    categoryAxis.renderer.minGridDistance = 80;
                    // categoryAxis.renderer.grid.template.location = 2;
                    // categoryAxis.startLocation = 1;
                    // categoryAxis.endLocation = 1.5;
                    categoryAxis.renderer.labels.template.horizontalCenter = "middle"; // Center labels
                    categoryAxis.renderer.labels.template.verticalCenter = "middle"; // Center labels
                    valueAxis = epiChart.yAxes.push(new am4charts.ValueAxis());
                    valueAxis.baseValue = 0;

                    // Function to create series

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
                  case 62:
                  case "end":
                    return _context83.stop();
                }
              }, _callee72, null, [[10, 33]]);
            })));
          case 1:
          case "end":
            return _context84.stop();
        }
      }, _callee73);
    }));
    return _epiLine.apply(this, arguments);
  }
  function epiBarChart() {
    return _epiBarChart.apply(this, arguments);
  }
  function _epiBarChart() {
    _epiBarChart = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee74() {
      var scopeData, last12MonthsData, _iterator8, _step8, month, scopeUrls, i, response, text, parser, xml, records, _iterator9, _step9, _record$getElementsBy5, _record$getElementsBy6, record, abstime, realValue, abstimeDate, formattedAbstime, existingStyle, options;
      return _regeneratorRuntime().wrap(function _callee74$(_context85) {
        while (1) switch (_context85.prev = _context85.next) {
          case 0:
            scopeData = [[], [], []]; // Scope 1, Scope 2, Scope 3
            last12MonthsData = getLast12Months1();
            console.log("bar " + last12MonthsData);
            _iterator8 = _createForOfIteratorHelper(last12MonthsData);
            _context85.prev = 4;
            _iterator8.s();
          case 6:
            if ((_step8 = _iterator8.n()).done) {
              _context85.next = 36;
              break;
            }
            month = _step8.value;
            scopeUrls = ["".concat(url, "/obix/histories/SqlServerDatabase/YearlyScope1/~historyQuery?start=").concat(month.startDate, "T23:59:59.000+05:30&limit=1"), "".concat(url, "/obix/histories/SqlServerDatabase/YearlyScope2/~historyQuery?start=").concat(month.startDate, "T23:59:59.000+05:30&limit=1"), "".concat(url, "/obix/histories/SqlServerDatabase/YearlyScope3/~historyQuery?start=").concat(month.startDate, "T23:59:59.000+05:30&limit=1")];
            i = 0;
          case 10:
            if (!(i < scopeUrls.length)) {
              _context85.next = 34;
              break;
            }
            _context85.prev = 11;
            _context85.next = 14;
            return fetch(scopeUrls[i]);
          case 14:
            response = _context85.sent;
            if (response.ok) {
              _context85.next = 17;
              break;
            }
            throw new Error("HTTP error! Status: ".concat(response.status));
          case 17:
            _context85.next = 19;
            return response.text();
          case 19:
            text = _context85.sent;
            parser = new DOMParser();
            xml = parser.parseFromString(text, "application/xml");
            records = xml.getElementsByTagName("list");
            _iterator9 = _createForOfIteratorHelper(records);
            try {
              for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                record = _step9.value;
                // Fetch `abstime` and `real` values
                abstime = (_record$getElementsBy5 = record.getElementsByTagName("abstime")[0]) === null || _record$getElementsBy5 === void 0 ? void 0 : _record$getElementsBy5.getAttribute("val");
                realValue = (_record$getElementsBy6 = record.getElementsByTagName("real")[0]) === null || _record$getElementsBy6 === void 0 ? void 0 : _record$getElementsBy6.getAttribute("val"); // Match the `abstime` with the corresponding `month.startDate`
                if (abstime && realValue) {
                  abstimeDate = new Date(abstime);
                  formattedAbstime = "".concat(abstimeDate.getFullYear(), "-").concat(String(abstimeDate.getMonth() + 1).padStart(2, '0'), "-").concat(String(abstimeDate.getDate()).padStart(2, '0'));
                  if (formattedAbstime === month.startDate) {
                    scopeData[i].push(parseFloat(realValue).toFixed(2));
                  }
                }
              }
            } catch (err) {
              _iterator9.e(err);
            } finally {
              _iterator9.f();
            }
            _context85.next = 31;
            break;
          case 27:
            _context85.prev = 27;
            _context85.t0 = _context85["catch"](11);
            console.error("Error fetching data for scope ".concat(i + 1, ":"), _context85.t0);
            scopeData[i].push(null); // Push null to maintain alignment
          case 31:
            i++;
            _context85.next = 10;
            break;
          case 34:
            _context85.next = 6;
            break;
          case 36:
            _context85.next = 41;
            break;
          case 38:
            _context85.prev = 38;
            _context85.t1 = _context85["catch"](4);
            _iterator8.e(_context85.t1);
          case 41:
            _context85.prev = 41;
            _iterator8.f();
            return _context85.finish(41);
          case 44:
            existingStyle = document.getElementById('chartdiv5-styles');
            if (existingStyle) {
              existingStyle.remove();
            }
            // Prepare options for the new ApexCharts bar chart
            options = {
              series: [{
                name: 'HVAC',
                data: scopeData[0]
              }, {
                name: 'UPS',
                data: scopeData[1]
              }, {
                name: 'RT & LTG',
                data: scopeData[2]
              }],
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
                  horizontal: false,
                  // Vertical bars
                  columnWidth: '80%',
                  // Increase the width of the bars
                  endingShape: 'rounded',
                  groupedPadding: 0
                }
              },
              colors: ["#FFB200", "#667BC6", "#D1E9F6"],
              // Colors for HVAC, UPS, RT & LTG
              dataLabels: {
                enabled: false // Disable the values on top of the bars
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
                show: true
              },
              tooltip: {
                y: {
                  formatter: function formatter(val) {
                    return val; // Customize tooltip text
                  }
                }
              },
              legend: {
                position: 'top',
                horizontalAlign: 'center',
                labels: {
                  colors: ['#000000']
                }
              },
              stroke: {
                show: true,
                width: 2,
                colors: ['transparent'] // Show the borders between columns
              },
              fill: {
                opacity: 1 // Ensure the bars are fully filled
              }
            }; // Create and render the new ApexCharts instance
            epiChart = new ApexCharts(document.querySelector("#chartdiv5"), options);
            _context85.next = 50;
            return epiChart.render();
          case 50:
          case "end":
            return _context85.stop();
        }
      }, _callee74, null, [[4, 38, 41, 44], [11, 27]]);
    }));
    return _epiBarChart.apply(this, arguments);
  }
  function lineChartMonthlyEpi() {
    return _lineChartMonthlyEpi.apply(this, arguments);
  }
  function _lineChartMonthlyEpi() {
    _lineChartMonthlyEpi = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee76() {
      return _regeneratorRuntime().wrap(function _callee76$(_context88) {
        while (1) switch (_context88.prev = _context88.next) {
          case 0:
            am4core.ready(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee75() {
              var today, currentMonth, startDate, endDate, startISO, endISO, waters, waterValues, _i10, _waters6, scope, urlToFetch, response, text, parser, xmlDoc, objs, _loop12, i, categoryAxis, valueAxis, createSeries;
              return _regeneratorRuntime().wrap(function _callee75$(_context87) {
                while (1) switch (_context87.prev = _context87.next) {
                  case 0:
                    createSeries = function _createSeries12(valueField, name, color) {
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
                    };
                    today = new Date();
                    currentMonth = today.getMonth();
                    startDate = new Date(today.getFullYear(), currentMonth - 1, 1);
                    endDate = new Date(today.getFullYear(), currentMonth, 0);
                    startISO = "".concat(startDate.getFullYear(), "-").concat(String(startDate.getMonth() + 1).padStart(2, '0'), "-").concat(String(startDate.getDate()).padStart(2, '0'));
                    endISO = "".concat(endDate.getFullYear(), "-").concat(String(endDate.getMonth() + 1).padStart(2, '0'), "-").concat(String(endDate.getDate()).padStart(2, '0'));
                    waters = ['scope1date', 'scope2date', 'scope3date'];
                    waterValues = []; // Fetch data asynchronously for each scope
                    _i10 = 0, _waters6 = waters;
                  case 10:
                    if (!(_i10 < _waters6.length)) {
                      _context87.next = 43;
                      break;
                    }
                    scope = _waters6[_i10];
                    urlToFetch = "".concat(url, "/obix/histories/SqlServerDatabase/").concat(scope, "/~historyQuery?start=").concat(startISO, "T23:59:59.000+05:30&end=").concat(endISO, "T23:59:59.000+05:30");
                    console.log(urlToFetch);
                    _context87.prev = 14;
                    _context87.next = 17;
                    return fetch(urlToFetch);
                  case 17:
                    response = _context87.sent;
                    console.log(response);
                    if (response.ok) {
                      _context87.next = 22;
                      break;
                    }
                    console.error("Error fetching data for ".concat(scope, ": ").concat(response.status, " - ").concat(response.statusText));
                    return _context87.abrupt("continue", 40);
                  case 22:
                    _context87.next = 24;
                    return response.text();
                  case 24:
                    text = _context87.sent;
                    parser = new DOMParser();
                    xmlDoc = parser.parseFromString(text, "text/xml");
                    objs = xmlDoc.getElementsByTagName("obj");
                    _loop12 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop12() {
                      var obj, abstime, real, dateText, valueText, value, date, formattedDate, dateStr, existingEntry;
                      return _regeneratorRuntime().wrap(function _loop12$(_context86) {
                        while (1) switch (_context86.prev = _context86.next) {
                          case 0:
                            obj = objs[i];
                            abstime = obj.getElementsByTagName("abstime")[0];
                            real = obj.getElementsByTagName("real")[0];
                            if (abstime && real) {
                              dateText = abstime.getAttribute("val");
                              valueText = real.getAttribute("val");
                              if (valueText && dateText) {
                                value = parseFloat(valueText).toFixed(2);
                                date = new Date(dateText);
                                formattedDate = date.toLocaleDateString("en-US", {
                                  month: "short",
                                  day: "numeric"
                                });
                                dateStr = date.toDateString(); // Use toDateString to compare without time
                                existingEntry = waterValues.find(function (entry) {
                                  return entry.date.toDateString() === dateStr;
                                });
                                if (existingEntry) {
                                  existingEntry[scope] = parseFloat(value);
                                } else {
                                  waterValues.push(_defineProperty({
                                    date: date
                                  }, scope, parseFloat(value)));
                                }
                              }
                            }
                          case 4:
                          case "end":
                            return _context86.stop();
                        }
                      }, _loop12);
                    });
                    i = 0;
                  case 30:
                    if (!(i < objs.length)) {
                      _context87.next = 35;
                      break;
                    }
                    return _context87.delegateYield(_loop12(), "t0", 32);
                  case 32:
                    i++;
                    _context87.next = 30;
                    break;
                  case 35:
                    _context87.next = 40;
                    break;
                  case 37:
                    _context87.prev = 37;
                    _context87.t1 = _context87["catch"](14);
                    console.error("Error fetching data for ".concat(scope, ": ").concat(_context87.t1.message));
                  case 40:
                    _i10++;
                    _context87.next = 10;
                    break;
                  case 43:
                    // Themes begin
                    am4core.useTheme(am4themes_animated);
                    // Themes end

                    // Create chart instance
                    epiChart = am4core.create("chartdiv5", am4charts.XYChart);
                    epiChart.paddingRight = 20;

                    // Add data
                    epiChart.data = waterValues;
                    waterValues.forEach(function (item) {
                      item.date = new Date(item.date).getTime(); // Convert to timestamp
                      console.log("item date (timestamp): " + item.date);

                      // Convert timestamp back to a readable date
                      var formattedDate = new Date(item.date).toLocaleDateString("en-US", {
                        // year: "numeric",
                        month: "short",
                        day: "numeric"
                      });
                      item.date = formattedDate;
                      console.log("Formatted item date: " + formattedDate);
                    });

                    // Create axes
                    categoryAxis = epiChart.xAxes.push(new am4charts.CategoryAxis());
                    categoryAxis.dataFields.category = "date"; // Use 'date' instead of 'year'
                    categoryAxis.renderer.minGridDistance = 80;
                    // categoryAxis.renderer.grid.template.location = 2;
                    // categoryAxis.startLocation = 1;
                    // categoryAxis.endLocation = 1.5;
                    categoryAxis.renderer.labels.template.horizontalCenter = "middle"; // Center labels
                    categoryAxis.renderer.labels.template.verticalCenter = "middle"; // Center labels
                    valueAxis = epiChart.yAxes.push(new am4charts.ValueAxis());
                    valueAxis.baseValue = 0;

                    // Function to create series

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
                  case 66:
                  case "end":
                    return _context87.stop();
                }
              }, _callee75, null, [[14, 37]]);
            })));
          case 1:
          case "end":
            return _context88.stop();
        }
      }, _callee76);
    }));
    return _lineChartMonthlyEpi.apply(this, arguments);
  }
  $("#startDateEPI, #endDateEPI").on("change", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee26() {
    return _regeneratorRuntime().wrap(function _callee26$(_context26) {
      while (1) switch (_context26.prev = _context26.next) {
        case 0:
          _context26.next = 2;
          return replaceEpiChart(epiLine);
        case 2:
        case "end":
          return _context26.stop();
      }
    }, _callee26);
  })));
  $("#sav_daily_epi").on("click", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee27() {
    return _regeneratorRuntime().wrap(function _callee27$(_context27) {
      while (1) switch (_context27.prev = _context27.next) {
        case 0:
          clearDateInputsEpi();
          _context27.next = 3;
          return replaceEpiChart(epiDonutChart);
        case 3:
        case "end":
          return _context27.stop();
      }
    }, _callee27);
  })));
  $("#sav_monthly_epi").on("click", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee28() {
    return _regeneratorRuntime().wrap(function _callee28$(_context28) {
      while (1) switch (_context28.prev = _context28.next) {
        case 0:
          clearDateInputsEpi();
          _context28.next = 3;
          return replaceEpiChart(lineChartMonthlyEpi);
        case 3:
        case "end":
          return _context28.stop();
      }
    }, _callee28);
  })));
  $("#sav_yearly_epi").on("click", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee29() {
    return _regeneratorRuntime().wrap(function _callee29$(_context29) {
      while (1) switch (_context29.prev = _context29.next) {
        case 0:
          _context29.next = 2;
          return replaceEpiChart(epiBarChart);
        case 2:
          clearDateInputsEpi();
        case 3:
        case "end":
          return _context29.stop();
      }
    }, _callee29);
  })));
  var epiChart1;
  function epiColumnChart() {
    return _epiColumnChart.apply(this, arguments);
  }
  function _epiColumnChart() {
    _epiColumnChart = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee77() {
      var scopes, hvacData, upsData, rtltgData, _i11, _scopes5, scope, response, text, parser, xmlDoc, ups, hvac, rtltg, options;
      return _regeneratorRuntime().wrap(function _callee77$(_context89) {
        while (1) switch (_context89.prev = _context89.next) {
          case 0:
            scopes = ['Floor1', 'Floor2'];
            hvacData = [];
            upsData = [];
            rtltgData = []; // Loop through each scope to fetch and process data
            _i11 = 0, _scopes5 = scopes;
          case 5:
            if (!(_i11 < _scopes5.length)) {
              _context89.next = 30;
              break;
            }
            scope = _scopes5[_i11];
            _context89.prev = 7;
            _context89.next = 10;
            return fetch("https://localhost/obix/config/Barclays/EPI/".concat(scope));
          case 10:
            response = _context89.sent;
            _context89.next = 13;
            return response.text();
          case 13:
            text = _context89.sent;
            // Parse the XML response
            parser = new DOMParser();
            xmlDoc = parser.parseFromString(text, "application/xml"); // Extract values for ups, hvac, and rtltg
            ups = parseFloat(xmlDoc.querySelector('ref[name="ups"]').getAttribute('display').split(' ')[0]);
            hvac = parseFloat(xmlDoc.querySelector('ref[name="hvac"]').getAttribute('display').split(' ')[0]);
            rtltg = parseFloat(xmlDoc.querySelector('ref[name="rt$26ltg"]').getAttribute('display').split(' ')[0]); // Store the data for each scope
            hvacData.push(hvac);
            upsData.push(ups);
            rtltgData.push(rtltg);
            _context89.next = 27;
            break;
          case 24:
            _context89.prev = 24;
            _context89.t0 = _context89["catch"](7);
            console.error("Error fetching data for ".concat(scope, ":"), _context89.t0);
          case 27:
            _i11++;
            _context89.next = 5;
            break;
          case 30:
            if (epiChart1 instanceof ApexCharts) {
              console.log("Pie chart destroyed");
              epiChart1.destroy(); // Dispose the existing chart
            }
            options = {
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
                    position: 'top' // Show data labels on top
                  },
                  columnWidth: '45%',
                  // Set column width for comparison
                  endingShape: 'rounded' // Rounded edges for a smooth look
                }
              },
              dataLabels: {
                enabled: true,
                formatter: function formatter(val) {
                  return val + "%"; // Show percentage symbol next to data
                },
                offsetY: -30,
                style: {
                  fontSize: '12px',
                  colors: ["#304758"]
                }
              },
              xaxis: {
                categories: ["Floor 1", "Floor 2"],
                // X-axis now has Floor 1 and Floor 2
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
                      opacityTo: 0.5
                    }
                  }
                },
                tooltip: {
                  enabled: true // Show tooltips on x-axis hover
                }
              },
              yaxis: {
                axisBorder: {
                  show: false // Hide y-axis border
                },
                axisTicks: {
                  show: false // Hide ticks on y-axis
                },
                labels: {
                  show: false,
                  // Hide y-axis labels for a cleaner look
                  formatter: function formatter(val) {
                    return val; // Append percentage symbol to y-axis values
                  }
                }
              },
              legend: {
                position: 'top',
                // Place the legend on top
                horizontalAlign: 'center',
                // Center align the legend
                offsetY: 20
              },
              colors: ['#FFB200', '#667BC6', '#D1E9F6'],
              // Custom colors for HVAC, UPS, RT & LTG
              grid: {
                padding: {
                  left: 10,
                  right: 10
                }
              }
            }; // Select the div where the chart should render
            epiChart1 = new ApexCharts(document.querySelector("#epiBarChart"), options);
            _context89.next = 35;
            return epiChart1.render();
          case 35:
          case "end":
            return _context89.stop();
        }
      }, _callee77, null, [[7, 24]]);
    }));
    return _epiColumnChart.apply(this, arguments);
  }
  $('#epiFloor1').on("click", /*#__PURE__*/function () {
    var _ref29 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee30(event) {
      return _regeneratorRuntime().wrap(function _callee30$(_context30) {
        while (1) switch (_context30.prev = _context30.next) {
          case 0:
            event.stopPropagation();
            console.log("epiFloor1 clicked");
            $(".epiBar").show();
            $(".epiDonut").hide();
            $("#epiFloor2").show();
            $(".epiBtn").hide();
            $(this).hide();
            _context30.next = 9;
            return epiColumnChart();
          case 9:
          case "end":
            return _context30.stop();
        }
      }, _callee30, this);
    }));
    return function (_x7) {
      return _ref29.apply(this, arguments);
    };
  }());
  $('#epiFloor2').on("click", /*#__PURE__*/function () {
    var _ref30 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee31(event) {
      return _regeneratorRuntime().wrap(function _callee31$(_context31) {
        while (1) switch (_context31.prev = _context31.next) {
          case 0:
            event.stopPropagation();
            console.log("epiFloor2 clicked");
            $(".epiBar").hide();
            $(".epiDonut").show();
            $("#epiFloor1").show();
            $(".epiBtn").show();
            $(this).hide();
          case 7:
          case "end":
            return _context31.stop();
        }
      }, _callee31, this);
    }));
    return function (_x8) {
      return _ref30.apply(this, arguments);
    };
  }());

  /* EPI Index end */
  function getLast12Months() {
    var months = [];
    var currentDate = new Date();
    // Generate the last 12 months
    for (var i = 1; i <= 12; i++) {
      var monthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
      // Format as "Nov 2023"
      var formattedMonth = monthDate.toLocaleString('default', {
        month: 'short',
        year: 'numeric'
      });
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
    var months = [];
    var now = new Date();
    for (var i = 0; i < 12; i++) {
      // Calculate the first day of the month for the current iteration
      var firstDayOfMonth = new Date(now.getFullYear(), now.getMonth() - i, 1);

      // Push the formatted first day of the month (YYYY-MM-DD)
      months.push({
        startDate: "".concat(firstDayOfMonth.getFullYear(), "-").concat(String(firstDayOfMonth.getMonth() + 1).padStart(2, '0'), "-").concat(String(firstDayOfMonth.getDate()).padStart(2, '0'))
      });
    }
    return months;
  }
  // Example function to generate random data for each scope
  function getRandomData() {
    return Array.from({
      length: 12
    }, function () {
      return Math.floor(Math.random() * 100) + 20;
    }); // Random data for 12 months
  }
  function showAlert(_x9, _x10) {
    return _showAlert.apply(this, arguments);
  }
  function _showAlert() {
    _showAlert = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee78(message1, message2) {
      var modal;
      return _regeneratorRuntime().wrap(function _callee78$(_context90) {
        while (1) switch (_context90.prev = _context90.next) {
          case 0:
            // Set the first message for modalMessage1 in red
            document.getElementById("modalMessage").style.color = "red";
            document.getElementById("modalMessage").innerText = message1; // Set the message for modalMessage1

            // Set the second message for modalMessage in green
            document.getElementById("modalMessage1").style.color = "green";
            document.getElementById("modalMessage1").innerText = message2; // Set the message for modalMessage

            // Show the modal
            modal = new bootstrap.Modal(document.getElementById('staticBackdrop'));
            modal.show();
            // clearDateInputs();
            // clearDateInputsWater();
          case 6:
          case "end":
            return _context90.stop();
        }
      }, _callee78);
    }));
    return _showAlert.apply(this, arguments);
  }
  function validateDateRange(_x11, _x12) {
    return _validateDateRange.apply(this, arguments);
  }
  function _validateDateRange() {
    _validateDateRange = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee79(startDate, endDate) {
      var today, limitDate, timeDiff, dayDiff;
      return _regeneratorRuntime().wrap(function _callee79$(_context91) {
        while (1) switch (_context91.prev = _context91.next) {
          case 0:
            today = new Date(); // Current date
            limitDate = new Date('2024-08-31'); // Limit date (hardcoded)
            //resetCharts();
            // Check if the start date is after today's date
            if (!(startDate > today)) {
              _context91.next = 6;
              break;
            }
            console.log(startDate);
            showAlert('Start date cannot be in the future.', 'Please select a valid start date.');
            return _context91.abrupt("return", false);
          case 6:
            if (!(endDate > today)) {
              _context91.next = 10;
              break;
            }
            console.log(endDate);
            showAlert('End date cannot be in the future.', 'Please select a valid end date.');
            return _context91.abrupt("return", false);
          case 10:
            if (!(startDate < limitDate)) {
              _context91.next = 13;
              break;
            }
            showAlert('Data for selected start date is not available.', 'Please select a date on or after August 31, 2024.');
            return _context91.abrupt("return", false);
          case 13:
            if (!(endDate < limitDate)) {
              _context91.next = 16;
              break;
            }
            showAlert('Data for selected end date is not available.', 'Please select a date on or after August 31, 2024.');
            return _context91.abrupt("return", false);
          case 16:
            if (!(startDate >= endDate)) {
              _context91.next = 19;
              break;
            }
            showAlert('Start Date And End Date Can Not Be Same', 'Please select a valid date range.');
            return _context91.abrupt("return", false);
          case 19:
            // Calculate the difference in time
            timeDiff = endDate - startDate; // Calculate the difference in days
            dayDiff = timeDiff / (1000 * 3600 * 24); // Validate the number of selected days
            if (!(dayDiff > 31)) {
              _context91.next = 24;
              break;
            }
            showAlert('You cannot select more than 31 days.', 'Please select a valid date range.');
            return _context91.abrupt("return", false);
          case 24:
            return _context91.abrupt("return", true);
          case 25:
          case "end":
            return _context91.stop();
        }
      }, _callee79);
    }));
    return _validateDateRange.apply(this, arguments);
  }
  function clearDateInputs() {
    return _clearDateInputs.apply(this, arguments);
  }
  function _clearDateInputs() {
    _clearDateInputs = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee80() {
      return _regeneratorRuntime().wrap(function _callee80$(_context92) {
        while (1) switch (_context92.prev = _context92.next) {
          case 0:
            $('#startDate').val(''); // Clear start date
            $('#endDate').val(''); // Clear end date
          case 2:
          case "end":
            return _context92.stop();
        }
      }, _callee80);
    }));
    return _clearDateInputs.apply(this, arguments);
  }
  function clearDateInputsWater() {
    return _clearDateInputsWater.apply(this, arguments);
  }
  function _clearDateInputsWater() {
    _clearDateInputsWater = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee81() {
      return _regeneratorRuntime().wrap(function _callee81$(_context93) {
        while (1) switch (_context93.prev = _context93.next) {
          case 0:
            $('#startDateWater').val(''); // Clear start date
            $('#endDateWater').val(''); // Clear end date
          case 2:
          case "end":
            return _context93.stop();
        }
      }, _callee81);
    }));
    return _clearDateInputsWater.apply(this, arguments);
  }
  function clearDateInputsPower() {
    return _clearDateInputsPower.apply(this, arguments);
  }
  function _clearDateInputsPower() {
    _clearDateInputsPower = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee82() {
      return _regeneratorRuntime().wrap(function _callee82$(_context94) {
        while (1) switch (_context94.prev = _context94.next) {
          case 0:
            $("#startDatePower").val('');
            $("#endDatePower").val('');
          case 2:
          case "end":
            return _context94.stop();
        }
      }, _callee82);
    }));
    return _clearDateInputsPower.apply(this, arguments);
  }
  function clearDateInputsOccupancy() {
    return _clearDateInputsOccupancy.apply(this, arguments);
  }
  function _clearDateInputsOccupancy() {
    _clearDateInputsOccupancy = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee83() {
      return _regeneratorRuntime().wrap(function _callee83$(_context95) {
        while (1) switch (_context95.prev = _context95.next) {
          case 0:
            $("#startDateOccupancy").val('');
            $("#endDateOccupancy").val('');
          case 2:
          case "end":
            return _context95.stop();
        }
      }, _callee83);
    }));
    return _clearDateInputsOccupancy.apply(this, arguments);
  }
  function clearDateInputsAqi() {
    return _clearDateInputsAqi.apply(this, arguments);
  }
  function _clearDateInputsAqi() {
    _clearDateInputsAqi = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee84() {
      return _regeneratorRuntime().wrap(function _callee84$(_context96) {
        while (1) switch (_context96.prev = _context96.next) {
          case 0:
            $("#startDateIAQ").val('');
            $("#endDateIAQ").val('');
          case 2:
          case "end":
            return _context96.stop();
        }
      }, _callee84);
    }));
    return _clearDateInputsAqi.apply(this, arguments);
  }
  function clearDateInputsEpi() {
    return _clearDateInputsEpi.apply(this, arguments);
  }
  function _clearDateInputsEpi() {
    _clearDateInputsEpi = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee85() {
      return _regeneratorRuntime().wrap(function _callee85$(_context97) {
        while (1) switch (_context97.prev = _context97.next) {
          case 0:
            $("#startDateEPI").val('');
            $("#endDateEPI").val('');
          case 2:
          case "end":
            return _context97.stop();
        }
      }, _callee85);
    }));
    return _clearDateInputsEpi.apply(this, arguments);
  }
});
