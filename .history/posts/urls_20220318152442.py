from django.urls import path

from .views import PostList, PostDetail

urlpatterns = [
    path('<str:pk>/', PostDetail.as_view()),
    path('', PostList.as_view()),
]