import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.services';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private readonly _loginService
    : LoginService
  ) { 
    
  }

  ngOnInit(): void {
    this._loginService
    .metodoGet('http://localhost:1337/')
    .subscribe((resultadoMetodoGet) => {
      console.log('Respuest de Get');
      console.log(resultadoMetodoGet);
    });

  }

}
