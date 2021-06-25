from django.db import models
from django.contrib.auth.models import User


class Note(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=512)
    pdf = models.FileField(upload_to="pdf")

    def __str__(self):
        return f'{self.user.username}\'s Notes'
