from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import ContactSubmission
from django.core.mail import send_mail

@csrf_exempt
def submit_contact(request):
    if request.method == 'OPTIONS':
        return JsonResponse({'status': 'ok'}, status=200)


    if request.method == 'POST':
        data = json.loads(request.body)

        name = data.get('name')
        email = data.get('email')
        message = data.get('message')

        # Save to DB
        ContactSubmission.objects.create(name=name, email=email, message=message)

   
        send_mail(
            subject=f"New Contact Form Submission from {name}",
            message=f"Name: {name}\nEmail: {email}\nMessage:\n{message}",
            from_email='milopawar@gmail.com',
            recipient_list=['milopawar@gmail.com'],
            fail_silently=False,
        )

        return JsonResponse({'status': 'success'})
    return JsonResponse({'error': 'Invalid method'}, status=405)

