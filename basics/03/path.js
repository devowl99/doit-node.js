const path = require("path");
console.log(`전체 경로(__filename) : ${__filename}`);
const fn2 = path.basename(__filename, '.js');

console.log(fn2);