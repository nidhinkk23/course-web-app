import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { CourseService } from '../services/course.service';

@Injectable({
  providedIn: 'root'
})
export class CourseResolver implements Resolve<boolean> {
  constructor(private courseService: CourseService){

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.courseService.getCourseDetails();
  }
}
