const fs = require('fs');
const html = fs.readFileSync('scratch/blank3.html', 'utf8');
const p = html.indexOf('motion-swing-1');
console.log(html.substring(p - 100, p + 1500));

const kf = html.indexOf('@keyframes motion-swing');
if (kf !== -1) {
  console.log('Keyframes:', html.substring(kf, kf + 1000));
}

