import { Component, OnInit } from '@angular/core';
import{AdminService }from'../services/admin.services'
import { ActivatedRoute, Params } from '@angular/Router';
@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {
libro;
datos;
fech='05/06/2020';
dev='no';
devueleto='no';
iduser;
id;
idlibro;

  constructor(
private readonly _libroservice:AdminService,
private rutaDatos: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.iduser = {
      id: this.rutaDatos.snapshot.params.id,  
    };
    console.log('user id:')
    this.id=(this.iduser.id)
    console.log(this.id)
   this._libroservice
.metodoGet('http://localhost:1337/libro')
.subscribe((resultadolibro)=>{
  this.libro=(resultadolibro)
})
    
  }
  
  alquilar(datos){ 
   
this.idlibro=(datos)
alert(this.idlibro)
  this._libroservice 
  
  .metodoPost('http://localhost:1337/Prestamo',{
  FECHA_PRESTAMO:this.fech,
  FECHA_DEVOLUCION:this.dev,
  DEVUELTO:this.devueleto ,
  lector_id:this.id,
  prestamo_id:this.idlibro
})
.subscribe((resultadoalquilar)=>{

  alert('LIBRO ALQUILADO ')
 
  console.log(resultadoalquilar);
                  
})

}


}




