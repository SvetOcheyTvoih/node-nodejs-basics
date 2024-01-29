import fs from 'fs/promises';
import path from 'path';

const create = async () => {
    // async function createFreshFile() {
        const fileName = 'fresh.txt';
        const folderPath = './files';
        const filePath = path.join(folderPath, fileName);
        const fileContent = 'I am fresh and young';

        try {
            await fs.access(filePath);
            throw new Error('FS operation failed: File already exists.');
        } catch (error) {
            if (error.code === 'ENOENT') {
                await fs.writeFile(filePath, fileContent);
                console.log('File created successfully:', filePath);
            } else {
                console.error(error.message);
            }
        }
    }

await create();