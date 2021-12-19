from django.test import TestCase
# Create your tests here.

# url = "https://www.cryptocompare.com/api/data/coinlist/"
# response = requests.get(url)
# soup = BeautifulSoup(response.content, "html.parser")
# Data = json.loads(soup.prettify())
# Data = Data['Data']
# allCoins = []
# for coin in Data:
#     allCoins.append(coin)
# topCoins = ["BTC", "ETH", "XRP", "LTC", "BCH", "ADA", "DOT", "LINK", "BNB", "XLM", "XRP", "MOVE", "GRT", "MATIC", "VET"]

# crypto_data = requests.get(
#     "https://min-api.cryptocompare.com/data/pricemultifull?fsyms={}&tsyms=USD".format(",".join(topCoins))).json()["RAW"]
# result = {}
# result["data"] = []
# result["allCoins"] = allCoins
# for i, val in enumerate(crypto_data):
#     result["data"].append({
#         "id" : i,
#         "name": val,
#         "price": crypto_data[val]["USD"]["PRICE"],
#         "change_day": crypto_data[val]["USD"]["CHANGEPCT24HOUR"],
#         "volume_day": crypto_data[val]["USD"]["TOTALVOLUME24H"],
#         "market": crypto_data[val]["USD"]["MKTCAP"]
#     })