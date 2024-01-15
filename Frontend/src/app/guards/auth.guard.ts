import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceUserComponent } from '../service/service-user.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private serviceU: ServiceUserComponent){}

  canActivate():boolean {
    if(!this.serviceU.isAuth()){
      console.log('El token no es valido o  ya expiro')
      return false
    }
    return true;
  }
  
}
