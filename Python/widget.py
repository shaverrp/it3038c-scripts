import json
import requests


r = requests.get('http://localhost:3000')
data=r.json()
n = 4
for i in range (0,n):
    print(data[i]['name'] + " is " + data[i]['color'])
    

