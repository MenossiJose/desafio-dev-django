from rest_framework import serializers
from .models import Education

class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = ['id', 'user', 'institution', 'title', 'duration']