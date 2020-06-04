import { Component, OnInit } from '@angular/core';
import {AdminService}from'../services/admin.services';
import { ActivatedRoute, Params } from '@angular/Router';
import { Router } from '@angular/Router';
@Component({
  selector: 'app-libro-alquilado',
  templateUrl: './libro-alquilado.component.html',
  styleUrls: ['./libro-alquilado.component.css']
})
export class LibroAlquiladoComponent implements OnInit {
prestamo;
autor;
iduser;
nombreEs;

  constructor(
    private readonly _AdminService:AdminService,
    private readonly _rutaDatos: ActivatedRoute,
    private _router:Router
  ) { }

  ngOnInit(): void {
    this.iduser = {
      id: this._rutaDatos.snapshot.params.id,  
    };

    this._AdminService
    .metodoGet(`http://localhost:1337/ESTUDIANTE?id=`+this.iduser.id)
    .subscribe((resultadoMetodoGet) => {
    this.nombreEs=(resultadoMetodoGet[0].NOMBRE_ESTUDIANTE)
    console.log(this.nombreEs);
    
    });



    
    this._AdminService
    .metodoGet(`http://localhost:1337/Prestamo?lector_id=`+this.iduser.id)
    .subscribe((resultadoMetodoGet) => {
    this.prestamo=(resultadoMetodoGet)
    });
   
  }
enviarid(datos){
 
this._AdminService
.metodoDelete(`http://localhost:1337/Prestamo?id=`+datos)
.subscribe((resultadoeliminar)=>{
console.log(resultadoeliminar);
alert('LIBRO DEVUELTO')

});


}

regresar(){
this._router.navigate( 
  ['/inicio/'+this.iduser.id]
)
}
}
