
/**  
  Clase Inscripo.
**/
Inscripo = function (pDni,pNom,pApe) {
    this.nombre=pNom;
    this.apellido=pApe;
    this.dni=this.validar_dni(pDni);
  }
  
  Inscripo.prototype.validar_dni = function(pDni)
  {
    //pDni=sin_puntos(pDni);  
    return sin_puntos(pDni);
  }  


/************************************
  Inscripo.prototype.validar = function(RegExPattern,campo)
  {
    if ((campo.match(RegExPattern)) && (campo.value!='')) {
        return campo; 
    } else {
        return false;
    } 
  }
*************************************/


/**  
  Metodos Privados
**/
var sin_puntos = function(pDni)
  {
    // Saca los puntos
    return pDni.replace(/[\.]/g,'');
  }
 


  
module.exports = Inscripo;
