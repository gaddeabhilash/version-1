const fs = require('fs');
const html = fs.readFileSync('scratch/blank3.html', 'utf8');
const p = html.indexOf('data-bbox="35.501 27 129 145.999"');
console.log(html.substring(p - 100, p + 2000));

