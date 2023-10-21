import { Component, OnInit } from '@angular/core';
import { ApiservicesService } from 'src/app/services/apiservices.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  message ='';
  show = false;
  constructor(private apiservicesService: ApiservicesService) { }

  ngOnInit(): void {
    
    this.apiservicesService.alertActivation$.subscribe((data)=>{
      this.message = data.message;
      this.show = data.show;
    })
  }

  hidePopup(): void{
    this.show = false;
  }

}
