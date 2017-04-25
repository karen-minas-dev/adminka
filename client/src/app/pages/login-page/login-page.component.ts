import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { NotificationService } from '../../services/notification.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  
  private password: string;
  private email: string;
  user = { name: "", password: ""};
  alertMessage = '';

    constructor(
      private userServ: UserService,
      private router: Router,
      private auth: AuthService,
      private notif:NotificationService
    ) { }

onLoginClicked() {
    if( this.user.name && this.user.password ){
        this.auth.login(this.user).subscribe(
        result =>{        
          this.auth.loginSuccess();   
          this.auth.changeUserProfil(JSON.parse( localStorage.getItem( 'admin' )));  
          let admin = new User( {
            email: this.auth.getUserEmail(),
            firstname: this.auth.getUserName(),
          } );
        admin.avatarUrl  =  admin.getImage() + this.auth.getUserImage(),
        this.userServ.setCurrentUser( admin );       
        } ,
        err => {
          if(err.message == "Users not found"){
            this.alertMessage = err.message
          }
        }
      );
    }

  }




  public ngOnInit() {
    
    if( localStorage.getItem('admin') ){
        this.router.navigate( ['home'] );
    }
    this.auth.changeLoginStatus(false);
    window.dispatchEvent( new Event( 'resize' ) );
  }

}
