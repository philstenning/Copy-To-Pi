## Copy to Pi

Work on your development PC so you don't have to worry about have the latest files on the networked Raspberry Pi

This assumes you are using a Windows PC and Samba, and have configured it to have a fileshare on the Raspberry Pi.

Every time the files change on your local device, they will be copyed to the remote device. 

If you use Visual Studio Code, autosave is enabled by default and updates after you finish typing.

The 'src' folder is used by convention, and is the working folder for your code. As long as your run the command > gulp from this folder, your editor can open and edit any file without the knowledge of this folder.

This has been tested on windows using powershell

1. install [nodejs if not installed](https://nodejs.org/en/)
2. clone this repo to your local PC 
3. Open powreshell in the root of this repo on your PC
4. run the command > npm install
5. edit the gulpfile.js on your pc to match your file locations
6. run the command > gulp



