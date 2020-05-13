var json = {
  nombre: "carlos",
  edad: 21,
  fech: new Date("1999-04-02"),
};
json.direccion = "quitumbe";
//console.log(json);
//console.log(json["edad"]);
json.nombre = "carlos Vallejo";
delete json.direccion;
console.log(json);
var json2 = {
  nombre: "carlos",
  edad: 21,
  fech: new Date("1999-04-02"),
  intereses:{
      hobby:['FUTBOL','PS4'],
      peliculas:[
          {
              nombre:"thor",
              tipo:"ACCION",
              esBuena:true,
          }
      ],
      familia:[
          {
              nombre:"papa",
              edad:"??"
          },
          {
              nombre:"hermana",
              edad:"19"
          },
      ]
  }
};
console.log(json2)
var jsonString = JSON.stringify(json2)

console.log(jsonString)

var stringJson= JSON.parse(jsonString)
console.log(stringJson)