import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task6',
  templateUrl: './task6.component.html',
  styleUrls: ['./task6.component.scss']
})
export class Task6Component implements OnInit {

  constructor() { }

  text = 'text'
  todayDate = Date()
  users = [
    {name:'Juice',age:'25',email:'juice999@ju.co'},
    {name:'Post',age:'27',email:'post12@ps.co'}
  ]
  USD:string = '';

  keyupHandler(value:string){
    this.USD = value
  }

  ngOnInit(): void {
  }

}
