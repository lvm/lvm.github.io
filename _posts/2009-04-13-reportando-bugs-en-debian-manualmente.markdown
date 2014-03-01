
---
date: 2009-04-13 09:09:00+00:00  
slug: reportando-bugs-en-debian-manualmente  
title: reportando bugs en Debian, manualmente  
tags:  
- bts  
- debian-es  
- etc  
- pasatiempo  

---
  
Ayer leia el blog de [humitos](http://humitos.wordpress.com/), y habia posteado sobre [su experiencia para reportar bugs en debian](http://humitos.wordpress.com/2009/02/26/reportar-un-bug-en-debian/). Como soy un tipo mas que simpatico (?), le deje un comentario explicando brevemente como podia reportar solamente enviando mails de forma alternativa. Y como me parecio algo interesante para compartir paso a explicarlo nuevamente, pero esta vez tratando de extenderme un poco en que tipo de datos suele usar reportbug.    
  
**Leer antes de continuar**  
  
  
> No voy a explicar como funciona reportbug, sino como reportar alternativamente a esa herramienta.  
Asi mismo, deberian tener una idea del uso del sistema operativo en si para poder utilizar correctamente la informacion que procedere a explicar. Y por sobre todas las cosas, este post es informativo y no esta pensado para que dejen de usar reportbug para reportar por mail directamente. Si la herramienta existe y funciona bien, para que evadirla?  
  
  
  
Gracias :-)  
  
  
A gran escala lo que hace reportbug es preguntarte paso por paso los problemas que tuviste con el programa que supones que tiene un bug, para luego armar un archivo con todos los datos *basicos* del bug.    
Para empezar, solamente necesitamos abrir nuestro cliente de mail favorito y comenzar a redactar un mail a submit@bugs.d.o explicando cual fue el problema que se nos presento en el _Subject_. Esto debe ser breve, despues de todo es el _subject_ del mail solamente :-)    
Una vez que ya hicimos eso, pasamos a escribir el body/cuerpo/mensaje del mail/reporte-de-bug.    
Siguiendo los pasos de reportbug, primero nos preguntaria cual es el programa, luego automaticamente obtendria la version del programa instalado y despues nos preguntaria la severidad del error en cuestion, y para eso tenemos las siguientes opciones:    
  
  
  
  
  
  * critical - cuando el error es completamente destructivo. por ej: borra configuraciones personales.    
  
  
  * grave - cuando el programa se vuelve inusable. por ej: al ejecutarlo *siempre* segmentation fault.    
  
  
  * serious - generalmente se utiliza para indicar que este paquete no es apto para la version estable (de Debian).    
  
  
  * important - similar a 'grave', solo que no sucede todo el tiempo. por ej: arroja segmentation fault si le pasamos un parametro invalido.    
  
  
  * normal - cuando una funcionalidad del programa no hace lo que deberia.    
  
  
  * minor - cuando encontramos un error de tipeo o visual del programa, sin que esto afecte al funcionamiento del programa.    
  
  
  * whishlist - cuando querramos sugerir algo. por ej: el tar.gz original trae ejemplos de uso del programa, pero el paquete de Debian no.    
  
  
  
  
Mas datos se pueden obtener [aca](http://www.debian.org/Bugs/Developer#severities).    
Como el nombre del programa ya lo sabemos (o deberiamos :-P), nos restaria obtener la version del programa, una de las maneras seria ejecutando lo siguiente:    
`$ dpkg -l|grep $DEB`  
  
Y copiar el nro que aparece en la segunda columna.    
Y basicamente con eso ya tenemos un reporte que sera asignado al programa en cuestion, informando al desarrollador.     
Pero eso no es todo, si leemos algun reporte de bug, veremos que luego de la descripcion tambien hay informacion sobre la _politica_ del sistema, la version de Debian, la version del kernel, los _locales_, la shell, las dependencias del programa, los paquetes que dependen del programa (tambien conocidas como _rdepends_, _reverse dependencies_ o _dependencias reversas_) y los paquetes que sugiere o tiene conflictos.    
Si bien toda esa data reportbug la obtiene automaticamente, tambien es posible obtenerla a mano y de manera bastante sencilla:    
  
**obtener la politica del sistema**  
`$ apt-cache policy  `  
  
Quizas quieran saber que significan esos 1000, 900, 500, 100 que aparecen, para entender como funciona/que significa esto, bien pueden leer sobre [apt-pinning](http://wiki.debian.org/AptPinning) o ejecutar `man apt_preferences` donde tambien lo explican de manera sencilla.  
  
**obtener la version de Debian**    
  
    `$ cat /etc/debian_version  `  
    `$ lsb_release -c `  
  
**obtener version del kernel**   
Esta es facil:    
` uname -r  `  
  
**obtener los _locales_ **    
Los locales no son otra cosa mas que el idioma en el que tenemos nuestro sistema, y para obtenerlo no hace falta hacer otra cosa que:    
  
    `$ echo $LANG $LC_TYPE`  
    `$ locale `  
  
lo cual nos deberia devolver algo similar a: "es_AR.UTF-8" o "en_US.utf8"    
  
**obtener la shell**    
  
`$ ls -l /bin/sh `  
  
**obtener las dependencias, sugerencias y conflictos**    
  
`$ apt-cache depends $DEB  `  
  
**obtener las dependencias reversas**    
  
`$ apt-cache rdepends $DEB `   
  
Habiendo juntado toda esta informacion, ya tenemos todo lo necesario para reportar decentemente, pero todavia aca no termina!.  
Asi como estan los campos _package_, _version_, _severity_ tambien estan los _tags_. Como utilizamos los tags? Solamente necesitamos agregar un campo mas debajo de los antes mencionados y antes de la descripcion que diga "Tags". Algunos de los tags disponibles son [estos](http://www.debian.org/Bugs/Developer#tags), y se los suele utilizar para poder filtrar mas facilmente a los bugs, por ejemplo: [bugs irreproducibles](http://bugs.debian.org/cgi-bin/pkgreport.cgi?tag=unreproducible).    
Una vez que entendimos como funciona, procedamos a escribir el mail que nos quedaria algo similar a esto:  
  
`  
  
    Package: *nombre del programa*  
    Version: *version del programa*  
    Severity: *severidad del bug*  
  
    *Descripcion del problema con el programa, tratando de explicarnos y agregando la mayor cantidad posible de informacion sobre el problema.*  
     
    `which *programa*`: /usr/bin/*programa*    
  
    -- System Information:    
     500 http://ftp.us.debian.org testing/non-free Packages    
     500 http://ftp.us.debian.org testing/contrib Packages    
     500 http://ftp.us.debian.org testing/main Packages    
     500 http://security.debian.org testing/updates/main Packages    
          
    Kernel: 2.6.26-1-amd64  
    Locale: es_AR.UTF-8  
    Shell: /bin/sh -> bash  
  
    Dependencies, Recommends, Conflicts:  
     Depends: libc6  
     Depends: libsomething  
     Depends: paquete-extra  
  
    Reverse Dependencies:  
     paquete-bla  
     paquete-ble  
     paquete-bli  
     paquete-blo  
     paquete-blu  
  
`  
  
Ah, y como ultimo tip, para poder reportar con el idioma en ingles (en caso de tenerlo seteado en es_*), deberiamos setear a la variable de entorno $LANG para que tenga el valor por defecto "C", por lo que deberiamos hacer algo como:  
  
`  
    $ LANG_MINE=$LANG; LANG="C"  
    [ reportamos el bug y luego de haber terminado]  
    $ LANG=$LANG_MINE  
`  
  
y voila :-)  
