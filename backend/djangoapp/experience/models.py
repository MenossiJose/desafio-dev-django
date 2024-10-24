from django.db import models

# Create your models here.
class Experience(models.Model):
    company = models.CharField(max_length=200)
    role = models.CharField(max_length=200)
    description = models.CharField(max_length=400)

    def __str__(self):
        return self.role