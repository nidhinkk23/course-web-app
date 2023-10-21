import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConstantsService } from './constants.service';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient,) { }

  getCartDetails(){
    return this.http.get<any>(ConstantsService['APIS'].AUTHENTICATION.CART_LISTING)
  }
}
