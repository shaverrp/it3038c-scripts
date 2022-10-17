Lab7

This is a script to install the PS Windows Update Module and to perform updates and check history of your windows machine.

Place the script in a folder of your choosing

Run powershell as an administrator and go to the folder that has the script in it. 

enter the following command:
  
  cd "folder location of script file"
  
Run the script with the following command: ./Lab7.ps1

This will start the installation of the script.

Here are three things that can be accomplished with this module installed

  1. Get-WUHistory
  2. Get-WindowsUpdate
  3. Install-WindowsUpdate
  
The Get-WUHistory will show all the updates that have been installed and if they where sucesful or not.

The Get-WIndowsUpdate will see if there are any updates that are available.

The Install-WindowsUpdate will install any new updates that are available.

