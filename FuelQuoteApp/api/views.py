from django.shortcuts import render
from rest_framework import generics, status
from .models import Login, UserProfile, FuelQuoteForm
from .serializers import LoginSerializer, UserProfileSerializer, FuelQuoteFormSerializer, RegisterUserSerializer, ProfileChangeSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

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

class RegisterUserView(APIView):
    serializer_class = LoginView

    def post(self, request, format=None):
        print("URL enpoint works!")
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            username = serializer.data.username
            password = serializer.data.password
            userID = self.request.sessions.session_key
            queryset = Login.objects.filter(userID=userID)
            if queryset.exists():
                newLogin = queryset[0]
                newLogin.username = username
                newLogin.password = password
                newLogin.save(update_fields=['username', 'password'])
            else:
                newLogin = Login(userID=userID, username=username, password=password)
            
            return Response(RegisterUserSerializer(newLogin).data, status=status.HTTP_201_CREATED)

class ProfileChangeView(APIView):
    serializer_class = UserProfileView

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            fullName = serializer.data.fullName
            addressOne = serializer.data.addressOne
            addressTwo = serializer.data.addressTwo
            city = serializer.data.city
            inState = serializer.data.inState
            zipCode = serializer.data.zipCode
            userID = self.request.sessions.session_key
            queryset = UserProfile.objects.filter(userID=userID)
            if queryset.exists():
                newUserProfile = queryset[0]
                newUserProfile.fullName = fullName
                newUserProfile.addressOne = addressOne
                newUserProfile.addressTwo = addressTwo
                newUserProfile.city = city
                newUserProfile.inState = inState
                newUserProfile.zipCode = zipCode
                newUserProfile.userID = self.request.sessions.session_key
                newLogin.save(update_fields=['fullName', 'addressOne', 'addressTwo', 'city', 'inState', 'zipCode'])
            else:
                newLogin = UserProfile(userID=userID, fullName=fullName, addressOne=addressOne, addressTwo=addressTwo, city=city, inState=inState, zipCode=zipCode)
            
            return Response(ProfileChangeSerializer(newUserProfile).data, status=status.HTTP_201_CREATED)