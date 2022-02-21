# https://stackoverflow.com/questions/68507742/how-to-get-data-regarding-random-smart-contract-addresses-such-as-creation-date
# https://www.postman.com/swissinvestor-token/workspace/swissinvestor-token-api-s-public-workspace/request/6846240-c289cd93-85ea-47f1-aa9a-d623d887faa6
# https://www.covalenthq.com/docs/networks/bsc/
# https://documenter.getpostman.com/view/5734027/RzZ6Hzr3

# from django.http import HttpResponse
# from django.template import Template,Context
# from django.shortcuts import render
import requests
# check how JsonResponse work
from django.http import JsonResponse
import json
from bs4 import BeautifulSoup
from . import constants
from requests.exceptions import ConnectionError, Timeout, TooManyRedirects

# Create your views here.
def home(request):
    # objets=Crypto.objects.all()
    objets = {}
    if request.path == "/allCrypto/":
        objets = get_crypto_data()
    elif request.path == "/analysis/":
        objets = analysis_data(request)
    elif request.path == "/infoTrx/" and request.GET.get("address") != "undefined":
        objets = get_transactions_info(request)
        print("objets : ", objets)
    # template=Template('{% for elem in objets %} {{elem}} <br />{%endfor%}')
    # context=Context({'objets':objets})
    # return HttpResponse(template.render(context))
    
    # to return an array we need to use JsonResponse
    return JsonResponse(objets, safe=False)



def get_crypto_data():
    '''
    this function is used to get list of crypto with name symbole adress etc
    '''
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
        walletAddress = ""
        for el in val["exp"]:
            if "etherscan" in el:
                walletAddress = el.rsplit('/', 1)[-1]
                break
        result["allCoins"].append({
            "walletAddress": walletAddress,
            "symbol": val["symbol"],
            "rank": val["rank"],
            "name": val["name"] + " " + val["symbol"],
            "icon": val["icon"],
            "address": val["contractAddress"] if "contractAddress" in val.keys() else "not found",
            "availableSupply": val["availableSupply"]
            })
        dup.append(val["name"] + " " + val["symbol"])
        result["data"].append(val)
        
    # print("result : ", result)
    return result

def get_stat(symbol):
    url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/map'
    parameters = {
    'start':'1',
    'limit':'5000',
    'symbol': symbol,
    }
    headers = {
    'Accepts': 'application/json',
    'X-CMC_PRO_API_KEY': constants.coinmarketcapapi,
    }

    session = requests.Session()
    session.headers.update(headers)
    try:
        response = session.get(url, params=parameters)
        data = json.loads(response.text)
        address = data["data"][0]["platform"]["token_address"]
        print(address)
    except (ConnectionError, Timeout, TooManyRedirects) as e:
        print(e)
    
    url = 'https://api.bscscan.com/api?module=account&action=txlist&address=' + address + '&startblock=14125856&page=1&offset=10&sort=desc&apikey=' + constants.bscscanApi
    
    # url_analysis = "https://api.bloxy.info/token/token_stat?token=" + address + "&key=" + constants.bloxyApi
    payload_analysis={}
    headers_analysis = {}
    response_analysis = requests.request("GET", url, headers=headers_analysis, data=payload_analysis)
    response_dict_analysis = json.loads(response_analysis.text) if response_analysis.status_code == 200 else "not found"
    print("response_dict_analysis : ", response_dict_analysis)
    # result["infoG"] = {"holders":response_dict_analysis.holders_count}
    # return response_dict_analysis[0]


def analysis_data(request):
    '''
    prefilter data and add info general to the basis object
    '''
    result = {}
    url = "https://api.coinstats.app/public/v1/coins?skip=0&limit=10000"
    payload={}
    headers = {}
    response = requests.request("GET", url, headers=headers, data=payload)
    response_dict = json.loads(response.text)
    
    result["data"] = []
    result["allCoins"] = []
    dup = []
    for i, val in enumerate(response_dict["coins"]):
        val["id"] = i + 1
        if ((val["name"] + " " + val["symbol"]) in dup):
            i = i-1
            continue
        # walletAddress = ""
        # for el in val["exp"]:
        #     if "etherscan" in el:
        #         walletAddress = el.rsplit('/', 1)[-1]
        #         break
        

        result["allCoins"].append({
            # "walletAddress": walletAddress,
            "symbol": val["symbol"],
            "rank": val["rank"],
            "name": val["name"] + " " + val["symbol"],
            "icon": val["icon"],
            "address": val["contractAddress"] if "contractAddress" in val.keys() else "not found",
            "availableSupply": val["availableSupply"],
            # "holders":  get_stat(val["contractAddress"]) if request.GET.get("currency") != None and  request.GET.get("currency").split("=")[1] == val["symbol"] else 2000000
            })
        
            
        dup.append(val["name"] + " " + val["symbol"])
        
    result["data"].append(val)
    if(request.GET.get("currency") != None):
        # result["trx"] = get_stat(request.GET.get("currency").split("=")[1])
        get_stat(request.GET.get("currency").split("=")[1])
    return result
        # get balance
        # https://api.bscscan.com/api?module=account&action=balance&address=0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce&apikey=F99FVYNJ76ZRCBPWKSEW7IJ71H5V1QYG7Z