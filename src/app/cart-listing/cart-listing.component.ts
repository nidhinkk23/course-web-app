import { Component, OnInit } from '@angular/core';
import { CourseService } from '../services/course.service';
import { ApiservicesService } from '../services/apiservices.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart-listing',
  templateUrl: './cart-listing.component.html',
  styleUrls: ['./cart-listing.component.css']
})
export class CartListingComponent implements OnInit {
  cartList = [];
  totalAmount!: number;
  constructor(
    private courseService: CourseService,
    private apiservicesService: ApiservicesService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.data?.['resolveData']['data']['results']);
     this.cartList = this.route.snapshot.data?.['resolveData']['data']['results'];
     this.totalAmount = this.cartList.reduce((acc,item)=> acc + item?.['price'],0) ;
  }

  removeItem(item: any): void{
    this.cartList = this.cartList.filter(value => value?.['id'] != item.id)
  }

}
