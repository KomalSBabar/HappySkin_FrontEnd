import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topical',
  templateUrl: './topical.component.html',
  styleUrls: ['./topical.component.css']
})
export class TopicalComponent implements OnInit {
  error:boolean=false;
  questionFormgroup1:any;
  constructor(private router: Router, private _formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.questionFormgroup1 = new FormGroup({

      Tretinoin: new FormControl('', [Validators.required]),
    })
  }


  topical_back_skincare_page(){
    this.router.navigate(['skincareplan']);
  }

  continue1(){

  if(this.questionFormgroup1.valid){
    this.error = false;
      this.router.navigate(['productupsell']);
  }else{
    this.error = true;
  }

     
  }




}
