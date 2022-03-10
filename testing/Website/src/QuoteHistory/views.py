from django.shortcuts import render
from django.contrib.auth import logout

from .models import Quote_History

# Create your views here.
def quote_history_view(request): # Need to update
	return render(request, "QuoteHistory/Quote_History.html", {})
