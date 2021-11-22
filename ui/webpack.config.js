const { watch } = require('fs');
const path = require('path');
const { EntryOptionPlugin } = require('webpack')

module.exports={
    entry: './src/index.js',
    output:{
        path:path.resolve('../',"public/javascripts"),
        filename:"bundle.js",
        assetModuleFilename: '../images/[hash][ext][query]'
    },
    mode: process.env.NODE_ENV ==="production"? "production":"development",
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
              }
            }
          },
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.scss$/i,
            use: ["style-loader", "css-loader",'sass-loader'],
          },
          {

            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource'
     
          }
          
          
        ]
      },
};
