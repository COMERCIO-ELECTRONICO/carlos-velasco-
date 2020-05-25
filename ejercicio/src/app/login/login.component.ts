import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // credenciales

  correo = '';
  pass = '';

  valorAutocomplete = '';
  sugerencias = ['carlos', 'cachetes', 'orlando'];
  constructor() {}

  ngOnInit(): void {}

  buscarSugerencia(evento) {
    console.log(evento.query);
    if (evento.query !== '') {
      this.sugerencias = ['carlos', 'cachetes', 'orlando'];
    } else {
      this.sugerencias = ['carlos', 'cachetes', 'orlando'];
    }
    /*this.sugerencias = ['hola'];*/
  }

  ingresar() {
    console.log('password');
    console.log(this.pass);
    console.log('this.correo');
    console.log(this.correo);

    if (this.pass === '1234') {
      alert(this.correo);
    }
  }
}
