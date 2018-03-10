import { Directive,ElementRef,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[ee]'
})
export class mapDirective {
  @Input() ee: string;
   iX: Object = 'ee';
   iStartTouchX: Object = 'ee';
   iStartX: Object = 'ee';

  constructor(el: ElementRef) {
     
   }
   @HostListener('touchstart', ['$event']) onclick(event) {
  

   
     
       
       
 
          
   }

}




   