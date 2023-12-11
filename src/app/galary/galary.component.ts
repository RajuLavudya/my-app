import { Component } from '@angular/core';
import { GalaryService } from '../galary.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-galary',
  templateUrl: './galary.component.html',
  styleUrls: ['./galary.component.css']
})
export class GalaryComponent {

  public galary:any = [];

  constructor(private _galaryService:GalaryService){
    _galaryService.getusers().subscribe(
      (memedata:any)=>{
        this.galary = memedata.data.memes;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )

  }

}
