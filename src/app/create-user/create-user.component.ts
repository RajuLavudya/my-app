import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  public userForm:FormGroup = new FormGroup({

    name:new FormControl(),
    phone: new FormControl(),
    city:new FormControl(),
    image:new FormControl()
  });

  submit(){
    console.log(this.userForm)
  }

}
