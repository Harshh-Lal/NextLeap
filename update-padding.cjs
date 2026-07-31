const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src/components');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.tsx')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk(dir);

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  // Avoid replacing if it's already md:px-margin-page or lg:px-margin-page
  const regex = /(?<![a-z]{2}:)px-margin-page/g;
  
  if (regex.test(content)) {
    content = content.replace(regex, 'px-6 md:px-margin-page');
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated:', file);
  }
});
