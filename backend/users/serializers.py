from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from .models import User

class UserSerializer(serializers.ModelSerializer):
    username =serializers.CharField(
        validators=[
            UniqueValidator(
                queryset=User.objects.all(),
                message="Username already exists",
                )
        ],
    )
    email =serializers.CharField(
        validators=[
            UniqueValidator(
                queryset=User.objects.all(),
                message="Email already exists",
                )
        ],
    )
    password = serializers.CharField(write_only=True)
    birth_date = serializers.DateField(input_formats=['%d/%m/%Y'])

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password', 'gender', 'birth_date', 'first_name', 'last_name', 'is_superuser', 'is_staff']

    def create(self, validated_data):
        is_superuser = validated_data.pop('is_superuser', False)  # Remove is_superuser from validated data
        
        user = User(
            first_name=validated_data.get('first_name'),
            last_name=validated_data.get('last_name'),
            username=validated_data['username'],
            email=validated_data['email'],
            birth_date=validated_data.get('birth_date'),
            gender=validated_data.get('gender'),
        )
        
        user.set_password(validated_data['password'])  # Hash the password
        
        # Set superuser and staff status if creating a superuser
        if is_superuser:
            user.is_superuser = True
            user.is_staff = True
        
        user.save()  # Save the user instance
        return user

    

    def update(self, instance: User, validated_data: dict) -> User:
        password = validated_data.pop("password", None)
        if password:
            instance.set_password(password)

        for key, value in validated_data.items():
            setattr(instance, key, value)

        instance.save()

        return instance

