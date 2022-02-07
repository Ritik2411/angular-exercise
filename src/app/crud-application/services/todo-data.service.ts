import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor() { }

  todoData = [
      {
        id: 1,
        title: 'React',
        description: 'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.'
      },
      
      {
        id: 2,
        title: 'Angular',
        description: 'Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.'
      }
  ]

  getData(){
    return this.todoData
  }

  addData(data:any){
    this.todoData.push(data)
  }

  deleteData(id:number){
    const newData = this.todoData.filter(data=> data.id !== id)
    this.todoData = newData
    return this.todoData
  }

  editData(id:number,idData:any){
    this.todoData.forEach((elements,index,data)=>{
      if(data[index].id === id){
        data[index] = idData
      }
    })
  }
}

