import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { Router } from '@angular/router';
import { NotificationService } from '../../services/notification.service';
import { AuthService } from '../../services/auth.service';

@Component( {
    selector: 'app-header',
    styleUrls: ['./app-header.component.css'],
    templateUrl: './app-header.component.html'
})
export class AppHeaderComponent implements OnInit{


  constructor(
      private router: Router,
      private auth: AuthService,
      private notif: NotificationService
      ) { 

      }
  private logout = (): void => {
      this.auth.logout()
          .subscribe(data => {
              this.router.navigate(['/login']); 
              this.notif.success('You successfully loged out');
            },
            err =>   console.log(err)
            
          );  
  }

// private logout = (): void => {
//   this.router.navigate(['/']);
//    this.userServ.logout();
//    }


 
 ngOnInit(){

 }

}
