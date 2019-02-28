const path = require('path')
const webpack = require('webpack')

module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['.js'],
      alias: {
        'jquery': 'jquery/dist/jquery.min.js'
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        '$': 'jquery',
        jQuery: 'jquery',
        Popper: ['popper.js', 'default'],
        'Util': "exports-loader?Util!bootstrap/js/dist/util"
      })
    ]
  },
  css: {
		loaderOptions: {
			sass: {
				data: `
          @import "bootstrap/scss/bootstrap.scss";
        `
			}
		}
  },
  // publicPath: process.env.NODE_ENV ? '/demo/frontend-challenge/' : '/',
  productionSourceMap: false
}