
/**  
  Clase Inscripo.
**/
Inscripo = function (pDni,pNom,pApe) {
    this.nombre=pNom;
    this.apellido=pApe;
    this.dni=this.validar_dni(pDni);
    this.valido=false;
  }
  
  Inscripo.prototype.validar_dni = function(pDni)
  {
    var tem = this.validar(/[0-9]{8}/,sin_puntos(pDni));
    if(tem!=false)
      return tem
  }  

  Inscripo.prototype.validar = function(RegExPattern,campo)
  {
    if ((campo.match(RegExPattern)) && (campo.value!='')) {
        this.valido=true;
        return campo; 
    } else {
        this.valido=false;     
        return false;
    } 
  }


/**  
  Metodos Privados
**/
var sin_puntos = function(pDni)
  {
    // Saca los puntos
    return pDni.replace(/[\.]/g,'');
  }
 


  
module.exports = Inscripo;
