
---
date: 2009-08-05 23:07:00+00:00  
slug: agregando-buscadores-personalizados-al-firefoxiceweasel  
title: Agregando buscadores personalizados al firefox/iceweasel  
tags:  
- debian-es  
- navegadores  
- pasatiempo  

---
  
Hace unas semanas estaba buscando constantemente bugs en el [BTS](http://bugs.debian.org/) de [Debian](http://debian.org), pero me estaba cansando de escribir la direccion todo el tiempo, asi que recorde a [mycroft](http://mycroft.mozdev.org/) que nos permite agregar a partir de un listado, pero no era eso lo que yo queria, sino algo mas sencillo. Ahi fue cuando se me prendio la lamparita y me puse a revisar en _/usr/share/iceweasel/_ donde encontre un directorio bastante obvio: searchplugins. :-)  
Solo basto hacer:  
  
      
     % cat google.xml   
  
  
Para encontrar exactamente lo que necesitaba.  
  
Como se habran dado cuenta, el formato de los buscadores personalizados esta en xml y su armado es bastante sencillo, solamente necesitamos tener los siguientes tags:  
* os:Shortname  
* os:Description  
* os:InputEncoding  
* SearchForm - La URL donde esta el formulario.  
* os:Url - La URL final con nuestra consultra agregada.  
  
Tambien, podemos agregar un iconito para identificarlo utilizando una img de 16x16 (convertida a base64) dentro del tag "os:Image". Por ejemplo, en el directorio searchplugins hay un icono llamado debsearch.png y para obtenerlo en base64, solo hace falta ejecutar:  
  
      
     % base64 debsearch.png   
  
  
Muy sencillo :-)  
  
Sin mas vueltas, aca dejo como se deberia ver para que funcione con el BTS:  
  
      
      
    <SearchPlugin xmlns="http://www.mozilla.org/2006/browser/search/" xmlns:os="http://a9.com/-/spec/opensearch/1.1/">  
      <os:ShortName>deb-BTS</os:ShortName>  
      <os:Description>Debian BTS</os:Description>  
      <os:InputEncoding>ISO-8859-1</os:InputEncoding>  
      <os:Image width="16" height="16">data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAFo9M/3AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAJnKAACZygHjkaQiAAAAB3RJTUUH1gsYEToVv17oJgAAAXpJREFUOMuN0s+LjWEUB/DPvabrR9EYpVFkoWbxFv+ADE2JxSkLUVLKQmo2FvYUKzulqVmQSMpSvck0Slmyms2xYMNCoiaFGsqPzfPk7XZv5rs57/e83+/3OefpASnuGY0UD3odch5fKtk3LF1IMVfJq1K3pZjq42mKY/jWaFelmBx35FoNT7E1xRr0S2Ox0W7CIWi0X7E3xUR1v+4knUxxdNQRcymmhvvdTWdwGyu41mg/d923Uix2+KMUlyrZmOJ0+d5dbyTFUhUc7zgHpW5J8aGu+acz04kU0/iB2SpYTnG4CJZxBhsa7dvukG/8DymejOr3hkR9XMVl/MISPmEHjhTZDdxstP8CivEgHuNco23HTDHAC+zB/ka72i//DuAOpqs5xWSKCyVcikGj/YlT+F7fZw3YhYdFUDGPu432d+GbS92OZ1U0Uer7YujiPq6keFcMMynOYqHRzo/a7/q4m143UsymeF6fzHrQGxO0ExfxEiuN9uO4gL9fqYR9Njj9WAAAAABJRU5ErkJggg==</os:Image>  
      <SearchForm>http://bugs.debian.org/</SearchForm>  
      <os:Url type="text/html" method="GET" template="http://bugs.debian.org/{searchTerms}"></os:Url>  
    </SearchPlugin>  
      
  
  
  
Luego con guardarlo en el directorio antes mencionado o en _~/.mozilla/firefox/[letras raras].default/searchplugins_, deberia funcionar (luego de reiniciar el navegador, obviamente)  
  
Ahora si suelen usar al epiphany, algo similar se puede hacer agregando un _bookmarklet_ con codigo en Javascript con algo similar a esto:  
  
      
      
    javascript:var x=prompt('Ingrese el nombre del paquete o el ID relacionado a un bug.'); if(x!=''||x!=null){window.location.href='http://bugs.debian.org/'+x;}  
      
