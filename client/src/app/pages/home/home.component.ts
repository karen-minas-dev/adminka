import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreadcrumbService } from '../../services/breadcrumb.service';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { ConnectWithComponent } from '../../widgets/connect-with';
import { MapVisitorsReportComponent } from '../../widgets/map-visitors-report';

import { Message } from '../../models/message';
import { MessagesService } from '../../services/messages.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {
  public date: Date = new Date();

constructor(
    private msgServ: MessagesService,
    private breadServ: BreadcrumbService,
    private userService: UserService
  ) {
    // TODO
  }





  public ngOnInit() {
    // setttings the header for the home
    this.breadServ.set({
      description: 'HomePage',
      display: true,
      header: 'Dashboard',
      levels: [
        {
          icon: 'dashboard',
          link: ['/home'],
          title: 'Home'
        }
      ]
    });

    // let user1 = new User( {
    //   avatarUrl: 'public/assets/img/user2-160x160.jpg',
    //   email: 'weber.antoine.pro@gmail.com',
    //   firstname: 'WEBER',
    //   lastname: 'Antoine'
    // });
    
    // let user2 = new User( {
    //     avatarUrl: 'public/assets/img/user2-160x160.jpg',
    //     email: 'EMAIL',
    //     firstname: 'FIRSTNAME',
    //     lastname: 'LASTNAME'
    // });
    //this.userService.setCurrentUser( user2 );

      // this.msgServ.addMessage( new Message( {
      //   author: user2,
      //   content: 'le contenu d\'un message d\'une importance extreme',
      //   destination: user1,
      //   title: 'un message super important'
      // }) );

  }

  public ngOnDestroy() {

    // removing the header
    this.breadServ.clear();
  }

}
