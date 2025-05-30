# core/seeder.py

from .models import Appliance, UsageRecord

def run_seeder():
    print("Seeder running...")

    appliance_data = [
        ("Air conditioner", 580),
        ("IH cooking heater", 2500),
        ("Refrigerator", 250),
        ("Rice cooker", 1300),
        ("Light LED", 10),
        ("Gadgets", 20),
        ("Dryer", 1200),
        ("Washing machine", 450),
        ("Tumbler dryer", 1300),
    ]

    for name, watt in appliance_data:
        Appliance.objects.get_or_create(name=name, defaults={'watt_hour_per_hour': watt})

    guest_usage_data = {
        "guest1": [
            ("Air conditioner", 8),
            ("Refrigerator", 24),
            ("Light LED", 5),
        ],
        "guest2": [
            ("IH cooking heater", 2),
            ("Rice cooker", 1),
            ("Dryer", 1),
        ],
        "guest3": [
            ("Washing machine", 1),
            ("Gadgets", 6),
            ("Tumbler dryer", 1),
        ],
    }

    for guest_id, usage_list in guest_usage_data.items():
        for appliance_name, hours in usage_list:
            appliance = Appliance.objects.get(name=appliance_name)
            UsageRecord.objects.get_or_create(
                guest_id=guest_id,
                appliance=appliance,
                defaults={'hours_per_day': hours}
            )
