//podemos tener todo tipo de dato en un arreglo
/*var arregloNumero = [
    1, true,2,3,4,[{a:1}],5,6,[[1,2]],7,8,'as',9
];*/

var arregloNumero = [
    1,2,3,4
];
/*console.log(arregloNumero);

//!!!metodo indezOf -> encuentra el indice de elemento
console.log(arregloNumero.indexOf(4));

//!!!añadir elementos Push -> el valor siempre se agrega al final
console.log(arregloNumero.push(10));
console.log(arregloNumero[2])

//!!! Slice -> divide el vector original , retorna un arreglo
var arregloSlice = arregloNumero.slice(0,2) // trabaja con números positivos y negativos
console.log(arregloSlice)

//!!! splice -> divide el vector original
var arregloSplice = arregloNumero.splice(0,2) // es el inicio '0' para eliminar y que elimine la cantidad '2' 
console.log(arregloSplice)
console.log(arregloNumero)

//!!! Pop => elimina ultimo elemento , retorna un arreglo
console.log(arregloNumero.pop());
console.log(arregloNumero)*/

var arreglo2 = ['carlos', 2, true, {numero:2}];
arreglo2
.forEach(
    function(item, indice, arreglo){
       /* console.log('item: ' + item);
        console.log('item: ' + indice);
        console.log('item: ' + arreglo);*/
    }
)

//!!! map -> retorna una arreglo, muta al arrelgo o lo modifica
/*var arregloMutado = arreglo2
.map(
    (item, valor, arreglo)=>{
        console.log(item)
        return item + 1; 
    }
)

console.log(arregloMutado);*/

//filter => retorna arreglo dependiente de la condición

/*var arregloFilter = arreglo2
.filter(
    (item,valor,arreglo) => {
        return item == 3
    }
)
console.log(arregloFilter)*/

// find => retorn un valor
/*var valorFind = arreglo2
    .find(
        (item, indice, arreglo) => {
            return item === 1
        }
    )
    console.log(valorFind);*/

// every y some
// every verifica si todo los valores cumplen una condicion 
// true, false
// some verifica si almenos uno cumplen una condicion 


/*var operadoresMapyFilter = arreglo2
    .map(
        (item) => {
            return item * 2;
        }
    ).filter(
        (item) => {
            return item == 4
        }
    )



{
    arreglos: {
        uno: [2, 4, 5, 8, 6, 9, 10],
        dos: [
            {valor: 1},
            {valor: 4},
            {valor: 2},
            {valor: 24},
            {valor: 100},
            {valor: 23},
            {valor: 45},
            {valor: 23}
        ],
    }

}*/

var arregloReduce = [ 2,1,11,3,45]

var valorSumaArreglo = arregloReduce
.reduce(
    (acumulador, item, indice, arreglo) => {
        return acumulador + item
    }, 0 //es valor inicial del acumulador
)

console.log(valorSumaArreglo)