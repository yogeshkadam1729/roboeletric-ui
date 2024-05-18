import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesCatalougeComponent } from './component/services-catalouge.component';

const routes: Routes = [
  {path:'services-catalouge/:id', component:ServicesCatalougeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesCatalougeRoutingModule { }
