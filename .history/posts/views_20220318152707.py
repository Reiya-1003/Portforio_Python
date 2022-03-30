from rest_framework import generics

from .models import Post
from .serializers import PostSerializer


# ListCreateAPIView -> read-write endpoint
class PostList(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


# RetrieveUpdateDestoryAPIView -> ALlows read, update, delete
class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
