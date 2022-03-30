from django.urls import path

from rest_framework.routers import SimpleRouter

from .views import PostViewSet

urlpatterns = [
    path('<str:pk>/', PostDetail.as_view()),
    path('', PostList.as_view()),
]