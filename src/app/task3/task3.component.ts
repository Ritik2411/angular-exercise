import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.scss']
})
export class Task3Component implements OnInit, OnChanges, DoCheck {

  construc:string = ''
  init:string = ''
  togChild:boolean = false
  sendTex:string = ''

  constructor() { 
    this.construc = 'Parent Constructor'
    console.log("Parent Constructor")
  }

  toggleChild(){
    this.togChild = !this.togChild
  }

  ngOnInit(): void {
    this.init = "Parent OnInit"
    console.log("Parent Init")
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log("Parent Onchange trigered")
  }

  ngDoCheck(): void {
      console.log("Parent Do check")
  }
  
  sendText(data:string){
    this.sendTex = data
  }
}
