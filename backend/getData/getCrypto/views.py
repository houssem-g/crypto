# from django.http import HttpResponse
# from django.template import Template,Context
# from django.shortcuts import render
import requests
# check how JsonResponse work
from django.http import JsonResponse

# Create your views here.
def home(request):

    # objets=Crypto.objects.all()
    objets = get_crypto_data()
    # print(objets)
    # template=Template('{% for elem in objets %} {{elem}} <br />{%endfor%}')
    # context=Context({'objets':objets})
    # return HttpResponse(template.render(context))
    
    # to return an array we need to use JsonResponse
    return JsonResponse(objets, safe=False)



def get_crypto_data():
    coins = ["BTC", "ETH", "XRP", "LTC", "BCH", "ADA", "DOT", "LINK", "BNB", "XLM", "XRP"]

    crypto_data = requests.get(
        "https://min-api.cryptocompare.com/data/pricemultifull?fsyms={}&tsyms=USD".format(",".join(coins))).json()["RAW"]
    data = []
    for i, val in enumerate(crypto_data):
        data.append({
            "id" : i,
            "name": val,
            "price": crypto_data[val]["USD"]["PRICE"],
            "change_day": crypto_data[val]["USD"]["CHANGEPCT24HOUR"],
            "volume_day": crypto_data[val]["USD"]["TOTALVOLUME24H"],
            "market": crypto_data[val]["USD"]["MKTCAP"]
        })

    return data