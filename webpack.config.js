const path = require('path');
module.exports = {
  entry: './src/interact.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};