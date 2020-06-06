import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/Router';
import { LoginService } from '../services/login.services';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user ;
  pass ;
  datos = '';
  contrasena = '';
  adminuser = '';
  adminpass = '';
  iduser;
  constructor(
    private readonly _loginService: LoginService,
    private readonly _router: Router
  ) {

  }

  ngOnInit(): void {
  

  }

  ingresar() {
    this._loginService
    .metodoGet(`http://localhost:1337/Perfil?USUARIO=`+this.user)
    .subscribe((resultadoMetodoGet) => {
    console.log(resultadoMetodoGet)
    this.adminuser=(resultadoMetodoGet[0].USUARIO);
    this.adminpass=(resultadoMetodoGet[0].CONTRASENA)
    this.iduser=(resultadoMetodoGet[0].Estudianteid[0].id)

    console.log('usuario')
    console.log(this.iduser)


if(this.pass ===''){
alert('CONTRASEÑA NO INGRSADA')

}else
   if( this.user===''){
alert('USUSARIO NO INGRESADO')
   }else if (this.pass === 'admin'&& this.user==='admin') {
      alert('ADMINNISTRADOR')
      this._router.navigate(
        [`/perfil-admin/`+this.iduser]
      )
    }else if(this.adminuser===''){
alert('USUARIO NO EXISTE')
    }else if(this.pass !== this.adminpass){
      alert('CONTRSEÑA INCORRECTA')
    }else if(this.user===this.adminuser && this.pass===this.adminpass){
      alert('Bienvenido:'+this.adminuser)
       this._router.navigate(

        [`/inicio/`+this.iduser]
      )
    
     }else{
      alert('USUARIO NO EXISTE')
      
     }
    
    });
   



  }




}
