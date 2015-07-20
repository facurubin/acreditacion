#Server de acreditacion para evento

#Api rest

###Devueve todos los inscriptos
* Metodo: GET    
* Ruta: /api/v1/inscriptos

###Crea un inscripto
* Metodo: POST  
* Ruta: /api/v1/inscripto/

###Actializa un inscripto por dni
* Metodo: PUT   
* Ruta: /api/v1/inscripto/:dni

###Borra un inscripto por dni
* Metodo: DELETE 
* Ruta: /api/v1/inscripto/:dni


###Inscripto
* dni (8 caracteres 0-9)
* nombre (3 a 10 caracteres a-z)
* apelido (3 a 10 caracteres a-z)
* valido (bandera de validacion)