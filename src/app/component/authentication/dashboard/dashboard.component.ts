import { Component } from '@angular/core';
import { UserModel } from 'src/app/model/user.model';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  user: any;

  constructor(private authService: AuthService) {
    debugger
    this.user = this.authService.getCurrentUser();
    
  }
}
