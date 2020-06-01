import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/Router';
import {  RegistroService} from '../services/registro.services';
@Component({
  selector: 'app-iniciar-secion',
  templateUrl: './iniciar-secion.component.html',
  styleUrls: ['./iniciar-secion.component.css']
})
export class IniciarSecionComponent implements OnInit {
  Nombre='';
  Apellido='';
  Direccion='';
  Cedula:number;
  Usuario='';
  Contrasena='';
  Edad:number;
  constructor(
    private readonly _RegistroService:RegistroService,
    private readonly _Router:Router
  ) { }

  ngOnInit(): void {
  }
  registro(){
if(this.Nombre==='' ){
alert('debe llenar los campos')

  }else if(this.Edad !== 0){
alert('solo numeros')
}
else{
  this._RegistroService
  .metodoPost('http://localhost:1337/Estudiante',{
   CI_ESTUDIANTE:this.Cedula,
    NOMBRE_ESTUDIANTE:this.Nombre,
   DIRECCION_ESTUDIANTE:this.Direccion,
    EDAD_ESTUDIANTE:this.Edad


  })
  .subscribe((resultadoMetodopost) => {
    console.log('Respuest de pos');
    console.log({resultadoMetodopost});
    console.log('datos ingresados');
   
  });
  this._RegistroService
  .metodoPost('http://localhost:1337/Perfil',{
    USUARIO:this.Usuario,
    CONTRASENA:this.Contrasena
  })
  .subscribe((resultadoMetodopost) => {
    console.log('Respuest de pos');
    console.log({resultadoMetodopost});
    console.log('datos ingresados');
   
  });
  
  this._Router.navigate(
    ['/login']
    )
}
   
  }
}
