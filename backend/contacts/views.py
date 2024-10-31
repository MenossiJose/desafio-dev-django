from rest_framework import generics
from .models import Contacts
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from .serializers import ContactsSerializer

class ContactListCreate(generics.ListCreateAPIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    queryset = Contacts.objects.all()
    serializer_class = ContactsSerializer

class ContactRetrieveUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    queryset = Contacts.objects.all()
    serializer_class = ContactsSerializer