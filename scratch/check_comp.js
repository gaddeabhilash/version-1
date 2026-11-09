const fs = require('fs');
const html = fs.readFileSync('scratch/blank3.html', 'utf8');

// Find all occurrences of mpb03
const matches = html.match(/comp-mpb03[a-zA-Z0-9]+/g);
console.log('comp-mpb03 components:', [...new Set(matches)]);

// Let's inspect where these comp-mpb03 are defined
for (const id of new Set(matches)) {
  const i = html.indexOf(id);
  console.log(id, '-->', html.substring(i - 100, i + 300));
}

