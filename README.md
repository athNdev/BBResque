# BBResque
[//]: # (Simple overview of use/purpose.)

Webscraper for downloading all of the contents(course-material) of a student's courses on Blackboard LMS.

The University of Newcastle (Australia) is moving from BlackBoard LMS to Canvas LMS from Semester 1, 2022. 

Students have been advised to download their course material, etc. which would be very time consuming to do manually. You would have to navigate through all your folders, click on every single file (maybe twice) to download, then arrange of them into folders, etc.

Luckily, BBResque does all this for you in just a few clicks! Follow the steps below to see how.

### Command for updating, checking BBResque's version on your PC, running these every time before you run the program is recommended as we are consistently updating BBResque
[//]: # (Commands for updating and checking versions of the program)

1) Commands for checking the latest available version:
```
npm info bbresque version
```
2) Command for checking the version you currently have installed:
```
npm ls -g --depth=0
```
3) Command for updating BBResque to the latest available version:
```
npm update -g
```

## Getting Started

### Dependencies
[//]: # (Describe any prerequisites, libraries, OS version, etc., needed before installing program e.g. Windows 10)

* [Node.js v14(LTS) or higher](https://nodejs.org/en/download/ "Node.js downloads")
* Google Chrome

### Installing
[//]: # (How/where to download your program, any modifications needed to be made to files/folders)

1) Download and install the [latest NodeJS (LTS)](https://nodejs.org/en/download/ "Node.js downloads") for your respective OS.
2) Open CMD(Windows) or Terminal(MacOS/Linux).
3) Type or copy the following command into Terminal/CMD window to install BBResque.
```
npm i bbresque -g
```

### Executing program
[//]: # (How to run the program, step-by-step bullets)

1) After the installation finishes, type ```bbresque``` into the Terminal/CMD window, this will run BBResque, now every time you want to run BBResque; just open up CMD/Terminal and type in **bbresque**.
2) Further steps will be displayed in the terminal window.

### Using the program, and its CLI
[//]: # (Using the program's CLI, and understanding it)

1) This program will first open up a programatically controlled instance of Chrome, where you'll be redirected to the sign-in(AUTH) page(OKTA) for logging in to BlackBoard.
2) After your BlackBoard homepage is opened up, navigate to the course materials page of a course, or any page where you files are located.
3) Keeping the page open, switch over to the terminal/command line page, it will have a promt asking you if the page you want to download files from is ready, enter any charac. to continue.
4) After this watch the progress of the program on the terminal window and the file explorer window, addresses of files which are being downloaded will appear.
5) All of your downloaded files will be avaliable in your regular downloads folder.
6) Once the progress of the terminal window stops printing for 4-5 mins straight, press 'Ctrl+C', and check if all the files have been downloaded and are correctly oraganized in folders.
7) Quit the program and restart it if you want to download from another page.

* Things to note: 
    * Only use the tab in which the sign-on page is opened, do not open up a new tab by yourself.
    * If the terminal window stops printing or stops updating for a bit over 5 mins, consider that all your files have been downloaded and exit the program. To download files from another page, restart the program; follow the above steps again.
    * All your downloaded files will be available in your primary Downloads folder.

## Help

- I'm more than happy to help! I do work in the IST (Indian Standard Timezone) so I may not respond immediately. 
    - Contacting me for support, via Discord ```ClumsyCløver#3385``` or email ```cloversoftinc@outlook.com ```

## Version History
* 1.5.2 
    * Folder arrangement improved, major bugs fixes that were the causing the program to not navigate the course material page properly.
    
* 1.5.3 
    * Fixed errors that were causing the program to stop because of special characters in folders names, increased timeout of loading pages to 100000ms.

## License

This project is licensed under the [MIT License](/LICENSE)
