import { LoginComponent } from './login/login.component';
import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { NoEncontradoComponent } from './inicio/no-encontrado/no-encontrado.component';


const rutas: Routes = [
  
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
        component: NoEncontradoComponent 
    },
];

@NgModule({
    imports: [RouterModule.forRoot(rutas    )],
    providers: [],
    declarations: [],
    exports: [RouterModule]
})
export class AppRoutesComponent {
}

