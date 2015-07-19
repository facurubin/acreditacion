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
});