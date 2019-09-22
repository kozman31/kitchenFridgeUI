import { Component, OnInit, Output, Input } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {

  @Input() profileGroup: FormGroup;

  @Output() invalidEmailMsg = 'Invalid Email Address';

  emailAddr: AbstractControl;
  confirmEmail: AbstractControl;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.emailAddr = this.profileGroup.get('emailAddr');
    this.confirmEmail = this.profileGroup.get('confirmEmail');
  }

  checkErrorS() {
    const emailValid = this.emailAddr.hasError('pattern');
    if (this.profileGroup.hasError('emailMismatch')) {
      this.confirmEmail.setErrors({invalid: true});
    } else {
      this.emailAddr.updateValueAndValidity();
      this.confirmEmail.updateValueAndValidity();
    }
    return emailValid;
  }
}
