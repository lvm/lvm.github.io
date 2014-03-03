;(function($) {
  var settings = {'api_url': 'https://api.github.com/search/code?q=',
                  repo: '+repo:lvm/lvm.github.io',
                  path: '_posts/',
                  index: 'index.markdown',
                  md_ext: '.markdown',
                  source: 'p strong a',
                  content: '#content',
                  null:'#null',
                  q: '#q',
                  btn: '#btn',
                  top: 'a[href="#top"]',
                  routes: {root: '#/', posts: '#/p/', search: '#/s/'},
                  };
  var sdmd = new Showdown.converter();

  var app = Sammy(settings.content, function(app) {
    app.helper('query_github', function(q, elem){
      var app = this;
      if( q.length<1 ){ return; }
      $.getJSON(settings.api_url + q + settings.repo + '&callback=?')
       .done(function(json) {
         if( json.meta.status == 200 ){
           if( json.data.items.length > 0 ){
             for(var i=0;i<json.data.items.length;i++){
               app.parse_markdown(elem, json.data.items[i].path, true);
             }
           }
         }
       })
       .fail(function(jqxhr, textStatus, error) {
               alert("Something went wrong :C \n" + textStatus + ": "+ error);
             });
    });

    app.helper('parse_markdown', function(elem, md_path, is_search){
      if( is_search && md_path.indexOf(settings.index) !== -1 ){ return; }
      if( md_path.indexOf(settings.md_ext) !== -1 ){
        var _null = $(settings.null);
        var post_path = settings.routes.posts + md_path.replace(settings.path, '');
        _null.load(md_path,
                  function(md, st, xhr) {
                    if( st == "error" ){ alert("Something went wrong :C"); }
                    else{
                      elem.append( sdmd.makeHtml(md) );
                      elem.append( sdmd.makeHtml('[permalink]('+ post_path +')') );
                      elem.append( sdmd.makeHtml('[source]('+ md_path +')') );
                      _null.html('');
                    }
                  });
       }
    });

    this.get(settings.routes.root, function(context) {
      context.redirect(settings.routes.posts + settings.index);
    });

    this.get(settings.routes.posts + ':file', function(context){
      var content = $(settings.content);
      var md_path = settings.path + this.params['file'];
      $(settings.q).val('');
      $(settings.content).html('');
      this.parse_markdown($(settings.content), md_path);
    });

    this.get(settings.routes.search + ':q', function(context){
      var q = this.params['q'];
      $(settings.content).html('');
      $(settings.q).val(q);
      this.query_github(q, $(settings.content));
    });


  });

  $(function() {
    // FIXME.
    var redirect = function(href){ window.location.href = href };

    $(settings.btn).on('click', function(){
      redirect(settings.routes.search + $(settings.q).val());
    });

    $(settings.q).on('keypress', function(e){
      var code = e.keyCode || e.which;
      if(code == 13) {
        e.preventDefault();
        if( $(settings.q).val().length<1 ){ redirect(settings.routes.root); }
        else{ $(settings.btn).trigger('click'); }
      }
    });

    $(settings.top).on('click', function(e){
      e.preventDefault();
      $("html, body").animate({scrollTop:0}, 500);
    });

    app.run('#/');
  });
})(jQuery);
