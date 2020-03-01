from djongo import models
# Create your models here.

class Message(models.Model):
    identifier = models.IntegerField()
    source = models.CharField(max_length=50) # User
    time_stamp = models.TimeField(auto_now=False, auto_now_add=False)
    message = models.TextField()

    def __str__(self):
        return self.identifier

class Build(models.Model):  
    time_stamp = models.TimeField(auto_now=False, auto_now_add=False)
    image = models.ImageField(upload_to=None, height_field=None, width_field=None, max_length=None)
    name = models.CharField(max_length=50)
    description = models.TextField()
    source = models.CharField(max_length=50) # User

    def __str__(self):
        return self.id

class BuildLog(models.Model):
    log_name = models.CharField(max_length=100)
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
    def __str__(self):
        return self.log_name

class User(models.Model):
    name = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    builds = models.ArrayField(
        model_container = Build
    )
    messages = models.EmbeddedField(
        model_container= Message
    )

    def __str__(self):
        return self.name
