from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/education', include('education.urls')),
    path('api/', include('contacts.urls')),
    path('api/', include('experience.urls')),
    path('api/', include('users.urls')),
]
