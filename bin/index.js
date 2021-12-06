#! /usr/bin/env node

import readLine from "readline";
import env_setup from "../env_setup.js";
import router from "../router.js";
import child_process from "child_process";

(async () => {
    console.log('======================== BBResque =========================');
    console.log('Developed by Atharv Naphade (ClumsyClover), Software Engineering undergrad student at UON');
    console.log('\nMIT LICENSE');
    console.log('Copyright (c) 2021 Atharv Naphade');

    console.log('\nDownloading all the course material from BlackBoard one file at a time can be tiring,\nyou can only imagine the condition of people with 4 or more courses.');
    console.log('\nThis is program designed to help UON students instantly download their course material from BlackBoard,\nit is to help all my fellow uni friends in this period of switching over to Canvas.');
    console.log('\nSteps and instructions to use this program -');
    console.log("1) This program will first open up a programatically controlled instance of Chrome, where you'll be redirected to the sign-in(AUTH) page(OKTA) for logging in to BlackBoard.");
    console.log("2) After your BlackBoard homepage is opened up, navigate to any course and then to your course materials, or any page where you files are located.");
    console.log("NOTE: Only use the tab in which the sign-on page is opened, do not open up a new tab by yourself.");
    console.log("3) Keeping the page open, switch over to the terminal/command line page, it will have a promt asking you if the page you want to download files from is ready, enter any charac. to continue.");
    console.log("4) After this watch the progress of the program on the terminal window and the file explorer window, names of files which are being downloaded will appear.");
    console.log("5) Once the progress of the terminal window stops for 4-5 mins straight, press 'Ctrl+C', and check if all the files have been downloaded and are correctly oraganized in folders.");

    console.log("\nNOTE! - The Chrome instance you are using is controlled programatically, and the data from web pages is being scraped to help you download all your files, NO DATA whatsoever is being collected in this process.");
    
    var env_obj;

    const readConsole = readLine.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.log('\nTo proceed with all the questions below, enter any character and press enter.');
    readConsole.question('\nReady to open chrome? ', async () => { 
        env_obj = await env_setup();
        readConsole.question('\nIs the page(course materials) with all the files to download open? ', () => {
            child_process.exec('Invoke-Item .\DOWNLOADED_FILES');  
            router(env_obj);
        })
    })
})();
