import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguradServiceService {

  constructor(private Authguardservice: AuthguradServiceService, private router: Router) {}  
  canActivate(){  
    if (!this.Authguardservice.gettoken()) {  
        this.router.navigateByUrl("/login");  
    }  
    return this.Authguardservice.gettoken();  
}  
  gettoken(){  
   return !!localStorage.getItem("SeesionUser");  
   } 
}
