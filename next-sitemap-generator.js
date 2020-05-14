const sitemap = require('nextjs-sitemap-generator');

sitemap({
  baseUrl: 'http://eo-dev.kellercovered.io/',
  ignoredPaths: ['reviewpdf'],
  ignoreIndexFiles: true,
  pagesDirectory: './out/',
  targetDirectory: './out/',
});
