import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularTraining';
  date:any = new Date()
  jsonval:any = [{name:"rojo",age:21},{name:"kite",age:51}];
  items: string[] = ['Apple', 'Banana', 'Cherry', 'Date', 'apple', 'Grape',"Jakusa"];
  serchData: any;
  val:string = 'Hello!'
  isActive:boolean = false
}
