from django.db import models

# Create your models here.
class Member(models.Model):
	pid = models.AutoField(primary_key=True)
	username = models.TextField(max_length=128, default="")
	password = models.TextField(max_length=128, default="")
	address_1 = models.TextField(max_length=128, default="")
	address_2 = models.TextField(max_length=128, blank=True)
	city = models.TextField(max_length=64, default="")
	state = models.TextField(default="", max_length=2)
	zip_code = models.TextField(max_length=5, default="")
	profit_margin = models.TextField(max_length=5, default="")#DecimalField(decimal_places=2, max_digits=2, default=0)
