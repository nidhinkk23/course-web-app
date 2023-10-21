import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiservicesService } from '../services/apiservices.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private apiservicesService: ApiservicesService,
    private router: Router
    ){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.apiservicesService.loginData){
        this.router.navigate(['./cart-listing']);
        return true;
      }else{
        this.apiservicesService.logout();
        this.router.navigate(['./sign-in']);
        return false;
      }
  }
  
}
