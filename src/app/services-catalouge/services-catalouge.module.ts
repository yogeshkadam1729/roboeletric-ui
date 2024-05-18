import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesCatalougeRoutingModule } from './services-catalouge-routing.module';
import { ServicesCatalougeComponent } from './component/services-catalouge.component';



@NgModule({
  declarations: [
    ServicesCatalougeComponent
  ],
  imports: [
    CommonModule,
    ServicesCatalougeRoutingModule
  ]
})
export class ServicesCatalougeModule { }
