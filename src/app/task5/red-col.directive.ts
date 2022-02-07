import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedCol]'
})
export class RedColDirective {

  constructor(er:ElementRef) { 
    er.nativeElement.style.color = 'red'
  }

}
