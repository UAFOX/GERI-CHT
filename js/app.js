(() => {
  var t = {
      732: function (t) {
        t.exports = (function () {
          "use strict";
          function t() {
            return (
              (t =
                Object.assign ||
                function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var o in n)
                      Object.prototype.hasOwnProperty.call(n, o) &&
                        (t[o] = n[o]);
                  }
                  return t;
                }),
              t.apply(this, arguments)
            );
          }
          var e = "undefined" != typeof window,
            n =
              (e && !("onscroll" in window)) ||
              ("undefined" != typeof navigator &&
                /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
            o = e && "IntersectionObserver" in window,
            a = e && "classList" in document.createElement("p"),
            r = e && window.devicePixelRatio > 1,
            i = {
              elements_selector: ".lazy",
              container: n || e ? document : null,
              threshold: 300,
              thresholds: null,
              data_src: "src",
              data_srcset: "srcset",
              data_sizes: "sizes",
              data_bg: "bg",
              data_bg_hidpi: "bg-hidpi",
              data_bg_multi: "bg-multi",
              data_bg_multi_hidpi: "bg-multi-hidpi",
              data_bg_set: "bg-set",
              data_poster: "poster",
              class_applied: "applied",
              class_loading: "loading",
              class_loaded: "loaded",
              class_error: "error",
              class_entered: "entered",
              class_exited: "exited",
              unobserve_completed: !0,
              unobserve_entered: !1,
              cancel_on_exit: !0,
              callback_enter: null,
              callback_exit: null,
              callback_applied: null,
              callback_loading: null,
              callback_loaded: null,
              callback_error: null,
              callback_finish: null,
              callback_cancel: null,
              use_native: !1,
              restore_on_error: !1,
            },
            c = function (e) {
              return t({}, i, e);
            },
            s = function (t, e) {
              var n,
                o = "LazyLoad::Initialized",
                a = new t(e);
              try {
                n = new CustomEvent(o, { detail: { instance: a } });
              } catch (t) {
                (n = document.createEvent("CustomEvent")).initCustomEvent(
                  o,
                  !1,
                  !1,
                  { instance: a },
                );
              }
              window.dispatchEvent(n);
            },
            l = "src",
            d = "srcset",
            u = "sizes",
            f = "poster",
            h = "llOriginalAttrs",
            g = "data",
            m = "loading",
            p = "loaded",
            v = "applied",
            _ = "error",
            b = "native",
            w = "data-",
            y = "ll-status",
            L = function (t, e) {
              return t.getAttribute(w + e);
            },
            E = function (t) {
              return L(t, y);
            },
            A = function (t, e) {
              return (function (t, e, n) {
                var o = "data-ll-status";
                null !== n ? t.setAttribute(o, n) : t.removeAttribute(o);
              })(t, 0, e);
            },
            k = function (t) {
              return A(t, null);
            },
            S = function (t) {
              return null === E(t);
            },
            I = function (t) {
              return E(t) === b;
            },
            x = [m, p, v, _],
            C = function (t, e, n, o) {
              t &&
                "function" == typeof t &&
                (void 0 === o ? (void 0 === n ? t(e) : t(e, n)) : t(e, n, o));
            },
            O = function (t, e) {
              a
                ? t.classList.add(e)
                : (t.className += (t.className ? " " : "") + e);
            },
            W = function (t, e) {
              a
                ? t.classList.remove(e)
                : (t.className = t.className
                    .replace(new RegExp("(^|\\s+)" + e + "(\\s+|$)"), " ")
                    .replace(/^\s+/, "")
                    .replace(/\s+$/, ""));
            },
            q = function (t) {
              return t.llTempImage;
            },
            R = function (t, e) {
              if (e) {
                var n = e._observer;
                n && n.unobserve(t);
              }
            },
            T = function (t, e) {
              t && (t.loadingCount += e);
            },
            M = function (t, e) {
              t && (t.toLoadCount = e);
            },
            B = function (t) {
              for (var e, n = [], o = 0; (e = t.children[o]); o += 1)
                "SOURCE" === e.tagName && n.push(e);
              return n;
            },
            j = function (t, e) {
              var n = t.parentNode;
              n && "PICTURE" === n.tagName && B(n).forEach(e);
            },
            z = function (t, e) {
              B(t).forEach(e);
            },
            N = [l],
            $ = [l, f],
            P = [l, d, u],
            H = [g],
            D = function (t) {
              return !!t[h];
            },
            G = function (t) {
              return t[h];
            },
            Q = function (t) {
              return delete t[h];
            },
            F = function (t, e) {
              if (!D(t)) {
                var n = {};
                e.forEach(function (e) {
                  n[e] = t.getAttribute(e);
                }),
                  (t[h] = n);
              }
            },
            V = function (t, e) {
              if (D(t)) {
                var n = G(t);
                e.forEach(function (e) {
                  !(function (t, e, n) {
                    n ? t.setAttribute(e, n) : t.removeAttribute(e);
                  })(t, e, n[e]);
                });
              }
            },
            U = function (t, e, n) {
              O(t, e.class_applied),
                A(t, v),
                n &&
                  (e.unobserve_completed && R(t, e),
                  C(e.callback_applied, t, n));
            },
            J = function (t, e, n) {
              O(t, e.class_loading),
                A(t, m),
                n && (T(n, 1), C(e.callback_loading, t, n));
            },
            Y = function (t, e, n) {
              n && t.setAttribute(e, n);
            },
            Z = function (t, e) {
              Y(t, u, L(t, e.data_sizes)),
                Y(t, d, L(t, e.data_srcset)),
                Y(t, l, L(t, e.data_src));
            },
            X = {
              IMG: function (t, e) {
                j(t, function (t) {
                  F(t, P), Z(t, e);
                }),
                  F(t, P),
                  Z(t, e);
              },
              IFRAME: function (t, e) {
                F(t, N), Y(t, l, L(t, e.data_src));
              },
              VIDEO: function (t, e) {
                z(t, function (t) {
                  F(t, N), Y(t, l, L(t, e.data_src));
                }),
                  F(t, $),
                  Y(t, f, L(t, e.data_poster)),
                  Y(t, l, L(t, e.data_src)),
                  t.load();
              },
              OBJECT: function (t, e) {
                F(t, H), Y(t, g, L(t, e.data_src));
              },
            },
            K = ["IMG", "IFRAME", "VIDEO", "OBJECT"],
            tt = function (t, e) {
              !e ||
                (function (t) {
                  return t.loadingCount > 0;
                })(e) ||
                (function (t) {
                  return t.toLoadCount > 0;
                })(e) ||
                C(t.callback_finish, e);
            },
            et = function (t, e, n) {
              t.addEventListener(e, n), (t.llEvLisnrs[e] = n);
            },
            nt = function (t, e, n) {
              t.removeEventListener(e, n);
            },
            ot = function (t) {
              return !!t.llEvLisnrs;
            },
            at = function (t) {
              if (ot(t)) {
                var e = t.llEvLisnrs;
                for (var n in e) {
                  var o = e[n];
                  nt(t, n, o);
                }
                delete t.llEvLisnrs;
              }
            },
            rt = function (t, e, n) {
              !(function (t) {
                delete t.llTempImage;
              })(t),
                T(n, -1),
                (function (t) {
                  t && (t.toLoadCount -= 1);
                })(n),
                W(t, e.class_loading),
                e.unobserve_completed && R(t, n);
            },
            it = function (t, e, n) {
              var o = q(t) || t;
              ot(o) ||
                (function (t, e, n) {
                  ot(t) || (t.llEvLisnrs = {});
                  var o = "VIDEO" === t.tagName ? "loadeddata" : "load";
                  et(t, o, e), et(t, "error", n);
                })(
                  o,
                  function (a) {
                    !(function (t, e, n, o) {
                      var a = I(e);
                      rt(e, n, o),
                        O(e, n.class_loaded),
                        A(e, p),
                        C(n.callback_loaded, e, o),
                        a || tt(n, o);
                    })(0, t, e, n),
                      at(o);
                  },
                  function (a) {
                    !(function (t, e, n, o) {
                      var a = I(e);
                      rt(e, n, o),
                        O(e, n.class_error),
                        A(e, _),
                        C(n.callback_error, e, o),
                        n.restore_on_error && V(e, P),
                        a || tt(n, o);
                    })(0, t, e, n),
                      at(o);
                  },
                );
            },
            ct = function (t, e, n) {
              !(function (t) {
                return K.indexOf(t.tagName) > -1;
              })(t)
                ? (function (t, e, n) {
                    !(function (t) {
                      t.llTempImage = document.createElement("IMG");
                    })(t),
                      it(t, e, n),
                      (function (t) {
                        D(t) ||
                          (t[h] = { backgroundImage: t.style.backgroundImage });
                      })(t),
                      (function (t, e, n) {
                        var o = L(t, e.data_bg),
                          a = L(t, e.data_bg_hidpi),
                          i = r && a ? a : o;
                        i &&
                          ((t.style.backgroundImage = 'url("'.concat(i, '")')),
                          q(t).setAttribute(l, i),
                          J(t, e, n));
                      })(t, e, n),
                      (function (t, e, n) {
                        var o = L(t, e.data_bg_multi),
                          a = L(t, e.data_bg_multi_hidpi),
                          i = r && a ? a : o;
                        i && ((t.style.backgroundImage = i), U(t, e, n));
                      })(t, e, n),
                      (function (t, e, n) {
                        var o = L(t, e.data_bg_set);
                        if (o) {
                          var a = o.split("|"),
                            r = a.map(function (t) {
                              return "image-set(".concat(t, ")");
                            });
                          (t.style.backgroundImage = r.join()),
                            "" === t.style.backgroundImage &&
                              ((r = a.map(function (t) {
                                return "-webkit-image-set(".concat(t, ")");
                              })),
                              (t.style.backgroundImage = r.join())),
                            U(t, e, n);
                        }
                      })(t, e, n);
                  })(t, e, n)
                : (function (t, e, n) {
                    it(t, e, n),
                      (function (t, e, n) {
                        var o = X[t.tagName];
                        o && (o(t, e), J(t, e, n));
                      })(t, e, n);
                  })(t, e, n);
            },
            st = function (t) {
              t.removeAttribute(l), t.removeAttribute(d), t.removeAttribute(u);
            },
            lt = function (t) {
              j(t, function (t) {
                V(t, P);
              }),
                V(t, P);
            },
            dt = {
              IMG: lt,
              IFRAME: function (t) {
                V(t, N);
              },
              VIDEO: function (t) {
                z(t, function (t) {
                  V(t, N);
                }),
                  V(t, $),
                  t.load();
              },
              OBJECT: function (t) {
                V(t, H);
              },
            },
            ut = function (t, e) {
              (function (t) {
                var e = dt[t.tagName];
                e
                  ? e(t)
                  : (function (t) {
                      if (D(t)) {
                        var e = G(t);
                        t.style.backgroundImage = e.backgroundImage;
                      }
                    })(t);
              })(t),
                (function (t, e) {
                  S(t) ||
                    I(t) ||
                    (W(t, e.class_entered),
                    W(t, e.class_exited),
                    W(t, e.class_applied),
                    W(t, e.class_loading),
                    W(t, e.class_loaded),
                    W(t, e.class_error));
                })(t, e),
                k(t),
                Q(t);
            },
            ft = ["IMG", "IFRAME", "VIDEO"],
            ht = function (t) {
              return t.use_native && "loading" in HTMLImageElement.prototype;
            },
            gt = function (t, e, n) {
              t.forEach(function (t) {
                return (function (t) {
                  return t.isIntersecting || t.intersectionRatio > 0;
                })(t)
                  ? (function (t, e, n, o) {
                      var a = (function (t) {
                        return x.indexOf(E(t)) >= 0;
                      })(t);
                      A(t, "entered"),
                        O(t, n.class_entered),
                        W(t, n.class_exited),
                        (function (t, e, n) {
                          e.unobserve_entered && R(t, n);
                        })(t, n, o),
                        C(n.callback_enter, t, e, o),
                        a || ct(t, n, o);
                    })(t.target, t, e, n)
                  : (function (t, e, n, o) {
                      S(t) ||
                        (O(t, n.class_exited),
                        (function (t, e, n, o) {
                          n.cancel_on_exit &&
                            (function (t) {
                              return E(t) === m;
                            })(t) &&
                            "IMG" === t.tagName &&
                            (at(t),
                            (function (t) {
                              j(t, function (t) {
                                st(t);
                              }),
                                st(t);
                            })(t),
                            lt(t),
                            W(t, n.class_loading),
                            T(o, -1),
                            k(t),
                            C(n.callback_cancel, t, e, o));
                        })(t, e, n, o),
                        C(n.callback_exit, t, e, o));
                    })(t.target, t, e, n);
              });
            },
            mt = function (t) {
              return Array.prototype.slice.call(t);
            },
            pt = function (t) {
              return t.container.querySelectorAll(t.elements_selector);
            },
            vt = function (t) {
              return (function (t) {
                return E(t) === _;
              })(t);
            },
            _t = function (t, e) {
              return (function (t) {
                return mt(t).filter(S);
              })(t || pt(e));
            },
            bt = function (t, n) {
              var a = c(t);
              (this._settings = a),
                (this.loadingCount = 0),
                (function (t, e) {
                  o &&
                    !ht(t) &&
                    (e._observer = new IntersectionObserver(
                      function (n) {
                        gt(n, t, e);
                      },
                      (function (t) {
                        return {
                          root: t.container === document ? null : t.container,
                          rootMargin: t.thresholds || t.threshold + "px",
                        };
                      })(t),
                    ));
                })(a, this),
                (function (t, n) {
                  e &&
                    ((n._onlineHandler = function () {
                      !(function (t, e) {
                        var n;
                        ((n = pt(t)), mt(n).filter(vt)).forEach(function (e) {
                          W(e, t.class_error), k(e);
                        }),
                          e.update();
                      })(t, n);
                    }),
                    window.addEventListener("online", n._onlineHandler));
                })(a, this),
                this.update(n);
            };
          return (
            (bt.prototype = {
              update: function (t) {
                var e,
                  a,
                  r = this._settings,
                  i = _t(t, r);
                M(this, i.length),
                  !n && o
                    ? ht(r)
                      ? (function (t, e, n) {
                          t.forEach(function (t) {
                            -1 !== ft.indexOf(t.tagName) &&
                              (function (t, e, n) {
                                t.setAttribute("loading", "lazy"),
                                  it(t, e, n),
                                  (function (t, e) {
                                    var n = X[t.tagName];
                                    n && n(t, e);
                                  })(t, e),
                                  A(t, b);
                              })(t, e, n);
                          }),
                            M(n, 0);
                        })(i, r, this)
                      : ((a = i),
                        (function (t) {
                          t.disconnect();
                        })((e = this._observer)),
                        (function (t, e) {
                          e.forEach(function (e) {
                            t.observe(e);
                          });
                        })(e, a))
                    : this.loadAll(i);
              },
              destroy: function () {
                this._observer && this._observer.disconnect(),
                  e &&
                    window.removeEventListener("online", this._onlineHandler),
                  pt(this._settings).forEach(function (t) {
                    Q(t);
                  }),
                  delete this._observer,
                  delete this._settings,
                  delete this._onlineHandler,
                  delete this.loadingCount,
                  delete this.toLoadCount;
              },
              loadAll: function (t) {
                var e = this,
                  n = this._settings;
                _t(t, n).forEach(function (t) {
                  R(t, e), ct(t, n, e);
                });
              },
              restoreAll: function () {
                var t = this._settings;
                pt(t).forEach(function (e) {
                  ut(e, t);
                });
              },
            }),
            (bt.load = function (t, e) {
              var n = c(e);
              ct(t, n);
            }),
            (bt.resetStatus = function (t) {
              k(t);
            }),
            e &&
              (function (t, e) {
                if (e)
                  if (e.length) for (var n, o = 0; (n = e[o]); o += 1) s(t, n);
                  else s(t, e);
              })(bt, window.lazyLoadOptions),
            bt
          );
        })();
      },
    },
    e = {};
  function n(o) {
    var a = e[o];
    if (void 0 !== a) return a.exports;
    var r = (e[o] = { exports: {} });
    return t[o].call(r.exports, r, r.exports, n), r.exports;
  }
  (() => {
    "use strict";
    function t(t) {
      this.type = t;
    }
    (t.prototype.init = function () {
      const t = this;
      (this.оbjects = []),
        (this.daClassname = "_dynamic_adapt_"),
        (this.nodes = document.querySelectorAll("[data-da]"));
      for (let t = 0; t < this.nodes.length; t++) {
        const e = this.nodes[t],
          n = e.dataset.da.trim().split(","),
          o = {};
        (o.element = e),
          (o.parent = e.parentNode),
          (o.destination = document.querySelector(n[0].trim())),
          (o.breakpoint = n[1] ? n[1].trim() : "767"),
          (o.place = n[2] ? n[2].trim() : "last"),
          (o.index = this.indexInParent(o.parent, o.element)),
          this.оbjects.push(o);
      }
      this.arraySort(this.оbjects),
        (this.mediaQueries = Array.prototype.map.call(
          this.оbjects,
          function (t) {
            return (
              "(" +
              this.type +
              "-width: " +
              t.breakpoint +
              "px)," +
              t.breakpoint
            );
          },
          this,
        )),
        (this.mediaQueries = Array.prototype.filter.call(
          this.mediaQueries,
          function (t, e, n) {
            return Array.prototype.indexOf.call(n, t) === e;
          },
        ));
      for (let e = 0; e < this.mediaQueries.length; e++) {
        const n = this.mediaQueries[e],
          o = String.prototype.split.call(n, ","),
          a = window.matchMedia(o[0]),
          r = o[1],
          i = Array.prototype.filter.call(this.оbjects, function (t) {
            return t.breakpoint === r;
          });
        a.addListener(function () {
          t.mediaHandler(a, i);
        }),
          this.mediaHandler(a, i);
      }
    }),
      (t.prototype.mediaHandler = function (t, e) {
        if (t.matches)
          for (let t = 0; t < e.length; t++) {
            const n = e[t];
            (n.index = this.indexInParent(n.parent, n.element)),
              this.moveTo(n.place, n.element, n.destination);
          }
        else
          for (let t = e.length - 1; t >= 0; t--) {
            const n = e[t];
            n.element.classList.contains(this.daClassname) &&
              this.moveBack(n.parent, n.element, n.index);
          }
      }),
      (t.prototype.moveTo = function (t, e, n) {
        e.classList.add(this.daClassname),
          "last" === t || t >= n.children.length
            ? n.insertAdjacentElement("beforeend", e)
            : "first" !== t
              ? n.children[t].insertAdjacentElement("beforebegin", e)
              : n.insertAdjacentElement("afterbegin", e);
      }),
      (t.prototype.moveBack = function (t, e, n) {
        e.classList.remove(this.daClassname),
          void 0 !== t.children[n]
            ? t.children[n].insertAdjacentElement("beforebegin", e)
            : t.insertAdjacentElement("beforeend", e);
      }),
      (t.prototype.indexInParent = function (t, e) {
        const n = Array.prototype.slice.call(t.children);
        return Array.prototype.indexOf.call(n, e);
      }),
      (t.prototype.arraySort = function (t) {
        "min" === this.type
          ? Array.prototype.sort.call(t, function (t, e) {
              return t.breakpoint === e.breakpoint
                ? t.place === e.place
                  ? 0
                  : "first" === t.place || "last" === e.place
                    ? -1
                    : "last" === t.place || "first" === e.place
                      ? 1
                      : t.place - e.place
                : t.breakpoint - e.breakpoint;
            })
          : Array.prototype.sort.call(t, function (t, e) {
              return t.breakpoint === e.breakpoint
                ? t.place === e.place
                  ? 0
                  : "first" === t.place || "last" === e.place
                    ? 1
                    : "last" === t.place || "first" === e.place
                      ? -1
                      : e.place - t.place
                : e.breakpoint - t.breakpoint;
            });
      });
    new t("max").init();
    let e = {
      Android: function () {
        return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
      },
      any: function () {
        return (
          e.Android() || e.BlackBerry() || e.iOS() || e.Opera() || e.Windows()
        );
      },
    };
    let o = !0,
      a = (t = 500) => {
        let e = document.querySelector("body");
        if (o) {
          let n = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let t = 0; t < n.length; t++) {
              n[t].style.paddingRight = "0px";
            }
            (e.style.paddingRight = "0px"),
              document.documentElement.classList.remove("lock");
          }, t),
            (o = !1),
            setTimeout(function () {
              o = !0;
            }, t);
        }
      },
      r = (t = 500) => {
        let e = document.querySelector("body");
        if (o) {
          let n = document.querySelectorAll("[data-lp]");
          for (let t = 0; t < n.length; t++) {
            n[t].style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px";
          }
          (e.style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px"),
            document.documentElement.classList.add("lock"),
            (o = !1),
            setTimeout(function () {
              o = !0;
            }, t);
        }
      };
    function i(t) {
      setTimeout(() => {
        window.FLS && console.log(t);
      }, 0);
    }
    function c(t) {
      return t.filter(function (t, e, n) {
        return n.indexOf(t) === e;
      });
    }
    let s = (t, e = !1, n = 500, o = 0) => {
      const r = document.querySelector(t);
      if (r) {
        let c = "",
          s = 0;
        e &&
          ((c = "header.header"), (s = document.querySelector(c).offsetHeight));
        let l = {
          speedAsDuration: !0,
          speed: n,
          header: c,
          offset: o,
          easing: "easeOutQuad",
        };
        if (
          (document.documentElement.classList.contains("menu-open") &&
            (a(), document.documentElement.classList.remove("menu-open")),
          "undefined" != typeof SmoothScroll)
        )
          new SmoothScroll().animateScroll(r, "", l);
        else {
          let t = r.getBoundingClientRect().top + scrollY;
          window.scrollTo({ top: s ? t - s : t, behavior: "smooth" });
        }
        i(`[gotoBlock]: Юхуу...едем к ${t}`);
      } else i(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${t}`);
    };
    new (n(732))({
      elements_selector: "[data-src]",
      class_loaded: "_lazy-loaded",
      use_native: !0,
    });
    class l {
      constructor(t) {
        (this.config = Object.assign({ logging: !0 }, t)),
          this.observer,
          !document.documentElement.classList.contains("watcher") &&
            this.scrollWatcherRun();
      }
      scrollWatcherUpdate() {
        this.scrollWatcherRun();
      }
      scrollWatcherRun() {
        document.documentElement.classList.add("watcher"),
          this.scrollWatcherConstructor(
            document.querySelectorAll("[data-watch]"),
          );
      }
      scrollWatcherConstructor(t) {
        if (t.length) {
          this.scrollWatcherLogging(
            `Проснулся, слежу за объектами (${t.length})...`,
          ),
            c(
              Array.from(t).map(function (t) {
                return `${t.dataset.watchRoot ? t.dataset.watchRoot : null}|${t.dataset.watchMargin ? t.dataset.watchMargin : "0px"}|${t.dataset.watchThreshold ? t.dataset.watchThreshold : 0}`;
              }),
            ).forEach((e) => {
              let n = e.split("|"),
                o = { root: n[0], margin: n[1], threshold: n[2] },
                a = Array.from(t).filter(function (t) {
                  let e = t.dataset.watchRoot ? t.dataset.watchRoot : null,
                    n = t.dataset.watchMargin ? t.dataset.watchMargin : "0px",
                    a = t.dataset.watchThreshold ? t.dataset.watchThreshold : 0;
                  if (
                    String(e) === o.root &&
                    String(n) === o.margin &&
                    String(a) === o.threshold
                  )
                    return t;
                }),
                r = this.getScrollWatcherConfig(o);
              this.scrollWatcherInit(a, r);
            });
        } else
          this.scrollWatcherLogging("Сплю, нет объектов для слежения. ZzzZZzz");
      }
      getScrollWatcherConfig(t) {
        let e = {};
        if (
          (document.querySelector(t.root)
            ? (e.root = document.querySelector(t.root))
            : "null" !== t.root &&
              this.scrollWatcherLogging(
                `Эмм... родительского объекта ${t.root} нет на странице`,
              ),
          (e.rootMargin = t.margin),
          !(t.margin.indexOf("px") < 0 && t.margin.indexOf("%") < 0))
        ) {
          if ("prx" === t.threshold) {
            t.threshold = [];
            for (let e = 0; e <= 1; e += 0.005) t.threshold.push(e);
          } else t.threshold = t.threshold.split(",");
          return (e.threshold = t.threshold), e;
        }
        this.scrollWatcherLogging(
          "Ой ой, настройку data-watch-margin нужно задавать в PX или %",
        );
      }
      scrollWatcherCreate(t) {
        this.observer = new IntersectionObserver((t, e) => {
          t.forEach((t) => {
            this.scrollWatcherCallback(t, e);
          });
        }, t);
      }
      scrollWatcherInit(t, e) {
        this.scrollWatcherCreate(e), t.forEach((t) => this.observer.observe(t));
      }
      scrollWatcherIntersecting(t, e) {
        t.isIntersecting
          ? (!e.classList.contains("_watcher-view") &&
              e.classList.add("_watcher-view"),
            this.scrollWatcherLogging(
              `Я вижу ${e.classList}, добавил класс _watcher-view`,
            ))
          : (e.classList.contains("_watcher-view") &&
              e.classList.remove("_watcher-view"),
            this.scrollWatcherLogging(
              `Я не вижу ${e.classList}, убрал класс _watcher-view`,
            ));
      }
      scrollWatcherOff(t, e) {
        e.unobserve(t),
          this.scrollWatcherLogging(`Я перестал следить за ${t.classList}`);
      }
      scrollWatcherLogging(t) {
        this.config.logging && i(`[Наблюдатель]: ${t}`);
      }
      scrollWatcherCallback(t, e) {
        const n = t.target;
        this.scrollWatcherIntersecting(t, n),
          n.hasAttribute("data-watch-once") &&
            t.isIntersecting &&
            this.scrollWatcherOff(n, e),
          document.dispatchEvent(
            new CustomEvent("watcherCallback", { detail: { entry: t } }),
          );
      }
    }
    let d = !1;
    setTimeout(() => {
      if (d) {
        let t = new Event("windowScroll");
        window.addEventListener("scroll", function (e) {
          document.dispatchEvent(t);
        });
      }
    }, 0),
      window.addEventListener("load", function (t) {
        if (document.querySelector(".video-module")) {
          document.addEventListener("watcherCallback", function (t) {
            const e = t.detail.entry,
              n = e.target;
            "video" !== n.dataset.watch ||
              n.classList.contains("_init") ||
              (e.isIntersecting
                ? n.querySelector("video").play()
                : n.querySelector("video").pause());
          });
          const t = document.querySelector(".video-module");
          t.addEventListener("click", function (e) {
            t.classList.contains("_init")
              ? (t.querySelector("video").paused
                  ? t.querySelector("video").play()
                  : t.querySelector("video").pause(),
                t.classList.toggle("_active"))
              : ((t.querySelector("video").src =
                  t.querySelector("video").dataset.full),
                t.classList.add("_active"),
                t.classList.add("_init"),
                t.querySelector("video").play(),
                (t.querySelector("video").muted = !1),
                (t.querySelector("video").loop = !0));
          });
        }
      }),
      (window.FLS = !0),
      (function (t) {
        let e = new Image();
        (e.onload = e.onerror =
          function () {
            t(2 == e.height);
          }),
          (e.src =
            "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
      })(function (t) {
        let e = !0 === t ? "webp" : "no-webp";
        document.documentElement.classList.add(e);
      }),
      (function () {
        let t = document.querySelector(".icon-menu");
        t &&
          t.addEventListener("click", function (t) {
            o &&
              (((t = 500) => {
                document.documentElement.classList.contains("lock")
                  ? a(t)
                  : r(t);
              })(),
              document.documentElement.classList.toggle("menu-open"));
          });
      })(),
      (function () {
        if (document.querySelectorAll("[data-fullscreen]").length && e.any()) {
          function t() {
            let t = 0.01 * window.innerHeight;
            document.documentElement.style.setProperty("--vh", `${t}px`);
          }
          window.addEventListener("resize", t), t();
        }
      })(),
      new l({}),
      (function () {
        function t(t) {
          if ("click" === t.type) {
            const e = t.target;
            if (e.closest("[data-goto]")) {
              const n = e.closest("[data-goto]"),
                o = n.dataset.goto ? n.dataset.goto : "",
                a = !!n.hasAttribute("data-goto-header"),
                r = n.dataset.gotoSpeed ? n.dataset.gotoSpeed : "500";
              s(o, a, r), t.preventDefault();
            }
          } else if ("watcherCallback" === t.type && t.detail) {
            const e = t.detail.entry,
              n = e.target;
            if ("navigator" === n.dataset.watch) {
              const t = n.id,
                o =
                  (document.querySelector("[data-goto]._navigator-active"),
                  document.querySelector(`[data-goto="${t}"]`));
              e.isIntersecting
                ? o && o.classList.add("_navigator-active")
                : o && o.classList.remove("_navigator-active");
            }
          }
        }
        document.addEventListener("click", t),
          document.addEventListener("watcherCallback", t);
      })(),
      (function () {
        d = !0;
        const t = document.querySelector("header.header"),
          e = t.hasAttribute("data-scroll-show"),
          n = t.dataset.scrollShow ? t.dataset.scrollShow : 500,
          o = t.dataset.scroll ? t.dataset.scroll : 1;
        let a,
          r = 0;
        document.addEventListener("windowScroll", function (i) {
          const c = window.scrollY;
          clearTimeout(a),
            c >= o
              ? (!t.classList.contains("_header-scroll") &&
                  t.classList.add("_header-scroll"),
                e &&
                  (c > r
                    ? t.classList.contains("_header-show") &&
                      t.classList.remove("_header-show")
                    : !t.classList.contains("_header-show") &&
                      t.classList.add("_header-show"),
                  (a = setTimeout(() => {
                    !t.classList.contains("_header-show") &&
                      t.classList.add("_header-show");
                  }, n))))
              : (t.classList.contains("_header-scroll") &&
                  t.classList.remove("_header-scroll"),
                e &&
                  t.classList.contains("_header-show") &&
                  t.classList.remove("_header-show")),
            (r = c <= 0 ? 0 : c);
        });
      })();
  })();
})();
