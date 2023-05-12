import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {  Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import { ApiService } from '../api.service';
declare var $: any;
@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})

export class ForgetpasswordComponent implements OnInit {
  userForm :any;
  forgetpform: any;
  useremail: any;
  fpassform: any;
  constructor(public apiservice:ApiService,private router: Router) { }

  ngOnInit(): void {
    this.forgetpform = new FormGroup({
      email:new FormControl(),
      password :new FormControl(),
      c_password :new FormControl(),
    })

    // this.fpassform = new FormGroup({
    //   parentemail:new FormControl()
    // })
  }


forgetp(){
console.log("hello",this.forgetpform.value)

let payload ={
  "email": this.forgetpform.value.email,
  "password":this.forgetpform.value.password,
  "c_password":this.forgetpform.value.c_password,
}



  this.apiservice.forgetpass(payload).subscribe(res=>{
    console.log("inside",res)

})
  
  // this.forgetpform.patchValue({email:this.useremail})

  // let payload ={
      
  //   // "email":email,
  //   // "password":password,
  //   // "c_password":c_password,
  // } 
   }

// openModel()
// {
//   let element = document.getElementById('parentemail');
//   if(element!== null)
//   {
//       // this.useremail = element.val
//   }
// }

  submit(){
  let em = $('#parentemail').val();
  alert(em)
  this.forgetpform.patchValue({email:em})
   $('#exampleModal').modal('show');
   return false;
 }
  login() {
    this.router.navigate(['/login']);
  }
  registration(){
    this.router.navigate(['/reg']);
  }





}




