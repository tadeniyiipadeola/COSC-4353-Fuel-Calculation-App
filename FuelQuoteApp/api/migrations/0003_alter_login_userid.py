# Generated by Django 4.0.2 on 2022-03-13 20:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_remove_userprofile_zipcope_userprofile_zipcode_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='login',
            name='userID',
            field=models.CharField(default='', max_length=100),
        ),
    ]
