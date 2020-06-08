from django.contrib import admin
from .models import User, Message, Build, BuildLog

admin.site.register([User, Message, Build, BuildLog])

