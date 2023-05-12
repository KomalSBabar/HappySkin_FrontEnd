import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-birthdate',
  templateUrl: './birthdate.component.html',
  styleUrls: ['./birthdate.component.css']
})
export class BirthdateComponent implements OnInit {
  birthdateFormgroup:any
  submitted = false;
  maxDobString:any;
  minDobString:any;
  // today:any= new Date;
  // minAge:any
  scope:any
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.birthdateFormgroup = new FormGroup({
      dateOfBirth: new FormControl('',[Validators.required]),

      
    })

    // this.today = new Date()
    // this.minAge = 13
    //   this.scope = new Date(this.today.getFullYear() - this.minAge, this.today.getMonth(), this.today.getDate());

    var yearMS = 365 * (1000 * 60 * 60 * 24); // 365 days
    var now = new Date().getTime();
    var maxDobMS = now - (13 * yearMS);
    var minDobMS = now - (122.5 * yearMS);
    this.maxDobString = new Date(maxDobMS).toISOString().slice(0, 10);
    this.minDobString = new Date(minDobMS).toISOString().slice(0, 10);

  }
  back(){

    this.router.navigate(['/zipcode']);
  }

  reg(){
    this.router.navigate(['/reg']);
  }

  get birthdateFormControls(){
    return this.birthdateFormgroup.controls
  }

  valid_check(){
    this.submitted = true;
    if (this.birthdateFormgroup.valid) {}
    console.log('valid')
    

  }



}


