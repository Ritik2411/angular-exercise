import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeCrudComponent } from './home-crud/home-crud.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { EditPageComponent } from './edit-page/edit-page.component';
import { CrudRoutingModule } from './crud-application-routing.module';
import { Page404Component } from './page404/page404.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeCrudComponent,
    EditPageComponent,
    Page404Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    CrudRoutingModule
  ],
  exports:[
    HeaderComponent,
    HomeCrudComponent,
    EditPageComponent
  ]
})
export class CrudApplicationModule { }
