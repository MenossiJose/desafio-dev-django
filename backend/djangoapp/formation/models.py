from django.db import models

# Create your models here.
class Formation(models.Model):
    institution = models.CharField(max_length=200)
    title = models.CharField(max_length=200)
    duration = models.IntegerField(max_length=2)

    def __str__(self):
        return self.title