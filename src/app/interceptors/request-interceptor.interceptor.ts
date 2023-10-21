import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const customReq = request.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        // 'Authorization': 'YOUR_TOKEN_HERE' 
      }
    });
    const token = localStorage.getItem('token');
    if (token) {
      const modifiedReq = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        }
      });
      return next.handle(modifiedReq);
    }else{
      return next.handle(customReq);
    }
  }
}
