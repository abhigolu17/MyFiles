import { Admin } from './../../admin';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { BackendService } from 'src/app/backend.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name: string;
  password: string;
  flag:any;
  output:any;
  admin :Admin = new Admin();
  data: string;

  constructor(
    private userService : BackendService,
    private router :ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.name=this.router.snapshot.params['name'];
    this.password=this.router.snapshot.params['password'];
  }

  onSubmit(name:any , password:any){
    debugger
    this.admin.name =name;
    this.admin.password= password;
    console.log(this.admin);
    let details: any = {};
    details['name'] = name;
    details['password'] = password;
    this.userService.getuserById(details).subscribe({
      next:(data) =>{
        debugger
        this.flag=data;
        this.check(this.flag);
    },
    error:(error:any) => {
      console.log(error);
    }
  });
  }

  check(flag:any){
    debugger
    if(flag == 1){
      this.data ="Welcome" +this.name;
      console.log("Successfully logged");
      // login.reset();
    }else{
      this.data="Sorry!! Invalid Name or Password";
      console.log("Sorry");
      // login.reset();
    }
  }
  }
