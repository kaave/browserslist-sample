const fs = require('fs');
const { transformFileSync } = require('babel-core');

const { browserslist } = require('../package.json');

const babelConfig = {
  presets: [
    [
      'env', {
        targets: {
          browsers: browserslist
        },
        debug: true
      }
    ]
  ],
  babelrc: false
};

if (!fs.existsSync('./build')) {
  fs.mkdirSync('./build');
}
fs.writeFileSync('./build/babel.js', transformFileSync(`${__dirname}/../source/index.js`, babelConfig).code);
// console.log(transformFileSync(`${__dirname}/../source/index.js`, babelConfig).code);

