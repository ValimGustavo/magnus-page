import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
    

    //TODO: CRIAR LOGICA CORRETA
    const token = localStorage.getItem('token')

    console.log('guard', token)
    if(token){
      return true
    }
    return false;
  }
  
}
