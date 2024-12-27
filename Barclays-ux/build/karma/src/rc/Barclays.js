var cov_nk0a7yavz = function () {
  var path = "C:\\Development\\BarclaysDash\\Barclays-ux\\src\\rc\\Barclays.js",
    hash = "18c0662427f98f9c3c7c7587ec0aff93035c7d74",
    Function = function () {}.constructor,
    global = new Function('return this')(),
    gcv = "__coverage__",
    coverageData = {
      path: "C:\\Development\\BarclaysDash\\Barclays-ux\\src\\rc\\Barclays.js",
      statementMap: {
        "0": {
          start: {
            line: 1,
            column: 0
          },
          end: {
            line: 21,
            column: 3
          }
        },
        "1": {
          start: {
            line: 9,
            column: 17
          },
          end: {
            line: 9,
            column: 19
          }
        },
        "2": {
          start: {
            line: 16,
            column: 2
          },
          end: {
            line: 18,
            column: 4
          }
        },
        "3": {
          start: {
            line: 17,
            column: 4
          },
          end: {
            line: 17,
            column: 32
          }
        },
        "4": {
          start: {
            line: 20,
            column: 2
          },
          end: {
            line: 20,
            column: 18
          }
        }
      },
      fnMap: {
        "0": {
          name: "(anonymous_0)",
          decl: {
            start: {
              line: 1,
              column: 11
            },
            end: {
              line: 1,
              column: 12
            }
          },
          loc: {
            start: {
              line: 1,
              column: 23
            },
            end: {
              line: 21,
              column: 1
            }
          },
          line: 1
        },
        "1": {
          name: "(anonymous_1)",
          decl: {
            start: {
              line: 16,
              column: 26
            },
            end: {
              line: 16,
              column: 27
            }
          },
          loc: {
            start: {
              line: 16,
              column: 38
            },
            end: {
              line: 18,
              column: 3
            }
          },
          line: 16
        }
      },
      branchMap: {},
      s: {
        "0": 0,
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0
      },
      f: {
        "0": 0,
        "1": 0
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
cov_nk0a7yavz.s[0]++;
define([], function () {
  'use strict';

  /**
   * Yarr 'tis a module
   *
   * @exports nmodule/Barclays/rc/Barclays
   */
  cov_nk0a7yavz.f[0]++;
  var Barclays = (cov_nk0a7yavz.s[1]++, {});

  /**
   * Extol the virtues of Barclays.
   *
   * @returns {string}
   */
  cov_nk0a7yavz.s[2]++;
  Barclays.extolVirtues = function () {
    cov_nk0a7yavz.f[1]++;
    cov_nk0a7yavz.s[3]++;
    return 'Barclays is great!';
  };
  cov_nk0a7yavz.s[4]++;
  return Barclays;
});
