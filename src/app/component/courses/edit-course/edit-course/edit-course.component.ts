import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseFormModel } from 'src/app/model/course-form.model';
import { CourseModel } from 'src/app/model/course.model';
import { CourseServiceService } from 'src/app/service/course-service.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {
  courseFormModel:CourseFormModel;
  courseModel :CourseModel;
  courseId: string;
 
  constructor(private userService: CourseServiceService, private router: Router,private route:ActivatedRoute) {}
ngOnInit(){
  this.courseFormModel = new CourseFormModel();
  this.courseModel = new CourseModel();
  this.route.queryParamMap.subscribe((params)=>{
       this.courseId = params.get('courseId');
  });
  if(this.courseId!='0')
  {
    this.getUserData();

  }
}
  register() {
    let model = this.courseFormModel.getFormData();
    this.userService.register(model).subscribe(() => {
      this.router.navigate(['/courselist']);
    });
  }

  getUserData()
  {
    this.userService.getById().subscribe((res) => {
      const data = res;
     let userdata =  data.find(x => x.id == this.courseId);
     this.courseFormModel.setFormData(userdata);
    });
  }



}
