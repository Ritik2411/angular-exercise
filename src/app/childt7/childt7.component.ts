import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-childt7',
  templateUrl: './childt7.component.html',
  styleUrls: ['./childt7.component.scss']
})
export class Childt7Component implements OnInit {

  constructor() { }

  @Output() metdata = new EventEmitter<string>()

  ngOnInit(): void {
  }

}
