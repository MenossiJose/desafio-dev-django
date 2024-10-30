from django.db import models

# Create your models here.
class Experience(models.Model):
    user = models.ForeignKey("users.User", on_delete=models.CASCADE, related_name='experience')
    company = models.CharField(max_length=60)
    role = models.CharField(max_length=60)
    description = models.TextField(max_length=500)

