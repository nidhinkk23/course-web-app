import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from './constants.service';
import { tap } from 'rxjs/operators';
import {BehaviorSubject,Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiservicesService {

  public alertActivation$: BehaviorSubject<any> = new BehaviorSubject<any>({'message':'','show':false});
  public loginedFlag$: Subject<any> = new Subject<any>();

  constructor(private http: HttpClient,
    ) { }

  signIn(data: any){
    return this.http.post<any>(ConstantsService['APIS'].AUTHENTICATION.SIGN_IN,JSON.stringify(data)).pipe(
      tap(response=>{
        const token = response.data.access;
        if (token) {
          localStorage.setItem('token', token); 
          localStorage.setItem('loginData', response.data); 
        }
      })
    )
  }

  get loginData(): any{
    const loginData = localStorage.getItem('loginData');
    return loginData ? loginData : null;
  }
  
  logout() {
    localStorage.removeItem('token'); 
    localStorage.removeItem('loginData'); 
  }

  getToken() {
    return localStorage.getItem('token');
  }

  alertService(value: any): void{
    this.alertActivation$.next(value);
  }



}
