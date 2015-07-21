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
    Rutas Api 
***************************/
//Datos de prueba
var prueba = require('./datos_de_prueba');

//Todas los inscriptos
app.get('/api/v1/inscriptos', function(req, res) {
  res.json(prueba.inscriptos);
});

//Todas las universiades
app.get('/api/v1/universidades', function(req, res) {
  res.json(prueba.universidades);
});

//Todas las localidades
app.get('/api/v1/localidades', function(req, res) {
  res.json(prueba.localidades);
});

/**************************
//Probando mysql

 db = new Db(conf);
db.consulta('SHOW tables;',function(res) {
	console.log(res);
});
***************************/

app.listen(process.env.PORT || conf.puerto);
console.log('Servidor corriendo en http://localhost:' + conf.puerto);

