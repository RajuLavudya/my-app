import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
public anu:string=''
public names:string[]=[];
submit(){
  this.names.push(this.anu);
  this.anu=""
}
delete(){
  this.names.pop()
}

}
