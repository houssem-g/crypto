# https://www.botreetechnologies.com/blog/monitoring-cryptocurrency-markets-cryptocompare-python-api-client/
# https://pypi.org/project/cryptocompare/
# https://www.univ-orleans.fr/iut-orleans/informatique/intra/tuto/django/Tuto-Django.pdf

import cryptocompare
import requests 
import pandas as pd
# cryptocompare.cryptocompare._set_api_key_parameter("25bc16ae40108fe4a7bf13cfdf8bfd913b0256536ba32718667d8c3d9d7594ab")
# print(cryptocompare.get_coin_list(format=False))
# https://www.section.io/engineering-education/cryptocurrency-tracking-telegram-bot/
def get_prices():
    coins = ["BTC", "ETH", "XRP", "LTC", "BCH", "ADA", "DOT", "LINK", "BNB", "XLM", "XRP"]

    crypto_data = requests.get(
        "https://min-api.cryptocompare.com/data/pricemultifull?fsyms={}&tsyms=USD".format(",".join(coins))).json()["RAW"]
    # print(crypto_data)
    data = {}
    for i in crypto_data:
        data[i] = {
            "name": i,
            "price": crypto_data[i]["USD"]["PRICE"],
            "change_day": crypto_data[i]["USD"]["CHANGEPCT24HOUR"],
            "volume_day": crypto_data[i]["USD"]["TOTALVOLUME24H"],
            "market_cap": crypto_data[i]["USD"]["MKTCAP"]
        }

    return data


if __name__ == "__main__":
    print(get_prices())








