import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task5',
  templateUrl: './task5.component.html',
  styleUrls: ['./task5.component.scss']
})
export class Task5Component implements OnInit {

  showText:boolean = false
  changeCol:boolean = false
  text:string = ''
  setColor:string = ''
  ngmodelText = ''

  users:{
    name: string,
    email: string,
    age: string
  }[] = [
    {name:'Post Malone',email:'postmalone@pm.io',age:'25'},
    {name:'Alan Walker',email:'alanwalker@aw.yu',age:'24'},
    {name:'Ed Sherran',email:'edsherran@ed.ui',age:'27'}
  ]

  constructor() { }

  show(){
    this.showText = !this.showText
  }

  changeColor(){
    this.changeCol = !this.changeCol
  }

  handleText(data:string){
    this.text = data
  }

  getText(){
    this.setColor = this.text
  }

  ngOnInit(): void {
  }

}
