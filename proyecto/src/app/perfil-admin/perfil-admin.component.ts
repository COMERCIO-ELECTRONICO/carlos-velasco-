import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/Router';
import {AdminService} from '../services/admin.services';
@Component({
  selector: 'app-perfil-admin',
  templateUrl: './perfil-admin.component.html',
  styleUrls: ['./perfil-admin.component.css']
})
export class PerfilAdminComponent implements OnInit {
nomcarrera='';
titulolib='';
editoriarlib='';
arealib='';
  constructor(
    private readonly _AdminServicervice:AdminService,
    private readonly _router:Router
  ) { }

  ngOnInit(): void {
   
  }
  
 

  ingresar(){
    if(this.nomcarrera===''){
      alert('NO A INGRESADO CARRERA')
    }else{
      this._AdminServicervice
      .metodoPost('http://localhost:1337/Carrera',{
        NOMBRE_CARRERA:this.nomcarrera
       })
       .subscribe((resultadoMetodopost) => {
         console.log('Respuest de pos');
         console.log(resultadoMetodopost);
         console.log('datos ingresados');
        
       });
       this._router.navigate(
        alert('CARRERA INGRESADA')
        ['/perfil-admin']
      )
    }
  if(this.titulolib===''&&this.editoriarlib===''&&this.arealib===''){
alert('NO INGRESO LIBRO')
  }else{
    this._AdminServicervice
    .metodoPost('http://localhost:1337/Libro',{
     TITULO:this.titulolib,
     EDITORIAL:this.editoriarlib,
     AREA:this.arealib
    })
    .subscribe((resultadoMetodopost) => {
      console.log('Respuest de pos');
      console.log({resultadoMetodopost});
      console.log('datos ingresados');
     
    });
    this._router.navigate(
      alert('LIBRO INGRESADO')
      ['/perfil-admin']
    )
  }
    
    
  }
}
