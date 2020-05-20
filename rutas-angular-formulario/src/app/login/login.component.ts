import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {}
  nombre='';
  apellido='';
  email = '';
  contrasena = '';
  contrasena2 = '';
  ngOnInit(): void {}

  obtenerFormulario(formulario) {
    console.log(formulario);
    if(this.contrasena === this.contrasena2){
      alert(
        'Nombre:'+
        '\n'+formulario.controls.nombre.value+'\n'+
        'Apellido:\n'+
        formulario.controls.apellido.value+'\n'+
        'correo: \n' +
          formulario.controls.email.value+'\n' +
          'password: \n' +
          formulario.controls.contrasena.value
      );
    }else{
      alert('Las contaseñas no coinciden');
    }
    
  }
}
