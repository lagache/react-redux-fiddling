const path = require('path');

const PATHS = {
  app: path.join(__dirname, 'app/index.js'),
  build: path.join(__dirname, 'build')
};

module.exports = {
  // Entry accepts a path or an object of entries. We'll be using the
  // latter form given it's convenient with more complex configurations.
  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            },
            // SASS
            {
              test: /\.scss$/,
              loader: 'style!css!sass'
            }
        ]
    }
};
