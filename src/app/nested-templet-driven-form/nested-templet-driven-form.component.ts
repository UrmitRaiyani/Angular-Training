import { Component } from '@angular/core';
import { DataService } from './data.service'

@Component({
  selector: 'app-nested-templet-driven-form',
  templateUrl: './nested-templet-driven-form.component.html',
  styleUrls: ['./nested-templet-driven-form.component.scss']
})
export class NestedTempletDrivenFormComponent {


  constructor(public dataService:DataService){
    this.country = dataService.getCountries();
  }

  selectedCountry:any = '';
  selectedState:any = '';
  selectedCity:any='';

  onCountryChange(){
    this.State = this.dataService.getState(this.selectedCountry);
    this.selectedState = '';
  }
  onStatechange(){
    this.cityA = this.dataService.getCities(this.selectedState);
    this.selectedCity = '';
  }

  formvalue:any = {
    id:'',
    name:'',
    age:'',
    address:{
      city:'',
      houseNo:'',
      addressLine:'',
      state:'',
      country:'',
    }
  }

  country:any[]= [];
  State:any[]= [];
  cityA:any[]=[];
  isValue:boolean = false;
  getData(val:any){
    console.log(val);
    this.formvalue = val
    this.isValue = true
  }

}
