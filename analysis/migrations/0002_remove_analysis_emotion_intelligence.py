# Generated by Django 4.1.4 on 2023-05-15 07:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('analysis', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='analysis',
            name='emotion_intelligence',
        ),
    ]
