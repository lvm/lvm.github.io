
---
date: 2008-05-23 04:51:00+00:00  
slug: monitoreando-svn-desde-la-web-con-python  
title: monitoreando svn desde la web con python  
tags:  
- debian-es  
- guia  
- pasatiempo  
- python  

---
  
Por alguna razon estaba viendo la [cuenta de flickr de last.fm](http://flickr.com/photos/lastfm/) y me encontre con [esto](http://flickr.com/photos/lastfm/2493931213/sizes/o/), que si miran la parte izquierda-superior de la imagen, van a ver un monitor en una pared con un fondo azul que dice algo asi:    
    
  
  
>    
*FOTO* [75141] 23 minutes ago    
*nombre* home css    
    
SVN commit    
  
  
   
    
y me parecio algo realmente simpatico tener un visor del ultimo que hizo un commit, asi que puse manos a la obra y salio algo [asi](http://mlizaur.unixpod.com/py/svnwebpy/svnweb.py). Obviamente si queremos algo mas copado y con todos los chiches tenemos a [websvn](http://websvn.tigris.org/), o que tambien se puede hacer en bash y un par de comandos mas, pero webpy me gusto tanto que no me pude resistir (?).    
    
pero bueno, ahora vamos a ver un poco de codigo de pysvn para que se den una idea de lo sencillo que es:    
(copypasta directo de la [guia para programadores](http://pysvn.tigris.org/docs/pysvn_prog_guide.html))    
    
    
**checkout**    
`    
import pysvn    
client = pysvn.Client()    
#checkout de la ultima revision    
client.checkout('http://localhost/example/trunk', './examples/pysvn')    
#checkout de la revision 11    
client.checkout('http://localhost/example/trunk', './examples/pysvn-11', revision=pysvn.Revision(pysvn.opt_revision_kind.number, 11))    
`    
    
**add y commit**    
`    
import pysvn    
client = pysvn.Client()    
# agregamos al archivo    
client.add('./examples/pysvn/foo.txt')    
# realizamos el commit para agregarlo al repositorio    
client.checkin(['./examples/pysvn/foo.txt'], 'Adding a sample file')    
`    
    
**update**    
`    
import pysvn    
client = pysvn.Client()    
client.update('./examples/pysvn')    
`    
    
**revert**    
`    
import pysvn    
client = pysvn.Client()    
client.revert('./examples/pysvn/foo.txt')    
`    
    
estos son algunos, [mas ejemplos](http://pysvn.tigris.org/docs/pysvn_prog_guide.html) pueden verlos directamente [en la guia](http://pysvn.tigris.org/docs/pysvn_prog_ref.html)    
    
pd:    
si chicos, si. son libres de copiar, modificar, jugar, etc, etc, etc con el [codiguito](http://mlizaur.unixpod.com/py/svnwebpy/svnweb.py).    
disfrutenlon  
