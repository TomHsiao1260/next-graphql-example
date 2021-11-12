module.exports = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    }
    return config
  },
}
