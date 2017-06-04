const browserslist = require('browserslist');
const autoprefixer = require('autoprefixer');

const packageJson = require('../package.json');

const browsers = browserslist(packageJson.browserslist);

console.log('---Query---');
console.log(packageJson.browserslist);
console.log('\n---Target browsers---');
console.log(browsers);
console.log('\n---Coverage---');
console.log(`${browserslist.coverage(browsers)}%`);
console.log('\n---autoprefixer info---');
console.log(autoprefixer({ browsers: packageJson.browserslist }).info());

