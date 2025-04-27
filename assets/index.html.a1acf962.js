import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, w as withCtx, d as createTextVNode } from "./app.daa2d891.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "menu",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#menu",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Menu")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "main-fgo-scenario",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#main-fgo-scenario",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Main FGO Scenario")
], -1);
const _hoisted_3 = /* @__PURE__ */ createTextVNode("Main Story");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("Events");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("Servant Materials and Interludes");
const _hoisted_6 = /* @__PURE__ */ createTextVNode(" ~ Still WIP");
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "type-moon-fate-source-materials",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#type-moon-fate-source-materials",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Type-Moon/Fate Source Materials")
], -1);
const _hoisted_8 = /* @__PURE__ */ createTextVNode("Visual and Light Novels");
const _hoisted_9 = /* @__PURE__ */ createTextVNode("Games");
const _hoisted_10 = /* @__PURE__ */ createTextVNode("Manga");
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "greater-type-moon-resources",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#greater-type-moon-resources",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" Greater Type-Moon Resources")
], -1);
const _hoisted_12 = /* @__PURE__ */ createTextVNode("Materials");
const _hoisted_13 = /* @__PURE__ */ createTextVNode("Bamboo Broom Diary");
const _hoisted_14 = /* @__PURE__ */ createTextVNode("Interviews");
const _hoisted_15 = /* @__PURE__ */ createTextVNode("Drama CDs");
const _hoisted_16 = /* @__PURE__ */ createTextVNode("Articles");
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: "https://i.imgur.com/jA86J1G.png",
    alt: ""
  })
], -1);
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    _hoisted_2,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/story.html" }, {
          default: withCtx(() => [
            _hoisted_3
          ]),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/events.html" }, {
          default: withCtx(() => [
            _hoisted_4
          ]),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/servants.html" }, {
          default: withCtx(() => [
            _hoisted_5
          ]),
          _: 1
        }),
        _hoisted_6
      ])
    ]),
    _hoisted_7,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/novels.html" }, {
          default: withCtx(() => [
            _hoisted_8
          ]),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/games.html" }, {
          default: withCtx(() => [
            _hoisted_9
          ]),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/manga.html" }, {
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
        createVNode(_component_RouterLink, { to: "/materials.html" }, {
          default: withCtx(() => [
            _hoisted_12
          ]),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/bamboo.html" }, {
          default: withCtx(() => [
            _hoisted_13
          ]),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/interviews.html" }, {
          default: withCtx(() => [
            _hoisted_14
          ]),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/drama-cd.html" }, {
          default: withCtx(() => [
            _hoisted_15
          ]),
          _: 1
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/articles.html" }, {
          default: withCtx(() => [
            _hoisted_16
          ]),
          _: 1
        })
      ])
    ]),
    _hoisted_17
  ]);
}
var index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export { index_html as default };
