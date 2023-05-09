const path = require('path');
const fs = require('fs');

const writingHanler = async () => {
  const pathToFile = path.join(__dirname, 'text.txt');
  const stream = fs.createWriteStream(pathToFile, { encoding: 'utf-8' });

  process.stdout.write('\nWrite your text: \n');
  process.stdin.on('data', (chunk) => {
    const parsedChunk = chunk.toString('utf8');
    if (parsedChunk.includes('exit')) {
      process.stdout.write('\n✅ Your data was saved. \n');
      process.exit();
    } else {
      stream.write(chunk);
    }
  });
  process.on('SIGINT', () => {
    process.stdout.write('\n✅ Your data was saved. \n');
    process.exit();
  });
};

writingHanler();
