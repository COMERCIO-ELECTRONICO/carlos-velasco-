import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/Router';
import { LoginServices } from '../services/login.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // credenciales
   email = '';
   pass = '';


  correo = '';

  seleccionadoValor;

  valorAutocomplete = '';
  arregloResultado = [];
  sugerencias = ['carlos', 'kevin', 'otros'];


  valorSeleecionado;

  constructor(
    private readonly _router: Router,
    private readonly _LoginServices:LoginServices,
    private readonly _localStorage:Storage
  ) {}

  ngOnInit(): void {
    this._LoginServices
    .metodoget('http://localhost:1337/usuario')
    .subscribe((resultadoMetodoGet) => {
      console.log('Respuest de Get');
      console.log(resultadoMetodoGet);
    });

    
  }


  seteoValorSeleccionado(eventoSeleecionado){
    console.log(eventoSeleecionado);
    this.valorSeleecionado = eventoSeleecionado;
  }



  buscarSugerencia(evento) {
    console.log(evento.query);
    if (evento.query !== '') {
      const valorEncontrado = this.sugerencias.find((item) => {
        return item === evento.query;
      });
      console.log(valorEncontrado);
      this.arregloResultado.push(valorEncontrado);
      this.sugerencias = this.arregloResultado;
    } else {
      this.sugerencias = ['carlos', 'kevin', 'otros'];
    }
  }



  ingresar() {
    localStorage
    .setItem(
      'nombre',JSON.stringify({npmbre:'carlos'})
    )
    
    this._LoginServices
    .metodopost(
      'http://localhost:1337/usuario',
      {
        nombre: "prueva de ingreso",
        correo: this.email,
        edad: this.pass,
        soltero: true
      }
      )
    .subscribe(
      (resultadoPost)=>{
        console.log('Respuest de Post');
        console.log(resultadoPost);
      }
    )



    console.log(this.valorAutocomplete);
    if (this.pass === '1234') {
      alert(this.email);
      if (this.valorSeleecionado === 'carlos') {
        alert('es estudiante');



        this._router.navigate(
            ['/estudiante','perfil']
            )
            // localhost:9000/estudiante/perfil
      }
    } else  if (this.pass === '123456') {
      alert(this.email);
      if (this.valorSeleecionado === 'kevin') {
        alert('es profesor');



        this._router.navigate(
            ['/maestro','perfil']
            )
            // localhost:9000/estudiante/perfil
      }
    } 
      
  }
  eliminarRegitroPorId(){
    this._LoginServices
    .metododelete('http://localhost:1337/usuario/1').subscribe(
      (respuestDelete)=>{
        console.log(' repuesta de delete');
        console.log(respuestDelete);
      }
    )
  }


}
