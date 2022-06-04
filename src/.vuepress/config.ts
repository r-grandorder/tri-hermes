import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import { sitemap } from "vuepress-plugin-sitemap2";
import { seo } from "vuepress-plugin-seo2";

export default defineUserConfig<DefaultThemeOptions>({
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#title
     */
    title: "FGO Wiki",
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#description
     */
    description: "r/grandorder wiki",

    /**
     * Extra tags to be injected to the page HTML `<head>`
     *
     * ref：https://v1.vuepress.vuejs.org/config/#head
     */
    head: [
        ["meta", { name: "theme-color", content: "#3eaf7c" }],
        ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
        [
            "meta",
            { name: "apple-mobile-web-app-status-bar-style", content: "black" },
        ],
    ],

    /**
     * Theme configuration, here is the default theme configuration for VuePress.
     *
     * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
     */
    themeConfig: {
        smoothScroll: true,
        repo: "https://github.com/squaresmile/rgo-wiki",
        editLinks: true,
        docsDir: "src",
        editLinkText: "Help us improve this page!",
        lastUpdated: true,
        navbar: [
            {
                text: "Main FGO Scenario",
                children: [
                    {
                        text: "Main Story",
                        link: "/story",
                    },
                    {
                        text: "Events",
                        link: "/events",
                    },
                    {
                        text: "Servants",
                        link: "/servants",
                    },
                ],
            },
            {
                text: "Meta Lore",
                children: [
                    {
                        text: "Bamboo Broom Diary",
                        link: "/bamboo",
                    },
                    {
                        text: "Interviews",
                        link: "/interviews",
                    },
                    {
                        text: "Articles",
                        link: "/articles",
                    },
                ],
            },
            {
                text: "About",
                link: "/about",
            },
            {
                text: "Feedback",
                link: "/feedback",
            },
        ],
        sidebar: {
            "/": [
                {
                    text: "Main FGO Scenario",
                    children: [
                        {
                            text: "Main Story",
                            link: "/story",
                        },
                        {
                            text: "Events",
                            link: "/events",
                        },
                        {
                            text: "Servants",
                            link: "/servants",
                        },
                    ],
                },
                {
                    text: "Meta Lore",
                    children: [
                        {
                            text: "Bamboo Broom Diary",
                            link: "/bamboo",
                        },
                        {
                            text: "Interviews",
                            link: "/interviews",
                        },
                        {
                            text: "Articles",
                            link: "/articles",
                        },
                    ],
                },
                {
                    text: "About",
                    link: "/about",
                },
                {
                    text: "Feedback",
                    link: "/feedback",
                },
            ],
        },
    },

    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: [
        "@vuepress/plugin-back-to-top",
        "@vuepress/plugin-medium-zoom",
        seo({
            hostname: "https://squaresmile.github.io/rgo-wiki",
            isArticle: () => false,
            customHead: (head) => {
                for (let index = head.length - 1; index >= 0; index--) {
                    if (head[index][1]?.["name"] == "twitter:card") {
                        head.splice(index, 1);
                    }
                }

                head.push(
                    [
                        "meta",
                        {
                            property: "og:image",
                            content: "https://docs.chaldea.center/logo.png",
                        },
                    ],
                    [
                        "meta",
                        {
                            property: "og:image:type",
                            content: "image/png",
                        },
                    ],
                    [
                        "meta",
                        {
                            property: "og:image:width",
                            content: "64",
                        },
                    ],
                    [
                        "meta",
                        {
                            property: "og:image:height",
                            content: "64",
                        },
                    ],
                    [
                        "meta",
                        {
                            property: "og:image:alt",
                            content: "/r/grandorder icon",
                        },
                    ],
                    [
                        "meta",
                        {
                            property: "og:description",
                            content:
                                "/r/grandorder wiki",
                        },
                    ]
                );
            },
        }),
        sitemap({
            hostname: "https://squaresmile.github.io/rgo-wiki",
            changefreq: "monthly",
        }),
    ],
});
