import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserinfoService } from '../userinfo.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent {
  public userdetails:any=[];
 constructor(private _userService: UserinfoService){
    _userService.getuserinfo().subscribe(
      (userdata:any)=>{
        this.userdetails=userdata.users;
      }
    )

  }
}
