import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.scss']
})
export class PasswordFormComponent implements OnInit {

  @Input()passwordGroup: FormGroup;

  newPassword: AbstractControl;
  confirmPassword: AbstractControl;

  constructor() {}

  ngOnInit() {
    this.newPassword = this.passwordGroup.get('newPassword');
    this.confirmPassword = this.passwordGroup.get('confirmPassword');
  }

  checkErrors(errorName: string) {
    if (this.newPassword.hasError('passwordMismatch') || this.newPassword.hasError('minlength')) {
      this.confirmPassword.setErrors({invalid: true});
    } else {
      this.newPassword.updateValueAndValidity();
      this.confirmPassword.updateValueAndValidity();
    }
    if (errorName === 'passwordMismatch') {
      return this.passwordGroup.hasError('passwordMismatch');
    }
    return this.newPassword.hasError('minlength');
  }

}
