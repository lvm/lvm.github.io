
---
date: 2007-08-24 03:43:00+00:00  
slug: ibook-nueva  
title: ibook "nueva"  
tags:  
- debian-es  
- ppc  

---
  
Hara.. menos de una semana me compre una ibook g3 (de las New World), porque estaba con ganas de comprar una maquinita asi pequenia para llevar a todos lados ya que ultimamente estoy poco tiempo en mi casa, y la otra laptop que tengo.. es un poco "pesada" (?). Estaba en caprichoso, digamos.    
    
La cosa es que empece a revisar que era lo mas economico, pero rendidor, con pantalla de 12 pulgadas,  la mayoria de las pc eran una cagada: o muy caras o muy echas mierda. Hasta que me acorde de las ibook, empece revisando las g4 y se iban un poco de presupuesto, ni en pedo pagaria 2k u$s por una ibook g4, pongo unos pesos mas y me compro una laptop-pc con mas onda.    
    
Todo eso, hasta que revise las g3, me fije si no habia mucho drama para instalarles un gnu/linux, y como todo iba ok, me la compre. En si la maquina no es lo *mas* rapido que hay, pero para escribir codigo, revisar la net, jugar algunos jueguitos (el [quake 3](http://ioquake3.org/?page=get) va como loco), esta mas que excelente.    
    
Mac OS X: MUY bonito, pero.. tenia instalado al os x 10.3, y la mayoria de los proggies funcionan con 10.4, no pensaba upgradear, ni buscar al cd. asi que nada. use eso un par (2 dias, ni uno mas.).    
Pero en si, es muy sencillo, de hecho a veces me quedaba la duda de si realmente habia hecho la accion o si faltaba algo mas, digamos. para instalar algo se arrastra el archivo al directorio "Applications". fin. Bueh, quizas no haya descubierto nada, pero yo que nunca lo habia usado a ese OS, me quede maravillado (!?).    
    
Ahora vamos a lo bueno, habiendo bajado la noche anterior a la iso de Debian Etch PPC, moria de ganas de instalarlo, despues de buscar un poco por ahi, preguntar un poco por alla y recordar que no tengo que pagar nada porque es libre (gracias rms) frente a los proggies de os x que son pagos, me termine de sacar el 'miedo' y vole a la goma al OS X por el amigable Debian.    
Resumiendo, funciono *todo* de una, salvo el sonido que para hacerlo funcar tuve que poner **modprobe snd-powermac** [1] para ver si andaba bien, y como lo hizo solamente me quedo hacer **echo snd-powermac >> /etc/modules**, bootear y ser feliz. Lo magico de todo esto es que tengo aceleracion 3d con los drivers open source de ATI. (la placa es una ATI Radeon Mobility 7500):    
    
    
    
  
  
> mauro@iterminal:~$ lspci    
0000:00:0b.0 Host bridge: Apple Computer Inc. UniNorth/Pangea AGP    
0000:00:10.0 VGA compatible controller: ATI Technologies Inc Radeon Mobility M7 LW [Radeon Mobility 7500]    
0001:10:0b.0 Host bridge: Apple Computer Inc. UniNorth/Pangea PCI    
0001:10:17.0 Class ff00: Apple Computer Inc. KeyLargo/Pangea Mac I/O    
0001:10:18.0 USB Controller: Apple Computer Inc. KeyLargo/Pangea USB    
0001:10:19.0 USB Controller: Apple Computer Inc. KeyLargo/Pangea USB    
0002:20:0b.0 Host bridge: Apple Computer Inc. UniNorth/Pangea Internal PCI    
0002:20:0e.0 FireWire (IEEE 1394): Apple Computer Inc. UniNorth/Pangea FireWire    
0002:20:0f.0 Ethernet controller: Apple Computer Inc. UniNorth/Pangea GMAC (Sun GEM)    
mauro@iterminal:~$ glxinfo | grep rendering    
direct rendering: Yes  
  
   
    
**Buenisimo.**    
    
Lo malo de estar en ppc, es que es casi como estar en 64bits, algunas cosas no funcionan o no estan empaquetadas, con la diferencia que en ppc funcionan menos cosas que en 64bits; de todas formas la mayoria (de programitas) funciona(n).    
Asi que tendre que ponerme en campania y ponerme a ver si empiezo a empaquetar alguna cosita para ppc ;P    
    
Ahora una simpatica fotito y cierro el post (?)    
    
[![Ibook g3 con debian](http://terminaldelmal.files.wordpress.com/2007/08/hehe_img_0063.thumbnail.jpg)](http://lusers.com.ar/log/wp-content/uploads/2007/08/hehe_img_0063.jpg)    
    
Si, lo se. soy un pesimo fotografo.    
    
    
[1] [http://www.mail-archive.com/debian-powerpc@lists.debian.org/msg58616.html](http://www.mail-archive.com/debian-powerpc@lists.debian.org/msg58616.html)  
