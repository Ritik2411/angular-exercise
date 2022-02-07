import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Task5Component } from './task5/task5.component';
import { RedColDirective } from './task5/red-col.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { Task4Component } from './task4/task4.component';
import { Page404Component } from './page404/page404.component';
import { SubServicesComponent } from './sub-services/sub-services.component';
import { Task3Component } from './task3/task3.component';
import { ChildComponent } from './child/child.component';
import { Task2Component } from './task2/task2.component';
import { CrudApplicationModule } from './crud-application/crud-application.module';
import { CrudApplication } from './crud-application/crud-applcaiton.component';
import { Task6Component } from './task6/task6.component';
import { Task7Component } from './task7/task7.component';
import { Task8Component } from './task8/task8.component';
import { UsdInrPipe } from './pipes/usd-inr.pipe';
import { Childt7Component } from './childt7/childt7.component';

@NgModule({
  declarations: [
    AppComponent,
    Task5Component,
    RedColDirective,
    HomeComponent,
    ContactComponent,
    Task4Component,
    Page404Component,
    SubServicesComponent,
    Task3Component,
    ChildComponent,
    Task2Component,
    CrudApplication,
    Task6Component,
    Task7Component,
    Task8Component,
    UsdInrPipe,
    Childt7Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CrudApplicationModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
