# Generated by Django 4.2.7 on 2023-12-12 07:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("properties", "0002_property_amenities_property_ubication_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="property",
            name="floor_plan",
            field=models.ImageField(
                blank=True, default="/interior_sample.jpg", null=True, upload_to=""
            ),
        ),
    ]