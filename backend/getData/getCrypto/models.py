from django.db import models

# Create your models here.
class Crypto(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=20, decimal_places=3)
    changement = models.DecimalField(max_digits=20, decimal_places=3)
    volume = models.DecimalField(max_digits=20, decimal_places=3)
    market = models.DecimalField(max_digits=20, decimal_places=3)
    
    def __str__(self) -> str:
        return 'id:{}, name:{}, price:{}, changement:{}, volume:{}, market:{}'.format(self.id, self.name, self.price, self.changement, self.volume, self.market)
    


'''
How to reset the table after delete creation etc ... was facing a similar problem in Django 1.10 and none of the above solutions worked for me.

What eventually worked was running this command:

python manage.py migrate --fake myappname zero
This reset all migrations (to the zeroth state)

This followed by :

python manage.py migrate myappname
'''