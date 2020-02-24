from djongo import models

# Create your models here.


class Message(models.Model):
    source = models.EmbeddedField(
        model_container= models.ForeignKey('house_model.User', on_delete=models.CASCADE)
    )
    timeStamp = models.DateTimeField()
    message = models.TextField()

