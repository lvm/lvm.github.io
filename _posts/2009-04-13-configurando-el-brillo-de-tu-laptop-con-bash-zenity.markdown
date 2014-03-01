
---
date: 2009-04-13 09:02:00+00:00  
slug: configurando-el-brillo-de-tu-laptop-con-bash-zenity  
title: Configurando el brillo de tu laptop con bash + zenity  
tags:  
- debian-es  
- pasatiempo  

---
  
Hace un rato estaba navegando(?) por internet y me encontre con una aplicacion un tanto copada: [f.lux](http://stereopsis.com/flux/).     
  
  
Esta aplicacion durante la mañana temprano hace que tu pantalla tenga la pantalla lo mas brillante posible, luego durante la tarde a un nivel _decente_, mientras que por la noche esta se pone _casi_ a la mitad de su brillo total; todo esto simulando que la pantalla es como un rayo-virtual-de-luz-solar.     
  
A pesar de que [este programa](http://stereopsis.com/flux/) solamente funcione con Windows y OSX, no teman! (?) como buen programador consciente (?) de la sociedad que utiliza GNU/Linux hice unos scriptcitos que hacen algo _similar_ a f.lux: [screen-bright](http://github.com/lavaramano/code/blob/f5e9861194c69cd8aa14c2a80be77d94d4ae56aa/sh/screen-brightness.tar.gz).   
Que consta de dos simples scripts:     
  
* [screen-bright](http://github.com/lavaramano/code/blob/f5e9861194c69cd8aa14c2a80be77d94d4ae56aa/sh/screen-brightness/screen-bright): El archivo que modifica el brillo dependiendo del horario.     
  
* [screen-bright-conf](http://github.com/lavaramano/code/blob/f5e9861194c69cd8aa14c2a80be77d94d4ae56aa/sh/screen-brightness/screen-bright-conf): El archivo para generar un archivo de configuracion en el $HOME, con los valores que mas nos gusten. **Para que este funcione, necesitan zenity.** Lo hubiera hecho compatible con Kdialog, pero no tengo instalado KDE y no esta en mis planes. **Se aceptan parches para Kdialog**   
  
Pero para ser sincero, el _mismo efecto_ lo pueden lograr ejecutando lo siguiente en cualquier consola:     
  
    % echo -n 80 > /proc/acpi/video/VGA/LCD/brightness  
  
Aunque al mismo tiempo, tengan en cuenta que _/proc/acpi/video/VGA/LCD/brightness_ puede que no exista en su computadora, asi que verifiquen antes de hacerlo ;-)  
