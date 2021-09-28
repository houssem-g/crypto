from django.urls import path
from . import views
test = {}
urlpatterns=[
path('home/', views.home, name='home'),
]
