import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any;
  k:any;
  status: boolean | undefined;
  id: any;
  resp: any;
  a: any;
  // b:any;


  constructor( private toastr: ToastrService,public apiservice:ApiService,private router: Router, private authService: AuthService ) { }

  ngOnInit(): void {
   
    // localStorage.setItem('SeesionUser',this.k) 
    this.loginForm = new FormGroup({
      email:new FormControl(),
      password:new FormControl(),
    })
  }

  login(){
    console.log("ok ",this.loginForm.value)
    this.apiservice.login(this.loginForm.value).subscribe(res=>{
      console.log(res)
      this.toastr.success(res.message);
   this. resp = res.data
   
    this. a = this.resp ['id']
    // this. b = this.resp['email']
      if(res.success === true)
      {
        console.log('9',this.a);
     localStorage.setItem('token',res.data.token)
     localStorage.setItem('userid',res.data.id)
        this.authService.loginUser();
        // this.apiservice.settoken(res.data.token);
        this.authService.getUserId(this.a)

        // this.id = res.id;
       
        this.authService.isLoggedIn.subscribe((status) => {
      
          this.router.navigate(['/home/', this.a]
          // {queryParams:{id:'res.data.id'}}
          );  
          
      
    
          // this.status = status  
          // this.authService.loginUser();           
        })
           
      }
    })

        // this.router.navigate([''])
        // .then(() => {
        //   window.location.reload();
        // });
      // this.k = localStorage.getItem('token')
    
      }



      Register(){
        this.router.navigate(['/reg']);
      }

    forgetp(){
      this.router.navigate(['/forgetpass']);
      
      }
   

}
