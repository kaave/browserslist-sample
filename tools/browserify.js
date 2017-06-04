const fs = require('fs');
const browserify = require('browserify');

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

browserify(`${__dirname}/../source/index.js`)
  .transform('babelify', babelConfig)
  .bundle()
  .pipe(fs.createWriteStream('./build/browserify.js'));

