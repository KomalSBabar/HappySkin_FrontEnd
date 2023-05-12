import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ApiService } from '../api.service';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  registerForm: any;
  loginForm: any;

  constructor(public apiService:ApiService ,private router: Router ) { }

  ngOnInit(): void {

    this.registerForm = new FormGroup({
      name:new FormControl(),
      email:new FormControl(),
      password:new FormControl(),
      c_password:new FormControl(),
      phone_no:new FormControl(),
      gender:new FormControl()
    })

  }

  onSubmit(){
   
    this.apiService.register(this.registerForm.value).subscribe(res=>{
      alert('userregisterd');
      console.log("ok",res)
    })
  }

  login(){
      this.router.navigate(['/login']);
      
      }
}
