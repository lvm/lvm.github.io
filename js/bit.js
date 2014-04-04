;(function($) {
  var settings = {api_url: 'https://api.github.com/',
                  api_search_path: 'search/code?q=',
                  api_search_params: '+in:_posts+extension:markdown+repo:lvm/lvm.github.io',
                  api_index_path: 'repos/lvm/lvm.github.io/contents/_posts',
                  path: '_posts/',
                  md_ext: '.markdown',
                  source: 'p strong a',
                  content: '#content',
                  null: '#null',
                  q: '#q',
                  btn: '#btn',
                  top: 'a[href="#top"]',
                  routes: {root: '#/', index: '#/index/', posts: '#/p/', search: '#/s/', verbose_search: '#/s/verbose/'},
                  };
  var sdmd = new Showdown.converter();

  var app = Sammy(settings.content, function(app) {
    app.helper('index', function(elem, cb){
      var app = this;
      var can_do_cb = typeof(cb) === "function" ? 1:0;
      if( q.length<1 ){ return; }
      $.getJSON(settings.api_url + settings.api_index_path)
       .done(function(json) {
           json = json.reverse() // this way we obtain the post list in DESC order.
           if( json.length > 0 ){
             for(var i=0;i<json.length;i++){
               if( can_do_cb ){
                 cb(elem, json[i].path, true);
               }
             }
           }
       })
       .fail(function(jqxhr, textStatus, error) {
               alert("Something went wrong :C \n" + textStatus + ": "+ error);
             });
    });

    app.helper('query_github', function(q, elem, cb){
      var app = this;
      var can_do_cb = typeof(cb) === "function" ? 1:0;
      if( q.length<1 ){ return; }
      $.getJSON(settings.api_url + settings.api_search_path + q +
                settings.api_search_params + '&callback=?')
       .done(function(json) {
         if( json.meta.status == 200 ){
           if( json.data.items.length > 0 ){
             for(var i=0;i<json.data.items.length;i++){
               if( can_do_cb ){
                cb(elem, json.data.items[i].path, true);
               }
             }
           }
         }
       })
       .fail(function(jqxhr, textStatus, error) {
               alert("Something went wrong :C \n" + textStatus + ": "+ error);
             });
    });

    app.helper('parse_markdown', function(elem, md_path){
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
    });

    app.helper('post_list', function(elem, md_path){
      var post_path = settings.routes.posts + md_path.replace(settings.path, '');
      var post_name = md_path.replace(settings.path, '').replace(settings.md_ext, '');
      elem.append( sdmd.makeHtml('  * ['+ post_name + ']('+ post_path +')') );
    });

    this.get(settings.routes.root, function(context) {
      context.redirect(settings.routes.index);
    });


    this.get(settings.routes.index, function(context){
      $(settings.content).html('');
      this.index($(settings.content), this.post_list);
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
      this.query_github(q, $(settings.content), this.post_list);
    });

    this.get(settings.routes.verbose_search + ':q', function(context){
      var q = this.params['q'];
      $(settings.content).html('');
      $(settings.q).val(q);
      this.query_github(q, $(settings.content), this.parse_markdown);
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
