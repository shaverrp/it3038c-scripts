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

function body{
    (
        Write-Host("This machine's IP is $IP. User is $User. Hostname is $Machine. Powershell Version $Version. Today's Date is $Date, $Month $Year")
        
    )
    
}

$User=getUser
$IP=getIP
$Version=Version 
$Machine=getHost
$Date=getdayofweek
$Year=getyear
$month=getmonth
$Body=body 

#Send-MailMessage -To "shaverrp@mail.uc.edu" -From "shaverrp@gmail.com" -Subject "IT3038C Widnows SysInfo" -Body $Body -BodyAsHtml -SmtpServer smtp.gmail.com -port 587 -UseSSL -Credential (Get-Credential)