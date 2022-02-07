import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TodoDataService } from '../services/todo-data.service';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-home-crud',
  templateUrl: './home-crud.component.html',
  styleUrls: ['./home-crud.component.scss']
})
export class HomeCrudComponent implements OnInit,OnChanges {
  
  data:Todo[] = []
  
  constructor(private tododata:TodoDataService) { 
  }

  ngOnInit(): void {
    this.data = this.tododata.getData()
    console.log(this.data);
  }

  submitHandler(info:any){
      this.tododata.addData({
        id: this.data.length + 1,
        title: info.title,
        description: info.description
      })
  }

  deleteFun(id:number){
    const newData = this.tododata.deleteData(id)     
    this.data = newData
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes)
  }
}
