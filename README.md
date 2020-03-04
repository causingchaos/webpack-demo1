
If running npm first time, just run npm install to install from .json

Webpack setup //
npm install webpack@4.28.4 --save-dev
npm install webpack-cli --save-dev

//jquery
npm install jquery --save

//run webpack
./node_modules/.bin/webpack   >> this will output main.js in dist folder.
or just use NPX if you don't want global install of webpack or webpack-cli

// running with -w flag, i.e. webpack -w  for file watcher


// Webpack loaders
Preform transformations on files (transpiling)
Help load files and images
Deal with dialects

babel-loader  for webpack
JSX or ES2015-2019 ---> plain javascript (ES5)
https://webpack.js.org/loaders/
npm install babel-loader @babel/core --save-dev
then add to webpack config, rules to transpile JS code to ES5
module: {
        rules: [
            {
                test: /\.js$/,  //please transpile any JS files with babel
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }

to actually transpile, we need @babel/preset-env    -- compile to compatibility for most browsers
npm install @babel/preset-env --save-dev
Now add extra options for preset-env to webpack config
loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }


// install react  or alternatively, use the lit-html stuff --- vaalin tutorial on webpack/lit html
npm install react react-dom --save
npm install @babel/preset-react --save-dev
add to webpack again
extra preset:   presets: ['@babel/preset-env', @babel/preset-react']

now add a .babelrc file
{
    "presets": ["@babel/preset-react", "@babel/preset-env"]
}


// LOADING CSS
create a styles.css in src .. in index.js : import './styles.css';
now install csss loader:
npm install style-loader css-loader
Now add css loader in webpack config
rules: [
    {old },
    { 
        test: /\.css$/,
        use: [
            {loader: 'style-loader},
            {loader: 'css-loader}
        ]
    }
]

// LOADING Images with CSS
need URL loader
npm install url-loader --save-dev
add a new webpack config rule for url-loader
{
                test: /\.(png|jpg)$/,
                use: [
                    {loader: 'url-loader'}
                ]
            }

// setup webpack Dev server
npm install webpack-dev-server --save-dev
now add another node to webpack.config:
     path: path.resolve(__dirname, "dist")
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 9000
    },
    module: {

add a new build script for dev server to package.json
"start:dev": "./node_modules/.bin/webpack-dev-server"   -- don't need node_modules unless you are using it in --save-dev

// Code splitting
optimize code for preformance
optimize code for developer workflow
--> can break up code into different bundles.
--> multiple entry points

About-us.js --> about-us.bundle.js
Home-us.js -> home-us.bundle.js
entry: {
        about: "./src/about.js",
        contact: "./src/contact.js",
    },

now add an optimization section to webpack config
    optimization: {
        splitChunks: {
            chunks: 'all'   //look for repeated code in bundles
        }
    },

 // HtmlWebpackPlugin
    generates an html in dist folder that links to the bundle
import into webpack config    
npm install html-webpack-plugin --save-dev
webpack --> 
},
    plugins: [new HtmlWebpackPlugin()],
    module: {

// Minifiers -- good for prod
npm install uglifyjs-webpack-plugin --save-dev
import in webpack config
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
add a new optimization section to webpack config --> 


npm install --save @polymer/lit-element



//// LIT ELEMENT ISSUES ::
Issue: main.js:13369 Uncaught TypeError: Class constructor LitElement cannot be invoked without 'new'

solution, add a rule to transpiling:
include: /node_modules(?:\/|\\)lit-element|lit-html/,  //transpile lit-element shit
