import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, w as withCtx, d as createTextVNode } from "./app.daa2d891.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "fate-apocrypha",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#fate-apocrypha",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Fate/Apocrypha")
], -1);
const _hoisted_2 = { class: "custom-container tip" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", { class: "custom-container-title" }, "Source", -1);
const _hoisted_4 = {
  href: "https://www.amazon.co.jp/-/en/gp/product/B0753GJ5HM?ref_=dbs_p_mng_rwt_ser_shvlr&storeType=ebooks",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_5 = /* @__PURE__ */ createTextVNode("Support the official release!");
const _hoisted_6 = {
  href: "https://fateapocryphathetranslation.wordpress.com/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_7 = /* @__PURE__ */ createTextVNode("Translation by NanoDesu Translations");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("Act 1");
const _hoisted_9 = /* @__PURE__ */ createTextVNode("Volume 1");
const _hoisted_10 = /* @__PURE__ */ createTextVNode("Volume 2");
const _hoisted_11 = /* @__PURE__ */ createTextVNode("Volume 3");
const _hoisted_12 = /* @__PURE__ */ createTextVNode("Volume 4");
const _hoisted_13 = /* @__PURE__ */ createTextVNode("Volume 5");
const _hoisted_14 = /* @__PURE__ */ createTextVNode("Character profiles");
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  const _component_RouterLink = resolveComponent("RouterLink");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("div", _hoisted_2, [
      _hoisted_3,
      createBaseVNode("p", null, [
        createBaseVNode("a", _hoisted_4, [
          _hoisted_5,
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("p", null, [
        createBaseVNode("a", _hoisted_6, [
          _hoisted_7,
          createVNode(_component_ExternalLinkIcon)
        ])
      ])
    ]),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/Novels/Apocrypha/Act-1.html" }, {
          default: withCtx(() => [
            _hoisted_8
          ]),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/Novels/Apocrypha/Vol-1.html" }, {
          default: withCtx(() => [
            _hoisted_9
          ]),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/Novels/Apocrypha/Vol-2.html" }, {
          default: withCtx(() => [
            _hoisted_10
          ]),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/Novels/Apocrypha/Vol-3.html" }, {
          default: withCtx(() => [
            _hoisted_11
          ]),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/Novels/Apocrypha/Vol-4.html" }, {
          default: withCtx(() => [
            _hoisted_12
          ]),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/Novels/Apocrypha/Vol-5.html" }, {
          default: withCtx(() => [
            _hoisted_13
          ]),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/Novels/Apocrypha/Apoc-profiles.html" }, {
          default: withCtx(() => [
            _hoisted_14
          ]),
          _: 1
        })
      ])
    ])
  ]);
}
var apocrypha_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "apocrypha.html.vue"]]);
export { apocrypha_html as default };
