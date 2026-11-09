const fs = require('fs');
const html = fs.readFileSync('scratch/blank3.html', 'utf8');
const p = html.indexOf('comp-mpb6zy6f');
console.log(html.substring(p, p + 2500));

