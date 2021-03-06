"""MyPortforioPage URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path
from rest_framework.schemas import get_schema_view # 追記
from django.views.generic import TemplateView # 追記

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/posts/', include('posts.urls')),
    path('api/users/', include('users.urls')),
    path('api-auth/', include('rest_framework.urls')),
    path('api/rest-auth/', include('rest_auth.urls')),
    path('api/rest-auth/registration/', include('rest_auth.registration.urls')),
    path('schema/', get_schema_view( # スキーマ表示の追加
        title="Blogress",
        description="API for all things …"
    ), name='openapi-schema'),
    path('docs/', TemplateView.as_view( # ドキュメント表示の追加
        template_name='swagger-ui.html',
        extra_context={'schema_url':'openapi-schema'}
    ), name='swagger-ui'),
]
