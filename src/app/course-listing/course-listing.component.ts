import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../services/course.service';
import { ApiservicesService } from '../services/apiservices.service';

@Component({
  selector: 'app-course-listing',
  templateUrl: './course-listing.component.html',
  styleUrls: ['./course-listing.component.css']
})
export class CourseListingComponent implements OnInit {
  courseList = [];
  constructor(private route: ActivatedRoute,
    private courseService: CourseService,
    private apiservicesService: ApiservicesService) { }

  ngOnInit(): void {
     console.log(this.route.snapshot.data?.['resolveData']['data']['results']);
     this.courseList = this.route.snapshot.data?.['resolveData']['data']['results'];
  }

  addToCart(course: any): void{
    console.log(course);
    // this.apiservicesService.alertService({
    //   'message':'success',
    //   'show':true
    // })
    this.courseService.addToCart({
      "course": [course.uid],
      "user": course.user.uid,
      "cart_status": true
    }).subscribe((data) => {
      console.log(data);
      if(data.cart_status){
        this.apiservicesService.alertService({
          'message':'success',
          'show':true
        })
      }else{
        this.apiservicesService.alertService({
          'message':'Failed,Try again',
          'show':true
        })
      }
    })
  }

}
