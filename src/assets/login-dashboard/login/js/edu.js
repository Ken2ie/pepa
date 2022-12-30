 // Import the functions you need from the SDKs you need

 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";

 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";

 
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification  } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";


let email = document.getElementById('email');
let password = document.getElementById('password');



 // TODO: Add SDKs for Firebase products that you want to use

 // https://firebase.google.com/docs/web/setup#available-libraries


 // Your web app's Firebase configuration

 // For Firebase JS SDK v7.20.0 and later, measurementId is optional

 const firebaseConfig = {

   apiKey: "AIzaSyA1SF37Kr9KrWFKnb7_nKH8vAlJDyo41zo",

   authDomain: "pepa-tech.firebaseapp.com",

   projectId: "pepa-tech",

   storageBucket: "pepa-tech.appspot.com",

   messagingSenderId: "1509568221",

   appId: "1:1509568221:web:07dca41cbb7e9fa4847534",

   measurementId: "G-BLVGH1MKQF"

 };


 // Initialize Firebase

 const app = initializeApp(firebaseConfig);

 const analytics = getAnalytics(app);

 // Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Register
function register(){
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert(user + ', you are registered in succefully.');
    sendEmailVerification(auth.currentUser)
  .then(() => {
    // Email verification sent!
    alert(' Please check your email for the verfication link');
  });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  });
}

log();

function log(){
   console.log('Working');
}

//   Sign In
 function login(){
    //  Auth
onAuthStateChanged(auth, (user) => {
    if (email, password) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      
      alert('you are signed in')
    } else {
      // User is signed out
      // ...
    }
  });

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
    });

 }

  
