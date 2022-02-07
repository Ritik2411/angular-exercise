import { Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnDestroy, OnChanges, DoCheck {

  construct:string = ''
  init:string = ''
  onDes:boolean = false
  showIn:boolean = false

  @Input() text:string = ''

  constructor() { 
    this.construct = 'Child Constructor'
    console.log("Child Constructor")
  }

  show(){
    this.showIn = true
  }

  ngOnInit(): void {
    this.init = 'Child Init'
    console.log("Child Init")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Child Onchange trigered")    
  }

  ngDoCheck(): void {
      console.log("Child docheck called")
  }
  ngOnDestroy(): void {
      console.log("Child Ondestroy")      
  }
}
