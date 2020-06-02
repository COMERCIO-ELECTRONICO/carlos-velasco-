import { Component, OnInit } from '@angular/core';
import{AdminService }from'../services/admin.services'

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {
  libro1;
  libro2;
  libro3;
  libro4;
  libro5;
  constructor(
private readonly _libroservice:AdminService

  ) { }

  ngOnInit(): void {
    this._libroservice
    .metodoGet('http://localhost:1337/Libro')
    .subscribe((resultadoMetodoGet) => {
      console.log('Respuest de Get');
      console.log(resultadoMetodoGet);
    this.libro1=(resultadoMetodoGet[0].USUARIO)
 this.libro2=(resultadoMetodoGet[0].CONTRASENA)
    console.log('resultados datos')
 
     console.log(resultadoMetodoGet
      )
   
    });
  }
 
}
