import { Observable } from 'rxjs';
import { Admin } from './admin';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl="http://localhost:8080/loginAdminPage";
  constructor(
    private http:HttpClient
  ) { }

  loginAdmin(admin:Admin):Observable<Object>{
    console.log(admin);
     return this.http.post(this.baseUrl,admin);
   // return this.http.post(this.baseUrl+'/loginAdminPage',admin);
  }
}
// return this.http.post(this.baseUrl+'/loginAdminPage',admin);
