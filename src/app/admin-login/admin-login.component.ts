import { Router } from '@angular/router';
import { AdminService } from './../admin.service';
import { Admin } from './../admin';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  admin: Admin=new Admin();
  constructor(
    private adminService:AdminService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  adminLogin(){
    debugger
    this.adminService.loginAdmin(this.admin).subscribe({
      next: (data) =>{
        var data= data;
        this.router.navigate(['/home']);
        alert("Login Successfully")
    },error:(error:any) =>
    alert("Sorry !! Somthing Worng")
  });

  }


}
