import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {


  private apiUrl = 'http://localhost:3000/courses';

  constructor(private http: HttpClient) {}

  register(user: any): Observable<any> {
    
    return this.http.post(this.apiUrl, user);
  }

  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  
  getById(): Observable<any[]> {
       return this.http.get<any[]>(this.apiUrl);
  }

}
