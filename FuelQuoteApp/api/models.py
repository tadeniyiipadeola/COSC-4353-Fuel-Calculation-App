import string
from random import random
from unittest.util import _MAX_LENGTH
from django.db import models
from django.core import validators
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _

# Create your models here.

def generateUniqueID():
    length = 32

    while True:
        id = ''.join(random.choices(string.ascii_letters, k = length))
        if Login.objects.filter(userID=id).count() == 0:
            break

    return id

class Login(models.Model):
    userID = models.CharField(max_length=100, default="", unique=False)
    username = models.CharField(max_length=100, default="", unique=True)
    password = models.CharField(max_length=100, default="", unique=False)

class UserProfile(models.Model):
    userID = models.CharField(max_length=100, default="", unique=False)
    fullName = models.CharField(max_length=50, default="", validators=[validators.MinLengthValidator(1)])
    addressOne = models.CharField(max_length=100, default="", validators=[validators.MinLengthValidator(1)])
    addressTwo = models.CharField(max_length=100, default="")
    city = models.CharField(max_length=100, default="", validators=[validators.MinLengthValidator(1)])
    inState = models.CharField(max_length=100, default="", validators=[validators.MinLengthValidator(1)])
    zipCode = models.CharField(max_length=9, default="", validators=[validators.MinLengthValidator(5)])

class FuelQuoteForm(models.Model):
    userID = models.CharField(max_length=100, default="")
    gallonsRequested = models.BigIntegerField(default=0, validators=[validators.MinLengthValidator(1)])
    deliveryAddressOne = models.CharField(max_length=100, default="", validators=[validators.MinLengthValidator(1)])
    deliveryAddressTwo = models.CharField(max_length=100, default="")
    deliveryDate = models.DateField(default='01/01/2020')
    pricePerGallon = models.BigIntegerField(default=0)
    totalDue = models.BigIntegerField(default=0)