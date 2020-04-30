const withImages = require('next-images');

module.exports = withImages({
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
});
