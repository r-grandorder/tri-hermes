import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, w as withCtx, d as createTextVNode } from "./app.daa2d891.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "fate-requiem",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#fate-requiem",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Fate/Requiem")
], -1);
const _hoisted_2 = { class: "custom-container tip" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", { class: "custom-container-title" }, "Source", -1);
const _hoisted_4 = {
  href: "https://www.amazon.co.jp/-/en/gp/product/B08KWMWJ7N?ref_=dbs_p_mng_rwt_ser_shvlr&storeType=ebooks",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_5 = /* @__PURE__ */ createTextVNode("Support the official release!");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("Volume 1");
const _hoisted_7 = /* @__PURE__ */ createTextVNode(" - ");
const _hoisted_8 = {
  href: "https://brokasteltranslations.tumblr.com/post/616735224495226880/faterequiem-volume-1-the-boy-among-the-stars",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_9 = /* @__PURE__ */ createTextVNode("Translation by Brokastel");
const _hoisted_10 = /* @__PURE__ */ createTextVNode("Volume 2");
const _hoisted_11 = /* @__PURE__ */ createTextVNode(" - Ch 9 by Clyton, 10 onwards by Coggy");
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
      ])
    ]),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/Novels/Requiem/Vol-1.html" }, {
          default: withCtx(() => [
            _hoisted_6
          ]),
          _: 1
        }),
        _hoisted_7,
        createBaseVNode("a", _hoisted_8, [
          _hoisted_9,
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/Novels/Requiem/Vol-2.html" }, {
          default: withCtx(() => [
            _hoisted_10
          ]),
          _: 1
        }),
        _hoisted_11
      ])
    ])
  ]);
}
var requiem_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "requiem.html.vue"]]);
export { requiem_html as default };
