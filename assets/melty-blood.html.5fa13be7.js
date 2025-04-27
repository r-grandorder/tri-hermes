import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, w as withCtx, d as createTextVNode } from "./app.daa2d891.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "melty-blood",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#melty-blood",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Melty Blood")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("p", null, "Script compiled by Karthikeya.", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "main-story",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#main-story",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Main Story")
], -1);
const _hoisted_4 = /* @__PURE__ */ createTextVNode("Route 0 - Prologue");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("Route 1 - Agitator");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("Route 2 - Goodbye");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("Route 3 - Hologram Summer");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("Route 4 - Freaks Channel");
const _hoisted_9 = /* @__PURE__ */ createTextVNode("Route 5 - Other Tale");
const _hoisted_10 = /* @__PURE__ */ createTextVNode("Route 6 - G");
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "other",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#other",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Other")
], -1);
const _hoisted_12 = /* @__PURE__ */ createTextVNode("Route 7 - Night on the Blood Liar - True Route");
const _hoisted_13 = /* @__PURE__ */ createTextVNode("Route 8 - Oh My Sister! - Bonus Route");
const _hoisted_14 = /* @__PURE__ */ createTextVNode("Bad Ends");
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    _hoisted_2,
    _hoisted_3,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/Games/MeltyBlood/0-Prologue.html" }, {
          default: withCtx(() => [
            _hoisted_4
          ]),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/Games/MeltyBlood/1-Agitator.html" }, {
          default: withCtx(() => [
            _hoisted_5
          ]),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/Games/Meltyblood/2-Goodbye.html" }, {
          default: withCtx(() => [
            _hoisted_6
          ]),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/Games/MeltyBlood/3-Hologram-Summer.html" }, {
          default: withCtx(() => [
            _hoisted_7
          ]),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/Games/MeltyBlood/4-Freaks-Channel.html" }, {
          default: withCtx(() => [
            _hoisted_8
          ]),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/Games/MeltyBlood/5-OtherTale.html" }, {
          default: withCtx(() => [
            _hoisted_9
          ]),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/Games/MeltyBlood/6-G.html" }, {
          default: withCtx(() => [
            _hoisted_10
          ]),
          _: 1
        })
      ])
    ]),
    _hoisted_11,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/Games/MeltyBlood/7-Night-on-the-Blood-Liar_TrueRoute.html" }, {
          default: withCtx(() => [
            _hoisted_12
          ]),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/Games/MeltyBlood/8-Oh-My-Sister_BonusRoute.html" }, {
          default: withCtx(() => [
            _hoisted_13
          ]),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/Games/MeltyBlood/Bad-Ends.html" }, {
          default: withCtx(() => [
            _hoisted_14
          ]),
          _: 1
        })
      ])
    ])
  ]);
}
var meltyBlood_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "melty-blood.html.vue"]]);
export { meltyBlood_html as default };
