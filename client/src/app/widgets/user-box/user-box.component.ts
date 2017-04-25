import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';

@Component({
  /* tslint:disable */
  selector: '.userBox',
  /* tslint:enable */
  styleUrls: ['./user-box.component.css'],
  templateUrl: './user-box.component.html'
})
export class UserBoxComponent implements OnInit {
  private currentUser: User = new User();

  constructor(private userServ: UserService) {
    // se connecter au modif du user courant
      this.userServ.currentUser.subscribe((user: User) => this.currentUser = user);
  }

  public ngOnInit() {
    // TODO
  }

}
