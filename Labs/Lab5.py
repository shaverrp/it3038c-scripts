<<<<<<< HEAD
#!/usr/bin/python




import datetime
while True:
try:
bday = input ("Enter your Birth Date(e.g., September 21 1990):")
birthday = datetime.datetime.strptime (bday, '%B %d %Y')
break
except:
print("Enter Birth Date in the following format 'Month Day Year')

tday = datetime.datetime.today()
timedelta = (tday - birthday.total_seconds()
print("You have been alive for:",timedelta,"seconds")
=======
import datetime
while true:
try:
        bday = input("Enter birth date (e.g., September 21 1990"):")
        birthday = datetime.datetime.strptime(bday, '%B %d %Y')
execpt:
print("Pleas use this Format 'Month Dat Year'")

tday = datetime.datetime.today()
timedelta = (tday - birthday).total_seconds()
print("You havebeen alive for:",timedelta,"seconds")
>>>>>>> b8c7024268cb99dfed1fcdc632991ce6e74ad431
