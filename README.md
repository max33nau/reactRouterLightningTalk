# reactRouterLightningTalk

## Terminal Steps:

#Make a root directory for your react-router
  mkdir reactRouterExample
  cd reactRouterExample

#Set up inital separate folders for webpack, one will be app where we will be doing all the work and the other will be server where will give the location for webpack to build in the public folder
  mkdir app
  mkdir server
  cd server
  mkdir public
  cd ..
  cd app
  touch app.js index.html

#Create your package.json file still in app directory assuming you have node.js installed
  npm init

#Install dependencies
  npm install react-router --save

#Install dev-dependencies, we will be using es6 in this walk through so make sure you get the babel loader and presets
  npm install webpack html-webpack-plugin babel-core babel-loader babel-preset-es2015 css-loader html-loader path style-loader webpack-dev-server  --save-dev

#Create webpack config file
  touch webpack.config.js

##Open your editor and lets get to work

##Editor Steps:

#Webpack set up
  lets set up our webpack.config.js file first
  we will be using our html-webpack-plugin module to create a index.html file in the server so we will need to require that. We will also need to have our output location for webpack so we will be using the path module to create our location.

#webpack.config.js
  at the top of the file type:
    const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
    const path = require('path');

  next we will need to export our webpack.config.js object with             with all of its configurations.

  type (you can leave the commented stuff out if you want and ignore the colors, they won't show up in your javascript file):

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
            presets: ['es2015']
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

ignore /*

#package.json

  next we will have to change our package.json "scripts" key to be able to run webpack and the webpack-dev-server, the webpack-dev-server will allow us to look at our app.js being ran as if it has already been bundled and see the results that would occur in our server directory

  after the "tests" line add a comma and then type:
    "start": "webpack-dev-server --inline --hot",
    "build": "webpack"

  the --inline --hot on the webpack-dev-server will automatically change when we make changes in our app directory so we won't have to continuously start the server over whenever we make a change.

#Check status
  first lets see if our webpack is bundling up our files so in the terminal type (still in the app directory):

    npm run build

  if you get a error make sure your node_modules are in the app directory as well

  now if you look in our server/public folder there should be a file called bundle.js and index.html, don't worry about the contents in bundle.js, just know that it is webpack bundling our app.js in the app directory

#perfect if you have made it this far it is time to start our react router tutorial
