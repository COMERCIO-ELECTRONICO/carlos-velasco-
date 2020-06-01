import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { LoginComponent } from './login/login.component';
import { IniciarSecionComponent } from './iniciar-secion/iniciar-secion.component';
import { AppRoutes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { PrimeModule } from './prime.madule';
import { LibroComponent } from './libro/libro.component';
import { LibroAlquiladoComponent } from './libro-alquilado/libro-alquilado.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from "@angular/common/http";
import { LoginService } from './services/login.services';
import { PerfilAdminComponent } from './perfil-admin/perfil-admin.component';
import { PerfilUserComponent } from './perfil-user/perfil-user.component';
import { FormsModule } from '@angular/forms';
import{RegistroService }from'./services/registro.services';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NoEncontradoComponent,
    LoginComponent,
    IniciarSecionComponent,
    LibroComponent,
    LibroAlquiladoComponent,
    PerfilAdminComponent,
    PerfilUserComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutes,
    BrowserAnimationsModule,
    MaterialModule,
    PrimeModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    LoginService,
    RegistroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
