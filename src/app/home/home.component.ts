import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isAuthenticated: boolean;

  constructor(public oktaAuth: OktaAuthService) {
  }

  async ngOnInit() {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    console.log('this.isAuthenticated: ', this.isAuthenticated);
    // Subscribe to authentication state changes
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean)  => {
        console.log('inside subscribe this.isAuthenticated: ', this.isAuthenticated);
        this.isAuthenticated = isAuthenticated
      }
    );
  }
}
