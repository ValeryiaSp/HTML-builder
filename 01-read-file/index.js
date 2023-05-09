const path = require('path');

const fs = require('fs');

const readingHandler = async () => {
  try {
    const fileToReadPath = path.join(__dirname, 'text.txt');
    const stream = fs.createReadStream(fileToReadPath, { encoding: 'utf-8' });
    stream.on('data', (chunk) => process.stdout.write(chunk));
    stream.on('end', () => process.stdout.write('\n'));
  } catch (error) {
    throw Error(error);
  }
};

readingHandler();
