from django.urls import path
from . import views

urlpatterns = [
    path('education/', views.EducationListCreate.as_view(), name='education-list-create'),
    path('education/<int:pk>/', views.EducationRetrieveUpdateDelete.as_view(), name='education-detail')
]