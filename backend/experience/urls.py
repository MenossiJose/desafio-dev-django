from django.urls import path
from . import views

urlpatterns = [
    path('experience/', views.ExperienceListCreate.as_view(), name='experience-list-create'),
    path('experience/<int:pk>/', views.ExperienceRetrieveUpdateDelete.as_view(), name='experience-detail')
]