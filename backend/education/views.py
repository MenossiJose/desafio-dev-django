from rest_framework import generics
from .models import Education
from .serializers import EducationSerializer

class EducationListCreate(generics.ListCreateAPIView):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer

class EducationRetrieveUpdateDelete(generics.RetrieveUpdateDestroyAPIView):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer