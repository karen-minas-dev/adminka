import { Component, OnInit } from '@angular/core';
import { ConnectWith } from '../../models/connect-with';
import { RestService} from '../../services/rest.service';

@Component({
  selector: 'app-connect-with',
  templateUrl: './connect-with.component.html',
  styleUrls: ['./connect-with.component.css']
})
export class ConnectWithComponent implements OnInit {

 members: ConnectWith[];

  constructor(private connectWithService:RestService) {

    this.members = [

          { title: 'Facebook', members_count: 0, info_box_icon: 'bg-blue', icon_class: 'ion-social-facebook' },
          { title: 'Google', members_count: 0, info_box_icon: 'bg-red', icon_class: 'fa fa-google-plus' },
          { title: 'Twitter', members_count: 0, info_box_icon: 'bg-aqua', icon_class: 'ion-social-twitter' },
          { title: 'Application', members_count: 0, info_box_icon: 'bg-yellow', icon_class: 'ion-ios-people' }

    ];

    this.connectWithService.getConnectWith()
        .subscribe(members => {
            this.members[0].members_count = members.connectFacebook;
            this.members[1].members_count = members.connectGoogle;
            this.members[2].members_count = members.connectTwitter;
            this.members[3].members_count = members.connectApplication;
        });
  }



  ngOnInit() {
  }

}
