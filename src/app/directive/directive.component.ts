import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss']
})
export class DirectiveComponent {

  isActive:boolean = true;
  canSave:boolean=true;
  isUnchanged:boolean=true;
  isSpecial:boolean=true;
  
  currentStyles:any = '';
  get(){
    this.isActive=!this.isActive
  }

  currentstyle(){
    this.currentStyles = {
      'font-style':  this.canSave      ? 'italic' : 'normal',
      'font-weight': !this.isUnchanged ? 'bold'   : 'normal',
      'font-size':   this.isSpecial    ? '24px'   : '12px'
    };
  }
}
