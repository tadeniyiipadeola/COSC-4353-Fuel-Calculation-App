import string
from random import random
from unittest.util import _MAX_LENGTH
from django.db import models
from django.core import validators
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import User


# Create your models here.

class Login(models.Model):
    userID = models.CharField(max_length=100, blank=False, default="", unique=True)
    username = models.CharField(max_length=100, blank=False, default="", unique=True)
    password = models.CharField(max_length=100, blank=False, default="", unique=False)

class UserProfile(models.Model):
    userID = models.CharField(max_length=100, blank=False, default="", unique=True, related_name = 'created_user_id')
    fullName = models.CharField(max_length=50, blank=False, default="", validators=[validators.MinLengthValidator(1)])
    addressOne = models.CharField(max_length=100, blank=False, default="", validators=[validators.MinLengthValidator(1)])
    addressTwo = models.CharField(max_length=100, default="")
    city = models.CharField(max_length=100, blank=False, default="", validators=[validators.MinLengthValidator(1)])
    inState = models.CharField(max_length=100, blank=False, default="", validators=[validators.MinLengthValidator(1)])
    zipCode = models.CharField(max_length=9, blank=False, default="", validators=[validators.MinLengthValidator(5)])

class FuelQuoteForm(models.Model):
    userID = models.CharField(max_length=100, blank=False, default="")
    gallonsRequested = models.BigIntegerField(default=0, blank=False)
    deliveryAddressOne = models.CharField(max_length=100, blank=False, default="", validators=[validators.MinLengthValidator(1)])
    deliveryAddressTwo = models.CharField(max_length=100, default="")
    deliveryDate = models.DateField( blank=False, default='01/01/2020')
    pricePerGallon = models.BigIntegerField(default=0)
    totalDue = models.BigIntegerField(default=0)