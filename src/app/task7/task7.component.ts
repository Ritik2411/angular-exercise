import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task7',
  templateUrl: './task7.component.html',
  styleUrls: ['./task7.component.scss']
})
export class Task7Component implements OnInit {

  constructor() { }

  @Input() users:{
    name:string,
    email:string,
    age:string
  } = {name: '' ,email: '' ,age: ''}

  ngOnInit(): void {
  }

}
