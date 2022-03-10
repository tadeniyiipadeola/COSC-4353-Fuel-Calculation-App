from django.shortcuts import render
from django.contrib.auth import logout

from .forms import MemberCreate
from .forms import MemberComplete
from .forms import MemberLoginForm

from .models import Member

# Create your views here.

def member_create_view(request):
	my_form = MemberCreate()
	if request.method == "POST":
		my_form = MemberCreate(request.POST)
		if my_form.is_valid():
			print(my_form.cleaned_data)
			Member.objects.create(my_form.cleaned_data)
		else:
			print(my_form.errors)
	context = {
		"form": my_form
	}
	return render(request, "members/member_create.html", context)

def member_complete_view(request):
	my_form = MemberComplete()
	if request.method == "POST":
		my_form = MemberComplete(request.POST)
		if my_form.is_valid():
			print(my_form.cleaned_data)
			Member.objects.create(my_form.cleaned_data)
		else:
			print(my_form.errors)
	context = {
		"form": my_form
	}
	return render(request, "members/member_complete.html", context)

def member_login_view(request):
	my_form = MemberLoginForm()
	if request.method == "POST":
		my_form = MemberForm(request.POST)
		if my_form.is_valid():
			print(my_form.cleaned_data)
			Member.objects.create(my_form.cleaned_data)
		else:
			print(my_form.errors)
	context = {
		"form": my_form
	}
	return render(request, "members/member_login.html", context)

def member_logout_view(request):
	logout(request)
	return render(request, "members/member_logout.html")

