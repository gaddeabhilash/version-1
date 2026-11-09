const fs = require('fs');
const path = require('path');

const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));
console.log('HTML files in workspace:', htmlFiles);

let hasError = false;

for (const file of htmlFiles) {
  const content = fs.readFileSync(file, 'utf8');
  
  // 1. Check local image src
  const imgRegex = /<img[^>]+src=["']([^"']+)["']/gi;
  let match;
  while ((match = imgRegex.exec(content)) !== null) {
    let src = match[1];
    if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:')) continue;
    src = src.split('?')[0];
    if (src.startsWith('/')) src = '.' + src;
    src = decodeURIComponent(src);
    if (!fs.existsSync(src)) {
      console.error(`[BROKEN IMG] ${file} -> ${src}`);
      hasError = true;
    }
  }

  // 2. Check internal link hrefs
  const linkRegex = /<a[^>]+href=["']([^"']+)["']/gi;
  while ((match = linkRegex.exec(content)) !== null) {
    let href = match[1];
    if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('http://') || href.startsWith('https://')) continue;
    href = href.split('?')[0].split('#')[0];
    if (href === '' || href === '/') continue;
    let localPath = href.startsWith('/') ? '.' + href : href;
    localPath = decodeURIComponent(localPath);
    if (!fs.existsSync(localPath)) {
      console.error(`[BROKEN LINK] ${file} -> ${href} (resolves to ${localPath})`);
      hasError = true;
    }
  }
}

if (!hasError) {
  console.log('SUCCESS: All internal links and local images across all HTML pages exist and resolve cleanly!');
}

