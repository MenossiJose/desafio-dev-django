from django.db import models

# Create your models here.
class Contacts(models.Model):
    email = models.EmailField(max_length=200)
    phone = models.CharField(max_length=20)
    adress = models.TextField()
    cep = models.IntegerField()(max_length=8)

    def __str__(self):
        return self.name