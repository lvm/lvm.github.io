
---
date: 2009-09-20 05:18:00+00:00  
published: false  
slug: for-in-for-each-in-loops-and-json  
title: for( in ), for each ( in ) loops and JSON  
tags:  
- english  
- javascript  
- programadores  

---
  
Inauguring the _english_ side of my log, here's a simple explanation+tip that I wrote a couple of days ago on my [wiki^Wsite](http://lizaur.github.com/jsTips.html)  
  
Besides the each word, there is another difference between these two statements.  
Which in short is that the latter (for each) iterates over the values instead of the names of an object. But being a little more verbose, let me introduce the characters of this new [Jason](http://en.wikipedia.org/wiki/Jason_Vorhees) chapter:  
  
  
  
## The Object  
  
  
  
      
      
        var jason_movies = { one: { name: 'Friday the 13th', year: '1980', survivor: 'Alice' },   
                             two: { name: 'Friday the 13th Part II', year: '1981', survivor: 'Ginny' },   
                             three: { name: 'Friday the 13th Part III', year: '1982', survivor: 'Chris' }  
                             }  
      
  
  
  
  
  
## The "for in" statement  
  
  
In this case, film will be equal to the object's name, so in the first position will be 'one', the second 'two' and so on.  
And since film is a string we can't use it as a regular object or this will simply fail because, in this particular case, there isn't an object called film in the jason_movies object.  
Example:  
  
  
      
      
        for( var film in jason_movies ){  
          alert( "The movie " + jason_movies[film].name. + " was released in "+ jason_movies[film].year +" and the only survivor was "+ jason_movies[film].survivor );  
        }  
      
  
  
      
  
  
  
## The "for each in" statement  
  
  
Meanwhile in this case, film will be equal to the actual object, so in the first position will be equal to { name: [...], year: [...], survivor: [...] } and so on.  
Also, on the other hand, we can use it as a regular object ...because it is one.  
Example:  
  
  
      
      
        for each ( var film in jason_movies ){  
          alert( "The movie " + film.name + " was released in "+ film.year +" and the only survivor was "+ film.survivor );  
        }  
      
