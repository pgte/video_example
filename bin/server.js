/*
 *
 * server.js
 * creates an http server and serves the static assets 
 * it also transforms some static content by adding data to it.
 *
 */

var director = require('director'),
    static = require('node-static'),


var routes = {
    '/out': {
      get: get
    };

var router = new director.http.Router(routes);
var file = new static.Server('./public/');
  
require('http').createServer(function(req, res) {
  var found = router.dispatch(req, res);
  if (! found) {
    file.serve(req, res);
  }
}).listen(8080);