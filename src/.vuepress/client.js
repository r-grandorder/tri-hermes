/**
 * https://v2.vuepress.vuejs.org/guide/configuration.html#client-config-file
 */

import {defineClientConfig} from '@vuepress/client'

export default defineClientConfig({
    enhance({app, router, siteData}) {
        // Rewrite urls from the old mdwiki paths to the vuepress paths
        // https://r-grandorder.github.io/wiki/en/#!pages/Lostbelt/traum-summary-fumei.md
        // https://r-grandorder.github.io/wiki/Lostbelt/traum-summary-fumei.md

        router.addRoute({
            path: '/en/', redirect: (to) => {
                return {path: to.hash.substring(7).replace(/\.md$/, '.html'), hash: null};
            }
        });
    },
    setup() {
    },
    rootComponents: [],
})