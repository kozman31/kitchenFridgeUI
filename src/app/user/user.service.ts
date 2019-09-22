import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  registerUser(registerForm: FormGroup) {
    throw new Error("Method not implemented.");
  }
}
