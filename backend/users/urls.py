from django.urls import path
from . import views

urlpatterns = [
    path('users/', views.UserListCreate.as_view(), name='education-list-create'),
    path('users/<int:pk>/', views.UserRetrieveUpdateDelete.as_view(), name='user-retrieve-update-delete'),
    path('users/education/', views.UserEducationListAPIView.as_view(), name='user-education-list'),
    path('users/experience/', views.UserExperienceListAPIView.as_view(), name='user-experience-list'),
    path('users/contacts/', views.UserContactsListAPIView.as_view(), name='user-contacts-list'),
    path('me/', views.UserMeAPIView.as_view(), name='user-me'),
]