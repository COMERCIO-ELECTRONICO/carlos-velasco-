import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import{AdminService}from'../services/admin.services';
import { Router } from '@angular/Router';
import { ActivatedRoute, Params } from '@angular/Router';
@Component({
  selector: 'app-home ', 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  iduser;
  id;
  NOMUSER;
  constructor(
    private readonly _AdminService:AdminService,
    private readonly _router:Router,
    private rutaDatos: ActivatedRoute
  ) { }
libros:boolean=false;
alquilados:boolean=false;
carrusel:boolean=true;
  ngOnInit(): void {
    this.iduser = {
      id: this.rutaDatos.snapshot.params.id,  
    };
    console.log('user id:')
    this.id=(this.iduser.id)
    console.log(this.id)

    this._AdminService
    .metodoGet(`http://localhost:1337/ESTUDIANTE?id=`+this.iduser.id)
    .subscribe((resultadoMetodoGet) => {
    this.NOMUSER=(resultadoMetodoGet[0].NOMBRE_ESTUDIANTE)
    console.log(this.NOMUSER);
    
    });

  }
 
  libro(){
    
this.libros=true;
this.alquilados=false;
this.carrusel=false;


  }
  alqilados(){
    this.libros=false;
    this.alquilados=true;
    this.carrusel=false;
    this._router.navigate(

      [`/alquilados/`+this.id]
    )
  }
 

}
