from rest_framework import generics

from .models import Post
from .serializers import PostSerializer


# ListCreateAPIView -> read-write endpoint
class PostList(generics.ListCreateAPIView):
    permission_classes = (permissions.IsAuthenticated,) # 追記
    queryset = Post.objects.all()
    serializer_class = PostSerializer


# RetrieveUpdateDestoryAPIView -> ALlows read, update, delete
class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
