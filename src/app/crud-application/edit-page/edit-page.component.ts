import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoDataService } from '../services/todo-data.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {

  id:any = ''
  
  data:{
    id: number,
    title:string,
    description: string
  } = {
    id: 0,
    title: '',
    description: ''
  }

  newdata:any = {}

  constructor(private todo:TodoDataService, private route:ActivatedRoute, private router: Router, private location: Location) { 
    
  }

  ngOnInit(): void {
   this.id = (this.route.snapshot.paramMap.get('id')) 
   this.newdata = (this.location.getState())
   this.data = {
     id: this.newdata.item.id,
     title: this.newdata.item.title,
     description: this.newdata.item.description
   }

   console.log(this.data)
  }

  handleSubmit(data:any){
    this.todo.editData(parseInt(this.id),{
      id: parseInt(this.id),
      title: data.title,
      description: data.description
    })
    this.router.navigate(['/'])
  }
}
