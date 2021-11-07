const { watch } = require('fs');
const path = require('path');
const { EntryOptionPlugin } = require('webpack')

module.exports={
    entry: './src/index.js',
    output:{
        path:path.resolve('../',"public/javascripts"),
        filename:"bundle.js",
    },
    mode: process.env.NODE_ENV ==="production"? "production":"development",
    module: {
        rules: [
          {
            test: /\.?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
              }
            }
          },
        ]
      },
};