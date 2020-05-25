import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { LoginComponent } from './login/login.component';
import { IniciarSecionComponent } from './iniciar-secion/iniciar-secion.component';
import { AppRoutes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MaterialModule} from'./material.module';
import { PrimeModule } from './prime.madule';
import { LibroComponent } from './libro/libro.component';
import { LibroAlquiladoComponent } from './libro-alquilado/libro-alquilado.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NoEncontradoComponent,
    LoginComponent,
    IniciarSecionComponent,
    LibroComponent,
    LibroAlquiladoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    BrowserAnimationsModule,
    MaterialModule,
    PrimeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
