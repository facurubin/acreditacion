var mysql = require('mysql');
/**************************************

Clase de conexion de mysql

***************************************/
Db = function (p_db,p_usuario,p_contraseña,p_host) {
	this.db=p_db;
	this.usuario=p_usuario;
	this.contraseña=p_contraseña;
	this.host=p_host;
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