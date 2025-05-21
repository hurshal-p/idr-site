
from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse

urlpatterns = [
    path('admin/', admin.site.urls),
]

def home(request):
    return HttpResponse("Welcome to the backend!")

urlpatterns = [
    path('admin/', admin.site.urls),
    path('contact/', include('contact.urls')),
    path('', home),
     path('api/', include('testimonials.urls')),
]