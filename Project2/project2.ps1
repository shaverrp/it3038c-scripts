Get-CimInstance -Class Win32_logicaldisk -ComputerName DESKTOP-HDHTAH4 | ? {$_. DriveType -eq 3} | select DeviceID, {$_.Size /1GB}, {$_.FreeSpace /1GB}

Get-PhysicalDisk | format-table -AutoSize