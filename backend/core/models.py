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
    

class Category(models.Model):
    slug = models.SlugField(unique=True)  # e.g., "clothing"
    label = models.CharField(max_length=100)  # e.g., "Clothing"
    emission_factor_yen = models.FloatField(help_text="Emission factor per ¥100,000 spent (kg CO₂e)")

    def __str__(self):
        return self.label


class ShoppingRecord(models.Model):
    guest_id = models.CharField(max_length=100)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    price_yen = models.FloatField(help_text="Price per item in ¥")
    quantity = models.PositiveIntegerField()

    def emission_kg(self):
        total_spending = self.price_yen * self.quantity
        return (total_spending / 100000) * self.category.emission_factor_yen

    def __str__(self):
        return f"{self.guest_id} bought {self.quantity}x {self.category.label}"

