import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder ,Validators} from '@angular/forms';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  profileForm: FormGroup;
  selectedFile: File | undefined;

  constructor(private formBuilder: FormBuilder) {
    this.profileForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: [''],
      country: [''],
      phoneNumber: [''],
      dob: [''],
      gender: [''],
      profileImage: ['']
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.profileForm.valid) {
      // Implement logic for form submission here
      console.log(this.profileForm.value);
    }
  }

  get p() { return this.profileForm.controls; }


  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    // Implement logic to handle file upload
  }

}
