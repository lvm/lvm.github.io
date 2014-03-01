
---
date: 2008-08-05 05:29:00+00:00  
slug: custom-tags-en-django  
title: custom tags en django  
tags:  
- debian-es  
- guia  
- programadores  
- python  

---
  
Luego de combatir durante un rato largo y encontrar poca documentacion los custom tags en django, paso a escribir un resumen de **como crearlos**:    
    
Antes que nada los _custom tags_ son una suerte de funciones que aplicamos a las variables que queremos imprimir en los templates    
Ej en PHP:    
  
  
>    
strtoupper($variable);    
  
  
   
    
Ej en Django:    
  
  
>    
{{ variable|upper }}    
  
  
   
    
Se entendio la idea? Continuemos    
    
Digamos que tenemos la aplicacion "contenido" la cual vendria a ser una suerte de tabla de un blog.    
Y el tree se veria algo asi:    
  
  
>    
  
>       
>         
>     /djangoapp    
>      __init__.py    
>      settings.py    
>      urls.py    
>      manage.py    
>      templates/    
>        base.html    
>      contenido/    
>        __init__.py    
>        models.py    
>        views.py    
>       
>   
>    
  
  
   
    
    
En el archivo templates/base.html tenemos todo lo que vamos a mostrar, que podria verse de la siguiente manera:    
  
  
>    
{{ titulo }}    
{{ texto }}    
  
  
   
Que al intentar visualizarlo, veremos algo asi:    
  
  
>    
este es el titulo    
este es el texto    
  
  
   
    
Cuando en realidad, lo que queremos es que el resultado final sea el siguiente:    
  
  
>    
<h1>este es el titulo</h1>    
<p>este es el texto</p>    
  
  
   
    
_**Nota:** si bien podriamos escribir los _condenados_ tags HTML, vamos a hacer que se auto-escriban como un custom tag._    
    
Bien, para lograr esto primero debemos crear un directorio llamado 'templatetags' **dentro** de nuestra aplicacion 'contenido' y dentro del nuevo directorio, creamos dos archivos mas:    
* __init__.py : Este archivo lo debemos crear para que el directorio funcione como un modulo y podamos utilizarlo.    
* custom_tags.py : Aca vamos a escribir nuestros tags.    
    
Luego de haber hecho esto, el tree de nuestra _djangoapp_ deberia ser algo similar a esto:    
  
  
>    
  
>       
>         
>     /djangoapp    
>      __init__.py    
>      settings.py    
>      urls.py    
>      manage.py    
>      templates/    
>        base.html    
>      contenido/    
>        __init__.py    
>        models.py    
>        views.py    
>        template    
>          __init__.py    
>          custom_tags.py    
>       
>   
>    
  
  
   
    
    
Escribimos los custom tags en el archivo custom_tags.py:    
  
  
>    
  
>       
>         
>     from django import template    
>     register = template.Library()    
>         
>     @register.filter    
>     def str_to_h1(s):    
>         return u'<h1>%s</h1>' % s    
>         
>     @register.filter    
>     def str_to_p(s):    
>         return u'<p>%s</p>' % s    
>       
>   
>    
  
  
   
    
Ahora que ya tenemos todo listo, solamente resta _cargar_ nuestros nuevos tags al principio del template (lease 'base.html' o cualquier archivo que utilicemos para mostrar contenido):    
    
  
  
>    
{% load custom_tags %}    
    
{{ titulo|str_to_h1|safe }}    
{{ texto|str_to_p|safe }}    
  
  
   
    
_**Nota:** El tag 'safe' que agregue es para que Django no escape al HTML._    
    
Ya habiendo realizado todo eso, deberiamos poder visualizar nuestro ejemplito como queriamos al principio.    
    
Por cierto, si por alguna razon no esta funcionando, asegurense de que en la _tupla_ INSTALLED_APPS en el archivo settings.py este incluida la aplicacion a la cual le agregamos los custom tags.    
Ej:    
INSTALLED_APPS = ('djangoapp.contenido',)  
