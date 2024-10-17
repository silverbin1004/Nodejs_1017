const fs = require('fs');
const {pipeline} = require('stream');
const {promisify} = require('util');

const pipe = promisify(pipeline);

async function copyFile(){
  try{
    await pipe(
      fs.createReadStream('sourceFile.txt'),
      fs.createWriteStream('destinationFile.txt')
    );
    console.log('File copy completed');
  } catch (err){
    console.error('Pipeline failed.', err);
  }
}

copyFile();