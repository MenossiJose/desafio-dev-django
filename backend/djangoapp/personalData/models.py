from django.db import models

# Create your models here.
class PersonalData(models.Model):
    name = models.CharField(max_length=200)
    birth = models.DateField()
    gender = models.CharField(max_length=12)

    def __str__(self):
        return self.name