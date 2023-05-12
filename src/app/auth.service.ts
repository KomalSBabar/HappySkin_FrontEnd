import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoggedIn = new BehaviorSubject(false);
  user_id = new BehaviorSubject('');
  cart_id = new BehaviorSubject('');
  token =  localStorage.getItem('token');
  constructor() { 
    this. token =  localStorage.getItem('token');
  console.log('auth service inside ggg',this.token);
   if (this.token === null) {
     this.logoutUser(); 
   } else {
     this. loginUser();
   } }

  logoutUser() {
    this.isLoggedIn.next(false);    
  }
  loginUser() {
    this.isLoggedIn.next(true);
  }

  // checkout(){
  //   this.isLoggedIn.next(true);
  // }


  getUserId(id:any)
  {
    console.log('id',id)
    this.user_id.next(id)
  }

  getCartId(id:any){

  }


}
