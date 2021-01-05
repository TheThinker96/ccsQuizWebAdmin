import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';

const firebaseConfig = {
  apiKey: 'AIzaSyByrTYB1d-pulMf_GaHvGKah2UrhkvwIqU',
    authDomain: 'ccsquiz-5d6cc.firebaseapp.com',
    databaseURL: 'https://ccsquiz-5d6cc-default-rtdb.firebaseio.com',
    projectId: 'ccsquiz-5d6cc',
    storageBucket: 'ccsquiz-5d6cc.appspot.com',
    messagingSenderId: '732627087143',
    appId: '1:732627087143:web:a5de555f058b02504cc302',
    measurementId: 'G-KN5SGLPF9J'
};



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
