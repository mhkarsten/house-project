from djongo import models
from .build import Build
# Create your models here.

class User(models.Model):
    name = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    builds = models.ArrayField(
        model_container = Build
    )
    messages = models.ArrayField(
        model_container = models.ForeignKey("house_model.message", on_delete=models.CASCADE)
    )