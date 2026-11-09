const fs = require('fs');
const html = fs.readFileSync('scratch/blank3.html', 'utf8');
const idx = html.indexOf('Start Your Project');
console.log(html.substring(idx - 200, idx + 3500));

