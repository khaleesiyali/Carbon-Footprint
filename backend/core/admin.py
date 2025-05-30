from django.contrib import admin
from .models import Appliance, UsageRecord

# Register your models here.

admin.site.register(Appliance)
admin.site.register(UsageRecord)
