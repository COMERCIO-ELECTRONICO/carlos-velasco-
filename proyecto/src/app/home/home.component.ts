import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-home ', 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor() { }
libros:boolean=false;
alquilados:boolean=false;
carrusel:boolean=true;
  ngOnInit(): void {}
 
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
