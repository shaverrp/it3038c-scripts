New-Item "C:\${Env:ComputerName}" -itemType Directory

New-Item "C:\${Env:ComputerName}\Logs" -ItemType Directory

New-Item "C:\${Env:ComputerName}\Registry" -ItemType Directory

reg export HKLM "C:\${Env:ComputerName}\Registry\HKLM" /y

reg export HKLM "C:\${Env:ComputerName}\Registry\HKCU" /y

reg export HKLM "C:\${Env:ComputerName}\Registry\HKCR" /y

reg export HKLM "C:\${Env:ComputerName}\Registry\HKCC" /y

Get-BitLockerVolume | Out-File -FilePath "C:\${Env:ComputerName}\Bitlocker Information.txt"

ipconfig | Out-File -FilePath "C:\${Env:ComputerName}\IP Information.txt"

Get-CimInstance -query 'select * from softwareLicensingService' | Select OA3xOriginalProductKey | Out-File -FilePath "C:\${Env:ComputerName}\Windows Product Key.txt"

#Depending on what version of powershell you are running, you may need to replace Get-CimInstance with Get-WmiObject

Get-CimInstance -Class Win32_logicaldisk -ComputerName DESKTOP-HDHTAH4 | ? {$_. DriveType -eq 3} | select DeviceID, {$_.Size /1GB}, {$_.FreeSpace /1GB} | Out-File -FilePath "C:\${Env:ComputerName}\Physical Disk.txt"

#Depending on what version of powershell you are running, you may need to replace Get-CimInstance with Get-WmiObject

Get-PhysicalDisk | format-table -AutoSize | Out-File -FilePath "C:\${Env:ComputerName}\Physical Disk.txt"

Get-Tpm | Out-File -FilePath "C:\${Env:ComputerName}\TPM.txt"

RoboCopy C:\Windows\System32\winevt\Logs "C:\${Env:ComputerName}\Logs" 

Get-ItemProperty HKLM:\Software\Wow6432Node\Microsoft\Windows\CurrentVersion\Uninstall\* | Select-Object DisplayName, DisplayVersion, InstallDate | Out-File -FilePath "C:\${Env:ComputerName}\Installed Software.txt"

Install-Module PSWindowsUpdate

Get-WindowsUpdate | Out-File -FilePath "C:\${Env:ComputerName}\Windows Update List.txt" 

Get-WURebootStatus | Out-File -FilePath "C:\${Env:ComputerName}\Windows Reboot.txt" 

Move-Item -Path "C:\${Env:ComputerName}" -Destination \\***.***.***.***

Remove-Item "C:\${Env:ComputerName}"

 





