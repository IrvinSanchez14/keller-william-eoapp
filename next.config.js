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
    env: {
      ENVIRONMENT: process.env.ENVIRONMENT || 'production',
      GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
      USER_CLIENT: process.env.USER_CLIENT,
      USER_PASSWORD: process.env.USER_PASSWORD,
    },
  }),
);
