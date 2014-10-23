var express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require("method-override"),
    engine = require('ejs-locals'),
    app = express(),
    models = require('./models/index');

app.set("view engine", "ejs");
app.engine('ejs', engine);

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(methodOverride("_method"));

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.redirect('/lists');
});

app.get('/lists', function(req, res) {
  
});

app.post('/lists', function(req, res) {

});

app.delete('/lists/:id', function(req, res) {

});

app.get('/lists/:id/todos', function(req, res) {

});

app.post('/lists/:id/todos', function(req, res) {

});

app.put('/todos/:id', function(req, res) {

});

app.delete('/todos/:id', function(req, res) {

});

app.listen(3000);
