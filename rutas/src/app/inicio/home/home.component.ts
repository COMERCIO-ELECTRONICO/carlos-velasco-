import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private readonly _router: Router
  ) { }

  ngOnInit(): void {
  }

  irAPokemonListar() {
    this._router.navigate(['/pokemon', 'listar'])
  }

}
