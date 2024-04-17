import { Component } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  hide = true;
  loginForm: FormGroup = new FormGroup({});

  phoneNumber = new FormControl(null, [
    Validators.required,
    Validators.maxLength(11),
    Validators.pattern('^01[0125][0-9]{8}$'),
  ]);

  password = new FormControl(null, [
    Validators.required,
    Validators.minLength(5),
  ]);

  getErrorMessageForPhoneNumberControl() {
    if (this.phoneNumber.hasError('required')) {
      return 'You must enter a value';
    }
    return 'Invalid phone number (max 11 digits)';
  }

  getErrorMessageForPasswordControl() {
    if (this.password.hasError('required')) {
      return 'You must enter a value';
    }
    return 'Invalid password (min 5 digits)';
  }

  userLoginData() {
    let login = {
      phone_number: this.phoneNumber.value,
      password: this.password.value,
    };
  }
}
