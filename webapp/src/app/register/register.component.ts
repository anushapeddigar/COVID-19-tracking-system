import { Component } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../services/authentication.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
  credentials: TokenPayload = {
    email: '',
    name: '',
    password: '',
    role: ''
  };


  constructor(private auth: AuthenticationService, private router: Router, private http: HttpClient) {}

  register() {
    console.log(this.credentials);
    this.auth.register(this.credentials).subscribe(() => {
      this.router.navigateByUrl('covid-19-pandemic/app-profile');
    }, (err) => {
      console.error(err);
    });

    // Send/SMS email for registration of user
    this.auth.sendEmailReg(this.credentials.email, this.credentials.name, this.credentials.role).subscribe(success => {
    console.log(success);
  }, error => {
    console.error(error);
  });

  }
}


