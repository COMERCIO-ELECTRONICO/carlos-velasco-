var palabra ='comercio'
var arrayPalabras= palabra.split("")
var Palabra2=""
 
for (var i = arrayPalabras.length-1; i >= 0; i--) {
 Palabra2=Palabra2+arrayPalabras[i]
}
var arrayPalabras2=Palabra2.split(" ")
var Palabra3=""
for (var j = arrayPalabras2.length-1; j >= 0; j--) {
 Palabra3=Palabra3+arrayPalabras2[j]+" "
}
console.log("_______________________________")

console.log("Palabra")
console.log("_______________________________")
console.log(palabra)
console.log("_______________________________")
console.log(" Primera Palabra Invertida")
console.log("_______________________________")
console.log(Palabra2)
console.log("_______________________________")
console.log("Segunda Palabra Invertida ")
console.log("_______________________________")
console.log(Palabra3)
console.log("____________________________________________________________")
console.log("-Primera palabra en mayuscula")
console.log("-La palabra de la mitad en mayuscula")
console.log("\n-Ultima palabra  en mayuscula")
console.log("\n-Sumar todos los punto \n-Sumar todos las comas")

var texto="JSON es un formato de texto sencillo para el intercambio de datos. Se trata de un subconjunto de la notación literal de objetos de JavaScript, aunque, debido a su amplia adopción como alternativa a XML, se considera un formato independiente del lenguaje."

var contadorComas = (texto)=>{
    var cantidadComas=texto.split(",").length-1
    return cantidadComas
}
console.log("La cantidad de comas en el texto es:")
console.log(contadorComas(texto))
var contadorPuntos = (texto)=>{
    var cantidadPuntos=texto.split(".").length-1
    return cantidadPuntos
}
console.log("La cantidad de puntos en el texto es:")
console.log(contadorPuntos(texto))
var mayusculas = (texto)=>{
    var textoArray= texto.split(" ")
    textoArray[0]=textoArray[0].toUpperCase()
    textoArray[textoArray.length-1]=textoArray[textoArray.length-1].toUpperCase()
    textoArray[Math.floor((textoArray.length-1)/2)]=textoArray[Math.floor((textoArray.length-1)/2)].toUpperCase()
    if((textoArray.length-1)%2 != 0){
        textoArray[Math.floor((textoArray.length-1)/2)+1]=textoArray[Math.floor((textoArray.length-1)/2)+1].toUpperCase()

    }
    var texto2=""
    for (var k = 0; k < textoArray.length; k++) {
        texto2=texto2+" "+textoArray[k]
    }
    return texto2
}
console.log("Texto signifivcado de json ")
console.log("___________________________________________________________________________________________________________________________________________________________")
console.log(mayusculas(texto))
console.log("____________________________________________________________________________________________________________________________________________________________")