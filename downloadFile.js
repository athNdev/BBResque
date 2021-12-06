import fetch from 'node-fetch';
import fs from 'fs';

export default async function downloadFile(url, path_to_file) {    
    const res = await fetch(url);
    const fileStream = fs.createWriteStream(path_to_file);

    await new Promise((resolve, reject) => {
        res.body.pipe(fileStream);
        res.body.on("error", reject);
        fileStream.on("finish", resolve);
    }).then((err) => { 
        fileStream.close(); 

        if(err) { console.log(err); };

        console.log(`\n${path_to_file}`);
        console.log('FILE DOWNLOADED'); 
    }).catch(() => {});
}