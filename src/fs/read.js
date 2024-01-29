import { promises as fsPromises } from 'fs';
import path from 'path';

const read = async () => {
    const fileName = 'fileToRead.txt';
    const folderPath = './files';
    const filePath = path.join(folderPath, fileName);

    try {
        // asynchronously read a content of the file
        const fileContent = await fsPromises.readFile(filePath, 'utf8');
        console.log('File content:');
        console.log(fileContent);
    } catch (error) {
        if (error.code === 'ENOENT') {
            // throw an error if the file doesn't exist
            throw new Error('FS operation failed');
        } else {
            // if any other error occurs show it in console
            console.error(error.message);
        }
    }
};

await read();