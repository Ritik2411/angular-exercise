import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NewProjectName';
  count:number = 0
  disabled:boolean = true
  hide:boolean =true
  color:string = "xyz"
  text = ''
  sendTex = ''

  increment(){
    this.count++
  }

  decrement(){
    this.count--
  }

  show(){
    this.hide = !this.hide
  }

  handleChange(data:string){
    this.text = data
  }

  sendText(){
    this.sendTex = this.text
  }

  data:{
    name:string,
    email:string,
    age:string
  }[] = [
    {name: 'Malone', email: 'malone@ma.ua', age: '25'},
    {name: 'Scofield', email: 'scofield@pb.ov', age: '24'},
    {name: 'Burrows', email: 'borrows@pb.ov', age: '25'}
  ]
  
  emittedData:string = ''

  parenttochildfun(text:string){
    this.emittedData = text
  }
}
