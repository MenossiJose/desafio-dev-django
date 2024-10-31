from rest_framework import generics
from .models import Experience
from .serializers import ExperienceSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication

class ExperienceListCreate(generics.ListCreateAPIView):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    

class ExperienceRetrieveUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer

    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated] 