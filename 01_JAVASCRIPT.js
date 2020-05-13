var json = {
  nombre: "Carlos",
  edad: 21,
  fech: new Date("1999-04-02"),
};
json.direccion = "quitumbe";
//console.log(json);
//console.log(json["edad"]);
json.nombre = "Carlos Velasco";
delete json.direccion;
console.log(json);
var json2 = {
  nombre: "Carlos",
  edad: 21,
  fech: new Date("1999-04-02"),
  intereses:{
      hobby:['FUTBOL','PS4'],
      peliculas:[
          {
              nombre:"avengers",
              tipo:"ACCION",
              esBuena:true,
          }
      ],
      familia:[
          {
              nombre:"pap",
              edad:"??"
          },
          {
              nombre:"hermana",
              edad:"??"
          },
      ]
  }
};
console.log(json2)
var jsonString = JSON.stringify(json2)

console.log(jsonString)

var stringJson= JSON.parse(jsonString)
console.log(stringJson)