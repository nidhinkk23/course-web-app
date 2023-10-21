import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConstantsService } from './constants.service';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient,) { }

  getCourseDetails(){
    return this.http.get<any>(ConstantsService['APIS'].AUTHENTICATION.COURSE_LISTING)
  }

  addToCart(data: any): Observable<any>{
    return this.http.post<any>(ConstantsService['APIS'].AUTHENTICATION.ADD_TO_CART,data)
  }
}
