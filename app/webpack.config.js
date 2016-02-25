const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const path = require('path');

module.exports = {
  entry: './app.js', /* entry point telling webpack what we want build */
  output: { /* output location */
    path: path.resolve(__dirname,'../server/public'), /* path to output location */
    filename: 'bundle.js' /* filename for the bundled files from app.js */
  },
  plugins: [ /* this creates a index.html page automatically with our basic template we used in the app directory */
        new HtmlWebpackPlugin({
          template: './index.html'
        })
  ],
  /* loaders for our app.js allowing us to bundle html, css, and js files that we imported in our app.js, notice we use the babel-preset-es2015 in our query to allow us to use es6    */
  module: {
    loaders: [

      {
        test: /\.css$/,
        loader:'style!css'
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.html$/,
        loader: 'html'
      }
    ]
  },
  /* the resolve allows us to not have to put the extensions of '', .js, and .css when importing our files in app.js */
  resolve: {
    extensions: ['', '.js', '.css']
  }
};
