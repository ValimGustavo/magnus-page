import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/modules/login/services/login.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private loginService: LoginService) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    const token = JSON.parse(localStorage.getItem('token'));


    //TODO: CRIAR METODOS DE FORMA CORRETA
    const { user } = token;

    const response  = await this.loginService.getType({user})

    if(response.type === 'admin'){
      return true
    }
   
    return false
    
  }
}
