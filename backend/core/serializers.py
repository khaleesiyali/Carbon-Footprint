from rest_framework import serializers
from .models import Appliance, UsageRecord

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
