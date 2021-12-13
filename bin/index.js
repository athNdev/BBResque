#! /usr/bin/env node

import readLine from "readline";
import env_setup from "../env_setup.js";
import router from "../router.js";
import child_process from "child_process";
import fs from "fs";

import os from 'os';
const downloads_path = `${os.homedir()}/Downloads`;

/// REMOVE THE FOLLOWING
// import shelljs from "shelljs";
// import path from "path";

(async () => {
    console.log('======================== BBResque =========================');
    console.log('Developed by Atharv Naphade (ClumsyClover), Software Engineering undergrad student at UON');
    console.log('\nMIT LICENSE');
    console.log('Copyright (c) 2021 Atharv Naphade');

    console.log('\nDownloading all the course material from BlackBoard one file at a time can be tiring,\nyou can only imagine the condition of people with 4 or more courses.');
    console.log('\nThis is program designed to help UON students instantly download their course material from BlackBoard,\nit is to help all my fellow uni friends in this period of switching over to Canvas.');
    console.log('\nSteps and instructions to use this program -');
    console.log("1) This program will first open up a programatically controlled instance of Chrome, where you'll be redirected to the sign-in(AUTH) page(OKTA) for logging in to BlackBoard.");
    console.log("2) After your BlackBoard homepage is opened up, navigate to the course materials page of a course, or any page where you files are located.");
    console.log("NOTE: Only use the tab in which the sign-on page is opened, do not open up a new tab by yourself.");
    console.log("3) Keeping the page open, switch over to the terminal/command line page, it will have a promt asking you if the page you want to download files from is ready, enter any charac. to continue.");
    console.log("4) After this watch the progress of the program on the terminal window and the file explorer window, addresses of files which are being downloaded will appear.");
    console.log("5) All of your downloaded files will be avaliable in your regular downloads folder.")
    console.log("6) Once the progress of the terminal window stops printing for 4-5 mins straight, press 'Ctrl+C', and check if all the files have been downloaded and are correctly oraganized in folders.");
    console.log("7) Quit the program and restart it if you want to download from another page.")

    console.log("\nNOTE! - The Chrome instance you are using is controlled programatically, and the data from web pages is being scraped to help you download all your files, NO DATA whatsoever is being collected in this process.");
    
    console.log("\nAnd thanks for using my program, it means a lot. :)")

    // fs.mkdir('./progress.json', () => {});
    // fs.writeFile('./progress.json', '{ "queued": 0, "downloaded": 0 }', {}, (err) => { if(err) { console.log(err); } });

    var env_obj;

    const readConsole = readLine.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    fs.mkdir(`${downloads_path}/DOWNLOADED_FILES/`, { recursive: true }, (err) => { });

    // console.log("Hello: World 1".replace(/[&\/\\#,+()$~%.'":*?<>]/g, ''));
    // const invertSlashes = str => {
    //     let res = '';
    //     for(let i = 0; i < str.length; i++){
    //        if(str[i] == '//'){
    //           res += '\\';
    //           continue;
    //        };
    //        // res += '\\';
    //        res += str[i];
    //     };
    //     return res;
    // };
    
    // const address = invertSlashes(path.normalize(`${downloads_path}\DOWNLOADED_FILES\BIO1002 ORAGANISMS TO ECOSYSTEM (S2 2021 CALLLAGHAN)\Course Materials/Module 1 Animal Biology Weeks 1-4\Week 13: Animal Module Revision Lecture`));
    // shelljs.mkdir(address);
    
    console.log('\nTo proceed with all the questions below, enter any character and press enter.');
    readConsole.question('\nReady to open chrome? ', async () => { 
        env_obj = await env_setup();
        readConsole.question('\nIs the page(course materials) with all the files to download open? ', () => {
            // child_process.exec(`Invoke-Item ${downloads_path}`);  
            router(env_obj);
        })
    })
})();
