
---
date: 2012-01-06 18:27:16+00:00  
slug: django-gotcha  
title: django gotcha.  
tags:  
- django  
- programadores  
- python  

---
  
Resulta que necesitaba verificar si una variable era mayor a N, pero Django en el "request context" convierte a las variables a string, independiente de si en el views.py era un nro entero.  
Por lo que al querer hacer el checkeo este siempre fallaba, sin embargo hay un peque#o 'workaround': el filtro "add" [0].  
Que hace "add"?  
  
  
> Changed in Django 1.2: The following behavior didn't exist in  
 previous Django versions.  
 This filter will first try to coerce both values to integers.  
 If this fails, it'll attempt to add the values together anyway.  
 This will work on some data types (strings, list, etc.) and  
 fail on others. If it fails, the result will be an empty string.  
  
  
[0] https://docs.djangoproject.com/en/dev/ref/templates/builtins/#add  
  
Ejemplo:  
  
      
      
    #views.py  
    def vista(request):  
      return render_to_response('template.html',{'edad':50,'nombre': 'Peter Seller'})  
      
  
  
  
  
      
    #template.html  
    {# esto no funciona porque "edad" es un str #}  
    {# y no tiene sentido comprar un str con un int (en este caso: 18) #}  
    <p>Hola {{ nombre }}!</p>  
    <p>  
    {% if edad > 18 %}  
     <a href="http://xvideos.com">Ingresar</a>  
    {% else %}  
     <a href="http://disney.com">Ingresar</a>  
    {% endif %}  
    </p>  
    <hr/>  
    {# esto si funciona porque a (str)"edad" lo convertimos a int al sumarle cero :> #}  
    <p>Hola {{ nombre }}!</p>  
    <p>  
    {% if edad|add:"0" > 18 %}  
     <a href="http://xvideos.com">Ingresar</a>  
    {% else %}  
     <a href="http://disney.com">Ingresar</a>  
    {% endif %}  
    </p>  
      
  
  
  
Y basicamente asi es como entramos a ver porno.  
