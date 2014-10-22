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

app.listen(3000);
