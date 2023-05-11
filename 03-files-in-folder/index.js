const path = require('path');
const fs = require('fs/promises');

const fileInfo = async () => {
  const pathToFile = path.join(__dirname, 'secret-folder');
  const dirEntries = await fs.readdir(pathToFile, { withFileTypes: true });
  const sortedFiles = dirEntries.filter((dir) => dir.isFile());

  sortedFiles.forEach(async (file) => {
    const extnameGet = path.extname(file.name);
    const extname = extnameGet.slice(1);

    const basename = path.basename(file.name, extname);

    const pathToFile = path.join(__dirname, 'secret-folder', file.name);

    const stat = await fs.stat(pathToFile);
    const sizeOfFile = `${stat.size}b`;

    process.stdout.write(`${basename} - ${extname} - ${sizeOfFile}\n`);
  });
};

fileInfo();
