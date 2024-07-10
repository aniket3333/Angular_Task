import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  users: any[] = [];

  constructor(private userService: UserService) {
    this.userService.getAllUsers().subscribe(users => {
      this.users = users;
    });
  }
}
