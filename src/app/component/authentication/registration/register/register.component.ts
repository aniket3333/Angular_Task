import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  role: string = 'user';

  constructor(private userService: UserService, private router: Router) {}

  register() {
    const newUser = {
      username: this.username,
      password: this.password,
      role: this.role
    };
    this.userService.register(newUser).subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
}
