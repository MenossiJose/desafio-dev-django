# Generated by Django 5.1.2 on 2024-10-30 20:19

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Experience',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('company', models.CharField(max_length=60)),
                ('role', models.CharField(max_length=60)),
                ('description', models.TextField(max_length=500)),
            ],
        ),
    ]
