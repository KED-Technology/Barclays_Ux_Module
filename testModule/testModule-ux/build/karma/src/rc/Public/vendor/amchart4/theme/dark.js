var cov_2dxmxxxvct = function () {
  var path = "C:\\Development\\TestModule\\testModule\\testModule-ux\\src\\rc\\Public\\vendor\\amchart4\\theme\\dark.js",
    hash = "a61a81bf73c0f2388ec5fb155f13c1a861cacae1",
    Function = function () {}.constructor,
    global = new Function('return this')(),
    gcv = "__coverage__",
    coverageData = {
      path: "C:\\Development\\TestModule\\testModule\\testModule-ux\\src\\rc\\Public\\vendor\\amchart4\\theme\\dark.js",
      statementMap: {
        "0": {
          start: {
            line: 1,
            column: 0
          },
          end: {
            line: 1,
            column: 1452
          }
        },
        "1": {
          start: {
            line: 1,
            column: 71
          },
          end: {
            line: 1,
            column: 120
          }
        },
        "2": {
          start: {
            line: 1,
            column: 126
          },
          end: {
            line: 1,
            column: 135
          }
        },
        "3": {
          start: {
            line: 1,
            column: 138
          },
          end: {
            line: 1,
            column: 147
          }
        },
        "4": {
          start: {
            line: 1,
            column: 150
          },
          end: {
            line: 1,
            column: 1415
          }
        },
        "5": {
          start: {
            line: 1,
            column: 162
          },
          end: {
            line: 1,
            column: 1414
          }
        },
        "6": {
          start: {
            line: 1,
            column: 1416
          },
          end: {
            line: 1,
            column: 1439
          }
        }
      },
      fnMap: {
        "0": {
          name: "(anonymous_0)",
          decl: {
            start: {
              line: 1,
              column: 42
            },
            end: {
              line: 1,
              column: 43
            }
          },
          loc: {
            start: {
              line: 1,
              column: 57
            },
            end: {
              line: 1,
              column: 1440
            }
          },
          line: 1
        },
        "1": {
          name: "(anonymous_1)",
          decl: {
            start: {
              line: 1,
              column: 150
            },
            end: {
              line: 1,
              column: 151
            }
          },
          loc: {
            start: {
              line: 1,
              column: 161
            },
            end: {
              line: 1,
              column: 1415
            }
          },
          line: 1
        }
      },
      branchMap: {
        "0": {
          loc: {
            start: {
              line: 1,
              column: 162
            },
            end: {
              line: 1,
              column: 1322
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 1,
              column: 162
            },
            end: {
              line: 1,
              column: 196
            }
          }, {
            start: {
              line: 1,
              column: 199
            },
            end: {
              line: 1,
              column: 1321
            }
          }],
          line: 1
        },
        "1": {
          loc: {
            start: {
              line: 1,
              column: 1323
            },
            end: {
              line: 1,
              column: 1414
            }
          },
          type: "binary-expr",
          locations: [{
            start: {
              line: 1,
              column: 1323
            },
            end: {
              line: 1,
              column: 1349
            }
          }, {
            start: {
              line: 1,
              column: 1352
            },
            end: {
              line: 1,
              column: 1413
            }
          }],
          line: 1
        }
      },
      s: {
        "0": 0,
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0,
        "6": 0
      },
      f: {
        "0": 0,
        "1": 0
      },
      b: {
        "0": [0, 0],
        "1": [0, 0]
      },
      _coverageSchema: "332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"
    },
    coverage = global[gcv] || (global[gcv] = {});
  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }
  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();
cov_2dxmxxxvct.s[0]++;
am4internal_webpackJsonp(["356d"], {
  "J7F+": function J7F(t, e, c) {
    "use strict";

    cov_2dxmxxxvct.f[0]++;
    cov_2dxmxxxvct.s[1]++;
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    cov_2dxmxxxvct.s[4]++;
    var b = (cov_2dxmxxxvct.s[2]++, c("aCit")),
      r = (cov_2dxmxxxvct.s[3]++, c("8ZqG")),
      o = function o(t) {
        cov_2dxmxxxvct.f[1]++;
        cov_2dxmxxxvct.s[5]++;
        (cov_2dxmxxxvct.b[0][0]++, Object(b.b)(t, "InterfaceColorSet")) && (cov_2dxmxxxvct.b[0][1]++, t.setFor("stroke", Object(r.c)("#000000")), t.setFor("fill", Object(r.c)("#2b2b2b")), t.setFor("primaryButton", Object(r.c)("#6794dc").lighten(-.2)), t.setFor("primaryButtonHover", Object(r.c)("#6771dc").lighten(-.2)), t.setFor("primaryButtonDown", Object(r.c)("#68dc75").lighten(-.2)), t.setFor("primaryButtonActive", Object(r.c)("#68dc75").lighten(-.2)), t.setFor("primaryButtonText", Object(r.c)("#FFFFFF")), t.setFor("primaryButtonStroke", Object(r.c)("#6794dc")), t.setFor("secondaryButton", Object(r.c)("#3b3b3b")), t.setFor("secondaryButtonHover", Object(r.c)("#3b3b3b").lighten(.1)), t.setFor("secondaryButtonDown", Object(r.c)("#3b3b3b").lighten(.15)), t.setFor("secondaryButtonActive", Object(r.c)("#3b3b3b").lighten(.15)), t.setFor("secondaryButtonText", Object(r.c)("#bbbbbb")), t.setFor("secondaryButtonStroke", Object(r.c)("#3b3b3b").lighten(-.2)), t.setFor("grid", Object(r.c)("#bbbbbb")), t.setFor("background", Object(r.c)("#000000")), t.setFor("alternativeBackground", Object(r.c)("#ffffff")), t.setFor("text", Object(r.c)("#ffffff")), t.setFor("alternativeText", Object(r.c)("#000000")), t.setFor("disabledBackground", Object(r.c)("#bbbbbb"))), (cov_2dxmxxxvct.b[1][0]++, Object(b.b)(t, "Scrollbar")) && (cov_2dxmxxxvct.b[1][1]++, t.background.fillOpacity = .4, t.thumb.background.fillOpacity = .5);
      };
    cov_2dxmxxxvct.s[6]++;
    window.am4themes_dark = o;
  }
}, ["J7F+"]);
