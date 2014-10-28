---
date: 2014-10-28 00:00:00+00:00  
slug: 'key-transition'  
title: Key Transition  
tags:  
- internerds  
- debian  
- gpg  
- lazy  

---
  
Despues de varios a~nos, complete el proceso (es decir, junte 2 firmas y firmar un texto que lo notifique) de migrar mi llave de 1024 a una de 4096 (woooooo super secreto (?)).  

Aqui el texto (que tome prestado de [Vincent Bernat](http://vincent.bernat.im/en/blog/2012-gpg-transition-new-key.html)).  
Tambien lo pueden descargar y verificar de la siguiente manera:  

    wget http://lvm.github.io/etc/key-transition.mauro.sig.txt -O- | gpg --verify

    -----BEGIN PGP SIGNED MESSAGE-----  
    Hash: SHA512
      
    I am transitioning GPG keys from an old 1024-bit DSA key to a new
    4096-bit RSA key.  The old key will continue to be valid for some time,
    but I prefer all new correspondance to be encrypted in the new key, and
    will be making all signatures going forward with the new key.
      
    This transition document is signed with both keys to validate the
    transition.
      
    If you have signed my old key, I would appreciate signatures on my new
    key as well, provided that your signing policy permits that without
    reauthenticating me.
      
    The old key, which I am transitional away from, is:
      
        pub   1024D/0x6AB79ED6C8FDF9C1 2007-12-24  
          Key fingerprint = 2B82 A38D 1BA5 847A A74D  6C34 6AB7 9ED6 C8FD F9C1
      
    The new key, to which I am transitioning, is:
      
        pub   4096R/0xF5FC16A5C430C11B 2014-05-05  
          Key fingerprint = A744 6993 3267 5A43 999A  F57D F5FC 16A5 C430 C11B
      
      
      
    To fetch the full new key from a public key server using GnuPG, run:
      
      gpg --keyserver pgp.mit.edu --recv-keys F5FC16A5C430C11B
      
      
    If you have already validated my old key, you can then validate that the
    new key is signed by my old key:
      
      gpg --check-sigs F5FC16A5C430C11B
      
    If you then want to sign my new key, a simple and safe way to do that is
    by using caff (shipped in Debian as part of the "signing-party" package)
    as follows:
      
      caff F5FC16A5C430C11B
      
      
    Please contact me via e-mail at <mauro@krutt.org> if you have any
    questions about this document or this transition.
      
    -----BEGIN PGP SIGNATURE-----
      
    iQIcBAEBCgAGBQJUT+6rAAoJEPX8FqXEMMEb/0gP/iVInguBwKNQU0JYT3zXEdPt
    VwQJKYPrVRuwBQcaMWq77xjWaI2y8+k2QyfX7pzIU8jHrHcGE/27k8+KaRrDCTtX
    3mYYfjcGztihC1OM42Q4lT6wlYsrCadZSBHxMfH/L/YVL9zUPz5W15D9IPkxwCFf
    X79uqSnZoJ/rZrMePRUxitTZDhyBGzxFMTd3GfpjHn30cyvC6042VDgsGWSxIt6I
    e93mm1UtT9GAGyBp2l8UBGgJNPsgQ5CFcdcJDTvolbuLey7Le/NY11pltAjzO+E2
    SP66CNWNMNB0283mxLLr39vtCBwCQ4MDfFNRe4vO39eTcJUBwr8RGJxx9IvgHiqL
    uCbUtT/7wS8zNSjpw+gAguf0zD6/MAerhl20sRrYxISpSGwTS+Vmun1ccVGzghCn
    1SGR0en5EMzyEc41Ar4hC0u/vM0oBe99arhihH+havNy/RcXMfGInSxOsn47Me5M
    yOIwU9Zk4fyolhGSKQEjmOA9nr+lEtzmr7FQVQPqR2QDoKGMHvenhTtleKZflhrn
    pyu8DQ5vlbXMhZqvUl8o8oDrRnNVyTS159F4nSABtaSkjNXyj3lsivOw9ZI2I0xJ
    EOhd+WkNxBGPGuPRwESMT6IARiKMIv6Kkwsx40uCNm2rS3nFLol/YWO0n3TGYx3y
    hdVrwKOh23B0fhTI59o5
    =ZggC
    -----END PGP SIGNATURE-----

