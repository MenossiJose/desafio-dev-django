from django.db import models

# Create your models here.
class Education(models.Model):
    user = models.ForeignKey("users.User", on_delete=models.CASCADE, related_name='education')
    institution = models.CharField(max_length=200)
    title = models.CharField(max_length=200)
    duration = models.IntegerField()

