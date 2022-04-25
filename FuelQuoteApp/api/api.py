from api.models import Login
from rest_framework import viewsets, permissions
from .serializers import LoginSerializer

class LoginViewSet(viewsets.ModelViewSet):
    queryset = Login.objects.all
    permission_classes = [permissions.AllowAny]
    serializer_class = LoginSerializer