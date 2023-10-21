import { Component } from '@angular/core';

@Component({
  selector: 'app-templet-driven-form',
  templateUrl: './templet-driven-form.component.html',
  styleUrls: ['./templet-driven-form.component.scss']
})
export class TempletDrivenFormComponent {

  formvalue:any = '';
  country:string[]=['India','United State','Uk','Austrelia','Saudi Arabia']
  
  isValue:boolean = false;
  getData(val:any){
    console.log(val);
    this.formvalue = val
    this.isValue = true
  }

}
