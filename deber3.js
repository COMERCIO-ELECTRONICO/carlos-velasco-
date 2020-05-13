

 var nombreUsuario={nombre:'carlos',edad:21,fechaNaci: new Date(1998,09,12),telefono:"88888885841"}
 function usuarioExiste(arreglo,nombreUsuario,error,insertarUsuario){
     for (var index = 0; index < arreglo.length; index++) {
         if(arreglo[index].nombre===nombreUsuario.nombre){
             return error()
         }    
     }
     insertarUsuario(arreglo,nombreUsuario) 
 }
 function error(){
     console.error("El usuario ya existe")
 }
 function insertarUsuario(arreglo,nombreUsuario){
 arreglo.push(nombreUsuario)
 console.log(arreglo)
 console.info("El usuario se creo correctamente")
 }
 usuarioExiste(arreglo,nombreUsuario,error,insertarUsuario)

 var nombreUsuario={nombre:'carlos',edad:21,fechaNaci: new Date(1998,09,12),telefono:"88888885841"}
 var nuevosDatos={nombre:'juan',edad:21,fechaNaci: new Date(1999,02,04),telefono:"012345678765"}
 function consulta(arreglo,nombreUsuario,nuevosDatos,error,editar){
     for (var index = 0; index < arreglo.length; index++) {
         if(arreglo[index].nombre===nombreUsuario.nombre){
             return editar(arreglo,index,nuevosDatos)
         }    
     }
    error()
 }
 function error(){
     console.error("El usuario no existe")
 }
 function editar(arreglo,index,nuevosDatos){
     arreglo[index]=nuevosDatos
     console.log(arreglo)
     console.log("Datos editados")
 }
 consulta(arreglo,nombreUsuario,nuevosDatos,error,editar)

 function listar(arreglo,imprimir){
     for (let index = 0; index < arreglo.length; index++) {
        imprimir(arreglo[index].nombre)
     }
 }
 function imprimir(nombre){
     console.log(nombre)
 }
 listar(arreglo,imprimir)

/************************************************************************************************************* */
var nombreUsuario={nombre:'carlos',edad:21,fechaNaci: new Date(1998,09,12),telefono:"88888885841"}
 function consulta(arreglo,nombreUsuario,error,eliminar){
     for (var index = 0; index < arreglo.length; index++) {
         if(arreglo[index].nombre===nombreUsuario.nombre){
             return eliminar(arreglo,index,)
         }    
     }
    error()
 }
 function error(){
     console.error("El usuario no existe")
 }
 function eliminar(arreglo,index){
  for (let i = index; i < arreglo.length-1; i++) {
      arreglo[i]=arreglo[i+1]
  }
     console.log(arreglo)
     console.log("Datos eliminados")
 }
 consulta(arreglo,nombreUsuario,error,eliminar)