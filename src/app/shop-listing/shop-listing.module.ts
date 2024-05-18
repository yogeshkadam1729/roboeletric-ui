import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopListingRoutingModule } from './shop-listing-routing.module';
import { ShopListingComponent } from './component/shop-listing.component';
import { Routes } from '@angular/router';



@NgModule({
  declarations: [
    ShopListingComponent
  ],
  imports: [
    CommonModule,
    ShopListingRoutingModule
  ]
})
export class ShopListingModule { }
