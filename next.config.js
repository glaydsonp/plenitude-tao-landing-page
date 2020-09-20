const path = require('path');
const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');

const NextAppConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  trailingSlash: true
};

/* Export declaration */
module.exports = withPlugins(
  [
    [
      withImages({
        esModule: true,
        // assetPrefix: 'http://plenitudetao.com',
        webpack(config, options) {
          return config;
        }
      })
    ]
  ],
  NextAppConfig
);
