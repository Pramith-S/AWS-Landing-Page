import fs from 'fs';

const filePath = 'src/data/coreTeamData.js';
let content = fs.readFileSync(filePath, 'utf8');

// Replace member photo paths from .jpg to .png, leaving group photos intact
content = content.replace(/(\/images\/core-team\/members\/[^']+)\.jpg/g, '$1.png');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated member photos in coreTeamData.js to .png');
