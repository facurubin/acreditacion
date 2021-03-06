/**  
  Clase Inscripo.
**/
Inscripo = function (pDni,pNom,pApe) 
{
    this.nombre=this.validar_nya(pNom);
    this.apellido=this.validar_nya(pApe);
    this.dni=this.validar_dni(pDni);
    this.valido=false;
}
  
Inscripo.prototype.validar_dni = function(pDni)
{
    
    var tem = sin_puntos(pDni);

    tem=this.validar(/^[0-9]{8}$/,tem);
    
    return tem;
}  

Inscripo.prototype.validar_nya = function(pDato)
{
    
    var tem = minusculas(pDato);

    tem=this.validar(/^[a-z]{3,10}$/,tem);
    
    return tem;
}

Inscripo.prototype.validar = function(formato,campo)
{
  if ((campo.match(formato)) && (campo.value!='')) {
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
 
var minusculas= function(pDato)
  {
    return pDato.toLowerCase();
  } 

module.exports = Inscripo;
