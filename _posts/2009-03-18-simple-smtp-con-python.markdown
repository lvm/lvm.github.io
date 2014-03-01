
---
date: 2009-03-18 22:51:00+00:00  
slug: simple-smtp-con-python  
title: simple SMTP con Python  
tags:  
- debian-es  
- guia  
- python  

---
  
Alguna que otra vez me encontre con el problema de que necesitaba enviar mails    
desde la consola, pero no tenia configurado nada para hacerlo, o porque no    
tenia al fiel mutt a mano para hacerlo [0], entonces me puse a escribir un    
scriptcito sencillo que hiciera esto, de manera que tambien lo pudiera usar    
con cualquier otro scriptcito que necesitara mandar mails sin trabajar    
demasiado para lograrlo:    
  
** BOC **    
  
    import smtplib, ConfigParser    
              
    class SendMail(object):    
        def __init__(self,cfg_file='.smtpyrc'):    
            self.mail_keywords = ['username','password','server','port','domain','from']    
            self.cfg_file = cfg_file    
              
        def ReadConfig(self):    
            mail_key_dict = {}    
            cfg = ConfigParser.ConfigParser()    
            cfg.read(self.cfg_file)    
            for mk in self.mail_keywords:    
                mail_key_dict[mk] = cfg.get('SMTP',mk)    
            return mail_key_dict    
        
        def mailer(self,to,file):    
            cfg = self.ReadConfig()    
            server=smtplib.SMTP(cfg['server'],cfg['port'],cfg['domain'])    
            server.login(cfg['username'],cfg['password'])    
            #server.set_debuglevel(1)    
            message = open(file)    
            server.sendmail(cfg['from'], to, message.readlines())    
            server.quit()    
** EOC **  
  
  
Como veran en el codigo, simplemente utilizo los modulos [smptlib](http://docs.python.org/library/smtplib.html) y [ConfigParser](http://docs.python.org/library/configparser.html) para llevar a cabo esto. Y mientras que smptlib hace *toda* la magia en el script,    
ConfigParser termina siendo de gran ayuda en este caso. En caso de no haber    
utilizado nunca al modulo ConfigParser, este nos ayuda a leer datos de un    
archivo *de configuracion* sin trabajar demasiado, simplemente necesitamos    
tener un archivo con el siguiente formato (en este caso):    
  
    [SMTP]    
    username: *username*    
    password: *password*    
    server: mail.server.com    
    port: 25    
    domain: domain.org    
    from: me@mail.com    
  
Volviendo un poco al codigo...  
Porque en un principio no extendi la clase smtplib y empece directamente    
con "class SendMail(object):"? Basicamente porque no es mi intension    
extender a la clase smtplib, sino usarla y punto :-)    
  
Ahora bien, en el __init__, ya de entrada le digo cuales son las keys que    
tengo en mi *archivo rc* para despues con la funcion *ReadConfig* levantar    
estos datos y luego en la funcion *mailer*, directamente usarlos.    
  
Entonces, una vez que ya guardamos a [este script](http://los.talibanes-del.sl/~mauro/py/smtp.py) y a su [archivo de conf](http://los.talibanes-del.sl/~mauro/py/smtpyrc),    
procedamos a probarlo (obviamente, habiendo los datos del servidor antes ;-P):    
  
    $ python smtp.py askbill@microsoft.com mail_para_bill.txt  
  
Y todo deberia de andar automagicamente :-)    
Por cierto, como podran apreciar la linea comentada que dice "server.debuglevel(1)",  
justamente como su nombre lo indica, nos permite ver los mensajes del servidor  
paso-a-paso [1].  
  
Dudas, consejos, lo que sea, al mail [2]  
  
  
[0] Por ejemplo:    
    echo $(ls) | mutt -s "resultado del ls" mail@servidor.com    
[1] [Mostaza Merlo](http://es.wikipedia.org/wiki/Reinaldo_Merlo) Dixit.    
[2] ver index del wiki.  
