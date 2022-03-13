from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('login', index),
    path('register', index),
    path('fuelQuoteForm', index),
    path('fuelQuoteHistory', index),
    path('profile', index),
]