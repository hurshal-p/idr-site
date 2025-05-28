from django.urls import path
from .views import testimonial_list

urlpatterns = [
    path('testimonials/', testimonial_list, name='testimonial_list')
]
