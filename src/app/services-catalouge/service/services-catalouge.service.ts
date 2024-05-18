import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesCatalougeService {

  private GET_SERVICES_BASED_ON_SHOP = 'http://localhost:9091/serviceCatalouge/getShopDetailsAndServices/'
  
  constructor(private http:HttpClient) { }

  getAllServicesAvailableBasedOnShopId(id:number): Observable<any>
  {
    return this.http.get<any>(this.GET_SERVICES_BASED_ON_SHOP+id).pipe(
      catchError(this.handleError)
    );
  }
  private handleError(error:any)
  {
    console.error('error ocuured',error);
    return throwError(error.message || error);
  }
}
