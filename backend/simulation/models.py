
from django.db import models
class Simulation(models.Model):
    day=models.IntegerField()
    sunlight=models.CharField(max_length=20)
    water=models.CharField(max_length=20)
    growth=models.FloatField()
    health=models.CharField(max_length=50)
