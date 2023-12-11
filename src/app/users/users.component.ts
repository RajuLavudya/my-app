import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  public users:any = [];

  public term:string="";
  public colum:string="";
  public order:string="";
  public pageno:number=0;

  constructor(private _userService:UserService){
    _userService.getusers().subscribe(
      (data:any)=>{
        this.users = data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )

  }

  getfilteredusers(){
    this._userService.getfilteredusers(this.term).subscribe(

      (data:any)=>{
        this.users = data;
      },
      (err:any)=>{
        alert("internal server error");
      }

    )
  }

  sort(){
    this._userService.getsortedusers(this.colum,this.order).subscribe(

      (data:any)=>{
        this.users = data;
      },
      (err:any)=>{
        alert("internal server error");
      }

    )
  }

  page(){
    this._userService.getpageedusers(this.pageno).subscribe(

      (data:any)=>{
        this.users = data;
      },
      (err:any)=>{
        alert("internal server error");
      }

    )
  }

  delete(id:string){
    this._userService.deleteUser(id).subscribe(

      (data:any)=>{
        alert("delete succesfully");
        location.reload();
      },
      (err:any)=>{
        alert("internal server error");
      }

    ) 
  }

}
