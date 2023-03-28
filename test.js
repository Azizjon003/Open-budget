(window.webpackJsonp = window.webpackJsonp || []).push([
  [22],
  Array(165).concat([
    function (t, n, e) {
      "use strict";
      function i() {
        var t = [
          "3255kYZLaw",
          "length",
          "join",
          "getItem",
          "162984rPjSeA",
          "push",
          "1212PLGOra",
          "4829670BNPXvM",
          "120456eIJKkP",
          "2966220LFYHxd",
          "4893030IlJDsl",
          "replace",
          "7OGQZES",
          "captchaKey",
          "2186PHbTMq",
          "351GPiwHK",
        ];
        return (i = function () {
          return t;
        })();
      }
      function a(t, n) {
        var e = i();
        return (a = function (t, n) {
          return e[(t -= 362)];
        })(t, n);
      }
      function o() {
        var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 12;
        return r(
          s(-3) * t,
          s(2, 19) * t,
          s(10, 5) * t,
          s(10, 4) * t,
          s(10, 220)
        );
      }
      e.d(n, "a", function () {
        return o;
      }),
        (function (t, n) {
          for (var e = a, i = t(); ; )
            try {
              if (
                284150 ===
                -parseInt(e(371)) / 1 +
                  (-parseInt(e(365)) / 2) * (-parseInt(e(366)) / 3) +
                  (parseInt(e(373)) / 4) * (-parseInt(e(367)) / 5) +
                  (-parseInt(e(376)) / 6) * (parseInt(e(363)) / 7) +
                  -parseInt(e(375)) / 8 +
                  parseInt(e(374)) / 9 +
                  parseInt(e(377)) / 10
              )
                break;
              i.push(i.shift());
            } catch (t) {
              i.push(i.shift());
            }
        })(i),
        (n.b = function (t) {
          return (function (t) {
            for (var n = a, e = [], i = t[n(368)] - 1; i >= 0; i--)
              e[n(372)](t[i]);
            return (
              (o = e),
              (r = btoa(o[a(369)](""))),
              (s = a),
              localStorage[s(370)]("c")[s(362)](r, "")
            );
            var o, r, s;
          })(t[a(364)]);
        });
      var r = function (t, n, e, i, a) {
          return btoa("s" + t + "e" + n + "k" + e + "r" + i + "e" + a + "t");
        },
        s = function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 10,
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 5;
          return l(Math.random() * (t - n) + n);
        },
        l = function (t) {
          return parseInt(t);
        };
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, n, e) {
      "use strict";
      var i = e(12),
        a = (e(45), e(40)),
        o = e.n(a),
        r = e(159),
        s = e.n(r);
      n.a = function (t, n) {
        var e = t.$axios,
          a = (t.redirect, t.store),
          r = t.router,
          l = e.create({
            baseURL: "https://openbudget.uz/api/v1",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          });
        (l.defaults.httpsAgent = new s.a.Agent({ rejectUnauthorized: !1 })),
          l.onRequest(function (t) {
            var n = localStorage ? localStorage.getItem("token") : "";
            return n && l.setHeader("Authorization", n), t;
          }),
          l.onError(
            (function () {
              var t = Object(i.a)(
                regeneratorRuntime.mark(function t(n) {
                  var e, i, s;
                  return regeneratorRuntime.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            406 ===
                              (i = parseInt(
                                n.response.data &&
                                  (null === (e = n.response.data) ||
                                  void 0 === e
                                    ? void 0
                                    : e.code)
                              )) &&
                              alert(
                                "Сиз бугунги савол қолдириш имкониятидан фойдаланиб бўлгансиз!"
                              ),
                            401 === i &&
                              ((s = localStorage.getItem("refresh"))
                                ? o.a
                                    .post(
                                      "https://openbudget.uz/api/v1/refresh-token",
                                      { refresh_token: s }
                                    )
                                    .then(function (t) {
                                      var n, e, i;
                                      localStorage.setItem(
                                        "token",
                                        null === (n = t.data) || void 0 === n
                                          ? void 0
                                          : n.access_token
                                      ),
                                        localStorage.setItem(
                                          "refresh",
                                          null === (e = t.data) || void 0 === e
                                            ? void 0
                                            : e.refresh_token
                                        ),
                                        localStorage.setItem(
                                          "exists",
                                          null === (i = t.data) || void 0 === i
                                            ? void 0
                                            : i.exists
                                        ),
                                        a.dispatch("me/getUserInfo"),
                                        a.dispatch(
                                          "initiative/getUserInitiatives"
                                        );
                                    })
                                    .catch(function (t) {
                                      a.dispatch("authantication/logout"),
                                        r.push({ path: "/" });
                                    })
                                : (a.dispatch("authantication/logout"),
                                  r.push({ path: "/" }))),
                            t.abrupt("return", n)
                          );
                        case 4:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function (n) {
                return t.apply(this, arguments);
              };
            })()
          ),
          e.onRequest(function (t) {
            var n,
              i = localStorage
                ? null === (n = localStorage) || void 0 === n
                  ? void 0
                  : n.getItem("token")
                : "";
            return e.setHeader("Authorization", i ? "".concat(i) : ""), t;
          }),
          e.onResponse(function (t) {
            return t;
          }),
          e.onError(function (t) {
            if (401 === parseInt(t.response && t.response.status)) {
              var n = localStorage.getItem("refresh");
              n
                ? e
                    .post("https://openbudget.uz/api/v1/refresh-token", {
                      refresh_token: n,
                    })
                    .then(function (n) {
                      var e = n.data,
                        i = e.access_token,
                        o = e.refresh_token,
                        r = e.exists;
                      return (
                        a.commit("setItem", { name: "token", value: i }),
                        a.commit("setItem", { name: "refresh", value: o }),
                        a.commit("setItem", { name: "exists", value: r }),
                        l(t.response.config)
                      );
                    })
                    .catch(function (t) {
                      a.dispatch("authantication/logout"),
                        r.push({ path: "/" });
                    })
                : (a.dispatch("authantication/logout"), r.push({ path: "/" }));
            }
            return t;
          }),
          n("oq_api", l);
      };
    },
    function (t, n, e) {
      "use strict";
      var i = e(40),
        a = e.n(i),
        o = e(159),
        r = e.n(o);
      n.a = function (t, n) {
        var e = t.$axios,
          i = (t.redirect, t.store),
          o = t.i18n,
          s = t.router,
          l = e.create({
            baseURL: "https://openbudget.uz/api/v2",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              hl: {
                en: "en",
                uz: "uz_cyr",
                oz: "uz_lat",
                kp: "uz_cyr",
                ru: "ru",
              }[null == o ? void 0 : o.locale],
            },
          });
        (l.defaults.httpsAgent = new r.a.Agent({ rejectUnauthorized: !1 })),
          l.onRequest(function (t) {
            var n = localStorage ? localStorage.getItem("token") : "";
            return n && l.setHeader("Authorization", n), t;
          }),
          e.onResponse(function (t) {
            return t;
          }),
          e.onError(function (t) {
            var n = parseInt(t.response && t.response.code);
            if (
              (406 === n &&
                alert(
                  "Сиз бугунги савол қолдириш имкониятидан фойдаланиб бўлгансиз!"
                ),
              401 === n)
            ) {
              var e = localStorage.getItem("refresh");
              e
                ? a.a
                    .post("https://openbudget.uz/api/v1/refresh-token", {
                      refresh_token: e,
                    })
                    .then(function (t) {
                      var n, e, a;
                      localStorage.setItem(
                        "token",
                        null === (n = t.data) || void 0 === n
                          ? void 0
                          : n.access_token
                      ),
                        localStorage.setItem(
                          "refresh",
                          null === (e = t.data) || void 0 === e
                            ? void 0
                            : e.refresh_token
                        ),
                        localStorage.setItem(
                          "exists",
                          null === (a = t.data) || void 0 === a
                            ? void 0
                            : a.exists
                        ),
                        i.dispatch("me/getUserInfo"),
                        i.dispatch("initiative/getUserInitiatives");
                    })
                    .catch(function (t) {
                      i.dispatch("authantication/logout"),
                        s.push({ path: "/" });
                    })
                : (i.dispatch("authantication/logout"), s.push({ path: "/" }));
            }
            return t;
          }),
          n("mf_api", l);
      };
    },
    function (t, n, e) {
      "use strict";
      var i = e(320),
        a = e.n(i);
      n.a = function (t, n) {
        t.app.AOS = new a.a.init();
      };
    },
    function (t, n, e) {
      "use strict";
      var i = e(9),
        a = e(321);
      i.default.use(a.a);
    },
    function (t, n) {},
    function (t, n, e) {
      "use strict";
      e(13);
      n.a = function (t, n) {
        t.app;
        n("imageProxy", function (t, n) {
          return "https://iiv.uz/imageproxy/".concat(n, "x/").concat(t);
        });
      };
    },
    function (t, n, e) {
      "use strict";
      e(1), e(40);
      n.a = function (t) {
        var n = this,
          e = t.$axios,
          i = t.redirect;
        e.interceptors.response.use(
          function (t) {
            return t;
          },
          function (t) {
            var a = t.config;
            return 401 !== t.response.status || a._retry
              ? Promise.reject(t)
              : ((a._retry = !0),
                n.$oq_api
                  .post("/refresh_token", localStorage.getItem("refresh"))
                  .then(function (t) {
                    var n = t.data;
                    if (n.success)
                      return (a.headers.Authorization = n.token), e(a);
                    i("/login");
                  }));
          }
        );
      };
    },
    function (t, n, e) {
      "use strict";
      var i = {
        install: function (t) {
          t.prototype.$bus = new t();
        },
      };
      e(9).default.use(i);
    },
    function (t, n, e) {
      "use strict";
      var i = e(9),
        a = e(127),
        o = e.n(a),
        r = e(322),
        s = e.n(r),
        l = e(323);
      e.n(l)()(o.a), i.default.use(s.a, { tagName: "charts" });
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, n, e) {
      var i = e(529);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      (0, e(37).default)("787c5898", i, !0, { sourceMap: !1 });
    },
    function (t, n, e) {
      var i = e(531);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      (0, e(37).default)("0dc50c47", i, !0, { sourceMap: !1 });
    },
    function (t, n, e) {
      var i = e(534);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      (0, e(37).default)("051eefee", i, !0, { sourceMap: !1 });
    },
    function (t, n, e) {
      var i = e(536);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      (0, e(37).default)("2a5674b1", i, !0, { sourceMap: !1 });
    },
    function (t, n, e) {
      var i = e(539);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      (0, e(37).default)("3ce88261", i, !0, { sourceMap: !1 });
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, n, e) {
      var i = e(559);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      (0, e(37).default)("ee7e9126", i, !0, { sourceMap: !1 });
    },
    function (t, n, e) {
      var i = e(561);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      (0, e(37).default)("0e00d59a", i, !0, { sourceMap: !1 });
    },
    function (t, n, e) {
      t.exports = e.p + "img/view.49fc709.svg";
    },
    function (t, n, e) {
      var i = e(563);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      (0, e(37).default)("450b1b0d", i, !0, { sourceMap: !1 });
    },
    function (t, n, e) {
      var i = e(565);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      (0, e(37).default)("d1c0f0c6", i, !0, { sourceMap: !1 });
    },
    function (t, n, e) {
      var i = e(568);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      (0, e(37).default)("15398794", i, !0, { sourceMap: !1 });
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, n, e) {
      "use strict";
      e.r(n);
      var i = {
          data: function () {
            return {};
          },
          mounted: function () {
            var t = {
              refresh: localStorage.getItem("refresh"),
              user_id: localStorage.getItem("user_id"),
              token: localStorage.getItem("token"),
            };
            this.$store.dispatch("authantication/checkAllItems", t);
          },
        },
        a = (e(528), e(15)),
        o = Object(a.a)(
          i,
          function () {
            var t = this._self._c;
            return t(
              "header",
              { staticClass: "header" },
              [t("HeaderTop"), this._v(" "), t("HeaderNav")],
              1
            );
          },
          [],
          !1,
          null,
          "7ce013ed",
          null
        );
      n.default = o.exports;
      installComponents(o, {
        HeaderTop: e(635).default,
        HeaderNav: e(646).default,
        Header: e(311).default,
      });
    },
    function (t, n, e) {
      "use strict";
      e.r(n);
      var i = {
          data: function () {
            return {
              footerInfoData: [
                {
                  title: "Электронная почта",
                  type: "mailto:",
                  items: ["info@openbudget.uz"],
                },
                {
                  title: "Адрес",
                  type: "#",
                  items: [" 100017 г.Ташкент ул. Истиқлол, дом 29"],
                },
                { title: "Факс", type: "tel:", items: ["(998 71) 239-11-60"] },
                {
                  title: "Телефон доверия",
                  type: "tel:",
                  items: ["(998 71) 239-13-79"],
                },
              ],
            };
          },
          computed: {
            footerInfo: function () {
              return [
                {
                  title: this.$t("email"),
                  type: "mailto:",
                  items: ["info@openbudget.uz"],
                },
                {
                  title: this.$t("address"),
                  type: "#",
                  items: [this.$t("footerAddress")],
                },
                {
                  title: this.$t("helpline"),
                  type: "tel:",
                  items: ["(998 71) 239-13-79"],
                },
              ];
            },
          },
        },
        a = e(15),
        o = Object(a.a)(
          i,
          function () {
            var t = this,
              n = t._self._c;
            return n(
              "footer",
              { staticClass: "footer" },
              [
                n("b-container", [
                  n(
                    "div",
                    { staticClass: "footer_info" },
                    t._l(t.footerInfo, function (t) {
                      return n("FooterInfoItem", {
                        key: t.title,
                        attrs: { item: t },
                      });
                    }),
                    1
                  ),
                  t._v(" "),
                  n(
                    "div",
                    { staticClass: "footer_main_main" },
                    [n("FooterMain")],
                    1
                  ),
                  t._v(" "),
                  n(
                    "div",
                    { staticClass: "footer_copy_main" },
                    [n("FooterCopy")],
                    1
                  ),
                ]),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      n.default = o.exports;
      installComponents(o, {
        FooterInfoItem: e(643).default,
        FooterMain: e(644).default,
        FooterCopy: e(645).default,
        Footer: e(312).default,
      });
    },
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, n, e) {
      "use strict";
      n.a = {
        lang: {
          andijan: "Andijon viloyati",
          bukhara: "Buxoro viloyati",
          jizzakh: "Jizzax viloyati",
          kashkadarya: "Qashqadaryo viloyati",
          navoi: "Navoi viloyati",
          namangan: "Namangan viloyati",
          samarkand: "Samarkand viloyati",
          sirdarya: "Sirdarya viloyati",
          surkhandarya: "Surxandaryo viloyati",
          tashkent_city: "Toshkent shahri",
          tashkent_region: "Toshkent viloyati",
          fergana: "Fargona viloyati",
          khorezm: "Xorazm viloyati",
          karakalpakstan: "Qoraqalpogiston",
        },
        debt: "Qarzdorlik",
        transferToFund: "Jamgarmaga utkazilgan",
        repairRoads: "Ichki yullarni taʼmirlash",
        improvingKindergartenConditions:
          "Maktabgacha taʼlim muassasalari xolatini yaxshilash",
        improvingSchoolConditions:
          "Umumtaʼlim maktablarnini taʼmirlash va jixozlash",
        waterSupply: "Ichimlik suvi taʼminoti",
        healthCare: "Soglikni saklash muassasala",
        improvingLightSystem: "Yoritish tizimini yaxshilash",
        others: "Boshkalar",
        voteCount: "Ovozlar soni",
        declined: "Rad etilgan",
        loading: "Yuklanmoqda",
        isAuth: "Iltimos ro'yxatdan o'ting yoki tizimga kiring!",
        fooCopy:
          "Iqtisodiyot va Moliya vazirligi Axborot Texnologiyalari Markazi",
        viewStatistics: "Statistikani koʼrish",
        numberOfNeighborhood: "Mahalla soni",
        winningNeighborhoods: "Golib bolgan mahallalar",
        winningProjects: "Golib loyihalar soni",
        winningAmountProjects: "Golib loyihalar summasi",
        highestVoteCount: "Eng yuqori ovoz soni",
        lowestVoteCount: "Eng pas ovoz soni",
        totalAllocated: "Jami ajratilgan",
        next: "Keyingisi",
        prev: "Oldingisi",
        projectStatisticsTab1: "Loyxalar soni",
        projectStatisticsTab2: "Golib loyxalar soxalar kesimida",
        projectStatisticsTab3:
          "Fukaroalartashabbusi jamgarmasiga mablaglar yunaltirilishi (mlrd. sum)",
        projectStatisticsTab4: "Ovozlar soni / Golib loyixalar soni",
        tableIndex: "T/R",
        date: "Sana",
        empty: "Ma'lumot mavjud emas!",
        initTitle1: "Tashabbusli budjet",
        initTitle2: "Mening yo'lim",
        search: "Izlash",
        profile: "Profil",
        initiat: "Tashabbuslar ro'yxati",
        editInit: "Tahrirlash",
        alloc_budget: "Ajratilgan byudjet",
        login: "Kirish",
        initDirection: "Loyiha  yoʻnalishi",
        imgText:
          "Hurmatli tashabbuskor, tashabbus qo‘shish jarayonida kamida ikki va undan ko‘p rasmlarni yuklashni so‘rab qolamiz, xajmi 15 Mb dan oshmagan JPG, JPEG, PNG formatlardagi rasmlarni kiriting.",
        homeHeaderTitle: "DAVLAT BUDJETINING PARAMETRLARI",
        homeHeaderSliderIncome: "Daromad",
        homeHeaderSliderIncomes: "Daromadlar",
        homeHeaderSliderDeficit: "Defitsit",
        homeHeaderSliderProficit: "Profisit",
        homeHeaderSliderCosts: "Xarajatlar",
        mlrd: "mlrd. so‘m",
        homeHeaderMenuPortal: "Portal",
        homeHeaderMenuPortalAnswer: "Savol javob",
        homeHeaderMenuPortalHow: "Asosiy tushunchalar",
        homeHeaderMenuPortalContact: "Kontaktlar",
        homeHeaderMenuPortalAbout: "Biz haqimizda",
        homeHeaderMenuPortalUseful: "Foydali ma'lumotlar",
        homeHeaderMenuPortalNews: "Yangiliklar",
        homeHeaderMenuBudget: "Budjet tizimi",
        homeHeaderMenuBudgetMinistry: "Indikatorlar",
        homeHeaderMenuBudgetLocal: "Mahalliy budjet",
        homeHeaderMenuBudgetState: "Davlat budjeti parametrlari",
        homeHeaderMenuBudgetStateDebt: "Davlat qarzi",
        homeHeaderMenuBudgetSpecialFund: "Davlat maqsadli jamg'armalari",
        homeHeaderMenuBudgetAdditional: "Qo'shimcha manbaalar",
        homeHeaderMenuBudgetTerritorial: "Hududiy moliya organlari",
        homeHeaderMenuBudgetFinance: "Moliyaviy nazorat",
        homeHeaderMenuUzbekistan: "O'zbekiston dunyoda",
        homeHeaderMenuUzbekistanRating: "Reyting",
        homeHeaderMenuUzbekistanAssessment:
          "Xalqaro moliya institutlari tomonidan baholash",
        homeHeaderMenuFeedback: "Byudjet ijrosi ma'lumotlari",
        homeHeaderMenuFeedbackDiscuss:
          "Budjetlar ijrosi va loyihalarini muhokama qilish",
        homeHeaderMenuFeedbackProactive: "Tashabbusli budjetlashtirish",
        homeHeaderMenuFeedbackConclusion: "Tashqi audit xulosasi",
        homeHeaderMenuFeedbackImproving: "Budjet jarayonini takomillashtirish",
        homeHeaderMenuFeedbackFacts: "Budjetni buzish faktlari",
        homeHeaderMenuFeedbackPolls: "So'rovnomalar",
        homeHeaderMenuInitiative: "Tashabbusli budjet",
        homeHeaderMenuInitiativeBudget:
          "Tashabbusli budjetning bajarilishi to'g'risida hisobotlar",
        homeHeaderMenuInitiativeExternal: "Tashqi audit hisoboti",
        homeHeaderMenuInitiativeLegislation: "Budjet qonunchiligi",
        homeHeaderMenuInitiativeCitizen: "Fuqarolar uchun budjet",
        homeHeaderMenuInitiativeMessage: "Budjet xabari",
        homeHeaderMenuInitiativeActivity: "Faoliyat haqida ma'lumot",
        homeHeaderMenuInitiativePart: "Ishtirok etgan budjet natijalari",
        homeSliderText:
          "O'zbekiston Respublikasining \"O'zbekiston Respublikasining 2021 yilgi davlat budjeti to'g'risida\" gi 657-sonli qonuniga binoan",
        gosBudget: "Davlat budjeti",
        gosBudgetTwo: "Davlat xaridlari",
        information: "Ma'lumot ",
        informations: "Ma'lumotlar",
        ogosDolge: "davlat qarz haqida",
        budgetAndOther: "Fuqarolar uchun budjet va boshqa nashrlar",
        order: "Davlat qarzi",
        initiative: "Tashabbus",
        budget: "budjet",
        budgetB: "Jami jamgʼarmada shakllangan mablagʼ",
        details: "Daromadlar ijrosi tafsilotlari",
        parametersOfState: "Davlat byudjeti daromadlari va xarajatlari ijrosi",
        incomeParams: "Daromad parametrlari",
        costParams: "Xarajat parametrlari",
        income: "Daromad",
        cost: "Xarajat",
        titleNumbers: "Tashabbusli budjet ko'rsatkichlari",
        numberOfUsers: "Foydalanuvchilar soni",
        numberOfInitiatives: "Tashabbuslar soni",
        approvedInitiatives: "Tasdiqlangan tashabbuslar",
        granted_amount: "Tasdiqlangan mablag",
        rejectedInitiatives: "Rad etilgan tashabbuslar",
        initiativesPending: "Tashabbuslar ko'rib chiqilmoqda",
        inProgressContent: "Ushbu sahifa jarayonda",
        stateBudget: "Davlat budjeti",
        republicanBudget: "Respublika budjeti",
        mainParams: "Mahalliy budjetlarning asosiy parametrlari",
        transfers: "Transferlar",
        territory: "Hudud",
        budgetOrganizations: "Budjet tashkilotlari",
        population: "Aholi",
        budgetRecipients: "Budjet mablag'larini oluvchilar",
        uzbInRankings: "O'zbekiston xalqaro reytinglarda",
        entrepreneurship: "Tadbirkorlik",
        innovationAndTechnology: "Innovatsiya va texnologiya",
        competitiveness: "Raqobatbardoshlik",
        businessLawIndices: "Biznes huquqi ko'rsatkichlari",
        logisticsEfficiencyIndex: "Logistika samaradorligi ko'rsatkichi",
        globalInnovationIndex: "Xalqaro innovatsiyalar indeksi",
        email: "Elektron pochta",
        address: "Manzil",
        fax: "Faks",
        helpline: "Ishonch telefoni",
        phone: "Telefon",
        phoneNumber: "Telefon raqami",
        portal: 'O\'zbekiston Respublikasining "Ochiq budjet" portali',
        allRightReserved: "Barcha huquqlar himoyalangan",
        siteDevelopment: "Sayt yaratuvchisi: ",
        usefulLinks: "Foydali havolalar",
        websiteOfPresident: "O'zbekiston Respublikasi Prezidentining veb-sayti",
        singleInteractivePublic: "Yagona interaktiv davlat xizmatlari portali",
        stateUnitary: "Elektron Internet-kim oshdi savdolari markazi DUK",
        ministryOfInvestment:
          "O'zbekiston Respublikasi Investitsiyalar va tashqi savdo vazirligi",
        mln: "million",
        km: "km",
        assessmentAndRegulation:
          "Ko'chmas mulk bilan bog'liq faoliyatni baholash va tartibga solish - davbaho.uz",
        loginToCabinet: "Kabinetga kirish",
        password: "SMS kod",
        enter: "Kirish",
        getCode: "SMS kod olish",
        registration: "Ro'yxatdan o'tish",
        forgotPassword: "Parolni unutdingizmi?",
        main: "Asosiy",
        name: "Ism",
        surname: "Familiya",
        dateOfBirth: "Tug'ilgan sana",
        gender: "Jinsi",
        profession: "Kasb",
        region: "Viloyat/Hudud",
        district: "Tuman / shahar",
        whatYouKnow: "Loyiha to'g'risida qanday eshitdingiz?",
        repeatPassword: "Parolni qayta kiriting",
        repeatPasswordTitle: "Kalit so'zni qayta kiriting",
        iAmAgree: "Quyidagi barcha talablarga roziman",
        publicOffer: "Ommaviy taklif",
        searchByInitiatives: "Tashabbuslar bo'yicha qidirish",
        selectYear: "Yilni tanlang",
        selectRegion: "Hududlarni tanlang",
        selectDistrict: "Hududni tanlang",
        selectStatus: "Statusni tanlang",
        registered: "Ro'yxatga olindi",
        denied: "Rad etildi",
        passed: "Tasdiqlandi",
        all: "Hammasi",
        initiatives: "Tashabbuslar",
        objectCatalog: "Ob'ekt katalogiga",
        costOf: "Amalga oshirish qiymati",
        vote: "Ovoz berish",
        totalNumberOfVotes: "Ovozlarning umumiy soni",
        som: "so'm",
        homeRating: {
          indexOfDemocracy: "Jahon mamlakatlari demokratiyasi indeksi",
          economicFreedom: "Iqtisodiy erkinlik indeksi",
          takingIntoAccount: "Aholini fikrini inobatga olish va hisobdorlik",
          corruptionTicking: "Korrupsiyani tiyib turish",
          businessConduct: "Biznes yuritish indeksi",
          humanPerfection: "Inson kamoloti indeksi",
          pressIndex: "Matbuot erkinligi indeksi",
          corruptionAcceptance: "Korrupsiyani qabul qilish indeksi",
          eGovernment: "Elektron hukumatni rivojlantirish reytingi",
        },
        home: { moreDetails: "Batafsil" },
        homeCharts: {
          directTaxes: "Bevosita soliqlar",
          indirectTaxes: "Bilvosita soliqlar",
          resursFees: "Resurs to'lovlari va <br> mol-mulk solig'i",
          otherIncome: "Boshqa daromadlar",
        },
        homeChartsTwo: {
          socialCosts: "Ijtimoiy harajatlar",
          economicCosts: "Iqtisodiy harajatlar",
          financingInvestment: "Investitsiya harajatlarini moliyalashtirish",
          costOfMaintaining:
            "Davlat boshqaruvi organlarini saqlash harajatlari",
          reserveFunds: "Zaxira jamg'armalari",
          otherCosts: "Boshqa harajatlar",
        },
        quarter: "chorak",
        infoNotFound: "Ma'lumot topilmadi",
        more: "Batafsil",
        transfert: "*transfertni hisobga olgan holda",
        publicBudgetTitle: "Fuqarolar uchun budget va boshqa axborot nashrlari",
        passwordRule: "Parol 8 belgidan kam bo'lmasligi kerak.",
        repeatPasswordRule:
          "Tasdiqlovchi parol kiritilgan parolga teng bo'lishi kerak.",
        note: "Eslatma: Ushbu axborot portali orqali oylik ish haqi to'g'risidagi ma'lumotlarni olish uchun UzASBO dasturiy majmuasidan ro'yhatdan o'tgan telefon raqamingizdan foydalanish tavsiya etiladi.",
        organizationsTerms: "Tashkilot shartnomalari",
        organization: "Tashkilotlar hisoboti",
        toRegion: "Hudud bo'yicha",
        regionNameTab: "Nomi",
        budgetOrganizationName: "Budget tashkilot soni",
        transfer: "Transfer",
        STIR: "STIR",
        accountNumber: "Hisob raqam",
        nameOrganization: "Tashkilot nomi",
        planOfIncome: "Daromad va xarajat rejalari",
        localName: "Mahalliy budget",
        stage: "bosqich",
        acceptanceOfApp: "Ro'yxatga olindi",
        moderation: "Ko'rib chiqish",
        votingStage: "Ovoz berish",
        salaryInfo: "Ish haqi ma'lumotlari",
        stateBudgetTitle4:
          "2022-yilning I choragi davomida davlat buyurtmachilari tomonidan amalga oshirilgan xaridlar yuzasidan ma'lumot",
        stateBudgetTitle1:
          "2021-yilning I choragi davomida davlat buyurtmachilari tomonidan amalga oshirilgan xaridlar yuzasidan ma'lumot",
        stateBudgetTitle2: "2020-yil uchun Davlat xaridlari haqida ma'lumot",
        stateBudgetTitle3: "2020-yil 9 oylik Davlat xaridlari haqida ma'lumot",
        register: "Ro'yhatdan o'tish",
        enterCabinet: "Kabinetga kirish",
        incomesViewTitle: "Davlat budjeti daromadlari",
        perYear: "yil ijrosi",
        outcomes2: "Davlat budjeti xarajatlari",
        sidebarTitle1: "Davlat budjeti daromadlari",
        sidebarTitle2: "Davlat budjeti xarajatlari",
        analizeIncome: "Daromadlar tahlili",
        analizeIncome2: "Xarajatlari tahlili",
        marqueeText:
          "Diqqat! Axborot portali vaqtinchalik test rejimida ishlamoqda.",
        features1: "Davlat budjeti  <br> daromadlari",
        features2: "Davlat budjeti <br> xarajatlari",
        features3: "Davlat xaridlari",
        features4: "Fuqarolar uchun budjet va boshqa nashrlar",
        features5: "Davlat qarzi",
        features6: "Tashabbusli <br> budjet",
        summaAll: "“Tashabbusli budjet”ga ajratilgan mablag’lar",
        blnsum: "mlrd. so'm",
        useful1: "Yagona interaktiv davlat xizmatlari portali",
        useful2: "O'zbekiston Respublikasi Prezidenti veb-sayti",
        useful3: "'Elektron onlayn-auksionlarni tashkil etish markazi' DUKE",
        useful4:
          "O'zbekiston Respublikasi Iqtisodiyot va Moliya vazirligining rasmiy veb-sayti",
        useful5: "Davlat xaridlari axborot portali",
        useful6: "'O'zbekiston xalqaro reytinglarda' yagona portali",
        debtTitle: "Davlat tashqi va ichki qarzi dinamikasi",
        budgetSystem: "Davlat xaridlari tog'risida ma'lumot",
        publications: "Nashrlar",
        publications4:
          "2022-yilning I choragi davomida davlat buyurtmachilari tomonidan amalga oshirilgan xaridlar yuzasidan ma'lumot",
        publications1:
          "2021-yilning I choragi davomida davlat buyurtmachilari tomonidan amalga oshirilgan xaridlar yuzasidan ma'lumot",
        publications2: "2020-yil uchun Davlat xaridlari to'g'risida ma'lumot",
        publications3: "2020-yil 9 oylik Davlat xaridlari to'g'risida ma'lumot",
        portal2: "Portal",
        homeHeaderMenuPortalHow2: "Ko'p beriladigan savolar",
        poIncomes: "Daromadlar",
        poCosts: "Xarajatlar",
        video: "Video",
        videoAll: "Barcha videolar",
        downloadFile: "Faylni yuklab olish",
        videos1: "Ochiq budjet portalining yangi talqini",
        videos2: "Vladimir Vagin tashabbusli budjet to'g'risida",
        videos3:
          "O'zbekistonda tashabbusli byudjetlashtirish mexanizmini rivojlantirish istiqbollari xalqaro seminar",
        boards: "Tashabbuslar doskasi",
        day: "kun",
        specialViewFon: "Ko'rinish",
        specialViewSize: "Shrift o'lchami",
        specialViewFontSize: "ga kattalashtirish",
        underConstruction: "Sahifa tayyorlanmoqda",
        year: "yil",
        salaryDetails: "Ish haqi tafsilotlari",
        accrued: "Hisoblangan",
        sustainedAmount: "Barqaror miqdori",
        paid: "To'langan",
        accepted: "Qabul qilingan",
        allocatedInitiativeBudget:
          "Ajratilgan tashabbusli jarayoni uchun ajratilgan mablag'lar",
        addressResidence: "Yashash manzili",
        registerDate: "Ro'yxatga olingan sana",
        edit: "Tahrirlash",
        initiator: "Tashabbuskor",
        logout: "Chiqish",
        add: "Qo'shish",
        addInitiative: "Tashabbus qo'shish",
        titleInitiative: "Sarlavha",
        aboutInitiative: "Tashabbus haqida",
        aboutInitiativePlaceholder:
          "Tashabbus tavsifini kiriting. Masalan, Do‘stlik ko‘chasining 1500 metriga asfalt koplamasini yotqizish. O‘quvchilarning maktabga kelish va ketish uchun piyodalar yo‘lakchasini shakllantirish.",
        maxCosts: "1.2 mlrd.so'm gacha",
        maxCostsInfo: "Budjet 1.2 milliarddan oshmasligi kerak.",
        imageUpload: "Rasm yuklash",
        noInitiatives: "Hech qanday tashabbus yo'q",
        save: "Saqlash",
        confirmCodeMessage: "SMS xabardagi kodni kiriting",
        code: "Kod",
        excitedNumber: "Ushbu telefon raqami allaqachon ro'yxatdan o'tgan",
        incorrect: "Telefon raqami yoki sms kod noto'g'ri",
        newPassword: "Yangi parol",
        enterPassword: "Parolni kiriting",
        password8: "Parol 8 ta belgidan oshmasligi kerak.",
        smsError: "SMS kod noto'g'ri",
        regionNotSelect: "Viloyat tanlanmagan",
        man: "Erkak",
        woman: "Ayol",
        countInitiative: "tashabbus",
        dedicatedBudget: "Ajratilgan <br/>mablag'",
        from: "dan",
        to: "gacha",
        active: "Faol",
        archive: "Arxiv",
        inactive: "Nofaol",
        photo: "Rasm",
        file: "Fayl",
        beginTitle: "Hurmatli fuqaro!",
        beginText:
          "Tashabbusli budjet jarayonida ishtirok eting hamda budjet mablag'larini sarflanishida o'z takliflaringizni bildiring!",
        beginText2:
          "\n    Tashabbusli budjet jarayoni uchun taklif qoldirish bosqichi o’z yakuniga yetganini va hozirda tuman/shahar ishchi guruhi tomonidan bildirilgan takliflar 12 avgustga qadar moderatsiyadan o’tkazish jarayoni amalga oshiriladi.\n    Moderatsiya jarayoni yakunlariga ko’ra 13 avgustdan 2 sentabrga qadar bildirilgan takliflarga ovoz berish jarayoni o’tkaziladi.\n    ",
        beginText3:
          "\n    Tashabbusli budjetlashtirish jarayonida fuqarolar tomonidan bildirilgan takliflar bo’yicha saralash bosqichi yakunlanganligini va jamoatchilik ovoziga qo’yilganligini ma’lum qilamiz.\n    Eslatib o’tamiz, so’nggi bosqich yakunigacha 20 kun qoldi.\n    Biz uchun Sizning ishtirokingiz muhim!\n    ",
        beginAddBtn: "Tashabbus qoldirish",
        beginCloseBtn: "Yopish",
        instructions: "Tashabbusli budjet bo'yicha  qo'llanma",
        reviewer: "Ko'rib chiquvchi",
        reason: "Sababi",
        moderationProtocols: "Moderatsiya natijalari",
        protocol: "Protokol",
        doYouWantVote: "Ovoz bermoqchimisiz",
        smsVoteConfirm: "SMS kodni tasdiqlang",
        smsVote: "Sms kod orqali ovoz berish",
        voteSuccessfully: "Ovozingiz muvaffaqiyatli qabul qilindi",
        confirmation: "Tasdiqlash",
        send: "Jo'natish",
        voteType1: "Ro'yxatdan o'tgan holda ovoz berish",
        voteType3: "Oflayn ovoz berish blankasini yuklab olish",
        voteType4:
          "Xurmatli fuqaro telefoningiz orqali  taklif ID raqamini NAN raqaimiga junatgan holda ovoz bering",
        initiativeSaveSuccessfully: "Tashabbus muvaffaqiyatli saqlandi",
        initiativeSaveUnSuccessfully: "Tashabbus saqlashda xato yuz berdi",
        pleaseFillAllRequiredFieldsInSubinitiativeItem:
          "Iltimos, yo'nalish va matnlarni kiriting",
        qullanma: "Ovoz berish uchun qo'llanma",
        mlnSum: "mln.so'm",
        sum: "so'm",
        votesCount: "Barcha berilgan ovozlar soni",
        votesCount2: "Ovozlar soni",
        smsTime: "SMS xabardagi kodni amal qilish vaqti",
        smsTimeClosed: "SMS xabardagi kodni amal qilish vaqti tugadi",
        winners: "G'oliblar",
        beginTextWin:
          "Tashabbusli budjetlashtirish jarayonida fuqarolar tomonidan bildirilgan takliflar boʼyicha saralash bosqichi yakunlandi",
        endProtocols: "Yakuniy natijalar",
        winner: "G'olib deb topildi",
        qarorBtn: "Qaror bilan tanishish",
        beginTextQaror:
          "Joriy yilning <strong>19-21 oktyabr kunlari</strong> Moliya vazirligining Oʼquv Markazi binosida Rossiya Federatsiyasi ekspertlari ishtirokida <strong>“Tashabbusli budjetlatirish”</strong> mavzusida malaka oshirish kursi oʼtkazilishi rejalashtirilgan.",
        LoadMore: "Yana ko'rish",
        budgetB1:
          "Oʼzbekiston Respublikasi Prezidentining 2021 yil 13 apreldagi PQ-5072-son qaroriga asosan",
        budgetB2:
          "Oʼzbekiston Respublikasi Prezidentining 2021 yil 22 sentyabrdagi PQ-5250-son qaroriga asosan",
        budgetB3:
          "Tuman (shahar) budjetininng qoʼshimcha mablagʼlari hisobidan",
        reportWinsTitle: "Taklifning moliyalashtirilishi",
        reportWinsOrg: "Tashkilot nomi",
        reportWinsInn: "INN",
        reportWinsCheck: "Hisobraqam",
        reportWinsAdreska: "Аsos xujjat",
        infoFinance: "Moliyalashtirish holati",
        allView: "Barchasini ko'rish",
        paginationTotal: "Jami",
        estimateDocs: "Loyiha smeta hujjatlari",
        deniedA: "Yangi tashabbus qo'shishga ruxsat berilmadi",
        myRoad: "Mening yo'lim",
        twoActiveBoards: "Faol tashabbuslar doskasi",
        back: "Orqaga",
        fast: "Tezkor",
        initiativeNone:
          'Siz "Tashabbusli budjet" jarayonidagi tashabbus qoldirish imkoniyatidan foydalangansiz yoki "Tashabbusli budjet" jarayonida hozir qabul bosqichi emas!',
        myroadNone:
          'Siz "Mening yo\'lim" jarayonidagi tashabbus qoldirish imkoniyatidan foydalangansiz yoki "Mening yo\'lim" jarayonida hozir qabul bosqichi emas!',
        footerAddress: " 100017 Tashkent shahar, Istiqlol ko'chasi, 29 uy",
        time: "Vaqti",
        votesShow: "Ovozlarni ko'rish",
        onlineVotes: "Online ovozlar",
        onlineVote: "Online ovoz",
        smsVotes: "SMS orqali",
        voteByTelegram: "Telegram orqali",
        voteBySms: "SMS orqali",
        voteByApp: "Ilova orqali",
        AllVote: "Barchasi",
        VotesType: "Ovoz turi",
        determinedWinners: "G'oliblar aniqlanmoqda ...",
        yearReports: "yil hisoboti",
        termsConditions: "Qoidalar va shartlar",
        reports: "Hisobotlar",
        parameters: "Parametrlar",
        remainingTime: "Қолдирилган вақти",
        onlineAppeal: "Onlayn murojaat",
        voteNotSuccessfully:
          "Сиз овоз бериш имкониятидан фойдаланиб бўлгансиз!",
        publicOversightTitle: "Жамоатчилик назорати",
        select: "Танланг",
        selectCategory: "Категорияни танланг",
        addQuestion: "Савол қолдириш",
        cancel: "Бекор қилиш",
        offers: "Таклифлар",
        complaints: "Шикоятлар",
        thanks: "Ташаккурнома",
        allNotifications: "Barcha bildirishnomalar",
        readAllNotifications: "Отметить все как прочитанное",
        initiatorThink: "Ташаббускор фикри",
        itemStatus: "Ҳолати",
        viewInitiative: "Ташаббусни кўриш",
        mapUzb: "Карта Узбекистана",
        indicatorName: "Кўрсаткич номи",
        summaSum: "Сумма (сўм)",
        scoreTableTitle1: "Таклифнинг амалга ошириш қиймати",
        scoreTableTitle2: "Ушбу таклифни молиялаштиришга ажратилган маблағ",
        scoreTableTitle3:
          "Ишларни амалга ошириш учун ташкилотга ўтказилган маблағ",
        scoreTableTitle4: "Хисобрақамдаги қолдиқ маблағлар",
        registeredContracts: "Рўйхатга олинган шартномалар",
        paymentOrders: "Тўлов топшириқномалари",
        contractsTitle1: "Наименование поставщика",
        contractsTitle2: "ИНН",
        contractsTitle3: "№ контракта",
        contractsTitle4: "Сумма контракта",
        contractsTitle5: "Детали контракта",
        contractsTitle6: "Дата регист.",
        transactionsTitle1: "Номер док.",
        transactionsTitle2: "Сумма",
        transactionsTitle3: "Детали платежа",
        transactionsTitle4: "Дата выпол.",
        transactionsTitle5: "Статьи",
        chronologyTitle: "Лойиҳани амалга ошириш хронологияси",
        chronologyType: "Лойиҳа тури",
        chronologyType1: "Қурилиш - таъмирлаш",
        chronologyType2: "Харид қилиш",
        chronologyType3: "ГУКС",
        chronologyType4: "Рад этилган лойиҳа",
        chronologyAdreskaStep: "Кенгаш қарори ва манзилли рўйхат",
        chronologyBudgetScoreStep: "Хисобрақам очиш ҳамда буюртмачи",
        chronologyMoneyTransferStep: "Маблағларни хисобрақамга ўтказиш",
        chronologyAnnounceProjectorStep: "Лойиҳачини аниқлаш учун эълон",
        chronologyAdDate: "Эълон берилган сана",
        chronologyAdLotNumber: "ЛОТ рақами",
        chronologySmetaProtocolStep: "Лойиҳа смета хужжатлари",
        chronologyAnnounceContractorStep:
          "Пудратчи корхонани аниқлаш бўйича эълон",
        chronologyExpertOpenionStep:
          "Энг яхши таклифларни танлаш бўйича харид комиссияси протокoли",
        chronologyEndAmount: "Лойиҳанинг якуний баҳоси",
        chronologyContractTransactionStep: "Шартномалар ва пул ўтказмалари",
        chronologyRejectStep: "Лойиха рад этилди",
        chronologyRejectReason: "Рад этилиш сабаби",
        amountOffered: "Таклиф қилинган маблағ",
        roadStreet: "Автомобиль йулининг тўлиқ манзили",
        roadCommonLength: "Йўлниниг умумий узунлиги (м)",
        roadCommonWidth: "Йўл пойининг умумий кенглиги (м)",
        roadTrafficPartWidth: "Қатнов қисмининг умумий эни (м)",
        roadCementLen: "Ц/Б (м)",
        roadAsphaltLen: "А/Б (м)",
        roadBreakstoneLen: "Шагал (м)",
        roadSoilLen: "Тупроқ (м)",
        roadRepairablePart: "Таъмир-талаб қисми (м)",
        roadYearRepaired: "Таъмирланган йили",
        roadBudget: "Таъмирлаш учун талаб этилади",
        quarterName: "МФЙ номи",
        programmInitBudget: "”Ташаббусли бюджет” дастури",
        programmMyRoad: "”Менинг йўлим” дастури",
        programmInitBudgetSumma: "«Ташаббусли бюджет»га ажратилган маблаглар",
        programmMyRoadSumma:
          "Ички йўлларни таъмирлаш учун ажратилган маблағлар жами",
        programmInitiativeCount: "Келиб тушган ташаббуслар сони",
        programmMyRoadCitizenAmount:
          "Фуқаролар фикри асосида йўналтирилган маблағ",
        programmAprovedInitiatives: "Тасдиқланган ташаббуслар",
        programmRejectedInitiatives: "Рад этилган ташаббуслар",
        programmWinnerInitiatives: "Ғолиб деб топилган лойиҳалар сони",
        programmVotesCount: "Барча берилган овозлар сони",
        viewAnswer: "Жавобни кўриш",
        noResponsed: "Жавоб берилмаган",
        administrator: "Администратор",
        categories: "Категориялар",
        petitioner: "Мурожаатчи",
        allQuestions: "Барча саволлар",
        myQuestions: "Менинг саволларим",
        byStatus: "Ҳолати бўйича",
        answered: "Жавоб берилган",
        underConsideration: "Кўриб чиқилаётган",
        allocatedMyRoadBudget: "Менинг йўлим лойихасида ажратилган маблағлар",
        allocatedMyRoadBudgetTableTitle:
          "Бюджетда йўлларни таъмири учун кўзда тутилган жами маблағ",
        noInitiativesFound: "Ташаббуслар топилмади",
        publicOversightConsidered: "кўриб чиқилган",
        publicOversightNotConsidered: "кўриб чиқилмаган",
        Classification: "Klassifikatsiya",
        InitiativeTable: "Tashabbus doskasi",
        ImageSize: "Rasm hajmi 5MB dan oshmasligi kerak!",
        publicOversightRed: "Qizil",
        publicOversightYellow: "Sariq",
        publicOversightGreen: "Yashil",
        filter: "фильтр",
        captchaText: "Rasmdagi matematik amalni hisoblang",
        captchaResult: "Natija",
        resendSms: "SMS kodni qayta yuborish",
        season: "Mavsum",
        boardYear: "Yil",
        fillRequiredField: "Илтимос,  мажбурий майдонни тўлдиринг. ",
        activeBoards: "Faol tashabbuslar doskasi",
        archiveBoards: "Arxiv tashabbuslar doskasi",
        wrongCaptcha: "Rasmdagi amal natijasi xato kiritilgan!",
        errorOperationPleaseRetry:
          "Xatolik sodir bo'ldi. Iltimos, qayta urinib ko'ring.",
        dearCitizens: "Hurmatli fuqarolar!",
        popupText:
          'Mamnuniyat bilan Tashabbusli budjet jarayonining <br/>2023-yil 1-mavsumi boshlanganligini ma\'lum qilamiz.<br/> Loyiha kiritish 6-fevraldan 25-fevralga qadar davom etadi <br/><a class="link" href="https://openbudget.uz">Ro\'yhatdan o\'tish</a><a class="link" href="https://openbudget.uz/ru/instructions">Loyiha kiritish</a>',
      };
    },
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, n, e) {
      "use strict";
      var i = {
          data: function () {
            return { specialType: "", specialImage: !0 };
          },
          mounted: function () {
            var t = this;
            this.$bus.$on("specialType", function (n) {
              t.specialType = n;
            }),
              this.$bus.$on("specialImage", function (n) {
                t.specialImage = n;
              });
          },
          beforeDestroy: function () {
            var t = this;
            this.$bus.$off("specialType", function () {
              return (t.specialType = null);
            }),
              this.$bus.$off("specialImage", function () {
                return (t.specialImage = null);
              });
          },
        },
        a = e(15),
        o = Object(a.a)(
          i,
          function () {
            var t = this,
              n = t._self._c;
            return n(
              "div",
              {
                staticClass: "wrapper",
                class: [{ specialNoImage: !t.specialImage }, t.specialType],
              },
              [n("Header"), t._v(" "), n("Nuxt"), t._v(" "), n("Footer")],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      n.a = o.exports;
      installComponents(o, { Header: e(311).default, Footer: e(312).default });
    },
    function (t, n, e) {
      "use strict";
      var i = {},
        a = (e(567), e(15)),
        o = Object(a.a)(
          i,
          function () {
            var t = this,
              n = t._self._c;
            return n("section", { staticClass: "error" }, [
              n("div", { staticClass: "error-block" }, [
                n("div", { staticClass: "error-image" }, [
                  t._v(
                    '\n      img v-lazy-load data-src="@/assets/images/404-i.svg" alt="" />\n    '
                  ),
                ]),
                t._v(" "),
                n(
                  "div",
                  { staticClass: "error-content" },
                  [
                    n("h2", [t._v("404")]),
                    t._v(" "),
                    n("p", [t._v("Саҳифа топилмади")]),
                    t._v(" "),
                    n(
                      "nuxt-link",
                      { attrs: { to: t.localePath({ path: "/" }) } },
                      [t._v("Бош саҳифага қайтиш")]
                    ),
                  ],
                  1
                ),
              ]),
            ]);
          },
          [],
          !1,
          null,
          "7db225b8",
          null
        );
      n.a = o.exports;
    },
    ,
    ,
    ,
    function (t, n, e) {
      "use strict";
      e.r(n);
      e(6), e(5), e(2), e(7), e(8);
      var i = e(0),
        a = (e(16), e(1), e(3), e(42), e(41), e(56)),
        o = (e(40), e(165));
      function r(t, n) {
        var e = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          n &&
            (i = i.filter(function (n) {
              return Object.getOwnPropertyDescriptor(t, n).enumerable;
            })),
            e.push.apply(e, i);
        }
        return e;
      }
      function s(t) {
        for (var n = 1; n < arguments.length; n++) {
          var e = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? r(Object(e), !0).forEach(function (n) {
                Object(i.a)(t, n, e[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : r(Object(e)).forEach(function (n) {
                Object.defineProperty(
                  t,
                  n,
                  Object.getOwnPropertyDescriptor(e, n)
                );
              });
        }
        return t;
      }
      var l = {
          props: {
            close: {
              type: Function,
              default: function () {
                return null;
              },
            },
            voting: {
              type: Boolean,
              default: function () {
                return !1;
              },
            },
          },
          data: function () {
            return {
              captchaResult: null,
              captchaImage: null,
              captchaKey: null,
              getCode: !1,
              phone: "",
              password: "",
              warning: !1,
              username: "",
              otp_key: "",
              pending: !1,
              stage: "phone",
              retryAfter: 0,
              retryAfterText: "",
              showAlert: !1,
              alertMsg: "",
            };
          },
          computed: {
            phoneFilled: function () {
              return this.phone && 19 == this.phone.length;
            },
          },
          methods: s(
            s(
              {
                getCaptchaImage: function () {
                  var t = this;
                  (this.captchaImage = null),
                    this.$mf_api
                      .get("/vote/captcha-2", {
                        headers: { "Access-Captcha": Object(o.a)() },
                      })
                      .then(function (n) {
                        var e = n.data;
                        localStorage.setItem("c", e.image),
                          (t.captchaKey = e.captchaKey),
                          (t.captchaImage = Object(o.b)(e)),
                          (t.captchaResult = null);
                      })
                      .catch(function (t) {});
                },
              },
              Object(a.d)("static", ["setIsPopupLoginStatus"])
            ),
            {},
            {
              formAction: function () {
                "phone" === this.stage ? this.login() : this.verify_otp();
              },
              login: function () {
                var t = this;
                this.pending = !0;
                var n = this.phone.split(""),
                  e = "";
                n
                  .map(function (t) {
                    return "+" === t ||
                      "-" === t ||
                      "(" === t ||
                      ")" === t ||
                      " " === t
                      ? ""
                      : t;
                  })
                  .forEach(function (t) {
                    e += t;
                  }),
                  (this.username = e),
                  this.$oq_api
                    .post("/login/send-otp", {
                      captcha_key: this.captchaKey,
                      captcha_result: parseInt(this.captchaResult, 10),
                      phone_number: e,
                    })
                    .then(function (n) {
                      (t.stage = "code"),
                        (t.otp_key = n.otp_key),
                        (t.retryAfter = 60),
                        t.startCount(),
                        (t.pending = !1),
                        (t.showAlert = !1),
                        (t.alertMsg = ""),
                        n &&
                          n.token &&
                          (t.close(),
                          t.voting
                            ? t.$router.go()
                            : t.$router.push(
                                t.localePath({ path: "/profile" })
                              ));
                    })
                    .catch(function (n) {
                      "404" == n.response.data.code &&
                        (t.$router.push("/registration"),
                        t.setIsPopupLoginStatus(!1)),
                        "wrong captcha" == n.response.data.message
                          ? ((t.showAlert = !0), (t.alertMsg = "wrongCaptcha"))
                          : ((t.showAlert = !0),
                            (t.alertMsg = "errorOperationPleaseRetry")),
                        (t.captchaResult = null),
                        t.getCaptchaImage(),
                        (t.pending = !1);
                    })
                    .finally(function () {
                      t.pending = !1;
                    });
              },
              resendSms: function () {
                (this.stage = "phone"),
                  this.getCaptchaImage(),
                  (this.captchaResult = null),
                  (this.otp_key = ""),
                  (this.showAlert = !1);
              },
              startCount: function () {
                var t = this;
                setTimeout(function () {
                  t.retryAfter > 0
                    ? ((t.retryAfter = t.retryAfter - 1),
                      (t.retryAfterText =
                        t.padWithZero(parseInt(t.retryAfter / 60, 10)) +
                        " : " +
                        t.padWithZero(parseInt(t.retryAfter % 60, 10))),
                      t.startCount())
                    : (t.retryAfterText = "");
                }, 1e3);
              },
              padWithZero: function (t) {
                return t.toString().length < 2 ? "0" + t : t;
              },
              verify_otp: function () {
                var t = this;
                this.$store
                  .dispatch("authantication/verifyOtp", {
                    phone_number: this.username,
                    otp_code: this.password,
                    otp_key: this.otp_key,
                  })
                  .then(function (n) {
                    (t.pending = !1),
                      n &&
                        n.token &&
                        (t.close(),
                        t.voting
                          ? t.$router.go()
                          : t.$router.push(t.localePath({ path: "/profile" })));
                  })
                  .catch(function (n) {
                    "wrong passcode" == n.response.data.message
                      ? ((t.showAlert = !0), (t.alertMsg = "smsError"))
                      : ((t.showAlert = !0),
                        (t.alertMsg = "errorOperationPleaseRetry")),
                      (t.pending = !1);
                  });
              },
            }
          ),
          mounted: function () {
            this.getCaptchaImage();
          },
        },
        f = (e(558), e(15)),
        p = Object(f.a)(
          l,
          function () {
            var t = this,
              n = t._self._c;
            return n("div", { staticClass: "popup" }, [
              n("div", { staticClass: "popup-main" }, [
                n("div", { staticClass: "popup-head popup-head__login" }, [
                  n("h2", { staticClass: "popup-head__title" }, [
                    t._v(t._s(t.$t("enterCabinet"))),
                  ]),
                  t._v(" "),
                  t.warning
                    ? n("h6", { staticStyle: { color: "red" } }, [
                        t._v(
                          "\n        " + t._s(t.$t("incorrect")) + "\n      "
                        ),
                      ])
                    : t._e(),
                ]),
                t._v(" "),
                n("div", { staticClass: "popup-body" }, [
                  n(
                    "form",
                    {
                      staticClass: "form",
                      attrs: { action: "" },
                      on: {
                        submit: function (n) {
                          return (
                            n.preventDefault(),
                            t.formAction.apply(null, arguments)
                          );
                        },
                        keyup: function (n) {
                          return !n.type.indexOf("key") &&
                            t._k(n.keyCode, "enter", 13, n.key, "Enter")
                            ? null
                            : (n.preventDefault(),
                              t.formAction.apply(null, arguments));
                        },
                      },
                    },
                    [
                      t.showAlert
                        ? n(
                            "b-alert",
                            { attrs: { show: "", variant: "danger" } },
                            [t._v(t._s(t.$t(t.alertMsg)))]
                          )
                        : t._e(),
                      t._v(" "),
                      n(
                        "b-form-group",
                        {
                          attrs: {
                            label: t.$t("phone") + ":",
                            "label-for": "phone",
                          },
                        },
                        [
                          n("b-form-input", {
                            directives: [
                              {
                                name: "mask",
                                rawName: "v-mask",
                                value: "+998 (##) ###-##-##",
                                expression: "'+998 (##) ###-##-##'",
                              },
                            ],
                            attrs: {
                              id: "phone",
                              placeholder: "+998(__) ___-__-__",
                              disabled: "phone" !== t.stage,
                            },
                            model: {
                              value: t.phone,
                              callback: function (n) {
                                t.phone = n;
                              },
                              expression: "phone",
                            },
                          }),
                        ],
                        1
                      ),
                      t._v(" "),
                      "phone" === t.stage
                        ? n(
                            "b-form-group",
                            {
                              attrs: {
                                label: t.$t("captchaText"),
                                "label-for": "captchaResult",
                              },
                            },
                            [
                              n(
                                "div",
                                { staticClass: "captcha-field" },
                                [
                                  n(
                                    "b-button",
                                    {
                                      attrs: {
                                        disabled: "phone" != t.stage,
                                        variant: "outline-secondary",
                                      },
                                      on: { click: t.getCaptchaImage },
                                    },
                                    [
                                      n("img", {
                                        directives: [
                                          {
                                            name: "lazy-load",
                                            rawName: "v-lazy-load",
                                          },
                                        ],
                                        attrs: { "data-src": e(335), alt: "" },
                                      }),
                                    ]
                                  ),
                                  t._v(" "),
                                  n("img", {
                                    directives: [
                                      {
                                        name: "lazy-load",
                                        rawName: "v-lazy-load",
                                      },
                                    ],
                                    staticStyle: { height: "45px" },
                                    attrs: {
                                      "data-src":
                                        "data:image/png;base64, ".concat(
                                          t.captchaImage
                                        ),
                                    },
                                  }),
                                  t._v(" "),
                                  n("b-form-input", {
                                    directives: [
                                      {
                                        name: "mask",
                                        rawName: "v-mask",
                                        value: "######",
                                        expression: "'######'",
                                      },
                                    ],
                                    attrs: {
                                      id: "captchaResult",
                                      placeholder: t.$t("captchaResult"),
                                      type: "text",
                                      disabled: "phone" != t.stage,
                                    },
                                    model: {
                                      value: t.captchaResult,
                                      callback: function (n) {
                                        t.captchaResult = n;
                                      },
                                      expression: "captchaResult",
                                    },
                                  }),
                                ],
                                1
                              ),
                            ]
                          )
                        : t._e(),
                      t._v(" "),
                      "code" === t.stage
                        ? n(
                            "b-form-group",
                            {
                              attrs: {
                                label: t.$t("password") + ":",
                                "label-for": "password",
                              },
                            },
                            [
                              n("b-form-input", {
                                directives: [
                                  {
                                    name: "mask",
                                    rawName: "v-mask",
                                    value: "######",
                                    expression: "'######'",
                                  },
                                ],
                                attrs: {
                                  id: "password",
                                  type: "text",
                                  size: "6",
                                },
                                model: {
                                  value: t.password,
                                  callback: function (n) {
                                    t.password = n;
                                  },
                                  expression: "password",
                                },
                              }),
                              t._v(" "),
                              n(
                                "b-button",
                                {
                                  attrs: {
                                    variant: "link",
                                    disabled: t.retryAfter > 0,
                                  },
                                  on: { click: t.resendSms },
                                },
                                [
                                  t._v(
                                    "\n            " +
                                      t._s(t.$t("resendSms")) +
                                      "\n            "
                                  ),
                                  n("span", [t._v(t._s(t.retryAfterText))]),
                                ]
                              ),
                            ],
                            1
                          )
                        : t._e(),
                      t._v(" "),
                      n(
                        "b-button-group",
                        [
                          "phone" === t.stage
                            ? n(
                                "b-button",
                                {
                                  attrs: {
                                    disabled:
                                      t.pending ||
                                      !t.phoneFilled ||
                                      !t.captchaResult,
                                  },
                                  on: {
                                    click: function (n) {
                                      return (
                                        n.preventDefault(),
                                        t.login.apply(null, arguments)
                                      );
                                    },
                                  },
                                },
                                [
                                  t.pending
                                    ? n("b-spinner", { attrs: { small: "" } })
                                    : [
                                        t._v(
                                          "\n              " +
                                            t._s(t.$t("login")) +
                                            "\n            "
                                        ),
                                      ],
                                ],
                                2
                              )
                            : t._e(),
                        ],
                        1
                      ),
                      t._v(" "),
                      "code" === t.stage
                        ? n(
                            "b-button-group",
                            [
                              n(
                                "b-button",
                                {
                                  attrs: {
                                    disabled:
                                      t.pending ||
                                      !t.phoneFilled ||
                                      6 !== t.password.length,
                                  },
                                  on: {
                                    click: function (n) {
                                      return (
                                        n.preventDefault(),
                                        t.verify_otp.apply(null, arguments)
                                      );
                                    },
                                  },
                                },
                                [
                                  t.pending
                                    ? n("b-spinner", { attrs: { small: "" } })
                                    : [t._v(" " + t._s(t.$t("enter")))],
                                ],
                                2
                              ),
                            ],
                            1
                          )
                        : t._e(),
                      t._v(" "),
                      n(
                        "div",
                        { staticClass: "form-urls" },
                        [
                          n(
                            "nuxt-link",
                            {
                              attrs: {
                                to: t.localePath({ path: "/registration" }),
                              },
                              nativeOn: {
                                click: function (n) {
                                  return t.close.apply(null, arguments);
                                },
                              },
                            },
                            [t._v(t._s(t.$t("register")) + "\n          ")]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ]),
                t._v(" "),
                n(
                  "span",
                  { staticClass: "popup-main__close", on: { click: t.close } },
                  [n("b-icon", { attrs: { icon: "x" } })],
                  1
                ),
              ]),
            ]);
          },
          [],
          !1,
          null,
          "71be4e33",
          null
        );
      n.default = p.exports;
    },
    function (t, n, e) {
      "use strict";
      e.r(n);
      var i = {
          props: {
            isPending: {
              type: Boolean,
              default: function () {
                return !1;
              },
            },
            warn: {
              type: Object,
              default: function () {
                return { text: "", status: !1 };
              },
            },
            close: {
              type: Function,
              default: function () {
                return null;
              },
            },
            clickFunction: {
              type: Function,
              default: function () {
                return null;
              },
            },
            isMessage: {
              type: Boolean,
              default: function () {
                return !1;
              },
            },
            numberNotFound: {
              type: Boolean,
              default: function () {
                return !1;
              },
            },
          },
          data: function () {
            return {
              selected: null,
              options: [
                { value: null, text: "Please select an option" },
                { value: "a", text: "This is First option" },
                { value: "b", text: "Selected Option" },
                {
                  value: { C: "3PO" },
                  text: "This is an option with object value",
                },
                { value: "d", text: "This one is disabled", disabled: !0 },
              ],
              phone: "",
              notFoundText: {
                ru: "Этот номер телефона не найден",
                uz: "Ушбу телефон рақами топилмади",
                en: "Number not found",
                kp: "Этот номер телефона не найден",
                oz: "Ushbu telefon raqami topilmadi",
              },
            };
          },
          methods: {},
        },
        a = e(15),
        o = Object(a.a)(
          i,
          function () {
            var t = this,
              n = t._self._c;
            return n("div", { staticClass: "popup" }, [
              n("div", { staticClass: "popup-main" }, [
                n("div", { staticClass: "popup-head popup-head__login" }, [
                  n("h2", { staticClass: "popup-head__title" }, [
                    t._v(t._s(t.$t("forgotPassword"))),
                  ]),
                  t._v(" "),
                  t.warn.status
                    ? n("h6", { staticStyle: { color: "red" } }, [
                        t._v("\n        " + t._s(t.warn.text) + "\n      "),
                      ])
                    : t._e(),
                ]),
                t._v(" "),
                n("div", { staticClass: "popup-body" }, [
                  n(
                    "form",
                    {
                      staticClass: "form",
                      attrs: { action: "" },
                      on: {
                        keyup: function (n) {
                          return !n.type.indexOf("key") &&
                            t._k(n.keyCode, "enter", 13, n.key, "Enter")
                            ? null
                            : t.clickFunction.apply(null, arguments);
                        },
                      },
                    },
                    [
                      n(
                        "b-form-group",
                        {
                          attrs: { label: t.$t("phone"), "label-for": "phone" },
                        },
                        [
                          n("b-form-input", {
                            directives: [
                              {
                                name: "mask",
                                rawName: "v-mask",
                                value: "+998 (##) ###-##-##",
                                expression: "'+998 (##) ###-##-##'",
                              },
                            ],
                            attrs: {
                              id: "phone",
                              placeholder: "+998(__) ___-__-__",
                              type: "text",
                            },
                            on: {
                              change: function (n) {
                                return t.$emit("change", t.phone);
                              },
                            },
                            model: {
                              value: t.phone,
                              callback: function (n) {
                                t.phone = n;
                              },
                              expression: "phone",
                            },
                          }),
                        ],
                        1
                      ),
                      t._v(" "),
                      t.numberNotFound
                        ? n(
                            "p",
                            {
                              staticStyle: {
                                color: "red",
                                "margin-bottom": "0",
                              },
                            },
                            [
                              t._v(
                                "\n          " +
                                  t._s(t.notFoundText[t.$i18n.locale]) +
                                  "\n        "
                              ),
                            ]
                          )
                        : t._e(),
                      t._v(" "),
                      n(
                        "b-button-group",
                        [
                          n(
                            "b-button",
                            {
                              attrs: { disabled: t.isPending },
                              on: { click: t.clickFunction },
                            },
                            [t._v(t._s(t.$t("enter")))]
                          ),
                        ],
                        1
                      ),
                      t._v(" "),
                      t.isMessage
                        ? t._e()
                        : n(
                            "div",
                            { staticClass: "form-urls" },
                            [
                              n(
                                "nuxt-link",
                                {
                                  attrs: { to: "/registration" },
                                  nativeOn: {
                                    click: function (n) {
                                      return t.close.apply(null, arguments);
                                    },
                                  },
                                },
                                [t._v(t._s(t.$t("register")))]
                              ),
                            ],
                            1
                          ),
                    ],
                    1
                  ),
                ]),
                t._v(" "),
                n(
                  "span",
                  { staticClass: "popup-main__close", on: { click: t.close } },
                  [n("b-icon", { attrs: { icon: "x" } })],
                  1
                ),
              ]),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        );
      n.default = o.exports;
    },
    function (t, n, e) {
      t.exports = e.p + "img/side.2b75a07.jpg";
    },
    ,
    function (t, n, e) {
      t.exports = e.p + "img/icon-refresh.0db0ddb.svg";
    },
    ,
    function (t, n, e) {
      "use strict";
      e.r(n);
      e(2), e(1), e(3), e(19);
      var i = {
          name: "UserInfo",
          props: {
            close: {
              type: Function,
              default: function () {
                return null;
              },
            },
          },
          data: function () {
            return {
              selected: null,
              options: [
                { value: 1, text: "January" },
                { value: 2, text: "February" },
                { value: 3, text: "March" },
                { value: 4, text: "April" },
                { value: 5, text: "May" },
                { value: 6, text: "June" },
                { value: 7, text: "July" },
                { value: 8, text: "August" },
                { value: 9, text: "September" },
                { value: 10, text: "October" },
                { value: 11, text: "Nowember" },
                { value: 12, text: "December" },
              ],
              yearSelected: null,
              yearOptions: [
                { value: 2022, text: "2022" },
                { value: 2021, text: "2021" },
                { value: 2020, text: "2020" },
                { value: 2019, text: "2019" },
                { value: 2018, text: "2018" },
                { value: 2017, text: "2017" },
                { value: 2016, text: "2016" },
                { value: 2015, text: "2015" },
              ],
              selectedOrganization: null,
              organizationOptions: [],
              response: [],
              allResponse: [],
              responseCount: [],
              responsePayed: [],
              responseTaxes: [],
              countAll: null,
              countTaxes: null,
              countPayed: null,
            };
          },
          mounted: function () {
            var t = this;
            this.$store
              .dispatch("me/getUserWorkHistoryInfo", {
                params: { Month: 5, Year: 2021 },
              })
              .then(function (n) {
                (4491 == n[0].OrganizationID || 2776 == n[0].OrganizationID) &&
                  t.organizationOptions.push({
                    text: n[0].Name,
                    value: n[0].OrganizationID,
                  }),
                  (4491 == n[1].OrganizationID ||
                    2776 == n[1].OrganizationID) &&
                    t.organizationOptions.push({
                      text: n[1].Name,
                      value: n[1].OrganizationID,
                    }),
                  (t.selectedOrganization = t.organizationOptions[0].value);
              });
          },
          watch: {
            selected: function (t) {
              var n = this;
              (this.countAll = null),
                (this.countTaxes = null),
                (this.countPayed = null),
                this.$store
                  .dispatch("me/getUserWorkHistoryInfo", {
                    params: { Month: t, Year: this.yearSelected },
                  })
                  .then(function (t) {
                    (n.allResponse = t),
                      (n.response =
                        (n.allResponse &&
                          n.allResponse.length &&
                          n.allResponse.filter(function (t) {
                            return t.OrganizationID == n.selectedOrganization;
                          })) ||
                        []),
                      (n.responseCount =
                        (n.response &&
                          n.response.length &&
                          n.response.filter(function (t) {
                            return 1 == t.CalculationTypeID;
                          })) ||
                        []),
                      n.responseCount.forEach(function (t) {
                        n.countAll += +t.Amount;
                      }),
                      (n.responseTaxes =
                        (n.response &&
                          n.response.length &&
                          n.response.filter(function (t) {
                            return 2 == t.CalculationTypeID;
                          })) ||
                        []),
                      n.responseTaxes.forEach(function (t) {
                        n.countTaxes += +t.Amount;
                      }),
                      (n.responsePayed =
                        (n.response &&
                          n.response.length &&
                          n.response.filter(function (t) {
                            return 4 == t.CalculationTypeID;
                          })) ||
                        []),
                      n.responsePayed.forEach(function (t) {
                        n.countPayed += +t.Amount;
                      });
                  });
            },
            yearSelected: function (t) {
              var n = this;
              (this.countAll = null),
                (this.countTaxes = null),
                (this.countPayed = null),
                this.$store
                  .dispatch("me/getUserWorkHistoryInfo", {
                    params: { Month: this.selected, Year: t },
                  })
                  .then(function (t) {
                    (n.allResponse = t),
                      (n.response =
                        (n.allResponse &&
                          n.allResponse.length &&
                          n.allResponse.filter(function (t) {
                            return t.OrganizationID == n.selectedOrganization;
                          })) ||
                        []),
                      (n.responseCount =
                        (n.response &&
                          n.response.length &&
                          n.response.filter(function (t) {
                            return 1 == t.CalculationTypeID;
                          })) ||
                        []),
                      n.responseCount.forEach(function (t) {
                        n.countAll += +t.Amount;
                      }),
                      (n.responseTaxes =
                        (n.response &&
                          n.response.length &&
                          n.response.filter(function (t) {
                            return 2 == t.CalculationTypeID;
                          })) ||
                        []),
                      n.responseTaxes.forEach(function (t) {
                        n.countTaxes += +t.Amount;
                      }),
                      (n.responsePayed =
                        (n.response &&
                          n.response.length &&
                          n.response.filter(function (t) {
                            return 4 == t.CalculationTypeID;
                          })) ||
                        []),
                      n.responsePayed.forEach(function (t) {
                        n.countPayed += +t.Amount;
                      });
                  });
            },
            selectedOrganization: function (t) {
              var n = this;
              (this.response =
                (this.allResponse &&
                  this.allResponse.length &&
                  this.allResponse.filter(function (n) {
                    return n.OrganizationID == t;
                  })) ||
                []),
                (this.responseCount =
                  (this.response &&
                    this.response.length &&
                    this.response.filter(function (t) {
                      return 1 == t.CalculationTypeID;
                    })) ||
                  []),
                this.responseCount.forEach(function (t) {
                  n.countAll += +t.Amount;
                }),
                (this.responseTaxes =
                  (this.response &&
                    this.response.length &&
                    this.response.filter(function (t) {
                      return 2 == t.CalculationTypeID;
                    })) ||
                  []),
                this.responseTaxes.forEach(function (t) {
                  n.countTaxes += +t.Amount;
                }),
                (this.responsePayed =
                  (this.response &&
                    this.response.length &&
                    this.response.filter(function (t) {
                      return 3 == t.CalculationTypeID;
                    })) ||
                  []),
                this.responsePayed.forEach(function (t) {
                  n.countPayed += +t.Amount;
                });
            },
          },
          methods: {
            downloadFile: function () {
              this.$store.dispatch("me/getSalaryExcel", {
                params: {
                  Month: this.selected || 4,
                  Year: this.yearSelected || 2021,
                },
              });
            },
          },
          filters: {
            filterSum: function (t) {
              var n = (t += "").split(".")[0].split("").reverse(),
                e = "";
              return (
                n.forEach(function (t, n) {
                  e += (n + 1) % 3 == 0 ? t + " " : t;
                }),
                e.split("").reverse().join("") +
                  (t.split(".")[1] ? "." + t.split(".")[1] : "")
              );
            },
          },
        },
        a = (e(535), e(15)),
        o = Object(a.a)(
          i,
          function () {
            var t = this,
              n = t._self._c;
            return n("div", { staticClass: "popup" }, [
              n("div", { staticClass: "popup-main popup-main--userinfo" }, [
                n(
                  "div",
                  { staticClass: "popup-head" },
                  [
                    n("h2", { staticClass: "popup-head__title" }, [
                      t._v(t._s(t.$t("salaryDetails"))),
                    ]),
                    t._v(" "),
                    n("b-form-select", {
                      staticClass: "title-params__select n1",
                      attrs: { options: t.yearOptions },
                      model: {
                        value: t.yearSelected,
                        callback: function (n) {
                          t.yearSelected = n;
                        },
                        expression: "yearSelected",
                      },
                    }),
                    t._v(" "),
                    n("b-form-select", {
                      staticClass: "title-params__select n2",
                      attrs: { options: t.options },
                      model: {
                        value: t.selected,
                        callback: function (n) {
                          t.selected = n;
                        },
                        expression: "selected",
                      },
                    }),
                    t._v(" "),
                    n("b-form-select", {
                      staticClass: "title-params__select n3",
                      attrs: { options: t.organizationOptions },
                      model: {
                        value: t.selectedOrganization,
                        callback: function (n) {
                          t.selectedOrganization = n;
                        },
                        expression: "selectedOrganization",
                      },
                    }),
                    t._v(" "),
                    n(
                      "b-button",
                      {
                        staticClass: "btn btn-info",
                        on: { click: t.downloadFile },
                      },
                      [
                        t._v(
                          "\n        " + t._s(t.$t("downloadFile")) + "\n      "
                        ),
                      ]
                    ),
                  ],
                  1
                ),
                t._v(" "),
                n("div", { staticClass: "popup-body height_popup" }, [
                  n(
                    "form",
                    { staticClass: "form", attrs: { action: "" } },
                    [
                      n(
                        "b-row",
                        { staticClass: "mb-4" },
                        [
                          n("b-col", { attrs: { md: "12" } }, [
                            n("div", { staticClass: "intable" }, [
                              n("table", [
                                n("thead", [
                                  n("tr", [
                                    n("th", { attrs: { width: "70%" } }, [
                                      t._v(
                                        t._s(t.$t("accrued")) +
                                          " (" +
                                          t._s(t.$t("som")) +
                                          ")"
                                      ),
                                    ]),
                                    t._v(" "),
                                    n("th", { attrs: { width: "30%" } }),
                                  ]),
                                ]),
                                t._v(" "),
                                n(
                                  "tbody",
                                  [
                                    t._l(t.responseCount, function (e, i) {
                                      return n("tr", { key: i }, [
                                        n("td", [
                                          t._v(
                                            "\n                      " +
                                              t._s(e.Name) +
                                              "\n                    "
                                          ),
                                        ]),
                                        t._v(" "),
                                        n("td", [
                                          t._v(
                                            t._s(t._f("filterSum")(e.Amount)) +
                                              " (" +
                                              t._s(t.$t("som")) +
                                              ")"
                                          ),
                                        ]),
                                      ]);
                                    }),
                                    t._v(" "),
                                    t.countAll
                                      ? n("tr", [
                                          n("td", [
                                            t._v(
                                              "\n                      " +
                                                t._s(t.$t("all")) +
                                                "\n                    "
                                            ),
                                          ]),
                                          t._v(" "),
                                          n("td", [
                                            t._v(
                                              t._s(
                                                t._f("filterSum")(t.countAll)
                                              ) +
                                                " (" +
                                                t._s(t.$t("som")) +
                                                ")"
                                            ),
                                          ]),
                                        ])
                                      : t._e(),
                                  ],
                                  2
                                ),
                              ]),
                            ]),
                          ]),
                        ],
                        1
                      ),
                      t._v(" "),
                      n(
                        "b-row",
                        { staticClass: "mb-4" },
                        [
                          n("b-col", { attrs: { md: "12" } }, [
                            n("div", { staticClass: "intable" }, [
                              n("table", [
                                n("thead", [
                                  n("tr", [
                                    n("th", { attrs: { width: "70%" } }, [
                                      t._v(t._s(t.$t("sustainedAmount"))),
                                    ]),
                                    t._v(" "),
                                    n("th", { attrs: { width: "30%" } }),
                                  ]),
                                ]),
                                t._v(" "),
                                n(
                                  "tbody",
                                  [
                                    t._l(t.responseTaxes, function (e, i) {
                                      return n("tr", { key: i }, [
                                        n("td", [
                                          t._v(
                                            "\n                      " +
                                              t._s(e.Name) +
                                              "\n                    "
                                          ),
                                        ]),
                                        t._v(" "),
                                        n("td", [
                                          t._v(
                                            t._s(t._f("filterSum")(e.Amount)) +
                                              " (" +
                                              t._s(t.$t("som")) +
                                              ")"
                                          ),
                                        ]),
                                      ]);
                                    }),
                                    t._v(" "),
                                    t.countTaxes
                                      ? n("tr", [
                                          n("td", [
                                            t._v(
                                              "\n                      " +
                                                t._s(t.$t("all")) +
                                                "\n                    "
                                            ),
                                          ]),
                                          t._v(" "),
                                          n("td", [
                                            t._v(
                                              t._s(
                                                t._f("filterSum")(t.countTaxes)
                                              ) +
                                                " (" +
                                                t._s(t.$t("som")) +
                                                ")"
                                            ),
                                          ]),
                                        ])
                                      : t._e(),
                                  ],
                                  2
                                ),
                              ]),
                            ]),
                          ]),
                        ],
                        1
                      ),
                      t._v(" "),
                      n(
                        "b-row",
                        { staticClass: "mb-4" },
                        [
                          n("b-col", { attrs: { md: "12" } }, [
                            n("div", { staticClass: "intable" }, [
                              n("table", [
                                n("thead", [
                                  n("tr", [
                                    n("th", { attrs: { width: "70%" } }, [
                                      t._v(
                                        t._s(t.$t("paid")) +
                                          " (" +
                                          t._s(t.$t("som")) +
                                          ")"
                                      ),
                                    ]),
                                    t._v(" "),
                                    n("th", { attrs: { width: "30%" } }),
                                  ]),
                                ]),
                                t._v(" "),
                                n(
                                  "tbody",
                                  [
                                    t._l(t.responsePayed, function (e, i) {
                                      return n("tr", { key: i }, [
                                        n("td", [
                                          t._v(
                                            "\n                      " +
                                              t._s(e.Name) +
                                              "\n                    "
                                          ),
                                        ]),
                                        t._v(" "),
                                        n("td", [
                                          t._v(
                                            t._s(t._f("filterSum")(e.Amount)) +
                                              " (" +
                                              t._s(t.$t("som")) +
                                              ")"
                                          ),
                                        ]),
                                      ]);
                                    }),
                                    t._v(" "),
                                    t.countPayed
                                      ? n("tr", [
                                          n("td", [
                                            t._v(
                                              "\n                      " +
                                                t._s(t.$t("all")) +
                                                "\n                    "
                                            ),
                                          ]),
                                          t._v(" "),
                                          n("td", [
                                            t._v(
                                              t._s(
                                                t._f("filterSum")(t.countPayed)
                                              ) +
                                                " (" +
                                                t._s(t.$t("som")) +
                                                ")"
                                            ),
                                          ]),
                                        ])
                                      : t._e(),
                                  ],
                                  2
                                ),
                              ]),
                            ]),
                          ]),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ]),
                t._v(" "),
                n(
                  "span",
                  { staticClass: "popup-main__close", on: { click: t.close } },
                  [n("b-icon", { attrs: { icon: "x" } })],
                  1
                ),
              ]),
            ]);
          },
          [],
          !1,
          null,
          "243ee7da",
          null
        );
      n.default = o.exports;
    },
    function (t, n, e) {
      "use strict";
      e.r(n);
      e(42), e(13);
      var i = {
          props: {
            warn: {
              type: Object,
              default: function () {
                return { text: "", status: !1 };
              },
            },
            close: {
              type: Function,
              default: function () {
                return null;
              },
            },
            clickFunction: {
              type: Function,
              default: function () {
                return null;
              },
            },
            title: {
              type: String,
              default: function () {
                return this.$t("confirmCodeMessage");
              },
            },
            isMessage: {
              type: Boolean,
              default: function () {
                return !1;
              },
            },
          },
          data: function () {
            return {
              selected: null,
              options: [
                { value: null, text: "Please select an option" },
                { value: "a", text: "This is First option" },
                { value: "b", text: "Selected Option" },
                {
                  value: { C: "3PO" },
                  text: "This is an option with object value",
                },
                { value: "d", text: "This one is disabled", disabled: !0 },
              ],
              phone: "",
              timer: 179,
              isRunning: !1,
            };
          },
          mounted: function () {
            var t = this;
            (this.isRunning = !0),
              setInterval(function () {
                t.timer > 0
                  ? t.timer--
                  : (clearInterval(t.timer), (t.isRunning = !1));
              }, 1e3);
          },
          methods: {},
          computed: {
            smsTimer: function () {
              if (this.timer > 0) {
                var t =
                    this.timer % 60 != 0
                      ? Math.ceil(this.timer / 60) - 1
                      : Math.ceil(this.timer / 60),
                  n = this.timer - 60 * t;
                return ""
                  .concat(t > 9 ? t : "0" + t, ":")
                  .concat(n > 9 ? n : "0" + n);
              }
              return "";
            },
          },
        },
        a = (e(560), e(15)),
        o = Object(a.a)(
          i,
          function () {
            var t = this,
              n = t._self._c;
            return n("div", { staticClass: "popup" }, [
              n("div", { staticClass: "popup-main" }, [
                n("div", { staticClass: "popup-head popup-head__login" }, [
                  n("h2", { staticClass: "popup-head__title" }, [
                    t._v(t._s(t.title)),
                  ]),
                  t._v(" "),
                  t.warn.status
                    ? n("h6", { staticStyle: { color: "red" } }, [
                        t._v("\n        " + t._s(t.warn.text) + "\n      "),
                      ])
                    : t._e(),
                ]),
                t._v(" "),
                n("div", { staticClass: "popup-body" }, [
                  n(
                    "form",
                    { staticClass: "form" },
                    [
                      n(
                        "b-form-group",
                        {
                          attrs: {
                            label: t.$t("code") + ":",
                            "label-for": "phone",
                          },
                        },
                        [
                          n("b-form-input", {
                            directives: [
                              {
                                name: "mask",
                                rawName: "v-mask",
                                value: "######",
                                expression: "'######'",
                              },
                            ],
                            attrs: { type: "text", id: "phone" },
                            on: {
                              change: function (n) {
                                return t.$emit("change", t.phone);
                              },
                            },
                            model: {
                              value: t.phone,
                              callback: function (n) {
                                t.phone = n;
                              },
                              expression: "phone",
                            },
                          }),
                        ],
                        1
                      ),
                      t._v(" "),
                      t.isRunning
                        ? n("span", { staticClass: "foot-text" }, [
                            t._v(t._s(t.$t("smsTime")) + ": "),
                            n(
                              "strong",
                              {
                                staticClass: "foot-red",
                                staticStyle: { "font-size": "17px" },
                              },
                              [t._v(t._s(t.smsTimer))]
                            ),
                          ])
                        : n("span", { staticClass: "foot-text foot-red" }, [
                            t._v(t._s(t.$t("smsTimeClosed"))),
                          ]),
                      t._v(" "),
                      n(
                        "b-button-group",
                        [
                          t.isRunning
                            ? n(
                                "b-button",
                                {
                                  on: {
                                    click: function (n) {
                                      return (
                                        n.preventDefault(),
                                        t.clickFunction.apply(null, arguments)
                                      );
                                    },
                                  },
                                },
                                [t._v(t._s(t.$t("confirmation")))]
                              )
                            : n(
                                "b-button",
                                {
                                  staticClass: "btn-close",
                                  on: { click: t.close },
                                },
                                [t._v(t._s(t.$t("beginCloseBtn")))]
                              ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ]),
                t._v(" "),
                t.isRunning
                  ? t._e()
                  : n(
                      "span",
                      {
                        staticClass: "popup-main__close",
                        on: { click: t.close },
                      },
                      [n("b-icon", { attrs: { icon: "x" } })],
                      1
                    ),
              ]),
            ]);
          },
          [],
          !1,
          null,
          "03d90b5f",
          null
        );
      n.default = o.exports;
    },
    function (t, n, e) {
      e(340), (t.exports = e(341));
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, n, e) {
      var i = e(389);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      (0, e(37).default)("80039a86", i, !0, { sourceMap: !1 });
    },
    function (t, n, e) {
      var i = e(36),
        a = e(189),
        o = e(390),
        r = e(391),
        s = e(392),
        l = e(393),
        f = e(394),
        p = e(395),
        c = e(396),
        d = e(397),
        u = e(398),
        h = e(399),
        m = e(400),
        C = e(401),
        b = e(402),
        g = e(403),
        _ = e(404),
        x = e(405),
        v = e(406),
        w = e(407),
        y = e(408),
        k = e(409),
        M = e(410),
        Z = e(411),
        z = e(412),
        I = e(413),
        S = e(414),
        H = e(415),
        j = e(416),
        O = e(417),
        L = e(418),
        B = e(419),
        A = e(420),
        P = e(421),
        q = e(422),
        T = e(423),
        V = e(424),
        $ = e(425),
        D = e(426),
        F = e(427),
        Q = e(428),
        R = e(429),
        N = e(430),
        E = e(431),
        U = e(432),
        Y = e(433),
        W = e(434),
        X = e(435),
        G = e(436),
        K = e(437),
        J = e(438),
        tt = e(439),
        nt = e(440),
        et = e(441),
        it = e(442),
        at = e(443),
        ot = e(444),
        rt = e(445),
        st = e(446),
        lt = e(447),
        ft = e(448),
        pt = e(449),
        ct = e(450),
        dt = e(451),
        ut = e(452),
        ht = e(453),
        mt = e(454),
        Ct = e(455),
        bt = e(456),
        gt = e(457),
        _t = e(458),
        xt = e(459),
        vt = e(460),
        wt = e(461),
        yt = e(462),
        kt = e(463),
        Mt = e(464),
        Zt = e(465),
        zt = e(466),
        It = e(467),
        St = e(468),
        Ht = e(469),
        jt = i(!1),
        Ot = a(o),
        Lt = a(o, { hash: "?#iefix" }),
        Bt = a(r),
        At = a(s),
        Pt = a(l),
        qt = a(f),
        Tt = a(f, { hash: "?#iefix" }),
        Vt = a(p),
        $t = a(c),
        Dt = a(d),
        Ft = a(u),
        Qt = a(u, { hash: "?#iefix" }),
        Rt = a(h),
        Nt = a(m),
        Et = a(C),
        Ut = a(b),
        Yt = a(b, { hash: "?#iefix" }),
        Wt = a(g),
        Xt = a(_),
        Gt = a(x),
        Kt = a(v),
        Jt = a(v, { hash: "?#iefix" }),
        tn = a(w),
        nn = a(y),
        en = a(k),
        an = a(M),
        on = a(M, { hash: "?#iefix" }),
        rn = a(Z),
        sn = a(z),
        ln = a(I),
        fn = a(S),
        pn = a(S, { hash: "?#iefix" }),
        cn = a(H),
        dn = a(j),
        un = a(O),
        hn = a(L),
        mn = a(L, { hash: "?#iefix" }),
        Cn = a(B),
        bn = a(A),
        gn = a(P),
        _n = a(q),
        xn = a(q, { hash: "?#iefix" }),
        vn = a(T),
        wn = a(V),
        yn = a($),
        kn = a(D),
        Mn = a(D, { hash: "?#iefix" }),
        Zn = a(F),
        zn = a(Q),
        In = a(R),
        Sn = a(N),
        Hn = a(N, { hash: "?#iefix" }),
        jn = a(E),
        On = a(U),
        Ln = a(Y),
        Bn = a(W),
        An = a(W, { hash: "?#iefix" }),
        Pn = a(X),
        qn = a(G),
        Tn = a(K),
        Vn = a(J),
        $n = a(J, { hash: "?#iefix" }),
        Dn = a(tt),
        Fn = a(nt),
        Qn = a(et),
        Rn = a(it),
        Nn = a(it, { hash: "?#iefix" }),
        En = a(at),
        Un = a(ot),
        Yn = a(rt),
        Wn = a(st),
        Xn = a(st, { hash: "?#iefix" }),
        Gn = a(lt),
        Kn = a(ft),
        Jn = a(pt),
        te = a(ct),
        ne = a(ct, { hash: "?#iefix" }),
        ee = a(dt),
        ie = a(ut),
        ae = a(ht),
        oe = a(mt),
        re = a(mt, { hash: "?#iefix" }),
        se = a(Ct),
        le = a(bt),
        fe = a(gt),
        pe = a(_t),
        ce = a(_t, { hash: "?#iefix" }),
        de = a(xt),
        ue = a(vt),
        he = a(wt),
        me = a(yt),
        Ce = a(yt, { hash: "?#iefix" }),
        be = a(kt),
        ge = a(Mt),
        _e = a(Zt),
        xe = a(zt),
        ve = a(zt, { hash: "?#iefix" }),
        we = a(It),
        ye = a(St),
        ke = a(Ht);
      jt.push([
        t.i,
        "@font-face {\n    font-family: 'Quarion';\n    src: url(" +
          Ot +
          ");\n    src: local('Quarion ExtraLight Italic'), local('Quarion-ExtraLightItalic'),\n        url(" +
          Lt +
          ") format('embedded-opentype'),\n        url(" +
          Bt +
          ") format('woff2'),\n        url(" +
          At +
          ") format('woff'),\n        url(" +
          Pt +
          ") format('truetype');\n    font-weight: 200;\n    font-style: italic;\n}\n\n@font-face {\n    font-family: 'Quarion';\n    src: url(" +
          qt +
          ");\n    src: local('Quarion Hairline Italic'), local('Quarion-HairlineItalic'),\n        url(" +
          Tt +
          ") format('embedded-opentype'),\n        url(" +
          Vt +
          ") format('woff2'),\n        url(" +
          $t +
          ") format('woff'),\n        url(" +
          Dt +
          ") format('truetype');\n    font-weight: normal;\n    font-style: italic;\n}\n\n@font-face {\n    font-family: 'Quarion';\n    src: url(" +
          Ft +
          ");\n    src: local('Quarion ExtraBold'), local('Quarion-ExtraBold'),\n        url(" +
          Qt +
          ") format('embedded-opentype'),\n        url(" +
          Rt +
          ") format('woff2'),\n        url(" +
          Nt +
          ") format('woff'),\n        url(" +
          Et +
          ") format('truetype');\n    font-weight: 800;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Quarion';\n    src: url(" +
          Ut +
          ");\n    src: local('Quarion Bold'), local('Quarion-Bold'),\n        url(" +
          Yt +
          ") format('embedded-opentype'),\n        url(" +
          Wt +
          ") format('woff2'),\n        url(" +
          Xt +
          ") format('woff'),\n        url(" +
          Gt +
          ") format('truetype');\n    font-weight: bold;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Quarion';\n    src: url(" +
          Kt +
          ");\n    src: local('Quarion Medium'), local('Quarion-Medium'),\n        url(" +
          Jt +
          ") format('embedded-opentype'),\n        url(" +
          tn +
          ") format('woff2'),\n        url(" +
          nn +
          ") format('woff'),\n        url(" +
          en +
          ") format('truetype');\n    font-weight: 500;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Quarion';\n    src: url(" +
          an +
          ");\n    src: local('Quarion Bold Italic'), local('Quarion-BoldItalic'),\n        url(" +
          on +
          ") format('embedded-opentype'),\n        url(" +
          rn +
          ") format('woff2'),\n        url(" +
          sn +
          ") format('woff'),\n        url(" +
          ln +
          ") format('truetype');\n    font-weight: bold;\n    font-style: italic;\n}\n\n@font-face {\n    font-family: 'Quarion';\n    src: url(" +
          fn +
          ");\n    src: local('Quarion ExtraLight'), local('Quarion-ExtraLight'),\n        url(" +
          pn +
          ") format('embedded-opentype'),\n        url(" +
          cn +
          ") format('woff2'),\n        url(" +
          dn +
          ") format('woff'),\n        url(" +
          un +
          ") format('truetype');\n    font-weight: 200;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Quarion';\n    src: url(" +
          hn +
          ");\n    src: local('Quarion Heavy'), local('Quarion-Heavy'),\n        url(" +
          mn +
          ") format('embedded-opentype'),\n        url(" +
          Cn +
          ") format('woff2'),\n        url(" +
          bn +
          ") format('woff'),\n        url(" +
          gn +
          ") format('truetype');\n    font-weight: 900;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Quarion';\n    src: url(" +
          _n +
          ");\n    src: local('Quarion SemiBold'), local('Quarion-SemiBold'),\n        url(" +
          xn +
          ") format('embedded-opentype'),\n        url(" +
          vn +
          ") format('woff2'),\n        url(" +
          wn +
          ") format('woff'),\n        url(" +
          yn +
          ") format('truetype');\n    font-weight: 600;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Quarion';\n    src: url(" +
          kn +
          ");\n    src: local('Quarion Hairline'), local('Quarion-Hairline'),\n        url(" +
          Mn +
          ") format('embedded-opentype'),\n        url(" +
          Zn +
          ") format('woff2'),\n        url(" +
          zn +
          ") format('woff'),\n        url(" +
          In +
          ") format('truetype');\n    font-weight: normal;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Quarion';\n    src: url(" +
          Sn +
          ");\n    src: local('Quarion Medium Italic'), local('Quarion-MediumItalic'),\n        url(" +
          Hn +
          ") format('embedded-opentype'),\n        url(" +
          jn +
          ") format('woff2'),\n        url(" +
          On +
          ") format('woff'),\n        url(" +
          Ln +
          ") format('truetype');\n    font-weight: 500;\n    font-style: italic;\n}\n\n@font-face {\n    font-family: 'Quarion';\n    src: url(" +
          Bn +
          ");\n    src: local('Quarion Heavy Italic'), local('Quarion-HeavyItalic'),\n        url(" +
          An +
          ") format('embedded-opentype'),\n        url(" +
          Pn +
          ") format('woff2'),\n        url(" +
          qn +
          ") format('woff'),\n        url(" +
          Tn +
          ") format('truetype');\n    font-weight: 900;\n    font-style: italic;\n}\n\n@font-face {\n    font-family: 'Quarion';\n    src: url(" +
          Vn +
          ");\n    src: local('Quarion Thin'), local('Quarion-Thin'),\n        url(" +
          $n +
          ") format('embedded-opentype'),\n        url(" +
          Dn +
          ") format('woff2'),\n        url(" +
          Fn +
          ") format('woff'),\n        url(" +
          Qn +
          ") format('truetype');\n    font-weight: 100;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Quarion';\n    src: url(" +
          Rn +
          ");\n    src: local('Quarion Light'), local('Quarion-Light'),\n        url(" +
          Nn +
          ") format('embedded-opentype'),\n        url(" +
          En +
          ") format('woff2'),\n        url(" +
          Un +
          ") format('woff'),\n        url(" +
          Yn +
          ") format('truetype');\n    font-weight: 300;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Quarion';\n    src: url(" +
          Wn +
          ");\n    src: local('Quarion Thin Italic'), local('Quarion-ThinItalic'),\n        url(" +
          Xn +
          ") format('embedded-opentype'),\n        url(" +
          Gn +
          ") format('woff2'),\n        url(" +
          Kn +
          ") format('woff'),\n        url(" +
          Jn +
          ") format('truetype');\n    font-weight: 100;\n    font-style: italic;\n}\n\n@font-face {\n    font-family: 'Quarion';\n    src: url(" +
          te +
          ");\n    src: local('Quarion Light Italic'), local('Quarion-LightItalic'),\n        url(" +
          ne +
          ") format('embedded-opentype'),\n        url(" +
          ee +
          ") format('woff2'),\n        url(" +
          ie +
          ") format('woff'),\n        url(" +
          ae +
          ") format('truetype');\n    font-weight: 300;\n    font-style: italic;\n}\n\n@font-face {\n    font-family: 'Quarion';\n    src: url(" +
          oe +
          ");\n    src: local('Quarion ExtraBold Italic'), local('Quarion-ExtraBoldItalic'),\n        url(" +
          re +
          ") format('embedded-opentype'),\n        url(" +
          se +
          ") format('woff2'),\n        url(" +
          le +
          ") format('woff'),\n        url(" +
          fe +
          ") format('truetype');\n    font-weight: 800;\n    font-style: italic;\n}\n\n@font-face {\n    font-family: 'Quarion';\n    src: url(" +
          pe +
          ");\n    src: local('Quarion SemiBold Italic'), local('Quarion-SemiBoldItalic'),\n        url(" +
          ce +
          ") format('embedded-opentype'),\n        url(" +
          de +
          ") format('woff2'),\n        url(" +
          ue +
          ") format('woff'),\n        url(" +
          he +
          ") format('truetype');\n    font-weight: 600;\n    font-style: italic;\n}\n\n@font-face {\n    font-family: 'Quarion';\n    src: url(" +
          me +
          ");\n    src: local('Quarion Book'), local('Quarion-Book'),\n        url(" +
          Ce +
          ") format('embedded-opentype'),\n        url(" +
          be +
          ") format('woff2'),\n        url(" +
          ge +
          ") format('woff'),\n        url(" +
          _e +
          ") format('truetype');\n    font-weight: normal;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Quarion';\n    src: url(" +
          xe +
          ");\n    src: local('Quarion Book Italic'), local('Quarion-BookItalic'),\n        url(" +
          ve +
          ") format('embedded-opentype'),\n        url(" +
          we +
          ") format('woff2'),\n        url(" +
          ye +
          ") format('woff'),\n        url(" +
          ke +
          ") format('truetype');\n    font-weight: normal;\n    font-style: italic;\n}\n\n",
        "",
      ]),
        (t.exports = jt);
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-ExtraLightItalic.8e2055e.eot";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-ExtraLightItalic.6754104.woff2";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-ExtraLightItalic.2c1b367.woff";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-ExtraLightItalic.f45d476.ttf";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-HairlineItalic.2e3e28c.eot";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-HairlineItalic.0fafe9e.woff2";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-HairlineItalic.f561bc3.woff";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-HairlineItalic.c219ec6.ttf";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-ExtraBold.c6aab1d.eot";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-ExtraBold.6076ba4.woff2";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-ExtraBold.a0a2d00.woff";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-ExtraBold.3d16ef6.ttf";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-Bold.5947e92.eot";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-Bold.4f21e22.woff2";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-Bold.03090a7.woff";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-Bold.e4836f3.ttf";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-Medium.837a29e.eot";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-Medium.8a8ec60.woff2";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-Medium.150392d.woff";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-Medium.c0282d2.ttf";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-BoldItalic.736445e.eot";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-BoldItalic.d1432f0.woff2";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-BoldItalic.569654e.woff";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-BoldItalic.80fc3e6.ttf";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-ExtraLight.0e5761f.eot";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-ExtraLight.d72b09f.woff2";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-ExtraLight.9d3e98f.woff";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-ExtraLight.8bec5a3.ttf";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-Heavy.8c7a2f4.eot";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-Heavy.0e9b012.woff2";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-Heavy.8595f1c.woff";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-Heavy.43a2e6c.ttf";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-SemiBold.5b59511.eot";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-SemiBold.7f05ff2.woff2";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-SemiBold.9b843c1.woff";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-SemiBold.b2bc04f.ttf";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-Hairline.032bdb5.eot";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-Hairline.5e0bf6d.woff2";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-Hairline.cccd4db.woff";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-Hairline.efae256.ttf";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-MediumItalic.1e25147.eot";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-MediumItalic.3f5eb88.woff2";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-MediumItalic.bf018e5.woff";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-MediumItalic.98b862e.ttf";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-HeavyItalic.008f8fb.eot";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-HeavyItalic.ce8d8c8.woff2";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-HeavyItalic.ce69bb1.woff";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-HeavyItalic.2e56e9e.ttf";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-Thin.0a0bbee.eot";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-Thin.c2e2d87.woff2";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-Thin.eec3f42.woff";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-Thin.b81305f.ttf";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-Light.3e62525.eot";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-Light.94291b9.woff2";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-Light.5e59fd7.woff";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-Light.23819b8.ttf";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-ThinItalic.4f5a9fd.eot";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-ThinItalic.19c6682.woff2";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-ThinItalic.d89a003.woff";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-ThinItalic.37b8b6f.ttf";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-LightItalic.eee80df.eot";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-LightItalic.1edb5d5.woff2";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-LightItalic.42214e9.woff";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-LightItalic.a92eb20.ttf";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-ExtraBoldItalic.dca5872.eot";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-ExtraBoldItalic.63f554c.woff2";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-ExtraBoldItalic.9f7088c.woff";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-ExtraBoldItalic.9f9315e.ttf";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-SemiBoldItalic.9e714b4.eot";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-SemiBoldItalic.e3af6b1.woff2";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-SemiBoldItalic.df1db0a.woff";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-SemiBoldItalic.aa3e178.ttf";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-Book.13818f9.eot";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-Book.e09da83.woff2";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-Book.d706180.woff";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-Book.94575b1.ttf";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-BookItalic.89111dd.eot";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-BookItalic.aba7aa2.woff2";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-BookItalic.bde585b.woff";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/Quarion-BookItalic.8d763d4.ttf";
    },
    function (t, n, e) {
      var i = e(471);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      (0, e(37).default)("4f0f9f17", i, !0, { sourceMap: !1 });
    },
    function (t, n, e) {
      var i = e(36),
        a = e(189),
        o = e(472),
        r = e(473),
        s = e(474),
        l = e(475),
        f = e(476),
        p = e(477),
        c = e(478),
        d = e(479),
        u = e(480),
        h = e(481),
        m = e(482),
        C = e(483),
        b = e(484),
        g = e(485),
        _ = e(486),
        x = e(487),
        v = e(488),
        w = e(489),
        y = e(490),
        k = e(491),
        M = e(492),
        Z = e(493),
        z = e(494),
        I = e(495),
        S = e(496),
        H = e(497),
        j = e(498),
        O = e(499),
        L = e(500),
        B = e(501),
        A = e(502),
        P = e(503),
        q = e(504),
        T = e(505),
        V = e(506),
        $ = e(507),
        D = e(508),
        F = e(509),
        Q = e(510),
        R = e(511),
        N = i(!1),
        E = a(o),
        U = a(o, { hash: "?#iefix" }),
        Y = a(r),
        W = a(s),
        X = a(l),
        G = a(f),
        K = a(f, { hash: "?#iefix" }),
        J = a(p),
        tt = a(c),
        nt = a(d),
        et = a(u),
        it = a(u, { hash: "?#iefix" }),
        at = a(h),
        ot = a(m),
        rt = a(C),
        st = a(b),
        lt = a(b, { hash: "?#iefix" }),
        ft = a(g),
        pt = a(_),
        ct = a(x),
        dt = a(v),
        ut = a(v, { hash: "?#iefix" }),
        ht = a(w),
        mt = a(y),
        Ct = a(k),
        bt = a(M),
        gt = a(M, { hash: "?#iefix" }),
        _t = a(Z),
        xt = a(z),
        vt = a(I),
        wt = a(S),
        yt = a(S, { hash: "?#iefix" }),
        kt = a(H),
        Mt = a(j),
        Zt = a(O),
        zt = a(L),
        It = a(L, { hash: "?#iefix" }),
        St = a(B),
        Ht = a(A),
        jt = a(P),
        Ot = a(q),
        Lt = a(q, { hash: "?#iefix" }),
        Bt = a(T),
        At = a(V),
        Pt = a($),
        qt = a(D),
        Tt = a(D, { hash: "?#iefix" }),
        Vt = a(F),
        $t = a(Q),
        Dt = a(R);
      N.push([
        t.i,
        "@font-face {\n    font-family: 'Open Sans';\n    src: url(" +
          E +
          ");\n    src: local('Open Sans Italic'), local('OpenSans-Italic'),\n        url(" +
          U +
          ") format('embedded-opentype'),\n        url(" +
          Y +
          ") format('woff2'),\n        url(" +
          W +
          ") format('woff'),\n        url(" +
          X +
          ") format('truetype');\n    font-weight: normal;\n    font-style: italic;\n}\n\n@font-face {\n    font-family: 'Open Sans';\n    src: url(" +
          G +
          ");\n    src: local('Open Sans Regular'), local('OpenSans-Regular'),\n        url(" +
          K +
          ") format('embedded-opentype'),\n        url(" +
          J +
          ") format('woff2'),\n        url(" +
          tt +
          ") format('woff'),\n        url(" +
          nt +
          ") format('truetype');\n    font-weight: normal;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Open Sans';\n    src: url(" +
          et +
          ");\n    src: local('Open Sans Bold Italic'), local('OpenSans-BoldItalic'),\n        url(" +
          it +
          ") format('embedded-opentype'),\n        url(" +
          at +
          ") format('woff2'),\n        url(" +
          ot +
          ") format('woff'),\n        url(" +
          rt +
          ") format('truetype');\n    font-weight: bold;\n    font-style: italic;\n}\n\n@font-face {\n    font-family: 'Open Sans';\n    src: url(" +
          st +
          ");\n    src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'),\n        url(" +
          lt +
          ") format('embedded-opentype'),\n        url(" +
          ft +
          ") format('woff2'),\n        url(" +
          pt +
          ") format('woff'),\n        url(" +
          ct +
          ") format('truetype');\n    font-weight: 600;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Open Sans';\n    src: url(" +
          dt +
          ");\n    src: local('Open Sans ExtraBold Italic'), local('OpenSans-ExtraBoldItalic'),\n        url(" +
          ut +
          ") format('embedded-opentype'),\n        url(" +
          ht +
          ") format('woff2'),\n        url(" +
          mt +
          ") format('woff'),\n        url(" +
          Ct +
          ") format('truetype');\n    font-weight: 800;\n    font-style: italic;\n}\n\n@font-face {\n    font-family: 'Open Sans';\n    src: url(" +
          bt +
          ");\n    src: local('Open Sans Light Italic'), local('OpenSans-LightItalic'),\n        url(" +
          gt +
          ") format('embedded-opentype'),\n        url(" +
          _t +
          ") format('woff2'),\n        url(" +
          xt +
          ") format('woff'),\n        url(" +
          vt +
          ") format('truetype');\n    font-weight: 300;\n    font-style: italic;\n}\n\n@font-face {\n    font-family: 'Open Sans';\n    src: url(" +
          wt +
          ");\n    src: local('Open Sans Bold'), local('OpenSans-Bold'),\n        url(" +
          yt +
          ") format('embedded-opentype'),\n        url(" +
          kt +
          ") format('woff2'),\n        url(" +
          Mt +
          ") format('woff'),\n        url(" +
          Zt +
          ") format('truetype');\n    font-weight: bold;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Open Sans';\n    src: url(" +
          zt +
          ");\n    src: local('Open Sans SemiBold Italic'), local('OpenSans-SemiBoldItalic'),\n        url(" +
          It +
          ") format('embedded-opentype'),\n        url(" +
          St +
          ") format('woff2'),\n        url(" +
          Ht +
          ") format('woff'),\n        url(" +
          jt +
          ") format('truetype');\n    font-weight: 600;\n    font-style: italic;\n}\n\n@font-face {\n    font-family: 'Open Sans';\n    src: url(" +
          Ot +
          ");\n    src: local('Open Sans ExtraBold'), local('OpenSans-ExtraBold'),\n        url(" +
          Lt +
          ") format('embedded-opentype'),\n        url(" +
          Bt +
          ") format('woff2'),\n        url(" +
          At +
          ") format('woff'),\n        url(" +
          Pt +
          ") format('truetype');\n    font-weight: 800;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Open Sans';\n    src: url(" +
          qt +
          ");\n    src: local('Open Sans Light'), local('OpenSans-Light'),\n        url(" +
          Tt +
          ") format('embedded-opentype'),\n        url(" +
          Vt +
          ") format('woff2'),\n        url(" +
          $t +
          ") format('woff'),\n        url(" +
          Dt +
          ") format('truetype');\n    font-weight: 300;\n    font-style: normal;\n}\n\n",
        "",
      ]),
        (t.exports = N);
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/OpenSans-Italic.1e06f09.eot";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/OpenSans-Italic.348e1ee.woff2";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/OpenSans-Italic.874dcb9.woff";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/OpenSans-Italic.f8af72f.ttf";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/OpenSans-Regular.549c7c2.eot";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/OpenSans-Regular.9ffed65.woff2";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/OpenSans-Regular.74fbb13.woff";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/OpenSans-Regular.56f1eef.ttf";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/OpenSans-BoldItalic.260ad3a.eot";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/OpenSans-BoldItalic.077b4a0.woff2";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/OpenSans-BoldItalic.91ae5d3.woff";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/OpenSans-BoldItalic.3f3e264.ttf";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/OpenSans-SemiBold.16e5bd7.eot";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/OpenSans-SemiBold.117298b.woff2";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/OpenSans-SemiBold.1232ba7.woff";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/OpenSans-SemiBold.dd4e8cb.ttf";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/OpenSans-ExtraBoldItalic.1929f9b.eot";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/OpenSans-ExtraBoldItalic.cc7466b.woff2";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/OpenSans-ExtraBoldItalic.6293d13.woff";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/OpenSans-ExtraBoldItalic.7f6f3f1.ttf";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/OpenSans-LightItalic.6ccd359.eot";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/OpenSans-LightItalic.8ed62bc.woff2";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/OpenSans-LightItalic.275a18e.woff";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/OpenSans-LightItalic.2bd289b.ttf";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/OpenSans-Bold.098f6eb.eot";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/OpenSans-Bold.bddf072.woff2";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/OpenSans-Bold.030f6a6.woff";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/OpenSans-Bold.7394593.ttf";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/OpenSans-SemiBoldItalic.01fc308.eot";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/OpenSans-SemiBoldItalic.e1d56a4.woff2";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/OpenSans-SemiBoldItalic.5dcfe26.woff";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/OpenSans-SemiBoldItalic.adaea78.ttf";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/OpenSans-ExtraBold.0170d0b.eot";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/OpenSans-ExtraBold.88c519b.woff2";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/OpenSans-ExtraBold.239ddcd.woff";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/OpenSans-ExtraBold.c7b92e8.ttf";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/OpenSans-Light.bfeb16f.eot";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/OpenSans-Light.2091bdb.woff2";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/OpenSans-Light.1187378.woff";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/OpenSans-Light.e341725.ttf";
    },
    function (t, n, e) {
      var i = e(513);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      (0, e(37).default)("1bc9f15c", i, !0, { sourceMap: !1 });
    },
    function (t, n, e) {
      var i = e(36),
        a = e(189),
        o = e(514),
        r = e(515),
        s = e(516),
        l = e(517),
        f = e(518),
        p = e(519),
        c = i(!1),
        d = a(o),
        u = a(r, { hash: "?#iefix&v=4.7.0" }),
        h = a(s),
        m = a(l),
        C = a(f),
        b = a(p, { hash: "#fontawesomeregular" });
      c.push([
        t.i,
        "/*!\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */\n/* FONT PATH\n * -------------------------- */\n@font-face {\n  font-family: 'FontAwesome';\n  src: url(" +
          d +
          ");\n  src: url(" +
          u +
          ") format('embedded-opentype'), url(" +
          h +
          ") format('woff2'), url(" +
          m +
          ") format('woff'), url(" +
          C +
          ") format('truetype'), url(" +
          b +
          ') format(\'svg\');\n  font-weight: normal;\n  font-style: normal;\n}\n.fa {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n/* makes the font 33% larger relative to the icon container */\n.fa-lg {\n  font-size: 1.33333333em;\n  line-height: 0.75em;\n  vertical-align: -15%;\n}\n.fa-2x {\n  font-size: 2em;\n}\n.fa-3x {\n  font-size: 3em;\n}\n.fa-4x {\n  font-size: 4em;\n}\n.fa-5x {\n  font-size: 5em;\n}\n.fa-fw {\n  width: 1.28571429em;\n  text-align: center;\n}\n.fa-ul {\n  padding-left: 0;\n  margin-left: 2.14285714em;\n  list-style-type: none;\n}\n.fa-ul > li {\n  position: relative;\n}\n.fa-li {\n  position: absolute;\n  left: -2.14285714em;\n  width: 2.14285714em;\n  top: 0.14285714em;\n  text-align: center;\n}\n.fa-li.fa-lg {\n  left: -1.85714286em;\n}\n.fa-border {\n  padding: .2em .25em .15em;\n  border: solid 0.08em #eeeeee;\n  border-radius: .1em;\n}\n.fa-pull-left {\n  float: left;\n}\n.fa-pull-right {\n  float: right;\n}\n.fa.fa-pull-left {\n  margin-right: .3em;\n}\n.fa.fa-pull-right {\n  margin-left: .3em;\n}\n/* Deprecated as of 4.4.0 */\n.pull-right {\n  float: right;\n}\n.pull-left {\n  float: left;\n}\n.fa.pull-left {\n  margin-right: .3em;\n}\n.fa.pull-right {\n  margin-left: .3em;\n}\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n  animation: fa-spin 2s infinite linear;\n}\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n  animation: fa-spin 1s infinite steps(8);\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n  -ms-transform: rotate(270deg);\n  transform: rotate(270deg);\n}\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n  -ms-transform: scale(-1, 1);\n  transform: scale(-1, 1);\n}\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n  -ms-transform: scale(1, -1);\n  transform: scale(1, -1);\n}\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical {\n  filter: none;\n}\n.fa-stack {\n  position: relative;\n  display: inline-block;\n  width: 2em;\n  height: 2em;\n  line-height: 2em;\n  vertical-align: middle;\n}\n.fa-stack-1x,\n.fa-stack-2x {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n.fa-stack-1x {\n  line-height: inherit;\n}\n.fa-stack-2x {\n  font-size: 2em;\n}\n.fa-inverse {\n  color: #ffffff;\n}\n/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen\n   readers do not read off random characters that represent icons */\n.fa-glass:before {\n  content: "\\f000";\n}\n.fa-music:before {\n  content: "\\f001";\n}\n.fa-search:before {\n  content: "\\f002";\n}\n.fa-envelope-o:before {\n  content: "\\f003";\n}\n.fa-heart:before {\n  content: "\\f004";\n}\n.fa-star:before {\n  content: "\\f005";\n}\n.fa-star-o:before {\n  content: "\\f006";\n}\n.fa-user:before {\n  content: "\\f007";\n}\n.fa-film:before {\n  content: "\\f008";\n}\n.fa-th-large:before {\n  content: "\\f009";\n}\n.fa-th:before {\n  content: "\\f00a";\n}\n.fa-th-list:before {\n  content: "\\f00b";\n}\n.fa-check:before {\n  content: "\\f00c";\n}\n.fa-remove:before,\n.fa-close:before,\n.fa-times:before {\n  content: "\\f00d";\n}\n.fa-search-plus:before {\n  content: "\\f00e";\n}\n.fa-search-minus:before {\n  content: "\\f010";\n}\n.fa-power-off:before {\n  content: "\\f011";\n}\n.fa-signal:before {\n  content: "\\f012";\n}\n.fa-gear:before,\n.fa-cog:before {\n  content: "\\f013";\n}\n.fa-trash-o:before {\n  content: "\\f014";\n}\n.fa-home:before {\n  content: "\\f015";\n}\n.fa-file-o:before {\n  content: "\\f016";\n}\n.fa-clock-o:before {\n  content: "\\f017";\n}\n.fa-road:before {\n  content: "\\f018";\n}\n.fa-download:before {\n  content: "\\f019";\n}\n.fa-arrow-circle-o-down:before {\n  content: "\\f01a";\n}\n.fa-arrow-circle-o-up:before {\n  content: "\\f01b";\n}\n.fa-inbox:before {\n  content: "\\f01c";\n}\n.fa-play-circle-o:before {\n  content: "\\f01d";\n}\n.fa-rotate-right:before,\n.fa-repeat:before {\n  content: "\\f01e";\n}\n.fa-refresh:before {\n  content: "\\f021";\n}\n.fa-list-alt:before {\n  content: "\\f022";\n}\n.fa-lock:before {\n  content: "\\f023";\n}\n.fa-flag:before {\n  content: "\\f024";\n}\n.fa-headphones:before {\n  content: "\\f025";\n}\n.fa-volume-off:before {\n  content: "\\f026";\n}\n.fa-volume-down:before {\n  content: "\\f027";\n}\n.fa-volume-up:before {\n  content: "\\f028";\n}\n.fa-qrcode:before {\n  content: "\\f029";\n}\n.fa-barcode:before {\n  content: "\\f02a";\n}\n.fa-tag:before {\n  content: "\\f02b";\n}\n.fa-tags:before {\n  content: "\\f02c";\n}\n.fa-book:before {\n  content: "\\f02d";\n}\n.fa-bookmark:before {\n  content: "\\f02e";\n}\n.fa-print:before {\n  content: "\\f02f";\n}\n.fa-camera:before {\n  content: "\\f030";\n}\n.fa-font:before {\n  content: "\\f031";\n}\n.fa-bold:before {\n  content: "\\f032";\n}\n.fa-italic:before {\n  content: "\\f033";\n}\n.fa-text-height:before {\n  content: "\\f034";\n}\n.fa-text-width:before {\n  content: "\\f035";\n}\n.fa-align-left:before {\n  content: "\\f036";\n}\n.fa-align-center:before {\n  content: "\\f037";\n}\n.fa-align-right:before {\n  content: "\\f038";\n}\n.fa-align-justify:before {\n  content: "\\f039";\n}\n.fa-list:before {\n  content: "\\f03a";\n}\n.fa-dedent:before,\n.fa-outdent:before {\n  content: "\\f03b";\n}\n.fa-indent:before {\n  content: "\\f03c";\n}\n.fa-video-camera:before {\n  content: "\\f03d";\n}\n.fa-photo:before,\n.fa-image:before,\n.fa-picture-o:before {\n  content: "\\f03e";\n}\n.fa-pencil:before {\n  content: "\\f040";\n}\n.fa-map-marker:before {\n  content: "\\f041";\n}\n.fa-adjust:before {\n  content: "\\f042";\n}\n.fa-tint:before {\n  content: "\\f043";\n}\n.fa-edit:before,\n.fa-pencil-square-o:before {\n  content: "\\f044";\n}\n.fa-share-square-o:before {\n  content: "\\f045";\n}\n.fa-check-square-o:before {\n  content: "\\f046";\n}\n.fa-arrows:before {\n  content: "\\f047";\n}\n.fa-step-backward:before {\n  content: "\\f048";\n}\n.fa-fast-backward:before {\n  content: "\\f049";\n}\n.fa-backward:before {\n  content: "\\f04a";\n}\n.fa-play:before {\n  content: "\\f04b";\n}\n.fa-pause:before {\n  content: "\\f04c";\n}\n.fa-stop:before {\n  content: "\\f04d";\n}\n.fa-forward:before {\n  content: "\\f04e";\n}\n.fa-fast-forward:before {\n  content: "\\f050";\n}\n.fa-step-forward:before {\n  content: "\\f051";\n}\n.fa-eject:before {\n  content: "\\f052";\n}\n.fa-chevron-left:before {\n  content: "\\f053";\n}\n.fa-chevron-right:before {\n  content: "\\f054";\n}\n.fa-plus-circle:before {\n  content: "\\f055";\n}\n.fa-minus-circle:before {\n  content: "\\f056";\n}\n.fa-times-circle:before {\n  content: "\\f057";\n}\n.fa-check-circle:before {\n  content: "\\f058";\n}\n.fa-question-circle:before {\n  content: "\\f059";\n}\n.fa-info-circle:before {\n  content: "\\f05a";\n}\n.fa-crosshairs:before {\n  content: "\\f05b";\n}\n.fa-times-circle-o:before {\n  content: "\\f05c";\n}\n.fa-check-circle-o:before {\n  content: "\\f05d";\n}\n.fa-ban:before {\n  content: "\\f05e";\n}\n.fa-arrow-left:before {\n  content: "\\f060";\n}\n.fa-arrow-right:before {\n  content: "\\f061";\n}\n.fa-arrow-up:before {\n  content: "\\f062";\n}\n.fa-arrow-down:before {\n  content: "\\f063";\n}\n.fa-mail-forward:before,\n.fa-share:before {\n  content: "\\f064";\n}\n.fa-expand:before {\n  content: "\\f065";\n}\n.fa-compress:before {\n  content: "\\f066";\n}\n.fa-plus:before {\n  content: "\\f067";\n}\n.fa-minus:before {\n  content: "\\f068";\n}\n.fa-asterisk:before {\n  content: "\\f069";\n}\n.fa-exclamation-circle:before {\n  content: "\\f06a";\n}\n.fa-gift:before {\n  content: "\\f06b";\n}\n.fa-leaf:before {\n  content: "\\f06c";\n}\n.fa-fire:before {\n  content: "\\f06d";\n}\n.fa-eye:before {\n  content: "\\f06e";\n}\n.fa-eye-slash:before {\n  content: "\\f070";\n}\n.fa-warning:before,\n.fa-exclamation-triangle:before {\n  content: "\\f071";\n}\n.fa-plane:before {\n  content: "\\f072";\n}\n.fa-calendar:before {\n  content: "\\f073";\n}\n.fa-random:before {\n  content: "\\f074";\n}\n.fa-comment:before {\n  content: "\\f075";\n}\n.fa-magnet:before {\n  content: "\\f076";\n}\n.fa-chevron-up:before {\n  content: "\\f077";\n}\n.fa-chevron-down:before {\n  content: "\\f078";\n}\n.fa-retweet:before {\n  content: "\\f079";\n}\n.fa-shopping-cart:before {\n  content: "\\f07a";\n}\n.fa-folder:before {\n  content: "\\f07b";\n}\n.fa-folder-open:before {\n  content: "\\f07c";\n}\n.fa-arrows-v:before {\n  content: "\\f07d";\n}\n.fa-arrows-h:before {\n  content: "\\f07e";\n}\n.fa-bar-chart-o:before,\n.fa-bar-chart:before {\n  content: "\\f080";\n}\n.fa-twitter-square:before {\n  content: "\\f081";\n}\n.fa-facebook-square:before {\n  content: "\\f082";\n}\n.fa-camera-retro:before {\n  content: "\\f083";\n}\n.fa-key:before {\n  content: "\\f084";\n}\n.fa-gears:before,\n.fa-cogs:before {\n  content: "\\f085";\n}\n.fa-comments:before {\n  content: "\\f086";\n}\n.fa-thumbs-o-up:before {\n  content: "\\f087";\n}\n.fa-thumbs-o-down:before {\n  content: "\\f088";\n}\n.fa-star-half:before {\n  content: "\\f089";\n}\n.fa-heart-o:before {\n  content: "\\f08a";\n}\n.fa-sign-out:before {\n  content: "\\f08b";\n}\n.fa-linkedin-square:before {\n  content: "\\f08c";\n}\n.fa-thumb-tack:before {\n  content: "\\f08d";\n}\n.fa-external-link:before {\n  content: "\\f08e";\n}\n.fa-sign-in:before {\n  content: "\\f090";\n}\n.fa-trophy:before {\n  content: "\\f091";\n}\n.fa-github-square:before {\n  content: "\\f092";\n}\n.fa-upload:before {\n  content: "\\f093";\n}\n.fa-lemon-o:before {\n  content: "\\f094";\n}\n.fa-phone:before {\n  content: "\\f095";\n}\n.fa-square-o:before {\n  content: "\\f096";\n}\n.fa-bookmark-o:before {\n  content: "\\f097";\n}\n.fa-phone-square:before {\n  content: "\\f098";\n}\n.fa-twitter:before {\n  content: "\\f099";\n}\n.fa-facebook-f:before,\n.fa-facebook:before {\n  content: "\\f09a";\n}\n.fa-github:before {\n  content: "\\f09b";\n}\n.fa-unlock:before {\n  content: "\\f09c";\n}\n.fa-credit-card:before {\n  content: "\\f09d";\n}\n.fa-feed:before,\n.fa-rss:before {\n  content: "\\f09e";\n}\n.fa-hdd-o:before {\n  content: "\\f0a0";\n}\n.fa-bullhorn:before {\n  content: "\\f0a1";\n}\n.fa-bell:before {\n  content: "\\f0f3";\n}\n.fa-certificate:before {\n  content: "\\f0a3";\n}\n.fa-hand-o-right:before {\n  content: "\\f0a4";\n}\n.fa-hand-o-left:before {\n  content: "\\f0a5";\n}\n.fa-hand-o-up:before {\n  content: "\\f0a6";\n}\n.fa-hand-o-down:before {\n  content: "\\f0a7";\n}\n.fa-arrow-circle-left:before {\n  content: "\\f0a8";\n}\n.fa-arrow-circle-right:before {\n  content: "\\f0a9";\n}\n.fa-arrow-circle-up:before {\n  content: "\\f0aa";\n}\n.fa-arrow-circle-down:before {\n  content: "\\f0ab";\n}\n.fa-globe:before {\n  content: "\\f0ac";\n}\n.fa-wrench:before {\n  content: "\\f0ad";\n}\n.fa-tasks:before {\n  content: "\\f0ae";\n}\n.fa-filter:before {\n  content: "\\f0b0";\n}\n.fa-briefcase:before {\n  content: "\\f0b1";\n}\n.fa-arrows-alt:before {\n  content: "\\f0b2";\n}\n.fa-group:before,\n.fa-users:before {\n  content: "\\f0c0";\n}\n.fa-chain:before,\n.fa-link:before {\n  content: "\\f0c1";\n}\n.fa-cloud:before {\n  content: "\\f0c2";\n}\n.fa-flask:before {\n  content: "\\f0c3";\n}\n.fa-cut:before,\n.fa-scissors:before {\n  content: "\\f0c4";\n}\n.fa-copy:before,\n.fa-files-o:before {\n  content: "\\f0c5";\n}\n.fa-paperclip:before {\n  content: "\\f0c6";\n}\n.fa-save:before,\n.fa-floppy-o:before {\n  content: "\\f0c7";\n}\n.fa-square:before {\n  content: "\\f0c8";\n}\n.fa-navicon:before,\n.fa-reorder:before,\n.fa-bars:before {\n  content: "\\f0c9";\n}\n.fa-list-ul:before {\n  content: "\\f0ca";\n}\n.fa-list-ol:before {\n  content: "\\f0cb";\n}\n.fa-strikethrough:before {\n  content: "\\f0cc";\n}\n.fa-underline:before {\n  content: "\\f0cd";\n}\n.fa-table:before {\n  content: "\\f0ce";\n}\n.fa-magic:before {\n  content: "\\f0d0";\n}\n.fa-truck:before {\n  content: "\\f0d1";\n}\n.fa-pinterest:before {\n  content: "\\f0d2";\n}\n.fa-pinterest-square:before {\n  content: "\\f0d3";\n}\n.fa-google-plus-square:before {\n  content: "\\f0d4";\n}\n.fa-google-plus:before {\n  content: "\\f0d5";\n}\n.fa-money:before {\n  content: "\\f0d6";\n}\n.fa-caret-down:before {\n  content: "\\f0d7";\n}\n.fa-caret-up:before {\n  content: "\\f0d8";\n}\n.fa-caret-left:before {\n  content: "\\f0d9";\n}\n.fa-caret-right:before {\n  content: "\\f0da";\n}\n.fa-columns:before {\n  content: "\\f0db";\n}\n.fa-unsorted:before,\n.fa-sort:before {\n  content: "\\f0dc";\n}\n.fa-sort-down:before,\n.fa-sort-desc:before {\n  content: "\\f0dd";\n}\n.fa-sort-up:before,\n.fa-sort-asc:before {\n  content: "\\f0de";\n}\n.fa-envelope:before {\n  content: "\\f0e0";\n}\n.fa-linkedin:before {\n  content: "\\f0e1";\n}\n.fa-rotate-left:before,\n.fa-undo:before {\n  content: "\\f0e2";\n}\n.fa-legal:before,\n.fa-gavel:before {\n  content: "\\f0e3";\n}\n.fa-dashboard:before,\n.fa-tachometer:before {\n  content: "\\f0e4";\n}\n.fa-comment-o:before {\n  content: "\\f0e5";\n}\n.fa-comments-o:before {\n  content: "\\f0e6";\n}\n.fa-flash:before,\n.fa-bolt:before {\n  content: "\\f0e7";\n}\n.fa-sitemap:before {\n  content: "\\f0e8";\n}\n.fa-umbrella:before {\n  content: "\\f0e9";\n}\n.fa-paste:before,\n.fa-clipboard:before {\n  content: "\\f0ea";\n}\n.fa-lightbulb-o:before {\n  content: "\\f0eb";\n}\n.fa-exchange:before {\n  content: "\\f0ec";\n}\n.fa-cloud-download:before {\n  content: "\\f0ed";\n}\n.fa-cloud-upload:before {\n  content: "\\f0ee";\n}\n.fa-user-md:before {\n  content: "\\f0f0";\n}\n.fa-stethoscope:before {\n  content: "\\f0f1";\n}\n.fa-suitcase:before {\n  content: "\\f0f2";\n}\n.fa-bell-o:before {\n  content: "\\f0a2";\n}\n.fa-coffee:before {\n  content: "\\f0f4";\n}\n.fa-cutlery:before {\n  content: "\\f0f5";\n}\n.fa-file-text-o:before {\n  content: "\\f0f6";\n}\n.fa-building-o:before {\n  content: "\\f0f7";\n}\n.fa-hospital-o:before {\n  content: "\\f0f8";\n}\n.fa-ambulance:before {\n  content: "\\f0f9";\n}\n.fa-medkit:before {\n  content: "\\f0fa";\n}\n.fa-fighter-jet:before {\n  content: "\\f0fb";\n}\n.fa-beer:before {\n  content: "\\f0fc";\n}\n.fa-h-square:before {\n  content: "\\f0fd";\n}\n.fa-plus-square:before {\n  content: "\\f0fe";\n}\n.fa-angle-double-left:before {\n  content: "\\f100";\n}\n.fa-angle-double-right:before {\n  content: "\\f101";\n}\n.fa-angle-double-up:before {\n  content: "\\f102";\n}\n.fa-angle-double-down:before {\n  content: "\\f103";\n}\n.fa-angle-left:before {\n  content: "\\f104";\n}\n.fa-angle-right:before {\n  content: "\\f105";\n}\n.fa-angle-up:before {\n  content: "\\f106";\n}\n.fa-angle-down:before {\n  content: "\\f107";\n}\n.fa-desktop:before {\n  content: "\\f108";\n}\n.fa-laptop:before {\n  content: "\\f109";\n}\n.fa-tablet:before {\n  content: "\\f10a";\n}\n.fa-mobile-phone:before,\n.fa-mobile:before {\n  content: "\\f10b";\n}\n.fa-circle-o:before {\n  content: "\\f10c";\n}\n.fa-quote-left:before {\n  content: "\\f10d";\n}\n.fa-quote-right:before {\n  content: "\\f10e";\n}\n.fa-spinner:before {\n  content: "\\f110";\n}\n.fa-circle:before {\n  content: "\\f111";\n}\n.fa-mail-reply:before,\n.fa-reply:before {\n  content: "\\f112";\n}\n.fa-github-alt:before {\n  content: "\\f113";\n}\n.fa-folder-o:before {\n  content: "\\f114";\n}\n.fa-folder-open-o:before {\n  content: "\\f115";\n}\n.fa-smile-o:before {\n  content: "\\f118";\n}\n.fa-frown-o:before {\n  content: "\\f119";\n}\n.fa-meh-o:before {\n  content: "\\f11a";\n}\n.fa-gamepad:before {\n  content: "\\f11b";\n}\n.fa-keyboard-o:before {\n  content: "\\f11c";\n}\n.fa-flag-o:before {\n  content: "\\f11d";\n}\n.fa-flag-checkered:before {\n  content: "\\f11e";\n}\n.fa-terminal:before {\n  content: "\\f120";\n}\n.fa-code:before {\n  content: "\\f121";\n}\n.fa-mail-reply-all:before,\n.fa-reply-all:before {\n  content: "\\f122";\n}\n.fa-star-half-empty:before,\n.fa-star-half-full:before,\n.fa-star-half-o:before {\n  content: "\\f123";\n}\n.fa-location-arrow:before {\n  content: "\\f124";\n}\n.fa-crop:before {\n  content: "\\f125";\n}\n.fa-code-fork:before {\n  content: "\\f126";\n}\n.fa-unlink:before,\n.fa-chain-broken:before {\n  content: "\\f127";\n}\n.fa-question:before {\n  content: "\\f128";\n}\n.fa-info:before {\n  content: "\\f129";\n}\n.fa-exclamation:before {\n  content: "\\f12a";\n}\n.fa-superscript:before {\n  content: "\\f12b";\n}\n.fa-subscript:before {\n  content: "\\f12c";\n}\n.fa-eraser:before {\n  content: "\\f12d";\n}\n.fa-puzzle-piece:before {\n  content: "\\f12e";\n}\n.fa-microphone:before {\n  content: "\\f130";\n}\n.fa-microphone-slash:before {\n  content: "\\f131";\n}\n.fa-shield:before {\n  content: "\\f132";\n}\n.fa-calendar-o:before {\n  content: "\\f133";\n}\n.fa-fire-extinguisher:before {\n  content: "\\f134";\n}\n.fa-rocket:before {\n  content: "\\f135";\n}\n.fa-maxcdn:before {\n  content: "\\f136";\n}\n.fa-chevron-circle-left:before {\n  content: "\\f137";\n}\n.fa-chevron-circle-right:before {\n  content: "\\f138";\n}\n.fa-chevron-circle-up:before {\n  content: "\\f139";\n}\n.fa-chevron-circle-down:before {\n  content: "\\f13a";\n}\n.fa-html5:before {\n  content: "\\f13b";\n}\n.fa-css3:before {\n  content: "\\f13c";\n}\n.fa-anchor:before {\n  content: "\\f13d";\n}\n.fa-unlock-alt:before {\n  content: "\\f13e";\n}\n.fa-bullseye:before {\n  content: "\\f140";\n}\n.fa-ellipsis-h:before {\n  content: "\\f141";\n}\n.fa-ellipsis-v:before {\n  content: "\\f142";\n}\n.fa-rss-square:before {\n  content: "\\f143";\n}\n.fa-play-circle:before {\n  content: "\\f144";\n}\n.fa-ticket:before {\n  content: "\\f145";\n}\n.fa-minus-square:before {\n  content: "\\f146";\n}\n.fa-minus-square-o:before {\n  content: "\\f147";\n}\n.fa-level-up:before {\n  content: "\\f148";\n}\n.fa-level-down:before {\n  content: "\\f149";\n}\n.fa-check-square:before {\n  content: "\\f14a";\n}\n.fa-pencil-square:before {\n  content: "\\f14b";\n}\n.fa-external-link-square:before {\n  content: "\\f14c";\n}\n.fa-share-square:before {\n  content: "\\f14d";\n}\n.fa-compass:before {\n  content: "\\f14e";\n}\n.fa-toggle-down:before,\n.fa-caret-square-o-down:before {\n  content: "\\f150";\n}\n.fa-toggle-up:before,\n.fa-caret-square-o-up:before {\n  content: "\\f151";\n}\n.fa-toggle-right:before,\n.fa-caret-square-o-right:before {\n  content: "\\f152";\n}\n.fa-euro:before,\n.fa-eur:before {\n  content: "\\f153";\n}\n.fa-gbp:before {\n  content: "\\f154";\n}\n.fa-dollar:before,\n.fa-usd:before {\n  content: "\\f155";\n}\n.fa-rupee:before,\n.fa-inr:before {\n  content: "\\f156";\n}\n.fa-cny:before,\n.fa-rmb:before,\n.fa-yen:before,\n.fa-jpy:before {\n  content: "\\f157";\n}\n.fa-ruble:before,\n.fa-rouble:before,\n.fa-rub:before {\n  content: "\\f158";\n}\n.fa-won:before,\n.fa-krw:before {\n  content: "\\f159";\n}\n.fa-bitcoin:before,\n.fa-btc:before {\n  content: "\\f15a";\n}\n.fa-file:before {\n  content: "\\f15b";\n}\n.fa-file-text:before {\n  content: "\\f15c";\n}\n.fa-sort-alpha-asc:before {\n  content: "\\f15d";\n}\n.fa-sort-alpha-desc:before {\n  content: "\\f15e";\n}\n.fa-sort-amount-asc:before {\n  content: "\\f160";\n}\n.fa-sort-amount-desc:before {\n  content: "\\f161";\n}\n.fa-sort-numeric-asc:before {\n  content: "\\f162";\n}\n.fa-sort-numeric-desc:before {\n  content: "\\f163";\n}\n.fa-thumbs-up:before {\n  content: "\\f164";\n}\n.fa-thumbs-down:before {\n  content: "\\f165";\n}\n.fa-youtube-square:before {\n  content: "\\f166";\n}\n.fa-youtube:before {\n  content: "\\f167";\n}\n.fa-xing:before {\n  content: "\\f168";\n}\n.fa-xing-square:before {\n  content: "\\f169";\n}\n.fa-youtube-play:before {\n  content: "\\f16a";\n}\n.fa-dropbox:before {\n  content: "\\f16b";\n}\n.fa-stack-overflow:before {\n  content: "\\f16c";\n}\n.fa-instagram:before {\n  content: "\\f16d";\n}\n.fa-flickr:before {\n  content: "\\f16e";\n}\n.fa-adn:before {\n  content: "\\f170";\n}\n.fa-bitbucket:before {\n  content: "\\f171";\n}\n.fa-bitbucket-square:before {\n  content: "\\f172";\n}\n.fa-tumblr:before {\n  content: "\\f173";\n}\n.fa-tumblr-square:before {\n  content: "\\f174";\n}\n.fa-long-arrow-down:before {\n  content: "\\f175";\n}\n.fa-long-arrow-up:before {\n  content: "\\f176";\n}\n.fa-long-arrow-left:before {\n  content: "\\f177";\n}\n.fa-long-arrow-right:before {\n  content: "\\f178";\n}\n.fa-apple:before {\n  content: "\\f179";\n}\n.fa-windows:before {\n  content: "\\f17a";\n}\n.fa-android:before {\n  content: "\\f17b";\n}\n.fa-linux:before {\n  content: "\\f17c";\n}\n.fa-dribbble:before {\n  content: "\\f17d";\n}\n.fa-skype:before {\n  content: "\\f17e";\n}\n.fa-foursquare:before {\n  content: "\\f180";\n}\n.fa-trello:before {\n  content: "\\f181";\n}\n.fa-female:before {\n  content: "\\f182";\n}\n.fa-male:before {\n  content: "\\f183";\n}\n.fa-gittip:before,\n.fa-gratipay:before {\n  content: "\\f184";\n}\n.fa-sun-o:before {\n  content: "\\f185";\n}\n.fa-moon-o:before {\n  content: "\\f186";\n}\n.fa-archive:before {\n  content: "\\f187";\n}\n.fa-bug:before {\n  content: "\\f188";\n}\n.fa-vk:before {\n  content: "\\f189";\n}\n.fa-weibo:before {\n  content: "\\f18a";\n}\n.fa-renren:before {\n  content: "\\f18b";\n}\n.fa-pagelines:before {\n  content: "\\f18c";\n}\n.fa-stack-exchange:before {\n  content: "\\f18d";\n}\n.fa-arrow-circle-o-right:before {\n  content: "\\f18e";\n}\n.fa-arrow-circle-o-left:before {\n  content: "\\f190";\n}\n.fa-toggle-left:before,\n.fa-caret-square-o-left:before {\n  content: "\\f191";\n}\n.fa-dot-circle-o:before {\n  content: "\\f192";\n}\n.fa-wheelchair:before {\n  content: "\\f193";\n}\n.fa-vimeo-square:before {\n  content: "\\f194";\n}\n.fa-turkish-lira:before,\n.fa-try:before {\n  content: "\\f195";\n}\n.fa-plus-square-o:before {\n  content: "\\f196";\n}\n.fa-space-shuttle:before {\n  content: "\\f197";\n}\n.fa-slack:before {\n  content: "\\f198";\n}\n.fa-envelope-square:before {\n  content: "\\f199";\n}\n.fa-wordpress:before {\n  content: "\\f19a";\n}\n.fa-openid:before {\n  content: "\\f19b";\n}\n.fa-institution:before,\n.fa-bank:before,\n.fa-university:before {\n  content: "\\f19c";\n}\n.fa-mortar-board:before,\n.fa-graduation-cap:before {\n  content: "\\f19d";\n}\n.fa-yahoo:before {\n  content: "\\f19e";\n}\n.fa-google:before {\n  content: "\\f1a0";\n}\n.fa-reddit:before {\n  content: "\\f1a1";\n}\n.fa-reddit-square:before {\n  content: "\\f1a2";\n}\n.fa-stumbleupon-circle:before {\n  content: "\\f1a3";\n}\n.fa-stumbleupon:before {\n  content: "\\f1a4";\n}\n.fa-delicious:before {\n  content: "\\f1a5";\n}\n.fa-digg:before {\n  content: "\\f1a6";\n}\n.fa-pied-piper-pp:before {\n  content: "\\f1a7";\n}\n.fa-pied-piper-alt:before {\n  content: "\\f1a8";\n}\n.fa-drupal:before {\n  content: "\\f1a9";\n}\n.fa-joomla:before {\n  content: "\\f1aa";\n}\n.fa-language:before {\n  content: "\\f1ab";\n}\n.fa-fax:before {\n  content: "\\f1ac";\n}\n.fa-building:before {\n  content: "\\f1ad";\n}\n.fa-child:before {\n  content: "\\f1ae";\n}\n.fa-paw:before {\n  content: "\\f1b0";\n}\n.fa-spoon:before {\n  content: "\\f1b1";\n}\n.fa-cube:before {\n  content: "\\f1b2";\n}\n.fa-cubes:before {\n  content: "\\f1b3";\n}\n.fa-behance:before {\n  content: "\\f1b4";\n}\n.fa-behance-square:before {\n  content: "\\f1b5";\n}\n.fa-steam:before {\n  content: "\\f1b6";\n}\n.fa-steam-square:before {\n  content: "\\f1b7";\n}\n.fa-recycle:before {\n  content: "\\f1b8";\n}\n.fa-automobile:before,\n.fa-car:before {\n  content: "\\f1b9";\n}\n.fa-cab:before,\n.fa-taxi:before {\n  content: "\\f1ba";\n}\n.fa-tree:before {\n  content: "\\f1bb";\n}\n.fa-spotify:before {\n  content: "\\f1bc";\n}\n.fa-deviantart:before {\n  content: "\\f1bd";\n}\n.fa-soundcloud:before {\n  content: "\\f1be";\n}\n.fa-database:before {\n  content: "\\f1c0";\n}\n.fa-file-pdf-o:before {\n  content: "\\f1c1";\n}\n.fa-file-word-o:before {\n  content: "\\f1c2";\n}\n.fa-file-excel-o:before {\n  content: "\\f1c3";\n}\n.fa-file-powerpoint-o:before {\n  content: "\\f1c4";\n}\n.fa-file-photo-o:before,\n.fa-file-picture-o:before,\n.fa-file-image-o:before {\n  content: "\\f1c5";\n}\n.fa-file-zip-o:before,\n.fa-file-archive-o:before {\n  content: "\\f1c6";\n}\n.fa-file-sound-o:before,\n.fa-file-audio-o:before {\n  content: "\\f1c7";\n}\n.fa-file-movie-o:before,\n.fa-file-video-o:before {\n  content: "\\f1c8";\n}\n.fa-file-code-o:before {\n  content: "\\f1c9";\n}\n.fa-vine:before {\n  content: "\\f1ca";\n}\n.fa-codepen:before {\n  content: "\\f1cb";\n}\n.fa-jsfiddle:before {\n  content: "\\f1cc";\n}\n.fa-life-bouy:before,\n.fa-life-buoy:before,\n.fa-life-saver:before,\n.fa-support:before,\n.fa-life-ring:before {\n  content: "\\f1cd";\n}\n.fa-circle-o-notch:before {\n  content: "\\f1ce";\n}\n.fa-ra:before,\n.fa-resistance:before,\n.fa-rebel:before {\n  content: "\\f1d0";\n}\n.fa-ge:before,\n.fa-empire:before {\n  content: "\\f1d1";\n}\n.fa-git-square:before {\n  content: "\\f1d2";\n}\n.fa-git:before {\n  content: "\\f1d3";\n}\n.fa-y-combinator-square:before,\n.fa-yc-square:before,\n.fa-hacker-news:before {\n  content: "\\f1d4";\n}\n.fa-tencent-weibo:before {\n  content: "\\f1d5";\n}\n.fa-qq:before {\n  content: "\\f1d6";\n}\n.fa-wechat:before,\n.fa-weixin:before {\n  content: "\\f1d7";\n}\n.fa-send:before,\n.fa-paper-plane:before {\n  content: "\\f1d8";\n}\n.fa-send-o:before,\n.fa-paper-plane-o:before {\n  content: "\\f1d9";\n}\n.fa-history:before {\n  content: "\\f1da";\n}\n.fa-circle-thin:before {\n  content: "\\f1db";\n}\n.fa-header:before {\n  content: "\\f1dc";\n}\n.fa-paragraph:before {\n  content: "\\f1dd";\n}\n.fa-sliders:before {\n  content: "\\f1de";\n}\n.fa-share-alt:before {\n  content: "\\f1e0";\n}\n.fa-share-alt-square:before {\n  content: "\\f1e1";\n}\n.fa-bomb:before {\n  content: "\\f1e2";\n}\n.fa-soccer-ball-o:before,\n.fa-futbol-o:before {\n  content: "\\f1e3";\n}\n.fa-tty:before {\n  content: "\\f1e4";\n}\n.fa-binoculars:before {\n  content: "\\f1e5";\n}\n.fa-plug:before {\n  content: "\\f1e6";\n}\n.fa-slideshare:before {\n  content: "\\f1e7";\n}\n.fa-twitch:before {\n  content: "\\f1e8";\n}\n.fa-yelp:before {\n  content: "\\f1e9";\n}\n.fa-newspaper-o:before {\n  content: "\\f1ea";\n}\n.fa-wifi:before {\n  content: "\\f1eb";\n}\n.fa-calculator:before {\n  content: "\\f1ec";\n}\n.fa-paypal:before {\n  content: "\\f1ed";\n}\n.fa-google-wallet:before {\n  content: "\\f1ee";\n}\n.fa-cc-visa:before {\n  content: "\\f1f0";\n}\n.fa-cc-mastercard:before {\n  content: "\\f1f1";\n}\n.fa-cc-discover:before {\n  content: "\\f1f2";\n}\n.fa-cc-amex:before {\n  content: "\\f1f3";\n}\n.fa-cc-paypal:before {\n  content: "\\f1f4";\n}\n.fa-cc-stripe:before {\n  content: "\\f1f5";\n}\n.fa-bell-slash:before {\n  content: "\\f1f6";\n}\n.fa-bell-slash-o:before {\n  content: "\\f1f7";\n}\n.fa-trash:before {\n  content: "\\f1f8";\n}\n.fa-copyright:before {\n  content: "\\f1f9";\n}\n.fa-at:before {\n  content: "\\f1fa";\n}\n.fa-eyedropper:before {\n  content: "\\f1fb";\n}\n.fa-paint-brush:before {\n  content: "\\f1fc";\n}\n.fa-birthday-cake:before {\n  content: "\\f1fd";\n}\n.fa-area-chart:before {\n  content: "\\f1fe";\n}\n.fa-pie-chart:before {\n  content: "\\f200";\n}\n.fa-line-chart:before {\n  content: "\\f201";\n}\n.fa-lastfm:before {\n  content: "\\f202";\n}\n.fa-lastfm-square:before {\n  content: "\\f203";\n}\n.fa-toggle-off:before {\n  content: "\\f204";\n}\n.fa-toggle-on:before {\n  content: "\\f205";\n}\n.fa-bicycle:before {\n  content: "\\f206";\n}\n.fa-bus:before {\n  content: "\\f207";\n}\n.fa-ioxhost:before {\n  content: "\\f208";\n}\n.fa-angellist:before {\n  content: "\\f209";\n}\n.fa-cc:before {\n  content: "\\f20a";\n}\n.fa-shekel:before,\n.fa-sheqel:before,\n.fa-ils:before {\n  content: "\\f20b";\n}\n.fa-meanpath:before {\n  content: "\\f20c";\n}\n.fa-buysellads:before {\n  content: "\\f20d";\n}\n.fa-connectdevelop:before {\n  content: "\\f20e";\n}\n.fa-dashcube:before {\n  content: "\\f210";\n}\n.fa-forumbee:before {\n  content: "\\f211";\n}\n.fa-leanpub:before {\n  content: "\\f212";\n}\n.fa-sellsy:before {\n  content: "\\f213";\n}\n.fa-shirtsinbulk:before {\n  content: "\\f214";\n}\n.fa-simplybuilt:before {\n  content: "\\f215";\n}\n.fa-skyatlas:before {\n  content: "\\f216";\n}\n.fa-cart-plus:before {\n  content: "\\f217";\n}\n.fa-cart-arrow-down:before {\n  content: "\\f218";\n}\n.fa-diamond:before {\n  content: "\\f219";\n}\n.fa-ship:before {\n  content: "\\f21a";\n}\n.fa-user-secret:before {\n  content: "\\f21b";\n}\n.fa-motorcycle:before {\n  content: "\\f21c";\n}\n.fa-street-view:before {\n  content: "\\f21d";\n}\n.fa-heartbeat:before {\n  content: "\\f21e";\n}\n.fa-venus:before {\n  content: "\\f221";\n}\n.fa-mars:before {\n  content: "\\f222";\n}\n.fa-mercury:before {\n  content: "\\f223";\n}\n.fa-intersex:before,\n.fa-transgender:before {\n  content: "\\f224";\n}\n.fa-transgender-alt:before {\n  content: "\\f225";\n}\n.fa-venus-double:before {\n  content: "\\f226";\n}\n.fa-mars-double:before {\n  content: "\\f227";\n}\n.fa-venus-mars:before {\n  content: "\\f228";\n}\n.fa-mars-stroke:before {\n  content: "\\f229";\n}\n.fa-mars-stroke-v:before {\n  content: "\\f22a";\n}\n.fa-mars-stroke-h:before {\n  content: "\\f22b";\n}\n.fa-neuter:before {\n  content: "\\f22c";\n}\n.fa-genderless:before {\n  content: "\\f22d";\n}\n.fa-facebook-official:before {\n  content: "\\f230";\n}\n.fa-pinterest-p:before {\n  content: "\\f231";\n}\n.fa-whatsapp:before {\n  content: "\\f232";\n}\n.fa-server:before {\n  content: "\\f233";\n}\n.fa-user-plus:before {\n  content: "\\f234";\n}\n.fa-user-times:before {\n  content: "\\f235";\n}\n.fa-hotel:before,\n.fa-bed:before {\n  content: "\\f236";\n}\n.fa-viacoin:before {\n  content: "\\f237";\n}\n.fa-train:before {\n  content: "\\f238";\n}\n.fa-subway:before {\n  content: "\\f239";\n}\n.fa-medium:before {\n  content: "\\f23a";\n}\n.fa-yc:before,\n.fa-y-combinator:before {\n  content: "\\f23b";\n}\n.fa-optin-monster:before {\n  content: "\\f23c";\n}\n.fa-opencart:before {\n  content: "\\f23d";\n}\n.fa-expeditedssl:before {\n  content: "\\f23e";\n}\n.fa-battery-4:before,\n.fa-battery:before,\n.fa-battery-full:before {\n  content: "\\f240";\n}\n.fa-battery-3:before,\n.fa-battery-three-quarters:before {\n  content: "\\f241";\n}\n.fa-battery-2:before,\n.fa-battery-half:before {\n  content: "\\f242";\n}\n.fa-battery-1:before,\n.fa-battery-quarter:before {\n  content: "\\f243";\n}\n.fa-battery-0:before,\n.fa-battery-empty:before {\n  content: "\\f244";\n}\n.fa-mouse-pointer:before {\n  content: "\\f245";\n}\n.fa-i-cursor:before {\n  content: "\\f246";\n}\n.fa-object-group:before {\n  content: "\\f247";\n}\n.fa-object-ungroup:before {\n  content: "\\f248";\n}\n.fa-sticky-note:before {\n  content: "\\f249";\n}\n.fa-sticky-note-o:before {\n  content: "\\f24a";\n}\n.fa-cc-jcb:before {\n  content: "\\f24b";\n}\n.fa-cc-diners-club:before {\n  content: "\\f24c";\n}\n.fa-clone:before {\n  content: "\\f24d";\n}\n.fa-balance-scale:before {\n  content: "\\f24e";\n}\n.fa-hourglass-o:before {\n  content: "\\f250";\n}\n.fa-hourglass-1:before,\n.fa-hourglass-start:before {\n  content: "\\f251";\n}\n.fa-hourglass-2:before,\n.fa-hourglass-half:before {\n  content: "\\f252";\n}\n.fa-hourglass-3:before,\n.fa-hourglass-end:before {\n  content: "\\f253";\n}\n.fa-hourglass:before {\n  content: "\\f254";\n}\n.fa-hand-grab-o:before,\n.fa-hand-rock-o:before {\n  content: "\\f255";\n}\n.fa-hand-stop-o:before,\n.fa-hand-paper-o:before {\n  content: "\\f256";\n}\n.fa-hand-scissors-o:before {\n  content: "\\f257";\n}\n.fa-hand-lizard-o:before {\n  content: "\\f258";\n}\n.fa-hand-spock-o:before {\n  content: "\\f259";\n}\n.fa-hand-pointer-o:before {\n  content: "\\f25a";\n}\n.fa-hand-peace-o:before {\n  content: "\\f25b";\n}\n.fa-trademark:before {\n  content: "\\f25c";\n}\n.fa-registered:before {\n  content: "\\f25d";\n}\n.fa-creative-commons:before {\n  content: "\\f25e";\n}\n.fa-gg:before {\n  content: "\\f260";\n}\n.fa-gg-circle:before {\n  content: "\\f261";\n}\n.fa-tripadvisor:before {\n  content: "\\f262";\n}\n.fa-odnoklassniki:before {\n  content: "\\f263";\n}\n.fa-odnoklassniki-square:before {\n  content: "\\f264";\n}\n.fa-get-pocket:before {\n  content: "\\f265";\n}\n.fa-wikipedia-w:before {\n  content: "\\f266";\n}\n.fa-safari:before {\n  content: "\\f267";\n}\n.fa-chrome:before {\n  content: "\\f268";\n}\n.fa-firefox:before {\n  content: "\\f269";\n}\n.fa-opera:before {\n  content: "\\f26a";\n}\n.fa-internet-explorer:before {\n  content: "\\f26b";\n}\n.fa-tv:before,\n.fa-television:before {\n  content: "\\f26c";\n}\n.fa-contao:before {\n  content: "\\f26d";\n}\n.fa-500px:before {\n  content: "\\f26e";\n}\n.fa-amazon:before {\n  content: "\\f270";\n}\n.fa-calendar-plus-o:before {\n  content: "\\f271";\n}\n.fa-calendar-minus-o:before {\n  content: "\\f272";\n}\n.fa-calendar-times-o:before {\n  content: "\\f273";\n}\n.fa-calendar-check-o:before {\n  content: "\\f274";\n}\n.fa-industry:before {\n  content: "\\f275";\n}\n.fa-map-pin:before {\n  content: "\\f276";\n}\n.fa-map-signs:before {\n  content: "\\f277";\n}\n.fa-map-o:before {\n  content: "\\f278";\n}\n.fa-map:before {\n  content: "\\f279";\n}\n.fa-commenting:before {\n  content: "\\f27a";\n}\n.fa-commenting-o:before {\n  content: "\\f27b";\n}\n.fa-houzz:before {\n  content: "\\f27c";\n}\n.fa-vimeo:before {\n  content: "\\f27d";\n}\n.fa-black-tie:before {\n  content: "\\f27e";\n}\n.fa-fonticons:before {\n  content: "\\f280";\n}\n.fa-reddit-alien:before {\n  content: "\\f281";\n}\n.fa-edge:before {\n  content: "\\f282";\n}\n.fa-credit-card-alt:before {\n  content: "\\f283";\n}\n.fa-codiepie:before {\n  content: "\\f284";\n}\n.fa-modx:before {\n  content: "\\f285";\n}\n.fa-fort-awesome:before {\n  content: "\\f286";\n}\n.fa-usb:before {\n  content: "\\f287";\n}\n.fa-product-hunt:before {\n  content: "\\f288";\n}\n.fa-mixcloud:before {\n  content: "\\f289";\n}\n.fa-scribd:before {\n  content: "\\f28a";\n}\n.fa-pause-circle:before {\n  content: "\\f28b";\n}\n.fa-pause-circle-o:before {\n  content: "\\f28c";\n}\n.fa-stop-circle:before {\n  content: "\\f28d";\n}\n.fa-stop-circle-o:before {\n  content: "\\f28e";\n}\n.fa-shopping-bag:before {\n  content: "\\f290";\n}\n.fa-shopping-basket:before {\n  content: "\\f291";\n}\n.fa-hashtag:before {\n  content: "\\f292";\n}\n.fa-bluetooth:before {\n  content: "\\f293";\n}\n.fa-bluetooth-b:before {\n  content: "\\f294";\n}\n.fa-percent:before {\n  content: "\\f295";\n}\n.fa-gitlab:before {\n  content: "\\f296";\n}\n.fa-wpbeginner:before {\n  content: "\\f297";\n}\n.fa-wpforms:before {\n  content: "\\f298";\n}\n.fa-envira:before {\n  content: "\\f299";\n}\n.fa-universal-access:before {\n  content: "\\f29a";\n}\n.fa-wheelchair-alt:before {\n  content: "\\f29b";\n}\n.fa-question-circle-o:before {\n  content: "\\f29c";\n}\n.fa-blind:before {\n  content: "\\f29d";\n}\n.fa-audio-description:before {\n  content: "\\f29e";\n}\n.fa-volume-control-phone:before {\n  content: "\\f2a0";\n}\n.fa-braille:before {\n  content: "\\f2a1";\n}\n.fa-assistive-listening-systems:before {\n  content: "\\f2a2";\n}\n.fa-asl-interpreting:before,\n.fa-american-sign-language-interpreting:before {\n  content: "\\f2a3";\n}\n.fa-deafness:before,\n.fa-hard-of-hearing:before,\n.fa-deaf:before {\n  content: "\\f2a4";\n}\n.fa-glide:before {\n  content: "\\f2a5";\n}\n.fa-glide-g:before {\n  content: "\\f2a6";\n}\n.fa-signing:before,\n.fa-sign-language:before {\n  content: "\\f2a7";\n}\n.fa-low-vision:before {\n  content: "\\f2a8";\n}\n.fa-viadeo:before {\n  content: "\\f2a9";\n}\n.fa-viadeo-square:before {\n  content: "\\f2aa";\n}\n.fa-snapchat:before {\n  content: "\\f2ab";\n}\n.fa-snapchat-ghost:before {\n  content: "\\f2ac";\n}\n.fa-snapchat-square:before {\n  content: "\\f2ad";\n}\n.fa-pied-piper:before {\n  content: "\\f2ae";\n}\n.fa-first-order:before {\n  content: "\\f2b0";\n}\n.fa-yoast:before {\n  content: "\\f2b1";\n}\n.fa-themeisle:before {\n  content: "\\f2b2";\n}\n.fa-google-plus-circle:before,\n.fa-google-plus-official:before {\n  content: "\\f2b3";\n}\n.fa-fa:before,\n.fa-font-awesome:before {\n  content: "\\f2b4";\n}\n.fa-handshake-o:before {\n  content: "\\f2b5";\n}\n.fa-envelope-open:before {\n  content: "\\f2b6";\n}\n.fa-envelope-open-o:before {\n  content: "\\f2b7";\n}\n.fa-linode:before {\n  content: "\\f2b8";\n}\n.fa-address-book:before {\n  content: "\\f2b9";\n}\n.fa-address-book-o:before {\n  content: "\\f2ba";\n}\n.fa-vcard:before,\n.fa-address-card:before {\n  content: "\\f2bb";\n}\n.fa-vcard-o:before,\n.fa-address-card-o:before {\n  content: "\\f2bc";\n}\n.fa-user-circle:before {\n  content: "\\f2bd";\n}\n.fa-user-circle-o:before {\n  content: "\\f2be";\n}\n.fa-user-o:before {\n  content: "\\f2c0";\n}\n.fa-id-badge:before {\n  content: "\\f2c1";\n}\n.fa-drivers-license:before,\n.fa-id-card:before {\n  content: "\\f2c2";\n}\n.fa-drivers-license-o:before,\n.fa-id-card-o:before {\n  content: "\\f2c3";\n}\n.fa-quora:before {\n  content: "\\f2c4";\n}\n.fa-free-code-camp:before {\n  content: "\\f2c5";\n}\n.fa-telegram:before {\n  content: "\\f2c6";\n}\n.fa-thermometer-4:before,\n.fa-thermometer:before,\n.fa-thermometer-full:before {\n  content: "\\f2c7";\n}\n.fa-thermometer-3:before,\n.fa-thermometer-three-quarters:before {\n  content: "\\f2c8";\n}\n.fa-thermometer-2:before,\n.fa-thermometer-half:before {\n  content: "\\f2c9";\n}\n.fa-thermometer-1:before,\n.fa-thermometer-quarter:before {\n  content: "\\f2ca";\n}\n.fa-thermometer-0:before,\n.fa-thermometer-empty:before {\n  content: "\\f2cb";\n}\n.fa-shower:before {\n  content: "\\f2cc";\n}\n.fa-bathtub:before,\n.fa-s15:before,\n.fa-bath:before {\n  content: "\\f2cd";\n}\n.fa-podcast:before {\n  content: "\\f2ce";\n}\n.fa-window-maximize:before {\n  content: "\\f2d0";\n}\n.fa-window-minimize:before {\n  content: "\\f2d1";\n}\n.fa-window-restore:before {\n  content: "\\f2d2";\n}\n.fa-times-rectangle:before,\n.fa-window-close:before {\n  content: "\\f2d3";\n}\n.fa-times-rectangle-o:before,\n.fa-window-close-o:before {\n  content: "\\f2d4";\n}\n.fa-bandcamp:before {\n  content: "\\f2d5";\n}\n.fa-grav:before {\n  content: "\\f2d6";\n}\n.fa-etsy:before {\n  content: "\\f2d7";\n}\n.fa-imdb:before {\n  content: "\\f2d8";\n}\n.fa-ravelry:before {\n  content: "\\f2d9";\n}\n.fa-eercast:before {\n  content: "\\f2da";\n}\n.fa-microchip:before {\n  content: "\\f2db";\n}\n.fa-snowflake-o:before {\n  content: "\\f2dc";\n}\n.fa-superpowers:before {\n  content: "\\f2dd";\n}\n.fa-wpexplorer:before {\n  content: "\\f2de";\n}\n.fa-meetup:before {\n  content: "\\f2e0";\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n.sr-only-focusable:active,\n.sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto;\n}\n',
        "",
      ]),
        (t.exports = c);
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/fontawesome-webfont.8b43027.eot";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/fontawesome-webfont.8b43027.eot";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/fontawesome-webfont.20fd170.woff2";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/fontawesome-webfont.f691f37.woff";
    },
    function (t, n, e) {
      t.exports = e.p + "fonts/fontawesome-webfont.1e59d23.ttf";
    },
    function (t, n, e) {
      t.exports = e.p + "img/fontawesome-webfont.c1e38fd.svg";
    },
    ,
    ,
    function (t, n, e) {
      var i = e(523);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      (0, e(37).default)("91499328", i, !0, { sourceMap: !1 });
    },
    function (t, n, e) {
      var i = e(36)(!1);
      i.push([
        t.i,
        '.min{min-width:120px}.tac{cursor:pointer;text-align:center}.tac a{font-size:18px}.table-main{background-color:#007791;color:#fff}.table-main th{padding:20px 1rem;border:1px solid #fff}table th.max{min-width:300px;white-space:pre-wrap}.table-name{width:400px}.grouped td{background-color:#0790ae;color:#fff}.comment{width:150px}.mt-5{margin-top:30px;width:auto;overflow-x:scroll}.mt-5 table{min-width:100vw}.filter-title{margin-top:50px;display:block;text-transform:capitalize;font-size:25px;font-weight:700}.form-field-report{margin-top:20px;display:flex;justify-content:flex-start}.form-period{display:flex;align-items:center;margin-right:20px}.form-period select{padding:6px 12px;border-radius:5px;border:1px solid #ccc}.form-period-title{text-transform:capitalize;margin-right:10px;font-size:20px}body{font-family:"Open Sans",sans-serif;background-color:#f7f8fc;color:#393c40}.container{max-width:1440px}a,a:hover{text-decoration:none}.vue-treeselect__placeholder,textarea::placeholder,select::placeholder,input::placeholder{color:#3e3e3e !important}.title{width:100%;display:flex;align-items:center;justify-content:space-between;margin-bottom:30px}.title h2{font-weight:600;font-size:30px;line-height:38px;color:#393c40;margin:0}.title-params__select{height:44px;border:1px solid #cdd6e2;box-sizing:border-box;filter:drop-shadow(0px 4px 14px rgba(59, 69, 83, 0.05));border-radius:4px;background-color:rgba(0,0,0,0);outline:none;box-shadow:none;padding:0 40px 0 20px}.title-params__select:focus{outline:none;box-shadow:none}.title-url{font-size:17px;font-weight:400;border-bottom:1px solid;color:#393c40;transition:all .25s ease-in-out}.title-url:hover{color:#007791}.popup.popup-fade-enter-active,.popup.popup-fade-leave-active{transition:opacity .25s ease}.popup.popup-fade-enter,.popup.popup-fade-leave-to{opacity:0}.popup.popup-fade-enter-active .popup-main,.popup.popup-fade-leave-active .popup-main{transition:all .3s ease-in-out;opacity:1;transform:scale(1)}.popup.popup-fade-enter .popup-main,.popup.popup-fade-leave-to .popup-main{opacity:0;transform:scale(0.6)}.pagination-limit .dropdown-toggle{padding:8px 12px;display:flex;align-items:center;justify-content:center;min-width:40px;border:1px solid #dae0e2 !important;height:40px;color:#000 !important;background:#fff !important;border-radius:4px;box-shadow:none}.initiativeDetail__header{font-weight:600;margin-bottom:20px;font-size:19px}.initiativeDetail__address{font-weight:500;color:#a9adb1}.initiatives-side__district{font-weight:700;color:#13879e !important;margin-bottom:20px !important}.initiatives-side__vote__info>span{font-weight:bold !important}.initiatives-side__currency{margin-bottom:20px !important}.initiatives-side{border-radius:10px !important;margin-top:0}.header-top{width:100%;background:#fff}.header-top__main{width:100%;height:55px;display:flex;align-items:center;justify-content:space-between}.header-top__left{display:flex;align-items:center}.header-top__currency{font-size:15px;line-height:19px;margin-right:65px;color:#393c40}.header-top__currency strong{font-weight:500;color:#007791}.header-top__right{display:flex;align-items:center}.header-top__item{display:flex;align-items:center;margin-left:30px}.header-top__item>a{margin-left:15px;display:flex;align-items:center;color:#393c40}.header-top__item>a svg{margin-right:10px;height:16px;fill:#007791}.header-top__item--lang .btn{background-color:rgba(0,0,0,0) !important;color:#393c40 !important;padding:0;border:0 !important;outline:none;box-shadow:none;display:flex;align-items:center}.header-top__item--lang .btn:focus{box-shadow:none !important}.header-nav{width:100%;background:rgba(214,233,237,.35)}.header-nav__main{width:100%;height:125px;display:flex;align-items:center}.header-nav__logo{display:flex;align-items:center;max-width:311px;margin-right:80px}.header-nav__logo__image{height:77px;margin-right:15px}.header-nav__logo__title span{display:block;color:#393c40;font-weight:500;font-size:20px;line-height:25px;margin-bottom:5px}.header-nav__logo__title small{display:block;font-size:16px;line-height:20px;color:#747474}.header-nav__menu{width:100%}.header .menu{display:flex;align-items:center;justify-content:space-between}.header .menu-full{margin-left:40px}.header .menu .navbar{padding:0;width:100%}.header .menu .navbar-nav{width:100%;justify-content:space-between}.header .menu .navbar-expand .navbar-nav .nav-link{padding:15px 0;font-size:17px;line-height:21px;color:#323437;display:flex;align-items:center}.header .menu .navbar-expand .navbar-nav .nav-link.dropdown-toggle::after{border:0;content:"";font-family:FontAwesome;margin-left:5px}.header .menu .navbar-expand .navbar-nav .dropdown-menu{position:absolute;min-width:280px;margin-top:0;background:#007791;border:0;border-radius:4px;padding:15px 20px}.header .menu .navbar-expand .navbar-nav .dropdown-menu::before{content:"";position:absolute;left:50%;top:-8px;margin-left:-8px;border:8px solid rgba(0,0,0,0);border-top-width:0;border-bottom-color:#007791;left:12%}.header .menu .navbar-expand .navbar-nav .dropdown-menu .dropdown-item{white-space:normal;padding:10px 0;display:block;outline:none;font-size:16px;line-height:19px;color:#f2f2f2;border-bottom:1px solid #338495;background-color:rgba(0,0,0,0) !important;transition:all .25s ease-in-out}.header .menu .navbar-expand .navbar-nav .dropdown-menu li:last-child .dropdown-item{border-bottom:0}.header .menu .navbar-expand .navbar-nav .dropdown-menu .dropdown-item:hover{background-color:rgba(0,0,0,0) !important;color:#9eeeff}.header .menu .navbar-expand .navbar-nav li.dropdown:hover>.dropdown-menu{display:block}.fixed-list{position:fixed;width:60px;bottom:50%;transform:translateY(50%);right:0;z-index:999}@keyframes custom-animation{0%{opacity:.4}50%{opacity:1}100%{opacity:.4}}.fixed-list__item{position:relative;display:flex;align-items:center;margin:5px 0}.fixed-list__item.active{animation:custom-animation 3s infinite ease-in-out}.fixed-list__image{position:relative;width:60px;height:60px;background-color:#007791;display:flex;align-items:center;justify-content:center;border-top-left-radius:6px;border-bottom-left-radius:6px;transition:all .3s ease-in-out;z-index:1}.fixed-list__image svg,.fixed-list__image img{width:36px;fill:#fff;height:auto}.fixed-list__title{height:60px;white-space:nowrap;background-color:#007791;color:#fff;display:flex;align-items:center;width:auto;font-size:16px;position:absolute;right:-400px;padding:15px 0 15px 15px;transition:all .3s ease-in-out;border-top-left-radius:6px;border-bottom-left-radius:6px}.fixed-list__item.active .fixed-list__title,.fixed-list__item:hover .fixed-list__title{right:60px}.fixed-list__item.active .fixed-list__image,.fixed-list__item:hover .fixed-list__image{border-radius:0}.fixed-list__item.reditem .fixed-list__image,.fixed-list__item.reditem .fixed-list__title{background-color:#f54141}.fixed-list__item.greenitem .fixed-list__image,.fixed-list__item.greenitem .fixed-list__title{background-color:#28a745}.fixed-list__item.blue .fixed-list__image,.fixed-list__item.blue .fixed-list__title{background-color:#36a1cb}.fixed-list__item.blue .fixed-list__image img{width:38px}.fixed-horizontal{display:flex;align-items:center;height:60px;transform:rotateZ(-90deg)}.fixed-horizontal__image{background-color:#007791;flex:0 0 60px;width:60px;height:60px;display:flex;align-items:center;justify-content:center;border-top-left-radius:6px}.fixed-horizontal__image svg{width:35px;height:auto}.fixed-horizontal__title{border-top-right-radius:6px;height:60px;background-color:#007791;white-space:nowrap;display:flex;align-items:center;padding-right:15px;color:#fff;margin-left:-1px}.b-burger{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0);z-index:999999;-webkit-overflow-scrolling:touch;-webkit-transition:opacity .4s ease,background .3s ease,-webkit-transform .6s ease;transition:opacity .4s ease,background .3s ease,-webkit-transform .6s ease;-o-transition:transform .6s ease,opacity .4s ease,background .3s ease;transition:transform .6s ease,opacity .4s ease,background .3s ease;transition:transform .6s ease,opacity .4s ease,background .3s ease,-webkit-transform .6s ease;pointer-events:auto !important;visibility:visible;overflow-x:hidden;-webkit-transform:translateZ(0);transform:translateZ(0);overflow:hidden}.b-burger__bg{width:100%;height:100%;display:flex;position:absolute;overflow:hidden}.b-burger__bg__image{position:sticky;will-change:transform;width:45%;height:100%;transition:transform .5s cubic-bezier(0.2, 0.51, 0.65, 0.95);overflow:hidden}.b-burger__bg__image img{width:100%;height:100%;object-fit:cover;object-position:center;transform:scale(1)}.b-burger__bg__image::after{position:absolute;content:"";width:100%;height:100%;left:0;top:0;background:rgba(0,119,145,.85);z-index:1}.b-burger__bg__black{position:relative;width:55%;height:100%;background:#007791;right:0;top:0}.b-burger__close{position:absolute;z-index:9;top:50px;right:180px}.b-burger__close img{width:22px;height:22px;-webkit-transition:all .4s ease;-o-transition:all .4s ease;transition:all .4s ease;-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center}.b-burger__close:hover img{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.b-burger__main{position:relative;z-index:3;padding-top:115px;display:flex;justify-content:flex-end;height:100vh}.b-burger__fullmenu{padding-left:120px;max-height:100%;overflow-y:auto;overflow-x:hidden}.b-burger__fullmenu__item{padding:15px 0}.b-burger__fullmenu__item h2{color:#fff;font-size:25px;line-height:29px;font-weight:500;margin-bottom:16px}.b-burger__fullmenu__item ul{list-style:none;padding:0 30px;margin:0}.b-burger__fullmenu__item ul li{max-width:345px;margin-bottom:13px}.b-burger__fullmenu__item ul li a{color:#fff;font-size:16px;line-height:21px;transition:all .25s ease-in-out;display:block}.b-burger__fullmenu__item ul li a:hover{color:#9eeeff}.b-burger__inner{position:relative;z-index:3;width:100%;min-height:100vh}.burger-enter-active .b-burger__inner,.burger-leave-active .b-burger__inner{opacity:1;-webkit-transform:translate(0);-ms-transform:translate(0);transform:translate(0);transition:transform .6s ease,opacity .4s ease}.burger-enter .b-burger__inner,.burger-leave-to .b-burger__inner{-webkit-transform:translateY(-100px);-ms-transform:translateY(-100px);transform:translateY(-100px);opacity:0}.burger-enter-active .b-burger__bg__black,.burger-leave-active .b-burger__bg__black{opacity:1;-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);transition:transform .5s cubic-bezier(0.65, 0.025, 0.67, 0.36),opacity 0s}.burger-enter .b-burger__bg__black,.burger-leave-to .b-burger__bg__black{opacity:0;-webkit-transform:translateX(100%);-ms-transform:translateX(100%);transform:translateX(100%);transition:transform .3s cubic-bezier(0.34, 0.615, 0.4, 0.985) .6s,opacity 0s .9s}.burger-enter-active .b-burger__bg__image,.burger-leave-active .b-burger__bg__image{opacity:1;-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);transition:transform .8s cubic-bezier(0.34, 0.615, 0.4, 0.985) .5s,opacity 0s .5s}.burger-enter .b-burger__bg__image,.burger-leave-to .b-burger__bg__image{opacity:0;-webkit-transform:translateX(100%);-ms-transform:translateX(100%);transform:translateX(100%);transition:transform .55s cubic-bezier(0.65, 0.025, 0.67, 0.36) .05s,opacity 0s .6s}.footer{width:100%;height:auto;background:#007791;padding:40px 0 35px 0}.footer_info{width:100%;display:flex;justify-content:space-between;flex-wrap:wrap}.footer_info_item{max-width:20%}.footer_info_item_title{font-weight:600;font-size:19px;line-height:24px;color:#fff;margin-bottom:13px}.footer_info_item_child{font-weight:normal;font-size:17px;line-height:125%;color:#fff;margin:9px 0}.footer_info_item_child a{color:#fff;transition:all .2s ease-in-out}.footer_info_item_child a:hover{color:#59e1ff}.footer_main{width:100%;color:#fff;display:flex;margin-top:30px;justify-content:space-between;align-items:center}.footer_main_item_1{display:flex}.footer_main_item_title_essential{font-style:normal;font-weight:500;font-size:20px;line-height:25px;margin-top:0;margin-left:10px}.footer_main_item_title_rest{width:210px;font-style:normal;font-weight:normal;font-size:15px;line-height:125%;color:#fff;margin-left:10px}.footer_main_item_2{width:40%;display:flex;margin:20px auto 0 auto;justify-content:space-between}.footer_copy{margin-top:30px;width:100%;display:flex;justify-content:space-between;align-items:center}.footer_copy_item_1{font-style:normal;font-weight:normal;font-size:16px;line-height:125%;color:#fff}.footer_copy_item_2{font-style:normal;font-weight:normal;font-size:16px;line-height:125%;color:#fff}.footer_copy_item_2 a{color:#59e1ff;transition:all .2s ease-in-out}.footer_copy_item_2 a:hover{color:#59e1ff}.footer_copy_main{margin-top:30px;border-top:1px solid #1495b1}.footer_main_main{margin-top:30px;border-top:1px solid #1495b1}.home{margin:0;padding:0}.home-banner{background-color:#fff;z-index:0;position:relative}.home-features{width:100%;height:200px;margin-top:-200px;background-color:#fff;padding:30px 0 30px}.home-statsyear{padding:60px 0 75px;background:#fff}.home-charts{padding:60px 0;background-color:#fff}.home-maps{padding-top:60px}.home-budgets{padding:60px 0}.home-internationals{padding:60px 0}.home-news{padding:60px 0 0;background-color:#fff}.headerSlider{display:block;height:calc(100vh - 180px);min-height:675px}.headerSlider-item{width:100%;position:relative;display:flex;flex-direction:column;overflow:hidden}.headerSlider-image{width:100%;height:calc(100vh - 180px);min-height:675px;position:relative}.headerSlider-image img{width:100%;height:100%;object-fit:cover;object-position:center}.headerSlider-image::after{content:"";position:absolute;width:100%;height:100%;top:0;left:0;background:rgba(8,25,43,.65)}.headerSlider-content{z-index:1;position:absolute;left:0;width:100%;height:100%;top:0;display:flex;align-items:center;padding-bottom:200px}.headerSlider-info{padding:30px 0}.headerSlider-info h2{font-weight:600;font-size:40px;line-height:51px;color:#fff;margin:0}.headerSlider-info p{color:#fff}.headerSlider-stats{padding:50px 0 80px;display:flex}.headerSlider-stats__item{margin-right:90px;color:#fff;width:275px}.headerSlider-stats__item h3{font-weight:600;font-size:30px;line-height:38px;margin-bottom:11px}.headerSlider-stats__item strong{display:block;font-weight:bold;font-size:34px;line-height:44px}.headerSlider-stats__item strong.green{color:#0bdf47}.headerSlider-stats__item strong.blue{color:#35bfdc}.headerSlider-stats__item strong.red{color:#ff234b}.headerSlider-stats__item span{display:block;font-weight:normal;font-size:22px;line-height:27px}.headerSlider .slick-dots{position:absolute;bottom:calc(50% + 100px);transform:translateY(50%);right:240px;width:auto;padding:0;margin:0;list-style:none;text-align:center}.headerSlider .slick-dots li{font-size:20px;line-height:25px;position:relative;display:block;width:100px;height:auto;margin:0;padding:0;cursor:pointer}.headerSlider .slick-dots li button{font-size:20px;line-height:25px;width:60px;height:auto;position:relative;padding:0;margin:25px 0}.headerSlider .slick-dots li:nth-child(1) button:before{font-family:"Open Sans",sans-serif;content:"2019";font-size:20px;line-height:25px;width:auto;height:auto;color:#fff;opacity:1}.headerSlider .slick-dots li:nth-child(2) button:before{font-family:"Open Sans",sans-serif;content:"2020";font-size:20px;line-height:25px;width:auto;height:auto;color:#fff;opacity:1}.headerSlider .slick-dots li:nth-child(3) button:before{font-family:"Open Sans",sans-serif;content:"2021";font-size:20px;line-height:25px;width:auto;height:auto;color:#fff;opacity:1}.headerSlider .slick-dots li.slick-active button:after{position:absolute;content:"";width:27px;background:#fff;height:3px;bottom:50%;transform:translateY(50%);right:-27px;border-radius:7px}.banner{position:relative;width:100%;height:calc(100vh - 180px);min-height:560px;padding-bottom:200px;display:flex;align-items:center;z-index:999}.banner-bg{position:absolute;top:0;left:0;width:100%;height:100%;z-index:-1}.banner-bg img{width:100%;height:100%;object-fit:cover;object-position:center}.banner-bg::before{content:"";position:absolute;width:100%;height:100%;top:0;left:0;background:rgba(8,25,43,.65)}.banner-main{width:100%;display:flex;align-items:center}.banner-info{width:100%}.banner-info>h2{font-weight:600;font-size:40px;line-height:51px;color:#fff;margin:0}.banner-info>p{color:#fff;margin-right:10%}.banner-info>p>a{color:#fff;display:block}.banner-stats{padding:30px 0 60px;display:flex}.banner-stats__item{margin-right:90px;color:#fff;width:275px}.banner-stats__item:last-child{margin-right:0}.banner-stats__item h3{font-weight:600;font-size:30px;line-height:38px;margin-bottom:11px}.banner-stats__item strong{display:block;font-weight:bold;font-size:34px;line-height:44px}.banner-stats__item strong.green{color:#0bdf47}.banner-stats__item strong.yellow{color:#ffd600}.banner-stats__item strong.red{color:#ff234b}.banner-stats__item span{display:block;font-weight:normal;font-size:22px;line-height:27px}.banner-control{display:flex;align-items:flex-start;flex-direction:column;position:relative}.banner-control__years span{cursor:pointer;display:flex;align-items:center;margin-bottom:30px;font-family:"Quarion",sans-serif;font-style:normal;font-weight:600;font-size:20px;line-height:25px;text-transform:uppercase;color:#fff}.banner-control__years span:last-child{margin-bottom:0}.banner-control__years span::after{content:"";margin-left:12px;width:28px;height:3px;border-radius:7px;background:rgba(0,0,0,0)}.banner-control__years span.active::after{background:#fff}.banner-control__all{color:#fff;font-size:19px;font-weight:400;margin-top:50px;border-bottom:1px solid}.banner-control__all:hover{color:#fff}.banner-salary-icon-tooltip{position:absolute;right:110px;top:10px;bottom:10px;display:flex;align-items:center;white-space:nowrap;overflow:hidden;width:0;transition:all .3s ease-in-out;z-index:-1;padding-left:30px}.banner-salary-icon-tooltip span{display:block;line-height:58px;padding-left:2.5rem;padding-right:1rem;color:#35bfdc;font-size:20px;font-weight:600;border-left:none;border-radius:0 20px 0px 0}.banner-salary-icon:hover .banner-salary-icon-tooltip{width:315px}.banner-salary-icon{width:90px;height:90px;border-radius:50%;border:2px solid #35bfdc;background-color:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:fixed;bottom:25px;right:25px;z-index:999;cursor:pointer;transition:all .2s ease-in-out}.banner-salary-icon:hover::before{animation:none;visibility:hidden;opacity:0}.banner-salary-icon:before{content:"";color:#35bfdc;position:absolute;z-index:0;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);-ms-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);display:block;width:90px;height:90px;background:#35bfdc;border-radius:50%;-webkit-animation:pulse-border 1500ms ease-out infinite;animation:pulse-border 1500ms ease-out infinite;transition:all .2s ease-in-out}@-webkit-keyframes pulse-border{0%{-webkit-transform:translateX(-50%) translateY(-50%) translateZ(0) scale(1);transform:translateX(-50%) translateY(-50%) translateZ(0) scale(1);opacity:1}100%{-webkit-transform:translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);transform:translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);opacity:0}}@keyframes pulse-border{0%{-webkit-transform:translateX(-50%) translateY(-50%) translateZ(0) scale(1);transform:translateX(-50%) translateY(-50%) translateZ(0) scale(1);opacity:1}100%{-webkit-transform:translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);transform:translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);opacity:0}}.features-item{display:block}.features-item__image{margin-bottom:20px;height:60px}.features-item__image--animated{animation:bounce 2s infinite}.features-item__title{font-size:17px;line-height:21px;color:#f2f2f2;padding-right:10px;display:block}@-webkit-keyframes bounce{0%,20%,50%,80%,100%{-webkit-transform:translateY(0)}40%{-webkit-transform:translateY(-20px)}60%{-webkit-transform:translateY(-10px)}}@-moz-keyframes bounce{0%,20%,50%,80%,100%{-moz-transform:translateY(0)}40%{-moz-transform:translateY(-20px)}60%{-moz-transform:translateY(-10px)}}@-o-keyframes bounce{0%,20%,50%,80%,100%{-o-transform:translateY(0)}40%{-o-transform:translateY(-20px)}60%{-o-transform:translateY(-10px)}}@keyframes bounce{0%,20%,50%,80%,100%{transform:translateY(0)}40%{transform:translateY(-20px)}60%{transform:translateY(-10px)}}.statsyear-item{display:flex;flex-direction:column;justify-content:space-between;width:100%;height:192px;padding:20px 30px;background:#fff;box-shadow:0px 4px 14px rgba(59,69,83,.15);border-radius:4px}.statsyear-item__info{display:flex;justify-content:space-between}.statsyear-item__info--title h3{font-weight:500;font-size:20px;line-height:25px;color:#007791;margin-bottom:10px}.statsyear-item__info--title span{display:block;font-weight:600;font-size:28px;line-height:35px}.statsyear-item__info--title span.green{color:#0bdf47}.statsyear-item__info--title span.blue{color:#35bfdc}.statsyear-item__info--title span.red{color:#ff234b}.statsyear-item__info--title span.yellow{color:#ffc800}.statsyear-item__info--title small{font-size:19px;line-height:23px;color:#a5a5a5}.statsyear-item__url span{font-size:17px;line-height:21px;color:#393c40}.highcharts-credits{display:none}.counters{width:100%;padding:45px 0 60px;background:#f7f8fc}.counters-item{width:100%;height:240px;border:2px solid #a7efff;border-radius:4px;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 30px;text-align:center}.counters-item__icon{height:55px;margin-bottom:10px}.counters-item__count{font-weight:600;font-size:34px;line-height:31px;color:#393c40;margin-bottom:10px}.counters-item__count small{display:block;font-size:20px;line-height:22px}.counters-item__title{height:40px;font-weight:normal;font-size:17px;line-height:19px;color:#393c40}.counters-main .row>div:first-child .counters-item{cursor:pointer;transition:all .25s ease-in-out}.counters-main .row>div:first-child .counters-item:hover{background:#ddffe6}.budgets-item{width:100%;height:376px;background:#fff;box-shadow:0px 4px 14px rgba(59,69,83,.05);padding:30px 30px;border-radius:4px}.budgets-item__head{display:flex;padding-bottom:45px;border-bottom:1px solid #e9eef4}.budgets-item__head--info{width:100%;max-width:300px}.budgets-item__head--info h3{font-weight:500;font-size:22px;line-height:27px;color:#007791;margin-bottom:5px}.budgets-item__head--info span{display:block;font-weight:600;font-size:36px;line-height:45px}.budgets-item__head--info span.green{color:#0bdf47}.budgets-item__head--info span.red{color:#ff234b}.budgets-item__head--info span.blue{color:#35bfdc}.budgets-item__head--info small{font-weight:normal;font-size:20px;line-height:24px;color:#393c40}.budgets-item__body{padding-top:30px}.budgets-item__body ul{list-style:none;margin:0;padding:0;display:flex;flex-wrap:wrap}.budgets-item__body ul li{flex:0 0 50%;max-width:50%;font-weight:500;font-size:18px;line-height:22px;color:#393c40;padding-right:30px;margin-bottom:23px}.budgets-item__body ul li span{font-weight:normal;font-size:17px;line-height:21px;color:#7f838a;margin-right:10px}.budgets-item__body ul li strong{font-weight:500;color:#007791}.maps-main{width:100%;background-color:#fff;padding:30px 0;margin:60px 0}.maps-info__head{display:flex;padding-bottom:30px}.maps-info__head--info{width:100%;max-width:300px}.maps-info__head--info h3{font-weight:500;font-size:22px;line-height:27px;color:#007791;margin-bottom:5px}.maps-info__head--info span{display:block;font-weight:600;font-size:36px;line-height:45px}.maps-info__head--info span.green{color:#0bdf47}.maps-info__head--info span.red{color:#ff234b}.maps-info__head--info span.blue{color:#35bfdc}.maps-info__head--info small{font-weight:normal;font-size:20px;line-height:24px;color:#393c40}.maps-info__body{padding-top:30px}.maps-info__body ul{list-style:none;margin:0;padding:0}.maps-info__body ul li{font-weight:500;font-size:18px;line-height:22px;color:#393c40;padding-right:30px;margin-bottom:23px}.maps-info__body ul li span{font-weight:normal;font-size:17px;line-height:21px;color:#7f838a;margin-right:10px}.maps-info__body ul li strong{font-weight:500;color:#007791}.maps-uzb{width:100%;position:absolute;top:-60px}.maps-uzb path{stroke:#fff;stroke-width:1px}.interrating-item__head{display:flex;align-items:center;justify-content:space-between;width:100%;height:70px;padding:0 30px;background:#dbf9ff;border-radius:4px;margin-bottom:15px;display:none}.interrating-item__head span{font-size:20px;line-height:24px;color:#007791}.interrating-item__body{width:100%;background:#fff;box-shadow:0px 4px 14px rgba(59,69,83,.05);border-radius:4px;padding:30px}.interrating-item__block{margin-bottom:45px}.interrating-item__block>h3{font-weight:normal;font-size:18px;line-height:21px;height:44px;color:#393c40;overflow:hidden;margin-bottom:15px}.interrating-item__block:last-child{margin-bottom:0}.interrating-item__info{display:flex;justify-content:space-between}.interrating-item__info--left{display:flex;width:100%}.interrating-item__info--item{width:100%;max-width:150px;padding-right:30px}.interrating-item__info--item strong{display:block;font-weight:600;font-size:20px;line-height:25px;color:#007791;margin-bottom:10px}.interrating-item__info--item span{display:block;font-size:17px;line-height:21px;color:#7f838a}.interrating-item__info--right{display:flex}.useful-slider{padding-bottom:30px}.useful-slider .slick-slider{margin:0 -15px}.useful-slider .slick-slide{text-align:center;padding-right:15px;padding-left:15px}.useful-slider .slick-prev,.useful-slider .slick-next{width:28px;height:28px;top:calc(50% - 15px)}.useful-slider .slick-prev{left:-20px}.useful-slider .slick-next{right:-20px}.useful-slider .slick-prev:before,.useful-slider .slick-next:before{font-size:28px;color:#007791}.useful-item{background:#fff;height:180px;border-radius:4px;position:relative;padding:0 15px;margin-bottom:30px;text-align:center;box-shadow:0px 4px 14px rgba(59,69,83,.05);border:1px solid #fff;transition:all .25s ease-in-out}.useful-item__img{height:80px;text-align:center;display:grid;justify-content:center;align-content:center;padding-top:15px}.useful-item__img img{width:auto;max-width:160px;max-height:60px}.useful-item__content span{font-weight:400;color:#393c40;font-size:16px;line-height:19px;padding-top:10px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical}.useful-item:hover{box-shadow:none;border:1px solid #a7efff}.videos-item{position:relative;display:flex;padding-right:30px;padding-bottom:30px;margin-bottom:45px}.videos-item__image{position:relative;width:100%;height:265px;border-radius:4px;overflow:hidden}.videos-item__image::before{content:"";position:absolute;width:100%;height:100%;top:0;left:0;background-color:rgba(1,52,64,.4)}.videos-item__image::after{position:absolute;bottom:50%;right:50%;transform:translate(50%, 50%);font:normal normal normal 14px/1 FontAwesome;content:"";font-size:44px;color:#f7f8fc}.videos-item__image img{width:100%;height:100%;object-fit:cover;object-position:center}.videos-item__info{position:absolute;right:0;bottom:0;width:calc(100% - 30px);padding:10px 20px;height:75px;display:flex;align-items:center;background-color:#fff;box-shadow:0px 4px 14px rgba(59,69,83,.05)}.videos-item__info h2{font-weight:normal;font-size:17px;line-height:21px;color:#393c40;margin:0;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;transition:all .25s ease-in-out}.videos-item:hover .videos-item__info h2{color:#007791}.pages{margin-bottom:60px}.pages-title{width:100%;display:flex;align-items:center;margin-bottom:15px;justify-content:space-between}.pages-title .custom-select{width:auto}.pages-title--side{margin-bottom:15px}.pages-title h2{font-weight:600;font-size:22px;line-height:25px;color:#393c40;margin:0}.pages-main{background:#fff;box-shadow:0px 2px 15px rgba(59,69,83,.02);border-radius:4px;padding:30px;min-height:400px}.pages-side__menu ul{list-style:none;margin:0;padding:0}.pages-side__menu ul li{font-size:17px;line-height:21px;color:#393c40;cursor:pointer;margin-bottom:12px}.pages-side__menu ul li.active{color:#007791}.pages-side__menu ul li a{display:block;font-size:17px;line-height:21px;color:#393c40}.pages-side__menu ul li a.active{color:#007791}.pages-side__banner{width:100%;background:#fff;box-shadow:0px 2px 15px rgba(59,69,83,.02);height:375px;overflow:hidden;border-radius:4px}.pages-side__banner img{width:100%;height:100%;object-fit:cover;object-position:center}.pages-content th,.pages-content td{padding:5px 10px;border:1px solid #dedede}.breadcrumb{margin:0;padding:30px 0;background-color:rgba(0,0,0,0)}.breadcrumb-item a,.breadcrumb-item span{font-weight:normal;font-size:18px;line-height:22px;color:#393c40}.tab-control .btn{border:1px solid #007791;padding:5px 10px 7px;outline:none;box-shadow:none}.tab-control .btn svg{height:22px;fill:#007791}.tab-control .btn.active{background:#007791}.tab-control .btn.active svg{fill:#fff}.load-more{width:100%;height:42px;background:rgba(0,0,0,0);border:1px solid #82cad9;margin-top:30px;color:#007791;transition:all .25s ease-in-out}.load-more:hover{background:#ecfcff}.pages-main table{width:100% !important}.indicator-report{padding:0 10px 0 10px}.pages-main table td{border:1px solid #dedede !important;padding:10px 15px !important}.pages-main table td>p{margin:0}.news-view .content img{max-width:100%;height:auto !important}.regions-maps{margin-bottom:60px}.regions-chart{margin-bottom:60px}.regions-tabs .nav{margin-bottom:15px}.regions-tabs .nav-item{margin-right:15px}.regions-tabs .nav-pills .nav-link{padding:6px 15px;border:1px solid #007791;color:#007791}.regions-tabs .nav-pills .nav-link.active,.regions-tabs .nav-pills .show>.nav-link{color:#fff;background-color:#007791}.registration-image{width:100%}.registration-image img{width:100%;height:100%;object-fit:cover;object-position:center}.profile-side{width:100%;background:#fff;box-shadow:0px 2px 15px rgba(59,69,83,.02);border-radius:4px;padding:25px 20px;min-height:400px}.profile-side__head{margin-bottom:15px}.profile-side__image{width:160px;height:160px;border-radius:50%;overflow:hidden;margin:0 auto 10px}.profile-side__image img{width:100%;height:100%;object-fit:cover;object-position:center}.profile-side__title{text-align:center}.profile-side__title>h4{margin-bottom:5px;font-size:17px;color:#007791;font-weight:400}.profile-side__title>h2{font-weight:600;font-size:21px;line-height:27px;color:#393c40;margin-bottom:5px}.profile-side__title span,.profile-side__title a{cursor:pointer;font-size:14px;color:#999;margin-left:-17px;transition:opacity .2s ease-in-out}.profile-side__title span svg,.profile-side__title a svg{opacity:0;transition:opacity .2s ease-in-out}.profile-side__title span:hover,.profile-side__title a:hover{color:#007791}.profile-side__title span:hover svg,.profile-side__title a:hover svg{opacity:1}.profile-side__body{margin-bottom:25px}.profile-side__body__item{font-size:16px;line-height:20px;padding:10px 0;border-bottom:1px dashed #d4e8ec;display:flex;justify-content:space-between}.profile-side__body__item:last-child{border-bottom:0}.profile-side__body__item strong{font-weight:500;color:#266c7b}.profile-side__body__item span{font-size:15px;font-weight:400;text-align:right}.profile-side__footer .btn{width:100%;height:45px;font-size:17px;background-color:#007791;border-color:#007791;color:#fff;border-radius:4px}.profile-nav{display:flex;align-items:center;justify-content:space-between}.profile-nav__left{display:flex;align-items:center}.profile-nav__left a,.profile-nav__left button{margin-right:20px;background:rgba(0,0,0,0)}.profile-nav__right{display:flex}.profile-nav__btn{padding:0 20px;height:41px;font-size:17px;border:1px solid #007791;background-color:rgba(0,0,0,0);color:#007791;border-radius:4px;display:flex;align-items:center}.profile-nav__btn.active{background-color:#007791;color:#fff}.profile-nav__noti{position:relative;border:0;padding:0 7px;height:41px;border-radius:4px;display:flex;align-items:center}.profile-nav__noti__icon{width:28px;fill:#007791}.profile-nav__noti__count{position:absolute;display:flex;font-size:11px;line-height:11px;background:#35bfdc;color:#fff;padding:3px 5px;border-radius:10px;right:-1px;bottom:-1px}.profile-nav__noti.active{background-color:#007791}.profile-nav__noti.active .profile-nav__noti__icon{fill:#fff}.notifications{width:100%;background:#fff;box-shadow:0px 2px 15px rgba(59,69,83,.02);border-radius:4px;padding:15px 20px;min-height:400px;margin:30px 0;overflow:hidden}.notifications-title{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;margin-bottom:15px}.notifications-title h2{font-size:20px;line-height:27px;color:#323437;margin:0}.notifications-title .btn{background-color:rgba(0,0,0,0);color:#007791;border:1px solid #cdd3df}.notifications-all__item{width:100%;padding:15px 0;line-height:20px;display:flex;align-items:center;flex-wrap:wrap;white-space:normal;border-bottom:1px solid #eee}.notifications-all__item p{margin:0}.notifications-all__item p:last-child{margin:0;width:100%}.notifications-all__item span{font-size:16px;color:#323437}.notifications-all__item span.date{float:right;display:block;background:#007791;padding:0 5px;font-size:13px;border-radius:4px;margin-left:5px;color:#fff}.notifications-all__item span.new{display:block;float:left;width:10px;height:10px;border-radius:50%;background-color:#35bfdc;margin-right:10px;margin-top:4px}.notifications-all__item:last-child{border:0}.board{padding:60px 0}.board-item{width:100%;display:block;border-radius:10px;background-size:cover;background-position:center;overflow:hidden;margin-bottom:28px;padding:15px 20px 10px;-webkit-transition:all .3s ease;transition:all .3s ease}.board-item.disabled{pointer-events:none}.board-item:hover{box-shadow:rgba(0,0,0,.15) 0 4px 20px 0;-webkit-transform:translateY(-10px);-ms-transform:translateY(-10px);transform:translateY(-10px);-webkit-transition:all .3s ease;transition:all .3s ease}.board-item__head{position:relative;width:100%;height:175px}.board-head__count{position:absolute;width:100%;left:0;right:0;bottom:20px;text-align:center}.board-head__count strong{display:block;font-weight:500;font-size:48px;line-height:54px;color:#404040}.board-head__count span{display:block;font-weight:normal;font-size:16px;line-height:20px;color:#404040}.board-head__status{position:absolute;top:0;right:0}.board-head__status span{display:flex;align-items:center;font-weight:400;font-size:14px;line-height:17px;letter-spacing:-0.015em;height:30px;background:#4b4b4b;border-radius:21px;padding:0 12px;color:#fff}.board-item.active .board-head__status span{background:#58e756}.board-item.archive .board-head__status span{background:#42a3da}.board-head__date{color:#404040;display:flex;flex-direction:column}.board-head__date span{line-height:20px}.board-body__item{position:relative;width:100%;height:70px;border-top:.56px solid rgba(0,0,0,.1);display:flex;justify-content:space-between;align-items:center}.board-body__item:first-child{border:0}.board-body__item strong{font-weight:500;font-size:16px;line-height:20px;color:#404040}.board-body__item i.fa{position:absolute;bottom:50%;right:50%;transform:translate(50%, 50%);font-size:16px;color:#e5e5e5}.board-body__item>div{text-align:right}.board-body__item>div>span{display:flex;padding:2.5px 0;justify-content:flex-end;font-weight:500;font-size:14px;line-height:17px;color:#504b4b}.board-body__item>div>span i{font-weight:400;font-style:italic;margin-right:12px}.board-body__item>span{font-size:14px;line-height:17px;color:#404040}.board-body__item>div>strong{display:flex;justify-content:flex-end;font-weight:600;font-size:18px;line-height:18px;color:#404040}.board-body__item>div>i{color:#404040;font-style:italic;font-size:14px;line-height:14px;display:block}.board-body__item.active i.fa{color:#58e756}.initiatives-form{width:100%;background:#fff;box-shadow:0px 2px 15px rgba(59,69,83,.02);border-radius:4px;overflow:hidden;padding:25px 20px}.initiatives-form .form-upload{padding:15px 16px !important;background:#fff !important;border:1px solid #ced4da !important;border-radius:4px !important;margin:10px 0 25px}.initiatives-form .mainMessage{margin-bottom:0}.initiatives-form .beforeUpload .icon{width:55px !important}.initiatives-form .beforeUpload .icon line,.initiatives-form .beforeUpload .icon circle,.initiatives-form .beforeUpload .icon polyline,.initiatives-form .beforeUpload .icon path{stroke:#007791 !important}.initiatives-form .imgsPreview .imageHolder .plus{color:#007791 !important;background:#fff !important;border-radius:50%;font-size:24px !important;height:30px;width:30px;display:flex;text-align:center;align-items:center;justify-content:center;border:1px dashed;line-height:26px !important;position:absolute;right:-40px !important;bottom:50% !important;transform:translateY(50%) !important}.initiatives-form .imgsPreview .imageHolder .delete{background:#ff2a2a}.initiatives-form .imgsPreview .imageHolder .delete .icon{width:63% !important;height:63% !important;margin:5px auto !important}.initiatives-form__btn{width:175px;height:45px;font-size:17px;background-color:#007791;border-color:#007791;color:#fff;border-radius:4px}.initiatives-form__btn:hover{color:#fff}.initiatives{margin:30px 0;overflow:hidden}.initiatives-filter{display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #d4ecff;padding-bottom:30px}.initiatives-filter__search{width:100%;display:flex}.initiatives-filter__search label{margin:0}.initiatives-filter__search__icon{height:22px;margin-right:15px;margin-top:-2px}.initiatives-filter__search__input{width:100%;border:none;outline:none;box-shadow:none;background:rgba(0,0,0,0)}.initiatives-filter__options{display:flex;align-items:center;flex:0 0 auto}.initiatives-filter__options__item{max-width:300px;font-size:15px;margin-left:15px}.initiatives-filter__options__item__year{max-width:210px}.initiatives-filter .vue-treeselect__control{padding-left:10px;padding-right:10px;height:38px;border:1px solid #cdd6e2;border-radius:4px}.initiatives-step{display:flex;flex-wrap:wrap;border-bottom:1px solid #d4ecff;margin-bottom:15px}.initiatives-step__all{text-align:center;font-style:normal;font-weight:normal;font-size:20px;line-height:24px;color:#000;margin-bottom:30px}.initiatives-step__all .day{color:#f54141;font-weight:600}.initiatives-step__all .hour{color:#f54141;font-weight:600}.initiatives-step__item{flex:0 0 25%;max-width:25%;padding:22px 0;text-align:center;cursor:pointer}.initiatives-step__item h3{font-weight:600;font-size:21px;line-height:24px;color:#000;margin-bottom:15px}.initiatives-step__item h4{font-weight:normal;font-size:18px;line-height:20px;color:#000;margin-bottom:15px}.initiatives-step__item p{font-weight:normal;font-size:17px;line-height:20px;color:#3e3e3e;margin-bottom:15px;opacity:.6}.initiatives-step__item p span{opacity:1}.initiatives-step__item span{display:block;font-weight:normal;font-size:18px;line-height:22px;color:#3e3e3e;margin:0;opacity:.6}.initiatives-step__item.active{background:#ecf2f7}.initiatives-item{display:block;position:relative;border-radius:6px;overflow:hidden;background:#fff;box-shadow:0 2px 15px rgba(59,69,83,.02);margin-bottom:30px;cursor:pointer}.initiatives-item__image{width:100%;height:350px;position:relative}.initiatives-item__image::before{top:0;left:0;width:100%;height:100%;content:"";display:block;opacity:.3;z-index:1;position:absolute;transition:opacity .3s ease-in-out;pointer-events:auto;background-color:#000}.initiatives-item__image img{width:100%;height:100%;object-fit:cover;object-position:center}.initiatives-item:hover .initiatives-item__image::before{opacity:.5}.initiatives-item__info{position:absolute;width:100%;height:100%;top:0;left:0;display:flex;flex-direction:column;justify-content:space-between;padding:25px 20px;z-index:1}.initiatives-item__info__head{display:flex;align-items:center;justify-content:space-between}.initiatives-item__info__head>span{display:block;color:rgba(255,255,255,.5);font-size:14px}.initiatives-item__info__head>span.badge{font-size:15px;color:#fff;background:#007791;font-weight:500;padding:5px 10px;transition:opacity .3s ease-in-out;opacity:0}.initiatives-item__info__title h2{font-weight:500;font-size:23px;line-height:27px;color:#fff;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;margin-bottom:15px}.initiatives-item__info__title span{display:block;font-size:14px;line-height:15px}.initiatives-item__info__title span.date{color:#e2e2e2;margin-bottom:15px}.initiatives-item__info__footer{display:flex;align-items:flex-end;justify-content:space-between}.initiatives-item__info__footer>span{color:#57d3ef;font-size:14px;line-height:15px;display:flex;align-items:center}.initiatives-item__info__footer>span.passed{color:#80ffa1}.initiatives-item__info__footer>span.not_passed{color:#ff5151}.initiatives-item__info__footer>span>svg{margin-top:-3px;margin-right:5px}.initiatives-item:hover .initiatives-item__info__head span.badge{opacity:1}.initiatives-view{box-shadow:0px 2px 15px rgba(59,69,83,.02);border-radius:4px;min-height:280px;margin-bottom:20px}.initiatives-view__maps{margin-bottom:15px}.initiatives-view__content{font-size:17px}.initiatives-view__images>h3{font-size:19px;margin-bottom:15px;color:#999;display:flex;align-items:center}.initiatives-view__images>h3 a{cursor:pointer;font-size:14px;color:#999;margin-left:15px;padding-top:1px;transition:opacity .2s ease-in-out}.initiatives-view__images>h3 a:hover{color:#007791}.initiatives-view__images__item{display:block;width:100%;height:180px;border-radius:4px;overflow:hidden;margin-bottom:30px}.initiatives-view__images__item img{width:100%;height:100%;object-fit:cover;object-position:center}.initiatives-side{background:#fff;box-shadow:0px 2px 15px rgba(59,69,83,.02);border-radius:4px;padding:30px;margin-bottom:30px}.initiatives-side__district{display:block;font-size:17px;margin-bottom:5px;color:#999}.initiatives-side__status{margin-bottom:25px;display:flex;justify-content:space-between;align-items:center}.initiatives-side__status span{display:block;color:#57d3ef;font-size:15px;line-height:17px;font-weight:500}.initiatives-side__status span.not_passed{color:#ff5151}.initiatives-side__status span.passed{color:#5de480}.initiatives-side__status .btn{height:38px;font-size:17px;background-color:#007791 !important;border-color:#007791 !important;color:#fff;border-radius:4px;line-height:18px;padding:0 20px;outline:none;box-shadow:none !important}.initiatives-side__currency{margin-bottom:15px}.initiatives-side__currency>h3{font-size:17px;margin-bottom:5px;color:#999}.initiatives-side__currency>span{font-weight:600;font-size:18px;line-height:29px;color:#007791}.initiatives-side__user{display:flex;align-items:center;margin-bottom:25px}.initiatives-side__user svg{margin-right:10px;height:16px;fill:#007791}.initiatives-side__vote{display:flex;align-items:center;justify-content:space-between}.initiatives-side__vote__info>h3{font-size:17px;margin-bottom:5px;color:#999}.initiatives-side__vote__info>span{font-weight:500;font-size:17px;line-height:21px;display:flex;color:#393c40;padding:3px 0}.initiatives-side__vote__info>span.vote{font-size:15px}.initiatives-side__vote__info>span .badge{font-weight:500;font-size:14px;margin-left:5px}.initiatives-side__vote__voice img.image{width:50px;transition:all .3s ease-in-out;filter:grayscale(100%);opacity:1}.initiatives-side__vote__voice.active a{cursor:auto;pointer-events:none}.initiatives-side__vote__voice.active img{transform:rotateZ(30deg);filter:grayscale(0);opacity:1}.initiatives .to-back{display:flex;align-items:center;font-size:16px;color:#393c40;font-weight:600;padding:15px 25px 15px 15px;margin-bottom:15px;transition:all .3s ease-in-out;border-radius:4px}.initiatives .to-back::before{content:"";width:25px;height:2px;margin-top:1px;background-color:#147691;margin-right:10px}.initiatives .to-back:hover{background-color:#ecf2f7}.initiatives-side__win__title{font-weight:600;font-size:21px;line-height:24px;color:#393c40;margin-bottom:16px}.initiatives-side__win__item p{font-weight:500;font-size:17px;line-height:21px;color:#393c40}.initiatives-side__win__item p:last-child{margin:0}.initiatives-side__win__item p span{font-weight:600}.initiatives-side__win__item p a.info{display:flex;width:100%;align-items:center;border:1px solid #007791;height:48px;color:#fff;justify-content:center;border-radius:6px;font-size:16px;line-height:16px;margin-right:10px;outline:none;background:#007791;box-shadow:none;margin-top:20px}.initiatives-side__win__item .b-icon.bi{margin-right:5px}.public-budget__item{display:flex;padding-bottom:20px;margin-bottom:20px;border-bottom:1px solid #d3f7ff}.public-budget__item__image{max-width:145px;flex:0 0 145px;margin-right:20px;overflow:hidden;border-radius:4px;background-color:#fff}.public-budget__item__image img{width:100%;height:100%;object-fit:contain;object-position:center}.public-budget__item__info{width:100%}.public-budget__item__info h3{font-weight:500;font-size:21px;line-height:25px;color:#393c40;margin-bottom:10px}.public-budget__item__info p{font-size:17px;line-height:23px;margin-bottom:15px}.public-budget__item__info a{display:block;color:#35bfdc;transition:all .2s ease-in-out}.public-budget__item__info a:hover{color:#007791}.public-budget__item:last-child{margin:0;padding:0;border:0}.intable{width:100%}.intable table{width:100%}.intable table thead{background:#f0f7fe;border-radius:4px}.intable table thead tr th{padding:15px;font-weight:normal;font-size:16px;line-height:19px;line-height:135%;color:#007791}.intable table tbody tr{transition:all .25s ease-in-out;border-bottom:1px dashed #e8eaed;cursor:pointer}.intable table tbody tr td{padding:15px;line-height:19px}.intable table tbody tr:last-child{border-bottom:0}.intable table tbody tr:hover{background:#f5f5f5}.glasses{display:flex;align-items:center;margin-left:15px}.glasses .dropdown-menu{padding:15px 20px;cursor:auto;margin-top:10px;right:-60px !important;left:auto !important;transform:translate(0, 30px) !important}.glasses .dropdown-menu::before{content:"";position:absolute;top:-15px;border:8px solid rgba(0,0,0,0);border-bottom:8px solid #fff;right:60px}.glasses .dropdown-toggle{background:none !important;border:none;box-shadow:none !important;outline:none;padding:0;display:flex;align-items:center;color:#007791 !important;font-size:20px}.glasses .dropdown-toggle::after{width:auto;height:auto;border:0;font-family:FontAwesome !important;content:""}.glasses-title{font-size:20px;color:#007791;margin:0;padding-bottom:10px;border-bottom:1px solid rgba(0,0,0,.15)}.glasses-subtitle{font-size:17px;color:#7e7e7e;padding-top:5px;display:block}.glasses-images{width:220px;padding:15px 0}.glasses-images__row{display:flex;flex-wrap:wrap;margin-right:-2.5px;margin-left:-2.5px}.glasses-images__col{flex:0 0 25%;max-width:25%;padding:0 2.5px}.glasses-images__item{width:100%;height:50px;color:#fff;display:flex;align-items:center;justify-content:center;font-size:27px;border:2px solid #007791;cursor:pointer}.glasses-images__item--normal{background-color:#007791}.glasses-images__item--white{background-color:#dedede}.glasses-images__item--dark{background-color:#3e3e3e}.glasses-images__item--noImage{border-color:#007791;background-repeat:no-repeat;background-position:12px center}.glasses-images__item--noImage.setImage{background-position:-40px center}.specialDark{filter:grayscale(100%) invert(100%)}.specialDark img{filter:grayscale(100%) invert(100%)}.specialDark .home-slider .item.swiper-slide .scale-in{filter:grayscale(100%) invert(100%)}.specialNoImage img{display:none !important}.specialNoImage div{background-image:none !important}.specialWhite{filter:grayscale(100%)}.sv-dd ul.dropdown-menu{margin-top:0;border:1px solid #ecf2f7}.form-group{margin-bottom:15px}.form-control{height:45px;padding:10px 15px;border-radius:4px;outline:none;box-shadow:none;resize:none}.form-control:focus{box-shadow:none}.form .btn-group{width:100%;margin-top:15px}.form .btn-group .btn{width:100%;height:50px;font-size:17px;background-color:#007791;border-color:#007791;color:#fff;border-radius:4px}.form-urls{display:flex;align-items:center;justify-content:space-between;margin-top:15px}.form-urls a{color:#393c40;transition:all .25s ease-in-out}.form-urls a:hover{color:#007791}.form .custom-select{height:45px;padding:0 15px;border-radius:0;outline:none;box-shadow:none}.form .custom-select:focus{box-shadow:none}.popup{position:fixed;width:100vw;height:100vh;top:0;left:0;display:flex;align-items:center;justify-content:center;background-color:rgba(0,0,0,.85);z-index:99999}.popup-main{position:relative;width:100%;max-width:445px;min-height:220px;padding:20px 30px 30px;background-color:#fff;border-radius:4px}.popup-main--orginfo{max-width:1700px}.popup-main--orginfo .intable{overflow-y:auto}.popup-main--orginfo .popup-body{max-height:640px;overflow-y:auto}.popup-main--excitedNumber{min-height:150px;display:flex;align-items:center;text-align:center;padding:20px 30px 10px}.popup-main--excitedNumber .popup-head__title{color:#ff4747}.popup-main--update{max-width:775px}.popup-main--offer{max-width:675px}.popup-main__close{cursor:pointer;position:absolute;display:flex;align-items:center;justify-content:center;width:30px;height:30px;font-size:30px;color:#007791;top:5px;right:5px}.popup-main--registration{width:875px}.popup-main--userinfo{max-width:1200px}.popup-main__begin{max-width:585px}.popup-head{margin-bottom:15px;display:flex;align-items:center;justify-content:flex-start}.popup-head__login{display:block}.popup-head .custom-select{width:auto;margin-right:20px}.popup-head__title{font-weight:600;font-size:25px;line-height:28px;color:#393c40;margin:0 3rem 0 0}.popup-begin{width:100%;text-align:center;padding:0 30px}.popup-begin img{margin-bottom:30px}.popup-begin h2{font-weight:600;font-size:24px;line-height:140%;color:#262626;margin-bottom:15px}.popup-begin p{font-weight:normal;font-size:19px;line-height:140%;text-align:center;color:#262626}.popup-begin__btns{padding:15px 0;width:100%;display:flex;justify-content:space-between}.popup-begin__btns .btn{flex:0 0 calc(50% - 15px);max-width:calc(50% - 15px);background:#007791;border:.6px solid #007791;height:50px;display:flex;align-items:center;justify-content:center;border-radius:6px;font-weight:600;font-size:13px;line-height:16px;text-transform:uppercase;color:#fff}.popup-begin__btns .btn-close{background:#fff;color:#007791}.pages-side__menu,.sidebar-block{background:#fff;box-shadow:0px 2px 15px rgba(59,69,83,.02);border-radius:4px;padding:20px 30px;margin-bottom:30px}.title-params.selects{display:flex}.title-params.selects select{margin-left:30px;width:150px}.public-budget .title-params.selects select{width:300px}.sidebar__href a{font-size:17px;line-height:21px;color:#393c40;display:block;animation:textColor 2s infinite}@keyframes textColor{0%{color:#ff7ed7}50%{color:#007791}100%{color:#ff7ed7}}.sidebar__banner2{margin-bottom:15px;width:100%;height:auto}.sidebar__banner2 img{width:100%;height:auto}',
        "",
      ]),
        (t.exports = i);
    },
    function (t, n, e) {
      var i = e(525);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      (0, e(37).default)("46552d81", i, !0, { sourceMap: !1 });
    },
    function (t, n, e) {
      var i = e(36)(!1);
      i.push([
        t.i,
        ':root {\n  --placeholder-color: #818181;\n}\n.cursor-pointer{\n  cursor: pointer;\n}\ntable{\n  max-width: 100%;\n  overflow: auto;\n}\n.breadcrumb .breadcrumb-item a, .breadcrumb .breadcrumb-item span{\n  font-size: .9rem;\n}\n.breadcrumb .breadcrumb-item a{\n  color: #007bff;\n}\n.breadcrumb .breadcrumb-item .disabled{\n  color: rgba(128, 128, 128, 0.6);\n  cursor: default;\n}\n.breadcrumb .breadcrumb-item.active span{\n  font-weight: 600;\n}\n.toAddInitiative {\n  padding: 0 20px;\n  height: 42px;\n  font-size: 17px;\n  /* border: 1px solid #007791;\n    background-color: transparent;\n    color: #007791; */\n  border: 1px solid #139531;\n  background-color: #28a745;\n  color: #ffffff;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  margin-bottom: 15px;\n}\n\n.board-head__count h3 {\n  color: #404040;\n  font-size: 17px;\n  font-weight: 600;\n  margin: 0;\n}\n\n.initiatives-step__myroad .initiatives-step__item {\n  flex: 0 0 33.33333%;\n  max-width: 33.33333%;\n}\n\n.initiatives-view__table {\n  width: 100%;\n  margin-bottom: 15px;\n}\n\n.initiatives-view__table table {\n  width: 100%;\n}\n\n.initiatives-view__table tr {\n}\n\n.initiatives-view__table th {\n  padding: 5px 10px;\n  border: 1px solid #dedede;\n}\n\n.initiatives-view__table td {\n  padding: 5px 10px;\n  border: 1px solid #dedede;\n}\n\n.counter-slide__title {\n  margin-bottom: 16px;\n  font-size: 21px;\n  font-weight: 600;\n  /* text-align: left; */\n  text-align: center;\n}\n\n.counters-main .useful-slider .slick-prev,\n.counters-main .useful-slider .slick-next {\n  top: calc(50% + 15px);\n}\n\n.backback {\n  padding: 4px 16px;\n  font-size: 17px;\n  border: 1px solid #007791;\n  background-color: transparent;\n  color: #007791;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  position: absolute;\n  right: 0;\n  top: 15px;\n}\n\n.begin-timer {\n  font-size: 20px;\n  font-weight: 600;\n  color: #007791;\n  padding: 8px 0;\n  display: block;\n  text-align: center;\n}\n\n.popup-main__two {\n  max-width: 525px;\n}\n\n.two-item {\n  width: 100%;\n  position: relative;\n  display: flex;\n  margin-bottom: 24px;\n  overflow: hidden;\n  border-radius: 8px;\n}\n\n.two-item:last-child {\n  margin-bottom: 0;\n}\n\n.two-item__image {\n  display: flex;\n  width: 100%;\n  height: 175px;\n  position: relative;\n}\n\n.two-item__image::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgb(255, 255, 255);\n  background: linear-gradient(\n    180deg,\n    rgba(255, 255, 255, 0.2) 0%,\n    rgba(255, 255, 255, 0.8) 75%\n  );\n}\n\n.two-item__image img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: top;\n}\n\n.two-item__title {\n  position: absolute;\n  width: 100%;\n  bottom: 32px;\n  text-align: center;\n}\n\n.two-item__title img {\n  height: 52px;\n  margin-bottom: 16px;\n}\n\n.two-item__title > h3 {\n  color: #007791;\n  font-size: 22px;\n  font-weight: 600;\n  margin: 0;\n}\n\n.pending {\n  pointer-events: none;\n  background: #a7a7a7;\n}\n\n.pointer-events-none {\n  pointer-events: none;\n}\n\n.pages-title__region {\n  font-size: 19px;\n}\n\n.isLoaded-loader {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 200px;\n  width: 100%;\n}\n\n.loading-in {\n  animation: loadInAnimation ease 0.4s;\n  animation-iteration-count: 1;\n  animation-fill-mode: forwards;\n}\n\n@keyframes loadInAnimation {\n  0% {\n    opacity: 0;\n    transform: scale(0.6);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n\n.vue-treeselect__control-arrow-container > svg {\n  width: 9px !important;\n  height: 9px !important;\n}\n\n.questions {\n}\n\n.question {\n  margin-bottom: 32px;\n}\n\n.question-item {\n  width: 100%;\n  margin-bottom: 8px;\n}\n\n.answer-item {\n  width: 100%;\n  padding-left: 60px;\n}\n\n.answer-item__head,\n.question-item__head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 8px;\n}\n\n.answer-item__owner,\n.question-item__owner {\n  display: flex;\n  align-items: center;\n}\n\n.answer-item__owner img,\n.question-item__owner img {\n  width: 40px;\n  height: 40px;\n  object-fit: cover;\n  object-position: center;\n  border-radius: 50%;\n  border: 1px solid #dedede;\n  margin-right: 8px;\n}\n\n.answer-item__owner span,\n.question-item__owner span {\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 1;\n  color: #393c40;\n}\n\n.answer-item__head span.date,\n.question-item__head span.date {\n  background: #007791;\n  color: #ffffff;\n  font-size: 12px;\n  font-weight: 500;\n  padding: 1px 8px;\n  border-radius: 4px;\n}\n\n.answer-item__body,\n.question-item__body {\n  display: block;\n  box-shadow: 0px 2px 15px rgb(59 69 83 / 2%);\n  border-radius: 6px;\n  border: 1px solid #dedede;\n  padding: 12px 16px;\n  font-size: 14px;\n  line-height: 18px;\n}\n\n.answer-item__body p {\n  margin: 0;\n}\n\n.question-item__body .view-answer {\n  background: unset;\n  border: 0;\n  display: flex;\n  color: #007791;\n}\n\n.quess__item__form {\n  width: 100%;\n}\n\n.answer-item__owner small,\n.question-item__owner small {\n  display: block;\n  line-height: 1;\n}\n\n.pages-counters {\n  padding: 30px 0 0;\n}\n\n.pages-counters .counter-slide__item {\n  margin-bottom: 30px;\n}\n\n.reports-year {\n}\n\n.reports-year__item {\n  position: relative;\n  width: 100%;\n  height: 220px;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.reports-year__info {\n  position: absolute;\n  z-index: 1;\n  width: 100%;\n  bottom: 8px;\n  left: 0;\n  right: 0;\n}\n\n.reports-year__image {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 0;\n}\n\n.reports-year__image::after {\n  content: "";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: rgba(229, 241, 244, 0.6);\n}\n\n.reports-year__image img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center;\n}\n\n.reports-year__title {\n  text-align: center;\n  font-size: 24px;\n  font-weight: 600;\n  margin-bottom: 16px;\n}\n\n.reports-year__title small {\n}\n\n.reports-year__kvartal {\n  border-bottom: 1px solid #d4e5e9;\n}\n\n.reports-year__kvartal a {\n  display: block;\n  width: 100%;\n  font-weight: 600;\n  padding: 5px 16px;\n  color: #007791;\n  text-align: center;\n  text-transform: capitalize;\n  transition: 0.25s all ease-in-out;\n}\n\n.reports-year__kvartal:last-child {\n  border-bottom: 0;\n}\n\n.reports-year__kvartal a:hover {\n  background: rgba(229, 241, 244, 0.9);\n}\n\n.initiatives-step__oversight {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n}\n\n.initiatives-step__oversight img {\n  margin-bottom: 8px;\n}\n\n/* .initiatives-step__oversight{\n    width: 100%;\n    text-align: center;\n    border-top: 1px solid #d4ecff;\n    padding: 10px 0;\n    cursor: pointer;\n}\n.initiatives-step__oversight span{\n    font-size: 18px;\n    line-height: 21px;\n    color: #000000;\n    transition: all 0.2s ease-in-out;\n}\n.initiatives-step__oversight.active{\n    background: #ecf2f7;\n}\n.initiatives-step__oversight:hover span{\n    color: #007791;\n} */\n\n.oversight-in {\n  position: absolute;\n  top: 12px;\n  right: 20px;\n  height: 56px;\n}\n\n.initiatives-side_community {\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n\n.initiatives-steppers.archive .initiatives-step__item {\n  flex: 0 0 20%;\n  max-width: 20%;\n}\n\n.initiatives-steppers .initiatives-step__item.initiatives-step__oversight {\n}\n\n.initiatives-steppers .initiatives-step__item.initiatives-step__oversight img {\n  opacity: 0.4;\n}\n\n.initiatives-steppers\n  .initiatives-step__item.initiatives-step__oversight.active\n  img {\n  opacity: 1;\n}\n\n.ministry-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 32%;\n  padding: 15px;\n  border: 1px solid #c3c3c3;\n  margin: 10px 2px;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n}\n.ministry-item:hover {\n  box-shadow: 0 0 10px 4px #c3c3c3;\n}\n\n.ministry-item__image img {\n  height: 66px;\n  width: 66px;\n  object-fit: contain;\n}\n\n.ministry-item__title {\n  margin: 20px 0 0 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  font-weight: 600;\n  justify-content: center;\n}\n\n.ministry-item__title span {\n  font-size: 18px;\n  line-height: 1.2;\n  display: block;\n  text-align: center;\n  margin-bottom: 8px;\n}\n\n.ministry-item__urls {\n  display: none;\n}\n\n.ministry-item__urls > a {\n  color: #007791;\n  font-size: 15px;\n}\n\n.ministry-item__docs {\n  display: flex;\n  margin-right: 64px;\n}\n\n.ministry-item__docs img {\n  height: 21px;\n  margin-right: 16px;\n  filter: grayscale(1);\n}\n\n.ministry-item__docs img.active {\n  filter: grayscale(0);\n}\n\n.ministry-item__docs a {\n  color: #007791;\n  font-size: 15px;\n}\n\n.oversight-stats {\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  font-size: 14px;\n  padding: 0 16px;\n}\n\n.oversight-stats__item.red,\n.oversight-stats__item.red span {\n  color: red;\n}\n\n.oversight-stats__item.yellow,\n.oversight-stats__item.yellow span {\n  color: #f8db19;\n}\n\n.oversight-stats__item.green,\n.oversight-stats__item.green span {\n  color: green;\n}\n.footer_main_item_2 img{\n  max-width: 120px;\n}\n.flex-block {\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n@media (max-width: 1170px) {\n  .ministry-item {\n    width: 48%;\n  }\n}\n@media (max-width: 767px) {\n  .ministry-item {\n    width: 100%;\n    flex-direction: row;\n  }\n  .ministry-item__title {\n    margin-top: 0;\n    justify-content: flex-start;\n  }\n  .ministry-item__image {\n    margin-right: 10px;\n  }\n  .ministry-item__title span {\n    text-align: left;\n    font-size: 14px;\n    margin-bottom: 0;\n  }\n}\n\n::-webkit-input-placeholder {\n  /* Chrome/Opera/Safari */\n  color: var(--placeholder-color);\n}\n::-moz-placeholder {\n  /* Firefox 19+ */\n  color: var(--placeholder-color);\n}\n:-ms-input-placeholder {\n  /* IE 10+ */\n  color: var(--placeholder-color);\n}\n::-ms-input-placeholder {\n  /* Microsoft Edge */\n  color: var(--placeholder-color);\n}\n:-moz-placeholder {\n  /* Firefox 18- */\n  color: var(--placeholder-color);\n}\n\n::placeholder {\n  color: var(--placeholder-color);\n}\n\n.btn:focus, .btn.focus {\n  box-shadow: none;\n}\n',
        "",
      ]),
        (t.exports = i);
    },
    function (t, n, e) {
      var i = e(527);
      i.__esModule && (i = i.default),
        "string" == typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      (0, e(37).default)("780c7599", i, !0, { sourceMap: !1 });
    },
    function (t, n, e) {
      var i = e(36)(!1);
      i.push([
        t.i,
        "@media (max-width: 1480px) {\n    /* toxa 1480 */\n    .banner-salary-icon {\n        width: 70px;\n        height: 70px;\n    }\n    .hover__wrapper svg {\n        width: 34px;\n        height: 34px;\n    }\n    .banner-salary-icon-tooltip span {\n        padding-left: 20px;\n    }\n    .banner-salary-icon:before {\n        width: 75px;\n        height: 75px;\n    }\n    /* toxa 1480 */\n    .row {\n        margin-right: -10px;\n        margin-left: -10px;\n    }\n    .col-1,\n    .col-2,\n    .col-3,\n    .col-4,\n    .col-5,\n    .col-6,\n    .col-7,\n    .col-8,\n    .col-9,\n    .col-10,\n    .col-11,\n    .col-12,\n    .col,\n    .col-auto,\n    .col-sm-1,\n    .col-sm-2,\n    .col-sm-3,\n    .col-sm-4,\n    .col-sm-5,\n    .col-sm-6,\n    .col-sm-7,\n    .col-sm-8,\n    .col-sm-9,\n    .col-sm-10,\n    .col-sm-11,\n    .col-sm-12,\n    .col-sm,\n    .col-sm-auto,\n    .col-md-1,\n    .col-md-2,\n    .col-md-3,\n    .col-md-4,\n    .col-md-5,\n    .col-md-6,\n    .col-md-7,\n    .col-md-8,\n    .col-md-9,\n    .col-md-10,\n    .col-md-11,\n    .col-md-12,\n    .col-md,\n    .col-md-auto,\n    .col-lg-1,\n    .col-lg-2,\n    .col-lg-3,\n    .col-lg-4,\n    .col-lg-5,\n    .col-lg-6,\n    .col-lg-7,\n    .col-lg-8,\n    .col-lg-9,\n    .col-lg-10,\n    .col-lg-11,\n    .col-lg-12,\n    .col-lg,\n    .col-lg-auto,\n    .col-xl-1,\n    .col-xl-2,\n    .col-xl-3,\n    .col-xl-4,\n    .col-xl-5,\n    .col-xl-6,\n    .col-xl-7,\n    .col-xl-8,\n    .col-xl-9,\n    .col-xl-10,\n    .col-xl-11,\n    .col-xl-12,\n    .col-xl,\n    .col-xl-auto {\n        padding-right: 10px;\n        padding-left: 10px;\n    }\n    .container {\n        max-width: 1200px;\n    }\n    .header-nav__logo__image {\n        height: 60px;\n    }\n    .header-nav__logo {\n        margin-right: 30px;\n    }\n    .header-nav__main {\n        height: 100px;\n    }\n    .header .menu-full {\n        margin-left: 30px;\n    }\n    .headerSlider-info h2 {\n        font-size: 32px;\n        line-height: 39px;\n    }\n    .headerSlider-stats {\n        padding: 30px 0 60px;\n    }\n    .headerSlider-stats__item {\n        margin-right: 60px;\n        width: 245px;\n    }\n    .headerSlider-stats__item h3 {\n        font-size: 26px;\n        line-height: 33px;\n        margin-bottom: 10px;\n    }\n    .headerSlider-stats__item strong {\n        font-size: 31px;\n        line-height: 42px;\n    }\n    .headerSlider-stats__item span {\n        font-size: 19px;\n        line-height: 24px;\n    }\n    .headerSlider .slick-dots {\n        right: 100px;\n    }\n    .headerSlider .slick-dots li:nth-child(1) button:before {\n        font-size: 19px;\n        line-height: 22px;\n    }\n    .headerSlider .slick-dots li:nth-child(2) button:before {\n        font-size: 19px;\n        line-height: 22px;\n    }\n    .headerSlider .slick-dots li:nth-child(3) button:before {\n        font-size: 19px;\n        line-height: 22px;\n    }\n    .headerSlider .slick-dots li.slick-active button:after {\n        width: 25px;\n        height: 2px;\n        right: -20px;\n        border-radius: 7px;\n    }\n    .headerSlider {\n        height: calc(100vh - 155px);\n        min-height: 625px;\n    }\n    .headerSlider-image {\n        height: calc(100vh - 155px);\n        min-height: 625px;\n    }\n    /* toxa 1440 */\n    .home-features {\n        /* height: 155px; */\n        height: auto;\n        margin-top: -190px;\n    }\n    .banner {\n        /* height: calc(100vh - 186px); */\n        height: calc(100vh - 155px);\n        align-items: unset;\n    }\n    .banner-main {\n        padding-top: 50px;\n        align-items: unset;\n    }\n    .banner-control {\n        margin-top: 70px;\n    }\n    /* toxa */\n    .features-item__image {\n        height: 45px;\n    }\n    .features-item__image img {\n        height: 45px;\n    }\n    .features-item__title {\n        font-size: 16px;\n        line-height: 21px;\n        display: block;\n    }\n    .title {\n        margin-bottom: 20px;\n    }\n    .title h2 {\n        font-size: 25px;\n        line-height: 31px;\n    }\n    .home-statsyear {\n        padding: 35px 0 60px;\n    }\n    .statsyear-item__info--title span {\n        font-size: 25px;\n        line-height: 33px;\n    }\n    .statsyear-item__info--title h3 {\n        font-size: 19px;\n        line-height: 23px;\n    }\n    .statsyear-item__info--title small {\n        font-size: 17px;\n        line-height: 21px;\n    }\n    .statsyear-item {\n        height: 180px;\n        padding: 15px 20px;\n    }\n    .statsyear-item__info--icon img {\n        height: 50px;\n    }\n    .home-charts {\n        padding: 45px 0 60px;\n    }\n    .home-news {\n        padding: 45px 0 0;\n    }\n    .budgets-item__head--info h3 {\n        font-size: 19px;\n        line-height: 25px;\n    }\n    .budgets-item__head--info span {\n        font-size: 30px;\n        line-height: 37px;\n    }\n    .budgets-item__head--info small {\n        font-size: 17px;\n        line-height: 21px;\n    }\n    .budgets-item__head {\n        padding-bottom: 30px;\n    }\n    .budgets-item__body ul li {\n        font-size: 17px;\n        line-height: 20px;\n        padding-right: 20px;\n        margin-bottom: 20px;\n    }\n    .budgets-item__body ul li span {\n        font-size: 16px;\n        line-height: 21px;\n    }\n    .budgets-item__body ul li strong {\n        white-space: nowrap;\n    }\n    .budgets-item {\n        height: 345px;\n        padding: 20px;\n    }\n    .maps-info__head--info h3 {\n        font-size: 19px;\n        line-height: 25px;\n    }\n    .maps-info__head--info span {\n        font-size: 30px;\n        line-height: 37px;\n    }\n    .maps-info__head--info small {\n        font-size: 17px;\n        line-height: 21px;\n    }\n    .maps-info__head {\n        padding-bottom: 15px;\n    }\n    .maps-info__body {\n        padding-top: 15px;\n    }\n    .maps-info__body ul li {\n        font-size: 17px;\n        line-height: 21px;\n        padding-right: 20px;\n        margin-bottom: 20px;\n    }\n    .interrating-item__head span {\n        font-size: 17px;\n        line-height: 22px;\n    }\n    .interrating-item__head img {\n        height: 32px;\n    }\n    .interrating-item__block>h3 {\n        font-size: 17px;\n        line-height: 21px;\n    }\n    .interrating-item__info--item span {\n        font-size: 16px;\n        line-height: 19px;\n    }\n    .interrating-item__info--item {\n        max-width: 135px;\n        padding-right: 20px;\n    }\n    .interrating-item__info--right svg {\n        width: 15px;\n    }\n    .interrating-item__info--item strong {\n        font-size: 19px;\n        line-height: 23px;\n        margin-bottom: 5px;\n    }\n    .home-internationals {\n        padding: 0 0 60px;\n    }\n    .maps-main {\n        margin: 45px 0;\n    }\n    .pages-title {\n        margin-bottom: 16px;\n    }\n    .breadcrumb {\n        padding: 25px 0;\n    }\n    .breadcrumb-item a,\n    .breadcrumb-item span {\n        font-size: 17px;\n        line-height: 21px;\n    }\n    .profile-side__image {\n        width: 125px;\n        height: 125px;\n    }\n    .profile-side__title>h4 {\n        font-size: 16px;\n    }\n    .profile-side__title>h2 {\n        font-size: 20px;\n        line-height: 25px;\n    }\n    .profile-side__title span,\n    .profile-side__title a {\n        margin-left: -15px;\n    }\n    .profile-side__body__item {\n        font-size: 15px;\n        line-height: 19px;\n    }\n    .profile-side__body__item span {\n        font-size: 14px;\n    }\n    .profile-side__footer .btn {\n        height: 40px;\n        font-size: 16px;\n    }\n    .profile-nav__btn {\n        padding: 0 20px;\n        height: 39px;\n        font-size: 16px;\n    }\n    .initiatives-item__info__head>span {\n        font-size: 13px;\n    }\n    .initiatives-item__info__title h2 {\n        font-size: 21px;\n        line-height: 25px;\n    }\n    .initiatives-item__info__title span.date {\n        margin-bottom: 10px;\n    }\n    .initiatives-item__info__title span {\n        font-size: 13px;\n        line-height: 15px;\n    }\n    .initiatives-side__status span {\n        font-size: 14px;\n        line-height: 16px;\n    }\n    .initiatives-side__status {\n        margin-bottom: 20px;\n    }\n    .initiatives-side__currency>h3 {\n        font-size: 15px;\n    }\n    .initiatives-side__currency>span {\n        line-height: 27px;\n    }\n    .initiatives-side__user {\n        margin-bottom: 20px;\n    }\n    .initiatives-side__vote {\n        padding: 15px 15px;\n    }\n    .initiatives-side__vote__voice img.image {\n        width: 40px;\n    }\n    .b-burger__main {\n        padding-top: 60px;\n    }\n    .b-burger__fullmenu__item h2 {\n        font-size: 22px;\n        line-height: 29px;\n        margin-bottom: 20px;\n    }\n    .b-burger__fullmenu__item ul {\n        padding: 0 20px;\n    }\n    .b-burger__fullmenu__item ul li {\n        max-width: 345px;\n        margin-bottom: 10px;\n    }\n    .b-burger__fullmenu__item {\n        padding: 10px 0;\n    }\n    .b-burger__close {\n        top: 30px;\n        right: 90px;\n    }\n    .footer_info_item_title {\n        font-size: 18px;\n        line-height: 23px;\n        margin-bottom: 10px;\n    }\n    .footer_info_item_child {\n        font-size: 16px;\n    }\n    .interrating-item__head {\n        height: 65px;\n        padding: 0 20px;\n    }\n    .interrating-item__body {\n        padding: 20px;\n    }\n    .interrating-item__block {\n        margin-bottom: 30px;\n    }\n    .initiatives-item {\n        margin-bottom: 20px;\n    }\n    .initiatives {\n        margin: 20px 0;\n    }\n    .pages {\n        margin-bottom: 30px;\n    }\n    .pages-main {\n        padding: 20px;\n        margin-bottom: 20px;\n    }\n    .pages-side__menu {\n        margin-bottom: 20px;\n    }\n    .initiatives-filter {\n        /* margin-bottom: 20px; */\n        padding-bottom: 20px;\n    }\n    .initiatives-view {\n        /* padding: 20px; */\n        margin-bottom: 20px;\n    }\n    .initiatives-side {\n        border-radius: 10px;\n        padding: 20px;\n        margin-bottom: 20px;\n    }\n    .initiatives-view__images__item {\n        margin-bottom: 20px;\n    }\n    .initiatives-view__files__item {\n        /* margin-bottom: 20px; */\n        background-color: #eee;\n        padding: 8px 10px;\n        border-radius: 4px;\n        color: black;\n        font-size: 12px;\n    }\n    .counters-item {\n        padding: 0 10px;\n    }\n    .initiatives-step__item {\n        padding: 15px 0;\n    }\n    .initiatives-step__item h3 {\n        font-size: 22px;\n        line-height: 25px;\n        margin-bottom: 10px;\n    }\n    .initiatives-step__item h4 {\n        font-size: 18px;\n        line-height: 21px;\n        margin-bottom: 10px;\n    }\n    .initiatives-step__item p {\n        font-size: 16px;\n        line-height: 19px;\n        margin-bottom: 10px;\n    }\n    .initiatives-step__item span {\n        font-size: 17px;\n        line-height: 19px;\n    }\n    .initiatives-step__all {\n        font-size: 18px;\n        line-height: 21px;\n        margin-bottom: 20px;\n    }\n    .initiatives-filter__search__icon {\n        height: 17px;\n        margin-right: 10px;\n        margin-top: -1px;\n    }\n    .pages-side__menu,\n    .sidebar-block {\n        padding: 20px 20px;\n    }\n}\n\n\n/* toxa 1260*/\n\n@media(max-width: 1260px) {\n    .my-road-steps-wrapper-map {\n        width: 45% !important;\n    }\n    .popup-main--userinfo {\n        max-width: unset;\n        width: calc(100% - 200px);\n    }\n    .popup-head {\n        flex-wrap: wrap;\n        justify-content: space-between;\n    }\n    .popup-head h2 {\n        order: 4;\n    }\n    .popup-head .btn-info {\n        order: 4;\n    }\n    .popup-head .custom-select {\n        margin: 0;\n    }\n    .popup-head .title-params__select {\n        margin-bottom: 15px;\n    }\n    .popup-head .title-params__select.n1 {\n        width: calc(100% / 12 * 3 - 20px);\n    }\n    .popup-head .title-params__select.n2 {\n        width: calc(100% / 12 * 3 - 20px);\n    }\n    .popup-head .title-params__select.n3 {\n        width: calc(100% / 12 * 6 - 20px);\n    }\n    /* toxa */\n    .counters-item {\n        margin-bottom: 20px;\n    }\n    .container {\n        max-width: 1150px;\n    }\n    .useful-slider .slick-prev,\n    .useful-slider .slick-next {\n        top: -20px;\n    }\n    .useful-slider .slick-prev {\n        right: 15px;\n        left: unset;\n        transform: translate(-100%, -100%);\n    }\n    .useful-slider .slick-next {\n        right: 15px;\n        transform: translate(0, -100%);\n    }\n    .home-news .useful-slider .slick-prev,\n    .home-news .useful-slider .slick-next {\n        display: none!important;\n    }\n    .counters-main .useful-slider .slick-prev,\n    .counters-main .useful-slider .slick-next {\n        top: 30px;\n    }\n    .footer_main_item_2 img{\n        max-width: 85px;\n      }\n}\n\n\n/* toxa 1260*/\n\n@media (max-width: 1170px) {\n    /* toxa 1170 */\n    .banner-info>h2 {\n        font-size: 35px;\n        line-height: 42px;\n    }\n    .banner-stats__item h3 {\n        font-size: 26px;\n    }\n    .banner-stats__item strong {\n        font-size: 32px;\n        line-height: 40px;\n    }\n    .banner-stats {\n        padding: 40px 0 55px;\n    }\n    /* toxa 1170 */\n    .container {\n        max-width: 960px;\n    }\n    .header .menu .navbar {\n        display: none;\n    }\n    .header .menu {\n        justify-content: flex-end;\n    }\n    .headerSlider .slick-dots {\n        right: 15px;\n    }\n    .header-top__currency {\n        font-size: 15px;\n        line-height: 18px;\n        margin-right: 30px;\n    }\n    /* toxaa  1260*/\n    .banner-stats__item {\n        margin-right: 0;\n        width: calc(100% / 12 * 4);\n    }\n    /* toxaa3*/\n}\n\n@media (max-width: 991px) {\n    .banner-salary-icon-tooltip {\n        display: none;\n    }\n    .banner-salary-icon:hover::before {\n        animation: pulse-border 1500ms ease-out infinite;\n        visibility: visible;\n        opacity: 1;\n    }\n    /* toxa 991 */\n    /* .banner-salary-icon {\n        bottom: -194px;\n        right: 235px;\n        left: unset;\n        top: unset;\n    }\n\n    .banner-salary-icon:hover .banner-salary-icon-tooltip,\n    .banner-salary-icon .banner-salary-icon-tooltip {\n        width: 265px;\n    } */\n    .banner {\n        padding: 0;\n    }\n    .banner-info>h2 {\n        font-size: 28px;\n        line-height: 36px;\n    }\n    .banner-stats__item h3 {\n        font-size: 20px;\n        line-height: 28px;\n    }\n    .banner-info>p {\n        margin-right: 0;\n    }\n    .banner-stats__item strong {\n        font-size: 24px;\n        line-height: 30px;\n    }\n    .banner-stats__item span {\n        font-size: 20px;\n        line-height: 26px;\n    }\n    .banner .container {\n        height: 100%;\n    }\n    .banner-main {\n        flex-wrap: wrap;\n        height: 100%;\n    }\n    .banner-info {\n        width: 100%;\n    }\n    .banner-control {\n        margin-top: 0;\n        flex-direction: row;\n        padding-top: 28px;\n        margin-top: auto;\n        margin-bottom: 100px;\n    }\n    .banner-control__years {\n        display: flex;\n    }\n    .banner-control__all {\n        margin: 0;\n    }\n    .banner-control__years span {\n        margin: 0;\n        position: relative;\n        margin-right: 40px;\n    }\n    .banner-control__years span::after {\n        position: absolute;\n        height: 28px;\n        width: 3px;\n        top: 0;\n        left: 50%;\n        transform: translate(-50%, -100%);\n        margin: 0;\n    }\n    /* toxa 991 */\n    .home-features {\n        background: #007791;\n        height: auto;\n        margin-top: 0;\n        padding: 15px 0;\n    }\n    .features-item {\n        display: block;\n        padding: 15px 0;\n        text-align: center;\n    }\n    .headerSlider-stats__item {\n        margin-right: 90px;\n        width: auto;\n    }\n    .home-statsyear {\n        padding: 30px 0 30px;\n    }\n    .statsyear-item {\n        margin-bottom: 15px;\n    }\n    .home-charts {\n        padding: 30px 0 30px;\n    }\n    .home-news {\n        padding: 30px 0 0;\n    }\n    .charts-item {\n        margin-bottom: 15px;\n    }\n    .home-budgets {\n        padding: 30px 0 0;\n    }\n    .budgets-item {\n        height: auto;\n        padding: 20px;\n        margin-bottom: 30px;\n    }\n    .maps-main {\n        margin: 15px 0 30px;\n    }\n    .maps-uzb {\n        top: auto;\n        bottom: 50%;\n        transform: translateY(50%);\n    }\n    .interrating-item__body {\n        margin-bottom: 30px;\n    }\n    .home-internationals {\n        padding: 0 0 15px;\n    }\n    .maps-uzb {\n        width: 90%;\n    }\n    .header-top__item.header-top__item--special {\n        display: none;\n    }\n    .b-burger__fullmenu {\n        padding-left: 0;\n    }\n    .b-burger__fullmenu {\n        padding-left: 0;\n        max-height: calc(100vh - 90px);\n        overflow-y: auto;\n        overflow-x: hidden;\n    }\n    .b-burger__close {\n        top: 20px;\n        right: 25px;\n    }\n    .profile-nav {\n        flex-wrap: wrap;\n    }\n    .profile-nav__left {\n        flex-wrap: wrap;\n    }\n    .profile-nav__left a,\n    .profile-nav__left button {\n        margin-right: 15px;\n        margin-bottom: 5px;\n    }\n    .popup-main {\n        padding: 20px 20px 25px;\n    }\n    .popup {\n        padding: 0 15px;\n    }\n}\n\n@media (max-width: 767px) {\n    .my-road-steps-wrapper-map {\n        width: 100% !important;\n        order: -1;\n    }\n    .my-road-steps-wrapper {\n        flex-wrap: wrap;\n    }\n    /* toxa 767 */\n    .videos-item {\n        padding-right: 0;\n    }\n    .videos-item__info {\n        left: 0;\n        right: unset;\n        width: calc(100% - 80px);\n    }\n    .videos-item__image {\n        height: auto;\n    }\n    .videos-item__info h2 {\n        font-size: 14px;\n        line-height: 18px;\n    }\n    .title-params.selects {\n        flex-direction: column;\n    }\n    .title-params.selects select {\n        margin: 5px 0;\n    }\n    .statsyear .title h2 {\n        max-width: 60%;\n    }\n    /* toxa 767*/\n    .home-slider {\n        display: none;\n    }\n    .header-top__left {\n        display: none;\n    }\n    .header-top__right {\n        display: flex;\n        align-items: center;\n        width: 100%;\n        justify-content: space-between;\n    }\n    .header-top__item {\n        margin-left: 0;\n    }\n    .features-item__image {\n        margin-bottom: 15px;\n    }\n    .maps-uzb {\n        display: none;\n    }\n    .footer {\n        width: 100%;\n        height: auto;\n        background: #007791;\n        padding: 40px 0 30px 0;\n    }\n    .footer_info_item {\n        max-width: 100%;\n        flex: 0 0 100%;\n        text-align: center;\n    }\n    .footer_main {\n        flex-wrap: wrap;\n    }\n    .footer_main_item_1 {\n        display: flex;\n        flex: 0 0 100%;\n        justify-content: center;\n        align-items: center;\n    }\n    .footer_main_item_2 {\n        width: 100%;\n        display: flex;\n        margin: 20px 30px 0;\n        justify-content: space-between;\n    }\n    .title h2 {\n        max-width: 50%;\n    }\n    .footer_copy {\n        flex-wrap: wrap;\n    }\n    .initiatives-filter {\n        flex-wrap: wrap;\n    }\n    .initiatives-filter__search {\n        width: 100%;\n        display: flex;\n        flex: 0 0 100%;\n        margin-bottom: 20px;\n    }\n    .initiatives-filter__options {\n        flex-wrap: wrap;\n        width: 100%;\n    }\n    .initiatives-filter__options__item {\n        margin-left: 0;\n        margin-right: 15px;\n        margin-bottom: 5px;\n    }\n    .initiatives-step__item h3 {\n        font-size: 19px;\n        line-height: 22px;\n        margin-bottom: 10px;\n    }\n    .initiatives-step__item h4 {\n        font-size: 17px;\n        line-height: 20px;\n    }\n    .initiatives .to-back {\n        /* display: none; */\n        line-height: 15px;\n        font-size: 15px;\n        padding: 8px 25px 8px 0;\n    }\n    .toAddInitiative {\n        font-size: 15px;\n        line-height: 15px;\n        padding: 8px 16px;\n        height: auto;\n        max-height: 42px;\n    }\n    .pages-main {\n        padding: 20px 15px;\n        margin-bottom: 15px;\n    }\n    .pages-side__menu,\n    .sidebar-block {\n        padding: 20px 15px;\n    }\n    .counters-main .useful-slider .slick-prev,\n    .counters-main .useful-slider .slick-next {\n        display: none!important;\n    }\n    .counter-slide__title {\n        margin-bottom: 20px;\n        font-size: 18px;\n    }\n    .initiatives-step {\n        justify-content: center;\n    }\n    .initiatives-steppers .initiatives-step__item,\n    .initiatives-steppers.archive .initiatives-step__item {\n        flex: 0 0 33.333333%;\n        max-width: 33.333333%;\n    }\n    .initiatives-steppers .initiatives-step__item img,\n    .initiatives-steppers.archive .initiatives-step__item img {\n        height: 48px;\n    }\n}\n\n@media (max-width: 576px) {\n    /* toxa 576 */\n    body * {\n        font-size: .8rem;\n    }\n    .breadcrumb-item::before{\n        vertical-align: 0;\n        font-size: .6rem;\n        float: unset!important;\n    }\n    .breadcrumb .breadcrumb-item a, .breadcrumb .breadcrumb-item span{\n        font-size: .6rem;\n    }\n    table{\n        font-size: .9rem;\n    }\n    .videos-item__info {\n        width: 100%;\n    }\n    .title-url {\n        font-size: 13px;\n    }\n    .title .title-url {\n        margin-top: 7px;\n    }\n    .banner {\n        min-height: 480px;\n        max-height: 520px;\n    }\n    .videos-item__info {\n        padding: 10px;\n    }\n    .banner-control {\n        margin-bottom: 30px;\n    }\n    .banner-info>h2 {\n        font-size: 24px;\n        line-height: 32px;\n    }\n    .banner-control__all,\n    .banner-control__years span {\n        font-size: 16px;\n        line-height: 22px;\n    }\n    /* toxa 576 */\n    .footer_main_item_2 img {\n        max-height: 21px;\n    }\n    .footer_copy {\n        justify-content: center;\n    }\n    .footer_copy_item_1 {\n        width: 100%;\n        text-align: center;\n    }\n    .footer_copy_item_2 {\n        width: 100%;\n        text-align: center;\n        padding: 15px 0;\n    }\n    .budgets-item__body ul li {\n        flex: 0 0 100%;\n        max-width: 100%;\n    }\n    .title h2 {\n        max-width: 100%;\n        font-size: 20px;\n        line-height: 24px;\n    }\n    .title-params {\n        flex: 0 0 140px;\n        max-width: 140px;\n    }\n    .profile-side {\n        margin-bottom: 30px;\n    }\n    .pages {\n        margin-bottom: 15px;\n    }\n    .public-budget__item {\n        flex-wrap: wrap;\n    }\n    .public-budget__item__image {\n        margin-bottom: 15px;\n    }\n    .initiatives-view__images__item {\n        height: 145px;\n    }\n    .features-item__title {\n        padding-right: 0;\n    }\n    .popup-begin img {\n        margin-bottom: 20px;\n        height: 100px;\n    }\n    .popup-begin h2 {\n        font-size: 20px;\n    }\n    .popup-begin p {\n        font-size: 17px;\n        line-height: 120%;\n    }\n    .popup-begin {\n        padding: 0;\n    }\n    .popup-begin__btns {\n        padding: 15px 0 0;\n    }\n    .popup-begin__btns .btn {\n        flex: 0 0 calc(50% - 7.5px);\n        max-width: calc(50% - 7.5px);\n        height: 42px;\n        border-radius: 4px;\n        font-size: 11px;\n        line-height: 14px;\n    }\n    .fixed-list__title {\n        height: 50px;\n        font-size: 14px;\n    }\n    .fixed-list__item.active .fixed-list__title,\n    .fixed-list__item:hover .fixed-list__title {\n        right: 50px;\n    }\n    .fixed-list__item:hover .fixed-list__title {\n        display: none;\n    }\n    .fixed-list__item.active .fixed-list__title {\n        right: -400px;\n    }\n    .fixed-list__item.active .fixed-list__image,\n    .fixed-list__item:hover .fixed-list__image {\n        border-top-left-radius: 6px;\n        border-bottom-left-radius: 6px;\n    }\n    .fixed-list__image {\n        width: 50px;\n        height: 50px;\n    }\n    .fixed-list {\n        width: 50px;\n    }\n    .fixed-list__image svg,\n    .fixed-list__image img {\n        width: 29px;\n    }\n    .header-top__right {\n        font-size: 15px;\n    }\n    .header-top__main {\n        height: 50px;\n    }\n    .header-top__item>a svg {\n        margin-right: 7px;\n        height: 15px;\n    }\n    .breadcrumb-item a,\n    .breadcrumb-item span {\n        font-size: 15px;\n        line-height: 19px;\n    }\n    .pages-title h2 {\n        font-size: 19px;\n        line-height: 21px;\n    }\n    .pages-content {\n        font-size: 15px;\n    }\n    .initiatives-filter__options__item {\n        margin-left: 0;\n        margin-right: 0;\n        margin-bottom: 5px;\n        max-width: 100%;\n        width: 100%;\n    }\n    .initiatives-filter__options__item__year {\n        max-width: 100%;\n    }\n    .initiatives-filter {\n        padding-bottom: 15px;\n    }\n    .initiatives-step__item {\n        flex: 0 0 100%;\n        max-width: 100%;\n    }\n    .initiatives-step {\n        display: flex;\n        border-bottom: 1px solid #d4ecff;\n        margin-bottom: 15px;\n        flex-wrap: wrap;\n    }\n    .initiatives-item {\n        margin-bottom: 15px;\n    }\n    .header-nav__main {\n        height: 85px;\n    }\n    .banner-control__years span.active::after {\n        background: #FFFFFF;\n        left: 0;\n        width: 100%;\n        transform: translate(0, 0);\n        height: 2px;\n        top: -7px;\n    }\n    .banner-main {\n        padding-top: 30px;\n    }\n    .counters {\n        padding: 30px 0 30px;\n    }\n    .home-maps {\n        padding-top: 30px;\n    }\n    .maps-main {\n        padding: 30px 0 15px;\n    }\n    .interrating-item__body {\n        margin-bottom: 15px;\n    }\n    .videos-item {\n        padding-right: 0;\n        margin-bottom: 15px;\n    }\n    .counters-item {\n        margin-bottom: 15px;\n    }\n    .b-burger__fullmenu .col {\n        flex: 0 0 100%;\n        width: 100%;\n    }\n    .b-burger__fullmenu__item ul li {\n        max-width: 100%;\n        margin-bottom: 10px;\n    }\n    .initiatives-view {\n        margin-bottom: 15px;\n    }\n    .popup-head__title {\n        font-size: 21px;\n        line-height: 23px;\n    }\n    .initiatives-steppers .initiatives-step__item,\n    .initiatives-steppers.archive .initiatives-step__item {\n        flex: 0 0 50%;\n        max-width: 50%;\n    }\n    .initiatives-steppers .initiatives-step__item.initiatives-step__oversight,\n    .initiatives-steppers.archive .initiatives-step__item.initiatives-step__oversight {\n        flex: 0 0 100%;\n        max-width: 100%;\n    }\n}\n\n@media (max-width: 445px) {\n    body * {\n        font-size: .8rem;\n    }\n    .breadcrumb{\n        align-items: center;\n    }\n    .breadcrumb-item::before{\n        vertical-align: 0;\n        font-size: .6rem;\n        float: unset!important;\n    }\n    table, .breadcrumb .breadcrumb-item a, .breadcrumb .breadcrumb-item span{\n        font-size: .5rem;\n    }\n    .title {\n        flex-wrap: wrap;\n    }\n    .useful-slider .slick-prev,\n    .useful-slider .slick-next {\n        top: -16px;\n    }\n    .popup-body.height_popup {\n        min-height: 200px;\n        max-height: 250px;\n    }\n    .title h2 {\n        max-width: 100%;\n        flex: 0 0 100%;\n        font-size: 20px;\n        line-height: 24px;\n    }\n    .title-params {\n        flex: 0 0 auto;\n        max-width: initial;\n        margin-top: 15px;\n    }\n    .budgets-item__head--info span {\n        font-size: 25px;\n        line-height: 29px;\n    }\n    .maps-info__head--info span {\n        font-size: 25px;\n        line-height: 29px;\n    }\n    .public-budget__item__image {\n        max-width: 100%;\n        flex: 0 0 100%;\n    }\n    .initiatives-view__images__item {\n        height: 115px;\n    }\n    /* toxa 445 */\n    .banner-stats__item span,\n    .banner-stats__item h3 {\n        font-size: 16px;\n        line-height: 20px;\n    }\n    .banner-stats__item strong {\n        font-size: 18px;\n        line-height: 24px;\n    }\n    .banner-control__years span {\n        margin-right: 15px;\n    }\n    .banner-stats {\n        padding: 25px 0 40px;\n    }\n    .banner-info>h2 {\n        font-size: 16px;\n        line-height: 22px;\n    }\n    .banner-info>p {\n        font-size: 14px;\n    }\n    .banner-info>p {\n        font-size: 14px;\n    }\n    .banner-info>p>a {\n        font-size: 14px;\n    }\n    .title-params.selects {\n        flex-direction: unset;\n        width: 100%;\n        justify-content: space-between;\n    }\n    .title-params.selects select {\n        width: calc(50% - 7.5px);\n    }\n    .statsyear .title h2 {\n        max-width: 100%;\n    }\n    .footer_copy_item_1 {\n        font-size: 14px;\n    }\n    .footer_copy_item_2 {\n        font-size: 14px;\n    }\n    .footer_info_item_child {\n        font-size: 14px;\n        line-height: 20px;\n    }\n    .footer_info_item_title {\n        font-size: 16px;\n        line-height: 20px;\n    }\n    .footer_main_item_title_essential {\n        font-size: 18px;\n        line-height: 22px;\n    }\n    .footer_main_item_title_rest {\n        font-size: 14px;\n        width: auto;\n    }\n    .maps-info__body ul li span {\n        font-size: 14px;\n        line-height: 20px;\n        margin-right: 5px;\n    }\n    .interrating-item__block>h3 {\n        font-size: 14px;\n        line-height: 18px;\n    }\n    .maps-info__head--info span {\n        font-size: 20px;\n        line-height: 24px;\n    }\n    .maps-info__head--info h3 {\n        font-size: 16px;\n        line-height: 20px;\n    }\n    .maps-info__body ul li {\n        padding-right: 0;\n    }\n    .maps-info__body ul li {\n        font-size: 14px;\n        line-height: 20px;\n    }\n}\n\n@media(min-width: 500px){\n    .initiatives-side__vote {\n        padding: 0;\n    }\n}",
        "",
      ]),
        (t.exports = i);
    },
    function (t, n, e) {
      "use strict";
      e(259);
    },
    function (t, n, e) {
      var i = e(36)(!1);
      i.push([
        t.i,
        "\n#main[data-v-7ce013ed] {\n  width: 100%;\n  overflow: hidden;\n  padding: 10px 0;\n}\n.para[data-v-7ce013ed] {\n  white-space: nowrap;\n  clear: both;\n  float: right;\n  font-weight: 500;\n  font-size: 17px;\n  line-height: 21px;\n  color: red;\n  margin-bottom: 0;\n}\n@media (max-width: 445px) {\n.para[data-v-7ce013ed] {\n    font-size: 14px;\n    line-height: 18px;\n}\n}\n",
        "",
      ]),
        (t.exports = i);
    },
    function (t, n, e) {
      "use strict";
      e(260);
    },
    function (t, n, e) {
      var i = e(36)(!1);
      i.push([
        t.i,
        "\n.header-top__item--search[data-v-4c4b1e86] {\n  cursor: pointer;\n}\n/* @keyframes custom-animation {\n    from {\n      opacity: 0.2;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n  .fixed-list-item {\n    animation-name: custom-animation !important;\n    animation-duration: 10s !important;\n    animation-direction: alternate !important;\n  } */\n",
        "",
      ]),
        (t.exports = i);
    },
    function (t, n, e) {
      t.exports = e.p + "img/begin-popup.9e58e20.png";
    },
    function (t, n, e) {
      "use strict";
      e(261);
    },
    function (t, n, e) {
      var i = e(36)(!1);
      i.push([
        t.i,
        "\n.btn-red[data-v-757ca919]{\n  background-color: #f54141;\n  border-color: #f54141;\n}\n",
        "",
      ]),
        (t.exports = i);
    },
    function (t, n, e) {
      "use strict";
      e(262);
    },
    function (t, n, e) {
      var i = e(36)(!1);
      i.push([
        t.i,
        ".intable table tbody tr td[data-v-243ee7da]{padding:9px;line-height:19px}.intable table tbody tr[data-v-243ee7da]:last-child{padding:9px;background-color:rgba(102,184,202,.3411764706);color:#007791;line-height:19px}.intable table thead tr th[data-v-243ee7da]{padding:9px;background-color:#007791;color:#fff;line-height:19px}.popup-body.height_popup[data-v-243ee7da]{min-height:400px;max-height:600px;overflow-y:auto;overflow-x:hidden;padding:0 30px}.popup-head[data-v-243ee7da]{padding:0 30px}.popup-main.popup-main--userinfo[data-v-243ee7da]{padding:30px 0}@media(max-width: 1260px){.popup-main--userinfo[data-v-243ee7da]{max-width:unset;width:calc(100% - 200px)}.popup-head[data-v-243ee7da]{flex-wrap:wrap;justify-content:space-between}.popup-head h2[data-v-243ee7da]{order:4}.popup-head .btn-info[data-v-243ee7da]{order:4}.popup-head .custom-select[data-v-243ee7da]{margin:0}.popup-head .title-params__select[data-v-243ee7da]{margin-bottom:15px}.popup-head .title-params__select.n1[data-v-243ee7da]{width:calc(25% - 20px)}.popup-head .title-params__select.n2[data-v-243ee7da]{width:calc(25% - 20px)}.popup-head .title-params__select.n3[data-v-243ee7da]{width:calc(50% - 20px)}}@media(max-width: 1170px){.popup-body.height_popup[data-v-243ee7da]{max-height:450px}}@media(max-width: 767px){.popup-body.height_popup[data-v-243ee7da],.popup-head[data-v-243ee7da]{padding:0 15px}.popup-head__title[data-v-243ee7da]{margin-bottom:15px}.popup-body.height_popup[data-v-243ee7da]{min-height:300px;max-height:350px}.popup-main--userinfo[data-v-243ee7da]{width:calc(100% - 100px)}.popup-head[data-v-243ee7da]{flex-wrap:wrap;justify-content:space-between}.popup-head h2[data-v-243ee7da]{order:4}.popup-head .btn-info[data-v-243ee7da]{order:4;font-size:14px}.popup-head__title[data-v-243ee7da]{margin:0;font-size:18px}.popup-head .custom-select[data-v-243ee7da]{margin:0}.popup-head .title-params__select[data-v-243ee7da]{margin-bottom:15px}.popup-head .title-params__select.n1[data-v-243ee7da]{width:calc(50% - 7.5px)}.popup-head .title-params__select.n2[data-v-243ee7da]{width:calc(50% - 7.5px)}.popup-head .title-params__select.n3[data-v-243ee7da]{width:calc(100% - 0px)}}@media(max-width: 576px){.popup-main--userinfo[data-v-243ee7da]{width:calc(100% - 20px)}.popup-body.height_popup[data-v-243ee7da]{min-height:250px;max-height:300px}.popup-head h2[data-v-243ee7da]{width:100%;margin-bottom:15px}}",
        "",
      ]),
        (t.exports = i);
    },
    function (t, n, e) {
      t.exports = e.p + "img/iconImg.7bc6198.png";
    },
    function (t, n, e) {
      "use strict";
      e(263);
    },
    function (t, n, e) {
      var i = e(36)(!1);
      i.push([
        t.i,
        "\n.select-locale[data-v-27c43b38] {\n  width: auto;\n  z-index: 1111;\n  background: white;\n  position: relative;\n}\n.chosed[data-v-27c43b38] {\n  width: auto;\n  position: relative;\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n}\n.chosed .b-icon.bi[data-v-27c43b38] {\n  font-size: 12px;\n  margin-left: 5px;\n}\n.locales[data-v-27c43b38] {\n  position: absolute;\n  box-sizing: border-box;\n  background: white;\n  box-shadow: 0px 2px 15px rgb(59 69 83 / 8%);\n  padding: 5px 15px;\n  left: -15px;\n  display: none;\n}\n.select-locale:hover .locales[data-v-27c43b38] {\n  display: block;\n}\n.locale[data-v-27c43b38] {\n  border-bottom: 1px dashed #ededed;\n  box-sizing: border-box;\n  padding: 0;\n  width: 90px;\n  color: #393c40;\n  font-size: 16px;\n  display: block;\n  padding: 5px 0;\n}\n.locale[data-v-27c43b38]:last-child {\n  border: none;\n}\n.locale[data-v-27c43b38]:hover {\n  color: #007791;\n}\n",
        "",
      ]),
        (t.exports = i);
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, n, e) {
      "use strict";
      e(272);
    },
    function (t, n, e) {
      var i = e(36)(!1);
      i.push([
        t.i,
        "\n.forgot[data-v-71be4e33] {\n  cursor: pointer;\n}\n.forgot[data-v-71be4e33]:hover {\n  color: #007791;\n}\n.form-urls a[data-v-71be4e33] {\n  margin: auto;\n}\n.captcha-field[data-v-71be4e33] {\n  display: flex;\n  flex-direction: row;\n}\n",
        "",
      ]),
        (t.exports = i);
    },
    function (t, n, e) {
      "use strict";
      e(273);
    },
    function (t, n, e) {
      var i = e(36)(!1);
      i.push([
        t.i,
        "\n.form .btn-group .btn.btn-close[data-v-03d90b5f] {\n  background-color: #b9b9b9;\n  border-color: #bdbdbd;\n}\n.foot-text[data-v-03d90b5f]{\n  font-size: 15px;\n  display:block;\n  line-height: 17px;\n}\n.foot-red[data-v-03d90b5f]{\n  color: #f54141;\n}\n",
        "",
      ]),
        (t.exports = i);
    },
    function (t, n, e) {
      "use strict";
      e(275);
    },
    function (t, n, e) {
      var i = e(36)(!1);
      i.push([
        t.i,
        ".warn_password[data-v-7152272c]{width:100%;font-size:12px;color:#ff9b9b;margin:8px 0}.date_input[data-v-7152272c]{border:1px solid #ced4da}input[data-v-7152272c]:focus{outline:none}.input_pass[data-v-7152272c]{position:relative}.view_btn[data-v-7152272c]{position:absolute;top:42px;right:30px}.view_btn img[data-v-7152272c]{height:18px}",
        "",
      ]),
        (t.exports = i);
    },
    function (t, n, e) {
      "use strict";
      e(276);
    },
    function (t, n, e) {
      var i = e(36)(!1);
      i.push([
        t.i,
        "\n.search_popup[data-v-0ec16126] {\n  display: flex;\n  justify-content: space-between;\n  min-height: auto;\n  padding: 30px 30px;\n  max-width: 625px;\n}\n.search_popup .form-control[data-v-0ec16126]{\n  margin-right: 20px;\n}\n.search_popup .btn[data-v-0ec16126] {\n  padding: 0 30px;\n  background: #007791;\n}\n.search_popup .popup-main__close[data-v-0ec16126] {\n    top: 2px;\n    right: 2px;\n}\n",
        "",
      ]),
        (t.exports = i);
    },
    function (t, n, e) {
      t.exports = e.p + "img/close.8262125.svg";
    },
    function (t, n, e) {
      "use strict";
      e(277);
    },
    function (t, n, e) {
      var i = e(36)(!1);
      i.push([
        t.i,
        '\n.error[data-v-7db225b8] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 60px 0;\n}\n.error-block[data-v-7db225b8] {\n  width: 100%;\n}\n.error-image[data-v-7db225b8] {\n  width: 100%;\n}\n.error-image img[data-v-7db225b8] {\n  height: 435px;\n}\n.error-content h2[data-v-7db225b8] {\n  font-family: "Open Sans", serif;\n  font-size: 145px;\n  font-weight: 600;\n  color: #0f87ff;\n  line-height: 140px;\n  margin: 0;\n}\n.error-content p[data-v-7db225b8] {\n  font-family: "Open Sans", sans-serif;\n  font-size: 20px;\n  line-height: 25px;\n  width: 470px;\n  margin: 5px auto 15px;\n}\n.error-content a[data-v-7db225b8] {\n  outline: none;\n  color: #fff;\n  background: #0f87ff;\n  text-decoration: none;\n  padding: 7px 25px;\n  font-size: 17px;\n  border-radius: 20px;\n  cursor: pointer;\n  border: 1px solid #0f87ff;\n  font-family: "Rubik", sans-serif;\n  line-height: 19px;\n  display: block;\n  max-width: 280px;\n  margin: 10px auto;\n}\n',
        "",
      ]),
        (t.exports = i);
    },
    function (t, n) {},
    function (t, n, e) {
      "use strict";
      e.r(n),
        e.d(n, "actions", function () {
          return i;
        });
      var i = {
        fetchAdreska: function (t, n) {
          return this.$axios
            .get("/v1/user/".concat(n, "/adreska/list/"))
            .then(function (t) {
              return t && t.data;
            });
        },
      };
    },
    function (t, n, e) {
      "use strict";
      e.r(n);
      var i = e(12),
        a = (e(45), e(40)),
        o = e.n(a);
      function r() {
        return (r = Object(i.a)(
          regeneratorRuntime.mark(function t(n, e) {
            var i, a;
            return regeneratorRuntime.wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (((i = e.method), (a = e.data), (t.prev = 1), !a)) {
                        t.next = 6;
                        break;
                      }
                      return t.abrupt("return", o.a[i](n, a));
                    case 6:
                      return t.abrupt("return", o.a[i](n));
                    case 7:
                      t.next = 12;
                      break;
                    case 9:
                      return (
                        (t.prev = 9),
                        (t.t0 = t.catch(1)),
                        t.abrupt("return", t.t0)
                      );
                    case 12:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              null,
              [[1, 9]]
            );
          })
        )).apply(this, arguments);
      }
      n.default = function (t, n) {
        return r.apply(this, arguments);
      };
    },
    function (t, n, e) {
      "use strict";
      e.r(n),
        e.d(n, "state", function () {
          return a;
        }),
        e.d(n, "getters", function () {
          return o;
        }),
        e.d(n, "mutations", function () {
          return r;
        }),
        e.d(n, "actions", function () {
          return s;
        });
      var i = e(12),
        a =
          (e(45),
          e(24),
          e(1),
          e(13),
          e(11),
          e(22),
          e(19),
          e(16),
          e(18),
          e(41),
          e(40),
          function () {
            return {
              regionList: [],
              districtList: [],
              user_id: null,
              token: null,
              refresh: null,
              access_token: null,
              refresh_token: null,
              exists: null,
            };
          }),
        o = {
          getUserId: function (t) {
            return t.user_id;
          },
          getToken: function (t) {
            return t.token;
          },
        },
        r = {
          setRegionList: function (t, n) {
            t.regionList = n;
          },
          setDistrictList: function (t, n) {
            t.regionList = n;
          },
          setUserId: function (t, n) {
            (t.user_id = n), !n && localStorage.removeItem("user_id");
          },
          setToken: function (t, n) {
            (t.token = n), localStorage.setItem("token", n);
          },
          setRefresh: function (t, n) {
            (t.refresh = n), localStorage.setItem("refresh", n);
          },
          setItem: function (t, n) {
            (t[n.name] = n.value),
              !n.value && localStorage.removeItem(n.name),
              n.value && localStorage.setItem(n.name, n.value);
          },
        },
        s = {
          registration: function (t, n) {
            return this.$oq_api
              .post("/register/verify-otp", n)
              .then(function (t) {
                return t;
              })
              .catch(function (t) {
                return t;
              });
          },
          verifyMessage: function (t, n) {
            var e = this;
            return new Promise(function (t, i) {
              e.$oq_api
                .post("/register/send-otp", n)
                .then(function (n) {
                  t(n);
                })
                .catch(function (t) {
                  i(t);
                });
            });
          },
          getRegionList: function (t) {
            return this.$oq_api.get("/regions").then(function (t) {
              return t;
            });
          },
          getRegionListGolang: function (t) {
            return this.$axios.get("/v2/region/list").then(function (t) {
              return t;
            });
          },
          getDistrictList: function (t, n) {
            return this.$oq_api
              .get("/districts?region_id=".concat(n))
              .then(function (t) {
                return t;
              });
          },
          getDistrictListGolang: function (t, n) {
            return this.$axios
              .get("/v2/district/list/".concat(n))
              .then(function (t) {
                return t;
              });
          },
          getQuarterList: function (t, n) {
            return this.$oq_api
              .get("quarters?district_id=".concat(n))
              .then(function (t) {
                return t;
              });
          },
          getNewQuarterList: function (t, n) {
            return this.$axios
              .get("/v1/user/district/".concat(n, "/new_quarter/list/"))
              .then(function (t) {
                return t;
              });
          },
          getRoadList: function (t, n) {
            return this.$axios
              .get("/v1/user/quarter/".concat(n, "/repairplannedroad/list/"))
              .then(function (t) {
                return t;
              });
          },
          getBoardRoadList: function (t, n) {
            return this.$axios
              .get(
                "/v1/user/board/"
                  .concat(n.boardId, "/quarter/")
                  .concat(n.quarterId, "/repairplannedroad/list/")
              )
              .then(function (t) {
                return t;
              });
          },
          logout: function (t) {
            var n = t.commit;
            [
              { name: "refresh", value: null },
              { name: "user_id", value: null },
              { name: "token", value: null },
              { name: "exists", value: null },
            ].forEach(function (t) {
              n("setItem", t);
            }),
              localStorage.removeItem("token"),
              this.$router.push("/");
          },
          verifyOtp: function (t, n) {
            var e = this,
              i = (t.state, t.commit);
            return new Promise(function (t, a) {
              e.$oq_api
                .post("/login/verify-otp", n)
                .then(function (n) {
                  var e = n.data,
                    a = e.access_token,
                    o = e.refresh_token,
                    r = e.exists;
                  i("setItem", { name: "token", value: a }),
                    i("setItem", { name: "refresh", value: o }),
                    i("setItem", { name: "exists", value: r }),
                    t({ token: a, refresh_token: o, exists: r });
                })
                .catch(function (t) {
                  a(t);
                });
            });
          },
          parseJwt: function (t, n) {
            var e = n.split(".")[1].replace(/-/g, "+").replace(/_/g, "/"),
              i = decodeURIComponent(
                atob(e)
                  .split("")
                  .map(function (t) {
                    return (
                      "%" + ("00" + t.charCodeAt(0).toString(16)).slice(-2)
                    );
                  })
                  .join("")
              );
            return JSON.parse(i);
          },
          checkAllItems: function (t, n) {
            var e = t.commit;
            e("setItem", { name: "user_id", value: n.user_id }),
              e("setItem", { name: "refresh", value: n.refresh }),
              e("setItem", { name: "token", value: n.token });
          },
          func401: function (t) {
            var n = this;
            return Object(i.a)(
              regeneratorRuntime.mark(function e() {
                var i, a;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (((i = t.state), (a = t.dispatch), !i.refresh)) {
                          e.next = 6;
                          break;
                        }
                        return (e.next = 4), a("refresh");
                      case 4:
                        e.next = 9;
                        break;
                      case 6:
                        return (e.next = 8), a("logout");
                      case 8:
                        n.$router.push(n.localePath({ name: "/" }));
                      case 9:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )();
          },
        };
    },
    function (t, n, e) {
      "use strict";
      e.r(n),
        e.d(n, "state", function () {
          return i;
        }),
        e.d(n, "mutations", function () {
          return a;
        }),
        e.d(n, "getters", function () {
          return o;
        }),
        e.d(n, "actions", function () {
          return r;
        });
      var i = function () {
          return { filters: {}, activeBoards: null };
        },
        a = {
          setFilters: function (t, n) {
            t.filters = n;
          },
          setActiveBoards: function (t, n) {
            t.activeBoards = n;
          },
        },
        o = {
          getActiveBoards: function (t) {
            return t.activeBoards;
          },
        },
        r = {
          fetchBoards: function (t) {
            return this.$oq_api.get("/archive/boards").then(function (t) {
              return t && t.data;
            });
          },
          fetchActiveBoards: function (t, n) {
            var e = n.params;
            this.$oq_api
              .get("/active-boards", { params: e })
              .then(function (n) {
                t.commit("setActiveBoards", n.data);
              });
          },
          fetchApplicationBoard: function (t, n) {
            return this.$axios
              .get("/v1/user/applicationboard/".concat(n, "/"))
              .then(function (t) {
                return t && t.data;
              });
          },
          fetchApplicationBoardGolang: function (t, n) {
            return this.$axios
              .get("/v2/application/board/".concat(n))
              .then(function (t) {
                return t && t.data;
              });
          },
        };
    },
    function (t, n, e) {
      "use strict";
      e.r(n),
        e.d(n, "actions", function () {
          return i;
        });
      var i = {
        fetchBudgets: function (t, n) {
          return this.$axios
            .get("/v1/user/budget/list/?board=".concat(n))
            .then(function (t) {
              return t && t.data;
            });
        },
        fetchAllBudget: function (t) {
          return this.$axios
            .get("/v1/application/numbers/info/")
            .then(function (t) {
              return t && t.data;
            });
        },
      };
    },
    function (t, n, e) {
      "use strict";
      e.r(n),
        e.d(n, "state", function () {
          return a;
        }),
        e.d(n, "mutations", function () {
          return o;
        }),
        e.d(n, "actions", function () {
          return r;
        });
      var i = e(12),
        a =
          (e(45),
          function () {
            return {};
          }),
        o = {},
        r = {
          fetchList: function () {
            return this.$axios
              .get("/v1/user/public_oversight/content/list/")
              .then(function (t) {
                return t && t.data;
              });
          },
          createCommunity: function (t, n) {
            var e = this;
            return Object(i.a)(
              regeneratorRuntime.mark(function t() {
                var i, a;
                return regeneratorRuntime.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (i = n.form),
                            (t.prev = 1),
                            (t.next = 4),
                            e.$axios.post(
                              "/v1/user/public_oversight/create/",
                              i
                            )
                          );
                        case 4:
                          return (a = t.sent), t.abrupt("return", a);
                        case 8:
                          return (
                            (t.prev = 8),
                            (t.t0 = t.catch(1)),
                            t.abrupt("return", t.t0)
                          );
                        case 11:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[1, 8]]
                );
              })
            )();
          },
          updateCommunity: function (t, n) {
            var e = this;
            return Object(i.a)(
              regeneratorRuntime.mark(function t() {
                var i, a, o;
                return regeneratorRuntime.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (i = n.form),
                            (a = n.id),
                            (t.prev = 1),
                            (t.next = 4),
                            e.$axios.patch(
                              "/v1/user/public_oversight/update/".concat(
                                a,
                                "/"
                              ),
                              i
                            )
                          );
                        case 4:
                          return (o = t.sent), t.abrupt("return", o);
                        case 8:
                          return (
                            (t.prev = 8),
                            (t.t0 = t.catch(1)),
                            t.abrupt("return", t.t0)
                          );
                        case 11:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[1, 8]]
                );
              })
            )();
          },
        };
    },
    function (t, n, e) {
      "use strict";
      e.r(n),
        e.d(n, "state", function () {
          return i;
        }),
        e.d(n, "getters", function () {
          return a;
        }),
        e.d(n, "mutations", function () {
          return o;
        }),
        e.d(n, "actions", function () {
          return r;
        });
      var i = function () {
          return { prognoses: [], programs: [] };
        },
        a = {
          Prognoses: function (t) {
            return t.prognoses;
          },
          Programs: function (t) {
            return t.programs;
          },
        },
        o = {
          setPrognoses: function (t, n) {
            t.prognoses = n;
          },
          setPrograms: function (t, n) {
            t.programs = n;
          },
        },
        r = {
          getPrognoses: function (t, n) {
            var e = t.commit;
            return this.$axios
              .get("v1/user/organizations/prognoses/" + n + "/")
              .then(function (t) {
                e("setPrognoses", t.data.prognoses);
              })
              .catch(function (t) {});
          },
          getPrograms: function (t, n) {
            var e = t.commit;
            return this.$axios
              .get("v1/user/organizations/budget-programs/" + n + "/")
              .then(function (t) {
                e("setPrograms", t.data);
              })
              .catch(function (t) {});
          },
        };
    },
    function (t, n, e) {
      "use strict";
      e.r(n),
        e.d(n, "state", function () {
          return i;
        }),
        e.d(n, "getters", function () {
          return a;
        }),
        e.d(n, "mutations", function () {
          return o;
        }),
        e.d(n, "actions", function () {
          return r;
        });
      e(6), e(11), e(88), e(127);
      var i = function () {
          return {
            current_boards: null,
            current_board_id: null,
            current_board_type: null,
            voteCount: 0,
            userInitiatives: [],
            stepData: {},
          };
        },
        a = {
          getCurrentBoards: function (t) {
            return t.current_boards;
          },
          getCurrentBoardId: function (t) {
            return t.current_board_id;
          },
          getCurrentBoardType: function (t) {
            return t.current_board_type;
          },
          voteCount: function (t) {
            return t.voteCount;
          },
          UserInitiatives: function (t) {
            return t.userInitiatives;
          },
          getStepData: function (t) {
            return t.stepData;
          },
        },
        o = {
          setStepData: function (t, n) {
            t.stepData = n;
          },
          setCurrentBoards: function (t, n) {
            t.current_boards = n;
          },
          setCurrentBoardId: function (t, n) {
            t.current_board_id = n;
          },
          setCurrentBoardType: function (t, n) {
            t.current_board_type = n;
          },
          setVoteCount: function (t, n) {
            t.voteCount = n;
          },
          setUserInitiatives: function (t, n) {
            t.userInitiatives = n || [];
          },
        },
        r = {
          fetchStepData: function (t, n) {
            var e = t.commit;
            this.$oq_api
              .get("/boards/".concat(n))
              .then(function (t) {
                var n = t.data;
                e("setStepData", n);
              })
              .catch(function () {});
          },
          getUserInitiatives: function (t) {
            var n = t.commit;
            this.$oq_api.get("/users/initiatives").then(function (t) {
              var e;
              n(
                "setUserInitiatives",
                null == t || null === (e = t.data) || void 0 === e
                  ? void 0
                  : e.initiatives
              );
            });
          },
          getInitCount: function (t, n) {
            var e = t.commit;
            this.$mf_api
              .get("info/initiative/count/" + n)
              .then(function (t) {
                e("setVoteCount", t.data.count);
              })
              .catch(function (t) {});
          },
          addInitiative: function (t, n) {
            return this.$oq_api
              .post("initiatives", n, {
                headers: { "content-type": "multipart/form-data" },
              })
              .then(function (t) {
                return t;
              });
          },
          fetchAllInitiatives: function (t) {
            return this.$axios
              .get("/v1/user/all_applications/list/")
              .then(function (t) {
                return t.data;
              });
          },
          fetchDeniedInitiatives: function (t) {
            return this.$axios
              .get("/v1/user/not_passed/list/")
              .then(function (t) {
                return t.data;
              });
          },
          fetchAcceptedInitiatives: function (t) {
            return this.$axios.get("/v1/user/passed/list/").then(function (t) {
              return t.data;
            });
          },
          fetch: function (t, n) {
            return this.$axios
              .get("/v1/user/".concat(n.id, "/application/list/"), {
                params: n.params,
              })
              .then(function (t) {
                return t;
              });
          },
          canAdd: function (t) {
            return this.$axios
              .get("/v1/application/can_create/")
              .then(function (t) {
                return t.data;
              });
          },
          getInitiativeById: function (t, n) {
            var e = n.id;
            return this.$axios
              .get("/v1/application/".concat(e, "/"))
              .then(function (t) {
                return t;
              })
              .catch(function (t) {});
          },
          getNewInitiativeById: function (t, n) {
            var e = n.id;
            return this.$mf_api
              .get("info/initiative/".concat(e))
              .then(function (t) {
                return t.data;
              })
              .catch(function (t) {});
          },
          getVotesById: function (t, n) {
            var e = n.id,
              i = n.params;
            return this.$mf_api
              .get("/info/votes/".concat(e, "/"), { params: i })
              .then(function (t) {
                return t;
              })
              .catch(function (t) {});
          },
          fetchVotes: function (t, n) {
            var e = n.id;
            return this.$axios
              .get("/v1/application/".concat(e, "/vote_counts/"))
              .then(function (t) {
                return t;
              });
          },
          vote: function (t, n) {
            var e = n.application_review;
            return this.$axios
              .post("/v1/application/vote/", { application_review: e })
              .then(function (t) {
                return t;
              });
          },
          getCurrentBoard: function (t) {
            var n = t.commit;
            return this.$axios
              .get("/v1/application/current_board_id/")
              .then(function (t) {
                return (
                  n("setCurrentBoards", t && t.data),
                  n("setCurrentBoardId", t && t.data && t.data.current_board),
                  n("setCurrentBoardType", t && t.data && t.data.type),
                  {
                    key: t && t.data && Object.keys(t.data),
                    response: t && t.data,
                  }
                );
              });
          },
          editInit: function (t, n) {
            var e = n.id,
              i = n.form;
            return this.$oq_api
              .put("/initiatives/".concat(e), i)
              .then(function (t) {
                return t;
              });
          },
          phoneValidate: function (t, n) {
            return this.$axios
              .post("/v1/user/validate_phone/", n)
              .then(function (t) {
                return t;
              });
          },
          sendSmsCode: function (t, n) {
            return this.$axios
              .post("/v1/user/temp/vote/", n)
              .then(function (t) {
                return t;
              });
          },
          phoneVoteValidate: function (t, n) {
            var e = n.key,
              i = n.phone,
              a = n.appId,
              o = n.recaptcha;
            return this.$axios
              .post("/v1/user/validate_phone/", {
                key: e,
                phone: i,
                application: a,
                recaptcha: o,
              })
              .then(function (t) {
                return t;
              });
          },
          fetchChronology: function (t, n) {
            var e = n.id;
            return this.$axios
              .get("/v1/application/".concat(e, "/chronology/"))
              .then(function (t) {
                return t;
              });
          },
          fetchOversightStats: function (t, n) {
            var e = n.id,
              i = n.params;
            return (
              delete i.limit,
              delete i.offset,
              delete i.stage,
              delete i.search,
              this.$axios
                .get(
                  "/v1/application/statistics/by_oversight/".concat(e, "/"),
                  { params: i }
                )
                .then(function (t) {
                  return t;
                })
            );
          },
          getClassificationList: function (t) {
            return this.$oq_api
              .get("/initiative-categories")
              .then(function (t) {
                return t;
              });
          },
        };
    },
    function (t, n, e) {
      "use strict";
      e.r(n),
        e.d(n, "actions", function () {
          return i;
        });
      var i = {
        getCounts: function () {
          return this.$mf_api
            .get("info/statistics/board")
            .then(function (t) {
              return t.data;
            })
            .catch(function (t) {
              return t;
            });
        },
      };
    },
    function (t, n, e) {
      "use strict";
      e.r(n),
        e.d(n, "state", function () {
          return s;
        }),
        e.d(n, "getters", function () {
          return l;
        }),
        e.d(n, "mutations", function () {
          return f;
        }),
        e.d(n, "actions", function () {
          return p;
        });
      e(6), e(5), e(2), e(7), e(3), e(8);
      var i = e(12),
        a = e(0);
      e(45), e(78), e(1), e(162), e(32), e(39), e(334), e(211), e(40);
      function o(t, n) {
        var e = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          n &&
            (i = i.filter(function (n) {
              return Object.getOwnPropertyDescriptor(t, n).enumerable;
            })),
            e.push.apply(e, i);
        }
        return e;
      }
      function r(t) {
        for (var n = 1; n < arguments.length; n++) {
          var e = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? o(Object(e), !0).forEach(function (n) {
                Object(a.a)(t, n, e[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : o(Object(e)).forEach(function (n) {
                Object.defineProperty(
                  t,
                  n,
                  Object.getOwnPropertyDescriptor(e, n)
                );
              });
        }
        return t;
      }
      var s = function () {
          return {
            profileFields: {},
            notifications: { list: [], count: 0 },
            notificationDetail: null,
          };
        },
        l = {
          ProfileFields: function (t) {
            return t.profileFields;
          },
          Notification: function (t) {
            return t.notifications;
          },
          NotificationDetail: function (t) {
            return t.notificationDetail;
          },
        },
        f = {
          setProfile: function (t, n) {
            t.profileFields = n;
          },
          setNotifications: function (t, n) {
            (t.notifications.list = n.list), (t.notifications.count = n.count);
          },
          setNotificationInfo: function (t, n) {
            t.notificationDetail = n;
          },
          setNotificationManually: function (t, n) {
            t.notifications.list.find(function (e, i) {
              e.id === n &&
                t.notifications.list.splice(
                  i,
                  1,
                  r(r({}, e), {}, { is_read: !0 })
                ),
                e.is_read ||
                  e.id != n ||
                  (t.profileFields.notifications_count -= 1);
            });
          },
        },
        p = {
          updateProfile: function (t, n) {
            return this.$oq_api
              .put("/users/profile", n)
              .then(function (t) {
                return t;
              })
              .catch(function (t) {
                return t;
              });
          },
          getUserInfo: function (t) {
            var n = t.commit;
            return this.$oq_api
              .get("/users/profile")
              .then(function (t) {
                n("setProfile", t.data);
              })
              .catch(function (t) {});
          },
          getUserWorkHistoryInfo: function (t, n) {
            var e = n.params;
            return this.$axios
              .get("/v1/admin/mf-api/", { params: e })
              .then(function (t) {
                return (t && t.data) || [];
              });
          },
          getSalaryExcel: function (t, n) {
            var e = n.params;
            this.$axios({
              method: "GET",
              url: "/v1/admin/salary_excel/",
              responseType: "blob",
              params: e,
            }).then(function (t) {
              var n = document.createElement("a");
              (n.href = window.URL.createObjectURL(new Blob([t.data]))),
                n.setAttribute("download", "report.xlsx"),
                document.body.appendChild(n),
                n.click();
            });
          },
          getInitiativeById: function (t, n) {
            var e = n.id;
            return this.$oq_api
              .get("/initiatives/".concat(e))
              .then(function (t) {
                return t.data;
              });
          },
          deleteInitiativeById: function (t, n) {
            return this.$axios
              .delete("/v1/application/".concat(n.id, "/delete_attachment/"))
              .then(function (t) {
                return t && t.data;
              });
          },
          getNotificationList: function (t, n) {
            var e = t.commit,
              i = n.params;
            return this.$oq_api
              .get("/notifications", { params: i })
              .then(function (t) {
                if (t && t.data) {
                  var n = { count: t.data.count, list: t.data.notifications };
                  return e("setNotifications", n);
                }
                return e("setNotifications", { count: 0, list: [] });
              });
          },
          getNotificationInfo: function (t, n) {
            var e = t.commit;
            return this.$oq_api
              .get("notifications/".concat(n))
              .then(function (t) {
                return t && t.data
                  ? e("setNotificationInfo", t.data)
                  : e("setNotificationInfo", null);
              });
          },
          readAllNotifications: function () {
            return this.$axios
              .post("/v1/user/notification/info/")
              .then(function (t) {
                return (t && t.data) || t.response;
              });
          },
          getStreetInfo: function (t, n) {
            var e = this;
            return Object(i.a)(
              regeneratorRuntime.mark(function t() {
                var i, a;
                return regeneratorRuntime.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (i = n.id),
                            (t.prev = 1),
                            (t.next = 4),
                            e.$axios.get("/v1/road/".concat(i, "/"))
                          );
                        case 4:
                          return (a = t.sent), t.abrupt("return", a.data || {});
                        case 8:
                          return (
                            (t.prev = 8),
                            (t.t0 = t.catch(1)),
                            t.abrupt("return", t.t0)
                          );
                        case 11:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[1, 8]]
                );
              })
            )();
          },
        };
    },
    ,
    ,
    function (t, n, e) {
      "use strict";
      e.r(n),
        e.d(n, "actions", function () {
          return r;
        });
      e(6), e(5), e(2), e(1), e(7), e(3), e(8);
      var i = e(0);
      function a(t, n) {
        var e = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          n &&
            (i = i.filter(function (n) {
              return Object.getOwnPropertyDescriptor(t, n).enumerable;
            })),
            e.push.apply(e, i);
        }
        return e;
      }
      function o(t) {
        for (var n = 1; n < arguments.length; n++) {
          var e = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? a(Object(e), !0).forEach(function (n) {
                Object(i.a)(t, n, e[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : a(Object(e)).forEach(function (n) {
                Object.defineProperty(
                  t,
                  n,
                  Object.getOwnPropertyDescriptor(e, n)
                );
              });
        }
        return t;
      }
      var r = {
        fetchApi: function (t, n) {
          return this.$axios
            .get("".concat(n.fetch_api), { params: o({}, n.params) })
            .then(function (t) {
              return t && t.data;
            });
        },
      };
    },
    function (t, n, e) {
      "use strict";
      e.r(n),
        e.d(n, "state", function () {
          return a;
        }),
        e.d(n, "mutations", function () {
          return o;
        }),
        e.d(n, "getters", function () {
          return r;
        }),
        e.d(n, "actions", function () {
          return s;
        });
      var i = e(12),
        a =
          (e(45),
          function () {
            return { allInfo: null };
          }),
        o = {
          staticGet: function (t, n) {
            t.allInfo = n;
          },
        },
        r = {
          getAllInfo: function (t) {
            return t.allInfo;
          },
        },
        s = {
          fetchStatic: function (t, n) {
            var e = this;
            return Object(i.a)(
              regeneratorRuntime.mark(function i() {
                var a, o, r;
                return regeneratorRuntime.wrap(
                  function (i) {
                    for (;;)
                      switch ((i.prev = i.next)) {
                        case 0:
                          return (
                            (a = t.commit),
                            (i.prev = 1),
                            (i.next = 4),
                            e.$axios.get("/v1/user/post/".concat(n, "/"))
                          );
                        case 4:
                          (o = i.sent),
                            (r = o.data),
                            a("staticGet", r),
                            (i.next = 12);
                          break;
                        case 9:
                          (i.prev = 9), (i.t0 = i.catch(1));
                        case 12:
                        case "end":
                          return i.stop();
                      }
                  },
                  i,
                  null,
                  [[1, 9]]
                );
              })
            )();
          },
          fetchPostsGroup: function (t, n) {
            var e = this;
            return Object(i.a)(
              regeneratorRuntime.mark(function t() {
                var i, a, o, r;
                return regeneratorRuntime.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (i = n.groupName),
                          (a = n.params),
                          (t.next = 3),
                          e.$axios.get("/v1/user/".concat(i, "/post/list/"), {
                            params: a,
                          })
                        );
                      case 3:
                        return (
                          (o = t.sent), (r = o.data), t.abrupt("return", r)
                        );
                      case 6:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          fetchGroupPostsList: function (t, n) {
            var e = this;
            return Object(i.a)(
              regeneratorRuntime.mark(function t() {
                var i, a, o;
                return regeneratorRuntime.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (i = n.params),
                          (a = n.group),
                          (t.next = 3),
                          e.$axios.get("/v1/user/".concat(a, "/post/list/"), {
                            params: i,
                          })
                        );
                      case 3:
                        return (
                          (o = t.sent), t.abrupt("return", (o && o.data) || [])
                        );
                      case 5:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          fetchPostSlug: function (t, n) {
            var e = this;
            return Object(i.a)(
              regeneratorRuntime.mark(function t() {
                var i, a;
                return regeneratorRuntime.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.next = 2),
                          e.$axios.get("/v1/user/post/".concat(n, "/"))
                        );
                      case 2:
                        return (
                          (i = t.sent), (a = i.data), t.abrupt("return", a)
                        );
                      case 5:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          fetchBeginInfo: function (t) {
            var n = this;
            return Object(i.a)(
              regeneratorRuntime.mark(function t() {
                var e, i;
                return regeneratorRuntime.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.next = 2),
                          n.$axios.get("/v1/admin/modal-post/last/")
                        );
                      case 2:
                        return (
                          (e = t.sent), (i = e.data), t.abrupt("return", i)
                        );
                      case 5:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          countAttachmentDownloads: function (t, n) {
            var e = this;
            return Object(i.a)(
              regeneratorRuntime.mark(function t() {
                var i, a, o;
                return regeneratorRuntime.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (i = n.params),
                          (t.next = 3),
                          e.$axios.get(
                            "/v1/user/download/attachment/counter/",
                            { params: i }
                          )
                        );
                      case 3:
                        return (
                          (a = t.sent), (o = a.data), t.abrupt("return", o)
                        );
                      case 6:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
        };
    },
    function (t, n, e) {
      "use strict";
      e.r(n),
        e.d(n, "actions", function () {
          return i;
        });
      var i = {
        fetchProtocols: function (t, n) {
          return this.$axios
            .get("/v1/user/".concat(n, "/protocol/list/"))
            .then(function (t) {
              return t && t.data;
            });
        },
      };
    },
    function (t, n, e) {
      "use strict";
      e.r(n),
        e.d(n, "state", function () {
          return i;
        }),
        e.d(n, "mutations", function () {
          return a;
        }),
        e.d(n, "actions", function () {
          return o;
        });
      var i = function () {
          return { questions: {} };
        },
        a = {
          setQuestions: function (t, n) {
            t.questions = n;
          },
        },
        o = {
          fetchQuestions: function (t, n) {
            var e = n.params;
            return this.$mf_api
              .get("/info/questions", { params: e })
              .then(function (t) {
                return t && t.data;
              });
          },
        };
    },
    function (t, n, e) {
      "use strict";
      e.r(n),
        e.d(n, "actions", function () {
          return o;
        });
      e(13);
      var i = e(40),
        a = e.n(i),
        o = {
          getDistrictById: function (t, n) {
            var e = n.params;
            return a.a
              .get(
                "https://admin.openbudget.uz/mf-api/organization-region?RegionID=".concat(
                  e.RegionId
                )
              )
              .then(function (t) {
                return t && t.data;
              })
              .catch(function (t) {
                return t;
              });
          },
          getSelectInfoById: function (t, n) {
            var e = n.inn,
              i = n.year,
              o = n.source,
              r = n.period;
            return a.a
              .get(
                "https://admin.openbudget.uz/mf-api/organization-budget?INN="
                  .concat(e, "&FinanceYear=")
                  .concat(i || 2020, "&Period=")
                  .concat(r || 3, "&Source=")
                  .concat(o)
              )
              .then(function (t) {
                return t && t.data;
              });
          },
          getTableItemInfo: function (t, n) {
            var e = n.inn,
              i = n.year,
              o = n.quarter;
            return a.a
              .get(
                "https://admin.openbudget.uz/mf-api/organization-contract?OrgINN="
                  .concat(e, "&Year=")
                  .concat(i || 2020, "&Quarter=")
                  .concat(o || 1)
              )
              .then(function (t) {
                return t;
              })
              .catch(function (t) {
                return t;
              });
          },
        };
    },
    function (t, n, e) {
      "use strict";
      e.r(n),
        e.d(n, "actions", function () {
          return i;
        });
      var i = {
        fetchReportsYearsList: function (t) {
          return this.$axios
            .get("/v1/reports/kvartal-year/list/")
            .then(function (t) {
              return t && t.data;
            });
        },
        fetchReportsQuarterDetail: function (t, n) {
          return this.$axios
            .get("/v1/reports/kvartal/".concat(n, "/attachments/"))
            .then(function (t) {
              return t && t.data;
            });
        },
      };
    },
    function (t, n, e) {
      "use strict";
      e.r(n),
        e.d(n, "actions", function () {
          return i;
        });
      var i = {
        searching: function (t, n) {
          return this.$axios
            .get("".concat("", "/search"), { params: n })
            .then(function (t) {
              return t && t.data;
            });
        },
      };
    },
    function (t, n, e) {
      "use strict";
      e.r(n),
        e.d(n, "state", function () {
          return i;
        }),
        e.d(n, "getters", function () {
          return a;
        }),
        e.d(n, "mutations", function () {
          return o;
        }),
        e.d(n, "actions", function () {
          return r;
        });
      var i = function () {
          return {
            usd: null,
            eur: null,
            rub: null,
            beginShow: !0,
            isHome: !1,
            isPopupLoginStatus: !1,
          };
        },
        a = {
          isPopupLoginStatus: function (t) {
            return t.isPopupLoginStatus;
          },
          getExchanges: function (t) {
            return { usd: t.usd, eur: t.eur, rub: t.rub };
          },
        },
        o = {
          setExchanges: function (t, n) {
            var e = n.usd,
              i = n.eur,
              a = n.rub;
            (t.usd = e), (t.rub = a), (t.eur = i);
          },
          closeBegin: function (t) {
            t.beginShow = !1;
          },
          setHome: function (t) {
            t.isHome = !t.isHome;
          },
          setIsPopupLoginStatus: function (t, n) {
            t.isPopupLoginStatus = n;
          },
        },
        r = {
          getExchanges: function (t) {
            if (
              !(function () {
                var t = JSON.parse(localStorage.getItem("currency")),
                  n = -1;
                t && (n = +t.expirationDate - new Date().getTime());
                if (n < 0) return localStorage.clear("currency"), !1;
                return !0;
              })()
            )
              return this.$oq_api.get("/currency").then(function (n) {
                if (n && n.data) {
                  var e = new Date(),
                    i = new Date(e);
                  i.setDate(i.getDate() + 1),
                    i.setHours(8, 0, 0, 0),
                    localStorage.setItem(
                      "currency",
                      JSON.stringify({
                        expirationDate: i.getTime(),
                        usd: n.data.currency.usd,
                        rub: n.data.currency.rub,
                        eur: n.data.currency.eur,
                      })
                    );
                  var a = n.data.currency,
                    o = a.usd,
                    r = a.rub,
                    s = a.eur;
                  t.commit("setExchanges", { usd: o, rub: r, eur: s });
                }
              });
            var n = JSON.parse(localStorage.getItem("currency")),
              e = n.usd,
              i = n.rub,
              a = n.eur;
            t.commit("setExchanges", { usd: e, rub: i, eur: a });
          },
          getMenuList: function () {
            return this.$oq_api.get("/archive/menu/list").then(function (t) {
              var n = t.data;
              return (
                localStorage.setItem("menus", JSON.stringify(n || [])), n || []
              );
            });
          },
        };
    },
    function (t, n, e) {
      "use strict";
      e.r(n),
        e.d(n, "state", function () {
          return a;
        }),
        e.d(n, "getters", function () {
          return o;
        }),
        e.d(n, "mutations", function () {
          return r;
        }),
        e.d(n, "actions", function () {
          return s;
        });
      var i = e(23),
        a =
          (e(279),
          e(1),
          e(32),
          e(283),
          e(284),
          e(285),
          e(286),
          e(287),
          e(288),
          e(289),
          e(290),
          e(291),
          e(292),
          e(293),
          e(294),
          e(295),
          e(39),
          e(147),
          e(16),
          function () {
            return {
              initiatives: {
                allPassedCount: 0,
                allNotPassedCount: 0,
                allQuarterCount: 0,
                allInitiativeCount: 0,
                items: [],
              },
              categoryStatistics: {
                allWinnerAmount: 0,
                allWinnerQuarterCount: 0,
                allWinnerCategoryCount: null,
                allWinnerCategoryName: null,
                allWinnerCategories: [],
                allWinnerInitiativesCount: 0,
                maxVoteCount: 0,
                minVoteCount: 0,
              },
              votesByArea: [],
              districtBudgetDebt: { allAllocatedSum: 0, items: [] },
            };
          }),
        o = {
          getInitiativesStatistics: function (t) {
            return t.initiatives;
          },
          getCategoryStatistics: function (t) {
            return t.categoryStatistics;
          },
          getVotesByArea: function (t) {
            return t.votesByArea;
          },
          getDistrictBudgetDebt: function (t) {
            return t.districtBudgetDebt;
          },
        },
        r = {
          setInitiativesStatistics: function (t, n) {
            (t.initiatives.allPassedCount = n.allPassedCount),
              (t.initiatives.allNotPassedCount = n.allNotPassedCount),
              (t.initiatives.allQuarterCount = n.allQuarterCount),
              (t.initiatives.allInitiativeCount = n.allInitiativeCount),
              n.items && (t.initiatives.items = n.items);
          },
          setCategoryStatistics: function (t, n) {
            if (
              ((t.categoryStatistics.allWinnerAmount = n.allWinnerAmount),
              (t.categoryStatistics.allWinnerCategoryCount =
                n.allWinnerCategoryCount),
              (t.categoryStatistics.allWinnerCategoryName =
                n.allWinnerCategoryName),
              (t.categoryStatistics.allWinnerInitiativesCount =
                n.allWinnerInitiativesCount),
              (t.categoryStatistics.maxVoteCount = n.maxVoteCount),
              (t.categoryStatistics.minVoteCount = n.minVoteCount),
              (t.categoryStatistics.allWinnerQuarterCount =
                n.allWinnerQuarterCount),
              n.allWinnerCategoryCount && n.allWinnerCategoryName)
            ) {
              var e = new Map(Object.entries(n.allWinnerCategoryName)),
                a = Object.entries(n.allWinnerCategoryCount).map(function (t) {
                  var n = Object(i.a)(t, 2),
                    a = n[0],
                    o = n[1];
                  return { regionName: e.get(a), value: o };
                });
              t.categoryStatistics.allWinnerCategories = a;
            }
          },
          setVotesByArea: function (t, n) {
            Array.isArray(n) ? (t.votesByArea = n) : (t.votesByArea = []);
          },
          setDistrictBudgetDebt: function (t, n) {
            Array.isArray(n.items) && (t.districtBudgetDebt.items = n.items),
              (t.districtBudgetDebt.allAllocatedSum = n.allAllocatedSum);
          },
        },
        s = {
          getInitiativesStatistics: function (t, n) {
            var e = n.params;
            return this.$mf_api
              .get("/info/statistics/initiative", { params: e })
              .then(function (n) {
                n && n.data && t.commit("setInitiativesStatistics", n.data);
              });
          },
          getCategoryStatistics: function (t, n) {
            var e = n.params;
            return this.$mf_api
              .get("info/statistics/initiative-category/".concat(e.boardId))
              .then(function (n) {
                n && n.data && t.commit("setCategoryStatistics", n.data);
              });
          },
          getVotesByAreaStatistics: function (t, n) {
            var e = n.id;
            return this.$mf_api
              .get("info/statistics/votes-by-area/".concat(e))
              .then(function (n) {
                n && n.data && t.commit("setVotesByArea", n.data);
              });
          },
          getDistrictBudgetDebt: function (t, n) {
            var e = n.id;
            return this.$mf_api
              .get("info/statistics/district-budget-debt/".concat(e))
              .then(function (n) {
                n && n.data && t.commit("setDistrictBudgetDebt", n.data);
              });
          },
        };
    },
    ,
    ,
    function (t, n, e) {
      "use strict";
      e.r(n),
        e.d(n, "actions", function () {
          return i;
        });
      var i = {
        sendMeCode: function (t, n) {
          return this.$axios
            .post("/v1/user/password/phone/verify/", n)
            .then(function (t) {
              return (t && t.data) || t.response;
            })
            .catch(function (t) {
              return t;
            });
        },
        resetCode: function (t, n) {
          return this.$axios
            .post("/v1/user/password/reset/", n)
            .then(function (t) {
              return t.response;
            })
            .catch(function (t) {
              return t;
            });
        },
      };
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, n) {},
    ,
    function (t, n) {},
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function (t, n, e) {
      "use strict";
      e.r(n);
      e(6), e(5), e(2), e(7), e(8);
      var i = e(31),
        a = e(0),
        o = e(12),
        r =
          (e(45),
          e(42),
          e(16),
          e(1),
          e(3),
          e(18),
          e(41),
          e(19),
          e(11),
          e(22),
          e(56));
      function s(t, n) {
        var e = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          n &&
            (i = i.filter(function (n) {
              return Object.getOwnPropertyDescriptor(t, n).enumerable;
            })),
            e.push.apply(e, i);
        }
        return e;
      }
      function l(t) {
        for (var n = 1; n < arguments.length; n++) {
          var e = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? s(Object(e), !0).forEach(function (n) {
                Object(a.a)(t, n, e[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : s(Object(e)).forEach(function (n) {
                Object.defineProperty(
                  t,
                  n,
                  Object.getOwnPropertyDescriptor(e, n)
                );
              });
        }
        return t;
      }
      var f = new Date("February 26, 2023 10:00:00"),
        p = new Date(),
        c = {
          name: "header-top",
          data: function () {
            return {
              endDate: f,
              now: p,
              isPending: !1,
              beginInfo: null,
              boardId: null,
              currentBoards: null,
              isPopupForgotStatus: !1,
              isConfirmCode: !1,
              isNewPassword: !1,
              isSearch: !1,
              phoneNumber: null,
              otp: null,
              token: null,
              showWarnOtp: { status: !1, text: "Пожалуйста, введите код" },
              newPasswordWarn: { status: !1, text: "Неверный код" },
              showInfo: !1,
              showBegin: !1,
              numberNotFound: !1,
              isWaitingStage: !0,
            };
          },
          mounted: function () {
            var t = this;
            return Object(o.a)(
              regeneratorRuntime.mark(function n() {
                return regeneratorRuntime.wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        t.getCurrency(),
                          localStorage.getItem("token") &&
                            t.$store.commit(
                              "authantication/setToken",
                              localStorage.getItem("token")
                            ),
                          localStorage.getItem("user_id") &&
                            t.$store.commit(
                              "authantication/setUserId",
                              localStorage.getItem("user_id")
                            ),
                          t.$store.state.static.isHome
                            ? setTimeout(function () {
                                (t.showBegin = !0),
                                  t.$store.commit("static/setHome");
                              }, 1300)
                            : ((t.showBegin = t.$store.state.static.beginShow),
                              (t.showBegin = !0));
                      case 2:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            )();
          },
          computed: l(
            l(
              l(
                l(
                  l(
                    {
                      isLoggedIn: function () {
                        var t;
                        return !(
                          null === (t = localStorage) ||
                          void 0 === t ||
                          !t.getItem("user_id")
                        );
                      },
                    },
                    Object(r.c)({ getUserId: "authantication/getToken" })
                  ),
                  Object(r.c)("static", ["isPopupLoginStatus"])
                ),
                Object(r.c)("static", ["getExchanges"])
              ),
              Object(r.c)("board", ["getActiveBoards"])
            ),
            {},
            {
              canBeAddedInitiative: function () {
                var t, n, e, i;
                return !!(
                  new Date().getTime() >=
                    new Date(
                      (null === (t = this.getActiveBoards) ||
                      void 0 === t ||
                      null === (n = t.boards) ||
                      void 0 === n
                        ? void 0
                        : n.accept_start_date) || "2023-02-06T00:00:00Z"
                    ).getTime() &&
                  new Date().getTime() <=
                    new Date(
                      (null === (e = this.getActiveBoards) ||
                      void 0 === e ||
                      null === (i = e.boards) ||
                      void 0 === i
                        ? void 0
                        : i.accept_end_date) || "2023-02-26T05:00:00Z"
                    ).getTime()
                );
              },
            }
          ),
          methods: l(
            l({}, Object(r.d)("static", ["setIsPopupLoginStatus"])),
            {},
            {
              getCurrentBoard: function () {
                var t = this;
                this.$store
                  .dispatch("initiative/getCurrentBoard")
                  .then(function (n) {
                    t.currentBoards = n.response;
                  });
              },
              fetchBeginInfo: function () {
                var t = this;
                this.$store.dispatch("posts/fetchBeginInfo").then(function (n) {
                  t.beginInfo = n;
                });
              },
              getCurrency: function () {
                this.$store.dispatch("static/getExchanges");
              },
              closeModal: function () {
                this.setIsPopupLoginStatus(!1),
                  (this.isPopupForgotStatus = !1),
                  (this.isConfirmCode = !1),
                  (this.isNewPassword = !1),
                  (this.isSearch = !1),
                  (this.showInfo = !1),
                  (this.showWarnOtp = {
                    status: !1,
                    text: "Пожалуйста, введите код",
                  }),
                  (this.newPasswordWarn = { status: !1, text: "Неверный код" });
              },
              forgotPassword: function () {
                (this.isPopupForgotStatus = !0),
                  this.setIsPopupLoginStatus(!1),
                  (this.isConfirmCode = !1);
              },
              sendMeCode: function () {
                var t = this,
                  n = "";
                this.phoneNumber
                  .split("")
                  .map(function (t) {
                    return "+" === t ||
                      "-" === t ||
                      "(" === t ||
                      ")" === t ||
                      " " === t
                      ? ""
                      : t;
                  })
                  .forEach(function (t) {
                    n += t;
                  }),
                  (this.isPending = !0),
                  this.$store
                    .dispatch("user/sendMeCode", { username: n })
                    .then(function (n) {
                      (t.isPending = !1),
                        n &&
                          n.token &&
                          ((t.token = n.token),
                          (t.isConfirmCode = !0),
                          (t.isPopupForgotStatus = !1),
                          t.setIsPopupLoginStatus(!1)),
                        404 == n.status &&
                          ((t.numberNotFound = !0), (t.isPending = !1));
                    });
              },
              confirmCode: function () {
                6 == (this.otp += "").split("").length
                  ? ((this.isPopupForgotStatus = !1),
                    this.setIsPopupLoginStatus(!1),
                    (this.isConfirmCode = !1),
                    (this.showWarnOtp.status = !1),
                    (this.isNewPassword = !0))
                  : (this.showWarnOtp.status = !0);
              },
              newPassword: function (t) {
                var n = this,
                  e = "";
                this.phoneNumber
                  .split("")
                  .map(function (t) {
                    return "+" === t ||
                      "-" === t ||
                      "(" === t ||
                      ")" === t ||
                      " " === t
                      ? ""
                      : t;
                  })
                  .forEach(function (t) {
                    e += t;
                  }),
                  this.$store
                    .dispatch("user/resetCode", {
                      username: e,
                      otp: this.otp,
                      token: this.token,
                      password: t,
                    })
                    .then(function (t) {
                      t && 400 == t.status
                        ? (n.newPasswordWarn.status = !0)
                        : ((n.isNewPassword = !0),
                          n.closeModal(),
                          n.setIsPopupLoginStatus(!0));
                    });
              },
              fillPhoneNumber: function (t) {
                this.phoneNumber = t;
              },
              fillOtp: function (t) {
                this.otp = t;
              },
              showInfoUser: function () {
                localStorage.getItem("token")
                  ? (this.showInfo = !0)
                  : this.setIsPopupLoginStatus(!0);
              },
              openMobileWindow: function () {
                var t = window.innerWidth,
                  n = window.innerHeight;
                window.open(
                  "/",
                  "mobileWindow_" + Math.random().toString().slice(2),
                  "height=600, width=400, top=" +
                    (n / 2 - 275) +
                    ", left=" +
                    (t / 2 - 225) +
                    ", toolbar=0, location=0, menubar=0, directories=0, scrollbars=0, resizable=no, fullscreen=no"
                );
              },
              showSearch: function () {
                this.isSearch = !0;
              },
              addInitiative: function () {
                this.close(),
                  localStorage.getItem("token")
                    ? this.$router.push({ path: "/profile?status=40" })
                    : ((this.addInit = !0), this.setIsPopupLoginStatus(!0));
              },
              close: function () {
                this.$store.commit("static/closeBegin"), (this.showBegin = !1);
              },
            }
          ),
          filters: {
            formatNumber: function (t) {
              if ("object" == Object(i.a)(t)) return t;
              for (
                var n = (t = t.toString()).split(""), e = 0;
                e < n.length;
                e++
              )
                "." === n[e] && (n[e] = ",");
              var a = n.join("").toString().split(".");
              return (
                (a[0] = a[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ")), a.join(",")
              );
            },
          },
        },
        d = (e(530), e(15)),
        u = Object(d.a)(
          c,
          function () {
            var t = this,
              n = t._self._c;
            return n(
              "div",
              { staticClass: "header-top" },
              [
                n(
                  "div",
                  { staticClass: "fixed-list" },
                  [
                    t.canBeAddedInitiative
                      ? n(
                          "a",
                          {
                            staticClass: "fixed-horizontal",
                            attrs: { href: "" },
                            on: {
                              click: function (n) {
                                return (
                                  n.preventDefault(),
                                  t.addInitiative.apply(null, arguments)
                                );
                              },
                            },
                          },
                          [
                            n(
                              "div",
                              { staticClass: "fixed-horizontal__image" },
                              [
                                n(
                                  "svg",
                                  {
                                    attrs: {
                                      width: "86",
                                      height: "94",
                                      viewBox: "0 0 86 94",
                                      fill: "none",
                                      xmlns: "http://www.w3.org/2000/svg",
                                    },
                                  },
                                  [
                                    n("path", {
                                      attrs: {
                                        d: "M71.8991 40C71.8991 25.8 60.4991 14.2 46.1991 13.9C31.9991 14.2 20.4991 25.8 20.4991 40C20.3991 46.7 22.6991 53.3 27.1991 58.4C28.5991 59.9 30.0991 61.2 31.7991 62.4C34.6991 64.6 37.3991 66.8 38.1991 69.8C35.8991 70.7 34.4991 72.9 34.3991 75.3V79.3C34.3991 81.8 35.9991 84 38.3991 84.9V85.3C38.3991 89.7 41.8991 93.2 46.2991 93.2C50.6991 93.2 54.1991 89.7 54.1991 85.3V84.8C56.5991 84 58.0991 81.7 58.1991 79.2V75.2C58.1991 72.8 56.6991 70.6 54.3991 69.7C55.0991 66.7 57.8991 64.6 60.7991 62.3C62.3991 61.1 63.9991 59.8 65.3991 58.3C69.6991 53.3 72.0991 46.8 71.8991 40ZM46.1991 89.1C43.9991 89.1 42.1991 87.3 42.1991 85.1H50.0991C50.1991 87.3 48.3991 89.1 46.1991 89.1ZM54.0991 79.2C54.0991 80.3 53.1991 81.2 52.0991 81.2H40.2991C39.1991 81.2 38.2991 80.3 38.2991 79.2V75.2C38.2991 74.1 39.1991 73.2 40.2991 73.2H52.1991C53.2991 73.2 54.1991 74.1 54.1991 75.2V79.2H54.0991ZM40.2991 43.6H38.2991C37.1991 43.6 36.2991 42.7 36.2991 41.6C36.2991 40.5 37.1991 39.6 38.2991 39.6C39.3991 39.6 40.2991 40.5 40.2991 41.6V43.6ZM44.1991 69.3V47.5H48.1991V69.3H44.1991ZM62.2991 55.8C61.0991 57.1 59.6991 58.2 58.2991 59.3C55.9991 60.9 53.8991 62.9 52.1991 65.2V47.5H54.1991C57.4991 47.5 60.0991 44.8 60.0991 41.6C60.0991 38.4 57.3991 35.7 54.1991 35.7C50.8991 35.7 48.2991 38.4 48.2991 41.6V43.6H44.2991V41.6C44.2991 38.3 41.5991 35.7 38.3991 35.7C35.0991 35.7 32.4991 38.4 32.4991 41.6C32.4991 44.8 35.1991 47.5 38.3991 47.5H40.3991V65.1C38.6991 62.8 36.5991 60.9 34.2991 59.2C32.8991 58.2 31.4991 57 30.2991 55.7C26.4991 51.4 24.4991 45.8 24.5991 40C24.5991 28 34.5991 17.8 46.1991 17.8C57.7991 17.8 67.7991 28 67.9991 40.1C68.0991 45.8 66.0991 51.4 62.2991 55.8ZM52.0991 43.6V41.6C52.0991 40.5 52.9991 39.6 54.0991 39.6C55.1991 39.6 56.0991 40.5 56.0991 41.6C56.0991 42.7 55.1991 43.6 54.0991 43.6H52.0991Z",
                                        fill: "white",
                                      },
                                    }),
                                    t._v(" "),
                                    n("path", {
                                      attrs: {
                                        d: "M77.8991 41.6H83.7991C84.8991 41.6 85.7991 40.7 85.7991 39.6C85.7991 38.5 84.8991 37.6 83.7991 37.6H77.8991C76.7991 37.6 75.8991 38.5 75.8991 39.6C75.8991 40.7 76.7991 41.6 77.8991 41.6Z",
                                        fill: "white",
                                      },
                                    }),
                                    t._v(" "),
                                    n("path", {
                                      attrs: {
                                        d: "M68.5991 19.2C69.0991 19.2 69.5991 19 69.9991 18.6L74.1991 14.4C74.6991 13.9 74.8991 13.2 74.6991 12.5C74.4991 11.8 73.9991 11.3 73.2991 11.1C72.5991 10.9 71.8991 11.1 71.3991 11.6L67.1991 15.8C66.5991 16.4 66.4991 17.2 66.7991 18C67.0991 18.7 67.7991 19.2 68.5991 19.2Z",
                                        fill: "white",
                                      },
                                    }),
                                    t._v(" "),
                                    n("path", {
                                      attrs: {
                                        d: "M46.1991 9.9C47.2991 9.9 48.1991 9 48.1991 7.9V2C48.1991 0.9 47.2991 0 46.1991 0C45.0991 0 44.1991 0.9 44.1991 2V7.9C44.1991 9 45.0991 9.9 46.1991 9.9Z",
                                        fill: "white",
                                      },
                                    }),
                                    t._v(" "),
                                    n("path", {
                                      attrs: {
                                        d: "M25.1991 18.6C25.5991 18.2 25.7991 17.7 25.7991 17.2C25.7991 16.7 25.5991 16.2 25.1991 15.8L20.9991 11.6C20.4991 11.1 19.7991 10.9 19.0991 11.1C18.3991 11.3 17.8991 11.8 17.6991 12.5C17.4991 13.2 17.6991 13.9 18.1991 14.4L22.3991 18.6C22.7991 19 23.2991 19.2 23.7991 19.2C24.2991 19.2 24.7991 19 25.1991 18.6Z",
                                        fill: "white",
                                      },
                                    }),
                                    t._v(" "),
                                    n("path", {
                                      attrs: {
                                        d: "M8.59913 37.6001C7.49913 37.6001 6.59913 38.5001 6.59913 39.6001C6.59913 40.7001 7.49913 41.6001 8.59913 41.6001H14.4991C15.5991 41.6001 16.4991 40.7001 16.4991 39.6001C16.4991 38.5001 15.5991 37.6001 14.4991 37.6001H8.59913Z",
                                        fill: "white",
                                      },
                                    }),
                                    t._v(" "),
                                    n("path", {
                                      attrs: {
                                        d: "M22.9994 75.3003C22.9994 76.412 22.0985 77.3129 20.9862 77.3129H13.512V84.7874C13.512 85.8994 12.6108 86.8003 11.4993 86.8C10.9434 86.8 10.4403 86.5751 10.0764 86.211C9.71205 85.8465 9.48682 85.3436 9.48707 84.788L9.48677 77.3126H2.0117C1.45619 77.3126 0.953449 77.0877 0.588814 76.7231C0.22508 76.3593 7.51206e-08 75.8562 7.51206e-08 75.3003C-0.000300366 74.1888 0.900622 73.2877 2.01275 73.2877H9.48707V65.8131C9.48707 64.7013 10.3885 63.8 11.5001 63.8C12.6114 63.8003 13.512 64.7007 13.5126 65.8124V73.2877H20.9876C22.0991 73.2883 22.9988 74.1888 22.9994 75.3003Z",
                                        fill: "white",
                                      },
                                    }),
                                  ]
                                ),
                              ]
                            ),
                            t._v(" "),
                            n(
                              "div",
                              { staticClass: "fixed-horizontal__title" },
                              [n("span", [t._v(t._s(t.$t("addInitiative")))])]
                            ),
                          ]
                        )
                      : t._e(),
                    t._v(" "),
                    n(
                      "nuxt-link",
                      {
                        staticClass: "fixed-list__item reditem",
                        attrs: { to: t.localePath({ path: "/instructions" }) },
                        on: {
                          click: function (n) {
                            return (
                              n.preventDefault(),
                              t.showInfoUser.apply(null, arguments)
                            );
                          },
                        },
                      },
                      [
                        n("div", { staticClass: "fixed-list__image" }, [
                          n(
                            "svg",
                            {
                              attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                id: "Capa_1",
                                "enable-background": "new 0 0 512 512",
                                height: "512",
                                viewBox: "0 0 512 512",
                                width: "512",
                              },
                            },
                            [
                              n("g", [
                                n("path", {
                                  attrs: {
                                    d: "m121.403 209.555h38.951c10.637 0 19.291-8.631 19.291-19.239v-38.858c0-10.608-8.654-19.239-19.291-19.239h-38.951c-10.621 0-19.262 8.631-19.262 19.239v38.858c0 10.608 8.641 19.239 19.262 19.239zm.738-57.338h37.503v37.34h-37.503z",
                                  },
                                }),
                                t._v(" "),
                                n("path", {
                                  attrs: {
                                    d: "m468.709 279.475c-4.789 0-9.596 1.025-13.982 3.048-3.372-10.689-11.397-17.562-20.58-20.428v-214.91c-.001-26.018-21.208-47.185-47.275-47.185h-328.597c-26.067 0-47.275 21.167-47.275 47.185v26.614c0 12.499 10.183 22.668 22.7 22.668h9.745v375.577c0 12.499 10.183 22.668 22.7 22.668h264.652c17.544 11.368 36.679 17.289 56.118 17.288 10.808 0 21.713-1.829 32.484-5.566 23.233-8.059 43.99-24.909 58.448-47.447 15.33-23.898 23.335-53.304 23.15-84.981v-61.022c0-21.999-16.243-33.509-32.288-33.509zm-405.264 192.569v-375.577h91.625c5.523 0 10-4.477 10-9.999s-4.477-9.999-10-9.999h-121.37c-1.463 0-2.7-1.223-2.7-2.671v-26.613c0-14.991 12.235-27.187 27.275-27.187h289.979c-5.451 7.69-8.656 17.071-8.656 27.187v26.614c0 1.448-1.236 2.671-2.7 2.671h-91.823c-5.523 0-10 4.477-10 9.999s4.477 9.999 10 9.999h91.823c12.517 0 22.7-10.169 22.7-22.668v-26.615c0-14.991 12.235-27.187 27.274-27.187s27.274 12.196 27.274 27.187v214.905c-1.349.421-2.677.918-3.965 1.512-4.56-14.464-17.636-21.965-30.582-21.965-4.176 0-8.362.779-12.274 2.321v-56.306c0-21.999-16.235-33.51-32.273-33.51-16.039 0-32.274 11.51-32.274 33.51v144.491c0 4.551.083 8.701.155 12.363.009.395.017.795.024 1.196l-23.244-24.919c-13.541-14.495-33.12-15.982-47.611-3.614-14.26 12.171-20.829 36.126-4.917 56.547l69.408 89.083c3.301 4.236 6.733 8.204 10.273 11.915h-240.721c-1.464 0-2.7-1.223-2.7-2.67zm417.552-97.98c.318 54.464-26.434 99.007-68.153 113.478-35.294 12.24-72.857-1.601-100.474-37.033l-69.407-89.082c-8.278-10.624-5.084-22.896 2.124-29.047 1.682-1.435 4.901-3.608 8.969-3.608 3.253 0 7.05 1.389 11.037 5.657l24.351 26.106c6.873 7.362 15.42 16.525 24.899 12.683 7.551-3.063 8.254-11.597 8.485-14.401.317-3.857.222-8.646.101-14.709-.07-3.568-.151-7.612-.151-11.964v-144.492c0-12.861 10.225-13.512 12.274-13.512s12.273.651 12.273 13.512v143.16c0 5.522 4.478 9.999 10 9.999s10-4.477 10-9.999v-55.665c0-12.861 10.225-13.512 12.274-13.512 3.235 0 6.323 1.155 8.47 3.171 2.524 2.368 3.804 5.847 3.804 10.342v55.665c0 5.522 4.478 9.999 10 9.999s10-4.477 10-9.999v-36.733c0-12.87 10.218-13.522 12.267-13.522 3.236 0 6.325 1.157 8.475 3.173 2.526 2.371 3.807 5.852 3.807 10.348v36.733c0 5.522 4.478 9.999 10 9.999s10-4.477 10-9.999v-17.828c0-12.86 10.236-13.511 12.288-13.511 3.24 0 6.333 1.156 8.482 3.172 2.525 2.367 3.806 5.846 3.806 10.339v61.08z",
                                  },
                                }),
                                t._v(" "),
                                n("path", {
                                  attrs: {
                                    d: "m201.721 142.218c0 5.522 4.477 9.999 10 9.999h80.032c5.522 0 10-4.477 10-9.999s-4.478-9.999-10-9.999h-80.032c-5.523 0-10 4.477-10 9.999z",
                                  },
                                }),
                                t._v(" "),
                                n("path", {
                                  attrs: {
                                    d: "m274.764 189.557h-63.043c-5.523 0-10 4.477-10 9.999s4.477 9.999 10 9.999h63.043c5.522 0 10-4.477 10-9.999s-4.478-9.999-10-9.999z",
                                  },
                                }),
                                t._v(" "),
                                n("path", {
                                  attrs: {
                                    d: "m112.141 266.92h152.736c5.522 0 10-4.477 10-9.999s-4.478-9.999-10-9.999h-152.736c-5.523 0-10 4.477-10 9.999s4.477 9.999 10 9.999z",
                                  },
                                }),
                                t._v(" "),
                                n("path", {
                                  attrs: {
                                    d: "m112.141 324.258h82.391c5.523 0 10-4.477 10-9.999s-4.477-9.999-10-9.999h-82.391c-5.523 0-10 4.477-10 9.999s4.477 9.999 10 9.999z",
                                  },
                                }),
                                t._v(" "),
                                n("path", {
                                  attrs: {
                                    d: "m112.141 381.624h72.561c5.523 0 10-4.477 10-9.999s-4.477-9.999-10-9.999h-72.561c-5.523 0-10 4.477-10 9.999s4.477 9.999 10 9.999z",
                                  },
                                }),
                                t._v(" "),
                                n("path", {
                                  attrs: {
                                    d: "m218.596 418.964h-106.455c-5.523 0-10 4.477-10 9.999s4.477 9.999 10 9.999h106.455c5.523 0 10-4.477 10-9.999s-4.477-9.999-10-9.999z",
                                  },
                                }),
                                t._v(" "),
                                n("path", {
                                  attrs: {
                                    d: "m200.072 96.467h.057c5.523 0 9.972-4.477 9.972-9.999s-4.505-9.999-10.028-9.999-10 4.477-10 9.999 4.476 9.999 9.999 9.999z",
                                  },
                                }),
                              ]),
                            ]
                          ),
                        ]),
                        t._v(" "),
                        n("div", { staticClass: "fixed-list__title" }, [
                          n("span", [t._v(t._s(t.$t("instructions")))]),
                        ]),
                      ]
                    ),
                    t._v(" "),
                    n(
                      "nuxt-link",
                      {
                        staticClass: "fixed-list__item",
                        attrs: { to: t.localePath({ path: "/questions" }) },
                      },
                      [
                        n("div", { staticClass: "fixed-list__image" }, [
                          n(
                            "svg",
                            {
                              staticStyle: {
                                "enable-background": "new 0 0 64 64",
                              },
                              attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                "xmlns:xlink": "http://www.w3.org/1999/xlink",
                                id: "Layer_1_1_",
                                version: "1.1",
                                viewBox: "0 0 64 64",
                                "xml:space": "preserve",
                              },
                            },
                            [
                              n("g", [
                                n("path", {
                                  attrs: {
                                    d: "M58,17h-1V1H7v16H6c-2.757,0-5,2.243-5,5v30c0,2.757,2.243,5,5,5h13v4h-4v2h34v-2h-4v-4h13c2.757,0,5-2.243,5-5V22   C63,19.243,60.757,17,58,17z M9,11h46v32H9V11z M55,3v6H9V3H55z M6,19h1v26h50V19h1c1.654,0,3,1.346,3,3v27H3V22   C3,20.346,4.346,19,6,19z M43,61H21v-4h22V61z M58,55H6c-1.654,0-3-1.346-3-3v-1h58v1C61,53.654,59.654,55,58,55z",
                                  },
                                }),
                                t._v(" "),
                                n("rect", {
                                  attrs: {
                                    height: "2",
                                    width: "2",
                                    x: "11",
                                    y: "5",
                                  },
                                }),
                                t._v(" "),
                                n("rect", {
                                  attrs: {
                                    height: "2",
                                    width: "2",
                                    x: "15",
                                    y: "5",
                                  },
                                }),
                                t._v(" "),
                                n("rect", {
                                  attrs: {
                                    height: "2",
                                    width: "2",
                                    x: "19",
                                    y: "5",
                                  },
                                }),
                                t._v(" "),
                                n("path", {
                                  attrs: {
                                    d: "M32.531,15h-1.062C28.454,15,26,17.454,26,20.469V22h2v-1.531C28,18.556,29.556,17,31.469,17h1.062   C34.444,17,36,18.556,36,20.469c0,1.212-0.646,2.352-1.685,2.975L31,25.434V31h2v-4.434l2.345-1.407   c1.638-0.982,2.655-2.78,2.655-4.69C38,17.454,35.546,15,32.531,15z",
                                  },
                                }),
                                t._v(" "),
                                n("path", {
                                  attrs: {
                                    d: "M32,33c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S33.654,33,32,33z M32,37c-0.551,0-1-0.449-1-1s0.449-1,1-1   s1,0.449,1,1S32.551,37,32,37z",
                                  },
                                }),
                                t._v(" "),
                                n("rect", {
                                  attrs: {
                                    height: "2",
                                    width: "13",
                                    x: "11",
                                    y: "13",
                                  },
                                }),
                                t._v(" "),
                                n("rect", {
                                  attrs: {
                                    height: "2",
                                    width: "13",
                                    x: "11",
                                    y: "17",
                                  },
                                }),
                                t._v(" "),
                                n("rect", {
                                  attrs: {
                                    height: "2",
                                    width: "13",
                                    x: "11",
                                    y: "21",
                                  },
                                }),
                                t._v(" "),
                                n("rect", {
                                  attrs: {
                                    height: "2",
                                    width: "13",
                                    x: "11",
                                    y: "25",
                                  },
                                }),
                                t._v(" "),
                                n("rect", {
                                  attrs: {
                                    height: "2",
                                    width: "13",
                                    x: "11",
                                    y: "29",
                                  },
                                }),
                                t._v(" "),
                                n("rect", {
                                  attrs: {
                                    height: "2",
                                    width: "13",
                                    x: "40",
                                    y: "23",
                                  },
                                }),
                                t._v(" "),
                                n("rect", {
                                  attrs: {
                                    height: "2",
                                    width: "13",
                                    x: "40",
                                    y: "27",
                                  },
                                }),
                                t._v(" "),
                                n("rect", {
                                  attrs: {
                                    height: "2",
                                    width: "13",
                                    x: "40",
                                    y: "31",
                                  },
                                }),
                                t._v(" "),
                                n("rect", {
                                  attrs: {
                                    height: "2",
                                    width: "13",
                                    x: "40",
                                    y: "35",
                                  },
                                }),
                                t._v(" "),
                                n("rect", {
                                  attrs: {
                                    height: "2",
                                    width: "13",
                                    x: "40",
                                    y: "39",
                                  },
                                }),
                              ]),
                            ]
                          ),
                        ]),
                        t._v(" "),
                        n("div", { staticClass: "fixed-list__title" }, [
                          n("span", [t._v(t._s(t.$t("onlineAppeal")))]),
                        ]),
                      ]
                    ),
                  ],
                  1
                ),
                t._v(" "),
                n(
                  "transition",
                  { attrs: { name: "popup-fade", mode: "in-out" } },
                  [
                    t.showBegin && t.beginInfo && t.beginInfo.is_active
                      ? n("PopupBegin", {
                          attrs: {
                            close: t.close,
                            clickFunction: t.addInitiative,
                            beginInfo: t.beginInfo,
                          },
                        })
                      : t._e(),
                  ],
                  1
                ),
                t._v(" "),
                n(
                  "transition",
                  { attrs: { name: "popup-fade", mode: "in-out" } },
                  [
                    t.showInfo
                      ? n("PopupUserInfo", { attrs: { close: t.closeModal } })
                      : t._e(),
                  ],
                  1
                ),
                t._v(" "),
                n("b-container", [
                  n("div", { staticClass: "header-top__main" }, [
                    n("div", { staticClass: "header-top__left" }, [
                      n("div", { staticClass: "header-top__currency" }, [
                        n("strong", [t._v("USD")]),
                        t._v(" "),
                        n("span", [
                          t._v(t._s(t._f("formatNumber")(t.getExchanges.usd))),
                        ]),
                      ]),
                      t._v(" "),
                      n("div", { staticClass: "header-top__currency" }, [
                        n("strong", [t._v("EUR")]),
                        t._v(" "),
                        n("span", [
                          t._v(t._s(t._f("formatNumber")(t.getExchanges.eur))),
                        ]),
                      ]),
                      t._v(" "),
                      n("div", { staticClass: "header-top__currency" }, [
                        n("strong", [t._v("RUB")]),
                        t._v(" "),
                        n("span", [
                          t._v(t._s(t._f("formatNumber")(t.getExchanges.rub))),
                        ]),
                      ]),
                    ]),
                    t._v(" "),
                    n(
                      "div",
                      { staticClass: "header-top__right" },
                      [
                        n(
                          "div",
                          {
                            staticClass:
                              "header-top__item header-top__item--special",
                          },
                          [
                            n(
                              "a",
                              {
                                attrs: { href: "#" },
                                on: {
                                  click: function (n) {
                                    return (
                                      n.preventDefault(),
                                      t.openMobileWindow.apply(null, arguments)
                                    );
                                  },
                                },
                              },
                              [
                                n(
                                  "svg",
                                  {
                                    attrs: {
                                      width: "11",
                                      height: "18",
                                      viewBox: "0 0 11 18",
                                      fill: "none",
                                      xmlns: "http://www.w3.org/2000/svg",
                                    },
                                  },
                                  [
                                    n("path", {
                                      attrs: {
                                        d: "M9.58642 0H1.41358C0.631403 0 0 0.587712 0 1.3112V16.6901C0 17.4129 0.631403 18 1.41358 18H9.58642C10.3672 18 11 17.4129 11 16.6901V1.3112C11 0.587712 10.3672 0 9.58642 0ZM3.48333 0.796298H7.51808C7.62001 0.796298 7.70283 0.937322 7.70283 1.1118C7.70283 1.28628 7.62001 1.42796 7.51808 1.42796H3.48333C3.3807 1.42796 3.29929 1.28628 3.29929 1.1118C3.29929 0.937322 3.3807 0.796298 3.48333 0.796298ZM5.50071 16.7059C5.00309 16.7059 4.5982 16.3307 4.5982 15.8689C4.5982 15.4071 5.00309 15.0332 5.50071 15.0332C5.99691 15.0332 6.4018 15.4071 6.4018 15.8689C6.4018 16.3307 5.99691 16.7059 5.50071 16.7059ZM9.94106 13.8401H1.05965V2.21245H9.94106V13.8401Z",
                                        fill: "#007791",
                                      },
                                    }),
                                  ]
                                ),
                              ]
                            ),
                            t._v(" "),
                            n("UtilsSpecialView"),
                          ],
                          1
                        ),
                        t._v(" "),
                        n(
                          "div",
                          {
                            staticClass:
                              "header-top__item header-top__item--lang",
                          },
                          [n("SelectLocale")],
                          1
                        ),
                        t._v(" "),
                        n(
                          "div",
                          {
                            staticClass:
                              "header-top__item header-top__item--search",
                          },
                          [
                            n(
                              "a",
                              {
                                attrs: { href: "#" },
                                on: {
                                  click: function (n) {
                                    return (
                                      n.preventDefault(),
                                      t.showSearch.apply(null, arguments)
                                    );
                                  },
                                },
                              },
                              [
                                n(
                                  "svg",
                                  {
                                    attrs: {
                                      width: "16",
                                      height: "16",
                                      viewBox: "0 0 16 16",
                                      fill: "none",
                                      xmlns: "http://www.w3.org/2000/svg",
                                    },
                                  },
                                  [
                                    n("path", {
                                      attrs: {
                                        d: "M15.8045 14.862L11.2545 10.312C12.1359 9.22334 12.6665 7.84 12.6665 6.33334C12.6665 2.84134 9.8252 0 6.33324 0C2.84128 0 0 2.84131 0 6.33331C0 9.82531 2.84131 12.6667 6.33327 12.6667C7.83991 12.6667 9.22324 12.136 10.3119 11.2547L14.8618 15.8047C14.9918 15.9347 15.1625 16 15.3332 16C15.5039 16 15.6745 15.9347 15.8045 15.8047C16.0652 15.544 16.0652 15.1227 15.8045 14.862ZM6.33327 11.3333C3.57596 11.3333 1.33333 9.09066 1.33333 6.33331C1.33333 3.57597 3.57596 1.33331 6.33327 1.33331C9.09059 1.33331 11.3332 3.57597 11.3332 6.33331C11.3332 9.09066 9.09056 11.3333 6.33327 11.3333Z",
                                        fill: "#007791",
                                      },
                                    }),
                                  ]
                                ),
                                t._v(
                                  "\n            " +
                                    t._s(t.$t("search")) +
                                    "\n          "
                                ),
                              ]
                            ),
                          ]
                        ),
                        t._v(" "),
                        n("client-only", [
                          n(
                            "div",
                            {
                              staticClass:
                                "header-top__item header-top__item--login",
                            },
                            [
                              t.getUserId
                                ? t._e()
                                : n(
                                    "a",
                                    {
                                      attrs: { href: "#" },
                                      on: {
                                        click: function (n) {
                                          return (
                                            n.preventDefault(),
                                            t.setIsPopupLoginStatus(!0)
                                          );
                                        },
                                      },
                                    },
                                    [
                                      n(
                                        "svg",
                                        {
                                          attrs: {
                                            width: "17",
                                            height: "17",
                                            viewBox: "0 0 17 17",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                          },
                                        },
                                        [
                                          n("path", {
                                            attrs: {
                                              d: "M13.0156 17H8.99805C6.80106 17 5.01367 15.2126 5.01367 13.0156V12.3184C5.01367 11.9516 5.31097 11.6543 5.67773 11.6543C6.0445 11.6543 6.3418 11.9516 6.3418 12.3184V13.0156C6.3418 14.4803 7.53339 15.6719 8.99805 15.6719H13.0156C14.4803 15.6719 15.6719 14.4803 15.6719 13.0156V3.98438C15.6719 2.51972 14.4803 1.32812 13.0156 1.32812H8.99805C7.53339 1.32812 6.3418 2.51972 6.3418 3.98438V4.64844C6.3418 5.0152 6.0445 5.3125 5.67773 5.3125C5.31097 5.3125 5.01367 5.0152 5.01367 4.64844V3.98438C5.01367 1.78739 6.80106 0 8.99805 0H13.0156C15.2126 0 17 1.78739 17 3.98438V13.0156C17 15.2126 15.2126 17 13.0156 17Z",
                                              fill: "#007791",
                                            },
                                          }),
                                          t._v(" "),
                                          n("path", {
                                            attrs: {
                                              d: "M8.5332 11.6875C8.36294 11.6875 8.19274 11.6225 8.06301 11.4924C7.80403 11.2327 7.80459 10.8123 8.06428 10.5533L9.60121 9.0204C9.72619 8.89585 9.79492 8.7305 9.79492 8.55473C9.79492 8.37965 9.72669 8.21486 9.60274 8.09055L8.06789 6.58316C7.80625 6.32616 7.80244 5.90575 8.05943 5.64407C8.31642 5.3824 8.73684 5.37861 8.99851 5.63561L10.5355 7.14505C10.5366 7.14622 10.5378 7.14738 10.539 7.14854C10.9156 7.52403 11.123 8.02344 11.123 8.55473C11.123 9.08601 10.9156 9.58538 10.539 9.96088L9.0021 11.4937C8.87254 11.6229 8.70284 11.6875 8.5332 11.6875ZM8.5 8.50001C8.5 8.13324 8.2027 7.83594 7.83594 7.83594H0.664062C0.297301 7.83594 0 8.13324 0 8.50001C0 8.86677 0.297301 9.16407 0.664062 9.16407H7.83594C8.2027 9.16407 8.5 8.86677 8.5 8.50001Z",
                                              fill: "#007791",
                                            },
                                          }),
                                        ]
                                      ),
                                      t._v(
                                        "\n              " + t._s(t.$t("login"))
                                      ),
                                    ]
                                  ),
                              t._v(" "),
                              t.getUserId
                                ? n(
                                    "nuxt-link",
                                    { attrs: { to: "/profile" } },
                                    [
                                      n(
                                        "svg",
                                        {
                                          staticStyle: {
                                            "enable-background":
                                              "new 0 0 512 512",
                                          },
                                          attrs: {
                                            version: "1.1",
                                            id: "Capa_1",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            "xmlns:xlink":
                                              "http://www.w3.org/1999/xlink",
                                            x: "0px",
                                            y: "0px",
                                            viewBox: "0 0 512 512",
                                            "xml:space": "preserve",
                                          },
                                        },
                                        [
                                          n("g", [
                                            n("g", [
                                              n("path", {
                                                attrs: {
                                                  d: "M256,0c-74.439,0-135,60.561-135,135s60.561,135,135,135s135-60.561,135-135S330.439,0,256,0z M256,240\n                    c-57.897,0-105-47.103-105-105c0-57.897,47.103-105,105-105c57.897,0,105,47.103,105,105C361,192.897,313.897,240,256,240z",
                                                },
                                              }),
                                            ]),
                                          ]),
                                          t._v(" "),
                                          n("g", [
                                            n("g", [
                                              n("path", {
                                                attrs: {
                                                  d: "M297.833,301h-83.667C144.964,301,76.669,332.951,31,401.458V512h450V401.458C435.397,333.05,367.121,301,297.833,301z\n                    M451.001,482H451H61v-71.363C96.031,360.683,152.952,331,214.167,331h83.667c61.215,0,118.135,29.683,153.167,79.637V482z",
                                                },
                                              }),
                                            ]),
                                          ]),
                                        ]
                                      ),
                                      t._v(
                                        "\n              " +
                                          t._s(t.$t("profile")) +
                                          "\n            "
                                      ),
                                    ]
                                  )
                                : t._e(),
                            ],
                            1
                          ),
                        ]),
                      ],
                      1
                    ),
                  ]),
                ]),
                t._v(" "),
                n(
                  "transition",
                  { attrs: { name: "popup-fade", mode: "in-out" } },
                  [
                    t.isPopupLoginStatus
                      ? n("PopupLogin", {
                          attrs: {
                            close: t.closeModal,
                            forgot: t.forgotPassword,
                          },
                        })
                      : t._e(),
                  ],
                  1
                ),
                t._v(" "),
                n(
                  "transition",
                  { attrs: { name: "popup-fade", mode: "in-out" } },
                  [
                    t.isPopupForgotStatus
                      ? n("PopupForgot", {
                          attrs: {
                            clickFunction: t.sendMeCode,
                            isPending: t.isPending,
                            close: t.closeModal,
                            numberNotFound: t.numberNotFound,
                          },
                          on: { change: t.fillPhoneNumber },
                        })
                      : t._e(),
                  ],
                  1
                ),
                t._v(" "),
                n(
                  "transition",
                  { attrs: { name: "popup-fade", mode: "in-out" } },
                  [
                    t.isConfirmCode
                      ? n("PopupConfirmCode", {
                          attrs: {
                            clickFunction: t.confirmCode,
                            close: t.closeModal,
                            warn: t.showWarnOtp,
                          },
                          on: { change: t.fillOtp },
                        })
                      : t._e(),
                  ],
                  1
                ),
                t._v(" "),
                n(
                  "transition",
                  { attrs: { name: "popup-fade", mode: "in-out" } },
                  [
                    t.isNewPassword
                      ? n("PopupNewPassword", {
                          attrs: {
                            close: t.closeModal,
                            warn: t.newPasswordWarn,
                          },
                          on: { change: t.newPassword },
                        })
                      : t._e(),
                  ],
                  1
                ),
                t._v(" "),
                n(
                  "transition",
                  { attrs: { name: "popup-fade", mode: "in-out" } },
                  [
                    t.isSearch
                      ? n("PopupSearch", { attrs: { close: t.closeModal } })
                      : t._e(),
                  ],
                  1
                ),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "4c4b1e86",
          null
        );
      n.default = u.exports;
      installComponents(u, {
        PopupBegin: e(636).default,
        PopupUserInfo: e(337).default,
        UtilsSpecialView: e(637).default,
        SelectLocale: e(638).default,
        PopupLogin: e(331).default,
        PopupForgot: e(332).default,
        PopupConfirmCode: e(338).default,
        PopupNewPassword: e(639).default,
        PopupSearch: e(640).default,
      });
    },
    function (t, n, e) {
      "use strict";
      e.r(n);
      var i = e(12),
        a =
          (e(42),
          e(19),
          e(16),
          e(45),
          {
            props: {
              close: {
                type: Function,
                default: function () {
                  return null;
                },
              },
              beginInfo: {
                type: Object,
                default: function () {
                  return null;
                },
              },
              clickFunction: {
                type: Function,
                dafault: function () {
                  return null;
                },
              },
            },
            data: function () {
              return {
                stage: null,
                voting_stage: null,
                waiting_stage: null,
                moderating_stage: null,
                all_days: null,
                boardId: null,
                is_archive: null,
                stage_left_time: null,
                modalTimer: "",
              };
            },
            mounted: function () {
              return Object(i.a)(
                regeneratorRuntime.mark(function t() {
                  return regeneratorRuntime.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              )();
            },
            computed: {
              findStage: function () {
                return this.waiting_stage && this.waiting_stage.is_current_stage
                  ? 1
                  : this.moderating_stage &&
                    this.moderating_stage.is_current_stage
                  ? 2
                  : 3;
              },
            },
            methods: {
              getCurrentBoard: function () {
                var t = this;
                this.$store
                  .dispatch("initiative/getCurrentBoard")
                  .then(function (n) {
                    t.boardId = n && n.response && n.response.current_board;
                  });
              },
              setTimer: function () {
                var t = this,
                  n = this.stage_left_time,
                  e = n.days,
                  i = n.hours,
                  a = n.minutes,
                  o = n.seconds,
                  r = 86400 * e + 3600 * i + 60 * a + o;
                setTimeout(function () {
                  (t.clone = r),
                    (r -= 1),
                    (e = parseInt(r / 86400)),
                    (i = parseInt((r - 86400 * e) / 3600)),
                    (a = parseInt((r - 86400 * e - 3600 * i) / 60)),
                    (o = r - 86400 * e - 3600 * i - 60 * a),
                    (t.stage_left_time = {
                      days: e,
                      hours: i,
                      minutes: a,
                      seconds: o,
                    }),
                    t.setTimer();
                }, 1e3);
              },
            },
            filters: {
              timeFormatter: function (t) {
                var n = +t;
                return (n < 10 && "0" + n) || n;
              },
              setTime: function (t, n) {
                return t
                  .split(" ")
                  .map(function (t) {
                    return ("20" == t && n) || t;
                  })
                  .join(" ");
              },
            },
          }),
        o = (e(533), e(15)),
        r = Object(o.a)(
          a,
          function () {
            var t = this,
              n = t._self._c;
            return n("div", { staticClass: "popup" }, [
              n("div", { staticClass: "popup-main popup-main__begin" }, [
                n("div", { staticClass: "popup-body" }, [
                  n("div", { staticClass: "popup-begin" }, [
                    n("img", {
                      directives: [
                        { name: "lazy-load", rawName: "v-lazy-load" },
                      ],
                      attrs: { "data-src": e(532), alt: "" },
                    }),
                    t._v(" "),
                    n("h2", [t._v(t._s(t.$t("beginTitle")))]),
                    t._v(" "),
                    n("p", {
                      domProps: {
                        innerHTML: t._s(
                          (t.beginInfo &&
                            t.beginInfo.content &&
                            t.beginInfo.content[t.$i18n.locale]) ||
                            t.$t("beginTextQaror")
                        ),
                      },
                    }),
                    t._v(" "),
                    t.modalTimer
                      ? n("b", { staticClass: "begin-timer" }, [
                          t._v(t._s(t.modalTimer)),
                        ])
                      : t._e(),
                    t._v(" "),
                    n(
                      "div",
                      { staticClass: "popup-begin__btns" },
                      [
                        t.beginInfo && t.beginInfo.url2
                          ? n(
                              "nuxt-link",
                              {
                                staticClass: "btn btn-close",
                                attrs: { to: t.localePath(t.beginInfo.url2) },
                                nativeOn: {
                                  click: function (n) {
                                    return t.close.apply(null, arguments);
                                  },
                                },
                              },
                              [
                                t._v(
                                  "\n            " +
                                    t._s(
                                      t.beginInfo &&
                                        t.beginInfo.button2_title &&
                                        t.beginInfo.button2_title[
                                          t.$i18n.locale
                                        ]
                                    ) +
                                    "\n          "
                                ),
                              ]
                            )
                          : n(
                              "button",
                              {
                                staticClass: "btn btn-close",
                                on: { click: t.close },
                              },
                              [
                                t._v(
                                  "\n            " +
                                    t._s(t.$t("beginCloseBtn")) +
                                    "\n          "
                                ),
                              ]
                            ),
                        t._v(" "),
                        t.beginInfo && t.beginInfo.url1
                          ? n(
                              "nuxt-link",
                              {
                                staticClass: "btn btn-red",
                                attrs: { to: t.localePath(t.beginInfo.url1) },
                                nativeOn: {
                                  click: function (n) {
                                    return t.close.apply(null, arguments);
                                  },
                                },
                              },
                              [
                                t._v(
                                  "\n            " +
                                    t._s(
                                      (t.beginInfo &&
                                        t.beginInfo.button1_title &&
                                        t.beginInfo.button1_title[
                                          t.$i18n.locale
                                        ]) ||
                                        t.$t("home.moreDetails")
                                    ) +
                                    "\n          "
                                ),
                              ]
                            )
                          : n(
                              "nuxt-link",
                              {
                                staticClass: "btn btn-red",
                                attrs: { to: t.localePath("/boards") },
                                nativeOn: {
                                  click: function (n) {
                                    return t.close.apply(null, arguments);
                                  },
                                },
                              },
                              [
                                t._v(
                                  "\n            " +
                                    t._s(t.$t("initiat")) +
                                    "\n          "
                                ),
                              ]
                            ),
                      ],
                      1
                    ),
                  ]),
                ]),
                t._v(" "),
                n(
                  "span",
                  { staticClass: "popup-main__close", on: { click: t.close } },
                  [n("b-icon", { attrs: { icon: "x" } })],
                  1
                ),
              ]),
            ]);
          },
          [],
          !1,
          null,
          "757ca919",
          null
        );
      n.default = r.exports;
    },
    function (t, n, e) {
      "use strict";
      e.r(n);
      e(1), e(3), e(55), e(32);
      var i = {
          data: function () {
            return {
              searchModal: !1,
              spcImage: !0,
              sizeValue: 0,
              oldPlusValue: 0,
            };
          },
          watch: {
            $route: function () {
              this.setFontSize(this.sizeValue);
            },
          },
          mounted: function () {
            0 != this.getCookie("oldRangeValue") &&
              ((this.sizeValue = this.getCookie("oldRangeValue")),
              this.setFontSize(this.sizeValue)),
              this.getCookie("specialType") &&
                this.$bus.$emit("specialType", this.getCookie("specialType")),
              this.getCookie("specialImage") &&
                ((this.spcImage = parseInt(this.getCookie("specialImage"))),
                this.$bus.$emit("specialImage", this.spcImage));
          },
          methods: {
            specialWhite: function () {
              this.$bus.$emit("specialType", "specialWhite"),
                (document.cookie = "specialType = specialWhite");
            },
            specialDark: function () {
              this.$bus.$emit("specialType", "specialDark"),
                (document.cookie = "specialType = specialDark");
            },
            specialNormal: function () {
              this.$bus.$emit("specialType", "specialNormal"),
                (document.cookie = "specialType = specialNormal");
            },
            specialImage: function () {
              (this.spcImage = !this.spcImage),
                this.$bus.$emit("specialImage", this.spcImage),
                (document.cookie = "specialImage = ".concat(
                  this.spcImage ? 1 : 0
                ));
            },
            getCookie: function (t) {
              for (
                var n = t + "=",
                  e = decodeURIComponent(document.cookie).split(";"),
                  i = 0;
                i < e.length;
                i++
              ) {
                for (var a = e[i]; " " == a.charAt(0); ) a = a.substring(1);
                if (0 == a.indexOf(n)) return a.substring(n.length, a.length);
              }
              return "";
            },
            setFontSize: function (t) {
              var n = this,
                e = Math.round(Math.abs((5 * t) / 100)),
                i = document.querySelectorAll(
                  "p, a, span, strong, h1, h2, h3, h4, h5, h6, li, i, button"
                );
              i &&
                Array.from(i).forEach(function (t) {
                  var i = parseInt(
                    window
                      .getComputedStyle(t, null)
                      .getPropertyValue("font-size")
                  );
                  0 != n.sizeValue
                    ? (t.style.fontSize = i - n.oldPlusValue + e + "px")
                    : (t.style.fontSize = "");
                }),
                (this.oldPlusValue = e),
                (document.cookie = "oldRangeValue = ".concat(this.sizeValue));
            },
            changeSize: function () {
              this.setFontSize(this.sizeValue);
            },
          },
        },
        a = e(15),
        o = Object(a.a)(
          i,
          function () {
            var t = this,
              n = t._self._c;
            return n(
              "span",
              { staticClass: "glasses" },
              [
                n(
                  "b-dropdown",
                  {
                    staticClass: "sv-dd",
                    attrs: { id: "dropdown-grouped", right: "" },
                  },
                  [
                    n(
                      "b-dropdown-group",
                      { attrs: { id: "dropdown-group-2" } },
                      [
                        n("h3", { staticClass: "glasses-title" }, [
                          t._v(t._s(t.$t("specialViewFon"))),
                        ]),
                        t._v(" "),
                        n("div", { staticClass: "glasses-images" }, [
                          n("div", { staticClass: "glasses-images__row" }, [
                            n("div", { staticClass: "glasses-images__col" }, [
                              n(
                                "div",
                                {
                                  staticClass:
                                    "glasses-images__item glasses-images__item--normal",
                                  on: { click: t.specialNormal },
                                },
                                [t._v("\n              A\n            ")]
                              ),
                            ]),
                            t._v(" "),
                            n("div", { staticClass: "glasses-images__col" }, [
                              n(
                                "div",
                                {
                                  staticClass:
                                    "glasses-images__item glasses-images__item--white",
                                  on: { click: t.specialWhite },
                                },
                                [t._v("\n              A\n            ")]
                              ),
                            ]),
                            t._v(" "),
                            n("div", { staticClass: "glasses-images__col" }, [
                              n(
                                "div",
                                {
                                  staticClass:
                                    "glasses-images__item glasses-images__item--dark",
                                  on: { click: t.specialDark },
                                },
                                [t._v("\n              A\n            ")]
                              ),
                            ]),
                            t._v(" "),
                            n("div", { staticClass: "glasses-images__col" }, [
                              n("div", {
                                staticClass:
                                  "glasses-images__item glasses-images__item--noImage",
                                class: { setImage: !t.spcImage },
                                style: {
                                  backgroundImage:
                                    "url(" + e(537) + ")!important",
                                },
                                on: { click: t.specialImage },
                              }),
                            ]),
                          ]),
                        ]),
                      ]
                    ),
                    t._v(" "),
                    n(
                      "b-dropdown-group",
                      { attrs: { id: "dropdown-group-3" } },
                      [
                        n("h3", { staticClass: "glasses-title" }, [
                          t._v(t._s(t.$t("specialViewSize"))),
                        ]),
                        t._v(" "),
                        "en" == t.$i18n.locale || "ru" == t.$i18n.locale
                          ? n("span", { staticClass: "glasses-subtitle" }, [
                              t._v(
                                " " +
                                  t._s(t.$t("specialViewFontSize")) +
                                  " " +
                                  t._s(t.sizeValue) +
                                  "%"
                              ),
                            ])
                          : n("span", { staticClass: "glasses-subtitle" }, [
                              t._v(
                                t._s(t.sizeValue) +
                                  "% " +
                                  t._s(t.$t("specialViewFontSize"))
                              ),
                            ]),
                        t._v(" "),
                        n(
                          "div",
                          { staticClass: "glasses-range mt-2" },
                          [
                            n("b-form-input", {
                              attrs: {
                                id: "rangeSize",
                                type: "range",
                                min: "0",
                                max: "100",
                              },
                              on: { change: t.changeSize },
                              model: {
                                value: t.sizeValue,
                                callback: function (n) {
                                  t.sizeValue = n;
                                },
                                expression: "sizeValue",
                              },
                            }),
                          ],
                          1
                        ),
                      ]
                    ),
                  ],
                  1
                ),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "2ea21408",
          null
        );
      n.default = o.exports;
    },
    function (t, n, e) {
      "use strict";
      e.r(n);
      e(6), e(5), e(2), e(1), e(7), e(3), e(8);
      var i = e(0);
      function a(t, n) {
        var e = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          n &&
            (i = i.filter(function (n) {
              return Object.getOwnPropertyDescriptor(t, n).enumerable;
            })),
            e.push.apply(e, i);
        }
        return e;
      }
      function o(t) {
        for (var n = 1; n < arguments.length; n++) {
          var e = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? a(Object(e), !0).forEach(function (n) {
                Object(i.a)(t, n, e[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : a(Object(e)).forEach(function (n) {
                Object.defineProperty(
                  t,
                  n,
                  Object.getOwnPropertyDescriptor(e, n)
                );
              });
        }
        return t;
      }
      var r = {
          name: "Locale",
          data: function () {
            return {
              allLangs: {
                uz: { title: "Ўзбек", value: "uz" },
                oz: { title: "O'zbek", value: "oz" },
                en: { title: "English", value: "en" },
                kp: { title: "Qoraqalpoq", value: "kp" },
              },
              langs: {},
              chosed: {},
            };
          },
          methods: {
            chooseLang: function (t) {
              (this.chosed = this.allLangs[t + ""]),
                (this.langs = o({}, this.allLangs)),
                delete this.langs[t + ""];
            },
          },
          mounted: function () {
            (this.chosed = this.allLangs[this.$i18n.locale]),
              (this.langs = o({}, this.allLangs)),
              delete this.langs[this.$i18n.locale];
          },
        },
        s = (e(538), e(15)),
        l = Object(s.a)(
          r,
          function () {
            var t = this,
              n = t._self._c;
            return n("div", { staticClass: "select-locale" }, [
              n(
                "div",
                { staticClass: "chosed" },
                [
                  t._v("\n    " + t._s(t.chosed.title) + "\n    "),
                  n("b-icon", { attrs: { icon: "chevron-down" } }),
                ],
                1
              ),
              t._v(" "),
              n(
                "div",
                { staticClass: "locales" },
                t._l(t.langs, function (e) {
                  return n(
                    "nuxt-link",
                    {
                      key: e.title,
                      staticClass: "locale",
                      attrs: { to: t.switchLocalePath(e.value), replace: "" },
                      nativeOn: {
                        click: function (n) {
                          return t.chooseLang(e.value);
                        },
                      },
                    },
                    [t._v(t._s(e.title))]
                  );
                }),
                1
              ),
            ]);
          },
          [],
          !1,
          null,
          "27c43b38",
          null
        );
      n.default = l.exports;
    },
    function (t, n, e) {
      "use strict";
      e.r(n);
      var i = {
          props: {
            close: {
              type: Function,
              default: function () {
                return null;
              },
            },
            warn: {
              type: Object,
              default: function () {
                return {};
              },
            },
          },
          data: function () {
            return {
              password: "",
              confirm_password: "",
              isAgree: !1,
              isFilled: !1,
              password_type: "password",
              confirm_password_type: "password",
              canSend: !1,
            };
          },
          computed: {
            passwordState: function () {
              return this.password.split("").length > 7 || null;
            },
            confirmPasswordState: function () {
              return this.confirm_password.split("").length > 7
                ? this.password == this.confirm_password
                : null;
            },
          },
          methods: {
            validateFields: function (t, n, e) {
              for (var i in t) if (!t[i] && i !== n && i !== e) return !1;
              return !0;
            },
            validateFormFields: function () {
              this.canSend =
                this.password &&
                this.confirm_password &&
                this.password == this.confirm_password &&
                (this.password += "").split("").length > 7 &&
                (this.confirm_password += "").split("").length > 7;
            },
            agreeInModal: function (t) {
              (this.isAgree = t), this.close(), this.validateFormFields();
            },
            showPassword: function (t) {
              "password" === t
                ? (this.password_type =
                    "password" === this.password_type ? "text" : "password")
                : "confirm_password" === t &&
                  (this.confirm_password_type =
                    "password" === this.confirm_password_type
                      ? "text"
                      : "password");
            },
            clickFunction: function () {
              this.$emit("change", this.password);
            },
          },
        },
        a = (e(562), e(15)),
        o = Object(a.a)(
          i,
          function () {
            var t = this,
              n = t._self._c;
            return n("div", { staticClass: "popup" }, [
              n("div", { staticClass: "popup-main" }, [
                n("div", { staticClass: "popup-head popup-head__login" }, [
                  n("h2", { staticClass: "popup-head__title" }, [
                    t._v(t._s(t.$t("newPassword"))),
                  ]),
                  t._v(" "),
                  t.warn.status
                    ? n("h6", { staticStyle: { color: "red" } }, [
                        t._v("\n        " + t._s(t.warn.text) + "\n      "),
                      ])
                    : t._e(),
                ]),
                t._v(" "),
                n("div", { staticClass: "popup-body" }, [
                  n(
                    "form",
                    {
                      staticClass: "form",
                      attrs: { action: "" },
                      on: {
                        keyup: function (n) {
                          return !n.type.indexOf("key") &&
                            t._k(n.keyCode, "enter", 13, n.key, "Enter")
                            ? null
                            : (n.preventDefault(),
                              t.clickFunction.apply(null, arguments));
                        },
                      },
                    },
                    [
                      n(
                        "b-form-group",
                        {
                          staticClass: "input_pass",
                          attrs: {
                            label: t.$t("password") + ":",
                            "label-for": "password",
                          },
                        },
                        [
                          n("b-form-input", {
                            attrs: {
                              id: "input-live",
                              state: t.passwordState,
                              type: t.password_type,
                              "aria-describedby":
                                "input-live-help input-live-feedback",
                              placeholder: t.$t("enterPassword"),
                              trim: "",
                            },
                            on: {
                              input: function (n) {
                                return t.validateFormFields();
                              },
                            },
                            model: {
                              value: t.password,
                              callback: function (n) {
                                t.password = n;
                              },
                              expression: "password",
                            },
                          }),
                          t._v(" "),
                          n(
                            "span",
                            {
                              staticClass: "view_btn",
                              on: {
                                click: function (n) {
                                  return t.showPassword("password");
                                },
                              },
                            },
                            [
                              n("img", {
                                directives: [
                                  { name: "lazy-load", rawName: "v-lazy-load" },
                                ],
                                attrs: { "data-src": e(274), alt: "" },
                              }),
                            ]
                          ),
                          t._v(" "),
                          n("p", { staticClass: "warn_password" }, [
                            t._v(
                              "\n            " +
                                t._s(t.$t("password8")) +
                                "\n          "
                            ),
                          ]),
                        ],
                        1
                      ),
                      t._v(" "),
                      n(
                        "b-form-group",
                        {
                          staticClass: "input_pass",
                          attrs: {
                            label: t.$t("repeatPassword") + ":",
                            "label-for": "confirm_password:",
                          },
                        },
                        [
                          n("b-form-input", {
                            attrs: {
                              id: "input-live",
                              state: t.confirmPasswordState,
                              type: t.confirm_password_type,
                              "aria-describedby":
                                "input-live-help input-live-feedback",
                              placeholder: t.$t("repeatPassword") + ":",
                            },
                            on: {
                              input: function (n) {
                                return t.validateFormFields();
                              },
                            },
                            model: {
                              value: t.confirm_password,
                              callback: function (n) {
                                t.confirm_password = n;
                              },
                              expression: "confirm_password",
                            },
                          }),
                          t._v(" "),
                          n(
                            "span",
                            {
                              staticClass: "view_btn",
                              on: {
                                click: function (n) {
                                  return t.showPassword("confirm_password");
                                },
                              },
                            },
                            [
                              n("img", {
                                directives: [
                                  { name: "lazy-load", rawName: "v-lazy-load" },
                                ],
                                attrs: { "data-src": e(274), alt: "" },
                              }),
                            ]
                          ),
                          t._v(" "),
                          n("p", { staticClass: "warn_password" }, [
                            t._v(t._s(t.$t("repeatPasswordRule"))),
                          ]),
                        ],
                        1
                      ),
                      t._v(" "),
                      n(
                        "b-button-group",
                        [
                          n(
                            "b-button",
                            {
                              attrs: { disabled: !t.canSend },
                              on: {
                                click: function (n) {
                                  return (
                                    n.preventDefault(),
                                    t.clickFunction.apply(null, arguments)
                                  );
                                },
                              },
                            },
                            [t._v(t._s(t.$t("enter")))]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ]),
                t._v(" "),
                n(
                  "span",
                  { staticClass: "popup-main__close", on: { click: t.close } },
                  [n("b-icon", { attrs: { icon: "x" } })],
                  1
                ),
              ]),
            ]);
          },
          [],
          !1,
          null,
          "7152272c",
          null
        );
      n.default = o.exports;
    },
    function (t, n, e) {
      "use strict";
      e.r(n);
      e(11), e(88);
      var i = {
          props: {
            close: {
              type: Function,
              default: function () {
                return null;
              },
            },
            forgot: {
              type: Function,
              default: function () {
                return null;
              },
            },
            voting: {
              type: Boolean,
              default: function () {
                return !1;
              },
            },
          },
          data: function () {
            return { search: "" };
          },
          methods: {
            searching: function () {
              this.$router.push({
                path: "/search",
                query: { search: this.search },
              }),
                this.close();
            },
          },
        },
        a = (e(564), e(15)),
        o = Object(a.a)(
          i,
          function () {
            var t = this,
              n = t._self._c;
            return n("div", { staticClass: "popup" }, [
              n(
                "div",
                { staticClass: "popup-main search_popup" },
                [
                  n("b-form-input", {
                    attrs: { placeholder: t.$t("search") },
                    on: {
                      keyup: function (n) {
                        return !n.type.indexOf("key") &&
                          t._k(n.keyCode, "enter", 13, n.key, "Enter")
                          ? null
                          : t.searching.apply(null, arguments);
                      },
                    },
                    model: {
                      value: t.search,
                      callback: function (n) {
                        t.search = n;
                      },
                      expression: "search",
                    },
                  }),
                  t._v(" "),
                  n(
                    "b-button",
                    { attrs: { variant: "info" }, on: { click: t.searching } },
                    [t._v(t._s(t.$t("search")))]
                  ),
                  t._v(" "),
                  n(
                    "span",
                    {
                      staticClass: "popup-main__close",
                      on: { click: t.close },
                    },
                    [n("b-icon", { attrs: { icon: "x" } })],
                    1
                  ),
                ],
                1
              ),
            ]);
          },
          [],
          !1,
          null,
          "0ec16126",
          null
        );
      n.default = o.exports;
    },
    function (t, n, e) {
      "use strict";
      e.r(n);
      e(1), e(32), e(39);
      var i = e(9),
        a = {
          components: {
            HeaderBurger: Object(i.defineAsyncComponent)(function () {
              return Promise.resolve().then(e.bind(null, 642));
            }),
          },
          data: function () {
            return { isBurgerOpen: !1, menuList: [] };
          },
          mounted: function () {
            var t;
            null !== (t = JSON.parse(localStorage.getItem("menus"))) &&
            void 0 !== t &&
            t.length
              ? (this.menuList = JSON.parse(localStorage.getItem("menus")))
              : this.getMenuList();
          },
          methods: {
            openBurger: function () {
              this.isBurgerOpen = !0;
            },
            closeBurger: function () {
              this.isBurgerOpen = !1;
            },
            getMenuList: function () {
              var t = this;
              this.$store.dispatch("static/getMenuList").then(function (n) {
                t.menuList = n;
              });
            },
          },
        },
        o = e(15),
        r = Object(o.a)(
          a,
          function () {
            var t = this,
              n = t._self._c;
            return n(
              "div",
              { staticClass: "menu" },
              [
                n(
                  "b-navbar",
                  { staticClass: "menu-nav", attrs: { type: "", variant: "" } },
                  [
                    n(
                      "b-navbar-nav",
                      t._l(t.menuList, function (e) {
                        return n(
                          "b-nav-item-dropdown",
                          {
                            key: e.id,
                            attrs: {
                              text:
                                (e && e.title && e.title[t.$i18n.locale]) ||
                                ".",
                              left: "",
                            },
                          },
                          t._l(e.children, function (e) {
                            return n(
                              "nuxt-link",
                              {
                                key: e.id,
                                attrs: {
                                  to: t.localePath({
                                    path: "/".concat(
                                      e.group || "static/" + e.post
                                    ),
                                    params: { id: e.group ? null : e.post },
                                  }),
                                  tag: "b-dropdown-item",
                                },
                              },
                              [
                                t._v(
                                  t._s(
                                    (e && e.title && e.title[t.$i18n.locale]) ||
                                      "."
                                  ) + "\n        "
                                ),
                              ]
                            );
                          }),
                          1
                        );
                      }),
                      1
                    ),
                  ],
                  1
                ),
                t._v(" "),
                n("div", { staticClass: "menu-full" }, [
                  n(
                    "a",
                    {
                      staticClass: "menu-full__btn",
                      attrs: { href: "#" },
                      on: {
                        click: function (n) {
                          return (
                            n.preventDefault(),
                            t.openBurger.apply(null, arguments)
                          );
                        },
                      },
                    },
                    [
                      n(
                        "svg",
                        {
                          attrs: {
                            width: "25",
                            height: "16",
                            viewBox: "0 0 25 16",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                          },
                        },
                        [
                          n("path", {
                            attrs: {
                              d: "M23.4855 9.02122H3.98015C3.4165 9.02122 2.95905 8.56377 2.95905 8.00011C2.95905 7.43646 3.4165 6.979 3.98015 6.979H23.4855C24.0492 6.979 24.5066 7.43646 24.5066 8.00011C24.5066 8.56377 24.0492 9.02122 23.4855 9.02122Z",
                              fill: "#393C40",
                            },
                          }),
                          t._v(" "),
                          n("path", {
                            attrs: {
                              d: "M23.4855 2.04222H1.02111C0.457454 2.04222 0 1.58476 0 1.02111C0 0.457454 0.457454 0 1.02111 0H23.4855C24.0491 0 24.5066 0.457454 24.5066 1.02111C24.5066 1.58476 24.0491 2.04222 23.4855 2.04222Z",
                              fill: "#393C40",
                            },
                          }),
                          t._v(" "),
                          n("path", {
                            attrs: {
                              d: "M23.4854 16H10.8845C10.3208 16 9.86334 15.5425 9.86334 14.9789C9.86334 14.4152 10.3208 13.9578 10.8845 13.9578H23.4854C24.0491 13.9578 24.5066 14.4152 24.5066 14.9789C24.5066 15.5425 24.0491 16 23.4854 16Z",
                              fill: "#393C40",
                            },
                          }),
                        ]
                      ),
                    ]
                  ),
                ]),
                t._v(" "),
                n(
                  "transition",
                  { attrs: { name: "burger" } },
                  [
                    t.isBurgerOpen
                      ? n("HeaderBurger", { attrs: { close: t.closeBurger } })
                      : t._e(),
                  ],
                  1
                ),
              ],
              1
            );
          },
          [],
          !1,
          null,
          "37acba9c",
          null
        );
      n.default = r.exports;
      installComponents(r, { HeaderBurger: e(642).default });
    },
    function (t, n, e) {
      "use strict";
      e.r(n);
      var i = {
          props: { close: Function },
          watch: {
            $route: {
              handler: function () {
                this.close();
              },
            },
          },
        },
        a = e(15),
        o = Object(a.a)(
          i,
          function () {
            var t = this,
              n = t._self._c;
            return n("div", { staticClass: "b-burger" }, [
              n("div", { staticClass: "b-burger__bg" }, [
                n("div", { staticClass: "b-burger__bg__image" }, [
                  n("img", {
                    directives: [{ name: "lazy-load", rawName: "v-lazy-load" }],
                    attrs: { "data-src": e(333), alt: "" },
                  }),
                ]),
                t._v(" "),
                n("div", { staticClass: "b-burger__bg__black" }),
              ]),
              t._v(" "),
              n("div", { staticClass: "b-burger__inner" }, [
                n(
                  "a",
                  {
                    staticClass: "b-burger__close",
                    attrs: { href: "#" },
                    on: {
                      click: function (n) {
                        return (
                          n.preventDefault(), t.close.apply(null, arguments)
                        );
                      },
                    },
                  },
                  [
                    n("img", {
                      directives: [
                        { name: "lazy-load", rawName: "v-lazy-load" },
                      ],
                      attrs: { "data-src": e(566), alt: "" },
                    }),
                  ]
                ),
                t._v(" "),
                n(
                  "div",
                  { staticClass: "b-burger__main" },
                  [
                    n(
                      "b-container",
                      {
                        directives: [
                          { name: "lazy-load", rawName: "v-lazy-load" },
                        ],
                      },
                      [
                        n(
                          "div",
                          { staticClass: "b-burger__fullmenu" },
                          [
                            n(
                              "b-row",
                              [
                                n("b-col", [
                                  n(
                                    "div",
                                    { staticClass: "b-burger__fullmenu__item" },
                                    [
                                      n("h2", [
                                        t._v(
                                          "\n                  " +
                                            t._s(t.$t("homeHeaderMenuPortal")) +
                                            "\n                "
                                        ),
                                      ]),
                                      t._v(" "),
                                      n("ul", [
                                        n(
                                          "li",
                                          [
                                            n(
                                              "nuxt-link",
                                              {
                                                attrs: {
                                                  to: t.localePath({
                                                    path: "/news",
                                                  }),
                                                },
                                              },
                                              [
                                                t._v(
                                                  t._s(
                                                    t.$t(
                                                      "homeHeaderMenuPortalNews"
                                                    )
                                                  )
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                        t._v(" "),
                                        n(
                                          "li",
                                          [
                                            n(
                                              "nuxt-link",
                                              {
                                                attrs: {
                                                  to: t.localePath({
                                                    path: "/faq",
                                                  }),
                                                },
                                              },
                                              [
                                                t._v(
                                                  t._s(
                                                    t.$t(
                                                      "homeHeaderMenuPortalAnswer"
                                                    )
                                                  )
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                        t._v(" "),
                                        n(
                                          "li",
                                          [
                                            n(
                                              "nuxt-link",
                                              {
                                                attrs: {
                                                  to: t.localePath({
                                                    path: "/concepts",
                                                  }),
                                                },
                                              },
                                              [
                                                t._v(
                                                  t._s(
                                                    t.$t(
                                                      "homeHeaderMenuPortalHow"
                                                    )
                                                  )
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                        t._v(" "),
                                        n(
                                          "li",
                                          [
                                            n(
                                              "nuxt-link",
                                              {
                                                attrs: {
                                                  to: t.localePath({
                                                    path: "/static/kontaktyi",
                                                  }),
                                                },
                                              },
                                              [
                                                t._v(
                                                  t._s(
                                                    t.$t(
                                                      "homeHeaderMenuPortalContact"
                                                    )
                                                  )
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                        t._v(" "),
                                        n(
                                          "li",
                                          [
                                            n(
                                              "nuxt-link",
                                              {
                                                attrs: {
                                                  to: t.localePath({
                                                    path: "/static/about",
                                                  }),
                                                },
                                              },
                                              [
                                                t._v(
                                                  t._s(
                                                    t.$t(
                                                      "homeHeaderMenuPortalAbout"
                                                    )
                                                  )
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                        t._v(" "),
                                        n(
                                          "li",
                                          [
                                            n(
                                              "nuxt-link",
                                              {
                                                attrs: {
                                                  to: t.localePath({
                                                    path: "/usefulInfo",
                                                  }),
                                                },
                                              },
                                              [
                                                t._v(
                                                  t._s(
                                                    t.$t(
                                                      "homeHeaderMenuPortalUseful"
                                                    )
                                                  )
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                      ]),
                                    ]
                                  ),
                                  t._v(" "),
                                  n(
                                    "div",
                                    { staticClass: "b-burger__fullmenu__item" },
                                    [
                                      n("h2", [
                                        t._v(
                                          "\n                  " +
                                            t._s(t.$t("homeHeaderMenuBudget")) +
                                            "\n                "
                                        ),
                                      ]),
                                      t._v(" "),
                                      n("ul", [
                                        n(
                                          "li",
                                          [
                                            n(
                                              "nuxt-link",
                                              {
                                                attrs: {
                                                  to: t.localePath({
                                                    path: "/parameters",
                                                  }),
                                                },
                                              },
                                              [
                                                t._v(
                                                  t._s(
                                                    t.$t(
                                                      "homeHeaderMenuBudgetState"
                                                    )
                                                  )
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                        t._v(" "),
                                        n(
                                          "li",
                                          [
                                            n(
                                              "nuxt-link",
                                              {
                                                attrs: {
                                                  to: t.localePath({
                                                    path: "/regions",
                                                  }),
                                                },
                                              },
                                              [
                                                t._v(
                                                  t._s(
                                                    t.$t(
                                                      "homeHeaderMenuBudgetLocal"
                                                    )
                                                  )
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                        t._v(" "),
                                        n(
                                          "li",
                                          [
                                            n(
                                              "nuxt-link",
                                              {
                                                attrs: {
                                                  to: t.localePath({
                                                    path: "/specialFund",
                                                  }),
                                                },
                                              },
                                              [
                                                t._v(
                                                  t._s(
                                                    t.$t(
                                                      "homeHeaderMenuBudgetSpecialFund"
                                                    )
                                                  )
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                        t._v(" "),
                                        n(
                                          "li",
                                          [
                                            n(
                                              "nuxt-link",
                                              {
                                                attrs: {
                                                  to: t.localePath({
                                                    path: "/debt",
                                                  }),
                                                },
                                              },
                                              [
                                                t._v(
                                                  "\n                      " +
                                                    t._s(
                                                      t.$t(
                                                        "homeHeaderMenuBudgetStateDebt"
                                                      )
                                                    ) +
                                                    "\n                    "
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                        t._v(" "),
                                        n(
                                          "li",
                                          [
                                            n(
                                              "nuxt-link",
                                              {
                                                attrs: {
                                                  to: t.localePath({
                                                    path: "/static/dopolnitelnyie-istochniki",
                                                  }),
                                                },
                                              },
                                              [
                                                t._v(
                                                  t._s(
                                                    t.$t(
                                                      "homeHeaderMenuBudgetAdditional"
                                                    )
                                                  )
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                        t._v(" "),
                                        n(
                                          "li",
                                          [
                                            n(
                                              "nuxt-link",
                                              {
                                                attrs: {
                                                  to: t.localePath({
                                                    path: "/static/territorialnyie-finansovyie-organyi",
                                                  }),
                                                },
                                              },
                                              [
                                                t._v(
                                                  t._s(
                                                    t.$t(
                                                      "homeHeaderMenuBudgetTerritorial"
                                                    )
                                                  )
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                        t._v(" "),
                                        n(
                                          "li",
                                          [
                                            n(
                                              "nuxt-link",
                                              {
                                                attrs: {
                                                  to: t.localePath({
                                                    path: "/static/finkontrol",
                                                  }),
                                                },
                                              },
                                              [
                                                t._v(
                                                  t._s(
                                                    t.$t(
                                                      "homeHeaderMenuBudgetFinance"
                                                    )
                                                  )
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                        t._v(" "),
                                        n(
                                          "li",
                                          [
                                            n(
                                              "nuxt-link",
                                              {
                                                attrs: {
                                                  to: t.localePath({
                                                    path: "/ministry",
                                                  }),
                                                },
                                              },
                                              [
                                                t._v(
                                                  t._s(
                                                    t.$t(
                                                      "homeHeaderMenuBudgetMinistry"
                                                    )
                                                  )
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                      ]),
                                    ]
                                  ),
                                ]),
                                t._v(" "),
                                n("b-col", [
                                  n(
                                    "div",
                                    { staticClass: "b-burger__fullmenu__item" },
                                    [
                                      n("h2", [
                                        t._v(
                                          "\n                  " +
                                            t._s(
                                              t.$t("homeHeaderMenuFeedback")
                                            ) +
                                            "\n                "
                                        ),
                                      ]),
                                      t._v(" "),
                                      n("ul", [
                                        n(
                                          "li",
                                          [
                                            n(
                                              "nuxt-link",
                                              {
                                                attrs: {
                                                  to: t.localePath({
                                                    path: "/execution",
                                                  }),
                                                },
                                              },
                                              [
                                                t._v(
                                                  t._s(
                                                    t.$t(
                                                      "homeHeaderMenuFeedbackDiscuss"
                                                    )
                                                  )
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                        t._v(" "),
                                        n(
                                          "li",
                                          [
                                            n(
                                              "nuxt-link",
                                              {
                                                attrs: {
                                                  to: t.localePath({
                                                    path: "/regions_budgets",
                                                  }),
                                                },
                                              },
                                              [
                                                t._v(
                                                  t._s(
                                                    t.$t(
                                                      "homeHeaderMenuFeedbackProactive"
                                                    )
                                                  )
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                        t._v(" "),
                                        n(
                                          "li",
                                          [
                                            n(
                                              "nuxt-link",
                                              {
                                                attrs: {
                                                  to: t.localePath({
                                                    path: "/conclusion",
                                                  }),
                                                },
                                              },
                                              [
                                                t._v(
                                                  t._s(
                                                    t.$t(
                                                      "homeHeaderMenuFeedbackConclusion"
                                                    )
                                                  )
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                        t._v(" "),
                                        n(
                                          "li",
                                          [
                                            n(
                                              "nuxt-link",
                                              {
                                                attrs: {
                                                  to: t.localePath({
                                                    path: "/improving",
                                                  }),
                                                },
                                              },
                                              [
                                                t._v(
                                                  t._s(
                                                    t.$t(
                                                      "homeHeaderMenuFeedbackImproving"
                                                    )
                                                  )
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                        t._v(" "),
                                        n(
                                          "li",
                                          [
                                            n(
                                              "nuxt-link",
                                              {
                                                attrs: {
                                                  to: t.localePath({
                                                    path: "/violations",
                                                  }),
                                                },
                                              },
                                              [
                                                t._v(
                                                  t._s(
                                                    t.$t(
                                                      "homeHeaderMenuFeedbackFacts"
                                                    )
                                                  )
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                      ]),
                                    ]
                                  ),
                                  t._v(" "),
                                  n(
                                    "div",
                                    { staticClass: "b-burger__fullmenu__item" },
                                    [
                                      n("h2", [
                                        t._v(
                                          "\n                  " +
                                            t._s(
                                              t.$t("homeHeaderMenuInitiative")
                                            ) +
                                            "\n                "
                                        ),
                                      ]),
                                      t._v(" "),
                                      n("ul", [
                                        n(
                                          "li",
                                          [
                                            n(
                                              "nuxt-link",
                                              {
                                                attrs: {
                                                  to: t.localePath({
                                                    path: "/boards",
                                                  }),
                                                },
                                              },
                                              [t._v(t._s(t.$t("initiat")))]
                                            ),
                                          ],
                                          1
                                        ),
                                        t._v(" "),
                                        n(
                                          "li",
                                          [
                                            n(
                                              "nuxt-link",
                                              {
                                                attrs: {
                                                  to: t.localePath({
                                                    path: "/reports",
                                                  }),
                                                },
                                              },
                                              [
                                                t._v(
                                                  t._s(
                                                    t.$t(
                                                      "homeHeaderMenuInitiativeBudget"
                                                    )
                                                  )
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                        t._v(" "),
                                        n(
                                          "li",
                                          [
                                            n(
                                              "nuxt-link",
                                              {
                                                attrs: {
                                                  to: t.localePath({
                                                    path: "/legislation",
                                                  }),
                                                },
                                              },
                                              [
                                                t._v(
                                                  t._s(
                                                    t.$t(
                                                      "homeHeaderMenuInitiativeLegislation"
                                                    )
                                                  )
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                        t._v(" "),
                                        n(
                                          "li",
                                          [
                                            n(
                                              "nuxt-link",
                                              {
                                                attrs: {
                                                  to: t.localePath({
                                                    path: "/publicbudget",
                                                  }),
                                                },
                                              },
                                              [
                                                t._v(
                                                  t._s(
                                                    t.$t(
                                                      "homeHeaderMenuInitiativeCitizen"
                                                    )
                                                  )
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                        t._v(" "),
                                        n(
                                          "li",
                                          [
                                            n(
                                              "nuxt-link",
                                              {
                                                attrs: {
                                                  to: t.localePath({
                                                    path: "/static/byudzhetnoe-poslanie",
                                                  }),
                                                },
                                              },
                                              [
                                                t._v(
                                                  t._s(
                                                    t.$t(
                                                      "homeHeaderMenuInitiativeMessage"
                                                    )
                                                  )
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                        t._v(" "),
                                        n(
                                          "li",
                                          [
                                            n(
                                              "nuxt-link",
                                              {
                                                attrs: {
                                                  to: t.localePath({
                                                    path: "/static/informatsiya-po-deyatelnosti",
                                                  }),
                                                },
                                              },
                                              [
                                                t._v(
                                                  t._s(
                                                    t.$t(
                                                      "homeHeaderMenuInitiativeActivity"
                                                    )
                                                  )
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                        t._v(" "),
                                        n(
                                          "li",
                                          [
                                            n(
                                              "nuxt-link",
                                              {
                                                attrs: {
                                                  to: t.localePath({
                                                    path: "/budget_results",
                                                  }),
                                                },
                                              },
                                              [
                                                t._v(
                                                  t._s(
                                                    t.$t(
                                                      "homeHeaderMenuInitiativePart"
                                                    )
                                                  )
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                      ]),
                                    ]
                                  ),
                                ]),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ]
                    ),
                  ],
                  1
                ),
              ]),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        );
      n.default = o.exports;
    },
    function (t, n, e) {
      "use strict";
      e.r(n);
      var i = { props: { item: { type: Object, default: {} } } },
        a = e(15),
        o = Object(a.a)(
          i,
          function () {
            var t = this,
              n = t._self._c;
            return n(
              "div",
              { staticClass: "footer_info_item" },
              [
                n("div", { staticClass: "footer_info_item_title" }, [
                  t._v("\n    " + t._s(t.item.title) + "\n  "),
                ]),
                t._v(" "),
                t._l(t.item.items, function (e, i) {
                  return n(
                    "div",
                    { key: i, staticClass: "footer_info_item_child" },
                    [
                      n("a", { attrs: { href: t.item.type + e } }, [
                        t._v(t._s(e)),
                      ]),
                    ]
                  );
                }),
              ],
              2
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      n.default = o.exports;
    },
    function (t, n, e) {
      "use strict";
      e.r(n);
      var i = {},
        a = e(15),
        o = Object(a.a)(
          i,
          function () {
            var t = this,
              n = t._self._c;
            return n("div", { staticClass: "footer_main" }, [
              n("div", { staticClass: "footer_main_item_1" }, [
                n(
                  "svg",
                  {
                    attrs: {
                      width: "75",
                      height: "75",
                      viewBox: "0 0 75 75",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                    },
                  },
                  [
                    n("path", {
                      attrs: {
                        d: "M34.8531 74.9807C32.2196 74.7093 29.629 74.0093 27.4392 73.1379C27.4535 72.5665 27.3533 72.2664 27.1672 71.7522C26.8667 72.0236 26.3943 72.3093 26.0222 72.4522C26.0079 72.1807 25.8505 72.0522 25.9363 71.6236C25.0919 72.0522 24.1902 72.2664 23.1883 72.195C23.1597 71.6093 23.3171 71.295 23.6177 70.8379C22.0576 70.9522 20.4403 70.7522 19.51 70.1093C19.7819 69.6379 20.154 69.3379 20.6264 68.9807C20.5691 69.3093 16.6475 68.1379 15.5597 67.2236C15.6885 67.0236 15.8316 66.8522 15.9604 66.7522C15.8316 66.6665 13.7992 65.8379 13.241 65.1093C13.5989 64.8236 13.8851 64.7522 14.3574 64.6522C13.4271 64.4236 12.1247 63.7665 11.223 62.8665C11.5808 62.5522 11.7525 62.295 11.8098 62.0236C11.3232 61.9379 9.7774 61.7379 9.27645 61.0807C9.50546 60.7236 9.70583 60.6093 10.2211 60.5807C9.53408 60.3379 8.78982 59.6522 8.44632 58.895C8.94726 58.7664 9.41958 58.6665 9.30508 58.6236C8.71826 58.195 8.04557 57.0093 7.98832 56.4664C5.64105 55.4093 4.6821 54.295 4.08097 52.2379C3.05047 51.2522 2.76421 50.6093 2.73559 49.1236C2.00565 48.095 1.73371 47.2236 1.66214 46.095C1.86252 45.7522 2.2919 45.5379 2.67834 45.4093C2.50659 45.0236 2.24896 44.3807 2.14877 43.9379C1.69077 43.7379 1.46177 42.8093 1.44745 42.3236C1.96271 42.1236 2.56384 42.1665 2.89303 42.2379C2.13446 41.0807 2.04858 39.8807 2.23465 38.7807C2.43502 38.6807 2.54952 38.695 2.69265 38.6093C2.47796 38.1664 2.39209 37.8093 2.43502 37.395C0.574383 36.495 0.202255 34.4522 1.00376 33.1379C0.860636 32.295 0.917886 31.0522 1.31864 30.2379C0.817698 29.0522 1.1612 27.9236 1.79096 27.2236C2.0629 25.895 3.19359 25.6236 4.25273 25.9093C4.29566 25.2664 3.90922 24.8093 4.00941 23.995C4.26704 23.8807 4.58192 23.8807 4.79661 24.0093C4.69642 22.8379 4.69642 22.0807 4.83954 21.4093C5.26892 21.395 5.45499 21.495 5.72692 21.5664C6.0418 20.5664 6.75743 19.1522 7.64482 18.9379C7.57325 18.2522 7.6305 17.4522 7.81657 17.0807C8.08851 17.0522 8.9902 17.0236 9.31939 17.195C9.29077 16.6807 9.67721 15.7522 10.2068 15.4236C10.0064 15.2093 9.99209 14.9664 9.99209 14.6379C10.307 14.5807 10.536 14.6236 10.7077 14.6093C11.0226 13.2236 12.0388 11.895 12.7401 11.2236C13.055 11.4522 13.0693 11.8093 13.1409 12.2664C13.6275 10.7807 15.3736 9.3093 16.948 9.36645C17.1627 10.1522 17.0768 10.5664 17.1055 11.1236C17.1055 10.7093 17.1913 9.53788 17.7066 8.76645C18.2218 7.99502 19.0949 7.22359 19.925 6.88073C20.0109 7.33788 19.968 7.53788 19.968 7.90931C20.2972 7.06645 21.3992 6.06645 22.3152 5.80931C22.4011 6.08073 22.3439 6.33788 22.4154 6.46645C23.3744 5.69502 24.1616 5.36645 25.5356 5.39502C25.5785 5.82359 25.5928 6.10931 25.5642 6.39502C25.8791 6.18073 26.2083 5.96645 26.609 5.82359C26.8523 6.22359 26.8237 6.50931 26.7808 6.73788C27.3676 6.49502 28.1119 6.35216 28.484 6.43788C28.5555 6.68073 28.4983 7.33788 28.3981 7.56645C28.942 6.90931 31.0459 6.73788 32.2911 7.18073C32.0192 8.02359 31.2177 9.42359 30.3303 9.95216C30.2301 10.1664 30.1156 11.095 29.4716 11.6664C29.3427 12.2664 29.2712 12.5379 28.8418 12.995C29.3141 13.1093 29.8007 13.3379 29.5431 13.9093C32.3341 13.095 34.4953 12.4093 37.5582 12.395C40.5925 12.3807 44.6 13.3664 47.5341 14.0236C46.3461 11.8807 44.7574 9.46645 43.7985 7.00931C46.3748 6.63788 48.4644 6.70931 50.6972 6.55216C50.6256 6.03788 50.5111 5.90931 50.4252 5.39502C51.742 5.56645 55.2056 6.68073 55.8211 7.18073C55.8926 6.72359 56.0215 6.78073 56.093 6.33788C57.2523 7.12359 58.3974 8.00931 60.2723 9.62359C60.3582 9.52359 60.3725 9.38073 60.4441 9.00931C62.1759 10.495 63.5928 12.2522 64.7092 13.8807C64.8667 13.7093 64.8523 13.6379 65.11 13.4093C67.1424 16.0664 68.8026 18.0093 70.148 20.5093C70.7348 21.595 71.3073 23.3236 71.6938 24.7236C72.0087 25.8379 72.3235 26.495 72.7672 27.895C74.1269 29.795 74.0554 31.1236 73.6975 32.0664C73.855 32.9093 73.855 33.795 73.812 34.5236C74.2414 35.395 74.3273 36.7664 73.6117 38.0664C73.5258 38.3379 73.5401 38.5807 73.5544 38.795C73.6546 38.8236 73.8693 38.7807 74.2128 38.6379C74.041 41.2236 73.0678 46.7807 72.8531 47.6522C72.7243 49.1236 72.481 50.0807 71.7367 51.2093C71.3646 52.3236 70.9925 52.9807 70.2625 53.8379C69.7186 55.0379 69.4324 55.7522 68.087 56.8093C67.8723 57.2807 66.9134 58.7522 65.8542 59.2522C66.0546 59.2379 66.3122 59.4522 66.5985 59.4236C65.296 61.3236 63.9936 62.2093 62.319 63.5522C62.6053 63.4664 62.8915 63.5665 63.0919 63.6522C62.5766 64.1093 59.4135 66.4807 58.3258 66.8807C58.6407 66.9236 59.0844 66.9522 59.299 67.1522C58.655 67.6093 54.49 69.7807 53.116 69.9665C53.4309 70.0236 53.803 70.1379 54.1322 70.2807C52.7725 71.3379 49.8098 73.0807 46.9759 72.1665C46.9902 72.4665 46.9902 72.695 46.9902 73.1522C45.5303 73.9522 41.5228 74.7093 39.519 74.9665C39.5333 74.895 39.5333 74.8379 39.5333 74.7665C39.5333 73.5807 38.5744 72.6236 37.3864 72.6236C36.1985 72.6236 35.2252 73.5807 35.2252 74.7665C35.2252 74.8522 35.2395 74.9379 35.2395 75.0093L34.8531 74.9807Z",
                        fill: "black",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M57.0806 7.60938C57.4814 9.46652 57.925 11.0951 58.9126 12.4522C60.029 13.9951 61.4173 13.1237 60.9593 11.6094C60.4727 10.0094 58.6979 8.65223 57.0806 7.60938Z",
                        fill: "#D2AB67",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M44.9721 7.55225C45.5446 9.29511 46.1171 10.8094 47.1619 12.0237C48.3356 13.3808 49.4806 12.4094 48.8938 10.9951C48.2783 9.50939 46.5322 8.3951 44.9721 7.55225Z",
                        fill: "#D2AB67",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M49.452 10.8809C50.2392 12.2523 51.3412 13.6523 52.4433 14.4951C53.6742 15.438 54.261 14.5809 53.5167 13.4951C52.7296 12.338 50.8832 11.4237 49.452 10.8809Z",
                        fill: "#D2AB67",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M62.1759 20.2666C63.0489 21.7952 64.2655 23.3095 65.4821 24.2523C66.8418 25.3095 67.4859 24.3523 66.67 23.1523C65.797 21.8666 63.7503 20.8666 62.1759 20.2666Z",
                        fill: "#D2AB67",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M48.6362 13.6523C49.8384 15.2238 51.4271 16.7381 52.9156 17.5952C54.5759 18.5523 55.1627 17.4095 54.0606 16.1952C52.9013 14.9238 50.4825 14.0952 48.6362 13.6523Z",
                        fill: "#D2AB67",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M51.3985 11.1809C52.9156 12.0094 54.7333 12.6523 56.2362 12.8094C57.9107 12.9809 57.968 11.8523 56.6655 11.2666C55.2629 10.6666 53.0444 10.8809 51.3985 11.1809Z",
                        fill: "#D2AB67",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M55.7638 13.5238C57.1378 14.581 58.3401 15.5667 59.7857 15.9667C61.4173 16.3953 61.9612 15.0524 60.7589 14.2667C59.4851 13.4381 57.4241 13.4667 55.7638 13.5238Z",
                        fill: "#D2AB67",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M59.5853 16.4524C60.6444 17.8095 61.5604 19.081 62.8629 19.8095C64.3371 20.6381 65.1958 19.4667 64.2369 18.4095C63.2207 17.281 61.2169 16.8095 59.5853 16.4524Z",
                        fill: "#D2AB67",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M64.7092 24.5808C65.4392 26.138 66.0403 27.5808 67.1567 28.5951C68.4019 29.738 69.504 28.7951 68.8026 27.538C68.0584 26.2237 66.2121 25.2951 64.7092 24.5808Z",
                        fill: "#D2AB67",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M67.5717 41.9524C67.2425 43.4381 66.899 44.7667 67.1424 46.081C67.4143 47.5524 68.6881 47.4809 68.8742 46.2238C69.0603 44.8952 68.2444 43.2524 67.5717 41.9524Z",
                        fill: "#D2AB67",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M56.6942 61.3667C55.3774 62.1667 54.1751 62.8381 53.3879 63.9238C52.5006 65.1238 53.4452 66.0096 54.4757 65.2667C55.5778 64.481 56.2075 62.7667 56.6942 61.3667Z",
                        fill: "#D2AB67",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M53.4309 62.9237C51.9138 62.6809 50.5684 62.4094 49.2659 62.7237C47.8204 63.0666 47.9492 64.3523 49.223 64.4523C50.5541 64.5666 52.1571 63.6666 53.4309 62.9237Z",
                        fill: "#D2AB67",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M52.6151 64.3093C51.284 65.0665 50.0531 65.6808 49.223 66.7236C48.2927 67.895 49.2087 68.8236 50.2535 68.1093C51.3842 67.3665 52.0712 65.6808 52.6151 64.3093Z",
                        fill: "#D2AB67",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M57.3525 67.4096C55.6923 67.1525 54.1894 66.8668 52.8154 67.2239C51.2697 67.6239 51.5416 69.0525 52.9156 69.1525C54.3898 69.2668 56.0358 68.2525 57.3525 67.4096Z",
                        fill: "#D2AB67",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M61.3887 63.9381C59.6998 63.9381 58.1827 63.881 56.8802 64.4524C55.406 65.081 55.8926 66.4524 57.281 66.3381C58.7408 66.2381 60.215 64.981 61.3887 63.9381Z",
                        fill: "#D2AB67",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M56.2361 59.9953C54.8764 59.9953 53.6455 59.9524 52.5864 60.3953C51.3985 60.9096 51.7849 62.0096 52.9156 61.9238C54.0892 61.8381 55.2915 60.8238 56.2361 59.9953Z",
                        fill: "#D2AB67",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M65.339 59.938C63.6787 60.2094 62.1759 60.4094 60.9736 61.1808C59.6425 62.0523 60.3296 63.3237 61.6749 62.9809C63.1062 62.6237 64.3514 61.1523 65.339 59.938Z",
                        fill: "#D2AB67",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M66.7559 43.7095C65.3676 44.3523 64.0938 44.8809 63.1921 45.8666C62.1759 46.9666 63.0203 47.9523 64.1224 47.3238C65.296 46.6666 66.1118 45.038 66.7559 43.7095Z",
                        fill: "#D2AB67",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M64.9525 41.3952C64.6663 41.7523 64.423 42.1523 64.2226 42.5666C63.6072 43.9238 64.7235 44.5952 65.5823 43.638C66.1262 43.038 66.441 42.138 66.6414 41.1952C66.1691 41.038 65.5107 41.2095 64.9525 41.3952Z",
                        fill: "#D2AB67",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M47.3194 59.8808C47.0331 60.2379 46.7898 60.6379 46.5894 61.0522C45.9883 62.4093 47.0904 63.0808 47.9491 62.1379C48.493 61.5379 48.8079 60.6236 49.0083 59.6808C48.5503 59.5236 47.8776 59.6808 47.3194 59.8808Z",
                        fill: "#D2AB67",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M50.1819 58.7524C49.8957 59.1096 49.6524 59.4953 49.4663 59.9239C48.8509 61.281 49.9672 61.9524 50.8117 61.0096C51.3556 60.3953 51.6848 59.4953 51.8708 58.5381C51.4128 58.381 50.7401 58.5524 50.1819 58.7524Z",
                        fill: "#D2AB67",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M60.7733 58.2095C60.3439 59.1952 61.4173 60.5238 62.2761 59.5809C62.82 58.9666 62.7484 58.8095 62.777 58.1809C62.0041 58.1809 61.6177 58.1809 60.7733 58.2095Z",
                        fill: "#D2AB67",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M52.7152 58.0667C51.9424 59.8238 54.6618 59.3952 54.719 58.0381C53.9604 58.0381 53.574 58.0381 52.7152 58.0667Z",
                        fill: "#D2AB67",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M58.8554 58.4524C58.5691 58.8095 57.6674 60.6381 57.4814 61.0524C56.8659 62.4095 57.9823 63.0809 58.841 62.1381C59.3849 61.5381 60.0576 59.4381 60.2723 58.4952C59.7857 58.3238 59.4136 58.2524 58.8554 58.4524Z",
                        fill: "#D2AB67",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M56.5224 58.1238C56.2362 58.2524 55.3345 58.8952 55.1484 59.0381C54.533 59.5238 55.6493 59.7666 56.4938 59.4238C57.052 59.2095 57.7247 58.4666 57.9251 58.1381C57.4527 58.0809 57.0663 58.0666 56.5224 58.1238Z",
                        fill: "#D2AB67",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M64.1081 58.0666C63.8218 58.1952 63.4068 58.7095 63.2207 58.8666C62.6053 59.3524 63.7216 59.5809 64.5661 59.2524C65.11 59.0381 66.8418 57.7809 67.0421 57.4381C66.5698 57.3809 64.6663 57.9952 64.1081 58.0666Z",
                        fill: "#D2AB67",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M67.2139 40.738C67.2712 41.0951 67.4286 41.3237 67.7149 41.6665C68.7597 42.8808 69.4181 42.9808 69.962 41.8523C70.2482 41.2523 70.0192 40.7094 69.7186 40.0237C69.2606 40.0665 67.7721 40.538 67.2139 40.738Z",
                        fill: "#D2AB67",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M61.7751 43.0381C61.8181 43.3952 61.6463 44.0238 61.8038 44.3809C62.362 45.6381 63.0633 45.6952 63.2923 44.4952C63.4211 43.8952 63.4783 43.4666 63.4354 42.5667C63.1348 42.6095 62.1616 42.8524 61.7751 43.0381Z",
                        fill: "#D2AB67",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M61.0738 44.2666C60.6015 45.5809 60.1292 46.7523 60.2008 47.9809C60.2723 49.338 61.4603 49.4237 61.7608 48.3095C62.0757 47.1095 61.5318 45.538 61.0738 44.2666Z",
                        fill: "#D2AB67",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M72.8817 44.9238C71.565 45.7238 70.3627 46.3953 69.5755 47.481C68.7024 48.6953 69.6471 49.581 70.6776 48.8238C71.7797 48.0238 72.3951 46.3095 72.8817 44.9238Z",
                        fill: "#D2AB67",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M59.3992 26.6667C59.9431 28.2239 60.3868 29.6382 61.3458 30.7096C62.4192 31.8953 63.5642 31.1096 63.006 29.8667C62.4192 28.5382 60.7589 27.4953 59.3992 26.6667Z",
                        fill: "#D2AB67",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M65.3103 27.7524C64.6233 28.9667 63.965 30.0382 63.8218 31.2524C63.6501 32.6096 64.8094 32.881 65.296 31.8382C65.8113 30.7239 65.5393 29.081 65.3103 27.7524Z",
                        fill: "#D2AB67",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M66.1118 28.6665C66.3838 30.0379 66.3122 30.6379 66.7989 31.7094C67.4859 31.9522 67.9009 31.7665 68.3589 31.2236C67.9009 30.1808 67.3714 29.4094 66.1118 28.6665Z",
                        fill: "#D2AB67",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M61.2456 31.6379C61.4173 33.0665 61.2742 33.2951 61.446 33.9808C62.133 34.2237 62.548 34.0379 63.006 33.4951C62.5194 32.7522 62.2331 32.3379 61.2456 31.6379Z",
                        fill: "#D2AB67",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M66.3266 46.5381C65.9687 47.9809 65.8829 48.8809 65.9258 49.6952C66.4697 49.8238 67.2426 49.7238 67.7864 49.581C67.4572 48.7667 67.0851 47.3667 66.3266 46.5381Z",
                        fill: "#D2AB67",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M59.6569 47.9666C58.841 49.2094 58.7552 49.5666 58.4117 50.3094C58.9555 50.438 59.4708 50.3094 60.0004 50.1665C59.9861 49.3808 60.0004 49.0523 59.6569 47.9666Z",
                        fill: "#D2AB67",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M65.5107 46.9524C63.2923 48.3238 61.9898 49.1667 62.0328 49.9667C62.5766 50.0952 63.3495 49.9952 63.8791 49.8667C64.4659 49.181 65.3676 48.3524 65.5107 46.9524Z",
                        fill: "#D2AB67",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M71.1929 25.0095C70.3913 26.4381 69.6328 27.6809 69.461 29.0809C69.2606 30.6524 70.606 30.9809 71.1642 29.7667C71.7797 28.4667 71.4648 26.5524 71.1929 25.0095Z",
                        fill: "#D2AB67",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M56.7228 22.4238C57.696 23.8524 58.5262 25.181 59.7714 25.9953C61.174 26.9238 62.1186 25.8095 61.2313 24.6953C60.2866 23.5095 58.3258 22.9095 56.7228 22.4238Z",
                        fill: "#D2AB67",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M62.6339 22.2666C62.1759 23.9666 61.6893 25.4666 61.9898 26.9666C62.3333 28.6237 64.0652 28.5523 64.3228 27.1237C64.5804 25.6237 63.5213 23.7666 62.6339 22.2666Z",
                        fill: "#D2AB67",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M54.8765 14.0952C55.3202 15.7666 55.6637 17.2809 56.5797 18.4809C57.6102 19.8095 58.8697 19.0809 58.3831 17.7238C57.8821 16.3095 56.2362 15.0809 54.8765 14.0952Z",
                        fill: "#D2AB67",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M53.4738 18.6238C54.4757 19.8952 55.3488 21.0666 56.5797 21.7666C57.968 22.5381 58.7695 21.4381 57.8678 20.4381C56.8945 19.3952 55.0053 18.9666 53.4738 18.6238Z",
                        fill: "#D2AB67",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M59.3277 18.1238C59.2704 19.7381 59.1559 21.1952 59.6569 22.5238C60.2151 23.9952 61.5461 23.6809 61.4889 22.3381C61.4173 20.9095 60.2723 19.3524 59.3277 18.1238Z",
                        fill: "#D2AB67",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M61.6177 11.4666C61.861 13.238 62.0041 14.8237 62.7913 16.1665C63.6644 17.6523 65.0527 17.0665 64.7378 15.6237C64.4086 14.0951 62.8772 12.638 61.6177 11.4666Z",
                        fill: "#D2AB67",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M68.7168 19.3523C68.1729 21.338 67.6147 23.0952 67.8437 24.8523C68.1013 26.838 69.8331 26.8237 70.148 25.1666C70.4772 23.3952 69.5183 21.1523 68.7168 19.3523Z",
                        fill: "#D2AB67",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M65.6109 15.6238C65.3962 17.4524 65.1386 19.0952 65.5823 20.6381C66.0832 22.3666 67.6147 22.1381 67.6719 20.6095C67.7292 18.9809 66.5699 17.1238 65.6109 15.6238Z",
                        fill: "#D2AB67",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M51.7277 6.22363C53.345 7.70935 53.8746 9.10935 55.1913 10.1808C56.6655 11.3665 57.7819 10.1808 56.9375 8.83792C56.0501 7.40935 53.8459 6.53792 51.7277 6.22363Z",
                        fill: "#D2AB67",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M46.203 7.38101C48.3499 8.49529 49.5808 9.99529 51.4128 10.3953C53.4165 10.8239 54.1179 9.38101 52.7439 8.23815C51.2983 7.00958 48.5216 6.92387 46.203 7.38101Z",
                        fill: "#D2AB67",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M61.3028 40.9095C61.3171 40.2381 61.3315 37.7381 61.3601 37.0666C62.7341 36.3381 64.0652 35.5381 65.4964 34.9095C67.7149 33.9524 69.9763 33.6524 72.023 32.3809C72.6384 31.9952 72.8674 32.1381 73.0106 31.1238C73.5974 32.1952 73.9695 34.2095 73.3684 35.3095C72.939 36.0809 71.8226 36.5095 70.9782 36.8809C69.4181 37.5666 67.5861 37.9952 66.0117 38.6524C64.1224 39.4381 62.6339 40.0524 61.3028 40.9095Z",
                        fill: "#F58220",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M61.3315 39.7809C61.3458 39.0809 61.2885 38.9809 61.3028 38.2666C62.6482 37.4094 64.0795 36.5952 65.6109 36.0523C67.6863 35.338 69.919 34.8666 72.0516 33.638C72.6957 33.2666 73.2396 33.0809 73.4972 32.3237C73.8121 33.2237 73.4686 34.0237 72.8818 34.6237C72.2377 35.2809 71.8942 35.5094 71.0497 35.9094C69.4753 36.6237 67.5718 36.9237 65.9831 37.4952C64.0652 38.2094 62.6625 38.8809 61.3315 39.7809Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M61.3028 37.538C61.3171 36.838 61.3315 36.1237 61.3601 35.4237C62.7341 34.6523 64.0652 33.8095 65.4964 33.1523C67.7149 32.1523 69.9763 31.8237 72.023 30.4809C72.6384 30.0666 72.7529 29.338 72.896 28.2666C73.4829 29.3952 73.9695 30.4809 73.3684 31.638C72.939 32.4666 71.8226 32.9095 70.9782 33.2952C69.4181 34.0095 67.7292 34.4237 66.0976 35.038C64.1653 35.7523 62.6339 36.638 61.3028 37.538Z",
                        fill: "#00AEEF",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M61.0165 42.7095C61.0309 42.0095 61.2312 41.2095 61.2455 40.4952C62.7197 39.7238 63.6644 39.1238 65.2388 38.5524C67.3284 37.7952 70.2768 37.2952 72.3092 35.9381C72.9246 35.5238 73.2968 35.2524 73.5544 34.5095C73.8693 35.4095 74.0697 35.9667 73.6403 37.0952C73.3111 37.9667 72.0945 38.3667 71.2501 38.7524C69.6757 39.4667 67.3857 39.7952 65.8113 40.4952C63.9363 41.3238 62.3333 41.8095 61.0165 42.7095Z",
                        fill: "#00A651",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M13.742 39.738C13.5989 37.8094 13.7134 36.538 13.699 35.8666C12.325 35.138 10.8938 34.2951 9.4625 33.6666C7.24405 32.7094 4.98266 32.3951 2.95026 31.138C2.33482 30.7523 2.10582 30.8951 1.96269 29.8809C1.37588 30.9523 1.00375 32.9666 1.61919 34.0666C2.04857 34.838 3.16495 35.2666 3.99509 35.638C5.56947 36.3237 7.38717 36.7523 8.96156 37.4094C10.8365 38.1809 12.4252 38.8809 13.742 39.738Z",
                        fill: "#F58220",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M13.699 38.5237C13.6847 37.8237 13.6704 37.7237 13.6561 37.0237C12.2964 36.1665 10.8795 35.3522 9.34801 34.8094C7.27268 34.0951 5.05422 33.6237 2.92164 32.3951C2.27758 32.0237 1.7337 31.8237 1.46176 31.0808C1.14688 31.9808 1.49038 32.7808 2.0772 33.3808C2.73558 34.0379 3.06477 34.2665 3.90921 34.6522C5.4836 35.3808 7.40149 35.6808 8.97588 36.2522C10.8795 36.9522 12.3823 37.6237 13.699 38.5237Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M13.6704 36.2808C13.6991 35.2808 13.7706 34.7665 13.8708 34.2665C12.4968 33.5094 10.8938 32.5665 9.46252 31.9094C7.24406 30.8951 4.98267 30.5808 2.95028 29.238C2.33484 28.8237 2.22034 28.0951 2.07721 27.0237C1.5047 28.1523 1.00376 29.238 1.61921 30.3951C2.04858 31.2237 3.16497 31.6665 3.9951 32.0522C5.56949 32.7808 7.24406 33.1951 8.89001 33.7951C10.7936 34.5094 12.3394 35.3951 13.6704 36.2808Z",
                        fill: "#00AEEF",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M13.9424 41.4666C13.9137 40.7666 13.7277 39.9666 13.699 39.2523C12.2392 38.4809 11.2802 37.8809 9.72014 37.2952C7.61619 36.538 4.6821 36.038 2.64971 34.6952C2.03426 34.2809 1.66214 34.0095 1.40451 33.2666C1.08963 34.1523 0.889255 34.7237 1.31863 35.8523C1.64782 36.7237 2.8644 37.1237 3.69453 37.5095C5.26892 38.238 7.55894 38.5666 9.13332 39.2523C11.0083 40.0809 12.6256 40.5666 13.9424 41.4666Z",
                        fill: "#00A651",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M21.8287 55.9953C21.3277 55.4095 19.4957 53.181 18.9948 52.581C17.1198 52.1667 15.2449 51.681 13.3842 51.3667C10.5074 50.881 7.97405 51.1238 5.05427 50.3381C4.16689 50.0953 3.8377 50.0524 3.13638 49.4238C3.33676 50.481 4.38158 52.681 5.7699 53.5524C6.75747 54.181 8.28892 54.2095 9.37668 54.3381C11.495 54.5953 13.556 54.4667 15.6027 54.781C18.0072 55.1667 19.9108 55.4667 21.8287 55.9953Z",
                        fill: "#F58220",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M20.9985 54.9811C20.4689 54.3669 20.2972 54.0097 19.8106 53.5954C17.864 53.0669 15.9605 52.6954 14.0569 52.4954C11.4949 52.2097 8.87571 52.1669 5.85575 51.5669C4.96837 51.3954 4.28136 51.2812 3.47986 50.6526C3.80905 51.5097 4.93974 52.2812 5.95594 52.7097C7.07232 53.1954 7.57327 53.224 8.6324 53.2812C10.7364 53.4097 12.7974 53.5097 14.7582 53.7526C17.1627 54.0669 19.0377 54.424 20.9985 54.9811Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M19.4098 52.9953C18.8803 52.381 17.8354 51.4667 17.3059 50.8382C15.2735 50.181 14.429 50.0525 12.5398 49.7239C9.6343 49.1953 7.11528 49.381 4.15257 48.5382C3.53713 48.3667 2.99325 47.6524 2.07724 46.7239C2.32055 47.8382 2.62112 49.1382 3.75182 50.0953C4.6392 50.8525 5.66971 50.7953 6.82903 50.9525C8.86142 51.2382 10.8366 51.3239 12.8976 51.5953C15.3021 51.881 17.449 52.4239 19.4098 52.9953Z",
                        fill: "#00AEEF",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M23.4173 57.5524C22.9021 56.9238 22.1292 56.2524 21.5996 55.6238C19.5959 55.1952 18.2219 54.8095 16.2753 54.5667C13.6705 54.2524 9.86329 54.7095 6.87196 53.8238C6.1277 53.6095 5.36913 53.1809 4.56763 52.5667C4.91113 53.4238 5.06857 54.2095 6.29945 55.1238C7.2584 55.8381 9.31942 56.1667 10.4358 56.3667C12.5111 56.7381 15.0445 56.5238 17.1341 56.6524C19.4814 56.8095 21.4708 56.9809 23.4173 57.5524Z",
                        fill: "#00A651",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M52.243 56.7095C52.8011 56.1238 54.8335 53.9666 55.3917 53.3809C57.3096 53.0238 59.2275 52.5809 61.1311 52.3238C64.0366 51.9238 66.5699 52.2381 69.5469 51.5238C70.4629 51.3095 70.7921 51.2809 71.5507 50.6809C71.2501 51.7238 70.0049 53.8952 68.5307 54.7238C67.4716 55.3095 65.9401 55.3095 64.8524 55.4095C62.7055 55.6095 60.6588 55.4238 58.5834 55.6809C56.1503 55.9809 54.2181 56.2381 52.243 56.7095Z",
                        fill: "#F58220",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M53.1733 55.7237C53.7601 55.1094 53.9748 54.7666 54.49 54.3666C56.4795 53.8952 58.426 53.5666 60.3439 53.4094C62.9345 53.1952 65.5537 53.2237 68.6309 52.7094C69.5469 52.5523 70.2339 52.4523 71.0927 51.8523C70.6776 52.6952 69.4753 53.438 68.4305 53.8523C67.2569 54.3094 66.7559 54.3237 65.6968 54.3523C63.5785 54.4094 61.5175 54.4666 59.5138 54.6666C57.0949 54.9094 55.1914 55.2094 53.1733 55.7237Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M54.948 53.781C55.5348 53.1667 56.6369 52.3238 57.2237 51.7095C59.3277 51.1095 60.215 50.981 62.1186 50.6953C65.0813 50.2524 67.5717 50.4953 70.6203 49.7381C71.2501 49.581 71.8655 48.881 72.8531 47.981C72.5096 49.081 72.0802 50.381 70.8636 51.2953C69.9047 52.0238 68.8742 51.9381 67.7006 52.0667C65.6395 52.281 63.6501 52.3381 61.5747 52.5381C59.1559 52.781 56.9518 53.2667 54.948 53.781Z",
                        fill: "#00AEEF",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M50.5111 58.2239C51.0979 57.6096 51.9137 56.9667 52.5149 56.3524C54.5473 55.9667 55.9642 55.6239 57.9394 55.4382C60.5729 55.1953 64.3371 55.7524 67.4 54.9382C68.1586 54.7382 68.9601 54.3382 69.8188 53.7524C69.4038 54.5953 69.1604 55.381 67.8294 56.2667C66.8132 56.9524 64.7092 57.2096 63.5928 57.3953C61.4889 57.7096 58.9842 57.4096 56.8659 57.4953C54.5186 57.581 52.5149 57.6953 50.5111 58.2239Z",
                        fill: "#00A651",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M28.3409 72.9665C31.1605 71.9951 34.2234 71.6665 37.1861 71.6665C40.0629 71.6665 43.3691 72.3522 45.8881 72.9665C44.9149 73.6665 42.5676 74.1094 39.8625 74.2951C39.6478 73.1379 38.6316 72.2665 37.4294 72.2665C36.1985 72.2665 35.1823 73.1522 34.9819 74.3236C32.2196 74.1522 29.672 73.7236 28.3409 72.9665Z",
                        fill: "#00A651",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M27.0384 64.7952L27.797 70.8238L46.3604 70.9952L47.1619 64.8238C40.4493 63.2524 33.751 63.2952 27.0384 64.7952Z",
                        fill: "#F58220",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M52.8011 70.3809C51.1695 69.8237 49.7239 69.2523 48.3213 69.4809C46.7326 69.738 46.8328 71.5237 48.1925 71.8523C49.6237 72.2094 51.3842 71.2094 52.8011 70.3809Z",
                        fill: "#D2AB67",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M26.7808 63.3522C30.1013 62.3808 33.7081 62.0522 37.2004 62.0522C40.5782 62.0522 44.4855 62.738 47.4339 63.3522L47.0761 65.4523C43.9702 64.838 40.5066 64.2951 37.1861 64.2951C33.8655 64.2951 30.316 64.5523 27.1386 65.4523L26.7808 63.3522Z",
                        fill: "#00AEEF",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M27.2245 66.2523C30.4162 65.2808 33.8369 64.9666 37.2004 64.9666C40.4637 64.9666 44.1277 65.638 46.9759 66.2523L46.6467 68.7951C43.6697 68.1809 40.3778 67.638 37.2004 67.638C33.9944 67.638 30.6023 67.8809 27.5394 68.7951L27.2245 66.2523Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M27.6539 69.7523C30.6738 68.7808 34.0087 68.438 37.2004 68.438C40.2919 68.438 43.8414 69.1237 46.5322 69.738L46.203 72.2665C43.3691 71.6523 40.206 71.1094 37.1718 71.1094C34.1375 71.1094 30.9028 71.3666 28.0117 72.2665L27.6539 69.7523Z",
                        fill: "#00A651",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M38.0734 0.952393L39.5476 2.40954L41.623 2.42382L41.6373 4.49525L43.0972 5.96668L41.6373 7.42382L41.623 9.50954H39.5476L38.0734 10.9667L36.5992 9.50954H34.5382L34.5239 7.42382L33.064 5.96668L34.5239 4.49525L34.5382 2.42382L36.5992 2.40954L38.0734 0.952393Z",
                        fill: "#00AEEF",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M38.0735 0.266602L39.748 1.92374L42.1096 1.93803L42.1239 4.28089L43.7842 5.95232L42.1239 7.62374L42.1096 9.9666L39.748 9.99517L38.0735 11.6523V11.3095L39.6479 9.75232L41.8663 9.73803L41.8806 7.52374L43.4407 5.95232L41.8806 4.38089L41.8663 2.1666H39.6479L38.0735 0.609459V0.266602ZM38.0735 11.6523L36.4132 9.99517L34.0516 9.98089L34.0373 7.63803L32.377 5.9666L34.0373 4.28089L34.0516 1.93803L36.4132 1.92374L38.0735 0.266602V0.609459L36.5134 2.1666L34.2949 2.18089L34.2806 4.39517L32.7205 5.9666L34.2806 7.53803L34.2949 9.75232L36.5134 9.7666L38.0735 11.3095V11.6523Z",
                        fill: "#D2AB67",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M39.7623 5.1665L40.1202 5.98079L41.0075 6.0665L40.3348 6.65222L40.5352 7.52365L39.7623 7.08079L38.9895 7.52365L39.1898 6.65222L38.5172 6.0665L39.4045 5.98079L39.7623 5.1665Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M38.1021 3.19531C39.2471 3.19531 40.2633 3.8096 40.8215 4.72388C40.4064 4.32388 39.8339 4.06674 39.2041 4.06674C37.9303 4.06674 36.8998 5.1096 36.8998 6.38103C36.8998 7.65246 37.9303 8.68103 39.2041 8.68103C39.8339 8.68103 40.4064 8.42389 40.8215 8.02389C40.2633 8.93817 39.2471 9.56674 38.1021 9.56674C36.3559 9.56674 34.9247 8.13817 34.9247 6.38103C34.9247 4.6096 36.3559 3.19531 38.1021 3.19531Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M25.6787 12.6808C26.5947 13.3808 27.797 13.4522 29.0565 12.2236C29.0708 12.0236 28.8847 11.8379 28.5126 11.6379C29.0708 11.6094 29.6433 11.6522 30.0441 10.2236C30.1013 10.0808 29.8866 10.0236 29.4143 10.0236C30.6023 9.48078 31.3322 8.59507 31.7616 7.45221C31.0173 7.13793 29.6004 7.2665 28.0117 7.88078C28.1691 7.48078 28.255 7.08078 28.2407 6.69507C27.7254 6.68078 27.11 6.82364 26.5947 7.03793C26.652 6.7665 26.609 6.42364 26.423 6.19507C24.9917 6.70935 23.8896 7.65221 23.1883 8.8665C23.8038 8.85221 24.4335 8.82364 24.9774 9.19507C25.4068 9.03793 25.8505 8.88078 26.2799 8.72364C25.965 8.93793 25.5499 9.18078 25.2207 9.39507C25.507 9.60936 25.7073 9.79507 25.9077 10.0236C26.5661 9.75221 27.2388 9.48078 27.8972 9.19507C27.296 9.59507 26.6377 9.92364 26.0365 10.2951C26.194 10.7522 26.2512 11.2951 26.0938 11.7665C26.4945 11.7379 26.9096 11.7094 27.3104 11.6808C26.881 11.8522 26.4945 11.9665 26.0652 12.0094C26.0079 12.1522 25.7217 12.5665 25.6787 12.6808Z",
                        fill: "#00A651",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M17.7209 11.5239C17.3631 9.98102 17.9928 8.48102 19.5815 7.3953C19.6817 7.63816 19.7103 8.06673 19.8391 8.35245C20.5977 7.28102 21.2561 6.6953 22.1005 6.18102C22.1721 6.3953 22.2294 6.6953 22.3009 6.90959C23.4459 6.03816 24.4907 5.5953 25.2779 5.6953C25.2493 5.92387 25.3066 6.20959 25.3352 6.38102C24.3762 7.15245 22.9736 7.7953 22.5872 9.23816C21.5853 8.62387 20.7695 8.75245 20.1397 9.63816C18.8516 9.20959 18.0358 9.83816 17.7209 11.5239Z",
                        fill: "#00A651",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M26.1653 13.438C26.3085 13.2809 26.2655 14.3095 25.9936 14.7952C26.2655 14.8095 26.5804 14.9238 26.838 14.938C27.296 14.4666 27.9115 14.138 28.6844 13.9809C28.9706 13.9095 29.1567 13.7666 29.2282 13.5523C29.0994 13.338 28.8704 13.238 28.5269 13.238C28.5126 13.438 26.0222 13.5952 26.1653 13.438Z",
                        fill: "#00A651",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M19.6531 13.5667C18.5797 13.281 18.0787 12.2096 18.2361 11.3382C18.3936 10.4667 18.6942 10.1953 19.1092 9.95245C19.5243 9.70959 19.925 10.0667 20.3258 10.1239C20.6693 9.88102 20.655 9.43816 21.3706 9.36673C22.0719 9.2953 22.3296 9.40959 22.6444 9.7953C23.3314 8.90959 24.8343 9.22388 25.3066 10.081C25.7932 10.9382 25.8505 11.8524 24.9058 12.481C25.3209 12.881 25.6501 13.181 25.7503 13.6667C25.965 14.6239 25.3209 15.081 24.2761 15.081C24.2761 16.9667 23.2742 16.4953 22.4584 16.381C22.7446 15.9953 22.8448 15.7096 22.9307 15.3096C22.9879 14.8096 22.716 14.3525 22.2866 13.8953C23.0022 13.2953 23.2742 12.6524 23.0738 11.9667C22.487 11.7239 21.8716 11.7953 21.342 12.1382C21.1989 11.6096 20.9126 11.1239 20.2399 10.7524C19.4241 11.5239 19.2094 12.4667 19.6531 13.5667Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M24.3763 16.6095C24.8199 16.0095 25.4354 15.5238 26.2369 15.1523C25.693 15.3095 25.1348 15.4809 24.5909 15.4238C24.6053 15.8095 24.5194 16.2095 24.3763 16.6095Z",
                        fill: "#00A651",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M20.7981 13.6952C20.4689 13.4952 20.1827 13.5238 19.9107 13.4952C19.5672 12.7381 19.8535 11.5809 20.3544 11.1523C20.7408 11.6809 20.9412 12.2238 20.9698 12.7523C21.6282 12.4523 22.3152 12.2523 22.7589 12.3095C22.5585 12.9523 22.2007 13.5095 21.7141 13.8523C22.1292 14.1523 22.3295 14.4238 22.3152 14.7952C21.7427 14.7095 20.9985 14.9666 20.5834 15.0952C20.5691 14.8381 20.5834 14.6952 20.3687 14.5952C20.5977 14.2381 20.9126 14.0523 20.7981 13.6952Z",
                        fill: "#F58220",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M12.2535 17.2952C12.3823 17.2094 12.4968 17.138 12.6113 17.0809C12.6399 16.4952 12.6828 15.9094 12.7115 15.3094C12.7401 15.8666 12.7687 16.4094 12.7973 16.9666C13.055 16.6952 13.3412 16.5523 13.5988 16.6523C13.6132 16.0094 13.5845 15.438 13.5988 14.7952C13.6704 15.4094 13.7563 16.038 13.8135 16.6523C14.0282 16.5666 14.1284 16.6952 14.2572 16.7809C14.7295 16.1523 15.2305 15.638 15.8459 15.5237C15.345 15.8523 14.8011 16.2237 14.4433 16.8523C14.9156 16.9666 15.4452 17.3523 15.8459 17.7523C16.261 16.6237 16.9337 15.6523 17.864 14.8094C17.6923 14.6523 17.4633 14.6094 17.1484 14.6809C17.3631 14.0809 17.5778 13.4952 17.7781 12.8809C17.6923 12.8666 17.6207 12.8523 17.5348 12.8237C17.5634 12.338 17.4346 11.8523 17.2343 11.3666C16.8908 11.5809 16.7333 11.9809 16.5902 12.4094C16.719 11.5666 16.7906 10.6523 16.6761 9.79517C14.7152 10.2523 13.6704 11.4809 13.1122 12.7523C12.9834 12.4237 12.8832 12.1095 12.6685 11.838C11.867 12.7809 11.2659 13.7666 11.1228 14.8523C10.8795 14.838 10.5359 14.8237 10.2926 14.8809C10.3213 15.0094 10.4644 15.1809 10.493 15.3094C11.3518 15.8952 11.867 16.5666 12.2535 17.2952Z",
                        fill: "#00A651",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M19.0376 15.8095C18.9661 15.2667 18.2791 14.6667 17.635 14.4095C17.7924 13.9667 17.9928 13.381 18.0787 12.9524C18.2648 13.2238 18.4795 13.6953 18.6798 13.9667C19.2666 13.8095 19.8248 13.8095 20.3401 13.9667C20.2685 14.2381 20.0538 14.481 19.6817 14.681C19.9393 14.6953 20.1254 14.7667 20.2256 14.9238C20.197 15.081 20.1827 15.1667 20.1397 15.3381C19.7533 15.3238 19.4241 15.6667 19.0376 15.8095Z",
                        fill: "#00A651",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M16.8192 19.3524C16.2753 18.6952 16.1608 17.9095 16.49 16.9524C17.0053 15.9524 17.5921 15.4524 18.1646 15.0238C18.5224 15.4381 18.8086 15.8667 18.7085 16.3524C19.925 15.3667 21.2418 15.1667 22.3439 14.981C22.3296 15.7238 22.2723 16.1381 21.986 16.681C22.6731 16.781 22.9736 16.8381 23.7179 16.7667C23.6177 16.9667 23.5032 17.2381 23.403 17.4524C20.0252 20.1381 18.2505 22.6381 16.7906 25.1667C15.5883 25.0667 14.6866 25.2667 14.0712 25.6095C14.0855 25.3238 14.0425 25.1524 14.0425 24.8667C14.7009 24.9095 15.4166 24.7952 16.0034 24.5381C16.3326 24.381 16.2181 23.7238 16.5473 23.6238C17.3201 23.4095 17.7924 22.9238 18.1216 22.3381C18.365 21.881 18.2505 21.2952 18.093 20.8238C17.9928 20.4952 17.6207 20.3238 17.3774 20.081C18.1073 20.0524 18.823 20.0095 19.5529 19.981C18.823 19.9381 18.0787 19.9095 17.3488 19.8667C17.9642 19.281 18.4795 18.8524 19.1378 18.681C18.4795 19.0381 17.8211 19.3952 17.1484 19.7524C17.1198 19.6381 17.0768 19.5381 17.0339 19.4238C17.406 18.4238 17.9499 17.7238 18.6941 17.3095C17.9642 17.481 17.3774 18.1524 16.9337 19.2952C16.9194 19.2952 16.8764 19.3238 16.8192 19.3524Z",
                        fill: "#00A651",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M9.14762 21.4522C8.08849 20.6379 7.83086 19.2236 8.08849 17.3808C8.63237 17.3951 9.16194 17.3522 9.63425 17.9522C9.54838 17.0665 9.83463 16.3522 10.3499 15.7522C11.0655 16.2093 11.5665 16.7522 11.8384 17.4236C11.6666 17.6522 11.5092 18.0808 11.5665 18.3093C11.2516 18.1808 11.0941 18.0665 10.7936 18.1951C10.5932 18.2951 10.4071 18.6379 10.1924 18.7236C9.87757 18.8379 9.54838 19.0808 9.47681 19.3522C9.27644 20.0808 9.2335 20.7093 9.14762 21.4522Z",
                        fill: "#00A651",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M9.89191 21.1952C10.2068 21.1095 10.536 21.0524 10.8509 21.1952C10.9654 21.4809 10.9797 21.7809 10.8795 22.0666C11.4091 21.8381 11.8384 22.0524 12.2249 22.2666C12.4109 21.5809 12.6256 20.7809 13.3269 20.5381C13.8708 20.9381 14.1285 21.6381 14.243 22.2381C14.8727 22.1809 15.5597 22.2524 16.2038 22.8524C15.7744 23.5809 14.9013 24.0381 13.971 24.1666C14.3861 24.4666 15.1447 24.6524 15.7887 24.2809C16.0463 24.1238 16.032 23.6524 16.2038 23.4238C16.991 23.0666 17.7209 22.8095 17.9929 21.8666C17.8497 21.0952 17.5349 20.3952 16.7334 20.1238C16.5187 19.1095 15.7315 17.8238 14.658 17.3238C14.014 17.0095 13.1981 17.0524 12.6686 17.4095C12.2535 17.6952 12.139 18.3952 11.8384 18.8095C11.3375 18.7095 10.765 18.6524 10.3213 19.0809C9.70585 19.6809 9.63429 20.4524 9.89191 21.1952Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M13.742 23.838C14.4576 23.7522 15.1733 23.4094 15.6742 22.9522C15.3164 22.7094 14.5865 22.638 13.9281 22.6808C13.8994 22.1808 13.7277 21.5522 13.3269 21.0522C12.9405 21.2237 12.7688 21.9522 12.6113 22.5665C12.0817 22.5094 11.4091 22.3951 10.8509 22.3951C10.9081 22.938 11.3232 23.3665 12.1104 23.4665C12.2821 23.2665 12.4825 23.0808 13.0264 22.9522C13.3126 23.1237 13.5989 23.4665 13.742 23.838Z",
                        fill: "#F58220",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M4.81091 25.2952C4.65347 25.0952 4.49603 24.7809 4.49603 24.4381C4.73935 24.3381 4.96835 24.4524 5.21166 24.4381C5.1401 23.6809 5.05422 22.7809 5.21166 22.0238C5.52654 21.9667 5.72692 22.1809 5.95592 22.3524C6.37099 20.7952 6.92918 19.8667 7.6305 19.5667C7.90244 20.5524 8.00262 21.5809 9.3337 22.2666C9.60564 21.6952 9.97776 21.5809 10.3928 21.6667C10.5216 22.1809 10.4787 22.6524 10.3928 23.0952C10.5932 23.3667 10.6791 23.7809 10.722 24.0524C11.1943 24.0238 11.681 23.9381 12.0817 24.1381C12.1676 24.4381 12.1676 24.7524 12.1103 25.0524C12.2821 25.1952 12.5397 25.2952 12.4109 25.5952C11.6094 26.4952 10.7936 27.3952 9.99208 28.2952C9.83464 27.9809 9.72014 27.9952 9.49114 27.9238C9.51976 27.3667 9.24782 26.5666 8.91863 26.2666C8.56082 25.9095 7.93106 26.0952 7.48737 25.8809C6.98643 25.6381 6.7288 25.1095 6.18492 24.9667C5.75554 24.8524 5.12579 25.0381 4.81091 25.2952Z",
                        fill: "#00A651",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M15.5311 27.8951C15.8889 26.9951 16.2467 26.2237 16.6331 25.4952C15.7887 25.4237 14.5864 25.638 13.8851 25.9237C13.8708 25.5523 13.9424 25.2666 13.7849 24.8523C13.47 25.138 13.055 25.3237 12.826 25.238C12.7258 25.8523 12.325 26.4523 11.7668 26.9666C12.1819 26.7951 12.4968 27.0094 12.4109 27.5666C12.7974 27.1094 13.3985 26.8951 14.2286 26.8809C14.5435 27.3809 14.5435 27.7666 14.4147 28.1237C14.6007 28.0809 15.3307 27.938 15.5311 27.8951Z",
                        fill: "#00A651",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M13.6847 24.5237C13.4701 24.7809 12.8546 24.7951 12.4395 24.9237C12.5397 24.5666 12.4682 24.1523 12.2821 23.7094C12.4539 23.4951 12.6685 23.3809 12.9119 23.3809C13.1409 23.638 13.3556 23.9523 13.2124 24.2094C13.4271 24.338 13.8994 24.2666 13.6847 24.5237Z",
                        fill: "#00A651",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M13.9138 33.7809C14.2 31.7809 14.6294 30.1809 15.3164 28.3952C15.0301 28.4237 14.3431 28.5523 14.0426 28.5952C14.1428 28.2094 14.1141 27.7809 13.9281 27.3237C13.0979 27.4094 12.5254 27.7523 12.0674 28.2094C12.139 27.9523 12.0674 27.6952 11.8527 27.438C11.2659 27.5237 10.7936 27.8666 10.4501 28.4523C10.4358 28.6952 10.307 28.9523 10.4215 29.1666C10.5073 29.338 10.8365 29.2523 10.9367 29.4094C11.2516 29.8666 11.0799 30.2952 10.8509 30.6523C10.6362 30.9809 10.2927 31.2523 9.93484 31.5094C11.18 32.2237 12.6686 33.0809 13.9138 33.7809Z",
                        fill: "#00A651",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M2.76423 27.9381C2.34916 26.7809 2.70697 26.2095 3.83767 26.2381C3.63729 26.5952 3.47986 26.9666 3.72317 27.3381C3.29379 27.2095 3.00754 27.4809 2.76423 27.9381Z",
                        fill: "#00A651",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M10.0493 30.9808C10.1495 30.7237 10.1209 30.4237 10.1209 30.138C9.01883 29.9522 8.26026 30.1094 7.51601 30.3522C7.53032 29.8094 7.01506 29.2522 6.29943 28.8665C5.84143 29.0094 5.72693 29.4951 5.71262 29.938C4.99698 29.5808 4.2241 29.2808 3.50847 28.6951C2.99322 28.2665 3.05047 27.538 4.12391 27.6522C4.06666 26.738 4.3386 25.8522 5.44068 25.5808C6.49981 25.3237 6.88625 25.938 7.04369 26.438C7.54463 26.5237 8.17439 26.3808 8.56083 26.7094C9.24783 27.2951 8.8757 27.9237 9.03314 28.5237C9.34802 28.5094 9.64858 28.538 9.83465 28.738C9.97777 28.9094 9.7774 29.1665 9.74877 29.3808C10.1638 29.4808 10.5073 29.6808 10.5789 30.038C10.6362 30.438 10.2497 30.6665 10.0493 30.9808Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M9.6629 31.4523C9.79171 31.1238 9.90622 30.7952 9.93484 30.3666C9.17627 30.1809 8.20301 30.3809 7.47307 30.5666C7.22976 30.1523 6.97213 29.5238 6.34237 29.2095C6.07043 29.3523 5.99887 29.7809 5.95593 30.0666C7.15819 30.4952 8.46064 30.9952 9.6629 31.4523Z",
                        fill: "#F58220",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M10.5646 48.5523C9.84896 47.9666 8.78982 47.838 8.40338 48.338C8.60376 48.6237 8.91864 48.8094 9.31939 48.9952C10.5789 49.038 11.1085 49.038 12.368 49.0809C12.9119 48.6237 13.2554 48.3094 13.1695 47.6809C12.3537 47.6523 11.9815 47.7094 11.7382 48.1523C11.7382 47.4523 11.4233 46.9666 10.5216 46.3523C10.1495 47.2523 10.2497 47.7523 10.5646 48.5523Z",
                        fill: "#F58220",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M13.0264 49.0666C13.4844 48.5666 13.6418 47.9666 13.4987 47.2666C12.7974 47.1666 12.2678 47.238 11.9529 47.5238C11.638 46.7952 11.1514 46.1952 10.3356 45.9523C9.83464 46.5952 9.82033 47.238 10.0064 47.8952C9.19057 47.5952 8.47494 47.5666 7.95969 48.1523C8.04556 48.5095 8.23163 48.7666 8.50356 48.9238C8.21731 48.8952 7.91675 48.8523 7.61618 48.8238C7.44443 48.6095 7.12955 48.4523 7.0723 48.1666C7.01505 47.8809 7.00074 47.6238 7.14387 47.3523C6.85761 46.9952 6.48549 46.3666 6.59999 45.8809C6.70017 45.4809 7.12955 45.1237 7.6305 45.0809C7.57324 44.3523 7.90243 43.5666 8.61807 43.3237C9.34801 43.0809 10.7793 42.7523 11.0941 44.0952C11.6094 44.138 12.2821 43.9237 12.6685 44.238C13.055 44.5666 13.1265 45.2095 12.9691 45.638C13.7992 45.938 14.4576 46.8666 14.4719 47.6238C14.4862 48.3523 13.4987 48.5809 13.0264 49.0666Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M17.0911 50.4523C16.1465 50.0237 14.8154 49.6237 13.6704 49.2951C14.3145 48.8951 14.9585 48.0809 14.8727 47.3666C14.7725 46.5237 14.0425 45.8666 13.4128 45.2237C13.4843 44.7237 13.3555 43.9666 12.8689 43.738C12.096 43.3666 11.3804 43.838 11.3088 43.4523C11.223 43.0523 11.0226 42.8666 10.2497 42.6237C10.7077 42.5666 11.1657 42.5094 11.6237 42.438C12.096 42.3809 12.5827 42.0666 13.0407 42.2237C13.6847 42.438 14.0712 42.4094 14.0998 42.5094C14.6723 44.9666 15.2591 47.0952 17.0911 50.4523Z",
                        fill: "#00A651",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M6.75744 48.6665C5.0113 48.6951 3.55141 47.7951 2.27759 46.2665C2.36346 45.9808 2.69265 45.7379 3.26516 45.5379C2.93597 45.0094 2.6354 44.4665 2.69265 43.8379C3.15066 43.6808 3.60866 43.8094 4.06667 43.9379C4.19548 43.8379 4.33861 43.7237 4.46742 43.6094C5.14011 43.9808 5.29755 44.3665 5.38343 44.7379C5.48361 44.3094 5.74124 44.0379 6.142 43.9094C6.52844 44.2665 6.72881 44.6094 6.72881 44.9665C6.28512 45.1808 6.11337 45.5808 5.97024 45.9808C5.99887 46.4951 6.18493 46.9522 6.51412 47.3522C6.39962 47.7522 6.4855 48.1951 6.75744 48.6665Z",
                        fill: "#00A651",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M7.20112 44.7095C7.10093 44.2667 6.92918 43.7952 6.32805 43.4381C5.8128 43.5381 5.52655 43.681 5.48361 43.881C5.31186 43.5238 4.92542 43.2524 4.35291 43.081C4.03804 43.2095 3.89491 43.3667 3.8806 43.5952C3.3224 43.3667 2.76421 43.3952 2.20602 43.5667C2.12015 43.2667 1.89114 43.0238 1.87683 42.6667C2.44934 42.5667 2.9789 42.581 3.55141 42.481C2.60677 41.6381 2.56384 40.5667 2.67834 39.4381C3.40828 39.3524 3.86628 39.8667 4.30998 40.4524C4.42448 40.0667 4.73935 39.8238 5.25461 39.7238C6.14199 40.4524 6.61431 41.1238 6.81468 41.7524C7.02937 41.481 7.50169 41.4238 8.18869 41.5381C8.47495 41.9667 8.57513 42.4095 8.47495 42.8524C7.45875 43.1952 7.287 43.9667 7.20112 44.7095Z",
                        fill: "#00A651",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M8.83277 42.6951C9.11902 42.4808 9.51977 42.4808 9.82034 42.5523C9.80603 42.1094 9.59134 41.5237 9.0904 40.9951C8.36045 41.3523 8.86139 42.138 8.83277 42.6951Z",
                        fill: "#00A651",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M10.8365 42.2237C10.6648 42.2809 10.4787 42.338 10.2927 42.3951C10.1638 42.0666 10.0493 41.7237 9.93484 41.3809C10.4215 41.4666 10.722 41.7523 10.8365 42.2237Z",
                        fill: "#00A651",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M4.83955 39.538C4.46742 39.5523 4.28136 39.6523 4.29567 39.8666C3.88061 39.5523 3.46554 39.2523 3.05048 38.9523C2.8501 38.5666 2.80716 38.1952 2.89304 37.8237C3.43692 38.1809 3.69454 38.5523 4.38155 38.7666C4.49605 38.9809 4.73936 39.3237 4.83955 39.538Z",
                        fill: "#00A651",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M8.40338 41.2095C7.88813 41.0523 7.48737 41.0809 7.15818 41.3095C6.8433 40.6095 6.31374 39.9666 5.31185 39.4523C5.15442 39.238 4.99698 39.0237 4.83954 38.7952C6.25649 39.0952 7.54462 39.3666 8.77551 39.8666C10.2497 40.4523 11.638 41.2666 13.0264 41.738C12.4395 41.838 11.8384 41.938 11.2516 42.0238C11.0655 41.6237 10.5932 41.2952 9.82033 41.0809C9.60564 40.9095 9.3337 40.7666 9.01882 40.6809C8.66101 40.8237 8.46063 40.9809 8.40338 41.2095Z",
                        fill: "#00A651",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M16.9337 62.1238C16.7906 62.6952 16.3898 63.1238 15.7171 63.381C15.5454 62.881 15.5883 62.3238 15.8316 61.7238C15.159 61.4524 14.6008 61.0238 14.1428 60.4238C14.5721 60.1952 15.159 60.0667 16.1036 60.1524C15.8746 59.6667 15.846 59.1238 16.0177 58.5381C16.5187 58.5667 16.9623 58.9095 17.3631 59.5667C17.3917 59.7809 17.4203 59.9952 17.449 60.2095C17.0482 60.2095 16.6618 60.2381 16.261 60.5667C16.2324 61.0667 16.4471 61.6095 16.9337 62.1238Z",
                        fill: "#F58220",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M16.2324 63.6239C15.7744 63.7096 15.3736 64.0239 14.887 63.8667C14.4004 63.7096 13.9424 63.2096 13.5845 62.7667C13.1695 62.6667 12.6399 62.5239 12.4395 62.2239C12.2392 61.9239 12.597 61.6524 12.6828 61.3524C11.9672 61.1667 11.5808 60.4381 11.6094 59.8667C11.638 59.2953 12.3107 58.8524 13.1552 58.7953C13.2697 58.0667 13.7706 57.481 14.8154 57.381C15.6312 57.2953 16.5472 57.4096 17.1913 57.9667C17.4633 58.1953 17.3631 58.6667 17.3488 59.0239C16.9051 58.681 16.4327 58.381 15.7744 58.3524C15.574 58.8953 15.6599 59.3381 15.7744 59.781C14.9299 59.8381 14.1427 59.9381 13.7277 60.4096C14.157 60.9524 14.7295 61.4667 15.4738 61.8953C15.2591 62.481 15.2591 62.9953 15.4738 63.481C15.7028 63.5239 15.9604 63.5667 16.2324 63.6239Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M20.0968 65.0808C19.0663 64.8523 18.1217 64.4951 17.3058 63.938C17.5062 63.738 17.907 63.538 18.5224 63.3523C17.635 62.638 16.8478 61.8665 16.7906 60.838C17.0053 60.5665 17.4203 60.4951 18.0501 60.638C17.8354 59.9951 17.7352 59.2951 17.7352 58.538C18.6942 58.3951 19.5529 58.6665 20.2972 59.3665C20.426 59.0808 20.5548 58.7951 20.9269 58.4951C21.2991 58.7094 21.6283 58.9237 21.8 59.2523C22.1864 59.038 22.5586 58.8665 22.945 58.738C23.4889 59.1951 23.403 59.8808 22.6731 60.5523C21.9718 60.5094 21.0414 60.4665 20.5834 61.138C20.1254 61.8094 20.1541 63.0237 20.426 63.8523C20.2972 64.2665 20.197 64.6665 20.0968 65.0808Z",
                        fill: "#00A651",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M14.5292 64.2096C13.47 63.981 12.4825 63.6667 11.8527 62.9096C11.9386 62.7238 12.0102 62.5524 12.096 62.3667C12.1819 62.6381 12.7115 62.9096 13.4271 63.1953C13.5273 63.5953 14.0139 63.9096 14.5292 64.2096Z",
                        fill: "#00A651",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M11.9243 61.5379C11.1514 61.5094 10.4071 61.4522 9.94915 61.1094C10.1925 60.9522 10.4215 60.7951 10.6505 60.6379C10.0207 60.1808 9.41958 59.7236 8.9902 59.2665C9.27645 59.0951 9.5627 58.9236 9.86327 58.7522C9.01882 58.0522 8.54651 57.3522 8.44632 56.6665C9.73446 56.9522 11.5951 57.1236 13.7277 57.2094C13.2267 57.5951 13.0407 58.0522 12.8546 58.4665C12.2821 58.7379 11.4377 58.8808 11.2373 59.5236C11.0655 60.1665 11.7096 60.8665 11.9243 61.5379Z",
                        fill: "#00A651",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M27.3962 60.7523C27.2817 60.4809 27.1529 60.238 27.0384 59.9666C25.8075 59.4666 24.6196 58.8952 23.4889 58.1952C21.4279 57.6666 19.3096 57.3952 17.1341 57.2952C17.3774 57.538 17.6064 57.7666 17.8354 57.9952C18.1217 57.9095 18.4795 57.938 18.9804 58.0809C19.4957 58.2095 19.8678 58.438 20.197 58.6666C20.2972 58.3666 20.5548 58.2095 20.9842 58.238C21.5281 58.3523 21.7141 58.5666 21.8573 58.7809C22.0576 58.4523 22.6158 58.4952 23.2313 58.5809C23.6177 59.0523 23.7179 59.5237 23.7751 59.9952C24.1187 60.0237 24.5051 60.0523 24.8057 60.4237C25.6358 60.0237 26.4802 60.2094 27.3962 60.7523Z",
                        fill: "#00A651",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M27.1959 71.2237C26.9955 69.8952 26.7951 68.5666 26.609 67.238C25.5642 67.638 24.3333 68.4094 23.4889 68.4237C22.6445 68.4523 22.6874 67.7523 22.2294 67.3952C21.1416 67.0094 20.4976 66.2952 20.0682 65.4237C18.9232 65.2094 17.7782 64.7237 16.6332 63.9809C16.948 63.6666 17.3202 63.4523 17.7352 63.338C17.5921 63.1523 17.449 62.9809 17.3058 62.7952C16.762 63.4666 15.9318 63.9523 15.0588 64.4094C14.7439 64.6809 14.429 64.9523 14.1141 65.238C15.2162 66.1523 16.4757 66.4237 17.7925 66.4952C17.5349 66.638 17.2915 66.7809 17.0339 66.9237C16.6475 66.8952 16.3326 66.9809 16.0463 67.1523C17.5492 67.8666 19.2524 68.4809 21.1846 68.7666C20.9413 69.1666 20.5119 69.5523 20.197 69.9809C21.2275 70.4523 22.5443 70.5523 23.7895 70.4952C24.3333 70.1952 24.8915 69.8952 25.4497 69.5952C24.9631 69.9809 24.4765 70.3523 23.9898 70.738C23.7752 71.1094 23.5891 71.4666 23.675 71.838C24.4622 71.7523 25.2494 71.5237 26.0365 71.3237C26.1224 71.5237 26.194 71.7094 26.2799 71.9094C26.5661 71.7952 26.881 71.5523 27.1959 71.2237Z",
                        fill: "#00A651",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M26.4373 66.581C25.8218 67.0952 25.049 67.2667 24.1043 67.0524C24.0041 66.481 24.4765 65.9238 25.0203 65.3524C24.3763 65.0238 23.9612 64.481 23.7608 63.7381C24.2761 63.4381 24.9488 63.5667 25.693 63.8952C25.9507 64.7952 26.194 65.681 26.4373 66.581Z",
                        fill: "#F58220",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M27.2817 62.6381C27.1529 61.9095 26.8237 61.1667 26.3371 60.8238C25.8361 60.4952 25.2779 60.9095 24.7484 60.9381C24.4478 60.781 24.3333 60.4238 23.8467 60.4667C23.3601 60.5095 23.1597 60.9667 22.8162 61.0953C22.4727 61.2238 21.3133 60.9095 20.841 61.7667C20.383 62.6238 21.0843 62.8238 21.113 63.5381C21.1416 64.2667 20.6979 65.3953 20.9985 66.0667C21.299 66.7381 22.215 66.6381 22.6587 66.9667C23.0881 67.2952 23.131 67.9095 23.5747 68.0381C24.0041 68.1524 24.3619 67.7238 24.7484 67.5667C24.3906 67.5095 24.0614 67.381 23.8037 67.2095C23.7465 66.5667 23.9612 65.9667 24.4478 65.4381C23.9039 64.9953 23.5318 64.3952 23.3028 63.6238C24.1759 63.1667 25.0489 63.181 25.9077 63.6667C25.922 63.381 25.9363 63.081 25.9363 62.7953C26.38 62.7381 26.8237 62.6953 27.2817 62.6381Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M37.5582 12.6523C46.6753 12.6523 54.1179 20.2666 54.1179 29.6095C54.1179 35.6666 50.9834 41.0095 46.2889 43.9952C47.0332 48.7523 40.7499 48.5952 37.5582 48.5952C34.4094 48.5952 27.8113 48.0809 28.9706 44.0952C24.1759 41.1238 20.9842 35.7381 20.9842 29.5952C20.9842 20.2666 28.4268 12.6523 37.5582 12.6523Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M37.6011 26.0808C42.2098 26.0808 45.974 29.8379 45.974 34.4522C45.974 39.0665 42.6821 38.1379 38.0591 38.1379C33.4361 38.1379 29.2139 39.0522 29.2139 34.4522C29.2139 29.8379 32.9781 26.0808 37.6011 26.0808Z",
                        fill: "#F58220",
                        stroke: "#ED1C24",
                        "stroke-width": "0.1855",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M35.4829 39.1094L23.6034 39.3094L27.2245 43.2665C27.9544 42.9951 29.7578 42.8665 29.9296 42.1379C30.087 41.5094 29.0422 40.9522 29.4 40.4094C30.2444 39.1522 33.1785 39.5094 35.4829 39.1094Z",
                        fill: "#00A651",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M37.7729 39.2095L51.742 39.3095L47.9921 42.9666C47.2335 42.6809 43.8843 42.5666 43.7126 41.8666C43.5552 41.2238 44.6429 40.6809 44.2708 40.1238C43.3977 38.8523 40.206 39.5952 37.7729 39.2095Z",
                        fill: "#00A651",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M28.7416 44.8237C28.8418 46.3808 30.2015 47.7951 31.5755 48.4523L33.7081 44.3951L34.5239 39.438C33.0783 39.5666 31.3322 39.3523 30.5307 40.3094C29.9868 40.9523 31.0746 41.3523 31.7329 42.1951C32.2339 42.838 31.0316 43.8808 28.7416 44.8237Z",
                        fill: "#00A651",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M46.3891 44.5237C46.8185 46.2951 44.4426 48.7237 42.4531 49.1665L39.2471 44.438L38.374 39.4951C39.9198 39.6237 42.4245 39.2094 43.2832 40.1665C43.8558 40.8094 42.768 41.2523 42.3959 42.1951C42.1096 42.9665 43.9703 43.5665 46.3891 44.5237Z",
                        fill: "#00A651",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M24.7341 39.3952L52.6007 39.481L52.9872 37.7381L50.1819 36.5667L48.4072 36.7667L43.2832 35.0381L36.4418 36.6524L31.5755 35.1524L26.3228 36.7667L25.0776 36.6524L22.3152 37.3952L24.0328 39.481L24.7341 39.3952Z",
                        fill: "#00AEEF",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M35.7405 36.0665L31.6328 34.5237L26.7092 36.4094L25.0203 36.1237L23.0881 36.9523L23.3314 37.6665L25.1778 37.0951L34.7243 39.0237L26.9096 36.9808L31.5326 35.538L35.5401 36.6951C35.5401 36.6951 35.7405 35.9808 35.7405 36.0665Z",
                        fill: "#00A651",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M37.229 36.2238L43.3262 34.5381L48.5073 36.4238L50.2821 36.1381L52.3145 36.9666L52.0712 37.6809L50.139 37.1095L37.6727 39.0809L48.3213 37.0095L43.4407 35.5667L37.4437 36.8809C37.4294 36.8381 37.1288 36.2381 37.229 36.2238Z",
                        fill: "#00A651",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M22.8019 24.9094C22.5729 25.7666 22.4154 26.6523 22.3152 27.5666L29.3571 30.9094C29.3714 30.8523 29.3857 30.8094 29.4143 30.7523C29.5861 30.3666 29.8007 29.9809 30.0297 29.6237L29.4143 29.2237L22.8019 24.9094Z",
                        fill: "#D2AB67",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M25.7073 19.0524L25.6358 18.9524C24.7627 20.1381 24.0184 21.4667 23.4602 22.881L30.4162 29.081C30.8885 28.4524 31.4324 27.8952 32.0335 27.4238L25.7073 19.0524Z",
                        fill: "#D2AB67",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M32.3627 13.6809C31.3322 14.0952 30.3303 14.6238 29.4143 15.2666C28.4554 15.9238 27.568 16.6952 26.7808 17.5666L32.4772 27.0952C33.1499 26.6238 33.8942 26.2523 34.6814 25.9666C34.8531 25.9095 35.0392 25.8523 35.2252 25.7952L32.3627 13.6809Z",
                        fill: "#D2AB67",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M22.2007 29.3237C22.2007 29.4094 22.1864 29.4809 22.1864 29.5666C22.1864 31.4094 22.4584 33.1809 22.9593 34.838H28.6271C28.6271 34.7094 28.6128 34.5809 28.6128 34.4523C28.6128 33.4237 28.7845 32.4237 29.1137 31.4952L22.2007 29.3237Z",
                        fill: "#D2AB67",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M52.8727 27.5666C52.7725 26.6523 52.615 25.7666 52.386 24.9094L45.1582 29.638C45.3872 29.9951 45.5875 30.3666 45.7736 30.7666C45.8022 30.8237 45.8166 30.8666 45.8452 30.9237L52.8727 27.5666Z",
                        fill: "#D2AB67",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M52.9872 29.3237L46.0885 31.4952C46.4034 32.4237 46.5894 33.4094 46.5894 34.4523C46.5894 34.5809 46.5894 34.7094 46.5751 34.838H52.2286C52.7296 33.1809 53.0015 31.4094 53.0015 29.5666C52.9872 29.4809 52.9872 29.4094 52.9872 29.3237Z",
                        fill: "#D2AB67",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M51.7277 22.8666C51.1552 21.4523 50.4252 20.1237 49.5522 18.938L49.4806 19.038L43.1544 27.4094C43.7699 27.8808 44.2994 28.438 44.7717 29.0666L51.7277 22.8666Z",
                        fill: "#D2AB67",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M41.0504 13.0952C40.8787 13.0523 40.6926 13.0095 40.5209 12.9666C39.5619 12.7666 38.5887 12.6523 37.6011 12.6523C36.5992 12.6523 35.6117 12.7523 34.667 12.9666C34.4953 13.0095 34.3092 13.0523 34.1375 13.0952L36.0697 25.6095C36.5706 25.5238 37.0715 25.4809 37.6011 25.4809C38.1021 25.4809 38.6173 25.5238 39.1182 25.6095L41.0504 13.0952Z",
                        fill: "#D2AB67",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M48.4215 17.5666C47.6199 16.6952 46.7469 15.9381 45.7879 15.2666C44.8719 14.6238 43.87 14.0952 42.8395 13.6809L39.9913 25.7952C40.1774 25.8523 40.3491 25.8952 40.5352 25.9666C41.3224 26.2381 42.0666 26.6238 42.7393 27.0952L48.4215 17.5666Z",
                        fill: "#D2AB67",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M43.6697 13.3953C53.9318 16.2238 61.5318 25.9953 61.5318 37.5667C61.5318 51.3238 50.7831 62.5524 37.6011 62.5524C24.4049 62.5524 13.6561 51.3095 13.6561 37.5667C13.6561 25.9953 21.2561 16.2238 31.5183 13.3953C25.3638 15.9238 20.9985 22.1667 20.9985 29.4238C20.9985 35.5667 24.133 40.981 28.8275 44.0381C28.7989 44.2381 28.7702 44.4381 28.7702 44.6524C28.7702 46.0953 29.5002 47.4238 30.7311 48.4667C30.9315 48.181 31.1318 47.9238 31.3036 47.6953C31.7902 47.0381 31.919 47.4524 32.4057 46.5381C33.0497 45.2953 33.2358 44.3238 33.3073 42.9381C33.4648 39.981 33.8512 36.9524 34.7386 34.081C33.8655 33.7953 33.293 33.481 32.6347 32.7524C31.8618 31.8953 31.6471 30.6953 32.2768 29.7095C32.9352 30.4667 33.0497 30.7095 33.7797 30.9381C34.9962 31.2953 36.3416 30.781 37.6011 30.9381C38.145 30.9953 39.0753 31.3381 39.2614 31.7524L39.4045 31.1238L40.5925 31.5667L40.5352 32.3953C41.3224 32.7381 42.1525 33.281 42.1812 34.1381C41.3797 34.0238 40.8072 33.7953 40.0772 33.8953C39.3186 33.9953 37.8301 34.5381 37.7872 35.3095C37.6154 38.0095 38.7748 40.2238 39.5047 42.8381C39.9484 44.3953 40.4207 45.7667 41.3654 47.081C41.9235 47.8524 42.3959 47.8667 42.8682 48.2667C43.1401 48.481 43.3548 48.8381 43.4836 49.181C45.287 48.0667 46.4177 46.4381 46.4177 44.6524C46.4177 44.4381 46.4034 44.2381 46.3605 44.0381C51.055 40.9953 54.1895 35.581 54.1895 29.4238C54.1895 22.1667 49.8241 15.9238 43.6697 13.3953Z",
                        fill: "black",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M53.9604 35.7952L53.6455 35.6667C56.1932 27.8952 54.0463 21.4952 48.7077 16.0095C53.6742 17.9524 57.281 27.1524 53.9604 35.7952Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M54.4471 37.1381C54.4185 36.6809 54.6045 36.0524 54.3183 35.9381C54.9766 34.0809 55.3917 32.4952 55.6207 30.6095C55.8211 28.9524 55.5635 27.3095 55.7782 25.6524C56.0644 23.3667 57.0233 23.2095 57.4098 25.5952C57.6817 27.2809 57.3525 29.3524 56.8802 31.1952C56.3507 33.2809 55.3058 35.1809 54.4471 37.1381Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M55.3345 37.8667C54.8192 38.2952 54.8478 37.8095 54.948 37.481C55.3631 36.2381 56.0644 35.1238 56.5224 33.9238C57.052 32.5381 57.3525 31.0667 57.7533 29.6381C57.9251 29.0238 58.1541 28.481 58.7409 28.0095C59.1273 28.581 59.2418 29.1524 59.1416 29.7381C58.8697 31.281 58.2113 32.681 57.5959 34.1095C57.052 35.3952 56.3936 36.9524 55.3345 37.8667Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M55.5348 39.4237C55.0196 39.7237 55.1198 39.2952 55.2629 39.0237C55.8354 37.9952 56.6226 37.1237 57.2237 36.1523C57.9107 35.0237 58.4117 33.7809 58.9985 32.5809C59.2418 32.0666 59.5424 31.6237 60.1292 31.2952C60.3725 31.8666 60.4011 32.3809 60.2151 32.8809C59.7284 34.1952 58.9269 35.3237 58.154 36.4809C57.4384 37.538 56.6083 38.7809 55.5348 39.4237Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M55.864 40.3523C55.406 40.538 55.5205 40.1809 55.6923 39.9952C56.3507 39.2952 57.052 38.6237 57.6674 37.8952C58.3687 37.0523 58.9556 36.1095 59.5853 35.2095C59.8572 34.8237 60.1435 34.5095 60.6588 34.2952C60.7876 34.7952 60.7446 35.2237 60.5156 35.6095C59.9574 36.6095 59.1559 37.438 58.3687 38.2809C57.6817 39.0523 56.7085 40.0095 55.864 40.3523Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M55.864 41.5239C55.4203 41.6239 55.5778 41.3239 55.7495 41.1668C56.4365 40.6239 57.1522 40.0953 57.8106 39.5096C58.5691 38.8382 59.1989 38.0382 59.8859 37.2953C60.1721 36.9811 60.487 36.7239 60.988 36.6096C61.0452 37.081 60.945 37.4525 60.7017 37.7811C60.0576 38.6239 59.2275 39.2668 58.4117 39.9382C57.6674 40.5668 56.6799 41.3096 55.864 41.5239Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M55.8354 42.6237C55.4347 42.6809 55.6064 42.4094 55.7782 42.3094C56.4366 41.8809 57.1092 41.4951 57.739 41.0523C58.4689 40.538 59.0987 39.9094 59.7714 39.3237C60.0576 39.0809 60.3582 38.8809 60.8019 38.8237C60.8019 39.2523 60.6731 39.5666 60.4298 39.8237C59.7857 40.4952 58.9842 40.9809 58.2113 41.4951C57.51 41.9666 56.5654 42.5237 55.8354 42.6237Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M55.6064 43.4525C55.2486 43.4382 55.4347 43.2382 55.5921 43.1668C56.2505 42.9239 56.9232 42.6953 57.5672 42.4096C58.2972 42.0811 58.9699 41.6239 59.6712 41.2239C59.9574 41.0525 60.258 40.9382 60.6731 40.9668C60.6015 41.3382 60.4298 41.6096 60.1721 41.7954C59.4851 42.2954 58.6979 42.5811 57.9107 42.8953C57.2094 43.1525 56.2648 43.4811 55.6064 43.4525Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M55.5492 44.2952C55.1914 44.2809 55.3774 44.1238 55.5349 44.0809C56.1932 43.8809 56.8659 43.7095 57.4957 43.4952C58.2256 43.2524 58.9126 42.9095 59.5996 42.6095C59.9002 42.4809 60.2008 42.3952 60.6015 42.4095C60.53 42.6809 60.3582 42.8809 60.1006 43.0238C59.4136 43.3952 58.6264 43.6095 57.8392 43.8524C57.1379 44.0809 56.2076 44.3238 55.5492 44.2952Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M55.4776 45.2667C55.1484 45.2381 55.3345 45.1096 55.4919 45.0667C56.1074 44.9381 56.7228 44.8524 57.3096 44.6953C57.9966 44.5381 58.6264 44.281 59.2704 44.0524C59.5424 43.9667 59.8143 43.8953 60.1865 43.9524C60.1006 44.1953 59.9288 44.3667 59.6855 44.4667C59.0271 44.7381 58.3115 44.881 57.5816 45.0381C56.9232 45.1953 56.0644 45.3382 55.4776 45.2667Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M55.22 45.9095C54.9051 45.8524 55.0912 45.7524 55.2486 45.7381C55.864 45.6524 56.4938 45.6095 57.0806 45.5095C57.7676 45.4095 58.4117 45.2238 59.0844 45.0524C59.3706 44.9809 59.6426 44.9524 60.0004 45.0238C59.9002 45.2381 59.7141 45.3809 59.4708 45.4524C58.8124 45.6666 58.0682 45.7381 57.3382 45.8381C56.6799 45.9381 55.8211 46.0238 55.22 45.9095Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M54.9767 46.7094C54.6618 46.6523 54.8478 46.5523 55.0053 46.538C55.6207 46.4809 56.2505 46.438 56.8373 46.3666C57.5243 46.2809 58.1827 46.1094 58.8554 45.9666C59.1416 45.9094 59.4136 45.8809 59.7714 45.9523C59.6712 46.1666 59.4851 46.2951 59.2275 46.3666C58.5548 46.5666 57.8249 46.6237 57.0806 46.6951C56.4365 46.7666 55.5635 46.8237 54.9767 46.7094Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M54.5473 47.5097C54.2324 47.4383 54.4471 47.3811 54.6045 47.3668C55.22 47.3525 55.8354 47.2382 56.4365 47.2097C57.1378 47.1668 57.7104 47.0382 58.4689 46.9668C58.7552 46.9382 59.1559 46.8668 59.3849 46.9954C59.2561 47.1668 59.0701 47.2668 58.8124 47.3097C58.1254 47.4383 57.2953 47.4811 56.5653 47.5097C55.8927 47.5525 55.1198 47.624 54.5473 47.5097Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M54.4042 48.2238C54.1179 48.1381 54.304 48.081 54.4614 48.081C55.0339 48.1095 55.6207 48.0524 56.1789 48.0667C56.8373 48.0667 57.3668 47.981 58.0968 47.9667C58.383 47.9667 58.7409 47.9095 58.9555 48.0667C58.8267 48.2238 58.6407 48.3095 58.3974 48.3381C57.7533 48.4238 56.9804 48.4095 56.2934 48.381C55.6637 48.3524 54.9194 48.381 54.4042 48.2238Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M53.846 48.8382C53.574 48.7096 53.7601 48.681 53.9175 48.7096C54.49 48.7953 55.0625 48.7953 55.635 48.8667C56.2791 48.9524 56.823 48.9096 57.5386 48.981C57.8249 48.9953 58.1827 48.9953 58.383 49.1524C58.2399 49.3096 58.0539 49.3667 57.7962 49.3667C57.1522 49.381 56.3793 49.281 55.6923 49.1953C55.0911 49.1096 54.3612 49.0524 53.846 48.8382Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M53.6026 49.4954C53.3307 49.3668 53.5311 49.3382 53.6885 49.3668C54.2467 49.4668 54.8335 49.524 55.3917 49.6097C56.0358 49.7097 56.5796 49.7097 57.2953 49.824C57.5672 49.8525 57.9393 49.8668 58.1254 50.0525C57.968 50.1811 57.7676 50.2382 57.5386 50.224C56.8802 50.2097 56.1216 50.0668 55.449 49.9382C54.8192 49.8382 54.1036 49.7382 53.6026 49.4954Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M53.1589 50.1095C52.9156 49.9809 53.1017 49.9667 53.2305 50.0095C53.7458 50.1381 54.2753 50.2095 54.7763 50.3095C55.3631 50.4381 55.864 50.4667 56.5081 50.5952C56.7514 50.6524 57.0949 50.6667 57.2524 50.8381C57.1092 50.9524 56.9375 50.9952 56.7085 50.9809C56.1217 50.9238 55.4203 50.7667 54.8192 50.6238C54.261 50.4809 53.6026 50.3524 53.1589 50.1095Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M52.8727 50.7666C52.6437 50.6237 52.8155 50.6237 52.9443 50.6666C53.4309 50.8237 53.9462 50.9094 54.4328 51.038C54.9767 51.1951 55.4633 51.238 56.093 51.3951C56.3364 51.4523 56.6512 51.4951 56.7944 51.6666C56.6369 51.7666 56.4652 51.8094 56.2505 51.7666C55.678 51.6808 55.0196 51.4951 54.4328 51.3237C53.9175 51.1666 53.2878 51.0237 52.8727 50.7666Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M52.6151 51.4096C52.4147 51.2668 52.5864 51.2811 52.7009 51.3239C53.1446 51.4811 53.6169 51.5954 54.0606 51.7382C54.5759 51.9096 55.0196 51.9811 55.5921 52.1525C55.8068 52.2239 56.1073 52.2811 56.2362 52.4382C56.093 52.5382 55.9213 52.5525 55.7352 52.5239C55.2056 52.4239 54.5902 52.2096 54.0606 52.0239C53.574 51.8382 52.9872 51.6811 52.6151 51.4096Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M52.2573 51.9666C52.0569 51.8095 52.2287 51.8381 52.3432 51.8809C52.7725 52.0666 53.2162 52.1952 53.6456 52.3523C54.1322 52.5523 54.5616 52.6381 55.1055 52.8238C55.3202 52.9095 55.6064 52.9809 55.7209 53.1523C55.5778 53.2381 55.406 53.2381 55.22 53.1952C54.719 53.0666 54.1465 52.8381 53.6313 52.6238C53.159 52.4381 52.6151 52.2381 52.2573 51.9666Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M51.8708 52.4666C51.6991 52.3095 51.8422 52.3381 51.9567 52.3809C52.3718 52.5809 52.8155 52.7381 53.2162 52.9238C53.6885 53.1381 54.1036 53.2523 54.6475 53.4666C54.8479 53.5523 55.1341 53.6381 55.2343 53.8238C55.0912 53.8952 54.9337 53.8952 54.7477 53.8381C54.2467 53.6809 53.6885 53.4238 53.2019 53.1809C52.7439 52.9666 52.2 52.7523 51.8708 52.4666Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M51.4558 52.9666C51.284 52.7951 51.4414 52.838 51.5416 52.8809C51.9424 53.0951 52.3718 53.2666 52.7582 53.4666C53.2162 53.7094 53.6313 53.838 54.1322 54.0809C54.3326 54.1809 54.5902 54.2666 54.6904 54.4523C54.5473 54.5094 54.3898 54.5094 54.2038 54.438C53.7314 54.2666 53.2019 53.9809 52.7153 53.7237C52.2716 53.5094 51.7563 53.2666 51.4558 52.9666Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M51.0693 53.3666C50.8975 53.1952 51.055 53.2381 51.1552 53.2952C51.5416 53.5381 51.9567 53.7238 52.3288 53.9524C52.7582 54.2095 53.1732 54.3666 53.6599 54.6381C53.8602 54.7381 54.1179 54.8524 54.2038 55.0381C54.0606 55.0952 53.9032 55.0809 53.7314 55.0095C53.2591 54.8095 52.7439 54.4952 52.2859 54.2095C51.8708 53.9524 51.3698 53.6809 51.0693 53.3666Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M50.6972 53.7096C50.5398 53.5381 50.6972 53.581 50.7831 53.6524C51.1409 53.8953 51.5273 54.1096 51.8851 54.3381C52.3002 54.6096 52.6866 54.781 53.1446 55.0667C53.3164 55.1667 53.574 55.2953 53.6456 55.4667C53.5025 55.5239 53.3593 55.4953 53.1876 55.4096C52.7439 55.1953 52.2573 54.8667 51.8279 54.5667C51.4271 54.3096 50.9548 54.0239 50.6972 53.7096Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M50.3823 54.1523C50.2392 53.9666 50.3823 54.0238 50.4682 54.0952C50.8117 54.3666 51.1981 54.5952 51.5416 54.8523C51.9281 55.1381 52.3002 55.3238 52.7439 55.6381C52.9156 55.7666 53.1589 55.8952 53.2162 56.0809C53.0731 56.1238 52.9299 56.0952 52.7582 55.9952C52.3288 55.7523 51.8708 55.4095 51.4414 55.0809C51.0979 54.7952 50.6256 54.4952 50.3823 54.1523Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M50.0531 54.481C49.9386 54.2952 50.0674 54.3524 50.1533 54.4238C50.4539 54.6952 50.7974 54.9381 51.1122 55.1952C51.4701 55.4952 51.7992 55.6952 52.2 56.0238C52.3574 56.1524 52.5864 56.2952 52.6294 56.4667C52.4862 56.4952 52.3431 56.4524 52.2 56.3667C51.8136 56.1238 51.3985 55.7524 51.0264 55.4238C50.6829 55.1381 50.2821 54.8095 50.0531 54.481Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M49.6381 54.7239C49.5379 54.5382 49.6667 54.5953 49.7382 54.681C50.0245 54.981 50.3537 55.2382 50.6399 55.5239C50.9834 55.8524 51.2983 56.081 51.6704 56.4382C51.8136 56.5667 52.0283 56.7239 52.0569 56.9096C51.9138 56.9239 51.7706 56.881 51.6275 56.781C51.2554 56.4953 50.8689 56.1096 50.5254 55.7524C50.2249 55.4239 49.8384 55.0667 49.6381 54.7239Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M49.2087 55.1238C49.1085 54.9238 49.223 55.0095 49.2945 55.081C49.5808 55.3953 49.8957 55.6524 50.1819 55.9524C50.5111 56.281 50.826 56.5238 51.1981 56.881C51.3412 57.0095 51.5416 57.1667 51.5845 57.3524C51.4271 57.3667 51.2983 57.3238 51.1552 57.2095C50.7974 56.9238 50.3966 56.5238 50.0674 56.1524C49.7669 55.8238 49.3947 55.4667 49.2087 55.1238Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M48.7077 55.4953C48.6219 55.2953 48.7364 55.3667 48.8079 55.4667C49.0799 55.781 49.3804 56.0667 49.6524 56.3667C49.9672 56.7096 50.2678 56.9524 50.6113 57.3381C50.7544 57.481 50.9548 57.6524 50.9691 57.8381C50.826 57.8524 50.6829 57.781 50.5541 57.6667C50.1963 57.3524 49.8384 56.9381 49.5236 56.5667C49.2373 56.2238 48.8795 55.8381 48.7077 55.4953Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M48.2211 55.8666C48.1352 55.6666 48.2497 55.7523 48.3213 55.838C48.5503 56.1523 48.8365 56.438 49.0799 56.7523C49.3661 57.0952 49.6381 57.338 49.9529 57.7238C50.0674 57.8666 50.2535 58.038 50.2678 58.2238C50.139 58.2238 50.0102 58.1666 49.8814 58.0523C49.5665 57.738 49.2373 57.3238 48.951 56.9523C48.6934 56.5952 48.3642 56.2095 48.2211 55.8666Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M47.8203 56.2525C47.7631 56.0668 47.849 56.1525 47.9205 56.2239C48.1209 56.5382 48.3785 56.8239 48.5932 57.1239C48.8365 57.4668 49.0942 57.7096 49.3661 58.0953C49.4663 58.2382 49.638 58.4096 49.638 58.5668C49.5092 58.5668 49.3947 58.4953 49.2802 58.3811C48.994 58.0668 48.6934 57.6668 48.4501 57.2953C48.2354 56.9811 47.9348 56.5953 47.8203 56.2525Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M47.4053 56.4381C47.348 56.2381 47.4482 56.3381 47.4912 56.4238C47.6915 56.7381 47.9205 57.0381 48.1209 57.3524C48.3499 57.7095 48.5932 57.9667 48.8509 58.3524C48.951 58.5095 49.1085 58.681 49.0942 58.8524C48.9654 58.8381 48.8509 58.7667 48.7507 58.6381C48.4787 58.3238 48.2068 57.881 47.9778 57.5095C47.7774 57.181 47.4912 56.7953 47.4053 56.4381Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M46.9759 56.6953C46.933 56.5096 47.0188 56.5953 47.0761 56.6811C47.2478 57.0096 47.4625 57.3239 47.6486 57.6382C47.849 58.0096 48.078 58.2953 48.3213 58.6953C48.4072 58.8525 48.5646 59.0382 48.536 59.2096C48.4072 59.1953 48.2927 59.1096 48.1925 58.9953C47.9348 58.6525 47.6915 58.2239 47.4911 57.8239C47.3051 57.4525 47.0618 57.0525 46.9759 56.6953Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M46.6753 57.0525C46.6467 56.8811 46.7326 56.9668 46.7612 57.0382C46.9186 57.3525 47.0904 57.6668 47.2621 57.9668C47.4339 58.3239 47.6343 58.5953 47.8346 58.981C47.9205 59.1382 48.0493 59.3096 48.0207 59.4668C47.8919 59.4525 47.806 59.3668 47.7201 59.2525C47.5055 58.9239 47.2908 58.4953 47.1047 58.1239C46.9473 57.7668 46.7326 57.381 46.6753 57.0525Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M46.246 57.2096C46.2316 57.0239 46.3032 57.1239 46.3318 57.1953C46.4606 57.5239 46.6467 57.8382 46.7755 58.1525C46.933 58.5096 47.119 58.7953 47.3051 59.1953C47.3766 59.3525 47.4911 59.5382 47.4625 59.6953C47.348 59.6668 47.2478 59.5811 47.1763 59.4525C46.9759 59.1096 46.7898 58.6811 46.6324 58.2953C46.4893 57.9525 46.2889 57.5525 46.246 57.2096Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M45.8309 57.5096C45.8166 57.3382 45.8882 57.4239 45.9168 57.5096C46.0313 57.8382 46.1887 58.1668 46.3175 58.4953C46.4463 58.8668 46.6181 59.1525 46.7898 59.5668C46.8471 59.7239 46.9616 59.9239 46.9187 60.0668C46.7898 60.0382 46.704 59.9382 46.6324 59.8096C46.4463 59.4525 46.2889 59.0096 46.1458 58.6239C46.017 58.2525 45.8452 57.8382 45.8309 57.5096Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M45.3729 57.7381C45.3729 57.5524 45.4301 57.6524 45.4588 57.7524C45.559 58.0952 45.7021 58.4095 45.788 58.7381C45.9168 59.1238 46.0599 59.4238 46.203 59.8381C46.2603 59.9952 46.3605 60.1952 46.3032 60.3523C46.1887 60.3095 46.1028 60.2095 46.0313 60.0809C45.8595 59.7238 45.7307 59.2666 45.6019 58.8666C45.5303 58.5095 45.3872 58.0809 45.3729 57.7381Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M44.9292 58.0237C44.9292 57.838 44.9864 57.938 45.015 58.038C45.0866 58.3809 45.2154 58.7237 45.3013 59.038C45.4015 59.4237 45.5446 59.7237 45.6591 60.1523C45.702 60.3094 45.7879 60.5237 45.7307 60.6666C45.6305 60.6094 45.5303 60.5094 45.4874 60.3809C45.3299 60.0237 45.2154 59.5523 45.1295 59.1523C45.0437 58.7809 44.9005 58.3523 44.9292 58.0237Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M44.371 58.3238C44.3853 58.138 44.4425 58.238 44.4569 58.338C44.5141 58.6809 44.6286 59.0238 44.7002 59.3666C44.786 59.7523 44.9005 60.0666 45.0007 60.4952C45.0294 60.6523 45.1152 60.8666 45.0437 61.0095C44.9435 60.9523 44.8576 60.8523 44.8147 60.7095C44.6859 60.338 44.6 59.8666 44.5284 59.4666C44.4425 59.0952 44.3424 58.6523 44.371 58.3238Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M43.8557 58.5667C43.8844 58.3953 43.9416 58.4953 43.9416 58.5953C43.9846 58.9381 44.0704 59.281 44.1134 59.6238C44.1706 60.0096 44.2851 60.3238 44.3567 60.7667C44.3853 60.9381 44.4569 61.1524 44.3853 61.281C44.2851 61.2238 44.2136 61.1238 44.1706 60.9667C44.0704 60.581 43.9989 60.1238 43.9559 59.7096C43.8844 59.3381 43.8128 58.8953 43.8557 58.5667Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M43.2976 59.0238C43.3262 58.8667 43.3691 58.9667 43.3691 59.0524C43.3978 59.3524 43.455 59.6667 43.4836 59.9667C43.5123 60.3095 43.5838 60.5952 43.6411 60.981C43.6554 61.1238 43.7126 61.3095 43.6411 61.4381C43.5552 61.381 43.4836 61.281 43.4693 61.1667C43.3834 60.8238 43.3548 60.4095 43.3262 60.0381C43.2976 59.7095 43.2403 59.3095 43.2976 59.0238Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M42.8395 59.0381C42.8968 58.9524 42.9397 59.0095 42.9397 59.0667C42.9541 59.2381 42.997 59.4381 43.0256 59.6095C43.0542 59.8238 43.1258 59.9952 43.1687 60.2238C43.1831 60.3095 43.226 60.4381 43.1258 60.4952C43.0256 60.4381 42.9541 60.381 42.9254 60.2952C42.8395 60.081 42.8252 59.8381 42.8252 59.6095C42.7966 59.4381 42.7394 59.1952 42.8395 59.0381Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M42.2384 59.0811C42.2957 58.9954 42.3386 59.0525 42.3386 59.0954C42.3529 59.2811 42.4102 59.4811 42.4245 59.6525C42.4388 59.8668 42.5247 60.0382 42.5533 60.2668C42.5676 60.3525 42.6105 60.4811 42.5247 60.5382C42.4102 60.4954 42.3386 60.4382 42.31 60.3525C42.2241 60.1382 42.2098 59.8954 42.2098 59.6668C42.1812 59.4811 42.1382 59.2382 42.2384 59.0811Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M53.1303 38.7668C53.6599 38.0954 54.1322 37.5954 54.5902 37.9382C55.0339 38.2811 54.6475 38.8811 54.1322 39.5525C53.6027 40.2239 52.9586 40.5954 52.6723 40.3811C52.3861 40.1525 52.6008 39.4382 53.1303 38.7668Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M53.7601 40.4668C54.1895 39.9953 54.5616 39.6525 54.8622 40.1096C55.1627 40.5668 54.9623 41.1096 54.49 41.5096C54.0177 41.8953 53.2448 42.1668 53.0588 41.9953C52.8584 41.8239 53.3307 40.9382 53.7601 40.4668Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M53.7601 42.4524C54.075 42.1096 54.6618 41.881 54.9051 42.3667C55.1484 42.8667 54.8192 43.1238 54.3612 43.4096C53.9032 43.6953 53.159 44.0096 52.9872 43.8096C52.8011 43.6381 53.4452 42.8096 53.7601 42.4524Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M50.2964 44.4811C50.6113 44.3525 51.0693 44.4382 51.0264 44.9382C50.9977 45.4382 50.6972 45.4954 50.3251 45.5097C49.9386 45.5239 49.3661 45.4382 49.3232 45.2097C49.2802 44.9811 49.9816 44.6239 50.2964 44.4811Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M53.7028 44.1524C54.0177 43.8952 54.5473 43.7809 54.6761 44.2381C54.8192 44.6952 54.49 44.8809 54.075 45.0524C53.6456 45.2238 52.9729 45.3952 52.8584 45.2095C52.7439 45.0238 53.388 44.4095 53.7028 44.1524Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M53.159 45.6238C53.4881 45.5381 53.9175 45.6524 53.8603 46.0381C53.803 46.4238 53.4881 46.4524 53.1017 46.4238C52.7296 46.4095 52.1571 46.2952 52.1428 46.1095C52.1284 45.9381 52.8441 45.7095 53.159 45.6238Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M52.8441 46.7953C53.159 46.7667 53.5454 46.9239 53.4452 47.281C53.3307 47.6381 53.0445 47.6096 52.6866 47.5524C52.3431 47.481 51.8136 47.281 51.8136 47.1239C51.8279 46.9381 52.5292 46.8239 52.8441 46.7953Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M52.3431 48.181C52.658 48.1525 53.0588 48.3096 52.9443 48.6667C52.8441 49.0239 52.5435 48.9953 52.1857 48.9382C51.8279 48.8667 51.3126 48.681 51.3126 48.5096C51.3269 48.3239 52.0283 48.2096 52.3431 48.181Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M51.3985 49.2524C51.742 49.2238 52.1714 49.4095 52.0569 49.7952C51.9424 50.1809 51.6275 50.1524 51.2267 50.0809C50.8403 50.0095 50.2821 49.7952 50.2821 49.6095C50.2964 49.4095 51.055 49.2809 51.3985 49.2524Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M51.055 50.4667C51.3842 50.4381 51.785 50.6095 51.6705 50.9667C51.556 51.3381 51.2554 51.3096 50.8976 51.2381C50.5398 51.1667 49.9959 50.9667 49.9959 50.781C49.9959 50.6095 50.7258 50.4953 51.055 50.4667Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M50.5397 51.4667C50.826 51.5238 51.1552 51.781 50.9405 52.081C50.7401 52.3667 50.4825 52.2667 50.1819 52.1095C49.8813 51.9524 49.4663 51.6381 49.5235 51.481C49.5808 51.3238 50.2392 51.4095 50.5397 51.4667Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M49.8527 52.281C50.1247 52.4095 50.3537 52.7381 50.096 52.9667C49.8241 53.2095 49.5951 53.0524 49.3518 52.8095C49.1085 52.581 48.9797 52.2952 49.0655 52.1524C49.1657 52.0238 49.5808 52.1381 49.8527 52.281Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M49.1085 53.0667C49.3518 53.2381 49.5522 53.581 49.2659 53.781C48.9797 53.981 48.765 53.781 48.5503 53.5238C48.3356 53.2524 48.264 52.9667 48.3642 52.8381C48.4644 52.7238 48.8508 52.9095 49.1085 53.0667Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M48.2497 53.8666C48.4644 54.0666 48.6218 54.438 48.307 54.5952C47.9921 54.7523 47.8203 54.538 47.6343 54.2523C47.4625 53.9666 47.4196 53.6666 47.5341 53.5523C47.6629 53.438 48.0207 53.6666 48.2497 53.8666Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M47.4482 54.4382C47.6486 54.6524 47.7345 55.0524 47.4196 55.1667C47.0904 55.2667 46.9473 55.0382 46.8041 54.7382C46.661 54.4239 46.661 54.1239 46.7898 54.0382C46.9186 53.9382 47.2478 54.2239 47.4482 54.4382Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M46.6324 54.9952C46.8328 55.2095 46.9187 55.6095 46.6038 55.7237C46.2746 55.8237 46.1315 55.5952 45.9883 55.2952C45.8452 54.9809 45.9025 54.8237 46.0456 54.7237C46.1744 54.638 46.4463 54.7809 46.6324 54.9952Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M45.9454 55.5953C46.0885 55.8239 46.1171 56.181 45.8166 56.2381C45.5017 56.2953 45.4158 56.0667 45.3299 55.781C45.2441 55.4953 45.3299 55.3524 45.4588 55.2953C45.5876 55.2239 45.8023 55.381 45.9454 55.5953Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M45.2298 55.9952C45.33 56.238 45.3156 56.5952 45.0008 56.5952C44.6859 56.6094 44.6286 56.3666 44.6 56.0666C44.5571 55.7809 44.6572 55.6523 44.8004 55.6094C44.9292 55.5666 45.1153 55.7523 45.2298 55.9952Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M44.4569 56.4096C44.5714 56.6667 44.5428 57.0524 44.2136 57.0524C43.8844 57.0667 43.8128 56.8096 43.7842 56.4953C43.7413 56.181 43.8414 56.0524 43.9846 56.0096C44.1277 55.9524 44.3424 56.1524 44.4569 56.4096Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M43.6983 56.7666C43.8128 57.0238 43.7842 57.4095 43.455 57.4095C43.1258 57.4238 43.0686 57.1667 43.0256 56.8667C42.9827 56.5524 43.0829 56.4238 43.226 56.3809C43.3978 56.3238 43.5981 56.5238 43.6983 56.7666Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M42.8968 57.0237C42.9827 57.338 42.9111 57.7666 42.6105 57.738C42.2957 57.7095 42.267 57.4094 42.2527 57.038C42.2384 56.6666 42.3529 56.538 42.496 56.4952C42.6392 56.4523 42.8109 56.7095 42.8968 57.0237Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M42.081 57.5525C42.1096 57.8097 42.0094 58.1525 41.7661 58.0954C41.5228 58.0383 41.5228 57.7954 41.5657 57.4954C41.5944 57.1954 41.7089 57.0954 41.8234 57.0954C41.9379 57.0811 42.0524 57.2954 42.081 57.5525Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M51.8279 44.4525C52.0998 44.1668 52.6008 43.9811 52.8011 44.3953C53.0015 44.8239 52.7153 45.0525 52.3288 45.281C51.9281 45.5096 51.284 45.781 51.1409 45.6096C50.9978 45.4525 51.556 44.7525 51.8279 44.4525Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M51.1838 46.3524C51.4414 46.1524 51.8708 46.081 51.9567 46.4524C52.0426 46.8096 51.7849 46.9524 51.4558 47.0667C51.1123 47.1953 50.5684 47.3096 50.4825 47.1524C50.3823 47.0096 50.9262 46.5381 51.1838 46.3524Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M51.2697 47.3381C51.5846 47.2667 51.9996 47.3667 51.9281 47.7381C51.8708 48.1096 51.5703 48.1239 51.2268 48.1096C50.8689 48.0953 50.3251 47.981 50.2964 47.7953C50.2821 47.6239 50.9548 47.4239 51.2697 47.3381Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M50.7258 48.381C50.9691 48.4095 51.241 48.6238 51.0693 48.9524C50.8832 49.2667 50.6685 49.1953 50.4109 49.081C50.1533 48.9524 49.8098 48.681 49.8527 48.5238C49.8813 48.3524 50.4682 48.3667 50.7258 48.381Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M50.0674 49.7096C50.3107 49.7953 50.5254 50.0525 50.2821 50.3382C50.0388 50.6239 49.8241 50.5096 49.6094 50.3239C49.3804 50.1525 49.0942 49.8239 49.1801 49.6668C49.2659 49.5239 49.8241 49.6382 50.0674 49.7096Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M49.4377 50.5952C49.6524 50.6809 49.8241 50.9523 49.5665 51.1809C49.3089 51.4095 49.1371 51.2809 48.9511 51.0952C48.765 50.9237 48.536 50.5809 48.6219 50.4523C48.7221 50.338 49.2373 50.4952 49.4377 50.5952Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M48.8651 51.4952C49.0512 51.6238 49.1514 51.8952 48.8795 52.0667C48.6075 52.2381 48.4644 52.0809 48.3356 51.8809C48.1925 51.6809 48.0493 51.3238 48.1638 51.2238C48.2497 51.1238 48.6791 51.3809 48.8651 51.4952Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M48.1066 52.2238C48.2783 52.3524 48.3928 52.6238 48.1209 52.7952C47.849 52.9667 47.7058 52.8095 47.5627 52.6095C47.4339 52.4095 47.2765 52.0524 47.391 51.9524C47.4768 51.8381 47.9205 52.0952 48.1066 52.2238Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M47.3337 52.7811C47.5198 52.9096 47.62 53.1811 47.348 53.3525C47.0618 53.5239 46.933 53.3668 46.7898 53.1668C46.6467 52.9668 46.5036 52.6096 46.6181 52.5096C46.7183 52.4096 47.1477 52.6525 47.3337 52.7811Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M46.7612 53.4809C46.9043 53.6095 46.9616 53.8666 46.7039 53.9666C46.4463 54.0809 46.3461 53.938 46.2459 53.7523C46.1458 53.5523 46.0742 53.238 46.1744 53.1666C46.2746 53.0952 46.6181 53.3523 46.7612 53.4809Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M46.1601 54.0666C46.2889 54.2238 46.3032 54.4666 46.0313 54.5381C45.7593 54.6095 45.6734 54.4524 45.6162 54.2524C45.5446 54.0524 45.516 53.7238 45.6305 53.6667C45.745 53.5952 46.0456 53.9095 46.1601 54.0666Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M45.5017 54.5097C45.6162 54.6668 45.6305 54.9097 45.3729 54.9811C45.101 55.0525 45.0294 54.8954 44.9578 54.6954C44.9006 54.4954 44.8576 54.1525 44.9721 54.1096C45.0866 54.0525 45.3872 54.3668 45.5017 54.5097Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M44.8433 55.0381C44.9435 55.2095 44.9149 55.4666 44.6286 55.4952C44.3567 55.5095 44.2994 55.3381 44.2708 55.1381C44.2422 54.9238 44.2565 54.5952 44.3853 54.5666C44.5141 54.4952 44.7574 54.8666 44.8433 55.0381Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M44.1134 55.4523C44.1706 55.6237 44.0847 55.8809 43.7985 55.838C43.5265 55.8094 43.5122 55.6237 43.5265 55.4094C43.5552 55.1951 43.641 54.8809 43.7698 54.8666C43.913 54.8523 44.0704 55.2666 44.1134 55.4523Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M43.3978 55.7239C43.4407 55.9096 43.3691 56.1525 43.0829 56.1096C42.8109 56.0668 42.7966 55.8953 42.8109 55.681C42.8252 55.4668 42.9254 55.1525 43.0542 55.1382C43.1831 55.1525 43.3405 55.5382 43.3978 55.7239Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M42.6535 55.9094C42.6964 56.0952 42.6249 56.338 42.3386 56.2952C42.0667 56.2523 42.0524 56.0809 42.0667 55.8666C42.0953 55.6523 42.1812 55.338 42.31 55.3237C42.4388 55.338 42.5962 55.7237 42.6535 55.9094Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M49.91 46.0096C50.2392 45.8811 50.7115 45.9096 50.7115 46.3239C50.7258 46.7382 50.3966 46.8096 50.0102 46.8525C49.6094 46.8953 49.0083 46.8668 48.951 46.6811C48.8938 46.5096 49.5808 46.1525 49.91 46.0096Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M49.5808 47.2382C49.8527 47.1953 50.1963 47.3239 50.1247 47.681C50.0674 48.0381 49.8098 48.0239 49.5092 47.9667C49.2087 47.9096 48.7507 47.7524 48.7364 47.581C48.7364 47.4239 49.3232 47.281 49.5808 47.2382Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M52.8584 37.0809C53.3164 36.4666 53.7028 36.0095 53.9462 36.3952C54.2038 36.7809 53.8603 37.3381 53.4309 37.9381C52.9872 38.5523 52.5006 38.8666 52.3432 38.6238C52.1857 38.3809 52.4147 37.6809 52.8584 37.0809Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M51.4558 40.1668C51.8851 39.7668 52.2429 39.4668 52.3861 39.8096C52.5149 40.1382 52.1857 40.5096 51.7563 40.9096C51.3269 41.3096 50.9119 41.4811 50.826 41.2668C50.7401 41.0668 51.0264 40.5668 51.4558 40.1668Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M50.096 41.9523C50.4825 41.5952 50.7974 41.338 50.9119 41.6237C51.0264 41.9095 50.7401 42.238 50.368 42.5952C49.9959 42.9523 49.638 43.0809 49.5522 42.9095C49.4663 42.738 49.7239 42.3095 50.096 41.9523Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M50.096 43.381C50.5683 43.0381 50.9834 42.7952 51.0693 43.1381C51.1552 43.4952 50.783 43.8095 50.2964 44.1524C49.8098 44.4952 49.3804 44.6095 49.3232 44.3952C49.2516 44.1809 49.6094 43.7238 50.096 43.381Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M48.4644 43.5524C48.8795 43.2524 49.223 43.0381 49.3088 43.3381C49.3947 43.6524 49.0655 43.9238 48.6505 44.2238C48.2211 44.5238 47.8489 44.6238 47.806 44.4381C47.7488 44.2524 48.0493 43.8524 48.4644 43.5524Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M48.3785 44.6668C48.8222 44.6096 49.18 44.5811 49.1085 44.8811C49.0369 45.1953 48.6648 45.2811 48.2211 45.3382C47.7774 45.3953 47.4482 45.3096 47.4912 45.1239C47.5484 44.9382 47.9349 44.7382 48.3785 44.6668Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M48.4215 45.5666C48.8795 45.5523 49.223 45.5809 49.1228 45.8809C49.0226 46.1809 48.6505 46.2095 48.1925 46.2238C47.7345 46.238 47.4339 46.0952 47.4912 45.9095C47.5484 45.738 47.9635 45.5809 48.4215 45.5666Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M48.078 46.5809C48.4787 46.6237 48.7793 46.6951 48.6505 46.9666C48.5217 47.2523 48.1782 47.238 47.7917 47.1951C47.391 47.1523 47.1333 46.9809 47.2192 46.8094C47.3051 46.6523 47.6915 46.538 48.078 46.5809Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M47.9635 47.5525C48.2927 47.5811 48.5503 47.6525 48.4501 47.8811C48.3356 48.1239 48.0493 48.1239 47.7202 48.0811C47.391 48.0525 47.162 47.8953 47.2335 47.7525C47.2908 47.6096 47.62 47.5096 47.9635 47.5525Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M47.7058 48.4095C48.0207 48.5381 48.264 48.6667 48.0923 48.8809C47.9205 49.0952 47.6343 49.0381 47.3194 48.9095C47.0045 48.7809 46.8327 48.5809 46.9329 48.4381C47.0331 48.3095 47.3766 48.2952 47.7058 48.4095Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M47.3337 49.3239C47.6057 49.4954 47.806 49.6382 47.6056 49.8239C47.4053 49.9954 47.1763 49.8811 46.9043 49.7239C46.6324 49.5525 46.5179 49.3382 46.6324 49.2239C46.7469 49.1096 47.0618 49.1668 47.3337 49.3239Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M46.8328 50.0525C47.0332 50.2239 47.162 50.381 46.9759 50.4953C46.7898 50.5953 46.6181 50.4668 46.432 50.2953C46.2316 50.1239 46.1744 49.9096 46.2889 49.8525C46.3891 49.781 46.6324 49.8667 46.8328 50.0525Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M46.4463 50.724C46.6467 50.8954 46.7755 51.0525 46.5894 51.1668C46.4034 51.2811 46.2316 51.1525 46.0312 50.9668C45.8452 50.7954 45.7879 50.5954 45.9024 50.524C46.0026 50.4668 46.2459 50.5525 46.4463 50.724Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M46.0169 51.2096C46.2173 51.381 46.3461 51.5381 46.1601 51.6524C45.974 51.7667 45.8023 51.6381 45.6162 51.4524C45.4158 51.281 45.3586 51.081 45.4731 51.0096C45.5876 50.9524 45.8309 51.0381 46.0169 51.2096Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M45.6305 51.7382C45.8309 51.9096 45.9597 52.0668 45.7737 52.1811C45.5876 52.2954 45.4158 52.1668 45.2155 51.9811C45.0294 51.8096 44.9722 51.6096 45.0867 51.5382C45.1868 51.4668 45.4302 51.5668 45.6305 51.7382Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M45.1296 52.2239C45.287 52.4382 45.4015 52.6096 45.2011 52.681C45.0007 52.7667 44.8433 52.5953 44.6859 52.3953C44.5284 52.1953 44.4998 51.981 44.6286 51.9382C44.7431 51.8953 44.9721 52.0239 45.1296 52.2239Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M44.6286 52.7382C44.7574 52.9667 44.829 53.1667 44.6143 53.2096C44.4139 53.2524 44.2851 53.0667 44.1563 52.8382C44.0275 52.6239 44.0275 52.4096 44.1706 52.381C44.2994 52.3525 44.4998 52.5096 44.6286 52.7382Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M44.0704 53.281C44.1563 53.4953 44.2136 53.6667 43.9989 53.6667C43.7985 53.681 43.6983 53.4953 43.6124 53.281C43.5266 53.0667 43.5552 52.8953 43.684 52.8953C43.8128 52.9095 43.9846 53.0667 44.0704 53.281Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M43.5122 53.5952C43.5695 53.8095 43.5981 53.9809 43.412 53.9809C43.2403 53.9666 43.1687 53.8095 43.1115 53.5952C43.0542 53.3809 43.0972 53.2095 43.2117 53.2095C43.3119 53.2238 43.455 53.3952 43.5122 53.5952Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M49.1943 48.3524C49.4949 48.4667 49.7096 48.581 49.5522 48.7952C49.3947 48.9952 49.1228 48.9238 48.8365 48.8095C48.5503 48.6952 48.3785 48.4952 48.4787 48.381C48.5932 48.2524 48.9081 48.2381 49.1943 48.3524Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M48.722 49.3954C48.9653 49.6096 49.1228 49.7954 48.8938 49.9382C48.6648 50.0811 48.4501 49.9239 48.2068 49.6954C47.9778 49.4811 47.8919 49.2382 48.035 49.1525C48.1925 49.0811 48.493 49.1811 48.722 49.3954Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M48.1638 50.3523C48.4071 50.5666 48.5646 50.7523 48.3356 50.8951C48.1066 51.0237 47.8919 50.8666 47.6486 50.6523C47.4196 50.438 47.3337 50.1951 47.4768 50.1094C47.6343 50.0237 47.9348 50.138 48.1638 50.3523Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M47.5198 51.081C47.7345 51.281 47.8776 51.4525 47.6772 51.581C47.4625 51.7096 47.2765 51.5667 47.0618 51.3667C46.8471 51.1667 46.7755 50.9525 46.9043 50.8668C47.0331 50.781 47.3051 50.881 47.5198 51.081Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M46.9616 51.7523C47.1476 51.9523 47.2764 52.1094 47.0761 52.2094C46.8757 52.3094 46.7039 52.1666 46.5179 51.9809C46.3461 51.7808 46.2889 51.5808 46.4034 51.5094C46.5179 51.4523 46.7755 51.5666 46.9616 51.7523Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M46.3175 52.438C46.4607 52.5952 46.5609 52.7237 46.4034 52.7952C46.246 52.8809 46.1172 52.7666 45.974 52.6094C45.8166 52.4523 45.7737 52.2951 45.8738 52.2523C45.974 52.2094 46.1744 52.2951 46.3175 52.438Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M45.8595 52.881C46.0169 53.0381 46.1171 53.1667 45.9597 53.2381C45.8023 53.3238 45.6734 53.2095 45.516 53.0524C45.3729 52.8953 45.3299 52.7381 45.4301 52.6953C45.5303 52.6381 45.7164 52.7238 45.8595 52.881Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M45.4588 53.3238C45.559 53.5238 45.6162 53.6667 45.4445 53.7095C45.2727 53.7381 45.1725 53.581 45.0723 53.3952C44.9864 53.2095 44.9864 53.0381 45.1009 53.0095C45.2011 52.9952 45.3586 53.1381 45.4588 53.3238Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M44.8576 53.6953C44.9435 53.8953 44.9864 54.0524 44.829 54.081C44.6572 54.0953 44.5571 53.9524 44.4855 53.7524C44.3996 53.5524 44.4139 53.3953 44.5141 53.3667C44.6286 53.3667 44.7717 53.5096 44.8576 53.6953Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M44.4139 54.1095C44.4569 54.2952 44.4712 54.438 44.3137 54.4238C44.1563 54.4095 44.099 54.2666 44.0704 54.0809C44.0418 53.8952 44.0847 53.7523 44.1706 53.7666C44.2708 53.7666 44.3853 53.9238 44.4139 54.1095Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M43.9702 54.3668C44.0132 54.5668 44.0275 54.7382 43.8557 54.7239C43.684 54.7097 43.6267 54.5382 43.5838 54.3382C43.5409 54.1382 43.5981 53.9668 43.6983 53.9811C43.8128 53.9668 43.9273 54.1525 43.9702 54.3668Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M43.4121 54.5668C43.3978 54.7811 43.3548 54.9525 43.1974 54.8811C43.0256 54.8239 43.0256 54.6382 43.0399 54.4239C43.0542 54.2097 43.1544 54.0811 43.2546 54.1097C43.3691 54.1668 43.4407 54.3668 43.4121 54.5668Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M42.8825 54.7525C42.8539 54.9667 42.8109 55.1239 42.6535 55.0524C42.496 54.981 42.496 54.7953 42.5247 54.5953C42.5533 54.381 42.6535 54.2525 42.7537 54.2953C42.8539 54.3382 42.9111 54.5382 42.8825 54.7525Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M51.8851 41.4951C52.3145 41.0951 52.6723 40.7951 52.8155 41.138C52.9443 41.4666 52.6151 41.838 52.1857 42.238C51.7563 42.638 51.3413 42.8094 51.2554 42.5951C51.1838 42.3951 51.4558 41.8951 51.8851 41.4951Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M52.0712 42.9096C52.5292 42.5382 52.9586 42.3239 53.0731 42.6668C53.1733 42.9954 52.8155 43.3382 52.3575 43.7096C51.8994 44.0811 51.5989 44.0096 51.3985 43.9811C51.1981 43.9382 51.5989 43.2668 52.0712 42.9096Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M43.0542 52.1667L42.954 52.9524C45.5446 51.3238 47.0904 48.5952 47.4196 44.5381C47.2192 44.6952 47.0618 45.2381 47.0331 45.4809C46.4749 48.8095 45.6019 50.4238 43.0542 52.1667Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M43.4407 49.5382L43.412 50.8668C44.9149 50.3668 46.2603 49.0097 46.9902 44.6097C49.0942 42.7668 50.6256 40.8382 52.0282 38.9097C50.4825 40.7668 48.8365 42.5811 46.6896 44.1525C46.4034 46.6525 45.5733 48.6668 43.4407 49.5382Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M21.4565 35.7952L21.7714 35.6667C19.2094 27.8952 21.3563 21.4952 26.6949 16.0095C21.7427 17.9524 18.136 27.1524 21.4565 35.7952Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M20.9699 37.1381C20.9985 36.6809 20.7981 36.0524 21.0844 35.9381C20.426 34.0809 20.0252 32.4952 19.7819 30.6095C19.5816 28.9524 19.8392 27.3095 19.6245 25.6524C19.3382 23.3667 18.3793 23.2095 17.9929 25.5952C17.7209 27.2809 18.0501 29.3524 18.5081 31.1952C19.0663 33.2809 20.0968 35.1809 20.9699 37.1381Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M20.0825 37.8667C20.5834 38.2952 20.5548 37.8095 20.4546 37.481C20.0395 36.2381 19.3382 35.1238 18.8802 33.9238C18.3507 32.5381 18.0501 31.0667 17.6493 29.6381C17.4776 29.0238 17.2486 28.481 16.6761 28.0095C16.2896 28.581 16.1608 29.1524 16.261 29.7381C16.5329 31.281 17.1913 32.681 17.8068 34.1095C18.365 35.3952 19.009 36.9524 20.0825 37.8667Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M19.8821 39.4237C20.3974 39.7237 20.2972 39.2952 20.1541 39.0237C19.5816 37.9952 18.7944 37.1237 18.1932 36.1523C17.4919 35.0237 17.0053 33.7809 16.4185 32.5809C16.1752 32.0666 15.8746 31.6237 15.2878 31.2952C15.0301 31.8666 15.0158 32.3809 15.2019 32.8809C15.6885 34.1952 16.49 35.3237 17.2772 36.4809C17.9785 37.538 18.7944 38.7809 19.8821 39.4237Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M19.5386 40.3523C19.9966 40.538 19.8821 40.1809 19.7104 39.9952C19.052 39.2952 18.3507 38.6237 17.7352 37.8952C17.0339 37.0523 16.4614 36.1095 15.8317 35.2095C15.5597 34.8237 15.2592 34.5095 14.7439 34.2952C14.6151 34.7952 14.6723 35.2237 14.887 35.6095C15.4452 36.6095 16.261 37.438 17.0339 38.2809C17.7352 39.0523 18.6942 40.0095 19.5386 40.3523Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M19.5529 41.5239C19.9966 41.6239 19.8392 41.3239 19.6531 41.1668C18.9661 40.6239 18.2505 40.0953 17.6064 39.5096C16.8478 38.8382 16.2181 38.0382 15.5311 37.2953C15.2448 36.9811 14.9442 36.7239 14.429 36.6096C14.3717 37.081 14.4862 37.4525 14.7152 37.7811C15.3593 38.6239 16.1894 39.2668 17.0053 39.9382C17.7495 40.5668 18.7514 41.3096 19.5529 41.5239Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M19.5815 42.6237C19.9823 42.6809 19.8248 42.4094 19.6531 42.3094C18.9947 41.8809 18.3077 41.4951 17.678 41.0523C16.948 40.538 16.3183 39.9094 15.6456 39.3237C15.3593 39.0809 15.0587 38.8809 14.6151 38.8237C14.6151 39.2523 14.7439 39.5666 14.9872 39.8237C15.6312 40.4952 16.4328 40.9809 17.22 41.4951C17.907 41.9666 18.8516 42.5237 19.5815 42.6237Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M19.8106 43.4525C20.1684 43.4382 19.9823 43.2382 19.8106 43.1668C19.1522 42.9239 18.4795 42.6953 17.8497 42.4096C17.1198 42.0811 16.4471 41.6239 15.7458 41.2239C15.4452 41.0525 15.159 40.9382 14.7439 40.9668C14.8011 41.3382 14.9872 41.6096 15.2448 41.7954C15.9318 42.2954 16.7333 42.5811 17.5062 42.8953C18.2075 43.1525 19.1522 43.4811 19.8106 43.4525Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M19.8821 44.2952C20.2399 44.2809 20.0539 44.1238 19.8821 44.0809C19.2238 43.8809 18.5511 43.7095 17.9213 43.4952C17.1914 43.2524 16.5187 42.9095 15.8173 42.6095C15.5168 42.4809 15.2305 42.3952 14.8155 42.4095C14.887 42.6809 15.0588 42.8809 15.3164 43.0238C16.0034 43.3952 16.8049 43.6095 17.5778 43.8524C18.2791 44.0809 19.2094 44.3238 19.8821 44.2952Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M19.9537 45.2667C20.2686 45.2381 20.0968 45.1096 19.9394 45.0667C19.3383 44.9381 18.7228 44.8524 18.1217 44.6953C17.449 44.5381 16.8049 44.281 16.1608 44.0524C15.8746 43.9667 15.6027 43.8953 15.2448 43.9524C15.3307 44.1953 15.5025 44.3667 15.7458 44.4667C16.3899 44.7381 17.1198 44.881 17.8497 45.0381C18.4938 45.1953 19.3526 45.3382 19.9537 45.2667Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M20.1827 45.9095C20.5119 45.8524 20.3115 45.7524 20.154 45.7381C19.5386 45.6524 18.9088 45.6095 18.322 45.5095C17.635 45.4095 16.991 45.2238 16.3183 45.0524C16.032 44.9809 15.7601 44.9524 15.4023 45.0238C15.5024 45.2381 15.6885 45.3809 15.9318 45.4524C16.6045 45.6666 17.3345 45.7381 18.0644 45.8381C18.7228 45.9381 19.6102 46.0238 20.1827 45.9095Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M20.4403 46.7094C20.7552 46.6523 20.5691 46.5523 20.4117 46.538C19.7962 46.4809 19.1665 46.438 18.5797 46.3666C17.8927 46.2809 17.2343 46.1094 16.5759 45.9666C16.2896 45.9094 16.0034 45.8809 15.6599 45.9523C15.7601 46.1666 15.9461 46.2951 16.2038 46.3666C16.8765 46.5666 17.6064 46.6237 18.3507 46.6951C18.9804 46.7666 19.8535 46.8237 20.4403 46.7094Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M20.8697 47.5097C21.1846 47.4383 20.9842 47.3811 20.8267 47.3668C20.2113 47.3525 19.5815 47.2382 18.9804 47.2097C18.2934 47.1668 17.7209 47.0382 16.948 46.9668C16.6618 46.9382 16.261 46.8668 16.032 46.9954C16.1608 47.1668 16.3469 47.2668 16.6045 47.3097C17.2915 47.4383 18.1073 47.4811 18.8373 47.5097C19.51 47.5525 20.2972 47.624 20.8697 47.5097Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M21.0128 48.2238C21.2991 48.1381 21.113 48.081 20.9556 48.081C20.383 48.1095 19.8105 48.0524 19.238 48.0667C18.5797 48.0667 18.0501 47.981 17.3202 47.9667C17.0482 47.9667 16.6761 47.9095 16.4757 48.0667C16.6045 48.2238 16.7906 48.3095 17.0339 48.3381C17.678 48.4238 18.4508 48.4095 19.1379 48.381C19.7533 48.3524 20.4832 48.381 21.0128 48.2238Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M21.5567 48.8382C21.8286 48.7096 21.6426 48.681 21.4994 48.7096C20.9269 48.7953 20.3401 48.7953 19.7819 48.8667C19.1379 48.9524 18.594 48.9096 17.864 48.981C17.5921 48.9953 17.22 48.9953 17.0196 49.1524C17.1627 49.3096 17.3488 49.3667 17.6064 49.3667C18.2505 49.381 19.0234 49.281 19.7104 49.1953C20.3258 49.1096 21.0558 49.0524 21.5567 48.8382Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M21.8 49.4954C22.0719 49.3668 21.8715 49.3382 21.7284 49.3668C21.1559 49.4668 20.5834 49.524 20.0252 49.6097C19.3811 49.7097 18.8373 49.7097 18.1216 49.824C17.8497 49.8525 17.4776 49.8668 17.2915 50.0525C17.4489 50.1811 17.635 50.2382 17.8783 50.224C18.5224 50.2097 19.281 50.0668 19.9537 49.9382C20.5834 49.8382 21.3134 49.7382 21.8 49.4954Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M22.2437 50.1095C22.487 49.9809 22.3009 49.9667 22.1721 50.0095C21.6569 50.1381 21.1273 50.2095 20.6264 50.3095C20.0395 50.4381 19.5386 50.4667 18.8945 50.5952C18.6512 50.6524 18.3077 50.6667 18.1503 50.8381C18.2934 50.9524 18.4795 50.9952 18.6941 50.9809C19.281 50.9238 19.9823 50.7667 20.5977 50.6238C21.1559 50.4809 21.8 50.3524 22.2437 50.1095Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M22.5442 50.7666C22.7733 50.6237 22.6015 50.6237 22.4727 50.6666C21.9861 50.8237 21.4708 50.9094 20.9985 51.038C20.4403 51.1951 19.9537 51.238 19.3382 51.3951C19.0949 51.4523 18.7657 51.4951 18.6369 51.6666C18.78 51.7666 18.9518 51.8094 19.1808 51.7666C19.7533 51.6808 20.3974 51.4951 20.9842 51.3237C21.4994 51.1666 22.1292 51.0237 22.5442 50.7666Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M22.7876 51.4096C23.0022 51.2668 22.8305 51.2811 22.716 51.3239C22.258 51.4811 21.8 51.5954 21.3563 51.7382C20.841 51.9096 20.3974 51.9811 19.8105 52.1525C19.5959 52.2239 19.2953 52.2811 19.1665 52.4382C19.3096 52.5382 19.4814 52.5525 19.6817 52.5239C20.2113 52.4239 20.8124 52.2096 21.3563 52.0239C21.8286 51.8382 22.4154 51.6811 22.7876 51.4096Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M23.1454 51.9666C23.3458 51.8095 23.174 51.8381 23.0595 51.8809C22.6301 52.0666 22.1864 52.1952 21.7571 52.3523C21.2704 52.5523 20.8411 52.6381 20.2972 52.8238C20.0825 52.9095 19.7962 52.9809 19.6817 53.1523C19.8249 53.2381 19.9823 53.2381 20.1827 53.1952C20.6836 53.0666 21.2561 52.8381 21.7714 52.6238C22.2437 52.4381 22.8019 52.2381 23.1454 51.9666Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M23.5461 52.4666C23.7322 52.3095 23.5748 52.3381 23.4603 52.3809C23.0595 52.5809 22.6015 52.7381 22.2008 52.9238C21.7284 53.1381 21.3134 53.2523 20.7695 53.4666C20.5691 53.5523 20.2972 53.6381 20.1827 53.8238C20.3258 53.8952 20.4976 53.8952 20.6836 53.8381C21.1846 53.6809 21.7428 53.4238 22.2294 53.1809C22.6731 52.9666 23.2169 52.7523 23.5461 52.4666Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M23.9612 52.9666C24.1329 52.7951 23.9755 52.838 23.8753 52.8809C23.4889 53.0951 23.0452 53.2666 22.6587 53.4666C22.2007 53.7094 21.8 53.838 21.299 54.0809C21.0987 54.1809 20.8267 54.2666 20.7265 54.4523C20.884 54.5094 21.0414 54.5094 21.2132 54.438C21.6855 54.2666 22.2294 53.9809 22.7017 53.7237C23.1311 53.5094 23.6606 53.2666 23.9612 52.9666Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M24.3477 53.3666C24.5051 53.1952 24.362 53.2381 24.2618 53.2952C23.8753 53.5381 23.4603 53.7238 23.0881 53.9524C22.6445 54.2095 22.2437 54.3666 21.7571 54.6381C21.571 54.7381 21.2991 54.8524 21.2132 55.0381C21.3563 55.0952 21.5281 55.0809 21.6998 55.0095C22.1721 54.8095 22.6874 54.4952 23.1454 54.2095C23.5462 53.9524 24.0471 53.6809 24.3477 53.3666Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M24.7341 53.7096C24.8772 53.5381 24.7341 53.581 24.6339 53.6524C24.2761 53.8953 23.8897 54.1096 23.5318 54.3381C23.1311 54.6096 22.7447 54.781 22.2866 55.0667C22.1149 55.1667 21.8573 55.2953 21.7857 55.4667C21.9288 55.5239 22.0863 55.4953 22.258 55.4096C22.7017 55.1953 23.174 54.8667 23.6177 54.5667C23.9899 54.3096 24.4479 54.0239 24.7341 53.7096Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M25.0347 54.1523C25.1635 53.9666 25.0204 54.0238 24.9345 54.0952C24.591 54.3666 24.2045 54.5952 23.8754 54.8523C23.4746 55.1381 23.1025 55.3238 22.6588 55.6381C22.487 55.7666 22.2437 55.8952 22.1865 56.0809C22.3439 56.1238 22.487 56.0952 22.6445 55.9952C23.0738 55.7523 23.5318 55.4095 23.9612 55.0809C24.3334 54.7952 24.777 54.4952 25.0347 54.1523Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M25.3495 54.481C25.464 54.2952 25.3352 54.3524 25.2636 54.4238C24.9488 54.6952 24.6053 54.9381 24.3047 55.1952C23.9469 55.4952 23.6177 55.6952 23.2169 56.0238C23.0595 56.1524 22.8305 56.2952 22.7876 56.4667C22.9307 56.4952 23.0738 56.4524 23.2169 56.3667C23.6034 56.1238 24.0185 55.7524 24.3906 55.4238C24.7341 55.1381 25.1491 54.8095 25.3495 54.481Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M25.7646 54.7239C25.8648 54.5382 25.7503 54.5953 25.6644 54.681C25.3782 54.981 25.049 55.2382 24.7627 55.5239C24.4335 55.8524 24.1043 56.081 23.7322 56.4382C23.5748 56.5667 23.3744 56.7239 23.3458 56.9096C23.4889 56.9239 23.6177 56.881 23.7608 56.781C24.133 56.4953 24.5337 56.1096 24.8772 55.7524C25.1921 55.4239 25.5785 55.0667 25.7646 54.7239Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M26.2083 55.1238C26.3085 54.9238 26.1797 55.0095 26.1081 55.081C25.8218 55.3953 25.507 55.6524 25.2207 55.9524C24.8915 56.281 24.5767 56.5238 24.2188 56.881C24.0757 57.0095 23.861 57.1667 23.8324 57.3524C23.9755 57.3667 24.1186 57.3238 24.2475 57.2095C24.6196 56.9238 25.006 56.5238 25.3352 56.1524C25.6358 55.8238 26.0222 55.4667 26.2083 55.1238Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M26.6949 55.4953C26.7808 55.2953 26.6663 55.3667 26.5947 55.4667C26.3228 55.781 26.0222 56.0667 25.7503 56.3667C25.4354 56.7096 25.1349 56.9524 24.7913 57.3381C24.6625 57.481 24.4622 57.6524 24.4335 57.8381C24.5767 57.8524 24.7055 57.781 24.8343 57.6667C25.1921 57.3524 25.5499 56.9381 25.8648 56.5667C26.1654 56.2238 26.5375 55.8381 26.6949 55.4953Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M27.1816 55.8666C27.2674 55.6666 27.1529 55.7523 27.0957 55.838C26.8524 56.1523 26.5804 56.438 26.3371 56.7523C26.0652 57.0952 25.7789 57.338 25.464 57.7238C25.3352 57.8666 25.1492 58.038 25.1492 58.2238C25.278 58.2238 25.4211 58.1666 25.5356 58.0523C25.8648 57.738 26.1797 57.3238 26.4802 56.9523C26.7236 56.5952 27.0528 56.2095 27.1816 55.8666Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M27.5823 56.2525C27.6395 56.0668 27.5537 56.1525 27.4964 56.2239C27.2817 56.5382 27.0384 56.8239 26.8237 57.1239C26.5804 57.4668 26.3228 57.7096 26.0365 58.0953C25.9363 58.2382 25.7646 58.4096 25.7646 58.5668C25.8934 58.5668 26.0079 58.4953 26.1224 58.3811C26.4087 58.0668 26.6949 57.6668 26.9525 57.2953C27.1815 56.9811 27.4678 56.5953 27.5823 56.2525Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M28.0117 56.4381C28.0689 56.2381 27.9687 56.3381 27.9258 56.4238C27.7254 56.7381 27.4964 57.0381 27.296 57.3524C27.067 57.7095 26.8237 57.9667 26.5661 58.3524C26.4659 58.5095 26.3085 58.681 26.3228 58.8524C26.4516 58.8381 26.5661 58.7667 26.6663 58.6381C26.9382 58.3238 27.2102 57.881 27.4392 57.5095C27.6395 57.181 27.9115 56.7953 28.0117 56.4381Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M28.4411 56.6953C28.484 56.5096 28.3981 56.5953 28.3552 56.6811C28.1834 57.0096 27.9544 57.3239 27.7827 57.6382C27.568 58.0096 27.339 58.2953 27.0957 58.6953C27.0098 58.8525 26.8524 59.0382 26.881 59.2096C27.0098 59.1953 27.1243 59.1096 27.2102 58.9953C27.4678 58.6525 27.7111 58.2239 27.9115 57.8239C28.1119 57.4525 28.3552 57.0525 28.4411 56.6953Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M28.7416 57.0525C28.7703 56.8811 28.6987 56.9668 28.6558 57.0382C28.5126 57.3525 28.3266 57.6668 28.1691 57.9668C27.9974 58.3239 27.7827 58.5953 27.5823 58.981C27.4964 59.1382 27.3819 59.3096 27.3962 59.4668C27.5251 59.4525 27.6109 59.3668 27.7111 59.2525C27.9258 58.9239 28.1405 58.4953 28.3123 58.1239C28.4554 57.7668 28.6844 57.381 28.7416 57.0525Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M29.1567 57.2096C29.1853 57.0239 29.0994 57.1239 29.0708 57.1953C28.942 57.5239 28.7702 57.8382 28.6271 58.1525C28.4697 58.5096 28.2836 58.7953 28.1119 59.1953C28.0403 59.3525 27.9115 59.5382 27.9544 59.6953C28.0689 59.6668 28.1691 59.5811 28.2407 59.4525C28.4411 59.1096 28.6271 58.6811 28.7846 58.2953C28.9277 57.9525 29.128 57.5525 29.1567 57.2096Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M29.5861 57.5096C29.6004 57.3382 29.5288 57.4239 29.5002 57.5096C29.3857 57.8382 29.2283 58.1668 29.1138 58.4953C28.9706 58.8668 28.7989 59.1525 28.6414 59.5668C28.5842 59.7239 28.4697 59.9239 28.5126 60.0668C28.6271 60.0382 28.713 59.9382 28.7846 59.8096C28.9706 59.4525 29.1281 59.0096 29.2712 58.6239C29.3857 58.2525 29.5574 57.8382 29.5861 57.5096Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M30.0441 57.7381C30.0584 57.5524 29.9868 57.6524 29.9582 57.7524C29.8723 58.0952 29.7292 58.4095 29.629 58.7381C29.5002 59.1238 29.3571 59.4238 29.2139 59.8381C29.1567 59.9952 29.0565 60.1952 29.1137 60.3523C29.2282 60.3095 29.3141 60.2095 29.3857 60.0809C29.5574 59.7238 29.7006 59.2666 29.8151 58.8666C29.8866 58.5095 30.0441 58.0809 30.0441 57.7381Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M30.6166 58.0667C30.6309 57.881 30.5593 57.981 30.5307 58.0667C30.4305 58.3953 30.2587 58.7238 30.1442 59.0381C30.0154 59.4096 29.8437 59.6953 29.6719 60.1096C29.6147 60.2667 29.5002 60.4667 29.5431 60.6239C29.6576 60.581 29.7435 60.4953 29.8151 60.3524C30.0011 60.0096 30.1586 59.5667 30.3017 59.1667C30.4305 58.8096 30.6022 58.3953 30.6166 58.0667Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M31.2463 58.3953C31.2606 58.2096 31.1891 58.3096 31.1604 58.3953C31.0459 58.7239 30.8885 59.0525 30.7597 59.3667C30.6166 59.7382 30.4448 60.0239 30.2874 60.4382C30.2301 60.5953 30.1156 60.7953 30.1586 60.9382C30.2731 60.9096 30.3589 60.8096 30.4305 60.681C30.6166 60.3239 30.7883 59.881 30.9314 59.4953C31.0603 59.1239 31.2177 58.7239 31.2463 58.3953Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M31.8045 58.6239C31.8189 58.4668 31.7473 58.5525 31.7187 58.6239C31.6185 58.9097 31.461 59.1668 31.3465 59.4525C31.2177 59.7668 31.046 60.0097 30.8885 60.3525C30.8313 60.4811 30.7168 60.6382 30.7597 60.7668C30.8742 60.7382 30.9601 60.6668 31.0317 60.5525C31.2034 60.2525 31.3752 59.8811 31.4897 59.5525C31.6328 59.2382 31.7902 58.8954 31.8045 58.6239Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M22.2866 38.7668C21.7714 38.0954 21.2847 37.5954 20.8411 37.9382C20.383 38.2811 20.7695 38.8811 21.2991 39.5525C21.8286 40.2239 22.487 40.5954 22.7589 40.3811C23.0166 40.1525 22.8162 39.4382 22.2866 38.7668Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M21.6712 40.4668C21.2418 39.9953 20.8697 39.6525 20.5548 40.1096C20.2542 40.5668 20.4546 41.1096 20.9269 41.5096C21.3992 41.8953 22.1721 42.1668 22.3582 41.9953C22.5443 41.8239 22.0862 40.9382 21.6712 40.4668Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M21.6569 42.4524C21.342 42.1096 20.7552 41.881 20.5119 42.3667C20.2685 42.8667 20.6121 43.1238 21.0557 43.4096C21.5137 43.6953 22.258 44.0096 22.4298 43.8096C22.6158 43.6381 21.9718 42.8096 21.6569 42.4524Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M25.1205 44.4811C24.8056 44.3525 24.3619 44.4382 24.3906 44.9382C24.4192 45.4382 24.7198 45.4954 25.1062 45.5097C25.4926 45.5239 26.0651 45.4382 26.1081 45.2097C26.1367 44.9811 25.4497 44.6239 25.1205 44.4811Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M21.7141 44.1524C21.3993 43.8952 20.8697 43.7809 20.7266 44.2381C20.5978 44.6952 20.9126 44.8809 21.342 45.0524C21.7571 45.2238 22.4441 45.3952 22.5586 45.2095C22.6874 45.0238 22.029 44.4095 21.7141 44.1524Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M22.2437 45.6238C21.9145 45.5381 21.4851 45.6524 21.5424 46.0381C21.5996 46.4238 21.9002 46.4524 22.2866 46.4238C22.6731 46.4095 23.2313 46.2952 23.2599 46.1095C23.2885 45.9381 22.5729 45.7095 22.2437 45.6238Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M22.5729 46.7953C22.258 46.7667 21.8573 46.9239 21.9718 47.281C22.0719 47.6381 22.3725 47.6096 22.7303 47.5524C23.0881 47.481 23.6034 47.281 23.6034 47.1239C23.5891 46.9381 22.8878 46.8239 22.5729 46.7953Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M23.0738 48.181C22.7589 48.1525 22.3725 48.3096 22.4727 48.6667C22.5729 49.0239 22.8734 48.9953 23.2313 48.9382C23.5891 48.8667 24.1043 48.681 24.1043 48.5096C24.09 48.3239 23.3887 48.2096 23.0738 48.181Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M24.0041 49.2524C23.6606 49.2238 23.2313 49.4095 23.3458 49.7952C23.4603 50.1809 23.7895 50.1524 24.1759 50.0809C24.5623 50.0095 25.1205 49.7952 25.1205 49.6095C25.1205 49.4095 24.362 49.2809 24.0041 49.2524Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M24.3619 50.4667C24.0328 50.4381 23.6177 50.6095 23.7322 50.9667C23.8467 51.3381 24.1473 51.3096 24.5051 51.2381C24.8772 51.1667 25.4068 50.9667 25.4068 50.781C25.4211 50.6095 24.6911 50.4953 24.3619 50.4667Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M24.8772 51.4667C24.591 51.5238 24.2761 51.781 24.4765 52.081C24.6768 52.3667 24.9345 52.2667 25.235 52.1095C25.5356 51.9524 25.9507 51.6381 25.8934 51.481C25.8362 51.3238 25.1635 51.4095 24.8772 51.4667Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M25.5642 52.281C25.2923 52.4095 25.049 52.7381 25.3209 52.9667C25.5785 53.2095 25.8075 53.0524 26.0509 52.8095C26.3085 52.581 26.423 52.2952 26.3371 52.1524C26.2512 52.0238 25.8362 52.1381 25.5642 52.281Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M26.3085 53.0667C26.0652 53.2381 25.8648 53.581 26.151 53.781C26.4373 53.981 26.652 53.781 26.8524 53.5238C27.067 53.2524 27.1386 52.9667 27.0384 52.8381C26.9525 52.7238 26.5661 52.9095 26.3085 53.0667Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M27.1672 53.8666C26.9382 54.0666 26.7951 54.438 27.11 54.5952C27.4249 54.7523 27.6109 54.538 27.7827 54.2523C27.9544 53.9666 27.9974 53.6666 27.8829 53.5523C27.7541 53.438 27.3962 53.6666 27.1672 53.8666Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M27.9687 54.4382C27.7684 54.6524 27.6825 55.0524 28.0117 55.1667C28.3409 55.2667 28.484 55.0382 28.6271 54.7382C28.7702 54.4239 28.7559 54.1239 28.6271 54.0382C28.4983 53.9382 28.1548 54.2239 27.9687 54.4382Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M28.7702 54.9952C28.5699 55.2095 28.484 55.6095 28.8132 55.7237C29.1424 55.8237 29.2855 55.5952 29.4286 55.2952C29.5717 54.9809 29.5002 54.8237 29.3714 54.7237C29.2426 54.638 28.9706 54.7809 28.7702 54.9952Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M29.4716 55.5953C29.3284 55.8239 29.2998 56.181 29.6004 56.2381C29.9153 56.2953 30.0011 56.0667 30.087 55.781C30.1729 55.4953 30.087 55.3524 29.9582 55.2953C29.8294 55.2239 29.6147 55.381 29.4716 55.5953Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M30.2015 55.9952C30.1013 56.238 30.1156 56.5952 30.4305 56.5952C30.7454 56.6094 30.8026 56.3666 30.8313 56.0666C30.8599 55.7809 30.774 55.6523 30.6309 55.6094C30.5021 55.5666 30.3017 55.7523 30.2015 55.9952Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M30.9601 56.4096C30.8599 56.6667 30.8742 57.0524 31.2034 57.0524C31.5326 57.0667 31.5898 56.8096 31.6328 56.4953C31.6614 56.181 31.5755 56.0524 31.4181 56.0096C31.2749 55.9524 31.0746 56.1524 30.9601 56.4096Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M31.7043 56.7666C31.5898 57.0238 31.6185 57.4095 31.9477 57.4095C32.2768 57.4238 32.3341 57.1667 32.377 56.8667C32.4057 56.5524 32.3198 56.4238 32.1623 56.3809C32.0335 56.3238 31.8188 56.5238 31.7043 56.7666Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M23.5891 44.4525C23.3171 44.1668 22.8019 43.9811 22.6015 44.3953C22.4011 44.8239 22.7017 45.0525 23.0881 45.281C23.4746 45.5096 24.1186 45.781 24.2761 45.6096C24.4192 45.4525 23.861 44.7525 23.5891 44.4525Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M24.2331 46.3524C23.9898 46.1524 23.5604 46.081 23.4602 46.4524C23.3744 46.8096 23.632 46.9524 23.9755 47.0667C24.3047 47.1953 24.8486 47.3096 24.9344 47.1524C25.0346 47.0096 24.4908 46.5381 24.2331 46.3524Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M24.1473 47.3381C23.8324 47.2667 23.4173 47.3667 23.4746 47.7381C23.5318 48.1096 23.8324 48.1239 24.1902 48.1096C24.548 48.0953 25.0919 47.981 25.1062 47.7953C25.1348 47.6239 24.4621 47.4239 24.1473 47.3381Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M24.7055 48.381C24.4478 48.4095 24.1902 48.6238 24.3763 48.9524C24.548 49.2667 24.777 49.1953 25.0346 49.081C25.2923 48.9524 25.6501 48.681 25.5928 48.5238C25.5213 48.3524 24.9488 48.3667 24.7055 48.381Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M25.3495 49.7096C25.1062 49.7953 24.8915 50.0525 25.1348 50.3382C25.3782 50.6239 25.5785 50.5096 25.8075 50.3239C26.0222 50.1525 26.3228 49.8239 26.2369 49.6668C26.151 49.5239 25.5928 49.6382 25.3495 49.7096Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M25.965 50.5952C25.7503 50.6809 25.5785 50.9523 25.8361 51.1809C26.0795 51.4095 26.2655 51.2809 26.4516 51.0952C26.6377 50.9237 26.8667 50.5809 26.7808 50.4523C26.6949 50.338 26.194 50.4952 25.965 50.5952Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M26.5518 51.4952C26.38 51.6238 26.2655 51.8952 26.5375 52.0667C26.8094 52.2381 26.9525 52.0809 27.0957 51.8809C27.2245 51.6809 27.3819 51.3238 27.2674 51.2238C27.1672 51.1238 26.7378 51.3809 26.5518 51.4952Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M27.3247 52.2238C27.1386 52.3524 27.0384 52.6238 27.3104 52.7952C27.5966 52.9667 27.7254 52.8095 27.8686 52.6095C28.0117 52.4095 28.1548 52.0524 28.0403 51.9524C27.9258 51.8381 27.4964 52.0952 27.3247 52.2238Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M28.0832 52.7811C27.8972 52.9096 27.797 53.1811 28.0689 53.3525C28.3409 53.5239 28.484 53.3668 28.6128 53.1668C28.7559 52.9668 28.899 52.6096 28.7989 52.5096C28.6987 52.4096 28.255 52.6525 28.0832 52.7811Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M28.6557 53.4809C28.5269 53.6095 28.4554 53.8666 28.713 53.9666C28.9706 54.0809 29.0708 53.938 29.171 53.7523C29.2712 53.5523 29.3571 53.238 29.2569 53.1666C29.1424 53.0952 28.7989 53.3523 28.6557 53.4809Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M29.2426 54.0666C29.1138 54.2238 29.0994 54.4666 29.3714 54.5381C29.6433 54.6095 29.7149 54.4524 29.7865 54.2524C29.8437 54.0524 29.8866 53.7238 29.7721 53.6667C29.672 53.5952 29.3714 53.9095 29.2426 54.0666Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M29.9153 54.5097C29.7865 54.6668 29.7721 54.9097 30.0441 54.9811C30.316 55.0525 30.4019 54.8954 30.4592 54.6954C30.5307 54.4954 30.5593 54.1525 30.4448 54.1096C30.3303 54.0525 30.0298 54.3668 29.9153 54.5097Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M30.5737 55.0381C30.4878 55.2095 30.5164 55.4666 30.7883 55.4952C31.0603 55.5095 31.1175 55.3381 31.1462 55.1381C31.1748 54.9238 31.1605 54.5952 31.0317 54.5666C30.8885 54.4952 30.6595 54.8666 30.5737 55.0381Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M31.3036 55.4523C31.2463 55.6237 31.3322 55.8809 31.6185 55.838C31.8904 55.8094 31.9047 55.6237 31.8904 55.4094C31.8761 55.1951 31.7759 54.8809 31.6471 54.8666C31.504 54.8523 31.3608 55.2666 31.3036 55.4523Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M25.507 46.0096C25.1921 45.8811 24.7198 45.9096 24.7055 46.3239C24.7055 46.7382 25.0204 46.8096 25.4068 46.8525C25.7932 46.8953 26.3944 46.8668 26.4659 46.6811C26.5232 46.5096 25.8219 46.1525 25.507 46.0096Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M25.8218 47.2382C25.5499 47.1953 25.2064 47.3239 25.278 47.681C25.3495 48.0381 25.5928 48.0239 25.8934 47.9667C26.2083 47.9096 26.652 47.7524 26.6663 47.581C26.6806 47.4239 26.0938 47.281 25.8218 47.2382Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M22.5442 37.0809C22.1005 36.4666 21.7141 36.0095 21.4565 36.3952C21.2132 36.7809 21.5424 37.3381 21.9717 37.9381C22.4154 38.5523 22.9164 38.8666 23.0595 38.6238C23.2312 38.3809 22.9879 37.6809 22.5442 37.0809Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M23.9612 40.1668C23.5318 39.7668 23.1597 39.4668 23.0309 39.8096C22.8877 40.1382 23.2313 40.5096 23.6606 40.9096C24.09 41.3096 24.5051 41.4811 24.591 41.2668C24.6768 41.0668 24.3906 40.5668 23.9612 40.1668Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M25.3209 41.9523C24.9488 41.5952 24.6339 41.338 24.5051 41.6237C24.3906 41.9095 24.6768 42.238 25.049 42.5952C25.4354 42.9523 25.7932 43.0809 25.8648 42.9095C25.9364 42.738 25.693 42.3095 25.3209 41.9523Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M25.3352 43.381C24.8486 43.0381 24.4478 42.7952 24.3477 43.1381C24.2618 43.4952 24.6482 43.8095 25.1205 44.1524C25.6072 44.4952 26.0509 44.6095 26.1081 44.3952C26.1654 44.1809 25.8075 43.7238 25.3352 43.381Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M26.9526 43.5524C26.5232 43.2524 26.1797 43.0381 26.1081 43.3381C26.0222 43.6524 26.3657 43.9238 26.7808 44.2238C27.1959 44.5238 27.5823 44.6238 27.6252 44.4381C27.6682 44.2524 27.3676 43.8524 26.9526 43.5524Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M27.0384 44.6668C26.5804 44.6096 26.2369 44.5811 26.3085 44.8811C26.3657 45.1953 26.7378 45.2811 27.1958 45.3382C27.6395 45.3953 27.9687 45.3096 27.9258 45.1239C27.8829 44.9382 27.4821 44.7382 27.0384 44.6668Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M26.9955 45.5666C26.5375 45.5523 26.194 45.5809 26.2942 45.8809C26.3944 46.1809 26.7665 46.2095 27.2245 46.2238C27.6825 46.238 27.9974 46.0952 27.9258 45.9095C27.8542 45.738 27.4392 45.5809 26.9955 45.5666Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M27.3247 46.5809C26.9382 46.6237 26.6234 46.6951 26.7522 46.9666C26.881 47.2523 27.2102 47.238 27.6109 47.1951C27.9974 47.1523 28.255 46.9809 28.1834 46.8094C28.1119 46.6523 27.7254 46.538 27.3247 46.5809Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M27.4535 47.5525C27.1243 47.5811 26.8667 47.6525 26.9812 47.8811C27.0813 48.1239 27.3819 48.1239 27.7111 48.0811C28.0403 48.0525 28.2693 47.8953 28.1977 47.7525C28.1119 47.6096 27.7827 47.5096 27.4535 47.5525Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M27.7111 48.4095C27.3962 48.5381 27.1529 48.6667 27.3247 48.8809C27.4964 49.0952 27.7827 49.0381 28.0976 48.9095C28.4124 48.7809 28.5985 48.5809 28.484 48.4381C28.3838 48.3095 28.026 48.2952 27.7111 48.4095Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M28.0832 49.3239C27.8113 49.4954 27.6109 49.6382 27.8113 49.8239C28.0117 49.9954 28.255 49.8811 28.5126 49.7239C28.7846 49.5525 28.9134 49.3382 28.7846 49.2239C28.6701 49.1096 28.3552 49.1668 28.0832 49.3239Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M28.5699 50.0525C28.3838 50.2239 28.2407 50.381 28.4267 50.4953C28.6128 50.5953 28.7845 50.4668 28.9849 50.2953C29.171 50.1239 29.2425 49.9096 29.128 49.8525C29.0135 49.781 28.7702 49.8667 28.5699 50.0525Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M28.9706 50.724C28.7846 50.8954 28.6558 51.0525 28.8418 51.1668C29.0136 51.2811 29.1996 51.1525 29.3857 50.9668C29.5718 50.7954 29.6433 50.5954 29.5288 50.524C29.4143 50.4668 29.1567 50.5525 28.9706 50.724Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M29.3857 51.2096C29.1996 51.381 29.0565 51.5381 29.2426 51.6524C29.4286 51.7667 29.6004 51.6381 29.8007 51.4524C29.9868 51.281 30.0441 51.081 29.9439 51.0096C29.8294 50.9524 29.5861 51.0381 29.3857 51.2096Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M29.7865 51.7382C29.6004 51.9096 29.4716 52.0668 29.6433 52.1811C29.8294 52.2954 30.0011 52.1668 30.2015 51.9811C30.3876 51.8096 30.4592 51.6096 30.3447 51.5382C30.2158 51.4668 29.9725 51.5668 29.7865 51.7382Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M30.2874 52.2239C30.13 52.4382 30.0155 52.6096 30.2301 52.681C30.4305 52.7667 30.588 52.5953 30.7454 52.3953C30.9028 52.1953 30.9315 51.981 30.8027 51.9382C30.6738 51.8953 30.4448 52.0239 30.2874 52.2239Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M30.7883 52.7382C30.6595 52.9667 30.5879 53.1667 30.8026 53.2096C31.0173 53.2524 31.1461 53.0667 31.2606 52.8382C31.3894 52.6239 31.3751 52.4096 31.2463 52.381C31.1175 52.3525 30.9171 52.5096 30.7883 52.7382Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M26.2083 48.3524C25.922 48.4667 25.693 48.581 25.8505 48.7952C26.0079 48.9952 26.2655 48.9238 26.5518 48.8095C26.8523 48.6952 27.0098 48.4952 26.9096 48.381C26.838 48.2524 26.5088 48.2381 26.2083 48.3524Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M26.6949 49.3954C26.4659 49.6096 26.2941 49.7954 26.5231 49.9382C26.7378 50.0811 26.9668 49.9239 27.1958 49.6954C27.4248 49.4811 27.5107 49.2382 27.3676 49.1525C27.2388 49.0811 26.9239 49.1811 26.6949 49.3954Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M27.2531 50.3523C27.0241 50.5666 26.8523 50.7523 27.0813 50.8951C27.296 51.0237 27.525 50.8666 27.754 50.6523C27.983 50.438 28.0689 50.1951 27.9258 50.1094C27.7827 50.0237 27.4821 50.138 27.2531 50.3523Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M27.8829 51.081C27.6682 51.281 27.525 51.4525 27.7254 51.581C27.9258 51.7096 28.1262 51.5667 28.3409 51.3667C28.5555 51.1667 28.6271 50.9525 28.4983 50.8668C28.3838 50.781 28.1119 50.881 27.8829 51.081Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M28.4554 51.7523C28.2693 51.9523 28.1405 52.1094 28.3266 52.2094C28.5269 52.3094 28.6987 52.1666 28.8848 51.9809C29.0708 51.7808 29.1281 51.5808 28.9993 51.5094C28.8991 51.4523 28.6414 51.5666 28.4554 51.7523Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M29.0851 52.438C28.942 52.5952 28.8418 52.7237 28.9993 52.7952C29.1567 52.8809 29.2855 52.7666 29.4429 52.6094C29.5861 52.4523 29.629 52.2951 29.5288 52.2523C29.4286 52.2094 29.2426 52.2951 29.0851 52.438Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M29.5575 52.881C29.4 53.0381 29.3141 53.1667 29.4573 53.2381C29.6147 53.3238 29.7435 53.2095 29.901 53.0524C30.0584 52.8953 30.087 52.7381 29.9868 52.6953C29.901 52.6381 29.6863 52.7238 29.5575 52.881Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M29.9582 53.3238C29.8723 53.5238 29.8008 53.6667 29.9868 53.7095C30.1586 53.7381 30.2588 53.581 30.3446 53.3952C30.4448 53.2095 30.4305 53.0381 30.3303 53.0095C30.2158 52.9952 30.0584 53.1381 29.9582 53.3238Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M30.5593 53.6953C30.4735 53.8953 30.4305 54.0524 30.6023 54.081C30.774 54.0953 30.8599 53.9524 30.9458 53.7524C31.0317 53.5524 31.003 53.3953 30.9028 53.3667C30.8026 53.3667 30.6452 53.5096 30.5593 53.6953Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M30.9887 54.1095C30.9601 54.2952 30.9315 54.438 31.0889 54.4238C31.2463 54.4095 31.2893 54.2666 31.3322 54.0809C31.3751 53.8952 31.3322 53.7523 31.232 53.7666C31.1461 53.7666 31.0316 53.9238 30.9887 54.1095Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M31.4467 54.3668C31.4038 54.5668 31.3894 54.7382 31.5612 54.7239C31.7329 54.7097 31.7902 54.5382 31.8331 54.3382C31.8761 54.1382 31.8188 53.9668 31.7186 53.9811C31.6184 53.9668 31.4896 54.1525 31.4467 54.3668Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M23.5318 41.4951C23.1025 41.0951 22.7303 40.7951 22.6015 41.138C22.4584 41.4666 22.8019 41.838 23.217 42.238C23.6463 42.638 24.0614 42.8094 24.1473 42.5951C24.2475 42.3951 23.9612 41.8951 23.5318 41.4951Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M23.3458 42.9096C22.8878 42.5382 22.4584 42.3239 22.3439 42.6668C22.2437 42.9954 22.6015 43.3382 23.0595 43.7096C23.5175 44.0811 23.8181 44.0096 24.0185 43.9811C24.2188 43.9382 23.8038 43.2668 23.3458 42.9096Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M30.817 51.6096C29.2139 49.9525 28.2407 47.6382 27.9974 44.5239C28.1978 44.6811 28.3552 45.2239 28.3981 45.4668C28.8275 48.0668 29.3857 49.5525 30.8456 50.9382L30.817 51.6096Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M30.7168 50.1381C29.7578 49.2953 28.5269 47.7381 28.3695 44.4524C26.2655 42.6095 24.7913 40.8238 23.3744 38.8953C24.9202 40.7524 26.5661 42.5667 28.713 44.1381C28.5985 46.3953 29.5145 47.7667 30.7597 48.8095L30.7168 50.1381Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M32.3913 30.3809C32.7491 31.038 33.4218 31.2951 34.0087 31.3809C35.2109 31.5523 36.4561 31.1809 37.6441 31.3523C38.145 31.4237 38.6889 31.6237 39.0181 32.038C38.4742 31.938 37.9876 31.938 37.4866 31.938C36.2271 31.938 34.9962 32.2094 33.7797 31.9809C33.0068 31.8523 32.5201 31.038 32.3913 30.3809Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M37.5153 32.2523C36.3416 32.2094 35.1823 32.5951 34.3092 32.4951C33.6079 32.4237 33.0497 32.0237 32.4486 31.438C32.835 32.0808 33.4505 32.7951 34.1947 32.9094C35.2968 33.0808 36.3989 32.4666 37.5153 32.2523Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M41.7661 33.781C41.623 33.2381 40.9646 32.9096 40.206 32.781L40.1917 33.381C40.7785 33.3667 41.2508 33.5239 41.7661 33.781Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M39.6049 32.2954L40.2919 32.5239V31.8382L39.6621 31.5239L39.6049 32.2954Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M37.3149 35.5953C37.2576 35.7953 37.2004 35.981 37.1431 36.181C37.0859 36.0668 37.0143 35.9382 36.9427 35.8239C36.8855 35.9239 36.8282 36.0382 36.771 36.1525C36.7137 35.9953 36.6565 35.8525 36.5992 35.6953C36.542 35.8382 36.4704 35.981 36.3988 36.1239C36.3988 36.1239 36.1412 35.4668 36.1126 35.6668C36.084 35.8668 35.9838 36.1953 35.9838 36.1953C35.9265 36.0382 35.8693 35.881 35.812 35.7239C35.7262 35.8525 35.6546 35.9953 35.583 36.1239C35.5401 35.9953 35.4828 35.8525 35.4256 35.7239C35.3683 35.881 35.3254 36.0239 35.2682 36.181C35.1966 36.0525 35.1393 35.9096 35.0678 35.781C35.0105 35.9096 34.9533 36.0239 34.896 36.1382C34.8674 36.0239 34.8388 35.9096 34.8245 35.781C34.7529 35.8668 34.6813 35.9525 34.6241 36.0382C34.7958 35.3668 34.9533 34.6953 35.125 34.0239C35.9552 33.8096 36.7423 33.7525 37.5009 33.8668C37.6727 33.5953 37.8444 33.3239 38.0162 33.0382C37.8444 33.1382 37.6727 33.2382 37.5009 33.3525C37.4866 33.2525 37.4866 33.1525 37.4723 33.0382C37.3435 33.1382 37.229 33.2239 37.0859 33.3239C37.1002 33.2382 37.1002 33.1525 37.1145 33.0668C37 33.1668 36.8855 33.2525 36.7567 33.3525C36.771 33.2525 36.771 33.1525 36.7853 33.0382C36.6851 33.1382 36.4704 33.3239 36.3559 33.4239C36.3702 33.3239 36.4704 33.1525 36.4847 33.0382C36.3559 33.1382 36.0267 33.3525 35.8979 33.4382C35.9408 33.3382 36.1842 33.1239 36.2271 33.0096C37.2147 32.5811 38.0877 32.3525 38.8749 32.3811C38.8034 32.6525 38.3167 32.6668 38.2738 32.9953C38.2309 33.2382 38.4885 33.5239 38.5744 33.7525C38.9751 33.6953 39.6335 33.7239 40.0342 33.7525C39.4331 33.9668 38.4455 34.0096 38.0162 34.4525C37.6297 34.8668 37.5725 35.5525 37.5009 36.0953C37.4294 35.9239 37.3721 35.7525 37.3149 35.5953Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M38.8034 32.8809C38.9608 32.8809 39.0896 32.9523 39.0896 33.0523C39.0896 33.138 38.9608 33.2094 38.8034 33.2094C38.6459 33.2094 38.5171 33.138 38.5171 33.0523C38.5171 32.9523 38.6459 32.8809 38.8034 32.8809Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M39.3473 33.181L39.8339 33.2381L39.519 32.8096C39.519 32.8096 39.3759 33.1667 39.3473 33.181Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M34.4667 36.5095C35.4542 36.7095 36.4704 36.7238 37.4723 36.6667L37.8015 38.5381L37.4723 38.1381V38.5667L37.1718 38.2952L37.1145 38.7524L36.8998 38.2809L36.771 38.6809L36.5706 38.2809L36.4418 38.7524L36.2414 38.3238L36.0697 38.6809L35.8693 38.3238L35.6403 38.6524L35.4686 38.1952L35.3397 38.6238L35.1823 38.1667L35.0106 38.5667L34.8817 38.1667L34.71 38.5524L34.5525 38.1524L34.3235 38.4524L34.2806 38.0952L34.1232 38.4524L34.4667 36.5095Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M34.023 39.2095C35.3111 39.3524 36.5992 39.2667 37.8874 39.0095C38.0591 39.6095 38.4026 40.1952 38.4169 40.8238C38.4169 41.0952 38.1593 40.1524 37.916 40.2238C37.6727 40.2952 38.0162 40.9238 37.7729 40.9952C37.5582 41.081 37.7586 40.2667 37.5439 40.3381C37.2719 40.4381 37.5868 41.0952 37.3149 41.1667C37.0859 41.2381 37.3721 40.4095 37.1431 40.4667C36.8855 40.5238 37.229 41.2381 36.9714 41.2524C36.7137 41.2667 37.0286 40.5524 36.771 40.4952C36.542 40.4524 36.8282 41.1524 36.5992 41.1809C36.3845 41.1952 36.6135 40.4524 36.3989 40.5238C36.1269 40.6095 36.4561 41.2667 36.1985 41.2952C35.9552 41.3238 36.27 40.5952 36.0267 40.5667C35.7834 40.5524 36.084 41.2524 35.855 41.2667C35.626 41.2809 35.9409 40.5524 35.6975 40.581C35.4542 40.6095 35.7691 41.281 35.5258 41.3095C35.2825 41.3381 35.6546 40.6095 35.4256 40.6095C35.168 40.6095 35.354 41.3524 35.0964 41.3095C34.8531 41.281 35.3254 40.5809 35.0678 40.5524C34.7958 40.5381 34.9819 41.2095 34.71 41.281C34.5096 41.3381 34.8674 40.6952 34.667 40.6524C34.4523 40.6238 34.6384 41.3095 34.438 41.2381C34.2233 41.1381 34.5955 40.5095 34.3522 40.5381C34.0802 40.5524 34.0373 41.5381 33.98 41.2667C33.794 40.5952 34.0087 39.8952 34.023 39.2095Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M36.7853 41.8096C37.0286 41.8096 37.2147 42.2096 37.2147 42.6953C37.2147 43.181 37.0143 43.581 36.7853 43.581C36.542 43.581 36.3416 43.181 36.3416 42.6953C36.3416 42.2096 36.542 41.8096 36.7853 41.8096Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M36.5706 44.1953C36.7424 44.1953 36.8855 44.5953 36.8855 45.081C36.8855 45.581 36.7424 45.9667 36.5706 45.9667C36.3989 45.9667 36.2557 45.5667 36.2557 45.081C36.2557 44.5953 36.3846 44.1953 36.5706 44.1953Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M37.4294 44.1381C37.6011 44.1238 37.7872 44.5238 37.8158 45.0095C37.8588 45.5095 37.7586 45.9238 37.5868 45.9238C37.4151 45.9381 37.229 45.5524 37.1861 45.0524C37.1574 44.5666 37.2576 44.1524 37.4294 44.1381Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M38.1021 44.0237C38.2452 43.9951 38.4169 44.3809 38.4885 44.8666C38.5458 45.3523 38.5028 45.7809 38.3597 45.7951C38.2166 45.8237 38.0448 45.438 37.9732 44.9523C37.9017 44.4666 37.9732 44.0523 38.1021 44.0237Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M35.855 44.1525C35.7262 44.1382 35.6117 44.4954 35.5831 44.9525C35.5687 45.4097 35.6689 45.7811 35.7977 45.7811C35.9266 45.7954 36.0411 45.4382 36.0697 44.9811C36.084 44.5382 35.9981 44.1668 35.855 44.1525Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M35.2682 44.1809C35.168 44.1666 35.0392 44.4524 34.9819 44.8095C34.9247 45.1667 34.9676 45.4952 35.0821 45.5095C35.1823 45.5238 35.3254 45.2381 35.3684 44.8809C35.4113 44.5095 35.3684 44.1952 35.2682 44.1809Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M34.6241 44.224C34.4953 44.2097 34.3522 44.4668 34.2949 44.7811C34.2377 45.1097 34.2806 45.3811 34.4094 45.3954C34.5382 45.4097 34.6814 45.1668 34.7386 44.8382C34.7959 44.524 34.7386 44.2525 34.6241 44.224Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M33.9228 44.2524C33.8226 44.2381 33.6938 44.4524 33.6509 44.7095C33.5936 44.981 33.6365 45.2095 33.751 45.2238C33.8512 45.2381 33.9657 45.0238 34.023 44.7667C34.0659 44.5095 34.023 44.2667 33.9228 44.2524Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M33.4648 44.3238C33.3932 44.3095 33.293 44.481 33.2501 44.7095C33.1928 44.9381 33.2071 45.1381 33.2787 45.1667C33.336 45.181 33.4361 45.0095 33.4934 44.781C33.5363 44.5381 33.522 44.3381 33.4648 44.3238Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M38.7461 44.0239C38.875 43.9954 39.0181 44.3239 39.0753 44.7382C39.1326 45.1668 39.0896 45.5097 38.9608 45.5382C38.832 45.5525 38.6889 45.2239 38.6316 44.8097C38.5744 44.3954 38.6173 44.0382 38.7461 44.0239Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M39.3186 44.0238C39.4188 43.9952 39.5763 44.2666 39.6622 44.6095C39.748 44.9666 39.748 45.2809 39.6335 45.3095C39.5333 45.3381 39.3759 45.0666 39.29 44.7095C39.1898 44.3666 39.2041 44.0524 39.3186 44.0238Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M36.5706 46.5381C36.7424 46.5381 36.8855 46.9381 36.8855 47.4238C36.8855 47.9238 36.7424 48.3238 36.5706 48.3238C36.3989 48.3238 36.2557 47.9238 36.2557 47.4238C36.2557 46.9524 36.3846 46.5381 36.5706 46.5381Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M37.3435 46.381C37.5153 46.3667 37.6727 46.7382 37.73 47.2096C37.7872 47.681 37.687 48.0667 37.5153 48.081C37.3435 48.0953 37.1861 47.7239 37.1288 47.2667C37.0716 46.7953 37.1718 46.3953 37.3435 46.381Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M35.7691 46.3381C35.5973 46.3238 35.4399 46.6809 35.3827 47.1523C35.3397 47.6238 35.4399 48.0095 35.5973 48.0238C35.7691 48.0381 35.9265 47.6809 35.9838 47.2095C36.041 46.7523 35.9409 46.3523 35.7691 46.3381Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M38.2023 46.2238C38.3597 46.2096 38.5172 46.5381 38.5601 46.981C38.603 47.4096 38.5172 47.7667 38.3597 47.781C38.2023 47.7953 38.0448 47.4524 38.0162 47.0238C37.9733 46.5953 38.0592 46.2381 38.2023 46.2238Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M34.939 46.381C34.7816 46.3668 34.6241 46.7096 34.5812 47.1382C34.5382 47.5668 34.6241 47.9239 34.7816 47.9382C34.939 47.9525 35.0964 47.6239 35.1251 47.181C35.1823 46.7525 35.0964 46.3953 34.939 46.381Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M38.8749 46.0667C39.0324 46.0381 39.2041 46.3667 39.2757 46.7952C39.3616 47.2238 39.29 47.581 39.1469 47.6095C38.9894 47.6381 38.8177 47.3238 38.7461 46.8952C38.6603 46.4667 38.7175 46.0952 38.8749 46.0667Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M34.3236 46.2525C34.1661 46.2239 33.9944 46.5525 33.9228 46.981C33.8369 47.4096 33.9085 47.7668 34.0516 47.7953C34.2091 47.8239 34.3808 47.5096 34.4524 47.081C34.5383 46.6525 34.4667 46.281 34.3236 46.2525Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M39.5906 45.9667C39.7337 45.9382 39.9055 46.2382 39.977 46.6239C40.0486 47.0096 39.9913 47.3524 39.8482 47.381C39.7051 47.4096 39.5333 47.1096 39.4618 46.7239C39.3902 46.3382 39.4475 45.9953 39.5906 45.9667Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M33.6222 46.1952C33.4934 46.1667 33.3217 46.4667 33.2501 46.8524C33.1785 47.2381 33.2358 47.581 33.3789 47.6095C33.5077 47.6238 33.6795 47.3381 33.7511 46.9524C33.8226 46.5524 33.7654 46.2095 33.6222 46.1952Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M40.1917 45.7524C40.3062 45.7238 40.4923 45.9524 40.6068 46.2953C40.707 46.6238 40.707 46.9381 40.5925 46.981C40.478 47.0095 40.2919 46.781 40.1774 46.4381C40.0629 46.0953 40.0629 45.7953 40.1917 45.7524Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M33.0783 46.0095C32.9638 45.9667 32.7634 46.2095 32.6633 46.5381C32.5488 46.8667 32.5631 47.181 32.6776 47.2238C32.8064 47.2524 32.9924 47.0238 33.1069 46.681C33.2071 46.3524 33.1928 46.0524 33.0783 46.0095Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M37.229 48.7239C37.5153 48.7096 37.7729 49.2096 37.7872 49.8239C37.8015 50.4382 37.5725 50.9239 37.2719 50.9382C36.9714 50.9525 36.7281 50.4525 36.7137 49.8382C36.6994 49.2239 36.9284 48.7382 37.229 48.7239Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M36.1126 48.7667C35.8264 48.7524 35.5688 49.2524 35.5544 49.8524C35.5401 50.4667 35.7691 50.9667 36.0697 50.9809C36.3703 50.9809 36.6136 50.4952 36.6279 49.8809C36.6422 49.2667 36.4132 48.7667 36.1126 48.7667Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M38.1593 48.538C38.374 48.4952 38.6603 48.938 38.7748 49.538C38.8893 50.138 38.8034 50.6666 38.5744 50.7094C38.3597 50.7666 38.0734 50.3094 37.9589 49.7094C37.8301 49.1094 37.916 48.5809 38.1593 48.538Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M38.3168 51.1668C38.5887 51.1525 38.8177 51.7096 38.8463 52.4096C38.8749 53.1096 38.6746 53.6953 38.4169 53.6953C38.145 53.7096 37.916 53.1525 37.9017 52.4525C37.8588 51.7525 38.0591 51.1811 38.3168 51.1668Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M36.9284 51.281C37.2004 51.2667 37.4294 51.8239 37.458 52.5239C37.4866 53.2239 37.2863 53.8096 37.0286 53.8096C36.7567 53.8239 36.5277 53.2667 36.4991 52.5667C36.4848 51.881 36.6708 51.3096 36.9284 51.281Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M36.8998 54.4381C37.1718 54.4238 37.4008 54.8381 37.4294 55.381C37.458 55.9095 37.2576 56.3524 37 56.3667C36.7281 56.381 36.4991 55.9524 36.4704 55.4238C36.4418 54.8952 36.6422 54.4524 36.8998 54.4381Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M36.7853 56.9811C37.0572 56.9668 37.2862 57.3953 37.3149 57.9239C37.3435 58.4382 37.1431 58.8811 36.8855 58.8953C36.6136 58.9096 36.3846 58.4953 36.3559 57.9525C36.3273 57.4239 36.5134 56.9811 36.7853 56.9811Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M35.5258 56.7668C35.7119 56.7525 35.8836 57.1239 35.9122 57.5953C35.9266 58.0668 35.7834 58.4668 35.5974 58.4668C35.4113 58.4811 35.2395 58.0953 35.2109 57.6239C35.1966 57.1668 35.3397 56.7668 35.5258 56.7668Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M37.8731 56.7238C38.0591 56.7095 38.2309 57.0952 38.2595 57.5666C38.2738 58.0381 38.145 58.4238 37.9446 58.4381C37.7729 58.4523 37.6011 58.0809 37.5868 57.6095C37.5582 57.1238 37.687 56.7381 37.8731 56.7238Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M38.9465 56.8096C39.0896 56.7953 39.2185 57.0953 39.2328 57.4524C39.2471 57.8096 39.1469 58.1238 38.9894 58.1238C38.8463 58.1381 38.7175 57.8381 38.7032 57.481C38.7032 57.1096 38.8034 56.8096 38.9465 56.8096Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M34.5239 56.5667C34.667 56.5524 34.7959 56.8524 34.8102 57.2095C34.8245 57.5667 34.7243 57.8809 34.5669 57.8809C34.4237 57.8952 34.2949 57.5952 34.2806 57.2381C34.2806 56.8667 34.3808 56.5667 34.5239 56.5667Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M33.8512 56.2095C33.9514 56.2095 34.0516 56.4952 34.0659 56.8666C34.0802 57.2238 33.9944 57.5238 33.8799 57.538C33.7797 57.5523 33.6795 57.2523 33.6652 56.8809C33.6509 56.5238 33.7367 56.2238 33.8512 56.2095Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M39.8482 56.3953C39.9627 56.3953 40.0629 56.681 40.0772 57.0524C40.0915 57.4095 40.0057 57.7095 39.8912 57.7238C39.791 57.7381 39.6765 57.4381 39.6765 57.0667C39.6622 56.7096 39.748 56.4095 39.8482 56.3953Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M33.1785 55.9097C33.2358 55.8954 33.2787 56.1954 33.293 56.5668C33.3073 56.924 33.2644 57.224 33.1928 57.2382C33.1356 57.2382 33.0783 56.9525 33.0783 56.5811C33.0783 56.2097 33.1213 55.9097 33.1785 55.9097Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M40.5782 56.0095C40.6354 55.9952 40.6927 56.2952 40.707 56.6524C40.707 57.0095 40.664 57.3095 40.6068 57.3238C40.5495 57.3381 40.4923 57.0381 40.478 56.6809C40.478 56.3095 40.5209 56.0095 40.5782 56.0095Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M40.02 58.3525C40.0772 58.3383 40.1345 58.6383 40.1488 58.9954C40.1488 59.3668 40.1058 59.6668 40.0486 59.6811C39.9913 59.6811 39.9341 59.3954 39.9198 59.024C39.9198 58.6668 39.9627 58.3668 40.02 58.3525Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M33.6079 57.8525C33.6652 57.8383 33.7224 58.1383 33.7224 58.4954C33.7367 58.8525 33.6938 59.1668 33.6222 59.1668C33.565 59.1811 33.5077 58.8811 33.5077 58.524C33.5077 58.1668 33.5507 57.8668 33.6079 57.8525Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M39.2614 58.7239C39.3473 58.7096 39.4188 59.0096 39.4331 59.3667C39.4475 59.7382 39.3759 60.0382 39.29 60.0524C39.2041 60.0524 39.1326 59.7667 39.1183 59.3953C39.1039 59.0382 39.1755 58.7382 39.2614 58.7239Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M34.209 58.2666C34.2949 58.2523 34.3808 58.5523 34.3808 58.9095C34.3951 59.2666 34.3236 59.5666 34.2377 59.5809C34.1518 59.5952 34.0802 59.2952 34.0659 58.938C34.0659 58.5666 34.1232 58.2666 34.209 58.2666Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M38.5458 58.8809C38.6889 58.8666 38.8177 59.1666 38.832 59.5237C38.8463 59.8809 38.7461 60.1809 38.603 60.1952C38.4456 60.2094 38.3311 59.9094 38.3168 59.5523C38.2881 59.1951 38.4026 58.8809 38.5458 58.8809Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M34.8102 58.5952C34.9533 58.5809 35.0821 58.8809 35.0964 59.2381C35.1107 59.6095 35.0105 59.9095 34.8674 59.9238C34.71 59.9238 34.5955 59.6381 34.5812 59.2667C34.5525 58.9095 34.6527 58.6095 34.8102 58.5952Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M37.7157 59.0666C37.8445 59.0523 37.9876 59.3809 38.0019 59.7809C38.0162 60.1809 37.916 60.5238 37.7729 60.538C37.6298 60.5523 37.501 60.2238 37.4867 59.8095C37.4723 59.4095 37.5725 59.0666 37.7157 59.0666Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M35.6689 58.8239C35.8121 58.8096 35.9409 59.1382 35.9552 59.5382C35.9695 59.9382 35.855 60.2811 35.7119 60.2954C35.5544 60.3096 35.4399 59.9811 35.4256 59.5668C35.4113 59.1668 35.5258 58.8239 35.6689 58.8239Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M41.165 55.8525C41.2079 55.8382 41.2509 56.0525 41.2509 56.3096C41.2509 56.5811 41.2222 56.7811 41.1793 56.7953C41.1364 56.7953 41.0934 56.5953 41.0934 56.3239C41.0934 56.0811 41.122 55.8525 41.165 55.8525Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M40.4493 59.9954C40.4923 59.9954 40.5352 60.2525 40.5352 60.5811C40.5495 60.9096 40.5066 61.1811 40.4637 61.1954C40.4207 61.1954 40.3778 60.9382 40.3778 60.6096C40.3778 60.2811 40.4207 60.0096 40.4493 59.9954Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M34.1089 59.9954C34.1518 59.9954 34.1947 60.2525 34.1947 60.5811C34.1947 60.9096 34.1661 61.1811 34.1232 61.1954C34.0802 61.1954 34.0373 60.9382 34.0373 60.6096C34.0373 60.2811 34.0659 60.0096 34.1089 59.9954Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M35.3827 60.5809C35.4256 60.5666 35.4686 60.838 35.4686 61.1666C35.4829 61.4952 35.4399 61.7523 35.4113 61.7666C35.3684 61.7809 35.3254 61.5094 35.3254 61.1809C35.2968 60.8666 35.3397 60.5951 35.3827 60.5809Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M37.1145 60.9381C37.1574 60.9238 37.2004 61.1809 37.2004 61.5095C37.2004 61.8381 37.1718 62.1095 37.1288 62.1238C37.0859 62.1238 37.0429 61.8666 37.0429 61.5381C37.0429 61.2095 37.0716 60.9381 37.1145 60.9381Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M35.812 60.7523C35.855 60.738 35.8979 60.9951 35.8979 61.3237C35.8979 61.6523 35.8693 61.9237 35.8263 61.938C35.7834 61.938 35.7405 61.6809 35.7405 61.3523C35.7405 61.0237 35.7691 60.7523 35.812 60.7523Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M36.2128 60.8096C36.2558 60.7954 36.2987 61.0525 36.2987 61.3811C36.313 61.7096 36.2701 61.9811 36.2271 61.9953C36.1842 61.9953 36.1413 61.7382 36.1413 61.4096C36.1413 61.0811 36.1842 60.8096 36.2128 60.8096Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M36.6422 60.9381C36.6851 60.9238 36.7281 61.1809 36.7281 61.5095C36.7424 61.8381 36.6994 62.1095 36.6565 62.1238C36.6136 62.1238 36.5706 61.8666 36.5706 61.5381C36.5706 61.2095 36.6136 60.9381 36.6422 60.9381Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M38.875 60.6809C38.9179 60.6809 38.9608 60.9381 38.9608 61.2666C38.9751 61.5952 38.9322 61.8666 38.9036 61.8809C38.8606 61.8809 38.8177 61.6238 38.8177 61.2952C38.8034 60.9523 38.832 60.6809 38.875 60.6809Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M40.0772 60.3096C40.1201 60.3096 40.1631 60.5667 40.1631 60.8953C40.1774 61.2239 40.1345 61.4953 40.0915 61.5096C40.0486 61.5096 40.0056 61.2524 40.0056 60.9239C40.0056 60.581 40.0486 60.3096 40.0772 60.3096Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M39.748 60.4666C39.791 60.4523 39.8339 60.7237 39.8339 61.0523C39.8339 61.3809 39.8053 61.638 39.7623 61.6523C39.7194 61.6666 39.6765 61.3952 39.6765 61.0666C39.6765 60.738 39.7051 60.4666 39.748 60.4666Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M39.3329 60.6096C39.3759 60.6096 39.4188 60.8668 39.4188 61.1953C39.4188 61.5239 39.3902 61.7953 39.3473 61.8096C39.3043 61.8096 39.2614 61.5525 39.2614 61.2239C39.2614 60.8953 39.29 60.6239 39.3329 60.6096Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M38.4456 60.8096C38.4885 60.7954 38.5315 61.0525 38.5315 61.3811C38.5458 61.7096 38.5028 61.9811 38.4742 61.9953C38.4313 61.9953 38.3883 61.7382 38.3883 61.4096C38.3597 61.0811 38.4026 60.8096 38.4456 60.8096Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M38.0305 60.8668C38.0734 60.8525 38.1164 61.1096 38.1164 61.4382C38.1164 61.7668 38.0877 62.0382 38.0448 62.0525C38.0019 62.0525 37.9589 61.7953 37.9589 61.4668C37.9732 61.1382 37.9876 60.8668 38.0305 60.8668Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M37.6154 60.9381C37.6584 60.9238 37.7013 61.1809 37.7013 61.5095C37.7013 61.8381 37.6727 62.1095 37.6298 62.1238C37.5868 62.1238 37.5439 61.8666 37.5439 61.5381C37.5439 61.2095 37.5725 60.9381 37.6154 60.9381Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M35.0106 60.4954C35.0535 60.4954 35.0964 60.7525 35.0964 61.0811C35.1107 61.4096 35.0678 61.6811 35.0392 61.6954C34.9962 61.6954 34.9533 61.4382 34.9533 61.1096C34.9247 60.7668 34.9676 60.4954 35.0106 60.4954Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M34.6098 60.3667C34.6527 60.3667 34.6957 60.6238 34.6957 60.9524C34.6957 61.281 34.667 61.5524 34.6241 61.5667C34.5812 61.5667 34.5382 61.3096 34.5382 60.981C34.5382 60.6524 34.5526 60.381 34.6098 60.3667Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M33.7081 59.8096C33.7367 59.8096 33.794 60.0667 33.794 60.3953C33.8083 60.7238 33.7654 60.9953 33.7224 61.0096C33.6938 61.0096 33.6365 60.7524 33.6365 60.4239C33.6365 60.0953 33.6652 59.8239 33.7081 59.8096Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M33.3932 59.5667C33.4218 59.5667 33.4791 59.8238 33.4791 60.1524C33.4934 60.4809 33.4505 60.7524 33.4075 60.7666C33.3789 60.7666 33.3217 60.5095 33.3217 60.1809C33.3217 59.8524 33.3503 59.5667 33.3932 59.5667Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M32.7491 55.7524C32.7921 55.7524 32.835 55.9524 32.835 56.2239C32.835 56.481 32.8064 56.6953 32.7635 56.6953C32.7205 56.7096 32.6776 56.4953 32.6776 56.2382C32.6776 55.981 32.7062 55.7667 32.7491 55.7524Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M36.6136 59.0383C36.8282 59.024 37.0286 59.3811 37.0429 59.8097C37.0716 60.2383 36.9141 60.6097 36.6851 60.6097C36.4704 60.624 36.2701 60.2811 36.2557 59.8383C36.2271 59.4097 36.3846 59.0525 36.6136 59.0383Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M38.2166 54.4095C38.4885 54.3952 38.7175 54.8238 38.7462 55.3524C38.7748 55.881 38.5887 56.3095 38.3168 56.3238C38.0448 56.3381 37.8158 55.9238 37.8015 55.381C37.7872 54.8524 37.9733 54.4095 38.2166 54.4095Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M35.5115 54.2523C35.7834 54.238 36.0124 54.6523 36.0411 55.1952C36.0697 55.7237 35.8693 56.1666 35.6117 56.1809C35.3541 56.1952 35.1107 55.7666 35.0964 55.238C35.0535 54.7095 35.2396 54.2666 35.5115 54.2523Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M39.3473 54.1525C39.562 54.1382 39.748 54.5239 39.7767 54.9953C39.791 55.4668 39.6479 55.8668 39.4332 55.8668C39.2185 55.8811 39.0324 55.4953 39.0181 55.0239C38.9895 54.5525 39.1326 54.1525 39.3473 54.1525Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M34.2663 53.9095C34.4381 53.8952 34.6098 54.3238 34.6241 54.8524C34.6384 55.381 34.5096 55.8095 34.3379 55.8238C34.1661 55.8381 33.9944 55.4238 33.98 54.881C33.9514 54.3667 34.0945 53.9238 34.2663 53.9095Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M40.3348 53.7668C40.4923 53.7525 40.6211 54.1239 40.6497 54.5668C40.664 55.0239 40.5495 55.3953 40.3921 55.4096C40.2346 55.4239 40.1058 55.0525 40.0915 54.5953C40.0629 54.1382 40.1631 53.7668 40.3348 53.7668Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M41.0505 53.3952C41.1793 53.3809 41.2795 53.7523 41.2938 54.1952C41.3081 54.6523 41.2222 55.0238 41.0934 55.038C40.9789 55.0523 40.8787 54.6809 40.8501 54.2238C40.8358 53.7666 40.936 53.3952 41.0505 53.3952Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M41.7232 53.0238C41.852 53.0096 41.9522 53.381 41.9665 53.8238C41.9808 54.281 41.8949 54.6524 41.7661 54.6667C41.6516 54.681 41.5514 54.3096 41.5228 53.8524C41.5228 53.3953 41.6087 53.0238 41.7232 53.0238Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M33.3074 53.5953C33.4791 53.581 33.6365 54.0096 33.6652 54.5382C33.6795 55.0667 33.565 55.4953 33.3789 55.5096C33.2072 55.5239 33.0497 55.1096 33.0211 54.5667C33.0068 54.0525 33.1213 53.6096 33.3074 53.5953Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M32.4915 53.3239C32.6203 53.3096 32.7492 53.6382 32.7635 54.0382C32.7778 54.4382 32.6776 54.7668 32.5488 54.7811C32.4057 54.7954 32.2768 54.4668 32.2768 54.0668C32.2625 53.6668 32.3627 53.3239 32.4915 53.3239Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M42.3672 52.5811C42.5104 52.5811 42.6392 52.8953 42.6392 53.3096C42.6535 53.7096 42.5533 54.0382 42.4245 54.0525C42.2957 54.0668 42.1669 53.7382 42.1525 53.3382C42.1382 52.9239 42.2384 52.5811 42.3672 52.5811Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M39.5476 51.0953C39.7909 51.081 40.0056 51.581 40.0199 52.2095C40.0343 52.8238 39.8625 53.3381 39.6335 53.3524C39.4045 53.3667 39.1898 52.8667 39.1612 52.2381C39.1326 51.6381 39.3186 51.1096 39.5476 51.0953Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M35.6117 51.3523C35.855 51.3381 36.0697 51.8381 36.084 52.4666C36.0983 53.0809 35.9266 53.5952 35.6975 53.6095C35.4685 53.6238 35.2539 53.1238 35.2252 52.4952C35.2109 51.8809 35.3827 51.3523 35.6117 51.3523Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M40.4923 50.881C40.664 50.8667 40.8072 51.3095 40.8215 51.8667C40.8358 52.4238 40.7213 52.8809 40.5495 52.8952C40.3778 52.9095 40.2346 52.4667 40.206 51.9095C40.1917 51.3524 40.3205 50.8952 40.4923 50.881Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M34.4523 51.2811C34.6098 51.2668 34.7672 51.7097 34.7815 52.2668C34.7958 52.8097 34.6813 53.2811 34.5096 53.2954C34.3378 53.3097 34.1947 52.8668 34.1804 52.3097C34.1661 51.7525 34.2806 51.2954 34.4523 51.2811Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M41.2222 50.4525C41.3654 50.4382 41.4942 50.8811 41.5085 51.4382C41.5228 51.9953 41.4226 52.4525 41.2795 52.4668C41.1364 52.4811 41.0076 52.0382 40.9932 51.4811C40.9789 50.9239 41.0791 50.4668 41.2222 50.4525Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M33.4505 51.1666C33.5936 51.1523 33.7224 51.5952 33.7367 52.1523C33.751 52.6952 33.6508 53.1666 33.5077 53.1809C33.3646 53.1952 33.2358 52.7523 33.2215 52.1952C33.2071 51.638 33.3073 51.1666 33.4505 51.1666Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M42.0523 50.0809C42.1955 50.0666 42.3243 50.5095 42.3386 51.0666C42.3529 51.6238 42.2527 52.0809 42.1096 52.0952C41.9808 52.1095 41.8376 51.6666 41.8233 51.1095C41.8233 50.5523 41.9092 50.0952 42.0523 50.0809Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M32.3913 50.6666C32.5345 50.6523 32.6633 51.0952 32.6776 51.6523C32.6919 52.1952 32.5917 52.6666 32.4486 52.6809C32.3055 52.6952 32.1767 52.2523 32.1623 51.6952C32.148 51.138 32.2482 50.6809 32.3913 50.6666Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M42.8395 49.3382C42.9683 49.3239 43.0685 49.7668 43.0828 50.3239C43.0972 50.8811 43.0113 51.3382 42.8825 51.3525C42.768 51.3668 42.6678 50.9239 42.6392 50.3668C42.6392 49.8097 42.725 49.3382 42.8395 49.3382Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M31.4467 50.2667C31.5612 50.2524 31.6757 50.6953 31.69 51.2524C31.7043 51.8095 31.6185 52.2667 31.4896 52.281C31.3751 52.2953 31.2607 51.8524 31.2463 51.2953C31.2463 50.7381 31.3179 50.281 31.4467 50.2667Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M35.1823 48.581C34.9676 48.5381 34.6814 48.981 34.5669 49.581C34.4524 50.1667 34.5382 50.7096 34.7672 50.7524C34.9962 50.7953 35.2682 50.3524 35.3827 49.7524C35.5115 49.1524 35.4113 48.6238 35.1823 48.581Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M39.1039 48.2095C39.3186 48.1666 39.5763 48.5952 39.6908 49.1666C39.8053 49.7381 39.7194 50.2381 39.5047 50.2809C39.29 50.3238 39.0181 49.8952 38.9179 49.3238C38.8034 48.7524 38.8749 48.2524 39.1039 48.2095Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M34.2377 48.2525C34.023 48.2096 33.7654 48.6382 33.6509 49.2096C33.5364 49.781 33.6222 50.281 33.8369 50.3382C34.0516 50.381 34.3236 49.9525 34.4237 49.381C34.5382 48.7953 34.4667 48.2953 34.2377 48.2525Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M39.9484 48.1666C40.1488 48.1381 40.3778 48.4952 40.4636 49.0095C40.5638 49.5095 40.4923 49.9523 40.3062 49.9952C40.1058 50.0381 39.8768 49.6523 39.791 49.1523C39.6765 48.6381 39.7623 48.1952 39.9484 48.1666Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M33.3932 48.2094C33.1929 48.1666 32.9639 48.538 32.878 49.0523C32.7778 49.5523 32.8494 49.9951 33.0354 50.038C33.2358 50.0666 33.4648 49.7094 33.5507 49.1951C33.6509 48.6809 33.5793 48.238 33.3932 48.2094Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M40.6497 47.7954C40.8215 47.7525 41.0362 48.1239 41.122 48.6239C41.2222 49.1239 41.1793 49.5668 41.0075 49.6096C40.8501 49.6525 40.6211 49.2811 40.5352 48.7811C40.435 48.2811 40.4923 47.8382 40.6497 47.7954Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M32.6919 47.8381C32.5201 47.7952 32.3055 48.1667 32.2196 48.6667C32.1194 49.1667 32.1623 49.6095 32.3341 49.6524C32.4915 49.6952 32.7205 49.3238 32.8064 48.8238C32.9066 48.3238 32.8493 47.8809 32.6919 47.8381Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M41.3081 47.581C41.4369 47.5238 41.6659 47.8238 41.7804 48.2381C41.9092 48.6667 41.9092 49.0381 41.7661 49.0952C41.623 49.1524 41.4083 48.8524 41.2795 48.4381C41.165 48.0238 41.165 47.6381 41.3081 47.581Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M32.0335 47.6239C31.9047 47.5811 31.6757 47.8811 31.5469 48.2954C31.4181 48.7239 31.4324 49.0954 31.5612 49.1525C31.7043 49.2097 31.919 48.9097 32.0478 48.4811C32.1767 48.0668 32.1767 47.6668 32.0335 47.6239Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M35.7978 41.8237C36.0411 41.838 36.2271 42.238 36.2271 42.7237C36.2271 43.2094 36.0268 43.6094 35.7834 43.6094C35.5401 43.6094 35.3541 43.2094 35.3541 42.7237C35.3684 42.2237 35.5544 41.8237 35.7978 41.8237Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M34.8531 42.0238C35.0678 42.0524 35.1823 42.4238 35.1107 42.8523C35.0535 43.2666 34.8245 43.5809 34.6241 43.5523C34.4094 43.5238 34.2949 43.1523 34.3665 42.7381C34.4237 42.3095 34.6527 41.9809 34.8531 42.0238Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M37.687 41.8237C37.8874 41.7951 38.1164 42.138 38.1593 42.5951C38.2023 43.038 38.0591 43.4237 37.8444 43.438C37.6297 43.4522 37.4151 43.1094 37.3721 42.6665C37.3435 42.2237 37.4723 41.838 37.687 41.8237Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M38.5315 41.7668C38.7319 41.7382 38.9465 42.0382 39.0181 42.4382C39.0897 42.8382 38.9895 43.1811 38.7891 43.2096C38.5887 43.2382 38.3883 42.9525 38.3168 42.5525C38.2452 42.1668 38.3454 41.8096 38.5315 41.7668Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M34.0516 42.0809C34.209 42.1095 34.2949 42.4095 34.2234 42.7523C34.1661 43.0809 33.9657 43.3238 33.8083 43.2952C33.6365 43.2666 33.565 42.9809 33.6365 42.638C33.6938 42.2952 33.8798 42.0523 34.0516 42.0809Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M40.8072 59.2095C40.9073 58.781 41.0075 58.3524 41.0934 57.9238C41.4942 59.2381 41.9951 60.4095 42.725 61.081C43.0542 61.381 43.226 61.481 43.3405 61.581C43.4693 61.5524 43.7269 61.4953 44.0704 61.5238C44.4712 61.5524 44.7431 61.9524 44.8719 62.3667C44.9435 62.581 44.9578 62.9096 44.8147 62.981C44.8576 62.8524 44.829 62.7667 44.7145 62.781C44.6716 62.6953 44.6143 62.5667 44.5571 62.3953C44.4712 62.1524 44.0418 61.9524 43.7842 61.9524C43.4693 61.9524 43.1401 62.1238 42.8539 62.381C42.768 62.3524 42.6535 62.4381 42.6678 62.6238C42.3959 62.2095 42.9397 61.881 43.0685 61.7524C42.8252 61.6095 42.3386 61.2095 42.1096 61.0095C41.5085 60.4667 41.2652 59.8953 40.8072 59.2095Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M33.1642 59.2095C33.064 58.781 32.9638 58.3524 32.878 57.9238C32.4629 59.2381 31.962 60.4095 31.2463 61.081C30.9171 61.381 30.7454 61.481 30.6309 61.581C30.5021 61.5524 30.2588 61.4953 29.9009 61.5238C29.5002 61.5524 29.2426 61.9524 29.0994 62.3667C29.0279 62.581 29.0136 62.9096 29.171 62.981C29.1138 62.8524 29.1567 62.7667 29.2569 62.781C29.2998 62.6953 29.3571 62.5667 29.4143 62.3953C29.5002 62.1524 29.9296 61.9524 30.1872 61.9524C30.5164 61.9524 30.8313 62.1238 31.1175 62.381C31.2034 62.3524 31.3179 62.4381 31.3036 62.6238C31.5755 62.2095 31.0316 61.881 30.9171 61.7524C31.1605 61.6095 31.6471 61.2095 31.8761 61.0095C32.4772 60.4667 32.7062 59.8953 33.1642 59.2095Z",
                        fill: "white",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M73.2109 40.8667C71.9944 41.8096 70.878 42.6096 70.2196 43.7667C69.4896 45.0524 70.5201 45.8381 71.4648 44.981C72.4667 44.0667 72.8817 42.2953 73.2109 40.8667Z",
                        fill: "#D2AB67",
                      },
                    }),
                    t._v(" "),
                    n("path", {
                      attrs: {
                        d: "M70.7062 39.6952C70.0908 41.0523 71.2072 41.7237 72.0659 40.7952C72.6098 40.1809 72.9247 39.2809 73.1251 38.3237C72.1089 38.8952 71.4791 39.338 70.7062 39.6952Z",
                        fill: "#D2AB67",
                      },
                    }),
                  ]
                ),
                t._v(" "),
                n("div", { staticClass: "footer_main_item_title" }, [
                  n(
                    "div",
                    { staticClass: "footer_main_item_title_essential" },
                    [t._v("Open Budget")]
                  ),
                  t._v(" "),
                  n("div", { staticClass: "footer_main_item_title_rest" }, [
                    t._v("\n        " + t._s(t.$t("portal")) + "\n      "),
                  ]),
                ]),
              ]),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        );
      n.default = o.exports;
    },
    function (t, n, e) {
      "use strict";
      e.r(n);
      var i = {},
        a = e(15),
        o = Object(a.a)(
          i,
          function () {
            var t = this,
              n = t._self._c;
            return n("div", { staticClass: "footer_copy" }, [
              n("div", { staticClass: "footer_copy_item_1" }, [
                t._v("© 2023 " + t._s(t.$t("allRightReserved"))),
              ]),
              t._v(" "),
              n("div", { staticClass: "footer_copy_item_2" }, [
                t._v("\n    " + t._s(t.$t("siteDevelopment")) + " "),
                n("a", { attrs: { href: "" } }, [t._v(t._s(t.$t("fooCopy")))]),
              ]),
              t._v(" "),
              n("div", [
                n(
                  "a",
                  {
                    attrs: {
                      href: "http://www.uz/ru/res/visitor/index?id=43542",
                      target: "_blank",
                    },
                  },
                  [
                    n("img", {
                      directives: [
                        { name: "lazy-load", rawName: "v-lazy-load" },
                      ],
                      attrs: {
                        "data-src":
                          "https://cnt0.www.uz/counter/collect?id=43542&pg=http%3A//uzinfocom.uz&&col=133E43&t=ffffff&p=86C439",
                        border: "0",
                        alt: "Топ рейтинг www.uz",
                      },
                    }),
                  ]
                ),
              ]),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        );
      n.default = o.exports;
    },
    function (t, n, e) {
      "use strict";
      e.r(n);
      var i = e(15),
        a = Object(i.a)(
          {},
          function () {
            var t = this,
              n = t._self._c;
            return n(
              "div",
              { staticClass: "header-nav" },
              [
                n("b-container", [
                  n(
                    "div",
                    { staticClass: "header-nav__main" },
                    [
                      n(
                        "nuxt-link",
                        {
                          staticClass: "header-nav__logo",
                          attrs: { to: t.localePath("/") },
                        },
                        [
                          n(
                            "svg",
                            {
                              staticClass: "header-nav__logo__image",
                              attrs: {
                                width: "1581",
                                height: "619",
                                viewBox: "0 0 1581 619",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                              },
                            },
                            [
                              n("path", {
                                attrs: {
                                  d: "M732.1 283.401C716.2 283.401 703.2 278.501 693 268.801C682.8 259.101 677.7 246.701 677.7 231.501C677.7 216.401 682.8 204.001 693 194.201C703.2 184.501 716.2 179.601 732.1 179.601C747.9 179.601 760.8 184.501 771 194.201C781.1 203.901 786.2 216.301 786.2 231.501C786.2 246.601 781.1 259.001 771 268.801C760.9 278.601 747.9 283.401 732.1 283.401ZM713.5 250.501C718.4 255.501 724.7 258.001 732.2 258.001C739.7 258.001 745.9 255.501 750.7 250.501C755.5 245.501 758 239.201 758 231.501C758 223.801 755.6 217.501 750.7 212.501C745.9 207.501 739.7 205.001 732.2 205.001C724.7 205.001 718.5 207.501 713.5 212.501C708.6 217.501 706.1 223.801 706.1 231.501C706.1 239.201 708.5 245.601 713.5 250.501Z",
                                  fill: "#026C81",
                                },
                              }),
                              t._v(" "),
                              n("path", {
                                attrs: {
                                  d: "M842.9 202.2C854.5 202.2 864.099 206 871.599 213.6C879.099 221.2 882.8 230.9 882.8 242.8C882.8 254.6 879.099 264.4 871.599 272C864.099 279.6 854.6 283.4 842.9 283.4C836.1 283.4 829.9 281.7 824.3 278.3V308.3H798.5V204.7H816.3L819.5 210.8C826.1 205.1 833.9 202.2 842.9 202.2ZM839.4 260.3C844.3 260.3 848.299 258.6 851.599 255.3C854.799 252 856.5 247.8 856.5 242.8C856.5 237.8 854.899 233.7 851.599 230.3C848.399 227 844.3 225.3 839.4 225.3C834.5 225.3 830.499 227 827.199 230.3C823.999 233.6 822.3 237.8 822.3 242.8C822.3 246.1 823 249.1 824.5 251.7C826 254.4 827.999 256.5 830.599 258C833.299 259.5 836.2 260.3 839.4 260.3Z",
                                  fill: "#026C81",
                                },
                              }),
                              t._v(" "),
                              n("path", {
                                attrs: {
                                  d: "M973.2 242.1C973.2 244.3 973 246.6 972.6 249H916.1C916.9 253.3 918.7 256.6 921.4 258.9C924.1 261.2 927.5 262.3 931.6 262.3C933.7 262.3 935.6 262 937.4 261.5C939.2 260.9 940.8 260.1 942.1 259C943.5 257.9 944.6 256.6 945.4 255.1H971.5C968.9 263.8 964 270.7 956.8 275.8C949.6 280.9 941.2 283.4 931.6 283.4C919.8 283.4 909.9 279.5 902.1 271.8C894.3 264 890.3 254.4 890.3 242.8C890.3 235.1 892.1 228.1 895.7 221.9C899.3 215.7 904.2 210.9 910.5 207.4C916.8 203.9 923.8 202.2 931.6 202.2C939.7 202.2 946.9 204 953.2 207.5C959.5 211 964.4 215.8 967.9 221.9C971.5 227.9 973.2 234.7 973.2 242.1ZM931.7 222.8C927.9 222.8 924.8 223.8 922.2 225.8C919.6 227.8 917.8 230.7 916.6 234.5H947.5C945.1 226.7 939.8 222.8 931.7 222.8Z",
                                  fill: "#026C81",
                                },
                              }),
                              t._v(" "),
                              n("path", {
                                attrs: {
                                  d: "M1031.1 202.5C1039.9 202.5 1047 205.401 1052.3 211.201C1057.6 217.001 1060.3 224.801 1060.3 234.401V280.8H1034.1V238C1034.1 229.2 1030.8 224.8 1024.2 224.8C1021.5 224.8 1019.1 225.4 1017.2 226.6C1015.3 227.8 1013.8 229.601 1012.8 231.901C1011.8 234.201 1011.3 237 1011.3 240.3V280.901H985.1V204.8H1003.4L1007.1 212.701C1013.2 205.901 1021.2 202.5 1031.1 202.5Z",
                                  fill: "#026C81",
                                },
                              }),
                              t._v(" "),
                              n("path", {
                                attrs: {
                                  d: "M1137.2 229.4C1141.5 231.6 1144.9 234.7 1147.4 238.9C1149.9 243.1 1151.1 247.8 1151.1 253.2C1151.1 260.9 1148.2 267.4 1142.3 272.8C1136.4 278.2 1129.3 280.8 1120.8 280.8H1080.2V182.2H1119.9C1128.2 182.2 1135 184.6 1140.4 189.5C1145.8 194.3 1148.5 200.4 1148.5 207.6C1148.5 211.9 1147.5 216.1 1145.4 220.1C1143.5 224 1140.7 227.2 1137.2 229.4ZM1132.6 210C1132.6 206.2 1131.3 203.2 1128.7 200.8C1126.1 198.4 1122.9 197.2 1119 197.2H1096.2V222.8H1119C1122.9 222.8 1126.2 221.6 1128.7 219.1C1131.3 216.7 1132.6 213.6 1132.6 210ZM1119.9 265.3C1124.2 265.3 1127.8 264 1130.5 261.4C1133.3 258.8 1134.7 255.4 1134.7 251.4C1134.7 247.4 1133.3 244 1130.5 241.4C1127.7 238.8 1124.2 237.5 1119.9 237.5H1096.2V265.4H1119.9V265.3Z",
                                  fill: "#35BEDA",
                                },
                              }),
                              t._v(" "),
                              n("path", {
                                attrs: {
                                  d: "M1202.5 282.701C1192.1 282.701 1183.7 279.601 1177.4 273.401C1171.1 267.201 1168 259.001 1168 248.701V204.701H1183.6V246.401C1183.6 253.101 1185.3 258.301 1188.7 262.001C1192.1 265.801 1196.7 267.601 1202.5 267.601C1208.4 267.601 1213.1 265.701 1216.5 261.901C1219.9 258.101 1221.6 252.901 1221.6 246.301V204.601H1237.2V248.601C1237.2 258.801 1234.1 267.101 1227.8 273.301C1221.4 279.601 1213 282.701 1202.5 282.701Z",
                                  fill: "#35BEDA",
                                },
                              }),
                              t._v(" "),
                              n("path", {
                                attrs: {
                                  d: "M1317.2 177.4H1332.8V280.8H1321L1319 272.2C1311.7 279.2 1302.7 282.6 1292.1 282.6C1280.6 282.6 1271.2 278.8 1263.7 271.3C1256.2 263.7 1252.5 254.2 1252.5 242.8C1252.5 231.3 1256.2 221.8 1263.7 214.3C1271.2 206.7 1280.6 203 1292.1 203C1301.8 203 1310.1 206 1317.2 211.9V177.4V177.4ZM1275.6 260.6C1280.3 265.3 1286.2 267.7 1293.4 267.7C1300.5 267.7 1306.5 265.3 1311.2 260.6C1315.9 255.9 1318.3 249.9 1318.3 242.8C1318.3 238.1 1317.2 233.9 1315.1 230C1312.9 226.2 1310 223.2 1306.2 221.1C1302.4 218.9 1298.1 217.9 1293.4 217.9C1288.7 217.9 1284.5 219 1280.6 221.1C1276.8 223.3 1273.8 226.2 1271.7 230C1269.6 233.8 1268.5 238.1 1268.5 242.8C1268.6 249.9 1270.9 255.9 1275.6 260.6Z",
                                  fill: "#35BEDA",
                                },
                              }),
                              t._v(" "),
                              n("path", {
                                attrs: {
                                  d: "M1417.4 204.7H1427.7V270.8C1427.7 278.9 1426.2 285.9 1423.1 291.7C1420 297.6 1415.7 302.1 1409.9 305.2C1404.2 308.3 1397.4 309.9 1389.6 309.9C1379.9 309.9 1371.8 307.5 1365.2 302.8C1358.6 298.1 1354.3 291.5 1352.4 283H1368C1369.4 287.1 1372.1 290.3 1376.1 292.6C1380.1 294.9 1384.5 296 1389.4 296C1396.2 296 1401.7 293.9 1405.9 289.8C1410.1 285.7 1412.2 280 1412.2 272.9V269.5C1405.2 275.5 1396.7 278.5 1387 278.5C1376.5 278.5 1367.6 274.9 1360.3 267.6C1353 260.3 1349.4 251.4 1349.4 240.8C1349.4 230.2 1353 221.2 1360.3 213.9C1367.6 206.6 1376.5 202.9 1387 202.9C1398.2 202.9 1407.4 206.8 1414.8 214.6L1417.4 204.7ZM1388.9 264.1C1392.2 264.1 1395.3 263.5 1398.2 262.3C1401.1 261.1 1403.6 259.5 1405.7 257.5C1407.8 255.5 1409.4 253 1410.6 250.1C1411.8 247.2 1412.4 244.1 1412.4 240.8C1412.4 234 1410.2 228.4 1405.8 224C1401.4 219.6 1395.8 217.4 1389 217.4C1382.2 217.4 1376.6 219.6 1372.2 224.1C1367.7 228.6 1365.5 234.1 1365.5 240.8C1365.5 247.5 1367.7 253 1372.2 257.4C1376.5 261.9 1382.1 264.1 1388.9 264.1Z",
                                  fill: "#35BEDA",
                                },
                              }),
                              t._v(" "),
                              n("path", {
                                attrs: {
                                  d: "M1522.2 242.9C1522.2 244.3 1522.1 246 1521.9 248.1H1460.2C1461.1 254.2 1463.7 259 1467.9 262.6C1472.1 266.2 1477.3 268 1483.5 268C1486.5 268 1489.3 267.6 1492 266.7C1494.6 265.8 1497 264.5 1499 262.9C1501 261.3 1502.7 259.3 1504 256.9H1520.5C1517.5 265 1512.7 271.3 1506.1 275.9C1499.5 280.5 1492 282.7 1483.6 282.7C1472.4 282.7 1463.1 278.9 1455.6 271.3C1448.1 263.7 1444.4 254.2 1444.4 242.8C1444.4 231.4 1448.1 221.9 1455.6 214.3C1463.1 206.7 1472.4 202.9 1483.6 202.9C1491.2 202.9 1498 204.7 1503.9 208.3C1509.8 211.9 1514.4 216.8 1517.6 222.8C1520.6 228.9 1522.2 235.6 1522.2 242.9ZM1483.4 217C1477.6 217 1472.6 218.6 1468.5 221.9C1464.4 225.2 1461.7 229.7 1460.4 235.4H1506.5C1505.6 231.5 1504 228.2 1501.9 225.5C1499.7 222.7 1497.1 220.6 1493.9 219.2C1490.8 217.7 1487.3 217 1483.4 217Z",
                                  fill: "#35BEDA",
                                },
                              }),
                              t._v(" "),
                              n("path", {
                                attrs: {
                                  d: "M1571.8 266.6H1580.4V280.8H1568.8C1563.3 280.8 1558.5 279.7 1554.4 277.6C1550.4 275.4 1547.3 272.301 1545.1 268.201C1542.9 264.101 1541.9 259.3 1541.9 253.8V218.201H1528.2V215.201L1554.7 187H1557.4V204.8H1579.9V218.201H1557.5V252.6C1557.5 257.1 1558.7 260.6 1561.2 263C1563.7 265.4 1567.2 266.6 1571.8 266.6Z",
                                  fill: "#35BEDA",
                                },
                              }),
                              t._v(" "),
                              n("path", {
                                attrs: {
                                  d: "M720.8 368.8C715.9 373.6 709.8 376 702.4 376C695 376 688.9 373.6 684 368.8C679.1 364 676.7 358 676.7 350.7C676.7 343.4 679.1 337.4 684 332.6C688.9 327.8 695 325.4 702.4 325.4C709.8 325.4 715.9 327.8 720.8 332.6C725.7 337.4 728.1 343.4 728.1 350.7C728.1 358 725.6 364 720.8 368.8ZM688.5 364.4C692.2 368.1 696.8 369.9 702.4 369.9C708 369.9 712.6 368.1 716.3 364.4C720 360.7 721.8 356.1 721.8 350.6C721.8 345 720 340.4 716.3 336.8C712.6 333.1 708 331.3 702.4 331.3C696.8 331.3 692.2 333.1 688.5 336.8C684.8 340.5 683 345.1 683 350.6C683 356.2 684.9 360.7 688.5 364.4Z",
                                  fill: "#026C81",
                                },
                              }),
                              t._v(" "),
                              n("path", {
                                attrs: {
                                  d: "M736.3 343.201V326H741.8V343.1H736.3V343.201Z",
                                  fill: "#026C81",
                                },
                              }),
                              t._v(" "),
                              n("path", {
                                attrs: {
                                  d: "M758.099 369.5H778.099V375.1H748.5V374.2L768.599 342.8H749.799V337.3H778V338.3L758.099 369.5Z",
                                  fill: "#026C81",
                                },
                              }),
                              t._v(" "),
                              n("path", {
                                attrs: {
                                  d: "M806.4 336.5C812 336.5 816.7 338.4 820.4 342.1C824.1 345.8 825.9 350.5 825.9 356.2C825.9 361.8 824.1 366.5 820.4 370.3C816.7 374.1 812.1 375.9 806.4 375.9C800.5 375.9 795.6 373.8 791.8 369.7L791 375.1H786.4V323.8H792.4V342.1C796.1 338.4 800.7 336.5 806.4 336.5ZM805.9 370.2C808.6 370.2 810.9 369.6 813 368.4C815.1 367.2 816.7 365.5 817.9 363.4C819.1 361.3 819.7 358.9 819.7 356.2C819.7 352.2 818.4 348.9 815.8 346.2C813.2 343.5 809.9 342.2 805.9 342.2C801.9 342.2 798.6 343.5 795.9 346.2C793.2 348.9 791.9 352.2 791.9 356.2C791.9 357.7 792.1 359.2 792.6 360.7C793 362.1 793.7 363.4 794.5 364.6C795.3 365.7 796.3 366.7 797.5 367.6C798.6 368.4 799.9 369.1 801.3 369.6C802.7 370.1 804.3 370.2 805.9 370.2Z",
                                  fill: "#026C81",
                                },
                              }),
                              t._v(" "),
                              n("path", {
                                attrs: {
                                  d: "M870.199 356.401C870.199 356.901 870.199 357.6 870.099 358.6H837.8C838.3 362.1 839.699 364.9 842.099 367C844.499 369.1 847.499 370.201 851.099 370.201C853.699 370.201 855.999 369.6 858.099 368.5C860.199 367.4 861.8 365.7 863 363.6H869.199C867.599 367.5 865.199 370.601 862.099 372.701C858.899 374.901 855.299 376 851.199 376C845.699 376 841.2 374.1 837.5 370.3C833.8 366.5 832 361.801 832 356.201C832 350.601 833.8 345.9 837.5 342.1C841.2 338.3 845.799 336.5 851.199 336.5C856.799 336.5 861.4 338.401 865 342.201C868.4 346.101 870.199 350.801 870.199 356.401ZM851.099 342.201C848.899 342.201 846.8 342.6 845 343.5C843.2 344.4 841.6 345.7 840.4 347.3C839.2 349 838.4 350.9 837.9 353H864.099C863.699 350.8 862.899 348.901 861.599 347.201C860.399 345.501 858.899 344.301 857.099 343.401C855.399 342.601 853.299 342.201 851.099 342.201Z",
                                  fill: "#026C81",
                                },
                              }),
                              t._v(" "),
                              n("path", {
                                attrs: {
                                  d: "M904 375.1L891.1 358.2H885.7V375.1H879.7V323.8H885.7V352.6H891.2L902.9 337.3H910.1L896.3 355.4L911.5 375.1H904V375.1Z",
                                  fill: "#026C81",
                                },
                              }),
                              t._v(" "),
                              n("path", {
                                attrs: {
                                  d: "M917.5 330.8V324H923.9V330.8H917.5ZM917.8 375.1V337.3H923.8V375.1H917.8Z",
                                  fill: "#026C81",
                                },
                              }),
                              t._v(" "),
                              n("path", {
                                attrs: {
                                  d: "M948.4 352.8C949.7 353 950.7 353.1 951.3 353.3C951.9 353.4 952.8 353.6 954 353.9C955.2 354.2 956.1 354.5 956.8 354.8C957.5 355.1 958.2 355.6 959.1 356.2C960 356.8 960.6 357.4 961 358.2C961.4 359 961.8 359.8 962.1 360.9C962.4 362 962.6 363.1 962.6 364.4C962.6 367.9 961.2 370.8 958.5 372.9C955.8 375 952.2 376.1 947.7 376.1C944.7 376.1 942.1 375.6 939.9 374.6C937.7 373.6 935.9 372.1 934.7 370.3C933.4 368.4 932.8 366.2 932.7 363.7H938.5C938.6 365.9 939.6 367.7 941.3 368.8C943 370 945.2 370.6 947.9 370.6C950.6 370.6 952.7 370.1 954.3 369C955.9 367.9 956.7 366.5 956.7 364.7C956.7 363.9 956.5 363.1 956.1 362.5C955.7 361.8 955.3 361.3 954.8 360.9C954.3 360.5 953.5 360.1 952.5 359.8C951.5 359.5 950.6 359.2 949.9 359.1C949.2 359 948.2 358.8 946.9 358.5C946.1 358.4 945.4 358.2 944.9 358.2C944.4 358.1 943.8 358 943 357.8C942.2 357.6 941.6 357.5 941.1 357.3C940.6 357.1 940 356.9 939.3 356.7C938.6 356.4 938 356.2 937.6 355.9C937.2 355.6 936.7 355.2 936.2 354.9C935.7 354.5 935.2 354.1 934.9 353.6C934.6 353.1 934.3 352.6 934 352C933.7 351.4 933.5 350.8 933.4 350C933.3 349.3 933.2 348.5 933.2 347.7C933.2 344.4 934.5 341.8 937.1 339.8C939.7 337.8 943.2 336.8 947.4 336.8C951.7 336.8 955.1 337.9 957.7 340C960.3 342.1 961.6 345 961.7 348.5H956.1C956 346.4 955.1 344.9 953.6 343.8C952.1 342.7 950 342.2 947.3 342.2C944.7 342.2 942.7 342.7 941.2 343.7C939.7 344.7 938.9 346 938.9 347.7C938.9 348.4 939.1 349.1 939.5 349.7C939.9 350.3 940.3 350.7 940.8 351.1C941.3 351.4 942 351.8 943 352.1C944 352.4 944.8 352.6 945.5 352.7C946.2 352.4 947.1 352.6 948.4 352.8ZM986.9 369.6H991V375.1H986.1C983.4 375.1 981.1 374.6 979.1 373.5C977.1 372.5 975.6 370.9 974.6 368.9C973.6 366.9 973 364.5 973 361.8V342.6H966.3V341.6L978 329.3H978.9V337.3H990.7V342.7H979V361.7C979 363.4 979.3 364.9 979.9 366C980.5 367.2 981.4 368.1 982.6 368.7C983.8 369.3 985.2 369.6 986.9 369.6Z",
                                  fill: "#026C81",
                                },
                              }),
                              t._v(" "),
                              n("path", {
                                attrs: {
                                  d: "M1016.9 376C1013.2 376 1009.8 375.101 1006.7 373.401C1003.6 371.701 1001.2 369.3 999.5 366.3C997.8 363.3 996.9 359.901 996.9 356.201C996.9 350.501 998.8 345.8 1002.6 342.1C1006.4 338.4 1011.2 336.5 1016.9 336.5C1020.7 336.5 1024.1 337.4 1027.2 339.1C1030.3 340.8 1032.7 343.201 1034.4 346.201C1036.2 349.201 1037 352.6 1037 356.3C1037 361.9 1035.1 366.601 1031.3 370.401C1027.5 374.101 1022.7 376 1016.9 376ZM1007 366.3C1009.6 368.9 1013 370.3 1017 370.3C1021 370.3 1024.4 369 1027 366.3C1029.6 363.7 1031 360.3 1031 356.3C1031 352.2 1029.7 348.9 1027 346.3C1024.4 343.7 1021 342.3 1017 342.3C1013 342.3 1009.6 343.6 1007 346.3C1004.4 348.9 1003 352.3 1003 356.3C1003 360.3 1004.3 363.7 1007 366.3Z",
                                  fill: "#026C81",
                                },
                              }),
                              t._v(" "),
                              n("path", {
                                attrs: {
                                  d: "M1065 336.5C1069.4 336.5 1073 338 1075.6 341C1078.2 344 1079.6 347.8 1079.6 352.5V375.1H1073.6V353.901C1073.6 351.301 1073.2 349.201 1072.4 347.401C1071.6 345.601 1070.5 344.3 1069 343.3C1067.5 342.4 1065.6 341.901 1063.4 341.901C1060.2 341.901 1057.5 343.1 1055.3 345.5C1053.1 347.9 1052 350.901 1052 354.401V375.1H1046V337.3H1050.2L1051.4 343.3C1052.3 341.9 1053.5 340.6 1054.8 339.6C1056.2 338.6 1057.7 337.8 1059.4 337.3C1061.2 336.8 1063 336.5 1065 336.5Z",
                                  fill: "#026C81",
                                },
                              }),
                              t._v(" "),
                              n("path", {
                                attrs: {
                                  d: "M1138.5 375.1L1127.3 355.9H1116.1V375.1H1110V326.1H1128.5C1133.1 326.1 1136.9 327.5 1139.9 330.3C1142.9 333.1 1144.4 336.7 1144.4 341C1144.4 344.4 1143.4 347.4 1141.5 349.9C1139.5 352.4 1136.9 354.2 1133.7 355.1L1145.4 375H1138.5V375.1ZM1116.1 332V350.2H1128.3C1131.2 350.2 1133.6 349.3 1135.5 347.6C1137.4 345.9 1138.3 343.7 1138.3 341.1C1138.3 338.5 1137.4 336.3 1135.5 334.6C1133.6 332.9 1131.2 332 1128.3 332H1116.1Z",
                                  fill: "#026C81",
                                },
                              }),
                              t._v(" "),
                              n("path", {
                                attrs: {
                                  d: "M1189 356.401C1189 356.901 1189 357.6 1188.9 358.6H1156.6C1157.1 362.1 1158.5 364.9 1160.9 367C1163.3 369.1 1166.3 370.201 1169.9 370.201C1172.5 370.201 1174.8 369.6 1176.9 368.5C1178.9 367.4 1180.6 365.7 1181.8 363.6H1188C1186.4 367.5 1184 370.601 1180.9 372.701C1177.7 374.901 1174.1 376 1170 376C1164.5 376 1160 374.1 1156.3 370.3C1152.6 366.5 1150.8 361.801 1150.8 356.201C1150.8 350.601 1152.6 345.9 1156.3 342.1C1160 338.3 1164.6 336.5 1170 336.5C1175.6 336.5 1180.2 338.401 1183.8 342.201C1187.2 346.101 1189 350.801 1189 356.401ZM1169.9 342.201C1167.7 342.201 1165.6 342.6 1163.8 343.5C1162 344.4 1160.4 345.7 1159.2 347.3C1158 349 1157.2 350.9 1156.7 353H1182.9C1182.5 350.8 1181.7 348.901 1180.5 347.201C1179.3 345.501 1177.8 344.301 1175.9 343.401C1174.2 342.601 1172.1 342.201 1169.9 342.201Z",
                                  fill: "#026C81",
                                },
                              }),
                              t._v(" "),
                              n("path", {
                                attrs: {
                                  d: "M1209.9 376C1206.9 376 1204.3 375.5 1202.1 374.5C1199.9 373.5 1198.1 372.001 1196.9 370.201C1195.6 368.301 1195 366.1 1194.9 363.6H1200.7C1200.8 365.8 1201.8 367.501 1203.5 368.701C1205.2 369.901 1207.4 370.5 1210.1 370.5C1212.8 370.5 1214.9 370.001 1216.5 368.901C1218.1 367.801 1218.9 366.4 1218.9 364.6C1218.9 363.9 1218.8 363.301 1218.6 362.701C1218.4 362.101 1218 361.701 1217.5 361.201C1217 360.801 1216.5 360.4 1216 360.1C1215.5 359.8 1214.8 359.6 1213.9 359.3C1213 359.1 1212.3 358.9 1211.7 358.8C1211.1 358.7 1210.2 358.5 1209.1 358.3C1207.9 358.1 1207 358 1206.3 357.8C1205.6 357.7 1204.8 357.4 1203.6 357.1C1202.5 356.8 1201.6 356.501 1200.9 356.201C1200.2 355.901 1199.5 355.401 1198.7 354.901C1197.9 354.301 1197.3 353.7 1196.9 353.1C1196.5 352.4 1196.1 351.601 1195.8 350.701C1195.5 349.701 1195.3 348.601 1195.3 347.401C1195.3 345.801 1195.6 344.3 1196.3 343C1197 341.6 1197.9 340.5 1199.2 339.5C1200.4 338.5 1201.9 337.8 1203.7 337.3C1205.5 336.8 1207.4 336.5 1209.5 336.5C1213.8 336.5 1217.2 337.5 1219.8 339.6C1222.4 341.7 1223.7 344.5 1223.8 348.1H1218.2C1218.1 346.7 1217.7 345.6 1217 344.6C1216.3 343.6 1215.3 342.901 1214 342.401C1212.7 341.901 1211.2 341.701 1209.5 341.701C1207.8 341.701 1206.3 341.901 1205 342.401C1203.7 342.801 1202.8 343.5 1202.1 344.3C1201.4 345.1 1201.1 346.101 1201.1 347.201C1201.1 347.901 1201.3 348.601 1201.7 349.201C1202.1 349.801 1202.5 350.2 1203 350.6C1203.5 350.9 1204.2 351.3 1205.2 351.6C1206.2 351.9 1207 352.101 1207.7 352.201C1208.4 352.301 1209.3 352.501 1210.6 352.701C1211.9 352.901 1212.9 353.001 1213.5 353.201C1214.1 353.301 1215 353.5 1216.2 353.8C1217.4 354.1 1218.3 354.401 1219 354.701C1219.7 355.001 1220.4 355.5 1221.3 356.1C1222.2 356.7 1222.8 357.3 1223.2 358.1C1223.6 358.9 1224 359.7 1224.3 360.8C1224.6 361.9 1224.8 363 1224.8 364.3C1224.8 367.8 1223.4 370.7 1220.7 372.8C1217.9 374.9 1214.3 376 1209.9 376Z",
                                  fill: "#026C81",
                                },
                              }),
                              t._v(" "),
                              n("path", {
                                attrs: {
                                  d: "M1253.8 336.5C1259.4 336.5 1264.1 338.4 1267.8 342.1C1271.5 345.8 1273.3 350.501 1273.3 356.201C1273.3 361.801 1271.5 366.5 1267.8 370.3C1264.1 374.1 1259.5 375.901 1253.8 375.901C1248.1 375.901 1243.4 373.9 1239.7 370V388.5H1233.7V337.201H1237.8L1239 343C1240.8 340.9 1242.9 339.3 1245.5 338.1C1248.1 337.1 1250.8 336.5 1253.8 336.5ZM1253.4 370.201C1257.4 370.201 1260.7 368.901 1263.3 366.201C1265.9 363.501 1267.2 360.201 1267.2 356.201C1267.2 352.201 1265.9 348.901 1263.3 346.201C1260.7 343.501 1257.4 342.201 1253.4 342.201C1249.4 342.201 1246.1 343.501 1243.4 346.201C1240.8 348.901 1239.4 352.201 1239.4 356.201C1239.4 358.801 1240 361.2 1241.2 363.3C1242.4 365.4 1244.1 367.1 1246.2 368.3C1248.4 369.6 1250.8 370.201 1253.4 370.201Z",
                                  fill: "#026C81",
                                },
                              }),
                              t._v(" "),
                              n("path", {
                                attrs: {
                                  d: "M1298.4 376C1293.3 376 1289.2 374.5 1286.2 371.4C1283.1 368.3 1281.6 364.3 1281.6 359.2V337.4H1287.5V358.3C1287.5 360.8 1287.9 362.9 1288.8 364.7C1289.7 366.5 1290.9 367.9 1292.6 368.9C1294.2 369.9 1296.1 370.4 1298.3 370.4C1301.7 370.4 1304.3 369.3 1306.2 367.2C1308.1 365.1 1309.1 362.1 1309.1 358.4V337.5H1315V359.3C1315 364.4 1313.5 368.5 1310.5 371.5C1307.5 374.5 1303.5 376 1298.4 376Z",
                                  fill: "#026C81",
                                },
                              }),
                              t._v(" "),
                              n("path", {
                                attrs: {
                                  d: "M1346.5 336.5C1352.1 336.5 1356.8 338.4 1360.5 342.1C1364.2 345.8 1366 350.5 1366 356.2C1366 361.8 1364.2 366.5 1360.5 370.3C1356.8 374.1 1352.2 375.9 1346.5 375.9C1340.6 375.9 1335.7 373.8 1331.9 369.7L1331.1 375.1H1326.5V323.8H1332.5V342.1C1336.2 338.4 1340.8 336.5 1346.5 336.5ZM1346 370.2C1348.7 370.2 1351 369.6 1353.1 368.4C1355.2 367.2 1356.8 365.5 1358 363.4C1359.2 361.3 1359.8 358.9 1359.8 356.2C1359.8 352.2 1358.5 348.9 1355.9 346.2C1353.3 343.5 1350 342.2 1346 342.2C1342 342.2 1338.7 343.5 1336 346.2C1333.3 348.9 1332 352.2 1332 356.2C1332 357.7 1332.2 359.2 1332.7 360.7C1333.1 362.1 1333.8 363.4 1334.6 364.6C1335.4 365.7 1336.4 366.7 1337.6 367.6C1338.7 368.4 1340 369.1 1341.4 369.6C1342.9 370 1344.4 370.2 1346 370.2Z",
                                  fill: "#026C81",
                                },
                              }),
                              t._v(" "),
                              n("path", {
                                attrs: {
                                  d: "M1375 375.1V323.8H1381V375.1H1375Z",
                                  fill: "#026C81",
                                },
                              }),
                              t._v(" "),
                              n("path", {
                                attrs: {
                                  d: "M1392.6 330.8V324H1399V330.8H1392.6ZM1392.9 375.1V337.3H1398.9V375.1H1392.9Z",
                                  fill: "#026C81",
                                },
                              }),
                              t._v(" "),
                              n("path", {
                                attrs: {
                                  d: "M1435.7 375.1L1422.7 358.2H1417.3V375.1H1411.4V323.8H1417.3V352.6H1422.8L1434.5 337.3H1441.7L1427.9 355.4L1443.1 375.1H1435.7V375.1Z",
                                  fill: "#026C81",
                                },
                              }),
                              t._v(" "),
                              n("path", {
                                attrs: {
                                  d: "M1480.7 337.3H1485.5V375.1H1480.5L1479.9 369.4C1478.1 371.5 1476 373.1 1473.4 374.3C1470.9 375.4 1468.1 376 1465 376C1459.4 376 1454.8 374.1 1451.1 370.4C1447.4 366.6 1445.5 361.9 1445.5 356.3C1445.5 350.7 1447.4 346 1451.1 342.2C1454.8 338.4 1459.5 336.6 1465 336.6C1468.1 336.6 1470.9 337.2 1473.4 338.4C1475.9 339.6 1478.1 341.2 1479.9 343.3L1480.7 337.3ZM1455.5 366.2C1458.1 368.9 1461.5 370.2 1465.5 370.2C1469.5 370.2 1472.8 368.9 1475.4 366.2C1478 363.5 1479.3 360.2 1479.3 356.2C1479.3 352.2 1478 348.9 1475.4 346.2C1472.8 343.5 1469.5 342.2 1465.5 342.2C1461.5 342.2 1458.2 343.5 1455.5 346.2C1452.9 348.9 1451.5 352.2 1451.5 356.2C1451.6 360.2 1452.9 363.5 1455.5 366.2Z",
                                  fill: "#026C81",
                                },
                              }),
                              t._v(" "),
                              n("path", {
                                attrs: {
                                  d: "M1509.4 376C1506.4 376 1503.8 375.5 1501.6 374.5C1499.4 373.5 1497.6 372.001 1496.4 370.201C1495.1 368.301 1494.5 366.1 1494.4 363.6H1500.2C1500.3 365.8 1501.3 367.501 1503 368.701C1504.7 369.901 1506.9 370.5 1509.6 370.5C1512.3 370.5 1514.4 370.001 1516 368.901C1517.6 367.801 1518.4 366.4 1518.4 364.6C1518.4 363.9 1518.3 363.301 1518.1 362.701C1517.9 362.101 1517.5 361.701 1517 361.201C1516.5 360.801 1516 360.4 1515.5 360.1C1515 359.8 1514.3 359.6 1513.4 359.3C1512.5 359.1 1511.8 358.9 1511.2 358.8C1510.6 358.7 1509.7 358.5 1508.6 358.3C1507.4 358.1 1506.5 358 1505.8 357.8C1505.1 357.7 1504.3 357.4 1503.1 357.1C1502 356.8 1501.1 356.501 1500.4 356.201C1499.7 355.901 1499 355.401 1498.2 354.901C1497.4 354.301 1496.8 353.7 1496.4 353.1C1496 352.4 1495.6 351.601 1495.3 350.701C1495 349.701 1494.8 348.601 1494.8 347.401C1494.8 345.801 1495.1 344.3 1495.8 343C1496.5 341.6 1497.4 340.5 1498.7 339.5C1499.9 338.5 1501.4 337.8 1503.2 337.3C1505 336.8 1506.9 336.5 1509 336.5C1513.3 336.5 1516.7 337.5 1519.3 339.6C1521.9 341.7 1523.2 344.5 1523.3 348.1H1517.7C1517.6 346.7 1517.2 345.6 1516.5 344.6C1515.8 343.6 1514.8 342.901 1513.5 342.401C1512.2 341.901 1510.7 341.701 1509 341.701C1507.3 341.701 1505.8 341.901 1504.5 342.401C1503.2 342.801 1502.3 343.5 1501.6 344.3C1500.9 345.1 1500.6 346.101 1500.6 347.201C1500.6 347.901 1500.8 348.601 1501.2 349.201C1501.6 349.801 1502 350.2 1502.5 350.6C1503 350.9 1503.7 351.3 1504.7 351.6C1505.7 351.9 1506.5 352.101 1507.2 352.201C1507.9 352.301 1508.8 352.501 1510.1 352.701C1511.4 352.901 1512.4 353.001 1513 353.201C1513.6 353.301 1514.5 353.5 1515.7 353.8C1516.9 354.1 1517.8 354.401 1518.5 354.701C1519.2 355.001 1519.9 355.5 1520.8 356.1C1521.7 356.7 1522.3 357.3 1522.7 358.1C1523.1 358.9 1523.5 359.7 1523.8 360.8C1524.1 361.9 1524.3 363 1524.3 364.3C1524.3 367.8 1522.9 370.7 1520.2 372.8C1517.5 374.9 1513.9 376 1509.4 376Z",
                                  fill: "#026C81",
                                },
                              }),
                              t._v(" "),
                              n("path", {
                                attrs: {
                                  d: "M1533 330.8V324H1539.4V330.8H1533ZM1533.3 375.1V337.3H1539.3V375.1H1533.3Z",
                                  fill: "#026C81",
                                },
                              }),
                              t._v(" "),
                              n("path", {
                                attrs: {
                                  d: "M678.3 413.2V396H683.8V413.1H678.3V413.2ZM689.1 413.2V396H694.7V413.1H689.1V413.2Z",
                                  fill: "#026C81",
                                },
                              }),
                              t._v(" "),
                              n("path", {
                                attrs: {
                                  d: "M746.9 438.8C742 443.6 735.9 446 728.5 446C721.1 446 715 443.6 710.1 438.8C705.2 434 702.8 428 702.8 420.7C702.8 413.4 705.2 407.4 710.1 402.6C715 397.8 721.1 395.4 728.5 395.4C735.9 395.4 742 397.8 746.9 402.6C751.8 407.4 754.2 413.4 754.2 420.7C754.2 428 751.8 434 746.9 438.8ZM714.7 434.4C718.4 438.1 723 439.9 728.6 439.9C734.2 439.9 738.8 438.1 742.5 434.4C746.2 430.7 748 426.1 748 420.6C748 415 746.2 410.4 742.5 406.8C738.8 403.1 734.2 401.3 728.6 401.3C723 401.3 718.4 403.1 714.7 406.8C711 410.5 709.2 415.1 709.2 420.6C709.2 426.2 711 430.7 714.7 434.4Z",
                                  fill: "#026C81",
                                },
                              }),
                              t._v(" "),
                              n("path", {
                                attrs: {
                                  d: "M780.3 446C776.6 446 773.3 445.101 770.3 443.401C767.3 441.701 764.9 439.301 763.2 436.301C761.5 433.301 760.6 429.9 760.6 426.2C760.6 420.6 762.5 415.9 766.2 412.1C770 408.3 774.6 406.5 780.2 406.5C784.7 406.5 788.6 407.7 791.9 410.2C795.2 412.7 797.4 416 798.6 420.1H792.7C791.6 417.7 789.9 415.801 787.7 414.401C785.5 413.001 783 412.301 780.2 412.301C776.3 412.301 773.1 413.601 770.5 416.301C767.9 419.001 766.6 422.301 766.6 426.301C766.6 428.901 767.2 431.301 768.4 433.401C769.6 435.501 771.2 437.201 773.3 438.401C775.4 439.601 777.7 440.301 780.3 440.301C783.1 440.301 785.5 439.6 787.7 438.2C789.9 436.8 791.5 434.801 792.7 432.301H798.7C797.5 436.501 795.3 439.801 791.9 442.301C788.6 444.701 784.7 446 780.3 446Z",
                                  fill: "#026C81",
                                },
                              }),
                              t._v(" "),
                              n("path", {
                                attrs: {
                                  d: "M825.9 406.5C830.4 406.5 833.9 407.9 836.5 410.8C839.1 413.7 840.4 417.6 840.4 422.5V445.1H834.4V423.9C834.4 421.3 834 419.2 833.2 417.4C832.4 415.6 831.3 414.3 829.8 413.3C828.3 412.4 826.4 411.9 824.2 411.9C821 411.9 818.3 413.1 816.1 415.5C813.9 417.9 812.8 420.9 812.8 424.4V445.1H806.8V393.8H812.8V412.4C814.2 410.5 816.1 409.1 818.3 408C820.7 407 823.2 406.5 825.9 406.5Z",
                                  fill: "#026C81",
                                },
                              }),
                              t._v(" "),
                              n("path", {
                                attrs: {
                                  d: "M851.7 400.801V394H858.1V400.801H851.7ZM851.9 445.1V407.301H857.9V445.1H851.9Z",
                                  fill: "#026C81",
                                },
                              }),
                              t._v(" "),
                              n("path", {
                                attrs: {
                                  d: "M902.3 407.3H906.4V458.6H900.4V440.1C896.7 444 892 446 886.3 446C880.7 446 876.1 444.1 872.4 440.4C868.7 436.6 866.9 431.9 866.9 426.3C866.9 420.6 868.7 415.9 872.4 412.2C876.1 408.5 880.7 406.6 886.4 406.6C889.4 406.6 892.2 407.2 894.7 408.4C897.2 409.6 899.4 411.2 901.2 413.2L902.3 407.3ZM876.8 436.3C879.4 439 882.7 440.3 886.7 440.3C890.7 440.3 894 439 896.7 436.3C899.3 433.6 900.7 430.3 900.7 426.3C900.7 422.3 899.4 419 896.7 416.3C894.1 413.6 890.7 412.3 886.7 412.3C884.7 412.3 882.9 412.7 881.2 413.4C879.5 414.1 878 415.1 876.8 416.3C875.6 417.5 874.6 419 873.9 420.7C873.2 422.5 872.8 424.3 872.8 426.3C872.9 430.3 874.2 433.6 876.8 436.3Z",
                                  fill: "#026C81",
                                },
                              }),
                              t._v(" "),
                              n("path", {
                                attrs: {
                                  d: "M964.5 419.7C966.8 420.7 968.6 422.2 969.9 424.4C971.2 426.5 971.9 428.9 971.9 431.6C971.9 435.4 970.5 438.6 967.6 441.2C964.7 443.8 961.2 445.1 957 445.1H937.4V396.1H956.7C960.7 396.1 964 397.3 966.6 399.7C969.2 402.1 970.5 405.1 970.5 408.7C970.5 410.9 970 413 968.9 415.1C967.8 417.2 966.3 418.7 964.5 419.7ZM964.3 409.5C964.3 408.1 964 406.8 963.3 405.7C962.6 404.6 961.7 403.7 960.5 403.1C959.3 402.5 958 402.2 956.6 402.2H943.4V416.9H956.6C958.7 416.9 960.6 416.2 962 414.8C963.6 413.3 964.3 411.6 964.3 409.5ZM956.9 439.1C959.3 439.1 961.4 438.3 963 436.8C964.6 435.3 965.5 433.3 965.5 431C965.5 428.7 964.7 426.8 963 425.3C961.4 423.8 959.3 423 956.9 423H943.4V439.2H956.9V439.1Z",
                                  fill: "#026C81",
                                },
                              }),
                              t._v(" "),
                              n("path", {
                                attrs: {
                                  d: "M997.6 446C992.5 446 988.4 444.5 985.4 441.4C982.3 438.3 980.8 434.3 980.8 429.2V407.4H986.7V428.3C986.7 430.8 987.1 432.9 988 434.7C988.9 436.5 990.1 437.9 991.8 438.9C993.4 439.9 995.3 440.4 997.5 440.4C1000.9 440.4 1003.5 439.3 1005.4 437.2C1007.3 435.1 1008.3 432.1 1008.3 428.4V407.5H1014.2V429.3C1014.2 434.4 1012.7 438.5 1009.7 441.5C1006.8 444.5 1002.7 446 997.6 446Z",
                                  fill: "#026C81",
                                },
                              }),
                              t._v(" "),
                              n("path", {
                                attrs: {
                                  d: "M1056.2 393.8H1062.2V445.1H1057.7L1056.9 439.7C1053.2 443.9 1048.3 445.9 1042.4 445.9C1036.7 445.9 1032 444 1028.4 440.3C1024.7 436.5 1022.9 431.8 1022.9 426.2C1022.9 420.5 1024.7 415.8 1028.4 412.1C1032.1 408.4 1036.7 406.5 1042.4 406.5C1048 406.5 1052.6 408.4 1056.3 412.1V393.8H1056.2ZM1032.8 436.3C1035.4 439 1038.7 440.3 1042.7 440.3C1046.7 440.3 1050 439 1052.7 436.3C1055.4 433.6 1056.7 430.3 1056.7 426.3C1056.7 422.3 1055.4 419 1052.7 416.3C1050 413.6 1046.7 412.3 1042.7 412.3C1040.7 412.3 1038.9 412.7 1037.2 413.4C1035.5 414.1 1034 415.1 1032.8 416.3C1031.6 417.5 1030.6 419 1029.9 420.7C1029.2 422.5 1028.8 424.3 1028.8 426.3C1028.8 430.3 1030.1 433.6 1032.8 436.3Z",
                                  fill: "#026C81",
                                },
                              }),
                              t._v(" "),
                              n("path", {
                                attrs: {
                                  d: "M1065.2 458.7V453.2H1067.4C1069.8 453.2 1071.7 452.5 1073 451.2C1074.3 449.9 1075 448 1075 445.6V407.301H1080.9V446C1080.9 449.8 1079.7 452.8 1077.4 455.1C1075.1 457.4 1072 458.6 1068.2 458.6H1065.2V458.7ZM1074.8 400.801V394H1081.2V400.801H1074.8Z",
                                  fill: "#026C81",
                                },
                              }),
                              t._v(" "),
                              n("path", {
                                attrs: {
                                  d: "M1128.3 426.401C1128.3 426.901 1128.3 427.6 1128.2 428.6H1095.9C1096.4 432.1 1097.8 434.9 1100.2 437C1102.6 439.1 1105.6 440.2 1109.2 440.2C1111.8 440.2 1114.1 439.6 1116.2 438.5C1118.2 437.4 1119.9 435.7 1121.1 433.6H1127.3C1125.7 437.5 1123.3 440.6 1120.2 442.7C1117 444.9 1113.4 446 1109.3 446C1103.8 446 1099.3 444.101 1095.6 440.301C1091.9 436.501 1090.1 431.8 1090.1 426.2C1090.1 420.6 1091.9 415.9 1095.6 412.1C1099.3 408.3 1103.9 406.5 1109.3 406.5C1114.9 406.5 1119.5 408.4 1123.1 412.2C1126.5 416.1 1128.3 420.801 1128.3 426.401ZM1109.2 412.2C1107 412.2 1104.9 412.6 1103.1 413.5C1101.3 414.4 1099.7 415.701 1098.5 417.301C1097.3 419.001 1096.5 420.9 1096 423H1122.2C1121.8 420.8 1121 418.9 1119.8 417.2C1118.6 415.5 1117.1 414.301 1115.2 413.401C1113.5 412.601 1111.4 412.2 1109.2 412.2Z",
                                  fill: "#026C81",
                                },
                              }),
                              t._v(" "),
                              n("path", {
                                attrs: {
                                  d: "M1152.4 439.6H1156.5V445.1H1151.6C1147.5 445.1 1144.3 443.9 1142 441.6C1139.7 439.2 1138.5 436 1138.5 431.9V412.7H1131.9V411.7L1143.6 399.4H1144.5V407.4H1156.3V412.8H1144.5V431.8C1144.5 433.5 1144.8 435 1145.4 436.1C1146 437.3 1146.9 438.2 1148.1 438.8C1149.3 439.3 1150.7 439.6 1152.4 439.6Z",
                                  fill: "#026C81",
                                },
                              }),
                              t._v(" "),
                              n("path", {
                                attrs: {
                                  d: "M1163.4 413.2V396H1168.9V413.1H1163.4V413.2ZM1174.2 413.2V396H1179.8V413.1H1174.2V413.2Z",
                                  fill: "#026C81",
                                },
                              }),
                              t._v(" "),
                              n("path", {
                                attrs: {
                                  d: "M1227.3 396.1C1231.9 396.1 1235.8 397.6 1238.9 400.6C1242 403.6 1243.6 407.3 1243.6 411.8C1243.6 416.3 1242 420 1238.9 423C1235.8 426 1231.9 427.5 1227.3 427.5H1215.8V445.1H1209.7V396.1H1227.3ZM1226.9 421.6C1229.9 421.6 1232.3 420.7 1234.3 418.8C1236.2 417 1237.2 414.6 1237.2 411.8C1237.2 409 1236.2 406.7 1234.3 404.8C1232.4 403 1229.9 402 1226.9 402H1215.8V421.5H1226.9V421.6Z",
                                  fill: "#026C81",
                                },
                              }),
                              t._v(" "),
                              n("path", {
                                attrs: {
                                  d: "M1268.3 446C1264.6 446 1261.2 445.101 1258.1 443.401C1255 441.701 1252.6 439.301 1250.9 436.301C1249.2 433.301 1248.3 429.9 1248.3 426.2C1248.3 420.5 1250.2 415.8 1254 412.1C1257.8 408.4 1262.6 406.5 1268.3 406.5C1272.1 406.5 1275.5 407.4 1278.6 409.1C1281.7 410.8 1284.1 413.2 1285.8 416.2C1287.6 419.2 1288.4 422.601 1288.4 426.301C1288.4 431.901 1286.5 436.601 1282.7 440.401C1278.8 444.101 1274 446 1268.3 446ZM1258.3 436.301C1260.9 438.901 1264.3 440.301 1268.3 440.301C1272.3 440.301 1275.7 439.001 1278.3 436.301C1280.9 433.701 1282.3 430.301 1282.3 426.301C1282.3 422.201 1281 418.901 1278.3 416.301C1275.7 413.701 1272.3 412.301 1268.3 412.301C1264.3 412.301 1260.9 413.601 1258.3 416.301C1255.7 418.901 1254.3 422.301 1254.3 426.301C1254.4 430.301 1255.7 433.701 1258.3 436.301Z",
                                  fill: "#026C81",
                                },
                              }),
                              t._v(" "),
                              n("path", {
                                attrs: {
                                  d: "M1302.6 413.3C1305.4 409.3 1309.4 407.3 1314.6 407.3H1317V412.8H1314.1C1310.6 412.8 1308 413.8 1306.1 415.9C1304.2 418 1303.3 420.9 1303.3 424.6V445H1297.3V407.2H1301.5L1302.6 413.3ZM1341.5 439.7H1346V445.2H1340.8C1336.8 445.2 1333.6 444 1331.2 441.6C1328.8 439.2 1327.7 436 1327.7 431.9V412.5H1319.7V407.4H1327.7V396.4H1333.7V407.4H1345.9V412.5H1333.7V431.6C1333.7 433.3 1334 434.7 1334.6 435.9C1335.2 437.1 1336.1 438 1337.3 438.6C1338.4 439.4 1339.8 439.7 1341.5 439.7Z",
                                  fill: "#026C81",
                                },
                              }),
                              t._v(" "),
                              n("path", {
                                attrs: {
                                  d: "M1385.7 407.3H1390.5V445.1H1385.5L1384.9 439.4C1383.1 441.5 1381 443.1 1378.4 444.3C1375.9 445.4 1373.1 446 1370 446C1364.4 446 1359.8 444.1 1356.1 440.4C1352.4 436.6 1350.5 431.9 1350.5 426.3C1350.5 420.7 1352.4 416 1356.1 412.2C1359.8 408.4 1364.5 406.6 1370 406.6C1373.1 406.6 1375.9 407.2 1378.4 408.4C1380.9 409.6 1383.1 411.2 1384.9 413.3L1385.7 407.3ZM1360.5 436.2C1363.1 438.9 1366.5 440.2 1370.5 440.2C1374.5 440.2 1377.8 438.9 1380.4 436.2C1383 433.5 1384.3 430.2 1384.3 426.2C1384.3 422.2 1383 418.9 1380.4 416.2C1377.8 413.5 1374.5 412.2 1370.5 412.2C1366.5 412.2 1363.2 413.5 1360.5 416.2C1357.9 418.9 1356.5 422.2 1356.5 426.2C1356.6 430.2 1357.9 433.5 1360.5 436.2Z",
                                  fill: "#026C81",
                                },
                              }),
                              t._v(" "),
                              n("path", {
                                attrs: {
                                  d: "M1402.4 445.1V393.8H1408.4V445.1H1402.4Z",
                                  fill: "#026C81",
                                },
                              }),
                              t._v(" "),
                              n("path", {
                                attrs: {
                                  d: "M1420.1 400.801V394H1426.5V400.801H1420.1ZM1420.3 445.1V407.301H1426.3V445.1H1420.3Z",
                                  fill: "#026C81",
                                },
                              }),
                              t._v(" "),
                              n("path", {
                                attrs: {
                                  d: "M531.2 310.9L610.4 317.1L619.6 399.3L400 618.9L311.6 530.5L531.2 310.9Z",
                                  fill: "url(#paint0_linear_1101_4845)",
                                },
                              }),
                              t._v(" "),
                              n("path", {
                                attrs: {
                                  d: "M89.1998 308.1L9.8998 301.9L0.799805 219.7L220.4 0.100098L308.8 88.5001L89.1998 308.1Z",
                                  fill: "url(#paint1_linear_1101_4845)",
                                },
                              }),
                              t._v(" "),
                              n("path", {
                                attrs: {
                                  d: "M311.6 88.5001L317.8 9.30011L400 0.100098L619.6 219.7L531.2 308.1L311.6 88.5001Z",
                                  fill: "url(#paint2_linear_1101_4845)",
                                },
                              }),
                              t._v(" "),
                              n("path", {
                                attrs: {
                                  d: "M308.8 530.5L302.6 609.8L220.4 618.9L0.799805 399.3L89.1998 310.9L308.8 530.5Z",
                                  fill: "url(#paint3_linear_1101_4845)",
                                },
                              }),
                              t._v(" "),
                              n("path", {
                                attrs: {
                                  d: "M415.3 328.9C421.4 332 426.3 336.5 429.8 342.4C433.3 348.3 435.1 355.1 435.1 362.7C435.1 373.7 430.9 382.9 422.6 390.5C414.3 398.1 404.1 401.9 392.1 401.9H334.4V261.7H390.9C402.7 261.7 412.4 265.1 420 272C427.7 278.9 431.5 287.5 431.5 297.7C431.5 303.8 430 309.8 427.1 315.4C424.2 321.2 420.2 325.7 415.3 328.9ZM408.7 301.2C408.7 295.9 406.9 291.5 403.2 288.1C399.5 284.7 395 283 389.5 283H357V319.5H389.5C395.1 319.5 399.7 317.8 403.3 314.3C406.9 310.8 408.7 306.4 408.7 301.2ZM390.6 379.9C396.7 379.9 401.8 378 405.7 374.3C409.6 370.6 411.6 365.8 411.6 360.1C411.6 354.4 409.6 349.6 405.7 345.9C401.8 342.2 396.7 340.3 390.6 340.3H357V380H390.6V379.9Z",
                                  fill: "#35BFDC",
                                },
                              }),
                              t._v(" "),
                              n("path", {
                                attrs: {
                                  d: "M277.9 165.8C229.9 165.8 190.9 204.8 190.9 252.8C190.9 273.9 198.5 293.3 211.1 308.4L159.3 360.2C153.3 366.2 153.3 376 159.3 382C165.3 388 175.1 388 181.1 382L234.8 328.3C247.5 335.6 262.2 339.8 277.9 339.8C325.9 339.8 364.9 300.8 364.9 252.8C364.9 204.8 325.9 165.8 277.9 165.8ZM277.9 306.4C248.4 306.4 224.3 282.4 224.3 252.8C224.3 223.2 248.3 199.2 277.9 199.2C307.4 199.2 331.5 223.2 331.5 252.8C331.5 282.4 307.4 306.4 277.9 306.4Z",
                                  fill: "#35BFDC",
                                },
                              }),
                              t._v(" "),
                              n(
                                "defs",
                                [
                                  n(
                                    "linearGradient",
                                    {
                                      attrs: {
                                        id: "paint0_linear_1101_4845",
                                        x1: "349.404",
                                        y1: "579.274",
                                        x2: "568.91",
                                        y2: "363.246",
                                        gradientUnits: "userSpaceOnUse",
                                      },
                                    },
                                    [
                                      n("stop", {
                                        attrs: { "stop-color": "white" },
                                      }),
                                      t._v(" "),
                                      n("stop", {
                                        attrs: {
                                          offset: "1",
                                          "stop-color": "#046873",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  t._v(" "),
                                  n(
                                    "linearGradient",
                                    {
                                      attrs: {
                                        id: "paint1_linear_1101_4845",
                                        x1: "270.974",
                                        y1: "39.7766",
                                        x2: "51.4681",
                                        y2: "255.805",
                                        gradientUnits: "userSpaceOnUse",
                                      },
                                    },
                                    [
                                      n("stop", {
                                        attrs: { "stop-color": "white" },
                                      }),
                                      t._v(" "),
                                      n("stop", {
                                        attrs: {
                                          offset: "1",
                                          "stop-color": "#046873",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  t._v(" "),
                                  n(
                                    "linearGradient",
                                    {
                                      attrs: {
                                        id: "paint2_linear_1101_4845",
                                        x1: "579.937",
                                        y1: "270.31",
                                        x2: "363.909",
                                        y2: "50.8042",
                                        gradientUnits: "userSpaceOnUse",
                                      },
                                    },
                                    [
                                      n("stop", {
                                        attrs: { "stop-color": "white" },
                                      }),
                                      t._v(" "),
                                      n("stop", {
                                        attrs: {
                                          offset: "1",
                                          "stop-color": "#046873",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  t._v(" "),
                                  n(
                                    "linearGradient",
                                    {
                                      attrs: {
                                        id: "paint3_linear_1101_4845",
                                        x1: "40.4402",
                                        y1: "348.741",
                                        x2: "256.469",
                                        y2: "568.246",
                                        gradientUnits: "userSpaceOnUse",
                                      },
                                    },
                                    [
                                      n("stop", {
                                        attrs: { "stop-color": "white" },
                                      }),
                                      t._v(" "),
                                      n("stop", {
                                        attrs: {
                                          offset: "1",
                                          "stop-color": "#046873",
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ]
                          ),
                        ]
                      ),
                      t._v(" "),
                      n(
                        "div",
                        { staticClass: "header-nav__menu" },
                        [n("HeaderMenu")],
                        1
                      ),
                    ],
                    1
                  ),
                ]),
              ],
              1
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      n.default = a.exports;
      installComponents(a, { HeaderMenu: e(641).default });
    },
  ]),
  [[339, 183, 23, 184]],
]);
