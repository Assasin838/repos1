import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-signup',
  templateUrl: 'signup.component.html',
  styleUrls: ['signup.component.css'],
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(40)]],
      lastName: ['', [Validators.required, Validators.maxLength(40)]],
      phone: [
        '',
        [Validators.required, Validators.pattern('^[0-9]{10}$')],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.maxLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.maxLength(8)]],
    });
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      console.log('Форма відправлена!', this.signupForm.value);
    } else {
      console.log('Форма невалідна');
    }
  }
}

