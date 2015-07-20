var expect = require('chai').expect,
    Db = require('../clases/Db')
    conf = require('../config');

describe('Probando la clase Db',function() {
	it('Deberia mostrar las Tables_in_teyet',function() {
		var db = new Db(conf);
		db.consulta('SHOW tables;',function(res)
			{
				var tables="[ { Tables_in_teyet: 'condiciones_iva' },{ Tables_in_teyet: 'datos_facturacion' },{ Tables_in_teyet: 'estados_inscripcion' },{ Tables_in_teyet: 'formas_pago' },{ Tables_in_teyet: 'inscripciones' },{ Tables_in_teyet: 'original' },{ Tables_in_teyet: 'personas' },{ Tables_in_teyet: 'tipos_inscripcion' } ]";
				expect(res).to.equal(tables);
			});
	});
})