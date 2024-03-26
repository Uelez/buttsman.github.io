(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    5159: function (e, a, t) {
      Promise.resolve().then(t.bind(t, 4224));
    },
    4224: function (e, a, t) {
      "use strict";
      t.r(a),
        t.d(a, {
          default: function () {
            return Q;
          },
        });
      var n = t(7437),
        s = t(2265),
        i = t(345),
        _ = t.n(i),
        r = t(2249),
        o = t.n(r),
        c = t(5669),
        l = t.n(c),
        d = t(703),
        u = {
          src: "/_next/static/media/dollar-logo.15abe1e6.svg",
          height: 32,
          width: 33,
          blurWidth: 0,
          blurHeight: 0,
        },
        b = t(8792),
        m = function (e) {
          let { size: a } = e;
          return (0, n.jsxs)(b.default, {
            href: "https://raydium.io/swap/?inputCurrency=sol&outputCurrency=BMDPq8x6C8v1U2us1wrtxgftYq1efbhunHjk1n8s5Aj6&inputAmount=0&fixed=in",
            className:
              "medium" === a
                ? l().button_container_medium
                : "large" === a
                ? l().button_container_large
                : l().button_container,
            children: [
              "BUY ",
              (0, n.jsx)(d.default, { src: u, alt: "dollar logo" }),
            ],
          });
        },
        h = {
          src: "/_next/static/media/avatar.4c38a984.svg",
          height: 44,
          width: 43,
          blurWidth: 0,
          blurHeight: 0,
        },
        p = {
          src: "/_next/static/media/burger.239b02a6.svg",
          height: 22,
          width: 37,
          blurWidth: 0,
          blurHeight: 0,
        },
        g = {
          src: "/_next/static/media/mute.e6517d7e.svg",
          height: 512,
          width: 576,
          blurWidth: 0,
          blurHeight: 0,
        },
        v = {
          src: "/_next/static/media/audio.2ef5c607.svg",
          height: 512,
          width: 640,
          blurWidth: 0,
          blurHeight: 0,
        },
        f = function (e) {
          let {
            handleClickBurgerMenu: a,
            isMuteClicked: t,
            handleMuteClick: s,
          } = e;
          return (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)("div", {
                className: o().navbar_container,
                children: (0, n.jsxs)("div", {
                  className: o().navbar_wrap,
                  children: [
                    (0, n.jsxs)("div", {
                      className: o().navbar_logo_container,
                      children: [
                        (0, n.jsx)(d.default, { src: h, alt: "avatar" }),
                        (0, n.jsx)("div", { children: "BUTTSMAN" }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className: o().navbar_menu_container,
                      children: [
                        (0, n.jsx)(b.default, {
                          href: "https://twitter.com/SolanaButtsman",
                          className: o().navbar_menu_item,
                          children: "TWITTER",
                        }),
                        (0, n.jsx)(b.default, {
                          href: "https://t.me/buttsman",
                          className: o().navbar_menu_item,
                          children: "TELEGRAM",
                        }),

                        (0, n.jsx)(b.default, {
                          href: "https://dexscreener.com/base/0xa36d9624a58d7a9abaa5c0335c382829f7be8df4",
                          className: o().navbar_menu_item,
                          children: "DEXSCREENER",
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className: o().navbar_mobile_burger_button,
                      onClick: a,
                      children: [
                        (0, n.jsx)("div", {
                          className: o().navbar_audio,
                          children: t
                            ? (0, n.jsx)(d.default, {
                                onClick: s,
                                src: v,
                                alt: "Audio",
                              })
                            : (0, n.jsx)(d.default, {
                                onClick: s,
                                src: g,
                                alt: "Mute",
                              }),
                        }),
                        (0, n.jsx)(d.default, {
                          src: p,
                          id: "burger-button",
                          alt: "burger button",
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className: o().navbar_buy_button_container,
                      children: [
                        (0, n.jsx)("div", {
                          className: o().navbar_audio,
                          children: t
                            ? (0, n.jsx)(d.default, {
                                onClick: s,
                                src: v,
                                alt: "Audio",
                              })
                            : (0, n.jsx)(d.default, {
                                onClick: s,
                                src: g,
                                alt: "Mute",
                              }),
                        }),
                        (0, n.jsx)(m, {}),
                      ],
                    }),
                  ],
                }),
              }),
              (0, n.jsx)("div", { className: o().navbar_backdrop }),
            ],
          });
        },
        x = t(4137),
        j = t.n(x),
        N = {
          src: "/_next/static/media/dollar.cb077669.svg",
          height: 97,
          width: 43,
          blurWidth: 0,
          blurHeight: 0,
        },
        w = {
          src: "/_next/static/media/avatar.9c1e9775.svg",
          height: 660,
          width: 652,
          blurWidth: 0,
          blurHeight: 0,
        },
        y = function () {
          return (0, n.jsx)("div", {
            className: j().hero_container,
            children: (0, n.jsxs)("div", {
              className: j().hero_wrap,
              children: [
                (0, n.jsxs)("div", {
                  className: j().hero_first_bloc_container,
                  children: [
                    (0, n.jsxs)("div", {
                      className: j().hero_first_bloc_title,
                      children: [
                        (0, n.jsx)(d.default, { src: N, alt: "dollar" }),
                        "BUTTS",
                      ],
                    }),
                    (0, n.jsx)("div", {
                      className: j().hero_first_bloc_description,
                      children: "DON'T BE A PUSSY PUT YOUR BUTTS MASK ON",
                    }),
                    (0, n.jsx)(m, { size: "medium" }),
                  ],
                }),
                (0, n.jsx)("div", {
                  className: j().hero_second_bloc_container,
                  children: (0, n.jsx)(d.default, {
                    src: w,
                    alt: "avatar hero",
                  }),
                }),
              ],
            }),
          });
        },
        E = t(1451),
        k = t.n(E),
        C = {
          src: "/_next/static/media/buttman.fb764cb1.svg",
          height: 992,
          width: 652,
          blurWidth: 0,
          blurHeight: 0,
        },
        T = function () {
          return (0, n.jsx)("div", {
            className: k().buttman_city_container,
            children: (0, n.jsx)(d.default, { src: C, sizes: "", alt: "city" }),
          });
        },
        A = t(297),
        B = t.n(A),
        S = function () {
          return (0, n.jsx)("div", {
            className: B().buttman_description_container,
            children: (0, n.jsxs)("div", {
              className: B().buttman_description_wrap,
              children: [
                (0, n.jsx)("div", {
                  className: B().buttman_description_title,
                  children: "BUTTSMAN",
                }),
                (0, n.jsx)("div", {
                  className: B().buttman_description_description,
                  children:
                    "Sporting a mask that's more rear-end than superhero, Buttman is the hero no one knew they needed. Clad in spandex that leaves little to the imagination, he fights the forces of conformity with his battle cry, \"Don't be a pussy, put your butt mask on!\" Whether he's mooning over crime or cracking up the city, Buttman's here to bare it all for justice.",
                }),
                (0, n.jsx)(m, { size: "medium" }),
              ],
            }),
          });
        },
        R = t(5802),
        H = t.n(R),
        P = {
          src: "/_next/static/media/angry-buttman.e4e1461c.svg",
          height: 424,
          width: 466,
          blurWidth: 0,
          blurHeight: 0,
        },
        W = {
          src: "/_next/static/media/advantage-tax.9f8fdef3.svg",
          height: 242,
          width: 136,
          blurWidth: 0,
          blurHeight: 0,
        },
        D = {
          src: "/_next/static/media/advantage-supply.20e322fc.svg",
          height: 246,
          width: 141,
          blurWidth: 0,
          blurHeight: 0,
        },
        U = {
          src: "/_next/static/media/advantage-moon.57fc3b6a.svg",
          height: 246,
          width: 141,
          blurWidth: 0,
          blurHeight: 0,
        },
        M = function () {
          return (0, n.jsx)("div", {
            className: H().advantages_container,
            children: (0, n.jsxs)("div", {
              className: H().advantages_wrap,
              children: [
                (0, n.jsx)("div", {
                  className: H().advantages_angry_buttman,
                  children: (0, n.jsx)(d.default, {
                    src: P,
                    alt: "Angry Buttman",
                  }),
                }),
                (0, n.jsxs)("div", {
                  className: H().advantages_second_bloc_container,
                  children: [
                    (0, n.jsxs)("div", {
                      className: H().advantages_items_container,
                      children: [
                        (0, n.jsx)("div", {
                          className: H().advantages_item,
                          children: (0, n.jsx)(d.default, {
                            src: W,
                            alt: "Advantage",
                          }),
                        }),
                        (0, n.jsx)("div", {
                          className: H().advantages_item,
                          children: (0, n.jsx)(d.default, {
                            src: D,
                            alt: "Advantage",
                          }),
                        }),
                        (0, n.jsx)("div", {
                          className: H().advantages_item,
                          children: (0, n.jsx)(d.default, {
                            src: U,
                            alt: "Advantage",
                          }),
                        }),
                      ],
                    }),
                    (0, n.jsx)("div", {
                      className: H().advantages_contract_address_container,
                      children: "0xd11A584DE5fA50a4Ee560C48aB44DbB31823d9bc",
                    }),
                    (0, n.jsx)(m, { size: "large" }),
                  ],
                }),
              ],
            }),
          });
        },
        L = t(2923),
        O = t.n(L),
        X = {
          src: "/_next/static/media/quote.267e9d48.svg",
          height: 36,
          width: 48,
          blurWidth: 0,
          blurHeight: 0,
        },
        Y = function () {
          return (0, n.jsx)("div", {
            className: O().footer_container,
            children: (0, n.jsxs)("div", {
              className: O().footer_wrap,
              children: [
                (0, n.jsx)("div", {
                  className: O().footer_quote_image,
                  children: (0, n.jsx)(d.default, { src: X }),
                }),
                (0, n.jsx)("div", {
                  className: O().footer_nfa,
                  children:
                    "Remember, when life gives you lemons, squeeze them with your cheeks of justice—because in the end, it's all about how you twerk it!\"",
                }),
                (0, n.jsx)("div", {
                  className: O().footer_legals,
                  children:
                    "2024 by BUttsman the sh*tty hero, all rights reserved",
                }),
              ],
            }),
          });
        },
        z = t(25),
        F = t.n(z),
        G = {
          src: "/_next/static/media/slap-buttman.152bd442.svg",
          height: 508,
          width: 493,
          blurWidth: 0,
          blurHeight: 0,
        },
        q = function () {
          return (0, n.jsx)("div", {
            className: F().slap_container,
            children: (0, n.jsxs)("div", {
              className: F().slap_wrap,
              children: [
                (0, n.jsx)("div", {
                  className: F().slap_first_bloc_container,
                  children: (0, n.jsx)(d.default, {
                    src: G,
                    alt: "Slap Buttman",
                  }),
                }),
                (0, n.jsxs)("div", {
                  className: F().slap_second_bloc_container,
                  children: [
                    (0, n.jsx)("div", {
                      className: F().slap_second_bloc_title,
                      children: "Let’s slap thos mfers",
                    }),
                    (0, n.jsxs)("div", {
                      className: F().slap_second_bloc_buttons_container,
                      children: [
                        (0, n.jsx)(m, { size: "medium" }),
                        (0, n.jsx)("div", {
                          className: F().slap_second_bloc_button_cry,
                          children: "CRY LATER",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        Z = t(3061),
        I = (e) => {
          let { togglePlayPause: a, isPlaying: t, audioRef: i } = e,
            _ = "/batman_fail_recorder.m3u8",
            [r, o] = (0, s.useState)(0),
            [c, l] = (0, s.useState)(0),
            [d, u] = (0, s.useState)(0),
            b = () => {
              if (i.current) {
                let e = i.current;
                l(e.currentTime),
                  u(e.duration),
                  o((e.currentTime / e.duration) * 100);
              }
            };
          return (
            (0, s.useEffect)(() => {
              let e = i.current;
              if (e) {
                if (Z.ZP.isSupported()) {
                  let a = new Z.ZP();
                  a.loadSource(_),
                    a.attachMedia(e),
                    a.on(Z.ZP.Events.MANIFEST_PARSED, () => {
                      u(e.duration);
                    });
                } else if (e.canPlayType("application/vnd.apple.mpegurl"))
                  e.src = _;
                else {
                  console.error("HLS not supported on this platform.");
                  return;
                }
                return (
                  e.addEventListener("timeupdate", b),
                  () => e.removeEventListener("timeupdate", b)
                );
              }
            }, [_]),
            (0, n.jsxs)("div", {
              className: "media-player",
              children: [
                (0, n.jsx)("audio", { ref: i }),
                (0, n.jsx)("div", { className: "controls" }),
              ],
            })
          );
        };
      function Q() {
        let [e, a] = (0, s.useState)(!1),
          [t, i] = (0, s.useState)(),
          [r, o] = (0, s.useState)(),
          c = (0, s.useRef)(null),
          [l, u] = (0, s.useState)(!1),
          b = () => {
            console.log("togglePlayPause Clicked"),
              c.current &&
                (console.log("audioRef current if case"),
                l
                  ? (console.log("isPlaying if case"), c.current.pause())
                  : (console.log("else case"), c.current.play()),
                u(!l));
          };
        function p() {
          console.log("click"), o(!r), i(!0), b();
        }
        function g(e) {
          let t = e.target.id;
          "outside-side-menu" === t ? a(!1) : "burger-button" === t && a(!0);
        }
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsxs)("div", {
              className: _().page_enter_page,
              style: t ? { display: "none" } : { display: "flex" },
              children: [
                (0, n.jsx)("div", {
                  onClick: p,
                  className: _().page_enter_page_button,
                  children: "ENTER",
                }),
                (0, n.jsx)(I, {
                  audioRef: c,
                  togglePlayPause: b,
                  isPlaying: l,
                }),
              ],
            }),
            e &&
              (0, n.jsx)("div", {
                id: "outside-side-menu",
                className: _().page_mobile_side_menu_container,
                onClick: g,
                children: (0, n.jsxs)("div", {
                  className: _().page_mobile_side_menu_wrap,
                  children: [
                    (0, n.jsxs)("div", {
                      className: _().page_mobile_buttman_logo_container,
                      children: [
                        (0, n.jsx)(d.default, { src: h, alt: "Buttman Logo" }),
                        (0, n.jsx)("div", { children: "BUTTSMAN" }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className: _().page_mobile_menu_container,
                      children: [
                        (0, n.jsx)("div", {
                          className: _().page_mobile_menu_item,
                          onClick: () =>
                            (window.location.href =
                              "https://raydium.io/swap/?inputCurrency=sol&outputCurrency=BMDPq8x6C8v1U2us1wrtxgftYq1efbhunHjk1n8s5Aj6&inputAmount=0&fixed=in"),
                          children: "UNISWAP",
                        }),
                        (0, n.jsx)("div", {
                          className: _().page_mobile_menu_item,
                          onClick: () =>
                            (window.location.href =
                              "https://dexscreener.com/base"),
                          children: "DEXSCREENER",
                        }),
                        (0, n.jsx)("div", {
                          className: _().page_mobile_menu_item,
                          onClick: () =>
                            (window.location.href =
                              "https://twitter.com/SolanaButtsman"),
                          children: "TWITTER",
                        }),
                        (0, n.jsx)("div", {
                          className: _().page_mobile_menu_item,
                          onClick: () =>
                            (window.location.href =
                              "https://t.me/buttsman"),
                          children: "TELEGRAM",
                        }),
                      ],
                    }),
                    (0, n.jsx)("div", {
                      className: _().page_mobile_buy_button_container,
                      children: (0, n.jsx)(m, {}),
                    }),
                  ],
                }),
              }),
            (0, n.jsx)("div", {
              id: "autoplay-fart",
              className: _().pages_autoplay_button,
            }),
            (0, n.jsxs)("div", {
              id: "outside-side-menu",
              className: _().page_container,
              onClick: g,
              style: t ? { overflow: "scroll" } : { overflow: "hidden" },
              children: [
                (0, n.jsx)(f, {
                  handleClickBurgerMenu: g,
                  isMuteClicked: r,
                  handleMuteClick: p,
                }),
                (0, n.jsx)(y, {}),
                (0, n.jsx)(T, {}),
                (0, n.jsx)(S, {}),
                (0, n.jsx)(M, {}),
                (0, n.jsx)(Y, {}),
                (0, n.jsx)(q, {}),
              ],
            }),
          ],
        });
      }
    },
    5802: function (e) {
      e.exports = {
        advantages_container: "advantages_advantages_container__XvCBG",
        advantages_wrap: "advantages_advantages_wrap__3Q2OZ",
        advantages_second_bloc_container:
          "advantages_advantages_second_bloc_container__2E_Z7",
        advantages_items_container:
          "advantages_advantages_items_container__49Olk",
        advantages_contract_address_container:
          "advantages_advantages_contract_address_container__00gfX",
        advantages_angry_buttman: "advantages_advantages_angry_buttman__UH13R",
        advantages_item: "advantages_advantages_item__zphJD",
      };
    },
    1451: function (e) {
      e.exports = {
        buttman_city_container: "buttmanCity_buttman_city_container__UFJXI",
      };
    },
    297: function (e) {
      e.exports = {
        buttman_description_container:
          "buttman-description_buttman_description_container__5DkbN",
        buttman_description_wrap:
          "buttman-description_buttman_description_wrap__LYAfm",
        buttman_description_title:
          "buttman-description_buttman_description_title__SEIH1",
        buttman_description_description:
          "buttman-description_buttman_description_description__hTuBy",
      };
    },
    2923: function (e) {
      e.exports = {
        footer_container: "footer_footer_container__EviAA",
        footer_wrap: "footer_footer_wrap__e_0jd",
        footer_nfa: "footer_footer_nfa__FMwAE",
        footer_legals: "footer_footer_legals__owcme",
      };
    },
    4137: function (e) {
      e.exports = {
        hero_container: "hero_hero_container__BrgHZ",
        hero_wrap: "hero_hero_wrap__HSGXp",
        hero_first_bloc_container: "hero_hero_first_bloc_container__pRTbc",
        hero_first_bloc_title: "hero_hero_first_bloc_title__D3v7V",
        hero_first_bloc_description: "hero_hero_first_bloc_description__OqEGn",
        hero_second_bloc_container: "hero_hero_second_bloc_container__rGdQr",
      };
    },
    2249: function (e) {
      e.exports = {
        navbar_container: "navbar_navbar_container__Y_4PK",
        navbar_backdrop: "navbar_navbar_backdrop__dOCtL",
        navbar_wrap: "navbar_navbar_wrap__oggqt",
        navbar_logo_container: "navbar_navbar_logo_container__LtX_W",
        navbar_menu_container: "navbar_navbar_menu_container__vd_JN",
        navbar_menu_item: "navbar_navbar_menu_item__jGc46",
        navbar_mobile_burger_button:
          "navbar_navbar_mobile_burger_button__2vaDE",
      };
    },
    25: function (e) {
      e.exports = {
        slap_container: "slap_slap_container__0xhc0",
        slap_wrap: "slap_slap_wrap__d09MY",
        slap_first_bloc_container: "slap_slap_first_bloc_container___LVny",
        slap_second_bloc_container: "slap_slap_second_bloc_container__3aHNG",
        slap_second_bloc_title: "slap_slap_second_bloc_title__3htPm",
        slap_second_bloc_buttons_container:
          "slap_slap_second_bloc_buttons_container__gHD9Q",
        slap_second_bloc_button_cry: "slap_slap_second_bloc_button_cry__9sUdX",
      };
    },
    5669: function (e) {
      e.exports = {
        button_container_medium: "button_button_container_medium___NCk8",
        button_container_large: "button_button_container_large__p7DTV",
      };
    },
    345: function (e) {
      e.exports = {
        page_enter_page: "page_page_enter_page__LzkgN",
        page_enter_page_button: "page_page_enter_page_button__9Po2E",
        page_container: "page_page_container__Vv1Xn",
        pages_autoplay_button: "page_pages_autoplay_button__4bChi",
        page_mobile_side_menu_container:
          "page_page_mobile_side_menu_container__aDgq5",
        page_mobile_side_menu_wrap: "page_page_mobile_side_menu_wrap__2Yh4G",
        appearFromRight: "page_appearFromRight__lwY_h",
        page_mobile_cancel_button_container:
          "page_page_mobile_cancel_button_container__ogQ2Y",
        page_mobile_buttman_logo_container:
          "page_page_mobile_buttman_logo_container___hn9O",
        page_mobile_menu_item: "page_page_mobile_menu_item__Z5Bjg",
        page_mobile_menu_container: "page_page_mobile_menu_container___uqkz",
        page_mobile_buy_button_container:
          "page_page_mobile_buy_button_container__Pd9UF",
      };
    },
  },
  function (e) {
    e.O(0, [404, 607, 971, 69, 744], function () {
      return e((e.s = 5159));
    }),
      (_N_E = e.O());
  },
]);
