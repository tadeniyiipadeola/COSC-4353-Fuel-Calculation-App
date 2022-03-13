from django.shortcuts import render
from rest_framework import generics
from .models import Login, UserProfile, FuelQuoteForm
from .serializers import LoginSerializer, UserProfileSerializer, FuelQuoteFormSerializer


# Create your views here.

class LoginView(generics.CreateAPIView):
    queryset = Login.objects.all()
    serializer_class = LoginSerializer

class UserProfileView(generics.CreateAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer

class FuelQuoteFormView(generics.CreateAPIView):
    queryset = FuelQuoteForm.objects.all()
    serializer_class = FuelQuoteFormSerializer