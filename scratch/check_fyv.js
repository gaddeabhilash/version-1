const fs = require('fs');
const html = fs.readFileSync('scratch/blank3.html', 'utf8');
const occurrences = [];
let pos = 0;
while ((pos = html.indexOf('comp-mpb03fyv', pos)) !== -1) {
  occurrences.push(pos);
  pos += 'comp-mpb03fyv'.length;
}
for (const p of occurrences) {
  console.log('Pos:', p, html.substring(p - 50, p + 400));
}

