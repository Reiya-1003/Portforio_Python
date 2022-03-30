from rest_framework import generics,permissions

from .models import Post
from .permissions import IsAuthorOrReadOnly # 追加
from .serializers import PostSerializer


# ListCreateAPIView -> read-write endpoint
class PostList(generics.ListCreateAPIView):
    permission_classes = (permissions.IsAuthenticated,) # 追記
    queryset = Post.objects.all()
    serializer_class = PostSerializer


# RetrieveUpdateDestoryAPIView -> ALlows read, update, delete
class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsAuthorOrReadOnly,) # 追記
    queryset = Post.objects.all()
    serializer_class = PostSerializer
