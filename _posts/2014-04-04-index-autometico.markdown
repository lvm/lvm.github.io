---
  
date: 2014-04-04 05:13:00-03:00  
slug: index-automatico  
title: index automatico  
tags:  
- blog  
- pasatiempo  
- api  
- github  
- javascript  
  
---
  

Tal como habia [escrito anteriormente](http://lvm.github.io/#/p/2014-02-26-ahora-en-github.markdown), este blog es 
simplemente un archivo de javascript que consulta la API de Github y luego parsea los archivos markdown para que se 
vean bonitos desde un navegador; cumplia con todo lo que necesitaba: crear posts via web, tenerlo en un repositorio 
para [evitar perder posts](http://lvm.github.io/#/p/2014-02-17-2013.markdown) y crear posts offline, el problema es 
que cada vez que creaba un nuevo post, tenia que editar 2 archivos, el nuevo-post y el index.markdown. Relativamente 
molesto. Pues ya no mas, escribi las 30 y pico de lineas necesarias para que, tambien consultando la API de Github, 
liste los archivos que guardo en el directorio de los posts, y una vez mas tengo un sitio "dinamico". 
