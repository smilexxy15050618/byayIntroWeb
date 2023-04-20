const withTypescript = require('@zeit/next-typescript');
const withCSS = require('@zeit/next-css');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

function HACK_removeMinimizeOptionFromCssLoaders(config) {
  console.warn('HACK: Removing `minimize` option from `css-loader` entries in Webpack config');
  config.module.rules.forEach(rule => {
    if (Array.isArray(rule.use)) {
      rule.use.forEach(u => {
        if (u.loader === 'css-loader' && u.options) {
          delete u.options.minimize;
        }
      });
    }
  });
}

module.exports = {
  ...withTypescript(
    withCSS({
      webpack(config) {
        //解决k8s环境打包问题 https://www.cnblogs.com/mybilibili/p/11615055.html
        HACK_removeMinimizeOptionFromCssLoaders(config);
        config.module.rules.push({
          test: /.ttf$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                esModule: false, // 这里设置为false
                        name: '[hash:8].[ext]',
                        outputPath: 'fonts/'
              },
            },
          ],
        })
        if (process.env.ANALYZE) {
          config.plugins.push(
            new BundleAnalyzerPlugin({
              analyzerMode: 'server',
              analyzerPort: 8888,
              openAnalyzer: true,
            }),
          );
        }
        return config;
      },
    }),
  ),
  exportPathMap(routerMap) {
    return routerMap;
  },
  compiler: {
    styledComponents: {
      displayName: true,
    },
  },
};
