from django.test import TestCase

from .models import Member

# Create your tests here.

class BasicTest(TestCase):
	def test_fields(self):
		member = Member()
		member.username = "Bob123"
		member.password = "Test123"	

		record = Member.objects.get(pk=member.pid)
		self.assertEqual(record, member)

	def test_complete_fields(self):
		member = Member()
		member.username = "Bob123"
		member.password = "Test123"

		member.address_1 = "1234 Rain Ave"
		member.address_2 = ""
		member.city = "Houston"
		member.state = "TX"
		member.zip_code = "77096"
		member.profit_margin = "0"
		member.save()

		record = Member.objects.get(pk=member.pid)
		self.assertEqual(record, member)


