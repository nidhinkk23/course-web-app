import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { CartService } from '../services/cart.service';

@Injectable({
  providedIn: 'root'
})
export class CartResolver implements Resolve<boolean> {
  constructor(private cartService: CartService){

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.cartService.getCartDetails();
  }
}
