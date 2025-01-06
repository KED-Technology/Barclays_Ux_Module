function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
jQuery(function () {
  var url = "https://192.168.1.103"; //192.168.1.103
  var currentDate = new Date();
  var previousDate = new Date(currentDate);
  previousDate.setDate(previousDate.getDate() - 1);

  // Format the date to 'YYYY-MM-DD'
  var formattedDate = previousDate.toISOString().split('T')[0];

  // Use the formatted date
  console.log("formatted day: ".concat(formattedDate));

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
  var urlTotalCo = 'https://192.168.1.103/obix/config/Drivers/Barclays/Co2$20Emission$20in$20Ton/Total_Scope/';

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
    fetch(urlTotalCo).then(function (response) {
      return response.text();
    }).then(function (data) {
      // Create a new DOMParser to parse the XML response
      var parser = new DOMParser();
      var xmlDoc = parser.parseFromString(data, 'application/xml');

      // Find the real element for "out" and extract the display value
      var outRealElement = xmlDoc.querySelector('real[name="out"]');
      if (outRealElement) {
        // Extract the numeric value from the display attribute
        var displayValue = outRealElement.getAttribute('display');
        var _displayValue$split = displayValue.split(" "),
          _displayValue$split2 = _slicedToArray(_displayValue$split, 2),
          value = _displayValue$split2[0],
          unit = _displayValue$split2[1];

        // Check if data is available using checkDataAvailability
        var dataAvailable = !checkDataAvailability([parseFloat(value)], "co2-emission-value");

        // If data is available, update the DOM with the value, otherwise show a message
        if (dataAvailable) {
          document.getElementById("co2-emission-value").innerText = "".concat(value, " ").concat(unit);
        }
      } else {
        // If no "out" element was found, show the no data message
        checkDataAvailability([], "co2-emission-value");
      }
    })["catch"](function (error) {
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
    var urls = {
      domestic: "https://192.168.1.103/obix/config/Drivers/Barclays/Water$20Consumption/water_usage_for_$28DOMESTIC$29/",
      flushing: "https://192.168.1.103/obix/config/Drivers/Barclays/Water$20Consumption/Water_usage_for_$28FLUSHING$29/"
    };

    // Select the appropriate URL based on the 'type' parameter
    var url = urls[type];

    // Fetch the data from the selected URL
    fetch(url).then(function (response) {
      return response.text();
    }) // Parse the response as text
    .then(function (data) {
      // Create a DOM parser to parse the XML response
      var parser = new DOMParser();
      var xmlDoc = parser.parseFromString(data, "application/xml");

      // Extract the value and unit from the 'real' element with name="out"
      var realElement = xmlDoc.querySelector('real[name="out"]');
      if (realElement) {
        var displayValue = realElement.getAttribute("display"); // Example: "3884 {ok} @ 10"
        var unit = realElement.getAttribute("unit"); // Example: "obix:units/null"

        // Split the display value to get the numeric value
        var value = displayValue.split(" ")[0]; // Example: "3884"

        // Check if unit is 'null' or missing and set a default unit if needed
        var formattedUnit = unit && unit !== 'obix:units/null' ? unit.replace("obix:units/", "") : "liters"; // If 'null', use an empty string

        // Update the HTML element with the value and unit based on the type (domestic or flushing)
        document.getElementById("water-".concat(type, "-value")).innerText = "".concat(value, " ").concat(formattedUnit);
      }
    })["catch"](function (error) {
      console.error("Error fetching the data:", error);
    });
  }

  // Fetch the water consumption for both Domestic and Flushing every 10 seconds (10000 milliseconds)
  setInterval(function () {
    fetchWaterConsumption('domestic'); // Fetch for Domestic Water
    fetchWaterConsumption('flushing'); // Fetch for Flushing Water
  }, 10000);

  // Initial fetch when the page loads
  fetchWaterConsumption('domestic');
  fetchWaterConsumption('flushing');

  // Generic function to fetch and update power consumption values (Total Power Consumption)
  function fetchPowerConsumption() {
    // URL for Total Power Consumption (KWh)
    var url = "https://192.168.1.103/obix/config/Drivers/Barclays/Total$20Power$20Consumption$20in$20Kwh/TotalPowerConsumptionKwh/";

    // Fetch the data from the URL
    fetch(url).then(function (response) {
      return response.text();
    }) // Parse the response as text
    .then(function (data) {
      // Create a DOM parser to parse the XML response
      var parser = new DOMParser();
      var xmlDoc = parser.parseFromString(data, "application/xml");

      // Extract the value and unit from the 'real' element with name="out"
      var realElement = xmlDoc.querySelector('real[name="out"]');
      if (realElement) {
        var displayValue = realElement.getAttribute("display"); // Example: "5963.1 {ok} @ 10"
        var unit = realElement.getAttribute("unit"); // Example: "obix:units/null"

        // Split the display value to get the numeric value
        var value = displayValue.split(" ")[0]; // Example: "5963.1"

        // Check if unit is 'null' or missing and set "kWh" as the default unit if needed
        var formattedUnit = unit && unit !== 'obix:units/null' ? unit.replace("obix:units/", "") : "KWh"; // Use "kWh" if unit is null

        // Update the HTML element with the value and unit
        document.getElementById("power-value").innerText = "".concat(value, " ").concat(formattedUnit);
      }
    })["catch"](function (error) {
      console.error("Error fetching the data:", error);
    });
  }

  // Fetch the power consumption data every 10 seconds (10000 milliseconds)
  setInterval(fetchPowerConsumption, 10000);

  // Initial fetch when the page loads
  fetchPowerConsumption();

  //console.log("Previous day: " + previousDate);

  var intervalId; // Variable to store the interval ID

  //  intervalId=setInterval(pieChart, 5000);

  var emissionChart;
  function disposeChartCo(_x) {
    return _disposeChartCo.apply(this, arguments);
  }
  function _disposeChartCo() {
    _disposeChartCo = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee30(newChartFunction) {
      return _regeneratorRuntime().wrap(function _callee30$(_context30) {
        while (1) switch (_context30.prev = _context30.next) {
          case 0:
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
          case 2:
          case "end":
            return _context30.stop();
        }
      }, _callee30);
    }));
    return _disposeChartCo.apply(this, arguments);
  }
  function pieChart() {
    return _pieChart.apply(this, arguments);
  } // async function pieChart() {
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
  function _pieChart() {
    _pieChart = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee31() {
      var style, scopeValues, scopes, _i, _scopes, scope, responses, text, parser, xmlDoc, objs, i, obj, real, valueText, value, flattenedData, totalValue, percentages, options;
      return _regeneratorRuntime().wrap(function _callee31$(_context31) {
        while (1) switch (_context31.prev = _context31.next) {
          case 0:
            // Append a style block to customize the text appearance in the chart
            style = document.createElement('style');
            style.innerHTML = "\n            #chartdiv .apexcharts-text {\n                fill: #000000; /* Change this to your desired color */\n                font-weight: bold; /* Ensure bold text */\n            }\n        ";
            style.id = 'chartdiv-styles';
            document.head.appendChild(style);
            // // Initialize scopeValues as an empty array
            scopeValues = [];
            scopes = ['Scope1', 'Scope2', 'Scope3']; // Fetch data for each scope
            _i = 0, _scopes = scopes;
          case 7:
            if (!(_i < _scopes.length)) {
              _context31.next = 23;
              break;
            }
            scope = _scopes[_i];
            _context31.next = 11;
            return fetch("https://192.168.1.103/obix/histories/Barclays_Sup/Co2$20Emission$20in$20Ton_".concat(scope, "_Daily/~historyQuery?start=").concat(formattedDate, "T23:58:00.000+05:30&limit=1"));
          case 11:
            responses = _context31.sent;
            ///~historyQuery?start=${previousDate}T23:59:59.000+05:30&limit=1
            console.log("response for scope " + scope, responses);
            _context31.next = 15;
            return responses.text();
          case 15:
            text = _context31.sent;
            //console.log("text " + text);
            // Parse the XML data
            parser = new DOMParser();
            xmlDoc = parser.parseFromString(text, "text/xml"); // Get all <obj> elements
            objs = xmlDoc.getElementsByTagName("list"); //console.log("length " + objs.length);
            // Process each <obj> element
            for (i = 0; i < objs.length; i++) {
              obj = objs[i];
              real = obj.getElementsByTagName("real")[0]; // Get the <real> tag
              if (real) {
                valueText = real.getAttribute("val"); // Get the value as a string
                //console.log("value text (raw):", valueText);
                if (valueText) {
                  value = parseFloat(valueText); // Parse to a number
                  if (!isNaN(value)) {
                    // Ensure it's a valid number
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
          case 20:
            _i++;
            _context31.next = 7;
            break;
          case 23:
            flattenedData = scopeValues.flat();
            if (!checkDataAvailability(flattenedData, 'chartdiv')) {
              _context31.next = 26;
              break;
            }
            return _context31.abrupt("return");
          case 26:
            // scopeValues = scopeValues.map(value => Math.min(value, 100));
            console.log("Scope Values: ", scopeValues);
            // Calculate the total value
            totalValue = scopeValues.reduce(function (sum, value) {
              return sum + value;
            }, 0); // Sum the values for each scope
            // console.log("total value " + totalValue);
            percentages = scopeValues.map(function (value) {
              return value / totalValue * 100;
            }); //console.log("percentages " + percentages);
            // Radial bar chart options
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
              colors: ["#ff7d03", "#A4CE95", "#FFD93D"],
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
                custom: function custom(_ref29) {
                  var series = _ref29.series,
                    seriesIndex = _ref29.seriesIndex,
                    w = _ref29.w;
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
          case 32:
          case "end":
            return _context31.stop();
        }
      }, _callee31);
    }));
    return _pieChart.apply(this, arguments);
  }
  disposeChartCo(pieChart);
  function lineChartMonthlyCo25() {
    return _lineChartMonthlyCo.apply(this, arguments);
  } // async function dateRangeCo2() {
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
  function _lineChartMonthlyCo() {
    _lineChartMonthlyCo = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee33() {
      return _regeneratorRuntime().wrap(function _callee33$(_context34) {
        while (1) switch (_context34.prev = _context34.next) {
          case 0:
            am4core.ready(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee32() {
              var today, currentMonth, startDate, endDate, startISO, endISO, waters, waterValues, _i2, _waters, scope, urlToFetch, response, text, parser, xmlDoc, objs, _loop, i, flattenedData, categoryAxis, valueAxis, createSeries;
              return _regeneratorRuntime().wrap(function _callee32$(_context33) {
                while (1) switch (_context33.prev = _context33.next) {
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
                    waters = ['Scope1', 'Scope2', 'Scope3'];
                    waterValues = []; // Fetch data asynchronously for each scope
                    _i2 = 0, _waters = waters;
                  case 10:
                    if (!(_i2 < _waters.length)) {
                      _context33.next = 43;
                      break;
                    }
                    scope = _waters[_i2];
                    urlToFetch = "".concat(url, "/obix/histories/Barclays_Sup/Co2$20Emission$20in$20Ton_").concat(scope, "/~historyQuery?start=").concat(startISO, "T23:58:00.000+05:30&end=").concat(endISO, "T23:58:00.000+05:30");
                    console.log(urlToFetch);
                    _context33.prev = 14;
                    _context33.next = 17;
                    return fetch(urlToFetch);
                  case 17:
                    response = _context33.sent;
                    console.log(response);
                    if (response.ok) {
                      _context33.next = 22;
                      break;
                    }
                    console.error("Error fetching data for ".concat(scope, ": ").concat(response.status, " - ").concat(response.statusText));
                    return _context33.abrupt("continue", 40);
                  case 22:
                    _context33.next = 24;
                    return response.text();
                  case 24:
                    text = _context33.sent;
                    parser = new DOMParser();
                    xmlDoc = parser.parseFromString(text, "text/xml");
                    objs = xmlDoc.getElementsByTagName("obj");
                    _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
                      var obj, abstime, real, dateText, valueText, value, date, _formattedDate, dateStr, existingEntry;
                      return _regeneratorRuntime().wrap(function _loop$(_context32) {
                        while (1) switch (_context32.prev = _context32.next) {
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
                                _formattedDate = date.toLocaleDateString("en-US", {
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
                            return _context32.stop();
                        }
                      }, _loop);
                    });
                    i = 0;
                  case 30:
                    if (!(i < objs.length)) {
                      _context33.next = 35;
                      break;
                    }
                    return _context33.delegateYield(_loop(), "t0", 32);
                  case 32:
                    i++;
                    _context33.next = 30;
                    break;
                  case 35:
                    _context33.next = 40;
                    break;
                  case 37:
                    _context33.prev = 37;
                    _context33.t1 = _context33["catch"](14);
                    console.error("Error fetching data for ".concat(scope, ": ").concat(_context33.t1.message));
                  case 40:
                    _i2++;
                    _context33.next = 10;
                    break;
                  case 43:
                    flattenedData = waterValues.flat();
                    if (!checkDataAvailability(flattenedData, 'chartdiv')) {
                      _context33.next = 46;
                      break;
                    }
                    return _context33.abrupt("return");
                  case 46:
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
                  case 69:
                  case "end":
                    return _context33.stop();
                }
              }, _callee32, null, [[14, 37]]);
            })));
          case 1:
          case "end":
            return _context34.stop();
        }
      }, _callee33);
    }));
    return _lineChartMonthlyCo.apply(this, arguments);
  }
  function dateRangeCo2() {
    return _dateRangeCo.apply(this, arguments);
  }
  function _dateRangeCo() {
    _dateRangeCo = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee35() {
      return _regeneratorRuntime().wrap(function _callee35$(_context37) {
        while (1) switch (_context37.prev = _context37.next) {
          case 0:
            am4core.ready(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee34() {
              var startDateValue, endDateValue, isValid, waters, waterValues, _i3, _waters2, scope, urlToFetch, response, text, parser, xmlDoc, objs, _loop2, i, flattenedData, emissionChart, categoryAxis, valueAxis, createSeries;
              return _regeneratorRuntime().wrap(function _callee34$(_context36) {
                while (1) switch (_context36.prev = _context36.next) {
                  case 0:
                    createSeries = function _createSeries2(valueField, name, color) {
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
                    };
                    startDateValue = $("#startDate").val();
                    endDateValue = $("#endDate").val(); // Validate the date range
                    _context36.next = 5;
                    return validateDateRange(startDateValue, endDateValue);
                  case 5:
                    isValid = _context36.sent;
                    if (isValid) {
                      _context36.next = 8;
                      break;
                    }
                    return _context36.abrupt("return");
                  case 8:
                    waters = ['Scope1', 'Scope2', 'Scope3'];
                    waterValues = []; // Fetch data asynchronously for each scope
                    _i3 = 0, _waters2 = waters;
                  case 11:
                    if (!(_i3 < _waters2.length)) {
                      _context36.next = 43;
                      break;
                    }
                    scope = _waters2[_i3];
                    urlToFetch = "".concat(url, "/obix/histories/Barclays_Sup/Co2$20Emission$20in$20Ton_").concat(scope, "_Daily/~historyQuery?start=").concat(startDateValue, "T23:58:00.000+05:30&end=").concat(endDateValue, "T23:58:00.000+05:30");
                    console.log(urlToFetch);
                    _context36.prev = 15;
                    _context36.next = 18;
                    return fetch(urlToFetch);
                  case 18:
                    response = _context36.sent;
                    if (response.ok) {
                      _context36.next = 22;
                      break;
                    }
                    console.error("Error fetching data for ".concat(scope, ": ").concat(response.status, " - ").concat(response.statusText));
                    return _context36.abrupt("continue", 40);
                  case 22:
                    _context36.next = 24;
                    return response.text();
                  case 24:
                    text = _context36.sent;
                    parser = new DOMParser();
                    xmlDoc = parser.parseFromString(text, "text/xml");
                    objs = xmlDoc.getElementsByTagName("obj");
                    _loop2 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop2() {
                      var obj, abstime, real, dateText, valueText, value, date, _formattedDate2, dateStr, existingEntry;
                      return _regeneratorRuntime().wrap(function _loop2$(_context35) {
                        while (1) switch (_context35.prev = _context35.next) {
                          case 0:
                            obj = objs[i];
                            abstime = obj.getElementsByTagName("abstime")[0];
                            real = obj.getElementsByTagName("real")[0];
                            if (abstime && real) {
                              dateText = abstime.getAttribute("val");
                              valueText = real.getAttribute("val");
                              if (valueText && dateText) {
                                value = parseFloat(valueText).toFixed(4);
                                date = new Date(dateText);
                                _formattedDate2 = date.toLocaleDateString("en-US", {
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
                            return _context35.stop();
                        }
                      }, _loop2);
                    });
                    i = 0;
                  case 30:
                    if (!(i < objs.length)) {
                      _context36.next = 35;
                      break;
                    }
                    return _context36.delegateYield(_loop2(), "t0", 32);
                  case 32:
                    i++;
                    _context36.next = 30;
                    break;
                  case 35:
                    _context36.next = 40;
                    break;
                  case 37:
                    _context36.prev = 37;
                    _context36.t1 = _context36["catch"](15);
                    console.error("Error fetching data for ".concat(scope, ": ").concat(_context36.t1.message));
                  case 40:
                    _i3++;
                    _context36.next = 11;
                    break;
                  case 43:
                    console.log("monthly co2 " + JSON.stringify(waterValues, null, 2));
                    flattenedData = waterValues.flat();
                    if (!checkDataAvailability(flattenedData, 'chartdiv')) {
                      _context36.next = 47;
                      break;
                    }
                    return _context36.abrupt("return");
                  case 47:
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
                    categoryAxis.dataFields.category = "date";
                    categoryAxis.renderer.minGridDistance = 80;
                    categoryAxis.renderer.labels.template.horizontalCenter = "middle";
                    categoryAxis.renderer.labels.template.verticalCenter = "middle";
                    valueAxis = emissionChart.yAxes.push(new am4charts.ValueAxis());
                    valueAxis.baseValue = 0;

                    // Function to create series

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
                  case 70:
                  case "end":
                    return _context36.stop();
                }
              }, _callee34, null, [[15, 37]]);
            })));
          case 1:
          case "end":
            return _context37.stop();
        }
      }, _callee35);
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
    _createBarChart = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee36() {
      var scopeData, last12MonthsData, _iterator, _step, month, scopeUrls, i, response, text, parser, xml, records, _iterator2, _step2, _record$getElementsBy, _record$getElementsBy2, record, abstime, realValue, abstimeDate, formattedAbstime, flattenedData, existingStyle, chartOptions;
      return _regeneratorRuntime().wrap(function _callee36$(_context38) {
        while (1) switch (_context38.prev = _context38.next) {
          case 0:
            scopeData = [[], [], []]; // Scope 1, Scope 2, Scope 3
            last12MonthsData = getLast12Months1();
            console.log("bar " + last12MonthsData);
            _iterator = _createForOfIteratorHelper(last12MonthsData);
            _context38.prev = 4;
            _iterator.s();
          case 6:
            if ((_step = _iterator.n()).done) {
              _context38.next = 36;
              break;
            }
            month = _step.value;
            scopeUrls = ["".concat(url, "/obix/histories/SqlServerDatabase/YearlyScope1/~historyQuery?start=").concat(month.startDate, "T23:59:59.000+05:30&limit=1"), "".concat(url, "/obix/histories/SqlServerDatabase/YearlyScope2/~historyQuery?start=").concat(month.startDate, "T23:59:59.000+05:30&limit=1"), "".concat(url, "/obix/histories/SqlServerDatabase/YearlyScope3/~historyQuery?start=").concat(month.startDate, "T23:59:59.000+05:30&limit=1")];
            i = 0;
          case 10:
            if (!(i < scopeUrls.length)) {
              _context38.next = 34;
              break;
            }
            _context38.prev = 11;
            _context38.next = 14;
            return fetch(scopeUrls[i]);
          case 14:
            response = _context38.sent;
            if (response.ok) {
              _context38.next = 17;
              break;
            }
            throw new Error("HTTP error! Status: ".concat(response.status));
          case 17:
            _context38.next = 19;
            return response.text();
          case 19:
            text = _context38.sent;
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
            _context38.next = 31;
            break;
          case 27:
            _context38.prev = 27;
            _context38.t0 = _context38["catch"](11);
            console.error("Error fetching data for scope ".concat(i + 1, ":"), _context38.t0);
            scopeData[i].push(null); // Push null to maintain alignment
          case 31:
            i++;
            _context38.next = 10;
            break;
          case 34:
            _context38.next = 6;
            break;
          case 36:
            _context38.next = 41;
            break;
          case 38:
            _context38.prev = 38;
            _context38.t1 = _context38["catch"](4);
            _iterator.e(_context38.t1);
          case 41:
            _context38.prev = 41;
            _iterator.f();
            return _context38.finish(41);
          case 44:
            flattenedData = scopeData.flat();
            if (!checkDataAvailability(flattenedData, 'chartdiv')) {
              _context38.next = 47;
              break;
            }
            return _context38.abrupt("return");
          case 47:
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
                colors: ["#ff7d03", "#A4CE95", "#FFD93D"],
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
          case 48:
          case "end":
            return _context38.stop();
        }
      }, _callee36, null, [[4, 38, 41, 44], [11, 27]]);
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
    _disposeChartWater = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee37(newChartFunction) {
      return _regeneratorRuntime().wrap(function _callee37$(_context39) {
        while (1) switch (_context39.prev = _context39.next) {
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
            return _context39.stop();
        }
      }, _callee37);
    }));
    return _disposeChartWater.apply(this, arguments);
  }
  function pieChart1() {
    return _pieChart2.apply(this, arguments);
  }
  function _pieChart2() {
    _pieChart2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee38() {
      var scopeValues, scopes, _i4, _scopes2, scope, response, text, parser, xmlDoc, real, valueText, flattenedData;
      return _regeneratorRuntime().wrap(function _callee38$(_context40) {
        while (1) switch (_context40.prev = _context40.next) {
          case 0:
            scopeValues = [];
            scopes = ['Domestic', 'Flushing']; // Fetch data for each scope
            _i4 = 0, _scopes2 = scopes;
          case 3:
            if (!(_i4 < _scopes2.length)) {
              _context40.next = 28;
              break;
            }
            scope = _scopes2[_i4];
            _context40.prev = 5;
            _context40.next = 8;
            return fetch("".concat(url, "/obix/histories/Barclays_Sup/Water$20Consumption_").concat(scope, "_Daily/~historyQuery?start=").concat(formattedDate, "T23:58:00.000+05:30&limit=1"));
          case 8:
            response = _context40.sent;
            console.log("response for water " + scope, response);
            if (response.ok) {
              _context40.next = 13;
              break;
            }
            console.error("Failed to fetch data for ".concat(scope, ": ").concat(response.statusText));
            return _context40.abrupt("continue", 25);
          case 13:
            _context40.next = 15;
            return response.text();
          case 15:
            text = _context40.sent;
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
            _context40.next = 25;
            break;
          case 22:
            _context40.prev = 22;
            _context40.t0 = _context40["catch"](5);
            console.error("Error fetching data for ".concat(scope, ":"), _context40.t0);
          case 25:
            _i4++;
            _context40.next = 3;
            break;
          case 28:
            flattenedData = scopeValues.flat();
            if (!checkDataAvailability(flattenedData, 'chartdiv1')) {
              _context40.next = 31;
              break;
            }
            return _context40.abrupt("return");
          case 31:
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
          case 32:
          case "end":
            return _context40.stop();
        }
      }, _callee38, null, [[5, 22]]);
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
    _lineChartMonthlyWater = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee40() {
      return _regeneratorRuntime().wrap(function _callee40$(_context43) {
        while (1) switch (_context43.prev = _context43.next) {
          case 0:
            am4core.ready(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee39() {
              var today, currentMonth, startDate, endDate, startISO, endISO, waters, waterValues, _i5, _waters3, scope, urlToFetch, response, text, parser, xmlDoc, objs, _loop3, i, flattenedData, categoryAxis, valueAxis, createSeries;
              return _regeneratorRuntime().wrap(function _callee39$(_context42) {
                while (1) switch (_context42.prev = _context42.next) {
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
                    waters = ['Domestic', 'Flushing'];
                    waterValues = []; // Fetch data asynchronously for each scope
                    _i5 = 0, _waters3 = waters;
                  case 10:
                    if (!(_i5 < _waters3.length)) {
                      _context42.next = 43;
                      break;
                    }
                    scope = _waters3[_i5];
                    urlToFetch = "".concat(url, "/obix/histories/Barclays_Sup/Water$20Consumption_").concat(scope, "_Daily/~historyQuery?start=").concat(startISO, "T23:59:59.000+05:30&end=").concat(endISO, "T23:59:59.000+05:30");
                    console.log(urlToFetch);
                    _context42.prev = 14;
                    _context42.next = 17;
                    return fetch(urlToFetch);
                  case 17:
                    response = _context42.sent;
                    console.log(response);
                    if (response.ok) {
                      _context42.next = 22;
                      break;
                    }
                    console.error("Error fetching data for ".concat(scope, ": ").concat(response.status, " - ").concat(response.statusText));
                    return _context42.abrupt("continue", 40);
                  case 22:
                    _context42.next = 24;
                    return response.text();
                  case 24:
                    text = _context42.sent;
                    parser = new DOMParser();
                    xmlDoc = parser.parseFromString(text, "text/xml");
                    objs = xmlDoc.getElementsByTagName("obj");
                    _loop3 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop3() {
                      var obj, abstime, real, dateText, valueText, value, date, _formattedDate3, dateStr, existingEntry;
                      return _regeneratorRuntime().wrap(function _loop3$(_context41) {
                        while (1) switch (_context41.prev = _context41.next) {
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
                                _formattedDate3 = date.toLocaleDateString("en-US", {
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
                                  }, scope, parseFloat(value).toFixed(2)));
                                }
                              }
                            }
                          case 4:
                          case "end":
                            return _context41.stop();
                        }
                      }, _loop3);
                    });
                    i = 0;
                  case 30:
                    if (!(i < objs.length)) {
                      _context42.next = 35;
                      break;
                    }
                    return _context42.delegateYield(_loop3(), "t0", 32);
                  case 32:
                    i++;
                    _context42.next = 30;
                    break;
                  case 35:
                    _context42.next = 40;
                    break;
                  case 37:
                    _context42.prev = 37;
                    _context42.t1 = _context42["catch"](14);
                    console.error("Error fetching data for ".concat(scope, ": ").concat(_context42.t1.message));
                  case 40:
                    _i5++;
                    _context42.next = 10;
                    break;
                  case 43:
                    flattenedData = waterValues.flat();
                    if (!checkDataAvailability(flattenedData, 'chartdiv')) {
                      _context42.next = 46;
                      break;
                    }
                    return _context42.abrupt("return");
                  case 46:
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
                  case 68:
                  case "end":
                    return _context42.stop();
                }
              }, _callee39, null, [[14, 37]]);
            })));
          case 1:
          case "end":
            return _context43.stop();
        }
      }, _callee40);
    }));
    return _lineChartMonthlyWater.apply(this, arguments);
  }
  function daterangeWater() {
    return _daterangeWater.apply(this, arguments);
  } //     async function daterangeWater() {
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
  function _daterangeWater() {
    _daterangeWater = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee42() {
      return _regeneratorRuntime().wrap(function _callee42$(_context46) {
        while (1) switch (_context46.prev = _context46.next) {
          case 0:
            am4core.ready(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee41() {
              var startDateValue, endDateValue, isValid, waters, waterValues, _i6, _waters4, scope, urlToFetch, response, text, parser, xmlDoc, objs, _loop4, i, flattenedData, emissionChart, categoryAxis, valueAxis, createSeries;
              return _regeneratorRuntime().wrap(function _callee41$(_context45) {
                while (1) switch (_context45.prev = _context45.next) {
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
                    console.log("Start Date Value: ", startDateValue);
                    console.log("End Date Value: ", endDateValue);
                    _context45.next = 7;
                    return validateDateRange(startDateValue, endDateValue);
                  case 7:
                    isValid = _context45.sent;
                    if (isValid) {
                      _context45.next = 10;
                      break;
                    }
                    return _context45.abrupt("return");
                  case 10:
                    waters = ['Domestic', 'Flushing'];
                    waterValues = []; // const url = "https://localhost";
                    // Fetch data asynchronously for each scope
                    _i6 = 0, _waters4 = waters;
                  case 13:
                    if (!(_i6 < _waters4.length)) {
                      _context45.next = 46;
                      break;
                    }
                    scope = _waters4[_i6];
                    urlToFetch = "".concat(url, "/obix/histories/Barclays_Sup/Water$20Consumption_").concat(scope, "_Daily/~historyQuery?start=").concat(startDateValue, "T23:58:00.000+05:30&end=").concat(endDateValue, "T23:58:00.000+05:30");
                    console.log(urlToFetch);
                    _context45.prev = 17;
                    _context45.next = 20;
                    return fetch(urlToFetch);
                  case 20:
                    response = _context45.sent;
                    console.log(response);
                    if (response.ok) {
                      _context45.next = 25;
                      break;
                    }
                    console.error("Error fetching data for ".concat(scope, ": ").concat(response.status, " - ").concat(response.statusText));
                    return _context45.abrupt("continue", 43);
                  case 25:
                    _context45.next = 27;
                    return response.text();
                  case 27:
                    text = _context45.sent;
                    // Parse the XML data
                    parser = new DOMParser();
                    xmlDoc = parser.parseFromString(text, "text/xml");
                    objs = xmlDoc.getElementsByTagName("obj");
                    _loop4 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop4() {
                      var obj, abstime, real, dateText, valueText, value, date, _formattedDate4, dateStr, existingEntry;
                      return _regeneratorRuntime().wrap(function _loop4$(_context44) {
                        while (1) switch (_context44.prev = _context44.next) {
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
                                _formattedDate4 = date.toLocaleDateString("en-US", {
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
                            return _context44.stop();
                        }
                      }, _loop4);
                    });
                    i = 0;
                  case 33:
                    if (!(i < objs.length)) {
                      _context45.next = 38;
                      break;
                    }
                    return _context45.delegateYield(_loop4(), "t0", 35);
                  case 35:
                    i++;
                    _context45.next = 33;
                    break;
                  case 38:
                    _context45.next = 43;
                    break;
                  case 40:
                    _context45.prev = 40;
                    _context45.t1 = _context45["catch"](17);
                    console.error("Error fetching data for ".concat(scope, ": ").concat(_context45.t1.message));
                  case 43:
                    _i6++;
                    _context45.next = 13;
                    break;
                  case 46:
                    flattenedData = waterValues.flat();
                    if (!checkDataAvailability(flattenedData, 'chartdiv')) {
                      _context45.next = 49;
                      break;
                    }
                    return _context45.abrupt("return");
                  case 49:
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
                  case 71:
                  case "end":
                    return _context45.stop();
                }
              }, _callee41, null, [[17, 40]]);
            })));
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
          case 1:
          case "end":
            return _context46.stop();
        }
      }, _callee42);
    }));
    return _daterangeWater.apply(this, arguments);
  }
  function showClusteredBarChart1() {
    return _showClusteredBarChart.apply(this, arguments);
  }
  function _showClusteredBarChart() {
    _showClusteredBarChart = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee43() {
      var domesticWater, flushingWater, last12Months, previousMonths, _iterator3, _step3, month, scopeUrls, i, response, text, parser, xml, records, _iterator4, _step4, _record$getElementsBy3, _record$getElementsBy4, record, abstime, realValue, abstimeDate, formattedAbstime, waterValues, flattenedData;
      return _regeneratorRuntime().wrap(function _callee43$(_context47) {
        while (1) switch (_context47.prev = _context47.next) {
          case 0:
            domesticWater = [];
            flushingWater = [];
            last12Months = getLast12Months1();
            console.log(last12Months);
            previousMonths = getLast12Months();
            console.log(previousMonths);
            _iterator3 = _createForOfIteratorHelper(last12Months);
            _context47.prev = 7;
            _iterator3.s();
          case 9:
            if ((_step3 = _iterator3.n()).done) {
              _context47.next = 39;
              break;
            }
            month = _step3.value;
            scopeUrls = ["".concat(url, "/obix/histories/SqlServerDatabase/domesticYearly/~historyQuery?start=").concat(month.startDate, "T23:59:59.000+05:30&limit=1"), "".concat(url, "/obix/histories/SqlServerDatabase/flushingYearly/~historyQuery?start=").concat(month.startDate, "T23:59:59.000+05:30&limit=1")];
            i = 0;
          case 13:
            if (!(i < scopeUrls.length)) {
              _context47.next = 37;
              break;
            }
            _context47.prev = 14;
            _context47.next = 17;
            return fetch(scopeUrls[i]);
          case 17:
            response = _context47.sent;
            if (response.ok) {
              _context47.next = 20;
              break;
            }
            throw new Error("HTTP error! Status: ".concat(response.status));
          case 20:
            _context47.next = 22;
            return response.text();
          case 22:
            text = _context47.sent;
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
            _context47.next = 34;
            break;
          case 30:
            _context47.prev = 30;
            _context47.t0 = _context47["catch"](14);
            console.error("Error fetching data for scope ".concat(i + 1, ":"), _context47.t0);
            if (i === 0) {
              domesticWater.push(null); // Push null to maintain alignment
            } else if (i === 1) {
              flushingWater.push(null); // Push null to maintain alignment
            }
          case 34:
            i++;
            _context47.next = 13;
            break;
          case 37:
            _context47.next = 9;
            break;
          case 39:
            _context47.next = 44;
            break;
          case 41:
            _context47.prev = 41;
            _context47.t1 = _context47["catch"](7);
            _iterator3.e(_context47.t1);
          case 44:
            _context47.prev = 44;
            _iterator3.f();
            return _context47.finish(44);
          case 47:
            waterValues = [domesticWater, flushingWater];
            flattenedData = waterValues.flat();
            if (!checkDataAvailability(flattenedData, 'chartdiv1')) {
              _context47.next = 51;
              break;
            }
            return _context47.abrupt("return");
          case 51:
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
          case 52:
          case "end":
            return _context47.stop();
        }
      }, _callee43, null, [[7, 41, 44, 47], [14, 30]]);
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
  } // async function lineChart4() {
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
  function _disposeChartPower() {
    _disposeChartPower = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee44(newChartFunction) {
      return _regeneratorRuntime().wrap(function _callee44$(_context48) {
        while (1) switch (_context48.prev = _context48.next) {
          case 0:
            // Destroy the existing chart if it exists
            if (powerChart) {
              if (powerChart instanceof ApexCharts) {
                powerChart.destroy(); // Dispose the existing chart
              } else {
                powerChart.dispose(); // Dispose the existing am4charts instance
              }
            }
            _context48.next = 3;
            return newChartFunction();
          case 3:
          case "end":
            return _context48.stop();
        }
      }, _callee44);
    }));
    return _disposeChartPower.apply(this, arguments);
  }
  function lineChart4() {
    return _lineChart.apply(this, arguments);
  }
  function _lineChart() {
    _lineChart = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee45() {
      var response, text, parser, xmlDoc, objElements, times, values, i, obj, timestampElement, valueElement, timestamp, value, _timestamp$split$, time, powerValues, flattenedData;
      return _regeneratorRuntime().wrap(function _callee45$(_context49) {
        while (1) switch (_context49.prev = _context49.next) {
          case 0:
            _context49.next = 2;
            return fetch("".concat(url, "/obix/histories/Barclays_Sup/TotalPowerConsumption_User/~historyQuery?start=").concat(formattedDate, "T00:00:00.000+05:30&end=").concat(formattedDate, "T23:59:59.000+05:30"));
          case 2:
            response = _context49.sent;
            console.log(response);
            _context49.next = 6;
            return response.text();
          case 6:
            text = _context49.sent;
            // Parse the XML data
            parser = new DOMParser();
            xmlDoc = parser.parseFromString(text, "text/xml"); // // Get all <obj> elements that contain timestamp and value
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
            powerValues = [times, values];
            flattenedData = powerValues.flat();
            if (!checkDataAvailability(flattenedData, 'chartdiv2')) {
              _context49.next = 17;
              break;
            }
            return _context49.abrupt("return");
          case 17:
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
            });
          case 18:
          case "end":
            return _context49.stop();
        }
      }, _callee45);
    }));
    return _lineChart.apply(this, arguments);
  }
  disposeChartPower(lineChart4);
  function barChart() {
    return _barChart.apply(this, arguments);
  }
  function _barChart() {
    _barChart = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee47() {
      return _regeneratorRuntime().wrap(function _callee47$(_context52) {
        while (1) switch (_context52.prev = _context52.next) {
          case 0:
            am4core.ready(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee46() {
              var startDateValue, endDateValue, isValid, waterValues, urlToFetch, response, text, parser, xmlDoc, objs, _loop5, i, flattenedData, categoryAxis, valueAxis, createSeries;
              return _regeneratorRuntime().wrap(function _callee46$(_context51) {
                while (1) switch (_context51.prev = _context51.next) {
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
                    _context51.next = 5;
                    return validateDateRange(startDateValue, endDateValue);
                  case 5:
                    isValid = _context51.sent;
                    if (isValid) {
                      _context51.next = 8;
                      break;
                    }
                    return _context51.abrupt("return");
                  case 8:
                    waterValues = []; // const url = "https://localhost";
                    // Fetch data asynchronously for each scope
                    urlToFetch = "".concat(url, "/obix/histories/Barclays_Sup/Total$20Power$20Consumption$20in$20Kwh_Daily/~historyQuery?start=").concat(startDateValue, "T23:59:59.000+05:30&end=").concat(endDateValue, "T23:59:59.000+05:30");
                    console.log(urlToFetch);
                    _context51.prev = 11;
                    _context51.next = 14;
                    return fetch(urlToFetch);
                  case 14:
                    response = _context51.sent;
                    console.log(response);
                    _context51.next = 18;
                    return response.text();
                  case 18:
                    text = _context51.sent;
                    // Parse the XML data
                    parser = new DOMParser();
                    xmlDoc = parser.parseFromString(text, "text/xml");
                    objs = xmlDoc.getElementsByTagName("obj");
                    _loop5 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop5() {
                      var obj, abstime, real, dateText, valueText, value, date, _formattedDate5, dateStr, existingEntry;
                      return _regeneratorRuntime().wrap(function _loop5$(_context50) {
                        while (1) switch (_context50.prev = _context50.next) {
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
                                _formattedDate5 = date.toLocaleDateString("en-US", {
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
                            return _context50.stop();
                        }
                      }, _loop5);
                    });
                    i = 0;
                  case 24:
                    if (!(i < objs.length)) {
                      _context51.next = 29;
                      break;
                    }
                    return _context51.delegateYield(_loop5(), "t0", 26);
                  case 26:
                    i++;
                    _context51.next = 24;
                    break;
                  case 29:
                    _context51.next = 34;
                    break;
                  case 31:
                    _context51.prev = 31;
                    _context51.t1 = _context51["catch"](11);
                    console.error("Error fetching data for ");
                  case 34:
                    flattenedData = waterValues.flat();
                    if (!checkDataAvailability(flattenedData, 'chartdiv2')) {
                      _context51.next = 37;
                      break;
                    }
                    return _context51.abrupt("return");
                  case 37:
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
                  case 59:
                  case "end":
                    return _context51.stop();
                }
              }, _callee46, null, [[11, 31]]);
            })));
          case 1:
          case "end":
            return _context52.stop();
        }
      }, _callee47);
    }));
    return _barChart.apply(this, arguments);
  }
  function lineChartMonthlyPower() {
    return _lineChartMonthlyPower.apply(this, arguments);
  }
  function _lineChartMonthlyPower() {
    _lineChartMonthlyPower = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee49() {
      return _regeneratorRuntime().wrap(function _callee49$(_context55) {
        while (1) switch (_context55.prev = _context55.next) {
          case 0:
            am4core.ready(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee48() {
              var today, currentMonth, startDate, endDate, startISO, endISO, waterValues, urlToFetch, response, text, parser, xmlDoc, objs, _loop6, i, flattenedData, categoryAxis, valueAxis, createSeries;
              return _regeneratorRuntime().wrap(function _callee48$(_context54) {
                while (1) switch (_context54.prev = _context54.next) {
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
                    urlToFetch = "".concat(url, "/obix/histories/Barclays_Sup/Total$20Power$20Consumption$20in$20Kwh_Yearly/~historyQuery?start=").concat(startISO, "T23:59:59.000+05:30&end=").concat(endISO, "T23:59:59.000+05:30");
                    console.log(urlToFetch);
                    _context54.prev = 10;
                    _context54.next = 13;
                    return fetch(urlToFetch);
                  case 13:
                    response = _context54.sent;
                    console.log(response);
                    _context54.next = 17;
                    return response.text();
                  case 17:
                    text = _context54.sent;
                    // Parse the XML data
                    parser = new DOMParser();
                    xmlDoc = parser.parseFromString(text, "text/xml");
                    objs = xmlDoc.getElementsByTagName("obj");
                    _loop6 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop6() {
                      var obj, abstime, real, dateText, valueText, value, date, _formattedDate6, dateStr, existingEntry;
                      return _regeneratorRuntime().wrap(function _loop6$(_context53) {
                        while (1) switch (_context53.prev = _context53.next) {
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
                                _formattedDate6 = date.toLocaleDateString("en-US", {
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
                            return _context53.stop();
                        }
                      }, _loop6);
                    });
                    i = 0;
                  case 23:
                    if (!(i < objs.length)) {
                      _context54.next = 28;
                      break;
                    }
                    return _context54.delegateYield(_loop6(), "t0", 25);
                  case 25:
                    i++;
                    _context54.next = 23;
                    break;
                  case 28:
                    _context54.next = 33;
                    break;
                  case 30:
                    _context54.prev = 30;
                    _context54.t1 = _context54["catch"](10);
                    console.error("Error fetching data for ");
                  case 33:
                    flattenedData = waterValues.flat();
                    if (!checkDataAvailability(flattenedData, 'chartdiv')) {
                      _context54.next = 36;
                      break;
                    }
                    return _context54.abrupt("return");
                  case 36:
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
                  case 58:
                  case "end":
                    return _context54.stop();
                }
              }, _callee48, null, [[10, 30]]);
            })));
          case 1:
          case "end":
            return _context55.stop();
        }
      }, _callee49);
    }));
    return _lineChartMonthlyPower.apply(this, arguments);
  }
  function lineChart3() {
    return _lineChart2.apply(this, arguments);
  }
  function _lineChart2() {
    _lineChart2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee51() {
      return _regeneratorRuntime().wrap(function _callee51$(_context57) {
        while (1) switch (_context57.prev = _context57.next) {
          case 0:
            am4core.ready(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee50() {
              var powerChart, last12Months, urls, chartData, _iterator5, _step5, _step5$value, index, scopeUrl, response, text, parser, xml, records, i, _records$i$getElement, _records$i$getElement2, timestamp, value, date, month, months, year, formattedMonth, flattenedData, categoryAxis, valueAxis, lineSeries, bullet, cursor;
              return _regeneratorRuntime().wrap(function _callee50$(_context56) {
                while (1) switch (_context56.prev = _context56.next) {
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
                      return "".concat(url, "/obix/histories/Barclays_Sup/Total$20Power$20Consumption$20in$20Kwh_Yearly/~historyQuery?start=").concat(month.startDate, "T23:59:59.000+05:30&limit=1");
                    });
                    console.log("URLs to fetch data from:", urls); // Log the generated URLs

                    // Create an array to hold the chart data
                    chartData = []; // Loop through the URLs asynchronously using a for loop
                    _iterator5 = _createForOfIteratorHelper(urls.entries());
                    _context56.prev = 9;
                    _iterator5.s();
                  case 11:
                    if ((_step5 = _iterator5.n()).done) {
                      _context56.next = 47;
                      break;
                    }
                    _step5$value = _slicedToArray(_step5.value, 2), index = _step5$value[0], scopeUrl = _step5$value[1];
                    _context56.next = 15;
                    return fetch(scopeUrl);
                  case 15:
                    response = _context56.sent;
                    _context56.next = 18;
                    return response.text();
                  case 18:
                    text = _context56.sent;
                    // Get the response as text
                    parser = new DOMParser();
                    xml = parser.parseFromString(text, "application/xml"); // Debugging: Log the entire XML structure to check if it's as expected
                    console.log("Parsed XML Document:", xml);

                    // Extract all 'obj' elements from the XML
                    records = xml.getElementsByTagName("obj");
                    console.log("XML Records:", records); // Log the records to check if they're found

                    // Process each record and adjust the month
                    i = 0;
                  case 25:
                    if (!(i < records.length)) {
                      _context56.next = 44;
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
                      _context56.next = 40;
                      break;
                    }
                    return _context56.abrupt("continue", 41);
                  case 40:
                    // Log the corresponding month name from getLast12Months()
                    //console.log("Month name from monthNames:", monthNames[month]);

                    // Push data to chartData
                    chartData.push({
                      month: formattedMonth,
                      // Use the correct month name from monthNames array
                      value: parseFloat(value).toFixed(2) // Convert value to a float for proper numeric handling
                    });
                  case 41:
                    i++;
                    _context56.next = 25;
                    break;
                  case 44:
                    // Debugging: Log chart data after processing
                    console.log("Chart Data:", chartData);
                  case 45:
                    _context56.next = 11;
                    break;
                  case 47:
                    _context56.next = 52;
                    break;
                  case 49:
                    _context56.prev = 49;
                    _context56.t0 = _context56["catch"](9);
                    _iterator5.e(_context56.t0);
                  case 52:
                    _context56.prev = 52;
                    _iterator5.f();
                    return _context56.finish(52);
                  case 55:
                    flattenedData = chartData.flat();
                    if (!checkDataAvailability(flattenedData, 'chartdiv2')) {
                      _context56.next = 58;
                      break;
                    }
                    return _context56.abrupt("return");
                  case 58:
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
                  case 91:
                  case "end":
                    return _context56.stop();
                }
              }, _callee50, null, [[9, 49, 52, 55]]);
            })));
          case 1:
          case "end":
            return _context57.stop();
        }
      }, _callee51);
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
    _removeChart = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee52(newChartFunction) {
      return _regeneratorRuntime().wrap(function _callee52$(_context58) {
        while (1) switch (_context58.prev = _context58.next) {
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
            _context58.next = 3;
            return newChartFunction();
          case 3:
          case "end":
            return _context58.stop();
        }
      }, _callee52);
    }));
    return _removeChart.apply(this, arguments);
  }
  function donutChart() {
    return _donutChart.apply(this, arguments);
  }
  function _donutChart() {
    _donutChart = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee53() {
      var outValue, options;
      return _regeneratorRuntime().wrap(function _callee53$(_context59) {
        while (1) switch (_context59.prev = _context59.next) {
          case 0:
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
            outValue = 80;
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
          case 4:
          case "end":
            return _context59.stop();
        }
      }, _callee53);
    }));
    return _donutChart.apply(this, arguments);
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
  function occupacyLine() {
    return _occupacyLine.apply(this, arguments);
  }
  function _occupacyLine() {
    _occupacyLine = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee55() {
      return _regeneratorRuntime().wrap(function _callee55$(_context62) {
        while (1) switch (_context62.prev = _context62.next) {
          case 0:
            am4core.ready(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee54() {
              var startDateValue, endDateValue, isValid, waterValues, urlToFetch, response, text, parser, xmlDoc, objs, _loop7, i, flattenedData, categoryAxis, valueAxis, createSeries;
              return _regeneratorRuntime().wrap(function _callee54$(_context61) {
                while (1) switch (_context61.prev = _context61.next) {
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
                    _context61.next = 5;
                    return validateDateRange(startDateValue, endDateValue);
                  case 5:
                    isValid = _context61.sent;
                    if (isValid) {
                      _context61.next = 8;
                      break;
                    }
                    return _context61.abrupt("return");
                  case 8:
                    waterValues = []; // const url = "https://localhost";
                    // Fetch data asynchronously for each scope
                    urlToFetch = "".concat(url, "/obix/histories/SqlServerDatabase/domestic/~historyQuery?start=").concat(startDateValue, "T23:59:59.000+05:30&end=").concat(endDateValue, "T23:59:59.000+05:30");
                    console.log(urlToFetch);
                    _context61.prev = 11;
                    _context61.next = 14;
                    return fetch(urlToFetch);
                  case 14:
                    response = _context61.sent;
                    console.log(response);
                    _context61.next = 18;
                    return response.text();
                  case 18:
                    text = _context61.sent;
                    // Parse the XML data
                    parser = new DOMParser();
                    xmlDoc = parser.parseFromString(text, "text/xml");
                    objs = xmlDoc.getElementsByTagName("obj");
                    _loop7 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop7() {
                      var obj, abstime, real, dateText, valueText, value, date, _formattedDate7, dateStr, existingEntry;
                      return _regeneratorRuntime().wrap(function _loop7$(_context60) {
                        while (1) switch (_context60.prev = _context60.next) {
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
                                _formattedDate7 = date.toLocaleDateString("en-US", {
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
                            return _context60.stop();
                        }
                      }, _loop7);
                    });
                    i = 0;
                  case 24:
                    if (!(i < objs.length)) {
                      _context61.next = 29;
                      break;
                    }
                    return _context61.delegateYield(_loop7(), "t0", 26);
                  case 26:
                    i++;
                    _context61.next = 24;
                    break;
                  case 29:
                    _context61.next = 34;
                    break;
                  case 31:
                    _context61.prev = 31;
                    _context61.t1 = _context61["catch"](11);
                    console.error("Error fetching data for ");
                  case 34:
                    flattenedData = waterValues.flat();
                    if (!checkDataAvailability(flattenedData, 'chartdiv')) {
                      _context61.next = 37;
                      break;
                    }
                    return _context61.abrupt("return");
                  case 37:
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
                  case 59:
                  case "end":
                    return _context61.stop();
                }
              }, _callee54, null, [[11, 31]]);
            })));
          case 1:
          case "end":
            return _context62.stop();
        }
      }, _callee55);
    }));
    return _occupacyLine.apply(this, arguments);
  }
  function occupacyBar() {
    return _occupacyBar.apply(this, arguments);
  }
  function _occupacyBar() {
    _occupacyBar = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee56() {
      var months, last12Months, chartData, _iterator6, _step6, month, _url, _list$getElementsByTa, _list$getElementsByTa2, response, text, parser, xml, list, abstime, realValue, abstimeDate, formattedAbstime, flattenedData, options, _occupancyChart;
      return _regeneratorRuntime().wrap(function _callee56$(_context63) {
        while (1) switch (_context63.prev = _context63.next) {
          case 0:
            _context63.prev = 0;
            // Get the last 12 months
            months = getLast12Months(); // Array of month names for the x-axis (e.g., ["Jan 2023", "Feb 2023", ...])
            last12Months = getLast12Months1(); // Array of objects with `startDate` for the URLs
            console.log("Last 12 Months (from getLast12Months1):", last12Months);
            chartData = []; // Loop through each month to fetch data
            _iterator6 = _createForOfIteratorHelper(last12Months);
            _context63.prev = 6;
            _iterator6.s();
          case 8:
            if ((_step6 = _iterator6.n()).done) {
              _context63.next = 36;
              break;
            }
            month = _step6.value;
            _url = "https://localhost/obix/histories/SqlServerDatabase/domesticYearly/~historyQuery?start=".concat(month.startDate, "T23:59:59.000+05:30&limit=1");
            _context63.prev = 11;
            _context63.next = 14;
            return fetch(_url);
          case 14:
            response = _context63.sent;
            if (response.ok) {
              _context63.next = 19;
              break;
            }
            console.error("Error fetching data for ".concat(month.startDate, ": HTTP ").concat(response.status));
            chartData.push(0); // Add 0 for missing data
            return _context63.abrupt("continue", 34);
          case 19:
            _context63.next = 21;
            return response.text();
          case 21:
            text = _context63.sent;
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
            _context63.next = 34;
            break;
          case 30:
            _context63.prev = 30;
            _context63.t0 = _context63["catch"](11);
            console.error("Error processing data for ".concat(month.startDate, ":"), _context63.t0);
            chartData.push(0); // Add 0 in case of errors
          case 34:
            _context63.next = 8;
            break;
          case 36:
            _context63.next = 41;
            break;
          case 38:
            _context63.prev = 38;
            _context63.t1 = _context63["catch"](6);
            _iterator6.e(_context63.t1);
          case 41:
            _context63.prev = 41;
            _iterator6.f();
            return _context63.finish(41);
          case 44:
            flattenedData = chartData.flat();
            if (!checkDataAvailability(flattenedData, 'chartdiv')) {
              _context63.next = 47;
              break;
            }
            return _context63.abrupt("return");
          case 47:
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
            _context63.next = 56;
            break;
          case 53:
            _context63.prev = 53;
            _context63.t2 = _context63["catch"](0);
            console.error("Error creating bar chart:", _context63.t2);
          case 56:
          case "end":
            return _context63.stop();
        }
      }, _callee56, null, [[0, 53], [6, 38, 41, 44], [11, 30]]);
    }));
    return _occupacyBar.apply(this, arguments);
  }
  function lineChartMonthlyOccupancy() {
    return _lineChartMonthlyOccupancy.apply(this, arguments);
  }
  function _lineChartMonthlyOccupancy() {
    _lineChartMonthlyOccupancy = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee58() {
      return _regeneratorRuntime().wrap(function _callee58$(_context66) {
        while (1) switch (_context66.prev = _context66.next) {
          case 0:
            am4core.ready(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee57() {
              var today, currentMonth, startDate, endDate, startISO, endISO, waterValues, urlToFetch, response, text, parser, xmlDoc, objs, _loop8, i, flattenedData, categoryAxis, valueAxis, createSeries;
              return _regeneratorRuntime().wrap(function _callee57$(_context65) {
                while (1) switch (_context65.prev = _context65.next) {
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
                    _context65.prev = 10;
                    _context65.next = 13;
                    return fetch(urlToFetch);
                  case 13:
                    response = _context65.sent;
                    console.log(response);
                    _context65.next = 17;
                    return response.text();
                  case 17:
                    text = _context65.sent;
                    // Parse the XML data
                    parser = new DOMParser();
                    xmlDoc = parser.parseFromString(text, "text/xml");
                    objs = xmlDoc.getElementsByTagName("obj");
                    _loop8 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop8() {
                      var obj, abstime, real, dateText, valueText, value, date, _formattedDate8, dateStr, existingEntry;
                      return _regeneratorRuntime().wrap(function _loop8$(_context64) {
                        while (1) switch (_context64.prev = _context64.next) {
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
                                _formattedDate8 = date.toLocaleDateString("en-US", {
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
                            return _context64.stop();
                        }
                      }, _loop8);
                    });
                    i = 0;
                  case 23:
                    if (!(i < objs.length)) {
                      _context65.next = 28;
                      break;
                    }
                    return _context65.delegateYield(_loop8(), "t0", 25);
                  case 25:
                    i++;
                    _context65.next = 23;
                    break;
                  case 28:
                    _context65.next = 33;
                    break;
                  case 30:
                    _context65.prev = 30;
                    _context65.t1 = _context65["catch"](10);
                    console.error("Error fetching data for ");
                  case 33:
                    flattenedData = waterValues.flat();
                    if (!checkDataAvailability(flattenedData, 'chartdiv')) {
                      _context65.next = 36;
                      break;
                    }
                    return _context65.abrupt("return");
                  case 36:
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
                  case 58:
                  case "end":
                    return _context65.stop();
                }
              }, _callee57, null, [[10, 30]]);
            })));
          case 1:
          case "end":
            return _context66.stop();
        }
      }, _callee58);
    }));
    return _lineChartMonthlyOccupancy.apply(this, arguments);
  }
  $("#startDateOccupancy, #endDateOccupancy").on("change", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.next = 2;
          return removeChart(occupacyLine);
        case 2:
        case "end":
          return _context13.stop();
      }
    }, _callee13);
  })));
  $("#sav_daily_occupancy").on("click", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          clearDateInputsOccupancy();
          _context14.next = 3;
          return removeChart(donutChart);
        case 3:
        case "end":
          return _context14.stop();
      }
    }, _callee14);
  })));
  $("#sav_monthly_occupancy").on("click", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          clearDateInputsOccupancy();
          _context15.next = 3;
          return removeChart(lineChartMonthlyOccupancy);
        case 3:
        case "end":
          return _context15.stop();
      }
    }, _callee15);
  })));
  $("#sav_yearly_occupancy").on("click", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          clearDateInputsOccupancy();
          _context16.next = 3;
          return removeChart(occupacyBar);
        case 3:
        case "end":
          return _context16.stop();
      }
    }, _callee16);
  })));
  /* occupancy efficiency end */

  /* Indoor Air Quality start */
  var aqiCharts; // Single chart instance

  // Function to replace the chart
  function replaceIndoorChart(_x5) {
    return _replaceIndoorChart.apply(this, arguments);
  } // URL for fetching data
  function _replaceIndoorChart() {
    _replaceIndoorChart = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee59(newChartFunction) {
      return _regeneratorRuntime().wrap(function _callee59$(_context67) {
        while (1) switch (_context67.prev = _context67.next) {
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
            _context67.next = 3;
            return newChartFunction();
          case 3:
          case "end":
            return _context67.stop();
        }
      }, _callee59);
    }));
    return _replaceIndoorChart.apply(this, arguments);
  }
  var iiaqurl = "".concat(url, "/obix/config/Drivers/Barclays/IAQ/IAQ/");

  // Function to create the pie chart
  function createPieChart() {
    return _createPieChart.apply(this, arguments);
  } // Update the chart every second
  function _createPieChart() {
    _createPieChart = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee60() {
      var response, text, parser, xmlDoc, outElement, outValue, maxAQI, normalizedValue, formattedValue, options;
      return _regeneratorRuntime().wrap(function _callee60$(_context68) {
        while (1) switch (_context68.prev = _context68.next) {
          case 0:
            _context68.next = 2;
            return fetch(iiaqurl);
          case 2:
            response = _context68.sent;
            _context68.next = 5;
            return response.text();
          case 5:
            text = _context68.sent;
            // Parse the XML data
            parser = new DOMParser();
            xmlDoc = parser.parseFromString(text, "text/xml"); // Get the <real> element value
            outElement = xmlDoc.querySelector('real[name="out"]');
            outValue = parseFloat(outElement.getAttribute('val')).toFixed(2);
            maxAQI = 500;
            normalizedValue = Math.min(outValue / maxAQI * 100, 100).toFixed(2);
            formattedValue = parseFloat(normalizedValue); //console.log("normalizedValue" + normalizedValue);
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
            if (!checkDataAvailability([outValue], 'chartdiv4')) {
              _context68.next = 15;
              break;
            }
            return _context68.abrupt("return");
          case 15:
            options = {
              series: [formattedValue],
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
                offsetY: 20,
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
            }; // Create and render the chart
            aqiCharts = new ApexCharts(document.querySelector("#chartdiv4"), options);
            aqiCharts.render();
          case 18:
          case "end":
            return _context68.stop();
        }
      }, _callee60);
    }));
    return _createPieChart.apply(this, arguments);
  }
  var chartInterval; // Interval ID

  // Start the interval to periodically update the chart
  function startInterval() {
    stopInterval();
    chartInterval = setInterval(function () {
      return replaceIndoorChart(createPieChart);
    }, 60000);
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
    var _initialize = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
      return _regeneratorRuntime().wrap(function _callee17$(_context17) {
        while (1) switch (_context17.prev = _context17.next) {
          case 0:
            _context17.next = 2;
            return createPieChart();
          case 2:
            _context17.next = 4;
            return epiDonutChart();
          case 4:
            // Create the chart initially
            startInterval();
            startIntervalEpi(); // Start the interval to update the chart
          case 6:
          case "end":
            return _context17.stop();
        }
      }, _callee17);
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
    _aqiDonut = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee61() {
      var scopes, upsData, _i7, _scopes3, scope, response, text, parser, xmlDoc, ups, containerIds, flattenedData, i, containerId, options, options1;
      return _regeneratorRuntime().wrap(function _callee61$(_context69) {
        while (1) switch (_context69.prev = _context69.next) {
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
            _i7 = 0, _scopes3 = scopes;
          case 4:
            if (!(_i7 < _scopes3.length)) {
              _context69.next = 26;
              break;
            }
            scope = _scopes3[_i7];
            _context69.prev = 6;
            _context69.next = 9;
            return fetch(" ".concat(url, "/obix/config/Drivers/Barclays/IAQ/").concat(scope));
          case 9:
            response = _context69.sent;
            console.log("aqi response " + response);
            _context69.next = 13;
            return response.text();
          case 13:
            text = _context69.sent;
            // Parse the XML response
            parser = new DOMParser();
            xmlDoc = parser.parseFromString(text, "application/xml"); // Extract values for ups, hvac, and rtltg
            ups = parseFloat(xmlDoc.querySelector('real[name="out"]').getAttribute('display').split(' ')[0]);
            upsData.push(ups);
            _context69.next = 23;
            break;
          case 20:
            _context69.prev = 20;
            _context69.t0 = _context69["catch"](6);
            console.error("Error fetching data for ".concat(scope, ":"), _context69.t0);
          case 23:
            _i7++;
            _context69.next = 4;
            break;
          case 26:
            containerIds = ['completionRateChart', 'bounceRateChart'];
            flattenedData = upsData.flat(); // Use the checkDataAvailability function to check if the data is available for each containerId
            i = 0;
          case 29:
            if (!(i < containerIds.length)) {
              _context69.next = 36;
              break;
            }
            containerId = containerIds[i];
            if (!checkDataAvailability(upsData, containerId)) {
              _context69.next = 33;
              break;
            }
            return _context69.abrupt("return");
          case 33:
            i++;
            _context69.next = 29;
            break;
          case 36:
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
              labels: ['Floor 32'],
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
            _context69.next = 40;
            return aqiCharts1.render();
          case 40:
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
              labels: ['Floor 33'],
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
            _context69.next = 44;
            return aqiCharts2.render();
          case 44:
          case "end":
            return _context69.stop();
        }
      }, _callee61, null, [[6, 20]]);
    }));
    return _aqiDonut.apply(this, arguments);
  }
  $('#aqiFloor1').on("click", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee18() {
    return _regeneratorRuntime().wrap(function _callee18$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          console.log("aqiFloor1 clicked");
          $(".aqiSeparate").show();
          $(".aqiAvg").hide();
          $("#aqiFloor2").show();
          $(".aqiBtn").hide();
          //$(this).hide();
          //stopInterval();
          //chartInterval = setInterval(() => aqiDonut1, 1000);
          _context18.next = 7;
          return aqiDonut1();
        case 7:
          setInterval(aqiDonut1, 5000);
          // await aqiDonut2();
        case 8:
        case "end":
          return _context18.stop();
      }
    }, _callee18);
  })));
  $('#aqiFloor2').on("click", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee19() {
    return _regeneratorRuntime().wrap(function _callee19$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          console.log("aqiFloor2 clicked");
          $(".aqiSeparate").hide();
          $(".aqiAvg").show();
          $("#aqiFloor1").show();
          $(".aqiBtn").show();
          //$(this).hide();
        case 5:
        case "end":
          return _context19.stop();
      }
    }, _callee19);
  })));
  function createBarChart() {
    return _createBarChart2.apply(this, arguments);
  }
  function _createBarChart2() {
    _createBarChart2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee63() {
      return _regeneratorRuntime().wrap(function _callee63$(_context72) {
        while (1) switch (_context72.prev = _context72.next) {
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
            am4core.ready(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee62() {
              var startDateValue, endDateValue, waterValues, urlToFetch, response, text, parser, xmlDoc, objs, _loop9, i, flattenedData, categoryAxis, valueAxis, createSeries;
              return _regeneratorRuntime().wrap(function _callee62$(_context71) {
                while (1) switch (_context71.prev = _context71.next) {
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
                    urlToFetch = "".concat(url, "/obix/histories/Barclays_Sup/IAQ_Daily/~historyQuery?start=").concat(startDateValue, "T23:58:00.000+05:30&end=").concat(endDateValue, "T23:58:00.000+05:30");
                    console.log(urlToFetch);
                    _context71.prev = 6;
                    _context71.next = 9;
                    return fetch(urlToFetch);
                  case 9:
                    response = _context71.sent;
                    console.log(response);
                    _context71.next = 13;
                    return response.text();
                  case 13:
                    text = _context71.sent;
                    parser = new DOMParser();
                    xmlDoc = parser.parseFromString(text, "text/xml");
                    objs = xmlDoc.getElementsByTagName("obj");
                    _loop9 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop9() {
                      var obj, abstime, real, dateText, valueText, value, date, _formattedDate9, dateStr, existingEntry;
                      return _regeneratorRuntime().wrap(function _loop9$(_context70) {
                        while (1) switch (_context70.prev = _context70.next) {
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
                                _formattedDate9 = date.toLocaleDateString("en-US", {
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
                            return _context70.stop();
                        }
                      }, _loop9);
                    });
                    i = 0;
                  case 19:
                    if (!(i < objs.length)) {
                      _context71.next = 24;
                      break;
                    }
                    return _context71.delegateYield(_loop9(), "t0", 21);
                  case 21:
                    i++;
                    _context71.next = 19;
                    break;
                  case 24:
                    _context71.next = 29;
                    break;
                  case 26:
                    _context71.prev = 26;
                    _context71.t1 = _context71["catch"](6);
                    console.error("Error fetching data: ".concat(_context71.t1));
                  case 29:
                    console.log(waterValues);
                    flattenedData = waterValues.flat();
                    if (!checkDataAvailability(flattenedData, 'chartdiv4')) {
                      _context71.next = 33;
                      break;
                    }
                    return _context71.abrupt("return");
                  case 33:
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
                  case 54:
                  case "end":
                    return _context71.stop();
                }
              }, _callee62, null, [[6, 26]]);
            })));
          case 1:
          case "end":
            return _context72.stop();
        }
      }, _callee63);
    }));
    return _createBarChart2.apply(this, arguments);
  }
  function aqiBarChart() {
    return _aqiBarChart.apply(this, arguments);
  }
  function _aqiBarChart() {
    _aqiBarChart = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee64() {
      var months, last12Months, chartData, _iterator7, _step7, month, urlAqiYear, _list$getElementsByTa3, _list$getElementsByTa4, response, text, parser, xml, list, abstime, realValue, abstimeDate, formattedAbstime, flattenedData, existingStyle, options;
      return _regeneratorRuntime().wrap(function _callee64$(_context73) {
        while (1) switch (_context73.prev = _context73.next) {
          case 0:
            _context73.prev = 0;
            // Get the last 12 months
            months = getLast12Months(); // Array of month names for the x-axis (e.g., ["Jan 2023", "Feb 2023", ...])
            last12Months = getLast12Months1(); // Array of objects with `startDate` for the URLs
            console.log("Last 12 Months (from getLast12Months1):", last12Months);
            chartData = []; // Loop through each month to fetch data
            _iterator7 = _createForOfIteratorHelper(last12Months);
            _context73.prev = 6;
            _iterator7.s();
          case 8:
            if ((_step7 = _iterator7.n()).done) {
              _context73.next = 36;
              break;
            }
            month = _step7.value;
            urlAqiYear = "".concat(url, "/obix/histories/Barclays_Sup/IAQ_Yearly/~historyQuery?start=").concat(month.startDate, "T23:58:00.000+05:30&limit=1");
            _context73.prev = 11;
            _context73.next = 14;
            return fetch(urlAqiYear);
          case 14:
            response = _context73.sent;
            if (response.ok) {
              _context73.next = 19;
              break;
            }
            console.error("Error fetching data for ".concat(month.startDate, ": HTTP ").concat(response.status));
            chartData.push(0); // Add 0 for missing data
            return _context73.abrupt("continue", 34);
          case 19:
            _context73.next = 21;
            return response.text();
          case 21:
            text = _context73.sent;
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
            _context73.next = 34;
            break;
          case 30:
            _context73.prev = 30;
            _context73.t0 = _context73["catch"](11);
            console.error("Error processing data for ".concat(month.startDate, ":"), _context73.t0);
            chartData.push(0); // Add 0 in case of errors
          case 34:
            _context73.next = 8;
            break;
          case 36:
            _context73.next = 41;
            break;
          case 38:
            _context73.prev = 38;
            _context73.t1 = _context73["catch"](6);
            _iterator7.e(_context73.t1);
          case 41:
            _context73.prev = 41;
            _iterator7.f();
            return _context73.finish(41);
          case 44:
            flattenedData = chartData.flat();
            if (!checkDataAvailability(flattenedData, 'chartdiv4')) {
              _context73.next = 47;
              break;
            }
            return _context73.abrupt("return");
          case 47:
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
            _context73.next = 58;
            break;
          case 55:
            _context73.prev = 55;
            _context73.t2 = _context73["catch"](0);
            console.error("Error creating bar chart:", _context73.t2);
          case 58:
          case "end":
            return _context73.stop();
        }
      }, _callee64, null, [[0, 55], [6, 38, 41, 44], [11, 30]]);
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
    _lineChartMonthlyAqi = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee66() {
      return _regeneratorRuntime().wrap(function _callee66$(_context76) {
        while (1) switch (_context76.prev = _context76.next) {
          case 0:
            am4core.ready(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee65() {
              var today, currentMonth, startDate, endDate, startISO, endISO, waterValues, urlToFetch, response, text, parser, xmlDoc, objs, _loop10, i, flattenedData, categoryAxis, valueAxis, createSeries;
              return _regeneratorRuntime().wrap(function _callee65$(_context75) {
                while (1) switch (_context75.prev = _context75.next) {
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
                    urlToFetch = "".concat(url, "/obix/histories/Barclays_Sup/IAQ_Daily/~historyQuery?start=").concat(startISO, "T23:59:59.000+05:30&end=").concat(endISO, "T23:59:59.000+05:30");
                    console.log(urlToFetch);
                    _context75.prev = 10;
                    _context75.next = 13;
                    return fetch(urlToFetch);
                  case 13:
                    response = _context75.sent;
                    console.log(response);
                    _context75.next = 17;
                    return response.text();
                  case 17:
                    text = _context75.sent;
                    // Parse the XML data
                    parser = new DOMParser();
                    xmlDoc = parser.parseFromString(text, "text/xml");
                    objs = xmlDoc.getElementsByTagName("obj");
                    _loop10 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop10() {
                      var obj, abstime, real, dateText, valueText, value, date, _formattedDate10, dateStr, existingEntry;
                      return _regeneratorRuntime().wrap(function _loop10$(_context74) {
                        while (1) switch (_context74.prev = _context74.next) {
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
                                _formattedDate10 = date.toLocaleDateString("en-US", {
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
                            return _context74.stop();
                        }
                      }, _loop10);
                    });
                    i = 0;
                  case 23:
                    if (!(i < objs.length)) {
                      _context75.next = 28;
                      break;
                    }
                    return _context75.delegateYield(_loop10(), "t0", 25);
                  case 25:
                    i++;
                    _context75.next = 23;
                    break;
                  case 28:
                    _context75.next = 33;
                    break;
                  case 30:
                    _context75.prev = 30;
                    _context75.t1 = _context75["catch"](10);
                    console.error("Error fetching data for ");
                  case 33:
                    flattenedData = waterValues.flat();
                    if (!checkDataAvailability(flattenedData, 'chartdiv4')) {
                      _context75.next = 36;
                      break;
                    }
                    return _context75.abrupt("return");
                  case 36:
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
                  case 58:
                  case "end":
                    return _context75.stop();
                }
              }, _callee65, null, [[10, 30]]);
            })));
          case 1:
          case "end":
            return _context76.stop();
        }
      }, _callee66);
    }));
    return _lineChartMonthlyAqi.apply(this, arguments);
  }
  $("#startDateIAQ, #endDateIAQ").on("change", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee20() {
    return _regeneratorRuntime().wrap(function _callee20$(_context20) {
      while (1) switch (_context20.prev = _context20.next) {
        case 0:
          // await createBarChart();
          stopInterval();
          _context20.next = 3;
          return replaceIndoorChart(createBarChart);
        case 3:
        case "end":
          return _context20.stop();
      }
    }, _callee20);
  })));
  $("#sav_daily_iaq").on("click", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee21() {
    return _regeneratorRuntime().wrap(function _callee21$(_context21) {
      while (1) switch (_context21.prev = _context21.next) {
        case 0:
          clearDateInputsAqi();
          chartInterval = setInterval(function () {
            return replaceIndoorChart(createPieChart);
          }, 60000);
        case 2:
        case "end":
          return _context21.stop();
      }
    }, _callee21);
  })));
  $("#sav_monthly_iaq").on("click", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee22() {
    return _regeneratorRuntime().wrap(function _callee22$(_context22) {
      while (1) switch (_context22.prev = _context22.next) {
        case 0:
          clearDateInputsAqi();
          stopInterval();
          _context22.next = 4;
          return replaceIndoorChart(lineChartMonthlyAqi);
        case 4:
        case "end":
          return _context22.stop();
      }
    }, _callee22);
  })));
  $("#sav_yearly_iaq").on("click", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee23() {
    return _regeneratorRuntime().wrap(function _callee23$(_context23) {
      while (1) switch (_context23.prev = _context23.next) {
        case 0:
          clearDateInputsAqi();
          // await aqiBarChart();
          stopInterval();
          _context23.next = 4;
          return replaceIndoorChart(aqiBarChart);
        case 4:
        case "end":
          return _context23.stop();
      }
    }, _callee23);
  })));
  /* Indoor Air Quality end */

  /* EPI Index start */
  //var epiChart; // Global reference to the current chart

  // Function to replace the current chart with a new one
  function replaceEpiChart(_x6) {
    return _replaceEpiChart.apply(this, arguments);
  }
  function _replaceEpiChart() {
    _replaceEpiChart = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee67(newChartFunction) {
      return _regeneratorRuntime().wrap(function _callee67$(_context77) {
        while (1) switch (_context77.prev = _context77.next) {
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
            _context77.next = 3;
            return newChartFunction();
          case 3:
          case "end":
            return _context77.stop();
        }
      }, _callee67);
    }));
    return _replaceEpiChart.apply(this, arguments);
  }
  var epiChart; // Declare the variable globally

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
    chartIntervalEpi = setInterval(function () {
      return replaceIndoorChart(epiDonutChart);
    }, 60000);
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
  function epiDonutChart() {
    return _epiDonutChart.apply(this, arguments);
  } // (async function initialize() {
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
  function _epiDonutChart() {
    _epiDonutChart = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee69() {
      var waters, waterValues, fetchDataPromises, flattenedData, totalResponse, totalText, totalXml, totalElement, outValue, customTotal, percentages, pieSeries, marker, labelEpi, labelTotal;
      return _regeneratorRuntime().wrap(function _callee69$(_context79) {
        while (1) switch (_context79.prev = _context79.next) {
          case 0:
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
            waters = ['HVAC', 'UPS', 'RP_LTG'];
            waterValues = []; // Fetch data asynchronously for each scope
            fetchDataPromises = waters.map(/*#__PURE__*/function () {
              var _ref41 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee68(scope) {
                var urlToFetch, response, text, parser, xmlDoc, scopeElement, value;
                return _regeneratorRuntime().wrap(function _callee68$(_context78) {
                  while (1) switch (_context78.prev = _context78.next) {
                    case 0:
                      urlToFetch = "".concat(url, "/obix/config/Drivers/Barclays/EPI/").concat(scope, "/");
                      console.log("Fetching data from: ".concat(urlToFetch));
                      _context78.prev = 2;
                      _context78.next = 5;
                      return fetch(urlToFetch);
                    case 5:
                      response = _context78.sent;
                      if (response.ok) {
                        _context78.next = 9;
                        break;
                      }
                      console.error("Error fetching data for ".concat(scope));
                      return _context78.abrupt("return");
                    case 9:
                      _context78.next = 11;
                      return response.text();
                    case 11:
                      text = _context78.sent;
                      console.log("Fetched text for ".concat(scope, ": ").concat(text.slice(0, 100), "..."));

                      // Parse the XML data
                      parser = new DOMParser();
                      xmlDoc = parser.parseFromString(text, "text/xml");
                      scopeElement = null; // Extract values based on scope
                      if (scope === 'HVAC') {
                        scopeElement = xmlDoc.querySelector('ref[name="HVAC_OP_PANEL"]');
                      } else if (scope === 'UPS') {
                        scopeElement = xmlDoc.querySelector('ref[name="UPS_OP_PANEL"]');
                      } else if (scope === 'RP_LTG') {
                        scopeElement = xmlDoc.querySelector('ref[name="RP_OP_PANEL"]');
                      }
                      if (scopeElement) {
                        value = parseFloat(scopeElement.getAttribute('display').split(' ')[0]);
                        console.log("EPI values for ".concat(scope, ": ").concat(value));
                        waterValues.push(value); // Add value
                      }
                      _context78.next = 23;
                      break;
                    case 20:
                      _context78.prev = 20;
                      _context78.t0 = _context78["catch"](2);
                      console.error("Error fetching data for ".concat(scope, ":"), _context78.t0);
                    case 23:
                    case "end":
                      return _context78.stop();
                  }
                }, _callee68, null, [[2, 20]]);
              }));
              return function (_x13) {
                return _ref41.apply(this, arguments);
              };
            }()); // Wait for all data to be fetched
            _context79.next = 5;
            return Promise.all(fetchDataPromises);
          case 5:
            if (!(waterValues.length !== 3)) {
              _context79.next = 8;
              break;
            }
            console.error("Error: Missing data for some components");
            return _context79.abrupt("return");
          case 8:
            console.log("Final Water Values: ", waterValues);
            flattenedData = waterValues.flat();
            if (!checkDataAvailability(flattenedData, 'chartdiv5')) {
              _context79.next = 12;
              break;
            }
            return _context79.abrupt("return");
          case 12:
            _context79.next = 14;
            return fetch("".concat(url, "/obix/config/Drivers/Barclays/EPI/TotalEPI/"));
          case 14:
            totalResponse = _context79.sent;
            _context79.next = 17;
            return totalResponse.text();
          case 17:
            totalText = _context79.sent;
            totalXml = new DOMParser().parseFromString(totalText, "text/xml");
            totalElement = totalXml.querySelector('real[name="out"]');
            outValue = parseFloat(totalElement.getAttribute('val')).toFixed(2);
            console.log("out " + outValue);
            if (!(!outValue || outValue == 0)) {
              _context79.next = 25;
              break;
            }
            console.error("Error: Invalid or zero total value");
            return _context79.abrupt("return");
          case 25:
            customTotal = parseFloat(outValue); // Custom total from your external source
            // Calculate percentages based on customTotal
            percentages = waterValues.map(function (value) {
              var percentage = (value / customTotal * 100).toFixed(2); // Calculate percentage
              console.log("For value ".concat(value, ", the percentage is: ").concat(percentage, "%"));
              return parseFloat(percentage); // Store as float
            });
            console.log("Calculated Percentages:", percentages); // Output the calculated percentages

            // AMCharts setup
            am4core.useTheme(am4themes_animated);
            epiChart = am4core.create("chartdiv5", am4charts.PieChart);

            // Add data with percentages calculated
            epiChart.data = [{
              category: 'HVAC',
              value: percentages[0]
            }, {
              category: 'UPS',
              value: percentages[1]
            }, {
              category: 'RP_LTG',
              value: percentages[2]
            }];
            epiChart.innerRadius = am4core.percent(45);
            epiChart.width = am4core.percent(100);
            epiChart.radius = am4core.percent(89);
            //         pieSeries.slices.template.radius = am4core.percent(150); // Extend beyond the default size
            // pieSeries.slices.template.innerRadius = epiChart.innerRadius;

            // Add pie series
            pieSeries = epiChart.series.push(new am4charts.PieSeries());
            pieSeries.dataFields.value = "value";
            pieSeries.dataFields.category = "category";

            // Add custom colors
            pieSeries.colors.list = [am4core.color("#FFB200"), am4core.color("#667BC6"), am4core.color("#D1E9F6")];

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
            marker = epiChart.legend.markers.template.children.getIndex(0);
            marker.cornerRadius(12, 12, 12, 12);
            marker.strokeWidth = 2;
            marker.strokeOpacity = 1;
            marker.stroke = am4core.color("#ccc");
            epiChart.logo.disabled = true;

            // Add a label in the center of the donut chart
            // Create the main label for "EPI" in bold
            labelEpi = epiChart.seriesContainer.createChild(am4core.Label);
            labelEpi.text = "EPI";
            labelEpi.horizontalCenter = "middle";
            labelEpi.verticalCenter = "middle";
            labelEpi.fontSize = 30;
            labelEpi.fontWeight = "bold";
            labelEpi.fill = am4core.color("#000000");
            labelEpi.dy = -30;
            // Create the second label for the custom total in normal weight
            labelTotal = epiChart.seriesContainer.createChild(am4core.Label);
            labelTotal.text = customTotal;
            labelTotal.horizontalCenter = "middle";
            labelTotal.verticalCenter = "middle";
            labelTotal.fontSize = 30;
            labelTotal.fontWeight = "normal";
            labelTotal.fill = am4core.color("#000000");

            // Position the total label slightly below "EPI"
            labelTotal.dy = -2; // Adjust vertical position of the total text

            // Responsive behavior
            epiChart.responsive.enabled = true;
            epiChart.responsive.rules.push({
              relevant: function relevant(target) {
                return target.pixelWidth <= 480;
              },
              state: function state(target, stateId) {
                if (target instanceof am4charts.Legend) {
                  target.position = "top";
                }
                return null;
              }
            });

            // Disable chart animation
            epiChart.hiddenState.properties.opacity = 1;
            epiChart.hiddenState.properties.visible = false;
          case 85:
          case "end":
            return _context79.stop();
        }
      }, _callee69);
    }));
    return _epiDonutChart.apply(this, arguments);
  }
  function epiLine() {
    return _epiLine.apply(this, arguments);
  }
  function _epiLine() {
    _epiLine = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee71() {
      return _regeneratorRuntime().wrap(function _callee71$(_context82) {
        while (1) switch (_context82.prev = _context82.next) {
          case 0:
            am4core.ready(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee70() {
              var startDateValue, endDateValue, isValid, waters, waterValues, _i8, _waters5, scope, urlToFetch, response, text, parser, xmlDoc, objs, _loop11, i, flattenedData, categoryAxis, valueAxis, createSeries;
              return _regeneratorRuntime().wrap(function _callee70$(_context81) {
                while (1) switch (_context81.prev = _context81.next) {
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
                    _context81.next = 5;
                    return validateDateRange(startDateValue, endDateValue);
                  case 5:
                    isValid = _context81.sent;
                    if (isValid) {
                      _context81.next = 8;
                      break;
                    }
                    return _context81.abrupt("return");
                  case 8:
                    waters = ['HVAC', 'UPS', 'RP_LTG'];
                    waterValues = []; // const url = "https://localhost";
                    // Fetch data asynchronously for each scope
                    _i8 = 0, _waters5 = waters;
                  case 11:
                    if (!(_i8 < _waters5.length)) {
                      _context81.next = 44;
                      break;
                    }
                    scope = _waters5[_i8];
                    urlToFetch = "".concat(url, "/obix/histories/Barclays_Sup/EPI_").concat(scope, "_Daily/~historyQuery?start=").concat(startDateValue, "T23:58:00.000+05:30&end=").concat(endDateValue, "T23:58:00.000+05:30");
                    console.log(urlToFetch);
                    _context81.prev = 15;
                    _context81.next = 18;
                    return fetch(urlToFetch);
                  case 18:
                    response = _context81.sent;
                    console.log(response);
                    if (response.ok) {
                      _context81.next = 23;
                      break;
                    }
                    console.error("Error fetching data for ".concat(scope, ": ").concat(response.status, " - ").concat(response.statusText));
                    return _context81.abrupt("continue", 41);
                  case 23:
                    _context81.next = 25;
                    return response.text();
                  case 25:
                    text = _context81.sent;
                    // Parse the XML data
                    parser = new DOMParser();
                    xmlDoc = parser.parseFromString(text, "text/xml");
                    objs = xmlDoc.getElementsByTagName("obj");
                    _loop11 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop11() {
                      var obj, abstime, real, dateText, valueText, value, date, _formattedDate11, dateStr, existingEntry;
                      return _regeneratorRuntime().wrap(function _loop11$(_context80) {
                        while (1) switch (_context80.prev = _context80.next) {
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
                                _formattedDate11 = date.toLocaleDateString("en-US", {
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
                            return _context80.stop();
                        }
                      }, _loop11);
                    });
                    i = 0;
                  case 31:
                    if (!(i < objs.length)) {
                      _context81.next = 36;
                      break;
                    }
                    return _context81.delegateYield(_loop11(), "t0", 33);
                  case 33:
                    i++;
                    _context81.next = 31;
                    break;
                  case 36:
                    _context81.next = 41;
                    break;
                  case 38:
                    _context81.prev = 38;
                    _context81.t1 = _context81["catch"](15);
                    console.error("Error fetching data for ".concat(scope, ": ").concat(_context81.t1.message));
                  case 41:
                    _i8++;
                    _context81.next = 11;
                    break;
                  case 44:
                    flattenedData = waterValues.flat();
                    if (!checkDataAvailability(flattenedData, 'chartdiv5')) {
                      _context81.next = 47;
                      break;
                    }
                    return _context81.abrupt("return");
                  case 47:
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
                  case 70:
                  case "end":
                    return _context81.stop();
                }
              }, _callee70, null, [[15, 38]]);
            })));
          case 1:
          case "end":
            return _context82.stop();
        }
      }, _callee71);
    }));
    return _epiLine.apply(this, arguments);
  }
  function epiBarChart() {
    return _epiBarChart.apply(this, arguments);
  }
  function _epiBarChart() {
    _epiBarChart = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee72() {
      var scopeData, last12MonthsData, _iterator8, _step8, month, scopeUrls, i, response, text, parser, xml, records, _iterator9, _step9, _record$getElementsBy5, _record$getElementsBy6, record, abstime, realValue, abstimeDate, formattedAbstime, flattenedData, existingStyle, options;
      return _regeneratorRuntime().wrap(function _callee72$(_context83) {
        while (1) switch (_context83.prev = _context83.next) {
          case 0:
            scopeData = [[], [], []]; // Scope 1, Scope 2, Scope 3
            last12MonthsData = getLast12Months1();
            console.log("bar " + last12MonthsData);
            _iterator8 = _createForOfIteratorHelper(last12MonthsData);
            _context83.prev = 4;
            _iterator8.s();
          case 6:
            if ((_step8 = _iterator8.n()).done) {
              _context83.next = 36;
              break;
            }
            month = _step8.value;
            scopeUrls = ["".concat(url, "/obix/histories/Barclays_Sup/EPI_HVAC_Yearly/~historyQuery?start=").concat(month.startDate, "T23:59:59.000+05:30&limit=1"), "".concat(url, "/obix/histories/Barclays_Sup/EPI_UPS_Yearly/~historyQuery?start=").concat(month.startDate, "T23:59:59.000+05:30&limit=1"), "".concat(url, "/obix/histories/Barclays_Sup/EPI_RP_LTG_Yearly/~historyQuery?start=").concat(month.startDate, "T23:59:59.000+05:30&limit=1")];
            i = 0;
          case 10:
            if (!(i < scopeUrls.length)) {
              _context83.next = 34;
              break;
            }
            _context83.prev = 11;
            _context83.next = 14;
            return fetch(scopeUrls[i]);
          case 14:
            response = _context83.sent;
            if (response.ok) {
              _context83.next = 17;
              break;
            }
            throw new Error("HTTP error! Status: ".concat(response.status));
          case 17:
            _context83.next = 19;
            return response.text();
          case 19:
            text = _context83.sent;
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
            _context83.next = 31;
            break;
          case 27:
            _context83.prev = 27;
            _context83.t0 = _context83["catch"](11);
            console.error("Error fetching data for scope ".concat(i + 1, ":"), _context83.t0);
            scopeData[i].push(null); // Push null to maintain alignment
          case 31:
            i++;
            _context83.next = 10;
            break;
          case 34:
            _context83.next = 6;
            break;
          case 36:
            _context83.next = 41;
            break;
          case 38:
            _context83.prev = 38;
            _context83.t1 = _context83["catch"](4);
            _iterator8.e(_context83.t1);
          case 41:
            _context83.prev = 41;
            _iterator8.f();
            return _context83.finish(41);
          case 44:
            flattenedData = scopeData.flat();
            if (!checkDataAvailability(flattenedData, 'chartdiv5')) {
              _context83.next = 47;
              break;
            }
            return _context83.abrupt("return");
          case 47:
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
            _context83.next = 53;
            return epiChart.render();
          case 53:
          case "end":
            return _context83.stop();
        }
      }, _callee72, null, [[4, 38, 41, 44], [11, 27]]);
    }));
    return _epiBarChart.apply(this, arguments);
  }
  function lineChartMonthlyEpi() {
    return _lineChartMonthlyEpi.apply(this, arguments);
  }
  function _lineChartMonthlyEpi() {
    _lineChartMonthlyEpi = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee74() {
      return _regeneratorRuntime().wrap(function _callee74$(_context86) {
        while (1) switch (_context86.prev = _context86.next) {
          case 0:
            am4core.ready(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee73() {
              var today, currentMonth, startDate, endDate, startISO, endISO, waters, waterValues, _i9, _waters6, scope, urlToFetch, response, text, parser, xmlDoc, objs, _loop12, i, flattenedData, categoryAxis, valueAxis, createSeries;
              return _regeneratorRuntime().wrap(function _callee73$(_context85) {
                while (1) switch (_context85.prev = _context85.next) {
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
                    waters = ['HVAC', 'UPS', 'RP_LTG'];
                    waterValues = []; // Fetch data asynchronously for each scope
                    _i9 = 0, _waters6 = waters;
                  case 10:
                    if (!(_i9 < _waters6.length)) {
                      _context85.next = 43;
                      break;
                    }
                    scope = _waters6[_i9];
                    urlToFetch = "".concat(url, "/obix/histories/Barclays_Sup/EPI_").concat(scope, "_Daily/~historyQuery?start=").concat(startISO, "T23:59:59.000+05:30&end=").concat(endISO, "T23:59:59.000+05:30");
                    console.log(urlToFetch);
                    _context85.prev = 14;
                    _context85.next = 17;
                    return fetch(urlToFetch);
                  case 17:
                    response = _context85.sent;
                    console.log(response);
                    if (response.ok) {
                      _context85.next = 22;
                      break;
                    }
                    console.error("Error fetching data for ".concat(scope, ": ").concat(response.status, " - ").concat(response.statusText));
                    return _context85.abrupt("continue", 40);
                  case 22:
                    _context85.next = 24;
                    return response.text();
                  case 24:
                    text = _context85.sent;
                    parser = new DOMParser();
                    xmlDoc = parser.parseFromString(text, "text/xml");
                    objs = xmlDoc.getElementsByTagName("obj");
                    _loop12 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop12() {
                      var obj, abstime, real, dateText, valueText, value, date, _formattedDate12, dateStr, existingEntry;
                      return _regeneratorRuntime().wrap(function _loop12$(_context84) {
                        while (1) switch (_context84.prev = _context84.next) {
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
                                _formattedDate12 = date.toLocaleDateString("en-US", {
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
                            return _context84.stop();
                        }
                      }, _loop12);
                    });
                    i = 0;
                  case 30:
                    if (!(i < objs.length)) {
                      _context85.next = 35;
                      break;
                    }
                    return _context85.delegateYield(_loop12(), "t0", 32);
                  case 32:
                    i++;
                    _context85.next = 30;
                    break;
                  case 35:
                    _context85.next = 40;
                    break;
                  case 37:
                    _context85.prev = 37;
                    _context85.t1 = _context85["catch"](14);
                    console.error("Error fetching data for ".concat(scope, ": ").concat(_context85.t1.message));
                  case 40:
                    _i9++;
                    _context85.next = 10;
                    break;
                  case 43:
                    flattenedData = waterValues.flat();
                    if (!checkDataAvailability(flattenedData, 'chartdiv5')) {
                      _context85.next = 46;
                      break;
                    }
                    return _context85.abrupt("return");
                  case 46:
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
                  case 69:
                  case "end":
                    return _context85.stop();
                }
              }, _callee73, null, [[14, 37]]);
            })));
          case 1:
          case "end":
            return _context86.stop();
        }
      }, _callee74);
    }));
    return _lineChartMonthlyEpi.apply(this, arguments);
  }
  $("#startDateEPI, #endDateEPI").on("change", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee24() {
    return _regeneratorRuntime().wrap(function _callee24$(_context24) {
      while (1) switch (_context24.prev = _context24.next) {
        case 0:
          stopIntervalEpi();
          _context24.next = 3;
          return replaceEpiChart(epiLine);
        case 3:
        case "end":
          return _context24.stop();
      }
    }, _callee24);
  })));
  $("#sav_daily_epi").on("click", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee25() {
    return _regeneratorRuntime().wrap(function _callee25$(_context25) {
      while (1) switch (_context25.prev = _context25.next) {
        case 0:
          clearDateInputsEpi();
          //startInterval("epiDonutChart", 1000);
          chartIntervalEpi = setInterval(function () {
            return replaceIndoorChart(epiDonutChart);
          }, 60000);
        case 2:
        case "end":
          return _context25.stop();
      }
    }, _callee25);
  })));
  $("#sav_monthly_epi").on("click", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee26() {
    return _regeneratorRuntime().wrap(function _callee26$(_context26) {
      while (1) switch (_context26.prev = _context26.next) {
        case 0:
          clearDateInputsEpi();
          stopIntervalEpi();
          _context26.next = 4;
          return replaceEpiChart(lineChartMonthlyEpi);
        case 4:
        case "end":
          return _context26.stop();
      }
    }, _callee26);
  })));
  $("#sav_yearly_epi").on("click", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee27() {
    return _regeneratorRuntime().wrap(function _callee27$(_context27) {
      while (1) switch (_context27.prev = _context27.next) {
        case 0:
          _context27.next = 2;
          return replaceEpiChart(epiBarChart);
        case 2:
          stopIntervalEpi();
          clearDateInputsEpi();
        case 4:
        case "end":
          return _context27.stop();
      }
    }, _callee27);
  })));
  var epiChart1;
  function epiColumnChart() {
    return _epiColumnChart.apply(this, arguments);
  }
  function _epiColumnChart() {
    _epiColumnChart = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee75() {
      var scopes, hvacData, upsData, rtltgData, _i10, _scopes4, scope, response, text, parser, xmlDoc, ups, hvac, rtltg, options;
      return _regeneratorRuntime().wrap(function _callee75$(_context87) {
        while (1) switch (_context87.prev = _context87.next) {
          case 0:
            scopes = ['Floor1', 'Floor2'];
            hvacData = [];
            upsData = [];
            rtltgData = []; // Loop through each scope to fetch and process data
            _i10 = 0, _scopes4 = scopes;
          case 5:
            if (!(_i10 < _scopes4.length)) {
              _context87.next = 30;
              break;
            }
            scope = _scopes4[_i10];
            _context87.prev = 7;
            _context87.next = 10;
            return fetch("".concat(url, "/obix/config/Barclays/EPI/").concat(scope));
          case 10:
            response = _context87.sent;
            _context87.next = 13;
            return response.text();
          case 13:
            text = _context87.sent;
            // Parse the XML response
            parser = new DOMParser();
            xmlDoc = parser.parseFromString(text, "application/xml"); // Extract values for ups, hvac, and rtltg
            ups = parseFloat(xmlDoc.querySelector('ref[name="ups"]').getAttribute('display').split(' ')[0]);
            hvac = parseFloat(xmlDoc.querySelector('ref[name="hvac"]').getAttribute('display').split(' ')[0]);
            rtltg = parseFloat(xmlDoc.querySelector('ref[name="rt$26ltg"]').getAttribute('display').split(' ')[0]); // Store the data for each scope
            hvacData.push(hvac);
            upsData.push(ups);
            rtltgData.push(rtltg);
            _context87.next = 27;
            break;
          case 24:
            _context87.prev = 24;
            _context87.t0 = _context87["catch"](7);
            console.error("Error fetching data for ".concat(scope, ":"), _context87.t0);
          case 27:
            _i10++;
            _context87.next = 5;
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
            _context87.next = 35;
            return epiChart1.render();
          case 35:
          case "end":
            return _context87.stop();
        }
      }, _callee75, null, [[7, 24]]);
    }));
    return _epiColumnChart.apply(this, arguments);
  }
  $('#epiFloor1').on("click", /*#__PURE__*/function () {
    var _ref27 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee28(event) {
      return _regeneratorRuntime().wrap(function _callee28$(_context28) {
        while (1) switch (_context28.prev = _context28.next) {
          case 0:
            event.stopPropagation();
            console.log("epiFloor1 clicked");
            $(".epiBar").show();
            $(".epiDonut").hide();
            $("#epiFloor2").show();
            $(".epiBtn").hide();
            // $(this).hide();
            _context28.next = 8;
            return epiColumnChart();
          case 8:
            setInterval(epiColumnChart, 3000);
          case 9:
          case "end":
            return _context28.stop();
        }
      }, _callee28);
    }));
    return function (_x7) {
      return _ref27.apply(this, arguments);
    };
  }());
  $('#epiFloor2').on("click", /*#__PURE__*/function () {
    var _ref28 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee29(event) {
      return _regeneratorRuntime().wrap(function _callee29$(_context29) {
        while (1) switch (_context29.prev = _context29.next) {
          case 0:
            event.stopPropagation();
            console.log("epiFloor2 clicked");
            $(".epiBar").hide();
            $(".epiDonut").show();
            $("#epiFloor1").show();
            $(".epiBtn").show();
            // $(this).hide();
          case 6:
          case "end":
            return _context29.stop();
        }
      }, _callee29);
    }));
    return function (_x8) {
      return _ref28.apply(this, arguments);
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
    _showAlert = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee76(message1, message2) {
      var modal;
      return _regeneratorRuntime().wrap(function _callee76$(_context88) {
        while (1) switch (_context88.prev = _context88.next) {
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
            return _context88.stop();
        }
      }, _callee76);
    }));
    return _showAlert.apply(this, arguments);
  }
  function validateDateRange(_x11, _x12) {
    return _validateDateRange.apply(this, arguments);
  } //     async function validateDateRange(startDate, endDate) {
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
  function _validateDateRange() {
    _validateDateRange = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee77(startDate, endDate) {
      var today, limitDate, timeDiff, dayDiff;
      return _regeneratorRuntime().wrap(function _callee77$(_context89) {
        while (1) switch (_context89.prev = _context89.next) {
          case 0:
            today = new Date(); // Current date
            limitDate = new Date('2024-08-31'); // Limit date (hardcoded)
            startDate = new Date(startDate);
            endDate = new Date(endDate);
            //resetCharts();

            // Check if the start date is after today's date
            if (!(startDate > today)) {
              _context89.next = 8;
              break;
            }
            console.log(startDate);
            showAlert('Start date cannot be in the future.', 'Please select a valid start date.');
            return _context89.abrupt("return", false);
          case 8:
            if (!(endDate > today)) {
              _context89.next = 12;
              break;
            }
            console.log(endDate);
            showAlert('End date cannot be in the future.', 'Please select a valid end date.');
            return _context89.abrupt("return", false);
          case 12:
            if (!(startDate < limitDate)) {
              _context89.next = 15;
              break;
            }
            showAlert('Data for selected start date is not available.', 'Please select a date on or after August 31, 2024.');
            return _context89.abrupt("return", false);
          case 15:
            if (!(endDate < limitDate)) {
              _context89.next = 18;
              break;
            }
            showAlert('Data for selected end date is not available.', 'Please select a date on or after August 31, 2024.');
            return _context89.abrupt("return", false);
          case 18:
            if (!(startDate >= endDate)) {
              _context89.next = 21;
              break;
            }
            showAlert('Start Date And End Date Can Not Be Same', 'Please select a valid date range.');
            return _context89.abrupt("return", false);
          case 21:
            // Calculate the difference in time
            timeDiff = endDate - startDate; // Calculate the difference in days
            dayDiff = timeDiff / (1000 * 3600 * 24); // Validate the number of selected days
            if (!(dayDiff > 31)) {
              _context89.next = 26;
              break;
            }
            showAlert('You cannot select more than 31 days.', 'Please select a valid date range.');
            return _context89.abrupt("return", false);
          case 26:
            return _context89.abrupt("return", true);
          case 27:
          case "end":
            return _context89.stop();
        }
      }, _callee77);
    }));
    return _validateDateRange.apply(this, arguments);
  }
  function normalizeDate(date) {
    var normalizedDate = new Date(date);
    normalizedDate.setMilliseconds(0); // Remove milliseconds
    normalizedDate.setSeconds(0); // Ignore seconds as well
    return normalizedDate;
  }

  // Reusable function to check data availability and display message
  function checkDataAvailability(scopeValues, elementId) {
    if (scopeValues.length === 0 || scopeValues.every(function (value) {
      return value === 0 || value === null;
    })) {
      // Show a message when no data is available or all values are 0
      document.querySelector("#".concat(elementId)).innerHTML = "<p style='text-align: center; display: flex; justify-content: center; align-items: center; height: 100%;'>No data available</p>";
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
  function clearDateInputs() {
    return _clearDateInputs.apply(this, arguments);
  }
  function _clearDateInputs() {
    _clearDateInputs = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee78() {
      return _regeneratorRuntime().wrap(function _callee78$(_context90) {
        while (1) switch (_context90.prev = _context90.next) {
          case 0:
            $('#startDate').val(''); // Clear start date
            $('#endDate').val(''); // Clear end date
          case 2:
          case "end":
            return _context90.stop();
        }
      }, _callee78);
    }));
    return _clearDateInputs.apply(this, arguments);
  }
  function clearDateInputsWater() {
    return _clearDateInputsWater.apply(this, arguments);
  }
  function _clearDateInputsWater() {
    _clearDateInputsWater = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee79() {
      return _regeneratorRuntime().wrap(function _callee79$(_context91) {
        while (1) switch (_context91.prev = _context91.next) {
          case 0:
            $('#startDateWater').val(''); // Clear start date
            $('#endDateWater').val(''); // Clear end date
          case 2:
          case "end":
            return _context91.stop();
        }
      }, _callee79);
    }));
    return _clearDateInputsWater.apply(this, arguments);
  }
  function clearDateInputsPower() {
    return _clearDateInputsPower.apply(this, arguments);
  }
  function _clearDateInputsPower() {
    _clearDateInputsPower = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee80() {
      return _regeneratorRuntime().wrap(function _callee80$(_context92) {
        while (1) switch (_context92.prev = _context92.next) {
          case 0:
            $("#startDatePower").val('');
            $("#endDatePower").val('');
          case 2:
          case "end":
            return _context92.stop();
        }
      }, _callee80);
    }));
    return _clearDateInputsPower.apply(this, arguments);
  }
  function clearDateInputsOccupancy() {
    return _clearDateInputsOccupancy.apply(this, arguments);
  }
  function _clearDateInputsOccupancy() {
    _clearDateInputsOccupancy = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee81() {
      return _regeneratorRuntime().wrap(function _callee81$(_context93) {
        while (1) switch (_context93.prev = _context93.next) {
          case 0:
            $("#startDateOccupancy").val('');
            $("#endDateOccupancy").val('');
          case 2:
          case "end":
            return _context93.stop();
        }
      }, _callee81);
    }));
    return _clearDateInputsOccupancy.apply(this, arguments);
  }
  function clearDateInputsAqi() {
    return _clearDateInputsAqi.apply(this, arguments);
  }
  function _clearDateInputsAqi() {
    _clearDateInputsAqi = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee82() {
      return _regeneratorRuntime().wrap(function _callee82$(_context94) {
        while (1) switch (_context94.prev = _context94.next) {
          case 0:
            $("#startDateIAQ").val('');
            $("#endDateIAQ").val('');
          case 2:
          case "end":
            return _context94.stop();
        }
      }, _callee82);
    }));
    return _clearDateInputsAqi.apply(this, arguments);
  }
  function clearDateInputsEpi() {
    return _clearDateInputsEpi.apply(this, arguments);
  }
  function _clearDateInputsEpi() {
    _clearDateInputsEpi = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee83() {
      return _regeneratorRuntime().wrap(function _callee83$(_context95) {
        while (1) switch (_context95.prev = _context95.next) {
          case 0:
            $("#startDateEPI").val('');
            $("#endDateEPI").val('');
          case 2:
          case "end":
            return _context95.stop();
        }
      }, _callee83);
    }));
    return _clearDateInputsEpi.apply(this, arguments);
  }
});
