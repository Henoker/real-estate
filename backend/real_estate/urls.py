from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/v1/auth/", include("djoser.urls")),
    path("api/v1/auth/", include("djoser.urls.jwt")),
] 

admin.site.site_header = "Real Estate Admin"
admin.site.site_title = "Real Estate Admin Portal"
admin.site.index_title="Welcome to Real Estate portal"
