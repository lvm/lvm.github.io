
---
date: 2007-11-05 13:51:00+00:00  
slug: cambiando-el-horario-desde-el-home  
title: Cambiando el horario desde el home. ( ~/ )  
tags:  
- debian-es  
- guia  

---
  
La cosa era asi, tengo una cuenta en un servidor freeshell, pero este servidor esta no se. en algun pais de por ahi (?) y tiene una zona horaria distinta (-0600) a la de aca (-0300), y como generalmente lo uso para entrar al irc con irssi siempre tenia los horarios 3 hs antes (redundancia++), si hubiera tenido acceso de root o algo que me permitiera modificar el /etc/localtime no hubiera sido mucho problema pero como no er asi, necesitaba otra solucion.    
Googleando un poquito encontre esta solucion que me salvo la vida (?):    
    
    
  
  
>    
1. abrimos al .bashrc    
$ nano ~/.bashrc    
    
2. agregamos la siguiente linea (siendo que vivo en bsas):    
export TZ="/usr/share/zoneinfo/America/Argentina/Buenos Aires"    
    
3. guardamos, cerramos y somos felices :)    
  
  
   
    
de todas formas en wikipedia hay una [lista de todas las zonas horarias](http://en.wikipedia.org/wiki/List_of_zoneinfo_timezones) para poder completar esto y que se ajuste a nuestro horario.    
    
**tip-offtopic:**    
en debian y sus derivadas, a veces hay problemas con el paquete tzdata cuando actualizamos porque tiene problemas con las zonas horarias de 3 niveles (continente/pais/provincia), entonces la solucion es configurarla en una de 2 niveles (continente/pais); pero como hacemos para tener un horario decente y al mismo tiempo que sea el horario en el que vivimos?    
    
a) tenerlo en America/Asuncion que casualmente tiene 2 niveles y esta en un GMT similar al nuestro.    
b) tenerlo en el /etc/localtime con una zona horaria de 2 niveles y en nuestro home (independiente al resto del sistema) en America/Argentina/Buenos Aires.    
    
choose your destiny, para el caso las dos funcionan bien y no tendriamos mas problemas con el tzdata.    
el unico detalle a tener en cuenta seria que cada vez que vayamos a crear un usuario nuevo en nuestro sistema, vamos a tener que configurarle para que use al TZ de nuestro .bashrc (siendo el caso que tenemos configurado el sistema para uno de dos niveles como Asia/Brunei, por ej)    
    
si explique como el orto o tienen dudas, comenten.    
sino fue todo y sean felices.  
