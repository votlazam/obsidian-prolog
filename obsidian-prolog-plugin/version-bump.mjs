import fs from 'fs';

function bumpVersion(version) {
  const parts = version.split('.').map(Number);
  parts[2]++;
  return parts.join('.');
}

function updateFile(file) {
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  data.version = bumpVersion(data.version);
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  console.log(`Updated ${file} to version ${data.version}`);
}

updateFile('package.json');
updateFile('manifest.json'); 