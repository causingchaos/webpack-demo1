const path = require('path');
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');
const webcomponentsjs = './node_modules/@webcomponents/webcomponentsjs';

const polyfills = [
    {
      from: resolve(`${webcomponentsjs}/webcomponents-*.{js,map}`),
      to: 'vendor',
      flatten: true
    },
    {
      from: resolve(`${webcomponentsjs}/bundles/*.{js,map}`),
      to: 'vendor/bundles',
      flatten: true
    },
    {
      from: resolve(`${webcomponentsjs}/custom-elements-es5-adapter.js`),
      to: 'vendor',
      flatten: true
    }
  ];

  const assets = [
    {
      from: 'src/img',
      to: 'img/'
    }
  ];


module.exports = ({ mode }) => {
    return {
        mode,
        entry: './src/index.js',
        output: {
            filename: '[name].[chunkhash:8].js',  
          //filename: "main.js",

          //  path: path.resolve(__dirname, "dist")
          // 
        },
        devServer: {
            contentBase: path.join(__dirname, "dist"),
            port: 9000,
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: './src/index.html'
            }),
            new CopyPlugin([...polyfills, ...assets])
        ],
        devtool: mode === 'development' ? 'source-map' : 'none',
        module: {
            rules: [
                {
                    test: /\.js$/,  //please transpile any JS files with babel
                    exclude: /node_modules/,
                    include: /node_modules(?:\/|\\)lit-element|lit-html/,  //transpile lit-element shit
                    use: {
                        loader: 'babel-loader',
                        options: {
                            plugins: [
                                '@babel/plugin-syntax-dynamic-import',
                            ],
                            presets: ['@babel/preset-env']
                        }
                    }
                },
                {
                    test: /\.css$/,
                    use: [
                        {loader: 'style-loader'},
                        {loader: 'css-loader'}
                    ]
                }

            ],
        }
    }
    
}
