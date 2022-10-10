New-Item "C:\${Env:ComputerName}" -itemType Directory

New-Item "C:\${Env:ComputerName}\Logs" -ItemType Directory

RoboCopy C:\Windows\System32\winevt\Logs "C:\${Env:ComputerName}\Logs" 

Move-Item -Path "C:\${Env:ComputerName}" -Destination \\***.***.***.***

Remove-Item "C:\${Env:ComputerName}"






