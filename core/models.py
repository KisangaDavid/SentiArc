from django.db import models

class NewsArticle(models.Model):
    title = models.CharField(max_length=1000)
    author = models.CharField(max_length=1000)
    time = models.CharField(max_length=1000)
    completeLink = models.CharField(max_length=1000)
    imgSource = models.CharField(max_length=1000)

    def __str__(self):
        return self.title

