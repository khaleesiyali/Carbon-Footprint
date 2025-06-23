from rest_framework import serializers
from .models import Appliance, UsageRecord, Category, ShoppingRecord


class ApplianceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appliance
        fields = ['id', 'name', 'watt_hour_per_hour']


class UsageRecordSerializer(serializers.ModelSerializer):
    energy_per_day_joules = serializers.SerializerMethodField()
    energy_per_year_joules = serializers.SerializerMethodField()

    class Meta:
        model = UsageRecord
        fields = ['id', 'guest_id', 'appliance', 'hours_per_day', 'energy_per_day_joules', 'energy_per_year_joules']

    def get_energy_per_day_joules(self, obj):
        return obj.energy_per_day_joules()

    def get_energy_per_year_joules(self, obj):
        return obj.energy_per_year_joules()

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'slug', 'label', 'emission_factor_yen']


class ShoppingRecordSerializer(serializers.ModelSerializer):
    emission_kg = serializers.SerializerMethodField()

    class Meta:
        model = ShoppingRecord
        fields = ['id', 'guest_id', 'category', 'price_yen', 'quantity', 'emission_kg']

    def get_emission_kg(self, obj):
        return round(obj.emission_kg(), 2)
