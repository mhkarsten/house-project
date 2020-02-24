from django.contrib import admin

from house_model.models import message 
from house_model.models import user
from house_model.models import build
# Register your models here.


admin.site.register(message.Message)
admin.site.register(user.User)
admin.site.register(build.Build)
admin.site.register(build.Builds)
