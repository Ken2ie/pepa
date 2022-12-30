import { inject, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth : AngularFireAuth, private router : Router) { }

  // fireauth = Inject(AngularFireAuth);
  // router = Inject(Router);

    // Login method for Educational

    
  logIn(email : string, password : string){
    this.fireauth.signInWithEmailAndPassword(email,password).then( ()=> {
      localStorage.setItem('token', 'true');
      this.router.navigate(['/edu']);
    });
    alert('Worked');
  }
  
  
  // // Register method for Educational
  
  registerIn(email : string, password : string, firstname : string, lastname : string, id : string, inst : string){
    this.fireauth.createUserWithEmailAndPassword(email, password).then( () => {
      alert('Registeration Succesful');
      this.router.navigate(['/login']);
    });
    alert('Registeration Successful');
  }
  
  
  // // LogOut method for Education
  
  logout(){
    this.fireauth.signOut().then( () => {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    });
    alert('Logged Out');
  }
}
