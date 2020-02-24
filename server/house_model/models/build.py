from djongo import models


# Create your models here.
class Build(models.Model):  
    time_stamp = models.DateField()
    image = models.CharField(max_length=50)
    name = models.CharField(max_length=50)
    description = models.TextField()
    source = models.EmbeddedField(
        model_container = models.ForeignKey('house_model.User', on_delete=models.CASCADE)
    )

class Builds(models.Model):
    current_build = models.EmbeddedField(
        model_container = Build
    )
    build_queue = models.ArrayField(
        model_container = Build
    )
    build_history = models.ArrayField(
        model_container = Build
    )
    build_ideas =  models.ArrayField(
        model_container = Build
    )
