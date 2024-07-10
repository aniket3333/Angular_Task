import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserFormModel } from 'src/app/model/user-form.nodel';
import { UserModel } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  userForm :UserFormModel;
  user:UserModel;
  username: string = '';
  password: string = '';
  role: string = 'user';
  userId:string='0';


  constructor(private userService: UserService, private router: Router,private route:ActivatedRoute) {}
ngOnInit(){
  this.userForm = new UserFormModel();
  this.user = new UserModel();
  this.route.queryParamMap.subscribe((params)=>{
       this.userId = params.get('userId');
  });
  if(this.userId!='0')
  {
    this.getUserData();

  }
}
  register() {
    let model = this.userForm.getFormData();
    this.userService.register(model).subscribe(() => {
      this.router.navigate(['/login']);
    });
  }

  getUserData()
  {
    this.userService.getById().subscribe((res) => {
      const data = res;
     let userdata =  data.find(x => x.id == this.userId);
     this.userForm.setFormData(userdata);
    });
  }
}
