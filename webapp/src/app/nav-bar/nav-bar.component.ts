import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router, public auth: AuthenticationService) { }

  ngOnInit(): void {
  }
  /*
  * Functionality to load home page on clicking the logo
  * */
  loadHome() {
    const url = 'home';
    this.router.navigateByUrl(url).then(e => {
      if (e) {
        console.log('Navigation is successful!');
      } else {
        console.log('Navigation has failed!');
      }
      console.log(this.auth.isAdmin);
  });
  }
}

