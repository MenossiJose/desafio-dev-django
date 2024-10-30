from rest_framework import generics
from .models import Contacts
from .serializers import ContactsSerializer

class ContactListCreate(generics.ListCreateAPIView):
    queryset = Contacts.objects.all()
    serializer_class = ContactsSerializer

class ContactRetrieveUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
    queryset = Contacts.objects.all()
    serializer_class = ContactsSerializer