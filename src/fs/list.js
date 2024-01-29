import { promises as fsPromises } from 'fs';

const list = async () => {
    const folderPath = './files';

    try {
        // check if 'files' folder exists
        await fsPromises.access(folderPath);

        // read files in the folder
        const fileNames = await fsPromises.readdir(folderPath);

        // print filenames to the console
        console.log(`The 'files' folder contains the following files:`);
        fileNames.forEach((fileName) => {
            console.log(fileName);
        });
    } catch (error) {
        if (error.code === 'ENOENT') {
            // throw an error if the folder doesn't exist
            throw new Error('FS operation failed');
        } else {
            // if any other error occurs show it in console
            console.error(error.message);
        }
    }
};

await list();