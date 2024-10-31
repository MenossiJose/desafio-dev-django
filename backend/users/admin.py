from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User  

@admin.register(User)
class CustomUserAdmin(UserAdmin):
    model = User
    list_display = ('id', 'username',  'first_name', 'last_name', 'email', 'is_superuser',)

    fieldsets = (
        (None, {'fields': ('username', 'email', 'password', 'first_name', 'last_name', 'birth_date')}),
        ('Permissions', {'fields': ('is_staff',)}),
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('username', 'email', 'password1', 'password2', 'first_name', 'last_name', 'birth_date', 'is_staff')},
        ),
    )
    search_fields = ('email', 'username', 'first_name', 'last_name')
    ordering = ('email',)

