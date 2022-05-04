from rest_framework import generics, status
from .models import Login, UserProfile, FuelQuoteForm
from .serializers import LoginSerializer, UserProfileSerializer, FuelQuoteFormSerializer, RegisterUserSerializer, ProfileChangeSerializer, FuelQuoteFormSubmitSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

class LoginView(generics.CreateAPIView):
    queryset = Login.objects.all()
    serializer_class = LoginSerializer

    def get(self, request, format=None):
        users = Login.objects.all()
        serializer = LoginSerializer(users, many=True)
        return Response(serializer.data)

class UserProfileView(generics.CreateAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer

    def get(self, request, format=None):
        users = UserProfile.objects.all()
        serializer = UserProfileSerializer(users, many=True)
        return Response(serializer.data)

class FuelQuoteFormView(generics.CreateAPIView):
    queryset = FuelQuoteForm.objects.all()
    serializer_class = FuelQuoteFormSerializer

    def get(self, request, format=None):
        users = FuelQuoteForm.objects.all()
        serializer = FuelQuoteFormSerializer(users, many=True)
        return Response(serializer.data)

class GetLoginView(APIView):
    serializer_class = LoginSerializer

    def get(self, request, format=None):
        usernameString = request.GET.get('username')
        passwordString = request.GET.get('password')
        print(usernameString)
        print(passwordString)
        exist = Login.objects.filter(username=usernameString, password=passwordString).exists()
        if exist == True:
            return Response(status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)


class GetFuelQuoteFormView(APIView):
    serializer_class = FuelQuoteFormSerializer

    def get(self, request, format=None):
        usernameString = request.GET.get('userID')
        print(usernameString)
        users = FuelQuoteForm.objects.filter(userID=usernameString)
        serializer = FuelQuoteFormSerializer(users, many=True)
        return Response(serializer.data)

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