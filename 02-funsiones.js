//FUNSIONES Y TIPOS DE DATOS PRIMITIVOS

function saludar(){
    return 'hola'
}

saludar()
console.log(saludar())

//funsiones anónimas -> se almacena en una variable
var funsionAnonima = function(){
    return 'función anónima'
}
console.log(funsionAnonima())

//funsion arrow fat
var funcionFlechaGorda = (a,b) => {
    return a + b;
}

console.log(funcionFlechaGorda(2,3));

var json = {
    suma: (a,b) => {
        return a + b;
    }
}

console.log(json.suma(1,2));