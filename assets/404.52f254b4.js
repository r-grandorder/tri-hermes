import { _ as _export_sfc, f as defineComponent, u as useRouteLocale, g as useThemeLocaleData, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, t as toDisplayString, b as createVNode, w as withCtx, h as unref, d as createTextVNode } from "./app.daa2d891.js";
const _hoisted_1 = { class: "theme-container" };
const _hoisted_2 = { class: "theme-default-content" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("h1", null, "404", -1);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "404",
  setup(__props) {
    var _a, _b, _c;
    const routeLocale = useRouteLocale();
    const themeLocale = useThemeLocaleData();
    const messages = (_a = themeLocale.value.notFound) != null ? _a : ["Not Found"];
    const getMsg = () => messages[Math.floor(Math.random() * messages.length)];
    const homeLink = (_b = themeLocale.value.home) != null ? _b : routeLocale.value;
    const homeText = (_c = themeLocale.value.backToHome) != null ? _c : "Back to home";
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _hoisted_3,
          createBaseVNode("blockquote", null, toDisplayString(getMsg()), 1),
          createVNode(_component_RouterLink, { to: unref(homeLink) }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(homeText)), 1)
            ]),
            _: 1
          }, 8, ["to"])
        ])
      ]);
    };
  }
});
var _404 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "404.vue"]]);
export { _404 as default };
