from rest_framework import generics, status
from .models import Login, UserProfile, FuelQuoteForm
from .serializers import LoginSerializer, UserProfileSerializer, FuelQuoteFormSerializer, RegisterUserSerializer, ProfileChangeSerializer, FuelQuoteFormSubmitSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

class LoginView(generics.CreateAPIView):
    queryset = Login.objects.all()
    serializer_class = LoginSerializer

class UserProfileView(generics.CreateAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer

class FuelQuoteFormView(generics.CreateAPIView):
    queryset = FuelQuoteForm.objects.all()
    serializer_class = FuelQuoteFormSerializer

class GetLoginView(APIView):
    serializer_class = Login
    lookup_url_kwarg = 'username'

    def get(self, request, format=None):
        username = request.GET.get(self.lookup_url_kwarg)
        if username != None:
                return Response(status=status.HTTP_200_OK)

class GetFuelQuoteFormView(APIView):
    serializer_class = FuelQuoteForm
    lookup_url_kwarg = 'userID'

    def get(self, request, format=None):
        userID = request.GET.get(self.lookup_url_kwarg)
        if userID != None:
                return Response(status=status.HTTP_200_OK)

class RegisterUserView(APIView):
    serializer_class = LoginView

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            username = serializer.data.username
            password = serializer.data.password
            userID = self.request.sessions.session_key
            newLogin = Login(userID=userID, username=username, password=password)
            return Response(RegisterUserSerializer(newLogin).data, status=status.HTTP_201_CREATED)

class ProfileChangeView(APIView):
    serializer_class = UserProfileView

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            fullName = serializer.data.fullName
            addressOne = serializer.data.addressOne
            addressTwo = serializer.data.addressTwo
            city = serializer.data.city
            inState = serializer.data.inState
            zipCode = serializer.data.zipCode
            userID = self.request.sessions.session_key
            newUserProfile = UserProfile(userID=userID, fullName=fullName, addressOne=addressOne, addressTwo=addressTwo, city=city, inState=inState, zipCode=zipCode)
            
            return Response(ProfileChangeSerializer(newUserProfile).data, status=status.HTTP_201_CREATED)

class FuelQuoteFormSubmitView(APIView):
    serializer_class = FuelQuoteForm

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            gallonsRequested = serializer.data.gallonsRequested
            deliveryAddressOne = serializer.data.deliveryAddressOne
            deliveryAddressTwo = serializer.data.deliveryAddressTwo
            deliveryDate = serializer.data.deliveryDate
            pricePerGallon = .10
            totalDue = 100
            userID = self.request.sessions.session_key
            newFuelQuoteForm = FuelQuoteForm(userID=userID, gallonsRequested=gallonsRequested, deliveryAddressOne=deliveryAddressOne, deliveryAddressTwo=deliveryAddressTwo, deliveryDate=deliveryDate, pricePerGallon=pricePerGallon, totalDue=totalDue)
            return Response(ProfileChangeSerializer(newFuelQuoteForm).data, status=status.HTTP_201_CREATED)