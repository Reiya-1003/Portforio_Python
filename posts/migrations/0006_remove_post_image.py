# Generated by Django 3.1.2 on 2022-03-25 05:32

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0005_post_image'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='image',
        ),
    ]