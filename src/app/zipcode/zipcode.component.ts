import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zipcode',
  templateUrl: './zipcode.component.html',
  styleUrls: ['./zipcode.component.css']
})
export class ZipcodeComponent implements OnInit {
  zipcodeFormgroup:any
  form:any
  div:any
  back:any
  back2:any
  submitted : boolean=false;
  constructor(private router: Router) { }

  ngOnInit(): void {

    this.zipcodeFormgroup = new FormGroup({
      zipcode:new FormControl('',[Validators.required,Validators.maxLength(5)]),

     checkblock: new FormControl('',[Validators.required])
      
    })
    
  }

  get zipcodeFormControls(){

    return this.zipcodeFormgroup.controls
 
  }
  

  sub(){
    this.submitted = true
 
    if (this.zipcodeFormgroup.valid) {
      console.log('valid')
    
        this.form = document.getElementById('div_gayab'); //zipcode_Wala_form
        this.div = document.getElementById('div_dekho');  //continue_wala
             this.form.style.display ='none';
              this.div.style.display ='block';
              this.back2.style.display ='block';
    
    
  }else{
    
  }
}
b(){
  // this.back = document.getElementById('back1').className +=  "back_c";
  // this.back = document.getElementById('back1');
  // this.back.class = 'back_c';

  this.router.navigate(['/home']);
}
b2(){
  
  this.div = document.getElementById('div_dekho');
  this.form = document.getElementById('div_gayab');

  this.div.style.display ='none';
  this.form.style.display='block';
}
birthd(){
   this.router.navigate(['/birthdate']);
}
}
