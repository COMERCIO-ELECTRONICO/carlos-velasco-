import {CanActivate} from '@angular/router'
import { Injectable } from '@angular/core';
import { JsonPipe } from '@angular/common';
@Injectable()
export class LoginGuard implements CanActivate{
    constructor(){}
    canActivate():boolean{
       /* const valorLocal = JSON
        .parse(localStorage.getItem('nombre'));
        if(valorLocal.nombre==='carlos'){
            return true;
        } else {
            return true;
        }
 
 */
return true;
    }
    
}