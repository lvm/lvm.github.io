
---
date: 2006-08-15 03:00:00+00:00  
slug: gmail-con-fetchmail-y-mutt  
title: gmail con fetchmail y mutt  
tags:  
- debian-es  

---
  
Bueno, resulta que estaba aburrido, asi que decidi meter mano en el gnulinux de turno (hola ubuntu) e instalarme esos horribles (?) paquetes que corren desde la consola.  
la cuestion es que me puse a investigar en lo del [tio google](http://www.google.com/search?q=fetchmail+gmail) a ver que consejo me daba. en este caso me aconsejo que siga estos caminos:    
    
* [Gmail on Home Linux Box using Postfix and Fetchmail](http://souptonuts.sourceforge.net/postfix_tutorial.html) - el nombre lo dice todo. Texto de junio de este año, por lo cual esta bastante actualizado. (Fetchmail para bajar y Postfix para mandar)    
    
* [Using fetchmail to download emails](http://linuxhelp.blogspot.com/2005/05/using-fetchmail-to-download-emails.html) - nuevamente, el nombre lo dice todo. la diferencia entre este y el anterior esta en que este solamente muesta como quedaria el archivo de configuracion del fetchmail y solamente sirve _para bajar los mails_, despues te arreglas vos como los leeras/mandaras.    
    
* [Configuring your incoming email client for Gmail: fetchmail](http://download.gna.org/hpr/fetchmail/FAQ/gmail-pop-howto.html) - similar al de arriba, pero aca no solo te muestra como configurar al fetchmail(o mostrarte al archivo de configuracion, en realidad), sino que tambien te muestra como configurar al openssl y blablabla.    
    
A decir verdad, el ubuntu configurado masomenos bien (?)  ya viene con openssl y casi todo lo necesario, por lo que en pocas palabras se necesitaria es (segun como yo lo hice)    
    
sudo apt-get install fetchmailconf    
    
despues "$ fetchmailconf" y configurar con los datos posta.    
lo cual daria algo asi (en /~.fetchmailrc)    
    
# Configuration created Mon Aug 14 19:47:03 2006 by fetchmailconf 1.52 $Revision: 4636 $    
set postmaster "TU_USUARIO_EN_LA_MAQUINA"    
set bouncemail    
set no spambounce    
set properties ""    
poll pop.gmail.com with proto POP3 port 995 and options no dns    
user 'TUUSUARIO@gmail.com' there with password 'TUPASSWORD' is 'TUUSUARIO@gmail.com' here ssl    
    
nota: lo del "no dns", segun lei es porque tenes ip dinamica (sinceramente, desconozco las ventajas/desventajas, pero por las dudas, lo meti ya que tengo ip dinamica)    
y bueno. eso.    
    
ahora la cosa esta en que cliente de mail usaremos (en este caso, mutt):    
* [Using mutt with Gmail](http://mogrify.homelinux.org/2006/01/03/using-mutt-with-gmail/) - linda explicacion para que podamos usar al mutt.    
    
* [A Quick Guide to Mutt](http://home.nyc.rr.com/computertaijutsu/mutt.html) - una guia para el mutt, bastante extensa y actualizada.    
    
por lo que despues de haber leido masomenos ambos textos, decidi seguir la sencilla explicacion del primer link y entonces:    
    
cd ~    
touch .muttrc    
gedit .muttrc (o "nano .muttrc", da igual.)    
    
ponemos esto (obvio que sin el bof/eof):    
---beginoffile---    
# mail check options    
set pop_host="pops://TUUSUARIO:TUPASSWORD@pop.gmail.com:995"    
set pop_last    
unset pop_delete    
# mail send options    
set sendmail="~/bin/gmailout"    
# check for new mail on startup    
exec fetch-mail    
---endoffile----    
    
nota: el usuario de gmail gralmente va con el @gmail.com atras, pero aca no. sino te va a tirar un error diciendo que el user/pass son erroneos.    
lo del smtp no lo busque, ni me calente. porque si mando me meto al webmail asi tengo idea de que mande y de que no, ademas de que tengo a los drafts y blablabla.    
    
antes de que me olvide, para que puedan bajar los mails y que los guarde, deberiamos modificar el archivo con nuestro usuario en /var/mail para que podamos escribir, de lo contrario siempre arranca de cero (mala idea)  
    
y ahora si, '$ mutt' y si todo funciono bien, vamos a ver como empiezan a bajar los 1337 mails que tenemos en gmail.    
por cierto, el chmod 777 no me convence del todo, de hecho seguro que esta horrible.    
pero me tiraba 'error: permiso denegado' chmodeando de cualquier forma menos xrwxrwxrw, asi que eh. nose.    
(escucho sugerencias sobre este punto)    
    
bueno.    
si alguien lee este blog, espero que le sirva (si es que no tiene mucha idea o quizas ninguna de como se configura o por donde empezar).    
quizas en algun momento haga otra entrada con lo del smtp, pero por ahora no porque tengo que irme a dormir, sino mañana me cabe.    
    
!hop  
