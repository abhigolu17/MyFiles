import { Router } from '@angular/router';
import { BackendService } from 'src/app/backend.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-getdetails',
  templateUrl: './getdetails.component.html',
  styleUrls: ['./getdetails.component.css']
})
export class GetdetailsComponent implements OnInit {
  users: User[] = [];

  userdata:any;

  constructor(private userService:BackendService,
    private router :Router) {
    // this.userService.getData().subscribe(data=>{
    //   this.userdata=data;
    //   console.log(this.userdata);
    // })
  }
  ngOnInit(): void {
    this.getUsers();
  }

private getUsers(){
  this.userService.getData().subscribe(data => {
    this.userdata = data;
  });
}
  deleteUser(user:any){
    console.log(user);
    this.userService.deleteData(user).subscribe(data=>{
      console.log(data)
      this.userdata=data;
    })
  }


  // updateUser(user: any,index:any){
  //   debugger
  //   console.log(user[index].roll)
  // }
}
