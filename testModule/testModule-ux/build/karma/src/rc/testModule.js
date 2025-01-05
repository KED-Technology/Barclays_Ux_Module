var cov_b0qr4ieds = function () {
  var path = "C:\\Development\\TestModule\\testModule\\testModule-ux\\src\\rc\\testModule.js",
    hash = "85972b24fcf2c443dfb9711bcd43240f6a4ecc9c",
    Function = function () {}.constructor,
    global = new Function('return this')(),
    gcv = "__coverage__",
    coverageData = {
      path: "C:\\Development\\TestModule\\testModule\\testModule-ux\\src\\rc\\testModule.js",
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
            column: 19
          },
          end: {
            line: 9,
            column: 21
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
            column: 34
          }
        },
        "4": {
          start: {
            line: 20,
            column: 2
          },
          end: {
            line: 20,
            column: 20
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
              column: 28
            },
            end: {
              line: 16,
              column: 29
            }
          },
          loc: {
            start: {
              line: 16,
              column: 40
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
cov_b0qr4ieds.s[0]++;
define([], function () {
  'use strict';

  /**
   * Yarr 'tis a module
   *
   * @exports nmodule/testModule/rc/testModule
   */
  cov_b0qr4ieds.f[0]++;
  var testModule = (cov_b0qr4ieds.s[1]++, {});

  /**
   * Extol the virtues of testModule.
   *
   * @returns {string}
   */
  cov_b0qr4ieds.s[2]++;
  testModule.extolVirtues = function () {
    cov_b0qr4ieds.f[1]++;
    cov_b0qr4ieds.s[3]++;
    return 'testModule is great!';
  };
  cov_b0qr4ieds.s[4]++;
  return testModule;
});
