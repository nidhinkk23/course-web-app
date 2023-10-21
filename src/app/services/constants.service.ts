import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  constructor() { }

  public static APIS = {
    AUTHENTICATION: {
      'SIGN_IN': `${environment.apiUrl}/users/login/`,
      'PROFILE_DETAILS': `${environment.apiUrl}/users/profile/e4ffde47-cc07-4766-9d2d-7ae0badd6642/`,
      'CART_LISTING': `${environment.apiUrl}/users/e4ffde47-cc07-4766-9d2d-7ae0badd6642/cart/`,
      'COURSE_LISTING': `${environment.apiUrl}/course/`,
      'ADD_TO_CART': `${environment.apiUrl}/users/e4ffde47-cc07-4766-9d2d-7ae0badd6642/cart/add/`,
    }
  }
}
