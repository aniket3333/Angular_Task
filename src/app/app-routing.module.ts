import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';
import { LoginComponent } from './component/authentication/login/login/login.component';
import { RegisterComponent } from './component/authentication/registration/register/register.component';
import { DashboardComponent } from './component/authentication/dashboard/dashboard.component';
import { AdminComponent } from './component/users/admin/admin.component';
import { CourseComponent } from './component/courses/course/course.component';
import { UserListComponent } from './component/users/user-list/user-list/user-list.component';
import { EditCourseComponent } from './component/courses/edit-course/edit-course/edit-course.component';
import { CourseListComponent } from './component/courses/course-list/course-list/course-list.component';
import { AllcourseComponent } from './component/users/course-for-user/allcourse/allcourse.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent,canActivate:[AuthGuard,RoleGuard]},
  { path: 'admin', component: AdminComponent ,canActivate:[AuthGuard]},
  { path: 'course', component: CourseComponent,canActivate:[AuthGuard] },
  { path: 'user-list', component: UserListComponent,canActivate:[AuthGuard] },
  { path: 'edit-course', component: EditCourseComponent,canActivate:[AuthGuard]},
  { path: 'courselist', component: CourseListComponent ,canActivate:[AuthGuard]},
  { path: 'allcourseforuser', component: AllcourseComponent,canActivate:[AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
