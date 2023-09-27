const fs = require('fs');

// Write to a file
fs.writeFileSync('sample.txt', 'Hello, Node.js!');

// Read from a file
const data = fs.readFileSync('sample.txt', 'utf8');
console.log('File contents:', data);
