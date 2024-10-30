from django.contrib import admin
from .models import Experience

class ExperienceAdmin(admin.ModelAdmin):
    list_display = ('company', 'role', 'user', 'description')  
    search_fields = ('company', 'role', 'user__username')  
    list_filter = ('company', 'role') 
    ordering = ('company',)  

admin.site.register(Experience, ExperienceAdmin)