import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getCountries() {
    return ['USA', 'Canada', 'UK'];
  }
  
  getState(country:string){
    
    if(country === 'USA'){
      return ['New York'];
    }else if(country === 'Canada'){
      return ['Alberta']
    }else if(country === 'UK')
    {
      return ['Highlands']
    }else {
      return [];
    }

  }

  getCities(state: string) {

    if (state === 'New York') {
      return ['Chicagocity'];
    } else if (state === 'Alberta') {
      return ['Toronto', 'Vancouver', 'Montreal'];
    } else if (state === 'Highlands') {
      return ['London', 'Manchester', 'Birmingham'];
    } else {
      return [];
    }
  }

}
