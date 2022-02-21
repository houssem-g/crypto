from django.urls import path
from . import views
test = {}
urlpatterns=[
path('allCrypto/', views.home, name='home'),
path('analysis/', views.home, name='home'),
path('infoTrx/', views.home, name='home'),
]
