import fetch from 'node-fetch';
import fs from 'fs';

export default async function downloadFile(url, path_to_file) {    
    const res = await fetch(url);
    const fileStream = fs.createWriteStream(path_to_file);

    //// THE QUEUED COUNTER INCREMENTATION IS INTERCHANGES WITH THE INCREMENTATION OF THE DOWNLOADED!!!!!!!!!!!!!!!!!!! 

    await new Promise(async (resolve, reject) => {
        // await increment_progress_val('queued');


        res.body.pipe(fileStream);

        res.body.on("error", reject);
        fileStream.on("finish", resolve);


    }).then(async (err) => {
        fileStream.close(); 

        if(err) { console.log(`\n${err} \nONE FILE FAILED!`); }
        else{

            // await increment_progress_val('downloaded');

            console.log(`\n${path_to_file}`);
            console.log('FILE DOWNLOADED');
            // const progress = await get_progress_json();
            // console.log(`${progress.downloaded} of ${progress.queued} files downloaded. (only close this program, when these values don't change for a long time)`);

        }

    }).catch((err) => { console.log(`\n${err} \nONE FILE FAILED!`); });
}

async function get_progress_json(){
    return new Promise((resolve, reject) => {
        fs.readFile('./progress.json', (err, data) => {
            resolve(JSON.parse(data));
        });
    })
}

async function increment_progress_val(val_type){
    return new Promise((resolve, reject) => {
        if(val_type === "queued"){
            new Promise((resolve, reject) => {
                fs.readFile('./progress.json', (err, data) => {
                    resolve(data);
                })
            }).then((data) => {
                var progress_obj = JSON.parse(data);
                progress_obj.queued = parseInt(progress_obj.queued) + 1;
                fs.writeFile('./progress.json', JSON.stringify(progress_obj), (err) => {
                    if(!err) resolve();
                    else {
                        console.log(err);
                        reject();
                    }
                });
            })
        }
        else if(val_type === "downloaded"){
            new Promise((resolve, reject) => {
                fs.readFile('./progress.json', (err, data) => {
                    resolve(data);
                })
            }).then((data) => {
                var progress_obj = JSON.parse(data);
                progress_obj.downloaded = parseInt(progress_obj.downloaded) + 1;
                fs.writeFile('./progress.json', JSON.stringify(progress_obj), (err) => {
                    if(!err) resolve();
                    else {
                        console.log(err);
                        reject();
                    }
                });
            })
        }
    })
}