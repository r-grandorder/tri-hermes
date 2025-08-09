const { defaultTheme } = require("vuepress");  
const { seoPlugin } = require("vuepress-plugin-seo2");  
const { sitemapPlugin } = require("vuepress-plugin-sitemap2");  
const { googleAnalyticsPlugin } = require('@vuepress/plugin-google-analytics');  
const { searchPlugin } = require('@vuepress/plugin-search')  
  
module.exports = {  
    lang: "en-US",  
    title: "TRI-HERMES",  
    description: "TYPE-MOON Lore Database",  
    head: [  
        ["meta", { name: "theme-color", content: "#3eaf7c" }],  
        ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],  
        [  
            "meta",  
            { name: "apple-mobile-web-app-status-bar-style", content: "black" },  
        ],  
		['link', { rel: 'icon', href: 'https://i.imgur.com/kDHyJX2.png', type: 'image/png' }],  
    
	],  
	extendPageData($page) {
        // Check if the page has a custom embedImage specified in front matter
        if ($page.frontmatter.embedImage) {
            // If so, set the favicon to the custom embedImage
            $page.frontmatter.head = [
                ['link', { rel: 'icon', href: $page.frontmatter.embedImage, type: 'image/png' }],
            ];
        }
    },

  markdown: {
    config: (md) => {
      md.core.ruler.push("alt_from_nearest_heading", (state) => {
        let currentHeading = null;

        const humanizeFromSrc = (src) => {
          try {
            const file = (src || "").split("/").pop() || "";
            const base = file.split(".").slice(0, -1).join(".") || "";
            const cleaned = base.replace(/[-_]+/g, " ").trim();
            return cleaned || "Image";
          } catch {
            return "Image";
          }
        };

        for (let i = 0; i < state.tokens.length; i++) {
          const t = state.tokens[i];

          if (t.type === "heading_open") {
            const inline = state.tokens[i + 1];
            if (inline && inline.type === "inline") {
              const txt = (inline.content || "").trim();
              if (txt) currentHeading = txt;
            }
          }

          if (t.type === "inline" && Array.isArray(t.children)) {
            for (let j = 0; j < t.children.length; j++) {
              const c = t.children[j];
              if (c.type === "image") {
                let alt = (c.content || "").trim();
                if (!alt || alt.toLowerCase() === "image") {
                  const src = c.attrGet("src") || "";
                  const fallback = currentHeading || humanizeFromSrc(src);
                  c.attrSet("alt", fallback || "Image");
                }
                if (!c.attrGet("loading")) c.attrSet("loading", "lazy");
                if (!c.attrGet("decoding")) c.attrSet("decoding", "async");
              }
            }
          }
        }
        return false;
      });
    },
  },

    theme: defaultTheme({  
        smoothScroll: true,  
        repo: "https://github.com/r-grandorder/tri-hermes",  
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
                text: "Source Materials",  
                children: [  
                    {  
                        text: "Visual and Light Novels",  
                        link: "/novels",  
                    },  
					{  
                        text: "Manga",  
                        link: "/manga",  
                    },  
					{  
                        text: "Materials",  
                        link: "/materials",  
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
                        text: "Fate Map",  
                        link: "/map",  
                    },  
                    {  
                        text: "Articles",  
                        link: "/articles",  
                    },  
                ],  
            },  
            {  
                text: "How to Contribute",  
                link: "/contribution",  
            },  
			{  
                text: "About",  
                link: "/about",  
            },  
			{  
                text: "Discord",  
                link: "https://discord.gg/GzxxEwjzpU",  
            },  
        ],  
        sidebar: 'auto'  
    }),  
    plugins: [  
        seoPlugin({  
            hostname: "https://r-grandorder.github.io",  
            fallBackImage: "https://i.imgur.com/kDHyJX2.png",  
            isArticle: () => false,  
        }),  
        sitemapPlugin({  
            hostname: "https://r-grandorder.github.io",  
            changefreq: "monthly",  
        }),  
        googleAnalyticsPlugin({  
            id: 'G-19VNBHS02E'  
        }),  
        searchPlugin(),  
    ],  
};  
  
