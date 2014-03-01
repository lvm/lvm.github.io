
---
date: 2007-02-19 02:50:00+00:00  
slug: convirtiendo-de-svg-a-png  
title: convirtiendo de svg a png  
tags:  
- debian-es  

---
  
revisando un paquete de iconos que me baje, encontre este script que crea imagenes en formate png a partir de un archivo en svg.    
lo bueno de este script es que crea en distintos tamaños (como podran ver)    
    
    #!/bin/sh    
    # This script will generate png icons in various resolutions    
    # for people who don't want to use the svg icons.    
    # Requires rsvg (comes with librsvg)    
    for z in 12 24 48 96 192 36 72; do    
    	mkdir ${z}x${z};    
    	mkdir ${z}x${z}/apps;    
    	mkdir ${z}x${z}/devices;    
    	mkdir ${z}x${z}/emblems;    
    	mkdir ${z}x${z}/filesystems;    
    	mkdir ${z}x${z}/mimetypes;    
    done;    
    for x in `find scalable -type f -name *.svg`; do    
    	echo "Doing file $x";    
    	for y in 12 24 48 96 192 36 72; do    
    		rsvg -w $y -h $y $x `echo $x | sed -e s/^scalable/${y}x${y}/ -e s/.svg$/.png/`;    
    	done;    
    done;
    
si usan alguna distro basada en debian, deberian poner en la consola:    
  
    $ sudo aptitude install librsvg2-2 librsvg2-bin librsvg2-common    
  
o    
  
    # aptitude install librsvg2-2 librsvg2-bin librsvg2-common    
    
depende el caso (?)  
