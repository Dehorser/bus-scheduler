// Webpack optimization is ruining CSS opacity
// See: https://github.com/NMFR/optimize-css-assets-webpack-plugin/issues/118

module.exports = {
  webpack: function(config) {
    config.optimization.minimizer = [];
    return config;
  }
}