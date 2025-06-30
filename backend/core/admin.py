om django.contrib import admin
from .models import Appliance, UsageRecord, Category, ShoppingRecord, TravelRecord

# Register your models here.

admin.site.register(Appliance)
admin.site.register(UsageRecord)
admin.site.register(Category)
admin.site.register(ShoppingRecord)
admin.site.register(TravelRecord)
