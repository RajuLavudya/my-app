import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  public name:string='abc';
  public name2:string="anudeep";

  public today:any= new Date();

  public product:any ={
    name:'laptop',
    price:500000
  }

}
