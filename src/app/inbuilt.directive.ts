import { Directive ,ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appInbuilt]'
})
export class InbuiltDirective {

  constructor(private eleRef:ElementRef) {}

  @HostListener('mouseover') onMouseOver() {
    this.eleRef.nativeElement.style.background = 'red';
  }
  @HostListener('mouseout') onMouseout(){
    this.eleRef.nativeElement.style.background = '';
  }
  
}
