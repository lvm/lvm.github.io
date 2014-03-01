
---
date: 2008-01-15 05:44:00+00:00  
slug: uso-basico-del-gnu-screen  
title: Uso basico del GNU Screen  
tags:  
- debian-es  
- guia  

---
  
Bueno, hace mucho que no escribo nada en este blog asi que paso a copipastear una brevisima explicacion del Screen que escribi hace un tiempin y de yapa unos comanditos / hotkeys basicos para usarlo un poco.    
Obviamente le faltan mil cosas y se podria mejorar un poco mas, pero bueno, abajo de todo hay unos links donde van a encontrar un poco mas de info sobre el screen y eso.    
Que lo disfruten (?)    
    
**Que es GNU Screen?**    
GNU Screen es lo mas cercano a un window manager en texto plano, permitiendote "adjuntar"[1] o "liberar"[2] sesiones de screen.    
Screen es util si por ejemplo:    
* Queremos tener varias terminales abiertas al mismo tiempo local o remotamente, sin la necesidad de "solapas".    
* Queremos correr una aplicacion de fondo y desloggearnos de la computadora, pero que siga corriendo.    
* Evitar el uso(y/o abuso) del mouse, ya que solamente es necesario un teclado.    
* etc. etc etc.    
* etc.    
    
**En que me beneficia el screen? o Como podria utilizarlo?**    
Digamos, nos conectamos via _**ssh_** a una computadora y queres editar tus archivos y al mismo tiempo queres entrar al irc, y tambien leer documentacion online con algun browser de texto plano como el **_links_** o _**w3m_**. Bueno, normalmente hubieramos realizado tres (3) conexiones _**ssh_**; usando al screen solamente realizamos una (1) y podemos realizar las mismas tareas de todas formas.    
Como podemos hacer esto? Facil:    
Nos conectamos via _**ssh_** a un servidor/computadora y tipeamos "**_screen_**", despues de eso ejecutamos al "_**emacs_**"[3] y editamos los archivos necesarios, luego tipeamos "**C-a c**" y abrimos nuevo 'buffer' donde podemos ejecutar al "_**irssi_**" y nos conectamos al irc, repetimos la operacion (**C-a c**) y ejecutamos al "_**links_**" y leemos todo lo que sea necesario.    
Una vez que tenemos los tres (3) buffers abiertos, como hacemos para cambiar de un buffer al otro? Con "**C-a p**" o "**C-a a**" o "**C-a <BACKSPACE>**" nos movemos al buffer anterior y con "**C-a n**"o "**C-a <SPACE>**" nos movemos al siguiente.    
    
Ok, pero digamos que quiero ver la documentacion y seguir editando al archivo al mismo tiempo sin tener que estar cambiando de buffer a cada rato, como hago? "**C-a S**" (S mayuscula) podemos dividir el buffer en dos (2) regiones y con "**C-a :resize**" definimos la cantidad de lineas que va a tener el buffer que tiene al foco. Ahora para movernos entre los buffers lo hacemos con "**C-a <TAB>**"    
Para deshacer la division del buffer lo hacemos con "**C-a :remove**" y solamente tendremos un solo buffer en pantalla (el otro no se cerrara de todas formas)    
Bueno, basicamente con eso ya pueden usar al "**_screen_**" y divertirse un poco ;)    
    
**Momento! todavia hay mas!**    
Digamos que si queremos liberar a la sesion del screen lo hacemos con "**C-a d**", pero si despues queremos volver a la sesion lo hacemos ejecutando (en la misma maquina en la que ejecutamos a la sesion original, sea remota o local) "_**screen -r_**". Si de casualidad hay mas de una sesion de screen corriendo aparecera una lista de sesiones y nosotros debemos elegir a cual queremos conectarnos. Para ver a esta lista alternativamente podemos ejecutar "_**screen -list**_" o "_**screen -ls**_".    
Por Ejemplo:    
  
  
> hostname:~ $ screen -r    
 There are several suitable screens on:    
    9111.pts-1.hostname       (Detached)    
    9089.pts-1.hostname       (Detached)    
hostname:~ $ screen -r 9089.pts-1.hostname  
  
   
_Tip: Como con casi todo en bash, es posible usar a la tecla <TAB>  para autocompletar al nombre de la sesion ;)_    
    
Si por alguna razon queremos conectarnos a la sesion mientras estamos conectados desde otra maquina, lo hacemos mediante "**_screen -x_**"    
Y si queremos organizarnos un poco y ponerles un titulo a cada buffer, lo hacemos (dentro de la sesion de "_**screen**_", obviamente) con "**C-a A**"(A mayuscula)    
    
Info:    
 * **<BACKSPACE>** es la tecla backspace.    
 * **<SPACE>** es la barra espaciadora.    
 * **<TAB>** equivale a la tecla TAB    
 * **C-a** equivale a la tecla Control + a    
 * Buffers vendrian a ser lo mismo que las 'solapas' en las terminales como konsole, gnome-terminal o xfce4-terminal.    
 * Sesiones son las veces que tenemos abierto al screen, si lo ejecutamos tres (3) veces, tendremos... tres (3) sesiones ;)    
    
Links Utiles:    
 * [Sitio de GNU Screen](http://www.gnu.org/software/screen/)    
 * [Wiki de GNU Screen](http://aperiodic.net/screen/)    
 * [Wikipedia en ingles: GNU Screen](http://en.wikipedia.org/wiki/GNU_Screen)    
 * [Pixelbeat.org Screen](http://www.pixelbeat.org/docs/screen/)    
 * [Pixelbeat.org Comandos del Screen](http://www.pixelbeat.org/lkdb/screen.html)    
 * [GNU Screen: an introduction and beginner's tutorial](http://www.kuro5hin.org/story/2004/3/9/16838/14935)    
    
[1] attach    
[2] deattach    
[3] pico, nano, vi, vim, lo que mas les guste.  
