import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, w as withCtx, d as createTextVNode } from "./app.daa2d891.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "type-moon-games",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#type-moon-games",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Type-Moon Games")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "melty-blood-series",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#melty-blood-series",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Melty Blood Series")
], -1);
const _hoisted_3 = /* @__PURE__ */ createTextVNode("Melty Blood");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("Melty Blood Re-Act");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("Melty Blood Act Cadenza");
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "fate-extra-games",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#fate-extra-games",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Fate/EXTRA Games")
], -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("hr", null, null, -1);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, "Fate/Extella - WIP")
], -1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "side-games",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#side-games",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Side Games")
], -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("hr", null, null, -1);
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("strong", null, "Fate/Unlimited Codes")
], -1);
const _hoisted_12 = /* @__PURE__ */ createTextVNode("Fate/Unlimited Codes - Entire Script");
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("strong", null, "Capsule Servant")
], -1);
const _hoisted_14 = /* @__PURE__ */ createTextVNode("Opening");
const _hoisted_15 = /* @__PURE__ */ createTextVNode("Shirou Route");
const _hoisted_16 = /* @__PURE__ */ createTextVNode("Rin Route");
const _hoisted_17 = /* @__PURE__ */ createTextVNode("Ending");
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    _hoisted_2,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/Games/melty-blood.html" }, {
          default: withCtx(() => [
            _hoisted_3
          ]),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/Games/melty-blood-re-act.html" }, {
          default: withCtx(() => [
            _hoisted_4
          ]),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/Games/melty-blood-act-cadenza.html" }, {
          default: withCtx(() => [
            _hoisted_5
          ]),
          _: 1
        })
      ])
    ]),
    _hoisted_6,
    _hoisted_7,
    _hoisted_8,
    _hoisted_9,
    _hoisted_10,
    _hoisted_11,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/Games/Fate-Unlimited_Codes.html" }, {
          default: withCtx(() => [
            _hoisted_12
          ]),
          _: 1
        })
      ])
    ]),
    _hoisted_13,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/Games/CapsuleServant/opening.html" }, {
          default: withCtx(() => [
            _hoisted_14
          ]),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/Games/CapsuleServant/shirou-route.html" }, {
          default: withCtx(() => [
            _hoisted_15
          ]),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/Games/CapsuleServant/rin-route.html" }, {
          default: withCtx(() => [
            _hoisted_16
          ]),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/Games/CapsuleServant/ending.html" }, {
          default: withCtx(() => [
            _hoisted_17
          ]),
          _: 1
        })
      ])
    ])
  ]);
}
var games_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "games.html.vue"]]);
export { games_html as default };
