import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './component/authentication/login/login/login.component';
import { RegisterComponent } from './component/authentication/registration/register/register.component';
import { DashboardComponent } from './component/authentication/dashboard/dashboard.component';
import { AdminComponent } from './component/users/admin/admin.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { CourseComponent } from './component/courses/course/course.component';
import { UserListComponent } from './component/users/user-list/user-list/user-list.component';
import { EditUserComponent } from './component/users/edit-user/edit-user/edit-user.component';
import { CourseListComponent } from './component/courses/course-list/course-list/course-list.component';
import { EditCourseComponent } from './component/courses/edit-course/edit-course/edit-course.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    AdminComponent,
    CourseComponent,
    UserListComponent,
    EditUserComponent,
    CourseListComponent,
    EditCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
   ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
