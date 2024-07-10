import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit{
  allUser:any;

constructor(private userService:UserService,private router:Router){}

  ngOnInit(){
this.getUser();
  }

  getUser(){
    debugger
    this.userService.getAllUsers().subscribe((res)=>{
       this.allUser = res;
    });
  }


  edit(id:any)
  {
   
    this.router.navigate(['register'],{
      queryParams:{userId:id}
    });
  }

  delete(id:any)
  {
   this.allUser =  this.allUser.filter(x=>x.id != id);
  
  }


}
