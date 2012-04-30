var Woosh = require('woosh')
  , director = require('director')
  , request = require('request')
  ;

var urlPrefix = 'http://nodejitsu.com'

var map = {
  'h2': function(node) { node.update('Nawdejeitzuuuu') }
}

var router = new director.http.Router({
  '/': {
    get: function(route) {
      Woosh(__dirname + '/test.html', map).pipe(this.res)
    }
  }
});

require('http').createServer(function(req, res) {
  router.dispatch(req, res, function(err) {
    if (err) {
      request(urlPrefix + req.url).pipe(res);
    }
  });
}).listen(8080)