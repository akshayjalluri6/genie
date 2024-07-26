from django.db import models
from django.contrib.auth.models import User

class Question(models.Model):
    text = models.CharField(max_length=255)
    OPTIONS = [
        ('Yes', 'Yes'),
        ('No', 'No'),
        ('1-5', '1-5'),
        ('5-10', '5-10'),
        ('10-20', '10-20'),
        ('20+', '20+'),
    ]
    options = models.CharField(max_length=50, choices=OPTIONS)

    def __str__(self):
        return self.text

class Answer(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    selected_option = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.user.username} - {self.question.text} - {self.selected_option}"
