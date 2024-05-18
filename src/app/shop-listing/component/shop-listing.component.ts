import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShopListingServiceService } from '../service/shop-listing-service.service';
import { Shops } from 'src/app/models/Shops';

@Component({
  selector: 'app-shop-listing',
  templateUrl: './shop-listing.component.html',
  styleUrls: ['./shop-listing.component.css']
})
export class ShopListingComponent implements OnInit {

  public shopingList: Shops[] = [];

  constructor(private router:Router,private shopingService:ShopListingServiceService) { }

  ngOnInit(): void {
    this.getAllShopingListing();
  }

  getAllShopingListing()
  {
    this.shopingService.getAllShopListing().subscribe(
      data => {
        this.shopingList = data;
      }
    )
  }

  getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  getRandomImage(): string {
    const imageCount = 8; // Adjust this number based on the number of images in your asset folder
    const randomIndex = this.getRandomNumber(1, imageCount);
    return `${randomIndex}.jpg`; // Replace with your image filename pattern
  }

  onButtonClick(id: any) {
    console.log(id);
    this.router.navigate(['/services-catalouge', id]);
  }

}
