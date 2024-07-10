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

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'course', component: CourseComponent },
  { path: 'user-list', component: UserListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
