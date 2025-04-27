import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, d as createTextVNode, e as createStaticVNode } from "./app.daa2d891.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "about-page",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#about-page",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" About Page")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "about-this-website",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#about-this-website",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" About This Website")
], -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", null, "TRI-HERMES is an ever-growing resource dedicated to hosting all TYPE-MOON content in one convenient place for all your lore needs.", -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createTextVNode("Ideally it is intended for users to quickly "),
  /* @__PURE__ */ createBaseVNode("code", null, "ctrl+f"),
  /* @__PURE__ */ createTextVNode(" a particular citation they require. It is still highly recommended to consume TYPE-MOON products as they are intended to be. (Playing the VN, reading the LN in a e-book, playing FGO scenarios in-game, etc)")
], -1);
const _hoisted_5 = /* @__PURE__ */ createTextVNode("This project started off with some story scripts being parsed in grandorder.wiki. After quickly being limited by that wiki's environment, this Vuepress markdown wiki was devised. Big thanks to Enshael of r/GO and Cereal of Atlas Academy to set this website up. Not to mention all FGO NA scripts are parsed thanks to ");
const _hoisted_6 = {
  href: "https://apps.atlasacademy.io/db/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_7 = /* @__PURE__ */ createTextVNode("Atlas Academy's DB.");
const _hoisted_8 = /* @__PURE__ */ createStaticVNode('<p>While initially meant to be FGO-only, the opportunity was taken to encompass all of TYPE-MOON.</p><blockquote><p>&quot;This wiki was made during a spur-of-the-moment decision and has quickly consumed my waking life.&quot;</p></blockquote><p>~ Lib</p><h2 id="coming-soon" tabindex="-1"><a class="header-anchor" href="#coming-soon" aria-hidden="true">#</a> Coming Soon</h2><ul><li>Fate/Hollow Ataraxia Script</li><li>Lord El Melloi Case Files Section</li><li>Lost:Einharjar Section</li><li>Fate/Extella Script</li><li>Servant Valentines pages</li><li>JP Scripts of Main FGO Chapters</li></ul><p><img src="https://i.imgur.com/lu07Lmz.png" alt=""></p>', 6);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    _hoisted_2,
    _hoisted_3,
    _hoisted_4,
    createBaseVNode("p", null, [
      _hoisted_5,
      createBaseVNode("a", _hoisted_6, [
        _hoisted_7,
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_8
  ]);
}
var about_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "about.html.vue"]]);
export { about_html as default };
