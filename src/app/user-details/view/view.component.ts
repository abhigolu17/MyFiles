import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BackendService } from 'src/app/backend.service';
import { User } from 'src/app/model';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  model: User = new User()
  userdata: any;
  userRoll:any;
  getRoll: (roll: any) => void;

  constructor(
    private active: ActivatedRoute,
    private router: Router,
    private userService:BackendService,
    ) {

    }
  ngOnInit() {
    debugger
   this.userRoll= this.active.snapshot.params['roll'];
   console.log(this.userRoll);
   this.onClickById(this.userRoll);
  }

  onClickById(roll:any){
    debugger
    this.userService.getById(this.userRoll)
    .subscribe(data=> {
      debugger
      this.userdata = data;
      console.log(this.userdata);
    });
  }

}
