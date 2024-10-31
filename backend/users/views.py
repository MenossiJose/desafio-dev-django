from rest_framework import generics
from .models import User
from .serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework_simplejwt.authentication import JWTAuthentication
from experience.serializers import ExperienceSerializer
from education.serializers import EducationSerializer
from contacts.serializers import ContactsSerializer
from experience.models import Experience
from education.models import Education
from contacts.models import Contacts


class UserListCreate(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]
    

class UserRetrieveUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    queryset = User.objects.all()
    serializer_class = UserSerializer
    

class UserEducationListAPIView(generics.ListAPIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    serializer_class = EducationSerializer

    def get_queryset(self):
        return Education.objects.filter(user=self.request.user).all()
    

class UserContactsListAPIView(generics.ListAPIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    serializer_class = ContactsSerializer


    def get_queryset(self):
        return Contacts.objects.filter(user=self.request.user)

class UserExperienceListAPIView(generics.ListAPIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    serializer_class = ExperienceSerializer
    

    def get_queryset(self):
        return Experience.objects.filter(user=self.request.user).all()

class UserMeAPIView(generics.RetrieveAPIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user