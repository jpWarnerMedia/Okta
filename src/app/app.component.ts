import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo';
  isAuthenticated: boolean;

  constructor(public oktaAuth: OktaAuthService) {
  }

  async ngOnInit() {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    console.log('app component this.isAuthenticated: ', this.isAuthenticated);

    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean)  => {
        console.log('subscribe app component this.isAuthenticated: ', this.isAuthenticated);
        this.isAuthenticated = isAuthenticated
      }
    );
  }
}
