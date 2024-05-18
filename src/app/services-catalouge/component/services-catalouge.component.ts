import { Component, OnInit } from '@angular/core';
import { ServicesCatalougeService } from '../service/services-catalouge.service';
import { ServiceCatalouge } from '../../models/ServiceCatalouge';
import { ActivatedRoute, Router } from '@angular/router';
import { Devices } from 'src/app/models/Devices';
import { OrderSummary } from 'src/app/models/OrderSummary';

@Component({
  selector: 'app-services-catalouge',
  templateUrl: './services-catalouge.component.html',
  styleUrls: ['./services-catalouge.component.css']
})
export class ServicesCatalougeComponent implements OnInit {

  serviceCatalougeResponse: ServiceCatalouge = {
    devices: new Set(),
    shop: {}
  };
  shopId: number = 0;
  deviceItemCart: Devices[] = [];
  orderSummary!: OrderSummary;
  constructor(private route:ActivatedRoute,private router:Router, private  serviceCatalouge :ServicesCatalougeService) { }

  ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        this.shopId = Number(params.get('id'));
        this.getShopAndAllServicesAvaialble(this.shopId);

      })
  }

  getShopAndAllServicesAvaialble(id:number)
  {
      this.serviceCatalouge.getAllServicesAvailableBasedOnShopId(id).subscribe(data => {
        this.serviceCatalougeResponse = data;
      })
  }

  increment(device: any) {
    device.quantity++;
    const index = this.deviceItemCart.findIndex(item => item.id === device.id);
    if (index === -1) {
      // If record does not exist, add it to the array
      this.deviceItemCart.push(device);
    } else {
      // If record exists, update it in the array
      this.deviceItemCart[index] = device;
    }
  }

  decrement(device: any) {
    if (device.quantity > 0) {
      device.quantity--;

      const index = this.deviceItemCart.findIndex(item => item.id === device.id);
      if (this.deviceItemCart[index].quantity == 0) {
        this.deviceItemCart.splice(index, 1);
      } else {
        // If record exists, update it in the array
        this.deviceItemCart[index] = device;
      }

    }
  }

  onCheckOut() {
    this.deviceItemCart;
    
    this.orderSummary.devices = this.deviceItemCart;
    this.orderSummary.shop = this.serviceCatalougeResponse?.shop;
    this.router.navigate(['/orderSummary'], { queryParams: { data: JSON.stringify(this.orderSummary) } });
  }

}
