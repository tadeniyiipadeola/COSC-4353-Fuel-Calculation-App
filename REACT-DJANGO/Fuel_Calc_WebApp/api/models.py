from django.db import models

# Create your models here.
class User(models.Model):
    id = models.IntegerField(primary_key=True)
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    Username = models.CharField(max_length=15, unique=True)
    Password = models.CharField(unique=True, max_length=20)
    created_at = models.DateTimeField(auto_now_add=True)