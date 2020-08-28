const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const CracoAntDesignPlugin = require('craco-antd')

module.exports = {
  plugins: [{ plugin: CracoAntDesignPlugin }],
  devServer: {
    open: false,
  },
  webpack: {
    plugins: [new ProgressBarPlugin()],
  },
}
