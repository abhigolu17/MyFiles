import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './model';

@Injectable({
  providedIn: 'root'
})
export class
BackendService {
  updateByIdData(roll: number, user: User) {
    throw new Error('Method not implemented.');
  }


  private url:string="http://localhost:8080"
  usData: Object;

  constructor(private http:HttpClient) { }

  register(model: any){
   return this.http.post(this.url+'/register',model);
  }

  getData(){
    return this.http.get(this.url+'/getAllUsers');
  }

  deleteData(roll:any){
    return this.http.delete(this.url+'/delete/'+ roll);
  }

  updateData(roll:any,model: any){
    debugger
     return this.http.put(this.url+'/update/'+roll,model);
  }

  getById(roll:any){
    debugger
    return this.http.get(this.url+'/findById/'+roll);
  }

  getuserById(details:any){
    return this.http.post(this.url+'/loginAdmin/'+ 'Abhishek', details);
  }
}
