const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
  },
  future: {
    webpack5: true,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new CopyPlugin({
        patterns: ["prisma/dev.db"],
      })
    );
    return config;
  },
};
