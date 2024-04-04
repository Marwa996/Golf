import { Component } from '@angular/core';
import { FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { NgIf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  hide = true;
  

  loginForm: FormGroup = new FormGroup({
    // phone_number : new FormControl(null, [Validators.required, Validators.maxLength(11), Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")])
});

  phone_number=new FormControl(null, [Validators.required, Validators.maxLength(11), Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]);

  Password = new FormControl(null, [Validators.required, Validators.minLength(5)])
  

  getErrorMessagePhone() {
    if (this.phone_number.hasError('required')) {
      return 'You must enter a value';
    }

    return this.phone_number.hasError('maxLength') ? ' valid  11 number' : '';

  }

  getErrorMessagePassword() {
    if (this.Password.hasError('required')) {
      return 'You must enter a value';
    }

    return this.Password.hasError('minLength') ? ' valid Password 5 number' : '';
  }

  Data_form(){
    let login = { "phone_number": this.phone_number.value, "password": this.Password.value };
    console.log(login) 
  }
}
