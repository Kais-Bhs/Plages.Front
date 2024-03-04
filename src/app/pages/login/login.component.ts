import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [HttpClient],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatIconModule, MatButtonModule]
})


export class LoginComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  password = new FormControl('', [Validators.minLength(8)]);

  constructor(private http: HttpClient, private router: Router) { }


  processLogin() {
    if (this.email.invalid || this.password.invalid) {
      alert('sssss');
      return;
    }

    const loginData = {
      email: this.email.value,
      password: this.password.value
    };

    this.http.get('http://localhost:8080/pays/getall')
      .subscribe({
        next: (response) => {
          console.log(response);
        },
        complete: () => {
          
          this.router.navigate(['/home']);
        },
        error: (error) => {
          // Handle error response
          console.error();
        }
      });
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getPasswordErrorMessage() {
    return this.password.hasError('minlength') ? 'Password minimum length is 8 characters' : '';
  }

  submitForm() {
    if (this.password.valid) {
      const password = this.password.value;
      // Process the password value
    }
  }
}