//API -> rest API, conexión entre algunos programas, viene en formato json (frontend con backend), ejem: pokeApi
//Programación funcional -> Nos permite tener funciones como parametros 

/*function programacionFuncional(numero1, ()=>{},l){

}*/

//callback -> es una forma de realizar en secuencia las ejecuciones

/*function primeraFuncion(){
    setTimeout(()=>{ // sirve para realizar un retrazo de ejecución
        console.log('primera')
    },500
    )
}
function segundaFuncion(){
    console.log('2')
}

//primeraFuncion()
//segundaFuncion()

function saluda(nombre, callback){
    console.log('saludo a', nombre)
    callback()
}

function funcionCallback(){
    primeraFuncion()
    segundaFuncion()
    console.log('ya saludé')
}

saluda('Carlos', ()=>{
    console.log('saludaste?')
})*/

/*function saludar(nombre) {
    console.log(`ejecuto saludo a ${nombre}`)
    return nombre
}

function peticionUsuario(nombre, callback){
    callback(nombre)
}

peticionUsuario('Carlos', saludar)
peticionUsuario('Carlos', (saludar)=>{
    console.log(saludar)
})*/

/*var arreglo = []
var nombreNuevo= 'juan'
function anadirNombre(arreglo, nombre, cb){
    arreglo.push(nombre);//el metodo push solo funciona con arreglos
    cb({
        mensaje:'éxito',
        arreglo
    })
}
anadirNombre(arreglo, 'Carlos', (mensaje)=>{
    console.log(mensaje)
})*/

var arregloUsuario= [1,2,3,4,5]

function listarUsuario(arreglo,cb){
    arreglo.forEach(usuario => {
        console.log(usuario)
    });
    cb({
        mensaje:'lista de usuario'
    })
}

listarUsuario(arregloUsuario, (respuestaMensaje)=>{
    console.log(respuestaMensaje)
})

//NULL -> var numero = 0; | esta no tiene nada, ningun valor
// undefine -> var num, numero | no está definida o no existe

// === -> si esque es el mismo contenido o el mismo tipo de dato ->  '1' === 1
// ==  -> verifica si es el mismo contenido                      ->  '1' == 1
//programcaion sincrona -> se ejecuta secuencialmente
//programación asincrona -> esta no se ejecuta secuencialmente

//npm -> es un gestor de paquetes para javascript
// para instalara -> npm install nombrePaquete
// para colocar versión -> npm install nombrePaquete@1.12
// para colocar la ultima versión -> npm install nombrePaquete@lastest