import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyCbcqLdhJOzBQZagQdnM7Ju-h0nbR88YPc",
      authDomain: "bookselves-28db2.firebaseapp.com",
      databaseURL: "https://bookselves-28db2.firebaseio.com",
      projectId: "bookselves-28db2",
      storageBucket: "bookselves-28db2.appspot.com",
      messagingSenderId: "394844120940",
      appId: "1:394844120940:web:676a5c432b2e69b157f549"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
