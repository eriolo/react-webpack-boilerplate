const path = require('path');

const PATHS = {
  build: path.resolve(__dirname, 'build'),
  src: path.join(__dirname, 'src')
};

const commonConfig = (RELEASE = false) => ({
  context: PATHS.src,

  entry: {
    app: [
      './app'
    ]
  },

  output: {
    path: PATHS.build,
    filename: '[name].bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          'classnames-loader',
          'isomorphic-style-loader', {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: !RELEASE,
              // CSS Modules https://github.com/css-modules/css-modules
              modules: true,
              localIdentName: RELEASE ? '[hash:base64:3]' : '[name]_[local]_[hash:base64:3]'
            }
          },
          'postcss-loader'
        ]
      }, {
        test: /\.js|\.jsx$/,
        use: [
          {
            loader: 'babel-loader'
          }
        ],
        exclude: /node_modules/
      }
    ]
  },

  devServer: {
    hot: !RELEASE,
    contentBase: PATHS.build,
    publicPath: '/',
    port: 3000,
  },

  devtool: 'source-map'
});

module.exports = (env) => commonConfig(env.release);


// module.exports = commonConfig;
