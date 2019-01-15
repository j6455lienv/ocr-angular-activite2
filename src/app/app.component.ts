import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    const config = {
      apiKey: "AIzaSyCyCCmLgnQbR-nCMV9q9E2WEURnQ6UnwJo",
      authDomain: "blog-6c43d.firebaseapp.com",
      databaseURL: "https://blog-6c43d.firebaseio.com",
      projectId: "blog-6c43d",
      storageBucket: "blog-6c43d.appspot.com",
      messagingSenderId: "76756231857"
    };
    firebase.initializeApp(config);

  }
}
