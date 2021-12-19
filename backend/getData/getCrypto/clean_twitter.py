# https://towardsdatascience.com/step-by-step-twitter-sentiment-analysis-in-python-d6f650ade58d

# les imports :
from textblob import TextBlob
import sys
import tweepy
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np
import os
import nltk
import pycountry
import re
import string
from wordcloud import WordCloud, STOPWORDS
from PIL import Image
from nltk.sentiment.vader import SentimentIntensityAnalyzer
from langdetect import detect
from nltk.stem import SnowballStemmer
from nltk.sentiment.vader import SentimentIntensityAnalyzer
from sklearn.feature_extraction.text import CountVectorizer
from IPython.display import display
import unicodedata

# nltk.download()
# les credentials à cacher avant de pousser
consumerKey  = "7mdHWxC5UReo8CNHIpbwfkOsb"
consumerSecret  = "ynK2SNkeQNXADU49X7mrMoeevef40CuXnnNqYGjyy0oBm8dfUP"
accessToken  = "1376799755167277057-jrRPwDpe5iUlItHb6Kg4iVW46M4snr"
accessTokenSecret = "fSrFLNximogGIxwiVo3lfKfFewr23NEurPMee9KGlRtwf"
# Bearer Token = "AAAAAAAAAAAAAAAAAAAAADASVgEAAAAA1FRsxeTwRgw2CQx4HJCZ%2FsVue9I%3DsgYbBTtC6GtuvXrHIivPzB2ruv6DAwrbPkVt2ctfYWXVpMvt1G"

# authentification
auth = tweepy.OAuthHandler(consumerKey, consumerSecret)
auth.set_access_token(accessToken, accessTokenSecret)
api = tweepy.API(auth)

print("status connexion : ", api.get_status)
# Sentiment Analysis
def percentage(part,whole):
 return 100 * float(part)/float(whole)

keyword = "#USD/GBP"
noOfTweet = 10
tweets = tweepy.Cursor(api.search_tweets, q=keyword).items(noOfTweet)
positive = 0
negative = 0
neutral = 0
polarity = 0
tweet_list = []
neutral_list = []
negative_list = []
positive_list = []
for tweet in tweets:
    tweet_text = tweet.text #.encode("utf-8")
    # print(tweet.text.encode("utf-8"))
    remove_rt = re.sub('RT @\w+:',' ', tweet_text)
    rt = re.sub('(?:\@|http?\://|https?\://|www)\S+|W+','',remove_rt)
    # tweet_text= tweet_text.map(remove_rt).map(rt)
    print(rt.encode("utf-8"))
    tweet_list.append(rt)
    
# print(tweet_list)