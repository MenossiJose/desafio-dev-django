from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=150, unique=True)
    birth_date = models.DateField(null=True, blank=True)
    gender = models.CharField(max_length=15, null=True, blank=True)
    
    def __str__(self):
        return self.username
# Create your models here.
