import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
    srcDir: 'client/',
    ssr: true,
    dev: process.env.NODE_ENV !== 'production',
    alias: {
        tslib: 'tslib/tslib.es6.js',
        '~/*': 'client/*',
        '@/*': 'client/*',
        fflate: 'fflate/esm/browser.js',
    },

    privateRuntimeConfig: {},

    plugins: ['~/plugins/apolloComposable.ts'],

    buildModules: ['@nuxtjs/vuetify'],
    modules: ['@nuxtjs/apollo'],

    apollo: {
        clientConfigs: {
            default: {
                httpEndpoint: 'https://api.spacex.land/graphql/',
            },
        },
        defaultOptions: {
            $watchQuery: { errorPolicy: 'all' },
            $mutate: { errorPolicy: 'all' },
            $query: {
                // fetchPolicy: 'cache-and-network',
                errorPolicy: 'all',
            },
        },
    },

    vuetify: {
        optionsPath: '~/vuetify.options.js',
        defaultAssets: false,
    },

    build: {
        publicPath: '/resources/',
        // @ts-ignore
        extractCSS:
            process.env.NODE_ENV === 'production'
                ? {
                      ignoreOrder: true,
                  }
                : false,
        optimizeCSS: process.env.NODE_ENV === 'production',
        // hardSource: process.env.NODE_ENV !== 'production',
        // parallel: process.env.NODE_ENV !== 'production',
        // cache: process.env.NODE_ENV !== 'production',
    },
})
