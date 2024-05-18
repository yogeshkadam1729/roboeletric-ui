import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { ShopListingModule } from './shop-listing/shop-listing.module';
import { HttpClientModule } from '@angular/common/http';
import { ServicesCatalougeModule } from './services-catalouge/services-catalouge.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    ShopListingModule,
    HttpClientModule,
    ServicesCatalougeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
