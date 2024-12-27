var cov_2c194nmw8p = function () {
  var path = "C:\\Development\\BarclaysDash\\Barclays-ux\\src\\rc\\Barclays.run.js",
    hash = "e0096eb2faac20c899669c0c1aaa75c8e0cbd147",
    Function = function () {}.constructor,
    global = new Function('return this')(),
    gcv = "__coverage__",
    coverageData = {
      path: "C:\\Development\\BarclaysDash\\Barclays-ux\\src\\rc\\Barclays.run.js",
      statementMap: {
        "0": {
          start: {
            line: 2,
            column: 0
          },
          end: {
            line: 47,
            column: 3
          }
        },
        "1": {
          start: {
            line: 17,
            column: 2
          },
          end: {
            line: 19,
            column: 6
          }
        },
        "2": {
          start: {
            line: 21,
            column: 15
          },
          end: {
            line: 21,
            column: 35
          }
        },
        "3": {
          start: {
            line: 22,
            column: 13
          },
          end: {
            line: 28,
            column: 8
          }
        },
        "4": {
          start: {
            line: 30,
            column: 18
          },
          end: {
            line: 30,
            column: 30
          }
        },
        "5": {
          start: {
            line: 31,
            column: 20
          },
          end: {
            line: 31,
            column: 37
          }
        },
        "6": {
          start: {
            line: 33,
            column: 2
          },
          end: {
            line: 46,
            column: 23
          }
        },
        "7": {
          start: {
            line: 36,
            column: 6
          },
          end: {
            line: 42,
            column: 9
          }
        },
        "8": {
          start: {
            line: 37,
            column: 8
          },
          end: {
            line: 41,
            column: 29
          }
        },
        "9": {
          start: {
            line: 39,
            column: 12
          },
          end: {
            line: 39,
            column: 36
          }
        },
        "10": {
          start: {
            line: 44,
            column: 6
          },
          end: {
            line: 44,
            column: 31
          }
        }
      },
      fnMap: {
        "0": {
          name: "(anonymous_0)",
          decl: {
            start: {
              line: 7,
              column: 56
            },
            end: {
              line: 7,
              column: 57
            }
          },
          loc: {
            start: {
              line: 13,
              column: 19
            },
            end: {
              line: 47,
              column: 1
            }
          },
          line: 13
        },
        "1": {
          name: "(anonymous_1)",
          decl: {
            start: {
              line: 34,
              column: 10
            },
            end: {
              line: 34,
              column: 11
            }
          },
          loc: {
            start: {
              line: 34,
              column: 22
            },
            end: {
              line: 45,
              column: 5
            }
          },
          line: 34
        },
        "2": {
          name: "(anonymous_2)",
          decl: {
            start: {
              line: 36,
              column: 40
            },
            end: {
              line: 36,
              column: 41
            }
          },
          loc: {
            start: {
              line: 36,
              column: 52
            },
            end: {
              line: 42,
              column: 7
            }
          },
          line: 36
        },
        "3": {
          name: "(anonymous_3)",
          decl: {
            start: {
              line: 38,
              column: 16
            },
            end: {
              line: 38,
              column: 17
            }
          },
          loc: {
            start: {
              line: 38,
              column: 33
            },
            end: {
              line: 40,
              column: 11
            }
          },
          line: 38
        }
      },
      branchMap: {},
      s: {
        "0": 0,
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0,
        "6": 0,
        "7": 0,
        "8": 0,
        "9": 0,
        "10": 0
      },
      f: {
        "0": 0,
        "1": 0,
        "2": 0,
        "3": 0
      },
      b: {},
      _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"
    },
    coverage = global[gcv] || (global[gcv] = {});
  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }
  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();
cov_2c194nmw8p.s[0]++;
require(['baja!', 'bajaux/events', 'nmodule/Barclays/rc/Barclays', 'jquery', 'nmodule/Barclays/rc/BarclaysWidget', 'hbs!nmodule/Barclays/rc/template/Barclays'], function (baja, events, Barclays, $, BarclaysWidget, template) {
  'use strict';

  cov_2c194nmw8p.f[0]++;
  cov_2c194nmw8p.s[1]++;
  $("#template").html(template({
    virtues: Barclays.extolVirtues()
  }));
  var widget = (cov_2c194nmw8p.s[2]++, new BarclaysWidget()),
    comp = (cov_2c194nmw8p.s[3]++, baja.$('baja:Component', {
      'whimsical': true,
      'meritorious': true,
      'distinguished': true,
      'sublime': true,
      'resplendent': true
    }));
  var widgetDiv = (cov_2c194nmw8p.s[4]++, $('#widget')),
    description = (cov_2c194nmw8p.s[5]++, $('#description'));
  cov_2c194nmw8p.s[6]++;
  widget.initialize(widgetDiv).then(function () {
    cov_2c194nmw8p.f[1]++;
    cov_2c194nmw8p.s[7]++;
    widgetDiv.on(events.MODIFY_EVENT, function () {
      cov_2c194nmw8p.f[2]++;
      cov_2c194nmw8p.s[8]++;
      widget.read().then(function (value) {
        cov_2c194nmw8p.f[3]++;
        cov_2c194nmw8p.s[9]++;
        description.text(value);
      })["catch"](baja.error);
    });
    cov_2c194nmw8p.s[10]++;
    return widget.load(comp);
  })["catch"](baja.error);
});
