# def get_transactions_info(request):
#     '''
#     this function is used to get transactions, holders, burn token etc
#     '''
#     # print("request.GET.get  :  ", request.GET.get("address"))
#     url = "https://api.coinstats.app/public/v1/coins?skip=0&limit=10000"
#     payload={}
#     headers = {}
#     response = requests.request("GET", url, headers=headers, data=payload)
#     response_dict = json.loads(response.text)
#     result = {}
#     result["data"] = []
#     result["allCoins"] = []
#     dup = []
#     for i, val in enumerate(response_dict["coins"]):
#         val["id"] = i + 1
#         if ((val["name"] + " " + val["symbol"]) in dup):
#             i = i-1
#             continue
#         walletAddress = ""
#         for el in val["exp"]:
#             if "etherscan" in el:
#                 walletAddress = el.rsplit('/', 1)[-1]
#                 break
        
#         if ("contractAddress" in val.keys()):
#             address = val["contractAddress"]
#             url_analysis = "https://api.bloxy.info/token/token_stat?token=" + address + "&key=" + constants.bloxyApi
#             payload_analysis={}
#             headers_analysis = {}
#             response = requests.request("GET", url_analysis, headers=headers_analysis, data=payload_analysis)
#             response_dict = json.loads(response.text)[0] if response else "not found"
#         print("response_dict : ", response_dict) 
#         result["allCoins"].append({
#             "walletAddress": walletAddress,
#             "symbol": val["symbol"],
#             "rank": val["rank"],
#             "name": val["name"] + " " + val["symbol"],
#             "icon": val["icon"],
#             "address": val["contractAddress"] if "contractAddress" in val.keys() else "not found",
#             "availableSupply": val["availableSupply"],
#             "holders": response_dict != "not found" if response_dict["holders"] else response_dict
#             })
        
#         dup.append(val["name"] + " " + val["symbol"])
#     result["data"].append(val)
#     print("result : ", result)
#     return result
    
    
    
def get_stat(address):
    print("address : ", address)
    url_analysis = "https://api.bloxy.info/token/token_stat?token=" + address + "&key=" + constants.bloxyApi
    payload_analysis={}
    headers_analysis = {}
    response_analysis = requests.request("GET", url_analysis, headers=headers_analysis, data=payload_analysis)
    response_dict_analysis = json.loads(response_analysis.text) if response_analysis.status_code == 200 else "not found"
    print("response_dict_analysis : ", response_dict_analysis)
    # result["infoG"] = {"holders":response_dict_analysis.holders_count}
    return response_dict_analysis[0]["holders_count"]