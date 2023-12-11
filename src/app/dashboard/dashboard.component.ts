import { Token } from '@angular/compiler';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor (private _router:Router){}

  logout(){
    localStorage.removeItem("token");
    this._router.navigateByUrl("/login")
  }

}
