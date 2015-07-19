var express = require('express'),
	conf	= require('./config');


// App
var app = express();
app.get('/', function (req, res) {
  res.send('Hello world\n');
});

app.listen(conf.puerto);
console.log('Servidor corriendo en http://localhost:' + conf.puerto);
