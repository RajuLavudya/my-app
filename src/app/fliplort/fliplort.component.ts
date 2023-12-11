import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FliplortService } from '../fliplort.service';

@Component({
  selector: 'app-fliplort',
  templateUrl: './fliplort.component.html',
  styleUrls: ['./fliplort.component.css']
})
export class FliplortComponent {

  public fliplort:any = [];

  constructor(private_fliplortService:FliplortService){
    private_fliplortService.getfliplort().subscribe(
      (data:any)=>{
        this.fliplort = data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )

  }

}
