const withImages = require('next-images');
const withFonts = require('next-fonts');

module.exports = withImages(
  withFonts({
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
    env: {
      ENVIRONMENT: process.env.APP_ENV || 'production',
    },
  }),
);
