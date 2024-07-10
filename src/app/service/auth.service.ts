import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserModel } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users';
  private currentUser: any = null;

  constructor(private http: HttpClient, private router: Router) {}

  login(userModel:UserModel): Observable<any> {
    debugger
    return this.http.get<any[]>(`${this.apiUrl}?username=${userModel.username}&password=${userModel.password}`)
      .pipe(tap(users => {
        if (users.length) {
          this.currentUser = users[0];
          localStorage.setItem('user', JSON.stringify(this.currentUser));
        }
      }));
  }
  logout() {
    this.currentUser = null;
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }

  getCurrentUser() {
      this.currentUser = JSON.parse(localStorage.getItem('user')!);
      return this.currentUser;
  }
}
