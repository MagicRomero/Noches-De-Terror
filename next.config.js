const withImages = require("next-images");

module.exports = withImages({
  esModule: true,
  inlineImageLimit: false,
  pageExtensions: ["mdx", "jsx", "js", "ts", "tsx"],
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "es",
  },
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
      });
    }

    return config;
  },
});
