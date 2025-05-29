from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

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
