from urllib import response
from django.test import TestCase, RequestFactory
from django.contrib.auth.models import AnonymousUser, User
from django.urls import reverse
from .models import Login, UserProfile, FuelQuoteForm
from .views import LoginView, UserProfileView, FuelQuoteFormView, RegisterUserView, ProfileChangeView, GetFuelQuoteFormView, GetLoginView, FuelQuoteFormSubmitView

class LoginTestCase(TestCase):
    def setUp(self):
        Login.objects.create(userID="", username="check", password="please")
        Login.objects.create(userID="different", username="usernamehere", password="please")

    def testUniqueValue(self):
        """Animals that can speak are correctly identified"""
        blankUser = Login.objects.get(userID="")
        differentUser = Login.objects.get(userID="different")
        self.assertEqual(blankUser.password, differentUser.password)
        self.assertNotEqual(blankUser.username, differentUser.username)
        self.assertNotEqual(blankUser.userID, differentUser.userID)
    
        
class CheckProfileTest(TestCase):
    def setUp(self):
        numberProfiles = 5

        for userID in range(numberProfiles):
            UserProfile.objects.create(
                    userID = '{userID}',
                    fullName = 'Richard {userID}',
                    addressOne = '{userID} Ridgeview Road',
                    addressTwo = '{userID}',
                    city = '{userID} Metropolis',
                    inState = 'inState',
                    zipCode = '123{userID}',
            )

    def test_view_url_exists_at_desired_location(self):
        response = self.client.get('/api/userProfileView')
        self.assertEqual(response.status_code, 200)

    def test_view_url_accessible_by_name(self):
        response = self.client.get('/profile')
        self.assertEqual(response.status_code, 200)

class CheckFormTest(TestCase):
    def setUp(self):
        numberForms = 5

        for userID in range(numberForms):
            FuelQuoteForm.objects.create(
                    gallonsRequested = userID+1,
                    deliveryAddressOne = 'Richard {userID}',
                    deliveryAddressTwo = '{userID}',
                    deliveryDate = '2020-12-25',
                    pricePerGallon = userID,
                    totalDue = userID
            )

    def test_view_url_exists_at_desired_location(self):
        response = self.client.get('/api/fuelQuoteFormView')
        self.assertEqual(response.status_code,200)

    def test_view_url_accessible_by_name(self):
        response = self.client.get('/fuelQuoteForm')
        self.assertEqual(response.status_code, 200)

class RegisterUserViewTest(TestCase):
    def setUp(self):
        # Every test needs access to the request factory.
        self.factory = RequestFactory()
        self.user = UserProfile.objects.create(
            userID = 111,
            fullName = 'Richard MyGuy',
            addressOne = '2 Ridgeview Road',
            addressTwo = '3',
            city = 'Big Metropolis',
            inState = 'inState',
            zipCode = '8675309')

    def test_details(self):
        # Create an instance of a GET request.
        request = self.factory.get('/api/userProfileView')

        # Recall that middleware are not supported. You can simulate a
        # logged-in user by setting request.user manually.
        request.user = self.user

        # Or you can simulate an anonymous user by setting request.user to
        # an AnonymousUser instance.
        request.user = AnonymousUser()

        # Use this syntax for class-based views.
        response = UserProfileView.as_view()(request)
        self.assertEqual(response.status_code, 200)

class UserProfileViewTest(TestCase):
    def setUp(self):
        # Every test needs access to the request factory.
        self.factory = RequestFactory()
        self.user = Login.objects.create(
            userID='stuffers', username='theguy', password='top_secret')

    def test_details(self):
        # Create an instance of a GET request.
        request = self.factory.get('/api/loginView')

        # Recall that middleware are not supported. You can simulate a
        # logged-in user by setting request.user manually.
        request.user = self.user

        # Or you can simulate an anonymous user by setting request.user to
        # an AnonymousUser instance.
        request.user = AnonymousUser()

        # Use this syntax for class-based views.
        response = LoginView.as_view()(request)
        self.assertEqual(response.status_code, 200)

# Create your tests here.
