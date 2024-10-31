from rest_framework import serializers
from .models import Education
from users.serializers import UserSerializer

class EducationSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True) 

    class Meta:
        model = Education
        fields = ['id', 'user', 'institution', 'title', 'duration']

    def create(self, validated_data):
        validated_data['user'] = self.context['request'].user
        return super().create(validated_data)