import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import {Observable} from "rxjs/Rx";
import { AuthService } from './auth.service';


@Injectable()
export class CanActivateGuard implements CanActivate {
  constructor(private auth: AuthService,private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean{

    if (!localStorage.getItem('admin')) {
      this.router.navigate( [ 'login' ] )
    }

      this.auth.changeLoginStatus(true);
      return true;
  }
}
