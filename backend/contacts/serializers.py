from rest_framework import serializers
from .models import Contacts
from users.serializers import UserSerializer

class ContactsSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Contacts
        fields = ['id', 'user', 'phone', 'adress', 'cep']

    def create(self, validated_data):
        validated_data['user'] = self.context['request'].user
        return super().create(validated_data)
    
    def validate(self, data):
        user = self.context['request'].user
        # Só verificar se já existe um contato se for uma criação
        if self.instance is None and Contacts.objects.filter(user=user).exists():
            raise serializers.ValidationError("This user can't add more contacts.")
        
        return data