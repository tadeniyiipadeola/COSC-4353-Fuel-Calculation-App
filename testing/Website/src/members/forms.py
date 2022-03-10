from django import forms

from .models import Member

class MemberCreate(forms.Form):
	username = forms.CharField()
	password = forms.CharField()

class MemberComplete(forms.Form):
	address_1 = forms.CharField()
	address_2 = forms.CharField()
	city = forms.CharField()
	state = forms.CharField()
	zip_code = forms.CharField()
	profit_margin = forms.CharField()

class MemberLoginForm(forms.Form):
	username = forms.CharField()
	password = forms.CharField()

#class MemberGetStats(forms.Form):
