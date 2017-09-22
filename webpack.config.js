const path = require('path');

const PATHS = {
  build: path.resolve(__dirname, 'build'),
  src: path.join(__dirname, 'src')
};

const commonConfig = (RELEASE = false) => ({
  context: PATHS.src,

  entry: {
    app: ['./app']
  },

  output: {
    path: PATHS.build,
    filename: '[name].bundle.js'
  },

  resolve: {
    modules: [
      path.join(__dirname, 'src'),
      'node_modules'
    ],
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@views': path.resolve(PATHS.src, 'views'),
      '@utils': path.resolve(PATHS.src, 'utils'),
      '@styles': path.resolve(PATHS.src, 'styles')
    },
  },

  module: {
    rules: [
      {
        test: /\.scss|\.css/,
        use: [
          {
            loader: 'isomorphic-style-loader'
          }, {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: !RELEASE,
              camelCase: true,
              localIdentName: RELEASE === true
                ? '[hash:base64:3]'
                : '[name]_[local]_[hash:base64:3]',
              importLoaders: 2
            }
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: !RELEASE
            }
          }, {
            loader: 'postcss-loader'
          }
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
    host: '0.0.0.0'
  },

  devtool: 'source-map'
});

module.exports = env => commonConfig(env.release);
