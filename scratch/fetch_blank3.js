const https = require('https');
const fs = require('fs');

https.get('https://www.bhahaus.com/blank-3', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('Status:', res.statusCode, 'Length:', data.length);
    fs.writeFileSync('scratch/blank3.html', data);
    const gifs = data.match(/https:\/\/[^"'<>\s]+\.(gif|webp|svg|png)/gi);
    console.log('Images/animations found:', [...new Set(gifs)].slice(0, 25));
  });
}).on('error', err => console.error(err));

