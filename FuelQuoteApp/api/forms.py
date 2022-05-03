from django import forms
from django.contrib.auth.forms import UserChangeForm, UserCreationForm
from .models import CustomUser

class CustomUserCreationSerializer(UserCreationForm):
    class Meta:
        model = CustomUser
        fields = ('id', 'username', 'password')

class CustomUserChangeSerializer(UserChangeForm):
    class Meta:
        model = CustomUser
        fields = UserChangeForm.Meta.fields