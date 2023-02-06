(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    226: function (t, n, e) {
      var i = e(260);
      "string" == typeof i && (i = [[t.i, i, ""]]);
      var s = { hmr: !0, transform: void 0, insertInto: void 0 };
      e(11)(i, s);
      i.locals && (t.exports = i.locals);
    },
    227: function (t, n, e) {
      var i = e(262);
      "string" == typeof i && (i = [[t.i, i, ""]]);
      var s = { hmr: !0, transform: void 0, insertInto: void 0 };
      e(11)(i, s);
      i.locals && (t.exports = i.locals);
    },
    256: function (t, n, e) {
      "use strict";
      var i = function () {
        var t = this,
          n = t.$createElement,
          e = t._self._c || n;
        return e("div", { staticClass: "c-CounterIncrement" }, [
          e(
            "div",
            { ref: "content", staticClass: "c-CounterIncrement-content" },
            [
              e("div", { staticClass: "c-CounterIncrement-digit" }, [
                e(
                  "div",
                  {
                    staticClass:
                      "js-tenthousands c-CounterIncrement-digit-line",
                  },
                  [
                    t._l(10, function (n) {
                      return e("div", { key: n }, [t._v(t._s(n - 1))]);
                    }),
                    t._v(" "),
                    e("div", { staticClass: "js-digit" }, [t._v("0")]),
                  ],
                  2
                ),
              ]),
              t._v(" "),
              e("div", { staticClass: "c-CounterIncrement-digit" }, [
                e(
                  "div",
                  { staticClass: "js-thousands c-CounterIncrement-digit-line" },
                  [
                    t._l(10, function (n) {
                      return e("div", { key: n }, [t._v(t._s(n - 1))]);
                    }),
                    t._v(" "),
                    e("div", [t._v("0")]),
                  ],
                  2
                ),
              ]),
              t._v(" "),
              e("div", { staticClass: "c-CounterIncrement-digit" }, [
                e(
                  "div",
                  { staticClass: "js-hundreds c-CounterIncrement-digit-line" },
                  [
                    t._l(10, function (n) {
                      return e("div", { key: n }, [t._v(t._s(n - 1))]);
                    }),
                    t._v(" "),
                    e("div", [t._v("0")]),
                  ],
                  2
                ),
              ]),
              t._v(" "),
              e("div", { staticClass: "c-CounterIncrement-digit" }, [
                e(
                  "div",
                  { staticClass: "js-tens c-CounterIncrement-digit-line" },
                  [
                    t._l(10, function (n) {
                      return e("div", { key: n }, [t._v(t._s(n - 1))]);
                    }),
                    t._v(" "),
                    e("div", [t._v("0")]),
                  ],
                  2
                ),
              ]),
              t._v(" "),
              e("div", { staticClass: "c-CounterIncrement-digit" }, [
                e(
                  "div",
                  { staticClass: "js-units c-CounterIncrement-digit-line" },
                  [
                    t._l(10, function (n) {
                      return e("div", { key: n }, [t._v(t._s(n - 1))]);
                    }),
                    t._v(" "),
                    e("div", [t._v("0")]),
                  ],
                  2
                ),
              ]),
            ]
          ),
        ]);
      };
      i._withStripped = !0;
      var s = e(16),
        a = {
          name: "CounterIncrement",
          props: {
            value: { type: Number, default: 0 },
            duration: { type: Number, default: 800 },
          },
          watch: {
            value: "updateCounter",
            "$appdatas.store.screen.width": "resize",
            "$appdatas.store.screen.height": "resize",
          },
          mounted() {
            this.$nextTick(() => {
              (this.$digit = this.$el.querySelector(".js-digit")),
                (this.$units = this.$el.querySelector(".js-units")),
                (this.$tens = this.$el.querySelector(".js-tens")),
                (this.$hundreds = this.$el.querySelector(".js-hundreds")),
                (this.$thousands = this.$el.querySelector(".js-thousands")),
                (this.$tenthousands =
                  this.$el.querySelector(".js-tenthousands")),
                (this.digitAnims = []),
                (this.$digits = [
                  this.$tenthousands,
                  this.$thousands,
                  this.$hundreds,
                  this.$tens,
                  this.$units,
                ]),
                (this.oldDigitsToDisplay = 0),
                this.resize(),
                this.initCounter();
            });
          },
          methods: {
            initCounter() {
              this.currentValue = this.value;
              let t = this.currentValue.toString().padStart(5, "0"),
                n = t.length - 1;
              t.split("").forEach((e, i) => {
                let s = parseInt(t.substring(0, t.length - (n - i)));
                this.digitAnims[i] = {
                  tween: null,
                  from: s,
                  current: s,
                  to: s,
                  diff: 0,
                };
                let a = -parseInt(e) * (this.digitHeight + 10);
                this.$digits[i].style.transform = `translate3d(0, ${a}px, 0)`;
              }),
                this.displayDigits();
            },
            updateCounter() {
              0 !== this.value
                ? (this.displayDigits(), this.animCounter(this.value))
                : this.initCounter();
            },
            animCounter(t) {
              let n = this.currentValue.toString().padStart(5, "0"),
                e = Math.round(t).toString().padStart(5, "0"),
                i = n.length - 1;
              n.split("").forEach((t, s) => {
                let a = parseInt(n.substring(0, n.length - (i - s))),
                  r = parseInt(e.substring(0, e.length - (i - s))),
                  o = r - a;
                (this.digitAnims[s].to = r), (this.digitAnims[s].diff = o);
              }),
                this.digitAnims.forEach((t, n) => {
                  Math.abs(t.diff) > 0 &&
                    (s.b.killTweensOf(t),
                    (t.tween = s.b.to(t, {
                      duration: 0.001 * this.duration,
                      current: t.to,
                      onUpdate: () => {
                        n === this.digitAnims.length - 1 &&
                          (this.currentValue = Math.round(t.current));
                        let e = (-t.current % 10) * (this.digitHeight + 10);
                        this.$digits[
                          n
                        ].style.transform = `translate3d(0, ${e}px, 0)`;
                      },
                    })));
                });
            },
            displayDigits() {
              if (
                ((this.digitsToDisplay = Math.round(
                  this.value
                ).toString().length),
                this.digitsToDisplay !== this.oldDigitsToDisplay)
              ) {
                this.$digits.forEach((t, n) => {
                  let e =
                    this.$digits.length - n > this.digitsToDisplay ? 0 : 1;
                  t.style.opacity = e;
                });
                let t =
                  (-(this.$digits.length - this.digitsToDisplay) *
                    this.digitWidth) /
                  2;
                (this.$refs.content.style.transform = `translate3d(${t}px, 0, 0)`),
                  (this.oldDigitsToDisplay = this.digitsToDisplay);
              }
            },
            resize() {
              (this.digitWidth = this.$digit.offsetWidth),
                (this.digitHeight = this.$digit.offsetHeight);
            },
          },
        },
        r = (e(261), e(5)),
        o = Object(r.a)(a, i, [], !1, null, null, null);
      o.options.__file =
        "src/components/counter-increment/counter-increment.vue";
      n.a = o.exports;
    },
    258: function (t, n, e) {
      var i = e(301);
      "string" == typeof i && (i = [[t.i, i, ""]]);
      var s = { hmr: !0, transform: void 0, insertInto: void 0 };
      e(11)(i, s);
      i.locals && (t.exports = i.locals);
    },
    259: function (t, n, e) {
      "use strict";
      var i = e(226);
      e.n(i).a;
    },
    260: function (t, n, e) {
      (t.exports = e(10)(!1)).push([
        t.i,
        '.c-Bullets {\n  text-align: center;\n  position: relative;\n  margin-bottom: 20px;\n  margin-top: 30px;\n  display: block;\n}\n@media screen and (min-width: 1024px) {\n.c-Bullets {\n    margin-top: 45px;\n}\n}\n.c-Bullets-cursor {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 34px;\n  height: 24px;\n  transform: translateZ(0);\n  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);\n}\n.c-Bullets-cursor:before {\n  content: "";\n  position: absolute;\n  top: 0px;\n  left: 5px;\n  width: 24px;\n  height: 24px;\n  border: 1px solid #fff;\n  border-radius: 50%;\n}\n.c-Bullets-list {\n  position: relative;\n  display: inline-flex;\n  justify-content: center;\n  margin: 0 auto;\n}\n.c-Bullets-item {\n  width: 24px;\n  height: 24px;\n  margin: 0 5px;\n}\n.c-Bullets-item-btn {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: block;\n  border-radius: 50%;\n}\n.c-Bullets-item-btn:before {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 6px;\n  height: 6px;\n  margin-left: -3px;\n  margin-top: -3px;\n  background: #fff;\n  border-radius: 50%;\n  opacity: 0.3;\n  transition: opacity 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);\n}\n@media screen and (min-width: 1024px) {\n.c-Bullets-item-btn:hover:before {\n    opacity: 1;\n}\n}\n.c-Bullets-item-btn.is-active:before {\n  opacity: 1;\n}\n.c-Bullets-item-btn.is-active:after {\n  transform: scale(1) translateZ(0);\n}\n',
        "",
      ]);
    },
    261: function (t, n, e) {
      "use strict";
      var i = e(227);
      e.n(i).a;
    },
    262: function (t, n, e) {
      (t.exports = e(10)(!1)).push([
        t.i,
        ".c-CounterIncrement {\n  font-size: 49px;\n  font-size: 3.0625rem;\n  font-family: \"OptimaLTStd\", 'serif';\n  user-select: none;\n}\n.c-CounterIncrement-content {\n  display: inline-flex;\n}\n.c-CounterIncrement-digit {\n  position: relative;\n  width: 28px;\n  height: 49px;\n  overflow: hidden;\n}\n.c-CounterIncrement-digit-line > div {\n  margin-bottom: 10px;\n}\n.c-CounterIncrement-digit-item {\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  transform: translate3d(0, 100%, 0);\n  transition: none;\n}\n.c-CounterIncrement-digit-item.is-active,\n.c-CounterIncrement-digit-item.is-prev,\n.c-CounterIncrement-digit-item.is-next {\n  transition-property: transform, opacity;\n  transition-timing-function: cubic-bezier(0.77, 0, 0.175, 1);\n  transition-duration: 0.072s;\n}\n.c-CounterIncrement-digit-item.is-active {\n  opacity: 1;\n  transform: translate3d(0, 0, 0);\n}\n.c-CounterIncrement-digit-item.is-next {\n  transform: translate3d(0, 100%, 0);\n}\n.c-CounterIncrement-digit-item.is-prev {\n  transform: translate3d(0, -100%, 0);\n}\n",
        "",
      ]);
    },
    263: function (t, n, e) {
      var i = e(303);
      "string" == typeof i && (i = [[t.i, i, ""]]);
      var s = { hmr: !0, transform: void 0, insertInto: void 0 };
      e(11)(i, s);
      i.locals && (t.exports = i.locals);
    },
    264: function (t, n, e) {
      var i = e(305);
      "string" == typeof i && (i = [[t.i, i, ""]]);
      var s = { hmr: !0, transform: void 0, insertInto: void 0 };
      e(11)(i, s);
      i.locals && (t.exports = i.locals);
    },
    265: function (t, n, e) {
      var i = e(307);
      "string" == typeof i && (i = [[t.i, i, ""]]);
      var s = { hmr: !0, transform: void 0, insertInto: void 0 };
      e(11)(i, s);
      i.locals && (t.exports = i.locals);
    },
    289: function (t, n, e) {
      "use strict";
      var i = function () {
        var t = this,
          n = t.$createElement;
        return (t._self._c || n)(
          "div",
          {
            on: {
              "&mouseenter": function (n) {
                return t.onMouseEnter(n);
              },
              "&mouseleave": function (n) {
                return t.onMouseLeave(n);
              },
            },
          },
          [t._t("default")],
          2
        );
      };
      i._withStripped = !0;
      var s = {
          name: "CursorTrigger",
          props: {
            active: { type: Boolean, default: !0 },
            name: { type: String, default: "" },
            value: { type: String, default: "" },
          },
          watch: { active: "onActiveChange" },
          methods: {
            onMouseEnter(t) {
              this.active &&
                this.$eventHub.$emit("cursor:enter", this.name, this.value, t);
            },
            onMouseLeave() {
              this.active && this.$eventHub.$emit("cursor:leave", this.name);
            },
            onActiveChange() {
              this.active || this.$eventHub.$emit("cursor:leave", this.name);
            },
          },
        },
        a = e(5),
        r = Object(a.a)(s, i, [], !1, null, null, null);
      r.options.__file = "src/components/cursor-trigger/cursor-trigger.vue";
      n.a = r.exports;
    },
    290: function (t, n, e) {
      "use strict";
      var i = function () {
        var t = this,
          n = t.$createElement,
          e = t._self._c || n;
        return e("div", { staticClass: "c-Bullets" }, [
          e(
            "ul",
            { staticClass: "c-Bullets-list t-list" },
            [
              e("div", {
                staticClass: "c-Bullets-cursor",
                style: {
                  transform:
                    "translateX(" + 100 * t.currentIndex + "%) translateZ(0)",
                },
              }),
              t._v(" "),
              t._l(t.nbSlide, function (n, i) {
                return e("li", { key: i, staticClass: "c-Bullets-item" }, [
                  e("button", {
                    staticClass: "c-Bullets-item-btn t-btn",
                    class: { "is-active": t.currentIndex === i },
                    attrs: {
                      type: "button",
                      "aria-label": "Show Instructions",
                    },
                    on: {
                      click: function (n) {
                        return t.onClick(i);
                      },
                    },
                  }),
                ]);
              }),
            ],
            2
          ),
        ]);
      };
      i._withStripped = !0;
      var s = {
          name: "SliderBullets",
          props: {
            nbSlide: { type: Number, default: 4 },
            currentIndex: { type: Number, default: 0 },
            goToIndex: { type: Function, default: () => {} },
          },
          methods: {
            onClick(t) {
              this.goToIndex(t),
                this.$appdatas.audioLayout.play("GENERAL_CLICK");
            },
          },
        },
        a = (e(259), e(5)),
        r = Object(a.a)(s, i, [], !1, null, null, null);
      r.options.__file = "src/components/slider-bullets/slider-bullets.vue";
      n.a = r.exports;
    },
    296: function (t, n, e) {
      t.exports = e.p + "assets/img/landing-lowpower-379913fe.jpg";
    },
    297: function (t, n, e) {
      var i = {
        "./intro-poster-desktop.jpg": 298,
        "./intro-poster-mobile.jpg": 299,
      };
      function s(t) {
        var n = a(t);
        return e(n);
      }
      function a(t) {
        if (!e.o(i, t)) {
          var n = new Error("Cannot find module '" + t + "'");
          throw ((n.code = "MODULE_NOT_FOUND"), n);
        }
        return i[t];
      }
      (s.keys = function () {
        return Object.keys(i);
      }),
        (s.resolve = a),
        (t.exports = s),
        (s.id = 297);
    },
    298: function (t, n, e) {
      t.exports = e.p + "assets/img/intro-poster-desktop-7a50bce8.jpg";
    },
    299: function (t, n, e) {
      t.exports = e.p + "assets/img/intro-poster-mobile-afc57402.jpg";
    },
    300: function (t, n, e) {
      "use strict";
      var i = e(258);
      e.n(i).a;
    },
    301: function (t, n, e) {
      (t.exports = e(10)(!1)).push([
        t.i,
        '.c-CircleLoader {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  filter: drop-shadow(0px 0px 4px #fff);\n}\n.c-CircleLoader:before {\n  content: "";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: rgba(0,0,0,0.1);\n  border: 1px solid #fff;\n  border-radius: 50%;\n  opacity: 0.2;\n}\n.c-CircleLoader:after {\n  content: "";\n  position: absolute;\n  top: 0%;\n  left: 0%;\n  width: 100%;\n  height: 100%;\n  background: #fff;\n  border-radius: 50%;\n  opacity: 0;\n  transform: scale(0.6) translateZ(0);\n  transition: transform 0.6s cubic-bezier(0.77, 0, 0.175, 1) 0.4s, opacity 0.6s cubic-bezier(0.77, 0, 0.175, 1) 0.4s;\n}\n.is-loaded .c-CircleLoader:after {\n  opacity: 1;\n  transform: scale(0.15) translateZ(0);\n}\n.c-CircleLoader-circle {\n  position: absolute;\n  top: 0;\n  left: 0;\n  transform: rotate(-90deg);\n}\n.c-CircleLoader-circle circle {\n  stroke-dasharray: 230;\n  stroke-dashoffset: 230;\n}\n.c-CircleLoader-label {\n  position: relative;\n  opacity: 1;\n  transform: translateZ(0);\n  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1), opacity 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);\n}\n.is-loaded .c-CircleLoader-label {\n  opacity: 0;\n}\n',
        "",
      ]);
    },
    302: function (t, n, e) {
      "use strict";
      var i = e(263);
      e.n(i).a;
    },
    303: function (t, n, e) {
      (t.exports = e(10)(!1)).push([
        t.i,
        '.c-VortexTilt-legends-desc-item {\n  font-family: "OptimaLTStd", \'serif\';\n}\n.el-gr .c-VortexTilt-legends-desc-item {\n  font-family: "OptimaELText", \'serif\';\n}\n.pl-pl .c-VortexTilt-legends-desc-item {\n  font-family: "OptimaELText", \'serif\';\n}\n.ru-ru .c-VortexTilt-legends-desc-item {\n  font-family: "OptimaELText", \'serif\';\n}\n.tr-tr .c-VortexTilt-legends-desc-item {\n  font-family: "OptimaNovaLTPro-Light", \'sans-serif\';\n}\n.zh-cn .c-VortexTilt-legends-desc-item {\n  font-family: "OptimaLTStd", "Microsoft YaHei", "Microsoft JhengHei", "Hiragino Sans GB", "STHeiti", "sans-serif", "Tahoma", "arial";\n}\n.c-VortexTilt {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  user-select: none;\n  cursor: none;\n  visibility: hidden;\n  transition: visibility 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);\n}\n.c-VortexTilt.is-vortex-active {\n  visibility: visible;\n  transition: visibility 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);\n}\n.c-VortexTilt-content {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  transform: translateZ(0);\n  transition: opacity 0.05s cubic-bezier(0.165, 0.84, 0.44, 1);\n}\n.is-vortex-active .c-VortexTilt-content {\n  opacity: 1;\n  transition: opacity 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);\n}\n.c-VortexTilt-ui {\n  position: absolute;\n  bottom: 0px;\n  left: 0;\n  width: 100%;\n  text-align: center;\n  padding-bottom: 86px;\n  background: linear-gradient(0deg, #000, transparent);\n  padding-top: 100px;\n}\n@media screen and (min-width: 1024px) {\n.c-VortexTilt-ui {\n    height: 100%;\n    padding-top: 0;\n    background: none;\n}\n}\n@media screen and (min-width: 1024px) {\n.c-VortexTilt-ui-content {\n    position: absolute;\n    top: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-start;\n    padding: 0 5.7vw;\n    width: 50%;\n    height: 100%;\n    right: 0;\n}\n}\n.c-VortexTilt-legends {\n  width: 71.42857142857143%;\n  margin: 0 auto;\n}\n.zh-cn .c-VortexTilt-legends {\n  width: 78.57142857142857%;\n}\n@media screen and (min-width: 1024px) {\n.c-VortexTilt-legends {\n    width: 100%;\n    max-width: 325px;\n}\n.c-VortexTilt-legends:before {\n    content: "";\n    width: 600px;\n    height: 600px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin-top: -300px;\n    margin-left: -300px;\n    background: radial-gradient(#041331, transparent 70%);\n    opacity: 0;\n    transform: translateZ(0);\n    transition: opacity 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);\n}\n.is-vortex-active .c-VortexTilt-legends:before {\n    opacity: 0.7;\n    transition: opacity 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);\n}\n}\n.c-VortexTilt-legends-year {\n  opacity: 0;\n  transform: translateY(20px) translateZ(0);\n  transition: transform 0s cubic-bezier(0.165, 0.84, 0.44, 1) 0.6s, opacity 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);\n}\n.is-vortex-active .c-VortexTilt-legends-year {\n  opacity: 1;\n  transform: translateZ(0);\n  transition: transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1), opacity 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);\n}\n.c-VortexTilt-legends-desc {\n  position: relative;\n  opacity: 0;\n  transform: translateY(20px) translateZ(0);\n  transition: transform 0s cubic-bezier(0.165, 0.84, 0.44, 1) 0.6s, opacity 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);\n}\n.is-vortex-active .c-VortexTilt-legends-desc {\n  opacity: 1;\n  transform: translateZ(0);\n  transition: transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) 0.1s, opacity 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) 0.1s;\n}\n@media screen and (min-width: 1024px) {\n.c-VortexTilt-legends-desc {\n    margin-top: 5px;\n}\n}\n.c-VortexTilt-legends-desc-item {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  text-align: center;\n  opacity: 0;\n  transform: translateY(0px) translateZ(0);\n  transition: opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1), transform 0s cubic-bezier(0.165, 0.84, 0.44, 1) 0.3s;\n}\n.c-VortexTilt-legends-desc-item.is-active {\n  opacity: 1;\n  transform: translateY(0px) translateZ(0);\n  transition: opacity 0.6s cubic-bezier(0.165, 0.84, 0.44, 1) 0.2s, transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1) 0.2s;\n}\n.c-VortexTilt-legends-desc-item:first-child {\n  position: relative;\n}\n@media screen and (min-width: 1024px) {\n.c-VortexTilt-legends-desc-item {\n    font-size: 18px;\n    font-size: 1.125rem;\n}\n}\n.c-VortexTilt-bullets {\n  margin-bottom: 0;\n  margin-top: 20px;\n  opacity: 0;\n  transform: translateY(20px) translateZ(0);\n  transition: transform 0s cubic-bezier(0.165, 0.84, 0.44, 1) 0.6s, opacity 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);\n}\n.is-vortex-active .c-VortexTilt-bullets {\n  opacity: 1;\n  transform: translateZ(0);\n  transition: transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) 0.2s, opacity 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) 0.2s;\n}\n@media screen and (min-width: 1024px) {\n.c-VortexTilt-bullets {\n    position: absolute;\n    bottom: 100px;\n    left: 0;\n    width: 100%;\n}\n}\n.c-VortexTilt-bg {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.c-VortexTilt-bg-img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  transform: translateZ(0);\n  backface-visibility: hidden;\n  background-repeat: no-repeat;\n}\n.c-VortexTilt-bg-img.is-active {\n  opacity: 1;\n}\n',
        "",
      ]);
    },
    304: function (t, n, e) {
      "use strict";
      var i = e(264);
      e.n(i).a;
    },
    305: function (t, n, e) {
      (t.exports = e(10)(!1)).push([
        t.i,
        ".c-Decades2020 .c-VortexTilt-legends-desc-item {\n  font-size: 1.5rem;\n}\n.c-Decades2020 .c-CounterIncrement {\n  font-size: 3rem;\n}\n.c-Decades2020 .c-CounterIncrement-digit {\n  width: 30px;\n  height: 60px;\n}\n@media screen and (min-width: 1024px) {\n.c-Decades2020 .c-VortexTilt-legends-desc-item {\n    font-size: 1.8rem;\n}\n.c-Decades2020 .c-CounterIncrement {\n    font-size: 4rem;\n}\n.c-Decades2020 .c-CounterIncrement-digit {\n    width: 34px;\n    height: 69px;\n}\n}\n",
        "",
      ]);
    },
    306: function (t, n, e) {
      "use strict";
      var i = e(265);
      e.n(i).a;
    },
    307: function (t, n, e) {
      (t.exports = e(10)(!1)).push([
        t.i,  
        '.c-Intro-landing-subtitle {\n  font-family: "Montserrat", \'serif\';\n}\n.el-gr .c-Intro-landing-subtitle {\n  font-family: "OptimaELText", \'serif\';\n}\n.pl-pl .c-Intro-landing-subtitle {\n  font-family: "OptimaELText", \'serif\';\n}\n.ru-ru .c-Intro-landing-subtitle {\n  font-family: "OptimaELText", \'serif\';\n}\n.tr-tr .c-Intro-landing-subtitle {\n  font-family: "OptimaNovaLTPro-Light", \'sans-serif\';\n}\n.zh-cn .c-Intro-landing-subtitle {\n  font-family: "OptimaLTStd", "Microsoft YaHei", "Microsoft JhengHei", "Hiragino Sans GB", "STHeiti", "sans-serif", "Tahoma", "arial";\n}\n.c-Intro {\n  width: 100%;\n  height: 100%;\n  user-select: none;\n  -webkit-user-select: none;\n}\n.c-Intro-bg {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background: #000;\n  opacity: 0;\n  transform: translateZ(0);\n  transition: opacity 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);\n}\n.is-page-enter .c-Intro-bg {\n  opacity: 1;\n}\n.c-Intro-bg-inner {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.c-Intro-bg-video {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  visibility: hidden;\n}\n.c-Intro-bg-video.is-active {\n  opacity: 1;\n  visibility: visible;\n}\n.c-Intro-bg-img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  transform: translateZ(0);\n  visibility: hidden;\n}\n.c-Intro-bg-img.is-active {\n  opacity: 1;\n  visibility: visible;\n  transition: opacity 1.2s cubic-bezier(0.165, 0.84, 0.44, 1), visibility 1.2s cubic-bezier(0.165, 0.84, 0.44, 1);\n}\n.c-Intro-bg-out {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  transform: translateZ(0);\n  visibility: hidden;\n}\n.c-Intro-bg-out.is-active {\n  opacity: 1;\n  visibility: visible;\n  transition: opacity 0.8s cubic-bezier(0.165, 0.84, 0.44, 1), visibility 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);\n}\n.c-Intro-landing {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  user-select: none;\n  overflow: hidden;\n}\n.is-landing-out .c-Intro-landing {\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.8s cubic-bezier(0.165, 0.84, 0.44, 1), visibility 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);\n}\n.c-Intro-landing-logo {\n  position: absolute;\n  top: 35px;\n  left: 50%;\n  margin-left: -79px;\n}\n.c-Intro-landing-content {\n  width: 71.42857142857143%;\n  position: relative;\n  transform: translateY(0px) translateZ(0);\n  transition: transform 1.2s cubic-bezier(0.77, 0, 0.175, 1);\n}\n.is-video-ready .c-Intro-landing-content {\n  transform: translateY(-6vh) translateZ(0);\n}\n@media screen and (min-width: 1024px) {\n.is-video-ready .c-Intro-landing-content {\n    transform: translateY(-8vh) translateZ(0);\n}\n}\n.c-Intro-landing-title {\n  display: block;\n  line-height: 1.2;\n  letter-spacing: 10px;\n  transform: scale(1.119) translateZ(0);\n  transition: transform 1.2s cubic-bezier(0.77, 0, 0.175, 1);\n}\n.is-video-ready .c-Intro-landing-title {\n  transform: scale(1) translateZ(0);\n}\n.c-Intro-landing-title-word {\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  transform: translateY(40px) translateZ(0);\n  transition: opacity 1.2s cubic-bezier(0.165, 0.84, 0.44, 1), transform 1.2s cubic-bezier(0.165, 0.84, 0.44, 1);\n}\n.is-page-enter .c-Intro-landing-title-word {\n  transform: translateY(0px) translateZ(0);\n}\n.c-Intro-landing-title-word .c-Intro-landing-title-letter {\n  text-shadow: 0px 0px 6px #fff;\n}\n.c-Intro-landing-title-word:nth-child(1) {\n  font-size: 7.71vw;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n}\n@media screen and (min-width: 1024px) {\n.c-Intro-landing-title-word:nth-child(1) {\n    font-size: 3.61vw;\n}\n}\n.c-Intro-landing-title-word:nth-child(1) .c-Intro-landing-title-letter {\n  transition-delay: 0s;\n}\n.c-Intro-landing-title-word:nth-child(2) {\n  font-size: 10.74vw;\n}\n@media screen and (min-width: 1024px) {\n.c-Intro-landing-title-word:nth-child(2) {\n    font-size: 5.03vw;\n}\n}\n.c-Intro-landing-title-word:nth-child(2) .c-Intro-landing-title-letter {\n  transition-delay: 0.1s;\n}\n.c-Intro-landing-title-word:nth-child(2) .c-Intro-landing-title-letter:first-child,\n.c-Intro-landing-title-word:nth-child(2) .c-Intro-landing-title-letter:last-child {\n  transition-delay: 0.2s;\n}\n.c-Intro-landing-title-word:nth-child(2) .c-Intro-landing-title-letter:nth-child(1),\n.c-Intro-landing-title-word:nth-child(2) .c-Intro-landing-title-letter:nth-child(2),\n.c-Intro-landing-title-word:nth-child(2) .c-Intro-landing-title-letter:nth-child(3) {\n font-size: 2.3rem \n}\n.c-Intro-landing-title-word:nth-child(3) {\n  font-size: 10.08vw;\n  line-height: 1;\n}\n@media screen and (min-width: 1024px) {\n.c-Intro-landing-title-word:nth-child(3) {\n    font-size: 6.6vw;\n}\n}\n.c-Intro-landing-title-word:nth-child(3) .c-Intro-landing-title-letter {\n  transition-delay: 0.2s;\n}\n.c-Intro-landing-title-word:nth-child(3) .c-Intro-landing-title-letter:first-child,\n.c-Intro-landing-title-word:nth-child(3) .c-Intro-landing-title-letter:last-child {\n  transition-delay: 0.3s;\n}\n.c-Intro-landing-title-word:nth-child(1) {\n  transition-delay: 0.1s;\n}\n.c-Intro-landing-title-word:nth-child(2) {\n  transition-delay: 0.2s;\n}\n.c-Intro-landing-title-word:nth-child(3) {\n  transition-delay: 0.3s;\n}\n.c-Intro-landing-title-letter {\n  display: block;\n  opacity: 0;\n  transform: translateY(100%) translateZ(0);\n  will-change: transform;\n  transition: opacity 1.2s cubic-bezier(0.165, 0.84, 0.44, 1), transform 1.2s cubic-bezier(0.165, 0.84, 0.44, 1);\n}\n.is-page-enter .c-Intro-landing-title-letter {\n  opacity: 1;\n  transform: translateZ(0px);\n}\n.c-Intro-landing-subtitle {\n  margin-top: 30px;\n  font-weight: normal;\n  opacity: 0;\n  transform: translateY(20px) translateZ(0);\n  transition: opacity 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) 0.5s, transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) 0.5s;\n}\n.is-video-ready .c-Intro-landing-subtitle {\n  opacity: 1;\n  transform: translateY(0px) translateZ(0);\n}\n@media screen and (min-width: 1024px) {\n.c-Intro-landing-subtitle {\n    margin-top: 18px;\n    width: 40%;\n    margin-left: auto;\n    margin-right: auto;\n}\n}\n.c-Intro-landing-draggable {\n  width: 57.142857142857146%;\n  margin-left: 21.42857142857143%;\n  position: absolute;\n  left: 0;\n  bottom: 100px;\n}\n@media screen and (min-width: 1024px) {\n.c-Intro-landing-draggable {\n    bottom: 120px;\n}\n}\n.c-Intro-landing-draggable-line {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 57px;\n  margin-bottom: 2px;\n  width: 1px;\n  height: 80px;\n  overflow: hidden;\n  transform: translateY(100%) translateZ(0);\n  transform-origin: bottom;\n  transition: transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s;\n}\n.is-loaded .c-Intro-landing-draggable-line {\n  transform: translateY(0%) translateZ(0);\n}\n@media screen and (min-width: 1024px) {\n.c-Intro-landing-draggable-line {\n    height: 100px;\n}\n}\n.c-Intro-landing-draggable-line-inner {\n  width: 100%;\n  height: 100%;\n  border-left: 1px dashed #fff;\n  transform: translateY(-100%) translateZ(0);\n  transform-origin: bottom;\n  transition: transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s;\n  -webkit-mask-image: -webkit-gradient(linear, left 20%, left 150%, from(rgba(255,255,255,0)), to(#fff));\n}\n.is-loaded .c-Intro-landing-draggable-line-inner {\n  transform: translateY(0%) translateZ(0);\n}\n.c-Intro-landing-draggable-label {\n  text-transform: uppercase;\n  margin-top: 15px;\n  opacity: 0;\n  transform: translateY(10px) translateZ(0);\n  transition: transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) 0.4s, opacity 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) 0.4s;\n}\n.is-loaded .c-Intro-landing-draggable-label {\n  opacity: 1;\n  transform: translateY(0px) translateZ(0);\n}\n.c-Intro-landing-draggable-object {\n  cursor: grab;\n  position: relative;\n  width: 74px;\n  height: 74px;\n  margin: 0 auto;\n}\n.c-Intro-landing-draggable-object.is-dragged {\n  cursor: grabbing;\n}\n.c-Intro-landing-draggable-object-loader {\n  opacity: 0;\n  transform: scale(0.8) translateZ(0);\n  transition: transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) 0.6s, opacity 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) 0.6s;\n}\n.is-video-ready .c-Intro-landing-draggable-object-loader {\n  opacity: 1;\n  transform: scale(1) translateZ(0);\n}\n.c-Intro-controls {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 60px;\n  height: 60px;\n  margin-top: -30px;\n  margin-left: -30px;\n  border-radius: 50%;\n  background: #fff;\n  opacity: 0;\n  visibility: hidden;\n}\n.c-Intro-controls.is-active {\n  opacity: 1;\n  visibility: visible;\n  transition: opacity 0.8s cubic-bezier(0.165, 0.84, 0.44, 1), visibility 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);\n}\n.c-Intro-controls:after {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -6px;\n  margin-left: -3px;\n  display: inline-block;\n  height: 0;\n  width: 0;\n  border-top: 6px solid transparent;\n  border-bottom: 6px solid transparent;\n  border-left: 10px solid #17233a;\n}\n.c-Intro-skip {\n  position: absolute;\n  bottom: 25px;\n  left: 0;\n  width: 100%;\n  text-align: center;\n  opacity: 0;\n  visibility: hidden;\n  transform: translateY(20px) translateZ(0);\n  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1), opacity 0.6s cubic-bezier(0.165, 0.84, 0.44, 1), visibility 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);\n}\n@media screen and (min-width: 1024px) {\n.c-Intro-skip {\n    bottom: 40px;\n}\n}\n.c-Intro-skip.is-active {\n  opacity: 1;\n  visibility: visible;\n  transform: translateZ(0);\n  transition: transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) 0.3s, opacity 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) 0.3s;\n}\n',
        "",
      ]);
    },
    513: function (t, n, e) {
      "use strict";
      e.r(n);
      var i = function () {
        var t = this,
          n = t.$createElement,
          e = t._self._c || n;
        return e(
          "div",
          {
            staticClass: "c-Intro",
            class: {
              "is-page-enter": t.isPageEnter,
              "is-video-ready": t.isVideosReady,
              "is-landing-out": t.isLandingOut,
            },
          },
          [
            e(
              "object-fit",
              {
                staticClass: "c-Intro-bg",
                attrs: { width: t.videoWidth, height: t.videoHeight },
              },
              [
                e("div", { staticClass: "js-object-fit c-Intro-bg-inner" }, [
                  e("video", {
                    ref: "landingIntro",
                    staticClass: "c-Intro-bg-video",
                    class: { "is-active": 0 === t.videoActive },
                    attrs: {
                      src: "/assets/video/landingIntro-" + t.suffix + ".mp4",
                      poster: this.getResource("intro-poster").src,
                      playsinline: "",
                      muted: "",
                      preload: "auto",
                    },
                    domProps: { muted: !0 },
                  }),
                  t._v(" "),
                  e("video", {
                    ref: "landingLoop",
                    staticClass: "c-Intro-bg-video",
                    class: { "is-active": 1 === t.videoActive },
                    attrs: {
                      src: "/assets/video/landingLoop-" + t.suffix + ".mp4",
                      playsinline: "",
                      muted: "",
                      loop: "",
                      preload: "auto",
                    },
                    domProps: { muted: !0 },
                  }),
                  t._v(" "),
                  e("video", {
                    ref: "landingOut",
                    staticClass: "c-Intro-bg-video",
                    class: { "is-active": 2 === t.videoActive },
                    attrs: {
                      src: "/assets/video/landingOut-" + t.suffix + ".mp4",
                      playsinline: "",
                    },
                    domProps: { muted: t.isIos || t.isAndroid },
                  }),
                  t._v(" "),
                  e("video", {
                    ref: "vortexOut",
                    staticClass: "c-Intro-bg-video",
                    class: { "is-active": 3 === t.videoActive },
                    attrs: {
                      src: "/assets/video/vortexOut-" + t.suffix + ".mp4",
                      playsinline: "",
                    },
                    domProps: { muted: t.isIos || t.isAndroid },
                  }),
                  t._v(" "),
                  e("img", {
                    staticClass: "c-Intro-bg-img",
                    class: {
                      "is-active":
                        t.isLowPower &&
                        (0 === t.videoActive || 1 === t.videoActive),
                    },
                    attrs: { src: this.getResource("lowpower").src, alt: "" },
                  }),
                  t._v(" "),
                  t.isLoaded
                    ? e("img", {
                        staticClass: "c-Intro-bg-out",
                        class: { "is-active": t.isLeave },
                        attrs: {
                          src: this.getResource("hub-preview").src,
                          alt: "",
                        },
                      })
                    : t._e(),
                ]),
              ]
            ),
            t._v(" "),
            e(
              "div",
              { staticClass: "c-Intro-landing" },
              [
                e(
                  /*
                  "svg",
                  {
                    staticClass: "c-Intro-landing-logo",
                    attrs: {
                      width: "158",
                      height: "20",
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 158 20",
                    },
                  },
                  [
                    e("path", {
                      attrs: {
                        fill: "#FFF",
                        d: "M36.2 3.1v.7h-5.3v15.5H29V3.8h-5.3v-.7h12.5zM48.1.2v.6h-9.4V.2h9.4zM48.1 3.1v.7h-7.5v6.4h6.9v.6h-6.9v7.7h7.6v.7h-9.5V3.1h9.4zM61.1 3.1v.7h-7.5v6.4h6.9v.6h-6.9v7.7h7.6v.7h-9.5V3.1h9.4zM9.4 3.1v.7H1.9v6.4h6.9v.6H1.9v7.7h7.6v.7H0V3.1h9.4zM142 3.1v.7h-7.5v6.4h6.9v.6h-6.9v7.7h7.6v.7h-9.5V3.1h9.4zM73.1 3.1v15.5h7.5v.8h-9.4V3.1h1.9zM21.3 15.3c0-2.2-2.1-2.9-4.2-3.6-2.5-.8-5.1-1.7-5-4.7 0-2.8 2.8-4.3 5.4-4.3 1.5 0 3 .4 4.4 1.1v1.1c-1.2-1-2.7-1.5-4.3-1.6-2.2 0-4 1.3-4 3.1 0 2.2 2.1 2.9 4.3 3.6 2.5.8 5 1.7 5 4.6 0 3.4-3.3 5.1-6.4 5.1-1.6 0-3.2-.4-4.6-1.1v-1.1c.9.6 2.5 1.5 4.6 1.6 3.1 0 4.8-1.9 4.8-3.8zM90.2 3l2.7 6.3s3.7 8.6 4.3 10h-2.1c-.1-.2-2.6-6.3-2.6-6.3h-6.9s-2.5 6.1-2.5 6.3H82L88.7 3h1.5zm-1.3 1.8c-1.1 2.9-2.6 6.6-2.9 7.3l-.1.2h6.4l-.9-2.2L89 4.4l-.1.4zM111.7 3.1v11c0 3.5-2.4 5.5-6.4 5.5-4.2 0-6.5-1.9-6.5-5.7V3.1h1.8v11.3c0 2.9 1.8 4.7 4.9 4.7 3.2 0 5.2-1.9 5.2-5v-11h1zM151.4 3.1c2 0 3.6.5 4.5 1.4.7.7 1.1 1.7 1.1 2.7 0 3.2-3.9 4-4.1 4h-.2l5.4 8.1h-2l-5.1-7.9h-3.5v7.9h-1.9V3.1h5.8zm-.2.6h-3.8v7.1h2.7c1.8 0 3.2-.4 4.1-1.3.6-.6 1-1.5.9-2.4.1-.9-.3-1.8-.9-2.5-.6-.6-1.6-.9-3-.9zM121.5 3.1c2.5 0 4.6.6 6 2s2.1 3.4 2.1 5.9c0 2.6-.7 4.6-2.2 6-1.6 1.5-3.9 2.3-6.8 2.3h-5.4V3.1h6.3zm-.3.6h-4v15h3.1c2.5 0 4.4-.6 5.6-1.8 1.3-1.2 1.9-3.1 1.9-5.6 0-2.7-.6-4.6-2-5.9-1.2-1.1-2.7-1.7-4.6-1.7z",
                      },
                    }),
                  ]
                
                  */),
                t._v(" "),
                e("div", { staticClass: "c-Intro-landing-content" }, [
                  e(
                    "h1",
                    {
                      directives: [
                        {
                          name: "split-word",
                          rawName: "v-split-word",
                          value: {
                            word: "c-Intro-landing-title-word",
                            letter: "c-Intro-landing-title-letter",
                          },
                          expression:
                            "{ word: 'c-Intro-landing-title-word', letter: 'c-Intro-landing-title-letter' }",
                        },
                      ],
                      staticClass: "c-Intro-landing-title t-h1",
                    },
                    [t._v(t._s(t.t("el_content.landing_title")))]
                  ),
                  t._v(" "),
                  e("img", {
                    staticClass: "intro-img animate__animated animate__backInUp",
                    attrs: {"src": "/assets/img/logo.png"}
                  }), 
                  e("p", {
                    staticClass: "intro-explore",
                    on: {
                      click: function (n) {
                        return t.onDragEnd(n);
                      },
                    }
                  },
                  [t._v(t._s(t.t("intro.explore")))]),
                ]),
                t._v(" "),
                e(
                  "div",
                  {
                    staticClass: "c-Intro-landing-draggable",
                    class: { "is-loaded": t.isLoaded },
                  },
                  [
                    e(
                      "div",
                      {
                        ref: "line",
                        staticClass: "c-Intro-landing-draggable-line",
                      },
                      [
                        e("div", {
                          ref: "lineInner",
                          staticClass: "c-Intro-landing-draggable-line-inner",
                        }),
                      ]
                    ),
                    t._v(" "),
                    e(
                      "div",
                      {
                        ref: "draggable",
                        staticClass: "c-Intro-landing-draggable-object",
                        class: { "is-dragged": t.dragStart },
                        on: {
                          mousedown: t.onDragStart,
                          "&touchstart": function (n) {
                            return t.onDragStart(n);
                          },
                        },
                      },
                      [
                        e("circle-loader", {
                          ref: "loader",
                          staticClass:
                            "c-Intro-landing-draggable-object-loader",
                          attrs: {
                            loaderEnded: t.onLoaderEnded,
                            play: t.playLoader,
                          },
                        }),
                      ],
                      1
                    ),
                    t._v(" "),
                    t.isDesktop
                      ? e(
                          "p",
                          {
                            staticClass:
                              "c-Intro-landing-draggable-label t-text--xs",
                          },
                          [t._v(t._s(t.t("common.cta_enter_alt1")))]
                        )
                      : e(
                          "p",
                          {
                            staticClass:
                              "c-Intro-landing-draggable-label t-text--xs",
                          },
                          [t._v(t._s(t.t("common.cta_enter")))]
                        ),
                  ]
                ),
                t._v(" "),
                e("lang-selector"),
              ],
              1
            ),
            t._v(" "),
            e("button", {
              staticClass: "c-Intro-controls t-btn",
              class: { "is-active": t.isPlayBtn },
              attrs: { type: "button" },
              on: { click: t.onPlayVortexOut },
            }),
            t._v(" "),
            t.isLoaded
              ? e("vortex-tilt", {
                  attrs: {
                    active: t.vortexActive,
                    images: t.images,
                    onVortexEnd: t.onVortexEnd,
                    playSound: t.playSound,
                  },
                })
              : t._e(),
            t._v(" "),
            e("decades-2020", { ref: "lastDecades" }),
            t._v(" "),
            e(
              "div",
              {
                ref: "skip",
                staticClass: "c-Intro-skip",
                class: { "is-active": t.isLandingOut || t.videoActive >= 2 },
              },
              [
                e(
                  "router-link",
                  {
                    staticClass: "t-btn t-btn--secondary-alt",
                    attrs: {
                      to: { name: "hub", params: { lang: t.currentLocale } },
                    },
                    nativeOn: {
                      click: function (n) {
                        return t.onSkip(n);
                      },
                    },
                  },
                  [
                    e("span", { staticClass: "t-link--nd" }, [
                      t._v(t._s(t.t("common.skip_button"))),
                    ]),
                  ]
                ),
              ],
              1
            ),
          ],
          1
        );
      };
      i._withStripped = !0;
      var s = e(83),
        a = e(18),
        r = e(38),
        o = e(105),
        l = e(16);
      class d extends s.a {
        constructor() {
          super(),
            (this.name = "Intro"),
            console.log("[MODULE][Intro] instantiate");
        }
        init(t) {
          super.init(t);
          const n = window.innerWidth >= 768 ? "desktop" : "mobile";
          new a.a("lowpower", e(296), this.preloadedResources),
            new a.a(
              "intro-poster",
              e(297)("./intro-poster-" + n + ".jpg"),
              this.preloadedResources
            ),
            new a.a(
              "hub-preview",
              e(128)("./hub-preview-" + n + ".jpg"),
              this.resources
            ),
            (this.nbImages = 287);
          for (let t = 1; t < this.nbImages; t++) {
            let e = t.toString().padStart(3, "0");
            new a.a(
              "sprite-" + t,
              "/assets/img/frames-" + n + "/" + n + "-" + e + ".jpg",
              this.resources
            );
          }
          (this.primaryAudioGroup = new o.a(
            "intro-audio",
            this.audio,
            this.preloadedResources
          )),
            new r.a(
              "EL_INTRO_LOOP-1",
              "intro/EL_INTRO_LOOP-1",
              this.primaryAudioGroup
            ),
            new r.a(
              "EL_INTRO_LOOP-2",
              "intro/EL_INTRO_LOOP-2",
              this.audioResources
            ),
            new r.a(
              "EL_INTRO_LOOP-3",
              "intro/EL_INTRO_LOOP-3",
              this.audioResources
            ),
            new r.a(
              "landing_swipe_up",
              "intro/landing_swipe_up",
              this.audioResources
            ),
            new r.a(
              "decades_swipe_forward",
              "intro/decades_swipe_forward",
              this.audioResources
            ),
            new r.a(
              "assets/audio/intro/decades_swipe_backward",
              this.audioResources
            );
        }
        onLoaded() {
          this.playLandingIntro();
        }
        playSound(t) {
          this.audioResources.get(t).play(1, !1);
        }
        playLandingIntro() {
          (this.landingIntroMusic = this.primaryAudioGroup
            .get("EL_INTRO_LOOP-1")
            .play(1, !0)),
            (this.landingIntroMusic.node.loopStart = 0.153),
            (this.landingIntroMusic.node.loopEnd = 22.122),
            (this.currentMusic = this.landingIntroMusic);
        }
        playLandingOut(t = 1) {
          this.landingIntroMusic &&
            l.a.to(this.landingIntroMusic.gain.gain, {
              duration: t,
              value: 0,
              onComplete: () => {
                var t;
                null === (t = this.landingIntroMusic) ||
                  void 0 === t ||
                  t.dispose(),
                  (this.landingIntroMusic = null);
              },
            }),
            (this.landingOutMusic = this.audioResources
              .get("EL_INTRO_LOOP-2")
              .play(0, !0)),
            (this.landingOutMusic.node.loopStart = 8.018),
            (this.landingOutMusic.node.loopEnd = 30.093),
            l.a.to(this.landingOutMusic.gain.gain, { duration: t, value: 1 }),
            (this.currentMusic = this.landingOutMusic);
        }
        playVortexOut(t = 1) {
          this.landingOutMusic &&
            l.a.to(this.landingOutMusic.gain.gain, {
              duration: t,
              value: 0,
              onComplete: () => {
                var t;
                null === (t = this.landingOutMusic) ||
                  void 0 === t ||
                  t.dispose(),
                  (this.landingOutMusic = null);
              },
            }),
            (this.vortexOutMusic = this.audioResources
              .get("EL_INTRO_LOOP-3")
              .play(0.65, !1)),
            (this.currentMusic = this.vortexOutMusic);
        }
        async leave() {
          let t = null;
          return (
            this.currentMusic &&
              this.currentMusic.gain &&
              (t = new Promise((t) => {
                l.a.to(this.currentMusic.gain.gain, {
                  duration: 0.5,
                  value: 0,
                  onComplete: () => {
                    t();
                  },
                });
              })),
            Promise.all([t, super.leave()]).then(() => {
              this.dispose();
            })
          );
        }
        dispose() {
          var t, n, e;
          this.currentMusic &&
            this.currentMusic.gain &&
            l.a.killTweensOf(this.currentMusic.gain.gain),
            null === (t = this.landingIntroMusic) ||
              void 0 === t ||
              t.dispose(),
            (this.landingIntroMusic = null),
            null === (n = this.landingOutMusic) || void 0 === n || n.dispose(),
            (this.landingOutMusic = null),
            null === (e = this.vortexOutMusic) || void 0 === e || e.dispose(),
            (this.vortexOutMusic = null);
        }
      }
      var c = e(39),
        h = e(84),
        u = e(72),
        p = e(0),
        g = e(20),
        m = function () {
          var t = this.$createElement,
            n = this._self._c || t;
          return n("div", { staticClass: "c-CircleLoader" }, [
            n(
              "svg",
              {
                staticClass: "c-CircleLoader-circle",
                attrs: {
                  width: "74",
                  height: "74",
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 74 74",
                },
              },
              [
                n("circle", {
                  ref: "circle",
                  attrs: {
                    cx: "37",
                    cy: "37",
                    r: "36.5",
                    fill: "none",
                    stroke: "#FFFFFF",
                    "stroke-miterlimit": "10",
                  },
                }),
              ]
            ),
            this._v(" "),
            n("span", { staticClass: "c-CircleLoader-label t-text--xs" }, [
              this._v(this._s(this.progress)),
            ]),
          ]);
        };
      m._withStripped = !0;
      var v = {
          name: "CircleLoader",
          props: {
            play: { type: Boolean, default: !1 },
            loaderEnded: { type: Function, default: () => {} },
          },
          data: () => ({ pourcent: 0, resCount: 0, loadCount: 0 }),
          watch: { play: "onPlay", strokeDashoffset: "onStrokeChange" },
          computed: {
            progress() {
              return Math.round(100 * this.pourcent);
            },
            strokeDashoffset() {
              return 230 - 230 * this.pourcent;
            },
          },
          methods: {
            watchResource(t) {
              let n = [];
              t.collectAllLoadables(n),
                (this.resCount = n.length),
                (this.loadCount = 0),
                n.map((t) => {
                  t.then(this.onResourceLoaded);
                });
            },
            onResourceLoaded(t) {
              (this.loadCount += 1),
                this.play &&
                  ((this.pourcent = this.loadCount / this.resCount),
                  this.loadCount == this.resCount && this.loaderEnded());
            },
            onStrokeChange() {
              this.$refs.circle.style.strokeDashoffset = this.strokeDashoffset;
            },
            onPlay() {
              this.play &&
                this.loadCount == this.resCount &&
                l.a.to(this, {
                  duration: 0.6,
                  pourcent: 1,
                  ease: "none",
                  onComplete: () => {
                    this.loaderEnded();
                  },
                });
            },
          },
        },
        f = (e(300), e(5)),
        b = Object(f.a)(v, m, [], !1, null, null, null);
      b.options.__file = "src/components/circle-loader/circle-loader.vue";
      var x = b.exports,
        y = e(31),
        I = function () {
          var t = this,
            n = t.$createElement,
            e = t._self._c || n;
          return e(
            "div",
            {
              staticClass: "c-VortexTilt",
              class: { "is-vortex-active": t.active, "is-drag": t.dragStart },
              on: {
                mousedown: t.onDragStart,
                "&touchstart": function (n) {
                  return t.onDragStart(n);
                },
                mousemove: t.onDrag,
                touchmove: t.onDrag,
                mouseup: t.onDragEnd,
                "&touchend": function (n) {
                  return t.onDragEnd(n);
                },
                "&touchleave": function (n) {
                  return t.onDragEnd(n);
                },
                mouseleave: t.onDragEnd,
              },
            },
            [
              e(
                "cursor-trigger",
                { attrs: { active: t.active, name: "drag" } },
                [
                  e("canvas", { ref: "canvas" }),
                  t._v(" "),
                  e(
                    "div",
                    { staticClass: "c-VortexTilt-ui" },
                    [
                      e("div", { staticClass: "c-VortexTilt-ui-content" }, [
                        e(
                          "div",
                          { staticClass: "c-VortexTilt-legends" },
                          [
                            e("counter-increment", {
                              staticClass: "c-VortexTilt-legends-year",
                              attrs: { value: t.currentDecade },
                            }),
                            t._v(" "),
                            e(
                              "div",
                              {
                                ref: "legends",
                                staticClass: "c-VortexTilt-legends-desc",
                              },
                              [
                                e("p", {
                                  staticClass:
                                    "js-legend c-VortexTilt-legends-desc-item t-text--md",
                                  class: { "is-active": 0 === t.currentIndex },
                                  domProps: {
                                    innerHTML: t._s(
                                      t.t("el_content.decade_1982_text")
                                    ),
                                  },
                                }),
                                t._v(" "),
                                e("p", {
                                  staticClass:
                                    "js-legend c-VortexTilt-legends-desc-item t-text--md",
                                  class: { "is-active": 1 === t.currentIndex },
                                  domProps: {
                                    innerHTML: t._s(
                                      t.t("el_content.decade_1991_text")
                                    ),
                                  },
                                }),
                                t._v(" "),
                                e("p", {
                                  staticClass:
                                    "js-legend c-VortexTilt-legends-desc-item t-text--md",
                                  class: { "is-active": 2 === t.currentIndex },
                                  domProps: {
                                    innerHTML: t._s(
                                      t.t("el_content.decade_2009_text")
                                    ),
                                  },
                                }),
                                t._v(" "),
                                e("p", {
                                  staticClass:
                                    "js-legend c-VortexTilt-legends-desc-item t-text--md",
                                  class: { "is-active": 3 === t.currentIndex },
                                  domProps: {
                                    innerHTML: t._s(
                                      t.t("el_content.decade_2013_text")
                                    ),
                                  },
                                }),
                              ]
                            ),
                          ],
                          1
                        ),
                      ]),
                      t._v(" "),
                      e("slider-bullets", {
                        staticClass: "c-VortexTilt-bullets",
                        attrs: {
                          nbSlide: t.nbSlide,
                          currentIndex: t.currentIndex,
                          goToIndex: t.goToIndex,
                        },
                      }),
                    ],
                    1
                  ),
                ]
              ),
            ],
            1
          );
        };
      I._withStripped = !0;
      var w = e(289),
        _ = e(290),
        L = e(256),
        C = {
          name: "VortexTilt",
          components: {
            ObjectFit: y.a,
            CursorTrigger: w.a,
            SliderBullets: _.a,
            CounterIncrement: L.a,
          },
          props: {
            active: { type: Boolean, default: !1 },
            images: { type: Array, default: [] },
            nbSlide: { type: Number, default: 4 },
            onVortexEnd: { type: Function, default: () => {} },
            playSound: { type: Function, default: () => {} },
          },
          data: () => ({
            dragStart: !1,
            frame: 0,
            currentIndex: 0,
            currentDecade: 1982,
            posX: 0,
            posY: 0,
          }),
          watch: {
            active: "onActiveChange",
            frame: "onFrameChange",
            currentIndex: "onCurrentIndexChange",
            "$appdatas.store.screen.width": "resize",
            "$appdatas.store.screen.height": "resize",
          },
          mounted() {
            (this.x = 0),
              (this.startX = 0),
              (this.framerate = 30),
              (this.nbFrames = this.images.length - 1),
              (this.slice = Math.round(this.nbFrames / (this.nbSlide - 1))),
              (this.halfSlice = this.slice / 2),
              (this.decades = [1982, 1991, 2009, 2013]),
              (this.context = this.$refs.canvas.getContext("2d")),
              (this.frameWidth = this.images[0].width),
              (this.frameHeight = this.images[0].height),
              this.resize();
          },
          beforeDestroy() {
            clearTimeout(this.autoPlayTimer);
          },
          methods: {
            onCurrentIndexChange() {
              (this.currentDecade = this.decades[this.currentIndex]),
                (this.$appdatas.store.pageTracking =
                  "/decades-" + this.currentDecade);
            },
            onDragStart() {
              this.active &&
                !this.isEnd &&
                (clearTimeout(this.autoPlayTimer),
                clearInterval(this.frameInterval),
                (this.dragStart = !0),
                (this.pointerEvent =
                  "mousedown" !== event.type
                    ? event.touches[0] || event.changedTouches[0]
                    : event),
                (this.oldIndex = this.currentIndex),
                (this.oldFrame = this.frame),
                (this.startX = this.pointerEvent.clientX),
                this.$appdatas.sendEvent(
                  "navigation",
                  "swipe",
                  this.currentDecade
                ));
            },
            onDrag(t) {
              if (!this.dragStart) return;
              this.dragged ||
                g.a.isMobile ||
                ((this.dragged = !0),
                this.$eventHub.$emit("cursor:enter", "dragged")),
                (this.pointerEvent =
                  "mousemove" !== t.type
                    ? t.touches[0] || t.changedTouches[0]
                    : t),
                (this.x = this.pointerEvent.clientX - this.startX);
              let n =
                this.oldFrame -
                Math.floor(this.x / (this.dragDistance / this.nbFrames));
              n >= 0 && n < this.nbFrames && (this.frame = n);
            },
            onDragEnd(t) {
              
              if (this.dragStart) {
                if (
                  ((this.dragStart = !1),
                  g.a.isMobile ||
                    (this.$eventHub.$emit("cursor:leave", "dragged"),
                    (this.dragged = !1)),
                  this.currentIndex === this.oldIndex && this.x < -150)
                ) {
                  let t =
                    this.currentIndex + 1 >= this.nbSlide
                      ? this.currentIndex
                      : this.currentIndex + 1;
                  this.goToIndex(t);
                } else if (
                  this.currentIndex === this.oldIndex &&
                  this.x > 150
                ) {
                  let t =
                    this.currentIndex - 1 <= 0 ? 0 : this.currentIndex - 1;
                  this.goToIndex(t);
                } else this.goToIndex(this.currentIndex);
                this.currentIndex === this.oldIndex &&
                  this.currentIndex === this.nbSlide - 1 &&
                  this.x < -150 &&
                  (clearTimeout(this.autoPlayTimer),
                  (this.isEnd = !0),
                  this.onVortexEnd(t));
              }
            },
            goToIndex(t) {
              clearInterval(this.frameInterval);
              let n = t * this.slice;
              n >= this.nbFrames && (n = this.nbFrames - 1),
                (this.tween = { val: this.frame });
              let e = n - this.frame;
              this.frameInterval = setInterval(() => {
                if (
                  ((this.frame = this.frame + 1 * Math.sign(e)),
                  this.frame === n)
                )
                  return (
                    clearInterval(this.frameInterval),
                    void this.activeAutoPlay()
                  );
              }, 1e3 / this.framerate);
            },
            inRange: (t, n, e) => (t - n) * (t - e) <= 0,
            onFrameChange() {
              if (this.images[this.frame]) {
                this.context.clearRect(
                  0,
                  0,
                  this.$appdatas.store.screen.width,
                  this.$appdatas.store.screen.height
                ),
                  this.context.drawImage(
                    this.images[this.frame],
                    this.offsetX,
                    this.offsetY,
                    this.computedSize.width,
                    this.computedSize.height
                  );
                for (let t = 0; t < this.nbSlide; t++) {
                  let n = t * this.slice - this.halfSlice,
                    e = t * this.slice + this.halfSlice;
                  this.inRange(this.frame, n, e) &&
                    (this.currentIndex !== t &&
                      (t < this.currentIndex
                        ? this.playSound("decades_swipe_backward")
                        : this.playSound("decades_swipe_forward")),
                    (this.currentIndex = t));
                }
              }
            },
            resize() {
              (this.$refs.canvas.width = this.$appdatas.store.screen.width),
                (this.$refs.canvas.height = this.$appdatas.store.screen.height),
                (this.dragDistance =
                  this.$appdatas.store.screen.width < 768
                    ? 3 * this.$appdatas.store.screen.width
                    : 2 * this.$appdatas.store.screen.width),
                (this.computedSize = this.calculateAspectRatio(
                  this.frameWidth,
                  this.frameHeight,
                  this.$appdatas.store.screen.width,
                  this.$appdatas.store.screen.height,
                  !1
                )),
                (this.offsetX = Math.round(
                  0.5 *
                    (this.$appdatas.store.screen.width -
                      this.computedSize.width)
                )),
                (this.offsetY = Math.round(
                  0.5 *
                    (this.$appdatas.store.screen.height -
                      this.computedSize.height)
                )),
                this.onFrameChange(),
                this.setLegendsHeight();
            },
            calculateAspectRatio(t, n, e, i, s) {
              var a = [e / t, i / n];
              return {
                width:
                  t * (a = s ? Math.min(a[0], a[1]) : Math.max(a[0], a[1])),
                height: n * a,
              };
            },
            onActiveChange() {
              this.activeAutoPlay();
            },
            activeAutoPlay() {
              this.isEnd ||
                (this.autoPlayTimer = setTimeout(() => {
                  if (this.isEnd) return;
                  if (this.currentIndex + 1 >= this.nbSlide)
                    return (this.isEnd = !0), void this.onVortexEnd();
                  let t =
                    this.currentIndex + 1 >= this.nbSlide
                      ? this.currentIndex
                      : this.currentIndex + 1;
                  this.goToIndex(t);
                }, 2e3));
            },
            setLegendsHeight() {
              const t = this.$el.querySelectorAll(".js-legend"),
                n = [];
              let e = 0;
              for (; e < t.length; ) {
                const i = t[e];
                n.push(i.offsetHeight), e++;
              }
              const i = Math.max(...n);
              this.$refs.legends.style.height = i + "px";
            },
          },
        },
        $ = (e(302), Object(f.a)(C, I, [], !1, null, null, null));
      $.options.__file = "src/components/vortex-tilt/vortex-tilt.vue";
      var T = $.exports,
        O = e(106),
        E = function () {
          var t = this.$createElement,
            n = this._self._c || t;
          return n(
            "div",
            {
              staticClass: "c-VortexTilt c-Decades2020",
              class: { "is-vortex-active": this.active },
            },
            [
              n("div", { staticClass: "c-VortexTilt-ui" }, [
                n("div", { staticClass: "c-VortexTilt-ui-content" }, [
                  n(
                    "div",
                    { staticClass: "c-VortexTilt-legends" },
                    [
                      n("counter-increment", {
                        staticClass: "c-VortexTilt-legends-year",
                        attrs: {
                          value: this.active || this.shown ? 2020 : 2013,
                        },
                      }),
                      this._v(" "),
                      n("div", { staticClass: "c-VortexTilt-legends-desc" }, [
                        n("p", {
                          staticClass:
                            "js-legend c-VortexTilt-legends-desc-item t-text--md",
                          class: { "is-active": !0 },
                          domProps: {
                            innerHTML: this._s(
                              this.t("el_content.decade_2020_text")
                            ),
                          },
                        }),
                      ]),
                    ],
                    1
                  ),
                ]),
              ]),
            ]
          );
        };
      E._withStripped = !0;
      var z = {
          components: { CounterIncrement: L.a },
          data: () => ({ shown: !1, active: !1 }),
          methods: {
            show() {
              (this.active = !0), (this.shown = !0);
            },
            hide() {
              this.active = !1;
            },
          },
        },
        V = (e(304), Object(f.a)(z, E, [], !1, null, null, null));
      V.options.__file = "src/components/decades-2020/decades-2020.vue";
      var S = V.exports;
      e(9).a.directive("split-word", {
        bind: function (t, n) {
          let e = t.innerHTML.split(" ");
          (t.innerHTML = ""),
            e.forEach((e, i) => {
              let s = e.split(""),
                a = document.createElement("span");
              a.classList.add(n.value.word),
                s.forEach((t, e) => {
                  let i = document.createElement("span");
                  i.classList.add(n.value.letter),
                    (i.innerHTML = t),
                    a.appendChild(i);
                }),
                t.appendChild(a);
            });
        },
      });
      const M = Object(h.a)(d);
      var k = {
          _module: M,
          mixins: [M, c.a],
          components: {
            CircleLoader: x,
            ObjectFit: y.a,
            VortexTilt: T,
            LangSelector: O.a,
            Decades2020: S,
          },
          data: () => ({
            dragStart: !1,
            images: [],
            vortexActive: !1,
            isVideosReady: !1,
            isPageEnter: !1,
            isLandingOut: !1,
            playLoader: !1,
            isLoaded: !1,
            isLowPower: !1,
            isPlayBtn: !1,
            videoActive: 0,
            y: 0,
            suffix: "mobile",
            videoWidth: 374,
            videoHeight: 664,
            isLeave: !1,
          }),
          computed: {
            tagline() {
              return this.tAndReplaceYouthGenerating(
                "el_content.landing_tagline"
              );
            },
            isIos: () =>
              g.a.isIos ||
              ("MacIntel" === navigator.platform &&
                navigator.maxTouchPoints > 1),
            isDesktop: () =>
              g.a.isDesktop &&
              !(
                "MacIntel" === navigator.platform &&
                navigator.maxTouchPoints > 1
              ),
            isAndroid: () => g.a.isAndroid,
          },
          watch: { "$appdatas.store.soundMuted": "onSoundMutedChange" },
          created() {
            (this.suffix = window.innerWidth < 768 ? "mobile" : "desktop"),
              (this.videoWidth = "mobile" === this.suffix ? 374 : 1280),
              (this.videoHeight = "mobile" === this.suffix ? 664 : 720),
              (this._onLandingIntroCanPlay =
                this.onLandingIntroCanPlay.bind(this)),
              (this._onLandingLoopCanPlay =
                this.onLandingLoopCanPlay.bind(this)),
              (this._onLandingIntroEnded = this.onLandingIntroEnded.bind(this)),
              (this._onLandingLoopEnded = this.onLandingLoopEnded.bind(this)),
              (this._onLandingOutEnded = this.onLandingOutEnded.bind(this)),
              (this._onVortexOutEnded = this.onVortexOutEnded.bind(this)),
              (this._onVortexOutTimeUpdate =
                this.onVortexOutTimeUpdate.bind(this)),
              (this._onDrag = this.onDrag.bind(this)),
              (this._onDragEnd = this.onDragEnd.bind(this)),
              (this.oldY = 0);
          },
          mounted() {
            (this.$refs.landingOut.volume = 0.65),
              (this.$refs.vortexOut.volume = 0.65);
          },
          methods: {
            prepareLoading() {
              this.$refs.loader.watchResource(this.getModule().resources);
            },
            onLoaderEnded() {
              this.images = [];
              for (let t = 1; t < this.getModule().nbImages; t++)
                this.images.push(this.getResource("sprite-" + t));
              this.isLoaded = !0;
            },
            async enter() {
              return (
                (this.$appdatas.store.pageTracking = "/landing"),
                this.isIos
                  ? (this.$refs.landingIntro.addEventListener(
                      "loadedmetadata",
                      this._onLandingIntroCanPlay,
                      !1
                    ),
                    this.$refs.landingLoop.addEventListener(
                      "loadedmetadata",
                      this._onLandingLoopCanPlay,
                      !1
                    ))
                  : (this.$refs.landingIntro.addEventListener(
                      "canplay",
                      this._onLandingIntroCanPlay,
                      !1
                    ),
                    this.$refs.landingLoop.addEventListener(
                      "canplay",
                      this._onLandingLoopCanPlay,
                      !1
                    )),
                this.$refs.landingIntro.addEventListener(
                  "ended",
                  this._onLandingIntroEnded,
                  !1
                ),
                this.$refs.landingLoop.addEventListener(
                  "ended",
                  this._onLandingLoopEnded,
                  !1
                ),
                this.$refs.landingOut.addEventListener(
                  "ended",
                  this._onLandingOutEnded,
                  !1
                ),
                this.$refs.vortexOut.addEventListener(
                  "ended",
                  this._onVortexOutEnded,
                  !1
                ),
                this.$refs.vortexOut.addEventListener(
                  "timeupdate",
                  this._onVortexOutTimeUpdate,
                  !1
                ),
                window.addEventListener(u.a, this._onDrag, { passive: !0 }),
                window.addEventListener(u.b, this._onDragEnd, { passive: !0 }),
                (this.maxDrag = -this.$refs.line.offsetHeight - 37),
                this.$nextTick(() => {
                  (this.titleAnimEnd = !0), this.onVideosReady();
                }),
                new Promise((t) => {
                  this.enterResolve = t;
                })
              );
            },
            async leave() {
              this.isIos
                ? (this.$refs.landingIntro.removeEventListener(
                    "loadedmetadata",
                    this._onLandingIntroCanPlay,
                    !1
                  ),
                  this.$refs.landingLoop.removeEventListener(
                    "loadedmetadata",
                    this._onLandingLoopCanPlay,
                    !1
                  ))
                : (this.$refs.landingIntro.removeEventListener(
                    "canplay",
                    this._onLandingIntroCanPlay,
                    !1
                  ),
                  this.$refs.landingLoop.removeEventListener(
                    "canplay",
                    this._onLandingLoopCanPlay,
                    !1
                  )),
                this.$refs.landingIntro.removeEventListener(
                  "ended",
                  this._onLandingIntroEnded,
                  !1
                ),
                this.$refs.landingLoop.removeEventListener(
                  "ended",
                  this._onLandingLoopEnded,
                  !1
                ),
                this.$refs.landingOut.removeEventListener(
                  "ended",
                  this._onLandingOutEnded,
                  !1
                ),
                this.$refs.vortexOut.removeEventListener(
                  "ended",
                  this._onVortexOutEnded,
                  !1
                ),
                this.$refs.vortexOut.removeEventListener(
                  "timeupdate",
                  this._onVortexOutTimeUpdate,
                  !1
                ),
                window.removeEventListener(u.a, this._onDrag),
                window.removeEventListener(u.b, this._onDragEnd),
                this.isSkip
                  ? await l.b.to(this.$el, {
                      opacity: 0,
                      duration: 0.65,
                      ease: p.f.easeOut,
                    })
                  : ((this.isLeave = !0),
                    await l.b.to(this.$refs.skip, {
                      opacity: 0,
                      duration: 0.65,
                      ease: p.f.easeOut,
                    }));
            },
            onLandingIntroCanPlay() {
              this.landingIntroReady ||
                ((this.landingIntroReady = !0), this.onVideosReady());
            },
            onLandingLoopCanPlay() {
              this.landingLoopReady ||
                ((this.landingLoopReady = !0), this.onVideosReady());
            },
            onLandingIntroEnded() {
              this.$refs.landingLoop.play().then(() => {
                this.videoActive = 1;
              });
            },
            onLandingLoopEnded() {
              this.$refs.landingLoop.loop ||
                this.$refs.landingOut.play().then(() => {
                  (this.videoActive = 2),
                    this.getModule().playLandingOut(),
                    (this.$appdatas.store.pageTracking = "/vortex");
                });
            },
            onLandingOutEnded() {
              window.location.assign("/en-us/home.html")
            },
            onVortexOutEnded() {
              (this.$appdatas.store.showHubPreview = !0),
                setTimeout(() => {
                  this.$router.push({
                    name: "hub",
                    params: { lang: this.currentLocale },
                  });
                }, 40);
            },
            onVideosReady() {
              if (
                !this.isVideosReady &&
                this.landingIntroReady &&
                this.landingLoopReady &&
                this.titleAnimEnd
              ) {
                (this.isPageEnter = !0),
                  setTimeout(() => {
                    (this.isVideosReady = !0),
                      setTimeout(() => {
                        this.playLoader = !0;
                      }, 600);
                  }, 750),
                  this.enterResolve();
                this.$refs.landingIntro.play().catch(() => {
                  this.isLowPower = !0;
                });
              }
            },
            onDragStart(t) {
              this.isLoaded &&
                ((this.dragStart = !0),
                (this.pointerEvent =
                  "mousedown" !== t.type
                    ? t.touches[0] || t.changedTouches[0]
                    : t),
                (this.oldY = this.y),
                (this.startY = this.pointerEvent.clientY),
                this.$appdatas.sendEvent("click", "swipeup", ""),
                this.playSound("landing_swipe_up"),
                this.isLowPower &&
                  ((this.dragStart = !1),
                  (this.isLandingOut = !0),
                  (this.$refs.landingLoop.loop = !1),
                  this.$refs.landingOut.play().then(() => {
                    this.$refs.landingLoop.pause(),
                      this.$refs.landingIntro.pause(),
                      this.getModule().playLandingOut(),
                      (this.videoActive = 2),
                      (this.$appdatas.store.pageTracking = "/vortex");
                  }),
                  (this.tween = l.b.fromTo(
                    this.$refs.draggable,
                    { y: this.y },
                    {
                      y: this.maxDrag,
                      duration: 0.65,
                      ease: p.f.easeOut,
                      onUpdate: (t) => {
                        (this.y = l.b.getProperty(this.$refs.draggable, "y")),
                          (this.$refs.line.style.transform = `translateY(${this.y}px) translateZ(0)`),
                          (this.$refs.lineInner.style.transform = `translateY(${-this
                            .y}px) translateZ(0)`);
                      },
                    }
                  ))));
            },
            onDrag(t) {
              if (!this.dragStart || !this.isLoaded) return;
              this.tween && this.tween.kill(),
                (this.pointerEvent =
                  "mousemove" !== t.type
                    ? t.touches[0] || t.changedTouches[0]
                    : t);
              const n = this.oldY + (this.pointerEvent.clientY - this.startY);
              n <= 0 &&
                n >= this.maxDrag &&
                ((this.y = n),
                (this.$refs.line.style.transition = "none"),
                (this.$refs.lineInner.style.transition = "none"),
                (this.$refs.draggable.style.transform = `translateY(${n}px) translateZ(0)`),
                (this.$refs.line.style.transform = `translateY(${n}px) translateZ(0)`),
                (this.$refs.lineInner.style.transform = `translateY(${-n}px) translateZ(0)`));
            },
            onDragEnd(t) {
              document.querySelector(".background").addEventListener("click", ()=>{

                setTimeout(()=>{
 
                  document.querySelector(".btn-content").classList.add("btn-content_Visible")
                },500),
                setTimeout(()=>{
                  document.querySelector(".intro-img").style.display = "none"
                  document.querySelector(".background").classList.add("intro-opacity")
                }, 2000)
                this.$refs.landingOut.play().then(() => {
                  this.$refs.landingLoop.pause(),
                    this.$refs.landingIntro.pause(),
                    this.getModule().playLandingOut(),
                    (this.videoActive = 2),
                    (this.$appdatas.store.pageTracking = "/vortex");
                    return
                });
              }) 

              this.dragStart = !1;
              let n = this.y > -68 ? 0 : this.maxDrag;
              (this.tween = l.b.fromTo(
                this.$refs.draggable,
                { y: this.y },
                {
                  y: n,
                  duration: 0.65,
                  ease: p.f.easeOut,
                  onUpdate: (t) => {
                    (this.y = l.b.getProperty(this.$refs.draggable, "y")),
                      (this.$refs.line.style.transform = `translateY(${this.y}px) translateZ(0)`),
                      (this.$refs.lineInner.style.transform = `translateY(${-this
                        .y}px) translateZ(0)`);
                  },
                }
              )),
                n !== this.maxDrag ||
                  this.isLandingOut ||
                  ((this.isLandingOut = !0),
                  (this.$refs.landingLoop.loop = !1),
                  g.a.isSafari &&
                    this.$refs.landingOut.play().then(() => {
                      this.$refs.landingLoop.pause(),
                        this.$refs.landingIntro.pause(),
                        this.getModule().playLandingOut(),
                        (this.videoActive = 2),
                        (this.$appdatas.store.pageTracking = "/vortex");
                    }));
             
            },
            onVortexEnd(t) {
              (this.videoActive = 3),
                this.isLowPower
                  ? ((this.vortexActive = !1), (this.isPlayBtn = !0))
                  : this.$refs.vortexOut.play().then(() => {
                      (this.vortexActive = !1),
                        this.getModule().playVortexOut();
                    });
            },
            onPlayVortexOut() {
              (this.isPlayBtn = !1),
                this.$refs.vortexOut.play(),
                this.isLowPower && this.getModule().playVortexOut();
            },
            onVortexOutTimeUpdate() {
              this.$refs.vortexOut.currentTime > 2 &&
              this.$refs.vortexOut.currentTime < 6
                ? this.$refs.lastDecades.active || this.$refs.lastDecades.show()
                : this.$refs.lastDecades.active &&
                  (this.$refs.lastDecades.hide(),
                  this.$refs.vortexOut.removeEventListener(
                    "timeupdate",
                    this._onVortexOutTimeUpdate,
                    !1
                  ));
            },
            onSkip() {
              window.location.assign("/en-us/home.html")
            },
            playSound(t) {
              this.getModule().playSound(t);
            },
            onSoundMutedChange() {
              this.$appdatas.store.soundMuted
                ? ((this.$refs.landingOut.volume = 0),
                  (this.$refs.vortexOut.volume = 0))
                : ((this.$refs.landingOut.volume = 0.65),
                  (this.$refs.vortexOut.volume = 0.65));
            },
          },
        },
        D = (e(306), Object(f.a)(k, i, [], !1, null, null, null));
      D.options.__file = "src/modules/intro/Intro.vue";
      n.default = D.exports;
    },
  },
]);
