from django.contrib import admin
from .models import Education

class EducationAdmin(admin.ModelAdmin):
    list_display = ('user', 'institution', 'title', 'duration')  
    search_fields = ('institution', 'title', 'user__username')  
    list_filter = ('institution',)  
    ordering = ('user', 'institution')  

admin.site.register(Education, EducationAdmin)
