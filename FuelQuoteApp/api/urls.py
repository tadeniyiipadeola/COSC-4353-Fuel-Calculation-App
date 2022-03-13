from django.urls import path
from .views import FuelQuoteFormView, LoginView, UserProfileView, GetLoginView, GetFuelQuoteFormView

urlpatterns = [
    path('loginView', LoginView.as_view()),
    path('getLogin', GetLoginView.as_view()), 
    path('userProfileView', UserProfileView.as_view()),
    path('fuelQuoteFormView', FuelQuoteFormView.as_view()),
    path('getFuelQuoteFormData', GetFuelQuoteFormView.as_view())
]
