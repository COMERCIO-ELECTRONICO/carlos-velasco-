import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/Router';
import { LoginService } from '../services/login.services';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user ='carlos12';
  pass ='';
  constructor(
    private readonly _loginService: LoginService,
    private readonly _router:Router
  ) { 
    
  }

  ngOnInit(): void {
    
    
  }
  
  ingresar(){

    this._loginService
    .metodoGet('http://localhost:1337/Perfil')
    .subscribe((resultadoMetodoGet) => {
      
      console.log('Respuest de Get');
      console.log(resultadoMetodoGet);
      
    var datos= JSON.stringify(resultadoMetodoGet[0].USUARIO)
 
    console.log('resultados datos')
 
     console.log(datos)
     if( this.user === datos ){
       this._router.navigate['/inicio']
      console.log('iguales')
    }else{
      alert('no iguales')
    }
    });
  }

 

}
