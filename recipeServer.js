var express = require('express');
var app = express();
var routes = require('./app/routes/index.js');
var mongoose = require('mongoose');
var path = __dirname + '/index.html';
var PORT= 8080;
var IP = '127.0.0.1';
bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost:27017/recipeSharejs');

app.use('/controllers', express.static(process.cwd() + '/app/controllers'));
app.use('/common', express.static(process.cwd() + '/app/common'));
app.use('/public', express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));

routes(app);

app.listen(PORT, IP, function() {
    console.log('Server up and listening on Port: ' + PORT);
});
