
---
date: 2009-03-18 22:51:00+00:00  
slug: cifrando-claves-en-mutt-con-gpg-para-el-paranoico-practico  
title: Cifrando claves en mutt con gpg, para el paranoico practico  
tags:  
- debian-es  
- guia  
- pasatiempo  

---
  
Algunos de los que me conocen saben que suelo tener manias un tanto paranoides con respecto a cosas que considero *importantes*, una de ellas son mis claves de los correos electronicos.    
Por lo que desde hace un tiempo puse en practica una manera de poder tener mis claves en el archivo .muttrc y al mismo tiempo cifradas, ya que si bien las podria escribir cada vez que abro mutt, algunas son un poco mas largas de lo que realmente me gustaria escribir para leer los mails :-)    
La solucion a esto es bastante simple: solamente necesitamos (obviamente) mutt, gpg y bash.    
  
Para empezar, ademas de ya tener configurado nuestro .muttrc, debemos crear un archivo aparte donde se guardaran las claves de mail, por ej:    
  
    % touch .muttrc.pwd    
  
Y en ese archivo, deberiamos agregar las claves de nuestras cuentas con el siguiente formato:    
  
    export CUENTA1_PWD=superclavesecreta    
  
para luego cifrarlo con gpg:    
  
    % gpg --encrypt .muttrc.pwd -r yo@servidor.com.ar    
  
quizas nos pida el id de la persona que deberia poder verla, y ya que como solamente nosotros deberiamos verla hay que ingresar el nuestro ;-) (un tanto obvio, pero..)    
Ahora hay editar el archivo .muttrc, que en caso de usar imap como yo, la linea deberia verse algo similar a esto:    
  
    mailboxes imaps://yo@mail.servidor.com.ar:993/    
    account-hook imaps://yo@mail.servidor.com.ar:993/ "set imap_user=yo@servidor.com.ar imap_pass=superclavesecreta from='yo@servidor.com'"    
  
Y simplemente editamos la parte de *imap_pass*, con lo que deberia quedar asi:    
  
    account-hook imaps://yo@mail.servidor.com.ar:993/ "set imap_user=yo@servidor.com.ar imap_pass=$CUENTA1_PWD from='yo@servidor.com'"    
  
Y con eso, basicamente, ya estaria todo configurado.    
Pero para que esto realmente funcione, deberiamos ejecutar lo siguiente (o hacer un scriptcito en bash) cada vez que ejecutemos al cliente de mail:    
  
    % p=$(gpg --decrypt ~/.muttrc.pwd)    
    % eval "$p"    
    % exec mutt "$@"    
  
y al arrancar mutt, este nos pedira que ingresemos nuestra clave GPG para poder decifrar el archivo con las claves, el resto lo hace solo :-)    
  
Y listo, con estos simples pasos tenemos a nuestro mutt configurado con claves y todo; que aunque si bien no es lo mas seguro que hay (ya que quedan datos en memoria y un poco de magia negra por aqui y por alla (?)), es mucho mas seguro que tener las claves en texto plano ;-)  
