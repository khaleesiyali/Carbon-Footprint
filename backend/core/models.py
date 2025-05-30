from django.db import models

# Create your models here.
class Appliance(models.Model):
    name = models.CharField(max_length=100)
    watt_hour_per_hour = models.FloatField(help_text="Energy usage per hour (Wh)")

    def __str__(self):
        return self.name


class UsageRecord(models.Model):
    guest_id = models.CharField(max_length=100)
    appliance = models.ForeignKey(Appliance, on_delete=models.CASCADE)
    hours_per_day = models.FloatField()

    def energy_per_day_joules(self):
        """Calculate energy consumption per day in joules"""
        return self.appliance.watt_hour_per_hour * self.hours_per_day * 3600

    def energy_per_year_joules(self):
        return self.energy_per_day_joules() * 365

    def __str__(self):
        return f"Guest {self.guest_id} - {self.appliance.name}"
