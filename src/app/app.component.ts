import { Component } from '@angular/core';
import firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TestProjectPlan';

  constructor() {
    var firebaseConfig = {
      apiKey: "AIzaSyDXVyA5AovaylDjhDzFyDVz_FCafFC2-HI",
      authDomain: "testplanproject-61b15.firebaseapp.com",
      databaseURL: "https://testplanproject-61b15-default-rtdb.firebaseio.com",
      projectId: "testplanproject-61b15",
      storageBucket: "testplanproject-61b15.appspot.com",
      messagingSenderId: "868018947937",
      appId: "1:868018947937:web:6f12468eafba9725c26720",
      measurementId: "G-VP4Q4XPMS3"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }
}
