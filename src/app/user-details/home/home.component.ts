import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoggedIn: boolean = false;
  constructor(
    // private userSericre: BackendService
    private router:Router
    ) { }

  ngOnInit(): void {
  }
  logout(): void {
    this.isLoggedIn = false;
  }

}
