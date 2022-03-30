import uuid
from django.db import models
from django.contrib.auth import get_user_model
User = get_user_model()


class Post(models.Model):
    # 記事ID(PRIMARY KEY)
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    

    def __str__(self):
        return self.title
