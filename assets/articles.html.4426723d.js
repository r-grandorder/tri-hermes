import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, w as withCtx, d as createTextVNode } from "./app.daa2d891.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "articles",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#articles",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Articles")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("p", null, "The pages listed below are user-submitted articles that robustly gathers important lore and provides personal conjecture. Take what you will from these resources.", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", null, "If you'd like to submit articles, please DM Lib#7770 on Discord", -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "lore-compilations",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#lore-compilations",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Lore Compilations")
], -1);
const _hoisted_5 = /* @__PURE__ */ createTextVNode("Demon Lore");
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "theories",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#theories",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Theories")
], -1);
const _hoisted_7 = /* @__PURE__ */ createTextVNode("Summary of the Caster Cu Chulainn=Odin Theory");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("Mario Gallo Bestino's Secrets");
const _hoisted_9 = {
  href: "https://forums.nrvnqsr.com/showthread.php/9380-Grand-Unified-Theory-CHALDEA",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_10 = /* @__PURE__ */ createTextVNode("FGO - Grand Unified Theory: CHALDEA");
const _hoisted_11 = /* @__PURE__ */ createTextVNode(" by Petrikow");
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "miscallaneous",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#miscallaneous",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Miscallaneous")
], -1);
const _hoisted_13 = /* @__PURE__ */ createTextVNode("Servant Places of Birth");
const _hoisted_14 = {
  href: "https://sites.google.com/view/type-moon-asset-repository/home",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_15 = /* @__PURE__ */ createTextVNode("Type-Moon Asset Folder");
const _hoisted_16 = /* @__PURE__ */ createTextVNode(" by Mercu");
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    _hoisted_2,
    _hoisted_3,
    _hoisted_4,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/Articles/Demon_Lore.html" }, {
          default: withCtx(() => [
            _hoisted_5
          ]),
          _: 1
        })
      ])
    ]),
    _hoisted_6,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/Articles/Caster-Cu-Identity.html" }, {
          default: withCtx(() => [
            _hoisted_7
          ]),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/Articles/Mario-Gallo-Bestino-Theory.html" }, {
          default: withCtx(() => [
            _hoisted_8
          ]),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_9, [
          _hoisted_10,
          createVNode(_component_ExternalLinkIcon)
        ]),
        _hoisted_11
      ])
    ]),
    _hoisted_12,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/map.html" }, {
          default: withCtx(() => [
            _hoisted_13
          ]),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_14, [
          _hoisted_15,
          createVNode(_component_ExternalLinkIcon)
        ]),
        _hoisted_16
      ])
    ])
  ]);
}
var articles_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "articles.html.vue"]]);
export { articles_html as default };
