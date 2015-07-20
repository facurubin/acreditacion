var mysql = require('mysql'),
	Inscripto = require('./Inscripto');

/**************************************

Clase de conexion de mysql

***************************************/
Db = function (conf) {
	this.connection=null;
	this.dato=null
	this.connection = mysql.createConnection({
	  host     : conf.host || 'localhost',
	  user     : conf.usuario || 'root',
	  password : conf.contraseña|| '',
	  database : conf.db || 'teyet'
	});

	
	this.connection.connect(function(err) {
      if (err) throw err;
   });
}


Db.prototype.consulta = function(sql,callback) 
{
	var datos=null;
	this.connection.query(sql, function(err, rows, fields) 
	{
	  	if (err)throw err;
		callback(rows);
	});
	this.cerrar();
};

Db.prototype.cerrar = function()
{
	this.connection.end();
};	

/************************************
Metodos para relacionados con inscripto
**************************************/

Db.prototype.Agreguar_inscripto = function(p_dni,p_nombre,p_apellido)
{
	db.consulta('',function(res) {
		console.log(res);
	});
};	

Db.prototype.Actualizar_inscripto = function(p_dni,p_nombre,p_apellido)
{
	db.consulta('',function(res) {
		console.log(res);
	});
};


Db.prototype.Eliminar_inscripto = function(p_dni,p_nombre,p_apellido)
{
	db.consulta('',function(res) {
		console.log(res);
	});
};

Db.prototype.Obetener_inscriptos = function(p_dni,p_nombre,p_apellido)
{
	db.consulta('',function(res) {
		console.log(res);
	});
};

module.exports=Db;