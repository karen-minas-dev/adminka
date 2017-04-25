import { User } from '../models/user';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs/Rx';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { NotificationService } from './notification.service';
import { Router } from '@angular/router';
import { RestService } from './rest.service';


@Injectable()
export class AuthService {
  public profil = null;
  headers : Headers;
  options : RequestOptions;
  userLoggedIn : boolean = false;

  constructor(private http: Http, private router: Router,private notif: NotificationService,private rest:RestService) { 
          this.headers = new Headers();
          this.headers.append('Content-Type', 'application/json');
          this.headers.append('Accept', 'application/json');
          this.options = new RequestOptions({ headers: this.headers, withCredentials: true });
  }
  public login(user) {

  return this.http.post('/api/v1/login',
    JSON.stringify( { username:user.name,password:user.password } ), this.options )
        .map( response =>  response.json() )
        .map( res => localStorage.setItem( 'admin', JSON.stringify( res.admin )) )
         .catch( this.rest.handleError );
    }

    public logout() {
        localStorage.removeItem("admin");
        return this.http.get('/api/v1/user/logout')
            .map(res => res.json())
            .catch(this.rest.handleError);
    }

    public loginPath = (): void => {
      this.router.navigate(['login']);
    }
    public changeLoginStatus(status: boolean){
        this.userLoggedIn = status;
    }

   public changeUserProfil(item) {
        this.profil = item;
    }
    public loginSuccess = (): void => {
        this.router.navigate( ['home'] );
        //this.notif.success("You successfully logged");
    }
    
    public  getUserEmail = (): string => {
      return this.profil.email ? this.profil.email : '';
    }
    public  getUserImage = (): string => {
      return this.profil.image ? this.profil.image : '';
    }

    public getUserName = (): string => {
        if (this.profil) {
            return this.profil.username;
        }
        return '';
    }

}


