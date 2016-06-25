var express = require('express');
var app = express();
var routes = require('./app/routes/index.js');

var path = __dirname + '/index.html';
var PORT= 8080;
var IP = '127.0.0.1';

routes(app);

app.listen(PORT, IP, function() {
    console.log('Server up and listening on Port: ' + PORT);
});
