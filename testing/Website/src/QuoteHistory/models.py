from django.db import models

# Create your models here.
class Quote_History(models.Model):
  date = models.DateTimeField(auto_now_add=True)
  delivery_address_1 = models.TextField(("Address"), max_length=128, default="")
  delivery_address_2 = models.TextField(("Address Cont'd"), max_length=128, blank=True)
  city = models.TextField(max_length=64, default="")
  state = models.TextField(default="", max_length=2)
  zip_code = models.TextField(max_length=5, default="")
  gallons_requested = models.DecimalField(decimal_places=2, max_digits=3, default=0)
  price = models.DecimalField(decimal_places=2, max_digits=2, default=0)
