import fs from 'fs';
const log = fs.readFileSync('vite_output.log', 'utf8');
console.log(log);
