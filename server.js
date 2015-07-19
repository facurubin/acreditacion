var express = require('express'),
	conf	= require('./config');

var app = express();

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.get('/', function(req, res) {
  res.render('inscripcion')
});


app.listen(process.env.PORT || conf.puerto);
console.log('Servidor corriendo en http://localhost:' + conf.puerto);
