// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    site: {
        name: 'Your Name Portfolio',
        url: 'https://your-portfolio.example.com',
        description: 'Independent designer/developer portfolio — projects, updates, services, contact.',
        defaultLocale: 'en',
    },
    sitemap: {},
    app: {
        pageTransition: {name: 'page', mode: 'out-in'},
        head: {
            meta: [{name: 'viewport', content: 'width=device-width, initial-scale=1'}],
        }
    },
    modules: ['@nuxtseo/module', 'nuxt-gtag'],
    css: ["@/assets/scss/app.scss"],
    vite: {
        server: {
            hmr: {
                port: 5050
            }
        }
    },
    gtag: {
        id: 'G-XXXXXXX'
    },
    devtools: {
        enabled: true,

        timeline: {
            enabled: true
        }
    }
});
