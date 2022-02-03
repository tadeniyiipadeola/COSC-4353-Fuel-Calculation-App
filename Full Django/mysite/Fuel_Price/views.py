from django.shortcuts import render
from django.http import HttpResponse , HttpResponseRedirect

# Create your views here.
def homepage(request):
    return HttpResponse(render(request, 'index.html'))