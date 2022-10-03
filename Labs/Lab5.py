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
