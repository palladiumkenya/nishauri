webpackJsonp([1], {
  "/U71": function (i, s) {
  }, "/lbp": function (i, s) {
  }, "1dtz": function (i, s) {
  }, "4HeQ": function (i, s) {
  }, CRUW: function (i, s) {
  }, "DBK+": function (i, s) {
  }, FQuB: function (i, s) {
  }, Gkk4: function (i, s) {
  }, GwGp: function (i, s) {
  }, IcnI: function (i, s, t) {
    "use strict";
    var l = t("NYxO"), a = t("7+uW"), d = t("424j"), c = t("Xxa5"), m = t.n(c), o = t("exGp"), e = t.n(o),
      v = t("mtWM"), n = t.n(v), r = {
        namespaced: !0, state: {user: null, token: null}, getters: {
          isAuthenticated: function (i) {
            return i.user && i.token
          }, user: function (i) {
            return i.user
          }
        }, mutations: {
          setUser: function (i, s) {
            i.user = s
          }, setToken: function (i, s) {
            i.token = s
          }, LogOut: function (i) {
            i.user = null, i.token = null
          }
        }, actions: {
          LogIn: function (i, s) {
            var t = this, l = i.dispatch;
            return e()(m.a.mark(function i() {
              return m.a.wrap(function (i) {
                for (; ;) switch (i.prev = i.next) {
                  case 0:
                    return i.next = 2, n.a.post("api/token/login/", s).then(function (i) {
                      return console.log(i), l("attempt", i.data.auth_token)
                    }).catch(function (i) {
                      return i
                    });
                  case 2:
                  case"end":
                    return i.stop()
                }
              }, i, t)
            }))()
          }, attempt: function (i, s) {
            var t = this, l = i.commit, a = i.state;
            return e()(m.a.mark(function i() {
              return m.a.wrap(function (i) {
                for (; ;) switch (i.prev = i.next) {
                  case 0:
                    if (s && l("setToken", s), a.token) {
                      i.next = 3;
                      break
                    }
                    return i.abrupt("return");
                  case 3:
                    return i.next = 5, n.a.get("api/user/auth").then(function (i) {
                      l("setUser", i.data)
                    }).catch(function () {
                      l("setUser", null), l("setToken", null)
                    });
                  case 5:
                    console.log(s);
                  case 6:
                  case"end":
                    return i.stop()
                }
              }, i, t)
            }))()
          }, LogOut: function (i) {
            var s = this, t = i.commit, l = i.state;
            return e()(m.a.mark(function i() {
              return m.a.wrap(function (i) {
                for (; ;) switch (i.prev = i.next) {
                  case 0:
                    return i.next = 2, n.a.post("api/token/logout/", {Headers: {Authorization: "Token " + l.token}});
                  case 2:
                    t("setUser", null), t("setToken", null), localStorage.removeItem("vuex"), localStorage.removeItem("token");
                  case 6:
                  case"end":
                    return i.stop()
                }
              }, i, s)
            }))()
          }
        }
      };
    a.default.use(l.a);
    s.a = new l.a.Store({modules: {auth: r}, plugins: [Object(d.a)()]})
  }, IsMp: function (i, s) {
  }, JIpG: function (i, s) {
  }, Lqdh: function (i, s) {
  }, M6sP: function (i, s) {
  }, M93x: function (i, s, t) {
    "use strict";
    var l = t("xJD8"), a = t.n(l), d = t("roqg");
    var c = function (i) {
      t("1dtz"), t("FQuB")
    }, m = t("VU/8")(a.a, d.a, !1, c, null, null);
    s.default = m.exports
  }, NHnr: function (i, s, t) {
    "use strict";
    Object.defineProperty(s, "__esModule", {value: !0});
    var l = t("7+uW"), a = t("M93x"), d = t("/ocq"), c = t("IcnI"), m = t("Xxa5"), o = t.n(m), e = t("exGp"),
      v = t.n(e), n = t("UlOv"), r = {
        extends: n.c, props: {
          labels: {
            type: Array, default: function () {
              return ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10", "Day 11", "Day 12", "Day 13"]
            }
          }
        }, data: function () {
          return {gradient: null}
        }, mounted: function () {
          this.gradient = this.$refs.canvas.getContext("2d").createLinearGradient(0, 0, 0, 50), this.gradient.addColorStop(0, "rgba(131, 144, 255, 0.5)"), this.gradient.addColorStop(1, "#fff"), this.renderChart({
            labels: this.labels,
            datasets: [{
              label: "Profit",
              data: [7, 6, 9, 7, 8, 6, 8, 5, 7, 8, 6, 7, 7],
              borderColor: "#6d7cfc",
              backgroundColor: this.gradient,
              borderWidth: 3,
              fill: !0
            }]
          }, {
            scales: {yAxes: [{display: !1}], xAxes: [{display: !1}]},
            legend: {display: !1},
            elements: {point: {radius: 0}, line: {tension: 0}},
            stepsize: 100
          })
        }
      };
    var _ = t("VU/8")(r, null, !1, function (i) {
      t("vFxj")
    }, "data-v-1e2d0830", null).exports, C = {
      extends: n.c, props: {
        labels: {
          type: Array, default: function () {
            return ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10", "Day 11", "Day 12", "Day 13"]
          }
        }
      }, data: function () {
        return {gradient: null}
      }, mounted: function () {
        this.gradient = this.$refs.canvas.getContext("2d").createLinearGradient(0, 0, 0, 50), this.gradient.addColorStop(0, "rgba(131, 144, 255, 0.5)"), this.gradient.addColorStop(1, "#fff"), this.renderChart({
          labels: this.labels,
          datasets: [{
            label: "Profit",
            data: [7, 6, 8, 5, 7, 8, 6, 7, 7, 6, 9, 7, 8],
            borderColor: "#6d7cfc",
            backgroundColor: this.gradient,
            borderWidth: 3,
            fill: !0
          }]
        }, {
          scales: {yAxes: [{display: !1}], xAxes: [{display: !1}]},
          legend: {display: !1},
          elements: {point: {radius: 0}, line: {tension: 0}},
          stepsize: 100
        })
      }
    };
    var g = t("VU/8")(C, null, !1, function (i) {
      t("mJu0")
    }, "data-v-3cec742e", null).exports, u = {
      extends: n.c, props: {
        labels: {
          type: Array, default: function () {
            return ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10", "Day 11", "Day 12", "Day 13"]
          }
        }
      }, data: function () {
        return {gradient: null}
      }, mounted: function () {
        this.gradient = this.$refs.canvas.getContext("2d").createLinearGradient(0, 0, 0, 50), this.gradient.addColorStop(0, "rgba(131, 144, 255, 0.5)"), this.gradient.addColorStop(1, "#fff"), this.renderChart({
          labels: this.labels,
          datasets: [{
            label: "Profit",
            data: [8, 6, 7, 8, 5, 7, 9, 7, 8, 7, 6, 7, 6],
            borderColor: "#6d7cfc",
            backgroundColor: this.gradient,
            borderWidth: 3,
            fill: !0
          }]
        }, {
          scales: {yAxes: [{display: !1}], xAxes: [{display: !1}]},
          legend: {display: !1},
          elements: {point: {radius: 0}, line: {tension: 0}},
          stepsize: 100
        })
      }
    };
    var p = t("VU/8")(u, null, !1, function (i) {
      t("uoS0")
    }, "data-v-7045e686", null).exports, b = {
      extends: n.c, props: {
        labels: {
          type: Array, default: function () {
            return ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10", "Day 11", "Day 12", "Day 13"]
          }
        }
      }, data: function () {
        return {gradient: null}
      }, mounted: function () {
        this.gradient = this.$refs.canvas.getContext("2d").createLinearGradient(0, 0, 0, 50), this.gradient.addColorStop(0, "rgba(131, 144, 255, 0.5)"), this.gradient.addColorStop(1, "#fff"), this.renderChart({
          labels: this.labels,
          datasets: [{
            label: "Profit",
            data: [7, 6, 8, 5, 8, 6, 8, 7, 8, 6, 9, 7, 7],
            borderColor: "#6d7cfc",
            backgroundColor: this.gradient,
            borderWidth: 3,
            fill: !0
          }]
        }, {
          scales: {yAxes: [{display: !1}], xAxes: [{display: !1}]},
          legend: {display: !1},
          elements: {point: {radius: 0}, line: {tension: 0}},
          stepsize: 100
        })
      }
    };
    var h = t("VU/8")(b, null, !1, function (i) {
      t("vaSx")
    }, "data-v-1c84a1af", null).exports, f = t("//Fk"), w = t.n(f), y = t("mtWM"), k = t.n(y), x = {
      extends: n.c, props: {
        labels: {
          type: Array, default: function () {
            return ["Jan 1", "Jan 7", "Jan 14", "Jan 21", "Jan 28", "Feb 4", "Feb 11", "Feb 18"]
          }
        }
      }, data: function () {
        return {gradient: null, gradient2: null, data1: [], data2: [], label: []}
      }, mounted: function () {
        var i = this, s = new w.a(function (s, t) {
          s(i.getLabels())
        });
        console.log(this.getLabels(), this.getLLogin(), s), this.gradient = this.$refs.canvas.getContext("2d").createLinearGradient(0, 0, 0, 450), this.gradient2 = this.$refs.canvas.getContext("2d").createLinearGradient(0, 0, 0, 450), this.gradient.addColorStop(0, "rgba(102,78,235, 0.2)"), this.gradient.addColorStop(1, "rgba(255,255,255, 0.0)"), this.gradient2.addColorStop(0, "rgba(255, 255, 255, 0.01)"), this.gradient2.addColorStop(1, "#14c671"), this.renderChart({
          labels: this.label,
          datasets: [{
            label: "Date Joined",
            data: this.getJoined(),
            borderColor: "#8762e0",
            backgroundColor: this.gradient,
            borderWidth: 2
          }, {
            label: "Last Login",
            data: this.getLLogin(),
            borderColor: "#5ed2a1",
            backgroundColor: this.gradient2,
            borderWidth: 2
          }]
        }, {
          responsive: !0,
          animation: {animateScale: !0, animateRotate: !0},
          elements: {point: {radius: 3, backgroundColor: "#fff"}, line: {tension: 0}},
          layout: {padding: {left: 0, right: 0, top: 0, bottom: 0}},
          legend: !1,
          scales: {
            xAxes: [{display: !1, ticks: {display: !1, beginAtZero: !1}, gridLines: {drawBorder: !1}}],
            yAxes: [{
              ticks: {max: 200, min: 0, stepSize: 50, fontColor: "#858585", beginAtZero: !1},
              gridLines: {color: "#e2e6ec", display: !0, drawBorder: !1}
            }]
          }
        })
      }, computed: {
        getLabel: function () {
          return this.getLabels()
        }
      }, methods: {
        getLabels: function () {
          var i = this;
          return v()(o.a.mark(function s() {
            return o.a.wrap(function (i) {
              for (; ;) switch (i.prev = i.next) {
                case 0:
                  setTimeout(v()(o.a.mark(function i() {
                    var s = this;
                    return o.a.wrap(function (i) {
                      for (; ;) switch (i.prev = i.next) {
                        case 0:
                          return i.next = 2, k.a.get("api/auth/web/dash").then(function (i) {
                            return new w.a(function (t, l) {
                              s.label = i.data.chart.date, t(s.label)
                            })
                          });
                        case 2:
                        case"end":
                          return i.stop()
                      }
                    }, i, this)
                  })), 5e3);
                case 1:
                case"end":
                  return i.stop()
              }
            }, s, i)
          }))()
        }, getLLogin: function () {
          var i = this;
          return v()(o.a.mark(function s() {
            return o.a.wrap(function (i) {
              for (; ;) switch (i.prev = i.next) {
                case 0:
                  setTimeout(v()(o.a.mark(function i() {
                    var s = this;
                    return o.a.wrap(function (i) {
                      for (; ;) switch (i.prev = i.next) {
                        case 0:
                          return i.next = 2, k.a.get("api/auth/web/dash").then(function (i) {
                            return s.data1 = i.data.chart.llogin, i.data.chart.llogin
                          });
                        case 2:
                        case"end":
                          return i.stop()
                      }
                    }, i, this)
                  })), 5e3);
                case 1:
                case"end":
                  return i.stop()
              }
            }, s, i)
          }))()
        }, getJoined: function () {
          var i = this;
          return v()(o.a.mark(function s() {
            return o.a.wrap(function (i) {
              for (; ;) switch (i.prev = i.next) {
                case 0:
                  setTimeout(v()(o.a.mark(function i() {
                    return o.a.wrap(function (i) {
                      for (; ;) switch (i.prev = i.next) {
                        case 0:
                          return i.next = 2, k.a.get("api/auth/web/dash").then(function (i) {
                            return i.data.chart.joined
                          });
                        case 2:
                        case"end":
                          return i.stop()
                      }
                    }, i, this)
                  })), 5e3);
                case 1:
                case"end":
                  return i.stop()
              }
            }, s, i)
          }))()
        }
      }
    };
    var A = t("VU/8")(x, null, !1, function (i) {
      t("TJZn")
    }, "data-v-13b0bfb5", null).exports, D = {
      extends: n.e, data: function () {
        return {
          gradient: null,
          gradient2: null,
          datacollection: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
            datasets: [{
              label: "Sales",
              backgroundColor: "rgba(88, 208, 222,0.8)",
              borderColor: "rgba(88, 208, 222,0.8)",
              borderWidth: 0,
              fill: !0,
              radius: 0,
              pointRadius: 0,
              pointBorderWidth: 0,
              pointBackgroundColor: "rgba(88, 208, 222,0.8)",
              pointHoverRadius: 10,
              pointHitRadius: 5,
              data: [54, 45, 60, 70, 54, 75, 60, 54]
            }, {
              label: "Orders",
              backgroundColor: "rgba(150, 77, 247,1)",
              borderColor: "rgba(150, 77, 247,1)",
              borderWidth: 0,
              fill: !0,
              radius: 0,
              pointRadius: 0,
              pointBorderWidth: 0,
              pointBackgroundColor: "rgba(150, 77, 247,1)",
              pointHoverRadius: 10,
              pointHitRadius: 5,
              data: [65, 75, 70, 80, 60, 80, 36, 60]
            }]
          },
          options: {
            scale: {
              ticks: {beginAtZero: !0, min: 0, max: 100, stepSize: 20, display: !1},
              pointLabels: {fontSize: 14},
              angleLines: {color: "#e9ebf1"},
              gridLines: {color: "#e9ebf1"}
            }, legend: !1
          }
        }
      }, mounted: function () {
        this.gradient = this.$refs.canvas.getContext("2d").createLinearGradient(0, 0, 0, 50), this.gradient2 = this.$refs.canvas.getContext("2d").createLinearGradient(0, 0, 0, 50), this.gradient.addColorStop(0, "rgba(131, 144, 255, 0.5)"), this.gradient.addColorStop(1, "#fff"), this.gradient2.addColorStop(0, "rgba(131, 144, 255, 0.5)"), this.gradient2.addColorStop(1, "#fff"), this.renderChart(this.datacollection, this.options)
      }
    };
    var S = t("VU/8")(D, null, !1, function (i) {
      t("Gkk4")
    }, "data-v-38bbdad4", null).exports, j = {
      extends: n.c, data: function () {
        return {
          gradient: null,
          gradient2: null,
          datacollection: {
            labels: ["Day01", "Day02", "Day03", "Day04", "Day05", "Day06", "Day07", "Day08", "Day09", "Day10", "Day11", "Day12", "Day13", "Day14", "Day15", "Day16", "Day17", "Day18", "Day19", "Day20", "Day21", "Day22", "Day23", "Day24", "Day25", "Day26", "Day27", "Day28", "Day29", "Day30", "Day31", "Day32", "Day33", "Day34", "Day35", "Day36", "Day37", "Day38", "Day39", "Day40", "Day41", "Day42", "Day43", "Day44", "Day45", "Day46", "Day47", "Day48", "Day49", "Day50", "Day51", "Day52", "Day53", "Day54", "Day55", "Day56", "Day57", "Day58", "Day59", "Day60", "Day61", "Day62", "Day63", "Day64", "Day65", "Day66", "Day67", "Day68", "Day69", "Day70", "Day71", "Day72", "Day73", "Day74", "Day75", "Day76", "Day77", "Day78", "Day79", "Day80", "Day81", "Day82"],
            datasets: [{
              label: "Total Revenue",
              data: [56, 55, 59, 59, 59, 57, 56, 57, 54, 56, 58, 57, 59, 58, 59, 57, 55, 56, 54, 52, 49, 48, 50, 50, 46, 45, 49, 50, 52, 53, 52, 55, 54, 53, 56, 55, 56, 55, 54, 55, 57, 58, 56, 55, 56, 57, 58, 59, 58, 57, 55, 53, 52, 55, 57, 55, 54, 52, 55, 57, 56, 57, 58, 59, 58, 59, 57, 56, 55, 57, 58, 59, 60, 62, 60, 59, 58, 57, 56, 57, 56, 58, 59],
              borderColor: "#9B86F1",
              backgroundColor: "#f2f2ff",
              borderWidth: 3,
              fill: "origin"
            }]
          },
          options: {
            scales: {yAxes: [{display: !1}], xAxes: [{display: !1}]},
            legend: {display: !1},
            elements: {point: {radius: 0}, line: {tension: 0}},
            stepsize: 100
          }
        }
      }, mounted: function () {
        this.gradient = this.$refs.canvas.getContext("2d").createLinearGradient(0, 0, 0, 50), this.gradient2 = this.$refs.canvas.getContext("2d").createLinearGradient(0, 0, 0, 50), this.gradient.addColorStop(0, "rgba(131, 144, 255, 0.5)"), this.gradient.addColorStop(1, "#fff"), this.gradient2.addColorStop(0, "rgba(131, 144, 255, 0.5)"), this.gradient2.addColorStop(1, "#fff"), this.renderChart(this.datacollection, this.options)
      }
    };
    var I = t("VU/8")(j, null, !1, function (i) {
      t("QqDh")
    }, "data-v-a487ec7a", null).exports, z = {
      extends: n.a, data: function () {
        return {
          gradient: null,
          gradient2: null,
          datacollection: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
            datasets: [{
              label: "OVERDUE",
              data: [145, 238, 148, 293, 242, 235, 256, 334],
              backgroundColor: "#826af9",
              borderColor: "#826af9",
              borderWidth: 0
            }, {
              label: "SNOOZED",
              data: [330, 380, 230, 400, 309, 430, 340, 310],
              backgroundColor: "#9e86ff",
              borderColor: "#9e86ff",
              borderWidth: 0
            }, {
              label: "COMPLETED",
              data: [375, 440, 284, 450, 386, 480, 400, 365],
              backgroundColor: "#d0aeff",
              borderColor: "#d0aeff",
              borderWidth: 0
            }, {
              label: "OVERDUE",
              data: [425, 480, 324, 490, 426, 520, 440, 405],
              backgroundColor: "#f7d2ff",
              borderColor: "#f7d2ff",
              borderWidth: 0
            }]
          },
          options: {
            responsive: !0,
            maintainAspectRatio: !0,
            layout: {padding: {left: 0, right: 0, top: 20, bottom: 0}},
            scales: {
              yAxes: [{
                ticks: {max: 400, display: !0, beginAtZero: !0, fontColor: "#212529", stepSize: 100},
                gridLines: {display: !1}
              }],
              xAxes: [{
                stacked: !0,
                ticks: {beginAtZero: !0, fontColor: "#212529"},
                gridLines: {color: "#e9ebf1", display: !0},
                barPercentage: .2
              }]
            },
            legend: {display: !1},
            elements: {point: {radius: 0}}
          }
        }
      }, mounted: function () {
        this.gradient = this.$refs.canvas.getContext("2d").createLinearGradient(0, 0, 0, 50), this.gradient2 = this.$refs.canvas.getContext("2d").createLinearGradient(0, 0, 0, 50), this.gradient.addColorStop(0, "rgba(131, 144, 255, 0.5)"), this.gradient.addColorStop(1, "#fff"), this.gradient2.addColorStop(0, "rgba(131, 144, 255, 0.5)"), this.gradient2.addColorStop(1, "#fff"), this.renderChart(this.datacollection, this.options)
      }
    };
    var E = t("VU/8")(z, null, !1, function (i) {
      t("VB5A")
    }, "data-v-d18ba094", null).exports, q = {
      extends: n.c, props: {
        labels: {
          type: Array, default: function () {
            return ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
          }
        }
      }, data: function () {
        return {gradient: null}
      }, mounted: function () {
        this.gradient = this.$refs.canvas.getContext("2d").createLinearGradient(0, 100, 200, 0), this.gradient.addColorStop(0, "#fa5539"), this.gradient.addColorStop(1, "#fa3252"), this.renderChart({
          labels: this.labels,
          datasets: [{
            label: "Sessions",
            data: [320, 280, 300, 280, 300, 270, 350],
            backgroundColor: this.gradient,
            borderColor: "#fa394e",
            borderWidth: 0,
            pointBackgroundColor: this.gradient,
            pointRadius: 7,
            pointBorderWidth: 3,
            pointBorderColor: "#fff",
            pointHoverRadius: 7,
            pointHoverBackgroundColor: "#fa394e",
            pointHoverBorderColor: "#fa394e",
            pointHoverBorderWidth: 2,
            pointHitRadius: 7
          }]
        }, {
          responsive: !0,
          animation: {animateScale: !0, animateRotate: !0},
          elements: {point: {radius: 0}},
          layout: {padding: {left: -10, right: 0, top: 0, bottom: -10}},
          legend: !1,
          scales: {
            xAxes: [{gridLines: {display: !1}, ticks: {display: !1}}],
            yAxes: [{gridLines: {display: !1}, ticks: {display: !1}}]
          }
        })
      }
    };
    var L = t("VU/8")(q, null, !1, function (i) {
      t("xmZW")
    }, "data-v-2f756744", null).exports, U = {
      extends: n.a, data: function () {
        return {
          datacollection: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [{
              label: "Profit",
              data: [330, 380, 230, 400, 309, 530, 340],
              backgroundColor: "#0f5bff",
              borderColor: "#0f5bff",
              borderWidth: 0
            }, {
              label: "Target",
              data: [600, 600, 600, 600, 600, 600, 600],
              backgroundColor: "#e5e9f2",
              borderColor: "#e5e9f2",
              borderWidth: 0
            }]
          },
          options: {
            responsive: !0,
            maintainAspectRatio: !0,
            layout: {padding: {left: 0, right: 25, top: 0, bottom: 0}},
            scales: {
              yAxes: [{display: !1, gridLines: {display: !1}}],
              xAxes: [{
                stacked: !0,
                ticks: {display: !1, beginAtZero: !0, fontColor: "#354168"},
                gridLines: {color: "rgba(0, 0, 0, 0)", display: !1},
                barPercentage: .5
              }]
            },
            legend: {display: !1},
            elements: {point: {radius: 0}}
          }
        }
      }, mounted: function () {
        this.renderChart(this.datacollection, this.options)
      }
    };
    var P = t("VU/8")(U, null, !1, function (i) {
      t("Lqdh")
    }, "data-v-63c088ba", null).exports, R = {
      extends: n.b, data: function () {
        return {
          datacollection: {
            labels: ["Request", "Email"],
            datasets: [{
              data: [80, 34, 100],
              backgroundColor: ["rgb(0,224,147)", "rgb(0,143,251)", "rgb(228,238,243)"],
              borderColor: ["rgb(0,224,147)", "rgb(0,143,251)", "rgb(228,238,243)"]
            }]
          },
          options: {
            cutoutPercentage: 70,
            animationEasing: "easeOutBounce",
            animateRotate: !0,
            animateScale: !1,
            responsive: !0,
            maintainAspectRatio: !0,
            showScale: !0,
            legend: {display: !1},
            layout: {padding: {left: 0, right: 0, top: 0, bottom: 0}}
          }
        }
      }, mounted: function () {
        this.renderChart(this.datacollection, this.options)
      }
    };
    var H = t("VU/8")(R, null, !1, function (i) {
      t("CRUW")
    }, "data-v-348f6178", null).exports, Q = t("7t+N"), B = t.n(Q), F = B.a, J = {
      name: "dashboard",
      data: function () {
        return {app: 0, vl: 0, u: 0, eid: 0, fac: 0}
      },
      components: {
        statsLineGraph1: _,
        statsLineGraph2: g,
        statsLineGraph3: p,
        statsLineGraph4: h,
        salesStatisticsOverview: A,
        netProfit: S,
        totalRevenue: I,
        marketOverviewChart: E,
        totalTransaction: L,
        realtimeStatistics: P,
        usersDoughnutChart: H
      },
      mounted: function () {
        this.getNumbers()
      },
      methods: {
        toggleProBanner: function () {
          F("body").toggleClass("pro-banner-collapse")
        }, getNumbers: function () {
          var i = this;
          return v()(o.a.mark(function s() {
            var t;
            return o.a.wrap(function (s) {
              for (; ;) switch (s.prev = s.next) {
                case 0:
                  return s.next = 2, k.a.get("api/auth/web/dash");
                case 2:
                  t = s.sent, i.vl = t.data.vl_count, i.app = t.data.app_count, i.u = t.data.reg_count, i.fac = t.data.fac_count, i.eid = t.data.eid_count;
                case 8:
                case"end":
                  return s.stop()
              }
            }, s, i)
          }))()
        }
      }
    }, V = {
      render: function () {
        var i = this, s = i.$createElement, t = i._self._c || s;
        return t("section", {staticClass: "dashboard"}, [i._m(0), i._v(" "), t("div", {staticClass: "row"}, [t("div", {staticClass: "col-md-12 grid-margin"}, [t("div", {staticClass: "card"}, [t("div", {staticClass: "card-body"}, [t("div", {staticClass: "row"}, [t("div", {staticClass: "col-lg-3 col-md-6"}, [t("div", {staticClass: "d-flex"}, [t("div", {staticClass: "wrapper"}, [t("h3", {staticClass: "mb-0 font-weight-semibold"}, [i._v(i._s(i.u))]), i._v(" "), t("h5", {staticClass: "mb-0 font-weight-medium text-primary"}, [i._v("Clients Registered")])]), i._v(" "), t("div", {staticClass: "wrapper my-auto ml-auto ml-lg-4"}, [t("stats-line-graph-1", {
          attrs: {
            height: 50,
            width: 100
          }
        })], 1)])]), i._v(" "), t("div", {staticClass: "col-lg-3 col-md-6 mt-md-0 mt-4"}, [t("div", {staticClass: "d-flex"}, [t("div", {staticClass: "wrapper"}, [t("h3", {staticClass: "mb-0 font-weight-semibold"}, [i._v(i._s(i.app))]), i._v(" "), t("h5", {staticClass: "mb-0 font-weight-medium text-primary"}, [i._v("Appointments pulled")])]), i._v(" "), t("div", {staticClass: "wrapper my-auto ml-auto ml-lg-4"}, [t("stats-line-graph-2", {
          attrs: {
            height: 50,
            width: 100
          }
        })], 1)])]), i._v(" "), t("div", {staticClass: "col-lg-3 col-md-6 mt-md-0 mt-4"}, [t("div", {staticClass: "d-flex"}, [t("div", {staticClass: "wrapper"}, [t("h3", {staticClass: "mb-0 font-weight-semibold"}, [i._v(i._s(i.vl))]), i._v(" "), t("h5", {staticClass: "mb-0 font-weight-medium text-primary"}, [i._v("VL Results Pulled")])]), i._v(" "), t("div", {staticClass: "wrapper my-auto ml-auto ml-lg-4"}, [t("stats-line-graph-3", {
          attrs: {
            height: 50,
            width: 100
          }
        })], 1)])]), i._v(" "), t("div", {staticClass: "col-lg-3 col-md-6 mt-md-0 mt-4"}, [t("div", {staticClass: "d-flex"}, [t("div", {staticClass: "wrapper"}, [t("h3", {staticClass: "mb-0 font-weight-semibold"}, [i._v(i._s(i.eid))]), i._v(" "), t("h5", {staticClass: "mb-0 font-weight-medium text-primary"}, [i._v("EID Results Pulled")])]), i._v(" "), t("div", {staticClass: "wrapper my-auto ml-auto ml-lg-4"}, [t("stats-line-graph-4", {
          attrs: {
            height: 50,
            width: 100
          }
        })], 1)])])])])])])]), i._v(" "), t("div", {staticClass: "row"}), i._v(" "), t("div", {staticClass: "row"}, [t("div", {staticClass: "col-md-8"}, [t("div", {staticClass: "row"}, [t("div", {staticClass: "col-md-12 grid-margin stretch-card"}, [t("div", {staticClass: "card"}, [t("div", {staticClass: "card-body"}, [t("h4", {staticClass: "card-title mb-0"}, [i._v("Usage Overview")]), i._v(" "), i._m(1), i._v(" "), t("sales-statistics-overview", {
          staticClass: "mt-5",
          attrs: {height: 170}
        })], 1)])])])]), i._v(" "), t("div", {staticClass: "col-md-4"}, [t("div", {staticClass: "row"}, [t("div", {staticClass: "col-md-12 grid-margin"}, [t("div", {staticClass: "card"}, [t("div", {staticClass: "card-body"}, [t("h4", {staticClass: "card-title mb-4"}, [i._v("World sellings")]), i._v(" "), t("usersDoughnutChart", {attrs: {height: 200}}), i._v(" "), i._m(2)], 1)])])])])])])
      }, staticRenderFns: [function () {
        var i = this.$createElement, s = this._self._c || i;
        return s("div", {staticClass: "row page-title-header"}, [s("div", {staticClass: "col-12"}, [s("div", {staticClass: "page-header"}, [s("h4", {staticClass: "page-title"}, [this._v("Dashboard")])])])])
      }, function () {
        var i = this.$createElement, s = this._self._c || i;
        return s("div", {staticClass: "d-flex flex-column flex-lg-row"}, [s("div", {
          staticClass: "ml-lg-auto",
          attrs: {id: "sales-statistics-legend"}
        }, [s("div", {staticClass: "chartjs-legend"}, [s("ul", [s("li", [s("span", {staticStyle: {"background-color": "#8862e0"}}), this._v("Date Registered")]), this._v(" "), s("li", [s("span", {staticStyle: {"background-color": "#19d895"}}), this._v("Last Login")])])])])])
      }, function () {
        var i = this, s = i.$createElement, t = i._self._c || s;
        return t("div", {staticClass: "wrapper"}, [t("div", {staticClass: "d-flex w-100 pt-2 mt-4"}, [t("p", {staticClass: "mb-0 font-weight-semibold"}, [i._v("California")]), i._v(" "), t("div", {staticClass: "wrapper ml-auto d-flex align-items-center"}, [t("p", {staticClass: "font-weight-semibold mb-0"}, [i._v("26,437")]), i._v(" "), t("p", {staticClass: "ml-1 mb-0"}, [i._v("26%")])])]), i._v(" "), t("div", {staticClass: "d-flex w-100 pt-2"}, [t("p", {staticClass: "mb-0 font-weight-semibold"}, [i._v("Washington")]), i._v(" "), t("div", {staticClass: "wrapper ml-auto d-flex align-items-center"}, [t("p", {staticClass: "font-weight-semibold mb-0"}, [i._v("3252")]), i._v(" "), t("p", {staticClass: "ml-1 mb-0"}, [i._v("64%")])])]), i._v(" "), t("div", {staticClass: "d-flex w-100 pt-2"}, [t("p", {staticClass: "mb-0 font-weight-semibold"}, [i._v("Michigan")]), i._v(" "), t("div", {staticClass: "wrapper ml-auto d-flex align-items-center"}, [t("p", {staticClass: "font-weight-semibold mb-0"}, [i._v("4,987")]), i._v(" "), t("p", {staticClass: "ml-1 mb-0"}, [i._v("30%")])])])])
      }]
    };
    var T = t("VU/8")(J, V, !1, function (i) {
      t("M6sP")
    }, "data-v-10ab92e7", null).exports, O = t("Dd8w"), W = t.n(O), M = t("NYxO"), N = B.a, G = {
      name: "app-header",
      computed: W()({}, Object(M.c)({authenticated: "auth/isAuthenticated", user: "auth/user"})),
      methods: W()({}, Object(M.b)({signOutAction: "auth/LogOut"}), {
        collapedSidebar: function () {
          N("body").toggleClass("sidebar-icon-only")
        }, collapedMobileSidebar: function () {
          N("#sidebar").toggleClass("active")
        }, signOut: function () {
          this.signOutAction(), this.$router.replace({name: "Login"})
        }
      })
    }, X = {
      render: function () {
        var i = this, s = i.$createElement, l = i._self._c || s;
        return l("b-navbar", {
          staticClass: "navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex flex-row",
          attrs: {id: "template-header", toggleable: "md"}
        }, [l("div", {staticClass: "text-center navbar-brand-wrapper d-flex align-items-top justify-content-center"}, [l("router-link", {
          staticClass: "navbar-brand brand-logo",
          attrs: {to: "/"}
        }, [l("img", {
          attrs: {
            src: t("iQH9"),
            alt: "logo"
          }
        })]), i._v(" "), l("router-link", {
          staticClass: "navbar-brand brand-logo-mini",
          attrs: {to: "/"}
        }, [l("img", {
          attrs: {
            src: t("U1Ab"),
            alt: "logo"
          }
        })])], 1), i._v(" "), l("div", {staticClass: "navbar-menu-wrapper d-flex align-items-center ml-auto ml-lg-0"}, [l("button", {
          staticClass: "navbar-toggler navbar-toggler align-self-center",
          attrs: {type: "button"},
          on: {
            click: function (s) {
              return i.collapedSidebar()
            }
          }
        }, [l("span", {staticClass: "mdi mdi-menu"})]), i._v(" "), l("b-navbar-nav", {staticClass: "navbar-nav navbar-nav-left header-links d-none d-md-flex"}), i._v(" "), l("b-navbar-nav", {staticClass: "navbar-nav-right ml-auto"}, [l("form", {
          staticClass: "mr-auto search-form d-none d-md-block",
          attrs: {action: "#"}
        }), i._v(" "), l("b-nav-item-dropdown", {
          staticClass: "preview-list",
          attrs: {right: ""}
        }, [l("template", {slot: "button-content"}), i._v(" "), l("b-dropdown-item", {staticClass: "preview-item"}, [l("div", {staticClass: "preview-thumbnail"}, [l("img", {
          staticClass: "img-sm profile-pic",
          attrs: {src: t("vFrx"), alt: "image"}
        })]), i._v(" "), l("div", {staticClass: "preview-item-content flex-grow py-2"}, [l("p", {staticClass: "preview-subject ellipsis font-weight-medium text-dark"}, [i._v("Marian Garner ")]), i._v(" "), l("p", {staticClass: "font-weight-light small-text"}, [i._v(" The meeting is cancelled ")])])]), i._v(" "), l("b-dropdown-item", {staticClass: "preview-item"}, [l("div", {staticClass: "preview-thumbnail"}, [l("img", {
          staticClass: "img-sm profile-pic",
          attrs: {src: t("ZrvI"), alt: "image"}
        })]), i._v(" "), l("div", {staticClass: "preview-item-content flex-grow py-2"}, [l("p", {staticClass: "preview-subject ellipsis font-weight-medium text-dark"}, [i._v("David Grey")]), i._v(" "), l("p", {staticClass: "font-weight-light small-text"}, [i._v(" The meeting is cancelled ")])])]), i._v(" "), l("b-dropdown-item", {staticClass: "preview-item"}, [l("div", {staticClass: "preview-thumbnail"}, [l("img", {
          staticClass: "img-sm profile-pic",
          attrs: {src: t("fCAC"), alt: "image"}
        })]), i._v(" "), l("div", {staticClass: "preview-item-content flex-grow py-2"}, [l("p", {staticClass: "preview-subject ellipsis font-weight-medium text-dark"}, [i._v("Travis Jenkins")]), i._v(" "), l("p", {staticClass: "font-weight-light small-text"}, [i._v(" The meeting is cancelled ")])])])], 2), i._v(" "), l("b-nav-item-dropdown", {
          staticClass: "preview-list user-dropdown",
          attrs: {right: ""}
        }, [l("template", {slot: "button-content"}, [l("div", {staticClass: "d-flex align-items-center"}, [l("img", {
          staticClass: "img-xs rounded-circle",
          attrs: {src: t("YMoi"), alt: "Profile image"}
        })])]), i._v(" "), l("b-dropdown-item", [l("div", {staticClass: "dropdown-header text-center w-100"}, [l("img", {
          staticClass: "img-md rounded-circle",
          attrs: {src: t("YMoi"), alt: "Profile image"}
        }), i._v(" "), l("p", {staticClass: "mb-1 mt-3 font-weight-semibold"}, [i._v(i._s(i.user.data[0].first_name) + " " + i._s(i.user.data[0].last_name))]), i._v(" "), l("p", {staticClass: "font-weight-light text-muted mb-0"}, [i._v(i._s(i.user.data[0].msisdn))]), i._v(" "), i.user.data[0].CCCNo > 2 ? [l("p", {staticClass: "font-weight-light text-muted mb-0"}, [i._v(i._s(i.user.data[0].current_facility))])] : i._e()], 2)]), i._v(" "), l("b-dropdown-item", [l("button", {
          staticClass: "nav-link",
          on: {
            click: function (s) {
              return s.preventDefault(), i.signOut(s)
            }
          }
        }, [i._v("Sign out")])])], 2)], 1), i._v(" "), l("button", {
          staticClass: "navbar-toggler navbar-toggler-right align-self-center",
          attrs: {type: "button"},
          on: {
            click: function (s) {
              return i.collapedMobileSidebar()
            }
          }
        }, [l("span", {staticClass: "mdi mdi-menu"})])], 1)])
      }, staticRenderFns: []
    };
    var Y = t("VU/8")(G, X, !1, function (i) {
      t("/U71")
    }, "data-v-3e5c98a8", null).exports, Z = (B.a, {
      name: "app-sidebar",
      computed: W()({}, Object(M.c)({authenticated: "auth/isAuthenticated", user: "auth/user"})),
      mounted: function () {
        var i = document.querySelector("body");
        document.querySelectorAll(".sidebar .nav-item").forEach(function (s) {
          s.addEventListener("mouseover", function () {
            i.classList.contains("sidebar-icon-only") && s.classList.add("hover-open")
          }), s.addEventListener("mouseout", function () {
            i.classList.contains("sidebar-icon-only") && s.classList.remove("hover-open")
          })
        })
      }
    }), K = {
      render: function () {
        var i = this, s = i.$createElement, t = i._self._c || s;
        return t("section", {staticClass: "app-sidebar"}, [t("nav", {
          staticClass: "sidebar sidebar-offcanvas",
          attrs: {id: "sidebar"}
        }, [t("ul", {staticClass: "nav"}, [t("li", {staticClass: "nav-item nav-profile"}, [t("a", {
          staticClass: "nav-link",
          attrs: {href: "#"}
        }, [i._m(0), i._v(" "), t("div", {staticClass: "text-wrapper"}, [t("p", {staticClass: "profile-name"}, [i._v(i._s(i.user.data[0].first_name))]), i._v(" "), t("p", {staticClass: "designation"}, [i._v("user")])])])]), i._v(" "), t("li", {staticClass: "nav-item nav-category"}, [i._v("Main Menu")]), i._v(" "), t("li", {staticClass: "nav-item"}, [t("a", {
          directives: [{
            name: "b-toggle",
            rawName: "v-b-toggle",
            value: "dashboard-dropdown",
            expression: "'dashboard-dropdown'"
          }], staticClass: "nav-link"
        }, [t("i", {staticClass: "menu-icon typcn typcn-document-text"}), i._v(" "), t("span", {staticClass: "menu-title"}, [i._v("Dashboard")]), i._v(" "), t("i", {staticClass: "menu-arrow"})]), i._v(" "), t("b-collapse", {attrs: {id: "dashboard-dropdown"}}, [t("ul", {staticClass: "nav flex-column sub-menu"}, [t("li", {staticClass: "nav-item"}, [t("router-link", {
          staticClass: "nav-link",
          attrs: {to: "/"}
        }, [i._v("Dashboard ")])], 1)])])], 1)])])])
      }, staticRenderFns: [function () {
        var i = this.$createElement, s = this._self._c || i;
        return s("div", {staticClass: "profile-image"}, [s("img", {
          staticClass: "img-xs rounded-circle",
          attrs: {src: t("YMoi"), alt: "profile image"}
        }), this._v(" "), s("div", {staticClass: "dot-indicator bg-success"})])
      }]
    };
    var $ = {
      render: function () {
        this.$createElement;
        this._self._c;
        return this._m(0)
      }, staticRenderFns: [function () {
        var i = this.$createElement, s = this._self._c || i;
        return s("section", {staticClass: "app-footer"}, [s("footer", {staticClass: "footer"}, [s("div", {staticClass: "container-fluid clearfix"}, [s("span", {staticClass: "text-muted text-center text-sm-left d-block d-sm-inline-block"}, [this._v("Copyright © "), s("a", {
          attrs: {
            href: "https://www.bootstrapdash.com/",
            target: "_blank"
          }
        }, [this._v("bootstrapdash.com ")]), this._v("2020")]), this._v(" "), s("span", {staticClass: "float-none float-sm-right d-block mt-1 mt-sm-0 text-center"}, [this._v("Free "), s("a", {
          attrs: {
            href: "https://www.bootstrapdash.com/vue-admin-templates/",
            target: "_blank"
          }
        }, [this._v("  vue admin templates ")]), this._v(" from BootstrapDash.com")])])])])
      }]
    };
    var ii = {
      name: "main", components: {
        AppHeader: Y, AppSidebar: t("VU/8")(Z, K, !1, function (i) {
          t("Uko3")
        }, "data-v-1eb97200", null).exports, AppFooter: t("VU/8")({name: "app-footer"}, $, !1, function (i) {
          t("ywDz")
        }, "data-v-13547b93", null).exports
      }
    }, si = {
      render: function () {
        var i = this.$createElement, s = this._self._c || i;
        return s("section", {staticClass: "main-view"}, [s("div", {staticClass: "container-scroller"}, [s("app-header"), this._v(" "), s("div", {staticClass: "container-fluid page-body-wrapper"}, [s("app-sidebar"), this._v(" "), s("div", {staticClass: "main-panel"}, [s("div", {staticClass: "content-wrapper"}, [s("router-view")], 1), this._v(" "), s("app-footer")], 1)], 1)], 1)])
      }, staticRenderFns: []
    };
    var ti = t("VU/8")(ii, si, !1, function (i) {
      t("IsMp")
    }, "data-v-3cc8e24c", null).exports, li = {
      render: function () {
        var i = this, s = i.$createElement, t = i._self._c || s;
        return t("section", {staticClass: "buttons"}, [t("div", {staticClass: "row"}, [t("div", {staticClass: "col-md-6 grid-margin stretch-card"}, [t("div", {staticClass: "card"}, [t("div", {staticClass: "card-body"}, [t("h4", {staticClass: "card-title"}, [i._v("Normal buttons")]), i._v(" "), i._m(0), i._v(" "), t("div", {staticClass: "template-demo"}, [t("b-button", {
          staticClass: "btn-fw",
          attrs: {variant: "primary"}
        }, [i._v("Primary")]), i._v(" "), t("b-button", {
          staticClass: "btn-fw",
          attrs: {variant: "secondary"}
        }, [i._v("Seconday")]), i._v(" "), t("b-button", {
          staticClass: "btn-fw",
          attrs: {variant: "success"}
        }, [i._v("Success")]), i._v(" "), t("b-button", {
          staticClass: "btn-fw",
          attrs: {variant: "danger"}
        }, [i._v("Danger")]), i._v(" "), t("b-button", {
          staticClass: "btn-fw",
          attrs: {variant: "warning"}
        }, [i._v("Warning")]), i._v(" "), t("b-button", {
          staticClass: "btn-fw",
          attrs: {variant: "info"}
        }, [i._v("Info")]), i._v(" "), t("b-button", {
          staticClass: "btn-fw",
          attrs: {variant: "light"}
        }, [i._v("Light")]), i._v(" "), t("b-button", {
          staticClass: "btn-fw",
          attrs: {variant: "dark"}
        }, [i._v("Dark")]), i._v(" "), t("b-button", {
          staticClass: "btn-fw btn-link",
          attrs: {href: "#"}
        }, [i._v("Link")])], 1)])])]), i._v(" "), t("div", {staticClass: "col-md-6 grid-margin stretch-card"}, [t("div", {staticClass: "card"}, [t("div", {staticClass: "card-body"}, [t("h4", {staticClass: "card-title"}, [i._v("Inverse buttons")]), i._v(" "), i._m(1), i._v(" "), t("div", {staticClass: "template-demo"}, [t("b-button", {staticClass: "btn-fw btn-inverse-primary"}, [i._v("Primary")]), i._v(" "), t("b-button", {staticClass: "btn-fw btn-inverse-secondary"}, [i._v("Seconday")]), i._v(" "), t("b-button", {staticClass: "btn-fw btn-inverse-success"}, [i._v("Success")]), i._v(" "), t("b-button", {staticClass: "btn-fw btn-inverse-danger"}, [i._v("Danger")]), i._v(" "), t("b-button", {staticClass: "btn-fw btn-inverse-warning"}, [i._v("Warning")]), i._v(" "), t("b-button", {staticClass: "btn-fw btn-inverse-info"}, [i._v("Info")]), i._v(" "), t("b-button", {staticClass: "btn-fw btn-inverse-light"}, [i._v("Light")]), i._v(" "), t("b-button", {staticClass: "btn-fw btn-inverse-dark"}, [i._v("Dark")]), i._v(" "), t("b-button", {
          staticClass: "btn-fw btn-link",
          attrs: {href: "#"}
        }, [i._v("Link")])], 1)])])]), i._v(" "), t("div", {staticClass: "col-md-6 grid-margin stretch-card"}, [t("div", {staticClass: "card"}, [t("div", {staticClass: "card-body"}, [t("h4", {staticClass: "card-title"}, [i._v("Rounded buttons")]), i._v(" "), i._m(2), i._v(" "), t("div", {staticClass: "template-demo"}, [t("b-button", {
          staticClass: "btn-fw btn-rounded",
          attrs: {variant: "primary"}
        }, [i._v("Primary")]), i._v(" "), t("b-button", {
          staticClass: "btn-fw btn-rounded",
          attrs: {variant: "secondary"}
        }, [i._v("Seconday")]), i._v(" "), t("b-button", {
          staticClass: "btn-fw btn-rounded",
          attrs: {variant: "success"}
        }, [i._v("Success")]), i._v(" "), t("b-button", {
          staticClass: "btn-fw btn-rounded",
          attrs: {variant: "danger"}
        }, [i._v("Danger")]), i._v(" "), t("b-button", {
          staticClass: "btn-fw btn-rounded",
          attrs: {variant: "warning"}
        }, [i._v("Warning")]), i._v(" "), t("b-button", {
          staticClass: "btn-fw btn-rounded",
          attrs: {variant: "info"}
        }, [i._v("Info")]), i._v(" "), t("b-button", {
          staticClass: "btn-fw btn-rounded",
          attrs: {variant: "light"}
        }, [i._v("Light")]), i._v(" "), t("b-button", {
          staticClass: "btn-fw btn-rounded",
          attrs: {variant: "dark"}
        }, [i._v("Dark")]), i._v(" "), t("b-button", {
          staticClass: "btn-fw btn-link btn-rounded",
          attrs: {href: "#"}
        }, [i._v("Link")])], 1)])])]), i._v(" "), t("div", {staticClass: "col-md-6 grid-margin stretch-card"}, [t("div", {staticClass: "card"}, [t("div", {staticClass: "card-body"}, [t("h4", {staticClass: "card-title"}, [i._v("Rounded Inverse buttons")]), i._v(" "), i._m(3), i._v(" "), t("div", {staticClass: "template-demo"}, [t("b-button", {staticClass: "btn-fw btn-inverse-primary btn-rounded"}, [i._v("Primary")]), i._v(" "), t("b-button", {staticClass: "btn-fw btn-inverse-secondary btn-rounded"}, [i._v("Seconday")]), i._v(" "), t("b-button", {staticClass: "btn-fw btn-inverse-success btn-rounded"}, [i._v("Success")]), i._v(" "), t("b-button", {staticClass: "btn-fw btn-inverse-danger btn-rounded"}, [i._v("Danger")]), i._v(" "), t("b-button", {staticClass: "btn-fw btn-inverse-warning btn-rounded"}, [i._v("Warning")]), i._v(" "), t("b-button", {staticClass: "btn-fw btn-inverse-info btn-rounded"}, [i._v("Info")]), i._v(" "), t("b-button", {staticClass: "btn-fw btn-inverse-light btn-rounded"}, [i._v("Light")]), i._v(" "), t("b-button", {staticClass: "btn-fw btn-inverse-dark btn-rounded"}, [i._v("Dark")]), i._v(" "), t("b-button", {
          staticClass: "btn-fw btn-link btn-rounded",
          attrs: {href: "#"}
        }, [i._v("Link")])], 1)])])]), i._v(" "), t("div", {staticClass: "col-md-6 grid-margin stretch-card"}, [t("div", {staticClass: "card"}, [t("div", {staticClass: "card-body"}, [t("h4", {staticClass: "card-title"}, [i._v("Default buttons")]), i._v(" "), t("p", {staticClass: "card-description"}, [i._v("Buttons without fixed width (Auto width)")]), i._v(" "), t("div", {staticClass: "template-demo"}, [t("b-button", {attrs: {variant: "primary"}}, [i._v("Primary")]), i._v(" "), t("b-button", {attrs: {variant: "secondary"}}, [i._v("Seconday")]), i._v(" "), t("b-button", {attrs: {variant: "success"}}, [i._v("Success")]), i._v(" "), t("b-button", {attrs: {variant: "danger"}}, [i._v("Danger")]), i._v(" "), t("b-button", {attrs: {variant: "warning"}}, [i._v("Warning")]), i._v(" "), t("b-button", {attrs: {variant: "info"}}, [i._v("Info")])], 1)]), i._v(" "), t("div", {staticClass: "card-body"}, [t("h4", {staticClass: "card-title"}, [i._v("Outlined buttons")]), i._v(" "), t("div", {staticClass: "template-demo"}, [t("b-button", {attrs: {variant: "outline-primary"}}, [i._v("Primary")]), i._v(" "), t("b-button", {attrs: {variant: "outline-secondary"}}, [i._v("Seconday")]), i._v(" "), t("b-button", {attrs: {variant: "outline-success"}}, [i._v("Success")]), i._v(" "), t("b-button", {attrs: {variant: "outline-danger"}}, [i._v("Danger")]), i._v(" "), t("b-button", {attrs: {variant: "outline-warning"}}, [i._v("Warning")]), i._v(" "), t("b-button", {attrs: {variant: "outline-info"}}, [i._v("Info")])], 1)])])]), i._v(" "), t("div", {staticClass: "col-md-6 grid-margin stretch-card"}, [t("div", {staticClass: "card"}, [t("div", {staticClass: "card-body"}, [t("h4", {staticClass: "card-title"}, [i._v("Button sizes")]), i._v(" "), t("div", {staticClass: "wrapper template-demo"}, [t("b-button", {
          attrs: {
            variant: "light",
            size: "lg"
          }
        }, [i._v("btn-lg")]), i._v(" "), t("b-button", {
          attrs: {
            variant: "primary",
            size: "lg"
          }
        }, [i._v("btn-lg")])], 1), i._v(" "), t("div", {staticClass: "wrapper template-demo"}, [t("b-button", {attrs: {variant: "light"}}, [i._v("btn-md")]), i._v(" "), t("b-button", {attrs: {variant: "primary"}}, [i._v("btn-md")])], 1), i._v(" "), t("div", {staticClass: "wrapper template-demo"}, [t("b-button", {
          attrs: {
            variant: "light",
            size: "sm"
          }
        }, [i._v("btn-sm")]), i._v(" "), t("b-button", {
          attrs: {
            variant: "primary",
            size: "sm"
          }
        }, [i._v("btn-sm")])], 1), i._v(" "), t("div", {staticClass: "wrapper template-demo"}, [t("b-button", {
          attrs: {
            variant: "light",
            size: "xs"
          }
        }, [i._v("btn-xs")]), i._v(" "), t("b-button", {
          attrs: {
            variant: "primary",
            size: "xs"
          }
        }, [i._v("btn-xs")])], 1)]), i._v(" "), t("div", {staticClass: "card-body"}, [t("h4", {staticClass: "card-title"}, [i._v("Icon buttons")]), i._v(" "), t("div", {staticClass: "template-demo"}, [t("b-button", {attrs: {variant: "success"}}, [t("i", {staticClass: "mdi mdi-cloud-download"}), i._v("Upload")]), i._v(" "), t("b-button", {attrs: {variant: "warning"}}, [t("i", {staticClass: "mdi mdi-message-text"}), i._v("Comments")]), i._v(" "), t("b-button", {attrs: {variant: "danger"}}, [t("i", {staticClass: "mdi mdi-upload"}), i._v("Upload")]), i._v(" "), t("b-button", {attrs: {variant: "info"}}, [t("i", {staticClass: "mdi mdi-delete"}), i._v("Delete")]), i._v(" "), t("b-button", {attrs: {variant: "primary"}}, [t("i", {staticClass: "mdi mdi-printer"}), i._v("Print")]), i._v(" "), t("b-button", {attrs: {variant: "dark"}}, [t("i", {staticClass: "mdi mdi-loop"}), i._v("Reset")])], 1)])])]), i._v(" "), t("div", {staticClass: "col-md-6 grid-margin stretch-card"}, [t("div", {staticClass: "card"}, [t("div", {staticClass: "card-body"}, [t("h4", {staticClass: "card-title"}, [i._v("Grouped buttons")]), i._v(" "), t("p", {staticClass: "card-description"}, [i._v("These are the different buttons group component")]), i._v(" "), t("div", {staticClass: "template-demo"}, [t("b-button-group", [t("b-button", {attrs: {variant: "outline-secondary"}}, [i._v("1")]), i._v(" "), t("b-button", {attrs: {variant: "outline-secondary"}}, [i._v("2")]), i._v(" "), t("b-button", {attrs: {variant: "outline-secondary"}}, [i._v("3")])], 1)], 1), i._v(" "), t("div", {staticClass: "template-demo"}, [t("b-button-group", [t("b-button", {attrs: {variant: "success"}}, [i._v("1")]), i._v(" "), t("b-button", {attrs: {variant: "success"}}, [i._v("2")]), i._v(" "), t("b-button", {attrs: {variant: "success"}}, [i._v("3")])], 1)], 1), i._v(" "), t("div", {staticClass: "template-demo"}, [t("b-button-group", [t("b-button", {
          staticClass: "icon-btn",
          attrs: {variant: "outline-secondary"}
        }, [t("i", {staticClass: "mdi mdi-heart-outline"})]), i._v(" "), t("b-button", {
          staticClass: "icon-btn",
          attrs: {variant: "outline-secondary"}
        }, [t("i", {staticClass: "mdi mdi-clock"})]), i._v(" "), t("b-button", {
          staticClass: "icon-btn",
          attrs: {variant: "outline-secondary"}
        }, [t("i", {staticClass: "mdi mdi-border-color"})])], 1)], 1), i._v(" "), t("div", {staticClass: "template-demo"}, [t("b-button-group", [t("b-button", {
          staticClass: "icon-btn",
          attrs: {variant: "danger"}
        }, [t("i", {staticClass: "mdi mdi-heart-outline"})]), i._v(" "), t("b-button", {
          staticClass: "icon-btn",
          attrs: {variant: "danger"}
        }, [t("i", {staticClass: "mdi mdi-clock"})]), i._v(" "), t("b-button", {
          staticClass: "icon-btn",
          attrs: {variant: "danger"}
        }, [t("i", {staticClass: "mdi mdi-border-color"})])], 1)], 1)]), i._v(" "), t("div", {staticClass: "card-body"}, [t("h4", {staticClass: "card-title"}, [i._v("Button toolbar")]), i._v(" "), t("div", {staticClass: "template-demo"}, [t("b-button-toolbar", [t("b-button-group", [t("b-button", {attrs: {variant: "secondary"}}, [i._v("1")]), i._v(" "), t("b-button", {attrs: {variant: "secondary"}}, [i._v("2")]), i._v(" "), t("b-button", {attrs: {variant: "secondary"}}, [i._v("3")])], 1), i._v(" "), t("b-button-group", [t("b-button", {attrs: {variant: "secondary"}}, [i._v("5")]), i._v(" "), t("b-button", {attrs: {variant: "secondary"}}, [i._v("6")])], 1), i._v(" "), t("b-button-group", [t("b-button", {attrs: {variant: "secondary"}}, [i._v("8")])], 1)], 1)], 1), i._v(" "), t("div", {staticClass: "template-demo"}, [t("b-button-toolbar", [t("b-button-group", [t("b-button", {attrs: {variant: "primary"}}, [i._v("1")]), i._v(" "), t("b-button", {attrs: {variant: "primary"}}, [i._v("2")])], 1), i._v(" "), t("b-button-group", [t("b-button", {attrs: {variant: "primary"}}, [i._v("3")]), i._v(" "), t("b-button", {attrs: {variant: "primary"}}, [i._v("4")]), i._v(" "), t("b-button", {attrs: {variant: "primary"}}, [i._v("5")])], 1), i._v(" "), t("b-button-group", [t("b-button", {attrs: {variant: "primary"}}, [i._v("6")])], 1)], 1)], 1), i._v(" "), t("div", {staticClass: "template-demo"}, [t("b-button-toolbar", [t("b-button-group", [t("b-button", {attrs: {variant: "success"}}, [i._v("1")]), i._v(" "), t("b-button", {attrs: {variant: "success"}}, [i._v("2")]), i._v(" "), t("b-button", {attrs: {variant: "success"}}, [i._v("3")])], 1), i._v(" "), t("b-button-group", [t("b-button", {attrs: {variant: "success"}}, [i._v("4")]), i._v(" "), t("b-button", {attrs: {variant: "success"}}, [i._v("5")])], 1), i._v(" "), t("b-button-group", [t("b-button", {attrs: {variant: "success"}}, [i._v("6")])], 1)], 1)], 1)])])]), i._v(" "), t("div", {staticClass: "col-md-6 grid-margin stretch-card"}, [t("div", {staticClass: "card"}, [t("div", {staticClass: "card-body"}, [t("h4", {staticClass: "card-title"}, [i._v("Social Buttons")]), i._v(" "), t("p", {staticClass: "card-description"}, [i._v("These are the different buttons group component")]), i._v(" "), t("div", {staticClass: "template-demo"}, [t("b-button", {
          staticClass: "social-btn",
          attrs: {variant: "primary"}
        }, [t("i", {staticClass: "mdi mdi-facebook"})]), i._v(" "), t("b-button", {
          staticClass: "social-btn",
          attrs: {variant: "info"}
        }, [t("i", {staticClass: "mdi mdi-twitter"})]), i._v(" "), t("b-button", {
          staticClass: "social-btn",
          attrs: {variant: "success"}
        }, [t("i", {staticClass: "mdi mdi-dribbble"})]), i._v(" "), t("b-button", {
          staticClass: "social-btn",
          attrs: {variant: "danger"}
        }, [t("i", {staticClass: "mdi mdi-linkedin"})]), i._v(" "), t("b-button", {
          staticClass: "social-btn",
          attrs: {variant: "warning"}
        }, [t("i", {staticClass: "mdi mdi-google-plus"})]), i._v(" "), t("br"), i._v(" "), t("b-button", {
          staticClass: "social-btn",
          attrs: {variant: "facebook"}
        }, [t("i", {staticClass: "mdi mdi-facebook"})]), i._v(" "), t("b-button", {
          staticClass: "social-btn",
          attrs: {variant: "twitter"}
        }, [t("i", {staticClass: "mdi mdi-twitter"})]), i._v(" "), t("b-button", {
          staticClass: "social-btn",
          attrs: {variant: "dribbble"}
        }, [t("i", {staticClass: "mdi mdi-dribbble"})]), i._v(" "), t("b-button", {
          staticClass: "social-btn",
          attrs: {variant: "linkedin"}
        }, [t("i", {staticClass: "mdi mdi-linkedin"})]), i._v(" "), t("b-button", {
          staticClass: "social-btn",
          attrs: {variant: "google"}
        }, [t("i", {staticClass: "mdi mdi-google-plus"})])], 1)]), i._v(" "), t("div", {staticClass: "card-body"}, [t("h4", {staticClass: "card-title"}, [i._v("Social buttons rounded")]), i._v(" "), t("div", {staticClass: "template-demo"}, [t("b-button", {
          staticClass: "social-btn btn-rounded",
          attrs: {variant: "primary"}
        }, [t("i", {staticClass: "mdi mdi-facebook"})]), i._v(" "), t("b-button", {
          staticClass: "social-btn btn-rounded",
          attrs: {variant: "info"}
        }, [t("i", {staticClass: "mdi mdi-twitter"})]), i._v(" "), t("b-button", {
          staticClass: "social-btn btn-rounded",
          attrs: {variant: "success"}
        }, [t("i", {staticClass: "mdi mdi-dribbble"})]), i._v(" "), t("b-button", {
          staticClass: "social-btn btn-rounded",
          attrs: {variant: "danger"}
        }, [t("i", {staticClass: "mdi mdi-linkedin"})]), i._v(" "), t("b-button", {
          staticClass: "social-btn btn-rounded",
          attrs: {variant: "warning"}
        }, [t("i", {staticClass: "mdi mdi-google-plus"})]), i._v(" "), t("br"), i._v(" "), t("b-button", {
          staticClass: "social-btn btn-rounded",
          attrs: {variant: "facebook"}
        }, [t("i", {staticClass: "mdi mdi-facebook"})]), i._v(" "), t("b-button", {
          staticClass: "social-btn btn-rounded",
          attrs: {variant: "twitter"}
        }, [t("i", {staticClass: "mdi mdi-twitter"})]), i._v(" "), t("b-button", {
          staticClass: "social-btn btn-rounded",
          attrs: {variant: "dribbble"}
        }, [t("i", {staticClass: "mdi mdi-dribbble"})]), i._v(" "), t("b-button", {
          staticClass: "social-btn btn-rounded",
          attrs: {variant: "linkedin"}
        }, [t("i", {staticClass: "mdi mdi-linkedin"})]), i._v(" "), t("b-button", {
          staticClass: "social-btn btn-rounded",
          attrs: {variant: "google"}
        }, [t("i", {staticClass: "mdi mdi-google-plus"})])], 1)])])])])])
      }, staticRenderFns: [function () {
        var i = this.$createElement, s = this._self._c || i;
        return s("p", {staticClass: "card-description"}, [this._v("Use"), s("code", [this._v(" <b-button> ")]), this._v(" for buttons basic buttons")])
      }, function () {
        var i = this.$createElement, s = this._self._c || i;
        return s("p", {staticClass: "card-description"}, [this._v("Use "), s("code", [this._v(".btn-inverse-*")]), this._v(" with "), s("code", [this._v(" <b-button> ")]), this._v(" for inverse styling")])
      }, function () {
        var i = this.$createElement, s = this._self._c || i;
        return s("p", {staticClass: "card-description"}, [this._v("Use "), s("code", [this._v(".btn-rounded")]), this._v(" with "), s("code", [this._v(" <b-button> ")]), this._v(" for rounded buttons")])
      }, function () {
        var i = this.$createElement, s = this._self._c || i;
        return s("p", {staticClass: "card-description"}, [this._v("Use "), s("code", [this._v(".btn-rounded")]), this._v(" with "), s("code", [this._v(" <b-button> ")]), this._v(" for rounded buttons")])
      }]
    };
    var ai = t("VU/8")({name: "buttons"}, li, !1, function (i) {
      t("JIpG")
    }, "data-v-003e4d27", null).exports, di = {
      render: function () {
        var i = this, s = i.$createElement, t = i._self._c || s;
        return t("section", {staticClass: "dropdowns"}, [t("div", {staticClass: "row"}, [t("div", {staticClass: "col-lg-12 grid-margin"}, [t("div", {staticClass: "card"}, [t("div", {staticClass: "card-body"}, [t("h4", {staticClass: "card-title"}, [i._v("Basic dropdown")]), i._v(" "), i._m(0), i._v(" "), t("div", {staticClass: "template-demo"}, [t("b-dropdown", {
          attrs: {
            id: "ddown1",
            text: "Dropdown",
            variant: "primary"
          }
        }, [t("b-dropdown-item", [i._v("Settings")]), i._v(" "), t("b-dropdown-item", [i._v("Action")]), i._v(" "), t("b-dropdown-item", [i._v("Another action")]), i._v(" "), t("b-dropdown-divider"), i._v(" "), t("b-dropdown-item", [i._v("Something else here...")]), i._v(" "), t("b-dropdown-item", {attrs: {disabled: ""}}, [i._v("Disabled action")])], 1), i._v(" "), t("b-dropdown", {
          attrs: {
            id: "ddown2",
            text: "Dropdown",
            variant: "secondary"
          }
        }, [t("b-dropdown-item", [i._v("Settings")]), i._v(" "), t("b-dropdown-item", [i._v("Action")]), i._v(" "), t("b-dropdown-item", [i._v("Another action")]), i._v(" "), t("b-dropdown-divider"), i._v(" "), t("b-dropdown-item", [i._v("Something else here...")]), i._v(" "), t("b-dropdown-item", {attrs: {disabled: ""}}, [i._v("Disabled action")])], 1), i._v(" "), t("b-dropdown", {
          attrs: {
            id: "ddown3",
            text: "Dropdown",
            variant: "danger"
          }
        }, [t("b-dropdown-item", [i._v("Settings")]), i._v(" "), t("b-dropdown-item", [i._v("Action")]), i._v(" "), t("b-dropdown-item", [i._v("Another action")]), i._v(" "), t("b-dropdown-divider"), i._v(" "), t("b-dropdown-item", [i._v("Something else here...")]), i._v(" "), t("b-dropdown-item", {attrs: {disabled: ""}}, [i._v("Disabled action")])], 1), i._v(" "), t("b-dropdown", {
          attrs: {
            id: "ddown4",
            text: "Dropdown",
            variant: "warning"
          }
        }, [t("b-dropdown-item", [i._v("Settings")]), i._v(" "), t("b-dropdown-item", [i._v("Action")]), i._v(" "), t("b-dropdown-item", [i._v("Another action")]), i._v(" "), t("b-dropdown-divider"), i._v(" "), t("b-dropdown-item", [i._v("Something else here...")]), i._v(" "), t("b-dropdown-item", {attrs: {disabled: ""}}, [i._v("Disabled action")])], 1), i._v(" "), t("b-dropdown", {
          attrs: {
            id: "ddown5",
            text: "Dropdown",
            variant: "success"
          }
        }, [t("b-dropdown-item", [i._v("Settings")]), i._v(" "), t("b-dropdown-item", [i._v("Action")]), i._v(" "), t("b-dropdown-item", [i._v("Another action")]), i._v(" "), t("b-dropdown-divider"), i._v(" "), t("b-dropdown-item", [i._v("Something else here...")]), i._v(" "), t("b-dropdown-item", {attrs: {disabled: ""}}, [i._v("Disabled action")])], 1), i._v(" "), t("b-dropdown", {
          attrs: {
            id: "ddown6",
            text: "Dropdown",
            variant: "info"
          }
        }, [t("b-dropdown-item", [i._v("Settings")]), i._v(" "), t("b-dropdown-item", [i._v("Action")]), i._v(" "), t("b-dropdown-item", [i._v("Another action")]), i._v(" "), t("b-dropdown-divider"), i._v(" "), t("b-dropdown-item", [i._v("Something else here...")]), i._v(" "), t("b-dropdown-item", {attrs: {disabled: ""}}, [i._v("Disabled action")])], 1)], 1)]), i._v(" "), t("div", {staticClass: "card-body"}, [t("h4", {staticClass: "card-title"}, [i._v("Dropdown outline")]), i._v(" "), i._m(1), i._v(" "), t("div", {staticClass: "template-demo"}, [t("b-dropdown", {
          attrs: {
            id: "ddown7",
            text: "Dropdown",
            variant: "outline-primary"
          }
        }, [t("b-dropdown-item", [i._v("Settings")]), i._v(" "), t("b-dropdown-item", [i._v("Action")]), i._v(" "), t("b-dropdown-item", [i._v("Another action")]), i._v(" "), t("b-dropdown-divider"), i._v(" "), t("b-dropdown-item", [i._v("Something else here...")]), i._v(" "), t("b-dropdown-item", {attrs: {disabled: ""}}, [i._v("Disabled action")])], 1), i._v(" "), t("b-dropdown", {
          attrs: {
            id: "ddown8",
            text: "Dropdown",
            variant: "outline-secondary"
          }
        }, [t("b-dropdown-item", [i._v("Settings")]), i._v(" "), t("b-dropdown-item", [i._v("Action")]), i._v(" "), t("b-dropdown-item", [i._v("Another action")]), i._v(" "), t("b-dropdown-divider"), i._v(" "), t("b-dropdown-item", [i._v("Something else here...")]), i._v(" "), t("b-dropdown-item", {attrs: {disabled: ""}}, [i._v("Disabled action")])], 1), i._v(" "), t("b-dropdown", {
          attrs: {
            id: "ddown9",
            text: "Dropdown",
            variant: "outline-danger"
          }
        }, [t("b-dropdown-item", [i._v("Settings")]), i._v(" "), t("b-dropdown-item", [i._v("Action")]), i._v(" "), t("b-dropdown-item", [i._v("Another action")]), i._v(" "), t("b-dropdown-divider"), i._v(" "), t("b-dropdown-item", [i._v("Something else here...")]), i._v(" "), t("b-dropdown-item", {attrs: {disabled: ""}}, [i._v("Disabled action")])], 1), i._v(" "), t("b-dropdown", {
          attrs: {
            id: "ddown10",
            text: "Dropdown",
            variant: "outline-warning"
          }
        }, [t("b-dropdown-item", [i._v("Settings")]), i._v(" "), t("b-dropdown-item", [i._v("Action")]), i._v(" "), t("b-dropdown-item", [i._v("Another action")]), i._v(" "), t("b-dropdown-divider"), i._v(" "), t("b-dropdown-item", [i._v("Something else here...")]), i._v(" "), t("b-dropdown-item", {attrs: {disabled: ""}}, [i._v("Disabled action")])], 1), i._v(" "), t("b-dropdown", {
          attrs: {
            id: "ddown11",
            text: "Dropdown",
            variant: "outline-success"
          }
        }, [t("b-dropdown-item", [i._v("Settings")]), i._v(" "), t("b-dropdown-item", [i._v("Action")]), i._v(" "), t("b-dropdown-item", [i._v("Another action")]), i._v(" "), t("b-dropdown-divider"), i._v(" "), t("b-dropdown-item", [i._v("Something else here...")]), i._v(" "), t("b-dropdown-item", {attrs: {disabled: ""}}, [i._v("Disabled action")])], 1), i._v(" "), t("b-dropdown", {
          attrs: {
            id: "ddown12",
            text: "Dropdown",
            variant: "outline-info"
          }
        }, [t("b-dropdown-item", [i._v("Settings")]), i._v(" "), t("b-dropdown-item", [i._v("Action")]), i._v(" "), t("b-dropdown-item", [i._v("Another action")]), i._v(" "), t("b-dropdown-divider"), i._v(" "), t("b-dropdown-item", [i._v("Something else here...")]), i._v(" "), t("b-dropdown-item", {attrs: {disabled: ""}}, [i._v("Disabled action")])], 1)], 1)])])]), i._v(" "), t("div", {staticClass: "col-md-6 grid-margin stretch-card"}, [t("div", {staticClass: "card"}, [t("div", {staticClass: "card-body"}, [t("h4", {staticClass: "card-title"}, [i._v("Split button dropdowns")]), i._v(" "), i._m(2), i._v(" "), t("div", {staticClass: "template-demo"}, [t("b-dropdown", {
          attrs: {
            id: "ddown13",
            split: "",
            text: "Dropdown",
            variant: "outline-primary"
          }
        }, [t("b-dropdown-item", [i._v("Settings")]), i._v(" "), t("b-dropdown-item", [i._v("Action")]), i._v(" "), t("b-dropdown-item", [i._v("Another action")]), i._v(" "), t("b-dropdown-divider"), i._v(" "), t("b-dropdown-item", [i._v("Something else here...")]), i._v(" "), t("b-dropdown-item", {attrs: {disabled: ""}}, [i._v("Disabled action")])], 1), i._v(" "), t("b-dropdown", {
          attrs: {
            id: "ddown14",
            split: "",
            text: "Dropdown",
            variant: "outline-danger"
          }
        }, [t("b-dropdown-item", [i._v("Settings")]), i._v(" "), t("b-dropdown-item", [i._v("Action")]), i._v(" "), t("b-dropdown-item", [i._v("Another action")]), i._v(" "), t("b-dropdown-divider"), i._v(" "), t("b-dropdown-item", [i._v("Something else here...")]), i._v(" "), t("b-dropdown-item", {attrs: {disabled: ""}}, [i._v("Disabled action")])], 1), i._v(" "), t("b-dropdown", {
          attrs: {
            id: "ddown15",
            split: "",
            text: "Dropdown",
            variant: "outline-success"
          }
        }, [t("b-dropdown-item", [i._v("Settings")]), i._v(" "), t("b-dropdown-item", [i._v("Action")]), i._v(" "), t("b-dropdown-item", [i._v("Another action")]), i._v(" "), t("b-dropdown-divider"), i._v(" "), t("b-dropdown-item", [i._v("Something else here...")]), i._v(" "), t("b-dropdown-item", {attrs: {disabled: ""}}, [i._v("Disabled action")])], 1), i._v(" "), t("b-dropdown", {
          attrs: {
            id: "ddown16",
            split: "",
            text: "Dropdown",
            variant: "outline-secondary"
          }
        }, [t("b-dropdown-item", [i._v("Settings")]), i._v(" "), t("b-dropdown-item", [i._v("Action")]), i._v(" "), t("b-dropdown-item", [i._v("Another action")]), i._v(" "), t("b-dropdown-divider"), i._v(" "), t("b-dropdown-item", [i._v("Something else here...")]), i._v(" "), t("b-dropdown-item", {attrs: {disabled: ""}}, [i._v("Disabled action")])], 1), i._v(" "), t("b-dropdown", {
          attrs: {
            id: "ddown17",
            split: "",
            text: "Dropdown",
            variant: "outline-info"
          }
        }, [t("b-dropdown-item", [i._v("Settings")]), i._v(" "), t("b-dropdown-item", [i._v("Action")]), i._v(" "), t("b-dropdown-item", [i._v("Another action")]), i._v(" "), t("b-dropdown-divider"), i._v(" "), t("b-dropdown-item", [i._v("Something else here...")]), i._v(" "), t("b-dropdown-item", {attrs: {disabled: ""}}, [i._v("Disabled action")])], 1), i._v(" "), t("b-dropdown", {
          attrs: {
            id: "ddown18",
            split: "",
            text: "Dropdown",
            variant: "outline-warning"
          }
        }, [t("b-dropdown-item", [i._v("Settings")]), i._v(" "), t("b-dropdown-item", [i._v("Action")]), i._v(" "), t("b-dropdown-item", [i._v("Another action")]), i._v(" "), t("b-dropdown-divider"), i._v(" "), t("b-dropdown-item", [i._v("Something else here...")]), i._v(" "), t("b-dropdown-item", {attrs: {disabled: ""}}, [i._v("Disabled action")])], 1)], 1)])])]), i._v(" "), t("div", {staticClass: "col-md-6 grid-margin stretch-card"}, [t("div", {staticClass: "card"}, [t("div", {staticClass: "card-body"}, [t("h4", {staticClass: "card-title"}, [i._v("Icon dropdowns")]), i._v(" "), t("p", {staticClass: "card-description"}, [i._v("\n              Replace button with icon buttons\n            ")]), i._v(" "), t("div", {staticClass: "template-demo"}, [t("div", {staticClass: "row"}, [t("div", {staticClass: "col-12"}, [t("b-dropdown", {
          attrs: {
            id: "ddown19",
            variant: "warning"
          }
        }, [t("template", {slot: "button-content"}, [t("i", {staticClass: "mdi mdi-earth"})]), i._v(" "), t("b-dropdown-item", [i._v("Settings")]), i._v(" "), t("b-dropdown-item", [i._v("Action")]), i._v(" "), t("b-dropdown-item", [i._v("Another action")]), i._v(" "), t("b-dropdown-divider"), i._v(" "), t("b-dropdown-item", [i._v("Something else here...")]), i._v(" "), t("b-dropdown-item", {attrs: {disabled: ""}}, [i._v("Disabled action")])], 2), i._v(" "), t("b-dropdown", {
          attrs: {
            id: "ddown20",
            variant: "danger"
          }
        }, [t("template", {slot: "button-content"}, [t("i", {staticClass: "mdi mdi-trophy-outline"})]), i._v(" "), t("b-dropdown-item", [i._v("Settings")]), i._v(" "), t("b-dropdown-item", [i._v("Action")]), i._v(" "), t("b-dropdown-item", [i._v("Another action")]), i._v(" "), t("b-dropdown-divider"), i._v(" "), t("b-dropdown-item", [i._v("Something else here...")]), i._v(" "), t("b-dropdown-item", {attrs: {disabled: ""}}, [i._v("Disabled action")])], 2), i._v(" "), t("b-dropdown", {
          attrs: {
            id: "ddown21",
            variant: "secondary"
          }
        }, [t("template", {slot: "button-content"}, [t("i", {staticClass: "mdi mdi-email"})]), i._v(" "), t("b-dropdown-item", [i._v("Settings")]), i._v(" "), t("b-dropdown-item", [i._v("Action")]), i._v(" "), t("b-dropdown-item", [i._v("Another action")]), i._v(" "), t("b-dropdown-divider"), i._v(" "), t("b-dropdown-item", [i._v("Something else here...")]), i._v(" "), t("b-dropdown-item", {attrs: {disabled: ""}}, [i._v("Disabled action")])], 2)], 1)]), i._v(" "), t("div", {staticClass: "row"}, [t("div", {staticClass: "col-12"}, [t("b-dropdown", {
          attrs: {
            id: "ddown22",
            variant: "success"
          }
        }, [t("template", {slot: "button-content"}, [t("i", {staticClass: "mdi mdi-heart"})]), i._v(" "), t("b-dropdown-item", [i._v("Settings")]), i._v(" "), t("b-dropdown-item", [i._v("Action")]), i._v(" "), t("b-dropdown-item", [i._v("Another action")]), i._v(" "), t("b-dropdown-divider"), i._v(" "), t("b-dropdown-item", [i._v("Something else here...")]), i._v(" "), t("b-dropdown-item", {attrs: {disabled: ""}}, [i._v("Disabled action")])], 2), i._v(" "), t("b-dropdown", {
          attrs: {
            id: "ddown23",
            variant: "secondary"
          }
        }, [t("template", {slot: "button-content"}, [t("i", {staticClass: "mdi mdi-logout"})]), i._v(" "), t("b-dropdown-item", [i._v("Settings")]), i._v(" "), t("b-dropdown-item", [i._v("Action")]), i._v(" "), t("b-dropdown-item", [i._v("Another action")]), i._v(" "), t("b-dropdown-divider"), i._v(" "), t("b-dropdown-item", [i._v("Something else here...")]), i._v(" "), t("b-dropdown-item", {attrs: {disabled: ""}}, [i._v("Disabled action")])], 2), i._v(" "), t("b-dropdown", {
          attrs: {
            id: "ddown24",
            variant: "primary"
          }
        }, [t("template", {slot: "button-content"}, [t("i", {staticClass: "mdi mdi-security"})]), i._v(" "), t("b-dropdown-item", [i._v("Settings")]), i._v(" "), t("b-dropdown-item", [i._v("Action")]), i._v(" "), t("b-dropdown-item", [i._v("Another action")]), i._v(" "), t("b-dropdown-divider"), i._v(" "), t("b-dropdown-item", [i._v("Something else here...")]), i._v(" "), t("b-dropdown-item", {attrs: {disabled: ""}}, [i._v("Disabled action")])], 2)], 1)]), i._v(" "), t("div", {staticClass: "row"}, [t("div", {staticClass: "col-12"}, [t("b-dropdown", {
          attrs: {
            id: "ddown25",
            variant: "dark"
          }
        }, [t("template", {slot: "button-content"}, [t("i", {staticClass: "mdi mdi-account"})]), i._v(" "), t("b-dropdown-item", [i._v("Settings")]), i._v(" "), t("b-dropdown-item", [i._v("Action")]), i._v(" "), t("b-dropdown-item", [i._v("Another action")]), i._v(" "), t("b-dropdown-divider"), i._v(" "), t("b-dropdown-item", [i._v("Something else here...")]), i._v(" "), t("b-dropdown-item", {attrs: {disabled: ""}}, [i._v("Disabled action")])], 2), i._v(" "), t("b-dropdown", {
          attrs: {
            id: "ddown26",
            variant: "info"
          }
        }, [t("template", {slot: "button-content"}, [t("i", {staticClass: "mdi mdi-bell"})]), i._v(" "), t("b-dropdown-item", [i._v("Settings")]), i._v(" "), t("b-dropdown-item", [i._v("Action")]), i._v(" "), t("b-dropdown-item", [i._v("Another action")]), i._v(" "), t("b-dropdown-divider"), i._v(" "), t("b-dropdown-item", [i._v("Something else here...")]), i._v(" "), t("b-dropdown-item", {attrs: {disabled: ""}}, [i._v("Disabled action")])], 2)], 1)])])])])]), i._v(" "), t("div", {staticClass: "col-lg-6 grid-margin stretch-card"}, [t("div", {staticClass: "card"}, [t("div", {staticClass: "card-body"}, [t("h4", {staticClass: "card-title"}, [i._v("Dropup variation")]), i._v(" "), i._m(3), i._v(" "), t("div", {staticClass: "template-demo"}, [t("b-dropdown", {
          attrs: {
            id: "ddown27",
            split: "",
            dropup: "",
            text: "Drop-Up",
            variant: "primary"
          }
        }, [t("b-dropdown-item", [i._v("Settings")]), i._v(" "), t("b-dropdown-item", [i._v("Action")]), i._v(" "), t("b-dropdown-item", [i._v("Another action")]), i._v(" "), t("b-dropdown-divider"), i._v(" "), t("b-dropdown-item", [i._v("Something else here...")]), i._v(" "), t("b-dropdown-item", {attrs: {disabled: ""}}, [i._v("Disabled action")])], 1), i._v(" "), t("b-dropdown", {
          attrs: {
            id: "ddown28",
            split: "",
            dropup: "",
            text: "Drop-Up",
            variant: "danger"
          }
        }, [t("b-dropdown-item", [i._v("Settings")]), i._v(" "), t("b-dropdown-item", [i._v("Action")]), i._v(" "), t("b-dropdown-item", [i._v("Another action")]), i._v(" "), t("b-dropdown-divider"), i._v(" "), t("b-dropdown-item", [i._v("Something else here...")]), i._v(" "), t("b-dropdown-item", {attrs: {disabled: ""}}, [i._v("Disabled action")])], 1), i._v(" "), t("b-dropdown", {
          attrs: {
            id: "ddown29",
            split: "",
            dropup: "",
            text: "Drop-Up",
            variant: "success"
          }
        }, [t("b-dropdown-item", [i._v("Settings")]), i._v(" "), t("b-dropdown-item", [i._v("Action")]), i._v(" "), t("b-dropdown-item", [i._v("Another action")]), i._v(" "), t("b-dropdown-divider"), i._v(" "), t("b-dropdown-item", [i._v("Something else here...")]), i._v(" "), t("b-dropdown-item", {attrs: {disabled: ""}}, [i._v("Disabled action")])], 1), i._v(" "), t("b-dropdown", {
          attrs: {
            id: "ddown30",
            split: "",
            dropup: "",
            text: "Drop-Up",
            variant: "secondary"
          }
        }, [t("b-dropdown-item", [i._v("Settings")]), i._v(" "), t("b-dropdown-item", [i._v("Action")]), i._v(" "), t("b-dropdown-item", [i._v("Another action")]), i._v(" "), t("b-dropdown-divider"), i._v(" "), t("b-dropdown-item", [i._v("Something else here...")]), i._v(" "), t("b-dropdown-item", {attrs: {disabled: ""}}, [i._v("Disabled action")])], 1), i._v(" "), t("b-dropdown", {
          attrs: {
            id: "ddown31",
            split: "",
            dropup: "",
            text: "Drop-Up",
            variant: "info"
          }
        }, [t("b-dropdown-item", [i._v("Settings")]), i._v(" "), t("b-dropdown-item", [i._v("Action")]), i._v(" "), t("b-dropdown-item", [i._v("Another action")]), i._v(" "), t("b-dropdown-divider"), i._v(" "), t("b-dropdown-item", [i._v("Something else here...")]), i._v(" "), t("b-dropdown-item", {attrs: {disabled: ""}}, [i._v("Disabled action")])], 1), i._v(" "), t("b-dropdown", {
          attrs: {
            id: "ddown32",
            split: "",
            dropup: "",
            text: "Drop-Up",
            variant: "warning"
          }
        }, [t("b-dropdown-item", [i._v("Settings")]), i._v(" "), t("b-dropdown-item", [i._v("Action")]), i._v(" "), t("b-dropdown-item", [i._v("Another action")]), i._v(" "), t("b-dropdown-divider"), i._v(" "), t("b-dropdown-item", [i._v("Something else here...")]), i._v(" "), t("b-dropdown-item", {attrs: {disabled: ""}}, [i._v("Disabled action")])], 1)], 1)])])]), i._v(" "), t("div", {staticClass: "col-lg-6 grid-margin stretch-card"}, [t("div", {staticClass: "card"}, [t("div", {staticClass: "card-body"}, [t("h4", {staticClass: "card-title"}, [i._v("Dropdown sizes")]), i._v(" "), i._m(4), i._v(" "), t("div", {staticClass: "template-demo mt-5"}, [t("b-dropdown", {
          attrs: {
            id: "ddown33",
            size: "lg",
            text: "Dropdown",
            variant: "danger"
          }
        }, [t("b-dropdown-item", [i._v("Settings")]), i._v(" "), t("b-dropdown-item", [i._v("Action")]), i._v(" "), t("b-dropdown-item", [i._v("Another action")]), i._v(" "), t("b-dropdown-divider"), i._v(" "), t("b-dropdown-item", [i._v("Something else here...")]), i._v(" "), t("b-dropdown-item", {attrs: {disabled: ""}}, [i._v("Disabled action")])], 1), i._v(" "), t("b-dropdown", {
          attrs: {
            id: "ddown34",
            text: "Dropdown",
            variant: "danger"
          }
        }, [t("b-dropdown-item", [i._v("Settings")]), i._v(" "), t("b-dropdown-item", [i._v("Action")]), i._v(" "), t("b-dropdown-item", [i._v("Another action")]), i._v(" "), t("b-dropdown-divider"), i._v(" "), t("b-dropdown-item", [i._v("Something else here...")]), i._v(" "), t("b-dropdown-item", {attrs: {disabled: ""}}, [i._v("Disabled action")])], 1), i._v(" "), t("b-dropdown", {
          attrs: {
            id: "ddown35",
            size: "sm",
            text: "Dropdown",
            variant: "danger"
          }
        }, [t("b-dropdown-item", [i._v("Settings")]), i._v(" "), t("b-dropdown-item", [i._v("Action")]), i._v(" "), t("b-dropdown-item", [i._v("Another action")]), i._v(" "), t("b-dropdown-divider"), i._v(" "), t("b-dropdown-item", [i._v("Something else here...")]), i._v(" "), t("b-dropdown-item", {attrs: {disabled: ""}}, [i._v("Disabled action")])], 1)], 1)])])])])])
      }, staticRenderFns: [function () {
        var i = this.$createElement, s = this._self._c || i;
        return s("p", {staticClass: "card-description"}, [this._v("\n              Use "), s("code", [this._v("<b-dropdown>")]), this._v(" tag to use basi dropdown\n            ")])
      }, function () {
        var i = this.$createElement, s = this._self._c || i;
        return s("p", {staticClass: "card-description"}, [this._v("\n              Use "), s("code", [this._v('variant="outline-*"')]), this._v(" for outline styled dropdown\n            ")])
      }, function () {
        var i = this.$createElement, s = this._self._c || i;
        return s("p", {staticClass: "card-description"}, [this._v("\n              Use "), s("code", [this._v("split")]), this._v(" prop for split dropdown\n            ")])
      }, function () {
        var i = this.$createElement, s = this._self._c || i;
        return s("p", {staticClass: "card-description"}, [this._v("\n              Use "), s("code", [this._v("dropup")]), this._v(" prop to use a dropup\n            ")])
      }, function () {
        var i = this.$createElement, s = this._self._c || i;
        return s("p", {staticClass: "card-description"}, [this._v("\n              Use "), s("code", [this._v('size="*"')]), this._v(" for different dropdown sizing\n            ")])
      }]
    };
    var ci = t("VU/8")({name: "dropdowns"}, di, !1, function (i) {
      t("fEMj")
    }, "data-v-aa9276d8", null).exports, mi = {
      render: function () {
        this.$createElement;
        this._self._c;
        return this._m(0)
      }, staticRenderFns: [function () {
        var i = this, s = i.$createElement, t = i._self._c || s;
        return t("section", {staticClass: "typography"}, [t("div", {staticClass: "row"}, [t("div", {staticClass: "col-md-6 grid-margin stretch-card"}, [t("div", {staticClass: "card"}, [t("div", {staticClass: "card-body"}, [t("h4", {staticClass: "card-title"}, [i._v("Headings")]), i._v(" "), t("p", {staticClass: "card-description"}, [i._v("\n            Add tags "), t("code", [i._v("<h1>")]), i._v(" to "), t("code", [i._v("<h6>")]), i._v(" or class "), t("code", [i._v(".h1")]), i._v(" to "), t("code", [i._v(".h6")])]), i._v(" "), t("div", {staticClass: "template-demo"}, [t("h1", [i._v("h1. Heading")]), i._v(" "), t("h2", [i._v("h2. Heading")]), i._v(" "), t("h3", [i._v("h3. Heading")]), i._v(" "), t("h4", [i._v("h4. Heading")]), i._v(" "), t("h5", [i._v("h5. Heading")]), i._v(" "), t("h6", [i._v("h6. Heading")])])])])]), i._v(" "), t("div", {staticClass: "col-md-6 grid-margin stretch-card"}, [t("div", {staticClass: "card"}, [t("div", {staticClass: "card-body"}, [t("h4", {staticClass: "card-title"}, [i._v("Headings with secondary text")]), i._v(" "), t("p", {staticClass: "card-description"}, [i._v("\n            Add faded secondary text to headings\n          ")]), i._v(" "), t("div", {staticClass: "template-demo"}, [t("h1", [i._v("\n              h1. Heading\n              "), t("small", {staticClass: "text-muted"}, [i._v("\n                Secondary text\n              ")])]), i._v(" "), t("h2", [i._v("\n              h2. Heading\n              "), t("small", {staticClass: "text-muted"}, [i._v("\n                Secondary text\n              ")])]), i._v(" "), t("h3", [i._v("\n              h3. Heading\n              "), t("small", {staticClass: "text-muted"}, [i._v("\n                Secondary text\n              ")])]), i._v(" "), t("h4", [i._v("\n              h4. Heading\n              "), t("small", {staticClass: "text-muted"}, [i._v("\n                Secondary text\n              ")])]), i._v(" "), t("h5", [i._v("\n              h5. Heading\n              "), t("small", {staticClass: "text-muted"}, [i._v("\n                Secondary text\n              ")])]), i._v(" "), t("h6", [i._v("\n              h6. Heading\n              "), t("small", {staticClass: "text-muted"}, [i._v("\n                Secondary text\n              ")])])])])])]), i._v(" "), t("div", {staticClass: "col-md-6 grid-margin stretch-card"}, [t("div", {staticClass: "card"}, [t("div", {staticClass: "card-body"}, [t("h4", {staticClass: "card-title"}, [i._v("Display headings")]), i._v(" "), t("p", {staticClass: "card-description"}, [i._v("\n            Add class "), t("code", [i._v(".display1")]), i._v(" to "), t("code", [i._v(".display-4")])]), i._v(" "), t("div", {staticClass: "template-demo"}, [t("h1", {staticClass: "display-1"}, [i._v("Display 1")]), i._v(" "), t("h1", {staticClass: "display-2"}, [i._v("Display 2")]), i._v(" "), t("h1", {staticClass: "display-3"}, [i._v("Display 3")]), i._v(" "), t("h1", {staticClass: "display-4"}, [i._v("Display 4")])])])])]), i._v(" "), t("div", {staticClass: "col-md-6 d-flex align-items-stretch"}, [t("div", {staticClass: "row"}, [t("div", {staticClass: "col-md-12 grid-margin stretch-card"}, [t("div", {staticClass: "card"}, [t("div", {staticClass: "card-body"}, [t("h4", {staticClass: "card-title"}, [i._v("Paragraph")]), i._v(" "), t("p", {staticClass: "card-description"}, [i._v("\n                Write text in "), t("code", [i._v("<p>")]), i._v(" tag\n              ")]), i._v(" "), t("p", [i._v("\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,\n                when an unknown printer took a galley not only five centuries,\n              ")])])])]), i._v(" "), t("div", {staticClass: "col-md-12 grid-margin stretch-card"}, [t("div", {staticClass: "card"}, [t("div", {staticClass: "card-body"}, [t("h4", {staticClass: "card-title"}, [i._v("Icon size")]), i._v(" "), t("p", {staticClass: "card-description"}, [i._v("\n                Add class "), t("code", [i._v(".icon-lg")]), i._v(", "), t("code", [i._v(".icon-md")]), i._v(", "), t("code", [i._v(".icon-sm")])]), i._v(" "), t("div", {staticClass: "row"}, [t("div", {staticClass: "col-md-4 d-flex align-items-center"}, [t("div", {staticClass: "d-flex flex-row align-items-center"}, [t("i", {staticClass: "mdi mdi-compass icon-lg text-warning"}), i._v(" "), t("p", {staticClass: "mb-0 ml-1"}, [i._v("\n                      Icon-lg\n                    ")])])]), i._v(" "), t("div", {staticClass: "col-md-4 d-flex align-items-center"}, [t("div", {staticClass: "d-flex flex-row align-items-center"}, [t("i", {staticClass: "mdi mdi-compass icon-md text-success"}), i._v(" "), t("p", {staticClass: "mb-0 ml-1"}, [i._v("\n                      Icon-md\n                    ")])])]), i._v(" "), t("div", {staticClass: "col-md-4 d-flex align-items-center"}, [t("div", {staticClass: "d-flex flex-row align-items-center"}, [t("i", {staticClass: "mdi mdi-compass icon-sm text-danger"}), i._v(" "), t("p", {staticClass: "mb-0 ml-1"}, [i._v("\n                      Icon-sm\n                    ")])])])])])])])])]), i._v(" "), t("div", {staticClass: "col-md-6 grid-margin stretch-card"}, [t("div", {staticClass: "card"}, [t("div", {staticClass: "card-body"}, [t("h4", {staticClass: "card-title"}, [i._v("Blockquotes")]), i._v(" "), t("p", {staticClass: "card-description"}, [i._v("\n            Wrap content inside"), t("code", [i._v('<blockquote class="blockquote">')])]), i._v(" "), t("blockquote", {staticClass: "blockquote"}, [t("p", {staticClass: "mb-0"}, [i._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.")])])]), i._v(" "), t("div", {staticClass: "card-body"}, [t("blockquote", {staticClass: "blockquote blockquote-primary"}, [t("p", [i._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.")]), i._v(" "), t("footer", {staticClass: "blockquote-footer"}, [i._v("Someone famous in "), t("cite", {attrs: {title: "Source Title"}}, [i._v("Source Title")])])])])])]), i._v(" "), t("div", {staticClass: "col-md-6 grid-margin stretch-card"}, [t("div", {staticClass: "card"}, [t("div", {staticClass: "card-body"}, [t("h4", {staticClass: "card-title"}, [i._v("Address")]), i._v(" "), t("p", {staticClass: "card-description"}, [i._v("\n            Use "), t("code", [i._v("<address>")]), i._v(" tag\n          ")]), i._v(" "), t("div", {staticClass: "row"}, [t("div", {staticClass: "col-md-6"}, [t("address", [t("p", {staticClass: "font-weight-bold"}, [i._v("Victory imc")]), i._v(" "), t("p", [i._v("\n                  695 lsom Ave,\n                ")]), i._v(" "), t("p", [i._v("\n                   Suite 00\n                ")]), i._v(" "), t("p", [i._v("\n                  San Francisco, CA 94107\n                ")])])]), i._v(" "), t("div", {staticClass: "col-md-6"}, [t("address", {staticClass: "text-primary"}, [t("p", {staticClass: "font-weight-bold"}, [i._v("\n                  E-mail\n                ")]), i._v(" "), t("p", {staticClass: "mb-2"}, [i._v("\n                  johndoe@examplemeail.com\n                ")]), i._v(" "), t("p", {staticClass: "font-weight-bold"}, [i._v("\n                  Web Address\n                ")]), i._v(" "), t("p", [i._v("\n                  www.Victory.com\n                ")])])])])]), i._v(" "), t("div", {staticClass: "card-body"}, [t("h4", {staticClass: "card-title"}, [i._v("Lead")]), i._v(" "), t("p", {staticClass: "card-description"}, [i._v("\n            Use class "), t("code", [i._v(".lead")])]), i._v(" "), t("p", {staticClass: "lead"}, [i._v("\n              Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.\n          ")])])])]), i._v(" "), t("div", {staticClass: "col-md-12 grid-margin"}, [t("div", {staticClass: "card"}, [t("div", {staticClass: "card-body"}, [t("h4", {staticClass: "card-title"}, [i._v("Text colors")]), i._v(" "), t("p", {staticClass: "card-description"}, [i._v("\n            Use class "), t("code", [i._v(".text-primary")]), i._v(", "), t("code", [i._v(".text-secondary")]), i._v(" etc. for text in theme colors\n          ")]), i._v(" "), t("div", {staticClass: "row"}, [t("div", {staticClass: "col-md-6"}, [t("p", {staticClass: "text-primary"}, [i._v(".text-primary")]), i._v(" "), t("p", {staticClass: "text-success"}, [i._v(".text-success")]), i._v(" "), t("p", {staticClass: "text-danger"}, [i._v(".text-danger")]), i._v(" "), t("p", {staticClass: "text-warning"}, [i._v(".text-warning")]), i._v(" "), t("p", {staticClass: "text-info"}, [i._v(".text-info")])]), i._v(" "), t("div", {staticClass: "col-md-6"}, [t("p", {staticClass: "text-light bg-dark pl-1"}, [i._v(".text-light")]), i._v(" "), t("p", {staticClass: "text-secondary"}, [i._v(".text-secondary")]), i._v(" "), t("p", {staticClass: "text-dark"}, [i._v(".text-dark")]), i._v(" "), t("p", {staticClass: "text-muted"}, [i._v(".text-muted")]), i._v(" "), t("p", {staticClass: "text-white bg-dark pl-1"}, [i._v(".text-white")])])])])])]), i._v(" "), t("div", {staticClass: "col-md-4 grid-margin stretch-card"}, [t("div", {staticClass: "card"}, [t("div", {staticClass: "card-body"}, [t("h4", {staticClass: "card-title"}, [i._v("Top aligned media")]), i._v(" "), t("div", {staticClass: "media"}, [t("i", {staticClass: "mdi mdi-earth icon-md text-info d-flex align-self-start mr-3"}), i._v(" "), t("div", {staticClass: "media-body"}, [t("p", {staticClass: "card-text"}, [i._v("Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque.")])])])])])]), i._v(" "), t("div", {staticClass: "col-md-4 grid-margin stretch-card"}, [t("div", {staticClass: "card"}, [t("div", {staticClass: "card-body"}, [t("h4", {staticClass: "card-title"}, [i._v("Center aligned media")]), i._v(" "), t("div", {staticClass: "media"}, [t("i", {staticClass: "mdi mdi-earth icon-md text-info d-flex align-self-center mr-3"}), i._v(" "), t("div", {staticClass: "media-body"}, [t("p", {staticClass: "card-text"}, [i._v("Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque.")])])])])])]), i._v(" "), t("div", {staticClass: "col-md-4 grid-margin stretch-card"}, [t("div", {staticClass: "card"}, [t("div", {staticClass: "card-body"}, [t("h4", {staticClass: "card-title"}, [i._v("Bottom aligned media")]), i._v(" "), t("div", {staticClass: "media"}, [t("i", {staticClass: "mdi mdi-earth icon-md text-info d-flex align-self-end mr-3"}), i._v(" "), t("div", {staticClass: "media-body"}, [t("p", {staticClass: "card-text"}, [i._v("Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque.")])])])])])]), i._v(" "), t("div", {staticClass: "col-md-6 grid-margin stretch-card"}, [t("div", {staticClass: "card"}, [t("div", {staticClass: "card-body"}, [t("h4", {staticClass: "card-title"}, [i._v("Highlighted Text")]), i._v(" "), t("p", {staticClass: "card-description"}, [i._v("\n            Wrap the text in "), t("code", [i._v("<mark>")]), i._v(" to highlight text\n          ")]), i._v(" "), t("p", [i._v("\n            It is a long "), t("mark", {staticClass: "bg-warning text-white"}, [i._v("established")]), i._v(" fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution\n          ")])])])]), i._v(" "), t("div", {staticClass: "col-md-6 grid-margin stretch-card"}, [t("div", {staticClass: "card"}, [t("div", {staticClass: "card-body"}, [t("h4", {staticClass: "card-title"}, [i._v("List Unordered")]), i._v(" "), t("ul", [t("li", [i._v("Lorem ipsum dolor sit amet")]), i._v(" "), t("li", [i._v("Consectetur adipiscing elit")]), i._v(" "), t("li", [i._v("Integer molestie lorem at massa")]), i._v(" "), t("li", [i._v("Facilisis in pretium nisl aliquet")]), i._v(" "), t("li", [i._v("Nulla volutpat aliquam velit")])])])])]), i._v(" "), t("div", {staticClass: "col-md-6 grid-margin stretch-card"}, [t("div", {staticClass: "card"}, [t("div", {staticClass: "card-body"}, [t("h4", {staticClass: "card-title"}, [i._v("Bold text")]), i._v(" "), t("p", {staticClass: "card-description"}, [i._v("\n            Use class"), t("code", [i._v(".font-weight-bold")])]), i._v(" "), t("p", [i._v("\n            It is a long "), t("span", {staticClass: "font-weight-bold"}, [i._v("established fact")]), i._v(" that a reader will be distracted by the readable content\n            of a page when looking at its layout. The point of using Lorem Ipsum is that it has a\n            more-or-less normal distribution\n          ")])])])]), i._v(" "), t("div", {staticClass: "col-md-6 grid-margin stretch-card"}, [t("div", {staticClass: "card"}, [t("div", {staticClass: "card-body"}, [t("h4", {staticClass: "card-title"}, [i._v("List Ordered")]), i._v(" "), t("ol", [t("li", [i._v("Lorem ipsum dolor sit amet")]), i._v(" "), t("li", [i._v("Consectetur adipiscing elit")]), i._v(" "), t("li", [i._v("Integer molestie lorem at massa")]), i._v(" "), t("li", [i._v("Facilisis in pretium nisl aliquet")]), i._v(" "), t("li", [i._v("Nulla volutpat aliquam velit>")])])])])]), i._v(" "), t("div", {staticClass: "col-md-6 grid-margin stretch-card"}, [t("div", {staticClass: "card"}, [t("div", {staticClass: "card-body"}, [t("h4", {staticClass: "card-title text-primary"}, [i._v("Underline")]), i._v(" "), t("p", {staticClass: "card-description"}, [i._v("\n            Wrap in "), t("code", [i._v("<u>")]), i._v(" tag for underline\n          ")]), i._v(" "), t("p", [t("u", [i._v("lorem ipsum dolor sit amet, consectetur\n              mod tempor incididunt ut labore et dolore\n              magna aliqua.")])])]), i._v(" "), t("div", {staticClass: "card-body"}, [t("h4", {staticClass: "card-title text-danger"}, [i._v("Lowercase")]), i._v(" "), t("p", {staticClass: "card-description"}, [i._v("\n            Use class "), t("code", [i._v(".text-lowercase")])]), i._v(" "), t("p", {staticClass: "text-lowercase"}, [i._v("\n            lorem ipsum dolor sit amet, consectetur\n              mod tempor incididunt ut labore et dolore\n              magna aliqua.\n          ")])]), i._v(" "), t("div", {staticClass: "card-body"}, [t("h4", {staticClass: "card-title text-warning"}, [i._v("Uppercase")]), i._v(" "), t("p", {staticClass: "card-description"}, [i._v("\n            Use class "), t("code", [i._v(".text-uppercase")])]), i._v(" "), t("p", {staticClass: "text-uppercase"}, [i._v("\n            lorem ipsum dolor sit amet, consectetur\n              mod tempor incididunt ut labore et dolore\n              magna aliqua.\n          ")])])])]), i._v(" "), t("div", {staticClass: "col-md-6 grid-margin stretch-card"}, [t("div", {staticClass: "card"}, [t("div", {staticClass: "card-body"}, [t("h4", {staticClass: "card-title"}, [i._v("Mute")]), i._v(" "), t("p", {staticClass: "card-description"}, [i._v("\n            Use class "), t("code", [i._v(".text-muted")])]), i._v(" "), t("p", {staticClass: "text-muted"}, [i._v("\n            lorem ipsum dolor sit amet, consectetur\n              mod tempor incididunt ut labore et dolore\n              magna aliqua.\n          ")])]), i._v(" "), t("div", {staticClass: "card-body"}, [t("h4", {staticClass: "card-title text-success"}, [i._v("Strike")]), i._v(" "), t("p", {staticClass: "card-description"}, [i._v("\n            Wrap content in "), t("code", [i._v("<del>")]), i._v(" tag\n          ")]), i._v(" "), t("p", [t("del", [i._v("\n              lorem ipsum dolor sit amet, consectetur\n              mod tempor incididunt ut labore et dolore\n              magna aliqua.\n            ")])])]), i._v(" "), t("div", {staticClass: "card-body"}, [t("h4", {staticClass: "card-title text-info"}, [i._v("Capitalized")]), i._v(" "), t("p", {staticClass: "card-description"}, [i._v("\n            Use class "), t("code", [i._v(".text-capitalize")])]), i._v(" "), t("p", {staticClass: "text-capitalize"}, [i._v("\n            lorem ipsum dolor sit amet, consectetur\n              mod tempor incididunt ut labore et dolore\n              magna aliqua.\n          ")])])])]), i._v(" "), t("div", {staticClass: "col-md-4 grid-margin stretch-card"}, [t("div", {staticClass: "card"}, [t("div", {staticClass: "card-body"}, [t("h4", {staticClass: "card-title"}, [i._v("List with icon")]), i._v(" "), t("p", {staticClass: "card-description"}, [i._v("Add class "), t("code", [i._v(".list-ticked")]), i._v(" to "), t("code", [i._v("<ul>")])]), i._v(" "), t("ul", {staticClass: "list-ticked"}, [t("li", [i._v("Lorem ipsum dolor sit amet")]), i._v(" "), t("li", [i._v("Consectetur adipiscing elit")]), i._v(" "), t("li", [i._v("Integer molestie lorem at massa")]), i._v(" "), t("li", [i._v("Facilisis in pretium nisl aliquet")]), i._v(" "), t("li", [i._v("Nulla volutpat aliquam velit>")])])])])]), i._v(" "), t("div", {staticClass: "col-md-4 grid-margin stretch-card"}, [t("div", {staticClass: "card"}, [t("div", {staticClass: "card-body"}, [t("h4", {staticClass: "card-title"}, [i._v("List with icon")]), i._v(" "), t("p", {staticClass: "card-description"}, [i._v("Add class "), t("code", [i._v(".list-arrow")]), i._v(" to "), t("code", [i._v("<ul>")])]), i._v(" "), t("ul", {staticClass: "list-arrow"}, [t("li", [i._v("Lorem ipsum dolor sit amet")]), i._v(" "), t("li", [i._v("Consectetur adipiscing elit")]), i._v(" "), t("li", [i._v("Integer molestie lorem at massa")]), i._v(" "), t("li", [i._v("Facilisis in pretium nisl aliquet")]), i._v(" "), t("li", [i._v("Nulla volutpat aliquam velit>")])])])])]), i._v(" "), t("div", {staticClass: "col-md-4 grid-margin stretch-card"}, [t("div", {staticClass: "card"}, [t("div", {staticClass: "card-body"}, [t("h4", {staticClass: "card-title"}, [i._v("List with icon")]), i._v(" "), t("p", {staticClass: "card-description"}, [i._v("Add class "), t("code", [i._v(".list-star")]), i._v(" to "), t("code", [i._v("<ul>")])]), i._v(" "), t("ul", {staticClass: "list-star"}, [t("li", [i._v("Lorem ipsum dolor sit amet")]), i._v(" "), t("li", [i._v("Consectetur adipiscing elit")]), i._v(" "), t("li", [i._v("Integer molestie lorem at massa")]), i._v(" "), t("li", [i._v("Facilisis in pretium nisl aliquet")]), i._v(" "), t("li", [i._v("Nulla volutpat aliquam velit>")])])])])])])])
      }]
    };
    var oi = t("VU/8")({name: "typography"}, mi, !1, function (i) {
      t("4HeQ")
    }, "data-v-6be011d0", null).exports, ei = {
      extends: n.c, data: function () {
        return {
          datacollection: {
            labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6"],
            datasets: [{
              label: "# of Votes",
              data: [10, 19, 3, 5, 2, 3],
              borderColor: ["rgba(255,99,132,1)"],
              borderWidth: 1,
              fill: !1
            }]
          },
          options: {
            scales: {
              yAxes: [{ticks: {beginAtZero: !0}, gridLines: {display: !1}}],
              xAxes: [{ticks: {beginAtZero: !0}, gridLines: {display: !1}}]
            }, legend: {display: !1}, elements: {point: {radius: 0}}
          }
        }
      }, mounted: function () {
        this.renderChart(this.datacollection, this.options)
      }
    };
    var vi = t("VU/8")(ei, null, !1, function (i) {
      t("GwGp")
    }, "data-v-ece771d6", null).exports, ni = {
      extends: n.a, data: function () {
        return {
          datacollection: {
            labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6"],
            datasets: [{
              label: "# of Votes",
              data: [10, 19, 3, 5, 2, 3],
              backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(255, 159, 64, 0.2)"],
              borderColor: ["rgba(255,99,132,1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)"],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              yAxes: [{ticks: {beginAtZero: !0}, gridLines: {display: !1}}],
              xAxes: [{ticks: {beginAtZero: !0}, gridLines: {display: !1}}]
            }, legend: {display: !1}, elements: {point: {radius: 0}}
          }
        }
      }, mounted: function () {
        this.renderChart(this.datacollection, this.options)
      }
    };
    var ri = t("VU/8")(ni, null, !1, function (i) {
      t("gELe")
    }, "data-v-78075b90", null).exports, _i = {
      extends: n.c, data: function () {
        return {
          datacollection: {
            labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6"],
            datasets: [{
              label: "# of Votes",
              data: [10, 19, 3, 5, 2, 3],
              backgroundColor: ["rgba(255, 99, 132, 0.2)"],
              borderColor: ["rgba(255,99,132,1)"],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              yAxes: [{ticks: {beginAtZero: !0}, gridLines: {display: !1}}],
              xAxes: [{ticks: {beginAtZero: !0}, gridLines: {display: !1}}]
            }, legend: {display: !1}, elements: {point: {radius: 0}}
          }
        }
      }, mounted: function () {
        this.renderChart(this.datacollection, this.options)
      }
    };
    var Ci = t("VU/8")(_i, null, !1, function (i) {
      t("S0Ew")
    }, "data-v-288e982a", null).exports, gi = {
      extends: n.b, data: function () {
        return {
          datacollection: {
            labels: ["Pink", "Blue", "Yellow"],
            datasets: [{
              data: [30, 40, 30],
              backgroundColor: ["rgba(255, 99, 132, 0.5)", "rgba(54, 162, 235, 0.5)", "rgba(255, 206, 86, 0.5)", "rgba(75, 192, 192, 0.5)", "rgba(153, 102, 255, 0.5)", "rgba(255, 159, 64, 0.5)"],
              borderColor: ["rgba(255,99,132,1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)"]
            }]
          }, options: {responsive: !0, animation: {animateScale: !0, animateRotate: !0}}
        }
      }, mounted: function () {
        this.renderChart(this.datacollection, this.options)
      }
    };
    var ui = t("VU/8")(gi, null, !1, function (i) {
      t("bpH4")
    }, "data-v-381c31e8", null).exports, pi = {
      extends: n.d, data: function () {
        return {
          datacollection: {
            labels: ["Pink", "Blue", "Yellow"],
            datasets: [{
              data: [30, 40, 30],
              backgroundColor: ["rgba(255, 99, 132, 0.5)", "rgba(54, 162, 235, 0.5)", "rgba(255, 206, 86, 0.5)", "rgba(75, 192, 192, 0.5)", "rgba(153, 102, 255, 0.5)", "rgba(255, 159, 64, 0.5)"],
              borderColor: ["rgba(255,99,132,1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)"]
            }]
          }, options: {responsive: !0, animation: {animateScale: !0, animateRotate: !0}}
        }
      }, mounted: function () {
        this.renderChart(this.datacollection, this.options)
      }
    };
    var bi = t("VU/8")(pi, null, !1, function (i) {
      t("Zm+o")
    }, "data-v-ea4ad27c", null).exports, hi = {
      extends: n.c, data: function () {
        return {
          datacollection: {
            labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
            datasets: [{
              label: "First Dataset",
              data: [{x: -10, y: 0}, {x: 0, y: 3}, {x: -25, y: 5}, {x: 40, y: 5}],
              backgroundColor: ["rgba(255, 99, 132, 0.2)"],
              borderColor: ["rgba(255,99,132,1)"],
              borderWidth: 1
            }, {
              label: "Second Dataset",
              data: [{x: 10, y: 5}, {x: 20, y: -30}, {x: -25, y: 15}, {x: -10, y: 5}],
              backgroundColor: ["rgba(54, 162, 235, 0.2)"],
              borderColor: ["rgba(54, 162, 235, 1)"],
              borderWidth: 1
            }]
          }, options: {scales: {xAxes: [{type: "linear", position: "bottom"}]}}
        }
      }, mounted: function () {
        this.renderChart(this.datacollection, this.options)
      }
    };
    var fi = {
      name: "chartjs",
      components: {
        lineChart: vi,
        barChart: ri,
        areaChart: Ci,
        doughnutChart: ui,
        pieChart: bi,
        scatterChart: t("VU/8")(hi, null, !1, function (i) {
          t("ltRH")
        }, "data-v-6dce4982", null).exports
      }
    }, wi = {
      render: function () {
        var i = this, s = i.$createElement, t = i._self._c || s;
        return t("section", {staticClass: "chartjs"}, [t("div", {staticClass: "row"}, [t("div", {staticClass: "col-lg-6 grid-margin stretch-card"}, [t("div", {staticClass: "card"}, [t("div", {staticClass: "card-body"}, [t("h4", {staticClass: "card-title"}, [i._v("Line chart")]), i._v(" "), t("line-chart", {attrs: {height: "250"}})], 1)])]), i._v(" "), t("div", {staticClass: "col-lg-6 grid-margin stretch-card"}, [t("div", {staticClass: "card"}, [t("div", {staticClass: "card-body"}, [t("h4", {staticClass: "card-title"}, [i._v("Bar chart")]), i._v(" "), t("bar-chart", {attrs: {height: "250"}})], 1)])])]), i._v(" "), t("div", {staticClass: "row"}, [t("div", {staticClass: "col-lg-6 grid-margin stretch-card"}, [t("div", {staticClass: "card"}, [t("div", {staticClass: "card-body"}, [t("h4", {staticClass: "card-title"}, [i._v("Area chart")]), i._v(" "), t("area-chart", {attrs: {height: "250"}})], 1)])]), i._v(" "), t("div", {staticClass: "col-lg-6 grid-margin stretch-card"}, [t("div", {staticClass: "card"}, [t("div", {staticClass: "card-body"}, [t("h4", {staticClass: "card-title"}, [i._v("Doughnut chart")]), i._v(" "), t("doughnut-chart", {attrs: {height: "200"}})], 1)])])]), i._v(" "), t("div", {staticClass: "row"}, [t("div", {staticClass: "col-lg-6 grid-margin stretch-card"}, [t("div", {staticClass: "card"}, [t("div", {staticClass: "card-body"}, [t("h4", {staticClass: "card-title"}, [i._v("Pie chart")]), i._v(" "), t("pie-chart", {attrs: {height: "200"}})], 1)])]), i._v(" "), t("div", {staticClass: "col-lg-6 grid-margin stretch-card"}, [t("div", {staticClass: "card"}, [t("div", {staticClass: "card-body"}, [t("h4", {staticClass: "card-title"}, [i._v("Scatter chart")]), i._v(" "), t("scatter-chart", {attrs: {height: "200"}})], 1)])])])])
      }, staticRenderFns: []
    };
    var yi = t("VU/8")(fi, wi, !1, function (i) {
      t("zhv1")
    }, "data-v-d091502e", null).exports, ki = {
      render: function () {
        this.$createElement;
        this._self._c;
        return this._m(0)
      }, staticRenderFns: [function () {
        var i = this, s = i.$createElement, t = i._self._c || s;
        return t("section", {staticClass: "mdi-icons"}, [t("div", {staticClass: "row"}, [t("div", {staticClass: "col-lg-12 grid-margin"}, [t("div", {staticClass: "card"}, [t("div", {staticClass: "card-body"}, [t("div", {staticClass: "icons-list row"}, [t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-access-point"}), i._v(" mdi mdi-access-point\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-access-point-network"}), i._v(" mdi mdi-access-point-network\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-account"}), i._v(" mdi mdi-account\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-account-box"}), i._v(" mdi mdi-account-box\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-account-box-outline"}), i._v(" mdi mdi-account-box-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-account-card-details"}), i._v(" mdi mdi-account-card-details\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-account-check"}), i._v(" mdi mdi-account-check\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-account-circle"}), i._v(" mdi mdi-account-circle\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-account-convert"}), i._v(" mdi mdi-account-convert\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-account-key"}), i._v(" mdi mdi-account-key\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-account-location"}), i._v(" mdi mdi-account-location\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-account-minus"}), i._v(" mdi mdi-account-minus\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-account-multiple"}), i._v(" mdi mdi-account-multiple\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-account-multiple-minus"}), i._v(" mdi mdi-account-multiple-minus\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-account-multiple-outline"}), i._v(" mdi mdi-account-multiple-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-account-multiple-plus"}), i._v(" mdi mdi-account-multiple-plus\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-account-network"}), i._v(" mdi mdi-account-network\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-account-off"}), i._v(" mdi mdi-account-off\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-account-outline"}), i._v(" mdi mdi-account-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-account-plus"}), i._v(" mdi mdi-account-plus\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-account-remove"}), i._v(" mdi mdi-account-remove\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-account-search"}), i._v(" mdi mdi-account-search\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-account-settings"}), i._v(" mdi mdi-account-settings\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-account-settings-variant"}), i._v(" mdi mdi-account-settings-variant\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-account-star"}), i._v(" mdi mdi-account-star\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-account-star-variant"}), i._v(" mdi mdi-account-star-variant\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-account-switch"}), i._v(" mdi mdi-account-switch\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-adjust"}), i._v(" mdi mdi-adjust\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-air-conditioner"}), i._v(" mdi mdi-air-conditioner\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-airballoon"}), i._v(" mdi mdi-airballoon\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-airplane"}), i._v(" mdi mdi-airplane\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-airplane-landing"}), i._v(" mdi mdi-airplane-landing\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-airplane-off"}), i._v(" mdi mdi-airplane-off\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-airplane-takeoff"}), i._v(" mdi mdi-airplane-takeoff\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-airplay"}), i._v(" mdi mdi-airplay\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-alarm"}), i._v(" mdi mdi-alarm\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-alarm-check"}), i._v(" mdi mdi-alarm-check\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-alarm-multiple"}), i._v(" mdi mdi-alarm-multiple\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-alarm-off"}), i._v(" mdi mdi-alarm-off\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-alarm-plus"}), i._v(" mdi mdi-alarm-plus\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-album"}), i._v(" mdi mdi-albums\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-alert"}), i._v(" mdi mdi-alert\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-alert-box"}), i._v(" mdi mdi-alert-box\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-alert-circle"}), i._v(" mdi mdi-alert-circle\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-alert-circle-outline"}), i._v(" mdi mdi-alert-circle-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-alert-octagon"}), i._v(" mdi mdi-alert-octagon\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-alert-outline"}), i._v(" mdi mdi-alert-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-alpha"}), i._v(" mdi mdi-alpha\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-alphabetical"}), i._v(" mdi mdi-alphabetical\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-altimeter"}), i._v(" mdi mdi-altimeter\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-amazon"}), i._v(" mdi mdi-amazon\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-amazon-clouddrive"}), i._v(" mdi mdi-amazon-clouddrive\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-ambulance"}), i._v(" mdi mdi-ambulance\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-amplifier"}), i._v(" mdi mdi-amplifier\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-anchor"}), i._v(" mdi mdi-anchor\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-android"}), i._v(" mdi mdi-android\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-android-debug-bridge"}), i._v(" mdi mdi-android-debug-bridge\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-android-studio"}), i._v(" mdi mdi-android-studio\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-animation"}), i._v(" mdi mdi-animation\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-apple"}), i._v(" mdi mdi-apple\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-apple-finder"}), i._v(" mdi mdi-apple-finder\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-apple-ios"}), i._v(" mdi mdi-apple-ios\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-apple-keyboard-caps"}), i._v(" mdi mdi-apple-keyboard-caps\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-apple-keyboard-command"}), i._v(" mdi mdi-apple-keyboard-command\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-apple-keyboard-control"}), i._v(" mdi mdi-apple-keyboard-control\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-apple-keyboard-option"}), i._v(" mdi mdi-apple-keyboard-option\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-apple-keyboard-shift"}), i._v(" mdi mdi-apple-keyboard-shift\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-apple-mobileme "}), i._v(" mdi mdi-apple-mobileme\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-apple-safari"}), i._v(" mdi mdi-apple-safari\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-application"}), i._v(" mdi mdi-application\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-appnet"}), i._v(" mdi mdi-appnet\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-apps"}), i._v(" mdi mdi-apps\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-archive"}), i._v(" mdi mdi-archive\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-arrange-bring-forward"}), i._v(" mdi mdi-arrange-bring-forward\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-arrange-bring-to-front"}), i._v(" mdi mdi-arrange-bring-to-front\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-arrange-send-backward"}), i._v(" mdi mdi-arrange-send-backward\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-arrange-send-to-back"}), i._v(" mdi mdi-arrange-send-to-back\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-arrow-all"}), i._v(" mdi mdi-arrow-all\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-arrow-bottom-left"}), i._v(" mdi mdi-arrow-bottom-left\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-arrow-bottom-right"}), i._v(" mdi mdi-arrow-bottom-right\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-arrow-compress"}), i._v(" mdi mdi-arrow-compress\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-arrow-compress-all"}), i._v(" mdi mdi-arrow-compress-all\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-arrow-down"}), i._v(" mdi mdi-arrow-down\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-arrow-down"}), i._v(" mdi mdi-arrow-down\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-arrow-down-bold-circle"}), i._v(" mdi mdi-arrow-down-bold-circle\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-arrow-down-bold-circle-outline"}), i._v(" mdi mdi-arrow-down-bold-circle-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-arrow-down-bold-hexagon-outline"}), i._v(" mdi mdi-arrow-down-bold-hexagon-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-arrow-down-drop-circle"}), i._v(" mdi mdi-arrow-down-drop-circle\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-arrow-down-drop-circle-outline"}), i._v(" mdi mdi-arrow-down-drop-circle-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-arrow-expand"}), i._v(" mdi mdi-arrow-expand\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-arrow-expand-all"}), i._v(" mdi mdi-arrow-expand-all\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-arrow-left"}), i._v(" mdi mdi-arrow-left\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-arrow-left-bold"}), i._v(" mdi mdi-arrow-left-bold\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-arrow-left-bold-circle"}), i._v(" mdi mdi-arrow-left-bold-circle\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-arrow-left-bold-circle-outline"}), i._v(" mdi mdi-arrow-left-bold-circle-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-arrow-left-bold-hexagon-outline"}), i._v(" mdi mdi-arrow-left-bold-hexagon-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-arrow-left-drop-circle"}), i._v(" mdi mdi-arrow-left-drop-circle\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-arrow-left-drop-circle-outline"}), i._v(" mdi mdi-arrow-left-drop-circle-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-arrow-right"}), i._v(" mdi mdi-arrow-right\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-arrow-right-bold"}), i._v(" mdi mdi-arrow-right-bold\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-arrow-right-bold-circle"}), i._v(" mdi mdi-arrow-right-bold-circle\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-arrow-right-bold-circle-outline"}), i._v(" mdi mdi-arrow-right-bold-circle-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-arrow-right-bold-hexagon-outline"}), i._v(" mdi mdi-arrow-right-bold-hexagon-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-arrow-right-drop-circle"}), i._v(" mdi mdi-arrow-right-drop-circle\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-arrow-right-drop-circle-outline"}), i._v(" mdi mdi-arrow-right-drop-circle-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-arrow-top-left"}), i._v(" mdi mdi-arrow-top-left\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-arrow-top-right"}), i._v(" mdi mdi-arrow-top-right\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-arrow-up"}), i._v(" mdi mdi-arrow-up\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-arrow-up-bold"}), i._v(" mdi mdi-arrow-up-bold\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-arrow-up-bold-circle"}), i._v(" mdi mdi-arrow-up-bold-circle\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-arrow-up-bold-circle-outline"}), i._v(" mdi mdi-arrow-up-bold-circle-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-arrow-up-bold-hexagon-outline"}), i._v(" mdi mdi-arrow-up-bold-hexagon-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-arrow-up-drop-circle"}), i._v(" mdi mdi-arrow-up-drop-circle\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-arrow-up-drop-circle-outline"}), i._v(" mdi mdi-arrow-up-drop-circle-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-assistant"}), i._v(" mdi mdi-assistant\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-at"}), i._v(" mdi mdi-at\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-attachment"}), i._v(" mdi mdi-attachment\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-audiobook"}), i._v(" mdi mdi-audiobook\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-auto-fix"}), i._v(" mdi mdi-auto-fix\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-auto-upload"}), i._v(" mdi mdi-auto-upload\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-autorenew"}), i._v(" mdi mdi-autorenew\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-av-timer"}), i._v(" mdi mdi-av-timer\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-baby"}), i._v(" mdi mdi-baby\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-backburger"}), i._v(" mdi mdi-backburger\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-backspace"}), i._v(" mdi mdi-backspace\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-backup-restore"}), i._v(" mdi mdi-backup-restore\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-bank"}), i._v(" mdi mdi-bank\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-barcode"}), i._v(" mdi mdi-barcode\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-barcode-scan"}), i._v(" mdi mdi-barcode-scan\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-barley"}), i._v(" mdi mdi-barley\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-barrel"}), i._v(" mdi mdi-barrel\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-basecamp"}), i._v(" mdi mdi-basecamp\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-basket"}), i._v(" mdi mdi-basket\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-basket-fill"}), i._v(" mdi mdi-basket-fill\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-basket-unfill"}), i._v(" mdi mdi-basket-unfill\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-battery"}), i._v(" mdi mdi-battery\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-battery-10"}), i._v(" mdi mdi-battery-10\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-battery-20"}), i._v(" mdi mdi-battery-20\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-battery-30"}), i._v(" mdi mdi-battery-30\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-battery-40"}), i._v(" mdi mdi-battery-40\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-battery-50"}), i._v(" mdi mdi-battery-50\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-battery-60"}), i._v(" mdi mdi-battery-60\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-battery-70"}), i._v(" mdi mdi-battery-70\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-battery-80"}), i._v(" mdi mdi-battery-80\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-battery-90"}), i._v(" mdi mdi-battery-90\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-battery-alert"}), i._v(" mdi mdi-battery-alert\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-battery-charging"}), i._v(" mdi mdi-battery-charging\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-battery-charging-100"}), i._v(" mdi mdi-battery-charging-100\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-battery-charging-20"}), i._v(" mdi mdi-battery-charging-20\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-battery-charging-30"}), i._v(" mdi mdi-battery-charging-30\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-battery-charging-40"}), i._v(" mdi mdi-battery-charging-40\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-battery-charging-60"}), i._v(" mdi mdi-battery-charging-60\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-battery-charging-80"}), i._v(" mdi mdi-battery-charging-80\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-battery-charging-90"}), i._v(" mdi mdi-battery-charging-90\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-battery-minus"}), i._v(" mdi mdi-battery-minus\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-battery-negative"}), i._v(" mdi mdi-battery-negative\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-battery-outline"}), i._v(" mdi mdi-battery-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-battery-plus"}), i._v(" mdi mdi-battery-plus\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-battery-positive"}), i._v(" mdi mdi-battery-positive\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-battery-unknown"}), i._v(" mdi mdi-battery-unknown\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-beach"}), i._v(" mdi mdi-beach\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-beats"}), i._v(" mdi mdi-beats\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-beer"}), i._v(" mdi mdi-beer\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-behance"}), i._v(" mdi mdi-behance\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-bell"}), i._v(" mdi mdi-bell\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-bell-off"}), i._v(" mdi mdi-bell-off\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-bell-outline"}), i._v(" mdi mdi-bell-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-bell-plus"}), i._v(" mdi mdi-bell-plus\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-bell-ring"}), i._v(" mdi mdi-bell-ring\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-bell-ring-outline"}), i._v(" mdi mdi-bell-ring-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-bell-sleep"}), i._v(" mdi mdi-bell-sleep\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-beta"}), i._v(" mdi mdi-beta\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-bible"}), i._v(" mdi mdi-bible\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-bike"}), i._v(" mdi mdi-bike\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-bing"}), i._v(" mdi mdi-bing\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-binoculars"}), i._v(" mdi mdi-binoculars\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-bio"}), i._v(" mdi mdi-bio\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-biohazard"}), i._v(" mdi mdi-biohazard\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-bitbucket"}), i._v(" mdi mdi-bitbucket\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-black-mesa"}), i._v(" mdi mdi-black-mesa\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-blackberry"}), i._v(" mdi mdi-blackberry\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-blender"}), i._v(" mdi mdi-blender\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-blinds"}), i._v(" mdi mdi-blinds\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-block-helper"}), i._v(" mdi mdi-block-helper\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-blogger"}), i._v(" mdi mdi-blogger\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-bluetooth"}), i._v(" mdi mdi-bluetooth\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-bluetooth-audio"}), i._v(" mdi mdi-bluetooth-audio\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-bluetooth-connect"}), i._v(" mdi mdi-bluetooth-connect\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-bluetooth-off"}), i._v(" mdi mdi-bluetooth-off\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-bluetooth-settings"}), i._v(" mdi mdi-bluetooth-settings\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-bluetooth-transfer"}), i._v(" mdi mdi-bluetooth-transfer\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-blur"}), i._v(" mdi mdi-blur\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-blur-linear"}), i._v(" mdi mdi-blur-linear\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-blur-off"}), i._v(" mdi mdi-blur-off\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-blur-radial"}), i._v(" mdi mdi-blur-radial\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-bone"}), i._v(" mdi mdi-bone\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-book"}), i._v(" mdi mdi-book\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-book-minus"}), i._v(" mdi mdi-book-minus\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-book-multiple"}), i._v(" mdi mdi-book-multiple\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-book-multiple-variant"}), i._v(" mdi mdi-book-multiple-variant\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-book-open"}), i._v(" mdi mdi-book-open\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-book-open-page-variant"}), i._v(" mdi mdi-book-open-page-variant\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-book-open-variant"}), i._v(" mdi mdi-book-open-variant\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-book-plus"}), i._v(" mdi mdi-book-plus\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-book-variant"}), i._v(" mdi mdi-book-variant\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-bookmark"}), i._v(" mdi mdi-bookmark\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-bookmark-check"}), i._v(" mdi mdi-bookmark-check\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-bookmark-music"}), i._v(" mdi mdi-bookmark-music\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-bookmark-outline"}), i._v(" mdi mdi-bookmark-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-bookmark-plus"}), i._v(" mdi mdi-bookmark-plus\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-bookmark-plus-outline"}), i._v(" mdi mdi-bookmark-plus-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-bookmark-remove"}), i._v(" mdi mdi-bookmark-remove\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-boombox"}), i._v(" mdi mdi-boombox\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-border-all"}), i._v(" mdi mdi-border-all\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-border-bottom"}), i._v(" mdi mdi-border-bottom\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-border-color"}), i._v(" mdi mdi-border-color\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-border-horizontal"}), i._v(" mdi mdi-border-horizontal\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-border-inside"}), i._v(" mdi mdi-border-inside\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-border-left"}), i._v(" mdi mdi-border-left\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-border-none"}), i._v(" mdi mdi-border-none\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-border-outside"}), i._v(" mdi mdi-border-outside\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-border-right"}), i._v(" mdi mdi-border-right\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-border-style"}), i._v(" mdi mdi-border-style\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-border-top"}), i._v(" mdi mdi-border-top\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-border-vertical"}), i._v(" mdi mdi-border-vertical\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-bowl"}), i._v(" mdi mdi-bowl\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-bowling"}), i._v(" mdi mdi-bowling\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-box"}), i._v(" mdi mdi-box\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-box-cutter"}), i._v(" mdi mdi-box-cutter\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-box-shadow"}), i._v(" mdi mdi-box-shadow\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-bridge"}), i._v(" mdi mdi-bridge\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-briefcase"}), i._v(" mdi mdi-briefcase\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-briefcase-check"}), i._v(" mdi mdi-briefcase-check\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-briefcase-download"}), i._v(" mdi mdi-briefcase-download\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-briefcase-upload"}), i._v(" mdi mdi-briefcase-upload\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-brightness-1"}), i._v(" mdi mdi-brightness-1\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-brightness-2"}), i._v(" mdi mdi-brightness-2\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-brightness-3"}), i._v(" mdi mdi-brightness-3\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-brightness-4"}), i._v(" mdi mdi-brightness-4\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-brightness-5"}), i._v(" mdi mdi-brightness-5\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-brightness-6"}), i._v(" mdi mdi-brightness-6\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-brightness-7"}), i._v(" mdi mdi-brightness-7\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-brightness-auto"}), i._v(" mdi mdi-brightness-auto\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-broom"}), i._v(" mdi mdi-broom\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-brush"}), i._v(" mdi mdi-brush\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-buffer"}), i._v(" mdi mdi-buffer\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-bug"}), i._v(" mdi mdi-bug\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-bulletin-board"}), i._v(" mdi mdi-bulletin-board\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-bullhorn"}), i._v(" mdi mdi-bullhorn\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-bullseye"}), i._v(" mdi mdi-bullseye\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-burst-mode"}), i._v(" mdi mdi-burst-mode\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-bus"}), i._v(" mdi mdi-bus\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-cached"}), i._v(" mdi mdi-cached\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-cake"}), i._v(" mdi mdi-cake\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-cake-layered"}), i._v(" mdi mdi-cake-layered\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-cake-variant"}), i._v(" mdi mdi-cake-variant\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-calculator"}), i._v(" mdi mdi-calculator\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-calendar"}), i._v(" mdi mdi-calendar\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-calendar-blank"}), i._v(" mdi mdi-calendar-blank\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-calendar-check"}), i._v(" mdi mdi-calendar-check\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-calendar-clock"}), i._v(" mdi mdi-calendar-clock\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-calendar-multiple"}), i._v(" mdi mdi-calendar-multiple\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-calendar-multiple-check"}), i._v(" mdi mdi-calendar-multiple-check\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-calendar-plus"}), i._v(" mdi mdi-calendar-plus\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-calendar-remove"}), i._v(" mdi mdi-calendar-remove\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-calendar-text"}), i._v(" mdi mdi-calendar-text\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-calendar-today"}), i._v(" mdi mdi-calendar-today\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-call-made"}), i._v(" mdi mdi-call-made\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-call-merge"}), i._v(" mdi mdi-call-merge\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-call-missed"}), i._v(" mdi mdi-call-missed\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-call-received"}), i._v(" mdi mdi-call-received\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-call-split"}), i._v(" mdi mdi-call-split\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-camcorder"}), i._v(" mdi mdi-camcorder\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-camcorder-box"}), i._v(" mdi mdi-camcorder-box\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-camcorder-box-off"}), i._v(" mdi mdi-camcorder-box-off\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-camcorder-off"}), i._v(" mdi mdi-camcorder-off\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-camera"}), i._v(" mdi mdi-camera\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-camera-enhance"}), i._v(" mdi mdi-camera-enhance\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-camera-front"}), i._v(" mdi mdi-camera-front\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-camera-front-variant"}), i._v(" mdi mdi-camera-front-variant\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-camera-iris"}), i._v(" mdi mdi-camera-iris\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-camera-off"}), i._v(" mdi mdi-camera-off\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-camera-party-mode"}), i._v(" mdi mdi-camera-party-mode\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-camera-rear"}), i._v(" mdi mdi-camera-rear\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-camera-rear-variant"}), i._v(" mdi mdi-camera-rear-variant\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-camera-switch"}), i._v(" mdi mdi-camera-switch\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-camera-timer"}), i._v(" mdi mdi-camera-timer\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-candle"}), i._v(" mdi mdi-candle\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-candycane"}), i._v(" mdi mdi-candycane\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-car"}), i._v(" mdi mdi-car\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-car-battery"}), i._v(" mdi mdi-car-battery\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-car-connected"}), i._v(" mdi mdi-car-connected\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-car-wash"}), i._v(" mdi mdi-car-wash\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-cards"}), i._v(" mdi mdi-cards\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-cards-outline"}), i._v(" mdi mdi-cards-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-cards-playing-outline"}), i._v(" mdi mdi-cards-playing-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-carrot"}), i._v(" mdi mdi-carrot\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-cart"}), i._v(" mdi mdi-cart\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-cart-off"}), i._v(" mdi mdi-cart-off\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-cart-outline"}), i._v(" mdi mdi-cart-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-cart-plus"}), i._v(" mdi mdi-cart-plus\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-case-sensitive-alt"}), i._v(" mdi mdi-case-sensitive-alt\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-cash"}), i._v(" mdi mdi-cash\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-cash-100"}), i._v(" mdi mdi-cash-100\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-cash-multiple"}), i._v(" mdi mdi-cash-multiple\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-cash-usd"}), i._v(" mdi mdi-cash-usd\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-cast"}), i._v(" mdi mdi-cast\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-cast-connected"}), i._v(" mdi mdi-cast-connected\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-castle"}), i._v(" mdi mdi-castle\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-cat"}), i._v(" mdi mdi-cat\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-cellphone"}), i._v(" mdi mdi-cellphone\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-cellphone-android"}), i._v(" mdi mdi-cellphone-android\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-cellphone-basic"}), i._v(" mdi mdi-cellphone-basic\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-cellphone-dock"}), i._v(" mdi mdi-cellphone-dock\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-cellphone-iphone"}), i._v(" mdi mdi-cellphone-iphone\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-cellphone-link"}), i._v(" mdi mdi-cellphone-link\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-cellphone-link-off"}), i._v(" mdi mdi-cellphone-link-off\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-cellphone-settings"}), i._v(" mdi mdi-cellphone-settings\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-certificate"}), i._v(" mdi mdi-certificate\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-chair-school"}), i._v(" mdi mdi-chair-school\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-chart-arc"}), i._v(" mdi mdi-chart-arc\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-chart-areaspline"}), i._v(" mdi mdi-chart-areaspline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-chart-bar"}), i._v(" mdi mdi-chart-bar\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-chart-bubble"}), i._v(" mdi mdi-chart-bubble\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-chart-gantt"}), i._v(" mdi mdi-chart-gantt\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-chart-gantt"}), i._v(" mdi mdi-chart-gantt\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-chart-histogram"}), i._v(" mdi mdi-chart-histogram\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-chart-line"}), i._v(" mdi mdi-chart-line\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-chart-pie"}), i._v(" mdi mdi-chart-pie\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-chart-scatterplot-hexbin"}), i._v(" mdi mdi-chart-scatterplot-hexbin\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-check"}), i._v(" mdi mdi-check\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-check-all"}), i._v(" mdi mdi-check-all\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-check-circle"}), i._v(" mdi mdi-check-circle\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-check-circle-outline"}), i._v(" mdi mdi-check-circle-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-checkbox-blank"}), i._v(" mdi mdi-checkbox-blank\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-checkbox-blank-circle"}), i._v(" mdi mdi-checkbox-blank-circle\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-checkbox-blank-circle-outline"}), i._v(" mdi mdi-checkbox-blank-circle-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-checkbox-blank-outline"}), i._v(" mdi mdi-checkbox-blank-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-checkbox-marked"}), i._v(" mdi mdi-checkbox-marked\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-checkbox-marked-circle"}), i._v(" mdi mdi-checkbox-marked-circle\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-checkbox-marked-circle-outline"}), i._v(" mdi mdi-checkbox-marked-circle-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-checkbox-marked-outline"}), i._v(" mdi mdi-checkbox-marked-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-checkbox-multiple-blank"}), i._v(" mdi mdi-checkbox-multiple-blank\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-checkbox-multiple-blank-circle"}), i._v(" mdi mdi-checkbox-multiple-blank-circle\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-checkbox-multiple-blank-circle-outline"}), i._v(" mdi mdi-checkbox-multiple-blank-circle-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-checkbox-multiple-blank-outline"}), i._v(" mdi mdi-checkbox-multiple-blank-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-checkbox-multiple-marked"}), i._v(" mdi mdi-checkbox-multiple-marked\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-checkbox-multiple-marked-circle"}), i._v(" mdi mdi-checkbox-multiple-marked-circle\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-checkbox-multiple-marked-circle-outline"}), i._v(" mdi mdi-checkbox-multiple-marked-circle-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-checkbox-multiple-marked-outline"}), i._v(" mdi mdi-checkbox-multiple-marked-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-checkerboard"}), i._v(" mdi mdi-checkerboard\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-chemical-weapon"}), i._v(" mdi mdi-chemical-weapon\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-chemical-weapon"}), i._v(" mdi mdi-chemical-weapon\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-chevron-double-down"}), i._v(" mdi mdi-chevron-double-down\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-chevron-double-left"}), i._v(" mdi mdi-chevron-double-left\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-chevron-double-right"}), i._v(" mdi mdi-chevron-double-right\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-chevron-double-up"}), i._v(" mdi mdi-chevron-double-up\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-chevron-down"}), i._v(" mdi mdi-chevron-down\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-chevron-left"}), i._v(" mdi mdi-chevron-left\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-chevron-right"}), i._v(" mdi mdi-chevron-right\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-chevron-up"}), i._v(" mdi mdi-chevron-up\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-chip"}), i._v(" mdi mdi-chip\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-church"}), i._v(" mdi mdi-church\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-cisco-webex"}), i._v(" mdi mdi-cisco-webex\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-city"}), i._v(" mdi mdi-city\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-clipboard"}), i._v(" mdi mdi-clipboard\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-clipboard-account"}), i._v(" mdi mdi-clipboard-account\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-clipboard-alert"}), i._v(" mdi mdi-clipboard-alert\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-clipboard-arrow-down"}), i._v(" mdi mdi-clipboard-arrow-down\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-clipboard-arrow-left"}), i._v(" mdi mdi-clipboard-arrow-left\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-clipboard-check"}), i._v(" mdi mdi-clipboard-check\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-clipboard-outline"}), i._v(" mdi mdi-clipboard-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-clipboard-text"}), i._v(" mdi mdi-clipboard-text\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-clippy"}), i._v(" mdi mdi-clippy\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-clock"}), i._v(" mdi mdi-clock\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-clock-alert"}), i._v(" mdi mdi-clock-alert\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-clock-end"}), i._v(" mdi mdi-clock-end\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-clock-fast"}), i._v(" mdi mdi-clock-fast\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-clock-in"}), i._v(" mdi mdi-clock-in\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-clock-out"}), i._v(" mdi mdi-clock-out\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-clock-start"}), i._v(" mdi mdi-clock-start\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-close"}), i._v(" mdi mdi-close\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-close-box"}), i._v(" mdi mdi-close-box\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-close-box-outline"}), i._v(" mdi mdi-close-box-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-close-circle"}), i._v(" mdi mdi-close-circle\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-close-circle-outline"}), i._v(" mdi mdi-close-circle-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-close-network"}), i._v(" mdi mdi-close-network\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-close-octagon"}), i._v(" mdi mdi-close-octagon\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-close-octagon-outline"}), i._v(" mdi mdi-close-octagon-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-closed-caption"}), i._v(" mdi mdi-closed-caption\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-cloud"}), i._v(" mdi mdi-cloud\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-cloud-check"}), i._v(" mdi mdi-cloud-check\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-cloud-circle"}), i._v(" mdi mdi-cloud-circle\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-cloud-download"}), i._v(" mdi mdi-cloud-download\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-cloud-outline"}), i._v(" mdi mdi-cloud-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-cloud-outline-off"}), i._v(" mdi mdi-cloud-outline-off\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-cloud-print"}), i._v(" mdi mdi-cloud-print\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-cloud-print-outline"}), i._v(" mdi mdi-cloud-print-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-cloud-sync"}), i._v(" mdi mdi-cloud-sync\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-cloud-upload"}), i._v(" mdi mdi-cloud-upload\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-code-array"}), i._v(" mdi mdi-code-array\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-code-braces"}), i._v(" mdi mdi-code-braces\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-code-brackets"}), i._v(" mdi mdi-code-brackets\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-code-equal"}), i._v(" mdi mdi-code-equal\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-code-greater-than"}), i._v(" mdi mdi-code-greater-than\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-code-greater-than-or-equal"}), i._v(" mdi mdi-code-greater-than-or-equal\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-code-less-than"}), i._v(" mdi mdi-code-less-than\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-code-less-than-or-equal"}), i._v(" mdi mdi-code-less-than-or-equal\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-code-not-equal"}), i._v(" mdi mdi-code-not-equal\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-code-not-equal-variant"}), i._v(" mdi mdi-code-not-equal-variant\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-code-parentheses"}), i._v(" mdi mdi-code-parentheses\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-code-string"}), i._v(" mdi mdi-code-string\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-code-tags"}), i._v(" mdi mdi-code-tags\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-codepen"}), i._v(" mdi mdi-codepen\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-coffee"}), i._v(" mdi mdi-coffee\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-coffee-to-go"}), i._v(" mdi mdi-coffee-to-go\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-coin"}), i._v(" mdi mdi-coin\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-collage"}), i._v(" mdi mdi-collage\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-color-helper"}), i._v(" mdi mdi-color-helper\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-comment"}), i._v(" mdi mdi-comment\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-comment-account"}), i._v(" mdi mdi-comment-account\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-comment-account-outline"}), i._v(" mdi mdi-comment-account-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-comment-alert"}), i._v(" mdi mdi-comment-alert\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-comment-alert-outline"}), i._v(" mdi mdi-comment-alert-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-comment-check"}), i._v(" mdi mdi-comment-check\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-comment-check-outline"}), i._v(" mdi mdi-comment-check-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-comment-multiple-outline"}), i._v(" mdi mdi-comment-multiple-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-comment-outline"}), i._v(" mdi mdi-comment-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-comment-plus-outline"}), i._v(" mdi mdi-comment-plus-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-comment-processing"}), i._v(" mdi mdi-comment-processing\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-comment-processing-outline"}), i._v(" mdi mdi-comment-processing-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-comment-question-outline"}), i._v(" mdi mdi-comment-question-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-comment-remove-outline"}), i._v(" mdi mdi-comment-remove-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-comment-text"}), i._v(" mdi mdi-comment-text\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-comment-text-outline"}), i._v(" mdi mdi-comment-text-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-compare"}), i._v(" mdi mdi-compare\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-compass"}), i._v(" mdi mdi-compass\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-compass-outline"}), i._v(" mdi mdi-compass-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-console"}), i._v(" mdi mdi-console\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-contact-mail"}), i._v(" mdi mdi-contact-mail\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-content-copy"}), i._v(" mdi mdi-content-copy\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-content-cut"}), i._v(" mdi mdi-content-cut\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-content-duplicate"}), i._v(" mdi mdi-content-duplicate\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-content-paste"}), i._v(" mdi mdi-content-paste\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-content-save"}), i._v(" mdi mdi-content-save\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-content-save-all"}), i._v(" mdi mdi-content-save-all\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-content-save-settings"}), i._v(" mdi mdi-content-save-settings\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-contrast"}), i._v(" mdi mdi-contrast\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-contrast-box"}), i._v(" mdi mdi-contrast-box\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-contrast-circle"}), i._v(" mdi mdi-contrast-circle\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-cookie"}), i._v(" mdi mdi-cookie\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-copyright"}), i._v(" mdi mdi-copyright\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-counter"}), i._v(" mdi mdi-counter\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-cow"}), i._v(" mdi mdi-cow\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-credit-card"}), i._v(" mdi mdi-credit-card\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-credit-card-multiple"}), i._v(" mdi mdi-credit-card-multiple\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-credit-card-off"}), i._v(" mdi mdi-credit-card-off\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-credit-card-scan"}), i._v(" mdi mdi-credit-card-scan\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-crop"}), i._v(" mdi mdi-crop\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-crop-free"}), i._v(" mdi mdi-crop-free\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-crop-landscape"}), i._v(" mdi mdi-crop-landscape\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-crop-portrait"}), i._v(" mdi mdi-crop-portrait\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-crop-square"}), i._v(" mdi mdi-crop-square\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-crosshairs"}), i._v(" mdi mdi-crosshairs\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-crosshairs-gps"}), i._v(" mdi mdi-crosshairs-gps\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-crown"}), i._v(" mdi mdi-crown\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-cube"}), i._v(" mdi mdi-cube\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-cube-outline"}), i._v(" mdi mdi-cube-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-cube-send"}), i._v(" mdi mdi-cube-send\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-cube-unfolded"}), i._v(" mdi mdi-cube-unfolded\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-cup"}), i._v(" mdi mdi-cup\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-cup-off"}), i._v(" mdi mdi-cup-off\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-cup-water"}), i._v(" mdi mdi-cup-water\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-currency-btc"}), i._v(" mdi mdi-currency-btc\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-currency-eur"}), i._v(" mdi mdi-currency-eur\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-currency-gbp"}), i._v(" mdi mdi-currency-gbp\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-currency-inr"}), i._v(" mdi mdi-currency-inr\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-currency-ngn"}), i._v(" mdi mdi-currency-ngn\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-currency-rub"}), i._v(" mdi mdi-currency-rub\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-currency-try"}), i._v(" mdi mdi-currency-try\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-currency-usd"}), i._v(" mdi mdi-currency-usd\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-cursor-default"}), i._v(" mdi mdi-cursor-default\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-cursor-default-outline"}), i._v(" mdi mdi-cursor-default-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-cursor-move"}), i._v(" mdi mdi-cursor-move\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-cursor-pointer"}), i._v(" mdi mdi-cursor-pointer\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-cursor-text"}), i._v(" mdi mdi-cursor-text\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-database"}), i._v(" mdi mdi-database\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-database-minus"}), i._v(" mdi mdi-database-minus\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-database-plus"}), i._v(" mdi mdi-database-plus\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-debug-step-into"}), i._v(" mdi mdi-debug-step-into\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-debug-step-out"}), i._v(" mdi mdi-debug-step-out\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-debug-step-over"}), i._v(" mdi mdi-debug-step-over\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-decimal-decrease"}), i._v(" mdi mdi-decimal-decrease\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-delete"}), i._v(" mdi mdi-delete\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-delete-forever"}), i._v(" mdi mdi-delete-forever\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-delete-sweep"}), i._v(" mdi mdi-delete-sweep\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-delete-variant"}), i._v(" mdi mdi-delete-variant\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-delta"}), i._v(" mdi mdi-delta\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-deskphone"}), i._v(" mdi mdi-deskphone\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-desktop-mac"}), i._v(" mdi mdi-desktop-mac\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-desktop-tower"}), i._v(" mdi mdi-desktop-tower\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-details"}), i._v(" mdi mdi-details\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-deviantart"}), i._v(" mdi mdi-deviantart\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-dialpad"}), i._v(" mdi mdi-dialpad\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-diamond"}), i._v(" mdi mdi-diamond\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-dice-1"}), i._v(" mdi mdi-dice-1\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-dice-2"}), i._v(" mdi mdi-dice-2\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-dice-3"}), i._v(" mdi mdi-dice-3\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-dice-4"}), i._v(" mdi mdi-dice-4\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-dice-5"}), i._v(" mdi mdi-dice-5\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-dice-6"}), i._v(" mdi mdi-dice-6\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-dice-d20"}), i._v(" mdi mdi-dice-d20\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-dice-d4"}), i._v(" mdi mdi-dice-d4\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-dice-d6"}), i._v(" mdi mdi-dice-d6\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-dice-d8"}), i._v(" mdi mdi-dice-d8\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-dictionary"}), i._v(" mdi mdi-dictionary\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-directions"}), i._v(" mdi mdi-directions\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-directions-fork"}), i._v(" mdi mdi-directions-fork\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-discord"}), i._v(" mdi mdi-discord\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-disk"}), i._v(" mdi mdi-disk\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-disk-alert"}), i._v(" mdi mdi-disk-alert\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-disqus"}), i._v(" mdi mdi-disqus\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-disqus-outline"}), i._v(" mdi mdi-disqus-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-division"}), i._v(" mdi mdi-division\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-division-box"}), i._v(" mdi mdi-division-box\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-dns"}), i._v(" mdi mdi-dns\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-domain"}), i._v(" mdi mdi-domain\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-dots-horizontal"}), i._v(" mdi mdi-dots-horizontal\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-dots-vertical"}), i._v(" mdi mdi-dots-vertical\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-download"}), i._v(" mdi mdi-download\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-drag"}), i._v(" mdi mdi-drag\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-drag-horizontal"}), i._v(" mdi mdi-drag-horizontal\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-drag-vertical"}), i._v(" mdi mdi-drag-vertical\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-drawing"}), i._v(" mdi mdi-drawing\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-drawing-box"}), i._v(" mdi mdi-drawing-box\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-dribbble"}), i._v(" mdi mdi-dribbble\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-dribbble-box"}), i._v(" mdi mdi-dribbble-box\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-drone"}), i._v(" mdi mdi-drone\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-dropbox"}), i._v(" mdi mdi-dropbox\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-drupal"}), i._v(" mdi mdi-drupal\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-duck"}), i._v(" mdi mdi-duck\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-dumbbell"}), i._v(" mdi mdi-dumbbell\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-earth"}), i._v(" mdi mdi-earth\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-earth-off"}), i._v(" mdi mdi-earth-off\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-edge"}), i._v(" mdi mdi-edge\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-eject"}), i._v(" mdi mdi-eject\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-elevation-decline"}), i._v(" mdi mdi-elevation-decline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-elevation-rise"}), i._v(" mdi mdi-elevation-rise\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-elevator"}), i._v(" mdi mdi-elevator\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-email"}), i._v(" mdi mdi-email\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-email-open"}), i._v(" mdi mdi-email-open\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-email-open-outline"}), i._v(" mdi mdi-email-open-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-email-outline"}), i._v(" mdi mdi-email-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-email-secure"}), i._v(" mdi mdi-email-secure\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-email-variant"}), i._v(" mdi mdi-email-variant\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-emoticon"}), i._v(" mdi mdi-emoticon\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-emoticon-cool"}), i._v(" mdi mdi-emoticon-cool\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-emoticon-devil"}), i._v(" mdi mdi-emoticon-devil\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-emoticon-happy"}), i._v(" mdi mdi-emoticon-happy\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-emoticon-neutral"}), i._v(" mdi mdi-emoticon-neutral\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-emoticon-poop"}), i._v(" mdi mdi-emoticon-poop\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-emoticon-sad"}), i._v(" mdi mdi-emoticon-sad\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-emoticon-tongue"}), i._v(" mdi mdi-emoticon-tongue\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-engine"}), i._v(" mdi mdi-engine\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-engine-outline"}), i._v(" mdi mdi-engine-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-equal"}), i._v(" mdi mdi-equal\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-equal-box"}), i._v(" mdi mdi-equal-box\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-eraser"}), i._v(" mdi mdi-eraser\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-eraser-variant"}), i._v(" mdi mdi-eraser-variant\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-escalator"}), i._v(" mdi mdi-escalator\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-ethernet"}), i._v(" mdi mdi-ethernet\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-ethernet-cable"}), i._v(" mdi mdi-ethernet-cable\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-ethernet-cable-off"}), i._v(" mdi mdi-ethernet-cable-off\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-etsy"}), i._v(" mdi mdi-etsy\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-ev-station"}), i._v(" mdi mdi-ev-station\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-evernote"}), i._v(" mdi mdi-evernote\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-exclamation"}), i._v(" mdi mdi-exclamation\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-exit-to-app"}), i._v(" mdi mdi-exit-to-app\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-export"}), i._v(" mdi mdi-export\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-eye"}), i._v(" mdi mdi-eye\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-eye-off"}), i._v(" mdi mdi-eye-off\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-eyedropper"}), i._v(" mdi mdi-eyedropper\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-eyedropper-variant"}), i._v(" mdi mdi-eyedropper-variant\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-face"}), i._v(" mdi mdi-face\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-face-profile"}), i._v(" mdi mdi-face-profile\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-facebook"}), i._v(" mdi mdi-facebook\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-facebook-box"}), i._v(" mdi mdi-facebook-box\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-facebook-messenger"}), i._v(" mdi mdi-facebook-messenger\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-factory"}), i._v(" mdi mdi-factory\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-fan"}), i._v(" mdi mdi-fan\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-fast-forward"}), i._v(" mdi mdi-fast-forward\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-fax"}), i._v(" mdi mdi-fax\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-ferry"}), i._v(" mdi mdi-ferry\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-file"}), i._v(" mdi mdi-file\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-file-chart"}), i._v(" mdi mdi-file-chart\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-file-check"}), i._v(" mdi mdi-file-check\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-file-cloud"}), i._v(" mdi mdi-file-cloud\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-file-delimited"}), i._v(" mdi mdi-file-delimited\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-file-document"}), i._v(" mdi mdi-file-document\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-file-document-box"}), i._v(" mdi mdi-file-document-box\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-file-excel"}), i._v(" mdi mdi-file-excel\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-file-excel-box"}), i._v(" mdi mdi-file-excel-box\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-file-export"}), i._v(" mdi mdi-file-export\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-file-find"}), i._v(" mdi mdi-file-find\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-file-hidden"}), i._v(" mdi mdi-file-hidden\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-file-image"}), i._v(" mdi mdi-file-image\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-file-import"}), i._v(" mdi mdi-file-import\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-file-lock"}), i._v(" mdi mdi-file-lock\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-file-multiple"}), i._v(" mdi mdi-file-multiple\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-file-music"}), i._v(" mdi mdi-file-music\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-file-outline"}), i._v(" mdi mdi-file-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-file-pdf"}), i._v(" mdi mdi-file-pdf\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-file-pdf-box"}), i._v(" mdi mdi-file-pdf-box\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-file-powerpoint"}), i._v(" mdi mdi-file-powerpoint\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-file-powerpoint-box"}), i._v(" mdi mdi-file-powerpoint-box\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-file-restore"}), i._v(" mdi mdi-file-restore\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-file-send"}), i._v(" mdi mdi-file-send\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-file-tree"}), i._v(" mdi mdi-file-tree\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-file-video"}), i._v(" mdi mdi-file-video\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-file-word"}), i._v(" mdi mdi-file-word\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-file-word-box"}), i._v(" mdi mdi-file-word-box\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-file-xml"}), i._v(" mdi mdi-file-xml\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-film"}), i._v(" mdi mdi-film\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-filmstrip"}), i._v(" mdi mdi-filmstrip\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-filmstrip-off"}), i._v(" mdi mdi-filmstrip-off\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-filter"}), i._v(" mdi mdi-filter\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-filter-outline"}), i._v(" mdi mdi-filter-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-filter-remove"}), i._v(" mdi mdi-filter-remove\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-filter-remove-outline"}), i._v(" mdi mdi-filter-remove-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-filter-variant"}), i._v(" mdi mdi-filter-variant\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-fingerprint"}), i._v(" mdi mdi-fingerprint\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-fire"}), i._v(" mdi mdi-fire\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-firefox"}), i._v(" mdi mdi-firefox\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-fish"}), i._v(" mdi mdi-fish\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-flag"}), i._v(" mdi mdi-flag\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-flag-checkered"}), i._v(" mdi mdi-flag-checkered\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-flag-outline"}), i._v(" mdi mdi-flag-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-flag-outline-variant"}), i._v(" mdi mdi-flag-outline-variant\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-flag-triangle"}), i._v(" mdi mdi-flag-triangle\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-flag-variant"}), i._v(" mdi mdi-flag-variant\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-flash"}), i._v(" mdi mdi-flash\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-flash-auto"}), i._v(" mdi mdi-flash-auto\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-flash-off"}), i._v(" mdi mdi-flash-off\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-flashlight"}), i._v(" mdi mdi-flashlight\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-flashlight-off"}), i._v(" mdi mdi-flashlight-off\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-flask"}), i._v(" mdi mdi-flask\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-flask-empty"}), i._v(" mdi mdi-flask-empty\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-flask-empty-outline"}), i._v(" mdi mdi-flask-empty-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-flask-outline"}), i._v(" mdi mdi-flask-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-flattr"}), i._v(" mdi mdi-flattr\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-flask-empty"}), i._v(" mdi mdi-flask-empty\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-flask-empty-outline"}), i._v(" mdi mdi-flask-empty-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-flask-outline"}), i._v(" mdi mdi-flask-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-flattr"}), i._v(" mdi mdi-flattr\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-flip-to-back"}), i._v(" mdi mdi-flip-to-back\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-flip-to-front"}), i._v(" mdi mdi-flip-to-front\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-floppy"}), i._v(" mdi mdi-floppy\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-flower"}), i._v(" mdi mdi-flower\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-folder"}), i._v(" mdi mdi-folder\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-folder-account"}), i._v(" mdi mdi-folder-account\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-folder-download"}), i._v(" mdi mdi-folder-download\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-folder-google-drive"}), i._v(" mdi mdi-folder-google-drive\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-folder-image"}), i._v(" mdi mdi-folder-image\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-folder-lock"}), i._v(" mdi mdi-folder-lock\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-folder-lock-open"}), i._v(" mdi mdi-folder-lock-open\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-folder-move"}), i._v(" mdi mdi-folder-move\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-folder-multiple"}), i._v(" mdi mdi-folder-multiple\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-folder-multiple-image"}), i._v(" mdi mdi-folder-multiple-image\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-folder-multiple-outline"}), i._v(" mdi mdi-folder-multiple-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-folder-outline"}), i._v(" mdi mdi-folder-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-folder-plus"}), i._v(" mdi mdi-folder-plus\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-folder-remove"}), i._v(" mdi mdi-folder-remove\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-folder-upload"}), i._v(" mdi mdi-folder-upload\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-food"}), i._v(" mdi mdi-food\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-food-apple"}), i._v(" mdi mdi-food-apple\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-food-fork-drink"}), i._v(" mdi mdi-food-fork-drink\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-food-off"}), i._v(" mdi mdi-food-off\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-food-variant"}), i._v(" mdi mdi-food-variant\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-football"}), i._v(" mdi mdi-football\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-football-australian"}), i._v(" mdi mdi-football-australian\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-football-helmet"}), i._v(" mdi mdi-football-helmet\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-format-align-center"}), i._v(" mdi mdi-format-align-center\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-format-align-justify"}), i._v(" mdi mdi-format-align-justify\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-format-align-left"}), i._v(" mdi mdi-format-align-left\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-format-align-right"}), i._v(" mdi mdi-format-align-right\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-format-annotation-plus"}), i._v(" mdi mdi-format-annotation-plus\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-format-bold"}), i._v(" mdi mdi-format-bold\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-format-clear"}), i._v(" mdi mdi-format-clear\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-format-color-fill"}), i._v(" mdi mdi-format-color-fill\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-format-float-center"}), i._v(" mdi mdi-format-float-center\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-format-float-left"}), i._v(" mdi mdi-format-float-left\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-format-float-none"}), i._v(" mdi mdi-format-float-none\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-format-float-right"}), i._v(" mdi mdi-format-float-right\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-format-header-1"}), i._v(" mdi mdi-format-header-1\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-format-header-2"}), i._v(" mdi mdi-format-header-2\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-format-header-3"}), i._v(" mdi mdi-format-header-3\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-format-header-4"}), i._v(" mdi mdi-format-header-4\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-format-header-5"}), i._v(" mdi mdi-format-header-5\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-format-header-6"}), i._v(" mdi mdi-format-header-6\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-format-header-decrease"}), i._v(" mdi mdi-format-header-decrease\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-format-header-equal"}), i._v(" mdi mdi-format-header-equal\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-format-header-increase"}), i._v(" mdi mdi-format-header-increase\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-format-header-pound"}), i._v(" mdi mdi-format-header-pound\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-format-horizontal-align-center"}), i._v(" mdi mdi-format-horizontal-align-center\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-format-horizontal-align-left"}), i._v(" mdi mdi-format-horizontal-align-left\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-format-horizontal-align-right"}), i._v(" mdi mdi-format-horizontal-align-right\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-format-indent-decrease"}), i._v(" mdi mdi-format-indent-decrease\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-format-indent-increase"}), i._v(" mdi mdi-format-indent-increase\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-format-italic"}), i._v(" mdi mdi-format-italic\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-format-line-spacing"}), i._v(" mdi mdi-format-line-spacing\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-format-line-style"}), i._v(" mdi mdi-format-line-style\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-format-line-weight"}), i._v(" mdi mdi-format-line-weight\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-format-list-bulleted"}), i._v(" mdi mdi-format-list-bulleted\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-format-list-bulleted-type"}), i._v(" mdi mdi-format-list-bulleted-type\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-format-list-numbers"}), i._v(" mdi mdi-format-list-numbers\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-format-paint"}), i._v(" mdi mdi-format-paint\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-format-paragraph"}), i._v(" mdi mdi-format-paragraph\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-format-quote"}), i._v(" mdi mdi-format-quote\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-format-size"}), i._v(" mdi mdi-format-size\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-format-strikethrough"}), i._v(" mdi mdi-format-strikethrough\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-format-strikethrough-variant"}), i._v(" mdi mdi-format-strikethrough-variant\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-format-subscript"}), i._v(" mdi mdi-format-subscript\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-format-superscript"}), i._v(" mdi mdi-format-superscript\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-format-text"}), i._v(" mdi mdi-format-text\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-format-textdirection-l-to-r"}), i._v(" mdi mdi-format-textdirection-l-to-r\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-format-textdirection-r-to-l"}), i._v(" mdi mdi-format-textdirection-r-to-l\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-format-title"}), i._v(" mdi mdi-format-title\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-format-underline"}), i._v(" mdi mdi-format-underline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-format-vertical-align-bottom"}), i._v(" mdi mdi-format-vertical-align-bottom\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-format-vertical-align-center"}), i._v(" mdi mdi-format-vertical-align-center\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-format-vertical-align-top"}), i._v(" mdi mdi-format-vertical-align-top\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-format-wrap-inline"}), i._v(" mdi mdi-format-wrap-inline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-format-wrap-square"}), i._v(" mdi mdi-format-wrap-square\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-format-wrap-tight"}), i._v(" mdi mdi-format-wrap-tight\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-format-wrap-top-bottom"}), i._v(" mdi mdi-format-wrap-top-bottom\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-forum"}), i._v(" mdi mdi-forum\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-forward"}), i._v(" mdi mdi-forward\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-foursquare"}), i._v(" mdi mdi-foursquare\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-fridge"}), i._v(" mdi mdi-fridge\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-fridge-filled"}), i._v(" mdi mdi-fridge-filled\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-fridge-filled-bottom"}), i._v(" mdi mdi-fridge-filled-bottom\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-fridge-filled-top"}), i._v(" mdi mdi-fridge-filled-top\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-fullscreen"}), i._v(" mdi mdi-fullscreen\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-fullscreen-exit"}), i._v(" mdi mdi-fullscreen-exit\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-function"}), i._v(" mdi mdi-function\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-gamepad"}), i._v(" mdi mdi-gamepad\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-gamepad-variant"}), i._v(" mdi mdi-gamepad-variant\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-gas-cylinder"}), i._v(" mdi mdi-gas-cylinder\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-gas-station"}), i._v(" mdi mdi-gas-station\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-gate"}), i._v(" mdi mdi-gate\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-gauge"}), i._v(" mdi mdi-gauge\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-gavel"}), i._v(" mdi mdi-gavel\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-gender-female"}), i._v(" mdi mdi-gender-female\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-gender-male"}), i._v(" mdi mdi-gender-male\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-gender-male-female"}), i._v(" mdi mdi-gender-male-female\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-gender-transgender"}), i._v(" mdi mdi-gender-transgender\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-ghost"}), i._v(" mdi mdi-ghost\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-gift"}), i._v(" mdi mdi-gift\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-git"}), i._v(" mdi mdi-git\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-github-box"}), i._v(" mdi mdi-github-box\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-github-circle"}), i._v(" mdi mdi-github-circle\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-glass-flute"}), i._v(" mdi mdi-glass-flute\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-glass-mug"}), i._v(" mdi mdi-glass-mug\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-glass-stange"}), i._v(" mdi mdi-glass-stange\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-glass-tulip"}), i._v(" mdi mdi-glass-tulip\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-glassdoor"}), i._v(" mdi mdi-glassdoor\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-glasses"}), i._v(" mdi mdi-glasses\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-gmail"}), i._v(" mdi mdi-gmail\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-gnome"}), i._v(" mdi mdi-gnome\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-google"}), i._v(" mdi mdi-google\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-google-cardboard"}), i._v(" mdi mdi-google-cardboard\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-google-chrome"}), i._v(" mdi mdi-google-chrome\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-google-circles"}), i._v(" mdi mdi-google-circles\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-google-circles-communities"}), i._v(" mdi mdi-google-circles-communities\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-google-circles-extended"}), i._v(" mdi mdi-google-circles-extended\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-google-circles-group"}), i._v(" mdi mdi-google-circles-group\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-google-controller"}), i._v(" mdi mdi-google-controller\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-google-controller-off"}), i._v(" mdi mdi-google-controller-off\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-google-drive"}), i._v(" mdi mdi-google-drive\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-google-earth"}), i._v(" mdi mdi-google-earth\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-google-glass"}), i._v(" mdi mdi-google-glass\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-google-maps"}), i._v(" mdi mdi-google-maps\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-google-nearby"}), i._v(" mdi mdi-google-nearby\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-google-pages"}), i._v(" mdi mdi-google-pages\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-google-physical-web"}), i._v(" mdi mdi-google-physical-web\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-google-play"}), i._v(" mdi mdi-google-play\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-google-plus"}), i._v(" mdi mdi-google-plus\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-google-plus-box"}), i._v(" mdi mdi-google-plus-box\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-google-translate"}), i._v(" mdi mdi-google-translate\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-google-wallet"}), i._v(" mdi mdi-google-wallet\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-grease-pencil"}), i._v(" mdi mdi-grease-pencil\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-grid"}), i._v(" mdi mdi-grid\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-grid-off"}), i._v(" mdi mdi-grid-off\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-group"}), i._v(" mdi mdi-group\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-grid-off"}), i._v(" mdi mdi-grid-off\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-group"}), i._v(" mdi mdi-group\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-guitar-electric"}), i._v(" mdi mdi-guitar-electric\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-guitar-pick"}), i._v(" mdi mdi-guitar-pick\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-guitar-pick-outline"}), i._v(" mdi mdi-guitar-pick-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-guitar-pick-outline"}), i._v(" mdi mdi-guitar-pick-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-hackernews"}), i._v(" mdi mdi-hackernews\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-hand-pointing-right"}), i._v(" mdi mdi-hand-pointing-right\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-hanger"}), i._v(" mdi mdi-hanger\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-hangouts"}), i._v(" mdi mdi-hangouts\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-harddisk"}), i._v(" mdi mdi-harddisk\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-headphones"}), i._v(" mdi mdi-headphones\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-headphones-box"}), i._v(" mdi mdi-headphones-box\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-headphones-settings"}), i._v(" mdi mdi-headphones-settings\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-headset"}), i._v(" mdi mdi-headset\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-headset-dock"}), i._v(" mdi mdi-headset-dock\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-headset-off"}), i._v(" mdi mdi-headset-off\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-heart"}), i._v(" mdi mdi-heart\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-heart-box"}), i._v(" mdi mdi-heart-box\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-heart-box-outline"}), i._v(" mdi mdi-heart-box-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-heart-broken"}), i._v(" mdi mdi-heart-broken\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-heart-outline"}), i._v(" mdi mdi-heart-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-heart-pulse"}), i._v(" mdi mdi-heart-pulse\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-help"}), i._v(" mdi mdi-help\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-help-circle"}), i._v(" mdi mdi-help-circle\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-help-circle-outline"}), i._v(" mdi mdi-help-circle-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-hexagon"}), i._v(" mdi mdi-hexagon\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-hexagon-outline"}), i._v(" mdi mdi-hexagon-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-highway"}), i._v(" mdi mdi-highway\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-history"}), i._v(" mdi mdi-history\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-hololens"}), i._v(" mdi mdi-hololens\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-home"}), i._v(" mdi mdi-home\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-home-map-marker"}), i._v(" mdi mdi-home-map-marker\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-home-modern"}), i._v(" mdi mdi-home-modern\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-home-variant"}), i._v(" mdi mdi-home-variant\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-hops"}), i._v(" mdi mdi-hops\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-hospital"}), i._v(" mdi mdi-hospital\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-hospital-building"}), i._v(" mdi mdi-hospital-building\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-hospital-marker"}), i._v(" mdi mdi-hospital-marker\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-hotel"}), i._v(" mdi mdi-hotel\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-houzz"}), i._v(" mdi mdi-houzz\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-houzz-box"}), i._v(" mdi mdi-houzz-box\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-human"}), i._v(" mdi mdi-human\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-human-child"}), i._v(" mdi mdi-human-child\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-human-female"}), i._v(" mdi mdi-human-female\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-human-greeting"}), i._v(" mdi mdi-human-greeting\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-human-handsdown"}), i._v(" mdi mdi-human-handsdown\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-human-handsup"}), i._v(" mdi mdi-human-handsup\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-human-male"}), i._v(" mdi mdi-human-male\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-human-male-female"}), i._v(" mdi mdi-human-male-female\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-human-pregnant"}), i._v(" mdi mdi-human-pregnant\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-image"}), i._v(" mdi mdi-image\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-image-album"}), i._v(" mdi mdi-image-album\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-image-area"}), i._v(" mdi mdi-image-area\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-image-area-close"}), i._v(" mdi mdi-image-area-close\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-image-broken"}), i._v(" mdi mdi-image-broken\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-image-broken-variant"}), i._v(" mdi mdi-image-broken-variant\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-image-filter"}), i._v(" mdi mdi-image-filter\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-image-filter-black-white"}), i._v(" mdi mdi-image-filter-black-white\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-image-filter-center-focus"}), i._v(" mdi mdi-image-filter-center-focus\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-image-filter-center-focus-weak"}), i._v(" mdi mdi-image-filter-center-focus-weak\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-image-filter-drama"}), i._v(" mdi mdi-image-filter-drama\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-image-filter-frames"}), i._v(" mdi mdi-image-filter-frames\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-image-filter-hdr"}), i._v(" mdi mdi-image-filter-hdr\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-image-filter-none"}), i._v(" mdi mdi-image-filter-none\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-image-filter-tilt-shift"}), i._v(" mdi mdi-image-filter-tilt-shift\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-image-filter-vintage"}), i._v(" mdi mdi-image-filter-vintage\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-image-multiple"}), i._v(" mdi mdi-image-multiple\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-import"}), i._v(" mdi mdi-import\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-inbox"}), i._v(" mdi mdi-inbox\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-incognito"}), i._v(" mdi mdi-incognito\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-information"}), i._v(" mdi mdi-information\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-information-outline"}), i._v(" mdi mdi-information-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-information-variant"}), i._v(" mdi mdi-information-variant\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-instagram"}), i._v(" mdi mdi-instagram\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-instapaper"}), i._v(" mdi mdi-instapaper\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-internet-explorer"}), i._v(" mdi mdi-internet-explorer\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-invert-colors"}), i._v(" mdi mdi-invert-colors\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-jeepney"}), i._v(" mdi mdi-jeepney\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-jira"}), i._v(" mdi mdi-jira\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-jsfiddle"}), i._v(" mdi mdi-jsfiddle\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-json"}), i._v(" mdi mdi-json\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-keg"}), i._v(" mdi mdi-keg\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-kettle"}), i._v(" mdi mdi-kettle\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-key"}), i._v(" mdi mdi-key\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-key-change"}), i._v(" mdi mdi-key-change\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-key-minus"}), i._v(" mdi mdi-key-minus\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-key-plus"}), i._v(" mdi mdi-key-plus\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-key-remove"}), i._v(" mdi mdi-key-remove\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-key-variant"}), i._v(" mdi mdi-key-variant\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-keyboard"}), i._v(" mdi mdi-keyboard\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-keyboard-backspace"}), i._v(" mdi mdi-keyboard-backspace\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-keyboard-caps"}), i._v(" mdi mdi-keyboard-caps\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-keyboard-close"}), i._v(" mdi mdi-keyboard-close\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-keyboard-off"}), i._v(" mdi mdi-keyboard-off\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-keyboard-return"}), i._v(" mdi mdi-keyboard-return\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-keyboard-tab"}), i._v(" mdi mdi-keyboard-tab\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-keyboard-variant"}), i._v(" mdi mdi-keyboard-variant\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-kodi"}), i._v(" mdi mdi-kodi\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-label"}), i._v(" mdi mdi-label\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-label-outline"}), i._v(" mdi mdi-label-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-lambda"}), i._v(" mdi mdi-lambda\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-lan"}), i._v(" mdi mdi-lan\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-lan-connect"}), i._v(" mdi mdi-lan-connect\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-lan-disconnect"}), i._v(" mdi mdi-lan-disconnect\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-lan-pending"}), i._v(" mdi mdi-lan-pending\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-language-c"}), i._v(" mdi mdi-language-c\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-language-cpp"}), i._v(" mdi mdi-language-cpp\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-language-csharp"}), i._v(" mdi mdi-language-csharp\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-language-css3"}), i._v(" mdi mdi-language-css3\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-language-html5"}), i._v(" mdi mdi-language-html5\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-language-javascript"}), i._v(" mdi mdi-language-javascript\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-language-php"}), i._v(" mdi mdi-language-php\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-language-python"}), i._v(" mdi mdi-language-python\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-language-python-text"}), i._v(" mdi mdi-language-python-text\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-laptop"}), i._v(" mdi mdi-laptop\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-laptop-chromebook"}), i._v(" mdi mdi-laptop-chromebook\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-laptop-mac"}), i._v(" mdi mdi-laptop-mac\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-laptop-windows"}), i._v(" mdi mdi-laptop-windows\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-lastfm"}), i._v(" mdi mdi-lastfm\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-launch"}), i._v(" mdi mdi-launch\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-layers"}), i._v(" mdi mdi-layers\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-layers-off"}), i._v(" mdi mdi-layers-off\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-lead-pencil"}), i._v(" mdi mdi-lead-pencil\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-leaf"}), i._v(" mdi mdi-leaf\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-led-off"}), i._v(" mdi mdi-led-off\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-led-on"}), i._v(" mdi mdi-led-on\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-led-outline"}), i._v(" mdi mdi-led-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-led-variant-off"}), i._v(" mdi mdi-led-variant-off\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-led-variant-on"}), i._v(" mdi mdi-led-variant-on\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-led-variant-outline"}), i._v(" mdi mdi-led-variant-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-library"}), i._v(" mdi mdi-library\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-library-books"}), i._v(" mdi mdi-library-books\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-library-music"}), i._v(" mdi mdi-library-music\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-library-plus"}), i._v(" mdi mdi-library-plus\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-lightbulb"}), i._v(" mdi mdi-lightbulb\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-lightbulb-outline"}), i._v(" mdi mdi-lightbulb-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-link"}), i._v(" mdi mdi-link\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-link-off"}), i._v(" mdi mdi-link-off\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-link-variant"}), i._v(" mdi mdi-link-variant\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-link-variant-off"}), i._v(" mdi mdi-link-variant-off\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-linkedin"}), i._v(" mdi mdi-linkedin\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-linkedin-box"}), i._v(" mdi mdi-linkedin-box\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-linux"}), i._v(" mdi mdi-linux\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-lock"}), i._v(" mdi mdi-lock\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-lock-open"}), i._v(" mdi mdi-lock-open\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-lock-open-outline"}), i._v(" mdi mdi-lock-open-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-lock-outline"}), i._v(" mdi mdi-lock-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-lock-plus"}), i._v(" mdi mdi-lock-plus\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-login"}), i._v(" mdi mdi-login\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-login-variant"}), i._v(" mdi mdi-login-variant\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-logout"}), i._v(" mdi mdi-logout\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-logout-variant"}), i._v(" mdi mdi-logout-variant\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-looks"}), i._v(" mdi mdi-looks\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-loupe"}), i._v(" mdi mdi-loupe\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-lumx"}), i._v(" mdi mdi-lumx\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-magnet"}), i._v(" mdi mdi-magnet\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-magnet-on"}), i._v(" mdi mdi-magnet-on\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-magnify"}), i._v(" mdi mdi-magnify\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-magnify-minus"}), i._v(" mdi mdi-magnify-minus\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-magnify-plus"}), i._v(" mdi mdi-magnify-plus\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-mail-ru"}), i._v(" mdi mdi-mail-ru\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-map"}), i._v(" mdi mdi-map\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-map-marker"}), i._v(" mdi mdi-map-marker\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-map-marker-circle"}), i._v(" mdi mdi-map-marker-circle\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-map-marker-minus"}), i._v(" mdi mdi-map-marker-minus\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-map-marker-multiple"}), i._v(" mdi mdi-map-marker-multiple\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-map-marker-off"}), i._v(" mdi mdi-map-marker-off\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-map-marker-plus"}), i._v(" mdi mdi-map-marker-plus\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-map-marker-radius"}), i._v(" mdi mdi-map-marker-radius\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-margin"}), i._v(" mdi mdi-margin\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-markdown"}), i._v(" mdi mdi-markdown\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-marker"}), i._v(" mdi mdi-marker\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-marker-check"}), i._v(" mdi mdi-marker-check\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-martini"}), i._v(" mdi mdi-martini\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-material-ui"}), i._v(" mdi mdi-material-ui\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-math-compass"}), i._v(" mdi mdi-math-compass\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-matrix"}), i._v(" mdi mdi-matrix\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-maxcdn"}), i._v(" mdi mdi-maxcdn\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-medium"}), i._v(" mdi mdi-medium\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-memory"}), i._v(" mdi mdi-memory\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-menu"}), i._v(" mdi mdi-menu\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-menu-down"}), i._v(" mdi mdi-menu-down\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-menu-left"}), i._v(" mdi mdi-menu-left\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-menu-right"}), i._v(" mdi mdi-menu-right\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-menu-up"}), i._v(" mdi mdi-menu-up\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-message"}), i._v(" mdi mdi-message\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-message-alert"}), i._v(" mdi mdi-message-alert\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-message-draw"}), i._v(" mdi mdi-message-draw\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-message-image"}), i._v(" mdi mdi-message-image\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-message-outline"}), i._v(" mdi mdi-message-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-message-plus"}), i._v(" mdi mdi-message-plus\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-message-processing"}), i._v(" mdi mdi-message-processing\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-message-reply"}), i._v(" mdi mdi-message-reply\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-message-reply-text"}), i._v(" mdi mdi-message-reply-text\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-message-text"}), i._v(" mdi mdi-message-text\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-message-text-outline"}), i._v(" mdi mdi-message-text-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-message-video"}), i._v(" mdi mdi-message-video\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-meteor"}), i._v(" mdi mdi-meteor\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-microphone"}), i._v(" mdi mdi-microphone\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-microphone-off"}), i._v(" mdi mdi-microphone-off\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-microphone-outline"}), i._v(" mdi mdi-microphone-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-microphone-settings"}), i._v(" mdi mdi-microphone-settings\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-microphone-variant"}), i._v(" mdi mdi-microphone-variant\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-microphone-variant-off"}), i._v(" mdi mdi-microphone-variant-off\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-microscope"}), i._v(" mdi mdi-microscope\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-microsoft"}), i._v(" mdi mdi-microsoft\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-minecraft"}), i._v(" mdi mdi-minecraft\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-minus"}), i._v(" mdi mdi-minus\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-minus-box"}), i._v(" mdi mdi-minus-box\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-minus-circle"}), i._v(" mdi mdi-minus-circle\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-minus-circle-outline"}), i._v(" mdi mdi-minus-circle-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-minus-network"}), i._v(" mdi mdi-minus-network\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-mixcloud"}), i._v(" mdi mdi-mixcloud\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-monitor"}), i._v(" mdi mdi-monitor\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-monitor-multiple"}), i._v(" mdi mdi-monitor-multiple\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-more"}), i._v(" mdi mdi-more\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-motorbike"}), i._v(" mdi mdi-motorbike\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-mouse"}), i._v(" mdi mdi-mouse\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-mouse-off"}), i._v(" mdi mdi-mouse-off\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-mouse-variant"}), i._v(" mdi mdi-mouse-variant\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-mouse-variant-off"}), i._v(" mdi mdi-mouse-variant-off\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-move-resize"}), i._v(" mdi mdi-move-resize\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-move-resize-variant"}), i._v(" mdi mdi-move-resize-variant\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-movie"}), i._v(" mdi mdi-movie\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-multiplication"}), i._v(" mdi mdi-multiplication\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-multiplication-box"}), i._v(" mdi mdi-multiplication-box\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-music-box"}), i._v(" mdi mdi-music-box\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-music-box-outline"}), i._v(" mdi mdi-music-box-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-music-circle"}), i._v(" mdi mdi-music-circle\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-music-note"}), i._v(" mdi mdi-music-note\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-music-note-bluetooth"}), i._v(" mdi mdi-music-note-bluetooth\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-music-note-bluetooth-off"}), i._v(" mdi mdi-music-note-bluetooth-off\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-music-note-eighth"}), i._v(" mdi mdi-music-note-eighth\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-music-note-half"}), i._v(" mdi mdi-music-note-half\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-music-note-off"}), i._v(" mdi mdi-music-note-off\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-music-note-quarter"}), i._v(" mdi mdi-music-note-quarter\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-music-note-sixteenth"}), i._v(" mdi mdi-music-note-sixteenth\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-music-note-whole"}), i._v(" mdi mdi-music-note-whole\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-nature"}), i._v(" mdi mdi-nature\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-nature-people"}), i._v(" mdi mdi-nature-people\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-navigation"}), i._v(" mdi mdi-navigation\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-near-me"}), i._v(" mdi mdi-near-me\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-needle"}), i._v(" mdi mdi-needle\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-nest-protect"}), i._v(" mdi mdi-nest-protect\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-nest-thermostat"}), i._v(" mdi mdi-nest-thermostat\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-new-box"}), i._v(" mdi mdi-new-box\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-newspaper"}), i._v(" mdi mdi-newspaper\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-nfc"}), i._v(" mdi mdi-nfc\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-nfc-tap"}), i._v(" mdi mdi-nfc-tap\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-nfc-variant"}), i._v(" mdi mdi-nfc-variant\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-nodejs"}), i._v(" mdi mdi-nodejs\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-note"}), i._v(" mdi mdi-note\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-note-outline"}), i._v(" mdi mdi-note-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-note-plus"}), i._v(" mdi mdi-note-plus\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-note-plus-outline"}), i._v(" mdi mdi-note-plus-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-note-text"}), i._v(" mdi mdi-note-text\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-notification-clear-all"}), i._v(" mdi mdi-notification-clear-all\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-numeric"}), i._v(" mdi mdi-numeric\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-numeric-0-box"}), i._v(" mdi mdi-numeric-0-box\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-numeric-0-box-multiple-outline"}), i._v(" mdi mdi-numeric-0-box-multiple-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-numeric-0-box-outline"}), i._v(" mdi mdi-numeric-0-box-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-numeric-1-box"}), i._v(" mdi mdi-numeric-1-box\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-numeric-1-box-multiple-outline"}), i._v(" mdi mdi-numeric-1-box-multiple-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-numeric-1-box-outline"}), i._v(" mdi mdi-numeric-1-box-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-numeric-2-box"}), i._v(" mdi mdi-numeric-2-box\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-numeric-2-box-multiple-outline"}), i._v(" mdi mdi-numeric-2-box-multiple-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-numeric-2-box-outline"}), i._v(" mdi mdi-numeric-2-box-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-numeric-3-box"}), i._v(" mdi mdi-numeric-3-box\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-numeric-3-box-multiple-outline"}), i._v(" mdi mdi-numeric-3-box-multiple-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-numeric-3-box-outline"}), i._v(" mdi mdi-numeric-3-box-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-numeric-4-box"}), i._v(" mdi mdi-numeric-4-box\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-numeric-4-box-multiple-outline"}), i._v(" mdi mdi-numeric-4-box-multiple-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-numeric-4-box-outline"}), i._v(" mdi mdi-numeric-4-box-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-numeric-5-box"}), i._v(" mdi mdi-numeric-5-box\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-numeric-5-box-multiple-outline"}), i._v(" mdi mdi-numeric-5-box-multiple-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-numeric-5-box-outline"}), i._v(" mdi mdi-numeric-5-box-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-numeric-6-box"}), i._v(" mdi mdi-numeric-6-box\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-numeric-6-box-multiple-outline"}), i._v(" mdi mdi-numeric-6-box-multiple-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-numeric-6-box-outline"}), i._v(" mdi mdi-numeric-6-box-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-numeric-7-box"}), i._v(" mdi mdi-numeric-7-box\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-numeric-7-box-multiple-outline"}), i._v(" mdi mdi-numeric-7-box-multiple-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-numeric-7-box-outline"}), i._v(" mdi mdi-numeric-7-box-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-numeric-8-box"}), i._v(" mdi mdi-numeric-8-box\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-numeric-8-box-multiple-outline"}), i._v(" mdi mdi-numeric-8-box-multiple-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-numeric-8-box-outline"}), i._v(" mdi mdi-numeric-8-box-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-numeric-9-box"}), i._v(" mdi mdi-numeric-9-box\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-numeric-9-box-multiple-outline"}), i._v(" mdi mdi-numeric-9-box-multiple-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-numeric-9-box-outline"}), i._v(" mdi mdi-numeric-9-box-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-numeric-9-plus-box"}), i._v(" mdi mdi-numeric-9-plus-box\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-numeric-9-plus-box-multiple-outline"}), i._v(" mdi mdi-numeric-9-plus-box-multiple-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-numeric-9-plus-box-outline"}), i._v(" mdi mdi-numeric-9-plus-box-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-nutrition"}), i._v(" mdi mdi-nutrition\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-octagon"}), i._v(" mdi mdi-octagon\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-octagon-outline"}), i._v(" mdi mdi-octagon-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-odnoklassniki"}), i._v(" mdi mdi-odnoklassniki\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-office"}), i._v(" mdi mdi-office\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-oil"}), i._v(" mdi mdi-oil\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-oil-temperature"}), i._v(" mdi mdi-oil-temperature\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-omega"}), i._v(" mdi mdi-omega\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-onedrive"}), i._v(" mdi mdi-onedrive\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-opacity"}), i._v(" mdi mdi-opacity\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-open-in-app"}), i._v(" mdi mdi-open-in-app\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-open-in-new"}), i._v(" mdi mdi-open-in-new\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-openid"}), i._v(" mdi mdi-openid\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-opera"}), i._v(" mdi mdi-opera\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-ornament"}), i._v(" mdi mdi-ornament\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-ornament-variant"}), i._v(" mdi mdi-ornament-variant\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-outbox"}), i._v(" mdi mdi-outbox\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-owl"}), i._v(" mdi mdi-owl\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-package"}), i._v(" mdi mdi-package\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-package-down"}), i._v(" mdi mdi-package-down\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-package-up"}), i._v(" mdi mdi-package-up\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-package-variant"}), i._v(" mdi mdi-package-variant\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-package-variant-closed"}), i._v(" mdi mdi-package-variant-closed\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-page-first"}), i._v(" mdi mdi-page-first\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-page-last"}), i._v(" mdi mdi-page-last\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-palette"}), i._v(" mdi mdi-palette\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-palette-advanced"}), i._v(" mdi mdi-palette-advanced\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-panda"}), i._v(" mdi mdi-panda\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-pandora"}), i._v(" mdi mdi-pandora\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-panorama"}), i._v(" mdi mdi-panorama\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-panorama-fisheye"}), i._v(" mdi mdi-panorama-fisheye\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-panorama-horizontal"}), i._v(" mdi mdi-panorama-horizontal\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-panorama-vertical"}), i._v(" mdi mdi-panorama-vertical\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-panorama-wide-angle"}), i._v(" mdi mdi-panorama-wide-angle\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-paper-cut-vertical"}), i._v(" mdi mdi-paper-cut-vertical\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-paperclip"}), i._v(" mdi mdi-paperclip\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-parking"}), i._v(" mdi mdi-parking\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-pause"}), i._v(" mdi mdi-pause\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-pause-circle"}), i._v(" mdi mdi-pause-circle\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-pause-circle-outline"}), i._v(" mdi mdi-pause-circle-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-pause-octagon"}), i._v(" mdi mdi-pause-octagon\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-pause-octagon-outline"}), i._v(" mdi mdi-pause-octagon-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-paw"}), i._v(" mdi mdi-paw\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-paw-off"}), i._v(" mdi mdi-paw-off\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-pen"}), i._v(" mdi mdi-pen\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-pencil"}), i._v(" mdi mdi-pencil\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-pencil-box"}), i._v(" mdi mdi-pencil-box\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-pencil-box-outline"}), i._v(" mdi mdi-pencil-box-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-pencil-lock"}), i._v(" mdi mdi-pencil-lock\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-pencil-off"}), i._v(" mdi mdi-pencil-off\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-percent"}), i._v(" mdi mdi-percent\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-pharmacy"}), i._v(" mdi mdi-pharmacy\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-phone"}), i._v(" mdi mdi-phone\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-phone-bluetooth"}), i._v(" mdi mdi-phone-bluetooth\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-phone-classic"}), i._v(" mdi mdi-phone-classic\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-phone-forward"}), i._v(" mdi mdi-phone-forward\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-phone-hangup"}), i._v(" mdi mdi-phone-hangup\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-phone-in-talk"}), i._v(" mdi mdi-phone-in-talk\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-phone-incoming"}), i._v(" mdi mdi-phone-incoming\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-phone-locked"}), i._v(" mdi mdi-phone-locked\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-phone-log"}), i._v(" mdi mdi-phone-log\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-phone-minus"}), i._v(" mdi mdi-phone-minus\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-phone-missed"}), i._v(" mdi mdi-phone-missed\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-phone-outgoing"}), i._v(" mdi mdi-phone-outgoing\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-phone-paused"}), i._v(" mdi mdi-phone-paused\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-phone-plus"}), i._v(" mdi mdi-phone-plus\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-phone-settings"}), i._v(" mdi mdi-phone-settings\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-phone-voip"}), i._v(" mdi mdi-phone-voip\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-pi"}), i._v(" mdi mdi-pi\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-pi-box"}), i._v(" mdi mdi-pi-box\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-pig"}), i._v(" mdi mdi-pig\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-pill"}), i._v(" mdi mdi-pill\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-pin"}), i._v(" mdi mdi-pin\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-pin-off"}), i._v(" mdi mdi-pin-off\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-pine-tree"}), i._v(" mdi mdi-pine-tree\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-pine-tree-box"}), i._v(" mdi mdi-pine-tree-box\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-pinterest"}), i._v(" mdi mdi-pinterest\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-pinterest-box"}), i._v(" mdi mdi-pinterest-box\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-pizza"}), i._v(" mdi mdi-pizza\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-play"}), i._v(" mdi mdi-play\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-play-box-outline"}), i._v(" mdi mdi-play-box-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-play-circle"}), i._v(" mdi mdi-play-circle\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-play-circle-outline"}), i._v(" mdi mdi-play-circle-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-play-pause"}), i._v(" mdi mdi-play-pause\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-play-protected-content"}), i._v(" mdi mdi-play-protected-content\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-playlist-check"}), i._v(" mdi mdi-playlist-check\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-playlist-minus"}), i._v(" mdi mdi-playlist-minus\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-playlist-play"}), i._v(" mdi mdi-playlist-play\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-playlist-plus"}), i._v(" mdi mdi-playlist-plus\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-playlist-remove"}), i._v(" mdi mdi-playlist-remove\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-playstation"}), i._v(" mdi mdi-playstation\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-plus"}), i._v(" mdi mdi-plus\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-plus-box"}), i._v(" mdi mdi-plus-box\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-plus-circle"}), i._v(" mdi mdi-plus-circle\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-plus-circle-multiple-outline"}), i._v(" mdi mdi-plus-circle-multiple-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-plus-circle-outline"}), i._v(" mdi mdi-plus-circle-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-plus-network"}), i._v(" mdi mdi-plus-network\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-plus-one"}), i._v(" mdi mdi-plus-one\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-pocket"}), i._v(" mdi mdi-pocket\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-pokeball"}), i._v(" mdi mdi-pokeball\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-polaroid"}), i._v(" mdi mdi-polaroid\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-poll"}), i._v(" mdi mdi-poll\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-poll-box"}), i._v(" mdi mdi-poll-box\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-polymer"}), i._v(" mdi mdi-polymer\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-pool"}), i._v(" mdi mdi-pool\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-popcorn"}), i._v(" mdi mdi-popcorn\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-pot"}), i._v(" mdi mdi-pot\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-pot-mix"}), i._v(" mdi mdi-pot-mix\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-pound"}), i._v(" mdi mdi-pound\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-pound-box"}), i._v(" mdi mdi-pound-box\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-power"}), i._v(" mdi mdi-power\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-power-settings"}), i._v(" mdi mdi-power-settings\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-power-socket"}), i._v(" mdi mdi-power-socket\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-presentation"}), i._v(" mdi mdi-presentation\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-presentation-play"}), i._v(" mdi mdi-presentation-play\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-printer"}), i._v(" mdi mdi-printer\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-printer-3d"}), i._v(" mdi mdi-printer-3d\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-printer-alert"}), i._v(" mdi mdi-printer-alert\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-priority-high"}), i._v(" mdi mdi-priority-high\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-priority-low"}), i._v(" mdi mdi-priority-low\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-professional-hexagon"}), i._v(" mdi mdi-professional-hexagon\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-projector"}), i._v(" mdi mdi-projector\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-projector-screen"}), i._v(" mdi mdi-projector-screen\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-pulse"}), i._v(" mdi mdi-pulse\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-puzzle"}), i._v(" mdi mdi-puzzle\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-qqchat"}), i._v(" mdi mdi-qqchat\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-qrcode"}), i._v(" mdi mdi-qrcode\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-qrcode-scan"}), i._v(" mdi mdi-qrcode-scan\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-quadcopter"}), i._v(" mdi mdi-quadcopter\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-quality-high"}), i._v(" mdi mdi-quality-high\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-quicktime"}), i._v(" mdi mdi-quicktime\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-radar"}), i._v(" mdi mdi-radar\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-radiator"}), i._v(" mdi mdi-radiator\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-radio"}), i._v(" mdi mdi-radio\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-radio-handheld"}), i._v(" mdi mdi-radio-handheld\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-radio-tower"}), i._v(" mdi mdi-radio-tower\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-radioactive"}), i._v(" mdi mdi-radioactive\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-radiobox-blank"}), i._v(" mdi mdi-radiobox-blank\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-radiobox-marked"}), i._v(" mdi mdi-radiobox-marked\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-raspberrypi"}), i._v(" mdi mdi-raspberrypi\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-ray-end"}), i._v(" mdi mdi-ray-end\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-ray-end-arrow"}), i._v(" mdi mdi-ray-end-arrow\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-ray-start-end"}), i._v(" mdi mdi-ray-start-end\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-ray-vertex"}), i._v(" mdi mdi-ray-vertex\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-rdio"}), i._v(" mdi mdi-rdio\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-read"}), i._v(" mdi mdi-read\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-readability"}), i._v(" mdi mdi-readability\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-receipt"}), i._v(" mdi mdi-receipt\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-record"}), i._v(" mdi mdi-record\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-record-rec"}), i._v(" mdi mdi-record-rec\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-recycle"}), i._v(" mdi mdi-recycle\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-reddit"}), i._v(" mdi mdi-reddit\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-redo"}), i._v(" mdi mdi-redo\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-redo-variant"}), i._v(" mdi mdi-redo-variant\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-refresh"}), i._v(" mdi mdi-refresh\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-regex"}), i._v(" mdi mdi-regex\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-relative-scale"}), i._v(" mdi mdi-relative-scale\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-reload"}), i._v(" mdi mdi-reload\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-remote"}), i._v(" mdi mdi-remote\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-rename-box"}), i._v(" mdi mdi-rename-box\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-repeat"}), i._v(" mdi mdi-repeat\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-repeat-off"}), i._v(" mdi mdi-repeat-off\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-repeat-once"}), i._v(" mdi mdi-repeat-once\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-replay"}), i._v(" mdi mdi-replay\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-reply"}), i._v(" mdi mdi-reply\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-reply-all"}), i._v(" mdi mdi-reply-all\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-reproduction"}), i._v(" mdi mdi-reproduction\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-resize-bottom-right"}), i._v(" mdi mdi-resize-bottom-right\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-responsive"}), i._v(" mdi mdi-responsive\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-rewind"}), i._v(" mdi mdi-rewind\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-ribbon"}), i._v(" mdi mdi-ribbon\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-road"}), i._v(" mdi mdi-road\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-road-variant"}), i._v(" mdi mdi-road-variant\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-rocket"}), i._v(" mdi mdi-rocket\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-rotate-3d"}), i._v(" mdi mdi-rotate-3d\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-rotate-left"}), i._v(" mdi mdi-rotate-left\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-rotate-left-variant"}), i._v(" mdi mdi-rotate-left-variant\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-rotate-right"}), i._v(" mdi mdi-rotate-right\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-rotate-right-variant"}), i._v(" mdi mdi-rotate-right-variant\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-rounded-corner"}), i._v(" mdi mdi-rounded-corner\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-router-wireless"}), i._v(" mdi mdi-router-wireless\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-routes"}), i._v(" mdi mdi-routes\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-rowing"}), i._v(" mdi mdi-rowing\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-rss"}), i._v(" mdi mdi-rss\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-rss-box"}), i._v(" mdi mdi-rss-box\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-ruler"}), i._v(" mdi mdi-ruler\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-run"}), i._v(" mdi mdi-run\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-sale"}), i._v(" mdi mdi-sale\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-satellite"}), i._v(" mdi mdi-satellite\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-satellite-variant"}), i._v(" mdi mdi-satellite-variant\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-saxophone"}), i._v(" mdi mdi-saxophone\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-scale"}), i._v(" mdi mdi-scale\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-scale-balance"}), i._v(" mdi mdi-scale-balance\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-scale-bathroom"}), i._v(" mdi mdi-scale-bathroom\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-school"}), i._v(" mdi mdi-school\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-screen-rotation"}), i._v(" mdi mdi-screen-rotation\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-screen-rotation-lock"}), i._v(" mdi mdi-screen-rotation-lock\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-screwdriver"}), i._v(" mdi mdi-screwdriver\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-script"}), i._v(" mdi mdi-script\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-sd"}), i._v(" mdi mdi-sd\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-seal"}), i._v(" mdi mdi-seal\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-seat-flat"}), i._v(" mdi mdi-seat-flat\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-seat-flat-angled"}), i._v(" mdi mdi-seat-flat-angled\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-seat-individual-suite"}), i._v(" mdi mdi-seat-individual-suite\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-seat-legroom-extra"}), i._v(" mdi mdi-seat-legroom-extra\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-seat-legroom-normal"}), i._v(" mdi mdi-seat-legroom-normal\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-seat-legroom-reduced"}), i._v(" mdi mdi-seat-legroom-reduced\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-seat-recline-extra"}), i._v(" mdi mdi-seat-recline-extra\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-seat-recline-normal"}), i._v(" mdi mdi-seat-recline-normal\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-security"}), i._v(" mdi mdi-security\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-security-network"}), i._v(" mdi mdi-security-network\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-select"}), i._v(" mdi mdi-select\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-select-all"}), i._v(" mdi mdi-select-all\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-select-inverse"}), i._v(" mdi mdi-select-inverse\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-select-off"}), i._v(" mdi mdi-select-off\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-selection"}), i._v(" mdi mdi-selection\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-send"}), i._v(" mdi mdi-send\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-serial-port"}), i._v(" mdi mdi-serial-port\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-server"}), i._v(" mdi mdi-server\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-server-minus"}), i._v(" mdi mdi-server-minus\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-server-network"}), i._v(" mdi mdi-server-network\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-server-network-off"}), i._v(" mdi mdi-server-network-off\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-server-off"}), i._v(" mdi mdi-server-off\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-server-plus"}), i._v(" mdi mdi-server-plus\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-server-remove"}), i._v(" mdi mdi-server-remove\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-server-security"}), i._v(" mdi mdi-server-security\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-settings"}), i._v(" mdi mdi-settings\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-settings-box"}), i._v(" mdi mdi-settings-box\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-shape-circle-plus"}), i._v(" mdi mdi-shape-circle-plus\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-shape-plus"}), i._v(" mdi mdi-shape-plus\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-shape-polygon-plus"}), i._v(" mdi mdi-shape-polygon-plus\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-shape-rectangle-plus"}), i._v(" mdi mdi-shape-rectangle-plus\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-shape-square-plus"}), i._v(" mdi mdi-shape-square-plus\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-share"}), i._v(" mdi mdi-share\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-share-variant"}), i._v(" mdi mdi-share-variant\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-shield"}), i._v(" mdi mdi-shield\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-shield-outline"}), i._v(" mdi mdi-shield-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-shopping"}), i._v(" mdi mdi-shopping\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-shopping-music"}), i._v(" mdi mdi-shopping-music\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-shredder"}), i._v(" mdi mdi-shredder\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-shuffle"}), i._v(" mdi mdi-shuffle\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-shuffle-disabled"}), i._v(" mdi mdi-shuffle-disabled\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-shuffle-variant"}), i._v(" mdi mdi-shuffle-variant\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-sigma"}), i._v(" mdi mdi-sigma\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-sigma-lower"}), i._v(" mdi mdi-sigma-lower\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-sign-caution"}), i._v(" mdi mdi-sign-caution\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-signal"}), i._v(" mdi mdi-signal\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-signal-variant"}), i._v(" mdi mdi-signal-variant\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-silverware"}), i._v(" mdi mdi-silverware\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-silverware-fork"}), i._v(" mdi mdi-silverware-fork\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-silverware-spoon"}), i._v(" mdi mdi-silverware-spoon\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-silverware-variant"}), i._v(" mdi mdi-silverware-variant\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-sim"}), i._v(" mdi mdi-sim\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-sim-alert"}), i._v(" mdi mdi-sim-alert\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-sim-off"}), i._v(" mdi mdi-sim-off\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-sitemap"}), i._v(" mdi mdi-sitemap\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-skip-backward"}), i._v(" mdi mdi-skip-backward\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-skip-forward"}), i._v(" mdi mdi-skip-forward\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-skip-next"}), i._v(" mdi mdi-skip-next\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-skip-next-circle"}), i._v(" mdi mdi-skip-next-circle\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-skip-next-circle-outline"}), i._v(" mdi mdi-skip-next-circle-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-skip-previous"}), i._v(" mdi mdi-skip-previous\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-skip-previous-circle"}), i._v(" mdi mdi-skip-previous-circle\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-skip-previous-circle-outline"}), i._v(" mdi mdi-skip-previous-circle-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-skype"}), i._v(" mdi mdi-skype\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-skype-business"}), i._v(" mdi mdi-skype-business\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-slack"}), i._v(" mdi mdi-slack\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-sleep"}), i._v(" mdi mdi-sleep\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-sleep-off"}), i._v(" mdi mdi-sleep-off\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-smoking"}), i._v(" mdi mdi-smoking\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-smoking-off"}), i._v(" mdi mdi-smoking-off\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-snapchat"}), i._v(" mdi mdi-snapchat\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-snowman"}), i._v(" mdi mdi-snowman\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-soccer"}), i._v(" mdi mdi-soccer\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-sofa"}), i._v(" mdi mdi-sofa\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-sort"}), i._v(" mdi mdi-sort\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-sort-alphabetical"}), i._v(" mdi mdi-sort-alphabetical\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-sort-ascending"}), i._v(" mdi mdi-sort-ascending\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-sort-descending"}), i._v(" mdi mdi-sort-descending\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-sort-numeric"}), i._v(" mdi mdi-sort-numeric\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-sort-variant"}), i._v(" mdi mdi-sort-variant\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-soundcloud"}), i._v(" mdi mdi-soundcloud\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-source-branch"}), i._v(" mdi mdi-source-branch\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-source-fork"}), i._v(" mdi mdi-source-fork\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-source-merge"}), i._v(" mdi mdi-source-merge\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-source-pull"}), i._v(" mdi mdi-source-pull\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-speaker"}), i._v(" mdi mdi-speaker\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-speaker-off"}), i._v(" mdi mdi-speaker-off\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-speedometer"}), i._v(" mdi mdi-speedometer\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-spellcheck"}), i._v(" mdi mdi-spellcheck\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-spotify"}), i._v(" mdi mdi-spotify\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-spotlight"}), i._v(" mdi mdi-spotlight\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-spotlight-beam"}), i._v(" mdi mdi-spotlight-beam\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-spray"}), i._v(" mdi mdi-spray\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-square-inc"}), i._v(" mdi mdi-square-inc\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-square-inc-cash"}), i._v(" mdi mdi-square-inc-cash\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-stackexchange"}), i._v(" mdi mdi-stackexchange\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-stackoverflow"}), i._v(" mdi mdi-stackoverflow\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-stairs"}), i._v(" mdi mdi-stairs\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-star"}), i._v(" mdi mdi-star\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-star-circle"}), i._v(" mdi mdi-star-circle\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-star-half"}), i._v(" mdi mdi-star-half\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-star-off"}), i._v(" mdi mdi-star-off\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-star-outline"}), i._v(" mdi mdi-star-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-steam"}), i._v(" mdi mdi-steam\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-steering"}), i._v(" mdi mdi-steering\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-step-backward"}), i._v(" mdi mdi-step-backward\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-step-backward-2"}), i._v(" mdi mdi-step-backward-2\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-step-forward"}), i._v(" mdi mdi-step-forward\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-step-forward-2"}), i._v(" mdi mdi-step-forward-2\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-stethoscope"}), i._v(" mdi mdi-stethoscope\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-sticker"}), i._v(" mdi mdi-sticker\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-stocking"}), i._v(" mdi mdi-stocking\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-stop"}), i._v(" mdi mdi-stop\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-stop-circle"}), i._v(" mdi mdi-stop-circle\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-stop-circle-outline"}), i._v(" mdi mdi-stop-circle-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-store"}), i._v(" mdi mdi-store\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-store-24-hour"}), i._v(" mdi mdi-store-24-hour\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-stove"}), i._v(" mdi mdi-stove\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-subdirectory-arrow-left"}), i._v(" mdi mdi-subdirectory-arrow-left\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-subdirectory-arrow-right"}), i._v(" mdi mdi-subdirectory-arrow-right\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-subway"}), i._v(" mdi mdi-subway\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-sunglasses"}), i._v(" mdi mdi-sunglasses\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-surround-sound"}), i._v(" mdi mdi-surround-sound\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-swap-horizontal"}), i._v(" mdi mdi-swap-horizontal\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-swap-vertical"}), i._v(" mdi mdi-swap-vertical\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-swim"}), i._v(" mdi mdi-swim\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-switch"}), i._v(" mdi mdi-switch\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-sword"}), i._v(" mdi mdi-sword\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-sync"}), i._v(" mdi mdi-sync\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-sync-alert"}), i._v(" mdi mdi-sync-alert\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-sync-off"}), i._v(" mdi mdi-sync-off\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-tab"}), i._v(" mdi mdi-tab\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-tab-unselected"}), i._v(" mdi mdi-tab-unselected\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-table"}), i._v(" mdi mdi-table\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-table-column-plus-after"}), i._v(" mdi mdi-table-column-plus-after\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-table-column-plus-before"}), i._v(" mdi mdi-table-column-plus-before\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-table-column-remove"}), i._v(" mdi mdi-table-column-remove\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-table-column-width"}), i._v(" mdi mdi-table-column-width\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-table-edit"}), i._v(" mdi mdi-table-edit\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-table-large"}), i._v(" mdi mdi-table-large\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-table-row-height"}), i._v(" mdi mdi-table-row-height\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-table-row-plus-after"}), i._v(" mdi mdi-table-row-plus-after\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-table-row-plus-before"}), i._v(" mdi mdi-table-row-plus-before\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-table-row-remove"}), i._v(" mdi mdi-table-row-remove\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-tablet"}), i._v(" mdi mdi-tablet\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-tablet-android"}), i._v(" mdi mdi-tablet-android\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-tablet-ipad"}), i._v(" mdi mdi-tablet-ipad\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-tag"}), i._v(" mdi mdi-tag\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-tag-faces"}), i._v(" mdi mdi-tag-faces\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-tag-multiple"}), i._v(" mdi mdi-tag-multiple\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-tag-outline"}), i._v(" mdi mdi-tag-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-tag-text-outline"}), i._v(" mdi mdi-tag-text-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-target"}), i._v(" mdi mdi-target\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-taxi"}), i._v(" mdi mdi-taxi\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-teamviewer"}), i._v(" mdi mdi-teamviewer\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-telegram"}), i._v(" mdi mdi-telegram\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-television"}), i._v(" mdi mdi-television\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-television-guide"}), i._v(" mdi mdi-television-guide\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-temperature-celsius"}), i._v(" mdi mdi-temperature-celsius\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-temperature-fahrenheit"}), i._v(" mdi mdi-temperature-fahrenheit\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-temperature-kelvin"}), i._v(" mdi mdi-temperature-kelvin\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-tennis"}), i._v(" mdi mdi-tennis\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-tent"}), i._v(" mdi mdi-tent\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-terrain"}), i._v(" mdi mdi-terrain\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-test-tube"}), i._v(" mdi mdi-test-tube\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-text-shadow"}), i._v(" mdi mdi-text-shadow\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-text-to-speech"}), i._v(" mdi mdi-text-to-speech\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-text-to-speech-off"}), i._v(" mdi mdi-text-to-speech-off\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-textbox"}), i._v(" mdi mdi-textbox\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-texture"}), i._v(" mdi mdi-texture\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-theater"}), i._v(" mdi mdi-theater\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-theme-light-dark"}), i._v(" mdi mdi-theme-light-dark\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-thermometer"}), i._v(" mdi mdi-thermometer\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-thermometer-lines"}), i._v(" mdi mdi-thermometer-lines\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-thumb-down"}), i._v(" mdi mdi-thumb-down\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-thumb-down-outline"}), i._v(" mdi mdi-thumb-down-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-thumb-up"}), i._v(" mdi mdi-thumb-up\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-thumb-up-outline"}), i._v(" mdi mdi-thumb-up-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-thumbs-up-down"}), i._v(" mdi mdi-thumbs-up-down\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-ticket"}), i._v(" mdi mdi-ticket\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-ticket-account"}), i._v(" mdi mdi-ticket-account\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-ticket-confirmation"}), i._v(" mdi mdi-ticket-confirmation\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-tie"}), i._v(" mdi mdi-tie\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-timelapse"}), i._v(" mdi mdi-timelapse\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-timer"}), i._v(" mdi mdi-timer\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-timer-10"}), i._v(" mdi mdi-timer-10\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-timer-3"}), i._v(" mdi mdi-timer-3\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-timer-off"}), i._v(" mdi mdi-timer-off\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-timer-sand"}), i._v(" mdi mdi-timer-sand\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-timetable"}), i._v(" mdi mdi-timetable\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-toggle-switch"}), i._v(" mdi mdi-toggle-switch\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-toggle-switch-off"}), i._v(" mdi mdi-toggle-switch-off\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-tooltip"}), i._v(" mdi mdi-tooltip\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-tooltip-edit"}), i._v(" mdi mdi-tooltip-edit\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-tooltip-image"}), i._v(" mdi mdi-tooltip-image\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-tooltip-outline"}), i._v(" mdi mdi-tooltip-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-tooltip-outline-plus"}), i._v(" mdi mdi-tooltip-outline-plus\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-tooltip-text"}), i._v(" mdi mdi-tooltip-text\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-tooth"}), i._v(" mdi mdi-tooth\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-tor"}), i._v(" mdi mdi-tor\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-traffic-light"}), i._v(" mdi mdi-traffic-light\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-train"}), i._v(" mdi mdi-train\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-tram"}), i._v(" mdi mdi-tram\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-transcribe"}), i._v(" mdi mdi-transcribe\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-transcribe-close"}), i._v(" mdi mdi-transcribe-close\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-transfer"}), i._v(" mdi mdi-transfer\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-translate"}), i._v(" mdi mdi-translate\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-tree"}), i._v(" mdi mdi-tree\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-trello"}), i._v(" mdi mdi-trello\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-trending-down"}), i._v(" mdi mdi-trending-down\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-trending-neutral"}), i._v(" mdi mdi-trending-neutral\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-trending-up"}), i._v(" mdi mdi-trending-up\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-triangle"}), i._v(" mdi mdi-triangle\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-triangle-outline"}), i._v(" mdi mdi-triangle-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-trophy"}), i._v(" mdi mdi-trophy\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-trophy-award"}), i._v(" mdi mdi-trophy-award\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-trophy-outline"}), i._v(" mdi mdi-trophy-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-trophy-variant"}), i._v(" mdi mdi-trophy-variant\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-trophy-variant-outline"}), i._v(" mdi mdi-trophy-variant-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-truck"}), i._v(" mdi mdi-truck\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-truck-delivery"}), i._v(" mdi mdi-truck-delivery\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-tshirt-crew"}), i._v(" mdi mdi-tshirt-crew\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-tshirt-v"}), i._v(" mdi mdi-tshirt-v\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-tumblr"}), i._v(" mdi mdi-tumblr\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-tumblr-reblog"}), i._v(" mdi mdi-tumblr-reblog\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-tune"}), i._v(" mdi mdi-tune\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-tune-vertical"}), i._v(" mdi mdi-tune-vertical\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-twitch"}), i._v(" mdi mdi-twitch\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-twitter"}), i._v(" mdi mdi-twitter\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-twitter-box"}), i._v(" mdi mdi-twitter-box\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-twitter-circle"}), i._v(" mdi mdi-twitter-circle\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-twitter-retweet"}), i._v(" mdi mdi-twitter-retweet\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-ubuntu"}), i._v(" mdi mdi-ubuntu\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-umbraco"}), i._v(" mdi mdi-umbraco\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-umbrella"}), i._v(" mdi mdi-umbrella\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-umbrella-outline"}), i._v(" mdi mdi-umbrella-outline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-undo"}), i._v(" mdi mdi-undo\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-undo-variant"}), i._v(" mdi mdi-undo-variant\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-unfold-less"}), i._v(" mdi mdi-unfold-less\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-unfold-more"}), i._v(" mdi mdi-unfold-more\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-ungroup"}), i._v(" mdi mdi-ungroup\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-untappd"}), i._v(" mdi mdi-untappd\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-upload"}), i._v(" mdi mdi-upload\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-usb"}), i._v(" mdi mdi-usb\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-vector-arrange-above"}), i._v(" mdi mdi-vector-arrange-above\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-vector-arrange-below "}), i._v(" mdi mdi-vector-arrange-below\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-vector-circle"}), i._v(" mdi mdi-vector-circle\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-vector-circle-variant"}), i._v(" mdi mdi-vector-circle-variant\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-vector-combine"}), i._v(" mdi mdi-vector-combine\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-vector-curve"}), i._v(" mdi mdi-vector-curve\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-vector-difference"}), i._v(" mdi mdi-vector-difference\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-vector-difference-ab"}), i._v(" mdi mdi-vector-difference-ab\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-vector-difference-ba"}), i._v(" mdi mdi-vector-difference-ba\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-vector-intersection"}), i._v(" mdi mdi-vector-intersection\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-vector-line"}), i._v(" mdi mdi-vector-line\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-vector-point"}), i._v(" mdi mdi-vector-point\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-vector-polygon"}), i._v(" mdi mdi-vector-polygon\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-vector-polyline "}), i._v(" mdi mdi-vector-polyline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-vector-rectangle"}), i._v(" mdi mdi-vector-rectangle\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-vector-selection "}), i._v(" mdi mdi-vector-selection\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-vector-square"}), i._v(" mdi mdi-vector-square\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-vector-triangle"}), i._v(" mdi mdi-vector-triangle\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-vector-union"}), i._v(" mdi mdi-vector-union\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-verified"}), i._v(" mdi mdi-verified\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-vibrate "}), i._v(" mdi mdi-vibrate\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-video"}), i._v(" mdi mdi-video\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-video-off"}), i._v(" mdi mdi-video-off\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-video-switch"}), i._v(" mdi mdi-video-switch\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-view-agenda"}), i._v(" mdi mdi-view-agenda\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-view-array"}), i._v(" mdi mdi-view-array\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-view-carousel"}), i._v(" mdi mdi-view-carousel\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-view-column"}), i._v(" mdi mdi-view-column\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-view-dashboard"}), i._v(" mdi mdi-view-dashboard\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-view-day"}), i._v(" mdi mdi-view-day\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-view-grid"}), i._v(" mdi mdi-view-grid\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-view-headline"}), i._v(" mdi mdi-view-headline\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-view-list"}), i._v(" mdi mdi-view-list\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-view-module"}), i._v(" mdi mdi-view-module\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-view-quilt"}), i._v(" mdi mdi-view-quilt\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-view-stream"}), i._v(" mdi mdi-view-stream\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-view-week"}), i._v(" mdi mdi-view-week\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-vimeo "}), i._v(" mdi mdi-vimeo\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-vine"}), i._v(" mdi mdi-vine\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-violin"}), i._v(" mdi mdi-violin\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-visualstudio"}), i._v(" mdi mdi-visualstudio\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-vk"}), i._v(" mdi mdi-vk\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-vk-box"}), i._v(" mdi mdi-vk-box\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-vk-circle"}), i._v(" mdi mdi-vk-circle\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-vlc"}), i._v(" mdi mdi-vlc\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-voice"}), i._v(" mdi mdi-voice\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-voicemail"}), i._v(" mdi mdi-voicemail\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-volume-high"}), i._v(" mdi mdi-volume-high\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-volume-low"}), i._v(" mdi mdi-volume-low\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-volume-medium"}), i._v(" mdi mdi-volume-medium\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-volume-off"}), i._v(" mdi mdi-volume-off\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-vpn"}), i._v(" mdi mdi-vpn\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-walk"}), i._v(" mdi mdi-walk\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-wallet"}), i._v(" mdi mdi-wallet\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-wallet-giftcard"}), i._v(" mdi mdi-wallet-giftcard\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-wallet-membership"}), i._v(" mdi mdi-wallet-membership\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-wallet-travel"}), i._v(" mdi mdi-wallet-travel\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-wan"}), i._v(" mdi mdi-wan\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-watch"}), i._v(" mdi mdi-watch\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-watch-export"}), i._v(" mdi mdi-watch-export\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-watch-import"}), i._v(" mdi mdi-watch-import\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-water"}), i._v(" mdi mdi-water\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-water-off"}), i._v(" mdi mdi-water-off\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-water-percent"}), i._v(" mdi mdi-water-percent\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-water-pump"}), i._v(" mdi mdi-water-pump\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-watermark"}), i._v(" mdi mdi-watermark\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-weather-cloudy"}), i._v(" mdi mdi-weather-cloudy\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-weather-fog"}), i._v(" mdi mdi-weather-fog\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-weather-hail"}), i._v(" mdi mdi-weather-hail\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-weather-lightning"}), i._v(" mdi mdi-weather-lightning\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-weather-night"}), i._v(" mdi mdi-weather-night\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-weather-partlycloudy"}), i._v(" mdi mdi-weather-partlycloudy\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-weather-pouring"}), i._v(" mdi mdi-weather-pouring\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-weather-rainy"}), i._v(" mdi mdi-weather-rainy\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-weather-snowy"}), i._v(" mdi mdi-weather-snowy\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-weather-sunny"}), i._v(" mdi mdi-weather-sunny\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-weather-sunset "}), i._v(" mdi mdi-weather-sunset\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-weather-sunset-down"}), i._v(" mdi mdi-weather-sunset-down\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-weather-sunset-up"}), i._v(" mdi mdi-weather-sunset-up\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-weather-windy"}), i._v(" mdi mdi-weather-windy\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-weather-windy-variant"}), i._v(" mdi mdi-weather-windy-variant\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-web"}), i._v(" mdi mdi-web\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-webcam"}), i._v(" mdi mdi-webcam\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-webhook"}), i._v(" mdi mdi-webhook\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-wechat"}), i._v(" mdi mdi-wechat\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-weight"}), i._v(" mdi mdi-weight\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-weight-kilogram"}), i._v(" mdi mdi-weight-kilogrammdi-whatsapp\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-whatsapp"}), i._v(" mdi mdi-whatsapp\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-wheelchair-accessibility "}), i._v(" mdi mdi-wheelchair-accessibility\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-white-balance-auto"}), i._v(" mdi mdi-white-balance-auto\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-white-balance-incandescent "}), i._v(" mdi mdi-white-balance-incandescent\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-white-balance-iridescent"}), i._v(" mdi mdi-white-balance-iridescent\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-white-balance-sunny"}), i._v(" mdi mdi-white-balance-sunny\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-wifi"}), i._v(" mdi mdi-wifi\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-wifi-off"}), i._v(" mdi mdi-wifi-off\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-wii"}), i._v(" mdi mdi-wii\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-wikipedia"}), i._v(" mdi mdi-wikipedia\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-window-close"}), i._v(" mdi mdi-window-close\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-window-closed"}), i._v(" mdi mdi-window-closed\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-window-maximize"}), i._v(" mdi mdi-window-maximize\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-window-minimize"}), i._v(" mdi mdi-window-minimize\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-window-open"}), i._v(" mdi mdi-window-open\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-window-restore"}), i._v(" mdi mdi-window-restore\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-windows"}), i._v(" mdi mdi-windows\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-wordpress"}), i._v(" mdi mdi-wordpress\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-worker"}), i._v(" mdi mdi-worker\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-wrap "}), i._v(" mdi mdi-wrap\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-wrench"}), i._v(" mdi mdi-wrench\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-wunderlist"}), i._v(" mdi mdi-wunderlist\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-xaml"}), i._v(" mdi mdi-xaml\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-xbox"}), i._v(" mdi mdi-xbox\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-xbox-controller"}), i._v(" mdi mdi-xbox-controller\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-xbox-controller-off"}), i._v(" mdi mdi-xbox-controller-off\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-xda"}), i._v(" mdi mdi-xda\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-xing"}), i._v(" mdi mdi-xing\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-xing-box"}), i._v(" mdi mdi-xing-box\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-xing-circle"}), i._v(" mdi mdi-xing-circle\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-xml"}), i._v(" mdi mdi-xml\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-yeast"}), i._v(" mdi mdi-yeast\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-yelp"}), i._v(" mdi mdi-yelp\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-youtube-play"}), i._v(" mdi mdi-youtube-play\n            ")]), i._v(" "), t("div", {staticClass: "col-sm-6 col-md-4 col-lg-3"}, [t("i", {staticClass: "mdi mdi-zip-box"}), i._v(" mdi mdi-zip-box\n            ")])])])])])])])
      }]
    };
    var xi = t("VU/8")({name: "mdiIcons"}, ki, !1, function (i) {
      t("nT3V")
    }, "data-v-360742dc", null).exports, Ai = {
      name: "login", data: function () {
        return {form: {msisdn: "", password: ""}}
      }, methods: W()({}, Object(M.b)({signIn: "auth/LogIn"}), {
        login: function () {
          var i = this;
          return v()(o.a.mark(function s() {
            return o.a.wrap(function (s) {
              for (; ;) switch (s.prev = s.next) {
                case 0:
                  i.signIn(i.form).then(function () {
                    return i.$router.replace({name: "dashboard"})
                  }).catch(function (i) {
                    return alert("There was an error! " + i)
                  });
                case 1:
                case"end":
                  return s.stop()
              }
            }, s, i)
          }))()
        }
      })
    }, Di = {
      render: function () {
        var i = this, s = i.$createElement, t = i._self._c || s;
        return t("section", {staticClass: "login"}, [t("div", {staticClass: "container-scroller"}, [t("div", {staticClass: "container-fluid page-body-wrapper full-page-wrapper"}, [t("div", {staticClass: "content-wrapper d-flex align-items-center auth auth-bg-1 theme-one"}, [t("div", {staticClass: "row w-100"}, [t("div", {staticClass: "col-lg-4 mx-auto"}, [t("div", {staticClass: "auto-form-wrapper"}, [t("form", {
          on: {
            submit: function (s) {
              return s.preventDefault(), i.login(s)
            }
          }
        }, [t("div", {staticClass: "form-group"}, [t("label", {staticClass: "label"}, [i._v("Phone Number")]), i._v(" "), t("div", {staticClass: "input-group"}, [t("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: i.form.msisdn,
            expression: "form.msisdn"
          }],
          staticClass: "form-control",
          attrs: {type: "text", required: "", placeholder: "Phone Number"},
          domProps: {value: i.form.msisdn},
          on: {
            input: function (s) {
              s.target.composing || i.$set(i.form, "msisdn", s.target.value)
            }
          }
        }), i._v(" "), i._m(0)])]), i._v(" "), t("div", {staticClass: "form-group"}, [t("label", {staticClass: "label"}, [i._v("Password")]), i._v(" "), t("div", {staticClass: "input-group"}, [t("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: i.form.password,
            expression: "form.password"
          }],
          staticClass: "form-control",
          attrs: {type: "password", required: "", placeholder: "*********"},
          domProps: {value: i.form.password},
          on: {
            input: function (s) {
              s.target.composing || i.$set(i.form, "password", s.target.value)
            }
          }
        }), i._v(" "), i._m(1)])]), i._v(" "), i._m(2), i._v(" "), i._m(3)])]), i._v(" "), i._m(4), i._v(" "), t("p", {staticClass: "footer-text text-center"}, [i._v("copyright © 2019 Bootstrapdash. All rights reserved.")])])])])])])])
      }, staticRenderFns: [function () {
        var i = this.$createElement, s = this._self._c || i;
        return s("div", {staticClass: "input-group-append"}, [s("span", {staticClass: "input-group-text"}, [s("i", {staticClass: "mdi mdi-check-circle-outline"})])])
      }, function () {
        var i = this.$createElement, s = this._self._c || i;
        return s("div", {staticClass: "input-group-append"}, [s("span", {staticClass: "input-group-text"}, [s("i", {staticClass: "mdi mdi-check-circle-outline"})])])
      }, function () {
        var i = this.$createElement, s = this._self._c || i;
        return s("div", {staticClass: "form-group"}, [s("button", {
          staticClass: "btn btn-primary submit-btn btn-block",
          attrs: {type: "submit"}
        }, [this._v("Login")])])
      }, function () {
        var i = this.$createElement, s = this._self._c || i;
        return s("div", {staticClass: "form-group d-flex justify-content-between"}, [s("div", {staticClass: "form-check form-check-flat mt-0"}, [s("label", {staticClass: "form-check-label"}, [s("input", {
          staticClass: "form-check-input",
          attrs: {type: "checkbox", checked: ""}
        }), this._v(" Keep me signed in ")])]), this._v(" "), s("a", {
          staticClass: "text-small forgot-password text-black",
          attrs: {href: "#"}
        }, [this._v("Forgot Password")])])
      }, function () {
        var i = this.$createElement, s = this._self._c || i;
        return s("ul", {staticClass: "auth-footer"}, [s("li", [s("a", {attrs: {href: "#"}}, [this._v("Conditions")])]), this._v(" "), s("li", [s("a", {attrs: {href: "#"}}, [this._v("Help")])]), this._v(" "), s("li", [s("a", {attrs: {href: "#"}}, [this._v("Terms")])])])
      }]
    };
    var Si = t("VU/8")(Ai, Di, !1, function (i) {
      t("/lbp")
    }, "data-v-7c561666", null).exports, ji = {
      render: function () {
        this.$createElement;
        this._self._c;
        return this._m(0)
      }, staticRenderFns: [function () {
        var i = this, s = i.$createElement, t = i._self._c || s;
        return t("section", {staticClass: "register"}, [t("div", {staticClass: "container-scroller"}, [t("div", {staticClass: "container-fluid page-body-wrapper full-page-wrapper"}, [t("div", {staticClass: "content-wrapper auth p-0 theme-two"}, [t("div", {staticClass: "row d-flex align-items-stretch"}, [t("div", {staticClass: "col-md-4 banner-section d-none d-md-flex align-items-stretch justify-content-center"}, [t("div", {staticClass: "slide-content bg-2"})]), i._v(" "), t("div", {staticClass: "col-12 col-md-8 h-100 bg-white"}, [t("div", {staticClass: "auto-form-wrapper d-flex align-items-center justify-content-center flex-column"}, [t("div", {staticClass: "nav-get-started"}, [t("p", [i._v("Already have an account?")]), i._v(" "), t("a", {
          staticClass: "btn get-started-btn",
          attrs: {href: "login-2.html"}
        }, [i._v("SIGN IN")])]), i._v(" "), t("form", {attrs: {action: "#"}}, [t("h3", {staticClass: "mr-auto"}, [i._v("Register")]), i._v(" "), t("p", {staticClass: "mb-5 mr-auto"}, [i._v("Enter your details below.")]), i._v(" "), t("div", {staticClass: "form-group"}, [t("div", {staticClass: "input-group"}, [t("div", {staticClass: "input-group-prepend"}, [t("span", {staticClass: "input-group-text"}, [t("i", {staticClass: "mdi mdi-account-outline"})])]), i._v(" "), t("input", {
          staticClass: "form-control",
          attrs: {type: "text", placeholder: "Username"}
        })])]), i._v(" "), t("div", {staticClass: "form-group"}, [t("div", {staticClass: "input-group"}, [t("div", {staticClass: "input-group-prepend"}, [t("span", {staticClass: "input-group-text"}, [t("i", {staticClass: "mdi mdi-lock-outline"})])]), i._v(" "), t("input", {
          staticClass: "form-control",
          attrs: {type: "password", placeholder: "Password"}
        })])]), i._v(" "), t("div", {staticClass: "form-group"}, [t("div", {staticClass: "input-group"}, [t("div", {staticClass: "input-group-prepend"}, [t("span", {staticClass: "input-group-text"}, [t("i", {staticClass: "mdi mdi-lock-outline"})])]), i._v(" "), t("input", {
          staticClass: "form-control",
          attrs: {type: "password", placeholder: "Confirm Password"}
        })])]), i._v(" "), t("div", {staticClass: "form-group"}, [t("button", {staticClass: "btn btn-primary submit-btn"}, [i._v("SIGN IN")])]), i._v(" "), t("div", {staticClass: "wrapper mt-5 text-gray"}, [t("p", {staticClass: "footer-text"}, [i._v("Copyright © 2019 Bootstrapdash. All rights reserved.")]), i._v(" "), t("ul", {staticClass: "auth-footer text-gray"}, [t("li", [t("a", {attrs: {href: "#"}}, [i._v("Terms & Conditions")])]), i._v(" "), t("li", [t("a", {attrs: {href: "#"}}, [i._v("Cookie Policy")])])])])])])])])])])])])
      }]
    };
    var Ii = t("VU/8")({name: "register"}, ji, !1, function (i) {
      t("PbkG")
    }, "data-v-21d3beda", null).exports, zi = [{Status: !0, age: 40, first_name: "Dickerson", last_name: "Macdonald"}, {
      Status: !1,
      age: 21,
      first_name: "Larsen",
      last_name: "Shaw"
    }, {Status: !1, age: 89, first_name: "Geneva", last_name: "Wilson", _rowVariant: "danger"}, {
      Status: !0,
      age: 40,
      first_name: "Thor",
      last_name: "Macdonald",
      _cellVariants: {Status: "success", age: "info", first_name: "warning"}
    }, {Status: !1, age: 29, first_name: "Dick", last_name: "Dunlap"}], Ei = {
      name: "basicTables", data: function () {
        return {
          itemsTwo: zi,
          items: [{isActive: !0, age: 40, first_name: "Dickerson", last_name: "Macdonald"}, {
            isActive: !1,
            age: 21,
            first_name: "Larsen",
            last_name: "Shaw"
          }, {isActive: !1, age: 89, first_name: "Geneva", last_name: "Wilson"}, {
            isActive: !0,
            age: 38,
            first_name: "Jami",
            last_name: "Carney"
          }],
          fields: {
            last_name: {label: "Person last name", sortable: !0},
            first_name: {label: "Person first name", sortable: !1},
            foo: {key: "age", label: "Person age", sortable: !0}
          }
        }
      }
    }, qi = {
      render: function () {
        var i = this, s = i.$createElement, t = i._self._c || s;
        return t("section", {staticClass: "tables"}, [t("div", {staticClass: "row"}, [t("div", {staticClass: "col-lg-12 grid-margin stretch-card"}, [t("div", {staticClass: "card"}, [t("div", {staticClass: "card-body"}, [t("h4", {staticClass: "card-title"}, [i._v("Basic Table")]), i._v(" "), i._m(0), i._v(" "), t("b-table", {
          attrs: {
            responsive: "",
            items: i.items
          }
        })], 1)])]), i._v(" "), t("div", {staticClass: "col-lg-12 grid-margin stretch-card"}, [t("div", {staticClass: "card"}, [t("div", {staticClass: "card-body"}, [t("h4", {staticClass: "card-title"}, [i._v("Striped And Hoverable Table")]), i._v(" "), i._m(1), i._v(" "), t("b-table", {
          attrs: {
            striped: "",
            hover: "",
            responsive: "",
            items: i.items
          }
        })], 1)])]), i._v(" "), t("div", {staticClass: "col-lg-12 grid-margin stretch-card"}, [t("div", {staticClass: "card"}, [t("div", {staticClass: "card-body"}, [t("h4", {staticClass: "card-title"}, [i._v("Contextual State Table")]), i._v(" "), t("p", {staticClass: "card-description"}, [i._v("\n            Bootstrap contextual state applied to the row and column\n          ")]), i._v(" "), t("b-table", {
          attrs: {
            hover: "",
            responsive: "",
            items: i.itemsTwo
          }
        })], 1)])]), i._v(" "), t("div", {staticClass: "col-lg-12 grid-margin stretch-card"}, [t("div", {staticClass: "card"}, [t("div", {staticClass: "card-body"}, [t("h4", {staticClass: "card-title"}, [i._v("Sortable Table")]), i._v(" "), t("p", {staticClass: "card-description"}, [i._v("\n            Bootstrap contextual state applied to the row and column\n          ")]), i._v(" "), t("b-table", {
          attrs: {
            striped: "",
            hover: "",
            responsive: "",
            items: i.items,
            fields: i.fields
          }
        })], 1)])])])])
      }, staticRenderFns: [function () {
        var i = this.$createElement, s = this._self._c || i;
        return s("p", {staticClass: "card-description"}, [this._v("\n            For displaying tabular data. "), s("code", [this._v("<b-table>")]), this._v(" supports pagination, filtering, sorting, custom rendering, events, and asynchronous data.\n          ")])
      }, function () {
        var i = this.$createElement, s = this._self._c || i;
        return s("p", {staticClass: "card-description"}, [this._v("\n            Use "), s("code", [this._v("hover striped")]), this._v(" props for striped and hoverable styles\n          ")])
      }]
    };
    var Li = t("VU/8")(Ei, qi, !1, function (i) {
      t("DBK+")
    }, "data-v-733f2eb8", null).exports;
    l.default.use(d.a);
    var Ui = new d.a({
      linkActiveClass: "active",
      scrollBehavior: function () {
        return {y: 0}
      },
      mode: "",
      routes: [{
        path: "/",
        redirect: "/dashboard",
        component: ti,
        children: [{path: "/dashboard", name: "dashboard", component: T, meta: {requiresAuth: !0}}, {
          path: "/buttons",
          name: "buttons",
          component: ai,
          meta: {requiresAuth: !0}
        }, {path: "/dropdowns", component: ci, meta: {requiresAuth: !0}}, {
          path: "/typography",
          component: oi
        }, {path: "/chartjs", component: yi}, {path: "/mdiIcons", component: xi}, {
          path: "/basic_table",
          name: "basicTables",
          component: Li
        }]
      }, {
        path: "*", redirect: "/pages/error_404", component: {
          render: function (i) {
            return i("router-view")
          }
        }, children: [{path: "/login", name: "Login", component: Si}, {path: "/pages/register", component: Ii}]
      }]
    });
    Ui.beforeEach(function (i, s, t) {
      if (i.matched.some(function (i) {
        return i.meta.requiresAuth
      })) {
        if (console.log(c.a.getters), null != c.a.getters["auth/isAuthenticated"]) return void t();
        t("/login")
      } else t()
    });
    var Pi = Ui, Ri = t("Tqaz"), Hi = t("1yc6"), Qi = t.n(Hi), Bi = t("oYt9"), Fi = t("9tqS");
    t("RY0C");
    B.a;
    k.a.defaults.withCredentials = !0, k.a.defaults.baseURL = "https://nishauri-api.mhealthkenya.co.ke/", l.default.prototype.$http = k.a;
    var Ji = localStorage.getItem("token");
    Ji && (l.default.prototype.$http.defaults.headers.common.Authorization = Ji), l.default.use(Ri.a), l.default.use(Bi.a, {
      confirmButtonColor: "#41b882",
      cancelButtonColor: "#ff7674"
    }), l.default.use(Fi.a), l.default.component("vue-slide-bar", Qi.a), l.default.config.productionTip = !1, c.a.dispatch("auth/attempt", localStorage.getItem("token")).then(function () {
      return new l.default({el: "#app", store: c.a, router: Pi, components: {App: a.default}, template: "<App/>"})
    })
  }, PbkG: function (i, s) {
  }, QqDh: function (i, s) {
  }, RY0C: function (i, s, t) {
    "use strict";
    Object.defineProperty(s, "__esModule", {value: !0});
    var l = t("IcnI"), a = t("mtWM"), d = t.n(a);
    l.a.subscribe(function (i) {
      switch (i.type) {
        case"auth/setToken":
          i.payload ? (d.a.defaults.headers.common.Authorization = "Token " + i.payload, localStorage.setItem("token", i.payload)) : (d.a.defaults.headers.common.Authorization = null, localStorage.removeItem("vuex"), localStorage.removeItem("token"))
      }
    })
  }, S0Ew: function (i, s) {
  }, TJZn: function (i, s) {
  }, U1Ab: function (i, s) {
    i.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL8AAADACAYAAABVnrISAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAB19SURBVHhe7V35lxzVdb5V1dMzoxUJEEgzEkISuyEsxsZm3xIbsDgsdgh2ThabLf4hv+bk5Af+i8SYY5/4nBzHNptNMDEOJiyJjR0ExhiBJLQMQhKS0IJm6+nuqtzvvqqZljS9VVd3vaq+n1TTPT09Pa/e++5937vvvvec0VsPB0FQIb98mBy3SK63mPgJpY6gyv8nKQjK5HgLyHEGuVxO+MP0EPhT5FfGuZ6GuJoWWlJXZS7TJJ5wXQ1zNRXtqCuupyCY5iri9uP6Ikq/rgK/xLya4OopWFAahSIlKPkVfQslv6JvoeRX9C2U/Iq+hZJf0bdQ8iv6Fkp+Rd9Cya/oWyj5FX0LJb+ib6Hk7whBeCmyCCV/23D4v8ePqDokj0VXc8yZSSODUWPqFZT87YKJ77pDXHPInIyqrzXCzplII2NpzZAUnUPJ3yaQCov0XDzaA5ft0OMyoUdS42kVSv5aBK14cJArkjyWgHsgR3qjQf5Gm7RV9H1NHUd3CxaAxAOXGz2SOyA9wKxhsjEbe87qfXUXzsiNO4PAr5BfOcJtX+Q6XBh2n+kiCKrkVyf5SYUbdJivQS5XJ42I32Vbx73xZe4R3+ebGAGz32ETR31idRyRL48BHhndvHuseMPKKVmJJ+2Xvq/1ZSXXFN8495arbtjK9cNEKx/l76FnF1lRSK41Jj8XUsiPJYNYxhj+rGXgF5zwfpjsfH/iIfFcSJ9v4s+B3b90AaERUEXqNfBhALjMz5KGX5ngvzHDnBomV9ov/fpGeQz52QGO3LyXa6RC1TJ7fu42bVrDezL526m8iNzmd8QAZglvXutPhESHMbCDwXP8M68niwDkj9bwYkxiDflZUYD8o7cemlvAzrLHLdhEfsieclh57ZC/n8ndLmpIHz1NqPpkAbvP5BfZA/KnzyuzgN2QH+6QXwqv4zxj+hf+yfMWywV1a54rWkdNHaKek+ZA9HlWcQtfnTxEe8zNAHPPFMkg3zWaXfInL1EVJyHflZxpz2/8klpB9xH1APmq64yRv6Yb5qdK+14hqul8yaDMkN9Uv9I9beSpBawnv5nVdXPmc7ILtENeDMBu8kvobYAfMDOr9LcFx7dEdk3BavI7THyyZHJEUQ+RKWTPOVnMKuTfhF5fkQFkrwewl/xwJOrxMwSQP1sGoOxSJATxVnyxAWTEBtInf21FZctxKOYFG4DIf+Ra2Y30yR86C4FUmiIfCHi8hgVDuOxEquQH10MnocghzLLKaJcL+xo5FfJHjl6WUSjx8wtZV4xQtZ0Ru5Q8v6G/5Ourzs83sGJK5I96foFZpKK87x/Y2b2nqvkVfQqzn0rq6DH51dcrGJbkafWI/NHN2tn9KfoTPSA/vL16fMXJSJsVPSC/enuFneg++S0Z3CjsQ9pusfvk10UoimZIyUH2aMCrUNQHZvnToH8Xya9yR9EazN58vedLF8mvckfRLnprAImSX+muiA+wp7cMSpT8sNsob0ehaB+h5+9RB5AM+VHY2XL3qOSKHCJU/j3yn8mQnwurEU1FEugljTonf+j11d8rkkNv2OSM3LSHlUqFqrMH0i1i62vRJtjd43yrACt21PUrEgXTEscmMTfN8UnJYO5YIhxId/22kPxHmcADrZE/4jneLyclDoQvKBQJAqdG+tNylFBSs8D4LN+fYq4z+Udu+jA8itScySXkl2VnzQChjx3VmPjq9RXdgBAep0aW+TEZ7+/DmNjzQ7E4o7ccnDuQzo1kT4vkFwNQ4iu6CRgA5E/k+Tvjm/H8hvzs+5noNZc5o7aVi6WREl/RdYBj8/Ev/gVZD3XjjN56+DjP38o5vCiOief3hvz4K25YpGpyY59cw+N2Hh4kGijUbyOcQV2pEs1UAqpgXJmMrLYa5ijSCSZ/IR75e43BItHICpcWDDm0c49P45N90EodYvlShz57YYHWra7TllyFIP7UdEDjU0RHxwM6eNinjw8FdORTn8psDPahc4fbEfl77fWBU09x6PZrB+iyCwr00m/LtGlzlQ4cDqg0o0ZQD+es8ejb9w3SrV9oEInj6vP5Qm969FhA28aq9Ob7fG2u8HOfDllpBJ1xr5b83pL1//AoBhRyUjZ0UEsnnfeO+MCShS5dd8UA3XNzkdaNenTKEke67AnuAUplviG1gZNw+jKus8sH6DMbPO45nbrX0KAjPerSRQ6tPtOjC9d7tH61R4sXETsXomMTZJkBdMi9gLs7nOrPDr598ndmeLGwaIHpwr94aYF7AVcaZw03FPQsGmiyxA2EaJhiFqdxPX3hTwp0zlks/lsAmrzAb4UhrDzNpXP5907nz5hkSfTJUfSy4RtTRsf0i0f+8LUeEx8A+S9nyXPlRdxVsSJDA515mkMb1rh0xqk4rM6hiamAZriBdEBs0C75I6DpMVheOOzQyOku17MrjmX/IZ8mp8M3pYaI+h3kDteQv42RrT3aAg00zN31Was8uu2aAXro3kH6+u2DdMVFHi3jgV4UGVLEh8t1vISl0FWXFOivNhbphisLLD9jUy4hGNInVYqWaGKrpEYvgF7hIta1932pyEYwRHdcW5TBHjyXojPAySDStoHr87ZrinQ5S084nXQBNibDyJbIbzON0EADBXTzDnfzHv3tXUX65l2DPEAu0ErutosDagSdAo7kknMLdCN7/7NWpd2zcnsm5I1buI1skCeSQmePeHT7dQP0MPcC93+ZvdX5Hp2ymLtLtYHYQN3JvAGPuS49zwL5k9Cfb4H8QUbobwAptJil0MXnenT/bYP00FcHZVywYbUnA2VFPKB3XXOmS5/7TIFWrUjV9SeG5nfBfMlaACWSQqcvc+jqywr0wD2D9M27jRRC9KLRlL+iPjC+Wjfq0iqWk6jfNCEn+nTYnTcnP+urrFIlkkKYGNt4/QA98tUh+guWQpexFMKkjppAe8A8AOZZ1q5ypf7ShCM7XXVGznz0X02AARq8FqTQN24fpIdZCn2ZpRC82LBKobawcJjE86cf9jRJNp0MfpuQH5/cwadbhFopdE0ohb4FKXS5SqF24HkOLRh2qFhMv7463eWtAfnxwfj4fHUOIoXY22MAvPHGIj3ytSG6789YCp2nUqgVmBQI40jSB7dWdzy/oYH952jHA6TQYu66L2Ep9JdfKdLDXzNRIaQAa1SoPhBNGxxwxAisgDRVvPaqT358Xs45gNszUsila1n+PMhjgQfvGZqdIBvQCbL5YV21xItH1ic/HD6SvfsAkEJI7V034tFXbhigv/vzIfr6bUW64gKdILMdpmniNVAD2cPos1afjQqd40miHMYDt19ncoUwyFPYhzn33L6jrkP+/m1o3LnEs5c6dPWlHj10b5EevHeQbvjsgCyl1FwhW9F+u9QhP6yoPyRPPaDTw0onpE3fcR2k0CB9445BuhJp00scSflVZBvzkD8ivrYuAJIjqxHLAe/nccAjPB7YeEORzl2radP2IJ6jnof8aFBt1BOBEN8yHvxedbFHD9yNtQODdNPnBmj0DJVC6SNe/avmbwORFFqz0pP0CEihv944SFdd4skYQVeQpYw2aTtvc4VZE4o6gBFA8ly4zpNEOUihO28q0gVnQwqFb1L0Hm3Sdl7yq99vDfD0WOeKHPcH7kbC3BDd8vkirT7TleV/il6ifdZmoqMOgoCmZ8xlI4oFs6Pcn36xIFLob+6EFMI2K46MFRS9gJ+M57fN9WPLjHe2VunVNyp04BCLMgttAFIIOUHnsxTCYvpv3zckm2xBGi1SKdQDcAO0ydv59+2xjP0zZaI9+wPa9qFPUyWTigDNjcGnbYgGxWee6tJ5PAZYtcKTF7EnJrZXxP6YvUDcfXuaAbu37drr0//9sUL7DlrmhVCcZpSov2lVgcnPYhUtaBlAGmyk+u4HVal8lHDhAoeGhzAja195o21VsOrpvLWeJM/hHrC5Vi+2WOxL8gOxye/ipBU7yQ+AMPD8H+336f0dVTpwJKABbtvFC8yKLNuKjfIUCg6dutQVEp496nE5XdlZTnaY6+IWi31JfrR/bPLLGVv2kj8CtiQ8Mh7Q1l0+bWcphH0kIylk44QTqhPlwtaK5611ZRtAlHKqZAbx3ZBCfev5m6GW/ItWf+vRoDpOPg6k45853hD/INkK6xbQEPtZCm3eXqUP9/mSioDsS1ulEEKjkGpnrTTjgdOXe2LIsts0G3CSGeT9SH5stU/VCQoq48zxyfmvyjHyq8fY2U+Rt/jsv2fPjwjKDDfOILneAlhA+HH2A1II0SCQ/72dVTrIUqhQIFq60JXewDopxBcMc/kSlkJrXFo34rJBsBRiCXSMjSApKdSP5DerDrmACHuKJ+cvJ174GYyEIHs2/NOjcpQos8hh4jse4nJ4U7YAD3r4WEBbdvq0Y7c5VAFRF4QfrZZCp7l0Pg+IMU+A1yCFkogKDfG9r2CZBSNAHSS15tZq2cNSBkEbwtiVHfl8F+Hn/D7XHSJv6fp/ZM/PNuOX+IUiv46pyeyRPwIa5+NPIIV82v0xG3QYdRni+7ZSCnGRMFZZw1LogrUFIaxIoSmiUjmQQzjiAAPqHR/5tI/rIoo8YQ+jTvOPrCY/wB5EQvZ1LqgceP4TTmYphRaT/Xl5SCE0/tjeKm3ZZaQQ9py3VQoB2BIE26tDCmFnCZAV++KPh+cOtAvUAc4uQy+4ZaxKR8fR0xgjQI8Ytw6sJ38zzA54vRryB9PsFcJQZ04AD4pTRd4PpRCkBMhvqxQCsH/QiuUshXhAjHRpl1mK8O40y6E4Ugi/g/PLEBQY2xtQmb9HD4DeJo4Uyg/5a0Od1TDUKXH+8I2WAF4KSwshYeDR2gUaDCeLvLfDl5li3J+RAcbj2gbcL+YtRs/w6IJ1noRI5QwySCEeD8SRQhhI7/7YTBKiLiCFEBmDM2gn/8h68qNIjZq04SQXBr+WsR8NdPYqnMPl0sS0OSitXSCMKDJgj5FCh7hHQFQIh93ZK4VIdo/A4RC4li50aIbJh/voTApV6f1dPh35FEGBUApxT9hKHdiv+cPHeqhHfpod8NoFrJn90tUDdNfNRSHEhOTJcJfODdEuIIVAfEihnTwgRGPCy0IK2CuFiM4IpRBOTPR4lDzF94/IUJw6gBQ6yFIIoWEQGekWcACYKW8mhewnf5M2nJf8rPlNegPu3i4SLGbvfO3lA3Q3kx95MmeeyuXjekdcHA0XRwagEREVghTavd98wEI2AlujQmhTEBTjACyawf6ige+EjiAQo24XkEJIFUFkbP8ngUSC4AQQJq23I5v15G+me+ppfjdKb7AM6JZxGuPnLy5IL4CJm/XhtoJoQJwg3okUQg/wPkshDI7Rs8DYQAArpRATdClLofWjHteDS8sWm9MSJSrEj+2OiaLI2I6PWAqxIzh01PQ0mIlGT3hiaNRu8jchPlBf9iCr0z7NH5Efx+IA8MzIkjxvbUFWTblM2MlQCqFx2sWsFGIdjKhQJANgXDamTQMYr0hUiHvC1Ss9SaArlcIziePUAaTQkUDGQ2NMbnwOxgGoe0SgIkdgNfmxZ3+z5qpHfgl1evaTH0BjIFqBxeSQQmdACjHGJwKaZvLGlkKHkDGKCTKuE34NBmCrFAJgnCMshTAeECnEBBBHUGYpxO3cLkQKHWAptKMqE2QOVzQcAeQQDM5q8rfSRPU0v0xyWRjnn4/8ESAD5qRQODnEDdRRRIRlABp4S5grhFlYDAZBAjy3DdFaYpxAc+4aV/KGMKiVOogphXDyuqkD30wS8o1ja3LMO3zIjsHeAW/4WA/1NL8sZmHdz1/Cd9qBRuSPIFKIZQCWDSIkCqOYRMpwXBkAKfSpyRXazmOCaTYkaGAMivFoWRUJMEhFHaAXQI+IXaZRbiT+xaoD5gnGQVvHWA7u8cWYHDaCw1wvb2/hnsHKAW8TzC97pky0x8LcnlbID4CQJiJiJodWsgwAkDKM0GAcKQQPikkhLJ5BVAheUaQQVxN0toU2IMaJo4PO5zERpBDuOxoTxYkKwXD2HfRpK48HMEkI8u/aE4hzyBzmJ3+JX4Dn51bNoOevhUREWAZsWI20YU8kAbwYPFecqJBERNh7YiCIqNABNgZ4wEWRFDI2ZhVECi005xIjX2jZUpdmKkFnUojrAKFR1AMMIE66ReqoP+AN1/Bm1POfiCgqdNF6T9bSwiggA5ArE6fh4DXR6CIDPqqKN8W2JdFieiulEJdvLlfI4zY2UaEpJnLcOkAd2kl8WHSTRqgve7xckR8AISEDRk73xAggB1BFmByCEcSVQthCBQPi3SwD8BlmciiUQhYagdTBCrOYXtKmQ08eVwrZiRa64HqeH4n+eZA98wEyAGdwISICL4gIkUihKTMobheRDBjbx1KIjQCzxZBCWJUFKYRexjagDmSCbLWJjC1dhMX0AX06wVIoxoDYNvBwXP41RD3yi+aH588h+SNgBhcHKV/IvQD0MLw28lyOMQHiAL9/5JjZU+iD3VWZLYXUWGSxFMIMLvYVQlAAvQGMAg4AVyZ1fIiWqro++SF7hnJN/giYtcQSv1O4B8D63w+YvJ1ApBAbEXqB3fx5Vd+kTKMXqJ0htQkwTskVWheuION7gPFCCsWRg5lAY/Ln2/PXAo0NufLGu9WOyQ9ACmEcgdlhRIX2fYLexOFeYC4qZJsRYPIKadPrR105kR4p3pBASS6mtwqNyc/uSsnfEeA1j7IU+mC3T9tZCkFSQQothhRiI7CxF0DvhHkRTBIiKIAiYvUY5kdQT7bDuJkWoOQ36Bb5I0AKRcliSAmoVE1EyHYphGTBC84u0GnLosX0RgoFyVdRYmi5KhuRn0Ly29QuWSU/ACmEgSQmh7B4ZG+YEiAZo1zVkB22GYFIIR4LbcC+QqtdyWuKVpAhfdrcQUbRiPzYuAqZfDYhy+SPACn06bhZQoi/dZSfy9oBJlYUFbLMBmalEOZHcCI9yhdNEtomhVquu6ayBx/ltKyiuo48kD/CrBQa8yXKhGWIyJsXKcSPtkohJAtGUggDYcx0wxAyhxryzz8VIw1g4SxNTgAphAHxr9+u0GNPlug7T5ToxdfLss8Q1uXi57YBvcDaEZc2Xj9Ad95oTqG0BlJf7VfavHdgPsbCFsgZ4PURFv35azP0zz8u0Q+enaHX2SDQM6CHsNEIINXMgD18wRJgdrddzEt+C3veXAORlPd2VOlH/zlD//KTEj3zqxnZXwch0txONiUJJmwczjbuu2wUoDkFvDxybF7/Q4UefxpSaJp++Zsy7dxjskdt7AVsQVyWNiQ/TkFU9BaQO3v2+/SL/y2LFPrXn83Qr9+qyIIaLCrRJjkZcaukIfnV76cHSCHkCf34BZZCPCB+6sUy/WErNpw1UkhtoHM0lj2AuppUgYklLBb//jMleuzJaXqBewSkTExOsRFo03REz+bkV92fOiCF9h706b94DICw6Pd/OkOvvVmROYo4SxLzg6AjejL5UXPhJbV4/IWvCjsAKYQ8oSd+OUPf+UlJHn+/pSLrCZCD039GAOYfz9fWLiAgN6hOkbmmw0cc3BW+5k/ze8qzb1fYAUR/Nr1X4cFwib77ZEkGxx98aBbS9JUUCqr8vzTH11Yvf4p85jmTf5IoIjyT3Zc3RCfX4XGaHDnAS2ETTGpGIDPDIoWemaFXN1Vo7wGz3WLee4GAie8HTHw/5GrLF4jPjp657jruMMmFI0jlCr+Xi793C+r5LQY0/7axKj31IkshNoKfvFCmt96rSu5NfqUQbsphp+yx5gdHaznb5ALHkbzJ3Hbl9MVZwofkr70cJLp58ifTA6b7M7pPTI8AKfQWS6EfPDvNUmianv+fsowPEC3K3ywxEgD5couGzCdytuG1QI7bBd9d/sqfhYsHD/zoYAw8+5q5zIg6vagPGg858VPcwIr6gKfHOuKXflemx56Ypu89U6KX36jIWgJkYOajF4h4CL4azrZ1hb9fP6vzJOAXTFeTBkB+EB8Zj4rmgBTavtunn77ERsAD4h/9YoY2vVuRbdgxVsi2ESRX+BbJz+C/mVadQe4cGQ8kpKdoHXAYv3+/Qv/2XIm++9Q0/fy1siysx+L07Eqh5Bxwy+Q3+/6nQ76ZciAbpX60XxO82gVIjhTpV1j+YCzwvadL9N8si8Y+9mVFVvbqM7kCt0z+dASPAdaPgvhbx8wATtE+IIVwIvvPXp4RKfTvz89I2oSsHchMwhwmXVMgf5qIlhtu2lyhLbv8HEYvegdsUIsEuR8+X6LHWQo992qZNu+sSjq1hEbD91kLSJCEEIP86fQBGOz+8YMqvbKpLMflqAHEB+oOg99X36yIAUAKvfTbMu3C2gGLZ4llL84E6ReD/OnUDLz/3v0+/er1siR44cQQRWfANiS79vj03CszkibxQ5ZCv3unIucPWJcwx2VJ2u12IHt6XzOYtsfeN//xSln0an9nNCYHDHzf2VaVkOjjT8/Qsy+XZRkl1g5YExrtguCIvWOb2Q6690DYE/vfwBCWL3Hk1BXsPe/GKEw0lujl1iW2AvzGRCJWkW0b8yVvCPJnsGi2LsFBH6AFVpOlcxpjQmxrum9PC+Q31E+oQG0CxMeuB7s/DqRxsO8+DododyNYJf/JwHgAHh/6H9EhnLuFOsUOc3AyGBRbexRpK0iC/OIq+G3p0N94IJyZC82KCAa21MDmTziRMNrGAl8b3YqSvz7QwyIMup3rBQfxIeCAzXaxfw+2XHzj3X4mP94SGkBaAHkRtUA3DW90hL0UQnbm0DWzxTYaEReen3hB6+45ENCmzcbLKU4GcoIwwYgdp/GIOQHU8ebtOI2mF+RPmGQ15HdGbz0cBEGF/PJhJn6RXG8x/60Wx8FRuTAiakdvdAFy7NACcwTnmpWu7C2J0whxcPIADpWfBzAKaNzfvF2VxeKKxsBJ9GtXebRiuSO5Q5CeXUfC3MKpo0F1gj+y0CH5ZyEWYJ4qcg3wEMEFDIazGGmrJX8Hoc4IqAFd69svAOHzskgmAfKbdLd0RY9C0T4SIH9EfHxVE1B0jl51KomQfw4qfhSdo1cuNEHyG+Ir/RVx0WvdkLDn5xuQO2ATyMOISNFT9JoxiZPf3AF/bMpxf0VWkJ6TTJ78AtyQen5FK0jPSXaJ/ABuSg1AUR9ps6OL5AdU+ijqI212dJf8oWnLgw6AFbWwgA7dJX+taesAWFELC+jQZdljkNZ+PwpFI/SE/FaYuSJl2OcAe0T+WmgvoLADKZDf9AJqAv0CtLSdrZ0C+QGHHKkTNYFcg9s38LEXIl8WIiXyM+mlA9ChcJ4RBGUif5ofQX77WtoZvWV/uIzxCDlOkZzCIn7sgU1EdSEh0PDqxd9VdB/So/vs8MfNxgjeMLvZIW5qI3nTRODPyDJGJjo5q67fwuSvMvmPMvcGuKAgfy8LCdJzQXDEjOwckfYRSIrYEIeGnUCYYEx6v3KUvy2Z44CY/DbAlG2Kn3lM/ht3sDCD5+eCMvldJn8qHli2TWEDcLDVgvYA2QOYz1SCxMEicXaoQWWCiVZDfhsmOsXzT3FJXXJGbjkQkp9ljxzwlRL5BagcbItnHhXZgVGx2MqEn4WBjKAK2QPy4wA4eH5byD8pHD9h6xJ4fmxdYoP0MJ5Ee4Hswq8c4yZk8rtMfg/kT78tZ7cuYdlzQmns8biyGYrsrqWbSVkL4+DrIp2tjFsEqwtr3SrmAQK/zNd0aABNalrRe2RcmVqsKYznl9G59ABKf/uQbfZnQFCD8mYgpVNiFuC4Jsh2e2SA/BHmxiNqAj0GKjyq9IxLnVpkiPxzmKt/NYOeIEeEr0UmyS8Q3ue0VaxBTf3msKqzS/6wMcQGNDu0S8h3vWaX/CHEBuSLGoCiPWSe/AZgf71+WY1CMT9yQv76MIfTsQGoDTRAPceRb+Se/KZZc3+bHaI/PUOfsIIbtz+dm6IB+tcl5tIYaj34iTeo1n8i+pf8OevpZfGIXDgtLnzxOPSntGkEFcNtAySKLjsgpEeeumTARovFlezNoORvE/CsyDS1ap0ByoIyYZsQJX3LUPK3C/asWAYnBlCXaM0IeOLPOyOsLvuMByV/22DPL9ICawzqkbYZEXUwagOU/Io+BdH/AwI8ECVwFideAAAAAElFTkSuQmCC"
  }, UdIB: function (i, s) {
  }, Uko3: function (i, s) {
  }, VB5A: function (i, s) {
  }, YMoi: function (i, s, t) {
    i.exports = t.p + "static/img/img_3.5d5fc64.jpg"
  }, "Zm+o": function (i, s) {
  }, ZrvI: function (i, s, t) {
    i.exports = t.p + "static/img/face12.dd16c11.jpg"
  }, bpH4: function (i, s) {
  }, fCAC: function (i, s, t) {
    i.exports = t.p + "static/img/face1.90a61a0.jpg"
  }, fEMj: function (i, s) {
  }, gELe: function (i, s) {
  }, iQH9: function (i, s, t) {
    i.exports = t.p + "static/img/logo.9622fb9.png"
  }, ltRH: function (i, s) {
  }, mJu0: function (i, s) {
  }, nT3V: function (i, s) {
  }, roqg: function (i, s, t) {
    "use strict";
    var l = {
      render: function () {
        var i = this.$createElement, s = this._self._c || i;
        return s("div", {attrs: {id: "app"}}, [s("router-view")], 1)
      }, staticRenderFns: []
    };
    s.a = l
  }, uoS0: function (i, s) {
  }, uslO: function (i, s, t) {
    var l = {
      "./af": "3CJN",
      "./af.js": "3CJN",
      "./ar": "3MVc",
      "./ar-dz": "tkWw",
      "./ar-dz.js": "tkWw",
      "./ar-kw": "j8cJ",
      "./ar-kw.js": "j8cJ",
      "./ar-ly": "wPpW",
      "./ar-ly.js": "wPpW",
      "./ar-ma": "dURR",
      "./ar-ma.js": "dURR",
      "./ar-sa": "7OnE",
      "./ar-sa.js": "7OnE",
      "./ar-tn": "BEem",
      "./ar-tn.js": "BEem",
      "./ar.js": "3MVc",
      "./az": "eHwN",
      "./az.js": "eHwN",
      "./be": "3hfc",
      "./be.js": "3hfc",
      "./bg": "lOED",
      "./bg.js": "lOED",
      "./bm": "hng5",
      "./bm.js": "hng5",
      "./bn": "aM0x",
      "./bn.js": "aM0x",
      "./bo": "w2Hs",
      "./bo.js": "w2Hs",
      "./br": "OSsP",
      "./br.js": "OSsP",
      "./bs": "aqvp",
      "./bs.js": "aqvp",
      "./ca": "wIgY",
      "./ca.js": "wIgY",
      "./cs": "ssxj",
      "./cs.js": "ssxj",
      "./cv": "N3vo",
      "./cv.js": "N3vo",
      "./cy": "ZFGz",
      "./cy.js": "ZFGz",
      "./da": "YBA/",
      "./da.js": "YBA/",
      "./de": "DOkx",
      "./de-at": "8v14",
      "./de-at.js": "8v14",
      "./de-ch": "Frex",
      "./de-ch.js": "Frex",
      "./de.js": "DOkx",
      "./dv": "rIuo",
      "./dv.js": "rIuo",
      "./el": "CFqe",
      "./el.js": "CFqe",
      "./en-SG": "oYA3",
      "./en-SG.js": "oYA3",
      "./en-au": "Sjoy",
      "./en-au.js": "Sjoy",
      "./en-ca": "Tqun",
      "./en-ca.js": "Tqun",
      "./en-gb": "hPuz",
      "./en-gb.js": "hPuz",
      "./en-ie": "ALEw",
      "./en-ie.js": "ALEw",
      "./en-il": "QZk1",
      "./en-il.js": "QZk1",
      "./en-nz": "dyB6",
      "./en-nz.js": "dyB6",
      "./eo": "Nd3h",
      "./eo.js": "Nd3h",
      "./es": "LT9G",
      "./es-do": "7MHZ",
      "./es-do.js": "7MHZ",
      "./es-us": "INcR",
      "./es-us.js": "INcR",
      "./es.js": "LT9G",
      "./et": "XlWM",
      "./et.js": "XlWM",
      "./eu": "sqLM",
      "./eu.js": "sqLM",
      "./fa": "2pmY",
      "./fa.js": "2pmY",
      "./fi": "nS2h",
      "./fi.js": "nS2h",
      "./fo": "OVPi",
      "./fo.js": "OVPi",
      "./fr": "tzHd",
      "./fr-ca": "bXQP",
      "./fr-ca.js": "bXQP",
      "./fr-ch": "VK9h",
      "./fr-ch.js": "VK9h",
      "./fr.js": "tzHd",
      "./fy": "g7KF",
      "./fy.js": "g7KF",
      "./ga": "U5Iz",
      "./ga.js": "U5Iz",
      "./gd": "nLOz",
      "./gd.js": "nLOz",
      "./gl": "FuaP",
      "./gl.js": "FuaP",
      "./gom-latn": "+27R",
      "./gom-latn.js": "+27R",
      "./gu": "rtsW",
      "./gu.js": "rtsW",
      "./he": "Nzt2",
      "./he.js": "Nzt2",
      "./hi": "ETHv",
      "./hi.js": "ETHv",
      "./hr": "V4qH",
      "./hr.js": "V4qH",
      "./hu": "xne+",
      "./hu.js": "xne+",
      "./hy-am": "GrS7",
      "./hy-am.js": "GrS7",
      "./id": "yRTJ",
      "./id.js": "yRTJ",
      "./is": "upln",
      "./is.js": "upln",
      "./it": "FKXc",
      "./it-ch": "/E8D",
      "./it-ch.js": "/E8D",
      "./it.js": "FKXc",
      "./ja": "ORgI",
      "./ja.js": "ORgI",
      "./jv": "JwiF",
      "./jv.js": "JwiF",
      "./ka": "RnJI",
      "./ka.js": "RnJI",
      "./kk": "j+vx",
      "./kk.js": "j+vx",
      "./km": "5j66",
      "./km.js": "5j66",
      "./kn": "gEQe",
      "./kn.js": "gEQe",
      "./ko": "eBB/",
      "./ko.js": "eBB/",
      "./ku": "kI9l",
      "./ku.js": "kI9l",
      "./ky": "6cf8",
      "./ky.js": "6cf8",
      "./lb": "z3hR",
      "./lb.js": "z3hR",
      "./lo": "nE8X",
      "./lo.js": "nE8X",
      "./lt": "/6P1",
      "./lt.js": "/6P1",
      "./lv": "jxEH",
      "./lv.js": "jxEH",
      "./me": "svD2",
      "./me.js": "svD2",
      "./mi": "gEU3",
      "./mi.js": "gEU3",
      "./mk": "Ab7C",
      "./mk.js": "Ab7C",
      "./ml": "oo1B",
      "./ml.js": "oo1B",
      "./mn": "CqHt",
      "./mn.js": "CqHt",
      "./mr": "5vPg",
      "./mr.js": "5vPg",
      "./ms": "ooba",
      "./ms-my": "G++c",
      "./ms-my.js": "G++c",
      "./ms.js": "ooba",
      "./mt": "oCzW",
      "./mt.js": "oCzW",
      "./my": "F+2e",
      "./my.js": "F+2e",
      "./nb": "FlzV",
      "./nb.js": "FlzV",
      "./ne": "/mhn",
      "./ne.js": "/mhn",
      "./nl": "3K28",
      "./nl-be": "Bp2f",
      "./nl-be.js": "Bp2f",
      "./nl.js": "3K28",
      "./nn": "C7av",
      "./nn.js": "C7av",
      "./pa-in": "pfs9",
      "./pa-in.js": "pfs9",
      "./pl": "7LV+",
      "./pl.js": "7LV+",
      "./pt": "ZoSI",
      "./pt-br": "AoDM",
      "./pt-br.js": "AoDM",
      "./pt.js": "ZoSI",
      "./ro": "wT5f",
      "./ro.js": "wT5f",
      "./ru": "ulq9",
      "./ru.js": "ulq9",
      "./sd": "fW1y",
      "./sd.js": "fW1y",
      "./se": "5Omq",
      "./se.js": "5Omq",
      "./si": "Lgqo",
      "./si.js": "Lgqo",
      "./sk": "OUMt",
      "./sk.js": "OUMt",
      "./sl": "2s1U",
      "./sl.js": "2s1U",
      "./sq": "V0td",
      "./sq.js": "V0td",
      "./sr": "f4W3",
      "./sr-cyrl": "c1x4",
      "./sr-cyrl.js": "c1x4",
      "./sr.js": "f4W3",
      "./ss": "7Q8x",
      "./ss.js": "7Q8x",
      "./sv": "Fpqq",
      "./sv.js": "Fpqq",
      "./sw": "DSXN",
      "./sw.js": "DSXN",
      "./ta": "+7/x",
      "./ta.js": "+7/x",
      "./te": "Nlnz",
      "./te.js": "Nlnz",
      "./tet": "gUgh",
      "./tet.js": "gUgh",
      "./tg": "5SNd",
      "./tg.js": "5SNd",
      "./th": "XzD+",
      "./th.js": "XzD+",
      "./tl-ph": "3LKG",
      "./tl-ph.js": "3LKG",
      "./tlh": "m7yE",
      "./tlh.js": "m7yE",
      "./tr": "k+5o",
      "./tr.js": "k+5o",
      "./tzl": "iNtv",
      "./tzl.js": "iNtv",
      "./tzm": "FRPF",
      "./tzm-latn": "krPU",
      "./tzm-latn.js": "krPU",
      "./tzm.js": "FRPF",
      "./ug-cn": "To0v",
      "./ug-cn.js": "To0v",
      "./uk": "ntHu",
      "./uk.js": "ntHu",
      "./ur": "uSe8",
      "./ur.js": "uSe8",
      "./uz": "XU1s",
      "./uz-latn": "/bsm",
      "./uz-latn.js": "/bsm",
      "./uz.js": "XU1s",
      "./vi": "0X8Q",
      "./vi.js": "0X8Q",
      "./x-pseudo": "e/KL",
      "./x-pseudo.js": "e/KL",
      "./yo": "YXlc",
      "./yo.js": "YXlc",
      "./zh-cn": "Vz2w",
      "./zh-cn.js": "Vz2w",
      "./zh-hk": "ZUyn",
      "./zh-hk.js": "ZUyn",
      "./zh-tw": "BbgG",
      "./zh-tw.js": "BbgG"
    };

    function a(i) {
      return t(d(i))
    }

    function d(i) {
      var s = l[i];
      if (!(s + 1)) throw new Error("Cannot find module '" + i + "'.");
      return s
    }

    a.keys = function () {
      return Object.keys(l)
    }, a.resolve = d, i.exports = a, a.id = "uslO"
  }, vFrx: function (i, s, t) {
    i.exports = t.p + "static/img/face10.e19994a.jpg"
  }, vFxj: function (i, s) {
  }, vaSx: function (i, s) {
  }, xJD8: function (i, s) {
  }, xmZW: function (i, s) {
  }, ywDz: function (i, s) {
  }, zhv1: function (i, s) {
  }
}, ["NHnr"]);
//# sourceMappingURL=app.2cce2f0d58e0eacf6c96.js.map
