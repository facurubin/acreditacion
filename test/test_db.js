var expect = require('chai').expect,
    Db = require('../clases/Db');

describe('Deberia insertar un nuevo inscripto',function() {
	it('',function() {
		var db = new Db();
		db.conectar();
		var datos = db.consulta('SHOW tables;');
		db.cerrar();
		console.log(datos);
	});
})