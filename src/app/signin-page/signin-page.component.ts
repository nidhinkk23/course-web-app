import { Component, OnInit } from '@angular/core';
import { ApiservicesService } from '../services/apiservices.service';
import { FormGroup, FormBuilder ,Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.css']
})
export class SigninPageComponent implements OnInit {
  signInForm!: FormGroup;
  errorMsgFlag = false;
  constructor( private apiservicesService: ApiservicesService,
    private formBuilder: FormBuilder,
    private router: Router
    ) {
      this.signInForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      });
     }

  ngOnInit(): void {
  }

  get f() { return this.signInForm.controls; }

  onSubmit() {
    if (this.signInForm.valid) {
      console.log(this.signInForm.value);
      this.apiservicesService.signIn({
        'username':this.f['email'].value,
        'password':this.f['password'].value,
      }).subscribe(response=>{
        if(response.code == 200){
          this.router.navigate(['./cart-listing']);
          this.apiservicesService.loginedFlag$.next(true);
        }else{
          this.signInForm.patchValue({
            email : '',
            password : '',
          })
          this.errorMsgFlag = true;
        }
        
      })
    }
  }

}
