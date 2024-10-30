from rest_framework import generics
from .models import User
from .serializers import UserSerializer
from experience.serializers import ExperienceSerializer
from education.serializers import EducationSerializer
from contacts.serializers import ContactsSerializer
from experience.models import Experience
from education.models import Education
from contacts.models import Contacts

class UserListCreate(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserRetrieveUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserEducationListAPIView(generics.ListAPIView):
    serializer_class = EducationSerializer

    def get_queryset(self):
        return Education.objects.filter(user=self.request.user).all()
    

class UserContactsListAPIView(generics.ListAPIView):
    serializer_class = ContactsSerializer


    def get_queryset(self):
        return Contacts.objects.filter(user=self.request.user)

class UserExperienceListAPIView(generics.ListAPIView):
    serializer_class = ExperienceSerializer


    def get_queryset(self):
        return Experience.objects.filter(user=self.request.user).all()

class UserMeAPIView(generics.RetrieveAPIView):
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user