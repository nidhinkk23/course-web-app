import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConstantsService } from './constants.service';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient,) { }

  getProfileDetails(){
    return this.http.get<any>(ConstantsService['APIS'].AUTHENTICATION.PROFILE_DETAILS)
  }
}
