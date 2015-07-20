var mysql = require('mysql'),
	conf  = require('./../config')
/**************************************

Clase de conexion de mysql

***************************************/
Db = function () {
	this.db=conf.db;
	this.usuario=conf.usuario;
	this.contraseña=conf.contraseña;
	this.host=conf.host;
	this.connection=null;
}

Db.prototype.conectar = function() {
	connection = mysql.createConnection({
	  host     : this.host,
	  user     : this.usuariou,
	  password : this.contraseña,
	  database : this.db
	});
	connection.connect();
};
Db.prototype.consulta = function(sql) {
	connection.query(sql, function(err, rows, fields) {
  	if (err) throw err;
  	return rows;
});

Db.prototype.cerrar = function()
{
	connection.end();
}	

};