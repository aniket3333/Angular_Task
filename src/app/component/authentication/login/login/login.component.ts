import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserFormModel } from 'src/app/model/user-form.nodel';
import { UserModel } from 'src/app/model/user.model';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit{
  userForm:UserFormModel;
  user:UserModel
  get f(){
    return this.userForm.controls;
  }
  constructor(private authService: AuthService, private router: Router) {}
ngOnInit(){
  this.userForm = new UserFormModel();
  this.user = new UserModel();

}
  login() {
    debugger
    let model =this.userForm.getFormData();
    this.authService.login(model).subscribe(user => {
      if (user) {
        this.router.navigate(['/dashboard']);
      } else {
        alert('Invalid credentials');
      }
    });
  }

}
