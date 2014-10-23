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
  res.send('lists!');
});

app.post('/lists', function(req, res) {
  res.send('list created!');
});

app.delete('/lists/:id', function(req, res) {
  res.send('list deleted!');
});

app.get('/lists/:id/todos', function(req, res) {
  res.send('todo get!');
});

app.post('/lists/:id/todos', function(req, res) {
  res.send('todo post!');
});

app.put('/todos/:id', function(req, res) {
  res.send('todo put!');
});

app.delete('/todos/:id', function(req, res) {
  res.send('todo delete!');
});

app.listen(3000);
