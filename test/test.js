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

  it('Deberia devolver fallar si el dni es menor a 8 char',
  	function()
  	{
  		var juan = new Inscripto('12.345.678.9','Juan','Perez');
  		expect(juan.dni).to.equal(false);	
  		expect(juan.valido).to.equal(false);					
  	});
});