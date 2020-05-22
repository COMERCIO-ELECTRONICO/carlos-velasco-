import { NgModule } from '@angular/core';
import { Route } from '@angular/Router';
import { HomeComponent } from './home/home.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { Routes, RouterModule } from '@angular/Router';
import { LoginComponent } from './login/login.component';
import { IniciarSecionComponent } from './iniciar-secion/iniciar-secion.component';

const rutas: Routes = [
    {
      path: 'inicio',
      component: HomeComponent,
    },
    {
      path: 'iniciar-sesion',
      component: IniciarSecionComponent,
    },
    {
      path: 'login',
      component: LoginComponent,
    },
    {
      path: '',
      redirectTo: 'inicio',
      pathMatch: 'full'
    },
    {   
      path: '**',
      component: NoEncontradoComponent,
    },
    
  ];


@NgModule({
    imports: [
        RouterModule.forRoot(rutas)

    ],
    providers: [],
    exports: [
        RouterModule
    ]

})
export class AppRoutes { }