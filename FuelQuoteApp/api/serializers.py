from dataclasses import field, fields
from pyexpat import model
from rest_framework import serializers
from .models import Login, UserProfile, FuelQuoteForm, CustomUser

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'username', 'password')

class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = Login
        fields = ('id', 'userID', 'username', 'password')

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ('id', 'userID', 'fullName', 'addressOne', 'addressTwo', 'city', 'inState', 'zipCode')

class FuelQuoteFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = FuelQuoteForm
        fields = ('id', 'userID', 'gallonsRequested', 'deliveryAddressOne', 'deliveryAddressTwo', 'deliveryDate', 'pricePerGallon', 'totalDue')

class RegisterUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Login
        fields = ('username', 'password')

class ProfileChangeSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ('fullName', 'addressOne', 'addressTwo', 'city', 'inState', 'zipCode')

class FuelQuoteFormSubmitSerializer(serializers.ModelSerializer):
    class Meta:
        model = FuelQuoteForm
        fields = ('gallonsRequested', 'deliveryAddressOne', 'deliveryAddressTwo', 'deliveryDate', 'pricePerGallon', 'totalDue')