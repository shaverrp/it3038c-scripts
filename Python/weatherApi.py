import json
import requests

r = requests.get('http://api.openweathermap.org/data/2.5/weather?zip=12345,us&appid=1c8bdd5731c9e47a67c6cfe8af2893e3')

data=r.json()
print(data)
