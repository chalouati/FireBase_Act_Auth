import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from './shared/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AutorisationGuard implements CanActivate {

  constructor (private serAuth:LoginService){}



  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.serAuth.auth===true) return true;
  }
  
}
