const withImages = require('next-images');
const withCSS = require('@zeit/next-css');

module.exports = withImages(
  withCSS({
    webpack(cfg) {
      const originalEntry = cfg.entry;
      originalEntry.entry = async () => {
        const entries = await originalEntry();

        if (entries['main.js'] && !entries['main.js'].includes('./client/polyfills.ts')) {
          entries['main.js'].unshift('./client/polyfills.ts');
        }

        return entries;
      };

      return cfg;
    },
    cssModules: true,
    exportTrailingSlash: true,
    publicRuntimeConfig: {
      ENVIRONMENT: process.env.ENV,
    },
  }),
);
