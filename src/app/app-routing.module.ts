import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';
import { ServicesComponent } from './services/services.component';

import { SubServicesComponent } from './sub-services/sub-services.component';

const routes: Routes = [
  // {
  //   path:'',
  //   component: HomeComponent
  // },
  // {
  //   path:'services',
  //   component: ServicesComponent,
  //   children:[
  //     {
  //       path:'subservice',
  //       component:SubServicesComponent
  //     }
  //   ]
  // },
  // {
  //   path:'contact',
  //   component: ContactComponent
  // },
  // {
  //   path:'**',
  //   component: Page404Component
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
