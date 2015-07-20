var mysql = require('mysql'),
	conf  = require('./../config')
/**************************************

Clase de conexion de mysql

***************************************/
Db = function () {
	this.connection=null;

	this.connection = mysql.createConnection({
	  host     : conf.host,
	  user     : conf.usuario,
	  password : conf.contraseña,
	  database : conf.db
	});

	
	this.connection.connect();
}


Db.prototype.consulta = function(sql) 
{
	var data=this.connection.query(sql, function(err, rows, fields) 
	{
	  	if (err) throw err;
	  	{
	  		return rows;
	  	}
	});
	return data;
};

Db.prototype.cerrar = function()
{
	this.connection.end();
};	


module.exports=Db;