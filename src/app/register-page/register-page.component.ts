import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder ,Validators} from '@angular/forms';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  profileForm: FormGroup;
  selectedFile!: File;

  constructor(private formBuilder: FormBuilder) {
    this.profileForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['',Validators.required],
      country: ['',Validators.required],
      phoneNumber: ['',Validators.required],
      dob: ['',Validators.required],
      gender: ['',Validators.required],
      profileImage: ['',Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
      const formData = new FormData();
      formData.append('name', this.p['firstName'].value);
      formData.append('lastName', this.p['lastName'].value);
      formData.append('email', this.p['email'].value);
      formData.append('username', this.p['username'].value);
      formData.append('phoneNumber', this.p['phoneNumber'].value);
      formData.append('dob', this.p['dob'].value);
      formData.append('gender', this.p['gender'].value);
      formData.append('profileImage', this.p['profileImage'].value);
      formData.append('image', this.selectedFile, this.selectedFile.name)
    }
  }

  get p() { return this.profileForm.controls; }


  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

}
