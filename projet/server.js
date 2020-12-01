var express = require('express');
var user_connexion = require("server/user_connexion");
var app = express();

app.get('/api/', function(req, res) {
  user_connexion.test();
  res.send('Hello dqdz !');
});

app.listen(8080);