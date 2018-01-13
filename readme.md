## Copy to Pi

Work on your development PC so you don't have to worry about have the latest files on the networked Raspberry Pi

This assumes you are using a Windows PC and Samba, and have configured it to have a fileshare on the Raspberry Pi.

Every time the files change on your local device, they will be copied to the remote device. 

If you use Visual Studio Code, autosave is enabled by default and updates after you finish typing.

The 'src' folder is used by convention, and is the working folder for your code. As long as your run the command > gulp from this root folder, your editor can open and edit any file in the src folder without the knowledge of this folder.

It does not delete files on the remote pi only copies and overwrites them at the moment.

This has been tested on windows using powershell

1. install [nodejs if not installed](https://nodejs.org/en/)
2. clone this repo to your local PC 
3. Open powershell in the root of this repo on your PC
4. run the command > npm install
5. edit the gulpfile.js on your pc to match your file locations
6. run the command > gulp to copy all to your device

Once the repo has been cloned from Github you can remove the Git files if you want to,
all you need to leave are the package.json, gulpfile.js, node_modules folder and the src folder.



