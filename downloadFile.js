import fetch from 'node-fetch';
import fs from 'fs';

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default async function downloadFile(url, path_to_file) {    
    const res = await fetch(url);
    const fileStream = fs.createWriteStream(path_to_file);
    fs.mkdir('./DOWNLOADED_FILES/', () => {});
    await new Promise((resolve, reject) => {
        res.body.pipe(fileStream);
        res.body.on("error", reject);
        fileStream.on("finish", resolve);
    }).then(() => { 
        fileStream.close(); 

        console.log(`\n${__dirname}${path_to_file.slice(1)}`);
        console.log('FILE DOWNLOADED'); 
    }).catch(() => {});
}