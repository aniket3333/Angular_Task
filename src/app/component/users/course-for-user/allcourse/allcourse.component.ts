import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CourseServiceService } from 'src/app/service/course-service.service';

@Component({
  selector: 'app-allcourse',
  templateUrl: './allcourse.component.html',
  styleUrls: ['./allcourse.component.scss']
})
export class AllcourseComponent {
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


