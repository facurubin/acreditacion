var express = require('express');

// Constants
var PUERTO = 8080;

// App
var app = express();
app.get('/', function (req, res) {
  res.send('Hello world\n');
});

app.listen(PUERTO);
console.log('Servidor corriendo en http://localhost:' + PUERTO);