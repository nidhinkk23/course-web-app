import { Component, OnInit } from '@angular/core';
import { ApiservicesService } from '../services/apiservices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logoutFlag = false;
  constructor(private apiservicesService: ApiservicesService,
    private router: Router
    ) { }

  ngOnInit(): void {
    if(this.apiservicesService.loginData){
      this.logoutFlag = true;
    }else{
      this.logoutFlag = false;

    }
    this.apiservicesService.loginedFlag$.subscribe((data)=>{
      this.logoutFlag = data;
    })
  }

  logOut(): void{
    this.logoutFlag = false;
    this.apiservicesService.logout();
    console.log(this.logoutFlag);
    this.router.navigate(['./sign-in']);
  }
}
