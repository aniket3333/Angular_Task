import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CourseServiceService } from 'src/app/service/course-service.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent {
  allUser: any[];
constructor(private courseService : CourseServiceService,private router:Router){}
  ngOnInit(){
    this.getUser();
      }
    
      getUser(){
        debugger
        this.courseService.getAllUsers().subscribe((res)=>{
           this.allUser = res;
        });
      }
      addCourse()
      {
        this.router.navigate(['/edit-course']);
      }
      
      edit(id:any)
      {
       
        this.router.navigate(['edit-course'],{
          queryParams:{courseId:id}
        });
      }
    
      delete(id:any)
      {
       this.allUser =  this.allUser.filter(x=>x.id != id);
      
      }

     
}
