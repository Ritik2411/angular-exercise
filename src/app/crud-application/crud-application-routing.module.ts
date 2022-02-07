import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { Page404Component } from "../page404/page404.component"
import { EditPageComponent } from "./edit-page/edit-page.component"
import { HomeCrudComponent } from "./home-crud/home-crud.component"

const routes:Routes = [
    {
        path:'',
        component: HomeCrudComponent
    },

    {
        path:'editcontact/:id',
        component: EditPageComponent
    },

    {
        path: '**',
        component: Page404Component
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class CrudRoutingModule{ }