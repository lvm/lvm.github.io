
---
date: 2009-09-20 05:24:00+00:00  
slug: bucles-for-in-for-each-in-y-json  
title: Bucles for ( in ), for each ( in ) y JSON  
tags:  
- javascript  
- programadores  

---
  
Ademas de la palabra _each_, hay otra diferencia entre estos dos statements.  
Que en resumen es que el ultimo (for each) itera sobre los valores y no sobre los nombres de un objecto. Pero siendo un poco mas _verbose_, dejenme presentarles a los personajes de este nuevo capitulo de [Jason](http://en.wikipedia.org/wiki/Jason_Vorhees):  
  
  
  
## El Objeto  
  
  
  
      
      
        var jason_movies = { one: { name: 'Friday the 13th', year: '1980', survivor: 'Alice' },   
                             two: { name: 'Friday the 13th Part II', year: '1981', survivor: 'Ginny' },   
                             three: { name: 'Friday the 13th Part III', year: '1982', survivor: 'Chris' }  
                             }  
      
  
  
  
  
  
## El statement "for in"  
  
  
En este caso, _film_ sera igual al nombre del objeto en cuestion, por lo tanto en la primer posicion sera 'one', en la segunda 'two' y asi.  
Teniendo en cuenta que _film_ es un string, no lo podemos utilizar como un objeto, de lo contrario simplemente fallaria ya que, en este caso en particular, no hay un objeto llamado _film_ dentro de _json_movies_  
Ejemplo:  
  
      
      
        for( var film in jason_movies ){  
          alert( "The movie " + jason_movies[film].name. + " was released in "+ jason_movies[film].year +" and the only survivor was "+ jason_movies[film].survivor );  
        }  
      
  
  
  
  
  
## El statement "for each in"  
  
  
Mientras tanto, en este caso _film_ sera igual al objeto en cuestion, por lo que este valdra _{ name: [...], year: [...], survivor: [...] }_ en cada posicion.  
Asi tambien, por el otro lado, si podemos utilizarlo como un objeto ...basicamente porque es uno.  
Ejemplo:  
  
      
      
        for each ( var film in jason_movies ){  
          alert( "The movie " + film.name + " was released in "+ film.year +" and the only survivor was "+ film.survivor );  
        }  
      
