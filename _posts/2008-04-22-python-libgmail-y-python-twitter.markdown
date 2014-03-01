
---
date: 2008-04-22 03:19:00+00:00  
slug: python-libgmail-y-python-twitter  
title: python-libgmail y python-twitter  
tags:  
- debian-es  
- pasatiempo  
- python  

---
  
Hoy estoy alegre (?), asi que les voy a tirar dos tips mas que interesantes:    
El primero utilizando [python-libgmail](http://libgmail.sourceforge.net/), que como podran imaginarse hace magia con gmail. Si tienen la suerte (?) de usar debian o sus derivados, podran ver que en _/usr/share/doc/python-libgmail/examples/_ van a encontrar unos cuantos ejemplos ya completos y listos para usar, hackear y re-usar en sus proyectos.    
Pero el que mas me llamo la atencion fue uno que se llama **gcp.py**, el cual es una suerte de scp que copia un archivo y lo adjunta a un mail que quedara en stand-by bajo drafts. Tan simple como eso. Uds sabran encontrarle la utilidad a esto (?).    
    
El segundo es utilizando [python-twitter](http://code.google.com/p/python-twitter/), un modulo demasiado sencillo de utilizar donde con pocas lineas podemos hacer un cliente de twitter. Inclusive ya viene con un cliente para manejar desde la CLI: **tweet**    
Por Ejemplo, queremos tener listados los ultimos _twits_ de nuestros amigos:    
`import twitter    
me = twitter.Api(username='pedro',password='superpassword')    
for f in me.GetFriends():    
   print f.screen_name,': ',f.status.text    
`    
    
Ahora si le queremos agregar la posibilidad de agregar twits:    
`import twitter    
me = twitter.Api(username='pedro',password='superpassword')    
text = raw_input('ingresar el twit: ')    
if len(text) <= 140:    
   me.PostUpdate( text )    
else:    
   print 'debe ser menor a 140 chars :('    
`    
    
Ahora si le queremos agregar la posibilidad de agregar twits:    
`import twitter    
me = twitter.Api(username='pedro',password='superpassword')    
text = raw_input('ingresar el twit: ')    
if len(text) <= 140:    
   me.PostUpdate( text )    
else:    
   print 'debe ser menor a 140 chars :('    
`    
    
voila.    
    
Ambos modulos estan en los repositorios y los pueden encontrar con el nombre que puse en el titlo de la entrada.  
