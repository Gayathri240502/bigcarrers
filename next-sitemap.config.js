/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://bigcareers.solutions",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  generateIndexSitemap: false,
  priority: null, // Prevent default priority of 0.7
  transform: async (config, path) => {
    return {
      loc: path, // Page URL
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: path === "/" ? 1.0 : path.startsWith("/service") ? 0.95 : 0.9, // Customize priorities
    };
  },
};
