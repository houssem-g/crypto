# https://stackoverflow.com/questions/68507742/how-to-get-data-regarding-random-smart-contract-addresses-such-as-creation-date
# https://www.postman.com/swissinvestor-token/workspace/swissinvestor-token-api-s-public-workspace/request/6846240-c289cd93-85ea-47f1-aa9a-d623d887faa6
# https://www.covalenthq.com/docs/networks/bsc/
# from django.http import HttpResponse
# from django.template import Template,Context
# from django.shortcuts import render
import requests
# check how JsonResponse work
from django.http import JsonResponse
import json
from bs4 import BeautifulSoup

# https://documenter.getpostman.com/view/5734027/RzZ6Hzr3

# Create your views here.
def home(request):

    # objets=Crypto.objects.all()
    objets = get_crypto_data()
   
    # template=Template('{% for elem in objets %} {{elem}} <br />{%endfor%}')
    # context=Context({'objets':objets})
    # return HttpResponse(template.render(context))
    
    # to return an array we need to use JsonResponse
    return JsonResponse(objets, safe=False)


def get_crypto_data():
    
    url = "https://api.coinstats.app/public/v1/coins?skip=0&limit=10000"
    payload={}
    headers = {}
    response = requests.request("GET", url, headers=headers, data=payload)
    response_dict = json.loads(response.text)
    result = {}
    result["data"] = []
    result["allCoins"] = []
    dup = []
    for i, val in enumerate(response_dict["coins"]):
        val["id"] = i + 1
        if ((val["name"] + " " + val["symbol"]) in dup):
            i = i-1
            continue
        result["allCoins"].append({"name": val["name"] + " " + val["symbol"], "icon": val["icon"]})
        dup.append(val["name"] + " " + val["symbol"])
        result["data"].append(val)
        

    return result
