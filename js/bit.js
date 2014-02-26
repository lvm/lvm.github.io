;(function($) {
  var settings = {route: '#/', path: '_posts/', index: 'index.markdown', source: 'p strong a',};
  var app = Sammy('#content', function() {
    this.get('#/', function(context) {
      context.redirect(settings.route + settings.index);
    });

    this.get(settings.route + ':file', function(context){
      var content = $(context.app.element_selector);
      var md_file = settings.path + this.params['file'];
      content.load(md_file,
                   function(md, st, xhr) {
                     if( st == "error" ){ alert("Something went wrong :C"); }
                     else{ content.html( micromarkdown.parse( md ) ); }
                   });
      $(settings.source).attr('href', md_file);
    });
  });

  $(function() {
    app.run('#/');
  });
})(jQuery);
