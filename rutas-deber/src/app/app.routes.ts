import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './inicio/home/home.component';
import { NgModule, Component } from "@angular/core";
import { NoEncontradoComponent } from './inicio/no-encontrado/no-encontrado.component';

const rutas: Routes = [
    {
        path: 'inicio',
        component: HomeComponent
    },
    {
        path: '',   
        redirectTo: 'inicio',
        pathMatch: 'full'   // al poner localhost:4200 no redirige a localhost:4200/inicio
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'pokemon',
        loadChildren: ()=>import('./pokemon/pokemon.module')
        .then(pokemon=>pokemon.PokemonModule)
    },
    {
        path: '**', //cuando no se encuentra una pagina este codigo lo redirecciona a 'no foud 404'
        component: NoEncontradoComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(rutas)],
    providers: [],
    declarations: [],
    exports: [RouterModule]
})

export class AppRoutesComponent {

}