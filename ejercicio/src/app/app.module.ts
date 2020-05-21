import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { LoginComponent } from './login/login.component';
import { IniciarSecionComponent } from './iniciar-secion/iniciar-secion.component';
import { AppRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NoEncontradoComponent,
    LoginComponent,
    IniciarSecionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
