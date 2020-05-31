import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

}
