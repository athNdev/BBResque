# BBResque
[//]: # (Simple overview of use/purpose.)

Webscraper for downloading all of the contents(course-material) of a student's courses on Blackboard LMS.

The University of Newcastle (Australia) is moving from BlackBoard LMS to Canvas LMS from Semester 1, 2022. 

Students have been advised to download their course material, etc. which would be very time consuming to do manually. You would have to navigate through all your folders, click on every single file (maybe twice) to download, then arrange of them into folders, etc.

Luckily, BBResque does all this for you in just a few clicks! Follow the steps below to see how.

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
