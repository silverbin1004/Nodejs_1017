const fs = require('fs');

const source = fs.createReadStream('sourceFile.txt');
const destination = fs.createWriteStream('destination.txt');

let totlaBytes = 0;

source.pipe(destination);

source.on('data',(chunk) => {
  totlaBytes += chunk.length;
  console.log(`Copied ${totlaBytes} bytes of data.`);
});

source.on('end',() => {
  console.log('File copy completed.');
});

source.on('error',(err) => {
  console.log('Read Error:', err);
});

destination.on('error',(err) => {
  console.log('Write Error:', err);
});