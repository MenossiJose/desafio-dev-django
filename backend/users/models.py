from django.db import models
from django.contrib.auth.models import AbstractUser, Group, Permission

class User(AbstractUser):
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=150, unique=True)
    birth_date = models.DateField(null=True, blank=True)
    gender = models.CharField(max_length=15, null=True, blank=True)

    groups = models.ManyToManyField(Group, related_name='custom_user_set', blank=True)
    user_permissions = models.ManyToManyField(Permission, related_name='custom_user_set', blank=True)
    
    def __str__(self):
        return self.email
# Create your models here.
