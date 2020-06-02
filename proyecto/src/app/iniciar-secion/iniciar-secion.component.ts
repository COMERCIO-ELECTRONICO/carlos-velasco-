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
  carrera1='';
  carrera2='';
  selected='';
carreraid;
  constructor(
    private readonly _RegistroService:RegistroService,
    private readonly _Router:Router
  ) { }

  ngOnInit(): void {
    this._RegistroService
    .metodoGet('http://localhost:1337/Carrera')
    .subscribe((resultadoMetodoGet) => {
      console.log('Respuest de Get');
      console.log(resultadoMetodoGet);

    this.carrera1=(resultadoMetodoGet[0].NOMBRE_CARRERA)
    this.carrera2=(resultadoMetodoGet[1].NOMBRE_CARRERA)
    
 
     
   
    });
  }

  registro(){
    this.carreraid===this.selected
    console.log(this.carreraid)
if(this.Nombre ==='' ){
alert('debe llenar los campos')

  }else if(this.Edad === 0){
alert('solo numeros')
}
else{
  
  this._RegistroService
  .metodoPost('http://localhost:1337/Estudiante',{
   CI_ESTUDIANTE:this.Cedula,
    NOMBRE_ESTUDIANTE:this.Nombre,
   DIRECCION_ESTUDIANTE:this.Direccion,
    EDAD_ESTUDIANTE:this.Edad,
    carrera_id:this.carreraid

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
