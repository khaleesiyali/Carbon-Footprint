from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.viewsets import ModelViewSet
from .models import Appliance, UsageRecord, Category, ShoppingRecord, TravelRecord
from .serializers import ApplianceSerializer, UsageRecordSerializer, CategorySerializer, ShoppingRecordSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.
def guest_view(request):
    return HttpResponse("Guest access granted")

def set_cookie_view(request):
    response = HttpResponse("Cookie set")
    response.set_cookie('userConsent', 'true', max_age=3600)
    return response

def read_cookie_view(request):
    value = request.COOKIES.get('userConsent', 'Not set')
    return HttpResponse(f"Cookie: {value}")

def advice_view(request):
    tips = [
        {"id": 1, "tip": "Use energy-efficient appliances"},
        {"id": 2, "tip": "Reduce meat consumption"},
        {"id": 3, "tip": "Take public transportation"},
        ]
    return JsonResponse(tips, safe=False)

class ApplianceViewSet(ModelViewSet):
    queryset = Appliance.objects.all()
    serializer_class = ApplianceSerializer


class UsageRecordViewSet(ModelViewSet):
    queryset = UsageRecord.objects.all()
    serializer_class = UsageRecordSerializer

@api_view(['GET'])
def guest_energy_summary(request, guest_id):
    records = UsageRecord.objects.filter(guest_id=guest_id)
    total_joules = sum(record.energy_per_year_joules() for record in records)
    return Response({"guest_id": guest_id, "total_energy_joules": total_joules})


class CategoryViewSet(ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class ShoppingRecordViewSet(ModelViewSet):
    queryset = ShoppingRecord.objects.all()
    serializer_class = ShoppingRecordSerializer


@api_view(['GET'])
def shopping_summary(request, guest_id):
    records = ShoppingRecord.objects.filter(guest_id=guest_id)
    total_kg = sum(r.emission_kg() for r in records)
    return Response({
        "guest_id": guest_id,
        "total_shopping_emissions_kg": round(total_kg, 2)
    })

@api_view(['GET'])
def travel_summary(request,guest_id):
    records = TravelRecord.objects.filter(guest_id=guest_id)
    total_kg = sum(r.emission_kg() for r in records)
    return Response({
        "guest_id": guest_id,
        "total_travel_emissions_kg": round(total_kg, 2)
    })
