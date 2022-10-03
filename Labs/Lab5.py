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