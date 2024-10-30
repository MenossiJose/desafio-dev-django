from django.contrib import admin
from .models import Contacts

class ContactsAdmin(admin.ModelAdmin):
    list_display = ('user', 'phone', 'adress', 'cep')  
    search_fields = ('user__username', 'phone', 'adress', 'cep')  
    list_filter = ('user',) 
    ordering = ('user',)  

admin.site.register(Contacts, ContactsAdmin)
