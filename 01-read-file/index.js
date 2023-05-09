const path = require('path');

const fs = require('fs');

const readingHandler = async () => {
  try {
    const fileToReadPath = path.join(__dirname, 'text.txt');
    const stream = fs.createReadStream(fileToReadPath);
    stream.on('data', (text) => process.stdout.write(text));
  } catch (error) {
    throw Error(error);
  }
};
