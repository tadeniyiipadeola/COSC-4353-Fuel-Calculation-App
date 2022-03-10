"""reservationSystem URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

from pages.views import home_view
from members.views import member_create_view
from members.views import member_complete_view
from members.views import member_login_view
from members.views import member_logout_view
from bugs.views import bug_create_view
from QuoteHistory.views import quote_history_view

urlpatterns = [
    path('', home_view, name='home'),
    path('admin/', admin.site.urls),
    path('create_account/', member_create_view, name='create_account'),
    path('login/', member_login_view, name='login'),
    path('complete_account/', member_complete_view, name='complete_account'),
    path('logout/', member_logout_view, name='logout'),
    path('create_bug_report/', bug_create_view, name='create_bug_tracker'),
    path('quote_history/', quote_history_view, name='quote_history'),
]
