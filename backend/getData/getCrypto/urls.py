from django.urls import path
from . import views
test = {}
urlpatterns=[
path('allCrypto/', views.home, name='home'),
]
