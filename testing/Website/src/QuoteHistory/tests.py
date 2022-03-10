from django.test import TestCase

from .models import Quote_History

# Create your tests here.

class BasicTest(TestCase):
	def test_quotes(self):
		quote=Quote_History()
		quote.delivery_address_1 = "1234 Rain Ave"
		quote.delivery_address_2 = ""
		quote.city = "Houston"
		quote.state = "TX"
		quote.zip_code = "77096"
		quote.gallons_requested = 0.0
		quote.price = 0.0
		quote.save()

		record = Quote_History.objects.get(pk=1)
		self.assertEqual(record, quote)
