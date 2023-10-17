import { Component } from '@angular/core';

@Component({
  selector: 'app-serching',
  templateUrl: './serching.component.html',
  styleUrls: ['./serching.component.scss']
})
export class SerchingComponent {

  items:any[] = [
    {name:"rojo",age:21,id:1},
    {name:"kite",age:51,id:2},
    {name:"jakusy",age:21,id:3},
    {name:"looky",age:26,id:4},
    {name:"Rahul",age:25,id:5},
    {name:"roky",age:28,id:6}
];
  serchData: any;

}
