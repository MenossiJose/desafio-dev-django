from django.db import models

# Create your models here.
class Contacts(models.Model):
    user = models.ForeignKey("users.User", on_delete=models.CASCADE, related_name='contacts')
    phone = models.CharField(max_length=20)
    adress = models.CharField()
    cep = models.IntegerField()

