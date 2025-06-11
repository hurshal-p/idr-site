INSTRUCTIONS TO RUN WEBSITE 

Download files 'backend' and 'frontend' and ensure Python, JavaScript, and required dependencies are installed.
This includes:
- TailwindCSS
- Django,NextJS, ReactJS
- Node.js

In code editor:
1. Right click 'backend' folder and open integrated terminal. Type 'python3 manage.py runserver' to begin backend.
    You can access 'http://127.0.0.1:8000/admin/' with the username and password both being 'mranderson', and view the backend form submissions.

2. Right click 'frontend' folder and open intergrated terminal. Type 'npm run build', then 'npm run dev' to start the frontend server.
    Click the provided link (should be localhost:3000) to access.


Commands for installation ( things that need to be installed):

npm install
(in backend directory) 
- pip install django
- pip install -r requirements.txt
- pip install django-extensions 
- 

(in frontend directory) npm install next@latest react@latest react-dom@latest –legacy-peer-deps


ISSUES:
- if there is an error regarding "django-extensions": backend --> idrbackend --> settings.py --> `INSTALLED_APPS` --> uncomment 'django-extensions'

Commands for installation ( things that need to be installed):

npm install
(in backend directory) 
- pip install django
- pip install -r requirements.txt
- pip install django-extensions 
- 

(in frontend directory) npm install next@latest react@latest react-dom@latest –legacy-peer-deps


ISSUES:
- if there is an error regarding "django-extensions": backend --> idrbackend --> settings.py --> `INSTALLED_APPS` --> uncomment 'django-extensions'