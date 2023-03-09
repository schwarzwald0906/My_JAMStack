module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.watchOptions.ignored = [
        /\.history/, // .historyディレクトリを無視する
        /node_modules/,
      ]
    }
    return config
  },
}
