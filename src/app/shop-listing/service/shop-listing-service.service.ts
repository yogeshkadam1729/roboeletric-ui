import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopListingServiceService {

  private GET_SHOP_LISTING: string = 'http://localhost:9091'+'/shops/getAllShops';

  constructor(private http:HttpClient) { }

  getAllShopListing():Observable<any>{
    return this.http.get<any>(this.GET_SHOP_LISTING).pipe(catchError(this.handleError));
  }

  private handleError(error:any){
    console.error('Error occured',error);
    return throwError(error.message || error);
  }
}
