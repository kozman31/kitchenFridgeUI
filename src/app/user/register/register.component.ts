import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;
  // tslint:disable-next-line: max-line-length
  emailPattern = (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

  profile = this.formBuilder.group({
    firstName: '',
    lastName: '',
    emailAddr: ['', [
      Validators.required,
      Validators.pattern(this.emailPattern)
    ]],
    confirmEmail: ['', [
      Validators.required,
    ]]
  }, {validators: this.emailMatcher});

  password = this.formBuilder.group({
    newPassword: ['', [
      Validators.required,
      Validators.minLength(8)
    ]],
    confirmPassword: ['', [
      Validators.required,
      Validators.minLength(8)
    ]]
  }, {validators: this.passwordMatcher});

  constructor(private formBuilder: FormBuilder, private userService: UserService) {}

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      profile: this.profile,
      password: this.password,
      displayName: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  passwordMatcher(form: FormGroup) {
    const condition  = form.get('newPassword').value !== form.get('confirmPassword').value;
    return condition ? {passwordMismatch: true} : null;
  }

  emailMatcher(form: FormGroup) {
    const condition  = form.get('emailAddr').value !== form.get('confirmEmail').value;
    return condition ? {emailMismatch: true} : null;
  }

  submit() {
    if (this.registrationForm.valid) {
      this.userService.registerUser(this.registrationForm);
    }
  }

  reset() {
    this.registrationForm.reset();
  }
}
