from django.urls import path
from . import views

urlpatterns = [
    path('contacts/', views.ContactListCreate.as_view(), name='contact-list-create'),
    path('contacts/<int:pk>/', views.ContactRetrieveUpdateDelete.as_view(), name='contact-detail')
]