import { Component } from '@angular/core';
import { VehiclesService } from '../vehicles.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {

  public Vehicles:any = [];

  public term:string="";

  constructor(private _VehiclesService:VehiclesService){
    _VehiclesService.getvechicles().subscribe(
      (data:any)=>{
        this.Vehicles = data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )

  }
getfilteredvehicle(){
 this._VehiclesService.getFilterVechicles(this.term).subscribe(
    (data:any)=>{
      this.Vehicles=data;
    },
    (err:any)=>{
      alert("internal server error");
    }
  )
}


}
