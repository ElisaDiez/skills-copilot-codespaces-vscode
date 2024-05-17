// Create web server
// Run on terminal: node comments.js
// Open browser: http://localhost:3000

var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');

var comments = [];

var server = http.createServer(function(req, res) {
  var url_parts = url.parse(req.url);

  if (url_parts.pathname === '/') {
    fs.readFile('./comments.html', function(err, data) {
      res.end(data);
    });
  } else if (url_parts.pathname === '/comments'
