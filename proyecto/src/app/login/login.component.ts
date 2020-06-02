import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/Router';
import { LoginService } from '../services/login.services';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user ='';
  pass ='';
  datos='';
  contrasena='';
  adminuser='';
  adminpass='';
  constructor(
    private readonly _loginService: LoginService,
    private readonly _router:Router
  ) { 
    
  }

  ngOnInit(): void {
    this._loginService
    .metodoGet('http://localhost:1337/Perfil')
    .subscribe((resultadoMetodoGet) => {
      console.log('Respuest de Get');
      console.log(resultadoMetodoGet);
    this.datos=(resultadoMetodoGet[0].USUARIO)
 this.contrasena=(resultadoMetodoGet[0].CONTRASENA)
    console.log('resultados datos')
 
     console.log(this.datos)
   
    });
    
  }
  
  ingresar(){
if ( this.pass ==='admin' ){
  alert('ADMINNISTRADOR')
  this._router.navigate(
    ['/perfil-admin']
  )
}else if(this.pass!=='admin' && this.user!=='admin'){
  alert('ESTUDIANTE')
  this._router.navigate(
    ['/inicio']
  )
}else if(this.user === '' &&this.pass==''){
  alert('NO ESTA REGISTRADO O NO EXISTE LA CUENTA')
}
   
  

   }
}
