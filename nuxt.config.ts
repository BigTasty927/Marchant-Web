// https://nuxt.com/docs/api/configuration/nuxt-config
import {caseStudiesBySlug} from './content/case-studies/index.js'

export default defineNuxtConfig({
    site: {
        name: 'Thomas Clarke',
        url: 'https://thomasclarke.studio',
        description: 'Building intelligent systems. Creating meaningful experiences.',
        defaultLocale: 'en',
    },
    app: {
        head: {
            htmlAttrs: {lang: 'en'},
            meta: [
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {name: 'theme-color', content: '#f4f1ea'},
            ],
            link: [
                {rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg'},
            ],
        },
    },
    modules: ['@nuxtseo/module'],
    sitemap: {
        urls: Object.keys(caseStudiesBySlug).map((slug) => `/work/${slug}`),
    },
    css: ['@/assets/scss/app.scss'],
})
