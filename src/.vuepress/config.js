const { defaultTheme } = require("vuepress");
// const { seoPlugin } = require("vuepress-plugin-seo2");
// const { sitemapPlugin } = require("vuepress-plugin-sitemap2");

module.exports = {
    base: "/wiki/",
    lang: "en-US",
    title: "FGO Wiki",
    description: "/r/grandorder wiki",
    head: [
        ["meta", { name: "theme-color", content: "#3eaf7c" }],
        ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
        [
            "meta",
            { name: "apple-mobile-web-app-status-bar-style", content: "black" },
        ],
        ["meta", { property: 'og:image', href: 'https://i.imgur.com/ZsRygrA.png' }]
    ],
    theme: defaultTheme({
        smoothScroll: true,
        repo: "https://github.com/r-grandorder/wiki",
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
    }),
    plugins: [
        // seoPlugin({
        //     hostname: "https://squaresmile.github.io/rgo-wiki",
        // }),
        // sitemapPlugin({
        //     hostname: "https://squaresmile.github.io/rgo-wiki",
        //     changefreq: "monthly",
        // }),
        [
            '@vuepress/google-analytics',
            {
                'ga': 'G-19VNBHS02E'
            }
        ]
    ],
};