import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acnebother',
  templateUrl: './acnebother.component.html',
  styleUrls: ['./acnebother.component.css']
})
export class AcnebotherComponent implements OnInit {
  formgroup1: any;
  formgroup2: any;
  error: boolean = false;
  error_len :boolean = false;
  div_first: any;
  div_second: any;
  formgroup3: any;
  div_third: any;
  div_fourth: any;
  formgroup4: any;
  div_fifth: any;
  formgroup5:any;
 
  constructor(private router: Router) { }

  ngOnInit(): void {

    this.formgroup1 = new FormGroup({
      depression: new FormControl('', [Validators.required])
    })

    this.formgroup2 = new FormGroup({
      fam_depression: new FormControl('', [Validators.required])
    })


    this.formgroup3 = new FormGroup({
      history_health_issue: new FormControl('', [Validators.required])
    })

    this.formgroup4 = new FormGroup({
      weight: new FormControl('', [Validators.required,Validators.maxLength(3), Validators.pattern("^[0-9]*$")])
    })

    this.formgroup5 = new FormGroup({
      height1: new FormControl('', [Validators.required,Validators.maxLength(2), Validators.pattern("^[0-9]*$")]),
      height2: new FormControl('', [Validators.required,Validators.maxLength(2), Validators.pattern("^[0-9]*$")])
    })




  }

  // had depresion
  continue1() {
    if (this.formgroup1.valid) {
      this.error = false;

      this.div_first = document.getElementById('div1');
      this.div_second = document.getElementById('div2');
      this.div_first.style.display = 'none';
      this.div_second.style.display = 'block';


    } else {
      this.error = true;
    }
  }

  acccnebother_back_accutaneeval() {
    this.router.navigate(['accutaneeval']);
  }

  // fam had depression

  continue2() {
    if (this.formgroup2.valid) {
      this.error = false;
      this.div_first = document.getElementById('div1');
      this.div_second = document.getElementById('div2');
      this.div_third = document.getElementById('div3');
      this.div_fourth = document.getElementById('div4');
      this.div_first.style.display = 'none';
      this.div_second.style.display = 'none';
      this.div_third.style.display = 'block';



    } else {
      this.error = true;
    }
  }
  div2_back_div1() {

    this.div_first = document.getElementById('div1');
    this.div_second = document.getElementById('div2');
    this.div_first.style.display = 'block';
    this.div_second.style.display = 'none';

  }

  // history health issue
  continue3() {
    if (this.formgroup3.valid) {
      this.error = false;
      this.div_first = document.getElementById('div1');
      this.div_second = document.getElementById('div2');
      this.div_third = document.getElementById('div3');
      this.div_fourth = document.getElementById('div4');
      this.div_first.style.display = 'none';
      this.div_second.style.display = 'none';
      this.div_third.style.display = 'none';
      this.div_fourth.style.display = 'block';


    } else {
      this.error = true;
    }
  }


  div3_back_div2() {
    this.div_first = document.getElementById('div1');
    this.div_second = document.getElementById('div2');
    this.div_third = document.getElementById('div3');
    this.div_first.style.display = 'none';
    this.div_second.style.display = 'block';
    this.div_third.style.display = 'none'
  }

  // weight 
  continue4() {
    if (this.formgroup4.valid) {
      this.error = false;

      if (this.formgroup4.value.weight > 500) {
        this.error_len = true;
        
      }
      else {
        this.error_len = false;



        this.div_first = document.getElementById('div1');
        this.div_second = document.getElementById('div2');
        this.div_third = document.getElementById('div3');
        this.div_fourth = document.getElementById('div4');
        this.div_fifth = document.getElementById('div5');

        this.div_first.style.display = 'none';
        this.div_second.style.display = 'none';
        this.div_third.style.display = 'none';
        this.div_fourth.style.display = 'none';
        this.div_fifth.style.display = 'block';


      }

    } else {
      this.error = true;
    }
  }
  div4_back_div3() {
    this.div_first = document.getElementById('div1');
    this.div_second = document.getElementById('div2');
    this.div_third = document.getElementById('div3');
    this.div_fourth = document.getElementById('div4');
    this.div_first.style.display = 'none';
    this.div_second.style.display = 'none';
    this.div_third.style.display = 'block';
    this.div_fourth.style.display = 'none';
  }



  continue5(){
    if(this.formgroup5.valid){
      this.error = false;



    }else{
      this.error = true;
    }
  }
  div5_back_div4(){
    this.div_first = document.getElementById('div1');
    this.div_second = document.getElementById('div2');
    this.div_third = document.getElementById('div3');
    this.div_fourth = document.getElementById('div4');
    this.div_fifth = document.getElementById('div5');

    this.div_first.style.display = 'none';
    this.div_second.style.display = 'none';
    this.div_third.style.display = 'none';
    this.div_fourth.style.display = 'block';
    this.div_fifth.style.display = 'none';

  }


}
