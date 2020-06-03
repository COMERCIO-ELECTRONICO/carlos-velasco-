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
fech=new Date();
iduser;
  constructor(
private readonly _libroservice:AdminService,
private rutaDatos: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._libroservice
    .metodoGet('http://localhost:1337/Libro')
    .subscribe((resultadoMetodoGet:any) => {
    this.libro=(resultadoMetodoGet)
    
    console.log(this.libro);
    this.datos=(resultadoMetodoGet.id)
    console.log(this.datos);
    console.log('prueba');
    resultadoMetodoGet.forEach(element => console.log(element.TITULO));
    console.log(this.fech);
    this.iduser = {
      id: this.rutaDatos.snapshot.params.id,  
    };

    console.log('id---');
    
    console.log(this.iduser.id);
    
    });
  }
  alquilar(){
    this._libroservice
    .metodoPost('http://localhost:1337/Prestamo',{
      FECHA_PRESTAMO:'this.fech',
      FECHA_DEVOLUCION:'no',
      DEVUELTO:	'no',
      lector_id:this.iduser.id,
      prestamo_id:this.libro.id

    }).subscribe(()=>{
alert('LIBRO ALQUILADO')

    })
  }



}
