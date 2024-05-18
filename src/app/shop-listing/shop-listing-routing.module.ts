import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopListingComponent } from './component/shop-listing.component';


const routes:Routes=[
  {path:'', component:ShopListingComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopListingRoutingModule { }
