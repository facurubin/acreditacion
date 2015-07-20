var express = require('express'),
	conf	= require('./config'),
	Db      = require('./clases/Db');

var app = express();

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.get('/', function(req, res) {
  res.render('inscripcion')
});

/**************************
Probando mysql
***************************/
var db = new Db();
var datos = db.consulta('SHOW tables;');
debugger;
db.cerrar();
console.log(datos);
/**************************

***************************/

app.listen(process.env.PORT || conf.puerto);
console.log('Servidor corriendo en http://localhost:' + conf.puerto);

