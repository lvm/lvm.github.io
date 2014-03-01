
---
date: 2007-06-12 00:42:00+00:00  
slug: ndiswrapper-y-marvell-tech-ltd-88w8335-pcmcia-wifi-card  
title: ndiswrapper y marvell tech ltd 88w8335 (pcmcia wifi card)  
tags:  
- debian  
- debian-es  
- guia  

---
  
bueno    
logre hacer funcionar a la jodida placa desconocida para todo el mundo en debian lenny.    
y para los ubunteros donde su mundo es todo arcoiris y duendes alegres: tarde menos aca que en ubuntu con 3000 scripts para simplificar el trabajo.    
    
ahora digamos que no puedo postear demasiado, en otro momento postearé.    
un adelanto:    
    
* aptitude install ndiswrapper-*TODOS*    
* ndiswrapper -i driver.inf    
* ndiswrapper -m    
* module-assistant  (ahi cargamos a ndiswrapper y pcmcia que no estan seleccionados)    
* modprobe ndiswrapper    
    
et voila. :)    
    
en otro momento posteo con mas detalle.    
  
Update: mas detalles (?):  
  
Hace un tiempo atras habia hecho un [post](http://terminaldelmal.wordpress.com/2007/06/12/ndiswrapper-y-marvell-tech-ltd-88w8335-pcmcia-wifi-card) donde describi los pasos minimos para hacer funcionar a la placa pcmcia marvell tech ltd 88w8335 en debian testing (lenny)    
    
Habia "prometido" que iba a hacer una descripcion extensa, la cual jamas llego hasta ahora, asi que aca va:    
    
1.    
para arrancar bajamos al ndiswrapper    
  
  
> # aptitude install nsdiwrapper-common ndiswrapper-source    
ndiswrapper-utils-1.9 build-essential linux-headers-$(uname -r)    
wireless-tools  
  
   
    
2.    
  
  
> # module-assisant  
  
   
vamos a select.    
seleccionamos 'ndiswrapper' y lo instalamos (hay una opcion INSTALL)    
    
3. copiamos al directorio con los drivers para windows (en mi caso se    
llaman, mrv8335.inf) a la maquina.    
    
    
4. como root:    
chequeamos que no haya nada instalado    
  
  
> # ndiswrapper -l  
  
   
instalamos al driver    
  
  
> # ndiswrapper -i mrv8335.inf  
  
   
lo agregamos al modprobe    
  
  
> # ndiswrapper -m  
  
   
probamos los modulos    
  
  
> # depmod -a  
  
   
y lo volvemos a poner con modprobe, esto lo hago por desconfiado/costumbre. porque no creo que realmente haga falta ponerlo dos veces...    
# modprobe ndiswrapper    
    
enchufamos la placa y si funciono, la tarjetita deberia aparecer titilando :)    
igualmente probamos:    
  
  
>    
# iwconfig    
lo        no wireless extensions.    
    
eth0      no wireless extensions.    
    
wlan0     IEEE 802.11g  ESSID:off/any    
        Mode:Managed  Channel:0  Access Point: Not-Associated    
        Bit Rate:1 Mb/s   Sensitivity=-200 dBm    
        RTS thr=2346 B   Fragment thr=2346 B    
        Encryption key:off    
        Power Management:off    
        Link Quality:0  Signal level:0  Noise level:0    
        Rx invalid nwid:0  Rx invalid crypt:0  Rx invalid frag:0    
        Tx excessive retries:0  Invalid misc:0   Missed beacon:0  
  
   
    
    
    
si todo esta bien y tuvimos algo parecido a eso    
  
  
> # echo ndiswrapper >> /etc/modules  
  
   
para evitar tener que escribirlo cada vez que reiniciamos.    
    
    
    
Bueno, eso era lo que habia escrito hace un tiempo, espero que les funcione y sino.. comenten.  
