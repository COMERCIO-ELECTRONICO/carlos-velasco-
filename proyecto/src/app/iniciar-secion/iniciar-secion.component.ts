import { Component, OnInit, ɵConsole } from '@angular/core';
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
  carrera1;
  idperf;
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
    this.carrera1=(resultadoMetodoGet)
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
  .metodoPost('http://localhost:1337/Perfil',{
  USUARIO:this.Usuario,
    CONTRASENA:this.Contrasena

  })
  .subscribe((resultadoperfil:any) => { 
this.idperf=resultadoperfil.id
console.log(this.idperf)
    this._RegistroService
    .metodoPost('http://localhost:1337/Estudiante',{
     CI_ESTUDIANTE:this.Cedula,
      NOMBRE_ESTUDIANTE:this.Nombre,
     DIRECCION_ESTUDIANTE:this.Direccion,
      EDAD_ESTUDIANTE:this.Edad,
      carrera_id:this.selected,
      perfil_id:this.idperf

  
    })
    .subscribe((resultadoPost:any)=>{ 
      alert('REGISTRO EXITOSO')
      this._Router.navigate(
        ['/login']
        )
console.log(resultadoPost)
    })
  });
  
  
}
   
  }

  camposelec(event){
    console.log(this.selected)
console.log(event)
  }
}
