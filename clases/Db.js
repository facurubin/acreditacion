var mysql = require('mysql'),
	conf  = require('./../config')
/**************************************

Clase de conexion de mysql

***************************************/
Db = function () {
	this.connection=null;
	this.dato=null
	this.connection = mysql.createConnection({
	  host     : conf.host,
	  user     : conf.usuario,
	  password : conf.contraseña,
	  database : conf.db
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


module.exports=Db;