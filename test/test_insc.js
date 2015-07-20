var expect = require('chai').expect,
    Inscripto = require('../clases/Inscripto');

describe('Deberia validar el parametro Dni',function(){
  
  it('Deberia devolver el dni sin puntos',function(){
    var juan = new Inscripto('34.240.320','Juan','Perez');
    expect(juan.dni).to.equal('34240320');

    var juan = new Inscripto('34.240320','Juan','Perez');
    expect(juan.dni).to.equal('34240320');
  
    var juan = new Inscripto('34240320','Juan','Perez');
    expect(juan.dni).to.equal('34240320');
  
  });

  it('Deberia fallar si el dni es menor a 8 char',
  	function()
  	{
  		var juan = new Inscripto('12.345.678.9','Juan','Perez');
  		expect(juan.dni).to.equal(false);	
  		expect(juan.valido).to.equal(false);					
  	});
});


describe('Deberia validar nombre',function(){
	it('Deberia devolver nombre en minusculas',function(){
		var juan = new Inscripto('12.345.678','JuAn','Perez');
  		expect(juan.nombre).to.equal('juan');	
	});

	it('Deberia devolver false porque el nombre es menor a 3 char',function(){
		var juan = new Inscripto('12.345.678','Ju','Perez');
  		expect(juan.nombre).to.equal(false);	
	});

	it('Deberia devolver false porque el nombre posee numeros',function(){
		var juan = new Inscripto('12.345.678','Ju35f2','Perez');
  		expect(juan.nombre).to.equal(false);	
	});
});