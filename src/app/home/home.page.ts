import { Component } from '@angular/core';

import firebase from 'firebase/app';
import { environment } from 'src/environments/environment';
import { AuthService } from '../services/auth.service';

firebase.initializeApp(environment.firebaseConfig);

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private auth: AuthService
  ) {}

  openFBSign() {
    this.auth.signInWithFB();
  }

}
