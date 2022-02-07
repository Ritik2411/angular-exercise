import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.scss']
})
export class Task2Component implements OnInit {

  constructor() { }

  title='text'
  handleChange = ''
  mod= ''
  dis= true

  handleText(data:string){
    this.handleChange = data
  }

  handleMod(data:string){
    this.mod = data
  }

  enable(){
    this.dis = false
  }

  disable(){
    this.dis = true
  }

  ngOnInit(): void {
  }

}
