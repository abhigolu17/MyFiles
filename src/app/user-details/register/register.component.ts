import { BackendService } from './../../backend.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../../model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private snack:MatSnackBar,
    private backend:BackendService
    ){  }

  model:User=<User>{};

  ngOnInit(): void {
  }

  btnClick()
  {
    this.snack.open("Welcome !! Successfull Submit")
    // if(this.model.roll == '' || this.model.age == '' || this.model.name == ''){
    //   this.snack.open("fields can not be empty !!","OK");
    //   return;
    // }
    this.backend.register(this.model).subscribe({next: (Response: any) =>{
       console.log(Response)
    },
    error:(error:any) => {
      console.log("error occoured");
    }
  });
  }
}
