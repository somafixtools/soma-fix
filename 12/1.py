
from pywebio import *
from pywebio.input import *
from pywebio.output import *
from pywebio import start_server
from pywebio import config

def app():
    put_text("Somafix")
    put_image('https://tatayab.com/cdn-cgi/image/quality=75/media/amasty/shopby/option_images/Somafix.jpg' ,  width='800px',height='400px')


start_server(app , por=34345 , debug=True)
