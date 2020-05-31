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
  constructor(
    private readonly _loginService
    : LoginService
  ) { 
    
  }

  ngOnInit(): void {
    this._loginService
    .metodoGet('http://localhost:1337/Perfil')
    .subscribe((resultadoMetodoGet) => {
      console.log('Respuest de Get');
      console.log(resultadoMetodoGet);
    });

  }
  



}
