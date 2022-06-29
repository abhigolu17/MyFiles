import { Router, ActivatedRoute } from '@angular/router';
import { BackendService } from 'src/app/backend.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../../model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  user: User = new User();
  roll:number
  getId:any

  userdata: Object;
  userRoll: any;

  constructor(
    private snack:MatSnackBar,
    private userService:BackendService,
    private router:Router,
    private activate:ActivatedRoute,
    private formBuilder: FormBuilder

    ) { }

    ngOnInit() {
      this.userRoll= this.activate.snapshot.params['roll'];
      console.log(this.userRoll);
      this.updateData(this.userRoll);
    }

  updateData(roll:number){
    debugger
    this.userService.updateData(this.userRoll,this.user).subscribe(data=>{
      this.userdata=data;
      console.log(this.userdata)
    })
  }
}


