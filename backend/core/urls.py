from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter
from .views import ApplianceViewSet, UsageRecordViewSet, guest_energy_summary

router = DefaultRouter()
router.register(r'appliances', ApplianceViewSet)
router.register(r'usagerecords', UsageRecordViewSet)

urlpatterns = [
    path('guest/', views.guest_view, name='guest'),
    path('cookies/set/', views.set_cookie_view, name='set_cookie'),
    path('cookies/read/', views.read_cookie_view, name='read_cookie'),
    path('advice/', views.advice_view, name='advice'),
    path('api/', include(router.urls)),
    path('api/guest-summary/<str:guest_id>/', guest_energy_summary),
    ]


