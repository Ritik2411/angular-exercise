import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-task8',
  templateUrl: './task8.component.html',
  styleUrls: ['./task8.component.scss']
})
export class Task8Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.email]),
    dob: new FormControl('',[Validators.required]),
    age: new FormControl('',[Validators.required])
  })

  userSignin(){
    console.log(this.loginForm.value)
  }

  get name(){
    return(
      this.loginForm.get('name')
    )
  }

  get email(){
    return(
      this.loginForm.get('email')
    )
  }

  get dob(){
    return(
      this.loginForm.get('dob')
    )
  }

  get age(){
    return(
      this.loginForm.get('age')
    )
  }
}
