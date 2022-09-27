import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './components/edit/edit.component';
import {HomeComponent} from './components/home/home.component'
import {CreateComponent} from './components/create/create.component';
const routes: Routes = [
  {path:'',redirectTo:'inicio',pathMatch:'full'},

  {path:'inicio', component:HomeComponent},
  {path:"editar/:id",component:EditComponent},
  {path:"guardar",component:CreateComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
