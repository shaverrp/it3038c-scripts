function getIP{
    (Get-NetIPAddress).IPv4Address | Select-String "192"
}

function getUser{
    ([System.Environment]::UserName)
}

function getHost{
    ([System.Environment]::MachineName)
}

function Version {
     ($Host.Version)
}

function getdayofweek {
    ((Get-Date).DayOfWeek)
}

function getyear{
    ((Get-Date).Year)
}

function getmonth{
    (Get-Date -Format m)
}

$User=getUser
$IP=getIP
$Version=Version 
$Machine=getHost
$Date=getdayofweek
$Year=getyear
$month=getmonth


"This machine's IP is $IP. User is $User. Hostname is $Machine. Powershell Version $Version. Today's Date is $Date, $Month $Year" | Out-File -FilePath "C:\Users\ryans\Desktop\Fall 2022\Script\Lab3.txt"