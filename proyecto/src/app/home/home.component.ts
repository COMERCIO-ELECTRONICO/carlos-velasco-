import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor() { }
libros:boolean=false;
alquilados:boolean=false;
carrusel:boolean=true;
  ngOnInit(): void {
  }
 
  libro(){
    
this.libros=true;
this.alquilados=false;
this.carrusel=false;

  }
  alqilados(){
    this.libros=false;
    this.alquilados=true;
    this.carrusel=false;
  }
}
