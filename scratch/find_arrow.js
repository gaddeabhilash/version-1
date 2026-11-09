const fs = require('fs');
const html = fs.readFileSync('scratch/blank3.html', 'utf8');

// Find words like Start Your Project, arrow, gif, etc.
const idx = html.indexOf('Start Your Project');
console.log('Index of Start Your Project:', idx);
if (idx !== -1) {
  console.log('Surrounding text:', html.substring(idx - 500, idx + 1000));
}

// Find any wix media on the page
const mediaMatches = html.match(/fe8761_[a-zA-Z0-9~_.-]+/g);
console.log('Unique media IDs:', [...new Set(mediaMatches)]);

// Check for arrow or gif or vector
const arrowMatches = html.match(/"url":"([^"]*(?:arrow|gif|vector|animation)[^"]*)"/gi);
console.log('Arrow matches:', arrowMatches);

