from django.urls import path
from . import views
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


urlpatterns = [
    path('users/', views.UserListCreate.as_view(), name='education-list-create'),
    path('users/<int:pk>/', views.UserRetrieveUpdateDelete.as_view(), name='user-retrieve-update-delete'),
    path('users/education/', views.UserEducationListAPIView.as_view(), name='user-education-list'),
    path('users/experience/', views.UserExperienceListAPIView.as_view(), name='user-experience-list'),
    path('users/contacts/', views.UserContactsListAPIView.as_view(), name='user-contacts-list'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh', TokenRefreshView.as_view(), name='token_refresh'),
    path('me/', views.UserMeAPIView.as_view(), name='user-me'),
]