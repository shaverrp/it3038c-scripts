import requests, re
from bs4 import BeautifulSoup

data = requests.get("https://www.gamestop.com/Video-games/nintendo-switch/product/pokemon-violet---nintendo-switch/339270.html").content
soup = BeautifulSoup(data, 'html.parser')
span = soup.find("h2", {"class":"font-display font-bold text-x1 tracking-1"})
title = span.text
span = soup.find("span", {"class":"font-display font-semibold -tracking-055 text-2x1 price-default"})
price = span.text
print("Item %s has price %s" % (title, price))
