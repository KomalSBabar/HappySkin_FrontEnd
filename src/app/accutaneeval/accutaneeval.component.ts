import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accutaneeval',
  templateUrl: './accutaneeval.component.html',
  styleUrls: ['./accutaneeval.component.css']
})
export class AccutaneevalComponent implements OnInit {
  formgroup1:any;

  error:boolean =false;

  constructor(private router:Router) { }

  ngOnInit(): void {

    this.formgroup1 = new FormGroup({
      tick:new FormControl('',[Validators.required])
     
       })

  }

  
  accutaneeval_back_skincareplan(){
    this.router.navigate(['skincareplan']);
  }

  continue(){
      if(this.formgroup1.valid){
       this.error=false; 
         this.router.navigate(['acnebother']);
      }
      else{
        this.error=true;
      }
  }


}
