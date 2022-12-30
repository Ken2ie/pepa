import { Component, inject } from '@angular/core';
// import { AuthService } from './shared/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from '@angular/fire/auth';
import {  } from "firebase/auth";
import { initializeApp } from "@angular/fire/app";


@Component({
  selector: 'app-educational',
  templateUrl: './educational.component.html',
  styleUrls: ['./educational.component.css'],
  // providers: [AuthService]
})




export class EducationalComponent {

// Sign In and Up ui
  signIn: boolean = true;
  signUp: boolean = false;

  signin(): void {
    this.signIn = true;
    this.signUp = false;
  }
  
  signup():void{
    this.signUp = true;
    this.signIn = false;
  }
  
   firebaseConfig = {
    apiKey: "AIzaSyA1SF37Kr9KrWFKnb7_nKH8vAlJDyo41zo",
    authDomain: "pepa-tech.firebaseapp.com",
    databaseURL: "https://pepa-tech-default-rtdb.firebaseio.com",
    projectId: "pepa-tech",
    storageBucket: "pepa-tech.appspot.com",
    messagingSenderId: "1509568221",
    appId: "1:1509568221:web:07dca41cbb7e9fa4847534",
    measurementId: "G-BLVGH1MKQF"
  };

  //  app = initializeApp(this.firebaseConfig);
  //  auth = getAuth();


  email : string = '';
  password : string = '';


  // login(){
  //   console.log(this.email);
  // }

  // login(){
    
  //      signInWithEmailAndPassword(this.auth, this.email, this.password)
  //      .then((userCredential) => {
  //        // Signed in 
  //        const user = userCredential.user;
 
  //       //  const dt = new Date();
  //       //   update(ref(this.database, 'users/' + user.uid),{
  //       //    last_login: dt,
  //       //  })
 
  //         alert('User loged in!');
  //        // ...
  //      })
  //      .catch((error) => {
  //        const errorCode = error.code;
  //        const errorMessage = error.message;
 
  //        alert(errorMessage);

  //  });

  //  if(this.email == '' && this.password == '' || this.email == '' || this.password == ''){
  //   alert('Please fill in the empty fields')
  //  };
 
  // };

  // login(){
  //   alert('Works');
  //   console.log('Works')
  // }
  // register(){
  //   // alert('Works');
  //   console.log('Works')
  // }
}
