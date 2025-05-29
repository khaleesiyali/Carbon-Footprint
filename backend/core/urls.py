from django.urls import path
from . import views

urlpatterns = [
    path('guest/', views.guest_view, name='guest'),
    path('cookies/set/', views.set_cookie_view, name='set_cookie'),
    path('cookies/read/', views.read_cookie_view, name='read_cookie'),
    path('advice/', views.advice_view, name='advice'),
    ]
